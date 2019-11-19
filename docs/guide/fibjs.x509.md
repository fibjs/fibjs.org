# fibjs 中 X509 证书的使用

## 方式一：使用临时生成自签发证书

```js
const CYPT = require('crypto');
const SSLX = require('ssl');
const HTTP = require("http");
```

**1.创建一个密钥对象, 并生成2048位RSA密钥对**

```js
let pky = new CYPT.PKey();  
pky.genRsaKey(2048); 
```        


**2.创建证书请求对象, 用到了上面 pky 中的公钥**

```js
let xrq = new CYPT.X509Req("CN=localhost,O=fibjs", pky);


/**
 * CN=localhost 是证书的主题名称, 就是证书的使用者（一般是域名
 * 可以加一些扩展内容, 比如 O=IBM,OU=IT,...（用逗号分隔）等项
 */
```


**3.签发证书, 用到 pky 中的私钥**

```js
let opt = {
  notBefore: new Date('2019-01-01') // 证书生效时间
 ,notAfter:  new Date('2029-12-31') // 证书失效时间
};
let crt = xrq.sign("CN=myy.mkx", pky, opt); 

// CN=myy.mkx 是证书的签发者, 同样可添加扩展
// opt 参数参见 fibjs 文档
```

**4. 使用临时证书启动https服务**

```js
var svr = new HTTP.HttpsServer(crt, pky, 443, (req)=> {
  req.response.write('<h1>fibjs https server</h1>');
});
svr.start();
```


**5. 浏览器访问 https://localhost/ 测试, 因为不是正式的证书, 浏览器不会认, 需要手动继续访问, 点击地址栏证书图标可查看证书的详细信息。**

-----
## 方式二：生成和使用自签发证书文件


**1. 生成证书/私钥文件**
```js
const fs = require('fs');

//...(同上面方式一的1、2、3步骤, 省略)...

let ks = pky.exportPem();   // 导出私钥文本
let cs = crt.dump(true)[0]; // 导出证书文本, 数组（只有一项）

fs.writeTextFile('d:/mycert.key', ks); // 保存私钥
fs.writeTextFile('d:/mycert.pem', cs); // 保存证书
```

**2. 使用证书/私钥文件**

```js
const CYPT = require('crypto');
const SSLX = require('ssl');
const HTTP = require("http");

let pky = new CYPT.PKey();      
let crt = new CYPT.X509Cert();  

pky.importFile('d:/mycert.key'); // 读取key文件
crt.loadFile('d:/mycert.pem');   // 读取pem文件

var svr = new HTTP.HttpsServer(crt, pky, 443, (req)=> {
  req.response.write('<h1>fibjs https server</h1>');
});
svr.start();
```

## 方式三: 使用已有的证书

以上载入证书文件的方法, 也可用于正式证书, 比如

- 从阿里云申请的免费证书（下载other格式, 包含 xxx.pem 和 xxx.key 两个文件.
- 通过 certbot 申请得到的证书.

其他格式的证书可能需要转换, 具体请参考 fibjs 的文档。