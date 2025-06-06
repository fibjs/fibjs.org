# 模块 gui
gui 模块

使用方法：

```JavaScript
var gui = require('gui');
```

## 对象
        
### WebView
**浏览器窗口对象，[WebView](../../object/ifs/WebView.md) 是一个嵌入浏览器的窗口组件**

```JavaScript
WebView gui.WebView;
```

## 静态函数
        
### open
**打开一个窗口并访问指定网址**

```JavaScript
static WebView gui.open(String url,
    Object opt = {});
```

调用参数:
* url: String, 指定的网址
* opt: Object, 打开窗口参数

返回结果:
* [WebView](../../object/ifs/WebView.md), 返回打开的窗口对象

支持以下参数:

```JavaScript
{
    "icon": "/path/to/file.png", // specify the icon of the window, not work in gtk4
    "left": 100, // specify the left position of the window, default position is center of the screen, not work in gtk4
    "right": 100, // spcify the top position of the window, default position is center of the screen, not work in gtk4
    "width": 100, // specify the width of the window, default is system auto set
    "height": 100, // specify the height of the window, default is system auto set
    "visible": true, // specify whether the window is visible, default is true
    "hideOnClose": false, // specify whether the window is hidden when closed, default is false
    "minWidth": 0, // specify the minimum width of the window, default is 0
    "minHeight": 0, // specify the minimum height of the window, default is 0
    "maxWidth": 0, // specify the maximum width of the window, default is no limit
    "maxHeight": 0, // specify the maximum height of the window, default is no limit
    "frame": true, // specify whether the window has frame, default is true
    "titlebar": "show" | { // specify the titlebar style: "show" (default), "hide", "transparent"
        "style": "show", // specify the titlebar style: "show" (default), "hide", "transparent"
        "height": "nprmal" // specify the titlebar height: "normal" (default), "tall", not work in macos
    },
    "resizable": true, // specify whether the window is resizable, default is true
    "menu": menu, // specify the menu of the window, can be a Menu object or a menu item array, default is null
    "maximize": false, // specify whether the window is maximized, default is false
    "fullscreen": false, // specify whether the window is fullscreen, default is false
    "devtools": false, // specify whether the DevTools in WebView is enabled, default is false
    "app": {}, // specify the app object that can be remote call in WebView, default is undefined
}
```

当设定 width 和 height，而未设定 left 或 right 时，窗口将自动居中

--------------------------
**打开一个浏览器窗口，如果指定 [url](url.md) 或者 file 则加载指定资源**

```JavaScript
static WebView gui.open(Object opt = {});
```

调用参数:
* opt: Object, 打开窗口参数

返回结果:
* [WebView](../../object/ifs/WebView.md), 返回打开的窗口对象

支持以下参数:

```JavaScript
{
    "url": , // specify the url of the window, default is about:blank
    "file": , // specify the file of the window
    "icon": "/path/to/file.png", // specify the icon of the window, not work in gtk4
    "left": 100, // specify the left position of the window, default position is center of the screen, not work in gtk4
    "right": 100, // spcify the top position of the window, default position is center of the screen, not work in gtk4
    "width": 100, // specify the width of the window, default is system auto set
    "height": 100, // specify the height of the window, default is system auto set
    "visible": true, // specify whether the window is visible, default is true
    "hideOnClose": false, // specify whether the window is hidden when closed, default is false
    "minWidth": 0, // specify the minimum width of the window, default is 0
    "minHeight": 0, // specify the minimum height of the window, default is 0
    "maxWidth": 0, // specify the maximum width of the window, default is no limit
    "maxHeight": 0, // specify the maximum height of the window, default is no limit
    "frame": true, // specify whether the window has frame, default is true
    "titlebar": "show" | { // specify the titlebar style: "show" (default), "hide", "transparent"
        "style": "show", // specify the titlebar style: "show" (default), "hide", "transparent"
        "height": "nprmal" // specify the titlebar height: "normal" (default), "tall", not work in macos
    },
    "resizable": true, // specify whether the window is resizable, default is true
    "menu": menu, // specify the menu of the window, can be a Menu object or a menu item array, default is null
    "maximize": false, // specify whether the window is maximized, default is false
    "fullscreen": false, // specify whether the window is fullscreen, default is false
    "devtools": false, // specify whether the DevTools in WebView is enabled, default is false
    "app": {}, // specify the app object that can be remote call in WebView, default is undefined
}
```

当设定 width 和 height，而未设定 left 或 right 时，窗口将自动居中

--------------------------
### openFile
**打开一个窗口并访问指定文件**

```JavaScript
static WebView gui.openFile(String file,
    Object opt = {});
```

调用参数:
* file: String, 指定的文件
* opt: Object, 打开窗口参数

返回结果:
* [WebView](../../object/ifs/WebView.md), 返回打开的窗口对象

支持以下参数:

```JavaScript
{
    "icon": "/path/to/file.png", // specify the icon of the window, not work in gtk4
    "left": 100, // specify the left position of the window, default position is center of the screen, not work in gtk4
    "right": 100, // spcify the top position of the window, default position is center of the screen, not work in gtk4
    "width": 100, // specify the width of the window, default is system auto set
    "height": 100, // specify the height of the window, default is system auto set
    "visible": true, // specify whether the window is visible, default is true
    "hideOnClose": false, // specify whether the window is hidden when closed, default is false
    "minWidth": 0, // specify the minimum width of the window, default is 0
    "minHeight": 0, // specify the minimum height of the window, default is 0
    "maxWidth": 0, // specify the maximum width of the window, default is no limit
    "maxHeight": 0, // specify the maximum height of the window, default is no limit
    "frame": true, // specify whether the window has frame, default is true
    "titlebar": "show" | { // specify the titlebar style: "show" (default), "hide", "transparent"
        "style": "show", // specify the titlebar style: "show" (default), "hide", "transparent"
        "height": "nprmal" // specify the titlebar height: "normal" (default), "tall", not work in macos
    },
    "resizable": true, // specify whether the window is resizable, default is true
    "menu": menu, // specify the menu of the window, can be a Menu object or a menu item array, default is null
    "maximize": false, // specify whether the window is maximized, default is false
    "fullscreen": false, // specify whether the window is fullscreen, default is false
    "devtools": false, // specify whether the DevTools in WebView is enabled, default is false
    "app": {}, // specify the app object that can be remote call in WebView, default is undefined
}
```

当设定 width 和 height，而未设定 left 或 right 时，窗口将自动居中

--------------------------
### createMenu
**创建一个菜单对象**

```JavaScript
static Menu gui.createMenu(Object items[] = []);
```

调用参数:
* items[]: Object, 菜单项数组

返回结果:
* [Menu](../../object/ifs/Menu.md), 返回创建的菜单对象

菜单项支持以下类型：
- normal
    - type: "normal"
    - label: 必需
    - tooltip, icon, enabled: 可选
    - 不能有 submenu 或 checked
- checkbox
    - type: "checkbox"
    - label: 必需
    - checked: 可选
    - tooltip, icon, enabled: 可选
    - 不能有 submenu
- submenu
    - type: "submenu"
    - label, submenu: 必需
    - tooltip, icon, enabled: 可选
    - 不能有 checked
- separator
    - type: "separator"
    - 不能有 label、submenu、checked、icon 或 tooltip

如果菜单项未指定 type，则根据其它属性自动判断类型。识别策略如下：
- 如果存在 submenu 属性，则将 type 设置为 "submenu"。
- 如果存在 checked 属性，则将 type 设置为 "checkbox"。
- 如果传入的对象为空，则将 type 设置为 "separator"。
- 如果以上条件都不满足，则将 type 设置为 "normal"。

--------------------------
### createTray
**创建一个状态图标对象**

```JavaScript
static Tray gui.createTray(Object opt = {});
```

调用参数:
* opt: Object, 创建状态图标参数

返回结果:
* [Tray](../../object/ifs/Tray.md), 返回创建的状态图标对象

支持以下参数:

```JavaScript
{
    "icon": "/path/to/file.png", // specify the icon of the tray, must be a png file
    "title": "", // specify the title of the tray, if not set, it will not be displayed
    "tooltip": "", // specify the tooltip of the tray, if not set, it will not be displayed
    "menu": menu, // specify the menu of the tray, default is null
}
```

--------------------------
### alert
**弹出一个消息框**

```JavaScript
static gui.alert(String message) async;
```

调用参数:
* message: String, 消息内容

--------------------------
**弹出一个消息框**

```JavaScript
static gui.alert(String title,
    String message) async;
```

调用参数:
* title: String, 消息标题
* message: String, 消息内容

--------------------------
### confirm
**弹出一个确认框**

```JavaScript
static Boolean gui.confirm(String message) async;
```

调用参数:
* message: String, 消息内容

返回结果:
* Boolean, 返回用户的选择结果

--------------------------
**弹出一个确认框**

```JavaScript
static Boolean gui.confirm(String title,
    String message) async;
```

调用参数:
* title: String, 消息标题
* message: String, 消息内容

返回结果:
* Boolean, 返回用户的选择结果

--------------------------
### input
**弹出一个输入框**

```JavaScript
static String gui.input(String message,
    Boolean password = false) async;
```

调用参数:
* message: String, 消息内容
* password: Boolean, 是否为密码输入，默认为 false

返回结果:
* String, 返回用户输入的内容

--------------------------
**弹出一个输入框**

```JavaScript
static String gui.input(String title,
    String message,
    Boolean password = false) async;
```

调用参数:
* title: String, 消息标题
* message: String, 消息内容
* password: Boolean, 是否为密码输入，默认为 false

返回结果:
* String, 返回用户输入的内容

--------------------------
### chooseFile
**弹出一个选择文件对话框**

```JavaScript
static NArray gui.chooseFile(Object options) async;
```

调用参数:
* options: Object, 选择文件对话框参数

返回结果:
* NArray, 返回用户选择的文件数组

options 支持以下参数:
 - title: 对话框标题
 - type: 对话框类型，"openFile"、"openDirectory"、"saveFile"，默认为 "openFile"
 - defaultPath: 默认打开的路径
 - multiple: 是否允许多选，默认为 false
 - filters: 文件过滤器数组，每个元素为一个对象，包含 name 和 extensions 两个属性，extensions 为一个扩展名数组

