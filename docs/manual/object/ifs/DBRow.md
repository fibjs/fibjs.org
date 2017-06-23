# 对象 DBRow
数据库记录对象

## 继承关系
<div class="inherits"><svg width="93pt" height="192pt" viewBox="0.00 0.00 93.00 192.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(4 188)">
<title>%0</title>
<polygon fill="#ffffff" stroke="transparent" points="-4,4 -4,-188 89,-188 89,4 -4,4"/>
<!-- object -->
<g id="node1" class="node">
<title>object</title>
<g id="a_node1"><a xlink:href="object.md" xlink:title="object">
<polygon fill="#ffffff" stroke="transparent" points="14,-92 14,-184 71,-184 71,-92 14,-92"/>
<polygon fill="none" stroke="#000000" points="14.5,-162 14.5,-184 71.5,-184 71.5,-162 14.5,-162"/>
<text text-anchor="start" x="29.6625" y="-170" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">object</text>
<polygon fill="none" stroke="#000000" points="14.5,-92 14.5,-162 71.5,-162 71.5,-92 14.5,-92"/>
<text text-anchor="start" x="19.5" y="-148" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> dispose()</text>
<text text-anchor="start" x="19.5" y="-136" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> equals()</text>
<text text-anchor="start" x="19.5" y="-124" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> toString()</text>
<text text-anchor="start" x="19.5" y="-112" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> toJSON()</text>
<text text-anchor="start" x="19.5" y="-100" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> valueOf()</text>
</a>
</g>
</g>
<!-- DBRow -->
<g id="node2" class="node">
<title>DBRow</title>
<g id="a_node2"><a xlink:title="DBRow">
<polygon fill="#d3d3d3" stroke="transparent" points="0,0 0,-56 85,-56 85,0 0,0"/>
<polygon fill="none" stroke="#000000" points=".5,-34 .5,-56 85.5,-56 85.5,-34 .5,-34"/>
<text text-anchor="start" x="26.0575" y="-42" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">DBRow</text>
<polygon fill="none" stroke="#000000" points=".5,0 .5,-34 85.5,-34 85.5,0 .5,0"/>
<text text-anchor="start" x="5.5" y="-20" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> operator[]</text>
<text text-anchor="start" x="5.5" y="-8" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> operator[String]</text>
</a>
</g>
</g>
<!-- object&#45;&gt;DBRow -->
<g id="edge1" class="edge">
<title>object-&gt;DBRow</title>
<path fill="none" stroke="#000000" d="M42.5,-81.9545C42.5,-73.0376 42.5,-64.1574 42.5,-56.2518"/>
<polygon fill="#000000" stroke="#000000" points="39.0001,-81.9874 42.5,-91.9875 46.0001,-81.9875 39.0001,-81.9874"/>
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

