# 添加 native 模块
如果你需要一些 fibjs native 模块所提供功能以外的功能，或者你想为 fibjs 贡献代码，那么这篇文章也许对你有帮助。
## 编写 idl 文件
idl 是 fibjs 中用来定义 native 模块和对象方法的描述性语言。

在开始编写自己的 fibjs 模块的之前你需要先编写 idl 描述性语言。我们以自定义模块 name 为例。我需要编写描述性语言 name.idl ，把这个文件放入 ${{fibjs_project_dir}}/idl/zh-cn/ 目录下，其中 ${{fibjs_project_dir}} 代表 fibjs 的项目所在目录。


我们的 name 模块很简单，只有一个 test 方法，其参数是一个字符串，这个字符串是歌词， test 方法判断这歌词对不对，返回值是 boolean 类型。
name.idl 编写如下

```idl
/*! @brief name module

 how to use
 @code
 var name = require('name');
 @endcode
 */
module name
{
    /*! @brief 测试输入的字符串是不是正确的歌词
     @param lyrics 歌词
    */
    static Boolean test(String lyrics);
};
```
## 生成头文件
在 tools 目录下执行 `fibjs idlc.js` 命令，这会读取 idl 目录下所有的 idl 文件并解析，生成对应的头文件和文档，其中生成的头文件都会存放在"fibjs/include/ifs/"目录下。例如 name.idl 会自动生成 ${{fibjs_project_dir}}/fibjs/include/ifs/name.h 这个头文件，其中定义了 name_base 这个类。

```c++
/***************************************************************************
 *                                                                         *
 *   This file was automatically generated using idlc.js                   *
 *   PLEASE DO NOT EDIT!!!!                                                *
 *                                                                         *
 ***************************************************************************/

#ifndef _name_base_H_
#define _name_base_H_

/**
 @author Leo Hoo <lion@9465.net>
 */

#include "../object.h"

namespace fibjs {

class name_base : public object_base {
    DECLARE_CLASS(name_base);

public:
    // name_base
    static result_t test(exlib::string lyrics, bool& retVal);

public:
    static void s__new(const v8::FunctionCallbackInfo<v8::Value>& args)
    {
        CONSTRUCT_INIT();

        Isolate* isolate = Isolate::current();

        isolate->m_isolate->ThrowException(
            isolate->NewString("not a constructor"));
    }

public:
    static void s_test(const v8::FunctionCallbackInfo<v8::Value>& args);
};
}

namespace fibjs {
inline ClassInfo& name_base::class_info()
{
    static ClassData::ClassMethod s_method[] = {
        { "test", s_test, true }
    };

    static ClassData s_cd = {
        "name", true, s__new, NULL,
        ARRAYSIZE(s_method), s_method, 0, NULL, 0, NULL, 0, NULL, NULL, NULL,
        &object_base::class_info()
    };

    static ClassInfo s_ci(s_cd);
    return s_ci;
}

inline void name_base::s_test(const v8::FunctionCallbackInfo<v8::Value>& args)
{
    bool vr;

    METHOD_NAME("name.test");
    METHOD_ENTER();

    METHOD_OVER(1, 1);

    ARG(exlib::string, 0);

    hr = test(v0, vr);

    METHOD_RETURN();
}
}

#endif

```
## 编写源代码
方法 s_test 是 v8 的访问器，它包裹了方法 test 。这里我们只要实现 test 方法，test 方法有两个参数，v0 是输入的歌词，vr 是返回值。我们将 cpp 文件放在 ${{fibjs_project_dir}}/fibjs/src/ 目录下, 头文件放在 ${{fibjs_project_dir}}/fibjs/include 目录下。本例不需要额外的头文件。
我们在 fibjs/src/ 目录下新建一个文件 name.cpp 内容如下:

```c++
#include "object.h"
#include "ifs/name.h"

namespace fibjs
{
    DECLARE_MODULE(name);
    result_t name_base::test(exlib::string lyrics, bool& retVal)
    {
        if (lyrics == "youmeiyounameyishougehuirangnituranxiangqiwo")
            retVal = true;
        else retVal = false;

        return 0;
    }
}
```
需要注意的是 `DECLARE_MODULE(name);` 这句话，这句话声明了 "name" 这个 module 并把它注册到 javascript 对象上。在编写源代码的时候需要加上这句话。
在 `v0.25.0` 及以后的版本中，我们将 fibjs 的模块剥离了出来以便更好的复用，所以你仍需要在 `fibjs/program/src/fibjs.cpp` 文件中的 `importModule` 函数中添加如下一句话: `IMPORT_MODULE(name);` 来安装自定义的模块。

## 编译并测试
在 windows 上编译之前，需要先执行一遍 `fibjs tools/vsmake.js` 然后 build。
编译运行结果如下:
![name](./imgs/name.png)

## 总结
学会了如何增加和修改 fibjs 的 native 模块和对象。我们可以编写各种各样复杂的模块，还可以移植第三方库到 fibjs 作为支持来编写我们的模块。欢迎您来为 fibjs 贡献更多的力量。
