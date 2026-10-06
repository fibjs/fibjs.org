# Module string_decoder
Node.js-compatible alias [module](module.md) whose single export is the [StringDecoder](../../object/ifs/StringDecoder.md) class

The [module](module.md) exists so that Node.js code doing `require('string_decoder')` keeps working:
it exports the same class as the [StringDecoder](../../object/ifs/StringDecoder.md) interface, reachable as
`require('string_decoder').[StringDecoder](../../object/ifs/StringDecoder.md)` and also as
`require('node:string_decoder').[StringDecoder](../../object/ifs/StringDecoder.md)`. There is no [global](global.md) `[StringDecoder](../../object/ifs/StringDecoder.md)`, and
the [encoding](encoding.md) [module](module.md) does not export the class; that [module](module.md) provides the whole-buffer
codecs only.

Concepts:

- **Streaming decode**: [StringDecoder](../../object/ifs/StringDecoder.md) converts a byte stream into text incrementally,
  holding the incomplete tail of a multibyte character until the next chunk; see the
  [StringDecoder](../../object/ifs/StringDecoder.md) interface for the chunk-boundary model and the per-[encoding](encoding.md) state.
- **Node compatibility**: the [module](module.md) name, the export name and the chunk semantics
  match Node.js; the error [types](types.md) and the behavior of calling `end` twice differ, see the
  [StringDecoder](../../object/ifs/StringDecoder.md) interface notes.

Import:

```JavaScript
const {
    StringDecoder
} = require('string_decoder');
```

Example 1 — decode a utf8 stream whose chunk boundary splits a character:

```JavaScript
const {
    StringDecoder
} = require('string_decoder');

const decoder = new StringDecoder('utf8');
console.log(decoder.write(Buffer.from([0xe4, 0xb8]))); // ''
console.log(decoder.write(Buffer.from([0xad]))); // 中
console.log(decoder.end()); // ''
```

Example 2 — feed one byte at a time and flush with end:

```JavaScript
const {
    StringDecoder
} = require('string_decoder');

const bytes = Buffer.from('a中👍', 'utf8');
const decoder = new StringDecoder('utf8');

let text = '';
for (let i = 0; i < bytes.length; i++)
    text += decoder.write(bytes.slice(i, i + 1));

console.log(text + decoder.end()); // a中👍
```

## Objects
        
### StringDecoder
**The [StringDecoder](../../object/ifs/StringDecoder.md) class; see the [StringDecoder](../../object/ifs/StringDecoder.md) interface for details**

```JavaScript
StringDecoder string_decoder.StringDecoder;
```

This single export is the class itself: create an instance with `new` and choose the [encoding](encoding.md) of the stream at construction, as in `new [StringDecoder](../../object/ifs/StringDecoder.md)('utf8')`. The class is exported rather than a ready-made instance because a decoder carries the state of one stream, so every stream needs its own [object](../../object/ifs/object.md).

