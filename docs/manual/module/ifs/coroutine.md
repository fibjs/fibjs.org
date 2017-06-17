# 模块 coroutine
并发控制模块

引用方法：
```JavaScript
var coroutine = require('coroutine');
```
## 对象
        
### Lock
锁对象，参见 [Lock](/docs/manual/object/ifs/lock.md.html)
```JavaScript
Lock coroutine.Lock;
```

### Semaphore
信号量对象，参见 [Semaphore](/docs/manual/object/ifs/semaphore.md.html)
```JavaScript
Semaphore coroutine.Semaphore;
```

### Condition
条件变量对象，参见 [Condition](/docs/manual/object/ifs/condition.md.html)
```JavaScript
Condition coroutine.Condition;
```

### Event
事件对象，参见 [Event](/docs/manual/object/ifs/event.md.html)
```JavaScript
Event coroutine.Event;
```

### BlockQueue
阻塞队列对象，参见 [BlockQueue](/docs/manual/object/ifs/blockqueue.md.html)
```JavaScript
BlockQueue coroutine.BlockQueue;
```

### Worker
独立线程工作对象，参见 [Worker](/docs/manual/object/ifs/worker.md.html)
```JavaScript
Worker coroutine.Worker;
```

## 函数
        
### start
启动一个纤程并返回纤程对象
```JavaScript
static Fiber coroutine.start(Function func,
                ...);
```

调用参数:
* func - 制定纤程执行的函数
* ... - 可变参数序列，此序列会在纤程内传递给函数

返回结果:
* 返回纤程对象

### parallel
并行执行一组函数，并等待返回
```JavaScript
static Array coroutine.parallel(Array funcs,
                Integer fibers = -1);
```

调用参数:
* funcs - 并行执行的函数数组
* fibers - 限制并发 fiber 数量，缺省为 -1，启用与 funcs 数量相同 fiber

返回结果:
* 返回函数执行结果的数组

--------------------------
并行执行一个函数处理一组数据，并等待返回
```JavaScript
static Array coroutine.parallel(Array datas,
                Function func,
                Integer fibers = -1);
```

调用参数:
* datas - 并行执行的数据数组
* func - 并行执行的函数
* fibers - 限制并发 fiber 数量，缺省为 -1，启用与 datas 数量相同 fiber

返回结果:
* 返回函数执行结果的数组

--------------------------
并行执行一个函数多次，并等待返回
```JavaScript
static Array coroutine.parallel(Function func,
                Integer num,
                Integer fibers = -1);
```

调用参数:
* func - 并行执行的函数数
* num - 重复任务数量
* fibers - 限制并发 fiber 数量，缺省为 -1，启用与 funcs 数量相同 fiber

返回结果:
* 返回函数执行结果的数组

--------------------------
并行执行一组函数，并等待返回
```JavaScript
static Array coroutine.parallel(...);
```

调用参数:
* ... - 一组并行执行的函数

返回结果:
* 返回函数执行结果的数组

### current
返回当前纤程
```JavaScript
static Fiber coroutine.current();
```

返回结果:
* 当前纤程对象

### sleep
暂停当前纤程指定的时间
```JavaScript
static coroutine.sleep(Integer ms = 0) async;
```

调用参数:
* ms - 指定要暂停的时间，以毫秒为单位，缺省为 0，即有空闲立即回恢复运行

## 属性
        
### fibers
返回当前正在运行的全部 fiber 数组
```JavaScript
static readonly Array coroutine.fibers;
```

### spareFibers
查询和设置空闲 [Fiber](/docs/manual/object/ifs/fiber.md.html) 数量，服务器抖动较大时可适度增加空闲 [Fiber](/docs/manual/object/ifs/fiber.md.html) 数量。缺省为 256
```JavaScript
static Integer coroutine.spareFibers;
```

### vmid
查询当前 [vm](/docs/manual/module/ifs/vm.md.html) 编号
```JavaScript
static readonly Integer coroutine.vmid;
```

### loglevel
修改和查询本 [vm](/docs/manual/module/ifs/vm.md.html) 的输出级别，用以过滤输出信息，缺省为 [console](/docs/manual/module/ifs/console.md.html).NOTSET，全部输出
```JavaScript
static Integer coroutine.loglevel;
```

