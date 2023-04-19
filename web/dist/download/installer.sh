#!/bin/sh

HOST_OS=`uname`
HOST_ARCH=`uname -m`

case ${HOST_ARCH} in
	i386|i686) HOST_ARCH="x86";;
	x86_64|amd64) HOST_ARCH="x64";;
	armv7|armv7s|armv7l) HOST_ARCH="arm";;
	aarch64|arm64) HOST_ARCH="arm64";;
	mips64) HOST_ARCH="mips64";;
	ppc64) HOST_ARCH="ppc64";;
	loongarch64) HOST_ARCH="loong64";;
esac

case ${HOST_OS} in
	Darwin) HOST_OS="darwin";;
	Linux) HOST_OS="linux";;
	FreeBSD) HOST_OS="freebsd";;
esac

VERSION=`curl -s https://fibjs.org/dist/version.txt`

echo "Downloading fibjs ${VERSION} for ${HOST_OS} ${HOST_ARCH} ..."
curl -s https://fibjs.org/dist/${VERSION}/installer-${VERSION}-${HOST_OS}-${HOST_ARCH}.sh >> installer-${VERSION}-${HOST_OS}-${HOST_ARCH}.sh
sh installer-${VERSION}-${HOST_OS}-${HOST_ARCH}.sh
rm installer-${VERSION}-${HOST_OS}-${HOST_ARCH}.sh
