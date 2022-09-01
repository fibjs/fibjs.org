# 对象 X509Crl
x509 撤销证书对象

X509Crl 对象属于 [crypto](../../module/ifs/crypto.md) 模块，创建：

```JavaScript
var k = new crypto.X509Crl();
```

## 继承关系
```uml
#lineWidth: 1.5
#font: Helvetica,sans-Serif
#fontSize: 10
#leading: 1.6
#.this: fill=lightgray
#.class: fill=white

[<class>object|toString();toJSON()]
[<this>X509Crl|new X509Crl()|version;issuer;serials;thisUpdate;nextUpdate;next|import();pem();der();clear()]

[object] <:- [X509Crl]
```

## 构造函数
        
### X509Crl
**X509Crl 构造函数**

```JavaScript
new X509Crl();
```

--------------------------
**X509Crl 构造函数,加载一个 DER 格式的撤销证书**

```JavaScript
new X509Crl(Buffer derCrl);
```

调用参数:
* derCrl: [Buffer](Buffer.md), DER 格式的撤销证书

--------------------------
**X509Crl 构造函数,加载一个 PEM 格式的撤销证书**

```JavaScript
new X509Crl(String pemCrl);
```

调用参数:
* pemCrl: String, PEM 格式的撤销证书

## 成员属性
        
### version
**Integer, 获取证书的版本**

```JavaScript
readonly Integer X509Crl.version;
```

--------------------------
### issuer
**String, 获取证书颁发者的可分辨名称**

```JavaScript
readonly String X509Crl.issuer;
```

--------------------------
### serials
**Array, 获取证书吊销序列号列表**

```JavaScript
readonly Array X509Crl.serials;
```

--------------------------
### thisUpdate
**Date, 获取证书的本次更新时间**

```JavaScript
readonly Date X509Crl.thisUpdate;
```

--------------------------
### nextUpdate
**Date, 获取证书的下次更新时间**

```JavaScript
readonly Date X509Crl.nextUpdate;
```

--------------------------
### next
**X509Crl, 获取证书链中得下一个证书**

```JavaScript
readonly X509Crl X509Crl.next;
```

## 成员函数
        
### import
**加载一个 DER 格式的撤销证书，可多次调用**

```JavaScript
X509Crl.import(Buffer derCrl);
```

调用参数:
* derCrl: [Buffer](Buffer.md), DER 格式的撤销证书

--------------------------
**加载一个 PEM 格式的撤销证书，可多次调用**

```JavaScript
X509Crl.import(String pemCrl);
```

调用参数:
* pemCrl: String, PEM 格式的撤销证书

--------------------------
### pem
**以 PEM 格式导出已经加载的撤销证书**

```JavaScript
String X509Crl.pem(Boolean all = true);
```

调用参数:
* all: Boolean, 指定是否输出全部证书，缺省为 true

返回结果:
* String, 以数组方式导出撤销证书链

--------------------------
### der
**以 DER 格式导出已经加载的撤销证书**

```JavaScript
Buffer X509Crl.der();
```

返回结果:
* [Buffer](Buffer.md), 以数组方式导出撤销证书链

--------------------------
### clear
**清空已经加载的撤销证书**

```JavaScript
X509Crl.clear();
```

--------------------------
### toString
**返回对象的字符串表示，一般返回 "[Native Object]"，对象可以根据自己的特性重新实现**

```JavaScript
String X509Crl.toString();
```

返回结果:
* String, 返回对象的字符串表示

--------------------------
### toJSON
**返回对象的 JSON 格式表示，一般返回对象定义的可读属性集合**

```JavaScript
Value X509Crl.toJSON(String key = "");
```

调用参数:
* key: String, 未使用

返回结果:
* Value, 返回包含可 JSON 序列化的值

