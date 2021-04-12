# 对象 Image
图像处理对象，用以对图像进行转换，绘制，存储等操作

Image 对象属于 [gd](../../module/ifs/gd.md) 模块，创建：

```JavaScript
var img = gd.create(640, 480);
var img1 = gd.load(data);
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
[<this>Image|width;height;format;type;colorsTotal;transparent;progressive;alphaBlending|getData();save();colorAllocate();colorAllocateAlpha();colorClosest();colorClosestHWB();colorClosestAlpha();colorExact();colorExactAlpha();colorResolve();colorResolveAlpha();colorDeallocate();clip();getPixel();getTrueColorPixel();setPixel();setThickness();line();rectangle();filledRectangle();polygon();openPolygon();filledPolygon();ellipse();filledEllipse();arc();filledArc();fill();fillToBorder();colorReplace();clone();resample();crop();flip();rotate();convert();copy();copyMerge();copyMergeGray();copyResized();copyResampled();copyRotated();filter();affine();gaussianBlur()]

[object] <:- [Image]
```

## 成员属性
        
### width
**Integer, 查询图像宽度**

```JavaScript
readonly Integer Image.width;
```

--------------------------
### height
**Integer, 查询图像高度**

```JavaScript
readonly Integer Image.height;
```

--------------------------
### format
**Integer, 查询图像来源格式，结果为 [gd.PNG](../../module/ifs/gd.md#PNG), [gd.JPEG](../../module/ifs/gd.md#JPEG), [gd.GIF](../../module/ifs/gd.md#GIF), [gd.BMP](../../module/ifs/gd.md#BMP), [gd.WEBP](../../module/ifs/gd.md#WEBP)**

```JavaScript
readonly Integer Image.format;
```

--------------------------
### type
**Integer, 查询图像类型，结果为 [gd.TRUECOLOR](../../module/ifs/gd.md#TRUECOLOR), [gd.PALETTE](../../module/ifs/gd.md#PALETTE)**

```JavaScript
readonly Integer Image.type;
```

--------------------------
### colorsTotal
**Integer, 查询图像颜色表内的颜色总数**

```JavaScript
readonly Integer Image.colorsTotal;
```

--------------------------
### transparent
**Integer, 查询和设定指定的颜色为透明色**

```JavaScript
Integer Image.transparent;
```

--------------------------
### progressive
**Boolean, 查询和设定图像是否渐进式，仅支持 jpeg 格式时**

```JavaScript
Boolean Image.progressive;
```

--------------------------
### alphaBlending
**Boolean, 查询和设定绘图时是否计算 alpha 层，缺省为 true**

```JavaScript
Boolean Image.alphaBlending;
```

## 成员函数
        
### getData
**按照指定的格式返回图像数据**

```JavaScript
Buffer Image.getData(Integer format = gd.PNG,
    Integer quality = 85) async;
```

调用参数:
* format: Integer, 指定返回数据的格式，允许值为 [gd.PNG](../../module/ifs/gd.md#PNG), [gd.JPEG](../../module/ifs/gd.md#JPEG), [gd.GIF](../../module/ifs/gd.md#GIF), [gd.BMP](../../module/ifs/gd.md#BMP), [gd.WEBP](../../module/ifs/gd.md#WEBP), 缺省为 [gd.PNG](../../module/ifs/gd.md#PNG)
* quality: Integer, 当格式为 [gd.JPEG](../../module/ifs/gd.md#JPEG) 或 [gd.WEBP](../../module/ifs/gd.md#WEBP) 时用于指定压缩质量，缺省为 85，其他格式忽略此参数

返回结果:
* [Buffer](Buffer.md), 返回格式化的数据

--------------------------
### save
**按照指定的格式将图像数据存入流对象**

```JavaScript
Image.save(Stream stm,
    Integer format = gd.PNG,
    Integer quality = 85) async;
```

调用参数:
* stm: [Stream](Stream.md), 指定要存入的流对象
* format: Integer, 指定返回数据的格式，允许值为 [gd.PNG](../../module/ifs/gd.md#PNG), [gd.JPEG](../../module/ifs/gd.md#JPEG), [gd.GIF](../../module/ifs/gd.md#GIF), [gd.BMP](../../module/ifs/gd.md#BMP), [gd.WEBP](../../module/ifs/gd.md#WEBP), 缺省为 [gd.PNG](../../module/ifs/gd.md#PNG)
* quality: Integer, 当格式为 [gd.JPEG](../../module/ifs/gd.md#JPEG) 或 [gd.WEBP](../../module/ifs/gd.md#WEBP) 时用于指定压缩质量，缺省为 85，其他格式忽略此参数

--------------------------
**按照指定的格式将图像数据存入指定文件，文件将被强制覆盖**

```JavaScript
Image.save(String fname,
    Integer format = gd.PNG,
    Integer quality = 85) async;
```

调用参数:
* fname: String, 指定文件名
* format: Integer, 指定返回数据的格式，允许值为 [gd.PNG](../../module/ifs/gd.md#PNG), [gd.JPEG](../../module/ifs/gd.md#JPEG), [gd.GIF](../../module/ifs/gd.md#GIF), [gd.BMP](../../module/ifs/gd.md#BMP), [gd.WEBP](../../module/ifs/gd.md#WEBP), 缺省为 [gd.PNG](../../module/ifs/gd.md#PNG)
* quality: Integer, 当格式为 [gd.JPEG](../../module/ifs/gd.md#JPEG) 时用于指定压缩质量，缺省为 85，其他格式忽略此参数

--------------------------
### colorAllocate
**为指定的颜色申请一个颜色号，对于 [gd.PALETTE](../../module/ifs/gd.md#PALETTE) 图像，颜色号为调色板索引，对于 [gd.TRUECOLOR](../../module/ifs/gd.md#TRUECOLOR) 图像，颜色号为 rgb 编码数值**

```JavaScript
Integer Image.colorAllocate(Integer red,
    Integer green,
    Integer blue);
```

调用参数:
* red: Integer, 红色分量，范围为 0-255
* green: Integer, 绿色分量，范围为 0-255
* blue: Integer, 蓝色分量，范围为 0-255

返回结果:
* Integer, 返回颜色号，不成功返回 -1

--------------------------
**为指定的颜色申请一个颜色号，对于 [gd.PALETTE](../../module/ifs/gd.md#PALETTE) 图像，颜色号为调色板索引，对于 [gd.TRUECOLOR](../../module/ifs/gd.md#TRUECOLOR) 图像，颜色号为 rgb 编码数值**

```JavaScript
Integer Image.colorAllocate(Integer color);
```

调用参数:
* color: Integer, 组合颜色值，可由 [gd.color](../../module/ifs/gd.md#color), gb.rgb, [gd.rgba](../../module/ifs/gd.md#rgba) 等函数生成

返回结果:
* Integer, 返回颜色号，不成功返回 -1

--------------------------
### colorAllocateAlpha
**为指定的颜色及透明申请一个颜色号，对于 [gd.PALETTE](../../module/ifs/gd.md#PALETTE) 图像，颜色号为调色板索引，对于 [gd.TRUECOLOR](../../module/ifs/gd.md#TRUECOLOR) 图像，颜色号为 rgba 编码数值**

```JavaScript
Integer Image.colorAllocateAlpha(Integer red,
    Integer green,
    Integer blue,
    Number alpha);
```

调用参数:
* red: Integer, 红色分量，范围为 0-255
* green: Integer, 绿色分量，范围为 0-255
* blue: Integer, 蓝色分量，范围为 0-255
* alpha: Number, 透明分量，范围为 0-1.0

返回结果:
* Integer, 返回颜色号，不成功返回 -1

--------------------------
**为指定的颜色及透明申请一个颜色号，对于 [gd.PALETTE](../../module/ifs/gd.md#PALETTE) 图像，颜色号为调色板索引，对于 [gd.TRUECOLOR](../../module/ifs/gd.md#TRUECOLOR) 图像，颜色号为 rgba 编码数值**

```JavaScript
Integer Image.colorAllocateAlpha(Integer color);
```

调用参数:
* color: Integer, 组合颜色值，可由 [gd.color](../../module/ifs/gd.md#color), gb.rgb, [gd.rgba](../../module/ifs/gd.md#rgba) 等函数生成

返回结果:
* Integer, 返回颜色号，不成功返回 -1

--------------------------
### colorClosest
**为指定的颜色查找一个最接近的颜色号，对于 [gd.PALETTE](../../module/ifs/gd.md#PALETTE) 图像，颜色号为调色板索引，对于 [gd.TRUECOLOR](../../module/ifs/gd.md#TRUECOLOR) 图像，颜色号为 rgb 编码数值**

```JavaScript
Integer Image.colorClosest(Integer red,
    Integer green,
    Integer blue);
```

调用参数:
* red: Integer, 红色分量，范围为 0-255
* green: Integer, 绿色分量，范围为 0-255
* blue: Integer, 蓝色分量，范围为 0-255

返回结果:
* Integer, 返回颜色号，不成功返回 -1

--------------------------
**为指定的颜色查找一个最接近的颜色号，对于 [gd.PALETTE](../../module/ifs/gd.md#PALETTE) 图像，颜色号为调色板索引，对于 [gd.TRUECOLOR](../../module/ifs/gd.md#TRUECOLOR) 图像，颜色号为 rgb 编码数值**

```JavaScript
Integer Image.colorClosest(Integer color);
```

调用参数:
* color: Integer, 组合颜色值，可由 [gd.color](../../module/ifs/gd.md#color), gb.rgb, [gd.rgba](../../module/ifs/gd.md#rgba) 等函数生成

返回结果:
* Integer, 返回颜色号，不成功返回 -1

--------------------------
### colorClosestHWB
**为指定的颜色查找一个最接近的颜色号，此方法使用 Hue/White/Black 计算查找最接近颜色，对于 [gd.PALETTE](../../module/ifs/gd.md#PALETTE) 图像，颜色号为调色板索引，对于 [gd.TRUECOLOR](../../module/ifs/gd.md#TRUECOLOR) 图像，颜色号为 rgb 编码数值**

```JavaScript
Integer Image.colorClosestHWB(Integer red,
    Integer green,
    Integer blue);
```

调用参数:
* red: Integer, 红色分量，范围为 0-255
* green: Integer, 绿色分量，范围为 0-255
* blue: Integer, 蓝色分量，范围为 0-255

返回结果:
* Integer, 返回颜色号，不成功返回 -1

--------------------------
**为指定的颜色查找一个最接近的颜色号，此方法使用 Hue/White/Black 计算查找最接近颜色，对于 [gd.PALETTE](../../module/ifs/gd.md#PALETTE) 图像，颜色号为调色板索引，对于 [gd.TRUECOLOR](../../module/ifs/gd.md#TRUECOLOR) 图像，颜色号为 rgb 编码数值**

```JavaScript
Integer Image.colorClosestHWB(Integer color);
```

调用参数:
* color: Integer, 组合颜色值，可由 [gd.color](../../module/ifs/gd.md#color), gb.rgb, [gd.rgba](../../module/ifs/gd.md#rgba) 等函数生成

返回结果:
* Integer, 返回颜色号，不成功返回 -1

--------------------------
### colorClosestAlpha
**为指定的颜色及透明查找一个最接近的颜色号，对于 [gd.PALETTE](../../module/ifs/gd.md#PALETTE) 图像，颜色号为调色板索引，对于 [gd.TRUECOLOR](../../module/ifs/gd.md#TRUECOLOR) 图像，颜色号为 rgba 编码数值**

```JavaScript
Integer Image.colorClosestAlpha(Integer red,
    Integer green,
    Integer blue,
    Number alpha);
```

调用参数:
* red: Integer, 红色分量，范围为 0-255
* green: Integer, 绿色分量，范围为 0-255
* blue: Integer, 蓝色分量，范围为 0-255
* alpha: Number, 透明分量，范围为 0-1.0

返回结果:
* Integer, 返回颜色号，不成功返回 -1

--------------------------
**为指定的颜色及透明查找一个最接近的颜色号，对于 [gd.PALETTE](../../module/ifs/gd.md#PALETTE) 图像，颜色号为调色板索引，对于 [gd.TRUECOLOR](../../module/ifs/gd.md#TRUECOLOR) 图像，颜色号为 rgba 编码数值**

```JavaScript
Integer Image.colorClosestAlpha(Integer color);
```

调用参数:
* color: Integer, 组合颜色值，可由 [gd.color](../../module/ifs/gd.md#color), gb.rgb, [gd.rgba](../../module/ifs/gd.md#rgba) 等函数生成

返回结果:
* Integer, 返回颜色号，不成功返回 -1

--------------------------
### colorExact
**查找指定的颜色对应的颜色号，对于 [gd.PALETTE](../../module/ifs/gd.md#PALETTE) 图像，颜色号为调色板索引，对于 [gd.TRUECOLOR](../../module/ifs/gd.md#TRUECOLOR) 图像，颜色号为 rgb 编码数值**

```JavaScript
Integer Image.colorExact(Integer red,
    Integer green,
    Integer blue);
```

调用参数:
* red: Integer, 红色分量，范围为 0-255
* green: Integer, 绿色分量，范围为 0-255
* blue: Integer, 蓝色分量，范围为 0-255

返回结果:
* Integer, 返回颜色号，不成功返回 -1

--------------------------
**查找指定的颜色对应的颜色号，对于 [gd.PALETTE](../../module/ifs/gd.md#PALETTE) 图像，颜色号为调色板索引，对于 [gd.TRUECOLOR](../../module/ifs/gd.md#TRUECOLOR) 图像，颜色号为 rgb 编码数值**

```JavaScript
Integer Image.colorExact(Integer color);
```

调用参数:
* color: Integer, 组合颜色值，可由 [gd.color](../../module/ifs/gd.md#color), gb.rgb, [gd.rgba](../../module/ifs/gd.md#rgba) 等函数生成

返回结果:
* Integer, 返回颜色号，不成功返回 -1

--------------------------
### colorExactAlpha
**查找指定的颜色及透明对应的颜色号，对于 [gd.PALETTE](../../module/ifs/gd.md#PALETTE) 图像，颜色号为调色板索引，对于 [gd.TRUECOLOR](../../module/ifs/gd.md#TRUECOLOR) 图像，颜色号为 rgba 编码数值**

```JavaScript
Integer Image.colorExactAlpha(Integer red,
    Integer green,
    Integer blue,
    Number alpha);
```

调用参数:
* red: Integer, 红色分量，范围为 0-255
* green: Integer, 绿色分量，范围为 0-255
* blue: Integer, 蓝色分量，范围为 0-255
* alpha: Number, 透明分量，范围为 0-1.0

返回结果:
* Integer, 返回颜色号，不成功返回 -1

--------------------------
**查找指定的颜色及透明对应的颜色号，对于 [gd.PALETTE](../../module/ifs/gd.md#PALETTE) 图像，颜色号为调色板索引，对于 [gd.TRUECOLOR](../../module/ifs/gd.md#TRUECOLOR) 图像，颜色号为 rgba 编码数值**

```JavaScript
Integer Image.colorExactAlpha(Integer color);
```

调用参数:
* color: Integer, 组合颜色值，可由 [gd.color](../../module/ifs/gd.md#color), gb.rgb, [gd.rgba](../../module/ifs/gd.md#rgba) 等函数生成

返回结果:
* Integer, 返回颜色号，不成功返回 -1

--------------------------
### colorResolve
**查找指定的颜色对应的颜色号，如果颜色不存在，则为其申请一个新颜色号，对于 [gd.PALETTE](../../module/ifs/gd.md#PALETTE) 图像，颜色号为调色板索引，对于 [gd.TRUECOLOR](../../module/ifs/gd.md#TRUECOLOR) 图像，颜色号为 rgb 编码数值**

```JavaScript
Integer Image.colorResolve(Integer red,
    Integer green,
    Integer blue);
```

调用参数:
* red: Integer, 红色分量，范围为 0-255
* green: Integer, 绿色分量，范围为 0-255
* blue: Integer, 蓝色分量，范围为 0-255

返回结果:
* Integer, 返回颜色号，不成功返回 -1

--------------------------
**查找指定的颜色对应的颜色号，如果颜色不存在，则为其申请一个新颜色号，对于 [gd.PALETTE](../../module/ifs/gd.md#PALETTE) 图像，颜色号为调色板索引，对于 [gd.TRUECOLOR](../../module/ifs/gd.md#TRUECOLOR) 图像，颜色号为 rgb 编码数值**

```JavaScript
Integer Image.colorResolve(Integer color);
```

调用参数:
* color: Integer, 组合颜色值，可由 [gd.color](../../module/ifs/gd.md#color), gb.rgb, [gd.rgba](../../module/ifs/gd.md#rgba) 等函数生成

返回结果:
* Integer, 返回颜色号，不成功返回 -1

--------------------------
### colorResolveAlpha
**查找指定的颜色及透明对应的颜色号，如果颜色不存在，则为其申请一个新颜色号，对于 [gd.PALETTE](../../module/ifs/gd.md#PALETTE) 图像，颜色号为调色板索引，对于 [gd.TRUECOLOR](../../module/ifs/gd.md#TRUECOLOR) 图像，颜色号为 rgba 编码数值**

```JavaScript
Integer Image.colorResolveAlpha(Integer red,
    Integer green,
    Integer blue,
    Number alpha);
```

调用参数:
* red: Integer, 红色分量，范围为 0-255
* green: Integer, 绿色分量，范围为 0-255
* blue: Integer, 蓝色分量，范围为 0-255
* alpha: Number, 透明分量，范围为 0-1.0

返回结果:
* Integer, 返回颜色号，不成功返回 -1

--------------------------
**查找指定的颜色及透明对应的颜色号，如果颜色不存在，则为其申请一个新颜色号，对于 [gd.PALETTE](../../module/ifs/gd.md#PALETTE) 图像，颜色号为调色板索引，对于 [gd.TRUECOLOR](../../module/ifs/gd.md#TRUECOLOR) 图像，颜色号为 rgba 编码数值**

```JavaScript
Integer Image.colorResolveAlpha(Integer color);
```

调用参数:
* color: Integer, 组合颜色值，可由 [gd.color](../../module/ifs/gd.md#color), gb.rgb, [gd.rgba](../../module/ifs/gd.md#rgba) 等函数生成

返回结果:
* Integer, 返回颜色号，不成功返回 -1

--------------------------
### colorDeallocate
**释放指定的颜色号，释放的颜色号将会被再次申请后替换**

```JavaScript
Image.colorDeallocate(Integer color);
```

调用参数:
* color: Integer, 指定要释放的颜色号

--------------------------
### clip
**设定绘图的剪切窗口，设定后，所有的绘制将被剪切在窗口内部**

```JavaScript
Image.clip(Integer x1,
    Integer y1,
    Integer x2,
    Integer y2);
```

调用参数:
* x1: Integer, 剪切窗口的左上 x 坐标
* y1: Integer, 剪切窗口的左上 y 坐标
* x2: Integer, 剪切窗口的右下 x 坐标
* y2: Integer, 剪切窗口的右下 y 坐标

--------------------------
### getPixel
**查询指定位置点的颜色**

```JavaScript
Integer Image.getPixel(Integer x,
    Integer y);
```

调用参数:
* x: Integer, 指定查询的 x 坐标
* y: Integer, 指定查询的 y 坐标

返回结果:
* Integer, 返回指定点的颜色号

--------------------------
### getTrueColorPixel
**查询指定位置点的真彩色颜色**

```JavaScript
Integer Image.getTrueColorPixel(Integer x,
    Integer y);
```

调用参数:
* x: Integer, 指定查询的 x 坐标
* y: Integer, 指定查询的 y 坐标

返回结果:
* Integer, 返回指定点的颜色号

--------------------------
### setPixel
**在指定位置画一个点**

```JavaScript
Image.setPixel(Integer x,
    Integer y,
    Integer color);
```

调用参数:
* x: Integer, 指定画点的 x 坐标
* y: Integer, 指定画点的 y 坐标
* color: Integer, 指定画点的颜色号

--------------------------
### setThickness
**设定画线的宽度，line, rectangle, arc 等方法画线时缺省宽度为一个像素，可使用此方法改变线的宽度**

```JavaScript
Image.setThickness(Integer thickness);
```

调用参数:
* thickness: Integer, 画线的宽度

--------------------------
### line
**在指定的位置画一条线**

```JavaScript
Image.line(Integer x1,
    Integer y1,
    Integer x2,
    Integer y2,
    Integer color);
```

调用参数:
* x1: Integer, 指定画线的起始 x 坐标
* y1: Integer, 指定画线的起始 y 坐标
* x2: Integer, 指定画线的结束 x 坐标
* y2: Integer, 指定画线的结束 y 坐标
* color: Integer, 指定画线的颜色号

--------------------------
### rectangle
**在指定的位置画一个矩形**

```JavaScript
Image.rectangle(Integer x1,
    Integer y1,
    Integer x2,
    Integer y2,
    Integer color);
```

调用参数:
* x1: Integer, 指定左上角 x 坐标
* y1: Integer, 指定左上角 y 坐标
* x2: Integer, 指定右下角 x 坐标
* y2: Integer, 指定右下角 y 坐标
* color: Integer, 指定矩形的颜色号

--------------------------
### filledRectangle
**在指定的位置画一个填充的矩形**

```JavaScript
Image.filledRectangle(Integer x1,
    Integer y1,
    Integer x2,
    Integer y2,
    Integer color);
```

调用参数:
* x1: Integer, 指定左上角 x 坐标
* y1: Integer, 指定左上角 y 坐标
* x2: Integer, 指定右下角 x 坐标
* y2: Integer, 指定右下角 y 坐标
* color: Integer, 指定矩形的颜色号

--------------------------
### polygon
**根据给定的点绘制一个多边形**

```JavaScript
Image.polygon(Array points,
    Integer color);
```

调用参数:
* points: Array, 包含多边形点的数组，如 [[1, 1], [1, 10], [10, 15], [10, 20]]
* color: Integer, 指定矩形的颜色号

--------------------------
### openPolygon
**根据给定的点绘制一个开放多边形**

```JavaScript
Image.openPolygon(Array points,
    Integer color);
```

调用参数:
* points: Array, 包含多边形点的数组，如 [[1, 1], [1, 10], [10, 15], [10, 20]]
* color: Integer, 指定矩形的颜色号

--------------------------
### filledPolygon
**根据给定的点绘制一个填充多边形**

```JavaScript
Image.filledPolygon(Array points,
    Integer color);
```

调用参数:
* points: Array, 包含多边形点的数组，如 [[1, 1], [1, 10], [10, 15], [10, 20]]
* color: Integer, 指定矩形的颜色号

--------------------------
### ellipse
**画一个椭圆**

```JavaScript
Image.ellipse(Integer x,
    Integer y,
    Integer width,
    Integer height,
    Integer color);
```

调用参数:
* x: Integer, 椭圆中心的 x 坐标
* y: Integer, 椭圆中心的 y 坐标
* width: Integer, 椭圆的宽度
* height: Integer, 椭圆的高度
* color: Integer, 指定矩形的颜色号

--------------------------
### filledEllipse
**画一个填充的椭圆**

```JavaScript
Image.filledEllipse(Integer x,
    Integer y,
    Integer width,
    Integer height,
    Integer color);
```

调用参数:
* x: Integer, 椭圆中心的 x 坐标
* y: Integer, 椭圆中心的 y 坐标
* width: Integer, 椭圆的宽度
* height: Integer, 椭圆的高度
* color: Integer, 指定矩形的颜色号

--------------------------
### arc
**画一个扇形**

```JavaScript
Image.arc(Integer x,
    Integer y,
    Integer width,
    Integer height,
    Integer start,
    Integer end,
    Integer color);
```

调用参数:
* x: Integer, 扇形中心的 x 坐标
* y: Integer, 扇形中心的 y 坐标
* width: Integer, 扇形所在椭圆的宽度
* height: Integer, 扇形所在椭圆的高度
* start: Integer, 扇形开始的角度，范围为 0-360
* end: Integer, 扇形结束的角度，范围为 0-360
* color: Integer, 指定矩形的颜色号

--------------------------
### filledArc
**画一个填充扇形**

```JavaScript
Image.filledArc(Integer x,
    Integer y,
    Integer width,
    Integer height,
    Integer start,
    Integer end,
    Integer color,
    Integer style = gd.ARC);
```

调用参数:
* x: Integer, 扇形中心的 x 坐标
* y: Integer, 扇形中心的 y 坐标
* width: Integer, 扇形所在椭圆的宽度
* height: Integer, 扇形所在椭圆的高度
* start: Integer, 扇形开始的角度，范围为 0-360
* end: Integer, 扇形结束的角度，范围为 0-360
* color: Integer, 指定矩形的颜色号
* style: Integer, 指定扇形的样式，允许的值有 [gd.ARC](../../module/ifs/gd.md#ARC), [gd.CHORD](../../module/ifs/gd.md#CHORD), [gd.NOFILL](../../module/ifs/gd.md#NOFILL), [gd.EDGED](../../module/ifs/gd.md#EDGED) 及其组合

--------------------------
### fill
**从指定的点开始填充封闭区域**

```JavaScript
Image.fill(Integer x,
    Integer y,
    Integer color);
```

调用参数:
* x: Integer, 开始填充的 x 坐标
* y: Integer, 开始填充的 y 坐标
* color: Integer, 指定填充的颜色号

--------------------------
### fillToBorder
**从指定的点开始在指定颜色的边框内填充封闭区域**

```JavaScript
Image.fillToBorder(Integer x,
    Integer y,
    Integer borderColor,
    Integer color);
```

调用参数:
* x: Integer, 开始填充的 x 坐标
* y: Integer, 开始填充的 y 坐标
* borderColor: Integer, 指定边框的颜色号
* color: Integer, 指定填充的颜色号

--------------------------
### colorReplace
**替换图像中指定的颜色为新颜色**

```JavaScript
Image.colorReplace(Integer src,
    Integer dst) async;
```

调用参数:
* src: Integer, 指定要替换的颜色
* dst: Integer, 指定新颜色

--------------------------
### clone
**复制当前图像为一个新图像**

```JavaScript
Image Image.clone() async;
```

返回结果:
* Image, 返回复制的新图像对象

--------------------------
### resample
**根据图像拉伸生成一个新尺寸的图像**

```JavaScript
Image Image.resample(Integer width,
    Integer height) async;
```

调用参数:
* width: Integer, 指定拉伸的宽度
* height: Integer, 指定拉伸的高度

返回结果:
* Image, 返回新图像对象

--------------------------
### crop
**剪切图像的一部分为一个新的图像**

```JavaScript
Image Image.crop(Integer x,
    Integer y,
    Integer width,
    Integer height) async;
```

调用参数:
* x: Integer, 剪切窗口的左上 x 坐标
* y: Integer, 剪切窗口的左上 y 坐标
* width: Integer, 剪切窗口的宽度
* height: Integer, 剪切窗口的高度

返回结果:
* Image, 返回剪切出的图像

--------------------------
### flip
**镜像当前图像**

```JavaScript
Image.flip(Integer dir = gd.HORIZONTAL) async;
```

调用参数:
* dir: Integer, 镜像方向，允许值为 [gd.BOTH](../../module/ifs/gd.md#BOTH),[gd.HORIZONTAL](../../module/ifs/gd.md#HORIZONTAL), [gd.VERTICAL](../../module/ifs/gd.md#VERTICAL), 缺省为 [gd.HORIZONTAL](../../module/ifs/gd.md#HORIZONTAL)

--------------------------
### rotate
**旋转当前图像**

```JavaScript
Image.rotate(Integer dir) async;
```

调用参数:
* dir: Integer, 旋转方向，允许值为 [gd.LEFT](../../module/ifs/gd.md#LEFT), [gd.RIGHT](../../module/ifs/gd.md#RIGHT)

--------------------------
### convert
**转换当前图像类型**

```JavaScript
Image.convert(Integer color = gd.TRUECOLOR) async;
```

调用参数:
* color: Integer, 指定图像类型，允许值为 [gd.TRUECOLOR](../../module/ifs/gd.md#TRUECOLOR) 或 [gd.PALETTE](../../module/ifs/gd.md#PALETTE)

--------------------------
### copy
**从一个图像中复制一个区域到指定的位置**

```JavaScript
Image.copy(Image source,
    Integer dstX,
    Integer dstY,
    Integer srcX,
    Integer srcY,
    Integer width,
    Integer height) async;
```

调用参数:
* source: Image, 源图像对象
* dstX: Integer, 指定复制目标的 x 坐标
* dstY: Integer, 指定复制目标的 y 坐标
* srcX: Integer, 指定复制源左上角的 x 坐标
* srcY: Integer, 指定复制源左上角的 y 坐标
* width: Integer, 指定复制的宽度
* height: Integer, 指定复制的高度

--------------------------
### copyMerge
**从一个图像中复制一个区域覆盖到指定的位置**

```JavaScript
Image.copyMerge(Image source,
    Integer dstX,
    Integer dstY,
    Integer srcX,
    Integer srcY,
    Integer width,
    Integer height,
    Integer percent) async;
```

调用参数:
* source: Image, 源图像对象
* dstX: Integer, 指定复制目标的 x 坐标
* dstY: Integer, 指定复制目标的 y 坐标
* srcX: Integer, 指定复制源左上角的 x 坐标
* srcY: Integer, 指定复制源左上角的 y 坐标
* width: Integer, 指定复制的宽度
* height: Integer, 指定复制的高度
* percent: Integer, 指定覆盖的透明度

--------------------------
### copyMergeGray
**从一个图像中复制一个区域的灰度覆盖到指定的位置**

```JavaScript
Image.copyMergeGray(Image source,
    Integer dstX,
    Integer dstY,
    Integer srcX,
    Integer srcY,
    Integer width,
    Integer height,
    Integer percent) async;
```

调用参数:
* source: Image, 源图像对象
* dstX: Integer, 指定复制目标的 x 坐标
* dstY: Integer, 指定复制目标的 y 坐标
* srcX: Integer, 指定复制源左上角的 x 坐标
* srcY: Integer, 指定复制源左上角的 y 坐标
* width: Integer, 指定复制的宽度
* height: Integer, 指定复制的高度
* percent: Integer, 指定覆盖的透明度

--------------------------
### copyResized
**将一个图像中的一个区域拉伸后复制到指定的位置**

```JavaScript
Image.copyResized(Image source,
    Integer dstX,
    Integer dstY,
    Integer srcX,
    Integer srcY,
    Integer dstW,
    Integer dstH,
    Integer srcW,
    Integer srcH) async;
```

调用参数:
* source: Image, 源图像对象
* dstX: Integer, 指定复制目标的 x 坐标
* dstY: Integer, 指定复制目标的 y 坐标
* srcX: Integer, 指定复制源左上角的 x 坐标
* srcY: Integer, 指定复制源左上角的 y 坐标
* dstW: Integer, 指定复制的拉伸宽度
* dstH: Integer, 指定复制的拉伸高度
* srcW: Integer, 指定复制的源宽度
* srcH: Integer, 指定复制的源高度

--------------------------
### copyResampled
**将一个图像中的一个区域拉伸后复制到指定的位置，不同与 copyResized，此方法拉伸时会对图像进行抖动**

```JavaScript
Image.copyResampled(Image source,
    Integer dstX,
    Integer dstY,
    Integer srcX,
    Integer srcY,
    Integer dstW,
    Integer dstH,
    Integer srcW,
    Integer srcH) async;
```

调用参数:
* source: Image, 源图像对象
* dstX: Integer, 指定复制目标的 x 坐标
* dstY: Integer, 指定复制目标的 y 坐标
* srcX: Integer, 指定复制源左上角的 x 坐标
* srcY: Integer, 指定复制源左上角的 y 坐标
* dstW: Integer, 指定复制的拉伸宽度
* dstH: Integer, 指定复制的拉伸高度
* srcW: Integer, 指定复制的源宽度
* srcH: Integer, 指定复制的源高度

--------------------------
### copyRotated
**将一个图像中的一个区域旋转后复制到指定的位置**

```JavaScript
Image.copyRotated(Image source,
    Number dstX,
    Number dstY,
    Integer srcX,
    Integer srcY,
    Integer width,
    Integer height,
    Number angle) async;
```

调用参数:
* source: Image, 源图像对象
* dstX: Number, 指定复制目标的 x 坐标
* dstY: Number, 指定复制目标的 y 坐标
* srcX: Integer, 指定复制源左上角的 x 坐标
* srcY: Integer, 指定复制源左上角的 y 坐标
* width: Integer, 指定复制的宽度
* height: Integer, 指定复制的高度
* angle: Number, 指定旋转的角度

--------------------------
### filter
**把过滤器 filterType应用到图像上，根据过滤器类型传入所需参数**

```JavaScript
Image.filter(Integer filterType,
    Number arg1 = 0,
    Number arg2 = 0,
    Number arg3 = 0,
    Number arg4 = 0) async;
```

调用参数:
* filterType: Integer, 过滤器类型
* arg1: Number, 过滤器所需参数: SMOOTH 的平滑级别、BRIGHTNESS 的亮度级别、CONTRAST 的对比度级别、COLORIZE 的 red 分值
* arg2: Number, 过滤器所需参数: COLORIZE 的 green 分值
* arg3: Number, 过滤器所需参数: COLORIZE 的 blue 分值
* arg4: Number, 过滤器所需参数: COLORIZE 的透明度 alpha 分值

参数 filterType 可以为以下数值：
- MEAN_REMOVAL,    用平均移除法来达到轮廓效果
- EDGEDETECT,      用边缘检测来突出图像的边缘
- EMBOSS,          使图像浮雕化
- SELECTIVE_BLUR,  模糊图像
- GAUSSIAN_BLUR,   用高斯算法模糊图像
- NEGATE,          将图像中所有颜色反转
- GRAYSCALE,       将图像转换为灰度图
- SMOOTH,          使图像更柔滑，用arg1设定柔滑级别
- BRIGHTNESS,      改变图像的亮度，用arg1设定亮度级别，取值范围是-255~255
- CONTRAST,        改变图像的对比度，用arg1设定对比度级别，取值范围是0~100
- COLORIZE,        改变图像的色调，用arg1、arg2、arg3分别指定red、blue、green分值，每种颜色范围是0~255，arg4为透明度，取值返回是0~127

--------------------------
### affine
**根据给定的矩阵，对当前图像进行仿射**

```JavaScript
Image Image.affine(Array affine,
    Integer x = -1,
    Integer y = -1,
    Integer width = -1,
    Integer height = -1) async;
```

调用参数:
* affine: Array, 仿射矩阵，由  6 个 double 类型的数字组成
* x: Integer, 可选剪切区域的原点 x 坐标
* y: Integer, 可选剪切区域的原点 y 坐标
* width: Integer, 可选剪切区域的的宽度
* height: Integer, 可选剪切区域的的高度

返回结果:
* Image, 返回仿射后的图像

参数 affine 是一个数组：

```JavaScript
affine = [a0, a1, b0, b1, a2, b2];
x ' = a0x + a1y + a2;
y ' = b0x + b1y + b2;
```

--------------------------
### gaussianBlur
**对当前图像进行高斯模糊处理**

```JavaScript
Image.gaussianBlur(Integer radius) async;
```

调用参数:
* radius: Integer, 模糊半径

--------------------------
### toString
**返回对象的字符串表示，一般返回 "[Native Object]"，对象可以根据自己的特性重新实现**

```JavaScript
String Image.toString();
```

返回结果:
* String, 返回对象的字符串表示

--------------------------
### toJSON
**返回对象的 JSON 格式表示，一般返回对象定义的可读属性集合**

```JavaScript
Value Image.toJSON(String key = "");
```

调用参数:
* key: String, 未使用

返回结果:
* Value, 返回包含可 JSON 序列化的值

