# 对象 MSSQL
SQL Server 数据库连接对象

使用 [db](../../module/ifs/db.md).open 或 [db](../../module/ifs/db.md).openMySQL 创建，创建方式：

```JavaScript
var sql = db.openMSSQL("mssql://user:pass@host/db");
```

## 继承关系
<div class="inherits"><svg width="87pt" height="331pt" viewBox="0.00 0.00 87.35 331.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(4 327)">
<title>%0</title>
<polygon fill="#ffffff" stroke="transparent" points="-4,4 -4,-327 83.349,-327 83.349,4 -4,4"/>
<!-- object -->
<g id="node1" class="node">
<title>object</title>
<g id="a_node1"><a xlink:href="object.md" xlink:title="object">
<polygon fill="#ffffff" stroke="#000000" points="10.843,-234.5 10.843,-322.5 68.506,-322.5 68.506,-234.5 10.843,-234.5"/>
<text text-anchor="middle" x="39.6745" y="-309.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">object</text>
<polyline fill="none" stroke="#000000" points="10.843,-302.5 68.506,-302.5 "/>
<text text-anchor="start" x="18.843" y="-289.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">dispose()</text>
<text text-anchor="start" x="18.843" y="-277.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">equals()</text>
<text text-anchor="start" x="18.843" y="-265.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">toString()</text>
<text text-anchor="start" x="18.843" y="-253.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">toJSON()</text>
<text text-anchor="start" x="18.843" y="-241.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">valueOf()</text>
</a>
</g>
</g>
<!-- DbConnection -->
<g id="node2" class="node">
<title>DbConnection</title>
<g id="a_node2"><a xlink:href="DbConnection.md" xlink:title="DbConnection">
<polygon fill="#ffffff" stroke="#000000" points="0,-77.5 0,-197.5 79.349,-197.5 79.349,-77.5 0,-77.5"/>
<text text-anchor="middle" x="39.6745" y="-184.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">DbConnection</text>
<polyline fill="none" stroke="#000000" points="0,-177.5 79.349,-177.5 "/>
<text text-anchor="start" x="8" y="-164.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">type</text>
<polyline fill="none" stroke="#000000" points="0,-157.5 79.349,-157.5 "/>
<text text-anchor="start" x="8" y="-144.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">close()</text>
<text text-anchor="start" x="8" y="-132.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">begin()</text>
<text text-anchor="start" x="8" y="-120.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">commit()</text>
<text text-anchor="start" x="8" y="-108.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">rollback()</text>
<text text-anchor="start" x="8" y="-96.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">execute()</text>
<text text-anchor="start" x="8" y="-84.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">format()</text>
</a>
</g>
</g>
<!-- object&#45;&gt;DbConnection -->
<g id="edge1" class="edge">
<title>object-&gt;DbConnection</title>
<path fill="none" stroke="#000000" d="M39.6745,-224.2311C39.6745,-215.51 39.6745,-206.4385 39.6745,-197.5906"/>
<polygon fill="#000000" stroke="#000000" points="36.1746,-224.2735 39.6745,-234.2736 43.1746,-224.2736 36.1746,-224.2735"/>
</g>
<!-- MSSQL -->
<g id="node3" class="node">
<title>MSSQL</title>
<g id="a_node3"><a xlink:title="MSSQL">
<polygon fill="#d3d3d3" stroke="#000000" points="12.6745,-.5 12.6745,-40.5 66.6745,-40.5 66.6745,-.5 12.6745,-.5"/>
<text text-anchor="middle" x="39.177" y="-27.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">MSSQL</text>
<polyline fill="none" stroke="#000000" points="12.6745,-20.5 65.6795,-20.5 "/>
<text text-anchor="start" x="20.6745" y="-7.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">use()</text>
</a>
</g>
</g>
<!-- DbConnection&#45;&gt;MSSQL -->
<g id="edge2" class="edge">
<title>DbConnection-&gt;MSSQL</title>
<path fill="none" stroke="#000000" d="M39.6745,-67.1356C39.6745,-57.5062 39.6745,-48.3244 39.6745,-40.6942"/>
<polygon fill="#000000" stroke="#000000" points="36.1746,-67.2863 39.6745,-77.2864 43.1746,-67.2864 36.1746,-67.2863"/>
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

