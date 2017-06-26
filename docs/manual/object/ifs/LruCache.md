# 对象 LruCache
LRU(least recently used) 缓存对象

LruCache 用以维护一个 LRU 缓存，创建方法：

```JavaScript
var util = require("util");
var c = new util.LruCache(10, 100);
```

## 继承关系
<div class="inherits"><svg width="95pt" height="286pt" viewBox="0.00 0.00 95.12 286.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(4 282)">
<title>%0</title>
<polygon fill="#ffffff" stroke="transparent" points="-4,4 -4,-282 91.117,-282 91.117,4 -4,4"/>
<!-- object -->
<g id="node1" class="node">
<title>object</title>
<g id="a_node1"><a xlink:href="object.md" xlink:title="object">
<polygon fill="#ffffff" stroke="#000000" points="14.727,-189.5 14.727,-277.5 72.39,-277.5 72.39,-189.5 14.727,-189.5"/>
<text text-anchor="middle" x="43.5585" y="-264.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">object</text>
<polyline fill="none" stroke="#000000" points="14.727,-257.5 72.39,-257.5 "/>
<text text-anchor="start" x="22.727" y="-244.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">dispose()</text>
<text text-anchor="start" x="22.727" y="-232.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">equals()</text>
<text text-anchor="start" x="22.727" y="-220.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">toString()</text>
<text text-anchor="start" x="22.727" y="-208.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">toJSON()</text>
<text text-anchor="start" x="22.727" y="-196.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">valueOf()</text>
</a>
</g>
</g>
<!-- LruCache -->
<g id="node2" class="node">
<title>LruCache</title>
<g id="a_node2"><a xlink:title="LruCache">
<polygon fill="#d3d3d3" stroke="#000000" points="0,-.5 0,-152.5 87.117,-152.5 87.117,-.5 0,-.5"/>
<text text-anchor="middle" x="43.5585" y="-139.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">LruCache</text>
<polyline fill="none" stroke="#000000" points="0,-132.5 87.117,-132.5 "/>
<text text-anchor="start" x="8" y="-119.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">new LruCache()</text>
<polyline fill="none" stroke="#000000" points="0,-112.5 87.117,-112.5 "/>
<text text-anchor="start" x="8" y="-99.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">size</text>
<text text-anchor="start" x="8" y="-87.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">timeout</text>
<polyline fill="none" stroke="#000000" points="0,-80.5 87.117,-80.5 "/>
<text text-anchor="start" x="8" y="-67.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">clear()</text>
<text text-anchor="start" x="8" y="-55.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">has()</text>
<text text-anchor="start" x="8" y="-43.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">get()</text>
<text text-anchor="start" x="8" y="-31.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">set()</text>
<text text-anchor="start" x="8" y="-19.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">remove()</text>
<text text-anchor="start" x="8" y="-7.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">isEmpty()</text>
</a>
</g>
</g>
<!-- object&#45;&gt;LruCache -->
<g id="edge1" class="edge">
<title>object-&gt;LruCache</title>
<path fill="none" stroke="#000000" d="M43.5585,-179.1668C43.5585,-170.6216 43.5585,-161.6531 43.5585,-152.7238"/>
<polygon fill="#000000" stroke="#000000" points="40.0586,-179.3489 43.5585,-189.3489 47.0586,-179.349 40.0586,-179.3489"/>
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

