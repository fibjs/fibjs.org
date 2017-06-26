# 对象 EventInfo
事件信息对象，用于在事件中传递信息

## 继承关系
<div class="inherits"><svg width="93pt" height="230pt" viewBox="0.00 0.00 92.90 230.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(4 226)">
<title>%0</title>
<polygon fill="#ffffff" stroke="transparent" points="-4,4 -4,-226 88.904,-226 88.904,4 -4,4"/>
<!-- object -->
<g id="node1" class="node">
<title>object</title>
<g id="a_node1"><a xlink:href="object.md" xlink:title="object">
<polygon fill="#ffffff" stroke="#000000" points="13.6205,-133.5 13.6205,-221.5 71.2835,-221.5 71.2835,-133.5 13.6205,-133.5"/>
<text text-anchor="middle" x="42.452" y="-208.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">object</text>
<polyline fill="none" stroke="#000000" points="13.6205,-201.5 71.2835,-201.5 "/>
<text text-anchor="start" x="21.6205" y="-188.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">dispose()</text>
<text text-anchor="start" x="21.6205" y="-176.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">equals()</text>
<text text-anchor="start" x="21.6205" y="-164.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">toString()</text>
<text text-anchor="start" x="21.6205" y="-152.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">toJSON()</text>
<text text-anchor="start" x="21.6205" y="-140.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">valueOf()</text>
</a>
</g>
</g>
<!-- EventInfo -->
<g id="node2" class="node">
<title>EventInfo</title>
<g id="a_node2"><a xlink:title="EventInfo">
<polygon fill="#d3d3d3" stroke="#000000" points="0,-.5 0,-96.5 84.904,-96.5 84.904,-.5 0,-.5"/>
<text text-anchor="middle" x="42.452" y="-83.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">EventInfo</text>
<polyline fill="none" stroke="#000000" points="0,-76.5 84.904,-76.5 "/>
<text text-anchor="start" x="8" y="-63.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">operator[String]</text>
<polyline fill="none" stroke="#000000" points="0,-56.5 84.904,-56.5 "/>
<text text-anchor="start" x="8" y="-43.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">code</text>
<text text-anchor="start" x="8" y="-31.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">reason</text>
<text text-anchor="start" x="8" y="-19.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">type</text>
<text text-anchor="start" x="8" y="-7.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">target</text>
</a>
</g>
</g>
<!-- object&#45;&gt;EventInfo -->
<g id="edge1" class="edge">
<title>object-&gt;EventInfo</title>
<path fill="none" stroke="#000000" d="M42.452,-123.2875C42.452,-114.4791 42.452,-105.4079 42.452,-96.7541"/>
<polygon fill="#000000" stroke="#000000" points="38.9521,-123.4663 42.452,-133.4663 45.9521,-123.4664 38.9521,-123.4663"/>
</g>
</g>
</svg></div>

## 下标操作
        
** 根据事件类型返回的详细信息 **

```JavaScript
readonly Integer EventInfo[String];
```

## 成员属性
        
### code
** Integer, 查询事件错误编码 **

```JavaScript
readonly Integer EventInfo.code;
```

--------------------------
### reason
** String, 查询事件错误信息 **

```JavaScript
readonly String EventInfo.reason;
```

--------------------------
### type
** String, 查询事件类型 **

```JavaScript
readonly String EventInfo.type;
```

--------------------------
### target
** Object, 查询触发事件的对象 **

```JavaScript
readonly Object EventInfo.target;
```

## 成员函数
        
### dispose
** 强制回收对象，调用此方法后，对象资源将立即释放 **

```JavaScript
EventInfo.dispose();
```

--------------------------
### equals
** 比较当前对象与给定的对象是否相等 **

```JavaScript
Boolean EventInfo.equals(object expected);
```

调用参数:
* expected: object, 制定比较的目标对象

返回结果:
* Boolean, 返回对象比较的结果

--------------------------
### toString
** 返回对象的字符串表示，一般返回 "[Native Object]"，对象可以根据自己的特性重新实现 **

```JavaScript
String EventInfo.toString();
```

返回结果:
* String, 返回对象的字符串表示

--------------------------
### toJSON
** 返回对象的 JSON 格式表示，一般返回对象定义的可读属性集合 **

```JavaScript
Value EventInfo.toJSON(String key = "");
```

调用参数:
* key: String, 未使用

返回结果:
* Value, 返回包含可 JSON 序列化的值

--------------------------
### valueOf
** 返回对象本身的数值 **

```JavaScript
Value EventInfo.valueOf();
```

返回结果:
* Value, 返回对象本身的数值

