# 对象 Int64
64位整数对象

创建方法：

```JavaScript
var n = new Int64(123);
```

## 继承关系
<div class="inherits"><svg width="76pt" height="344pt" viewBox="0.00 0.00 76.00 344.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(4 340)">
<title>%0</title>
<polygon fill="#ffffff" stroke="transparent" points="-4,4 -4,-340 72,-340 72,4 -4,4"/>
<!-- object -->
<g id="node1" class="node">
<title>object</title>
<g id="a_node1"><a xlink:href="object.md" xlink:title="object">
<polygon fill="#ffffff" stroke="transparent" points="5.5,-244 5.5,-336 62.5,-336 62.5,-244 5.5,-244"/>
<polygon fill="none" stroke="#000000" points="6,-314 6,-336 63,-336 63,-314 6,-314"/>
<text text-anchor="start" x="21.1625" y="-322" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">object</text>
<polygon fill="none" stroke="#000000" points="6,-244 6,-314 63,-314 63,-244 6,-244"/>
<text text-anchor="start" x="11" y="-300" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> dispose()</text>
<text text-anchor="start" x="11" y="-288" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> equals()</text>
<text text-anchor="start" x="11" y="-276" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> toString()</text>
<text text-anchor="start" x="11" y="-264" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> toJSON()</text>
<text text-anchor="start" x="11" y="-252" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> valueOf()</text>
</a>
</g>
</g>
<!-- Int64 -->
<g id="node2" class="node">
<title>Int64</title>
<g id="a_node2"><a xlink:title="Int64">
<polygon fill="#d3d3d3" stroke="transparent" points="0,0 0,-208 68,-208 68,0 0,0"/>
<polygon fill="none" stroke="#000000" points="0,-186 0,-208 68,-208 68,-186 0,-186"/>
<text text-anchor="start" x="22.8825" y="-194" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">Int64</text>
<polygon fill="none" stroke="#000000" points="0,-164 0,-186 68,-186 68,-164 0,-164"/>
<text text-anchor="start" x="5" y="-172" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">  new Int64()</text>
<polygon fill="none" stroke="#000000" points="0,-130 0,-164 68,-164 68,-130 0,-130"/>
<text text-anchor="start" x="5" y="-150" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> hi</text>
<text text-anchor="start" x="5" y="-138" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> lo</text>
<polygon fill="none" stroke="#000000" points="0,0 0,-130 68,-130 68,0 0,0"/>
<text text-anchor="start" x="5" y="-116" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> compare()</text>
<text text-anchor="start" x="5" y="-104" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> shiftLeft()</text>
<text text-anchor="start" x="5" y="-92" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> shiftRight()</text>
<text text-anchor="start" x="5" y="-80" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> and()</text>
<text text-anchor="start" x="5" y="-68" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> or()</text>
<text text-anchor="start" x="5" y="-56" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> xor()</text>
<text text-anchor="start" x="5" y="-44" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> add()</text>
<text text-anchor="start" x="5" y="-32" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> sub()</text>
<text text-anchor="start" x="5" y="-20" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> toNumber()</text>
<text text-anchor="start" x="5" y="-8" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> toString()</text>
</a>
</g>
</g>
<!-- object&#45;&gt;Int64 -->
<g id="edge1" class="edge">
<title>object-&gt;Int64</title>
<path fill="none" stroke="#000000" d="M34,-233.4847C34,-225.3369 34,-216.7452 34,-208.0222"/>
<polygon fill="#000000" stroke="#000000" points="30.5001,-233.5441 34,-243.5441 37.5001,-233.5442 30.5001,-233.5441"/>
</g>
</g>
</svg></div>

## 构造函数
        
### Int64
** Int64 构造函数 **

```JavaScript
new Int64(Long num = 0);
```

调用参数:
* num: Long, 初始化的值

--------------------------
** Int64 构造函数 **

```JavaScript
new Int64(Long hi,
    Long lo);
```

调用参数:
* hi: Long, 高32位数
* lo: Long, 低32位数

--------------------------
** Int64 构造函数 **

```JavaScript
new Int64(Int64 num);
```

调用参数:
* num: Int64, 初始化的值

--------------------------
** Int64 构造函数 **

```JavaScript
new Int64(String num,
    Integer base = 10);
```

调用参数:
* num: String, 数字字符串
* base: Integer, 数字字符串的编码方式，可以接受 2-16, 32, 64，默认为 10，为 10 时自动识别 0x 编码

## 成员属性
        
### hi
** Long, 高 32 位数值 **

```JavaScript
Long Int64.hi;
```

--------------------------
### lo
** Long, 低 32 位数值 **

```JavaScript
Long Int64.lo;
```

## 成员函数
        
### compare
** 将 Int64 内的数值与给定数值比较大小 **

```JavaScript
Integer Int64.compare(Int64 num);
```

调用参数:
* num: Int64, 指定比较的数值

返回结果:
* Integer, 返回 1 表示 Int64 内的数值比指定数值更大，0 表示相等，-1 表示更小

--------------------------
### shiftLeft
** 将 Int64 内的数值左移相应的位数，此操作不影响 Int64 原有数值 **

```JavaScript
Int64 Int64.shiftLeft(Integer bits);
```

调用参数:
* bits: Integer, 指定移动的位数

返回结果:
* Int64, 返回包含移位以后数值的对象

--------------------------
### shiftRight
** 将 Int64 内的数值右移相应的位数，此操作不影响 Int64 原有数值 **

```JavaScript
Int64 Int64.shiftRight(Integer bits);
```

调用参数:
* bits: Integer, 指定移动的位数

返回结果:
* Int64, 返回包含移位以后数值的对象

--------------------------
### and
** 将 Int64 内的数值与给定的数值进行按位 and 操作，此操作不影响 Int64 原有数值 **

```JavaScript
Int64 Int64.and(Int64 num);
```

调用参数:
* num: Int64, 指定运算的数值

返回结果:
* Int64, 返回包含预算以后数值的对象

--------------------------
### or
** 将 Int64 内的数值与给定的数值进行按位 or 操作，此操作不影响 Int64 原有数值 **

```JavaScript
Int64 Int64.or(Int64 num);
```

调用参数:
* num: Int64, 指定运算的数值

返回结果:
* Int64, 返回包含预算以后数值的对象

--------------------------
### xor
** 将 Int64 内的数值与给定的数值进行按位 xor 操作，此操作不影响 Int64 原有数值 **

```JavaScript
Int64 Int64.xor(Int64 num);
```

调用参数:
* num: Int64, 指定运算的数值

返回结果:
* Int64, 返回包含预算以后数值的对象

--------------------------
### add
** 将 Int64 内的数值与给定的数值进行加操作，此操作不影响 Int64 原有数值 **

```JavaScript
Int64 Int64.add(Int64 num);
```

调用参数:
* num: Int64, 指定运算的数值

返回结果:
* Int64, 返回包含预算以后数值的对象

--------------------------
### sub
** 将 Int64 内的数值与给定的数值进行减操作，此操作不影响 Int64 原有数值 **

```JavaScript
Int64 Int64.sub(Int64 num);
```

调用参数:
* num: Int64, 指定运算的数值

返回结果:
* Int64, 返回包含预算以后数值的对象

--------------------------
### toNumber
** 转换成数字类型 **

```JavaScript
Number Int64.toNumber();
```

返回结果:
* Number, 返回转换后的数字

--------------------------
### toString
** 转换成字符串类型 **

```JavaScript
String Int64.toString(Integer base = 10);
```

调用参数:
* base: Integer, 字符串进制数，可以接受 2-16, 32, 64，默认为 10

返回结果:
* String, 返回转换后的字符串

--------------------------
### dispose
** 强制回收对象，调用此方法后，对象资源将立即释放 **

```JavaScript
Int64.dispose();
```

--------------------------
### equals
** 比较当前对象与给定的对象是否相等 **

```JavaScript
Boolean Int64.equals(object expected);
```

调用参数:
* expected: object, 制定比较的目标对象

返回结果:
* Boolean, 返回对象比较的结果

--------------------------
### toString
** 返回对象的字符串表示，一般返回 "[Native Object]"，对象可以根据自己的特性重新实现 **

```JavaScript
String Int64.toString();
```

返回结果:
* String, 返回对象的字符串表示

--------------------------
### toJSON
** 返回对象的 JSON 格式表示，一般返回对象定义的可读属性集合 **

```JavaScript
Value Int64.toJSON(String key = "");
```

调用参数:
* key: String, 未使用

返回结果:
* Value, 返回包含可 JSON 序列化的值

--------------------------
### valueOf
** 返回对象本身的数值 **

```JavaScript
Value Int64.valueOf();
```

返回结果:
* Value, 返回对象本身的数值

