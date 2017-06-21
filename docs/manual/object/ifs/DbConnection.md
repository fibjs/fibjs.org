# 对象 DbConnection
数据库连接对象，用于建立和维护一个数据库连接会话。

## 成员函数
        
### close
** 关闭当前数据库连接 **
```JavaScript
DbConnection.close() async;
```

--------------------------
### begin
** 在当前数据库连接上启动一个事务 **
```JavaScript
DbConnection.begin() async;
```

--------------------------
### commit
** 提交当前数据库连接上的事务 **
```JavaScript
DbConnection.commit() async;
```

--------------------------
### rollback
** 回滚当前数据库连接上的事务 **
```JavaScript
DbConnection.rollback() async;
```

--------------------------
### execute
** 执行一个 sql 命令，并返回执行结果 **
```JavaScript
DBResult DbConnection.execute(String sql) async;
```

调用参数:
* sql: String, 格式化字符串，可选参数用 ? 指定。例如：'SELECT FROM TEST WHERE [id]=?'

返回结果:
* [DBResult](DBResult.md), 返回 sql 命令执行结果

--------------------------
** 执行一个 sql 命令，并返回执行结果，可根据参数格式化字符串 **
```JavaScript
DBResult DbConnection.execute(String sql,
                ...);
```

调用参数:
* sql: String, 格式化字符串，可选参数用 ? 指定。例如：'SELECT FROM TEST WHERE [id]=?'
* ...: 可选参数列表

返回结果:
* [DBResult](DBResult.md), 返回 sql 命令执行结果

--------------------------
### format
** 格式化一个 sql 命令，并返回格式化结果 **
```JavaScript
String DbConnection.format(String sql,
                ...);
```

调用参数:
* sql: String, 格式化字符串，可选参数用 ? 指定。例如：'SELECT FROM TEST WHERE [id]=?'
* ...: 可选参数列表

返回结果:
* String, 返回格式化之后的 sql 命令

--------------------------
### dispose
** 强制回收对象，调用此方法后，对象资源将立即释放 **
```JavaScript
DbConnection.dispose();
```

--------------------------
### equals
** 比较当前对象与给定的对象是否相等 **
```JavaScript
Boolean DbConnection.equals(object expected);
```

调用参数:
* expected: object, 制定比较的目标对象

返回结果:
* Boolean, 返回对象比较的结果

--------------------------
### toString
** 返回对象的字符串表示，一般返回 "[Native Object]"，对象可以根据自己的特性重新实现 **
```JavaScript
String DbConnection.toString();
```

返回结果:
* String, 返回对象的字符串表示

--------------------------
### toJSON
** 返回对象的 JSON 格式表示，一般返回对象定义的可读属性集合 **
```JavaScript
Value DbConnection.toJSON(String key = "");
```

调用参数:
* key: String, 未使用

返回结果:
* Value, 返回包含可 JSON 序列化的值

--------------------------
### valueOf
** 返回对象本身的数值 **
```JavaScript
Value DbConnection.valueOf();
```

返回结果:
* Value, 返回对象本身的数值

## 成员属性
        
### type
** String, 查询当前连接数据库类型 **
```JavaScript
readonly String DbConnection.type;
```

