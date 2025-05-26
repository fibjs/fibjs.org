# 模块 test
test 模块是一个测试框架，结合断言模块 `assert` 可以方便地编写各种测试用例，可作为函数调用

在 `fibjs` 中引入 `test` 模块常常需要先进行 `test setup` 操作：

```JavaScript
var test = require('test');
test.setup();
```

在编写测试用例前通常需要先定义一个测试模块用来描述测试内容。

- describe

describe 所有的测试分组的容器，类似于测试套件的概念，是用于将 `it` 测试挂靠在特定的分类下，describe 可以包含多个 it 用例或者其它嵌套的 describe 表示的子分类。
```
describe(String name, Function block)
```

调用参数:
name: String, 定义模块名称
block: Function, 模块初始化代码

- it

表示单个测试用例，每个描述都应该只测单一的一种情况，以保证测试结果的可靠性。
```
it(String name, Function block)
```

调用参数:
name: String, 定义项目名称
block: Function, 测试内容

- xit & it.skip

表示被跳过的测试用例。
```
xit(String name, Function block)
```

调用参数:
name: String, 定义项目名称
block: Function, 测试内容

- oit & it.only

表示仅运行当前测试用例，忽略其他测试用例，以便单独调试当前用例，非常实用。
```
oit(String name, Function block)
it.only(String name, Function block)
```

调用参数:
name: String, 定义项目名称
block: Function, 测试内容

- todo

表示需进一步完善测试用例的计划。
```
todo(String name, Function block)
```

调用参数:
name: String, 定义项目名称
block: Function, 测试内容

在编写测试用例时，通常使用 [assert](assert.md) 断言模块，对函数的返回进行检查。使用方法如下：
```
assert(condition, String message);
```

其中，第一个参数是需要断言的条件，第二个参数是错误消息。

## 对象
        
### test
**测试框架模块，指向本模块，可作为函数调用**

```JavaScript
test new test;
```

--------------------------
### it
**测试框架模块，指向本模块，可作为函数调用**

```JavaScript
test test.it;
```

--------------------------
### suite
**测试套件模块，可作为函数调用，参见 [test_suite](test_suite.md)**

```JavaScript
test_suite test.suite;
```

--------------------------
### describe
**测试套件模块，可作为函数调用，参见 [test_suite](test_suite.md)**

```JavaScript
test_suite test.describe;
```

--------------------------
### assert
**断言测试模块，可作为函数调用，如果测试值为假，则报错，报错行为可设定继续运行或者错误抛出**

```JavaScript
assert test.assert;
```

## 静态函数
        
### Function
**定义一个测试项目**

```JavaScript
static test.Function(String name,
    Function block);
```

调用参数:
* name: String, 定义项目名称
* block: Function, 测试内容

--------------------------
### xdescribe
**暂停测试套件定义**

```JavaScript
static test.xdescribe(String name,
    Function block);
```

调用参数:
* name: String, 定义模块名称
* block: Function, 模块初始化代码

--------------------------
### odescribe
**独立测试套件定义**

```JavaScript
static test.odescribe(String name,
    Function block);
```

调用参数:
* name: String, 定义模块名称
* block: Function, 模块初始化代码

--------------------------
### xit
**暂停测试的项目定义**

```JavaScript
static test.xit(String name,
    Function block);
```

调用参数:
* name: String, 定义项目名称
* block: Function, 测试内容

--------------------------
### skip
**暂停测试的项目定义**

```JavaScript
static test.skip(String name,
    Function block);
```

调用参数:
* name: String, 定义项目名称
* block: Function, 测试内容

--------------------------
### oit
**独立测试的项目定义**

```JavaScript
static test.oit(String name,
    Function block);
```

调用参数:
* name: String, 定义项目名称
* block: Function, 测试内容

--------------------------
### only
**独立测试的项目定义**

```JavaScript
static test.only(String name,
    Function block);
```

调用参数:
* name: String, 定义项目名称
* block: Function, 测试内容

--------------------------
### todo
**计划项目定义**

```JavaScript
static test.todo(String name,
    Function block);
```

调用参数:
* name: String, 定义项目名称
* block: Function, 测试内容

--------------------------
### before
**定义当前测试模块进入事件**

```JavaScript
static test.before(Function func);
```

调用参数:
* func: Function, 事件函数

--------------------------
### after
**定义当前测试模块退出事件**

```JavaScript
static test.after(Function func);
```

调用参数:
* func: Function, 事件函数

--------------------------
### beforeEach
**定义当前测试模块测试项目进入事件**

```JavaScript
static test.beforeEach(Function func);
```

调用参数:
* func: Function, 事件函数

--------------------------
### afterEach
**定义当前测试模块测试项目退出事件**

```JavaScript
static test.afterEach(Function func);
```

调用参数:
* func: Function, 事件函数

--------------------------
### mustCall
**测试一个函数必须被调用指定次数**

```JavaScript
static Function test.mustCall(Function func);
```

调用参数:
* func: Function, 被测试的函数

返回结果:
* Function, 返回被包裹的函数

--------------------------
### mustNotCall
**测试一个函数必须不被调用**

```JavaScript
static Function test.mustNotCall(Function func);
```

调用参数:
* func: Function, 被测试的函数

返回结果:
* Function, 返回被包裹的函数

--------------------------
**测试一个函数必须不被调用**

```JavaScript
static Function test.mustNotCall();
```

返回结果:
* Function, 返回被包裹的函数

--------------------------
### run
**开始执行定义的测试模块**

```JavaScript
static Object test.run(Integer mode = console.ERROR);
```

调用参数:
* mode: Integer, 指定进行测试模式，ERROR 时，项目报错信息集中在报告后显示，低于 ERROR 时，输出信息随时显示，高于 ERROR 时，只显示报告

返回结果:
* Object, 返回测试结果

测试运行完成后，将以以下形式返回测试结果：

```JavaScript
{
    "total": 2, // number of total test cases
    "pass": 2, // number of passed test cases
    "fail": 0, // number of failed test cases
    "skip": 0, // number of skipped test cases
    "todo": 0, // number of todo test cases
    "time": 0.000000, // time elapsed in seconds
    "cases": [ // details of test cases
        {
            "name": "test", // name of test case
            "time": 0.000000, // time elapsed in seconds
            "result": true, // result of test case
            "error": null // message of error if test case failed
        },
        {
            "name": "sub cases", // name of sub test case
            "total": 1, // number of total test cases
            "pass": 1, // number of passed test cases
            "fail": 0, // number of failed test cases
            "skip": 0, // number of skipped test cases
            "todo": 0, // number of todo test cases
            "time": 0.000000, // time elapsed in seconds
            "cases": [ // details of test cases
                {
                    "name": "test", // name of test case
                    "time": 0.000000, // time elapsed in seconds
                    "result": true, // result of test case
                    "error": null // message of error if test case failed
                }
            ]
        }
    ]
}
```

--------------------------
### setup
**初始化当前脚本的测试环境，将 test 模块方法复制为当前脚本全局变量**

```JavaScript
static test.setup();
```

## 静态属性
        
### slow
**Integer, 设置和查询慢速测试警告阀值，以 ms 为单位，缺省为 75**

```JavaScript
static Integer test.slow;
```

