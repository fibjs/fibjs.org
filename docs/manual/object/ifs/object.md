# 对象 object
基础对象，所有对象均继承于此

## 继承关系
<dot>digraph {node [ fontname = "Helvetica,sans-Serif", fontsize = 10, shape = "record" ];
object[tooltip="object", style="filled", fillcolor="lightgray", label="{object|dispose()\lequals()\ltoString()\ltoJSON()\lvalueOf()\l}"];
Buffer[tooltip="Buffer", style="filled", fillcolor="white", URL="Buffer.md", label="{Buffer|new Buffer()\l|operator[]\l|isBuffer()\lconcat()\l|length\l|resize()\lappend()\lwrite()\lfill()\lindexOf()\lcompare()\lcopy()\lreadUInt8()\lreadUInt16LE()\lreadUInt16BE()\lreadUInt32LE()\lreadUInt32BE()\lreadUIntLE()\lreadUIntBE()\lreadInt8()\lreadInt16LE()\lreadInt16BE()\lreadInt32LE()\lreadInt32BE()\lreadIntLE()\lreadIntBE()\lreadInt64LE()\lreadInt64BE()\lreadFloatLE()\lreadFloatBE()\lreadDoubleLE()\lreadDoubleBE()\lwriteUInt8()\lwriteUInt16LE()\lwriteUInt16BE()\lwriteUInt32LE()\lwriteUInt32BE()\lwriteUIntLE()\lwriteUIntBE()\lwriteInt8()\lwriteInt16LE()\lwriteInt16BE()\lwriteInt32LE()\lwriteInt32BE()\lwriteIntLE()\lwriteIntBE()\lwriteInt64LE()\lwriteInt64BE()\lwriteFloatLE()\lwriteFloatBE()\lwriteDoubleLE()\lwriteDoubleBE()\lslice()\lhex()\lbase64()\ltoArray()\ltoString()\l}"];
Cipher[tooltip="Cipher", style="filled", fillcolor="white", URL="Cipher.md", label="{Cipher|new Cipher()\l|name\lkeySize\livSize\lblockSize\l|paddingMode()\lencrypt()\ldecrypt()\l}"];
DatagramPacket[tooltip="DatagramPacket", style="filled", fillcolor="white", URL="DatagramPacket.md", label="{DatagramPacket|data\laddress\lport\l}"];
DbConnection[tooltip="DbConnection", style="filled", fillcolor="white", URL="DbConnection.md", label="{DbConnection|type\l|close()\lbegin()\lcommit()\lrollback()\lexecute()\lformat()\l}"];
MSSQL[tooltip="MSSQL", style="filled", fillcolor="white", URL="MSSQL.md", label="{MSSQL|use()\l}"];
MySQL[tooltip="MySQL", style="filled", fillcolor="white", URL="MySQL.md", label="{MySQL|rxBufferSize\ltxBufferSize\l|use()\l}"];
SQLite[tooltip="SQLite", style="filled", fillcolor="white", URL="SQLite.md", label="{SQLite|fileName\ltimeout\l|backup()\l}"];
DBRow[tooltip="DBRow", style="filled", fillcolor="white", URL="DBRow.md", label="{DBRow|operator[]\loperator[String]\l}"];
Digest[tooltip="Digest", style="filled", fillcolor="white", URL="Digest.md", label="{Digest|size\l|update()\ldigest()\l}"];
EventEmitter[tooltip="EventEmitter", style="filled", fillcolor="white", URL="EventEmitter.md", label="{EventEmitter|new EventEmitter()\l|defaultMaxListeners\l|on()\laddListener()\lprependListener()\lonce()\lprependOnceListener()\loff()\lremoveListener()\lremoveAllListeners()\lsetMaxListeners()\lgetMaxListeners()\llisteners()\llistenerCount()\leventNames()\lemit()\l}"];
Service[tooltip="Service", style="filled", fillcolor="white", URL="Service.md", label="{Service|new Service()\l|name\lonstop\lonpause\loncontinue\l|install()\lremove()\lstart()\lstop()\lrestart()\lrun()\lisInstalled()\lisRunning()\l}"];
WebSocket[tooltip="WebSocket", style="filled", fillcolor="white", URL="WebSocket.md", label="{WebSocket|new WebSocket()\l|url\lprotocol\lorigin\lreadyState\lonopen\lonmessage\lonclose\lonerror\l|close()\lsend()\l}"];
WebView[tooltip="WebView", style="filled", fillcolor="white", URL="WebView.md", label="{WebView|visible\lonload\lonmove\lonresize\lonclose\lonmessage\l|setHtml()\lprint()\lclose()\lwait()\lpostMessage()\l}"];
Worker[tooltip="Worker", style="filled", fillcolor="white", URL="Worker.md", label="{Worker|new Worker()\l|onmessage\l|postMessage()\l}"];
EventInfo[tooltip="EventInfo", style="filled", fillcolor="white", URL="EventInfo.md", label="{EventInfo|operator[String]\l|code\lreason\ltype\ltarget\l}"];
Fiber[tooltip="Fiber", style="filled", fillcolor="white", URL="Fiber.md", label="{Fiber|caller\ltraceInfo\l|join()\l}"];
GridFS[tooltip="GridFS", style="filled", fillcolor="white", URL="GridFS.md", label="{GridFS|files\lchunks\l|retrieve()\lstore()\lexists()\lremove()\l}"];
Handler[tooltip="Handler", style="filled", fillcolor="white", URL="Handler.md", label="{Handler|new Handler()\l|invoke()\l}"];
AsyncWait[tooltip="AsyncWait", style="filled", fillcolor="white", URL="AsyncWait.md", label="{AsyncWait|end()\l}"];
Chain[tooltip="Chain", style="filled", fillcolor="white", URL="Chain.md", label="{Chain|new Chain()\l|append()\l}"];
HandlerEx[tooltip="HandlerEx", style="filled", fillcolor="white", URL="HandlerEx.md", label="{HandlerEx|handler\lstats\l|onerror()\l}"];
HttpHandler[tooltip="HttpHandler", style="filled", fillcolor="white", URL="HttpHandler.md", label="{HttpHandler|new HttpHandler()\l|crossDomain\lforceGZIP\lmaxHeadersCount\lmaxUploadSize\l}"];
WebSocketHandler[tooltip="WebSocketHandler", style="filled", fillcolor="white", URL="WebSocketHandler.md", label="{WebSocketHandler|new WebSocketHandler()\l|maxSize\l}"];
Routing[tooltip="Routing", style="filled", fillcolor="white", URL="Routing.md", label="{Routing|new Routing()\l|append()\lall()\lget()\lpost()\ldel()\lput()\lpatch()\l}"];
SslHandler[tooltip="SslHandler", style="filled", fillcolor="white", URL="SslHandler.md", label="{SslHandler|new SslHandler()\l|verification\lca\lhandler\l}"];
HeapGraphEdge[tooltip="HeapGraphEdge", style="filled", fillcolor="white", URL="HeapGraphEdge.md", label="{HeapGraphEdge|type\lname\ldescription\l|getFromNode()\lgetToNode()\l}"];
HeapGraphNode[tooltip="HeapGraphNode", style="filled", fillcolor="white", URL="HeapGraphNode.md", label="{HeapGraphNode|type\lname\ldescription\lid\lshallowSize\lchilds\l}"];
HeapSnapshot[tooltip="HeapSnapshot", style="filled", fillcolor="white", URL="HeapSnapshot.md", label="{HeapSnapshot|time\lroot\lnodes\l|diff()\lgetNodeById()\lsave()\l}"];
HttpClient[tooltip="HttpClient", style="filled", fillcolor="white", URL="HttpClient.md", label="{HttpClient|new HttpClient()\l|cookies\ltimeout\lenableCookie\lautoRedirect\luserAgent\l|request()\lget()\lpost()\ldel()\lput()\lpatch()\l}"];
HttpCollection[tooltip="HttpCollection", style="filled", fillcolor="white", URL="HttpCollection.md", label="{HttpCollection|operator[String]\l|clear()\lhas()\lfirst()\lall()\ladd()\lset()\lremove()\l}"];
HttpCookie[tooltip="HttpCookie", style="filled", fillcolor="white", URL="HttpCookie.md", label="{HttpCookie|new HttpCookie()\l|name\lvalue\ldomain\lpath\lexpires\lhttpOnly\lsecure\l|parse()\lmatch()\l}"];
HttpUploadData[tooltip="HttpUploadData", style="filled", fillcolor="white", URL="HttpUploadData.md", label="{HttpUploadData|fileName\lcontentType\lcontentTransferEncoding\lbody\l}"];
Image[tooltip="Image", style="filled", fillcolor="white", URL="Image.md", label="{Image|width\lheight\lformat\ltype\lcolorsTotal\ltransparent\lprogressive\lalphaBlending\l|getData()\lsave()\lcolorAllocate()\lcolorAllocateAlpha()\lcolorClosest()\lcolorClosestHWB()\lcolorClosestAlpha()\lcolorExact()\lcolorExactAlpha()\lcolorResolve()\lcolorResolveAlpha()\lcolorDeallocate()\lclip()\lgetPixel()\lgetTrueColorPixel()\lsetPixel()\lsetThickness()\lline()\lrectangle()\lfilledRectangle()\lpolygon()\lopenPolygon()\lfilledPolygon()\lellipse()\lfilledEllipse()\larc()\lfilledArc()\lfill()\lfillToBorder()\lcolorReplace()\lclone()\lresample()\lcrop()\lflip()\lrotate()\lconvert()\lcopy()\lcopyMerge()\lcopyMergeGray()\lcopyResized()\lcopyResampled()\lcopyRotated()\lfilter()\laffine()\lgaussianBlur()\l}"];
Int64[tooltip="Int64", style="filled", fillcolor="white", URL="Int64.md", label="{Int64|new Int64()\l|hi\llo\l|compare()\lshiftLeft()\lshiftRight()\land()\lor()\lxor()\ladd()\lsub()\ltoNumber()\ltoString()\l}"];
LevelDB[tooltip="LevelDB", style="filled", fillcolor="white", URL="LevelDB.md", label="{LevelDB|has()\lget()\lmget()\lset()\lmset()\lmremove()\lremove()\lforEach()\lbetween()\lbegin()\lcommit()\lclose()\l}"];
List[tooltip="List", style="filled", fillcolor="white", URL="List.md", label="{List|new List()\l|operator[]\l|length\l|freeze()\lresize()\lpush()\lindexOf()\llastIndexOf()\lpush()\lpushArray()\lpop()\lslice()\lconcat()\levery()\lsome()\lfilter()\lforEach()\lmap()\lreduce()\lsort()\ltoArray()\l}"];
DBResult[tooltip="DBResult", style="filled", fillcolor="white", URL="DBResult.md", label="{DBResult|insertId\laffected\lfields\l}"];
Lock[tooltip="Lock", style="filled", fillcolor="white", URL="Lock.md", label="{Lock|new Lock()\l|acquire()\lrelease()\lcount()\l}"];
Condition[tooltip="Condition", style="filled", fillcolor="white", URL="Condition.md", label="{Condition|new Condition()\l|wait()\lnotify()\lnotifyAll()\l}"];
Event[tooltip="Event", style="filled", fillcolor="white", URL="Event.md", label="{Event|new Event()\l|isSet()\lset()\lpulse()\lclear()\lwait()\l}"];
Semaphore[tooltip="Semaphore", style="filled", fillcolor="white", URL="Semaphore.md", label="{Semaphore|new Semaphore()\l|wait()\lpost()\ltrywait()\l}"];
LruCache[tooltip="LruCache", style="filled", fillcolor="white", URL="LruCache.md", label="{LruCache|new LruCache()\l|size\ltimeout\l|clear()\lhas()\lget()\lset()\lremove()\lisEmpty()\l}"];
Map[tooltip="Map", style="filled", fillcolor="white", URL="Map.md", label="{Map|new Map()\l|operator[String]\l|size\l|clear()\lhas()\lget()\lput()\lset()\lremove()\lisEmpty()\l}"];
Message[tooltip="Message", style="filled", fillcolor="white", URL="Message.md", label="{Message|new Message()\l|TEXT\lBINARY\l|value\lparams\ltype\ldata\lbody\llength\lstream\lresponse\llastError\l|read()\lreadAll()\lwrite()\lend()\lisEnded()\lclear()\lsendTo()\lreadFrom()\l}"];
HttpMessage[tooltip="HttpMessage", style="filled", fillcolor="white", URL="HttpMessage.md", label="{HttpMessage|protocol\lheaders\lkeepAlive\lupgrade\lmaxHeadersCount\lmaxUploadSize\lsocket\l|hasHeader()\lfirstHeader()\lallHeader()\laddHeader()\lsetHeader()\lremoveHeader()\l}"];
HttpRequest[tooltip="HttpRequest", style="filled", fillcolor="white", URL="HttpRequest.md", label="{HttpRequest|new HttpRequest()\l|method\laddress\lqueryString\lcookies\lform\lquery\l}"];
HttpResponse[tooltip="HttpResponse", style="filled", fillcolor="white", URL="HttpResponse.md", label="{HttpResponse|new HttpResponse()\l|status\lcookies\l|addCookie()\lredirect()\lsendHeader()\l}"];
WebSocketMessage[tooltip="WebSocketMessage", style="filled", fillcolor="white", URL="WebSocketMessage.md", label="{WebSocketMessage|new WebSocketMessage()\l|masked\lmaxSize\l}"];
MongoCollection[tooltip="MongoCollection", style="filled", fillcolor="white", URL="MongoCollection.md", label="{MongoCollection|operator[String]\l|find()\lfindOne()\lfindAndModify()\linsert()\lsave()\lupdate()\lremove()\lrunCommand()\ldrop()\lensureIndex()\lreIndex()\ldropIndex()\ldropIndexes()\lgetIndexes()\lgetCollection()\l}"];
MongoCursor[tooltip="MongoCursor", style="filled", fillcolor="white", URL="MongoCursor.md", label="{MongoCursor|skip()\llimit()\lsort()\lhasNext()\lnext()\lcount()\lsize()\lforEach()\lmap()\ltoArray()\lhint()\l}"];
MongoDB[tooltip="MongoDB", style="filled", fillcolor="white", URL="MongoDB.md", label="{MongoDB|operator[String]\l|fs\l|getCollection()\lrunCommand()\loid()\lclose()\l}"];
MongoID[tooltip="MongoID", style="filled", fillcolor="white", URL="MongoID.md", label="{MongoID}"];
PKey[tooltip="PKey", style="filled", fillcolor="white", URL="PKey.md", label="{PKey|new PKey()\l|name\lkeySize\lpublicKey\l|genRsaKey()\lgenEcKey()\lisPrivate()\lclone()\limportKey()\limportFile()\lexportPem()\lexportDer()\lencrypt()\ldecrypt()\lsign()\lverify()\l}"];
Queue[tooltip="Queue", style="filled", fillcolor="white", URL="Queue.md", label="{Queue|new Queue()\l|length\l|add()\loffer()\lremove()\lpoll()\lelement()\lpeek()\lclear()\ltoArray()\l}"];
BlockQueue[tooltip="BlockQueue", style="filled", fillcolor="white", URL="BlockQueue.md", label="{BlockQueue|new BlockQueue()\l|put()\ltake()\l}"];
Redis[tooltip="Redis", style="filled", fillcolor="white", URL="Redis.md", label="{Redis|onsuberror\l|command()\lset()\lsetNX()\lsetXX()\lmset()\lmsetNX()\lappend()\lsetRange()\lgetRange()\lstrlen()\lbitcount()\lget()\lmget()\lgetset()\ldecr()\lincr()\lsetBit()\lgetBit()\lexists()\ltype()\lkeys()\ldel()\lexpire()\lttl()\lpersist()\lrename()\lrenameNX()\lsub()\lunsub()\lpsub()\lunpsub()\lpub()\lgetHash()\lgetList()\lgetSet()\lgetSortedSet()\ldump()\lrestore()\lclose()\l}"];
RedisHash[tooltip="RedisHash", style="filled", fillcolor="white", URL="RedisHash.md", label="{RedisHash|set()\lsetNX()\lmset()\lget()\lmget()\lincr()\lgetAll()\lkeys()\llen()\lexists()\ldel()\l}"];
RedisList[tooltip="RedisList", style="filled", fillcolor="white", URL="RedisList.md", label="{RedisList|push()\lpop()\lrpush()\lrpop()\lset()\lget()\linsertBefore()\linsertAfter()\lremove()\ltrim()\llen()\lrange()\l}"];
RedisSet[tooltip="RedisSet", style="filled", fillcolor="white", URL="RedisSet.md", label="{RedisSet|add()\lremove()\llen()\lexists()\lmembers()\lpop()\lrandMember()\l}"];
RedisSortedSet[tooltip="RedisSortedSet", style="filled", fillcolor="white", URL="RedisSortedSet.md", label="{RedisSortedSet|add()\lscore()\lincr()\lremove()\llen()\lcount()\lrange()\lrangeRev()\lrank()\lrankRev()\l}"];
Regex[tooltip="Regex", style="filled", fillcolor="white", URL="Regex.md", label="{Regex|lastIndex\lglobal\lignoreCase\lmultiline\l|exec()\ltest()\l}"];
SandBox[tooltip="SandBox", style="filled", fillcolor="white", URL="SandBox.md", label="{SandBox|new SandBox()\l|global\l|add()\laddScript()\lremove()\lclone()\lrun()\lresolve()\lrequire()\l}"];
Smtp[tooltip="Smtp", style="filled", fillcolor="white", URL="Smtp.md", label="{Smtp|new Smtp()\l|timeout\lsocket\l|connect()\lcommand()\lhello()\llogin()\lfrom()\lto()\ldata()\lquit()\l}"];
Stat[tooltip="Stat", style="filled", fillcolor="white", URL="Stat.md", label="{Stat|name\lsize\lmode\lmtime\latime\lctime\luid\lgid\l|isWritable()\lisReadable()\lisExecutable()\lisHidden()\lisDirectory()\lisFile()\lisSymbolicLink()\lisMemory()\lisSocket()\l}"];
Stats[tooltip="Stats", style="filled", fillcolor="white", URL="Stats.md", label="{Stats|new Stats()\l|operator[String]\l|inc()\ldec()\ladd()\lreset()\luptime()\l}"];
Stream[tooltip="Stream", style="filled", fillcolor="white", URL="Stream.md", label="{Stream|read()\lwrite()\lclose()\lcopyTo()\l}"];
BufferedStream[tooltip="BufferedStream", style="filled", fillcolor="white", URL="BufferedStream.md", label="{BufferedStream|new BufferedStream()\l|stream\lcharset\lEOL\l|readText()\lreadLine()\lreadLines()\lreadUntil()\lwriteText()\lwriteLine()\l}"];
SubProcess[tooltip="SubProcess", style="filled", fillcolor="white", URL="SubProcess.md", label="{SubProcess|pid\lstdin\lstdout\l|kill()\lwait()\lfindWindow()\l}"];
SeekableStream[tooltip="SeekableStream", style="filled", fillcolor="white", URL="SeekableStream.md", label="{SeekableStream|seek()\ltell()\lrewind()\lsize()\lreadAll()\ltruncate()\leof()\lflush()\lstat()\l}"];
File[tooltip="File", style="filled", fillcolor="white", URL="File.md", label="{File|name\lfd\l|chmod()\l}"];
MemoryStream[tooltip="MemoryStream", style="filled", fillcolor="white", URL="MemoryStream.md", label="{MemoryStream|new MemoryStream()\l|setTime()\lclone()\lclear()\l}"];
Socket[tooltip="Socket", style="filled", fillcolor="white", URL="Socket.md", label="{Socket|new Socket()\l|family\ltype\lremoteAddress\lremotePort\llocalAddress\llocalPort\ltimeout\l|connect()\lbind()\llisten()\laccept()\lrecv()\lrecvfrom()\lsend()\lsendto()\l}"];
SslSocket[tooltip="SslSocket", style="filled", fillcolor="white", URL="SslSocket.md", label="{SslSocket|new SslSocket()\l|verification\lca\lpeerCert\lstream\l|connect()\laccept()\l}"];
TcpServer[tooltip="TcpServer", style="filled", fillcolor="white", URL="TcpServer.md", label="{TcpServer|new TcpServer()\l|socket\lhandler\lstats\l|run()\lasyncRun()\lstop()\l}"];
HttpServer[tooltip="HttpServer", style="filled", fillcolor="white", URL="HttpServer.md", label="{HttpServer|new HttpServer()\l|crossDomain\lforceGZIP\lmaxHeadersCount\lmaxUploadSize\lhttpStats\l|onerror()\l}"];
HttpsServer[tooltip="HttpsServer", style="filled", fillcolor="white", URL="HttpsServer.md", label="{HttpsServer|new HttpsServer()\l|verification\lca\l}"];
SslServer[tooltip="SslServer", style="filled", fillcolor="white", URL="SslServer.md", label="{SslServer|new SslServer()\l|verification\lca\l}"];
TextColor[tooltip="TextColor", style="filled", fillcolor="white", URL="TextColor.md", label="{TextColor|notice\lwarn\lerror\lhighLight\l}"];
Timer[tooltip="Timer", style="filled", fillcolor="white", URL="Timer.md", label="{Timer|clear()\l}"];
UrlObject[tooltip="UrlObject", style="filled", fillcolor="white", URL="UrlObject.md", label="{UrlObject|new UrlObject()\l|href\lprotocol\lslashes\lauth\lusername\lpassword\lhost\lhostname\lport\lpath\lpathname\lsearch\lquery\lhash\l|parse()\lformat()\lresolve()\lnormalize()\l}"];
X509Cert[tooltip="X509Cert", style="filled", fillcolor="white", URL="X509Cert.md", label="{X509Cert|new X509Cert()\l|version\lserial\lissuer\lsubject\lnotBefore\lnotAfter\lca\lpathlen\lusage\ltype\lpublicKey\lnext\l|load()\lloadFile()\lloadRootCerts()\lverify()\ldump()\lclear()\l}"];
X509Crl[tooltip="X509Crl", style="filled", fillcolor="white", URL="X509Crl.md", label="{X509Crl|new X509Crl()\l|load()\lloadFile()\ldump()\lclear()\l}"];
X509Req[tooltip="X509Req", style="filled", fillcolor="white", URL="X509Req.md", label="{X509Req|new X509Req()\l|subject\lpublicKey\l|load()\lloadFile()\lexportPem()\lexportDer()\lsign()\l}"];
XmlAttr[tooltip="XmlAttr", style="filled", fillcolor="white", URL="XmlAttr.md", label="{XmlAttr|localName\lvalue\lname\lnamespaceURI\lprefix\lnodeName\lnodeValue\l}"];
XmlNamedNodeMap[tooltip="XmlNamedNodeMap", style="filled", fillcolor="white", URL="XmlNamedNodeMap.md", label="{XmlNamedNodeMap|operator[]\l|length\l|item()\lgetNamedItem()\l}"];
XmlNode[tooltip="XmlNode", style="filled", fillcolor="white", URL="XmlNode.md", label="{XmlNode|nodeType\lnodeName\lnodeValue\lownerDocument\lparentNode\lchildNodes\lfirstChild\llastChild\lpreviousSibling\lnextSibling\l|hasChildNodes()\lnormalize()\lcloneNode()\llookupPrefix()\llookupNamespaceURI()\linsertBefore()\linsertAfter()\lappendChild()\lreplaceChild()\lremoveChild()\l}"];
XmlCharacterData[tooltip="XmlCharacterData", style="filled", fillcolor="white", URL="XmlCharacterData.md", label="{XmlCharacterData|data\llength\l|substringData()\lappendData()\linsertData()\ldeleteData()\lreplaceData()\l}"];
XmlComment[tooltip="XmlComment", style="filled", fillcolor="white", URL="XmlComment.md", label="{XmlComment}"];
XmlText[tooltip="XmlText", style="filled", fillcolor="white", URL="XmlText.md", label="{XmlText|splitText()\l}"];
XmlCDATASection[tooltip="XmlCDATASection", style="filled", fillcolor="white", URL="XmlCDATASection.md", label="{XmlCDATASection}"];
XmlDocument[tooltip="XmlDocument", style="filled", fillcolor="white", URL="XmlDocument.md", label="{XmlDocument|new XmlDocument()\l|inputEncoding\lxmlStandalone\lxmlVersion\ldoctype\ldocumentElement\lhead\ltitle\lbody\l|load()\lgetElementsByTagName()\lgetElementsByTagNameNS()\lcreateElement()\lcreateElementNS()\lcreateTextNode()\lcreateComment()\lcreateCDATASection()\lcreateProcessingInstruction()\l}"];
XmlDocumentType[tooltip="XmlDocumentType", style="filled", fillcolor="white", URL="XmlDocumentType.md", label="{XmlDocumentType|name\lpublicId\lsystemId\l}"];
XmlElement[tooltip="XmlElement", style="filled", fillcolor="white", URL="XmlElement.md", label="{XmlElement|namespaceURI\lprefix\llocalName\ltagName\lid\ltextContent\linnerHTML\lclassName\lattributes\l|getAttribute()\lgetAttributeNS()\lsetAttribute()\lsetAttributeNS()\lremoveAttribute()\lremoveAttributeNS()\lhasAttribute()\lhasAttributeNS()\lgetElementsByTagName()\lgetElementsByTagNameNS()\l}"];
XmlProcessingInstruction[tooltip="XmlProcessingInstruction", style="filled", fillcolor="white", URL="XmlProcessingInstruction.md", label="{XmlProcessingInstruction|target\ldata\l}"];
XmlNodeList[tooltip="XmlNodeList", style="filled", fillcolor="white", URL="XmlNodeList.md", label="{XmlNodeList|operator[]\l|length\l|item()\l}"];
ZipFile[tooltip="ZipFile", style="filled", fillcolor="white", URL="ZipFile.md", label="{ZipFile|namelist()\linfolist()\lgetinfo()\lread()\lreadAll()\lextract()\lextractAll()\lwrite()\lclose()\l}"];
ZipInfo[tooltip="ZipInfo", style="filled", fillcolor="white", URL="ZipInfo.md", label="{ZipInfo|filename\ldate\lcompress_type\lcompress_size\lfile_size\lpassword\ldata\l}"];
ZmqSocket[tooltip="ZmqSocket", style="filled", fillcolor="white", URL="ZmqSocket.md", label="{ZmqSocket|new ZmqSocket()\l|type\l|bind()\lconnect()\lrecv()\lsend()\lclose()\l}"];
object -> Buffer [dir=back]
object -> Cipher [dir=back]
object -> DatagramPacket [dir=back]
object -> DbConnection [dir=back]
DbConnection -> MSSQL [dir=back]
DbConnection -> MySQL [dir=back]
DbConnection -> SQLite [dir=back]
object -> DBRow [dir=back]
object -> Digest [dir=back]
object -> EventEmitter [dir=back]
EventEmitter -> Service [dir=back]
EventEmitter -> WebSocket [dir=back]
EventEmitter -> WebView [dir=back]
EventEmitter -> Worker [dir=back]
object -> EventInfo [dir=back]
object -> Fiber [dir=back]
object -> GridFS [dir=back]
object -> Handler [dir=back]
Handler -> AsyncWait [dir=back]
Handler -> Chain [dir=back]
Handler -> HandlerEx [dir=back]
HandlerEx -> HttpHandler [dir=back]
HandlerEx -> WebSocketHandler [dir=back]
Handler -> Routing [dir=back]
Handler -> SslHandler [dir=back]
object -> HeapGraphEdge [dir=back]
object -> HeapGraphNode [dir=back]
object -> HeapSnapshot [dir=back]
object -> HttpClient [dir=back]
object -> HttpCollection [dir=back]
object -> HttpCookie [dir=back]
object -> HttpUploadData [dir=back]
object -> Image [dir=back]
object -> Int64 [dir=back]
object -> LevelDB [dir=back]
object -> List [dir=back]
List -> DBResult [dir=back]
object -> Lock [dir=back]
Lock -> Condition [dir=back]
Lock -> Event [dir=back]
Lock -> Semaphore [dir=back]
object -> LruCache [dir=back]
object -> Map [dir=back]
object -> Message [dir=back]
Message -> HttpMessage [dir=back]
HttpMessage -> HttpRequest [dir=back]
HttpMessage -> HttpResponse [dir=back]
Message -> WebSocketMessage [dir=back]
object -> MongoCollection [dir=back]
object -> MongoCursor [dir=back]
object -> MongoDB [dir=back]
object -> MongoID [dir=back]
object -> PKey [dir=back]
object -> Queue [dir=back]
Queue -> BlockQueue [dir=back]
object -> Redis [dir=back]
object -> RedisHash [dir=back]
object -> RedisList [dir=back]
object -> RedisSet [dir=back]
object -> RedisSortedSet [dir=back]
object -> Regex [dir=back]
object -> SandBox [dir=back]
object -> Smtp [dir=back]
object -> Stat [dir=back]
object -> Stats [dir=back]
object -> Stream [dir=back]
Stream -> BufferedStream [dir=back]
BufferedStream -> SubProcess [dir=back]
Stream -> SeekableStream [dir=back]
SeekableStream -> File [dir=back]
SeekableStream -> MemoryStream [dir=back]
Stream -> Socket [dir=back]
Stream -> SslSocket [dir=back]
object -> TcpServer [dir=back]
TcpServer -> HttpServer [dir=back]
HttpServer -> HttpsServer [dir=back]
TcpServer -> SslServer [dir=back]
object -> TextColor [dir=back]
object -> Timer [dir=back]
object -> UrlObject [dir=back]
object -> X509Cert [dir=back]
object -> X509Crl [dir=back]
object -> X509Req [dir=back]
object -> XmlAttr [dir=back]
object -> XmlNamedNodeMap [dir=back]
object -> XmlNode [dir=back]
XmlNode -> XmlCharacterData [dir=back]
XmlCharacterData -> XmlComment [dir=back]
XmlCharacterData -> XmlText [dir=back]
XmlText -> XmlCDATASection [dir=back]
XmlNode -> XmlDocument [dir=back]
XmlNode -> XmlDocumentType [dir=back]
XmlNode -> XmlElement [dir=back]
XmlNode -> XmlProcessingInstruction [dir=back]
object -> XmlNodeList [dir=back]
object -> ZipFile [dir=back]
object -> ZipInfo [dir=back]
object -> ZmqSocket [dir=back]
}</dot>

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

