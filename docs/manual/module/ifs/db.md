# 模块 db
数据库访问模块

基础模块。可用于创建和操作数据库资源，引用方式：

```JavaScript
var db = require('db');
var conn = db.open('rng://user:pass@host:port/dbname');
```

通过指定数据库引擎，可以建立不同的数据库链接。fibjs 内置两个 sql 引擎：sqlite 和 mysql，同时还支持通过 ODBC/unixODBC 连接更多数据库，基于 ODBC/unixODBC，fibjs 构建了与 mssql 和 PostgreSQL 的驱动。
为了使用 ODBC/unixODBC，需要安装对应的驱动，在 posix 下使用 mssql 需要安装 freetds，使用 PostgreSQL 需要安装 psqlodbc。
正常情况下驱动安装成功即可直接使用，无需进一步配置。

## 静态函数
        
### open
**打开一个数据库，此方法为通用入口，根据提供的 connString 不同调用不同的引擎**

```JavaScript
static object db.open(String connString) async;
```

调用参数:
* connString: String, 数据库描述，如：mysql://user:pass@host/db

返回结果:
* [object](../../object/ifs/object.md), 返回数据库连接对象

--------------------------
### openMySQL
**打开一个 mysql 数据库**

```JavaScript
static MySQL db.openMySQL(String connString) async;
```

调用参数:
* connString: String, 数据库描述，如：mysql://user:pass@host/db

返回结果:
* [MySQL](../../object/ifs/MySQL.md), 返回数据库连接对象

--------------------------
### openSQLite
**打开一个 sqlite 数据库**

```JavaScript
static SQLite db.openSQLite(String connString) async;
```

调用参数:
* connString: String, 数据库描述，如：sqlite:test.db 或者 test.db

返回结果:
* [SQLite](../../object/ifs/SQLite.md), 返回数据库连接对象

--------------------------
### openOdbc
**打开一个 sqlite 数据库**

```JavaScript
static DbConnection db.openOdbc(String connString) async;
```

调用参数:
* connString: String, 数据库描述，如：odbc://user:pass@host/db?driver=PostgreSQL%20ANSI

返回结果:
* [DbConnection](../../object/ifs/DbConnection.md), 返回数据库连接对象

--------------------------
### openMSSQL
**打开一个 mssql 数据库**

```JavaScript
static DbConnection db.openMSSQL(String connString) async;
```

调用参数:
* connString: String, 数据库描述，如：mssql://user:pass@host/db

返回结果:
* [DbConnection](../../object/ifs/DbConnection.md), 返回数据库连接对象

为了建立与 mssql 的连接，在 posix 下必须安装 freetds 的 odbc 驱动，也可以通过指定驱动来使用微软的 mssql 驱动，指定驱动的方式，是在 [url](url.md) 后增加 ?driver=msodbcsql17[.so/.dylib] 的选项。

--------------------------
### openPSQL
**打开一个 PostgresSQL 数据库**

```JavaScript
static DbConnection db.openPSQL(String connString) async;
```

调用参数:
* connString: String, 数据库描述，如：psql://user:pass@host/db

返回结果:
* [DbConnection](../../object/ifs/DbConnection.md), 返回数据库连接对象

 为了建立与 PostgresSQL 的连接，必须安装 PostgresSQL 的 odbc 驱动。
 在 ubuntu 下，使用以下命令安装 PostgresSQL 的 odbc 驱动：
```bash
 apt install unixodbc unixodbc-dev odbc-postgresql
```
 在 mac 下，使用以下命令安装 PostgresSQL 的 odbc 驱动：
```bash
 brew install unixodbc psqlodbc
```
 同时，你需要将 brew 安装的 odbc 驱动的路径添加到环境变量中。通常是 /usr/local/lib 或者 /opt/homebrew/lib。你可以使用 find 来查找 libodbc.dylib 所在的路径：
```bash
find /usr/local/ -name libodbc.dylib
find /opt/homebrew/ -name libodbc.dylib
```
 编辑 ~/.zshrc，添加以下内容：
```bash
 export DYLD_LIBRARY_PATH=/opt/homebrew/lib:$DYLD_LIBRARY_PATH
```

--------------------------
### openLevelDB
**打开一个 leveldb 数据库**

```JavaScript
static LevelDB db.openLevelDB(String connString) async;
```

调用参数:
* connString: String, 数据库描述，如：level:test.db 或者 test.db

返回结果:
* [LevelDB](../../object/ifs/LevelDB.md), 返回数据库对象

--------------------------
### openRedis
**打开一个 [Redis](../../object/ifs/Redis.md) 数据库**

```JavaScript
static Redis db.openRedis(String connString) async;
```

调用参数:
* connString: String, 数据库描述，如：redis://server:port 或者 "server"

返回结果:
* [Redis](../../object/ifs/Redis.md), 返回数据库连接对象

