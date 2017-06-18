# 对象 HeapGraphEdge
HeapGraphEdge表示两个[HeapGraphNode](HeapGraphNode.md)节点间的关联，从上游节点到下游节点

## 函数
        
### getFromNode
获取HeapGraphEdge的上游[HeapGraphNode](HeapGraphNode.md)节点
```JavaScript
HeapGraphNode HeapGraphEdge.getFromNode();
```

返回结果:
* 返回源HeapGraphNode节点

### getToNode
获取HeapGraphEdge的下游[HeapGraphNode](HeapGraphNode.md)节点
```JavaScript
HeapGraphNode HeapGraphEdge.getToNode();
```

返回结果:
* 返回目的HeapGraphNode节点

### dispose
强制回收对象，调用此方法后，对象资源将立即释放
```JavaScript
HeapGraphEdge.dispose();
```

### equals
比较当前对象与给定的对象是否相等
```JavaScript
Boolean HeapGraphEdge.equals(object expected);
```

调用参数:
* expected - 制定比较的目标对象

返回结果:
* 返回对象比较的结果

### toString
返回对象的字符串表示，一般返回 "[Native Object]"，对象可以根据自己的特性重新实现
```JavaScript
String HeapGraphEdge.toString();
```

返回结果:
* 返回对象的字符串表示

### toJSON
返回对象的 JSON 格式表示，一般返回对象定义的可读属性集合
```JavaScript
Value HeapGraphEdge.toJSON(String key = "");
```

调用参数:
* key - 未使用

返回结果:
* 返回包含可 JSON 序列化的值

### valueOf
返回对象本身的数值
```JavaScript
Value HeapGraphEdge.valueOf();
```

返回结果:
* 返回对象本身的数值

## 属性
        
### type
下游节点的链接方式，可能的值：
```JavaScript
readonly Integer HeapGraphEdge.type;
```

- [profiler](../../module/ifs/profiler.md).Edge_ContextVariable,  函数中的变量
- [profiler](../../module/ifs/profiler.md).Edge_Element,          数组中的元素
- [profiler](../../module/ifs/profiler.md).Edge_Property,         有名对象的属性
- [profiler](../../module/ifs/profiler.md).Edge_Internal,         JS无法进入的链接
- [profiler](../../module/ifs/profiler.md).Edge_Hidden,           指向需要事先计算出空间大小的节点
- [profiler](../../module/ifs/profiler.md).Edge_Shortcut,         指向无法事先计算出空间大小的节点
- [profiler](../../module/ifs/profiler.md).Edge_Weak,             一个弱引用（被GC忽视）

### name
链接名称
```JavaScript
readonly String HeapGraphEdge.name;
```

### description
链接的描述
```JavaScript
readonly String HeapGraphEdge.description;
```

