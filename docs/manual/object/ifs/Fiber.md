# 对象 Fiber
纤程操作对象，此对象不可直接创建

使用 [coroutine](../../module/ifs/coroutine.md).start 创建纤程后，将返回此对象，用于纤程处理和纤程间通信。
纤程主函数可以通过 this 访问本纤程对象，也可通过 [coroutine](../../module/ifs/coroutine.md).current 获取当前纤程。

```JavaScript
function func(v1) {
    console.log(v1 + this.v);
}

var fb = coroutine.start(func, 100);

fb.v = 123;

fb.join();
```

纤程局部存储通过共享的 Fiber 对象完成，通过 [coroutine](../../module/ifs/coroutine.md).current 获取当前纤程，通过修改和查询其变量达到共享数据的目的。

```JavaScript
function func() {
    console.log(coroutine.current().v);
}

coroutine.current().v = 100;

func();
```

纤程在创建时，会自动复制当前纤程的局部变量到新的纤程，之后，各自的局部变量的修改不会相互影响，除非变量本身为对象引用。

```JavaScript
function func() {
    console.log(coroutine.current().v);
}

coroutine.current().v = 100;

var fb = coroutine.start(func);

coroutine.current().v = 200;

fb.join();
```

## 继承关系
<div class="inherits"><svg width="65pt" height="214pt" viewBox="0.00 0.00 65.00 214.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(4 210)">
<title>%0</title>
<polygon fill="#ffffff" stroke="transparent" points="-4,4 -4,-210 61,-210 61,4 -4,4"/>
<!-- object -->
<g id="node1" class="node">
<title>object</title>
<g id="a_node1"><a xlink:href="object.md" xlink:title="object">
<polygon fill="#ffffff" stroke="transparent" points="0,-114 0,-206 57,-206 57,-114 0,-114"/>
<polygon fill="none" stroke="#000000" points=".5,-184 .5,-206 57.5,-206 57.5,-184 .5,-184"/>
<text text-anchor="start" x="15.6625" y="-192" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">object</text>
<polygon fill="none" stroke="#000000" points=".5,-114 .5,-184 57.5,-184 57.5,-114 .5,-114"/>
<text text-anchor="start" x="5.5" y="-170" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> dispose()</text>
<text text-anchor="start" x="5.5" y="-158" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> equals()</text>
<text text-anchor="start" x="5.5" y="-146" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> toString()</text>
<text text-anchor="start" x="5.5" y="-134" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> toJSON()</text>
<text text-anchor="start" x="5.5" y="-122" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> valueOf()</text>
</a>
</g>
</g>
<!-- Fiber -->
<g id="node2" class="node">
<title>Fiber</title>
<g id="a_node2"><a xlink:title="Fiber">
<polygon fill="#d3d3d3" stroke="transparent" points="1,0 1,-78 56,-78 56,0 1,0"/>
<polygon fill="none" stroke="#000000" points="1.5,-56 1.5,-78 56.5,-78 56.5,-56 1.5,-56"/>
<text text-anchor="start" x="17.6125" y="-64" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">Fiber</text>
<polygon fill="none" stroke="#000000" points="1.5,-22 1.5,-56 56.5,-56 56.5,-22 1.5,-22"/>
<text text-anchor="start" x="6.5" y="-42" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> caller</text>
<text text-anchor="start" x="6.5" y="-30" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> traceInfo</text>
<polygon fill="none" stroke="#000000" points="1.5,0 1.5,-22 56.5,-22 56.5,0 1.5,0"/>
<text text-anchor="start" x="6.5" y="-8" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> join()</text>
</a>
</g>
</g>
<!-- object&#45;&gt;Fiber -->
<g id="edge1" class="edge">
<title>object-&gt;Fiber</title>
<path fill="none" stroke="#000000" d="M28.5,-103.852C28.5,-95.2011 28.5,-86.4309 28.5,-78.2539"/>
<polygon fill="#000000" stroke="#000000" points="25.0001,-103.9099 28.5,-113.9099 32.0001,-103.9099 25.0001,-103.9099"/>
</g>
</g>
</svg></div>

## 成员属性
        
### caller
** Fiber, 查询纤程的调用纤程 **

```JavaScript
readonly Fiber Fiber.caller;
```

--------------------------
### traceInfo
** String, 查询纤程的调用堆栈，查询非当前纤程的堆栈需要在执行时指定参数：--trace_fiber **

```JavaScript
readonly String Fiber.traceInfo;
```

## 成员函数
        
### join
** 等待纤程结束 **

```JavaScript
Fiber.join();
```

--------------------------
### dispose
** 强制回收对象，调用此方法后，对象资源将立即释放 **

```JavaScript
Fiber.dispose();
```

--------------------------
### equals
** 比较当前对象与给定的对象是否相等 **

```JavaScript
Boolean Fiber.equals(object expected);
```

调用参数:
* expected: object, 制定比较的目标对象

返回结果:
* Boolean, 返回对象比较的结果

--------------------------
### toString
** 返回对象的字符串表示，一般返回 "[Native Object]"，对象可以根据自己的特性重新实现 **

```JavaScript
String Fiber.toString();
```

返回结果:
* String, 返回对象的字符串表示

--------------------------
### toJSON
** 返回对象的 JSON 格式表示，一般返回对象定义的可读属性集合 **

```JavaScript
Value Fiber.toJSON(String key = "");
```

调用参数:
* key: String, 未使用

返回结果:
* Value, 返回包含可 JSON 序列化的值

--------------------------
### valueOf
** 返回对象本身的数值 **

```JavaScript
Value Fiber.valueOf();
```

返回结果:
* Value, 返回对象本身的数值

