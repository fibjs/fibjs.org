# Module os_constants_dlopen
The dlopen table of [os.constants](os.md#constants): the dynamic loader flags accepted by

[process.dlopen](process.md#dlopen)

Reached through `require('[os](os.md)').constants.dlopen`. The values are the flags of the host
dynamic loader - on glibc RTLD_LAZY is 1, RTLD_NOW 2, RTLD_GLOBAL 256, RTLD_LOCAL 0 and
RTLD_DEEPBIND 8 - and they match Node.js's [os.constants](os.md#constants).dlopen on Linux; [process.dlopen](process.md#dlopen)
passes the number straight to dlopen, so take the flags from this table. The legacy
[constants](constants.md) [module](module.md) exposes the old libuv/macOS numbers (1/2/8/4) under the same names.

Concepts:

- **Binding**: RTLD_LAZY resolves symbols on first use and RTLD_NOW resolves all of them
  when the library is loaded; [process.dlopen](process.md#dlopen) defaults to 1 (RTLD_LAZY).
- **Visibility**: RTLD_GLOBAL makes the library's symbols available to libraries loaded
  later, RTLD_LOCAL (0) keeps them private, and RTLD_DEEPBIND prefers the library's own
  symbols over already loaded ones.
- **Combine with bitwise-or**: a typical value is RTLD_NOW | RTLD_GLOBAL (258); unknown
  bits are loader-specific and must not be invented.
- **Platform**: the numbers above are glibc's; other systems use their own loader flags
  (macOS maps RTLD_GLOBAL to 8 and RTLD_LOCAL to 4), so treat the table as the values of
  the running platform.

Import:

```JavaScript
const dlopen = require('os').constants.dlopen;
```

Example 1 — the flags passed to [process.dlopen](process.md#dlopen):

```JavaScript
const dlopen = require('os').constants.dlopen;

// The values are the flags of the host loader (glibc on Linux).
console.log(dlopen.RTLD_LAZY, dlopen.RTLD_NOW); // 1 2
console.log(dlopen.RTLD_GLOBAL, dlopen.RTLD_LOCAL); // 256 0
console.log(dlopen.RTLD_DEEPBIND); // 8
console.log(dlopen.RTLD_NOW | dlopen.RTLD_GLOBAL); // 258
console.log(typeof process.dlopen); // function
```

Example 2 — do not mix the legacy [constants](constants.md) [module](module.md):

```JavaScript
const os = require('os');
const constants = require('constants');

// The same names in the legacy module use the old libuv/macOS numbers.
console.log(constants.RTLD_LAZY, constants.RTLD_NOW); // 1 2
console.log(constants.RTLD_GLOBAL, constants.RTLD_LOCAL); // 8 4
console.log(os.constants.dlopen.RTLD_GLOBAL); // 256

// 8 is RTLD_DEEPBIND on glibc, so only os.constants.dlopen is safe for process.dlopen.
```

## Constants
        
### RTLD_LAZY
**Lazy binding, symbols are resolved when used**

```JavaScript
const os_constants_dlopen.RTLD_LAZY = 1;
```

--------------------------
### RTLD_NOW
**Immediate binding, all symbols are resolved at load time**

```JavaScript
const os_constants_dlopen.RTLD_NOW = 2;
```

--------------------------
### RTLD_GLOBAL
**Symbols are globally visible to subsequently loaded libraries**

```JavaScript
const os_constants_dlopen.RTLD_GLOBAL = 256;
```

--------------------------
### RTLD_LOCAL
**Symbols are visible only to the current library**

```JavaScript
const os_constants_dlopen.RTLD_LOCAL = 0;
```

--------------------------
### RTLD_DEEPBIND
**Prefer the library's own symbols**

```JavaScript
const os_constants_dlopen.RTLD_DEEPBIND = 8;
```

