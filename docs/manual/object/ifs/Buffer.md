# 对象 Buffer
二进制数据缓存对象，用于 io 读写的数据处理

Buffer 对象为全局基础类，在任何时候都可以直接以 new Buffer(...) 创建：
```JavaScript
var buf = new Buffer();
```
## 构造函数
        
### Buffer
缓存对象构造函数
```JavaScript
 new Buffer(Array datas);
```

调用参数:
* datas - 初始化数据数组

--------------------------
缓存对象构造函数
```JavaScript
 new Buffer(ArrayBuffer datas);
```

调用参数:
* datas - 初始化数据数组

--------------------------
缓存对象构造函数
```JavaScript
 new Buffer(TypedArray datas);
```

调用参数:
* datas - 初始化数据数组

--------------------------
缓存对象构造函数
```JavaScript
 new Buffer(Buffer buffer);
```

调用参数:
* buffer - 初始化Buffer对象

--------------------------
缓存对象构造函数
```JavaScript
 new Buffer(String str,
                String codec = "utf8");
```

调用参数:
* str - 初始化字符串，字符串将以 utf-8 格式写入，缺省则创建一个空对象
* codec - 指定编码格式，允许值为：&#34;hex&#34;, &#34;base64&#34;, &#34;utf8&#34;, 或者系统支持的字符集

--------------------------
缓存对象构造函数
```JavaScript
 new Buffer(Integer size = 0);
```

调用参数:
* size - 初始化缓冲区大小

## 函数
        
### isBuffer
检测给定的变量是否是 Buffer 对象
```JavaScript
Boolean Buffer.isBuffer(Value v);
```

调用参数:
* v - 给定需要检测的变量

返回结果:
* 传入对象是否 Buffer 对象

### concat
拼接多个缓存区中的数据
```JavaScript
Buffer Buffer.concat(Array buflist,
                Integer cutLength = -1);
```

调用参数:
* buflist - 待拼接的Buffer数组
* cutLength - 截取多少个Buffer对象

返回结果:
* 拼接后产生的新 Buffer 对象

### resize
修改缓存对象尺寸
```JavaScript
Buffer.resize(Integer sz);
```

调用参数:
* sz - 指定新尺寸

### append
在缓存对象尾部写入一组数据
```JavaScript
Buffer.append(Array datas);
```

调用参数:
* datas - 初始化数据数组

--------------------------
在缓存对象尾部写入一组数据
```JavaScript
Buffer.append(TypedArray datas);
```

调用参数:
* datas - 初始化数据数组

--------------------------
在缓存对象尾部写入一组数据
```JavaScript
Buffer.append(ArrayBuffer datas);
```

调用参数:
* datas - 初始化数据数组

--------------------------
在缓存对象尾部写入一组二进制数据
```JavaScript
Buffer.append(Buffer data);
```

调用参数:
* data - 初始化二进制数据

--------------------------
在缓存对象尾部写入字符串，字符串将以 utf-8 格式写入
```JavaScript
Buffer.append(String str,
                String codec = "utf8");
```

调用参数:
* str - 要写入的字符串
* codec - 指定编码格式，允许值为：&#34;hex&#34;, &#34;base64&#34;, &#34;utf8&#34;, 或者系统支持的字符集

### write
向缓存对象写入指定字符串，字符串默认为utf-8，越界时只写入部分数据
```JavaScript
Integer Buffer.write(String str,
                Integer offset = 0,
                Integer length = -1,
                String codec = "utf8");
```

调用参数:
* str - 待写入的字符串
* offset - 写入起始位置
* length - 写入长度（单位字节，默认值-1），未指定时为待写入字符串的长度
* codec - 指定编码格式，允许值为：&#34;hex&#34;, &#34;base64&#34;, &#34;utf8&#34;, 或者系统支持的字符集

返回结果:
* 写入的数据字节长度

--------------------------
向缓存对象写入指定字符串，字符串默认为utf-8，越界时只写入部分数据
```JavaScript
Integer Buffer.write(String str,
                Integer offset = 0,
                String codec = "utf8");
```

调用参数:
* str - 待写入的字符串
* offset - 写入起始位置
* codec - 指定编码格式，允许值为：&#34;hex&#34;, &#34;base64&#34;, &#34;utf8&#34;, 或者系统支持的字符集

返回结果:
* 写入的数据字节长度

--------------------------
向缓存对象写入指定字符串，字符串默认为utf-8，越界时只写入部分数据
```JavaScript
Integer Buffer.write(String str,
                String codec = "utf8");
```

调用参数:
* str - 待写入的字符串
* codec - 指定编码格式，允许值为：&#34;hex&#34;, &#34;base64&#34;, &#34;utf8&#34;, 或者系统支持的字符集

返回结果:
* 写入的数据字节长度

### fill
为Buffer对象填充指定内容数据
```JavaScript
Buffer Buffer.fill(Integer v,
                Integer offset = 0,
                Integer end = -1);
```

调用参数:
* v - 需要填充的数据，如果未指定offset和end，将填充满整个buffer
* offset - 填充起始位置
* end - 填充终止位置

返回结果:
* 返回当前 Buffer 对象

--------------------------
为Buffer对象填充指定内容数据
```JavaScript
Buffer Buffer.fill(Buffer v,
                Integer offset = 0,
                Integer end = -1);
```

调用参数:
* v - 需要填充的数据，如果未指定offset和end，将填充满整个buffer
* offset - 填充起始位置
* end - 填充终止位置

返回结果:
* 返回当前 Buffer 对象

--------------------------
为Buffer对象填充指定内容数据
```JavaScript
Buffer Buffer.fill(String v,
                Integer offset = 0,
                Integer end = -1);
```

调用参数:
* v - 需要填充的数据，如果未指定offset和end，将填充满整个buffer
* offset - 填充起始位置
* end - 填充终止位置

返回结果:
* 返回当前 Buffer 对象

### indexOf
返回某个指定数据在Buffer中首次出现的位置
```JavaScript
Integer Buffer.indexOf(Integer v,
                Integer offset = 0);
```

调用参数:
* v - 待查找数据，如果未指定offset，默认从起始位开始
* offset - 起始查找位置

--------------------------
返回某个指定数据在Buffer中首次出现的位置
```JavaScript
Integer Buffer.indexOf(Buffer v,
                Integer offset = 0);
```

调用参数:
* v - 待查找数据，如果未指定offset，默认从起始位开始
* offset - 起始查找位置

--------------------------
返回某个指定数据在Buffer中首次出现的位置
```JavaScript
Integer Buffer.indexOf(String v,
                Integer offset = 0);
```

调用参数:
* v - 待查找数据，如果未指定offset，默认从起始位开始
* offset - 起始查找位置

### compare
比较缓存区的内容
```JavaScript
Integer Buffer.compare(Buffer buf);
```

调用参数:
* buf - 待比较缓存对象

返回结果:
* 内容比较结果

### copy
从源缓存对象区域拷贝数据到目标缓存对象区域
```JavaScript
Integer Buffer.copy(Buffer targetBuffer,
                Integer targetStart = 0,
                Integer sourceStart = 0,
                Integer sourceEnd = -1);
```

调用参数:
* targetBuffer - 目标缓存对象
* targetStart - 目标缓存对象开始拷贝字节位置，缺省为 0
* sourceStart - 源缓存对象开始字节位置, 缺省为 0
* sourceEnd - 源缓存对象结束字节位置, 缺省为 -1,表示源数据长度

返回结果:
* 拷贝的数据字节长度

### readUInt8
从缓存对象读取一个 8 位无符号整型数值
```JavaScript
Integer Buffer.readUInt8(Integer offset = 0,
                Boolean noAssert = false);
```

调用参数:
* offset - 指定读取的起始位置，缺省为 0
* noAssert - 指定读取越界时不抛出错误，缺省为 flase，抛出

返回结果:
* 返回读取的整型数值

### readUInt16LE
从缓存对象读取一个 16 位无符号整型数值，以低字节序的存储方式
```JavaScript
Integer Buffer.readUInt16LE(Integer offset = 0,
                Boolean noAssert = false);
```

调用参数:
* offset - 指定读取的起始位置，缺省为 0
* noAssert - 指定读取越界时不抛出错误，缺省为 flase，抛出

返回结果:
* 返回读取的整型数值

### readUInt16BE
从缓存对象读取一个 16 位无符号整型数值，以高字节序的存储方式
```JavaScript
Integer Buffer.readUInt16BE(Integer offset = 0,
                Boolean noAssert = false);
```

调用参数:
* offset - 指定读取的起始位置，缺省为 0
* noAssert - 指定读取越界时不抛出错误，缺省为 flase，抛出

返回结果:
* 返回读取的整型数值

### readUInt32LE
从缓存对象读取一个 32 位无符号整型数值，以低字节序的存储方式
```JavaScript
Long Buffer.readUInt32LE(Integer offset = 0,
                Boolean noAssert = false);
```

调用参数:
* offset - 指定读取的起始位置，缺省为 0
* noAssert - 指定读取越界时不抛出错误，缺省为 flase，抛出

返回结果:
* 返回读取的整型数值

### readUInt32BE
从缓存对象读取一个 32 位无符号整型数值，以高字节序的存储方式
```JavaScript
Long Buffer.readUInt32BE(Integer offset = 0,
                Boolean noAssert = false);
```

调用参数:
* offset - 指定读取的起始位置，缺省为 0
* noAssert - 指定读取越界时不抛出错误，缺省为 flase，抛出

返回结果:
* 返回读取的整型数值

### readUIntLE
从缓存对象读取一个无符号整型数值，最大支持 48 位，以低字节序的存储方式
```JavaScript
Long Buffer.readUIntLE(Integer offset = 0,
                Boolean noAssert = false);
```

调用参数:
* offset - 指定读取的起始位置，缺省为 0
* noAssert - 指定读取越界时不抛出错误，缺省为 flase，抛出

返回结果:
* 返回读取的整型数值

### readUIntBE
从缓存对象读取一个无符号整型数值，最大支持 48 位，以高字节序的存储方式
```JavaScript
Long Buffer.readUIntBE(Integer offset = 0,
                Boolean noAssert = false);
```

调用参数:
* offset - 指定读取的起始位置，缺省为 0
* noAssert - 指定读取越界时不抛出错误，缺省为 flase，抛出

返回结果:
* 返回读取的整型数值

### readInt8
从缓存对象读取一个 8 位整型数值
```JavaScript
Integer Buffer.readInt8(Integer offset = 0,
                Boolean noAssert = false);
```

调用参数:
* offset - 指定读取的起始位置，缺省为 0
* noAssert - 指定读取越界时不抛出错误，缺省为 flase，抛出

返回结果:
* 返回读取的整型数值

### readInt16LE
从缓存对象读取一个 16 位整型数值，以低字节序的存储方式
```JavaScript
Integer Buffer.readInt16LE(Integer offset = 0,
                Boolean noAssert = false);
```

调用参数:
* offset - 指定读取的起始位置，缺省为 0
* noAssert - 指定读取越界时不抛出错误，缺省为 flase，抛出

返回结果:
* 返回读取的整型数值

### readInt16BE
从缓存对象读取一个 16 位整型数值，以高字节序的存储方式
```JavaScript
Integer Buffer.readInt16BE(Integer offset = 0,
                Boolean noAssert = false);
```

调用参数:
* offset - 指定读取的起始位置，缺省为 0
* noAssert - 指定读取越界时不抛出错误，缺省为 flase，抛出

返回结果:
* 返回读取的整型数值

### readInt32LE
从缓存对象读取一个 32 位整型数值，以低字节序的存储方式
```JavaScript
Integer Buffer.readInt32LE(Integer offset = 0,
                Boolean noAssert = false);
```

调用参数:
* offset - 指定读取的起始位置，缺省为 0
* noAssert - 指定读取越界时不抛出错误，缺省为 flase，抛出

返回结果:
* 返回读取的整型数值

### readInt32BE
从缓存对象读取一个 32 位整型数值，以高字节序的存储方式
```JavaScript
Integer Buffer.readInt32BE(Integer offset = 0,
                Boolean noAssert = false);
```

调用参数:
* offset - 指定读取的起始位置，缺省为 0
* noAssert - 指定读取越界时不抛出错误，缺省为 flase，抛出

返回结果:
* 返回读取的整型数值

### readIntLE
从缓存对象读取一个整型数值，最大支持 48 位，以低字节序的存储方式
```JavaScript
Long Buffer.readIntLE(Integer offset = 0,
                Boolean noAssert = false);
```

调用参数:
* offset - 指定读取的起始位置，缺省为 0
* noAssert - 指定读取越界时不抛出错误，缺省为 flase，抛出

返回结果:
* 返回读取的整型数值

### readIntBE
从缓存对象读取一个整型数值，最大支持 48 位，以高字节序的存储方式
```JavaScript
Long Buffer.readIntBE(Integer offset = 0,
                Boolean noAssert = false);
```

调用参数:
* offset - 指定读取的起始位置，缺省为 0
* noAssert - 指定读取越界时不抛出错误，缺省为 flase，抛出

返回结果:
* 返回读取的整型数值

### readInt64LE
从缓存对象读取一个 64 位整型数值，以低字节序的存储方式
```JavaScript
Int64 Buffer.readInt64LE(Integer offset = 0,
                Boolean noAssert = false);
```

调用参数:
* offset - 指定读取的起始位置，缺省为 0
* noAssert - 指定读取越界时不抛出错误，缺省为 flase，抛出

返回结果:
* 返回读取的整型数值

### readInt64BE
从缓存对象读取一个 64 位整型数值，以高字节序的存储方式
```JavaScript
Int64 Buffer.readInt64BE(Integer offset = 0,
                Boolean noAssert = false);
```

调用参数:
* offset - 指定读取的起始位置，缺省为 0
* noAssert - 指定读取越界时不抛出错误，缺省为 flase，抛出

返回结果:
* 返回读取的整型数值

### readFloatLE
从缓存对象读取一个浮点数，以低字节序的存储方式
```JavaScript
Number Buffer.readFloatLE(Integer offset = 0,
                Boolean noAssert = false);
```

调用参数:
* offset - 指定读取的起始位置，缺省为 0
* noAssert - 指定读取越界时不抛出错误，缺省为 flase，抛出

返回结果:
* 返回读取的浮点数

### readFloatBE
从缓存对象读取一个浮点数，以高字节序的存储方式
```JavaScript
Number Buffer.readFloatBE(Integer offset = 0,
                Boolean noAssert = false);
```

调用参数:
* offset - 指定读取的起始位置，缺省为 0
* noAssert - 指定读取越界时不抛出错误，缺省为 flase，抛出

返回结果:
* 返回读取的浮点数

### readDoubleLE
从缓存对象读取一个双精度浮点数，以低字节序的存储方式
```JavaScript
Number Buffer.readDoubleLE(Integer offset = 0,
                Boolean noAssert = false);
```

调用参数:
* offset - 指定读取的起始位置，缺省为 0
* noAssert - 指定读取越界时不抛出错误，缺省为 flase，抛出

返回结果:
* 返回读取的双精度浮点数

### readDoubleBE
从缓存对象读取一个双精度浮点数，以高字节序的存储方式
```JavaScript
Number Buffer.readDoubleBE(Integer offset = 0,
                Boolean noAssert = false);
```

调用参数:
* offset - 指定读取的起始位置，缺省为 0
* noAssert - 指定读取越界时不抛出错误，缺省为 flase，抛出

返回结果:
* 返回读取的双精度浮点数

### writeUInt8
向缓存对象写入一个 8 位无符号整型数值
```JavaScript
Buffer.writeUInt8(Integer value,
                Integer offset = 0,
                Boolean noAssert = false);
```

调用参数:
* value - 指定写入的数值
* offset - 指定写入的起始位置
* noAssert - 指定写入越界时不抛出错误，缺省为 flase，抛出

### writeUInt16LE
向缓存对象写入一个 16 位无符号整型数值，以低字节序的存储方式
```JavaScript
Buffer.writeUInt16LE(Integer value,
                Integer offset = 0,
                Boolean noAssert = false);
```

调用参数:
* value - 指定写入的数值
* offset - 指定写入的起始位置
* noAssert - 指定写入越界时不抛出错误，缺省为 flase，抛出

### writeUInt16BE
向缓存对象写入一个 16 位无符号整型数值，以高字节序的存储方式
```JavaScript
Buffer.writeUInt16BE(Integer value,
                Integer offset = 0,
                Boolean noAssert = false);
```

调用参数:
* value - 指定写入的数值
* offset - 指定写入的起始位置
* noAssert - 指定写入越界时不抛出错误，缺省为 flase，抛出

### writeUInt32LE
向缓存对象写入一个 32 位无符号整型数值，以低字节序的存储方式
```JavaScript
Buffer.writeUInt32LE(Long value,
                Integer offset = 0,
                Boolean noAssert = false);
```

调用参数:
* value - 指定写入的数值
* offset - 指定写入的起始位置
* noAssert - 指定写入越界时不抛出错误，缺省为 flase，抛出

### writeUInt32BE
向缓存对象写入一个 32 位无符号整型数值，以高字节序的存储方式
```JavaScript
Buffer.writeUInt32BE(Long value,
                Integer offset = 0,
                Boolean noAssert = false);
```

调用参数:
* value - 指定写入的数值
* offset - 指定写入的起始位置
* noAssert - 指定写入越界时不抛出错误，缺省为 flase，抛出

### writeUIntLE
向缓存对象写入一个无符号整型数值，最大支持 48 位，以低字节序的存储方式
```JavaScript
Buffer.writeUIntLE(Long value,
                Integer offset = 0,
                Boolean noAssert = false);
```

调用参数:
* value - 指定写入的数值
* offset - 指定写入的起始位置
* noAssert - 指定写入越界时不抛出错误，缺省为 flase，抛出

### writeUIntBE
向缓存对象写入一个无符号整型数值，最大支持 48 位，以高字节序的存储方式
```JavaScript
Buffer.writeUIntBE(Long value,
                Integer offset = 0,
                Boolean noAssert = false);
```

调用参数:
* value - 指定写入的数值
* offset - 指定写入的起始位置
* noAssert - 指定写入越界时不抛出错误，缺省为 flase，抛出

### writeInt8
向缓存对象写入一个 8 位整型数值
```JavaScript
Buffer.writeInt8(Integer value,
                Integer offset = 0,
                Boolean noAssert = false);
```

调用参数:
* value - 指定写入的数值
* offset - 指定写入的起始位置
* noAssert - 指定写入越界时不抛出错误，缺省为 flase，抛出

### writeInt16LE
向缓存对象写入一个 16 位整型数值，以低字节序的存储方式
```JavaScript
Buffer.writeInt16LE(Integer value,
                Integer offset = 0,
                Boolean noAssert = false);
```

调用参数:
* value - 指定写入的数值
* offset - 指定写入的起始位置
* noAssert - 指定写入越界时不抛出错误，缺省为 flase，抛出

### writeInt16BE
向缓存对象写入一个 16 位整型数值，以高字节序的存储方式
```JavaScript
Buffer.writeInt16BE(Integer value,
                Integer offset = 0,
                Boolean noAssert = false);
```

调用参数:
* value - 指定写入的数值
* offset - 指定写入的起始位置
* noAssert - 指定写入越界时不抛出错误，缺省为 flase，抛出

### writeInt32LE
向缓存对象写入一个 32 位整型数值，以低字节序的存储方式
```JavaScript
Buffer.writeInt32LE(Integer value,
                Integer offset = 0,
                Boolean noAssert = false);
```

调用参数:
* value - 指定写入的数值
* offset - 指定写入的起始位置
* noAssert - 指定写入越界时不抛出错误，缺省为 flase，抛出

### writeInt32BE
向缓存对象写入一个 32 位整型数值，以高字节序的存储方式
```JavaScript
Buffer.writeInt32BE(Integer value,
                Integer offset = 0,
                Boolean noAssert = false);
```

调用参数:
* value - 指定写入的数值
* offset - 指定写入的起始位置
* noAssert - 指定写入越界时不抛出错误，缺省为 flase，抛出

### writeIntLE
向缓存对象写入一个整型数值，最大支持 48 位，以低字节序的存储方式
```JavaScript
Buffer.writeIntLE(Long value,
                Integer offset = 0,
                Boolean noAssert = false);
```

调用参数:
* value - 指定写入的数值
* offset - 指定写入的起始位置
* noAssert - 指定写入越界时不抛出错误，缺省为 flase，抛出

### writeIntBE
向缓存对象写入一个整型数值，最大支持 48 位，以高字节序的存储方式
```JavaScript
Buffer.writeIntBE(Long value,
                Integer offset = 0,
                Boolean noAssert = false);
```

调用参数:
* value - 指定写入的数值
* offset - 指定写入的起始位置
* noAssert - 指定写入越界时不抛出错误，缺省为 flase，抛出

### writeInt64LE
向缓存对象写入一个 64 位整型数值，以低字节序的存储方式
```JavaScript
Buffer.writeInt64LE(Int64 value,
                Integer offset = 0,
                Boolean noAssert = false);
```

调用参数:
* value - 指定写入的数值
* offset - 指定写入的起始位置
* noAssert - 指定写入越界时不抛出错误，缺省为 flase，抛出

### writeInt64BE
向缓存对象写入一个 64 位整型数值，以高字节序的存储方式
```JavaScript
Buffer.writeInt64BE(Int64 value,
                Integer offset = 0,
                Boolean noAssert = false);
```

调用参数:
* value - 指定写入的数值
* offset - 指定写入的起始位置
* noAssert - 指定写入越界时不抛出错误，缺省为 flase，抛出

### writeFloatLE
向缓存对象写入一个浮点数，以低字节序的存储方式
```JavaScript
Buffer.writeFloatLE(Number value,
                Integer offset,
                Boolean noAssert = false);
```

调用参数:
* value - 指定写入的数值
* offset - 指定写入的起始位置
* noAssert - 指定写入越界时不抛出错误，缺省为 flase，抛出

### writeFloatBE
向缓存对象写入一个浮点数，以高字节序的存储方式
```JavaScript
Buffer.writeFloatBE(Number value,
                Integer offset,
                Boolean noAssert = false);
```

调用参数:
* value - 指定写入的数值
* offset - 指定写入的起始位置
* noAssert - 指定写入越界时不抛出错误，缺省为 flase，抛出

### writeDoubleLE
向缓存对象写入一个双精度浮点数，以低字节序的存储方式
```JavaScript
Buffer.writeDoubleLE(Number value,
                Integer offset,
                Boolean noAssert = false);
```

调用参数:
* value - 指定写入的数值
* offset - 指定写入的起始位置
* noAssert - 指定写入越界时不抛出错误，缺省为 flase，抛出

### writeDoubleBE
向缓存对象写入一个双精度浮点数，以高字节序的存储方式
```JavaScript
Buffer.writeDoubleBE(Number value,
                Integer offset,
                Boolean noAssert = false);
```

调用参数:
* value - 指定写入的数值
* offset - 指定写入的起始位置
* noAssert - 指定写入越界时不抛出错误，缺省为 flase，抛出

### slice
返回一个新缓存对象，包含指定起始到缓存结尾的数据
```JavaScript
Buffer Buffer.slice(Integer start = 0);
```

调用参数:
* start - 指定范围的起始，缺省从头开始

返回结果:
* 返回新的缓存对象

--------------------------
返回一个新缓存对象，包含指定范围的数据，若范围超出缓存，则只返回有效部分数据
```JavaScript
Buffer Buffer.slice(Integer start,
                Integer end);
```

调用参数:
* start - 指定范围的起始
* end - 指定范围的结束

返回结果:
* 返回新的缓存对象

### hex
使用 16 进制编码缓存对象内容
```JavaScript
String Buffer.hex();
```

返回结果:
* 返回编码字符串

### base64
使用 base64 编码缓存对象内容
```JavaScript
String Buffer.base64();
```

返回结果:
* 返回编码字符串

### toArray
返回全部二进制数据的数组
```JavaScript
Array Buffer.toArray();
```

返回结果:
* 返回包含对象数据的数组

### toString
返回二进制数据的编码字符串
```JavaScript
String Buffer.toString(String codec,
                Integer offset = 0,
                Integer end = -1);
```

调用参数:
* codec - 指定编码格式，允许值为：&#34;hex&#34;, &#34;base64&#34;, &#34;utf8&#34;, 或者系统支持的字符集
* offset - 读取起始位置
* end - 读取终止位置

返回结果:
* 返回对象的字符串表示

--------------------------
返回二进制数据的 utf8 编码字符串
```JavaScript
String Buffer.toString();
```

返回结果:
* 返回对象的字符串表示

### dispose
强制回收对象，调用此方法后，对象资源将立即释放
```JavaScript
Buffer.dispose();
```

### equals
比较当前对象与给定的对象是否相等
```JavaScript
Boolean Buffer.equals(object expected);
```

调用参数:
* expected - 制定比较的目标对象

返回结果:
* 返回对象比较的结果

### toString
返回对象的字符串表示，一般返回 &#34;[Native Object]&#34;，对象可以根据自己的特性重新实现
```JavaScript
String Buffer.toString();
```

返回结果:
* 返回对象的字符串表示

### toJSON
返回对象的 JSON 格式表示，一般返回对象定义的可读属性集合
```JavaScript
Value Buffer.toJSON(String key = "");
```

调用参数:
* key - 未使用

返回结果:
* 返回包含可 JSON 序列化的值

### valueOf
返回对象本身的数值
```JavaScript
Value Buffer.valueOf();
```

返回结果:
* 返回对象本身的数值

## 属性
        
### length
获取缓存对象的尺寸
```JavaScript
readonly Integer Buffer.length;
```

