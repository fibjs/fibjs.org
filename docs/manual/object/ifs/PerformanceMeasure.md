# 对象 PerformanceMeasure
PerformanceMeasure 接口提供了 [performance](../../module/ifs/performance.md) measure 记录的详细信息。

## 继承关系
```dot
digraph {
    node [fontname="Helvetica,sans-Serif", fontsize=10, shape="record", style="filled", fillcolor="white"];

    object [tooltip="object", URL="object.md", label="{object|toString()\ltoJSON()\l}"];
    PerformanceEntry [tooltip="PerformanceEntry", URL="PerformanceEntry.md", label="{PerformanceEntry|name\lentryType\lstartTime\lduration\l}"];
    PerformanceMeasure [tooltip="PerformanceMeasure", fillcolor="lightgray", id="me", label="{PerformanceMeasure|detail\l}"];

    object -> PerformanceEntry [dir=back];
    PerformanceEntry -> PerformanceMeasure [dir=back];
}
```

## 成员属性
        
### detail
**Value, [performance](../../module/ifs/performance.md) measure 记录的详细信息.**

```JavaScript
readonly Value PerformanceMeasure.detail;
```

--------------------------
### name
**String, [performance](../../module/ifs/performance.md) 记录的名称.**

```JavaScript
readonly String PerformanceMeasure.name;
```

--------------------------
### entryType
**String, [performance](../../module/ifs/performance.md) 记录的类型.**

```JavaScript
readonly String PerformanceMeasure.entryType;
```

--------------------------
### startTime
**Number, [performance](../../module/ifs/performance.md) 记录的开始时间.**

```JavaScript
readonly Number PerformanceMeasure.startTime;
```

--------------------------
### duration
**Number, [performance](../../module/ifs/performance.md) 记录的持续时间.**

```JavaScript
readonly Number PerformanceMeasure.duration;
```

## 成员函数
        
### toString
**返回对象的字符串表示，一般返回 "[Native Object]"，对象可以根据自己的特性重新实现**

```JavaScript
String PerformanceMeasure.toString();
```

返回结果:
* String, 返回对象的字符串表示

--------------------------
### toJSON
**返回对象的 JSON 格式表示，一般返回对象定义的可读属性集合**

```JavaScript
Value PerformanceMeasure.toJSON(String key = "");
```

调用参数:
* key: String, 未使用

返回结果:
* Value, 返回包含可 JSON 序列化的值

