# 对象 MSSQL
SQL Server 数据库连接对象

使用 [db](../../module/ifs/db.md).open 或 [db](../../module/ifs/db.md).openMySQL 创建，创建方式：

```JavaScript
var sql = db.openMSSQL("mssql://user:pass@host/db");
```

## 继承关系
<div class="inherits"><svg width="81pt" height="342pt" viewBox="0.00 0.00 81.00 342.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(4 338)">
<title>%0</title>
<polygon fill="#ffffff" stroke="transparent" points="-4,4 -4,-338 77,-338 77,4 -4,4"/>
<!-- object -->
<g id="node1" class="node">
<title>object</title>
<g id="a_node1"><a xlink:href="object.md" xlink:title="object">
<polygon fill="#ffffff" stroke="transparent" points="8,-242 8,-334 65,-334 65,-242 8,-242"/>
<polygon fill="none" stroke="#000000" points="8.5,-312 8.5,-334 65.5,-334 65.5,-312 8.5,-312"/>
<text text-anchor="start" x="23.6625" y="-320" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">object</text>
<polygon fill="none" stroke="#000000" points="8.5,-242 8.5,-312 65.5,-312 65.5,-242 8.5,-242"/>
<text text-anchor="start" x="13.5" y="-298" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> dispose()</text>
<text text-anchor="start" x="13.5" y="-286" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> equals()</text>
<text text-anchor="start" x="13.5" y="-274" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> toString()</text>
<text text-anchor="start" x="13.5" y="-262" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> toJSON()</text>
<text text-anchor="start" x="13.5" y="-250" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> valueOf()</text>
</a>
</g>
</g>
<!-- DbConnection -->
<g id="node2" class="node">
<title>DbConnection</title>
<g id="a_node2"><a xlink:href="DbConnection.md" xlink:title="DbConnection">
<polygon fill="#ffffff" stroke="transparent" points="0,-80 0,-206 73,-206 73,-80 0,-80"/>
<polygon fill="none" stroke="#000000" points=".5,-184 .5,-206 73.5,-206 73.5,-184 .5,-184"/>
<text text-anchor="start" x="5.3255" y="-192" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">DbConnection</text>
<polygon fill="none" stroke="#000000" points=".5,-162 .5,-184 73.5,-184 73.5,-162 .5,-162"/>
<text text-anchor="start" x="5.5" y="-170" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> type</text>
<polygon fill="none" stroke="#000000" points=".5,-80 .5,-162 73.5,-162 73.5,-80 .5,-80"/>
<text text-anchor="start" x="5.5" y="-148" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> close()</text>
<text text-anchor="start" x="5.5" y="-136" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> begin()</text>
<text text-anchor="start" x="5.5" y="-124" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> commit()</text>
<text text-anchor="start" x="5.5" y="-112" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> rollback()</text>
<text text-anchor="start" x="5.5" y="-100" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> execute()</text>
<text text-anchor="start" x="5.5" y="-88" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> format()</text>
</a>
</g>
</g>
<!-- object&#45;&gt;DbConnection -->
<g id="edge1" class="edge">
<title>object-&gt;DbConnection</title>
<path fill="none" stroke="#000000" d="M36.5,-231.6596C36.5,-223.2593 36.5,-214.554 36.5,-206.0266"/>
<polygon fill="#000000" stroke="#000000" points="33.0001,-231.7224 36.5,-241.7224 40.0001,-231.7225 33.0001,-231.7224"/>
</g>
<!-- MSSQL -->
<g id="node3" class="node">
<title>MSSQL</title>
<g id="a_node3"><a xlink:title="MSSQL">
<polygon fill="#d3d3d3" stroke="transparent" points="14,0 14,-44 59,-44 59,0 14,0"/>
<polygon fill="none" stroke="#000000" points="14.5,-22 14.5,-44 59.5,-44 59.5,-22 14.5,-22"/>
<text text-anchor="start" x="19.4975" y="-30" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">MSSQL</text>
<polygon fill="none" stroke="#000000" points="14.5,0 14.5,-22 59.5,-22 59.5,0 14.5,0"/>
<text text-anchor="start" x="19.5" y="-8" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> use()</text>
</a>
</g>
</g>
<!-- DbConnection&#45;&gt;MSSQL -->
<g id="edge2" class="edge">
<title>DbConnection-&gt;MSSQL</title>
<path fill="none" stroke="#000000" d="M36.5,-69.5375C36.5,-60.317 36.5,-51.518 36.5,-44.0526"/>
<polygon fill="#000000" stroke="#000000" points="33.0001,-69.665 36.5,-79.665 40.0001,-69.665 33.0001,-69.665"/>
</g>
</g>
</svg></div>

## 成员属性
        
### type
** String, 查询当前连接数据库类型 **

```JavaScript
readonly String MSSQL.type;
```

## 成员函数
        
### use
** 选择当前数据库连接的缺省数据库 **

```JavaScript
MSSQL.use(String dbName) async;
```

调用参数:
* dbName: String, 指定数据库名

--------------------------
### close
** 关闭当前数据库连接 **

```JavaScript
MSSQL.close() async;
```

--------------------------
### begin
** 在当前数据库连接上启动一个事务 **

```JavaScript
MSSQL.begin() async;
```

--------------------------
### commit
** 提交当前数据库连接上的事务 **

```JavaScript
MSSQL.commit() async;
```

--------------------------
### rollback
** 回滚当前数据库连接上的事务 **

```JavaScript
MSSQL.rollback() async;
```

--------------------------
### execute
** 执行一个 sql 命令，并返回执行结果 **

```JavaScript
DBResult MSSQL.execute(String sql) async;
```

调用参数:
* sql: String, 格式化字符串，可选参数用 ? 指定。例如：'SELECT FROM TEST WHERE [id]=?'

返回结果:
* [DBResult](DBResult.md), 返回 sql 命令执行结果

--------------------------
** 执行一个 sql 命令，并返回执行结果，可根据参数格式化字符串 **

```JavaScript
DBResult MSSQL.execute(String sql,
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
String MSSQL.format(String sql,
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
MSSQL.dispose();
```

--------------------------
### equals
** 比较当前对象与给定的对象是否相等 **

```JavaScript
Boolean MSSQL.equals(object expected);
```

调用参数:
* expected: object, 制定比较的目标对象

返回结果:
* Boolean, 返回对象比较的结果

--------------------------
### toString
** 返回对象的字符串表示，一般返回 "[Native Object]"，对象可以根据自己的特性重新实现 **

```JavaScript
String MSSQL.toString();
```

返回结果:
* String, 返回对象的字符串表示

--------------------------
### toJSON
** 返回对象的 JSON 格式表示，一般返回对象定义的可读属性集合 **

```JavaScript
Value MSSQL.toJSON(String key = "");
```

调用参数:
* key: String, 未使用

返回结果:
* Value, 返回包含可 JSON 序列化的值

--------------------------
### valueOf
** 返回对象本身的数值 **

```JavaScript
Value MSSQL.valueOf();
```

返回结果:
* Value, 返回对象本身的数值

