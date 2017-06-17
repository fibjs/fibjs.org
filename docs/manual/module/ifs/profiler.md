# 模块 profiler
内存 profiler 模块

使用方法：
@code
var profiler = require(&#39;profiler&#39;);
@endcode
## 函数
        
### saveSnapshot
根据指定名称保存一个堆快照
```JavaScript
profiler.saveSnapshot(String fname);
```

** 调用参数: **
* fname - 堆快照名称

### loadSnapshot
根据指定名称读取一个堆快照
```JavaScript
HeapSnapshot profiler.loadSnapshot(String fname);
```

** 调用参数: **
* fname - 堆快照名称

** 返回结果:**
* 返回读取到的堆快照

### takeSnapshot
获取当前时间节点的堆快照，堆快照记录了当前时刻JS堆的状态
```JavaScript
HeapSnapshot profiler.takeSnapshot();
```

** 返回结果:**
* 返回获取到的堆信息快照

### diff
执行给定的函数，并对比执行前后 v8 堆的变化
```JavaScript
Object profiler.diff(Function test);
```

** 调用参数: **
* test - 给定要测试的函数

** 返回结果:**
* 返回对比的结果

## 常量
        
### Node_Hidden
隐藏节点，当显示给用户时可以被过滤掉
```JavaScript
profiler.Node_Hidden;
```

### Node_Array
数组
```JavaScript
profiler.Node_Array;
```

### Node_String
字符串
```JavaScript
profiler.Node_String;
```

### Node_Object
JS对象（字符串和数组除外）
```JavaScript
profiler.Node_Object;
```

### Node_Code
编译后的代码
```JavaScript
profiler.Node_Code;
```

### Node_Closure
函数闭包
```JavaScript
profiler.Node_Closure;
```

### Node_RegExp
正则表达式
```JavaScript
profiler.Node_RegExp;
```

### Node_HeapNumber
堆中排好序的数字
```JavaScript
profiler.Node_HeapNumber;
```

### Node_Native
Native对象（非v8堆上的）
```JavaScript
profiler.Node_Native;
```

### Node_Synthetic
Synthetic对象
```JavaScript
profiler.Node_Synthetic;
```

### Node_ConsString
拼接的字符串
```JavaScript
profiler.Node_ConsString;
```

### Node_SlicedString
分割的字符串
```JavaScript
profiler.Node_SlicedString;
```

### Node_Symbol
符号（ES6）
```JavaScript
profiler.Node_Symbol;
```

### Node_SimdValue
堆中排好序的SIMD值(ES7)
```JavaScript
profiler.Node_SimdValue;
```

### Edge_ContextVariable
函数中的变量
```JavaScript
profiler.Edge_ContextVariable;
```

### Edge_Element
数组中的元素
```JavaScript
profiler.Edge_Element;
```

### Edge_Property
有名对象的属性
```JavaScript
profiler.Edge_Property;
```

### Edge_Internal
JS无法进入的链接
```JavaScript
profiler.Edge_Internal;
```

### Edge_Hidden
指向需要事先计算出空间大小的节点
```JavaScript
profiler.Edge_Hidden;
```

### Edge_Shortcut
指向无法事先计算出空间大小的节点
```JavaScript
profiler.Edge_Shortcut;
```

### Edge_Weak
一个弱引用（被GC忽视）
```JavaScript
profiler.Edge_Weak;
```

