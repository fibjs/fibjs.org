# Module base32
The base32 [module](module.md) encodes binary data with the RFC 4648 base32 alphabet

Main capabilities:

- **Encoding**: `encode` turns a [Buffer](../../object/ifs/Buffer.md) or a string into base32 text;
- **Decoding**: `decode` turns base32 text back into a [Buffer](../../object/ifs/Buffer.md).

Concepts:

- **Alphabet**: base32 writes five bits per character with the alphabet A-Z plus 2-7.
  fibjs emits it in lower case, so `encode` output is lower case, while `decode` accepts
  both cases.
- **No padding**: the canonical RFC 4648 form pads the last group with "=" so that the
  text length is a multiple of 8. `encode` never adds padding and `decode` ignores "="
  wherever it appears, so the padded output of other tools is accepted as well.
- **Lenient decoding**: characters outside the alphabet, including whitespace, are
  skipped, and "0"/"1" are accepted as aliases of "o"/"l". The bytes are built from the
  bits seen so far, so an incomplete final group loses its trailing bits and no string
  input makes the call fail.
- **Size**: one character carries five bits, so the text is about 8/5 the size of the
  input; [base64](base64.md) is the more compact alternative when the alphabet does not matter.
- **Relation to [multibase](multibase.md)**: the base32, base32upper, base32pad and base32padupper codecs
  of the [multibase](multibase.md) [module](module.md) are this payload behind one prefix character.

Import:

```JavaScript
const base32 = require('base32');
```

Example 1 — encode and decode a piece of text:

```JavaScript
const base32 = require('base32');

const data = Buffer.from('NODE');
const encoded = base32.encode(data);
console.log(encoded); // jzhuiri
console.log(base32.decode(encoded).toString()); // NODE
```

Example 2 — decode the upper-case, padded form written by RFC 4648 tools:

```JavaScript
const base32 = require('base32');

// "JZHUIRI=" is the canonical RFC 4648 encoding of the same four bytes
console.log(base32.decode('JZHUIRI=').toString()); // NODE
console.log(base32.decode('jz hu iri!').toString()); // NODE
```

Notes:

- The [module](module.md) has no options and no streaming interface; a non-string input to `decode`
  throws a type error, while any string is accepted by the lenient rules above.
- Node.js has no base32 in its standard library; in fibjs the same payload is also
  reachable through `encoding.encode(data, 'base32')`.

## Static Methods
        
### encode
**Encodes data in base32 format**

```JavaScript
static String base32.encode(Buffer | String data);
```

Parameters:
* data: [Buffer](../../object/ifs/Buffer.md) | String, the data to encode

Returns:
* String, returns the encoded string

data may be a [Buffer](../../object/ifs/Buffer.md) or a string; a string is encoded as utf8. The result uses the
lower-case alphabet and has no "=" padding: an n-byte input produces
ceil(n * 8 / 5) characters, so the length is not a multiple of 8 in general.

Example — one and two bytes:

```JavaScript
const base32 = require('base32');

console.log(base32.encode(Buffer.from([0xff]))); // 74
console.log(base32.encode(Buffer.from([0xff, 0xff]))); // 777q
```

--------------------------
### decode
**Decodes a string into binary data in base32 format**

```JavaScript
static Buffer base32.decode(String data);
```

Parameters:
* data: String, the string to decode

Returns:
* [Buffer](../../object/ifs/Buffer.md), returns the decoded binary data

     Upper- and lower-case letters, the digits 2-7 and the aliases "0" for "o" and "1"
     for "l" are accepted; every other character, including "=" and whitespace, is
     skipped. The length is not validated: the bytes formed by the available bits are
     returned and an incomplete trailing group is dropped, so a malformed string decodes
     to whatever it spells instead of throwing.

     Example — padded input from another tool and a single-byte payload:

```JavaScript
const base32 = require('base32');

console.log(base32.decode('JZHUIRI=').toString()); // NODE
console.log(base32.decode('74').toString('hex')); // ff
```

