# Packaging and Releasing a fibjs Application

## Introduction

In software development, deploying applications across environments is a common challenge. fib-build is a powerful tool designed specifically for the fibjs environment, and it aims to simplify this process. It packages an application directory into a standalone executable, making fibjs applications easy to deploy and distribute. With fib-build, developers can generate a single executable that contains all dependencies and resource files. This eliminates the need for users to install fibjs separately and ensures that the application runs seamlessly on different systems. By simplifying the deployment process, fib-build improves efficiency and reduces the complexity of managing multiple environments.

## Main Features

### Comprehensive Single Executable

fib-build excels at creating a comprehensive single executable that contains the entire fibjs application. This includes not only the core application logic but also all related resource files and dependencies. By consolidating everything into a single executable, fib-build eliminates the need for users to manage complex environment setups or dependency installations. This feature significantly simplifies the deployment process, allowing users to run the application with a single command regardless of the underlying system configuration.

### Flexible Custom Base Executable

A standout feature of fib-build is its flexibility in specifying the base executable. Users can choose to use the current fibjs executable as the default base file, or specify a different executable suitable for various operating systems and architectures. This customization capability ensures that packaged applications can meet diverse deployment needs, improving their adaptability and usability in different environments. Whether targeting Windows, macOS, or Linux, fib-build provides the tools to create compatible and efficient executables.

### Strong Cross-Platform Compatibility

Although it is generally recommended to generate executables on the target operating system to avoid compatibility issues, fib-build supports cross-platform packaging. This feature is particularly beneficial for developers working in a macOS environment, because it ensures the stability and compatibility of executables on macOS systems. By leveraging the cross-platform capabilities of fib-build, developers can streamline their workflows and reduce the overhead of managing multiple development environments. This makes fib-build a valuable tool for teams that need to deploy cross-platform applications seamlessly.

### Automatic Fallback to Ensure Compatibility

By default, fib-build merges the executable and the packaged files by embedding resources. However, on some platforms (such as Linux MIPS, Linux Loong64, Alpine ARM64, and others), this approach may encounter compatibility issues. To solve this problem, fib-build automatically detects these incompatible platforms during the packaging process. When the target platform is one of them, it automatically falls back to the legacy mode, appending the packaged files to the end of the executable. This ensures better compatibility and reliability in different environments, making the deployment process smoother and more robust.

## Installation Steps

Before you start using fib-build, make sure fibjs is already installed on your system. If it is not installed yet, refer to the fibjs installation guide to set up the environment. Once fibjs is installed, navigate to your project directory and install fib-build with the following command:

```sh
cd your-project-directory
fibjs --install fib-build
```

## Usage

After installation, you can use fib-build from the command-line interface to package fibjs applications. The basic usage is as follows:

```sh
fibjs fbuild <folder> <outfile>
```

### Parameters

- `<folder>`: The directory containing the fibjs application. This is the root directory where your application code resides. It is usually the current directory (`.`), but you can also specify another directory to work with other projects.
- `<outfile>`: Required. Specifies the path where the executable is saved. It is recommended not to save the output file in the project directory, to avoid including it in the next packaging run. This specifies the output location and name of the generated executable.

### Optional Parameters

- `--execfile=<file>`: Specifies the base executable, for example a specific fibjs binary. By default, it uses the currently running executable. This option lets you customize the base binary used for packaging, which is very useful for compatibility with different operating systems or specific versions of fibjs.

- `--legacy`: Uses the legacy mode to append data to the end of the output file. This is useful when the embedded-resource mode encounters compatibility issues on some platforms. Packaging with the append method ensures better compatibility in different environments.

- `--gui`: Enables GUI mode. When this option is specified, the packaging process sets the executable's subsystem to GUI on Windows. On macOS, it automatically packages the application as a bundle. This is especially useful for applications that require a graphical user interface, ensuring that the executable runs correctly on different operating systems.

These parameters ensure the flexibility of the packaging process and allow it to be customized for different deployment requirements, making it easier to create optimized and portable fibjs applications.

## Examples

### Packaging a Simple fibjs Application

To package a simple fibjs application, assume that you are in the project directory containing the fibjs application and that you want to create an executable named myAppExecutable. You can do this by running the following command in your terminal:

```sh
cd your-project-directory
fibjs fbuild . ../myAppExecutable
```

This command packages the contents of the current directory into an executable named myAppExecutable.

### Using a Specified fibjs Executable

In some cases, you may want to use a different fibjs binary as the base of the executable. This is useful for ensuring compatibility with different operating systems or architectures. To specify a different fibjs binary, use the `--execfile` option:

```sh
cd your-project-directory
fibjs fbuild . ../myAppExecutable --execfile=path/to/other/fibjs
```

This command packages the current directory into an executable named myAppExecutable, using the fibjs binary located at path/to/other/fibjs.

### Using Legacy Mode

If the embedded-resource mode encounters compatibility issues on some platforms, you can use the `--legacy` option to append data to the end of the output file:

```sh
cd your-project-directory
fibjs fbuild . ../myAppExecutable --legacy
```

This command packages the contents of the current directory into an executable named myAppExecutable using legacy mode.

### Enabling GUI Mode

If your application requires a graphical user interface, you can use the `--gui` option to enable GUI mode. On Windows, this sets the executable's subsystem to GUI. On macOS, it automatically packages the application as a bundle. When packaging as a bundle on macOS, `fbuild` uses the basic information in `package.json` to create the bundle. By default, `fbuild` sets a default icon for the bundle. If you want to specify a custom icon, you can add an `icon` field to `package.json` pointing to your custom icon file.

Example command:
```sh
cd your-project-directory
fibjs fbuild . ../myAppExecutable --gui
```
Example `package.json`:
```json
{
  "name": "myApp",
  "version": "1.0.0",
  "description": "My fibjs application",
  "main": "index.js",
  "author": "Your Name",
  "license": "MIT",
  "icon": "path/to/custom/icon.icns"
}
```

This command packages the contents of the current directory into an executable named myAppExecutable with GUI mode enabled. On macOS, it creates a bundle using the information in `package.json` and sets the custom icon specified in the `icon` field.

## File Ignore Rules

During the build process, fib-build optimizes packaging by excluding certain files. Specifically, it ignores:

- Files in directories that start with a dot (.), such as .git or .env.
- Files located in the fib-build module directory.
- Files located in the fib-inject module directory.

You can add an `ignore` field to `package.json` to specify additional files or directories to exclude. The `ignore` field can be a string or an array of strings. The patterns used in the `ignore` field follow the syntax of `.gitignore`.

Example `package.json`:
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

This selective exclusion ensures that only the necessary components are included in the final executable, producing a cleaner and more efficient package. By omitting unnecessary files, fib-build creates a lightweight, high-performance executable that is ready to be deployed in various environments.

## Common Issues and Solutions

### Execution Fails on macOS

If an executable created on a non-macOS platform fails to run on macOS, it is usually because the application was not signed correctly when it was packaged on the other operating system. macOS requires applications to be signed to ensure security and integrity. Packaging on a macOS machine ensures that the application is signed correctly, preventing execution failures and security warnings.

If you encounter this problem, you can try signing the application manually with the following command:
```sh
codesign -s - myAppExecutable
```
This command signs myAppExecutable and helps resolve execution failures and security warnings on macOS.

### Output File Inside the Project Directory

If the `outfile` parameter is set to a path inside the project directory, the generated executable will be included in the next packaging run. This significantly increases the size of the packaged software. To avoid this problem, specify an output path outside the project directory. For example:

```sh
fibjs fbuild <folder> ../myAppExecutable
```

This ensures that the executable is saved outside the project directory, preventing it from being included in subsequent packaging operations.

### Application Compression

To reduce the size of your application, you can examine the output of fbuild. During the build process, fbuild highlights files larger than 16k in red and files larger than 4k in yellow. By looking at these larger files, you can determine whether they are needed at runtime. If they are not needed, you can delete them and repackage the application. This helps create a more compact and efficient executable.

In addition, you can use the `ignore` field in `package.json` to exclude unnecessary files. The `ignore` field supports pattern matching syntax like

.gitignore

, which lets you specify files or directories to exclude. This can significantly reduce the size of the final executable.

Example `package.json` with an `ignore` field:
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

By specifying unnecessary files in the `ignore` field, you can ensure that they are not included in the final package, producing a more efficient and smaller executable.

### Platform Compatibility Issues

Although fbuild automatically detects platform compatibility and chooses a fallback option so that packaging can continue, unexpected compatibility issues may still occur. If the packaged file crashes or does not run as expected, you can manually add the `--legacy` option to force fbuild to use the legacy packaging mode:

```sh
fibjs fbuild <folder> ../myAppExecutable --legacy
```

This helps resolve problems where applications packaged on certain platforms do not run correctly.

### Performance Considerations

Although packaging simplifies the deployment process, note that the initial loading time of the executable may increase because files must be unpacked and deployed at runtime. To mitigate this, consider optimizing the startup process of your application and minimizing the number of files that need to be unpacked.

## Conclusion

fib-build is a powerful tool that simplifies the deployment of fibjs applications, enabling developers to distribute and run them easily in different environments. By following the steps and suggestions provided here, you can optimize your application's deployment process and improve its suitability in various environments.

For more detailed information and advanced features, refer to the official fibjs documentation. Through these resources, developers can gain a deeper understanding of how to effectively use fib-build to enhance the portability and usability of their applications. This guide has outlined the installation and usage steps and addressed common issues to ensure a smooth application packaging process. Whether you are an experienced developer or new to fibjs, understanding the capabilities and features of fib-build will significantly improve your workflow and the distribution of your applications.

👉 [Using X509 Certificates in fibjs](x509.md)
