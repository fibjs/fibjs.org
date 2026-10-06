# Module crypto_constants
The crypto_constants [module](module.md) defines the RSA padding modes and PSS salt lengths

accepted by the RSA operations of the [crypto](crypto.md) [module](module.md)

Load it through the `constants` property of the [crypto](crypto.md) [module](module.md). The padding constants select
the scheme of `publicEncrypt`/`privateDecrypt` and `privateEncrypt`/`publicDecrypt` (the
`padding` option) and of RSA signing and verification (see [Sign](../../object/ifs/Sign.md) and [Verify](../../object/ifs/Verify.md)); the PSS salt
length [constants](constants.md) select the `saltLength` option used with RSA_PKCS1_PSS_PADDING. The values
match Node.js's [crypto.constants](crypto.md#constants), but fibjs exports only these eight RSA entries, not
Node's DH, ENGINE, POINT_CONVERSION, SSL_OP and TLS version groups.

Concepts:

- **PKCS#1 v1.5 and OAEP**: RSA_PKCS1_PADDING (1) is the classic, deterministic scheme
  kept for protocols that require it; RSA_PKCS1_OAEP_PADDING (4) is randomized and the
  safe choice for new encryption protocols. OAEP is only for encryption; signatures use
  v1.5 or PSS. fibjs defaults publicEncrypt to OAEP and privateEncrypt to v1.5.
- **PSS salt lengths**: RSA_PSS_SALTLEN_DIGEST (-1) sets the salt length to the digest
  size; RSA_PSS_SALTLEN_MAX_SIGN (-2) is the legacy sign-only maximum salt length and the
  default of the [Sign](../../object/ifs/Sign.md) class; RSA_PSS_SALTLEN_AUTO (-2) is the OpenSSL name for
  auto-detecting the salt length when verifying. Both names share the value -2, and
  signing and verification must agree on the salt length.
- **Other paddings**: RSA_NO_PADDING (3) leaves the value unpadded, so the caller handles
  the leading block bytes, and RSA_X931_PADDING (5) is the ANSI X9.31 scheme; both are for
  interoperability with legacy systems.

Import:

```JavaScript
const constants = require('crypto').constants;
```

Example 1 — RSA-OAEP encryption and decryption:

```JavaScript
const crypto = require('crypto');
const C = crypto.constants;

const {
    publicKey,
    privateKey
} = crypto.generateKeyPairSync('rsa', {
    modulusLength: 2048
});

// OAEP is randomized: the safe choice for encryption.
const ciphertext = crypto.publicEncrypt({
    key: publicKey,
    padding: C.RSA_PKCS1_OAEP_PADDING
}, Buffer.from('secret message'));
const plaintext = crypto.privateDecrypt({
    key: privateKey,
    padding: C.RSA_PKCS1_OAEP_PADDING
}, ciphertext);
console.log(plaintext.toString()); // secret message
```

Example 2 — PKCS#1 v1.5 with privateEncrypt and publicDecrypt:

```JavaScript
const crypto = require('crypto');
const C = crypto.constants;

const {
    publicKey,
    privateKey
} = crypto.generateKeyPairSync('rsa', {
    modulusLength: 2048
});

// v1.5 is deterministic, so it is kept for protocols that require it.
const sealed = crypto.privateEncrypt({
    key: privateKey,
    padding: C.RSA_PKCS1_PADDING
}, Buffer.from('payload sealed with the private key'));
const opened = crypto.publicDecrypt({
    key: publicKey,
    padding: C.RSA_PKCS1_PADDING
}, sealed);
console.log(opened.toString()); // payload sealed with the private key
```

Example 3 — PSS signatures and salt lengths:

```JavaScript
const crypto = require('crypto');
const C = crypto.constants;

// The two names with the value -2.
console.log(C.RSA_PSS_SALTLEN_DIGEST, C.RSA_PSS_SALTLEN_MAX_SIGN,
    C.RSA_PSS_SALTLEN_AUTO); // -1 -2 -2

const {
    publicKey,
    privateKey
} = crypto.generateKeyPairSync('rsa', {
    modulusLength: 2048
});
const options = {
    key: privateKey,
    padding: C.RSA_PKCS1_PSS_PADDING,
    saltLength: C.RSA_PSS_SALTLEN_DIGEST
};
const signature = crypto.createSign('SHA256').update('data').sign(options);
const valid = crypto.createVerify('SHA256').update('data').verify({
    key: publicKey,
    padding: C.RSA_PKCS1_PSS_PADDING,
    saltLength: C.RSA_PSS_SALTLEN_DIGEST
}, signature);
console.log(valid); // true
```

## Constants
        
### RSA_PKCS1_PADDING
**PKCS#1 padding, the most commonly used RSA padding**

```JavaScript
const crypto_constants.RSA_PKCS1_PADDING = 1;
```

--------------------------
### RSA_NO_PADDING
**No padding, raw RSA encryption**

```JavaScript
const crypto_constants.RSA_NO_PADDING = 3;
```

--------------------------
### RSA_PKCS1_OAEP_PADDING
**PKCS#1 OAEP padding, providing more secure encryption**

```JavaScript
const crypto_constants.RSA_PKCS1_OAEP_PADDING = 4;
```

--------------------------
### RSA_X931_PADDING
**X9.31 padding**

```JavaScript
const crypto_constants.RSA_X931_PADDING = 5;
```

--------------------------
### RSA_PKCS1_PSS_PADDING
**PKCS#1 PSS padding, used for digital signatures**

```JavaScript
const crypto_constants.RSA_PKCS1_PSS_PADDING = 6;
```

--------------------------
### RSA_PSS_SALTLEN_DIGEST
**PSS padding: salt length matches the digest**

```JavaScript
const crypto_constants.RSA_PSS_SALTLEN_DIGEST = -1;
```

--------------------------
### RSA_PSS_SALTLEN_MAX_SIGN
**PSS padding: legacy sign-only maximum salt length (value -2)**

```JavaScript
const crypto_constants.RSA_PSS_SALTLEN_MAX_SIGN = -2;
```

--------------------------
### RSA_PSS_SALTLEN_AUTO
**PSS padding: auto-detect the salt length when verifying (value -2)**

```JavaScript
const crypto_constants.RSA_PSS_SALTLEN_AUTO = -2;
```

