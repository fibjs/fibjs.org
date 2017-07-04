var path = require('path');
var fs = require('fs');
var os = require('os');
var webpack = require('webpack')

var recursiveReadSync = require('recursive-readdir-sync');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var UglifyJsParallelPlugin = require('webpack-uglify-parallel');

var mkdir = require('mkdir');
var marked = require('marked');
var ejs = require('ejs');
var highlight = require('highlight.js');
var Viz;

var WebpackOnBuildPlugin = require('on-build-webpack');

var prod = process.argv.indexOf('--prod') !== -1;
process.env.NODE_ENV = prod ? 'production' : 'development';

function cssLoaders(options) {
    options = options || {}
    // generate loader string to be used with extract text plugin
    function generateLoaders(loaders) {
        var sourceLoader = loaders.map(function (loader) {
            var extraParamChar
            if (/\?/.test(loader)) {
                loader = loader.replace(/\?/, '-loader?')
                extraParamChar = '&'
            } else {
                loader = loader + '-loader'
                extraParamChar = '?'
            }
            return loader + (options.sourceMap ? extraParamChar + 'sourceMap' : '')
        }).join('!')

        return ExtractTextPlugin.extract(sourceLoader)
    }

    return {
        css: generateLoaders(['css']),
        less: generateLoaders(['css', 'less'])
    }
}

function styleLoaders(options) {
    var output = []
    var loaders = cssLoaders(options)

    for (var extension in loaders) {
        var loader = loaders[extension]
        output.push({
            test: new RegExp('\\.' + extension + '$'),
            loader: loader
        })
    }
    return output;
}

marked.setOptions({
    highlight: function (code, lang) {
        if (lang)
            try {
                return highlight.highlight(lang, code).value;
            } catch (e) {}

        return highlight.highlightAuto(code).value;
    }
});

function build_docs() {
    console.log();

    var config = {
        from: 'docs',
        dist: 'web/dist',
        to: 'docs',
        groups: {
            "guide": {
                title: '开发指南',
                path: "guide"
            },
            "module": {
                title: '基础模块',
                path: "manual/module"
            },
            "object": {
                title: '内置对象',
                path: "manual/object"
            }
        }
    };

    var groups = config.groups;

    var old_dot_cache = {};
    var dot_cache = {};
    var has_new = false;

    try {
        old_dot_cache = JSON.parse(fs.readFileSync(path.join(__dirname, "web/dot_cache.json")).toString());
    } catch (e) {}

    var _tmpl = ejs.compile(fs.readFileSync(path.join(config.dist, 'docs.html')).toString());

    function read_doc(p) {
        var md = fs.readFileSync(p).toString();

        md = md.replace(/```dot((.|\n)*?)```/g, (s, s1) => {
            var svg = old_dot_cache[s1];
            if (!svg) {
                if (Viz === undefined)
                    Viz = require('viz.js');
                svg = Viz(s1);
                has_new = true;
            }
            dot_cache[s1] = svg;

            svg = svg.replace(/^<\?xml(.|\n)*?\?>(.|\n)*?<!DOCTYPE(.|\n)*?>/, '')
            return '<div class="dot">' + svg + '</div>';
        });

        var html = marked(md);

        html = html.replace(/href=\"[^"]*\.md\"/g, s => {
            var s1 = s.substr(6, s.length - 7);
            if (s1.indexOf('http') == 0)
                return s;

            s1 = s1.toLowerCase() + ".html";
            s1 = "/" + path.join(path.dirname(p), s1);
            s1 = 'href="' + s1 + '"';
            return s1;
        });

        return html;
    }

    for (var g in groups) {
        groups[g].url = "/" + path.join(config.from, groups[g].path, 'readme.md.html');
        groups[g].toc = read_doc(path.join(config.from, groups[g].path, 'SUMMARY.md'));
    }

    function test_group(p) {
        for (var g in groups)
            if (p.indexOf(groups[g].path) != -1)
                return g;

        return "";
    }

    recursiveReadSync(config.from).forEach(function (file) {
        var basename = path.basename(file);
        if (basename.charAt(0) !== '.') {

            var p = path.relative(config.from, file.toLowerCase());
            p = path.join(config.to, p);
            var file1 = path.join(config.dist, p);

            if (path.extname(file) == '.md') {
                file1 += '.html';

                mkdir.mkdirsSync(path.dirname(file1));
                var doc = read_doc(file);
                var r = /<h[1-9]?.*>(.*)<\/h[1-9]?>/.exec(doc);
                var title = r ? r[1] : '';

                var html = _tmpl({
                    title: title,
                    group: test_group(p),
                    groups: groups,
                    doc: doc
                });

                var re = new RegExp('href=\"\/' + config.from + '/([^"> ]*)\"', 'g');

                html = html.replace(re, (s, u) => {
                    u = path.join('/', config.to, u);
                    return 'href="' + u + '"';
                });

                fs.writeFileSync(file1, html);
            } else
                fs.writeFileSync(file1, fs.readFileSync(file));
        }
    });

    if (has_new)
        fs.writeFileSync(path.join(__dirname, "web/dot_cache.json"), JSON.stringify(dot_cache));
}

function relative() {
    var baseFolder = 'web/dist';
    var re = new RegExp('(href|src)=\"?(\/[^"> ]*)\"?', 'g');

    recursiveReadSync(baseFolder).forEach(function (file) {
        if (path.extname(file) == '.html') {
            var p = path.dirname('/' + path.relative(baseFolder, file));
            var html = fs.readFileSync(file).toString();
            html = html.replace(re, (s, t, u) => {
                u = path.relative(p, u);
                return t + '=' + u;
            });
            fs.writeFileSync(file, html);
        }
    });
}

var webpack_config = {
    entry: {},
    output: {
        path: 'web/dist',
        publicPath: '/',
        filename: 'js/[name].js',
        chunkFilename: 'js/[id].js'
    },
    resolve: {
        root: [path.resolve('./web/src/')]
    },
    module: {
        loaders: [{
                test: /\.(png|jpg)$/,
                loader: 'url',
                query: {
                    limit: 8192,
                    name: 'imgs/[name].[ext]'
                },
                exclude: /node_modules/
            }, {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/
            }, {
                test: /\.(html|htm|shtml)$/,
                loader: 'includes'
            }, {
                test: /\.(woff2?|eot|ttf|otf|svg)(\?.*)?$/,
                loader: 'url',
                query: {
                    limit: 10000,
                    name: 'fonts/[name].[ext]'
                }
            },
            styleLoaders({
                extract: true
            })
        ]
    },
    includes: {
        extensions: ['', '.html', '.shtml', '.htm'],
        pattern: {
            re: /<!--\s*?include\s+?("|')(.+?)\1\s*?\-->/,
            index: 2
        }
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common'
        }),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.$": "jquery",
            "window.jQuery": "jquery"
        }),
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify("production")
            }
        }),
        new ExtractTextPlugin('css/[name].css'),
        new CopyWebpackPlugin([{
            from: path.resolve('./web/src/imgs'),
            to: path.resolve('./web/dist/imgs')
        }]),
        new WebpackOnBuildPlugin(() => {
            build_docs();
            relative();
        })
    ]
};

if (prod) {
    webpack_config.plugins.push(new UglifyJsParallelPlugin({
        workers: os.cpus().length,
        comments: false,
        compressor: {
            warnings: false,
            drop_console: true
        },
        output: {
            comments: false,
            keep_quoted_props: true // fix ie8 property name error
        },
        mangle: {
            keep_fnames: true // fix ie8 function name error
        }
    }));
} else
    webpack_config.devtool = "source-map";

var pages = path.resolve('./web/src/pages');

recursiveReadSync(pages).forEach(function (file) {
    file = path.relative(pages, file);
    var basename = path.basename(file);

    if (basename.charAt(0) !== '.') {
        if (/\.(html|htm|shtml)$/.test(file)) {
            webpack_config.plugins.push(new HtmlWebpackPlugin({
                filename: file,
                template: path.resolve(pages, file),
                inject: true,
                minify: {
                    removeComments: true,
                    collapseWhitespace: true,
                    removeAttributeQuotes: true
                    // more options:
                    // https://github.com/kangax/html-minifier#options-quick-reference
                },
                // necessary to consistently work with multiple chunks via CommonsChunkPlugin
                chunksSortMode: 'dependency',
                chunks: ['common', file.replace(/\.(html|htm|shtml)$/, '')]
            }));
        } else if (/.jsx?$/.test(file)) {
            webpack_config.entry[file.replace(/.jsx?$/, '')] = path.resolve(pages, file);
        } else {
            webpack_config.plugins.push(new CopyWebpackPlugin([{
                from: path.resolve(path.join('./web/src/pages/' + file)),
                to: path.resolve(path.join('./web/dist/' + file))
            }]));
        }
    }
});

module.exports = webpack_config;