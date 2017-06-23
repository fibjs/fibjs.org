# 对象 Map
字典对象

用以创建和管理字典对象，创建方法：

```JavaScript
var collection = require("collection");
var m = new collection.Map();
```

## 继承关系
<div class="inherits"><svg width="93pt" height="318pt" viewBox="0.00 0.00 93.00 318.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(4 314)">
<title>%0</title>
<polygon fill="#ffffff" stroke="transparent" points="-4,4 -4,-314 89,-314 89,4 -4,4"/>
<!-- object -->
<g id="node1" class="node">
<title>object</title>
<g id="a_node1"><a xlink:href="object.md" xlink:title="object">
<polygon fill="#ffffff" stroke="transparent" points="14,-218 14,-310 71,-310 71,-218 14,-218"/>
<polygon fill="none" stroke="#000000" points="14.5,-288 14.5,-310 71.5,-310 71.5,-288 14.5,-288"/>
<text text-anchor="start" x="29.6625" y="-296" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">object</text>
<polygon fill="none" stroke="#000000" points="14.5,-218 14.5,-288 71.5,-288 71.5,-218 14.5,-218"/>
<text text-anchor="start" x="19.5" y="-274" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> dispose()</text>
<text text-anchor="start" x="19.5" y="-262" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> equals()</text>
<text text-anchor="start" x="19.5" y="-250" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> toString()</text>
<text text-anchor="start" x="19.5" y="-238" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> toJSON()</text>
<text text-anchor="start" x="19.5" y="-226" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> valueOf()</text>
</a>
</g>
</g>
<!-- Map -->
<g id="node2" class="node">
<title>Map</title>
<g id="a_node2"><a xlink:title="Map">
<polygon fill="#d3d3d3" stroke="transparent" points="0,0 0,-182 85,-182 85,0 0,0"/>
<polygon fill="none" stroke="#000000" points=".5,-160 .5,-182 85.5,-182 85.5,-160 .5,-160"/>
<text text-anchor="start" x="33.2765" y="-168" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">Map</text>
<polygon fill="none" stroke="#000000" points=".5,-138 .5,-160 85.5,-160 85.5,-138 .5,-138"/>
<text text-anchor="start" x="5.5" y="-146" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">  new Map()</text>
<polygon fill="none" stroke="#000000" points=".5,-116 .5,-138 85.5,-138 85.5,-116 .5,-116"/>
<text text-anchor="start" x="5.5" y="-124" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> operator[String]</text>
<polygon fill="none" stroke="#000000" points=".5,-94 .5,-116 85.5,-116 85.5,-94 .5,-94"/>
<text text-anchor="start" x="5.5" y="-102" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> size</text>
<polygon fill="none" stroke="#000000" points=".5,0 .5,-94 85.5,-94 85.5,0 .5,0"/>
<text text-anchor="start" x="5.5" y="-80" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> clear()</text>
<text text-anchor="start" x="5.5" y="-68" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> has()</text>
<text text-anchor="start" x="5.5" y="-56" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> get()</text>
<text text-anchor="start" x="5.5" y="-44" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> put()</text>
<text text-anchor="start" x="5.5" y="-32" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> set()</text>
<text text-anchor="start" x="5.5" y="-20" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> remove()</text>
<text text-anchor="start" x="5.5" y="-8" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> isEmpty()</text>
</a>
</g>
</g>
<!-- object&#45;&gt;Map -->
<g id="edge1" class="edge">
<title>object-&gt;Map</title>
<path fill="none" stroke="#000000" d="M42.5,-207.5648C42.5,-199.4195 42.5,-190.868 42.5,-182.2534"/>
<polygon fill="#000000" stroke="#000000" points="39.0001,-207.6391 42.5,-217.6392 46.0001,-207.6392 39.0001,-207.6391"/>
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

