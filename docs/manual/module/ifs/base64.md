# Module base64
The base64 [module](module.md) encodes binary data with the RFC 4648 alphabet, URL-safe or not

Main capabilities:

- **Encoding**: `encode` turns a [Buffer](../../object/ifs/Buffer.md) or a string into base64 text, standard or
  URL-safe;
- **Decoding**: `decode` turns base64 text back into a [Buffer](../../object/ifs/Buffer.md).

Concepts:

- **Alphabet and padding**: standard base64 maps six bits to one character of
  A-Z a-z 0-9 + / and pads the last group with "=" so that the text length is a multiple
  of 4. With [url](url.md) = true the encoder switches to - and _ and omits the padding, which keeps
  the text usable in URLs, query strings and file names without escaping.
- **Decoding both forms**: `decode` accepts "+" and "-" as the same character and "/" and
  "_" as the same character; padding is optional and characters outside the alphabet are
  skipped instead of rejected, so the standard and URL-safe forms decode with one call and
  a string with stray whitespace still decodes.
- **Relation to [Buffer](../../object/ifs/Buffer.md)**: `base64.encode(data)` equals data.toString('base64') and
  `decode` accepts everything [Buffer.from](../../object/ifs/Buffer.md#from)(str, 'base64url') accepts; the [module](module.md) is the
  functional form for code that does not hold a [Buffer](../../object/ifs/Buffer.md) method call.
- **Relation to [multibase](multibase.md)**: the base64, base64pad, base64url and base64urlpad codecs of
  the [multibase](multibase.md) [module](module.md) are these payloads behind one prefix character.
- **Not encryption**: base64 is reversible without a key, so it hides nothing and must
  not be used to protect data.

Import:

```JavaScript
const base64 = require('base64');
```

Example 1 — encode and decode standard base64 text:

```JavaScript
const base64 = require('base64');

const data = Buffer.from('hello, world');
console.log(base64.encode(data)); // aGVsbG8sIHdvcmxk
console.log(base64.decode('aGVsbG8sIHdvcmxk').toString()); // hello, world
```

Example 2 — the URL-safe variant of two bytes that need "+" and "/" in standard form:

```JavaScript
const base64 = require('base64');

const data = Buffer.from([0xfb, 0xff]);
console.log(base64.encode(data)); // +/8=
console.log(base64.encode(data, true)); // -_8
console.log(base64.decode('-_8').toString('hex')); // fbff
```

Notes:

- `decode` never reports malformed input: an empty or fully invalid string returns an
  empty [Buffer](../../object/ifs/Buffer.md); use a stricter parser when the text must be validated.
- Node.js exposes base64 through [Buffer](../../object/ifs/Buffer.md) encodings rather than a [module](module.md); fibjs also
  accepts the alias `encoding.encode(data, 'base64url')` for the URL-safe form.

## Static Methods
        
### encode
**Encodes data in base64 format**

```JavaScript
static String base64.encode(Buffer | String data,
    Boolean url = false);
```

Parameters:
* data: [Buffer](../../object/ifs/Buffer.md) | String, the data to encode
* url: Boolean, specifies whether to use [url](url.md)-safe character [encoding](encoding.md)

Returns:
* String, returns the encoded string

data may be a [Buffer](../../object/ifs/Buffer.md) or a string; a string is encoded as utf8. Without [url](url.md) the
standard alphabet (A-Z a-z 0-9 + /) is used and the result is padded with "=" to a
multiple of four; with [url](url.md) the URL-safe alphabet (- and _) is used and no padding is
added.

Example — the same two bytes in both forms:

```JavaScript
const base64 = require('base64');

const data = Buffer.from([0xfb, 0xff]);
console.log(base64.encode(data)); // +/8=
console.log(base64.encode(data, true)); // -_8
```

--------------------------
### decode
**Decodes a string into binary data in base64 format**

```JavaScript
static Buffer base64.decode(String data);
```

Parameters:
* data: String, the string to decode

Returns:
* [Buffer](../../object/ifs/Buffer.md), returns the decoded binary data

     The padding of the last group is optional and both alphabets are accepted in the same
     call: "+" and "-" decode alike, as do "/" and "_". Characters outside the alphabet,
     including whitespace, are ignored, so an empty or fully invalid string returns an
     empty [Buffer](../../object/ifs/Buffer.md) instead of reporting the malformed input.

     Example — padded, unpadded and URL-safe text:

```JavaScript
const base64 = require('base64');

console.log(base64.decode('aGVsbG8=').toString()); // hello
console.log(base64.decode('aGVsbG8').toString()); // hello
console.log(base64.decode('-_8').toString('hex')); // fbff
```

