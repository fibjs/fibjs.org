# 对象 Odbc
Odbc 数据库连接对象

## 继承关系
```dot
digraph {
    node [fontname="Helvetica,sans-Serif", fontsize=10, shape="record", style="filled", fillcolor="white"];

    object [tooltip="object", URL="object.md", label="{object|toString()\ltoJSON()\l}"];
    DbConnection [tooltip="DbConnection", URL="DbConnection.md", label="{DbConnection|type\l|close()\luse()\lbegin()\lcommit()\lrollback()\ltrans()\lexecute()\lcreateTable()\ldropTable()\lcreateIndex()\ldropIndex()\linsert()\lfind()\lcount()\lupdate()\lremove()\lformat()\l}"];
    Odbc [tooltip="Odbc", fillcolor="lightgray", id="me", label="{Odbc|codec\l}"];

    object -> DbConnection [dir=back];
    DbConnection -> Odbc [dir=back];
}
```

## 成员属性
        
### codec
**String, 查询和设置数据库编码，缺省 "utf8"**

```JavaScript
String Odbc.codec;
```

--------------------------
### type
**String, 查询当前连接数据库类型**

```JavaScript
readonly String Odbc.type;
```

## 成员函数
        
### close
**关闭当前数据库连接**

```JavaScript
Odbc.close() async;
```

--------------------------
### use
**选择当前数据库连接的缺省数据库**

```JavaScript
Odbc.use(String dbName) async;
```

调用参数:
* dbName: String, 指定数据库名

--------------------------
### begin
**在当前数据库连接上启动一个事务**

```JavaScript
Odbc.begin(String point = "") async;
```

调用参数:
* point: String, 指定事务的名称，缺省不指定

--------------------------
### commit
**提交当前数据库连接上的事务**

```JavaScript
Odbc.commit(String point = "") async;
```

调用参数:
* point: String, 指定事务的名称，缺省不指定

--------------------------
### rollback
**回滚当前数据库连接上的事务**

```JavaScript
Odbc.rollback(String point = "") async;
```

调用参数:
* point: String, 指定事务的名称，缺省不指定

--------------------------
### trans
**进入事务执行一个函数，并根据函数执行情况提交或者回滚**

```JavaScript
Boolean Odbc.trans(Function func);
```

调用参数:
* func: Function, 以事务方式执行的函数

返回结果:
* Boolean, 返回事务是否提交，正常 commit 时返回 true, rollback 时返回 false，如果事务出错则抛出错误

func 执行有三种结果：
* 函数正常返回，包括运行结束和主动 return，此时事务将自动提交
* 函数返回 false，此时事务将回滚
* 函数运行错误，事务自动回滚

--------------------------
**进入事务执行一个函数，并根据函数执行情况提交或者回滚**

```JavaScript
Boolean Odbc.trans(String point,
    Function func);
```

调用参数:
* point: String, 指定事务的名称
* func: Function, 以事务方式执行的函数

返回结果:
* Boolean, 返回事务是否提交，正常 commit 时返回 true, rollback 时返回 false，如果事务出错则抛出错误

func 执行有三种结果：
* 函数正常返回，包括运行结束和主动 return，此时事务将自动提交
* 函数返回 false，此时事务将回滚
* 函数运行错误，事务自动回滚

--------------------------
### execute
**执行一个 sql 命令，并返回执行结果**

```JavaScript
NArray Odbc.execute(String sql) async;
```

调用参数:
* sql: String, 字符串

返回结果:
* NArray, 返回包含结果记录的数组，如果请求是 UPDATE 或者 INSERT，返回结果还会包含 affected 和 insertId，mssql 不支持 insertId。

--------------------------
**执行一个 sql 命令，并返回执行结果，可根据参数格式化字符串**

```JavaScript
NArray Odbc.execute(String sql,
    ...args) async;
```

调用参数:
* sql: String, 格式化字符串，可选参数用 ? 指定。例如：'SELECT FROM TEST WHERE [id]=?'
* args: ..., 可选参数列表

返回结果:
* NArray, 返回包含结果记录的数组，如果请求是 UPDATE 或者 INSERT，返回结果还会包含 affected 和 insertId，mssql 不支持 insertId。

--------------------------
### createTable
**创建数据表**

```JavaScript
Odbc.createTable(Object opts) async;
```

调用参数:
* opts: Object, 参数列表

--------------------------
### dropTable
**删除数据表**

```JavaScript
Odbc.dropTable(Object opts) async;
```

调用参数:
* opts: Object, 参数列表

--------------------------
### createIndex
**创建数据表索引**

```JavaScript
Odbc.createIndex(Object opts) async;
```

调用参数:
* opts: Object, 参数列表

--------------------------
### dropIndex
**删除数据表索引**

```JavaScript
Odbc.dropIndex(Object opts) async;
```

调用参数:
* opts: Object, 参数列表

--------------------------
### insert
**插入新记录**

```JavaScript
Number Odbc.insert(Object opts) async;
```

调用参数:
* opts: Object, 参数列表

返回结果:
* Number, 返回包含插入的 id，如果引擎不支持则返回 0

--------------------------
### find
**根据指定的条件查询数据**

```JavaScript
NArray Odbc.find(Object opts) async;
```

调用参数:
* opts: Object, 参数列表

返回结果:
* NArray, 返回包含结果记录

--------------------------
### count
**根据指定的条件统计数据记录数**

```JavaScript
Integer Odbc.count(Object opts) async;
```

调用参数:
* opts: Object, 参数列表

返回结果:
* Integer, 返回包含结果记录数

--------------------------
### update
**根据指定的条件更新数据**

```JavaScript
Integer Odbc.update(Object opts) async;
```

调用参数:
* opts: Object, 参数列表

返回结果:
* Integer, 返回包含更新的记录数

--------------------------
### remove
**根据指定的条件删除数据**

```JavaScript
Integer Odbc.remove(Object opts) async;
```

调用参数:
* opts: Object, 可选参数列表

返回结果:
* Integer, 返回包含更新的记录数

--------------------------
### format
**格式化一个 sql 命令，并返回格式化结果**

```JavaScript
String Odbc.format(String method,
    Object opts);
```

调用参数:
* method: String, 指定请求的方法
* opts: Object, 可选参数列表

返回结果:
* String, 返回格式化之后的 sql 命令

--------------------------
**格式化一个 sql 命令，并返回格式化结果**

```JavaScript
String Odbc.format(String sql,
    ...args);
```

调用参数:
* sql: String, 格式化字符串，可选参数用 ? 指定。例如：'SELECT FROM TEST WHERE [id]=?'
* args: ..., 可选参数列表

返回结果:
* String, 返回格式化之后的 sql 命令

--------------------------
### toString
**返回对象的字符串表示，一般返回 "[Native Object]"，对象可以根据自己的特性重新实现**

```JavaScript
String Odbc.toString();
```

返回结果:
* String, 返回对象的字符串表示

--------------------------
### toJSON
**返回对象的 JSON 格式表示，一般返回对象定义的可读属性集合**

```JavaScript
Value Odbc.toJSON(String key = "");
```

调用参数:
* key: String, 未使用

返回结果:
* Value, 返回包含可 JSON 序列化的值

