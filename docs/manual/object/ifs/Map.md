# 对象 Map
字典对象

用以创建和管理字典对象，创建方法：

```JavaScript
var collection = require("collection");
var m = new collection.Map();
```

## 继承关系
<div class="inherits"><svg width="93pt" height="306pt" viewBox="0.00 0.00 92.90 306.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(4 302)">
<title>%0</title>
<polygon fill="#ffffff" stroke="transparent" points="-4,4 -4,-302 88.904,-302 88.904,4 -4,4"/>
<!-- object -->
<g id="node1" class="node">
<title>object</title>
<g id="a_node1"><a xlink:href="object.md" xlink:title="object">
<polygon fill="#ffffff" stroke="#000000" points="13.6205,-209.5 13.6205,-297.5 71.2835,-297.5 71.2835,-209.5 13.6205,-209.5"/>
<text text-anchor="middle" x="42.452" y="-284.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">object</text>
<polyline fill="none" stroke="#000000" points="13.6205,-277.5 71.2835,-277.5 "/>
<text text-anchor="start" x="21.6205" y="-264.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">dispose()</text>
<text text-anchor="start" x="21.6205" y="-252.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">equals()</text>
<text text-anchor="start" x="21.6205" y="-240.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">toString()</text>
<text text-anchor="start" x="21.6205" y="-228.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">toJSON()</text>
<text text-anchor="start" x="21.6205" y="-216.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">valueOf()</text>
</a>
</g>
</g>
<!-- Map -->
<g id="node2" class="node">
<title>Map</title>
<g id="a_node2"><a xlink:title="Map">
<polygon fill="#d3d3d3" stroke="#000000" points="0,-.5 0,-172.5 84.904,-172.5 84.904,-.5 0,-.5"/>
<text text-anchor="middle" x="42.452" y="-159.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">Map</text>
<polyline fill="none" stroke="#000000" points="0,-152.5 84.904,-152.5 "/>
<text text-anchor="start" x="8" y="-139.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">new Map()</text>
<polyline fill="none" stroke="#000000" points="0,-132.5 84.904,-132.5 "/>
<text text-anchor="start" x="8" y="-119.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">operator[String]</text>
<polyline fill="none" stroke="#000000" points="0,-112.5 84.904,-112.5 "/>
<text text-anchor="start" x="8" y="-99.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">size</text>
<polyline fill="none" stroke="#000000" points="0,-92.5 84.904,-92.5 "/>
<text text-anchor="start" x="8" y="-79.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">clear()</text>
<text text-anchor="start" x="8" y="-67.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">has()</text>
<text text-anchor="start" x="8" y="-55.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">get()</text>
<text text-anchor="start" x="8" y="-43.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">put()</text>
<text text-anchor="start" x="8" y="-31.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">set()</text>
<text text-anchor="start" x="8" y="-19.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">remove()</text>
<text text-anchor="start" x="8" y="-7.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">isEmpty()</text>
</a>
</g>
</g>
<!-- object&#45;&gt;Map -->
<g id="edge1" class="edge">
<title>object-&gt;Map</title>
<path fill="none" stroke="#000000" d="M42.452,-199.0986C42.452,-190.6202 42.452,-181.6843 42.452,-172.7067"/>
<polygon fill="#000000" stroke="#000000" points="38.9521,-199.1855 42.452,-209.1855 45.9521,-199.1855 38.9521,-199.1855"/>
</g>
</g>
</svg></div>

## 构造函数
        
### Map
** Map 构造函数 **

```JavaScript
new Map();
```

--------------------------
** Map 构造函数 **

```JavaScript
new Map(Object map);
```

调用参数:
* map: Object, 用于初始化的 js 字典对象

## 下标操作
        
** 允许使用键值下标直接访问数值 **

```JavaScript
Variant Map[String];
```

## 成员属性
        
### size
** Integer, 查询容器内数值个数 **

```JavaScript
readonly Integer Map.size;
```

## 成员函数
        
### clear
** 清除容器数据 **

```JavaScript
Map.clear();
```

--------------------------
### has
** 检查容器内是否存在指定键值的数据 **

```JavaScript
Boolean Map.has(String name);
```

调用参数:
* name: String, 指定要检查的键值

返回结果:
* Boolean, 返回键值是否存在

--------------------------
### get
** 查询指定键值的值 **

```JavaScript
Variant Map.get(String name);
```

调用参数:
* name: String, 指定要查询的键值

返回结果:
* Variant, 返回键值所对应的值，若不存在，则返回 null

--------------------------
### put
** 添加一组键值数据 **

```JavaScript
Map.put(Object map);
```

调用参数:
* map: Object, 指定要设定的键值数据字典

--------------------------
** 添加一个键值数据 **

```JavaScript
Map.put(String name,
    Variant value);
```

调用参数:
* name: String, 指定要设定的键值
* value: Variant, 指定要设定的数据

--------------------------
### set
** 设定一组键值数据，键值不存在则插入一条新数据 **

```JavaScript
Map.set(Object map);
```

调用参数:
* map: Object, 指定要设定的键值数据字典

--------------------------
** 设定一个键值数据，键值不存在则插入新数据 **

```JavaScript
Map.set(String name,
    Variant value);
```

调用参数:
* name: String, 指定要设定的键值
* value: Variant, 指定要设定的数据

--------------------------
### remove
** 删除指定键值的全部值 **

```JavaScript
Map.remove(String name);
```

调用参数:
* name: String, 指定要删除的键值

--------------------------
### isEmpty
** 检查容器是否为空 **

```JavaScript
Boolean Map.isEmpty();
```

返回结果:
* Boolean, 容器内无数值则返回 true

--------------------------
### dispose
** 强制回收对象，调用此方法后，对象资源将立即释放 **

```JavaScript
Map.dispose();
```

--------------------------
### equals
** 比较当前对象与给定的对象是否相等 **

```JavaScript
Boolean Map.equals(object expected);
```

调用参数:
* expected: object, 制定比较的目标对象

返回结果:
* Boolean, 返回对象比较的结果

--------------------------
### toString
** 返回对象的字符串表示，一般返回 "[Native Object]"，对象可以根据自己的特性重新实现 **

```JavaScript
String Map.toString();
```

返回结果:
* String, 返回对象的字符串表示

--------------------------
### toJSON
** 返回对象的 JSON 格式表示，一般返回对象定义的可读属性集合 **

```JavaScript
Value Map.toJSON(String key = "");
```

调用参数:
* key: String, 未使用

返回结果:
* Value, 返回包含可 JSON 序列化的值

--------------------------
### valueOf
** 返回对象本身的数值 **

```JavaScript
Value Map.valueOf();
```

返回结果:
* Value, 返回对象本身的数值

