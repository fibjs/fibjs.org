# 模块 performance
performance 基础性能监控模块

引用方法：

```JavaScript
var performance = require('perf_hooks').performance;
```

## 静态函数
        
### clearMarks
**清除所有性能标记**

```JavaScript
static performance.clearMarks(String name = "");
```

调用参数:
* name: String, 标记名称，如果为空则清除所有标记

--------------------------
### clearMeasures
**清除所有性能测量**

```JavaScript
static performance.clearMeasures(String name = "");
```

调用参数:
* name: String, 测量名称，如果为空则清除所有测量

--------------------------
### mark
**创建一个性能标记**

```JavaScript
static performance.mark(String name,
    Object options = {});
```

调用参数:
* name: String, 标记名称
* options: Object, 附加选项

options 为一个对象，包含以下属性：
 - detail: 附加信息
 - startTime: 开始时间，如果为空则使用当前时间

--------------------------
### measure
**创建一个性能测量**

```JavaScript
static performance.measure(String name,
    String startMark = "",
    String endMark = "");
```

调用参数:
* name: String, 测量名称
* startMark: String, 开始标记名称，如果为空则使用进程起始时间
* endMark: String, 结束标记名称，如果为空则使用当前时间

--------------------------
**创建一个性能测量**

```JavaScript
static performance.measure(String name,
    Object options = {});
```

调用参数:
* name: String, 测量名称
* options: Object, 附加选项

options 为一个对象，包含以下属性：
 - detail: 附加信息
 - duration: 持续时间
 - end: 如果为 Number 类型，则表示结束时间，如果是 String 类型，则表示结束标记名称
 - start: 如果为 Number 类型，则表示开始时间，如果是 String 类型，则表示开始标记名称

--------------------------
### getEntries
**获取所有性能记录**

```JavaScript
static NArray performance.getEntries();
```

返回结果:
* NArray, 返回所有性能记录

--------------------------
### getEntriesByType
**获取所有性能记录**

```JavaScript
static NArray performance.getEntriesByType(String type);
```

调用参数:
* type: String, 记录类型

返回结果:
* NArray, 返回所有性能记录

--------------------------
### getEntriesByName
**获取所有性能记录**

```JavaScript
static NArray performance.getEntriesByName(String name,
    String type = "");
```

调用参数:
* name: String, 记录名称
* type: String, 记录类型

返回结果:
* NArray, 返回所有性能记录

--------------------------
### now
**查询当前进程时间**

```JavaScript
static Number performance.now();
```

返回结果:
* Number, 返回当前进程时间

