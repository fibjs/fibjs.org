# 模块 console
控制台访问对象

console 模块是一个核心模块，它提供了类似于浏览器中 console 对象的功能，可以将信息输出到控制台，方便调试和输出信息。

console 模块中最常用的方法是 log()，该方法可以将任何 JavaScript 值打印到控制台，并自动添加换行符。除了 log() 方法外，还有 info()、warn()、error() 方法，分别用于输出信息、警告和错误，它们的功能和 log() 方法基本相同，只是在控制台中显示的样式不同。

console 模块还提供了 dir() 方法，用于将一个对象的属性和方法以可读性更强的形式输出到控制台，方便调试复杂的对象。另外，还有 time() 和 timeEnd() 方法，用于在控制台中计时代码执行的时间，并输出时间差。

除了以上常用的方法，console 模块还提供了一些其他的方法，如 [assert](assert.md)()、notic()、trace() 等，可以在不同的情况下方便地进行调试和信息输出。

console 模块是一个非常实用的模块，可以在开发过程中提高调试效率，方便快捷地输出各种信息。

## 对象
        
### assert
**断言测试，如果测试值为假，则报错**

```JavaScript
assert console.assert;
```

## 静态函数
        
### add
**添加 console 输出系统，支持的设备为 console, syslog, event，最多可以添加 10 个输出**

```JavaScript
static console.add(String type);
```

调用参数:
* type: String, 输出设备

通过配置 console，可以将程序输出和系统错误发往不同设备，用于运行环境信息收集。

type 为配置，为设备名称字符串：

```JavaScript
console.add("console");
```

syslog 仅在 posix 平台有效：

```JavaScript
console.add("syslog");
```

event 仅在 windows 平台有效：

```JavaScript
console.add("event");
```

--------------------------
**添加 console 输出系统，支持的设备为 console, syslog, event, nslog 和 file，最多可以添加 10 个输出**

```JavaScript
static console.add(Object cfg);
```

调用参数:
* cfg: Object, 输出配置

通过配置 console，可以将程序输出和系统错误发往不同设备，用于运行环境信息收集。

cfg 可以为一个设备配置对象：

```JavaScript
console.add({
    type: "console",
    levels: [console.INFO, console.ERROR] // optional, default is all levels
});
```

syslog 仅在 posix 平台有效：

```JavaScript
console.add({
    type: "syslog",
    levels: [console.INFO, console.ERROR]
});
```

event 仅在 windows 平台有效：

```JavaScript
console.add({
    type: "event",
    levels: [console.INFO, console.ERROR]
});
```

nslog 仅在 Darwin 平台有效：

```JavaScript
console.add({
    type: "nslog",
    levels: [console.INFO, console.ERROR]
});
```

file 日志：

```JavaScript
console.add({
    type: "file",
    levels: [console.INFO, console.ERROR],
    path: "path/to/file_%s.log", // specifies the log output file, can use %s to specify the insertion date location, or add at the end if not specified
    split: "30m", // Optional values are "day", "hour", "minute", "####k", "####m", "####g", default is "1m"
    count: 10 // option, selectable from 2 to 128, default is 128
});
```

--------------------------
**批量添加 console 输出系统，支持的设备为 console, syslog, event 和 file，最多可以添加 10 个输出**

```JavaScript
static console.add(Array cfg);
```

调用参数:
* cfg: Array, 输出配置数组

通过配置 console，可以将程序输出和系统错误发往不同设备，用于运行环境信息收集。

```JavaScript
console.add(["console", {
    type: "syslog",
    levels: [console.INFO, console.ERROR]
}]);
```

--------------------------
### reset
**初始化到缺省设置，只在 console 输出信息**

```JavaScript
static console.reset();
```

--------------------------
### log
**记录普通日志信息，与 info 等同**

```JavaScript
static console.log(String fmt,
    ...args);
```

调用参数:
* fmt: String, 格式化字符串
* args: ..., 可选参数列表

记录一般等级的日志信息。通常用于输出非错误性提示信息。

--------------------------
**记录普通日志信息，与 info 等同**

```JavaScript
static console.log(...args);
```

调用参数:
* args: ..., 可选参数列表

记录一般等级的日志信息。通常用于输出非错误性提示信息。

--------------------------
### debug
**记录调试日志信息**

```JavaScript
static console.debug(String fmt,
    ...args);
```

调用参数:
* fmt: String, 格式化字符串
* args: ..., 可选参数列表

记录调试日志信息。通常用于输出调试信息。不重要。

--------------------------
**记录调试日志信息**

```JavaScript
static console.debug(...args);
```

调用参数:
* args: ..., 可选参数列表

记录调试日志信息。通常用于输出调试信息。不重要。

--------------------------
### info
**记录普通日志信息，与 log 等同**

```JavaScript
static console.info(String fmt,
    ...args);
```

调用参数:
* fmt: String, 格式化字符串
* args: ..., 可选参数列表

记录一般等级的日志信息。通常用于输出非错误性提示信息。

--------------------------
**记录普通日志信息，与 log 等同**

```JavaScript
static console.info(...args);
```

调用参数:
* args: ..., 可选参数列表

记录一般等级的日志信息。通常用于输出非错误性提示信息。

--------------------------
### notice
**记录警告日志信息**

```JavaScript
static console.notice(String fmt,
    ...args);
```

调用参数:
* fmt: String, 格式化字符串
* args: ..., 可选参数列表

记录警告日志信息。通常用于输出提示性调试信息。一般重要。

--------------------------
**记录警告日志信息**

```JavaScript
static console.notice(...args);
```

调用参数:
* args: ..., 可选参数列表

记录警告日志信息。通常用于输出提示性调试信息。一般重要。

--------------------------
### warn
**记录警告日志信息，与 warning 等同**

```JavaScript
static console.warn(String fmt,
    ...args);
```

调用参数:
* fmt: String, 格式化字符串
* args: ..., 可选参数列表

记录警告日志信息。通常用于输出警告性调试信息。重要。

--------------------------
**记录警告日志信息，与 warning 等同**

```JavaScript
static console.warn(...args);
```

调用参数:
* args: ..., 可选参数列表

记录警告日志信息。通常用于输出警告性调试信息。重要。

--------------------------
### warning
**记录警告日志信息**

```JavaScript
static console.warning(String fmt,
    ...args);
```

调用参数:
* fmt: String, 格式化字符串
* args: ..., 可选参数列表

记录警告日志信息。通常用于输出警告性调试信息。重要。

--------------------------
**记录警告日志信息**

```JavaScript
static console.warning(...args);
```

调用参数:
* args: ..., 可选参数列表

记录警告日志信息。通常用于输出警告性调试信息。重要。

--------------------------
### error
**记录错误日志信息**

```JavaScript
static console.error(String fmt,
    ...args);
```

调用参数:
* fmt: String, 格式化字符串
* args: ..., 可选参数列表

记录用于错误日志信息。通常用于输出错误信息。非常重要。系统的出错信息也会以此等级记录。

--------------------------
**记录错误日志信息**

```JavaScript
static console.error(...args);
```

调用参数:
* args: ..., 可选参数列表

记录用于错误日志信息。通常用于输出错误信息。非常重要。系统的出错信息也会以此等级记录。

--------------------------
### crit
**记录关键错误日志信息，与 critical 等同**

```JavaScript
static console.crit(String fmt,
    ...args);
```

调用参数:
* fmt: String, 格式化字符串
* args: ..., 可选参数列表

记录用于关键错误日志信息。通常用于输出关键错误信息。非常重要。

--------------------------
**记录关键错误日志信息，与 critical 等同**

```JavaScript
static console.crit(...args);
```

调用参数:
* args: ..., 可选参数列表

记录用于关键错误日志信息。通常用于输出关键错误信息。非常重要。

--------------------------
### critical
**记录关键错误日志信息**

```JavaScript
static console.critical(String fmt,
    ...args);
```

调用参数:
* fmt: String, 格式化字符串
* args: ..., 可选参数列表

记录用于关键错误日志信息。通常用于输出关键错误信息。非常重要。

--------------------------
**记录关键错误日志信息**

```JavaScript
static console.critical(...args);
```

调用参数:
* args: ..., 可选参数列表

记录用于关键错误日志信息。通常用于输出关键错误信息。非常重要。

--------------------------
### alert
**记录警报错误日志信息**

```JavaScript
static console.alert(String fmt,
    ...args);
```

调用参数:
* fmt: String, 格式化字符串
* args: ..., 可选参数列表

记录用于警报错误日志信息。通常用于输出警报错误信息。非常重要。为最高级别信息。

--------------------------
**记录警报错误日志信息**

```JavaScript
static console.alert(...args);
```

调用参数:
* args: ..., 可选参数列表

记录用于警报错误日志信息。通常用于输出警报错误信息。非常重要。为最高级别信息。

--------------------------
### trace
**输出当前调用堆栈**

```JavaScript
static console.trace(String fmt,
    ...args);
```

调用参数:
* fmt: String, 格式化字符串
* args: ..., 可选参数列表

通过日志输出当前调用堆栈。

--------------------------
**输出当前调用堆栈**

```JavaScript
static console.trace(...args);
```

调用参数:
* args: ..., 可选参数列表

通过日志输出当前调用堆栈。

--------------------------
### dir
**用 JSON 格式输出对象**

```JavaScript
static console.dir(Value obj,
    Object options = {});
```

调用参数:
* obj: Value, 指定需要处理的对象
* options: Object, 指定格式控制选项

支持以下参数:

```JavaScript
{
    "colors": false, // specify if output should be colorized, defaults to false
    "depth": 2, // specify the max depth of the output, defaults to 2
    "table": false, // specify if output should be a table, defaults to false
    "encode_string": true, // specify if string should be encoded, defaults to true
    "maxArrayLength": 100, // specify max number of array elements to show, set to 0 or negative to show no elements, defaults to 100
    "maxStringLength": 10000, // specify max string length to output, set to 0 or negative to show no strings, defaults to 10000
    "fields": [], // specify the fields to be displayed, defaults to all
}
```

--------------------------
### table
**用 JSON 格式输出对象**

```JavaScript
static console.table(Value obj);
```

调用参数:
* obj: Value, 给定要显示的对象

--------------------------
**用 JSON 格式输出对象**

```JavaScript
static console.table(Value obj,
    Array fields);
```

调用参数:
* obj: Value, 给定要显示的对象
* fields: Array, 给定要显示的字段

--------------------------
### print
**向控制台输出格式化文本，输出内容不会记入日志系统，输出文本后不会自动换行，可连续输出**

```JavaScript
static console.print(String fmt,
    ...args);
```

调用参数:
* fmt: String, 格式化字符串
* args: ..., 可选参数列表

--------------------------
**向控制台输出格式化文本，输出内容不会记入日志系统，输出文本后不会自动换行，可连续输出**

```JavaScript
static console.print(...args);
```

调用参数:
* args: ..., 可选参数列表

--------------------------
### moveTo
**移动控制台光标到指定位置**

```JavaScript
static console.moveTo(Integer row,
    Integer column);
```

调用参数:
* row: Integer, 指定新光标的行坐标
* column: Integer, 指定新光标的列坐标

--------------------------
### hideCursor
**隐藏控制台光标**

```JavaScript
static console.hideCursor();
```

--------------------------
### showCursor
**显示控制台光标**

```JavaScript
static console.showCursor();
```

--------------------------
### clear
**清除控制台**

```JavaScript
static console.clear();
```

--------------------------
### readLine
**从控制台读取用户输入**

```JavaScript
static String console.readLine(String msg = "") async;
```

调用参数:
* msg: String, 提示信息

返回结果:
* String, 返回用户输入的信息

--------------------------
### getpass
**从控制台读取用户输入的密码**

```JavaScript
static String console.getpass(String msg = "") async;
```

调用参数:
* msg: String, 提示信息

返回结果:
* String, 返回用户输入的密码

--------------------------
### time
**启动一个计时器**

```JavaScript
static console.time(String label = "time");
```

调用参数:
* label: String, 标题，缺省为空字符串。

--------------------------
### timeElapse
**输出指定计时器当前计时值**

```JavaScript
static console.timeElapse(String label = "time");
```

调用参数:
* label: String, 标题，缺省为空字符串。

--------------------------
### timeEnd
**结束指定计时器，并输出最后计时值**

```JavaScript
static console.timeEnd(String label = "time");
```

调用参数:
* label: String, 标题，缺省为空字符串。

## 静态属性
        
### loglevel
**Integer, 输出级别，用以过滤输出信息，缺省为 NOTSET，全部输出。信息过滤之后才会输出给 add 设定的各个设备。**

```JavaScript
static Integer console.loglevel;
```

--------------------------
### width
**Integer, 查询终端每行字符数**

```JavaScript
static readonly Integer console.width;
```

--------------------------
### height
**Integer, 查询终端行数**

```JavaScript
static readonly Integer console.height;
```

## 常量
        
### FATAL
**loglevel 级别常量**

```JavaScript
const console.FATAL = 0;
```

--------------------------
### ALERT
**loglevel 级别常量**

```JavaScript
const console.ALERT = 1;
```

--------------------------
### CRIT
**loglevel 级别常量**

```JavaScript
const console.CRIT = 2;
```

--------------------------
### ERROR
**loglevel 级别常量**

```JavaScript
const console.ERROR = 3;
```

--------------------------
### WARN
**loglevel 级别常量**

```JavaScript
const console.WARN = 4;
```

--------------------------
### NOTICE
**loglevel 级别常量**

```JavaScript
const console.NOTICE = 5;
```

--------------------------
### INFO
**loglevel 级别常量**

```JavaScript
const console.INFO = 6;
```

--------------------------
### DEBUG
**loglevel 级别常量**

```JavaScript
const console.DEBUG = 7;
```

--------------------------
### PRINT
**loglevel 仅用于输出，信息输出后不换行，file 和 syslog 不保存此级别信息**

```JavaScript
const console.PRINT = 9;
```

--------------------------
### NOTSET
**loglevel 级别常量**

```JavaScript
const console.NOTSET = 10;
```

