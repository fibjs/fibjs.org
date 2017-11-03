# 模块 registry
Windows 注册表访问模块

引用方式：

```JavaScript
var registry = require('registry');
var value = registry.get(registry.CLASSES_ROOT, "\node1\node2\value");
```

## 静态函数
        
### listSubKey
**返回指定键值下的所有子健**

```JavaScript
static NArray registry.listSubKey(Integer root,
    String key);
```

调用参数:
* root: Integer, 指定注册表根
* key: String, 指定键值

返回结果:
* NArray, 返回该键值下所有子健

--------------------------
### listValue
**返回指定键值下的所有数据的健**

```JavaScript
static NArray registry.listValue(Integer root,
    String key);
```

调用参数:
* root: Integer, 指定注册表根
* key: String, 指定键值

返回结果:
* NArray, 返回该键值下所有数据的健

--------------------------
### get
**查询指定键值的数值**

```JavaScript
static Value registry.get(Integer root,
    String key);
```

调用参数:
* root: Integer, 指定注册表根
* key: String, 指定键值

返回结果:
* Value, 返回指定键值的数值

--------------------------
### set
**设置指定键值为数字**

```JavaScript
static registry.set(Integer root,
    String key,
    Number value,
    Integer type = DWORD);
```

调用参数:
* root: Integer, 指定注册表根
* key: String, 指定键值
* value: Number, 指定数字
* type: Integer, 指定类型，允许的类型为 DWORD 和 QWORD，缺省为 DWORD

--------------------------
**设置指定键值为字符串**

```JavaScript
static registry.set(Integer root,
    String key,
    String value,
    Integer type = SZ);
```

调用参数:
* root: Integer, 指定注册表根
* key: String, 指定键值
* value: String, 指定字符串
* type: Integer, 指定类型，允许的类型为 SZ 和 EXPAND_SZ，缺省为 SZ

--------------------------
**设置指定键值为多字符串**

```JavaScript
static registry.set(Integer root,
    String key,
    Array value);
```

调用参数:
* root: Integer, 指定注册表根
* key: String, 指定键值
* value: Array, 指定多字符串数组

--------------------------
**设置指定键值为二进制**

```JavaScript
static registry.set(Integer root,
    String key,
    Buffer value);
```

调用参数:
* root: Integer, 指定注册表根
* key: String, 指定键值
* value: [Buffer](../../object/ifs/Buffer.md), 指定二进制数据

--------------------------
### del
**删除指定键值的数值**

```JavaScript
static registry.del(Integer root,
    String key);
```

调用参数:
* root: Integer, 指定注册表根
* key: String, 指定键值

## 常量
        
### CLASSES_ROOT
**注册表根，存储Windows可识别的文件类型的详细列表，以及相关联的程序**

```JavaScript
const registry.CLASSES_ROOT = 0;
```

--------------------------
### CURRENT_USER
**注册表根，存储当前用户设置的信息**

```JavaScript
const registry.CURRENT_USER = 1;
```

--------------------------
### LOCAL_MACHINE
**注册表根，包括安装在计算机上的硬件和软件的信息**

```JavaScript
const registry.LOCAL_MACHINE = 2;
```

--------------------------
### USERS
**注册表根，包含使用计算机的用户的信息**

```JavaScript
const registry.USERS = 3;
```

--------------------------
### CURRENT_CONFIG
**注册表根，这个分支包含计算机当前的硬件配置信息**

```JavaScript
const registry.CURRENT_CONFIG = 5;
```

--------------------------
### SZ
**注册表数据类型，字符串**

```JavaScript
const registry.SZ = 1;
```

--------------------------
### EXPAND_SZ
**注册表数据类型，扩展字符串**

```JavaScript
const registry.EXPAND_SZ = 2;
```

--------------------------
### DWORD
**注册表数据类型，32 位数值**

```JavaScript
const registry.DWORD = 4;
```

--------------------------
### QWORD
**注册表数据类型，64 位数值**

```JavaScript
const registry.QWORD = 11;
```

