# Object DbConnection
DbConnection is the base class of SQL database connections: it owns one session

with the server (or the database file) and exposes querying, prepared statements,
transactions and schema inspection

DbConnection is never constructed directly: `db.open` returns the subclass chosen by the
protocol prefix of the connection string ([SQLite](SQLite.md), [MySQL](MySQL.md), mssql, psql, dm or the generic
odbc [object](object.md)) and the per-engine `db.openXxx` methods return the same objects. Engine
independent code can be written against this class, using `type` to branch where the
engines differ.

Concepts:

- **Call forms**: `execute`, `format`, `prepare`, `iterate`, `getTables`, `getTableInfo`,
  `use` and the transaction methods are fiber-synchronous; their `...Async` aliases
  return a Promise and `db.promises` connections expose the same API as promises.
- **Parameters**: SQL text uses `?` placeholders. `execute(sql, ...args)` and `format`
  interpolate the escaped arguments into the string, while `prepare` returns a [Statement](Statement.md)
  that binds them when it runs (named `:name` and `?NNN` placeholders are bound by
  position too). Escaping: strings are quoted with doubled quotes, buffers become binary
  literals, Date becomes a SQL timestamp string and null/undefined becomes NULL.
- **Results**: queries return an array of row objects keyed by column name;
  INSERT/UPDATE/DELETE results carry `affected` and `insertId` (mssql has no
  `insertId`); a string with several statements returns an array of result sets.
- **Transactions**: without an argument, `begin`/`commit`/`rollback` drive the
  connection transaction. With a `point` name they use savepoints: begin creates
  `SAVEPOINT point`, commit runs `RELEASE SAVEPOINT point` and rollback runs
  `ROLLBACK TO point` (which keeps the savepoint on the stack, so release it with
  commit(point) or end the transaction with a plain rollback). `trans` wraps the three
  calls around a function; nested `trans` calls need a savepoint name.
- **One cursor per connection**: an open [Statement](Statement.md) cursor rejects `execute`, `prepare`,
  `iterate` and transaction control on the same connection with error number 20028 until
  the iterator is exhausted, `return()` is called or the for...of loop ends.
- **Dialect differences**: [SQLite](SQLite.md) rejects `use` and supports `columns()` on prepared
  statements, [MySQL](MySQL.md) and ODBC do not; mssql omits `insertId`. See the [SQLite](SQLite.md) and [MySQL](MySQL.md)
  classes.

Obtained from:
- `db.open(connString)` — the engine is selected by the protocol prefix;
- `db.openSQLite(...)`, `db.openMySQL(...)`, `db.openPSQL(...)`, `db.openMSSQL(...)`,
  `db.openDM(...)` and `db.openOdbc(...)` — one engine each;
- `db.promises` or the `...Async` aliases — promise-based forms of the same calls.

Example 1 — a round trip through the shared connection API:

```JavaScript
const db = require('db');
const conn = db.openSQLite(':memory:');

conn.execute('CREATE TABLE account (id INTEGER PRIMARY KEY, name TEXT, balance REAL)');
const inserted = conn.execute('INSERT INTO account (name, balance) VALUES (?, ?)', 'alice', 100);
console.log(inserted.affected, inserted.insertId); // 1 1

const rows = conn.execute('SELECT name, balance FROM account');
console.log(rows.length, rows[0].name); // 1 alice

conn.close();
```

Example 2 — a transaction that rolls back when the function throws:

```JavaScript
const db = require('db');
const conn = db.openSQLite(':memory:');
conn.execute('CREATE TABLE account (name TEXT, balance REAL)');
conn.execute('INSERT INTO account (name, balance) VALUES (?, ?)', 'alice', 100);

function transfer(from, to, amount) {
    return conn.trans((c) => {
        c.execute('UPDATE account SET balance = balance - ? WHERE name = ?', amount, from);
        c.execute('UPDATE account SET balance = balance + ? WHERE name = ?', amount, to);
        if (amount > c.execute('SELECT balance FROM account WHERE name = ?', from)[0].balance)
            throw new Error('insufficient funds'); // the throw rolls the transaction back
        return true;
    });
}

try {
    transfer('alice', 'bob', 500);
} catch (err) {
    console.log(err.message); // insufficient funds
}
console.log(conn.execute('SELECT balance FROM account WHERE name = ?', 'alice')[0].balance); // 100

conn.close();
```

## Inheritance
```dot
digraph {
    node [fontname="Helvetica,sans-Serif", fontsize=10, shape="record", style="filled", fillcolor="white"];

    object [tooltip="object", URL="object.md", label="{object|toString()\ltoJSON()\l}"];
    DbConnection [tooltip="DbConnection", fillcolor="lightgray", id="me", label="{DbConnection|type\l|close()\luse()\lgetTables()\lgetTableInfo()\lbegin()\lcommit()\lrollback()\ltrans()\lexecute()\lformat()\lprepare()\literate()\l}"];
    MySQL [tooltip="MySQL", URL="MySQL.md", label="{MySQL}"];
    SQLite [tooltip="SQLite", URL="SQLite.md", label="{SQLite}"];

    object -> DbConnection [dir=back];
    DbConnection -> MySQL [dir=back];
    DbConnection -> SQLite [dir=back];
}
```

## Properties
        
### type
**String, Queries the type of the current database connection**

```JavaScript
readonly String DbConnection.type;
```

Returns the engine name as a string: `"[SQLite](SQLite.md)"`, `"mysql"`, `"mssql"`, `"psql"`,
`"dm"` or `"odbc"`. The value is fixed when the connection is created and stays
readable after close, so it is the supported way to branch on engine-specific SQL.

## Methods
        
### close
**Closes the current database connection**

```JavaScript
DbConnection.close() async;
```

Releases the server session or the database file handle. [SQLite](SQLite.md) also closes every
prepared statement and active cursor of the connection; after close every operation
fails with error number 20009 and an open transaction is rolled back. [MySQL](MySQL.md) close is
idempotent, while [SQLite](SQLite.md) close on an already closed connection reports 20009.

--------------------------
### use
**Selects the default database of the current database connection**

```JavaScript
DbConnection.use(String dbName) async;
```

Parameters:
* dbName: String, the database name

Sends `USE <dbName>` to the server, with the name escaped as a string literal. It is
useful on [MySQL](MySQL.md) to switch the current schema; [SQLite](SQLite.md) has one database per file and
rejects the statement with error number 20024 (the [SQLite](SQLite.md) message mentions a USE
syntax error).

--------------------------
### getTables
**Gets information about all tables in the current database**

```JavaScript
NArray DbConnection.getTables() async;
```

Returns:
* NArray, returns an array containing table information; each element contains the table name and related properties

Returns one [object](object.md) per table, currently with a single `name` property, ordered by
name. [SQLite](SQLite.md) reads `sqlite_master` and skips the internal `sqlite_%` tables; [MySQL](MySQL.md)
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
NArray DbConnection.getTableInfo(String tableName) async;
```

Parameters:
* tableName: String, the table name to query

Returns:
* NArray, returns an array containing detailed table information; each element contains the field name, type, length, whether NULL is allowed and other properties

Each item is an [object](object.md) with the fixed keys `column_name`, `data_type`,
`character_maximum_length` (null when the engine does not report it), `is_nullable`
('YES' or 'NO') and `column_default`, ordered by column position. A table that does
not exist yields an empty array. [SQLite](SQLite.md) is implemented through `pragma_table_info`
and [MySQL](MySQL.md) through `information_schema.columns`, so both return the same keys.

--------------------------
### begin
**Starts a transaction on the current database connection**

```JavaScript
DbConnection.begin(String point = "") async;
```

Parameters:
* point: String, the transaction name, not specified by default

Without an argument the connection transaction is started with `BEGIN` ([SQLite](SQLite.md) uses
`BEGIN IMMEDIATE` so that a later write takes the WAL write lock up front). With
`point` a savepoint of that name is created through `SAVEPOINT point`, which is also
how a nested trans call is expressed. The call fails with error number 20028 while a
[Statement](Statement.md) cursor is open on the connection.

--------------------------
### commit
**Commits the transaction on the current database connection**

```JavaScript
DbConnection.commit(String point = "") async;
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
DbConnection.rollback(String point = "") async;
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
Boolean DbConnection.trans(Function(DbConnection conn) => Value func);
```

Parameters:
* func: Function(DbConnection conn) => Value, the function to execute in a transaction

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
Boolean DbConnection.trans(String point,
    Function(DbConnection conn) => Value func);
```

Parameters:
* point: String, the transaction name
* func: Function(DbConnection conn) => Value, the function to execute in a transaction

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
NArray DbConnection.execute(String sql) async;
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
NArray DbConnection.execute(String sql,
    ...args) async;
```

Parameters:
* sql: String, the format string; optional parameters are specified with ?. For example: 'SELECT FROM TEST WHERE [id]=?'
* args: ..., the optional parameter list

Returns:
* NArray, returns an array containing the result records; if the request is UPDATE or INSERT, the result also contains affected and insertId; mssql does not support insertId.

Each `?` in sql is replaced from left to right by the escaped form of the matching
argument: strings are quoted with doubled quotes, buffers become binary literals
([SQLite](SQLite.md) `x'[hex](../../module/ifs/hex.md)'`, [MySQL](MySQL.md) `0xhex`), numbers and BigInt are inserted as they are,
booleans as true/false, Date as a SQL timestamp string and null/undefined as NULL;
arrays expand to a parenthesized value list. Missing arguments leave the `?` in
place ([SQLite](SQLite.md) binds an unbound `?` as NULL) and extra arguments are ignored. The
values are escaped client-side, so the statement text is still sent as a whole;
prefer prepare() when the same statement runs repeatedly.

--------------------------
### format
**Formats an sql command and returns the formatted result**

```JavaScript
String DbConnection.format(String sql,
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
Statement DbConnection.prepare(String sql) async;
```

Parameters:
* sql: String, the query statement to prepare

Returns:
* [Statement](Statement.md), returns the prepared statement [object](object.md)

Only one statement is accepted: a multi-statement string fails with error number
20004 and an empty string with 20024. [SQLite](SQLite.md) compiles the statement immediately, so
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
Iterator DbConnection.iterate(String sql,
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
String DbConnection.toString();
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
Value DbConnection.toJSON(String key = "");
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

