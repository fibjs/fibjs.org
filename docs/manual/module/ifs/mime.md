# Module mime
The mime [module](module.md) maps file names and extensions to MIME [types](types.md) and manages a [process](process.md)-wide extension [registry](registry.md)

`getType` returns the media type for a file name or a bare extension and `addType` registers
or overrides an extension at run time. The lookup uses the extension only and never inspects
the file content.

Concepts:

- **MIME type**: a media type such as `text/html` or `application/[json](json.md)`, used by HTTP
Content-Type headers and by helpers such as [http.fileHandler](http.md#fileHandler).
- **Extension lookup**: getType applies [path.extname](path.md#extname) to the argument; when there is no
extension the whole argument is used, so `getType('html')` and `getType('a.html')` return
the same type. Built-in extensions are matched case-insensitively (`a.HTML` works), while
[types](types.md) registered with addType are matched exactly as they were registered.
- **Registry**: addType writes into a [process](process.md)-wide map that is consulted before the built-in
table, so a registration is visible to every caller and can override a built-in type. Pass
the extension without a leading dot; an extension registered as `.foo` only matches an
argument whose extension is literally `.foo`.
- **Fallback**: an unknown extension returns `application/octet-stream` and an empty file
name returns an empty string. Node.js has no core MIME [module](module.md); userland packages provide
the same mapping.

Import:

```JavaScript
const mime = require('mime');
```

Example 1 — look up common extensions:

```JavaScript
const mime = require('mime');

console.log(mime.getType('index.html')); // text/html
console.log(mime.getType('logo.PNG')); // image/png
console.log(mime.getType('app.js')); // application/javascript
console.log(mime.getType('data.myext')); // application/octet-stream
```

Example 2 — register an extension and override a built-in type:

```JavaScript
const mime = require('mime');

mime.addType('myext', 'application/x-myext');
console.log(mime.getType('data.myext')); // application/x-myext

mime.addType('html', 'application/x-custom-html');
console.log(mime.getType('page.html')); // application/x-custom-html
```

## Static Methods
        
### getType
**Looks up the MIME type of a file name or extension**

```JavaScript
static String mime.getType(String fname);
```

Parameters:
* fname: String, file name or extension to look up

Returns:
* String, the matching MIME type, or `application/octet-stream` when the extension is unknown

The extension is taken from the last dot of the argument ([path.extname](path.md#extname)); an argument
without a dot is treated as an extension itself. Built-in extensions are matched
without case sensitivity; extensions registered with addType are matched exactly. An
unknown extension returns `application/octet-stream`, and an empty name returns an
empty string.

Example — look up a name and a bare extension:

```JavaScript
const mime = require('mime');

console.log(mime.getType('photo.jpeg')); // image/jpeg
console.log(mime.getType('jpeg')); // image/jpeg
```

--------------------------
### addType
**Registers a MIME type for an extension in the [process](process.md)-wide [registry](registry.md)**

```JavaScript
static mime.addType(String ext,
    String type);
```

Parameters:
* ext: String, extension to register, without a leading dot
* type: String, MIME type returned for the extension

The extension is stored exactly as given and is looked up before the built-in table,
which allows a built-in type to be overridden for the rest of the [process](process.md). Register the
extension without a leading dot; no dot is added or removed. The registration is shared
by all callers in the [process](process.md) and is not persisted.

