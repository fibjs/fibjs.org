# Module mq
The message queue [module](module.md): the handler pipeline behind the network servers

mq is the message kernel of fibjs. A message (a [Message](../../object/ifs/Message.md), an [http.Request](http.md#Request) or
any other value) is processed by handlers — functions, Chains, Routings and
the built-in handlers — and the [module](module.md) provides both the base [types](types.md) and the
driver that runs them. The network servers accept the same handlers and use
this kernel internally, so the concepts here apply to `http.Server`,
`net.TcpServer`, websocket handlers and so on.

Main capabilities:
- **[Handler](../../object/ifs/Handler.md) [types](types.md)**: `[Handler](../../object/ifs/Handler.md)` (the contract and its construction forms),
  `Chain` (run handlers in order), `Routing` (match a value and dispatch),
  `HttpHandler` (turn a stream into HTTP request/response handling) and
  `Message` (the generic message [object](../../object/ifs/object.md));
- **Driving the pipeline**: `invoke` runs a handler to completion,
  `nullHandler` returns an empty handler that ends the pipeline immediately.

Concepts:
- **One stage or the whole pipeline**: a handler's invoke processes one stage
  and returns the next handler; [mq.invoke](mq.md#invoke) is the loop that keeps invoking the
  returned handler until null comes back. Most code only needs [mq.invoke](mq.md#invoke).
- **[Handler](../../object/ifs/Handler.md) forms**: wherever a handler is expected the same set of forms is
  accepted — a [Handler](../../object/ifs/Handler.md) [object](../../object/ifs/object.md), an array of handlers (a [Chain](../../object/ifs/Chain.md)), a function, a
  routing map [object](../../object/ifs/object.md) (a [Routing](../../object/ifs/Routing.md)) and a [path](path.md)/address string (a file handler or
  an `http(s)://` repeater). The [Handler](../../object/ifs/Handler.md) constructor performs the conversion,
  so building the concrete class directly and passing the plain form are
  equivalent.
- **Returning a handler**: a JavaScript handler function may return the next
  handler, a handling function, an array or a routing map; the runtime
  continues with it. Returning nothing ends the function's stage, and any
  other returned value is an error.
- **Call forms**: like every fibjs asynchronous function, invoke works
  synchronously without a callback, asynchronously with a trailing callback
  and as a promise (`mq.invokeSync`, `mq.invokeAsync`, `mq.promises.invoke`).

Import:

```JavaScript
const mq = require('mq');
```

Example 1 — a function handler returning the handler of the next stage:

```JavaScript
const mq = require('mq');

const msg = new mq.Message();
msg.value = 'start';

mq.invoke((v) => {
    console.log('stage 1: ' + v.value);
    return (v) => console.log('stage 2: ' + v.value);
}, msg);
```

Example 2 — the accepted handler forms and a routing dispatch:

```JavaScript
const mq = require('mq');

console.log(new mq.Handler(() => {}).isRouting()); // false
console.log(new mq.Handler([() => {}]).isRouting()); // false
console.log(new mq.Handler({
    '/a': () => {}
}).isRouting()); // true

const msg = new mq.Message();
msg.value = '/a';
mq.invoke(new mq.Handler({
    '/a': (req) => console.log('routed ' + req.value)
}), msg);
```

Example 3 — an empty handler ends the pipeline:

```JavaScript
const mq = require('mq');

const empty = mq.nullHandler();
console.log(empty.isRouting()); // false

mq.invoke(empty, new mq.Message());
console.log('done');
```

Notes:
- The [module](module.md) statics [Message](../../object/ifs/Message.md), [HttpHandler](../../object/ifs/HttpHandler.md), [Chain](../../object/ifs/Chain.md) and [Routing](../../object/ifs/Routing.md) expose the
  classes of the kernel; [Handler](../../object/ifs/Handler.md) additionally converts the value it is given
  into the class of the matching form.
- The `invokeSync`/`invokeAsync`/`promises` variants are generated from the
  `invoke` declaration and are reached through the [module](module.md) [object](../../object/ifs/object.md), not through
  separate members of this manual.

## Objects
        
### Message
**Creates a message [object](../../object/ifs/object.md), see [Message](../../object/ifs/Message.md)**

```JavaScript
Message mq.Message;
```

The static exposes the [Message](../../object/ifs/Message.md) class, so `new [mq.Message](mq.md#Message)()` builds the
generic message used by routing and chains: the value carries the matched
address, params carries the captured groups, and the body carries the
payload.

Example — build a message and feed it to the pipeline:

```JavaScript
const mq = require('mq');

const msg = new mq.Message();
msg.value = '/hello';
console.log(msg.value); // /hello
console.log(msg.params.length); // 0
```

--------------------------
### HttpHandler
**Creates an [http](http.md) protocol handler [object](../../object/ifs/object.md), see [HttpHandler](../../object/ifs/HttpHandler.md)**

```JavaScript
HttpHandler mq.HttpHandler;
```

The static exposes the [HttpHandler](../../object/ifs/HttpHandler.md) class, the same [object](../../object/ifs/object.md) as
`http.Handler`; it wraps a handler and runs the HTTP server side of a
stream (request parsing, keep-alive, response sending and the response
options).

Example — build one and read its default limits:

```JavaScript
const mq = require('mq');

const hdlr = new mq.HttpHandler((req, res) => res.write('ok'));
hdlr.maxBodySize = 8;
console.log(hdlr.maxBodySize); // 8
console.log(hdlr.isRouting()); // false
```

--------------------------
### Handler
**Creates a message handler [object](../../object/ifs/object.md) from any accepted form**

```JavaScript
Handler mq.Handler;
```

The constructor converts its argument and returns the concrete handler of
the matching form:
- Function: a JavaScript handler, called with the message;
- array: a [Chain](../../object/ifs/Chain.md), run in order;
- routing map [object](../../object/ifs/object.md): a [Routing](../../object/ifs/Routing.md) (see [Routing](../../object/ifs/Routing.md));
- [path](path.md)/address string: a file handler (a directory) or an
  [HttpRepeater](../../object/ifs/HttpRepeater.md) (an `http(s)://` address).
The declared union also accepts a [Handler](../../object/ifs/Handler.md) [object](../../object/ifs/object.md) in parameter positions,
but constructing from one is not a supported conversion; build the
concrete class directly instead.

Example — convert a handling function and run it:

```JavaScript
const mq = require('mq');

const hdlr = new mq.Handler((v) => console.log('called with ' + v.value));

const msg = new mq.Message();
msg.value = 'data';
mq.invoke(hdlr, msg);
```

--------------------------
### Chain
**Creates a message handler chain processing [object](../../object/ifs/object.md), see [Chain](../../object/ifs/Chain.md)**

```JavaScript
Chain mq.Chain;
```

The static exposes the [Chain](../../object/ifs/Chain.md) class: `new [mq.Chain](mq.md#Chain)([...])` links the
handlers and runs them in order, each of them receiving the same message.

Example — append a handler and run the chain:

```JavaScript
const mq = require('mq');

const chain = new mq.Chain([(v) => console.log('first')]);
chain.append((v) => console.log('second'));

mq.invoke(chain, new mq.Message());
```

--------------------------
### Routing
**Creates a message handler routing [object](../../object/ifs/object.md), see [Routing](../../object/ifs/Routing.md)**

```JavaScript
Routing mq.Routing;
```

The static exposes the [Routing](../../object/ifs/Routing.md) class: `new [mq.Routing](mq.md#Routing)(map)` turns a map of
patterns into a router, `new [mq.Routing](mq.md#Routing)()` builds an empty one and the
method helpers (get/post/...) add rules one by one.

Example — a map with one rule:

```JavaScript
const mq = require('mq');

const msg = new mq.Message();
msg.value = '/ping';

mq.invoke(new mq.Routing({
    '/ping': (req) => console.log('pong')
}), msg);
```

## Static Methods
        
### nullHandler
**Creates an empty handler [object](../../object/ifs/object.md); this handler does nothing and returns directly**

```JavaScript
static Handler mq.nullHandler();
```

Returns:
* [Handler](../../object/ifs/Handler.md), returns the empty handling function

The returned handler has no routing behavior and no side effects: it is
useful as a placeholder in a chain, as the fallback of a routing or as the
value to return when a handler must explicitly stop the pipeline.

Example — an empty handler ends [mq.invoke](mq.md#invoke) immediately:

```JavaScript
const mq = require('mq');

const empty = mq.nullHandler();
console.log(empty.isRouting()); // false
```

--------------------------
### invoke
**Processes a message or [object](../../object/ifs/object.md) with the given handler**

```JavaScript
static mq.invoke(Function(object v, ...params) => Value hdlr,
    object v) async;
```

Parameters:
* hdlr: [Handler](../../object/ifs/Handler.md) | [Handler](../../object/ifs/Handler.md)[] | Function([object](../../object/ifs/object.md) v, ...params) => Value | Object | String, the handler to run
* v: [object](../../object/ifs/object.md), specifies the message or [object](../../object/ifs/object.md) to [process](process.md)

Unlike invoke of a handler, this method repeatedly calls the returned
handler of each stage until a handler returns null, so a single call runs
the whole pipeline. The handler may be given in any of the usual forms:
- a built-in [Handler](../../object/ifs/Handler.md) [object](../../object/ifs/object.md), used as it is;
- an array of handlers, equivalent to `new [mq.Chain](mq.md#Chain)(hdlr)`, see [Chain](../../object/ifs/Chain.md);
- a handling function `(v, ...params) => any`, called with the message;
- a routing map [object](../../object/ifs/object.md), whose values are handlers in these same forms,
  equivalent to `new [mq.Routing](mq.md#Routing)(hdlr)`, see [Routing](../../object/ifs/Routing.md);
- a [path](path.md)/address string, converted through the [Handler](../../object/ifs/Handler.md) constructor.

The method is asynchronous: it blocks the current fiber when called
without a callback, or completes through the trailing callback or the
promise form.

Example — the trailing callback form:

```JavaScript
const mq = require('mq');

const msg = new mq.Message();
msg.value = 'callback';

mq.invoke((v) => console.log('invoked ' + v.value), msg, (err) => {
    console.log('callback: ' + (err ? err.message : 'ok'));
});
```

