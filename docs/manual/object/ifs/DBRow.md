# 对象 DBRow
数据库记录对象

## 函数
        
### dispose
强制回收对象，调用此方法后，对象资源将立即释放
```JavaScript
DBRow.dispose();
```

### equals
比较当前对象与给定的对象是否相等
```JavaScript
Boolean DBRow.equals(object expected);
```

** 调用参数: **
* expected - 制定比较的目标对象

** 返回结果:**
* 返回对象比较的结果

### toString
返回对象的字符串表示，一般返回 &#34;[Native Object]&#34;，对象可以根据自己的特性重新实现
```JavaScript
String DBRow.toString();
```

** 返回结果:**
* 返回对象的字符串表示

### toJSON
返回对象的 JSON 格式表示，一般返回对象定义的可读属性集合
```JavaScript
Value DBRow.toJSON(String key = "");
```

** 调用参数: **
* key - 未使用

** 返回结果:**
* 返回包含可 JSON 序列化的值

### valueOf
返回对象本身的数值
```JavaScript
Value DBRow.valueOf();
```

** 返回结果:**
* 返回对象本身的数值

