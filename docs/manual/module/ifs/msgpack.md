# Module msgpack
The msgpack [module](module.md) serializes values to the MessagePack binary format and back

Main capabilities:

- **Encoding**: `encode` turns a value into a [Buffer](../../object/ifs/Buffer.md) of MessagePack bytes;
- **Decoding**: `decode` parses MessagePack bytes, a [Buffer](../../object/ifs/Buffer.md) or a string read as utf8,
  back into a value.

Concepts:

- **Type mapping**: encode and decode agree on the following mapping:
  - null and undefined become nil, which decodes to null;
  - Number values that are integers are stored as int64/uint64, all other numbers as
    float64;
  - BigInt is truncated to an int64;
  - String becomes str; [Buffer](../../object/ifs/Buffer.md) and Uint8Array become bin and decode back to a [Buffer](../../object/ifs/Buffer.md);
  - Array and Set become array (a Set loses its type); a plain [object](../../object/ifs/object.md) and Map become map
    (own enumerable properties in the first case);
  - Date becomes the timestamp extension and decodes back to a Date;
  - an [object](../../object/ifs/object.md) that defines toJSON is encoded through it, as with [json](json.md).
- **Numbers**: integers beyond the safe range come back as BigInt (for example 2 ** 60);
  values that do not fit a 64-bit integer are encoded as float64 and lose precision.
- **Functions and map keys**: function-valued properties are skipped and a top-level
  function makes encode fail. encode keeps every key of a Map, but decode rebuilds a
  plain [object](../../object/ifs/object.md) from string keys only and drops the other keys.
- **Damaged input is silent**: bytes that are not MessagePack, an empty [Buffer](../../object/ifs/Buffer.md), or a
  valid value followed by trailing bytes make decode return undefined instead of
  throwing.
- **Extension [types](types.md)**: Date is the only extension encode produces; decode turns every
  other extension into a [Buffer](../../object/ifs/Buffer.md) holding its raw bytes.
- **Relation to [json](json.md)**: MessagePack carries the same value model in a compact binary
  form, so it is faster to produce and parse and smaller for numeric and binary data;
  `encoding.msgpack` reaches the same [module](module.md) through the [encoding](encoding.md) dispatcher.

Import:

```JavaScript
const msgpack = require('msgpack');
```

Example 1 — round-trip a mixed value:

```JavaScript
const msgpack = require('msgpack');

const data = {
    list: [1, 2.5, true, null],
    name: 'fibjs'
};
const packed = msgpack.encode(data);
console.log(Buffer.isBuffer(packed)); // true
console.log(packed.toString('hex'));
// 82a46c6973749401cb4004000000000000c3c0a46e616d65a56669626a73
console.log(msgpack.decode(packed).name); // fibjs
```

Example 2 — [Buffer](../../object/ifs/Buffer.md) and Date keep their type through the round-trip:

```JavaScript
const msgpack = require('msgpack');

const back = msgpack.decode(msgpack.encode({
    data: Buffer.from('ab'),
    at: new Date(0)
}));
console.log(Buffer.isBuffer(back.data)); // true
console.log(back.data.toString()); // ab
console.log(back.at.toISOString()); // 1970-01-01T00:00:00.000Z
```

Example 3 — damaged input decodes to undefined instead of throwing:

```JavaScript
const msgpack = require('msgpack');

console.log(msgpack.decode(Buffer.from('not msgpack'))); // undefined
console.log(msgpack.decode(Buffer.alloc(0))); // undefined
```

Notes:

- The format itself is interoperable; only the JavaScript mapping above, in particular
  the BigInt and Map-key handling, is fibjs-specific. Node.js has no msgpack in its
  standard library.
- `decode` returns undefined for a valid value with trailing bytes; slice the input to one
  value when the data comes from a stream.

## Static Methods
        
### encode
**Encodes a variable in msgpack format**

```JavaScript
static Buffer msgpack.encode(Value data);
```

Parameters:
* data: Value, the variable to encode

Returns:
* [Buffer](../../object/ifs/Buffer.md), returns the encoded binary data

     The value is written as one MessagePack value and returned as a [Buffer](../../object/ifs/Buffer.md); see the
     [module](module.md) type-mapping list for the wire form of each JavaScript type. undefined and
     null both become nil. function-valued properties of objects are skipped, while a
     top-level function or a circular structure makes the call fail.

     Example — integers keep their integer form when they fit:

```JavaScript
const msgpack = require('msgpack');

console.log(msgpack.encode(1).toString('hex')); // 01
console.log(msgpack.encode(-300).toString('hex')); // d1fed4
console.log(msgpack.encode(2 ** 60).toString('hex')); // cf1000000000000000
```

--------------------------
### decode
**Decodes a string into a variable using msgpack**

```JavaScript
static Value msgpack.decode(Buffer | String data);
```

Parameters:
* data: [Buffer](../../object/ifs/Buffer.md) | String, the data to decode

Returns:
* Value, returns the decoded variable

data may be a [Buffer](../../object/ifs/Buffer.md) or a string; a string is encoded as utf8 first. The first
MessagePack value of data is parsed: integers beyond the safe range become BigInt,
bin becomes a [Buffer](../../object/ifs/Buffer.md), the timestamp extension becomes a Date, other extensions become
raw Buffers, and maps are rebuilt as plain objects with their string keys only. Bytes
that do not parse, or trailing bytes after the value, make the call return undefined
instead of throwing.

Example — [types](types.md) on the way back and the undefined result of damaged input:

```JavaScript
const msgpack = require('msgpack');

console.log(msgpack.decode(msgpack.encode(Buffer.from('ab'))).toString()); // ab
console.log(String(msgpack.decode(msgpack.encode(2 ** 60)))); // 1152921504606846976
console.log(msgpack.decode(Buffer.from([0xc1]))); // undefined
```

