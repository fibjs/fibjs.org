# Object Headers
The case-insensitive HTTP header collection of the Fetch API, inheriting from

[HttpCollection](HttpCollection.md)

Headers is both the [global](../../module/ifs/global.md) Headers class and [http.Headers](../../module/ifs/http.md#Headers) (the two names refer to the same
class), so the standard constructor and the fibjs [module](../../module/ifs/module.md) entry produce interchangeable
objects. It stores header fields as name/value pairs, compares names case-insensitively,
keeps them in lower case on the wire side and preserves every value of a repeated field.

Concepts:

- **Case-insensitive multi-map**: append() adds a value without touching the existing ones,
  set() replaces every value of a name, and has()/get()/delete() accept any casing. get()
  joins the values of a repeated field with ", " the way the Fetch API does; first() and
  all() (from [HttpCollection](HttpCollection.md)) return the raw values, and getSetCookie() returns the
  Set-Cookie values separately because that header must not be joined.
- **Values**: values are converted to strings and stored as given; the Fetch normalization
  that trims leading/trailing HTTP whitespace is not applied, so "  a  " stays padded
  (plans/compat-differences.md).
- **Names**: an empty name throws `TypeError [20004] Invalid argument.` Names are otherwise
  stored as given apart from the lower case form. The iteration helpers visit the entries in
  sorted name order, because Headers sorts before iterating (see [HttpCollection](HttpCollection.md)).
- **Construction**: from an [object](object.md), an array of [name, value] pairs or another Headers; an
  element that is not a pair throws `TypeError [20005] Failed to construct 'Headers':
  sequence elements must be pairs.` A Map or any other iterable of pairs is not accepted,
  unlike the Web standard.
- **No guard modes**: the Fetch immutable/request/response guards (forbidden header names,
  read-only response headers) are not implemented; names and values can always be changed.

Obtained from:
- `new Headers()` / `new Headers(init)` — the two constructors;
- `http.Headers` — the same class exported by the [http](../../module/ifs/http.md) [module](../../module/ifs/module.md);
- `[http.Request](../../module/ifs/http.md#Request)#headers` / `[HttpMessage](HttpMessage.md)#headers` — the headers of a message;
- `[http.Response](../../module/ifs/http.md#Response)#headers` — the headers of a response.

Example 1 — build headers and read them case-insensitively:

```JavaScript
const headers = new Headers();
headers.append('Content-Type', 'text/plain');
headers.append('X-Tag', 'a');
headers.append('x-tag', 'b');

console.log(headers.get('CONTENT-TYPE')); // text/plain
console.log(headers.get('x-tag')); // a, b (get joins the values)
console.log(headers.first('X-Tag')); // a
console.log(headers.has('missing')); // false
headers.delete('content-type');
console.log(headers.has('Content-Type')); // false
```

Example 2 — initialize from an [object](object.md) or an array of pairs and copy:

```JavaScript
const fromObject = new Headers({
    'Content-Type': 'application/json',
    'X-Trace': 42
});
const fromPairs = new Headers([
    ['Accept', 'text/html'],
    ['Accept', 'application/xml']
]);

console.log(fromObject.get('x-trace')); // 42
console.log(fromPairs.getAll('accept')); // [ 'text/html', 'application/xml' ]

const copy = new Headers(fromPairs);
copy.set('accept', 'text/plain');
console.log(fromPairs.getAll('accept').length, copy.getAll('accept').length); // 2 1
```

Example 3 — iterate in sorted order and read Set-Cookie separately:

```JavaScript
const headers = new Headers({
    'B-Header': '2',
    'A-Header': '1'
});
headers.append('Set-Cookie', 'a=1');
headers.append('set-cookie', 'b=2');

const lines = [];
for (const [name, value] of headers)
    lines.push(name + ': ' + value);
console.log(lines.join(', '));
// a-header: 1, b-header: 2, set-cookie: a=1, set-cookie: b=2

console.log(headers.get('set-cookie')); // a=1, b=2 (joined)
console.log(headers.getSetCookie()); // [ 'a=1', 'b=2' ]
```

## Inheritance
```dot
digraph {
    node [fontname="Helvetica,sans-Serif", fontsize=10, shape="record", style="filled", fillcolor="white"];

    object [tooltip="object", URL="object.md", label="{object|toString()\ltoJSON()\l}"];
    HttpCollection [tooltip="HttpCollection", URL="HttpCollection.md", label="{HttpCollection|operator[String]\literator()\l|clear()\lhas()\lfirst()\lget()\lall()\lgetAll()\lappend()\lset()\lremove()\ldelete()\lsort()\lforEach()\lkeys()\lvalues()\lentries()\l}"];
    Headers [tooltip="Headers", fillcolor="lightgray", id="me", label="{Headers|new Headers()\l|getSetCookie()\l}"];

    object -> HttpCollection [dir=back];
    HttpCollection -> Headers [dir=back];
}
```

## Constructors
        
### Headers
**Creates an empty Headers collection**

```JavaScript
new Headers();
```

No header fields are stored; the collection is ready for append()/set(). Equivalent to
`new Headers({})`.

--------------------------
**Creates a Headers collection from an [object](object.md), an array of pairs or another Headers**

```JavaScript
new Headers(Object | Array | Headers init);
```

Parameters:
* init: Object | Array | Headers, the initial fields: an [object](object.md), an array of [name, value] pairs or another Headers

The init argument is converted as follows:
- an [object](object.md)'s own enumerable properties become fields in enumeration order; each value is
  converted to a string (42 becomes "42") and a repeated name can only be produced with
  append();
- an array must contain [name, value] pairs of exactly two elements; any other element
  throws `TypeError [20005] Failed to construct 'Headers': sequence elements must be
  pairs.` Several pairs with the same name append several values;
- another Headers copies every entry into an independent collection, lower-casing the
  names on the way.
A Map or another iterable of pairs is not accepted, unlike the Web standard.

Example — initialize from an array of pairs:

```JavaScript
const headers = new Headers([
    ['Content-Type', 'text/html'],
    ['Accept', 'text/html']
]);

console.log(headers.get('content-type')); // text/html
console.log(headers.has('accept')); // true
```

## Operators
        
### @iterator
**Returns the default iterator over [name, value] pairs, an alias of entries**

```JavaScript
Iterator Headers.@iterator();
```

Returns:
* [Iterator](Iterator.md), an iterator with every [name, value] pair

The member is what `for ... of` and the spread syntax use on a collection; it yields
one [name, value] pair per stored entry, so a repeated name appears once per value.
Containers that sort on iteration sort first.

## Methods
        
### getSetCookie
**Returns every Set-Cookie value as a separate array element**

```JavaScript
String Headers.getSetCookie();
```

Returns:
* String, an array with every Set-Cookie value

get('set-cookie') joins the values with ", " like any repeated field, which is not
usable for Set-Cookie; this member returns the raw values in insertion order instead,
as the Fetch API specifies. An empty array is returned when the header is absent. The
member is available on the [global](../../module/ifs/global.md) Headers class and on [http.Headers](../../module/ifs/http.md#Headers) alike.

Example — collect the cookies of a response:

```JavaScript
const headers = new Headers();
headers.append('Set-Cookie', 'sid=a; Path=/');
headers.append('Set-Cookie', 'theme=dark; Path=/');

console.log(headers.getSetCookie());
// [ 'sid=a; Path=/', 'theme=dark; Path=/' ]
```

--------------------------
### clear
**Removes every entry from the container**

```JavaScript
Headers.clear();
```

The container becomes empty and the iteration helpers yield nothing afterwards. The
method is available on every concrete container.

--------------------------
### has
**Checks whether a name is present**

```JavaScript
Boolean Headers.has(String name);
```

Parameters:
* name: String, name to check

Returns:
* Boolean, true when the name exists

The comparison follows the case rules of the concrete container; Headers rejects an
empty name with error 20004 while [URLSearchParams](URLSearchParams.md) and [FormData](FormData.md) accept it.

Example — check a header through its case-insensitive name:

```JavaScript
const http = require('http');

const headers = new http.Headers({
    'Content-Type': 'text/plain'
});
console.log(headers.has('content-type')); // true
```

--------------------------
### first
**Queries the first value of a name**

```JavaScript
Variant Headers.first(String name);
```

Parameters:
* name: String, name to query

Returns:
* Variant, the first value, or null when the name does not exist

Values are returned in insertion order, so the first appended value wins. The result
is null when the name does not exist. Headers rejects an empty name with error 20004,
while [URLSearchParams](URLSearchParams.md) and [FormData](FormData.md) accept it.

Example — read the first value of a repeated header:

```JavaScript
const http = require('http');

const headers = new http.Headers();
headers.append('X-Tag', 'a');
headers.append('x-tag', 'b');
console.log(headers.first('X-TAG')); // a
console.log(headers.first('missing')); // null
```

--------------------------
### get
**Queries the first value of a name, an alias of first**

```JavaScript
Variant Headers.get(String name);
```

Parameters:
* name: String, name to query

Returns:
* Variant, the value of the name, or null when it does not exist

Headers overrides this member with a different semantic: its get joins every value of
the name with `, ` as required by the Fetch API, while first still returns only the
first raw value. The other containers return the same value as first.

--------------------------
### all
**Queries all values of a name, or the whole container as an [object](object.md)**

```JavaScript
NObject Headers.all(String name = "");
```

Parameters:
* name: String, name to query; an empty string returns the whole container

Returns:
* NObject, an array of values, or an [object](object.md) with every entry when the name is empty

Called with a non-empty name, the method returns an array with every value of that
name in insertion order and an empty array when the name is missing. Called with an
empty string or without an argument, it returns a plain [object](object.md) with every entry, where
a name that has several values becomes an array. [URLSearchParams](URLSearchParams.md) and [FormData](FormData.md), which
accept an empty name, return the whole container in that case; use getAll('') to read
the values of the empty name.

Example — collect every value of a name:

```JavaScript
const params = new URLSearchParams('tag=a&tag=b&tag=c');
console.log(params.all('tag')); // [ 'a', 'b', 'c' ]
console.log(params.all('missing')); // []
```

--------------------------
### getAll
**Queries all values of a name as an array**

```JavaScript
NArray Headers.getAll(String name);
```

Parameters:
* name: String, name to query

Returns:
* NArray, an array with every value of the name

Always returns an array, empty when the name is missing and including for the empty
name, so it is the value-oriented counterpart of all. Values keep the insertion order
of the container.

--------------------------
### append
**Appends every entry of an [object](object.md)**

```JavaScript
Headers.append(Object map);
```

Parameters:
* map: Object, [object](object.md) whose properties are appended

The own enumerable properties are visited in enumeration order; a property whose value
is an array appends every element in order, any other value appends a single entry,
and existing entries are not modified. Values are converted according to the container
(Headers and [URLSearchParams](URLSearchParams.md) store strings).

Example — append a group of headers:

```JavaScript
const http = require('http');

const headers = new http.Headers();
headers.append({
    'Accept-Encoding': 'gzip',
    'Set-Cookie': ['a=1', 'b=2']
});
console.log(headers.all('set-cookie')); // [ 'a=1', 'b=2' ]
```

--------------------------
**Appends one value, or every element of an array, for a name**

```JavaScript
Headers.append(String name,
    Array | Variant value);
```

Parameters:
* name: String, name to append
* value: Array | Variant, value, or array of values, to append

An array appends every element in order, any other value appends a single entry, and
existing entries are not modified. An empty name is rejected by Headers with error
20004 and accepted by [URLSearchParams](URLSearchParams.md) and [FormData](FormData.md).

Example — append two values of one name:

```JavaScript
const http = require('http');

const headers = new http.Headers();
headers.append('X-Tag', ['a', 'b']);
console.log(headers.all('x-tag')); // [ 'a', 'b' ]
```

--------------------------
**Appends an array of [name, value] entries**

```JavaScript
Headers.append(Array entries);
```

Parameters:
* entries: Array, array of [name, value] pairs to append

Every element of the argument must be an array of exactly two elements; a different
shape fails with a bad variable type error (20003). Elements are appended in order and
existing entries are not modified.

Example — append pairs through [URLSearchParams](URLSearchParams.md):

```JavaScript
const params = new URLSearchParams();
params.append([
    ['a', '1'],
    ['b', '2']
]);
console.log(params.toString()); // a=1&b=2
```

--------------------------
### set
**Sets every entry of an [object](object.md), replacing the existing values of each name**

```JavaScript
Headers.set(Object map);
```

Parameters:
* map: Object, [object](object.md) whose properties are set

The own enumerable properties are visited in enumeration order; a property whose value
is an array sets every element in order, any other value sets a single entry. Every
existing value of a name is removed before its new values are appended.

Example — replace a group of headers:

```JavaScript
const http = require('http');

const headers = new http.Headers({
    Accept: 'text/html',
    'X-Tag': 'old'
});
headers.set({
    Accept: 'application/json',
    'X-Tag': ['a', 'b']
});
console.log(headers.all('accept')); // [ 'application/json' ]
console.log(headers.all('x-tag')); // [ 'a', 'b' ]
```

--------------------------
**Sets one value, or every element of an array, for a name**

```JavaScript
Headers.set(String name,
    Array | Variant value);
```

Parameters:
* name: String, name to set
* value: Array | Variant, value, or array of values, to set

Every existing value of the name is removed first, then an array appends every element
in order or another value appends a single entry; a name that already existed therefore
moves to the end of the insertion order. An empty name is rejected by Headers with
error 20004 and accepted by [URLSearchParams](URLSearchParams.md) and [FormData](FormData.md).

--------------------------
### remove
**Removes every value of a name**

```JavaScript
Headers.remove(String name);
```

Parameters:
* name: String, name to remove

The name is looked up with the case rules of the container and removing a name that
does not exist is not an error. delete is an alias: the two differ only in that
`delete container[name]` can be used as an operator (its return value is not reliable,
see the operator member).

--------------------------
### delete
**Removes every value of a name, an alias of remove**

```JavaScript
Headers.delete(String name);
```

Parameters:
* name: String, name to remove

See remove. The `delete container[name]` operator removes the same entries, but its
result is always true in the current implementation, so [test](../../module/ifs/test.md) the removal with has
instead of relying on the return value.

--------------------------
### sort
**Sorts the entries by name in place**

```JavaScript
Headers.sort();
```

The sort is stable and compares names byte by byte, so upper-case letters sort before
lower-case ones. Sorting changes the order seen by every later operation, including
all() and toJSON(). The iteration helpers of Headers and of the collection returned by
[querystring.parse](../../module/ifs/querystring.md#parse) call sort automatically; [URLSearchParams](URLSearchParams.md) and [FormData](FormData.md) never sort
implicitly.

--------------------------
### forEach
**Visits every entry in order**

```JavaScript
Headers.forEach(Function(Value value, String key, Object obj) callback);
```

Parameters:
* callback: Function(Value value, String key, Object obj), function called with (value, name, collection)

The callback receives (value, name, collection); returning from the callback does not
stop the iteration. Containers that sort on iteration (Headers and the [querystring](../../module/ifs/querystring.md)
collection) sort before the first callback, so the names are visited in sorted order.

Example — list every header:

```JavaScript
const http = require('http');

const headers = new http.Headers({
    'B-Header': '1',
    'A-Header': '2'
});
headers.forEach((value, name) => console.log(name, value));
// a-header 2, then b-header 1 (names are lower-cased and sorted)
```

--------------------------
**Visits every entry in order with an explicit this value**

```JavaScript
Headers.forEach(Function(Value value, String key, Object obj) callback,
    Value thisArg);
```

Parameters:
* callback: Function(Value value, String key, Object obj), function called with (value, name, thisArg)
* thisArg: Value, value used as `this` inside the callback

Identical to forEach except that the callback runs with thisArg as `this` and receives
thisArg as its third argument instead of the collection.

--------------------------
### keys
**Returns an iterator over the names**

```JavaScript
Iterator Headers.keys();
```

Returns:
* [Iterator](Iterator.md), an iterator with every name

Repeated names appear once per entry; containers that sort on iteration sort first.
The iterator implements the standard iterator protocol, so it can be used in a
`for ... of` loop or queried with next().

Example — iterate names:

```JavaScript
const http = require('http');

const headers = new http.Headers({
    B: '1',
    A: '2'
});
for (const name of headers.keys())
    console.log(name); // a, then b (Headers sorts on iteration)
```

--------------------------
### values
**Returns an iterator over the values**

```JavaScript
Iterator Headers.values();
```

Returns:
* [Iterator](Iterator.md), an iterator with every value

Values are visited in the same order as the names of keys(), one value per entry.

--------------------------
### entries
**Returns an iterator over [name, value] pairs**

```JavaScript
Iterator Headers.entries();
```

Returns:
* [Iterator](Iterator.md), an iterator with every [name, value] pair

This is also the iterator used by `for ... of` and by spread on the container; a name
with several values appears once per value.

Example — turn query parameters into pairs:

```JavaScript
const params = new URLSearchParams('a=1&a=2');
console.log(JSON.stringify([...params])); // [["a","1"],["a","2"]]
```

--------------------------
### toString
**Returns the string form of the [object](object.md)**

```JavaScript
String Headers.toString();
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
Value Headers.toJSON(String key = "");
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

