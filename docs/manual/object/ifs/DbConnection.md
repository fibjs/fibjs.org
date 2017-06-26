# 对象 DbConnection
数据库连接对象，用于建立和维护一个数据库连接会话。

## 继承关系
<div class="inherits"><svg width="224pt" height="363pt" viewBox="0.00 0.00 223.72 363.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(4 359)">
<title>%0</title>
<polygon fill="#ffffff" stroke="transparent" points="-4,4 -4,-359 219.721,-359 219.721,4 -4,4"/>
<!-- object -->
<g id="node1" class="node">
<title>object</title>
<g id="a_node1"><a xlink:href="object.md" xlink:title="object">
<polygon fill="#ffffff" stroke="#000000" points="78.1685,-266.5 78.1685,-354.5 135.8315,-354.5 135.8315,-266.5 78.1685,-266.5"/>
<text text-anchor="middle" x="107" y="-341.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">object</text>
<polyline fill="none" stroke="#000000" points="78.1685,-334.5 135.8315,-334.5 "/>
<text text-anchor="start" x="86.1685" y="-321.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">dispose()</text>
<text text-anchor="start" x="86.1685" y="-309.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">equals()</text>
<text text-anchor="start" x="86.1685" y="-297.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">toString()</text>
<text text-anchor="start" x="86.1685" y="-285.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">toJSON()</text>
<text text-anchor="start" x="86.1685" y="-273.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">valueOf()</text>
</a>
</g>
</g>
<!-- DbConnection -->
<g id="node2" class="node">
<title>DbConnection</title>
<g id="a_node2"><a xlink:title="DbConnection">
<polygon fill="#d3d3d3" stroke="#000000" points="67.3255,-109.5 67.3255,-229.5 146.6745,-229.5 146.6745,-109.5 67.3255,-109.5"/>
<text text-anchor="middle" x="107" y="-216.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">DbConnection</text>
<polyline fill="none" stroke="#000000" points="67.3255,-209.5 146.6745,-209.5 "/>
<text text-anchor="start" x="75.3255" y="-196.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">type</text>
<polyline fill="none" stroke="#000000" points="67.3255,-189.5 146.6745,-189.5 "/>
<text text-anchor="start" x="75.3255" y="-176.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">close()</text>
<text text-anchor="start" x="75.3255" y="-164.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">begin()</text>
<text text-anchor="start" x="75.3255" y="-152.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">commit()</text>
<text text-anchor="start" x="75.3255" y="-140.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">rollback()</text>
<text text-anchor="start" x="75.3255" y="-128.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">execute()</text>
<text text-anchor="start" x="75.3255" y="-116.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">format()</text>
</a>
</g>
</g>
<!-- object&#45;&gt;DbConnection -->
<g id="edge1" class="edge">
<title>object-&gt;DbConnection</title>
<path fill="none" stroke="#000000" d="M107,-256.2311C107,-247.51 107,-238.4385 107,-229.5906"/>
<polygon fill="#000000" stroke="#000000" points="103.5001,-256.2735 107,-266.2736 110.5001,-256.2736 103.5001,-256.2735"/>
</g>
<!-- MSSQL -->
<g id="node3" class="node">
<title>MSSQL</title>
<g id="a_node3"><a xlink:href="MSSQL.md" xlink:title="MSSQL">
<polygon fill="#ffffff" stroke="#000000" points="0,-16.5 0,-56.5 54,-56.5 54,-16.5 0,-16.5"/>
<text text-anchor="middle" x="26.5025" y="-43.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">MSSQL</text>
<polyline fill="none" stroke="#000000" points="0,-36.5 53.005,-36.5 "/>
<text text-anchor="start" x="8" y="-23.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">use()</text>
</a>
</g>
</g>
<!-- DbConnection&#45;&gt;MSSQL -->
<g id="edge2" class="edge">
<title>DbConnection-&gt;MSSQL</title>
<path fill="none" stroke="#000000" d="M65.3808,-100.3081C55.7226,-84.2514 46.1905,-68.4043 39.0418,-56.5194"/>
<polygon fill="#000000" stroke="#000000" points="62.5914,-102.4611 70.7451,-109.2263 68.5899,-98.8529 62.5914,-102.4611"/>
</g>
<!-- MySQL -->
<g id="node4" class="node">
<title>MySQL</title>
<g id="a_node4"><a xlink:href="MySQL.md" xlink:title="MySQL">
<polygon fill="#ffffff" stroke="#000000" points="71.775,-.5 71.775,-72.5 142.225,-72.5 142.225,-.5 71.775,-.5"/>
<text text-anchor="middle" x="107" y="-59.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">MySQL</text>
<polyline fill="none" stroke="#000000" points="71.775,-52.5 142.225,-52.5 "/>
<text text-anchor="start" x="79.775" y="-39.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">rxBufferSize</text>
<text text-anchor="start" x="79.775" y="-27.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">txBufferSize</text>
<polyline fill="none" stroke="#000000" points="71.775,-20.5 142.225,-20.5 "/>
<text text-anchor="start" x="79.775" y="-7.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">use()</text>
</a>
</g>
</g>
<!-- DbConnection&#45;&gt;MySQL -->
<g id="edge3" class="edge">
<title>DbConnection-&gt;MySQL</title>
<path fill="none" stroke="#000000" d="M107,-98.9351C107,-89.8261 107,-80.8191 107,-72.6013"/>
<polygon fill="#000000" stroke="#000000" points="103.5001,-99.2262 107,-109.2263 110.5001,-99.2263 103.5001,-99.2262"/>
</g>
<!-- SQLite -->
<g id="node5" class="node">
<title>SQLite</title>
<g id="a_node5"><a xlink:href="SQLite.md" xlink:title="SQLite">
<polygon fill="#ffffff" stroke="#000000" points="160.279,-.5 160.279,-72.5 215.721,-72.5 215.721,-.5 160.279,-.5"/>
<text text-anchor="middle" x="188" y="-59.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">SQLite</text>
<polyline fill="none" stroke="#000000" points="160.279,-52.5 215.721,-52.5 "/>
<text text-anchor="start" x="168.279" y="-39.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">fileName</text>
<text text-anchor="start" x="168.279" y="-27.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">timeout</text>
<polyline fill="none" stroke="#000000" points="160.279,-20.5 215.721,-20.5 "/>
<text text-anchor="start" x="168.279" y="-7.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">backup()</text>
</a>
</g>
</g>
<!-- DbConnection&#45;&gt;SQLite -->
<g id="edge4" class="edge">
<title>DbConnection-&gt;SQLite</title>
<path fill="none" stroke="#000000" d="M149.0804,-100.4051C154.932,-90.7968 160.7396,-81.2609 166.0135,-72.6013"/>
<polygon fill="#000000" stroke="#000000" points="145.9204,-98.865 143.7081,-109.2263 151.8989,-102.506 145.9204,-98.865"/>
</g>
</g>
</svg></div>

## 成员属性
        
### type
** String, 查询当前连接数据库类型 **

```JavaScript
readonly String DbConnection.type;
```

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

