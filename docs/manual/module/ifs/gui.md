# 模块 gui
gui 模块

使用方法：

```JavaScript
var gui = require('gui');
```

## 静态函数
        
### setVersion
**设置 [WebView](../../object/ifs/WebView.md) 内 ie 最高模拟版本，当系统 ie 版本低于此版本时，将模拟系统安装版本**

```JavaScript
static gui.setVersion(Integer ver);
```

调用参数:
* ver: Integer, 指定 ie 模拟版本

--------------------------
### open
**打开一个窗口并访问指定网址**

```JavaScript
static WebView gui.open(String url,
    Object opt = {});
```

调用参数:
* url: String, 指定的网址，，可以使用 [fs](fs.md):[path](path.md) 访问本地文件系统
* opt: Object, 打开窗口参数

返回结果:
* [WebView](../../object/ifs/WebView.md), 返回打开的窗口对象

支持以下参数:

```JavaScript
{
    "left": 100, // specify the left position of the window, default is system auto set
    "right": 100, // spcify the top position of the window, default is system auto set
    "width": 100, // specify the width of the window, default is system auto set
    "height": 100, // specify the height of the window, default is system auto set
    "border": true, // specify whether the window has border, default is true
    "caption": true, // specify whether the window has caption, default is true
    "resizable": true, // specify whether the window is resizable, default is true
    "maximize": false, // specify whether the window is maximized, default is false
    "fullscreen": false, // specify whether the window is fullscreen, default is false
    "debug": true, // specify whether the WebView output error and console info, default is true
}
```

当设定 width 和 height，而未设定 left 或 right 时，窗口将自动居中

--------------------------
**打开一个空的浏览器窗口**

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
    "left": 100, // specify the left position of the window, default is system auto set
    "right": 100, // spcify the top position of the window, default is system auto set
    "width": 100, // specify the width of the window, default is system auto set
    "height": 100, // specify the height of the window, default is system auto set
    "border": true, // specify whether the window has border, default is true
    "caption": true, // specify whether the window has caption, default is true
    "resizable": true, // specify whether the window is resizable, default is true
    "maximize": false, // specify whether the window is maximized, default is false
    "fullscreen": false, // specify whether the window is fullscreen, default is false
    "debug": true, // specify whether the WebView output error and console info, default is true
}
```

当设定 width 和 height，而未设定 left 或 right 时，窗口将自动居中

## 常量
        
### IE7
**[WebView](../../object/ifs/WebView.md) ie 模拟版本，指定 ie7**

```JavaScript
const gui.IE7 = 7000;
```

--------------------------
### IE8
**[WebView](../../object/ifs/WebView.md) ie 模拟版本，指定 ie8**

```JavaScript
const gui.IE8 = 8000;
```

--------------------------
### IE9
**[WebView](../../object/ifs/WebView.md) ie 模拟版本，指定 ie9**

```JavaScript
const gui.IE9 = 9000;
```

--------------------------
### IE10
**[WebView](../../object/ifs/WebView.md) ie 模拟版本，指定 ie10**

```JavaScript
const gui.IE10 = 10000;
```

--------------------------
### IE11
**[WebView](../../object/ifs/WebView.md) ie 模拟版本，指定 ie11**

```JavaScript
const gui.IE11 = 11000;
```

--------------------------
### EDGE
**[WebView](../../object/ifs/WebView.md) ie 模拟版本，指定 edge**

```JavaScript
const gui.EDGE = 11001;
```

