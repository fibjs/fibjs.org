# 对象 WebView
浏览器窗口对象

## 继承关系
<dot>digraph {node [ fontname = "Helvetica,sans-Serif", fontsize = 10, shape = "record" ];
object[tooltip="object", style="filled", fillcolor="white", URL="object.md", label="{object|dispose()\lequals()\ltoString()\ltoJSON()\lvalueOf()\l}"];
EventEmitter[tooltip="EventEmitter", style="filled", fillcolor="white", URL="EventEmitter.md", label="{EventEmitter|new EventEmitter()\l|defaultMaxListeners\l|on()\laddListener()\lprependListener()\lonce()\lprependOnceListener()\loff()\lremoveListener()\lremoveAllListeners()\lsetMaxListeners()\lgetMaxListeners()\llisteners()\llistenerCount()\leventNames()\lemit()\l}"];
WebView[tooltip="WebView", style="filled", fillcolor="lightgray", label="{WebView|visible\lonload\lonmove\lonresize\lonclose\lonmessage\l|setHtml()\lprint()\lclose()\lwait()\lpostMessage()\l}"];
object -> EventEmitter [dir=back]
EventEmitter -> WebView [dir=back]
}</dot>

## 静态属性
        
### defaultMaxListeners
**Integer, 默认全局最大监听器数**

```JavaScript
static Integer WebView.defaultMaxListeners;
```

## 成员属性
        
### visible
**Boolean, 查询和设置窗口是否显示**

```JavaScript
Boolean WebView.visible;
```

--------------------------
### onload
**Function, 查询和绑定加载成功事件，相当于 on("load", func);**

```JavaScript
Function WebView.onload;
```

--------------------------
### onmove
**Function, 查询和绑定窗口移动事件，相当于 on("move", func);**

```JavaScript
Function WebView.onmove;
```

```JavaScript
var gui = require('gui');
var webview = gui.open('fs:index.html');

webview.onmove = function(evt) {
	console.log(evt.left, evt.top);
}
```

--------------------------
### onresize
**Function, 查询和绑定窗口尺寸改变事件，相当于 on("size", func);**

```JavaScript
Function WebView.onresize;
```

```JavaScript
var gui = require('gui');
var webview = gui.open('fs:index.html');

webview.onresize = function(evt) {
	console.log(evt.width, evt.height);
}
```

--------------------------
### onclose
**Function, 查询和绑定窗口关闭事件，相当于 on("close", func);**

```JavaScript
Function WebView.onclose;
```

```JavaScript
var gui = require('gui');
var webview = gui.open('fs:index.html');

webview.onclose = function() {}
```

--------------------------
### onmessage
**Function, 查询和绑定接受 webview 内 postMessage 消息事件，相当于 on("message", func);**

```JavaScript
Function WebView.onmessage;
```

```html
// index.html
<script>
window.external.postMessage('hello from html')
</script>
```

```JavaScript
// index.js
var gui = require('gui');
var webview = gui.open('fs:index.html');

webview.onmessage = function(msg) {
    console.log(msg); // 将会打印 'hello from html'
}
```

## 成员函数
        
### setHtml
**设置 webview 的页面 html**

```JavaScript
WebView.setHtml(String html) async;
```

调用参数:
* html: String, 设置的 html

--------------------------
### print
**打印当前窗口文档**

```JavaScript
WebView.print(Integer mode = 1) async;
```

调用参数:
* mode: Integer, 打印参数，0: 快速打印; 1: 标准打印; 2: 打印预览。缺省为 1

--------------------------
### close
**关闭当前窗口**

```JavaScript
WebView.close() async;
```

--------------------------
### wait
**等待当前窗口关闭**

```JavaScript
WebView.wait() async;
```

--------------------------
### postMessage
**向 webview 内发送消息**

```JavaScript
WebView.postMessage(String msg) async;
```

调用参数:
* msg: String, 要发送的消息

```JavaScript
// index.js
var gui = require('gui');
var webview = gui.open('fs:index.html');

webview.postMessage("hello from fibjs");
```

```html
// index.html
<script>
window.external.onmessage = function(msg){
	alert(msg); // 会出现内容为 'hello from fibjs' 的弹窗
};
</script>
```

--------------------------
### on
**绑定一个事件处理函数到对象**

```JavaScript
Object WebView.on(String ev,
    Function func);
```

调用参数:
* ev: String, 指定事件的名称
* func: Function, 指定事件处理函数

返回结果:
* Object, 返回成功绑定的数量，如果函数已绑定则返回 0

--------------------------
**绑定一个事件处理函数到对象**

```JavaScript
Object WebView.on(Object map);
```

调用参数:
* map: Object, 指定事件映射关系，对象属性名称将作为事件名称，属性的值将作为事件处理函数

返回结果:
* Object, 返回事件对象本身，便于链式调用

--------------------------
### addListener
**绑定一个事件处理函数到对象**

```JavaScript
Object WebView.addListener(String ev,
    Function func);
```

调用参数:
* ev: String, 指定事件的名称
* func: Function, 指定事件处理函数

返回结果:
* Object, 返回事件对象本身，便于链式调用

--------------------------
**绑定一个事件处理函数到对象**

```JavaScript
Object WebView.addListener(Object map);
```

调用参数:
* map: Object, 指定事件映射关系，对象属性名称将作为事件名称，属性的值将作为事件处理函数

返回结果:
* Object, 返回事件对象本身，便于链式调用

--------------------------
### prependListener
**绑定一个事件处理函数到对象起始**

```JavaScript
Object WebView.prependListener(String ev,
    Function func);
```

调用参数:
* ev: String, 指定事件的名称
* func: Function, 指定事件处理函数

返回结果:
* Object, 返回成功绑定的数量，如果函数已绑定则返回 0

--------------------------
**绑定一个事件处理函数到对象起始**

```JavaScript
Object WebView.prependListener(Object map);
```

调用参数:
* map: Object, 指定事件映射关系，对象属性名称将作为事件名称，属性的值将作为事件处理函数

返回结果:
* Object, 返回成功绑定的数量，如果函数已绑定则返回 0

--------------------------
### once
**绑定一个一次性事件处理函数到对象，一次性处理函数只会触发一次**

```JavaScript
Object WebView.once(String ev,
    Function func);
```

调用参数:
* ev: String, 指定事件的名称
* func: Function, 指定事件处理函数

返回结果:
* Object, 返回事件对象本身，便于链式调用

--------------------------
**绑定一个一次性事件处理函数到对象，一次性处理函数只会触发一次**

```JavaScript
Object WebView.once(Object map);
```

调用参数:
* map: Object, 指定事件映射关系，对象属性名称将作为事件名称，属性的值将作为事件处理函数

返回结果:
* Object, 返回事件对象本身，便于链式调用

--------------------------
### prependOnceListener
**绑定一个事件处理函数到对象起始**

```JavaScript
Object WebView.prependOnceListener(String ev,
    Function func);
```

调用参数:
* ev: String, 指定事件的名称
* func: Function, 指定事件处理函数

返回结果:
* Object, 返回成功绑定的数量，如果函数已绑定则返回 0

--------------------------
**绑定一个事件处理函数到对象起始**

```JavaScript
Object WebView.prependOnceListener(Object map);
```

调用参数:
* map: Object, 指定事件映射关系，对象属性名称将作为事件名称，属性的值将作为事件处理函数

返回结果:
* Object, 返回成功绑定的数量，如果函数已绑定则返回 0

--------------------------
### off
**从对象处理队列中取消指定函数**

```JavaScript
Object WebView.off(String ev,
    Function func);
```

调用参数:
* ev: String, 指定事件的名称
* func: Function, 指定事件处理函数

返回结果:
* Object, 返回事件对象本身，便于链式调用

--------------------------
**取消对象处理队列中的全部函数**

```JavaScript
Object WebView.off(String ev);
```

调用参数:
* ev: String, 指定事件的名称

返回结果:
* Object, 返回事件对象本身，便于链式调用

--------------------------
**从对象处理队列中取消指定函数**

```JavaScript
Object WebView.off(Object map);
```

调用参数:
* map: Object, 指定事件映射关系，对象属性名称作为事件名称，属性的值作为事件处理函数

返回结果:
* Object, 返回事件对象本身，便于链式调用

--------------------------
### removeListener
**从对象处理队列中取消指定函数**

```JavaScript
Object WebView.removeListener(String ev,
    Function func);
```

调用参数:
* ev: String, 指定事件的名称
* func: Function, 指定事件处理函数

返回结果:
* Object, 返回事件对象本身，便于链式调用

--------------------------
**取消对象处理队列中的全部函数**

```JavaScript
Object WebView.removeListener(String ev);
```

调用参数:
* ev: String, 指定事件的名称

返回结果:
* Object, 返回事件对象本身，便于链式调用

--------------------------
**从对象处理队列中取消指定函数**

```JavaScript
Object WebView.removeListener(Object map);
```

调用参数:
* map: Object, 指定事件映射关系，对象属性名称作为事件名称，属性的值作为事件处理函数

返回结果:
* Object, 返回事件对象本身，便于链式调用

--------------------------
### removeAllListeners
**从对象处理队列中取消所有事件的所有监听器， 如果指定事件，则移除指定事件的所有监听器。**

```JavaScript
Object WebView.removeAllListeners(Array evs = []);
```

调用参数:
* evs: Array, 指定事件的名称

返回结果:
* Object, 返回事件对象本身，便于链式调用

--------------------------
### setMaxListeners
**监听器的默认限制的数量，仅用于兼容**

```JavaScript
WebView.setMaxListeners(Integer n);
```

调用参数:
* n: Integer, 指定事件的数量

--------------------------
### getMaxListeners
**获取监听器的默认限制的数量，仅用于兼容**

```JavaScript
Integer WebView.getMaxListeners();
```

返回结果:
* Integer, 返回默认限制数量

--------------------------
### listeners
**查询对象指定事件的监听器数组**

```JavaScript
Array WebView.listeners(String ev);
```

调用参数:
* ev: String, 指定事件的名称

返回结果:
* Array, 返回指定事件的监听器数组

--------------------------
### listenerCount
**查询对象指定事件的监听器数量**

```JavaScript
Integer WebView.listenerCount(String ev);
```

调用参数:
* ev: String, 指定事件的名称

返回结果:
* Integer, 返回指定事件的监听器数量

--------------------------
### eventNames
**查询监听器事件名称**

```JavaScript
Array WebView.eventNames();
```

返回结果:
* Array, 返回事件名称数组

--------------------------
### emit
**主动触发一个事件**

```JavaScript
Boolean WebView.emit(String ev,
    ...);
```

调用参数:
* ev: String, 事件名称
* ...: 事件参数，将会传递给事件处理函数

返回结果:
* Boolean, 返回事件触发状态，有响应事件返回 true，否则返回 false

--------------------------
### dispose
**强制回收对象，调用此方法后，对象资源将立即释放**

```JavaScript
WebView.dispose();
```

--------------------------
### equals
**比较当前对象与给定的对象是否相等**

```JavaScript
Boolean WebView.equals(object expected);
```

调用参数:
* expected: object, 制定比较的目标对象

返回结果:
* Boolean, 返回对象比较的结果

--------------------------
### toString
**返回对象的字符串表示，一般返回 "[Native Object]"，对象可以根据自己的特性重新实现**

```JavaScript
String WebView.toString();
```

返回结果:
* String, 返回对象的字符串表示

--------------------------
### toJSON
**返回对象的 JSON 格式表示，一般返回对象定义的可读属性集合**

```JavaScript
Value WebView.toJSON(String key = "");
```

调用参数:
* key: String, 未使用

返回结果:
* Value, 返回包含可 JSON 序列化的值

--------------------------
### valueOf
**返回对象本身的数值**

```JavaScript
Value WebView.valueOf();
```

返回结果:
* Value, 返回对象本身的数值

