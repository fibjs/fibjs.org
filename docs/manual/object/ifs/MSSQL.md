# 对象 MSSQL
SQL Server 数据库连接对象

使用 [db.open](../../module/ifs/db.md#open) 或 [db.openMySQL](../../module/ifs/db.md#openMySQL) 创建，创建方式：

```JavaScript
var sql = db.openMSSQL("mssql://user:pass@host/db");
```

## 继承关系
```dot
digraph {
    node [fontname="Helvetica,sans-Serif", fontsize=10, shape="record", style="filled", fillcolor="white"];

    object [tooltip="object", URL="object.md", label="{object|dispose()\lequals()\ltoString()\ltoJSON()\l}"];
    DbConnection [tooltip="DbConnection", URL="DbConnection.md", label="{DbConnection|type\l|close()\lbegin()\lcommit()\lrollback()\ltrans()\lexecute()\lformat()\l}"];
    MSSQL [tooltip="MSSQL", fillcolor="lightgray", label="{MSSQL|use()\l}"];

    object -> DbConnection [dir=back];
    DbConnection -> MSSQL [dir=back];
}
```

## 成员属性
        
### type
**String, 查询当前连接数据库类型**

```JavaScript
readonly String MSSQL.type;
```

## 成员函数
        
### use
**选择当前数据库连接的缺省数据库**

```JavaScript
MSSQL.use(String dbName) async;
```

调用参数:
* dbName: String, 指定数据库名

--------------------------
### close
**关闭当前数据库连接**

```JavaScript
MSSQL.close() async;
```

--------------------------
### begin
**在当前数据库连接上启动一个事务**

```JavaScript
MSSQL.begin() async;
```

--------------------------
### commit
**提交当前数据库连接上的事务**

```JavaScript
MSSQL.commit() async;
```

--------------------------
### rollback
**回滚当前数据库连接上的事务**

```JavaScript
MSSQL.rollback() async;
```

--------------------------
### trans
**进入事务执行一个函数，并根据函数执行情况提交或者回滚**

```JavaScript
MSSQL.trans(Function func);
```

调用参数:
* func: Function, 以事务方式执行的函数

func 执行有三种结果：
* 函数正常返回，包括运行结束和主动 return，此时事务将自动提交
* 函数返回 false，此时事务将回滚
* 函数运行错误，事务自动回滚

--------------------------
### execute
**执行一个 sql 命令，并返回执行结果**

```JavaScript
NArray MSSQL.execute(String sql) async;
```

调用参数:
* sql: String, 格式化字符串，可选参数用 ? 指定。例如：'SELECT FROM TEST WHERE [id]=?'

返回结果:
* NArray, 返回包含结果记录的数组，如果请求是 UPDATE 或者 INSERT，返回结果还会包含 affected 和 insertId，mssql 不支持 insertId。

--------------------------
**执行一个 sql 命令，并返回执行结果，可根据参数格式化字符串**

```JavaScript
NArray MSSQL.execute(String sql,
    ...args) async;
```

调用参数:
* sql: String, 格式化字符串，可选参数用 ? 指定。例如：'SELECT FROM TEST WHERE [id]=?'
* args: ..., 可选参数列表

返回结果:
* NArray, 返回包含结果记录的数组，如果请求是 UPDATE 或者 INSERT，返回结果还会包含 affected 和 insertId，mssql 不支持 insertId。

--------------------------
### format
**格式化一个 sql 命令，并返回格式化结果**

```JavaScript
String MSSQL.format(String sql,
    ...args);
```

调用参数:
* sql: String, 格式化字符串，可选参数用 ? 指定。例如：'SELECT FROM TEST WHERE [id]=?'
* args: ..., 可选参数列表

返回结果:
* String, 返回格式化之后的 sql 命令

--------------------------
### dispose
**强制回收对象，调用此方法后，对象资源将立即释放**

```JavaScript
MSSQL.dispose();
```

--------------------------
### equals
**比较当前对象与给定的对象是否相等**

```JavaScript
Boolean MSSQL.equals(object expected);
```

调用参数:
* expected: [object](object.md), 制定比较的目标对象

返回结果:
* Boolean, 返回对象比较的结果

--------------------------
### toString
**返回对象的字符串表示，一般返回 "[Native Object]"，对象可以根据自己的特性重新实现**

```JavaScript
String MSSQL.toString();
```

返回结果:
* String, 返回对象的字符串表示

--------------------------
### toJSON
**返回对象的 JSON 格式表示，一般返回对象定义的可读属性集合**

```JavaScript
Value MSSQL.toJSON(String key = "");
```

调用参数:
* key: String, 未使用

返回结果:
* Value, 返回包含可 JSON 序列化的值

