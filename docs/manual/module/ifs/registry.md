# 模块 registry
registry 模块是一个操作 Windows 注册表（Registry）的模块。它提供了访问注册表的方法和常量，可以读取、修改、删除、添加等操作。registry 模块提供的操作方式和 Windows 应用程序使用的方式类似，但却是在 FibJS 中提供了能力。常量有常见的 Root、 数据类型等常量，还有一些用于不同操作的返回值的常量

`registry` 模块是一个用于操作 Windows 注册表（Registry）的模块。注册表是一个分层数据库，用于存储系统和应用程序的配置信息。Windows 操作系统和许多应用程序都依赖注册表来存储和检索配置信息。

Windows 注册表包含多个根键（Root Key），每个根键下包含多个子键（Sub Key）和键值（Value）。常见的根键包括：

- `HKEY_CLASSES_ROOT`：存储文件类型和关联的应用程序信息。
- `HKEY_CURRENT_USER`：存储当前用户的配置信息。
- `HKEY_LOCAL_MACHINE`：存储计算机上所有用户的配置信息。
- `HKEY_USERS`：存储所有用户的配置信息。
- `HKEY_CURRENT_CONFIG`：存储当前硬件配置的信息。

注册表中的数据类型包括字符串（SZ）、扩展字符串（EXPAND_SZ）、32 位数值（DWORD）、64 位数值（QWORD）等。

`registry` 模块提供了一系列函数，用于读取、修改、删除和添加注册表项。常用的函数包括：

- `get(root, key[, flags])`：获取指定注册表项的值。
- `set(root, key, value[, type])`：设置指定注册表项的值。
- `del(root, key)`：删除指定注册表项。

以下是一个使用 `registry` 模块的示例代码，展示了如何验证某个注册表项是否存在，如果不存在则写入该项，并读取其值：

```JavaScript
var registry = require('registry');

// 指定键名
var key = "Software\\Fibjs\\Test\\KeyName";

// 检查注册表项是否存在
if (!registry.get(registry.CLASSES_ROOT, key)) {
    // 如果不存在，则写入注册表
    registry.set(registry.CLASSES_ROOT, key, "test_value");
}

// 读取注册表项的值
var value = registry.get(registry.CLASSES_ROOT, key);
console.log(value);
```

该程序首先检查注册表项 `Software\Fibjs\Test\KeyName` 是否存在，如果不存在，则将其值设置为 `test_value`。最后，读取该注册表项的值并输出到控制台。

`registry` 模块提供了一个方便的接口，用于在 FibJS 中操作 Windows 注册表。通过该模块，可以轻松地读取、修改、添加和删除注册表中的信息，从而实现对系统和应用程序配置的管理。

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
**查询指定键值的数值**

```JavaScript
static Value registry.get(Integer root,
    String key,
    String name);
```

调用参数:
* root: Integer, 指定注册表根
* key: String, 指定键值
* name: String, 指定数值名称

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
    String values[]);
```

调用参数:
* root: Integer, 指定注册表根
* key: String, 指定键值
* values[]: String, 指定多字符串数组

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
**设置指定键值为数字**

```JavaScript
static registry.set(Integer root,
    String key,
    String name,
    Number value,
    Integer type = DWORD);
```

调用参数:
* root: Integer, 指定注册表根
* key: String, 指定键值
* name: String, 指定数值名称
* value: Number, 指定数字
* type: Integer, 指定类型，允许的类型为 DWORD 和 QWORD，缺省为 DWORD

--------------------------
**设置指定键值为字符串**

```JavaScript
static registry.set(Integer root,
    String key,
    String name,
    String value,
    Integer type = SZ);
```

调用参数:
* root: Integer, 指定注册表根
* key: String, 指定键值
* name: String, 指定数值名称
* value: String, 指定字符串
* type: Integer, 指定类型，允许的类型为 SZ 和 EXPAND_SZ，缺省为 SZ

--------------------------
**设置指定键值为多字符串**

```JavaScript
static registry.set(Integer root,
    String key,
    String name,
    String values[]);
```

调用参数:
* root: Integer, 指定注册表根
* key: String, 指定键值
* name: String, 指定数值名称
* values[]: String, 指定多字符串数组

--------------------------
**设置指定键值为二进制**

```JavaScript
static registry.set(Integer root,
    String key,
    String name,
    Buffer value);
```

调用参数:
* root: Integer, 指定注册表根
* key: String, 指定键值
* name: String, 指定数值名称
* value: [Buffer](../../object/ifs/Buffer.md), 指定二进制数据

--------------------------
### has
**检查指定键值是否存在**

```JavaScript
static Boolean registry.has(Integer root,
    String key);
```

调用参数:
* root: Integer, 指定注册表根
* key: String, 指定键值

返回结果:
* Boolean, 返回键值是否存在

--------------------------
**检查指定键值是否存在**

```JavaScript
static Boolean registry.has(Integer root,
    String key,
    String name);
```

调用参数:
* root: Integer, 指定注册表根
* key: String, 指定键值
* name: String, 指定数值名称

返回结果:
* Boolean, 返回键值是否存在

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

--------------------------
**删除指定键值的数值**

```JavaScript
static registry.del(Integer root,
    String key,
    String name);
```

调用参数:
* root: Integer, 指定注册表根
* key: String, 指定键值
* name: String, 指定数值名称

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

