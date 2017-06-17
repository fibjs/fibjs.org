# 对象 MongoDB
mongodb 数据库连接对象

使用 db.open 或 db.openMongoDB 创建，创建方式：
@code
var mdb = db.openMongoDB(&#34;mongodb://host/db&#34;);
@endcode
## 函数
        
### getCollection
获取指定集合访问对象
```JavaScript
MongoCollection MongoDB.getCollection(String name);
```

** 调用参数: **
* name - 指定集合的名称

** 返回结果:**
* 返回指定的集合对象

### runCommand
指定一个 MongoDB 数据库命令
```JavaScript
Object MongoDB.runCommand(Object cmd);
```

** 调用参数: **
* cmd - 指定命令和参数的字典对象

** 返回结果:**
* 返回命令执行结果

### runCommand
指定一个简单的 MongoDB 数据库命令
```JavaScript
Object MongoDB.runCommand(String cmd,
                Value arg);
```

** 调用参数: **
* cmd - 指定命令名
* arg - 指定命令参数

** 返回结果:**
* 返回命令执行结果

### oid
生成一个 mongodb _objectid 对象
```JavaScript
MongoID MongoDB.oid(String hexStr = "");
```

** 调用参数: **
* hexStr - 初始化 16 进制字符串，缺省生成新的 id

** 返回结果:**
* 新 _objectid 对象

### close
关闭当前数据库连接
```JavaScript
MongoDB.close();
```

### dispose
强制回收对象，调用此方法后，对象资源将立即释放
```JavaScript
MongoDB.dispose();
```

### equals
比较当前对象与给定的对象是否相等
```JavaScript
Boolean MongoDB.equals(object expected);
```

** 调用参数: **
* expected - 制定比较的目标对象

** 返回结果:**
* 返回对象比较的结果

### toString
返回对象的字符串表示，一般返回 &#34;[Native Object]&#34;，对象可以根据自己的特性重新实现
```JavaScript
String MongoDB.toString();
```

** 返回结果:**
* 返回对象的字符串表示

### toJSON
返回对象的 JSON 格式表示，一般返回对象定义的可读属性集合
```JavaScript
Value MongoDB.toJSON(String key = "");
```

** 调用参数: **
* key - 未使用

** 返回结果:**
* 返回包含可 JSON 序列化的值

### valueOf
返回对象本身的数值
```JavaScript
Value MongoDB.valueOf();
```

** 返回结果:**
* 返回对象本身的数值

## 属性
        
### fs
获取 GridFS 访问对象
```JavaScript
readonly GridFS MongoDB.fs;
```

