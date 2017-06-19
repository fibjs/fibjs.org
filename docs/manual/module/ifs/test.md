# 模块 test
测试套件模块，用以定义管理测试套件

引用方法：
```JavaScript
var test = require('test');
```
## 对象
        
### assert
断言测试模块，如果测试值为假，则报错，报错行为可设定继续运行或者错误抛出
```JavaScript
assert test.assert;
```

## 静态函数
        
### describe
定义一个测试模块，可嵌套定义
```JavaScript
static test.describe(String name,
                Function block);
```

调用参数:
* name - 定义模块名称
* block - 模块初始化代码

--------------------------
### xdescribe
停止测试的模块定义
```JavaScript
static test.xdescribe(String name,
                Function block);
```

调用参数:
* name - 定义模块名称
* block - 模块初始化代码

--------------------------
### it
定义一个测试项目
```JavaScript
static test.it(String name,
                Function block);
```

调用参数:
* name - 定义项目名称
* block - 测试内容

--------------------------
### xit
禁止测试的项目定义
```JavaScript
static test.xit(String name,
                Function block);
```

调用参数:
* name - 定义项目名称
* block - 测试内容

--------------------------
### before
定义当前测试模块进入事件
```JavaScript
static test.before(Function func);
```

调用参数:
* func - 事件函数

--------------------------
### after
定义当前测试模块退出事件
```JavaScript
static test.after(Function func);
```

调用参数:
* func - 事件函数

--------------------------
### beforeEach
定义当前测试模块测试项目进入事件
```JavaScript
static test.beforeEach(Function func);
```

调用参数:
* func - 事件函数

--------------------------
### afterEach
定义当前测试模块测试项目退出事件
```JavaScript
static test.afterEach(Function func);
```

调用参数:
* func - 事件函数

--------------------------
### run
开始执行定义的测试模块
```JavaScript
static Integer test.run(Integer loglevel = console.ERROR);
```

调用参数:
* loglevel - 指定进行测试时的日志输出级别，ERROR 时，项目报错信息集中在报告后显示，低于 ERROR 时，输出信息随时显示，高于 ERROR 时，只显示报告

返回结果:
* 返回测试用例统计结果，正确则返回 0，错误则返回错误个数

--------------------------
### setup
初始化当前脚本的测试环境，将 test 模块方法复制为当前脚本全局变量
```JavaScript
static test.setup(Integer mode = BDD);
```

调用参数:
* mode - 指定初始化的模式，缺省为 BDD

## 静态属性
        
### slow
设置和查询慢速测试警告阀值，以 ms 为单位，缺省为 75
```JavaScript
static Integer test.slow;
```

## 常量
        
### BDD
定义 BDD(Behavior Drive Development) 测试环境，支持 describe, xdescribe, it, xit, before, after, beforeEach 和 afterEach，同时初始化 [assert](assert.md) 和expect
```JavaScript
const test.BDD = 0;
```

--------------------------
### TDD
定义 TDD(Test Drive Development) 测试环境，支持 suite, xsuite, test, xtest, setup, teardown, suiteSetup 和 suiteTeardown，同时初始化 [assert](assert.md) 和expect
```JavaScript
const test.TDD = 1;
```

