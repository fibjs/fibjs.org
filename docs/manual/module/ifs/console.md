# 模块 console
控制台访问对象

全局对象。可用于提示信息，警告和错误记录。通过启动配置文件，可将日志定位到不同的设备，以便于跟踪。日志支持格式化输出，例如：

```JavaScript
console.log("%d + %d = %d", 100, 200, 100 + 200);
```

可以使用的格式化参数如下：
- %s - 字符串
- %d - 数字，包括整数和数字
- %j - 以 JSON 格式输出对象
- %% - 输出字符 '%' 本身

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
**添加 console 输出系统，支持的设备为 console, syslog, event 和 file，最多可以添加 10 个输出**

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
    levels: [console.INFO, console.ERROR] // 选项，省略则输出全部级别日志
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

file 日志：

```JavaScript
console.add({
    type: "file",
    levels: [console.INFO, console.ERROR],
    // 必选项，指定日志输出文件，可使用 s% 指定插入日期位置，不指定则添加在结尾
    path: "path/to/file_%s.log",
    // 选项，可选值为 "day", "hour", "minute", "###k", "###m", "###g"，缺省为 "1m"
    split: "30m",
    // 选项，可选范围为 2-128，缺省为 128
    count: 10
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
**记录警告日志信息**

```JavaScript
static console.warn(String fmt,
    ...args);
```

调用参数:
* fmt: String, 格式化字符串
* args: ..., 可选参数列表

记录警告日志信息。通常用于输出警告性调试信息。重要。

--------------------------
**记录警告日志信息**

```JavaScript
static console.warn(...args);
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
**记录关键错误日志信息**

```JavaScript
static console.crit(String fmt,
    ...args);
```

调用参数:
* fmt: String, 格式化字符串
* args: ..., 可选参数列表

记录用于关键错误日志信息。通常用于输出关键错误信息。非常重要。

--------------------------
**记录关键错误日志信息**

```JavaScript
static console.crit(...args);
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
    "colors": false, // 指定是否输出 ansi 作色字符串，缺省为 false
    "depth": 2, // 指定格式化 object 时递归的次数，缺省为 2
    "table": false, // 指定输出 table 格式，缺省为 false
    "encode_string": true, // 指定表格中的字符串是否编码，缺省为 true
    "fields": [], // 当 table 为 true 时指定显示字段
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

--------------------------
### trace
**输出当前调用堆栈**

```JavaScript
static console.trace(String label = "trace");
```

调用参数:
* label: String, 标题，缺省为空字符串。

通过日志输出当前调用堆栈。

--------------------------
### assert
**断言测试，如果测试值为假，则报错**

```JavaScript
static console.assert(Value value,
    String msg = "");
```

调用参数:
* value: Value, 测试的数值
* msg: String, 报错信息

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
### keyDown
**按下一个按键**

```JavaScript
static console.keyDown(String key,
    String modifier = "");
```

调用参数:
* key: String, 指定按键，单字符直接传入，功能键传入名称
* modifier: String, 指定控制键，可以为：control, alt, shift, command

参数 key 可以使用字符串传入功能键：
- 功能键：f1 - f12
- 方向键：up, down,left, right, home, end, pageup, pagedown
- 编辑键：backspace, delete, insert, enter, tab, escape, space
- 控制键：control, alt, shift, command

--------------------------
**按下一个按键**

```JavaScript
static console.keyDown(String key,
    Array modifier);
```

调用参数:
* key: String, 指定按键，单字符直接传入，功能键传入名称
* modifier: Array, 指定控制键数组，可以为：control, alt, shift, command

参数 key 可以使用字符串传入功能键：
- 功能键：f1 - f12
- 方向键：up, down,left, right, home, end, pageup, pagedown
- 编辑键：backspace, delete, insert, enter, tab, escape, space
- 控制键：control, alt, shift, command

--------------------------
### keyUp
**松开一个按键**

```JavaScript
static console.keyUp(String key,
    String modifier = "");
```

调用参数:
* key: String, 指定按键，单字符直接传入，功能键传入名称
* modifier: String, 指定控制键，可以为：control, alt, shift, command

参数 key 可以使用字符串传入功能键：
- 功能键：f1 - f12
- 方向键：up, down,left, right, home, end, pageup, pagedown
- 编辑键：backspace, delete, insert, enter, tab, escape, space
- 控制键：control, alt, shift, command

--------------------------
**松开一个按键**

```JavaScript
static console.keyUp(String key,
    Array modifier);
```

调用参数:
* key: String, 指定按键，单字符直接传入，功能键传入名称
* modifier: Array, 指定控制键数组，可以为：control, alt, shift, command

参数 key 可以使用字符串传入功能键：
- 功能键：f1 - f12
- 方向键：up, down,left, right, home, end, pageup, pagedown
- 编辑键：backspace, delete, insert, enter, tab, escape, space
- 控制键：control, alt, shift, command

--------------------------
### keyTap
**点击并松开一个按键**

```JavaScript
static console.keyTap(String key,
    String modifier = "");
```

调用参数:
* key: String, 指定按键，单字符直接传入，功能键传入名称
* modifier: String, 指定控制键，可以为：control, alt, shift, command

参数 key 可以使用字符串传入功能键：
- 功能键：f1 - f12
- 方向键：up, down,left, right, home, end, pageup, pagedown
- 编辑键：backspace, delete, insert, enter, tab, escape, space
- 控制键：control, alt, shift, command

--------------------------
**点击并松开一个按键**

```JavaScript
static console.keyTap(String key,
    Array modifier);
```

调用参数:
* key: String, 指定按键，单字符直接传入，功能键传入名称
* modifier: Array, 指定控制键数组，可以为：control, alt, shift, command

参数 key 可以使用字符串传入功能键：
- 功能键：f1 - f12
- 方向键：up, down,left, right, home, end, pageup, pagedown
- 编辑键：backspace, delete, insert, enter, tab, escape, space
- 控制键：control, alt, shift, command

--------------------------
### typeString
**输入一个字符串**

```JavaScript
static console.typeString(String text);
```

调用参数:
* text: String, 指定输入的字符串

--------------------------
### moveMouse
**移动鼠标到指定的位置**

```JavaScript
static console.moveMouse(Integer x,
    Integer y);
```

调用参数:
* x: Integer, 指定 x 坐标
* y: Integer, 指定 y 坐标

--------------------------
### mouseUp
**按下一个鼠标键**

```JavaScript
static console.mouseUp(String button);
```

调用参数:
* button: String, 指定鼠标键名称，允许值为: left, right, moddle

--------------------------
### mouseDown
**放开一个鼠标键**

```JavaScript
static console.mouseDown(String button);
```

调用参数:
* button: String, 指定鼠标键名称，允许值为: left, right, moddle

--------------------------
### clickMouse
**点击一个鼠标键**

```JavaScript
static console.clickMouse(String button,
    Boolean dbclick = false);
```

调用参数:
* button: String, 指定鼠标键名称，允许值为: left, right, moddle
* dbclick: Boolean, 指定是否双击，缺省为 false

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

