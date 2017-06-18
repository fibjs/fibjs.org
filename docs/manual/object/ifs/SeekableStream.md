# 对象 SeekableStream
可移动当前指针的流对象接口

## 函数
        
### seek
移动文件当前操作位置
```JavaScript
SeekableStream.seek(Long offset,
                Integer whence);
```

调用参数:
* offset - 指定新的位置
* whence - 指定位置基准，允许的值为：SEEK_SET, SEEK_CUR, SEEK_END

--------------------------
### tell
查询流当前位置
```JavaScript
Long SeekableStream.tell();
```

返回结果:
* 返回流当前位置

--------------------------
### rewind
移动当前位置到流开头
```JavaScript
SeekableStream.rewind();
```

--------------------------
### size
查询流尺寸
```JavaScript
Long SeekableStream.size();
```

返回结果:
* 返回流尺寸

--------------------------
### readAll
从流内读取剩余的全部数据
```JavaScript
Buffer SeekableStream.readAll() async;
```

返回结果:
* 返回从流内读取的数据，若无数据可读，或者连接中断，则返回 null

--------------------------
### truncate
修改文件尺寸，如果新尺寸小于原尺寸，则文件被截断
```JavaScript
SeekableStream.truncate(Long bytes) async;
```

调用参数:
* bytes - 新的文件尺寸

--------------------------
### eof
查询文件是否到结尾
```JavaScript
Boolean SeekableStream.eof();
```

返回结果:
* 返回 True 表示结尾

--------------------------
### flush
将文件缓冲区内容写入物理设备
```JavaScript
SeekableStream.flush() async;
```

--------------------------
### stat
查询当前文件的基础信息
```JavaScript
Stat SeekableStream.stat() async;
```

返回结果:
* 返回 Stat 对象描述文件信息

--------------------------
### read
从流内读取指定大小的数据
```JavaScript
Buffer SeekableStream.read(Integer bytes = -1) async;
```

调用参数:
* bytes - 指定要读取的数据量，缺省为读取随机大小的数据块，读出的数据尺寸取决于设备

返回结果:
* 返回从流内读取的数据，若无数据可读，或者连接中断，则返回 null

--------------------------
### write
将给定的数据写入流
```JavaScript
SeekableStream.write(Buffer data) async;
```

调用参数:
* data - 给定要写入的数据

--------------------------
### close
关闭当前流对象
```JavaScript
SeekableStream.close() async;
```

--------------------------
### copyTo
复制流数据到目标流中
```JavaScript
Long SeekableStream.copyTo(Stream stm,
                Long bytes = -1) async;
```

调用参数:
* stm - 目标流对象
* bytes - 复制的字节数

返回结果:
* 返回复制的字节数

--------------------------
### dispose
强制回收对象，调用此方法后，对象资源将立即释放
```JavaScript
SeekableStream.dispose();
```

--------------------------
### equals
比较当前对象与给定的对象是否相等
```JavaScript
Boolean SeekableStream.equals(object expected);
```

调用参数:
* expected - 制定比较的目标对象

返回结果:
* 返回对象比较的结果

--------------------------
### toString
返回对象的字符串表示，一般返回 "[Native Object]"，对象可以根据自己的特性重新实现
```JavaScript
String SeekableStream.toString();
```

返回结果:
* 返回对象的字符串表示

--------------------------
### toJSON
返回对象的 JSON 格式表示，一般返回对象定义的可读属性集合
```JavaScript
Value SeekableStream.toJSON(String key = "");
```

调用参数:
* key - 未使用

返回结果:
* 返回包含可 JSON 序列化的值

--------------------------
### valueOf
返回对象本身的数值
```JavaScript
Value SeekableStream.valueOf();
```

返回结果:
* 返回对象本身的数值

