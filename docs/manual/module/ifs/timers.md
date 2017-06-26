# 模块 timers
timers 模块

## 静态函数
        
### clearInterval
**清除指定的定时器**

```JavaScript
static timers.clearInterval(Timer t);
```

调用参数:
* t: [Timer](../../object/ifs/Timer.md), 指定要清除的定时器

--------------------------
### clearTimeout
**清除指定的定时器**

```JavaScript
static timers.clearTimeout(Timer t);
```

调用参数:
* t: [Timer](../../object/ifs/Timer.md), 指定要清除的定时器

--------------------------
### clearImmediate
**清除指定的定时器**

```JavaScript
static timers.clearImmediate(Timer t);
```

调用参数:
* t: [Timer](../../object/ifs/Timer.md), 指定要清除的定时器

--------------------------
### setInterval
**每间隔指定的时间后调用函数**

```JavaScript
static Timer timers.setInterval(Function callback,
    Integer timeout);
```

调用参数:
* callback: Function, 指定回调函数
* timeout: Integer, 指定间隔的时间，以毫秒为单位

返回结果:
* [Timer](../../object/ifs/Timer.md), 返回定时器对象

--------------------------
### setTimeout
**在指定的时间后调用函数**

```JavaScript
static Timer timers.setTimeout(Function callback,
    Integer timeout);
```

调用参数:
* callback: Function, 指定回调函数
* timeout: Integer, 指定延时的时间，以毫秒为单位

返回结果:
* [Timer](../../object/ifs/Timer.md), 返回定时器对象

--------------------------
### setImmediate
**下一个空闲时间立即执行回调函数**

```JavaScript
static Timer timers.setImmediate(Function callback);
```

调用参数:
* callback: Function, 指定回调函数

返回结果:
* [Timer](../../object/ifs/Timer.md), 返回定时器对象

