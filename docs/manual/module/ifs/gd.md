# 模块 gd
图像文件处理模块

基础模块。可用于创建和操作图像文件，引用方式：
\code
var gd = require(&#39;gd&#39;);
\endcode
## 函数
        
### create
创建一个新图像
```JavaScript
Image gd.create(Integer width,
                Integer height,
                Integer color = undefined);
```

**调用参数:**
* width - 指定图像宽度
* height - 指定图像高度
* color - 指定图像类型，允许值为 gd.TRUECOLOR 或 gd.PALETTE

**返回结果:**
* 返回创建成功的图像对象

### load
从格式数据中解码图像
```JavaScript
Image gd.load(Buffer data);
```

**调用参数:**
* data - 给定解码的图像数据

**返回结果:**
* 返回解码成功的图像对象

### load
从流对象中解码图像
```JavaScript
Image gd.load(SeekableStream stm);
```

**调用参数:**
* stm - 给定图像数据所在的流对象

**返回结果:**
* 返回解码成功的图像对象

### load
从指定文件中解码图像
```JavaScript
Image gd.load(String fname);
```

**调用参数:**
* fname - 指定文件名

**返回结果:**
* 返回解码成功的图像对象

### rgb
通过 rgb 颜色分量生成组合颜色
```JavaScript
Integer gd.rgb(Integer red,
                Integer green,
                Integer blue);
```

**调用参数:**
* red - 红色分量，范围为 0-255
* green - 绿色分量，范围为 0-255
* blue - 蓝色分量，范围为 0-255

**返回结果:**
* 返回组合颜色

### rgba
通过 rgba 颜色分量生成组合颜色
```JavaScript
Integer gd.rgba(Integer red,
                Integer green,
                Integer blue,
                Number alpha);
```

**调用参数:**
* red - 红色分量，范围为 0-255
* green - 绿色分量，范围为 0-255
* blue - 蓝色分量，范围为 0-255
* alpha - 透明分量，范围为 0.0-1.0

**返回结果:**
* 返回组合颜色

### hsl
通过 hsl 颜色分量生成组合颜色
```JavaScript
Integer gd.hsl(Number hue,
                Number saturation,
                Number lightness);
```

**调用参数:**
* hue - 色相分量，范围为 0-360
* saturation - 饱和度分量，范围为 0.0-1.0
* lightness - 亮度分量，范围为 0.0-1.0

**返回结果:**
* 返回组合颜色

### hsla
通过 hsla 颜色分量生成组合颜色
```JavaScript
Integer gd.hsla(Number hue,
                Number saturation,
                Number lightness,
                Number alpha);
```

**调用参数:**
* hue - 色相分量，范围为 0-360
* saturation - 饱和度分量，范围为 0.0-1.0
* lightness - 亮度分量，范围为 0.0-1.0
* alpha - 透明分量，范围为 0.0-1.0

**返回结果:**
* 返回组合颜色

### hsb
通过 hsb 颜色分量生成组合颜色
```JavaScript
Integer gd.hsb(Number hue,
                Number saturation,
                Number brightness);
```

**调用参数:**
* hue - 色相分量，范围为 0-360
* saturation - 饱和度分量，范围为 0.0-1.0
* brightness - 明亮程度分量，范围为 0.0-1.0

**返回结果:**
* 返回组合颜色

### hsba
通过 hsba 颜色分量生成组合颜色
```JavaScript
Integer gd.hsba(Number hue,
                Number saturation,
                Number brightness,
                Number alpha);
```

**调用参数:**
* hue - 色相分量，范围为 0-360
* saturation - 饱和度分量，范围为 0.0-1.0
* brightness - 明亮程度分量，范围为 0.0-1.0
* alpha - 透明分量，范围为 0.0-1.0

**返回结果:**
* 返回组合颜色

### color
通过字符串生成组合颜色
```JavaScript
Integer gd.color(String color);
```

**调用参数:**
* color - 指定颜色的字符串，如：&#34;#ff0000&#34;, &#34;ff0000&#34;, &#34;#f00&#34;, &#34;f00&#34;

**返回结果:**
* 返回组合颜色

## 常量
        
### NONE
图像格式常量，标示当前图像来源为未知
```JavaScript
gd.NONE;
```

### JPEG
图像格式常量，标示当前图像来源为 jpeg 格式数据
```JavaScript
gd.JPEG;
```

### GIF
图像格式常量，标示当前图像来源为 gif 格式数据
```JavaScript
gd.GIF;
```

### PNG
图像格式常量，标示当前图像来源为 png 格式数据
```JavaScript
gd.PNG;
```

### TIFF
图像格式常量，标示当前图像来源为 tiff 格式数据
```JavaScript
gd.TIFF;
```

### BMP
图像格式常量，标示当前图像来源为 bmp 格式数据
```JavaScript
gd.BMP;
```

### WEBP
图像格式常量，标示当前图像来源为 webp 格式数据
```JavaScript
gd.WEBP;
```

### TRUECOLOR
图像类型常量，标示当前图像为真彩色图像
```JavaScript
gd.TRUECOLOR;
```

### PALETTE
图像类型常量，标示当前图像为调色板图像
```JavaScript
gd.PALETTE;
```

### ARC
扇形绘制样式，绘制一条连接开始和结束点的圆弧
```JavaScript
gd.ARC;
```

### CHORD
扇形绘制样式，绘制一条连接原点，开始和结束点的直线
```JavaScript
gd.CHORD;
```

### NOFILL
扇形绘制样式，绘制不填充的扇形
```JavaScript
gd.NOFILL;
```

### EDGED
扇形绘制样式，绘制一条连接起点和终点的弧和连接原点的直线
```JavaScript
gd.EDGED;
```

### HORIZONTAL
镜像方向，横向做镜像处理
```JavaScript
gd.HORIZONTAL;
```

### VERTICAL
镜像方向，纵向做镜像处理
```JavaScript
gd.VERTICAL;
```

### BOTH
镜像方向，横向和纵向都做镜像处理
```JavaScript
gd.BOTH;
```

### LEFT
旋转方向，向左旋转
```JavaScript
gd.LEFT;
```

### RIGHT
旋转方向，向右旋转
```JavaScript
gd.RIGHT;
```

### MEAN_REMOVAL
滤波器类型：用平均移除法来达到轮廓效果
```JavaScript
gd.MEAN_REMOVAL;
```

### EDGEDETECT
滤波器类型：用边缘检测来突出图像的边缘
```JavaScript
gd.EDGEDETECT;
```

### EMBOSS
滤波器类型：使图像浮雕化
```JavaScript
gd.EMBOSS;
```

### SELECTIVE_BLUR
滤波器类型：模糊图像
```JavaScript
gd.SELECTIVE_BLUR;
```

### GAUSSIAN_BLUR
滤波器类型：用高斯算法模糊图像
```JavaScript
gd.GAUSSIAN_BLUR;
```

### NEGATE
滤波器类型：将图像中所有颜色反转
```JavaScript
gd.NEGATE;
```

### GRAYSCALE
滤波器类型：将图像转换为灰度图
```JavaScript
gd.GRAYSCALE;
```

### SMOOTH
滤波器类型：使图像更柔滑，用arg1设定柔滑级别
```JavaScript
gd.SMOOTH;
```

### BRIGHTNESS
滤波器类型：改变图像的亮度，用arg1设定亮度级别，取值范围是-255~255
```JavaScript
gd.BRIGHTNESS;
```

### CONTRAST
滤波器类型：改变图像的对比度，用arg1设定对比度级别，取值范围是0~100
```JavaScript
gd.CONTRAST;
```

### COLORIZE
滤波器类型：改变图像的色调，用arg1、arg2、arg3分别指定red、blue、green，每种颜色范围是0~255，arg4为透明度，取值返回是0~127
```JavaScript
gd.COLORIZE;
```

