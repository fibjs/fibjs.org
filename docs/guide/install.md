# 安装运行环境
对于常用的 UNIX 操作系统，比如 Mac OS X, Linux 和 FreeBSD，建议在终端使用下面的命令直接安装:
```sh
curl -s http://fibjs.org/download/installer.sh | sh
```
在 Mac OS X 下，也可以选择使用 Homebrew 来安装最新版的 fibjs:
```sh
brew install fibjs
```
你也可以选择自行下载合适的版本，用于安装或者自行分发。Windows 下也需要自己下载安装。

如果你想随时拥有开发中的最新特性，或者你可能需要自行开发自己的分支，也可以自己编译最新的版本。

## Windows 下自己编译

### 准备编译环境
Windows 下需要安装 VS2019。

### 获取代码
fibjs 当前 github 地址为: https://github.com/fibjs/fibjs

在工作目录下执行以下命令:
```sh
git clone https://github.com/fibjs/fibjs.git --recursive
```
如果 clone 的时候忘记了添加  --recursive，也可以进入 fibjs 目录手动更新
```sh
cd fibjs
git submodule update --init --recursive
```

### 编译命令及说明
Windows 打开 `Developer Command Prompt` 终端，进入 fibjs 目录，执行命令:
```sh
build [options]
```
options 的选项:
* clean: 清除编译结果，便于全部重新编译
* release: 以发布方式编译
* debug: 以调试方式编译
* i386: 以 32 位发布方式编译
* amd64: 以 64 位发布方式编译

例如 release 模式编译命令如下:
```sh
build release
```

## UNIX 下自己编译

### 准备编译环境
Mac OS X 下，除需要安装 Xcode 及命令行工具外，以 brew 为例，准备环境命令如下:
```sh
brew install cmake git ccache
```
Ubuntu 准备环境命令如下:
```sh
apt install clang g++ make cmake git ccache libx11-dev
```
ARM on Ubuntu 准备环境命令如下:
```sh
apt install g++-arm-linux-gnueabihf
```
如果要在 Ubuntu 上编译 ARM 64 位版本，准备环境命令如下:
```sh
apt install g++-aarch64-linux-gnu
```
如果要在 Ubuntu 上编译 ARM v6 位版本，准备环境命令如下:
```sh
apt install g++-arm-linux-gnueabi
```
MIPS on Ubuntu 准备环境如下:
```sh
apt install g++-mips-linux-gnu
```
如果要在 Ubuntu 上编译 MIPS 64 位版本，准备环境命令如下:
```sh
apt install g++-mips64-linux-gnuabi64
```
Fedora 准备环境命令如下:
```sh
yum install clang gcc-c++ libstdc++-static make cmake git
```
如果要编译 32 位版本，准备环境命令如下:
```sh
yum install glibc-devel.i686 libstdc++-static.i686
```
Alpine 准备环境命令如下:
```sh
apk add clang g++ linux-headers make cmake git libx11-dev
```
FreeBSD (8,9) 准备环境命令如下:
```sh
pkg_add -r cmake libexecinfo git
```
FreeBSD 10 及以上系统准备环境命令如下:
```sh
pkg install cmake libexecinfo git
```

### 获取代码
fibjs 当前 github 地址为: https://github.com/fibjs/fibjs

在工作目录下执行以下命令:
```sh
git clone https://github.com/fibjs/fibjs.git --recursive
```
如果 clone 的时候忘记了添加  --recursive，也可以进入 fibjs 目录手动更新
```sh
cd fibjs
git submodule update --init --recursive
```

### 编译命令及说明
UNIX 环境，在 fibjs 项目根目录，有一个 build 的 shell 脚本，可用于 fibjs 编译。 执行编译命令:
```sh
bash build [options] [-jn] [-v] [-h]
```
options 的选项:
* clean: 清除编译结果，便于全部重新编译
* release: 以发布方式编译
* debug: 以调试方式编译
* i386: 以 32 位发布方式编译
* amd64: 以 64 位发布方式编译
* arm: 交叉编译 32 位 ARM 版本
* armv6: 交叉编译 32 位 ARM v6 版本
* arm64: 交叉编译 64 位 ARM 版本
* mips: 交叉编译 32 位 MIPS 版本
* mips64: 交叉编译 64 位 MIPS 版本
* ppc: 交叉编译 32 位 PowerPC 版本
* ppc64: 交叉编译 64 位 PowerPC 版本

例如 release 模式编译命令如下:
```sh
bash build release
```

## 测试全部用例
```sh
bin/{$OS}_{$arch}_release/fibjs test
```
例如:
```sh
bin/Linux_amd64_release/fibjs test
```
即可开始执行 fibjs 全部测试用例。{$OS} 内容自行查阅。

当你看到类似以下结果，表示测试用例全部运行正常:
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

  √ 312 tests completed (6727ms)
```

## 安装至系统
你可以使用下面的命令，将刚刚编译成功的 fibjs 安装至系统，方便使用:
```sh
bin/{$OS}_{$arch}_release/install.sh
```

## 开始编程
到现在为止，你已经有一个可以执行的 fibjs 版本，可以开始体验 fibjs 开发的乐趣了。

👉 【[hello, world](hello.md)】