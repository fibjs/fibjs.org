# 模块 os
操作系统与文件系统处理模块

使用方法：

```JavaScript
var os = require('os');
```

## 对象
        
### Service
**[Service](../../object/ifs/Service.md) 构造函数，参见 [Service](../../object/ifs/Service.md)**

```JavaScript
Service os.Service;
```

## 静态函数
        
### hostname
**查询当前运行环境主机名**

```JavaScript
static String os.hostname();
```

返回结果:
* String, 返回主机名

--------------------------
### endianness
**查询当前 CPU 的字节顺序**

```JavaScript
static String os.endianness();
```

返回结果:
* String, 返回字节顺序

--------------------------
### type
**查询当前运行环境操作系统名称**

```JavaScript
static String os.type();
```

返回结果:
* String, 返回系统名称

--------------------------
### release
**查询当前运行环境操作系统版本**

```JavaScript
static String os.release();
```

返回结果:
* String, 返回版本信息

--------------------------
### homedir
**查询当前用户目录**

```JavaScript
static String os.homedir();
```

返回结果:
* String, 返回目录字符串

--------------------------
### arch
**查询当前 cpu 环境**

```JavaScript
static String os.arch();
```

返回结果:
* String, 返回 cpu 类型，可能的结果为 'amd64', 'arm', 'arm64', 'ia32'

--------------------------
### loadavg
**查询运行环境 1分钟，5分钟，15分钟平均负载**

```JavaScript
static Array os.loadavg();
```

返回结果:
* Array, 返回包含三个负载数据的数组

--------------------------
### totalmem
**查询运行环境总内存，以字节为单位**

```JavaScript
static Long os.totalmem();
```

返回结果:
* Long, 返回内存数据

--------------------------
### freemem
**查询运行环境可用内存，以字节为单位**

```JavaScript
static Long os.freemem();
```

返回结果:
* Long, 返回内存数据

--------------------------
### cpus
**查询当前运行环境 cpu 个数和参数**

```JavaScript
static Array os.cpus();
```

返回结果:
* Array, 返回包含 cpu 参数的数组，每一项对应一个 cpu

--------------------------
### cpuNumbers
**查询当前运行环境 cpu 个数**

```JavaScript
static Integer os.cpuNumbers();
```

返回结果:
* Integer, 返回 cpu 个数

--------------------------
### tmpdir
**查询当前运行环境临时文件目录**

```JavaScript
static String os.tmpdir();
```

返回结果:
* String, 返回临时文件目录

--------------------------
### userInfo
**返回当前有效执行用户信息**

```JavaScript
static Object os.userInfo(Object options = {});
```

调用参数:
* options: Object, 用于解释结果字符串的字符编码

返回结果:
* Object, 当前有效执行用户信息

--------------------------
### networkInterfaces
**查询当前运行环境网络信息**

```JavaScript
static Object os.networkInterfaces();
```

返回结果:
* Object, 返回网卡信息

--------------------------
### printerInfo
**查询当前主机的打印机信息**

```JavaScript
static Array os.printerInfo();
```

返回结果:
* Array, 返回打印机信息

--------------------------
### openPrinter
**创建一个打印机输出对象**

```JavaScript
static BufferedStream os.openPrinter(String name) async;
```

调用参数:
* name: String, 打印机名称

返回结果:
* [BufferedStream](../../object/ifs/BufferedStream.md), 返回打印机输出对象

--------------------------
### platform
**查询当前平台名称**

```JavaScript
static String os.platform();
```

返回结果:
* String, 返回平台名称，可能的结果为 'darwin', 'freebsd', 'linux', 或 'win32'

--------------------------
### time
**解析时间字符串或查询运行环境当前时间**

```JavaScript
static Date os.time(String tmString = "");
```

调用参数:
* tmString: String, 时间字符串，缺省则查询当前时间

返回结果:
* Date, 返回 javascript Date 对象

--------------------------
### dateAdd
**时间计算函数，根据 part 指定计算时间**

```JavaScript
static Date os.dateAdd(Date d,
    Integer num,
    String part);
```

调用参数:
* d: Date, 指定用于计算 Date 对象
* num: Integer, 指定运算的数值
* part: String, 指定运算的时间部位，接收值为："year", "month", "day", "hour", "minute", "second"

返回结果:
* Date, 返回 javascript Date 对象

## 静态属性
        
### timezone
**Integer, 查询运行环境当前时区**

```JavaScript
static readonly Integer os.timezone;
```

--------------------------
### EOL
**String, 查询当前运行环境行结尾标识，posix:\"\\n\"；windows:\"\\r\\n\"**

```JavaScript
static readonly String os.EOL;
```

