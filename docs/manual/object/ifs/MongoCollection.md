# 对象 MongoCollection
mongodb 数据库数据集对象

使用 MongoDB.getCollection 创建：
@code
var col1 = mdb.getCollection(&#39;test&#39;);
var col = mdb.test;
@endcode
## 函数
        
### find
根据给定的查询条件和返回字段设定，建立游标对象
```JavaScript
MongoCursor MongoCollection.find(Object query = {},
                Object projection = {});
```

** 调用参数: **
* query - 指定查询条件的对象
* projection - 指定返回字段的对象

** 返回结果:**
* 返回游标对象

### findOne
根据给定的查询条件和返回字段设定，查询一条结果
```JavaScript
Object MongoCollection.findOne(Object query = {},
                Object projection = {});
```

** 调用参数: **
* query - 指定查询条件的对象
* projection - 指定返回字段的对象

** 返回结果:**
* 返回第一条结果

### findAndModify
查询并修改
```JavaScript
Object MongoCollection.findAndModify(Object query);
```

** 调用参数: **
* query - 指定查询条件，修改数据

** 返回结果:**
* 返回修改前的结果及其他信息

### insert
插入一组数据
```JavaScript
MongoCollection.insert(Array documents);
```

** 调用参数: **
* documents - 指定要插入的数据数组

### insert
插入一条数据
```JavaScript
MongoCollection.insert(Object document);
```

** 调用参数: **
* document - 指定要插入的数据

### save
保存一条数据，若数据包含 _id 字段，则为更新，否则为插入
```JavaScript
MongoCollection.save(Object document);
```

** 调用参数: **
* document - 指定要保存的数据

### update
根据给定的查询条件更新数据
```JavaScript
MongoCollection.update(Object query,
                Object document,
                Boolean upsert = false,
                Boolean multi = false);
```

** 调用参数: **
* query - 指定查询条件的对象
* document - 指定要更新的数据
* upsert - 数据不存在时，插入一条新数据，缺省为 false，不插入
* multi - 当符合条件的数据多于一条时，更新所有数据，缺省为 false，只更新第一条

### update
根据给定的查询条件更新数据
```JavaScript
MongoCollection.update(Object query,
                Object document,
                Object options);
```

** 调用参数: **
* query - 指定查询条件的对象
* document - 指定要更新的数据
* options - 以对象字段传递的 upsert 和 multi 选项

### remove
根据给定的查询条件删除数据
```JavaScript
MongoCollection.remove(Object query);
```

** 调用参数: **
* query - 指定查询条件的对象

### runCommand
执行数据库命令
```JavaScript
Object MongoCollection.runCommand(Object cmd);
```

** 调用参数: **
* cmd - 给定命令对象

### runCommand
执行数据库命令
```JavaScript
Object MongoCollection.runCommand(String cmd,
                Object arg = {});
```

** 调用参数: **
* cmd - 给定命令名称
* arg - 给定命令参数选项

### drop
删除当前集合
```JavaScript
MongoCollection.drop();
```

### ensureIndex
在当前集合上创建索引
```JavaScript
MongoCollection.ensureIndex(Object keys,
                Object options = {});
```

** 调用参数: **
* keys - 给定索引字段、顺序和方向
* options - 给定索引的选项，唯一索引等

### reIndex
重建当前集合的索引
```JavaScript
Object MongoCollection.reIndex();
```

** 返回结果:**
* 返回命令执行结果

### dropIndex
删除当前集合指定名称的索引
```JavaScript
Object MongoCollection.dropIndex(String name);
```

** 调用参数: **
* name - 给定要删除的索引名称

** 返回结果:**
* 返回命令执行结果

### dropIndexes
删除当前集合全部索引
```JavaScript
Object MongoCollection.dropIndexes();
```

** 返回结果:**
* 返回命令执行结果

### getIndexes
查询当前集合全部索引
```JavaScript
MongoCursor MongoCollection.getIndexes();
```

** 返回结果:**
* 返回包含索引的结果集

### getCollection
获取当前集合子命名空间的集合对象
```JavaScript
MongoCollection MongoCollection.getCollection(String name);
```

** 调用参数: **
* name - 子命名空间名称

** 返回结果:**
* 返回新集合对象

### dispose
强制回收对象，调用此方法后，对象资源将立即释放
```JavaScript
MongoCollection.dispose();
```

### equals
比较当前对象与给定的对象是否相等
```JavaScript
Boolean MongoCollection.equals(object expected);
```

** 调用参数: **
* expected - 制定比较的目标对象

** 返回结果:**
* 返回对象比较的结果

### toString
返回对象的字符串表示，一般返回 &#34;[Native Object]&#34;，对象可以根据自己的特性重新实现
```JavaScript
String MongoCollection.toString();
```

** 返回结果:**
* 返回对象的字符串表示

### toJSON
返回对象的 JSON 格式表示，一般返回对象定义的可读属性集合
```JavaScript
Value MongoCollection.toJSON(String key = "");
```

** 调用参数: **
* key - 未使用

** 返回结果:**
* 返回包含可 JSON 序列化的值

### valueOf
返回对象本身的数值
```JavaScript
Value MongoCollection.valueOf();
```

** 返回结果:**
* 返回对象本身的数值

