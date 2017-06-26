# 对象 Stats
数据统计对象，用以构建应用运行时数据收集

创建方法：

```JavaScript
var util = require("util");
var stats = new util.Stats(["begin", "end", "error"]);
```

一些内部对象会提供预先定义的的统计对象

## 继承关系
<div class="inherits"><svg width="93pt" height="262pt" viewBox="0.00 0.00 92.90 262.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(4 258)">
<title>%0</title>
<polygon fill="#ffffff" stroke="transparent" points="-4,4 -4,-258 88.904,-258 88.904,4 -4,4"/>
<!-- object -->
<g id="node1" class="node">
<title>object</title>
<g id="a_node1"><a xlink:href="object.md" xlink:title="object">
<polygon fill="#ffffff" stroke="#000000" points="13.6205,-165.5 13.6205,-253.5 71.2835,-253.5 71.2835,-165.5 13.6205,-165.5"/>
<text text-anchor="middle" x="42.452" y="-240.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">object</text>
<polyline fill="none" stroke="#000000" points="13.6205,-233.5 71.2835,-233.5 "/>
<text text-anchor="start" x="21.6205" y="-220.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">dispose()</text>
<text text-anchor="start" x="21.6205" y="-208.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">equals()</text>
<text text-anchor="start" x="21.6205" y="-196.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">toString()</text>
<text text-anchor="start" x="21.6205" y="-184.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">toJSON()</text>
<text text-anchor="start" x="21.6205" y="-172.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">valueOf()</text>
</a>
</g>
</g>
<!-- Stats -->
<g id="node2" class="node">
<title>Stats</title>
<g id="a_node2"><a xlink:title="Stats">
<polygon fill="#d3d3d3" stroke="#000000" points="0,-.5 0,-128.5 84.904,-128.5 84.904,-.5 0,-.5"/>
<text text-anchor="middle" x="42.452" y="-115.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">Stats</text>
<polyline fill="none" stroke="#000000" points="0,-108.5 84.904,-108.5 "/>
<text text-anchor="start" x="8" y="-95.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">new Stats()</text>
<polyline fill="none" stroke="#000000" points="0,-88.5 84.904,-88.5 "/>
<text text-anchor="start" x="8" y="-75.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">operator[String]</text>
<polyline fill="none" stroke="#000000" points="0,-68.5 84.904,-68.5 "/>
<text text-anchor="start" x="8" y="-55.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">inc()</text>
<text text-anchor="start" x="8" y="-43.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">dec()</text>
<text text-anchor="start" x="8" y="-31.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">add()</text>
<text text-anchor="start" x="8" y="-19.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">reset()</text>
<text text-anchor="start" x="8" y="-7.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">uptime()</text>
</a>
</g>
</g>
<!-- object&#45;&gt;Stats -->
<g id="edge1" class="edge">
<title>object-&gt;Stats</title>
<path fill="none" stroke="#000000" d="M42.452,-155.2025C42.452,-146.5059 42.452,-137.4356 42.452,-128.5377"/>
<polygon fill="#000000" stroke="#000000" points="38.9521,-155.2073 42.452,-165.2073 45.9521,-155.2074 38.9521,-155.2073"/>
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

