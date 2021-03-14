# 快速开发桌面应用
在 fibjs 中启动一个桌面应用是很快的，只需要键入以下代码，即可打开并运行一个 WebView 窗口：
```JavaScript
var gui = require("gui");

gui.open("https://fibjs.org");
```
这段代码会打开一个操作系统内置的 WebView 窗口，并进入 fibjs.org 的网站。

然而，系统内置的 WebView 无论在接口功能还是兼容性，都不能满足强大的桌面应用开发。因此 fibjs 还支持基于 cef 的应用开发。

## cef 简介
cef 全称 Chromium Embedded Framework，是一个基于 Google Chromium 的开源项目。Google Chromium 项目主要是为 Google Chrome 应用开发的，而 cef 的目标则是为第三方应用提供可嵌入浏览器支持。cef 隔离底层 Chromium 和 Blink 的复杂代码，并提供一套产品级稳定的 API，发布跟踪具体 Chromium 版本的分支，以及二进制包。cef 的大部分特性都提供了丰富的默认实现，让使用者做尽量少的定制即可满足需求。cef 的典型应用场景包括：

- 嵌入一个兼容 HTML5 的浏览器控件到一个已经存在的本地应用。
- 创建一个轻量化的壳浏览器，用以托管主要用 Web 技术开发的应用。
- 有些应用有独立的绘制框架，使用 cef 对 Web 内容做离线渲染。
- 使用 cef 做自动化 Web 测试。

cef3 是基于 Chomuim Content API 多进程构架的下一代 cef，拥有下列优势：

- 改进的性能和稳定性（JavaScript 和插件在一个独立的进程内执行）。
- 支持 Retina 显示器。
- 支持 WebGL 和 3D CSS 的 GPU 加速。
- 类似 WebRTC 和语音输入这样的前卫特性。
- 通过 DevTools 远程调试协议以及 ChromeDriver2 提供更好的自动化UI测试。
- 更快获得当前以及未来的 Web 特性和标准的能力。

## 准备运行环境
cef3 的二进制包可以在 [[这个页面](https://cef-builds.spotifycdn.com/index.html)] 下载。其中包含了在特定平台（Windows，Mac OS X 以及 Linux）编译特定版本 cef3 所需的全部文件。不同平台拥有共同的结构，你需要在下载后重新组织资源目录结构。应用资源布局依赖于平台，有很大的不同。

### Windows 操作系统(Windows)
在 Windows 平台上文件夹结构大致如下，你通常可以在二进制包内的 `Release` 和 `Resources` 目录下找到全部文件：
```bash
Application
├── fibjs.exe
├── cef.pak
├── cef_100_percent.pak
├── cef_200_percent.pak
├── cef_extensions.pak
├── cef_sandbox.lib
├── chrome_elf.dll
├── d3dcompiler_47.dll
├── devtools_resources.pak
├── icudtl.dat
├── libEGL.dll
├── libGLESv2.dll
├── libcef.dll
├── libcef.lib
├── locales
│   ├── am.pak
│   ├── ......
│   └── zh-TW.pak
├── snapshot_blob.bin
├── swiftshader
│   ├── libEGL.dll
│   └── libGLESv2.dll
└── v8_context_snapshot.bin
```

### Linux 操作系统(Linux)
在 Linux 平台上文件夹结构大致如下，你通常可以在二进制包内的 `Release` 和 `Resources` 目录下找到全部文件：
```bash
Application
├── fibjs
├── cef.pak
├── cef_100_percent.pak
├── cef_200_percent.pak
├── cef_extensions.pak
├── devtools_resources.pak
├── icudtl.dat
├── libEGL.so
├── libGLESv2.so
├── libcef.so
├── locales
│   ├── am.pak
│   ├── ......
│   └── zh-TW.pak
├── snapshot_blob.bin
├── swiftshader
│   ├── libEGL.so
│   └── libGLESv2.so
└── v8_context_snapshot.bin
```
在 Linux Server 上因为没有桌面环境支持，只可以以 `--headless` 模式运行，当以无窗口模式运行时，还需要安装 xorg：
```sh
apt install xorg
```
在 Linux Server 上，和一些 gpu 支持不好的 Linux Desktop，还需要增加 `--disable-gpu` 启动选项禁用 gpu 渲染。

### Mac X 平台(Mac OS X)
在 Mac X 平台上文件夹结构大致如下，你通常可以在二进制包内的 `Release/Chromium Embedded Framework.framework` 目录下找到全部文件，如果你下载的是 cefclient，那么你需要打开 app 的 Contents 找到相应的文件：
```bash
Application
├── fibjs
├── Chromium Embedded Framework
├── Libraries
│   ├── libEGL.dylib
│   ├── libGLESv2.dylib
│   ├── libswiftshader_libEGL.dylib
│   ├── libswiftshader_libGLESv2.dylib
│   ├── libvk_swiftshader.dylib
│   └── vk_swiftshader_icd.json
└── Resources
    ├── Info.plist
    ├── ......
    └── zh_TW.lproj
        └── locale.pak 
```

你还可以使用 `gui.config` 设置 `cef_path` 来指定 cef 的二进制路径，从而更加灵活地部署运行环境。当未设定 `cef_path` 时，cef 二进制文件必须与 fibjs 执行文件部署在同一个目录下。
```JavaScript
gui.config({
    "cef_path": cef_path
});
```

准备好运行环境，再运行以下代码
```JavaScript
var gui = require("gui");

gui.open("https://fibjs.org");
```
同样会看到一个加载了 fibjs 官网的浏览器窗口，但是它的引擎已经是最新的 Chrome 内核了。

gui 的基础应用十分简便，参照 gui 文档即可迅速实现，不再赘述。接下来主要介绍一些特别的应用方式。

## 前后端服务对接
基于 web 的桌面应用通常有两种扩展方式，一种是 WebView 扩展，另一种是在本地实现前后端分离。前一种方式，对 WebView 做了侵入式扩展，运行环境与标准的浏览器其实已经不再兼容。后一种方式则需要在本地开启一个 http Server，这样又导致服务接口对外暴露。

fibjs 针对桌面应用的扩展，基于 cef 的协议扩展能力，将 WebView 和 fibjs 的 `Handler` 融合在一起，使得 WebView 可以在进程内直接连接到对应的 `Handler` 处理器，在完全兼容传统 B/S 前后端开发范式的同时，确保了安全性和可移植性。同时前后端代码，也与标准的 B/S 前后端开发完全一致，可以在浏览器内开发调试，然后直接移植为本地应用。

fibjs 配置后端处理器的方式，是通过 `gui.config` 完成的。
```JavaScript
gui.config({
    "backend": {
        "cef://test/": cef_files_path,
        "http://cef_test/": {
            "/mock/:act": (r, a) => {
                if (a == 'header') {
                    r.response.write(r.firstHeader('test'));
                    r.response.addHeader("test", "world");
                } else if (a == 'post') {
                    r.response.write(`[${r.firstHeader("Content-type")}]`);
                    r.response.write(r.body.readAll());
                }
            },
            "/*": cef_files_path
        }
    }
});
```
这段代码定义了两个后端，一个是 `cef` 协议的 test domain，指向静态目录 `cef_files_path`，另一个是 `http` 的 cef_test domain，指向一个路由。

在 cef 里，对非标准协议的处理有一些限制，比如不支持向服务器 post 数据，因此如果希望兼容性更好的前后端通信，需要定义 http 或者 https 后端，当然这个后端也并不是通过网络协议完成通信，而是在进程内部直接对接的。

关于如何开发 Handler 后端，可以参阅：[hello, world](hello.md)。

## 无窗口模式
在自动化测试或者流程自动化场景中，业务运行过程无需用户交互，因此可以以无窗口模式在服务器上自动运行。这时就需要 headless 模式来运行。

fibjs 支持两种方式的 headless，分别是全局 headless 和实例 headless。

全局模式下，所有的窗口都将以 headless 模式运行，无论创建窗口是是如何设定的。全局模式的运行方式，是指定 `--headless` 启动选项。
```sh
fibjs --headless test.js
```
在程序启动时调用 `gui.config` 配置也可以达到同样的目标：
```JavaScript
gui.config({
    "headless": true
});
```
在 Linux Server 下，虽然 headless 模式不需要桌面支持，但是 cef 基础模块仍需要一些基础组件支持，因此需要安装 xorg：
```sh
apt install xorg
```
在一些应用里，需要同时存在用户交互和自动化处理，这是可以单独指定某个窗口使用 headless 模式：
```JavaScript
var win = gui.open("https://fibjs.org", {
    "headless": true
});
```
需要注意的是，headless 实例因为没有用户交互，不能被用户主动关闭，因此程序要在不需要的时候自行关闭，否则因为实例的存在，进程将不会自动退出。

## DevTools 接口
Chrome DevTools Protocol 允许工具对 Chromium，Chrome 和其它基于 Blink 的浏览器进行测试、检查、调试以及配置。Chrome DevTools Protocol 被分为多个域（DOM，Debugger，Network 等），每个域定义了相应支持的 commands 和相关的 events。

fibjs 封装了 cdp 的访问接口，可以充分运用 cef 内置的 cdp 接口，直接调试 WebView 内的网页。WebView 用于访问 cdp 服务的接口，是 WebView.dev。关于 cdp 的详细文档，可以参阅：https://chromedevtools.github.io/devtools-protocol/

以下列举的是几个常用的代码片段，用于展示如何使用 dev 操控页面元素。详细的使用演示，可以参阅 `test/cef_test.js`。
### 查询 DOM
```JavaScript
function getOuterHTML(win, selector) {
    var doc = win.dev.DOM.getDocument();
    var e = win.dev.DOM.querySelector({
        "nodeId": doc.root.nodeId,
        "selector": selector
    });

    var html = win.dev.DOM.getOuterHTML({
        "nodeId": e.nodeId
    });

    return html.outerHTML;
}
```
### 模拟鼠标操作
```JavaScript
function click(win, selector) {
    var doc = win.dev.DOM.getDocument();
    var e = win.dev.DOM.querySelector({
        "nodeId": doc.root.nodeId,
        "selector": selector
    });

    var box = win.dev.DOM.getBoxModel({
        "nodeId": e.nodeId
    });

    var mi = {
        "x": box.model.content[0] + 1,
        "y": box.model.content[1] + 1,
        "button": 'left',
        "clickCount": 1
    }

    mi.type = "mousePressed";
    win.dev.Input.dispatchMouseEvent(mi);

    mi.type = "mouseReleased";
    win.dev.Input.dispatchMouseEvent(mi);
}
```
### 模拟键盘操作
```JavaScript
function type(win, text) {
    for (char of text) {
        win.dev.Input.dispatchKeyEvent({
            "type": "char",
            "text": char
        });
    }
}

function press(win, key) {
    var code = key_code[key];
    var ki = {
        "key": key,
        "code": key,
        "windowsVirtualKeyCode": code,
        "nativeVirtualKeyCode": code
    };

    ki.type = "keyDown";
    win.dev.Input.dispatchKeyEvent(ki);

    ki.type = "keyUp";
    win.dev.Input.dispatchKeyEvent(ki);
}
```
### 页面截屏
```JavaScript
var ret = win.dev.Page.captureScreenshot({
    clip: {
        "x": 0,
        "y": 0,
        "width": 100,
        "height": 100,
        "scale": 1
    }
});

var img = gd.load(encoding.base64.decode(ret.data));
```
### 模拟 User-Agent
```JavaScript
var win = gui.open();

win.on('open', () => {
    win.dev.Network.setUserAgentOverride({
        userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 10_0_1 like Mac OS X) AppleWebKit/602.1.50 (KHTML, like Gecko) Version/10.0 Mobile/14A403 Safari/602.1',
    });

    win.loadUrl('https://fibjs.org');
});
```
## 小结
通过这个小节的介绍，我们可以快速开发自己的桌面应用，将 html 渲染成图片或者 PDF，利用 cdp 的强大接口建立前端自动化测试和流程自动化引擎。

👉 【[服务端模块热更新](server-hot-update.md)】