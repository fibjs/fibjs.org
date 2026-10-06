# Module os_constants_priority
The priority table of [os.constants](os.md#constants): the [process](process.md) scheduling levels of libuv

Reached through `require('[os](os.md)').constants.priority`. The six levels are the libuv
uv_priority values (19/10/0/-7/-14/-20) with the same meaning as in Node.js: on POSIX they
are nice values, where a lower number means a higher priority, and on Windows they map to
the [process](process.md) priority classes. They are the values to pass to a scheduling API; fibjs itself
has no os.getPriority/os.setPriority (a Node.js API), so today the table is informational.

Concepts:

- **Ordering**: PRIORITY_HIGHEST (-20) is the highest priority and PRIORITY_LOW (19) the
  lowest; PRIORITY_NORMAL (0) is the default. The values are boundaries of the mapping, not
  a continuous range on Windows.
- **Not arbitrary numbers**: use the [constants](constants.md) instead of raw nice values so the same code
  maps to the intended class on Windows and to the intended nice level on POSIX.

Import:

```JavaScript
const priority = require('os').constants.priority;
```

Example 1 — read the six levels:

```JavaScript
const priority = require('os').constants.priority;

// From the lowest to the highest priority.
console.log(priority.PRIORITY_LOW, priority.PRIORITY_BELOW_NORMAL,
    priority.PRIORITY_NORMAL, priority.PRIORITY_ABOVE_NORMAL,
    priority.PRIORITY_HIGH, priority.PRIORITY_HIGHEST); // 19 10 0 -7 -14 -20
```

Example 2 — look a level up by value:

```JavaScript
const priority = require('os').constants.priority;

// On POSIX the values are nice levels: -20 is the highest priority, 19 the lowest.
console.log(priority.PRIORITY_NORMAL === 0, priority.PRIORITY_LOW === 19); // true true

const byValue = {};
Object.keys(priority).forEach((name) => {
    byValue[priority[name]] = name;
});
console.log(byValue[19], byValue[-20]); // PRIORITY_LOW PRIORITY_HIGHEST
```

## Constants
        
### PRIORITY_LOW
**Low priority**

```JavaScript
const os_constants_priority.PRIORITY_LOW = 19;
```

--------------------------
### PRIORITY_BELOW_NORMAL
**Below-normal priority**

```JavaScript
const os_constants_priority.PRIORITY_BELOW_NORMAL = 10;
```

--------------------------
### PRIORITY_NORMAL
**Normal priority**

```JavaScript
const os_constants_priority.PRIORITY_NORMAL = 0;
```

--------------------------
### PRIORITY_ABOVE_NORMAL
**Above-normal priority**

```JavaScript
const os_constants_priority.PRIORITY_ABOVE_NORMAL = -7;
```

--------------------------
### PRIORITY_HIGH
**High priority**

```JavaScript
const os_constants_priority.PRIORITY_HIGH = -14;
```

--------------------------
### PRIORITY_HIGHEST
**Highest priority**

```JavaScript
const os_constants_priority.PRIORITY_HIGHEST = -20;
```

