# 对象 DbConnection
数据库连接对象，用于建立和维护一个数据库连接会话。

## 继承关系
<div class="inherits"><svg width="224pt" height="376pt" viewBox="0.00 0.00 223.50 376.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(4 372)">
<title>%0</title>
<polygon fill="#ffffff" stroke="transparent" points="-4,4 -4,-372 219.5,-372 219.5,4 -4,4"/>
<!-- object -->
<g id="node1" class="node">
<title>object</title>
<g id="a_node1"><a xlink:href="object.md" xlink:title="object">
<polygon fill="#ffffff" stroke="transparent" points="78.5,-276 78.5,-368 135.5,-368 135.5,-276 78.5,-276"/>
<polygon fill="none" stroke="#000000" points="79,-346 79,-368 136,-368 136,-346 79,-346"/>
<text text-anchor="start" x="94.1625" y="-354" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">object</text>
<polygon fill="none" stroke="#000000" points="79,-276 79,-346 136,-346 136,-276 79,-276"/>
<text text-anchor="start" x="84" y="-332" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> dispose()</text>
<text text-anchor="start" x="84" y="-320" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> equals()</text>
<text text-anchor="start" x="84" y="-308" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> toString()</text>
<text text-anchor="start" x="84" y="-296" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> toJSON()</text>
<text text-anchor="start" x="84" y="-284" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> valueOf()</text>
</a>
</g>
</g>
<!-- DbConnection -->
<g id="node2" class="node">
<title>DbConnection</title>
<g id="a_node2"><a xlink:title="DbConnection">
<polygon fill="#d3d3d3" stroke="transparent" points="70.5,-114 70.5,-240 143.5,-240 143.5,-114 70.5,-114"/>
<polygon fill="none" stroke="#000000" points="71,-218 71,-240 144,-240 144,-218 71,-218"/>
<text text-anchor="start" x="75.8255" y="-226" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">DbConnection</text>
<polygon fill="none" stroke="#000000" points="71,-196 71,-218 144,-218 144,-196 71,-196"/>
<text text-anchor="start" x="76" y="-204" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> type</text>
<polygon fill="none" stroke="#000000" points="71,-114 71,-196 144,-196 144,-114 71,-114"/>
<text text-anchor="start" x="76" y="-182" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> close()</text>
<text text-anchor="start" x="76" y="-170" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> begin()</text>
<text text-anchor="start" x="76" y="-158" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> commit()</text>
<text text-anchor="start" x="76" y="-146" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> rollback()</text>
<text text-anchor="start" x="76" y="-134" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> execute()</text>
<text text-anchor="start" x="76" y="-122" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> format()</text>
</a>
</g>
</g>
<!-- object&#45;&gt;DbConnection -->
<g id="edge1" class="edge">
<title>object-&gt;DbConnection</title>
<path fill="none" stroke="#000000" d="M107,-265.6596C107,-257.2593 107,-248.554 107,-240.0266"/>
<polygon fill="#000000" stroke="#000000" points="103.5001,-265.7224 107,-275.7224 110.5001,-265.7225 103.5001,-265.7224"/>
</g>
<!-- MSSQL -->
<g id="node3" class="node">
<title>MSSQL</title>
<g id="a_node3"><a xlink:href="MSSQL.md" xlink:title="MSSQL">
<polygon fill="#ffffff" stroke="transparent" points="4.5,-17 4.5,-61 49.5,-61 49.5,-17 4.5,-17"/>
<polygon fill="none" stroke="#000000" points="5,-39 5,-61 50,-61 50,-39 5,-39"/>
<text text-anchor="start" x="9.9975" y="-47" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">MSSQL</text>
<polygon fill="none" stroke="#000000" points="5,-17 5,-39 50,-39 50,-17 5,-17"/>
<text text-anchor="start" x="10" y="-25" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> use()</text>
</a>
</g>
</g>
<!-- DbConnection&#45;&gt;MSSQL -->
<g id="edge2" class="edge">
<title>DbConnection-&gt;MSSQL</title>
<path fill="none" stroke="#000000" d="M65.1449,-104.7999C55.9072,-88.8649 46.8017,-73.1579 39.8049,-61.0884"/>
<polygon fill="#000000" stroke="#000000" points="62.2346,-106.7585 70.278,-113.6545 68.2906,-103.2477 62.2346,-106.7585"/>
</g>
<!-- MySQL -->
<g id="node4" class="node">
<title>MySQL</title>
<g id="a_node4"><a xlink:href="MySQL.md" xlink:title="MySQL">
<polygon fill="#ffffff" stroke="transparent" points="72,0 72,-78 142,-78 142,0 72,0"/>
<polygon fill="none" stroke="#000000" points="72,-56 72,-78 142,-78 142,-56 72,-56"/>
<text text-anchor="start" x="90.332" y="-64" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">MySQL</text>
<polygon fill="none" stroke="#000000" points="72,-22 72,-56 142,-56 142,-22 72,-22"/>
<text text-anchor="start" x="77" y="-42" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> rxBufferSize</text>
<text text-anchor="start" x="77" y="-30" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> txBufferSize</text>
<polygon fill="none" stroke="#000000" points="72,0 72,-22 142,-22 142,0 72,0"/>
<text text-anchor="start" x="77" y="-8" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> use()</text>
</a>
</g>
</g>
<!-- DbConnection&#45;&gt;MySQL -->
<g id="edge3" class="edge">
<title>DbConnection-&gt;MySQL</title>
<path fill="none" stroke="#000000" d="M107,-103.4693C107,-94.8023 107,-86.2311 107,-78.3058"/>
<polygon fill="#000000" stroke="#000000" points="103.5001,-103.6545 107,-113.6545 110.5001,-103.6545 103.5001,-103.6545"/>
</g>
<!-- SQLite -->
<g id="node5" class="node">
<title>SQLite</title>
<g id="a_node5"><a xlink:href="SQLite.md" xlink:title="SQLite">
<polygon fill="#ffffff" stroke="transparent" points="160.5,0 160.5,-78 215.5,-78 215.5,0 160.5,0"/>
<polygon fill="none" stroke="#000000" points="161,-56 161,-78 216,-78 216,-56 161,-56"/>
<text text-anchor="start" x="173.218" y="-64" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">SQLite</text>
<polygon fill="none" stroke="#000000" points="161,-22 161,-56 216,-56 216,-22 161,-22"/>
<text text-anchor="start" x="166" y="-42" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> fileName</text>
<text text-anchor="start" x="166" y="-30" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> timeout</text>
<polygon fill="none" stroke="#000000" points="161,0 161,-22 216,-22 216,0 161,0"/>
<text text-anchor="start" x="166" y="-8" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> backup()</text>
</a>
</g>
</g>
<!-- DbConnection&#45;&gt;SQLite -->
<g id="edge4" class="edge">
<title>DbConnection-&gt;SQLite</title>
<path fill="none" stroke="#000000" d="M148.8441,-105.71C154.4396,-96.177 160.0008,-86.7023 165.0999,-78.0149"/>
<polygon fill="#000000" stroke="#000000" points="145.7517,-104.0644 143.7081,-114.4603 151.7886,-107.6079 145.7517,-104.0644"/>
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

