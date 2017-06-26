# 对象 X509Cert
x509 证书对象

X509Cert 对象属于 [crypto](../../module/ifs/crypto.md) 模块，创建：

```JavaScript
var k = new crypto.X509Cert();
```

## 继承关系
<div class="inherits"><svg width="95pt" height="406pt" viewBox="0.00 0.00 94.56 406.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(4 402)">
<title>%0</title>
<polygon fill="#ffffff" stroke="transparent" points="-4,4 -4,-402 90.556,-402 90.556,4 -4,4"/>
<!-- object -->
<g id="node1" class="node">
<title>object</title>
<g id="a_node1"><a xlink:href="object.md" xlink:title="object">
<polygon fill="#ffffff" stroke="#000000" points="14.4465,-309.5 14.4465,-397.5 72.1095,-397.5 72.1095,-309.5 14.4465,-309.5"/>
<text text-anchor="middle" x="43.278" y="-384.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">object</text>
<polyline fill="none" stroke="#000000" points="14.4465,-377.5 72.1095,-377.5 "/>
<text text-anchor="start" x="22.4465" y="-364.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">dispose()</text>
<text text-anchor="start" x="22.4465" y="-352.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">equals()</text>
<text text-anchor="start" x="22.4465" y="-340.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">toString()</text>
<text text-anchor="start" x="22.4465" y="-328.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">toJSON()</text>
<text text-anchor="start" x="22.4465" y="-316.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">valueOf()</text>
</a>
</g>
</g>
<!-- X509Cert -->
<g id="node2" class="node">
<title>X509Cert</title>
<g id="a_node2"><a xlink:title="X509Cert">
<polygon fill="#d3d3d3" stroke="#000000" points="0,-.5 0,-272.5 86.556,-272.5 86.556,-.5 0,-.5"/>
<text text-anchor="middle" x="43.278" y="-259.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">X509Cert</text>
<polyline fill="none" stroke="#000000" points="0,-252.5 86.556,-252.5 "/>
<text text-anchor="start" x="8" y="-239.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">new X509Cert()</text>
<polyline fill="none" stroke="#000000" points="0,-232.5 86.556,-232.5 "/>
<text text-anchor="start" x="8" y="-219.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">version</text>
<text text-anchor="start" x="8" y="-207.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">serial</text>
<text text-anchor="start" x="8" y="-195.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">issuer</text>
<text text-anchor="start" x="8" y="-183.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">subject</text>
<text text-anchor="start" x="8" y="-171.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">notBefore</text>
<text text-anchor="start" x="8" y="-159.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">notAfter</text>
<text text-anchor="start" x="8" y="-147.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">ca</text>
<text text-anchor="start" x="8" y="-135.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">pathlen</text>
<text text-anchor="start" x="8" y="-123.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">usage</text>
<text text-anchor="start" x="8" y="-111.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">type</text>
<text text-anchor="start" x="8" y="-99.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">publicKey</text>
<text text-anchor="start" x="8" y="-87.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">next</text>
<polyline fill="none" stroke="#000000" points="0,-80.5 86.556,-80.5 "/>
<text text-anchor="start" x="8" y="-67.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">load()</text>
<text text-anchor="start" x="8" y="-55.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">loadFile()</text>
<text text-anchor="start" x="8" y="-43.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">loadRootCerts()</text>
<text text-anchor="start" x="8" y="-31.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">verify()</text>
<text text-anchor="start" x="8" y="-19.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">dump()</text>
<text text-anchor="start" x="8" y="-7.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">clear()</text>
</a>
</g>
</g>
<!-- object&#45;&gt;X509Cert -->
<g id="edge1" class="edge">
<title>object-&gt;X509Cert</title>
<path fill="none" stroke="#000000" d="M43.278,-299.157C43.278,-290.8734 43.278,-282.0234 43.278,-272.8906"/>
<polygon fill="#000000" stroke="#000000" points="39.7781,-299.3252 43.278,-309.3253 46.7781,-299.3253 39.7781,-299.3252"/>
</g>
</g>
</svg></div>

## 构造函数
        
### X509Cert
** X509Cert 构造函数 **

```JavaScript
new X509Cert();
```

## 成员属性
        
### version
** Integer, 获取证书的版本 **

```JavaScript
readonly Integer X509Cert.version;
```

--------------------------
### serial
** String, 获取证书的序列号 **

```JavaScript
readonly String X509Cert.serial;
```

--------------------------
### issuer
** String, 获取证书颁发者的可分辨名称 **

```JavaScript
readonly String X509Cert.issuer;
```

--------------------------
### subject
** String, 获取证书的主题可分辨名称 **

```JavaScript
readonly String X509Cert.subject;
```

--------------------------
### notBefore
** Date, 获取证书的生效时间 **

```JavaScript
readonly Date X509Cert.notBefore;
```

--------------------------
### notAfter
** Date, 获取证书的到期时间 **

```JavaScript
readonly Date X509Cert.notAfter;
```

--------------------------
### ca
** Boolean, 获取证书是否是 ca 证书 **

```JavaScript
readonly Boolean X509Cert.ca;
```

--------------------------
### pathlen
** Integer, 获取证书的 pathlen **

```JavaScript
readonly Integer X509Cert.pathlen;
```

--------------------------
### usage
** String, 获取证书的使用范围 **

```JavaScript
readonly String X509Cert.usage;
```

结果为全部或部分以下内容：digitalSignature, nonRepudiation, keyEncipherment, dataEncipherment, keyAgreement, keyCertSign, cRLSign

--------------------------
### type
** String, 获取证书的 Netscape 证书类型 **

```JavaScript
readonly String X509Cert.type;
```

结果为全部或部分以下内容：client, server, email, objsign, reserved, sslCA, emailCA, objCA

--------------------------
### publicKey
** [PKey](PKey.md), 获取证书的公钥 **

```JavaScript
readonly PKey X509Cert.publicKey;
```

--------------------------
### next
** X509Cert, 获取证书链中得下一个证书 **

```JavaScript
readonly X509Cert X509Cert.next;
```

## 成员函数
        
### load
** 加载一个 DER 格式的证书，可多次调用 **

```JavaScript
X509Cert.load(Buffer derCert);
```

调用参数:
* derCert: [Buffer](Buffer.md), DER 格式的证书

--------------------------
** 加载一个 CRT/PEM/TXT 格式的证书，可多次调用 **

```JavaScript
X509Cert.load(String txtCert);
```

调用参数:
* txtCert: String, PEM 格式的证书

load 加载 mozilla 的 certdata,txt， 可于 [http](../../module/ifs/http.md)://hg.mozilla.org/releases/mozilla-release/raw-file/default/security/nss/lib/ckfw/builtins/certdata.txt 下载使用

--------------------------
### loadFile
** 加载一个 CRT/PEM/DER/TXT 格式的证书，可多次调用 **

```JavaScript
X509Cert.loadFile(String filename);
```

调用参数:
* filename: String, 证书文件名

loadFile 加载 mozilla 的 certdata,txt， 可于 [http](../../module/ifs/http.md)://hg.mozilla.org/releases/mozilla-release/raw-file/default/security/nss/lib/ckfw/builtins/certdata.txt 下载使用

--------------------------
### loadRootCerts
** 加载自带的缺省根证书 **

```JavaScript
X509Cert.loadRootCerts();
```

此证书内容源自：[http](../../module/ifs/http.md)://hg.mozilla.org/releases/mozilla-release/raw-file/default/security/nss/lib/ckfw/builtins/certdata.txt

--------------------------
### verify
** 使用当前证书链验证给定的证书 **

```JavaScript
Boolean X509Cert.verify(X509Cert cert) async;
```

调用参数:
* cert: X509Cert, 给定需要验证的证书

返回结果:
* Boolean, 如果验证成功则返回 True

--------------------------
### dump
** 导出已经加载的证书 **

```JavaScript
Array X509Cert.dump();
```

返回结果:
* Array, 以数组方式导出证书链

--------------------------
### clear
** 清空已经加载的证书 **

```JavaScript
X509Cert.clear();
```

--------------------------
### dispose
** 强制回收对象，调用此方法后，对象资源将立即释放 **

```JavaScript
X509Cert.dispose();
```

--------------------------
### equals
** 比较当前对象与给定的对象是否相等 **

```JavaScript
Boolean X509Cert.equals(object expected);
```

调用参数:
* expected: object, 制定比较的目标对象

返回结果:
* Boolean, 返回对象比较的结果

--------------------------
### toString
** 返回对象的字符串表示，一般返回 "[Native Object]"，对象可以根据自己的特性重新实现 **

```JavaScript
String X509Cert.toString();
```

返回结果:
* String, 返回对象的字符串表示

--------------------------
### toJSON
** 返回对象的 JSON 格式表示，一般返回对象定义的可读属性集合 **

```JavaScript
Value X509Cert.toJSON(String key = "");
```

调用参数:
* key: String, 未使用

返回结果:
* Value, 返回包含可 JSON 序列化的值

--------------------------
### valueOf
** 返回对象本身的数值 **

```JavaScript
Value X509Cert.valueOf();
```

返回结果:
* Value, 返回对象本身的数值

