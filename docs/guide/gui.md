# fibjs Desktop Application Development Guide

## Introduction

fibjs is a high-performance JavaScript runtime designed for high-performance servers and desktop application development. Built on the V8 engine, it provides a rich set of built-in modules and powerful asynchronous programming capabilities, enabling developers to easily build efficient and stable applications. The design philosophy of fibjs is to simplify the development process and improve development efficiency while maintaining high performance and low resource consumption.

For desktop application development, fibjs provides a module named `gui` that allows developers to create and operate desktop windows directly with JavaScript. This lets developers use their existing JavaScript knowledge and toolchain to quickly build cross-platform desktop applications. The `gui` module supports creating WebView windows, communicating with the JavaScript inside a WebView, handling various window events, and creating menus and status icons.

WebView is a core component in fibjs. It is a window component with an embedded browser that allows developers to load and display web content. With WebView, developers can embed existing web applications into desktop applications, or build new user interfaces with HTML, CSS, and JavaScript. WebView supports communication with the host program, which means developers can pass messages between the JavaScript inside the WebView and the JavaScript in fibjs to implement complex interactions.

In addition to WebView, fibjs also provides rich window event handling capabilities. Developers can listen for events such as window loading, moving, resizing, gaining focus, losing focus, and closing, and execute the corresponding logic when these events occur. This gives developers fine-grained control over window behavior and user experience.

For menus and status icons, fibjs provides flexible APIs that allow developers to create and manage application menus and status icons. Menu items support multiple types, including normal items, checkboxes, submenus, and separators, and developers can freely combine them as needed. Status icons can be displayed in the system tray and support setting the icon, title, tooltip, and menu.

fibjs is a powerful and easy-to-use JavaScript runtime, especially well suited for developing high-performance servers and desktop applications. Its `gui` module provides rich desktop application development features, enabling developers to quickly build cross-platform desktop applications. With fibjs, developers can take full advantage of the flexibility and efficiency of JavaScript to build feature-rich, high-performance desktop applications. If you are interested in desktop application development, fibjs is a tool worth trying.

## Environment Configuration

Before you start developing, make sure `fibjs` is installed.

## Creating a WebView Window

In fibjs, `WebView` is a window component with an embedded browser. Through the `gui` module, we can easily create a WebView window and load a specified URL. The following sections describe the detailed steps with example code.

### Basic Usage

First, we need to require the `gui` module. Then we can use the `gui.open` method to create a WebView window and load the specified URL. Here is a simple example:

```javascript
var gui = require('gui');
var webview = gui.open('https://fibjs.org/index.html');
```

In this example, we create a WebView window and load `https://fibjs.org/index.html` into it. This window displays the content of the specified web page.

### Advanced Usage

The `gui.open` method not only accepts a URL argument but also accepts an optional configuration object. This configuration object lets us customize various window attributes, such as size, position, and visibility. Here is a more complex example:

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

In this example, we create a WebView window and load `https://fibjs.org/index.html` into it. We also specify several window attributes, such as the icon, position, size, visibility, resizability, fullscreen mode, and whether developer tools are enabled.

### Configuration Options

The following are all the configuration options supported by the `gui.open` method:

- `icon`: specifies the icon of the window (not supported on gtk4)
- `left`: specifies the left position of the window (not supported on gtk4)
- `top`: specifies the top position of the window (not supported on gtk4)
- `width`: specifies the width of the window
- `height`: specifies the height of the window
- `visible`: specifies whether the window is visible; the default is `true`
- `hideOnClose`: specifies whether to hide the window on close; the default is `false`
- `minWidth`: specifies the minimum width of the window; the default is `0`
- `minHeight`: specifies the minimum height of the window; the default is `0`
- `maxWidth`: specifies the maximum width of the window; the default is unlimited
- `maxHeight`: specifies the maximum height of the window; the default is unlimited
- `frame`: specifies whether the window has a border; the default is `true`
- `caption`: specifies whether the window has a title bar; the default is `true`
- `resizable`: specifies whether the window is resizable; the default is `true`
- `menu`: specifies the menu of the window; it can be a `Menu` object or an array of menu items; the default is `null`
- `maximize`: specifies whether the window is maximized; the default is `false`
- `fullscreen`: specifies whether the window is fullscreen; the default is `false`
- `devtools`: specifies whether to enable the WebView developer tools; the default is `false`
- `app`: specifies the object used for API calls inside the WebView; it is an object containing a set of methods and sub-objects; the default is undefined

### Automatic Centering

When we set `width` and `height` but do not set `left` or `top`, the window is automatically centered. This is useful when you want the window to appear in the center of the screen.


## Communicating with the WebView

Because the JavaScript running inside the WebView is not in the same engine as fibjs, communication with the host program must be done through messages. The object used for communication in the WebView is `window`, which supports the `postMessage` method and the `message` event.

### Example Code

```javascript
// index.js
var gui = require('gui');
var webview = gui.open('https://fibjs.org/index.html');

webview.addEventListener("message", function (msg) { console.log(msg); });

webview.postMessage("hello from fibjs");
```

In `index.html`:

```html
<script>
    window.addEventListener("message", function (msg) { 
        window.postMessage("send back: " + msg);
    });
</script>
```

#### app API Interface

WebView supports a more convenient app API interface. The object used for API calls inside the WebView is `window.app`. You can specify the API interface with the `app` argument when creating the WebView, and the methods of the API interface can be called inside the WebView through `await window.app...`.

The following is a simple example:
```javascript
const gui = require('gui');
const coroutine = require('coroutine');

const win = gui.open({
    devtools: true,
    app: {
        test: async function (a, b, c, d) {
            console.log('test', a, b, c, d);
            await coroutine.sleepAsync(1000);
            return a + b + c + d + 1000;
        },
        test1: {
            test2: function (a, b, c, d) {
                console.log('test2', a, b, c, d);
                coroutine.sleep(1000);
                return a + b + c + d + 2000;
            }
        }
    }
});

win.eval(`
(async function test() {
    console.log("test(1,2,3,4): " + await window.app.test(1,2,3,4));
    console.log("test1.test2(1,2,3,4): " + await window.app.test1.test2(1,2,3,4));
    console.log('test');
})();
```

#### Closing the Window

To close the window from inside the WebView, call `window.close`. Note that on macOS, a fullscreen window will be prevented from closing due to macOS mechanisms.

```html
<script lang="JavaScript">
    document.getElementById('close').addEventListener('click', function () {
        window.close();
    });
</script>
```

#### Implementing Window Dragging

In some applications, you need to implement window dragging inside the WebView, which can be done with the following code:

```html
<script>
    document.getElementById('dragRegion').addEventListener('mousedown', function (event) {
        if (event.button === 0) { // check whether the left button was pressed
            window.drag();
        }
    });
</script>
```

## Window Event Handling

WebView supports handling many kinds of events, including window loading, moving, resizing, gaining focus, losing focus, and closing. You can bind event handlers with the following code:

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

## Window Operations

WebView provides several window operation methods, including loading a URL, loading a file, setting HTML content, refreshing the page, navigating back and forward, and executing JavaScript code.

### Loading a URL

```javascript
webview.loadUrl("https://fibjs.org");
```

### Loading a File

```javascript
webview.loadFile("path/to/file.html");
```

### Setting HTML Content

```javascript
webview.setHtml("<html><body><h1>Hello, fibjs!</h1></body></html>");
```

### Refreshing the Page

```javascript
webview.reload();
```

### Navigating Back and Forward

```javascript
webview.goBack();
webview.goForward();
```

### Executing JavaScript Code

```javascript
webview.eval("alert('Hello from fibjs');");
```
## Creating Menus

In fibjs, you can use the `gui.createMenu` method to create a menu object. Menu items support the following types:

- normal
    - type: "normal"
    - label: required
    - tooltip, icon, enabled: optional
    - cannot have submenu or checked
- checkbox
    - type: "checkbox"
    - label: required
    - checked: optional
    - tooltip, icon, enabled: optional
    - cannot have submenu
- submenu
    - type: "submenu"
    - label, submenu: required
    - tooltip, icon, enabled: optional
    - cannot have checked
- separator
    - type: "separator"
    - cannot have label, submenu, checked, icon, or tooltip

If a menu item does not specify a type, the type is determined automatically from its other properties. The rules are as follows:
- If a submenu property is present, type is set to "submenu".
- If a checked property is present, type is set to "checkbox".
- If the object passed in is empty, type is set to "separator".
- If none of the above conditions is met, type is set to "normal".

### Example Code

```javascript
var gui = require('gui');

var menu = gui.createMenu([
    { type: "normal", label: "Item 1", onclick: function() { 
        console.log("Item 1 clicked"); 
        this.label = "Item 1 (clicked)"; // modify the label
    } },
    { type: "checkbox", label: "Item 2", checked: true, onclick: function() { 
        console.log("Item 2 clicked"); 
        // the checked property toggles automatically, no manual modification is needed
    } },
    { type: "submenu", label: "Submenu", submenu: [
        { type: "normal", label: "Subitem 1", onclick: function() { 
            console.log("Subitem 1 clicked"); 
            this.enabled = false; // disable the menu item
        } },
        { type: "separator" },
        { type: "normal", label: "Subitem 2", onclick: function() { 
            console.log("Subitem 2 clicked"); 
            this.tooltip = "This is Subitem 2"; // modify the tooltip
        } }
    ]},
    { type: "separator" },
    { type: "normal", label: "Item 3", onclick: function() { 
        console.log("Item 3 clicked"); 
        this.icon = "new-icon.png"; // modify the icon
    } }
]);
```

In this example, we show how to modify menu item properties through `this` inside an `onclick` event handler. After the modification, the menu is updated synchronously:

- Modify the `label` property.
- Toggle the `checked` state (the `checked` property toggles automatically, so no manual modification is needed).
- Disable a menu item.
- Modify the `tooltip` text.
- Modify the `icon`.

### Manipulating Menu Items Dynamically

We can also dynamically add, insert, and remove menu items. Here are some example code snippets:

```javascript
var gui = require('gui');

var menu = gui.createMenu([
    { label: "File", submenu: [] },
    { label: "Edit", submenu: [] },
    { label: "Help", submenu: [] }
]);

// add a menu item
menu.append({ label: "New", onclick: function() { console.log(this.label + " clicked"); } });

// insert a menu item
menu.insert(1, { label: "Open", onclick: function() { console.log(this.label + " clicked"); } });

// remove a menu item
menu.remove(2);
```

In this example, we first create a menu object containing three submenus. Then we use the `menu.append` method to add a new menu item, the `menu.insert` method to insert a menu item at a specified position, and finally the `menu.remove` method to remove a menu item.

Note that adding and removing menu items is only effective before the menu object is bound to a `window` or a `tray`.

With these methods, we can manipulate menu items flexibly to meet different requirements. We hope this introduction helps you better understand and use the `gui.createMenu` method to create and manage menus.

## Creating a Status Icon

In fibjs, you can use the `gui.createTray` method to create a status icon object. The following parameters are supported:

```javascript
{
    "icon": "/path/to/file.png", // specify the icon of the tray, must be a png file
    "title": "", // specify the title of the tray, if not set, it will not be displayed
    "tooltip": "", // specify the tooltip of the tray, if not set, it will not be displayed
    "menu": menu, // specify the menu of the tray, default is null
}
```

### Example Code

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

## Complete Example

The following is a complete example that shows how to create a WebView window, load a URL, communicate with the WebView, handle window events, and create menus and a status icon:

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

### Creating the Tray Icon and Menu

First, the code creates a tray icon with the `gui.createTray` method and assigns a menu to it. The `icon` property of the tray icon specifies the path to the icon file, and the `menu` property defines the context menu of the tray icon.

### The "github" Menu Item

The `onclick` handler of the "github" menu item opens a new window and loads the GitHub URL. If the window already exists, it activates that window; otherwise, it creates a new window. The window's `onclose` handler deletes the corresponding window object when the window closes, and the `onmove` handler logs the window's new position when the window moves.

### The "frame" Menu Item

The `onclick` handler of the "frame" menu item opens a local HTML file. If the window already exists, it shows and activates that window; otherwise, it creates a new window. The window's `hideOnClose` property is set to `true`, which means the window is hidden instead of destroyed when it is closed.

### The "alert" Menu Item

The `onclick` handler of the "alert" menu item displays an alert box with the message "Hello World".

### The "confirm" Menu Item

The `onclick` handler of the "confirm" menu item displays a confirmation box asking the user whether to exit, and logs the user's choice to the console.

### The "Exit" Menu Item

The `onclick` handler of the "Exit" menu item closes the tray icon and all open windows.

## `hideOnClose`

In the example above, `hideOnClose` is a boolean property that controls the behavior when the window is closed. If it is set to `true`, the window is not actually destroyed on close; instead, it is hidden. You can show the window again by calling the `show()` method.

```javascript
wins.fibjs = gui.open({
    file: path.join(__dirname, "frame.html"),
    width: 500,
    height: 400,
    minWidth: 300,
    minHeight: 200,
    maxWidth: 800,
    caption: false,
    hideOnClose: true // hide instead of destroy when the window is closed
});
```

### Detailed Explanation

In the example above, the `hideOnClose` property is set to `true`, which means that when the user closes the window, the window is hidden rather than destroyed. The benefit is that when the user needs the window again, it can be shown again quickly without recreating the window and its content.

### Use Cases

1. **Improved performance**:
   - **Avoid repeated creation**: In some applications, creating and destroying windows may involve a large amount of resource loading and initialization work. Frequently creating and destroying windows degrades performance. Hiding a window instead of destroying it avoids this overhead.
   - **Fast response**: Once a window is hidden, showing it again is much faster than recreating it, which improves the user experience.

2. **Preserving state**:
   - **Preserve user data**: When a window is hidden, its state and data are retained. When the user reopens the window, they can continue from where they left off without reloading data or resetting state.
   - **Multitasking**: In multi-window applications, users may switch between different windows. Hiding a window lets users quickly switch back to their previous task when needed without restarting it.

3. **User experience**:
   - **System tray applications**: For some system tray applications, users may want the application to keep running in the background after the window is closed, and to be able to reopen the window from the tray icon. `hideOnClose` meets this requirement.
   - **Temporary hiding**: Some applications may need to hide the window temporarily rather than exit completely. For example, users may want to hide the window for a while to focus on other tasks, and then reopen it to continue using it.

### Concrete Example

Suppose we have a chat application. When the user closes the chat window, we want the window to be hidden rather than destroyed. That way, when the user opens the chat window again, the previous chat history and state are immediately visible.

```javascript
const chatWindow = gui.open({
    file: path.join(__dirname, "chat.html"),
    width: 600,
    height: 400,
    hideOnClose: true // hide instead of destroy when the window is closed
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

From the examples above, we can see the value of the `hideOnClose` property in improving performance, preserving state, and enhancing the user experience. It makes applications more flexible and efficient when handling window close events.

## Using WebView for Web Automation

WebView can be used not only to display web pages but also for web automation tasks. By making proper use of the WebView `visible` property, we can open WebViews in the background and cache them for reuse, which speeds up access and saves system resources.

### The WebView `visible` Property

The WebView `visible` property controls the visibility of the WebView window. When `visible` is set to `false`, the WebView window is hidden but still runs in the background. This means we can load pages, execute JavaScript code, and handle page events in the background without displaying the WebView window.

### Background Loading and Caching WebViews

When performing web automation, we can load WebViews in the background and cache them so that they can be reused quickly when needed. This approach can significantly improve access speed and reduce the consumption of system resources. The following example shows how to load a WebView in the background and cache it for reuse:

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

// example task: execute JavaScript code in the page
function exampleTask(webview) {
    webview.eval("console.log('Hello from fibjs');");
}

// usage example
performTask('https://example.com', exampleTask);
```

### Detailed Explanation

1. **Creating a WebView**:
   - The `createWebView` function creates a new WebView and sets its `visible` property to `false`, so that it runs in the background.
   - In the WebView's `onloading`, `onload`, and `onclose` events, we can add the corresponding handling logic.

2. **Getting a WebView**:
   - The `getWebView` function gets an idle WebView from the pool. If there is no idle WebView in the pool, it creates a new one.

3. **Releasing a WebView**:
   - The `releaseWebView` function puts a used WebView back into the pool for reuse.

4. **Running Tasks**:
   - The `performTask` function runs a task on the specified URL. It first gets an idle WebView, then runs the task in the `onload` event, and releases the WebView when the task is complete.
   - The example task `exampleTask` executes a piece of JavaScript code in the page.

### Optimizing Access Speed and Saving System Resources

By loading and caching WebViews in the background, we can significantly improve access speed and reduce the consumption of system resources. This approach is especially suitable for scenarios that require frequent access to multiple web pages, such as web scraping and automated testing.

### Real-World Use Cases

1. **Web scraping**:
   - When scraping web pages, we can load multiple WebViews in the background and cache them for reuse. This avoids repeatedly loading the same pages and improves scraping efficiency.

2. **Automated testing**:
   - When running automated tests, we can load test pages in the background and reuse the same WebView across different test cases. This reduces test time and improves test efficiency.

3. **Data processing**:
   - When processing data, we can load data source pages in the background and reuse the same WebView across different data processing tasks. This reduces data loading time and improves data processing efficiency.

### Code Example: Web Scraping

The following is an example of web scraping that shows how to load and cache WebViews in the background and perform web scraping:

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

// usage example
scrapePage('https://example.com', function(html) {
    console.log(html);
});
```

### Detailed Explanation

1. **Creating a WebView**:
   - The `createWebView` function creates a new WebView and sets its `visible` property to `false`, so that it runs in the background.
   - In the WebView's `onloading`, `onload`, and `onclose` events, we can add the corresponding handling logic.

2. **Getting a WebView**:
   - The `getWebView` function gets an idle WebView from the pool. If there is no idle WebView in the pool, it creates a new one.

3. **Releasing a WebView**:
   - The `releaseWebView` function puts a used WebView back into the pool for reuse.

4. **Web Scraping**:
   - The `scrapePage` function scrapes the content of the page at the specified URL. It first gets an idle WebView, then runs the scraping task in the `onload` event, and releases the WebView when the task is complete.
   - In the scraping task, we use the `eval` method to execute JavaScript code, obtain the HTML content of the page, and return the scraping result through a callback function.

### Optimization Recommendations

1. **Cache management**:
   - In real applications, we need to manage the WebView cache to prevent too many cached WebViews from consuming system resources. You can set a cache size limit and clean up old WebViews when the cache exceeds the limit.

2. **Error handling**:
   - When scraping web pages, we need to handle possible errors, such as page load failures and JavaScript execution errors. You can add error handling logic in the WebView's `onerror` event.

3. **Concurrency control**:
   - When scraping web pages at scale, we need to control the level of concurrency to avoid exhausting system resources with too many concurrent requests. You can use coroutines or other concurrency control mechanisms to limit the number of simultaneous scraping tasks.

### Code Example: Concurrency Control

The following is a web scraping example with concurrency control that shows how to limit the number of concurrent tasks:

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

// usage example
scrapePage('https://example.com', function(html) {
    console.log(html);
});
```

### Detailed Explanation

1. **Concurrency control**:
   - The `maxConcurrentTasks` variable sets the maximum number of concurrent tasks.
   - The `currentTasks` variable tracks the number of tasks currently in progress.
   - The `taskQueue` array stores tasks waiting to be executed.

2. **Task queue**:
   - In the `scrapePage` function, if the number of current tasks reaches the maximum number of concurrent tasks, the task is added to the task queue.
   - When a task completes, the next task is taken from the task queue and executed.

With the methods above, we can make proper use of the WebView `visible` property during web automation to optimize access speed and save system resources. At the same time, cache management, error handling, and concurrency control further improve the efficiency and stability of web automation.

👉 [Packaging and Releasing a fibjs Application](build.md)
