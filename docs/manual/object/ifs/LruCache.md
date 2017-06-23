# 对象 LruCache
LRU(least recently used) 缓存对象

LruCache 用以维护一个 LRU 缓存，创建方法：

```JavaScript
var util = require("util");
var c = new util.LruCache(10, 100);
```

## 继承关系
<div class="inherits"><svg width="98pt" height="296pt" viewBox="0.00 0.00 98.00 296.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(4 292)">
<title>%0</title>
<polygon fill="#ffffff" stroke="transparent" points="-4,4 -4,-292 94,-292 94,4 -4,4"/>
<!-- object -->
<g id="node1" class="node">
<title>object</title>
<g id="a_node1"><a xlink:href="object.md" xlink:title="object">
<polygon fill="#ffffff" stroke="transparent" points="16.5,-196 16.5,-288 73.5,-288 73.5,-196 16.5,-196"/>
<polygon fill="none" stroke="#000000" points="17,-266 17,-288 74,-288 74,-266 17,-266"/>
<text text-anchor="start" x="32.1625" y="-274" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">object</text>
<polygon fill="none" stroke="#000000" points="17,-196 17,-266 74,-266 74,-196 17,-196"/>
<text text-anchor="start" x="22" y="-252" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> dispose()</text>
<text text-anchor="start" x="22" y="-240" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> equals()</text>
<text text-anchor="start" x="22" y="-228" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> toString()</text>
<text text-anchor="start" x="22" y="-216" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> toJSON()</text>
<text text-anchor="start" x="22" y="-204" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> valueOf()</text>
</a>
</g>
</g>
<!-- LruCache -->
<g id="node2" class="node">
<title>LruCache</title>
<g id="a_node2"><a xlink:title="LruCache">
<polygon fill="#d3d3d3" stroke="transparent" points="0,0 0,-160 90,-160 90,0 0,0"/>
<polygon fill="none" stroke="#000000" points="0,-138 0,-160 90,-160 90,-138 0,-138"/>
<text text-anchor="start" x="23.3285" y="-146" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">LruCache</text>
<polygon fill="none" stroke="#000000" points="0,-116 0,-138 90,-138 90,-116 0,-116"/>
<text text-anchor="start" x="5" y="-124" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">  new LruCache()</text>
<polygon fill="none" stroke="#000000" points="0,-82 0,-116 90,-116 90,-82 0,-82"/>
<text text-anchor="start" x="5" y="-102" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> size</text>
<text text-anchor="start" x="5" y="-90" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> timeout</text>
<polygon fill="none" stroke="#000000" points="0,0 0,-82 90,-82 90,0 0,0"/>
<text text-anchor="start" x="5" y="-68" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> clear()</text>
<text text-anchor="start" x="5" y="-56" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> has()</text>
<text text-anchor="start" x="5" y="-44" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> get()</text>
<text text-anchor="start" x="5" y="-32" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> set()</text>
<text text-anchor="start" x="5" y="-20" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> remove()</text>
<text text-anchor="start" x="5" y="-8" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> isEmpty()</text>
</a>
</g>
</g>
<!-- object&#45;&gt;LruCache -->
<g id="edge1" class="edge">
<title>object-&gt;LruCache</title>
<path fill="none" stroke="#000000" d="M45,-185.4135C45,-177.2111 45,-168.6404 45,-160.0832"/>
<polygon fill="#000000" stroke="#000000" points="41.5001,-185.5773 45,-195.5773 48.5001,-185.5773 41.5001,-185.5773"/>
</g>
</g>
</svg></div>

## 构造函数
        
### LruCache
** LruCache 对象构造函数 **

```JavaScript
new LruCache(Integer size,
    Integer timeout = 0);
```

调用参数:
* size: Integer, 缓存最大尺寸
* timeout: Integer, 元素失效时间，单位是 ms，小于等于 0 不失效，缺省为 0

## 成员属性
        
### size
** Integer, 查询容器内数值个数 **

```JavaScript
readonly Integer LruCache.size;
```

--------------------------
### timeout
** Integer, 查询和设置容器内元素失效时间，单位是 ms，小于等于 0 不失效 **

```JavaScript
Integer LruCache.timeout;
```

## 成员函数
        
### clear
** 清除容器数据 **

```JavaScript
LruCache.clear();
```

--------------------------
### has
** 检查容器内是否存在指定键值的数据 **

```JavaScript
Boolean LruCache.has(String name);
```

调用参数:
* name: String, 指定要检查的键值

返回结果:
* Boolean, 返回键值是否存在

--------------------------
### get
** 查询指定键值的值 **

```JavaScript
Value LruCache.get(String name);
```

调用参数:
* name: String, 指定要查询的键值

返回结果:
* Value, 返回键值所对应的值，若不存在，则返回 undefined

--------------------------
** 查询指定键值的值，若不存在或过期，则调用回调函数更新数据 **

```JavaScript
Value LruCache.get(String name,
    Function updater);
```

调用参数:
* name: String, 指定要查询的键值
* updater: Function, 指定更新函数

返回结果:
* Value, 返回键值所对应的值

--------------------------
### set
** 设定一个键值数据，键值不存在则插入一条新数据 **

```JavaScript
LruCache.set(String name,
    Value value);
```

调用参数:
* name: String, 指定要设定的键值
* value: Value, 指定要设定的数据

--------------------------
** 设定一个键值数据，键值不存在则插入新数据 **

```JavaScript
LruCache.set(Object map);
```

调用参数:
* map: Object, 指定要设定的键值数据字典

--------------------------
### remove
** 删除指定键值的全部值 **

```JavaScript
LruCache.remove(String name);
```

调用参数:
* name: String, 指定要删除的键值

--------------------------
### isEmpty
** 检查容器是否为空 **

```JavaScript
Boolean LruCache.isEmpty();
```

返回结果:
* Boolean, 容器内无数值则返回 true

--------------------------
### dispose
** 强制回收对象，调用此方法后，对象资源将立即释放 **

```JavaScript
LruCache.dispose();
```

--------------------------
### equals
** 比较当前对象与给定的对象是否相等 **

```JavaScript
Boolean LruCache.equals(object expected);
```

调用参数:
* expected: object, 制定比较的目标对象

返回结果:
* Boolean, 返回对象比较的结果

--------------------------
### toString
** 返回对象的字符串表示，一般返回 "[Native Object]"，对象可以根据自己的特性重新实现 **

```JavaScript
String LruCache.toString();
```

返回结果:
* String, 返回对象的字符串表示

--------------------------
### toJSON
** 返回对象的 JSON 格式表示，一般返回对象定义的可读属性集合 **

```JavaScript
Value LruCache.toJSON(String key = "");
```

调用参数:
* key: String, 未使用

返回结果:
* Value, 返回包含可 JSON 序列化的值

--------------------------
### valueOf
** 返回对象本身的数值 **

```JavaScript
Value LruCache.valueOf();
```

返回结果:
* Value, 返回对象本身的数值

