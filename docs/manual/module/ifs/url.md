# Module url
The url [module](module.md) parses, formats and resolves URLs; it provides the WHATWG URL and [URLSearchParams](../../object/ifs/URLSearchParams.md) classes together with the legacy [UrlObject](../../object/ifs/UrlObject.md) API, file [path](path.md) conversion and internationalized domain name conversion

The WHATWG classes are aliases of the [global](global.md) `URL` and `URLSearchParams`, and the legacy
functions (parse, format and resolve) are kept for Node.js compatibility.

Concepts:

- **Two APIs**: `URL` implements the WHATWG URL standard and is the recommended API;
`parse` returns the legacy [UrlObject](../../object/ifs/UrlObject.md) with the fields protocol, slashes, auth, host, port,
hostname, hash, search, query, pathname, [path](path.md) and href. Node.js deprecates the legacy
functions (DEP0169) because their parsing is not standardized.
- **Encoding rules**: the WHATWG parser percent-encodes characters that are invalid in the
current component and normalizes the host (lower case, internationalized names to ASCII);
the query serializer writes a space as `+`. The legacy formatter applies the same
[encoding](encoding.md) to component values, encodes user names and passwords, and leaves an already
encoded string unchanged.
- **Relative resolution**: a relative reference is resolved against a base URL with the
standard algorithm; resolve and `new URL(relative, base)` share that behavior.
- **Query parameters**: `URL#searchParams` is a live [URLSearchParams](../../object/ifs/URLSearchParams.md) view and changing it
rewrites the URL; `url.parse(str, true)` returns a legacy [object](../../object/ifs/object.md) whose query is a
[URLSearchParams](../../object/ifs/URLSearchParams.md) instead of the raw string.
- **[File](../../object/ifs/File.md) URLs**: pathToFileURL and fileURLToPath convert between platform paths and
`file:` URLs, percent-[encoding](encoding.md) or decoding the [path](path.md) and rejecting a non-empty host on
POSIX.
- **Internationalized domain names**: domainToASCII and domainToUnicode convert a domain
between Unicode and the ACE (`xn--`) form with the UTS #46 mapping; `URL` applies the
same conversion to hosts automatically.

Import:

```JavaScript
const url = require('url'); // URL and URLSearchParams are also global
```

Example 1 — parse and modify a URL with the WHATWG API:

```JavaScript
const url = require('url');

const myURL = new url.URL('https://example.com:8080/path?key=value#hash');
console.log(myURL.protocol, myURL.hostname, myURL.port); // https: example.com 8080
console.log(myURL.pathname, myURL.search, myURL.hash); // /path ?key=value #hash

myURL.pathname = '/new-path';
myURL.searchParams.set('q', 'a b');
console.log(myURL.href); // https://example.com:8080/new-path?key=value&q=a+b
```

Example 2 — the legacy parse/format/resolve API:

```JavaScript
const url = require('url');

const parsed = url.parse('https://user:pass@example.com:8080/p/a?q=1#frag');
console.log(parsed.hostname, parsed.port, parsed.path); // example.com 8080 /p/a?q=1

const formatted = url.format({
    protocol: 'https:',
    hostname: 'example.com',
    pathname: '/p'
});
console.log(formatted); // https://example.com/p

console.log(url.resolve('https://example.com/foo/', '../bar'));
// https://example.com/bar
```

Example 3 — convert between file paths and file URLs:

```JavaScript
const url = require('url');

const fileURL = url.pathToFileURL('/tmp/fibjs url test.txt');
console.log(fileURL.href); // file:///tmp/fibjs%20url%20test.txt
console.log(url.fileURLToPath(fileURL)); // /tmp/fibjs url test.txt
```

Example 4 — convert internationalized domain names:

```JavaScript
const url = require('url');

console.log(url.domainToASCII('mañana.com')); // xn--maana-pta.com
console.log(url.domainToUnicode('xn--maana-pta.com')); // mañana.com
console.log(url.domainToASCII('example.com')); // example.com, unchanged
```

## Objects
        
### URL
**The WHATWG URL class, re-exported from the [global](global.md) scope**

```JavaScript
UrlObject url.URL;
```

Returns:
* a new [UrlObject](../../object/ifs/UrlObject.md) instance

`url.URL` is the same class as the [global](global.md) `URL`; `new url.URL(...)` produces a
[UrlObject](../../object/ifs/UrlObject.md) with the standard properties and methods, including the live `searchParams`
view. Prefer this class over parse/format for new code.

Example — the alias and the resulting class:

```JavaScript
const url = require('url');

console.log(url.URL === URL); // true
console.log(new url.URL('https://example.com/a').constructor.name); // UrlObject
```

--------------------------
### URLSearchParams
**The WHATWG [URLSearchParams](../../object/ifs/URLSearchParams.md) class, re-exported from the [global](global.md) scope**

```JavaScript
URLSearchParams url.URLSearchParams;
```

Returns:
* a new [URLSearchParams](../../object/ifs/URLSearchParams.md) instance

`url.URLSearchParams` is the same class as the [global](global.md) `[URLSearchParams](../../object/ifs/URLSearchParams.md)` and derives
from [HttpCollection](../../object/ifs/HttpCollection.md); see [URLSearchParams](../../object/ifs/URLSearchParams.md) for the query parameter container.

## Static Methods
        
### format
**Constructs a URL string from a URL components [object](../../object/ifs/object.md), a [UrlObject](../../object/ifs/UrlObject.md) or a URL string**

```JavaScript
static String url.format(Object args);
```

Parameters:
* args: Object, URL components [object](../../object/ifs/object.md) to format

Returns:
* String, the constructed URL string

The overloads share this name and differ in the accepted input; this first entry
documents the differences so they stay visible in `fibjs --man`:

- format(args) builds a URL from a components [object](../../object/ifs/object.md). Accepted fields are protocol,
  slashes, auth, username, password, host, hostname, port, pathname, [path](path.md), query
  (string, array of pairs or plain [object](../../object/ifs/object.md)), search and hash. When hostname is present
  but protocol is missing, `[http](http.md):` is assumed, so [http.request](http.md#request)-style options can be
  formatted directly; user names and passwords are percent-encoded.
- format(urlObject, options) serializes a [UrlObject](../../object/ifs/UrlObject.md), a URL string or a components
  [object](../../object/ifs/object.md); `options` is accepted for Node.js compatibility (fragment, unicode, auth)
  but is currently ignored and the full href is returned.
- format(href) parses href with the WHATWG parser and returns the normalized href; a
  relative string is normalized as an absolute [path](path.md) (`not a url` becomes
  `/not%20a%20url`) while an invalid absolute URL throws a type error.

Prefer `new URL(...).href` for new code; this function is the legacy formatter.

Example — format a components [object](../../object/ifs/object.md):

```JavaScript
const url = require('url');

console.log(url.format({
    protocol: 'https:',
    hostname: 'example.com',
    pathname: '/p',
    query: {
        a: 1
    }
})); // https://example.com/p?a=1
```

--------------------------
**Formats a [UrlObject](../../object/ifs/UrlObject.md), a URL string or a URL components [object](../../object/ifs/object.md) into a string**

```JavaScript
static String url.format(UrlObject | String | Object urlObject,
    Object options = {});
```

Parameters:
* urlObject: [UrlObject](../../object/ifs/UrlObject.md) | String | Object, URL to format
* options: Object, Node.js formatting options; accepted but currently ignored

Returns:
* String, the formatted URL string

See the first format overload for the differences between the call forms. urlObject
may be a [UrlObject](../../object/ifs/UrlObject.md), a URL string (parsed first) or a components [object](../../object/ifs/object.md) (the same
fields the [UrlObject](../../object/ifs/UrlObject.md) constructor accepts).

--------------------------
**Parses a URL string with the WHATWG parser and returns the normalized href**

```JavaScript
static String url.format(String href);
```

Parameters:
* href: String, URL string to normalize

Returns:
* String, the normalized URL string

An absolute URL is normalized component by component; a string without a scheme is
treated as a relative reference and normalized as an absolute [path](path.md). An invalid
absolute URL throws a type error (20024).

--------------------------
### parse
**Parses a URL string into a legacy [UrlObject](../../object/ifs/UrlObject.md)**

```JavaScript
static UrlObject url.parse(String url,
    Boolean parseQueryString = false,
    Boolean slashesDenoteHost = false);
```

Parameters:
* url: String, URL string to parse
* parseQueryString: Boolean, parse the query into a [URLSearchParams](../../object/ifs/URLSearchParams.md), default false
* slashesDenoteHost: Boolean, accepted for Node.js compatibility; ignored by fibjs

Returns:
* [UrlObject](../../object/ifs/UrlObject.md), the parsed [UrlObject](../../object/ifs/UrlObject.md)

The returned [object](../../object/ifs/object.md) follows the Node.js legacy API with the fields protocol, slashes,
auth, host, port, hostname, hash, search, query, pathname, [path](path.md) and href. By default
query is the raw query text without the leading `?`; with parseQueryString it is a
[URLSearchParams](../../object/ifs/URLSearchParams.md) built from the query. The slashesDenoteHost argument is accepted for
compatibility but ignored, so a protocol-relative reference such as `//host/[path](path.md)` is
parsed with `host` as the host. Invalid percent-[encoding](encoding.md) throws `url: URI malformed`
and an unparsable URL throws `url: Invalid URL '<input>'.` (20024). Node.js returns a
plain [object](../../object/ifs/object.md) when parseQueryString is true and deprecates the function (DEP0169).

Example — legacy parse with and without query parsing:

```JavaScript
const url = require('url');

const parsed = url.parse('https://example.com/a?x=1&x=2#top');
console.log(parsed.hostname, parsed.query, parsed.hash); // example.com x=1&x=2 #top

const withQuery = url.parse('https://example.com/a?x=1&x=2', true);
console.log(withQuery.query.getAll('x')); // [ '1', '2' ]
```

--------------------------
### resolve
**Resolves a relative reference against a base URL**

```JavaScript
static String url.resolve(String _from,
    String to);
```

Parameters:
* _from: String, base URL string
* to: String, relative URL string to resolve

Returns:
* String, the resolved absolute URL string

The two arguments are `from` (the base URL) and `to` (the reference); the result is
normalized with the WHATWG algorithm. An empty base resolves the reference on its own,
so a rooted [path](path.md) stays a [path](path.md) and a relative [path](path.md) is returned as a relative [path](path.md). An
unparsable input throws `url: Invalid URL '<input>'.` (20024). Node.js deprecates this
function (DEP0169).

Example — resolve against a file base:

```JavaScript
const url = require('url');

console.log(url.resolve('https://example.com/a/b', '../c')); // https://example.com/c
console.log(url.resolve('', '/a/b')); // /a/b
```

--------------------------
### fileURLToPath
**Converts a file URL into a platform-specific file [path](path.md)**

```JavaScript
static String url.fileURLToPath(UrlObject | String | Object url,
    Object options = {});
```

Parameters:
* url: [UrlObject](../../object/ifs/UrlObject.md) | String | Object, file URL to convert
* options: Object, conversion options; the windows field forces the Windows [path](path.md) format

Returns:
* String, the platform-specific file [path](path.md)

url may be a [UrlObject](../../object/ifs/UrlObject.md), a URL string or a components [object](../../object/ifs/object.md) (the same fields the
[UrlObject](../../object/ifs/UrlObject.md) constructor accepts). The scheme must be `file:`; the [path](path.md) is
percent-decoded and, on Windows, a drive letter or UNC host is handled. A non-empty
host on POSIX throws. The `windows` option forces the Windows or POSIX [path](path.md) format.
Errors carry a code: ERR_INVALID_URL_SCHEME for a non-file URL,
ERR_INVALID_FILE_URL_HOST for a host on POSIX and ERR_INVALID_FILE_URL_PATH for an
invalid [path](path.md) such as one containing an encoded slash.

Example — round-trip a [path](path.md) that contains spaces:

```JavaScript
const url = require('url');

const href = url.pathToFileURL('/tmp/a b.txt').href;
console.log(href); // file:///tmp/a%20b.txt
console.log(url.fileURLToPath(href)); // /tmp/a b.txt
```

--------------------------
### pathToFileURL
**Converts a file [path](path.md) into a file URL [object](../../object/ifs/object.md)**

```JavaScript
static UrlObject url.pathToFileURL(String path,
    Object options = {});
```

Parameters:
* path: String, file [path](path.md) to convert
* options: Object, conversion options; the windows field forces Windows [path](path.md) handling

Returns:
* [UrlObject](../../object/ifs/UrlObject.md), the converted file URL [object](../../object/ifs/object.md)

The [path](path.md) is resolved to an absolute [path](path.md) and percent-encoded with the [path](path.md) rules; a
trailing [path](path.md) separator is preserved as a trailing slash, which marks the URL as a
directory for the consumer. On Windows the `windows` option forces Windows handling
and a UNC [path](path.md) becomes the URL host. The result is a [UrlObject](../../object/ifs/UrlObject.md), so read its href for
the string form.

Example — build a URL and read its href:

```JavaScript
const url = require('url');

const fileURL = url.pathToFileURL('/tmp/a b.txt');
console.log(fileURL.href); // file:///tmp/a%20b.txt
```

--------------------------
### domainToASCII
**Converts an internationalized domain name to its ASCII (ACE) form**

```JavaScript
static String url.domainToASCII(String domain);
```

Parameters:
* domain: String, domain name to convert, possibly containing Unicode characters

Returns:
* String, the ASCII (ACE) form of the domain name

The conversion applies the UTS #46 mapping of the URL parser and adds the `xn--`
prefix to non-ASCII labels; an ASCII name is returned unchanged. Unsupported input is
returned unchanged instead of raising an error, while Node.js returns an empty string
for a domain that fails the conversion. Use [punycode.toASCII](punycode.md#toASCII) for the raw RFC 3492
conversion of a single label.

Example — convert a Unicode domain:

```JavaScript
const url = require('url');

console.log(url.domainToASCII('mañana.com')); // xn--maana-pta.com
```

--------------------------
### domainToUnicode
**Converts an ASCII (ACE) domain name to its Unicode display form**

```JavaScript
static String url.domainToUnicode(String domain);
```

Parameters:
* domain: String, ASCII domain name to convert

Returns:
* String, the domain name in Unicode form

Only labels that carry the `xn--` prefix are converted; all other labels are copied
unchanged. The prefix [test](test.md) is case-sensitive: an upper-case `XN--` label is returned
as is, while Node.js converts it. Invalid encoded labels are returned unchanged.

Example — convert an ACE domain:

```JavaScript
const url = require('url');

console.log(url.domainToUnicode('xn--maana-pta.com')); // mañana.com
```

