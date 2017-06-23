# 对象 Stats
数据统计对象，用以构建应用运行时数据收集

创建方法：

```JavaScript
var util = require("util");
var stats = new util.Stats(["begin", "end", "error"]);
```

一些内部对象会提供预先定义的的统计对象

## 继承关系
<div class="inherits"><svg width="93pt" height="272pt" viewBox="0.00 0.00 93.00 272.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(4 268)">
<title>%0</title>
<polygon fill="#ffffff" stroke="transparent" points="-4,4 -4,-268 89,-268 89,4 -4,4"/>
<!-- object -->
<g id="node1" class="node">
<title>object</title>
<g id="a_node1"><a xlink:href="object.md" xlink:title="object">
<polygon fill="#ffffff" stroke="transparent" points="14,-172 14,-264 71,-264 71,-172 14,-172"/>
<polygon fill="none" stroke="#000000" points="14.5,-242 14.5,-264 71.5,-264 71.5,-242 14.5,-242"/>
<text text-anchor="start" x="29.6625" y="-250" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">object</text>
<polygon fill="none" stroke="#000000" points="14.5,-172 14.5,-242 71.5,-242 71.5,-172 14.5,-172"/>
<text text-anchor="start" x="19.5" y="-228" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> dispose()</text>
<text text-anchor="start" x="19.5" y="-216" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> equals()</text>
<text text-anchor="start" x="19.5" y="-204" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> toString()</text>
<text text-anchor="start" x="19.5" y="-192" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> toJSON()</text>
<text text-anchor="start" x="19.5" y="-180" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> valueOf()</text>
</a>
</g>
</g>
<!-- Stats -->
<g id="node2" class="node">
<title>Stats</title>
<g id="a_node2"><a xlink:title="Stats">
<polygon fill="#d3d3d3" stroke="transparent" points="0,0 0,-136 85,-136 85,0 0,0"/>
<polygon fill="none" stroke="#000000" points=".5,-114 .5,-136 85.5,-136 85.5,-114 .5,-114"/>
<text text-anchor="start" x="31.607" y="-122" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">Stats</text>
<polygon fill="none" stroke="#000000" points=".5,-92 .5,-114 85.5,-114 85.5,-92 .5,-92"/>
<text text-anchor="start" x="5.5" y="-100" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">  new Stats()</text>
<polygon fill="none" stroke="#000000" points=".5,-70 .5,-92 85.5,-92 85.5,-70 .5,-70"/>
<text text-anchor="start" x="5.5" y="-78" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> operator[String]</text>
<polygon fill="none" stroke="#000000" points=".5,0 .5,-70 85.5,-70 85.5,0 .5,0"/>
<text text-anchor="start" x="5.5" y="-56" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> inc()</text>
<text text-anchor="start" x="5.5" y="-44" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> dec()</text>
<text text-anchor="start" x="5.5" y="-32" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> add()</text>
<text text-anchor="start" x="5.5" y="-20" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> reset()</text>
<text text-anchor="start" x="5.5" y="-8" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> uptime()</text>
</a>
</g>
</g>
<!-- object&#45;&gt;Stats -->
<g id="edge1" class="edge">
<title>object-&gt;Stats</title>
<path fill="none" stroke="#000000" d="M42.5,-161.7662C42.5,-153.4038 42.5,-144.7087 42.5,-136.1344"/>
<polygon fill="#000000" stroke="#000000" points="39.0001,-161.7711 42.5,-171.7711 46.0001,-161.7711 39.0001,-161.7711"/>
</g>
</g>
</svg></div>

## 构造函数
        
### Stats
** 数据统计对象构造方法 **

```JavaScript
new Stats(Array keys);
```

调用参数:
* keys: Array, 指定计数器的名称

--------------------------
** 数据统计对象构造方法 **

```JavaScript
new Stats(Array staticKeys,
    Array keys);
```

调用参数:
* staticKeys: Array, 指定静态计数器的名称，静态计数器不会被 reset
* keys: Array, 指定计数器的名称

## 下标操作
        
** 允许使用键值下标直接访问数值 **

```JavaScript
readonly Integer Stats[String];
```

## 成员函数
        
### inc
** 指定的计数器增一 **

```JavaScript
Stats.inc(String key);
```

调用参数:
* key: String, 指定计数器名称

--------------------------
### dec
** 指定的计数器减一 **

```JavaScript
Stats.dec(String key);
```

调用参数:
* key: String, 指定计数器名称

--------------------------
### add
** 指定的计数器加指定值 **

```JavaScript
Stats.add(String key,
    Integer value);
```

调用参数:
* key: String, 指定计数器名称
* value: Integer, 指定数值

--------------------------
### reset
** 初始化计数器，除 staticKeys 指定的计数器全部清零 **

```JavaScript
Stats.reset();
```

--------------------------
### uptime
** 查询上次 reset 到现在的运行时间 **

```JavaScript
Integer Stats.uptime();
```

返回结果:
* Integer, 返回上次 reset 到现在的运行时间

--------------------------
### dispose
** 强制回收对象，调用此方法后，对象资源将立即释放 **

```JavaScript
Stats.dispose();
```

--------------------------
### equals
** 比较当前对象与给定的对象是否相等 **

```JavaScript
Boolean Stats.equals(object expected);
```

调用参数:
* expected: object, 制定比较的目标对象

返回结果:
* Boolean, 返回对象比较的结果

--------------------------
### toString
** 返回对象的字符串表示，一般返回 "[Native Object]"，对象可以根据自己的特性重新实现 **

```JavaScript
String Stats.toString();
```

返回结果:
* String, 返回对象的字符串表示

--------------------------
### toJSON
** 返回对象的 JSON 格式表示，一般返回对象定义的可读属性集合 **

```JavaScript
Value Stats.toJSON(String key = "");
```

调用参数:
* key: String, 未使用

返回结果:
* Value, 返回包含可 JSON 序列化的值

--------------------------
### valueOf
** 返回对象本身的数值 **

```JavaScript
Value Stats.valueOf();
```

返回结果:
* Value, 返回对象本身的数值

