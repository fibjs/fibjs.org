# 对象 HeapSnapshot
HeapSnapshots记录JS堆在某个时刻的状态

## 函数
        
### diff
和指定的堆快照进行比较
```JavaScript
Object HeapSnapshot.diff(HeapSnapshot before);
```

**调用参数:**
* before - 待比较的堆快照

**返回结果:**
* 返回堆快照的比较结果

### getNodeById
根据ID获取堆视图节点
```JavaScript
HeapGraphNode HeapSnapshot.getNodeById(Integer id);
```

**调用参数:**
* id - 数字类型的节点ID

**返回结果:**
* 返回获取到的堆视图节点

### save
根据指定名称保存HeapSnapshot
```JavaScript
HeapSnapshot.save(String fname);
```

**调用参数:**
* fname - 快照名称

### dispose
强制回收对象，调用此方法后，对象资源将立即释放
```JavaScript
HeapSnapshot.dispose();
```

### equals
比较当前对象与给定的对象是否相等
```JavaScript
Boolean HeapSnapshot.equals(object expected);
```

**调用参数:**
* expected - 制定比较的目标对象

**返回结果:**
* 返回对象比较的结果

### toString
返回对象的字符串表示，一般返回 &#34;[Native Object]&#34;，对象可以根据自己的特性重新实现
```JavaScript
String HeapSnapshot.toString();
```

**返回结果:**
* 返回对象的字符串表示

### toJSON
返回对象的 JSON 格式表示，一般返回对象定义的可读属性集合
```JavaScript
Value HeapSnapshot.toJSON(String key = "");
```

**调用参数:**
* key - 未使用

**返回结果:**
* 返回包含可 JSON 序列化的值

### valueOf
返回对象本身的数值
```JavaScript
Value HeapSnapshot.valueOf();
```

**返回结果:**
* 返回对象本身的数值

## 属性
        
### time
时间信息
```JavaScript
readonly Date HeapSnapshot.time;
```

### root
堆视图的根节点
```JavaScript
readonly HeapGraphNode HeapSnapshot.root;
```

### nodes
堆视图节点组成的列表
```JavaScript
readonly List HeapSnapshot.nodes;
```

