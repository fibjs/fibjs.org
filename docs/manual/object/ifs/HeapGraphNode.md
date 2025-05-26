# 对象 HeapGraphNode
HeapGraphNode表示堆视图中的一个节点

## 继承关系
```dot
digraph {
    node [fontname="Helvetica,sans-Serif", fontsize=10, shape="record", style="filled", fillcolor="white"];

    object [tooltip="object", URL="object.md", label="{object|toString()\ltoJSON()\l}"];
    HeapGraphNode [tooltip="HeapGraphNode", fillcolor="lightgray", id="me", label="{HeapGraphNode|type\lname\ldescription\lid\lshallowSize\lchilds\l}"];

    object -> HeapGraphNode [dir=back];
}
```

## 成员属性
        
### type
**Integer, 节点类型，可能的值：**

```JavaScript
readonly Integer HeapGraphNode.type;
```

- profiler.Node_Hidden,         隐藏节点，当显示给用户时可以被过滤掉
- profiler.Node_Array,          数组
- profiler.Node_String,         字符串
- profiler.Node_Object,         JS对象（字符串和数组除外）
- profiler.Node_Code,           编译后的代码
- profiler.Node_Closure,        函数闭包
- profiler.Node_RegExp,         正则表达式
- profiler.Node_HeapNumber,     堆中排好序的数字
- profiler.Node_Native,         Native对象（非[v8](../../module/ifs/v8.md)堆上的）
- profiler.Node_Synthetic,      Synthetic对象
- profiler.Node_ConsString,     拼接的字符串
- profiler.Node_SlicedString,   分割的字符串
- profiler.Node_Symbol,         符号（ES6）
- profiler.Node_SimdValue,      堆中排好序的SIMD值(ES7)

--------------------------
### name
**String, 节点名称**

```JavaScript
readonly String HeapGraphNode.name;
```

--------------------------
### description
**String, 节点的描述**

```JavaScript
readonly String HeapGraphNode.description;
```

--------------------------
### id
**Integer, 节点ID**

```JavaScript
readonly Integer HeapGraphNode.id;
```

--------------------------
### shallowSize
**Integer, 节点大小，单位为字节**

```JavaScript
readonly Integer HeapGraphNode.shallowSize;
```

--------------------------
### childs
**NArray, 子节点列表，由[HeapGraphEdge](HeapGraphEdge.md)类型对象组成**

```JavaScript
readonly NArray HeapGraphNode.childs;
```

## 成员函数
        
### toString
**返回对象的字符串表示，一般返回 "[Native Object]"，对象可以根据自己的特性重新实现**

```JavaScript
String HeapGraphNode.toString();
```

返回结果:
* String, 返回对象的字符串表示

--------------------------
### toJSON
**返回对象的 JSON 格式表示，一般返回对象定义的可读属性集合**

```JavaScript
Value HeapGraphNode.toJSON(String key = "");
```

调用参数:
* key: String, 未使用

返回结果:
* Value, 返回包含可 JSON 序列化的值

