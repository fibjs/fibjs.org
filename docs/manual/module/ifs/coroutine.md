# 模块 coroutine
并发控制模块

引用方法：
```JavaScript
var coroutine = require('coroutine');
```
## 函数
        
### start
启动一个纤程并返回纤程对象
```JavaScript
Fiber coroutine.start(Function func,
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
Array coroutine.parallel(Array funcs,
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
Array coroutine.parallel(Array datas,
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
Array coroutine.parallel(Function func,
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
Array coroutine.parallel(...);
```

调用参数:
* ... - 一组并行执行的函数

返回结果:
* 返回函数执行结果的数组

### current
返回当前纤程
```JavaScript
Fiber coroutine.current();
```

返回结果:
* 当前纤程对象

### sleep
暂停当前纤程指定的时间
```JavaScript
coroutine.sleep(Integer ms = 0);
```

调用参数:
* ms - 指定要暂停的时间，以毫秒为单位，缺省为 0，即有空闲立即回恢复运行

## 属性
        
### fibers
返回当前正在运行的全部 fiber 数组
```JavaScript
readonly Array coroutine.fibers;
```

### spareFibers
查询和设置空闲 Fiber 数量，服务器抖动较大时可适度增加空闲 Fiber 数量。缺省为 256
```JavaScript
Integer coroutine.spareFibers;
```

### vmid
查询当前 vm 编号
```JavaScript
readonly Integer coroutine.vmid;
```

### loglevel
修改和查询本 vm 的输出级别，用以过滤输出信息，缺省为 console.NOTSET，全部输出
```JavaScript
Integer coroutine.loglevel;
```

