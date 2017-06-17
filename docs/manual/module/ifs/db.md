# 模块 db
数据库访问模块

基础模块。可用于创建和操作数据库资源，引用方式：
```JavaScript
var db = require('db');
```
## 函数
        
### open
打开一个数据库，此方法为通用入口，根据提供的 connString 不同调用不同的引擎
```JavaScript
static object db.open(String connString) async;
```

调用参数:
* connString - 数据库描述，如：mysql://user:pass\@host/db

返回结果:
* 返回数据库连接对象

### openMySQL
打开一个 mysql 数据库
```JavaScript
static MySQL db.openMySQL(String connString) async;
```

调用参数:
* connString - 数据库描述，如：mysql://user:pass\@host/db

返回结果:
* 返回数据库连接对象

### openMSSQL
打开一个 mysql 数据库
```JavaScript
static MSSQL db.openMSSQL(String connString) async;
```

调用参数:
* connString - 数据库描述，如：mssql://user:pass\@host/db

返回结果:
* 返回数据库连接对象

### openSQLite
打开一个 sqlite 数据库
```JavaScript
static SQLite db.openSQLite(String connString) async;
```

调用参数:
* connString - 数据库描述，如：sqlite:test.db 或者 test.db

返回结果:
* 返回数据库连接对象

### openMongoDB
打开一个 mongodb 数据库
```JavaScript
static MongoDB db.openMongoDB(String connString) async;
```

调用参数:
* connString - 数据库描述

返回结果:
* 返回数据库连接对象

### openLevelDB
打开一个 leveldb 数据库
```JavaScript
static LevelDB db.openLevelDB(String connString) async;
```

调用参数:
* connString - 数据库描述，如：level:test.db 或者 test.db

返回结果:
* 返回数据库对象

### openRedis
打开一个 [Redis](/docs/manual/object/ifs/redis.md.html) 数据库
```JavaScript
static Redis db.openRedis(String connString) async;
```

调用参数:
* connString - 数据库描述，如：redis://server:port 或者 "server"

返回结果:
* 返回数据库连接对象

### format
格式化一个 sql 命令，并返回格式化结果
```JavaScript
static String db.format(String sql,
                ...);
```

调用参数:
* sql - 格式化字符串，可选参数用 ? 指定。例如：'SELECT FROM TEST WHERE [id]=?'
* ... - 可选参数列表

返回结果:
* 返回格式化之后的 sql 命令

### formatMySQL
格式化一个 mysql 命令，并返回格式化结果
```JavaScript
static String db.formatMySQL(String sql,
                ...);
```

调用参数:
* sql - 格式化字符串，可选参数用 ? 指定。例如：'SELECT FROM TEST WHERE [id]=?'
* ... - 可选参数列表

返回结果:
* 返回格式化之后的 sql 命令

### formatMSSQL
格式化一个 mssql 命令，并返回格式化结果
```JavaScript
static String db.formatMSSQL(String sql,
                ...);
```

调用参数:
* sql - 格式化字符串，可选参数用 ? 指定。例如：'SELECT FROM TEST WHERE [id]=?'
* ... - 可选参数列表

返回结果:
* 返回格式化之后的 sql 命令

### escape
将字符串编码为 SQL 安全编码字符串
```JavaScript
static String db.escape(String str,
                Boolean mysql = false);
```

调用参数:
* str - 要编码的字符串
* mysql - 指定 mysql 编码，缺省为 false

返回结果:
* 返回编码后的字符串

