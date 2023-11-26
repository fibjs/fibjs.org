# 模块 vm
沙箱模块，用于隔离不同安全等级的运行环境

通过建立隔离沙箱，可以限制脚本运行时可以接触的资源，隔离不同脚本执行环境，并可以为不同的环境定制基础模块，以保障整体运行环境的安全。

下面的示例创建一个沙箱，限制只允许访问全局基础模块中的 [assert](assert.md) 模块，并添加 a 和 b 两个定制模块：

```JavaScript
var vm = require('vm');
var sbox = new vm.SandBox({
    a: 100,
    b: 200,
    assert: require('assert')
});

var mod_in_sbox = sbox.require('./path/to/mod');
```

## 对象
        
### SandBox
**创建一个 [SandBox](../../object/ifs/SandBox.md) 对象，参见 [SandBox](../../object/ifs/SandBox.md)**

```JavaScript
SandBox vm.SandBox;
```

--------------------------
### Script
**创建一个 [Script](../../object/ifs/Script.md) 对象，参见 [Script](../../object/ifs/Script.md)**

```JavaScript
Script vm.Script;
```

## 静态函数
        
### createContext
**创建一个上下文对象**

```JavaScript
static Object vm.createContext(Object contextObject = {},
    Object opts = {});
```

调用参数:
* contextObject: Object, 指定将被上下文化的对象
* opts: Object, 指定上下文选项

返回结果:
* Object, 返回上下文对象

--------------------------
### isContext
**如果给定的 [object](../../object/ifs/object.md) 对象已使用 [vm.createContext](vm.md#createContext)() 进行上下文化，则返回 true**

```JavaScript
static Boolean vm.isContext(Object contextObject);
```

调用参数:
* contextObject: Object, 指定要检查的对象

返回结果:
* Boolean, 如果给定的 [object](../../object/ifs/object.md) 对象已使用 [vm.createContext](vm.md#createContext)() 进行上下文化，则返回 true

--------------------------
### runInContext
**在给定 contextifiedObject 内运行 code 指定的代码并返回结果**

```JavaScript
static Value vm.runInContext(String code,
    Object contextifiedObject,
    Object opts = {});
```

调用参数:
* code: String, 指定要编译和运行的脚本代码
* contextifiedObject: Object, 指定运行时的上下文对象
* opts: Object, 指定运行选项

返回结果:
* Value, 返回运行结果

--------------------------
**在给定 contextifiedObject 内运行 code 指定的代码并返回结果**

```JavaScript
static Value vm.runInContext(String code,
    Object contextifiedObject,
    String filename);
```

调用参数:
* code: String, 指定要编译和运行的脚本代码
* contextifiedObject: Object, 指定运行时的上下文对象
* filename: String, 指定脚本文件名

返回结果:
* Value, 返回运行结果

--------------------------
### runInNewContext
**使用给定的 contextObject 在创建的上下文中, 在其中运行 code 指定的代码并返回结果**

```JavaScript
static Value vm.runInNewContext(String code,
    Object contextObject = {},
    Object opts = {});
```

调用参数:
* code: String, 指定要编译和运行的脚本代码
* contextObject: Object, 指定将被上下文化的对象
* opts: Object, 指定运行选项

返回结果:
* Value, 返回运行结果

--------------------------
**使用给定的 contextObject 在创建的上下文中, 在其中运行 code 指定的代码并返回结果**

```JavaScript
static Value vm.runInNewContext(String code,
    Object contextObject = {},
    String filename);
```

调用参数:
* code: String, 指定要编译和运行的脚本代码
* contextObject: Object, 指定将被上下文化的对象
* filename: String, 指定脚本文件名

返回结果:
* Value, 返回运行结果

--------------------------
### runInThisContext
**在当前上下文内内运行 code 指定的代码并返回结果**

```JavaScript
static Value vm.runInThisContext(String code,
    Object opts = {});
```

调用参数:
* code: String, 指定要编译和运行的脚本代码
* opts: Object, 指定运行选项

返回结果:
* Value, 返回运行结果

--------------------------
**在当前上下文内内运行 code 指定的代码并返回结果**

```JavaScript
static Value vm.runInThisContext(String code,
    String filename);
```

调用参数:
* code: String, 指定要编译和运行的脚本代码
* filename: String, 指定脚本文件名

返回结果:
* Value, 返回运行结果

