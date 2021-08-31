# 对象 Fiber
纤程操作对象，此对象不可直接创建

使用 [coroutine.start](../../module/ifs/coroutine.md#start) 创建纤程后，将返回此对象，用于纤程处理和纤程间通信。
纤程主函数可以通过 this 访问本纤程对象，也可通过 [coroutine.current](../../module/ifs/coroutine.md#current) 获取当前纤程。

```JavaScript
function func(v1) {
    console.log(v1 + this.v);
}

var fb = coroutine.start(func, 100);

fb.v = 123;

fb.join();
```

纤程局部存储通过共享的 Fiber 对象完成，通过 [coroutine.current](../../module/ifs/coroutine.md#current) 获取当前纤程，通过修改和查询其变量达到共享数据的目的。

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
```uml
#lineWidth: 1.5
#font: Helvetica,sans-Serif
#fontSize: 10
#leading: 1.6
#.this: fill=lightgray
#.class: fill=white

[<class>object|toString();toJSON()]
[<this>Fiber|id;caller;stack;stack_usage|join()]

[object] <:- [Fiber]
```

## 成员属性
        
### id
**Long, 查询纤程的唯一 id**

```JavaScript
readonly Long Fiber.id;
```

--------------------------
### caller
**Fiber, 查询纤程的调用纤程**

```JavaScript
readonly Fiber Fiber.caller;
```

--------------------------
### stack
**String, 查询纤程的调用堆栈**

```JavaScript
readonly String Fiber.stack;
```

--------------------------
### stack_usage
**Integer, 查询纤程已使用的堆栈尺寸**

```JavaScript
readonly Integer Fiber.stack_usage;
```

## 成员函数
        
### join
**等待纤程结束**

```JavaScript
Fiber.join();
```

--------------------------
### toString
**返回对象的字符串表示，一般返回 "[Native Object]"，对象可以根据自己的特性重新实现**

```JavaScript
String Fiber.toString();
```

返回结果:
* String, 返回对象的字符串表示

--------------------------
### toJSON
**返回对象的 JSON 格式表示，一般返回对象定义的可读属性集合**

```JavaScript
Value Fiber.toJSON(String key = "");
```

调用参数:
* key: String, 未使用

返回结果:
* Value, 返回包含可 JSON 序列化的值

