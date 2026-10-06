# Installation
For commonly used UNIX operating systems, such as Mac OS X, Linux and FreeBSD, we recommend installing directly from the terminal with the following command:
```sh
curl -s https://fibjs.org/download/installer.sh | sh
```
On Mac OS X, you can also use Homebrew to install the latest version of fibjs:
```sh
brew install fibjs
```
You can also download a suitable version yourself for installation or redistribution. On Windows, you also need to download and install it yourself.

If you want to have the latest features under development at any time, or if you may need to develop your own fork, you can also compile the latest version yourself.

## Building on Windows

### Preparing the Build Environment
On Windows, you need to install VS2019 or later. Note: be sure to select the C++ environment during installation.

### Getting the Source Code
The current GitHub address of fibjs is: https://github.com/fibjs/fibjs

Run the following command in your working directory:
```sh
git clone https://github.com/fibjs/fibjs.git --recursive
```
If you forgot to add --recursive when cloning, you can also enter the fibjs directory and update it manually
```sh
cd fibjs
git submodule update --init --recursive
```

### Build Commands and Options
On Windows, open a `Developer Command Prompt` terminal, enter the fibjs directory, and run:
```sh
build [options]
```
The options are:
* clean: clear the build output so everything can be rebuilt from scratch
* release: build in release mode
* debug: build in debug mode
* i386: build a 32-bit release
* amd64: build a 64-bit release
* arm64: cross-compile an ARM64 build

For example, the build command for release mode is:
```sh
build
```

## Building on UNIX

### Preparing the Build Environment
On Mac OS X, in addition to installing Xcode and the command line tools, here is the setup command using brew as an example:
```sh
brew install cmake git ccache
```
The setup command for Ubuntu is:
```sh
apt install clang g++ make cmake git ccache libx11-dev
```
The setup command for ARM on Ubuntu is:
```sh
apt install g++-arm-linux-gnueabihf
```
To compile a 64-bit ARM build on Ubuntu, the setup command is:
```sh
apt install g++-aarch64-linux-gnu
```
To compile an ARM v6 build on Ubuntu, the setup command is:
```sh
apt install g++-arm-linux-gnueabi
```
The setup for MIPS on Ubuntu is:
```sh
apt install g++-mips-linux-gnu
```
To compile a 64-bit MIPS build on Ubuntu, the setup command is:
```sh
apt install g++-mips64-linux-gnuabi64
```
The setup command for Fedora is:
```sh
yum install clang gcc-c++ libstdc++-static make cmake git
```
To compile a 32-bit build, the setup command is:
```sh
yum install glibc-devel.i686 libstdc++-static.i686
```
The setup command for Alpine is:
```sh
apk add clang g++ linux-headers make cmake git libx11-dev
```
The setup command for FreeBSD (8, 9) is:
```sh
pkg_add -r cmake libexecinfo git
```
The setup command for FreeBSD 10 and later is:
```sh
pkg install cmake libexecinfo git
```

### Getting the Source Code
The current GitHub address of fibjs is: https://github.com/fibjs/fibjs

Run the following command in your working directory:
```sh
git clone https://github.com/fibjs/fibjs.git --recursive
```
If you forgot to add --recursive when cloning, you can also enter the fibjs directory and update it manually
```sh
cd fibjs
git submodule update --init --recursive
```

### Build Commands and Options
On UNIX, there is a `build` shell script in the root directory of the fibjs project that can be used to compile fibjs. Run the build command:
```sh
bash build [options] [-jn] [-v] [-h]
```
The options are:
* clean: clear the build output so everything can be rebuilt from scratch
* release: build in release mode; this is the default
* debug: build in debug mode
* linux: build the Linux version using the preinstalled docker environment
* alpine: build the alpine version using the preinstalled docker environment
* android: build the android version using the preinstalled docker environment
* iphone: build the iphone version using the preinstalled docker environment
* i386: build a 32-bit release
* amd64: build a 64-bit release
* arm: cross-compile an ARM build
* arm64: cross-compile an ARM64 build
* mips64: cross-compile a MIPS64 build
* ppc64: cross-compile a PowerPC64 build
* loong64: cross-compile a LoongArch64 build

For example, the build command for release mode is:
```sh
bash build
```

## Running All Test Cases
```sh
bin/{$OS}_{$arch}_release/fibjs test
```
For example:
```sh
bin/Linux_amd64_release/fibjs test
```
This starts running all fibjs test cases. You can look up the value of {$OS} yourself.

When you see a result similar to the following, all test cases have run successfully:
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

## Installing to the System
You can use the following command to install the fibjs you just built into the system so it is easy to use:
```sh
bin/{$OS}_{$arch}_release/install.sh
```

## Start Coding
By now, you have a working fibjs build and can start enjoying fibjs development.

👉 [Hello World](hello.md)
