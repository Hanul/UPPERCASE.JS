
## Configuration
###### BROWSER_CONFIG
각 설정은 `BROWSER_CONFIG.isSupportingX2 = true;` 와 같이 설정합니다.
* `isSupportingX2` 레티나 디스플레이 등을 대응하기 위해 이미지 픽셀을 2배씩 늘려주는 설정을 사용할 경우 `true`로 지정합니다.
* `isUsingFlashCanvasPro` FlashCanvas Pro 버젼을 사용하고자 할 때 `true`로 지정합니다. FlashCanvas Pro의 라이센스를 구매하셔야 합니다. http://flashcanvas.net/purchase
* `fixScriptsFolderPath` BROWSER-FIX 스크립트들이 저장되어 있는 폴더의 경로를 지정합니다.



## UPPERCASE.JS-NODE
node.js 기반 프로젝트에서 사용 가능한 다양한 기능들을 제공하는 유틸리티 라이브러리입니다.
node.js를 위한 유틸리티를 찾고 계신다면 UPPERCASE.JS-NODE를 사용해보세요.

* UPPERCASE.JS-COMMON.js가 필요합니다.

### node.js에서 사용하기
* `INIT_OBJECTS();`은 한번만 실행합니다.

```javascript
require('UPPERCASE.JS-COMMON.js');
require('UPPERCASE.JS-NODE.js');

// 선언부
var
// method
method = METHOD({
	run : function() {
		console.log('HELLO UPPERCASE.JS!');
	}
});

// init all singleton classes.
INIT_OBJECTS();

// 실행부
method();
```

#### Node 패키지

###### Clustering
* `CPU_CLUSTERING(work)` cpu clustering work. [예제보기](https://github.com/UPPERCASE-Series/UPPERCASE.JS/blob/master/EXAMPLES/NODE/CLUSTERING/CPU_CLUSTERING.js)
* `SERVER_CLUSTERING({servers:, thisServerName:, port:}, work)` server clustering work. [예제보기](https://github.com/UPPERCASE-Series/UPPERCASE.JS/blob/master/EXAMPLES/NODE/CLUSTERING/SERVER_CLUSTERING.js)
* `SHARED_STORE(name)` Cpu and server clustering shared store class [예제보기](https://github.com/UPPERCASE-Series/UPPERCASE.JS/blob/master/EXAMPLES/NODE/CLUSTERING/SHARED_STORE.js)

###### File
* `WRITE_FILE({path:, content:}, callbackOrHandlers)` `WRITE_FILE({path:, buffer:}, callbackOrHandlers)` `WRITE_FILE({path:, content: isSync:}, callbackOrHandlers)` write file. [예제보기](https://github.com/UPPERCASE-Series/UPPERCASE.JS/blob/master/EXAMPLES/NODE/FILE/WRITE_FILE.js)
* `READ_FILE(path, callbackOrHandlers)` `READ_FILE({path:, isSync:}, callbackOrHandlers)` read file. [예제보기](https://github.com/UPPERCASE-Series/UPPERCASE.JS/blob/master/EXAMPLES/NODE/FILE/READ_FILE.js)
* `COPY_FILE({from:, to:}, callbackOrHandlers)` `COPY_FILE({from:, to:, isSync:}, callbackOrHandlers)` copy file. [예제보기](https://github.com/UPPERCASE-Series/UPPERCASE.JS/blob/master/EXAMPLES/NODE/FILE/COPY_FILE.js)
* `MOVE_FILE({from:, to:}, callbackOrHandlers)` `MOVE_FILE({from:, to:, isSync:}, callbackOrHandlers)` move file. [예제보기](https://github.com/UPPERCASE-Series/UPPERCASE.JS/blob/master/EXAMPLES/NODE/FILE/MOVE_FILE.js)
* `REMOVE_FILE(path, callbackOrHandlers)` `REMOVE_FILE({path:, isSync:}, callbackOrHandlers)` remove file. [예제보기](https://github.com/UPPERCASE-Series/UPPERCASE.JS/blob/master/EXAMPLES/NODE/FILE/REMOVE_FILE.js)
* `CREATE_FOLDER(path, callbackOrHandlers)` `CREATE_FOLDER({path:, isSync:}, callbackOrHandlers)` remove file. [예제보기](https://github.com/UPPERCASE-Series/UPPERCASE.JS/blob/master/EXAMPLES/NODE/FILE/CREATE_FOLDER.js)
* `FIND_FILE_NAMES(path, callbackOrHandlers)` `FIND_FILE_NAMES({path:, isSync:}, callbackOrHandlers)` find file names. [예제보기](https://github.com/UPPERCASE-Series/UPPERCASE.JS/blob/master/EXAMPLES/NODE/FILE/FIND_FILE_NAMES.js)
* `FIND_FOLDER_NAMES(path, callbackOrHandlers)` `FIND_FOLDER_NAMES({path:, isSync:}, callbackOrHandlers)` find folder names. [예제보기](https://github.com/UPPERCASE-Series/UPPERCASE.JS/blob/master/EXAMPLES/NODE/FILE/FIND_FOLDER_NAMES.js)

###### HTTP Request
* `REQUEST({host:, port:, method:, uri:}, responseListenerOrListeners)` `REQUEST({host:, method:, uri:, paramStr:}, responseListenerOrListeners)` `REQUEST({host:, port:, isSecure:, method:, uri:, data:}, responseListenerOrListeners)` http request. [예제보기](https://github.com/UPPERCASE-Series/UPPERCASE.JS/blob/master/EXAMPLES/NODE/REQUEST/REQUEST.js)
* `GET({host:, port:, uri:, paramStr:, data:}, responseListenerOrListeners)` `GET({host:, port:, isSecure:, uri:}, responseListenerOrListeners)` http GET request. [예제보기](https://github.com/UPPERCASE-Series/UPPERCASE.JS/blob/master/EXAMPLES/NODE/REQUEST/GET.js)
* `POST({host:, port:, uri:, paramStr:}, responseListenerOrListeners)` `POST({host:, port:, isSecure:, uri:, data:}, responseListenerOrListeners)` http POST request. [예제보기](https://github.com/UPPERCASE-Series/UPPERCASE.JS/blob/master/EXAMPLES/NODE/REQUEST/POST.js)
* `PUT({host:, port:, uri:, paramStr:}, responseListenerOrListeners)` `PUT({host:, port:, isSecure:, uri:, data:}, responseListenerOrListeners)` http PUT request. [예제보기](https://github.com/UPPERCASE-Series/UPPERCASE.JS/blob/master/EXAMPLES/NODE/REQUEST/PUT.js)
* `DELETE({host:, port:, uri:, paramStr:}, responseListenerOrListeners)` `DELETE({host:, port:, isSecure:, uri:, data:}, responseListenerOrListeners)` http DELETE request. [예제보기](https://github.com/UPPERCASE-Series/UPPERCASE.JS/blob/master/EXAMPLES/NODE/REQUEST/DELETE.js)

###### Server
* `SOCKET_SERVER(port, connectionListener)` create socket server. [예제보기](https://github.com/UPPERCASE-Series/UPPERCASE.JS/blob/master/EXAMPLES/NODE/SERVER/SOCKET_SERVER.js)
* `CONNECT_TO_SOCKET_SERVER({host:, port:}, connectionListenerOrListeners)` connect to socket server. [예제보기](https://github.com/UPPERCASE-Series/UPPERCASE.JS/blob/master/EXAMPLES/NODE/CONNECT/CONNECT_TO_SOCKET_SERVER.js)
* `WEB_SERVER(port, requestListener)` `WEB_SERVER({securedPort:, securedKeyFilePath:, securedCertFilePath:}, requestListener)` create web server. [예제보기](https://github.com/UPPERCASE-Series/UPPERCASE.JS/blob/master/EXAMPLES/NODE/SERVER/WEB_SERVER.js)
* `RESOURCE_SERVER({port:, rootPath:}, requestListenerOrHandlers)` `RESOURCE_SERVER({port:, rootPath:, version:}, requestListenerOrHandlers)` `RESOURCE_SERVER({securedPort:, securedKeyFilePath:, securedCertFilePath:, rootPath:}, requestListenerOrHandlers)` create resourec server. [예제보기](https://github.com/UPPERCASE-Series/UPPERCASE.JS/blob/master/EXAMPLES/NODE/SERVER/RESOURCE_SERVER.js)
* `UDP_SERVER(port, requestListener)` `UDP_SERVER({port:, ipVersion}, requestListener)` create udp server. [예제보기](https://github.com/UPPERCASE-Series/UPPERCASE.JS/blob/master/EXAMPLES/NODE/SERVER/UDP_SERVER.js)

###### Encryption
* `SHA1({key:, password:})` SHA1 encrypt. [예제보기](https://github.com/UPPERCASE-Series/UPPERCASE.JS/blob/master/EXAMPLES/NODE/ENCRYPTION/SHA1.js)

###### Console [예제보기](https://github.com/UPPERCASE-Series/UPPERCASE.JS/blob/master/EXAMPLES/NODE/CONSOLE_COLOR/CONSOLE_COLOR.js)
* `CONSOLE_RED(text)` console red
* `CONSOLE_GREEN(text)` console green
* `CONSOLE_BLUE(text)` console blue
* `CONSOLE_YELLOW(text)` console yellow


















#### 브라우저 패키지
* `INFO` Browser information object [예제보기](https://github.com/UPPERCASE-Series/UPPERCASE.JS/blob/master/EXAMPLES/BROWSER/INFO.js)
```javascript
INFO.getLang()
INFO.changeLang(lang) // ex) INFO.changeLang('ko')
INFO.checkIsHDDisplay()
INFO.checkIsTouchableDisplay()
INFO.getBrowserInfo()
```
* `STORE(name)` Browser store class [예제보기](https://github.com/UPPERCASE-Series/UPPERCASE.JS/blob/master/EXAMPLES/BROWSER/STORE.js)
```javascript
store = STORE('testStore');
store.save({ name:, value:, isToSession: })
store.get(name)
store.remove(name)
```
* `MSG({ko:, en:, ...})` get internationalization message. [예제보기](https://github.com/UPPERCASE-Series/UPPERCASE.JS/blob/master/EXAMPLES/BROWSER/I18N/MSG.js)

###### 윈도우 관련
* `TITLE(title)` change document title. [예제보기](https://github.com/UPPERCASE-Series/UPPERCASE.JS/tree/master/EXAMPLES/BROWSER/WINDOW.js)
* `WIN_WIDTH()` get window width. (px) [예제보기](https://github.com/UPPERCASE-Series/UPPERCASE.JS/tree/master/EXAMPLES/BROWSER/WIN_WIDTH.js)
* `WIN_HEIGHT()` get window height. (px) [예제보기](https://github.com/UPPERCASE-Series/UPPERCASE.JS/tree/master/EXAMPLES/BROWSER/WIN_HEIGHT.js)
* `SCROLL_LEFT()` get scroll left. (px) [예제보기](https://github.com/UPPERCASE-Series/UPPERCASE.JS/tree/master/EXAMPLES/BROWSER/SCROLL_LEFT.js)
* `SCROLL_TOP()` get scroll top. (px) [예제보기](https://github.com/UPPERCASE-Series/UPPERCASE.JS/tree/master/EXAMPLES/BROWSER/SCROLL_TOP.js)

###### NODE 및 DOM 관련
```coffeescript
# CoffeeScript form example
form = FORM ->
  DIV ->
    H5 -> 'Name'
    INPUT name: 'name'
  DIV style: marginTop: 10, ->
    H5 -> 'Gender'
    SELECT name: 'gender', ->
      OPTION value: 'male', ->
        'Male'
      OPTION value: 'female', ->
        'Female'
  DIV style: marginTop: 10, ->
    H5 -> 'Age'
    INPUT name: 'age'
  DIV style: marginTop: 10, ->
    H5 -> 'Profile'
    TEXTAREA name: 'profile'
```
* `NODE` Node interface [예제보기](https://github.com/UPPERCASE-Series/UPPERCASE.JS/blob/master/EXAMPLES/BROWSER/DOM/NODE.js)
* `DOM({tag:})` `DOM({tag:, style:})` `DOM({tag:, c:})` `DOM({tag:, on:})` `DOM({el:})` Dom wrapper class [예제보기](https://github.com/UPPERCASE-Series/UPPERCASE.JS/blob/master/EXAMPLES/BROWSER/DOM/DOM.js)
* `BODY` Body class
* `DIV({style:})` `DIV({c:})` `DIV({on:})` Div class [예제보기](https://github.com/UPPERCASE-Series/UPPERCASE.JS/blob/master/EXAMPLES/BROWSER/DOM/TAG/DIV.js)
* `SPAN({style:})` `SPAN({c:})` `SPAN({on:})` Span class [예제보기](https://github.com/UPPERCASE-Series/UPPERCASE.JS/blob/master/EXAMPLES/BROWSER/DOM/TAG/SPAN.js)
* `H1({style:})` `H1({c:})` `H1({on:})` H1 class [예제보기](https://github.com/UPPERCASE-Series/UPPERCASE.JS/blob/master/EXAMPLES/BROWSER/DOM/TAG/H1.js)
* `H2({style:})` `H2({c:})` `H2({on:})` H2 class [예제보기](https://github.com/UPPERCASE-Series/UPPERCASE.JS/blob/master/EXAMPLES/BROWSER/DOM/TAG/H1.js)
* `H3({style:})` `H3({c:})` `H3({on:})` H3 class [예제보기](https://github.com/UPPERCASE-Series/UPPERCASE.JS/blob/master/EXAMPLES/BROWSER/DOM/TAG/H1.js)
* `H4({style:})` `H4({c:})` `H4({on:})` H4 class [예제보기](https://github.com/UPPERCASE-Series/UPPERCASE.JS/blob/master/EXAMPLES/BROWSER/DOM/TAG/H1.js)
* `H5({style:})` `H5({c:})` `H5({on:})` H5 class [예제보기](https://github.com/UPPERCASE-Series/UPPERCASE.JS/blob/master/EXAMPLES/BROWSER/DOM/TAG/H1.js)
* `H6({style:})` `H6({c:})` `H6({on:})` H6 class [예제보기](https://github.com/UPPERCASE-Series/UPPERCASE.JS/blob/master/EXAMPLES/BROWSER/DOM/TAG/H1.js)
* `P({style:})` `P({c:})` `P({on:})` P class [예제보기](https://github.com/UPPERCASE-Series/UPPERCASE.JS/blob/master/EXAMPLES/BROWSER/DOM/TAG/P.js)
* `BR()` Br class
* `UL({style:})` `UL({c:})` `UL({on:})` Ul class [예제보기](https://github.com/UPPERCASE-Series/UPPERCASE.JS/blob/master/EXAMPLES/BROWSER/DOM/TAG/UL.js)
* `LI({style:})` `LI({c:})` `LI({on:})` Li class [예제보기](https://github.com/UPPERCASE-Series/UPPERCASE.JS/blob/master/EXAMPLES/BROWSER/DOM/TAG/UL.js)
* `A({href:})` `A({href:, target:})` `A({style:})` `A({c:})` `A({on:})` A class [예제보기](https://github.com/UPPERCASE-Series/UPPERCASE.JS/blob/master/EXAMPLES/BROWSER/DOM/TAG/A.js)
* `IMG({src:})` `IMG({style:})` `IMG({c:})` `IMG({on:})` Img class [예제보기](https://github.com/UPPERCASE-Series/UPPERCASE.JS/blob/master/EXAMPLES/BROWSER/DOM/TAG/IMG.js)
* `TABLE({style:})` `TABLE({c:})` `TABLE({on:})` Table class [예제보기](https://github.com/UPPERCASE-Series/UPPERCASE.JS/blob/master/EXAMPLES/BROWSER/DOM/TAG/TABLE.js)
* `TR({style:})` `TR({c:})` `TR({on:})` Tr class [예제보기](https://github.com/UPPERCASE-Series/UPPERCASE.JS/blob/master/EXAMPLES/BROWSER/DOM/TAG/TABLE.js)
* `TH({style:})` `TH({c:})` `TH({on:})` Th class [예제보기](https://github.com/UPPERCASE-Series/UPPERCASE.JS/blob/master/EXAMPLES/BROWSER/DOM/TAG/TABLE.js)
* `TD({style:})` `TD({c:})` `TD({on:})` Td class [예제보기](https://github.com/UPPERCASE-Series/UPPERCASE.JS/blob/master/EXAMPLES/BROWSER/DOM/TAG/TABLE.js)
* `FORM({action:})` `FORM({target:})` `FORM({method:})` `FORM({enctype:})` `FORM({style:})` `FORM({c:})` `FORM({on:})` Form class [예제보기](https://github.com/UPPERCASE-Series/UPPERCASE.JS/blob/master/EXAMPLES/BROWSER/DOM/TAG/FORM.js)
* `INPUT({name:})` `INPUT({type:})` `INPUT({placeholder:})` `INPUT({value:})` `INPUT({isMultiple:})` `INPUT({style:})` `INPUT({on:})` Input class [예제보기](https://github.com/UPPERCASE-Series/UPPERCASE.JS/blob/master/EXAMPLES/BROWSER/DOM/TAG/INPUT.js)
* `TEXTAREA({name:})` `TEXTAREA({placeholder:})` `TEXTAREA({value:})` `TEXTAREA({style:})` `TEXTAREA({c:})` `TEXTAREA({on:})` Textarea class [예제보기](https://github.com/UPPERCASE-Series/UPPERCASE.JS/blob/master/EXAMPLES/BROWSER/DOM/TAG/FORM.js)
* `SELECT({name:})` `SELECT({value:})` `SELECT({style:})` `SELECT({c:})` `SELECT({on:})` Select class [예제보기](https://github.com/UPPERCASE-Series/UPPERCASE.JS/blob/master/EXAMPLES/BROWSER/DOM/TAG/FORM.js)
* `OPTION({value:})` `OPTION({style:})` `OPTION({c:})` `OPTION({on:})` Option class [예제보기](https://github.com/UPPERCASE-Series/UPPERCASE.JS/blob/master/EXAMPLES/BROWSER/DOM/TAG/FORM.js)
* `IFRAME({name:})` `IFRAME({src:})` `IFRAME({style:})` `IFRAME({c:})` `SELECT({on:})` Iframe class [예제보기](https://github.com/UPPERCASE-Series/UPPERCASE.JS/blob/master/EXAMPLES/BROWSER/DOM/TAG/IFRAME.js)
* `CANVAS()` `CANVAS({width:})` `CANVAS({height:})` `CANVAS({style:})` `CANVAS({c:})` `CANVAS({on:})` Canvas class [예제보기](https://github.com/UPPERCASE-Series/UPPERCASE.JS/blob/master/EXAMPLES/BROWSER/DOM/TAG/CANVAS.js)
* `CLEAR_BOTH()` create clear:both div. [예제보기](https://github.com/UPPERCASE-Series/UPPERCASE.JS/blob/master/EXAMPLES/BROWSER/DOM/CLEAR_BOTH.js)

###### 스타일 관련
* `ADD_STYLE({node:, style:})` add style. [예제보기](https://github.com/UPPERCASE-Series/UPPERCASE.JS/blob/master/EXAMPLES/BROWSER/DOM/STYLE/ADD_STYLE.js)
* `RGBA([r, g, b, a])` get rgba style string. [예제보기](https://github.com/UPPERCASE-Series/UPPERCASE.JS/blob/master/EXAMPLES/BROWSER/DOM/STYLE/RGBA.js)

###### 애니메이션 관련
* `ANIMATE({node:, keyframes:})` `ANIMATE({node:, keyframes:, duration:})` `ANIMATE({node:, keyframes:, timingFunction:})` `ANIMATE({node:, keyframes:, delay:})` `ANIMATE({node:, keyframes:, iterationCount:})` `ANIMATE({node:, keyframes:, direction:})` `ANIMATE({node:, keyframes:, playState:})` `ANIMATE({node:, keyframes:}, callback)` animate node. [예제보기](https://github.com/UPPERCASE-Series/UPPERCASE.JS/blob/master/EXAMPLES/BROWSER/DOM/ANIMATION/ANIMATE.js)
* `KEYFRAMES(keyframes)` Animation keyframes class [예제보기](https://github.com/UPPERCASE-Series/UPPERCASE.JS/blob/master/EXAMPLES/BROWSER/DOM/ANIMATION/KEYFRAMES.js)

###### 이벤트 관련
* `EVENT(name, func)` `EVENT({node:, name:}, func)` Event class [예제보기](https://github.com/UPPERCASE-Series/UPPERCASE.JS/blob/master/EXAMPLES/BROWSER/DOM/EVENT/EVENT.js)
* `EVENT_ONCE(name, func)` `EVENT_ONCE({node:, name:}, func)` Event class [예제보기](https://github.com/UPPERCASE-Series/UPPERCASE.JS/blob/master/EXAMPLES/BROWSER/DOM/EVENT/EVENT_ONCE.js)

###### 그래픽 관련
* `CHECK_IS_BLANK_PIXEL({img:, left:, top:}, callback)` `CHECK_IS_BLANK_PIXEL({img:, right:, bottom:}, callback)` check the pixel is blank pixel. [예제보기](https://github.com/UPPERCASE-Series/UPPERCASE.JS/blob/master/EXAMPLES/BROWSER/GRAPHIC/CHECK_IS_BLANK_PIXEL.js)
* `EXPORT_IMG_DATA(img, callback)` export img data. [예제보기](https://github.com/UPPERCASE-Series/UPPERCASE.JS/blob/master/EXAMPLES/BROWSER/GRAPHIC/EXPORT_IMG_DATA.js)
* `EXPORT_IMG_TYPE(img, callback)` export img type. [예제보기](https://github.com/UPPERCASE-Series/UPPERCASE.JS/blob/master/EXAMPLES/BROWSER/GRAPHIC/EXPORT_IMG_TYPE.js)

###### 사운드 관련
* `SOUND({mp3:, ogg:, isLoop:})` SOUND class [예제보기](https://github.com/UPPERCASE-Series/UPPERCASE.JS/blob/master/EXAMPLES/BROWSER/SOUND.js)
```javascript
sound = SOUND({mp3:'test.mp3', ogg:'test.ogg', isLoop:true});
sound.play()
sound.stop()
```

###### AJAX 관련
* `REQUEST({method:, uri:}, responseListenerOrListeners)` `REQUEST({method:, uri:, paramStr:}, responseListenerOrListeners)` `REQUEST({host:, port:, isSecure:, method:, uri:, data:}, responseListenerOrListeners)` ajax request. [예제보기](https://github.com/UPPERCASE-Series/UPPERCASE.JS/blob/master/EXAMPLES/BROWSER/REQUEST/REQUEST.js)
* `GET(uri, responseListenerOrListeners)` `GET({uri:, paramStr:}, responseListenerOrListeners)` `GET({host:, port:, isSecure:, uri:, data:}, responseListenerOrListeners)` ajax GET request. [예제보기](https://github.com/UPPERCASE-Series/UPPERCASE.JS/blob/master/EXAMPLES/BROWSER/REQUEST/GET.js)
* `POST(uri:, responseListenerOrListeners)` `POST({uri:, paramStr:}, responseListenerOrListeners)` `POST({host:, port:, isSecure:, uri:, data:}, responseListenerOrListeners)` ajax POST request. [예제보기](https://github.com/UPPERCASE-Series/UPPERCASE.JS/blob/master/EXAMPLES/BROWSER/REQUEST/POST.js)
* `PUT(uri:, responseListenerOrListeners)` `PUT({uri:, paramStr:}, responseListenerOrListeners)` `PUT({host:, port:, isSecure:, uri:, data:}, responseListenerOrListeners)` ajax PUT request. [예제보기](https://github.com/UPPERCASE-Series/UPPERCASE.JS/blob/master/EXAMPLES/BROWSER/REQUEST/PUT.js)
* `DELETE(uri:, responseListenerOrListeners)` `DELETE({uri:, paramStr:}, responseListenerOrListeners)` `DELETE({host:, port:, isSecure:, uri:, data:}, responseListenerOrListeners)` ajax DELETE request. [예제보기](https://github.com/UPPERCASE-Series/UPPERCASE.JS/blob/master/EXAMPLES/BROWSER/REQUEST/DELETE.js)

###### VIEW 관련
* `VIEW` View interface [예제보기](https://github.com/UPPERCASE-Series/UPPERCASE.JS/blob/master/EXAMPLES/BROWSER/VIEW/VIEW.js)
* `MATCH_VIEW({uri:, target:})` match view. [예제보기](https://github.com/UPPERCASE-Series/UPPERCASE.JS/blob/master/EXAMPLES/BROWSER/VIEW/VIEW.js)
* `HREF(uri)` get href. [예제보기](https://github.com/UPPERCASE-Series/UPPERCASE.JS/blob/master/EXAMPLES/BROWSER/VIEW/HREF.js)
* `GO(uri)` go another view. [예제보기](https://github.com/UPPERCASE-Series/UPPERCASE.JS/blob/master/EXAMPLES/BROWSER/VIEW/GO.js)
* `GO_NEW_WIN()` `GO_NEW_WIN(uri)` go another view on new window. [예제보기](https://github.com/UPPERCASE-Series/UPPERCASE.JS/blob/master/EXAMPLES/BROWSER/VIEW/GO_NEW_WIN.js)
* `REFRESH()` refresh view. [예제보기](https://github.com/UPPERCASE-Series/UPPERCASE.JS/blob/master/EXAMPLES/BROWSER/VIEW/REFRESH.js)