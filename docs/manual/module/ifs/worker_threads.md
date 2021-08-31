# 模块 worker_threads
worker 基础模块

引用方法：

```JavaScript
var worker_threads = require('worker_threads');
```

## 对象
        
### Worker
**独立线程工作对象，参见 [Worker](../../object/ifs/Worker.md)**

```JavaScript
Worker worker_threads.Worker;
```

## 静态属性
        
### isMainThread
**Boolean, 查询当前 [Worker](../../object/ifs/Worker.md) 是不是主线程**

```JavaScript
static readonly Boolean worker_threads.isMainThread;
```

