# 打包发布  fibjs 应用

## 介绍

在软件开发中，跨环境部署应用程序是一个常见的挑战。fib-build 是一个专为 fibjs 环境设计的强大工具，旨在简化这一过程。它将应用程序目录打包成独立的可执行文件，使得 fibjs 应用程序的部署和分发变得简单。通过 fib-build，开发者可以生成一个包含所有依赖项和资源文件的单一可执行文件。这消除了用户单独安装 fibjs 的需求，确保应用程序可以在不同系统上无缝运行。通过简化部署过程，fib-build 提高了效率，减少了管理多个环境的复杂性。

## 主要功能

### 综合单一可执行文件

fib-build 擅长创建一个综合的单一可执行文件，包含整个 fibjs 应用程序。这不仅包括核心应用逻辑，还包括所有相关的资源文件和依赖项。通过将所有内容整合到一个可执行文件中，fib-build 消除了用户管理复杂环境设置或依赖项安装的需求。这一功能显著简化了部署过程，使用户可以通过一个命令运行应用程序，无论底层系统配置如何。

### 灵活的自定义基础可执行程序

fib-build 的一个突出特点是其在指定基础可执行程序方面的灵活性。用户可以选择使用当前的 fibjs 可执行文件作为默认基础文件，或者指定一个适用于各种操作系统和架构的不同可执行文件。这种自定义能力确保了打包的应用程序可以满足多样化的部署需求，提高了其在不同环境中的适应性和可用性。无论是针对 Windows、macOS 还是 Linux，fib-build 都提供了创建兼容且高效可执行文件的工具。

### 强大的跨平台兼容性

尽管通常建议在目标操作系统上生成可执行文件以避免兼容性问题，fib-build 支持跨平台打包。这一功能对在 macOS 环境中工作的开发者特别有利，因为它确保了可执行文件在 macOS 系统上的稳定性和兼容性。通过利用 fib-build 的跨平台功能，开发者可以简化工作流程，减少管理多个开发环境的开销。这使得 fib-build 成为团队无缝部署跨平台应用程序的宝贵工具。

### 自动降级以确保兼容性

默认情况下，fib-build 使用嵌入资源的方式合并可执行文件和打包文件。然而，在某些平台（如 Linux MIPS、Linux Loong64、Alpine ARM64 等）上，这种方法可能会遇到兼容性问题。为了解决这个问题，fib-build 在打包过程中会自动检测这些不兼容的平台。当目标平台为这些平台时，它会自动降级到传统模式，将打包文件附加到可执行文件的末尾。这确保了在不同环境中的更好兼容性和可靠性，使部署过程更加顺畅和稳健。

## 安装步骤

在开始使用 fib-build 之前，确保你的系统上已经安装了 fibjs。如果尚未安装，请访问 fibjs 安装指南来设置环境。一旦安装了 fibjs，导航到你的项目目录并使用以下命令安装 fib-build：

```sh
cd your-project-directory
fibjs --install fib-build
```

## 使用方法

安装完成后，可以通过命令行界面使用 fib-build 来打包 fibjs 应用程序。基本用法如下：

```sh
fibjs fbuild <folder> <outfile>
```

### 参数说明

- `<folder>`：包含 fibjs 应用程序的目录。这是你的应用程序代码所在的根目录。通常是当前目录 (`.`)，但你也可以指定其他目录来处理其他项目。
- `<outfile>`：必需。指定可执行文件的保存路径。建议不要将输出文件保存在项目目录中，以避免在下次打包过程中将其包含在内。这指定了生成的可执行文件的输出位置和名称。

### 可选参数

- `--execfile=<file>`：指定基础可执行文件，例如特定的 fibjs 二进制文件。默认情况下，它使用当前运行的可执行文件。此选项允许你自定义用于打包的基础二进制文件，这对于兼容不同操作系统或特定版本的 fibjs 非常有用。

- `--legacy`：使用传统模式将数据附加到输出文件的末尾。当嵌入资源模式在某些平台上遇到兼容性问题时，这非常有用。通过使用附加方法进行打包，可以确保在不同环境中的更好兼容性。

- `--gui`：启用 GUI 模式。当指定此选项时，打包过程将在 Windows 上将可执行文件的子系统设置为 GUI。在 macOS 上，它将自动将应用程序打包为一个 bundle。这对于需要图形用户界面的应用程序特别有用，确保可执行文件在不同操作系统上正确运行。

这些参数确保了打包过程的灵活性，可以根据不同的部署需求进行定制，使创建优化和便携的 fibjs 应用程序变得更加容易。

## 应用示例

### 打包一个简单的 fibjs 应用程序

要打包一个简单的 fibjs 应用程序，假设你在包含 fibjs 应用程序的项目目录中。你想创建一个名为 myAppExecutable 的可执行文件。你可以通过在终端中运行以下命令来实现：

```sh
cd your-project-directory
fibjs fbuild . ../myAppExecutable
```

此命令将当前目录的内容打包成一个名为 myAppExecutable 的可执行文件。

### 使用指定的 fibjs 可执行文件

在某些情况下，你可能希望使用不同的 fibjs 二进制文件作为可执行文件的基础。这对于确保与不同操作系统或架构的兼容性非常有用。要指定不同的 fibjs 二进制文件，请使用 `--execfile` 选项：

```sh
cd your-project-directory
fibjs fbuild . ../myAppExecutable --execfile=path/to/other/fibjs
```

此命令将当前目录打包成一个名为 myAppExecutable 的可执行文件，使用位于 path/to/other/fibjs 的指定 fibjs 二进制文件。

### 使用传统模式

如果在某些平台上嵌入资源模式遇到兼容性问题，可以使用 `--legacy` 选项将数据附加到输出文件的末尾：

```sh
cd your-project-directory
fibjs fbuild . ../myAppExecutable --legacy
```

此命令将当前目录的内容打包成一个名为 myAppExecutable 的可执行文件，使用传统模式。

### 启用 GUI 模式

如果你的应用程序需要图形用户界面，可以使用 `--gui` 选项启用 GUI 模式。在 Windows 上，这将把可执行文件的子系统设置为 GUI。在 macOS 上，它将自动将应用程序打包为一个 bundle。在 macOS 上打包为 bundle 时，`fbuild` 将使用 `package.json` 中的基本信息来创建 bundle。默认情况下，`fbuild` 将为 bundle 设置一个默认图标。如果你想指定一个自定义图标，可以在 `package.json` 中添加一个 `icon` 字段，指向你的自定义图标文件。

示例命令：
```sh
cd your-project-directory
fibjs fbuild . ../myAppExecutable --gui
```
示例 `package.json`：
```json
{
  "name": "myApp",
  "version": "1.0.0",
  "description": "My fibjs

 application

",
  "main": "index.js",
  "author": "Your Name",
  "license": "MIT",
  "icon": "path/to/custom/icon.icns"
}
```

此命令将当前目录的内容打包成一个名为 myAppExecutable 的可执行文件，并启用 GUI 模式。在 macOS 上，它将使用 `package.json` 中的信息创建一个 bundle，并设置 `icon` 字段中指定的自定义图标。

## 文件忽略规则

在构建过程中，fib-build 通过排除某些文件来优化打包。具体来说，它忽略：

- 以点 (.) 开头的目录中的文件，例如 .git 或 .env。
- 位于 fib-build 模块目录中的文件。
- 位于 fib-inject 模块目录中的文件。

你可以在 `package.json` 中添加一个 `ignore` 字段来指定要排除的其他文件或目录。`ignore` 字段可以是一个字符串或字符串数组。`ignore` 字段中使用的模式遵循  `.gitignore` 的语法。

示例 `package.json`：
```json
{
  "name": "myApp",
  "version": "1.0.0",
  "description": "My fibjs application",
  "main": "index.js",
  "author": "Your Name",
  "license": "MIT",
  "ignore": [
    "path/to/ignore1",
    "path/to/ignore2",
    "*.log",
    "node_modules/"
  ]
}
```

这种选择性排除确保了只有必要的组件被包含在最终的可执行文件中，从而生成一个更干净、更高效的包。通过省略不必要的文件，fib-build 创建了一个轻量且高性能的可执行文件，准备在各种环境中部署。

## 常见问题及解决方案

### 在 macOS 上执行失败

如果在非 macOS 平台上创建的可执行文件在 macOS 上运行失败，通常是因为在其他操作系统上打包时应用程序未正确签名。macOS 要求应用程序签名以确保安全性和完整性。在 macOS 机器上打包可以确保应用程序正确签名，防止执行失败和安全警告。

如果遇到此问题，可以尝试使用以下命令手动签名应用程序：
```sh
codesign -s - myAppExecutable
```
此命令将签名 myAppExecutable，有助于解决 macOS 上的执行失败和安全警告。

### 输出文件在项目目录中

如果 `outfile` 参数设置为项目目录中的路径，生成的可执行文件将在下次打包过程中被包含。这会显著增加打包软件的大小。为避免此问题，建议指定项目目录外的输出路径。例如：

```sh
fibjs fbuild <folder> ../myAppExecutable
```

这确保了可执行文件保存在项目目录外，防止其被包含在后续的打包操作中。

### 应用程序压缩

要减少应用程序的大小，可以检查 fbuild 的输出。在构建过程中，fbuild 会以红色突出显示大于 16k 的文件，以黄色突出显示大于 4k 的文件。通过查看这些较大的文件，可以确定它们是否是运行时所必需的。如果它们不是必需的，可以删除它们并重新打包应用程序。这有助于创建一个更紧凑和高效的可执行文件。

此外，你可以在 `package.json` 中使用 `ignore` 字段来排除不必要的文件。`ignore` 字段支持类似 

.gitignore

 的模式匹配，允许你指定要排除的文件或目录。这可以显著减少最终可执行文件的大小。

带有 `ignore` 字段的示例 `package.json`：
```json
{
  "name": "myApp",
  "version": "1.0.0",
  "description": "My fibjs application",
  "main": "index.js",
  "author": "Your Name",
  "license": "MIT",
  "icon": "path/to/custom/icon.icns",
  "ignore": [
    "path/to/ignore1",
    "path/to/ignore2",
    "*.log",
    "node_modules/"
  ]
}
```

通过在 `ignore` 字段中指定不必要的文件，可以确保它们不被包含在最终包中，从而生成一个更高效和更小的可执行文件。

### 平台兼容性问题

尽管 fbuild 会自动检测平台兼容性并选择回退选项继续打包，但仍可能会出现意外的兼容性问题。如果打包文件崩溃或未按预期运行，可以手动添加 `--legacy` 选项，强制 fbuild 使用传统打包模式：

```sh
fibjs fbuild <folder> ../myAppExecutable --legacy
```

这有助于解决在某些平台上打包的应用程序无法正常运行的问题。

### 性能考虑

虽然打包简化了部署过程，但需要注意的是，由于需要在运行时解包和部署文件，可执行文件的初始加载时间可能会增加。为减轻这一问题，可以考虑优化应用程序的启动过程，并尽量减少需要解包的文件数量。

## 结论

fib-build 是一个强大的工具，可以简化 fibjs 应用程序的部署过程，使开发者能够轻松地在不同环境中分发和执行它们。通过遵循提供的步骤和建议，可以优化应用程序的部署过程，并提高其在各种环境中的适用性。

有关更详细的信息和高级功能，请参阅官方 fibjs 文档。通过这些资源，开发者可以更深入地了解如何有效利用 fib-build 来增强应用程序的可移植性和可用性。本指南概述了安装、使用步骤，并解决了常见问题，确保顺利的应用程序打包过程。无论你是经验丰富的开发者还是 fibjs 新手，了解 fib-build 的功能和特点将显著提升你的工作流程和应用程序的分发。

👉 【[fibjs 中 X509 证书的使用](x509.md)】