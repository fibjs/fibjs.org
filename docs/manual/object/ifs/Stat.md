# 对象 Stat
文件的基础信息对象

Stat 对象通过 [fs](../../module/ifs/fs.md).stat, [File](File.md).stat, [fs](../../module/ifs/fs.md).readdir 查询，不可独立创建

## 继承关系
<div class="inherits"><svg width="96pt" height="382pt" viewBox="0.00 0.00 96.00 382.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(4 378)">
<title>%0</title>
<polygon fill="#ffffff" stroke="transparent" points="-4,4 -4,-378 92,-378 92,4 -4,4"/>
<!-- object -->
<g id="node1" class="node">
<title>object</title>
<g id="a_node1"><a xlink:href="object.md" xlink:title="object">
<polygon fill="#ffffff" stroke="transparent" points="15.5,-282 15.5,-374 72.5,-374 72.5,-282 15.5,-282"/>
<polygon fill="none" stroke="#000000" points="16,-352 16,-374 73,-374 73,-352 16,-352"/>
<text text-anchor="start" x="31.1625" y="-360" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">object</text>
<polygon fill="none" stroke="#000000" points="16,-282 16,-352 73,-352 73,-282 16,-282"/>
<text text-anchor="start" x="21" y="-338" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> dispose()</text>
<text text-anchor="start" x="21" y="-326" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> equals()</text>
<text text-anchor="start" x="21" y="-314" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> toString()</text>
<text text-anchor="start" x="21" y="-302" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> toJSON()</text>
<text text-anchor="start" x="21" y="-290" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> valueOf()</text>
</a>
</g>
</g>
<!-- Stat -->
<g id="node2" class="node">
<title>Stat</title>
<g id="a_node2"><a xlink:title="Stat">
<polygon fill="#d3d3d3" stroke="transparent" points="0,0 0,-246 88,-246 88,0 0,0"/>
<polygon fill="none" stroke="#000000" points="0,-224 0,-246 88,-246 88,-224 0,-224"/>
<text text-anchor="start" x="35.107" y="-232" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">Stat</text>
<polygon fill="none" stroke="#000000" points="0,-118 0,-224 88,-224 88,-118 0,-118"/>
<text text-anchor="start" x="5" y="-210" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> name</text>
<text text-anchor="start" x="5" y="-198" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> size</text>
<text text-anchor="start" x="5" y="-186" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> mode</text>
<text text-anchor="start" x="5" y="-174" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> mtime</text>
<text text-anchor="start" x="5" y="-162" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> atime</text>
<text text-anchor="start" x="5" y="-150" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> ctime</text>
<text text-anchor="start" x="5" y="-138" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> uid</text>
<text text-anchor="start" x="5" y="-126" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> gid</text>
<polygon fill="none" stroke="#000000" points="0,0 0,-118 88,-118 88,0 0,0"/>
<text text-anchor="start" x="5" y="-104" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> isWritable()</text>
<text text-anchor="start" x="5" y="-92" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> isReadable()</text>
<text text-anchor="start" x="5" y="-80" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> isExecutable()</text>
<text text-anchor="start" x="5" y="-68" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> isHidden()</text>
<text text-anchor="start" x="5" y="-56" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> isDirectory()</text>
<text text-anchor="start" x="5" y="-44" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> isFile()</text>
<text text-anchor="start" x="5" y="-32" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> isSymbolicLink()</text>
<text text-anchor="start" x="5" y="-20" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> isMemory()</text>
<text text-anchor="start" x="5" y="-8" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> isSocket()</text>
</a>
</g>
</g>
<!-- object&#45;&gt;Stat -->
<g id="edge1" class="edge">
<title>object-&gt;Stat</title>
<path fill="none" stroke="#000000" d="M44,-271.9052C44,-263.7117 44,-255.0168 44,-246.1051"/>
<polygon fill="#000000" stroke="#000000" points="40.5001,-271.994 44,-281.994 47.5001,-271.994 40.5001,-271.994"/>
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

