# Module encoding
The `encoding` [module](module.md) is fibjs's byte-and-text conversion toolbox: it converts between [Buffer](../../object/ifs/Buffer.md) bytes and JavaScript strings in the representations used by files, network protocols and storage formats, going beyond the encodings that [Buffer](../../object/ifs/Buffer.md) alone provides

Main capabilities:

- **Binary-to-text codecs**: `encode` and `decode` handle `hex`, `base32`, `base58`,
  `base64` and `base64url` in one call, and the same codecs are exported as the
  `base32`, `base58`, `base64`, `hex` and `multibase` submodules;
- **Charset conversion**: any charset available from ICU can be named as a codec, such
  as `gbk`, `big5`, `shift_jis`, `euc-jp`, `koi8-r`, `iso-8859-*` and `windows-125*`;
- **Unicode codecs**: `utf8`, `utf16le`/`ucs2`, `utf16be`, `utf32*`, `ascii` and
  `binary`/`latin1` turn raw bytes into text and back;
- **Structured data**: the `json` and `msgpack` members reference the json and msgpack
  modules;
- **Escaping**: `jsstr` escapes a string for embedding in JavaScript source, while
  `encodeURI`, `encodeURIComponent` and `decodeURI` percent-encode and decode URLs;
- **Support queries**: `isEncoding` reports whether a codec label is usable, including
  whether the runtime ICU data provides a charset.

Concepts:

- **Two sides of a conversion**: a JavaScript string is a sequence of Unicode code
  points while a [Buffer](../../object/ifs/Buffer.md) is a sequence of bytes. `encode` always turns bytes into text
  and `decode` always turns text into bytes; the codec describes how the bytes are
  represented, and both directions share the same codec names.
- **[Buffer](../../object/ifs/Buffer.md) codecs**: the names in the `utf8`, `hex`, `base32`, `base58`, `base64`,
  `base64url`, `ascii`, `binary`/`latin1` and `utf16*`/`utf32*` families are converted
  natively. `base64url` uses the URL-safe alphabet (`-` and `_` instead of `+` and
  `/`); `ascii` clears the high bit of every byte; `binary` and `latin1` map byte
  values to code points 0-255.
- **Charset codecs**: any other label is resolved through the ICU converter library, so
  the exact list depends on the ICU data built into the binary. `isEncoding` is the
  runtime probe; encode/decode throw on an unknown label instead of returning a partial
  result.
- **Relationship to [Buffer](../../object/ifs/Buffer.md)**: `buf.toString(codec)` and `Buffer.from(str, codec)` are
  the [Buffer](../../object/ifs/Buffer.md)-native form of the same conversions and are preferable inside buffer-heavy
  code; the encoding [module](module.md) adds the BASE32/BASE58 codecs, the [module](module.md)-[object](../../object/ifs/object.md) form and
  the explicit direction of `encode`/`decode`. The dedicated
  [base32](base32.md)/[base58](base58.md)/[base64](base64.md)/[hex](hex.md)/[multibase](multibase.md) modules are the same objects as the members here,
  so pick one form instead of converting between them.
- **Whole-buffer versus streaming**: a codec applied to a whole [Buffer](../../object/ifs/Buffer.md) cannot assemble
  a multibyte character that was split across chunks; when chunks arrive separately
  use the [string_decoder](string_decoder.md) [module](module.md), which keeps the incomplete tail between calls.

Import:

```JavaScript
const encoding = require('encoding');
```

Example 1 — encode bytes as text and decode text back to bytes:

```JavaScript
const encoding = require('encoding');

const bytes = Buffer.from('abc', 'utf8');

console.log(encoding.encode(bytes, 'hex')); // 616263
console.log(encoding.encode(bytes, 'base64')); // YWJj
console.log(encoding.encode(bytes, 'base58')); // ZiCa

console.log(encoding.decode('616263', 'hex').toString()); // abc
console.log(encoding.decode('YWJj', 'base64').toString()); // abc
```

Example 2 — convert text to a GBK byte stream and back:

```JavaScript
const encoding = require('encoding');

// decode turns text into the bytes of the named charset
const gbk = encoding.decode('你好', 'gbk');
console.log(gbk.hex()); // c4e3bac3

// encode interprets the bytes of that charset and returns text
console.log(encoding.encode(gbk, 'gbk')); // 你好
```

Example 3 — escape a message for JavaScript source and for a URL:

```JavaScript
const encoding = require('encoding');

console.log(encoding.jsstr("it's a\nnew line")); // it\'s a\nnew line

const query = encoding.encodeURIComponent('user name&role=admin');
console.log(query); // user%20name%26role%3Dadmin

// encodeURI keeps the URL structure characters unescaped
console.log(encoding.encodeURI('/search?q=a b#top')); // /search?q=a%20b#top
console.log(encoding.decodeURI('/search?q=a%20b#top')); // /search?q=a b#top
```

Notes:

- The [module](module.md) is a fibjs extension: Node.js has no `encoding` [module](module.md) and spreads these
  helpers over `Buffer`, `url` and `querystring`. The shared conversions behave like
  their [Buffer](../../object/ifs/Buffer.md) counterparts: `encoding.encode(data, codec)` matches `data.toString(codec)`
  and `encoding.decode(str, codec)` matches `Buffer.from(str, codec)`.
- A string argument is first converted to its utf8 bytes, so when the input is not utf8
  pass a [Buffer](../../object/ifs/Buffer.md); for a charset codec a string argument would be reinterpreted as that
  charset and can produce mojibake.
- Charset conversion depends on the ICU data in the build; `isEncoding` reports what is
  actually available.

## Objects
        
### base32
**Base32 encoding and decoding [module](module.md)**

```JavaScript
base32 encoding.base32;
```

The same [object](../../object/ifs/object.md) as `require('[base32](base32.md)')`, provided as a member so that every codec can
be reached from one [module](module.md). `encode` accepts a [Buffer](../../object/ifs/Buffer.md) or a utf8 string and returns
the Base32 text; `decode` returns a [Buffer](../../object/ifs/Buffer.md). See the [base32](base32.md) [module](module.md) for the alphabet
and padding details.

--------------------------
### base64
**Base64 encoding and decoding [module](module.md)**

```JavaScript
base64 encoding.base64;
```

The same [object](../../object/ifs/object.md) as `require('[base64](base64.md)')`. `encode(data, [url](url.md))` returns standard Base64
when [url](url.md) is false and the URL-safe alphabet (`-` and `_`) when it is true; `decode`
accepts both alphabets and tolerates missing padding and whitespace.
`encoding.encode(data, 'base64url')` is the one-call form of the URL-safe variant.

--------------------------
### base58
**Base58 encoding and decoding [module](module.md)**

```JavaScript
base58 encoding.base58;
```

The same [object](../../object/ifs/object.md) as `require('[base58](base58.md)')`. Base58 omits the characters `0`, `O`, `I`
and `l` that are easy to confuse when a value is transcribed by hand, which is why
Bitcoin addresses use it. The optional check version of encode/decode adds and
verifies the Base58Check checksum.

--------------------------
### hex
**Hexadecimal encoding and decoding [module](module.md)**

```JavaScript
hex encoding.hex;
```

The same [object](../../object/ifs/object.md) as `require('[hex](hex.md)')`. `encode` renders every byte as two lowercase
hexadecimal digits; `decode` ignores characters that are not hexadecimal digits, so
separators and whitespace in the input do not have to be removed first.

--------------------------
### multibase
**Multibase encoding and decoding [module](module.md)**

```JavaScript
multibase encoding.multibase;
```

The same [object](../../object/ifs/object.md) as `require('[multibase](multibase.md)')`. Multibase prepends a one-character prefix
that identifies the inner codec (`f` for base16, `b` for [base32](base32.md), `m` for [base64](base64.md),
`z` for base58btc, and so on) so that a decoder can recover the format from the
string itself; see the [multibase](multibase.md) [module](module.md) for the full prefix table.

--------------------------
### json
**JSON encoding and decoding [module](module.md)**

```JavaScript
json encoding.json;
```

The same [object](../../object/ifs/object.md) as `require('[json](json.md)')`, provided here so that an application can reach
every serialization format from the encoding [module](module.md). `encode` serializes a value
into a JSON string and `decode` parses one back; see the [json](json.md) [module](module.md) for the exact
semantics.

--------------------------
### msgpack
**Msgpack encoding and decoding [module](module.md)**

```JavaScript
msgpack encoding.msgpack;
```

The same [object](../../object/ifs/object.md) as `require('[msgpack](msgpack.md)')`. Msgpack is a binary interchange format that
is usually more compact and faster to parse than JSON; `encode` returns a [Buffer](../../object/ifs/Buffer.md) and
`decode` restores the value. See the [msgpack](msgpack.md) [module](module.md) for the supported [types](types.md).

## Static Methods
        
### isEncoding
**Determines whether the specified encoding is supported**

```JavaScript
static Boolean encoding.isEncoding(String codec);
```

Parameters:
* codec: String, the encoding label, such as "utf8", "[base64](base64.md)" or "gbk"

Returns:
* Boolean, whether the label names a usable codec

The probe covers both codec families: the built-in [Buffer](../../object/ifs/Buffer.md) codecs and the charsets
the runtime ICU data provides. Label matching is case-insensitive and ASCII
whitespace inside the label is ignored, so `'UTF-8'`, `'utf8 '` and `'ut f8'` all
report true; `Buffer.isEncoding` is deliberately stricter and rejects whitespace, so
the two helpers can disagree. A non-string argument is a TypeError.

Example — list the supported codec families:

```JavaScript
const encoding = require('encoding');

['utf8', 'hex', 'base32', 'base64url', 'latin1'].forEach((codec) => {
    console.log(codec, encoding.isEncoding(codec));
});

console.log(encoding.isEncoding('gbk')); // true, an ICU charset
console.log(encoding.isEncoding('no-such-charset')); // false
```

--------------------------
### encode
**Converts bytes into the text representation selected by the codec**

```JavaScript
static String encoding.encode(Buffer | String data,
    String codec = "utf8");
```

Parameters:
* data: [Buffer](../../object/ifs/Buffer.md) | String, the bytes to convert: a [Buffer](../../object/ifs/Buffer.md), or a string whose utf8 bytes are used
* codec: String, the codec name, a [Buffer](../../object/ifs/Buffer.md) codec or an ICU charset label, default "utf8"

Returns:
* String, the text representation of the bytes

The direction is bytes to text: data is treated as raw bytes and the result is the
string form of those bytes under codec. For the [Buffer](../../object/ifs/Buffer.md) codecs (`hex`, `base32`,
`base58`, `base64`, `base64url`, `ascii`, `binary`/`latin1`) the bytes are simply
re-represented; for a charset codec the bytes are decoded from that charset into
Unicode text. A string argument is first converted to its utf8 bytes, so pass a
[Buffer](../../object/ifs/Buffer.md) when the input is not utf8 text. An unknown codec throws an Error with
number 20024.

Example — the same bytes under several codecs:

```JavaScript
const encoding = require('encoding');

const bytes = Buffer.from('abc', 'utf8');
console.log(encoding.encode(bytes, 'hex')); // 616263
console.log(encoding.encode(bytes, 'base32')); // mfrgg
console.log(encoding.encode(bytes, 'base64')); // YWJj
console.log(encoding.encode(bytes)); // abc, the default utf8 codec
```

--------------------------
### decode
**Converts text into bytes according to the codec**

```JavaScript
static Buffer encoding.decode(String str,
    String codec = "utf8");
```

Parameters:
* str: String, the text to convert
* codec: String, the codec name, a [Buffer](../../object/ifs/Buffer.md) codec or an ICU charset label, default "utf8"

Returns:
* [Buffer](../../object/ifs/Buffer.md), the bytes of the text in the requested codec

The direction is text to bytes: the returned [Buffer](../../object/ifs/Buffer.md) holds the bytes the codec
assigns to the string. With the default `utf8` codec the result is the utf8
encoding of the string; with `hex`, `base32`, `base58`, `base64` and `base64url`
the textual representation is parsed back into the bytes it stands for; with a
charset codec the text is encoded into that charset, which is the way to prepare
data for a legacy system. The textual codecs are lenient about trailing or invalid
characters. An unknown codec throws an Error with number 20024.

Example — text back to bytes, including a charset:

```JavaScript
const encoding = require('encoding');

console.log(encoding.decode('616263', 'hex').toString()); // abc
console.log(encoding.decode('YWJj', 'base64').toString()); // abc
console.log(encoding.decode('abc').toString()); // abc, the default utf8 codec

const gbk = encoding.decode('你好', 'gbk');
console.log(gbk.hex()); // c4e3bac3
```

--------------------------
### jsstr
**Escapes a string so that it can be embedded in JavaScript source**

```JavaScript
static String encoding.jsstr(String str,
    Boolean json = false);
```

Parameters:
* str: String, the string to escape
* json: Boolean, whether to leave the single quote unescaped for JSON compatibility, default false

Returns:
* String, the escaped string

The characters backslash, carriage return, line feed, tab and double quote are
replaced with their backslash escapes; when [json](json.md) is true the single quote is left
as it is, which makes the result valid inside a JSON string. Other characters,
including non-ASCII text and other control characters, are copied unchanged, so the
result is not a complete string literal on its own.

Example — escape a multi-line message for generated code:

```JavaScript
const encoding = require('encoding');

const message = 'first line\nsecond line';
console.log(encoding.jsstr(message)); // first line\nsecond line
console.log(encoding.jsstr("it's", true)); // it's, JSON-compatible
console.log('const msg = \'' + encoding.jsstr(message) + '\';');
```

--------------------------
### encodeURI
**Percent-encodes a URL, leaving its structure characters intact**

```JavaScript
static String encoding.encodeURI(String url);
```

Parameters:
* url: String, the URL to encode

Returns:
* String, the percent-encoded URL

Characters that are not allowed in a URL are written as `%XX` (utf8 bytes,
uppercase [hex](hex.md)), but the characters that give a URL its structure stay literal, for
example `/`, `?`, `=`, `&`, `#` and `:`. Use it for a complete URL; use
`encodeURIComponent` for a single query value. `decodeURI` reverses both `%XX` and
`%uXXXX` sequences.

Example — encode a full URL and decode it back:

```JavaScript
const encoding = require('encoding');

const url = '/search?q=a b#top';
console.log(encoding.encodeURI(url)); // /search?q=a%20b#top
console.log(encoding.decodeURI('/search?q=a%20b#top')); // /search?q=a b#top
```

--------------------------
### encodeURIComponent
**Percent-encodes a string for use as one URL component**

```JavaScript
static String encoding.encodeURIComponent(String url,
    Boolean formEncoded = false);
```

Parameters:
* url: String, the string to encode
* formEncoded: Boolean, whether to encode in application/x-www-form-urlencoded form, default false

Returns:
* String, the percent-encoded string

Everything except the unreserved characters and `!'()*` is percent-encoded, so the
`/`, `&`, `?`, `=` and `#` characters that are part of the value cannot break the
surrounding URL. When formEncoded is true a space becomes `+` instead of `%20`, the
application/x-www-form-urlencoded convention.

Example — encode a query value, in both component forms:

```JavaScript
const encoding = require('encoding');

console.log(encoding.encodeURIComponent('user name')); // user%20name
console.log(encoding.encodeURIComponent('user name', true)); // user+name
console.log(encoding.encodeURIComponent('中')); // %E4%B8%AD
```

--------------------------
### decodeURI
**Decodes a percent-encoded string**

```JavaScript
static String encoding.decodeURI(String url);
```

Parameters:
* url: String, the string to decode

Returns:
* String, the decoded string

Both `%XX` byte escapes and `%uXXXX`/`\uXXXX` code point escapes are decoded, so
strings produced by `escape()` are accepted as well. A `+` is left unchanged because
the function does not know whether the input is form data; use the [querystring](querystring.md)
[module](module.md) when `+` must become a space.

