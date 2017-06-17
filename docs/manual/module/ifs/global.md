# 模块 global
全局对象，所有脚本均可以访问的基础对象

## 函数
        
### run
运行一个脚本
```JavaScript
global.run(String fname,
                Array argv = []);
```

**调用参数:**
* fname - 指定要运行的脚本路径
* argv - 指定要运行的参数，此参数可在脚本内使用 argv 获取

### clearInterval
清除指定的定时器
```JavaScript
global.clearInterval(Timer t);
```

**调用参数:**
* t - 指定要清除的定时器

### clearTimeout
清除指定的定时器
```JavaScript
global.clearTimeout(Timer t);
```

**调用参数:**
* t - 指定要清除的定时器

### clearImmediate
清除指定的定时器
```JavaScript
global.clearImmediate(Timer t);
```

**调用参数:**
* t - 指定要清除的定时器

### setInterval
每间隔指定的时间后调用函数
```JavaScript
Timer global.setInterval(Function callback,
                Integer timeout);
```

**调用参数:**
* callback - 指定回调函数
* timeout - 指定间隔的时间，以毫秒为单位

**返回结果:**
* 返回定时器对象

### setTimeout
在指定的时间后调用函数
```JavaScript
Timer global.setTimeout(Function callback,
                Integer timeout);
```

**调用参数:**
* callback - 指定回调函数
* timeout - 指定延时的时间，以毫秒为单位

**返回结果:**
* 返回定时器对象

### setImmediate
下一个空闲时间立即执行回调函数
```JavaScript
Timer global.setImmediate(Function callback);
```

**调用参数:**
* callback - 指定回调函数

**返回结果:**
* 返回定时器对象

### require
加载一个模块并返回模块对象，更多信息参阅 @ref module
```JavaScript
Value global.require(String id);
```

**调用参数:**
* id - 指定要加载的模块名称

**返回结果:**
* 返回加载模块的引出对象

require 可用于加载基础模块，文件模块。

基础模块是沙箱创建时初始化的模块，引用时只需传递相应的 id，比如 require(&#34;net&#34;)。

文件模块是用户自定义模块，引用时需传递以 ./ 或 ../ 开头的相对路径。文件模块支持 .js 和 .json 文件。

文件模块也支持 package.json 格式，当模块为目录结构时，require 会先查询 package.json 中的 main，未发现则尝试加载路径下的 index.js 或 index.json。

若引用路径不是 ./ 或 ../ 开头，并且非基础模块，require 则先在启动路径查找，然后从当前模块所在路径下的 .modules 查找，并上级目录递归。

### GC
强制要求进行垃圾回收
```JavaScript
global.GC();
```

### repl
进入交互模式，可以交互执行内部命令和代码，仅在启动 js 可以引用
```JavaScript
global.repl(Array cmds = []);
```

**调用参数:**
* cmds - 补充命令，格式如下：

### repl
进入交互模式，可以交互执行内部命令和代码，仅在启动 js 可以引用
```JavaScript
global.repl(Stream out,
                Array cmds = []);
```

**调用参数:**
* out - 输入输出流对象，通常为网络连接
* cmds - 补充命令，格式如下：

同一时刻只允许一个 Stream repl，新建一个 Stream repl 时，前一个 repl 将被关闭。
## 属性
        
### Master
Worker 宿主对象，仅在 Worker 入口脚本有效
```JavaScript
readonly Worker global.Master;
```

### global
全局对象
```JavaScript
readonly Object  new global;
```

### argv
获取当前脚本的运行参数，启动 js 获取进程启动参数，run 执行的脚本获取传递的参数
```JavaScript
readonly Array global.argv;
```

### __filename
当前脚本文件名
```JavaScript
readonly String global.__filename;
```

### __dirname
当前脚本所在目录
```JavaScript
readonly String global.__dirname;
```

