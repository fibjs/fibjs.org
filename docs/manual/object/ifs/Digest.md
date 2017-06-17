# 对象 Digest
信息摘要对象

## 函数
        
### update
更新二进制摘要信息
```JavaScript
Digest.update(Buffer data);
```

** 调用参数: **
* data - 二进制数据块

### digest
计算并返回摘要
```JavaScript
Buffer Digest.digest(Buffer data);
```

** 调用参数: **
* data - 二进制数据块，此数据块将在计算前更新进摘要

** 返回结果:**
* 返回摘要的二进制数据

### digest
计算并返回摘要
```JavaScript
Buffer Digest.digest();
```

** 返回结果:**
* 返回摘要的二进制数据

### dispose
强制回收对象，调用此方法后，对象资源将立即释放
```JavaScript
Digest.dispose();
```

### equals
比较当前对象与给定的对象是否相等
```JavaScript
Boolean Digest.equals(object expected);
```

** 调用参数: **
* expected - 制定比较的目标对象

** 返回结果:**
* 返回对象比较的结果

### toString
返回对象的字符串表示，一般返回 &#34;[Native Object]&#34;，对象可以根据自己的特性重新实现
```JavaScript
String Digest.toString();
```

** 返回结果:**
* 返回对象的字符串表示

### toJSON
返回对象的 JSON 格式表示，一般返回对象定义的可读属性集合
```JavaScript
Value Digest.toJSON(String key = "");
```

** 调用参数: **
* key - 未使用

** 返回结果:**
* 返回包含可 JSON 序列化的值

### valueOf
返回对象本身的数值
```JavaScript
Value Digest.valueOf();
```

** 返回结果:**
* 返回对象本身的数值

## 属性
        
### size
查询当前信息摘要算法的摘要字节数
```JavaScript
readonly Integer Digest.size;
```

