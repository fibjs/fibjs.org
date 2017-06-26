# 对象 Stat
文件的基础信息对象

Stat 对象通过 [fs](../../module/ifs/fs.md).stat, [File](File.md).stat, [fs](../../module/ifs/fs.md).readdir 查询，不可独立创建

## 继承关系
<div class="inherits"><svg width="97pt" height="374pt" viewBox="0.00 0.00 96.77 374.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(4 370)">
<title>%0</title>
<polygon fill="#ffffff" stroke="transparent" points="-4,4 -4,-370 92.768,-370 92.768,4 -4,4"/>
<!-- object -->
<g id="node1" class="node">
<title>object</title>
<g id="a_node1"><a xlink:href="object.md" xlink:title="object">
<polygon fill="#ffffff" stroke="#000000" points="15.5525,-277.5 15.5525,-365.5 73.2155,-365.5 73.2155,-277.5 15.5525,-277.5"/>
<text text-anchor="middle" x="44.384" y="-352.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">object</text>
<polyline fill="none" stroke="#000000" points="15.5525,-345.5 73.2155,-345.5 "/>
<text text-anchor="start" x="23.5525" y="-332.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">dispose()</text>
<text text-anchor="start" x="23.5525" y="-320.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">equals()</text>
<text text-anchor="start" x="23.5525" y="-308.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">toString()</text>
<text text-anchor="start" x="23.5525" y="-296.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">toJSON()</text>
<text text-anchor="start" x="23.5525" y="-284.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">valueOf()</text>
</a>
</g>
</g>
<!-- Stat -->
<g id="node2" class="node">
<title>Stat</title>
<g id="a_node2"><a xlink:title="Stat">
<polygon fill="#d3d3d3" stroke="#000000" points="0,-.5 0,-240.5 88.768,-240.5 88.768,-.5 0,-.5"/>
<text text-anchor="middle" x="44.384" y="-227.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">Stat</text>
<polyline fill="none" stroke="#000000" points="0,-220.5 88.768,-220.5 "/>
<text text-anchor="start" x="8" y="-207.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">name</text>
<text text-anchor="start" x="8" y="-195.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">size</text>
<text text-anchor="start" x="8" y="-183.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">mode</text>
<text text-anchor="start" x="8" y="-171.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">mtime</text>
<text text-anchor="start" x="8" y="-159.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">atime</text>
<text text-anchor="start" x="8" y="-147.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">ctime</text>
<text text-anchor="start" x="8" y="-135.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">uid</text>
<text text-anchor="start" x="8" y="-123.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">gid</text>
<polyline fill="none" stroke="#000000" points="0,-116.5 88.768,-116.5 "/>
<text text-anchor="start" x="8" y="-103.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">isWritable()</text>
<text text-anchor="start" x="8" y="-91.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">isReadable()</text>
<text text-anchor="start" x="8" y="-79.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">isExecutable()</text>
<text text-anchor="start" x="8" y="-67.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">isHidden()</text>
<text text-anchor="start" x="8" y="-55.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">isDirectory()</text>
<text text-anchor="start" x="8" y="-43.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">isFile()</text>
<text text-anchor="start" x="8" y="-31.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">isSymbolicLink()</text>
<text text-anchor="start" x="8" y="-19.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">isMemory()</text>
<text text-anchor="start" x="8" y="-7.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">isSocket()</text>
</a>
</g>
</g>
<!-- object&#45;&gt;Stat -->
<g id="edge1" class="edge">
<title>object-&gt;Stat</title>
<path fill="none" stroke="#000000" d="M44.384,-267.3445C44.384,-258.8615 44.384,-249.8145 44.384,-240.5364"/>
<polygon fill="#000000" stroke="#000000" points="40.8841,-267.3897 44.384,-277.3897 47.8841,-267.3897 40.8841,-267.3897"/>
</g>
</g>
</svg></div>

## 成员属性
        
### name
** String, 文件名称 **

```JavaScript
readonly String Stat.name;
```

--------------------------
### size
** Long, 文件尺寸 **

```JavaScript
readonly Long Stat.size;
```

--------------------------
### mode
** Integer, 文件权限，Windows 不支持此属性 **

```JavaScript
readonly Integer Stat.mode;
```

--------------------------
### mtime
** Date, 文件最后修改时间 **

```JavaScript
readonly Date Stat.mtime;
```

--------------------------
### atime
** Date, 文件最后访问时间 **

```JavaScript
readonly Date Stat.atime;
```

--------------------------
### ctime
** Date, 文件创建时间 **

```JavaScript
readonly Date Stat.ctime;
```

--------------------------
### uid
** Integer, 文件拥有者的id **

```JavaScript
readonly Integer Stat.uid;
```

--------------------------
### gid
** Integer, 文件所属的组id **

```JavaScript
readonly Integer Stat.gid;
```

## 成员函数
        
### isWritable
** 查询文件是否有写入权限 **

```JavaScript
Boolean Stat.isWritable();
```

返回结果:
* Boolean, 为 true 则有写入权限

--------------------------
### isReadable
** 查询文件是否有读权限 **

```JavaScript
Boolean Stat.isReadable();
```

返回结果:
* Boolean, 为 true 则有读权限

--------------------------
### isExecutable
** 查询文件是否有执行权限 **

```JavaScript
Boolean Stat.isExecutable();
```

返回结果:
* Boolean, 为 true 则有执行权限

--------------------------
### isHidden
** 查询文件是否隐藏 **

```JavaScript
Boolean Stat.isHidden();
```

返回结果:
* Boolean, 为 true 则隐藏

--------------------------
### isDirectory
** 查询文件是否是目录 **

```JavaScript
Boolean Stat.isDirectory();
```

返回结果:
* Boolean, 为 true 则是目录

--------------------------
### isFile
** 查询文件是否是文件 **

```JavaScript
Boolean Stat.isFile();
```

返回结果:
* Boolean, 为 true 则是文件

--------------------------
### isSymbolicLink
** 查询文件是否是符号链接 **

```JavaScript
Boolean Stat.isSymbolicLink();
```

返回结果:
* Boolean, 为 true 则是符号链接

--------------------------
### isMemory
** 查询文件是否是内存文件 **

```JavaScript
Boolean Stat.isMemory();
```

返回结果:
* Boolean, 为 true 则是内存文件

--------------------------
### isSocket
** 查询文件是否是 [Socket](Socket.md) **

```JavaScript
Boolean Stat.isSocket();
```

返回结果:
* Boolean, 为 true 则是 [Socket](Socket.md)

--------------------------
### dispose
** 强制回收对象，调用此方法后，对象资源将立即释放 **

```JavaScript
Stat.dispose();
```

--------------------------
### equals
** 比较当前对象与给定的对象是否相等 **

```JavaScript
Boolean Stat.equals(object expected);
```

调用参数:
* expected: object, 制定比较的目标对象

返回结果:
* Boolean, 返回对象比较的结果

--------------------------
### toString
** 返回对象的字符串表示，一般返回 "[Native Object]"，对象可以根据自己的特性重新实现 **

```JavaScript
String Stat.toString();
```

返回结果:
* String, 返回对象的字符串表示

--------------------------
### toJSON
** 返回对象的 JSON 格式表示，一般返回对象定义的可读属性集合 **

```JavaScript
Value Stat.toJSON(String key = "");
```

调用参数:
* key: String, 未使用

返回结果:
* Value, 返回包含可 JSON 序列化的值

--------------------------
### valueOf
** 返回对象本身的数值 **

```JavaScript
Value Stat.valueOf();
```

返回结果:
* Value, 返回对象本身的数值

