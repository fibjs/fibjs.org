# 对象 Timer
定时器处理器对象

## 继承关系
```uml
#lineWidth: 1.5
#font: Helvetica,sans-Serif
#fontSize: 10
#leading: 1.6
#.this: fill=lightgray
#.class: fill=white

[<class>object|toString();toJSON()]
[<this>Timer|stopped|ref();unref();clear()]

[object] <:- [Timer]
```

## 成员属性
        
### stopped
**Boolean, 查询当前定时器是否已经终止**

```JavaScript
readonly Boolean Timer.stopped;
```

## 成员函数
        
### ref
**维持 fibjs 进程不退出，在定时器等待期间阻止 fibjs 进程退出**

```JavaScript
Timer Timer.ref();
```

返回结果:
* Timer, 返回定时器对象

--------------------------
### unref
**允许 fibjs 进程退出，在定时器等待期间允许 fibjs 进程退出**

```JavaScript
Timer Timer.unref();
```

返回结果:
* Timer, 返回定时器对象

--------------------------
### clear
**取消当前定时器**

```JavaScript
Timer.clear();
```

--------------------------
### toString
**返回对象的字符串表示，一般返回 "[Native Object]"，对象可以根据自己的特性重新实现**

```JavaScript
String Timer.toString();
```

返回结果:
* String, 返回对象的字符串表示

--------------------------
### toJSON
**返回对象的 JSON 格式表示，一般返回对象定义的可读属性集合**

```JavaScript
Value Timer.toJSON(String key = "");
```

调用参数:
* key: String, 未使用

返回结果:
* Value, 返回包含可 JSON 序列化的值

