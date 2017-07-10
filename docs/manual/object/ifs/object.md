# 对象 object
基础对象，所有对象均继承于此

## 继承关系
```dot
digraph {
    node [fontname="Helvetica,sans-Serif", fontsize=10, shape="record", style="filled", fillcolor="white"];

    object [tooltip="object", fillcolor="lightgray", label="{object|dispose()\lequals()\ltoString()\ltoJSON()\lvalueOf()\l}"];
    Buffer [tooltip="Buffer", URL="Buffer.md", label="{Buffer|new Buffer()\l|operator[]\l|isBuffer()\lconcat()\l|length\l|resize()\lappend()\lwrite()\lfill()\lindexOf()\lcompare()\lcopy()\lreadUInt8()\lreadUInt16LE()\lreadUInt16BE()\lreadUInt32LE()\lreadUInt32BE()\lreadUIntLE()\lreadUIntBE()\lreadInt8()\lreadInt16LE()\lreadInt16BE()\lreadInt32LE()\lreadInt32BE()\lreadIntLE()\lreadIntBE()\lreadInt64LE()\lreadInt64BE()\lreadFloatLE()\lreadFloatBE()\lreadDoubleLE()\lreadDoubleBE()\lwriteUInt8()\lwriteUInt16LE()\lwriteUInt16BE()\lwriteUInt32LE()\lwriteUInt32BE()\lwriteUIntLE()\lwriteUIntBE()\lwriteInt8()\lwriteInt16LE()\lwriteInt16BE()\lwriteInt32LE()\lwriteInt32BE()\lwriteIntLE()\lwriteIntBE()\lwriteInt64LE()\lwriteInt64BE()\lwriteFloatLE()\lwriteFloatBE()\lwriteDoubleLE()\lwriteDoubleBE()\lslice()\lhex()\lbase64()\ltoArray()\ltoString()\l}"];
    Cipher [tooltip="Cipher", URL="Cipher.md", label="{Cipher|new Cipher()\l|name\lkeySize\livSize\lblockSize\l|paddingMode()\lencrypt()\ldecrypt()\l}"];
    DatagramPacket [tooltip="DatagramPacket", URL="DatagramPacket.md", label="{DatagramPacket|data\laddress\lport\l}"];
    DbConnection [tooltip="DbConnection", URL="DbConnection.md", label="{DbConnection|type\l|close()\lbegin()\lcommit()\lrollback()\lexecute()\lformat()\l}"];
    MSSQL [tooltip="MSSQL", URL="MSSQL.md", label="{MSSQL|use()\l}"];
    MySQL [tooltip="MySQL", URL="MySQL.md", label="{MySQL|rxBufferSize\ltxBufferSize\l|use()\l}"];
    SQLite [tooltip="SQLite", URL="SQLite.md", label="{SQLite|fileName\ltimeout\l|backup()\l}"];
    DBRow [tooltip="DBRow", URL="DBRow.md", label="{DBRow|operator[]\loperator[String]\l}"];
    Digest [tooltip="Digest", URL="Digest.md", label="{Digest|size\l|update()\ldigest()\l}"];
    EventEmitter [tooltip="EventEmitter", URL="EventEmitter.md", label="{EventEmitter|new EventEmitter()\l|defaultMaxListeners\l|on()\laddListener()\lprependListener()\lonce()\lprependOnceListener()\loff()\lremoveListener()\lremoveAllListeners()\lsetMaxListeners()\lgetMaxListeners()\llisteners()\llistenerCount()\leventNames()\lemit()\l}"];
    Service [tooltip="Service", URL="Service.md", label="{Service|new Service()\l|name\lonstop\lonpause\loncontinue\l|install()\lremove()\lstart()\lstop()\lrestart()\lrun()\lisInstalled()\lisRunning()\l}"];
    WebSocket [tooltip="WebSocket", URL="WebSocket.md", label="{WebSocket|new WebSocket()\l|url\lprotocol\lorigin\lreadyState\lonopen\lonmessage\lonclose\lonerror\l|close()\lsend()\l}"];
    WebView [tooltip="WebView", URL="WebView.md", label="{WebView|visible\lonload\lonmove\lonresize\lonclose\lonmessage\l|setHtml()\lprint()\lclose()\lwait()\lpostMessage()\l}"];
    Worker [tooltip="Worker", URL="Worker.md", label="{Worker|new Worker()\l|onmessage\l|postMessage()\l}"];
    EventInfo [tooltip="EventInfo", URL="EventInfo.md", label="{EventInfo|operator[String]\l|code\lreason\ltype\ltarget\l}"];
    Fiber [tooltip="Fiber", URL="Fiber.md", label="{Fiber|caller\ltraceInfo\l|join()\l}"];
    GridFS [tooltip="GridFS", URL="GridFS.md", label="{GridFS|files\lchunks\l|retrieve()\lstore()\lexists()\lremove()\l}"];
    Handler [tooltip="Handler", URL="Handler.md", label="{Handler|new Handler()\l|invoke()\l}"];
    AsyncWait [tooltip="AsyncWait", URL="AsyncWait.md", label="{AsyncWait|end()\l}"];
    Chain [tooltip="Chain", URL="Chain.md", label="{Chain|new Chain()\l|append()\l}"];
    HandlerEx [tooltip="HandlerEx", URL="HandlerEx.md", label="{HandlerEx|handler\lstats\l|onerror()\l}"];
    HttpHandler [tooltip="HttpHandler", URL="HttpHandler.md", label="{HttpHandler|new HttpHandler()\l|crossDomain\lforceGZIP\lmaxHeadersCount\lmaxBodySize\lserverName\l}"];
    WebSocketHandler [tooltip="WebSocketHandler", URL="WebSocketHandler.md", label="{WebSocketHandler|new WebSocketHandler()\l|maxSize\l}"];
    Routing [tooltip="Routing", URL="Routing.md", label="{Routing|new Routing()\l|append()\lall()\lget()\lpost()\ldel()\lput()\lpatch()\l}"];
    SslHandler [tooltip="SslHandler", URL="SslHandler.md", label="{SslHandler|new SslHandler()\l|verification\lca\lhandler\l}"];
    HeapGraphEdge [tooltip="HeapGraphEdge", URL="HeapGraphEdge.md", label="{HeapGraphEdge|type\lname\ldescription\l|getFromNode()\lgetToNode()\l}"];
    HeapGraphNode [tooltip="HeapGraphNode", URL="HeapGraphNode.md", label="{HeapGraphNode|type\lname\ldescription\lid\lshallowSize\lchilds\l}"];
    HeapSnapshot [tooltip="HeapSnapshot", URL="HeapSnapshot.md", label="{HeapSnapshot|time\lroot\lnodes\l|diff()\lgetNodeById()\lsave()\l}"];
    HttpClient [tooltip="HttpClient", URL="HttpClient.md", label="{HttpClient|new HttpClient()\l|cookies\ltimeout\lmaxBodySize\lenableCookie\lautoRedirect\luserAgent\l|request()\lget()\lpost()\ldel()\lput()\lpatch()\l}"];
    HttpCollection [tooltip="HttpCollection", URL="HttpCollection.md", label="{HttpCollection|operator[String]\l|clear()\lhas()\lfirst()\lall()\ladd()\lset()\lremove()\l}"];
    HttpCookie [tooltip="HttpCookie", URL="HttpCookie.md", label="{HttpCookie|new HttpCookie()\l|name\lvalue\ldomain\lpath\lexpires\lhttpOnly\lsecure\l|parse()\lmatch()\l}"];
    HttpUploadData [tooltip="HttpUploadData", URL="HttpUploadData.md", label="{HttpUploadData|fileName\lcontentType\lcontentTransferEncoding\lbody\l}"];
    Image [tooltip="Image", URL="Image.md", label="{Image|width\lheight\lformat\ltype\lcolorsTotal\ltransparent\lprogressive\lalphaBlending\l|getData()\lsave()\lcolorAllocate()\lcolorAllocateAlpha()\lcolorClosest()\lcolorClosestHWB()\lcolorClosestAlpha()\lcolorExact()\lcolorExactAlpha()\lcolorResolve()\lcolorResolveAlpha()\lcolorDeallocate()\lclip()\lgetPixel()\lgetTrueColorPixel()\lsetPixel()\lsetThickness()\lline()\lrectangle()\lfilledRectangle()\lpolygon()\lopenPolygon()\lfilledPolygon()\lellipse()\lfilledEllipse()\larc()\lfilledArc()\lfill()\lfillToBorder()\lcolorReplace()\lclone()\lresample()\lcrop()\lflip()\lrotate()\lconvert()\lcopy()\lcopyMerge()\lcopyMergeGray()\lcopyResized()\lcopyResampled()\lcopyRotated()\lfilter()\laffine()\lgaussianBlur()\l}"];
    Int64 [tooltip="Int64", URL="Int64.md", label="{Int64|new Int64()\l|hi\llo\l|compare()\lshiftLeft()\lshiftRight()\land()\lor()\lxor()\ladd()\lsub()\ltoNumber()\ltoString()\l}"];
    LevelDB [tooltip="LevelDB", URL="LevelDB.md", label="{LevelDB|has()\lget()\lmget()\lset()\lmset()\lmremove()\lremove()\lforEach()\lbetween()\lbegin()\lcommit()\lclose()\l}"];
    List [tooltip="List", URL="List.md", label="{List|new List()\l|operator[]\l|length\l|freeze()\lresize()\lpush()\lindexOf()\llastIndexOf()\lpush()\lpushArray()\lpop()\lslice()\lconcat()\levery()\lsome()\lfilter()\lforEach()\lmap()\lreduce()\lsort()\ltoArray()\l}"];
    DBResult [tooltip="DBResult", URL="DBResult.md", label="{DBResult|insertId\laffected\lfields\l}"];
    Lock [tooltip="Lock", URL="Lock.md", label="{Lock|new Lock()\l|acquire()\lrelease()\lcount()\l}"];
    Condition [tooltip="Condition", URL="Condition.md", label="{Condition|new Condition()\l|wait()\lnotify()\lnotifyAll()\l}"];
    Event [tooltip="Event", URL="Event.md", label="{Event|new Event()\l|isSet()\lset()\lpulse()\lclear()\lwait()\l}"];
    Semaphore [tooltip="Semaphore", URL="Semaphore.md", label="{Semaphore|new Semaphore()\l|wait()\lpost()\ltrywait()\l}"];
    LruCache [tooltip="LruCache", URL="LruCache.md", label="{LruCache|new LruCache()\l|size\ltimeout\l|clear()\lhas()\lget()\lset()\lremove()\lisEmpty()\l}"];
    Map [tooltip="Map", URL="Map.md", label="{Map|new Map()\l|operator[String]\l|size\l|clear()\lhas()\lget()\lput()\lset()\lremove()\lisEmpty()\l}"];
    Message [tooltip="Message", URL="Message.md", label="{Message|new Message()\l|TEXT\lBINARY\l|value\lparams\ltype\ldata\lbody\llength\lstream\lresponse\llastError\l|read()\lreadAll()\lwrite()\lend()\lisEnded()\lclear()\lsendTo()\lreadFrom()\l}"];
    HttpMessage [tooltip="HttpMessage", URL="HttpMessage.md", label="{HttpMessage|protocol\lheaders\lkeepAlive\lupgrade\lmaxHeadersCount\lmaxBodySize\lsocket\l|hasHeader()\lfirstHeader()\lallHeader()\laddHeader()\lsetHeader()\lremoveHeader()\l}"];
    HttpRequest [tooltip="HttpRequest", URL="HttpRequest.md", label="{HttpRequest|new HttpRequest()\l|method\laddress\lqueryString\lcookies\lform\lquery\l}"];
    HttpResponse [tooltip="HttpResponse", URL="HttpResponse.md", label="{HttpResponse|new HttpResponse()\l|status\lcookies\l|addCookie()\lredirect()\lsendHeader()\l}"];
    WebSocketMessage [tooltip="WebSocketMessage", URL="WebSocketMessage.md", label="{WebSocketMessage|new WebSocketMessage()\l|masked\lmaxSize\l}"];
    MongoCollection [tooltip="MongoCollection", URL="MongoCollection.md", label="{MongoCollection|operator[String]\l|find()\lfindOne()\lfindAndModify()\linsert()\lsave()\lupdate()\lremove()\lrunCommand()\ldrop()\lensureIndex()\lreIndex()\ldropIndex()\ldropIndexes()\lgetIndexes()\lgetCollection()\l}"];
    MongoCursor [tooltip="MongoCursor", URL="MongoCursor.md", label="{MongoCursor|skip()\llimit()\lsort()\lhasNext()\lnext()\lcount()\lsize()\lforEach()\lmap()\ltoArray()\lhint()\l}"];
    MongoDB [tooltip="MongoDB", URL="MongoDB.md", label="{MongoDB|operator[String]\l|fs\l|getCollection()\lrunCommand()\loid()\lclose()\l}"];
    MongoID [tooltip="MongoID", URL="MongoID.md", label="{MongoID}"];
    PKey [tooltip="PKey", URL="PKey.md", label="{PKey|new PKey()\l|name\lkeySize\lpublicKey\l|genRsaKey()\lgenEcKey()\lisPrivate()\lclone()\limportKey()\limportFile()\lexportPem()\lexportDer()\lencrypt()\ldecrypt()\lsign()\lverify()\l}"];
    Queue [tooltip="Queue", URL="Queue.md", label="{Queue|new Queue()\l|length\l|add()\loffer()\lremove()\lpoll()\lelement()\lpeek()\lclear()\ltoArray()\l}"];
    BlockQueue [tooltip="BlockQueue", URL="BlockQueue.md", label="{BlockQueue|new BlockQueue()\l|put()\ltake()\l}"];
    Redis [tooltip="Redis", URL="Redis.md", label="{Redis|onsuberror\l|command()\lset()\lsetNX()\lsetXX()\lmset()\lmsetNX()\lappend()\lsetRange()\lgetRange()\lstrlen()\lbitcount()\lget()\lmget()\lgetset()\ldecr()\lincr()\lsetBit()\lgetBit()\lexists()\ltype()\lkeys()\ldel()\lexpire()\lttl()\lpersist()\lrename()\lrenameNX()\lsub()\lunsub()\lpsub()\lunpsub()\lpub()\lgetHash()\lgetList()\lgetSet()\lgetSortedSet()\ldump()\lrestore()\lclose()\l}"];
    RedisHash [tooltip="RedisHash", URL="RedisHash.md", label="{RedisHash|set()\lsetNX()\lmset()\lget()\lmget()\lincr()\lgetAll()\lkeys()\llen()\lexists()\ldel()\l}"];
    RedisList [tooltip="RedisList", URL="RedisList.md", label="{RedisList|push()\lpop()\lrpush()\lrpop()\lset()\lget()\linsertBefore()\linsertAfter()\lremove()\ltrim()\llen()\lrange()\l}"];
    RedisSet [tooltip="RedisSet", URL="RedisSet.md", label="{RedisSet|add()\lremove()\llen()\lexists()\lmembers()\lpop()\lrandMember()\l}"];
    RedisSortedSet [tooltip="RedisSortedSet", URL="RedisSortedSet.md", label="{RedisSortedSet|add()\lscore()\lincr()\lremove()\llen()\lcount()\lrange()\lrangeRev()\lrank()\lrankRev()\l}"];
    Regex [tooltip="Regex", URL="Regex.md", label="{Regex|lastIndex\lglobal\lignoreCase\lmultiline\l|exec()\ltest()\l}"];
    SandBox [tooltip="SandBox", URL="SandBox.md", label="{SandBox|new SandBox()\l|global\l|add()\laddScript()\lremove()\lclone()\lrun()\lresolve()\lrequire()\l}"];
    Smtp [tooltip="Smtp", URL="Smtp.md", label="{Smtp|new Smtp()\l|timeout\lsocket\l|connect()\lcommand()\lhello()\llogin()\lfrom()\lto()\ldata()\lquit()\l}"];
    Stat [tooltip="Stat", URL="Stat.md", label="{Stat|name\lsize\lmode\lmtime\latime\lctime\luid\lgid\l|isWritable()\lisReadable()\lisExecutable()\lisHidden()\lisDirectory()\lisFile()\lisSymbolicLink()\lisMemory()\lisSocket()\l}"];
    Stats [tooltip="Stats", URL="Stats.md", label="{Stats|new Stats()\l|operator[String]\l|inc()\ldec()\ladd()\lreset()\luptime()\l}"];
    Stream [tooltip="Stream", URL="Stream.md", label="{Stream|read()\lwrite()\lclose()\lcopyTo()\l}"];
    BufferedStream [tooltip="BufferedStream", URL="BufferedStream.md", label="{BufferedStream|new BufferedStream()\l|stream\lcharset\lEOL\l|readText()\lreadLine()\lreadLines()\lreadUntil()\lwriteText()\lwriteLine()\l}"];
    SubProcess [tooltip="SubProcess", URL="SubProcess.md", label="{SubProcess|pid\lstdin\lstdout\l|kill()\lwait()\lfindWindow()\l}"];
    SeekableStream [tooltip="SeekableStream", URL="SeekableStream.md", label="{SeekableStream|seek()\ltell()\lrewind()\lsize()\lreadAll()\ltruncate()\leof()\lflush()\lstat()\l}"];
    File [tooltip="File", URL="File.md", label="{File|name\lfd\l|chmod()\l}"];
    MemoryStream [tooltip="MemoryStream", URL="MemoryStream.md", label="{MemoryStream|new MemoryStream()\l|setTime()\lclone()\lclear()\l}"];
    Socket [tooltip="Socket", URL="Socket.md", label="{Socket|new Socket()\l|family\ltype\lremoteAddress\lremotePort\llocalAddress\llocalPort\ltimeout\l|connect()\lbind()\llisten()\laccept()\lrecv()\lrecvfrom()\lsend()\lsendto()\l}"];
    SslSocket [tooltip="SslSocket", URL="SslSocket.md", label="{SslSocket|new SslSocket()\l|verification\lca\lpeerCert\lstream\l|connect()\laccept()\l}"];
    TcpServer [tooltip="TcpServer", URL="TcpServer.md", label="{TcpServer|new TcpServer()\l|socket\lhandler\lstats\l|run()\lasyncRun()\lstop()\l}"];
    HttpServer [tooltip="HttpServer", URL="HttpServer.md", label="{HttpServer|new HttpServer()\l|crossDomain\lforceGZIP\lmaxHeadersCount\lmaxBodySize\lserverName\lhttpStats\l|onerror()\l}"];
    HttpsServer [tooltip="HttpsServer", URL="HttpsServer.md", label="{HttpsServer|new HttpsServer()\l|verification\lca\l}"];
    SslServer [tooltip="SslServer", URL="SslServer.md", label="{SslServer|new SslServer()\l|verification\lca\l}"];
    TextColor [tooltip="TextColor", URL="TextColor.md", label="{TextColor|notice\lwarn\lerror\lhighLight\l}"];
    Timer [tooltip="Timer", URL="Timer.md", label="{Timer|clear()\l}"];
    UrlObject [tooltip="UrlObject", URL="UrlObject.md", label="{UrlObject|new UrlObject()\l|href\lprotocol\lslashes\lauth\lusername\lpassword\lhost\lhostname\lport\lpath\lpathname\lsearch\lquery\lhash\l|parse()\lformat()\lresolve()\lnormalize()\l}"];
    X509Cert [tooltip="X509Cert", URL="X509Cert.md", label="{X509Cert|new X509Cert()\l|version\lserial\lissuer\lsubject\lnotBefore\lnotAfter\lca\lpathlen\lusage\ltype\lpublicKey\lnext\l|load()\lloadFile()\lloadRootCerts()\lverify()\ldump()\lclear()\l}"];
    X509Crl [tooltip="X509Crl", URL="X509Crl.md", label="{X509Crl|new X509Crl()\l|load()\lloadFile()\ldump()\lclear()\l}"];
    X509Req [tooltip="X509Req", URL="X509Req.md", label="{X509Req|new X509Req()\l|subject\lpublicKey\l|load()\lloadFile()\lexportPem()\lexportDer()\lsign()\l}"];
    XmlAttr [tooltip="XmlAttr", URL="XmlAttr.md", label="{XmlAttr|localName\lvalue\lname\lnamespaceURI\lprefix\lnodeName\lnodeValue\l}"];
    XmlNamedNodeMap [tooltip="XmlNamedNodeMap", URL="XmlNamedNodeMap.md", label="{XmlNamedNodeMap|operator[]\l|length\l|item()\lgetNamedItem()\l}"];
    XmlNode [tooltip="XmlNode", URL="XmlNode.md", label="{XmlNode|nodeType\lnodeName\lnodeValue\lownerDocument\lparentNode\lchildNodes\lfirstChild\llastChild\lpreviousSibling\lnextSibling\l|hasChildNodes()\lnormalize()\lcloneNode()\llookupPrefix()\llookupNamespaceURI()\linsertBefore()\linsertAfter()\lappendChild()\lreplaceChild()\lremoveChild()\l}"];
    XmlCharacterData [tooltip="XmlCharacterData", URL="XmlCharacterData.md", label="{XmlCharacterData|data\llength\l|substringData()\lappendData()\linsertData()\ldeleteData()\lreplaceData()\l}"];
    XmlComment [tooltip="XmlComment", URL="XmlComment.md", label="{XmlComment}"];
    XmlText [tooltip="XmlText", URL="XmlText.md", label="{XmlText|splitText()\l}"];
    XmlCDATASection [tooltip="XmlCDATASection", URL="XmlCDATASection.md", label="{XmlCDATASection}"];
    XmlDocument [tooltip="XmlDocument", URL="XmlDocument.md", label="{XmlDocument|new XmlDocument()\l|inputEncoding\lxmlStandalone\lxmlVersion\ldoctype\ldocumentElement\lhead\ltitle\lbody\l|load()\lgetElementsByTagName()\lgetElementsByTagNameNS()\lgetElementById()\lgetElementsByClassName()\lcreateElement()\lcreateElementNS()\lcreateTextNode()\lcreateComment()\lcreateCDATASection()\lcreateProcessingInstruction()\l}"];
    XmlDocumentType [tooltip="XmlDocumentType", URL="XmlDocumentType.md", label="{XmlDocumentType|name\lpublicId\lsystemId\l}"];
    XmlElement [tooltip="XmlElement", URL="XmlElement.md", label="{XmlElement|namespaceURI\lprefix\llocalName\ltagName\lid\ltextContent\linnerHTML\lclassName\lattributes\l|getAttribute()\lgetAttributeNS()\lsetAttribute()\lsetAttributeNS()\lremoveAttribute()\lremoveAttributeNS()\lhasAttribute()\lhasAttributeNS()\lgetElementsByTagName()\lgetElementsByTagNameNS()\lgetElementById()\lgetElementsByClassName()\l}"];
    XmlProcessingInstruction [tooltip="XmlProcessingInstruction", URL="XmlProcessingInstruction.md", label="{XmlProcessingInstruction|target\ldata\l}"];
    XmlNodeList [tooltip="XmlNodeList", URL="XmlNodeList.md", label="{XmlNodeList|operator[]\l|length\l|item()\l}"];
    ZipFile [tooltip="ZipFile", URL="ZipFile.md", label="{ZipFile|namelist()\linfolist()\lgetinfo()\lread()\lreadAll()\lextract()\lextractAll()\lwrite()\lclose()\l}"];
    ZipInfo [tooltip="ZipInfo", URL="ZipInfo.md", label="{ZipInfo|filename\ldate\lcompress_type\lcompress_size\lfile_size\lpassword\ldata\l}"];
    ZmqSocket [tooltip="ZmqSocket", URL="ZmqSocket.md", label="{ZmqSocket|new ZmqSocket()\l|type\l|bind()\lconnect()\lrecv()\lsend()\lclose()\l}"];

    object -> Buffer [dir=back];
    object -> Cipher [dir=back];
    object -> DatagramPacket [dir=back];
    object -> DbConnection [dir=back];
    DbConnection -> MSSQL [dir=back];
    DbConnection -> MySQL [dir=back];
    DbConnection -> SQLite [dir=back];
    object -> DBRow [dir=back];
    object -> Digest [dir=back];
    object -> EventEmitter [dir=back];
    EventEmitter -> Service [dir=back];
    EventEmitter -> WebSocket [dir=back];
    EventEmitter -> WebView [dir=back];
    EventEmitter -> Worker [dir=back];
    object -> EventInfo [dir=back];
    object -> Fiber [dir=back];
    object -> GridFS [dir=back];
    object -> Handler [dir=back];
    Handler -> AsyncWait [dir=back];
    Handler -> Chain [dir=back];
    Handler -> HandlerEx [dir=back];
    HandlerEx -> HttpHandler [dir=back];
    HandlerEx -> WebSocketHandler [dir=back];
    Handler -> Routing [dir=back];
    Handler -> SslHandler [dir=back];
    object -> HeapGraphEdge [dir=back];
    object -> HeapGraphNode [dir=back];
    object -> HeapSnapshot [dir=back];
    object -> HttpClient [dir=back];
    object -> HttpCollection [dir=back];
    object -> HttpCookie [dir=back];
    object -> HttpUploadData [dir=back];
    object -> Image [dir=back];
    object -> Int64 [dir=back];
    object -> LevelDB [dir=back];
    object -> List [dir=back];
    List -> DBResult [dir=back];
    object -> Lock [dir=back];
    Lock -> Condition [dir=back];
    Lock -> Event [dir=back];
    Lock -> Semaphore [dir=back];
    object -> LruCache [dir=back];
    object -> Map [dir=back];
    object -> Message [dir=back];
    Message -> HttpMessage [dir=back];
    HttpMessage -> HttpRequest [dir=back];
    HttpMessage -> HttpResponse [dir=back];
    Message -> WebSocketMessage [dir=back];
    object -> MongoCollection [dir=back];
    object -> MongoCursor [dir=back];
    object -> MongoDB [dir=back];
    object -> MongoID [dir=back];
    object -> PKey [dir=back];
    object -> Queue [dir=back];
    Queue -> BlockQueue [dir=back];
    object -> Redis [dir=back];
    object -> RedisHash [dir=back];
    object -> RedisList [dir=back];
    object -> RedisSet [dir=back];
    object -> RedisSortedSet [dir=back];
    object -> Regex [dir=back];
    object -> SandBox [dir=back];
    object -> Smtp [dir=back];
    object -> Stat [dir=back];
    object -> Stats [dir=back];
    object -> Stream [dir=back];
    Stream -> BufferedStream [dir=back];
    BufferedStream -> SubProcess [dir=back];
    Stream -> SeekableStream [dir=back];
    SeekableStream -> File [dir=back];
    SeekableStream -> MemoryStream [dir=back];
    Stream -> Socket [dir=back];
    Stream -> SslSocket [dir=back];
    object -> TcpServer [dir=back];
    TcpServer -> HttpServer [dir=back];
    HttpServer -> HttpsServer [dir=back];
    TcpServer -> SslServer [dir=back];
    object -> TextColor [dir=back];
    object -> Timer [dir=back];
    object -> UrlObject [dir=back];
    object -> X509Cert [dir=back];
    object -> X509Crl [dir=back];
    object -> X509Req [dir=back];
    object -> XmlAttr [dir=back];
    object -> XmlNamedNodeMap [dir=back];
    object -> XmlNode [dir=back];
    XmlNode -> XmlCharacterData [dir=back];
    XmlCharacterData -> XmlComment [dir=back];
    XmlCharacterData -> XmlText [dir=back];
    XmlText -> XmlCDATASection [dir=back];
    XmlNode -> XmlDocument [dir=back];
    XmlNode -> XmlDocumentType [dir=back];
    XmlNode -> XmlElement [dir=back];
    XmlNode -> XmlProcessingInstruction [dir=back];
    object -> XmlNodeList [dir=back];
    object -> ZipFile [dir=back];
    object -> ZipInfo [dir=back];
    object -> ZmqSocket [dir=back];
}
```

## 成员函数
        
### dispose
**强制回收对象，调用此方法后，对象资源将立即释放**

```JavaScript
object.dispose();
```

--------------------------
### equals
**比较当前对象与给定的对象是否相等**

```JavaScript
Boolean object.equals(object expected);
```

调用参数:
* expected: object, 制定比较的目标对象

返回结果:
* Boolean, 返回对象比较的结果

--------------------------
### toString
**返回对象的字符串表示，一般返回 "[Native Object]"，对象可以根据自己的特性重新实现**

```JavaScript
String object.toString();
```

返回结果:
* String, 返回对象的字符串表示

--------------------------
### toJSON
**返回对象的 JSON 格式表示，一般返回对象定义的可读属性集合**

```JavaScript
Value object.toJSON(String key = "");
```

调用参数:
* key: String, 未使用

返回结果:
* Value, 返回包含可 JSON 序列化的值

--------------------------
### valueOf
**返回对象本身的数值**

```JavaScript
Value object.valueOf();
```

返回结果:
* Value, 返回对象本身的数值

