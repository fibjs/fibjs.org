# 对象 HttpCollection
[http](../../module/ifs/http.md) 容器对象，用于 [http](../../module/ifs/http.md) header，cookie，query，form，等数据的存储与组织

## 继承关系
<div class="inherits"><svg width="93pt" height="274pt" viewBox="0.00 0.00 93.00 274.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(4 270)">
<title>%0</title>
<polygon fill="#ffffff" stroke="transparent" points="-4,4 -4,-270 89,-270 89,4 -4,4"/>
<!-- object -->
<g id="node1" class="node">
<title>object</title>
<g id="a_node1"><a xlink:href="object.md" xlink:title="object">
<polygon fill="#ffffff" stroke="transparent" points="14,-174 14,-266 71,-266 71,-174 14,-174"/>
<polygon fill="none" stroke="#000000" points="14.5,-244 14.5,-266 71.5,-266 71.5,-244 14.5,-244"/>
<text text-anchor="start" x="29.6625" y="-252" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">object</text>
<polygon fill="none" stroke="#000000" points="14.5,-174 14.5,-244 71.5,-244 71.5,-174 14.5,-174"/>
<text text-anchor="start" x="19.5" y="-230" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> dispose()</text>
<text text-anchor="start" x="19.5" y="-218" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> equals()</text>
<text text-anchor="start" x="19.5" y="-206" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> toString()</text>
<text text-anchor="start" x="19.5" y="-194" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> toJSON()</text>
<text text-anchor="start" x="19.5" y="-182" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> valueOf()</text>
</a>
</g>
</g>
<!-- HttpCollection -->
<g id="node2" class="node">
<title>HttpCollection</title>
<g id="a_node2"><a xlink:title="HttpCollection">
<polygon fill="#d3d3d3" stroke="transparent" points="0,0 0,-138 85,-138 85,0 0,0"/>
<polygon fill="none" stroke="#000000" points=".5,-116 .5,-138 85.5,-138 85.5,-116 .5,-116"/>
<text text-anchor="start" x="11.8865" y="-124" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">HttpCollection</text>
<polygon fill="none" stroke="#000000" points=".5,-94 .5,-116 85.5,-116 85.5,-94 .5,-94"/>
<text text-anchor="start" x="5.5" y="-102" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> operator[String]</text>
<polygon fill="none" stroke="#000000" points=".5,0 .5,-94 85.5,-94 85.5,0 .5,0"/>
<text text-anchor="start" x="5.5" y="-80" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> clear()</text>
<text text-anchor="start" x="5.5" y="-68" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> has()</text>
<text text-anchor="start" x="5.5" y="-56" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> first()</text>
<text text-anchor="start" x="5.5" y="-44" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> all()</text>
<text text-anchor="start" x="5.5" y="-32" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> add()</text>
<text text-anchor="start" x="5.5" y="-20" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> set()</text>
<text text-anchor="start" x="5.5" y="-8" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> remove()</text>
</a>
</g>
</g>
<!-- object&#45;&gt;HttpCollection -->
<g id="edge1" class="edge">
<title>object-&gt;HttpCollection</title>
<path fill="none" stroke="#000000" d="M42.5,-163.8676C42.5,-155.5006 42.5,-146.7932 42.5,-138.1957"/>
<polygon fill="#000000" stroke="#000000" points="39.0001,-163.8745 42.5,-173.8745 46.0001,-163.8746 39.0001,-163.8745"/>
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

