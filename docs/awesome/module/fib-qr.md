## QR Code Generator for fibjs

## Installation

``` bash
$ npm install fib-qr
```

## Usage
``` JavaScript
var fs = require("fs");
var gd = require("gd");
var QRCode = require("fib-qr");

var opt = {
    width: 800,
    height: 800
};
var qrcode = new QRCode(opt);

var imgbase = qrcode.makeCode("http://fibjs.org/");
fs.writeFile("test.jpg", imgbase.getData(gd.JPEG));
```

default options:
``` JavaScript
this._htOption = {
    width: 512,
    height: 512,
    typeNumber: 4,
    colorDark: 0,
    colorLight: 0xffffff,
    correctLevel: QRCode.CorrectLevel.H
};
```
