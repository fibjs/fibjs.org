# 模块 module
基础模块管理

## 静态函数
        
### createRequire
**创建一个模块引用函数**

```JavaScript
static Function module.createRequire(String base);
```

调用参数:
* base: String, 模块的基础路径

返回结果:
* Function, 返回一个模块引用函数

--------------------------
### enableCompileCache
**启用模块编译缓存**

```JavaScript
static Object module.enableCompileCache(String cacheDir = "");
```

调用参数:
* cacheDir: String, 缓存目录路径，可选

返回结果:
* Object, 返回包含 status 和 message 的对象，status 为 2 表示不支持

在 fibjs 中为空操作，用于将 V8 编译字节码缓存到磁盘以加快后续启动速度。

## 静态属性
        
### builtinModules
**Array, 内建模块名称列表**

```JavaScript
static readonly Array module.builtinModules;
```

内建模块名称列表。包含了所有的 fibjs 内建模块名称，以及带 node: 前缀的版本。

