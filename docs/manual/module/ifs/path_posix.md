# Module path_posix
The posix rule set of the [path](path.md) [module](module.md): it processes POSIX paths on every platform

This definition is the manual page of the rule set reachable at runtime as
`require('[path](path.md)').posix` or `require('[path](path.md)/posix')`; it is not itself a require-able [module](module.md)
name. All functions are pure string operations and never touch the file system.

Main capabilities:

- **Building paths**: `join`, `resolve`, `normalize`, `fullpath` (fibjs extension);
- **Breaking paths down**: `parse`, `format`, `basename`, `dirname`, `extname`;
- **Comparing paths**: `relative`, `isAbsolute`, `matchesGlob`;
- **Constants**: `sep` ('/') and `delimiter` (':').

Concepts:

- **POSIX rule set**: '/' separates [path](path.md) segments and a backslash is an ordinary character,
  so 'a\\b.txt' is a single file name. A [path](path.md) starting with '/' is absolute; the root is '/'
  and '..' is clamped there. On POSIX hosts the [path](path.md) [module](module.md) itself applies these rules
  (`[path](path.md) === [path.posix](path.md#posix)`); on Windows use this rule set to [process](process.md) paths received from a
  POSIX system. See the [path](path.md) [module](module.md) for the platform default and the [path_win32](path_win32.md) [module](module.md) for
  the Windows rule set.
- **join vs resolve vs fullpath**: join merges segments and normalizes, keeping a later
  absolute segment as a plain segment; resolve restarts at the rightmost absolute segment and
  anchors the result at the working directory; fullpath (fibjs extension) anchors a relative
  [path](path.md) to the working directory and normalizes it, without touching the file system.
- **Normalization**: '.' segments are dropped, '..' cancels the previous segment where
  possible and repeated separators collapse; a trailing separator survives ('a//b/' becomes
  'a/b/'), a leading '..' is kept in relative paths, and normalize('') is '.'.
- **Extensions and dotfiles**: extname('.bashrc') is '' because a leading dot starts a
  dotfile; extname('.env.local') is '.local' and extname('index.') is '.'. basename([path](path.md), ext)
  strips ext as a plain suffix and ignores trailing separators.
- **Glob matching**: matchesGlob supports '*', '**', '?', character classes, brace expansion
  and extglob forms; a backslash in the pattern is treated as a [path](path.md) separator, while a
  backslash in the tested [path](path.md) is an ordinary character.

Import:

```JavaScript
// path_posix is the manual-page name; the runtime entry points are:
const posix = require('path').posix;
const posixAgain = require('path/posix');
```

Example 1 — the posix rule set treats backslashes as ordinary characters:

```JavaScript
const posix = require('path').posix;

console.log(posix.basename('a\\b.txt')); // a\b.txt
console.log(posix.normalize('a//b/./../c')); // a/c

// dotfiles have no extension unless another dot follows
console.log(posix.extname('.bashrc')); // ''
console.log(posix.extname('.env.local')); // .local
```

Example 2 — building and comparing posix paths:

```JavaScript
const posix = require('path').posix;

console.log(posix.join('/usr', 'local', 'bin')); // /usr/local/bin
console.log(posix.join('a', '../b')); // b
console.log(posix.resolve('/srv', 'www')); // /srv/www
console.log(posix.relative('/a/b', '/a/c')); // ../c
```

Example 3 — parse and format round trip:

```JavaScript
const posix = require('path').posix;

const parts = posix.parse('/etc/nginx/nginx.conf');
console.log(parts.dir, parts.base, parts.ext); // /etc/nginx nginx.conf .conf

console.log(posix.format({
    dir: parts.dir,
    name: 'site',
    ext: '.conf'
}));
// /etc/nginx/site.conf
```

Notes:

- Node.js exposes the same rule set as require('[path](path.md)').posix; fibjs also provides the
  require('[path](path.md)/posix') subpath form and documents the rule set as the path_posix definition.
- fibjs adds fullpath to the rule set; see the [path](path.md) [module](module.md) for the differences from Node.js.

## Static Methods
        
### normalize
**Normalizes a posix [path](path.md), resolving '.' and '..' and collapsing '/' separators**

```JavaScript
static String path_posix.normalize(String path);
```

Parameters:
* path: String, the [path](path.md) to normalize

Returns:
* String, the normalized [path](path.md)

A pure string transformation over the posix rule set: '/' separates segments and a
backslash is an ordinary character. Relative paths keep leading '..' segments; absolute
paths are clamped at the root, so '/../' becomes '/'. A trailing separator is preserved
('a//b/' becomes 'a/b/') and normalize('') is '.'. See the [path](path.md) [module](module.md) for the shared
normalization rules.

Example — normalize a posix [path](path.md):

```JavaScript
const posix = require('path').posix;

console.log(posix.normalize('a//b/./../c')); // a/c
console.log(posix.normalize('/usr//local/../bin/')); // /usr/bin/
console.log(posix.normalize('')); // .
```

--------------------------
### basename
**Returns the last portion of a posix [path](path.md), removing a matching extension**

```JavaScript
static String path_posix.basename(String path,
    String ext = "");
```

Parameters:
* path: String, the [path](path.md) to query
* ext: String, the extension to remove when the file name matches

Returns:
* String, the file name

Trailing '/' separators are ignored (basename('foo/') is 'foo'), basename('/') is '' and a
backslash is an ordinary character (basename('a\\b.txt') is 'a\\b.txt'). The optional ext
is stripped as a plain suffix, not necessarily starting with a dot:
basename('/a/b.txt', 'txt') is 'b.'.

--------------------------
### extname
**Returns the extension from the last '.' of the last posix segment**

```JavaScript
static String path_posix.extname(String path);
```

Parameters:
* path: String, the [path](path.md) to query

Returns:
* String, the extension

A leading dot starts a dotfile, not an extension: extname('.bashrc') is '',
extname('.env.local') is '.local' and extname('index.') is '.'. The result is '' for '..'
and for paths ending with '/'. A dotted parent directory is ignored, and a backslash is an
ordinary character, so extname('a\\b.txt') is '.txt'.

--------------------------
### format
**Formats a [path](path.md) [object](../../object/ifs/object.md) into a posix [path](path.md) string, the inverse of parse**

```JavaScript
static String path_posix.format(Object pathObject);
```

Parameters:
* pathObject: Object, the [path](path.md) [object](../../object/ifs/object.md)

Returns:
* String, the formatted [path](path.md)

All fields are optional. Base wins over name + ext, and dir wins over root unless dir is
empty; when dir equals root no separator is inserted. '/' is always used as the separator,
even on Windows, and a dir-only [object](../../object/ifs/object.md) produces a trailing '/' ('some/dir' becomes
'some/dir/'). The full field list is documented in the [path](path.md) [module](module.md).

pathObject supports the following properties:

```JavaScript
// fragment: options
({
    "root": "/", // the root of the path, always '/' for posix
    "dir": "some/dir", // the directory; wins over root when both are set
    "base": "c.ext", // the full last segment; wins over name + ext
    "ext": ".ext", // the extension, including the leading dot
    "name": "c" // the name without the extension
})
```

Example — build posix paths from objects:

```JavaScript
const posix = require('path').posix;

console.log(posix.format({
    dir: 'some/dir',
    name: 'index',
    ext: '.html'
}));
// some/dir/index.html
console.log(posix.format({
    root: '/'
})); // /
console.log(posix.format({
    dir: 'some/dir'
})); // some/dir/
```

--------------------------
### parse
**Parses a posix [path](path.md) into an [object](../../object/ifs/object.md) with root, dir, base, ext and name fields**

```JavaScript
static (String root, String dir, String base, String ext, String name) path_posix.parse(String path);
```

Parameters:
* path: String, the [path](path.md) to parse

Returns:
* (String root, String dir, String base, String ext, String name), the parsed [path](path.md) [object](../../object/ifs/object.md)

The [object](../../object/ifs/object.md) always contains all five fields as strings and can be passed to format. root is
'/' for absolute paths and '' otherwise; a trailing '/' is ignored for base; a leading dot
starts a dotfile ('.bashrc' has no extension), while 'index.' has ext '.'. A backslash is
an ordinary character. The field semantics are shared with the [path](path.md) [module](module.md).

Example — inspect a parsed posix [path](path.md):

```JavaScript
const posix = require('path').posix;

const parts = posix.parse('/var/log/app.tar.gz');
console.log(parts.dir, parts.name, parts.ext); // /var/log app.tar .gz

console.log(posix.parse('/a/b/').base); // b
console.log(posix.parse('.').base); // .
```

--------------------------
### dirname
**Returns the directory name of a posix [path](path.md), dropping the last segment**

```JavaScript
static String path_posix.dirname(String path);
```

Parameters:
* path: String, the [path](path.md) to query

Returns:
* String, the directory name

Trailing '/' separators are ignored: dirname('/a/b/') is '/a', dirname('/a') is '/',
dirname('foo') is '.' and dirname('') is '.'. dirname('/') stays '/'. A backslash is an
ordinary character, so dirname('a\\b.txt') is '.'.

--------------------------
### fullpath
**Converts a posix [path](path.md) into an absolute [path](path.md) anchored at the working directory**

```JavaScript
static String path_posix.fullpath(String path);
```

Parameters:
* path: String, the [path](path.md) to convert

Returns:
* String, the full [path](path.md)

A fibjs extension, not part of Node.js. An absolute input is normalized; a relative input
is prefixed with [process.cwd](process.md#cwd)() and then normalized with the posix rule set. The function
is a pure string operation, does not touch the file system and never checks existence.
Unlike resolve, an empty string becomes the working directory plus a trailing separator.

Example — anchor a relative [path](path.md) to the working directory:

```JavaScript
const posix = require('path').posix;

console.log(posix.fullpath('a/../b') === posix.join(process.cwd(), 'b')); // true
console.log(posix.fullpath('')); // <cwd>/ (the working directory plus a separator)
```

--------------------------
### matchesGlob
**Checks whether a [path](path.md) matches a glob pattern using the posix rule set**

```JavaScript
static Boolean path_posix.matchesGlob(String path,
    String pattern);
```

Parameters:
* path: String, the [path](path.md) to check
* pattern: String, the glob pattern

Returns:
* Boolean, true when the [path](path.md) matches the pattern

Supports '*', '**', '?', character classes, brace expansion and the extglob forms;
patterns are anchored as a whole and dotfiles need an explicit dot. Under the posix rule
set a backslash in the pattern is treated as a [path](path.md) separator, while a backslash in the
tested [path](path.md) is an ordinary character: matchesGlob('a/b', 'a\\b') is true, but
matchesGlob('a\\b', 'a/b') is false. The [path](path.md) [module](module.md) documents the full syntax.

--------------------------
### isAbsolute
**Checks whether a posix [path](path.md) is absolute**

```JavaScript
static Boolean path_posix.isAbsolute(String path);
```

Parameters:
* path: String, the [path](path.md) to check

Returns:
* Boolean, true when the [path](path.md) is absolute

Returns true only when the [path](path.md) starts with '/'; the check is purely textual, so the [path](path.md)
does not need to exist. The empty string is false, and a Windows drive [path](path.md) such as
'C:\\dir' is not absolute under the posix rule set because it does not start with '/'.

--------------------------
### join
**Joins segments into a normalized posix [path](path.md) using '/' as the separator**

```JavaScript
static String path_posix.join(...ps);
```

Parameters:
* ps: ..., one or more paths

Returns:
* String, the joined [path](path.md)

Empty segments are ignored and '.' is returned when the result would be empty. A later
absolute segment is appended as an ordinary segment: join('a', '/b') is 'a/b'. A '..'
cancels a preceding segment where possible, but a leading '..' survives. See the [path](path.md)
[module](module.md) for the join/resolve/fullpath comparison.

Example — join posix segments:

```JavaScript
const posix = require('path').posix;

console.log(posix.join('/usr', 'local', 'bin')); // /usr/local/bin
console.log(posix.join('a', '../b')); // b
console.log(posix.join('')); // .
```

--------------------------
### resolve
**Resolves segments into an absolute posix [path](path.md), anchored at the working directory**

```JavaScript
static String path_posix.resolve(...ps);
```

Parameters:
* ps: ..., one or more paths

Returns:
* String, the resolved [path](path.md)

Segments are processed from right to left until an absolute one is found, so the rightmost
absolute segment wins; the result is normalized and has no trailing separator. With no
arguments, or with only empty segments, the working directory is returned. Paths are
resolved with the posix rule set even when the host is Windows.

Example — resolve posix segments:

```JavaScript
const posix = require('path').posix;

console.log(posix.resolve('/srv', 'www')); // /srv/www
console.log(posix.resolve('/srv', 'www', '/etc')); // /etc
```

--------------------------
### relative
**Returns the relative posix [path](path.md) from _from to to**

```JavaScript
static String path_posix.relative(String _from,
    String to);
```

Parameters:
* _from: String, the source [path](path.md)
* to: String, the target [path](path.md)

Returns:
* String, the relative [path](path.md)

Both arguments are resolved against the working directory first, so the result does not
depend on whether they are relative or absolute. '' is returned for the same location;
otherwise the result uses '..' segments as needed and has no trailing separator.

--------------------------
### toNamespacedPath
**Returns the input unchanged; the namespace prefix only applies to the win32 rule set**

```JavaScript
static Value path_posix.toNamespacedPath(Value path = undefined);
```

Parameters:
* path: Value, the [path](path.md) to convert

Returns:
* Value, the input value

The posix rule set has no namespace-prefixed form, so strings and non-string values are
returned as-is on every platform.

## Static Properties
        
### posix
**Object, The posix rule set itself**

```JavaScript
static readonly Object path_posix.posix;
```

A self reference to the [object](../../object/ifs/object.md) returned by require('[path](path.md)').posix, provided for API
symmetry with [path_win32](path_win32.md).

--------------------------
### win32
**Object, The win32 rule set of the [path](path.md) [module](module.md), see [path_win32](path_win32.md)**

```JavaScript
static readonly Object path_posix.win32;
```

Use it to [process](process.md) Windows paths (drive letters, UNC shares, both separators) from a posix
context.

## Constants
        
### sep
**The [path](path.md) segment separator of the posix rule set: '/'**

```JavaScript
const path_posix.sep = "/";
```

--------------------------
### delimiter
**The PATH-list delimiter of the posix rule set: ':'**

```JavaScript
const path_posix.delimiter = ":";
```

