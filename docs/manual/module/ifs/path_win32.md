# Module path_win32
The win32 rule set of the [path](path.md) [module](module.md): it processes Windows paths on every platform

This definition is the manual page of the rule set reachable at runtime as
`require('[path](path.md)').win32` or `require('[path](path.md)/win32')`; it is not itself a require-able [module](module.md)
name. Except for fullpath, all functions are pure string operations and never touch the file
system, so Windows paths can be analysed from Linux and other systems.

Main capabilities:

- **Building paths**: `join`, `resolve`, `normalize`, `fullpath` (Windows only);
- **Breaking paths down**: `parse`, `format`, `basename`, `dirname`, `extname`;
- **Comparing paths**: `relative`, `isAbsolute`, `matchesGlob`;
- **Conversion**: `toNamespacedPath`;
- **Constants**: `sep` ('\\') and `delimiter` (';').

Concepts:

- **Windows rule set**: both '/' and '\' separate segments, so 'C:/temp' and 'C:\temp' are
  equivalent. The recognised roots are drive-absolute ('C:\'), drive-relative ('C:'), UNC
  ('\\server\share') and device namespace ('\\?\C:\') forms. Only paths rooted at a real
  root are absolute: isAbsolute('C:') is false while isAbsolute('C:\') is true.
- **Windows specifics**: parse, format and dirname keep drive letters and UNC shares;
  relative compares paths case-insensitively and returns the target unchanged across drives;
  matchesGlob accepts both separators and compares drive letters case-insensitively;
  toNamespacedPath converts a [path](path.md) to the '\\?\' / '\\?\UNC\' form used by the Windows
  long-[path](path.md) APIs.
- **join vs resolve vs normalize**: join merges segments and normalizes, keeping a later
  absolute segment as a plain segment; resolve restarts at the rightmost absolute segment and
  anchors relative segments at the working directory, preserving its drive; normalize only
  rewrites '.' and '..' segments, repeated separators and trailing separators.
- **Extensions and dotfiles**: extname('.bashrc') is '' because a leading dot starts a
  dotfile; extname('.env.local') is '.local' and extname('index.') is '.'. basename([path](path.md), ext)
  strips ext as a plain suffix and ignores trailing separators.
- **Fullpath is Windows-only**: fullpath (fibjs extension) anchors a relative [path](path.md) to the
  working directory through the native Windows API, and throws on other platforms; use
  resolve or normalize in cross-platform code.

Import:

```JavaScript
// path_win32 is the manual-page name; the runtime entry points are:
const win32 = require('path').win32;
const win32Again = require('path/win32');
```

Example 1 — drive letters, UNC shares and trailing separators:

```JavaScript
const win32 = require('path').win32;

console.log(win32.normalize('C:/temp//foo/../bar')); // C:\temp\bar
console.log(win32.normalize('\\\\server\\share\\dir\\..')); // \\server\share
console.log(win32.normalize('C:')); // C:.
```

Example 2 — joining, resolving and checking absoluteness:

```JavaScript
const win32 = require('path').win32;

console.log(win32.join('C:\\temp', 'sub', '..', 'file.txt')); // C:\temp\file.txt
console.log(win32.resolve('C:\\temp', 'D:/data')); // D:\data
console.log(win32.isAbsolute('C:\\temp')); // true
console.log(win32.isAbsolute('C:temp')); // false (drive-relative)
```

Example 3 — parse and format drive and UNC paths:

```JavaScript
const win32 = require('path').win32;

const parts = win32.parse('\\\\server\\share\\logs\\app.log');
console.log(parts.root, parts.base); // \\server\share\ app.log

console.log(win32.format({
    root: 'C:\\',
    name: 'boot',
    ext: '.ini'
}));
// C:\boot.ini
console.log(win32.extname('C:\\dir\\.gitignore')); // ''
```

Example 4 — namespace paths (pure string operation, runs on any platform):

```JavaScript
const win32 = require('path').win32;

console.log(win32.toNamespacedPath('C:\\temp\\file.txt'));
// \\?\C:\temp\file.txt
console.log(win32.toNamespacedPath('\\\\server\\share\\f'));
// \\?\UNC\server\share\f
console.log(win32.toNamespacedPath('//server/share/f'));
// \\?\UNC\server\share\f
```

Notes:

- Node.js exposes the same rule set as require('[path](path.md)').win32; fibjs also provides the
  require('[path](path.md)/win32') subpath form and documents the rule set as the path_win32 definition.
- fullpath is implemented only on Windows builds; on other platforms it throws
  'not supported on none Win32 platform !'.

## Static Methods
        
### normalize
**Normalizes a win32 [path](path.md), resolving '.' and '..' and collapsing repeated separators**

```JavaScript
static String path_win32.normalize(String path);
```

Parameters:
* path: String, the [path](path.md) to normalize

Returns:
* String, the normalized [path](path.md)

Both '/' and '\' separate segments, so normalize('C:/temp/foo') is 'C:\temp\foo'. Drive
letters, drive-relative forms and UNC or device roots are preserved; 'C:' alone normalizes
to 'C:.'. A trailing separator is preserved unless a '..' segment removes it. A pure
string transformation with no file system access. See the [path](path.md) [module](module.md) for the shared
rules.

Example — normalize Windows paths:

```JavaScript
const win32 = require('path').win32;

console.log(win32.normalize('C:/temp//foo/../bar')); // C:\temp\bar
console.log(win32.normalize('\\\\server\\share\\dir\\..')); // \\server\share
console.log(win32.normalize('C:')); // C:.
```

--------------------------
### basename
**Returns the last portion of a win32 [path](path.md), removing a matching extension**

```JavaScript
static String path_win32.basename(String path,
    String ext = "");
```

Parameters:
* path: String, the [path](path.md) to query
* ext: String, the extension to remove when the file name matches

Returns:
* String, the file name

Both '/' and '\' are accepted as separators, so basename('C:\\dir\\file.txt') is
'file.txt'. Trailing separators are ignored, basename('C:') is '' and basename('C:.') is
'.'. The optional ext is stripped as a plain suffix, not necessarily starting with a dot.
A colon that is not followed by a separator is part of the name ('file:stream').

--------------------------
### extname
**Returns the extension from the last '.' of the last win32 segment**

```JavaScript
static String path_win32.extname(String path);
```

Parameters:
* path: String, the [path](path.md) to query

Returns:
* String, the extension

A leading dot starts a dotfile, not an extension: extname('.gitignore') is '',
extname('.env.local') is '.local' and extname('index.') is '.'. The result is '' for '..'
and for paths ending with a separator. Both '/' and '\' separate segments, so
extname('C:\\dir.name\\file') is '' because the dot is in a parent segment.

--------------------------
### format
**Formats a [path](path.md) [object](../../object/ifs/object.md) into a win32 [path](path.md) string, the inverse of parse**

```JavaScript
static String path_win32.format(Object pathObject);
```

Parameters:
* pathObject: Object, the [path](path.md) [object](../../object/ifs/object.md)

Returns:
* String, the formatted [path](path.md)

All fields are optional. Base wins over name + ext, and dir wins over root unless dir is
empty; when dir equals root no separator is inserted. '\' is always used as the separator,
even on other platforms, and a dir-only [object](../../object/ifs/object.md) produces a trailing '\'. The full field
list is documented in the [path](path.md) [module](module.md).

pathObject supports the following properties:

```JavaScript
// fragment: options
({
    "root": "C:\\", // the root of the path, e.g. 'C:\\' or a UNC share
    "dir": "C:\\tmp", // the directory; wins over root when both are set
    "base": "c.ext", // the full last segment; wins over name + ext
    "ext": ".ext", // the extension, including the leading dot
    "name": "c" // the name without the extension
})
```

Example — build win32 paths from objects:

```JavaScript
const win32 = require('path').win32;

console.log(win32.format({
    dir: 'C:\\temp',
    name: 'a',
    ext: '.txt'
}));
// C:\temp\a.txt
console.log(win32.format({
    root: 'C:\\',
    name: 'boot',
    ext: '.ini'
}));
// C:\boot.ini
console.log(win32.format({
    dir: 'some\\dir'
})); // some\dir\
```

--------------------------
### parse
**Parses a win32 [path](path.md) into an [object](../../object/ifs/object.md) with root, dir, base, ext and name fields**

```JavaScript
static (String root, String dir, String base, String ext, String name) path_win32.parse(String path);
```

Parameters:
* path: String, the [path](path.md) to parse

Returns:
* (String root, String dir, String base, String ext, String name), the parsed [path](path.md) [object](../../object/ifs/object.md)

The [object](../../object/ifs/object.md) always contains all five fields as strings and can be passed to format. Root
forms: 'C:\' for drive-absolute paths, 'C:' for drive-relative paths,
'\\server\share\' for UNC paths and '\\?\C:\' for device paths; the separator style of
the input is kept (parse('C:/temp') has root 'C:/'). A trailing separator is ignored for
base and a leading dot starts a dotfile. See the [path](path.md) [module](module.md) for the shared field
semantics.

Example — inspect parsed win32 paths:

```JavaScript
const win32 = require('path').win32;

const p = win32.parse('C:\\Users\\dev\\index.html');
console.log(p.root, p.dir, p.base); // C:\ C:\Users\dev index.html

const unc = win32.parse('\\\\server\\share\\app.log');
console.log(unc.root, unc.base); // \\server\share\ app.log
```

--------------------------
### dirname
**Returns the directory name of a win32 [path](path.md), dropping the last segment**

```JavaScript
static String path_win32.dirname(String path);
```

Parameters:
* path: String, the [path](path.md) to query

Returns:
* String, the directory name

Both separators are recognised and trailing separators are ignored. Drive-absolute paths
keep their root (dirname('C:\\foo') is 'C:\') and drive-relative paths keep their drive
(dirname('c:foo') is 'c:'). UNC roots are preserved: dirname('\\\\unc\\share') is
'\\unc\share' and dirname('\\\\unc\\share\\foo') is '\\unc\share\'.

--------------------------
### fullpath
**Converts a win32 [path](path.md) into an absolute [path](path.md) using the native Windows API**

```JavaScript
static String path_win32.fullpath(String path);
```

Parameters:
* path: String, the [path](path.md) to convert

Returns:
* String, the full [path](path.md)

A fibjs extension, not part of Node.js, and implemented only on Windows: on other
platforms it throws 'not supported on none Win32 platform !'. On Windows the [path](path.md) is
passed to GetFullPathNameW, which anchors a relative [path](path.md) to the current directory of the
current drive and expands the result, keeping the win32 separators.

Example — resolve a Windows [path](path.md) (Windows only):

```JavaScript
// requires: windows
const win32 = require('path').win32;

console.log(win32.fullpath('..\\file.txt'));
console.log(win32.fullpath('C:/temp/./file.txt')); // C:\temp\file.txt
```

--------------------------
### matchesGlob
**Checks whether a [path](path.md) matches a glob pattern using the win32 rule set**

```JavaScript
static Boolean path_win32.matchesGlob(String path,
    String pattern);
```

Parameters:
* path: String, the [path](path.md) to check
* pattern: String, the glob pattern

Returns:
* Boolean, true when the [path](path.md) matches the pattern

Supports '*', '**', '?', character classes, brace expansion and the extglob forms;
patterns are anchored as a whole and dotfiles need an explicit dot. Under the win32 rule
set both '/' and '\' are accepted in paths and patterns, drive letters are compared
case-insensitively and paths on different drives never match: matchesGlob('c:\\a.js',
'C:\\*.js') is true while matchesGlob('D:\\a.js', 'C:\\*.js') is false. The [path](path.md) [module](module.md)
documents the full syntax.

--------------------------
### isAbsolute
**Checks whether a win32 [path](path.md) is absolute**

```JavaScript
static Boolean path_win32.isAbsolute(String path);
```

Parameters:
* path: String, the [path](path.md) to check

Returns:
* Boolean, true when the [path](path.md) is absolute

Returns true when the [path](path.md) starts with '/' or '\', when it is a UNC or device [path](path.md)
('\\server\share', '\\?\C:\'), or when it is a drive [path](path.md) with a separator after the
colon ('C:\' or 'C:/'). A drive-relative [path](path.md) such as 'C:temp' and the empty string are
false; the check is purely textual.

Example — distinguish drive-absolute from drive-relative:

```JavaScript
const win32 = require('path').win32;

console.log(win32.isAbsolute('C:\\temp')); // true
console.log(win32.isAbsolute('C:/temp')); // true
console.log(win32.isAbsolute('C:temp')); // false
console.log(win32.isAbsolute('\\\\server\\share')); // true
```

--------------------------
### join
**Joins segments into a normalized win32 [path](path.md) using '\' as the separator**

```JavaScript
static String path_win32.join(...ps);
```

Parameters:
* ps: ..., one or more paths

Returns:
* String, the joined [path](path.md)

Empty segments are ignored and '.' is returned when the result would be empty. A later
absolute segment is appended as an ordinary segment: join('a', '/b') is 'a\b'. A leading
'//' or '\\' pair can form a UNC share when a server and share are present, and drive
letters are preserved: join('c:', 'file') is 'c:\file'. See the [path](path.md) [module](module.md) for the
join/resolve/fullpath comparison.

Example — join win32 segments:

```JavaScript
const win32 = require('path').win32;

console.log(win32.join('C:\\temp', 'sub', '..', 'file.txt')); // C:\temp\file.txt
console.log(win32.join('//server', 'share', 'dir')); // \\server\share\dir
console.log(win32.join('c:', 'file')); // c:\file
```

--------------------------
### resolve
**Resolves segments into an absolute win32 [path](path.md), anchored at the working directory**

```JavaScript
static String path_win32.resolve(...ps);
```

Parameters:
* ps: ..., one or more paths

Returns:
* String, the resolved [path](path.md)

Segments are processed from right to left until an absolute one is found, so the rightmost
absolute segment wins; relative segments are anchored at the working directory and keep
its drive. The result is normalized and has no trailing separator. With no arguments, or
with only empty segments, the working directory is returned. Paths are resolved with the
win32 rule set even when the host is not Windows.

Example — resolve win32 segments:

```JavaScript
const win32 = require('path').win32;

console.log(win32.resolve('C:\\temp', 'sub')); // C:\temp\sub
console.log(win32.resolve('C:\\temp', 'D:/data')); // D:\data
```

--------------------------
### relative
**Returns the relative win32 [path](path.md) from _from to to**

```JavaScript
static String path_win32.relative(String _from,
    String to);
```

Parameters:
* _from: String, the source [path](path.md)
* to: String, the target [path](path.md)

Returns:
* String, the relative [path](path.md)

Both arguments are resolved against the working directory first. '' is returned for the
same location; otherwise the result uses '..' segments as needed and has no trailing
separator. Paths are compared case-insensitively, and a target on another drive is
returned unchanged because no relative [path](path.md) can cross drives
(relative('C:\\a', 'D:\\b') is 'D:\b').

--------------------------
### toNamespacedPath
**Converts a win32 [path](path.md) into the '\\?\' namespace-prefixed form**

```JavaScript
static Value path_win32.toNamespacedPath(Value path = undefined);
```

Parameters:
* path: Value, the [path](path.md) to convert

Returns:
* Value, the converted [path](path.md)

The [path](path.md) is resolved and then prefixed: a drive [path](path.md) gains the '\\?\' prefix ('C:\tmp'
becomes '\\?\C:\tmp') and a UNC [path](path.md) becomes '\\?\UNC\...', with forward slashes
converted to backslashes. An existing '\\?\' prefix is not duplicated, and non-string
values are returned unchanged. A pure string operation that works on every platform,
although the prefix is only meaningful on Windows.

Example — convert drive and UNC paths:

```JavaScript
const win32 = require('path').win32;

console.log(win32.toNamespacedPath('C:\\temp\\file.txt'));
// \\?\C:\temp\file.txt
console.log(win32.toNamespacedPath('\\\\server\\share\\f'));
// \\?\UNC\server\share\f
console.log(win32.toNamespacedPath('//server/share/f'));
// \\?\UNC\server\share\f
```

## Static Properties
        
### posix
**Object, The posix rule set of the [path](path.md) [module](module.md), see [path_posix](path_posix.md)**

```JavaScript
static readonly Object path_win32.posix;
```

Use it to [process](process.md) POSIX paths (forward slashes, backslash as an ordinary character) from a
win32 context.

--------------------------
### win32
**Object, The win32 rule set itself**

```JavaScript
static readonly Object path_win32.win32;
```

A self reference to the [object](../../object/ifs/object.md) returned by require('[path](path.md)').win32, provided for API
symmetry with [path_posix](path_posix.md).

## Constants
        
### sep
**The [path](path.md) segment separator of the win32 rule set: '\'**

```JavaScript
const path_win32.sep = "\";
```

--------------------------
### delimiter
**The PATH-list delimiter of the win32 rule set: ';'**

```JavaScript
const path_win32.delimiter = ";";
```

