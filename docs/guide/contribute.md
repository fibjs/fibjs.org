## 1、编写idl文件
idl是fibjs中用来定义native模块和对象方法的描述性语言。

在开始编写自己的fibjs模块的之前你需要先编写idl描述性语言。我们以自定义模块name为例。我需要编写描述性语言name.idl，把这个文件放入${{fibjs_project_dir}}/idl/zh-cn/目录下，其中${{fibjs_project_dir}}代表fibjs的项目所在目录。


我们的name模块很简单，只有一个test方法，其参数是一个字符串，这个字符串是歌词，test方法判断这歌词对不对，返回值是boolean类型。
name.idl编写如下

```
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
## 2、生成name.h
在tools目录下执行`fibjs idlc.js`命令，这会读取idl目录下所有的idl文件并解析，生成对应的头文件和文档，其中生成的头文件都会存放在"fibjs/include/ifs/"目录下。例如name.idl会自动生成${{fibjs_project_dir}}/fibjs/include/ifs/name.h这个头文件，其中定义了name_base这个类。

```
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
## 3、编写源代码
方法s_test是v8的访问器，它包裹了方法test。这里我们只要实现test方法，test方法有两个参数，v0是输入的歌词，vr是返回值。我们将cpp文件放在${{fibjs_project_dir}}/fibjs/src/目录下, 头文件放在${{fibjs_project_dir}}/fibjs/include目录下。
我们在fibjs/src/目录下新建一个文件name.cpp内容如下:

```
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
## 4、编译并测试
在windows上需要额外在fibjs目录下的项目文件fibjs.vcxproj中按照格式将name.h和name.cpp添加进去。
编译运行结果如下:
![name](./imgs/name.png)

## 5、总结
学会了如何增加和修改fibjs的native模块和对象。我们可以编写各种各样复杂的模块，还可以移植第三方库到fibjs作为支持来编写我们的模块。欢迎您来为fibjs贡献更多的力量。
