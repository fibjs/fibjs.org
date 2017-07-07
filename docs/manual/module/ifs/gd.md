# 模块 gd
图像文件处理模块

基础模块。可用于创建和操作图像文件，引用方式：

```JavaScript
var gd = require('gd');
```

## 静态函数
        
### create
**创建一个新图像**

```JavaScript
static Image gd.create(Integer width,
    Integer height,
    Integer color = gd.TRUECOLOR) async;
```

调用参数:
* width: Integer, 指定图像宽度
* height: Integer, 指定图像高度
* color: Integer, 指定图像类型，允许值为 [gd.TRUECOLOR](gd.md#TRUECOLOR) 或 [gd.PALETTE](gd.md#PALETTE)

返回结果:
* [Image](../../object/ifs/Image.md), 返回创建成功的图像对象

--------------------------
### load
**从格式数据中解码图像**

```JavaScript
static Image gd.load(Buffer data) async;
```

调用参数:
* data: [Buffer](../../object/ifs/Buffer.md), 给定解码的图像数据

返回结果:
* [Image](../../object/ifs/Image.md), 返回解码成功的图像对象

--------------------------
**从流对象中解码图像**

```JavaScript
static Image gd.load(SeekableStream stm) async;
```

调用参数:
* stm: [SeekableStream](../../object/ifs/SeekableStream.md), 给定图像数据所在的流对象

返回结果:
* [Image](../../object/ifs/Image.md), 返回解码成功的图像对象

--------------------------
**从指定文件中解码图像**

```JavaScript
static Image gd.load(String fname) async;
```

调用参数:
* fname: String, 指定文件名

返回结果:
* [Image](../../object/ifs/Image.md), 返回解码成功的图像对象

--------------------------
### rgb
**通过 rgb 颜色分量生成组合颜色**

```JavaScript
static Integer gd.rgb(Integer red,
    Integer green,
    Integer blue);
```

调用参数:
* red: Integer, 红色分量，范围为 0-255
* green: Integer, 绿色分量，范围为 0-255
* blue: Integer, 蓝色分量，范围为 0-255

返回结果:
* Integer, 返回组合颜色

--------------------------
### rgba
**通过 rgba 颜色分量生成组合颜色**

```JavaScript
static Integer gd.rgba(Integer red,
    Integer green,
    Integer blue,
    Number alpha);
```

调用参数:
* red: Integer, 红色分量，范围为 0-255
* green: Integer, 绿色分量，范围为 0-255
* blue: Integer, 蓝色分量，范围为 0-255
* alpha: Number, 透明分量，范围为 0.0-1.0

返回结果:
* Integer, 返回组合颜色

--------------------------
### hsl
**通过 hsl 颜色分量生成组合颜色**

```JavaScript
static Integer gd.hsl(Number hue,
    Number saturation,
    Number lightness);
```

调用参数:
* hue: Number, 色相分量，范围为 0-360
* saturation: Number, 饱和度分量，范围为 0.0-1.0
* lightness: Number, 亮度分量，范围为 0.0-1.0

返回结果:
* Integer, 返回组合颜色

--------------------------
### hsla
**通过 hsla 颜色分量生成组合颜色**

```JavaScript
static Integer gd.hsla(Number hue,
    Number saturation,
    Number lightness,
    Number alpha);
```

调用参数:
* hue: Number, 色相分量，范围为 0-360
* saturation: Number, 饱和度分量，范围为 0.0-1.0
* lightness: Number, 亮度分量，范围为 0.0-1.0
* alpha: Number, 透明分量，范围为 0.0-1.0

返回结果:
* Integer, 返回组合颜色

--------------------------
### hsb
**通过 hsb 颜色分量生成组合颜色**

```JavaScript
static Integer gd.hsb(Number hue,
    Number saturation,
    Number brightness);
```

调用参数:
* hue: Number, 色相分量，范围为 0-360
* saturation: Number, 饱和度分量，范围为 0.0-1.0
* brightness: Number, 明亮程度分量，范围为 0.0-1.0

返回结果:
* Integer, 返回组合颜色

--------------------------
### hsba
**通过 hsba 颜色分量生成组合颜色**

```JavaScript
static Integer gd.hsba(Number hue,
    Number saturation,
    Number brightness,
    Number alpha);
```

调用参数:
* hue: Number, 色相分量，范围为 0-360
* saturation: Number, 饱和度分量，范围为 0.0-1.0
* brightness: Number, 明亮程度分量，范围为 0.0-1.0
* alpha: Number, 透明分量，范围为 0.0-1.0

返回结果:
* Integer, 返回组合颜色

--------------------------
### color
**通过字符串生成组合颜色**

```JavaScript
static Integer gd.color(String color);
```

调用参数:
* color: String, 指定颜色的字符串，如："#ff0000", "ff0000", "#f00", "f00"

返回结果:
* Integer, 返回组合颜色

## 常量
        
### NONE
**图像格式常量，标示当前图像来源为未知**

```JavaScript
const gd.NONE = 0;
```

--------------------------
### JPEG
**图像格式常量，标示当前图像来源为 jpeg 格式数据**

```JavaScript
const gd.JPEG = 1;
```

--------------------------
### GIF
**图像格式常量，标示当前图像来源为 gif 格式数据**

```JavaScript
const gd.GIF = 2;
```

--------------------------
### PNG
**图像格式常量，标示当前图像来源为 png 格式数据**

```JavaScript
const gd.PNG = 3;
```

--------------------------
### TIFF
**图像格式常量，标示当前图像来源为 tiff 格式数据**

```JavaScript
const gd.TIFF = 4;
```

--------------------------
### BMP
**图像格式常量，标示当前图像来源为 bmp 格式数据**

```JavaScript
const gd.BMP = 5;
```

--------------------------
### WEBP
**图像格式常量，标示当前图像来源为 webp 格式数据**

```JavaScript
const gd.WEBP = 6;
```

--------------------------
### TRUECOLOR
**图像类型常量，标示当前图像为真彩色图像**

```JavaScript
const gd.TRUECOLOR = 0;
```

--------------------------
### PALETTE
**图像类型常量，标示当前图像为调色板图像**

```JavaScript
const gd.PALETTE = 1;
```

--------------------------
### ARC
**扇形绘制样式，绘制一条连接开始和结束点的圆弧**

```JavaScript
const gd.ARC = 0;
```

--------------------------
### CHORD
**扇形绘制样式，绘制一条连接原点，开始和结束点的直线**

```JavaScript
const gd.CHORD = 1;
```

--------------------------
### NOFILL
**扇形绘制样式，绘制不填充的扇形**

```JavaScript
const gd.NOFILL = 2;
```

--------------------------
### EDGED
**扇形绘制样式，绘制一条连接起点和终点的弧和连接原点的直线**

```JavaScript
const gd.EDGED = 4;
```

--------------------------
### HORIZONTAL
**镜像方向，横向做镜像处理**

```JavaScript
const gd.HORIZONTAL = 1;
```

--------------------------
### VERTICAL
**镜像方向，纵向做镜像处理**

```JavaScript
const gd.VERTICAL = 2;
```

--------------------------
### BOTH
**镜像方向，横向和纵向都做镜像处理**

```JavaScript
const gd.BOTH = 3;
```

--------------------------
### LEFT
**旋转方向，向左旋转**

```JavaScript
const gd.LEFT = 1;
```

--------------------------
### RIGHT
**旋转方向，向右旋转**

```JavaScript
const gd.RIGHT = 2;
```

--------------------------
### MEAN_REMOVAL
**滤波器类型：用平均移除法来达到轮廓效果**

```JavaScript
const gd.MEAN_REMOVAL = 0;
```

--------------------------
### EDGEDETECT
**滤波器类型：用边缘检测来突出图像的边缘**

```JavaScript
const gd.EDGEDETECT = 1;
```

--------------------------
### EMBOSS
**滤波器类型：使图像浮雕化**

```JavaScript
const gd.EMBOSS = 2;
```

--------------------------
### SELECTIVE_BLUR
**滤波器类型：模糊图像**

```JavaScript
const gd.SELECTIVE_BLUR = 3;
```

--------------------------
### GAUSSIAN_BLUR
**滤波器类型：用高斯算法模糊图像**

```JavaScript
const gd.GAUSSIAN_BLUR = 4;
```

--------------------------
### NEGATE
**滤波器类型：将图像中所有颜色反转**

```JavaScript
const gd.NEGATE = 5;
```

--------------------------
### GRAYSCALE
**滤波器类型：将图像转换为灰度图**

```JavaScript
const gd.GRAYSCALE = 6;
```

--------------------------
### SMOOTH
**滤波器类型：使图像更柔滑，用arg1设定柔滑级别**

```JavaScript
const gd.SMOOTH = 7;
```

--------------------------
### BRIGHTNESS
**滤波器类型：改变图像的亮度，用arg1设定亮度级别，取值范围是-255~255**

```JavaScript
const gd.BRIGHTNESS = 8;
```

--------------------------
### CONTRAST
**滤波器类型：改变图像的对比度，用arg1设定对比度级别，取值范围是0~100**

```JavaScript
const gd.CONTRAST = 9;
```

--------------------------
### COLORIZE
**滤波器类型：改变图像的色调，用arg1、arg2、arg3分别指定red、blue、green，每种颜色范围是0~255，arg4为透明度，取值返回是0~127**

```JavaScript
const gd.COLORIZE = 10;
```

