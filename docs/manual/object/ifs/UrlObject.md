# Object UrlObject
URL [object](object.md) implementing the WHATWG URL standard and the legacy URL [object](object.md) at once

`UrlObject` is the class behind the [global](../../module/ifs/global.md) `URL` alias (`[url.URL](../../module/ifs/url.md#URL) === URL`) and the
type returned by `url.parse` and `url.pathToFileURL`. A single class carries two
property models, chosen by how the [object](object.md) is created: `new URL(...)` fills the
WHATWG properties, while `url.parse(...)` marks the [object](object.md) as legacy so that the
user information is decoded on read and the legacy fields (`slashes`, `auth`,
`path`, `query`) become meaningful.

The components of a URL:
```
https://user:pass@example.com:8080/path/to/resource?query=value#fragment
\___/   \______/ \_________/ \__/\________________/\___________/ \______/
  |        |         |        |          |             |          |
protocol  userinfo   host     port     pathname        search      hash
         \___________________/
                origin (scheme + host + port)
```

Concepts:

- **Anatomy**: `href` is the serialized URL; `protocol` (with its colon),
 `username`/`password` (the userinfo), `host` (`hostname[:port]`), `hostname`,
 `port` (`''` means the scheme default), `pathname`, `search` (with the leading
 `?`) and `hash` (with the leading `#`); `origin` is the read-only security
 tuple and `path` the legacy `pathname + search` pair.
- **Parsing and normalization**: the parser lower-cases the host, converts
 internationalized names to the ACE (`xn--`) form, drops a port equal to the
 scheme default, resolves `.`/`..` [path](../../module/ifs/path.md) segments, treats `\` as `/` in the
 authority and [path](../../module/ifs/path.md), and percent-encodes characters that are invalid in the
 component being filled.
- **Encoding**: every component has its own encode set, so a space becomes `%20`
 in `pathname` or `search` but `+` when `searchParams` serializes the query;
 user names and passwords are percent-encoded on assignment. A WHATWG instance
 reads `username`, `password` and `auth` in encoded form, a legacy [object](object.md) in
 decoded form.
- **Setters and invalidation**: assigning `href` replaces the whole URL and
 drops the cached `searchParams`; component setters re-serialize at once and
 ignore a value the parser rejects (an out-of-range port, a bad host, a scheme
 switch between a special and a non-special protocol); `searchParams` is a
 live view, so mutating it rewrites the URL on the next serialization.
- **Comparison with Node.js**: Node keeps its WHATWG `URL` class and the legacy
 `url.parse` [object](object.md) separate and rejects a relative input without a base; fibjs
 merges both into `UrlObject` and accepts such an input as a rooted [path](../../module/ifs/path.md), so
 the legacy fields exist on every instance.

Obtained from:
- `new URL([url](../../module/ifs/url.md)[, base])` / `new [url.URL](../../module/ifs/url.md#URL)(...)` — the WHATWG constructor; `base`
  may be a string, a `UrlObject` or a components [object](object.md);
- `new URL(args)` — a components [object](object.md) (`protocol`, `hostname`, `port`,
  `pathname`, `query`, ...), a fibjs extension;
- `url.parse([url](../../module/ifs/url.md)[, parseQueryString])` — the legacy parse [path](../../module/ifs/path.md);
- `url.pathToFileURL([path](../../module/ifs/path.md))` — a `file:` URL [object](object.md);
- `UrlObject#resolve([url](../../module/ifs/url.md))` — a new [object](object.md) resolved against the receiver.

Example 1 — parse and inspect both models:

```JavaScript
const url = require('url');

const myURL = new URL('https://user:pass@example.com:8080/path?a=1#frag');
console.log(myURL.protocol, myURL.hostname, myURL.port); // https: example.com 8080
console.log(myURL.pathname, myURL.search, myURL.hash); // /path ?a=1 #frag
console.log(myURL.origin); // https://example.com:8080

const legacy = url.parse('https://user:pass@example.com:8080/path?a=1#frag');
console.log(legacy.auth, legacy.path); // user:pass /path?a=1
```

Example 2 — mutate fields and observe normalization:

```JavaScript
const myURL = new URL('http://example.com:80/a/b/../c?q=1');

console.log(myURL.href); // http://example.com/a/c?q=1

myURL.protocol = 'https:';
myURL.port = '8443';
myURL.pathname = '/a b/ü';
myURL.hash = 'top';
console.log(myURL.href); // https://example.com:8443/a%20b/%C3%BC?q=1#top

myURL.port = '99999'; // out of range: the setter keeps the current port
console.log(myURL.port); // 8443
```

Example 3 — round-trip through `url.format`, and build from components:

```JavaScript
const url = require('url');

const myURL = new URL('https://example.com/p?q=a b#top');
console.log(myURL.href); // https://example.com/p?q=a%20b#top

console.log(url.format(url.parse(myURL.href))); // https://example.com/p?q=a%20b#top
console.log(url.format(myURL)); // https://example.com/p?q=a%20b#top
console.log(myURL.resolve('../other').href); // https://example.com/other

const fromParts = new URL({
    protocol: 'https:',
    hostname: 'example.com',
    pathname: '/p'
});
console.log(fromParts.href); // https://example.com/p
```

## Inheritance
```dot
digraph {
    node [fontname="Helvetica,sans-Serif", fontsize=10, shape="record", style="filled", fillcolor="white"];

    object [tooltip="object", URL="object.md", label="{object|toString()\ltoJSON()\l}"];
    UrlObject [tooltip="UrlObject", fillcolor="lightgray", id="me", label="{UrlObject|new UrlObject()\l|parse()\lcanParse()\l|href\lprotocol\lslashes\lorigin\lauth\lusername\lpassword\lhost\lhostname\lport\lpath\lpathname\lsearch\lquery\lhash\lsearchParams\l|resolve()\l}"];

    object -> UrlObject [dir=back];
}
```

## Constructors
        
### UrlObject
**Constructs a URL [object](object.md) from a components [object](object.md)**

```JavaScript
new UrlObject(Object args = {});
```

Parameters:
* args: Object, components [object](object.md) holding the URL fields

A fibjs extension; Node.js stringifies the [object](object.md) instead and throws on a
plain one. The accepted fields are protocol, slashes, auth (or
username/password), host (or hostname plus port), [path](../../module/ifs/path.md) (or pathname),
query, search and hash, combined by the legacy serializer: a hostname
without protocol implies `[http](../../module/ifs/http.md):`, user names and passwords are
percent-encoded, and query accepts a plain [object](object.md) whose entries are
serialized as `key=value` pairs. `new URL({})` yields an empty URL whose
href is `''`; the assembled string is parsed like the string constructor,
so a malformed protocol or host throws `[url](../../module/ifs/url.md): Invalid URL '<input>'.`
([20024]). See the class definition for a components example.

--------------------------
**Constructs a URL [object](object.md) from a URL string**

```JavaScript
new UrlObject(String url,
    String | UrlObject | Object base = "");
```

Parameters:
* url: String, URL string to parse
* base: String | UrlObject | Object, base URL string, UrlObject or components [object](object.md)

Parses [url](../../module/ifs/url.md) with the WHATWG URL parser. base may be a string, a UrlObject
or a components [object](object.md) and is used to resolve a relative [url](../../module/ifs/url.md) (Node.js
accepts a string or URL only). Without base, a relative string is not
rejected: it is normalized as a rooted [path](../../module/ifs/path.md), so `new URL('a/b').href` is
`/a/b`, and a typo such as `ht tp://h/` silently becomes the [path](../../module/ifs/path.md)
`/ht%20tp://h/`, where Node.js throws ERR_INVALID_URL. A malformed
absolute input (`[http](../../module/ifs/http.md)://`, an out-of-range port, an invalid IPv6 host)
throws `[url](../../module/ifs/url.md): Invalid URL '<input>'.` ([20024]); null and undefined yield
an empty URL, while other non-string values throw a type error ([20005]).

Example — resolve a relative reference against a base:

```JavaScript
const myURL = new URL('../a b', 'https://example.com/x/y');

console.log(myURL.href); // https://example.com/a%20b
console.log(myURL.pathname); // /a%20b
```

## Static Methods
        
### parse
**Parses a URL string and returns a URL [object](object.md)**

```JavaScript
static UrlObject UrlObject.parse(String url,
    String base = "");
```

Parameters:
* url: String, URL string to parse
* base: String, base URL string used for a relative [url](../../module/ifs/url.md)

Returns:
* UrlObject, the parsed URL [object](object.md)

Aliases the string constructor for the Node.js `URL.parse` static (Node
22+) and accepts base as a URL string. Node.js returns `null` when the
input is invalid; fibjs throws `[url](../../module/ifs/url.md): Invalid URL '<input>'.` ([20024])
instead, and accepts a relative string without a base as a rooted [path](../../module/ifs/path.md).
`URL.parse('')` returns an [object](object.md) whose href is `''` (Node.js returns
null), and a non-string value throws a type error ([20005]).

Example — success and failure:

```JavaScript
console.log(URL.parse('https://example.com/a?b=1').href);
// https://example.com/a?b=1

try {
    URL.parse('http://');
} catch (err) {
    console.log(err.number); // 20024
}
```

--------------------------
### canParse
**Checks whether a URL string can be parsed**

```JavaScript
static Boolean UrlObject.canParse(String url,
    String base = "");
```

Parameters:
* url: String, URL string to check
* base: String, base URL string used for a relative [url](../../module/ifs/url.md)

Returns:
* Boolean, true when the input parses, otherwise false

Returns true when the matching constructor or static parse call would
succeed. fibjs is more permissive than Node.js: a relative string without
base (`/p`), an empty string and a string with spaces that cannot form an
absolute URL are treated as relative and return true, while Node.js
returns false without a base. A malformed absolute input (`[http](../../module/ifs/http.md)://`, a bad
port, an invalid IPv6 host) returns false, and an unusable base makes the
result false as well.

Example — the permissive and the failing cases:

```JavaScript
console.log(URL.canParse('https://example.com/')); // true
console.log(URL.canParse('/p')); // true, relative without a base
console.log(URL.canParse('http://')); // false
console.log(URL.canParse('/p', 'http://')); // false, bad base
```

## Properties
        
### href
**String, The complete URL string**

```JavaScript
String UrlObject.href;
```

Reading href first folds any pending `searchParams` change back into the
URL. Assigning it parses the new string like the constructor, so a
relative string is normalized to a rooted [path](../../module/ifs/path.md) instead of throwing, and
the cached `searchParams` of the old URL is dropped. `toString()` and
`toJSON()` return the same string, and `JSON.stringify` of an [object](object.md)
holding a URL serializes it to href.

Example — assign and re-parse:

```JavaScript
const myURL = new URL('https://example.com/a?x=1#top');

myURL.href = 'http://user@example.org/b?y=2';
console.log(myURL.protocol, myURL.username, myURL.search); // http: user ?y=2
console.log(myURL.href); // http://user@example.org/b?y=2

myURL.href = 'not a url';
console.log(myURL.href); // /not%20a%20url
```

--------------------------
### protocol
**String, The protocol scheme of the URL, including the colon**

```JavaScript
String UrlObject.protocol;
```

Read/write; the parser lower-cases the scheme, so `HTTPS:` reads back as
`https:`. The setter accepts a scheme with or without the trailing colon
and adds one when missing; a malformed scheme and a switch between a
special scheme (`[http](../../module/ifs/http.md):`, `https:`, `ws:` ...) and a non-special one are
ignored, keeping the current protocol instead of throwing. Assigning the
protocol re-applies the default-port rule, so `http://example.com:443/`
becomes `https://example.com/` after switching to `https:`. Node.js and
MDN define the same behavior.

--------------------------
### slashes
**Boolean, Whether the URL is serialized with a double slash after the scheme**

```JavaScript
Boolean UrlObject.slashes;
```

A legacy field, not part of the WHATWG URL interface; Node.js exposes it
on [url.parse](../../module/ifs/url.md#parse) objects only. Every [object](object.md) built with `new URL(...)` reports
true, even for `mailto:` or `data:`, while a legacy [object](object.md) from
`url.parse` reports false for a non-hierarchical scheme (`mailto:`) and
true when the input carried `//`. Assigning false is a rendering switch:
the serialized URL loses the `//` (`http://h/p` becomes `[http](../../module/ifs/http.md):h/p`) while
the parsed components stay the same.

--------------------------
### origin
**String, The origin of the URL, `scheme://host[:port]`**

```JavaScript
readonly String UrlObject.origin;
```

Read-only; assigning is silently ignored. Special schemes report the
tuple serialization with the default port dropped; `blob:` inherits the
origin of its inner URL; `file:` and other non-special schemes report the
literal string `'null'` (not null). Node.js and MDN report the same
values.

--------------------------
### auth
**String, The userinfo of the URL, `username:password`**

```JavaScript
readonly String UrlObject.auth;
```

Read-only; assigning is silently ignored. A legacy field with two forms:
a WHATWG instance returns the percent-encoded `username[:password]` and
null when the serialized URL carries no `@`; an [object](object.md) from `url.parse`
returns the decoded text taken from the original input and null when the
input had no `@` at all, so `http://@h/` reads back as `''` and
`http://:@h/` as `':'`. Node.js exposes the decoded property on legacy
parse objects only.

--------------------------
### username
**String, The user name in the URL userinfo**

```JavaScript
String UrlObject.username;
```

Read/write and percent-encoded in the serialized URL. The setter encodes
the assigned text with the userinfo rules (`a:b` becomes `a%3Ab`, a space
`%20`) and assigning `''` removes the name while keeping the password. A
WHATWG instance returns the encoded text; a legacy [object](object.md) from
`url.parse` returns the decoded text and its setter encodes the value, so
a read after a write returns the decoded form again. Node.js keeps the
same split between its URL class and the legacy [object](object.md).

Example — what each model stores:

```JavaScript
const url = require('url');
const myURL = new URL('http://example.com/');

myURL.username = 'a/b';
console.log(myURL.href); // http://a%2Fb@example.com/
console.log(myURL.username); // a%2Fb

console.log(url.parse('http://a%2Fb@example.com/').username); // a/b
```

--------------------------
### password
**String, The password in the URL userinfo**

```JavaScript
String UrlObject.password;
```

Read/write and percent-encoded, with the split described at username: a
WHATWG instance returns the encoded text, a legacy `url.parse` [object](object.md) the
decoded text. The setter applies the userinfo [encoding](../../module/ifs/encoding.md) (`p@ss:w` becomes
`p%40ss%3Aw`); assigning `''` removes the password, and a URL that keeps a
user name is serialized as `user@host`. The value never includes the
separating colon.

--------------------------
### host
**String, The host of the URL, `hostname[:port]`**

```JavaScript
String UrlObject.host;
```

Read/write; an IPv6 literal keeps its brackets (`[::1]:8080`). The setter
parses the assigned `host[:port]` with the URL rules, so an invalid host
or an out-of-range port is ignored and the previous value is kept. A URL
without an authority (`mailto:`) reports `''`. Legacy objects from
`url.parse` expose the same field.

--------------------------
### hostname
**String, The host name of the URL, without the port**

```JavaScript
String UrlObject.hostname;
```

Read/write. The parser stores the lower-cased ASCII form and converts
internationalized names to the ACE (`xn--`) form; an IPv6 literal includes
its brackets. The setter applies the same conversion (`mañana.com`
becomes `xn--maana-pta.com`) and ignores an invalid value without
throwing. A URL without an authority reports `''`.

--------------------------
### port
**String, The port of the URL as a string**

```JavaScript
String UrlObject.port;
```

Read/write; `''` means the scheme default. The parser drops a port that
equals the default (`[http](../../module/ifs/http.md):80`, `https:443`), and the setter ignores an
invalid value (out of the 0-65535 range or non-numeric), keeping the
current port instead of throwing. Legacy parse objects use `''` where
Node.js uses `null`; Node.js and MDN define the same setter rules.

Example — the default-port rule and an ignored value:

```JavaScript
const myURL = new URL('http://example.com:8080/p');

console.log(myURL.port); // 8080
myURL.port = '80';
console.log(myURL.href); // http://example.com/p

myURL.port = '99999';
console.log(myURL.port); // ''
```

--------------------------
### path
**String, The [path](../../module/ifs/path.md) and query of the URL, `pathname + search`**

```JavaScript
readonly String UrlObject.path;
```

Read-only; assigning is silently ignored. Legacy field kept for Node.js
compatibility: `new URL('http://h/p?a=1#f')` reports `/p?a=1`, the
fragment is not included (read href for the complete string). The WHATWG
URL class of Node.js has no such property; its legacy parse objects do.

--------------------------
### pathname
**String, The [path](../../module/ifs/path.md) part of the URL**

```JavaScript
String UrlObject.pathname;
```

Read/write; it starts with `/` for a URL that has an authority and is
percent-encoded in the serialized URL. Parsing resolves `.`/`..` segments
and keeps repeated slashes; the setter also resolves dot segments and
percent-encodes the text, so `'/a/../b c'` becomes `/b%20c`. A
non-hierarchical scheme stores everything after the colon, so
`data:text/plain,ab` reads back as `text/plain,ab`. Node.js and MDN define
the same behavior.

--------------------------
### search
**String, The query string of the URL, including the leading `?`**

```JavaScript
String UrlObject.search;
```

Read/write; `''` when there is no query. The setter accepts text with or
without the leading `?` and adds one when missing, percent-encodes the
value (a space becomes `%20`) and drops the cached `searchParams`;
assigning `'?'` alone clears the query. fibjs detail: once `searchParams`
has been materialized, the getter returns the [URLSearchParams](URLSearchParams.md)
serialization, which has no leading `?` and encodes a space as `+`, until
`search` or `href` is assigned again.

--------------------------
### query
**Value, The query of the URL as text or as a [URLSearchParams](URLSearchParams.md)**

```JavaScript
Value UrlObject.query;
```

fibjs extension that merges the legacy `query` field with the WHATWG
parameter container. Reading returns `undefined` when the URL has no
query; otherwise the raw query text without the leading `?`, or a
[URLSearchParams](URLSearchParams.md) when the [object](object.md) came from `url.parse([url](../../module/ifs/url.md), true)`.
Assigning a string passes it to `search` (the leading `?` is added and the
text is percent-encoded, a space becoming `%20`); assigning a plain [object](object.md)
serializes its enumerable own properties as `key=value` pairs with the
legacy rules (values through toString(), a space becoming `+`), and an
empty [object](object.md) leaves the current query unchanged. An [object](object.md) that carries
methods, such as a [URLSearchParams](URLSearchParams.md), is serialized property by property as
well - use `searchParams` for parameters. Other values (number, null)
throw `Invalid input data` ([20011]).

--------------------------
### hash
**String, The fragment of the URL, including the leading `#`**

```JavaScript
String UrlObject.hash;
```

Read/write; `''` when there is no fragment. The setter accepts text with
or without the leading `#` and percent-encodes it; assigning `'#'` alone
clears the fragment (it reads back as `''`) while the serialized URL keeps
the trailing `#`, matching the WHATWG and Node.js behavior.

--------------------------
### searchParams
**[URLSearchParams](URLSearchParams.md), The live [URLSearchParams](URLSearchParams.md) view of the URL query**

```JavaScript
readonly URLSearchParams UrlObject.searchParams;
```

Read-only; assigning is silently ignored. Every read returns the same
[URLSearchParams](URLSearchParams.md) [object](object.md). Changing it (append/set/delete/sort) rewrites the
URL on the next serialization of `href`, `search` or `query`, and
assigning `href` or `search` replaces the view. The parameter serializer
writes a space as `+` and re-encodes every key and value, so touching
searchParams can change the query text: `?q=a%20b` serializes as
`?q=a+b`. See [URLSearchParams](URLSearchParams.md) for the parameter API.

Example — mutate the view and observe the URL:

```JavaScript
const myURL = new URL('http://example.com/p?a=1');

myURL.searchParams.append('a', '2');
myURL.searchParams.set('q', 'a b');
console.log(myURL.searchParams.getAll('a')); // [ '1', '2' ]
console.log(myURL.href); // http://example.com/p?a=1&a=2&q=a+b
```

## Methods
        
### resolve
**Resolves a relative URL against this [object](object.md) and returns a new URL [object](object.md)**

```JavaScript
UrlObject UrlObject.resolve(String url);
```

Parameters:
* url: String, relative or absolute URL string to resolve

Returns:
* UrlObject, the new resolved URL [object](object.md)

The receiver is the base and is left unchanged; [url](../../module/ifs/url.md) is resolved with the
WHATWG algorithm and returned as a new UrlObject. An empty [url](../../module/ifs/url.md) returns a
copy of the receiver, an absolute [url](../../module/ifs/url.md) replaces it and a reference such as
`../c` walks the base [path](../../module/ifs/path.md). An unparsable [url](../../module/ifs/url.md) throws
`[url](../../module/ifs/url.md): Invalid URL '<input>'.` ([20024]). Node.js has no method form on its
URL class and the deprecated [module](../../module/ifs/module.md)-level `url.resolve(from, to)` returns
a string instead.

Example — resolve against a base with a [path](../../module/ifs/path.md):

```JavaScript
const base = new URL('https://example.com/a/b');

console.log(base.resolve('./c').href); // https://example.com/a/c
console.log(base.resolve('/d?x=1#top').href); // https://example.com/d?x=1#top
console.log(base.resolve('').href); // https://example.com/a/b
```

--------------------------
### toString
**Returns the string form of the [object](object.md)**

```JavaScript
String UrlObject.toString();
```

Returns:
* String, returns the string form of the [object](object.md)

The base implementation reports an error: a native [object](object.md) has no implicit
text form, and only the classes whose value can be written as a string
override the member. [Buffer](Buffer.md) returns its content decoded with the given
[encoding](../../module/ifs/encoding.md), [HttpCookie](HttpCookie.md) returns "name=value", and so on; an override commonly
accepts optional arguments ([Buffer.toString](Buffer.md#toString) takes [encoding](../../module/ifs/encoding.md), start and
end) that are not part of this declaration.

Calling the member on a class that does not override it throws
"<Class>: the [object](object.md) can not be converted to string.", which is the
behavior to rely on when probing whether a value has a string form. See
toJSON for the serialization hook.

--------------------------
### toJSON
**Returns the JSON representation of the [object](object.md)**

```JavaScript
Value UrlObject.toJSON(String key = "");
```

Parameters:
* key: String, the property name of the value being serialized

Returns:
* Value, returns the JSON-serializable value

JSON.stringify(value) calls value.toJSON(key) when the member exists and
serializes the returned value in its place; the key argument carries the
property name of the value inside its parent [object](object.md) (an empty string at
the top level) and may be used to build a keyed form. The base
implementation returns a plain [object](object.md) holding the readable properties of
the instance, so a native [object](object.md) serializes without per-class code; a
class with a portable shape such as [Buffer](Buffer.md) overrides it, and a JavaScript
class may override it in the same way.

The member is normally reached through JSON.stringify rather than called
directly; calling it returns the same value JSON.stringify would
serialize.

