# Module test_suite
The test_suite [module](module.md) defines the nested suites of the [test](test.md) framework: a suite

groups cases and hooks under a title, and suites can be nested to any depth

A suite is a callable [object](../../object/ifs/object.md) collected by the [test](test.md) [module](module.md). It is exported as `test.suite`
and `test.describe` (destructuring `suite`/`describe` from `[test](test.md)` or `node:[test](test.md)` also
returns it); there is no standalone `test_suite` builtin, `require('test_suite')` throws
MODULE_NOT_FOUND. Cases and hooks are declared in the suite body, and the body runs at
execution time, so an async body is awaited before its cases are collected.

Main capabilities:

- **Suites**: the callable [module](module.md) itself, the same [object](../../object/ifs/object.md) as `describe`, nesting arbitrary;
- **Skipping**: `skip` (same as `describe.skip`) prunes the subtree without counting it;
- **Selection**: `only` (same as `describe.only`) selects the subtree against its
  siblings;
- **Planning**: `todo` (same as `describe.todo`) marks the suite as planned.

Concepts:

- **Title [path](path.md)**: the report prints the title [path](path.md) from the root suite to the case,
  indented two spaces per nesting level; the failure list repeats the full [path](path.md).
- **Suite body timing**: the body runs when the suite is reached during the run, not when
  it is declared, and its cases are registered at that moment; an async body is awaited
  (see the [test](test.md) [module](module.md) for the fiber model).
- **Options**: the options [object](../../object/ifs/object.md) supports `skip`, `todo` and `only` with the literal
  `true`; any other value is ignored, exactly as for cases.
- **Hooks**: suites do not declare their own hooks; `before`/`after`/`beforeEach`/
  `afterEach` from the [test](test.md) [module](module.md) attach to the suite that is being collected.
- **`todo` suites**: a todo suite is counted in the todo total, but its body is still
  executed and its cases still run and can fail the run; a skip suite is pruned entirely.
  This differs from Node.js, where a todo suite silences its subtree.

Import:

```JavaScript
const test = require('test');
const suite = test.suite; // === test.describe
const {
    describe
} = require('node:test'); // the same object
```

Example 1 — nested suites in a title [path](path.md):

```JavaScript
const {
    describe,
    it
} = require('node:test');
const assert = require('assert');
describe('math', () => {
    describe('integers', () => {
        it('adds', () => assert.equal(1 + 1, 2));
    });
    it('floats', () => assert.equal(0.5 + 0.5, 1));
});
```

Example 2 — a skipped suite keeps its cases out of the run:

```JavaScript
const {
    describe,
    it
} = require('node:test');
describe('disabled area', () => {
    describe.skip('not implemented', () => {
        it('never runs', () => {
            throw new Error('never runs');
        });
    });
    it('still runs', () => {});
});
```

Notes:

- `describe`/`suite` return undefined; unlike Node.js they do not return a promise,
  because the suite body is collected during the run rather than awaited at the call site.
- A suite marked `todo` with a body is counted in the todo total while its cases still run;
  prefer `it.todo`/`todo(name)` for planned cases that must not run.
- Depth is unlimited; the report indents two spaces per level.

## Static Methods
        
### operator
**Defines a suite; the suite [object](../../object/ifs/object.md) itself is callable, so `suite(name, block)`**

```JavaScript
static test_suite.operator(String name,
    Function() block);
```

Parameters:
* name: String, the suite title shown in the report
* block: Function(), the suite body

is the same as `describe(name, block)` and nests inside any enclosing suite

The body declares cases and nested suites through the [test](test.md) [module](module.md) functions; it runs
when the suite is reached during the run and its result promise is awaited. Returning
nothing is the common form.

Example — a suite groups cases under a title:

```JavaScript
const {
    describe,
    suite,
    it
} = require('node:test');
describe('outer', () => {
    suite('inner', () => {
        it('nested case', () => {});
    });
});
```

--------------------------
**Defines a suite with an options [object](../../object/ifs/object.md) supporting `skip`, `todo` and `only`,**

```JavaScript
static test_suite.operator(String name,
    Object options,
    Function() block);
```

Parameters:
* name: String, the suite title shown in the report
* options: Object, the suite options: { skip, todo, only }
* block: Function(), the suite body

each taking effect only when it is the literal `true`

The options form is the base of `skip`, `only` and `todo`; see the two-argument form for
the body semantics. A skipped suite is pruned, a selected suite keeps its direct
siblings out, and a todo suite is counted as planned while its body still runs.

--------------------------
### skip
**Defines a suite that is skipped; the whole subtree is pruned, so its cases are**

```JavaScript
static test_suite.skip(String name,
    Function() block);
```

Parameters:
* name: String, the suite title shown in the report
* block: Function(), the suite body, which is never executed

not executed, not counted and not printed

`suite.skip(name, block)` and `describe.skip(name, block)` are the same call; the
`xdescribe` member of the [test](test.md) [module](module.md) is the legacy alias. A suite can also be skipped
with `{ skip: true }` as its options.

Example — a skipped suite leaves no trace in the report:

```JavaScript
const {
    describe,
    suite,
    it
} = require('node:test');
describe('area', () => {
    suite.skip('planned', () => {
        it('never runs', () => {
            throw new Error('never runs');
        });
    });
    it('runs', () => {});
});
```

--------------------------
### only
**Defines a suite selected by `only`; the other direct children of the enclosing**

```JavaScript
static test_suite.only(String name,
    Function() block);
```

Parameters:
* name: String, the suite title shown in the report
* block: Function(), the suite body

suite are skipped and unselected sub-suites are pruned

`suite.only(name, block)` and `describe.only(name, block)` are the same call; the
equivalent options form is `{ only: true }`. The scope is the enclosing suite only, so
an `only` in a nested suite does not affect the parent's sibling suites.

--------------------------
### todo
**Defines a planned suite; it is counted in the todo total, but the body is still**

```JavaScript
static test_suite.todo(String name,
    Function() block);
```

Parameters:
* name: String, the suite title shown in the report
* block: Function(), the suite body, executed with its cases running normally

executed and its cases still run, which differs from Node.js where a todo suite
silences its subtree

`suite.todo(name, block)` and `describe.todo(name, block)` are the same call; prefer
`it.todo`/`todo(name)` for planned cases that must not run.

--------------------------
**Defines a planned suite with an options [object](../../object/ifs/object.md); `todo` is the default level**

```JavaScript
static test_suite.todo(String name,
    Object options,
    Function() block);
```

Parameters:
* name: String, the suite title shown in the report
* options: Object, the suite options: { skip, todo, only }
* block: Function(), the suite body, executed unless skipped

and `skip: true` takes precedence, in which case the subtree is pruned entirely

See the two-argument form for the todo suite semantics.

