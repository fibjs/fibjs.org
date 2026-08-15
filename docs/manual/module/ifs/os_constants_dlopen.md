# 模块 os_constants_dlopen
[os_constants](os_constants.md) dlopen 子模块，包含动态链接库加载标志常量

引用方法：

```JavaScript
var dlopen = require('os').constants.dlopen
```

## 常量
        
### RTLD_LAZY
**延迟绑定，符号在使用时才解析**

```JavaScript
const os_constants_dlopen.RTLD_LAZY = 1;
```

--------------------------
### RTLD_NOW
**立即绑定，加载时解析全部符号**

```JavaScript
const os_constants_dlopen.RTLD_NOW = 2;
```

--------------------------
### RTLD_GLOBAL
**符号对后续加载的库全局可见**

```JavaScript
const os_constants_dlopen.RTLD_GLOBAL = 256;
```

--------------------------
### RTLD_LOCAL
**符号仅对当前库可见**

```JavaScript
const os_constants_dlopen.RTLD_LOCAL = 0;
```

--------------------------
### RTLD_DEEPBIND
**优先使用库自身的符号**

```JavaScript
const os_constants_dlopen.RTLD_DEEPBIND = 8;
```

