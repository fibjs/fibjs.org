# 快速开发桌面应用
在 fibjs 中启动一个桌面应用是很快的，只需要键入以下代码，即可打开并运行一个 WebView 窗口：
```JavaScript
var gui = require("gui);

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

## 布局
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

### Mac X 平台(Mac OS X)
在 Mac X 平台上文件夹结构大致如下，你通常可以在二进制包内的 `Release/Chromium Embedded Framework.framework` 目录下找到全部文件：
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

你也可以使用 `gui.config` 通过设置 `cef_path` 来指定 cef 的二进制路径，从而更加灵活地部署运行环境。当未设定 `cef_path` 时，cef 二进制文件必须与 fibjs 部署在同一个目录下。

准备好运行环境，再运行以下代码
```JavaScript
var gui = require("gui);

gui.open("https://fibjs.org");
```
同样会看到一个加载了 fibjs 官网的浏览器窗口，但是它的引擎已经是最新的 Chrome 内核了。

## 窗口样式控制
啊啊啊
## 后端服务对接
啊啊啊
## DevTools 接口
啊啊啊
## 自动化测试
啊啊啊
## 流程自动机器人
啊啊啊
## 小结
通过这个小节，你已经可以开始自己的 fibjs 服务器项目了。接下来，我们会在更多的细分领域介绍 fibjs 的开发方法。

👉 【[服务端模块热更新](server-hot-update.md)】