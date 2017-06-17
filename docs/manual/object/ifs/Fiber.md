# 对象 Fiber
纤程操作对象，此对象不可直接创建

使用 coroutine.start 创建纤程后，将返回此对象，用于纤程处理和纤程间通信。
纤程主函数可以通过 this 访问本纤程对象，也可通过 coroutine.current 获取当前纤程。
```JavaScript
function func(v1)
{
  console.log(v1 + this.v);
}

var fb = coroutine.start(func,100);

fb.v = 123;

fb.join();
```

纤程局部存储通过共享的 Fiber 对象完成，通过 coroutine.current 获取当前纤程，通过修改和查询其变量达到共享数据的目的。

```JavaScript
function func()
{
  console.log(coroutine.current().v);
}

coroutine.current().v = 100;

func();
```

纤程在创建时，会自动复制当前纤程的局部变量到新的纤程，之后，各自的局部变量的修改不会相互影响，除非变量本身为对象引用。

```JavaScript
function func()
{
  console.log(coroutine.current().v);
}

coroutine.current().v = 100;

var fb = coroutine.start(func);

coroutine.current().v = 200;

fb.join();
```
## 函数
        
### join
等待纤程结束
```JavaScript
Fiber.join();
```

### dispose
强制回收对象，调用此方法后，对象资源将立即释放
```JavaScript
Fiber.dispose();
```

### equals
比较当前对象与给定的对象是否相等
```JavaScript
Boolean Fiber.equals(object expected);
```

调用参数:
* expected - 制定比较的目标对象

返回结果:
* 返回对象比较的结果

### toString
返回对象的字符串表示，一般返回 &#34;[Native Object]&#34;，对象可以根据自己的特性重新实现
```JavaScript
String Fiber.toString();
```

返回结果:
* 返回对象的字符串表示

### toJSON
返回对象的 JSON 格式表示，一般返回对象定义的可读属性集合
```JavaScript
Value Fiber.toJSON(String key = "");
```

调用参数:
* key - 未使用

返回结果:
* 返回包含可 JSON 序列化的值

### valueOf
返回对象本身的数值
```JavaScript
Value Fiber.valueOf();
```

返回结果:
* 返回对象本身的数值

## 属性
        
### caller
查询纤程的调用纤程
```JavaScript
readonly Fiber Fiber.caller;
```

### traceInfo
查询纤程的调用堆栈，查询非当前纤程的堆栈需要在执行时指定参数：--trace_fiber
```JavaScript
readonly String Fiber.traceInfo;
```

