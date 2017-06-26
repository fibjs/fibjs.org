# 对象 HttpCollection
[http](../../module/ifs/http.md) 容器对象，用于 [http](../../module/ifs/http.md) header，cookie，query，form，等数据的存储与组织

## 继承关系
<div class="inherits"><svg width="93pt" height="266pt" viewBox="0.00 0.00 92.90 266.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(4 262)">
<title>%0</title>
<polygon fill="#ffffff" stroke="transparent" points="-4,4 -4,-262 88.904,-262 88.904,4 -4,4"/>
<!-- object -->
<g id="node1" class="node">
<title>object</title>
<g id="a_node1"><a xlink:href="object.md" xlink:title="object">
<polygon fill="#ffffff" stroke="#000000" points="13.6205,-169.5 13.6205,-257.5 71.2835,-257.5 71.2835,-169.5 13.6205,-169.5"/>
<text text-anchor="middle" x="42.452" y="-244.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">object</text>
<polyline fill="none" stroke="#000000" points="13.6205,-237.5 71.2835,-237.5 "/>
<text text-anchor="start" x="21.6205" y="-224.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">dispose()</text>
<text text-anchor="start" x="21.6205" y="-212.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">equals()</text>
<text text-anchor="start" x="21.6205" y="-200.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">toString()</text>
<text text-anchor="start" x="21.6205" y="-188.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">toJSON()</text>
<text text-anchor="start" x="21.6205" y="-176.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">valueOf()</text>
</a>
</g>
</g>
<!-- HttpCollection -->
<g id="node2" class="node">
<title>HttpCollection</title>
<g id="a_node2"><a xlink:title="HttpCollection">
<polygon fill="#d3d3d3" stroke="#000000" points="0,-.5 0,-132.5 84.904,-132.5 84.904,-.5 0,-.5"/>
<text text-anchor="middle" x="42.452" y="-119.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">HttpCollection</text>
<polyline fill="none" stroke="#000000" points="0,-112.5 84.904,-112.5 "/>
<text text-anchor="start" x="8" y="-99.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">operator[String]</text>
<polyline fill="none" stroke="#000000" points="0,-92.5 84.904,-92.5 "/>
<text text-anchor="start" x="8" y="-79.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">clear()</text>
<text text-anchor="start" x="8" y="-67.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">has()</text>
<text text-anchor="start" x="8" y="-55.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">first()</text>
<text text-anchor="start" x="8" y="-43.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">all()</text>
<text text-anchor="start" x="8" y="-31.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">add()</text>
<text text-anchor="start" x="8" y="-19.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">set()</text>
<text text-anchor="start" x="8" y="-7.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">remove()</text>
</a>
</g>
</g>
<!-- object&#45;&gt;HttpCollection -->
<g id="edge1" class="edge">
<title>object-&gt;HttpCollection</title>
<path fill="none" stroke="#000000" d="M42.452,-159.3749C42.452,-150.6583 42.452,-141.5503 42.452,-132.5907"/>
<polygon fill="#000000" stroke="#000000" points="38.9521,-159.3951 42.452,-169.3952 45.9521,-159.3952 38.9521,-159.3951"/>
</g>
</g>
</svg></div>

## 下标操作
        
** 允许使用键值下标直接访问数值 **

```JavaScript
Variant HttpCollection[String];
```

## 成员函数
        
### clear
** 清除容器数据 **

```JavaScript
HttpCollection.clear();
```

--------------------------
### has
** 检查容器内是否存在指定键值的数据 **

```JavaScript
Boolean HttpCollection.has(String name);
```

调用参数:
* name: String, 指定要检查的键值

返回结果:
* Boolean, 返回键值是否存在

--------------------------
### first
** 查询指定键值的第一个值 **

```JavaScript
Variant HttpCollection.first(String name);
```

调用参数:
* name: String, 指定要查询的键值

返回结果:
* Variant, 返回键值所对应的值，若不存在，则返回 undefined

--------------------------
### all
** 查询指定键值的全部值 **

```JavaScript
List HttpCollection.all(String name);
```

调用参数:
* name: String, 指定要查询的键值

返回结果:
* [List](List.md), 返回键值所对应全部值的数组，若数据不存在，则返回 null

--------------------------
### add
** 添加一个键值数据，添加数据并不修改已存在的键值的数据 **

```JavaScript
HttpCollection.add(Map map);
```

调用参数:
* map: [Map](Map.md), 指定要添加的键值数据字典

--------------------------
** 添加一个键值数据，添加数据并不修改已存在的键值的数据 **

```JavaScript
HttpCollection.add(String name,
    Variant value);
```

调用参数:
* name: String, 指定要添加的键值
* value: Variant, 指定要添加的数据

--------------------------
### set
** 设定一个键值数据，设定数据将修改键值所对应的第一个数值，并清除相同键值的其余数据 **

```JavaScript
HttpCollection.set(Map map);
```

调用参数:
* map: [Map](Map.md), 指定要设定的键值数据字典

--------------------------
** 设定一个键值数据，设定数据将修改键值所对应的第一个数值，并清除相同键值的其余数据 **

```JavaScript
HttpCollection.set(String name,
    Variant value);
```

调用参数:
* name: String, 指定要设定的键值
* value: Variant, 指定要设定的数据

--------------------------
### remove
** 删除指定键值的全部值 **

```JavaScript
HttpCollection.remove(String name);
```

调用参数:
* name: String, 指定要删除的键值

--------------------------
### dispose
** 强制回收对象，调用此方法后，对象资源将立即释放 **

```JavaScript
HttpCollection.dispose();
```

--------------------------
### equals
** 比较当前对象与给定的对象是否相等 **

```JavaScript
Boolean HttpCollection.equals(object expected);
```

调用参数:
* expected: object, 制定比较的目标对象

返回结果:
* Boolean, 返回对象比较的结果

--------------------------
### toString
** 返回对象的字符串表示，一般返回 "[Native Object]"，对象可以根据自己的特性重新实现 **

```JavaScript
String HttpCollection.toString();
```

返回结果:
* String, 返回对象的字符串表示

--------------------------
### toJSON
** 返回对象的 JSON 格式表示，一般返回对象定义的可读属性集合 **

```JavaScript
Value HttpCollection.toJSON(String key = "");
```

调用参数:
* key: String, 未使用

返回结果:
* Value, 返回包含可 JSON 序列化的值

--------------------------
### valueOf
** 返回对象本身的数值 **

```JavaScript
Value HttpCollection.valueOf();
```

返回结果:
* Value, 返回对象本身的数值

