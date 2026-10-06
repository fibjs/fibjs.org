# Object Redis
A Redis connection: the general command surface and the typed key views

Redis is the [object](object.md) returned by [db.openRedis](../../module/ifs/db.md#openRedis) and the only way to reach a Redis server in
fibjs. It speaks the RESP protocol over one TCP connection and is fiber-synchronous: every
member blocks the calling fiber until the server reply arrives, and no command has a
callback or promise form.

Command families:

- **Strings**: `set`, `setNX`, `setXX`, `mset`, `msetNX`, `append`, `setRange`, `getRange`,
  `get`, `mget`, `getset`, `incr`, `decr`, `strlen`;
- **Bits**: `setBit`, `getBit`, `bitcount`;
- **Keys and expiry**: `exists`, `type`, `del`, `keys`, `expire`, `ttl`, `persist`,
  `rename`, `renameNX`, `dump`, `restore`;
- **Pub/Sub**: `sub`, `psub`, `unsub`, `unpsub`, `pub` and the `suberror` event;
- **Typed views**: `getHash`, `getList`, `getSet` and `getSortedSet` return the [RedisHash](RedisHash.md),
  [RedisList](RedisList.md), [RedisSet](RedisSet.md) and [RedisSortedSet](RedisSortedSet.md) objects bound to one key;
- **Escape hatch**: `command` sends any command and returns its raw reply;
- **Lifecycle**: `close`.

Concepts:

- **Single-threaded server model**: Redis serves commands one at a time on a single
  thread, so every command is atomic and no two commands interleave. The flip side is that
  a slow command blocks every other client: `keys` walks the whole keyspace, so prefer the
  SCAN family through command() on a large production server.
- **Replies and their [types](../../module/ifs/types.md)**: a status or bulk-string reply arrives as a [Buffer](Buffer.md), an
  integer reply as a Number, nil as null and an array as an Array whose elements follow
  the same rules. A server error reply throws an Error whose message is the server text
  and whose number is 20024.
- **Connection lifecycle**: [db.openRedis](../../module/ifs/db.md#openRedis) connects before it returns, so an unreachable
  server throws the socket error (ECONNREFUSED with number 111, or a resolver error such
  as getaddrinfo ENOTFOUND) rather than a database error. close releases the connection
  and is not idempotent: a second close, and every command after it, fail with 20009.
- **Connection strings**: with the `redis://` prefix the string is parsed as a URL and the
  host and port are used (the port defaults to 6379); the [path](../../module/ifs/path.md), user and password are
  accepted but not sent, so a database index cannot be selected this way. Without a known
  prefix the whole string is the host name and the port is fixed to 6379, so use the URL
  form to reach another port.
- **Subscriber mode**: the first sub or psub switches the connection to pub/sub; from then
  on the server accepts only (p)subscribe, (p)unsubscribe and the connection close, and any
  other command fails with 20009. Use a second connection to publish or to run ordinary
  commands while one connection listens.
- **Argument [types](../../module/ifs/types.md)**: a parameter declared [Buffer](Buffer.md)|String is sent byte-for-byte when it is
  a [Buffer](Buffer.md) and as its UTF-8 [encoding](../../module/ifs/encoding.md) when it is a string, so keys and values may hold
  arbitrary binary data. The variadic and [object](object.md) forms (`command`, `mset`, `msetNX`,
  `mget`, `del` and the like) instead convert each argument through its JavaScript string
  form: a number is rejected with 20005 and a [Buffer](Buffer.md) is decoded as UTF-8 text, which loses
  bytes that are not valid UTF-8.
- **Value [types](../../module/ifs/types.md)**: a Redis key holds one type (string, list, set, zset, hash or stream), a
  command issued against the wrong type fails with the server error, and `type` reports
  the current one. Write commands create a missing key, and read commands report null for
  a missing key.

Obtained from:
- `db.openRedis(connString)` — fiber-synchronous, returns the connected Redis [object](object.md);
- `db.openRedis(connString, callback)` and `db.promises.openRedis(connString)` — the
  callback and Promise forms of the same factory.

Example 1 — a failed connection reports the socket error (no server needed):

```JavaScript
const db = require('db');

try {
    db.openRedis('redis://127.0.0.1:0');
} catch (e) {
    console.log(e.code, e.number); // ECONNREFUSED 111
}

try {
    db.openRedis('redis://:0'); // a malformed URL fails before connecting
} catch (e) {
    console.log(e.message); // url: Invalid URL 'redis://:0'.
}
```

Example 2 — how connection strings are interpreted (no server needed):

```JavaScript
const db = require('db');

// a bare string is the host name, not a host:port pair
try {
    db.openRedis('127.0.0.1:6379');
} catch (e) {
    console.log(e.code); // ENOTFOUND - the whole string was resolved as a host
}

// the redis:// form carries the port; the path and credentials are ignored
try {
    db.openRedis('redis://user:pass@127.0.0.1:0/3');
} catch (e) {
    console.log(e.code, e.syscall); // ECONNREFUSED connect
}
```

Example 3 — string commands and key expiry:

```JavaScript
// requires: redis
const db = require('db');
const rdb = db.openRedis('redis://127.0.0.1:6379');

rdb.set('greeting', 'hello');
console.log(rdb.get('greeting').toString()); // hello
console.log(rdb.append('greeting', ', redis')); // 12 - the value grew
console.log(rdb.incr('counter')); // 1 - a new key starts at 0
console.log(rdb.type('greeting')); // string

rdb.expire('counter', 1000);
console.log(rdb.ttl('counter') > 0); // true
console.log(rdb.exists('counter')); // true

rdb.del('greeting', 'counter');
rdb.close();
```

Example 4 — publish/subscribe over two connections:

```JavaScript
// requires: redis
const db = require('db');
const coroutine = require('coroutine');

const sub = db.openRedis('redis://127.0.0.1:6379');
const pub = db.openRedis('redis://127.0.0.1:6379');
const done = new coroutine.Event();

sub.sub('news', (channel, message) => {
    console.log(channel.toString(), message.toString()); // news hello
    done.set();
});

coroutine.sleep(100); // let SUBSCRIBE reach the server
console.log(pub.pub('news', 'hello')); // 1 - one client received it
done.wait();

sub.close();
pub.close();
```

## Inheritance
```dot
digraph {
    node [fontname="Helvetica,sans-Serif", fontsize=10, shape="record", style="filled", fillcolor="white"];

    object [tooltip="object", URL="object.md", label="{object|toString()\ltoJSON()\l}"];
    Redis [tooltip="Redis", fillcolor="lightgray", id="me", label="{Redis|command()\lset()\lsetNX()\lsetXX()\lmset()\lmsetNX()\lappend()\lsetRange()\lgetRange()\lstrlen()\lbitcount()\lget()\lmget()\lgetset()\ldecr()\lincr()\lsetBit()\lgetBit()\lexists()\ltype()\lkeys()\ldel()\lexpire()\lttl()\lpersist()\lrename()\lrenameNX()\lsub()\lunsub()\lpsub()\lunpsub()\lpub()\lgetHash()\lgetList()\lgetSet()\lgetSortedSet()\ldump()\lrestore()\lclose()\l|event suberror\l}"];

    object -> Redis [dir=back];
}
```

## Methods
        
### command
**Sends an arbitrary command and returns its reply as received**

```JavaScript
Value Redis.command(String cmd,
    ...args);
```

Parameters:
* cmd: String, the command name to send
* args: ..., the command arguments, each one converted to a string

Returns:
* Value, the reply as received: a [Buffer](Buffer.md), a Number, an Array or null

cmd is the command name as it is sent (`HGETALL`, `SCAN`, ...); the following arguments
are appended to it in order. Every argument is converted through its JavaScript string
form: pass numbers as strings (a number is rejected with error 20005), and a [Buffer](Buffer.md)
argument is decoded as UTF-8 text, so a binary payload loses bytes that are not valid
UTF-8 - use the typed members for binary data. The reply is the raw RESP value: a
status or bulk string as a [Buffer](Buffer.md), an integer as a Number, nil as null and an array as
an Array, with the same rules applied to nested elements. A server error reply throws
an Error whose message is the server text and whose number is 20024.

Use it for commands with no dedicated member, such as SCAN or SORT.

Example — SCAN avoids the whole-keyspace scan performed by keys:

```JavaScript
// requires: redis
const db = require('db');
const rdb = db.openRedis('redis://127.0.0.1:6379');

rdb.set('user:1', 'alice');
rdb.set('user:2', 'bob');

const reply = rdb.command('scan', '0');
console.log(reply[1].length >= 2); // true - the batch holds both names
console.log(rdb.command('get', 'user:1').toString()); // alice

rdb.del('user:1', 'user:2');
rdb.close();
```

--------------------------
### set
**Associates value with key, discarding any previous value and type**

```JavaScript
Redis.set(Buffer | String key,
    Buffer | String value,
    Long ttl = 0);
```

Parameters:
* key: [Buffer](Buffer.md) | String, the key to associate
* value: [Buffer](Buffer.md) | String, the value to store
* ttl: Long, the time to live in milliseconds; 0 keeps the key forever

SET key value [PX ttl]. The value is stored as a string and an existing key of any
type is overwritten. The optional ttl is applied with PX and is in milliseconds; 0
keeps the key persistent. The member reports no result, so read the key back to
inspect it, and the NX/XX/GET modifiers of the server command are not exposed here -
use setNX, setXX or command() instead.

key and value are sent byte-for-byte as Buffers and as UTF-8 text as strings.

--------------------------
### setNX
**Stores value only when key does not exist**

```JavaScript
Redis.setNX(Buffer | String key,
    Buffer | String value,
    Long ttl = 0);
```

Parameters:
* key: [Buffer](Buffer.md) | String, the key to associate
* value: [Buffer](Buffer.md) | String, the value to store
* ttl: Long, the time to live in milliseconds; 0 keeps the key forever

SET key value NX [PX ttl]. The command does nothing when the key already exists, and
the member reports no result, so read the key back to know whether the write
happened. The ttl is in milliseconds and is applied only when the value is stored.

key and value are sent byte-for-byte as Buffers and as UTF-8 text as strings.

--------------------------
### setXX
**Stores value only when key already exists**

```JavaScript
Redis.setXX(Buffer | String key,
    Buffer | String value,
    Long ttl = 0);
```

Parameters:
* key: [Buffer](Buffer.md) | String, the key to associate
* value: [Buffer](Buffer.md) | String, the value to store
* ttl: Long, the time to live in milliseconds; 0 keeps the key forever

SET key value XX [PX ttl]. The command does nothing when the key does not exist, and
the member reports no result, so read the key back to know whether the write
happened. The ttl is in milliseconds and is applied only when the value is stored.

key and value are sent byte-for-byte as Buffers and as UTF-8 text as strings.

--------------------------
### mset
**Sets several key/value pairs at once, replacing the keys**

```JavaScript
Redis.mset(Object kvs);
```

Parameters:
* kvs: Object, the key/value pairs to set, as property names and values

MSET. The property names of kvs are the keys and the property values are the values,
in property order. Each value is converted through its JavaScript string form, so a
number is rejected with error 20005 and a [Buffer](Buffer.md) is decoded as UTF-8 text - pass
strings there. MSET is atomic: either every pair is written or none is. The member
reports no result.

Example — the [object](object.md) form of mset and the array result of mget:

```JavaScript
// requires: redis
const db = require('db');
const rdb = db.openRedis('redis://127.0.0.1:6379');

rdb.mset({
    first: 'alice',
    last: 'smith'
});
const values = rdb.mget('first', 'last');
console.log(values[0].toString(), values[1].toString()); // alice smith

rdb.del('first', 'last');
rdb.close();
```

--------------------------
**Sets several key/value pairs at once from a flat argument list**

```JavaScript
Redis.mset(...kvs);
```

Parameters:
* kvs: ..., the flat key/value list to set

MSET. The arguments alternate key and value: mset('a', '1', 'b', '2') is the same
command as mset({ a: '1', b: '2' }). An odd argument count reaches the server, which
rejects the command with an error; values follow the string conversion of the [object](object.md)
form. The member reports no result.

--------------------------
### msetNX
**Sets several key/value pairs at once only when all the keys are missing**

```JavaScript
Redis.msetNX(Object kvs);
```

Parameters:
* kvs: Object, the key/value pairs to set, as property names and values

MSETNX. The [object](object.md) form takes the property names as keys and the property values as
values, in property order. The whole group is written only when none of the keys
exists, so the command is all-or-nothing; values follow the string conversion of
mset. The member reports no result, so read the keys back to know whether the write
happened.

--------------------------
**Sets several key/value pairs from a flat list only when all the keys are missing**

```JavaScript
Redis.msetNX(...kvs);
```

Parameters:
* kvs: ..., the flat key/value list to set

MSETNX. The arguments alternate key and value and the whole group is written only when
none of the keys exists; an odd argument count reaches the server, which rejects the
command with an error. The member reports no result.

--------------------------
### append
**Appends value to the string stored at key**

```JavaScript
Integer Redis.append(Buffer | String key,
    Buffer | String value);
```

Parameters:
* key: [Buffer](Buffer.md) | String, the key to append to
* value: [Buffer](Buffer.md) | String, the data to append

Returns:
* Integer, the length of the string after the append

APPEND. A missing key is created and a key of another type fails with the server
error. key and value are sent byte-for-byte as Buffers and as UTF-8 text as strings.

--------------------------
### setRange
**Overwrites the string stored at key starting at the given byte offset**

```JavaScript
Integer Redis.setRange(Buffer | String key,
    Integer offset,
    Buffer | String value);
```

Parameters:
* key: [Buffer](Buffer.md) | String, the key to modify
* offset: Integer, the byte offset to write at
* value: [Buffer](Buffer.md) | String, the data to write

Returns:
* Integer, the length of the string after the write

SETRANGE. The string is extended with zero bytes when offset lies beyond its current
end; the returned length covers the whole string after the write. An offset at or
past the server limit (512 MB - 1) or a key holding another type fails with the server
error. key and value are sent byte-for-byte as Buffers.

--------------------------
### getRange
**Returns a substring of the string stored at key**

```JavaScript
Buffer Redis.getRange(Buffer | String key,
    Integer start,
    Integer end);
```

Parameters:
* key: [Buffer](Buffer.md) | String, the key to query
* start: Integer, the first byte offset of the range
* end: Integer, the last byte offset of the range

Returns:
* [Buffer](Buffer.md), the extracted bytes as a [Buffer](Buffer.md)

GETRANGE. Both offsets are byte offsets and both ends are included; a negative offset
counts from the end of the string (-1 is the last byte), and offsets outside the
string are clamped to it. A missing key, an empty range and a range whose start is
after its end all return an empty [Buffer](Buffer.md). The result is a [Buffer](Buffer.md), so it may hold
arbitrary bytes.

--------------------------
### strlen
**Returns the length of the string stored at key**

```JavaScript
Integer Redis.strlen(Buffer | String key);
```

Parameters:
* key: [Buffer](Buffer.md) | String, the key to count

Returns:
* Integer, the length of the stored string in bytes, 0 when key does not exist

STRLEN. A missing key returns 0 and a key holding another type fails with the server
error; the length is in bytes, not characters.

--------------------------
### bitcount
**Counts the bits set to 1 in the string stored at key**

```JavaScript
Integer Redis.bitcount(Buffer | String key,
    Integer start = 0,
    Integer end = -1);
```

Parameters:
* key: [Buffer](Buffer.md) | String, the key to count
* start: Integer, the first byte of the range; -1 is the last byte
* end: Integer, the last byte of the range; -1 is the last byte

Returns:
* Integer, the number of bits set to 1 in the range

BITCOUNT. The member always sends the start and end defaults, so the whole string is
counted unless both are given; the offsets are byte offsets, both ends are included
and a negative offset counts from the end of the string. A missing key returns 0.

--------------------------
### get
**Returns the string stored at key**

```JavaScript
Buffer Redis.get(Buffer | String key);
```

Parameters:
* key: [Buffer](Buffer.md) | String, the key to read

Returns:
* [Buffer](Buffer.md), the value as a [Buffer](Buffer.md), or null when key does not exist

GET. A missing key returns null; a key holding another type fails with the server
error. The value is a [Buffer](Buffer.md), so it may hold arbitrary bytes.

--------------------------
### mget
**Returns the values of the given keys, one element per key**

```JavaScript
NArray Redis.mget(Array keys);
```

Parameters:
* keys: Array, the array of keys to read

Returns:
* NArray, an array with one [Buffer](Buffer.md) or null per key, in the given order

MGET. A missing key yields null in its position, so the result has the same length as
the key list. The keys go through the JavaScript string conversion of a variadic
argument: a number is rejected with error 20005 and a [Buffer](Buffer.md) is decoded as UTF-8
text. The values are Buffers.

Example — a missing key keeps its position as null:

```JavaScript
// requires: redis
const db = require('db');
const rdb = db.openRedis('redis://127.0.0.1:6379');

rdb.set('first', 'alice');
const values = rdb.mget('first', 'missing');
console.log(values[0].toString(), values[1]); // alice null

rdb.del('first');
rdb.close();
```

--------------------------
**Returns the values of the given keys, one element per key**

```JavaScript
NArray Redis.mget(...keys);
```

Parameters:
* keys: ..., the keys to read, as a flat argument list

Returns:
* NArray, an array with one [Buffer](Buffer.md) or null per key, in the given order

MGET. This is the flat form of mget(Array); the two are the same command and both
follow the string conversion described there.

--------------------------
### getset
**Stores value at key and returns the previous value**

```JavaScript
Buffer Redis.getset(Buffer | String key,
    Buffer | String value);
```

Parameters:
* key: [Buffer](Buffer.md) | String, the key to write
* value: [Buffer](Buffer.md) | String, the value to store

Returns:
* [Buffer](Buffer.md), the previous value as a [Buffer](Buffer.md), or null when key did not exist

GETSET. A missing key returns null and a key of any type is overwritten. The server
deprecated GETSET in favor of SET with the GET modifier, but the command still works.
key and value are sent byte-for-byte as Buffers.

--------------------------
### decr
**Subtracts num from the integer stored at key**

```JavaScript
Long Redis.decr(Buffer | String key,
    Long num = 1);
```

Parameters:
* key: [Buffer](Buffer.md) | String, the key to modify
* num: Long, the amount to subtract

Returns:
* Long, the value of key after the subtraction

DECR when num is 1, DECRBY otherwise. The value is a signed 64-bit integer; a missing
key is treated as 0, so decr('k', 5) on a new key returns -5. A value that is not an
integer string fails with the server error. The member reports no overflow check on
its own: the server reports the overflow error.

--------------------------
### incr
**Adds num to the integer stored at key**

```JavaScript
Long Redis.incr(Buffer | String key,
    Long num = 1);
```

Parameters:
* key: [Buffer](Buffer.md) | String, the key to modify
* num: Long, the amount to add

Returns:
* Long, the value of key after the addition

INCR when num is 1, INCRBY otherwise. The value is a signed 64-bit integer; a missing
key is treated as 0, so incr('k') on a new key returns 1. A value that is not an
integer string or an overflow fails with the server error.

--------------------------
### setBit
**Sets or clears one bit of the string stored at key**

```JavaScript
Integer Redis.setBit(Buffer | String key,
    Integer offset,
    Integer value);
```

Parameters:
* key: [Buffer](Buffer.md) | String, the key to modify
* offset: Integer, the bit offset to modify
* value: Integer, the bit to store, 0 or 1

Returns:
* Integer, the previous bit at the offset

SETBIT. value must be 0 or 1; the string is grown with zero bytes when offset lies
beyond its end, and the server limits the offset to 2^32 - 1. A key holding another
type fails with the server error. The previous bit is returned.

--------------------------
### getBit
**Returns one bit of the string stored at key**

```JavaScript
Integer Redis.getBit(Buffer | String key,
    Integer offset);
```

Parameters:
* key: [Buffer](Buffer.md) | String, the key to read
* offset: Integer, the bit offset to read

Returns:
* Integer, the bit at the offset, 0 or 1

GETBIT. A missing key and an offset beyond the end of the string both return 0.

--------------------------
### exists
**Checks whether the given key exists**

```JavaScript
Boolean Redis.exists(Buffer | String key);
```

Parameters:
* key: [Buffer](Buffer.md) | String, the key to [test](../../module/ifs/test.md)

Returns:
* Boolean, true when the key exists, false otherwise

EXISTS. A key of any type counts; the member checks one key per call (the server
command accepts several), and the count is reduced to a boolean.

--------------------------
### type
**Returns the type of the value stored at key**

```JavaScript
String Redis.type(Buffer | String key);
```

Parameters:
* key: [Buffer](Buffer.md) | String, the key to query

Returns:
* String, the type name, `none` when key does not exist

TYPE. A missing key reports `none`; the other values are `string`, `list`, `set`,
`zset`, `hash` and `stream` (Redis 5 and later). Use it before calling a typed command
on a key that may hold another type.

--------------------------
### keys
**Returns the keys matching a glob pattern**

```JavaScript
NArray Redis.keys(String pattern);
```

Parameters:
* pattern: String, the glob pattern to match

Returns:
* NArray, an array of [Buffer](Buffer.md) key names

KEYS. The pattern supports `*`, `?`, character classes (`[abc]`, `[^a]`, `[a-z]`) and
the backslash escape, and it matches the whole key name. The result is an array of
[Buffer](Buffer.md) names in unspecified order. Redis is single-threaded, so KEYS walks the whole
keyspace while every other client waits: use `command('scan', '0')` on a large
production database.

Example — collect the keys of one namespace:

```JavaScript
// requires: redis
const db = require('db');
const rdb = db.openRedis('redis://127.0.0.1:6379');

rdb.mset('user:1', 'alice', 'user:2', 'bob', 'session:1', 'token');
const names = rdb.keys('user:*');
console.log(names.length); // 2
console.log(names[0].toString().indexOf('user:') === 0); // true

rdb.del('user:1', 'user:2', 'session:1');
rdb.close();
```

--------------------------
### del
**Deletes the given keys**

```JavaScript
Integer Redis.del(Array keys);
```

Parameters:
* keys: Array, the array of keys to delete

Returns:
* Integer, the number of keys that were removed

DEL. Missing keys are ignored; the number of removed keys is returned. The keys go
through the JavaScript string conversion of a variadic argument: a number is rejected
with error 20005 and a [Buffer](Buffer.md) is decoded as UTF-8 text.

--------------------------
**Deletes the given keys**

```JavaScript
Integer Redis.del(...keys);
```

Parameters:
* keys: ..., the keys to delete, as a flat argument list

Returns:
* Integer, the number of keys that were removed

DEL. This is the flat form of del(Array); the two are the same command and both follow
the string conversion described there.

--------------------------
### expire
**Sets a time to live for key, after which the key is deleted**

```JavaScript
Boolean Redis.expire(Buffer | String key,
    Long ttl);
```

Parameters:
* key: [Buffer](Buffer.md) | String, the key to expire
* ttl: Long, the time to live in milliseconds

Returns:
* Boolean, true when the key existed, false when it did not

PEXPIRE. The ttl is in milliseconds; it replaces an existing time to live, and a
non-positive value deletes the key immediately. The member returns whether the key
existed, which is true even when the new ttl deletes it right away.

Example — set, inspect and remove an expiry:

```JavaScript
// requires: redis
const db = require('db');
const rdb = db.openRedis('redis://127.0.0.1:6379');

rdb.set('cache', 'value');
console.log(rdb.ttl('cache')); // -1 - no expiry was set
console.log(rdb.expire('cache', 1000)); // true
console.log(rdb.ttl('cache') > 0); // true
console.log(rdb.persist('cache')); // true - the expiry was removed
console.log(rdb.ttl('cache')); // -1

rdb.del('cache');
rdb.close();
```

--------------------------
### ttl
**Returns the remaining time to live of key in milliseconds**

```JavaScript
Long Redis.ttl(Buffer | String key);
```

Parameters:
* key: [Buffer](Buffer.md) | String, the key to query

Returns:
* Long, the remaining time to live in milliseconds, -1 or -2 as described

PTTL. The result is -2 when the key does not exist, -1 when the key exists without a
time to live and the remaining milliseconds otherwise.

--------------------------
### persist
**Removes the time to live of key, making it persistent**

```JavaScript
Boolean Redis.persist(Buffer | String key);
```

Parameters:
* key: [Buffer](Buffer.md) | String, the key to persist

Returns:
* Boolean, true when the key was volatile and is now persistent

PERSIST. The member returns true when a time to live was removed and false when the
key does not exist or had none.

--------------------------
### rename
**Renames key to newkey, the source is deleted**

```JavaScript
Redis.rename(Buffer | String key,
    Buffer | String newkey);
```

Parameters:
* key: [Buffer](Buffer.md) | String, the key to rename
* newkey: [Buffer](Buffer.md) | String, the destination key name

RENAME. An existing newkey is overwritten regardless of its type, and the command
fails with the server error when key does not exist or when key and newkey are equal.
No result is reported.

--------------------------
### renameNX
**Renames key to newkey only when newkey does not exist**

```JavaScript
Boolean Redis.renameNX(Buffer | String key,
    Buffer | String newkey);
```

Parameters:
* key: [Buffer](Buffer.md) | String, the key to rename
* newkey: [Buffer](Buffer.md) | String, the destination key name

Returns:
* Boolean, true when the rename happened, false when newkey already existed

RENAMENX. The member returns false when newkey already exists and fails with the
server error when key does not exist.

--------------------------
### sub
**Subscribes func to a channel**

```JavaScript
Redis.sub(Buffer | String channel,
    Function(Buffer channel, Buffer message) func);
```

Parameters:
* channel: [Buffer](Buffer.md) | String, the channel to subscribe to
* func: Function([Buffer](Buffer.md) channel, [Buffer](Buffer.md) message), the callback invoked as func(channel, message)

SUBSCRIBE channel. func is called with the channel name and the message, both as
Buffers, each time a message arrives on the channel; delivery happens on the event
loop, so the calling fiber may continue or sleep. Registering the same function again
for the same channel adds a second listener and does not send another SUBSCRIBE, so
the function is then called once per registration for every message.

The first sub or psub switches the connection to subscriber mode: from then on other
commands on this [object](object.md) fail with 20009 and the connection can only be closed. Use a
second connection for pub and for ordinary commands.

--------------------------
**Subscribes one callback to each channel of a map**

```JavaScript
Redis.sub(Object map);
```

Parameters:
* map: Object, the channel/callback map

SUBSCRIBE with every property of map: the property names are the channels and the
property values the callback functions. The whole map is sent as one command. A
property value that is not a function fails with error 20004 before anything is sent.

--------------------------
### unsub
**Removes every callback of a channel**

```JavaScript
Redis.unsub(Buffer | String channel);
```

Parameters:
* channel: [Buffer](Buffer.md) | String, the channel to unsubscribe from

UNSUBSCRIBE channel. All registrations of the channel are dropped and one UNSUBSCRIBE
is sent even when the channel had no callback.

--------------------------
**Removes one callback registration of a channel**

```JavaScript
Redis.unsub(Buffer | String channel,
    Function(Buffer channel, Buffer message) func);
```

Parameters:
* channel: [Buffer](Buffer.md) | String, the channel to unsubscribe from
* func: Function([Buffer](Buffer.md) channel, [Buffer](Buffer.md) message), the callback registered by sub()

Removes the registration made by one sub() call. The UNSUBSCRIBE command is sent only
when the last registration of the channel is removed, so the server keeps sending the
channel while other callbacks remain.

--------------------------
**Removes every callback of several channels**

```JavaScript
Redis.unsub(Array channels);
```

Parameters:
* channels: Array, the array of channels to unsubscribe from

UNSUBSCRIBE with all the channels in one command; every registration of each channel is
dropped.

--------------------------
**Removes the listed callbacks of several channels**

```JavaScript
Redis.unsub(Object map);
```

Parameters:
* map: Object, the channel/callback map

The property names of map are the channels and the property values the callbacks to
remove. An UNSUBSCRIBE with the affected channels is sent when at least one
registration was removed.

--------------------------
### psub
**Subscribes func to every channel matching a pattern**

```JavaScript
Redis.psub(String pattern,
    Function(Buffer channel, Buffer message, Buffer pattern) func);
```

Parameters:
* pattern: String, the glob pattern of channels to subscribe to
* func: Function([Buffer](Buffer.md) channel, [Buffer](Buffer.md) message, [Buffer](Buffer.md) pattern), the callback invoked as func(channel, message, pattern)

PSUBSCRIBE pattern. The pattern uses the Redis glob syntax; func is called with the
channel name, the message and the pattern that matched, all as Buffers. The rules of
sub() apply: a repeated registration adds a listener without another command, and the
first subscription switches the connection to subscriber mode.

--------------------------
**Subscribes one callback to each channel pattern of a map**

```JavaScript
Redis.psub(Object map);
```

Parameters:
* map: Object, the pattern/callback map

PSUBSCRIBE with every property of map: the property names are the patterns and the
property values the callback functions, in one command. A property value that is not a
function fails with error 20004 before anything is sent.

--------------------------
### unpsub
**Removes every callback of a pattern**

```JavaScript
Redis.unpsub(String pattern);
```

Parameters:
* pattern: String, the pattern to unsubscribe from

PUNSUBSCRIBE pattern. All registrations of the pattern are dropped and one
PUNSUBSCRIBE is sent.

--------------------------
**Removes one callback registration of a pattern**

```JavaScript
Redis.unpsub(String pattern,
    Function(Buffer channel, Buffer message, Buffer pattern) func);
```

Parameters:
* pattern: String, the pattern to unsubscribe from
* func: Function([Buffer](Buffer.md) channel, [Buffer](Buffer.md) message, [Buffer](Buffer.md) pattern), the callback registered by psub()

Removes the registration made by one psub() call; the PUNSUBSCRIBE command is sent only
when the last registration of the pattern is removed.

--------------------------
**Removes every callback of several patterns**

```JavaScript
Redis.unpsub(Array patterns);
```

Parameters:
* patterns: Array, the array of patterns to unsubscribe from

PUNSUBSCRIBE with all the patterns in one command.

--------------------------
**Removes the listed callbacks of several patterns**

```JavaScript
Redis.unpsub(Object map);
```

Parameters:
* map: Object, the pattern/callback map

The property names of map are the patterns and the property values the callbacks to
remove. A PUNSUBSCRIBE with the affected patterns is sent when at least one
registration was removed.

--------------------------
### pub
**Publishes a message to a channel**

```JavaScript
Integer Redis.pub(Buffer | String channel,
    Buffer | String message);
```

Parameters:
* channel: [Buffer](Buffer.md) | String, the channel to publish to
* message: [Buffer](Buffer.md) | String, the message to publish

Returns:
* Integer, the number of clients that received the message

PUBLISH. The number of clients that received the message is returned: 0 when nobody is
subscribed, and pattern subscribers count as receivers. Publishing happens on a
normal connection - a connection in subscriber mode cannot publish. channel and
message are sent byte-for-byte as Buffers.

--------------------------
### getHash
**Returns the [RedisHash](RedisHash.md) view bound to key**

```JavaScript
RedisHash Redis.getHash(Buffer | String key);
```

Parameters:
* key: [Buffer](Buffer.md) | String, the key the view is bound to

Returns:
* [RedisHash](RedisHash.md), the [RedisHash](RedisHash.md) view

The view is a local [object](object.md): no command is sent until one of its members runs, and the
key is captured at call time (as bytes, so a [Buffer](Buffer.md) key is used as given). The view
maps its members to the HSET/HGET/HINCRBY family; see the [RedisHash](RedisHash.md) class for the
details.

Example — a view sends nothing until it is used:

```JavaScript
// requires: redis
const db = require('db');
const rdb = db.openRedis('redis://127.0.0.1:6379');

const user = rdb.getHash('user:1'); // no command is sent
user.set('name', 'alice'); // HSET user:1 name alice
console.log(rdb.type('user:1')); // hash
console.log(user.get('name').toString()); // alice

rdb.del('user:1');
rdb.close();
```

--------------------------
### getList
**Returns the [RedisList](RedisList.md) view bound to key**

```JavaScript
RedisList Redis.getList(Buffer | String key);
```

Parameters:
* key: [Buffer](Buffer.md) | String, the key the view is bound to

Returns:
* [RedisList](RedisList.md), the [RedisList](RedisList.md) view

The view is a local [object](object.md): no command is sent until one of its members runs, and the
key is captured at call time. It maps its members to the LPUSH/RPUSH/LRANGE family;
see the [RedisList](RedisList.md) class for the details.

--------------------------
### getSet
**Returns the [RedisSet](RedisSet.md) view bound to key**

```JavaScript
RedisSet Redis.getSet(Buffer | String key);
```

Parameters:
* key: [Buffer](Buffer.md) | String, the key the view is bound to

Returns:
* [RedisSet](RedisSet.md), the [RedisSet](RedisSet.md) view

The view is a local [object](object.md): no command is sent until one of its members runs, and the
key is captured at call time. See the [RedisSet](RedisSet.md) class for the members.

--------------------------
### getSortedSet
**Returns the [RedisSortedSet](RedisSortedSet.md) view bound to key**

```JavaScript
RedisSortedSet Redis.getSortedSet(Buffer | String key);
```

Parameters:
* key: [Buffer](Buffer.md) | String, the key the view is bound to

Returns:
* [RedisSortedSet](RedisSortedSet.md), the [RedisSortedSet](RedisSortedSet.md) view

The view is a local [object](object.md): no command is sent until one of its members runs, and the
key is captured at call time. See the [RedisSortedSet](RedisSortedSet.md) class for the members.

--------------------------
### dump
**Serializes the value stored at key**

```JavaScript
Buffer Redis.dump(Buffer | String key);
```

Parameters:
* key: [Buffer](Buffer.md) | String, the key to serialize

Returns:
* [Buffer](Buffer.md), the payload as a [Buffer](Buffer.md), or null when key does not exist

DUMP. The result is the RDB payload as a [Buffer](Buffer.md) and may hold arbitrary bytes; a
missing key returns null. Feed the payload to restore to rebuild the key.

--------------------------
### restore
**Rebuilds a key from a payload produced by dump**

```JavaScript
Redis.restore(Buffer | String key,
    Buffer | String data,
    Long ttl = 0);
```

Parameters:
* key: [Buffer](Buffer.md) | String, the key to rebuild
* data: [Buffer](Buffer.md) | String, the payload returned by dump
* ttl: Long, the time to live in milliseconds; 0 keeps the key forever

RESTORE key ttl data. The ttl is in milliseconds and 0 keeps the key persistent; the
payload is sent byte-for-byte, so a [Buffer](Buffer.md) from dump round-trips unchanged. The server
rejects the command with error 20024 when the key already exists or when the payload
is not a valid dump. No result is reported.

--------------------------
### close
**Closes the connection**

```JavaScript
Redis.close();
```

The socket is released and every command on the [object](object.md) afterwards fails with 20009;
close is also the only command accepted by a connection in subscriber mode. The member
is not idempotent: a second close reports `Redis: connection is closed.` with number
20009.

--------------------------
### toString
**Returns the string form of the [object](object.md)**

```JavaScript
String Redis.toString();
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
Value Redis.toJSON(String key = "");
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

## Events
        
### suberror
**[Event](Event.md) fired when the subscriber connection fails**

```JavaScript
event Redis.suberror();
```

The handler is assigned through the `onsuberror` property (there is no on() method on
this [object](object.md)) and is called with no arguments when a subscription command reports a
server error or the network breaks. The subscriptions of the connection are dead from
that point on: close the connection and open a new one to subscribe again.

