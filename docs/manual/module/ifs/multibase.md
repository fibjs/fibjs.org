# Module multibase
The multibase [module](module.md) encodes binary data as a self-describing string carrying its codec

prefix, so the encoded value can be decoded without out-of-band information

Main capabilities:

- **Encoding**: `encode` turns a [Buffer](../../object/ifs/Buffer.md) or string into a prefixed string under one of 11 codecs;
- **Decoding**: `decode` reads the prefix and turns the remaining payload back into a [Buffer](../../object/ifs/Buffer.md);
- **Self-describing values**: encoded strings can be stored or transmitted and decoded later
  without carrying the codec separately, unlike the bare [base32](base32.md)/[base58](base58.md)/[base64](base64.md)/[hex](hex.md) forms.

Concepts:

- **Prefix table**: the first character selects the codec. The [module](module.md) implements the following
  11 codecs (name — prefix — payload form):
  - `base16` (`f`) and `base16upper` (`F`) — hexadecimal, lowercase and uppercase;
  - `base32` (`b`) and `base32upper` (`B`) — RFC 4648 base32 without padding;
  - `base32pad` (`c`) and `base32padupper` (`C`) — [base32](base32.md) with `=` padding;
  - `base58btc` (`z`) — [base58](base58.md) with the Bitcoin alphabet;
  - `base64` (`m`) and `base64pad` (`M`) — standard base64 without and with padding;
  - `base64url` (`u`) and `base64urlpad` (`U`) — URL-safe [base64](base64.md) without and with padding.
  Names outside this table, including base1, base2, base8, base10, base32hex, base32z, base36,
  base40, base56 and base58flickr, are rejected with `multibase: unknown codec`.
- **Family-based decoding**: decode only inspects the prefix family, so `f`/`F` are decoded as
  [hex](hex.md), `b`/`B`/`c`/`C` as [base32](base32.md), `m`/`M`/`u`/`U` as [base64](base64.md) and `z` as [base58](base58.md). Padding and letter
  case in the payload are left to the family decoder and are not re-validated.
- **Relation to [base32](base32.md), [base58](base58.md), [base64](base64.md) and [hex](hex.md)**: those modules produce the bare payload, while
  multibase with the same codec prepends exactly one prefix character to that payload, so
  `decode` is their inverse. Use the standalone modules when both sides already agree on the
  [encoding](encoding.md), and multibase when the string must carry the [encoding](encoding.md) with it.
- **String and [Buffer](../../object/ifs/Buffer.md) forms**: encode accepts a [Buffer](../../object/ifs/Buffer.md) or a string (a string contributes its
  utf8 bytes); decode always returns a [Buffer](../../object/ifs/Buffer.md). Codec names are case-sensitive.

Import:

```JavaScript
const {
    encode,
    decode
} = require('multibase');
```

Example 1 — encode and decode a round-trip with the [base32](base32.md) codec:

```JavaScript
const {
    encode,
    decode
} = require('multibase');

const data = Buffer.from('hello');
const encoded = encode(data, 'base32'); // the leading "b" marks base32
console.log(encoded); // bnbswy3dp
console.log(decode(encoded).toString()); // hello
```

Example 2 — the same bytes under several codecs, each with its own prefix:

```JavaScript
const {
    encode
} = require('multibase');

const data = Buffer.from('hello');
for (const codec of ['base16', 'base32', 'base58btc', 'base64', 'base64url'])
    console.log(codec + ': ' + encode(data, codec));
// base16: f68656c6c6f
// base32: bnbswy3dp
// base58btc: zCn8eVZg
// base64: maGVsbG8
// base64url: uaGVsbG8
```

Example 3 — decode a string built with the standalone [base58](base58.md) [module](module.md):

```JavaScript
const {
    decode
} = require('multibase');
const base58 = require('base58');

const encoded = 'z' + base58.encode(Buffer.from('hello')); // "z" marks base58btc
console.log(encoded); // zCn8eVZg
console.log(decode(encoded).toString()); // hello

try {
    decode('x123'); // "x" is not a known prefix
} catch (e) {
    console.log(e.message); // multibase: unknown codec: 'x'.
}
```

Notes:

- A prefix without a payload, such as `decode('b')`, returns an empty [Buffer](../../object/ifs/Buffer.md); an empty string
  has no prefix and throws an unknown-codec error.
- The encoded length is the payload length of the chosen codec plus one prefix character.

## Static Methods
        
### encode
**Encodes data in multibase format**

```JavaScript
static String multibase.encode(Buffer | String data,
    String codec);
```

Parameters:
* data: [Buffer](../../object/ifs/Buffer.md) | String, the data to encode
* codec: String, the codec name, one of the names in the [module](module.md) prefix table

Returns:
* String, returns the prefixed encoded string

The result is the prefix character of codec followed by the payload that the matching codec
produces, so the codec can be recovered from the string alone. data may be a [Buffer](../../object/ifs/Buffer.md) or a
string, where a string contributes its utf8 bytes.

codec is case-sensitive and must be one of base16, base16upper, [base32](base32.md), base32upper,
base32pad, base32padupper, base58btc, [base64](base64.md), base64pad, base64url or base64urlpad; any
other name throws `multibase: unknown codec: '<name>'`. A data argument of any other type
throws a type error. See the [module](module.md) prefix table for the prefix of each codec.

Example — one payload under four codecs:

```JavaScript
const {
    encode
} = require('multibase');

const data = Buffer.from('hello');
console.log(encode(data, 'base16')); // f68656c6c6f
console.log(encode(data, 'base32')); // bnbswy3dp
console.log(encode(data, 'base58btc')); // zCn8eVZg
console.log(encode(data, 'base64pad')); // MaGVsbG8=
```

--------------------------
### decode
**Decodes a string into binary data in multibase format**

```JavaScript
static Buffer multibase.decode(String data);
```

Parameters:
* data: String, the prefixed string to decode

Returns:
* [Buffer](../../object/ifs/Buffer.md), returns the decoded binary data

The codec is read from the first character of data, so no codec argument is needed: f/F are
decoded as [hex](hex.md), b/B/c/C as [base32](base32.md), m/M/u/U as [base64](base64.md) and z as [base58](base58.md). The exact variant
(padding, letter case) is left to the family decoder and is not re-validated.

A string that starts with any other character, including an empty string, throws
`multibase: unknown codec: '<char>'`; a prefix without a payload returns an empty [Buffer](../../object/ifs/Buffer.md).

Example — decode the output of the standalone [base64](base64.md) [module](module.md):

```JavaScript
const {
    decode
} = require('multibase');
const base64 = require('base64');

const encoded = base64.encode(Buffer.from('hello')); // aGVsbG8
const data = decode('m' + encoded); // the "m" prefix marks base64
console.log(data.toString()); // hello
```

