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
    "left": 100, // 窗口左上角 x，缺省系统自动设定
    "right": 100, // 窗口左上角 y，缺省系统自动设定
    "width": 100, // 窗口宽度，缺省系统自动设定
    "height": 100, // 窗口高度，缺省系统自动设定
    "border": true, // 是否有边框，缺省有边框
    "caption": true, // 是否有标题栏，缺省有标题栏
    "resizable": true, // 是否可改变尺寸，缺省可以改变
    "maximize": false, // 是否最大化显示，缺省不最大化
    "fullscreen": false, // 是否显示全屏窗口，缺省不全屏
    "debug": true, // 是否输出 WebView 内的错误和 console 信息，缺省显示或继承全局设置
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
    "left": 100, // 窗口左上角 x，缺省系统自动设定
    "right": 100, // 窗口左上角 y，缺省系统自动设定
    "width": 100, // 窗口宽度，缺省系统自动设定
    "height": 100, // 窗口高度，缺省系统自动设定
    "border": true, // 是否有边框，缺省有边框
    "caption": true, // 是否有标题栏，缺省有标题栏
    "resizable": true, // 是否可改变尺寸，缺省可以改变
    "maximize": false, // 是否最大化显示，缺省不最大化
    "fullscreen": false, // 是否显示全屏窗口，缺省不全屏
    "debug": true, // 是否输出 WebView 内的错误和 console 信息，缺省显示或继承全局设置
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

