# 对象 DBRow
数据库记录对象

## 继承关系
<div class="inherits"><svg width="93pt" height="186pt" viewBox="0.00 0.00 92.90 186.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(4 182)">
<title>%0</title>
<polygon fill="#ffffff" stroke="transparent" points="-4,4 -4,-182 88.904,-182 88.904,4 -4,4"/>
<!-- object -->
<g id="node1" class="node">
<title>object</title>
<g id="a_node1"><a xlink:href="object.md" xlink:title="object">
<polygon fill="#ffffff" stroke="#000000" points="13.6205,-89.5 13.6205,-177.5 71.2835,-177.5 71.2835,-89.5 13.6205,-89.5"/>
<text text-anchor="middle" x="42.452" y="-164.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">object</text>
<polyline fill="none" stroke="#000000" points="13.6205,-157.5 71.2835,-157.5 "/>
<text text-anchor="start" x="21.6205" y="-144.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">dispose()</text>
<text text-anchor="start" x="21.6205" y="-132.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">equals()</text>
<text text-anchor="start" x="21.6205" y="-120.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">toString()</text>
<text text-anchor="start" x="21.6205" y="-108.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">toJSON()</text>
<text text-anchor="start" x="21.6205" y="-96.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">valueOf()</text>
</a>
</g>
</g>
<!-- DBRow -->
<g id="node2" class="node">
<title>DBRow</title>
<g id="a_node2"><a xlink:title="DBRow">
<polygon fill="#d3d3d3" stroke="#000000" points="0,-.5 0,-52.5 84.904,-52.5 84.904,-.5 0,-.5"/>
<text text-anchor="middle" x="42.452" y="-39.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">DBRow</text>
<polyline fill="none" stroke="#000000" points="0,-32.5 84.904,-32.5 "/>
<text text-anchor="start" x="8" y="-19.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">operator[]</text>
<text text-anchor="start" x="8" y="-7.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">operator[String]</text>
</a>
</g>
</g>
<!-- object&#45;&gt;DBRow -->
<g id="edge1" class="edge">
<title>object-&gt;DBRow</title>
<path fill="none" stroke="#000000" d="M42.452,-79.3576C42.452,-70.0995 42.452,-60.867 42.452,-52.7693"/>
<polygon fill="#000000" stroke="#000000" points="38.9521,-79.3612 42.452,-89.3612 45.9521,-79.3613 38.9521,-79.3612"/>
</g>
</g>
</svg></div>

## 下标操作
        
** 对象数组可使用下标直接访问对象数据 **

```JavaScript
readonly Value DBRow[];
```

--------------------------
** 可使用字段名下标直接访问对象数据 **

```JavaScript
readonly Value DBRow[String];
```

## 成员函数
        
### dispose
** 强制回收对象，调用此方法后，对象资源将立即释放 **

```JavaScript
DBRow.dispose();
```

--------------------------
### equals
** 比较当前对象与给定的对象是否相等 **

```JavaScript
Boolean DBRow.equals(object expected);
```

调用参数:
* expected: object, 制定比较的目标对象

返回结果:
* Boolean, 返回对象比较的结果

--------------------------
### toString
** 返回对象的字符串表示，一般返回 "[Native Object]"，对象可以根据自己的特性重新实现 **

```JavaScript
String DBRow.toString();
```

返回结果:
* String, 返回对象的字符串表示

--------------------------
### toJSON
** 返回对象的 JSON 格式表示，一般返回对象定义的可读属性集合 **

```JavaScript
Value DBRow.toJSON(String key = "");
```

调用参数:
* key: String, 未使用

返回结果:
* Value, 返回包含可 JSON 序列化的值

--------------------------
### valueOf
** 返回对象本身的数值 **

```JavaScript
Value DBRow.valueOf();
```

返回结果:
* Value, 返回对象本身的数值

