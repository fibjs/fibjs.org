# 什么是 fibjs
fibjs 是一个建立在 Google v8 Javascript 引擎基础上的应用服务器开发框架，不同于 node.js，fibjs 采用 fiber 解决 v8 引擎的多路复用，并通过大量 c++ 组件，将重负荷运算委托给后台线程，释放 v8 线程，争取更大的并发时间。

## 编译执行版本
### 第一步：准备编译环境

Windows 下需要安装 Visual Studio 2015。

unix 下编译fibjs需要依赖以下工具：
```
GCC 4.8 or newer
CMake 2.6 or newer
GNU Make 3.81 or newer
libexecinfo (FreeBSD and OpenBSD only)
```
MacOSX 下，除需要安装 xcode 及命令行工具外，以 Brew 为例，准备环境命令如下：
```sh
brew install cmake
brew install git
```
Ubuntu 准备环境命令如下：
```sh
apt install g++
apt install make
apt install cmake
apt install git
```
如果要编译 32 位版本，另需要安装 multilib：
```sh
apt install gcc-multilib
apt install g++-multilib
```
Arm on Ubuntu 准备环境命令如下：
```sh
apt install gcc-arm-linux-gnueabihf
apt install g++-arm-linux-gnueabihf
```
如果要在ubuntu上编译arm64位版本，准备环境命令如下：
```sh
apt install gcc-aarch64-linux-gnu
apt install g++-aarch64-linux-gnu
```
Mips on Ubuntu 准备环境如下：
```sh
apt install gcc-mips-linux-gnu
apt install g++-mips-linux-gnu
```
如果要在ubuntu上编译mips 64位版本，准备环境命令如下：
```sh
apt install gcc-mips64-linux-gnuabi64
apt install g++-mips64-linux-gnuabi64
```
Powerpc on Ubuntu 准备环境命令如下：
```sh
apt install gcc-powerpc-linux-gnu
apt install g++-powerpc-linux-gnu
```
如果要在ubuntu上编译powerpc 64位版本，准备环境命令如下：
```sh
apt install gcc-powerpc64-linux-gnu
apt install g++-powerpc64-linux-gnu
```
fix：
```sh
rm -f /usr/include/asm
ln -s x86_64-linux-gnu /usr/include/i386-linux-gnu
ln -s x86_64-linux-gnu /usr/include/x86_64-linux-gnux32
```
Fedora 准备环境命令如下：
```sh
yum install gcc-c++
yum install libstdc++-static
yum install make
yum install cmake
yum install git
```
如果要编译 32 位版本，准备环境命令如下：
```sh
yum install glibc-devel.i686
yum install libstdc++-static.i686
```
FreeBSD (8,9)准备环境命令如下：
```sh
pkg_add -r cmake
pkg_add -r libexecinfo
pkg_add -r git
```
FreeBSD 10及以上系统准备环境命令如下：
```sh
pkg install cmake
pkg install libexecinfo
pkg install git
```
### 第二步：获取代码
fibjs 当前 github 地址为：https://github.com/fibjs/fibjs

在合适的位置执行以下命令：
```sh
git clone https://github.com/fibjs/fibjs.git
cd fibjs
git submodule init
git submodule update
```
### 第三步：编译命令及说明
Windows 下点击start菜单选择所有程序选择Visual Studio 2015 选择Visual Studio Tools选择Developer Command Prompt for VS2015 打开终端后进入fibjs目录，执行命令：
```sh
build
```
unix 环境，在 fibjs 项目根目录，有一个 build 的 shell 脚本，可用于 fibjs 编译。 执行编译命令：
```sh
sh build [options] [-jn] [-v] [-h]

options：

clean: 清除编译结果，便于全部重新编译
Release: 以发布方式编译
Debug: 以调试方式编译
i386: 以 32 位发布方式编译
amd64: 以 32 位发布方式编译
arm: 交叉编译32位arm版本
arm64: 交叉编译64位arm版本
mips: 交叉编译32位mips版本
mips64: 交叉编译64位mips版本
ppc: 交叉编译32位powerpc版本
ppc64: 交叉编译64位powerpc64版本
```
例如：Release 模式编译命令如下：
```sh
sh build Release
```
### 第四步：测试全部用例
```sh
bin/{$OS}_{$arch}_Release/fibjs test
```
例如：
```sh
bin/Linux_amd64_Release/fibjs test
```
即可开始执行 fibjs 全部测试用例。{$OS} 内容自行查阅。

当你看到类似以下结果，表示测试用例全部运行正常：
```sh
.......
db
 √ escape
 √ formatMySQL
sqlite
 √ empty sql
 √ create table
 √ intert
 √ select
 √ callback
 √ binary (835ms)
BUG:simple_api_call
 √ not hungup (109ms)
 √ 312 tests completed (6727ms)
```
### 第五步：歇一会，喝点什么
到现在为止，你已经有一个可以执行的 fibjs 版本了，可以庆祝一下，给自己一点奖励。
