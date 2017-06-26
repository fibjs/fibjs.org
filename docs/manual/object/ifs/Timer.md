# 对象 Timer
定时器处理器对象

## 继承关系
<div class="inherits"><svg width="66pt" height="174pt" viewBox="0.00 0.00 65.66 174.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(4 170)">
<title>%0</title>
<polygon fill="#ffffff" stroke="transparent" points="-4,4 -4,-170 61.663,-170 61.663,4 -4,4"/>
<!-- object -->
<g id="node1" class="node">
<title>object</title>
<g id="a_node1"><a xlink:href="object.md" xlink:title="object">
<polygon fill="#ffffff" stroke="#000000" points="0,-77.5 0,-165.5 57.663,-165.5 57.663,-77.5 0,-77.5"/>
<text text-anchor="middle" x="28.8315" y="-152.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">object</text>
<polyline fill="none" stroke="#000000" points="0,-145.5 57.663,-145.5 "/>
<text text-anchor="start" x="8" y="-132.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">dispose()</text>
<text text-anchor="start" x="8" y="-120.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">equals()</text>
<text text-anchor="start" x="8" y="-108.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">toString()</text>
<text text-anchor="start" x="8" y="-96.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">toJSON()</text>
<text text-anchor="start" x="8" y="-84.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">valueOf()</text>
</a>
</g>
</g>
<!-- Timer -->
<g id="node2" class="node">
<title>Timer</title>
<g id="a_node2"><a xlink:title="Timer">
<polygon fill="#d3d3d3" stroke="#000000" points="1.8315,-.5 1.8315,-40.5 55.8315,-40.5 55.8315,-.5 1.8315,-.5"/>
<text text-anchor="middle" x="28.4935" y="-27.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">Timer</text>
<polyline fill="none" stroke="#000000" points="1.8315,-20.5 55.1555,-20.5 "/>
<text text-anchor="start" x="9.8315" y="-7.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">clear()</text>
</a>
</g>
</g>
<!-- object&#45;&gt;Timer -->
<g id="edge1" class="edge">
<title>object-&gt;Timer</title>
<path fill="none" stroke="#000000" d="M28.8315,-67.4884C28.8315,-57.8902 28.8315,-48.462 28.8315,-40.5997"/>
<polygon fill="#000000" stroke="#000000" points="25.3316,-67.4937 28.8315,-77.4937 32.3316,-67.4938 25.3316,-67.4937"/>
</g>
</g>
</svg></div>

## 成员函数
        
### clear
** 取消当前定时器 **

```JavaScript
Timer.clear();
```

--------------------------
### dispose
** 强制回收对象，调用此方法后，对象资源将立即释放 **

```JavaScript
Timer.dispose();
```

--------------------------
### equals
** 比较当前对象与给定的对象是否相等 **

```JavaScript
Boolean Timer.equals(object expected);
```

调用参数:
* expected: object, 制定比较的目标对象

返回结果:
* Boolean, 返回对象比较的结果

--------------------------
### toString
** 返回对象的字符串表示，一般返回 "[Native Object]"，对象可以根据自己的特性重新实现 **

```JavaScript
String Timer.toString();
```

返回结果:
* String, 返回对象的字符串表示

--------------------------
### toJSON
** 返回对象的 JSON 格式表示，一般返回对象定义的可读属性集合 **

```JavaScript
Value Timer.toJSON(String key = "");
```

调用参数:
* key: String, 未使用

返回结果:
* Value, 返回包含可 JSON 序列化的值

--------------------------
### valueOf
** 返回对象本身的数值 **

```JavaScript
Value Timer.valueOf();
```

返回结果:
* Value, 返回对象本身的数值

