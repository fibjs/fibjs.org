# 模块 mime
MIME 解析模块

## 静态函数
        
### getType
**根据提供的文件名解析对应的 MIME 类型**

```JavaScript
static String mime.getType(String fname);
```

调用参数:
* fname: String, 指定要解析的文件名

返回结果:
* String, 返回解析出的 MIME 类型

--------------------------
### addType
**添加 MIME 类型**

```JavaScript
static mime.addType(String ext,
    String type);
```

调用参数:
* ext: String, 指定的扩展名
* type: String, 指定的 MIME 类型

