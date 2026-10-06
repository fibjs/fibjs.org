# Module sse
The sse [module](module.md) is the server side of the Server-Sent Events protocol: it upgrades an HTTP request into a text/event-stream response and pushes events to [EventSource](../../object/ifs/EventSource.md) clients

Use this [module](module.md) to push a live feed over plain HTTP. The client opens one
long-lived response with the [EventSource](../../object/ifs/EventSource.md) class exported here, and the server
keeps writing events through the sender [object](../../object/ifs/object.md) obtained from `upgrade`.

Main capabilities:

- **Server push**: `upgrade` turns an HTTP route into an SSE endpoint; the accept callback
  receives an [EventSource](../../object/ifs/EventSource.md) in SENDER state whose `send` writes events and whose `close` ends
  the response;
- **Client class**: `EventSource` is the client implementation, exported so that
  `new (require('sse').[EventSource](../../object/ifs/EventSource.md))([url](url.md))` works; its constructor, properties and events are
  documented in the [EventSource](../../object/ifs/EventSource.md) definition;
- **State [constants](constants.md)**: `CONNECTING`, `OPEN` and `CLOSED` describe a client connection,
  `SENDER` describes a server-side sender.

Concepts:

- **Wire format**: the response has Content-Type "text/event-stream" and uses chunked
  transfer [encoding](encoding.md). An event is a group of UTF-8 text lines terminated by an empty line:
  `data:` lines carry the payload and several data lines join with "\n", `event:` names the
  event type ("message" when absent), `id:` carries an event id and `retry:` a suggested
  reconnect delay in milliseconds.
- **Field rules**: field names are matched case-insensitively, the spaces after the field
  colon are not part of the value, ":" starts a comment line and unknown fields are ignored.
  `send` writes the id, event and retry lines only when the corresponding option is
  provided, followed by one data line per line of the payload.
- **[Stream](../../object/ifs/Stream.md) termination**: the server ends the stream with `close`, which writes the
  terminating chunk; the client then raises `close`. In this implementation a lone empty
  line with no field before it also ends the stream, so do not use bare empty lines as
  heartbeats, and a comment-only group is delivered as a message event with empty data.
- **Reconnection**: the client does not reconnect and never sends the Last-[Event](../../object/ifs/Event.md)-ID
  header. A resumable feed must replay missed events on the server side and let the client
  create a new [EventSource](../../object/ifs/EventSource.md); see the [EventSource](../../object/ifs/EventSource.md) definition for the error and close
  semantics.

Import:

```JavaScript
const sse = require('sse');
// the module is also available as require('node:sse')
```

Example 1 — one event from server to client:

```JavaScript
const http = require('http');
const sse = require('sse');

const server = new http.Server(0, {
    '/greeting': sse.upgrade((sender) => {
        sender.send('hello from the server', {
            id: '1'
        });
        sender.close(); // terminates the chunked response
    })
});
server.start();

const port = server.socket.localPort;
const es = new sse.EventSource('http://127.0.0.1:' + port + '/greeting');
es.onmessage = (ev) => console.log(ev.data, ev.id); // hello from the server 1
es.onclose = () => server.stop(); // the server ended the stream
es.onerror = (ev) => console.log('error', ev.reason);
```

Example 2 — a named event with multi-line data and a retry hint:

```JavaScript
const http = require('http');
const sse = require('sse');

const server = new http.Server(0, {
    '/feed': sse.upgrade((sender) => {
        sender.send('line one\nline two', {
            event: 'tick',
            retry: 3000
        });
        sender.close();
    })
});
server.start();

const port = server.socket.localPort;
const es = new sse.EventSource('http://127.0.0.1:' + port + '/feed');
es.addEventListener('tick', (ev) => {
    console.log(ev.data); // line one\nline two
    console.log(ev.retry); // 3000
});
es.onclose = () => server.stop();
es.onerror = (ev) => console.log('error', ev.reason);
```

Notes:

- fibjs has no [global](global.md) [EventSource](../../object/ifs/EventSource.md); the client class is always created from this [module](module.md) and
  the state [constants](constants.md) are read from the [module](module.md) (`sse.OPEN`), not from the class.
- `retry` is parsed and reported on event objects but never acted upon: this
  implementation does not reconnect, while MDN [EventSource](../../object/ifs/EventSource.md) reconnects and sends
  Last-[Event](../../object/ifs/Event.md)-ID.
- The server accepts any HTTP request routed to `upgrade`, regardless of its Accept
  header, and answers with status 200 and the handshake headers.

## Objects
        
### EventSource
**The client class exported by the [module](module.md), see the [EventSource](../../object/ifs/EventSource.md) definition**

```JavaScript
EventSource sse.EventSource;
```

`sse.EventSource` is the [EventSource](../../object/ifs/EventSource.md) class defined in the [EventSource](../../object/ifs/EventSource.md) definition; it
is not a [global](global.md) variable. Create a client with
`new [sse.EventSource](sse.md#EventSource)([url](url.md)[, options])`, read events through `onmessage`,
`addEventListener` and `onopen`, and observe errors and the end of the stream through
`onerror` and `onclose`. The readyState values are read from the [module](module.md) as
`sse.CONNECTING`, `sse.OPEN` and `sse.CLOSED`.

Node.js and MDN expose [EventSource](../../object/ifs/EventSource.md) as a [global](global.md) and reconnect automatically; this
implementation must be created from the [module](module.md) and never retries. See the [EventSource](../../object/ifs/EventSource.md)
definition for the constructor options, events and error semantics.

Example — report an HTTP error through the error event:

```JavaScript
const http = require('http');
const sse = require('sse');

const server = new http.Server(0, (req) => {
    req.response.status = 404;
    req.response.write('missing');
});
server.start();

const es = new sse.EventSource('http://127.0.0.1:' + server.socket.localPort + '/');
es.onmessage = () => console.log('never fires');
es.onerror = (ev) => {
    console.log(ev.code, ev.reason); // 404 Invalid status: File Not Found
    server.stop();
};
```

## Static Methods
        
### upgrade
**Creates a handler that upgrades an HTTP request into an SSE sender**

```JavaScript
static Handler sse.upgrade(Function(EventSource conn, HttpRequest req) accept);
```

Parameters:
* accept: Function([EventSource](../../object/ifs/EventSource.md) conn, [HttpRequest](../../object/ifs/HttpRequest.md) req), the connection success handler, called as accept(conn, req) with the

Returns:
* [Handler](../../object/ifs/Handler.md), the [Handler](../../object/ifs/Handler.md) to mount on an HTTP server or use with [Chain](../../object/ifs/Chain.md) and [Routing](../../object/ifs/Routing.md)

The returned [Handler](../../object/ifs/Handler.md) can be mounted directly on an [HttpServer](../../object/ifs/HttpServer.md) route or used with [Chain](../../object/ifs/Chain.md)
and [Routing](../../object/ifs/Routing.md). For every request the handler answers with status 200, Content-Type
"text/event-stream" and Transfer-Encoding: chunked, then creates a server-side
[EventSource](../../object/ifs/EventSource.md) in SENDER state and calls accept(sender, req) with the sender and the
handshake [HttpRequest](../../object/ifs/HttpRequest.md). Events are written with the sender's `send` and the response is
finished with `close`; without close the chunked response stays open and the client
keeps waiting. The callback runs once per request, so keep the sender references if
the server has to broadcast to several connections. See the [EventSource](../../object/ifs/EventSource.md) definition
for the sender API. MDN documents only the client side of SSE, so there is no
standard server [object](../../object/ifs/object.md) to compare with. Invoking the handler with a non-HTTP [object](../../object/ifs/object.md)
raises a type error.

Example — push three progress events and end the stream:

```JavaScript
const http = require('http');
const sse = require('sse');

const server = new http.Server(0, {
    '/progress': sse.upgrade((sender) => {
        ['start', 'half', 'end'].forEach((step, i) => {
            sender.send(step, {
                event: 'progress',
                id: 'p' + i
            });
        });
        sender.close();
    })
});
server.start();

const port = server.socket.localPort;
const es = new sse.EventSource('http://127.0.0.1:' + port + '/progress');
const steps = [];
es.addEventListener('progress', (ev) => steps.push(ev.data));
es.onclose = () => {
    console.log(steps.join(',')); // start,half,end
    server.stop();
};
es.onerror = (ev) => console.log('error', ev.reason);
```

## Constants
        
### CONNECTING
**[Event](../../object/ifs/Event.md) source state value 0: connecting, the request is being made**

```JavaScript
const sse.CONNECTING = 0;
```

The initial state of a client [EventSource](../../object/ifs/EventSource.md). It moves to OPEN after a text/event-stream
response is accepted, and stays here after a connection failure because the request is
not retried. Server-side senders start in SENDER instead; see the [EventSource](../../object/ifs/EventSource.md)
definition for the full state transitions.

--------------------------
### OPEN
**[Event](../../object/ifs/Event.md) source state value 1: open, events can be received**

```JavaScript
const sse.OPEN = 1;
```

The state of a client [EventSource](../../object/ifs/EventSource.md) after the response headers were accepted. `message`
and named events are dispatched while the state stays OPEN. The constant lives on the
sse [module](module.md), so it is read as `sse.OPEN`, not from the [EventSource](../../object/ifs/EventSource.md) class.

--------------------------
### CLOSED
**[Event](../../object/ifs/Event.md) source state value 2: closed, the stream has ended**

```JavaScript
const sse.CLOSED = 2;
```

The state after the server ended the stream, an HTTP error was received or `close()`
was called. An [EventSource](../../object/ifs/EventSource.md) is never reopened; create a new one to read again.

--------------------------
### SENDER
**[Event](../../object/ifs/Event.md) source state value 3: sender, a server-side connection is ready to push**

```JavaScript
const sse.SENDER = 3;
```

fibjs extension, not part of MDN [EventSource](../../object/ifs/EventSource.md): the state of the [EventSource](../../object/ifs/EventSource.md) [object](../../object/ifs/object.md)
delivered to the accept callback of `upgrade`. Only a sender may call `send`; a client
[EventSource](../../object/ifs/EventSource.md) raises error 20024 when send is called. See the [EventSource](../../object/ifs/EventSource.md) definition.

