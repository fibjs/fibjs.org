# 对象 Image
图像处理对象，用以对图像进行转换，绘制，存储等操作

Image 对象属于 gd 模块，创建：
@code
var img = gd.create(640, 480);
var img1 = gd.load(data);
@endcode
## 函数
        
### getData
按照指定的格式返回图像数据
```JavaScript
Buffer Image.getData(Integer format = undefined,
                Integer quality = 85);
```

**调用参数:**
* format - 指定返回数据的格式，允许值为 gd.PNG, gd.JPEG, gd.GIF, gd.BMP, gd.WEBP, 缺省为 gd.PNG
* quality - 当格式为 gd.JPEG 或 gd.WEBP 时用于指定压缩质量，缺省为 85，其他格式忽略此参数

**返回结果:**
* 返回格式化的数据

### save
按照指定的格式将图像数据存入流对象
```JavaScript
Image.save(Stream stm,
                Integer format = undefined,
                Integer quality = 85);
```

**调用参数:**
* stm - 指定要存入的流对象
* format - 指定返回数据的格式，允许值为 gd.PNG, gd.JPEG, gd.GIF, gd.BMP, gd.WEBP, 缺省为 gd.PNG
* quality - 当格式为 gd.JPEG 或 gd.WEBP 时用于指定压缩质量，缺省为 85，其他格式忽略此参数

### save
按照指定的格式将图像数据存入指定文件，文件将被强制覆盖
```JavaScript
Image.save(String fname,
                Integer format = undefined,
                Integer quality = 85);
```

**调用参数:**
* fname - 指定文件名
* format - 指定返回数据的格式，允许值为 gd.PNG, gd.JPEG, gd.GIF, gd.BMP, gd.WEBP, 缺省为 gd.PNG
* quality - 当格式为 gd.JPEG 时用于指定压缩质量，缺省为 85，其他格式忽略此参数

### colorAllocate
为指定的颜色申请一个颜色号，对于 gd.PALETTE 图像，颜色号为调色板索引，对于 gd.TRUECOLOR 图像，颜色号为 rgb 编码数值
```JavaScript
Integer Image.colorAllocate(Integer red,
                Integer green,
                Integer blue);
```

**调用参数:**
* red - 红色分量，范围为 0-255
* green - 绿色分量，范围为 0-255
* blue - 蓝色分量，范围为 0-255

**返回结果:**
* 返回颜色号，不成功返回 -1

### colorAllocate
为指定的颜色申请一个颜色号，对于 gd.PALETTE 图像，颜色号为调色板索引，对于 gd.TRUECOLOR 图像，颜色号为 rgb 编码数值
```JavaScript
Integer Image.colorAllocate(Integer color);
```

**调用参数:**
* color - 组合颜色值，可由 gd.color, gb.rgb, gd.rgba 等函数生成

**返回结果:**
* 返回颜色号，不成功返回 -1

### colorAllocateAlpha
为指定的颜色及透明申请一个颜色号，对于 gd.PALETTE 图像，颜色号为调色板索引，对于 gd.TRUECOLOR 图像，颜色号为 rgba 编码数值
```JavaScript
Integer Image.colorAllocateAlpha(Integer red,
                Integer green,
                Integer blue,
                Number alpha);
```

**调用参数:**
* red - 红色分量，范围为 0-255
* green - 绿色分量，范围为 0-255
* blue - 蓝色分量，范围为 0-255
* alpha - 透明分量，范围为 0-1.0

**返回结果:**
* 返回颜色号，不成功返回 -1

### colorAllocateAlpha
为指定的颜色及透明申请一个颜色号，对于 gd.PALETTE 图像，颜色号为调色板索引，对于 gd.TRUECOLOR 图像，颜色号为 rgba 编码数值
```JavaScript
Integer Image.colorAllocateAlpha(Integer color);
```

**调用参数:**
* color - 组合颜色值，可由 gd.color, gb.rgb, gd.rgba 等函数生成

**返回结果:**
* 返回颜色号，不成功返回 -1

### colorClosest
为指定的颜色查找一个最接近的颜色号，对于 gd.PALETTE 图像，颜色号为调色板索引，对于 gd.TRUECOLOR 图像，颜色号为 rgb 编码数值
```JavaScript
Integer Image.colorClosest(Integer red,
                Integer green,
                Integer blue);
```

**调用参数:**
* red - 红色分量，范围为 0-255
* green - 绿色分量，范围为 0-255
* blue - 蓝色分量，范围为 0-255

**返回结果:**
* 返回颜色号，不成功返回 -1

### colorClosest
为指定的颜色查找一个最接近的颜色号，对于 gd.PALETTE 图像，颜色号为调色板索引，对于 gd.TRUECOLOR 图像，颜色号为 rgb 编码数值
```JavaScript
Integer Image.colorClosest(Integer color);
```

**调用参数:**
* color - 组合颜色值，可由 gd.color, gb.rgb, gd.rgba 等函数生成

**返回结果:**
* 返回颜色号，不成功返回 -1

### colorClosestHWB
为指定的颜色查找一个最接近的颜色号，此方法使用 Hue/White/Black 计算查找最接近颜色，对于 gd.PALETTE 图像，颜色号为调色板索引，对于 gd.TRUECOLOR 图像，颜色号为 rgb 编码数值
```JavaScript
Integer Image.colorClosestHWB(Integer red,
                Integer green,
                Integer blue);
```

**调用参数:**
* red - 红色分量，范围为 0-255
* green - 绿色分量，范围为 0-255
* blue - 蓝色分量，范围为 0-255

**返回结果:**
* 返回颜色号，不成功返回 -1

### colorClosestHWB
为指定的颜色查找一个最接近的颜色号，此方法使用 Hue/White/Black 计算查找最接近颜色，对于 gd.PALETTE 图像，颜色号为调色板索引，对于 gd.TRUECOLOR 图像，颜色号为 rgb 编码数值
```JavaScript
Integer Image.colorClosestHWB(Integer color);
```

**调用参数:**
* color - 组合颜色值，可由 gd.color, gb.rgb, gd.rgba 等函数生成

**返回结果:**
* 返回颜色号，不成功返回 -1

### colorClosestAlpha
为指定的颜色及透明查找一个最接近的颜色号，对于 gd.PALETTE 图像，颜色号为调色板索引，对于 gd.TRUECOLOR 图像，颜色号为 rgba 编码数值
```JavaScript
Integer Image.colorClosestAlpha(Integer red,
                Integer green,
                Integer blue,
                Number alpha);
```

**调用参数:**
* red - 红色分量，范围为 0-255
* green - 绿色分量，范围为 0-255
* blue - 蓝色分量，范围为 0-255
* alpha - 透明分量，范围为 0-1.0

**返回结果:**
* 返回颜色号，不成功返回 -1

### colorClosestAlpha
为指定的颜色及透明查找一个最接近的颜色号，对于 gd.PALETTE 图像，颜色号为调色板索引，对于 gd.TRUECOLOR 图像，颜色号为 rgba 编码数值
```JavaScript
Integer Image.colorClosestAlpha(Integer color);
```

**调用参数:**
* color - 组合颜色值，可由 gd.color, gb.rgb, gd.rgba 等函数生成

**返回结果:**
* 返回颜色号，不成功返回 -1

### colorExact
查找指定的颜色对应的颜色号，对于 gd.PALETTE 图像，颜色号为调色板索引，对于 gd.TRUECOLOR 图像，颜色号为 rgb 编码数值
```JavaScript
Integer Image.colorExact(Integer red,
                Integer green,
                Integer blue);
```

**调用参数:**
* red - 红色分量，范围为 0-255
* green - 绿色分量，范围为 0-255
* blue - 蓝色分量，范围为 0-255

**返回结果:**
* 返回颜色号，不成功返回 -1

### colorExact
查找指定的颜色对应的颜色号，对于 gd.PALETTE 图像，颜色号为调色板索引，对于 gd.TRUECOLOR 图像，颜色号为 rgb 编码数值
```JavaScript
Integer Image.colorExact(Integer color);
```

**调用参数:**
* color - 组合颜色值，可由 gd.color, gb.rgb, gd.rgba 等函数生成

**返回结果:**
* 返回颜色号，不成功返回 -1

### colorExactAlpha
查找指定的颜色及透明对应的颜色号，对于 gd.PALETTE 图像，颜色号为调色板索引，对于 gd.TRUECOLOR 图像，颜色号为 rgba 编码数值
```JavaScript
Integer Image.colorExactAlpha(Integer red,
                Integer green,
                Integer blue,
                Number alpha);
```

**调用参数:**
* red - 红色分量，范围为 0-255
* green - 绿色分量，范围为 0-255
* blue - 蓝色分量，范围为 0-255
* alpha - 透明分量，范围为 0-1.0

**返回结果:**
* 返回颜色号，不成功返回 -1

### colorExactAlpha
查找指定的颜色及透明对应的颜色号，对于 gd.PALETTE 图像，颜色号为调色板索引，对于 gd.TRUECOLOR 图像，颜色号为 rgba 编码数值
```JavaScript
Integer Image.colorExactAlpha(Integer color);
```

**调用参数:**
* color - 组合颜色值，可由 gd.color, gb.rgb, gd.rgba 等函数生成

**返回结果:**
* 返回颜色号，不成功返回 -1

### colorResolve
查找指定的颜色对应的颜色号，如果颜色不存在，则为其申请一个新颜色号，对于 gd.PALETTE 图像，颜色号为调色板索引，对于 gd.TRUECOLOR 图像，颜色号为 rgb 编码数值
```JavaScript
Integer Image.colorResolve(Integer red,
                Integer green,
                Integer blue);
```

**调用参数:**
* red - 红色分量，范围为 0-255
* green - 绿色分量，范围为 0-255
* blue - 蓝色分量，范围为 0-255

**返回结果:**
* 返回颜色号，不成功返回 -1

### colorResolve
查找指定的颜色对应的颜色号，如果颜色不存在，则为其申请一个新颜色号，对于 gd.PALETTE 图像，颜色号为调色板索引，对于 gd.TRUECOLOR 图像，颜色号为 rgb 编码数值
```JavaScript
Integer Image.colorResolve(Integer color);
```

**调用参数:**
* color - 组合颜色值，可由 gd.color, gb.rgb, gd.rgba 等函数生成

**返回结果:**
* 返回颜色号，不成功返回 -1

### colorResolveAlpha
查找指定的颜色及透明对应的颜色号，如果颜色不存在，则为其申请一个新颜色号，对于 gd.PALETTE 图像，颜色号为调色板索引，对于 gd.TRUECOLOR 图像，颜色号为 rgba 编码数值
```JavaScript
Integer Image.colorResolveAlpha(Integer red,
                Integer green,
                Integer blue,
                Number alpha);
```

**调用参数:**
* red - 红色分量，范围为 0-255
* green - 绿色分量，范围为 0-255
* blue - 蓝色分量，范围为 0-255
* alpha - 透明分量，范围为 0-1.0

**返回结果:**
* 返回颜色号，不成功返回 -1

### colorResolveAlpha
查找指定的颜色及透明对应的颜色号，如果颜色不存在，则为其申请一个新颜色号，对于 gd.PALETTE 图像，颜色号为调色板索引，对于 gd.TRUECOLOR 图像，颜色号为 rgba 编码数值
```JavaScript
Integer Image.colorResolveAlpha(Integer color);
```

**调用参数:**
* color - 组合颜色值，可由 gd.color, gb.rgb, gd.rgba 等函数生成

**返回结果:**
* 返回颜色号，不成功返回 -1

### colorDeallocate
释放指定的颜色号，释放的颜色号将会被再次申请后替换
```JavaScript
Image.colorDeallocate(Integer color);
```

**调用参数:**
* color - 指定要释放的颜色号

### clip
设定绘图的剪切窗口，设定后，所有的绘制将被剪切在窗口内部
```JavaScript
Image.clip(Integer x1,
                Integer y1,
                Integer x2,
                Integer y2);
```

**调用参数:**
* x1 - 剪切窗口的左上 x 坐标
* y1 - 剪切窗口的左上 y 坐标
* x2 - 剪切窗口的右下 x 坐标
* y2 - 剪切窗口的右下 y 坐标

### getPixel
查询指定位置点的颜色
```JavaScript
Integer Image.getPixel(Integer x,
                Integer y);
```

**调用参数:**
* x - 指定查询的 x 坐标
* y - 指定查询的 y 坐标

**返回结果:**
* 返回指定点的颜色号

### getTrueColorPixel
查询指定位置点的真彩色颜色
```JavaScript
Integer Image.getTrueColorPixel(Integer x,
                Integer y);
```

**调用参数:**
* x - 指定查询的 x 坐标
* y - 指定查询的 y 坐标

**返回结果:**
* 返回指定点的颜色号

### setPixel
在指定位置画一个点
```JavaScript
Image.setPixel(Integer x,
                Integer y,
                Integer color);
```

**调用参数:**
* x - 指定画点的 x 坐标
* y - 指定画点的 y 坐标
* color - 指定画点的颜色号

### setThickness
设定画线的宽度，line, rectangle, arc 等方法画线时缺省宽度为一个像素，可使用此方法改变线的宽度
```JavaScript
Image.setThickness(Integer thickness);
```

**调用参数:**
* thickness - 画线的宽度

### line
在指定的位置画一条线
```JavaScript
Image.line(Integer x1,
                Integer y1,
                Integer x2,
                Integer y2,
                Integer color);
```

**调用参数:**
* x1 - 指定画线的起始 x 坐标
* y1 - 指定画线的起始 y 坐标
* x2 - 指定画线的结束 x 坐标
* y2 - 指定画线的结束 y 坐标
* color - 指定画线的颜色号

### rectangle
在指定的位置画一个矩形
```JavaScript
Image.rectangle(Integer x1,
                Integer y1,
                Integer x2,
                Integer y2,
                Integer color);
```

**调用参数:**
* x1 - 指定左上角 x 坐标
* y1 - 指定左上角 y 坐标
* x2 - 指定右下角 x 坐标
* y2 - 指定右下角 y 坐标
* color - 指定矩形的颜色号

### filledRectangle
在指定的位置画一个填充的矩形
```JavaScript
Image.filledRectangle(Integer x1,
                Integer y1,
                Integer x2,
                Integer y2,
                Integer color);
```

**调用参数:**
* x1 - 指定左上角 x 坐标
* y1 - 指定左上角 y 坐标
* x2 - 指定右下角 x 坐标
* y2 - 指定右下角 y 坐标
* color - 指定矩形的颜色号

### polygon
根据给定的点绘制一个多边形
```JavaScript
Image.polygon(Array points,
                Integer color);
```

**调用参数:**
* points - 包含多边形点的数组，如 [[1, 1], [1, 10], [10, 15], [10, 20]]
* color - 指定矩形的颜色号

### openPolygon
根据给定的点绘制一个开放多边形
```JavaScript
Image.openPolygon(Array points,
                Integer color);
```

**调用参数:**
* points - 包含多边形点的数组，如 [[1, 1], [1, 10], [10, 15], [10, 20]]
* color - 指定矩形的颜色号

### filledPolygon
根据给定的点绘制一个填充多边形
```JavaScript
Image.filledPolygon(Array points,
                Integer color);
```

**调用参数:**
* points - 包含多边形点的数组，如 [[1, 1], [1, 10], [10, 15], [10, 20]]
* color - 指定矩形的颜色号

### ellipse
画一个椭圆
```JavaScript
Image.ellipse(Integer x,
                Integer y,
                Integer width,
                Integer height,
                Integer color);
```

**调用参数:**
* x - 椭圆中心的 x 坐标
* y - 椭圆中心的 y 坐标
* width - 椭圆的宽度
* height - 椭圆的高度
* color - 指定矩形的颜色号

### filledEllipse
画一个填充的椭圆
```JavaScript
Image.filledEllipse(Integer x,
                Integer y,
                Integer width,
                Integer height,
                Integer color);
```

**调用参数:**
* x - 椭圆中心的 x 坐标
* y - 椭圆中心的 y 坐标
* width - 椭圆的宽度
* height - 椭圆的高度
* color - 指定矩形的颜色号

### arc
画一个扇形
```JavaScript
Image.arc(Integer x,
                Integer y,
                Integer width,
                Integer height,
                Integer start,
                Integer end,
                Integer color);
```

**调用参数:**
* x - 扇形中心的 x 坐标
* y - 扇形中心的 y 坐标
* width - 扇形所在椭圆的宽度
* height - 扇形所在椭圆的高度
* start - 扇形开始的角度，范围为 0-360
* end - 扇形结束的角度，范围为 0-360
* color - 指定矩形的颜色号

### filledArc
画一个填充扇形
```JavaScript
Image.filledArc(Integer x,
                Integer y,
                Integer width,
                Integer height,
                Integer start,
                Integer end,
                Integer color,
                Integer style = undefined);
```

**调用参数:**
* x - 扇形中心的 x 坐标
* y - 扇形中心的 y 坐标
* width - 扇形所在椭圆的宽度
* height - 扇形所在椭圆的高度
* start - 扇形开始的角度，范围为 0-360
* end - 扇形结束的角度，范围为 0-360
* color - 指定矩形的颜色号
* style - 指定扇形的样式，允许的值有 gd.ARC, gd.CHORD, gd.NOFILL, gd.EDGED 及其组合

### fill
从指定的点开始填充封闭区域
```JavaScript
Image.fill(Integer x,
                Integer y,
                Integer color);
```

**调用参数:**
* x - 开始填充的 x 坐标
* y - 开始填充的 y 坐标
* color - 指定填充的颜色号

### fillToBorder
从指定的点开始在指定颜色的边框内填充封闭区域
```JavaScript
Image.fillToBorder(Integer x,
                Integer y,
                Integer borderColor,
                Integer color);
```

**调用参数:**
* x - 开始填充的 x 坐标
* y - 开始填充的 y 坐标
* borderColor - 指定边框的颜色号
* color - 指定填充的颜色号

### colorReplace
替换图像中指定的颜色为新颜色
```JavaScript
Image.colorReplace(Integer src,
                Integer dst);
```

**调用参数:**
* src - 指定要替换的颜色
* dst - 指定新颜色

### clone
复制当前图像为一个新图像
```JavaScript
Image Image.clone();
```

**返回结果:**
* 返回复制的新图像对象

### resample
根据图像拉伸生成一个新尺寸的图像
```JavaScript
Image Image.resample(Integer width,
                Integer height);
```

**调用参数:**
* width - 指定拉伸的宽度
* height - 指定拉伸的高度

**返回结果:**
* 返回新图像对象

### crop
剪切图像的一部分为一个新的图像
```JavaScript
Image Image.crop(Integer x,
                Integer y,
                Integer width,
                Integer height);
```

**调用参数:**
* x - 剪切窗口的左上 x 坐标
* y - 剪切窗口的左上 y 坐标
* width - 剪切窗口的宽度
* height - 剪切窗口的高度

**返回结果:**
* 返回剪切出的图像

### flip
镜像当前图像
```JavaScript
Image.flip(Integer dir = undefined);
```

**调用参数:**
* dir - 镜像方向，允许值为 gd.BOTH,gd.HORIZONTAL, gd.VERTICAL, 缺省为 gd.HORIZONTAL

### rotate
旋转当前图像
```JavaScript
Image.rotate(Integer dir);
```

**调用参数:**
* dir - 旋转方向，允许值为 gd.LEFT, gd.RIGHT

### convert
转换当前图像类型
```JavaScript
Image.convert(Integer color = undefined);
```

**调用参数:**
* color - 指定图像类型，允许值为 gd.TRUECOLOR 或 gd.PALETTE

### copy
从一个图像中复制一个区域到指定的位置
```JavaScript
Image.copy(Image source,
                Integer dstX,
                Integer dstY,
                Integer srcX,
                Integer srcY,
                Integer width,
                Integer height);
```

**调用参数:**
* source - 源图像对象
* dstX - 指定复制目标的 x 坐标
* dstY - 指定复制目标的 y 坐标
* srcX - 指定复制源左上角的 x 坐标
* srcY - 指定复制源左上角的 y 坐标
* width - 指定复制的宽度
* height - 指定复制的高度

### copyMerge
从一个图像中复制一个区域覆盖到指定的位置
```JavaScript
Image.copyMerge(Image source,
                Integer dstX,
                Integer dstY,
                Integer srcX,
                Integer srcY,
                Integer width,
                Integer height,
                Integer percent);
```

**调用参数:**
* source - 源图像对象
* dstX - 指定复制目标的 x 坐标
* dstY - 指定复制目标的 y 坐标
* srcX - 指定复制源左上角的 x 坐标
* srcY - 指定复制源左上角的 y 坐标
* width - 指定复制的宽度
* height - 指定复制的高度
* percent - 指定覆盖的透明度

### copyMergeGray
从一个图像中复制一个区域的灰度覆盖到指定的位置
```JavaScript
Image.copyMergeGray(Image source,
                Integer dstX,
                Integer dstY,
                Integer srcX,
                Integer srcY,
                Integer width,
                Integer height,
                Integer percent);
```

**调用参数:**
* source - 源图像对象
* dstX - 指定复制目标的 x 坐标
* dstY - 指定复制目标的 y 坐标
* srcX - 指定复制源左上角的 x 坐标
* srcY - 指定复制源左上角的 y 坐标
* width - 指定复制的宽度
* height - 指定复制的高度
* percent - 指定覆盖的透明度

### copyResized
将一个图像中的一个区域拉伸后复制到指定的位置
```JavaScript
Image.copyResized(Image source,
                Integer dstX,
                Integer dstY,
                Integer srcX,
                Integer srcY,
                Integer dstW,
                Integer dstH,
                Integer srcW,
                Integer srcH);
```

**调用参数:**
* source - 源图像对象
* dstX - 指定复制目标的 x 坐标
* dstY - 指定复制目标的 y 坐标
* srcX - 指定复制源左上角的 x 坐标
* srcY - 指定复制源左上角的 y 坐标
* dstW - 指定复制的拉伸宽度
* dstH - 指定复制的拉伸高度
* srcW - 指定复制的源宽度
* srcH - 指定复制的源高度

### copyResampled
将一个图像中的一个区域拉伸后复制到指定的位置，不同与 copyResized，此方法拉伸时会对图像进行抖动
```JavaScript
Image.copyResampled(Image source,
                Integer dstX,
                Integer dstY,
                Integer srcX,
                Integer srcY,
                Integer dstW,
                Integer dstH,
                Integer srcW,
                Integer srcH);
```

**调用参数:**
* source - 源图像对象
* dstX - 指定复制目标的 x 坐标
* dstY - 指定复制目标的 y 坐标
* srcX - 指定复制源左上角的 x 坐标
* srcY - 指定复制源左上角的 y 坐标
* dstW - 指定复制的拉伸宽度
* dstH - 指定复制的拉伸高度
* srcW - 指定复制的源宽度
* srcH - 指定复制的源高度

### copyRotated
将一个图像中的一个区域旋转后复制到指定的位置
```JavaScript
Image.copyRotated(Image source,
                Number dstX,
                Number dstY,
                Integer srcX,
                Integer srcY,
                Integer width,
                Integer height,
                Number angle);
```

**调用参数:**
* source - 源图像对象
* dstX - 指定复制目标的 x 坐标
* dstY - 指定复制目标的 y 坐标
* srcX - 指定复制源左上角的 x 坐标
* srcY - 指定复制源左上角的 y 坐标
* width - 指定复制的宽度
* height - 指定复制的高度
* angle - 指定旋转的角度

### filter
把过滤器 filterType应用到图像上，根据过滤器类型传入所需参数
```JavaScript
Image.filter(Integer filterType,
                Number arg1 = 0,
                Number arg2 = 0,
                Number arg3 = 0,
                Number arg4 = 0);
```

**调用参数:**
* filterType - 过滤器类型
* arg1 - 过滤器所需参数: SMOOTH 的平滑级别、BRIGHTNESS 的亮度级别、CONTRAST 的对比度级别、COLORIZE 的 red 分值
* arg2 - 过滤器所需参数: COLORIZE 的 green 分值
* arg3 - 过滤器所需参数: COLORIZE 的 blue 分值
* arg4 - 过滤器所需参数: COLORIZE 的透明度 alpha 分值

### affine
根据给定的矩阵，对当前图像进行仿射
```JavaScript
Image Image.affine(Array affine,
                Integer x = -1,
                Integer y = -1,
                Integer width = -1,
                Integer height = -1);
```

**调用参数:**
* affine - 仿射矩阵，由6个double类型的数字组成
* x - 可选剪切区域的原点 x 坐标
* y - 可选剪切区域的原点 y 坐标
* width - 可选剪切区域的的宽度
* height - 可选剪切区域的的高度

**返回结果:**
* 返回仿射后的图像

### gaussianBlur
对当前图像进行高斯模糊处理
```JavaScript
Image.gaussianBlur(Integer radius);
```

**调用参数:**
* radius - 模糊半径

### dispose
强制回收对象，调用此方法后，对象资源将立即释放
```JavaScript
Image.dispose();
```

### equals
比较当前对象与给定的对象是否相等
```JavaScript
Boolean Image.equals(object expected);
```

**调用参数:**
* expected - 制定比较的目标对象

**返回结果:**
* 返回对象比较的结果

### toString
返回对象的字符串表示，一般返回 &#34;[Native Object]&#34;，对象可以根据自己的特性重新实现
```JavaScript
String Image.toString();
```

**返回结果:**
* 返回对象的字符串表示

### toJSON
返回对象的 JSON 格式表示，一般返回对象定义的可读属性集合
```JavaScript
Value Image.toJSON(String key = "");
```

**调用参数:**
* key - 未使用

**返回结果:**
* 返回包含可 JSON 序列化的值

### valueOf
返回对象本身的数值
```JavaScript
Value Image.valueOf();
```

**返回结果:**
* 返回对象本身的数值

## 属性
        
### width
查询图像宽度
```JavaScript
readonly Integer Image.width;
```

### height
查询图像高度
```JavaScript
readonly Integer Image.height;
```

### format
查询图像来源格式，结果为 gd.PNG, gd.JPEG, gd.GIF, gd.BMP, gd.WEBP
```JavaScript
readonly Integer Image.format;
```

### type
查询图像类型，结果为 gd.TRUECOLOR, gd.PALETTE
```JavaScript
readonly Integer Image.type;
```

### colorsTotal
查询图像颜色表内的颜色总数
```JavaScript
readonly Integer Image.colorsTotal;
```

### transparent
查询和设定指定的颜色为透明色
```JavaScript
Integer Image.transparent;
```

### progressive
查询和设定图像是否渐进式，仅支持 jpeg 格式时
```JavaScript
Boolean Image.progressive;
```

### alphaBlending
查询和设定绘图时是否计算 alpha 层，缺省为 true
```JavaScript
Boolean Image.alphaBlending;
```

