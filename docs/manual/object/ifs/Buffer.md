# 对象 Buffer
二进制数据缓存对象，用于 [io](../../module/ifs/io.md) 读写的数据处理

Buffer 对象为全局基础类，在任何时候都可以直接以 new Buffer(...) 创建：

```JavaScript
var buf = new Buffer();
```

## 继承关系
<div class="inherits"><svg width="96pt" height="892pt" viewBox="0.00 0.00 96.00 892.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(4 888)">
<title>%0</title>
<polygon fill="#ffffff" stroke="transparent" points="-4,4 -4,-888 92,-888 92,4 -4,4"/>
<!-- object -->
<g id="node1" class="node">
<title>object</title>
<g id="a_node1"><a xlink:href="object.md" xlink:title="object">
<polygon fill="#ffffff" stroke="transparent" points="15.5,-792 15.5,-884 72.5,-884 72.5,-792 15.5,-792"/>
<polygon fill="none" stroke="#000000" points="16,-862 16,-884 73,-884 73,-862 16,-862"/>
<text text-anchor="start" x="31.1625" y="-870" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">object</text>
<polygon fill="none" stroke="#000000" points="16,-792 16,-862 73,-862 73,-792 16,-792"/>
<text text-anchor="start" x="21" y="-848" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> dispose()</text>
<text text-anchor="start" x="21" y="-836" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> equals()</text>
<text text-anchor="start" x="21" y="-824" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> toString()</text>
<text text-anchor="start" x="21" y="-812" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> toJSON()</text>
<text text-anchor="start" x="21" y="-800" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> valueOf()</text>
</a>
</g>
</g>
<!-- Buffer -->
<g id="node2" class="node">
<title>Buffer</title>
<g id="a_node2"><a xlink:title="Buffer">
<polygon fill="#d3d3d3" stroke="transparent" points="0,0 0,-756 88,-756 88,0 0,0"/>
<polygon fill="none" stroke="#000000" points="0,-734 0,-756 88,-756 88,-734 0,-734"/>
<text text-anchor="start" x="30.663" y="-742" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">Buffer</text>
<polygon fill="none" stroke="#000000" points="0,-712 0,-734 88,-734 88,-712 0,-712"/>
<text text-anchor="start" x="5" y="-720" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">  new Buffer()</text>
<polygon fill="none" stroke="#000000" points="0,-690 0,-712 88,-712 88,-690 0,-690"/>
<text text-anchor="start" x="5" y="-698" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> operator[]</text>
<polygon fill="none" stroke="#000000" points="0,-656 0,-690 88,-690 88,-656 0,-656"/>
<text text-anchor="start" x="5" y="-676" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> isBuffer()</text>
<text text-anchor="start" x="5" y="-664" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> concat()</text>
<polygon fill="none" stroke="#000000" points="0,-634 0,-656 88,-656 88,-634 0,-634"/>
<text text-anchor="start" x="5" y="-642" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> length</text>
<polygon fill="none" stroke="#000000" points="0,0 0,-634 88,-634 88,0 0,0"/>
<text text-anchor="start" x="5" y="-620" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> resize()</text>
<text text-anchor="start" x="5" y="-608" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> append()</text>
<text text-anchor="start" x="5" y="-596" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> write()</text>
<text text-anchor="start" x="5" y="-584" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> fill()</text>
<text text-anchor="start" x="5" y="-572" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> indexOf()</text>
<text text-anchor="start" x="5" y="-560" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> compare()</text>
<text text-anchor="start" x="5" y="-548" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> copy()</text>
<text text-anchor="start" x="5" y="-536" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> readUInt8()</text>
<text text-anchor="start" x="5" y="-524" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> readUInt16LE()</text>
<text text-anchor="start" x="5" y="-512" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> readUInt16BE()</text>
<text text-anchor="start" x="5" y="-500" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> readUInt32LE()</text>
<text text-anchor="start" x="5" y="-488" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> readUInt32BE()</text>
<text text-anchor="start" x="5" y="-476" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> readUIntLE()</text>
<text text-anchor="start" x="5" y="-464" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> readUIntBE()</text>
<text text-anchor="start" x="5" y="-452" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> readInt8()</text>
<text text-anchor="start" x="5" y="-440" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> readInt16LE()</text>
<text text-anchor="start" x="5" y="-428" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> readInt16BE()</text>
<text text-anchor="start" x="5" y="-416" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> readInt32LE()</text>
<text text-anchor="start" x="5" y="-404" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> readInt32BE()</text>
<text text-anchor="start" x="5" y="-392" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> readIntLE()</text>
<text text-anchor="start" x="5" y="-380" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> readIntBE()</text>
<text text-anchor="start" x="5" y="-368" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> readInt64LE()</text>
<text text-anchor="start" x="5" y="-356" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> readInt64BE()</text>
<text text-anchor="start" x="5" y="-344" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> readFloatLE()</text>
<text text-anchor="start" x="5" y="-332" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> readFloatBE()</text>
<text text-anchor="start" x="5" y="-320" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> readDoubleLE()</text>
<text text-anchor="start" x="5" y="-308" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> readDoubleBE()</text>
<text text-anchor="start" x="5" y="-296" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> writeUInt8()</text>
<text text-anchor="start" x="5" y="-284" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> writeUInt16LE()</text>
<text text-anchor="start" x="5" y="-272" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> writeUInt16BE()</text>
<text text-anchor="start" x="5" y="-260" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> writeUInt32LE()</text>
<text text-anchor="start" x="5" y="-248" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> writeUInt32BE()</text>
<text text-anchor="start" x="5" y="-236" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> writeUIntLE()</text>
<text text-anchor="start" x="5" y="-224" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> writeUIntBE()</text>
<text text-anchor="start" x="5" y="-212" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> writeInt8()</text>
<text text-anchor="start" x="5" y="-200" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> writeInt16LE()</text>
<text text-anchor="start" x="5" y="-188" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> writeInt16BE()</text>
<text text-anchor="start" x="5" y="-176" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> writeInt32LE()</text>
<text text-anchor="start" x="5" y="-164" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> writeInt32BE()</text>
<text text-anchor="start" x="5" y="-152" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> writeIntLE()</text>
<text text-anchor="start" x="5" y="-140" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> writeIntBE()</text>
<text text-anchor="start" x="5" y="-128" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> writeInt64LE()</text>
<text text-anchor="start" x="5" y="-116" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> writeInt64BE()</text>
<text text-anchor="start" x="5" y="-104" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> writeFloatLE()</text>
<text text-anchor="start" x="5" y="-92" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> writeFloatBE()</text>
<text text-anchor="start" x="5" y="-80" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> writeDoubleLE()</text>
<text text-anchor="start" x="5" y="-68" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> writeDoubleBE()</text>
<text text-anchor="start" x="5" y="-56" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> slice()</text>
<text text-anchor="start" x="5" y="-44" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> hex()</text>
<text text-anchor="start" x="5" y="-32" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> base64()</text>
<text text-anchor="start" x="5" y="-20" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> toArray()</text>
<text text-anchor="start" x="5" y="-8" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> toString()</text>
</a>
</g>
</g>
<!-- object&#45;&gt;Buffer -->
<g id="edge1" class="edge">
<title>object-&gt;Buffer</title>
<path fill="none" stroke="#000000" d="M44,-781.5458C44,-773.7379 44,-765.2925 44,-756.3223"/>
<polygon fill="#000000" stroke="#000000" points="40.5001,-781.7873 44,-791.7873 47.5001,-781.7873 40.5001,-781.7873"/>
</g>
</g>
</svg></div>

## 构造函数
        
### Buffer
** 缓存对象构造函数 **

```JavaScript
new Buffer(Array datas);
```

调用参数:
* datas: Array, 初始化数据数组

--------------------------
** 缓存对象构造函数 **

```JavaScript
new Buffer(ArrayBuffer datas);
```

调用参数:
* datas: ArrayBuffer, 初始化数据数组

--------------------------
** 缓存对象构造函数 **

```JavaScript
new Buffer(TypedArray datas);
```

调用参数:
* datas: TypedArray, 初始化数据数组

--------------------------
** 缓存对象构造函数 **

```JavaScript
new Buffer(Buffer buffer);
```

调用参数:
* buffer: Buffer, 初始化Buffer对象

--------------------------
** 缓存对象构造函数 **

```JavaScript
new Buffer(String str,
    String codec = "utf8");
```

调用参数:
* str: String, 初始化字符串，字符串将以 utf-8 格式写入，缺省则创建一个空对象
* codec: String, 指定编码格式，允许值为："[hex](../../module/ifs/hex.md)", "[base64](../../module/ifs/base64.md)", "utf8", 或者系统支持的字符集

--------------------------
** 缓存对象构造函数 **

```JavaScript
new Buffer(Integer size = 0);
```

调用参数:
* size: Integer, 初始化缓冲区大小

## 下标操作
        
** 缓存对象可使用下标直接访问二进制数据 **

```JavaScript
Integer Buffer[];
```

## 静态函数
        
### isBuffer
** 检测给定的变量是否是 Buffer 对象 **

```JavaScript
static Boolean Buffer.isBuffer(Value v);
```

调用参数:
* v: Value, 给定需要检测的变量

返回结果:
* Boolean, 传入对象是否 Buffer 对象

--------------------------
### concat
** 拼接多个缓存区中的数据 **

```JavaScript
static Buffer Buffer.concat(Array buflist,
    Integer cutLength = -1);
```

调用参数:
* buflist: Array, 待拼接的Buffer数组
* cutLength: Integer, 截取多少个Buffer对象

返回结果:
* Buffer, 拼接后产生的新 Buffer 对象

## 成员属性
        
### length
** Integer, 获取缓存对象的尺寸 **

```JavaScript
readonly Integer Buffer.length;
```

## 成员函数
        
### resize
** 修改缓存对象尺寸 **

```JavaScript
Buffer.resize(Integer sz);
```

调用参数:
* sz: Integer, 指定新尺寸

--------------------------
### append
** 在缓存对象尾部写入一组数据 **

```JavaScript
Buffer.append(Array datas);
```

调用参数:
* datas: Array, 初始化数据数组

--------------------------
** 在缓存对象尾部写入一组数据 **

```JavaScript
Buffer.append(TypedArray datas);
```

调用参数:
* datas: TypedArray, 初始化数据数组

--------------------------
** 在缓存对象尾部写入一组数据 **

```JavaScript
Buffer.append(ArrayBuffer datas);
```

调用参数:
* datas: ArrayBuffer, 初始化数据数组

--------------------------
** 在缓存对象尾部写入一组二进制数据 **

```JavaScript
Buffer.append(Buffer data);
```

调用参数:
* data: Buffer, 初始化二进制数据

--------------------------
** 在缓存对象尾部写入字符串，字符串将以 utf-8 格式写入 **

```JavaScript
Buffer.append(String str,
    String codec = "utf8");
```

调用参数:
* str: String, 要写入的字符串
* codec: String, 指定编码格式，允许值为："[hex](../../module/ifs/hex.md)", "[base64](../../module/ifs/base64.md)", "utf8", 或者系统支持的字符集

--------------------------
### write
** 向缓存对象写入指定字符串，字符串默认为utf-8，越界时只写入部分数据 **

```JavaScript
Integer Buffer.write(String str,
    Integer offset = 0,
    Integer length = -1,
    String codec = "utf8");
```

调用参数:
* str: String, 待写入的字符串
* offset: Integer, 写入起始位置
* length: Integer, 写入长度（单位字节，默认值-1），未指定时为待写入字符串的长度
* codec: String, 指定编码格式，允许值为："[hex](../../module/ifs/hex.md)", "[base64](../../module/ifs/base64.md)", "utf8", 或者系统支持的字符集

返回结果:
* Integer, 写入的数据字节长度

--------------------------
** 向缓存对象写入指定字符串，字符串默认为utf-8，越界时只写入部分数据 **

```JavaScript
Integer Buffer.write(String str,
    Integer offset = 0,
    String codec = "utf8");
```

调用参数:
* str: String, 待写入的字符串
* offset: Integer, 写入起始位置
* codec: String, 指定编码格式，允许值为："[hex](../../module/ifs/hex.md)", "[base64](../../module/ifs/base64.md)", "utf8", 或者系统支持的字符集

返回结果:
* Integer, 写入的数据字节长度

--------------------------
** 向缓存对象写入指定字符串，字符串默认为utf-8，越界时只写入部分数据 **

```JavaScript
Integer Buffer.write(String str,
    String codec = "utf8");
```

调用参数:
* str: String, 待写入的字符串
* codec: String, 指定编码格式，允许值为："[hex](../../module/ifs/hex.md)", "[base64](../../module/ifs/base64.md)", "utf8", 或者系统支持的字符集

返回结果:
* Integer, 写入的数据字节长度

--------------------------
### fill
** 为 Buffer 对象填充指定内容数据 **

```JavaScript
Buffer Buffer.fill(Integer v,
    Integer offset = 0,
    Integer end = -1);
```

调用参数:
* v: Integer, 需要填充的数据，如果未指定 offset 和 end，将填充满整个 buffer
* offset: Integer, 填充起始位置
* end: Integer, 填充终止位置

返回结果:
* Buffer, 返回当前 Buffer 对象

--------------------------
** 为 Buffer 对象填充指定内容数据 **

```JavaScript
Buffer Buffer.fill(Buffer v,
    Integer offset = 0,
    Integer end = -1);
```

调用参数:
* v: Buffer, 需要填充的数据，如果未指定 offset 和 end，将填充满整个 buffer
* offset: Integer, 填充起始位置
* end: Integer, 填充终止位置

返回结果:
* Buffer, 返回当前 Buffer 对象

--------------------------
** 为 Buffer 对象填充指定内容数据 **

```JavaScript
Buffer Buffer.fill(String v,
    Integer offset = 0,
    Integer end = -1);
```

调用参数:
* v: String, 需要填充的数据，如果未指定 offset 和 end，将填充满整个 buffer
* offset: Integer, 填充起始位置
* end: Integer, 填充终止位置

返回结果:
* Buffer, 返回当前 Buffer 对象

--------------------------
### indexOf
** 返回某个指定数据在 Buffer 中首次出现的位置 **

```JavaScript
Integer Buffer.indexOf(Integer v,
    Integer offset = 0);
```

调用参数:
* v: Integer, 待查找数据，如果未指定 offset，默认从起始位开始
* offset: Integer, 起始查找位置

返回结果:
* Integer, 返回查找到的位置，未找到返回 -1

--------------------------
** 返回某个指定数据在 Buffer 中首次出现的位置 **

```JavaScript
Integer Buffer.indexOf(Buffer v,
    Integer offset = 0);
```

调用参数:
* v: Buffer, 待查找数据，如果未指定 offset，默认从起始位开始
* offset: Integer, 起始查找位置

返回结果:
* Integer, 返回查找到的位置，未找到返回 -1

--------------------------
** 返回某个指定数据在 Buffer 中首次出现的位置 **

```JavaScript
Integer Buffer.indexOf(String v,
    Integer offset = 0);
```

调用参数:
* v: String, 待查找数据，如果未指定 offset，默认从起始位开始
* offset: Integer, 起始查找位置

返回结果:
* Integer, 返回查找到的位置，未找到返回 -1

--------------------------
### compare
** 比较缓存区的内容 **

```JavaScript
Integer Buffer.compare(Buffer buf);
```

调用参数:
* buf: Buffer, 待比较缓存对象

返回结果:
* Integer, 内容比较结果

--------------------------
### copy
** 从源缓存对象区域拷贝数据到目标缓存对象区域 **

```JavaScript
Integer Buffer.copy(Buffer targetBuffer,
    Integer targetStart = 0,
    Integer sourceStart = 0,
    Integer sourceEnd = -1);
```

调用参数:
* targetBuffer: Buffer, 目标缓存对象
* targetStart: Integer, 目标缓存对象开始拷贝字节位置，缺省为 0
* sourceStart: Integer, 源缓存对象开始字节位置, 缺省为 0
* sourceEnd: Integer, 源缓存对象结束字节位置, 缺省为 -1,表示源数据长度

返回结果:
* Integer, 拷贝的数据字节长度

--------------------------
### readUInt8
** 从缓存对象读取一个 8 位无符号整型数值 **

```JavaScript
Integer Buffer.readUInt8(Integer offset = 0,
    Boolean noAssert = false);
```

调用参数:
* offset: Integer, 指定读取的起始位置，缺省为 0
* noAssert: Boolean, 指定读取越界时不抛出错误，缺省为 flase，抛出

返回结果:
* Integer, 返回读取的整型数值

--------------------------
### readUInt16LE
** 从缓存对象读取一个 16 位无符号整型数值，以低字节序的存储方式 **

```JavaScript
Integer Buffer.readUInt16LE(Integer offset = 0,
    Boolean noAssert = false);
```

调用参数:
* offset: Integer, 指定读取的起始位置，缺省为 0
* noAssert: Boolean, 指定读取越界时不抛出错误，缺省为 flase，抛出

返回结果:
* Integer, 返回读取的整型数值

--------------------------
### readUInt16BE
** 从缓存对象读取一个 16 位无符号整型数值，以高字节序的存储方式 **

```JavaScript
Integer Buffer.readUInt16BE(Integer offset = 0,
    Boolean noAssert = false);
```

调用参数:
* offset: Integer, 指定读取的起始位置，缺省为 0
* noAssert: Boolean, 指定读取越界时不抛出错误，缺省为 flase，抛出

返回结果:
* Integer, 返回读取的整型数值

--------------------------
### readUInt32LE
** 从缓存对象读取一个 32 位无符号整型数值，以低字节序的存储方式 **

```JavaScript
Long Buffer.readUInt32LE(Integer offset = 0,
    Boolean noAssert = false);
```

调用参数:
* offset: Integer, 指定读取的起始位置，缺省为 0
* noAssert: Boolean, 指定读取越界时不抛出错误，缺省为 flase，抛出

返回结果:
* Long, 返回读取的整型数值

--------------------------
### readUInt32BE
** 从缓存对象读取一个 32 位无符号整型数值，以高字节序的存储方式 **

```JavaScript
Long Buffer.readUInt32BE(Integer offset = 0,
    Boolean noAssert = false);
```

调用参数:
* offset: Integer, 指定读取的起始位置，缺省为 0
* noAssert: Boolean, 指定读取越界时不抛出错误，缺省为 flase，抛出

返回结果:
* Long, 返回读取的整型数值

--------------------------
### readUIntLE
** 从缓存对象读取一个无符号整型数值，最大支持 48 位，以低字节序的存储方式 **

```JavaScript
Long Buffer.readUIntLE(Integer offset = 0,
    Boolean noAssert = false);
```

调用参数:
* offset: Integer, 指定读取的起始位置，缺省为 0
* noAssert: Boolean, 指定读取越界时不抛出错误，缺省为 flase，抛出

返回结果:
* Long, 返回读取的整型数值

--------------------------
### readUIntBE
** 从缓存对象读取一个无符号整型数值，最大支持 48 位，以高字节序的存储方式 **

```JavaScript
Long Buffer.readUIntBE(Integer offset = 0,
    Boolean noAssert = false);
```

调用参数:
* offset: Integer, 指定读取的起始位置，缺省为 0
* noAssert: Boolean, 指定读取越界时不抛出错误，缺省为 flase，抛出

返回结果:
* Long, 返回读取的整型数值

--------------------------
### readInt8
** 从缓存对象读取一个 8 位整型数值 **

```JavaScript
Integer Buffer.readInt8(Integer offset = 0,
    Boolean noAssert = false);
```

调用参数:
* offset: Integer, 指定读取的起始位置，缺省为 0
* noAssert: Boolean, 指定读取越界时不抛出错误，缺省为 flase，抛出

返回结果:
* Integer, 返回读取的整型数值

--------------------------
### readInt16LE
** 从缓存对象读取一个 16 位整型数值，以低字节序的存储方式 **

```JavaScript
Integer Buffer.readInt16LE(Integer offset = 0,
    Boolean noAssert = false);
```

调用参数:
* offset: Integer, 指定读取的起始位置，缺省为 0
* noAssert: Boolean, 指定读取越界时不抛出错误，缺省为 flase，抛出

返回结果:
* Integer, 返回读取的整型数值

--------------------------
### readInt16BE
** 从缓存对象读取一个 16 位整型数值，以高字节序的存储方式 **

```JavaScript
Integer Buffer.readInt16BE(Integer offset = 0,
    Boolean noAssert = false);
```

调用参数:
* offset: Integer, 指定读取的起始位置，缺省为 0
* noAssert: Boolean, 指定读取越界时不抛出错误，缺省为 flase，抛出

返回结果:
* Integer, 返回读取的整型数值

--------------------------
### readInt32LE
** 从缓存对象读取一个 32 位整型数值，以低字节序的存储方式 **

```JavaScript
Integer Buffer.readInt32LE(Integer offset = 0,
    Boolean noAssert = false);
```

调用参数:
* offset: Integer, 指定读取的起始位置，缺省为 0
* noAssert: Boolean, 指定读取越界时不抛出错误，缺省为 flase，抛出

返回结果:
* Integer, 返回读取的整型数值

--------------------------
### readInt32BE
** 从缓存对象读取一个 32 位整型数值，以高字节序的存储方式 **

```JavaScript
Integer Buffer.readInt32BE(Integer offset = 0,
    Boolean noAssert = false);
```

调用参数:
* offset: Integer, 指定读取的起始位置，缺省为 0
* noAssert: Boolean, 指定读取越界时不抛出错误，缺省为 flase，抛出

返回结果:
* Integer, 返回读取的整型数值

--------------------------
### readIntLE
** 从缓存对象读取一个整型数值，最大支持 48 位，以低字节序的存储方式 **

```JavaScript
Long Buffer.readIntLE(Integer offset = 0,
    Boolean noAssert = false);
```

调用参数:
* offset: Integer, 指定读取的起始位置，缺省为 0
* noAssert: Boolean, 指定读取越界时不抛出错误，缺省为 flase，抛出

返回结果:
* Long, 返回读取的整型数值

--------------------------
### readIntBE
** 从缓存对象读取一个整型数值，最大支持 48 位，以高字节序的存储方式 **

```JavaScript
Long Buffer.readIntBE(Integer offset = 0,
    Boolean noAssert = false);
```

调用参数:
* offset: Integer, 指定读取的起始位置，缺省为 0
* noAssert: Boolean, 指定读取越界时不抛出错误，缺省为 flase，抛出

返回结果:
* Long, 返回读取的整型数值

--------------------------
### readInt64LE
** 从缓存对象读取一个 64 位整型数值，以低字节序的存储方式 **

```JavaScript
Int64 Buffer.readInt64LE(Integer offset = 0,
    Boolean noAssert = false);
```

调用参数:
* offset: Integer, 指定读取的起始位置，缺省为 0
* noAssert: Boolean, 指定读取越界时不抛出错误，缺省为 flase，抛出

返回结果:
* [Int64](Int64.md), 返回读取的整型数值

--------------------------
### readInt64BE
** 从缓存对象读取一个 64 位整型数值，以高字节序的存储方式 **

```JavaScript
Int64 Buffer.readInt64BE(Integer offset = 0,
    Boolean noAssert = false);
```

调用参数:
* offset: Integer, 指定读取的起始位置，缺省为 0
* noAssert: Boolean, 指定读取越界时不抛出错误，缺省为 flase，抛出

返回结果:
* [Int64](Int64.md), 返回读取的整型数值

--------------------------
### readFloatLE
** 从缓存对象读取一个浮点数，以低字节序的存储方式 **

```JavaScript
Number Buffer.readFloatLE(Integer offset = 0,
    Boolean noAssert = false);
```

调用参数:
* offset: Integer, 指定读取的起始位置，缺省为 0
* noAssert: Boolean, 指定读取越界时不抛出错误，缺省为 flase，抛出

返回结果:
* Number, 返回读取的浮点数

--------------------------
### readFloatBE
** 从缓存对象读取一个浮点数，以高字节序的存储方式 **

```JavaScript
Number Buffer.readFloatBE(Integer offset = 0,
    Boolean noAssert = false);
```

调用参数:
* offset: Integer, 指定读取的起始位置，缺省为 0
* noAssert: Boolean, 指定读取越界时不抛出错误，缺省为 flase，抛出

返回结果:
* Number, 返回读取的浮点数

--------------------------
### readDoubleLE
** 从缓存对象读取一个双精度浮点数，以低字节序的存储方式 **

```JavaScript
Number Buffer.readDoubleLE(Integer offset = 0,
    Boolean noAssert = false);
```

调用参数:
* offset: Integer, 指定读取的起始位置，缺省为 0
* noAssert: Boolean, 指定读取越界时不抛出错误，缺省为 flase，抛出

返回结果:
* Number, 返回读取的双精度浮点数

--------------------------
### readDoubleBE
** 从缓存对象读取一个双精度浮点数，以高字节序的存储方式 **

```JavaScript
Number Buffer.readDoubleBE(Integer offset = 0,
    Boolean noAssert = false);
```

调用参数:
* offset: Integer, 指定读取的起始位置，缺省为 0
* noAssert: Boolean, 指定读取越界时不抛出错误，缺省为 flase，抛出

返回结果:
* Number, 返回读取的双精度浮点数

--------------------------
### writeUInt8
** 向缓存对象写入一个 8 位无符号整型数值 **

```JavaScript
Buffer.writeUInt8(Integer value,
    Integer offset = 0,
    Boolean noAssert = false);
```

调用参数:
* value: Integer, 指定写入的数值
* offset: Integer, 指定写入的起始位置
* noAssert: Boolean, 指定写入越界时不抛出错误，缺省为 flase，抛出

--------------------------
### writeUInt16LE
** 向缓存对象写入一个 16 位无符号整型数值，以低字节序的存储方式 **

```JavaScript
Buffer.writeUInt16LE(Integer value,
    Integer offset = 0,
    Boolean noAssert = false);
```

调用参数:
* value: Integer, 指定写入的数值
* offset: Integer, 指定写入的起始位置
* noAssert: Boolean, 指定写入越界时不抛出错误，缺省为 flase，抛出

--------------------------
### writeUInt16BE
** 向缓存对象写入一个 16 位无符号整型数值，以高字节序的存储方式 **

```JavaScript
Buffer.writeUInt16BE(Integer value,
    Integer offset = 0,
    Boolean noAssert = false);
```

调用参数:
* value: Integer, 指定写入的数值
* offset: Integer, 指定写入的起始位置
* noAssert: Boolean, 指定写入越界时不抛出错误，缺省为 flase，抛出

--------------------------
### writeUInt32LE
** 向缓存对象写入一个 32 位无符号整型数值，以低字节序的存储方式 **

```JavaScript
Buffer.writeUInt32LE(Long value,
    Integer offset = 0,
    Boolean noAssert = false);
```

调用参数:
* value: Long, 指定写入的数值
* offset: Integer, 指定写入的起始位置
* noAssert: Boolean, 指定写入越界时不抛出错误，缺省为 flase，抛出

--------------------------
### writeUInt32BE
** 向缓存对象写入一个 32 位无符号整型数值，以高字节序的存储方式 **

```JavaScript
Buffer.writeUInt32BE(Long value,
    Integer offset = 0,
    Boolean noAssert = false);
```

调用参数:
* value: Long, 指定写入的数值
* offset: Integer, 指定写入的起始位置
* noAssert: Boolean, 指定写入越界时不抛出错误，缺省为 flase，抛出

--------------------------
### writeUIntLE
** 向缓存对象写入一个无符号整型数值，最大支持 48 位，以低字节序的存储方式 **

```JavaScript
Buffer.writeUIntLE(Long value,
    Integer offset = 0,
    Boolean noAssert = false);
```

调用参数:
* value: Long, 指定写入的数值
* offset: Integer, 指定写入的起始位置
* noAssert: Boolean, 指定写入越界时不抛出错误，缺省为 flase，抛出

--------------------------
### writeUIntBE
** 向缓存对象写入一个无符号整型数值，最大支持 48 位，以高字节序的存储方式 **

```JavaScript
Buffer.writeUIntBE(Long value,
    Integer offset = 0,
    Boolean noAssert = false);
```

调用参数:
* value: Long, 指定写入的数值
* offset: Integer, 指定写入的起始位置
* noAssert: Boolean, 指定写入越界时不抛出错误，缺省为 flase，抛出

--------------------------
### writeInt8
** 向缓存对象写入一个 8 位整型数值 **

```JavaScript
Buffer.writeInt8(Integer value,
    Integer offset = 0,
    Boolean noAssert = false);
```

调用参数:
* value: Integer, 指定写入的数值
* offset: Integer, 指定写入的起始位置
* noAssert: Boolean, 指定写入越界时不抛出错误，缺省为 flase，抛出

--------------------------
### writeInt16LE
** 向缓存对象写入一个 16 位整型数值，以低字节序的存储方式 **

```JavaScript
Buffer.writeInt16LE(Integer value,
    Integer offset = 0,
    Boolean noAssert = false);
```

调用参数:
* value: Integer, 指定写入的数值
* offset: Integer, 指定写入的起始位置
* noAssert: Boolean, 指定写入越界时不抛出错误，缺省为 flase，抛出

--------------------------
### writeInt16BE
** 向缓存对象写入一个 16 位整型数值，以高字节序的存储方式 **

```JavaScript
Buffer.writeInt16BE(Integer value,
    Integer offset = 0,
    Boolean noAssert = false);
```

调用参数:
* value: Integer, 指定写入的数值
* offset: Integer, 指定写入的起始位置
* noAssert: Boolean, 指定写入越界时不抛出错误，缺省为 flase，抛出

--------------------------
### writeInt32LE
** 向缓存对象写入一个 32 位整型数值，以低字节序的存储方式 **

```JavaScript
Buffer.writeInt32LE(Integer value,
    Integer offset = 0,
    Boolean noAssert = false);
```

调用参数:
* value: Integer, 指定写入的数值
* offset: Integer, 指定写入的起始位置
* noAssert: Boolean, 指定写入越界时不抛出错误，缺省为 flase，抛出

--------------------------
### writeInt32BE
** 向缓存对象写入一个 32 位整型数值，以高字节序的存储方式 **

```JavaScript
Buffer.writeInt32BE(Integer value,
    Integer offset = 0,
    Boolean noAssert = false);
```

调用参数:
* value: Integer, 指定写入的数值
* offset: Integer, 指定写入的起始位置
* noAssert: Boolean, 指定写入越界时不抛出错误，缺省为 flase，抛出

--------------------------
### writeIntLE
** 向缓存对象写入一个整型数值，最大支持 48 位，以低字节序的存储方式 **

```JavaScript
Buffer.writeIntLE(Long value,
    Integer offset = 0,
    Boolean noAssert = false);
```

调用参数:
* value: Long, 指定写入的数值
* offset: Integer, 指定写入的起始位置
* noAssert: Boolean, 指定写入越界时不抛出错误，缺省为 flase，抛出

--------------------------
### writeIntBE
** 向缓存对象写入一个整型数值，最大支持 48 位，以高字节序的存储方式 **

```JavaScript
Buffer.writeIntBE(Long value,
    Integer offset = 0,
    Boolean noAssert = false);
```

调用参数:
* value: Long, 指定写入的数值
* offset: Integer, 指定写入的起始位置
* noAssert: Boolean, 指定写入越界时不抛出错误，缺省为 flase，抛出

--------------------------
### writeInt64LE
** 向缓存对象写入一个 64 位整型数值，以低字节序的存储方式 **

```JavaScript
Buffer.writeInt64LE(Int64 value,
    Integer offset = 0,
    Boolean noAssert = false);
```

调用参数:
* value: [Int64](Int64.md), 指定写入的数值
* offset: Integer, 指定写入的起始位置
* noAssert: Boolean, 指定写入越界时不抛出错误，缺省为 flase，抛出

--------------------------
### writeInt64BE
** 向缓存对象写入一个 64 位整型数值，以高字节序的存储方式 **

```JavaScript
Buffer.writeInt64BE(Int64 value,
    Integer offset = 0,
    Boolean noAssert = false);
```

调用参数:
* value: [Int64](Int64.md), 指定写入的数值
* offset: Integer, 指定写入的起始位置
* noAssert: Boolean, 指定写入越界时不抛出错误，缺省为 flase，抛出

--------------------------
### writeFloatLE
** 向缓存对象写入一个浮点数，以低字节序的存储方式 **

```JavaScript
Buffer.writeFloatLE(Number value,
    Integer offset,
    Boolean noAssert = false);
```

调用参数:
* value: Number, 指定写入的数值
* offset: Integer, 指定写入的起始位置
* noAssert: Boolean, 指定写入越界时不抛出错误，缺省为 flase，抛出

--------------------------
### writeFloatBE
** 向缓存对象写入一个浮点数，以高字节序的存储方式 **

```JavaScript
Buffer.writeFloatBE(Number value,
    Integer offset,
    Boolean noAssert = false);
```

调用参数:
* value: Number, 指定写入的数值
* offset: Integer, 指定写入的起始位置
* noAssert: Boolean, 指定写入越界时不抛出错误，缺省为 flase，抛出

--------------------------
### writeDoubleLE
** 向缓存对象写入一个双精度浮点数，以低字节序的存储方式 **

```JavaScript
Buffer.writeDoubleLE(Number value,
    Integer offset,
    Boolean noAssert = false);
```

调用参数:
* value: Number, 指定写入的数值
* offset: Integer, 指定写入的起始位置
* noAssert: Boolean, 指定写入越界时不抛出错误，缺省为 flase，抛出

--------------------------
### writeDoubleBE
** 向缓存对象写入一个双精度浮点数，以高字节序的存储方式 **

```JavaScript
Buffer.writeDoubleBE(Number value,
    Integer offset,
    Boolean noAssert = false);
```

调用参数:
* value: Number, 指定写入的数值
* offset: Integer, 指定写入的起始位置
* noAssert: Boolean, 指定写入越界时不抛出错误，缺省为 flase，抛出

--------------------------
### slice
** 返回一个新缓存对象，包含指定起始到缓存结尾的数据 **

```JavaScript
Buffer Buffer.slice(Integer start = 0);
```

调用参数:
* start: Integer, 指定范围的起始，缺省从头开始

返回结果:
* Buffer, 返回新的缓存对象

--------------------------
** 返回一个新缓存对象，包含指定范围的数据，若范围超出缓存，则只返回有效部分数据 **

```JavaScript
Buffer Buffer.slice(Integer start,
    Integer end);
```

调用参数:
* start: Integer, 指定范围的起始
* end: Integer, 指定范围的结束

返回结果:
* Buffer, 返回新的缓存对象

--------------------------
### hex
** 使用 16 进制编码缓存对象内容 **

```JavaScript
String Buffer.hex();
```

返回结果:
* String, 返回编码字符串

--------------------------
### base64
** 使用 [base64](../../module/ifs/base64.md) 编码缓存对象内容 **

```JavaScript
String Buffer.base64();
```

返回结果:
* String, 返回编码字符串

--------------------------
### toArray
** 返回全部二进制数据的数组 **

```JavaScript
Array Buffer.toArray();
```

返回结果:
* Array, 返回包含对象数据的数组

--------------------------
### toString
** 返回二进制数据的编码字符串 **

```JavaScript
String Buffer.toString(String codec,
    Integer offset = 0,
    Integer end = -1);
```

调用参数:
* codec: String, 指定编码格式，允许值为："[hex](../../module/ifs/hex.md)", "[base64](../../module/ifs/base64.md)", "utf8", 或者系统支持的字符集
* offset: Integer, 读取起始位置
* end: Integer, 读取终止位置

返回结果:
* String, 返回对象的字符串表示

--------------------------
** 返回二进制数据的 utf8 编码字符串 **

```JavaScript
String Buffer.toString();
```

返回结果:
* String, 返回对象的字符串表示

--------------------------
### dispose
** 强制回收对象，调用此方法后，对象资源将立即释放 **

```JavaScript
Buffer.dispose();
```

--------------------------
### equals
** 比较当前对象与给定的对象是否相等 **

```JavaScript
Boolean Buffer.equals(object expected);
```

调用参数:
* expected: object, 制定比较的目标对象

返回结果:
* Boolean, 返回对象比较的结果

--------------------------
### toString
** 返回对象的字符串表示，一般返回 "[Native Object]"，对象可以根据自己的特性重新实现 **

```JavaScript
String Buffer.toString();
```

返回结果:
* String, 返回对象的字符串表示

--------------------------
### toJSON
** 返回对象的 JSON 格式表示，一般返回对象定义的可读属性集合 **

```JavaScript
Value Buffer.toJSON(String key = "");
```

调用参数:
* key: String, 未使用

返回结果:
* Value, 返回包含可 JSON 序列化的值

--------------------------
### valueOf
** 返回对象本身的数值 **

```JavaScript
Value Buffer.valueOf();
```

返回结果:
* Value, 返回对象本身的数值

