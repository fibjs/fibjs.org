# 对象 X509Cert
x509 证书对象

X509Cert 对象属于 [crypto](../../module/ifs/crypto.md) 模块，创建：

```JavaScript
var k = new crypto.X509Cert();
```

## 继承关系
<div class="inherits"><svg width="96pt" height="416pt" viewBox="0.00 0.00 96.00 416.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(4 412)">
<title>%0</title>
<polygon fill="#ffffff" stroke="transparent" points="-4,4 -4,-412 92,-412 92,4 -4,4"/>
<!-- object -->
<g id="node1" class="node">
<title>object</title>
<g id="a_node1"><a xlink:href="object.md" xlink:title="object">
<polygon fill="#ffffff" stroke="transparent" points="15.5,-316 15.5,-408 72.5,-408 72.5,-316 15.5,-316"/>
<polygon fill="none" stroke="#000000" points="16,-386 16,-408 73,-408 73,-386 16,-386"/>
<text text-anchor="start" x="31.1625" y="-394" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">object</text>
<polygon fill="none" stroke="#000000" points="16,-316 16,-386 73,-386 73,-316 16,-316"/>
<text text-anchor="start" x="21" y="-372" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> dispose()</text>
<text text-anchor="start" x="21" y="-360" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> equals()</text>
<text text-anchor="start" x="21" y="-348" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> toString()</text>
<text text-anchor="start" x="21" y="-336" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> toJSON()</text>
<text text-anchor="start" x="21" y="-324" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> valueOf()</text>
</a>
</g>
</g>
<!-- X509Cert -->
<g id="node2" class="node">
<title>X509Cert</title>
<g id="a_node2"><a xlink:title="X509Cert">
<polygon fill="#d3d3d3" stroke="transparent" points="0,0 0,-280 88,-280 88,0 0,0"/>
<polygon fill="none" stroke="#000000" points="0,-258 0,-280 88,-280 88,-258 0,-258"/>
<text text-anchor="start" x="22.884" y="-266" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">X509Cert</text>
<polygon fill="none" stroke="#000000" points="0,-236 0,-258 88,-258 88,-236 0,-236"/>
<text text-anchor="start" x="5" y="-244" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">  new X509Cert()</text>
<polygon fill="none" stroke="#000000" points="0,-82 0,-236 88,-236 88,-82 0,-82"/>
<text text-anchor="start" x="5" y="-222" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> version</text>
<text text-anchor="start" x="5" y="-210" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> serial</text>
<text text-anchor="start" x="5" y="-198" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> issuer</text>
<text text-anchor="start" x="5" y="-186" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> subject</text>
<text text-anchor="start" x="5" y="-174" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> notBefore</text>
<text text-anchor="start" x="5" y="-162" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> notAfter</text>
<text text-anchor="start" x="5" y="-150" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> ca</text>
<text text-anchor="start" x="5" y="-138" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> pathlen</text>
<text text-anchor="start" x="5" y="-126" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> usage</text>
<text text-anchor="start" x="5" y="-114" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> type</text>
<text text-anchor="start" x="5" y="-102" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> publicKey</text>
<text text-anchor="start" x="5" y="-90" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> next</text>
<polygon fill="none" stroke="#000000" points="0,0 0,-82 88,-82 88,0 0,0"/>
<text text-anchor="start" x="5" y="-68" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> load()</text>
<text text-anchor="start" x="5" y="-56" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> loadFile()</text>
<text text-anchor="start" x="5" y="-44" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> loadRootCerts()</text>
<text text-anchor="start" x="5" y="-32" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> verify()</text>
<text text-anchor="start" x="5" y="-20" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> dump()</text>
<text text-anchor="start" x="5" y="-8" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> clear()</text>
</a>
</g>
</g>
<!-- object&#45;&gt;X509Cert -->
<g id="edge1" class="edge">
<title>object-&gt;X509Cert</title>
<path fill="none" stroke="#000000" d="M44,-305.5289C44,-297.5321 44,-289.033 44,-280.2719"/>
<polygon fill="#000000" stroke="#000000" points="40.5001,-305.7317 44,-315.7318 47.5001,-305.7318 40.5001,-305.7317"/>
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

