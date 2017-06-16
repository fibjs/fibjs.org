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
    var _tmpl = ejs.compile(fs.readFileSync('web/dist/docs.html').toString());

    var guide = 'docs';
    var guide_to = 'web/dist';

    function read_doc(p) {
        var html = marked(fs.readFileSync(p).toString());

        html = html.replace(/href=\".*\.md\"/g, s => {
            s = s.substr(6, s.length - 7).toLowerCase() + ".html";
            s = "/" + path.join(path.dirname(p), s);
            s = 'href="' + s + '"';
            return s;
        });

        return html;
    }

    var groups = {
        "guide": {
            title: '开发指南',
            url: '/docs/guide/readme.md.html',
            toc: read_doc('docs/guide/README.md')
        },
        "module": {
            title: '基础模块',
            url: '/docs/manual/module/readme.md.html',
            toc: read_doc('docs/manual/module/README.md')
        },
        "object": {
            title: '内置对象',
            url: '/docs/manual/object/readme.md.html',
            toc: read_doc('docs/manual/object/README.md')
        }
    };

    function test_group(p) {
        return p.replace("/manual/", "/").split("/")[1];
    }

    recursiveReadSync(guide).forEach(function (file) {
        var p = file.toLowerCase();
        var file1 = path.join(guide_to, p);

        mkdir.mkdirsSync(path.dirname(file1));
        var doc = read_doc(file);
        var r = /<h[1-9]?.*>(.*)<\/h[1-9]?>/.exec(doc);
        var title = r ? r[1] : '';
        fs.writeFileSync(file1 + ".html", _tmpl({
            title: title,
            group: test_group(p),
            groups: groups,
            doc: doc
        }));
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
            jQuery: "jquery"
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
        new WebpackOnBuildPlugin(build_docs)
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
    var basename = path.basename(file, path.extname(file));

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
    }
});

module.exports = webpack_config;