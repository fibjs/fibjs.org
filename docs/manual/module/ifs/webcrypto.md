# Module webcrypto
Web Crypto API for fibjs: random values, UUIDs, keys and [subtle](subtle.md) operations

The [module](module.md) implements the WHATWG Web Crypto API inside fibjs. Its [object](../../object/ifs/object.md) is available as the
[global](global.md) `crypto` variable and as `crypto.webcrypto` of the crypto [module](module.md), so browser-oriented
code can call `crypto.getRandomValues(...)` and `crypto.subtle` without importing anything;
`require('[crypto](crypto.md)').webcrypto` is the same [object](../../object/ifs/object.md), while `require('webcrypto')` is not a
[module](module.md) name.

Capabilities:

- **Random values and identifiers**: `getRandomValues` fills a typed array from the
  operating system CSPRNG; `randomUUID` returns a version-4 UUID;
- **Key objects**: `CryptoKey` holds key material together with its algorithm,
  `extractable` flag and `usages`;
- **Cryptographic operations**: `subtle` exposes digest, key generation, import and export,
  signatures and [ECDH](../../object/ifs/ECDH.md) key agreement as promise-based methods.

Concepts:

- **Algorithm objects**: every operation takes an algorithm that is either a plain string
  ("SHA-256", "Ed25519") or an [object](../../object/ifs/object.md) whose `name` selects the algorithm; the other members
  configure it: `namedCurve` for ECDSA and [ECDH](../../object/ifs/ECDH.md), `hash` for HMAC, `length` in bits for HMAC
  generation and `public` for [ECDH](../../object/ifs/ECDH.md) key agreement. Names match case-insensitively.
- **Supported algorithms**: `subtle.digest` accepts every digest name known to OpenSSL
  (SHA-1, SHA-256, SHA-384, SHA-512, SHA3-256, MD5, SM3, ...). Keys can be ECDSA, Ed25519,
  [ECDH](../../object/ifs/ECDH.md) (P-256/P-384/P-521) and HMAC (SHA-1/SHA-256/SHA-384/SHA-512). RSA, AES, PBKDF2 and
  HKDF are not implemented here: use the [crypto](crypto.md) [module](module.md) (`createCipheriv`, `generateKeyPair`,
  `pbkdf2`, `hkdf`, ...) for those.
- **Key lifecycle**: `subtle.generateKey` creates key material and `subtle.importKey` loads
  existing material into a [CryptoKey](../../object/ifs/CryptoKey.md); `subtle.exportKey` serializes a key as raw, pkcs8,
  spki or jwk; `subtle.sign`, `subtle.verify` and `subtle.deriveBits` consume keys. A key
  created with `extractable` false refuses to be exported.
- **extractable and usages**: usages is the allow-list of operations a key accepts ('sign',
  'verify', 'encrypt', 'decrypt', 'wrapKey', 'unwrapKey', 'deriveKey', 'deriveBits'); using
  a key for an operation outside the list throws. ECDSA and Ed25519 pairs keep 'sign' on
  the private key and 'verify' on the public key, while [ECDH](../../object/ifs/ECDH.md) public keys have no usages.
- **Inputs and outputs**: data and key material are accepted as a [Buffer](../../object/ifs/Buffer.md), a typed array, an
  ArrayBuffer or a string (read as utf8). digest, sign and deriveBits resolve to an
  ArrayBuffer, JWK exports to a plain [object](../../object/ifs/object.md); the [subtle](subtle.md) methods return promises and fibjs
  also generates blocking `...Sync` aliases such as `subtle.digestSync`.
- **Node.js and browser differences**: there is no separate [global](global.md) `webcrypto` or `subtle`
  and no secure-context requirement as in browsers; the [CryptoKey](../../object/ifs/CryptoKey.md) class is also available
  as the [global](global.md) `CryptoKey`.

Import:

```JavaScript
const crypto = require('crypto'); // the global crypto variable is the same object
```

Example 1 — random bytes and a version-4 UUID:

```JavaScript
const crypto = require('crypto');

// getRandomValues fills the array in place and returns it
const bytes = new Uint8Array(16);
console.log(crypto.getRandomValues(bytes) === bytes, bytes.length); // true 16

// randomUUID returns a lower-case version-4 UUID
const uuid = crypto.randomUUID();
console.log(uuid.length, uuid[14]); // 36 4
```

Example 2 — digest and signatures through the [global](global.md) [crypto](crypto.md) [object](../../object/ifs/object.md):

```JavaScript
const crypto = require('crypto');

console.log(global.crypto === crypto.webcrypto); // true

(async () => {
    const digest = await crypto.subtle.digest('SHA-256', 'abc');
    console.log(Buffer.from(digest).toString('hex').slice(0, 8)); // ba7816bf

    const pair = await crypto.subtle.generateKey({
        name: 'Ed25519'
    }, true, ['sign', 'verify']);
    const signature = await crypto.subtle.sign('Ed25519', pair.privateKey, 'abc');
    console.log(signature.byteLength); // 64
})();
```

## Objects
        
### CryptoKey
**The class of Web Crypto key objects, see the [CryptoKey](../../object/ifs/CryptoKey.md) definition**

```JavaScript
CryptoKey webcrypto.CryptoKey;
```

Instances are created by `subtle.generateKey` and `subtle.importKey`; `new
[webcrypto.CryptoKey](webcrypto.md#CryptoKey)()` throws, and every key exposes `type`, `algorithm`, `extractable`
and `usages` as read-only properties. The same class is the [global](global.md) `CryptoKey`
(`[crypto.webcrypto](crypto.md#webcrypto).[CryptoKey](../../object/ifs/CryptoKey.md) === [CryptoKey](../../object/ifs/CryptoKey.md)`), so `key instanceof [CryptoKey](../../object/ifs/CryptoKey.md)` works.

Example - an instance obtained from [subtle](subtle.md) and checked against the class:

```JavaScript
const crypto = require('crypto');

(async () => {
    const pair = await crypto.subtle.generateKey({
        name: 'ECDSA',
        namedCurve: 'P-256'
    }, false, ['sign', 'verify']);
    console.log(pair.privateKey instanceof CryptoKey, pair.privateKey.type);
    // true private
})();
```

--------------------------
### subtle
**The SubtleCrypto entry point, see the [subtle](subtle.md) [module](module.md)**

```JavaScript
subtle webcrypto.subtle;
```

The promise-based operation surface of the Web Crypto API. The [object](../../object/ifs/object.md) is the same as
`require('[crypto](crypto.md)').[subtle](subtle.md)` and `[crypto.webcrypto](crypto.md#webcrypto).[subtle](subtle.md)`; calling `new
[webcrypto.subtle](webcrypto.md#subtle)()` throws.

Example - await a digest and repeat it with the blocking alias:

```JavaScript
const crypto = require('crypto');

(async () => {
    const digest = await crypto.subtle.digest('SHA-256', 'abc');
    console.log(Buffer.from(digest).toString('hex').slice(0, 8)); // ba7816bf

    const sync = crypto.subtle.digestSync('SHA-256', 'abc');
    console.log(Buffer.from(sync).toString('hex').slice(0, 8)); // ba7816bf
})();
```

## Static Methods
        
### getRandomValues
**Fills a typed array with cryptographically secure random bytes**

```JavaScript
static TypedArray webcrypto.getRandomValues(TypedArray data);
```

Parameters:
* data: TypedArray, the TypedArray to fill; it is modified in place

Returns:
* TypedArray, the same TypedArray

The array is filled in place and returned, so `crypto.getRandomValues(arr) === arr`. Any
TypedArray is accepted (Int8Array through BigUint64Array; the Float arrays are filled
with raw random bytes); a DataView, a plain array or any other value throws a TypeError.
The bytes come from the operating system CSPRNG (OpenSSL RAND_bytes) and the call is
limited to 65536 bytes, as the Web Crypto specification requires; a larger array throws
a RangeError (20006).

Example - fill and return the same array, then hit the size limit:

```JavaScript
const crypto = require('crypto');

const bytes = new Uint8Array(16);
console.log(crypto.getRandomValues(bytes) === bytes); // true

try {
    crypto.getRandomValues(new Uint8Array(65537));
} catch (err) {
    console.log(err.name, err.number); // RangeError 20006
}
```

--------------------------
### randomUUID
**Returns a random version-4 UUID string**

```JavaScript
static String webcrypto.randomUUID();
```

Returns:
* String, a 36-character lower-case UUID string

The value is drawn from the operating system CSPRNG and follows the RFC 4122 version-4
layout `xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx`: lower case, 36 characters, the version
nibble is 4 and the variant bits are 10xx. The method takes no arguments, so passing one
(even an [object](../../object/ifs/object.md)) throws a TypeError; `crypto.randomUUID(options)`, the [crypto](crypto.md) [module](module.md)
method, is a different function and does accept options.

Example - check the shape of the returned UUID:

```JavaScript
const crypto = require('crypto');

const uuid = crypto.randomUUID();
console.log(uuid.length, uuid[8], uuid[13], uuid[14], uuid[18], uuid[23]);
// 36 - - 4 - -
console.log(/^[0-9a-f-]{36}$/.test(uuid)); // true
```

