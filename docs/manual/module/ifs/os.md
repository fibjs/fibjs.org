# 模块 os
操作系统与文件系统处理模块

使用方法：
```JavaScript
var os = require('os');
```
## 函数
        
### hostname
查询当前运行环境主机名
```JavaScript
String os.hostname();
```

### endianness
the endianness of the CPU for which the fibjs binary was compiled.
```JavaScript
String os.endianness();
```

### type
查询当前运行环境操作系统名称
```JavaScript
String os.type();
```

### release
查询当前运行环境操作系统版本
```JavaScript
String os.release();
```

### homedir
查询当前用户目录
```JavaScript
String os.homedir();
```

### arch
查询当前 cpu 环境，可能的结果为 &#39;amd64&#39;, &#39;arm&#39;, &#39;arm64&#39;, &#39;ia32&#39;
```JavaScript
String os.arch();
```

### uptime
查询运行环境运行时间，以秒为单位
```JavaScript
Number os.uptime();
```

返回结果:
* 返回表示时间的数值

### loadavg
查询运行环境 1分钟，5分钟，15分钟平均负载
```JavaScript
Array os.loadavg();
```

返回结果:
* 返回包含三个负载数据的数组

### totalmem
查询运行环境总内存，以字节为单位
```JavaScript
Long os.totalmem();
```

返回结果:
* 返回内存数据

### freemem
查询运行环境可用内存，以字节为单位
```JavaScript
Long os.freemem();
```

返回结果:
* 返回内存数据

### cpus
查询当前运行环境 cpu 个数和参数
```JavaScript
Array os.cpus();
```

返回结果:
* 返回包含 cpu 参数的数组，每一项对应一个 cpu

### cpuNumbers
查询当前运行环境 cpu 个数
```JavaScript
Integer os.cpuNumbers();
```

返回结果:
* 返回 cpu 个数

### tmpdir
查询当前运行环境临时文件目录
```JavaScript
String os.tmpdir();
```

返回结果:
* 返回临时文件目录

### userInfo
返回当前有效执行用户信息
```JavaScript
Object os.userInfo(Object options = {});
```

调用参数:

返回结果:
* 当前有效执行用户信息

### networkInterfaces
查询当前运行环境网络信息
```JavaScript
Object os.networkInterfaces();
```

返回结果:
* 返回网卡信息

### printerInfo
查询当前主机的打印机信息
```JavaScript
Array os.printerInfo();
```

返回结果:
* 返回打印机信息

### openPrinter
创建一个打印机输出对象
```JavaScript
BufferedStream os.openPrinter(String name);
```

调用参数:
* name - 打印机名称

返回结果:
* 返回打印机输出对象

### platform
查询当前平台名称，可能的结果为 &#39;darwin&#39;, &#39;freebsd&#39;, &#39;linux&#39;, 或 &#39;win32&#39;
```JavaScript
String os.platform();
```

### time
解析时间字符串或查询运行环境当前时间
```JavaScript
Date os.time(String tmString = "");
```

调用参数:
* tmString - 时间字符串，缺省则查询当前时间

返回结果:
* 返回 javascript Date 对象

### dateAdd
时间计算函数，根据 part 指定计算时间
```JavaScript
Date os.dateAdd(Date d,
                Integer num,
                String part);
```

调用参数:
* d - 指定用于计算 Date 对象
* num - 指定运算的数值
* part - 指定运算的时间部位，接收值为：&#34;year&#34;, &#34;month&#34;, &#34;day&#34;, &#34;hour&#34;, &#34;minute&#34;, &#34;second&#34;

返回结果:
* 返回 javascript Date 对象

### memoryUsage
查询当前进程内存使用报告
```JavaScript
Object os.memoryUsage();
```

返回结果:
* 返回包含内存报告

内存报告生成类似以下结果：
```JavaScript
{
  "rss": 8622080,
  "heapTotal": 4083456,
  "heapUsed": 1621800,
  "nativeObjects": 122
}
```
其中：
- rss 返回进程当前占用物理内存大小
- heapTotal 返回 v8 引擎堆内存大小
- heapUsed 返回 v8 引擎正在使用堆内存大小
- nativeObjects 返回当前有效内置对象数
## 属性
        
### timezone
查询运行环境当前时区
```JavaScript
readonly Integer os.timezone;
```

### EOL
查询当前运行环境行结尾标识，posix:\&#34;\\n\&#34;；windows:\&#34;\\r\\n\&#34;
```JavaScript
readonly String os.EOL;
```

### execPath
查询当前运行执行文件完整路径
```JavaScript
readonly String os.execPath;
```

