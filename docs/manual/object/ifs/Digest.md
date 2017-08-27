# 对象 Digest
信息摘要对象

## 继承关系
```dot
digraph {
    node [fontname="Helvetica,sans-Serif", fontsize=10, shape="record", style="filled", fillcolor="white"];

    object [tooltip="object", URL="object.md", label="{object|dispose()\lequals()\ltoString()\ltoJSON()\l}"];
    Digest [tooltip="Digest", fillcolor="lightgray", label="{Digest|size\l|update()\ldigest()\l}"];

    object -> Digest [dir=back];
}
```

## 成员属性
        
### size
**Integer, 查询当前信息摘要算法的摘要字节数**

```JavaScript
readonly Integer Digest.size;
```

## 成员函数
        
### update
**更新二进制摘要信息**

```JavaScript
Digest Digest.update(Buffer data);
```

调用参数:
* data: [Buffer](Buffer.md), 二进制数据块

返回结果:
* Digest, 返回信息摘要对象本身

--------------------------
### digest
**计算并返回摘要**

```JavaScript
Buffer Digest.digest(Buffer data);
```

调用参数:
* data: [Buffer](Buffer.md), 二进制数据块，此数据块将在计算前更新进摘要

返回结果:
* [Buffer](Buffer.md), 返回摘要的二进制数据

--------------------------
**计算并返回摘要**

```JavaScript
Buffer Digest.digest();
```

返回结果:
* [Buffer](Buffer.md), 返回摘要的二进制数据

--------------------------
### dispose
**强制回收对象，调用此方法后，对象资源将立即释放**

```JavaScript
Digest.dispose();
```

--------------------------
### equals
**比较当前对象与给定的对象是否相等**

```JavaScript
Boolean Digest.equals(object expected);
```

调用参数:
* expected: [object](object.md), 制定比较的目标对象

返回结果:
* Boolean, 返回对象比较的结果

--------------------------
### toString
**返回对象的字符串表示，一般返回 "[Native Object]"，对象可以根据自己的特性重新实现**

```JavaScript
String Digest.toString();
```

返回结果:
* String, 返回对象的字符串表示

--------------------------
### toJSON
**返回对象的 JSON 格式表示，一般返回对象定义的可读属性集合**

```JavaScript
Value Digest.toJSON(String key = "");
```

调用参数:
* key: String, 未使用

返回结果:
* Value, 返回包含可 JSON 序列化的值

