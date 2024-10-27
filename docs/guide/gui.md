# fibjs 桌面应用开发指南

## 简介

fibjs 是一个高效的 JavaScript 运行时，专为高性能服务器和桌面应用开发而设计。它基于 V8 引擎，提供了丰富的内置模块和强大的异步编程能力，使开发者能够轻松构建高效、稳定的应用程序。fibjs 的设计理念是简化开发流程，提高开发效率，同时保持高性能和低资源消耗。

在桌面应用开发方面，fibjs 提供了一个名为 `gui` 的模块，允许开发者使用 JavaScript 直接创建和操作桌面窗口。这使得开发者可以利用现有的 JavaScript 知识和工具链，快速构建跨平台的桌面应用程序。`gui` 模块支持创建 WebView 窗口、与 WebView 内的 JavaScript 进行通讯、处理各种窗口事件、创建菜单和状态图标等功能。

WebView 是 fibjs 中的一个核心组件，它是一个嵌入浏览器的窗口组件，允许开发者加载和显示网页内容。通过 WebView，开发者可以将现有的 Web 应用程序嵌入到桌面应用中，或者使用 HTML、CSS 和 JavaScript 构建新的用户界面。WebView 支持与宿主程序进行通讯，这意味着开发者可以在 WebView 内部的 JavaScript 和 fibjs 的 JavaScript 之间传递消息，实现复杂的交互功能。

除了 WebView，fibjs 还提供了丰富的窗口事件处理功能。开发者可以监听窗口的加载、移动、尺寸改变、获得焦点、失去焦点、关闭等事件，并在这些事件发生时执行相应的处理逻辑。这使得开发者可以精细控制窗口的行为和用户体验。

在菜单和状态图标方面，fibjs 提供了灵活的 API，允许开发者创建和管理应用程序的菜单和状态图标。菜单项支持多种类型，包括普通项、复选框、子菜单和分隔符，开发者可以根据需要自由组合这些菜单项。状态图标则可以显示在系统托盘中，支持设置图标、标题、提示信息和菜单。

fibjs 是一个功能强大且易于使用的 JavaScript 运行时，特别适合用于开发高性能的服务器和桌面应用。它的 `gui` 模块提供了丰富的桌面应用开发功能，使开发者能够快速构建跨平台的桌面应用程序。通过 fibjs，开发者可以充分利用 JavaScript 的灵活性和高效性，构建出功能丰富、性能优越的桌面应用。如果您对桌面应用开发感兴趣，fibjs 将是一个值得尝试的工具。

## 环境配置

在开始开发之前，请确保已安装 `fibjs`。

## 创建 WebView 窗口

在 fibjs 中，`WebView` 是一个嵌入浏览器的窗口组件。通过 `gui` 模块，我们可以轻松地创建一个 WebView 窗口并加载指定的 URL。以下是详细的步骤和示例代码。

### 基本用法

首先，我们需要引入 `gui` 模块。然后，我们可以使用 `gui.open` 方法来创建一个 WebView 窗口并加载指定的 URL。以下是一个简单的示例：

```javascript
var gui = require('gui');
var webview = gui.open('https://fibjs.org/index.html');
```

在这个示例中，我们创建了一个 WebView 窗口，并将其加载到 `https://fibjs.org/index.html`。这个窗口将显示指定的网页内容。

### 高级用法

`gui.open` 方法不仅可以接受一个 URL 参数，还可以接受一个可选的配置对象。这个配置对象允许我们自定义窗口的各种属性，例如大小、位置、是否可见等。以下是一个更复杂的示例：

```javascript
var gui = require('gui');
var options = {
    icon: '/path/to/icon.png',
    left: 100,
    top: 100,
    width: 800,
    height: 600,
    visible: true,
    resizable: true,
    fullscreen: false,
    devtools: true
};
var webview = gui.open('https://fibjs.org/index.html', options);
```

在这个示例中，我们创建了一个 WebView 窗口，并将其加载到 `https://fibjs.org/index.html`。同时，我们还指定了一些窗口属性，例如图标、位置、大小、是否可见、是否可调整大小、是否全屏以及是否启用开发者工具。

### 配置选项

以下是 `gui.open` 方法支持的所有配置选项：

- `icon`: 指定窗口的图标（不支持 gtk4）
- `left`: 指定窗口的左侧位置（不支持 gtk4）
- `top`: 指定窗口的顶部位置（不支持 gtk4）
- `width`: 指定窗口的宽度
- `height`: 指定窗口的高度
- `visible`: 指定窗口是否可见，默认值为 `true`
- `hideOnClose`: 指定窗口关闭时是否隐藏，默认值为 `false`
- `minWidth`: 指定窗口的最小宽度，默认值为 `0`
- `minHeight`: 指定窗口的最小高度，默认值为 `0`
- `maxWidth`: 指定窗口的最大宽度，默认值为无限制
- `maxHeight`: 指定窗口的最大高度，默认值为无限制
- `frame`: 指定窗口是否有边框，默认值为 `true`
- `caption`: 指定窗口是否有标题栏，默认值为 `true`
- `resizable`: 指定窗口是否可调整大小，默认值为 `true`
- `menu`: 指定窗口的菜单，可以是一个 `Menu` 对象或一个菜单项数组，默认值为 `null`
- `maximize`: 指定窗口是否最大化，默认值为 `false`
- `fullscreen`: 指定窗口是否全屏，默认值为 `false`
- `devtools`: 指定是否启用 WebView 的开发者工具，默认值为 `false`

### 自动居中

当我们设置了 `width` 和 `height`，但没有设置 `left` 或 `top` 时，窗口将自动居中显示。这对于希望窗口在屏幕中央显示的情况非常有用。


## 与 WebView 通讯

由于 WebView 内的 JavaScript 程序与 fibjs 并不在同一个引擎内，所以如果需要与宿主程序进行通讯，需要通过消息进行。WebView 用于通讯的对象是 `window`，支持方法 `postMessage` 和 `message` 事件。

### 示例代码

```javascript
// index.js
var gui = require('gui');
var webview = gui.open('https://fibjs.org/index.html');

webview.addEventListener("message", function (msg) { console.log(msg); });

webview.postMessage("hello from fibjs");
```

在 `index.html` 中：

```html
<script>
    window.addEventListener("message", function (msg) { 
        window.postMessage("send back: " + msg);
    });
</script>
```

## 窗口事件处理

WebView 支持多种事件处理，包括窗口加载、移动、尺寸改变、获得焦点、失去焦点、关闭等事件。可以通过以下代码绑定事件处理函数：

```javascript
webview.onloading = function(evt) {
    console.log("Loading: " + evt.url);
};

webview.onload = function(evt) {
    console.log("Loaded: " + evt.url);
};

webview.onmove = function(evt) {
    console.log("Moved to: " + evt.left + ", " + evt.top);
};

webview.onresize = function(evt) {
    console.log("Resized to: " + evt.width + ", " + evt.height);
};

webview.onfocus = function(evt) {
    console.log("Window focused");
};

webview.onblur = function(evt) {
    console.log("Window blurred");
};

webview.onclose = function(evt) {
    console.log("Window closed");
};

webview.onmessage = function(evt) {
    console.log("Message received: " + evt.data);
};
```

## 窗口操作

WebView 提供了多种窗口操作方法，包括加载 URL、加载文件、设置 HTML 内容、刷新页面、前进后退、执行 JavaScript 代码等。

### 加载 URL

```javascript
webview.loadUrl("https://fibjs.org");
```

### 加载文件

```javascript
webview.loadFile("path/to/file.html");
```

### 设置 HTML 内容

```javascript
webview.setHtml("<html><body><h1>Hello, fibjs!</h1></body></html>");
```

### 刷新页面

```javascript
webview.reload();
```

### 前进后退

```javascript
webview.goBack();
webview.goForward();
```

### 执行 JavaScript 代码

```javascript
webview.eval("alert('Hello from fibjs');");
```
## 创建菜单

在 fibjs 中，可以使用 `gui.createMenu` 方法创建一个菜单对象。菜单项支持以下类型：

- normal
    - type: "normal"
    - label: 必需
    - tooltip, icon, enabled: 可选
    - 不能有 submenu 或 checked
- checkbox
    - type: "checkbox"
    - label: 必需
    - checked: 可选
    - tooltip, icon, enabled: 可选
    - 不能有 submenu
- submenu
    - type: "submenu"
    - label, submenu: 必需
    - tooltip, icon, enabled: 可选
    - 不能有 checked
- separator
    - type: "separator"
    - 不能有 label、submenu、checked、icon 或 tooltip

如果菜单项未指定 type，则根据其它属性自动判断类型。识别策略如下：
- 如果存在 submenu 属性，则将 type 设置为 "submenu"。
- 如果存在 checked 属性，则将 type 设置为 "checkbox"。
- 如果传入的对象为空，则将 type 设置为 "separator"。
- 如果以上条件都不满足，则将 type 设置为 "normal"。

### 示例代码

```javascript
var gui = require('gui');

var menu = gui.createMenu([
    { type: "normal", label: "Item 1", onclick: function() { 
        console.log("Item 1 clicked"); 
        this.label = "Item 1 (clicked)"; // 修改标签
    } },
    { type: "checkbox", label: "Item 2", checked: true, onclick: function() { 
        console.log("Item 2 clicked"); 
        // checked 属性会自动切换，无需手动修改
    } },
    { type: "submenu", label: "Submenu", submenu: [
        { type: "normal", label: "Subitem 1", onclick: function() { 
            console.log("Subitem 1 clicked"); 
            this.enabled = false; // 禁用菜单项
        } },
        { type: "separator" },
        { type: "normal", label: "Subitem 2", onclick: function() { 
            console.log("Subitem 2 clicked"); 
            this.tooltip = "This is Subitem 2"; // 修改提示信息
        } }
    ]},
    { type: "separator" },
    { type: "normal", label: "Item 3", onclick: function() { 
        console.log("Item 3 clicked"); 
        this.icon = "new-icon.png"; // 修改图标
    } }
]);
```

在这个示例中，我们展示了如何在 `onclick` 事件处理函数中通过 `this` 修改菜单项的属性。修改后，菜单将会被同步更新：

- 修改 `label` 属性。
- 切换 `checked` 状态（`checked` 属性会自动切换，无需手动修改）。
- 禁用菜单项。
- 修改 `tooltip` 提示信息。
- 修改 `icon` 图标。

### 动态操作菜单项

我们还可以动态地添加、插入和移除菜单项。以下是一些示例代码：

```javascript
var gui = require('gui');

var menu = gui.createMenu([
    { label: "File", submenu: [] },
    { label: "Edit", submenu: [] },
    { label: "Help", submenu: [] }
]);

// 添加菜单项
menu.append({ label: "New", onclick: function() { console.log(this.label + " clicked"); } });

// 插入菜单项
menu.insert(1, { label: "Open", onclick: function() { console.log(this.label + " clicked"); } });

// 移除菜单项
menu.remove(2);
```

在这个示例中，我们首先创建了一个包含三个子菜单的菜单对象。然后，我们使用 `menu.append` 方法添加了一个新的菜单项，使用 `menu.insert` 方法在指定位置插入了一个菜单项，最后使用 `menu.remove` 方法移除了一个菜单项。

需要注意，添加和删除菜单项仅在菜单对象绑定到 `window` 或者 `tray` 之前有效。

通过这些方法，我们可以灵活地操作菜单项，满足不同的需求。希望通过以上的介绍，您能更好地理解和使用 `gui.createMenu` 方法来创建和管理菜单。

## 创建状态图标

在 fibjs 中，可以使用 `gui.createTray` 方法创建一个状态图标对象。支持以下参数：

```javascript
{
    "icon": "/path/to/file.png", // specify the icon of the tray, must be a png file
    "title": "", // specify the title of the tray, if not set, it will not be displayed
    "tooltip": "", // specify the tooltip of the tray, if not set, it will not be displayed
    "menu": menu, // specify the menu of the tray, default is null
}
```

### 示例代码

```javascript
var gui = require('gui');

var tray = gui.createTray({
    icon: "/path/to/icon.png",
    title: "Tray Title",
    tooltip: "Tray Tooltip",
    menu: gui.createMenu([
        { type: "normal", label: "Item 1", onclick: function() { console.log("Item 1 clicked"); } },
        { type: "normal", label: "Item 2", onclick: function() { console.log("Item 2 clicked"); } }
    ])
});
```

## 综合示例

以下是一个完整的示例代码，展示了如何创建一个 WebView 窗口、加载 URL、与 WebView 通讯、处理窗口事件、创建菜单和状态图标：

```javascript
const gui = require("gui");
const path = require("path");
const coroutine = require("coroutine");

const wins = {};

const tray = gui.createTray({
    icon: path.resolve(__dirname, "icon.png"),
    menu: [
        {
            label: "github",
            onclick: function () {
                if (wins.github)
                    wins.github.active();
                else {

                    wins.github = gui.open("https://github.com/fibjs", {
                        width: 500,
                        height: 400,
                        onclose: function () {
                            delete wins.github;
                        },
                        onmove: function (ev) {
                            console.log("move", ev.left, ev.top);
                        }
                    });
                }
            }
        },
        {
            label: "frame",
            onclick: function () {
                if (wins.fibjs) {
                    wins.fibjs.show();
                    wins.fibjs.active();
                }
                else {
                    wins.fibjs = gui.open({
                        file: path.join(__dirname, "frame.html"),
                        width: 500,
                        height: 400,
                        minWidth: 300,
                        minHeight: 200,
                        maxWidth: 800,
                        caption: false,
                        hideOnClose: true
                    });
                }
            }
        },
        {
            label: "alert",
            onclick: function () {
                gui.alert("Hello World", "Hello World, this a message.");
            }
        },
        {
            label: "confirm",
            onclick: function () {
                console.log(gui.confirm("Confirm", "Do you want to exit?"));
            }
        },
        {
            label: "Exit",
            onclick: function () {
                tray.close();
                if (wins.fibjs)
                    wins.fibjs.close();
                if (wins.github)
                    wins.github.close();
            }
        }
    ]
});
```

### 创建托盘图标和菜单

首先，代码通过 `gui.createTray` 方法创建了一个托盘图标，并为其设置了一个菜单。托盘图标的 `icon` 属性指定了图标文件的路径，`menu` 属性则定义了托盘图标的右键菜单。

### 菜单项 "github"

菜单项 "github" 的 `onclick` 事件处理函数用于打开一个新的窗口，加载 GitHub 的 URL。如果窗口已经存在，则激活该窗口；否则，创建一个新的窗口。窗口的 `onclose` 事件处理函数在窗口关闭时删除对应的窗口对象，`onmove` 事件处理函数在窗口移动时输出窗口的新位置。

### 菜单项 "frame"

菜单项 "frame" 的 `onclick` 事件处理函数用于打开一个本地 HTML 文件。如果窗口已经存在，则显示并激活该窗口；否则，创建一个新的窗口。窗口的 `hideOnClose` 属性设置为 `true`，表示窗口关闭时不会销毁，而是隐藏起来。

### 菜单项 "alert"

菜单项 "alert" 的 `onclick` 事件处理函数用于显示一个警告框，内容为 "Hello World"。

### 菜单项 "confirm"

菜单项 "confirm" 的 `onclick` 事件处理函数用于显示一个确认框，询问用户是否要退出，并在控制台输出用户的选择。

### 菜单项 "Exit"

菜单项 "Exit" 的 `onclick` 事件处理函数用于关闭托盘图标和所有打开的窗口。

## `hideOnClose`

在上述示例代码中，`hideOnClose` 是一个布尔值属性，用于控制窗口关闭时的行为。如果设置为 `true`，窗口在关闭时不会真正销毁，而是隐藏起来。可以通过调用 `show()` 方法重新显示窗口。

```javascript
wins.fibjs = gui.open({
    file: path.join(__dirname, "frame.html"),
    width: 500,
    height: 400,
    minWidth: 300,
    minHeight: 200,
    maxWidth: 800,
    caption: false,
    hideOnClose: true // 窗口关闭时隐藏而不是销毁
});
```

### 详细解释

在上述示例代码中，`hideOnClose` 属性被设置为 `true`，这意味着当用户关闭窗口时，窗口不会被销毁，而是被隐藏。这样做的好处是，当用户再次需要该窗口时，可以快速重新显示，而不需要重新创建窗口及其内容。

### 使用场景

1. **提高性能**：
   - **避免重复创建**：在某些应用中，窗口的创建和销毁可能涉及大量的资源加载和初始化工作。如果频繁地创建和销毁窗口，会导致性能下降。通过隐藏窗口而不是销毁，可以避免这些开销。
   - **快速响应**：隐藏窗口后，重新显示窗口的速度会比重新创建窗口快得多，从而提高用户体验。

2. **保持状态**：
   - **保存用户数据**：隐藏窗口时，窗口内的状态和数据会被保留。当用户重新打开窗口时，可以继续之前的操作，而不需要重新加载数据或重新设置状态。
   - **多任务处理**：在多窗口应用中，用户可能会在不同窗口之间切换。隐藏窗口可以让用户在需要时快速切换回之前的任务，而不需要重新启动任务。

3. **用户体验**：
   - **系统托盘应用**：对于一些系统托盘应用，用户可能希望关闭窗口后，应用仍然在后台运行，并且可以通过系统托盘图标重新打开窗口。此时，使用 `hideOnClose` 可以实现这种需求。
   - **临时隐藏**：有些应用可能需要临时隐藏窗口，而不是完全退出。例如，用户可能需要暂时隐藏窗口以专注于其他任务，然后再重新打开窗口继续使用。

### 具体示例

假设我们有一个聊天应用，当用户关闭聊天窗口时，我们希望窗口被隐藏，而不是销毁。这样，当用户再次打开聊天窗口时，可以立即看到之前的聊天记录和状态。

```javascript
const chatWindow = gui.open({
    file: path.join(__dirname, "chat.html"),
    width: 600,
    height: 400,
    hideOnClose: true // 窗口关闭时隐藏而不是销毁
});

const tray = gui.createTray({
    icon: path.resolve(__dirname, "tray_icon.png"),
    menu: [
        {
            label: "Open Chat",
            onclick: function() {
                chatWindow.show();
                chatWindow.active();
            }
        },
        {
            label: "Exit",
            onclick: function() {
                tray.close();
                chatWindow.close();
            }
        }
    ]
});
```

通过以上示例，我们可以看到 `hideOnClose` 属性在提高性能、保持状态和改善用户体验方面的价值。它使得应用在处理窗口关闭事件时更加灵活和高效。

## 使用 WebView 进行网页自动处理

WebView 不仅可以用来显示网页，还可以用于网页自动处理任务。通过合理使用 WebView 的 `visible` 属性，我们可以在后台打开 WebView，并缓存起来复用，以加快访问速度和节省系统资源。

### WebView 的 `visible` 属性

WebView 的 `visible` 属性用于控制 WebView 窗口的可见性。当 `visible` 设置为 `false` 时，WebView 窗口将被隐藏，但仍然在后台运行。这意味着我们可以在后台加载网页、执行 JavaScript 代码、处理网页事件等，而不需要显示 WebView 窗口。

### 背景加载和缓存 WebView

在进行网页自动处理时，我们可以在后台加载 WebView，并将其缓存起来，以便在需要时快速复用。这种方法可以显著提高访问速度，并减少系统资源的消耗。以下是一个示例代码，展示了如何在后台加载 WebView，并缓存起来复用：

```javascript
const gui = require('gui');
const coroutine = require('coroutine');

let webviewPool = [];

function createWebView(url) {
    let webview = gui.open(url, { visible: false });

    webview.onloading = function(evt) {
        console.log("Loading: " + evt.url);
    };

    webview.onload = function(evt) {
        console.log("Loaded: " + evt.url);
    };

    webview.onclose = function(evt) {
        console.log("Window closed");
    };

    return webview;
}

function getWebView(url) {
    if (webviewPool.length > 0) {
        const webview = webviewPool.pop();
        webview.loadUrl(url);
        return webview;
    }
    return createWebView(url);
}

function releaseWebView(webview) {
    webviewPool.push(webview);
}

function performTask(url, task) {
    let webview = getWebView(url);

    webview.onload = function(evt) {
        task(webview);
        releaseWebView(webview);
    };
}

// 示例任务：在网页中执行 JavaScript 代码
function exampleTask(webview) {
    webview.eval("console.log('Hello from fibjs');");
}

// 使用示例
performTask('https://example.com', exampleTask);
```

### 详细解释

1. **创建 WebView**：
   - `createWebView` 函数用于创建一个新的 WebView，并设置其 `visible` 属性为 `false`，使其在后台运行。
   - 在 WebView 的 `onloading`、`onload` 和 `onclose` 事件中，我们可以添加相应的处理逻辑。

2. **获取 WebView**：
   - `getWebView` 函数用于从池中获取一个空闲的 WebView。如果池中没有空闲的 WebView，则创建一个新的 WebView。

3. **释放 WebView**：
   - `releaseWebView` 函数用于将使用完的 WebView 放回池中，以便下次复用。

4. **执行任务**：
   - `performTask` 函数用于在指定的 URL 上执行任务。它首先获取一个空闲的 WebView，然后在 `onload` 事件中执行任务，并在任务完成后释放 WebView。
   - 示例任务 `exampleTask` 在网页中执行了一段 JavaScript 代码。

### 优化访问速度和节省系统资源

通过在后台加载和缓存 WebView，我们可以显著提高访问速度，并减少系统资源的消耗。这种方法特别适用于需要频繁访问多个网页的场景，例如网页抓取、自动化测试等。

### 实际应用场景

1. **网页抓取**：
   - 在进行网页抓取时，我们可以在后台加载多个 WebView，并缓存起来复用。这样可以避免重复加载相同的网页，提高抓取效率。

2. **自动化测试**：
   - 在进行自动化测试时，我们可以在后台加载测试网页，并在不同的测试用例中复用相同的 WebView。这样可以减少测试时间，并提高测试效率。

3. **数据处理**：
   - 在进行数据处理时，我们可以在后台加载数据源网页，并在不同的数据处理任务中复用相同的 WebView。这样可以减少数据加载时间，并提高数据处理效率。

### 代码示例：网页抓取

以下是一个网页抓取的示例代码，展示了如何在后台加载和缓存 WebView，并进行网页抓取：

```javascript
const gui = require('gui');
const coroutine = require('coroutine');

let webviewPool = [];

function createWebView(url) {
    let webview = gui.open(url, { visible: false });

    webview.onloading = function(evt) {
        console.log("Loading: " + evt.url);
    };

    webview.onload = function(evt) {
        console.log("Loaded: " + evt.url);
    };

    webview.onclose = function(evt) {
        console.log("Window closed");
    };

    return webview;
}

function getWebView(url) {
    if (webviewPool.length > 0) {
        const webview = webviewPool.pop();
        webview.loadUrl(url);
        return webview;
    }
    return createWebView(url);
}

function releaseWebView(webview) {
    webviewPool.push(webview);
}

function scrapePage(url, callback) {
    let webview = getWebView(url);

    webview.onload = function(evt) {
        callback(webview.eval("document.documentElement.outerHTML"));
        releaseWebView(webview);
    };
}

// 使用示例
scrapePage('https://example.com', function(html) {
    console.log(html);
});
```

### 详细解释

1. **创建 WebView**：
   - `createWebView` 函数用于创建一个新的 WebView，并设置其 `visible` 属性为 `false`，使其在后台运行。
   - 在 WebView 的 `onloading`、`onload` 和 `onclose` 事件中，我们可以添加相应的处理逻辑。

2. **获取 WebView**：
   - `getWebView` 函数用于从池中获取一个空闲的 WebView。如果池中没有空闲的 WebView，则创建一个新的 WebView。

3. **释放 WebView**：
   - `releaseWebView` 函数用于将使用完的 WebView 放回池中，以便下次复用。

4. **网页抓取**：
   - `scrapePage` 函数用于抓取指定 URL 的网页内容。它首先获取一个空闲的 WebView，然后在 `onload` 事件中执行抓取任务，并在任务完成后释放 WebView。
   - 在抓取任务中，我们使用 `eval` 方法执行 JavaScript 代码，获取网页的 HTML 内容，并通过回调函数返回抓取结果。

### 优化建议

1. **缓存管理**：
   - 在实际应用中，我们需要管理 WebView 缓存，以避免缓存过多的 WebView 占用系统资源。可以设置缓存大小限制，并在缓存超出限制时清理旧的 WebView。

2. **错误处理**：
   - 在进行网页抓取时，我们需要处理可能出现的错误，例如网页加载失败、JavaScript 执行错误等。可以在 WebView 的 `onerror` 事件中添加错误处理逻辑。

3. **并发控制**：
   - 在进行大规模网页抓取时，我们需要控制并发数量，以避免过多的并发请求导致系统资源耗尽。可以使用协程或其他并发控制机制，限制同时进行的抓取任务数量。

### 代码示例：并发控制

以下是一个带有并发控制的网页抓取示例代码，展示了如何控制并发数量：

```javascript
const gui = require('gui');
const coroutine = require('coroutine');

let webviewPool = [];
let maxConcurrentTasks = 5;
let currentTasks = 0;
let taskQueue = [];

function createWebView(url) {
    let webview = gui.open(url, { visible: false });

    webview.onloading = function(evt) {
        console.log("Loading: " + evt.url);
    };

    webview.onload = function(evt) {
        console.log("Loaded: " + evt.url);
    };

    webview.onclose = function(evt) {
        console.log("Window closed");
    };

    return webview;
}

function getWebView(url) {
    if (webviewPool.length > 0) {
        const webview = webviewPool.pop();
        webview.loadUrl(url);
        return webview;
    }
    return createWebView(url);
}

function releaseWebView(webview) {
    webviewPool.push(webview);
}

function scrapePage(url, callback) {
    if (currentTasks >= maxConcurrentTasks) {
        taskQueue.push({ url, callback });
        return;
    }

    currentTasks++;
    let webview = getWebView(url);

    webview.onload = function(evt) {
        callback(webview.eval("document.documentElement.outerHTML"));

        currentTasks--;
        releaseWebView(webview);
        if (taskQueue.length > 0) {
            let nextTask = taskQueue.shift();
            scrapePage(nextTask.url, nextTask.callback);
        }
    };
}

// 使用示例
scrapePage('https://example.com', function(html) {
    console.log(html);
});
```

### 详细解释

1. **并发控制**：
   - `maxConcurrentTasks` 变量用于设置最大并发任务数量。
   - `currentTasks` 变量用于记录当前正在进行的任务数量。
   - `taskQueue` 数组用于存储等待执行的任务。

2. **任务队列**：
   - 在 `scrapePage` 函数中，如果当前任务数量达到最大并发任务数量，则将任务添加到任务队列中。
   - 在任务完成后，从任务队列中取出下一个任务并执行。

通过以上方法，我们可以在进行网页自动处理时，合理使用 WebView 的 `visible` 属性，优化访问速度和节省系统资源。同时，通过缓存管理、错误处理和并发控制，可以进一步提高网页自动处理的效率和稳定性。

👉 【[打包发布  fibjs 应用](build.md)】