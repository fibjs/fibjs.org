# 对象 DatagramPacket
UDP 数据包

## 成员函数
        
### dispose
** 强制回收对象，调用此方法后，对象资源将立即释放 **
```JavaScript
DatagramPacket.dispose();
```

--------------------------
### equals
** 比较当前对象与给定的对象是否相等 **
```JavaScript
Boolean DatagramPacket.equals(object expected);
```

调用参数:
* expected: object, 制定比较的目标对象

返回结果:
* Boolean, 返回对象比较的结果

--------------------------
### toString
** 返回对象的字符串表示，一般返回 "[Native Object]"，对象可以根据自己的特性重新实现 **
```JavaScript
String DatagramPacket.toString();
```

返回结果:
* String, 返回对象的字符串表示

--------------------------
### toJSON
** 返回对象的 JSON 格式表示，一般返回对象定义的可读属性集合 **
```JavaScript
Value DatagramPacket.toJSON(String key = "");
```

调用参数:
* key: String, 未使用

返回结果:
* Value, 返回包含可 JSON 序列化的值

--------------------------
### valueOf
** 返回对象本身的数值 **
```JavaScript
Value DatagramPacket.valueOf();
```

返回结果:
* Value, 返回对象本身的数值

## 成员属性
        
### data
** [Buffer](Buffer.md), 查询返回的数据 **
```JavaScript
readonly Buffer DatagramPacket.data;
```

--------------------------
### address
** String, 查询数据包来源地址 **
```JavaScript
readonly String DatagramPacket.address;
```

--------------------------
### port
** Integer, 查询数据包来源端口 **
```JavaScript
readonly Integer DatagramPacket.port;
```

