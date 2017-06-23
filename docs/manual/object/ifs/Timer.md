# 对象 Timer
定时器处理器对象

## 继承关系
<div class="inherits"><svg width="65pt" height="180pt" viewBox="0.00 0.00 65.00 180.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(4 176)">
<title>%0</title>
<polygon fill="#ffffff" stroke="transparent" points="-4,4 -4,-176 61,-176 61,4 -4,4"/>
<!-- object -->
<g id="node1" class="node">
<title>object</title>
<g id="a_node1"><a xlink:href="object.md" xlink:title="object">
<polygon fill="#ffffff" stroke="transparent" points="0,-80 0,-172 57,-172 57,-80 0,-80"/>
<polygon fill="none" stroke="#000000" points=".5,-150 .5,-172 57.5,-172 57.5,-150 .5,-150"/>
<text text-anchor="start" x="15.6625" y="-158" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">object</text>
<polygon fill="none" stroke="#000000" points=".5,-80 .5,-150 57.5,-150 57.5,-80 .5,-80"/>
<text text-anchor="start" x="5.5" y="-136" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> dispose()</text>
<text text-anchor="start" x="5.5" y="-124" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> equals()</text>
<text text-anchor="start" x="5.5" y="-112" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> toString()</text>
<text text-anchor="start" x="5.5" y="-100" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> toJSON()</text>
<text text-anchor="start" x="5.5" y="-88" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> valueOf()</text>
</a>
</g>
</g>
<!-- Timer -->
<g id="node2" class="node">
<title>Timer</title>
<g id="a_node2"><a xlink:title="Timer">
<polygon fill="#d3d3d3" stroke="transparent" points="6.5,0 6.5,-44 50.5,-44 50.5,0 6.5,0"/>
<polygon fill="none" stroke="#000000" points="6.5,-22 6.5,-44 50.5,-44 50.5,-22 6.5,-22"/>
<text text-anchor="start" x="15.7275" y="-30" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">Timer</text>
<polygon fill="none" stroke="#000000" points="6.5,0 6.5,-22 50.5,-22 50.5,0 6.5,0"/>
<text text-anchor="start" x="11.5" y="-8" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> clear()</text>
</a>
</g>
</g>
<!-- object&#45;&gt;Timer -->
<g id="edge1" class="edge">
<title>object-&gt;Timer</title>
<path fill="none" stroke="#000000" d="M28.5,-69.5912C28.5,-60.5835 28.5,-51.7536 28.5,-44.193"/>
<polygon fill="#000000" stroke="#000000" points="25.0001,-69.7784 28.5,-79.7784 32.0001,-69.7785 25.0001,-69.7784"/>
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

