# 模块 console
控制台访问对象

全局对象。可用于提示信息，警告和错误记录。通过启动配置文件，可将日志定位
到不同的设备，以便于跟踪。日志支持格式化输出，例如：
@code
console.log(&#34;%d + %d = %d&#34;, 100, 200, 100 + 200);
@endcode
可以使用的格式化参数如下：
- %s - 字符串
- %d - 数字，包括整数和数字
- %j - 以 JSON 格式输出对象
- %% - 输出字符 &#39;%&#39; 本身
## 函数
        
### add
批量添加 console 输出系统，支持的设备为 console, syslog 和 file，最多可以添加 10 个输出
```JavaScript
console.add(Array cfg);
```

**调用参数:**
* cfg - 输出配置数组

通过配置 console，可以将程序输出和系统错误发往不同设备，用于运行环境信息收集。

@code
console.add([&#34;console&#34;, {
   type: &#34;syslog&#34;,
   levels: [console.INFO, console.ERROR]
}]);
@endcode

### add
添加 console 输出系统，支持的设备为 console, syslog 和 file，最多可以添加 10 个输出
```JavaScript
console.add(Value cfg);
```

**调用参数:**
* cfg - 输出配置

通过配置 console，可以将程序输出和系统错误发往不同设备，用于运行环境信息收集。

cfg 为配置，可以为设备名称字符串：

@code
console.add(&#34;console&#34;);
@endcode

也可以为一个设备配置对象：
@code
console.add({
   type: &#34;console&#34;,
   levels: [console.INFO, console.ERROR]  // 选项，省略则输出全部级别日志
});
@endcode

syslog 仅在 posix 平台有效：
@code
console.add({
   type: &#34;syslog&#34;,
   levels: [console.INFO, console.ERROR]
});
@endcode

file 日志不支持简单调用：
@code
console.add({
   type: &#34;file&#34;,
   levels: [console.INFO, console.ERROR],
   path: &#34;path/to/file&#34;,  // 必选项
   split: &#34;30m&#34;,  // 选项，可选值为 &#34;day&#34;, &#34;hour&#34;, &#34;minute&#34;, &#34;###k&#34;, &#34;###m&#34;, &#34;###g&#34;
   count: 10 // 选项，可选范围为 2-128，指定此项时必须提供 split
});
@endcode

### reset
初始化到缺省设置，只在 console 输出信息
```JavaScript
console.reset();
```

### log
记录普通日志信息，与 info 等同
```JavaScript
console.log(String fmt,
                ...);
```

**调用参数:**
* fmt - 格式化字符串
* ... - 可选参数列表

记录一般等级的日志信息。通常用于输出非错误性提示信息。

### log
记录普通日志信息，与 info 等同
```JavaScript
console.log(...);
```

**调用参数:**
* ... - 可选参数列表

记录一般等级的日志信息。通常用于输出非错误性提示信息。

### debug
记录调试日志信息
```JavaScript
console.debug(String fmt,
                ...);
```

**调用参数:**
* fmt - 格式化字符串
* ... - 可选参数列表

记录调试日志信息。通常用于输出调试信息。不重要。

### debug
记录调试日志信息
```JavaScript
console.debug(...);
```

**调用参数:**
* ... - 可选参数列表

记录调试日志信息。通常用于输出调试信息。不重要。

### info
记录普通日志信息，与 log 等同
```JavaScript
console.info(String fmt,
                ...);
```

**调用参数:**
* fmt - 格式化字符串
* ... - 可选参数列表

记录一般等级的日志信息。通常用于输出非错误性提示信息。

### info
记录普通日志信息，与 log 等同
```JavaScript
console.info(...);
```

**调用参数:**
* ... - 可选参数列表

记录一般等级的日志信息。通常用于输出非错误性提示信息。

### notice
记录警告日志信息
```JavaScript
console.notice(String fmt,
                ...);
```

**调用参数:**
* fmt - 格式化字符串
* ... - 可选参数列表

记录警告日志信息。通常用于输出提示性调试信息。一般重要。

### notice
记录警告日志信息
```JavaScript
console.notice(...);
```

**调用参数:**
* ... - 可选参数列表

记录警告日志信息。通常用于输出提示性调试信息。一般重要。

### warn
记录警告日志信息
```JavaScript
console.warn(String fmt,
                ...);
```

**调用参数:**
* fmt - 格式化字符串
* ... - 可选参数列表

记录警告日志信息。通常用于输出警告性调试信息。重要。

### warn
记录警告日志信息
```JavaScript
console.warn(...);
```

**调用参数:**
* ... - 可选参数列表

记录警告日志信息。通常用于输出警告性调试信息。重要。

### error
记录错误日志信息
```JavaScript
console.error(String fmt,
                ...);
```

**调用参数:**
* fmt - 格式化字符串
* ... - 可选参数列表

记录用于错误日志信息。通常用于输出错误信息。非常重要。系统的出错信息也会以此等级记录。

### error
记录错误日志信息
```JavaScript
console.error(...);
```

**调用参数:**
* ... - 可选参数列表

记录用于错误日志信息。通常用于输出错误信息。非常重要。系统的出错信息也会以此等级记录。

### crit
记录关键错误日志信息
```JavaScript
console.crit(String fmt,
                ...);
```

**调用参数:**
* fmt - 格式化字符串
* ... - 可选参数列表

记录用于关键错误日志信息。通常用于输出关键错误信息。非常重要。

### crit
记录关键错误日志信息
```JavaScript
console.crit(...);
```

**调用参数:**
* ... - 可选参数列表

记录用于关键错误日志信息。通常用于输出关键错误信息。非常重要。

### alert
记录警报错误日志信息
```JavaScript
console.alert(String fmt,
                ...);
```

**调用参数:**
* fmt - 格式化字符串
* ... - 可选参数列表

记录用于警报错误日志信息。通常用于输出警报错误信息。非常重要。为最高级别信息。

### alert
记录警报错误日志信息
```JavaScript
console.alert(...);
```

**调用参数:**
* ... - 可选参数列表

记录用于警报错误日志信息。通常用于输出警报错误信息。非常重要。为最高级别信息。

### dir
用 JSON 格式输出对象
```JavaScript
console.dir(Value obj);
```

**调用参数:**
* obj - 给定要显示的对象

### time
启动一个计时器
```JavaScript
console.time(String label = "time");
```

**调用参数:**
* label - 标题，缺省为空字符串。

### timeEnd
统计指定计时器的数值
```JavaScript
console.timeEnd(String label = "time");
```

**调用参数:**
* label - 标题，缺省为空字符串。

### trace
输出当前调用堆栈
```JavaScript
console.trace(String label = "trace");
```

**调用参数:**
* label - 标题，缺省为空字符串。

通过日志输出当前调用堆栈。

### assert
断言测试，如果测试值为假，则报错
```JavaScript
console.assert(Value value,
                String msg = "");
```

**调用参数:**
* value - 测试的数值
* msg - 报错信息

### print
向控制台输出格式化文本，输出内容不会记入日志系统，输出文本后不会自动换行，可连续输出
```JavaScript
console.print(String fmt,
                ...);
```

**调用参数:**
* fmt - 格式化字符串
* ... - 可选参数列表

### print
向控制台输出格式化文本，输出内容不会记入日志系统，输出文本后不会自动换行，可连续输出
```JavaScript
console.print(...);
```

**调用参数:**
* ... - 可选参数列表

### moveTo
移动控制台光标到指定位置
```JavaScript
console.moveTo(Integer row,
                Integer column);
```

**调用参数:**
* row - 指定新光标的行坐标
* column - 指定新光标的列坐标

### hideCursor
隐藏控制台光标
```JavaScript
console.hideCursor();
```

### showCursor
显示控制台光标
```JavaScript
console.showCursor();
```

### clear
清除控制台
```JavaScript
console.clear();
```

### keyDown
按下一个按键
```JavaScript
console.keyDown(String key,
                String modifier = "");
```

**调用参数:**
* key - 指定按键，单字符直接传入，功能键传入名称：
* modifier - 指定控制键，可以为：control, alt, shift, command

### keyDown
按下一个按键
```JavaScript
console.keyDown(String key,
                Array modifier);
```

**调用参数:**
* key - 指定按键，单字符直接传入，功能键传入名称：
* modifier - 指定控制键数组，可以为：control, alt, shift, command

### keyUp
松开一个按键
```JavaScript
console.keyUp(String key,
                String modifier = "");
```

**调用参数:**
* key - 指定按键，单字符直接传入，功能键传入名称：
* modifier - 指定控制键，可以为：control, alt, shift, command

### keyUp
松开一个按键
```JavaScript
console.keyUp(String key,
                Array modifier);
```

**调用参数:**
* key - 指定按键，单字符直接传入，功能键传入名称：
* modifier - 指定控制键数组，可以为：control, alt, shift, command

### keyTap
点击并松开一个按键
```JavaScript
console.keyTap(String key,
                String modifier = "");
```

**调用参数:**
* key - 指定按键，单字符直接传入，功能键传入名称：
* modifier - 指定控制键，可以为：control, alt, shift, command

### keyTap
点击并松开一个按键
```JavaScript
console.keyTap(String key,
                Array modifier);
```

**调用参数:**
* key - 指定按键，单字符直接传入，功能键传入名称：
* modifier - 指定控制键数组，可以为：control, alt, shift, command

### typeString
输入一个字符串
```JavaScript
console.typeString(String text);
```

**调用参数:**
* text - 指定输入的字符串

### moveMouse
移动鼠标到指定的位置
```JavaScript
console.moveMouse(Integer x,
                Integer y);
```

**调用参数:**
* x - 指定 x 坐标
* y - 指定 y 坐标

### mouseUp
按下一个鼠标键
```JavaScript
console.mouseUp(String button);
```

**调用参数:**
* button - 指定鼠标键名称，允许值为: left, right, moddle

### mouseDown
放开一个鼠标键
```JavaScript
console.mouseDown(String button);
```

**调用参数:**
* button - 指定鼠标键名称，允许值为: left, right, moddle

### clickMouse
点击一个鼠标键
```JavaScript
console.clickMouse(String button,
                Boolean dbclick = false);
```

**调用参数:**
* button - 指定鼠标键名称，允许值为: left, right, moddle
* dbclick - 指定是否双击，缺省为 false

### readLine
从控制台读取用户输入
```JavaScript
String console.readLine(String msg = "");
```

**调用参数:**
* msg - 提示信息

**返回结果:**
* 返回用户输入的信息

## 属性
        
### loglevel
输出级别，用以过滤输出信息，缺省为 NOTSET，全部输出。信息过滤之后才会输出给 add 设定的各个设备。
```JavaScript
Integer console.loglevel;
```

### colors
终端输出颜色配置对象，详见 TextColor
```JavaScript
readonly TextColor console.colors;
```

### width
查询终端每行字符数
```JavaScript
readonly Integer console.width;
```

### height
查询终端行数
```JavaScript
readonly Integer console.height;
```

## 常量
        
### FATAL
loglevel 级别常量
```JavaScript
console.FATAL;
```

### ALERT
loglevel 级别常量
```JavaScript
console.ALERT;
```

### CRIT
loglevel 级别常量
```JavaScript
console.CRIT;
```

### ERROR
loglevel 级别常量
```JavaScript
console.ERROR;
```

### WARN
loglevel 级别常量
```JavaScript
console.WARN;
```

### NOTICE
loglevel 级别常量
```JavaScript
console.NOTICE;
```

### INFO
loglevel 级别常量
```JavaScript
console.INFO;
```

### DEBUG
loglevel 级别常量
```JavaScript
console.DEBUG;
```

### PRINT
loglevel 仅用于输出，信息输出后不换行，file 和 syslog 不保存此级别信息
```JavaScript
console.PRINT;
```

### NOTSET
loglevel 级别常量
```JavaScript
console.NOTSET;
```

