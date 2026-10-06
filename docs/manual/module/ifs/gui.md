# Module gui
Desktop GUI: browser-backed windows, native menus, tray icons and modal dialogs

The [module](module.md) is part of desktop builds only and needs the platform GUI toolkit.

Main capabilities:

- **Windows**: `open` and `openFile` create a [WebView](../../object/ifs/WebView.md) window with an embedded
  browser engine; the returned [WebView](../../object/ifs/WebView.md) drives navigation, window state and the
  JavaScript bridge to the page;
- **Menus**: `createMenu` builds a [Menu](../../object/ifs/Menu.md) from plain item descriptors; menus can be
  attached to windows and tray icons and support normal items, checkboxes,
  submenus and separators;
- **[Tray](../../object/ifs/Tray.md) icons**: `createTray` shows a [Tray](../../object/ifs/Tray.md) icon in the desktop status area with
  an optional menu;
- **Dialogs**: `alert`, `confirm`, `input` and `chooseFile` show the native
  modal dialogs and block the calling fiber until they are dismissed;
- **Classes**: `WebView`, [Menu](../../object/ifs/Menu.md), [MenuItem](../../object/ifs/MenuItem.md) and [Tray](../../object/ifs/Tray.md) model the objects created by
  the functions above.

Concepts:

- **Desktop session**: the [module](module.md) needs the platform GUI toolkit - GTK/WebKitGTK
  on Linux, Cocoa/WKWebView on macOS, Win32/WebView2 on Windows. Menus can be
  built and inspected without a display; windows, tray icons and dialogs need a
  running desktop session, and builds without desktop support fail with
  "... not supported in this platform" errors.
- **Window lifecycle**: `open`/`openFile` return immediately while the native
  window is created asynchronously on the GUI thread; the members that need the
  window wait for it in the calling fiber. An open window keeps the [process](process.md)
  alive until it is closed; the [WebView](../../object/ifs/WebView.md) interface documents the lifecycle, the
  events and the `app` bridge in detail.
- **Content loading**: a window loads a remote `url`, a local `file` or inline
  HTML (`setHtml`). Local files and paths inside a [zip](zip.md) archive mounted with
  [fs.setZipFS](fs.md#setZipFS) are served through the internal [fs](fs.md): scheme, with the archive [path](path.md)
  written as `archive.zip$/dir/page.html`.
- **Menus**: a menu template is a plain [object](../../object/ifs/object.md) or an array of objects; a
  descriptor `onclick` function becomes the click handler of the created item.
  Menus are edited before they are attached; once attached to a window or tray
  they can no longer be changed.
- **Dialogs**: the dialog functions are asynchronous; called as shown they block
  the calling fiber, and the generated `*Async` forms and the `gui.promises`
  namespace return a Promise instead. Cancelling confirm returns false,
  cancelling input and chooseFile returns undefined.

Import:

```JavaScript
const gui = require('gui');
```

Example 1 — build a menu from a template (works without a display):

```JavaScript
const gui = require('gui');

const menu = gui.createMenu([{
        id: 'file',
        label: 'File'
    },
    {
        label: 'Wrap',
        checked: true
    },
    {
        label: 'Recent',
        submenu: [{
            label: 'notes.txt'
        }]
    },
    {
        type: 'separator'
    }
]);

console.log(menu.length); // 4
console.log(menu.getMenuItemById('file').label); // File
console.log(menu[1].type + ' checked=' + menu[1].checked); // checkbox checked=true
```

Example 2 — open a window with a menu and an app method (requires a desktop session):

```JavaScript
// requires: long-running
const gui = require('gui');

const win = gui.open({
    width: 480,
    height: 320,
    menu: [{
        label: 'File',
        submenu: [{
            label: 'Quit',
            onclick: function() {
                win.close();
            }
        }]
    }],
    app: {
        add: function(a, b) {
            return a + b; // synchronous, JSON-serializable result
        }
    }
});

win.setHtml('<html><body><script>window.app.add(1, 2).then(function (sum) {' +
    ' window.postMessage("sum=" + sum); });</script></body></html>');

win.on('message', function(ev) {
    console.log(ev.data); // sum=3
    win.close();
});

win.waitFor();
```

Notes:

- The async dialog functions have generated `*Sync` and `*Async` variants and a
  Promise-based mirror in `gui.promises`, for example `gui.alertAsync(message)`.
- Descriptors are validated eagerly: unknown item [types](types.md), separators with a label
  and other invalid combinations throw when `createMenu`, `append` or `insert`
  is called.
- Repeated `open` calls create independent windows, each with its own page,
  history and event listeners.

## Objects
        
### WebView
**The [WebView](../../object/ifs/WebView.md) class, used for type checks of window objects**

```JavaScript
WebView gui.WebView;
```

The property exposes the class itself, not an instance: `gui.open` and
`gui.openFile` return objects of this type, and `win instanceof [gui.WebView](gui.md#WebView)`
is true. The constructor is not usable (`new [gui.WebView](gui.md#WebView)()` throws "not a
constructor"); see the [WebView](../../object/ifs/WebView.md) interface for the window API.

## Static Methods
        
### open
**Opens a window and visits the specified [url](url.md)**

```JavaScript
static WebView gui.open(String url,
    Object opt = {});
```

Parameters:
* url: String, the [url](url.md) to visit
* opt: Object, window opening parameters

Returns:
* [WebView](../../object/ifs/WebView.md), returns the opened window [object](../../object/ifs/object.md)

The native window is created asynchronously on the GUI thread and the
returned [WebView](../../object/ifs/WebView.md) is usable immediately; the members that need the window
wait for it in the calling fiber. An explicit [url](url.md) overrides the `[url](url.md)` and
`file` properties of the options [object](../../object/ifs/object.md), and openFile is the form that
clears the options `url` and loads a local file. With width and height but
without left/top the window is centered; without a size the platform
chooses it.

options supports the following options:

```JavaScript
// fragment: options
({
    "url": "about:blank", // initial page when open(options) is used
    "file": "", // local file or archive.zip$/dir/page.html
    "icon": "/path/to/file.png", // window icon, read when the window is created
    "left": 100, // window position, centered when omitted
    "top": 100, // window position, centered when omitted
    "width": 640, // window size, decided by the platform when omitted
    "height": 480,
    "visible": true, // show the window when it is created
    "hideOnClose": false, // hide instead of closing on the close button
    "minWidth": 0, // minimum size, 0 means no limit
    "minHeight": 0,
    "maxWidth": 2000, // maximum size, unset means no limit
    "maxHeight": 2000,
    "frame": true, // draw the window frame and title bar
    "titlebar": "show", // "show" | "hide" | "transparent" or { style, height }
    "resizable": true, // allow the user to resize the window
    "maximize": false, // start maximized
    "fullscreen": false, // start fullscreen
    "devtools": false, // enable the engine developer tools
    "menu": null, // a Menu object or a menu template array
    "app": {}, // object exposed as window.app in the page
    "onloading": null, // shortcut for win.on("loading", fn)
    "onload": null, // shortcut for win.on("load", fn)
    "onclose": null, // shortcut for win.on("close", fn)
    "onmove": null, // shortcut for win.on("move", fn)
    "onresize": null, // shortcut for win.on("resize", fn)
    "onfocus": null, // shortcut for win.on("focus", fn)
    "onblur": null, // shortcut for win.on("blur", fn)
    "onmessage": null // shortcut for win.on("message", fn)
})
```

Malformed options throw before the window is created: an unknown `titlebar`
style or height, a missing icon file (ENOENT) and wrong property [types](types.md)
(TypeError 20005). The titlebar and window icon options are ignored on
platforms that do not support them (gtk4 ignores the icon and the initial
position). See the [WebView](../../object/ifs/WebView.md) interface for the events and the app bridge.

Example — open a hidden window and close it when the page has loaded
(requires a desktop session):

```JavaScript
// requires: long-running
const gui = require('gui');

const win = gui.open({
    width: 320,
    height: 200,
    visible: false
});

win.on('load', function() {
    win.close();
});

win.loadUrl('data:text/html;charset=utf-8,<title>Ready</title>');
win.waitFor();
```

--------------------------
**Opens a window with the content selected by the options [object](../../object/ifs/object.md)**

```JavaScript
static WebView gui.open(Object opt = {});
```

Parameters:
* opt: Object, window opening parameters

Returns:
* [WebView](../../object/ifs/WebView.md), returns the opened window [object](../../object/ifs/object.md)

Without a [url](url.md) argument the initial content comes from the `[url](url.md)` or `file`
property of the options, defaulting to about:blank (`url` wins when both are
given). The options are the same as for the [url](url.md) form, see open([url](url.md), opt) for
the full list and the platform notes.

--------------------------
### openFile
**Opens a window and loads the specified local file**

```JavaScript
static WebView gui.openFile(String file,
    Object opt = {});
```

Parameters:
* file: String, the file to load
* opt: Object, window opening parameters

Returns:
* [WebView](../../object/ifs/WebView.md), returns the opened window [object](../../object/ifs/object.md)

The file becomes the initial content instead of the options `url`, which is
discarded. A [path](path.md) inside a [zip](zip.md) archive mounted with [fs.setZipFS](fs.md#setZipFS) is written as
`archive.zip$/dir/page.html`. The options are the same as for the [url](url.md) form,
see open([url](url.md), opt) for the full list and the platform notes.

--------------------------
### createMenu
**Creates a [Menu](../../object/ifs/Menu.md) from an array of item descriptors**

```JavaScript
static Menu gui.createMenu(Object items[] = []);
```

Parameters:
* items[]: Object, menu item array

Returns:
* [Menu](../../object/ifs/Menu.md), returns the created menu [object](../../object/ifs/object.md)

Every element is a plain [object](../../object/ifs/object.md) descriptor (or an existing [MenuItem](../../object/ifs/MenuItem.md)); the
accepted properties, the type inference and the validation rules are
described in [MenuItem](../../object/ifs/MenuItem.md). Item icons are read when the menu is created, so a
missing icon file fails here with ENOENT. The array may be empty; submenu
arrays and nested [Menu](../../object/ifs/Menu.md) objects are converted recursively.

Example — build a menu with all item [types](types.md):

```JavaScript
const gui = require('gui');

const menu = gui.createMenu([{
        id: 'open',
        label: 'Open'
    },
    {
        label: 'Auto save',
        checked: true
    },
    {
        label: 'Recent',
        submenu: [{
            label: 'notes.txt'
        }]
    },
    {
        type: 'separator'
    }
]);

console.log(menu.length); // 4
console.log(menu.getMenuItemById('open').label); // Open
console.log(menu[1].type + ' checked=' + menu[1].checked); // checkbox checked=true
```

--------------------------
### createTray
**Creates a [Tray](../../object/ifs/Tray.md) icon from the given options**

```JavaScript
static Tray gui.createTray(Object opt = {});
```

Parameters:
* opt: Object, tray creation parameters

Returns:
* [Tray](../../object/ifs/Tray.md), returns the created tray icon [object](../../object/ifs/object.md)

The icon file is required and read immediately (a PNG file); the native icon
is created asynchronously on the GUI thread, so a desktop session is needed.
The menu option accepts a [Menu](../../object/ifs/Menu.md) [object](../../object/ifs/object.md) or a template array and the tray keeps
the resulting [object](../../object/ifs/object.md); see the [Tray](../../object/ifs/Tray.md) interface for the platform differences of
title and tooltip and for the tray lifecycle.

options supports the following options:

```JavaScript
// fragment: options
({
    "icon": "/path/to/file.png", // required; icon file, must be a PNG
    "title": "", // optional text next to the icon, not on Windows
    "tooltip": "", // optional hover text, not on Windows
    "menu": null // a Menu object or a template array
})
```

--------------------------
### alert
**Pops up a modal message box**

```JavaScript
static gui.alert(String message) async;
```

Parameters:
* message: String, message content

Blocks the calling fiber until the user dismisses the dialog; the generated
alertAsync form returns a Promise instead. The one-argument form uses an
empty window title. Requires a desktop session.

--------------------------
**Pops up a modal message box with the given title**

```JavaScript
static gui.alert(String title,
    String message) async;
```

Parameters:
* title: String, message title
* message: String, message content

The blocking behaviour, the Promise form and the desktop requirement are
described on alert(message).

--------------------------
### confirm
**Pops up a modal confirmation box**

```JavaScript
static Boolean gui.confirm(String message) async;
```

Parameters:
* message: String, message content

Returns:
* Boolean, returns the user's choice

Returns true when the user confirms with OK and false for Cancel or a closed
dialog; blocks the calling fiber until the dialog is dismissed. Requires a
desktop session.

--------------------------
**Pops up a modal confirmation box with the given title**

```JavaScript
static Boolean gui.confirm(String title,
    String message) async;
```

Parameters:
* title: String, message title
* message: String, message content

Returns:
* Boolean, returns the user's choice

See confirm(message) for the result, the blocking behaviour and the Promise
form.

--------------------------
### input
**Pops up a modal input box**

```JavaScript
static String gui.input(String message,
    Boolean password = false) async;
```

Parameters:
* message: String, message content
* password: Boolean, whether this is a password input, default is false

Returns:
* String, returns the content entered by the user

The password argument masks the entered text. Cancelling the dialog returns
undefined instead of a string; the dialog blocks the calling fiber until it
is dismissed. Requires a desktop session.

--------------------------
**Pops up a modal input box with the given title**

```JavaScript
static String gui.input(String title,
    String message,
    Boolean password = false) async;
```

Parameters:
* title: String, message title
* message: String, message content
* password: Boolean, whether this is a password input, default is false

Returns:
* String, returns the content entered by the user

See input(message, password) for the behaviour, the cancel result and the
Promise form.

--------------------------
### chooseFile
**Pops up a modal file chooser and returns the selected paths**

```JavaScript
static NArray gui.chooseFile(Object options) async;
```

Parameters:
* options: Object, file chooser dialog parameters

Returns:
* NArray, returns the array of files chosen by the user

Cancelling the dialog returns undefined. The result is always an array, also
for a single selection; saveFile returns at most one [path](path.md), openFile and
openDirectory return one or more paths according to multiSelections. Requires
a desktop session.

options supports the following options:

```JavaScript
// fragment: options
({
    "title": "", // dialog title
    "type": "openFile", // "openFile" | "openDirectory" | "saveFile"
    "defaultPath": "", // directory shown when the dialog opens
    "multiSelections": false, // allow several files, ignored by saveFile
    "filters": null // [{ name: "Images", extensions: ["png", "jpg"] }]
})
```

Filter extensions are written without the leading dot. An unknown type and,
on Windows, an invalid defaultPath throw an Error.

Example — pick one or more images (requires a desktop session):

```JavaScript
// requires: long-running
const gui = require('gui');

const files = gui.chooseFile({
    title: 'Select images',
    type: 'openFile',
    multiSelections: true,
    filters: [{
        name: 'Images',
        extensions: ['png', 'jpg']
    }]
});

console.log(files ? files.length : 'cancelled');
```

