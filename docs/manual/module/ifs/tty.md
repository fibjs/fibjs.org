# Module tty
Detects terminals and wraps the [process](process.md) standard streams in TTY stream classes

Main capabilities:

- **Detection**: `isatty` reports whether a descriptor or a [FileHandle](../../object/ifs/FileHandle.md) is attached to a terminal;
- **Input**: `ReadStream` (the [TTYInputStream](../../object/ifs/TTYInputStream.md) class) reads terminal input and switches the terminal
  between cooked and raw mode;
- **Output**: `WriteStream` (the [TTYOutputStream](../../object/ifs/TTYOutputStream.md) class) reports the window size and writes the ANSI
  escape sequences that clear the screen or move the cursor.

Concepts:

- **TTY versus pipe**: a terminal is a character device that performs line editing, echoes what is
  typed and interprets escape sequences; a pipe or a redirected file has none of these properties.
  When stdin, stdout or stderr is attached to a terminal, the runtime exposes it as a TTY stream:
  `isTTY` is true and the terminal members exist. When it is a pipe or a file the property is
  undefined and the members are absent, so feature-detect with `[process.stdout](process.md#stdout).isTTY === true`.
- **Raw mode**: a terminal input stream starts in cooked (default) mode, where the terminal driver
  buffers input until Enter, echoes it and turns Ctrl+C into SIGINT; raw mode disables all of that
  and delivers bytes as they are typed. See [TTYInputStream.setRawMode](../../object/ifs/TTYInputStream.md#setRawMode).
- **Window size**: the terminal has a number of columns and rows, reported by `columns`, `rows` and
  `getWindowSize`; the values change while the program runs and are announced by the `'resize'`
  event.
- **Escape sequences**: the clearing and cursor members write ANSI CSI sequences to the terminal
  (for example `\x1b[2K` clears a line); the terminal interprets them instead of displaying them,
  and fibjs emits the same sequences as Node.js.
- **Color depth**: Node.js exposes `hasColors`/`getColorDepth` on its write stream, fibjs does not;
  use `[util.colors](util.md#colors).hasColors` to [test](test.md) whether the terminal supports color (see the [colors](colors.md) [module](module.md)).

Import:

```JavaScript
const tty = require('tty');
```

Example 1 — isatty accepts descriptors and FileHandles:

```JavaScript
const tty = require('tty');
const fs = require('fs');
const os = require('os');
const path = require('path');

// 0, 1 and 2 are true only when the matching standard stream is a terminal.
console.log(tty.isatty(0), tty.isatty(1)); // false false when piped

const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'fibjs-tty-'));
const fh = fs.open(path.join(dir, 'plain.txt'), 'w');
console.log(tty.isatty(fh)); // false, a regular file is never a terminal

fh.close();
fs.rmSync(dir, {
    recursive: true,
    force: true
});
```

Example 2 — a child attached to a pseudo terminal sees TTY streams:

```JavaScript
const child_process = require('child_process');
const io = require('io');

// stdio: 'pty' attaches the child to a pseudo terminal, so its standard
// streams are TTYInputStream and TTYOutputStream instances.
const code = 'const tty = require("tty");' +
    'process.stdout.write("isatty: " + tty.isatty(0) + "/" + tty.isatty(1) + "\\n");';
const bs = child_process.spawn(process.execPath, ['-e', code], {
    stdio: 'pty'
});

console.log(new io.BufferedStream(bs.stdout).readLine()); // isatty: true/true
bs.join();
```

Example 3 — the same code behaves differently on a pipe:

```JavaScript
const child_process = require('child_process');
const io = require('io');

const code = 'process.stdout.write("stdout: " + process.stdout.constructor.name + "\\n");';
const piped = child_process.spawn(process.execPath, ['-e', code]);
const pty = child_process.spawn(process.execPath, ['-e', code], {
    stdio: 'pty'
});

console.log('piped: ' + new io.BufferedStream(piped.stdout).readLine());
console.log('pty:   ' + new io.BufferedStream(pty.stdout).readLine());
// piped: stdout: Stream
// pty:   stdout: TTYOutputStream

piped.join();
pty.join();
```

Notes:

- `[process.stdout](process.md#stdout).isTTY` is true on a terminal and undefined on a pipe or a redirected file,
  exactly like Node.js; [process.stdin](process.md#stdin) and [process.stderr](process.md#stderr) behave the same way.
- Constructing [tty.ReadStream](tty.md#ReadStream) or [tty.WriteStream](tty.md#WriteStream) requires a descriptor that is already a terminal:
  any other descriptor throws `TypeError: fd N is not a TTY.` ([20004]), where Node.js fails only
  when the terminal cannot be initialized at all.
- [tty.isatty](tty.md#isatty) is stricter than the Node.js function: a negative descriptor throws [20009], a missing
  argument throws [20002], an out-of-range value throws [20006] and a value that cannot be coerced
  to an integer throws [20005], where Node.js returns false. fibjs also accepts an open [FileHandle](../../object/ifs/FileHandle.md)
  (extension).
- The two stream classes derive from the [Stream](../../object/ifs/Stream.md) class and share its read, write and close
  interface; see the [io](io.md) [module](module.md) and the [Stream](../../object/ifs/Stream.md) documentation for the stream model.

## Objects
        
### ReadStream
**The [TTYInputStream](../../object/ifs/TTYInputStream.md) class, see [TTYInputStream](../../object/ifs/TTYInputStream.md)**

```JavaScript
TTYInputStream tty.ReadStream;
```

`new [tty.ReadStream](tty.md#ReadStream)(fd[, opts])` wraps a terminal descriptor; the class is also the
constructor of [process.stdin](process.md#stdin) when stdin is a terminal. Node.js exposes the same class
under the same name.

--------------------------
### WriteStream
**The [TTYOutputStream](../../object/ifs/TTYOutputStream.md) class, see [TTYOutputStream](../../object/ifs/TTYOutputStream.md)**

```JavaScript
TTYOutputStream tty.WriteStream;
```

`new [tty.WriteStream](tty.md#WriteStream)(fd[, opts])` wraps a terminal descriptor; the class is also the
constructor of [process.stdout](process.md#stdout) and [process.stderr](process.md#stderr) when they are terminals. Node.js
exposes the same class under the same name.

## Static Methods
        
### isatty
**Queries whether a descriptor is attached to a terminal**

```JavaScript
static Boolean tty.isatty(Integer | FileHandle fd);
```

Parameters:
* fd: Integer | [FileHandle](../../object/ifs/FileHandle.md), the file descriptor; an integer descriptor or a [FileHandle](../../object/ifs/FileHandle.md) [object](../../object/ifs/object.md)

Returns:
* Boolean, returns true if it is associated with a terminal window, otherwise returns false

The fd may be an integer descriptor or an open [FileHandle](../../object/ifs/FileHandle.md) (fibjs extension); a regular file, a
pipe, a socket or a closed [FileHandle](../../object/ifs/FileHandle.md) is never a terminal. In a child [process](process.md) started with
`stdio: 'pty'` the standard descriptors are terminals, and when a standard stream is piped or
redirected it is not, which makes this function the check behind [process.stdout](process.md#stdout).isTTY.

Unlike Node.js, which returns false whenever fd is not a non-negative integer, fibjs throws for
some invalid inputs: a negative descriptor throws [20009], a missing argument throws [20002]
and a value that overflows Integer throws [20006]. Other values are coerced to an integer
descriptor first, so 1.5, '1' and even null mean descriptors 1, 1 and 0; a value that cannot
be coerced at all throws [20005].

Example — [test](test.md) a [FileHandle](../../object/ifs/FileHandle.md) instead of a raw descriptor:

```JavaScript
const tty = require('tty');
const fs = require('fs');
const os = require('os');
const path = require('path');

const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'fibjs-tty-'));
const fh = fs.open(path.join(dir, 'plain.txt'), 'w');
console.log(tty.isatty(fh)); // false

fh.close();
fs.rmSync(dir, {
    recursive: true,
    force: true
});
```

