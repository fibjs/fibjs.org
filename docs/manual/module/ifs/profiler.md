# 模块 profiler
内存 profiler 模块

使用方法：

```JavaScript
var profiler = require('profiler');
```

## 静态函数
        
### getHeapCodeStatistics
**获取= v8 堆中代码及其元数据的统计信息**

```JavaScript
static Object profiler.getHeapCodeStatistics();
```

返回结果:
* Object, 返回元数据的统计信息

--------------------------
### getHeapSpaceStatistics
**获取 v8 堆内存的详细使用情况**

```JavaScript
static Array profiler.getHeapSpaceStatistics();
```

返回结果:
* Array, 返回堆内存的详细使用情况

--------------------------
### getHeapStatistics
**获取 v8 堆内存使用情况的统计信息**

```JavaScript
static Object profiler.getHeapStatistics();
```

返回结果:
* Object, 返回堆内存使用情况的统计信息

--------------------------
### saveSnapshot
**根据指定名称保存一个堆快照**

```JavaScript
static profiler.saveSnapshot(String fname);
```

调用参数:
* fname: String, 堆快照名称

--------------------------
### loadSnapshot
**根据指定名称读取一个堆快照**

```JavaScript
static HeapSnapshot profiler.loadSnapshot(String fname);
```

调用参数:
* fname: String, 堆快照名称

返回结果:
* [HeapSnapshot](../../object/ifs/HeapSnapshot.md), 返回读取到的堆快照

--------------------------
### takeSnapshot
**获取当前时间节点的堆快照，堆快照记录了当前时刻JS堆的状态**

```JavaScript
static HeapSnapshot profiler.takeSnapshot();
```

返回结果:
* [HeapSnapshot](../../object/ifs/HeapSnapshot.md), 返回获取到的堆信息快照

--------------------------
### diff
**执行给定的函数，并对比执行前后 v8 堆的变化**

```JavaScript
static Object profiler.diff(Function test);
```

调用参数:
* test: Function, 给定要测试的函数

返回结果:
* Object, 返回对比的结果

--------------------------
### start
**启动一次运行状态采样日志**

```JavaScript
static Timer profiler.start(String fname,
    Integer time = 60000,
    Integer interval = 100);
```

调用参数:
* fname: String, 给定日志存储文件名
* time: Integer, 指定采样时间，缺省 1 分钟
* interval: Integer, 指定间隔时间，缺省 100 毫秒

返回结果:
* [Timer](../../object/ifs/Timer.md), 返回采样定时器，可以通过 clear 方法提前停止采样

## 常量
        
### Node_Hidden
**隐藏节点，当显示给用户时可以被过滤掉**

```JavaScript
const profiler.Node_Hidden = 0;
```

--------------------------
### Node_Array
**数组**

```JavaScript
const profiler.Node_Array = 1;
```

--------------------------
### Node_String
**字符串**

```JavaScript
const profiler.Node_String = 2;
```

--------------------------
### Node_Object
**JS对象（字符串和数组除外）**

```JavaScript
const profiler.Node_Object = 3;
```

--------------------------
### Node_Code
**编译后的代码**

```JavaScript
const profiler.Node_Code = 4;
```

--------------------------
### Node_Closure
**函数闭包**

```JavaScript
const profiler.Node_Closure = 5;
```

--------------------------
### Node_RegExp
**正则表达式**

```JavaScript
const profiler.Node_RegExp = 6;
```

--------------------------
### Node_HeapNumber
**堆中排好序的数字**

```JavaScript
const profiler.Node_HeapNumber = 7;
```

--------------------------
### Node_Native
**Native对象（非v8堆上的）**

```JavaScript
const profiler.Node_Native = 8;
```

--------------------------
### Node_Synthetic
**Synthetic对象**

```JavaScript
const profiler.Node_Synthetic = 9;
```

--------------------------
### Node_ConsString
**拼接的字符串**

```JavaScript
const profiler.Node_ConsString = 10;
```

--------------------------
### Node_SlicedString
**分割的字符串**

```JavaScript
const profiler.Node_SlicedString = 11;
```

--------------------------
### Node_Symbol
**符号（ES6）**

```JavaScript
const profiler.Node_Symbol = 12;
```

--------------------------
### Node_SimdValue
**堆中排好序的SIMD值(ES7)**

```JavaScript
const profiler.Node_SimdValue = 13;
```

--------------------------
### Edge_ContextVariable
**函数中的变量**

```JavaScript
const profiler.Edge_ContextVariable = 0;
```

--------------------------
### Edge_Element
**数组中的元素**

```JavaScript
const profiler.Edge_Element = 1;
```

--------------------------
### Edge_Property
**有名对象的属性**

```JavaScript
const profiler.Edge_Property = 2;
```

--------------------------
### Edge_Internal
**JS无法进入的链接**

```JavaScript
const profiler.Edge_Internal = 3;
```

--------------------------
### Edge_Hidden
**指向需要事先计算出空间大小的节点**

```JavaScript
const profiler.Edge_Hidden = 4;
```

--------------------------
### Edge_Shortcut
**指向无法事先计算出空间大小的节点**

```JavaScript
const profiler.Edge_Shortcut = 5;
```

--------------------------
### Edge_Weak
**一个弱引用（被GC忽视）**

```JavaScript
const profiler.Edge_Weak = 6;
```

