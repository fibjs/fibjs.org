# 模块 re
正则表达式处理模块

## 函数
        
### compile
编译一个正则表达式模版，并返回正则表达式处理对象
```JavaScript
static Regex re.compile(String pattern,
                String opt = "");
```

调用参数:
* pattern - 正则表达式
* opt - 规定匹配的类型。&#34;g&#34; 用于全局匹配，&#34;i&#34; 用于区分大小写，&#34;gi&#34; 用于全局区分大小写的匹配

返回结果:
* 返回正则表达式对象

