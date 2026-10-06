# Module console
Console access: leveled logging, output devices, terminal control and input

`console` is available both as a [global](global.md) and as a [module](module.md); `require('console')`
returns the same [object](../../object/ifs/object.md) as the [global](global.md) `console`, so either form can be used.

Capability groups:

- **Leveled logging**: `log`, `info`, `debug`, `notice`, `warn`, `warning`,
  `error`, `crit`, `critical`, `alert` and `trace` write a message at a severity
  level;
- **Output devices**: `add`/`use` register up to 10 devices (console, syslog,
  event, nslog, file) and `reset` restores the built-in console output;
- **Formatted output**: `dir` renders a value with [util.inspect](util.md#inspect), `table` renders
  a text table and `print` writes raw text without a newline;
- **Terminal control**: `moveTo`, `hideCursor`, `showCursor` and `clear`;
- **Interaction**: `readLine` reads a line, `getpass` reads it without echo;
- **Timing**: `time`, `timeElapse` and `timeEnd` measure elapsed milliseconds;
- **Assertions**: `assert` is the assert [module](module.md) and throws on a falsy value.

Concepts:

- **Severity levels**: the [constants](constants.md) FATAL(0), ALERT(1), CRIT(2), ERROR(3),
  WARN(4), NOTICE(5), INFO(6) and DEBUG(7) are the record levels; PRINT(9) is
  the raw-output level and NOTSET(10) accepts everything. A record is written
  when its level is less than or equal to `loglevel`, which is NOTSET by
  default. Levels 0-4 (FATAL to WARN) are the error levels: the built-in
  console writes them to stderr, while every other level including PRINT goes
  to stdout.
- **Formatting**: when the first argument of a logging call is a string it is a
  printf-like template. Only `%s` (String()), `%d` (integer through atoi()), `%j`
  (inspection formatter) and `%%` are substituted; `%i`, `%f`, `%o`, `%O` and
  `%c` are not supported and are printed literally while their value is appended
  at the end, space separated with the remaining values. A specifier without an
  argument stays in the text. See the [util](util.md) [module](module.md) for the format, inspect and
  styleText concepts.
- **Output devices**: while no device is registered the built-in console device
  is used; add/use replace it with up to 10 registered devices, each with an
  optional whitelist of levels. Device management is [process](process.md)-wide and is not
  available in worker threads (Error 20009). The console device writes
  synchronously, while the file, syslog and event devices queue records and
  write them asynchronously.
- **Input**: readLine/getpass flush pending device records and then suspend the
  calling fiber until a line is read; readLineSync is an alias of the same
  function, readLineAsync takes a callback and `console.promises.readLine`
  returns a promise. See the readLine member for the terminal details.
- **Node.js differences**: `console.assert` is the [assert](assert.md) [module](module.md) and throws
  instead of logging "Assertion failed"; count, countReset, timeLog, group,
  groupEnd, groupCollapsed, profile and context do not exist; the default timer
  label is `time` instead of Node's `default`, and timeEnd on an unknown label
  measures from zero instead of warning. `print` and `loglevel` are fibjs
  extensions.

Import:

```JavaScript
const con = require('console'); // the module returns the global console itself
```

Example 1 — capture stdout and stderr of a Console [object](../../object/ifs/object.md) in memory:

```JavaScript
const io = require('io');
const out = new io.MemoryStream();
const err = new io.MemoryStream();
const c = new console.Console(out, err);

c.log('memory is %d bytes', 1024);
c.warn('low disk space');

out.rewind();
err.rewind();
console.log(out.readAll().toString().trim()); // memory is 1024 bytes
console.log(err.readAll().toString().trim()); // low disk space
```

Example 2 — filter records with the [global](global.md) loglevel:

```JavaScript
const io = require('io');
const out = new io.MemoryStream();
const c = new console.Console(out, out);

const previous = console.loglevel;
console.loglevel = console.ERROR;
c.log('filtered out'); // INFO(6) is above ERROR(3)
c.error('written'); // ERROR(3) passes
console.loglevel = previous;

out.rewind();
console.log(JSON.stringify(out.readAll().toString())); // "written\n"
```

Example 3 — time a loop and print a table:

```JavaScript
console.time('loop');
let total = 0;
for (let i = 0; i < 100000; i++) total += i;
console.timeEnd('loop'); // loop: <elapsed>ms
console.log(total); // 4999950000

console.table([{
        name: 'alpha',
        size: 12
    },
    {
        name: 'beta',
        size: 34
    }
], ['name']);
```

Notes:

- `width` and `height` query the terminal and throw when the output is
  redirected, for example Error 25 "inappropriate ioctl for device" on Linux.
- `moveTo`, `hideCursor`, `showCursor` and `clear` write terminal escape
  sequences at PRINT level on POSIX and use the Win32 console API on Windows;
  `clear` resets the terminal (ESC c) rather than only clearing the screen.
- The file device appends a `YYYYMMDDHHmmss` stamp to the file name unless the
  [path](path.md) contains a `%s` marker; see `add` for the device configuration.

## Objects
        
### assert
**The [assert](assert.md) [module](module.md), which throws on a falsy value**

```JavaScript
assert console.assert;
```

`console.assert` is the [assert](assert.md) [module](module.md) itself: `console.assert ===
require('[assert](assert.md)')` is true. Calling it with a falsy first argument throws an
AssertionError whose message is the second argument, while a truthy value
returns undefined. Node.js instead logs `Assertion failed: <message>` and
never throws, so code ported from Node.js must not rely on that behavior.
Use `assert.ok`, `assert.equal` and friends for richer checks.

Example:

```JavaScript
try {
    console.assert(1 === 2, 'one is not two');
} catch (e) {
    console.log('caught:', e.message); // caught: one is not two
}
```

--------------------------
### Console
**The [ConsoleObject](../../object/ifs/ConsoleObject.md) constructor, exposed as [console.Console](console.md#Console)**

```JavaScript
ConsoleObject console.Console;
```

`console.Console` is the [ConsoleObject](../../object/ifs/ConsoleObject.md) class; `new console.Console(...)`
creates a logger writing to explicit streams, while [ConsoleObject](../../object/ifs/ConsoleObject.md) is not
available as a [global](global.md) name. See [ConsoleObject](../../object/ifs/ConsoleObject.md) for the construction forms and
the stream behavior.

Example:

```JavaScript
const io = require('io');
const out = new io.MemoryStream();
const c = new console.Console(out, out);

c.log('captured');

out.rewind();
console.log(out.readAll().toString().trim()); // captured
```

## Static Methods
        
### add
**Registers an output device by name**

```JavaScript
static console.add(String type);
```

Parameters:
* type: String, device name: "console", "syslog", "event" or "nslog"

Registers one of the supported devices and stops using the built-in console
fallback; up to 10 devices can be registered and adding an 11th throws Error
20024 ("console: Too many items."). `use` is the historical name of the same
operation and `reset` removes every registered device.

The supported names are `"console"` on every platform, `"syslog"` on POSIX,
`"event"` on Windows and `"nslog"` on Darwin; any other name throws Error
20024 ("console: Unknown log type."). Device management is [process](process.md)-wide and
is not available in worker threads (Error 20009).

Example:

```JavaScript
console.add('console');
console.log('written through the registered console device');
console.reset();
```

--------------------------
**Registers output devices from a configuration [object](../../object/ifs/object.md) or an array of them**

```JavaScript
static console.add(Object | Array cfg);
```

Parameters:
* cfg: Object | Array, device configuration [object](../../object/ifs/object.md) or array of them

cfg is a device configuration [object](../../object/ifs/object.md), or an array whose elements are
registered in order. Each element is a device name string or an [object](../../object/ifs/object.md):

- `type` (String): device name, required, one of the names accepted by
  `add(String)`; a missing type throws Error 20024 ("console: Missing log
  type.");
- `levels` (Array): whitelist of severity levels recorded by this device.
  Only the listed numbers are written (PRINT is always accepted) and the
  default is all levels; an entry outside 0..NOTSET throws Error 20024
  ("console: too many logger.").
- [File](../../object/ifs/File.md) device only:
  - `path` (String): target file, required; a missing path throws Error
    20024 ("console: Missing [path](path.md)."). A `%s` marker in the name is replaced
    by a `YYYYMMDDHHmmss` stamp, otherwise the stamp is appended to the
    file name;
  - `split`: `"day"`, `"hour"`, `"minute"` or a size threshold such as
    `"30m"`, `"10k"` or `"1g"`; giving `count` without `split` throws Error
    20024 ("console: Missing split mode.");
  - `count` (Integer): rotated files to keep, 2 to 128, 128 by default; a
    value outside the range throws Error 20024 ("console: Count must
    between 2 to 128.").

The example records only ERROR records to the console device:

```JavaScript
console.add({
    type: 'console',
    levels: [console.ERROR]
});
console.error('recorded');
console.reset();
```

The file device writes timestamped lines asynchronously, so queued records
may be lost if the program calls `reset` immediately; see the console [module](module.md)
for the device model.

--------------------------
### use
**Registers an output device by name; historical alias of add**

```JavaScript
static console.use(String type);
```

Parameters:
* type: String, device name: "console", "syslog", "event" or "nslog"

Behaves exactly like `add(String type)`, including the supported device
names, the 10-device limit and the Error 20024 failures. `use` and `add` are
separate function objects with identical behavior, kept for compatibility
with older fibjs code.

Example:

```JavaScript
console.use('console');
console.log('written through the registered console device');
console.reset();
```

--------------------------
**Registers output devices from a configuration [object](../../object/ifs/object.md) or array; alias of add**

```JavaScript
static console.use(Object | Array cfg);
```

Parameters:
* cfg: Object | Array, device configuration [object](../../object/ifs/object.md) or array of them

Behaves exactly like `add(Object|Array cfg)`, including the file device
configuration (`path`, `split`, `count`), the per-device `levels` whitelist
and the Error 20024 validation failures; see `add` for the full option list.

Example:

```JavaScript
console.use({
    type: 'console',
    levels: [console.ERROR]
});
console.error('recorded');
console.reset();
```

--------------------------
### reset
**Removes every registered device and restores the built-in console output**

```JavaScript
static console.reset();
```

Stops the devices previously registered with add/use and deletes them;
records still queued on an asynchronous device (file, syslog, event) may be
dropped, so a caller that needs them must let the device write first. Device
management is [process](process.md)-wide and is not available in worker threads (Error
20009).

--------------------------
### log
**Writes a record at INFO level**

```JavaScript
static console.log(...args);
```

Parameters:
* args: ..., optional argument list

Records a general message and writes it to stdout, because INFO(6) is above
the WARN error threshold. A leading string argument is a printf-like
template: only `%s`, `%d`, `%j` and `%%` are substituted, other specifiers
stay literal and their values are appended at the end, space separated;
objects are rendered by the inspection formatter. The [global](global.md) `loglevel`
filters the record. Level INFO(6), same as `info`.

Example:

```JavaScript
console.log('%s has %d items', 'cart', 3); // cart has 3 items
console.log('value:', 42); // value: 42
```

--------------------------
### debug
**Writes a record at DEBUG level**

```JavaScript
static console.debug(...args);
```

Parameters:
* args: ..., optional argument list

The lowest standard level, useful when `loglevel` is raised to DEBUG to trace
execution. The record goes to stdout and accepts the same printf-like
template as `log`. Level DEBUG(7). Node.js treats [console.debug](console.md#debug) as an alias
of [console.log](console.md#log), while fibjs keeps a separate level that can be filtered.

--------------------------
### info
**Writes a record at INFO level, same as log**

```JavaScript
static console.info(...args);
```

Parameters:
* args: ..., optional argument list

Records a general message and writes it to stdout. Identical to `log`; the
name follows the Node.js console surface. Level INFO(6).

--------------------------
### notice
**Writes a record at NOTICE level**

```JavaScript
static console.notice(...args);
```

Parameters:
* args: ..., optional argument list

Records a normal but significant message; less severe than WARN and more
important than INFO. Written to stdout and filtered by `loglevel`. Level
NOTICE(5); this is a fibjs extension, Node.js has no [console.notice](console.md#notice).

--------------------------
### warn
**Writes a record at WARN level**

```JavaScript
static console.warn(...args);
```

Parameters:
* args: ..., optional argument list

Records a warning and writes it to stderr, because WARN(4) is one of the
error levels. Level WARN(4); Node.js [console.warn](console.md#warn) also writes to stderr.

--------------------------
### warning
**Writes a record at WARN level, same as warn**

```JavaScript
static console.warning(...args);
```

Parameters:
* args: ..., optional argument list

Records a warning and writes it to stderr. Identical to `warn`, kept as a
separate name for code that reads better with the long form; Node.js has no
[console.warning](console.md#warning).

--------------------------
### error
**Writes a record at ERROR level**

```JavaScript
static console.error(...args);
```

Parameters:
* args: ..., optional argument list

Records an error and writes it to stderr. fibjs reports its own runtime
errors through the same level, so system error messages may appear among the
application ones. Level ERROR(3).

--------------------------
### crit
**Writes a record at CRIT level, same as critical**

```JavaScript
static console.crit(...args);
```

Parameters:
* args: ..., optional argument list

Records a critical condition and writes it to stderr. Level CRIT(2), below
ERROR in number and therefore more severe.

--------------------------
### critical
**Writes a record at CRIT level**

```JavaScript
static console.critical(...args);
```

Parameters:
* args: ..., optional argument list

Records a critical condition and writes it to stderr; identical to `crit`.
Level CRIT(2); Node.js has no [console.critical](console.md#critical).

--------------------------
### alert
**Writes a record at ALERT level**

```JavaScript
static console.alert(...args);
```

Parameters:
* args: ..., optional argument list

Records the most severe condition at ALERT(1) and writes it to stderr; it is
the highest severity level, meant for conditions that need immediate action.
Node.js has no [console.alert](console.md#alert).

--------------------------
### trace
**Writes a call stack at WARN level**

```JavaScript
static console.trace(...args);
```

Parameters:
* args: ..., optional argument list

Formats the optional arguments like `log`, prefixes the text with `Trace: `
and appends the current call stack, then writes the whole record to stderr at
WARN(4) level through the logging system.

Example:

```JavaScript
function inner() {
    console.trace('at inner');
}
inner(); // Trace: at inner, followed by the stack frames
```

--------------------------
### dir
**Renders a value with [util.inspect](util.md#inspect) and writes it at INFO level**

```JavaScript
static console.dir(Value obj,
    Object options = {});
```

Parameters:
* obj: Value, specifies the [object](../../object/ifs/object.md) to [process](process.md)
* options: Object, specifies the format control options

The value is rendered by [util.inspect](util.md#inspect) and written as a single record to
stdout; options are the inspect options: `colors` (default true, ANSI is
emitted when the terminal supports color), `depth` (default 2, null means
unlimited), `table` (render an array of records as a table), `fields`,
`encode_string`, `maxArrayLength` (default 100) and `maxStringLength`
(default 10000). Unknown options are ignored. Node.js [console.dir](console.md#dir) uses its
own renderer, while fibjs delegates to [util.inspect](util.md#inspect), so keys and strings are
quoted and the layout follows it.

Example:

```JavaScript
console.dir([{
    a: 1
}, {
    a: 2
}], {
    colors: false,
    table: true
});
```

--------------------------
### table
**Renders records as a text table at INFO level**

```JavaScript
static console.table(Value obj);
```

Parameters:
* obj: Value, the [object](../../object/ifs/object.md) to display

An [object](../../object/ifs/object.md) is rendered as an `(index)`/`Values` table of its properties, an
array of primitives as an `(index)`/`Values` table and an array of records
with one column per record key; a key missing from a record leaves an empty
cell. The table is written to stdout and filtered by `loglevel`; a
[ConsoleObject](../../object/ifs/ConsoleObject.md) instance writes the same table to its own stdout [object](../../object/ifs/object.md).

Example:

```JavaScript
console.table([{
    name: 'alpha',
    size: 12
}]);
```

--------------------------
**Renders records as a text table with selected columns**

```JavaScript
static console.table(Value obj,
    Array fields);
```

Parameters:
* obj: Value, the [object](../../object/ifs/object.md) to display
* fields: Array, the fields to display

Same as `table(Value obj)`, but only the columns listed in `fields` are
shown, in that order; the `(index)` column is always kept and a missing
field leaves its cell empty.

--------------------------
### print
**Writes raw text without a newline and without logging metadata**

```JavaScript
static console.print(...args);
```

Parameters:
* args: ..., optional argument list

Values are formatted like `log`, but the result is written at PRINT(9): a
newline is never appended and the file, syslog and event devices do not
record it. A `loglevel` below 9 suppresses the output. Consecutive calls join
on the same line; finish the line with `log()` or a literal newline.

Example:

```JavaScript
console.print('building');
console.print('...');
console.log(); // end the line
```

--------------------------
### moveTo
**Moves the terminal cursor to a 1-based position**

```JavaScript
static console.moveTo(Integer row,
    Integer column);
```

Parameters:
* row: Integer, the new cursor row, starting at 1
* column: Integer, the new cursor column, starting at 1

Writes the ANSI sequence ESC[row;colH on POSIX and uses the Win32 console
API on Windows. `row` and `column` must be at least 1, otherwise Error 20004
("Invalid argument.") is thrown. The sequence is written at PRINT level, so
it is suppressed together with print when `loglevel` is below 9.

--------------------------
### hideCursor
**Hides the terminal cursor**

```JavaScript
static console.hideCursor();
```

Writes the ANSI sequence ESC[?25l on POSIX and hides the console cursor on
Windows; the sequence is written at PRINT level and is suppressed when
`loglevel` is below 9. Use it before updating a status line in place and
restore it with showCursor.

--------------------------
### showCursor
**Shows the terminal cursor again**

```JavaScript
static console.showCursor();
```

Writes the ANSI sequence ESC[?25h on POSIX and restores the console cursor
on Windows; the counterpart of hideCursor, written at PRINT level.

--------------------------
### clear
**Clears the terminal**

```JavaScript
static console.clear();
```

On POSIX this writes the ESC c reset sequence, which clears the screen and
resets the terminal state; on Windows it fills the console screen buffer
with spaces. It is written at PRINT level, so a `loglevel` below 9
suppresses it as well.

--------------------------
### readLine
**Reads a line from the standard input, printing an optional prompt**

```JavaScript
static String console.readLine(String msg = "") async;
```

Parameters:
* msg: String, prompt message

Returns:
* String, returns the line entered by the user, without the newline

On a terminal the prompt is printed and the line is read with line editing
and history enabled; when the standard input is redirected, the prompt is
written to the standard input stream and at most 1023 bytes are read, with
the trailing newline stripped. Pending device records are flushed before
reading. The call is asynchronous: without a callback the current fiber is
suspended until the line arrives; `readLineSync` is an alias of the same
function, `readLineAsync` takes a callback and `console.promises.readLine`
returns a promise. A read failure throws the underlying system error.

--------------------------
### getpass
**Reads a password from the standard input without echoing it**

```JavaScript
static String console.getpass(String msg = "") async;
```

Parameters:
* msg: String, prompt message

Returns:
* String, returns the password entered by the user

Like readLine, but on a terminal the typed characters are not echoed and no
history entry is added; when the input is redirected the two functions
behave the same. Pending device records are flushed before reading, and the
returned line has no trailing newline.

--------------------------
### time
**Starts or restarts a timer under a label**

```JavaScript
static console.time(String label = "time");
```

Parameters:
* label: String, the timer label, defaults to "time"

Stores the current time under `label` in a [process](process.md)-wide map shared by all
isolates; starting an existing label silently restarts it and no warning is
printed, unlike Node.js which warns about duplicates. The default label is
`"time"` while Node.js uses `"default"`. `timeElapse` samples the timer and
`timeEnd` stops it; both print `label: <elapsed>ms` at INFO level.

Example:

```JavaScript
console.time('work');
let sum = 0;
for (let i = 0; i < 100000; i++) sum += i;
console.timeEnd('work'); // work: <elapsed>ms
```

--------------------------
### timeElapse
**Prints the value of a timer without stopping it**

```JavaScript
static console.timeElapse(String label = "time");
```

Parameters:
* label: String, the timer label, defaults to "time"

Outputs `label: <elapsed>ms` at INFO level on stdout, with up to 10
significant digits; the timer keeps running, so it can be sampled repeatedly
before timeEnd. A label that was never started is treated as zero, so the
printed value is huge instead of an error or warning (Node.js has no such
member).

Example:

```JavaScript
console.time('phase');
console.timeElapse('phase'); // phase: <elapsed>ms
console.timeEnd('phase'); // phase: <elapsed>ms
```

--------------------------
### timeEnd
**Stops a timer and prints its final value**

```JavaScript
static console.timeEnd(String label = "time");
```

Parameters:
* label: String, the timer label, defaults to "time"

Outputs `label: <elapsed>ms` at INFO level on stdout and removes the label,
so `time` can start it again afterwards. Stopping a label that was never
started measures from zero and prints a huge value; no warning is emitted,
while Node.js warns about the missing label.

Example:

```JavaScript
console.time('load');
let data = 0;
for (let i = 0; i < 1000; i++) data += i;
console.timeEnd('load'); // load: <elapsed>ms
```

## Static Properties
        
### loglevel
**Integer, Global severity threshold shared by all devices and Console objects**

```JavaScript
static Integer console.loglevel;
```

A record is written only when its level is less than or equal to `loglevel`;
the initial value is NOTSET(10), which accepts everything. The filter is
applied before the record reaches any device, in addition to the per-device
`levels` whitelist configured through add/use, so a device cannot restore a
record that was filtered here. Assigning a non-number throws Error 20005.
See the console [module](module.md) for the severity model.

--------------------------
### width
**Integer, Width of the console terminal in character cells**

```JavaScript
static readonly Integer console.width;
```

Queried from the terminal attached to the [process](process.md) (ioctl TIOCGWINSZ on
POSIX, the console screen buffer on Windows); accessing it throws when the
output is not a terminal, for example Error 25 "inappropriate ioctl for
device" when the [process](process.md) is piped. Useful to wrap or truncate output.

--------------------------
### height
**Integer, Height of the console terminal in character rows**

```JavaScript
static readonly Integer console.height;
```

Queried together with `width` from the terminal attached to the [process](process.md) and
throwing under the same conditions; use both to lay out a full-screen
console interface.

## Constants
        
### FATAL
**loglevel constant, fatal error, the most severe level**

```JavaScript
const console.FATAL = 0;
```

--------------------------
### ALERT
**loglevel constant, alert level**

```JavaScript
const console.ALERT = 1;
```

--------------------------
### CRIT
**loglevel constant, critical error level**

```JavaScript
const console.CRIT = 2;
```

--------------------------
### ERROR
**loglevel constant, error level**

```JavaScript
const console.ERROR = 3;
```

--------------------------
### WARN
**loglevel constant, warning level**

```JavaScript
const console.WARN = 4;
```

--------------------------
### NOTICE
**loglevel constant, notice level**

```JavaScript
const console.NOTICE = 5;
```

--------------------------
### INFO
**loglevel constant, info level**

```JavaScript
const console.INFO = 6;
```

--------------------------
### DEBUG
**loglevel constant, debug level**

```JavaScript
const console.DEBUG = 7;
```

--------------------------
### PRINT
**loglevel for raw output; no newline, not recorded by the file/syslog/event devices**

```JavaScript
const console.PRINT = 9;
```

--------------------------
### NOTSET
**loglevel constant, output everything, the default level**

```JavaScript
const console.NOTSET = 10;
```

