# 对象 List
Variant 数组对象，一般用以返回一组 Variant 数据

用以创建和管理数组对象，创建方法：
@code
var collection = require(&#34;collection&#34;);
var a = new collection.List();
@endcode
## 构造函数
        
### List
List 对象构造函数
```JavaScript
 new List();
```

### List
List 对象构造函数
```JavaScript
 new List(Array data);
```

** 调用参数: **
* data - 初始化的一组元素

## 函数
        
### freeze
冻结数组内容，禁止一些修改操作
```JavaScript
List.freeze();
```

### resize
修改数组尺寸
```JavaScript
List.resize(Integer sz);
```

** 调用参数: **
* sz - 指定新尺寸

### push
在数组结尾添加一个元素
```JavaScript
Integer List.push(Variant v);
```

** 调用参数: **
* v - 指定添加的元素

** 返回结果:**
* 添加元素之后数组的长度

### indexOf
返回在list中可以找到给定元素的第一个索引，如果不存在，则返回-1
```JavaScript
Integer List.indexOf(Variant searchElement,
                Integer fromIndex = 0);
```

** 调用参数: **
* searchElement - 要查找的元素
* fromIndex - 开始查找的位置。如果该索引值大于或等于数组长度，意味着不会在数组里查找，返回-1。

** 返回结果:**
* 首个被找到的元素在数组中的索引位置; 若没有找到则返回 -1

### lastIndexOf
lastIndexOf() 方法返回指定元素在数组中的最后一个的索引，如果不存在则返回 -1。从数组的后面向前查找，从 fromIndex 处开始。
```JavaScript
Integer List.lastIndexOf(Variant searchElement,
                Integer fromIndex = 0);
```

** 调用参数: **
* searchElement - 要查找的元素
* fromIndex - 从此位置开始逆向查找。默认为数组的长度减 1，即整个数组都被查找。

** 返回结果:**
* 给定元素在数组中最后一次出现的索引位置; 若没有找到则返回 -1

### push
在数组结尾添加一个元素
```JavaScript
Integer List.push(...);
```

** 调用参数: **
* ... - 指定添加的多个元素

** 返回结果:**
* 添加元素之后数组的长度

### pushArray
在数组结尾添加一组元素
```JavaScript
List.pushArray(Array data);
```

** 调用参数: **
* data - 添加的一组元素

### pop
返回数组结尾的一个元素
```JavaScript
Variant List.pop();
```

** 返回结果:**
* 结尾的元素

### slice
返回一个新数组，包含指定范围的数据，若范围超出缓存，则只返回有效部分数据
```JavaScript
List List.slice(Integer start = 0,
                Integer end = -1);
```

** 调用参数: **
* start - 指定范围的起始，缺省从头开始
* end - 指定范围的结束，缺省到缓存结尾

** 返回结果:**
* 返回新的数组

### concat
将当前数组与给定的一个或者多个数组合并
```JavaScript
List List.concat(...);
```

** 调用参数: **
* ... - 给定的一个或多个数组

** 返回结果:**
* 返回合并的数组

### every
检测全部数据是否通过测试函数
```JavaScript
Boolean List.every(Function func,
                Value thisArg = undefined);
```

** 调用参数: **
* func - 测试函数
* thisArg - 调用测试函数的参数，可省略

** 返回结果:**
* 全部通过测试则返回 true

### some
检测一些数据是否通过测试函数
```JavaScript
Boolean List.some(Function func,
                Value thisArg = undefined);
```

** 调用参数: **
* func - 测试函数
* thisArg - 调用测试函数的参数，可省略

** 返回结果:**
* 全部不通过测试则返回 false，否则返回true

### filter
过滤通过测试的数据成为一个新的数组
```JavaScript
List List.filter(Function func,
                Value thisArg = undefined);
```

** 调用参数: **
* func - 测试函数
* thisArg - 调用过滤函数的参数，可省略

** 返回结果:**
* 经过过滤的新数组

### forEach
遍历处理全部数据
```JavaScript
List.forEach(Function func,
                Value thisArg = undefined);
```

** 调用参数: **
* func - 处理函数
* thisArg - 调用处理函数的参数，可省略

### map
遍历处理全部数据并返回结果
```JavaScript
List List.map(Function func,
                Value thisArg = undefined);
```

** 调用参数: **
* func - 处理函数
* thisArg - 调用处理函数的参数，可省略

** 返回结果:**
* 处理结果数组

### reduce
遍历处理全部数据并返回累积结果
```JavaScript
Value List.reduce(Function func,
                Value initVal = undefined);
```

** 调用参数: **
* func - 处理函数
* initVal - 初始值，可省略

** 返回结果:**
* 处理结果数组

### sort
排序全部数据并返回列表本身
```JavaScript
List List.sort(Function func);
```

** 调用参数: **
* func - 比较处理函数

** 返回结果:**
* 列表本身

### sort
排序全部数据并返回列表本身
```JavaScript
List List.sort();
```

** 返回结果:**
* 列表本身

### toArray
返回列表的 js 数组
```JavaScript
Array List.toArray();
```

** 返回结果:**
* 包含数据的 js 数组

### dispose
强制回收对象，调用此方法后，对象资源将立即释放
```JavaScript
List.dispose();
```

### equals
比较当前对象与给定的对象是否相等
```JavaScript
Boolean List.equals(object expected);
```

** 调用参数: **
* expected - 制定比较的目标对象

** 返回结果:**
* 返回对象比较的结果

### toString
返回对象的字符串表示，一般返回 &#34;[Native Object]&#34;，对象可以根据自己的特性重新实现
```JavaScript
String List.toString();
```

** 返回结果:**
* 返回对象的字符串表示

### toJSON
返回对象的 JSON 格式表示，一般返回对象定义的可读属性集合
```JavaScript
Value List.toJSON(String key = "");
```

** 调用参数: **
* key - 未使用

** 返回结果:**
* 返回包含可 JSON 序列化的值

### valueOf
返回对象本身的数值
```JavaScript
Value List.valueOf();
```

** 返回结果:**
* 返回对象本身的数值

## 属性
        
### length
获取数组的尺寸
```JavaScript
readonly Integer List.length;
```

