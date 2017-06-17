# 模块 gui
输入输出处理模块

使用方法：
@code
var gui = require(&#39;gui&#39;);
@endcode
## 函数
        
### setVersion
设置 WebView 内 ie 模拟版本
```JavaScript
gui.setVersion(Integer ver);
```

** 调用参数: **

### open
打开一个窗口并访问指定网址
```JavaScript
WebView gui.open(String url);
```

** 调用参数: **
* url - 指定的网址，，可以使用 fs:path 访问本地文件系统

** 返回结果:**
* 返回打开的窗口对象

### open
打开一个窗口并访问指定网址
```JavaScript
WebView gui.open(String url,
                Map opt);
```

** 调用参数: **
* url - 指定的网址，，可以使用 fs:path 访问本地文件系统
* opt - 打开窗口参数，支持以下参数:

** 返回结果:**
* 返回打开的窗口对象

## 常量
        
### IE7
WebView ie 模拟版本，指定 ie7
```JavaScript
gui.IE7;
```

### IE8
WebView ie 模拟版本，指定 ie8
```JavaScript
gui.IE8;
```

### IE9
WebView ie 模拟版本，指定 ie9
```JavaScript
gui.IE9;
```

### IE10
WebView ie 模拟版本，指定 ie10
```JavaScript
gui.IE10;
```

### IE11
WebView ie 模拟版本，指定 ie11
```JavaScript
gui.IE11;
```

### EDGE
WebView ie 模拟版本，指定 edge
```JavaScript
gui.EDGE;
```

