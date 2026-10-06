# Object SQLite
SQLite is the [DbConnection](DbConnection.md) implementation for SQLite databases: one file (or an

in-memory database) with no server [process](../../module/ifs/process.md)

Obtained from:
- `db.openSQLite(connString)` — accepts `sqlite:[path](../../module/ifs/path.md)`, `sqlite://[path](../../module/ifs/path.md)` and a bare file
  [path](../../module/ifs/path.md);
- `db.open('sqlite:[path](../../module/ifs/path.md)')` — the same connection through the generic entry.

Concepts:

- **[File](File.md) or memory**: the [path](../../module/ifs/path.md) is opened READWRITE|CREATE, so a missing file is created.
  `:memory:` opens a private in-memory database and an empty string opens a temporary
  on-disk database; both discard their data when the connection closes. `fileName`
  reports the [path](../../module/ifs/path.md) exactly as it was given.
- **PRAGMAs**: every connection enables WAL journaling, `synchronous=normal` and
  `temp_store=memory`; when the file system cannot provide WAL it silently falls back to
  the rollback journal, and an in-memory database reports `memory` as its journal mode.
  The busy handler waits up to `timeout` milliseconds (default 5000) for a locked
  database before reporting a busy error.
- **Type affinity**: SQLite stores a type per value, not per column. BLOB and binary
  columns come back as [Buffer](Buffer.md), DATETIME/TIMESTAMP/DATE/TIME columns are parsed into
  Date, NULL as null and other values as number or string. INTEGER values are read
  through a double, so values beyond 2^53 lose precision.
- **Transactions**: begin uses `BEGIN IMMEDIATE` so a read-then-write transaction takes
  the WAL write lock up front instead of failing on a lock upgrade; the savepoint forms
  of begin/commit/rollback behave as described in [DbConnection](DbConnection.md).
- **Built-in extensions**: FTS5 full-text search and the `vec_index` virtual table for
  vector search through `vec_search` are compiled into the engine.

Example 1 — file database round trip:

```JavaScript
const db = require('db');
const fs = require('fs');
const os = require('os');
const path = require('path');

const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'fibjs-sqlite-'));
const conn = db.openSQLite(path.join(dir, 'notes.db'));
console.log(conn.fileName.endsWith('notes.db')); // true

conn.execute('CREATE TABLE note (id INTEGER PRIMARY KEY, body TEXT)');
conn.execute('INSERT INTO note (body) VALUES (?)', 'hello');
console.log(conn.execute('SELECT COUNT(*) AS n FROM note')[0].n); // 1

conn.close();
fs.rmSync(dir, {
    recursive: true,
    force: true
});
```

Example 2 — vector search with the vec_index extension:

```JavaScript
const db = require('db');
const conn = db.openSQLite(':memory:');

conn.execute('CREATE VIRTUAL TABLE vindex USING vec_index(title(3))');
conn.execute('INSERT INTO vindex (title, rowid) VALUES (?, ?)', '[1,2,3]', 3);

const found = conn.execute(
    'SELECT rowid, distance FROM vindex WHERE vec_search(title, ?)', '[1,2,5.1234]');
console.log(found[0].rowid); // 3, the closest vector

conn.close();
```

## Inheritance
```dot
digraph {
    node [fontname="Helvetica,sans-Serif", fontsize=10, shape="record", style="filled", fillcolor="white"];

    object [tooltip="object", URL="object.md", label="{object|toString()\ltoJSON()\l}"];
    DbConnection [tooltip="DbConnection", URL="DbConnection.md", label="{DbConnection|type\l|close()\luse()\lgetTables()\lgetTableInfo()\lbegin()\lcommit()\lrollback()\ltrans()\lexecute()\lformat()\lprepare()\literate()\l}"];
    SQLite [tooltip="SQLite", fillcolor="lightgray", id="me", label="{SQLite|fileName\ltimeout\l|backup()\l}"];

    object -> DbConnection [dir=back];
    DbConnection -> SQLite [dir=back];
}
```

## Properties
        
### fileName
**String, The file name of the current database**

```JavaScript
readonly String SQLite.fileName;
```

Returns the [path](../../module/ifs/path.md) exactly as it was passed to [db.openSQLite](../../module/ifs/db.md#openSQLite) or [db.open](../../module/ifs/db.md#open), so a relative
[path](../../module/ifs/path.md) stays relative; `:memory:` is returned for an in-memory database and an empty
string for a temporary one. The call fails with error number 20009 when the
connection is closed.

--------------------------
### timeout
**Integer, Queries and sets the database timeout in milliseconds**

```JavaScript
Integer SQLite.timeout;
```

The busy timeout: how long SQLite waits for a locked database (a concurrent writer
or an exclusive lock) before reporting a busy error. Default 5000; 0 disables the
wait and makes a locked database fail immediately. The value is applied to the
current connection and is also used by backup. Reading or assigning it on a closed
connection fails with error number 20009.

Example — read and change the busy timeout:

```JavaScript
const db = require('db');
const conn = db.openSQLite(':memory:');
console.log(conn.timeout); // 5000
conn.timeout = 1000;
console.log(conn.timeout); // 1000
conn.close();
```

--------------------------
### type
**String, Queries the type of the current database connection**

```JavaScript
readonly String SQLite.type;
```

Returns the engine name as a string: `"SQLite"`, `"mysql"`, `"mssql"`, `"psql"`,
`"dm"` or `"odbc"`. The value is fixed when the connection is created and stays
readable after close, so it is the supported way to branch on engine-specific SQL.

## Methods
        
### backup
**Backs up the current database to a new file**

```JavaScript
SQLite.backup(String fileName) async;
```

Parameters:
* fileName: String, the database file name to back up to

Copies the whole database into fileName with the SQLite online backup API,
restarting on locks until the copy completes; the source connection stays open and
usable while the backup runs. The destination accepts the same forms as
openSQLite (`sqlite:[path](../../module/ifs/path.md)`, `sqlite://[path](../../module/ifs/path.md)` or a bare [path](../../module/ifs/path.md)), is created when missing
and overwritten when it exists; its parent directory must already exist, otherwise
the call fails with error number 20024. [Lock](Lock.md) waits are bounded by timeout.

Example — back up a database and open the copy:

```JavaScript
const db = require('db');
const fs = require('fs');
const os = require('os');
const path = require('path');

const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'fibjs-sqlite-'));
const conn = db.openSQLite(path.join(dir, 'main.db'));
conn.execute('CREATE TABLE note (body TEXT)');
conn.execute('INSERT INTO note (body) VALUES (?)', 'kept');
conn.backup(path.join(dir, 'backup.db'));

const copy = db.openSQLite(path.join(dir, 'backup.db'));
console.log(copy.execute('SELECT COUNT(*) AS n FROM note')[0].n); // 1
copy.close();
conn.close();
fs.rmSync(dir, {
    recursive: true,
    force: true
});
```

--------------------------
### close
**Closes the current database connection**

```JavaScript
SQLite.close() async;
```

Releases the server session or the database file handle. SQLite also closes every
prepared statement and active cursor of the connection; after close every operation
fails with error number 20009 and an open transaction is rolled back. [MySQL](MySQL.md) close is
idempotent, while SQLite close on an already closed connection reports 20009.

--------------------------
### use
**Selects the default database of the current database connection**

```JavaScript
SQLite.use(String dbName) async;
```

Parameters:
* dbName: String, the database name

Sends `USE <dbName>` to the server, with the name escaped as a string literal. It is
useful on [MySQL](MySQL.md) to switch the current schema; SQLite has one database per file and
rejects the statement with error number 20024 (the SQLite message mentions a USE
syntax error).

--------------------------
### getTables
**Gets information about all tables in the current database**

```JavaScript
NArray SQLite.getTables() async;
```

Returns:
* NArray, returns an array containing table information; each element contains the table name and related properties

Returns one [object](object.md) per table, currently with a single `name` property, ordered by
name. SQLite reads `sqlite_master` and skips the internal `sqlite_%` tables; [MySQL](MySQL.md)
reads `information_schema.tables` of the current database. Use getTableInfo for the
columns of one table.

Example — list the tables and inspect one of them:

```JavaScript
const db = require('db');
const conn = db.openSQLite(':memory:');
conn.execute('CREATE TABLE user (id INTEGER PRIMARY KEY)');
conn.execute('CREATE TABLE log (msg TEXT)');

console.log(conn.getTables().map((t) => t.name).join(',')); // log,user
console.log(conn.getTableInfo('user')[0].column_name); // id

conn.close();
```

--------------------------
### getTableInfo
**Gets detailed information about the given table**

```JavaScript
NArray SQLite.getTableInfo(String tableName) async;
```

Parameters:
* tableName: String, the table name to query

Returns:
* NArray, returns an array containing detailed table information; each element contains the field name, type, length, whether NULL is allowed and other properties

Each item is an [object](object.md) with the fixed keys `column_name`, `data_type`,
`character_maximum_length` (null when the engine does not report it), `is_nullable`
('YES' or 'NO') and `column_default`, ordered by column position. A table that does
not exist yields an empty array. SQLite is implemented through `pragma_table_info`
and [MySQL](MySQL.md) through `information_schema.columns`, so both return the same keys.

--------------------------
### begin
**Starts a transaction on the current database connection**

```JavaScript
SQLite.begin(String point = "") async;
```

Parameters:
* point: String, the transaction name, not specified by default

Without an argument the connection transaction is started with `BEGIN` (SQLite uses
`BEGIN IMMEDIATE` so that a later write takes the WAL write lock up front). With
`point` a savepoint of that name is created through `SAVEPOINT point`, which is also
how a nested trans call is expressed. The call fails with error number 20028 while a
[Statement](Statement.md) cursor is open on the connection.

--------------------------
### commit
**Commits the transaction on the current database connection**

```JavaScript
SQLite.commit(String point = "") async;
```

Parameters:
* point: String, the transaction name, not specified by default

Without an argument the current transaction is committed with `COMMIT`; with `point`
the named savepoint is released through `RELEASE SAVEPOINT point`. Committing
without an active transaction reports error number 20024.

--------------------------
### rollback
**Rolls back the transaction on the current database connection**

```JavaScript
SQLite.rollback(String point = "") async;
```

Parameters:
* point: String, the transaction name, not specified by default

Without an argument the current transaction is rolled back with `ROLLBACK`; with
`point` the savepoint is rolled back with `ROLLBACK TO point`. Note that
`ROLLBACK TO` keeps the savepoint on the stack and the surrounding transaction open:
release it with commit(point) or finish the transaction with a plain
commit/rollback. Rolling back without an active transaction reports error number
20024.

--------------------------
### trans
**Enters a transaction to execute a function, and commits or rolls back depending on the function result**

```JavaScript
Boolean SQLite.trans(Function(DbConnection conn) => Value func);
```

Parameters:
* func: Function([DbConnection](DbConnection.md) conn) => Value, the function to execute in a transaction

Returns:
* Boolean, returns whether the transaction was committed: returns true on a normal commit, false on rollback, and throws if the transaction fails

The function is called with the connection as both its argument and its `this`, and
its outcome decides the transaction:
- a return value other than false, including no return at all, commits;
- returning false rolls back and makes trans return false;
- throwing rolls back and rethrows the error to the caller.

Inside an existing transaction call the two-argument form with a savepoint name: a
nested trans without a name issues a second BEGIN and fails on engines that reject
nested transactions.

Example — commit, explicit rollback and rollback on throw:

```JavaScript
const db = require('db');
const conn = db.openSQLite(':memory:');
conn.execute('CREATE TABLE log (msg TEXT)');

console.log(conn.trans((c) => {
    c.execute('INSERT INTO log (msg) VALUES (?)', 'kept');
    return true;
})); // true

console.log(conn.trans((c) => {
    c.execute('INSERT INTO log (msg) VALUES (?)', 'discarded');
    return false;
})); // false

try {
    conn.trans((c) => {
        c.execute('INSERT INTO log (msg) VALUES (?)', 'thrown');
        throw new Error('stop');
    });
} catch (err) {
    console.log(err.message); // stop
}
console.log(conn.execute('SELECT * FROM log').length); // 1

conn.close();
```

--------------------------
**Enters a transaction to execute a function, and commits or rolls back depending on the function result**

```JavaScript
Boolean SQLite.trans(String point,
    Function(DbConnection conn) => Value func);
```

Parameters:
* point: String, the transaction name
* func: Function([DbConnection](DbConnection.md) conn) => Value, the function to execute in a transaction

Returns:
* Boolean, returns whether the transaction was committed: returns true on a normal commit, false on rollback, and throws if the transaction fails

Same outcome rules as the one-argument form, with `point` naming the savepoint that
wraps the call: begin(point) creates `SAVEPOINT point`, commit(point) releases it and
a false return or a throw rolls back with `ROLLBACK TO point`. Because the rollback
does not release the savepoint, the surrounding transaction stays open; call it from
inside an outer transaction (or trans() with no name) and let the outer call finish,
otherwise the connection remains inside a transaction.

--------------------------
### execute
**Executes an sql command and returns the execution result**

```JavaScript
NArray SQLite.execute(String sql) async;
```

Parameters:
* sql: String, the sql string

Returns:
* NArray, returns an array containing the result records; if the request is UPDATE or INSERT, the result also contains affected and insertId; mssql does not support insertId.

The result of a SELECT is an array of row objects keyed by column name. An
INSERT/UPDATE/DELETE result is an array-like whose `affected` and `insertId`
properties carry the changed row count and the generated key (mssql does not provide
`insertId`). A string containing several statements returns an array with one result
set per statement. This one-argument form does not interpolate values; to pass
parameters use execute(sql, ...args), prepare or format. Engine errors are reported
with number 20024, calls on a closed connection with 20009 and a busy cursor with
20028.

Example — run a query and inspect an update result:

```JavaScript
const db = require('db');
const conn = db.openSQLite(':memory:');
conn.execute('CREATE TABLE user (id INTEGER PRIMARY KEY, name TEXT)');

const rows = conn.execute('SELECT * FROM user');
console.log(rows.length); // 0

const inserted = conn.execute("INSERT INTO user (name) VALUES ('alice')");
console.log(inserted.affected, inserted.insertId); // 1 1

conn.close();
```

--------------------------
**Executes an sql command and returns the execution result; the string can be formatted with the given parameters**

```JavaScript
NArray SQLite.execute(String sql,
    ...args) async;
```

Parameters:
* sql: String, the format string; optional parameters are specified with ?. For example: 'SELECT FROM TEST WHERE [id]=?'
* args: ..., the optional parameter list

Returns:
* NArray, returns an array containing the result records; if the request is UPDATE or INSERT, the result also contains affected and insertId; mssql does not support insertId.

Each `?` in sql is replaced from left to right by the escaped form of the matching
argument: strings are quoted with doubled quotes, buffers become binary literals
(SQLite `x'[hex](../../module/ifs/hex.md)'`, [MySQL](MySQL.md) `0xhex`), numbers and BigInt are inserted as they are,
booleans as true/false, Date as a SQL timestamp string and null/undefined as NULL;
arrays expand to a parenthesized value list. Missing arguments leave the `?` in
place (SQLite binds an unbound `?` as NULL) and extra arguments are ignored. The
values are escaped client-side, so the statement text is still sent as a whole;
prefer prepare() when the same statement runs repeatedly.

--------------------------
### format
**Formats an sql command and returns the formatted result**

```JavaScript
String SQLite.format(String sql,
    ...args);
```

Parameters:
* sql: String, the format string; optional parameters are specified with ?. For example: 'SELECT FROM TEST WHERE [id]=?'
* args: ..., the optional parameter list

Returns:
* String, returns the formatted sql command

Returns the SQL with every `?` replaced by the escaped argument, using the same
rules as execute(sql, ...args) (see there for the per-type escaping). The command is
not executed, and the method does not touch the engine, so it keeps working after
close(); it is the way to build SQL text for logging or for a later execute. Passing
a function as an argument fails with error number 20004.

Example — see the escaped forms of the values:

```JavaScript
const db = require('db');
const conn = db.openSQLite(':memory:');
console.log(conn.format('SELECT ?, ?, ?', "it's", null, new Date(0)));
// SELECT 'it''s', NULL, '1970-01-01 00:00:00'
conn.close();
```

--------------------------
### prepare
**Compiles an SQL statement into a prepared statement (single statement) supporting row-by-row reads**

```JavaScript
Statement SQLite.prepare(String sql) async;
```

Parameters:
* sql: String, the query statement to prepare

Returns:
* [Statement](Statement.md), returns the prepared statement [object](object.md)

Only one statement is accepted: a multi-statement string fails with error number
20004 and an empty string with 20024. SQLite compiles the statement immediately, so
syntax errors and missing tables surface here; [MySQL](MySQL.md) and ODBC defer compilation to
the first execution. The call fails with 20028 while another cursor is open on the
connection and with 20009 when the connection is closed. The returned [Statement](Statement.md)
belongs to this connection and can be executed repeatedly in get/all/run/iterate
mode.

Example — prepare once and execute with different parameters:

```JavaScript
const db = require('db');
const conn = db.openSQLite(':memory:');
conn.execute('CREATE TABLE t (v TEXT)');
conn.execute("INSERT INTO t VALUES ('a')");
conn.execute("INSERT INTO t VALUES ('b')");

const stmt = conn.prepare('SELECT * FROM t WHERE v = ?');
console.log(stmt.get('a').v); // a
console.log(stmt.get('z')); // undefined
console.log(stmt.all().length); // 2
stmt.close();
conn.close();
```

--------------------------
### iterate
**Executes and returns an iterator over the rows (equivalent to stmt.iterate(...args))**

```JavaScript
Iterator SQLite.iterate(String sql,
    ...args) async;
```

Parameters:
* sql: String, the query statement to prepare
* args: ..., the bound parameters

Returns:
* [Iterator](Iterator.md), returns a row iterator that produces row objects one by one with bounded memory

Traversing with for...of is recommended: the engine calls the iterator's return()
when the loop ends, breaks or throws, so the cursor is released automatically and the
connection is immediately reusable. Calling next()/return() manually is dangerous:
the iterator keeps the cursor open until the results are exhausted; if return() is
forgotten on break or exception, the leaked cursor occupies the connection. While a
cursor is open, execute, prepare, iterate and transaction control on the same
connection fail with error number 20028.

Example — stream rows and stop early:

```JavaScript
const db = require('db');
const conn = db.openSQLite(':memory:');
conn.execute('CREATE TABLE t (v INTEGER)');
for (let i = 0; i < 5; i++)
    conn.execute('INSERT INTO t VALUES (?)', i);

for (const row of conn.iterate('SELECT v FROM t ORDER BY v')) {
    if (row.v === 2)
        break; // breaking releases the cursor
    console.log(row.v); // 0, then 1
}
console.log(conn.execute('SELECT COUNT(*) AS n FROM t')[0].n); // 5
conn.close();
```

--------------------------
### toString
**Returns the string form of the [object](object.md)**

```JavaScript
String SQLite.toString();
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
Value SQLite.toJSON(String key = "");
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

