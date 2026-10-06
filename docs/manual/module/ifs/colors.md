# Module colors
ANSI escape sequences that color terminal output

The [module](module.md) exposes the raw Select Graphic Rendition (SGR) sequences used to style
[console](console.md) text, plus a [process](process.md)-wide capability flag. It is not requirable by name; read
it as `util.colors`, and see the [util](util.md) [module](module.md) for the higher-level `styleText` helper,
which supports the same and more style names.

Capabilities:

- **Capability flag**: `hasColors`;
- **Reset and default**: `clear`, `normal`;
- **Standard foreground colors**: `black`, `gray`, `red`, `green`, `yellow`, `blue`,
  `magenta`, `cyan`, `white`;
- **Bright foreground colors**: `lightred`, `lightgreen`, `lightyellow`, `lightblue`,
  `lightmagenta`, `lightcyan`, `lightwhite`;
- **Emphasis**: `bold`.

Concepts:

- **SGR sequences**: every member is a raw escape sequence such as `'\x1b[0;31m'` for
  red, meant to be concatenated before the text, and the terminal should be reset with
  `clear` after it. The standard colors and `normal` start with SGR 0 and therefore also
  clear any attribute applied before them, while `gray`, the light colors and `bold` do
  not reset first. In particular `bold` carries SGR 39 (default foreground), so printing
  it after a standard color cancels that color, and printing a standard color after
  `bold` cancels the bold; use the light variants, which are bold plus a color, to show
  both.
- **Capability detection**: `hasColors` is decided once when the [process](process.md) starts, from
  standard output being a terminal and from the environment: a non-empty `NO_COLOR`
  disables color and a non-empty `FORCE_COLOR` enables it, with `FORCE_COLOR` taking
  precedence. Both variables are removed from the environment after the check, so child
  processes started later do not inherit them.
- **Plain-text fallback**: when `hasColors` is false every member is an empty string, so
  code that concatenates the sequences needs no branching and prints plain text.
- **Scope**: only foreground colors and bold are provided; there are no background
  colors and no italic, underline, dim or inverse members. `util.styleText` accepts
  those names and applies the same capability rule.

Import:

```JavaScript
const util = require('util');

// `colors` is not requirable as a module
const colors = util.colors;
```

Example 1 — color a label without depending on terminal support:

```JavaScript
const util = require('util');
const colors = util.colors;

const label = colors.red + 'ERROR' + colors.clear;
console.log(util.stripVTControlCharacters(label)); // ERROR
console.log(colors.hasColors ? 'color enabled' : 'color disabled');
```

Example 2 — inspect the raw sequences:

```JavaScript
const util = require('util');
const colors = util.colors;

console.log(JSON.stringify(colors.red)); // "" or "\u001b[0;31m"
console.log(JSON.stringify(colors.clear)); // "" or "\u001b[0m"
console.log(JSON.stringify(colors.gray)); // "" or "\u001b[90m"
```

Example 3 — reset the terminal after styled output:

```JavaScript
const util = require('util');
const colors = util.colors;

const styled = colors.lightgreen + 'done' + colors.clear;
console.log(util.stripVTControlCharacters(styled)); // done
```

Notes:

- Print `clear` at the end of every styled fragment; without it the styling keeps
  applying to whatever is printed later.
- `hasColors` describes the [process](process.md), not the individual stream: writing to a file or a
  pipe still produces the sequences when the flag is true.

## Static Properties
        
### hasColors
**Boolean, Whether the [process](process.md) should emit ANSI color codes**

```JavaScript
static readonly Boolean colors.hasColors;
```

True when standard output is a terminal and no non-empty `NO_COLOR` is set, or when
a non-empty `FORCE_COLOR` is set, which takes precedence; evaluated once at [process](process.md)
start and never changed afterwards. Every color member is an empty string when it is
false.

--------------------------
### clear
**String, Resets every attribute and color, the sequence `'\x1b[0m'`**

```JavaScript
static readonly String colors.clear;
```

The counterpart of all other members. It drops bold and any other attribute, while
`normal` only restores the default foreground color. Print it after a styled
fragment, otherwise the styling keeps applying to later output.

--------------------------
### normal
**String, Restores the default foreground color, the sequence `'\x1b[0;39m'`**

```JavaScript
static readonly String colors.normal;
```

Its leading SGR 0 also clears attributes such as bold. Prefer `clear` to end a
styled fragment and use `normal` to change the foreground back in the middle of a
styled line.

--------------------------
### black
**String, Selects the standard black foreground color**

```JavaScript
static readonly String colors.black;
```

Emits `'\x1b[0;30m'` when `hasColors` is true and an empty string otherwise. The
leading SGR 0 clears attributes applied before it; `gray` is the brighter
alternative for text that must stay readable on a dark terminal.

--------------------------
### gray
**String, Selects the bright black (gray) foreground color**

```JavaScript
static readonly String colors.gray;
```

Emits `'\x1b[90m'`, or an empty string when `hasColors` is false. Unlike the
standard colors the sequence has no leading reset, so it preserves attributes such
as bold that were applied before it; use `clear` to end it.

--------------------------
### red
**String, Selects the standard red foreground color**

```JavaScript
static readonly String colors.red;
```

Emits `'\x1b[0;31m'` when `hasColors` is true and an empty string otherwise. The
conventional color for errors and removals; the leading SGR 0 clears any attribute
applied before it, and `lightred` is its bold variant.

--------------------------
### green
**String, Selects the standard green foreground color**

```JavaScript
static readonly String colors.green;
```

Emits `'\x1b[0;32m'` when `hasColors` is true and an empty string otherwise. The
conventional color for success messages and additions; `lightgreen` is the bold
variant and the leading SGR 0 resets other attributes.

--------------------------
### yellow
**String, Selects the standard yellow foreground color**

```JavaScript
static readonly String colors.yellow;
```

Emits `'\x1b[0;33m'` when `hasColors` is true and an empty string otherwise. The
conventional color for warnings; `lightyellow` is the bold variant, which stays
readable on light backgrounds where plain yellow is hard to see.

--------------------------
### blue
**String, Selects the standard blue foreground color**

```JavaScript
static readonly String colors.blue;
```

Emits `'\x1b[0;34m'` when `hasColors` is true and an empty string otherwise.
Frequently used for links, paths and other informational values; `lightblue` is the
bold variant.

--------------------------
### magenta
**String, Selects the standard magenta foreground color**

```JavaScript
static readonly String colors.magenta;
```

Emits `'\x1b[0;35m'` when `hasColors` is true and an empty string otherwise. Often
used for keywords and highlights; `lightmagenta` is the bold variant.

--------------------------
### cyan
**String, Selects the standard cyan foreground color**

```JavaScript
static readonly String colors.cyan;
```

Emits `'\x1b[0;36m'` when `hasColors` is true and an empty string otherwise. Often
used for secondary information such as timestamps; `lightcyan` is the bold variant.

--------------------------
### white
**String, Selects the standard white foreground color**

```JavaScript
static readonly String colors.white;
```

Emits `'\x1b[0;37m'` when `hasColors` is true and an empty string otherwise. White
is the brightest of the standard colors; `lightwhite` is the bold variant.

--------------------------
### lightred
**String, Selects the bright red foreground color**

```JavaScript
static readonly String colors.lightred;
```

Emits `'\x1b[1;31m'` when `hasColors` is true and an empty string otherwise: SGR 1
(bold) plus red, without a leading reset. Terminals that only implement bold render
it as bold red instead of a brighter color.

--------------------------
### lightgreen
**String, Selects the bright green foreground color**

```JavaScript
static readonly String colors.lightgreen;
```

Emits `'\x1b[1;32m'` when `hasColors` is true and an empty string otherwise: bold
plus green, without a leading reset, so it combines with a preceding style rather
than clearing it.

--------------------------
### lightyellow
**String, Selects the bright yellow foreground color**

```JavaScript
static readonly String colors.lightyellow;
```

Emits `'\x1b[1;33m'` when `hasColors` is true and an empty string otherwise: bold
plus yellow, the readable variant of `yellow` on both dark and light terminals.

--------------------------
### lightblue
**String, Selects the bright blue foreground color**

```JavaScript
static readonly String colors.lightblue;
```

Emits `'\x1b[1;34m'` when `hasColors` is true and an empty string otherwise: bold
plus blue, without the leading reset of the standard colors.

--------------------------
### lightmagenta
**String, Selects the bright magenta foreground color**

```JavaScript
static readonly String colors.lightmagenta;
```

Emits `'\x1b[1;35m'` when `hasColors` is true and an empty string otherwise: bold
plus magenta, without a leading reset, so a previous style is preserved.

--------------------------
### lightcyan
**String, Selects the bright cyan foreground color**

```JavaScript
static readonly String colors.lightcyan;
```

Emits `'\x1b[1;36m'` when `hasColors` is true and an empty string otherwise: bold
plus cyan, without a leading reset.

--------------------------
### lightwhite
**String, Selects the bright white foreground color**

```JavaScript
static readonly String colors.lightwhite;
```

Emits `'\x1b[1;37m'` when `hasColors` is true and an empty string otherwise: bold
plus white; on many terminals it is the brightest text available, so use it
sparingly on light backgrounds.

--------------------------
### bold
**String, Applies bold with the default foreground color, the sequence `'\x1b[1;39m'`**

```JavaScript
static readonly String colors.bold;
```

The sequence contains SGR 39, so it cancels a foreground color set before it, and a
standard color printed after it starts with SGR 0 and cancels the bold. Use the
light color members, which are bold plus a color, to show both at the same time.

