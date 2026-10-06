# Module zlib_constants
The zlib_constants [module](module.md) enumerates the [constants](constants.md) of the [zlib](zlib.md) library bundled

with fibjs: flush codes, status and error codes, compression levels, strategies, window
and memory bounds, codec type ids, and the library version

The [module](module.md) is not requireable on its own; load it through the `constants` property of the
[zlib](zlib.md) [module](module.md). The values describe the [zlib](zlib.md) C library version 1.3.1 linked into this build
and are accepted by the `flush`, `level`, `windowBits`, `memLevel` and `strategy`
parameters of the compression classes; the codec type ids (`DEFLATE`, `GZIP`, ...) mirror
Node.js's [zlib.constants](zlib.md#constants).

Concepts:

- **Flush modes**: Z_NO_FLUSH lets the compressor buffer and decide when to emit;
  Z_PARTIAL_FLUSH emits the pending output at a partial-block boundary; Z_SYNC_FLUSH emits
  all pending output aligned to a byte boundary and keeps the compression dictionary, so
  the peer can decode the piece immediately; Z_FULL_FLUSH additionally resets the
  dictionary, so decompression can restart from that point; Z_BLOCK stops at the next
  deflate block boundary; Z_FINISH ends the stream and writes the trailer.
- **Status and error codes**: Z_OK (0) and Z_STREAM_END (1) are success states; Z_NEED_DICT
  asks for a preset dictionary; the negative values (Z_ERRNO, Z_STREAM_ERROR, Z_DATA_ERROR,
  Z_MEM_ERROR, Z_BUF_ERROR, Z_VERSION_ERROR) are [zlib](zlib.md) return codes. A failed call throws an
  Error whose `code` is the status name, for example 'Z_DATA_ERROR'; the numeric constant
  is the [zlib](zlib.md) return value, not the error number.
- **Levels and strategies**: Z_NO_COMPRESSION (0) to Z_BEST_COMPRESSION (9) trade speed for
  size and Z_DEFAULT_COMPRESSION (-1) lets [zlib](zlib.md) choose (level 6 today). Z_DEFAULT_STRATEGY
  suits ordinary data, Z_FILTERED favors data produced by a filter, Z_HUFFMAN_ONLY and
  Z_RLE restrict LZ matching, and Z_FIXED disables dynamic Huffman codes.
- **Bounds**: Z_MIN_WINDOWBITS through Z_MAX_WINDOWBITS and Z_MIN_MEMLEVEL through
  Z_MAX_MEMLEVEL bound the codec options; Z_MIN_CHUNK, Z_MAX_CHUNK (-1 means unlimited in
  fibjs, Node.js reports Infinity) and Z_DEFAULT_CHUNK describe chunk sizes.
- **Where options apply**: the codec classes (`new [zlib.Deflate](zlib.md#Deflate)(...)`, `new [zlib.Gzip](zlib.md#Gzip)(...)`
  and the rest) read level, windowBits, memLevel and strategy; the one-shot functions only
  read level, so pass the other options to a codec instance.

Import:

```JavaScript
const constants = require('zlib').constants;
```

Example 1 — flush control on a streaming codec:

```JavaScript
const zlib = require('zlib');
const C = zlib.constants;

// _processChunk(data, flushFlag) drives one codec step at a time.
const deflate = new zlib.Deflate();
const head = deflate._processChunk('hello ', C.Z_NO_FLUSH); // header only
const middle = deflate._processChunk('world', C.Z_SYNC_FLUSH); // decodable piece
const tail = deflate._processChunk('', C.Z_FINISH); // trailer

console.log(head.length, middle.length, tail.length); // 2 17 6
const packed = Buffer.concat([head, middle, tail]);
console.log(zlib.inflate(packed).toString()); // hello world
```

Example 2 — compression levels:

```JavaScript
const zlib = require('zlib');
const C = zlib.constants;
const text = 'abc'.repeat(1000);

// Z_NO_COMPRESSION stores, Z_BEST_COMPRESSION spends CPU to shrink.
const stored = zlib.deflate(text, {
    level: C.Z_NO_COMPRESSION
});
const packed = zlib.deflate(text, {
    level: C.Z_BEST_COMPRESSION
});
console.log(stored.length > packed.length); // true

// Without a level the one-shot uses Z_DEFAULT_COMPRESSION (-1).
console.log(C.Z_DEFAULT_COMPRESSION, C.Z_MIN_LEVEL, C.Z_MAX_LEVEL); // -1 -1 9
console.log(zlib.deflate(text).length ===
    zlib.deflate(text, {
        level: C.Z_DEFAULT_COMPRESSION
    }).length); // true
```

Example 3 — strategies and error codes:

```JavaScript
const zlib = require('zlib');
const C = zlib.constants;
const text = 'The quick brown fox jumps over the lazy dog. '.repeat(50);

// Strategies are codec-constructor options: HUFFMAN_ONLY gives up LZ matching.
const plain = new zlib.Deflate({
    strategy: C.Z_DEFAULT_STRATEGY
});
const huff = new zlib.Deflate({
    strategy: C.Z_HUFFMAN_ONLY
});
const a = plain._processChunk(text, C.Z_FINISH);
const b = huff._processChunk(text, C.Z_FINISH);
console.log(a.length < b.length); // true

// A failed inflate reports the zlib status name in err.code.
try {
    zlib.inflate(Buffer.from('not a zlib stream'));
} catch (e) {
    console.log(e.code); // Z_DATA_ERROR
}
console.log(C.Z_OK, C.Z_STREAM_END, C.Z_DATA_ERROR, C.Z_VERSION_ERROR); // 0 1 -3 -6
```

## Constants
        
### Z_NO_FLUSH
**Performs no flush operation**

```JavaScript
const zlib_constants.Z_NO_FLUSH = 0;
```

--------------------------
### Z_PARTIAL_FLUSH
**Performs a partial flush operation**

```JavaScript
const zlib_constants.Z_PARTIAL_FLUSH = 1;
```

--------------------------
### Z_SYNC_FLUSH
**Synchronous flush, waits for all pending output to be flushed**

```JavaScript
const zlib_constants.Z_SYNC_FLUSH = 2;
```

--------------------------
### Z_FULL_FLUSH
**Full flush, waits for all output to be flushed and resets the internal state**

```JavaScript
const zlib_constants.Z_FULL_FLUSH = 3;
```

--------------------------
### Z_FINISH
**Finishes the compression or decompression operation**

```JavaScript
const zlib_constants.Z_FINISH = 4;
```

--------------------------
### Z_BLOCK
**Stops compression at the end of the current block**

```JavaScript
const zlib_constants.Z_BLOCK = 5;
```

--------------------------
### Z_OK
**The operation completed successfully**

```JavaScript
const zlib_constants.Z_OK = 0;
```

--------------------------
### Z_STREAM_END
**End of the compression or decompression stream**

```JavaScript
const zlib_constants.Z_STREAM_END = 1;
```

--------------------------
### Z_NEED_DICT
**A dictionary is required to continue the operation**

```JavaScript
const zlib_constants.Z_NEED_DICT = 2;
```

--------------------------
### Z_ERRNO
**A system error occurred**

```JavaScript
const zlib_constants.Z_ERRNO = -1;
```

--------------------------
### Z_STREAM_ERROR
**Inconsistent stream state or invalid parameter**

```JavaScript
const zlib_constants.Z_STREAM_ERROR = -2;
```

--------------------------
### Z_DATA_ERROR
**The input data is corrupted**

```JavaScript
const zlib_constants.Z_DATA_ERROR = -3;
```

--------------------------
### Z_MEM_ERROR
**Memory allocation failed**

```JavaScript
const zlib_constants.Z_MEM_ERROR = -4;
```

--------------------------
### Z_BUF_ERROR
**[Buffer](../../object/ifs/Buffer.md) error**

```JavaScript
const zlib_constants.Z_BUF_ERROR = -5;
```

--------------------------
### Z_VERSION_ERROR
**Version mismatch**

```JavaScript
const zlib_constants.Z_VERSION_ERROR = -6;
```

--------------------------
### Z_NO_COMPRESSION
**No compression**

```JavaScript
const zlib_constants.Z_NO_COMPRESSION = 0;
```

--------------------------
### Z_BEST_SPEED
**Fastest compression speed**

```JavaScript
const zlib_constants.Z_BEST_SPEED = 1;
```

--------------------------
### Z_BEST_COMPRESSION
**Best compression ratio**

```JavaScript
const zlib_constants.Z_BEST_COMPRESSION = 9;
```

--------------------------
### Z_DEFAULT_COMPRESSION
**Default compression level**

```JavaScript
const zlib_constants.Z_DEFAULT_COMPRESSION = -1;
```

--------------------------
### Z_FILTERED
**Filtered compression strategy**

```JavaScript
const zlib_constants.Z_FILTERED = 1;
```

--------------------------
### Z_HUFFMAN_ONLY
**Huffman coding only**

```JavaScript
const zlib_constants.Z_HUFFMAN_ONLY = 2;
```

--------------------------
### Z_RLE
**Run-length [encoding](encoding.md)**

```JavaScript
const zlib_constants.Z_RLE = 3;
```

--------------------------
### Z_FIXED
**Fixed Huffman coding**

```JavaScript
const zlib_constants.Z_FIXED = 4;
```

--------------------------
### Z_DEFAULT_STRATEGY
**Default compression strategy**

```JavaScript
const zlib_constants.Z_DEFAULT_STRATEGY = 0;
```

--------------------------
### ZLIB_VERNUM
**[zlib](zlib.md) version number (4880 is [zlib](zlib.md) 1.3.1)**

```JavaScript
const zlib_constants.ZLIB_VERNUM = 4880;
```

--------------------------
### DEFLATE
**deflate compression**

```JavaScript
const zlib_constants.DEFLATE = 1;
```

--------------------------
### INFLATE
**inflate decompression**

```JavaScript
const zlib_constants.INFLATE = 2;
```

--------------------------
### GZIP
**gzip compression**

```JavaScript
const zlib_constants.GZIP = 3;
```

--------------------------
### GUNZIP
**gunzip decompression**

```JavaScript
const zlib_constants.GUNZIP = 4;
```

--------------------------
### DEFLATERAW
**deflateRaw compression**

```JavaScript
const zlib_constants.DEFLATERAW = 5;
```

--------------------------
### INFLATERAW
**inflateRaw decompression**

```JavaScript
const zlib_constants.INFLATERAW = 6;
```

--------------------------
### UNZIP
**unzip decompression**

```JavaScript
const zlib_constants.UNZIP = 7;
```

--------------------------
### BROTLI_DECODE
**Brotli decoding**

```JavaScript
const zlib_constants.BROTLI_DECODE = 8;
```

--------------------------
### BROTLI_ENCODE
**Brotli [encoding](encoding.md)**

```JavaScript
const zlib_constants.BROTLI_ENCODE = 9;
```

--------------------------
### Z_MIN_WINDOWBITS
**Minimum window size**

```JavaScript
const zlib_constants.Z_MIN_WINDOWBITS = 8;
```

--------------------------
### Z_MAX_WINDOWBITS
**Maximum window size**

```JavaScript
const zlib_constants.Z_MAX_WINDOWBITS = 15;
```

--------------------------
### Z_DEFAULT_WINDOWBITS
**Default window size**

```JavaScript
const zlib_constants.Z_DEFAULT_WINDOWBITS = 15;
```

--------------------------
### Z_MIN_CHUNK
**Minimum chunk size**

```JavaScript
const zlib_constants.Z_MIN_CHUNK = 64;
```

--------------------------
### Z_MAX_CHUNK
**Maximum chunk size; -1 means unlimited (Node reports Infinity)**

```JavaScript
const zlib_constants.Z_MAX_CHUNK = -1;
```

--------------------------
### Z_DEFAULT_CHUNK
**Default chunk size**

```JavaScript
const zlib_constants.Z_DEFAULT_CHUNK = 16384;
```

--------------------------
### Z_MIN_MEMLEVEL
**Minimum memory level**

```JavaScript
const zlib_constants.Z_MIN_MEMLEVEL = 1;
```

--------------------------
### Z_MAX_MEMLEVEL
**Maximum memory level**

```JavaScript
const zlib_constants.Z_MAX_MEMLEVEL = 9;
```

--------------------------
### Z_DEFAULT_MEMLEVEL
**Default memory level**

```JavaScript
const zlib_constants.Z_DEFAULT_MEMLEVEL = 8;
```

--------------------------
### Z_MIN_LEVEL
**Minimum compression level**

```JavaScript
const zlib_constants.Z_MIN_LEVEL = -1;
```

--------------------------
### Z_MAX_LEVEL
**Maximum compression level**

```JavaScript
const zlib_constants.Z_MAX_LEVEL = 9;
```

--------------------------
### Z_DEFAULT_LEVEL
**Default compression level**

```JavaScript
const zlib_constants.Z_DEFAULT_LEVEL = -1;
```

