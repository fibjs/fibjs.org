# 对象 SQLite
sqlite 数据库连接对象

使用 db.open 或 db.openSQLite 创建，创建方式：
@code
var slite = db.openSQLite(&#34;sqlite:/path/to/db&#34;);
@endcode
## 函数
        
### backup
备份当前数据库到新文件
```JavaScript
SQLite.backup(String fileName);
```

** 调用参数: **
* fileName - 指定备份的数据库文件名

### close
关闭当前数据库连接
```JavaScript
SQLite.close();
```

### begin
在当前数据库连接上启动一个事务
```JavaScript
SQLite.begin();
```

### commit
提交当前数据库连接上的事务
```JavaScript
SQLite.commit();
```

### rollback
回滚当前数据库连接上的事务
```JavaScript
SQLite.rollback();
```

### execute
执行一个 sql 命令，并返回执行结果
```JavaScript
DBResult SQLite.execute(String sql);
```

** 调用参数: **
* sql - 格式化字符串，可选参数用 ? 指定。例如：&#39;SELECT FROM TEST WHERE [id]=?&#39;

** 返回结果:**
* 返回 sql 命令执行结果

### execute
执行一个 sql 命令，并返回执行结果，可根据参数格式化字符串
```JavaScript
DBResult SQLite.execute(String sql,
                ...);
```

** 调用参数: **
* sql - 格式化字符串，可选参数用 ? 指定。例如：&#39;SELECT FROM TEST WHERE [id]=?&#39;
* ... - 可选参数列表

** 返回结果:**
* 返回 sql 命令执行结果

### format
格式化一个 sql 命令，并返回格式化结果
```JavaScript
String SQLite.format(String sql,
                ...);
```

** 调用参数: **
* sql - 格式化字符串，可选参数用 ? 指定。例如：&#39;SELECT FROM TEST WHERE [id]=?&#39;
* ... - 可选参数列表

** 返回结果:**
* 返回格式化之后的 sql 命令

### dispose
强制回收对象，调用此方法后，对象资源将立即释放
```JavaScript
SQLite.dispose();
```

### equals
比较当前对象与给定的对象是否相等
```JavaScript
Boolean SQLite.equals(object expected);
```

** 调用参数: **
* expected - 制定比较的目标对象

** 返回结果:**
* 返回对象比较的结果

### toString
返回对象的字符串表示，一般返回 &#34;[Native Object]&#34;，对象可以根据自己的特性重新实现
```JavaScript
String SQLite.toString();
```

** 返回结果:**
* 返回对象的字符串表示

### toJSON
返回对象的 JSON 格式表示，一般返回对象定义的可读属性集合
```JavaScript
Value SQLite.toJSON(String key = "");
```

** 调用参数: **
* key - 未使用

** 返回结果:**
* 返回包含可 JSON 序列化的值

### valueOf
返回对象本身的数值
```JavaScript
Value SQLite.valueOf();
```

** 返回结果:**
* 返回对象本身的数值

## 属性
        
### fileName
当前数据库文件名
```JavaScript
readonly String SQLite.fileName;
```

### timeout
查询和设置数据库超时时间，以毫秒为单位
```JavaScript
Integer SQLite.timeout;
```

### type
查询当前连接数据库类型
```JavaScript
readonly String SQLite.type;
```

