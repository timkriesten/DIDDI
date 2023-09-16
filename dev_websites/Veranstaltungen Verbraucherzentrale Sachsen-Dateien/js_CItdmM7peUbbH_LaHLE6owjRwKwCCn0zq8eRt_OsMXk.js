/*! jQuery v3.6.3 | (c) OpenJS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(C,e){"use strict";var t=[],r=Object.getPrototypeOf,s=t.slice,g=t.flat?function(e){return t.flat.call(e)}:function(e){return t.concat.apply([],e)},u=t.push,i=t.indexOf,n={},o=n.toString,y=n.hasOwnProperty,a=y.toString,l=a.call(Object),v={},m=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType&&"function"!=typeof e.item},x=function(e){return null!=e&&e===e.window},S=C.document,c={type:!0,src:!0,nonce:!0,noModule:!0};function b(e,t,n){var r,i,o=(n=n||S).createElement("script");if(o.text=e,t)for(r in c)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o)}function w(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[o.call(e)]||"object":typeof e}var f="3.6.3",E=function(e,t){return new E.fn.init(e,t)};function p(e){var t=!!e&&"length"in e&&e.length,n=w(e);return!m(e)&&!x(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}E.fn=E.prototype={jquery:f,constructor:E,length:0,toArray:function(){return s.call(this)},get:function(e){return null==e?s.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=E.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return E.each(this,e)},map:function(n){return this.pushStack(E.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(s.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(E.grep(this,function(e,t){return(t+1)%2}))},odd:function(){return this.pushStack(E.grep(this,function(e,t){return t%2}))},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:u,sort:t.sort,splice:t.splice},E.extend=E.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||m(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&a!==r&&(l&&r&&(E.isPlainObject(r)||(i=Array.isArray(r)))?(n=a[t],o=i&&!Array.isArray(n)?[]:i||E.isPlainObject(n)?n:{},i=!1,a[t]=E.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},E.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==o.call(e))&&(!(t=r(e))||"function"==typeof(n=y.call(t,"constructor")&&t.constructor)&&a.call(n)===l)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t,n){b(e,{nonce:t&&t.nonce},n)},each:function(e,t){var n,r=0;if(p(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},makeArray:function(e,t){var n=t||[];return null!=e&&(p(Object(e))?E.merge(n,"string"==typeof e?[e]:e):u.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:i.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,a=[];if(p(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return g(a)},guid:1,support:v}),"function"==typeof Symbol&&(E.fn[Symbol.iterator]=t[Symbol.iterator]),E.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){n["[object "+t+"]"]=t.toLowerCase()});var d=function(n){var e,d,b,o,i,h,f,g,w,u,l,T,C,a,S,y,s,c,v,E="sizzle"+1*new Date,p=n.document,k=0,r=0,m=ue(),x=ue(),A=ue(),N=ue(),j=function(e,t){return e===t&&(l=!0),0},D={}.hasOwnProperty,t=[],q=t.pop,L=t.push,H=t.push,O=t.slice,P=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",I="(?:\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",W="\\["+M+"*("+I+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+I+"))|)"+M+"*\\]",F=":("+I+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+W+")*)|.*)\\)|)",$=new RegExp(M+"+","g"),B=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=new RegExp("^"+M+"*,"+M+"*"),z=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp(M+"|>"),X=new RegExp(F),V=new RegExp("^"+I+"$"),G={ID:new RegExp("^#("+I+")"),CLASS:new RegExp("^\\.("+I+")"),TAG:new RegExp("^("+I+"|[*])"),ATTR:new RegExp("^"+W),PSEUDO:new RegExp("^"+F),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+R+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/HTML$/i,Q=/^(?:input|select|textarea|button)$/i,J=/^h\d$/i,K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=new RegExp("\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\([^\\r\\n\\f])","g"),ne=function(e,t){var n="0x"+e.slice(1)-65536;return t||(n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320))},re=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ie=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},oe=function(){T()},ae=be(function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()},{dir:"parentNode",next:"legend"});try{H.apply(t=O.call(p.childNodes),p.childNodes),t[p.childNodes.length].nodeType}catch(e){H={apply:t.length?function(e,t){L.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function se(t,e,n,r){var i,o,a,s,u,l,c,f=e&&e.ownerDocument,p=e?e.nodeType:9;if(n=n||[],"string"!=typeof t||!t||1!==p&&9!==p&&11!==p)return n;if(!r&&(T(e),e=e||C,S)){if(11!==p&&(u=Z.exec(t)))if(i=u[1]){if(9===p){if(!(a=e.getElementById(i)))return n;if(a.id===i)return n.push(a),n}else if(f&&(a=f.getElementById(i))&&v(e,a)&&a.id===i)return n.push(a),n}else{if(u[2])return H.apply(n,e.getElementsByTagName(t)),n;if((i=u[3])&&d.getElementsByClassName&&e.getElementsByClassName)return H.apply(n,e.getElementsByClassName(i)),n}if(d.qsa&&!N[t+" "]&&(!y||!y.test(t))&&(1!==p||"object"!==e.nodeName.toLowerCase())){if(c=t,f=e,1===p&&(U.test(t)||z.test(t))){(f=ee.test(t)&&ve(e.parentNode)||e)===e&&d.scope||((s=e.getAttribute("id"))?s=s.replace(re,ie):e.setAttribute("id",s=E)),o=(l=h(t)).length;while(o--)l[o]=(s?"#"+s:":scope")+" "+xe(l[o]);c=l.join(",")}try{if(d.cssSupportsSelector&&!CSS.supports("selector(:is("+c+"))"))throw new Error;return H.apply(n,f.querySelectorAll(c)),n}catch(e){N(t,!0)}finally{s===E&&e.removeAttribute("id")}}}return g(t.replace(B,"$1"),e,n,r)}function ue(){var r=[];return function e(t,n){return r.push(t+" ")>b.cacheLength&&delete e[r.shift()],e[t+" "]=n}}function le(e){return e[E]=!0,e}function ce(e){var t=C.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function fe(e,t){var n=e.split("|"),r=n.length;while(r--)b.attrHandle[n[r]]=t}function pe(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function de(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}function he(n){return function(e){var t=e.nodeName.toLowerCase();return("input"===t||"button"===t)&&e.type===n}}function ge(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&ae(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function ye(a){return le(function(o){return o=+o,le(function(e,t){var n,r=a([],e.length,o),i=r.length;while(i--)e[n=r[i]]&&(e[n]=!(t[n]=e[n]))})})}function ve(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}for(e in d=se.support={},i=se.isXML=function(e){var t=e&&e.namespaceURI,n=e&&(e.ownerDocument||e).documentElement;return!Y.test(t||n&&n.nodeName||"HTML")},T=se.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:p;return r!=C&&9===r.nodeType&&r.documentElement&&(a=(C=r).documentElement,S=!i(C),p!=C&&(n=C.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",oe,!1):n.attachEvent&&n.attachEvent("onunload",oe)),d.scope=ce(function(e){return a.appendChild(e).appendChild(C.createElement("div")),"undefined"!=typeof e.querySelectorAll&&!e.querySelectorAll(":scope fieldset div").length}),d.cssSupportsSelector=ce(function(){return CSS.supports("selector(*)")&&C.querySelectorAll(":is(:jqfake)")&&!CSS.supports("selector(:is(*,:jqfake))")}),d.attributes=ce(function(e){return e.className="i",!e.getAttribute("className")}),d.getElementsByTagName=ce(function(e){return e.appendChild(C.createComment("")),!e.getElementsByTagName("*").length}),d.getElementsByClassName=K.test(C.getElementsByClassName),d.getById=ce(function(e){return a.appendChild(e).id=E,!C.getElementsByName||!C.getElementsByName(E).length}),d.getById?(b.filter.ID=function(e){var t=e.replace(te,ne);return function(e){return e.getAttribute("id")===t}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&S){var n=t.getElementById(e);return n?[n]:[]}}):(b.filter.ID=function(e){var n=e.replace(te,ne);return function(e){var t="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&S){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),b.find.TAG=d.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):d.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},b.find.CLASS=d.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&S)return t.getElementsByClassName(e)},s=[],y=[],(d.qsa=K.test(C.querySelectorAll))&&(ce(function(e){var t;a.appendChild(e).innerHTML="<a id='"+E+"'></a><select id='"+E+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&y.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||y.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll("[id~="+E+"-]").length||y.push("~="),(t=C.createElement("input")).setAttribute("name",""),e.appendChild(t),e.querySelectorAll("[name='']").length||y.push("\\["+M+"*name"+M+"*="+M+"*(?:''|\"\")"),e.querySelectorAll(":checked").length||y.push(":checked"),e.querySelectorAll("a#"+E+"+*").length||y.push(".#.+[+~]"),e.querySelectorAll("\\\f"),y.push("[\\r\\n\\f]")}),ce(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=C.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&y.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&y.push(":enabled",":disabled"),a.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&y.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),y.push(",.*:")})),(d.matchesSelector=K.test(c=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.msMatchesSelector))&&ce(function(e){d.disconnectedMatch=c.call(e,"*"),c.call(e,"[s!='']:x"),s.push("!=",F)}),d.cssSupportsSelector||y.push(":has"),y=y.length&&new RegExp(y.join("|")),s=s.length&&new RegExp(s.join("|")),t=K.test(a.compareDocumentPosition),v=t||K.test(a.contains)?function(e,t){var n=9===e.nodeType&&e.documentElement||e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},j=t?function(e,t){if(e===t)return l=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)==(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!d.sortDetached&&t.compareDocumentPosition(e)===n?e==C||e.ownerDocument==p&&v(p,e)?-1:t==C||t.ownerDocument==p&&v(p,t)?1:u?P(u,e)-P(u,t):0:4&n?-1:1)}:function(e,t){if(e===t)return l=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e==C?-1:t==C?1:i?-1:o?1:u?P(u,e)-P(u,t):0;if(i===o)return pe(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?pe(a[r],s[r]):a[r]==p?-1:s[r]==p?1:0}),C},se.matches=function(e,t){return se(e,null,null,t)},se.matchesSelector=function(e,t){if(T(e),d.matchesSelector&&S&&!N[t+" "]&&(!s||!s.test(t))&&(!y||!y.test(t)))try{var n=c.call(e,t);if(n||d.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){N(t,!0)}return 0<se(t,C,null,[e]).length},se.contains=function(e,t){return(e.ownerDocument||e)!=C&&T(e),v(e,t)},se.attr=function(e,t){(e.ownerDocument||e)!=C&&T(e);var n=b.attrHandle[t.toLowerCase()],r=n&&D.call(b.attrHandle,t.toLowerCase())?n(e,t,!S):void 0;return void 0!==r?r:d.attributes||!S?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},se.escape=function(e){return(e+"").replace(re,ie)},se.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},se.uniqueSort=function(e){var t,n=[],r=0,i=0;if(l=!d.detectDuplicates,u=!d.sortStable&&e.slice(0),e.sort(j),l){while(t=e[i++])t===e[i]&&(r=n.push(i));while(r--)e.splice(n[r],1)}return u=null,e},o=se.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else while(t=e[r++])n+=o(t);return n},(b=se.selectors={cacheLength:50,createPseudo:le,match:G,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(te,ne),e[3]=(e[3]||e[4]||e[5]||"").replace(te,ne),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||se.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&se.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return G.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=h(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(te,ne).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=m[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&m(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(n,r,i){return function(e){var t=se.attr(e,n);return null==t?"!="===r:!r||(t+="","="===r?t===i:"!="===r?t!==i:"^="===r?i&&0===t.indexOf(i):"*="===r?i&&-1<t.indexOf(i):"$="===r?i&&t.slice(-i.length)===i:"~="===r?-1<(" "+t.replace($," ")+" ").indexOf(i):"|="===r&&(t===i||t.slice(0,i.length+1)===i+"-"))}},CHILD:function(h,e,t,g,y){var v="nth"!==h.slice(0,3),m="last"!==h.slice(-4),x="of-type"===e;return 1===g&&0===y?function(e){return!!e.parentNode}:function(e,t,n){var r,i,o,a,s,u,l=v!==m?"nextSibling":"previousSibling",c=e.parentNode,f=x&&e.nodeName.toLowerCase(),p=!n&&!x,d=!1;if(c){if(v){while(l){a=e;while(a=a[l])if(x?a.nodeName.toLowerCase()===f:1===a.nodeType)return!1;u=l="only"===h&&!u&&"nextSibling"}return!0}if(u=[m?c.firstChild:c.lastChild],m&&p){d=(s=(r=(i=(o=(a=c)[E]||(a[E]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1])&&r[2],a=s&&c.childNodes[s];while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if(1===a.nodeType&&++d&&a===e){i[h]=[k,s,d];break}}else if(p&&(d=s=(r=(i=(o=(a=e)[E]||(a[E]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1]),!1===d)while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if((x?a.nodeName.toLowerCase()===f:1===a.nodeType)&&++d&&(p&&((i=(o=a[E]||(a[E]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]=[k,d]),a===e))break;return(d-=y)===g||d%g==0&&0<=d/g}}},PSEUDO:function(e,o){var t,a=b.pseudos[e]||b.setFilters[e.toLowerCase()]||se.error("unsupported pseudo: "+e);return a[E]?a(o):1<a.length?(t=[e,e,"",o],b.setFilters.hasOwnProperty(e.toLowerCase())?le(function(e,t){var n,r=a(e,o),i=r.length;while(i--)e[n=P(e,r[i])]=!(t[n]=r[i])}):function(e){return a(e,0,t)}):a}},pseudos:{not:le(function(e){var r=[],i=[],s=f(e.replace(B,"$1"));return s[E]?le(function(e,t,n,r){var i,o=s(e,null,r,[]),a=e.length;while(a--)(i=o[a])&&(e[a]=!(t[a]=i))}):function(e,t,n){return r[0]=e,s(r,null,n,i),r[0]=null,!i.pop()}}),has:le(function(t){return function(e){return 0<se(t,e).length}}),contains:le(function(t){return t=t.replace(te,ne),function(e){return-1<(e.textContent||o(e)).indexOf(t)}}),lang:le(function(n){return V.test(n||"")||se.error("unsupported lang: "+n),n=n.replace(te,ne).toLowerCase(),function(e){var t;do{if(t=S?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=n.location&&n.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===a},focus:function(e){return e===C.activeElement&&(!C.hasFocus||C.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:ge(!1),disabled:ge(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!b.pseudos.empty(e)},header:function(e){return J.test(e.nodeName)},input:function(e){return Q.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:ye(function(){return[0]}),last:ye(function(e,t){return[t-1]}),eq:ye(function(e,t,n){return[n<0?n+t:n]}),even:ye(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:ye(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:ye(function(e,t,n){for(var r=n<0?n+t:t<n?t:n;0<=--r;)e.push(r);return e}),gt:ye(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=b.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[e]=de(e);for(e in{submit:!0,reset:!0})b.pseudos[e]=he(e);function me(){}function xe(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function be(s,e,t){var u=e.dir,l=e.next,c=l||u,f=t&&"parentNode"===c,p=r++;return e.first?function(e,t,n){while(e=e[u])if(1===e.nodeType||f)return s(e,t,n);return!1}:function(e,t,n){var r,i,o,a=[k,p];if(n){while(e=e[u])if((1===e.nodeType||f)&&s(e,t,n))return!0}else while(e=e[u])if(1===e.nodeType||f)if(i=(o=e[E]||(e[E]={}))[e.uniqueID]||(o[e.uniqueID]={}),l&&l===e.nodeName.toLowerCase())e=e[u]||e;else{if((r=i[c])&&r[0]===k&&r[1]===p)return a[2]=r[2];if((i[c]=a)[2]=s(e,t,n))return!0}return!1}}function we(i){return 1<i.length?function(e,t,n){var r=i.length;while(r--)if(!i[r](e,t,n))return!1;return!0}:i[0]}function Te(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Ce(d,h,g,y,v,e){return y&&!y[E]&&(y=Ce(y)),v&&!v[E]&&(v=Ce(v,e)),le(function(e,t,n,r){var i,o,a,s=[],u=[],l=t.length,c=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)se(e,t[r],n);return n}(h||"*",n.nodeType?[n]:n,[]),f=!d||!e&&h?c:Te(c,s,d,n,r),p=g?v||(e?d:l||y)?[]:t:f;if(g&&g(f,p,n,r),y){i=Te(p,u),y(i,[],n,r),o=i.length;while(o--)(a=i[o])&&(p[u[o]]=!(f[u[o]]=a))}if(e){if(v||d){if(v){i=[],o=p.length;while(o--)(a=p[o])&&i.push(f[o]=a);v(null,p=[],i,r)}o=p.length;while(o--)(a=p[o])&&-1<(i=v?P(e,a):s[o])&&(e[i]=!(t[i]=a))}}else p=Te(p===t?p.splice(l,p.length):p),v?v(null,t,p,r):H.apply(t,p)})}function Se(e){for(var i,t,n,r=e.length,o=b.relative[e[0].type],a=o||b.relative[" "],s=o?1:0,u=be(function(e){return e===i},a,!0),l=be(function(e){return-1<P(i,e)},a,!0),c=[function(e,t,n){var r=!o&&(n||t!==w)||((i=t).nodeType?u(e,t,n):l(e,t,n));return i=null,r}];s<r;s++)if(t=b.relative[e[s].type])c=[be(we(c),t)];else{if((t=b.filter[e[s].type].apply(null,e[s].matches))[E]){for(n=++s;n<r;n++)if(b.relative[e[n].type])break;return Ce(1<s&&we(c),1<s&&xe(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace(B,"$1"),t,s<n&&Se(e.slice(s,n)),n<r&&Se(e=e.slice(n)),n<r&&xe(e))}c.push(t)}return we(c)}return me.prototype=b.filters=b.pseudos,b.setFilters=new me,h=se.tokenize=function(e,t){var n,r,i,o,a,s,u,l=x[e+" "];if(l)return t?0:l.slice(0);a=e,s=[],u=b.preFilter;while(a){for(o in n&&!(r=_.exec(a))||(r&&(a=a.slice(r[0].length)||a),s.push(i=[])),n=!1,(r=z.exec(a))&&(n=r.shift(),i.push({value:n,type:r[0].replace(B," ")}),a=a.slice(n.length)),b.filter)!(r=G[o].exec(a))||u[o]&&!(r=u[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?se.error(e):x(e,s).slice(0)},f=se.compile=function(e,t){var n,y,v,m,x,r,i=[],o=[],a=A[e+" "];if(!a){t||(t=h(e)),n=t.length;while(n--)(a=Se(t[n]))[E]?i.push(a):o.push(a);(a=A(e,(y=o,m=0<(v=i).length,x=0<y.length,r=function(e,t,n,r,i){var o,a,s,u=0,l="0",c=e&&[],f=[],p=w,d=e||x&&b.find.TAG("*",i),h=k+=null==p?1:Math.random()||.1,g=d.length;for(i&&(w=t==C||t||i);l!==g&&null!=(o=d[l]);l++){if(x&&o){a=0,t||o.ownerDocument==C||(T(o),n=!S);while(s=y[a++])if(s(o,t||C,n)){r.push(o);break}i&&(k=h)}m&&((o=!s&&o)&&u--,e&&c.push(o))}if(u+=l,m&&l!==u){a=0;while(s=v[a++])s(c,f,t,n);if(e){if(0<u)while(l--)c[l]||f[l]||(f[l]=q.call(r));f=Te(f)}H.apply(r,f),i&&!e&&0<f.length&&1<u+v.length&&se.uniqueSort(r)}return i&&(k=h,w=p),c},m?le(r):r))).selector=e}return a},g=se.select=function(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,c=!r&&h(e=l.selector||e);if(n=n||[],1===c.length){if(2<(o=c[0]=c[0].slice(0)).length&&"ID"===(a=o[0]).type&&9===t.nodeType&&S&&b.relative[o[1].type]){if(!(t=(b.find.ID(a.matches[0].replace(te,ne),t)||[])[0]))return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}i=G.needsContext.test(e)?0:o.length;while(i--){if(a=o[i],b.relative[s=a.type])break;if((u=b.find[s])&&(r=u(a.matches[0].replace(te,ne),ee.test(o[0].type)&&ve(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&xe(o)))return H.apply(n,r),n;break}}}return(l||f(e,c))(r,t,!S,n,!t||ee.test(e)&&ve(t.parentNode)||t),n},d.sortStable=E.split("").sort(j).join("")===E,d.detectDuplicates=!!l,T(),d.sortDetached=ce(function(e){return 1&e.compareDocumentPosition(C.createElement("fieldset"))}),ce(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||fe("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),d.attributes&&ce(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||fe("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ce(function(e){return null==e.getAttribute("disabled")})||fe(R,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),se}(C);E.find=d,E.expr=d.selectors,E.expr[":"]=E.expr.pseudos,E.uniqueSort=E.unique=d.uniqueSort,E.text=d.getText,E.isXMLDoc=d.isXML,E.contains=d.contains,E.escapeSelector=d.escape;var h=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&E(e).is(n))break;r.push(e)}return r},T=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},k=E.expr.match.needsContext;function A(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var N=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e,n,r){return m(n)?E.grep(e,function(e,t){return!!n.call(e,t,e)!==r}):n.nodeType?E.grep(e,function(e){return e===n!==r}):"string"!=typeof n?E.grep(e,function(e){return-1<i.call(n,e)!==r}):E.filter(n,e,r)}E.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?E.find.matchesSelector(r,e)?[r]:[]:E.find.matches(e,E.grep(t,function(e){return 1===e.nodeType}))},E.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(E(e).filter(function(){for(t=0;t<r;t++)if(E.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)E.find(e,i[t],n);return 1<r?E.uniqueSort(n):n},filter:function(e){return this.pushStack(j(this,e||[],!1))},not:function(e){return this.pushStack(j(this,e||[],!0))},is:function(e){return!!j(this,"string"==typeof e&&k.test(e)?E(e):e||[],!1).length}});var D,q=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(E.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||D,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:q.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof E?t[0]:t,E.merge(this,E.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:S,!0)),N.test(r[1])&&E.isPlainObject(t))for(r in t)m(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=S.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):m(e)?void 0!==n.ready?n.ready(e):e(E):E.makeArray(e,this)}).prototype=E.fn,D=E(S);var L=/^(?:parents|prev(?:Until|All))/,H={children:!0,contents:!0,next:!0,prev:!0};function O(e,t){while((e=e[t])&&1!==e.nodeType);return e}E.fn.extend({has:function(e){var t=E(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(E.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&E(e);if(!k.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?-1<a.index(n):1===n.nodeType&&E.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?E.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?i.call(E(e),this[0]):i.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(E.uniqueSort(E.merge(this.get(),E(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),E.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return h(e,"parentNode")},parentsUntil:function(e,t,n){return h(e,"parentNode",n)},next:function(e){return O(e,"nextSibling")},prev:function(e){return O(e,"previousSibling")},nextAll:function(e){return h(e,"nextSibling")},prevAll:function(e){return h(e,"previousSibling")},nextUntil:function(e,t,n){return h(e,"nextSibling",n)},prevUntil:function(e,t,n){return h(e,"previousSibling",n)},siblings:function(e){return T((e.parentNode||{}).firstChild,e)},children:function(e){return T(e.firstChild)},contents:function(e){return null!=e.contentDocument&&r(e.contentDocument)?e.contentDocument:(A(e,"template")&&(e=e.content||e),E.merge([],e.childNodes))}},function(r,i){E.fn[r]=function(e,t){var n=E.map(this,i,e);return"Until"!==r.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=E.filter(t,n)),1<this.length&&(H[r]||E.uniqueSort(n),L.test(r)&&n.reverse()),this.pushStack(n)}});var P=/[^\x20\t\r\n\f]+/g;function R(e){return e}function M(e){throw e}function I(e,t,n,r){var i;try{e&&m(i=e.promise)?i.call(e).done(t).fail(n):e&&m(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}E.Callbacks=function(r){var e,n;r="string"==typeof r?(e=r,n={},E.each(e.match(P)||[],function(e,t){n[t]=!0}),n):E.extend({},r);var i,t,o,a,s=[],u=[],l=-1,c=function(){for(a=a||r.once,o=i=!0;u.length;l=-1){t=u.shift();while(++l<s.length)!1===s[l].apply(t[0],t[1])&&r.stopOnFalse&&(l=s.length,t=!1)}r.memory||(t=!1),i=!1,a&&(s=t?[]:"")},f={add:function(){return s&&(t&&!i&&(l=s.length-1,u.push(t)),function n(e){E.each(e,function(e,t){m(t)?r.unique&&f.has(t)||s.push(t):t&&t.length&&"string"!==w(t)&&n(t)})}(arguments),t&&!i&&c()),this},remove:function(){return E.each(arguments,function(e,t){var n;while(-1<(n=E.inArray(t,s,n)))s.splice(n,1),n<=l&&l--}),this},has:function(e){return e?-1<E.inArray(e,s):0<s.length},empty:function(){return s&&(s=[]),this},disable:function(){return a=u=[],s=t="",this},disabled:function(){return!s},lock:function(){return a=u=[],t||i||(s=t=""),this},locked:function(){return!!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),i||c()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!o}};return f},E.extend({Deferred:function(e){var o=[["notify","progress",E.Callbacks("memory"),E.Callbacks("memory"),2],["resolve","done",E.Callbacks("once memory"),E.Callbacks("once memory"),0,"resolved"],["reject","fail",E.Callbacks("once memory"),E.Callbacks("once memory"),1,"rejected"]],i="pending",a={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},"catch":function(e){return a.then(null,e)},pipe:function(){var i=arguments;return E.Deferred(function(r){E.each(o,function(e,t){var n=m(i[t[4]])&&i[t[4]];s[t[1]](function(){var e=n&&n.apply(this,arguments);e&&m(e.promise)?e.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[t[0]+"With"](this,n?[e]:arguments)})}),i=null}).promise()},then:function(t,n,r){var u=0;function l(i,o,a,s){return function(){var n=this,r=arguments,e=function(){var e,t;if(!(i<u)){if((e=a.apply(n,r))===o.promise())throw new TypeError("Thenable self-resolution");t=e&&("object"==typeof e||"function"==typeof e)&&e.then,m(t)?s?t.call(e,l(u,o,R,s),l(u,o,M,s)):(u++,t.call(e,l(u,o,R,s),l(u,o,M,s),l(u,o,R,o.notifyWith))):(a!==R&&(n=void 0,r=[e]),(s||o.resolveWith)(n,r))}},t=s?e:function(){try{e()}catch(e){E.Deferred.exceptionHook&&E.Deferred.exceptionHook(e,t.stackTrace),u<=i+1&&(a!==M&&(n=void 0,r=[e]),o.rejectWith(n,r))}};i?t():(E.Deferred.getStackHook&&(t.stackTrace=E.Deferred.getStackHook()),C.setTimeout(t))}}return E.Deferred(function(e){o[0][3].add(l(0,e,m(r)?r:R,e.notifyWith)),o[1][3].add(l(0,e,m(t)?t:R)),o[2][3].add(l(0,e,m(n)?n:M))}).promise()},promise:function(e){return null!=e?E.extend(e,a):a}},s={};return E.each(o,function(e,t){var n=t[2],r=t[5];a[t[1]]=n.add,r&&n.add(function(){i=r},o[3-e][2].disable,o[3-e][3].disable,o[0][2].lock,o[0][3].lock),n.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},s[t[0]+"With"]=n.fireWith}),a.promise(s),e&&e.call(s,s),s},when:function(e){var n=arguments.length,t=n,r=Array(t),i=s.call(arguments),o=E.Deferred(),a=function(t){return function(e){r[t]=this,i[t]=1<arguments.length?s.call(arguments):e,--n||o.resolveWith(r,i)}};if(n<=1&&(I(e,o.done(a(t)).resolve,o.reject,!n),"pending"===o.state()||m(i[t]&&i[t].then)))return o.then();while(t--)I(i[t],a(t),o.reject);return o.promise()}});var W=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;E.Deferred.exceptionHook=function(e,t){C.console&&C.console.warn&&e&&W.test(e.name)&&C.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},E.readyException=function(e){C.setTimeout(function(){throw e})};var F=E.Deferred();function $(){S.removeEventListener("DOMContentLoaded",$),C.removeEventListener("load",$),E.ready()}E.fn.ready=function(e){return F.then(e)["catch"](function(e){E.readyException(e)}),this},E.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--E.readyWait:E.isReady)||(E.isReady=!0)!==e&&0<--E.readyWait||F.resolveWith(S,[E])}}),E.ready.then=F.then,"complete"===S.readyState||"loading"!==S.readyState&&!S.documentElement.doScroll?C.setTimeout(E.ready):(S.addEventListener("DOMContentLoaded",$),C.addEventListener("load",$));var B=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===w(n))for(s in i=!0,n)B(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,m(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(E(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},_=/^-ms-/,z=/-([a-z])/g;function U(e,t){return t.toUpperCase()}function X(e){return e.replace(_,"ms-").replace(z,U)}var V=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function G(){this.expando=E.expando+G.uid++}G.uid=1,G.prototype={cache:function(e){var t=e[this.expando];return t||(t={},V(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[X(t)]=n;else for(r in t)i[X(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][X(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(X):(t=X(t))in r?[t]:t.match(P)||[]).length;while(n--)delete r[t[n]]}(void 0===t||E.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!E.isEmptyObject(t)}};var Y=new G,Q=new G,J=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,K=/[A-Z]/g;function Z(e,t,n){var r,i;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(K,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:J.test(i)?JSON.parse(i):i)}catch(e){}Q.set(e,t,n)}else n=void 0;return n}E.extend({hasData:function(e){return Q.hasData(e)||Y.hasData(e)},data:function(e,t,n){return Q.access(e,t,n)},removeData:function(e,t){Q.remove(e,t)},_data:function(e,t,n){return Y.access(e,t,n)},_removeData:function(e,t){Y.remove(e,t)}}),E.fn.extend({data:function(n,e){var t,r,i,o=this[0],a=o&&o.attributes;if(void 0===n){if(this.length&&(i=Q.get(o),1===o.nodeType&&!Y.get(o,"hasDataAttrs"))){t=a.length;while(t--)a[t]&&0===(r=a[t].name).indexOf("data-")&&(r=X(r.slice(5)),Z(o,r,i[r]));Y.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof n?this.each(function(){Q.set(this,n)}):B(this,function(e){var t;if(o&&void 0===e)return void 0!==(t=Q.get(o,n))?t:void 0!==(t=Z(o,n))?t:void 0;this.each(function(){Q.set(this,n,e)})},null,e,1<arguments.length,null,!0)},removeData:function(e){return this.each(function(){Q.remove(this,e)})}}),E.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=Y.get(e,t),n&&(!r||Array.isArray(n)?r=Y.access(e,t,E.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=E.queue(e,t),r=n.length,i=n.shift(),o=E._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){E.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return Y.get(e,n)||Y.access(e,n,{empty:E.Callbacks("once memory").add(function(){Y.remove(e,[t+"queue",n])})})}}),E.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?E.queue(this[0],t):void 0===n?this:this.each(function(){var e=E.queue(this,t,n);E._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&E.dequeue(this,t)})},dequeue:function(e){return this.each(function(){E.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=E.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=Y.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var ee=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,te=new RegExp("^(?:([+-])=|)("+ee+")([a-z%]*)$","i"),ne=["Top","Right","Bottom","Left"],re=S.documentElement,ie=function(e){return E.contains(e.ownerDocument,e)},oe={composed:!0};re.getRootNode&&(ie=function(e){return E.contains(e.ownerDocument,e)||e.getRootNode(oe)===e.ownerDocument});var ae=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&ie(e)&&"none"===E.css(e,"display")};function se(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return E.css(e,t,"")},u=s(),l=n&&n[3]||(E.cssNumber[t]?"":"px"),c=e.nodeType&&(E.cssNumber[t]||"px"!==l&&+u)&&te.exec(E.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)E.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,E.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var ue={};function le(e,t){for(var n,r,i,o,a,s,u,l=[],c=0,f=e.length;c<f;c++)(r=e[c]).style&&(n=r.style.display,t?("none"===n&&(l[c]=Y.get(r,"display")||null,l[c]||(r.style.display="")),""===r.style.display&&ae(r)&&(l[c]=(u=a=o=void 0,a=(i=r).ownerDocument,s=i.nodeName,(u=ue[s])||(o=a.body.appendChild(a.createElement(s)),u=E.css(o,"display"),o.parentNode.removeChild(o),"none"===u&&(u="block"),ue[s]=u)))):"none"!==n&&(l[c]="none",Y.set(r,"display",n)));for(c=0;c<f;c++)null!=l[c]&&(e[c].style.display=l[c]);return e}E.fn.extend({show:function(){return le(this,!0)},hide:function(){return le(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ae(this)?E(this).show():E(this).hide()})}});var ce,fe,pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,he=/^$|^module$|\/(?:java|ecma)script/i;ce=S.createDocumentFragment().appendChild(S.createElement("div")),(fe=S.createElement("input")).setAttribute("type","radio"),fe.setAttribute("checked","checked"),fe.setAttribute("name","t"),ce.appendChild(fe),v.checkClone=ce.cloneNode(!0).cloneNode(!0).lastChild.checked,ce.innerHTML="<textarea>x</textarea>",v.noCloneChecked=!!ce.cloneNode(!0).lastChild.defaultValue,ce.innerHTML="<option></option>",v.option=!!ce.lastChild;var ge={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function ye(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&A(e,t)?E.merge([e],n):n}function ve(e,t){for(var n=0,r=e.length;n<r;n++)Y.set(e[n],"globalEval",!t||Y.get(t[n],"globalEval"))}ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td,v.option||(ge.optgroup=ge.option=[1,"<select multiple='multiple'>","</select>"]);var me=/<|&#?\w+;/;function xe(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===w(o))E.merge(p,o.nodeType?[o]:o);else if(me.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+E.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;E.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&-1<E.inArray(o,r))i&&i.push(o);else if(l=ie(o),a=ye(f.appendChild(o),"script"),l&&ve(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}var be=/^([^.]*)(?:\.(.+)|)/;function we(){return!0}function Te(){return!1}function Ce(e,t){return e===function(){try{return S.activeElement}catch(e){}}()==("focus"===t)}function Se(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)Se(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=Te;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return E().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=E.guid++)),e.each(function(){E.event.add(this,t,i,r,n)})}function Ee(e,i,o){o?(Y.set(e,i,!1),E.event.add(e,i,{namespace:!1,handler:function(e){var t,n,r=Y.get(this,i);if(1&e.isTrigger&&this[i]){if(r.length)(E.event.special[i]||{}).delegateType&&e.stopPropagation();else if(r=s.call(arguments),Y.set(this,i,r),t=o(this,i),this[i](),r!==(n=Y.get(this,i))||t?Y.set(this,i,!1):n={},r!==n)return e.stopImmediatePropagation(),e.preventDefault(),n&&n.value}else r.length&&(Y.set(this,i,{value:E.event.trigger(E.extend(r[0],E.Event.prototype),r.slice(1),this)}),e.stopImmediatePropagation())}})):void 0===Y.get(e,i)&&E.event.add(e,i,we)}E.event={global:{},add:function(t,e,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,y=Y.get(t);if(V(t)){n.handler&&(n=(o=n).handler,i=o.selector),i&&E.find.matchesSelector(re,i),n.guid||(n.guid=E.guid++),(u=y.events)||(u=y.events=Object.create(null)),(a=y.handle)||(a=y.handle=function(e){return"undefined"!=typeof E&&E.event.triggered!==e.type?E.event.dispatch.apply(t,arguments):void 0}),l=(e=(e||"").match(P)||[""]).length;while(l--)d=g=(s=be.exec(e[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=E.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=E.event.special[d]||{},c=E.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&E.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(t,r,h,a)||t.addEventListener&&t.addEventListener(d,a)),f.add&&(f.add.call(t,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),E.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,y=Y.hasData(e)&&Y.get(e);if(y&&(u=y.events)){l=(t=(t||"").match(P)||[""]).length;while(l--)if(d=g=(s=be.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d){f=E.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,y.handle)||E.removeEvent(e,d,y.handle),delete u[d])}else for(d in u)E.event.remove(e,d+t[l],n,r,!0);E.isEmptyObject(u)&&Y.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=new Array(arguments.length),u=E.event.fix(e),l=(Y.get(this,"events")||Object.create(null))[u.type]||[],c=E.event.special[u.type]||{};for(s[0]=u,t=1;t<arguments.length;t++)s[t]=arguments[t];if(u.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,u)){a=E.event.handlers.call(this,u,l),t=0;while((i=a[t++])&&!u.isPropagationStopped()){u.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!u.isImmediatePropagationStopped())u.rnamespace&&!1!==o.namespace&&!u.rnamespace.test(o.namespace)||(u.handleObj=o,u.data=o.data,void 0!==(r=((E.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,s))&&!1===(u.result=r)&&(u.preventDefault(),u.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,u),u.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&1<=e.button))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?-1<E(i,this).index(l):E.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(t,e){Object.defineProperty(E.Event.prototype,t,{enumerable:!0,configurable:!0,get:m(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[E.expando]?e:new E.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Ee(t,"click",we),!1},trigger:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Ee(t,"click"),!0},_default:function(e){var t=e.target;return pe.test(t.type)&&t.click&&A(t,"input")&&Y.get(t,"click")||A(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},E.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},E.Event=function(e,t){if(!(this instanceof E.Event))return new E.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?we:Te,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&E.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[E.expando]=!0},E.Event.prototype={constructor:E.Event,isDefaultPrevented:Te,isPropagationStopped:Te,isImmediatePropagationStopped:Te,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=we,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=we,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=we,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},E.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},E.event.addProp),E.each({focus:"focusin",blur:"focusout"},function(t,e){E.event.special[t]={setup:function(){return Ee(this,t,Ce),!1},trigger:function(){return Ee(this,t),!0},_default:function(e){return Y.get(e.target,t)},delegateType:e}}),E.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,i){E.event.special[e]={delegateType:i,bindType:i,handle:function(e){var t,n=e.relatedTarget,r=e.handleObj;return n&&(n===this||E.contains(this,n))||(e.type=r.origType,t=r.handler.apply(this,arguments),e.type=i),t}}}),E.fn.extend({on:function(e,t,n,r){return Se(this,e,t,n,r)},one:function(e,t,n,r){return Se(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,E(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=Te),this.each(function(){E.event.remove(this,e,n,t)})}});var ke=/<script|<style|<link/i,Ae=/checked\s*(?:[^=]|=\s*.checked.)/i,Ne=/^\s*<!\[CDATA\[|\]\]>\s*$/g;function je(e,t){return A(e,"table")&&A(11!==t.nodeType?t:t.firstChild,"tr")&&E(e).children("tbody")[0]||e}function De(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function qe(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Le(e,t){var n,r,i,o,a,s;if(1===t.nodeType){if(Y.hasData(e)&&(s=Y.get(e).events))for(i in Y.remove(t,"handle events"),s)for(n=0,r=s[i].length;n<r;n++)E.event.add(t,i,s[i][n]);Q.hasData(e)&&(o=Q.access(e),a=E.extend({},o),Q.set(t,a))}}function He(n,r,i,o){r=g(r);var e,t,a,s,u,l,c=0,f=n.length,p=f-1,d=r[0],h=m(d);if(h||1<f&&"string"==typeof d&&!v.checkClone&&Ae.test(d))return n.each(function(e){var t=n.eq(e);h&&(r[0]=d.call(this,e,t.html())),He(t,r,i,o)});if(f&&(t=(e=xe(r,n[0].ownerDocument,!1,n,o)).firstChild,1===e.childNodes.length&&(e=t),t||o)){for(s=(a=E.map(ye(e,"script"),De)).length;c<f;c++)u=e,c!==p&&(u=E.clone(u,!0,!0),s&&E.merge(a,ye(u,"script"))),i.call(n[c],u,c);if(s)for(l=a[a.length-1].ownerDocument,E.map(a,qe),c=0;c<s;c++)u=a[c],he.test(u.type||"")&&!Y.access(u,"globalEval")&&E.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?E._evalUrl&&!u.noModule&&E._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")},l):b(u.textContent.replace(Ne,""),u,l))}return n}function Oe(e,t,n){for(var r,i=t?E.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||E.cleanData(ye(r)),r.parentNode&&(n&&ie(r)&&ve(ye(r,"script")),r.parentNode.removeChild(r));return e}E.extend({htmlPrefilter:function(e){return e},clone:function(e,t,n){var r,i,o,a,s,u,l,c=e.cloneNode(!0),f=ie(e);if(!(v.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||E.isXMLDoc(e)))for(a=ye(c),r=0,i=(o=ye(e)).length;r<i;r++)s=o[r],u=a[r],void 0,"input"===(l=u.nodeName.toLowerCase())&&pe.test(s.type)?u.checked=s.checked:"input"!==l&&"textarea"!==l||(u.defaultValue=s.defaultValue);if(t)if(n)for(o=o||ye(e),a=a||ye(c),r=0,i=o.length;r<i;r++)Le(o[r],a[r]);else Le(e,c);return 0<(a=ye(c,"script")).length&&ve(a,!f&&ye(e,"script")),c},cleanData:function(e){for(var t,n,r,i=E.event.special,o=0;void 0!==(n=e[o]);o++)if(V(n)){if(t=n[Y.expando]){if(t.events)for(r in t.events)i[r]?E.event.remove(n,r):E.removeEvent(n,r,t.handle);n[Y.expando]=void 0}n[Q.expando]&&(n[Q.expando]=void 0)}}}),E.fn.extend({detach:function(e){return Oe(this,e,!0)},remove:function(e){return Oe(this,e)},text:function(e){return B(this,function(e){return void 0===e?E.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return He(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||je(this,e).appendChild(e)})},prepend:function(){return He(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=je(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return He(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return He(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(E.cleanData(ye(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return E.clone(this,e,t)})},html:function(e){return B(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!ke.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=E.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(E.cleanData(ye(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];return He(this,arguments,function(e){var t=this.parentNode;E.inArray(this,n)<0&&(E.cleanData(ye(this)),t&&t.replaceChild(e,this))},n)}}),E.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,a){E.fn[e]=function(e){for(var t,n=[],r=E(e),i=r.length-1,o=0;o<=i;o++)t=o===i?this:this.clone(!0),E(r[o])[a](t),u.apply(n,t.get());return this.pushStack(n)}});var Pe=new RegExp("^("+ee+")(?!px)[a-z%]+$","i"),Re=/^--/,Me=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=C),t.getComputedStyle(e)},Ie=function(e,t,n){var r,i,o={};for(i in t)o[i]=e.style[i],e.style[i]=t[i];for(i in r=n.call(e),t)e.style[i]=o[i];return r},We=new RegExp(ne.join("|"),"i"),Fe="[\\x20\\t\\r\\n\\f]",$e=new RegExp("^"+Fe+"+|((?:^|[^\\\\])(?:\\\\.)*)"+Fe+"+$","g");function Be(e,t,n){var r,i,o,a,s=Re.test(t),u=e.style;return(n=n||Me(e))&&(a=n.getPropertyValue(t)||n[t],s&&a&&(a=a.replace($e,"$1")||void 0),""!==a||ie(e)||(a=E.style(e,t)),!v.pixelBoxStyles()&&Pe.test(a)&&We.test(t)&&(r=u.width,i=u.minWidth,o=u.maxWidth,u.minWidth=u.maxWidth=u.width=a,a=n.width,u.width=r,u.minWidth=i,u.maxWidth=o)),void 0!==a?a+"":a}function _e(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(l){u.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",l.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",re.appendChild(u).appendChild(l);var e=C.getComputedStyle(l);n="1%"!==e.top,s=12===t(e.marginLeft),l.style.right="60%",o=36===t(e.right),r=36===t(e.width),l.style.position="absolute",i=12===t(l.offsetWidth/3),re.removeChild(u),l=null}}function t(e){return Math.round(parseFloat(e))}var n,r,i,o,a,s,u=S.createElement("div"),l=S.createElement("div");l.style&&(l.style.backgroundClip="content-box",l.cloneNode(!0).style.backgroundClip="",v.clearCloneStyle="content-box"===l.style.backgroundClip,E.extend(v,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),o},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),s},scrollboxSize:function(){return e(),i},reliableTrDimensions:function(){var e,t,n,r;return null==a&&(e=S.createElement("table"),t=S.createElement("tr"),n=S.createElement("div"),e.style.cssText="position:absolute;left:-11111px;border-collapse:separate",t.style.cssText="border:1px solid",t.style.height="1px",n.style.height="9px",n.style.display="block",re.appendChild(e).appendChild(t).appendChild(n),r=C.getComputedStyle(t),a=parseInt(r.height,10)+parseInt(r.borderTopWidth,10)+parseInt(r.borderBottomWidth,10)===t.offsetHeight,re.removeChild(e)),a}}))}();var ze=["Webkit","Moz","ms"],Ue=S.createElement("div").style,Xe={};function Ve(e){var t=E.cssProps[e]||Xe[e];return t||(e in Ue?e:Xe[e]=function(e){var t=e[0].toUpperCase()+e.slice(1),n=ze.length;while(n--)if((e=ze[n]+t)in Ue)return e}(e)||e)}var Ge=/^(none|table(?!-c[ea]).+)/,Ye={position:"absolute",visibility:"hidden",display:"block"},Qe={letterSpacing:"0",fontWeight:"400"};function Je(e,t,n){var r=te.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function Ke(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=E.css(e,n+ne[a],!0,i)),r?("content"===n&&(u-=E.css(e,"padding"+ne[a],!0,i)),"margin"!==n&&(u-=E.css(e,"border"+ne[a]+"Width",!0,i))):(u+=E.css(e,"padding"+ne[a],!0,i),"padding"!==n?u+=E.css(e,"border"+ne[a]+"Width",!0,i):s+=E.css(e,"border"+ne[a]+"Width",!0,i));return!r&&0<=o&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))||0),u}function Ze(e,t,n){var r=Me(e),i=(!v.boxSizingReliable()||n)&&"border-box"===E.css(e,"boxSizing",!1,r),o=i,a=Be(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);if(Pe.test(a)){if(!n)return a;a="auto"}return(!v.boxSizingReliable()&&i||!v.reliableTrDimensions()&&A(e,"tr")||"auto"===a||!parseFloat(a)&&"inline"===E.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===E.css(e,"boxSizing",!1,r),(o=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+Ke(e,t,n||(i?"border":"content"),o,r,a)+"px"}function et(e,t,n,r,i){return new et.prototype.init(e,t,n,r,i)}E.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Be(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=X(t),u=Re.test(t),l=e.style;if(u||(t=Ve(s)),a=E.cssHooks[t]||E.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"===(o=typeof n)&&(i=te.exec(n))&&i[1]&&(n=se(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||u||(n+=i&&i[3]||(E.cssNumber[s]?"":"px")),v.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=X(t);return Re.test(t)||(t=Ve(s)),(a=E.cssHooks[t]||E.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=Be(e,t,r)),"normal"===i&&t in Qe&&(i=Qe[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),E.each(["height","width"],function(e,u){E.cssHooks[u]={get:function(e,t,n){if(t)return!Ge.test(E.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?Ze(e,u,n):Ie(e,Ye,function(){return Ze(e,u,n)})},set:function(e,t,n){var r,i=Me(e),o=!v.scrollboxSize()&&"absolute"===i.position,a=(o||n)&&"border-box"===E.css(e,"boxSizing",!1,i),s=n?Ke(e,u,n,a,i):0;return a&&o&&(s-=Math.ceil(e["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(i[u])-Ke(e,u,"border",!1,i)-.5)),s&&(r=te.exec(t))&&"px"!==(r[3]||"px")&&(e.style[u]=t,t=E.css(e,u)),Je(0,t,s)}}}),E.cssHooks.marginLeft=_e(v.reliableMarginLeft,function(e,t){if(t)return(parseFloat(Be(e,"marginLeft"))||e.getBoundingClientRect().left-Ie(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),E.each({margin:"",padding:"",border:"Width"},function(i,o){E.cssHooks[i+o]={expand:function(e){for(var t=0,n={},r="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+ne[t]+o]=r[t]||r[t-2]||r[0];return n}},"margin"!==i&&(E.cssHooks[i+o].set=Je)}),E.fn.extend({css:function(e,t){return B(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=Me(e),i=t.length;a<i;a++)o[t[a]]=E.css(e,t[a],!1,r);return o}return void 0!==n?E.style(e,t,n):E.css(e,t)},e,t,1<arguments.length)}}),((E.Tween=et).prototype={constructor:et,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||E.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(E.cssNumber[n]?"":"px")},cur:function(){var e=et.propHooks[this.prop];return e&&e.get?e.get(this):et.propHooks._default.get(this)},run:function(e){var t,n=et.propHooks[this.prop];return this.options.duration?this.pos=t=E.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):et.propHooks._default.set(this),this}}).init.prototype=et.prototype,(et.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=E.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){E.fx.step[e.prop]?E.fx.step[e.prop](e):1!==e.elem.nodeType||!E.cssHooks[e.prop]&&null==e.elem.style[Ve(e.prop)]?e.elem[e.prop]=e.now:E.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=et.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},E.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},E.fx=et.prototype.init,E.fx.step={};var tt,nt,rt,it,ot=/^(?:toggle|show|hide)$/,at=/queueHooks$/;function st(){nt&&(!1===S.hidden&&C.requestAnimationFrame?C.requestAnimationFrame(st):C.setTimeout(st,E.fx.interval),E.fx.tick())}function ut(){return C.setTimeout(function(){tt=void 0}),tt=Date.now()}function lt(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=ne[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function ct(e,t,n){for(var r,i=(ft.tweeners[t]||[]).concat(ft.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function ft(o,e,t){var n,a,r=0,i=ft.prefilters.length,s=E.Deferred().always(function(){delete u.elem}),u=function(){if(a)return!1;for(var e=tt||ut(),t=Math.max(0,l.startTime+l.duration-e),n=1-(t/l.duration||0),r=0,i=l.tweens.length;r<i;r++)l.tweens[r].run(n);return s.notifyWith(o,[l,n,t]),n<1&&i?t:(i||s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l]),!1)},l=s.promise({elem:o,props:E.extend({},e),opts:E.extend(!0,{specialEasing:{},easing:E.easing._default},t),originalProperties:e,originalOptions:t,startTime:tt||ut(),duration:t.duration,tweens:[],createTween:function(e,t){var n=E.Tween(o,l.opts,e,t,l.opts.specialEasing[e]||l.opts.easing);return l.tweens.push(n),n},stop:function(e){var t=0,n=e?l.tweens.length:0;if(a)return this;for(a=!0;t<n;t++)l.tweens[t].run(1);return e?(s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l,e])):s.rejectWith(o,[l,e]),this}}),c=l.props;for(!function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=X(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=E.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);r<i;r++)if(n=ft.prefilters[r].call(l,o,c,l.opts))return m(n.stop)&&(E._queueHooks(l.elem,l.opts.queue).stop=n.stop.bind(n)),n;return E.map(c,ct,l),m(l.opts.start)&&l.opts.start.call(o,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),E.fx.timer(E.extend(u,{elem:o,anim:l,queue:l.opts.queue})),l}E.Animation=E.extend(ft,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return se(n.elem,e,te.exec(t),n),n}]},tweener:function(e,t){m(e)?(t=e,e=["*"]):e=e.match(P);for(var n,r=0,i=e.length;r<i;r++)n=e[r],ft.tweeners[n]=ft.tweeners[n]||[],ft.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ae(e),y=Y.get(e,"fxshow");for(r in n.queue||(null==(a=E._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,E.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[r],ot.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!y||void 0===y[r])continue;g=!0}d[r]=y&&y[r]||E.style(e,r)}if((u=!E.isEmptyObject(t))||!E.isEmptyObject(d))for(r in f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=y&&y.display)&&(l=Y.get(e,"display")),"none"===(c=E.css(e,"display"))&&(l?c=l:(le([e],!0),l=e.style.display||l,c=E.css(e,"display"),le([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===E.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1,d)u||(y?"hidden"in y&&(g=y.hidden):y=Y.access(e,"fxshow",{display:l}),o&&(y.hidden=!g),g&&le([e],!0),p.done(function(){for(r in g||le([e]),Y.remove(e,"fxshow"),d)E.style(e,r,d[r])})),u=ct(g?y[r]:0,r,p),r in y||(y[r]=u.start,g&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?ft.prefilters.unshift(e):ft.prefilters.push(e)}}),E.speed=function(e,t,n){var r=e&&"object"==typeof e?E.extend({},e):{complete:n||!n&&t||m(e)&&e,duration:e,easing:n&&t||t&&!m(t)&&t};return E.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in E.fx.speeds?r.duration=E.fx.speeds[r.duration]:r.duration=E.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){m(r.old)&&r.old.call(this),r.queue&&E.dequeue(this,r.queue)},r},E.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ae).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(t,e,n,r){var i=E.isEmptyObject(t),o=E.speed(e,n,r),a=function(){var e=ft(this,E.extend({},t),o);(i||Y.get(this,"finish"))&&e.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(i,e,o){var a=function(e){var t=e.stop;delete e.stop,t(o)};return"string"!=typeof i&&(o=e,e=i,i=void 0),e&&this.queue(i||"fx",[]),this.each(function(){var e=!0,t=null!=i&&i+"queueHooks",n=E.timers,r=Y.get(this);if(t)r[t]&&r[t].stop&&a(r[t]);else for(t in r)r[t]&&r[t].stop&&at.test(t)&&a(r[t]);for(t=n.length;t--;)n[t].elem!==this||null!=i&&n[t].queue!==i||(n[t].anim.stop(o),e=!1,n.splice(t,1));!e&&o||E.dequeue(this,i)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var e,t=Y.get(this),n=t[a+"queue"],r=t[a+"queueHooks"],i=E.timers,o=n?n.length:0;for(t.finish=!0,E.queue(this,a,[]),r&&r.stop&&r.stop.call(this,!0),e=i.length;e--;)i[e].elem===this&&i[e].queue===a&&(i[e].anim.stop(!0),i.splice(e,1));for(e=0;e<o;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete t.finish})}}),E.each(["toggle","show","hide"],function(e,r){var i=E.fn[r];E.fn[r]=function(e,t,n){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(lt(r,!0),e,t,n)}}),E.each({slideDown:lt("show"),slideUp:lt("hide"),slideToggle:lt("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,r){E.fn[e]=function(e,t,n){return this.animate(r,e,t,n)}}),E.timers=[],E.fx.tick=function(){var e,t=0,n=E.timers;for(tt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||E.fx.stop(),tt=void 0},E.fx.timer=function(e){E.timers.push(e),E.fx.start()},E.fx.interval=13,E.fx.start=function(){nt||(nt=!0,st())},E.fx.stop=function(){nt=null},E.fx.speeds={slow:600,fast:200,_default:400},E.fn.delay=function(r,e){return r=E.fx&&E.fx.speeds[r]||r,e=e||"fx",this.queue(e,function(e,t){var n=C.setTimeout(e,r);t.stop=function(){C.clearTimeout(n)}})},rt=S.createElement("input"),it=S.createElement("select").appendChild(S.createElement("option")),rt.type="checkbox",v.checkOn=""!==rt.value,v.optSelected=it.selected,(rt=S.createElement("input")).value="t",rt.type="radio",v.radioValue="t"===rt.value;var pt,dt=E.expr.attrHandle;E.fn.extend({attr:function(e,t){return B(this,E.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){E.removeAttr(this,e)})}}),E.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?E.prop(e,t,n):(1===o&&E.isXMLDoc(e)||(i=E.attrHooks[t.toLowerCase()]||(E.expr.match.bool.test(t)?pt:void 0)),void 0!==n?null===n?void E.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=E.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!v.radioValue&&"radio"===t&&A(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(P);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),pt={set:function(e,t,n){return!1===t?E.removeAttr(e,n):e.setAttribute(n,n),n}},E.each(E.expr.match.bool.source.match(/\w+/g),function(e,t){var a=dt[t]||E.find.attr;dt[t]=function(e,t,n){var r,i,o=t.toLowerCase();return n||(i=dt[o],dt[o]=r,r=null!=a(e,t,n)?o:null,dt[o]=i),r}});var ht=/^(?:input|select|textarea|button)$/i,gt=/^(?:a|area)$/i;function yt(e){return(e.match(P)||[]).join(" ")}function vt(e){return e.getAttribute&&e.getAttribute("class")||""}function mt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(P)||[]}E.fn.extend({prop:function(e,t){return B(this,E.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[E.propFix[e]||e]})}}),E.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&E.isXMLDoc(e)||(t=E.propFix[t]||t,i=E.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=E.find.attr(e,"tabindex");return t?parseInt(t,10):ht.test(e.nodeName)||gt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),v.optSelected||(E.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),E.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){E.propFix[this.toLowerCase()]=this}),E.fn.extend({addClass:function(t){var e,n,r,i,o,a;return m(t)?this.each(function(e){E(this).addClass(t.call(this,e,vt(this)))}):(e=mt(t)).length?this.each(function(){if(r=vt(this),n=1===this.nodeType&&" "+yt(r)+" "){for(o=0;o<e.length;o++)i=e[o],n.indexOf(" "+i+" ")<0&&(n+=i+" ");a=yt(n),r!==a&&this.setAttribute("class",a)}}):this},removeClass:function(t){var e,n,r,i,o,a;return m(t)?this.each(function(e){E(this).removeClass(t.call(this,e,vt(this)))}):arguments.length?(e=mt(t)).length?this.each(function(){if(r=vt(this),n=1===this.nodeType&&" "+yt(r)+" "){for(o=0;o<e.length;o++){i=e[o];while(-1<n.indexOf(" "+i+" "))n=n.replace(" "+i+" "," ")}a=yt(n),r!==a&&this.setAttribute("class",a)}}):this:this.attr("class","")},toggleClass:function(t,n){var e,r,i,o,a=typeof t,s="string"===a||Array.isArray(t);return m(t)?this.each(function(e){E(this).toggleClass(t.call(this,e,vt(this),n),n)}):"boolean"==typeof n&&s?n?this.addClass(t):this.removeClass(t):(e=mt(t),this.each(function(){if(s)for(o=E(this),i=0;i<e.length;i++)r=e[i],o.hasClass(r)?o.removeClass(r):o.addClass(r);else void 0!==t&&"boolean"!==a||((r=vt(this))&&Y.set(this,"__className__",r),this.setAttribute&&this.setAttribute("class",r||!1===t?"":Y.get(this,"__className__")||""))}))},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&-1<(" "+yt(vt(n))+" ").indexOf(t))return!0;return!1}});var xt=/\r/g;E.fn.extend({val:function(n){var r,e,i,t=this[0];return arguments.length?(i=m(n),this.each(function(e){var t;1===this.nodeType&&(null==(t=i?n.call(this,e,E(this).val()):n)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=E.map(t,function(e){return null==e?"":e+""})),(r=E.valHooks[this.type]||E.valHooks[this.nodeName.toLowerCase()])&&"set"in r&&void 0!==r.set(this,t,"value")||(this.value=t))})):t?(r=E.valHooks[t.type]||E.valHooks[t.nodeName.toLowerCase()])&&"get"in r&&void 0!==(e=r.get(t,"value"))?e:"string"==typeof(e=t.value)?e.replace(xt,""):null==e?"":e:void 0}}),E.extend({valHooks:{option:{get:function(e){var t=E.find.attr(e,"value");return null!=t?t:yt(E.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!A(n.parentNode,"optgroup"))){if(t=E(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=E.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=-1<E.inArray(E.valHooks.option.get(r),o))&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),E.each(["radio","checkbox"],function(){E.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<E.inArray(E(e).val(),t)}},v.checkOn||(E.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),v.focusin="onfocusin"in C;var bt=/^(?:focusinfocus|focusoutblur)$/,wt=function(e){e.stopPropagation()};E.extend(E.event,{trigger:function(e,t,n,r){var i,o,a,s,u,l,c,f,p=[n||S],d=y.call(e,"type")?e.type:e,h=y.call(e,"namespace")?e.namespace.split("."):[];if(o=f=a=n=n||S,3!==n.nodeType&&8!==n.nodeType&&!bt.test(d+E.event.triggered)&&(-1<d.indexOf(".")&&(d=(h=d.split(".")).shift(),h.sort()),u=d.indexOf(":")<0&&"on"+d,(e=e[E.expando]?e:new E.Event(d,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:E.makeArray(t,[e]),c=E.event.special[d]||{},r||!c.trigger||!1!==c.trigger.apply(n,t))){if(!r&&!c.noBubble&&!x(n)){for(s=c.delegateType||d,bt.test(s+d)||(o=o.parentNode);o;o=o.parentNode)p.push(o),a=o;a===(n.ownerDocument||S)&&p.push(a.defaultView||a.parentWindow||C)}i=0;while((o=p[i++])&&!e.isPropagationStopped())f=o,e.type=1<i?s:c.bindType||d,(l=(Y.get(o,"events")||Object.create(null))[e.type]&&Y.get(o,"handle"))&&l.apply(o,t),(l=u&&o[u])&&l.apply&&V(o)&&(e.result=l.apply(o,t),!1===e.result&&e.preventDefault());return e.type=d,r||e.isDefaultPrevented()||c._default&&!1!==c._default.apply(p.pop(),t)||!V(n)||u&&m(n[d])&&!x(n)&&((a=n[u])&&(n[u]=null),E.event.triggered=d,e.isPropagationStopped()&&f.addEventListener(d,wt),n[d](),e.isPropagationStopped()&&f.removeEventListener(d,wt),E.event.triggered=void 0,a&&(n[u]=a)),e.result}},simulate:function(e,t,n){var r=E.extend(new E.Event,n,{type:e,isSimulated:!0});E.event.trigger(r,null,t)}}),E.fn.extend({trigger:function(e,t){return this.each(function(){E.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return E.event.trigger(e,t,n,!0)}}),v.focusin||E.each({focus:"focusin",blur:"focusout"},function(n,r){var i=function(e){E.event.simulate(r,e.target,E.event.fix(e))};E.event.special[r]={setup:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r);t||e.addEventListener(n,i,!0),Y.access(e,r,(t||0)+1)},teardown:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r)-1;t?Y.access(e,r,t):(e.removeEventListener(n,i,!0),Y.remove(e,r))}}});var Tt=C.location,Ct={guid:Date.now()},St=/\?/;E.parseXML=function(e){var t,n;if(!e||"string"!=typeof e)return null;try{t=(new C.DOMParser).parseFromString(e,"text/xml")}catch(e){}return n=t&&t.getElementsByTagName("parsererror")[0],t&&!n||E.error("Invalid XML: "+(n?E.map(n.childNodes,function(e){return e.textContent}).join("\n"):e)),t};var Et=/\[\]$/,kt=/\r?\n/g,At=/^(?:submit|button|image|reset|file)$/i,Nt=/^(?:input|select|textarea|keygen)/i;function jt(n,e,r,i){var t;if(Array.isArray(e))E.each(e,function(e,t){r||Et.test(n)?i(n,t):jt(n+"["+("object"==typeof t&&null!=t?e:"")+"]",t,r,i)});else if(r||"object"!==w(e))i(n,e);else for(t in e)jt(n+"["+t+"]",e[t],r,i)}E.param=function(e,t){var n,r=[],i=function(e,t){var n=m(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!E.isPlainObject(e))E.each(e,function(){i(this.name,this.value)});else for(n in e)jt(n,e[n],t,i);return r.join("&")},E.fn.extend({serialize:function(){return E.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=E.prop(this,"elements");return e?E.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!E(this).is(":disabled")&&Nt.test(this.nodeName)&&!At.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=E(this).val();return null==n?null:Array.isArray(n)?E.map(n,function(e){return{name:t.name,value:e.replace(kt,"\r\n")}}):{name:t.name,value:n.replace(kt,"\r\n")}}).get()}});var Dt=/%20/g,qt=/#.*$/,Lt=/([?&])_=[^&]*/,Ht=/^(.*?):[ \t]*([^\r\n]*)$/gm,Ot=/^(?:GET|HEAD)$/,Pt=/^\/\//,Rt={},Mt={},It="*/".concat("*"),Wt=S.createElement("a");function Ft(o){return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,r=0,i=e.toLowerCase().match(P)||[];if(m(t))while(n=i[r++])"+"===n[0]?(n=n.slice(1)||"*",(o[n]=o[n]||[]).unshift(t)):(o[n]=o[n]||[]).push(t)}}function $t(t,i,o,a){var s={},u=t===Mt;function l(e){var r;return s[e]=!0,E.each(t[e]||[],function(e,t){var n=t(i,o,a);return"string"!=typeof n||u||s[n]?u?!(r=n):void 0:(i.dataTypes.unshift(n),l(n),!1)}),r}return l(i.dataTypes[0])||!s["*"]&&l("*")}function Bt(e,t){var n,r,i=E.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&E.extend(!0,e,r),e}Wt.href=Tt.href,E.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Tt.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Tt.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":It,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":E.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?Bt(Bt(e,E.ajaxSettings),t):Bt(E.ajaxSettings,e)},ajaxPrefilter:Ft(Rt),ajaxTransport:Ft(Mt),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var c,f,p,n,d,r,h,g,i,o,y=E.ajaxSetup({},t),v=y.context||y,m=y.context&&(v.nodeType||v.jquery)?E(v):E.event,x=E.Deferred(),b=E.Callbacks("once memory"),w=y.statusCode||{},a={},s={},u="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(h){if(!n){n={};while(t=Ht.exec(p))n[t[1].toLowerCase()+" "]=(n[t[1].toLowerCase()+" "]||[]).concat(t[2])}t=n[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return h?p:null},setRequestHeader:function(e,t){return null==h&&(e=s[e.toLowerCase()]=s[e.toLowerCase()]||e,a[e]=t),this},overrideMimeType:function(e){return null==h&&(y.mimeType=e),this},statusCode:function(e){var t;if(e)if(h)T.always(e[T.status]);else for(t in e)w[t]=[w[t],e[t]];return this},abort:function(e){var t=e||u;return c&&c.abort(t),l(0,t),this}};if(x.promise(T),y.url=((e||y.url||Tt.href)+"").replace(Pt,Tt.protocol+"//"),y.type=t.method||t.type||y.method||y.type,y.dataTypes=(y.dataType||"*").toLowerCase().match(P)||[""],null==y.crossDomain){r=S.createElement("a");try{r.href=y.url,r.href=r.href,y.crossDomain=Wt.protocol+"//"+Wt.host!=r.protocol+"//"+r.host}catch(e){y.crossDomain=!0}}if(y.data&&y.processData&&"string"!=typeof y.data&&(y.data=E.param(y.data,y.traditional)),$t(Rt,y,t,T),h)return T;for(i in(g=E.event&&y.global)&&0==E.active++&&E.event.trigger("ajaxStart"),y.type=y.type.toUpperCase(),y.hasContent=!Ot.test(y.type),f=y.url.replace(qt,""),y.hasContent?y.data&&y.processData&&0===(y.contentType||"").indexOf("application/x-www-form-urlencoded")&&(y.data=y.data.replace(Dt,"+")):(o=y.url.slice(f.length),y.data&&(y.processData||"string"==typeof y.data)&&(f+=(St.test(f)?"&":"?")+y.data,delete y.data),!1===y.cache&&(f=f.replace(Lt,"$1"),o=(St.test(f)?"&":"?")+"_="+Ct.guid+++o),y.url=f+o),y.ifModified&&(E.lastModified[f]&&T.setRequestHeader("If-Modified-Since",E.lastModified[f]),E.etag[f]&&T.setRequestHeader("If-None-Match",E.etag[f])),(y.data&&y.hasContent&&!1!==y.contentType||t.contentType)&&T.setRequestHeader("Content-Type",y.contentType),T.setRequestHeader("Accept",y.dataTypes[0]&&y.accepts[y.dataTypes[0]]?y.accepts[y.dataTypes[0]]+("*"!==y.dataTypes[0]?", "+It+"; q=0.01":""):y.accepts["*"]),y.headers)T.setRequestHeader(i,y.headers[i]);if(y.beforeSend&&(!1===y.beforeSend.call(v,T,y)||h))return T.abort();if(u="abort",b.add(y.complete),T.done(y.success),T.fail(y.error),c=$t(Mt,y,t,T)){if(T.readyState=1,g&&m.trigger("ajaxSend",[T,y]),h)return T;y.async&&0<y.timeout&&(d=C.setTimeout(function(){T.abort("timeout")},y.timeout));try{h=!1,c.send(a,l)}catch(e){if(h)throw e;l(-1,e)}}else l(-1,"No Transport");function l(e,t,n,r){var i,o,a,s,u,l=t;h||(h=!0,d&&C.clearTimeout(d),c=void 0,p=r||"",T.readyState=0<e?4:0,i=200<=e&&e<300||304===e,n&&(s=function(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}(y,T,n)),!i&&-1<E.inArray("script",y.dataTypes)&&E.inArray("json",y.dataTypes)<0&&(y.converters["text script"]=function(){}),s=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(y,s,T,i),i?(y.ifModified&&((u=T.getResponseHeader("Last-Modified"))&&(E.lastModified[f]=u),(u=T.getResponseHeader("etag"))&&(E.etag[f]=u)),204===e||"HEAD"===y.type?l="nocontent":304===e?l="notmodified":(l=s.state,o=s.data,i=!(a=s.error))):(a=l,!e&&l||(l="error",e<0&&(e=0))),T.status=e,T.statusText=(t||l)+"",i?x.resolveWith(v,[o,l,T]):x.rejectWith(v,[T,l,a]),T.statusCode(w),w=void 0,g&&m.trigger(i?"ajaxSuccess":"ajaxError",[T,y,i?o:a]),b.fireWith(v,[T,l]),g&&(m.trigger("ajaxComplete",[T,y]),--E.active||E.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return E.get(e,t,n,"json")},getScript:function(e,t){return E.get(e,void 0,t,"script")}}),E.each(["get","post"],function(e,i){E[i]=function(e,t,n,r){return m(t)&&(r=r||n,n=t,t=void 0),E.ajax(E.extend({url:e,type:i,dataType:r,data:t,success:n},E.isPlainObject(e)&&e))}}),E.ajaxPrefilter(function(e){var t;for(t in e.headers)"content-type"===t.toLowerCase()&&(e.contentType=e.headers[t]||"")}),E._evalUrl=function(e,t,n){return E.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){E.globalEval(e,t,n)}})},E.fn.extend({wrapAll:function(e){var t;return this[0]&&(m(e)&&(e=e.call(this[0])),t=E(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return m(n)?this.each(function(e){E(this).wrapInner(n.call(this,e))}):this.each(function(){var e=E(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=m(t);return this.each(function(e){E(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){E(this).replaceWith(this.childNodes)}),this}}),E.expr.pseudos.hidden=function(e){return!E.expr.pseudos.visible(e)},E.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},E.ajaxSettings.xhr=function(){try{return new C.XMLHttpRequest}catch(e){}};var _t={0:200,1223:204},zt=E.ajaxSettings.xhr();v.cors=!!zt&&"withCredentials"in zt,v.ajax=zt=!!zt,E.ajaxTransport(function(i){var o,a;if(v.cors||zt&&!i.crossDomain)return{send:function(e,t){var n,r=i.xhr();if(r.open(i.type,i.url,i.async,i.username,i.password),i.xhrFields)for(n in i.xhrFields)r[n]=i.xhrFields[n];for(n in i.mimeType&&r.overrideMimeType&&r.overrideMimeType(i.mimeType),i.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)r.setRequestHeader(n,e[n]);o=function(e){return function(){o&&(o=a=r.onload=r.onerror=r.onabort=r.ontimeout=r.onreadystatechange=null,"abort"===e?r.abort():"error"===e?"number"!=typeof r.status?t(0,"error"):t(r.status,r.statusText):t(_t[r.status]||r.status,r.statusText,"text"!==(r.responseType||"text")||"string"!=typeof r.responseText?{binary:r.response}:{text:r.responseText},r.getAllResponseHeaders()))}},r.onload=o(),a=r.onerror=r.ontimeout=o("error"),void 0!==r.onabort?r.onabort=a:r.onreadystatechange=function(){4===r.readyState&&C.setTimeout(function(){o&&a()})},o=o("abort");try{r.send(i.hasContent&&i.data||null)}catch(e){if(o)throw e}},abort:function(){o&&o()}}}),E.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),E.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return E.globalEval(e),e}}}),E.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),E.ajaxTransport("script",function(n){var r,i;if(n.crossDomain||n.scriptAttrs)return{send:function(e,t){r=E("<script>").attr(n.scriptAttrs||{}).prop({charset:n.scriptCharset,src:n.url}).on("load error",i=function(e){r.remove(),i=null,e&&t("error"===e.type?404:200,e.type)}),S.head.appendChild(r[0])},abort:function(){i&&i()}}});var Ut,Xt=[],Vt=/(=)\?(?=&|$)|\?\?/;E.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Xt.pop()||E.expando+"_"+Ct.guid++;return this[e]=!0,e}}),E.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,o,a=!1!==e.jsonp&&(Vt.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Vt.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=m(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Vt,"$1"+r):!1!==e.jsonp&&(e.url+=(St.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return o||E.error(r+" was not called"),o[0]},e.dataTypes[0]="json",i=C[r],C[r]=function(){o=arguments},n.always(function(){void 0===i?E(C).removeProp(r):C[r]=i,e[r]&&(e.jsonpCallback=t.jsonpCallback,Xt.push(r)),o&&m(i)&&i(o[0]),o=i=void 0}),"script"}),v.createHTMLDocument=((Ut=S.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===Ut.childNodes.length),E.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(v.createHTMLDocument?((r=(t=S.implementation.createHTMLDocument("")).createElement("base")).href=S.location.href,t.head.appendChild(r)):t=S),o=!n&&[],(i=N.exec(e))?[t.createElement(i[1])]:(i=xe([e],t,o),o&&o.length&&E(o).remove(),E.merge([],i.childNodes)));var r,i,o},E.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return-1<s&&(r=yt(e.slice(s)),e=e.slice(0,s)),m(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),0<a.length&&E.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?E("<div>").append(E.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},E.expr.pseudos.animated=function(t){return E.grep(E.timers,function(e){return t===e.elem}).length},E.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=E.css(e,"position"),c=E(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=E.css(e,"top"),u=E.css(e,"left"),("absolute"===l||"fixed"===l)&&-1<(o+u).indexOf("auto")?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),m(t)&&(t=t.call(e,n,E.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):c.css(f)}},E.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){E.offset.setOffset(this,t,e)});var e,n,r=this[0];return r?r.getClientRects().length?(e=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===E.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===E.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=E(e).offset()).top+=E.css(e,"borderTopWidth",!0),i.left+=E.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-E.css(r,"marginTop",!0),left:t.left-i.left-E.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===E.css(e,"position"))e=e.offsetParent;return e||re})}}),E.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var o="pageYOffset"===i;E.fn[t]=function(e){return B(this,function(e,t,n){var r;if(x(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===n)return r?r[i]:e[t];r?r.scrollTo(o?r.pageXOffset:n,o?n:r.pageYOffset):e[t]=n},t,e,arguments.length)}}),E.each(["top","left"],function(e,n){E.cssHooks[n]=_e(v.pixelPosition,function(e,t){if(t)return t=Be(e,n),Pe.test(t)?E(e).position()[n]+"px":t})}),E.each({Height:"height",Width:"width"},function(a,s){E.each({padding:"inner"+a,content:s,"":"outer"+a},function(r,o){E.fn[o]=function(e,t){var n=arguments.length&&(r||"boolean"!=typeof e),i=r||(!0===e||!0===t?"margin":"border");return B(this,function(e,t,n){var r;return x(e)?0===o.indexOf("outer")?e["inner"+a]:e.document.documentElement["client"+a]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+a],r["scroll"+a],e.body["offset"+a],r["offset"+a],r["client"+a])):void 0===n?E.css(e,t,i):E.style(e,t,n,i)},s,n?e:void 0,n)}})}),E.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){E.fn[t]=function(e){return this.on(t,e)}}),E.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),E.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){E.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}});var Gt=/^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;E.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),m(e))return r=s.call(arguments,2),(i=function(){return e.apply(t||this,r.concat(s.call(arguments)))}).guid=e.guid=e.guid||E.guid++,i},E.holdReady=function(e){e?E.readyWait++:E.ready(!0)},E.isArray=Array.isArray,E.parseJSON=JSON.parse,E.nodeName=A,E.isFunction=m,E.isWindow=x,E.camelCase=X,E.type=w,E.now=Date.now,E.isNumeric=function(e){var t=E.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},E.trim=function(e){return null==e?"":(e+"").replace(Gt,"$1")},"function"==typeof define&&define.amd&&define("jquery",[],function(){return E});var Yt=C.jQuery,Qt=C.$;return E.noConflict=function(e){return C.$===E&&(C.$=Qt),e&&C.jQuery===E&&(C.jQuery=Yt),E},"undefined"==typeof e&&(C.jQuery=C.$=E),E});
;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
if (!Element.prototype.matches) {
  Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
};
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
if (typeof Object.assign !== 'function') {
  Object.defineProperty(Object, 'assign', {
    value: function assign(target, varArgs) {
      'use strict';

      if (target === null || target === undefined) {
        throw new TypeError('Cannot convert undefined or null to object');
      }
      var to = Object(target);
      for (var index = 1; index < arguments.length; index++) {
        var nextSource = arguments[index];
        if (nextSource !== null && nextSource !== undefined) {
          for (var nextKey in nextSource) {
            if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
              to[nextKey] = nextSource[nextKey];
            }
          }
        }
      }
      return to;
    },
    writable: true,
    configurable: true
  });
};
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach;
};
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
;(function(root, factory) {
	// https://github.com/umdjs/umd/blob/master/returnExports.js
	if (typeof exports == 'object') {
		// For Node.js.
		module.exports = factory(root);
	} else if (typeof define == 'function' && define.amd) {
		// For AMD. Register as an anonymous module.
		define([], factory.bind(root, root));
	} else {
		// For browser globals (not exposing the function separately).
		factory(root);
	}
}(typeof global != 'undefined' ? global : this, function(root) {

	if (root.CSS && root.CSS.escape) {
		return root.CSS.escape;
	}

	// https://drafts.csswg.org/cssom/#serialize-an-identifier
	var cssEscape = function(value) {
		if (arguments.length == 0) {
			throw new TypeError('`CSS.escape` requires an argument.');
		}
		var string = String(value);
		var length = string.length;
		var index = -1;
		var codeUnit;
		var result = '';
		var firstCodeUnit = string.charCodeAt(0);
		while (++index < length) {
			codeUnit = string.charCodeAt(index);
			// Note: there’s no need to special-case astral symbols, surrogate
			// pairs, or lone surrogates.

			// If the character is NULL (U+0000), then the REPLACEMENT CHARACTER
			// (U+FFFD).
			if (codeUnit == 0x0000) {
				result += '\uFFFD';
				continue;
			}

			if (
				// If the character is in the range [\1-\1F] (U+0001 to U+001F) or is
				// U+007F, […]
				(codeUnit >= 0x0001 && codeUnit <= 0x001F) || codeUnit == 0x007F ||
				// If the character is the first character and is in the range [0-9]
				// (U+0030 to U+0039), […]
				(index == 0 && codeUnit >= 0x0030 && codeUnit <= 0x0039) ||
				// If the character is the second character and is in the range [0-9]
				// (U+0030 to U+0039) and the first character is a `-` (U+002D), […]
				(
					index == 1 &&
					codeUnit >= 0x0030 && codeUnit <= 0x0039 &&
					firstCodeUnit == 0x002D
				)
			) {
				// https://drafts.csswg.org/cssom/#escape-a-character-as-code-point
				result += '\\' + codeUnit.toString(16) + ' ';
				continue;
			}

			if (
				// If the character is the first character and is a `-` (U+002D), and
				// there is no second character, […]
				index == 0 &&
				length == 1 &&
				codeUnit == 0x002D
			) {
				result += '\\' + string.charAt(index);
				continue;
			}

			// If the character is not handled by one of the above rules and is
			// greater than or equal to U+0080, is `-` (U+002D) or `_` (U+005F), or
			// is in one of the ranges [0-9] (U+0030 to U+0039), [A-Z] (U+0041 to
			// U+005A), or [a-z] (U+0061 to U+007A), […]
			if (
				codeUnit >= 0x0080 ||
				codeUnit == 0x002D ||
				codeUnit == 0x005F ||
				codeUnit >= 0x0030 && codeUnit <= 0x0039 ||
				codeUnit >= 0x0041 && codeUnit <= 0x005A ||
				codeUnit >= 0x0061 && codeUnit <= 0x007A
			) {
				// the character itself
				result += string.charAt(index);
				continue;
			}

			// Otherwise, the escaped character.
			// https://drafts.csswg.org/cssom/#escape-a-character
			result += '\\' + string.charAt(index);

		}
		return result;
	};

	if (!root.CSS) {
		root.CSS = {};
	}

	root.CSS.escape = cssEscape;
	return cssEscape;

}));
;
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.ES6Promise=e()}(this,function(){"use strict";function t(t){var e=typeof t;return null!==t&&("object"===e||"function"===e)}function e(t){return"function"==typeof t}function n(t){W=t}function r(t){z=t}function o(){return function(){return process.nextTick(a)}}function i(){return"undefined"!=typeof U?function(){U(a)}:c()}function s(){var t=0,e=new H(a),n=document.createTextNode("");return e.observe(n,{characterData:!0}),function(){n.data=t=++t%2}}function u(){var t=new MessageChannel;return t.port1.onmessage=a,function(){return t.port2.postMessage(0)}}function c(){var t=setTimeout;return function(){return t(a,1)}}function a(){for(var t=0;t<N;t+=2){var e=Q[t],n=Q[t+1];e(n),Q[t]=void 0,Q[t+1]=void 0}N=0}function f(){try{var t=Function("return this")().require("vertx");return U=t.runOnLoop||t.runOnContext,i()}catch(e){return c()}}function l(t,e){var n=this,r=new this.constructor(p);void 0===r[V]&&x(r);var o=n._state;if(o){var i=arguments[o-1];z(function(){return T(o,r,i,n._result)})}else j(n,r,t,e);return r}function h(t){var e=this;if(t&&"object"==typeof t&&t.constructor===e)return t;var n=new e(p);return w(n,t),n}function p(){}function v(){return new TypeError("You cannot resolve a promise with itself")}function d(){return new TypeError("A promises callback cannot return that same promise.")}function _(t,e,n,r){try{t.call(e,n,r)}catch(o){return o}}function y(t,e,n){z(function(t){var r=!1,o=_(n,e,function(n){r||(r=!0,e!==n?w(t,n):A(t,n))},function(e){r||(r=!0,S(t,e))},"Settle: "+(t._label||" unknown promise"));!r&&o&&(r=!0,S(t,o))},t)}function m(t,e){e._state===Z?A(t,e._result):e._state===$?S(t,e._result):j(e,void 0,function(e){return w(t,e)},function(e){return S(t,e)})}function b(t,n,r){n.constructor===t.constructor&&r===l&&n.constructor.resolve===h?m(t,n):void 0===r?A(t,n):e(r)?y(t,n,r):A(t,n)}function w(e,n){if(e===n)S(e,v());else if(t(n)){var r=void 0;try{r=n.then}catch(o){return void S(e,o)}b(e,n,r)}else A(e,n)}function g(t){t._onerror&&t._onerror(t._result),E(t)}function A(t,e){t._state===X&&(t._result=e,t._state=Z,0!==t._subscribers.length&&z(E,t))}function S(t,e){t._state===X&&(t._state=$,t._result=e,z(g,t))}function j(t,e,n,r){var o=t._subscribers,i=o.length;t._onerror=null,o[i]=e,o[i+Z]=n,o[i+$]=r,0===i&&t._state&&z(E,t)}function E(t){var e=t._subscribers,n=t._state;if(0!==e.length){for(var r=void 0,o=void 0,i=t._result,s=0;s<e.length;s+=3)r=e[s],o=e[s+n],r?T(n,r,o,i):o(i);t._subscribers.length=0}}function T(t,n,r,o){var i=e(r),s=void 0,u=void 0,c=!0;if(i){try{s=r(o)}catch(a){c=!1,u=a}if(n===s)return void S(n,d())}else s=o;n._state!==X||(i&&c?w(n,s):c===!1?S(n,u):t===Z?A(n,s):t===$&&S(n,s))}function M(t,e){try{e(function(e){w(t,e)},function(e){S(t,e)})}catch(n){S(t,n)}}function P(){return tt++}function x(t){t[V]=tt++,t._state=void 0,t._result=void 0,t._subscribers=[]}function C(){return new Error("Array Methods must be provided an Array")}function O(t){return new et(this,t).promise}function k(t){var e=this;return new e(L(t)?function(n,r){for(var o=t.length,i=0;i<o;i++)e.resolve(t[i]).then(n,r)}:function(t,e){return e(new TypeError("You must pass an array to race."))})}function F(t){var e=this,n=new e(p);return S(n,t),n}function Y(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}function q(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}function D(){var t=void 0;if("undefined"!=typeof global)t=global;else if("undefined"!=typeof self)t=self;else try{t=Function("return this")()}catch(e){throw new Error("polyfill failed because global object is unavailable in this environment")}var n=t.Promise;if(n){var r=null;try{r=Object.prototype.toString.call(n.resolve())}catch(e){}if("[object Promise]"===r&&!n.cast)return}t.Promise=nt}var K=void 0;K=Array.isArray?Array.isArray:function(t){return"[object Array]"===Object.prototype.toString.call(t)};var L=K,N=0,U=void 0,W=void 0,z=function(t,e){Q[N]=t,Q[N+1]=e,N+=2,2===N&&(W?W(a):R())},B="undefined"!=typeof window?window:void 0,G=B||{},H=G.MutationObserver||G.WebKitMutationObserver,I="undefined"==typeof self&&"undefined"!=typeof process&&"[object process]"==={}.toString.call(process),J="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel,Q=new Array(1e3),R=void 0;R=I?o():H?s():J?u():void 0===B&&"function"==typeof require?f():c();var V=Math.random().toString(36).substring(2),X=void 0,Z=1,$=2,tt=0,et=function(){function t(t,e){this._instanceConstructor=t,this.promise=new t(p),this.promise[V]||x(this.promise),L(e)?(this.length=e.length,this._remaining=e.length,this._result=new Array(this.length),0===this.length?A(this.promise,this._result):(this.length=this.length||0,this._enumerate(e),0===this._remaining&&A(this.promise,this._result))):S(this.promise,C())}return t.prototype._enumerate=function(t){for(var e=0;this._state===X&&e<t.length;e++)this._eachEntry(t[e],e)},t.prototype._eachEntry=function(t,e){var n=this._instanceConstructor,r=n.resolve;if(r===h){var o=void 0,i=void 0,s=!1;try{o=t.then}catch(u){s=!0,i=u}if(o===l&&t._state!==X)this._settledAt(t._state,e,t._result);else if("function"!=typeof o)this._remaining--,this._result[e]=t;else if(n===nt){var c=new n(p);s?S(c,i):b(c,t,o),this._willSettleAt(c,e)}else this._willSettleAt(new n(function(e){return e(t)}),e)}else this._willSettleAt(r(t),e)},t.prototype._settledAt=function(t,e,n){var r=this.promise;r._state===X&&(this._remaining--,t===$?S(r,n):this._result[e]=n),0===this._remaining&&A(r,this._result)},t.prototype._willSettleAt=function(t,e){var n=this;j(t,void 0,function(t){return n._settledAt(Z,e,t)},function(t){return n._settledAt($,e,t)})},t}(),nt=function(){function t(e){this[V]=P(),this._result=this._state=void 0,this._subscribers=[],p!==e&&("function"!=typeof e&&Y(),this instanceof t?M(this,e):q())}return t.prototype["catch"]=function(t){return this.then(null,t)},t.prototype["finally"]=function(t){var n=this,r=n.constructor;return e(t)?n.then(function(e){return r.resolve(t()).then(function(){return e})},function(e){return r.resolve(t()).then(function(){throw e})}):n.then(t,t)},t}();return nt.prototype.then=l,nt.all=O,nt.race=k,nt.resolve=h,nt.reject=F,nt._setScheduler=n,nt._setAsap=r,nt._asap=z,nt.polyfill=D,nt.Promise=nt,nt.polyfill(),nt});;
/*! @drupal/once - v1.0.1 - 2021-06-12 */
var once=function(){"use strict";var n=/[\11\12\14\15\40]+/,e="data-once",t=document;function r(n,t,r){return n[t+"Attribute"](e,r)}function o(e){if("string"!=typeof e)throw new TypeError("once ID must be a string");if(""===e||n.test(e))throw new RangeError("once ID must not be empty or contain spaces");return'[data-once~="'+e+'"]'}function u(n){if(!(n instanceof Element))throw new TypeError("The element must be an instance of Element");return!0}function i(n,e){void 0===e&&(e=t);var r=n;if(null===n)r=[];else{if(!n)throw new TypeError("Selector must not be empty");"string"!=typeof n||e!==t&&!u(e)?n instanceof Element&&(r=[n]):r=e.querySelectorAll(n)}return Array.prototype.slice.call(r)}function c(n,e,t){return e.filter((function(e){var r=u(e)&&e.matches(n);return r&&t&&t(e),r}))}function f(e,t){var o=t.add,u=t.remove,i=[];r(e,"has")&&r(e,"get").trim().split(n).forEach((function(n){i.indexOf(n)<0&&n!==u&&i.push(n)})),o&&i.push(o);var c=i.join(" ");r(e,""===c?"remove":"set",c)}function a(n,e,t){return c(":not("+o(n)+")",i(e,t),(function(e){return f(e,{add:n})}))}return a.remove=function(n,e,t){return c(o(n),i(e,t),(function(e){return f(e,{remove:n})}))},a.filter=function(n,e,t){return c(o(n),i(e,t))},a.find=function(n,e){return i(n?o(n):"[data-once]",e)},a}();

;
/*!
 * jQuery Once v2.2.3 - http://github.com/robloach/jquery-once
 * @license MIT, GPL-2.0
 *   http://opensource.org/licenses/MIT
 *   http://opensource.org/licenses/GPL-2.0
 */
(function(e){"use strict";if(typeof exports==="object"&&typeof exports.nodeName!=="string"){e(require("jquery"))}else if(typeof define==="function"&&define.amd){define(["jquery"],e)}else{e(jQuery)}})(function(t){"use strict";var r=function(e){e=e||"once";if(typeof e!=="string"){throw new TypeError("The jQuery Once id parameter must be a string")}return e};t.fn.once=function(e){var n="jquery-once-"+r(e);return this.filter(function(){return t(this).data(n)!==true}).data(n,true)};t.fn.removeOnce=function(e){return this.findOnce(e).removeData("jquery-once-"+r(e))};t.fn.findOnce=function(e){var n="jquery-once-"+r(e);return this.filter(function(){return t(this).data(n)===true})}});

window.drupalTranslations = {"strings":{"":{"Image":"Bild","Default":"Master","Apply":"Anwenden","Extend":"Erweitern","Edit":"Bearbeiten","Home":"Startseite","Status message":"Statusmeldung","Error message":"Fehlermeldung","Open":"\u00d6ffnen","Close":"Schlie\u00dfen","@action @title configuration options":"@action @title Konfigurationseinstellungen","An AJAX HTTP error occurred.":"Ein AJAX-HTTP-Fehler ist aufgetreten.","HTTP Result Code: !status":"HTTP-R\u00fcckgabe-Code: !status","An AJAX HTTP request terminated abnormally.":"Eine AJAX-Anfrage ist abnormal beendet worden.","Debugging information follows.":"Im Folgenden finden Sie Debugging-Informationen.","Path: !uri":"Pfad: !uri","StatusText: !statusText":"Statustext: !statusText","ResponseText: !responseText":"Antworttext: !responseText","ReadyState: !readyState":"ReadyState: !readyState","CustomMessage: !customMessage":"Benutzerdefinierte Nachricht: !customMessage","Please wait...":"Bitte warten...","The response failed verification so will not be processed.":"Die Verifizierung der Antwort ist fehlgeschlagen, deshalb wird die Verarbeitung nicht fortgef\u00fchrt.","The callback URL is not local and not trusted: !url":"Die Callback-URL ist nicht lokal und nicht vertrauensw\u00fcrdig: !url","Changed":"Ge\u00e4ndert","Quick edit":"Schnell bearbeiten","OK":"OK","Save":"Speichern","Discard changes":"Verwerfen","Saving":"Wird gespeichert","Collapse":"Zusammenklappen","@label":"@label","Horizontal orientation":"Horizontale Ausrichtung","Vertical orientation":"Vertikale Ausrichtung","closed":"geschlossen","opened":"ge\u00f6ffnet","Enabled":"Aktiviert","(active tab)":"(aktiver Reiter)","List additional actions":"Weitere Aktionen auflisten","Show all columns":"Alle Spalten zeigen","Hide lower priority columns":"Niedrig priorisierte Spalten verstecken.","Show table cells that were hidden to make the table fit within a small screen.":"Zeige die Tabellenzellen, die ausgeblendet wurden, um die Tabelle auf kleinen Bildschirmen anzeigen zu k\u00f6nnen.","Select all rows in this table":"Alle Zeilen dieser Tabelle ausw\u00e4hlen","Deselect all rows in this table":"Alle Zeilen dieser Tabelle abw\u00e4hlen","Cancel":"Abbrechen","Warning message":"Warnmeldung","Hide":"Ausblenden","Show":"Anzeigen","Re-order rows by numerical weight instead of dragging.":"Zeilen mittels numerischer Gewichtung ordnen statt mit Drag-and-Drop","Show row weights":"Zeilenreihenfolge anzeigen","Hide row weights":"Zeilenreihenfolge ausblenden","Drag to re-order":"Ziehen, um die Reihenfolge zu \u00e4ndern","You have unsaved changes.":"Es gibt nicht gespeicherte \u00c4nderungen.","Not restricted":"Uneingeschr\u00e4nkt","Restricted to certain pages":"Auf bestimmte Seiten eingeschr\u00e4nkt","The block cannot be placed in this region.":"Der Block kann nicht in dieser Region abgelegt werden.","Show description":"Beschreibung anzeigen","Changes made in this table will not be saved until the form is submitted.":"\u00c4nderungen in dieser Tabelle werden nicht gespeichert, bis dieses Formular abgesendet wurde.","Next":"Weiter","Disabled":"Deaktiviert","new":"neu","Link":"Link","Sunday":"Sonntag","Monday":"Montag","Tuesday":"Dienstag","Wednesday":"Mittwoch","Thursday":"Donnerstag","Friday":"Freitag","Saturday":"Samstag","Add":"Hinzuf\u00fcgen","Continue":"Weiter","Done":"Fertig","Prev":"Vorheriges","Mon":"Mo","Tue":"Di","Wed":"Mi","Thu":"Do","Fri":"Fr","Sat":"Sa","Sun":"So","May":"Mai","Add group":"Gruppe hinzuf\u00fcgen","Today":"Heute","Jan":"Jan","Feb":"Feb","Mar":"M\u00e4r","Apr":"Apr","Jun":"Jun","Jul":"Jul","Aug":"Aug","Sep":"Sep","Oct":"Okt","Nov":"Nov","Dec":"Dez","Su":"So","Mo":"Mo","Tu":"Di","We":"Mi","Th":"Do","Fr":"Fr","Sa":"Sa","Not published":"Nicht ver\u00f6ffentlicht","Loading...":"Wird geladen ...","Select":"Select","1 new comment\u0003@count new comments":"Ein neuer Kommentar\u0003@count neue Kommentare","Unlink":"Link entfernen","Not promoted":"nicht auf der Startseite","mm\/dd\/yy":"mm\/tt\/jj","button":"Schaltfl\u00e4che","Edit Link":"Link bearbeiten","Remove group":"Gruppe entfernen","By @name on @date":"Von @name am @date","By @name":"Von @name","Not in menu":"Nicht im Men\u00fc","Alias: @alias":"Alias: @alias","No alias":"Kein Alias","New revision":"Neue Version","New group":"Neue Gruppe","Lock":"Sperre","This permission is inherited from the authenticated user role.":"Diese Berechtigung wird von der Rolle \u201aAuthentifizierte Benutzer\u2018 ererbt.","No revision":"Keine Version","Requires a title":"Ben\u00f6tigt einen Titel","Hide summary":"Zusammenfassung verbergen","Edit summary":"Zusammenfassung bearbeiten","Don\u0027t display post information":"Beitragsinformationen nicht anzeigen","Unlock":"Entsperren","The selected file %filename cannot be uploaded. Only files with the following extensions are allowed: %extensions.":"Die ausgew\u00e4hlte Datei %filename konnte nicht hochgeladen werden. Nur Dateien mit den folgenden Erweiterungen sind zul\u00e4ssig: %extensions.","Apply (all displays)":"Anwenden (alle Anzeigen)","Apply (this display)":"Anwenden (diese Anzeige)","Revert to default":"Auf Standardwert zur\u00fccksetzen","Needs to be updated":"Aktualisierung erforderlich","Does not need to be updated":"Keine Aktualisierung erforderlich","Flag other translations as outdated":"Andere \u00dcbersetzungen als veraltet markieren","Do not flag other translations as outdated":"Andere \u00dcbersetzungen als nicht veraltet markieren","No styles configured":"Keine Stile konfiguriert","@count styles configured":"@count Stile konfiguriert","Uploads disabled":"Uploads deaktiviert","Uploads enabled, max size: @size @dimensions":"Hochladen erlaubt, maximale Gr\u00f6\u00dfe: @size @dimensions","Hide group names":"Gruppennamen verbergen","Show group names":"Gruppennamen anzeigen","Press the down arrow key to create a new row.":"Pfeil-nach-unten-Taste benutzen um eine neue Zeile zu erzeugen.","@name @type.":"@name @type.","Press the down arrow key to activate.":"Zum Aktivieren Pfeil-nach-Unten-Taste benutzen.","Press the down arrow key to create a new button group in a new row.":"Pfeil-nach-unten-Taste benutzen, um eine neue Schaltfl\u00e4chengruppe in einer neuen Zeile zu erzeugen.","This is the last group. Move the button forward to create a new group.":"Dies ist die letzte Gruppe. Pfeil-nach-Rechts-Taste benutzen um eine neue Gruppe zu erzeugen.","The \u0022@name\u0022 button is currently enabled.":"Die Schaltfl\u00e4che \u201e@name\u201c ist momentan aktiviert.","Use the keyboard arrow keys to change the position of this button.":"Benutzen Sie die Pfeiltasten um die Schaltfl\u00e4che zu verschieben.","The \u0022@name\u0022 button is currently disabled.":"Die Schaltfl\u00e4che \u201e@name\u201c ist momentan deaktiviert.","Use the down arrow key to move this button into the active toolbar.":"Benutzen Sie die \u201ePfeil nach unten\u201c -Taste um die Schaltfl\u00e4che in die aktive Werkzeugleiste zu verschieben.","This @name is currently enabled.":"Dieser @name ist momentan aktiv.","Use the keyboard arrow keys to change the position of this separator.":"Pfeil-Tasten benutzen um die Position dieses Seperators zu \u00e4ndern.","This @name is currently disabled.":"Dieser @name ist momentan inaktiv.","Use the down arrow key to move this separator into the active toolbar.":"Benutzen Sie die \u201ePfeil nach unten\u201c -Taste um den Separator in die aktive Werkzeugleiste zu verschieben.","You may add multiple separators to each button group.":"Sie k\u00f6nnen mehrere Separatoren zu jeder Schaltfl\u00e4chengruppe hinzuf\u00fcgen.","Please provide a name for the button group.":"Geben Sie einen Namen f\u00fcr die Schaltfl\u00e4chengruppe ein.","Button group name":"Schaltfl\u00e4chengruppenname","Editing the name of the new button group in a dialog.":"Namen der Button-Gruppe in einem Dialogfenster bearbeiten.","Editing the name of the \u0022@groupName\u0022 button group in a dialog.":"Namen der Button-Gruppe \u0022@groupName\u0022 in einem Dialogfenster bearbeiten.","Add a CKEditor button group to the end of this row.":"Eine CKEditor-Button-Gruppe am Ende dieser Zeile hinzuf\u00fcgen.","Change text format?":"Textformat \u00e4ndern?","Rich Text Editor, !label field":"Rich-Text-Editor, !label Feld","Content limited to @limit characters, remaining: \u003Cstrong\u003E@remaining\u003C\/strong\u003E":"Inhalt limitiert auf @limit Zeichen, verbleibend: \u003Cstrong\u003E@remaining\u003C\/strong\u003E","Resume":"Start","Pause":"Pause","Priority":"Priorit\u00e4t","Cropping applied.":"Ausschnitt gew\u00e4hlt","Choose city":"Standort w\u00e4hlen","Choose federal state":"Standort w\u00e4hlen","Select federal state":"Standort w\u00e4hlen","Select project":"Projekt w\u00e4hlen","Main Menu":"Hauptmen\u00fc","All pages with exceptions":"Alle Seiten mit Ausnahmen","Excepted: @roles":"Ausgenommen: @roles","Not customizable":"Nicht anpassbar","On by default with opt out":"Standardm\u00e4\u00dfig aktiv, mit Opt-out","Off by default with opt in":"Standardm\u00e4\u00dfig deaktiviert, mit Opt-out","Mailto links":"Mailto-Links","Outbound links":"Ausgehende Links","Downloads":"Downloads","Colorbox":"Colorbox","Not tracked":"Nicht getrackt","@items enabled":"@items aktiviert","Site search":"Website-Suche","A single domain":"Eine einzelne Domain","One domain with multiple subdomains":"Eine Domain mit mehreren Sub-Domains","Universal web tracking opt-out":"Universal web tracking opt-out","No privacy":"Keine Privatsph\u00e4re","There are no associated events":"Es gibt zur Zeit keine Veranstaltungen an diesem Standort","There are no associated consultants":"Es gibt zur Zeit keine Beratungsangebote an diesem Standort."},"Long month name":{"January":"Januar","February":"Februar","March":"M\u00e4rz","April":"April","May":"Mai","July":"Juli","August":"August","September":"September","October":"Oktober","November":"November","December":"Dezember","June":"Juni"}},"pluralFormula":{"1":0,"default":1}};;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
(function () {
  var settingsElement = document.querySelector('head > script[type="application/json"][data-drupal-selector="drupal-settings-json"], body > script[type="application/json"][data-drupal-selector="drupal-settings-json"]');
  window.drupalSettings = {};
  if (settingsElement !== null) {
    window.drupalSettings = JSON.parse(settingsElement.textContent);
  }
})();;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
window.Drupal = {
  behaviors: {},
  locale: {}
};
(function (Drupal, drupalSettings, drupalTranslations, console, Proxy, Reflect) {
  Drupal.throwError = function (error) {
    setTimeout(function () {
      throw error;
    }, 0);
  };
  Drupal.attachBehaviors = function (context, settings) {
    context = context || document;
    settings = settings || drupalSettings;
    var behaviors = Drupal.behaviors;
    Object.keys(behaviors || {}).forEach(function (i) {
      if (typeof behaviors[i].attach === 'function') {
        try {
          behaviors[i].attach(context, settings);
        } catch (e) {
          Drupal.throwError(e);
        }
      }
    });
  };
  Drupal.detachBehaviors = function (context, settings, trigger) {
    context = context || document;
    settings = settings || drupalSettings;
    trigger = trigger || 'unload';
    var behaviors = Drupal.behaviors;
    Object.keys(behaviors || {}).forEach(function (i) {
      if (typeof behaviors[i].detach === 'function') {
        try {
          behaviors[i].detach(context, settings, trigger);
        } catch (e) {
          Drupal.throwError(e);
        }
      }
    });
  };
  Drupal.checkPlain = function (str) {
    str = str.toString().replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
    return str;
  };
  Drupal.formatString = function (str, args) {
    var processedArgs = {};
    Object.keys(args || {}).forEach(function (key) {
      switch (key.charAt(0)) {
        case '@':
          processedArgs[key] = Drupal.checkPlain(args[key]);
          break;
        case '!':
          processedArgs[key] = args[key];
          break;
        default:
          processedArgs[key] = Drupal.theme('placeholder', args[key]);
          break;
      }
    });
    return Drupal.stringReplace(str, processedArgs, null);
  };
  Drupal.stringReplace = function (str, args, keys) {
    if (str.length === 0) {
      return str;
    }
    if (!Array.isArray(keys)) {
      keys = Object.keys(args || {});
      keys.sort(function (a, b) {
        return a.length - b.length;
      });
    }
    if (keys.length === 0) {
      return str;
    }
    var key = keys.pop();
    var fragments = str.split(key);
    if (keys.length) {
      for (var i = 0; i < fragments.length; i++) {
        fragments[i] = Drupal.stringReplace(fragments[i], args, keys.slice(0));
      }
    }
    return fragments.join(args[key]);
  };
  Drupal.t = function (str, args, options) {
    options = options || {};
    options.context = options.context || '';
    if (typeof drupalTranslations !== 'undefined' && drupalTranslations.strings && drupalTranslations.strings[options.context] && drupalTranslations.strings[options.context][str]) {
      str = drupalTranslations.strings[options.context][str];
    }
    if (args) {
      str = Drupal.formatString(str, args);
    }
    return str;
  };
  Drupal.url = function (path) {
    return drupalSettings.path.baseUrl + drupalSettings.path.pathPrefix + path;
  };
  Drupal.url.toAbsolute = function (url) {
    var urlParsingNode = document.createElement('a');
    try {
      url = decodeURIComponent(url);
    } catch (e) {}
    urlParsingNode.setAttribute('href', url);
    return urlParsingNode.cloneNode(false).href;
  };
  Drupal.url.isLocal = function (url) {
    var absoluteUrl = Drupal.url.toAbsolute(url);
    var protocol = window.location.protocol;
    if (protocol === 'http:' && absoluteUrl.indexOf('https:') === 0) {
      protocol = 'https:';
    }
    var baseUrl = "".concat(protocol, "//").concat(window.location.host).concat(drupalSettings.path.baseUrl.slice(0, -1));
    try {
      absoluteUrl = decodeURIComponent(absoluteUrl);
    } catch (e) {}
    try {
      baseUrl = decodeURIComponent(baseUrl);
    } catch (e) {}
    return absoluteUrl === baseUrl || absoluteUrl.indexOf("".concat(baseUrl, "/")) === 0;
  };
  Drupal.formatPlural = function (count, singular, plural, args, options) {
    args = args || {};
    args['@count'] = count;
    var pluralDelimiter = drupalSettings.pluralDelimiter;
    var translations = Drupal.t(singular + pluralDelimiter + plural, args, options).split(pluralDelimiter);
    var index = 0;
    if (typeof drupalTranslations !== 'undefined' && drupalTranslations.pluralFormula) {
      index = count in drupalTranslations.pluralFormula ? drupalTranslations.pluralFormula[count] : drupalTranslations.pluralFormula.default;
    } else if (args['@count'] !== 1) {
      index = 1;
    }
    return translations[index];
  };
  Drupal.encodePath = function (item) {
    return window.encodeURIComponent(item).replace(/%2F/g, '/');
  };
  Drupal.deprecationError = function (_ref) {
    var message = _ref.message;
    if (drupalSettings.suppressDeprecationErrors === false && typeof console !== 'undefined' && console.warn) {
      console.warn("[Deprecation] ".concat(message));
    }
  };
  Drupal.deprecatedProperty = function (_ref2) {
    var target = _ref2.target,
      deprecatedProperty = _ref2.deprecatedProperty,
      message = _ref2.message;
    if (!Proxy || !Reflect) {
      return target;
    }
    return new Proxy(target, {
      get: function get(target, key) {
        if (key === deprecatedProperty) {
          Drupal.deprecationError({
            message: message
          });
        }
        for (var _len = arguments.length, rest = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
          rest[_key - 2] = arguments[_key];
        }
        return Reflect.get.apply(Reflect, [target, key].concat(rest));
      }
    });
  };
  Drupal.theme = function (func) {
    if (func in Drupal.theme) {
      var _Drupal$theme;
      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }
      return (_Drupal$theme = Drupal.theme)[func].apply(_Drupal$theme, args);
    }
  };
  Drupal.theme.placeholder = function (str) {
    return "<em class=\"placeholder\">".concat(Drupal.checkPlain(str), "</em>");
  };
})(Drupal, window.drupalSettings, window.drupalTranslations, window.console, window.Proxy, window.Reflect);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
if (window.jQuery) {
  jQuery.noConflict();
}
document.documentElement.className += ' js';
(function (Drupal, drupalSettings) {
  var domReady = function domReady(callback) {
    var listener = function listener() {
      callback();
      document.removeEventListener('DOMContentLoaded', listener);
    };
    if (document.readyState !== 'loading') {
      setTimeout(callback, 0);
    } else {
      document.addEventListener('DOMContentLoaded', listener);
    }
  };
  domReady(function () {
    Drupal.attachBehaviors(document, drupalSettings);
  });
})(Drupal, window.drupalSettings);;
/*!
* tabbable 5.3.3
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):(e="undefined"!=typeof globalThis?globalThis:e||self,function(){var n=e.tabbable,o=e.tabbable={};t(o),o.noConflict=function(){return e.tabbable=n,o}}())}(this,(function(e){"use strict";var t=["input","select","textarea","a[href]","button","[tabindex]:not(slot)","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])',"details>summary:first-of-type","details"],n=t.join(","),o="undefined"==typeof Element,r=o?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,i=!o&&Element.prototype.getRootNode?function(e){return e.getRootNode()}:function(e){return e.ownerDocument},a=function(e,t,o){var i=Array.prototype.slice.apply(e.querySelectorAll(n));return t&&r.call(e,n)&&i.unshift(e),i=i.filter(o)},l=function e(t,o,i){for(var a=[],l=Array.from(t);l.length;){var u=l.shift();if("SLOT"===u.tagName){var c=u.assignedElements(),d=e(c.length?c:u.children,!0,i);i.flatten?a.push.apply(a,d):a.push({scope:u,candidates:d})}else{r.call(u,n)&&i.filter(u)&&(o||!t.includes(u))&&a.push(u);var f=u.shadowRoot||"function"==typeof i.getShadowRoot&&i.getShadowRoot(u),s=!i.shadowRootFilter||i.shadowRootFilter(u);if(f&&s){var p=e(!0===f?u.children:f.children,!0,i);i.flatten?a.push.apply(a,p):a.push({scope:u,candidates:p})}else l.unshift.apply(l,u.children)}}return a},u=function(e,t){return e.tabIndex<0&&(t||/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName)||e.isContentEditable)&&isNaN(parseInt(e.getAttribute("tabindex"),10))?0:e.tabIndex},c=function(e,t){return e.tabIndex===t.tabIndex?e.documentOrder-t.documentOrder:e.tabIndex-t.tabIndex},d=function(e){return"INPUT"===e.tagName},f=function(e){return function(e){return d(e)&&"radio"===e.type}(e)&&!function(e){if(!e.name)return!0;var t,n=e.form||i(e),o=function(e){return n.querySelectorAll('input[type="radio"][name="'+e+'"]')};if("undefined"!=typeof window&&void 0!==window.CSS&&"function"==typeof window.CSS.escape)t=o(window.CSS.escape(e.name));else try{t=o(e.name)}catch(e){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",e.message),!1}var r=function(e,t){for(var n=0;n<e.length;n++)if(e[n].checked&&e[n].form===t)return e[n]}(t,e.form);return!r||r===e}(e)},s=function(e){var t=e.getBoundingClientRect(),n=t.width,o=t.height;return 0===n&&0===o},p=function(e,t){return!(t.disabled||function(e){return d(e)&&"hidden"===e.type}(t)||function(e,t){var n=t.displayCheck,o=t.getShadowRoot;if("hidden"===getComputedStyle(e).visibility)return!0;var a=r.call(e,"details>summary:first-of-type")?e.parentElement:e;if(r.call(a,"details:not([open]) *"))return!0;var l=i(e).host,u=(null==l?void 0:l.ownerDocument.contains(l))||e.ownerDocument.contains(e);if(n&&"full"!==n){if("non-zero-area"===n)return s(e)}else{if("function"==typeof o){for(var c=e;e;){var d=e.parentElement,f=i(e);if(d&&!d.shadowRoot&&!0===o(d))return s(e);e=e.assignedSlot?e.assignedSlot:d||f===e.ownerDocument?d:f.host}e=c}if(u)return!e.getClientRects().length}return!1}(t,e)||function(e){return"DETAILS"===e.tagName&&Array.prototype.slice.apply(e.children).some((function(e){return"SUMMARY"===e.tagName}))}(t)||function(e){if(/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName))for(var t=e.parentElement;t;){if("FIELDSET"===t.tagName&&t.disabled){for(var n=0;n<t.children.length;n++){var o=t.children.item(n);if("LEGEND"===o.tagName)return!!r.call(t,"fieldset[disabled] *")||!o.contains(e)}return!0}t=t.parentElement}return!1}(t))},h=function(e,t){return!(f(t)||u(t)<0||!p(e,t))},b=function(e){var t=parseInt(e.getAttribute("tabindex"),10);return!!(isNaN(t)||t>=0)},m=t.concat("iframe").join(",");e.focusable=function(e,t){return(t=t||{}).getShadowRoot?l([e],t.includeContainer,{filter:p.bind(null,t),flatten:!0,getShadowRoot:t.getShadowRoot}):a(e,t.includeContainer,p.bind(null,t))},e.isFocusable=function(e,t){if(t=t||{},!e)throw new Error("No node provided");return!1!==r.call(e,m)&&p(t,e)},e.isTabbable=function(e,t){if(t=t||{},!e)throw new Error("No node provided");return!1!==r.call(e,n)&&h(t,e)},e.tabbable=function(e,t){return function e(t){var n=[],o=[];return t.forEach((function(t,r){var i=!!t.scope,a=i?t.scope:t,l=u(a,i),c=i?e(t.candidates):a;0===l?i?n.push.apply(n,c):n.push(a):o.push({documentOrder:r,tabIndex:l,item:t,isScope:i,content:c})})),o.sort(c).reduce((function(e,t){return t.isScope?e.push.apply(e,t.content):e.push(t.content),e}),[]).concat(n)}((t=t||{}).getShadowRoot?l([e],t.includeContainer,{filter:h.bind(null,t),flatten:!1,getShadowRoot:t.getShadowRoot,shadowRootFilter:b}):a(e,t.includeContainer,h.bind(null,t)))},Object.defineProperty(e,"__esModule",{value:!0})}));

;
/**
 * @file
 * The Lazy-load behavior.
 */

(function (Drupal) {

  'use strict';

  Drupal.behaviors.lazy = {
    attach: function (context, settings) {
      var utils = {
        extend: function (obj, src) {
          Object.keys(src).forEach(function (key) {
            obj[key] = src[key];
          });
          return obj;
        },
        once: function (selector, context) {
          return (context || document).querySelector(selector);
        },
        loadScript: function (url) {
          if (document.querySelectorAll('script[src="' + url + '"]').length == 0) {
            var script = document.createElement('script'),
              scripts = document.getElementsByTagName('script')[0];
            script.src = url;
            script.async = true;
            scripts.parentNode.insertBefore(script, scripts);
          }
        }
      };

      if (utils.once('body', context)) {
        var lazysizes = settings.lazy.lazysizes || {};

        if (!settings.lazy.preferNative) {
          // 1. Lazysizes configuration.
          window.lazySizesConfig = window.lazySizesConfig || {};
          window.lazySizesConfig = utils.extend(window.lazySizesConfig, lazysizes);
          // 2. Load all selected lazysizes plugins.
          if (!Object.entries) {
            Object.entries = function (obj) {
              var ownProps = Object.keys(obj),
                i = ownProps.length,
                resArray = new Array(i);
              while (i--) {
                resArray[i] = [ownProps[i], obj[ownProps[i]]];
              }
              return resArray;
            };
          }
          var min = settings.lazy.minified ? '.min' : '';
          Object.entries(lazysizes.plugins).forEach(function (path) {
            utils.loadScript(settings.lazy.libraryPath + '/plugins/' + path[1] + min + '.js');
          });
          // 3. Load the lazysizes library.
          utils.loadScript(settings.lazy.libraryPath + '/lazysizes' + min + '.js');
        }
      }
    }
  };

})(Drupal);
;
/**
 * @file
 * Attaches several event listener to a web page.
 */

(function ($, drupalSettings) {

  'use strict';

  $(document).ready(function () {
    defaultBind();

    // Colorbox: This event triggers when the transition has completed and the
    // newly loaded content has been revealed.
    if (drupalSettings.matomo && drupalSettings.matomo.trackColorbox) {
      $(document).bind('cbox_complete', function () {
        var href = $.colorbox.element().attr('href');
        if (href) {
          _paq.push(['setCustomUrl', href]);
          if (drupalSettings.matomo.disableCookies) {
            _paq.push(['disableCookies']);
          }
          _paq.push(['trackPageView']);
        }
      });
    }

  });

  /**
   * Default event binding.
   *
   * Attach mousedown, keyup, touchstart events to document only and catch
   * clicks on all elements.
   */
  function defaultBind() {
    $(document.body).bind('mousedown keyup touchstart', function (event) {

      // Catch the closest surrounding link of a clicked element.
      $(event.target).closest('a,area').each(function () {

        if (drupalSettings.matomo.trackMailto && $(this).is("a[href^='mailto:'],area[href^='mailto:']")) {
          // Mailto link clicked.
          _paq.push(['trackEvent', 'Mails', 'Click', this.href.substring(7)]);
        }

      });
    });
  }

})(jQuery, drupalSettings);
;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
(function ($, once) {
  var deprecatedMessageSuffix = "is deprecated in Drupal 9.3.0 and will be removed in Drupal 10.0.0. Use the core/once library instead. See https://www.drupal.org/node/3158256";
  var originalJQOnce = $.fn.once;
  var originalJQRemoveOnce = $.fn.removeOnce;
  $.fn.once = function jQueryOnce(id) {
    Drupal.deprecationError({
      message: "jQuery.once() ".concat(deprecatedMessageSuffix)
    });
    return originalJQOnce.apply(this, [id]);
  };
  $.fn.removeOnce = function jQueryRemoveOnce(id) {
    Drupal.deprecationError({
      message: "jQuery.removeOnce() ".concat(deprecatedMessageSuffix)
    });
    return originalJQRemoveOnce.apply(this, [id]);
  };
  var drupalOnce = once;
  function augmentedOnce(id, selector, context) {
    originalJQOnce.apply($(selector, context), [id]);
    return drupalOnce(id, selector, context);
  }
  function remove(id, selector, context) {
    originalJQRemoveOnce.apply($(selector, context), [id]);
    return drupalOnce.remove(id, selector, context);
  }
  window.once = Object.assign(augmentedOnce, drupalOnce, {
    remove: remove
  });
})(jQuery, once);;
(function ($, Drupal) {

  'use strict'

  Drupal.behaviors.simplePopupBlocks = {
    attach: function (context, settings) {
      // Global variables
      var popup_settings = drupalSettings.simple_popup_blocks.settings,
        _html = document.documentElement, windowWidth = $(window).width();

      $.each(popup_settings, function (index, values) {

        // No popup when the window width is less than the trigger width.
      if (windowWidth < values.trigger_width) {return null;};

        // Declaring variable inside foreach - so it will not global.
        var modal_class = '',
          block_id = values.identifier,
          visit_counts_arr = values.visit_counts.split(','),
          allow_cookie = true,
          read_cookie = '',
          cookie_val = 1,
          cookie_days = values.cookie_expiry || 100,
          match = 0,
          css_identity = '',
          spb_popup_id = '',
          modal_close_class = '',
          modal_minimize_class = '',
          modal_minimized_class = '',
          layout_class = '',
          class_exists = false,
          delays = '',
          browser_close_trigger = true,
          use_time_frequency = values.use_time_frequency,
          time_frequency = values.time_frequency,
          time_frequency_cookie = 0,
          next_popup = 0,
          current_timestamp = 0,
          show_minimized_button = values.show_minimized_button,
          show_model = true
        // Always show popup, so prevent from creating cookie
        if (visit_counts_arr.length == 1 && visit_counts_arr[0] == 0 && use_time_frequency == 0) {
          allow_cookie = false
        }
        // Check to see if the block exists in the current page.
        var element = document.getElementById(block_id);
        if (typeof(element) != 'undefined' && element != null) {
        // Creating cookie
        if (allow_cookie == true) {
        if (use_time_frequency == 0) {
          read_cookie = readCookie('spb_' + block_id)
          if (read_cookie) {
            cookie_val = + read_cookie + 1
            createCookie('spb_' + block_id, cookie_val, 100)
          }
          else {
            createCookie('spb_' + block_id, cookie_val, 100)
          }
          // Match cookie
          cookie_val = cookie_val.toString()
          match = $.inArray(cookie_val, visit_counts_arr)

          if (match === -1) {
            show_model = false
          }
          }
          else {
          time_frequency_cookie = readCookie('spb_time' + block_id)
          current_timestamp = Math.floor(Date.now() / 1000)
          next_popup = current_timestamp + parseInt(time_frequency, 10)

          if (time_frequency_cookie) {
            // If current_timestamp is greater than cookie time show the popup.
            if (current_timestamp >= time_frequency_cookie) {
              match = 1
            }
            // This should allow the time frequency to be adjusted down after
            // the cookie has been set.
            else if (next_popup <= time_frequency_cookie) {
              match = 1
            }
            else {
              match = -1
              show_model = false
            }

            // Create new cookie for popup.
            if (match === 1) {
              createCookie('spb_time' + block_id, next_popup, 100)
            }
          }
          else {
            createCookie('spb_time' + block_id, next_popup, 100)
          }
          }
        }

        }
        // Set css selector
        css_identity = '.'
        if (values.css_selector == 1) {
          css_identity = '#'
        }

        // Assign dynamic css classes
        spb_popup_id = 'spb-' + block_id
        modal_class = block_id + '-modal'
        modal_close_class = block_id + '-modal-close'
        modal_minimize_class = block_id + '-modal-minimize'
        modal_minimized_class = block_id + '-modal-minimized'
        layout_class = '.' + modal_class + ' .spb-popup-main-wrapper'
        // Wrap arround elements
		$(css_identity + block_id).once().
          wrap($('<div class="' + modal_class + '"></div>'))
        // Hide the popup initially
        $('.' + modal_class).once().hide()

        // Wrap remaining elements
        if ($(css_identity + block_id).closest('.spb-popup-main-wrapper').length) {
          return;
        }
        $(css_identity + block_id).
          wrap($('<div class="spb-popup-main-wrapper"></div>'))
        $('.' + modal_class).
          wrap('<div id="' + spb_popup_id +
            '" class="simple-popup-blocks-global"></div>')
        $(css_identity + block_id).
          before($('<div class="spb-controls"></div>'))

        // Skip code for non popup pages.
        class_exists = $('#' + spb_popup_id).
          hasClass('simple-popup-blocks-global')
        if (!class_exists) {
          return true
        }
        // Minimize button wrap
        if (values.minimize === "1") {
          $("#"+spb_popup_id + " .spb-controls").
            prepend($('<span class="' + modal_minimize_class +
              ' spb_minimize">-</span>'))
          $('.' + modal_class).
            before($('<span class="' + modal_minimized_class +
              ' spb_minimized"></span>'))
        }
        // Close button wrap
        if (values.close == 1) {
          $("#"+spb_popup_id + " .spb-controls").
            prepend($('<span class="' + modal_close_class +
              ' spb_close">&times;</span>'))
        }
        // Overlay
        if (values.overlay == 1) {
          $('.' + modal_class).addClass('spb_overlay')
        }
        // Inject layout class.
        switch (values.layout) {
          // Top left.
          case '0':
            $(layout_class).addClass('spb_top_left')
            $(layout_class).css({
              'width': values.width,
            })
            break
          // Top right.
          case '1':
            $(layout_class).addClass('spb_top_right')
            $(layout_class).css({
              'width': values.width,
            })
            break
          // Bottom left.
          case '2':
            $(layout_class).addClass('spb_bottom_left')
            $(layout_class).css({
              'width': values.width,
            })
            break
          // Bottom right.
          case '3':
            $(layout_class).addClass('spb_bottom_right')
            $(layout_class).css({
              'width': values.width,
            })
            break
          // Center.
          case '4':
            $(layout_class).addClass('spb_center')
            $(layout_class).css({
              'width': values.width,
			  'margin-left': -values.width / 2
            })
            break
          // Top Center.
          case '5':
            $(layout_class).addClass('spb_top_center')
			  $(layout_class).css({
			  'width': values.width,
			  })
            break
          // Top bar.
          case '6':
            $(layout_class).addClass('spb_top_bar')
            $(layout_class).css({})
            break
          // Right bar.
          case '7':
            $(layout_class).addClass('spb_bottom_bar')
            $(layout_class).css({})
            break
          // Bottom bar.
          case '8':
            $(layout_class).addClass('spb_left_bar')
            $(layout_class).css({
              'width': values.width,
            })
            break
          // Right bar.
          case '9':
            $(layout_class).addClass('spb_right_bar')
            $(layout_class).css({
              'width': values.width,
            })
            break
        }
      if (show_model === true) {
        // Automatic trigger with delay
        if (values.trigger_method == 0 && values.delay > 0) {
          delays = values.delay * 1000
          $('.' + modal_class).delay(delays).fadeIn('slow')
            if (values.overlay == 1) {
              setTimeout(stopTheScroll, delays)
            }
        }
        // Automatic trigger without delay
        else if (values.trigger_method == 0) {
            $('.' + modal_class).show()
            $(css_identity + block_id).show()
            if (values.overlay == 1) {
              stopTheScroll()
            }
        }
        // Manual trigger
        else if (values.trigger_method == 1) {
          $(document).on('click', values.trigger_selector, function (e) {
            $('.' + modal_class).show()
            $(css_identity + block_id).show()
            if (values.overlay == 1) {
              stopTheScroll()
            }
            return false;
          })
        }
        // Browser close trigger
        else if (values.trigger_method == 2) {
          $(_html).mouseleave(function (e) {
            // Trigger only when mouse leave on top view port
            if (e.clientY > 20) { return }
            // Trigger only once per page
            if (!browser_close_trigger) { return }
            browser_close_trigger = false
            $('.' + modal_class).show()
            $(css_identity + block_id).show()
            if (values.overlay == 1) {
              stopTheScroll()
            }
          })
        }
        }

        // Trigger for close button click
        $('.' + modal_close_class).click(function () {
          $('.' + modal_class).hide()
          startTheScroll()
        })
        // Trigger for minimize button click
        $('.' + modal_minimize_class).click(function () {
          $('.' + modal_class).hide()
          startTheScroll()
          $('.' + modal_minimized_class).show()
        })
        // Trigger for minimized button click
        $('.' + modal_minimized_class).click(function () {
          $('.' + modal_class).show()
          $(css_identity + block_id).show()
          if (values.overlay == 1) {
            stopTheScroll()
          }

        // Hide the minimized button.
        if (show_minimized_button == 0) {
          $('.' + modal_minimized_class).hide()
        }

        })
        // Trigger for ESC button click
        if (values.enable_escape == 1) {
          $(document).keyup(function (e) {
            if (e.keyCode == 27) { // Escape key maps to keycode `27`.
              $('.' + modal_class).hide()
              startTheScroll()
              $('.' + modal_minimized_class).show()
            }
          })
        }

      // Hide the minimized button.
      if (show_minimized_button == 0) {
        $('.' + modal_minimized_class).hide()
      }

      }) // Foreach end.
    }
  } // document.ready end.

  // Remove the scrolling while overlay active
  function stopTheScroll () {
    $('body').css({
      'overflow': 'hidden',
    });

    $('input:text').focus();
  }

  // Enable the scrolling while overlay inactive
  function startTheScroll () {
    $('body').css({
      'overflow': '',
    })
  }

  // Creating cookie
  function createCookie (name, value, days) {
    if (days > 0) {
      var date = new Date()
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000))
      var expires = '; expires=' + date.toGMTString()
    }
    else {
      var expires = ''
    }
    document.cookie = name + '=' + value + expires + '; path=/'
  }

  // Reading cookie
  function readCookie (name) {
    var nameEQ = name + '='
    var ca = document.cookie.split(';')
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i]
      while (c.charAt(0) == ' ') {
        c = c.substring(1, c.length)
      }
      if (c.indexOf(nameEQ) == 0) {
        return c.substring(nameEQ.length, c.length)
      }
    }
    return null
  }

})(jQuery, Drupal)
;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
(function ($, Drupal) {
  Drupal.theme.progressBar = function (id) {
    return "<div id=\"".concat(id, "\" class=\"progress\" aria-live=\"polite\">") + '<div class="progress__label">&nbsp;</div>' + '<div class="progress__track"><div class="progress__bar"></div></div>' + '<div class="progress__percentage"></div>' + '<div class="progress__description">&nbsp;</div>' + '</div>';
  };
  Drupal.ProgressBar = function (id, updateCallback, method, errorCallback) {
    this.id = id;
    this.method = method || 'GET';
    this.updateCallback = updateCallback;
    this.errorCallback = errorCallback;
    this.element = $(Drupal.theme('progressBar', id));
  };
  $.extend(Drupal.ProgressBar.prototype, {
    setProgress: function setProgress(percentage, message, label) {
      if (percentage >= 0 && percentage <= 100) {
        $(this.element).find('div.progress__bar').css('width', "".concat(percentage, "%"));
        $(this.element).find('div.progress__percentage').html("".concat(percentage, "%"));
      }
      $('div.progress__description', this.element).html(message);
      $('div.progress__label', this.element).html(label);
      if (this.updateCallback) {
        this.updateCallback(percentage, message, this);
      }
    },
    startMonitoring: function startMonitoring(uri, delay) {
      this.delay = delay;
      this.uri = uri;
      this.sendPing();
    },
    stopMonitoring: function stopMonitoring() {
      clearTimeout(this.timer);
      this.uri = null;
    },
    sendPing: function sendPing() {
      if (this.timer) {
        clearTimeout(this.timer);
      }
      if (this.uri) {
        var pb = this;
        var uri = this.uri;
        if (uri.indexOf('?') === -1) {
          uri += '?';
        } else {
          uri += '&';
        }
        uri += '_format=json';
        $.ajax({
          type: this.method,
          url: uri,
          data: '',
          dataType: 'json',
          success: function success(progress) {
            if (progress.status === 0) {
              pb.displayError(progress.data);
              return;
            }
            pb.setProgress(progress.percentage, progress.message, progress.label);
            pb.timer = setTimeout(function () {
              pb.sendPing();
            }, pb.delay);
          },
          error: function error(xmlhttp) {
            var e = new Drupal.AjaxError(xmlhttp, pb.uri);
            pb.displayError("<pre>".concat(e.message, "</pre>"));
          }
        });
      }
    },
    displayError: function displayError(string) {
      var error = $('<div class="messages messages--error"></div>').html(string);
      $(this.element).before(error).hide();
      if (this.errorCallback) {
        this.errorCallback(this);
      }
    }
  });
})(jQuery, Drupal);;
loadjs=function(){var h=function(){},c={},u={},f={};function o(e,n){if(e){var r=f[e];if(u[e]=n,r)for(;r.length;)r[0](e,n),r.splice(0,1)}}function l(e,n){e.call&&(e={success:e}),n.length?(e.error||h)(n):(e.success||h)(e)}function d(r,t,s,i){var c,o,e=document,n=s.async,u=(s.numRetries||0)+1,f=s.before||h,l=r.replace(/[\?|#].*$/,""),a=r.replace(/^(css|img)!/,"");i=i||0,/(^css!|\.css$)/.test(l)?((o=e.createElement("link")).rel="stylesheet",o.href=a,(c="hideFocus"in o)&&o.relList&&(c=0,o.rel="preload",o.as="style")):/(^img!|\.(png|gif|jpg|svg|webp)$)/.test(l)?(o=e.createElement("img")).src=a:((o=e.createElement("script")).src=r,o.async=void 0===n||n),!(o.onload=o.onerror=o.onbeforeload=function(e){var n=e.type[0];if(c)try{o.sheet.cssText.length||(n="e")}catch(e){18!=e.code&&(n="e")}if("e"==n){if((i+=1)<u)return d(r,t,s,i)}else if("preload"==o.rel&&"style"==o.as)return o.rel="stylesheet";t(r,n,e.defaultPrevented)})!==f(r,o)&&e.head.appendChild(o)}function r(e,n,r){var t,s;if(n&&n.trim&&(t=n),s=(t?r:n)||{},t){if(t in c)throw"LoadJS";c[t]=!0}function i(n,r){!function(e,t,n){var r,s,i=(e=e.push?e:[e]).length,c=i,o=[];for(r=function(e,n,r){if("e"==n&&o.push(e),"b"==n){if(!r)return;o.push(e)}--i||t(o)},s=0;s<c;s++)d(e[s],r,n)}(e,function(e){l(s,e),n&&l({success:n,error:r},e),o(t,e)},s)}if(s.returnPromise)return new Promise(i);i()}return r.ready=function(e,n){return function(e,r){e=e.push?e:[e];var n,t,s,i=[],c=e.length,o=c;for(n=function(e,n){n.length&&i.push(e),--o||r(i)};c--;)t=e[c],(s=u[t])?n(t,s):(f[t]=f[t]||[]).push(n)}(e,function(e){l(n,e)}),r},r.done=function(e){o(e,[])},r.reset=function(){c={},u={},f={}},r.isDefined=function(e){return e in c},r}();;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
(function (Drupal) {
  Drupal.behaviors.responsiveImageAJAX = {
    attach: function attach() {
      if (window.picturefill) {
        window.picturefill();
      }
    }
  };
})(Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
(function ($, window, Drupal, drupalSettings, loadjs, _ref) {
  var isFocusable = _ref.isFocusable,
    tabbable = _ref.tabbable;
  Drupal.behaviors.AJAX = {
    attach: function attach(context, settings) {
      function loadAjaxBehavior(base) {
        var elementSettings = settings.ajax[base];
        if (typeof elementSettings.selector === 'undefined') {
          elementSettings.selector = "#".concat(base);
        }
        once('drupal-ajax', $(elementSettings.selector)).forEach(function (el) {
          elementSettings.element = el;
          elementSettings.base = base;
          Drupal.ajax(elementSettings);
        });
      }
      Object.keys(settings.ajax || {}).forEach(function (base) {
        return loadAjaxBehavior(base);
      });
      Drupal.ajax.bindAjaxLinks(document.body);
      once('ajax', '.use-ajax-submit').forEach(function (el) {
        var elementSettings = {};
        elementSettings.url = $(el.form).attr('action');
        elementSettings.setClick = true;
        elementSettings.event = 'click';
        elementSettings.progress = {
          type: 'throbber'
        };
        elementSettings.base = el.id;
        elementSettings.element = el;
        Drupal.ajax(elementSettings);
      });
    },
    detach: function detach(context, settings, trigger) {
      if (trigger === 'unload') {
        Drupal.ajax.expired().forEach(function (instance) {
          Drupal.ajax.instances[instance.instanceIndex] = null;
        });
      }
    }
  };
  Drupal.AjaxError = function (xmlhttp, uri, customMessage) {
    var statusCode;
    var statusText;
    var responseText;
    if (xmlhttp.status) {
      statusCode = "\n".concat(Drupal.t('An AJAX HTTP error occurred.'), "\n").concat(Drupal.t('HTTP Result Code: !status', {
        '!status': xmlhttp.status
      }));
    } else {
      statusCode = "\n".concat(Drupal.t('An AJAX HTTP request terminated abnormally.'));
    }
    statusCode += "\n".concat(Drupal.t('Debugging information follows.'));
    var pathText = "\n".concat(Drupal.t('Path: !uri', {
      '!uri': uri
    }));
    statusText = '';
    try {
      statusText = "\n".concat(Drupal.t('StatusText: !statusText', {
        '!statusText': xmlhttp.statusText.trim()
      }));
    } catch (e) {}
    responseText = '';
    try {
      responseText = "\n".concat(Drupal.t('ResponseText: !responseText', {
        '!responseText': xmlhttp.responseText.trim()
      }));
    } catch (e) {}
    responseText = responseText.replace(/<("[^"]*"|'[^']*'|[^'">])*>/gi, '');
    responseText = responseText.replace(/[\n]+\s+/g, '\n');
    var readyStateText = xmlhttp.status === 0 ? "\n".concat(Drupal.t('ReadyState: !readyState', {
      '!readyState': xmlhttp.readyState
    })) : '';
    customMessage = customMessage ? "\n".concat(Drupal.t('CustomMessage: !customMessage', {
      '!customMessage': customMessage
    })) : '';
    this.message = statusCode + pathText + statusText + customMessage + responseText + readyStateText;
    this.name = 'AjaxError';
  };
  Drupal.AjaxError.prototype = new Error();
  Drupal.AjaxError.prototype.constructor = Drupal.AjaxError;
  Drupal.ajax = function (settings) {
    if (arguments.length !== 1) {
      throw new Error('Drupal.ajax() function must be called with one configuration object only');
    }
    var base = settings.base || false;
    var element = settings.element || false;
    delete settings.base;
    delete settings.element;
    if (!settings.progress && !element) {
      settings.progress = false;
    }
    var ajax = new Drupal.Ajax(base, element, settings);
    ajax.instanceIndex = Drupal.ajax.instances.length;
    Drupal.ajax.instances.push(ajax);
    return ajax;
  };
  Drupal.ajax.instances = [];
  Drupal.ajax.expired = function () {
    return Drupal.ajax.instances.filter(function (instance) {
      return instance && instance.element !== false && !document.body.contains(instance.element);
    });
  };
  Drupal.ajax.bindAjaxLinks = function (element) {
    once('ajax', '.use-ajax', element).forEach(function (ajaxLink) {
      var $linkElement = $(ajaxLink);
      var elementSettings = {
        progress: {
          type: 'throbber'
        },
        dialogType: $linkElement.data('dialog-type'),
        dialog: $linkElement.data('dialog-options'),
        dialogRenderer: $linkElement.data('dialog-renderer'),
        base: $linkElement.attr('id'),
        element: ajaxLink
      };
      var href = $linkElement.attr('href');
      if (href) {
        elementSettings.url = href;
        elementSettings.event = 'click';
      }
      Drupal.ajax(elementSettings);
    });
  };
  Drupal.Ajax = function (base, element, elementSettings) {
    var defaults = {
      event: element ? 'mousedown' : null,
      keypress: true,
      selector: base ? "#".concat(base) : null,
      effect: 'none',
      speed: 'none',
      method: 'replaceWith',
      progress: {
        type: 'throbber',
        message: Drupal.t('Please wait...')
      },
      submit: {
        js: true
      }
    };
    $.extend(this, defaults, elementSettings);
    this.commands = new Drupal.AjaxCommands();
    this.instanceIndex = false;
    if (this.wrapper) {
      this.wrapper = "#".concat(this.wrapper);
    }
    this.element = element;
    this.element_settings = elementSettings;
    this.elementSettings = elementSettings;
    if (this.element && this.element.form) {
      this.$form = $(this.element.form);
    }
    if (!this.url) {
      var $element = $(this.element);
      if ($element.is('a')) {
        this.url = $element.attr('href');
      } else if (this.element && element.form) {
        this.url = this.$form.attr('action');
      }
    }
    var originalUrl = this.url;
    this.url = this.url.replace(/\/nojs(\/|$|\?|#)/, '/ajax$1');
    if (drupalSettings.ajaxTrustedUrl[originalUrl]) {
      drupalSettings.ajaxTrustedUrl[this.url] = true;
    }
    var ajax = this;
    ajax.options = {
      url: ajax.url,
      data: ajax.submit,
      isInProgress: function isInProgress() {
        return ajax.ajaxing;
      },
      beforeSerialize: function beforeSerialize(elementSettings, options) {
        return ajax.beforeSerialize(elementSettings, options);
      },
      beforeSubmit: function beforeSubmit(formValues, elementSettings, options) {
        ajax.ajaxing = true;
        return ajax.beforeSubmit(formValues, elementSettings, options);
      },
      beforeSend: function beforeSend(xmlhttprequest, options) {
        ajax.ajaxing = true;
        return ajax.beforeSend(xmlhttprequest, options);
      },
      success: function success(response, status, xmlhttprequest) {
        var _this = this;
        if (typeof response === 'string') {
          response = $.parseJSON(response);
        }
        if (response !== null && !drupalSettings.ajaxTrustedUrl[ajax.url]) {
          if (xmlhttprequest.getResponseHeader('X-Drupal-Ajax-Token') !== '1') {
            var customMessage = Drupal.t('The response failed verification so will not be processed.');
            return ajax.error(xmlhttprequest, ajax.url, customMessage);
          }
        }
        return Promise.resolve(ajax.success(response, status)).then(function () {
          ajax.ajaxing = false;
          $(document).trigger('ajaxSuccess', [xmlhttprequest, _this]);
          $(document).trigger('ajaxComplete', [xmlhttprequest, _this]);
          if (--$.active === 0) {
            $(document).trigger('ajaxStop');
          }
        });
      },
      error: function error(xmlhttprequest, status, _error) {
        ajax.ajaxing = false;
      },
      complete: function complete(xmlhttprequest, status) {
        if (status === 'error' || status === 'parsererror') {
          return ajax.error(xmlhttprequest, ajax.url);
        }
      },
      dataType: 'json',
      jsonp: false,
      type: 'POST'
    };
    if (elementSettings.dialog) {
      ajax.options.data.dialogOptions = elementSettings.dialog;
    }
    if (ajax.options.url.indexOf('?') === -1) {
      ajax.options.url += '?';
    } else {
      ajax.options.url += '&';
    }
    var wrapper = "drupal_".concat(elementSettings.dialogType || 'ajax');
    if (elementSettings.dialogRenderer) {
      wrapper += ".".concat(elementSettings.dialogRenderer);
    }
    ajax.options.url += "".concat(Drupal.ajax.WRAPPER_FORMAT, "=").concat(wrapper);
    $(ajax.element).on(elementSettings.event, function (event) {
      if (!drupalSettings.ajaxTrustedUrl[ajax.url] && !Drupal.url.isLocal(ajax.url)) {
        throw new Error(Drupal.t('The callback URL is not local and not trusted: !url', {
          '!url': ajax.url
        }));
      }
      return ajax.eventResponse(this, event);
    });
    if (elementSettings.keypress) {
      $(ajax.element).on('keypress', function (event) {
        return ajax.keypressResponse(this, event);
      });
    }
    if (elementSettings.prevent) {
      $(ajax.element).on(elementSettings.prevent, false);
    }
  };
  Drupal.ajax.WRAPPER_FORMAT = '_wrapper_format';
  Drupal.Ajax.AJAX_REQUEST_PARAMETER = '_drupal_ajax';
  Drupal.Ajax.prototype.execute = function () {
    if (this.ajaxing) {
      return;
    }
    try {
      this.beforeSerialize(this.element, this.options);
      return $.ajax(this.options);
    } catch (e) {
      this.ajaxing = false;
      window.alert("An error occurred while attempting to process ".concat(this.options.url, ": ").concat(e.message));
      return $.Deferred().reject();
    }
  };
  Drupal.Ajax.prototype.keypressResponse = function (element, event) {
    var ajax = this;
    if (event.which === 13 || event.which === 32 && element.type !== 'text' && element.type !== 'textarea' && element.type !== 'tel' && element.type !== 'number') {
      event.preventDefault();
      event.stopPropagation();
      $(element).trigger(ajax.elementSettings.event);
    }
  };
  Drupal.Ajax.prototype.eventResponse = function (element, event) {
    event.preventDefault();
    event.stopPropagation();
    var ajax = this;
    if (ajax.ajaxing) {
      return;
    }
    try {
      if (ajax.$form) {
        if (ajax.setClick) {
          element.form.clk = element;
        }
        ajax.$form.ajaxSubmit(ajax.options);
      } else {
        ajax.beforeSerialize(ajax.element, ajax.options);
        $.ajax(ajax.options);
      }
    } catch (e) {
      ajax.ajaxing = false;
      window.alert("An error occurred while attempting to process ".concat(ajax.options.url, ": ").concat(e.message));
    }
  };
  Drupal.Ajax.prototype.beforeSerialize = function (element, options) {
    if (this.$form && document.body.contains(this.$form.get(0))) {
      var settings = this.settings || drupalSettings;
      Drupal.detachBehaviors(this.$form.get(0), settings, 'serialize');
    }
    options.data[Drupal.Ajax.AJAX_REQUEST_PARAMETER] = 1;
    var pageState = drupalSettings.ajaxPageState;
    options.data['ajax_page_state[theme]'] = pageState.theme;
    options.data['ajax_page_state[theme_token]'] = pageState.theme_token;
    options.data['ajax_page_state[libraries]'] = pageState.libraries;
  };
  Drupal.Ajax.prototype.beforeSubmit = function (formValues, element, options) {};
  Drupal.Ajax.prototype.beforeSend = function (xmlhttprequest, options) {
    if (this.$form) {
      options.extraData = options.extraData || {};
      options.extraData.ajax_iframe_upload = '1';
      var v = $.fieldValue(this.element);
      if (v !== null) {
        options.extraData[this.element.name] = v;
      }
    }
    $(this.element).prop('disabled', true);
    if (!this.progress || !this.progress.type) {
      return;
    }
    var progressIndicatorMethod = "setProgressIndicator".concat(this.progress.type.slice(0, 1).toUpperCase()).concat(this.progress.type.slice(1).toLowerCase());
    if (progressIndicatorMethod in this && typeof this[progressIndicatorMethod] === 'function') {
      this[progressIndicatorMethod].call(this);
    }
  };
  Drupal.theme.ajaxProgressThrobber = function (message) {
    var messageMarkup = typeof message === 'string' ? Drupal.theme('ajaxProgressMessage', message) : '';
    var throbber = '<div class="throbber">&nbsp;</div>';
    return "<div class=\"ajax-progress ajax-progress-throbber\">".concat(throbber).concat(messageMarkup, "</div>");
  };
  Drupal.theme.ajaxProgressIndicatorFullscreen = function () {
    return '<div class="ajax-progress ajax-progress-fullscreen">&nbsp;</div>';
  };
  Drupal.theme.ajaxProgressMessage = function (message) {
    return "<div class=\"message\">".concat(message, "</div>");
  };
  Drupal.theme.ajaxProgressBar = function ($element) {
    return $('<div class="ajax-progress ajax-progress-bar"></div>').append($element);
  };
  Drupal.Ajax.prototype.setProgressIndicatorBar = function () {
    var progressBar = new Drupal.ProgressBar("ajax-progress-".concat(this.element.id), $.noop, this.progress.method, $.noop);
    if (this.progress.message) {
      progressBar.setProgress(-1, this.progress.message);
    }
    if (this.progress.url) {
      progressBar.startMonitoring(this.progress.url, this.progress.interval || 1500);
    }
    this.progress.element = $(Drupal.theme('ajaxProgressBar', progressBar.element));
    this.progress.object = progressBar;
    $(this.element).after(this.progress.element);
  };
  Drupal.Ajax.prototype.setProgressIndicatorThrobber = function () {
    this.progress.element = $(Drupal.theme('ajaxProgressThrobber', this.progress.message));
    $(this.element).after(this.progress.element);
  };
  Drupal.Ajax.prototype.setProgressIndicatorFullscreen = function () {
    this.progress.element = $(Drupal.theme('ajaxProgressIndicatorFullscreen'));
    $('body').append(this.progress.element);
  };
  Drupal.Ajax.prototype.commandExecutionQueue = function (response, status) {
    var _this2 = this;
    var ajaxCommands = this.commands;
    return Object.keys(response || {}).reduce(function (executionQueue, key) {
      return executionQueue.then(function () {
        var command = response[key].command;
        if (command && ajaxCommands[command]) {
          return ajaxCommands[command](_this2, response[key], status);
        }
      });
    }, Promise.resolve());
  };
  Drupal.Ajax.prototype.success = function (response, status) {
    var _this3 = this;
    if (this.progress.element) {
      $(this.progress.element).remove();
    }
    if (this.progress.object) {
      this.progress.object.stopMonitoring();
    }
    $(this.element).prop('disabled', false);
    var elementParents = $(this.element).parents('[data-drupal-selector]').addBack().toArray();
    var focusChanged = Object.keys(response || {}).some(function (key) {
      var _response$key = response[key],
        command = _response$key.command,
        method = _response$key.method;
      return command === 'focusFirst' || command === 'invoke' && method === 'focus';
    });
    return this.commandExecutionQueue(response, status).then(function () {
      if (!focusChanged && _this3.element && !$(_this3.element).data('disable-refocus')) {
        var target = false;
        for (var n = elementParents.length - 1; !target && n >= 0; n--) {
          target = document.querySelector("[data-drupal-selector=\"".concat(elementParents[n].getAttribute('data-drupal-selector'), "\"]"));
        }
        if (target) {
          $(target).trigger('focus');
        }
      }
      if (_this3.$form && document.body.contains(_this3.$form.get(0))) {
        var settings = _this3.settings || drupalSettings;
        Drupal.attachBehaviors(_this3.$form.get(0), settings);
      }
      _this3.settings = null;
    }).catch(function (error) {
      return console.error(Drupal.t('An error occurred during the execution of the Ajax response: !error', {
        '!error': error
      }));
    });
  };
  Drupal.Ajax.prototype.getEffect = function (response) {
    var type = response.effect || this.effect;
    var speed = response.speed || this.speed;
    var effect = {};
    if (type === 'none') {
      effect.showEffect = 'show';
      effect.hideEffect = 'hide';
      effect.showSpeed = '';
    } else if (type === 'fade') {
      effect.showEffect = 'fadeIn';
      effect.hideEffect = 'fadeOut';
      effect.showSpeed = speed;
    } else {
      effect.showEffect = "".concat(type, "Toggle");
      effect.hideEffect = "".concat(type, "Toggle");
      effect.showSpeed = speed;
    }
    return effect;
  };
  Drupal.Ajax.prototype.error = function (xmlhttprequest, uri, customMessage) {
    if (this.progress.element) {
      $(this.progress.element).remove();
    }
    if (this.progress.object) {
      this.progress.object.stopMonitoring();
    }
    $(this.wrapper).show();
    $(this.element).prop('disabled', false);
    if (this.$form && document.body.contains(this.$form.get(0))) {
      var settings = this.settings || drupalSettings;
      Drupal.attachBehaviors(this.$form.get(0), settings);
    }
    throw new Drupal.AjaxError(xmlhttprequest, uri, customMessage);
  };
  Drupal.theme.ajaxWrapperNewContent = function ($newContent, ajax, response) {
    return (response.effect || ajax.effect) !== 'none' && $newContent.filter(function (i) {
      return !($newContent[i].nodeName === '#comment' || $newContent[i].nodeName === '#text' && /^(\s|\n|\r)*$/.test($newContent[i].textContent));
    }).length > 1 ? Drupal.theme('ajaxWrapperMultipleRootElements', $newContent) : $newContent;
  };
  Drupal.theme.ajaxWrapperMultipleRootElements = function ($elements) {
    return $('<div></div>').append($elements);
  };
  Drupal.AjaxCommands = function () {};
  Drupal.AjaxCommands.prototype = {
    insert: function insert(ajax, response) {
      var $wrapper = response.selector ? $(response.selector) : $(ajax.wrapper);
      var method = response.method || ajax.method;
      var effect = ajax.getEffect(response);
      var settings = response.settings || ajax.settings || drupalSettings;
      var $newContent = $($.parseHTML(response.data, document, true));
      $newContent = Drupal.theme('ajaxWrapperNewContent', $newContent, ajax, response);
      switch (method) {
        case 'html':
        case 'replaceWith':
        case 'replaceAll':
        case 'empty':
        case 'remove':
          Drupal.detachBehaviors($wrapper.get(0), settings);
          break;
        default:
          break;
      }
      $wrapper[method]($newContent);
      if (effect.showEffect !== 'show') {
        $newContent.hide();
      }
      var $ajaxNewContent = $newContent.find('.ajax-new-content');
      if ($ajaxNewContent.length) {
        $ajaxNewContent.hide();
        $newContent.show();
        $ajaxNewContent[effect.showEffect](effect.showSpeed);
      } else if (effect.showEffect !== 'show') {
        $newContent[effect.showEffect](effect.showSpeed);
      }
      if ($newContent.parents('html').length) {
        $newContent.each(function (index, element) {
          if (element.nodeType === Node.ELEMENT_NODE) {
            Drupal.attachBehaviors(element, settings);
          }
        });
      }
    },
    remove: function remove(ajax, response, status) {
      var settings = response.settings || ajax.settings || drupalSettings;
      $(response.selector).each(function () {
        Drupal.detachBehaviors(this, settings);
      }).remove();
    },
    changed: function changed(ajax, response, status) {
      var $element = $(response.selector);
      if (!$element.hasClass('ajax-changed')) {
        $element.addClass('ajax-changed');
        if (response.asterisk) {
          $element.find(response.asterisk).append(" <abbr class=\"ajax-changed\" title=\"".concat(Drupal.t('Changed'), "\">*</abbr> "));
        }
      }
    },
    alert: function alert(ajax, response, status) {
      window.alert(response.text);
    },
    announce: function announce(ajax, response) {
      if (response.priority) {
        Drupal.announce(response.text, response.priority);
      } else {
        Drupal.announce(response.text);
      }
    },
    redirect: function redirect(ajax, response, status) {
      window.location = response.url;
    },
    css: function css(ajax, response, status) {
      $(response.selector).css(response.argument);
    },
    settings: function settings(ajax, response, status) {
      var ajaxSettings = drupalSettings.ajax;
      if (ajaxSettings) {
        Drupal.ajax.expired().forEach(function (instance) {
          if (instance.selector) {
            var selector = instance.selector.replace('#', '');
            if (selector in ajaxSettings) {
              delete ajaxSettings[selector];
            }
          }
        });
      }
      if (response.merge) {
        $.extend(true, drupalSettings, response.settings);
      } else {
        ajax.settings = response.settings;
      }
    },
    data: function data(ajax, response, status) {
      $(response.selector).data(response.name, response.value);
    },
    focusFirst: function focusFirst(ajax, response, status) {
      var focusChanged = false;
      var container = document.querySelector(response.selector);
      if (container) {
        var tabbableElements = tabbable(container);
        if (tabbableElements.length) {
          tabbableElements[0].focus();
          focusChanged = true;
        } else if (isFocusable(container)) {
          container.focus();
          focusChanged = true;
        }
      }
      if (ajax.hasOwnProperty('element') && !focusChanged) {
        ajax.element.focus();
      }
    },
    invoke: function invoke(ajax, response, status) {
      var $element = $(response.selector);
      $element[response.method].apply($element, _toConsumableArray(response.args));
    },
    restripe: function restripe(ajax, response, status) {
      $(response.selector).find('> tbody > tr:visible, > tr:visible').removeClass('odd even').filter(':even').addClass('odd').end().filter(':odd').addClass('even');
    },
    update_build_id: function update_build_id(ajax, response, status) {
      document.querySelectorAll("input[name=\"form_build_id\"][value=\"".concat(response.old, "\"]")).forEach(function (item) {
        item.value = response.new;
      });
    },
    add_css: function add_css(ajax, response, status) {
      $('head').prepend(response.data);
    },
    message: function message(ajax, response) {
      var messages = new Drupal.Message(document.querySelector(response.messageWrapperQuerySelector));
      if (response.clearPrevious) {
        messages.clear();
      }
      messages.add(response.message, response.messageOptions);
    },
    add_js: function add_js(ajax, response, status) {
      var parentEl = document.querySelector(response.selector || 'body');
      var settings = ajax.settings || drupalSettings;
      var allUniqueBundleIds = response.data.map(function (script) {
        var uniqueBundleId = script.src + ajax.instanceIndex;
        loadjs(script.src, uniqueBundleId, {
          async: false,
          before: function before(path, scriptEl) {
            Object.keys(script).forEach(function (attributeKey) {
              scriptEl.setAttribute(attributeKey, script[attributeKey]);
            });
            parentEl.appendChild(scriptEl);
            return false;
          }
        });
        return uniqueBundleId;
      });
      return new Promise(function (resolve, reject) {
        loadjs.ready(allUniqueBundleIds, {
          success: function success() {
            Drupal.attachBehaviors(parentEl, settings);
            resolve();
          },
          error: function error(depsNotFound) {
            var message = Drupal.t("The following files could not be loaded: @dependencies", {
              '@dependencies': depsNotFound.join(', ')
            });
            reject(message);
          }
        });
      });
    }
  };
  var stopEvent = function stopEvent(xhr, settings) {
    return xhr.getResponseHeader('X-Drupal-Ajax-Token') === '1' && settings.isInProgress && settings.isInProgress();
  };
  $.extend(true, $.event.special, {
    ajaxSuccess: {
      trigger: function trigger(event, xhr, settings) {
        if (stopEvent(xhr, settings)) {
          return false;
        }
      }
    },
    ajaxComplete: {
      trigger: function trigger(event, xhr, settings) {
        if (stopEvent(xhr, settings)) {
          $.active++;
          return false;
        }
      }
    }
  });
})(jQuery, window, Drupal, drupalSettings, loadjs, window.tabbable);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
(function (Drupal) {
  Drupal.theme.ajaxProgressBar = function ($element) {
    return $element.addClass('ajax-progress ajax-progress-bar');
  };
})(Drupal);;
/*! jQuery Mobile v1.5.0-alpha.1 | Copyright jQuery Foundation, Inc. | jquery.org/license */

(function(e,t,n){typeof define=="function"&&define.amd?define(["jquery"],function(r){return n(r,e,t),r.mobile}):n(e.jQuery,e,t)})(this,document,function(e,t,n,r){(function(t){typeof define=="function"&&define.amd?define("animationComplete",["jquery"],t):t(e)})(function(e){var t={animation:{},transition:{}},i=n.createElement("a"),s=["","webkit-","moz-","o-"],o={};return e.each(["animation","transition"],function(n,o){var u=n===0?o+"-"+"name":o;e.each(s,function(n,s){if(i.style[e.camelCase(s+u)]!==r)return t[o].prefix=s,!1}),t[o].duration=e.camelCase(t[o].prefix+o+"-"+"duration"),t[o].event=e.camelCase(t[o].prefix+o+"-"+"end"),t[o].prefix===""&&(t[o].event=t[o].event.toLowerCase())}),e.support.cssTransitions=t.transition.prefix!==r,e.support.cssAnimations=t.animation.prefix!==r,e(i).remove(),e.fn.extend({animationComplete:function(i,s,u){var a,f,l=this,c=function(){clearTimeout(a),i.apply(this,arguments)},h=!s||s==="animation"?"animation":"transition";if(!this.length)return this;if(e.support.cssTransitions&&h==="transition"||e.support.cssAnimations&&h==="animation"){if(u===r){this.context!==n&&(f=parseFloat(this.css(t[h].duration))*3e3);if(f===0||f===r||isNaN(f))f=e.fn.animationComplete.defaultDuration}return a=setTimeout(function(){l.off(t[h].event,c).each(function(){i.apply(this)})},f),o[i]={event:t[h].event,binding:c},this.one(t[h].event,c)}return setTimeout(function(){l.each(function(){i.apply(this)})},0),this},removeAnimationComplete:function(e){var t=o[e];return t?this.off(t.event,t.binding):this}}),e.fn.animationComplete.defaultDuration=1e3,e}),function(t){typeof define=="function"&&define.amd?define("ns",["jquery"],t):t(e)}(function(e){return e.mobile={version:"@VERSION"},e.mobile}),function(t){typeof define=="function"&&define.amd?define("data",["jquery","./ns"],t):t(e)}(function(e){var n={},i=e.find,s=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,o=/:jqmData\(([^)]*)\)/g;return e.extend(e.mobile,{ns:e.mobileBackcompat===!1?"ui-":"",getAttribute:function(n,r){var i;n=n.jquery?n[0]:n,n&&n.getAttribute&&(i=n.getAttribute("data-"+e.mobile.ns+r));try{i=i==="true"?!0:i==="false"?!1:i==="null"?null:+i+""===i?+i:s.test(i)?t.JSON.parse(i):i}catch(o){}return i},nsNormalizeDict:n,nsNormalize:function(t){return n[t]||(n[t]=e.camelCase(e.mobile.ns+t))},closestPageData:function(e){return e.closest(":jqmData(role='page'), :jqmData(role='dialog')").data("mobile-page")}}),e.fn.jqmData=function(t,n){var i;return typeof t!="undefined"&&(t&&(t=e.mobile.nsNormalize(t)),arguments.length<2||n===r?i=this.data(t):i=this.data(t,n)),i},e.jqmData=function(t,n,r){var i;return typeof n!="undefined"&&(i=e.data(t,n?e.mobile.nsNormalize(n):n,r)),i},e.fn.jqmRemoveData=function(t){return this.removeData(e.mobile.nsNormalize(t))},e.jqmRemoveData=function(t,n){return e.removeData(t,e.mobile.nsNormalize(n))},e.find=function(t,n,r,s){return t.indexOf(":jqmData")>-1&&(t=t.replace(o,"[data-"+(e.mobile.ns||"")+"$1]")),i.call(this,t,n,r,s)},e.extend(e.find,i),e.mobile}),function(t){typeof define=="function"&&define.amd?define("defaults",["jquery","./ns"],t):t(e)}(function(e){return e.extend(e.mobile,{hideUrlBar:!0,keepNative:":jqmData(role='none'), :jqmData(role='nojs')",ajaxEnabled:!0,hashListeningEnabled:!0,linkBindingEnabled:!0,defaultPageTransition:"fade",maxTransitionWidth:!1,defaultDialogTransition:"pop",pageLoadErrorMessage:"Error Loading Page",pageLoadErrorMessageTheme:"a",phonegapNavigationEnabled:!1,autoInitializePage:!0,pushStateEnabled:!0,ignoreContentEnabled:!1,pageContainer:e(),allowCrossDomainPages:!1,dialogHashKey:"&ui-state=dialog"})}),function(t){typeof define=="function"&&define.amd?define("jquery-ui/version",["jquery"],t):t(e)}(function(e){return e.ui=e.ui||{},e.ui.version="1.12.1"}),function(t){typeof define=="function"&&define.amd?define("jquery-ui/keycode",["jquery","./version"],t):t(e)}(function(e){return e.ui.keyCode={BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}}),function(t){typeof define=="function"&&define.amd?define("helpers",["jquery","./ns","jquery-ui/keycode"],t):t(e)}(function(e){var r=function(t,n){var r=t.parent(),i=[],s=function(){var t=e(this),n=e.mobile.toolbar&&t.data("mobile-toolbar")?t.toolbar("option"):{position:t.attr("data-"+e.mobile.ns+"position"),updatePagePadding:t.attr("data-"+e.mobile.ns+"update-page-padding")!==!1};return n.position!=="fixed"||n.updatePagePadding!==!0},o=r.children(":jqmData(type='header')").filter(s),u=t.children(":jqmData(type='header')"),a=r.children(":jqmData(type='footer')").filter(s),f=t.children(":jqmData(type='footer')");return u.length===0&&o.length>0&&(i=i.concat(o.toArray())),f.length===0&&a.length>0&&(i=i.concat(a.toArray())),e.each(i,function(t,r){n-=e(r).outerHeight()}),Math.max(0,n)};return e.extend(e.mobile,{window:e(t),document:e(n),keyCode:e.ui.keyCode,behaviors:{},focusPage:function(e){var t=e.find("[autofocus]");t.length||(t=e.find(".ui-title").eq(0)),t.length||(t=e),t.focus()},silentScroll:function(n){if(e.mobile.window.scrollTop()>0)return;e.type(n)!=="number"&&(n=e.mobile.defaultHomeScroll),e.event.special.scrollstart.enabled=!1,setTimeout(function(){t.scrollTo(0,n),e.mobile.document.trigger("silentscroll",{x:0,y:n})},20),setTimeout(function(){e.event.special.scrollstart.enabled=!0},150)},getClosestBaseUrl:function(t){var n=e(t).closest(".ui-page").jqmData("url"),r=e.mobile.path.documentBase.hrefNoHash;if(!e.mobile.base.dynamicBaseEnabled||!n||!e.mobile.path.isPath(n))n=r;return e.mobile.path.makeUrlAbsolute(n,r)},removeActiveLinkClass:function(t){!!e.mobile.activeClickedLink&&(!e.mobile.activeClickedLink.closest(".ui-page-active").length||t)&&e.mobile.activeClickedLink.removeClass("ui-button-active"),e.mobile.activeClickedLink=null},enhanceable:function(e){return this.haveParents(e,"enhance")},hijackable:function(e){return this.haveParents(e,"ajax")},haveParents:function(t,n){if(!e.mobile.ignoreContentEnabled)return t;var r=t.length,i=e(),s,o,u,a,f;for(a=0;a<r;a++){o=t.eq(a),u=!1,s=t[a];while(s){f=s.getAttribute?s.getAttribute("data-"+e.mobile.ns+n):"";if(f==="false"){u=!0;break}s=s.parentNode}u||(i=i.add(o))}return i},getScreenHeight:function(){return t.innerHeight||e.mobile.window.height()},resetActivePageHeight:function(n){var i=e(".ui-page-active"),s=i.height(),o=i.outerHeight(!0);n=r(i,typeof n=="number"?n:e(t).height()),i.css("min-height",""),i.height()<n&&i.css("min-height",n-(o-s))},loading:function(){var t=this.loading._widget||e.mobile.loader().element,n=t.loader.apply(t,arguments);return this.loading._widget=t,n},isElementCurrentlyVisible:function(r){r=typeof r=="string"?e(r)[0]:r[0];if(!r)return!0;var i=r.getBoundingClientRect();return i.bottom>0&&i.right>0&&i.top<(t.innerHeight||n.documentElement.clientHeight)&&i.left<(t.innerWidth||n.documentElement.clientWidth)}}),e.addDependents=function(t,n){var r=e(t),i=r.jqmData("dependents")||e();r.jqmData("dependents",e(i).add(n))},e.fn.extend({removeWithDependents:function(){e.removeWithDependents(this)},addDependents:function(t){e.addDependents(this,t)},getEncodedText:function(){return e("<a>").text(this.text()).html()},jqmEnhanceable:function(){return e.mobile.enhanceable(this)},jqmHijackable:function(){return e.mobile.hijackable(this)}}),e.removeWithDependents=function(t){var n=e(t);(n.jqmData("dependents")||e()).remove(),n.remove()},e.addDependents=function(t,n){var r=e(t),i=r.jqmData("dependents")||e();r.jqmData("dependents",e(i).add(n))},e.find.matches=function(t,n){return e.find(t,null,null,n)},e.find.matchesSelector=function(t,n){return e.find(n,null,null,[t]).length>0},e.mobile}),function(t){typeof define=="function"&&define.amd?define("core",["./defaults","./data","./helpers"],t):t(e)}(function(){}),function(t){typeof define=="function"&&define.amd?define("media",["jquery","./core"],t):t(e)}(function(e){return t.matchMedia=t.matchMedia||function(e,t){var n,r=e.documentElement,i=r.firstElementChild||r.firstChild,s=e.createElement("body"),o=e.createElement("div");return o.id="mq-test-1",o.style.cssText="position:absolute;top:-100em",s.style.background="none",s.appendChild(o),function(e){return o.innerHTML='&shy;<style media="'+e+'"> #mq-test-1 { width: 42px; }</style>',r.insertBefore(s,i),n=o.offsetWidth===42,r.removeChild(s),{matches:n,media:e}}}(n),e.mobile.media=function(e){var n=t.matchMedia(e);return n&&n.matches},e.mobile.media}),function(t){typeof define=="function"&&define.amd?define("support/touch",["jquery","../ns"],t):t(e)}(function(e){var t={touch:"ontouchend"in n};return e.mobile.support=e.mobile.support||{},e.extend(e.support,t),e.extend(e.mobile.support,t),e.support}),function(t){typeof define=="function"&&define.amd?define("support/orientation",["jquery"],t):t(e)}(function(e){return e.extend(e.support,{orientation:"orientation"in t&&"onorientationchange"in t}),e.support}),function(t){typeof define=="function"&&define.amd?define("support",["jquery","./core","./media","./support/touch","./support/orientation"],t):t(e)}(function(e){function l(e){var t=e.charAt(0).toUpperCase()+e.substr(1),n=(e+" "+o.join(t+" ")+t).split(" "),i;for(i in n)if(s[n[i]]!==r)return!0}function h(){var n=t,r=!!n.document.createElementNS&&!!n.document.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect&&(!n.opera||navigator.userAgent.indexOf("Chrome")!==-1),i=function(t){(!t||!r)&&e("html").addClass("ui-nosvg")},s=new n.Image;s.onerror=function(){i(!1)},s.onload=function(){i(s.width===1&&s.height===1)},s.src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw=="}function p(){var s="transform-3d",u=e.mobile.media("(-"+o.join("-"+s+"),(-")+"-"+s+"),("+s+")"),a,f,l;if(u)return!!u;a=n.createElement("div"),f={MozTransform:"-moz-transform",transform:"transform"},i.append(a);for(l in f)a.style[l]!==r&&(a.style[l]="translate3d( 100px, 1px, 1px )",u=t.getComputedStyle(a).getPropertyValue(f[l]));return!!u&&u!=="none"}function d(){var e=n.createElement("x"),r=n.documentElement,i=t.getComputedStyle,s;return"pointerEvents"in e.style?(e.style.pointerEvents="auto",e.style.pointerEvents="x",r.appendChild(e),s=i&&i(e,"").pointerEvents==="auto",r.removeChild(e),!!s):!1}function v(){var e=n.createElement("div");return typeof e.getBoundingClientRect!="undefined"}function m(){var e=t,n=navigator.userAgent,r=navigator.platform,i=n.match(/AppleWebKit\/([0-9]+)/),s=!!i&&i[1],o=n.match(/Fennec\/([0-9]+)/),u=!!o&&o[1],a=n.match(/Opera Mobi\/([0-9]+)/),f=!!a&&a[1];return(r.indexOf("iPhone")>-1||r.indexOf("iPad")>-1||r.indexOf("iPod")>-1)&&s&&s<534||e.operamini&&{}.toString.call(e.operamini)==="[object OperaMini]"||a&&f<7458||n.indexOf("Android")>-1&&s&&s<533||u&&u<6||"palmGetResource"in t&&s&&s<534||n.indexOf("MeeGo")>-1&&n.indexOf("NokiaBrowser/8.5.0")>-1?!1:!0}var i=e("<body>").prependTo("html"),s=i[0].style,o=["Webkit","Moz","O"],u="palmGetResource"in t,a=t.operamini&&{}.toString.call(t.operamini)==="[object OperaMini]",f,c=t.blackberry&&!l("-webkit-transform");return e.extend(e.mobile,{browser:{}}),e.mobile.browser.oldIE=function(){var e=3,t=n.createElement("div"),r=t.all||[];do t.innerHTML="<!--[if gt IE "+ ++e+"]><br><![endif]-->";while(r[0]);return e>4?e:!e}(),e.mobile.browser.newIEMobile=function(){var t=n.createElement("div");return!e.mobile.browser.oldIE&&"onmsgesturehold"in t&&"ontouchstart"in t&&"onpointerdown"in t}(),e.extend(e.support,{pushState:"pushState"in history&&"replaceState"in history&&!(t.navigator.userAgent.indexOf("Firefox")>=0&&t.top!==t)&&t.navigator.userAgent.search(/CriOS/)===-1,mediaquery:e.mobile.media("only all"),cssPseudoElement:!!l("content"),touchOverflow:!!l("overflowScrolling"),cssTransform3d:p(),boxShadow:!!l("boxShadow")&&!c,fixedPosition:m(),scrollTop:("pageXOffset"in t||"scrollTop"in n.documentElement||"scrollTop"in i[0])&&!u&&!a,cssPointerEvents:d(),boundingRect:v(),inlineSVG:h}),i.remove(),f=function(){var e=t.navigator.userAgent;return e.indexOf("Nokia")>-1&&(e.indexOf("Symbian/3")>-1||e.indexOf("Series60/5")>-1)&&e.indexOf("AppleWebKit")>-1&&e.match(/(BrowserNG|NokiaBrowser)\/7\.[0-3]/)}(),e.mobile.gradeA=function(){return(e.support.mediaquery&&e.support.cssPseudoElement||e.mobile.browser.oldIE&&e.mobile.browser.oldIE>=8)&&(e.support.boundingRect||e.fn.jquery.match(/1\.[0-7+]\.[0-9+]?/)!==null)},e.mobile.ajaxBlacklist=t.blackberry&&!t.WebKitPoint||a||f,f&&e(function(){e("head link[rel='stylesheet']").attr("rel","alternate stylesheet").attr("rel","stylesheet")}),e.support.boxShadow||e("html").addClass("ui-noboxshadow"),e.support}),function(t){typeof define=="function"&&define.amd?define("events/navigate",["jquery","./../ns","./../support"],t):t(e)}(function(e){var t=e.mobile.window,n,i=function(){};return e.event.special.beforenavigate={setup:function(){t.on("navigate",i)},teardown:function(){t.off("navigate",i)}},e.event.special.navigate=n={bound:!1,pushStateEnabled:!0,originalEventName:r,isPushStateEnabled:function(){return e.support.pushState&&e.mobile.pushStateEnabled===!0&&this.isHashChangeEnabled()},isHashChangeEnabled:function(){return e.mobile.hashListeningEnabled===!0},popstate:function(n){var r,i,s;if(n.isDefaultPrevented())return;r=new e.Event("navigate"),i=new e.Event("beforenavigate"),s=n.originalEvent.state||{},i.originalEvent=n,t.trigger(i);if(i.isDefaultPrevented())return;n.historyState&&e.extend(s,n.historyState),r.originalEvent=n,setTimeout(function(){t.trigger(r,{state:s})},0)},hashchange:function(n){var r=new e.Event("navigate"),i=new e.Event("beforenavigate");i.originalEvent=n,t.trigger(i);if(i.isDefaultPrevented())return;r.originalEvent=n,t.trigger(r,{state:n.hashchangeState||{}})},setup:function(){if(n.bound)return;n.bound=!0,n.isPushStateEnabled()?(n.originalEventName="popstate",t.bind("popstate.navigate",n.popstate)):n.isHashChangeEnabled()&&(n.originalEventName="hashchange",t.bind("hashchange.navigate",n.hashchange))}},e.event.special.navigate}),function(t){typeof define=="function"&&define.amd?define("vmouse",["jquery"],t):t(e)}(function(e){function T(e){while(e&&typeof e.originalEvent!="undefined")e=e.originalEvent;return e}function N(t,n){var i=t.type,o,a,l,c,h,p,d,v,m;t=e.Event(t),t.type=n,o=t.originalEvent,a=u,i.search(/^(mouse|click)/)>-1&&(a=f);if(o)for(d=a.length;d;)c=a[--d],t[c]=o[c];i.search(/mouse(down|up)|click/)>-1&&!t.which&&(t.which=1);if(i.search(/^touch/)!==-1){l=T(o),i=l.touches,h=l.changedTouches,p=i&&i.length?i[0]:h&&h.length?h[0]:r;if(p)for(v=0,m=s.length;v<m;v++)c=s[v],t[c]=p[c]}return t}function C(n){var r={},i,s;while(n){i=e.data(n,t);for(s in i)i[s]&&(r[s]=r.hasVirtualBinding=!0);n=n.parentNode}return r}function k(n,r){var i;while(n){i=e.data(n,t);if(i&&(!r||i[r]))return n;n=n.parentNode}return null}function L(){g=!1}function A(){g=!0}function O(){E=0,v.length=0,m=!1,A()}function M(){L()}function _(){c&&(clearTimeout(c),c=0)}function D(){_(),c=setTimeout(function(){c=0,O()},e.vmouse.resetTimerDuration)}function P(t,n,r){var i;if(r&&r[t]||!r&&k(n.target,t))i=N(n,t),e(n.target).trigger(i);return i}function H(t){var n=e.data(t.target,i),r;t.type==="click"&&e.data(t.target,"lastTouchType")==="touchstart"&&setTimeout(function(){e.data(t.target,"lastTouchType")==="touchstart"&&(O(),delete e.data(t.target).lastTouchType,H(t))},e.vmouse.maximumTimeBetweenTouches),!m&&(!E||E!==n)&&(r=P("v"+t.type,t),r&&(r.isDefaultPrevented()&&t.preventDefault(),r.isPropagationStopped()&&t.stopPropagation(),r.isImmediatePropagationStopped()&&t.stopImmediatePropagation()))}function B(t){var n=T(t).touches,r,s,o;n&&n.length===1&&(r=t.target,s=C(r),e.data(t.target,"lastTouchType",t.type),s.hasVirtualBinding&&(E=w++,e.data(r,i,E),_(),M(),d=!1,o=T(t).touches[0],h=o.pageX,p=o.pageY,P("vmouseover",t,s),P("vmousedown",t,s)))}function j(t){if(g)return;d||P("vmousecancel",t,C(t.target)),e.data(t.target,"lastTouchType",t.type),d=!0,D()}function F(t){if(g)return;var n=T(t).touches[0],r=d,i=e.vmouse.moveDistanceThreshold,s=C(t.target);e.data(t.target,"lastTouchType",t.type),d=d||Math.abs(n.pageX-h)>i||Math.abs(n.pageY-p)>i,d&&!r&&P("vmousecancel",t,s),P("vmousemove",t,s),D()}function I(t){if(g||e.data(t.target,"lastTouchType")===r)return;A(),delete e.data(t.target).lastTouchType;var n=C(t.target),i,s;P("vmouseup",t,n),d||(i=P("vclick",t,n),i&&i.isDefaultPrevented()&&(s=T(t).changedTouches[0],v.push({touchID:E,x:s.clientX,y:s.clientY}),m=!0)),P("vmouseout",t,n),d=!1,D()}function q(n){var r=e.data(n,t),i;if(r)for(i in r)if(r[i])return!0;return!1}function R(){}function U(n){var r=n.substr(1);return{setup:function(){q(this)||e.data(this,t,{});var i=e.data(this,t);i[n]=!0,l[n]=(l[n]||0)+1,l[n]===1&&b.bind(r,H),e(this).bind(r,R),y&&(l.touchstart=(l.touchstart||0)+1,l.touchstart===1&&b.bind("touchstart",B).bind("touchend",I).bind("touchmove",F).bind("scroll",j))},teardown:function(){--l[n],l[n]||b.unbind(r,H),y&&(--l.touchstart,l.touchstart||b.unbind("touchstart",B).unbind("touchmove",F).unbind("touchend",I).unbind("scroll",j));var i=e(this),s=e.data(this,t);s&&(s[n]=!1),i.unbind(r,R),q(this)||i.removeData(t)}}}var t="virtualMouseBindings",i="virtualTouchID",s="clientX clientY pageX pageY screenX screenY".split(" "),o="vmouseover vmousedown vmousemove vmouseup vclick vmouseout vmousecancel".split(" "),u="altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),a=e.event.mouseHooks?e.event.mouseHooks.props:[],f=u.concat(a),l={},c=0,h=0,p=0,d=!1,v=[],m=!1,g=!1,y="addEventListener"in n,b=e(n),w=1,E=0,S,x;e.vmouse={moveDistanceThreshold:10,clickDistanceThreshold:10,resetTimerDuration:1500,maximumTimeBetweenTouches:100};for(x=0;x<o.length;x++)e.event.special[o[x]]=U(o[x]);y&&n.addEventListener("click",function(t){var n=v.length,r=t.target,s,o,u,a,f,l;if(n){s=t.clientX,o=t.clientY,S=e.vmouse.clickDistanceThreshold,u=r;while(u){for(a=0;a<n;a++){f=v[a],l=0;if(u===r&&Math.abs(f.x-s)<S&&Math.abs(f.y-o)<S||e.data(u,i)===f.touchID){t.preventDefault(),t.stopPropagation();return}}u=u.parentNode}}},!0)}),function(t){typeof define=="function"&&define.amd?define("events/touch",["jquery","../vmouse","../support/touch"],t):t(e)}(function(e){function f(t,n,i,s){var o=i.type;i.type=n,s?e.event.trigger(i,r,t):e.event.dispatch.call(t,i),i.type=o}var i=e(n),s=e.mobile.support.touch,o=s?"touchstart":"mousedown",u=s?"touchend":"mouseup",a=s?"touchmove":"mousemove";return e.each("touchstart touchmove touchend tap taphold swipe swipeleft swiperight".split(" "),function(t,n){e.fn[n]=function(e){return e?this.bind(n,e):this.trigger(n)},e.attrFn&&(e.attrFn[n]=!0)}),e.event.special.tap={tapholdThreshold:750,emitTapOnTaphold:!0,setup:function(){var t=this,n=e(t),r=!1;n.bind("vmousedown",function(s){function l(){u&&(n.bind("vclick",a),clearTimeout(u))}function c(){l(),n.unbind("vclick",a).unbind("vmouseup",l),i.unbind("vmousecancel",c)}r=!1;if(s.which&&s.which!==1)return!0;var o=s.target,u,a;a=function(e){c(),!r&&o===e.target?f(t,"tap",e):r&&e.preventDefault()},n.bind("vmouseup",l),i.bind("vmousecancel",c),u=setTimeout(function(){e.event.special.tap.emitTapOnTaphold||(r=!0),u=0,f(t,"taphold",e.Event("taphold",{target:o}))},e.event.special.tap.tapholdThreshold)})},teardown:function(){e(this).unbind("vmousedown").unbind("vclick").unbind("vmouseup"),i.unbind("vmousecancel")}},e.event.special.swipe={scrollSupressionThreshold:30,durationThreshold:1e3,horizontalDistanceThreshold:t.devicePixelRatio>=2?15:30,verticalDistanceThreshold:t.devicePixelRatio>=2?15:30,getLocation:function(e){var n=t.pageXOffset,r=t.pageYOffset,i=e.clientX,s=e.clientY;if(e.pageY===0&&Math.floor(s)>Math.floor(e.pageY)||e.pageX===0&&Math.floor(i)>Math.floor(e.pageX))i-=n,s-=r;else if(s<e.pageY-r||i<e.pageX-n)i=e.pageX-n,s=e.pageY-r;return{x:i,y:s}},start:function(t){var n=t.originalEvent.touches?t.originalEvent.touches[0]:t,r=e.event.special.swipe.getLocation(n);return{time:(new Date).getTime(),coords:[r.x,r.y],origin:e(t.target)}},stop:function(t){var n=t.originalEvent.touches?t.originalEvent.touches[0]:t,r=e.event.special.swipe.getLocation(n);return{time:(new Date).getTime(),coords:[r.x,r.y]}},handleSwipe:function(t,n,r,i){if(n.time-t.time<e.event.special.swipe.durationThreshold&&Math.abs(t.coords[0]-n.coords[0])>e.event.special.swipe.horizontalDistanceThreshold&&Math.abs(t.coords[1]-n.coords[1])<e.event.special.swipe.verticalDistanceThreshold){var s=t.coords[0]>n.coords[0]?"swipeleft":"swiperight";return f(r,"swipe",e.Event("swipe",{target:i,swipestart:t,swipestop:n}),!0),f(r,s,e.Event(s,{target:i,swipestart:t,swipestop:n}),!0),!0}return!1},eventInProgress:!1,setup:function(){var t,n=this,r=e(n),s={};t=e.data(this,"mobile-events"),t||(t={length:0},e.data(this,"mobile-events",t)),t.length++,t.swipe=s,s.start=function(t){if(e.event.special.swipe.eventInProgress)return;e.event.special.swipe.eventInProgress=!0;var r,o=e.event.special.swipe.start(t),f=t.target,l=!1;s.move=function(t){if(!o||t.isDefaultPrevented())return;r=e.event.special.swipe.stop(t),l||(l=e.event.special.swipe.handleSwipe(o,r,n,f),l&&(e.event.special.swipe.eventInProgress=!1)),Math.abs(o.coords[0]-r.coords[0])>e.event.special.swipe.scrollSupressionThreshold&&t.preventDefault()},s.stop=function(){l=!0,e.event.special.swipe.eventInProgress=!1,i.off(a,s.move),s.move=null},i.on(a,s.move).one(u,s.stop)},r.on(o,s.start)},teardown:function(){var t,n;t=e.data(this,"mobile-events"),t&&(n=t.swipe,delete t.swipe,t.length--,t.length===0&&e.removeData(this,"mobile-events")),n&&(n.start&&e(this).off(o,n.start),n.move&&i.off(a,n.move),n.stop&&i.off(u,n.stop))}},e.each({taphold:"tap",swipeleft:"swipe.left",swiperight:"swipe.right"},function(t,n){e.event.special[t]={setup:function(){e(this).bind(n,e.noop)},teardown:function(){e(this).unbind(n)}}}),e.event.special}),function(t){typeof define=="function"&&define.amd?define("events/scroll",["jquery"],t):t(e)}(function(e){var t="touchmove scroll";return e.each(["scrollstart","scrollstop"],function(t,n){e.fn[n]=function(e){return e?this.bind(n,e):this.trigger(n)},e.attrFn&&(e.attrFn[n]=!0)}),e.event.special.scrollstart={enabled:!0,setup:function(){function o(t,r){var s=t.type;i=r,t.type=i?"scrollstart":"scrollstop",e.event.dispatch.call(n,t),t.type=s}var n=this,r=e(n),i,s,u=e.event.special.scrollstart.handler=function(t){if(!e.event.special.scrollstart.enabled)return;i||o(t,!0),clearTimeout(s),s=setTimeout(function(){o(t,!1)},50)};r.on(t,u)},teardown:function(){e(this).off(t,e.event.special.scrollstart.handler)}},e.each({scrollstop:"scrollstart"},function(t,n){e.event.special[t]={setup:function(){e(this).bind(n,e.noop)},teardown:function(){e(this).unbind(n)}}}),e.event.special}),function(t){typeof define=="function"&&define.amd?define("events/throttledresize",["jquery"],t):t(e)}(function(e){var t=250,n=0,r,i,s,o=function(){i=(new Date).getTime(),s=i-n,s>=t?(n=i,e(this).trigger("throttledresize")):(r&&clearTimeout(r),r=setTimeout(o,t-s))};return e.event.special.throttledresize={setup:function(){e(this).bind("resize",o)},teardown:function(){e(this).unbind("resize",o)}},e.event.special.throttledresize}),function(t){typeof define=="function"&&define.amd?define("events/orientationchange",["jquery","../support/orientation","./throttledresize"],t):t(e)}(function(e){function p(){var e=s();e!==o&&(o=e,r.trigger(i))}var r=e(t),i="orientationchange",s,o,u,a,f={0:!0,180:!0},l,c,h;if(e.support.orientation){l=t.innerWidth||r.width(),c=t.innerHeight||r.height(),h=50,u=l>c&&l-c>h,a=f[t.orientation];if(u&&a||!u&&!a)f={"-90":!0,90:!0}}return e.event.special.orientationchange=e.extend({},e.event.special.orientationchange,{setup:function(){if(e.support.orientation&&!e.event.special.orientationchange.disabled)return!1;o=s(),r.bind("throttledresize",p)},teardown:function(){if(e.support.orientation&&!e.event.special.orientationchange.disabled)return!1;r.unbind("throttledresize",p)},add:function(e){var t=e.handler;e.handler=function(e){return e.orientation=s(),t.apply(this,arguments)}}}),e.event.special.orientationchange.orientation=s=function(){var r=!0,i=n.documentElement;return e.support.orientation?r=f[t.orientation]:r=i&&i.clientWidth/i.clientHeight<1.1,r?"portrait":"landscape"},e.fn[i]=function(e){return e?this.bind(i,e):this.trigger(i)},e.attrFn&&(e.attrFn[i]=!0),e.event.special}),function(t){typeof define=="function"&&define.amd?define("events",["jquery","./events/navigate","./events/touch","./events/scroll","./events/orientationchange"],t):t(e)}(function(){}),function(t){typeof define=="function"&&define.amd?define("navigation/path",["jquery","./../ns"],t):t(e)}(function(e){var n,i,s="&ui-state=dialog";return e.mobile.path=n={uiStateKey:"&ui-state",urlParseRE:/^\s*(((([^:\/#\?]+:)?(?:(\/\/)((?:(([^:@\/#\?]+)(?:\:([^:@\/#\?]+))?)@)?(([^:\/#\?\]\[]+|\[[^\/\]@#?]+\])(?:\:([0-9]+))?))?)?)?((\/?(?:[^\/\?#]+\/+)*)([^\?#]*)))?(\?[^#]+)?)(#.*)?/,getLocation:function(e){var t=this.parseUrl(e||location.href),n=e?t:location,r=t.hash;return r=r==="#"?"":r,n.protocol+t.doubleSlash+n.host+(n.protocol!==""&&n.pathname.substring(0,1)!=="/"?"/":"")+n.pathname+n.search+r},getDocumentUrl:function(t){return t?e.extend({},n.documentUrl):n.documentUrl.href},parseLocation:function(){return this.parseUrl(this.getLocation())},parseUrl:function(t){if(e.type(t)==="object")return t;var r=n.urlParseRE.exec(t||"")||[];return{href:r[0]||"",hrefNoHash:r[1]||"",hrefNoSearch:r[2]||"",domain:r[3]||"",protocol:r[4]||"",doubleSlash:r[5]||"",authority:r[6]||"",username:r[8]||"",password:r[9]||"",host:r[10]||"",hostname:r[11]||"",port:r[12]||"",pathname:r[13]||"",directory:r[14]||"",filename:r[15]||"",search:r[16]||"",hash:r[17]||""}},makePathAbsolute:function(e,t){var n,r,i,s;if(e&&e.charAt(0)==="/")return e;e=e||"",t=t?t.replace(/^\/|(\/[^\/]*|[^\/]+)$/g,""):"",n=t?t.split("/"):[],r=e.split("/");for(i=0;i<r.length;i++){s=r[i];switch(s){case".":break;case"..":n.length&&n.pop();break;default:n.push(s)}}return"/"+n.join("/")},isSameDomain:function(e,t){return n.parseUrl(e).domain.toLowerCase()===n.parseUrl(t).domain.toLowerCase()},isRelativeUrl:function(e){return n.parseUrl(e).protocol===""},isAbsoluteUrl:function(e){return n.parseUrl(e).protocol!==""},makeUrlAbsolute:function(e,t){if(!n.isRelativeUrl(e))return e;t===r&&(t=this.documentBase);var i=n.parseUrl(e),s=n.parseUrl(t),o=i.protocol||s.protocol,u=i.protocol?i.doubleSlash:i.doubleSlash||s.doubleSlash,a=i.authority||s.authority,f=i.pathname!=="",l=n.makePathAbsolute(i.pathname||s.filename,s.pathname),c=i.search||!f&&s.search||"",h=i.hash;return o+u+a+l+c+h},addSearchParams:function(t,r){var i=n.parseUrl(t),s=typeof r=="object"?e.param(r):r,o=i.search||"?";return i.hrefNoSearch+o+(o.charAt(o.length-1)!=="?"?"&":"")+s+(i.hash||"")},convertUrlToDataUrl:function(e){var r=e,i=n.parseUrl(e);return n.isEmbeddedPage(i)?r=i.hash.split(s)[0].replace(/^#/,"").replace(/\?.*$/,""):n.isSameDomain(i,this.documentBase)&&(r=i.hrefNoHash.replace(this.documentBase.domain,"").split(s)[0]),t.decodeURIComponent(r)},get:function(e){return e===r&&(e=n.parseLocation().hash),n.stripHash(e).replace(/[^\/]*\.[^\/*]+$/,"")},set:function(e){location.hash=e},isPath:function(e){return/\//.test(e)},clean:function(e){return e.replace(this.documentBase.domain,"")},stripHash:function(e){return e.replace(/^#/,"")},stripQueryParams:function(e){return e.replace(/\?.*$/,"")},cleanHash:function(e){return n.stripHash(e.replace(/\?.*$/,"").replace(s,""))},isHashValid:function(e){return/^#[^#]+$/.test(e)},isExternal:function(e){var t=n.parseUrl(e);return!!t.protocol&&t.domain.toLowerCase()!==this.documentUrl.domain.toLowerCase()},hasProtocol:function(e){return/^(:?\w+:)/.test(e)},isEmbeddedPage:function(e){var t=n.parseUrl(e);return t.protocol!==""?!this.isPath(t.hash)&&t.hash&&(t.hrefNoHash===this.documentUrl.hrefNoHash||this.documentBaseDiffers&&t.hrefNoHash===this.documentBase.hrefNoHash):/^#/.test(t.href)},squash:function(e,t){var r,i,s,o,u,a=this.isPath(e),f=this.parseUrl(e),l=f.hash,c="";t||(a?t=n.getLocation():(u=n.getDocumentUrl(!0),n.isPath(u.hash)?t=n.squash(u.href):t=u.href)),i=a?n.stripHash(e):e,i=n.isPath(f.hash)?n.stripHash(f.hash):i,o=i.indexOf(this.uiStateKey),o>-1&&(c=i.slice(o),i=i.slice(0,o)),r=n.makeUrlAbsolute(i,t),s=this.parseUrl(r).search;if(a){if(n.isPath(l)||l.replace("#","").indexOf(this.uiStateKey)===0)l="";c&&l.indexOf(this.uiStateKey)===-1&&(l+=c),l.indexOf("#")===-1&&l!==""&&(l="#"+l),r=n.parseUrl(r),r=r.protocol+r.doubleSlash+r.host+r.pathname+s+l}else r+=r.indexOf("#")>-1?c:"#"+c;return r},isPreservableHash:function(e){return e.replace("#","").indexOf(this.uiStateKey)===0},hashToSelector:function(e){var t=e.substring(0,1)==="#";return t&&(e=e.substring(1)),(t?"#":"")+e.replace(/([!"#$%&'()*+,./:;<=>?@[\]^`{|}~])/g,"\\$1")},getFilePath:function(e){return e&&e.split(s)[0]},isFirstPageUrl:function(t){var i=n.parseUrl(n.makeUrlAbsolute(t,this.documentBase)),s=i.hrefNoHash===this.documentUrl.hrefNoHash||this.documentBaseDiffers&&i.hrefNoHash===this.documentBase.hrefNoHash,o=e.mobile.firstPage,u=o&&o[0]?o[0].id:r;return s&&(!i.hash||i.hash==="#"||u&&i.hash.replace(/^#/,"")===u)},isPermittedCrossDomainRequest:function(t,n){return e.mobile.allowCrossDomainPages&&(t.protocol==="file:"||t.protocol==="content:")&&n.search(/^https?:/)!==-1}},n.documentUrl=n.parseLocation(),i=e("head").find("base"),n.documentBase=i.length?n.parseUrl(n.makeUrlAbsolute(i.attr("href"),n.documentUrl.href)):n.documentUrl,n.documentBaseDiffers=n.documentUrl.hrefNoHash!==n.documentBase.hrefNoHash,n.getDocumentBase=function(t){return t?e.extend({},n.documentBase):n.documentBase.href},n}),function(t){typeof define=="function"&&define.amd?define("navigation/base",["jquery","./path","./../ns"],t):t(e)}(function(e){var t,n=e("head").children("base"),i=function(){return e.mobile.dynamicBaseEnabled!==r?e.mobile.dynamicBaseEnabled:t.dynamicBaseEnabled};return t={dynamicBaseEnabled:!0,element:function(){if(!n||!n.length)n=e("<base>",{href:e.mobile.path.documentBase.hrefNoSearch}).prependTo(e("head"));return n},set:function(n){if(!i())return;t.element().attr("href",e.mobile.path.makeUrlAbsolute(n,e.mobile.path.documentBase))},reset:function(){if(!i())return;t.element().attr("href",e.mobile.path.documentBase.hrefNoSearch)}},e.mobile.base=t,t}),function(t){typeof define=="function"&&define.amd?define("navigation/history",["jquery","./../ns","./path"],t):t(e)}(function(e){return e.mobile.History=function(e,t){this.stack=e||[],this.activeIndex=t||0},e.extend(e.mobile.History.prototype,{getActive:function(){return this.stack[this.activeIndex]},getLast:function(){return this.stack[this.previousIndex]},getNext:function(){return this.stack[this.activeIndex+1]},getPrev:function(){return this.stack[this.activeIndex-1]},add:function(e,t){t=t||{},this.getNext()&&this.clearForward(),t.hash&&t.hash.indexOf("#")===-1&&(t.hash="#"+t.hash),t.url=e,this.stack.push(t),this.activeIndex=this.stack.length-1},clearForward:function(){this.stack=this.stack.slice(0,this.activeIndex+1)},find:function(e,t,n){t=t||this.stack;var r,i,s=t.length,o;for(i=0;i<s;i++){r=t[i];if(decodeURIComponent(e)===decodeURIComponent(r.url)||decodeURIComponent(e)===decodeURIComponent(r.hash)){o=i;if(n)return o}}return o},_findById:function(e){var t,n=this.stack.length;for(t=0;t<n;t++)if(this.stack[t].id===e)break;return t<n?t:r},closest:function(e,t){var n=t===r?r:this._findById(t),i=this.activeIndex;return n!==r?n:(n=this.find(e,this.stack.slice(0,i)),n===r&&(n=this.find(e,this.stack.slice(i),!0),n=n===r?n:n+i),n)},direct:function(t){var n=this.closest(t.url,t.id),i=this.activeIndex;n!==r&&(this.activeIndex=n,this.previousIndex=i),n<i?(t.present||t.back||e.noop)(this.getActive(),"back"):n>i?(t.present||t.forward||e.noop)(this.getActive(),"forward"):n===r&&t.missing&&t.missing(this.getActive())}}),e.mobile.History}),function(t){typeof define=="function"&&define.amd?define("navigation/navigator",["jquery","./../ns","../events/navigate","./path","./history"],t):t(e)}(function(e){var r=e.mobile.path,i=location.href;return e.mobile.Navigator=function(t){this.history=t,this.ignoreInitialHashChange=!0,e.mobile.window.bind({"popstate.history":e.proxy(this.popstate,this),"hashchange.history":e.proxy(this.hashchange,this)})},e.extend(e.mobile.Navigator.prototype,{historyEntryId:0,squash:function(s,o){var u,a,f=r.isPath(s)?r.stripHash(s):s;return a=r.squash(s),u=e.extend({id:++this.historyEntryId,hash:f,url:a},o),t.history&&t.history.replaceState&&t.history.replaceState(u,u.title||n.title,a),this.ignoreInitialHashChange&&(i=a),u},hash:function(e,t){var n,i,s,o;return n=r.parseUrl(e),i=r.parseLocation(),i.pathname+i.search===n.pathname+n.search?s=n.hash?n.hash:n.pathname+n.search:r.isPath(e)?(o=r.parseUrl(t),s=o.pathname+o.search+(r.isPreservableHash(o.hash)?o.hash.replace("#",""):"")):s=e,s},go:function(i,s,o){var u,a,f,l,c=e.event.special.navigate.isPushStateEnabled();a=r.squash(i),f=this.hash(i,a),o&&f!==r.stripHash(r.parseLocation().hash)&&(this.preventNextHashChange=o),this.preventHashAssignPopState=!0,t.location.hash=f,this.preventHashAssignPopState=!1,u=e.extend({url:a,hash:f,title:n.title},s),c&&(l=new e.Event("popstate"),l.originalEvent=new e.Event("popstate",{state:null}),u.id=(this.squash(i,u)||{}).id,o||(this.ignorePopState=!0,e.mobile.window.trigger(l))),this.history.add(u.url,u)},popstate:function(t){var n,s;if(!e.event.special.navigate.isPushStateEnabled())return;if(this.preventHashAssignPopState){this.preventHashAssignPopState=!1,t.stopImmediatePropagation();return}if(this.ignorePopState){this.ignorePopState=!1;return}if(!t.originalEvent.state&&this.history.stack.length===1&&this.ignoreInitialHashChange){this.ignoreInitialHashChange=!1;if(location.href===i){t.preventDefault();return}}n=r.parseLocation().hash;if(!t.originalEvent.state&&n){s=this.squash(n),this.history.add(s.url,s),t.historyState=s;return}this.history.direct({id:(t.originalEvent.state||{}).id,url:(t.originalEvent.state||{}).url||n,present:function(n,r){t.historyState=e.extend({},n),t.historyState.direction=r}})},hashchange:function(t){var i,s;if(!e.event.special.navigate.isHashChangeEnabled()||e.event.special.navigate.isPushStateEnabled())return;if(this.preventNextHashChange){this.preventNextHashChange=!1,t.stopImmediatePropagation();return}i=this.history,s=r.parseLocation().hash,this.history.direct({url:s,present:function(n,r){t.hashchangeState=e.extend({},n),t.hashchangeState.direction=r},missing:function(){i.add(s,{hash:s,title:n.title})}})}}),e.mobile.Navigator}),function(t){typeof define=="function"&&define.amd?define("navigation/method",["jquery","./path","./history","./navigator"],t):t(e)}(function(e){e.mobile.navigate=function(t,n,r){e.mobile.navigate.navigator.go(t,n,r)},e.mobile.navigate.history=new e.mobile.History,e.mobile.navigate.navigator=new e.mobile.Navigator(e.mobile.navigate.history);var t=e.mobile.path.parseLocation();return e.mobile.navigate.history.add(t.href,{hash:t.hash}),e.mobile.navigate}),function(t){typeof define=="function"&&define.amd?define("transitions/transition",["jquery","../core","../events/scroll","../animationComplete"],t):t(e)}(function(e){return e.mobile.Transition=function(){this.init.apply(this,arguments)},e.extend(e.mobile.Transition.prototype,{toPreClass:" ui-page-pre-in",init:function(t,n,r,i){e.extend(this,{name:t,reverse:n,$to:r,$from:i,deferred:new e.Deferred})},cleanFrom:function(){this.$from.removeClass("ui-page-active out in reverse "+this.name).height("")},beforeDoneIn:function(){},beforeDoneOut:function(){},beforeStartOut:function(){},doneIn:function(){this.beforeDoneIn(),this.$to.removeClass("out in reverse "+this.name).height(""),this.toggleViewportClass(),e.mobile.window.scrollTop()!==this.toScroll&&this.scrollPage(),this.sequential||this.$to.addClass("ui-page-active"),this.deferred.resolve(this.name,this.reverse,this.$to,this.$from,!0)},doneOut:function(e,t,n,r){this.beforeDoneOut(),this.startIn(e,t,n,r)},hideIn:function(e){this.$to.css("z-index",-10),e.call(this),this.$to.css("z-index","")},scrollPage:function(){e.event.special.scrollstart.enabled=!1,(e.mobile.hideUrlBar||this.toScroll!==e.mobile.defaultHomeScroll)&&t.scrollTo(0,this.toScroll),setTimeout(function(){e.event.special.scrollstart.enabled=!0},150)},startIn:function(t,n,r,i){this.hideIn(function(){this.$to.addClass("ui-page-active"+this.toPreClass),i||e.mobile.focusPage(this.$to),this.$to.height(t+this.toScroll),r||this.scrollPage()}),this.$to.removeClass(this.toPreClass).addClass(this.name+" in "+n),r?this.doneIn():this.$to.animationComplete(e.proxy(function(){this.doneIn()},this))},startOut:function(t,n,r){this.beforeStartOut(t,n,r),this.$from.height(t+e.mobile.window.scrollTop()).addClass(this.name+" out"+n)},toggleViewportClass:function(){this.$to.closest(".ui-pagecontainer").toggleClass("ui-mobile-viewport-transitioning viewport-"+this.name)},transition:function(n){var r,i=this.reverse?" reverse":"",s=e(t).height(),o=e.mobile.maxTransitionWidth!==!1&&e.mobile.window.width()>e.mobile.maxTransitionWidth;return this.toScroll=n?n:0,r=!e.support.cssTransitions||!e.support.cssAnimations||o||!this.name||this.name==="none"||Math.max(e.mobile.window.scrollTop(),this.toScroll)>e.mobile.getMaxScrollForTransition(),this.toggleViewportClass(),this.$from&&!r?this.startOut(s,i,r):this.doneOut(s,i,r,!0),this.deferred.promise()}}),e.mobile.Transition}),function(t){typeof define=="function"&&define.amd?define("transitions/concurrent",["jquery","./transition"],t):t(e)}(function(e){return e.mobile.ConcurrentTransition=function(){this.init.apply(this,arguments)},e.extend(e.mobile.ConcurrentTransition.prototype,e.mobile.Transition.prototype,{sequential:!1,beforeDoneIn:function(){this.$from&&this.cleanFrom()},beforeStartOut:function(e,t,n){this.doneOut(e,t,n)}}),e.mobile.ConcurrentTransition}),function(t){typeof define=="function"&&define.amd?define("transitions/serial",["jquery","../animationComplete","./transition"],t):t(e)}(function(e){return e.mobile.SerialTransition=function(){this.init.apply(this,arguments)},e.extend(e.mobile.SerialTransition.prototype,e.mobile.Transition.prototype,{sequential:!0,beforeDoneOut:function(){this.$from&&this.cleanFrom()},beforeStartOut:function(t,n,r){this.$from.animationComplete(e.proxy(function(){this.doneOut(t,n,r)},this))}}),e.mobile.SerialTransition}),function(t){typeof define=="function"&&define.amd?define("transitions/handlers",["jquery","../core","./serial","./concurrent"],t):t(e)}(function(e){var n=function(){return e(t).height()*3};return e.mobile.transitionHandlers={sequential:e.mobile.SerialTransition,simultaneous:e.mobile.ConcurrentTransition},e.mobile.defaultTransitionHandler=e.mobile.transitionHandlers.sequential,e.mobile.transitionFallbacks={},e.mobile._maybeDegradeTransition=function(t){return t&&!e.support.cssTransform3d&&e.mobile.transitionFallbacks[t]&&(t=e.mobile.transitionFallbacks[t]),t},e.mobile.getMaxScrollForTransition=e.mobile.getMaxScrollForTransition||n,e.mobile.transitionHandlers}),function(t){typeof define=="function"&&define.amd?define("jquery-ui/widget",["jquery","./version"],t):t(e)}(function(e){var t=0,n=Array.prototype.slice;return e.cleanData=function(t){return function(n){var r,i,s;for(s=0;(i=n[s])!=null;s++)try{r=e._data(i,"events"),r&&r.remove&&e(i).triggerHandler("remove")}catch(o){}t(n)}}(e.cleanData),e.widget=function(t,n,r){var i,s,o,u={},a=t.split(".")[0];t=t.split(".")[1];var f=a+"-"+t;return r||(r=n,n=e.Widget),e.isArray(r)&&(r=e.extend.apply(null,[{}].concat(r))),e.expr[":"][f.toLowerCase()]=function(t){return!!e.data(t,f)},e[a]=e[a]||{},i=e[a][t],s=e[a][t]=function(e,t){if(!this._createWidget)return new s(e,t);arguments.length&&this._createWidget(e,t)},e.extend(s,i,{version:r.version,_proto:e.extend({},r),_childConstructors:[]}),o=new n,o.options=e.widget.extend({},o.options),e.each(r,function(t,r){if(!e.isFunction(r)){u[t]=r;return}u[t]=function(){function e(){return n.prototype[t].apply(this,arguments)}function i(e){return n.prototype[t].apply(this,e)}return function(){var t=this._super,n=this._superApply,s;return this._super=e,this._superApply=i,s=r.apply(this,arguments),this._super=t,this._superApply=n,s}}()}),s.prototype=e.widget.extend(o,{widgetEventPrefix:i?o.widgetEventPrefix||t:t},u,{constructor:s,namespace:a,widgetName:t,widgetFullName:f}),i?(e.each(i._childConstructors,function(t,n){var r=n.prototype;e.widget(r.namespace+"."+r.widgetName,s,n._proto)}),delete i._childConstructors):n._childConstructors.push(s),e.widget.bridge(t,s),s},e.widget.extend=function(t){var i=n.call(arguments,1),s=0,o=i.length,u,a;for(;s<o;s++)for(u in i[s])a=i[s][u],i[s].hasOwnProperty(u)&&a!==r&&(e.isPlainObject(a)?t[u]=e.isPlainObject(t[u])?e.widget.extend({},t[u],a):e.widget.extend({},a):t[u]=a);return t},e.widget.bridge=function(t,i){var s=i.prototype.widgetFullName||t;e.fn[t]=function(o){var u=typeof o=="string",a=n.call(arguments,1),f=this;return u?!this.length&&o==="instance"?f=r:this.each(function(){var n,i=e.data(this,s);if(o==="instance")return f=i,!1;if(!i)return e.error("cannot call methods on "+t+" prior to initialization; "+"attempted to call method '"+o+"'");if(!e.isFunction(i[o])||o.charAt(0)==="_")return e.error("no such method '"+o+"' for "+t+" widget instance");n=i[o].apply(i,a);if(n!==i&&n!==r)return f=n&&n.jquery?f.pushStack(n.get()):n,!1}):(a.length&&(o=e.widget.extend.apply(null,[o].concat(a))),this.each(function(){var t=e.data(this,s);t?(t.option(o||{}),t._init&&t._init()):e.data(this,s,new i(o,this))})),f}},e.Widget=function(){},e.Widget._childConstructors=[],e.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{classes:{},disabled:!1,create:null},_createWidget:function(n,r){r=e(r||this.defaultElement||this)[0],this.element=e(r),this.uuid=t++,this.eventNamespace="."+this.widgetName+this.uuid,this.bindings=e(),this.hoverable=e(),this.focusable=e(),this.classesElementLookup={},r!==this&&(e.data(r,this.widgetFullName,this),this._on(!0,this.element,{remove:function(e){e.target===r&&this.destroy()}}),this.document=e(r.style?r.ownerDocument:r.document||r),this.window=e(this.document[0].defaultView||this.document[0].parentWindow)),this.options=e.widget.extend({},this.options,this._getCreateOptions(),n),this._create(),this.options.disabled&&this._setOptionDisabled(this.options.disabled),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:function(){return{}},_getCreateEventData:e.noop,_create:e.noop,_init:e.noop,destroy:function(){var t=this;this._destroy(),e.each(this.classesElementLookup,function(e,n){t._removeClass(n,e)}),this.element.off(this.eventNamespace).removeData(this.widgetFullName),this.widget().off(this.eventNamespace).removeAttr("aria-disabled"),this.bindings.off(this.eventNamespace)},_destroy:e.noop,widget:function(){return this.element},option:function(t,n){var i=t,s,o,u;if(arguments.length===0)return e.widget.extend({},this.options);if(typeof t=="string"){i={},s=t.split("."),t=s.shift();if(s.length){o=i[t]=e.widget.extend({},this.options[t]);for(u=0;u<s.length-1;u++)o[s[u]]=o[s[u]]||{},o=o[s[u]];t=s.pop();if(arguments.length===1)return o[t]===r?null:o[t];o[t]=n}else{if(arguments.length===1)return this.options[t]===r?null:this.options[t];i[t]=n}}return this._setOptions(i),this},_setOptions:function(e){var t;for(t in e)this._setOption(t,e[t]);return this},_setOption:function(e,t){return e==="classes"&&this._setOptionClasses(t),this.options[e]=t,e==="disabled"&&this._setOptionDisabled(t),this},_setOptionClasses:function(t){var n,r,i;for(n in t){i=this.classesElementLookup[n];if(t[n]===this.options.classes[n]||!i||!i.length)continue;r=e(i.get()),this._removeClass(i,n),r.addClass(this._classes({element:r,keys:n,classes:t,add:!0}))}},_setOptionDisabled:function(e){this._toggleClass(this.widget(),this.widgetFullName+"-disabled",null,!!e),e&&(this._removeClass(this.hoverable,null,"ui-state-hover"),this._removeClass(this.focusable,null,"ui-state-focus"))},enable:function(){return this._setOptions({disabled:!1})},disable:function(){return this._setOptions({disabled:!0})},_classes:function(t){function i(i,s){var o,u;for(u=0;u<i.length;u++)o=r.classesElementLookup[i[u]]||e(),t.add?o=e(e.unique(o.get().concat(t.element.get()))):o=e(o.not(t.element).get()),r.classesElementLookup[i[u]]=o,n.push(i[u]),s&&t.classes[i[u]]&&n.push(t.classes[i[u]])}var n=[],r=this;return t=e.extend({element:this.element,classes:this.options.classes||{}},t),this._on(t.element,{remove:"_untrackClassesElement"}),t.keys&&i(t.keys.match(/\S+/g)||[],!0),t.extra&&i(t.extra.match(/\S+/g)||[]),n.join(" ")},_untrackClassesElement:function(t){var n=this;e.each(n.classesElementLookup,function(r,i){e.inArray(t.target,i)!==-1&&(n.classesElementLookup[r]=e(i.not(t.target).get()))})},_removeClass:function(e,t,n){return this._toggleClass(e,t,n,!1)},_addClass:function(e,t,n){return this._toggleClass(e,t,n,!0)},_toggleClass:function(e,t,n,r){r=typeof r=="boolean"?r:n;var i=typeof e=="string"||e===null,s={extra:i?t:n,keys:i?e:t,element:i?this.element:e,add:r};return s.element.toggleClass(this._classes(s),r),this},_on:function(t,n,r){var i,s=this;typeof t!="boolean"&&(r=n,n=t,t=!1),r?(n=i=e(n),this.bindings=this.bindings.add(n)):(r=n,n=this.element,i=this.widget()),e.each(r,function(r,o){function u(){if(!t&&(s.options.disabled===!0||e(this).hasClass("ui-state-disabled")))return;return(typeof o=="string"?s[o]:o).apply(s,arguments)}typeof o!="string"&&(u.guid=o.guid=o.guid||u.guid||e.guid++);var a=r.match(/^([\w:-]*)\s*(.*)$/),f=a[1]+s.eventNamespace,l=a[2];l?i.on(f,l,u):n.on(f,u)})},_off:function(t,n){n=(n||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,t.off(n).off(n),this.bindings=e(this.bindings.not(t).get()),this.focusable=e(this.focusable.not(t).get()),this.hoverable=e(this.hoverable.not(t).get())},_delay:function(e,t){function n(){return(typeof e=="string"?r[e]:e).apply(r,arguments)}var r=this;return setTimeout(n,t||0)},_hoverable:function(t){this.hoverable=this.hoverable.add(t),this._on(t,{mouseenter:function(t){this._addClass(e(t.currentTarget),null,"ui-state-hover")},mouseleave:function(t){this._removeClass(e(t.currentTarget),null,"ui-state-hover")}})},_focusable:function(t){this.focusable=this.focusable.add(t),this._on(t,{focusin:function(t){this._addClass(e(t.currentTarget),null,"ui-state-focus")},focusout:function(t){this._removeClass(e(t.currentTarget),null,"ui-state-focus")}})},_trigger:function(t,n,r){var i,s,o=this.options[t];r=r||{},n=e.Event(n),n.type=(t===this.widgetEventPrefix?t:this.widgetEventPrefix+t).toLowerCase(),n.target=this.element[0],s=n.originalEvent;if(s)for(i in s)i in n||(n[i]=s[i]);return this.element.trigger(n,r),!(e.isFunction(o)&&o.apply(this.element[0],[n].concat(r))===!1||n.isDefaultPrevented())}},e.each({show:"fadeIn",hide:"fadeOut"},function(t,n){e.Widget.prototype["_"+t]=function(r,i,s){typeof i=="string"&&(i={effect:i});var o,u=i?i===!0||typeof i=="number"?n:i.effect||n:t;i=i||{},typeof i=="number"&&(i={duration:i}),o=!e.isEmptyObject(i),i.complete=s,i.delay&&r.delay(i.delay),o&&e.effects&&e.effects.effect[u]?r[t](i):u!==t&&r[u]?r[u](i.duration,i.easing,s):r.queue(function(n){e(this)[t](),s&&s.call(r[0]),n()})}}),e.widget}),function(t){typeof define=="function"&&define.amd?define("widget",["jquery","./ns","jquery-ui/widget","./data"],t):t(e)}(function(e){return e.mobile.widget=e.mobile.widget||{}}),function(t){typeof define=="function"&&define.amd?define("widgets/enhancer",["jquery"],t):t(e)}(function(e){var t,n=!1;return e.fn.extend({enhance:function(){return e.enhance.enhance(this)},enhanceWithin:function(){return this.children().enhance(),this},enhanceOptions:function(){return e.enhance.getOptions(this)},enhanceRoles:function(){return e.enhance.getRoles(this)}}),e.enhance=e.enhance||{},e.extend(e.enhance,{enhance:function(t){var n,r=t.find("["+e.enhance.defaultProp()+"]").addBack();e.enhance._filter&&(r=e.enhance._filter(r));for(n=0;n<e.enhance.hooks.length;n++)e.enhance.hooks[n].call(t,r);return e.enhance.defaultFunction.call(t,r),t},hooks:e.enhance.hooks||[],_filter:e.enhance._filter||!1,defaultProp:e.enhance.defaultProp||function(){return"data-ui-role"},defaultFunction:function(t){t.each(function(){var t,n=e(this).enhanceRoles();for(t=0;t<n.length;t++)e.fn[n[t]]&&e(this)[n[t]]()})},cache:!0,roleCache:{},getRoles:function(t){if(!t.length)return[];var n,i=e.enhance.roleCache[t[0].id?t[0].id:r];return i?i:(n=t.attr(e.enhance.defaultProp()),i=n?n.match(/\S+/g):[],e.enhance.roleCache[t[0].id]=i,i)},optionCache:{},getOptions:function(t){var n=e.enhance.optionCache[t[0].id?t[0].id:r],i;return n?n:(n={},i=(e.mobile.ns||"ui-").replace("-",""),e.each(e(t).data(),function(e,t){e=e.replace(i,""),e=e.charAt(0).toLowerCase()+e.slice(1),n[e]=t}),e.enhance.optionCache[t[0].id]=n,n)},_installWidget:function(){e.Widget&&!n&&(e.extend(e.Widget.prototype,{_getCreateOptions:function(e){var t,n,i=this.element.enhanceOptions();e=e||{};for(t in this.options)n=i[t],n!==r&&(e[t]=n);return e}}),n=!0)}}),e.Widget?e.enhance._installWidget():Object.defineProperty(e,"Widget",{configurable:!0,enumerable:!0,get:function(){return t},set:function(n){n&&(t=n,setTimeout(function(){e.enhance._installWidget()}))}}),e.enhance}),function(t){typeof define=="function"&&define.amd?define("widgets/widget.theme",["jquery","../core","../widget"],t):t(e)}(function(e){return e.mobile.widget.theme={_create:function(){var t=this;this._super(),e.each(this._themeElements(),function(e,n){t._addClass(n.element,null,n.prefix+t.options[n.option||"theme"])})},_setOption:function(t,n){var r=this;e.each(this._themeElements(),function(e,i){var s=i.option||"theme";s===t&&r._removeClass(i.element,null,i.prefix+r.options[i.option||"theme"])._addClass(i.element,null,i.prefix+n)}),this._superApply(arguments)}},e.mobile.widget.theme}),function(t){typeof define=="function"&&define.amd?define("widgets/loader",["jquery","../helpers","../defaults","./widget.theme","../widget"],t):t(e)}(function(e){var t=e("html");return e.widget("mobile.loader",{version:"@VERSION",options:{classes:{"ui-loader":"ui-corner-all","ui-loader-icon":"ui-icon-loading"},enhanced:!1,theme:"a",textVisible:!1,text:"loading"},_create:function(){this.loader={},this.options.enhanced?(this.loader.span=this.element.children("span"),this.loader.header=this.element.children("h1")):(this.loader.span=e("<span>"),this.loader.header=e("<h1>")),this._addClass("ui-loader"),this._addClass(this.loader.span,"ui-loader-icon"),this._addClass(this.loader.header,"ui-loader-header"),this.options.enhanced||this.element.append(this.loader.span).append(this.loader.header)},_themeElements:function(){return[{element:this.element,prefix:"ui-body-"}]},show:function(n,r,i){var s,o,u,a;e.type(n)==="object"?(u=e.extend({},this.options,n),n=u.theme):(u=this.options,n=n||u.theme),o=r||(u.text===!1?"":u.text),this._addClass(t,"ui-loading"),s=u.textVisible,a=this.element.attr("class").match(/\bui-body-[a-z]\b/)||[],this._removeClass.apply(this,["ui-loader-verbose ui-loader-default ui-loader-textonly"].concat(a))._addClass("ui-loader-"+(s||r||n.text?"verbose":"default")+(u.textonly||i?" ui-loader-textonly":""),"ui-body-"+n),this.loader.header.text(o),this.element.appendTo(e.mobile.pagecontainer?e(":mobile-pagecontainer"):e("body"))},hide:function(){this._removeClass(t,"ui-loading")}}),e.widget("mobile.loader",e.mobile.loader,e.mobile.widget.theme)}),function(t){typeof define=="function"&&define.amd?define("widgets/enhancer.widgetCrawler",["jquery","../core","widgets/enhancer"],t):t(e)}(function(e){var t=function(n,r){e.each(r,function(r,i){var s=i.prototype,o=e.enhance,u=o.initGenerator(s),a;if(!u)return;a=n.find(u),o._filter&&(a=o._filter(a)),a[s.widgetName](),i._childConstructors&&i._childConstructors.length>0&&t(n,i._childConstructors)})},n=function(){if(!e.enhance.initGenerator||!e.Widget)return;t(this.addBack(),e.Widget._childConstructors)};return e.enhance.hooks.push(n),e.enhance}),function(t){typeof define=="function"&&define.amd?define("widgets/enhancer.backcompat",["jquery","widgets/enhancer","widgets/enhancer.widgetCrawler"],t):t(e)}(function(e){if(e.mobileBackcompat!==!1){var t=function(t){return t=t.not(e.mobile.keepNative),e.mobile.ignoreContentEnabled&&t.each(function(){e(this).closest("[data-"+e.mobile.ns+"enhance='false']").length&&(t=t.not(this))}),t},n=function(t){return t.initSelector||e[t.namespace][t.widgetName].prototype.initSelector||!1};e.enhance._filter=t,e.enhance.defaultProp=function(){return"data-"+e.mobile.ns+"role"},e.enhance.initGenerator=n}return e.enhance}),function(t){typeof define=="function"&&define.amd?define("widgets/page",["jquery","../widget","./widget.theme","../core","widgets/enhancer","widgets/enhancer.backcompat","widgets/enhancer.widgetCrawler"],t):t(e)}(function(e){return e.widget("mobile.page",{version:"@VERSION",options:{theme:"a",domCache:!1,enhanceWithin:!0,enhanced:!1},_create:function(){if(this._trigger("beforecreate")===!1)return!1;this._establishStructure(),this._setAttributes(),this._attachToDOM(),this._addHandlers(),this.options.enhanceWithin&&this.element.enhanceWithin()},_establishStructure:e.noop,_setAttributes:function(){this.options.role&&this.element.attr("data-"+e.mobile.ns+"role",this.options.role),this.element.attr("tabindex","0"),this._addClass("ui-page")},_attachToDOM:e.noop,_addHandlers:function(){this._on(this.element,{pagebeforehide:"_handlePageBeforeHide",pagebeforeshow:"_handlePageBeforeShow"})},bindRemove:function(t){var n=this.element;!n.data("mobile-page").options.domCache&&n.is(":jqmData(external-page='true')")&&this._on(this.document,{pagecontainerhide:t||function(t,n){if(n.prevPage[0]!==this.element[0])return;if(!n.samePage){var r=new e.Event("pageremove");this._trigger("remove",r),r.isDefaultPrevented()||this.element.removeWithDependents()}}})},_themeElements:function(){return[{element:this.element,prefix:"ui-page-theme-"}]},_handlePageBeforeShow:function(){this._setContainerSwatch(this.options.theme)},_handlePageBeforeHide:function(){this._setContainerSwatch("none")},_setContainerSwatch:function(e){var t=this.element.parent().pagecontainer("instance");t&&t.option("theme",e)}}),e.widget("mobile.page",e.mobile.page,e.mobile.widget.theme),e.mobile.page}),function(t){typeof define=="function"&&define.amd?define("jquery-ui/safe-active-element",["jquery","./version"],t):t(e)}(function(e){return e.ui.safeActiveElement=function(e){var t;try{t=e.activeElement}catch(n){t=e.body}return t||(t=e.body),t.nodeName||(t=e.body),t}}),function(t){typeof define=="function"&&define.amd?define("jquery-ui/safe-blur",["jquery","./version"],t):t(e)}(function(e){return e.ui.safeBlur=function(t){t&&t.nodeName.toLowerCase()!=="body"&&e(t).trigger("blur")}}),function(t){typeof define=="function"&&define.amd?define("widgets/pagecontainer",["jquery","../core","jquery-ui/safe-active-element","jquery-ui/safe-blur","jquery-ui/widget","../navigation/path","../navigation/base","../events/navigate","../navigation/history","../navigation/navigator","../navigation/method","../events/scroll","../support","../widgets/page"],t):t(e)}(function(e){var i=[],s=!1;return e.widget("mobile.pagecontainer",{version:"@VERSION",options:{theme:"a",changeOptions:{transition:r,reverse:!1,changeUrl:!0,changeHash:!0,fromHashChange:!1,duplicateCachedPage:r,showLoadMsg:!0,dataUrl:r,fromPage:r,allowSamePageTransition:!1}},initSelector:!1,_create:function(){var t=this.options;t.changeUrl=t.changeUrl?t.changeUrl:t.changeHash?!0:!1,e.mobile.pagecontainers=(e.mobile.pagecontainers?e.mobile.pagecontainers:[]).concat([this]),e.mobile.pagecontainers.active=this,this._trigger("beforecreate"),this.setLastScrollEnabled=!0,this._on(this.window,{navigate:"_disableRecordScroll",scrollstop:"_delayedRecordScroll"}),this._on(this.window,{navigate:"_filterNavigateEvents"}),this._on({pagechange:"_afterContentChange"}),this._addClass("ui-pagecontainer","ui-mobile-viewport"),this.window.one("navigate",e.proxy(function(){this.setLastScrollEnabled=!0},this))},_setOptions:function(e){e.theme!==r&&e.theme!=="none"?this._removeClass(null,"ui-overlay-"+this.options.theme)._addClass(null,"ui-overlay-"+e.theme):e.theme!==r&&this._removeClass(null,"ui-overlay-"+this.options.theme),this._super(e)},_disableRecordScroll:function(){this.setLastScrollEnabled=!1},_enableRecordScroll:function(){this.setLastScrollEnabled=!0},_afterContentChange:function(){this.setLastScrollEnabled=!0,this._off(this.window,"scrollstop"),this._on(this.window,{scrollstop:"_delayedRecordScroll"})},_recordScroll:function(){if(!this.setLastScrollEnabled)return;var e=this._getActiveHistory(),t,n;e&&(t=this._getScroll(),n=this._getDefaultScroll(),e.lastScroll=t<n?n:t)},_delayedRecordScroll:function(){setTimeout(e.proxy(this,"_recordScroll"),100)},_getScroll:function(){return this.window.scrollTop()},_getDefaultScroll:function(){return e.mobile.defaultHomeScroll},_filterNavigateEvents:function(t,n){var r;if(t.originalEvent&&t.originalEvent.isDefaultPrevented())return;r=t.originalEvent.type.indexOf("hashchange")>-1?n.state.hash:n.state.url,r||(r=this._getHash());if(!r||r==="#"||r.indexOf("#"+e.mobile.path.uiStateKey)===0)r=location.href;this._handleNavigate(r,n.state)},_getHash:function(){return e.mobile.path.parseLocation().hash},getActivePage:function(){return this.activePage},_getInitialContent:function(){return e.mobile.firstPage},_getHistory:function(){return e.mobile.navigate.history},_getActiveHistory:function(){return this._getHistory().getActive()},_getDocumentBase:function(){return e.mobile.path.documentBase},back:function(){this.go(-1)},forward:function(){this.go(1)},go:function(n){if(e.mobile.hashListeningEnabled)t.history.go(n);else{var r=e.mobile.navigate.history.activeIndex,i=r+parseInt(n,10),s=e.mobile.navigate.history.stack[i].url,o=n>=1?"forward":"back";e.mobile.navigate.history.activeIndex=i,e.mobile.navigate.history.previousIndex=r,this.change(s,{direction:o,changeUrl:!1,fromHashChange:!0})}},_handleDestination:function(t){var n;return e.type(t)==="string"&&(t=e.mobile.path.stripHash(t)),t&&(n=this._getHistory(),t=e.mobile.path.isPath(t)?t:e.mobile.path.makeUrlAbsolute("#"+t,this._getDocumentBase())),t||this._getInitialContent()},_optionFromHistory:function(e,t,n){var r=this._getHistory(),i=e==="back"?r.getLast():r.getActive();return i&&i[t]||n},_handleDialog:function(t,n){var r,i,s=this.getActivePage();return s&&!s.data("mobile-dialog")?(n.direction==="back"?this.back():this.forward(),!1):(r=n.pageUrl,i=this._getActiveHistory(),e.extend(t,{role:i.role,transition:this._optionFromHistory(n.direction,"transition",t.transition),reverse:n.direction==="back"}),r)},_handleNavigate:function(t,n){var r=e.mobile.path.stripHash(t),i=this._getHistory(),s=i.stack.length===0?"none":this._optionFromHistory(n.direction,"transition"),o={changeUrl:!1,fromHashChange:!0,reverse:n.direction==="back"};e.extend(o,n,{transition:s,allowSamePageTransition:this._optionFromHistory(n.direction,"allowSamePageTransition")});if(i.activeIndex>0&&r.indexOf(e.mobile.dialogHashKey)>-1){r=this._handleDialog(o,n);if(r===!1)return}this.change(this._handleDestination(r),o)},_getBase:function(){return e.mobile.base},_getNs:function(){return e.mobile.ns},_enhance:function(e,t){return e.page({role:t})},_include:function(e,t){e.appendTo(this.element),this._enhance(e,t.role),e.page("bindRemove")},_find:function(t){var n=this._createFileUrl(t),r=this._createDataUrl(t),i,s=this._getInitialContent();return i=this.element.children("[data-"+this._getNs()+"url='"+e.mobile.path.hashToSelector(r)+"']"),i.length===0&&r&&!e.mobile.path.isPath(r)&&(i=this.element.children(e.mobile.path.hashToSelector("#"+r)).attr("data-"+this._getNs()+"url",r).jqmData("url",r)),i.length===0&&e.mobile.path.isFirstPageUrl(n)&&s&&s.parent().length&&(i=e(s)),i},_getLoader:function(){return e.mobile.loading()},_showLoading:function(t,n,r,i){if(this._loadMsg)return;this._loadMsg=setTimeout(e.proxy(function(){this._getLoader().loader("show",n,r,i),this._loadMsg=0},this),t)},_hideLoading:function(){clearTimeout(this._loadMsg),this._loadMsg=0,this._getLoader().loader("hide")},_showError:function(){this._hideLoading(),this._showLoading(0,e.mobile.pageLoadErrorMessageTheme,e.mobile.pageLoadErrorMessage,!0),setTimeout(e.proxy(this,"_hideLoading"),1500)},_parse:function(t,n){var r,i=e("<div></div>");return i.get(0).innerHTML=t,r=i.find(":jqmData(role='page'), :jqmData(role='dialog')").first(),r.length||(r=e("<div data-"+this._getNs()+"role='page'>"+(t.split(/<\/?body[^>]*>/gmi)[1]||"")+"</div>")),r.attr("data-"+this._getNs()+"url",this._createDataUrl(n)).attr("data-"+this._getNs()+"external-page",!0),r},_setLoadedTitle:function(t,n){var r=n.match(/<title[^>]*>([^<]*)/)&&RegExp.$1;r&&!t.jqmData("title")&&(r=e("<div>"+r+"</div>").text(),t.jqmData("title",r))},_createDataUrl:function(t){return e.mobile.path.convertUrlToDataUrl(t)},_createFileUrl:function(t){return e.mobile.path.getFilePath(t)},_triggerWithDeprecated:function(t,n,r){var i=e.Event("page"+t),s=e.Event(this.widgetName+t);return(r||this.element).trigger(i,n),this._trigger(t,s,n),{deprecatedEvent:i,event:s}},_loadSuccess:function(t,n,i,s){var o=this._createFileUrl(t);return e.proxy(function(u,a,f){var l,c=new RegExp("(<[^>]+\\bdata-"+this._getNs()+"role=[\"']?page[\"']?[^>]*>)"),h=new RegExp("\\bdata-"+this._getNs()+"url=[\"']?([^\"'>]*)[\"']?");c.test(u)&&RegExp.$1&&h.test(RegExp.$1)&&RegExp.$1&&(o=e.mobile.path.getFilePath(e("<div>"+RegExp.$1+"</div>").text()),o=this.window[0].encodeURIComponent(o)),i.prefetch===r&&this._getBase().set(o),l=this._parse(u,o),this._setLoadedTitle(l,u),n.xhr=f,n.textStatus=a,n.page=l,n.content=l,n.toPage=l;if(this._triggerWithDeprecated("load",n).event.isDefaultPrevented())return;this._include(l,i),i.showLoadMsg&&this._hideLoading(),s.resolve(t,i,l)},this)},_loadDefaults:{type:"get",data:r,reload:!1,role:r,showLoadMsg:!1,loadMsgDelay:50},load:function(t,n){var i=n&&n.deferred||e.Deferred(),s=e.extend({},this._loadDefaults,n),o=null,u=e.mobile.path.makeUrlAbsolute(t,this._findBaseWithDefault()),a,f,l,c;return s.data&&s.type==="get"&&(u=e.mobile.path.addSearchParams(u,s.data),s.data=r),s.data&&s.type==="post"&&(s.reload=!0),a=this._createFileUrl(u),f=this._createDataUrl(u),o=this._find(u),o.length===0&&e.mobile.path.isEmbeddedPage(a)&&!e.mobile.path.isFirstPageUrl(a)?(i.reject(u,s),i.promise()):(this._getBase().reset(),o.length&&!s.reload?(this._enhance(o,s.role),i.resolve(u,s,o),s.prefetch||this._getBase().set(t),i.promise()):(c={url:t,absUrl:u,toPage:t,prevPage:n?n.fromPage:r,dataUrl:f,deferred:i,options:s},l=this._triggerWithDeprecated("beforeload",c),l.deprecatedEvent.isDefaultPrevented()||l.event.isDefaultPrevented()?i.promise():(s.showLoadMsg&&this._showLoading(s.loadMsgDelay),s.prefetch===r&&this._getBase().reset(),!e.mobile.allowCrossDomainPages&&!e.mobile.path.isSameDomain(e.mobile.path.documentUrl,u)?(i.reject(u,s),i.promise()):(e.ajax({url:a,type:s.type,data:s.data,contentType:s.contentType,dataType:"html",success:this._loadSuccess(u,c,s,i),error:this._loadError(u,c,s,i)}),i.promise()))))},_loadError:function(t,n,r,i){return e.proxy(function(s,o,u){this._getBase().set(e.mobile.path.get()),n.xhr=s,n.textStatus=o,n.errorThrown=u,this._hideLoading(),this._releaseTransitionLock();var a=this._triggerWithDeprecated("loadfailed",n);if(a.deprecatedEvent.isDefaultPrevented()||a.event.isDefaultPrevented())return;r.showLoadMsg&&this._showError(),i.reject(t,r)},this)},_getTransitionHandler:function(t){return t=e.mobile._maybeDegradeTransition(t),e.mobile.transitionHandlers[t]||e.mobile.defaultTransitionHandler},_triggerCssTransitionEvents:function(t,n,r){var i=!1;r=r||"",n&&(t[0]===n[0]&&(i=!0),this._triggerWithDeprecated(r+"hide",{nextPage:t,toPage:t,prevPage:n,samePage:i},n)),this._triggerWithDeprecated(r+"show",{prevPage:n||e(""),toPage:t},t)},_performTransition:function(t,n,r,i){var s=e.Deferred();return i&&i.removeClass("ui-page-active"),r&&r.addClass("ui-page-active"),this._delay(function(){s.resolve(t,n,r,i,!1)},0),s.promise()},_cssTransition:function(t,n,r){var i=r.transition,s=r.reverse,o=r.deferred,u;this._triggerCssTransitionEvents(t,n,"before"),this._hideLoading(),u=this._performTransition(i,s,t,n),u.done(e.proxy(function(){this._triggerCssTransitionEvents(t,n)},this)),u.done(function(){o.resolve.apply(o,arguments)})},_releaseTransitionLock:function(){s=!1,i.length>0&&this.change.apply(this,i.pop())},_removeActiveLinkClass:function(t){e.mobile.removeActiveLinkClass(t)},_loadUrl:function(t,n,r){return r.target=t,r.deferred=e.Deferred(),this.load(t,r),r.deferred.done(e.proxy(function(e,t,r){s=!1,t.absUrl=n.absUrl,this.transition(r,n,t)},this)),r.deferred.fail(e.proxy(function(){this._removeActiveLinkClass(!0),this._releaseTransitionLock(),this._triggerWithDeprecated("changefailed",n)},this)),r.deferred.promise()},_triggerPageBeforeChange:function(t,n,r){var i;return n.prevPage=this.activePage,e.extend(n,{toPage:t,options:r}),e.type(t)==="string"?n.absUrl=e.mobile.path.makeUrlAbsolute(t,this._findBaseWithDefault()):n.absUrl=r.absUrl,i=this._triggerWithDeprecated("beforechange",n),i.event.isDefaultPrevented()||i.deprecatedEvent.isDefaultPrevented()?!1:!0},change:function(t,n){if(s){i.unshift(arguments);return}var r=e.extend({},this.options.changeOptions,n),o={};r.fromPage=r.fromPage||this.activePage;if(!this._triggerPageBeforeChange(t,o,r))return;return t=o.toPage,e.type(t)==="string"?(s=!0,this._loadUrl(t,o,r)):this.transition(t,o,r)},transition:function(t,o,u){var a,f,l,c,h,p,d,v,m,g,y,b,w,E;if(s){i.unshift([t,u]);return}if(!this._triggerPageBeforeChange(t,o,u))return;o.prevPage=u.fromPage,E=this._triggerWithDeprecated("beforetransition",o);if(E.deprecatedEvent.isDefaultPrevented()||E.event.isDefaultPrevented())return;s=!0,t[0]===e.mobile.firstPage[0]&&!u.dataUrl&&(u.dataUrl=e.mobile.path.documentUrl.hrefNoHash),a=u.fromPage,f=u.dataUrl&&e.mobile.path.convertUrlToDataUrl(u.dataUrl)||t.jqmData("url"),l=f,c=e.mobile.path.getFilePath(f),h=e.mobile.navigate.history.getActive(),p=e.mobile.navigate.history.activeIndex===0,d=0,v=n.title,m=(u.role==="dialog"||t.jqmData("role")==="dialog")&&t.jqmData("dialog")!==!0;if(a&&a[0]===t[0]&&!u.allowSamePageTransition){s=!1,this._triggerWithDeprecated("transition",o),this._triggerWithDeprecated("change",o),u.fromHashChange&&e.mobile.navigate.history.direct({url:f});return}return t.page({role:u.role}),u.fromHashChange&&(d=u.direction==="back"?-1:1),e.ui.safeBlur(e.ui.safeActiveElement(this.document[0])),g=!1,m&&h&&(h.url&&h.url.indexOf(e.mobile.dialogHashKey)>-1&&this.activePage&&!this.activePage.hasClass("ui-page-dialog")&&e.mobile.navigate.history.activeIndex>0&&(u.changeUrl=!1,g=!0),f=h.url||"",!g&&f.indexOf("#")>-1?f+=e.mobile.dialogHashKey:f+="#"+e.mobile.dialogHashKey),y=h?t.jqmData("title")||t.children(":jqmData(type='header')").find(".ui-toolbar-title").text():v,!!y&&v===n.title&&(v=y),t.jqmData("title")||t.jqmData("title",v),u.transition=u.transition||(d&&!p?h.transition:r)||(m?e.mobile.defaultDialogTransition:e.mobile.defaultPageTransition),!d&&g&&(e.mobile.navigate.history.getActive().pageUrl=l),f&&!u.fromHashChange&&(!e.mobile.path.isPath(f)&&f.indexOf("#")<0&&(f="#"+f),b={allowSamePageTransition:u.allowSamePageTransition,transition:u.transition,title:v,pageUrl:l,role:u.role},u.changeUrl!==!1&&e.mobile.hashListeningEnabled?e.mobile.navigate(this.window[0].encodeURI(f),b,!0):t[0]!==e.mobile.firstPage[0]&&e.mobile.navigate.history.add(f,b)),n.title=v,e.mobile.activePage=t,this.activePage=t,u.reverse=u.reverse||d<0,w=e.Deferred(),this._cssTransition(t,a,{transition:u.transition,reverse:u.reverse,deferred:w}),w.done(e.proxy(function(n,r,i,s,a){e.mobile.removeActiveLinkClass(),u.duplicateCachedPage&&u.duplicateCachedPage.remove(),a||e.mobile.focusPage(t),this._releaseTransitionLock(),this._triggerWithDeprecated("transition",o),this._triggerWithDeprecated("change",o)},this)),w.promise()},_findBaseWithDefault:function(){var t=this.activePage&&e.mobile.getClosestBaseUrl(this.activePage);return t||e.mobile.path.documentBase.hrefNoHash},_themeElements:function(){return[{element:this.element,prefix:"ui-overlay-"}]},_destroy:function(){var t;e.mobile.pagecontainers&&(t=e.inArray(this.element,e.mobile.pagecontainers),t>=0&&(e.mobile.pagecontainers.splice(t,1),e.mobile.pagecontainers.length?e.mobile.pagecontainers.active=e.mobile.pagecontainers[0]:e.mobile.pagecontainers.active=r)),this._super()}}),e.mobile.navreadyDeferred=e.Deferred(),e.widget("mobile.pagecontainer",e.mobile.pagecontainer,e.mobile.widget.theme),e.mobile.pagecontainer}),function(t){typeof define=="function"&&define.amd?define("widgets/widget.backcompat",["jquery","../ns","../widget","jquery-ui/widget"],t):t(e)}(function(e){if(e.mobileBackcompat!==!1){var t=/\S+/g;e.mobile.widget=e.extend({},{backcompat:{_boolOptions:{inline:"ui-button-inline",mini:"ui-mini",shadow:"ui-shadow",corners:"ui-corner-all"},_create:function(){this._setInitialOptions(),this._super(),!this.options.enhanced&&this.options.wrapperClass&&this._addClass(this.widget(),null,this.options.wrapperClass)},_classesToOption:function(n){if(this.classProp&&typeof n[this.classProp]=="string"){var i=this,s=n[this.classProp].match(t)||[];e.each(this._boolOptions,function(t,n){i.options[t]!==r&&(e.inArray(n,s)!==-1?i.options[t]=!0:i.options[t]=!1)})}},_getClassValue:function(n,r,i){var s=this.options.classes[n]||"",o=s.match(t)||[];return i?e.inArray(r,o)===-1&&o.push(r):o.splice(e.inArray(r,o),1),o.join(" ")},_optionsToClasses:function(e,t){var n=this.classProp,r=this._boolOptions[e];n&&this.option("classes."+n,this._getClassValue(n,r,t))},_setInitialOptions:function(){var n,i=this.options,s=e[this.namespace][this.widgetName].prototype.options,o=this.classProp,u=this;o&&(n=(i.classes[o]||"").match(t)||[],s.classes[o]!==i.classes[o]?e.each(this._boolOptions,function(t,s){i[t]!==r&&(i[t]=e.inArray(s,n)!==-1)}):e.each(this._boolOptions,function(e,t){i[e]!==s[e]&&(i.classes[o]=u._getClassValue(o,t,i[e]))}))},_setOption:function(e,t){var n;e==="classes"&&this._classesToOption(t),this._boolOptions[e]&&this._optionsToClasses(e,t),e==="wrapperClass"&&(n=this.widget(),this._removeClass(n,null,this.options.wrapperClass)._addClass(n,null,t)),this._superApply(arguments)}}},e.mobile.widget)}else e.mobile.widget.backcompat={};return e.mobile.widget}),function(t){typeof define=="function"&&define.amd?define("zoom",["jquery","./core"],t):t(e)}(function(e){var t=e("meta[name=viewport]"),n=t.attr("content"),r=n+",maximum-scale=1, user-scalable=no",i=n+",maximum-scale=10, user-scalable=yes",s=/(user-scalable[\s]*=[\s]*no)|(maximum-scale[\s]*=[\s]*1)[$,\s]/.test(n);return e.mobile.zoom=e.extend({},{enabled:!s,locked:!1,disable:function(n){!s&&!e.mobile.zoom.locked&&(t.attr("content",r),e.mobile.zoom.enabled=!1,e.mobile.zoom.locked=n||!1)},enable:function(n){!s&&(!e.mobile.zoom.locked||n===!0)&&(t.attr("content",i),e.mobile.zoom.enabled=!0,e.mobile.zoom.locked=!1)},restore:function(){s||(t.attr("content",n),e.mobile.zoom.enabled=!0)}}),e.mobile.zoom}),function(t){typeof define=="function"&&define.amd?define("zoom/iosorientationfix",["jquery","../core","../zoom"],t):t(e)}(function(e){function f(e){i=e.originalEvent,a=i.accelerationIncludingGravity,s=Math.abs(a.x),o=Math.abs(a.y),u=Math.abs(a.z),!t.orientation&&(s>7||(u>6&&o<8||u<8&&o>6)&&s>5)?r.enabled&&r.disable():r.enabled||r.enable()}e.mobile.iosorientationfixEnabled=!0;var n=navigator.userAgent,r,i,s,o,u,a;if(!(/iPhone|iPad|iPod/.test(navigator.platform)&&/OS [1-5]_[0-9_]* like Mac OS X/i.test(n)&&n.indexOf("AppleWebKit")>-1)){e.mobile.iosorientationfixEnabled=!1;return}r=e.mobile.zoom,e.mobile.document.on("mobileinit",function(){e.mobile.iosorientationfixEnabled&&e.mobile.window.bind("orientationchange.iosorientationfix",r.enable).bind("devicemotion.iosorientationfix",f)})})});;
/*all custom js code will be in this file*/

// Ser Global Namespace = VZBase
var VZBase = window.VZBase || {};
var windowWth = jQuery(window).width();
// var detected_device = drupalSettings.init_development.custom.device;

// project section show list on click
jQuery.fn.stateProjectList = function () {
  jQuery(this)
    .find('nav:not(".menu--flyout-static-link")')
    .parent()
    .addClass("state-project-section");
  // insert a empty div after h2 to get data of selected link
  // jQuery(this).find("nav > h2, nav > span").after("<a href='javascript:void(0)' class='project-value'></a>");
  jQuery(this)
    .find("nav > h2, nav > span, nav > p")
    .after("<div class='project-value'></div>");
  // hide dropdown list on load
  jQuery(this).find("nav").find("ul:not(ul ul)").hide();
  // find each list for dropdown
  jQuery(this)
    .find("nav")
    .each(function () {
      // get the value of first link by defailt
      var firstValue = jQuery(this)
        .find("ul:not(ul ul) > li:first-child > a")
        .text();
      // display the value in that empty div
      jQuery(this).find(".project-value").html(firstValue);
      // add tabindex to project value for accessibility
      jQuery(".project-value").attr("tabindex", "0");
      // jQuery(this).find("ul:not(ul ul) > li:first-child > a").hide();
    });

  // find .project-value and wrap it into a div
  // jQuery("nav").find(".project-value").wrapInner('<div class="valueText"></div>');

  /*close on outside click*/
  jQuery(document).mouseup(function (outsideclose) {
    // get elements to exclude from outside wrapper
    var container = jQuery(this).find("nav");
    if (
      !container.is(outsideclose.target) && // if the target of the click isn't the menu wrapper...
      container.has(outsideclose.target).length === 0 && // ... nor a descendant of the menu wrapper
      outsideclose.target != jQuery(this).children().get(0)
    ) {
      // nor the scrollbar
      // remove styles and classes from other selectList elements
      container.children(".project-value").removeClass("active");
      container.children(".project-value").not(this).next("ul").hide();
      container
        .children(".project-value")
        .not(this)
        .next()
        .children("ul")
        .hide();
      container
        .children(".project-value")
        .not(this)
        .not(this)
        .next()
        .next("ul")
        .hide();
    }
  });

  jQuery(".project-value").keypress(function (e) {
    if (e.keyCode == 13) {
      jQuery(this).click();
      return false;
    }
  });

  // get the value of selected link and add that into project value div
  jQuery(this)
    .find("nav ul > li a")
    .click(function (e) {
      var selectedValue = jQuery(e.target).parent("li").html();
      jQuery(this).find(".project-value").html(selectedValue);
    });
};

/*Call all element classe where you want to apply state project function*/
jQuery(
  ".service-list-container, .tile-wrapper, .field--name-field-para-serviceblock-dossier, .field--name-field-para-serviceblock-download, .field--name-field-para-serviceblock-topic"
).stateProjectList();

/*for tiles dropdown*/
VZBase.tileDropChange = function () {
  // change the default text of dropdown menu
  var strMore = "Wählen"; //Drupal.t("Select");//
  jQuery(".tile-wrapper").find(".project-value").html(strMore);
};

/*only for service block section*/
VZBase.serviceDropChange = function () {
  // find nav in each div under service block and add text of 1st list as default for the dropdown
  jQuery(".service-main-container")
    .find("nav")
    .each(function () {
      var firstValue = jQuery(this)
        .find("ul:not(ul ul) > li:first-child")
        .html();
      jQuery(this).find(".project-value").html(firstValue);
    });

  // hide 1st list item of service block 1
  // jQuery(".service-list-container .state-project_section__wrapper, .service-colum-2").find("ul:not(ul ul) > li:first-child > a").hide();
  jQuery(
    ".service-list-container .state-project_section__wrapper, .service-colum-2"
  )
    .find("ul:not(ul ul) > li:first-child")
    .addClass("visually-hidden");

  // check if map is germany
  if (jQuery(".service-colum-2").has(".location-map").length >= 0) {
    var mapCity = Drupal.t("Choose city");
    jQuery(".service-colum-2 .state-project-section")
      .find(".project-value")
      .html(mapCity);
    jQuery(".project-value").click(function () {
      jQuery(".service-colum-2")
        .find(".project-value")
        .next("ul")
        .children("li:first-child")
        .removeClass("visually-hidden");
    });
    // get the value of selected link and add that into project value div
    jQuery(this)
      .find("nav ul > li a")
      .click(function (e) {
        jQuery(".service-colum-2 .state-project-section")
          .find(".project-value")
          .html(mapCity);
      });
  } else {
    // if map is not of germany but its state
    var mapState = Drupal.t("Choose federal state");
    jQuery(".service-colum-2 .state-project-section")
      .find(".valueText")
      .html(mapState);
    jQuery(".project-value").click(function () {
      jQuery(".service-colum-2")
        .find(".project-value")
        .next("ul")
        .children("li:first-child")
        .removeClass("visually-hidden");
    });
    // get the value of selected link and add that into project value div
    jQuery(this)
      .find("nav ul > li a")
      .click(function (e) {
        jQuery(".service-colum-2 .state-project-section")
          .find(".project-value")
          .html(mapState);
      });
  }
};

/*toggle list on click of select section*/
VZBase.stateProjectClick = function () {
  jQuery(document)
    .find(".project-value")
    .each(function () {
      jQuery(this).on("click", function (event) {
        jQuery(this).toggleClass("active");
        jQuery(this).next("ul").toggle();
        jQuery(this).next().children("ul").toggle();
        jQuery(this).next().next("ul").toggle();

        // remove styles and classes from other selectList elements
        jQuery(".state-project-section")
          .find(".project-value")
          .not(this)
          .removeClass("active");
        jQuery(".state-project-section")
          .find(".project-value")
          .not(this)
          .next("ul")
          .hide();
        jQuery(".state-project-section")
          .find(".project-value")
          .not(this)
          .next()
          .children("ul")
          .hide();
        jQuery(".state-project-section")
          .find(".project-value")
          .not(this)
          .next()
          .next("ul")
          .hide();
      });
    });
};

// this is to append two click data on load, define a local variable here

var loadready = true;

// this function is to apply the two click solution for videos
VZBase.twoClickVideo = function () {
  var video_class1 = jQuery("body").find(
    ".paragraph--type--referenzfeld-video"
  );
  if (video_class1.length >= 1) {
    var video_class = "paragraph--type--referenzfeld-video";
  }
  var video_class2 = jQuery("body").find(".paragraph--type--video");
  if (video_class2.length >= 1) {
    var video_class = "paragraph--type--video";
  }
  if (typeof video_class !== "undefined") {
    // play video on click
    var wth = jQuery(window).width();
    if (loadready == true) {
      jQuery(".field--type-youtube").append(
        "" +
          '<div class="copyright-info-wrapper">' +
          '<div class="copyright-info">' +
          Drupal.t(
            "Das Video ist noch deaktiviert, damit keine unerwünschte Datenübertragung zu Youtube stattfindet. Zur Aktivierung bitte auf den Link klicken! Damit werden Daten übermittelt, zu deren Art, Umfang und Verwendungszweck wir keine Auskünfte geben können."
          ) +
          '<span class="youtube_play">' +
          Drupal.t("Video anzeigen") +
          "</span>" +
          "</div>" +
          "</div>"
      );
      loadready = false;
    }
    jQuery(".youtube_play").on("click", function (ev) {
      var test = jQuery(this)
        .parents(".copyright-info-wrapper")
        .prev(".youtube-container")
        .find("iframe");
      var attr = jQuery(".youtube-container iframe").attr("data");
      if (typeof attr !== typeof undefined && attr !== false) {
        if (attr.length > 0) {
          test[0].src = test.attr("data");
        }
      }
      test[0].src += "&autoplay=1";
      jQuery(".copyright-info-wrapper").hide();

      //  ev.preventDefault();
    });
  }
};

// this js is to show table content according to h2 and h3
VZBase.tableContentData = function () {
  var a = 0;
  var tag_text = "";
  jQuery(".node__content")
    .find(".field")
    .each(function () {
      var state_current = jQuery(this);
      jQuery(state_current).find(".field").removeClass("field");
    });
  var set_bool_value = jQuery(".node__content")
    .find(".field.field--name-field-article-show-content")
    .html();
  if (set_bool_value != "Off" && typeof set_bool_value != "undefined") {
    jQuery(".node__content")
      .find(".field")
      .each(function () {
        var state_current = jQuery(this);
        jQuery(state_current)
          .find("h2")
          .each(function () {
            var b = jQuery(this);
            var $div = b.parents(".paragraph--type--akkordeon-para");
            var $div_comment = b.parents(".field--name-comment");
            if ($div.length > 0 || $div_comment.length > 0) {
              return;
            } else {
              b.attr("id", a);
              if (b.text().trim() != "")
                tag_text +=
                  '<li><a href="#' + a + '">' + b.text() + "</a></li>";
              a++;
            }
          });
      });
    var total_data =
      '<div class="table_content_wrapper"><div class="table_heading">' +
      Drupal.t("Inhaltsverzeichnis") +
      '</div><ul class="table_data">' +
      tag_text +
      "</ul></div>";
    jQuery(".field--name-field-article-show-content").after(total_data);
  }
};

/*Table of Content show hide starts*/
VZBase.tableOfContent = function () {
  /* create collapsable */
  jQuery(".table_content_wrapper").removeClass("collapsed");
  if (jQuery(window).width() < 768) {
    jQuery(".table_content_wrapper").addClass("collapsed");
  }
  jQuery(".table_heading").click(function () {
    jQuery(".table_data").slideToggle("fast");
    jQuery(this).parent(".table_content_wrapper").toggleClass("collapsed");
  });
  /*For anchore links click to navigate on conserned area*/
  var links = jQuery(".table_content_wrapper .table_data li a");
  jQuery(links).on("click", function (e) {
    var clickedElement = jQuery(this).attr("href");
    if (jQuery(window).scrollTop() == 0) {
      var header =
        jQuery("header").outerHeight() * 2 +
        jQuery(".campagin-line-wrapper").outerHeight() +
        10;
    } else {
      var header = jQuery("header").outerHeight() + 20;
    }
    e.preventDefault();
    jQuery("html, body").animate(
      {
        scrollTop: jQuery(clickedElement).offset().top - header,
      },
      1000
    );
    return false;
  });

  /* hide ToC if no content */
  const tocListLength = jQuery(".table_content_wrapper ul li").length
  if (tocListLength < 1) {
    jQuery(".table_content_wrapper").addClass("hidden").attr("aria-hidden", "true");
  }
};

/*Front page Event teaser equal hight starts*/
VZBase.eventTeaser = function () {
  var teaserItems = jQuery(
    ".paragraph--type--event-teaser-para .views-element-container"
  ).length;
  if (jQuery(window).width() < 1025 && teaserItems > 2) {
    jQuery(".paragraph--type--event-teaser-para")
      .find(".views-element-container:first")
      .addClass("full_width");
  } else {
    jQuery(
      ".paragraph--type--event-teaser-para .views-element-container"
    ).removeClass("full_width");
  }
};

/*Support box tab navigations stars*/
VZBase.supportBoxTabs = function () {
  jQuery(".view-para-service .service-name").click(function () {
    jQuery(this).attr("aria-expanded", function (i, attr) {
      return attr == "true" ? "false" : "true";
    });
    jQuery(this)
      .parents(".views-row")
      .siblings()
      .find(".service-name")
      .attr("aria-expanded", "false");
    jQuery(this)
      .parents(".views-row")
      .toggleClass("active")
      .siblings()
      .removeClass("active");
    var whiteBlockHeight = jQuery(this).next(".services-wrapper").outerHeight();
    jQuery(this)
      .parents(".view-content")
      .css("height", whiteBlockHeight + 136 + "px");
    if (
      !jQuery(".services-wrapper").is(":visible") ||
      jQuery(window).width() < 768
    ) {
      jQuery(this).parents(".view-content").css("height", "auto");
    }
  });
};

/*this is js for print command.*/
VZBase.printFunction = function () {
  jQuery(".print-button").click(function () {
    window.print();
  });
  jQuery(".print-button").keypress(function (event) {
    /* On Enter print */
    var keycode = event.keyCode ? event.keyCode : event.which;
    if (keycode == "13") {
      window.print();
    }
  });
};

/*Equal height for service block*/
VZBase.serviceEqHeight = function () {
  /*for service block*/
  if (jQuery(window).width() > 1024) {
    var serviceBox = jQuery(
      ".list-map-container .service-relatedarticle-container, .list-map-container .state-project_section__wrapper, .list-map-container .service-colum-2"
    );
    var maxHeight = -1;
    jQuery(serviceBox).each(function () {
      maxHeight =
        maxHeight > jQuery(this).height() ? maxHeight : jQuery(this).height();
    });
    jQuery(serviceBox).each(function () {
      jQuery(this).height(maxHeight);
    });
  }
};

/*toggle header search box*/
VZBase.headerSearch = function () {
  // for main header
  jQuery(".header-wrapper .search-icon").click(function () {
    jQuery(this).toggleClass("active");
    jQuery(this).attr("aria-expanded", function (i, attr) {
      return attr == "true" ? "false" : "true";
    });
    jQuery(
      ".header-wrapper .block-views-exposed-filter-blocksearch-result-list-page-1"
    ).toggleClass("active");
  });
  // for project header
  jQuery(".project-header--inner .search-icon").click(function () {
    jQuery(this).toggleClass("active");
    jQuery(this).attr("aria-expanded", function (i, attr) {
      return attr == "true" ? "false" : "true";
    });
    jQuery(
      ".project-header--inner .block-views-exposed-filter-blocksearch-result-list-page-1"
    ).toggleClass("active");
  });
};

/*Close menu on outside click of menu wrapper*/
VZBase.outsideClickSearch = function () {
  jQuery(document).mouseup(function (outsideclose) {
    // get elements to exclude from outside wrapper
    var searchContainer = jQuery(
      ".header-wrapper .block-views-exposed-filter-blocksearch-result-list-page-1, .search-icon, .project-header--inner .block-views-exposed-filter-blocksearch-result-list-page-1"
    );
    if (
      !searchContainer.is(outsideclose.target) && // if the target of the click isn't the menu wrapper...
      searchContainer.has(outsideclose.target).length === 0
    ) {
      // ... nor a descendant of the menu wrapper
      // hide the menu wrapper and remove menu-open class from the body
      searchContainer.removeClass("active");
    }
  });
};

/*wrap index tiles into the pair of 4*/
VZBase.tilesList = function () {
  // find the first 4 tiles
  jQuery(
    ".page-node-type-index-page-1 .views-element-container:empty, .page-node-type-indexseite-page-2 .views-element-container:empty"
  )
    .parent()
    .remove();
  var listHeight = jQuery(
    ".tile-main-wrapper > div > .field__item, .tile-main-wrapper .views-infinite-scroll-content-wrapper > .field__item"
  );
  // wrap every 4 tiles into a wrapper "tile-group"
  if (jQuery(window).width() > 1024) {
    for (var i = 0; i < listHeight.length; i += 4) {
      listHeight.slice(i, i + 4).wrapAll("<div class='tile-group'></div>");
    }
  } else if (jQuery(window).width() >= 767) {
    for (var i = 0; i < listHeight.length; i += 3) {
      listHeight.slice(i, i + 3).wrapAll("<div class='tile-group'></div>");
    }
  } else {
    for (var i = 0; i < listHeight.length; i += 1) {
      listHeight.slice(i, i + 1).wrapAll("<div class='tile-group'></div>");
    }
  }
};

/*click to expand tile links*/
VZBase.tileLinksToggle = function () {
  jQuery(".tile-main-wrapper .tile-group .field__item .icon-expand").click(
    function (e) {
      e.preventDefault();
      jQuery(this).parents(".tile-wrapper").toggleClass("expanded");
      jQuery(this)
        .parents(".tile-group, .field__item")
        .siblings()
        .children()
        .find(".expanded")
        .removeClass("expanded");

      var linksHeight = jQuery(this)
        .parent()
        .next(".tiles-links-wrapper")
        .height();
      if (jQuery(window).width() >= 767) {
        jQuery(this)
          .parents(".tile-group")
          .css({ paddingBottom: linksHeight, marginBottom: "40px" });
      } else {
        jQuery(this)
          .parents(".tile-group")
          .css({ paddingBottom: linksHeight, marginBottom: "20px" });
      }

      jQuery(this).parents(".tile-group").siblings().removeAttr("style");

      if (!jQuery(this).parents(".tile-wrapper").hasClass("expanded")) {
        jQuery(this)
          .parents(".tile-group")
          .removeAttr("style")
          .removeClass("expanded");
      }
    }
  );
};

/*toggle tile content for mobile and tablet view of index page 3*/
VZBase.tileTextToggle = function () {
  if (jQuery(window).width() <= 1024) {
    jQuery(".view-index-page-of-the-3rd-level")
      .find(".tile-wrapper")
      .click(function () {
        jQuery(".view-index-page-of-the-3rd-level")
          .find(".tile-wrapper")
          .removeClass("is-clicked");
        jQuery(this).toggleClass("is-clicked");
      });
  }
};

/*Sticky Header on Scroll*/
VZBase.stickyHeader = function () {
  if (jQuery(window).scrollTop() == 0) {
    jQuery("header, .campagin-line-wrapper").removeClass("Headerfixed");
  } else {
    jQuery("header, .campagin-line-wrapper").addClass("Headerfixed");
  }
  // to fix menu space in mobile views
  if (windowWth <= 767) {
    if (jQuery(window).scrollTop() == 0) {
      jQuery(".flyout_main_wrapper").removeClass("menufixed");
    } else {
      jQuery(".flyout_main_wrapper").addClass("menufixed");
    }
  }
};

// Added class to implement the hidden behaviour with js instead always : D8RELAUNCH-1038
VZBase.stickyFooterHidden = function () {
  jQuery(".main_footer").addClass("fixHidden");
};
//Changed position of status messages to the top
VZBase.StatusMessage = function () {
  jQuery(".messages--status").insertBefore(".region-breadcrumb");
  jQuery(".page-node-type-landing-page- .messages--status").css({
    paddingBottom: "0",
    marginTop: "0",
  });
  jQuery(".messages--error").insertBefore(".region-breadcrumb");
  jQuery(".page-node-type-landing-page- .messages--error").css({
    paddingBottom: "0",
    marginTop: "0",
  });
};
/*Sticky Footer on Scroll*/
VZBase.stickyFooter = function () {
  if (jQuery(window).width() >= 768) {
    var footerHeight = jQuery(".main_footer").height();
  } else {
    var footerHeight = jQuery(".main_footer").height() + 90;
  }
  if (
    jQuery(window).scrollTop() + jQuery(window).height() + footerHeight >
    jQuery(document).height()
  ) {
    jQuery(".footer_top, .main_footer").addClass("fixedOff");
  } else {
    jQuery(".footer_top, .main_footer").removeClass("fixedOff");
    return false;
  }
};

/*footer newsletter*/
VZBase.footerNewsletter = function () {
  if (jQuery(".region-footer-top").find(".block-simplenews").length) {
    jQuery(".newsletter-button").show();
    jQuery(".newsletter-button").click(function (e) {
      jQuery(this).toggleClass("is-active");
      jQuery(this).attr("aria-expanded", function (i, attr) {
        return attr == "true" ? "false" : "true";
      });
      jQuery(".region-footer-top .block-simplenews").fadeToggle("slow");
      e.preventDefault();
    });
  } else {
    jQuery(".newsletter-button").hide();
  }
};

/*Close footer newsletter outside click*/
VZBase.outsideClickNews = function () {
  jQuery(document).mouseup(function (outsideclose) {
    // get elements to exclude from outside wrapper
    var searchContainer = jQuery(
      ".region-footer-top .block-simplenews, .newsletter-button"
    );
    if (
      !searchContainer.is(outsideclose.target) && // if the target of the click isn't the newsletter box...
      searchContainer.has(outsideclose.target).length === 0
    ) {
      // ... nor a descendant of the newsletter box
      // hide the menu wrapper and remove menu-open class from the body
      jQuery(this).removeClass("is-active");
      jQuery(".region-footer-top .block-simplenews").fadeOut("slow");
    }
  });
};

/*footer newsletter2go*/
VZBase.footerNewsletter2Go = function () {
  if (jQuery(".region-footer-top").find(".block-init-n2go-block").length) {
    jQuery(".newsletter-button-nl2go").show();
    jQuery(".newsletter-button-nl2go").click(function (e) {
      jQuery(this).toggleClass("is-active");
      jQuery(this).attr("aria-expanded", function (i, attr) {
        return attr == "true" ? "false" : "true";
      });
      jQuery(".region-footer-top .block-init-n2go-block").fadeToggle("slow");
      e.preventDefault();
    });
  } else {
    jQuery(".newsletter-button-nl2go").hide();
  }
};

/*Close footer newsletter2go outside click*/
VZBase.outsideClickNews2Go = function () {
  jQuery(document).mouseup(function (outsideclose) {
    // get elements to exclude from outside wrapper
    var searchContainer = jQuery(
      ".region-footer-top .block-init-n2go-block, .newsletter-button-nl2go"
    );
    if (
      !searchContainer.is(outsideclose.target) && // if the target of the click isn't the newsletter box...
      searchContainer.has(outsideclose.target).length === 0
    ) {
      // ... nor a descendant of the newsletter box
      // hide the menu wrapper and remove menu-open class from the body
      jQuery(this).removeClass("is-active");
      jQuery(".region-footer-top .block-init-n2go-block").fadeOut("slow");
    }
  });
};

// add class for the grey background on 3 colum teaser
jQuery(".Grey-background-tiles")
  .parents(".three-col-teaser")
  .addClass("Grey-background-tiles");

if (jQuery(".location-map")) {
  jQuery(".location-map area").each(function () {
    var left = 0;
    var top = 0;
    jQuery(this).mouseover(function () {
      jQuery(".map-area-title").remove();

      var title = jQuery(this).attr("alt");
      left = jQuery(this).attr("data-left");
      top = jQuery(this).attr("data-top");

      jQuery(".map").append(
        '<div class="map-area-title" style="left: ' +
          left +
          "px; top: " +
          top +
          'px;">' +
          title +
          "</div>"
      );
    });
  });

  jQuery(".location-map img").mouseout(function () {
    jQuery(".map-area-title").remove();
  });
}

/*Search Content Indexing*/
VZBase.searchHeadingIndex = function () {
  jQuery(".view-search-result-list .heading-category").each(function (i) {
    var current = jQuery(this);
    var id = current.attr("id");
    jQuery(".search-cluster").append(
      "<li><a href='#" + id + "'>" + current.html() + "</li></a>"
    );
  });

  jQuery(".js-form-wrapper [id^=edit-submit-search-result-list-]").on(
    "click",
    function () {
      loadready = true;
      jQuery(document).ajaxStop(function (event, request, settings) {
        var $keyword = jQuery("#block-exposedformsearch-result-listpage-1-2")
          .find("[id^=edit-search-api-fulltext-]")
          .val();
        var $keyword_parshed = jQuery.parseHTML($keyword);
        $keyword_parshed = jQuery($keyword_parshed).text();
        jQuery("#block-vz-page-title .page-title").html(
          Drupal.t("Suchergebnisse für ") + '"' + $keyword_parshed + '"'
        );
        jQuery(".search-cluster").html("");
        jQuery(".view-search-result-list .heading-category").each(function (i) {
          var current = jQuery(this);
          var id = current.attr("id");
          jQuery(".search-cluster").append(
            "<li><a href='#" + id + "'>" + current.html() + "</li></a>"
          );
        });
        if (loadready == true) {
          VZBase.infiniteCustomPagerdata();
          loadready = false;
        }
        // rebuild height after search ajax
        VZBase.searchHeadingAnchores();
      });
    }
  );

  VZBase.searchHeadingAnchores();
};

/*Search heading page navigation links*/
VZBase.searchHeadingAnchores = function () {
  jQuery(".search-cluster li a").click(function (event) {
    var clickedElement = jQuery(this).attr("href");
    event.preventDefault();
    if (jQuery(window).scrollTop() == 0) {
      var header =
        jQuery("header").outerHeight() * 2 +
        jQuery(".campagin-line-wrapper").outerHeight() +
        20;
    } else {
      var header = jQuery("header").outerHeight() + 40;
    }
    jQuery("html,body").animate(
      {
        scrollTop: jQuery(clickedElement).offset().top - header,
      },
      1000
    );
    return false;
  });
};

/*Search Page Event Time Hide when no time choosed*/
VZBase.eventTimeHide = function () {
  jQuery(".event_time")
    .filter(function () {
      return (
        jQuery.trim(jQuery(this).text()) === "" &&
        jQuery(this).children().length == 0
      );
    })
    .remove();
};

/*Landing page Anchor-link navigation*/
VZBase.landingAnchorNav = function () {
  var num = 0;
  var links = jQuery(
    ".block-views-blockanchor-link-block-1 .view-content li"
  );
  var found = [];
  jQuery('.main-content [class*="top-moduletitle"]').each(function () {
    if (jQuery(this).text().trim() != "") {
      jQuery(this).attr("id", "heading" + num++);
      found.push(jQuery(this).text().trim());
    }
  });

  var labelNum = 0;
  jQuery(links).each(function () {
    var label = jQuery("a", this).text().trim();
    if(jQuery.inArray(label, found) == -1){
      jQuery(this).css("display","none");
    }else{
      jQuery("a", this).attr("href", "#heading" + labelNum++);
    }
  });

  jQuery('a', links).on("click", function (e) {
    var clickedElement = jQuery(this).attr("href");
    if (jQuery(window).scrollTop() == 0) {
      var header = jQuery(".header-wrapper").height() + 190;
    } else {
      var header = jQuery(".header-wrapper").height() + 40;
    }
    e.preventDefault();
    jQuery("html,body").animate(
      {
        scrollTop: jQuery(clickedElement).offset().top - header,
      },
      1000
    );
    return false;
  });
  /*Anchor link block height and positioning*/
  var AnchorHeight =
    jQuery(
      ".page-node-type-landing-page- .block-views-blockanchor-link-block-1"
    ).height() / 2;
  jQuery(
    ".page-node-type-landing-page- .block-views-blockanchor-link-block-1"
  ).css("margin-top", -AnchorHeight);
  jQuery(
    ".page-node-type-landing-page- .messages--error, .page-node-type-landing-page- .messages--status"
  ).css({ marginTop: -AnchorHeight, paddingBottom: AnchorHeight + 20 });
  jQuery(".page-node-type-landing-page- .region-content-header").css({
    paddingBottom: AnchorHeight + 20,
  });
  jQuery(".node--type-landing-page- .field__item >div >div")
    .eq(0)
    .css({ marginTop: -AnchorHeight, paddingTop: AnchorHeight });
  if (jQuery(".region-content-header").length < 1) {
    jQuery(
      ".page-node-type-landing-page- .block-views-blockanchor-link-block-1"
    ).css("margin-top", "40px");
  }
};

/*Project page two column block size*/
VZBase.projectTwoColBlock = function () {
  jQuery(".paragraph--type--project-container >div >.field__item")
    .find(".one-col")
    .parent()
    .addClass("single_col");
  jQuery(".paragraph--type--project-container >div >.field__item")
    .find(".two-col")
    .parent()
    .addClass("double_col");
  jQuery(".paragraph--type--project-container div").each(function (i) {
    var totalTwoCol = jQuery(this).find(".two-col").length;
    if (totalTwoCol > 1) {
      jQuery(this).find(".two-col").parent().addClass("double_two_col");
    }
  });
  //for remove blank blocks in row structure
  jQuery(".paragraph--type--project-container .views-element-container:empty")
    .parent()
    .parent()
    .remove();
};

VZBase.infiniteCustomPagerdata = function () {
  jQuery(".view-search-result-list").not('.view-index-page-of-the-3rd-level')
    .find(".pager")
    .each(function () {
      jQuery(this).hide();
      jQuery(
        '<div class="ajax-progress ajax-progress-fullscreen" style="display: none"></div> '
      ).insertAfter(jQuery(this));
      jQuery(
        '<div class="load-more">' + Drupal.t("mehr laden") + "</div> "
      ).insertAfter(jQuery(this));
    });
  jQuery(".pager")
    .find("li")
    .each(function () {
      var cls = jQuery(this).attr("class");
    });
};

/*This js is to provide load more functionality*/
VZBase.loadMoreFunctionality = function () {
  jQuery(document).on("click", ".load-more", function () {
    var display;
    var head_length = jQuery(this)
      .parent()
      .find(".view-header .search-cluster").length;
    var $parent = jQuery(this);
    if (head_length == 0) {
      var head = jQuery(this)
        .parent()
        .first()
        .find(".heading-category")
        .text()
        .split(" ")[0];
    }
    var $keyword = jQuery("#block-exposedformsearch-result-listpage-1-2")
      .find("input[data-drupal-selector='edit-search-api-fulltext']")
      .val();
    if (head_length > 0) {
      var page_find = jQuery(".view-search-result-list .pager:first").find(
        ".pager__item--next"
      ).length;
    } else {
      var page_find = jQuery(this)
        .parent()
        .find(".pager .pager__item--next").length;
    }
    if (page_find != 0) {
      if (head_length > 0) {
        var pagr = jQuery(".view-search-result-list .pager:first")
          .find(".pager__item--next a")
          .attr("href")
          .split("&")
          .pop()
          .split("=")
          .pop();
      } else {
        var pagr = jQuery(this)
          .parent()
          .first()
          .find(".pager__item--next a")
          .attr("href")
          .split("&")
          .pop()
          .split("=")
          .pop();
      }
      var decodedUrl = decodeURIComponent(pagr);
      // applied swich case for providing

      switch (head) {
        case "Aktuelle":
          display = "embed_9";
          break;
        case "Wissen":
          display = "embed_2";
          break;
        case "Pressemitteilungen":
          display = "embed_1";
          break;
        case "Beratungsangebote":
          display = "embed_3";
          break;
        case "Termine":
          display = "embed_4";
          break;
        case "Downloads":
          display = "embed_5";
          break;
        case "Weitere":
          display = "embed_6";
          break;
        case "Urteile":
          display = "embed_8";
          break;
        case "Bücher,":
          display = "embed_10";
          break;
        case "FAQ":
          display = "embed_11";
          break;
        default:
          display = "page_1";
      }
      if (typeof display !== "undefined" && typeof pagr !== "undefined") {
        var data = search_result_pager(
          display,
          decodedUrl,
          $parent,
          $keyword,
          head_length
        );
      }
    } else {
      if (head_length > 0) {
        jQuery(".view-search-result-list .load-more:first").html(
          Drupal.t("no more data available")
        );
        jQuery(".view-search-result-list .load-more:first").addClass("no_data");
      } else {
        jQuery(this)
          .parent()
          .find(".load-more")
          .html(Drupal.t("no more data available"));
        jQuery(this).parent().find(".load-more").addClass("no_data");
      }
    }
  });
};

// Filter Results Paginations
function search_result_pager(
  display,
  decodedUrl,
  $parent,
  $keyword,
  head_length
) {
  //if(typeof display !== 'undefined' && typeof pagr !== 'undefined') {
  jQuery.ajax({
    url: drupalSettings.path.baseUrl + "views/ajax",
    type: "POST",
    data: {
      view_name: "search_result_list",
      view_display_id: display, //your display id
      page: decodedUrl,
      search_api_fulltext: $keyword,
    },
    dataType: "json",
    beforeSend: function () {
      if (head_length > 0) {
        jQuery($parent).parent().find(".ajax-progress:first").show();
      } else {
        jQuery($parent).parent().find(".ajax-progress").show();
      }
    },
    success: function (response) {
      if (response[3] !== undefined) {
        getdata(response[3].data, $parent, head_length);
      }
      if (head_length > 0) {
        jQuery($parent).parent().find(".ajax-progress:first").hide();
      } else {
        jQuery($parent).parent().find(".ajax-progress").hide();
      }
    },
  });
  // }
}

function getdata(data, $parent, head_length) {
  if (head_length > 0) {
    jQuery(".view-search-result-list")
      .find(".pager")
      .not(".view-footer .pager")
      .empty();
    var filter_data = jQuery(data)
      .find(".view-content")
      .not(".view-footer .pager")
      .html();
    var pager_data = jQuery(data)
      .find(".pager")
      .not(".view-footer .pager")
      .html();
    jQuery(".view-search-result-list")
      .find(".view-content")
      .not(".view-footer .view-content")
      .append(filter_data);
    jQuery(".view-search-result-list")
      .find(".pager")
      .not(".view-footer .pager")
      .append(pager_data);
    if (jQuery(data).find(".pager:first .pager__item--next").length == "0") {
      jQuery($parent)
        .parent()
        .find(".load-more:first")
        .not(".view-footer .pager")
        .html(Drupal.t("no more data available"));
      jQuery($parent)
        .parent()
        .find(".load-more:first")
        .not(".view-footer .pager")
        .addClass("no_data");
    }
  } else {
    jQuery($parent).parent().find(".pager").empty();
    var filter_data = jQuery(data).find(".view-content").html();
    var pager_data = jQuery(data).find(".pager").html();
    jQuery($parent).parent().find(".view-content").append(filter_data);
    jQuery($parent).parent().find(".pager").append(pager_data);
    if (jQuery(data).find(".pager .pager__item--next").length == "0") {
      jQuery($parent)
        .parent()
        .find(".load-more")
        .html(Drupal.t("no more data available"));
      jQuery($parent).parent().find(".load-more").addClass("no_data");
    }
  }
}

/*function to provide place holder*/
VZBase.placeholderProvider = function () {
  var p_holder = jQuery(".field--name-field-search-bar-index-page2")
    .find(":input")
    .attr("placeholder");
  jQuery(document).ajaxComplete(function (event, request, settings) {
    jQuery(".field--name-field-search-bar-index-page2")
      .find(":input")
      .attr("placeholder", p_holder);
  });
};

/*Information center Scroll to contact form*/
VZBase.infoConFormScroll = function () {
  jQuery(
    ".view-image-information-centre .more a, .view-image-info-centre .more a"
  ).on("click", function (e) {
    if (jQuery(window).scrollTop() == 0) {
      var header =
        jQuery("header").outerHeight() * 2 +
        jQuery(".campagin-line-wrapper").outerHeight() +
        80;
    } else {
      var header = jQuery(".Headerfixed").outerHeight() + 80;
    }
    // e.preventDefault();
    var hrefValue = jQuery(this).attr("href");
    if (hrefValue == "#" || hrefValue == " ") {
      jQuery("html,body").animate(
        {
          scrollTop: jQuery(".contact-message-form form").offset().top - header,
        },
        1000
      );
      return false;
    }
  });
  //To remove blank row block
  jQuery(
    ".paragraph--type--information-centre-teaser .views-element-container:empty"
  ).remove();
};

/*Information center Consultation offers highlighted link navigation*/
VZBase.InfoConsOfferIndex = function () {
  jQuery(".highlights .taxonomy-name").on("click", function (e) {
    var clickedElement = jQuery(this).attr("href");
    if (jQuery(window).scrollTop() == 0) {
      var header =
        jQuery(".header-wrapper").outerHeight() * 2 +
        jQuery(".campagin-line-wrapper").outerHeight() +
        90;
    } else {
      var header = jQuery(".header-wrapper").height() + 40;
    }
    e.preventDefault();
    jQuery("html,body").animate(
      {
        scrollTop: jQuery(clickedElement).offset().top - header,
      },
      1000
    );
    return false;
  });
};

/*Select Drop Down Customization for Search result pages added updown arrows*/
VZBase.customeSelectSearch = function () {
  jQuery(".form-select").click(function (e) {
    var e = window.event || e;
    jQuery(".form-select").not(jQuery(this)).removeClass("up_arrow");
    jQuery(this).toggleClass("up_arrow");
    e.stopPropagation();
  });
  jQuery(document).click(function (e) {
    jQuery(".form-select").removeClass("up_arrow");
  });
};

/*Comment Block Show Hide*/
VZBase.commentShowHide = function () {
  jQuery(".path-comment")
    .find(".comment-comment-form")
    .wrapAll("<div class='comment-wrapper'></div>");
  jQuery(".comment-wrapper").removeClass("collapsed");
  jQuery(".comment-wrapper")
    .filter(function () {
      return (
        jQuery.trim(jQuery(this).text()) === "" &&
        jQuery(this).children().length == 0
      );
    })
    .remove();
  if (jQuery(window).width() < 768) {
    jQuery(".comment-wrapper").addClass("collapsed");
  }
  jQuery(".comment-form__title").click(function () {
    jQuery(this).parent(".comment-wrapper").toggleClass("collapsed");
  });
};

/*Information center Contact views Scroll to contact form*/
VZBase.infoContViewScroll = function () {
  jQuery(".jump-to-contact").on("click", function (e) {
    var header = jQuery(".header-wrapper").height() + 30;
    e.preventDefault();
    jQuery("html,body").animate(
      {
        scrollTop: jQuery(".contact-message-form form").offset().top - header,
      },
      1000
    );
  });
};

/*Search page loader show hide for Suche Search page only*/
VZBase.searchLoader = function () {
  jQuery(".path-suche").next(".ajax-progress").hide();
};

/* Change placeholder for search form on header */
VZBase.searchPlaceholder = function () {
  jQuery(
    ".region-header-right .block-views-exposed-filter-blocksearch-result-list-page-1 input"
  ).attr("placeholder", Drupal.t("Suchbegriff eingeben"));
  jQuery(
    ".region-project-header__right .block-views-exposed-filter-blocksearch-result-list-page-1 input"
  ).attr("placeholder", Drupal.t("Suchbegriff eingeben"));
};

/* Hide more link here before search is preformed */
VZBase.hideMoreIndexpage = function () {
  jQuery(
    "#block-views-block-index-page-of-the-3rd-level-block-1 .view-footer .more"
  ).hide();
};

/* Show more link here after search is preformed */
VZBase.showMoreIndexpage = function () {
  var placeholder = jQuery(
    "#views-exposed-form-index-page-of-the-3rd-level-block-1 .form-item-search-api-fulltext input"
  ).attr("placeholder");
  if (placeholder == "undefined") {
    jQuery(
      "#block-views-block-index-page-of-the-3rd-level-block-1 .view-footer .more"
    ).show();
  }
};

/* Beratungsangebot contact view  for the simple node view */
VZBase.beratungsangebotContactView = function () {
  jQuery(".page-node-type-information-centre, .info-centre-contact-views")
    .find(".views-field-body")
    .find(".field-content")
    .addClass("text-formatted");
};

/* Product teaser sidebar block tab body */
VZBase.tabbedBodyCollection = function () {
  jQuery(".tabbed-body > .view-content > .views-row").each(function (
    index,
    element
  ) {
    var tabArray = [];
    jQuery(element)
      .find(".views-row")
      .each(function (index, element) {
        tabArray.push(jQuery(element).find(".second-tab-body"));
      });
    jQuery(element)
      .find(".view-product-check-tabs .view-content")
      .after("<div class='collection-body'>");
    jQuery(element).find(".collection-body").append(tabArray);
  });
};

/* Product teaser body tabs */
VZBase.bodyTabs = function () {
  jQuery(
    ".tabbed-body > .view-content .views-row .view-content .views-row:first-child .second-tab-title, .second-tab-body:first-child"
  ).addClass("tab-active");
  jQuery(".second-tab-title").click(function () {
    jQuery(this)
      .addClass("tab-active")
      .closest(".views-row")
      .siblings()
      .find(".second-tab-title")
      .removeClass("tab-active");
    var tabClass = jQuery(this).attr("class").split(" ")[1];
    jQuery(this)
      .parents(".view-content")
      .next()
      .children()
      .each(function (index, element) {
        var tabBodyClass = jQuery(element).attr("class").split(" ")[1];
        if (tabClass == tabBodyClass) {
          jQuery(element)
            .addClass("tab-active")
            .siblings()
            .removeClass("tab-active");
        }
      });
  });
};

/* Product teaser main tabbed view */
VZBase.mainTabbedView = function () {
  jQuery(
    ".views-field-field-product-check-tab-title .tile-link, .views-field-field-product-check-tab-title .tile-title a"
  ).click(function (event) {
    event.preventDefault();
  });
  // Page Title
  jQuery(".page-node-type-product-check .page-title").prependTo(
    jQuery(
      ".page-node-type-product-check .product-teaser-wrapper .product-teaser"
    )
  );
  jQuery(".views-field-field-product-check-tab-title .tile-wrapper").click(
    function () {
      jQuery(this)
        .addClass("tab-active")
        .parents(".views-row")
        .siblings()
        .find(".tile-wrapper")
        .removeClass("tab-active");
      var mainTabSel = jQuery(this)
        .parents(".views-row")
        .attr("class")
        .split(" ")[0];
      //alert(mainTabSel);
      jQuery(".tabbed-body > .view-content")
        .children()
        .each(function (index, element) {
          var mainTabSel2 = jQuery(element).attr("class").split(" ")[0];
          //alert(mainTabSel2);
          if (mainTabSel == mainTabSel2) {
            jQuery(element)
              .addClass("tab-active")
              .siblings()
              .removeClass("tab-active");
            jQuery(element).parent().addClass("tab-active");
            jQuery(".page-node-type-product-check .field--name-body").hide();
            if (jQuery(element).find(".second-tab-title").length < 1) {
              jQuery(element)
                .find(".view-product-check-tabs > .view-content")
                .addClass("OneHide");
            }
          }
        });
    }
  );
};

/* New html teaser block hover effect */

VZBase.htmlTeaserHover = function () {
  jQuery(".page-node-type-channel-page .tile-wrapper").each(function (
    index,
    element
  ) {
    if (
      !jQuery(element).find(".html-teaser-body .html-with-hover").length > 0
    ) {
      jQuery(element).hover(function () {
        jQuery(element).css("background", "#fff");
      });
    }
  });
};

/* switching links on page reload also */
VZBase.switchTags = function () {
  if (window.location.href.indexOf("#") > -1) {
    var urlTag = window.location.href.substring(
      window.location.href.lastIndexOf("#") + 1
    );
    var myElement = jQuery(document).find("#" + urlTag);
    if (myElement.length) {
      if (jQuery(window).scrollTop() == 0) {
        var header =
          jQuery(".header-wrapper").outerHeight() * 2 +
          jQuery(".campagin-line-wrapper").outerHeight() +
          90;
      } else {
        var header = jQuery(".header-wrapper").height() + 60;
      }
      jQuery("html,body").animate(
        {
          scrollTop: jQuery(myElement).offset().top - header,
        },
        1000
      );
    }
  }
};

/* remove 'noreferrer' from Relation tag */
VZBase.changeProductAncRelTAG = function () {
  jQuery(
    ".view-product-teaser-siderbar-view .view-content a, .product-teaser-search-section.view-search-result-list .view-content a"
  ).each(function (index, element) {
    // get Relation attribute value
    var value = jQuery(this).attr("rel");

    if (value !== undefined && value != null) {
      // convert the values to an array
      var valArray = value.split(" ");
      // get an index for the 'noreferrer' value
      var relIndex = jQuery.inArray("noreferrer", valArray);

      if (relIndex !== undefined && relIndex > -1) {
        // remove the 'noreferrer' from the values array
        valArray.splice(relIndex, 1);
        // assign back the valus
        jQuery(this).attr("rel", valArray.join(" "));
      }
    }
  });
};

//adding wrapper for table
VZBase.table_wrapper = function () {
  jQuery("table").wrap('<div class="table-wrapper"></div>');
};

VZBase.spaceadd = function () {
  if (
    jQuery(".paragraph--type--claim").each(function () {
      jQuery(this).parent().addClass("texttile");
    })
  );
};

//side bar sticky elements
VZBase.sticky_elements = function () {
  // classes
  const $stickyToggler = jQuery(".sidebar-toggle");
  const $stickyElement = jQuery(".sticky-sidebar-elements");
  const $stickyOpenClass = "sticky-open";
  const $stickyClosedClass = "sticky-close";
  const $stickyMobileOpenClass = "sticky-mobile-open";
  const $stickyMobileClosedClass = "sticky-mobile-close";

  // mobile click
  if (jQuery(window).width() <= 766) {
    // if on mobile remove desktop toggle classes
    $stickyElement
      .removeClass($stickyOpenClass)
      .removeClass($stickyClosedClass);

    $stickyToggler.on("click", function () {
      if ($stickyElement.hasClass($stickyMobileClosedClass)) {
        // closed mobile

        // addClass mobile open
        // removeClass mobile hide
        $stickyElement
          .addClass($stickyMobileOpenClass)
          .removeClass($stickyMobileClosedClass);
      } else {
        // mobile open

        // removeClass mobile open
        // addClass mobile hide
        $stickyElement
          .removeClass($stickyMobileOpenClass)
          .addClass($stickyMobileClosedClass);
      }
    });
  } else {
    // desktop click

    // if on desktop remove mobile toggle classes
    $stickyElement
      .removeClass($stickyMobileOpenClass)
      .removeClass($stickyMobileClosedClass);

    $stickyToggler.on("click", function () {
      if ($stickyElement.hasClass($stickyClosedClass)) {
        // closed

        // addClass open
        // removeClass hide
        $stickyElement
          .addClass($stickyOpenClass)
          .removeClass($stickyClosedClass);
      } else {
        // open

        // removeClass open
        // addClass hide
        $stickyElement
          .removeClass($stickyOpenClass)
          .addClass($stickyClosedClass);
      }
    });
  }
};

//termine-calendar
VZBase.termine_calendar = function () {
  var eveDateFunc = function () {
    // disable the double click event on calendar widget
    drupalSettings.fullCalendarView[0].dblClickToCreate = false;
    jQuery("span.fc-title span").each(function () {
      var eventDate = jQuery(this).attr("data-date");
      var dayElement = jQuery("div.fc-content-skeleton td.fc-day-top[data-date=" + eventDate + "]");
      dayElement.addClass("fc-event-day");

      // add click event to day
      dayElement.on("click", function() {
        window.open(drupalSettings.path.baseUrl + drupalSettings.addForm + "/" + jQuery(this).attr("data-date").replaceAll("-", ""), "_parent");
      });

      // mark day by "current" CSS class if date equals selected date from URL path
      var url = window.location.href.split("/");
      var strippedDate = eventDate.replaceAll("-", "").trim();
      if (strippedDate == url[url.length - 1]) {
        jQuery("div.fc-content-skeleton td.fc-day-top[data-date=" + eventDate + "]").addClass("current-click");
        // if we mark the selected day then also remove marking of today
        jQuery("div.fc-content-skeleton td.fc-day-top.fc-today").removeClass("fc-today");
      }
    });
    jQuery(".fc-header-toolbar button").on("click", function () {
      eveDateFunc();
    });
  };

  // check at regular intervals if the callendar has been fully rendered already, other wise eveDateFunc() will not find certain elements
  var eventDateIntervalID = setInterval(function() {
    if (jQuery("span.fc-title").length > 0) {
      // cancel our named setInterval, calendar is fully rendered already at this point
      clearInterval(eventDateIntervalID);
      // jump in calendar to selected day, if present in URL
      var url = window.location.href.split("/");
      var dateFromUrl = url[url.length - 1];
      // simplified check if it's a YMD string
      if (dateFromUrl.match(/[0-9]{8}/)) {
        var dateFromUrlYear = dateFromUrl.substring(0, 4);
        var dateFromUrlMonth = dateFromUrl.substring(4, 6);
        var dateFromUrlDay = dateFromUrl.substring(6, 8);
        var dateObj = new Date(dateFromUrlYear, dateFromUrlMonth - 1, dateFromUrlDay);
        drupalSettings.calendar[0].gotoDate(dateObj);
      }
      // it is now safe to manipulate the rendered calendar
      eveDateFunc();
    }
  }, 50);
};

//hide youtube  title on play
VZBase.titleHide = function () {
  jQuery(".copyright-info-wrapper").each(function () {
    jQuery(".youtube_play").click(function () {
      jQuery(this)
        .parents(".paragraph--type--referenzfeld-video")
        .addClass("resume");
    });
  });
};

//autocomplete off
VZBase.autoCompleteOff = function () {
  jQuery(".bef-datepicker").attr("autocomplete", "off");
};

//terminal calendar filter
VZBase.terminal_filter = function () {
  jQuery("details").on("click", function () {
    jQuery("details").not(this).removeAttr("open");
    event.stopPropagation();
  });
  jQuery(window).click(function () {
    jQuery("details").removeAttr("open");
  });
};

//remove click function in calendar
// VZBase.disable_click = function () {
  // var disFunc = function () {
  //   jQuery(".fc-day-top").on("click", function () {
  //     if (jQuery(this).hasClass("fc-event-day")) {
  //       jQuery(this).trigger("click");
  //     } else {
  //       return false;
  //     }
  //   });
  // };
  // disFunc();
  //
  // jQuery(".fc-button-group").on("click", function () {
  //   disFunc();
  // });
// };

//search button click on termine calendar
VZBase.search_click = function () {
  var item = jQuery('<span class="search-icon"/>');
  jQuery(".form-item-combine, .form-item-field-state-value").prepend(item);
  jQuery(".view-termine-calendar-view .search-icon").each(function () {
    jQuery(this).click(function () {
      jQuery(
        ".view-termine-calendar-view #edit-submit-termine-calendar-view"
      ).click();
    });
  });
};

// Scroll user to tapped results
// ToDo: improve scroll behaviour
VZBase.tapped_result_scroll = function () {
  var _result = jQuery(".view-termine-calendar-view .view-filters")
    .next(".view-content")
    .children(".views-row");
  if (jQuery(window).scrollTop() == 0) {
    var header =
      jQuery("header").outerHeight() * 2 +
      jQuery(".campagin-line-wrapper").outerHeight() +
      10;
  } else {
    var header = jQuery("header").outerHeight() + 20;
  }
  var url = window.location.pathname.split("/"); // get url-length to prevent scrolling on calender start-page

  if (jQuery(window).width() < 1025 && _result.length && url.length >= 3) {
    jQuery("html, body").animate(
      {
        scrollTop:
          jQuery(
            ".view-termine-calendar-view .view-filters + .view-content .views-row:first-child"
          ).offset().top - header,
      },
      1000
    );
  }
};

//day click
// VZBase.day_click = function () {
//   var dayclickFunc = function () {
//     jQuery(".fc-day-top").click(function () {
//       console.log("JULIAN DAY CLICK");
//       jQuery(this).addClass("current-click");
//       jQuery(".fc-day-top").not(this).removeClass("current-click");
//       jQuery(".fc-day-top").not(this).removeClass("fc-today");
//     });
//   };
//   dayclickFunc();
//
//   jQuery(".fc-button-group").on("click", function () {
//     dayclickFunc();
//   });
// };

//after load day click
// VZBase.after_day_click = function () {
//   var clickFunc = function () {
//     console.log("JULIAN AFTER LOAD DAY CLICK");
//     var _pageUrl = jQuery(location).attr("href");
//     var parts = _pageUrl.split("/"),
//       last_part = parts[parts.length - 1];
//     var calDay = last_part.substr(last_part.length - 2);
//     var calYear = last_part.substr(0, 4);
//     var calMonth = last_part.substring(4, 6);
//     var calDate = calYear + "-" + calMonth + "-" + calDay;
//
//     jQuery(".fc-day-top").each(function () {
//       jQuery(".fc-day-top[data-date=" + calDate + "]").addClass(
//         "current-click"
//       );
//       if (jQuery(".fc-day-top").hasClass("current-click")) {
//         jQuery(".fc-day-top").removeClass("fc-today");
//       }
//     });
//   };
//   clickFunc();
//   jQuery(".fc-button-group").on("click", function () {
//     clickFunc();
//   });
// };

//after click

// VZBase.after_click = function () {
//   var afterClickFunction = function () {
//     console.log("JULIAN AFTER CLICK");
//     var base_url = window.location.origin;
//     var url = window.location.pathname.split("/");
//     var termine_url = base_url + "/" + url[1];
//     jQuery(".fc-event-day").each(function () {
//       jQuery(this).on("click", function () {
//         var edate_dummy = jQuery(this).data("date");
//         const eDate = edate_dummy.replace(/\-/g, "");
//
//         window.open(termine_url + "/" + eDate, "_parent");
//       });
//     });
//   };
//   afterClickFunction();
//   jQuery(".fc-button-group").on("click", function () {
//     afterClickFunction();
//   });
// };

//webform bg color
VZBase.webform_back_button = function () {
  jQuery(".webform-actions").each(function () {
    if (jQuery(this).find("input").hasClass("webform-button--previous")) {
      jQuery(this).addClass("back-button");
    } else {
      jQuery(this).removeClass("back-button");
    }
  });
};

//sticky width calculation
// VZBase.sticky_width = function () {
//   jQuery('.sticky-sidebar-elements').find('.field--name-field-sticky-el-link a').each(function () {
//     var link_text_count = jQuery(this).text().length;
//     if(link_text_count >= 10 && link_text_count < 40) {
//       jQuery(this).parents('.sticky-sidebar-elements').addClass('width-10');
//     }
//     else if(link_text_count >= 40) {
//       jQuery(this).parents('.sticky-sidebar-elements').addClass('width-20');
//     }
//   });
// }

// ###############
// Check if object is in DOM
VZBase.objectLengthChecker = function (objectSelector, classToAdd) {
  this.$object = jQuery(objectSelector);
  if (this.$object.length > 0) {
    jQuery("body").addClass(classToAdd);
  }
};

// ###############
// Slick call function
VZBase.slickSliderCalls = function (slickSliderSelector, options) {
  this.$slider = jQuery(slickSliderSelector);
  this.$slides = this.$slider.children(".vz-slider__slide");

  if (!this.$slider.length) {
    return false;
  }

  if (this.$slides.length == 1) {
    return false;
  }

  var defaults = {
    slidesToShowMobile: 1,
    slidesToShowTabletPortrait: 1,
    slidesToShowTablet: 1,
    slidesToShowDesktop: 1,
    slidesToScrollMobile: 1,
    slidesToScrollTabletPortrait: 1,
    slidesToScrollTablet: 1,
    slidesToScrollDesktop: 1,
    arrows: false,
    dots: false,
    autoplay: false,
    autoplaySpeed: 4000,
    pauseButton: true,
    slide: ".vz-slider__slide",
    adaptiveHeight: false,
    adaptiveHeightMobile: true,
    adaptiveHeightTablet: true,
    adaptiveHeightTabletPortrait: true,
    infinite: false,
  };

  var settings = jQuery.extend({}, defaults, options);

  if (settings) {
    jQuery(this.$slider).slick({
      slidesToShow: settings.slidesToShowDesktop,
      slidesToScroll: settings.slidesToScrollDesktop,
      arrows: settings.arrowsDesktop,
      dots: settings.dots,
      autoplay: settings.autoplay,
      autoplaySpeed: settings.autoplaySpeed,
      slide: settings.slide,
      adaptiveHeight: settings.adaptiveHeight,
      infinite: settings.infinite,
      responsive: [
        {
          // slick-settings from 768 to 1025
          breakpoint: 1025,
          settings: {
            slidesToShow: settings.slidesToShowTablet,
            slidesToScroll: settings.slidesToScrollTablet,
            adaptiveHeight: settings.adaptiveHeightTablet,
            arrows: settings.arrowsTablet,
          },
        },
        {
          // slick-settings from 480 to 766
          breakpoint: 767,
          settings: {
            slidesToShow: settings.slidesToShowTabletPortrait,
            slidesToScroll: settings.slidesToScrollTabletPortrait,
            adaptiveHeight: settings.adaptiveHeightTabletPortrait,
            arrows: settings.arrowsTabletPortrait,
          },
        },
        {
          // slick-settings from 0 to 479
          breakpoint: 480,
          settings: {
            slidesToShow: settings.slidesToShowMobile,
            slidesToScroll: settings.slidesToScrollMobile,
            adaptiveHeight: settings.adaptiveHeightMobile,
            arrows: settings.arrowsMobile,
          },
        },
      ],
    });
  }

  if (settings.arrowsDesktop == true) {
    this.$prevArrow = jQuery(this.$slider).find(".slick-prev");
    this.$nextArrow = jQuery(this.$slider).find(".slick-next");

    this.$prevArrow
      .attr("aria-label", "Vorherige Inhalte")
      .attr("tabindex", 0)
      .text("Vorherige Inhalte");
    this.$nextArrow
      .attr("aria-label", "Nächste Inhalte")
      .attr("tabindex", 0)
      .text("Nächste Inhalte");
  }

  if (settings.pauseButton == true) {
    this.$appendTarget = this.$slider.find(".slick-track");

    this.$pauseButton = jQuery(
      "<button class='vz-slider__pause slick-pause'>Pause</button>"
    );
    this.$pauseButton.addClass("is--playing");
    this.$pauseButton.insertAfter(this.$appendTarget);

    // pause/resume on click
    this.$pauseButton.click(function () {
      if (jQuery(this).html() == "Pause") {
        jQuery(slickSliderSelector).slick("slickPause");
        jQuery(this).html("Start");
        jQuery(this).addClass("is--paused");
        jQuery(this).removeClass("is--playing");
      } else {
        jQuery(slickSliderSelector).slick("slickPlay");
        jQuery(this).html("Pause");
        jQuery(this).addClass("is--playing");
        jQuery(this).removeClass("is--paused");
      }
    });
  }
};
// Slick call function end
// ###############

// ###############
// change data attribute function
VZBase.attributeChanger = function (attributeChangerTarget, attribute, value) {
  this.$target = jQuery(attributeChangerTarget);

  if (!this.$target.length) {
    return false;
  }

  if (attribute == "none") {
    this.$target.removeAttr("role");
  } else {
    this.$target.attr(attribute, value);
  }
};
VZBase.repositionElement = function () {
  var shariffMail = jQuery(
    ".shariff-button.mail"
  );
  var shariffMailParent = shariffMail.parent();

    jQuery(shariffMail).each(function () {
      jQuery(this).prependTo(shariffMailParent);
    });
};
// change data attribute function end
// #############

jQuery(document).ready(function () {
  VZBase.footerNewsletter2Go();
  VZBase.outsideClickNews2Go();
  VZBase.tableContentData();
  VZBase.tableOfContent();
  VZBase.twoClickVideo();
  VZBase.outsideClickSearch();
  VZBase.tilesList();
  VZBase.tileLinksToggle();
  VZBase.tileTextToggle();
  VZBase.footerNewsletter();
  VZBase.outsideClickNews();
  VZBase.projectTwoColBlock();
  VZBase.infoConFormScroll();
  VZBase.InfoConsOfferIndex();
  VZBase.customeSelectSearch();
  VZBase.commentShowHide();
  VZBase.infoContViewScroll();
  VZBase.searchPlaceholder();
  VZBase.eventTimeHide();
  VZBase.hideMoreIndexpage();
  //VZBase.sliderTeaserBottomIcon();
  VZBase.beratungsangebotContactView();
  VZBase.tabbedBodyCollection();
  VZBase.bodyTabs();
  VZBase.mainTabbedView();
  VZBase.htmlTeaserHover();
  VZBase.stickyFooterHidden();
  VZBase.StatusMessage();
  VZBase.table_wrapper();
  VZBase.spaceadd();
  VZBase.sticky_elements();
  VZBase.termine_calendar();
  // VZBase.newsletterExist();
  VZBase.titleHide();
  VZBase.terminal_filter();
  // VZBase.disable_click();
  VZBase.search_click();
  // VZBase.day_click();
  // VZBase.after_click();
  VZBase.webform_back_button();
  // VZBase.sticky_width();
});

jQuery(window).on("load", function () {
  VZBase.headerSearch();
  VZBase.eventTeaser();
  VZBase.supportBoxTabs();
  VZBase.serviceEqHeight();
  VZBase.repositionElement();
  VZBase.printFunction();
  VZBase.searchHeadingIndex();
  VZBase.landingAnchorNav();
  VZBase.placeholderProvider();
  VZBase.infiniteCustomPagerdata();
  VZBase.loadMoreFunctionality();
  VZBase.tileDropChange();
  VZBase.serviceDropChange();
  VZBase.stateProjectClick();
  VZBase.switchTags();
  VZBase.changeProductAncRelTAG();
  VZBase.StatusMessage();
  // VZBase.after_day_click();
  VZBase.tapped_result_scroll();
});

jQuery(window).resize(function () {
  VZBase.eventTeaser();
  VZBase.twoClickVideo();
});

jQuery(document).ajaxComplete(function () {
  VZBase.tilesList();
  VZBase.tileTextToggle();
  VZBase.searchLoader();
  VZBase.eventTimeHide();
  VZBase.showMoreIndexpage();
});

jQuery(window).scroll(function () {
  VZBase.stickyHeader();
  VZBase.stickyFooter();
});

(function (jQuery, Drupal) {
  Drupal.behaviors.vzBehavior = {
    attach: function attach() {
      jQuery("body")
        .once("vz")
        .each(function () {
          VZBase.attributeChanger(
            ".field--name-field-article-accordion-title",
            "role",
            "button"
          );
          VZBase.attributeChanger(
            ".field--name-field-article-acoordion-text",
            "role",
            "region"
          );
          VZBase.attributeChanger(
            "#edit-submit-search-result-list",
            "value",
            "Suche abschicken"
          );
          VZBase.attributeChanger(
            "#edit-submit-search-result-list--3",
            "value",
            "Suche abschicken"
          );
          VZBase.attributeChanger(
            ".js-form-item-search-api-fulltext ~ .form-actions .form-submit",
            "value",
            "Suche abschicken"
          );
          VZBase.slickSliderCalls("[data-js-vz-slider='project-slider']", {
            arrowsDesktop: false,
            arrowsTablet: false,
            arrowsTabletPortrait: false,
            arrowsMobile: false,
            autoplay: true,
            infinite: true,
            focusOnChange: true,
            accessibility: true,
            lazyLoad: 'ondemand',
          });
          VZBase.slickSliderCalls("[data-js-vz-slider='gallery-slider']", {
            arrowsDesktop: true,
            arrowsTablet: true,
            arrowsTabletPortrait: true,
            arrowsMobile: true,
            dots: true,
            pauseButton: false,
            adaptiveHeight: true,
            adaptiveHeightMobile: true,
            adaptiveHeightTablet: true,
            adaptiveHeightTabletPortrait: true,
            focusOnChange: true,
            accessibility: true,
          });
          VZBase.slickSliderCalls("[data-js-vz-slider='facts-slider']", {
            arrowsDesktop: true,
            arrowsTablet: true,
            arrowsTabletPortrait: true,
            arrowsMobile: true,
            dots: true,
            pauseButton: false,
            adaptiveHeight: true,
            adaptiveHeightMobile: true,
            adaptiveHeightTablet: true,
            adaptiveHeightTabletPortrait: true,
            focusOnChange: true,
            accessibility: true,
          });
          VZBase.slickSliderCalls("[data-js-vz-slider='project-teaser-slider']", {
              arrowsDesktop: true,
              arrowsTablet: true,
              arrowsTabletPortrait: true,
              arrowsMobile: true,
              dots: true,
              pauseButton: false,
              adaptiveHeight: true,
              adaptiveHeightMobile: true,
              adaptiveHeightTablet: true,
              adaptiveHeightTabletPortrait: true,
              autoplay: false,
              slidesToShowMobile: 1,
              slidesToShowTablet: 2,
              slidesToShowTabletPortrait: 2,
              slidesToShowDesktop: 4,
              slidesToScrollDesktop: 4,
              slidesToScrollMobile: 1,
              slidesToScrollTablet: 2,
              slidesToScrollTabletPortrait: 2,
              focusOnChange: true,
              accessibility: true,
            }
          );
          VZBase.slickSliderCalls("[data-js-vz-slider='current-topics']", {
            arrowsDesktop: true,
            arrowsTablet: true,
            arrowsTabletPortrait: true,
            arrowsMobile: true,
            dots: true,
            pauseButton: false,
            adaptiveHeight: true,
            adaptiveHeightMobile: true,
            adaptiveHeightTablet: true,
            adaptiveHeightTabletPortrait: true,
            autoplay: false,
            slidesToShowMobile: 1,
            slidesToShowTablet: 2,
            slidesToShowDesktop: 2,
            slidesToScrollMobile: 1,
            slidesToScrollTablet: 2,
            slidesToScrollDesktop: 2,
            focusOnChange: true,
            accessibility: true,
          }
        );
          VZBase.slickSliderCalls("[data-js-vz-slider='frontpage-slider']", {
            arrowsDesktop: true,
            arrowsTablet: true,
            arrowsTabletPortrait: false,
            arrowsMobile: false,
            dots: true,
            autoplay: false,
            pauseButton: false,
            slidesToShowMobile: 1,
            slidesToShowTabletPortrait: 1,
            slidesToShowTablet: 2,
            slidesToShowDesktop: 3,
            slidesToScrollMobile: 1,
            slidesToScrollTabletPortrait: 1,
            slidesToScrollTablet: 2,
            slidesToScrollDesktop: 3,
            infinite: false,
            adaptiveHeightTablet: true,
            adaptiveHeightTabletPortrait: true,
            adaptiveHeightMobile: true,
            adaptiveHeight: true,
            focusOnChange: true,
            accessibility: true,
            lazyLoad: 'ondemand',
          });
          VZBase.attributeChanger(".vz-slider__slide", "role", "listitem");
          VZBase.attributeChanger(".slick-track", "role", "list");
          VZBase.objectLengthChecker(".view.multiple-exposed-filters", "index_level_three");
        });
    },
  };
})(jQuery, Drupal);
;
/*all code for mega menu will be in this file*/

// Ser Global Namespace = MegaMenuBase
var MegaMenuBase = window.MegaMenuBase || {};
// global variable for window width
var windowWth = jQuery(window).width();

tabletReady = true;
var executed = false;
var dynamicContentLoaded = false;
var staticContentLoaded = false;
var dropdownCotentLoaded = false;
var footerCotentLoaded = false;

// menu content loading on Ajax load
MegaMenuBase.getRegionContent = function (region, id) {
  var jsonURL = drupalSettings.path.baseUrl + "menu/" + region;
  jQuery.ajax({
    type: "GET",
    url: jsonURL,
    async: true,
    //data: { "ajaxCall": true },
    dataType: "html",
    success: function (html) {
      if (html !== "error" && typeof html != "undefined") {
        jQuery(id).html(html);
        // call structure arrangement function for dynamic menu list
        if (
          windowWth > 767 &&
          !dynamicContentLoaded &&
          id == "#flyout-dynamic"
        ) {
          dynamicContentLoaded = true;
          MegaMenuBase.highestList();
        }
        if (windowWth < 767 && id == "#flyout-dynamic") {
          dynamicContentLoaded = true;
        }
        if (id == "#flyout-static") {
          staticContentLoaded = true;
        }
        if (id == "#flyout-dropdown") {
          dropdownCotentLoaded = true;
        }
        if (id == "#flyout-footer") {
          footerCotentLoaded = true;
        }
        if (
          footerCotentLoaded &&
          dynamicContentLoaded &&
          staticContentLoaded &&
          dropdownCotentLoaded
        ) {
          if (windowWth > 767 && windowWth < 1025) {
            MegaMenuBase.toggleSubMenu();
          }
          // functions for all views
          MegaMenuBase.toggleMenu();
          if (windowWth <= 767) {
            MegaMenuBase.mobBehaviourMenuLinks();
            MegaMenuBase.mobBehaviour();
          }

          if (windowWth > 1024) {
            MegaMenuBase.outsideClick();
          }
        }
      }
    },
    error: function () {
      jQuery(id).html(
        Drupal.t("There is some internal error to load the menu content")
      );
    },
  });
};

// Call ajax function for loading menu items.
MegaMenuBase.menuAjaxcall = function () {
  if (jQuery("#flyout-dropdown").is(":empty")) {
    MegaMenuBase.getRegionContent("flyout_dropdown_links", "#flyout-dropdown");
  } else {
    dropdownCotentLoaded = true;
  }
  if (jQuery("#flyout-dynamic").is(":empty")) {
    MegaMenuBase.getRegionContent("flyout_dynamic_links", "#flyout-dynamic");
  } else {
    dynamicContentLoaded = true;
  }
  if (jQuery("#flyout-static").is(":empty")) {
    MegaMenuBase.getRegionContent("flyout_static_links", "#flyout-static");
  } else {
    staticContentLoaded = true;
  }
  if (jQuery("#flyout-footer").is(":empty")) {
    MegaMenuBase.getRegionContent("flyout_footer_links", "#flyout-footer");
  } else {
    footerCotentLoaded = true;
  }
};

MegaMenuBase.toggleMenu = function () {
  jQuery(".menuButton").on("click", function () {
    var headerHeight = jQuery("header").outerHeight();
    jQuery("body").toggleClass("menu-open");
    jQuery(".flyout_main_wrapper").toggle();
    jQuery(".flyout_main_wrapper").css("top", headerHeight);
    jQuery(this).attr("aria-expanded", function (i, attr) {
      return attr == "true" ? "false" : "true";
    });
    if (!executed) {
      executed = true;
      MegaMenuBase.loadFunctionCall();
    }
  });
  jQuery(".menuButton").one("click", function () {
    if (windowWth > 1024) {
      MegaMenuBase.menuProjectSectionWrap();
    }
    MegaMenuBase.staicListWrap();
  });
};

// call mega menu dropdown functionality
MegaMenuBase.loadFunctionCall = function () {
  jQuery('.region-flyout-static-links [class*="dropdown"]').wrapAll(
    '<li class="dropdownWrap"></li>'
  );
  // Call all element classe where you want to apply state project function
  jQuery(
    ".flyout_main_wrapper .region-flyout-dropdown-links, .dropdownWrap"
  ).stateProjectList();
  // click function for mega menu section to toggle dropdowns
  jQuery(".flyout_main_wrapper")
    .find(".project-value")
    .each(function () {
      jQuery(this).on("click", function (event) {
        jQuery(this).toggleClass("active");
        jQuery(this).next("ul").toggle();
        jQuery(this).next().next("ul").toggle();

        // remove styles and classes from other selectList elements
        jQuery(".state-project-section")
          .find(".project-value")
          .not(this)
          .removeClass("active");
        jQuery(".state-project-section")
          .find(".project-value")
          .not(this)
          .next("ul")
          .hide();
        jQuery(".state-project-section")
          .find(".project-value")
          .not(this)
          .next()
          .next("ul")
          .hide();
      });
    });

  // for mega menu dropdown
  var mmdrop = Drupal.t("Select federal state");
  var mmdrop1 = Drupal.t("Select project");
  var selectDrop = Drupal.t("Select");
  jQuery(".region-flyout-dropdown-links .state-project-section, .dropdownWrap")
    .find('nav .vz-listbox__label:contains("Beratung")')
    .next()
    .html(mmdrop);
  jQuery(".region-flyout-dropdown-links .state-project-section, .dropdownWrap")
    .find('nav .vz-listbox__label:contains("Projekte")')
    .next()
    .html(mmdrop1);
  jQuery(".region-flyout-dropdown-links .state-project-section, .dropdownWrap")
    .find('nav .vz-listbox__label:not(:contains("Beratung"), :contains("Projekte"))')
    .next()
    .html(selectDrop);
};

MegaMenuBase.staicListWrap = function () {
  // var dropListSection = jQuery(".region-flyout-static-links").find(".menu--flyout-static-link").children("ul");
  // var dropListSection = jQuery(".region-flyout-static-links").find(".block-menu.navigation").children("ul");
  // jQuery(".dropdownWrap").wrap("<li class='menu-item state-project-menu-wrap dropListWrap'></li>");
  // jQuery(".dropListWrap").prependTo(dropListSection);
  // wrap every 3 lists into a wrapper "static-menu__wrap"
  if (windowWth > 767) {
    // var listHeight = jQuery(".region-flyout-static-links").find('nav.menu--flyout-static-link').children('ul.menu').children('li.menu-item');
    var listHeight = jQuery(".region-flyout-static-links")
      .find('nav.block-menu.navigation:not([class*="dropdown"])')
      .children("ul.menu")
      .children("li.menu-item");
    var dropdown_html = jQuery("#flyout-static").find(".dropdownWrap").html();

    for (var i = 0; i < listHeight.length; ) {
      if (i == 0 && dropdown_html !== undefined) {
        listHeight
          .slice(i, i + 2)
          .wrapAll("<li class='static-menu__wrap'><ul></ul></li>");
        jQuery(".dropdownWrap").prependTo(
          "nav.block-menu.navigation > ul li:first-child ul:first-child"
        );
        i += 2;
        continue;
      }
      listHeight
        .slice(i, i + 3)
        .wrapAll("<li class='static-menu__wrap'><ul></ul></li>");
      i += 3;
    }

    jQuery(".region-flyout-static-links")
      .find(".static-menu__wrap")
      .each(function () {
        if (jQuery(this).children("ul").find(">li").length == 2) {
          jQuery(this).children("ul").children("li").addClass("singleItem");
          jQuery(this)
            .children()
            .append('<li class="menu-item visually-hidden"></li>');
        }
        if (jQuery(this).children("ul").find(">li").length == 1) {
          jQuery(this).children("ul").children("li").addClass("singleItem");
          jQuery(this)
            .children()
            .append(
              '<li class="menu-item"></li><li class="menu-item visually-hidden"></li>'
            );
        }
      });
  }
};

// wrap menu in the pair of 3
MegaMenuBase.highestList = function () {
  // find the first menu list items
  var dynamiclistHeight = jQuery(".region-flyout-dynamic-links")
    .find(".dynamic-list")
    .children("li.item");
  // wrap every 3 lists into a wrapper "dynamic-link--menu__wrap"
  for (var i = 0; i < dynamiclistHeight.length; i += 3) {
    dynamiclistHeight
      .slice(i, i + 3)
      .wrapAll("<li class='dynamic-link--menu__wrap'><ul></ul></li>");
  }
};

// change position of state project section
MegaMenuBase.menuProjectSectionWrap = function () {
  var navListElement = jQuery(
    ".dynamic-links__wrapper .region-flyout-dynamic-links .dynamic-list .dynamic-link--menu__wrap:last-child > ul > li:last-child"
  );
  var dynamicList = jQuery(
    ".dynamic-links__wrapper .dynamic-list .dynamic-link--menu__wrap:last-child > ul > li"
  );
  // insert wrapped li in flyout menu
  if (dynamicList.length > 0 && dynamicList.length < 3) {
    // find state project section wrapper and wrap into li
    jQuery(".flyout_main_wrapper .state-project_section__wrapper").wrapAll(
      "<li class='item state-project-menu-wrap'></li>"
    );
    jQuery(".state-project-menu-wrap").insertAfter(navListElement);
  }
};

// Close menu on outside click of menu wrapper
MegaMenuBase.outsideClick = function () {
  jQuery(document).mouseup(function (outsideclose) {
    // get elements to exclude from outside wrapper
    var container = jQuery(
      ".region-flyout-dynamic-links, .state-project_section__wrapper, .region-flyout-static-links, .main-menu-service nav, .menuButton"
    );
    if (
      !container.is(outsideclose.target) && // if the target of the click isn't the menu wrapper...
      container.has(outsideclose.target).length === 0 && // ... nor a descendant of the menu wrapper
      outsideclose.target != jQuery(".flyout_main_wrapper").get(0)
    ) {
      // nor the scrollbar
      // hide the menu wrapper and remove menu-open class from the body
      container.parents(".flyout_main_wrapper").hide();
      jQuery("body").removeClass("menu-open");
    }
  });
};

// toggle submenu for tablet view
MegaMenuBase.toggleSubMenu = function () {
  jQuery(".menuButton").one("click", function () {
    jQuery(".dynamic-link--menu__wrap > ul > li.item > a").after(
      '<span class="arrow"></span>'
    );
  });
  jQuery(document).on(
    "click",
    ".dynamic-link--menu__wrap > ul > li.item .arrow",
    function (e) {
      // e.preventDefault();
      jQuery(this).parent(".item").toggleClass("active");
    }
  );
};

// toggle menu for mobile view
MegaMenuBase.mobBehaviour = function () {
  // for static menu links
  jQuery(".region-flyout-static-links nav > ul > li > a").on(
    "click",
    function (e) {
      if (!jQuery(this).parent("li").hasClass("active")) {
        e.preventDefault();
      }

      // hide menu containers first on click of any link
      jQuery(
        ".state-project_section__wrapper, .dynamic-links__wrapper, .main-menu-service, .dropdownWrap"
      ).hide();
      // add active class of current link's parent li element
      jQuery(this).parent("li").addClass("active").siblings().hide();
      // add open class to the general service block
      jQuery(".main-menu-general-service").addClass("open");
      // check of static links child li's child's length is less than 0
      if (
        jQuery(".region-flyout-static-links nav > ul > li.active").children(
          ".main-menu-back-link"
        ).length <= 0
      ) {
        var mainMenuDynamicLink = Drupal.t("Main Menu");
        // prepend the main menu link to go back
        jQuery(".region-flyout-static-links nav > ul > li.active").prepend(
          "<div class='main-menu-back-link'>" + mainMenuDynamicLink + "</div>"
        );
        // click on main menu link and remove classes from the following elements
        jQuery(".main-menu-back-link").on("click", function () {
          jQuery(this).parent("li").removeClass("active").siblings().show();
          jQuery(this).remove();
          jQuery(
            ".state-project_section__wrapper, .dynamic-links__wrapper, .main-menu-service, .dropdownWrap"
          ).show();
          jQuery(".main-menu-general-service").removeClass("open");
        });
      }
    }
  );

  jQuery(".dynamic-open-link").on("click", function (e) {
    if (jQuery(".dynamic-links__wrapper").hasClass("level-1")) {
      var linkvalue = jQuery(".themen-flyout .view-header h2 a, .themen-flyout .view-header span a").attr("href");
      setTimeout(function () {
        jQuery(".dynamic-open-link").attr("href", linkvalue);
      }, 500);
    }
  });
};

// for dynamic menu links mobile view
MegaMenuBase.mobBehaviourMenuLinks = function () {
  // to open dynamic menu links level 1
  jQuery(
    ".dynamic-open-link, .region-flyout-static-links nav > ul > li.active"
  ).on("click", function () {
    jQuery(".dynamic-links__wrapper").addClass("level-1");
    jQuery(
      ".state-project_section__wrapper, .main-menu-general-service"
    ).hide();
  });
  // to open dynamic menu link level 2
  jQuery(document).on("click", ".dynamic-list li > a", function (link) {
    // link.preventDefault();
    if (jQuery(this).parents("ul.dynamic-list").hasClass("prevented")) {
      link.preventDefault();
      jQuery(".dynamic-list").removeClass("prevented");
    }
    jQuery(this).parents("li.item").addClass("active").siblings().hide();
    jQuery(".dynamic-links__wrapper").addClass("level-2");
    jQuery(".dynamic-open-link").attr("href", "javascript:void(0)");
  });
  // come back to level-1 menu
  jQuery(".dynamic-open-link").on("click", function () {
    jQuery(".dynamic-links__wrapper").removeClass("level-2");
    jQuery(".dynamic-list li.item").removeClass("active").siblings().show();
    jQuery(".dynamic-list").addClass("prevented");
  });

  // come back to main menu
  jQuery(".mainMenuLink").on("click", function () {
    if (jQuery(".dynamic-links__wrapper").hasClass("level-1")) {
      jQuery(".dynamic-links__wrapper").removeClass("level-1");
      jQuery(
        ".state-project_section__wrapper, .main-menu-general-service"
      ).show();
    }
    jQuery(".dynamic-open-link").attr("href", "javascript:void(0)");
  });

  // close all menu on click of menu button
  jQuery(".menuButton").on("click", function () {
    if (jQuery("body").hasClass("menu-open")) {
      jQuery(".topics.dynamic-links__wrapper").removeClass("level-1 level-2");
      jQuery(
        ".state-project_section__wrapper, .main-menu-general-service, .dynamic-links__wrapper, .main-menu-service"
      ).show();
      jQuery(".region-flyout-static-links nav > ul > li")
        .removeClass("active")
        .siblings()
        .show();
      jQuery(".region-flyout-static-links nav > ul > li")
        .children(".main-menu-back-link")
        .remove();
      // add open class to the general service block
      jQuery(".main-menu-general-service").removeClass("open");
    }
  });
};

//// functions to run on window load
//jQuery(window).on('load', function () {
//
//});

jQuery(document).ready(function () {
  if (!jQuery("body").hasClass("micro-site-project")) {
    MegaMenuBase.menuAjaxcall();
  }
});
;
// Ser Global Namespace = ProjectMenuBase
var ProjectMenuBase = window.ProjectMenuBase || {};
// global variable for window width
var windowWth = jQuery(window).width();


ProjectMenuBase.expandMenu = function() {
  jQuery(".project-header--inner nav > ul > li.menu-item--expanded").append('<span class="arrow"></span>');
  jQuery(".project-header--inner nav > ul > li.menu-item--expanded .arrow, .project-header--inner nav > ul > li.menu-item--expanded > a").click(function(e) {
    e.preventDefault();
    jQuery(this).parent("li").toggleClass("active");
    jQuery(this).parent("li").siblings().removeClass("active");
  });
};

ProjectMenuBase.toggleMenuSmall = function() {
  jQuery(".projectMenuBTN").on("click", function() {
    jQuery(this).toggleClass("is-clicked");
    jQuery(".project-header--inner nav").toggleClass("has-opened");
  });
};

// Equal height for stage slider
ProjectMenuBase.projectMenuList = function() {
  if (windowWth > 767 && windowWth < 1025) {
    jQuery(".projectMenuBTN").one("click", function() {
      var menuList = jQuery(".project-header--inner nav > ul > li.menu-item--expanded");
      var maxHeight = 0;

      jQuery(menuList).each(function() {
        if (jQuery(this).height() > maxHeight) {
          maxHeight = jQuery(this).height();
          jQuery(menuList).height(maxHeight);
        }
      });
    });
  }
};

ProjectMenuBase.outsideClose = function() {
  jQuery(document).mouseup(function(outsideclose) {
    // get elements to exclude from outside wrapper
    var container = jQuery(".project-header--inner nav > ul > li.menu-item--expanded");
    if (!container.is(outsideclose.target) // if the target of the click isn't the menu wrapper...
      && container.has(outsideclose.target).length === 0) // ... nor a descendant of the menu wrapper
    {
      // remove active class from the active link list
      container.removeClass("active");
      jQuery(".project-header--inner nav").removeClass("has-opened");
    }
  });
};


jQuery(function() {
  // for mobile only
  /*if(windowWth <= 767) {
    ProjectMenuBase.expandMenu();
  }*/
  // for tablet and mobile version
  if (windowWth <= 1024) {
    ProjectMenuBase.toggleMenuSmall();
  }
  // for desktop version
  if (windowWth > 1024) {
    ProjectMenuBase.outsideClose();
  }
  // for tablet only
  //ProjectMenuBase.projectMenuList();
  ProjectMenuBase.expandMenu();
});
;
// OpenLayers. See https://openlayers.org/
// License: https://raw.githubusercontent.com/openlayers/openlayers/master/LICENSE.md
// Version: v4.0.1
;(function (root, factory) {
  if (typeof exports === "object") {
    module.exports = factory();
  } else if (typeof define === "function" && define.amd) {
    define([], factory);
  } else {
    root.ol = factory();
  }
}(this, function () {
  var OPENLAYERS = {};
  var k,aa=this;function t(a,b){var c=OPENLAYERS,d=a.split("."),c=c||aa;d[0]in c||!c.execScript||c.execScript("var "+d[0]);for(var e;d.length&&(e=d.shift());)d.length||void 0===b?c[e]?c=c[e]:c=c[e]={}:c[e]=b};var ba,ca;function da(a,b){return a>b?1:a<b?-1:0}function ea(a,b){return 0<=a.indexOf(b)}function fa(a,b,c){var d=a.length;if(a[0]<=b)return 0;if(!(b<=a[d-1]))if(0<c)for(c=1;c<d;++c){if(a[c]<b)return c-1}else if(0>c)for(c=1;c<d;++c){if(a[c]<=b)return c}else for(c=1;c<d;++c){if(a[c]==b)return c;if(a[c]<b)return a[c-1]-b<b-a[c]?c-1:c}return d-1}function ga(a,b){var c,d=Array.isArray(b)?b:[b],e=d.length;for(c=0;c<e;c++)a[a.length]=d[c]}
function ha(a,b){for(var c=a.length>>>0,d,e=0;e<c;e++)if(d=a[e],b(d,e,a))return d;return null}function ia(a,b){var c=a.length;if(c!==b.length)return!1;for(var d=0;d<c;d++)if(a[d]!==b[d])return!1;return!0}function ja(a){var b=ka,c=a.length,d=Array(a.length),e;for(e=0;e<c;e++)d[e]={index:e,value:a[e]};d.sort(function(a,c){return b(a.value,c.value)||a.index-c.index});for(e=0;e<a.length;e++)a[e]=d[e].value}function la(a,b){var c;return a.every(function(d,e){c=e;return!b(d,e,a)})?-1:c}
function ma(a,b){var c=b||da;return a.every(function(b,e){if(!e)return!0;var d=c(a[e-1],b);return!(0<d||0===d)})};function u(a,b){a.prototype=Object.create(b.prototype);a.prototype.constructor=a}function na(){}function w(a){return a.ko||(a.ko=++oa)}var oa=0;function pa(a){this.message="Assertion failed. See https://openlayers.org/en/v4.0.1/doc/errors/#"+a+" for details.";this.code=a;this.name="AssertionError"}u(pa,Error);function qa(a,b){if(!a)throw new pa(b);};function sa(a,b,c,d){this.da=a;this.ba=b;this.fa=c;this.ja=d}function ta(a,b,c){return a.da<=b&&b<=a.ba&&a.fa<=c&&c<=a.ja}function ua(a,b){return a.da==b.da&&a.fa==b.fa&&a.ba==b.ba&&a.ja==b.ja}function va(a,b){return a.da<=b.ba&&a.ba>=b.da&&a.fa<=b.ja&&a.ja>=b.fa};function wa(a,b,c){return Math.min(Math.max(a,b),c)}var xa=function(){var a;"cosh"in Math?a=Math.cosh:a=function(a){a=Math.exp(a);return(a+1/a)/2};return a}();function ya(a){qa(0<a,29);return Math.pow(2,Math.ceil(Math.log(a)/Math.LN2))}function za(a,b,c,d,e,f){var g=e-c,h=f-d;if(g||h){var l=((a-c)*g+(b-d)*h)/(g*g+h*h);1<l?(c=e,d=f):0<l&&(c+=g*l,d+=h*l)}return Aa(a,b,c,d)}function Aa(a,b,c,d){a=c-a;b=d-b;return a*a+b*b}function Ba(a){return a*Math.PI/180}
function Ca(a,b){var c=a%b;return 0>c*b?c+b:c}function Da(a,b,c){return a+c*(b-a)};function Ea(a,b,c){void 0===c&&(c=[0,0]);c[0]=a[0]+2*b;c[1]=a[1]+2*b;return c}function Fa(a,b,c){void 0===c&&(c=[0,0]);c[0]=a[0]*b+.5|0;c[1]=a[1]*b+.5|0;return c}function Ga(a,b){if(Array.isArray(a))return a;void 0===b?b=[a,a]:b[0]=b[1]=a;return b};function Ha(a){for(var b=Ia(),c=0,d=a.length;c<d;++c)Ja(b,a[c]);return b}function Ka(a,b,c){return c?(c[0]=a[0]-b,c[1]=a[1]-b,c[2]=a[2]+b,c[3]=a[3]+b,c):[a[0]-b,a[1]-b,a[2]+b,a[3]+b]}function Na(a,b){return b?(b[0]=a[0],b[1]=a[1],b[2]=a[2],b[3]=a[3],b):a.slice()}function Oa(a,b,c){b=b<a[0]?a[0]-b:a[2]<b?b-a[2]:0;a=c<a[1]?a[1]-c:a[3]<c?c-a[3]:0;return b*b+a*a}function Qa(a,b){return Sa(a,b[0],b[1])}function Ta(a,b){return a[0]<=b[0]&&b[2]<=a[2]&&a[1]<=b[1]&&b[3]<=a[3]}
function Sa(a,b,c){return a[0]<=b&&b<=a[2]&&a[1]<=c&&c<=a[3]}function Ua(a,b){var c=a[1],d=a[2],e=a[3],f=b[0],g=b[1],h=0;f<a[0]?h|=16:f>d&&(h|=4);g<c?h|=8:g>e&&(h|=2);h||(h=1);return h}function Ia(){return[Infinity,Infinity,-Infinity,-Infinity]}function Va(a,b,c,d,e){return e?(e[0]=a,e[1]=b,e[2]=c,e[3]=d,e):[a,b,c,d]}function Wa(a,b){var c=a[0],d=a[1];return Va(c,d,c,d,b)}function Xa(a,b,c,d,e){e=Va(Infinity,Infinity,-Infinity,-Infinity,e);return Ya(e,a,b,c,d)}
function Za(a,b){return a[0]==b[0]&&a[2]==b[2]&&a[1]==b[1]&&a[3]==b[3]}function $a(a,b){b[0]<a[0]&&(a[0]=b[0]);b[2]>a[2]&&(a[2]=b[2]);b[1]<a[1]&&(a[1]=b[1]);b[3]>a[3]&&(a[3]=b[3]);return a}function Ja(a,b){b[0]<a[0]&&(a[0]=b[0]);b[0]>a[2]&&(a[2]=b[0]);b[1]<a[1]&&(a[1]=b[1]);b[1]>a[3]&&(a[3]=b[1])}function Ya(a,b,c,d,e){for(;c<d;c+=e){var f=a,g=b[c],h=b[c+1];f[0]=Math.min(f[0],g);f[1]=Math.min(f[1],h);f[2]=Math.max(f[2],g);f[3]=Math.max(f[3],h)}return a}
function ab(a,b,c){var d;return(d=b.call(c,bb(a)))||(d=b.call(c,cb(a)))||(d=b.call(c,db(a)))?d:(d=b.call(c,eb(a)))?d:!1}function fb(a){var b=0;gb(a)||(b=hb(a)*ib(a));return b}function bb(a){return[a[0],a[1]]}function cb(a){return[a[2],a[1]]}function jb(a){return[(a[0]+a[2])/2,(a[1]+a[3])/2]}
function kb(a,b,c,d,e){var f=b*d[0]/2;d=b*d[1]/2;b=Math.cos(c);var g=Math.sin(c);c=f*b;f*=g;b*=d;var h=d*g,l=a[0],m=a[1];a=l-c+h;d=l-c-h;g=l+c-h;c=l+c+h;var h=m-f-b,l=m-f+b,p=m+f+b,f=m+f-b;return Va(Math.min(a,d,g,c),Math.min(h,l,p,f),Math.max(a,d,g,c),Math.max(h,l,p,f),e)}function ib(a){return a[3]-a[1]}function lb(a,b,c){c=c?c:Ia();mb(a,b)&&(c[0]=a[0]>b[0]?a[0]:b[0],c[1]=a[1]>b[1]?a[1]:b[1],c[2]=a[2]<b[2]?a[2]:b[2],c[3]=a[3]<b[3]?a[3]:b[3]);return c}function eb(a){return[a[0],a[3]]}
function db(a){return[a[2],a[3]]}function hb(a){return a[2]-a[0]}function mb(a,b){return a[0]<=b[2]&&a[2]>=b[0]&&a[1]<=b[3]&&a[3]>=b[1]}function gb(a){return a[2]<a[0]||a[3]<a[1]}function nb(a,b){var c=(a[2]-a[0])/2*(b-1),d=(a[3]-a[1])/2*(b-1);a[0]-=c;a[2]+=c;a[1]-=d;a[3]+=d}
function ob(a,b,c){a=[a[0],a[1],a[0],a[3],a[2],a[1],a[2],a[3]];b(a,a,2);var d=[a[0],a[2],a[4],a[6]],e=[a[1],a[3],a[5],a[7]];b=Math.min.apply(null,d);a=Math.min.apply(null,e);d=Math.max.apply(null,d);e=Math.max.apply(null,e);return Va(b,a,d,e,c)};var pb="function"===typeof Object.assign?Object.assign:function(a,b){if(!a||null===a)throw new TypeError("Cannot convert undefined or null to object");for(var c=Object(a),d=1,e=arguments.length;d<e;++d){var f=arguments[d];if(void 0!==f&&null!==f)for(var g in f)f.hasOwnProperty(g)&&(c[g]=f[g])}return c};function qb(a){for(var b in a)delete a[b]}function rb(a){var b=[],c;for(c in a)b.push(a[c]);return b}function sb(a){for(var b in a)return!1;return!b};/*

 Latitude/longitude spherical geodesy formulae taken from
 http://www.movable-type.co.uk/scripts/latlong.html
 Licensed under CC-BY-3.0.
*/
function tb(a){this.radius=a}tb.prototype.a=function(a){for(var b=0,c=a.length,d=a[c-1][0],e=a[c-1][1],f=0;f<c;f++)var g=a[f][0],h=a[f][1],b=b+Ba(g-d)*(2+Math.sin(Ba(e))+Math.sin(Ba(h))),d=g,e=h;return b*this.radius*this.radius/2};tb.prototype.b=function(a,b){var c=Ba(a[1]),d=Ba(b[1]),e=(d-c)/2,f=Ba(b[0]-a[0])/2,c=Math.sin(e)*Math.sin(e)+Math.sin(f)*Math.sin(f)*Math.cos(c)*Math.cos(d);return 2*this.radius*Math.atan2(Math.sqrt(c),Math.sqrt(1-c))};
tb.prototype.offset=function(a,b,c){var d=Ba(a[1]);b/=this.radius;var e=Math.asin(Math.sin(d)*Math.cos(b)+Math.cos(d)*Math.sin(b)*Math.cos(c));return[180*(Ba(a[0])+Math.atan2(Math.sin(c)*Math.sin(b)*Math.cos(d),Math.cos(b)-Math.sin(d)*Math.sin(e)))/Math.PI,180*e/Math.PI]};var ub=new tb(6370997);var vb={};vb.degrees=2*Math.PI*ub.radius/360;vb.ft=.3048;vb.m=1;vb["us-ft"]=1200/3937;var wb=null;function yb(a){this.nb=a.code;this.i=a.units;this.c=void 0!==a.extent?a.extent:null;this.g=void 0!==a.worldExtent?a.worldExtent:null;this.b=void 0!==a.axisOrientation?a.axisOrientation:"enu";this.f=void 0!==a.global?a.global:!1;this.a=!(!this.f||!this.c);this.j=a.getPointResolution;this.l=null;this.o=a.metersPerUnit;var b=a.code,c=wb||window.proj4;"function"==typeof c&&(b=c.defs(b),void 0!==b&&(void 0!==b.axis&&void 0===a.axisOrientation&&(this.b=b.axis),void 0===a.metersPerUnit&&(this.o=b.to_meter),
void 0===a.units&&(this.i=b.units)))}k=yb.prototype;k.nk=function(){return this.nb};k.D=function(){return this.c};k.Jb=function(){return this.i};k.sc=function(){return this.o||vb[this.i]};k.Zk=function(){return this.g};k.Kl=function(){return this.f};k.pp=function(a){this.f=a;this.a=!(!a||!this.c)};k.ln=function(a){this.c=a;this.a=!(!this.f||!a)};k.xp=function(a){this.g=a};k.op=function(a){this.j=a};var zb={};var Ab={};function Bb(a,b,c){a=a.nb;b=b.nb;a in Ab||(Ab[a]={});Ab[a][b]=c}function Db(a,b){var c;a in Ab&&b in Ab[a]&&(c=Ab[a][b]);return c};function Eb(a,b,c){var d=a.j;d?b=d(b,c):"degrees"!=a.Jb()&&(d=Fb(a,Gb("EPSG:4326")),b=[c[0]-b/2,c[1],c[0]+b/2,c[1],c[0],c[1]-b/2,c[0],c[1]+b/2],b=d(b,b,2),b=(ub.b(b.slice(0,2),b.slice(2,4))+ub.b(b.slice(4,6),b.slice(6,8)))/2,a=a.sc(),void 0!==a&&(b/=a));return b}function Hb(a){Ib(a);a.forEach(function(b){a.forEach(function(a){b!==a&&Bb(b,a,Jb)})})}function Kb(){var a=Lb,b=Mb,c=Nb;Ob.forEach(function(d){a.forEach(function(a){Bb(d,a,b);Bb(a,d,c)})})}function Pb(a){zb[a.nb]=a;Bb(a,a,Jb)}
function Ib(a){var b=[];a.forEach(function(a){b.push(Pb(a))})}function Qb(a){return a?"string"===typeof a?Gb(a):a:Gb("EPSG:3857")}function Rb(a,b,c,d){a=Gb(a);b=Gb(b);Bb(a,b,Sb(c));Bb(b,a,Sb(d))}function Sb(a){return function(b,c,d){var e=b.length;d=void 0!==d?d:2;c=void 0!==c?c:Array(e);var f,g;for(g=0;g<e;g+=d)for(f=a([b[g],b[g+1]]),c[g]=f[0],c[g+1]=f[1],f=d-1;2<=f;--f)c[g+f]=b[g+f];return c}}
function Gb(a){var b=null;if(a instanceof yb)b=a;else if("string"===typeof a){var b=zb[a]||null,c=wb||window.proj4;b||"function"!=typeof c||void 0===c.defs(a)||(b=new yb({code:a}),Pb(b))}return b}function Tb(a,b){if(a===b)return!0;var c=a.Jb()===b.Jb();return a.nb===b.nb?c:Fb(a,b)===Jb&&c}function Ub(a,b){var c=Gb(a),d=Gb(b);return Fb(c,d)}
function Fb(a,b){var c=a.nb,d=b.nb,e=Db(c,d);if(!e){var f=wb||window.proj4;if("function"==typeof f){var g=f.defs(c),h=f.defs(d);void 0!==g&&void 0!==h&&(g===h?Hb([b,a]):(e=f(d,c),Rb(b,a,e.forward,e.inverse)),e=Db(c,d))}}e||(e=Vb);return e}function Vb(a,b){if(void 0!==b&&a!==b){for(var c=0,d=a.length;c<d;++c)b[c]=a[c];a=b}return a}function Jb(a,b){var c;if(void 0!==b){c=0;for(var d=a.length;c<d;++c)b[c]=a[c];c=b}else c=a.slice();return c}function Wb(a,b,c){return Ub(b,c)(a,void 0,a.length)}
function Xb(a,b,c){b=Ub(b,c);return ob(a,b)};function Yb(a,b,c,d){return void 0!==d?(d[0]=a,d[1]=b,d[2]=c,d):[a,b,c]}function Zb(a){var b=a[0],c=Array(b),d=1<<b-1,e,f;for(e=0;e<b;++e)f=48,a[1]&d&&(f+=1),a[2]&d&&(f+=2),c[e]=String.fromCharCode(f),d>>=1;return c.join("")};function $b(a){this.minZoom=void 0!==a.minZoom?a.minZoom:0;this.b=a.resolutions;qa(ma(this.b,function(a,b){return b-a}),17);this.maxZoom=this.b.length-1;this.f=void 0!==a.origin?a.origin:null;this.c=null;void 0!==a.origins&&(this.c=a.origins,qa(this.c.length==this.b.length,20));var b=a.extent;void 0===b||this.f||this.c||(this.f=eb(b));qa(!this.f&&this.c||this.f&&!this.c,18);this.i=null;void 0!==a.tileSizes&&(this.i=a.tileSizes,qa(this.i.length==this.b.length,19));this.g=void 0!==a.tileSize?a.tileSize:
this.i?null:256;qa(!this.g&&this.i||this.g&&!this.i,22);this.v=void 0!==b?b:null;this.a=null;this.l=[0,0];void 0!==a.sizes?this.a=a.sizes.map(function(a){return new sa(Math.min(0,a[0]),Math.max(a[0]-1,-1),Math.min(0,a[1]),Math.max(a[1]-1,-1))},this):b&&ac(this,b)}var bc=[0,0,0];k=$b.prototype;k.eh=function(a,b,c){a=cc(this,a,b);for(var d=a.da,e=a.ba;d<=e;++d)for(var f=a.fa,g=a.ja;f<=g;++f)c([b,d,f])};
function ec(a,b,c,d,e){e=a.Ta(b,e);for(b=b[0]-1;b>=a.minZoom;){if(c.call(null,b,cc(a,e,b,d)))return!0;--b}return!1}k.D=function(){return this.v};k.oh=function(){return this.maxZoom};k.ph=function(){return this.minZoom};k.Qc=function(a){return this.f?this.f:this.c[a]};k.La=function(a){return this.b[a]};k.oi=function(){return this.b};function fc(a,b,c,d){return b[0]<a.maxZoom?(d=a.Ta(b,d),cc(a,d,b[0]+1,c)):null}
function gc(a,b,c,d){hc(a,b[0],b[1],c,!1,bc);var e=bc[1],f=bc[2];hc(a,b[2],b[3],c,!0,bc);a=bc[1];b=bc[2];void 0!==d?(d.da=e,d.ba=a,d.fa=f,d.ja=b):d=new sa(e,a,f,b);return d}function cc(a,b,c,d){return gc(a,b,a.La(c),d)}function ic(a,b){var c=a.Qc(b[0]),d=a.La(b[0]),e=Ga(a.fb(b[0]),a.l);return[c[0]+(b[1]+.5)*e[0]*d,c[1]+(b[2]+.5)*e[1]*d]}k.Ta=function(a,b){var c=this.Qc(a[0]),d=this.La(a[0]),e=Ga(this.fb(a[0]),this.l),f=c[0]+a[1]*e[0]*d,c=c[1]+a[2]*e[1]*d;return Va(f,c,f+e[0]*d,c+e[1]*d,b)};
k.we=function(a,b,c){return hc(this,a[0],a[1],b,!1,c)};function hc(a,b,c,d,e,f){var g=a.Mc(d),h=d/a.La(g),l=a.Qc(g);a=Ga(a.fb(g),a.l);b=h*Math.floor((b-l[0])/d+(e?.5:0))/a[0];c=h*Math.floor((c-l[1])/d+(e?0:.5))/a[1];e?(b=Math.ceil(b)-1,c=Math.ceil(c)-1):(b=Math.floor(b),c=Math.floor(c));return Yb(g,b,c,f)}k.Pf=function(a,b,c){return hc(this,a[0],a[1],this.La(b),!1,c)};k.fb=function(a){return this.g?this.g:this.i[a]};k.Mc=function(a,b){return wa(fa(this.b,a,b||0),this.minZoom,this.maxZoom)};
function ac(a,b){for(var c=a.b.length,d=Array(c),e=a.minZoom;e<c;++e)d[e]=cc(a,b,e);a.a=d};function jc(a){var b=a.l;if(!b){var b=kc(a),c=lc(b,void 0,void 0),b=new $b({extent:b,origin:eb(b),resolutions:c,tileSize:void 0});a.l=b}return b}function mc(a){var b={};pb(b,a?a:{});void 0===b.extent&&(b.extent=Gb("EPSG:3857").D());b.resolutions=lc(b.extent,b.maxZoom,b.tileSize);delete b.maxZoom;return new $b(b)}function lc(a,b,c){b=void 0!==b?b:42;var d=ib(a);a=hb(a);c=Ga(void 0!==c?c:256);c=Math.max(a/c[0],d/c[1]);b+=1;d=Array(b);for(a=0;a<b;++a)d[a]=c/Math.pow(2,a);return d}
function kc(a){a=Gb(a);var b=a.D();b||(a=180*vb.degrees/a.sc(),b=Va(-a,-a,a,a));return b};function nc(a){this.b=a.html;this.a=a.tileRanges?a.tileRanges:null}nc.prototype.f=function(){return this.b};function oc(a){return function(b){if(b)return[wa(b[0],a[0],a[2]),wa(b[1],a[1],a[3])]}}function pc(a){return a};function qc(a){function b(b){var c=a.listener,e=a.Vg||a.target;a.Xg&&rc(a);return c.call(e,b)}return a.Wg=b}function sc(a,b,c,d){for(var e,f=0,g=a.length;f<g;++f)if(e=a[f],e.listener===b&&e.Vg===c)return d&&(e.deleteIndex=f),e}function tc(a,b){var c=a.eb;return c?c[b]:void 0}function uc(a){var b=a.eb;b||(b=a.eb={});return b}
function vc(a,b){var c=tc(a,b);if(c){for(var d=0,e=c.length;d<e;++d)a.removeEventListener(b,c[d].Wg),qb(c[d]);c.length=0;if(c=a.eb)delete c[b],Object.keys(c).length||delete a.eb}}function B(a,b,c,d,e){var f=uc(a),g=f[b];g||(g=f[b]=[]);(f=sc(g,c,d,!1))?e||(f.Xg=!1):(f={Vg:d,Xg:!!e,listener:c,target:a,type:b},a.addEventListener(b,qc(f)),g.push(f));return f}function wc(a,b,c,d){return B(a,b,c,d,!0)}function xc(a,b,c,d){(a=tc(a,b))&&(c=sc(a,c,d,!0))&&rc(c)}
function rc(a){if(a&&a.target){a.target.removeEventListener(a.type,a.Wg);var b=tc(a.target,a.type);if(b){var c="deleteIndex"in a?a.deleteIndex:b.indexOf(a);-1!==c&&b.splice(c,1);b.length||vc(a.target,a.type)}qb(a)}}function yc(a){var b=uc(a),c;for(c in b)vc(a,c)};function zc(){}zc.prototype.Zb=!1;function Ac(a){a.Zb||(a.Zb=!0,a.ra())}zc.prototype.ra=na;function Bc(a){this.type=a;this.target=null}Bc.prototype.preventDefault=Bc.prototype.stopPropagation=function(){this.Fo=!0};function Cc(a){a.stopPropagation()};function Dc(){this.$a={};this.ta={};this.qa={}}u(Dc,zc);Dc.prototype.addEventListener=function(a,b){var c=this.qa[a];c||(c=this.qa[a]=[]);-1===c.indexOf(b)&&c.push(b)};
Dc.prototype.b=function(a){var b="string"===typeof a?new Bc(a):a;a=b.type;b.target=this;var c=this.qa[a],d;if(c){a in this.ta||(this.ta[a]=0,this.$a[a]=0);++this.ta[a];for(var e=0,f=c.length;e<f;++e)if(!1===c[e].call(this,b)||b.Fo){d=!1;break}--this.ta[a];if(!this.ta[a]){b=this.$a[a];for(delete this.$a[a];b--;)this.removeEventListener(a,na);delete this.ta[a]}return d}};Dc.prototype.ra=function(){yc(this)};function Ec(a,b){return b?b in a.qa:0<Object.keys(a.qa).length}
Dc.prototype.removeEventListener=function(a,b){var c=this.qa[a];if(c){var d=c.indexOf(b);a in this.$a?(c[d]=na,++this.$a[a]):(c.splice(d,1),c.length||delete this.qa[a])}};function Fc(){Dc.call(this);this.f=0}u(Fc,Dc);k=Fc.prototype;k.s=function(){++this.f;this.b("change")};k.L=function(){return this.f};k.J=function(a,b,c){if(Array.isArray(a)){for(var d=a.length,e=Array(d),f=0;f<d;++f)e[f]=B(this,a[f],b,c);return e}return B(this,a,b,c)};k.once=function(a,b,c){if(Array.isArray(a)){for(var d=a.length,e=Array(d),f=0;f<d;++f)e[f]=wc(this,a[f],b,c);return e}return wc(this,a,b,c)};
k.K=function(a,b,c){if(Array.isArray(a))for(var d=0,e=a.length;d<e;++d)xc(this,a[d],b,c);else xc(this,a,b,c)};function Gc(a){Fc.call(this);w(this);this.I={};void 0!==a&&this.H(a)}u(Gc,Fc);var Hc={};function Ic(a){return Hc.hasOwnProperty(a)?Hc[a]:Hc[a]="change:"+a}k=Gc.prototype;k.get=function(a){var b;this.I.hasOwnProperty(a)&&(b=this.I[a]);return b};k.O=function(){return Object.keys(this.I)};k.N=function(){return pb({},this.I)};function Jc(a,b,c){var d;d=Ic(b);a.b(new Kc(d,b,c));a.b(new Kc("propertychange",b,c))}k.set=function(a,b,c){c?this.I[a]=b:(c=this.I[a],this.I[a]=b,c!==b&&Jc(this,a,c))};
k.H=function(a,b){for(var c in a)this.set(c,a[c],b)};k.P=function(a,b){if(a in this.I){var c=this.I[a];delete this.I[a];b||Jc(this,a,c)}};function Kc(a,b,c){Bc.call(this,a);this.key=b;this.oldValue=c}u(Kc,Bc);function D(a){Gc.call(this);this.a=a?a:[];Lc(this)}u(D,Gc);k=D.prototype;k.clear=function(){for(;0<this.ec();)this.pop()};k.Tf=function(a){var b,c;b=0;for(c=a.length;b<c;++b)this.push(a[b]);return this};k.forEach=function(a,b){this.a.forEach(a,b)};k.am=function(){return this.a};k.item=function(a){return this.a[a]};k.ec=function(){return this.get(Mc)};k.Be=function(a,b){this.a.splice(a,0,b);Lc(this);this.b(new Nc("add",b))};k.pop=function(){return this.tg(this.ec()-1)};
k.push=function(a){var b=this.ec();this.Be(b,a);return this.ec()};k.remove=function(a){var b=this.a,c,d;c=0;for(d=b.length;c<d;++c)if(b[c]===a)return this.tg(c)};k.tg=function(a){var b=this.a[a];this.a.splice(a,1);Lc(this);this.b(new Nc("remove",b));return b};k.mp=function(a,b){var c=this.ec();if(a<c)c=this.a[a],this.a[a]=b,this.b(new Nc("remove",c)),this.b(new Nc("add",b));else{for(;c<a;++c)this.Be(c,void 0);this.Be(a,b)}};function Lc(a){a.set(Mc,a.a.length)}var Mc="length";
function Nc(a,b){Bc.call(this,a);this.element=b}u(Nc,Bc);var Oc=/^#(?:[0-9a-f]{3}){1,2}$/i,Pc=/^([a-z]*)$/i;function Qc(a){return Array.isArray(a)?a:Rc(a)}function Sc(a){if("string"!==typeof a){var b=a[0];b!=(b|0)&&(b=b+.5|0);var c=a[1];c!=(c|0)&&(c=c+.5|0);var d=a[2];d!=(d|0)&&(d=d+.5|0);a="rgba("+b+","+c+","+d+","+(void 0===a[3]?1:a[3])+")"}return a}
var Rc=function(){var a={},b=0;return function(c){var d;if(a.hasOwnProperty(c))d=a[c];else{if(1024<=b){d=0;for(var e in a)d++&3||(delete a[e],--b)}d=c;var f;Pc.exec(d)&&(e=document.createElement("div"),e.style.color=d,document.body.appendChild(e),d=getComputedStyle(e).color,document.body.removeChild(e));if(Oc.exec(d)){f=d.length-1;qa(3==f||6==f,54);var g=3==f?1:2;f=parseInt(d.substr(1+0*g,g),16);e=parseInt(d.substr(1+1*g,g),16);d=parseInt(d.substr(1+2*g,g),16);1==g&&(f=(f<<4)+f,e=(e<<4)+e,d=(d<<4)+
d);f=[f,e,d,1]}else d.indexOf("rgba(")?d.indexOf("rgb(")?qa(!1,14):(d=d.slice(4,-1).split(",").map(Number),d.push(1),f=Uc(d)):(d=d.slice(5,-1).split(",").map(Number),f=Uc(d));d=f;a[c]=d;++b}return d}}();function Uc(a){var b=[];b[0]=wa(a[0]+.5|0,0,255);b[1]=wa(a[1]+.5|0,0,255);b[2]=wa(a[2]+.5|0,0,255);b[3]=wa(a[3],0,1);return b};function Vc(a){return"string"===typeof a||a instanceof CanvasPattern||a instanceof CanvasGradient?a:Sc(a)};function Wc(a,b,c){this.center=a;this.resolution=b;this.rotation=c};function Xc(a,b){var c=document.createElement("CANVAS");a&&(c.width=a);b&&(c.height=b);return c.getContext("2d")}function Yc(a,b){var c=b.parentNode;c&&c.replaceChild(a,b)}function Zc(a){a&&a.parentNode&&a.parentNode.removeChild(a)};function ad(a){Gc.call(this);this.element=a.element?a.element:null;this.a=this.S=null;this.v=[];this.render=a.render?a.render:na;a.target&&this.i(a.target)}u(ad,Gc);ad.prototype.ra=function(){Zc(this.element);Gc.prototype.ra.call(this)};ad.prototype.g=function(){return this.a};
ad.prototype.setMap=function(a){this.a&&Zc(this.element);for(var b=0,c=this.v.length;b<c;++b)rc(this.v[b]);this.v.length=0;if(this.a=a)(this.S?this.S:a.u).appendChild(this.element),this.render!==na&&this.v.push(B(a,"postrender",this.render,this)),a.render()};ad.prototype.i=function(a){this.S="string"===typeof a?document.getElementById(a):a};function bd(a){a=a?a:{};this.R=document.createElement("UL");this.u=document.createElement("LI");this.R.appendChild(this.u);this.u.style.display="none";this.c=void 0!==a.collapsed?a.collapsed:!0;this.j=void 0!==a.collapsible?a.collapsible:!0;this.j||(this.c=!1);var b=void 0!==a.className?a.className:"ol-attribution",c=void 0!==a.tipLabel?a.tipLabel:"Attributions",d=void 0!==a.collapseLabel?a.collapseLabel:"\u00bb";"string"===typeof d?(this.A=document.createElement("span"),this.A.textContent=d):this.A=
d;d=void 0!==a.label?a.label:"i";"string"===typeof d?(this.C=document.createElement("span"),this.C.textContent=d):this.C=d;var e=this.j&&!this.c?this.A:this.C,d=document.createElement("button");d.setAttribute("type","button");d.title=c;d.appendChild(e);B(d,"click",this.ym,this);c=document.createElement("div");c.className=b+" ol-unselectable ol-control"+(this.c&&this.j?" ol-collapsed":"")+(this.j?"":" ol-uncollapsible");c.appendChild(this.R);c.appendChild(d);ad.call(this,{element:c,render:a.render?
a.render:cd,target:a.target});this.G=!0;this.o={};this.l={};this.Y={}}u(bd,ad);
function cd(a){if(a=a.frameState){var b,c,d,e,f,g,h,l,m,p,n,q=a.layerStatesArray,r=pb({},a.attributions),v={},x={},y=a.viewState.projection;c=0;for(b=q.length;c<b;c++)if(g=q[c].layer.la())if(p=w(g).toString(),m=g.l)for(d=0,e=m.length;d<e;d++)if(h=m[d],l=w(h).toString(),!(l in r)){if(f=a.usedTiles[p]){var z=g.Ib(y);a:{n=void 0;var A,V,Pa=h,ra=z,La=y;if(Pa.a){for(n in f)if(n in Pa.a){var z=f[n],C;V=0;for(A=Pa.a[n].length;V<A;++V){C=Pa.a[n][V];if(va(C,z)){n=!0;break a}var Ma=cc(ra,kc(La),parseInt(n,
10)),xb=Ma.ba-Ma.da+1;if(z.da<Ma.da||z.ba>Ma.ba)if(va(C,new sa(Ca(z.da,xb),Ca(z.ba,xb),z.fa,z.ja))||z.ba-z.da+1>xb&&va(C,Ma)){n=!0;break a}}}n=!1}else n=!0}}else n=!1;n?(l in v&&delete v[l],n=h.b,n in x||(x[n]=!0,r[l]=h)):v[l]=h}b=[r,v];c=b[0];b=b[1];for(var Z in this.o)Z in c?(this.l[Z]||(this.o[Z].style.display="",this.l[Z]=!0),delete c[Z]):Z in b?(this.l[Z]&&(this.o[Z].style.display="none",delete this.l[Z]),delete b[Z]):(Zc(this.o[Z]),delete this.o[Z],delete this.l[Z]);for(Z in c)d=document.createElement("LI"),
d.innerHTML=c[Z].b,this.R.appendChild(d),this.o[Z]=d,this.l[Z]=!0;for(Z in b)d=document.createElement("LI"),d.innerHTML=b[Z].b,d.style.display="none",this.R.appendChild(d),this.o[Z]=d;Z=!sb(this.l)||!sb(a.logos);this.G!=Z&&(this.element.style.display=Z?"":"none",this.G=Z);Z&&sb(this.l)?this.element.classList.add("ol-logo-only"):this.element.classList.remove("ol-logo-only");var Ra;a=a.logos;Z=this.Y;for(Ra in Z)Ra in a||(Zc(Z[Ra]),delete Z[Ra]);for(var Cb in a)b=a[Cb],b instanceof HTMLElement&&(this.u.appendChild(b),
Z[Cb]=b),Cb in Z||(Ra=new Image,Ra.src=Cb,""===b?c=Ra:(c=document.createElement("a"),c.href=b,c.appendChild(Ra)),this.u.appendChild(c),Z[Cb]=c);this.u.style.display=sb(a)?"none":""}else this.G&&(this.element.style.display="none",this.G=!1)}k=bd.prototype;k.ym=function(a){a.preventDefault();dd(this)};function dd(a){a.element.classList.toggle("ol-collapsed");a.c?Yc(a.A,a.C):Yc(a.C,a.A);a.c=!a.c}k.xm=function(){return this.j};
k.Am=function(a){this.j!==a&&(this.j=a,this.element.classList.toggle("ol-uncollapsible"),!a&&this.c&&dd(this))};k.zm=function(a){this.j&&this.c!==a&&dd(this)};k.wm=function(){return this.c};function ed(a){return Math.pow(a,3)}function fd(a){return 1-ed(1-a)}function gd(a){return 3*a*a-2*a*a*a}function hd(a){return a};function id(a){a=a?a:{};var b=void 0!==a.className?a.className:"ol-rotate",c=void 0!==a.label?a.label:"\u21e7";this.c=null;"string"===typeof c?(this.c=document.createElement("span"),this.c.className="ol-compass",this.c.textContent=c):(this.c=c,this.c.classList.add("ol-compass"));var d=a.tipLabel?a.tipLabel:"Reset rotation",c=document.createElement("button");c.className=b+"-reset";c.setAttribute("type","button");c.title=d;c.appendChild(this.c);B(c,"click",id.prototype.A,this);d=document.createElement("div");
d.className=b+" ol-unselectable ol-control";d.appendChild(c);b=a.render?a.render:jd;this.j=a.resetNorth?a.resetNorth:void 0;ad.call(this,{element:d,render:b,target:a.target});this.o=void 0!==a.duration?a.duration:250;this.l=void 0!==a.autoHide?a.autoHide:!0;this.u=void 0;this.l&&this.element.classList.add("ol-hidden")}u(id,ad);
id.prototype.A=function(a){a.preventDefault();if(this.j)this.j();else if(a=this.a.$()){var b=a.Va();void 0!==b&&(0<this.o?(b%=2*Math.PI,a.animate({rotation:0,duration:this.o,easing:fd})):a.He(0))}};
function jd(a){if(a=a.frameState){a=a.viewState.rotation;if(a!=this.u){var b="rotate("+a+"rad)";if(this.l){var c=this.element.classList.contains("ol-hidden");c||a?c&&a&&this.element.classList.remove("ol-hidden"):this.element.classList.add("ol-hidden")}this.c.style.msTransform=b;this.c.style.webkitTransform=b;this.c.style.transform=b}this.u=a}};function kd(a){a=a?a:{};var b=void 0!==a.className?a.className:"ol-zoom",c=void 0!==a.delta?a.delta:1,d=void 0!==a.zoomInLabel?a.zoomInLabel:"+",e=void 0!==a.zoomOutLabel?a.zoomOutLabel:"\u2212",f=void 0!==a.zoomInTipLabel?a.zoomInTipLabel:"Zoom in",g=void 0!==a.zoomOutTipLabel?a.zoomOutTipLabel:"Zoom out",h=document.createElement("button");h.className=b+"-in";h.setAttribute("type","button");h.title=f;h.appendChild("string"===typeof d?document.createTextNode(d):d);B(h,"click",kd.prototype.l.bind(this,
c));d=document.createElement("button");d.className=b+"-out";d.setAttribute("type","button");d.title=g;d.appendChild("string"===typeof e?document.createTextNode(e):e);B(d,"click",kd.prototype.l.bind(this,-c));c=document.createElement("div");c.className=b+" ol-unselectable ol-control";c.appendChild(h);c.appendChild(d);ad.call(this,{element:c,target:a.target});this.c=void 0!==a.duration?a.duration:250}u(kd,ad);
kd.prototype.l=function(a,b){b.preventDefault();var c=this.a.$();if(c){var d=c.Ua();d&&(d=c.constrainResolution(d,a),0<this.c?(0<ld(c)[0]&&md(c),c.animate({resolution:d,duration:this.c,easing:fd})):c.Xc(d))}};function nd(a){a=a?a:{};var b=new D;(void 0!==a.zoom?a.zoom:1)&&b.push(new kd(a.zoomOptions));(void 0!==a.rotate?a.rotate:1)&&b.push(new id(a.rotateOptions));(void 0!==a.attribution?a.attribution:1)&&b.push(new bd(a.attributionOptions));return b};function od(a){a=a?a:{};this.c=void 0!==a.className?a.className:"ol-full-screen";var b=void 0!==a.label?a.label:"\u2922";this.j="string"===typeof b?document.createTextNode(b):b;b=void 0!==a.labelActive?a.labelActive:"\u00d7";this.o="string"===typeof b?document.createTextNode(b):b;var c=a.tipLabel?a.tipLabel:"Toggle full-screen",b=document.createElement("button");b.className=this.c+"-"+pd();b.setAttribute("type","button");b.title=c;b.appendChild(this.j);B(b,"click",this.C,this);c=document.createElement("div");
c.className=this.c+" ol-unselectable ol-control "+(qd()?"":"ol-unsupported");c.appendChild(b);ad.call(this,{element:c,target:a.target});this.A=void 0!==a.keys?a.keys:!1;this.l=a.source}u(od,ad);
od.prototype.C=function(a){a.preventDefault();qd()&&(a=this.a)&&(pd()?document.exitFullscreen?document.exitFullscreen():document.msExitFullscreen?document.msExitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitExitFullscreen&&document.webkitExitFullscreen():(a=this.l?"string"===typeof this.l?document.getElementById(this.l):this.l:a.Kc(),this.A?a.mozRequestFullScreenWithKeys?a.mozRequestFullScreenWithKeys():a.webkitRequestFullscreen?a.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT):
rd(a):rd(a)))};od.prototype.u=function(){var a=this.element.firstElementChild,b=this.a;pd()?(a.className=this.c+"-true",Yc(this.o,this.j)):(a.className=this.c+"-false",Yc(this.j,this.o));b&&b.xd()};od.prototype.setMap=function(a){ad.prototype.setMap.call(this,a);a&&this.v.push(B(document,sd(),this.u,this))};
function qd(){var a=document.body;return!!(a.webkitRequestFullscreen||a.mozRequestFullScreen&&document.mozFullScreenEnabled||a.msRequestFullscreen&&document.msFullscreenEnabled||a.requestFullscreen&&document.fullscreenEnabled)}function pd(){return!!(document.webkitIsFullScreen||document.mozFullScreen||document.msFullscreenElement||document.fullscreenElement)}
function rd(a){a.requestFullscreen?a.requestFullscreen():a.msRequestFullscreen?a.msRequestFullscreen():a.mozRequestFullScreen?a.mozRequestFullScreen():a.webkitRequestFullscreen&&a.webkitRequestFullscreen()}var sd=function(){var a;return function(){if(!a){var b=document.body;b.webkitRequestFullscreen?a="webkitfullscreenchange":b.mozRequestFullScreen?a="mozfullscreenchange":b.msRequestFullscreen?a="MSFullscreenChange":b.requestFullscreen&&(a="fullscreenchange")}return a}}();function td(a){a=a?a:{};var b=document.createElement("DIV");b.className=void 0!==a.className?a.className:"ol-mouse-position";ad.call(this,{element:b,render:a.render?a.render:ud,target:a.target});B(this,Ic(vd),this.Bm,this);a.coordinateFormat&&this.Fi(a.coordinateFormat);a.projection&&this.Mh(Gb(a.projection));this.u=void 0!==a.undefinedHTML?a.undefinedHTML:"";this.o=b.innerHTML;this.j=this.l=this.c=null}u(td,ad);
function ud(a){a=a.frameState;a?this.c!=a.viewState.projection&&(this.c=a.viewState.projection,this.l=null):this.c=null;wd(this,this.j)}k=td.prototype;k.Bm=function(){this.l=null};k.ih=function(){return this.get(xd)};k.Lh=function(){return this.get(vd)};k.rl=function(a){this.j=this.a.te(a);wd(this,this.j)};k.sl=function(){wd(this,null);this.j=null};k.setMap=function(a){ad.prototype.setMap.call(this,a);a&&(a=a.c,this.v.push(B(a,"mousemove",this.rl,this),B(a,"mouseout",this.sl,this)))};
k.Fi=function(a){this.set(xd,a)};k.Mh=function(a){this.set(vd,a)};function wd(a,b){var c=a.u;if(b&&a.c){if(!a.l){var d=a.Lh();a.l=d?Fb(a.c,d):Vb}if(d=a.a.Za(b))a.l(d,d),c=(c=a.ih())?c(d):d.toString()}a.o&&c==a.o||(a.element.innerHTML=c,a.o=c)}var vd="projection",xd="coordinateFormat";function yd(a,b,c){Bc.call(this,a);this.map=b;this.frameState=void 0!==c?c:null}u(yd,Bc);function zd(a,b,c,d,e){yd.call(this,a,b,e);this.originalEvent=c;this.pixel=b.te(c);this.coordinate=b.Za(this.pixel);this.dragging=void 0!==d?d:!1}u(zd,yd);zd.prototype.preventDefault=function(){yd.prototype.preventDefault.call(this);this.originalEvent.preventDefault()};zd.prototype.stopPropagation=function(){yd.prototype.stopPropagation.call(this);this.originalEvent.stopPropagation()};var Ad={Xp:"singleclick",Mp:"click",Np:"dblclick",Qp:"pointerdrag",Tp:"pointermove",Pp:"pointerdown",Wp:"pointerup",Vp:"pointerover",Up:"pointerout",Rp:"pointerenter",Sp:"pointerleave",Op:"pointercancel"};function Bd(a,b,c,d,e){zd.call(this,a,b,c.b,d,e);this.b=c}u(Bd,zd);var Cd=["experimental-webgl","webgl","webkit-3d","moz-webgl"];function Dd(a,b){var c,d,e=Cd.length;for(d=0;d<e;++d)try{if(c=a.getContext(Cd[d],b))return c}catch(f){}return null};var Ed,Fd="undefined"!==typeof navigator?navigator.userAgent.toLowerCase():"",Gd=-1!==Fd.indexOf("firefox"),Hd=-1!==Fd.indexOf("safari")&&-1==Fd.indexOf("chrom"),Id=-1!==Fd.indexOf("webkit")&&-1==Fd.indexOf("edge"),Jd=-1!==Fd.indexOf("macintosh"),Kd=window.devicePixelRatio||1,Ld=!1,Md=function(){if(!("HTMLCanvasElement"in window))return!1;try{var a=document.createElement("CANVAS").getContext("2d");return a?(void 0!==a.setLineDash&&(Ld=!0),!0):!1}catch(b){return!1}}(),Nd="DeviceOrientationEvent"in
window,Od="geolocation"in navigator,Pd="ontouchstart"in window,Qd="PointerEvent"in window,Rd=!!navigator.msPointerEnabled,Sd=!1,Td,Ud=[];if("WebGLRenderingContext"in window)try{var Vd=Dd(document.createElement("CANVAS"),{failIfMajorPerformanceCaveat:!0});Vd&&(Sd=!0,Td=Vd.getParameter(Vd.MAX_TEXTURE_SIZE),Ud=Vd.getSupportedExtensions())}catch(a){}Ed=Sd;ca=Ud;ba=Td;function Wd(a,b){this.b=a;this.i=b};function Xd(a){Wd.call(this,a,{mousedown:this.Ml,mousemove:this.Nl,mouseup:this.Ql,mouseover:this.Pl,mouseout:this.Ol});this.a=a.f;this.f=[]}u(Xd,Wd);function Yd(a,b){for(var c=a.f,d=b.clientX,e=b.clientY,f=0,g=c.length,h;f<g&&(h=c[f]);f++){var l=Math.abs(e-h[1]);if(25>=Math.abs(d-h[0])&&25>=l)return!0}return!1}function Zd(a){var b=ae(a,a),c=b.preventDefault;b.preventDefault=function(){a.preventDefault();c()};b.pointerId=1;b.isPrimary=!0;b.pointerType="mouse";return b}k=Xd.prototype;
k.Ml=function(a){if(!Yd(this,a)){(1).toString()in this.a&&this.cancel(a);var b=Zd(a);this.a[(1).toString()]=a;be(this.b,"pointerdown",b,a)}};k.Nl=function(a){if(!Yd(this,a)){var b=Zd(a);be(this.b,"pointermove",b,a)}};k.Ql=function(a){if(!Yd(this,a)){var b=this.a[(1).toString()];b&&b.button===a.button&&(b=Zd(a),be(this.b,"pointerup",b,a),delete this.a[(1).toString()])}};k.Pl=function(a){if(!Yd(this,a)){var b=Zd(a);ce(this.b,b,a)}};k.Ol=function(a){if(!Yd(this,a)){var b=Zd(a);de(this.b,b,a)}};
k.cancel=function(a){var b=Zd(a);this.b.cancel(b,a);delete this.a[(1).toString()]};function ee(a){Wd.call(this,a,{MSPointerDown:this.Vl,MSPointerMove:this.Wl,MSPointerUp:this.Zl,MSPointerOut:this.Xl,MSPointerOver:this.Yl,MSPointerCancel:this.Ul,MSGotPointerCapture:this.Sl,MSLostPointerCapture:this.Tl});this.a=a.f;this.f=["","unavailable","touch","pen","mouse"]}u(ee,Wd);function fe(a,b){var c=b;"number"===typeof b.pointerType&&(c=ae(b,b),c.pointerType=a.f[b.pointerType]);return c}k=ee.prototype;
k.Vl=function(a){this.a[a.pointerId.toString()]=a;var b=fe(this,a);be(this.b,"pointerdown",b,a)};k.Wl=function(a){var b=fe(this,a);be(this.b,"pointermove",b,a)};k.Zl=function(a){var b=fe(this,a);be(this.b,"pointerup",b,a);delete this.a[a.pointerId.toString()]};k.Xl=function(a){var b=fe(this,a);de(this.b,b,a)};k.Yl=function(a){var b=fe(this,a);ce(this.b,b,a)};k.Ul=function(a){var b=fe(this,a);this.b.cancel(b,a);delete this.a[a.pointerId.toString()]};
k.Tl=function(a){this.b.b(new ge("lostpointercapture",a,a))};k.Sl=function(a){this.b.b(new ge("gotpointercapture",a,a))};function he(a){Wd.call(this,a,{pointerdown:this.xo,pointermove:this.yo,pointerup:this.Bo,pointerout:this.zo,pointerover:this.Ao,pointercancel:this.wo,gotpointercapture:this.al,lostpointercapture:this.Ll})}u(he,Wd);k=he.prototype;k.xo=function(a){ie(this.b,a)};k.yo=function(a){ie(this.b,a)};k.Bo=function(a){ie(this.b,a)};k.zo=function(a){ie(this.b,a)};k.Ao=function(a){ie(this.b,a)};k.wo=function(a){ie(this.b,a)};k.Ll=function(a){ie(this.b,a)};k.al=function(a){ie(this.b,a)};function ge(a,b,c){Bc.call(this,a);this.b=b;a=c?c:{};this.buttons=je(a);this.pressure=ke(a,this.buttons);this.bubbles="bubbles"in a?a.bubbles:!1;this.cancelable="cancelable"in a?a.cancelable:!1;this.view="view"in a?a.view:null;this.detail="detail"in a?a.detail:null;this.screenX="screenX"in a?a.screenX:0;this.screenY="screenY"in a?a.screenY:0;this.clientX="clientX"in a?a.clientX:0;this.clientY="clientY"in a?a.clientY:0;this.button="button"in a?a.button:0;this.relatedTarget="relatedTarget"in a?a.relatedTarget:
null;this.pointerId="pointerId"in a?a.pointerId:0;this.width="width"in a?a.width:0;this.height="height"in a?a.height:0;this.pointerType="pointerType"in a?a.pointerType:"";this.isPrimary="isPrimary"in a?a.isPrimary:!1;b.preventDefault&&(this.preventDefault=function(){b.preventDefault()})}u(ge,Bc);function je(a){if(a.buttons||le)a=a.buttons;else switch(a.which){case 1:a=1;break;case 2:a=4;break;case 3:a=2;break;default:a=0}return a}
function ke(a,b){var c=0;a.pressure?c=a.pressure:c=b?.5:0;return c}var le=!1;try{le=1===(new MouseEvent("click",{buttons:1})).buttons}catch(a){};function me(a,b){Wd.call(this,a,{touchstart:this.Dp,touchmove:this.Cp,touchend:this.Bp,touchcancel:this.Ap});this.a=a.f;this.l=b;this.f=void 0;this.g=0;this.c=void 0}u(me,Wd);k=me.prototype;k.Di=function(){this.g=0;this.c=void 0};
function ne(a,b,c){b=ae(b,c);b.pointerId=c.identifier+2;b.bubbles=!0;b.cancelable=!0;b.detail=a.g;b.button=0;b.buttons=1;b.width=c.webkitRadiusX||c.radiusX||0;b.height=c.webkitRadiusY||c.radiusY||0;b.pressure=c.webkitForce||c.force||.5;b.isPrimary=a.f===c.identifier;b.pointerType="touch";b.clientX=c.clientX;b.clientY=c.clientY;b.screenX=c.screenX;b.screenY=c.screenY;return b}
function oe(a,b,c){function d(){b.preventDefault()}var e=Array.prototype.slice.call(b.changedTouches),f=e.length,g,h;for(g=0;g<f;++g)h=ne(a,b,e[g]),h.preventDefault=d,c.call(a,b,h)}
k.Dp=function(a){var b=a.touches,c=Object.keys(this.a),d=c.length;if(d>=b.length){var e=[],f,g,h;for(f=0;f<d;++f){g=c[f];h=this.a[g];var l;if(!(l=1==g))a:{for(var m=b.length,p=0;p<m;p++)if(l=b[p],l.identifier===g-2){l=!0;break a}l=!1}l||e.push(h.out)}for(f=0;f<e.length;++f)this.zf(a,e[f])}b=a.changedTouches[0];c=Object.keys(this.a).length;if(!c||1===c&&(1).toString()in this.a)this.f=b.identifier,void 0!==this.c&&clearTimeout(this.c);pe(this,a);this.g++;oe(this,a,this.so)};
k.so=function(a,b){this.a[b.pointerId]={target:b.target,out:b,pi:b.target};var c=this.b;b.bubbles=!0;be(c,"pointerover",b,a);c=this.b;b.bubbles=!1;be(c,"pointerenter",b,a);be(this.b,"pointerdown",b,a)};k.Cp=function(a){a.preventDefault();oe(this,a,this.Rl)};
k.Rl=function(a,b){var c=this.a[b.pointerId];if(c){var d=c.out,e=c.pi;be(this.b,"pointermove",b,a);d&&e!==b.target&&(d.relatedTarget=b.target,b.relatedTarget=e,d.target=e,b.target?(de(this.b,d,a),ce(this.b,b,a)):(b.target=e,b.relatedTarget=null,this.zf(a,b)));c.out=b;c.pi=b.target}};k.Bp=function(a){pe(this,a);oe(this,a,this.Ep)};
k.Ep=function(a,b){be(this.b,"pointerup",b,a);this.b.out(b,a);qe(this.b,b,a);delete this.a[b.pointerId];b.isPrimary&&(this.f=void 0,this.c=setTimeout(this.Di.bind(this),200))};k.Ap=function(a){oe(this,a,this.zf)};k.zf=function(a,b){this.b.cancel(b,a);this.b.out(b,a);qe(this.b,b,a);delete this.a[b.pointerId];b.isPrimary&&(this.f=void 0,this.c=setTimeout(this.Di.bind(this),200))};
function pe(a,b){var c=a.l.f,d=b.changedTouches[0];if(a.f===d.identifier){var e=[d.clientX,d.clientY];c.push(e);setTimeout(function(){var a=c.indexOf(e);-1<a&&c.splice(a,1)},2500)}};function re(a){Dc.call(this);this.g=a;this.f={};this.i={};this.a=[];Qd?se(this,new he(this)):Rd?se(this,new ee(this)):(a=new Xd(this),se(this,a),Pd&&se(this,new me(this,a)));a=this.a.length;for(var b,c=0;c<a;c++)b=this.a[c],te(this,Object.keys(b.i))}u(re,Dc);function se(a,b){var c=Object.keys(b.i);c&&(c.forEach(function(a){var c=b.i[a];c&&(this.i[a]=c.bind(b))},a),a.a.push(b))}re.prototype.c=function(a){var b=this.i[a.type];b&&b(a)};
function te(a,b){b.forEach(function(a){B(this.g,a,this.c,this)},a)}function ve(a,b){b.forEach(function(a){xc(this.g,a,this.c,this)},a)}function ae(a,b){for(var c={},d,e=0,f=we.length;e<f;e++)d=we[e][0],c[d]=a[d]||b[d]||we[e][1];return c}function qe(a,b,c){b.bubbles=!1;be(a,"pointerleave",b,c)}re.prototype.out=function(a,b){a.bubbles=!0;be(this,"pointerout",a,b)};re.prototype.cancel=function(a,b){be(this,"pointercancel",a,b)};
function de(a,b,c){a.out(b,c);var d=b.target,e=b.relatedTarget;d&&e&&d.contains(e)||qe(a,b,c)}function ce(a,b,c){b.bubbles=!0;be(a,"pointerover",b,c);var d=b.target,e=b.relatedTarget;d&&e&&d.contains(e)||(b.bubbles=!1,be(a,"pointerenter",b,c))}function be(a,b,c,d){a.b(new ge(b,d,c))}function ie(a,b){a.b(new ge(b.type,b,b))}re.prototype.ra=function(){for(var a=this.a.length,b,c=0;c<a;c++)b=this.a[c],ve(this,Object.keys(b.i));Dc.prototype.ra.call(this)};
var we=[["bubbles",!1],["cancelable",!1],["view",null],["detail",null],["screenX",0],["screenY",0],["clientX",0],["clientY",0],["ctrlKey",!1],["altKey",!1],["shiftKey",!1],["metaKey",!1],["button",0],["relatedTarget",null],["buttons",0],["pointerId",0],["width",0],["height",0],["pressure",0],["tiltX",0],["tiltY",0],["pointerType",""],["hwTimestamp",0],["isPrimary",!1],["type",""],["target",null],["currentTarget",null],["which",0]];function xe(a){Dc.call(this);this.c=a;this.l=0;this.j=!1;this.i=[];this.f=null;a=this.c.c;this.u=0;this.I={};this.g=new re(a);this.a=null;this.o=B(this.g,"pointerdown",this.ul,this);this.v=B(this.g,"pointermove",this.$o,this)}u(xe,Dc);function ye(a,b){var c=new Bd("click",a.c,b);a.b(c);a.l?(clearTimeout(a.l),a.l=0,c=new Bd("dblclick",a.c,b),a.b(c)):a.l=setTimeout(function(){this.l=0;var a=new Bd("singleclick",this.c,b);this.b(a)}.bind(a),250)}
function ze(a,b){"pointerup"==b.type||"pointercancel"==b.type?delete a.I[b.pointerId]:"pointerdown"==b.type&&(a.I[b.pointerId]=!0);a.u=Object.keys(a.I).length}k=xe.prototype;k.vh=function(a){ze(this,a);var b=new Bd("pointerup",this.c,a);this.b(b);this.j||a.button||ye(this,this.f);this.u||(this.i.forEach(rc),this.i.length=0,this.j=!1,this.f=null,Ac(this.a),this.a=null)};
k.ul=function(a){ze(this,a);var b=new Bd("pointerdown",this.c,a);this.b(b);this.f=a;this.i.length||(this.a=new re(document),this.i.push(B(this.a,"pointermove",this.om,this),B(this.a,"pointerup",this.vh,this),B(this.g,"pointercancel",this.vh,this)))};k.om=function(a){if(a.clientX!=this.f.clientX||a.clientY!=this.f.clientY){this.j=!0;var b=new Bd("pointerdrag",this.c,a,this.j);this.b(b)}a.preventDefault()};
k.$o=function(a){this.b(new Bd(a.type,this.c,a,!(!this.f||a.clientX==this.f.clientX&&a.clientY==this.f.clientY)))};k.ra=function(){this.v&&(rc(this.v),this.v=null);this.o&&(rc(this.o),this.o=null);this.i.forEach(rc);this.i.length=0;this.a&&(Ac(this.a),this.a=null);this.g&&(Ac(this.g),this.g=null);Dc.prototype.ra.call(this)};function Ae(a,b){this.o=a;this.c=b;this.b=[];this.f=[];this.a={}}Ae.prototype.clear=function(){this.b.length=0;this.f.length=0;qb(this.a)};function Be(a){var b=a.b,c=a.f,d=b[0];1==b.length?(b.length=0,c.length=0):(b[0]=b.pop(),c[0]=c.pop(),Ce(a,0));b=a.c(d);delete a.a[b];return d}Ae.prototype.i=function(a){qa(!(this.c(a)in this.a),31);var b=this.o(a);return Infinity!=b?(this.b.push(a),this.f.push(b),this.a[this.c(a)]=!0,De(this,0,this.b.length-1),!0):!1};
function Ce(a,b){for(var c=a.b,d=a.f,e=c.length,f=c[b],g=d[b],h=b;b<e>>1;){var l=2*b+1,m=2*b+2,l=m<e&&d[m]<d[l]?m:l;c[b]=c[l];d[b]=d[l];b=l}c[b]=f;d[b]=g;De(a,h,b)}function De(a,b,c){var d=a.b;a=a.f;for(var e=d[c],f=a[c];c>b;){var g=c-1>>1;if(a[g]>f)d[c]=d[g],a[c]=a[g],c=g;else break}d[c]=e;a[c]=f}function Ee(a){var b=a.o,c=a.b,d=a.f,e=0,f=c.length,g,h,l;for(h=0;h<f;++h)g=c[h],l=b(g),Infinity==l?delete a.a[a.c(g)]:(d[e]=l,c[e++]=g);c.length=e;d.length=e;for(b=(a.b.length>>1)-1;0<=b;b--)Ce(a,b)};function Fe(a,b){Ae.call(this,function(b){return a.apply(null,b)},function(a){return a[0].ib()});this.v=b;this.l=0;this.g={}}u(Fe,Ae);Fe.prototype.i=function(a){var b=Ae.prototype.i.call(this,a);b&&B(a[0],"change",this.j,this);return b};Fe.prototype.j=function(a){a=a.target;var b=a.V();if(2===b||3===b||4===b||5===b)xc(a,"change",this.j,this),a=a.ib(),a in this.g&&(delete this.g[a],--this.l),this.v()};
function Ge(a,b,c){for(var d=0,e,f;a.l<b&&d<c&&0<a.b.length;)e=Be(a)[0],f=e.ib(),0!==e.V()||f in a.g||(a.g[f]=!0,++a.l,++d,e.load())};function He(a){return function(b,c,d){if(void 0!==b)return b=fa(a,b,d),b=wa(b+c,0,a.length-1),c=Math.floor(b),b!=c&&c<a.length-1?a[c]/Math.pow(a[c]/a[c+1],b-c):a[c]}}function Ie(a,b,c){return function(d,e,f){if(void 0!==d)return d=Math.max(Math.floor(Math.log(b/d)/Math.log(a)+(-f/2+.5))+e,0),void 0!==c&&(d=Math.min(d,c)),b/Math.pow(a,d)}};function Ke(a){if(void 0!==a)return 0}function Le(a,b){if(void 0!==a)return a+b}function Me(a){var b=2*Math.PI/a;return function(a,d){if(void 0!==a)return a=Math.floor((a+d)/b+.5)*b}}function Ne(){var a=Ba(5);return function(b,c){if(void 0!==b)return Math.abs(b+c)<=a?0:b+c}};function Oe(a,b){var c=void 0!==b?a.toFixed(b):""+a,d=c.indexOf("."),d=-1===d?c.length:d;return 2<d?c:Array(3-d).join("0")+c}function Pe(a){a=(""+a).split(".");for(var b=["1","3"],c=0;c<Math.max(a.length,b.length);c++){var d=parseInt(a[c]||"0",10),e=parseInt(b[c]||"0",10);if(d>e)return 1;if(e>d)return-1}return 0};function Qe(a,b){a[0]+=b[0];a[1]+=b[1];return a}function Re(a,b){var c=a[0],d=a[1],e=b[0],f=b[1],g=e[0],e=e[1],h=f[0],f=f[1],l=h-g,m=f-e,c=l||m?(l*(c-g)+m*(d-e))/(l*l+m*m||0):0;0>=c||(1<=c?(g=h,e=f):(g+=c*l,e+=c*m));return[g,e]}
function Se(a,b,c){a=Ca(a+180,360)-180;var d=Math.abs(3600*a);c=c||0;var e=Math.pow(10,c),f=Math.floor(d/3600),g=Math.floor((d-3600*f)/60),d=Math.ceil((d-3600*f-60*g)*e)/e;60<=d&&(d=0,g+=1);60<=g&&(g=0,f+=1);return f+"\u00b0 "+Oe(g)+"\u2032 "+Oe(d,c)+"\u2033 "+b.charAt(0>a?1:0)}function Te(a,b,c){return a?b.replace("{x}",a[0].toFixed(c)).replace("{y}",a[1].toFixed(c)):""}function Ue(a,b){for(var c=!0,d=a.length-1;0<=d;--d)if(a[d]!=b[d]){c=!1;break}return c}
function Ve(a,b){var c=Math.cos(b),d=Math.sin(b),e=a[1]*c+a[0]*d;a[0]=a[0]*c-a[1]*d;a[1]=e;return a}function We(a,b){a[0]*=b;a[1]*=b}function Xe(a,b){var c=a[0]-b[0],d=a[1]-b[1];return c*c+d*d}function Ye(a,b){return Math.sqrt(Xe(a,b))}function Ze(a,b){return Xe(a,Re(a,b))}function $e(a,b){return Te(a,"{x}, {y}",b)};function af(){return!0}function bf(){return!1};function cf(){Gc.call(this);this.o=Ia();this.v=-1;this.i={};this.j=this.g=0}u(cf,Gc);k=cf.prototype;k.Ab=function(a,b){var c=b?b:[NaN,NaN];this.Gb(a[0],a[1],c,Infinity);return c};k.sb=function(a){return this.Oc(a[0],a[1])};k.Oc=bf;k.D=function(a){this.v!=this.f&&(this.o=this.ne(this.o),this.v=this.f);var b=this.o;a?(a[0]=b[0],a[1]=b[1],a[2]=b[2],a[3]=b[3]):a=b;return a};k.Pb=function(a){return this.Qd(a*a)};k.tb=function(a,b){this.Dc(Ub(a,b));return this};function df(a,b,c,d,e,f){for(var g=f?f:[],h=0;b<c;b+=d){var l=a[b],m=a[b+1];g[h++]=e[0]*l+e[2]*m+e[4];g[h++]=e[1]*l+e[3]*m+e[5]}f&&g.length!=h&&(g.length=h);return g}function ef(a,b,c,d,e,f){var g=f?f:[],h=0,l,m;for(l=0;l<b;l+=c)for(g[h++]=a[l]+d,g[h++]=a[l+1]+e,m=l+2;m<l+c;++m)g[h++]=a[m];f&&g.length!=h&&(g.length=h);return g};function ff(){cf.call(this);this.ka="XY";this.a=2;this.B=null}u(ff,cf);function gf(a){var b;"XY"==a?b=2:"XYZ"==a||"XYM"==a?b=3:"XYZM"==a&&(b=4);return b}k=ff.prototype;k.Oc=bf;k.ne=function(a){return Xa(this.B,0,this.B.length,this.a,a)};k.bc=function(){return this.B.slice(0,this.a)};k.ha=function(){return this.B};k.cc=function(){return this.B.slice(this.B.length-this.a)};k.dc=function(){return this.ka};
k.Qd=function(a){this.j!=this.f&&(qb(this.i),this.g=0,this.j=this.f);if(0>a||this.g&&a<=this.g)return this;var b=a.toString();if(this.i.hasOwnProperty(b))return this.i[b];var c=this.kd(a);if(c.ha().length<this.B.length)return this.i[b]=c;this.g=a;return this};k.kd=function(){return this};k.sa=function(){return this.a};function hf(a,b,c){a.a=gf(b);a.ka=b;a.B=c}
function jf(a,b,c,d){if(b)c=gf(b);else{for(b=0;b<d;++b)if(c.length)c=c[0];else{a.ka="XY";a.a=2;return}c=c.length;var e;2==c?e="XY":3==c?e="XYZ":4==c&&(e="XYZM");b=e}a.ka=b;a.a=c}k.Dc=function(a){this.B&&(a(this.B,this.B,this.a),this.s())};
k.rotate=function(a,b){var c=this.ha();if(c){for(var d=c.length,e=this.sa(),f=c?c:[],g=Math.cos(a),h=Math.sin(a),l=b[0],m=b[1],p=0,n=0;n<d;n+=e){var q=c[n]-l,r=c[n+1]-m;f[p++]=l+q*g-r*h;f[p++]=m+q*h+r*g;for(q=n+2;q<n+e;++q)f[p++]=c[q]}c&&f.length!=p&&(f.length=p);this.s()}};
k.scale=function(a,b,c){var d=b;void 0===d&&(d=a);var e=c;e||(e=jb(this.D()));if(c=this.ha()){b=c.length;for(var f=this.sa(),g=c?c:[],h=e[0],e=e[1],l=0,m=0;m<b;m+=f){var p=c[m]-h,n=c[m+1]-e;g[l++]=h+a*p;g[l++]=e+d*n;for(p=m+2;p<m+f;++p)g[l++]=c[p]}c&&g.length!=l&&(g.length=l);this.s()}};k.translate=function(a,b){var c=this.ha();c&&(ef(c,c.length,this.sa(),a,b,c),this.s())};function kf(a,b,c,d){for(var e=0,f=a[c-d],g=a[c-d+1];b<c;b+=d)var h=a[b],l=a[b+1],e=e+(g*h-f*l),f=h,g=l;return e/2}function lf(a,b,c,d){var e=0,f,g;f=0;for(g=c.length;f<g;++f){var h=c[f],e=e+kf(a,b,h,d);b=h}return e};function mf(a,b,c,d,e,f,g){var h=a[b],l=a[b+1],m=a[c]-h,p=a[c+1]-l;if(m||p)if(f=((e-h)*m+(f-l)*p)/(m*m+p*p),1<f)b=c;else if(0<f){for(e=0;e<d;++e)g[e]=Da(a[b+e],a[c+e],f);g.length=d;return}for(e=0;e<d;++e)g[e]=a[b+e];g.length=d}function nf(a,b,c,d,e){var f=a[b],g=a[b+1];for(b+=d;b<c;b+=d){var h=a[b],l=a[b+1],f=Aa(f,g,h,l);f>e&&(e=f);f=h;g=l}return e}function of(a,b,c,d,e){var f,g;f=0;for(g=c.length;f<g;++f){var h=c[f];e=nf(a,b,h,d,e);b=h}return e}
function pf(a,b,c,d,e,f,g,h,l,m,p){if(b==c)return m;var n;if(!e){n=Aa(g,h,a[b],a[b+1]);if(n<m){for(p=0;p<d;++p)l[p]=a[b+p];l.length=d;return n}return m}for(var q=p?p:[NaN,NaN],r=b+d;r<c;)if(mf(a,r-d,r,d,g,h,q),n=Aa(g,h,q[0],q[1]),n<m){m=n;for(p=0;p<d;++p)l[p]=q[p];l.length=d;r+=d}else r+=d*Math.max((Math.sqrt(n)-Math.sqrt(m))/e|0,1);if(f&&(mf(a,c-d,b,d,g,h,q),n=Aa(g,h,q[0],q[1]),n<m)){m=n;for(p=0;p<d;++p)l[p]=q[p];l.length=d}return m}
function qf(a,b,c,d,e,f,g,h,l,m,p){p=p?p:[NaN,NaN];var n,q;n=0;for(q=c.length;n<q;++n){var r=c[n];m=pf(a,b,r,d,e,f,g,h,l,m,p);b=r}return m};function rf(a,b){var c=0,d,e;d=0;for(e=b.length;d<e;++d)a[c++]=b[d];return c}function sf(a,b,c,d){var e,f;e=0;for(f=c.length;e<f;++e){var g=c[e],h;for(h=0;h<d;++h)a[b++]=g[h]}return b}function tf(a,b,c,d,e){e=e?e:[];var f=0,g,h;g=0;for(h=c.length;g<h;++g)b=sf(a,b,c[g],d),e[f++]=b;e.length=f;return e};function uf(a,b,c,d,e){e=void 0!==e?e:[];for(var f=0;b<c;b+=d)e[f++]=a.slice(b,b+d);e.length=f;return e}function vf(a,b,c,d,e){e=void 0!==e?e:[];var f=0,g,h;g=0;for(h=c.length;g<h;++g){var l=c[g];e[f++]=uf(a,b,l,d,e[f]);b=l}e.length=f;return e};function wf(a,b,c,d,e,f,g){var h=(c-b)/d;if(3>h){for(;b<c;b+=d)f[g++]=a[b],f[g++]=a[b+1];return g}var l=Array(h);l[0]=1;l[h-1]=1;c=[b,c-d];for(var m=0,p;0<c.length;){var n=c.pop(),q=c.pop(),r=0,v=a[q],x=a[q+1],y=a[n],z=a[n+1];for(p=q+d;p<n;p+=d){var A=za(a[p],a[p+1],v,x,y,z);A>r&&(m=p,r=A)}r>e&&(l[(m-b)/d]=1,q+d<m&&c.push(q,m),m+d<n&&c.push(m,n))}for(p=0;p<h;++p)l[p]&&(f[g++]=a[b+p*d],f[g++]=a[b+p*d+1]);return g}
function xf(a,b,c,d,e,f,g,h){var l,m;l=0;for(m=c.length;l<m;++l){var p=c[l];a:{var n,q=a,r=p,v=d,x=e,y=f,z=g;if(b!=r){var A=x*Math.round(q[b]/x),V=x*Math.round(q[b+1]/x);b+=v;y[z++]=A;y[z++]=V;do if(n=x*Math.round(q[b]/x),g=x*Math.round(q[b+1]/x),b+=v,b==r){y[z++]=n;y[z++]=g;g=z;break a}while(n==A&&g==V);for(;b<r;){var Pa,ra;Pa=x*Math.round(q[b]/x);ra=x*Math.round(q[b+1]/x);b+=v;if(Pa!=n||ra!=g){var La=n-A,C=g-V,Ma=Pa-A,xb=ra-V;La*xb==C*Ma&&(0>La&&Ma<La||La==Ma||0<La&&Ma>La)&&(0>C&&xb<C||C==xb||0<
C&&xb>C)||(y[z++]=n,y[z++]=g,A=n,V=g);n=Pa;g=ra}}y[z++]=n;y[z++]=g}g=z}h.push(g);b=p}return g};function yf(a,b){ff.call(this);this.c=this.l=-1;this.pa(a,b)}u(yf,ff);k=yf.prototype;k.clone=function(){var a=new yf(null);zf(a,this.ka,this.B.slice());return a};k.Gb=function(a,b,c,d){if(d<Oa(this.D(),a,b))return d;this.c!=this.f&&(this.l=Math.sqrt(nf(this.B,0,this.B.length,this.a,0)),this.c=this.f);return pf(this.B,0,this.B.length,this.a,this.l,!0,a,b,c,d)};k.Km=function(){return kf(this.B,0,this.B.length,this.a)};k.X=function(){return uf(this.B,0,this.B.length,this.a)};
k.kd=function(a){var b=[];b.length=wf(this.B,0,this.B.length,this.a,a,b,0);a=new yf(null);zf(a,"XY",b);return a};k.T=function(){return"LinearRing"};k.Xa=function(){};k.pa=function(a,b){a?(jf(this,b,a,1),this.B||(this.B=[]),this.B.length=sf(this.B,0,a,this.a),this.s()):zf(this,"XY",null)};function zf(a,b,c){hf(a,b,c);a.s()};function E(a,b){ff.call(this);this.pa(a,b)}u(E,ff);k=E.prototype;k.clone=function(){var a=new E(null);a.ca(this.ka,this.B.slice());return a};k.Gb=function(a,b,c,d){var e=this.B;a=Aa(a,b,e[0],e[1]);if(a<d){d=this.a;for(b=0;b<d;++b)c[b]=e[b];c.length=d;return a}return d};k.X=function(){return this.B?this.B.slice():[]};k.ne=function(a){return Wa(this.B,a)};k.T=function(){return"Point"};k.Xa=function(a){return Sa(a,this.B[0],this.B[1])};
k.pa=function(a,b){a?(jf(this,b,a,0),this.B||(this.B=[]),this.B.length=rf(this.B,a),this.s()):this.ca("XY",null)};k.ca=function(a,b){hf(this,a,b);this.s()};function Af(a,b,c,d,e){return!ab(e,function(e){return!Bf(a,b,c,d,e[0],e[1])})}function Bf(a,b,c,d,e,f){for(var g=0,h=a[c-d],l=a[c-d+1];b<c;b+=d){var m=a[b],p=a[b+1];l<=f?p>f&&0<(m-h)*(f-l)-(e-h)*(p-l)&&g++:p<=f&&0>(m-h)*(f-l)-(e-h)*(p-l)&&g--;h=m;l=p}return!!g}function Cf(a,b,c,d,e,f){if(!c.length||!Bf(a,b,c[0],d,e,f))return!1;var g;b=1;for(g=c.length;b<g;++b)if(Bf(a,c[b-1],c[b],d,e,f))return!1;return!0};function Df(a,b,c,d,e,f,g){var h,l,m,p,n,q=e[f+1],r=[],v=c[0];m=a[v-d];n=a[v-d+1];for(h=b;h<v;h+=d){p=a[h];l=a[h+1];if(q<=n&&l<=q||n<=q&&q<=l)m=(q-n)/(l-n)*(p-m)+m,r.push(m);m=p;n=l}v=NaN;n=-Infinity;r.sort(da);m=r[0];h=1;for(l=r.length;h<l;++h){p=r[h];var x=Math.abs(p-m);x>n&&(m=(m+p)/2,Cf(a,b,c,d,m,q)&&(v=m,n=x));m=p}isNaN(v)&&(v=e[f]);return g?(g.push(v,q),g):[v,q]};function Ef(a,b,c,d,e,f){for(var g=[a[b],a[b+1]],h=[],l;b+d<c;b+=d){h[0]=a[b+d];h[1]=a[b+d+1];if(l=e.call(f,g,h))return l;g[0]=h[0];g[1]=h[1]}return!1};function Ff(a,b,c,d,e){var f=Ya(Ia(),a,b,c,d);return mb(e,f)?Ta(e,f)||f[0]>=e[0]&&f[2]<=e[2]||f[1]>=e[1]&&f[3]<=e[3]?!0:Ef(a,b,c,d,function(a,b){var c=!1,d=Ua(e,a),f=Ua(e,b);if(1===d||1===f)c=!0;else{var g=e[0],h=e[1],r=e[2],v=e[3],x=b[0],y=b[1],z=(y-a[1])/(x-a[0]);f&2&&!(d&2)&&(c=x-(y-v)/z,c=c>=g&&c<=r);c||!(f&4)||d&4||(c=y-(x-r)*z,c=c>=h&&c<=v);c||!(f&8)||d&8||(c=x-(y-h)/z,c=c>=g&&c<=r);c||!(f&16)||d&16||(c=y-(x-g)*z,c=c>=h&&c<=v)}return c}):!1}
function Gf(a,b,c,d,e){var f=c[0];if(!(Ff(a,b,f,d,e)||Bf(a,b,f,d,e[0],e[1])||Bf(a,b,f,d,e[0],e[3])||Bf(a,b,f,d,e[2],e[1])||Bf(a,b,f,d,e[2],e[3])))return!1;if(1===c.length)return!0;b=1;for(f=c.length;b<f;++b)if(Af(a,c[b-1],c[b],d,e))return!1;return!0};function Hf(a,b,c,d){for(var e=0,f=a[c-d],g=a[c-d+1];b<c;b+=d)var h=a[b],l=a[b+1],e=e+(h-f)*(l+g),f=h,g=l;return 0<e}function If(a,b,c,d){var e=0;d=void 0!==d?d:!1;var f,g;f=0;for(g=b.length;f<g;++f){var h=b[f],e=Hf(a,e,h,c);if(!f){if(d&&e||!d&&!e)return!1}else if(d&&!e||!d&&e)return!1;e=h}return!0}
function Jf(a,b,c,d,e){e=void 0!==e?e:!1;var f,g;f=0;for(g=c.length;f<g;++f){var h=c[f],l=Hf(a,b,h,d);if(f?e&&!l||!e&&l:e&&l||!e&&!l)for(var l=a,m=h,p=d;b<m-p;){var n;for(n=0;n<p;++n){var q=l[b+n];l[b+n]=l[m-p+n];l[m-p+n]=q}b+=p;m-=p}b=h}return b}function Kf(a,b,c,d){var e=0,f,g;f=0;for(g=b.length;f<g;++f)e=Jf(a,e,b[f],c,d);return e};function F(a,b){ff.call(this);this.c=[];this.u=-1;this.A=null;this.R=this.C=this.G=-1;this.l=null;this.pa(a,b)}u(F,ff);k=F.prototype;k.Vj=function(a){this.B?ga(this.B,a.ha()):this.B=a.ha().slice();this.c.push(this.B.length);this.s()};k.clone=function(){var a=new F(null);a.ca(this.ka,this.B.slice(),this.c.slice());return a};
k.Gb=function(a,b,c,d){if(d<Oa(this.D(),a,b))return d;this.C!=this.f&&(this.G=Math.sqrt(of(this.B,0,this.c,this.a,0)),this.C=this.f);return qf(this.B,0,this.c,this.a,this.G,!0,a,b,c,d)};k.Oc=function(a,b){return Cf(this.fc(),0,this.c,this.a,a,b)};k.Nm=function(){return lf(this.fc(),0,this.c,this.a)};k.X=function(a){var b;void 0!==a?(b=this.fc().slice(),Jf(b,0,this.c,this.a,a)):b=this.B;return vf(b,0,this.c,this.a)};k.Rb=function(){return this.c};
function Lf(a){if(a.u!=a.f){var b=jb(a.D());a.A=Df(a.fc(),0,a.c,a.a,b,0);a.u=a.f}return a.A}k.yk=function(){return new E(Lf(this))};k.Ek=function(){return this.c.length};k.nh=function(a){if(0>a||this.c.length<=a)return null;var b=new yf(null);zf(b,this.ka,this.B.slice(a?this.c[a-1]:0,this.c[a]));return b};k.jd=function(){var a=this.ka,b=this.B,c=this.c,d=[],e=0,f,g;f=0;for(g=c.length;f<g;++f){var h=c[f],l=new yf(null);zf(l,a,b.slice(e,h));d.push(l);e=h}return d};
k.fc=function(){if(this.R!=this.f){var a=this.B;If(a,this.c,this.a)?this.l=a:(this.l=a.slice(),this.l.length=Jf(this.l,0,this.c,this.a));this.R=this.f}return this.l};k.kd=function(a){var b=[],c=[];b.length=xf(this.B,0,this.c,this.a,Math.sqrt(a),b,0,c);a=new F(null);a.ca("XY",b,c);return a};k.T=function(){return"Polygon"};k.Xa=function(a){return Gf(this.fc(),0,this.c,this.a,a)};
k.pa=function(a,b){if(a){jf(this,b,a,2);this.B||(this.B=[]);var c=tf(this.B,0,a,this.a,this.c);this.B.length=c.length?c[c.length-1]:0;this.s()}else this.ca("XY",null,this.c)};k.ca=function(a,b,c){hf(this,a,b);this.c=c;this.s()};function Mf(a,b,c,d){var e=d?d:32;d=[];var f;for(f=0;f<e;++f)ga(d,a.offset(b,c,2*Math.PI*f/e));d.push(d[0],d[1]);a=new F(null);a.ca("XY",d,[d.length]);return a}
function Nf(a){var b=a[0],c=a[1],d=a[2];a=a[3];b=[b,c,b,a,d,a,d,c,b,c];c=new F(null);c.ca("XY",b,[b.length]);return c}function Of(a,b,c){var d=b?b:32,e=a.sa();b=a.ka;for(var f=new F(null,b),d=e*(d+1),e=Array(d),g=0;g<d;g++)e[g]=0;f.ca(b,e,[e.length]);Pf(f,a.Ba(),a.Vd(),c);return f}function Pf(a,b,c,d){var e=a.ha(),f=a.ka,g=a.sa(),h=a.Rb(),l=e.length/g-1;d=d?d:0;for(var m,p,n=0;n<=l;++n)p=n*g,m=d+2*Ca(n,l)*Math.PI/l,e[p]=b[0]+c*Math.cos(m),e[p+1]=b[1]+c*Math.sin(m);a.ca(f,e,h)};function Qf(a){Gc.call(this);a=a||{};this.l=[0,0];this.c=[];this.lf=this.lf.bind(this);var b={};b.center=void 0!==a.center?a.center:null;this.o=Qb(a.projection);var c,d,e,f=void 0!==a.minZoom?a.minZoom:0;c=void 0!==a.maxZoom?a.maxZoom:28;var g=void 0!==a.zoomFactor?a.zoomFactor:2;if(void 0!==a.resolutions)c=a.resolutions,d=c[0],e=c[c.length-1],c=He(c);else{d=Qb(a.projection);e=d.D();var h=(e?Math.max(hb(e),ib(e)):360*vb.degrees/d.sc())/256/Math.pow(2,0),l=h/Math.pow(2,28);d=a.maxResolution;void 0!==
d?f=0:d=h/Math.pow(g,f);e=a.minResolution;void 0===e&&(e=void 0!==a.maxZoom?void 0!==a.maxResolution?d/Math.pow(g,c):h/Math.pow(g,c):l);c=f+Math.floor(Math.log(d/e)/Math.log(g));e=d/Math.pow(g,c-f);c=Ie(g,d,c-f)}this.a=d;this.i=e;this.A=g;this.g=a.resolutions;this.j=f;(void 0!==a.enableRotation?a.enableRotation:1)?(f=a.constrainRotation,f=void 0===f||!0===f?Ne():!1===f?Le:"number"===typeof f?Me(f):Le):f=Ke;this.u=new Wc(void 0!==a.extent?oc(a.extent):pc,c,f);void 0!==a.resolution?b.resolution=a.resolution:
void 0!==a.zoom&&(b.resolution=this.constrainResolution(this.a,a.zoom-this.j));b.rotation=void 0!==a.rotation?a.rotation:0;this.H(b)}u(Qf,Gc);k=Qf.prototype;
k.animate=function(a){var b=Date.now(),c=this.Ba().slice(),d=this.Ua(),e=this.Va(),f=arguments.length,g;1<f&&"function"===typeof arguments[f-1]&&(g=arguments[f-1],--f);for(var h=[],l=0;l<f;++l){var m=arguments[l],p={start:b,complete:!1,anchor:m.anchor,duration:void 0!==m.duration?m.duration:1E3,easing:m.easing||gd};m.center&&(p.Bg=c,p.Dg=m.center,c=p.Dg);void 0!==m.zoom?(p.hf=d,p.jf=this.constrainResolution(this.a,m.zoom-this.j,0),d=p.jf):m.resolution&&(p.hf=d,p.jf=m.resolution,d=p.jf);void 0!==m.rotation&&
(p.Cg=e,p.Xi=m.rotation,e=p.Xi);p.fd=g;b+=p.duration;h.push(p)}this.c.push(h);Rf(this,0,1);this.lf()};function md(a){Rf(a,0,-ld(a)[0]);for(var b=0,c=a.c.length;b<c;++b){var d=a.c[b];d[0].fd&&d[0].fd(!1)}a.c.length=0}
k.lf=function(){void 0!==this.v&&(cancelAnimationFrame(this.v),this.v=void 0);if(0<ld(this)[0]){for(var a=Date.now(),b=!1,c=this.c.length-1;0<=c;--c){for(var d=this.c[c],e=!0,f=0,g=d.length;f<g;++f){var h=d[f];if(!h.complete){b=a-h.start;b=0<h.duration?b/h.duration:1;1<=b?(h.complete=!0,b=1):e=!1;b=h.easing(b);if(h.Bg){var l=h.Bg[0],m=h.Bg[1];this.set("center",[l+b*(h.Dg[0]-l),m+b*(h.Dg[1]-m)])}h.hf&&(l=h.hf+b*(h.jf-h.hf),h.anchor&&this.set("center",Sf(this,l,h.anchor)),this.set("resolution",l));
void 0!==h.Cg&&(b=h.Cg+b*(h.Xi-h.Cg),h.anchor&&this.set("center",Tf(this,b,h.anchor)),this.set("rotation",b));b=!0;if(!h.complete)break}}e&&(this.c[c]=null,Rf(this,0,-1),(d=d[0].fd)&&d(!0))}this.c=this.c.filter(Boolean);b&&void 0===this.v&&(this.v=requestAnimationFrame(this.lf))}};function Tf(a,b,c){var d,e=a.Ba();void 0!==e&&(d=[e[0]-c[0],e[1]-c[1]],Ve(d,b-a.Va()),Qe(d,c));return d}
function Sf(a,b,c){var d,e=a.Ba();a=a.Ua();void 0!==e&&void 0!==a&&(d=[c[0]-b*(c[0]-e[0])/a,c[1]-b*(c[1]-e[1])/a]);return d}function Uf(a){var b=[100,100];a='.ol-viewport[data-view="'+w(a)+'"]';if(a=document.querySelector(a))a=getComputedStyle(a),b[0]=parseInt(a.width,10),b[1]=parseInt(a.height,10);return b}k.Ec=function(a){return this.u.center(a)};k.constrainResolution=function(a,b,c){return this.u.resolution(a,b||0,c||0)};k.constrainRotation=function(a,b){return this.u.rotation(a,b||0)};k.Ba=function(){return this.get("center")};
function ld(a,b){return void 0!==b?(b[0]=a.l[0],b[1]=a.l[1],b):a.l.slice()}k.ed=function(a){a=a||Uf(this);var b=this.Ba();qa(b,1);var c=this.Ua();qa(void 0!==c,2);var d=this.Va();qa(void 0!==d,3);return kb(b,c,d,a)};k.sm=function(){return this.a};k.tm=function(){return this.i};k.um=function(){return this.o};k.Ua=function(){return this.get("resolution")};k.vm=function(){return this.g};function Vf(a,b){return Math.max(hb(a)/b[0],ib(a)/b[1])}
function Wf(a){var b=a.a,c=Math.log(b/a.i)/Math.log(2);return function(a){return b/Math.pow(2,a*c)}}k.Va=function(){return this.get("rotation")};function Xf(a){var b=a.a,c=Math.log(b/a.i)/Math.log(2);return function(a){return Math.log(b/a)/Math.log(2)/c}}k.V=function(){var a=this.Ba(),b=this.o,c=this.Ua(),d=this.Va();return{center:a.slice(),projection:void 0!==b?b:null,resolution:c,rotation:d}};
k.$k=function(){var a,b=this.Ua();if(void 0!==b&&b>=this.i&&b<=this.a){a=this.j||0;var c,d;if(this.g){d=fa(this.g,b,1);a+=d;if(d==this.g.length-1)return a;c=this.g[d];d=c/this.g[d+1]}else c=this.a,d=this.A;a+=Math.log(c/b)/Math.log(d)}return a};
k.Ff=function(a,b){var c=b||{},d=c.size;d||(d=Uf(this));var e;a instanceof ff?"Circle"===a.T()?(a=a.D(),e=Nf(a),e.rotate(this.Va(),jb(a))):e=a:(qa(Array.isArray(a),24),qa(!gb(a),25),e=Nf(a));var f=c.padding?c.padding:[0,0,0,0],g=void 0!==c.constrainResolution?c.constrainResolution:!0,h=void 0!==c.nearest?c.nearest:!1,l;void 0!==c.minResolution?l=c.minResolution:void 0!==c.maxZoom?l=this.constrainResolution(this.a,c.maxZoom-this.j,0):l=0;var m=e.ha(),p=this.Va(),n=Math.cos(-p),p=Math.sin(-p),q=Infinity,
r=Infinity,v=-Infinity,x=-Infinity;e=e.sa();for(var y=0,z=m.length;y<z;y+=e)var A=m[y]*n-m[y+1]*p,V=m[y]*p+m[y+1]*n,q=Math.min(q,A),r=Math.min(r,V),v=Math.max(v,A),x=Math.max(x,V);d=Vf([q,r,v,x],[d[0]-f[1]-f[3],d[1]-f[0]-f[2]]);d=isNaN(d)?l:Math.max(d,l);g&&(g=this.constrainResolution(d,0,0),!h&&g<d&&(g=this.constrainResolution(g,-1,0)),d=g);p=-p;h=(q+v)/2+(f[1]-f[3])/2*d;f=(r+x)/2+(f[0]-f[2])/2*d;n=[h*n-f*p,f*n+h*p];void 0!==c.duration?this.animate({resolution:d,center:n,duration:c.duration,easing:c.easing}):
(this.Xc(d),this.wb(n))};k.$j=function(a,b,c){var d=this.Va(),e=Math.cos(-d),d=Math.sin(-d),f=a[0]*e-a[1]*d;a=a[1]*e+a[0]*d;var g=this.Ua(),f=f+(b[0]/2-c[0])*g;a+=(c[1]-b[1]/2)*g;d=-d;this.wb([f*e-a*d,a*e+f*d])};function Yf(a){return!!a.Ba()&&void 0!==a.Ua()}k.rotate=function(a,b){if(void 0!==b){var c=Tf(this,a,b);this.wb(c)}this.He(a)};k.wb=function(a){this.set("center",a);0<ld(this)[0]&&md(this)};function Rf(a,b,c){a.l[b]+=c;a.s()}k.Xc=function(a){this.set("resolution",a);0<ld(this)[0]&&md(this)};
k.He=function(a){this.set("rotation",a);0<ld(this)[0]&&md(this)};k.yp=function(a){a=this.constrainResolution(this.a,a-this.j,0);this.Xc(a)};function Zf(a,b,c){this.i=a;this.c=b;this.g=c;this.b=[];this.a=this.f=0}function $f(a){a.b.length=0;a.f=0;a.a=0};function ag(a){Gc.call(this);this.v=null;this.Ia(!0);this.handleEvent=a.handleEvent}u(ag,Gc);ag.prototype.c=function(){return this.get("active")};ag.prototype.i=function(){return this.v};ag.prototype.Ia=function(a){this.set("active",a)};ag.prototype.setMap=function(a){this.v=a};function bg(a,b,c,d){if(void 0!==b){var e=a.Va(),f=a.Ba();void 0!==e&&f&&0<d?a.animate({rotation:b,anchor:c,duration:d,easing:fd}):a.rotate(b,c)}}
function cg(a,b,c,d){var e=a.Ua();b=a.constrainResolution(e,b,0);if(c&&void 0!==b&&b!==e){var f=a.Ba();c=Sf(a,b,c);c=a.Ec(c);c=[(b*f[0]-e*c[0])/(b-e),(b*f[1]-e*c[1])/(b-e)]}dg(a,b,c,d)}function dg(a,b,c,d){if(b){var e=a.Ua(),f=a.Ba();void 0!==e&&f&&b!==e&&d?a.animate({resolution:b,anchor:c,duration:d,easing:fd}):(c&&(c=Sf(a,b,c),a.wb(c)),a.Xc(b))}};function eg(a){a=a?a:{};this.a=a.delta?a.delta:1;ag.call(this,{handleEvent:fg});this.g=void 0!==a.duration?a.duration:250}u(eg,ag);function fg(a){var b=!1,c=a.originalEvent;if("dblclick"==a.type){var b=a.coordinate,c=c.shiftKey?-this.a:this.a,d=a.map.$();cg(d,c,b,this.g);a.preventDefault();b=!0}return!b};function gg(a){a=a.originalEvent;return a.altKey&&!(a.metaKey||a.ctrlKey)&&a.shiftKey}function hg(a){a=a.originalEvent;return!a.button&&!(Id&&Jd&&a.ctrlKey)}function ig(a){return"pointermove"==a.type}function jg(a){return"singleclick"==a.type}function kg(a){a=a.originalEvent;return!a.altKey&&!(a.metaKey||a.ctrlKey)&&!a.shiftKey}function lg(a){a=a.originalEvent;return!a.altKey&&!(a.metaKey||a.ctrlKey)&&a.shiftKey}
function mg(a){a=a.originalEvent.target.tagName;return"INPUT"!==a&&"SELECT"!==a&&"TEXTAREA"!==a}function ng(a){qa(a.b,56);return"mouse"==a.b.pointerType}function og(a){a=a.b;return a.isPrimary&&0===a.button};function pg(a){a=a?a:{};ag.call(this,{handleEvent:a.handleEvent?a.handleEvent:qg});this.sf=a.handleDownEvent?a.handleDownEvent:bf;this.pf=a.handleDragEvent?a.handleDragEvent:na;this.xf=a.handleMoveEvent?a.handleMoveEvent:na;this.yf=a.handleUpEvent?a.handleUpEvent:bf;this.A=!1;this.Y={};this.l=[]}u(pg,ag);function rg(a){for(var b=a.length,c=0,d=0,e=0;e<b;e++)c+=a[e].clientX,d+=a[e].clientY;return[c/b,d/b]}
function qg(a){if(!(a instanceof Bd))return!0;var b=!1,c=a.type;if("pointerdown"===c||"pointerdrag"===c||"pointerup"===c)c=a.b,"pointerup"==a.type?delete this.Y[c.pointerId]:"pointerdown"==a.type?this.Y[c.pointerId]=c:c.pointerId in this.Y&&(this.Y[c.pointerId]=c),this.l=rb(this.Y);this.A?"pointerdrag"==a.type?this.pf(a):"pointerup"==a.type&&(this.A=this.yf(a)&&0<this.l.length):"pointerdown"==a.type?(this.A=a=this.sf(a),b=this.Zc(a)):"pointermove"==a.type&&this.xf(a);return!b}pg.prototype.Zc=function(a){return a};function sg(a){pg.call(this,{handleDownEvent:tg,handleDragEvent:ug,handleUpEvent:vg});a=a?a:{};this.a=a.kinetic;this.g=null;this.u=a.condition?a.condition:kg;this.j=!1}u(sg,pg);function ug(a){var b=this.l,c=rg(b);if(b.length==this.o){if(this.a&&this.a.b.push(c[0],c[1],Date.now()),this.g){var d=this.g[0]-c[0],e=c[1]-this.g[1];a=a.map.$();var f=a.V(),d=[d,e];We(d,f.resolution);Ve(d,f.rotation);Qe(d,f.center);d=a.Ec(d);a.wb(d)}}else this.a&&$f(this.a);this.g=c;this.o=b.length}
function vg(a){var b=a.map;a=b.$();if(this.l.length)return this.a&&$f(this.a),this.g=null,!0;var c;if(c=!this.j&&this.a)if(c=this.a,6>c.b.length)c=!1;else{var d=Date.now()-c.g,e=c.b.length-3;if(c.b[e+2]<d)c=!1;else{for(var f=e-3;0<f&&c.b[f+2]>d;)f-=3;var d=c.b[e+2]-c.b[f+2],g=c.b[e]-c.b[f],e=c.b[e+1]-c.b[f+1];c.f=Math.atan2(e,g);c.a=Math.sqrt(g*g+e*e)/d;c=c.a>c.c}}c&&(c=this.a,c=(c.c-c.a)/c.i,e=this.a.f,f=a.Ba(),f=b.Ka(f),b=b.Za([f[0]-c*Math.cos(e),f[1]-c*Math.sin(e)]),a.animate({center:a.Ec(b),duration:500,
easing:fd}));Rf(a,1,-1);return!1}function tg(a){if(0<this.l.length&&this.u(a)){var b=a.map.$();this.g=null;this.A||Rf(b,1,1);ld(b)[0]&&b.wb(a.frameState.viewState.center);this.a&&$f(this.a);this.j=1<this.l.length;return!0}return!1}sg.prototype.Zc=bf;function wg(a){a=a?a:{};pg.call(this,{handleDownEvent:xg,handleDragEvent:yg,handleUpEvent:zg});this.g=a.condition?a.condition:gg;this.a=void 0;this.j=void 0!==a.duration?a.duration:250}u(wg,pg);function yg(a){if(ng(a)){var b=a.map,c=b.Mb();a=a.pixel;c=Math.atan2(c[1]/2-a[1],a[0]-c[0]/2);if(void 0!==this.a){a=c-this.a;var b=b.$(),d=b.Va();bg(b,d-a)}this.a=c}}function zg(a){if(!ng(a))return!0;a=a.map.$();Rf(a,1,-1);var b=a.Va(),c=this.j,b=a.constrainRotation(b,0);bg(a,b,void 0,c);return!1}
function xg(a){return ng(a)&&hg(a)&&this.g(a)?(Rf(a.map.$(),1,1),this.a=void 0,!0):!1}wg.prototype.Zc=bf;function Ag(a){this.Gc=null;this.a=document.createElement("div");this.a.style.position="absolute";this.a.className="ol-box "+a;this.f=this.c=this.b=null}u(Ag,zc);Ag.prototype.ra=function(){this.setMap(null)};function Bg(a){var b=a.c,c=a.f;a=a.a.style;a.left=Math.min(b[0],c[0])+"px";a.top=Math.min(b[1],c[1])+"px";a.width=Math.abs(c[0]-b[0])+"px";a.height=Math.abs(c[1]-b[1])+"px"}
Ag.prototype.setMap=function(a){if(this.b){this.b.A.removeChild(this.a);var b=this.a.style;b.left=b.top=b.width=b.height="inherit"}(this.b=a)&&this.b.A.appendChild(this.a)};function Cg(a){var b=a.c,c=a.f,b=[b,[b[0],c[1]],c,[c[0],b[1]]].map(a.b.Za,a.b);b[4]=b[0].slice();a.Gc?a.Gc.pa([b]):a.Gc=new F([b])}Ag.prototype.U=function(){return this.Gc};function Dg(a){pg.call(this,{handleDownEvent:Eg,handleDragEvent:Fg,handleUpEvent:Gg});a=a?a:{};this.a=new Ag(a.className||"ol-dragbox");this.g=null;this.u=a.condition?a.condition:af;this.o=a.boxEndCondition?a.boxEndCondition:Hg}u(Dg,pg);function Hg(a,b,c){a=c[0]-b[0];b=c[1]-b[1];return 64<=a*a+b*b}function Fg(a){if(ng(a)){var b=this.a,c=a.pixel;b.c=this.g;b.f=c;Cg(b);Bg(b);this.b(new Ig(Jg,a.coordinate,a))}}Dg.prototype.U=function(){return this.a.U()};Dg.prototype.j=na;
function Gg(a){if(!ng(a))return!0;this.a.setMap(null);this.o(a,this.g,a.pixel)&&(this.j(a),this.b(new Ig(Kg,a.coordinate,a)));return!1}function Eg(a){if(ng(a)&&hg(a)&&this.u(a)){this.g=a.pixel;this.a.setMap(a.map);var b=this.a,c=this.g;b.c=this.g;b.f=c;Cg(b);Bg(b);this.b(new Ig(Lg,a.coordinate,a));return!0}return!1}var Lg="boxstart",Jg="boxdrag",Kg="boxend";function Ig(a,b,c){Bc.call(this,a);this.coordinate=b;this.mapBrowserEvent=c}u(Ig,Bc);function Mg(a){a=a?a:{};var b=a.condition?a.condition:lg;this.C=void 0!==a.duration?a.duration:200;this.G=void 0!==a.out?a.out:!1;Dg.call(this,{condition:b,className:a.className||"ol-dragzoom"})}u(Mg,Dg);
Mg.prototype.j=function(){var a=this.v,b=a.$(),c=a.Mb(),d=this.U().D();if(this.G){var e=b.ed(c),d=[a.Ka(bb(d)),a.Ka(db(d))],a=Va(Infinity,Infinity,-Infinity,-Infinity,void 0),f,g;f=0;for(g=d.length;f<g;++f)Ja(a,d[f]);nb(e,1/Vf(a,c));d=e}c=b.constrainResolution(Vf(d,c));e=jb(d);e=b.Ec(e);b.animate({resolution:c,center:e,duration:this.C,easing:fd})};function Ng(a){ag.call(this,{handleEvent:Og});a=a||{};this.a=function(a){return kg(a)&&mg(a)};this.g=a.condition?a.condition:this.a;this.l=void 0!==a.duration?a.duration:100;this.j=void 0!==a.pixelDelta?a.pixelDelta:128}u(Ng,ag);
function Og(a){var b=!1;if("keydown"==a.type){var c=a.originalEvent.keyCode;if(this.g(a)&&(40==c||37==c||39==c||38==c)){var b=a.map.$(),d=b.Ua()*this.j,e=0,f=0;40==c?f=-d:37==c?e=-d:39==c?e=d:f=d;d=[e,f];Ve(d,b.Va());c=this.l;if(e=b.Ba())d=b.Ec([e[0]+d[0],e[1]+d[1]]),c?b.animate({duration:c,easing:hd,center:d}):b.wb(d);a.preventDefault();b=!0}}return!b};function Pg(a){ag.call(this,{handleEvent:Qg});a=a?a:{};this.g=a.condition?a.condition:mg;this.a=a.delta?a.delta:1;this.l=void 0!==a.duration?a.duration:100}u(Pg,ag);function Qg(a){var b=!1;if("keydown"==a.type||"keypress"==a.type){var c=a.originalEvent.charCode;!this.g(a)||43!=c&&45!=c||(b=43==c?this.a:-this.a,c=a.map.$(),cg(c,b,void 0,this.l),a.preventDefault(),b=!0)}return!b};function Rg(a){ag.call(this,{handleEvent:Sg});a=a||{};this.l=0;this.R=void 0!==a.duration?a.duration:250;this.Y=void 0!==a.timeout?a.timeout:80;this.A=void 0!==a.useAnchor?a.useAnchor:!0;this.a=null;this.o=this.j=this.u=this.g=void 0}u(Rg,ag);
function Sg(a){var b=a.type;if("wheel"!==b&&"mousewheel"!==b)return!0;a.preventDefault();var b=a.map,c=a.originalEvent;this.A&&(this.a=a.coordinate);var d;"wheel"==a.type?(d=c.deltaY,Gd&&c.deltaMode===WheelEvent.DOM_DELTA_PIXEL&&(d/=Kd),c.deltaMode===WheelEvent.DOM_DELTA_LINE&&(d*=40)):"mousewheel"==a.type&&(d=-c.wheelDeltaY,Hd&&(d/=3));if(0===d)return!1;a=Date.now();void 0===this.g&&(this.g=a);if(!this.j||400<a-this.g)this.j=4>Math.abs(d)?Tg:Ug;if(this.j===Tg){b=b.$();this.o?clearTimeout(this.o):
Rf(b,1,1);this.o=setTimeout(this.C.bind(this),400);d=b.Ua()*Math.pow(2,d/300);var c=b.i,e=b.a,f=0;d<c?(d=Math.max(d,c/1.5),f=1):d>e&&(d=Math.min(d,1.5*e),f=-1);if(this.a){var g=Sf(b,d,this.a);b.wb(b.Ec(g))}b.Xc(d);0<f?b.animate({resolution:c,easing:fd,anchor:this.a,duration:500}):0>f&&b.animate({resolution:e,easing:fd,anchor:this.a,duration:500});this.g=a;return!1}this.l+=d;a=Math.max(this.Y-(a-this.g),0);clearTimeout(this.u);this.u=setTimeout(this.G.bind(this,b),a);return!1}
Rg.prototype.C=function(){this.o=void 0;Rf(this.v.$(),1,-1)};Rg.prototype.G=function(a){a=a.$();0<ld(a)[0]&&md(a);cg(a,-wa(this.l,-1,1),this.a,this.R);this.j=void 0;this.l=0;this.a=null;this.u=this.g=void 0};Rg.prototype.S=function(a){this.A=a;a||(this.a=null)};var Tg="trackpad",Ug="wheel";function Vg(a){pg.call(this,{handleDownEvent:Wg,handleDragEvent:Xg,handleUpEvent:Yg});a=a||{};this.g=null;this.j=void 0;this.a=!1;this.o=0;this.C=void 0!==a.threshold?a.threshold:.3;this.u=void 0!==a.duration?a.duration:250}u(Vg,pg);
function Xg(a){var b=0,c=this.l[0],d=this.l[1],c=Math.atan2(d.clientY-c.clientY,d.clientX-c.clientX);void 0!==this.j&&(b=c-this.j,this.o+=b,!this.a&&Math.abs(this.o)>this.C&&(this.a=!0));this.j=c;a=a.map;c=a.c.getBoundingClientRect();d=rg(this.l);d[0]-=c.left;d[1]-=c.top;this.g=a.Za(d);this.a&&(c=a.$(),d=c.Va(),a.render(),bg(c,d+b,this.g))}function Yg(a){if(2>this.l.length){a=a.map.$();Rf(a,1,-1);if(this.a){var b=a.Va(),c=this.g,d=this.u,b=a.constrainRotation(b,0);bg(a,b,c,d)}return!1}return!0}
function Wg(a){return 2<=this.l.length?(a=a.map,this.g=null,this.j=void 0,this.a=!1,this.o=0,this.A||Rf(a.$(),1,1),!0):!1}Vg.prototype.Zc=bf;function Zg(a){pg.call(this,{handleDownEvent:$g,handleDragEvent:ah,handleUpEvent:bh});a=a?a:{};this.o=a.constrainResolution||!1;this.g=null;this.u=void 0!==a.duration?a.duration:400;this.a=void 0;this.j=1}u(Zg,pg);
function ah(a){var b=1,c=this.l[0],d=this.l[1],e=c.clientX-d.clientX,c=c.clientY-d.clientY,e=Math.sqrt(e*e+c*c);void 0!==this.a&&(b=this.a/e);this.a=e;a=a.map;var e=a.$(),d=e.Ua(),f=e.a,g=e.i,c=d*b;c>f?(b=f/d,c=f):c<g&&(b=g/d,c=g);1!=b&&(this.j=b);b=a.c.getBoundingClientRect();d=rg(this.l);d[0]-=b.left;d[1]-=b.top;this.g=a.Za(d);a.render();dg(e,c,this.g)}
function bh(a){if(2>this.l.length){a=a.map.$();Rf(a,1,-1);var b=a.Ua();if(this.o||b<a.i||b>a.a){var c=this.g,d=this.u,b=a.constrainResolution(b,0,this.j-1);dg(a,b,c,d)}return!1}return!0}function $g(a){return 2<=this.l.length?(a=a.map,this.g=null,this.a=void 0,this.j=1,this.A||Rf(a.$(),1,1),!0):!1}Zg.prototype.Zc=bf;function ch(a){a=a?a:{};var b=new D,c=new Zf(-.005,.05,100);(void 0!==a.altShiftDragRotate?a.altShiftDragRotate:1)&&b.push(new wg);(void 0!==a.doubleClickZoom?a.doubleClickZoom:1)&&b.push(new eg({delta:a.zoomDelta,duration:a.zoomDuration}));(void 0!==a.dragPan?a.dragPan:1)&&b.push(new sg({kinetic:c}));(void 0!==a.pinchRotate?a.pinchRotate:1)&&b.push(new Vg);(void 0!==a.pinchZoom?a.pinchZoom:1)&&b.push(new Zg({duration:a.zoomDuration}));if(void 0!==a.keyboard?a.keyboard:1)b.push(new Ng),b.push(new Pg({delta:a.zoomDelta,
duration:a.zoomDuration}));(void 0!==a.mouseWheelZoom?a.mouseWheelZoom:1)&&b.push(new Rg({duration:a.zoomDuration}));(void 0!==a.shiftDragZoom?a.shiftDragZoom:1)&&b.push(new Mg({duration:a.zoomDuration}));return b};function dh(a){Gc.call(this);var b=pb({},a);b.opacity=void 0!==a.opacity?a.opacity:1;b.visible=void 0!==a.visible?a.visible:!0;b.zIndex=void 0!==a.zIndex?a.zIndex:0;b.maxResolution=void 0!==a.maxResolution?a.maxResolution:Infinity;b.minResolution=void 0!==a.minResolution?a.minResolution:0;this.H(b);this.a={layer:this,De:!0}}u(dh,Gc);
function eh(a){a.a.opacity=wa(a.ic(),0,1);a.a.Ui=a.Nf();a.a.visible=a.Kb();a.a.extent=a.D();a.a.zIndex=a.za();a.a.maxResolution=a.gc();a.a.minResolution=Math.max(a.hc(),0);return a.a}k=dh.prototype;k.D=function(){return this.get("extent")};k.gc=function(){return this.get("maxResolution")};k.hc=function(){return this.get("minResolution")};k.ic=function(){return this.get("opacity")};k.Kb=function(){return this.get("visible")};k.za=function(){return this.get("zIndex")};
k.uc=function(a){this.set("extent",a)};k.zc=function(a){this.set("maxResolution",a)};k.Ac=function(a){this.set("minResolution",a)};k.vc=function(a){this.set("opacity",a)};k.wc=function(a){this.set("visible",a)};k.Wb=function(a){this.set("zIndex",a)};function fh(a){var b=a||{};a=pb({},b);delete a.layers;b=b.layers;dh.call(this,a);this.i=[];this.c={};B(this,Ic(gh),this.nl,this);b?Array.isArray(b)?b=new D(b.slice()):qa(b instanceof D,43):b=new D;this.Sh(b)}u(fh,dh);k=fh.prototype;k.Dd=function(){};k.ze=function(){this.Kb()&&this.s()};
k.nl=function(){this.i.forEach(rc);this.i.length=0;var a=this.od();this.i.push(B(a,"add",this.ml,this),B(a,"remove",this.ol,this));for(var b in this.c)this.c[b].forEach(rc);qb(this.c);var a=a.a,c,d;b=0;for(c=a.length;b<c;b++)d=a[b],this.c[w(d).toString()]=[B(d,"propertychange",this.ze,this),B(d,"change",this.ze,this)];this.s()};k.ml=function(a){a=a.element;var b=w(a).toString();this.c[b]=[B(a,"propertychange",this.ze,this),B(a,"change",this.ze,this)];this.s()};
k.ol=function(a){a=w(a.element).toString();this.c[a].forEach(rc);delete this.c[a];this.s()};k.od=function(){return this.get(gh)};k.Sh=function(a){this.set(gh,a)};
k.Lf=function(a){var b=void 0!==a?a:[],c=b.length;this.od().forEach(function(a){a.Lf(b)});a=eh(this);var d,e;for(d=b.length;c<d;c++)e=b[c],e.opacity*=a.opacity,e.visible=e.visible&&a.visible,e.maxResolution=Math.min(e.maxResolution,a.maxResolution),e.minResolution=Math.max(e.minResolution,a.minResolution),void 0!==a.extent&&(e.extent=void 0!==e.extent?lb(e.extent,a.extent):a.extent);return b};k.Nf=function(){return"ready"};var gh="layers";function hh(a){yb.call(this,{code:a,units:"m",extent:ih,global:!0,worldExtent:jh,getPointResolution:function(a,c){return a/xa(c[1]/6378137)}})}u(hh,yb);var kh=6378137*Math.PI,ih=[-kh,-kh,kh,kh],jh=[-180,-85,180,85],Lb="EPSG:3857 EPSG:102100 EPSG:102113 EPSG:900913 urn:ogc:def:crs:EPSG:6.18:3:3857 urn:ogc:def:crs:EPSG::3857 http://www.opengis.net/gml/srs/epsg.xml#3857".split(" ").map(function(a){return new hh(a)});
function Mb(a,b,c){var d=a.length;c=1<c?c:2;void 0===b&&(2<c?b=a.slice():b=Array(d));for(var e=0;e<d;e+=c){b[e]=kh*a[e]/180;var f=6378137*Math.log(Math.tan(Math.PI*(a[e+1]+90)/360));f>kh?f=kh:f<-kh&&(f=-kh);b[e+1]=f}return b}function Nb(a,b,c){var d=a.length;c=1<c?c:2;void 0===b&&(2<c?b=a.slice():b=Array(d));for(var e=0;e<d;e+=c)b[e]=180*a[e]/kh,b[e+1]=360*Math.atan(Math.exp(a[e+1]/6378137))/Math.PI-90;return b};var mh=new tb(6378137);function nh(a,b){yb.call(this,{code:a,units:"degrees",extent:oh,axisOrientation:b,global:!0,metersPerUnit:ph,worldExtent:oh})}u(nh,yb);var oh=[-180,-90,180,90],ph=Math.PI*mh.radius/180,Ob=[new nh("CRS:84"),new nh("EPSG:4326","neu"),new nh("urn:ogc:def:crs:EPSG::4326","neu"),new nh("urn:ogc:def:crs:EPSG:6.6:4326","neu"),new nh("urn:ogc:def:crs:OGC:1.3:CRS84"),new nh("urn:ogc:def:crs:OGC:2:84"),new nh("http://www.opengis.net/gml/srs/epsg.xml#4326","neu"),new nh("urn:x-ogc:def:crs:EPSG:4326","neu")];function qh(){Hb(Lb);Hb(Ob);Kb()};function rh(a){var b=pb({},a);delete b.source;dh.call(this,b);this.u=this.o=this.j=null;a.map&&this.setMap(a.map);B(this,Ic("source"),this.Al,this);this.Yc(a.source?a.source:null)}u(rh,dh);function sh(a,b){return a.visible&&b>=a.minResolution&&b<a.maxResolution}k=rh.prototype;k.Lf=function(a){a=a?a:[];a.push(eh(this));return a};k.la=function(){return this.get("source")||null};k.Nf=function(){var a=this.la();return a?a.V():"undefined"};k.kn=function(){this.s()};
k.Al=function(){this.u&&(rc(this.u),this.u=null);var a=this.la();a&&(this.u=B(a,"change",this.kn,this));this.s()};k.setMap=function(a){this.j&&(rc(this.j),this.j=null);a||this.s();this.o&&(rc(this.o),this.o=null);a&&(this.j=B(a,"precompose",function(a){var b=eh(this);b.De=!1;b.zIndex=Infinity;a.frameState.layerStatesArray.push(b);a.frameState.layerStates[w(this)]=b},this),this.o=B(this,"change",a.render,a),this.s())};k.Yc=function(a){this.set("source",a)};function th(){this.b={};this.a=0}th.prototype.clear=function(){this.b={};this.a=0};th.prototype.get=function(a,b,c){a=b+":"+a+":"+(c?Sc(c):"null");return a in this.b?this.b[a]:null};th.prototype.set=function(a,b,c,d){this.b[b+":"+a+":"+(c?Sc(c):"null")]=d;++this.a};var uh=new th;var vh=Array(6);function wh(){return[1,0,0,1,0,0]}function xh(a){return yh(a,1,0,0,1,0,0)}function zh(a,b){var c=a[0],d=a[1],e=a[2],f=a[3],g=a[4],h=a[5],l=b[0],m=b[1],p=b[2],n=b[3],q=b[4],r=b[5];a[0]=c*l+e*m;a[1]=d*l+f*m;a[2]=c*p+e*n;a[3]=d*p+f*n;a[4]=c*q+e*r+g;a[5]=d*q+f*r+h;return a}function yh(a,b,c,d,e,f,g){a[0]=b;a[1]=c;a[2]=d;a[3]=e;a[4]=f;a[5]=g;return a}function Ah(a,b){a[0]=b[0];a[1]=b[1];a[2]=b[2];a[3]=b[3];a[4]=b[4];a[5]=b[5];return a}
function Bh(a,b){var c=b[0],d=b[1];b[0]=a[0]*c+a[2]*d+a[4];b[1]=a[1]*c+a[3]*d+a[5];return b}function Ch(a,b){var c=Math.cos(b),d=Math.sin(b);zh(a,yh(vh,c,d,-d,c,0,0))}function Dh(a,b,c){return zh(a,yh(vh,b,0,0,c,0,0))}function Eh(a,b,c){zh(a,yh(vh,1,0,0,1,b,c))}function Fh(a,b,c,d,e,f,g,h){var l=Math.sin(f);f=Math.cos(f);a[0]=d*f;a[1]=e*l;a[2]=-d*l;a[3]=e*f;a[4]=g*d*f-h*d*l+b;a[5]=g*e*l+h*e*f+c;return a}
function Gh(a){var b=a[0]*a[3]-a[1]*a[2];qa(!!b,32);var c=a[0],d=a[1],e=a[2],f=a[3],g=a[4],h=a[5];a[0]=f/b;a[1]=-d/b;a[2]=-e/b;a[3]=c/b;a[4]=(e*h-f*g)/b;a[5]=-(c*h-d*g)/b;return a};function Hh(a,b){this.j=b;this.c={};this.v={}}u(Hh,zc);function Ih(a){var b=a.viewState,c=a.coordinateToPixelTransform,d=a.pixelToCoordinateTransform;Fh(c,a.size[0]/2,a.size[1]/2,1/b.resolution,-1/b.resolution,-b.rotation,-b.center[0],-b.center[1]);Gh(Ah(d,c))}k=Hh.prototype;k.ra=function(){for(var a in this.c)Ac(this.c[a])};function Jh(){if(32<uh.a){var a=0,b,c;for(b in uh.b)c=uh.b[b],a++&3||Ec(c)||(delete uh.b[b],--uh.a)}}
k.Aa=function(a,b,c,d,e,f,g){function h(a,c){var f=w(a).toString(),g=b.layerStates[w(c)].De;if(!(f in b.skippedFeatureUids)||g)return d.call(e,a,g?c:null)}var l,m=b.viewState,p=m.resolution,n=m.projection,m=a;if(n.a){var n=n.D(),q=hb(n),r=a[0];if(r<n[0]||r>n[2])m=[r+q*Math.ceil((n[0]-r)/q),a[1]]}n=b.layerStatesArray;for(q=n.length-1;0<=q;--q){var v=n[q],r=v.layer;if(sh(v,p)&&f.call(g,r)&&(v=Kh(this,r),r.la()&&(l=v.Aa(r.la().G?m:a,b,c,h,e)),l))return l}};
k.Zh=function(a,b,c,d,e){return void 0!==this.Aa(a,b,c,af,this,d,e)};function Kh(a,b){var c=w(b).toString();if(c in a.c)return a.c[c];var d=b.Dd(a);a.c[c]=d;a.v[c]=B(d,"change",a.ll,a);return d}k.ll=function(){this.j.render()};k.vg=na;k.gp=function(a,b){for(var c in this.c)if(!(b&&c in b.layerStates)){var d=c,e=this.c[d];delete this.c[d];rc(this.v[d]);delete this.v[d];Ac(e)}};function Lh(a,b){for(var c in a.c)if(!(c in b.layerStates)){b.postRenderFunctions.push(a.gp.bind(a));break}}
function ka(a,b){return a.zIndex-b.zIndex};function Mh(a,b,c,d,e){Bc.call(this,a);this.vectorContext=b;this.frameState=c;this.context=d;this.glContext=e}u(Mh,Bc);var Nh=[0,0,0,1],Oh=[],Ph=[0,0,0,1];function Qh(a,b,c,d){b&&(a.translate(c,d),a.rotate(b),a.translate(-c,-d))};function Rh(){}k=Rh.prototype;k.mc=function(){};k.pd=function(){};k.$b=function(){};k.oe=function(){};k.pe=function(){};k.Qb=function(){};k.nc=function(){};k.oc=function(){};k.pc=function(){};k.qc=function(){};k.rc=function(){};k.xc=function(){};k.Na=function(){};k.Vb=function(){};k.Tb=function(){};function Sh(a,b,c,d,e){this.f=a;this.I=b;this.c=c;this.u=d;this.mb=e;this.M=this.b=this.a=this.$a=this.S=this.R=null;this.eb=this.Y=this.o=this.G=this.C=this.A=0;this.ea=!1;this.i=this.ia=0;this.oa=!1;this.qa=0;this.Fa="";this.Ja=this.Zb=0;this.Ha=!1;this.l=this.Oa=0;this.ta=this.j=this.g=null;this.v=[];this.lb=wh()}u(Sh,Rh);
function Th(a,b,c){if(a.M){b=df(b,0,c,2,a.u,a.v);c=a.f;var d=a.lb,e=c.globalAlpha;1!=a.o&&(c.globalAlpha=e*a.o);var f=a.ia;a.ea&&(f+=a.mb);var g,h;g=0;for(h=b.length;g<h;g+=2){var l=b[g]-a.A,m=b[g+1]-a.C;a.oa&&(l=Math.round(l),m=Math.round(m));if(f||1!=a.i){var p=l+a.A,n=m+a.C;Fh(d,p,n,a.i,a.i,f,-p,-n);c.setTransform.apply(c,d)}c.drawImage(a.M,a.Y,a.eb,a.qa,a.G,l,m,a.qa,a.G)}(f||1!=a.i)&&c.setTransform(1,0,0,1,0,0);1!=a.o&&(c.globalAlpha=e)}}
function Uh(a,b,c,d){var e=0;if(a.ta&&""!==a.Fa){a.g&&Vh(a,a.g);a.j&&Wh(a,a.j);var f=a.ta,g=a.f,h=a.$a;h?(h.font!=f.font&&(h.font=g.font=f.font),h.textAlign!=f.textAlign&&(h.textAlign=g.textAlign=f.textAlign),h.textBaseline!=f.textBaseline&&(h.textBaseline=g.textBaseline=f.textBaseline)):(g.font=f.font,g.textAlign=f.textAlign,g.textBaseline=f.textBaseline,a.$a={font:f.font,textAlign:f.textAlign,textBaseline:f.textBaseline});b=df(b,e,c,d,a.u,a.v);f=a.f;g=a.Oa;for(a.Ha&&(g+=a.mb);e<c;e+=d){var h=b[e]+
a.Zb,l=b[e+1]+a.Ja;if(g||1!=a.l){var m=Fh(a.lb,h,l,a.l,a.l,g,-h,-l);f.setTransform.apply(f,m)}a.j&&f.strokeText(a.Fa,h,l);a.g&&f.fillText(a.Fa,h,l)}(g||1!=a.l)&&f.setTransform(1,0,0,1,0,0)}}function Xh(a,b,c,d,e,f){var g=a.f;a=df(b,c,d,e,a.u,a.v);g.moveTo(a[0],a[1]);b=a.length;f&&(b-=2);for(c=2;c<b;c+=2)g.lineTo(a[c],a[c+1]);f&&g.closePath();return d}function Yh(a,b,c,d,e){var f,g;f=0;for(g=d.length;f<g;++f)c=Xh(a,b,c,d[f],e,!0);return c}k=Sh.prototype;
k.$b=function(a){if(mb(this.c,a.D())){if(this.a||this.b){this.a&&Vh(this,this.a);this.b&&Wh(this,this.b);var b;b=this.u;var c=this.v,d=a.ha();b=d?df(d,0,d.length,a.sa(),b,c):null;c=b[2]-b[0];d=b[3]-b[1];c=Math.sqrt(c*c+d*d);d=this.f;d.beginPath();d.arc(b[0],b[1],c,0,2*Math.PI);this.a&&d.fill();this.b&&d.stroke()}""!==this.Fa&&Uh(this,a.Ba(),2,2)}};k.pd=function(a){this.Na(a.Ca(),a.Da());this.Vb(a.Z());this.Tb(a.Pa())};
k.mc=function(a){switch(a.T()){case "Point":this.qc(a);break;case "LineString":this.Qb(a);break;case "Polygon":this.rc(a);break;case "MultiPoint":this.oc(a);break;case "MultiLineString":this.nc(a);break;case "MultiPolygon":this.pc(a);break;case "GeometryCollection":this.pe(a);break;case "Circle":this.$b(a)}};k.oe=function(a,b){var c=(0,b.Ra)(a);c&&mb(this.c,c.D())&&(this.pd(b),this.mc(c))};k.pe=function(a){a=a.a;var b,c;b=0;for(c=a.length;b<c;++b)this.mc(a[b])};
k.qc=function(a){var b=a.ha();a=a.sa();this.M&&Th(this,b,b.length);""!==this.Fa&&Uh(this,b,b.length,a)};k.oc=function(a){var b=a.ha();a=a.sa();this.M&&Th(this,b,b.length);""!==this.Fa&&Uh(this,b,b.length,a)};k.Qb=function(a){if(mb(this.c,a.D())){if(this.b){Wh(this,this.b);var b=this.f,c=a.ha();b.beginPath();Xh(this,c,0,c.length,a.sa(),!1);b.stroke()}""!==this.Fa&&(a=Zh(a),Uh(this,a,2,2))}};
k.nc=function(a){var b=a.D();if(mb(this.c,b)){if(this.b){Wh(this,this.b);var b=this.f,c=a.ha(),d=0,e=a.Rb(),f=a.sa();b.beginPath();var g,h;g=0;for(h=e.length;g<h;++g)d=Xh(this,c,d,e[g],f,!1);b.stroke()}""!==this.Fa&&(a=$h(a),Uh(this,a,a.length,2))}};k.rc=function(a){if(mb(this.c,a.D())){if(this.b||this.a){this.a&&Vh(this,this.a);this.b&&Wh(this,this.b);var b=this.f;b.beginPath();Yh(this,a.fc(),0,a.Rb(),a.sa());this.a&&b.fill();this.b&&b.stroke()}""!==this.Fa&&(a=Lf(a),Uh(this,a,2,2))}};
k.pc=function(a){if(mb(this.c,a.D())){if(this.b||this.a){this.a&&Vh(this,this.a);this.b&&Wh(this,this.b);var b=this.f,c=ai(a),d=0,e=a.c,f=a.sa(),g,h;b.beginPath();g=0;for(h=e.length;g<h;++g)d=Yh(this,c,d,e[g],f);this.a&&b.fill();this.b&&b.stroke()}""!==this.Fa&&(a=bi(a),Uh(this,a,a.length,2))}};function Vh(a,b){var c=a.f,d=a.R;d?d.fillStyle!=b.fillStyle&&(d.fillStyle=c.fillStyle=b.fillStyle):(c.fillStyle=b.fillStyle,a.R={fillStyle:b.fillStyle})}
function Wh(a,b){var c=a.f,d=a.S;d?(d.lineCap!=b.lineCap&&(d.lineCap=c.lineCap=b.lineCap),Ld&&!ia(d.lineDash,b.lineDash)&&c.setLineDash(d.lineDash=b.lineDash),d.lineJoin!=b.lineJoin&&(d.lineJoin=c.lineJoin=b.lineJoin),d.lineWidth!=b.lineWidth&&(d.lineWidth=c.lineWidth=b.lineWidth),d.miterLimit!=b.miterLimit&&(d.miterLimit=c.miterLimit=b.miterLimit),d.strokeStyle!=b.strokeStyle&&(d.strokeStyle=c.strokeStyle=b.strokeStyle)):(c.lineCap=b.lineCap,Ld&&c.setLineDash(b.lineDash),c.lineJoin=b.lineJoin,c.lineWidth=
b.lineWidth,c.miterLimit=b.miterLimit,c.strokeStyle=b.strokeStyle,a.S={lineCap:b.lineCap,lineDash:b.lineDash,lineJoin:b.lineJoin,lineWidth:b.lineWidth,miterLimit:b.miterLimit,strokeStyle:b.strokeStyle})}
k.Na=function(a,b){if(a){var c=a.b;this.a={fillStyle:Vc(c?c:Nh)}}else this.a=null;if(b){var c=b.a,d=b.i,e=b.f,f=b.g,g=b.l,h=b.c,l=b.j;this.b={lineCap:void 0!==d?d:"round",lineDash:e?e:Oh,lineDashOffset:f?f:0,lineJoin:void 0!==g?g:"round",lineWidth:this.I*(void 0!==h?h:1),miterLimit:void 0!==l?l:10,strokeStyle:Vc(c?c:Ph)}}else this.b=null};
k.Vb=function(a){if(a){var b=a.Hc(),c=a.Z(1),d=a.Pc(),e=a.jc();this.A=b[0];this.C=b[1];this.G=e[1];this.M=c;this.o=a.g;this.Y=d[0];this.eb=d[1];this.ea=a.o;this.ia=a.l;this.i=a.c;this.oa=a.v;this.qa=e[0]}else this.M=null};
k.Tb=function(a){if(a){var b=a.Ca();b?(b=b.b,this.g={fillStyle:Vc(b?b:Nh)}):this.g=null;var c=a.Da();if(c){var b=c.a,d=c.i,e=c.f,f=c.g,g=c.l,h=c.c,c=c.j;this.j={lineCap:void 0!==d?d:"round",lineDash:e?e:Oh,lineDashOffset:f?f:0,lineJoin:void 0!==g?g:"round",lineWidth:void 0!==h?h:1,miterLimit:void 0!==c?c:10,strokeStyle:Vc(b?b:Ph)}}else this.j=null;var b=a.a,d=a.f,e=a.c,f=a.j,g=a.i,h=a.b,c=a.Pa(),l=a.g;a=a.l;this.ta={font:void 0!==b?b:"10px sans-serif",textAlign:void 0!==l?l:"center",textBaseline:void 0!==
a?a:"middle"};this.Fa=void 0!==c?c:"";this.Zb=void 0!==d?this.I*d:0;this.Ja=void 0!==e?this.I*e:0;this.Ha=void 0!==f?f:!1;this.Oa=void 0!==g?g:0;this.l=this.I*(void 0!==h?h:1)}else this.Fa=""};function ci(a,b){Hh.call(this,0,b);this.f=Xc();this.b=this.f.canvas;this.b.style.width="100%";this.b.style.height="100%";this.b.style.display="block";this.b.className="ol-unselectable";a.insertBefore(this.b,a.childNodes[0]||null);this.a=!0;this.i=wh()}u(ci,Hh);
function di(a,b,c){var d=a.j,e=a.f;if(Ec(d,b)){var f=c.extent,g=c.pixelRatio,h=c.viewState.rotation,l=c.viewState,m=c.pixelRatio/l.resolution;a=Fh(a.i,a.b.width/2,a.b.height/2,m,-m,-l.rotation,-l.center[0],-l.center[1]);d.b(new Mh(b,new Sh(e,g,f,a,h),c,e,null))}}ci.prototype.T=function(){return"canvas"};
ci.prototype.vg=function(a){if(a){var b=this.f,c=a.pixelRatio,d=Math.round(a.size[0]*c),e=Math.round(a.size[1]*c);this.b.width!=d||this.b.height!=e?(this.b.width=d,this.b.height=e):b.clearRect(0,0,d,e);c=a.viewState.rotation;Ih(a);di(this,"precompose",a);var f=a.layerStatesArray;ja(f);c&&(b.save(),Qh(b,c,d/2,e/2));var d=a.viewState.resolution,g,h,l,e=0;for(g=f.length;e<g;++e)l=f[e],h=l.layer,h=Kh(this,h),sh(l,d)&&"ready"==l.Ui&&h.qd(a,l)&&h.I(a,l,b);c&&b.restore();di(this,"postcompose",a);this.a||
(this.b.style.display="",this.a=!0);Lh(this,a);a.postRenderFunctions.push(Jh)}else this.a&&(this.b.style.display="none",this.a=!1)};ci.prototype.Yh=function(a,b,c,d,e,f){var g,h=b.viewState.resolution,l=b.layerStatesArray,m=l.length;a=Bh(b.pixelToCoordinateTransform,a.slice());for(--m;0<=m;--m){g=l[m];var p=g.layer;if(sh(g,h)&&e.call(f,p)&&(g=Kh(this,p).v(a,b,c,d)))return g}};var ei=["Polygon","Circle","LineString","Image","Text"];function fi(){};function gi(a){this.b=a};function hi(a){this.b=a}u(hi,gi);hi.prototype.T=function(){return 35632};function ii(a){this.b=a}u(ii,gi);ii.prototype.T=function(){return 35633};function ji(){this.b="precision mediump float;varying vec2 a;varying vec2 b;varying float c;varying float d;uniform float m;uniform vec4 n;uniform vec4 o;uniform vec2 p;void main(void){vec2 windowCenter=vec2((a.x+1.0)/2.0*p.x*d,(a.y+1.0)/2.0*p.y*d);vec2 windowOffset=vec2((b.x+1.0)/2.0*p.x*d,(b.y+1.0)/2.0*p.y*d);float radius=length(windowCenter-windowOffset);float dist=length(windowCenter-gl_FragCoord.xy);if(dist>radius+c){if(o.a==0.0){gl_FragColor=n;}else{gl_FragColor=o;}gl_FragColor.a=gl_FragColor.a-(dist-(radius+c));}else if(n.a==0.0){gl_FragColor=o;if(dist<radius-c){gl_FragColor.a=gl_FragColor.a-(radius-c-dist);}} else{gl_FragColor=n;float strokeDist=radius-c;float antialias=2.0*d;if(dist>strokeDist){gl_FragColor=o;}else if(dist>=strokeDist-antialias){float step=smoothstep(strokeDist-antialias,strokeDist,dist);gl_FragColor=mix(n,o,step);}} gl_FragColor.a=gl_FragColor.a*m;if(gl_FragColor.a<=0.0){discard;}}"}
u(ji,hi);var ki=new ji;
function li(){this.b="varying vec2 a;varying vec2 b;varying float c;varying float d;attribute vec2 e;attribute float f;attribute float g;uniform mat4 h;uniform mat4 i;uniform mat4 j;uniform float k;uniform float l;void main(void){mat4 offsetMatrix=i*j;a=vec4(h*vec4(e,0.0,1.0)).xy;d=l;float lineWidth=k*l;c=lineWidth/2.0;if(lineWidth==0.0){lineWidth=2.0*l;}vec2 offset;float radius=g+3.0*l;if(f==0.0){offset=vec2(-1.0,1.0);}else if(f==1.0){offset=vec2(-1.0,-1.0);}else if(f==2.0){offset=vec2(1.0,-1.0);}else{offset=vec2(1.0,1.0);}gl_Position=h*vec4(e+offset*radius,0.0,1.0)+offsetMatrix*vec4(offset*lineWidth,0.0,0.0);b=vec4(h*vec4(e.x+g,e.y,0.0,1.0)).xy;if(distance(a,b)>20000.0){gl_Position=vec4(a,0.0,1.0);}}"}
u(li,ii);var mi=new li;function ni(a,b){this.G=a.getUniformLocation(b,"n");this.qa=a.getUniformLocation(b,"k");this.c=a.getUniformLocation(b,"j");this.i=a.getUniformLocation(b,"i");this.a=a.getUniformLocation(b,"m");this.ta=a.getUniformLocation(b,"l");this.f=a.getUniformLocation(b,"h");this.R=a.getUniformLocation(b,"p");this.S=a.getUniformLocation(b,"o");this.l=a.getAttribLocation(b,"f");this.b=a.getAttribLocation(b,"e");this.u=a.getAttribLocation(b,"g")};function oi(){return[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}function pi(a,b){a[0]=b[0];a[1]=b[1];a[4]=b[2];a[5]=b[3];a[12]=b[4];a[13]=b[5];return a};function qi(a,b){this.origin=jb(b);this.mb=wh();this.Oa=wh();this.lb=wh();this.Ja=oi();this.b=[];this.o=null;this.f=[];this.g=[];this.a=[];this.v=null;this.l=void 0}u(qi,Rh);
qi.prototype.i=function(a,b,c,d,e,f,g,h,l,m,p){var n=a.b,q,r,v,x,y,z,A,V;this.l&&(q=n.isEnabled(n.STENCIL_TEST),r=n.getParameter(n.STENCIL_FUNC),v=n.getParameter(n.STENCIL_VALUE_MASK),x=n.getParameter(n.STENCIL_REF),y=n.getParameter(n.STENCIL_WRITEMASK),z=n.getParameter(n.STENCIL_FAIL),A=n.getParameter(n.STENCIL_PASS_DEPTH_PASS),V=n.getParameter(n.STENCIL_PASS_DEPTH_FAIL),n.enable(n.STENCIL_TEST),n.clear(n.STENCIL_BUFFER_BIT),n.stencilMask(255),n.stencilFunc(n.ALWAYS,1,255),n.stencilOp(n.KEEP,n.KEEP,
n.REPLACE),this.l.i(a,b,c,d,e,f,g,h,l,m,p),n.stencilMask(0),n.stencilFunc(n.NOTEQUAL,1,255));ri(a,34962,this.v);ri(a,34963,this.o);f=this.ff(n,a,e,f);var Pa=xh(this.mb);Dh(Pa,2/(c*e[0]),2/(c*e[1]));Ch(Pa,-d);Eh(Pa,-(b[0]-this.origin[0]),-(b[1]-this.origin[1]));b=xh(this.lb);Dh(b,2/e[0],2/e[1]);e=xh(this.Oa);d&&Ch(e,-d);n.uniformMatrix4fv(f.f,!1,pi(this.Ja,Pa));n.uniformMatrix4fv(f.i,!1,pi(this.Ja,b));n.uniformMatrix4fv(f.c,!1,pi(this.Ja,e));n.uniform1f(f.a,g);var ra;l?(m?a=this.qe(n,a,h,l,p):(n.clear(n.COLOR_BUFFER_BIT|
n.DEPTH_BUFFER_BIT),this.Md(n,a,h,!0),a=(a=l(null))?a:void 0),ra=a):this.Md(n,a,h,!1);this.gf(n,f);this.l&&(q||n.disable(n.STENCIL_TEST),n.clear(n.STENCIL_BUFFER_BIT),n.stencilFunc(r,x,v),n.stencilMask(y),n.stencilOp(z,V,A));return ra};function si(a,b,c,d){a.drawElements(4,d-c,b.g?5125:5123,c*(b.g?4:2))};var ti=[0,0,0,1],ui=[],vi=[0,0,0,1];function wi(a,b,c,d,e,f){a=(c-a)*(f-b)-(e-a)*(d-b);return a<=xi&&a>=-xi?void 0:0<a}var xi=Number.EPSILON||2.220446049250313E-16;function yi(a){this.b=void 0!==a?a:[];this.a=zi}var zi=35044;function Ai(a,b){qi.call(this,0,b);this.I=null;this.j=[];this.u=[];this.A=0;this.c={fillColor:null,strokeColor:null,lineDash:null,lineDashOffset:void 0,lineWidth:void 0,s:!1}}u(Ai,qi);k=Ai.prototype;
k.$b=function(a,b){var c=a.Vd(),d=a.sa();if(c){this.f.push(this.b.length);this.g.push(b);this.c.s&&(this.u.push(this.b.length),this.c.s=!1);this.A=c;var c=a.ha(),c=ef(c,2,d,-this.origin[0],-this.origin[1]),e=this.a.length,f=this.b.length,g=e/4,h;for(h=0;2>h;h+=d)this.a[e++]=c[h],this.a[e++]=c[h+1],this.a[e++]=0,this.a[e++]=this.A,this.a[e++]=c[h],this.a[e++]=c[h+1],this.a[e++]=1,this.a[e++]=this.A,this.a[e++]=c[h],this.a[e++]=c[h+1],this.a[e++]=2,this.a[e++]=this.A,this.a[e++]=c[h],this.a[e++]=c[h+
1],this.a[e++]=3,this.a[e++]=this.A,this.b[f++]=g,this.b[f++]=g+1,this.b[f++]=g+2,this.b[f++]=g+2,this.b[f++]=g+3,this.b[f++]=g,g+=4}else this.c.s&&(this.j.pop(),this.j.length&&(d=this.j[this.j.length-1],this.c.fillColor=d[0],this.c.strokeColor=d[1],this.c.lineWidth=d[2],this.c.s=!1))};k.Bb=function(){this.v=new yi(this.a);this.o=new yi(this.b);this.f.push(this.b.length);!this.u.length&&0<this.j.length&&(this.j=[]);this.b=this.a=null};
k.Cb=function(a){var b=this.v,c=this.o;return function(){Bi(a,b);Bi(a,c)}};k.ff=function(a,b,c,d){var e=Ci(b,ki,mi),f;this.I?f=this.I:this.I=f=new ni(a,e);b.Rc(e);a.enableVertexAttribArray(f.b);a.vertexAttribPointer(f.b,2,5126,!1,16,0);a.enableVertexAttribArray(f.l);a.vertexAttribPointer(f.l,1,5126,!1,16,8);a.enableVertexAttribArray(f.u);a.vertexAttribPointer(f.u,1,5126,!1,16,12);a.uniform2fv(f.R,c);a.uniform1f(f.ta,d);return f};
k.gf=function(a,b){a.disableVertexAttribArray(b.b);a.disableVertexAttribArray(b.l);a.disableVertexAttribArray(b.u)};
k.Md=function(a,b,c){if(sb(c)){var d,e,f;e=this.f[this.f.length-1];for(c=this.u.length-1;0<=c;--c)d=this.u[c],f=this.j[c],a.uniform4fv(this.I.G,f[0]),Di(this,a,f[1],f[2]),si(a,b,d,e),e=d}else{var g,h,l,m;l=this.f.length-2;f=e=this.f[l+1];for(d=this.u.length-1;0<=d;--d){g=this.j[d];a.uniform4fv(this.I.G,g[0]);Di(this,a,g[1],g[2]);for(g=this.u[d];0<=l&&this.f[l]>=g;)m=this.f[l],h=this.g[l],h=w(h).toString(),c[h]&&(e!==f&&si(a,b,e,f),f=m),l--,e=m;e!==f&&si(a,b,e,f);e=f=g}}};
k.qe=function(a,b,c,d,e){var f,g,h,l,m,p,n;n=this.f.length-2;h=this.f[n+1];for(f=this.u.length-1;0<=f;--f)for(g=this.j[f],a.uniform4fv(this.I.G,g[0]),Di(this,a,g[1],g[2]),l=this.u[f];0<=n&&this.f[n]>=l;){g=this.f[n];m=this.g[n];p=w(m).toString();if(void 0===c[p]&&m.U()&&(void 0===e||mb(e,m.U().D()))&&(a.clear(a.COLOR_BUFFER_BIT|a.DEPTH_BUFFER_BIT),si(a,b,g,h),h=d(m)))return h;n--;h=g}};function Di(a,b,c,d){b.uniform4fv(a.I.S,c);b.uniform1f(a.I.qa,d)}
k.Na=function(a,b){var c,d;b?(c=b.f,this.c.lineDash=c?c:ui,c=b.g,this.c.lineDashOffset=c?c:0,c=b.a,c instanceof CanvasGradient||c instanceof CanvasPattern?c=vi:c=Qc(c).map(function(a,b){return 3!=b?a/255:a})||vi,d=b.c,d=void 0!==d?d:1):(c=[0,0,0,0],d=0);var e=a?a.b:[0,0,0,0];e instanceof CanvasGradient||e instanceof CanvasPattern?e=ti:e=Qc(e).map(function(a,b){return 3!=b?a/255:a})||ti;this.c.strokeColor&&ia(this.c.strokeColor,c)&&this.c.fillColor&&ia(this.c.fillColor,e)&&this.c.lineWidth===d||(this.c.s=
!0,this.c.fillColor=e,this.c.strokeColor=c,this.c.lineWidth=d,this.j.push([e,c,d]))};function Ei(){this.b="precision mediump float;varying vec2 a;varying float b;uniform float k;uniform sampler2D l;void main(void){vec4 texColor=texture2D(l,a);gl_FragColor.rgb=texColor.rgb;float alpha=texColor.a*b*k;if(alpha==0.0){discard;}gl_FragColor.a=alpha;}"}u(Ei,hi);var Fi=new Ei;
function Gi(){this.b="varying vec2 a;varying float b;attribute vec2 c;attribute vec2 d;attribute vec2 e;attribute float f;attribute float g;uniform mat4 h;uniform mat4 i;uniform mat4 j;void main(void){mat4 offsetMatrix=i;if(g==1.0){offsetMatrix=i*j;}vec4 offsets=offsetMatrix*vec4(e,0.0,0.0);gl_Position=h*vec4(c,0.0,1.0)+offsets;a=d;b=f;}"}u(Gi,ii);var Hi=new Gi;
function Ii(a,b){this.c=a.getUniformLocation(b,"j");this.i=a.getUniformLocation(b,"i");this.a=a.getUniformLocation(b,"k");this.f=a.getUniformLocation(b,"h");this.v=a.getAttribLocation(b,"e");this.I=a.getAttribLocation(b,"f");this.b=a.getAttribLocation(b,"c");this.A=a.getAttribLocation(b,"g");this.C=a.getAttribLocation(b,"d")};function Ji(a,b){this.l=a;this.b=b;this.a={};this.c={};this.f={};this.o=this.v=this.i=this.j=null;(this.g=ea(ca,"OES_element_index_uint"))&&b.getExtension("OES_element_index_uint");B(this.l,"webglcontextlost",this.mo,this);B(this.l,"webglcontextrestored",this.no,this)}u(Ji,zc);
function ri(a,b,c){var d=a.b,e=c.b,f=String(w(c));if(f in a.a)d.bindBuffer(b,a.a[f].buffer);else{var g=d.createBuffer();d.bindBuffer(b,g);var h;34962==b?h=new Float32Array(e):34963==b&&(h=a.g?new Uint32Array(e):new Uint16Array(e));d.bufferData(b,h,c.a);a.a[f]={lc:c,buffer:g}}}function Bi(a,b){var c=a.b,d=String(w(b)),e=a.a[d];c.isContextLost()||c.deleteBuffer(e.buffer);delete a.a[d]}k=Ji.prototype;
k.ra=function(){yc(this.l);var a=this.b;if(!a.isContextLost()){for(var b in this.a)a.deleteBuffer(this.a[b].buffer);for(b in this.f)a.deleteProgram(this.f[b]);for(b in this.c)a.deleteShader(this.c[b]);a.deleteFramebuffer(this.i);a.deleteRenderbuffer(this.o);a.deleteTexture(this.v)}};k.lo=function(){return this.b};
function Ki(a){if(!a.i){var b=a.b,c=b.createFramebuffer();b.bindFramebuffer(b.FRAMEBUFFER,c);var d=Li(b,1,1),e=b.createRenderbuffer();b.bindRenderbuffer(b.RENDERBUFFER,e);b.renderbufferStorage(b.RENDERBUFFER,b.DEPTH_COMPONENT16,1,1);b.framebufferTexture2D(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_2D,d,0);b.framebufferRenderbuffer(b.FRAMEBUFFER,b.DEPTH_ATTACHMENT,b.RENDERBUFFER,e);b.bindTexture(b.TEXTURE_2D,null);b.bindRenderbuffer(b.RENDERBUFFER,null);b.bindFramebuffer(b.FRAMEBUFFER,null);a.i=c;
a.v=d;a.o=e}return a.i}function Mi(a,b){var c=String(w(b));if(c in a.c)return a.c[c];var d=a.b,e=d.createShader(b.T());d.shaderSource(e,b.b);d.compileShader(e);return a.c[c]=e}function Ci(a,b,c){var d=w(b)+"/"+w(c);if(d in a.f)return a.f[d];var e=a.b,f=e.createProgram();e.attachShader(f,Mi(a,b));e.attachShader(f,Mi(a,c));e.linkProgram(f);return a.f[d]=f}k.mo=function(){qb(this.a);qb(this.c);qb(this.f);this.o=this.v=this.i=this.j=null};k.no=function(){};
k.Rc=function(a){if(a==this.j)return!1;this.b.useProgram(a);this.j=a;return!0};function Ni(a,b,c){var d=a.createTexture();a.bindTexture(a.TEXTURE_2D,d);a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MAG_FILTER,a.LINEAR);a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MIN_FILTER,a.LINEAR);void 0!==b&&a.texParameteri(3553,10242,b);void 0!==c&&a.texParameteri(3553,10243,c);return d}function Li(a,b,c){var d=Ni(a,void 0,void 0);a.texImage2D(a.TEXTURE_2D,0,a.RGBA,b,c,0,a.RGBA,a.UNSIGNED_BYTE,null);return d}
function Oi(a,b){var c=Ni(a,33071,33071);a.texImage2D(a.TEXTURE_2D,0,a.RGBA,a.RGBA,a.UNSIGNED_BYTE,b);return c};function Pi(a,b){qi.call(this,0,b);this.G=this.C=void 0;this.A=[];this.I=[];this.ta=void 0;this.j=[];this.c=[];this.S=this.R=void 0;this.qa=null;this.oa=this.ia=this.ea=this.eb=this.Y=this.$a=void 0;this.Ha=[];this.u=[];this.Zb=void 0}u(Pi,qi);k=Pi.prototype;k.Cb=function(a){var b=this.v,c=this.o,d=this.Ha,e=this.u,f=a.b;return function(){if(!f.isContextLost()){var g,h;g=0;for(h=d.length;g<h;++g)f.deleteTexture(d[g]);g=0;for(h=e.length;g<h;++g)f.deleteTexture(e[g])}Bi(a,b);Bi(a,c)}};
function Qi(a,b,c,d){var e=a.C,f=a.G,g=a.ta,h=a.R,l=a.S,m=a.$a,p=a.Y,n=a.eb,q=a.ea?1:0,r=-a.ia,v=a.oa,x=a.Zb,y=Math.cos(r),r=Math.sin(r),z=a.b.length,A=a.a.length,V,Pa,ra,La,C,Ma;for(V=0;V<c;V+=d)C=b[V]-a.origin[0],Ma=b[V+1]-a.origin[1],Pa=A/8,ra=-v*e,La=-v*(g-f),a.a[A++]=C,a.a[A++]=Ma,a.a[A++]=ra*y-La*r,a.a[A++]=ra*r+La*y,a.a[A++]=p/l,a.a[A++]=(n+g)/h,a.a[A++]=m,a.a[A++]=q,ra=v*(x-e),La=-v*(g-f),a.a[A++]=C,a.a[A++]=Ma,a.a[A++]=ra*y-La*r,a.a[A++]=ra*r+La*y,a.a[A++]=(p+x)/l,a.a[A++]=(n+g)/h,a.a[A++]=
m,a.a[A++]=q,ra=v*(x-e),La=v*f,a.a[A++]=C,a.a[A++]=Ma,a.a[A++]=ra*y-La*r,a.a[A++]=ra*r+La*y,a.a[A++]=(p+x)/l,a.a[A++]=n/h,a.a[A++]=m,a.a[A++]=q,ra=-v*e,La=v*f,a.a[A++]=C,a.a[A++]=Ma,a.a[A++]=ra*y-La*r,a.a[A++]=ra*r+La*y,a.a[A++]=p/l,a.a[A++]=n/h,a.a[A++]=m,a.a[A++]=q,a.b[z++]=Pa,a.b[z++]=Pa+1,a.b[z++]=Pa+2,a.b[z++]=Pa,a.b[z++]=Pa+2,a.b[z++]=Pa+3}k.oc=function(a,b){this.f.push(this.b.length);this.g.push(b);var c=a.ha();Qi(this,c,c.length,a.sa())};
k.qc=function(a,b){this.f.push(this.b.length);this.g.push(b);var c=a.ha();Qi(this,c,c.length,a.sa())};k.Bb=function(a){a=a.b;this.A.push(this.b.length);this.I.push(this.b.length);this.v=new yi(this.a);this.o=new yi(this.b);var b={};Ri(this.Ha,this.j,b,a);Ri(this.u,this.c,b,a);this.ta=this.G=this.C=void 0;this.c=this.j=null;this.S=this.R=void 0;this.b=null;this.oa=this.ia=this.ea=this.eb=this.Y=this.$a=void 0;this.a=null;this.Zb=void 0};
function Ri(a,b,c,d){var e,f,g,h=b.length;for(g=0;g<h;++g)e=b[g],f=w(e).toString(),f in c?e=c[f]:(e=Oi(d,e),c[f]=e),a[g]=e}
k.ff=function(a,b){var c=Ci(b,Fi,Hi),d;this.qa?d=this.qa:this.qa=d=new Ii(a,c);b.Rc(c);a.enableVertexAttribArray(d.b);a.vertexAttribPointer(d.b,2,5126,!1,32,0);a.enableVertexAttribArray(d.v);a.vertexAttribPointer(d.v,2,5126,!1,32,8);a.enableVertexAttribArray(d.C);a.vertexAttribPointer(d.C,2,5126,!1,32,16);a.enableVertexAttribArray(d.I);a.vertexAttribPointer(d.I,1,5126,!1,32,24);a.enableVertexAttribArray(d.A);a.vertexAttribPointer(d.A,1,5126,!1,32,28);return d};
k.gf=function(a,b){a.disableVertexAttribArray(b.b);a.disableVertexAttribArray(b.v);a.disableVertexAttribArray(b.C);a.disableVertexAttribArray(b.I);a.disableVertexAttribArray(b.A)};
k.Md=function(a,b,c,d){var e=d?this.u:this.Ha;d=d?this.I:this.A;if(sb(c)){var f,g;c=0;f=e.length;for(g=0;c<f;++c){a.bindTexture(3553,e[c]);var h=d[c];si(a,b,g,h);g=h}}else for(g=f=0,h=e.length;g<h;++g){a.bindTexture(3553,e[g]);for(var l=0<g?d[g-1]:0,m=d[g],p=l;f<this.f.length&&this.f[f]<=m;){var n=w(this.g[f]).toString();void 0!==c[n]?(p!==l&&si(a,b,p,l),l=p=f===this.f.length-1?m:this.f[f+1]):l=f===this.f.length-1?m:this.f[f+1];f++}p!==l&&si(a,b,p,l)}};
k.qe=function(a,b,c,d,e){var f,g,h,l,m,p,n=this.f.length-1;for(f=this.u.length-1;0<=f;--f)for(a.bindTexture(3553,this.u[f]),g=0<f?this.I[f-1]:0,l=this.I[f];0<=n&&this.f[n]>=g;){h=this.f[n];m=this.g[n];p=w(m).toString();if(void 0===c[p]&&m.U()&&(void 0===e||mb(e,m.U().D()))&&(a.clear(a.COLOR_BUFFER_BIT|a.DEPTH_BUFFER_BIT),si(a,b,h,l),l=d(m)))return l;l=h;n--}};
k.Vb=function(a){var b=a.Hc(),c=a.Z(1),d=a.ue(),e=a.cg(1),f=a.g,g=a.Pc(),h=a.o,l=a.l,m=a.jc();a=a.c;var p;this.j.length?(p=this.j[this.j.length-1],w(p)!=w(c)&&(this.A.push(this.b.length),this.j.push(c))):this.j.push(c);this.c.length?(p=this.c[this.c.length-1],w(p)!=w(e)&&(this.I.push(this.b.length),this.c.push(e))):this.c.push(e);this.C=b[0];this.G=b[1];this.ta=m[1];this.R=d[1];this.S=d[0];this.$a=f;this.Y=g[0];this.eb=g[1];this.ia=l;this.ea=h;this.oa=a;this.Zb=m[0]};function Si(a,b,c){var d=b-c;return a[0]===a[d]&&a[1]===a[d+1]&&3<(b-0)/c?!!kf(a,0,b,c):!1};function Ti(){this.b="precision mediump float;varying float a;varying vec2 b;varying float c;uniform float m;uniform vec4 n;uniform vec2 o;uniform float p;void main(void){if(a>0.0){vec2 windowCoords=vec2((b.x+1.0)/2.0*o.x*p,(b.y+1.0)/2.0*o.y*p);if(length(windowCoords-gl_FragCoord.xy)>c*p){discard;}} gl_FragColor=n;float alpha=n.a*m;if(alpha==0.0){discard;}gl_FragColor.a=alpha;}"}u(Ti,hi);var Ui=new Ti;
function Vi(){this.b="varying float a;varying vec2 b;varying float c;attribute vec2 d;attribute vec2 e;attribute vec2 f;attribute float g;uniform mat4 h;uniform mat4 i;uniform mat4 j;uniform float k;uniform float l;bool nearlyEquals(in float value,in float ref){float epsilon=0.000000000001;return value>=ref-epsilon&&value<=ref+epsilon;}void alongNormal(out vec2 offset,in vec2 nextP,in float turnDir,in float direction){vec2 dirVect=nextP-e;vec2 normal=normalize(vec2(-turnDir*dirVect.y,turnDir*dirVect.x));offset=k/2.0*normal*direction;}void miterUp(out vec2 offset,out float round,in bool isRound,in float direction){float halfWidth=k/2.0;vec2 tangent=normalize(normalize(f-e)+normalize(e-d));vec2 normal=vec2(-tangent.y,tangent.x);vec2 dirVect=f-e;vec2 tmpNormal=normalize(vec2(-dirVect.y,dirVect.x));float miterLength=abs(halfWidth/dot(normal,tmpNormal));offset=normal*direction*miterLength;round=0.0;if(isRound){round=1.0;}else if(miterLength>l+k){offset=halfWidth*tmpNormal*direction;}} bool miterDown(out vec2 offset,in vec4 projPos,in mat4 offsetMatrix,in float direction){bool degenerate=false;vec2 tangent=normalize(normalize(f-e)+normalize(e-d));vec2 normal=vec2(-tangent.y,tangent.x);vec2 dirVect=d-e;vec2 tmpNormal=normalize(vec2(-dirVect.y,dirVect.x));vec2 longOffset,shortOffset,longVertex;vec4 shortProjVertex;float halfWidth=k/2.0;if(length(f-e)>length(d-e)){longOffset=tmpNormal*direction*halfWidth;shortOffset=normalize(vec2(dirVect.y,-dirVect.x))*direction*halfWidth;longVertex=f;shortProjVertex=h*vec4(d,0.0,1.0);}else{shortOffset=tmpNormal*direction*halfWidth;longOffset=normalize(vec2(dirVect.y,-dirVect.x))*direction*halfWidth;longVertex=d;shortProjVertex=h*vec4(f,0.0,1.0);}vec4 p1=h*vec4(longVertex,0.0,1.0)+offsetMatrix*vec4(longOffset,0.0,0.0);vec4 p2=projPos+offsetMatrix*vec4(longOffset,0.0,0.0);vec4 p3=shortProjVertex+offsetMatrix*vec4(-shortOffset,0.0,0.0);vec4 p4=shortProjVertex+offsetMatrix*vec4(shortOffset,0.0,0.0);float denom=(p4.y-p3.y)*(p2.x-p1.x)-(p4.x-p3.x)*(p2.y-p1.y);float firstU=((p4.x-p3.x)*(p1.y-p3.y)-(p4.y-p3.y)*(p1.x-p3.x))/denom;float secondU=((p2.x-p1.x)*(p1.y-p3.y)-(p2.y-p1.y)*(p1.x-p3.x))/denom;float epsilon=0.000000000001;if(firstU>epsilon&&firstU<1.0-epsilon&&secondU>epsilon&&secondU<1.0-epsilon){shortProjVertex.x=p1.x+firstU*(p2.x-p1.x);shortProjVertex.y=p1.y+firstU*(p2.y-p1.y);offset=shortProjVertex.xy;degenerate=true;}else{float miterLength=abs(halfWidth/dot(normal,tmpNormal));offset=normal*direction*miterLength;}return degenerate;}void squareCap(out vec2 offset,out float round,in bool isRound,in vec2 nextP,in float turnDir,in float direction){round=0.0;vec2 dirVect=e-nextP;vec2 firstNormal=normalize(dirVect);vec2 secondNormal=vec2(turnDir*firstNormal.y*direction,-turnDir*firstNormal.x*direction);vec2 hypotenuse=normalize(firstNormal-secondNormal);vec2 normal=vec2(turnDir*hypotenuse.y*direction,-turnDir*hypotenuse.x*direction);float length=sqrt(c*c*2.0);offset=normal*length;if(isRound){round=1.0;}} void main(void){bool degenerate=false;float direction=float(sign(g));mat4 offsetMatrix=i*j;vec2 offset;vec4 projPos=h*vec4(e,0.0,1.0);bool round=nearlyEquals(mod(g,2.0),0.0);a=0.0;c=k/2.0;b=projPos.xy;if(nearlyEquals(mod(g,3.0),0.0)||nearlyEquals(mod(g,17.0),0.0)){alongNormal(offset,f,1.0,direction);}else if(nearlyEquals(mod(g,5.0),0.0)||nearlyEquals(mod(g,13.0),0.0)){alongNormal(offset,d,-1.0,direction);}else if(nearlyEquals(mod(g,23.0),0.0)){miterUp(offset,a,round,direction);}else if(nearlyEquals(mod(g,19.0),0.0)){degenerate=miterDown(offset,projPos,offsetMatrix,direction);}else if(nearlyEquals(mod(g,7.0),0.0)){squareCap(offset,a,round,f,1.0,direction);}else if(nearlyEquals(mod(g,11.0),0.0)){squareCap(offset,a,round,d,-1.0,direction);}if(!degenerate){vec4 offsets=offsetMatrix*vec4(offset,0.0,0.0);gl_Position=projPos+offsets;}else{gl_Position=vec4(offset,0.0,1.0);}}"}
u(Vi,ii);var Wi=new Vi;function Xi(a,b){this.G=a.getUniformLocation(b,"n");this.qa=a.getUniformLocation(b,"k");this.S=a.getUniformLocation(b,"l");this.c=a.getUniformLocation(b,"j");this.i=a.getUniformLocation(b,"i");this.a=a.getUniformLocation(b,"m");this.ta=a.getUniformLocation(b,"p");this.f=a.getUniformLocation(b,"h");this.R=a.getUniformLocation(b,"o");this.g=a.getAttribLocation(b,"g");this.j=a.getAttribLocation(b,"d");this.o=a.getAttribLocation(b,"f");this.b=a.getAttribLocation(b,"e")};function Yi(a,b){qi.call(this,0,b);this.I=null;this.u=[];this.j=[];this.c={strokeColor:null,lineCap:void 0,lineDash:null,lineDashOffset:void 0,lineJoin:void 0,lineWidth:void 0,miterLimit:void 0,s:!1}}u(Yi,qi);
function Zi(a,b,c,d){var e,f=a.a.length,g=a.b.length,h="bevel"===a.c.lineJoin?0:"miter"===a.c.lineJoin?1:2,l="butt"===a.c.lineCap?0:"square"===a.c.lineCap?1:2,m=Si(b,c,d),p,n,q,r=g,v=1,x,y,z;for(e=0;e<c;e+=d){q=f/7;x=y;y=z||[b[e],b[e+1]];if(e)if(e===c-d){m?z=p:(x=x||[0,0],f=$i(a,x,y,[0,0],v*aj*(l||1),f),f=$i(a,x,y,[0,0],-v*aj*(l||1),f),a.b[g++]=q,a.b[g++]=r-1,a.b[g++]=r,a.b[g++]=r,a.b[g++]=q+1,a.b[g++]=q,l&&(f=$i(a,x,y,[0,0],v*bj*l,f),f=$i(a,x,y,[0,0],-v*bj*l,f),a.b[g++]=q+2,a.b[g++]=q,a.b[g++]=q+
1,a.b[g++]=q+1,a.b[g++]=q+3,a.b[g++]=q+2));break}else z=[b[e+d],b[e+d+1]];else{z=[b[e+d],b[e+d+1]];if(c-0===2*d&&ia(y,z))break;if(m)x=[b[c-2*d],b[c-2*d+1]],p=z;else{l&&(f=$i(a,[0,0],y,z,v*cj*l,f),f=$i(a,[0,0],y,z,-v*cj*l,f),a.b[g++]=q+2,a.b[g++]=q,a.b[g++]=q+1,a.b[g++]=q+1,a.b[g++]=q+3,a.b[g++]=q+2);f=$i(a,[0,0],y,z,v*dj*(l||1),f);f=$i(a,[0,0],y,z,-v*dj*(l||1),f);r=f/7-1;continue}}n=wi(x[0],x[1],y[0],y[1],z[0],z[1])?-1:1;f=$i(a,x,y,z,n*ej*(h||1),f);f=$i(a,x,y,z,n*fj*(h||1),f);f=$i(a,x,y,z,-n*gj*(h||
1),f);0<e&&(a.b[g++]=q,a.b[g++]=r-1,a.b[g++]=r,a.b[g++]=q+2,a.b[g++]=q,a.b[g++]=0<v*n?r:r-1);a.b[g++]=q;a.b[g++]=q+2;a.b[g++]=q+1;r=q+2;v=n;h&&(f=$i(a,x,y,z,n*hj*h,f),a.b[g++]=q+1,a.b[g++]=q+3,a.b[g++]=q)}m&&(q=q||f/7,n=Hf([x[0],x[1],y[0],y[1],z[0],z[1]],0,6,2)?1:-1,f=$i(a,x,y,z,n*ej*(h||1),f),$i(a,x,y,z,-n*gj*(h||1),f),a.b[g++]=q,a.b[g++]=r-1,a.b[g++]=r,a.b[g++]=q+1,a.b[g++]=q,a.b[g++]=0<v*n?r:r-1)}
function $i(a,b,c,d,e,f){a.a[f++]=b[0];a.a[f++]=b[1];a.a[f++]=c[0];a.a[f++]=c[1];a.a[f++]=d[0];a.a[f++]=d[1];a.a[f++]=e;return f}function ij(a,b,c){b-=0;return b<2*c?!1:b===2*c?!ia([a[0],a[1]],[a[0+c],a[c+1]]):!0}k=Yi.prototype;k.Qb=function(a,b){var c=a.ha(),d=a.sa();ij(c,c.length,d)&&(c=ef(c,c.length,d,-this.origin[0],-this.origin[1]),this.c.s&&(this.j.push(this.b.length),this.c.s=!1),this.f.push(this.b.length),this.g.push(b),Zi(this,c,c.length,d))};
k.nc=function(a,b){var c=this.b.length,d=a.hd(),e,f;e=0;for(f=d.length;e<f;++e){var g=d[e].ha(),h=d[e].sa();ij(g,g.length,h)&&(g=ef(g,g.length,h,-this.origin[0],-this.origin[1]),Zi(this,g,g.length,h))}this.b.length>c&&(this.f.push(c),this.g.push(b),this.c.s&&(this.j.push(c),this.c.s=!1))};
function jj(a,b,c,d){Si(b,b.length,d)||(b.push(b[0]),b.push(b[1]));Zi(a,b,b.length,d);if(c.length){var e;b=0;for(e=c.length;b<e;++b)Si(c[b],c[b].length,d)||(c[b].push(c[b][0]),c[b].push(c[b][1])),Zi(a,c[b],c[b].length,d)}}function kj(a,b,c){c=void 0===c?a.b.length:c;a.f.push(c);a.g.push(b);a.c.s&&(a.j.push(c),a.c.s=!1)}k.Bb=function(){this.v=new yi(this.a);this.o=new yi(this.b);this.f.push(this.b.length);!this.j.length&&0<this.u.length&&(this.u=[]);this.b=this.a=null};
k.Cb=function(a){var b=this.v,c=this.o;return function(){Bi(a,b);Bi(a,c)}};k.ff=function(a,b,c,d){var e=Ci(b,Ui,Wi),f;this.I?f=this.I:this.I=f=new Xi(a,e);b.Rc(e);a.enableVertexAttribArray(f.j);a.vertexAttribPointer(f.j,2,5126,!1,28,0);a.enableVertexAttribArray(f.b);a.vertexAttribPointer(f.b,2,5126,!1,28,8);a.enableVertexAttribArray(f.o);a.vertexAttribPointer(f.o,2,5126,!1,28,16);a.enableVertexAttribArray(f.g);a.vertexAttribPointer(f.g,1,5126,!1,28,24);a.uniform2fv(f.R,c);a.uniform1f(f.ta,d);return f};
k.gf=function(a,b){a.disableVertexAttribArray(b.j);a.disableVertexAttribArray(b.b);a.disableVertexAttribArray(b.o);a.disableVertexAttribArray(b.g)};
k.Md=function(a,b,c,d){var e=a.getParameter(a.DEPTH_FUNC),f=a.getParameter(a.DEPTH_WRITEMASK);d||(a.enable(a.DEPTH_TEST),a.depthMask(!0),a.depthFunc(a.NOTEQUAL));if(sb(c)){var g,h,l;h=this.f[this.f.length-1];for(c=this.j.length-1;0<=c;--c)g=this.j[c],l=this.u[c],lj(this,a,l[0],l[1],l[2]),si(a,b,g,h),a.clear(a.DEPTH_BUFFER_BIT),h=g}else{var m,p,n,q;n=this.f.length-2;l=h=this.f[n+1];for(g=this.j.length-1;0<=g;--g){m=this.u[g];lj(this,a,m[0],m[1],m[2]);for(m=this.j[g];0<=n&&this.f[n]>=m;)q=this.f[n],
p=this.g[n],p=w(p).toString(),c[p]&&(h!==l&&(si(a,b,h,l),a.clear(a.DEPTH_BUFFER_BIT)),l=q),n--,h=q;h!==l&&(si(a,b,h,l),a.clear(a.DEPTH_BUFFER_BIT));h=l=m}}d||(a.disable(a.DEPTH_TEST),a.clear(a.DEPTH_BUFFER_BIT),a.depthMask(f),a.depthFunc(e))};
k.qe=function(a,b,c,d,e){var f,g,h,l,m,p,n;n=this.f.length-2;h=this.f[n+1];for(f=this.j.length-1;0<=f;--f)for(g=this.u[f],lj(this,a,g[0],g[1],g[2]),l=this.j[f];0<=n&&this.f[n]>=l;){g=this.f[n];m=this.g[n];p=w(m).toString();if(void 0===c[p]&&m.U()&&(void 0===e||mb(e,m.U().D()))&&(a.clear(a.COLOR_BUFFER_BIT|a.DEPTH_BUFFER_BIT),si(a,b,g,h),h=d(m)))return h;n--;h=g}};function lj(a,b,c,d,e){b.uniform4fv(a.I.G,c);b.uniform1f(a.I.qa,d);b.uniform1f(a.I.S,e)}
k.Na=function(a,b){var c=b.i;this.c.lineCap=void 0!==c?c:"round";c=b.f;this.c.lineDash=c?c:ui;c=b.g;this.c.lineDashOffset=c?c:0;c=b.l;this.c.lineJoin=void 0!==c?c:"round";c=b.a;c instanceof CanvasGradient||c instanceof CanvasPattern?c=vi:c=Qc(c).map(function(a,b){return 3!=b?a/255:a})||vi;var d=b.c,d=void 0!==d?d:1,e=b.j,e=void 0!==e?e:10;this.c.strokeColor&&ia(this.c.strokeColor,c)&&this.c.lineWidth===d&&this.c.miterLimit===e||(this.c.s=!0,this.c.strokeColor=c,this.c.lineWidth=d,this.c.miterLimit=
e,this.u.push([c,d,e]))};var dj=3,aj=5,cj=7,bj=11,ej=13,fj=17,gj=19,hj=23;function mj(){this.b="precision mediump float;uniform vec4 e;uniform float f;void main(void){gl_FragColor=e;float alpha=e.a*f;if(alpha==0.0){discard;}gl_FragColor.a=alpha;}"}u(mj,hi);var nj=new mj;function oj(){this.b="attribute vec2 a;uniform mat4 b;uniform mat4 c;uniform mat4 d;void main(void){gl_Position=b*vec4(a,0.0,1.0);}"}u(oj,ii);var pj=new oj;
function qj(a,b){this.G=a.getUniformLocation(b,"e");this.c=a.getUniformLocation(b,"d");this.i=a.getUniformLocation(b,"c");this.a=a.getUniformLocation(b,"f");this.f=a.getUniformLocation(b,"b");this.b=a.getAttribLocation(b,"a")};function rj(a){a=a||{};this.a=void 0!==a.color?a.color:null;this.i=a.lineCap;this.f=void 0!==a.lineDash?a.lineDash:null;this.g=a.lineDashOffset;this.l=a.lineJoin;this.j=a.miterLimit;this.c=a.width;this.b=void 0}k=rj.prototype;k.clone=function(){var a=this.a;return new rj({color:a&&a.slice?a.slice():a||void 0,lineCap:this.i,lineDash:this.f?this.f.slice():void 0,lineDashOffset:this.g,lineJoin:this.l,miterLimit:this.j,width:this.c})};k.ao=function(){return this.a};k.Ak=function(){return this.i};
k.bo=function(){return this.f};k.Bk=function(){return this.g};k.Ck=function(){return this.l};k.Hk=function(){return this.j};k.co=function(){return this.c};k.eo=function(a){this.a=a;this.b=void 0};k.qp=function(a){this.i=a;this.b=void 0};k.setLineDash=function(a){this.f=a;this.b=void 0};k.rp=function(a){this.g=a;this.b=void 0};k.sp=function(a){this.l=a;this.b=void 0};k.tp=function(a){this.j=a;this.b=void 0};k.wp=function(a){this.c=a;this.b=void 0};function sj(a){this.b=this.a=this.f=void 0;this.i=void 0===a?!0:a;this.c=0}function tj(a){var b=a.b;if(b){var c=b.next,d=b.ub;c&&(c.ub=d);d&&(d.next=c);a.b=c||d;a.f===a.a?(a.b=void 0,a.f=void 0,a.a=void 0):a.f===b?a.f=a.b:a.a===b&&(a.a=d?a.b.ub:a.b);a.c--}}function uj(a){a.b=a.f;if(a.b)return a.b.data}function vj(a){if(a.b&&a.b.next)return a.b=a.b.next,a.b.data}function wj(a){if(a.b&&a.b.next)return a.b.next.data}function xj(a){if(a.b&&a.b.ub)return a.b=a.b.ub,a.b.data}
function yj(a){if(a.b&&a.b.ub)return a.b.ub.data}function zj(a){if(a.b)return a.b.data}sj.prototype.concat=function(a){if(a.b){if(this.b){var b=this.b.next;this.b.next=a.f;a.f.ub=this.b;b.ub=a.a;a.a.next=b;this.c+=a.c}else this.b=a.b,this.f=a.f,this.a=a.a,this.c=a.c;a.b=void 0;a.f=void 0;a.a=void 0;a.c=0}};var Aj,Bj,Cj,Dj;
(function(){var a={},b={ma:a};(function(c){if("object"===typeof a&&"undefined"!==typeof b)b.ma=c();else{var d;"undefined"!==typeof window?d=window:"undefined"!==typeof global?d=global:"undefined"!==typeof self?d=self:d=this;d.cq=c()}})(function(){return function d(a,b,g){function e(h,l){if(!b[h]){if(!a[h]){var m="function"==typeof require&&require;if(!l&&m)return m(h,!0);if(f)return f(h,!0);m=Error("Cannot find module '"+h+"'");throw m.code="MODULE_NOT_FOUND",m;}m=b[h]={ma:{}};a[h][0].call(m.ma,function(b){var d=
a[h][1][b];return e(d?d:b)},m,m.ma,d,a,b,g)}return b[h].ma}for(var f="function"==typeof require&&require,m=0;m<g.length;m++)e(g[m]);return e}({1:[function(a,b){function d(a,b,f,g,q){f=f||0;g=g||a.length-1;for(q=q||h;g>f;){if(600<g-f){var l=g-f+1,m=b-f+1,p=Math.log(l),n=.5*Math.exp(2*p/3),p=.5*Math.sqrt(p*n*(l-n)/l)*(0>m-l/2?-1:1);d(a,b,Math.max(f,Math.floor(b-m*n/l+p)),Math.min(g,Math.floor(b+(l-m)*n/l+p)),q)}l=a[b];m=f;n=g;e(a,f,b);for(0<q(a[g],l)&&e(a,f,g);m<n;){e(a,m,n);m++;for(n--;0>q(a[m],l);)m++;
for(;0<q(a[n],l);)n--}0===q(a[f],l)?e(a,f,n):(n++,e(a,n,g));n<=b&&(f=n+1);b<=n&&(g=n-1)}}function e(a,b,d){var e=a[b];a[b]=a[d];a[d]=e}function h(a,b){return a<b?-1:a>b?1:0}b.ma=d},{}],2:[function(a,b){function d(a,b){if(!(this instanceof d))return new d(a,b);this.wf=Math.max(4,a||9);this.Pg=Math.max(2,Math.ceil(.4*this.wf));b&&this.Lj(b);this.clear()}function e(a,b){h(a,0,a.children.length,b,a)}function h(a,b,d,e,f){f||(f=x(null));f.da=Infinity;f.fa=Infinity;f.ba=-Infinity;f.ja=-Infinity;for(var g;b<
d;b++)g=a.children[b],l(f,a.hb?e(g):g);return f}function l(a,b){a.da=Math.min(a.da,b.da);a.fa=Math.min(a.fa,b.fa);a.ba=Math.max(a.ba,b.ba);a.ja=Math.max(a.ja,b.ja)}function m(a,b){return a.da-b.da}function p(a,b){return a.fa-b.fa}function n(a){return(a.ba-a.da)*(a.ja-a.fa)}function q(a){return a.ba-a.da+(a.ja-a.fa)}function r(a,b){return a.da<=b.da&&a.fa<=b.fa&&b.ba<=a.ba&&b.ja<=a.ja}function v(a,b){return b.da<=a.ba&&b.fa<=a.ja&&b.ba>=a.da&&b.ja>=a.fa}function x(a){return{children:a,height:1,hb:!0,
da:Infinity,fa:Infinity,ba:-Infinity,ja:-Infinity}}function y(a,b,d,e,f){for(var g=[b,d],h;g.length;)d=g.pop(),b=g.pop(),d-b<=e||(h=b+Math.ceil((d-b)/e/2)*e,z(a,h,b,d,f),g.push(b,h,h,d))}b.ma=d;var z=a("quickselect");d.prototype={all:function(){return this.Kg(this.data,[])},search:function(a){var b=this.data,d=[],e=this.yb;if(!v(a,b))return d;for(var f=[],g,h,l,m;b;){g=0;for(h=b.children.length;g<h;g++)l=b.children[g],m=b.hb?e(l):l,v(a,m)&&(b.hb?d.push(l):r(a,m)?this.Kg(l,d):f.push(l));b=f.pop()}return d},
load:function(a){if(!a||!a.length)return this;if(a.length<this.Pg){for(var b=0,d=a.length;b<d;b++)this.Ea(a[b]);return this}a=this.Mg(a.slice(),0,a.length-1,0);this.data.children.length?this.data.height===a.height?this.Rg(this.data,a):(this.data.height<a.height&&(b=this.data,this.data=a,a=b),this.Og(a,this.data.height-a.height-1,!0)):this.data=a;return this},Ea:function(a){a&&this.Og(a,this.data.height-1);return this},clear:function(){this.data=x([]);return this},remove:function(a,b){if(!a)return this;
for(var d=this.data,e=this.yb(a),f=[],g=[],h,l,m,n;d||f.length;){d||(d=f.pop(),l=f[f.length-1],h=g.pop(),n=!0);if(d.hb){a:{m=a;var p=d.children,q=b;if(q){for(var v=0;v<p.length;v++)if(q(m,p[v])){m=v;break a}m=-1}else m=p.indexOf(m)}if(-1!==m){d.children.splice(m,1);f.push(d);this.Jj(f);break}}n||d.hb||!r(d,e)?l?(h++,d=l.children[h],n=!1):d=null:(f.push(d),g.push(h),h=0,l=d,d=d.children[0])}return this},yb:function(a){return a},Af:m,Bf:p,toJSON:function(){return this.data},Kg:function(a,b){for(var d=
[];a;)a.hb?b.push.apply(b,a.children):d.push.apply(d,a.children),a=d.pop();return b},Mg:function(a,b,d,f){var g=d-b+1,h=this.wf,l;if(g<=h)return l=x(a.slice(b,d+1)),e(l,this.yb),l;f||(f=Math.ceil(Math.log(g)/Math.log(h)),h=Math.ceil(g/Math.pow(h,f-1)));l=x([]);l.hb=!1;l.height=f;var g=Math.ceil(g/h),h=g*Math.ceil(Math.sqrt(h)),m,n,p;for(y(a,b,d,h,this.Af);b<=d;b+=h)for(n=Math.min(b+h-1,d),y(a,b,n,g,this.Bf),m=b;m<=n;m+=g)p=Math.min(m+g-1,n),l.children.push(this.Mg(a,m,p,f-1));e(l,this.yb);return l},
Ij:function(a,b,d,e){for(var f,g,h,l,m,p,q,r;;){e.push(b);if(b.hb||e.length-1===d)break;q=r=Infinity;f=0;for(g=b.children.length;f<g;f++)h=b.children[f],m=n(h),p=(Math.max(h.ba,a.ba)-Math.min(h.da,a.da))*(Math.max(h.ja,a.ja)-Math.min(h.fa,a.fa))-m,p<r?(r=p,q=m<q?m:q,l=h):p===r&&m<q&&(q=m,l=h);b=l||b.children[0]}return b},Og:function(a,b,d){var e=this.yb;d=d?a:e(a);var e=[],f=this.Ij(d,this.data,b,e);f.children.push(a);for(l(f,d);0<=b;)if(e[b].children.length>this.wf)this.Qj(e,b),b--;else break;this.Fj(d,
e,b)},Qj:function(a,b){var d=a[b],f=d.children.length,g=this.Pg;this.Gj(d,g,f);f=this.Hj(d,g,f);f=x(d.children.splice(f,d.children.length-f));f.height=d.height;f.hb=d.hb;e(d,this.yb);e(f,this.yb);b?a[b-1].children.push(f):this.Rg(d,f)},Rg:function(a,b){this.data=x([a,b]);this.data.height=a.height+1;this.data.hb=!1;e(this.data,this.yb)},Hj:function(a,b,d){var e,f,g,l,m,p,q;m=p=Infinity;for(e=b;e<=d-b;e++)f=h(a,0,e,this.yb),g=h(a,e,d,this.yb),l=Math.max(0,Math.min(f.ba,g.ba)-Math.max(f.da,g.da))*Math.max(0,
Math.min(f.ja,g.ja)-Math.max(f.fa,g.fa)),f=n(f)+n(g),l<m?(m=l,q=e,p=f<p?f:p):l===m&&f<p&&(p=f,q=e);return q},Gj:function(a,b,d){var e=a.hb?this.Af:m,f=a.hb?this.Bf:p,g=this.Lg(a,b,d,e);b=this.Lg(a,b,d,f);g<b&&a.children.sort(e)},Lg:function(a,b,d,e){a.children.sort(e);e=this.yb;var f=h(a,0,b,e),g=h(a,d-b,d,e),m=q(f)+q(g),p,n;for(p=b;p<d-b;p++)n=a.children[p],l(f,a.hb?e(n):n),m+=q(f);for(p=d-b-1;p>=b;p--)n=a.children[p],l(g,a.hb?e(n):n),m+=q(g);return m},Fj:function(a,b,d){for(;0<=d;d--)l(b[d],a)},
Jj:function(a){for(var b=a.length-1,d;0<=b;b--)0===a[b].children.length?0<b?(d=a[b-1].children,d.splice(d.indexOf(a[b]),1)):this.clear():e(a[b],this.yb)},Lj:function(a){var b=["return a"," - b",";"];this.Af=new Function("a","b",b.join(a[0]));this.Bf=new Function("a","b",b.join(a[1]));this.yb=new Function("a","return {minX: a"+a[0]+", minY: a"+a[1]+", maxX: a"+a[2]+", maxY: a"+a[3]+"};")}}},{quickselect:1}]},{},[2])(2)});Aj=b.ma})();function Ej(a){this.b=Aj(a);this.a={}}k=Ej.prototype;k.Ea=function(a,b){var c={da:a[0],fa:a[1],ba:a[2],ja:a[3],value:b};this.b.Ea(c);this.a[w(b)]=c};k.load=function(a,b){for(var c=Array(b.length),d=0,e=b.length;d<e;d++){var f=a[d],g=b[d],f={da:f[0],fa:f[1],ba:f[2],ja:f[3],value:g};c[d]=f;this.a[w(g)]=f}this.b.load(c)};k.remove=function(a){a=w(a);var b=this.a[a];delete this.a[a];return null!==this.b.remove(b)};
function Fj(a,b,c){var d=a.a[w(c)];Za([d.da,d.fa,d.ba,d.ja],b)||(a.remove(c),a.Ea(b,c))}function Gj(a){return a.b.all().map(function(a){return a.value})}function Hj(a,b){return a.b.search({da:b[0],fa:b[1],ba:b[2],ja:b[3]}).map(function(a){return a.value})}k.forEach=function(a,b){return Ij(Gj(this),a,b)};function Jj(a,b,c,d){return Ij(Hj(a,b),c,d)}function Ij(a,b,c){for(var d,e=0,f=a.length;e<f&&!(d=b.call(c,a[e]));e++);return d}k.clear=function(){this.b.clear();this.a={}};
k.D=function(){var a=this.b.data;return[a.da,a.fa,a.ba,a.ja]};function Kj(a,b){qi.call(this,0,b);this.l=new Yi(0,b);this.I=null;this.u=[];this.c=[];this.j={fillColor:null,s:!1}}u(Kj,qi);function Lj(a,b,c,d){var e=new sj,f=new Ej;b=Mj(a,b,d,e,f,!0);if(c.length){var g,h,l=[];g=0;for(h=c.length;g<h;++g){var m={list:new sj,ba:void 0};l.push(m);m.ba=Mj(a,c[g],d,m.list,f,!1)}l.sort(function(a,b){return b.ba-a.ba});for(g=0;g<l.length;++g)Nj(l[g].list,l[g].ba,e,b,f)}Oj(e,f,!1);Pj(a,e,f)}
function Mj(a,b,c,d,e,f){var g,h,l=a.a.length/2,m,p,n,q=[],r=[];if(f===Hf(b,0,b.length,c))for(p=m=Qj(a,b[0],b[1],l++),f=b[0],g=c,h=b.length;g<h;g+=c)n=Qj(a,b[g],b[g+1],l++),r.push(Rj(p,n,d)),q.push([Math.min(p.x,n.x),Math.min(p.y,n.y),Math.max(p.x,n.x),Math.max(p.y,n.y)]),f=b[g]>f?b[g]:f,p=n;else for(g=b.length-c,p=m=Qj(a,b[g],b[g+1],l++),f=b[g],g-=c,h=0;g>=h;g-=c)n=Qj(a,b[g],b[g+1],l++),r.push(Rj(p,n,d)),q.push([Math.min(p.x,n.x),Math.min(p.y,n.y),Math.max(p.x,n.x),Math.max(p.y,n.y)]),f=b[g]>f?b[g]:
f,p=n;r.push(Rj(n,m,d));q.push([Math.min(p.x,n.x),Math.min(p.y,n.y),Math.max(p.x,n.x),Math.max(p.y,n.y)]);e.load(q,r);return f}function Oj(a,b,c){var d=uj(a),e=d,f=vj(a),g=!1;do{var h=c?wi(f.W.x,f.W.y,e.W.x,e.W.y,e.aa.x,e.aa.y):wi(e.aa.x,e.aa.y,e.W.x,e.W.y,f.W.x,f.W.y);void 0===h?(Sj(e,f,a,b),g=!0,f===d&&(d=wj(a)),f=e,xj(a)):e.W.vb!==h&&(e.W.vb=h,g=!0);e=f;f=vj(a)}while(e!==d);return g}
function Nj(a,b,c,d,e){Oj(a,e,!0);for(var f=uj(a);f.W.x!==b;)f=vj(a);b=f.W;d={x:d,y:b.y,gb:-1};var g=Infinity,h,l,m,p;m=Tj({aa:b,W:d},e,!0);h=0;for(l=m.length;h<l;++h){var n=m[h];if(void 0===n.aa.vb){var q=Uj(b,d,n.aa,n.W,!0),r=Math.abs(b.x-q[0]);r<g&&(g=r,p={x:q[0],y:q[1],gb:-1},f=n)}}if(Infinity!==g){m=f.W;if(0<g&&(f=Vj(b,p,f.W,e),f.length))for(p=Infinity,h=0,l=f.length;h<l;++h)if(g=f[h],n=Math.atan2(b.y-g.y,d.x-g.x),n<p||n===p&&g.x<m.x)p=n,m=g;for(f=uj(c);f.W!==m;)f=vj(c);d={x:b.x,y:b.y,gb:b.gb,
vb:void 0};h={x:f.W.x,y:f.W.y,gb:f.W.gb,vb:void 0};wj(a).aa=d;Rj(b,f.W,a,e);Rj(h,d,a,e);f.W=h;a.i&&a.b&&(a.f=a.b,a.a=a.b.ub);c.concat(a)}}
function Pj(a,b,c){for(var d=!1,e=Wj(b,c);3<b.c;)if(e){if(!Xj(a,b,c,e,d)&&!Oj(b,c,d)&&!Yj(a,b,c,!0))break}else if(!Xj(a,b,c,e,d)&&!Oj(b,c,d)&&!Yj(a,b,c))if(e=Wj(b,c)){var d=b,f=2*d.c,g=Array(f),h=uj(d),l=h,m=0;do g[m++]=l.aa.x,g[m++]=l.aa.y,l=vj(d);while(l!==h);d=!Hf(g,0,f,2);Oj(b,c,d)}else{e=a;d=b;f=g=uj(d);do{h=Tj(f,c);if(h.length){g=h[0];h=Uj(f.aa,f.W,g.aa,g.W);h=Qj(e,h[0],h[1],e.a.length/2);l=new sj;m=new Ej;Rj(h,f.W,l,m);f.W=h;Fj(c,[Math.min(f.aa.x,h.x),Math.min(f.aa.y,h.y),Math.max(f.aa.x,h.x),
Math.max(f.aa.y,h.y)],f);for(f=vj(d);f!==g;)Rj(f.aa,f.W,l,m),c.remove(f),tj(d),f=zj(d);Rj(g.aa,h,l,m);g.aa=h;Fj(c,[Math.min(g.W.x,h.x),Math.min(g.W.y,h.y),Math.max(g.W.x,h.x),Math.max(g.W.y,h.y)],g);Oj(d,c,!1);Pj(e,d,c);Oj(l,m,!1);Pj(e,l,m);break}f=vj(d)}while(f!==g);break}3===b.c&&(e=a.b.length,a.b[e++]=yj(b).aa.gb,a.b[e++]=zj(b).aa.gb,a.b[e++]=wj(b).aa.gb)}
function Xj(a,b,c,d,e){var f=a.b.length,g=uj(b),h=yj(b),l=g,m=vj(b),p=wj(b),n,q,r,v=!1;do{n=l.aa;q=l.W;r=m.W;if(!1===q.vb){var x=e?Zj(p.W,r,q,n,h.aa):Zj(h.aa,n,q,r,p.W);!d&&Tj({aa:n,W:r},c).length||!x||Vj(n,q,r,c,!0).length||!d&&!1!==n.vb&&!1!==r.vb&&Hf([h.aa.x,h.aa.y,n.x,n.y,q.x,q.y,r.x,r.y,p.W.x,p.W.y],0,10,2)!==!e||(a.b[f++]=n.gb,a.b[f++]=q.gb,a.b[f++]=r.gb,Sj(l,m,b,c),m===g&&(g=p),v=!0)}h=yj(b);l=zj(b);m=vj(b);p=wj(b)}while(l!==g&&3<b.c);return v}
function Yj(a,b,c,d){var e=uj(b);vj(b);var f=e,g=vj(b),h=!1;do{var l=Uj(f.aa,f.W,g.aa,g.W,d);if(l){var m,h=a.b.length,p=a.a.length/2,n=xj(b);tj(b);c.remove(n);m=n===e;d?(l[0]===f.aa.x&&l[1]===f.aa.y?(xj(b),l=f.aa,g.aa=l,c.remove(f),m=m||f===e):(l=g.W,f.W=l,c.remove(g),m=m||g===e),tj(b)):(l=Qj(a,l[0],l[1],p),f.W=l,g.aa=l,Fj(c,[Math.min(f.aa.x,f.W.x),Math.min(f.aa.y,f.W.y),Math.max(f.aa.x,f.W.x),Math.max(f.aa.y,f.W.y)],f),Fj(c,[Math.min(g.aa.x,g.W.x),Math.min(g.aa.y,g.W.y),Math.max(g.aa.x,g.W.x),Math.max(g.aa.y,
g.W.y)],g));a.b[h++]=n.aa.gb;a.b[h++]=n.W.gb;a.b[h++]=l.gb;h=!0;if(m)break}f=yj(b);g=vj(b)}while(f!==e);return h}function Wj(a,b){var c=uj(a),d=c;do{if(Tj(d,b).length)return!1;d=vj(a)}while(d!==c);return!0}function Qj(a,b,c,d){var e=a.a.length;a.a[e++]=b;a.a[e++]=c;return{x:b,y:c,gb:d,vb:void 0}}
function Rj(a,b,c,d){var e={aa:a,W:b},f={ub:void 0,next:void 0,data:e},g=c.b;if(g){var h=g.next;f.ub=g;f.next=h;g.next=f;h&&(h.ub=f);g===c.a&&(c.a=f)}else c.f=f,c.a=f,c.i&&(f.next=f,f.ub=f);c.b=f;c.c++;d&&d.Ea([Math.min(a.x,b.x),Math.min(a.y,b.y),Math.max(a.x,b.x),Math.max(a.y,b.y)],e);return e}function Sj(a,b,c,d){zj(c)===b&&(tj(c),a.W=b.W,d.remove(b),Fj(d,[Math.min(a.aa.x,a.W.x),Math.min(a.aa.y,a.W.y),Math.max(a.aa.x,a.W.x),Math.max(a.aa.y,a.W.y)],a))}
function Vj(a,b,c,d,e){var f,g,h,l=[],m=Hj(d,[Math.min(a.x,b.x,c.x),Math.min(a.y,b.y,c.y),Math.max(a.x,b.x,c.x),Math.max(a.y,b.y,c.y)]);d=0;for(f=m.length;d<f;++d)for(g in m[d])h=m[d][g],"object"!==typeof h||e&&!h.vb||h.x===a.x&&h.y===a.y||h.x===b.x&&h.y===b.y||h.x===c.x&&h.y===c.y||-1!==l.indexOf(h)||!Bf([a.x,a.y,b.x,b.y,c.x,c.y],0,6,2,h.x,h.y)||l.push(h);return l}
function Tj(a,b,c){var d=a.aa,e=a.W;b=Hj(b,[Math.min(d.x,e.x),Math.min(d.y,e.y),Math.max(d.x,e.x),Math.max(d.y,e.y)]);var f=[],g,h;g=0;for(h=b.length;g<h;++g){var l=b[g];a!==l&&(c||l.aa!==e||l.W!==d)&&Uj(d,e,l.aa,l.W,c)&&f.push(l)}return f}
function Uj(a,b,c,d,e){var f=(d.y-c.y)*(b.x-a.x)-(d.x-c.x)*(b.y-a.y);if(f&&(d=((d.x-c.x)*(a.y-c.y)-(d.y-c.y)*(a.x-c.x))/f,c=((b.x-a.x)*(a.y-c.y)-(b.y-a.y)*(a.x-c.x))/f,!e&&d>xi&&d<1-xi&&c>xi&&c<1-xi||e&&0<=d&&1>=d&&0<=c&&1>=c))return[a.x+d*(b.x-a.x),a.y+d*(b.y-a.y)]}
function Zj(a,b,c,d,e){if(void 0===b.vb||void 0===d.vb)return!1;var f=(c.x-d.x)*(b.y-d.y)>(c.y-d.y)*(b.x-d.x);e=(e.x-d.x)*(b.y-d.y)<(e.y-d.y)*(b.x-d.x);a=(a.x-b.x)*(d.y-b.y)>(a.y-b.y)*(d.x-b.x);c=(c.x-b.x)*(d.y-b.y)<(c.y-b.y)*(d.x-b.x);b=b.vb?c||a:c&&a;return(d.vb?e||f:e&&f)&&b}k=Kj.prototype;
k.pc=function(a,b){var c=a.Od(),d=a.sa(),e=this.b.length,f=this.l.b.length,g,h,l,m;g=0;for(h=c.length;g<h;++g){var p=c[g].jd();if(0<p.length){var n=p[0].ha(),n=ef(n,n.length,d,-this.origin[0],-this.origin[1]),q=[],r;l=1;for(m=p.length;l<m;++l)r=p[l].ha(),r=ef(r,r.length,d,-this.origin[0],-this.origin[1]),q.push(r);jj(this.l,n,q,d);Lj(this,n,q,d)}}this.b.length>e&&(this.f.push(e),this.g.push(b),this.j.s&&(this.c.push(e),this.j.s=!1));this.l.b.length>f&&kj(this.l,b,f)};
k.rc=function(a,b){var c=a.jd(),d=a.sa();if(0<c.length){this.f.push(this.b.length);this.g.push(b);this.j.s&&(this.c.push(this.b.length),this.j.s=!1);kj(this.l,b);var e=c[0].ha(),e=ef(e,e.length,d,-this.origin[0],-this.origin[1]),f=[],g,h,l;g=1;for(h=c.length;g<h;++g)l=c[g].ha(),l=ef(l,l.length,d,-this.origin[0],-this.origin[1]),f.push(l);jj(this.l,e,f,d);Lj(this,e,f,d)}};
k.Bb=function(a){this.v=new yi(this.a);this.o=new yi(this.b);this.f.push(this.b.length);this.l.Bb(a);!this.c.length&&0<this.u.length&&(this.u=[]);this.b=this.a=null};k.Cb=function(a){var b=this.v,c=this.o,d=this.l.Cb(a);return function(){Bi(a,b);Bi(a,c);d()}};k.ff=function(a,b){var c=Ci(b,nj,pj),d;this.I?d=this.I:this.I=d=new qj(a,c);b.Rc(c);a.enableVertexAttribArray(d.b);a.vertexAttribPointer(d.b,2,5126,!1,8,0);return d};k.gf=function(a,b){a.disableVertexAttribArray(b.b)};
k.Md=function(a,b,c,d){var e=a.getParameter(a.DEPTH_FUNC),f=a.getParameter(a.DEPTH_WRITEMASK);d||(a.enable(a.DEPTH_TEST),a.depthMask(!0),a.depthFunc(a.NOTEQUAL));if(sb(c)){var g,h,l;h=this.f[this.f.length-1];for(c=this.c.length-1;0<=c;--c)g=this.c[c],l=this.u[c],a.uniform4fv(this.I.G,l),si(a,b,g,h),h=g}else{var m,p,n,q;n=this.f.length-2;l=h=this.f[n+1];for(g=this.c.length-1;0<=g;--g){m=this.u[g];a.uniform4fv(this.I.G,m);for(m=this.c[g];0<=n&&this.f[n]>=m;)q=this.f[n],p=this.g[n],p=w(p).toString(),
c[p]&&(h!==l&&(si(a,b,h,l),a.clear(a.DEPTH_BUFFER_BIT)),l=q),n--,h=q;h!==l&&(si(a,b,h,l),a.clear(a.DEPTH_BUFFER_BIT));h=l=m}}d||(a.disable(a.DEPTH_TEST),a.clear(a.DEPTH_BUFFER_BIT),a.depthMask(f),a.depthFunc(e))};
k.qe=function(a,b,c,d,e){var f,g,h,l,m,p,n;n=this.f.length-2;h=this.f[n+1];for(f=this.c.length-1;0<=f;--f)for(g=this.u[f],a.uniform4fv(this.I.G,g),l=this.c[f];0<=n&&this.f[n]>=l;){g=this.f[n];m=this.g[n];p=w(m).toString();if(void 0===c[p]&&m.U()&&(void 0===e||mb(e,m.U().D()))&&(a.clear(a.COLOR_BUFFER_BIT|a.DEPTH_BUFFER_BIT),si(a,b,g,h),h=d(m)))return h;n--;h=g}};
k.Na=function(a,b){var c=a?a.b:[0,0,0,0];c instanceof CanvasGradient||c instanceof CanvasPattern?c=ti:c=Qc(c).map(function(a,b){return 3!=b?a/255:a})||ti;this.j.fillColor&&ia(c,this.j.fillColor)||(this.j.fillColor=c,this.j.s=!0,this.u.push(c));b?this.l.Na(null,b):this.l.Na(null,new rj({color:[0,0,0,0],lineWidth:0}))};function ak(){}ak.prototype.i=function(){};function bk(a,b,c){this.g=b;this.l=a;this.c=c;this.a={}}u(bk,fi);function ck(a,b){var c=[],d;for(d in a.a){var e=a.a[d],f;for(f in e)c.push(e[f].Cb(b))}return function(){for(var a=c.length,b,d=0;d<a;d++)b=c[d].apply(this,arguments);return b}}function dk(a,b){for(var c in a.a){var d=a.a[c],e;for(e in d)d[e].Bb(b)}}bk.prototype.b=function(a,b){var c=void 0!==a?a.toString():"0",d=this.a[c];void 0===d&&(d={},this.a[c]=d);c=d[b];void 0===c&&(c=new ek[b](this.l,this.g),d[b]=c);return c};
bk.prototype.f=function(){return sb(this.a)};bk.prototype.i=function(a,b,c,d,e,f,g,h){var l=Object.keys(this.a).map(Number);l.sort(da);var m,p,n,q,r,v;m=0;for(p=l.length;m<p;++m)for(r=this.a[l[m].toString()],n=0,q=ei.length;n<q;++n)v=r[ei[n]],void 0!==v&&v.i(a,b,c,d,e,f,g,h,void 0,!1)};
function fk(a,b,c,d,e,f,g,h,l,m,p){var n=gk,q=Object.keys(a.a).map(Number);q.sort(function(a,b){return b-a});var r,v,x,y,z;r=0;for(v=q.length;r<v;++r)for(y=a.a[q[r].toString()],x=ei.length-1;0<=x;--x)if(z=y[ei[x]],void 0!==z&&(z=z.i(b,c,d,e,n,f,g,h,l,m,p)))return z}
bk.prototype.Aa=function(a,b,c,d,e,f,g,h,l,m){var p=b.b;p.bindFramebuffer(p.FRAMEBUFFER,Ki(b));var n;void 0!==this.c&&(n=Ka(Wa(a),d*this.c));return fk(this,b,a,d,e,g,h,l,function(a){var b=new Uint8Array(4);p.readPixels(0,0,1,1,p.RGBA,p.UNSIGNED_BYTE,b);if(0<b[3]&&(a=m(a)))return a},!0,n)};
function hk(a,b,c,d,e,f,g,h){var l=c.b;l.bindFramebuffer(l.FRAMEBUFFER,Ki(c));return void 0!==fk(a,c,b,d,e,f,g,h,function(){var a=new Uint8Array(4);l.readPixels(0,0,1,1,l.RGBA,l.UNSIGNED_BYTE,a);return 0<a[3]},!1)}var gk=[1,1],ek={Circle:Ai,Image:Pi,LineString:Yi,Polygon:Kj,Text:ak};function ik(a,b,c,d,e,f,g){this.b=a;this.f=b;this.a=f;this.c=g;this.l=e;this.g=d;this.i=c;this.j=this.o=this.v=null}u(ik,Rh);k=ik.prototype;k.pd=function(a){this.Na(a.Ca(),a.Da());this.Vb(a.Z())};
k.mc=function(a){switch(a.T()){case "Point":this.qc(a,null);break;case "LineString":this.Qb(a,null);break;case "Polygon":this.rc(a,null);break;case "MultiPoint":this.oc(a,null);break;case "MultiLineString":this.nc(a,null);break;case "MultiPolygon":this.pc(a,null);break;case "GeometryCollection":this.pe(a,null);break;case "Circle":this.$b(a,null)}};k.oe=function(a,b){var c=(0,b.Ra)(a);c&&mb(this.a,c.D())&&(this.pd(b),this.mc(c))};k.pe=function(a){a=a.a;var b,c;b=0;for(c=a.length;b<c;++b)this.mc(a[b])};
k.qc=function(a,b){var c=this.b,d=(new bk(1,this.a)).b(0,"Image");d.Vb(this.v);d.qc(a,b);d.Bb(c);d.i(this.b,this.f,this.i,this.g,this.l,this.c,1,{},void 0,!1);d.Cb(c)()};k.oc=function(a,b){var c=this.b,d=(new bk(1,this.a)).b(0,"Image");d.Vb(this.v);d.oc(a,b);d.Bb(c);d.i(this.b,this.f,this.i,this.g,this.l,this.c,1,{},void 0,!1);d.Cb(c)()};
k.Qb=function(a,b){var c=this.b,d=(new bk(1,this.a)).b(0,"LineString");d.Na(null,this.j);d.Qb(a,b);d.Bb(c);d.i(this.b,this.f,this.i,this.g,this.l,this.c,1,{},void 0,!1);d.Cb(c)()};k.nc=function(a,b){var c=this.b,d=(new bk(1,this.a)).b(0,"LineString");d.Na(null,this.j);d.nc(a,b);d.Bb(c);d.i(this.b,this.f,this.i,this.g,this.l,this.c,1,{},void 0,!1);d.Cb(c)()};
k.rc=function(a,b){var c=this.b,d=(new bk(1,this.a)).b(0,"Polygon");d.Na(this.o,this.j);d.rc(a,b);d.Bb(c);d.i(this.b,this.f,this.i,this.g,this.l,this.c,1,{},void 0,!1);d.Cb(c)()};k.pc=function(a,b){var c=this.b,d=(new bk(1,this.a)).b(0,"Polygon");d.Na(this.o,this.j);d.pc(a,b);d.Bb(c);d.i(this.b,this.f,this.i,this.g,this.l,this.c,1,{},void 0,!1);d.Cb(c)()};
k.$b=function(a,b){var c=this.b,d=(new bk(1,this.a)).b(0,"Circle");d.Na(this.o,this.j);d.$b(a,b);d.Bb(c);d.i(this.b,this.f,this.i,this.g,this.l,this.c,1,{},void 0,!1);d.Cb(c)()};k.Vb=function(a){this.v=a};k.Na=function(a,b){this.o=a;this.j=b};function jk(){this.c=0;this.b={};this.f=this.a=null}k=jk.prototype;k.clear=function(){this.c=0;this.b={};this.f=this.a=null};k.forEach=function(a,b){for(var c=this.a;c;)a.call(b,c.$c,c.tc,this),c=c.Lb};k.get=function(a){a=this.b[a];qa(!!a,15);if(a===this.f)return a.$c;a===this.a?(this.a=this.a.Lb,this.a.td=null):(a.Lb.td=a.td,a.td.Lb=a.Lb);a.Lb=null;a.td=this.f;this.f=this.f.Lb=a;return a.$c};
k.pop=function(){var a=this.a;delete this.b[a.tc];a.Lb&&(a.Lb.td=null);this.a=a.Lb;this.a||(this.f=null);--this.c;return a.$c};k.replace=function(a,b){this.get(a);this.b[a].$c=b};k.set=function(a,b){qa(!(a in this.b),16);var c={tc:a,Lb:null,td:this.f,$c:b};this.f?this.f.Lb=c:this.a=c;this.f=c;this.b[a]=c;++this.c};function kk(a,b){Hh.call(this,0,b);this.b=document.createElement("CANVAS");this.b.style.width="100%";this.b.style.height="100%";this.b.style.display="block";this.b.className="ol-unselectable";a.insertBefore(this.b,a.childNodes[0]||null);this.u=this.A=0;this.C=Xc();this.o=!0;this.f=Dd(this.b,{antialias:!0,depth:!0,failIfMajorPerformanceCaveat:!0,preserveDrawingBuffer:!1,stencil:!0});this.i=new Ji(this.b,this.f);B(this.b,"webglcontextlost",this.nn,this);B(this.b,"webglcontextrestored",this.pn,this);
this.a=new jk;this.I=null;this.l=new Ae(function(a){var b=a[1];a=a[2];var c=b[0]-this.I[0],b=b[1]-this.I[1];return 65536*Math.log(a)+Math.sqrt(c*c+b*b)/a}.bind(this),function(a){return a[0].ib()});this.G=function(){if(this.l.b.length){Ee(this.l);var a=Be(this.l);lk(this,a[0],a[3],a[4])}return!1}.bind(this);this.g=0;mk(this)}u(kk,Hh);
function lk(a,b,c,d){var e=a.f,f=b.ib();if(a.a.b.hasOwnProperty(f))a=a.a.get(f),e.bindTexture(3553,a.Fb),9729!=a.Bh&&(e.texParameteri(3553,10240,9729),a.Bh=9729),9729!=a.Dh&&(e.texParameteri(3553,10241,9729),a.Dh=9729);else{var g=e.createTexture();e.bindTexture(3553,g);if(0<d){var h=a.C.canvas,l=a.C;a.A!==c[0]||a.u!==c[1]?(h.width=c[0],h.height=c[1],a.A=c[0],a.u=c[1]):l.clearRect(0,0,c[0],c[1]);l.drawImage(b.Z(),d,d,c[0],c[1],0,0,c[0],c[1]);e.texImage2D(3553,0,6408,6408,5121,h)}else e.texImage2D(3553,
0,6408,6408,5121,b.Z());e.texParameteri(3553,10240,9729);e.texParameteri(3553,10241,9729);e.texParameteri(3553,10242,33071);e.texParameteri(3553,10243,33071);a.a.set(f,{Fb:g,Bh:9729,Dh:9729})}}function nk(a,b,c){var d=a.j;if(Ec(d,b)){a=a.i;var e=c.viewState;d.b(new Mh(b,new ik(a,e.center,e.resolution,e.rotation,c.size,c.extent,c.pixelRatio),c,null,a))}}k=kk.prototype;k.ra=function(){var a=this.f;a.isContextLost()||this.a.forEach(function(b){b&&a.deleteTexture(b.Fb)});Ac(this.i);Hh.prototype.ra.call(this)};
k.bk=function(a,b){for(var c=this.f,d;1024<this.a.c-this.g;){if(d=this.a.a.$c)c.deleteTexture(d.Fb);else if(+this.a.a.tc==b.index)break;else--this.g;this.a.pop()}};k.T=function(){return"webgl"};k.nn=function(a){a.preventDefault();this.a.clear();this.g=0;a=this.c;for(var b in a)a[b].$f()};k.pn=function(){mk(this);this.j.render()};function mk(a){a=a.f;a.activeTexture(33984);a.blendFuncSeparate(770,771,1,771);a.disable(2884);a.disable(2929);a.disable(3089);a.disable(2960)}
k.vg=function(a){var b=this.i,c=this.f;if(c.isContextLost())return!1;if(!a)return this.o&&(this.b.style.display="none",this.o=!1),!1;this.I=a.focus;this.a.set((-a.index).toString(),null);++this.g;nk(this,"precompose",a);var d=[],e=a.layerStatesArray;ja(e);var f=a.viewState.resolution,g,h,l,m;g=0;for(h=e.length;g<h;++g)m=e[g],sh(m,f)&&"ready"==m.Ui&&(l=Kh(this,m.layer),l.ag(a,m,b)&&d.push(m));e=a.size[0]*a.pixelRatio;f=a.size[1]*a.pixelRatio;if(this.b.width!=e||this.b.height!=f)this.b.width=e,this.b.height=
f;c.bindFramebuffer(36160,null);c.clearColor(0,0,0,0);c.clear(16384);c.enable(3042);c.viewport(0,0,this.b.width,this.b.height);g=0;for(h=d.length;g<h;++g)m=d[g],l=Kh(this,m.layer),l.ai(a,m,b);this.o||(this.b.style.display="",this.o=!0);Ih(a);1024<this.a.c-this.g&&a.postRenderFunctions.push(this.bk.bind(this));this.l.b.length&&(a.postRenderFunctions.push(this.G),a.animate=!0);nk(this,"postcompose",a);Lh(this,a);a.postRenderFunctions.push(Jh)};
k.Aa=function(a,b,c,d,e,f,g){var h;if(this.f.isContextLost())return!1;var l=b.viewState,m=b.layerStatesArray,p;for(p=m.length-1;0<=p;--p){h=m[p];var n=h.layer;if(sh(h,l.resolution)&&f.call(g,n)&&(h=Kh(this,n).Aa(a,b,c,d,e)))return h}};k.Zh=function(a,b,c,d,e){c=!1;if(this.f.isContextLost())return!1;var f=b.viewState,g=b.layerStatesArray,h;for(h=g.length-1;0<=h;--h){var l=g[h],m=l.layer;if(sh(l,f.resolution)&&d.call(e,m)&&(c=Kh(this,m).Ke(a,b)))return!0}return c};
k.Yh=function(a,b,c,d,e){if(this.f.isContextLost())return!1;var f=b.viewState,g,h=b.layerStatesArray,l;for(l=h.length-1;0<=l;--l){g=h[l];var m=g.layer;if(sh(g,f.resolution)&&e.call(d,m)&&(g=Kh(this,m).Zf(a,b,c,d)))return g}};var ok=["canvas","webgl"];
function G(a){Gc.call(this);var b=pk(a);this.rf=void 0!==a.loadTilesWhileAnimating?a.loadTilesWhileAnimating:!1;this.sf=void 0!==a.loadTilesWhileInteracting?a.loadTilesWhileInteracting:!1;this.xf=void 0!==a.pixelRatio?a.pixelRatio:Kd;this.pf=b.logos;this.ia=function(){this.g=void 0;this.hp.call(this,Date.now())}.bind(this);this.mb=wh();this.yf=wh();this.Bd=0;this.a=null;this.lb=Ia();this.G=this.R=this.S=null;this.c=document.createElement("DIV");this.c.className="ol-viewport"+(Pd?" ol-touch":"");this.c.style.position=
"relative";this.c.style.overflow="hidden";this.c.style.width="100%";this.c.style.height="100%";this.c.style.msTouchAction="none";this.c.style.touchAction="none";this.A=document.createElement("DIV");this.A.className="ol-overlaycontainer";this.c.appendChild(this.A);this.u=document.createElement("DIV");this.u.className="ol-overlaycontainer-stopevent";a="click dblclick mousedown touchstart mspointerdown pointerdown mousewheel wheel".split(" ");for(var c=0,d=a.length;c<d;++c)B(this.u,a[c],Cc);this.c.appendChild(this.u);
this.Ja=new xe(this);for(var e in Ad)B(this.Ja,Ad[e],this.uh,this);this.oa=b.keyboardEventTarget;this.v=null;B(this.c,"wheel",this.ld,this);B(this.c,"mousewheel",this.ld,this);this.j=b.controls;this.l=b.interactions;this.o=b.overlays;this.dg={};this.C=new b.jp(this.c,this);this.Y=null;this.Oa=[];this.Ha=new Fe(this.Wk.bind(this),this.Cl.bind(this));this.ea={};B(this,Ic("layergroup"),this.kl,this);B(this,Ic("view"),this.Dl,this);B(this,Ic("size"),this.zl,this);B(this,Ic("target"),this.Bl,this);this.H(b.values);
this.j.forEach(function(a){a.setMap(this)},this);B(this.j,"add",function(a){a.element.setMap(this)},this);B(this.j,"remove",function(a){a.element.setMap(null)},this);this.l.forEach(function(a){a.setMap(this)},this);B(this.l,"add",function(a){a.element.setMap(this)},this);B(this.l,"remove",function(a){a.element.setMap(null)},this);this.o.forEach(this.Ug,this);B(this.o,"add",function(a){this.Ug(a.element)},this);B(this.o,"remove",function(a){var b=a.element.g;void 0!==b&&delete this.dg[b.toString()];
a.element.setMap(null)},this)}u(G,Gc);k=G.prototype;k.Rj=function(a){this.j.push(a)};k.Sj=function(a){this.l.push(a)};k.Sg=function(a){this.Jc().od().push(a)};k.Tg=function(a){this.o.push(a)};k.Ug=function(a){var b=a.g;void 0!==b&&(this.dg[b.toString()]=a);a.setMap(this)};
k.ra=function(){Ac(this.Ja);Ac(this.C);xc(this.c,"wheel",this.ld,this);xc(this.c,"mousewheel",this.ld,this);this.i&&(window.removeEventListener("resize",this.i,!1),this.i=void 0);this.g&&(cancelAnimationFrame(this.g),this.g=void 0);this.Fe(null);Gc.prototype.ra.call(this)};k.re=function(a,b,c){if(this.a)return a=this.Za(a),c=c?c:{},this.C.Aa(a,this.a,void 0!==c.hitTolerance?c.hitTolerance*this.a.pixelRatio:0,b,null,c.layerFilter?c.layerFilter:af,null)};
k.pm=function(a,b,c,d,e){if(this.a)return this.C.Yh(a,this.a,b,void 0!==c?c:null,d?d:af,void 0!==e?e:null)};k.El=function(a,b){if(!this.a)return!1;var c=this.Za(a);b=b?b:{};return this.C.Zh(c,this.a,void 0!==b.hitTolerance?b.hitTolerance*this.a.pixelRatio:0,b.layerFilter?b.layerFilter:af,null)};k.sk=function(a){return this.Za(this.te(a))};k.te=function(a){var b=this.c.getBoundingClientRect();a=a.changedTouches?a.changedTouches[0]:a;return[a.clientX-b.left,a.clientY-b.top]};k.Of=function(){return this.get("target")};
k.Kc=function(){var a=this.Of();return void 0!==a?"string"===typeof a?document.getElementById(a):a:null};k.Za=function(a){var b=this.a;return b?Bh(b.pixelToCoordinateTransform,a.slice()):null};k.qk=function(){return this.j};k.Lk=function(){return this.o};k.Kk=function(a){a=this.dg[a.toString()];return void 0!==a?a:null};k.xk=function(){return this.l};k.Jc=function(){return this.get("layergroup")};k.Jh=function(){return this.Jc().od()};
k.Ka=function(a){var b=this.a;return b?Bh(b.coordinateToPixelTransform,a.slice(0,2)):null};k.Mb=function(){return this.get("size")};k.$=function(){return this.get("view")};k.Yk=function(){return this.c};k.Wk=function(a,b,c,d){var e=this.a;if(!(e&&b in e.wantedTiles&&e.wantedTiles[b][a.ib()]))return Infinity;a=c[0]-e.focus[0];c=c[1]-e.focus[1];return 65536*Math.log(d)+Math.sqrt(a*a+c*c)/d};k.ld=function(a,b){var c=new zd(b||a.type,this,a);this.uh(c)};
k.uh=function(a){if(this.a){this.Y=a.coordinate;a.frameState=this.a;var b=this.l.a,c;if(!1!==this.b(a))for(c=b.length-1;0<=c;c--){var d=b[c];if(d.c()&&!d.handleEvent(a))break}}};k.xl=function(){var a=this.a,b=this.Ha;if(b.b.length){var c=16,d=c;if(a){var e=a.viewHints;e[0]&&(c=this.rf?8:0,d=2);e[1]&&(c=this.sf?8:0,d=2)}b.l<c&&(Ee(b),Ge(b,c,d))}b=this.Oa;c=0;for(d=b.length;c<d;++c)b[c](this,a);b.length=0};k.zl=function(){this.render()};
k.Bl=function(){var a;this.Of()&&(a=this.Kc());if(this.v){for(var b=0,c=this.v.length;b<c;++b)rc(this.v[b]);this.v=null}a?(a.appendChild(this.c),a=this.oa?this.oa:a,this.v=[B(a,"keydown",this.ld,this),B(a,"keypress",this.ld,this)],this.i||(this.i=this.xd.bind(this),window.addEventListener("resize",this.i,!1))):(Zc(this.c),this.i&&(window.removeEventListener("resize",this.i,!1),this.i=void 0));this.xd()};k.Cl=function(){this.render()};k.xh=function(){this.render()};
k.Dl=function(){this.S&&(rc(this.S),this.S=null);this.R&&(rc(this.R),this.R=null);var a=this.$();a&&(this.c.setAttribute("data-view",w(a)),this.S=B(a,"propertychange",this.xh,this),this.R=B(a,"change",this.xh,this));this.render()};k.kl=function(){this.G&&(this.G.forEach(rc),this.G=null);var a=this.Jc();a&&(this.G=[B(a,"propertychange",this.render,this),B(a,"change",this.render,this)]);this.render()};k.ip=function(){this.g&&cancelAnimationFrame(this.g);this.ia()};
k.render=function(){void 0===this.g&&(this.g=requestAnimationFrame(this.ia))};k.ap=function(a){return this.j.remove(a)};k.bp=function(a){return this.l.remove(a)};k.ep=function(a){return this.Jc().od().remove(a)};k.fp=function(a){return this.o.remove(a)};
k.hp=function(a){var b,c,d=this.Mb(),e=this.$(),f=Ia(),g=null;if(void 0!==d&&0<d[0]&&0<d[1]&&e&&Yf(e)){var g=ld(e,this.a?this.a.viewHints:void 0),h=this.Jc().Lf(),l={};b=0;for(c=h.length;b<c;++b)l[w(h[b].layer)]=h[b];b=e.V();g={animate:!1,attributions:{},coordinateToPixelTransform:this.mb,extent:f,focus:this.Y?this.Y:b.center,index:this.Bd++,layerStates:l,layerStatesArray:h,logos:pb({},this.pf),pixelRatio:this.xf,pixelToCoordinateTransform:this.yf,postRenderFunctions:[],size:d,skippedFeatureUids:this.ea,
tileQueue:this.Ha,time:a,usedTiles:{},viewState:b,viewHints:g,wantedTiles:{}}}g&&(g.extent=kb(b.center,b.resolution,b.rotation,g.size,f));this.a=g;this.C.vg(g);g&&(g.animate&&this.render(),Array.prototype.push.apply(this.Oa,g.postRenderFunctions),g.viewHints[0]||g.viewHints[1]||Za(g.extent,this.lb)||(this.b(new yd("moveend",this,g)),Na(g.extent,this.lb)));this.b(new yd("postrender",this,g));setTimeout(this.xl.bind(this),0)};k.Li=function(a){this.set("layergroup",a)};
k.Ag=function(a){this.set("size",a)};k.Fe=function(a){this.set("target",a)};k.vp=function(a){this.set("view",a)};k.Ti=function(a){a=w(a).toString();this.ea[a]=!0;this.render()};k.xd=function(){var a=this.Kc();if(a){var b=getComputedStyle(a);this.Ag([a.offsetWidth-parseFloat(b.borderLeftWidth)-parseFloat(b.paddingLeft)-parseFloat(b.paddingRight)-parseFloat(b.borderRightWidth),a.offsetHeight-parseFloat(b.borderTopWidth)-parseFloat(b.paddingTop)-parseFloat(b.paddingBottom)-parseFloat(b.borderBottomWidth)])}else this.Ag(void 0)};
k.Zi=function(a){a=w(a).toString();delete this.ea[a];this.render()};
function pk(a){var b=null;void 0!==a.keyboardEventTarget&&(b="string"===typeof a.keyboardEventTarget?document.getElementById(a.keyboardEventTarget):a.keyboardEventTarget);var c={},d={};if(void 0===a.logo||"boolean"===typeof a.logo&&a.logo)d["data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAAHGAAABxgEXwfpGAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAhNQTFRF////AP//AICAgP//AFVVQECA////K1VVSbbbYL/fJ05idsTYJFtbbcjbJllmZszWWMTOIFhoHlNiZszTa9DdUcHNHlNlV8XRIVdiasrUHlZjIVZjaMnVH1RlIFRkH1RkH1ZlasvYasvXVsPQH1VkacnVa8vWIVZjIFRjVMPQa8rXIVVkXsXRsNveIFVkIFZlIVVj3eDeh6GmbMvXH1ZkIFRka8rWbMvXIFVkIFVjIFVkbMvWH1VjbMvWIFVlbcvWIFVla8vVIFVkbMvWbMvVH1VkbMvWIFVlbcvWIFVkbcvVbMvWjNPbIFVkU8LPwMzNIFVkbczWIFVkbsvWbMvXIFVkRnB8bcvW2+TkW8XRIFVkIlZlJVloJlpoKlxrLl9tMmJwOWd0Omh1RXF8TneCT3iDUHiDU8LPVMLPVcLPVcPQVsPPVsPQV8PQWMTQWsTQW8TQXMXSXsXRX4SNX8bSYMfTYcfTYsfTY8jUZcfSZsnUaIqTacrVasrVa8jTa8rWbI2VbMvWbcvWdJObdcvUdszUd8vVeJaee87Yfc3WgJyjhqGnitDYjaarldPZnrK2oNbborW5o9bbo9fbpLa6q9ndrL3ArtndscDDutzfu8fJwN7gwt7gxc/QyuHhy+HizeHi0NfX0+Pj19zb1+Tj2uXk29/e3uLg3+Lh3+bl4uXj4ufl4+fl5Ofl5ufl5ujm5+jmySDnBAAAAFp0Uk5TAAECAgMEBAYHCA0NDg4UGRogIiMmKSssLzU7PkJJT1JTVFliY2hrdHZ3foSFhYeJjY2QkpugqbG1tre5w8zQ09XY3uXn6+zx8vT09vf4+Pj5+fr6/P39/f3+gz7SsAAAAVVJREFUOMtjYKA7EBDnwCPLrObS1BRiLoJLnte6CQy8FLHLCzs2QUG4FjZ5GbcmBDDjxJBXDWxCBrb8aM4zbkIDzpLYnAcE9VXlJSWlZRU13koIeW57mGx5XjoMZEUqwxWYQaQbSzLSkYGfKFSe0QMsX5WbjgY0YS4MBplemI4BdGBW+DQ11eZiymfqQuXZIjqwyadPNoSZ4L+0FVM6e+oGI6g8a9iKNT3o8kVzNkzRg5lgl7p4wyRUL9Yt2jAxVh6mQCogae6GmflI8p0r13VFWTHBQ0rWPW7ahgWVcPm+9cuLoyy4kCJDzCm6d8PSFoh0zvQNC5OjDJhQopPPJqph1doJBUD5tnkbZiUEqaCnB3bTqLTFG1bPn71kw4b+GFdpLElKIzRxxgYgWNYc5SCENVHKeUaltHdXx0dZ8uBI1hJ2UUDgq82CM2MwKeibqAvSO7MCABq0wXEPiqWEAAAAAElFTkSuQmCC"]="https://openlayers.org/";
else{var e=a.logo;"string"===typeof e?d[e]="":e instanceof HTMLElement?d[w(e).toString()]=e:e&&(qa("string"==typeof e.href,44),qa("string"==typeof e.src,45),d[e.src]=e.href)}e=a.layers instanceof fh?a.layers:new fh({layers:a.layers});c.layergroup=e;c.target=a.target;c.view=void 0!==a.view?a.view:new Qf;var e=Hh,f;void 0!==a.renderer?(Array.isArray(a.renderer)?f=a.renderer:"string"===typeof a.renderer?f=[a.renderer]:qa(!1,46),0<=f.indexOf("dom")&&(f=f.concat(ok))):f=ok;var g,h;g=0;for(h=f.length;g<
h;++g){var l=f[g];if("canvas"==l){if(Md){e=ci;break}}else if("webgl"==l&&Ed){e=kk;break}}void 0!==a.controls?Array.isArray(a.controls)?f=new D(a.controls.slice()):(qa(a.controls instanceof D,47),f=a.controls):f=nd();void 0!==a.interactions?Array.isArray(a.interactions)?g=new D(a.interactions.slice()):(qa(a.interactions instanceof D,48),g=a.interactions):g=ch();void 0!==a.overlays?Array.isArray(a.overlays)?a=new D(a.overlays.slice()):(qa(a.overlays instanceof D,49),a=a.overlays):a=new D;return{controls:f,
interactions:g,keyboardEventTarget:b,logos:d,overlays:a,jp:e,values:c}}qh();function qk(a){Gc.call(this);this.g=a.id;this.o=void 0!==a.insertFirst?a.insertFirst:!0;this.v=void 0!==a.stopEvent?a.stopEvent:!0;this.c=document.createElement("DIV");this.c.className="ol-overlay-container";this.c.style.position="absolute";this.autoPan=void 0!==a.autoPan?a.autoPan:!1;this.l=a.autoPanAnimation||{};this.j=void 0!==a.autoPanMargin?a.autoPanMargin:20;this.a={me:"",Ce:"",bf:"",kf:"",visible:!0};this.i=null;B(this,Ic(rk),this.fl,this);B(this,Ic(sk),this.pl,this);B(this,Ic(tk),this.tl,
this);B(this,Ic(uk),this.vl,this);B(this,Ic(vk),this.wl,this);void 0!==a.element&&this.Gi(a.element);this.Ni(void 0!==a.offset?a.offset:[0,0]);this.Qi(void 0!==a.positioning?a.positioning:"top-left");void 0!==a.position&&this.Wf(a.position)}u(qk,Gc);k=qk.prototype;k.se=function(){return this.get(rk)};k.qm=function(){return this.g};k.Ge=function(){return this.get(sk)};k.qh=function(){return this.get(tk)};k.Kh=function(){return this.get(uk)};k.rh=function(){return this.get(vk)};
k.fl=function(){for(var a=this.c;a.lastChild;)a.removeChild(a.lastChild);(a=this.se())&&this.c.appendChild(a)};k.pl=function(){this.i&&(Zc(this.c),rc(this.i),this.i=null);var a=this.Ge();a&&(this.i=B(a,"postrender",this.render,this),wk(this),a=this.v?a.u:a.A,this.o?a.insertBefore(this.c,a.childNodes[0]||null):a.appendChild(this.c))};k.render=function(){wk(this)};k.tl=function(){wk(this)};
k.vl=function(){wk(this);if(this.get(uk)&&this.autoPan){var a=this.Ge();if(a&&a.Kc()){var b=xk(a.Kc(),a.Mb()),c=this.se(),d=c.offsetWidth,e=c.currentStyle||getComputedStyle(c),d=d+(parseInt(e.marginLeft,10)+parseInt(e.marginRight,10)),e=c.offsetHeight,f=c.currentStyle||getComputedStyle(c),e=e+(parseInt(f.marginTop,10)+parseInt(f.marginBottom,10)),g=xk(c,[d,e]),c=this.j;Ta(b,g)||(d=g[0]-b[0],e=b[2]-g[2],f=g[1]-b[1],g=b[3]-g[3],b=[0,0],0>d?b[0]=d-c:0>e&&(b[0]=Math.abs(e)+c),0>f?b[1]=f-c:0>g&&(b[1]=
Math.abs(g)+c),0===b[0]&&0===b[1])||(c=a.$().Ba(),c=a.Ka(c),b=[c[0]+b[0],c[1]+b[1]],a.$().animate({center:a.Za(b),duration:this.l.duration,easing:this.l.easing}))}}};k.wl=function(){wk(this)};k.Gi=function(a){this.set(rk,a)};k.setMap=function(a){this.set(sk,a)};k.Ni=function(a){this.set(tk,a)};k.Wf=function(a){this.set(uk,a)};function xk(a,b){var c=a.getBoundingClientRect(),d=c.left+window.pageXOffset,c=c.top+window.pageYOffset;return[d,c,d+b[0],c+b[1]]}k.Qi=function(a){this.set(vk,a)};
function yk(a,b){a.a.visible!==b&&(a.c.style.display=b?"":"none",a.a.visible=b)}
function wk(a){var b=a.Ge(),c=a.Kh();if(b&&b.a&&c){var c=b.Ka(c),d=b.Mb(),b=a.c.style,e=a.qh(),f=a.rh(),g=e[0],e=e[1];if("bottom-right"==f||"center-right"==f||"top-right"==f)""!==a.a.Ce&&(a.a.Ce=b.left=""),g=Math.round(d[0]-c[0]-g)+"px",a.a.bf!=g&&(a.a.bf=b.right=g);else{""!==a.a.bf&&(a.a.bf=b.right="");if("bottom-center"==f||"center-center"==f||"top-center"==f)g-=a.c.offsetWidth/2;g=Math.round(c[0]+g)+"px";a.a.Ce!=g&&(a.a.Ce=b.left=g)}if("bottom-left"==f||"bottom-center"==f||"bottom-right"==f)""!==
a.a.kf&&(a.a.kf=b.top=""),c=Math.round(d[1]-c[1]-e)+"px",a.a.me!=c&&(a.a.me=b.bottom=c);else{""!==a.a.me&&(a.a.me=b.bottom="");if("center-left"==f||"center-center"==f||"center-right"==f)e-=a.c.offsetHeight/2;c=Math.round(c[1]+e)+"px";a.a.kf!=c&&(a.a.kf=b.top=c)}yk(a,!0)}else yk(a,!1)}var rk="element",sk="map",tk="offset",uk="position",vk="positioning";function zk(a){a=a?a:{};this.l=void 0!==a.collapsed?a.collapsed:!0;this.j=void 0!==a.collapsible?a.collapsible:!0;this.j||(this.l=!1);var b=void 0!==a.className?a.className:"ol-overviewmap",c=void 0!==a.tipLabel?a.tipLabel:"Overview map",d=void 0!==a.collapseLabel?a.collapseLabel:"\u00ab";"string"===typeof d?(this.o=document.createElement("span"),this.o.textContent=d):this.o=d;d=void 0!==a.label?a.label:"\u00bb";"string"===typeof d?(this.u=document.createElement("span"),this.u.textContent=d):this.u=
d;var e=this.j&&!this.l?this.o:this.u,d=document.createElement("button");d.setAttribute("type","button");d.title=c;d.appendChild(e);B(d,"click",this.Em,this);this.C=document.createElement("DIV");this.C.className="ol-overviewmap-map";var f=this.c=new G({controls:new D,interactions:new D,view:a.view});a.layers&&a.layers.forEach(function(a){f.Sg(a)},this);c=document.createElement("DIV");c.className="ol-overviewmap-box";c.style.boxSizing="border-box";this.A=new qk({position:[0,0],positioning:"bottom-left",
element:c});this.c.Tg(this.A);c=document.createElement("div");c.className=b+" ol-unselectable ol-control"+(this.l&&this.j?" ol-collapsed":"")+(this.j?"":" ol-uncollapsible");c.appendChild(this.C);c.appendChild(d);ad.call(this,{element:c,render:a.render?a.render:Ak,target:a.target})}u(zk,ad);k=zk.prototype;
k.setMap=function(a){var b=this.a;a!==b&&(b&&((b=b.$())&&xc(b,Ic("rotation"),this.Ae,this),this.c.Fe(null)),ad.prototype.setMap.call(this,a),a&&(this.c.Fe(this.C),this.v.push(B(a,"propertychange",this.ql,this)),this.c.Jh().ec()||this.c.Li(a.Jc()),a=a.$()))&&(B(a,Ic("rotation"),this.Ae,this),Yf(a)&&(this.c.xd(),Bk(this)))};k.ql=function(a){"view"===a.key&&((a=a.oldValue)&&xc(a,Ic("rotation"),this.Ae,this),a=this.a.$(),B(a,Ic("rotation"),this.Ae,this))};k.Ae=function(){this.c.$().He(this.a.$().Va())};
function Ak(){var a=this.a,b=this.c;if(a.a&&b.a){var c=a.Mb(),a=a.$().ed(c),d=b.Mb(),c=b.$().ed(d),e=b.Ka(eb(a)),f=b.Ka(cb(a)),b=Math.abs(e[0]-f[0]),e=Math.abs(e[1]-f[1]),f=d[0],d=d[1];b<.1*f||e<.1*d||b>.75*f||e>.75*d?Bk(this):Ta(c,a)||(a=this.c,c=this.a.$(),a.$().wb(c.Ba()))}Ck(this)}function Bk(a){var b=a.a;a=a.c;var c=b.Mb(),b=b.$().ed(c);a=a.$();nb(b,1/(.1*Math.pow(2,Math.log(7.5)/Math.LN2/2)));a.Ff(b)}
function Ck(a){var b=a.a,c=a.c;if(b.a&&c.a){var d=b.Mb(),e=b.$(),f=c.$(),c=e.Va(),b=a.A,g=a.A.se(),h=e.ed(d),d=f.Ua(),e=bb(h),f=db(h),l;if(a=a.a.$().Ba())l=[e[0]-a[0],e[1]-a[1]],Ve(l,c),Qe(l,a);b.Wf(l);g&&(g.style.width=Math.abs((e[0]-f[0])/d)+"px",g.style.height=Math.abs((f[1]-e[1])/d)+"px")}}k.Em=function(a){a.preventDefault();Dk(this)};
function Dk(a){a.element.classList.toggle("ol-collapsed");a.l?Yc(a.o,a.u):Yc(a.u,a.o);a.l=!a.l;var b=a.c;a.l||b.a||(b.xd(),Bk(a),wc(b,"postrender",function(){Ck(this)},a))}k.Dm=function(){return this.j};k.Gm=function(a){this.j!==a&&(this.j=a,this.element.classList.toggle("ol-uncollapsible"),!a&&this.l&&Dk(this))};k.Fm=function(a){this.j&&this.l!==a&&Dk(this)};k.Cm=function(){return this.l};k.Mk=function(){return this.c};function Ek(a){a=a?a:{};var b=void 0!==a.className?a.className:"ol-scale-line";this.j=document.createElement("DIV");this.j.className=b+"-inner";this.c=document.createElement("DIV");this.c.className=b+" ol-unselectable";this.c.appendChild(this.j);this.u=null;this.o=void 0!==a.minWidth?a.minWidth:64;this.l=!1;this.C=void 0;this.A="";ad.call(this,{element:this.c,render:a.render?a.render:Fk,target:a.target});B(this,Ic(Gk),this.R,this);this.G(a.units||"metric")}u(Ek,ad);var Hk=[1,2,5];
Ek.prototype.Jb=function(){return this.get(Gk)};function Fk(a){(a=a.frameState)?this.u=a.viewState:this.u=null;Ik(this)}Ek.prototype.R=function(){Ik(this)};Ek.prototype.G=function(a){this.set(Gk,a)};
function Ik(a){var b=a.u;if(b){var c=b.projection,d=c.sc(),b=Eb(c,b.resolution,b.center)*d,d=a.o*b,c="",e=a.Jb();"degrees"==e?(c=vb.degrees,b/=c,d<c/60?(c="\u2033",b*=3600):d<c?(c="\u2032",b*=60):c="\u00b0"):"imperial"==e?.9144>d?(c="in",b/=.0254):1609.344>d?(c="ft",b/=.3048):(c="mi",b/=1609.344):"nautical"==e?(b/=1852,c="nm"):"metric"==e?1>d?(c="mm",b*=1E3):1E3>d?c="m":(c="km",b/=1E3):"us"==e?.9144>d?(c="in",b*=39.37):1609.344>d?(c="ft",b/=.30480061):(c="mi",b/=1609.3472):qa(!1,33);for(var e=3*Math.floor(Math.log(a.o*
b)/Math.log(10)),f;;){f=Hk[(e%3+3)%3]*Math.pow(10,Math.floor(e/3));d=Math.round(f/b);if(isNaN(d)){a.c.style.display="none";a.l=!1;return}if(d>=a.o)break;++e}b=f+" "+c;a.A!=b&&(a.j.innerHTML=b,a.A=b);a.C!=d&&(a.j.style.width=d+"px",a.C=d);a.l||(a.c.style.display="",a.l=!0)}else a.l&&(a.c.style.display="none",a.l=!1)}var Gk="units";function Jk(a){a=a?a:{};this.c=void 0;this.l=Kk;this.A=this.o=0;this.R=null;this.ea=!1;this.Y=void 0!==a.duration?a.duration:200;var b=void 0!==a.className?a.className:"ol-zoomslider",c=document.createElement("button");c.setAttribute("type","button");c.className=b+"-thumb ol-unselectable";var d=document.createElement("div");d.className=b+" ol-unselectable ol-control";d.appendChild(c);this.j=new re(d);B(this.j,"pointerdown",this.el,this);B(this.j,"pointermove",this.cl,this);B(this.j,"pointerup",this.dl,
this);B(d,"click",this.bl,this);B(c,"click",Cc);ad.call(this,{element:d,render:a.render?a.render:Lk})}u(Jk,ad);Jk.prototype.ra=function(){Ac(this.j);ad.prototype.ra.call(this)};var Kk=0;k=Jk.prototype;k.setMap=function(a){ad.prototype.setMap.call(this,a);a&&a.render()};
function Lk(a){if(a.frameState){if(!this.ea){var b=this.element,c=b.offsetWidth,d=b.offsetHeight,e=b.firstElementChild,f=getComputedStyle(e),b=e.offsetWidth+parseFloat(f.marginRight)+parseFloat(f.marginLeft),e=e.offsetHeight+parseFloat(f.marginTop)+parseFloat(f.marginBottom);this.R=[b,e];c>d?(this.l=1,this.A=c-b):(this.l=Kk,this.o=d-e);this.ea=!0}a=a.frameState.viewState.resolution;a!==this.c&&(this.c=a,Mk(this,a))}}
k.bl=function(a){var b=this.a.$();a=Nk(this,wa(1===this.l?(a.offsetX-this.R[0]/2)/this.A:(a.offsetY-this.R[1]/2)/this.o,0,1));b.animate({resolution:b.constrainResolution(a),duration:this.Y,easing:fd})};k.el=function(a){this.u||a.b.target!==this.element.firstElementChild||(Rf(this.a.$(),1,1),this.C=a.clientX,this.G=a.clientY,this.u=!0)};
k.cl=function(a){if(this.u){var b=this.element.firstElementChild;this.c=Nk(this,wa(1===this.l?(a.clientX-this.C+parseInt(b.style.left,10))/this.A:(a.clientY-this.G+parseInt(b.style.top,10))/this.o,0,1));this.a.$().Xc(this.c);Mk(this,this.c);this.C=a.clientX;this.G=a.clientY}};k.dl=function(){if(this.u){var a=this.a.$();Rf(a,1,-1);a.animate({resolution:a.constrainResolution(this.c),duration:this.Y,easing:fd});this.u=!1;this.G=this.C=void 0}};
function Mk(a,b){var c;c=1-Xf(a.a.$())(b);var d=a.element.firstElementChild;1==a.l?d.style.left=a.A*c+"px":d.style.top=a.o*c+"px"}function Nk(a,b){return Wf(a.a.$())(1-b)};function Ok(a){a=a?a:{};this.c=a.extent?a.extent:null;var b=void 0!==a.className?a.className:"ol-zoom-extent",c=void 0!==a.label?a.label:"E",d=void 0!==a.tipLabel?a.tipLabel:"Fit to extent",e=document.createElement("button");e.setAttribute("type","button");e.title=d;e.appendChild("string"===typeof c?document.createTextNode(c):c);B(e,"click",this.l,this);c=document.createElement("div");c.className=b+" ol-unselectable ol-control";c.appendChild(e);ad.call(this,{element:c,target:a.target})}u(Ok,ad);
Ok.prototype.l=function(a){a.preventDefault();a=this.a.$();var b=this.c?this.c:a.o.D();a.Ff(b)};function Pk(a){Gc.call(this);a=a?a:{};this.a=null;B(this,Ic(Qk),this.cm,this);this.Uf(void 0!==a.tracking?a.tracking:!1)}u(Pk,Gc);k=Pk.prototype;k.ra=function(){this.Uf(!1);Gc.prototype.ra.call(this)};
k.qo=function(a){if(null!==a.alpha){var b=Ba(a.alpha);this.set(Rk,b);"boolean"===typeof a.absolute&&a.absolute?this.set(Sk,b):"number"===typeof a.webkitCompassHeading&&-1!=a.webkitCompassAccuracy&&this.set(Sk,Ba(a.webkitCompassHeading))}null!==a.beta&&this.set(Tk,Ba(a.beta));null!==a.gamma&&this.set(Uk,Ba(a.gamma));this.s()};k.jk=function(){return this.get(Rk)};k.mk=function(){return this.get(Tk)};k.uk=function(){return this.get(Uk)};k.bm=function(){return this.get(Sk)};k.Fh=function(){return this.get(Qk)};
k.cm=function(){if(Nd){var a=this.Fh();a&&!this.a?this.a=B(window,"deviceorientation",this.qo,this):a||null===this.a||(rc(this.a),this.a=null)}};k.Uf=function(a){this.set(Qk,a)};var Rk="alpha",Tk="beta",Uk="gamma",Sk="heading",Qk="tracking";function Vk(a){this.g=a.opacity;this.o=a.rotateWithView;this.l=a.rotation;this.c=a.scale;this.v=a.snapToPixel}k=Vk.prototype;k.Pe=function(){return this.g};k.Qe=function(){return this.o};k.Re=function(){return this.l};k.Se=function(){return this.c};k.ve=function(){return this.v};k.rd=function(a){this.g=a};k.Te=function(a){this.l=a};k.sd=function(a){this.c=a};function Wk(a){this.A=this.I=this.i=null;this.Wa=void 0!==a.fill?a.fill:null;this.qa=[0,0];this.b=a.points;this.a=void 0!==a.radius?a.radius:a.radius1;this.f=void 0!==a.radius2?a.radius2:this.a;this.j=void 0!==a.angle?a.angle:0;this.Ya=void 0!==a.stroke?a.stroke:null;this.G=this.ta=this.C=null;this.u=a.atlasManager;Xk(this,this.u);Vk.call(this,{opacity:1,rotateWithView:void 0!==a.rotateWithView?a.rotateWithView:!1,rotation:void 0!==a.rotation?a.rotation:0,scale:1,snapToPixel:void 0!==a.snapToPixel?
a.snapToPixel:!0})}u(Wk,Vk);k=Wk.prototype;k.clone=function(){var a=new Wk({fill:this.Ca()?this.Ca().clone():void 0,points:this.f!==this.a?this.b/2:this.b,radius:this.a,radius2:this.f,angle:this.j,snapToPixel:this.v,stroke:this.Da()?this.Da().clone():void 0,rotation:this.l,rotateWithView:this.o,atlasManager:this.u});a.rd(this.g);a.sd(this.c);return a};k.Hc=function(){return this.C};k.ki=function(){return this.j};k.Ca=function(){return this.Wa};k.cg=function(){return this.A};k.Z=function(){return this.I};
k.ue=function(){return this.G};k.Oe=function(){return 2};k.Pc=function(){return this.qa};k.li=function(){return this.b};k.mi=function(){return this.a};k.sh=function(){return this.f};k.jc=function(){return this.ta};k.Da=function(){return this.Ya};k.zh=function(){};k.load=function(){};k.Yi=function(){};
function Xk(a,b){var c,d="",e="",f=0,g=null,h,l=0;a.Ya&&(h=Vc(a.Ya.a),l=a.Ya.c,void 0===l&&(l=1),g=a.Ya.f,Ld||(g=null),e=a.Ya.l,void 0===e&&(e="round"),d=a.Ya.i,void 0===d&&(d="round"),f=a.Ya.j,void 0===f&&(f=10));var m=2*(a.a+l)+1,d={strokeStyle:h,Vi:l,size:m,lineCap:d,lineDash:g,lineJoin:e,miterLimit:f};void 0===b?(e=Xc(m,m),a.I=e.canvas,c=m=a.I.width,a.ah(d,e,0,0),a.Wa?a.A=a.I:(e=Xc(d.size,d.size),a.A=e.canvas,a.$g(d,e,0,0))):(m=Math.round(m),(e=!a.Wa)&&(c=a.$g.bind(a,d)),a.Ya?(f=a.Ya,void 0===
f.b&&(f.b="s",f.b=f.a?"string"===typeof f.a?f.b+f.a:f.b+w(f.a).toString():f.b+"-",f.b+=","+(void 0!==f.i?f.i.toString():"-")+","+(f.f?f.f.toString():"-")+","+(void 0!==f.g?f.g:"-")+","+(void 0!==f.l?f.l:"-")+","+(void 0!==f.j?f.j.toString():"-")+","+(void 0!==f.c?f.c.toString():"-")),f=f.b):f="-",a.Wa?(g=a.Wa,void 0===g.a&&(g.a=g.b instanceof CanvasPattern||g.b instanceof CanvasGradient?w(g.b).toString():"f"+(g.b?Sc(g.b):"-")),g=g.a):g="-",a.i&&f==a.i[1]&&g==a.i[2]&&a.a==a.i[3]&&a.f==a.i[4]&&a.j==
a.i[5]&&a.b==a.i[6]||(a.i=["r"+f+g+(void 0!==a.a?a.a.toString():"-")+(void 0!==a.f?a.f.toString():"-")+(void 0!==a.j?a.j.toString():"-")+(void 0!==a.b?a.b.toString():"-"),f,g,a.a,a.f,a.j,a.b]),d=b.add(a.i[0],m,m,a.ah.bind(a,d),c),a.I=d.image,a.qa=[d.offsetX,d.offsetY],c=d.image.width,a.A=e?d.Fl:a.I);a.C=[m/2,m/2];a.ta=[m,m];a.G=[c,c]}
k.ah=function(a,b,c,d){var e;b.setTransform(1,0,0,1,0,0);b.translate(c,d);b.beginPath();if(Infinity===this.b)b.arc(a.size/2,a.size/2,this.a,0,2*Math.PI,!0);else for(this.f!==this.a&&(this.b*=2),c=0;c<=this.b;c++)d=2*c*Math.PI/this.b-Math.PI/2+this.j,e=c%2?this.f:this.a,b.lineTo(a.size/2+e*Math.cos(d),a.size/2+e*Math.sin(d));this.Wa&&(b.fillStyle=Vc(this.Wa.b),b.fill());this.Ya&&(b.strokeStyle=a.strokeStyle,b.lineWidth=a.Vi,a.lineDash&&b.setLineDash(a.lineDash),b.lineCap=a.lineCap,b.lineJoin=a.lineJoin,
b.miterLimit=a.miterLimit,b.stroke());b.closePath()};
k.$g=function(a,b,c,d){b.setTransform(1,0,0,1,0,0);b.translate(c,d);b.beginPath();if(Infinity===this.b)b.arc(a.size/2,a.size/2,this.a,0,2*Math.PI,!0);else{this.f!==this.a&&(this.b*=2);var e;for(c=0;c<=this.b;c++)e=2*c*Math.PI/this.b-Math.PI/2+this.j,d=c%2?this.f:this.a,b.lineTo(a.size/2+d*Math.cos(e),a.size/2+d*Math.sin(e))}b.fillStyle=Nh;b.fill();this.Ya&&(b.strokeStyle=a.strokeStyle,b.lineWidth=a.Vi,a.lineDash&&b.setLineDash(a.lineDash),b.stroke());b.closePath()};function Yk(a){a=a||{};Wk.call(this,{points:Infinity,fill:a.fill,radius:a.radius,snapToPixel:a.snapToPixel,stroke:a.stroke,atlasManager:a.atlasManager})}u(Yk,Wk);Yk.prototype.clone=function(){var a=new Yk({fill:this.Ca()?this.Ca().clone():void 0,stroke:this.Da()?this.Da().clone():void 0,radius:this.a,snapToPixel:this.v,atlasManager:this.u});a.rd(this.g);a.sd(this.c);return a};Yk.prototype.Wc=function(a){this.a=a;Xk(this,this.u)};function Zk(a){a=a||{};this.b=void 0!==a.color?a.color:null;this.a=void 0}Zk.prototype.clone=function(){var a=this.b;return new Zk({color:a&&a.slice?a.slice():a||void 0})};Zk.prototype.f=function(){return this.b};Zk.prototype.c=function(a){this.b=a;this.a=void 0};function $k(a){a=a||{};this.Gc=null;this.Ra=al;void 0!==a.geometry&&this.Sa(a.geometry);this.Wa=void 0!==a.fill?a.fill:null;this.M=void 0!==a.image?a.image:null;this.Ya=void 0!==a.stroke?a.stroke:null;this.Fa=void 0!==a.text?a.text:null;this.kj=a.zIndex}k=$k.prototype;
k.clone=function(){var a=this.U();a&&a.clone&&(a=a.clone());return new $k({geometry:a,fill:this.Ca()?this.Ca().clone():void 0,image:this.Z()?this.Z().clone():void 0,stroke:this.Da()?this.Da().clone():void 0,text:this.Pa()?this.Pa().clone():void 0,zIndex:this.za()})};k.U=function(){return this.Gc};k.vk=function(){return this.Ra};k.Ca=function(){return this.Wa};k.cf=function(a){this.Wa=a};k.Z=function(){return this.M};k.zg=function(a){this.M=a};k.Da=function(){return this.Ya};
k.df=function(a){this.Ya=a};k.Pa=function(){return this.Fa};k.ef=function(a){this.Fa=a};k.za=function(){return this.kj};k.Sa=function(a){"function"===typeof a?this.Ra=a:"string"===typeof a?this.Ra=function(b){return b.get(a)}:a?a&&(this.Ra=function(){return a}):this.Ra=al;this.Gc=a};k.Wb=function(a){this.kj=a};function bl(a){if("function"!==typeof a){var b;Array.isArray(a)?b=a:(qa(a instanceof $k,41),b=[a]);a=function(){return b}}return a}var cl=null;
function dl(){if(!cl){var a=new Zk({color:"rgba(255,255,255,0.4)"}),b=new rj({color:"#3399CC",width:1.25});cl=[new $k({image:new Yk({fill:a,stroke:b,radius:5}),fill:a,stroke:b})]}return cl}
function el(){var a={},b=[255,255,255,1],c=[0,153,255,1];a.Polygon=[new $k({fill:new Zk({color:[255,255,255,.5]})})];a.MultiPolygon=a.Polygon;a.LineString=[new $k({stroke:new rj({color:b,width:5})}),new $k({stroke:new rj({color:c,width:3})})];a.MultiLineString=a.LineString;a.Circle=a.Polygon.concat(a.LineString);a.Point=[new $k({image:new Yk({radius:6,fill:new Zk({color:c}),stroke:new rj({color:b,width:1.5})}),zIndex:Infinity})];a.MultiPoint=a.Point;a.GeometryCollection=a.Polygon.concat(a.LineString,
a.Point);return a}function al(a){return a.U()};function H(a){Gc.call(this);this.a=void 0;this.c="geometry";this.g=null;this.l=void 0;this.i=null;B(this,Ic(this.c),this.ye,this);void 0!==a&&(a instanceof cf||!a?this.Sa(a):this.H(a))}u(H,Gc);k=H.prototype;k.clone=function(){var a=new H(this.N());a.Vc(this.c);var b=this.U();b&&a.Sa(b.clone());(b=this.g)&&a.Vf(b);return a};k.U=function(){return this.get(this.c)};k.dm=function(){return this.a};k.wk=function(){return this.c};k.em=function(){return this.g};k.Nc=function(){return this.l};k.gl=function(){this.s()};
k.ye=function(){this.i&&(rc(this.i),this.i=null);var a=this.U();a&&(this.i=B(a,"change",this.gl,this));this.s()};k.Sa=function(a){this.set(this.c,a)};k.Vf=function(a){this.l=(this.g=a)?fl(a):void 0;this.s()};k.kc=function(a){this.a=a;this.s()};k.Vc=function(a){xc(this,Ic(this.c),this.ye,this);this.c=a;B(this,Ic(this.c),this.ye,this);this.ye()};
function fl(a){var b;if("function"===typeof a)2==a.length?b=function(b){return a(this,b)}:b=a;else{var c;Array.isArray(a)?c=a:(qa(a instanceof $k,41),c=[a]);b=function(){return c}}return b};var gl=document.implementation.createDocument("","",null);function il(a,b){return gl.createElementNS(a,b)}function jl(a,b){return kl(a,b,[]).join("")}function kl(a,b,c){if(a.nodeType==Node.CDATA_SECTION_NODE||a.nodeType==Node.TEXT_NODE)b?c.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g,"")):c.push(a.nodeValue);else for(a=a.firstChild;a;a=a.nextSibling)kl(a,b,c);return c}function ll(a){return a instanceof Document}function ml(a){return a instanceof Node}
function nl(a){return(new DOMParser).parseFromString(a,"application/xml")}function pl(a,b){return function(c,d){var e=a.call(b,c,d);void 0!==e&&ga(d[d.length-1],e)}}function ql(a,b){return function(c,d){var e=a.call(void 0!==b?b:this,c,d);void 0!==e&&d[d.length-1].push(e)}}function rl(a,b){return function(c,d){var e=a.call(void 0!==b?b:this,c,d);void 0!==e&&(d[d.length-1]=e)}}
function sl(a){return function(b,c){var d=a.call(this,b,c);if(void 0!==d){var e=c[c.length-1],f=b.localName,g;f in e?g=e[f]:g=e[f]=[];g.push(d)}}}function I(a,b){return function(c,d){var e=a.call(this,c,d);void 0!==e&&(d[d.length-1][void 0!==b?b:c.localName]=e)}}function J(a,b){return function(c,d,e){a.call(void 0!==b?b:this,c,d,e);e[e.length-1].node.appendChild(c)}}
function tl(a){var b,c;return function(d,e,f){if(!b){b={};var g={};g[d.localName]=a;b[d.namespaceURI]=g;c=ul(d.localName)}vl(b,c,e,f)}}function ul(a,b){return function(c,d,e){c=d[d.length-1].node;d=a;void 0===d&&(d=e);e=b;void 0===b&&(e=c.namespaceURI);return il(e,d)}}var wl=ul();function xl(a,b){for(var c=b.length,d=Array(c),e=0;e<c;++e)d[e]=a[b[e]];return d}function K(a,b,c){c=void 0!==c?c:{};var d,e;d=0;for(e=a.length;d<e;++d)c[a[d]]=b;return c}
function yl(a,b,c,d){for(b=b.firstElementChild;b;b=b.nextElementSibling){var e=a[b.namespaceURI];void 0!==e&&(e=e[b.localName])&&e.call(d,b,c)}}function L(a,b,c,d,e){d.push(a);yl(b,c,d,e);return d.pop()}function vl(a,b,c,d,e,f){for(var g=(void 0!==e?e:c).length,h,l,m=0;m<g;++m)h=c[m],void 0!==h&&(l=b.call(f,h,d,void 0!==e?e[m]:void 0),void 0!==l&&a[l.namespaceURI][l.localName].call(f,l,h,d))}function zl(a,b,c,d,e,f,g){e.push(a);vl(b,c,d,e,f,g);e.pop()};function Al(a,b,c,d){return function(e,f,g){var h=new XMLHttpRequest;h.open("GET","function"===typeof a?a(e,f,g):a,!0);"arraybuffer"==b.T()&&(h.responseType="arraybuffer");h.onload=function(){if(!h.status||200<=h.status&&300>h.status){var a=b.T(),e;"json"==a||"text"==a?e=h.responseText:"xml"==a?(e=h.responseXML)||(e=nl(h.responseText)):"arraybuffer"==a&&(e=h.response);e?c.call(this,b.Qa(e,{featureProjection:g}),b.kb(e)):d.call(this)}else d.call(this)}.bind(this);h.send()}}
function Bl(a,b){return Al(a,b,function(a){this.dd(a)},na)};function Cl(){this.g=this.defaultDataProjection=null}function Dl(a,b,c){var d;c&&(d={dataProjection:c.dataProjection?c.dataProjection:a.kb(b),featureProjection:c.featureProjection});return El(a,d)}function El(a,b){return pb({dataProjection:a.defaultDataProjection,featureProjection:a.g},b)}
function Fl(a,b,c){var d=c?Gb(c.featureProjection):null,e=c?Gb(c.dataProjection):null,f;d&&e&&!Tb(d,e)?a instanceof cf?f=(b?a.clone():a).tb(b?d:e,b?e:d):f=Xb(b?a.slice():a,b?d:e,b?e:d):f=a;if(b&&c&&c.decimals){var g=Math.pow(10,c.decimals);a=function(a){for(var b=0,c=a.length;b<c;++b)a[b]=Math.round(a[b]*g)/g;return a};Array.isArray(f)?a(f):f.Dc(a)}return f};function Gl(){Cl.call(this)}u(Gl,Cl);function Hl(a){return"string"===typeof a?(a=JSON.parse(a))?a:null:null!==a?a:null}k=Gl.prototype;k.T=function(){return"json"};k.Ub=function(a,b){return this.Sc(Hl(a),Dl(this,a,b))};k.Qa=function(a,b){return this.kg(Hl(a),Dl(this,a,b))};k.Tc=function(a,b){return this.og(Hl(a),Dl(this,a,b))};k.kb=function(a){return this.rg(Hl(a))};k.yd=function(a,b){return JSON.stringify(this.ad(a,b))};k.Xb=function(a,b){return JSON.stringify(this.ce(a,b))};
k.bd=function(a,b){return JSON.stringify(this.ee(a,b))};function Il(a,b,c,d,e,f){var g=NaN,h=NaN,l=(c-b)/d;if(1===l)g=a[b],h=a[b+1];else if(2==l)g=(1-e)*a[b]+e*a[b+d],h=(1-e)*a[b+1]+e*a[b+d+1];else if(l){var h=a[b],l=a[b+1],m=0,g=[0],p;for(p=b+d;p<c;p+=d){var n=a[p],q=a[p+1],m=m+Math.sqrt((n-h)*(n-h)+(q-l)*(q-l));g.push(m);h=n;l=q}c=e*m;l=0;m=g.length;for(p=!1;l<m;)e=l+(m-l>>1),h=+da(g[e],c),0>h?l=e+1:(m=e,p=!h);e=p?l:~l;0>e?(c=(c-g[-e-2])/(g[-e-1]-g[-e-2]),b+=(-e-2)*d,g=Da(a[b],a[b+d],c),h=Da(a[b+1],a[b+d+1],c)):(g=a[b+e*d],h=a[b+e*d+1])}return f?(f[0]=
g,f[1]=h,f):[g,h]}function Jl(a,b,c,d,e,f){if(c==b)return null;if(e<a[b+d-1])return f?(c=a.slice(b,b+d),c[d-1]=e,c):null;if(a[c-1]<e)return f?(c=a.slice(c-d,c),c[d-1]=e,c):null;if(e==a[b+d-1])return a.slice(b,b+d);b/=d;for(c/=d;b<c;)f=b+c>>1,e<a[(f+1)*d-1]?c=f:b=f+1;c=a[b*d-1];if(e==c)return a.slice((b-1)*d,(b-1)*d+d);f=(e-c)/(a[(b+1)*d-1]-c);c=[];var g;for(g=0;g<d-1;++g)c.push(Da(a[(b-1)*d+g],a[b*d+g],f));c.push(e);return c}
function Kl(a,b,c,d,e,f){var g=0;if(f)return Jl(a,g,b[b.length-1],c,d,e);if(d<a[c-1])return e?(a=a.slice(0,c),a[c-1]=d,a):null;if(a[a.length-1]<d)return e?(a=a.slice(a.length-c),a[c-1]=d,a):null;e=0;for(f=b.length;e<f;++e){var h=b[e];if(g!=h){if(d<a[g+c-1])break;else if(d<=a[h-1])return Jl(a,g,h,c,d,!1);g=h}}return null};function M(a,b){ff.call(this);this.c=null;this.u=this.A=this.l=-1;this.pa(a,b)}u(M,ff);k=M.prototype;k.Tj=function(a){this.B?ga(this.B,a):this.B=a.slice();this.s()};k.clone=function(){var a=new M(null);a.ca(this.ka,this.B.slice());return a};k.Gb=function(a,b,c,d){if(d<Oa(this.D(),a,b))return d;this.u!=this.f&&(this.A=Math.sqrt(nf(this.B,0,this.B.length,this.a,0)),this.u=this.f);return pf(this.B,0,this.B.length,this.a,this.A,!1,a,b,c,d)};
k.gk=function(a,b){return Ef(this.B,0,this.B.length,this.a,a,b)};k.Im=function(a,b){return"XYM"!=this.ka&&"XYZM"!=this.ka?null:Jl(this.B,0,this.B.length,this.a,a,void 0!==b?b:!1)};k.X=function(){return uf(this.B,0,this.B.length,this.a)};k.hh=function(a,b){return Il(this.B,0,this.B.length,this.a,a,b)};k.Jm=function(){var a=this.B,b=this.a,c=a[0],d=a[1],e=0,f;for(f=0+b;f<this.B.length;f+=b)var g=a[f],h=a[f+1],e=e+Math.sqrt((g-c)*(g-c)+(h-d)*(h-d)),c=g,d=h;return e};
function Zh(a){a.l!=a.f&&(a.c=a.hh(.5,a.c),a.l=a.f);return a.c}k.kd=function(a){var b=[];b.length=wf(this.B,0,this.B.length,this.a,a,b,0);a=new M(null);a.ca("XY",b);return a};k.T=function(){return"LineString"};k.Xa=function(a){return Ff(this.B,0,this.B.length,this.a,a)};k.pa=function(a,b){a?(jf(this,b,a,1),this.B||(this.B=[]),this.B.length=sf(this.B,0,a,this.a),this.s()):this.ca("XY",null)};k.ca=function(a,b){hf(this,a,b);this.s()};function N(a,b){ff.call(this);this.c=[];this.l=this.u=-1;this.pa(a,b)}u(N,ff);k=N.prototype;k.Uj=function(a){this.B?ga(this.B,a.ha().slice()):this.B=a.ha().slice();this.c.push(this.B.length);this.s()};k.clone=function(){var a=new N(null);a.ca(this.ka,this.B.slice(),this.c.slice());return a};k.Gb=function(a,b,c,d){if(d<Oa(this.D(),a,b))return d;this.l!=this.f&&(this.u=Math.sqrt(of(this.B,0,this.c,this.a,0)),this.l=this.f);return qf(this.B,0,this.c,this.a,this.u,!1,a,b,c,d)};
k.Lm=function(a,b,c){return"XYM"!=this.ka&&"XYZM"!=this.ka||!this.B.length?null:Kl(this.B,this.c,this.a,a,void 0!==b?b:!1,void 0!==c?c:!1)};k.X=function(){return vf(this.B,0,this.c,this.a)};k.Rb=function(){return this.c};k.Dk=function(a){if(0>a||this.c.length<=a)return null;var b=new M(null);b.ca(this.ka,this.B.slice(a?this.c[a-1]:0,this.c[a]));return b};
k.hd=function(){var a=this.B,b=this.c,c=this.ka,d=[],e=0,f,g;f=0;for(g=b.length;f<g;++f){var h=b[f],l=new M(null);l.ca(c,a.slice(e,h));d.push(l);e=h}return d};function $h(a){var b=[],c=a.B,d=0,e=a.c;a=a.a;var f,g;f=0;for(g=e.length;f<g;++f){var h=e[f],d=Il(c,d,h,a,.5);ga(b,d);d=h}return b}k.kd=function(a){var b=[],c=[],d=this.B,e=this.c,f=this.a,g=0,h=0,l,m;l=0;for(m=e.length;l<m;++l){var p=e[l],h=wf(d,g,p,f,a,b,h);c.push(h);g=p}b.length=h;a=new N(null);a.ca("XY",b,c);return a};k.T=function(){return"MultiLineString"};
k.Xa=function(a){a:{var b=this.B,c=this.c,d=this.a,e=0,f,g;f=0;for(g=c.length;f<g;++f){if(Ff(b,e,c[f],d,a)){a=!0;break a}e=c[f]}a=!1}return a};k.pa=function(a,b){if(a){jf(this,b,a,2);this.B||(this.B=[]);var c=tf(this.B,0,a,this.a,this.c);this.B.length=c.length?c[c.length-1]:0;this.s()}else this.ca("XY",null,this.c)};k.ca=function(a,b,c){hf(this,a,b);this.c=c;this.s()};
function Ll(a,b){var c=a.ka,d=[],e=[],f,g;f=0;for(g=b.length;f<g;++f){var h=b[f];f||(c=h.ka);ga(d,h.ha());e.push(d.length)}a.ca(c,d,e)};function O(a,b){ff.call(this);this.pa(a,b)}u(O,ff);k=O.prototype;k.Wj=function(a){this.B?ga(this.B,a.ha()):this.B=a.ha().slice();this.s()};k.clone=function(){var a=new O(null);a.ca(this.ka,this.B.slice());return a};k.Gb=function(a,b,c,d){if(d<Oa(this.D(),a,b))return d;var e=this.B,f=this.a,g,h,l;g=0;for(h=e.length;g<h;g+=f)if(l=Aa(a,b,e[g],e[g+1]),l<d){d=l;for(l=0;l<f;++l)c[l]=e[g+l];c.length=f}return d};k.X=function(){return uf(this.B,0,this.B.length,this.a)};
k.Ok=function(a){var b=this.B?this.B.length/this.a:0;if(0>a||b<=a)return null;b=new E(null);b.ca(this.ka,this.B.slice(a*this.a,(a+1)*this.a));return b};k.Ie=function(){var a=this.B,b=this.ka,c=this.a,d=[],e,f;e=0;for(f=a.length;e<f;e+=c){var g=new E(null);g.ca(b,a.slice(e,e+c));d.push(g)}return d};k.T=function(){return"MultiPoint"};k.Xa=function(a){var b=this.B,c=this.a,d,e,f,g;d=0;for(e=b.length;d<e;d+=c)if(f=b[d],g=b[d+1],Sa(a,f,g))return!0;return!1};
k.pa=function(a,b){a?(jf(this,b,a,1),this.B||(this.B=[]),this.B.length=sf(this.B,0,a,this.a),this.s()):this.ca("XY",null)};k.ca=function(a,b){hf(this,a,b);this.s()};function P(a,b){ff.call(this);this.c=[];this.u=-1;this.A=null;this.R=this.C=this.G=-1;this.l=null;this.pa(a,b)}u(P,ff);k=P.prototype;k.Xj=function(a){if(this.B){var b=this.B.length;ga(this.B,a.ha());a=a.Rb().slice();var c,d;c=0;for(d=a.length;c<d;++c)a[c]+=b}else this.B=a.ha().slice(),a=a.Rb().slice(),this.c.push();this.c.push(a);this.s()};k.clone=function(){for(var a=new P(null),b=this.c.length,c=Array(b),d=0;d<b;++d)c[d]=this.c[d].slice();Ml(a,this.ka,this.B.slice(),c);return a};
k.Gb=function(a,b,c,d){if(d<Oa(this.D(),a,b))return d;if(this.C!=this.f){var e=this.c,f=0,g=0,h,l;h=0;for(l=e.length;h<l;++h)var m=e[h],g=of(this.B,f,m,this.a,g),f=m[m.length-1];this.G=Math.sqrt(g);this.C=this.f}e=ai(this);f=this.c;g=this.a;h=this.G;l=0;var m=[NaN,NaN],p,n;p=0;for(n=f.length;p<n;++p){var q=f[p];d=qf(e,l,q,g,h,!0,a,b,c,d,m);l=q[q.length-1]}return d};
k.Oc=function(a,b){var c;a:{c=ai(this);var d=this.c,e=0;if(d.length){var f,g;f=0;for(g=d.length;f<g;++f){var h=d[f];if(Cf(c,e,h,this.a,a,b)){c=!0;break a}e=h[h.length-1]}}c=!1}return c};k.Mm=function(){var a=ai(this),b=this.c,c=0,d=0,e,f;e=0;for(f=b.length;e<f;++e)var g=b[e],d=d+lf(a,c,g,this.a),c=g[g.length-1];return d};
k.X=function(a){var b;void 0!==a?(b=ai(this).slice(),Kf(b,this.c,this.a,a)):b=this.B;a=b;b=this.c;var c=this.a,d=0,e=[],f=0,g,h;g=0;for(h=b.length;g<h;++g){var l=b[g];e[f++]=vf(a,d,l,c,e[f]);d=l[l.length-1]}e.length=f;return e};
function bi(a){if(a.u!=a.f){var b=a.B,c=a.c,d=a.a,e=0,f=[],g,h;g=0;for(h=c.length;g<h;++g){var l=c[g],e=Xa(b,e,l[0],d);f.push((e[0]+e[2])/2,(e[1]+e[3])/2);e=l[l.length-1]}b=ai(a);c=a.c;d=a.a;g=0;h=[];l=0;for(e=c.length;l<e;++l){var m=c[l];h=Df(b,g,m,d,f,2*l,h);g=m[m.length-1]}a.A=h;a.u=a.f}return a.A}k.zk=function(){var a=new O(null);a.ca("XY",bi(this).slice());return a};
function ai(a){if(a.R!=a.f){var b=a.B,c;a:{c=a.c;var d,e;d=0;for(e=c.length;d<e;++d)if(!If(b,c[d],a.a,void 0)){c=!1;break a}c=!0}c?a.l=b:(a.l=b.slice(),a.l.length=Kf(a.l,a.c,a.a));a.R=a.f}return a.l}k.kd=function(a){var b=[],c=[],d=this.B,e=this.c,f=this.a;a=Math.sqrt(a);var g=0,h=0,l,m;l=0;for(m=e.length;l<m;++l){var p=e[l],n=[],h=xf(d,g,p,f,a,b,h,n);c.push(n);g=p[p.length-1]}b.length=h;d=new P(null);Ml(d,"XY",b,c);return d};
k.Pk=function(a){if(0>a||this.c.length<=a)return null;var b;a?(b=this.c[a-1],b=b[b.length-1]):b=0;a=this.c[a].slice();var c=a[a.length-1];if(b){var d,e;d=0;for(e=a.length;d<e;++d)a[d]-=b}d=new F(null);d.ca(this.ka,this.B.slice(b,c),a);return d};k.Od=function(){var a=this.ka,b=this.B,c=this.c,d=[],e=0,f,g,h,l;f=0;for(g=c.length;f<g;++f){var m=c[f].slice(),p=m[m.length-1];if(e)for(h=0,l=m.length;h<l;++h)m[h]-=e;h=new F(null);h.ca(a,b.slice(e,p),m);d.push(h);e=p}return d};k.T=function(){return"MultiPolygon"};
k.Xa=function(a){a:{var b=ai(this),c=this.c,d=this.a,e=0,f,g;f=0;for(g=c.length;f<g;++f){var h=c[f];if(Gf(b,e,h,d,a)){a=!0;break a}e=h[h.length-1]}a=!1}return a};k.pa=function(a,b){if(a){jf(this,b,a,3);this.B||(this.B=[]);var c=this.B,d=this.a,e=this.c,f=0,e=e?e:[],g=0,h,l;h=0;for(l=a.length;h<l;++h)f=tf(c,f,a[h],d,e[g]),e[g++]=f,f=f[f.length-1];e.length=g;e.length?(c=e[e.length-1],this.B.length=c.length?c[c.length-1]:0):this.B.length=0;this.s()}else Ml(this,"XY",null,this.c)};
function Ml(a,b,c,d){hf(a,b,c);a.c=d;a.s()}function Nl(a,b){var c=a.ka,d=[],e=[],f,g,h;f=0;for(g=b.length;f<g;++f){var l=b[f];f||(c=l.ka);var m=d.length;h=l.Rb();var p,n;p=0;for(n=h.length;p<n;++p)h[p]+=m;ga(d,l.ha());e.push(h)}Ml(a,c,d,e)};function Ol(a){a=a?a:{};Cl.call(this);this.b=a.geometryName}u(Ol,Gl);
function Pl(a,b){if(!a)return null;var c;if("number"===typeof a.x&&"number"===typeof a.y)c="Point";else if(a.points)c="MultiPoint";else if(a.paths)c=1===a.paths.length?"LineString":"MultiLineString";else if(a.rings){var d=a.rings,e=Ql(a),f=[],g=[];c=[];var h,l;h=0;for(l=d.length;h<l;++h)f.length=0,sf(f,0,d[h],e.length),Hf(f,0,f.length,e.length)?g.push([d[h]]):c.push(d[h]);for(;c.length;){d=c.shift();e=!1;for(h=g.length-1;0<=h;h--)if(Ta((new yf(g[h][0])).D(),(new yf(d)).D())){g[h].push(d);e=!0;break}e||
g.push([d.reverse()])}a=pb({},a);1===g.length?(c="Polygon",a.rings=g[0]):(c="MultiPolygon",a.rings=g)}return Fl((0,Rl[c])(a),!1,b)}function Ql(a){var b="XY";!0===a.hasZ&&!0===a.hasM?b="XYZM":!0===a.hasZ?b="XYZ":!0===a.hasM&&(b="XYM");return b}function Sl(a){a=a.ka;return{hasZ:"XYZ"===a||"XYZM"===a,hasM:"XYM"===a||"XYZM"===a}}
var Rl={Point:function(a){return void 0!==a.m&&void 0!==a.z?new E([a.x,a.y,a.z,a.m],"XYZM"):void 0!==a.z?new E([a.x,a.y,a.z],"XYZ"):void 0!==a.m?new E([a.x,a.y,a.m],"XYM"):new E([a.x,a.y])},LineString:function(a){return new M(a.paths[0],Ql(a))},Polygon:function(a){return new F(a.rings,Ql(a))},MultiPoint:function(a){return new O(a.points,Ql(a))},MultiLineString:function(a){return new N(a.paths,Ql(a))},MultiPolygon:function(a){return new P(a.rings,Ql(a))}},Tl={Point:function(a){var b=a.X(),c;a=a.ka;
"XYZ"===a?c={x:b[0],y:b[1],z:b[2]}:"XYM"===a?c={x:b[0],y:b[1],m:b[2]}:"XYZM"===a?c={x:b[0],y:b[1],z:b[2],m:b[3]}:"XY"===a?c={x:b[0],y:b[1]}:qa(!1,34);return c},LineString:function(a){var b=Sl(a);return{hasZ:b.hasZ,hasM:b.hasM,paths:[a.X()]}},Polygon:function(a){var b=Sl(a);return{hasZ:b.hasZ,hasM:b.hasM,rings:a.X(!1)}},MultiPoint:function(a){var b=Sl(a);return{hasZ:b.hasZ,hasM:b.hasM,points:a.X()}},MultiLineString:function(a){var b=Sl(a);return{hasZ:b.hasZ,hasM:b.hasM,paths:a.X()}},MultiPolygon:function(a){var b=
Sl(a);a=a.X(!1);for(var c=[],d=0;d<a.length;d++)for(var e=a[d].length-1;0<=e;e--)c.push(a[d][e]);return{hasZ:b.hasZ,hasM:b.hasM,rings:c}}};k=Ol.prototype;k.Sc=function(a,b){var c=Pl(a.geometry,b),d=new H;this.b&&d.Vc(this.b);d.Sa(c);b&&b.Rf&&a.attributes[b.Rf]&&d.kc(a.attributes[b.Rf]);a.attributes&&d.H(a.attributes);return d};
k.kg=function(a,b){var c=b?b:{};if(a.features){var d=[],e=a.features,f,g;c.Rf=a.objectIdFieldName;f=0;for(g=e.length;f<g;++f)d.push(this.Sc(e[f],c));return d}return[this.Sc(a,c)]};k.og=function(a,b){return Pl(a,b)};k.rg=function(a){return a.spatialReference&&a.spatialReference.wkid?Gb("EPSG:"+a.spatialReference.wkid):null};function Ul(a,b){return(0,Tl[a.T()])(Fl(a,!0,b),b)}k.ee=function(a,b){return Ul(a,El(this,b))};
k.ad=function(a,b){b=El(this,b);var c={},d=a.U();d&&(c.geometry=Ul(d,b));d=a.N();delete d[a.c];c.attributes=sb(d)?{}:d;b&&b.featureProjection&&(c.spatialReference={wkid:Gb(b.featureProjection).nb.split(":").pop()});return c};k.ce=function(a,b){b=El(this,b);var c=[],d,e;d=0;for(e=a.length;d<e;++d)c.push(this.ad(a[d],b));return{features:c}};function Vl(a){this.Bc=a};function Wl(a,b){this.Bc=a;this.b=Array.prototype.slice.call(arguments,1);qa(2<=this.b.length,57)}u(Wl,Vl);function Xl(a){var b=["And"].concat(Array.prototype.slice.call(arguments));Wl.apply(this,b)}u(Xl,Wl);function Yl(a,b,c){this.Bc="BBOX";this.geometryName=a;this.extent=b;this.srsName=c}u(Yl,Vl);function Zl(a,b){this.Bc=a;this.b=b}u(Zl,Vl);function $l(a,b,c,d){Zl.call(this,a,b);this.f=c;this.a=d}u($l,Zl);function am(a,b,c){$l.call(this,"PropertyIsEqualTo",a,b,c)}u(am,$l);function bm(a,b){$l.call(this,"PropertyIsGreaterThan",a,b)}u(bm,$l);function cm(a,b){$l.call(this,"PropertyIsGreaterThanOrEqualTo",a,b)}u(cm,$l);function dm(a,b,c,d){this.Bc=a;this.geometryName=b||"the_geom";this.geometry=c;this.srsName=d}u(dm,Vl);function em(a,b,c){dm.call(this,"Intersects",a,b,c)}u(em,dm);function fm(a,b,c){Zl.call(this,"PropertyIsBetween",a);this.a=b;this.f=c}u(fm,Zl);function gm(a,b,c,d,e,f){Zl.call(this,"PropertyIsLike",a);this.c=b;this.g=void 0!==c?c:"*";this.i=void 0!==d?d:".";this.f=void 0!==e?e:"!";this.a=f}u(gm,Zl);function hm(a){Zl.call(this,"PropertyIsNull",a)}u(hm,Zl);function im(a,b){$l.call(this,"PropertyIsLessThan",a,b)}u(im,$l);function jm(a,b){$l.call(this,"PropertyIsLessThanOrEqualTo",a,b)}u(jm,$l);function km(a){this.Bc="Not";this.condition=a}u(km,Vl);function lm(a,b,c){$l.call(this,"PropertyIsNotEqualTo",a,b,c)}u(lm,$l);function mm(a){var b=["Or"].concat(Array.prototype.slice.call(arguments));Wl.apply(this,b)}u(mm,Wl);function nm(a,b,c){dm.call(this,"Within",a,b,c)}u(nm,dm);function om(a){var b=[null].concat(Array.prototype.slice.call(arguments));return new (Function.prototype.bind.apply(Xl,b))}function pm(a,b,c){return new Yl(a,b,c)};function qm(a){cf.call(this);this.a=a?a:null;rm(this)}u(qm,cf);function sm(a){var b=[],c,d;c=0;for(d=a.length;c<d;++c)b.push(a[c].clone());return b}function tm(a){var b,c;if(a.a)for(b=0,c=a.a.length;b<c;++b)xc(a.a[b],"change",a.s,a)}function rm(a){var b,c;if(a.a)for(b=0,c=a.a.length;b<c;++b)B(a.a[b],"change",a.s,a)}k=qm.prototype;k.clone=function(){var a=new qm(null);a.Ji(this.a);return a};
k.Gb=function(a,b,c,d){if(d<Oa(this.D(),a,b))return d;var e=this.a,f,g;f=0;for(g=e.length;f<g;++f)d=e[f].Gb(a,b,c,d);return d};k.Oc=function(a,b){var c=this.a,d,e;d=0;for(e=c.length;d<e;++d)if(c[d].Oc(a,b))return!0;return!1};k.ne=function(a){Va(Infinity,Infinity,-Infinity,-Infinity,a);for(var b=this.a,c=0,d=b.length;c<d;++c)$a(a,b[c].D());return a};k.If=function(){return sm(this.a)};
k.Qd=function(a){this.j!=this.f&&(qb(this.i),this.g=0,this.j=this.f);if(0>a||this.g&&a<this.g)return this;var b=a.toString();if(this.i.hasOwnProperty(b))return this.i[b];var c=[],d=this.a,e=!1,f,g;f=0;for(g=d.length;f<g;++f){var h=d[f],l=h.Qd(a);c.push(l);l!==h&&(e=!0)}if(e)return a=new qm(null),tm(a),a.a=c,rm(a),a.s(),this.i[b]=a;this.g=a;return this};k.T=function(){return"GeometryCollection"};k.Xa=function(a){var b=this.a,c,d;c=0;for(d=b.length;c<d;++c)if(b[c].Xa(a))return!0;return!1};
k.rotate=function(a,b){for(var c=this.a,d=0,e=c.length;d<e;++d)c[d].rotate(a,b);this.s()};k.scale=function(a,b,c){c||(c=jb(this.D()));for(var d=this.a,e=0,f=d.length;e<f;++e)d[e].scale(a,b,c);this.s()};k.Ji=function(a){a=sm(a);tm(this);this.a=a;rm(this);this.s()};k.Dc=function(a){var b=this.a,c,d;c=0;for(d=b.length;c<d;++c)b[c].Dc(a);this.s()};k.translate=function(a,b){var c=this.a,d,e;d=0;for(e=c.length;d<e;++d)c[d].translate(a,b);this.s()};k.ra=function(){tm(this);cf.prototype.ra.call(this)};function um(a){a=a?a:{};Cl.call(this);this.defaultDataProjection=Gb(a.defaultDataProjection?a.defaultDataProjection:"EPSG:4326");a.featureProjection&&(this.g=Gb(a.featureProjection));this.b=a.geometryName}u(um,Gl);function vm(a,b){return a?Fl((0,wm[a.type])(a),!1,b):null}function xm(a,b){return(0,ym[a.T()])(Fl(a,!0,b),b)}
var wm={Point:function(a){return new E(a.coordinates)},LineString:function(a){return new M(a.coordinates)},Polygon:function(a){return new F(a.coordinates)},MultiPoint:function(a){return new O(a.coordinates)},MultiLineString:function(a){return new N(a.coordinates)},MultiPolygon:function(a){return new P(a.coordinates)},GeometryCollection:function(a,b){var c=a.geometries.map(function(a){return vm(a,b)});return new qm(c)}},ym={Point:function(a){return{type:"Point",coordinates:a.X()}},LineString:function(a){return{type:"LineString",
coordinates:a.X()}},Polygon:function(a,b){var c;b&&(c=b.rightHanded);return{type:"Polygon",coordinates:a.X(c)}},MultiPoint:function(a){return{type:"MultiPoint",coordinates:a.X()}},MultiLineString:function(a){return{type:"MultiLineString",coordinates:a.X()}},MultiPolygon:function(a,b){var c;b&&(c=b.rightHanded);return{type:"MultiPolygon",coordinates:a.X(c)}},GeometryCollection:function(a,b){return{type:"GeometryCollection",geometries:a.a.map(function(a){var c=pb({},b);delete c.featureProjection;return xm(a,
c)})}},Circle:function(){return{type:"GeometryCollection",geometries:[]}}};k=um.prototype;k.Sc=function(a,b){var c;c="Feature"===a.type?a:{type:"Feature",geometry:a};var d=vm(c.geometry,b),e=new H;this.b&&e.Vc(this.b);e.Sa(d);void 0!==c.id&&e.kc(c.id);c.properties&&e.H(c.properties);return e};k.kg=function(a,b){var c;if("FeatureCollection"===a.type){c=[];var d=a.features,e,f;e=0;for(f=d.length;e<f;++e)c.push(this.Sc(d[e],b))}else c=[this.Sc(a,b)];return c};k.og=function(a,b){return vm(a,b)};
k.rg=function(a){a=a.crs;var b;a?"name"==a.type?b=Gb(a.properties.name):"EPSG"==a.type?b=Gb("EPSG:"+a.properties.code):qa(!1,36):b=this.defaultDataProjection;return b};k.ad=function(a,b){b=El(this,b);var c={type:"Feature"},d=a.a;void 0!==d&&(c.id=d);(d=a.U())?c.geometry=xm(d,b):c.geometry=null;d=a.N();delete d[a.c];sb(d)?c.properties=null:c.properties=d;return c};k.ce=function(a,b){b=El(this,b);var c=[],d,e;d=0;for(e=a.length;d<e;++d)c.push(this.ad(a[d],b));return{type:"FeatureCollection",features:c}};
k.ee=function(a,b){return xm(a,El(this,b))};function zm(){this.f=new XMLSerializer;Cl.call(this)}u(zm,Cl);k=zm.prototype;k.T=function(){return"xml"};k.Ub=function(a,b){if(ll(a))return Am(this,a,b);if(ml(a))return this.jg(a,b);if("string"===typeof a){var c=nl(a);return Am(this,c,b)}return null};function Am(a,b,c){a=Bm(a,b,c);return 0<a.length?a[0]:null}k.jg=function(){return null};k.Qa=function(a,b){if(ll(a))return Bm(this,a,b);if(ml(a))return this.yc(a,b);if("string"===typeof a){var c=nl(a);return Bm(this,c,b)}return[]};
function Bm(a,b,c){var d=[];for(b=b.firstChild;b;b=b.nextSibling)b.nodeType==Node.ELEMENT_NODE&&ga(d,a.yc(b,c));return d}k.Tc=function(a,b){if(ll(a))return null;if(ml(a))return this.vi(a,b);"string"===typeof a&&nl(a);return null};k.vi=function(){return null};k.kb=function(a){return ll(a)?this.qg(a):ml(a)?this.Ze(a):"string"===typeof a?(a=nl(a),this.qg(a)):null};k.qg=function(){return this.defaultDataProjection};k.Ze=function(){return this.defaultDataProjection};
k.yd=function(a,b){return this.f.serializeToString(this.Fg(a,b))};k.Fg=function(){return null};k.Xb=function(a,b){var c=this.Yb(a,b);return this.f.serializeToString(c)};k.Yb=function(){return null};k.bd=function(a,b){var c=this.de(a,b);return this.f.serializeToString(c)};k.de=function(){return null};function Cm(a){a=a?a:{};this.featureType=a.featureType;this.featureNS=a.featureNS;this.srsName=a.srsName;this.schemaLocation="";this.b={};this.b["http://www.opengis.net/gml"]={featureMember:rl(Cm.prototype.Xd),featureMembers:rl(Cm.prototype.Xd)};zm.call(this)}u(Cm,zm);var Dm=/^[\s\xa0]*$/;k=Cm.prototype;
k.Xd=function(a,b){var c=a.localName,d=null;if("FeatureCollection"==c)"http://www.opengis.net/wfs"===a.namespaceURI?d=L([],this.b,a,b,this):d=L(null,this.b,a,b,this);else if("featureMembers"==c||"featureMember"==c){var e=b[0],f=e.featureType,g=e.featureNS,h,l;if(!f&&a.childNodes){f=[];g={};h=0;for(l=a.childNodes.length;h<l;++h){var m=a.childNodes[h];if(1===m.nodeType){var p=m.nodeName.split(":").pop();if(-1===f.indexOf(p)){var n="",q=0,m=m.namespaceURI,r;for(r in g){if(g[r]===m){n=r;break}++q}n||
(n="p"+q,g[n]=m);f.push(n+":"+p)}}}"featureMember"!=c&&(e.featureType=f,e.featureNS=g)}"string"===typeof g&&(h=g,g={},g.p0=h);var e={},f=Array.isArray(f)?f:[f],v;for(v in g){p={};h=0;for(l=f.length;h<l;++h)(-1===f[h].indexOf(":")?"p0":f[h].split(":")[0])===v&&(p[f[h].split(":").pop()]="featureMembers"==c?ql(this.ig,this):rl(this.ig,this));e[g[v]]=p}"featureMember"==c?d=L(void 0,e,a,b):d=L([],e,a,b)}null===d&&(d=[]);return d};
k.We=function(a,b){var c=b[0];c.srsName=a.firstElementChild.getAttribute("srsName");var d=L(null,this.Jg,a,b,this);if(d)return Fl(d,!1,c)};
k.ig=function(a,b){var c,d;(d=a.getAttribute("fid"))||(d=a.getAttributeNS("http://www.opengis.net/gml","id")||"");var e={},f;for(c=a.firstElementChild;c;c=c.nextElementSibling){var g=c.localName;if(0===c.childNodes.length||1===c.childNodes.length&&(3===c.firstChild.nodeType||4===c.firstChild.nodeType)){var h=jl(c,!1);Dm.test(h)&&(h=void 0);e[g]=h}else"boundedBy"!==g&&(f=g),e[g]=this.We(c,b)}c=new H(e);f&&c.Vc(f);d&&c.kc(d);return c};
k.Ai=function(a,b){var c=this.Ve(a,b);if(c){var d=new E(null);d.ca("XYZ",c);return d}};k.yi=function(a,b){var c=L([],this.sj,a,b,this);if(c)return new O(c)};k.xi=function(a,b){var c=L([],this.rj,a,b,this);if(c){var d=new N(null);Ll(d,c);return d}};k.zi=function(a,b){var c=L([],this.tj,a,b,this);if(c){var d=new P(null);Nl(d,c);return d}};k.ri=function(a,b){yl(this.wj,a,b,this)};k.yh=function(a,b){yl(this.pj,a,b,this)};k.si=function(a,b){yl(this.xj,a,b,this)};
k.Xe=function(a,b){var c=this.Ve(a,b);if(c){var d=new M(null);d.ca("XYZ",c);return d}};k.Lo=function(a,b){var c=L(null,this.fe,a,b,this);if(c)return c};k.wi=function(a,b){var c=this.Ve(a,b);if(c){var d=new yf(null);zf(d,"XYZ",c);return d}};k.Ye=function(a,b){var c=L([null],this.qf,a,b,this);if(c&&c[0]){var d=new F(null),e=c[0],f=[e.length],g,h;g=1;for(h=c.length;g<h;++g)ga(e,c[g]),f.push(e.length);d.ca("XYZ",e,f);return d}};k.Ve=function(a,b){return L(null,this.fe,a,b,this)};
k.sj={"http://www.opengis.net/gml":{pointMember:ql(Cm.prototype.ri),pointMembers:ql(Cm.prototype.ri)}};k.rj={"http://www.opengis.net/gml":{lineStringMember:ql(Cm.prototype.yh),lineStringMembers:ql(Cm.prototype.yh)}};k.tj={"http://www.opengis.net/gml":{polygonMember:ql(Cm.prototype.si),polygonMembers:ql(Cm.prototype.si)}};k.wj={"http://www.opengis.net/gml":{Point:ql(Cm.prototype.Ve)}};k.pj={"http://www.opengis.net/gml":{LineString:ql(Cm.prototype.Xe)}};k.xj={"http://www.opengis.net/gml":{Polygon:ql(Cm.prototype.Ye)}};
k.ge={"http://www.opengis.net/gml":{LinearRing:rl(Cm.prototype.Lo)}};k.vi=function(a,b){var c=this.We(a,[Dl(this,a,b?b:{})]);return c?c:null};k.yc=function(a,b){var c={featureType:this.featureType,featureNS:this.featureNS};b&&pb(c,Dl(this,a,b));return this.Xd(a,[c])||[]};k.Ze=function(a){return Gb(this.srsName?this.srsName:a.firstElementChild.getAttribute("srsName"))};function Em(a){a=jl(a,!1);return Fm(a)}function Fm(a){if(a=/^\s*(true|1)|(false|0)\s*$/.exec(a))return void 0!==a[1]||!1}function Gm(a){a=jl(a,!1);a=Date.parse(a);return isNaN(a)?void 0:a/1E3}function Hm(a){a=jl(a,!1);return Im(a)}function Im(a){if(a=/^\s*([+\-]?\d*\.?\d+(?:e[+\-]?\d+)?)\s*$/i.exec(a))return parseFloat(a[1])}function Jm(a){a=jl(a,!1);return Km(a)}function Km(a){if(a=/^\s*(\d+)\s*$/.exec(a))return parseInt(a[1],10)}function Q(a){return jl(a,!1).trim()}
function Lm(a,b){Mm(a,b?"1":"0")}function Nm(a,b){a.appendChild(gl.createTextNode(b.toPrecision()))}function Om(a,b){a.appendChild(gl.createTextNode(b.toString()))}function Mm(a,b){a.appendChild(gl.createTextNode(b))};function Pm(a){a=a?a:{};Cm.call(this,a);this.o=void 0!==a.surface?a.surface:!1;this.i=void 0!==a.curve?a.curve:!1;this.l=void 0!==a.multiCurve?a.multiCurve:!0;this.j=void 0!==a.multiSurface?a.multiSurface:!0;this.schemaLocation=a.schemaLocation?a.schemaLocation:"http://www.opengis.net/gml http://schemas.opengis.net/gml/3.1.1/profiles/gmlsfProfile/1.0.0/gmlsf.xsd"}u(Pm,Cm);k=Pm.prototype;k.Po=function(a,b){var c=L([],this.qj,a,b,this);if(c){var d=new N(null);Ll(d,c);return d}};
k.Qo=function(a,b){var c=L([],this.uj,a,b,this);if(c){var d=new P(null);Nl(d,c);return d}};k.Zg=function(a,b){yl(this.mj,a,b,this)};k.Wi=function(a,b){yl(this.Bj,a,b,this)};k.To=function(a,b){return L([null],this.vj,a,b,this)};k.Wo=function(a,b){return L([null],this.Aj,a,b,this)};k.Uo=function(a,b){return L([null],this.qf,a,b,this)};k.Oo=function(a,b){return L([null],this.fe,a,b,this)};k.Jl=function(a,b){var c=L(void 0,this.ge,a,b,this);c&&b[b.length-1].push(c)};
k.ck=function(a,b){var c=L(void 0,this.ge,a,b,this);c&&(b[b.length-1][0]=c)};k.Bi=function(a,b){var c=L([null],this.Cj,a,b,this);if(c&&c[0]){var d=new F(null),e=c[0],f=[e.length],g,h;g=1;for(h=c.length;g<h;++g)ga(e,c[g]),f.push(e.length);d.ca("XYZ",e,f);return d}};k.ti=function(a,b){var c=L([null],this.nj,a,b,this);if(c){var d=new M(null);d.ca("XYZ",c);return d}};k.Ko=function(a,b){var c=L([null],this.oj,a,b,this);return Va(c[1][0],c[1][1],c[2][0],c[2][1])};
k.Mo=function(a,b){for(var c=jl(a,!1),d=/^\s*([+\-]?\d*\.?\d+(?:[eE][+\-]?\d+)?)\s*/,e=[],f;f=d.exec(c);)e.push(parseFloat(f[1])),c=c.substr(f[0].length);if(""===c){c=b[0].srsName;d="enu";c&&(d=Gb(c).b);if("neu"===d)for(c=0,d=e.length;c<d;c+=3)f=e[c],e[c]=e[c+1],e[c+1]=f;c=e.length;2==c&&e.push(0);if(c)return e}};
k.ng=function(a,b){var c=jl(a,!1).replace(/^\s*|\s*$/g,""),d=b[0].srsName,e=a.parentNode.getAttribute("srsDimension"),f="enu";d&&(f=Gb(d).b);c=c.split(/\s+/);d=2;a.getAttribute("srsDimension")?d=Km(a.getAttribute("srsDimension")):a.getAttribute("dimension")?d=Km(a.getAttribute("dimension")):e&&(d=Km(e));for(var g,h,l=[],m=0,p=c.length;m<p;m+=d)e=parseFloat(c[m]),g=parseFloat(c[m+1]),h=3===d?parseFloat(c[m+2]):0,"en"===f.substr(0,2)?l.push(e,g,h):l.push(g,e,h);return l};
k.fe={"http://www.opengis.net/gml":{pos:rl(Pm.prototype.Mo),posList:rl(Pm.prototype.ng)}};k.qf={"http://www.opengis.net/gml":{interior:Pm.prototype.Jl,exterior:Pm.prototype.ck}};
k.Jg={"http://www.opengis.net/gml":{Point:rl(Cm.prototype.Ai),MultiPoint:rl(Cm.prototype.yi),LineString:rl(Cm.prototype.Xe),MultiLineString:rl(Cm.prototype.xi),LinearRing:rl(Cm.prototype.wi),Polygon:rl(Cm.prototype.Ye),MultiPolygon:rl(Cm.prototype.zi),Surface:rl(Pm.prototype.Bi),MultiSurface:rl(Pm.prototype.Qo),Curve:rl(Pm.prototype.ti),MultiCurve:rl(Pm.prototype.Po),Envelope:rl(Pm.prototype.Ko)}};k.qj={"http://www.opengis.net/gml":{curveMember:ql(Pm.prototype.Zg),curveMembers:ql(Pm.prototype.Zg)}};
k.uj={"http://www.opengis.net/gml":{surfaceMember:ql(Pm.prototype.Wi),surfaceMembers:ql(Pm.prototype.Wi)}};k.mj={"http://www.opengis.net/gml":{LineString:ql(Cm.prototype.Xe),Curve:ql(Pm.prototype.ti)}};k.Bj={"http://www.opengis.net/gml":{Polygon:ql(Cm.prototype.Ye),Surface:ql(Pm.prototype.Bi)}};k.Cj={"http://www.opengis.net/gml":{patches:rl(Pm.prototype.To)}};k.nj={"http://www.opengis.net/gml":{segments:rl(Pm.prototype.Wo)}};k.oj={"http://www.opengis.net/gml":{lowerCorner:ql(Pm.prototype.ng),upperCorner:ql(Pm.prototype.ng)}};
k.vj={"http://www.opengis.net/gml":{PolygonPatch:rl(Pm.prototype.Uo)}};k.Aj={"http://www.opengis.net/gml":{LineStringSegment:rl(Pm.prototype.Oo)}};function Qm(a,b,c){c=c[c.length-1].srsName;b=b.X();for(var d=b.length,e=Array(d),f,g=0;g<d;++g){f=b[g];var h=g,l="enu";c&&(l=Gb(c).b);e[h]="en"===l.substr(0,2)?f[0]+" "+f[1]:f[1]+" "+f[0]}Mm(a,e.join(" "))}
k.hj=function(a,b,c){var d=c[c.length-1].srsName;d&&a.setAttribute("srsName",d);d=il(a.namespaceURI,"pos");a.appendChild(d);c=c[c.length-1].srsName;a="enu";c&&(a=Gb(c).b);b=b.X();Mm(d,"en"===a.substr(0,2)?b[0]+" "+b[1]:b[1]+" "+b[0])};var Rm={"http://www.opengis.net/gml":{lowerCorner:J(Mm),upperCorner:J(Mm)}};k=Pm.prototype;k.Jp=function(a,b,c){var d=c[c.length-1].srsName;d&&a.setAttribute("srsName",d);zl({node:a},Rm,wl,[b[0]+" "+b[1],b[2]+" "+b[3]],c,["lowerCorner","upperCorner"],this)};
k.ej=function(a,b,c){var d=c[c.length-1].srsName;d&&a.setAttribute("srsName",d);d=il(a.namespaceURI,"posList");a.appendChild(d);Qm(d,b,c)};k.zj=function(a,b){var c=b[b.length-1],d=c.node,e=c.exteriorWritten;void 0===e&&(c.exteriorWritten=!0);return il(d.namespaceURI,void 0!==e?"interior":"exterior")};
k.nf=function(a,b,c){var d=c[c.length-1].srsName;"PolygonPatch"!==a.nodeName&&d&&a.setAttribute("srsName",d);"Polygon"===a.nodeName||"PolygonPatch"===a.nodeName?(b=b.jd(),zl({node:a,srsName:d},Sm,this.zj,b,c,void 0,this)):"Surface"===a.nodeName&&(d=il(a.namespaceURI,"patches"),a.appendChild(d),a=il(d.namespaceURI,"PolygonPatch"),d.appendChild(a),this.nf(a,b,c))};
k.mf=function(a,b,c){var d=c[c.length-1].srsName;"LineStringSegment"!==a.nodeName&&d&&a.setAttribute("srsName",d);"LineString"===a.nodeName||"LineStringSegment"===a.nodeName?(d=il(a.namespaceURI,"posList"),a.appendChild(d),Qm(d,b,c)):"Curve"===a.nodeName&&(d=il(a.namespaceURI,"segments"),a.appendChild(d),a=il(d.namespaceURI,"LineStringSegment"),d.appendChild(a),this.mf(a,b,c))};
k.gj=function(a,b,c){var d=c[c.length-1],e=d.srsName,d=d.surface;e&&a.setAttribute("srsName",e);b=b.Od();zl({node:a,srsName:e,surface:d},Tm,this.c,b,c,void 0,this)};k.Kp=function(a,b,c){var d=c[c.length-1].srsName;d&&a.setAttribute("srsName",d);b=b.Ie();zl({node:a,srsName:d},Um,ul("pointMember"),b,c,void 0,this)};k.fj=function(a,b,c){var d=c[c.length-1],e=d.srsName,d=d.curve;e&&a.setAttribute("srsName",e);b=b.hd();zl({node:a,srsName:e,curve:d},Vm,this.c,b,c,void 0,this)};
k.ij=function(a,b,c){var d=il(a.namespaceURI,"LinearRing");a.appendChild(d);this.ej(d,b,c)};k.jj=function(a,b,c){var d=this.a(b,c);d&&(a.appendChild(d),this.nf(d,b,c))};k.Lp=function(a,b,c){var d=il(a.namespaceURI,"Point");a.appendChild(d);this.hj(d,b,c)};k.dj=function(a,b,c){var d=this.a(b,c);d&&(a.appendChild(d),this.mf(d,b,c))};
k.zd=function(a,b,c){var d=c[c.length-1],e=pb({},d);e.node=a;var f;Array.isArray(b)?d.dataProjection?f=Xb(b,d.featureProjection,d.dataProjection):f=b:f=Fl(b,!0,d);zl(e,Wm,this.a,[f],c,void 0,this)};
k.cj=function(a,b,c){var d=b.a;d&&a.setAttribute("fid",d);var d=c[c.length-1],e=d.featureNS,f=b.c;d.Uc||(d.Uc={},d.Uc[e]={});var g=b.N();b=[];var h=[],l;for(l in g){var m=g[l];null!==m&&(b.push(l),h.push(m),l==f||m instanceof cf?l in d.Uc[e]||(d.Uc[e][l]=J(this.zd,this)):l in d.Uc[e]||(d.Uc[e][l]=J(Mm)))}l=pb({},d);l.node=a;zl(l,d.Uc,ul(void 0,e),h,c,b)};
var Tm={"http://www.opengis.net/gml":{surfaceMember:J(Pm.prototype.jj),polygonMember:J(Pm.prototype.jj)}},Um={"http://www.opengis.net/gml":{pointMember:J(Pm.prototype.Lp)}},Vm={"http://www.opengis.net/gml":{lineStringMember:J(Pm.prototype.dj),curveMember:J(Pm.prototype.dj)}},Sm={"http://www.opengis.net/gml":{exterior:J(Pm.prototype.ij),interior:J(Pm.prototype.ij)}},Wm={"http://www.opengis.net/gml":{Curve:J(Pm.prototype.mf),MultiCurve:J(Pm.prototype.fj),Point:J(Pm.prototype.hj),MultiPoint:J(Pm.prototype.Kp),
LineString:J(Pm.prototype.mf),MultiLineString:J(Pm.prototype.fj),LinearRing:J(Pm.prototype.ej),Polygon:J(Pm.prototype.nf),MultiPolygon:J(Pm.prototype.gj),Surface:J(Pm.prototype.nf),MultiSurface:J(Pm.prototype.gj),Envelope:J(Pm.prototype.Jp)}},Xm={MultiLineString:"lineStringMember",MultiCurve:"curveMember",MultiPolygon:"polygonMember",MultiSurface:"surfaceMember"};Pm.prototype.c=function(a,b){return il("http://www.opengis.net/gml",Xm[b[b.length-1].node.nodeName])};
Pm.prototype.a=function(a,b){var c=b[b.length-1],d=c.multiSurface,e=c.surface,f=c.curve,c=c.multiCurve,g;Array.isArray(a)?g="Envelope":(g=a.T(),"MultiPolygon"===g&&!0===d?g="MultiSurface":"Polygon"===g&&!0===e?g="Surface":"LineString"===g&&!0===f?g="Curve":"MultiLineString"===g&&!0===c&&(g="MultiCurve"));return il("http://www.opengis.net/gml",g)};
Pm.prototype.de=function(a,b){b=El(this,b);var c=il("http://www.opengis.net/gml","geom"),d={node:c,srsName:this.srsName,curve:this.i,surface:this.o,multiSurface:this.j,multiCurve:this.l};b&&pb(d,b);this.zd(c,a,[d]);return c};
Pm.prototype.Yb=function(a,b){b=El(this,b);var c=il("http://www.opengis.net/gml","featureMembers");c.setAttributeNS("http://www.w3.org/2001/XMLSchema-instance","xsi:schemaLocation",this.schemaLocation);var d={srsName:this.srsName,curve:this.i,surface:this.o,multiSurface:this.j,multiCurve:this.l,featureNS:this.featureNS,featureType:this.featureType};b&&pb(d,b);var d=[d],e=d[d.length-1],f=e.featureType,g=e.featureNS,h={};h[g]={};h[g][f]=J(this.cj,this);e=pb({},e);e.node=c;zl(e,h,ul(f,g),a,d);return c};function Ym(a){a=a?a:{};Cm.call(this,a);this.b["http://www.opengis.net/gml"].featureMember=ql(Cm.prototype.Xd);this.schemaLocation=a.schemaLocation?a.schemaLocation:"http://www.opengis.net/gml http://schemas.opengis.net/gml/2.1.2/feature.xsd"}u(Ym,Cm);k=Ym.prototype;
k.ui=function(a,b){var c=jl(a,!1).replace(/^\s*|\s*$/g,""),d=b[0].srsName,e=a.parentNode.getAttribute("srsDimension"),f="enu";d&&(d=Gb(d))&&(f=d.b);c=c.split(/[\s,]+/);d=2;a.getAttribute("srsDimension")?d=Km(a.getAttribute("srsDimension")):a.getAttribute("dimension")?d=Km(a.getAttribute("dimension")):e&&(d=Km(e));for(var g,h,l=[],m=0,p=c.length;m<p;m+=d)e=parseFloat(c[m]),g=parseFloat(c[m+1]),h=3===d?parseFloat(c[m+2]):0,"en"===f.substr(0,2)?l.push(e,g,h):l.push(g,e,h);return l};
k.Io=function(a,b){var c=L([null],this.lj,a,b,this);return Va(c[1][0],c[1][1],c[1][3],c[1][4])};k.Hl=function(a,b){var c=L(void 0,this.ge,a,b,this);c&&b[b.length-1].push(c)};k.ro=function(a,b){var c=L(void 0,this.ge,a,b,this);c&&(b[b.length-1][0]=c)};k.fe={"http://www.opengis.net/gml":{coordinates:rl(Ym.prototype.ui)}};k.qf={"http://www.opengis.net/gml":{innerBoundaryIs:Ym.prototype.Hl,outerBoundaryIs:Ym.prototype.ro}};k.lj={"http://www.opengis.net/gml":{coordinates:ql(Ym.prototype.ui)}};
k.Jg={"http://www.opengis.net/gml":{Point:rl(Cm.prototype.Ai),MultiPoint:rl(Cm.prototype.yi),LineString:rl(Cm.prototype.Xe),MultiLineString:rl(Cm.prototype.xi),LinearRing:rl(Cm.prototype.wi),Polygon:rl(Cm.prototype.Ye),MultiPolygon:rl(Cm.prototype.zi),Box:rl(Ym.prototype.Io)}};function Zm(a){a=a?a:{};zm.call(this);this.defaultDataProjection=Gb("EPSG:4326");this.b=a.readExtensions}u(Zm,zm);var $m=[null,"http://www.topografix.com/GPX/1/0","http://www.topografix.com/GPX/1/1"];function an(a,b,c,d){a.push(parseFloat(c.getAttribute("lon")),parseFloat(c.getAttribute("lat")));"ele"in d?(a.push(d.ele),delete d.ele,b.hasZ=!0):a.push(0);"time"in d?(a.push(d.time),delete d.time,b.hasM=!0):a.push(0);return a}
function bn(a,b,c){var d="XY",e=2;a.hasZ&&a.hasM?(d="XYZM",e=4):a.hasZ?(d="XYZ",e=3):a.hasM&&(d="XYM",e=3);if(4!==e){var f,g;f=0;for(g=b.length/4;f<g;f++)b[f*e]=b[4*f],b[f*e+1]=b[4*f+1],a.hasZ&&(b[f*e+2]=b[4*f+2]),a.hasM&&(b[f*e+2]=b[4*f+3]);b.length=b.length/4*e;if(c)for(f=0,g=c.length;f<g;f++)c[f]=c[f]/4*e}return d}function cn(a,b){var c=b[b.length-1],d=a.getAttribute("href");null!==d&&(c.link=d);yl(dn,a,b)}function en(a,b){b[b.length-1].extensionsNode_=a}
function fn(a,b){var c=b[0],d=L({flatCoordinates:[],layoutOptions:{}},gn,a,b);if(d){var e=d.flatCoordinates;delete d.flatCoordinates;var f=d.layoutOptions;delete d.layoutOptions;var f=bn(f,e),g=new M(null);g.ca(f,e);Fl(g,!1,c);c=new H(g);c.H(d);return c}}
function hn(a,b){var c=b[0],d=L({flatCoordinates:[],ends:[],layoutOptions:{}},jn,a,b);if(d){var e=d.flatCoordinates;delete d.flatCoordinates;var f=d.ends;delete d.ends;var g=d.layoutOptions;delete d.layoutOptions;var g=bn(g,e,f),h=new N(null);h.ca(g,e,f);Fl(h,!1,c);c=new H(h);c.H(d);return c}}function kn(a,b){var c=b[0],d=L({},ln,a,b);if(d){var e={},f=an([],e,a,d),e=bn(e,f),f=new E(f,e);Fl(f,!1,c);c=new H(f);c.H(d);return c}}
var mn={rte:fn,trk:hn,wpt:kn},nn=K($m,{rte:ql(fn),trk:ql(hn),wpt:ql(kn)}),dn=K($m,{text:I(Q,"linkText"),type:I(Q,"linkType")}),gn=K($m,{name:I(Q),cmt:I(Q),desc:I(Q),src:I(Q),link:cn,number:I(Jm),extensions:en,type:I(Q),rtept:function(a,b){var c=L({},on,a,b);if(c){var d=b[b.length-1];an(d.flatCoordinates,d.layoutOptions,a,c)}}}),on=K($m,{ele:I(Hm),time:I(Gm)}),jn=K($m,{name:I(Q),cmt:I(Q),desc:I(Q),src:I(Q),link:cn,number:I(Jm),type:I(Q),extensions:en,trkseg:function(a,b){var c=b[b.length-1];yl(pn,
a,b);c.ends.push(c.flatCoordinates.length)}}),pn=K($m,{trkpt:function(a,b){var c=L({},qn,a,b);if(c){var d=b[b.length-1];an(d.flatCoordinates,d.layoutOptions,a,c)}}}),qn=K($m,{ele:I(Hm),time:I(Gm)}),ln=K($m,{ele:I(Hm),time:I(Gm),magvar:I(Hm),geoidheight:I(Hm),name:I(Q),cmt:I(Q),desc:I(Q),src:I(Q),link:cn,sym:I(Q),type:I(Q),fix:I(Q),sat:I(Jm),hdop:I(Hm),vdop:I(Hm),pdop:I(Hm),ageofdgpsdata:I(Hm),dgpsid:I(Jm),extensions:en});
function rn(a,b){b||(b=[]);for(var c=0,d=b.length;c<d;++c){var e=b[c];if(a.b){var f=e.get("extensionsNode_")||null;a.b(e,f)}e.set("extensionsNode_",void 0)}}Zm.prototype.jg=function(a,b){if(!ea($m,a.namespaceURI))return null;var c=mn[a.localName];if(!c)return null;c=c(a,[Dl(this,a,b)]);if(!c)return null;rn(this,[c]);return c};Zm.prototype.yc=function(a,b){if(!ea($m,a.namespaceURI))return[];if("gpx"==a.localName){var c=L([],nn,a,[Dl(this,a,b)]);if(c)return rn(this,c),c}return[]};
function sn(a,b,c){a.setAttribute("href",b);b=c[c.length-1].properties;zl({node:a},tn,wl,[b.linkText,b.linkType],c,un)}function vn(a,b,c){var d=c[c.length-1],e=d.node.namespaceURI,f=d.properties;a.setAttributeNS(null,"lat",b[1]);a.setAttributeNS(null,"lon",b[0]);switch(d.geometryLayout){case "XYZM":b[3]&&(f.time=b[3]);case "XYZ":b[2]&&(f.ele=b[2]);break;case "XYM":b[2]&&(f.time=b[2])}b="rtept"==a.nodeName?wn[e]:xn[e];d=xl(f,b);zl({node:a,properties:f},yn,wl,d,c,b)}
var un=["text","type"],tn=K($m,{text:J(Mm),type:J(Mm)}),zn=K($m,"name cmt desc src link number type rtept".split(" ")),An=K($m,{name:J(Mm),cmt:J(Mm),desc:J(Mm),src:J(Mm),link:J(sn),number:J(Om),type:J(Mm),rtept:tl(J(vn))}),wn=K($m,["ele","time"]),Bn=K($m,"name cmt desc src link number type trkseg".split(" ")),En=K($m,{name:J(Mm),cmt:J(Mm),desc:J(Mm),src:J(Mm),link:J(sn),number:J(Om),type:J(Mm),trkseg:tl(J(function(a,b,c){zl({node:a,geometryLayout:b.ka,properties:{}},Cn,Dn,b.X(),c)}))}),Dn=ul("trkpt"),
Cn=K($m,{trkpt:J(vn)}),xn=K($m,"ele time magvar geoidheight name cmt desc src link sym type fix sat hdop vdop pdop ageofdgpsdata dgpsid".split(" ")),yn=K($m,{ele:J(Nm),time:J(function(a,b){var c=new Date(1E3*b);a.appendChild(gl.createTextNode(c.getUTCFullYear()+"-"+Oe(c.getUTCMonth()+1)+"-"+Oe(c.getUTCDate())+"T"+Oe(c.getUTCHours())+":"+Oe(c.getUTCMinutes())+":"+Oe(c.getUTCSeconds())+"Z"))}),magvar:J(Nm),geoidheight:J(Nm),name:J(Mm),cmt:J(Mm),desc:J(Mm),src:J(Mm),link:J(sn),sym:J(Mm),type:J(Mm),fix:J(Mm),
sat:J(Om),hdop:J(Nm),vdop:J(Nm),pdop:J(Nm),ageofdgpsdata:J(Nm),dgpsid:J(Om)}),Fn={Point:"wpt",LineString:"rte",MultiLineString:"trk"};function Gn(a,b){var c=a.U();if(c&&(c=Fn[c.T()]))return il(b[b.length-1].node.namespaceURI,c)}
var Hn=K($m,{rte:J(function(a,b,c){var d=c[0],e=b.N();a={node:a,properties:e};if(b=b.U())b=Fl(b,!0,d),a.geometryLayout=b.ka,e.rtept=b.X();d=zn[c[c.length-1].node.namespaceURI];e=xl(e,d);zl(a,An,wl,e,c,d)}),trk:J(function(a,b,c){var d=c[0],e=b.N();a={node:a,properties:e};if(b=b.U())b=Fl(b,!0,d),e.trkseg=b.hd();d=Bn[c[c.length-1].node.namespaceURI];e=xl(e,d);zl(a,En,wl,e,c,d)}),wpt:J(function(a,b,c){var d=c[0],e=c[c.length-1];e.properties=b.N();if(b=b.U())b=Fl(b,!0,d),e.geometryLayout=b.ka,vn(a,b.X(),
c)})});Zm.prototype.Yb=function(a,b){b=El(this,b);var c=il("http://www.topografix.com/GPX/1/1","gpx");c.setAttributeNS("http://www.w3.org/2000/xmlns/","xmlns:xsi","http://www.w3.org/2001/XMLSchema-instance");c.setAttributeNS("http://www.w3.org/2001/XMLSchema-instance","xsi:schemaLocation","http://www.topografix.com/GPX/1/1 http://www.topografix.com/GPX/1/1/gpx.xsd");c.setAttribute("version","1.1");c.setAttribute("creator","OpenLayers");zl({node:c},Hn,Gn,a,[b]);return c};function In(){Cl.call(this)}u(In,Cl);function Jn(a){return"string"===typeof a?a:""}k=In.prototype;k.T=function(){return"text"};k.Ub=function(a,b){return this.Wd(Jn(a),El(this,b))};k.Qa=function(a,b){return this.lg(Jn(a),El(this,b))};k.Tc=function(a,b){return this.ud(Jn(a),El(this,b))};k.kb=function(){return this.defaultDataProjection};k.yd=function(a,b){return this.be(a,El(this,b))};k.Xb=function(a,b){return this.Gg(a,El(this,b))};k.bd=function(a,b){return this.Ad(a,El(this,b))};function Kn(a){a=a?a:{};Cl.call(this);this.defaultDataProjection=Gb("EPSG:4326");this.b=a.altitudeMode?a.altitudeMode:"none"}u(Kn,In);var Ln=/^B(\d{2})(\d{2})(\d{2})(\d{2})(\d{5})([NS])(\d{3})(\d{5})([EW])([AV])(\d{5})(\d{5})/,Mn=/^H.([A-Z]{3}).*?:(.*)/,Nn=/^HFDTE(\d{2})(\d{2})(\d{2})/,On=/\r\n|\r|\n/;k=Kn.prototype;
k.Wd=function(a,b){var c=this.b,d=a.split(On),e={},f=[],g=2E3,h=0,l=1,m=-1,p,n;p=0;for(n=d.length;p<n;++p){var q=d[p],r;if("B"==q.charAt(0)){if(r=Ln.exec(q)){var q=parseInt(r[1],10),v=parseInt(r[2],10),x=parseInt(r[3],10),y=parseInt(r[4],10)+parseInt(r[5],10)/6E4;"S"==r[6]&&(y=-y);var z=parseInt(r[7],10)+parseInt(r[8],10)/6E4;"W"==r[9]&&(z=-z);f.push(z,y);"none"!=c&&f.push("gps"==c?parseInt(r[11],10):"barometric"==c?parseInt(r[12],10):0);r=Date.UTC(g,h,l,q,v,x);r<m&&(r=Date.UTC(g,h,l+1,q,v,x));f.push(r/
1E3);m=r}}else"H"==q.charAt(0)&&((r=Nn.exec(q))?(l=parseInt(r[1],10),h=parseInt(r[2],10)-1,g=2E3+parseInt(r[3],10)):(r=Mn.exec(q))&&(e[r[1]]=r[2].trim()))}if(!f.length)return null;d=new M(null);d.ca("none"==c?"XYM":"XYZM",f);c=new H(Fl(d,!1,b));c.H(e);return c};k.lg=function(a,b){var c=this.Wd(a,b);return c?[c]:[]};k.be=function(){};k.Gg=function(){};k.Ad=function(){};k.ud=function(){};function Pn(a,b,c,d,e,f){Dc.call(this);this.l=null;this.M=a?a:new Image;null!==d&&(this.M.crossOrigin=d);this.c=f?document.createElement("CANVAS"):null;this.g=f;this.i=null;this.f=e;this.a=c;this.j=b;this.o=!1;2==this.f&&Qn(this)}u(Pn,Dc);function Qn(a){var b=Xc(1,1);try{b.drawImage(a.M,0,0),b.getImageData(0,0,1,1)}catch(c){a.o=!0}}Pn.prototype.v=function(){this.f=3;this.i.forEach(rc);this.i=null;this.b("change")};
Pn.prototype.I=function(){this.f=2;this.a&&(this.M.width=this.a[0],this.M.height=this.a[1]);this.a=[this.M.width,this.M.height];this.i.forEach(rc);this.i=null;Qn(this);if(!this.o&&null!==this.g){this.c.width=this.M.width;this.c.height=this.M.height;var a=this.c.getContext("2d");a.drawImage(this.M,0,0);for(var b=a.getImageData(0,0,this.M.width,this.M.height),c=b.data,d=this.g[0]/255,e=this.g[1]/255,f=this.g[2]/255,g=0,h=c.length;g<h;g+=4)c[g]*=d,c[g+1]*=e,c[g+2]*=f;a.putImageData(b,0,0)}this.b("change")};
Pn.prototype.Z=function(){return this.c?this.c:this.M};Pn.prototype.load=function(){if(0==this.f){this.f=1;this.i=[wc(this.M,"error",this.v,this),wc(this.M,"load",this.I,this)];try{this.M.src=this.j}catch(a){this.v()}}};function Rn(a){a=a||{};this.j=void 0!==a.anchor?a.anchor:[.5,.5];this.I=null;this.a=void 0!==a.anchorOrigin?a.anchorOrigin:"top-left";this.C=void 0!==a.anchorXUnits?a.anchorXUnits:"fraction";this.G=void 0!==a.anchorYUnits?a.anchorYUnits:"fraction";this.ta=void 0!==a.crossOrigin?a.crossOrigin:null;var b=void 0!==a.img?a.img:null,c=void 0!==a.imgSize?a.imgSize:null,d=a.src;qa(!(void 0!==d&&b),4);qa(!b||b&&c,5);void 0!==d&&d.length||!b||(d=b.src||w(b).toString());qa(void 0!==d&&0<d.length,6);var e=void 0!==
a.src?0:2;this.i=void 0!==a.color?Qc(a.color):null;var f=this.ta,g=this.i,h=uh.get(d,f,g);h||(h=new Pn(b,d,c,f,e,g),uh.set(d,f,g,h));this.b=h;this.qa=void 0!==a.offset?a.offset:[0,0];this.f=void 0!==a.offsetOrigin?a.offsetOrigin:"top-left";this.u=null;this.A=void 0!==a.size?a.size:null;Vk.call(this,{opacity:void 0!==a.opacity?a.opacity:1,rotation:void 0!==a.rotation?a.rotation:0,scale:void 0!==a.scale?a.scale:1,snapToPixel:void 0!==a.snapToPixel?a.snapToPixel:!0,rotateWithView:void 0!==a.rotateWithView?
a.rotateWithView:!1})}u(Rn,Vk);k=Rn.prototype;
k.clone=function(){var a=this.Z(1),b;if(2===this.b.f)if("IMG"===a.tagName.toUpperCase())b=a.cloneNode(!0);else{b=document.createElement("canvas");var c=b.getContext("2d");b.width=a.width;b.height=a.height;c.drawImage(a,0,0)}return new Rn({anchor:this.j.slice(),anchorOrigin:this.a,anchorXUnits:this.C,anchorYUnits:this.G,crossOrigin:this.ta,color:this.i&&this.i.slice?this.i.slice():this.i||void 0,img:b?b:void 0,imgSize:b?this.b.a.slice():void 0,src:b?void 0:this.b.j,offset:this.qa.slice(),offsetOrigin:this.f,
size:null!==this.A?this.A.slice():void 0,opacity:this.g,scale:this.c,snapToPixel:this.v,rotation:this.l,rotateWithView:this.o})};
k.Hc=function(){if(this.I)return this.I;var a=this.j,b=this.jc();if("fraction"==this.C||"fraction"==this.G){if(!b)return null;a=this.j.slice();"fraction"==this.C&&(a[0]*=b[0]);"fraction"==this.G&&(a[1]*=b[1])}if("top-left"!=this.a){if(!b)return null;a===this.j&&(a=this.j.slice());if("top-right"==this.a||"bottom-right"==this.a)a[0]=-a[0]+b[0];if("bottom-left"==this.a||"bottom-right"==this.a)a[1]=-a[1]+b[1]}return this.I=a};k.Zn=function(){return this.i};k.Z=function(a){return this.b.Z(a)};k.ue=function(){return this.b.a};
k.Oe=function(){return this.b.f};k.cg=function(){var a=this.b;if(!a.l)if(a.o){var b=a.a[0],c=a.a[1],d=Xc(b,c);d.fillRect(0,0,b,c);a.l=d.canvas}else a.l=a.M;return a.l};k.Pc=function(){if(this.u)return this.u;var a=this.qa;if("top-left"!=this.f){var b=this.jc(),c=this.b.a;if(!b||!c)return null;a=a.slice();if("top-right"==this.f||"bottom-right"==this.f)a[0]=c[0]-b[0]-a[0];if("bottom-left"==this.f||"bottom-right"==this.f)a[1]=c[1]-b[1]-a[1]}return this.u=a};k.$n=function(){return this.b.j};
k.jc=function(){return this.A?this.A:this.b.a};k.zh=function(a,b){return B(this.b,"change",a,b)};k.load=function(){this.b.load()};k.Yi=function(a,b){xc(this.b,"change",a,b)};function Sn(a){a=a||{};this.a=a.font;this.i=a.rotation;this.j=a.rotateWithView;this.b=a.scale;this.Fa=a.text;this.g=a.textAlign;this.l=a.textBaseline;this.Wa=void 0!==a.fill?a.fill:new Zk({color:"#333"});this.Ya=void 0!==a.stroke?a.stroke:null;this.f=void 0!==a.offsetX?a.offsetX:0;this.c=void 0!==a.offsetY?a.offsetY:0}k=Sn.prototype;
k.clone=function(){return new Sn({font:this.a,rotation:this.i,rotateWithView:this.j,scale:this.b,text:this.Pa(),textAlign:this.g,textBaseline:this.l,fill:this.Ca()?this.Ca().clone():void 0,stroke:this.Da()?this.Da().clone():void 0,offsetX:this.f,offsetY:this.c})};k.tk=function(){return this.a};k.Ik=function(){return this.f};k.Jk=function(){return this.c};k.Ca=function(){return this.Wa};k.fo=function(){return this.j};k.ho=function(){return this.i};k.io=function(){return this.b};k.Da=function(){return this.Ya};
k.Pa=function(){return this.Fa};k.Tk=function(){return this.g};k.Uk=function(){return this.l};k.Ii=function(a){this.a=a};k.Oi=function(a){this.f=a};k.Pi=function(a){this.c=a};k.cf=function(a){this.Wa=a};k.jo=function(a){this.i=a};k.ni=function(a){this.b=a};k.df=function(a){this.Ya=a};k.ef=function(a){this.Fa=a};k.Ri=function(a){this.g=a};k.up=function(a){this.l=a};function Tn(a){a=a?a:{};zm.call(this);Un||(Vn=[255,255,255,1],Wn=new Zk({color:Vn}),Xn=[20,2],Yn=Zn="pixels",$n=[64,64],ao="https://maps.google.com/mapfiles/kml/pushpin/ylw-pushpin.png",bo=.5,co=new Rn({anchor:Xn,anchorOrigin:"bottom-left",anchorXUnits:Zn,anchorYUnits:Yn,crossOrigin:"anonymous",rotation:0,scale:bo,size:$n,src:ao}),eo="NO_IMAGE",fo=new rj({color:Vn,width:1}),go=new rj({color:[51,51,51,1],width:2}),ho=new Sn({font:"bold 16px Helvetica",fill:Wn,stroke:go,scale:.8}),io=new $k({fill:Wn,
image:co,text:ho,stroke:fo,zIndex:0}),Un=[io]);this.defaultDataProjection=Gb("EPSG:4326");this.a=a.defaultStyle?a.defaultStyle:Un;this.c=void 0!==a.extractStyles?a.extractStyles:!0;this.l=void 0!==a.writeStyles?a.writeStyles:!0;this.b={};this.i=void 0!==a.showPointNames?a.showPointNames:!0}var Un,Vn,Wn,Xn,Zn,Yn,$n,ao,bo,co,eo,fo,go,ho,io;u(Tn,zm);
var jo=["http://www.google.com/kml/ext/2.2"],ko=[null,"http://earth.google.com/kml/2.0","http://earth.google.com/kml/2.1","http://earth.google.com/kml/2.2","http://www.opengis.net/kml/2.2"],lo={fraction:"fraction",pixels:"pixels"};
function mo(a,b){var c,d=[0,0],e="start";a.Z()&&(c=a.Z().ue(),null===c&&(c=$n),2==c.length&&(e=a.Z().c,d[0]=e*c[0]/2,d[1]=-e*c[1]/2,e="left"));if(null!==a.Pa()){var f=a.Pa();c=f.clone();c.Ii(f.a||ho.a);c.ni(f.b||ho.b);c.cf(f.Ca()||ho.Ca());c.df(f.Da()||go)}else c=ho.clone();c.ef(b);c.Oi(d[0]);c.Pi(d[1]);c.Ri(e);return new $k({text:c})}
function no(a,b,c,d,e){return function(){var f=e,g="";f&&this.U()&&(f="Point"===this.U().T());f&&(g=this.get("name"),f=f&&g);if(a)return f?(f=mo(a[0],g),a.concat(f)):a;if(b){var h=oo(b,c,d);return f?(f=mo(h[0],g),h.concat(f)):h}return f?(f=mo(c[0],g),c.concat(f)):c}}function oo(a,b,c){return Array.isArray(a)?a:"string"===typeof a?(!(a in c)&&"#"+a in c&&(a="#"+a),oo(c[a],b,c)):b}
function po(a){a=jl(a,!1);if(a=/^\s*#?\s*([0-9A-Fa-f]{8})\s*$/.exec(a))return a=a[1],[parseInt(a.substr(6,2),16),parseInt(a.substr(4,2),16),parseInt(a.substr(2,2),16),parseInt(a.substr(0,2),16)/255]}function qo(a){a=jl(a,!1);for(var b=[],c=/^\s*([+\-]?\d*\.?\d+(?:e[+\-]?\d+)?)\s*,\s*([+\-]?\d*\.?\d+(?:e[+\-]?\d+)?)(?:\s*,\s*([+\-]?\d*\.?\d+(?:e[+\-]?\d+)?))?\s*/i,d;d=c.exec(a);)b.push(parseFloat(d[1]),parseFloat(d[2]),d[3]?parseFloat(d[3]):0),a=a.substr(d[0].length);if(""===a)return b}
function ro(a){var b=jl(a,!1).trim();return a.baseURI?(new URL(b,a.baseURI)).href:b}function so(a){return Hm(a)}function to(a,b){return L(null,uo,a,b)}function vo(a,b){var c=L({B:[],bj:[]},wo,a,b);if(c){var d=c.B,c=c.bj,e,f;e=0;for(f=Math.min(d.length,c.length);e<f;++e)d[4*e+3]=c[e];c=new M(null);c.ca("XYZM",d);return c}}function xo(a,b){var c=L({},yo,a,b),d=L(null,zo,a,b);if(d){var e=new M(null);e.ca("XYZ",d);e.H(c);return e}}
function Ao(a,b){var c=L({},yo,a,b),d=L(null,zo,a,b);if(d){var e=new F(null);e.ca("XYZ",d,[d.length]);e.H(c);return e}}
function Bo(a,b){var c=L([],Co,a,b);if(!c)return null;if(!c.length)return new qm(c);var d,e=!0,f=c[0].T(),g,h,l;h=1;for(l=c.length;h<l;++h)if(g=c[h],g.T()!=f){e=!1;break}if(e)if("Point"==f){d=c[0];e=d.ka;f=d.ha();h=1;for(l=c.length;h<l;++h)g=c[h],ga(f,g.ha());d=new O(null);d.ca(e,f);Do(d,c)}else"LineString"==f?(d=new N(null),Ll(d,c),Do(d,c)):"Polygon"==f?(d=new P(null),Nl(d,c),Do(d,c)):"GeometryCollection"==f?d=new qm(c):qa(!1,37);else d=new qm(c);return d}
function Eo(a,b){var c=L({},yo,a,b),d=L(null,zo,a,b);if(d){var e=new E(null);e.ca("XYZ",d);e.H(c);return e}}function Fo(a,b){var c=L({},yo,a,b),d=L([null],Go,a,b);if(d&&d[0]){var e=new F(null),f=d[0],g=[f.length],h,l;h=1;for(l=d.length;h<l;++h)ga(f,d[h]),g.push(f.length);e.ca("XYZ",f,g);e.H(c);return e}}
function Ho(a,b){var c=L({},Io,a,b);if(!c)return null;var d="fillStyle"in c?c.fillStyle:Wn,e=c.fill;void 0===e||e||(d=null);e="imageStyle"in c?c.imageStyle:co;e==eo&&(e=void 0);var f="textStyle"in c?c.textStyle:ho,g="strokeStyle"in c?c.strokeStyle:fo,c=c.outline;void 0===c||c||(g=null);return[new $k({fill:d,image:e,stroke:g,text:f,zIndex:void 0})]}
function Do(a,b){var c=b.length,d=Array(b.length),e=Array(b.length),f,g,h,l;h=l=!1;for(g=0;g<c;++g)f=b[g],d[g]=f.get("extrude"),e[g]=f.get("altitudeMode"),h=h||void 0!==d[g],l=l||e[g];h&&a.set("extrude",d);l&&a.set("altitudeMode",e)}function Jo(a,b){yl(Ko,a,b)}function Lo(a,b){yl(Mo,a,b)}
var No=K(ko,{displayName:I(Q),value:I(Q)}),Ko=K(ko,{Data:function(a,b){var c=a.getAttribute("name");yl(No,a,b);var d=b[b.length-1];null!==c?d[c]=d.value:null!==d.displayName&&(d[d.displayName]=d.value)},SchemaData:function(a,b){yl(Oo,a,b)}}),Mo=K(ko,{LatLonAltBox:function(a,b){var c=L({},Po,a,b);if(c){var d=b[b.length-1];d.extent=[parseFloat(c.west),parseFloat(c.south),parseFloat(c.east),parseFloat(c.north)];d.altitudeMode=c.altitudeMode;d.minAltitude=parseFloat(c.minAltitude);d.maxAltitude=parseFloat(c.maxAltitude)}},
Lod:function(a,b){var c=L({},Qo,a,b);if(c){var d=b[b.length-1];d.minLodPixels=parseFloat(c.minLodPixels);d.maxLodPixels=parseFloat(c.maxLodPixels);d.minFadeExtent=parseFloat(c.minFadeExtent);d.maxFadeExtent=parseFloat(c.maxFadeExtent)}}}),Po=K(ko,{altitudeMode:I(Q),minAltitude:I(Hm),maxAltitude:I(Hm),north:I(Hm),south:I(Hm),east:I(Hm),west:I(Hm)}),Qo=K(ko,{minLodPixels:I(Hm),maxLodPixels:I(Hm),minFadeExtent:I(Hm),maxFadeExtent:I(Hm)}),yo=K(ko,{extrude:I(Em),altitudeMode:I(Q)}),uo=K(ko,{coordinates:rl(qo)}),
Go=K(ko,{innerBoundaryIs:function(a,b){var c=L(void 0,Ro,a,b);c&&b[b.length-1].push(c)},outerBoundaryIs:function(a,b){var c=L(void 0,So,a,b);c&&(b[b.length-1][0]=c)}}),wo=K(ko,{when:function(a,b){var c=b[b.length-1].bj,d=jl(a,!1),d=Date.parse(d);c.push(isNaN(d)?0:d)}},K(jo,{coord:function(a,b){var c=b[b.length-1].B,d=jl(a,!1);(d=/^\s*([+\-]?\d+(?:\.\d*)?(?:e[+\-]?\d*)?)\s+([+\-]?\d+(?:\.\d*)?(?:e[+\-]?\d*)?)\s+([+\-]?\d+(?:\.\d*)?(?:e[+\-]?\d*)?)\s*$/i.exec(d))?c.push(parseFloat(d[1]),parseFloat(d[2]),
parseFloat(d[3]),0):c.push(0,0,0,0)}})),zo=K(ko,{coordinates:rl(qo)}),To=K(ko,{href:I(ro)},K(jo,{x:I(Hm),y:I(Hm),w:I(Hm),h:I(Hm)})),Uo=K(ko,{Icon:I(function(a,b){var c=L({},To,a,b);return c?c:null}),heading:I(Hm),hotSpot:I(function(a){var b=a.getAttribute("xunits"),c=a.getAttribute("yunits");return{x:parseFloat(a.getAttribute("x")),Hg:lo[b],y:parseFloat(a.getAttribute("y")),Ig:lo[c]}}),scale:I(so)}),Ro=K(ko,{LinearRing:rl(to)}),Vo=K(ko,{color:I(po),scale:I(so)}),Wo=K(ko,{color:I(po),width:I(Hm)}),
Co=K(ko,{LineString:ql(xo),LinearRing:ql(Ao),MultiGeometry:ql(Bo),Point:ql(Eo),Polygon:ql(Fo)}),Xo=K(jo,{Track:ql(vo)}),Zo=K(ko,{ExtendedData:Jo,Region:Lo,Link:function(a,b){yl(Yo,a,b)},address:I(Q),description:I(Q),name:I(Q),open:I(Em),phoneNumber:I(Q),visibility:I(Em)}),Yo=K(ko,{href:I(ro)}),So=K(ko,{LinearRing:rl(to)}),$o=K(ko,{Style:I(Ho),key:I(Q),styleUrl:I(ro)}),bp=K(ko,{ExtendedData:Jo,Region:Lo,MultiGeometry:I(Bo,"geometry"),LineString:I(xo,"geometry"),LinearRing:I(Ao,"geometry"),Point:I(Eo,
"geometry"),Polygon:I(Fo,"geometry"),Style:I(Ho),StyleMap:function(a,b){var c=L(void 0,ap,a,b);if(c){var d=b[b.length-1];Array.isArray(c)?d.Style=c:"string"===typeof c?d.styleUrl=c:qa(!1,38)}},address:I(Q),description:I(Q),name:I(Q),open:I(Em),phoneNumber:I(Q),styleUrl:I(ro),visibility:I(Em)},K(jo,{MultiTrack:I(function(a,b){var c=L([],Xo,a,b);if(c){var d=new N(null);Ll(d,c);return d}},"geometry"),Track:I(vo,"geometry")})),cp=K(ko,{color:I(po),fill:I(Em),outline:I(Em)}),Oo=K(ko,{SimpleData:function(a,
b){var c=a.getAttribute("name");if(null!==c){var d=Q(a);b[b.length-1][c]=d}}}),Io=K(ko,{IconStyle:function(a,b){var c=L({},Uo,a,b);if(c){var d=b[b.length-1],e="Icon"in c?c.Icon:{},f=!("Icon"in c)||0<Object.keys(e).length,g,h=e.href;h?g=h:f&&(g=ao);var l,m,p;(h=c.hotSpot)?(l=[h.x,h.y],m=h.Hg,p=h.Ig):g===ao?(l=Xn,m=Zn,p=Yn):/^http:\/\/maps\.(?:google|gstatic)\.com\//.test(g)&&(l=[.5,0],p=m="fraction");var n,h=e.x,q=e.y;void 0!==h&&void 0!==q&&(n=[h,q]);var r,h=e.w,e=e.h;void 0!==h&&void 0!==e&&(r=[h,
e]);var v,e=c.heading;void 0!==e&&(v=Ba(e));c=c.scale;f?(g==ao&&(r=$n,void 0===c&&(c=bo)),f=new Rn({anchor:l,anchorOrigin:"bottom-left",anchorXUnits:m,anchorYUnits:p,crossOrigin:"anonymous",offset:n,offsetOrigin:"bottom-left",rotation:v,scale:c,size:r,src:g}),d.imageStyle=f):d.imageStyle=eo}},LabelStyle:function(a,b){var c=L({},Vo,a,b);c&&(b[b.length-1].textStyle=new Sn({fill:new Zk({color:"color"in c?c.color:Vn}),scale:c.scale}))},LineStyle:function(a,b){var c=L({},Wo,a,b);c&&(b[b.length-1].strokeStyle=
new rj({color:"color"in c?c.color:Vn,width:"width"in c?c.width:1}))},PolyStyle:function(a,b){var c=L({},cp,a,b);if(c){var d=b[b.length-1];d.fillStyle=new Zk({color:"color"in c?c.color:Vn});var e=c.fill;void 0!==e&&(d.fill=e);c=c.outline;void 0!==c&&(d.outline=c)}}}),ap=K(ko,{Pair:function(a,b){var c=L({},$o,a,b);if(c){var d=c.key;d&&"normal"==d&&((d=c.styleUrl)&&(b[b.length-1]=d),(c=c.Style)&&(b[b.length-1]=c))}}});k=Tn.prototype;
k.hg=function(a,b){var c=K(ko,{Document:pl(this.hg,this),Folder:pl(this.hg,this),Placemark:ql(this.pg,this),Style:this.Yo.bind(this),StyleMap:this.Xo.bind(this)});if(c=L([],c,a,b,this))return c};k.pg=function(a,b){var c=L({geometry:null},bp,a,b);if(c){var d=new H,e=a.getAttribute("id");null!==e&&d.kc(e);var e=b[0],f=c.geometry;f&&Fl(f,!1,e);d.Sa(f);delete c.geometry;this.c&&d.Vf(no(c.Style,c.styleUrl,this.a,this.b,this.i));delete c.Style;d.H(c);return d}};
k.Yo=function(a,b){var c=a.getAttribute("id");if(null!==c){var d=Ho(a,b);d&&(c=a.baseURI?(new URL("#"+c,a.baseURI)).href:"#"+c,this.b[c]=d)}};k.Xo=function(a,b){var c=a.getAttribute("id");if(null!==c){var d=L(void 0,ap,a,b);d&&(c=a.baseURI?(new URL("#"+c,a.baseURI)).href:"#"+c,this.b[c]=d)}};k.jg=function(a,b){if(!ea(ko,a.namespaceURI))return null;var c=this.pg(a,[Dl(this,a,b)]);return c?c:null};
k.yc=function(a,b){if(!ea(ko,a.namespaceURI))return[];var c;c=a.localName;if("Document"==c||"Folder"==c)return(c=this.hg(a,[Dl(this,a,b)]))?c:[];if("Placemark"==c)return(c=this.pg(a,[Dl(this,a,b)]))?[c]:[];if("kml"==c){c=[];var d;for(d=a.firstElementChild;d;d=d.nextElementSibling){var e=this.yc(d,b);e&&ga(c,e)}return c}return[]};k.Ro=function(a){if(ll(a))return dp(this,a);if(ml(a))return ep(this,a);if("string"===typeof a)return a=nl(a),dp(this,a)};
function dp(a,b){var c;for(c=b.firstChild;c;c=c.nextSibling)if(c.nodeType==Node.ELEMENT_NODE){var d=ep(a,c);if(d)return d}}function ep(a,b){var c;for(c=b.firstElementChild;c;c=c.nextElementSibling)if(ea(ko,c.namespaceURI)&&"name"==c.localName)return Q(c);for(c=b.firstElementChild;c;c=c.nextElementSibling){var d=c.localName;if(ea(ko,c.namespaceURI)&&("Document"==d||"Folder"==d||"Placemark"==d||"kml"==d)&&(d=ep(a,c)))return d}}
k.So=function(a){var b=[];ll(a)?ga(b,fp(this,a)):ml(a)?ga(b,gp(this,a)):"string"===typeof a&&(a=nl(a),ga(b,fp(this,a)));return b};function fp(a,b){var c,d=[];for(c=b.firstChild;c;c=c.nextSibling)c.nodeType==Node.ELEMENT_NODE&&ga(d,gp(a,c));return d}
function gp(a,b){var c,d=[];for(c=b.firstElementChild;c;c=c.nextElementSibling)if(ea(ko,c.namespaceURI)&&"NetworkLink"==c.localName){var e=L({},Zo,c,[]);d.push(e)}for(c=b.firstElementChild;c;c=c.nextElementSibling)e=c.localName,!ea(ko,c.namespaceURI)||"Document"!=e&&"Folder"!=e&&"kml"!=e||ga(d,gp(a,c));return d}k.Vo=function(a){var b=[];ll(a)?ga(b,hp(this,a)):ml(a)?ga(b,this.$e(a)):"string"===typeof a&&(a=nl(a),ga(b,hp(this,a)));return b};
function hp(a,b){var c,d=[];for(c=b.firstChild;c;c=c.nextSibling)c.nodeType==Node.ELEMENT_NODE&&ga(d,a.$e(c));return d}k.$e=function(a){var b,c=[];for(b=a.firstElementChild;b;b=b.nextElementSibling)if(ea(ko,b.namespaceURI)&&"Region"==b.localName){var d=L({},Mo,b,[]);c.push(d)}for(b=a.firstElementChild;b;b=b.nextElementSibling)a=b.localName,!ea(ko,b.namespaceURI)||"Document"!=a&&"Folder"!=a&&"kml"!=a||ga(c,this.$e(b));return c};
function ip(a,b){var c=Qc(b),c=[255*(4==c.length?c[3]:1),c[2],c[1],c[0]],d;for(d=0;4>d;++d){var e=parseInt(c[d],10).toString(16);c[d]=1==e.length?"0"+e:e}Mm(a,c.join(""))}function jp(a,b,c){a={node:a};var d=b.T(),e,f;"GeometryCollection"==d?(e=b.If(),f=kp):"MultiPoint"==d?(e=b.Ie(),f=lp):"MultiLineString"==d?(e=b.hd(),f=mp):"MultiPolygon"==d?(e=b.Od(),f=np):qa(!1,39);zl(a,op,f,e,c)}function pp(a,b,c){zl({node:a},qp,rp,[b],c)}
function sp(a,b,c){var d={node:a};b.a&&a.setAttribute("id",b.a);a=b.N();var e={address:1,description:1,name:1,open:1,phoneNumber:1,styleUrl:1,visibility:1};e[b.c]=1;var f=Object.keys(a||{}).sort().filter(function(a){return!e[a]});if(0<f.length){var g=xl(a,f);zl(d,tp,up,[{names:f,values:g}],c)}if(f=b.Nc())if(f=f.call(b,0))f=Array.isArray(f)?f[0]:f,this.l&&(a.Style=f),(f=f.Pa())&&(a.name=f.Pa());f=vp[c[c.length-1].node.namespaceURI];a=xl(a,f);zl(d,tp,wl,a,c,f);a=c[0];(b=b.U())&&(b=Fl(b,!0,a));zl(d,
tp,kp,[b],c)}function wp(a,b,c){var d=b.ha();a={node:a};a.layout=b.ka;a.stride=b.sa();zl(a,xp,yp,[d],c)}function zp(a,b,c){b=b.jd();var d=b.shift();a={node:a};zl(a,Ap,Bp,b,c);zl(a,Ap,Cp,[d],c)}function Dp(a,b){Nm(a,Math.round(1E6*b)/1E6)}
var Ep=K(ko,["Document","Placemark"]),Hp=K(ko,{Document:J(function(a,b,c){zl({node:a},Fp,Gp,b,c,void 0,this)}),Placemark:J(sp)}),Fp=K(ko,{Placemark:J(sp)}),Ip=K(ko,{Data:J(function(a,b,c){a.setAttribute("name",b.name);a={node:a};b=b.value;"object"==typeof b?(null!==b&&b.displayName&&zl(a,Ip,wl,[b.displayName],c,["displayName"]),null!==b&&b.value&&zl(a,Ip,wl,[b.value],c,["value"])):zl(a,Ip,wl,[b],c,["value"])}),value:J(function(a,b){Mm(a,b)}),displayName:J(function(a,b){a.appendChild(gl.createCDATASection(b))})}),
Jp={Point:"Point",LineString:"LineString",LinearRing:"LinearRing",Polygon:"Polygon",MultiPoint:"MultiGeometry",MultiLineString:"MultiGeometry",MultiPolygon:"MultiGeometry",GeometryCollection:"MultiGeometry"},Kp=K(ko,["href"],K(jo,["x","y","w","h"])),Lp=K(ko,{href:J(Mm)},K(jo,{x:J(Nm),y:J(Nm),w:J(Nm),h:J(Nm)})),Mp=K(ko,["scale","heading","Icon","hotSpot"]),Op=K(ko,{Icon:J(function(a,b,c){a={node:a};var d=Kp[c[c.length-1].node.namespaceURI],e=xl(b,d);zl(a,Lp,wl,e,c,d);d=Kp[jo[0]];e=xl(b,d);zl(a,Lp,
Np,e,c,d)}),heading:J(Nm),hotSpot:J(function(a,b){a.setAttribute("x",b.x);a.setAttribute("y",b.y);a.setAttribute("xunits",b.Hg);a.setAttribute("yunits",b.Ig)}),scale:J(Dp)}),Pp=K(ko,["color","scale"]),Qp=K(ko,{color:J(ip),scale:J(Dp)}),Rp=K(ko,["color","width"]),Sp=K(ko,{color:J(ip),width:J(Nm)}),qp=K(ko,{LinearRing:J(wp)}),op=K(ko,{LineString:J(wp),Point:J(wp),Polygon:J(zp),GeometryCollection:J(jp)}),vp=K(ko,"name open visibility address phoneNumber description styleUrl Style".split(" ")),tp=K(ko,
{ExtendedData:J(function(a,b,c){a={node:a};var d=b.names;b=b.values;for(var e=d.length,f=0;f<e;f++)zl(a,Ip,Tp,[{name:d[f],value:b[f]}],c)}),MultiGeometry:J(jp),LineString:J(wp),LinearRing:J(wp),Point:J(wp),Polygon:J(zp),Style:J(function(a,b,c){a={node:a};var d={},e=b.Ca(),f=b.Da(),g=b.Z();b=b.Pa();g instanceof Rn&&(d.IconStyle=g);b&&(d.LabelStyle=b);f&&(d.LineStyle=f);e&&(d.PolyStyle=e);b=Up[c[c.length-1].node.namespaceURI];d=xl(d,b);zl(a,Vp,wl,d,c,b)}),address:J(Mm),description:J(Mm),name:J(Mm),
open:J(Lm),phoneNumber:J(Mm),styleUrl:J(Mm),visibility:J(Lm)}),xp=K(ko,{coordinates:J(function(a,b,c){c=c[c.length-1];var d=c.layout;c=c.stride;var e;"XY"==d||"XYM"==d?e=2:"XYZ"==d||"XYZM"==d?e=3:qa(!1,34);var f,g=b.length,h="";if(0<g){h+=b[0];for(d=1;d<e;++d)h+=","+b[d];for(f=c;f<g;f+=c)for(h+=" "+b[f],d=1;d<e;++d)h+=","+b[f+d]}Mm(a,h)})}),Ap=K(ko,{outerBoundaryIs:J(pp),innerBoundaryIs:J(pp)}),Wp=K(ko,{color:J(ip)}),Up=K(ko,["IconStyle","LabelStyle","LineStyle","PolyStyle"]),Vp=K(ko,{IconStyle:J(function(a,
b,c){a={node:a};var d={},e=b.jc(),f=b.ue(),g={href:b.b.j};if(e){g.w=e[0];g.h=e[1];var h=b.Hc(),l=b.Pc();l&&f&&l[0]&&l[1]!==e[1]&&(g.x=l[0],g.y=f[1]-(l[1]+e[1]));h&&h[0]&&h[1]!==e[1]&&(d.hotSpot={x:h[0],Hg:"pixels",y:e[1]-h[1],Ig:"pixels"})}d.Icon=g;e=b.c;1!==e&&(d.scale=e);(b=b.l)&&(d.heading=b);b=Mp[c[c.length-1].node.namespaceURI];d=xl(d,b);zl(a,Op,wl,d,c,b)}),LabelStyle:J(function(a,b,c){a={node:a};var d={},e=b.Ca();e&&(d.color=e.b);(b=b.b)&&1!==b&&(d.scale=b);b=Pp[c[c.length-1].node.namespaceURI];
d=xl(d,b);zl(a,Qp,wl,d,c,b)}),LineStyle:J(function(a,b,c){a={node:a};var d=Rp[c[c.length-1].node.namespaceURI];b=xl({color:b.a,width:b.c},d);zl(a,Sp,wl,b,c,d)}),PolyStyle:J(function(a,b,c){zl({node:a},Wp,Xp,[b.b],c)})});function Np(a,b,c){return il(jo[0],"gx:"+c)}function Gp(a,b){return il(b[b.length-1].node.namespaceURI,"Placemark")}function kp(a,b){if(a)return il(b[b.length-1].node.namespaceURI,Jp[a.T()])}
var Xp=ul("color"),yp=ul("coordinates"),Tp=ul("Data"),up=ul("ExtendedData"),Bp=ul("innerBoundaryIs"),lp=ul("Point"),mp=ul("LineString"),rp=ul("LinearRing"),np=ul("Polygon"),Cp=ul("outerBoundaryIs");
Tn.prototype.Yb=function(a,b){b=El(this,b);var c=il(ko[4],"kml");c.setAttributeNS("http://www.w3.org/2000/xmlns/","xmlns:gx",jo[0]);c.setAttributeNS("http://www.w3.org/2000/xmlns/","xmlns:xsi","http://www.w3.org/2001/XMLSchema-instance");c.setAttributeNS("http://www.w3.org/2001/XMLSchema-instance","xsi:schemaLocation","http://www.opengis.net/kml/2.2 https://developers.google.com/kml/schema/kml22gx.xsd");var d={node:c},e={};1<a.length?e.Document=a:1==a.length&&(e.Placemark=a[0]);var f=Ep[c.namespaceURI],
e=xl(e,f);zl(d,Hp,wl,e,[b],f,this);return c};(function(){var a={},b={ma:a};(function(c){if("object"===typeof a&&"undefined"!==typeof b)b.ma=c();else{var d;"undefined"!==typeof window?d=window:"undefined"!==typeof global?d=global:"undefined"!==typeof self?d=self:d=this;d.aq=c()}})(function(){return function d(a,b,g){function e(h,l){if(!b[h]){if(!a[h]){var m="function"==typeof require&&require;if(!l&&m)return m(h,!0);if(f)return f(h,!0);m=Error("Cannot find module '"+h+"'");throw m.code="MODULE_NOT_FOUND",m;}m=b[h]={ma:{}};a[h][0].call(m.ma,function(b){var d=
a[h][1][b];return e(d?d:b)},m,m.ma,d,a,b,g)}return b[h].ma}for(var f="function"==typeof require&&require,m=0;m<g.length;m++)e(g[m]);return e}({1:[function(a,b,f){f.read=function(a,b,d,e,f){var g;g=8*f-e-1;var h=(1<<g)-1,l=h>>1,m=-7;f=d?f-1:0;var p=d?-1:1,y=a[b+f];f+=p;d=y&(1<<-m)-1;y>>=-m;for(m+=g;0<m;d=256*d+a[b+f],f+=p,m-=8);g=d&(1<<-m)-1;d>>=-m;for(m+=e;0<m;g=256*g+a[b+f],f+=p,m-=8);if(0===d)d=1-l;else{if(d===h)return g?NaN:Infinity*(y?-1:1);g+=Math.pow(2,e);d-=l}return(y?-1:1)*g*Math.pow(2,d-
e)};f.write=function(a,b,d,e,f,n){var g,h=8*n-f-1,l=(1<<h)-1,m=l>>1,p=23===f?Math.pow(2,-24)-Math.pow(2,-77):0;n=e?0:n-1;var z=e?1:-1,A=0>b||0===b&&0>1/b?1:0;b=Math.abs(b);isNaN(b)||Infinity===b?(b=isNaN(b)?1:0,e=l):(e=Math.floor(Math.log(b)/Math.LN2),1>b*(g=Math.pow(2,-e))&&(e--,g*=2),b=1<=e+m?b+p/g:b+p*Math.pow(2,1-m),2<=b*g&&(e++,g/=2),e+m>=l?(b=0,e=l):1<=e+m?(b=(b*g-1)*Math.pow(2,f),e+=m):(b=b*Math.pow(2,m-1)*Math.pow(2,f),e=0));for(;8<=f;a[d+n]=b&255,n+=z,b/=256,f-=8);e=e<<f|b;for(h+=f;0<h;a[d+
n]=e&255,n+=z,e/=256,h-=8);a[d+n-z]|=128*A}},{}],2:[function(a,b){function d(a){this.lc=ArrayBuffer.isView&&ArrayBuffer.isView(a)?a:new Uint8Array(a||0);this.type=this.ga=0;this.length=this.lc.length}function e(a,b,d){var e=d.lc,f,g;g=e[d.ga++];f=(g&112)>>4;if(128>g)return h(a,f,b);g=e[d.ga++];f|=(g&127)<<3;if(128>g)return h(a,f,b);g=e[d.ga++];f|=(g&127)<<10;if(128>g)return h(a,f,b);g=e[d.ga++];f|=(g&127)<<17;if(128>g)return h(a,f,b);g=e[d.ga++];f|=(g&127)<<24;if(128>g)return h(a,f,b);g=e[d.ga++];
if(128>g)return h(a,f|(g&1)<<31,b);throw Error("Expected varint not more than 10 bytes");}function h(a,b,d){return d?4294967296*b+(a>>>0):4294967296*(b>>>0)+(a>>>0)}b.ma=d;var l=a("ieee754");d.c=0;d.f=1;d.b=2;d.a=5;d.prototype={mg:function(a,b,d){for(d=d||this.length;this.ga<d;){var e=this.Ma(),f=e>>3,g=this.ga;this.type=e&7;a(f,b,this);this.ga===g&&this.zp(e)}return b},No:function(){var a=l.read(this.lc,this.ga,!0,23,4);this.ga+=4;return a},Jo:function(){var a=l.read(this.lc,this.ga,!0,52,8);this.ga+=
8;return a},Ma:function(a){var b=this.lc,d,f;f=b[this.ga++];d=f&127;if(128>f)return d;f=b[this.ga++];d|=(f&127)<<7;if(128>f)return d;f=b[this.ga++];d|=(f&127)<<14;if(128>f)return d;f=b[this.ga++];d|=(f&127)<<21;if(128>f)return d;f=b[this.ga];return e(d|(f&15)<<28,a,this)},Zo:function(){return this.Ma(!0)},Yd:function(){var a=this.Ma();return 1===a%2?(a+1)/-2:a/2},Ho:function(){return!!this.Ma()},sg:function(){for(var a=this.Ma()+this.ga,b=this.lc,d="",e=this.ga;e<a;){var f=b[e],g=null,h=239<f?4:223<
f?3:191<f?2:1;if(e+h>a)break;var l,z,A;if(1===h)128>f&&(g=f);else if(2===h)l=b[e+1],128===(l&192)&&(g=(f&31)<<6|l&63,127>=g&&(g=null));else if(3===h){if(l=b[e+1],z=b[e+2],128===(l&192)&&128===(z&192)&&(g=(f&15)<<12|(l&63)<<6|z&63,2047>=g||55296<=g&&57343>=g))g=null}else 4===h&&(l=b[e+1],z=b[e+2],A=b[e+3],128===(l&192)&&128===(z&192)&&128===(A&192)&&(g=(f&15)<<18|(l&63)<<12|(z&63)<<6|A&63,65535>=g||1114112<=g))&&(g=null);null===g?(g=65533,h=1):65535<g&&(g-=65536,d+=String.fromCharCode(g>>>10&1023|
55296),g=56320|g&1023);d+=String.fromCharCode(g);e+=h}this.ga=a;return d},zp:function(a){a&=7;if(a===d.c)for(;127<this.lc[this.ga++];);else if(a===d.b)this.ga=this.Ma()+this.ga;else if(a===d.a)this.ga+=4;else if(a===d.f)this.ga+=8;else throw Error("Unimplemented type: "+a);}}},{ieee754:1}]},{},[2])(2)});Bj=b.ma})();(function(){var a={},b={ma:a};(function(c){if("object"===typeof a&&"undefined"!==typeof b)b.ma=c();else{var d;"undefined"!==typeof window?d=window:"undefined"!==typeof global?d=global:"undefined"!==typeof self?d=self:d=this;d.eq=c()}})(function(){return function d(a,b,g){function e(h,l){if(!b[h]){if(!a[h]){var m="function"==typeof require&&require;if(!l&&m)return m(h,!0);if(f)return f(h,!0);m=Error("Cannot find module '"+h+"'");throw m.code="MODULE_NOT_FOUND",m;}m=b[h]={ma:{}};a[h][0].call(m.ma,function(b){var d=
a[h][1][b];return e(d?d:b)},m,m.ma,d,a,b,g)}return b[h].ma}for(var f="function"==typeof require&&require,m=0;m<g.length;m++)e(g[m]);return e}({1:[function(a,b){function d(a,b){this.x=a;this.y=b}b.ma=d;d.prototype={clone:function(){return new d(this.x,this.y)},add:function(a){return this.clone().Ej(a)},rotate:function(a){return this.clone().Oj(a)},round:function(){return this.clone().Pj()},angle:function(){return Math.atan2(this.y,this.x)},Ej:function(a){this.x+=a.x;this.y+=a.y;return this},Oj:function(a){var b=
Math.cos(a);a=Math.sin(a);var d=a*this.x+b*this.y;this.x=b*this.x-a*this.y;this.y=d;return this},Pj:function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this}};d.b=function(a){return a instanceof d?a:Array.isArray(a)?new d(a[0],a[1]):a}},{}],2:[function(a,b){b.ma.Dj=a("./lib/vectortile.js");b.ma.Yp=a("./lib/vectortilefeature.js");b.ma.Zp=a("./lib/vectortilelayer.js")},{"./lib/vectortile.js":3,"./lib/vectortilefeature.js":4,"./lib/vectortilelayer.js":5}],3:[function(a,b){function d(a,
b,d){3===a&&(a=new e(d,d.Ma()+d.ga),a.length&&(b[a.name]=a))}var e=a("./vectortilelayer");b.ma=function(a,b){this.layers=a.mg(d,{},b)}},{"./vectortilelayer":5}],4:[function(a,b){function d(a,b,d,f,g){this.properties={};this.extent=d;this.type=0;this.Cc=a;this.tf=-1;this.ie=f;this.ke=g;a.mg(e,this,b)}function e(a,b,d){if(1==a)b.id=d.Ma();else if(2==a)for(a=d.Ma()+d.ga;d.ga<a;){var e=b.ie[d.Ma()],f=b.ke[d.Ma()];b.properties[e]=f}else 3==a?b.type=d.Ma():4==a&&(b.tf=d.ga)}var h=a("point-geometry");b.ma=
d;d.b=["Unknown","Point","LineString","Polygon"];d.prototype.Ah=function(){var a=this.Cc;a.ga=this.tf;for(var b=a.Ma()+a.ga,d=1,e=0,f=0,g=0,v=[],x;a.ga<b;)if(e||(e=a.Ma(),d=e&7,e>>=3),e--,1===d||2===d)f+=a.Yd(),g+=a.Yd(),1===d&&(x&&v.push(x),x=[]),x.push(new h(f,g));else if(7===d)x&&x.push(x[0].clone());else throw Error("unknown command "+d);x&&v.push(x);return v};d.prototype.bbox=function(){var a=this.Cc;a.ga=this.tf;for(var b=a.Ma()+a.ga,d=1,e=0,f=0,g=0,h=Infinity,x=-Infinity,y=Infinity,z=-Infinity;a.ga<
b;)if(e||(e=a.Ma(),d=e&7,e>>=3),e--,1===d||2===d)f+=a.Yd(),g+=a.Yd(),f<h&&(h=f),f>x&&(x=f),g<y&&(y=g),g>z&&(z=g);else if(7!==d)throw Error("unknown command "+d);return[h,y,x,z]}},{"point-geometry":1}],5:[function(a,b){function d(a,b){this.version=1;this.name=null;this.extent=4096;this.length=0;this.Cc=a;this.ie=[];this.ke=[];this.he=[];a.mg(e,this,b);this.length=this.he.length}function e(a,b,d){15===a?b.version=d.Ma():1===a?b.name=d.sg():5===a?b.extent=d.Ma():2===a?b.he.push(d.ga):3===a?b.ie.push(d.sg()):
4===a&&b.ke.push(h(d))}function h(a){for(var b=null,d=a.Ma()+a.ga;a.ga<d;)b=a.Ma()>>3,b=1===b?a.sg():2===b?a.No():3===b?a.Jo():4===b?a.Zo():5===b?a.Ma():6===b?a.Yd():7===b?a.Ho():null;return b}var l=a("./vectortilefeature.js");b.ma=d;d.prototype.feature=function(a){if(0>a||a>=this.he.length)throw Error("feature index out of bounds");this.Cc.ga=this.he[a];a=this.Cc.Ma()+this.Cc.ga;return new l(this.Cc,a,this.extent,this.ie,this.ke)}},{"./vectortilefeature.js":4}]},{},[2])(2)});Cj=b.ma})();function Yp(a,b,c,d){this.f=a;this.b=b;this.i=c;this.c=d}k=Yp.prototype;k.get=function(a){return this.c[a]};k.Rb=function(){return this.i};k.D=function(){this.a||(this.a="Point"===this.f?Wa(this.b):Xa(this.b,0,this.b.length,2));return this.a};k.fc=function(){return this.b};k.ha=Yp.prototype.fc;k.U=function(){return this};k.mn=function(){return this.c};k.Qd=Yp.prototype.U;k.sa=function(){return 2};k.Nc=na;k.T=function(){return this.f};function Zp(a){Cl.call(this);a=a?a:{};this.defaultDataProjection=new yb({code:"",units:"tile-pixels"});this.b=a.featureClass?a.featureClass:Yp;this.f=a.geometryName;this.a=a.layerName?a.layerName:"layer";this.c=a.layers?a.layers:null}u(Zp,Cl);k=Zp.prototype;k.T=function(){return"arraybuffer"};
k.Qa=function(a,b){var c=this.c,d=new Bj(a),d=new Cj.Dj(d),e=[],f=this.b,g,h,l;for(l in d.layers)if(!c||-1!=c.indexOf(l)){g=d.layers[l];for(var m=0,p=g.length;m<p;++m){if(f===Yp){h=void 0;var n=g.feature(m),q=l,r=n.Ah(),v=[],x=[];$p(r,x,v);var y=n.type;1===y?h=1===r.length?"Point":"MultiPoint":2===y?h=1===r.length?"LineString":"MultiLineString":3===y&&(h="Polygon");n=n.properties;n[this.a]=q;h=new this.b(h,x,v,n)}else{y=g.feature(m);n=l;x=b;h=new this.b;q=y.id;v=y.properties;v[this.a]=n;this.f&&h.Vc(this.f);
n=void 0;r=y.type;if(0===r)n=null;else{var y=y.Ah(),z=[],A=[];$p(y,A,z);1===r?n=1===y.length?new E(null):new O(null):2===r?1===y.length?n=new M(null):n=new N(null):3===r&&(n=new F(null));n.ca("XY",A,z)}x=Fl(n,!1,El(this,x));h.Sa(x);h.kc(q);h.H(v)}e.push(h)}}return e};k.kb=function(){return this.defaultDataProjection};k.Hm=function(a){this.c=a};function $p(a,b,c){for(var d=0,e=0,f=a.length;e<f;++e){var g=a[e],h,l;h=0;for(l=g.length;h<l;++h){var m=g[h];b.push(m.x,m.y)}d+=2*h;c.push(d)}}k.Ub=function(){};
k.Tc=function(){};k.yd=function(){};k.bd=function(){};k.Xb=function(){};function aq(){zm.call(this);this.defaultDataProjection=Gb("EPSG:4326")}u(aq,zm);function bq(a,b){b[b.length-1].ae[a.getAttribute("k")]=a.getAttribute("v")}
var cq=[null],dq=K(cq,{nd:function(a,b){b[b.length-1].md.push(a.getAttribute("ref"))},tag:bq}),fq=K(cq,{node:function(a,b){var c=b[0],d=b[b.length-1],e=a.getAttribute("id"),f=[parseFloat(a.getAttribute("lon")),parseFloat(a.getAttribute("lat"))];d.Eh[e]=f;var g=L({ae:{}},eq,a,b);sb(g.ae)||(f=new E(f),Fl(f,!1,c),c=new H(f),c.kc(e),c.H(g.ae),d.features.push(c))},way:function(a,b){for(var c=b[0],d=a.getAttribute("id"),e=L({md:[],ae:{}},dq,a,b),f=b[b.length-1],g=[],h=0,l=e.md.length;h<l;h++)ga(g,f.Eh[e.md[h]]);
e.md[0]==e.md[e.md.length-1]?(h=new F(null),h.ca("XY",g,[g.length])):(h=new M(null),h.ca("XY",g));Fl(h,!1,c);c=new H(h);c.kc(d);c.H(e.ae);f.features.push(c)}}),eq=K(cq,{tag:bq});aq.prototype.yc=function(a,b){var c=Dl(this,a,b);return"osm"==a.localName&&(c=L({Eh:{},features:[]},fq,a,[c]),c.features)?c.features:[]};aq.prototype.Fg=function(){};aq.prototype.Yb=function(){};aq.prototype.de=function(){};function gq(a){return a.getAttributeNS("http://www.w3.org/1999/xlink","href")};function hq(){}hq.prototype.read=function(a){return ll(a)?this.a(a):ml(a)?this.b(a):"string"===typeof a?(a=nl(a),this.a(a)):null};function iq(){}u(iq,hq);iq.prototype.a=function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType==Node.ELEMENT_NODE)return this.b(a);return null};iq.prototype.b=function(a){return(a=L({},jq,a,[]))?a:null};
var kq=[null,"http://www.opengis.net/ows/1.1"],jq=K(kq,{ServiceIdentification:I(function(a,b){return L({},mq,a,b)}),ServiceProvider:I(function(a,b){return L({},nq,a,b)}),OperationsMetadata:I(function(a,b){return L({},oq,a,b)})}),pq=K(kq,{DeliveryPoint:I(Q),City:I(Q),AdministrativeArea:I(Q),PostalCode:I(Q),Country:I(Q),ElectronicMailAddress:I(Q)}),qq=K(kq,{Value:sl(function(a){return Q(a)})}),rq=K(kq,{AllowedValues:I(function(a,b){return L({},qq,a,b)})}),tq=K(kq,{Phone:I(function(a,b){return L({},
sq,a,b)}),Address:I(function(a,b){return L({},pq,a,b)})}),vq=K(kq,{HTTP:I(function(a,b){return L({},uq,a,b)})}),uq=K(kq,{Get:sl(function(a,b){var c=gq(a);if(c)return L({href:c},wq,a,b)}),Post:void 0}),xq=K(kq,{DCP:I(function(a,b){return L({},vq,a,b)})}),oq=K(kq,{Operation:function(a,b){var c=a.getAttribute("name"),d=L({},xq,a,b);d&&(b[b.length-1][c]=d)}}),sq=K(kq,{Voice:I(Q),Facsimile:I(Q)}),wq=K(kq,{Constraint:sl(function(a,b){var c=a.getAttribute("name");if(c)return L({name:c},rq,a,b)})}),yq=K(kq,
{IndividualName:I(Q),PositionName:I(Q),ContactInfo:I(function(a,b){return L({},tq,a,b)})}),mq=K(kq,{Title:I(Q),ServiceTypeVersion:I(Q),ServiceType:I(Q)}),nq=K(kq,{ProviderName:I(Q),ProviderSite:I(gq),ServiceContact:I(function(a,b){return L({},yq,a,b)})});function zq(a,b,c,d){var e;void 0!==d?e=d:e=[];for(var f=d=0;f<b;){var g=a[f++];e[d++]=a[f++];e[d++]=g;for(g=2;g<c;++g)e[d++]=a[f++]}e.length=d};function Aq(a){a=a?a:{};Cl.call(this);this.defaultDataProjection=Gb("EPSG:4326");this.b=a.factor?a.factor:1E5;this.a=a.geometryLayout?a.geometryLayout:"XY"}u(Aq,In);function Bq(a,b,c){var d,e=Array(b);for(d=0;d<b;++d)e[d]=0;var f,g;f=0;for(g=a.length;f<g;)for(d=0;d<b;++d,++f){var h=a[f],l=h-e[d];e[d]=h;a[f]=l}return Cq(a,c?c:1E5)}function Dq(a,b,c){var d,e=Array(b);for(d=0;d<b;++d)e[d]=0;a=Eq(a,c?c:1E5);var f;c=0;for(f=a.length;c<f;)for(d=0;d<b;++d,++c)e[d]+=a[c],a[c]=e[d];return a}
function Cq(a,b){var c=b?b:1E5,d,e;d=0;for(e=a.length;d<e;++d)a[d]=Math.round(a[d]*c);c=0;for(d=a.length;c<d;++c)e=a[c],a[c]=0>e?~(e<<1):e<<1;c="";d=0;for(e=a.length;d<e;++d){for(var f,g=a[d],h="";32<=g;)f=(32|g&31)+63,h+=String.fromCharCode(f),g>>=5;h+=String.fromCharCode(g+63);c+=h}return c}
function Eq(a,b){var c=b?b:1E5,d=[],e=0,f=0,g,h;g=0;for(h=a.length;g<h;++g){var l=a.charCodeAt(g)-63,e=e|(l&31)<<f;32>l?(d.push(e),f=e=0):f+=5}e=0;for(f=d.length;e<f;++e)g=d[e],d[e]=g&1?~(g>>1):g>>1;e=0;for(f=d.length;e<f;++e)d[e]/=c;return d}k=Aq.prototype;k.Wd=function(a,b){var c=this.ud(a,b);return new H(c)};k.lg=function(a,b){return[this.Wd(a,b)]};k.ud=function(a,b){var c=gf(this.a),d=Dq(a,c,this.b);zq(d,d.length,c,d);c=uf(d,0,d.length,c);return Fl(new M(c,this.a),!1,El(this,b))};
k.be=function(a,b){var c=a.U();if(c)return this.Ad(c,b);qa(!1,40);return""};k.Gg=function(a,b){return this.be(a[0],b)};k.Ad=function(a,b){a=Fl(a,!0,El(this,b));var c=a.ha(),d=a.sa();zq(c,c.length,d,c);return Bq(c,d,this.b)};function Fq(a){a=a?a:{};Cl.call(this);this.defaultDataProjection=Gb(a.defaultDataProjection?a.defaultDataProjection:"EPSG:4326")}u(Fq,Gl);function Gq(a,b){var c=[],d,e,f,g;f=0;for(g=a.length;f<g;++f)d=a[f],0<f&&c.pop(),0<=d?e=b[d]:e=b[~d].slice().reverse(),c.push.apply(c,e);d=0;for(e=c.length;d<e;++d)c[d]=c[d].slice();return c}function Hq(a,b,c,d,e){a=a.geometries;var f=[],g,h;g=0;for(h=a.length;g<h;++g)f[g]=Iq(a[g],b,c,d,e);return f}
function Iq(a,b,c,d,e){var f=a.type,g=Jq[f];b="Point"===f||"MultiPoint"===f?g(a,c,d):g(a,b);c=new H;c.Sa(Fl(b,!1,e));void 0!==a.id&&c.kc(a.id);a.properties&&c.H(a.properties);return c}
Fq.prototype.kg=function(a,b){if("Topology"==a.type){var c,d=null,e=null;a.transform&&(c=a.transform,d=c.scale,e=c.translate);var f=a.arcs;if(c){c=d;var g=e,h,l;h=0;for(l=f.length;h<l;++h){var m,p,n,q=f[h],r=c,v=g,x=0,y=0;p=0;for(m=q.length;p<m;++p)n=q[p],x+=n[0],y+=n[1],n[0]=x,n[1]=y,Kq(n,r,v)}}c=[];g=rb(a.objects);h=0;for(l=g.length;h<l;++h)"GeometryCollection"===g[h].type?(m=g[h],c.push.apply(c,Hq(m,f,d,e,b))):(m=g[h],c.push(Iq(m,f,d,e,b)));return c}return[]};
function Kq(a,b,c){a[0]=a[0]*b[0]+c[0];a[1]=a[1]*b[1]+c[1]}Fq.prototype.rg=function(){return this.defaultDataProjection};
var Jq={Point:function(a,b,c){a=a.coordinates;b&&c&&Kq(a,b,c);return new E(a)},LineString:function(a,b){var c=Gq(a.arcs,b);return new M(c)},Polygon:function(a,b){var c=[],d,e;d=0;for(e=a.arcs.length;d<e;++d)c[d]=Gq(a.arcs[d],b);return new F(c)},MultiPoint:function(a,b,c){a=a.coordinates;var d,e;if(b&&c)for(d=0,e=a.length;d<e;++d)Kq(a[d],b,c);return new O(a)},MultiLineString:function(a,b){var c=[],d,e;d=0;for(e=a.arcs.length;d<e;++d)c[d]=Gq(a.arcs[d],b);return new N(c)},MultiPolygon:function(a,b){var c=
[],d,e,f,g,h,l;h=0;for(l=a.arcs.length;h<l;++h){d=a.arcs[h];e=[];f=0;for(g=d.length;f<g;++f)e[f]=Gq(d[f],b);c[h]=e}return new P(c)}};k=Fq.prototype;k.ad=function(){};k.ce=function(){};k.ee=function(){};k.og=function(){};k.Sc=function(){};function Lq(a){a=a?a:{};this.i=a.featureType;this.a=a.featureNS;this.b=a.gmlFormat?a.gmlFormat:new Pm;this.c=a.schemaLocation?a.schemaLocation:"http://www.opengis.net/wfs http://schemas.opengis.net/wfs/1.1.0/wfs.xsd";zm.call(this)}u(Lq,zm);Lq.prototype.yc=function(a,b){var c={featureType:this.i,featureNS:this.a};pb(c,Dl(this,a,b?b:{}));c=[c];this.b.b["http://www.opengis.net/gml"].featureMember=ql(Cm.prototype.Xd);(c=L([],this.b.b,a,c,this.b))||(c=[]);return c};
Lq.prototype.j=function(a){if(ll(a))return Mq(a);if(ml(a))return L({},Nq,a,[]);if("string"===typeof a)return a=nl(a),Mq(a)};Lq.prototype.l=function(a){if(ll(a))return Oq(this,a);if(ml(a))return Pq(this,a);if("string"===typeof a)return a=nl(a),Oq(this,a)};function Oq(a,b){for(var c=b.firstChild;c;c=c.nextSibling)if(c.nodeType==Node.ELEMENT_NODE)return Pq(a,c)}var Qq={"http://www.opengis.net/gml":{boundedBy:I(Cm.prototype.We,"bounds")}};
function Pq(a,b){var c={},d=Km(b.getAttribute("numberOfFeatures"));c.numberOfFeatures=d;return L(c,Qq,b,[],a.b)}
var Rq={"http://www.opengis.net/wfs":{totalInserted:I(Jm),totalUpdated:I(Jm),totalDeleted:I(Jm)}},Sq={"http://www.opengis.net/ogc":{FeatureId:ql(function(a){return a.getAttribute("fid")})}},Tq={"http://www.opengis.net/wfs":{Feature:function(a,b){yl(Sq,a,b)}}},Nq={"http://www.opengis.net/wfs":{TransactionSummary:I(function(a,b){return L({},Rq,a,b)},"transactionSummary"),InsertResults:I(function(a,b){return L([],Tq,a,b)},"insertIds")}};
function Mq(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType==Node.ELEMENT_NODE)return L({},Nq,a,[])}var Uq={"http://www.opengis.net/wfs":{PropertyName:J(Mm)}};function Vq(a,b){var c=il("http://www.opengis.net/ogc","Filter"),d=il("http://www.opengis.net/ogc","FeatureId");c.appendChild(d);d.setAttribute("fid",b);a.appendChild(c)}
var Wq={"http://www.opengis.net/wfs":{Insert:J(function(a,b,c){var d=c[c.length-1],d=il(d.featureNS,d.featureType);a.appendChild(d);Pm.prototype.cj(d,b,c)}),Update:J(function(a,b,c){var d=c[c.length-1];qa(void 0!==b.a,27);var e=d.featureType,f=d.featurePrefix,f=f?f:"feature",g=d.featureNS;a.setAttribute("typeName",f+":"+e);a.setAttributeNS("http://www.w3.org/2000/xmlns/","xmlns:"+f,g);e=b.a;if(void 0!==e){for(var f=b.O(),g=[],h=0,l=f.length;h<l;h++){var m=b.get(f[h]);void 0!==m&&g.push({name:f[h],
value:m})}zl({node:a,srsName:d.srsName},Wq,ul("Property"),g,c);Vq(a,e)}}),Delete:J(function(a,b,c){var d=c[c.length-1];qa(void 0!==b.a,26);c=d.featureType;var e=d.featurePrefix,e=e?e:"feature",d=d.featureNS;a.setAttribute("typeName",e+":"+c);a.setAttributeNS("http://www.w3.org/2000/xmlns/","xmlns:"+e,d);b=b.a;void 0!==b&&Vq(a,b)}),Property:J(function(a,b,c){var d=il("http://www.opengis.net/wfs","Name");a.appendChild(d);Mm(d,b.name);void 0!==b.value&&null!==b.value&&(d=il("http://www.opengis.net/wfs",
"Value"),a.appendChild(d),b.value instanceof cf?Pm.prototype.zd(d,b.value,c):Mm(d,b.value))}),Native:J(function(a,b){b.Hp&&a.setAttribute("vendorId",b.Hp);void 0!==b.lp&&a.setAttribute("safeToIgnore",b.lp);void 0!==b.value&&Mm(a,b.value)})}};function Xq(a,b,c){var d={node:a};b.b.forEach(function(a){zl(d,Yq,ul(a.Bc),[a],c)})}function Zq(a,b){void 0!==b.a&&a.setAttribute("matchCase",b.a.toString());$q(a,b.b);ar(a,""+b.f)}
function br(a,b,c){a=il("http://www.opengis.net/ogc",a);Mm(a,c);b.appendChild(a)}function $q(a,b){br("PropertyName",a,b)}function ar(a,b){br("Literal",a,b)}
var Yq={"http://www.opengis.net/wfs":{Query:J(function(a,b,c){var d=c[c.length-1],e=d.featurePrefix,f=d.featureNS,g=d.propertyNames,h=d.srsName;a.setAttribute("typeName",(e?e+":":"")+b);h&&a.setAttribute("srsName",h);f&&a.setAttributeNS("http://www.w3.org/2000/xmlns/","xmlns:"+e,f);b=pb({},d);b.node=a;zl(b,Uq,ul("PropertyName"),g,c);if(d=d.filter)g=il("http://www.opengis.net/ogc","Filter"),a.appendChild(g),zl({node:g},Yq,ul(d.Bc),[d],c)})},"http://www.opengis.net/ogc":{And:J(Xq),Or:J(Xq),Not:J(function(a,
b,c){b=b.condition;zl({node:a},Yq,ul(b.Bc),[b],c)}),BBOX:J(function(a,b,c){c[c.length-1].srsName=b.srsName;$q(a,b.geometryName);Pm.prototype.zd(a,b.extent,c)}),Intersects:J(function(a,b,c){c[c.length-1].srsName=b.srsName;$q(a,b.geometryName);Pm.prototype.zd(a,b.geometry,c)}),Within:J(function(a,b,c){c[c.length-1].srsName=b.srsName;$q(a,b.geometryName);Pm.prototype.zd(a,b.geometry,c)}),PropertyIsEqualTo:J(Zq),PropertyIsNotEqualTo:J(Zq),PropertyIsLessThan:J(Zq),PropertyIsLessThanOrEqualTo:J(Zq),PropertyIsGreaterThan:J(Zq),
PropertyIsGreaterThanOrEqualTo:J(Zq),PropertyIsNull:J(function(a,b){$q(a,b.b)}),PropertyIsBetween:J(function(a,b){$q(a,b.b);var c=il("http://www.opengis.net/ogc","LowerBoundary");a.appendChild(c);ar(c,""+b.a);c=il("http://www.opengis.net/ogc","UpperBoundary");a.appendChild(c);ar(c,""+b.f)}),PropertyIsLike:J(function(a,b){a.setAttribute("wildCard",b.g);a.setAttribute("singleChar",b.i);a.setAttribute("escapeChar",b.f);void 0!==b.a&&a.setAttribute("matchCase",b.a.toString());$q(a,b.b);ar(a,""+b.c)})}};
Lq.prototype.o=function(a){var b=il("http://www.opengis.net/wfs","GetFeature");b.setAttribute("service","WFS");b.setAttribute("version","1.1.0");var c;if(a&&(a.handle&&b.setAttribute("handle",a.handle),a.outputFormat&&b.setAttribute("outputFormat",a.outputFormat),void 0!==a.maxFeatures&&b.setAttribute("maxFeatures",a.maxFeatures),a.resultType&&b.setAttribute("resultType",a.resultType),void 0!==a.startIndex&&b.setAttribute("startIndex",a.startIndex),void 0!==a.count&&b.setAttribute("count",a.count),
c=a.filter,a.bbox)){qa(a.geometryName,12);var d=pm(a.geometryName,a.bbox,a.srsName);c?c=om(c,d):c=d}b.setAttributeNS("http://www.w3.org/2001/XMLSchema-instance","xsi:schemaLocation",this.c);c={node:b,srsName:a.srsName,featureNS:a.featureNS?a.featureNS:this.a,featurePrefix:a.featurePrefix,geometryName:a.geometryName,filter:c,propertyNames:a.propertyNames?a.propertyNames:[]};qa(Array.isArray(a.featureTypes),11);a=a.featureTypes;c=[c];d=pb({},c[c.length-1]);d.node=b;zl(d,Yq,ul("Query"),a,c);return b};
Lq.prototype.v=function(a,b,c,d){var e=[],f=il("http://www.opengis.net/wfs","Transaction");f.setAttribute("service","WFS");f.setAttribute("version","1.1.0");var g,h;d&&(g=d.gmlOptions?d.gmlOptions:{},d.handle&&f.setAttribute("handle",d.handle));f.setAttributeNS("http://www.w3.org/2001/XMLSchema-instance","xsi:schemaLocation",this.c);a&&(h={node:f,featureNS:d.featureNS,featureType:d.featureType,featurePrefix:d.featurePrefix,srsName:d.srsName},pb(h,g),zl(h,Wq,ul("Insert"),a,e));b&&(h={node:f,featureNS:d.featureNS,
featureType:d.featureType,featurePrefix:d.featurePrefix,srsName:d.srsName},pb(h,g),zl(h,Wq,ul("Update"),b,e));c&&zl({node:f,featureNS:d.featureNS,featureType:d.featureType,featurePrefix:d.featurePrefix,srsName:d.srsName},Wq,ul("Delete"),c,e);d.nativeElements&&zl({node:f,featureNS:d.featureNS,featureType:d.featureType,featurePrefix:d.featurePrefix,srsName:d.srsName},Wq,ul("Native"),d.nativeElements,e);return f};
Lq.prototype.qg=function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType==Node.ELEMENT_NODE)return this.Ze(a);return null};Lq.prototype.Ze=function(a){if(a.firstElementChild&&a.firstElementChild.firstElementChild)for(a=a.firstElementChild.firstElementChild,a=a.firstElementChild;a;a=a.nextElementSibling)if(0!==a.childNodes.length&&(1!==a.childNodes.length||3!==a.firstChild.nodeType)){var b=[{}];this.b.We(a,b);return Gb(b.pop().srsName)}return null};function cr(a){a=a?a:{};Cl.call(this);this.b=void 0!==a.splitCollection?a.splitCollection:!1}u(cr,In);function dr(a){a=a.X();return a.length?a.join(" "):""}function er(a){a=a.X();for(var b=[],c=0,d=a.length;c<d;++c)b.push(a[c].join(" "));return b.join(",")}function fr(a){var b=[];a=a.jd();for(var c=0,d=a.length;c<d;++c)b.push("("+er(a[c])+")");return b.join(",")}
function gr(a){var b=a.T(),c=(0,hr[b])(a),b=b.toUpperCase();if(a instanceof ff){a=a.ka;var d="";if("XYZ"===a||"XYZM"===a)d+="Z";if("XYM"===a||"XYZM"===a)d+="M";a=d;0<a.length&&(b+=" "+a)}return c.length?b+"("+c+")":b+" EMPTY"}
var hr={Point:dr,LineString:er,Polygon:fr,MultiPoint:function(a){var b=[];a=a.Ie();for(var c=0,d=a.length;c<d;++c)b.push("("+dr(a[c])+")");return b.join(",")},MultiLineString:function(a){var b=[];a=a.hd();for(var c=0,d=a.length;c<d;++c)b.push("("+er(a[c])+")");return b.join(",")},MultiPolygon:function(a){var b=[];a=a.Od();for(var c=0,d=a.length;c<d;++c)b.push("("+fr(a[c])+")");return b.join(",")},GeometryCollection:function(a){var b=[];a=a.If();for(var c=0,d=a.length;c<d;++c)b.push(gr(a[c]));return b.join(",")}};
k=cr.prototype;k.Wd=function(a,b){var c=this.ud(a,b);if(c){var d=new H;d.Sa(c);return d}return null};k.lg=function(a,b){var c=[],d=this.ud(a,b);this.b&&"GeometryCollection"==d.T()?c=d.a:c=[d];for(var e=[],f=0,g=c.length;f<g;++f)d=new H,d.Sa(c[f]),e.push(d);return e};k.ud=function(a,b){var c;c=new ir(new jr(a));kr(c);return(c=lr(c))?Fl(c,!1,b):null};k.be=function(a,b){var c=a.U();return c?this.Ad(c,b):""};
k.Gg=function(a,b){if(1==a.length)return this.be(a[0],b);for(var c=[],d=0,e=a.length;d<e;++d)c.push(a[d].U());c=new qm(c);return this.Ad(c,b)};k.Ad=function(a,b){return gr(Fl(a,!0,b))};function jr(a){this.a=a;this.b=-1}
function mr(a){var b=a.a.charAt(++a.b),c={position:a.b,value:b};if("("==b)c.type=2;else if(","==b)c.type=5;else if(")"==b)c.type=3;else if("0"<=b&&"9">=b||"."==b||"-"==b){c.type=4;var d,b=a.b,e=!1,f=!1;do{if("."==d)e=!0;else if("e"==d||"E"==d)f=!0;d=a.a.charAt(++a.b)}while("0"<=d&&"9">=d||"."==d&&(void 0===e||!e)||!f&&("e"==d||"E"==d)||f&&("-"==d||"+"==d));a=parseFloat(a.a.substring(b,a.b--));c.value=a}else if("a"<=b&&"z">=b||"A"<=b&&"Z">=b){c.type=1;b=a.b;do d=a.a.charAt(++a.b);while("a"<=d&&"z">=
d||"A"<=d&&"Z">=d);a=a.a.substring(b,a.b--).toUpperCase();c.value=a}else{if(" "==b||"\t"==b||"\r"==b||"\n"==b)return mr(a);if(""===b)c.type=6;else throw Error("Unexpected character: "+b);}return c}function ir(a){this.f=a;this.a="XY"}function kr(a){a.b=mr(a.f)}function nr(a,b){var c=a.b.type==b;c&&kr(a);return c}
function lr(a){var b=a.b;if(nr(a,1)){var b=b.value,c="XY",d=a.b;1==a.b.type&&(d=d.value,"Z"===d?c="XYZ":"M"===d?c="XYM":"ZM"===d&&(c="XYZM"),"XY"!==c&&kr(a));a.a=c;if("GEOMETRYCOLLECTION"==b){a:{if(nr(a,2)){b=[];do b.push(lr(a));while(nr(a,5));if(nr(a,3)){a=b;break a}}else if(or(a)){a=[];break a}throw Error(pr(a));}return new qm(a)}d=qr[b];c=rr[b];if(!d||!c)throw Error("Invalid geometry type: "+b);b=d.call(a);return new c(b,a.a)}throw Error(pr(a));}k=ir.prototype;
k.fg=function(){if(nr(this,2)){var a=sr(this);if(nr(this,3))return a}else if(or(this))return null;throw Error(pr(this));};k.eg=function(){if(nr(this,2)){var a=tr(this);if(nr(this,3))return a}else if(or(this))return[];throw Error(pr(this));};k.gg=function(){if(nr(this,2)){var a=ur(this);if(nr(this,3))return a}else if(or(this))return[];throw Error(pr(this));};
k.uo=function(){if(nr(this,2)){var a;if(2==this.b.type)for(a=[this.fg()];nr(this,5);)a.push(this.fg());else a=tr(this);if(nr(this,3))return a}else if(or(this))return[];throw Error(pr(this));};k.to=function(){if(nr(this,2)){var a=ur(this);if(nr(this,3))return a}else if(or(this))return[];throw Error(pr(this));};k.vo=function(){if(nr(this,2)){for(var a=[this.gg()];nr(this,5);)a.push(this.gg());if(nr(this,3))return a}else if(or(this))return[];throw Error(pr(this));};
function sr(a){for(var b=[],c=a.a.length,d=0;d<c;++d){var e=a.b;if(nr(a,4))b.push(e.value);else break}if(b.length==c)return b;throw Error(pr(a));}function tr(a){for(var b=[sr(a)];nr(a,5);)b.push(sr(a));return b}function ur(a){for(var b=[a.eg()];nr(a,5);)b.push(a.eg());return b}function or(a){var b=1==a.b.type&&"EMPTY"==a.b.value;b&&kr(a);return b}function pr(a){return"Unexpected `"+a.b.value+"` at position "+a.b.position+" in `"+a.f.a+"`"}
var rr={POINT:E,LINESTRING:M,POLYGON:F,MULTIPOINT:O,MULTILINESTRING:N,MULTIPOLYGON:P},qr={POINT:ir.prototype.fg,LINESTRING:ir.prototype.eg,POLYGON:ir.prototype.gg,MULTIPOINT:ir.prototype.uo,MULTILINESTRING:ir.prototype.to,MULTIPOLYGON:ir.prototype.vo};function vr(){this.version=void 0}u(vr,hq);vr.prototype.a=function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType==Node.ELEMENT_NODE)return this.b(a);return null};vr.prototype.b=function(a){this.version=a.getAttribute("version").trim();return(a=L({version:this.version},wr,a,[]))?a:null};function xr(a,b){return L({},yr,a,b)}function zr(a,b){return L({},Ar,a,b)}function Br(a,b){var c=xr(a,b);if(c){var d=[Km(a.getAttribute("width")),Km(a.getAttribute("height"))];c.size=d;return c}}
function Cr(a,b){return L([],Dr,a,b)}
var Er=[null,"http://www.opengis.net/wms"],wr=K(Er,{Service:I(function(a,b){return L({},Fr,a,b)}),Capability:I(function(a,b){return L({},Gr,a,b)})}),Gr=K(Er,{Request:I(function(a,b){return L({},Hr,a,b)}),Exception:I(function(a,b){return L([],Ir,a,b)}),Layer:I(function(a,b){return L({},Jr,a,b)})}),Fr=K(Er,{Name:I(Q),Title:I(Q),Abstract:I(Q),KeywordList:I(Cr),OnlineResource:I(gq),ContactInformation:I(function(a,b){return L({},Kr,a,b)}),Fees:I(Q),AccessConstraints:I(Q),LayerLimit:I(Jm),MaxWidth:I(Jm),
MaxHeight:I(Jm)}),Kr=K(Er,{ContactPersonPrimary:I(function(a,b){return L({},Lr,a,b)}),ContactPosition:I(Q),ContactAddress:I(function(a,b){return L({},Mr,a,b)}),ContactVoiceTelephone:I(Q),ContactFacsimileTelephone:I(Q),ContactElectronicMailAddress:I(Q)}),Lr=K(Er,{ContactPerson:I(Q),ContactOrganization:I(Q)}),Mr=K(Er,{AddressType:I(Q),Address:I(Q),City:I(Q),StateOrProvince:I(Q),PostCode:I(Q),Country:I(Q)}),Ir=K(Er,{Format:ql(Q)}),Jr=K(Er,{Name:I(Q),Title:I(Q),Abstract:I(Q),KeywordList:I(Cr),CRS:sl(Q),
EX_GeographicBoundingBox:I(function(a,b){var c=L({},Nr,a,b);if(c){var d=c.westBoundLongitude,e=c.southBoundLatitude,f=c.eastBoundLongitude,c=c.northBoundLatitude;if(void 0!==d&&void 0!==e&&void 0!==f&&void 0!==c)return[d,e,f,c]}}),BoundingBox:sl(function(a){var b=[Im(a.getAttribute("minx")),Im(a.getAttribute("miny")),Im(a.getAttribute("maxx")),Im(a.getAttribute("maxy"))],c=[Im(a.getAttribute("resx")),Im(a.getAttribute("resy"))];return{crs:a.getAttribute("CRS"),extent:b,res:c}}),Dimension:sl(function(a){return{name:a.getAttribute("name"),
units:a.getAttribute("units"),unitSymbol:a.getAttribute("unitSymbol"),"default":a.getAttribute("default"),multipleValues:Fm(a.getAttribute("multipleValues")),nearestValue:Fm(a.getAttribute("nearestValue")),current:Fm(a.getAttribute("current")),values:Q(a)}}),Attribution:I(function(a,b){return L({},Or,a,b)}),AuthorityURL:sl(function(a,b){var c=xr(a,b);if(c)return c.name=a.getAttribute("name"),c}),Identifier:sl(Q),MetadataURL:sl(function(a,b){var c=xr(a,b);if(c)return c.type=a.getAttribute("type"),
c}),DataURL:sl(xr),FeatureListURL:sl(xr),Style:sl(function(a,b){return L({},Pr,a,b)}),MinScaleDenominator:I(Hm),MaxScaleDenominator:I(Hm),Layer:sl(function(a,b){var c=b[b.length-1],d=L({},Jr,a,b);if(d){var e=Fm(a.getAttribute("queryable"));void 0===e&&(e=c.queryable);d.queryable=void 0!==e?e:!1;e=Km(a.getAttribute("cascaded"));void 0===e&&(e=c.cascaded);d.cascaded=e;e=Fm(a.getAttribute("opaque"));void 0===e&&(e=c.opaque);d.opaque=void 0!==e?e:!1;e=Fm(a.getAttribute("noSubsets"));void 0===e&&(e=c.noSubsets);
d.noSubsets=void 0!==e?e:!1;(e=Im(a.getAttribute("fixedWidth")))||(e=c.fixedWidth);d.fixedWidth=e;(e=Im(a.getAttribute("fixedHeight")))||(e=c.fixedHeight);d.fixedHeight=e;["Style","CRS","AuthorityURL"].forEach(function(a){a in c&&(d[a]=(d[a]||[]).concat(c[a]))});"EX_GeographicBoundingBox BoundingBox Dimension Attribution MinScaleDenominator MaxScaleDenominator".split(" ").forEach(function(a){a in d||(d[a]=c[a])});return d}})}),Or=K(Er,{Title:I(Q),OnlineResource:I(gq),LogoURL:I(Br)}),Nr=K(Er,{westBoundLongitude:I(Hm),
eastBoundLongitude:I(Hm),southBoundLatitude:I(Hm),northBoundLatitude:I(Hm)}),Hr=K(Er,{GetCapabilities:I(zr),GetMap:I(zr),GetFeatureInfo:I(zr)}),Ar=K(Er,{Format:sl(Q),DCPType:sl(function(a,b){return L({},Qr,a,b)})}),Qr=K(Er,{HTTP:I(function(a,b){return L({},Rr,a,b)})}),Rr=K(Er,{Get:I(xr),Post:I(xr)}),Pr=K(Er,{Name:I(Q),Title:I(Q),Abstract:I(Q),LegendURL:sl(Br),StyleSheetURL:I(xr),StyleURL:I(xr)}),yr=K(Er,{Format:I(Q),OnlineResource:I(gq)}),Dr=K(Er,{Keyword:ql(Q)});function Sr(a){a=a?a:{};this.a="http://mapserver.gis.umn.edu/mapserver";this.b=new Ym;this.c=a.layers?a.layers:null;zm.call(this)}u(Sr,zm);
Sr.prototype.yc=function(a,b){var c={};b&&pb(c,Dl(this,a,b));var d=[c];a.setAttribute("namespaceURI",this.a);var e=a.localName,c=[];if(a.childNodes.length){if("msGMLOutput"==e)for(var f=0,g=a.childNodes.length;f<g;f++){var h=a.childNodes[f];if(h.nodeType===Node.ELEMENT_NODE){var l=d[0],m=h.localName.replace("_layer","");if(!this.c||ea(this.c,m)){m+="_feature";l.featureType=m;l.featureNS=this.a;var p={};p[m]=ql(this.b.ig,this.b);l=K([l.featureNS,null],p);h.setAttribute("namespaceURI",this.a);(h=L([],
l,h,d,this.b))&&ga(c,h)}}}"FeatureCollection"==e&&(d=L([],this.b.b,a,[{}],this.b))&&(c=d)}return c};Sr.prototype.Fg=function(){};Sr.prototype.Yb=function(){};Sr.prototype.de=function(){};function Tr(){this.f=new iq}u(Tr,hq);Tr.prototype.a=function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType==Node.ELEMENT_NODE)return this.b(a);return null};Tr.prototype.b=function(a){var b=a.getAttribute("version").trim(),c=this.f.b(a);if(!c)return null;c.version=b;return(c=L(c,Ur,a,[]))?c:null};function Vr(a){var b=Q(a).split(" ");if(b&&2==b.length&&(a=+b[0],b=+b[1],!isNaN(a)&&!isNaN(b)))return[a,b]}
var Wr=[null,"http://www.opengis.net/wmts/1.0"],Xr=[null,"http://www.opengis.net/ows/1.1"],Ur=K(Wr,{Contents:I(function(a,b){return L({},Yr,a,b)})}),Yr=K(Wr,{Layer:sl(function(a,b){return L({},Zr,a,b)}),TileMatrixSet:sl(function(a,b){return L({},$r,a,b)})}),Zr=K(Wr,{Style:sl(function(a,b){var c=L({},as,a,b);if(c){var d="true"===a.getAttribute("isDefault");c.isDefault=d;return c}}),Format:sl(Q),TileMatrixSetLink:sl(function(a,b){return L({},bs,a,b)}),Dimension:sl(function(a,b){return L({},cs,a,b)}),
ResourceURL:sl(function(a){var b=a.getAttribute("format"),c=a.getAttribute("template");a=a.getAttribute("resourceType");var d={};b&&(d.format=b);c&&(d.template=c);a&&(d.resourceType=a);return d})},K(Xr,{Title:I(Q),Abstract:I(Q),WGS84BoundingBox:I(function(a,b){var c=L([],ds,a,b);if(2==c.length)return Ha(c)}),Identifier:I(Q)})),as=K(Wr,{LegendURL:sl(function(a){var b={};b.format=a.getAttribute("format");b.href=gq(a);return b})},K(Xr,{Title:I(Q),Identifier:I(Q)})),bs=K(Wr,{TileMatrixSet:I(Q),TileMatrixSetLimits:I(function(a,
b){return L([],es,a,b)})}),es=K(Wr,{TileMatrixLimits:ql(function(a,b){return L({},fs,a,b)})}),fs=K(Wr,{TileMatrix:I(Q),MinTileRow:I(Jm),MaxTileRow:I(Jm),MinTileCol:I(Jm),MaxTileCol:I(Jm)}),cs=K(Wr,{Default:I(Q),Value:sl(Q)},K(Xr,{Identifier:I(Q)})),ds=K(Xr,{LowerCorner:ql(Vr),UpperCorner:ql(Vr)}),$r=K(Wr,{WellKnownScaleSet:I(Q),TileMatrix:sl(function(a,b){return L({},gs,a,b)})},K(Xr,{SupportedCRS:I(Q),Identifier:I(Q)})),gs=K(Wr,{TopLeftCorner:I(Vr),ScaleDenominator:I(Hm),TileWidth:I(Jm),TileHeight:I(Jm),
MatrixWidth:I(Jm),MatrixHeight:I(Jm)},K(Xr,{Identifier:I(Q)}));function hs(a){Gc.call(this);a=a||{};this.a=null;this.i=Vb;this.c=void 0;B(this,Ic("projection"),this.hm,this);B(this,Ic("tracking"),this.im,this);void 0!==a.projection&&this.Ih(Gb(a.projection));void 0!==a.trackingOptions&&this.Si(a.trackingOptions);this.Ee(void 0!==a.tracking?a.tracking:!1)}u(hs,Gc);k=hs.prototype;k.ra=function(){this.Ee(!1);Gc.prototype.ra.call(this)};k.hm=function(){var a=this.Gh();a&&(this.i=Fb(Gb("EPSG:4326"),a),this.a&&this.set("position",this.i(this.a)))};
k.im=function(){if(Od){var a=this.Hh();a&&void 0===this.c?this.c=navigator.geolocation.watchPosition(this.Co.bind(this),this.Do.bind(this),this.th()):a||void 0===this.c||(navigator.geolocation.clearWatch(this.c),this.c=void 0)}};
k.Co=function(a){a=a.coords;this.set("accuracy",a.accuracy);this.set("altitude",null===a.altitude?void 0:a.altitude);this.set("altitudeAccuracy",null===a.altitudeAccuracy?void 0:a.altitudeAccuracy);this.set("heading",null===a.heading?void 0:Ba(a.heading));this.a?(this.a[0]=a.longitude,this.a[1]=a.latitude):this.a=[a.longitude,a.latitude];var b=this.i(this.a);this.set("position",b);this.set("speed",null===a.speed?void 0:a.speed);a=Mf(mh,this.a,a.accuracy);a.Dc(this.i);this.set("accuracyGeometry",a);
this.s()};k.Do=function(a){a.type="error";this.Ee(!1);this.b(a)};k.hk=function(){return this.get("accuracy")};k.ik=function(){return this.get("accuracyGeometry")||null};k.kk=function(){return this.get("altitude")};k.lk=function(){return this.get("altitudeAccuracy")};k.fm=function(){return this.get("heading")};k.gm=function(){return this.get("position")};k.Gh=function(){return this.get("projection")};k.Rk=function(){return this.get("speed")};k.Hh=function(){return this.get("tracking")};k.th=function(){return this.get("trackingOptions")};
k.Ih=function(a){this.set("projection",a)};k.Ee=function(a){this.set("tracking",a)};k.Si=function(a){this.set("trackingOptions",a)};function is(a,b,c){ff.call(this);this.yg(a,b?b:0,c)}u(is,ff);k=is.prototype;k.clone=function(){var a=new is(null);hf(a,this.ka,this.B.slice());a.s();return a};k.Gb=function(a,b,c,d){var e=this.B;a-=e[0];var f=b-e[1];b=a*a+f*f;if(b<d){if(b)for(d=this.Vd()/Math.sqrt(b),c[0]=e[0]+d*a,c[1]=e[1]+d*f,d=2;d<this.a;++d)c[d]=e[d];else for(d=0;d<this.a;++d)c[d]=e[d];c.length=this.a;return b}return d};k.Oc=function(a,b){var c=this.B,d=a-c[0],c=b-c[1];return d*d+c*c<=js(this)};
k.Ba=function(){return this.B.slice(0,this.a)};k.ne=function(a){var b=this.B,c=b[this.a]-b[0];return Va(b[0]-c,b[1]-c,b[0]+c,b[1]+c,a)};k.Vd=function(){return Math.sqrt(js(this))};function js(a){var b=a.B[a.a]-a.B[0];a=a.B[a.a+1]-a.B[1];return b*b+a*a}k.T=function(){return"Circle"};k.Xa=function(a){var b=this.D();return mb(a,b)?(b=this.Ba(),a[0]<=b[0]&&a[2]>=b[0]||a[1]<=b[1]&&a[3]>=b[1]?!0:ab(a,this.sb,this)):!1};
k.wb=function(a){var b=this.a,c=a.slice();c[b]=c[0]+(this.B[b]-this.B[0]);var d;for(d=1;d<b;++d)c[b+d]=a[d];hf(this,this.ka,c);this.s()};k.yg=function(a,b,c){if(a){jf(this,c,a,0);this.B||(this.B=[]);c=this.B;a=rf(c,a);c[a++]=c[0]+b;var d;b=1;for(d=this.a;b<d;++b)c[a++]=c[b];c.length=a}else hf(this,"XY",null);this.s()};k.X=function(){};k.pa=function(){};k.Wc=function(a){this.B[this.a]=this.B[0]+a;this.s()};function ks(a,b,c){for(var d=[],e=a(0),f=a(1),g=b(e),h=b(f),l=[f,e],m=[h,g],p=[1,0],n={},q=1E5,r,v,x,y,z;0<--q&&0<p.length;)x=p.pop(),e=l.pop(),g=m.pop(),f=x.toString(),f in n||(d.push(g[0],g[1]),n[f]=!0),y=p.pop(),f=l.pop(),h=m.pop(),z=(x+y)/2,r=a(z),v=b(r),za(v[0],v[1],g[0],g[1],h[0],h[1])<c?(d.push(h[0],h[1]),f=y.toString(),n[f]=!0):(p.push(y,z,z,x),m.push(h,v,v,g),l.push(f,r,r,e));return d}function ls(a,b,c,d,e){var f=Gb("EPSG:4326");return ks(function(d){return[a,b+(c-b)*d]},Ub(f,d),e)}
function ms(a,b,c,d,e){var f=Gb("EPSG:4326");return ks(function(d){return[b+(c-b)*d,a]},Ub(f,d),e)};function ns(a){a=a||{};this.i=this.j=null;this.f=this.g=Infinity;this.c=this.l=-Infinity;this.A=this.u=Infinity;this.G=this.C=-Infinity;this.R=void 0!==a.targetSize?a.targetSize:100;this.qa=void 0!==a.maxLines?a.maxLines:100;this.b=[];this.a=[];this.ta=void 0!==a.strokeStyle?a.strokeStyle:os;this.I=this.o=void 0;this.v=null;this.setMap(void 0!==a.map?a.map:null)}var os=new rj({color:"rgba(0,0,0,0.2)"}),ps=[90,45,30,20,10,5,2,1,.5,.2,.1,.05,.01,.005,.002,.001];
function qs(a,b,c,d,e,f,g){var h=g;b=ls(b,c,d,a.i,e);h=void 0!==a.b[h]?a.b[h]:new M(null);h.ca("XY",b);mb(h.D(),f)&&(a.b[g++]=h);return g}function rs(a,b,c,d,e){var f=e;b=ms(b,a.c,a.f,a.i,c);f=void 0!==a.a[f]?a.a[f]:new M(null);f.ca("XY",b);mb(f.D(),d)&&(a.a[e++]=f);return e}k=ns.prototype;k.jm=function(){return this.j};k.Gk=function(){return this.b};k.Nk=function(){return this.a};
k.wh=function(a){var b=a.vectorContext,c=a.frameState,d=c.extent;a=c.viewState;var e=a.center,f=a.projection,g=a.resolution;a=c.pixelRatio;a=g*g/(4*a*a);if(!this.i||!Tb(this.i,f)){var h=Gb("EPSG:4326"),l=f.D(),m=f.g,p=Xb(m,h,f),n=m[2],q=m[1],r=m[0],v=p[3],x=p[2],y=p[1],p=p[0];this.g=m[3];this.f=n;this.l=q;this.c=r;this.u=v;this.A=x;this.C=y;this.G=p;this.o=Ub(h,f);this.I=Ub(f,h);this.v=this.I(jb(l));this.i=f}f.a&&(f=f.D(),h=hb(f),c=c.focus[0],c<f[0]||c>f[2])&&(c=h*Math.ceil((f[0]-c)/h),d=[d[0]+c,
d[1],d[2]+c,d[3]]);c=this.v[0];f=this.v[1];h=-1;m=Math.pow(this.R*g,2);n=[];q=[];g=0;for(l=ps.length;g<l;++g){r=ps[g]/2;n[0]=c-r;n[1]=f-r;q[0]=c+r;q[1]=f+r;this.o(n,n);this.o(q,q);r=Math.pow(q[0]-n[0],2)+Math.pow(q[1]-n[1],2);if(r<=m)break;h=ps[g]}g=h;if(-1==g)this.b.length=this.a.length=0;else{c=this.I(e);e=c[0];c=c[1];f=this.qa;h=[Math.max(d[0],this.G),Math.max(d[1],this.C),Math.min(d[2],this.A),Math.min(d[3],this.u)];h=Xb(h,this.i,"EPSG:4326");m=h[3];q=h[1];e=Math.floor(e/g)*g;n=wa(e,this.c,this.f);
l=qs(this,n,q,m,a,d,0);for(h=0;n!=this.c&&h++<f;)n=Math.max(n-g,this.c),l=qs(this,n,q,m,a,d,l);n=wa(e,this.c,this.f);for(h=0;n!=this.f&&h++<f;)n=Math.min(n+g,this.f),l=qs(this,n,q,m,a,d,l);this.b.length=l;c=Math.floor(c/g)*g;e=wa(c,this.l,this.g);l=rs(this,e,a,d,0);for(h=0;e!=this.l&&h++<f;)e=Math.max(e-g,this.l),l=rs(this,e,a,d,l);e=wa(c,this.l,this.g);for(h=0;e!=this.g&&h++<f;)e=Math.min(e+g,this.g),l=rs(this,e,a,d,l);this.a.length=l}b.Na(null,this.ta);a=0;for(e=this.b.length;a<e;++a)g=this.b[a],
b.Qb(g,null);a=0;for(e=this.a.length;a<e;++a)g=this.a[a],b.Qb(g,null)};k.setMap=function(a){this.j&&(this.j.K("postcompose",this.wh,this),this.j.render());a&&(a.J("postcompose",this.wh,this),a.render());this.j=a};function ss(a,b,c,d,e){Dc.call(this);this.i=e;this.extent=a;this.a=c;this.resolution=b;this.state=d}u(ss,Dc);ss.prototype.s=function(){this.b("change")};ss.prototype.D=function(){return this.extent};ss.prototype.V=function(){return this.state};function ts(a,b,c,d,e,f,g){ss.call(this,a,b,c,0,d);this.l=e;this.M=new Image;null!==f&&(this.M.crossOrigin=f);this.c={};this.f=null;this.state=0;this.g=g}u(ts,ss);k=ts.prototype;k.Z=function(a){if(void 0!==a){var b;a=w(a);if(a in this.c)return this.c[a];sb(this.c)?b=this.M:b=this.M.cloneNode(!1);return this.c[a]=b}return this.M};k.mm=function(){this.state=3;this.f.forEach(rc);this.f=null;this.s()};
k.nm=function(){void 0===this.resolution&&(this.resolution=ib(this.extent)/this.M.height);this.state=2;this.f.forEach(rc);this.f=null;this.s()};k.load=function(){if(0==this.state||3==this.state)this.state=1,this.s(),this.f=[wc(this.M,"error",this.mm,this),wc(this.M,"load",this.nm,this)],this.g(this,this.l)};k.zg=function(a){this.M=a};function us(a,b,c,d,e,f){this.c=f?f:null;ss.call(this,a,b,c,f?0:2,d);this.f=e}u(us,ss);us.prototype.g=function(a){this.state=a?3:2;this.s()};us.prototype.load=function(){0==this.state&&(this.state=1,this.s(),this.c(this.g.bind(this)))};us.prototype.Z=function(){return this.f};function vs(a,b){Dc.call(this);this.Ga=a;this.state=b;this.a=null;this.key=""}u(vs,Dc);vs.prototype.s=function(){this.b("change")};vs.prototype.ib=function(){return this.key+"/"+this.Ga};function ws(a){if(!a.a)return a;var b=a.a;do{if(2==b.V())return b;b=b.a}while(b);return a}vs.prototype.i=function(){return this.Ga};vs.prototype.V=function(){return this.state};function xs(a,b,c,d,e){vs.call(this,a,b);this.g=c;this.M=new Image;null!==d&&(this.M.crossOrigin=d);this.c=null;this.j=e}u(xs,vs);k=xs.prototype;k.ra=function(){1==this.state&&ys(this);this.a&&Ac(this.a);this.state=5;this.s();vs.prototype.ra.call(this)};k.Z=function(){return this.M};k.ib=function(){return this.g};k.km=function(){this.state=3;ys(this);this.s()};k.lm=function(){this.state=this.M.naturalWidth&&this.M.naturalHeight?2:4;ys(this);this.s()};
k.load=function(){if(0==this.state||3==this.state)this.state=1,this.s(),this.c=[wc(this.M,"error",this.km,this),wc(this.M,"load",this.lm,this)],this.j(this,this.g)};function ys(a){a.c.forEach(rc);a.c=null};function zs(a){a=a?a:{};ag.call(this,{handleEvent:af});this.g=a.formatConstructors?a.formatConstructors:[];this.j=a.projection?Gb(a.projection):null;this.a=null;this.target=a.target?a.target:null}u(zs,ag);function As(a){a=a.dataTransfer.files;var b,c,d;b=0;for(c=a.length;b<c;++b){d=a.item(b);var e=new FileReader;e.addEventListener("load",this.l.bind(this,d));e.readAsText(d)}}function Bs(a){a.stopPropagation();a.preventDefault();a.dataTransfer.dropEffect="copy"}
zs.prototype.l=function(a,b){var c=b.target.result,d=this.v,e=this.j;e||(e=d.$().o);var d=this.g,f=[],g,h;g=0;for(h=d.length;g<h;++g){var l=new d[g];var m={featureProjection:e};try{f=l.Qa(c,m)}catch(p){f=null}if(f&&0<f.length)break}this.b(new Cs(Ds,a,f,e))};zs.prototype.setMap=function(a){this.a&&(this.a.forEach(rc),this.a=null);ag.prototype.setMap.call(this,a);a&&(a=this.target?this.target:a.c,this.a=[B(a,"drop",As,this),B(a,"dragenter",Bs,this),B(a,"dragover",Bs,this),B(a,"drop",Bs,this)])};
var Ds="addfeatures";function Cs(a,b,c,d){Bc.call(this,a);this.features=c;this.file=b;this.projection=d}u(Cs,Bc);function Es(a){a=a?a:{};pg.call(this,{handleDownEvent:Fs,handleDragEvent:Gs,handleUpEvent:Hs});this.o=a.condition?a.condition:lg;this.a=this.g=void 0;this.j=0;this.u=void 0!==a.duration?a.duration:400}u(Es,pg);function Gs(a){if(ng(a)){var b=a.map,c=b.Mb(),d=a.pixel;a=d[0]-c[0]/2;d=c[1]/2-d[1];c=Math.atan2(d,a);a=Math.sqrt(a*a+d*d);b=b.$();void 0!==this.g&&(d=c-this.g,bg(b,b.Va()-d));this.g=c;void 0!==this.a&&(c=this.a*(b.Ua()/a),dg(b,c));void 0!==this.a&&(this.j=this.a/a);this.a=a}}
function Hs(a){if(!ng(a))return!0;a=a.map.$();Rf(a,1,-1);var b=this.j-1,c=a.Va(),c=a.constrainRotation(c,0);bg(a,c,void 0,void 0);var c=a.Ua(),d=this.u,c=a.constrainResolution(c,0,b);dg(a,c,void 0,d);this.j=0;return!1}function Fs(a){return ng(a)&&this.o(a)?(Rf(a.map.$(),1,1),this.a=this.g=void 0,!0):!1};function Is(a,b,c,d){this.oa=a;this.Y=b;this.overlaps=d;this.c=0;this.resolution=c;this.R=this.ta=null;this.a=[];this.coordinates=[];this.eb=wh();this.b=[];this.qa=null;this.ia=wh();this.ea=wh()}u(Is,Rh);
function Js(a,b,c,d,e,f,g){var h=a.coordinates.length,l=a.Gf();g&&(c+=e);g=[b[c],b[c+1]];var m=[NaN,NaN],p=!0,n,q,r;for(n=c+e;n<d;n+=e)m[0]=b[n],m[1]=b[n+1],r=Ua(l,m),r!==q?(p&&(a.coordinates[h++]=g[0],a.coordinates[h++]=g[1]),a.coordinates[h++]=m[0],a.coordinates[h++]=m[1],p=!1):1===r?(a.coordinates[h++]=m[0],a.coordinates[h++]=m[1],p=!1):p=!0,g[0]=m[0],g[1]=m[1],q=r;if(f&&p||n===c+e)a.coordinates[h++]=g[0],a.coordinates[h++]=g[1];return h}
function Ks(a,b){a.ta=[0,b,0];a.a.push(a.ta);a.R=[0,b,0];a.b.push(a.R)}Is.prototype.Wa=function(a,b){if(this.$a){var c=Bh(this.eb,this.$a.slice());a.translate(c[0],c[1]);a.rotate(b)}a.fill();this.$a&&a.setTransform.apply(a,this.ea)};
function Ls(a,b,c,d,e,f,g,h,l){var m;a.qa&&ia(d,a.eb)?m=a.qa:(a.qa||(a.qa=[]),m=df(a.coordinates,0,a.coordinates.length,2,d,a.qa),Ah(a.eb,d));d=!sb(f);for(var p=0,n=g.length,q=0,r,v=a.ia,x=a.ea,y,z,A,V,Pa=0,ra=0,La=a.a!=g||a.overlaps?0:200;p<n;){var C=g[p],Ma,xb,Z,Ra;switch(C[0]){case 0:q=C[1];d&&f[w(q).toString()]||!q.U()?p=C[2]:void 0===l||mb(l,q.U().D())?++p:p=C[2]+1;break;case 1:Pa>La&&(a.Wa(b,e),Pa=0);ra>La&&(b.stroke(),ra=0);Pa||ra||(b.beginPath(),y=z=NaN);++p;break;case 2:q=C[1];r=m[q];C=m[q+
1];A=m[q+2]-r;q=m[q+3]-C;q=Math.sqrt(A*A+q*q);b.moveTo(r+q,C);b.arc(r,C,q,0,2*Math.PI,!0);++p;break;case 3:b.closePath();++p;break;case 4:q=C[1];r=C[2];Ma=C[3];xb=C[4]*c;Z=C[5]*c;var Cb=C[6],dc=C[7],$c=C[8],$d=C[9];Ra=C[10];A=C[11];V=C[12];var Je=C[13],ue=C[14];for(Ra&&(A+=e);q<r;q+=2){C=m[q]-xb;Ra=m[q+1]-Z;Je&&(C=Math.round(C),Ra=Math.round(Ra));if(1!=V||A){var Tc=C+xb,lh=Ra+Z;Fh(v,Tc,lh,V,V,A,-Tc,-lh);b.setTransform.apply(b,v)}Tc=b.globalAlpha;1!=dc&&(b.globalAlpha=Tc*dc);var lh=ue+$c>Ma.width?
Ma.width-$c:ue,lq=Cb+$d>Ma.height?Ma.height-$d:Cb;b.drawImage(Ma,$c,$d,lh,lq,C,Ra,lh*c,lq*c);1!=dc&&(b.globalAlpha=Tc);(1!=V||A)&&b.setTransform.apply(b,x)}++p;break;case 5:q=C[1];r=C[2];Z=C[3];Cb=C[4]*c;dc=C[5]*c;A=C[6];V=C[7]*c;Ma=C[8];xb=C[9];for((Ra=C[10])&&(A+=e);q<r;q+=2){C=m[q]+Cb;Ra=m[q+1]+dc;if(1!=V||A)Fh(v,C,Ra,V,V,A,-C,-Ra),b.setTransform.apply(b,v);$c=Z.split("\n");$d=$c.length;1<$d?(Je=Math.round(1.5*b.measureText("M").width),Ra-=($d-1)/2*Je):Je=0;for(ue=0;ue<$d;ue++)Tc=$c[ue],xb&&b.strokeText(Tc,
C,Ra),Ma&&b.fillText(Tc,C,Ra),Ra+=Je;(1!=V||A)&&b.setTransform.apply(b,x)}++p;break;case 6:if(h&&(q=C[1],q=h(q)))return q;++p;break;case 7:La?Pa++:a.Wa(b,e);++p;break;case 8:q=C[1];r=C[2];C=m[q];Ra=m[q+1];A=C+.5|0;V=Ra+.5|0;if(A!==y||V!==z)b.moveTo(C,Ra),y=A,z=V;for(q+=2;q<r;q+=2)if(C=m[q],Ra=m[q+1],A=C+.5|0,V=Ra+.5|0,q==r-2||A!==y||V!==z)b.lineTo(C,Ra),y=A,z=V;++p;break;case 9:a.$a=C[2];Pa&&(a.Wa(b,e),Pa=0,ra&&(b.stroke(),ra=0));b.fillStyle=C[1];++p;break;case 10:var q=void 0!==C[8]?C[8]:!0,hl=C[9];
r=C[2];ra&&(b.stroke(),ra=0);b.strokeStyle=C[1];b.lineWidth=q?r*c:r;b.lineCap=C[3];b.lineJoin=C[4];b.miterLimit=C[5];Ld&&(r=C[6],A=C[7],q&&c!==hl&&(r=r.map(function(a){return a*c/hl}),A*=c/hl,C[6]=r,C[7]=A,C[9]=c),b.lineDashOffset=A,b.setLineDash(r));++p;break;case 11:b.font=C[1];b.textAlign=C[2];b.textBaseline=C[3];++p;break;case 12:La?ra++:b.stroke();++p;break;default:++p}}Pa&&a.Wa(b,e);ra&&b.stroke()}Is.prototype.i=function(a,b,c,d,e){Ls(this,a,b,c,d,e,this.a,void 0,void 0)};
function Ms(a){var b=a.b;b.reverse();var c,d=b.length,e,f,g=-1;for(c=0;c<d;++c)if(e=b[c],f=e[0],6==f)g=c;else if(0==f){e[2]=c;e=a.b;for(f=c;g<f;){var h=e[g];e[g]=e[f];e[f]=h;++g;--f}g=-1}}function Ns(a,b){a.ta[2]=a.a.length;a.ta=null;a.R[2]=a.b.length;a.R=null;var c=[6,b];a.a.push(c);a.b.push(c)}Is.prototype.Je=na;Is.prototype.Gf=function(){return this.Y};function Os(a,b,c,d){Is.call(this,a,b,c,d);this.M=this.S=null;this.G=this.C=this.A=this.u=this.I=this.v=this.o=this.j=this.l=this.g=this.f=void 0}u(Os,Is);
Os.prototype.qc=function(a,b){if(this.M){Ks(this,b);var c=a.ha(),d=this.coordinates.length,c=Js(this,c,0,c.length,a.sa(),!1,!1);this.a.push([4,d,c,this.M,this.f,this.g,this.l,this.j,this.o,this.v,this.I,this.u,this.A,this.C,this.G]);this.b.push([4,d,c,this.S,this.f,this.g,this.l,this.j,this.o,this.v,this.I,this.u,this.A,this.C,this.G]);Ns(this,b)}};
Os.prototype.oc=function(a,b){if(this.M){Ks(this,b);var c=a.ha(),d=this.coordinates.length,c=Js(this,c,0,c.length,a.sa(),!1,!1);this.a.push([4,d,c,this.M,this.f,this.g,this.l,this.j,this.o,this.v,this.I,this.u,this.A,this.C,this.G]);this.b.push([4,d,c,this.S,this.f,this.g,this.l,this.j,this.o,this.v,this.I,this.u,this.A,this.C,this.G]);Ns(this,b)}};Os.prototype.Je=function(){Ms(this);this.g=this.f=void 0;this.M=this.S=null;this.G=this.C=this.u=this.I=this.v=this.o=this.j=this.A=this.l=void 0};
Os.prototype.Vb=function(a){var b=a.Hc(),c=a.jc(),d=a.cg(1),e=a.Z(1),f=a.Pc();this.f=b[0];this.g=b[1];this.S=d;this.M=e;this.l=c[1];this.j=a.g;this.o=f[0];this.v=f[1];this.I=a.o;this.u=a.l;this.A=a.c;this.C=a.v;this.G=c[0]};function Ps(a,b,c,d){Is.call(this,a,b,c,d);this.g=null;this.f={Kd:void 0,Ed:void 0,Fd:null,Gd:void 0,Hd:void 0,Id:void 0,Jd:void 0,Sf:0,strokeStyle:void 0,lineCap:void 0,lineDash:null,lineDashOffset:void 0,lineJoin:void 0,lineWidth:void 0,miterLimit:void 0}}u(Ps,Is);function Qs(a,b,c,d,e){var f=a.coordinates.length;b=Js(a,b,c,d,e,!1,!1);f=[8,f,b];a.a.push(f);a.b.push(f);return d}k=Ps.prototype;k.Gf=function(){this.g||(this.g=Na(this.Y),0<this.c&&Ka(this.g,this.resolution*(this.c+1)/2,this.g));return this.g};
function Rs(a){var b=a.f,c=b.strokeStyle,d=b.lineCap,e=b.lineDash,f=b.lineDashOffset,g=b.lineJoin,h=b.lineWidth,l=b.miterLimit;b.Kd==c&&b.Ed==d&&ia(b.Fd,e)&&b.Gd==f&&b.Hd==g&&b.Id==h&&b.Jd==l||(b.Sf!=a.coordinates.length&&(a.a.push([12]),b.Sf=a.coordinates.length),a.a.push([10,c,h,d,g,l,e,f,!0,1],[1]),b.Kd=c,b.Ed=d,b.Fd=e,b.Gd=f,b.Hd=g,b.Id=h,b.Jd=l)}
k.Qb=function(a,b){var c=this.f,d=c.lineWidth;void 0!==c.strokeStyle&&void 0!==d&&(Rs(this),Ks(this,b),this.b.push([10,c.strokeStyle,c.lineWidth,c.lineCap,c.lineJoin,c.miterLimit,c.lineDash,c.lineDashOffset,!0,1],[1]),c=a.ha(),Qs(this,c,0,c.length,a.sa()),this.b.push([12]),Ns(this,b))};
k.nc=function(a,b){var c=this.f,d=c.lineWidth;if(void 0!==c.strokeStyle&&void 0!==d){Rs(this);Ks(this,b);this.b.push([10,c.strokeStyle,c.lineWidth,c.lineCap,c.lineJoin,c.miterLimit,c.lineDash,c.lineDashOffset,!0,1],[1]);var c=a.Rb(),d=a.ha(),e=a.sa(),f=0,g,h;g=0;for(h=c.length;g<h;++g)f=Qs(this,d,f,c[g],e);this.b.push([12]);Ns(this,b)}};k.Je=function(){this.f.Sf!=this.coordinates.length&&this.a.push([12]);Ms(this);this.f=null};
k.Na=function(a,b){var c=b.a;this.f.strokeStyle=Vc(c?c:Ph);c=b.i;this.f.lineCap=void 0!==c?c:"round";c=b.f;this.f.lineDash=c?c:Oh;c=b.g;this.f.lineDashOffset=c?c:0;c=b.l;this.f.lineJoin=void 0!==c?c:"round";c=b.c;this.f.lineWidth=void 0!==c?c:1;c=b.j;this.f.miterLimit=void 0!==c?c:10;this.f.lineWidth>this.c&&(this.c=this.f.lineWidth,this.g=null)};function Ss(a,b,c,d){Is.call(this,a,b,c,d);this.g=null;this.f={Yg:void 0,Kd:void 0,Ed:void 0,Fd:null,Gd:void 0,Hd:void 0,Id:void 0,Jd:void 0,fillStyle:void 0,strokeStyle:void 0,lineCap:void 0,lineDash:null,lineDashOffset:void 0,lineJoin:void 0,lineWidth:void 0,miterLimit:void 0}}u(Ss,Is);
function Ts(a,b,c,d,e){var f=a.f,g=void 0!==f.fillStyle,f=void 0!=f.strokeStyle,h=d.length,l=[1];a.a.push(l);a.b.push(l);for(l=0;l<h;++l){var m=d[l],p=a.coordinates.length;c=Js(a,b,c,m,e,!0,!f);c=[8,p,c];a.a.push(c);a.b.push(c);f&&(c=[3],a.a.push(c),a.b.push(c));c=m}b=[7];a.b.push(b);g&&a.a.push(b);f&&(g=[12],a.a.push(g),a.b.push(g));return c}k=Ss.prototype;
k.$b=function(a,b){var c=this.f,d=c.strokeStyle;if(void 0!==c.fillStyle||void 0!==d){Us(this,a);Ks(this,b);this.b.push([9,Sc(Nh)]);void 0!==c.strokeStyle&&this.b.push([10,c.strokeStyle,c.lineWidth,c.lineCap,c.lineJoin,c.miterLimit,c.lineDash,c.lineDashOffset,!0,1]);var e=a.ha(),d=this.coordinates.length;Js(this,e,0,e.length,a.sa(),!1,!1);e=[1];d=[2,d];this.a.push(e,d);this.b.push(e,d);d=[7];this.b.push(d);void 0!==c.fillStyle&&this.a.push(d);void 0!==c.strokeStyle&&(c=[12],this.a.push(c),this.b.push(c));
Ns(this,b)}};k.rc=function(a,b){var c=this.f;Us(this,a);Ks(this,b);this.b.push([9,Sc(Nh)]);void 0!==c.strokeStyle&&this.b.push([10,c.strokeStyle,c.lineWidth,c.lineCap,c.lineJoin,c.miterLimit,c.lineDash,c.lineDashOffset,!0,1]);var c=a.Rb(),d=a.fc();Ts(this,d,0,c,a.sa());Ns(this,b)};
k.pc=function(a,b){var c=this.f,d=c.strokeStyle;if(void 0!==c.fillStyle||void 0!==d){Us(this,a);Ks(this,b);this.b.push([9,Sc(Nh)]);void 0!==c.strokeStyle&&this.b.push([10,c.strokeStyle,c.lineWidth,c.lineCap,c.lineJoin,c.miterLimit,c.lineDash,c.lineDashOffset,!0,1]);var c=a.c,d=ai(a),e=a.sa(),f=0,g,h;g=0;for(h=c.length;g<h;++g)f=Ts(this,d,f,c[g],e);Ns(this,b)}};k.Je=function(){Ms(this);this.f=null;var a=this.oa;if(a){var b=this.coordinates,c,d;c=0;for(d=b.length;c<d;++c)b[c]=a*Math.round(b[c]/a)}};
k.Gf=function(){this.g||(this.g=Na(this.Y),0<this.c&&Ka(this.g,this.resolution*(this.c+1)/2,this.g));return this.g};
k.Na=function(a,b){var c=this.f;if(a){var d=a.b;c.fillStyle=Vc(d?d:Nh)}else c.fillStyle=void 0;b?(d=b.a,c.strokeStyle=Vc(d?d:Ph),d=b.i,c.lineCap=void 0!==d?d:"round",d=b.f,c.lineDash=d?d.slice():Oh,d=b.g,c.lineDashOffset=d?d:0,d=b.l,c.lineJoin=void 0!==d?d:"round",d=b.c,c.lineWidth=void 0!==d?d:1,d=b.j,c.miterLimit=void 0!==d?d:10,c.lineWidth>this.c&&(this.c=c.lineWidth,this.g=null)):(c.strokeStyle=void 0,c.lineCap=void 0,c.lineDash=null,c.lineDashOffset=void 0,c.lineJoin=void 0,c.lineWidth=void 0,
c.miterLimit=void 0)};function Us(a,b){var c=a.f,d=c.fillStyle,e=c.strokeStyle,f=c.lineCap,g=c.lineDash,h=c.lineDashOffset,l=c.lineJoin,m=c.lineWidth,p=c.miterLimit;if(void 0!==d&&("string"!==typeof d||c.Yg!=d)){var n=[9,d];"string"!==typeof d&&(d=b.D(),n.push([d[0],d[3]]));a.a.push(n);c.Yg=c.fillStyle}void 0===e||c.Kd==e&&c.Ed==f&&ia(c.Fd,g)&&c.Gd==h&&c.Hd==l&&c.Id==m&&c.Jd==p||(a.a.push([10,e,m,f,l,p,g,h,!0,1]),c.Kd=e,c.Ed=f,c.Fd=g,c.Gd=h,c.Hd=l,c.Id=m,c.Jd=p)};function Vs(a,b,c,d){Is.call(this,a,b,c,d);this.G=this.C=this.A=null;this.Fa="";this.o=this.j=0;this.v=void 0;this.u=this.I=0;this.l=this.g=this.f=null}u(Vs,Is);
Vs.prototype.xc=function(a,b,c,d,e,f){if(""!==this.Fa&&this.l&&(this.f||this.g)){if(this.f){e=this.f;var g=this.A;if(!g||g.fillStyle!=e.fillStyle){var h=[9,e.fillStyle];this.a.push(h);this.b.push(h);g?g.fillStyle=e.fillStyle:this.A={fillStyle:e.fillStyle}}}this.g&&(e=this.g,g=this.C,g&&g.lineCap==e.lineCap&&g.lineDash==e.lineDash&&g.lineDashOffset==e.lineDashOffset&&g.lineJoin==e.lineJoin&&g.lineWidth==e.lineWidth&&g.miterLimit==e.miterLimit&&g.strokeStyle==e.strokeStyle||(h=[10,e.strokeStyle,e.lineWidth,
e.lineCap,e.lineJoin,e.miterLimit,e.lineDash,e.lineDashOffset,!1,1],this.a.push(h),this.b.push(h),g?(g.lineCap=e.lineCap,g.lineDash=e.lineDash,g.lineDashOffset=e.lineDashOffset,g.lineJoin=e.lineJoin,g.lineWidth=e.lineWidth,g.miterLimit=e.miterLimit,g.strokeStyle=e.strokeStyle):this.C={lineCap:e.lineCap,lineDash:e.lineDash,lineDashOffset:e.lineDashOffset,lineJoin:e.lineJoin,lineWidth:e.lineWidth,miterLimit:e.miterLimit,strokeStyle:e.strokeStyle}));e=this.l;g=this.G;g&&g.font==e.font&&g.textAlign==
e.textAlign&&g.textBaseline==e.textBaseline||(h=[11,e.font,e.textAlign,e.textBaseline],this.a.push(h),this.b.push(h),g?(g.font=e.font,g.textAlign=e.textAlign,g.textBaseline=e.textBaseline):this.G={font:e.font,textAlign:e.textAlign,textBaseline:e.textBaseline});Ks(this,f);e=this.coordinates.length;a=Js(this,a,b,c,d,!1,!1);a=[5,e,a,this.Fa,this.j,this.o,this.I,this.u,!!this.f,!!this.g,this.v];this.a.push(a);this.b.push(a);Ns(this,f)}};
Vs.prototype.Tb=function(a){if(a){var b=a.Ca();b?(b=b.b,b=Vc(b?b:Nh),this.f?this.f.fillStyle=b:this.f={fillStyle:b}):this.f=null;var c=a.Da();if(c){var b=c.a,d=c.i,e=c.f,f=c.g,g=c.l,h=c.c,c=c.j,d=void 0!==d?d:"round",e=e?e.slice():Oh,f=void 0!==f?f:0,g=void 0!==g?g:"round",h=void 0!==h?h:1,c=void 0!==c?c:10,b=Vc(b?b:Ph);if(this.g){var l=this.g;l.lineCap=d;l.lineDash=e;l.lineDashOffset=f;l.lineJoin=g;l.lineWidth=h;l.miterLimit=c;l.strokeStyle=b}else this.g={lineCap:d,lineDash:e,lineDashOffset:f,lineJoin:g,
lineWidth:h,miterLimit:c,strokeStyle:b}}else this.g=null;var m=a.a,b=a.f,d=a.c,e=a.j,h=a.i,c=a.b,f=a.Pa(),g=a.g,l=a.l;a=void 0!==m?m:"10px sans-serif";g=void 0!==g?g:"center";l=void 0!==l?l:"middle";this.l?(m=this.l,m.font=a,m.textAlign=g,m.textBaseline=l):this.l={font:a,textAlign:g,textBaseline:l};this.Fa=void 0!==f?f:"";this.j=void 0!==b?b:0;this.o=void 0!==d?d:0;this.v=void 0!==e?e:!1;this.I=void 0!==h?h:0;this.u=void 0!==c?c:1}else this.Fa=""};function Ws(a,b,c,d,e){this.I=a;this.c=b;this.o=d;this.v=c;this.g=e;this.a={};this.l=Xc(1,1);this.j=wh()}u(Ws,fi);var Xs={0:[[!0]]};function Ys(a,b,c){var d,e=Math.floor(a.length/2);if(b>=e)for(d=e;d<b;d++)a[d][c]=!0;else if(b<e)for(d=b+1;d<e;d++)a[d][c]=!0}
function Zs(a){if(void 0!==Xs[a])return Xs[a];for(var b=2*a+1,c=Array(b),d=0;d<b;d++)c[d]=Array(b);for(var b=a,e=d=0;b>=d;)Ys(c,a+b,a+d),Ys(c,a+d,a+b),Ys(c,a-d,a+b),Ys(c,a-b,a+d),Ys(c,a-b,a-d),Ys(c,a-d,a-b),Ys(c,a+d,a-b),Ys(c,a+b,a-d),d++,e+=1+2*d,0<2*(e-b)+1&&(--b,e+=1-2*b);return Xs[a]=c}function $s(a){for(var b in a.a){var c=a.a[b],d;for(d in c)c[d].Je()}}
Ws.prototype.Aa=function(a,b,c,d,e,f){d=Math.round(d);var g=2*d+1,h=Fh(this.j,d+.5,d+.5,1/b,-1/b,-c,-a[0],-a[1]),l=this.l;l.canvas.width!==g||l.canvas.height!==g?(l.canvas.width=g,l.canvas.height=g):l.clearRect(0,0,g,g);var m;void 0!==this.g&&(m=Ia(),Ja(m,a),Ka(m,b*(this.g+d),m));var p=Zs(d);return at(this,l,h,c,e,function(a){for(var b=l.getImageData(0,0,g,g).data,c=0;c<g;c++)for(var d=0;d<g;d++)if(p[c][d]&&0<b[4*(d*g+c)+3]){if(a=f(a))return a;l.clearRect(0,0,g,g);return}},m)};
function bt(a,b){var c=a.c,d=c[0],e=c[1],f=c[2],c=c[3],d=[d,e,d,c,f,c,f,e];df(d,0,8,2,b,d);return d}Ws.prototype.b=function(a,b){var c=void 0!==a?a.toString():"0",d=this.a[c];void 0===d&&(d={},this.a[c]=d);c=d[b];void 0===c&&(c=new ct[b](this.I,this.c,this.v,this.o),d[b]=c);return c};Ws.prototype.f=function(){return sb(this.a)};
Ws.prototype.i=function(a,b,c,d,e,f){var g=Object.keys(this.a).map(Number);g.sort(da);var h=bt(this,c);a.save();a.beginPath();a.moveTo(h[0],h[1]);a.lineTo(h[2],h[3]);a.lineTo(h[4],h[5]);a.lineTo(h[6],h[7]);a.clip();f=f?f:ei;var l,m,p,n,q,h=0;for(l=g.length;h<l;++h)for(n=this.a[g[h].toString()],m=0,p=f.length;m<p;++m)q=n[f[m]],void 0!==q&&q.i(a,b,c,d,e);a.restore()};
function at(a,b,c,d,e,f,g){var h=Object.keys(a.a).map(Number);h.sort(function(a,b){return b-a});var l,m,p,n,q;l=0;for(m=h.length;l<m;++l)for(n=a.a[h[l].toString()],p=ei.length-1;0<=p;--p)if(q=n[ei[p]],void 0!==q&&(q=Ls(q,b,1,c,d,e,q.b,f,g)))return q}var ct={Circle:Ss,Image:Os,LineString:Ps,Polygon:Ss,Text:Vs};function dt(a){Fc.call(this);this.a=a}u(dt,Fc);dt.prototype.Aa=na;dt.prototype.Ke=bf;dt.prototype.Cf=function(a,b,c){return function(d,e){return et(a,b,d,e,function(a){c[d]||(c[d]={});c[d][a.Ga.toString()]=a})}};dt.prototype.ea=function(a){2===a.target.V()&&ft(this)};function gt(a,b){var c=b.V();2!=c&&3!=c&&B(b,"change",a.ea,a);0==c&&(b.load(),c=b.V());return 2==c}function ft(a){var b=a.a;b.Kb()&&"ready"==b.Nf()&&a.s()}
function ht(a,b){b.fi()&&a.postRenderFunctions.push(function(a,b,e){b=w(a).toString();a.gd(e.viewState.projection,e.usedTiles[b])}.bind(null,b))}function it(a,b){if(b){var c,d,e;d=0;for(e=b.length;d<e;++d)c=b[d],a[w(c).toString()]=c}}function jt(a,b){var c=b.R;void 0!==c&&("string"===typeof c?a.logos[c]="":c&&(qa("string"==typeof c.href,44),qa("string"==typeof c.src,45),a.logos[c.src]=c.href))}
function kt(a,b,c,d){b=w(b).toString();c=c.toString();b in a?c in a[b]?(a=a[b][c],d.da<a.da&&(a.da=d.da),d.ba>a.ba&&(a.ba=d.ba),d.fa<a.fa&&(a.fa=d.fa),d.ja>a.ja&&(a.ja=d.ja)):a[b][c]=d:(a[b]={},a[b][c]=d)}
function lt(a,b,c,d,e,f,g,h,l,m){var p=w(b).toString();p in a.wantedTiles||(a.wantedTiles[p]={});var n=a.wantedTiles[p];a=a.tileQueue;var q=c.minZoom,r,v,x,y,z,A;for(A=g;A>=q;--A)for(v=cc(c,f,A,v),x=c.La(A),y=v.da;y<=v.ba;++y)for(z=v.fa;z<=v.ja;++z)g-A<=h?(r=b.Lc(A,y,z,d,e),0==r.V()&&(n[r.ib()]=!0,r.ib()in a.a||a.i([r,p,ic(c,r.Ga),x])),l&&l.call(m,r)):b.Eg(A,y,z,e)};function mt(a){dt.call(this,a);this.ia=wh()}u(mt,dt);function nt(a,b,c){var d=b.pixelRatio,e=b.size[0]*d,f=b.size[1]*d,g=b.viewState.rotation,h=eb(c),l=db(c),m=cb(c);c=bb(c);Bh(b.coordinateToPixelTransform,h);Bh(b.coordinateToPixelTransform,l);Bh(b.coordinateToPixelTransform,m);Bh(b.coordinateToPixelTransform,c);a.save();Qh(a,-g,e/2,f/2);a.beginPath();a.moveTo(h[0]*d,h[1]*d);a.lineTo(l[0]*d,l[1]*d);a.lineTo(m[0]*d,m[1]*d);a.lineTo(c[0]*d,c[1]*d);a.clip();Qh(a,g,e/2,f/2)}
function ot(a,b,c,d,e){var f=a.a;if(Ec(f,b)){var g=d.size[0]*d.pixelRatio,h=d.size[1]*d.pixelRatio,l=d.viewState.rotation;Qh(c,-l,g/2,h/2);a=e?e:pt(a,d,0);f.b(new Mh(b,new Sh(c,d.pixelRatio,d.extent,a,d.viewState.rotation),d,c,null));Qh(c,l,g/2,h/2)}}mt.prototype.v=function(a,b,c,d){if(this.Aa(a,b,0,af,this))return c.call(d,this.a,null)};mt.prototype.Ue=function(a,b,c,d){ot(this,"postcompose",a,b,d)};
function pt(a,b,c){var d=b.viewState,e=b.pixelRatio,f=e/d.resolution;return Fh(a.ia,e*b.size[0]/2,e*b.size[1]/2,f,-f,-d.rotation,-d.center[0]+c,-d.center[1])};function qt(a,b){return w(a)-w(b)}function rt(a,b){var c=.5*a/b;return c*c}function st(a,b,c,d,e,f){var g=!1,h,l;if(h=c.Z())l=h.Oe(),2==l||3==l?h.Yi(e,f):(0==l&&h.load(),h.zh(e,f),g=!0);if(e=(0,c.Ra)(b))d=e.Qd(d),(0,tt[d.T()])(a,d,c,b);return g}
var tt={Point:function(a,b,c,d){var e=c.Z();if(e){if(2!=e.Oe())return;var f=a.b(c.za(),"Image");f.Vb(e);f.qc(b,d)}if(e=c.Pa())a=a.b(c.za(),"Text"),a.Tb(e),a.xc(b.ha(),0,2,2,b,d)},LineString:function(a,b,c,d){var e=c.Da();if(e){var f=a.b(c.za(),"LineString");f.Na(null,e);f.Qb(b,d)}if(e=c.Pa())a=a.b(c.za(),"Text"),a.Tb(e),a.xc(Zh(b),0,2,2,b,d)},Polygon:function(a,b,c,d){var e=c.Ca(),f=c.Da();if(e||f){var g=a.b(c.za(),"Polygon");g.Na(e,f);g.rc(b,d)}if(e=c.Pa())a=a.b(c.za(),"Text"),a.Tb(e),a.xc(Lf(b),
0,2,2,b,d)},MultiPoint:function(a,b,c,d){var e=c.Z();if(e){if(2!=e.Oe())return;var f=a.b(c.za(),"Image");f.Vb(e);f.oc(b,d)}if(e=c.Pa())a=a.b(c.za(),"Text"),a.Tb(e),c=b.ha(),a.xc(c,0,c.length,b.sa(),b,d)},MultiLineString:function(a,b,c,d){var e=c.Da();if(e){var f=a.b(c.za(),"LineString");f.Na(null,e);f.nc(b,d)}if(e=c.Pa())a=a.b(c.za(),"Text"),a.Tb(e),c=$h(b),a.xc(c,0,c.length,2,b,d)},MultiPolygon:function(a,b,c,d){var e=c.Ca(),f=c.Da();if(f||e){var g=a.b(c.za(),"Polygon");g.Na(e,f);g.pc(b,d)}if(e=
c.Pa())a=a.b(c.za(),"Text"),a.Tb(e),c=bi(b),a.xc(c,0,c.length,2,b,d)},GeometryCollection:function(a,b,c,d){b=b.a;var e,f;e=0;for(f=b.length;e<f;++e)(0,tt[b[e].T()])(a,b[e],c,d)},Circle:function(a,b,c,d){var e=c.Ca(),f=c.Da();if(e||f){var g=a.b(c.za(),"Circle");g.Na(e,f);g.$b(b,d)}if(e=c.Pa())a=a.b(c.za(),"Text"),a.Tb(e),a.xc(b.Ba(),0,2,2,b,d)}};function ut(a){mt.call(this,a);this.c=!1;this.u=-1;this.o=NaN;this.l=Ia();this.i=this.j=null;this.g=Xc()}u(ut,mt);
ut.prototype.I=function(a,b,c){var d=a.extent,e=a.pixelRatio,f=b.De?a.skippedFeatureUids:{},g=a.viewState,h=g.projection,g=g.rotation,l=h.D(),m=this.a.la(),p=pt(this,a,0);ot(this,"precompose",c,a,p);var n=b.extent,q=void 0!==n;q&&nt(c,a,n);if((n=this.i)&&!n.f()){var r=0,v=0,x;if(Ec(this.a,"render")){x=c.canvas.width;var y=c.canvas.height;if(g){var z=Math.round(Math.sqrt(x*x+y*y)),r=(z-x)/2,v=(z-y)/2;x=y=z}this.g.canvas.width=x;this.g.canvas.height=y;x=this.g}else x=c;y=x.globalAlpha;x.globalAlpha=
b.opacity;x!=c&&x.translate(r,v);var z=a.size[0]*e,A=a.size[1]*e;Qh(x,-g,z/2,A/2);n.i(x,e,p,g,f);if(m.G&&h.a&&!Ta(l,d)){for(var h=d[0],m=hb(l),V=0;h<l[0];)--V,p=m*V,p=pt(this,a,p),n.i(x,e,p,g,f),h+=m;V=0;for(h=d[2];h>l[2];)++V,p=m*V,p=pt(this,a,p),n.i(x,e,p,g,f),h-=m;p=pt(this,a,0)}Qh(x,g,z/2,A/2);x!=c&&(ot(this,"render",x,a,p),c.drawImage(x.canvas,-r,-v),x.translate(-r,-v));x.globalAlpha=y}q&&c.restore();this.Ue(c,a,b,p)};
ut.prototype.Aa=function(a,b,c,d,e){if(this.i){var f=this.a,g={};return this.i.Aa(a,b.viewState.resolution,b.viewState.rotation,c,{},function(a){var b=w(a).toString();if(!(b in g))return g[b]=!0,d.call(e,a,f)})}};ut.prototype.A=function(){ft(this)};
ut.prototype.qd=function(a){function b(a){var b,d=a.Nc();d?b=d.call(a,m):(d=c.i)&&(b=d(a,m));if(b){if(b){d=!1;if(Array.isArray(b))for(var e=0,f=b.length;e<f;++e)d=st(q,a,b[e],rt(m,p),this.A,this)||d;else d=st(q,a,b,rt(m,p),this.A,this)||d;a=d}else a=!1;this.c=this.c||a}}var c=this.a,d=c.la();it(a.attributions,d.l);jt(a,d);var e=a.viewHints[0],f=a.viewHints[1],g=c.ea,h=c.ia;if(!this.c&&!g&&e||!h&&f)return!0;var l=a.extent,h=a.viewState,e=h.projection,m=h.resolution,p=a.pixelRatio,f=c.f,n=c.c,g=c.get(vt);
void 0===g&&(g=qt);l=Ka(l,n*m);n=h.projection.D();d.G&&h.projection.a&&!Ta(n,a.extent)&&(a=Math.max(hb(l)/2,hb(n)),l[0]=n[0]-a,l[2]=n[2]+a);if(!this.c&&this.o==m&&this.u==f&&this.j==g&&Ta(this.l,l))return!0;this.i=null;this.c=!1;var q=new Ws(.5*m/p,l,m,d.Ha,c.c);d.Ud(l,m,e);if(g){var r=[];d.ac(l,function(a){r.push(a)},this);r.sort(g);r.forEach(b,this)}else d.ac(l,b,this);$s(q);this.o=m;this.u=f;this.j=g;this.l=l;this.i=q;return!0};function wt(){this.b="precision mediump float;varying vec2 a;uniform float f;uniform sampler2D g;void main(void){vec4 texColor=texture2D(g,a);gl_FragColor.rgb=texColor.rgb;gl_FragColor.a=texColor.a*f;}"}u(wt,hi);var xt=new wt;function yt(){this.b="varying vec2 a;attribute vec2 b;attribute vec2 c;uniform mat4 d;uniform mat4 e;void main(void){gl_Position=e*vec4(b,0.,1.);a=(d*vec4(c,0.,1.)).st;}"}u(yt,ii);var zt=new yt;
function At(a,b){this.f=a.getUniformLocation(b,"f");this.c=a.getUniformLocation(b,"e");this.g=a.getUniformLocation(b,"d");this.i=a.getUniformLocation(b,"g");this.b=a.getAttribLocation(b,"b");this.a=a.getAttribLocation(b,"c")};function Bt(a,b){dt.call(this,b);this.c=a;this.Y=new yi([-1,-1,0,0,1,-1,1,0,-1,1,0,1,1,1,1,1]);this.g=this.Fb=null;this.l=void 0;this.v=wh();this.u=wh();this.C=oi();this.I=null}u(Bt,dt);
function Ct(a,b,c){var d=a.c.f;if(void 0===a.l||a.l!=c){b.postRenderFunctions.push(function(a,b,c){a.isContextLost()||(a.deleteFramebuffer(b),a.deleteTexture(c))}.bind(null,d,a.g,a.Fb));b=Li(d,c,c);var e=d.createFramebuffer();d.bindFramebuffer(36160,e);d.framebufferTexture2D(36160,36064,3553,b,0);a.Fb=b;a.g=e;a.l=c}else d.bindFramebuffer(36160,a.g)}
Bt.prototype.ai=function(a,b,c){Dt(this,"precompose",c,a);ri(c,34962,this.Y);var d=c.b,e=Ci(c,xt,zt),f;this.I?f=this.I:this.I=f=new At(d,e);c.Rc(e)&&(d.enableVertexAttribArray(f.b),d.vertexAttribPointer(f.b,2,5126,!1,16,0),d.enableVertexAttribArray(f.a),d.vertexAttribPointer(f.a,2,5126,!1,16,8),d.uniform1i(f.i,0));d.uniformMatrix4fv(f.g,!1,pi(this.C,this.v));d.uniformMatrix4fv(f.c,!1,pi(this.C,this.u));d.uniform1f(f.f,b.opacity);d.bindTexture(3553,this.Fb);d.drawArrays(5,0,4);Dt(this,"postcompose",
c,a)};function Dt(a,b,c,d){a=a.a;if(Ec(a,b)){var e=d.viewState;a.b(new Mh(b,new ik(c,e.center,e.resolution,e.rotation,d.size,d.extent,d.pixelRatio),d,null,c))}}Bt.prototype.$f=function(){this.g=this.Fb=null;this.l=void 0};function Et(a,b){Bt.call(this,a,b);this.o=!1;this.S=-1;this.R=NaN;this.A=Ia();this.j=this.i=this.G=null}u(Et,Bt);k=Et.prototype;k.ai=function(a,b,c){this.j=b;var d=a.viewState,e=this.i,f=a.size,g=a.pixelRatio,h=this.c.f;e&&!e.f()&&(h.enable(h.SCISSOR_TEST),h.scissor(0,0,f[0]*g,f[1]*g),e.i(c,d.center,d.resolution,d.rotation,f,g,b.opacity,b.De?a.skippedFeatureUids:{}),h.disable(h.SCISSOR_TEST))};k.ra=function(){var a=this.i;a&&(ck(a,this.c.i)(),this.i=null);Bt.prototype.ra.call(this)};
k.Aa=function(a,b,c,d,e){if(this.i&&this.j){c=b.viewState;var f=this.a,g={};return this.i.Aa(a,this.c.i,c.center,c.resolution,c.rotation,b.size,b.pixelRatio,this.j.opacity,{},function(a){var b=w(a).toString();if(!(b in g))return g[b]=!0,d.call(e,a,f)})}};k.Ke=function(a,b){if(this.i&&this.j){var c=b.viewState;return hk(this.i,a,this.c.i,c.resolution,c.rotation,b.pixelRatio,this.j.opacity,b.skippedFeatureUids)}return!1};
k.Zf=function(a,b,c,d){a=Bh(b.pixelToCoordinateTransform,a.slice());if(this.Ke(a,b))return c.call(d,this.a,null)};k.bi=function(){ft(this)};
k.ag=function(a,b,c){function d(a){var b,c=a.Nc();c?b=c.call(a,m):(c=e.i)&&(b=c(a,m));if(b){if(b){c=!1;if(Array.isArray(b))for(var d=b.length-1;0<=d;--d)c=st(q,a,b[d],rt(m,p),this.bi,this)||c;else c=st(q,a,b,rt(m,p),this.bi,this)||c;a=c}else a=!1;this.o=this.o||a}}var e=this.a;b=e.la();it(a.attributions,b.l);jt(a,b);var f=a.viewHints[0],g=a.viewHints[1],h=e.ea,l=e.ia;if(!this.o&&!h&&f||!l&&g)return!0;var g=a.extent,h=a.viewState,f=h.projection,m=h.resolution,p=a.pixelRatio,h=e.f,n=e.c,l=e.get(vt);
void 0===l&&(l=qt);g=Ka(g,n*m);if(!this.o&&this.R==m&&this.S==h&&this.G==l&&Ta(this.A,g))return!0;this.i&&a.postRenderFunctions.push(ck(this.i,c));this.o=!1;var q=new bk(.5*m/p,g,e.c);b.Ud(g,m,f);if(l){var r=[];b.ac(g,function(a){r.push(a)},this);r.sort(l);r.forEach(d,this)}else b.ac(g,d,this);dk(q,c);this.R=m;this.S=h;this.G=l;this.A=g;this.i=q;return!0};function R(a){a=a?a:{};var b=pb({},a);delete b.style;delete b.renderBuffer;delete b.updateWhileAnimating;delete b.updateWhileInteracting;rh.call(this,b);this.c=void 0!==a.renderBuffer?a.renderBuffer:100;this.A=null;this.i=void 0;this.g(a.style);this.ea=void 0!==a.updateWhileAnimating?a.updateWhileAnimating:!1;this.ia=void 0!==a.updateWhileInteracting?a.updateWhileInteracting:!1}u(R,rh);R.prototype.Dd=function(a){var b=null,c=a.T();"canvas"===c?b=new ut(this):"webgl"===c&&(b=new Et(a,this));return b};
R.prototype.C=function(){return this.A};R.prototype.G=function(){return this.i};R.prototype.g=function(a){this.A=void 0!==a?a:dl;this.i=null===a?void 0:bl(this.A);this.s()};var vt="renderOrder";function Ft(){return[[-Infinity,-Infinity,Infinity,Infinity]]};function Gt(a){Gc.call(this);this.c=Gb(a.projection);this.l=Ht(a.attributions);this.R=a.logo;this.Ja=void 0!==a.state?a.state:"ready";this.G=void 0!==a.wrapX?a.wrapX:!1}u(Gt,Gc);function Ht(a){if("string"===typeof a)return[new nc({html:a})];if(a instanceof nc)return[a];if(Array.isArray(a)){for(var b=a.length,c=Array(b),d=0;d<b;d++){var e=a[d];c[d]="string"===typeof e?new nc({html:e}):e}return c}return null}k=Gt.prototype;k.Aa=na;k.xa=function(){return this.l};k.wa=function(){return this.R};k.ya=function(){return this.c};
k.V=function(){return this.Ja};k.va=function(){this.s()};k.ua=function(a){this.l=Ht(a);this.s()};function It(a,b){a.Ja=b;a.s()};function S(a){a=a||{};Gt.call(this,{attributions:a.attributions,logo:a.logo,projection:void 0,state:"ready",wrapX:void 0!==a.wrapX?a.wrapX:!0});this.Y=na;this.S=a.format;this.Ha=void 0==a.overlaps?!0:a.overlaps;this.ea=a.url;a.loader?this.Y=a.loader:void 0!==this.ea&&(qa(this.S,7),this.Y=Bl(this.ea,this.S));this.Bd=a.strategy?a.strategy:Ft;var b=void 0!==a.useSpatialIndex?a.useSpatialIndex:!0;this.a=b?new Ej:null;this.oa=new Ej;this.g={};this.j={};this.o={};this.v={};this.i=null;var c,d;a.features instanceof
D?(c=a.features,d=c.a):Array.isArray(a.features)&&(d=a.features);b||c||(c=new D(d));d&&Jt(this,d);c&&Kt(this,c)}u(S,Gt);k=S.prototype;k.zb=function(a){var b=w(a).toString();if(Lt(this,b,a)){Mt(this,b,a);var c=a.U();c?(b=c.D(),this.a&&this.a.Ea(b,a)):this.g[b]=a;this.b(new Nt("addfeature",a))}this.s()};function Mt(a,b,c){a.v[b]=[B(c,"change",a.ji,a),B(c,"propertychange",a.ji,a)]}
function Lt(a,b,c){var d=!0,e=c.a;void 0!==e?e.toString()in a.j?d=!1:a.j[e.toString()]=c:(qa(!(b in a.o),30),a.o[b]=c);return d}k.dd=function(a){Jt(this,a);this.s()};function Jt(a,b){var c,d,e,f,g=[],h=[],l=[];d=0;for(e=b.length;d<e;d++)f=b[d],c=w(f).toString(),Lt(a,c,f)&&h.push(f);d=0;for(e=h.length;d<e;d++){f=h[d];c=w(f).toString();Mt(a,c,f);var m=f.U();m?(c=m.D(),g.push(c),l.push(f)):a.g[c]=f}a.a&&a.a.load(g,l);d=0;for(e=h.length;d<e;d++)a.b(new Nt("addfeature",h[d]))}
function Kt(a,b){var c=!1;B(a,"addfeature",function(a){c||(c=!0,b.push(a.feature),c=!1)});B(a,"removefeature",function(a){c||(c=!0,b.remove(a.feature),c=!1)});B(b,"add",function(a){c||(c=!0,this.zb(a.element),c=!1)},a);B(b,"remove",function(a){c||(c=!0,this.Db(a.element),c=!1)},a);a.i=b}
k.clear=function(a){if(a){for(var b in this.v)this.v[b].forEach(rc);this.i||(this.v={},this.j={},this.o={})}else if(this.a){this.a.forEach(this.ug,this);for(var c in this.g)this.ug(this.g[c])}this.i&&this.i.clear();this.a&&this.a.clear();this.oa.clear();this.g={};this.b(new Nt("clear"));this.s()};k.bh=function(a,b){if(this.a)return this.a.forEach(a,b);if(this.i)return this.i.forEach(a,b)};function Ot(a,b,c){a.ac([b[0],b[1],b[0],b[1]],function(a){if(a.U().sb(b))return c.call(void 0,a)})}
k.ac=function(a,b,c){if(this.a)return Jj(this.a,a,b,c);if(this.i)return this.i.forEach(b,c)};k.dh=function(a,b,c){return this.ac(a,function(d){if(d.U().Xa(a)&&(d=b.call(c,d)))return d})};k.lh=function(){return this.i};k.Ne=function(){var a;this.i?a=this.i.a:this.a&&(a=Gj(this.a),sb(this.g)||ga(a,rb(this.g)));return a};k.kh=function(a){var b=[];Ot(this,a,function(a){b.push(a)});return b};k.Hf=function(a){return Hj(this.a,a)};
k.gh=function(a,b){var c=a[0],d=a[1],e=null,f=[NaN,NaN],g=Infinity,h=[-Infinity,-Infinity,Infinity,Infinity],l=b?b:af;Jj(this.a,h,function(a){if(l(a)){var b=a.U(),m=g;g=b.Gb(c,d,f,g);g<m&&(e=a,a=Math.sqrt(g),h[0]=c-a,h[1]=d-a,h[2]=c+a,h[3]=d+a)}});return e};k.D=function(){return this.a.D()};k.jh=function(a){a=this.j[a.toString()];return void 0!==a?a:null};k.hi=function(){return this.S};k.ii=function(){return this.ea};
k.ji=function(a){a=a.target;var b=w(a).toString(),c=a.U();c?(c=c.D(),b in this.g?(delete this.g[b],this.a&&this.a.Ea(c,a)):this.a&&Fj(this.a,c,a)):b in this.g||(this.a&&this.a.remove(a),this.g[b]=a);c=a.a;void 0!==c?(c=c.toString(),b in this.o?(delete this.o[b],this.j[c]=a):this.j[c]!==a&&(Pt(this,a),this.j[c]=a)):b in this.o||(Pt(this,a),this.o[b]=a);this.s();this.b(new Nt("changefeature",a))};
k.Ud=function(a,b,c){var d=this.oa;a=this.Bd(a,b);var e,f;e=0;for(f=a.length;e<f;++e){var g=a[e];Jj(d,g,function(a){return Ta(a.extent,g)})||(this.Y.call(this,g,b,c),d.Ea(g,{extent:g.slice()}))}};k.Db=function(a){var b=w(a).toString();b in this.g?delete this.g[b]:this.a&&this.a.remove(a);this.ug(a);this.s()};k.ug=function(a){var b=w(a).toString();this.v[b].forEach(rc);delete this.v[b];var c=a.a;void 0!==c?delete this.j[c.toString()]:delete this.o[b];this.b(new Nt("removefeature",a))};
function Pt(a,b){for(var c in a.j)if(a.j[c]===b){delete a.j[c];break}}function Nt(a,b){Bc.call(this,a);this.feature=b}u(Nt,Bc);function Qt(a){pg.call(this,{handleDownEvent:Rt,handleEvent:St,handleUpEvent:Tt});this.ea=null;this.u=!1;this.lb=a.source?a.source:null;this.Ha=a.features?a.features:null;this.ak=a.snapTolerance?a.snapTolerance:12;this.S=a.type;this.g=Ut(this.S);this.Ja=a.minPoints?a.minPoints:this.g===Vt?3:2;this.oa=a.maxPoints?a.maxPoints:Infinity;this.Bd=a.finishCondition?a.finishCondition:af;var b=a.geometryFunction;if(!b)if("Circle"===this.S)b=function(a,b){var c=b?b:new is([NaN,NaN]);c.yg(a[0],Math.sqrt(Xe(a[0],
a[1])));return c};else{var c,d=this.g;d===Wt?c=E:d===Xt?c=M:d===Vt&&(c=F);b=function(a,b){var e=b;e?d===Vt?e.pa([a[0].concat([a[0][0]])]):e.pa(a):e=new c(a);return e}}this.Ra=b;this.R=this.C=this.a=this.G=this.j=this.o=null;this.mb=a.clickTolerance?a.clickTolerance*a.clickTolerance:36;this.ia=new R({source:new S({useSpatialIndex:!1,wrapX:a.wrapX?a.wrapX:!1}),style:a.style?a.style:Yt()});this.Oa=a.geometryName;this.Yj=a.condition?a.condition:kg;this.rf=a.freehand?af:a.freehandCondition?a.freehandCondition:
lg;B(this,Ic("active"),this.aj,this)}u(Qt,pg);function Yt(){var a=el();return function(b){return a[b.U().T()]}}k=Qt.prototype;k.setMap=function(a){pg.prototype.setMap.call(this,a);this.aj()};function St(a){this.u=this.g!==Wt&&this.rf(a);var b=!this.u;this.u&&"pointerdrag"===a.type&&null!==this.j?(Zt(this,a),b=!1):"pointermove"===a.type?b=$t(this,a):"dblclick"===a.type&&(b=!1);return qg.call(this,a)&&b}
function Rt(a){return this.u?(this.ea=a.pixel,this.o||au(this,a),!0):this.Yj(a)?(this.ea=a.pixel,!0):!1}function Tt(a){var b=this.ea,c=a.pixel,d=b[0]-c[0],b=b[1]-c[1],d=d*d+b*b,b=!0,c=this.g===bu;(this.u?d>this.mb:d<=this.mb)?($t(this,a),this.o?this.u||c?this.Nd():cu(this,a)?this.Bd(a)&&this.Nd():Zt(this,a):(au(this,a),this.g===Wt&&this.Nd()),b=!1):c&&(this.o=null);return b}
function $t(a,b){if(a.o){var c=b.coordinate,d=a.j.U(),e;a.g===Wt?e=a.a:a.g===Vt?(e=a.a[0],e=e[e.length-1],cu(a,b)&&(c=a.o.slice())):(e=a.a,e=e[e.length-1]);e[0]=c[0];e[1]=c[1];a.Ra(a.a,d);a.G&&a.G.U().pa(c);d instanceof F&&a.g!==Vt?(a.C||(a.C=new H(new M(null))),d=d.nh(0),c=a.C.U(),c.ca(d.ka,d.ha())):a.R&&(c=a.C.U(),c.pa(a.R));du(a)}else c=b.coordinate.slice(),a.G?a.G.U().pa(c):(a.G=new H(new E(c)),du(a));return!0}
function cu(a,b){var c=!1;if(a.j){var d=!1,e=[a.o];a.g===Xt?d=a.a.length>a.Ja:a.g===Vt&&(d=a.a[0].length>a.Ja,e=[a.a[0][0],a.a[0][a.a[0].length-2]]);if(d)for(var d=b.map,f=0,g=e.length;f<g;f++){var h=e[f],l=d.Ka(h),m=b.pixel,c=m[0]-l[0],l=m[1]-l[1];if(c=Math.sqrt(c*c+l*l)<=(a.u?1:a.ak)){a.o=h;break}}}return c}
function au(a,b){var c=b.coordinate;a.o=c;a.g===Wt?a.a=c.slice():a.g===Vt?(a.a=[[c.slice(),c.slice()]],a.R=a.a[0]):(a.a=[c.slice(),c.slice()],a.g===bu&&(a.R=a.a));a.R&&(a.C=new H(new M(a.R)));c=a.Ra(a.a);a.j=new H;a.Oa&&a.j.Vc(a.Oa);a.j.Sa(c);du(a);a.b(new eu("drawstart",a.j))}
function Zt(a,b){var c=b.coordinate,d=a.j.U(),e,f;a.g===Xt?(a.o=c.slice(),f=a.a,f.length>=a.oa&&(a.u?f.pop():e=!0),f.push(c.slice()),a.Ra(f,d)):a.g===Vt&&(f=a.a[0],f.length>=a.oa&&(a.u?f.pop():e=!0),f.push(c.slice()),e&&(a.o=f[0]),a.Ra(a.a,d));du(a);e&&a.Nd()}k.cp=function(){var a=this.j.U(),b,c;this.g===Xt?(b=this.a,b.splice(-2,1),this.Ra(b,a)):this.g===Vt&&(b=this.a[0],b.splice(-2,1),c=this.C.U(),c.pa(b),this.Ra(this.a,a));0===b.length&&(this.o=null);du(this)};
k.Nd=function(){var a=fu(this),b=this.a,c=a.U();this.g===Xt?(b.pop(),this.Ra(b,c)):this.g===Vt&&(b[0].pop(),this.Ra(b,c),b=c.X());"MultiPoint"===this.S?a.Sa(new O([b])):"MultiLineString"===this.S?a.Sa(new N([b])):"MultiPolygon"===this.S&&a.Sa(new P([b]));this.b(new eu("drawend",a));this.Ha&&this.Ha.push(a);this.lb&&this.lb.zb(a)};function fu(a){a.o=null;var b=a.j;b&&(a.j=null,a.G=null,a.C=null,a.ia.la().clear(!0));return b}
k.Om=function(a){var b=a.U();this.j=a;this.a=b.X();a=this.a[this.a.length-1];this.o=a.slice();this.a.push(a.slice());du(this);this.b(new eu("drawstart",this.j))};k.Zc=bf;function du(a){var b=[];a.j&&b.push(a.j);a.C&&b.push(a.C);a.G&&b.push(a.G);a=a.ia.la();a.clear(!0);a.dd(b)}k.aj=function(){var a=this.v,b=this.c();a&&b||fu(this);this.ia.setMap(b?a:null)};
function Ut(a){var b;"Point"===a||"MultiPoint"===a?b=Wt:"LineString"===a||"MultiLineString"===a?b=Xt:"Polygon"===a||"MultiPolygon"===a?b=Vt:"Circle"===a&&(b=bu);return b}var Wt="Point",Xt="LineString",Vt="Polygon",bu="Circle";function eu(a,b){Bc.call(this,a);this.feature=b}u(eu,Bc);function gu(a){this.a=this.j=null;this.C=!1;this.G=this.o=null;a||(a={});a.extent&&this.g(a.extent);pg.call(this,{handleDownEvent:hu,handleDragEvent:iu,handleEvent:ju,handleUpEvent:ku});this.u=new R({source:new S({useSpatialIndex:!1,wrapX:!!a.wrapX}),style:a.boxStyle?a.boxStyle:lu(),updateWhileAnimating:!0,updateWhileInteracting:!0});this.R=new R({source:new S({useSpatialIndex:!1,wrapX:!!a.wrapX}),style:a.pointerStyle?a.pointerStyle:mu(),updateWhileAnimating:!0,updateWhileInteracting:!0})}u(gu,pg);
function ju(a){if(!(a instanceof Bd))return!0;if("pointermove"==a.type&&!this.A){var b=a.pixel,c=a.map,d=nu(this,b,c);d||(d=c.Za(b));ou(this,d)}qg.call(this,a);return!1}
function hu(a){function b(a){var b=null,c=null;a[0]==e[0]?b=e[2]:a[0]==e[2]&&(b=e[0]);a[1]==e[1]?c=e[3]:a[1]==e[3]&&(c=e[1]);return null!==b&&null!==c?[b,c]:null}var c=a.pixel,d=a.map,e=this.D();(a=nu(this,c,d))&&e?(c=a[0]==e[0]||a[0]==e[2]?a[0]:null,d=a[1]==e[1]||a[1]==e[3]?a[1]:null,null!==c&&null!==d?this.a=pu(b(a)):null!==c?this.a=qu(b([c,e[1]]),b([c,e[3]])):null!==d&&(this.a=qu(b([e[0],d]),b([e[2],d])))):(a=d.Za(c),this.g([a[0],a[1],a[0],a[1]]),this.a=pu(a));return!0}
function iu(a){this.a&&(a=a.coordinate,this.g(this.a(a)),ou(this,a));return!0}function ku(){this.a=null;var a=this.D();a&&fb(a)||this.g(null);return!1}function lu(){var a=el();return function(){return a.Polygon}}function mu(){var a=el();return function(){return a.Point}}function pu(a){return function(b){return Ha([a,b])}}function qu(a,b){return a[0]==b[0]?function(c){return Ha([a,[c[0],b[1]]])}:a[1]==b[1]?function(c){return Ha([a,[b[0],c[1]]])}:null}
function nu(a,b,c){function d(a,b){return Ze(e,a)-Ze(e,b)}var e=c.Za(b),f=a.D();if(f){f=[[[f[0],f[1]],[f[0],f[3]]],[[f[0],f[3]],[f[2],f[3]]],[[f[2],f[3]],[f[2],f[1]]],[[f[2],f[1]],[f[0],f[1]]]];f.sort(d);var f=f[0],g=Re(e,f),h=c.Ka(g);if(10>=Ye(b,h))return b=c.Ka(f[0]),c=c.Ka(f[1]),b=Xe(h,b),c=Xe(h,c),a.C=10>=Math.sqrt(Math.min(b,c)),a.C&&(g=b>c?f[1]:f[0]),g}return null}function ou(a,b){var c=a.G;c?c.U().pa(b):(c=new H(new E(b)),a.G=c,a.R.la().zb(c))}
gu.prototype.setMap=function(a){this.u.setMap(a);this.R.setMap(a);pg.prototype.setMap.call(this,a)};gu.prototype.D=function(){return this.j};gu.prototype.g=function(a){this.j=a?a:null;var b=this.o;b?a?b.Sa(Nf(a)):b.Sa(void 0):(this.o=b=a?new H(Nf(a)):new H({}),this.u.la().zb(b));this.b(new ru(this.j))};function ru(a){Bc.call(this,su);this.b=a}u(ru,Bc);var su="extentchanged";function tu(a){pg.call(this,{handleDownEvent:uu,handleDragEvent:vu,handleEvent:wu,handleUpEvent:xu});this.mb=a.condition?a.condition:og;this.Oa=function(a){return kg(a)&&jg(a)};this.lb=a.deleteCondition?a.deleteCondition:this.Oa;this.Ha=this.g=null;this.Ja=[0,0];this.C=this.R=!1;this.a=new Ej;this.ia=void 0!==a.pixelTolerance?a.pixelTolerance:10;this.o=this.oa=!1;this.j=[];this.G=new R({source:new S({useSpatialIndex:!1,wrapX:!!a.wrapX}),style:a.style?a.style:yu(),updateWhileAnimating:!0,updateWhileInteracting:!0});
this.ea={Point:this.Vm,LineString:this.Oh,LinearRing:this.Oh,Polygon:this.Wm,MultiPoint:this.Tm,MultiLineString:this.Sm,MultiPolygon:this.Um,Circle:this.Ip,GeometryCollection:this.Rm};this.u=a.features;this.u.forEach(this.Yf,this);B(this.u,"add",this.Pm,this);B(this.u,"remove",this.Qm,this);this.S=null}u(tu,pg);k=tu.prototype;k.Yf=function(a){var b=a.U();b&&b.T()in this.ea&&this.ea[b.T()].call(this,a,b);(b=this.v)&&b.a&&this.c()&&zu(this,this.Ja,b);B(a,"change",this.Nh,this)};
function Au(a,b){a.C||(a.C=!0,a.b(new Bu("modifystart",a.u,b)))}function Cu(a,b){Du(a,b);a.g&&!a.u.ec()&&(a.G.la().Db(a.g),a.g=null);xc(b,"change",a.Nh,a)}function Du(a,b){var c=a.a,d=[];c.forEach(function(a){b===a.feature&&d.push(a)});for(var e=d.length-1;0<=e;--e)c.remove(d[e])}k.Ia=function(a){this.g&&!a&&(this.G.la().Db(this.g),this.g=null);pg.prototype.Ia.call(this,a)};k.setMap=function(a){this.G.setMap(a);pg.prototype.setMap.call(this,a)};k.Pm=function(a){this.Yf(a.element)};
k.Nh=function(a){this.o||(a=a.target,Cu(this,a),this.Yf(a))};k.Qm=function(a){Cu(this,a.element)};k.Vm=function(a,b){var c=b.X(),c={feature:a,geometry:b,na:[c,c]};this.a.Ea(b.D(),c)};k.Tm=function(a,b){var c=b.X(),d,e,f;e=0;for(f=c.length;e<f;++e)d=c[e],d={feature:a,geometry:b,depth:[e],index:e,na:[d,d]},this.a.Ea(b.D(),d)};k.Oh=function(a,b){var c=b.X(),d,e,f,g;d=0;for(e=c.length-1;d<e;++d)f=c.slice(d,d+2),g={feature:a,geometry:b,index:d,na:f},this.a.Ea(Ha(f),g)};
k.Sm=function(a,b){var c=b.X(),d,e,f,g,h,l,m;g=0;for(h=c.length;g<h;++g)for(d=c[g],e=0,f=d.length-1;e<f;++e)l=d.slice(e,e+2),m={feature:a,geometry:b,depth:[g],index:e,na:l},this.a.Ea(Ha(l),m)};k.Wm=function(a,b){var c=b.X(),d,e,f,g,h,l,m;g=0;for(h=c.length;g<h;++g)for(d=c[g],e=0,f=d.length-1;e<f;++e)l=d.slice(e,e+2),m={feature:a,geometry:b,depth:[g],index:e,na:l},this.a.Ea(Ha(l),m)};
k.Um=function(a,b){var c=b.X(),d,e,f,g,h,l,m,p,n,q;l=0;for(m=c.length;l<m;++l)for(p=c[l],g=0,h=p.length;g<h;++g)for(d=p[g],e=0,f=d.length-1;e<f;++e)n=d.slice(e,e+2),q={feature:a,geometry:b,depth:[g,l],index:e,na:n},this.a.Ea(Ha(n),q)};k.Ip=function(a,b){var c=b.Ba(),d={feature:a,geometry:b,index:0,na:[c,c]},e={feature:a,geometry:b,index:1,na:[c,c]};d.Ef=e.Ef=[d,e];this.a.Ea(Wa(c),d);this.a.Ea(b.D(),e)};k.Rm=function(a,b){var c,d=b.a;for(c=0;c<d.length;++c)this.ea[d[c].T()].call(this,a,d[c])};
function Eu(a,b){var c=a.g;c?c.U().pa(b):(c=new H(new E(b)),a.g=c,a.G.la().zb(c))}function Fu(a,b){return a.index-b.index}
function uu(a){if(!this.mb(a))return!1;zu(this,a.pixel,a.map);this.j.length=0;this.C=!1;var b=this.g;if(b){var c=[],b=b.U().X(),d=Ha([b]),d=Hj(this.a,d),e={};d.sort(Fu);for(var f=0,g=d.length;f<g;++f){var h=d[f],l=h.na,m=w(h.feature),p=h.depth;p&&(m+="-"+p.join("-"));e[m]||(e[m]=Array(2));if("Circle"===h.geometry.T()&&1===h.index)l=Gu(b,h),Ue(l,b)&&!e[m][0]&&(this.j.push([h,0]),e[m][0]=h);else if(Ue(l[0],b)&&!e[m][0])this.j.push([h,0]),e[m][0]=h;else if(Ue(l[1],b)&&!e[m][1]){if("LineString"!==h.geometry.T()&&
"MultiLineString"!==h.geometry.T()||!e[m][0]||0!==e[m][0].index)this.j.push([h,1]),e[m][1]=h}else w(l)in this.Ha&&!e[m][0]&&!e[m][1]&&c.push([h,b])}c.length&&Au(this,a);for(a=c.length-1;0<=a;--a)this.Il.apply(this,c[a])}return!!this.g}
function vu(a){this.R=!1;Au(this,a);a=a.coordinate;for(var b=0,c=this.j.length;b<c;++b){for(var d=this.j[b],e=d[0],f=e.depth,g=e.geometry,h,l=e.na,d=d[1];a.length<g.sa();)a.push(l[d][a.length]);switch(g.T()){case "Point":h=a;l[0]=l[1]=a;break;case "MultiPoint":h=g.X();h[e.index]=a;l[0]=l[1]=a;break;case "LineString":h=g.X();h[e.index+d]=a;l[d]=a;break;case "MultiLineString":h=g.X();h[f[0]][e.index+d]=a;l[d]=a;break;case "Polygon":h=g.X();h[f[0]][e.index+d]=a;l[d]=a;break;case "MultiPolygon":h=g.X();
h[f[1]][f[0]][e.index+d]=a;l[d]=a;break;case "Circle":l[0]=l[1]=a,0===e.index?(this.o=!0,g.wb(a)):(this.o=!0,g.Wc(Ye(g.Ba(),a))),this.o=!1}h&&(e=g,f=h,this.o=!0,e.pa(f),this.o=!1)}Eu(this,a)}function xu(a){for(var b,c,d=this.j.length-1;0<=d;--d)if(b=this.j[d][0],c=b.geometry,"Circle"===c.T()){var e=c.Ba(),f=b.Ef[0];b=b.Ef[1];f.na[0]=f.na[1]=e;b.na[0]=b.na[1]=e;Fj(this.a,Wa(e),f);Fj(this.a,c.D(),b)}else Fj(this.a,Ha(b.na),b);this.C&&(this.b(new Bu("modifyend",this.u,a)),this.C=!1);return!1}
function wu(a){if(!(a instanceof Bd))return!0;this.S=a;var b;ld(a.map.$())[1]||"pointermove"!=a.type||this.A||(this.Ja=a.pixel,zu(this,a.pixel,a.map));this.g&&this.lb(a)&&(b="singleclick"==a.type&&this.R?!0:this.Ci());"singleclick"==a.type&&(this.R=!1);return qg.call(this,a)&&!b}
function zu(a,b,c){function d(a,b){return Hu(e,a)-Hu(e,b)}var e=c.Za(b),f=Ka(Wa(e),c.$().Ua()*a.ia),f=Hj(a.a,f);if(0<f.length){f.sort(d);var g=f[0],h=g.na,l=Gu(e,g),m=c.Ka(l),p=Ye(b,m);if(p<=a.ia){b={};if("Circle"===g.geometry.T()&&1===g.index)a.oa=!0,Eu(a,l);else for(p=c.Ka(h[0]),g=c.Ka(h[1]),c=Xe(m,p),m=Xe(m,g),p=Math.sqrt(Math.min(c,m)),a.oa=p<=a.ia,a.oa&&(l=c>m?h[1]:h[0]),Eu(a,l),m=1,c=f.length;m<c;++m)if(l=f[m].na,Ue(h[0],l[0])&&Ue(h[1],l[1])||Ue(h[0],l[1])&&Ue(h[1],l[0]))b[w(l)]=!0;else break;
b[w(h)]=!0;a.Ha=b;return}}a.g&&(a.G.la().Db(a.g),a.g=null)}function Hu(a,b){var c=b.geometry;if("Circle"===c.T()&&1===b.index){var d=Xe(c.Ba(),a),c=Math.sqrt(d)-c.Vd();return c*c}return Ze(a,b.na)}function Gu(a,b){var c=b.geometry;return"Circle"===c.T()&&1===b.index?c.Ab(a):Re(a,b.na)}
k.Il=function(a,b){for(var c=a.na,d=a.feature,e=a.geometry,f=a.depth,g=a.index,h;b.length<e.sa();)b.push(0);switch(e.T()){case "MultiLineString":h=e.X();h[f[0]].splice(g+1,0,b);break;case "Polygon":h=e.X();h[f[0]].splice(g+1,0,b);break;case "MultiPolygon":h=e.X();h[f[1]][f[0]].splice(g+1,0,b);break;case "LineString":h=e.X();h.splice(g+1,0,b);break;default:return}this.o=!0;e.pa(h);this.o=!1;h=this.a;h.remove(a);Iu(this,e,g,f,1);var l={na:[c[0],b],feature:d,geometry:e,depth:f,index:g};h.Ea(Ha(l.na),
l);this.j.push([l,1]);c={na:[b,c[1]],feature:d,geometry:e,depth:f,index:g+1};h.Ea(Ha(c.na),c);this.j.push([c,0]);this.R=!0};
k.Ci=function(){if(this.S&&"pointerdrag"!=this.S.type){var a=this.S;Au(this,a);var b=this.j,c={},d,e,f,g,h,l,m,p,n;for(h=b.length-1;0<=h;--h)g=b[h],p=g[0],n=w(p.feature),p.depth&&(n+="-"+p.depth.join("-")),n in c||(c[n]={}),0===g[1]?(c[n].right=p,c[n].index=p.index):1==g[1]&&(c[n].left=p,c[n].index=p.index+1);for(n in c){m=c[n].right;h=c[n].left;g=c[n].index;l=g-1;p=void 0!==h?h:m;0>l&&(l=0);b=p.geometry;e=f=b.X();d=!1;switch(b.T()){case "MultiLineString":2<f[p.depth[0]].length&&(f[p.depth[0]].splice(g,
1),d=!0);break;case "LineString":2<f.length&&(f.splice(g,1),d=!0);break;case "MultiPolygon":e=e[p.depth[1]];case "Polygon":e=e[p.depth[0]],4<e.length&&(g==e.length-1&&(g=0),e.splice(g,1),d=!0,0===g&&(e.pop(),e.push(e[0]),l=e.length-1))}d&&(d=b,this.o=!0,d.pa(f),this.o=!1,f=[],void 0!==h&&(this.a.remove(h),f.push(h.na[0])),void 0!==m&&(this.a.remove(m),f.push(m.na[1])),void 0!==h&&void 0!==m&&(h={depth:p.depth,feature:p.feature,geometry:p.geometry,index:l,na:f},this.a.Ea(Ha(h.na),h)),Iu(this,b,g,p.depth,
-1),this.g&&(this.G.la().Db(this.g),this.g=null))}this.b(new Bu("modifyend",this.u,a));this.C=!1;return!0}return!1};function Iu(a,b,c,d,e){Jj(a.a,b.D(),function(a){a.geometry===b&&(void 0===d||void 0===a.depth||ia(a.depth,d))&&a.index>c&&(a.index+=e)})}function yu(){var a=el();return function(){return a.Point}}function Bu(a,b,c){Bc.call(this,a);this.features=b;this.mapBrowserEvent=c}u(Bu,Bc);function Ju(a){ag.call(this,{handleEvent:Ku});a=a?a:{};this.C=a.condition?a.condition:jg;this.A=a.addCondition?a.addCondition:bf;this.G=a.removeCondition?a.removeCondition:bf;this.R=a.toggleCondition?a.toggleCondition:lg;this.o=a.multi?a.multi:!1;this.j=a.filter?a.filter:af;this.l=a.hitTolerance?a.hitTolerance:0;this.g=new R({source:new S({useSpatialIndex:!1,features:a.features,wrapX:a.wrapX}),style:a.style?a.style:Lu(),updateWhileAnimating:!0,updateWhileInteracting:!0});if(a.layers)if("function"===
typeof a.layers)a=a.layers;else{var b=a.layers;a=function(a){return ea(b,a)}}else a=af;this.u=a;this.a={};a=this.g.la().i;B(a,"add",this.Xm,this);B(a,"remove",this.an,this)}u(Ju,ag);k=Ju.prototype;k.Ym=function(){return this.g.la().i};k.Zm=function(){return this.l};k.$m=function(a){a=w(a);return this.a[a]};
function Ku(a){if(!this.C(a))return!0;var b=this.A(a),c=this.G(a),d=this.R(a),e=!b&&!c&&!d,f=a.map,g=this.g.la().i,h=[],l=[];if(e){qb(this.a);f.re(a.pixel,function(a,b){if(this.j(a,b)){l.push(a);var c=w(a);this.a[c]=b;return!this.o}}.bind(this),{layerFilter:this.u,hitTolerance:this.l});for(e=g.ec()-1;0<=e;--e){var f=g.item(e),m=l.indexOf(f);-1<m?l.splice(m,1):(g.remove(f),h.push(f))}l.length&&g.Tf(l)}else{f.re(a.pixel,function(a,e){if(this.j(a,e)){if(!b&&!d||ea(g.a,a))(c||d)&&ea(g.a,a)&&(h.push(a),
f=w(a),delete this.a[f]);else{l.push(a);var f=w(a);this.a[f]=e}return!this.o}}.bind(this),{layerFilter:this.u,hitTolerance:this.l});for(e=h.length-1;0<=e;--e)g.remove(h[e]);g.Tf(l)}(0<l.length||0<h.length)&&this.b(new Mu(Nu,l,h,a));return ig(a)}k.bn=function(a){this.l=a};k.setMap=function(a){var b=this.v,c=this.g.la().i;b&&c.forEach(b.Zi,b);ag.prototype.setMap.call(this,a);this.g.setMap(a);a&&c.forEach(a.Ti,a)};
function Lu(){var a=el();ga(a.Polygon,a.LineString);ga(a.GeometryCollection,a.LineString);return function(b){return b.U()?a[b.U().T()]:null}}k.Xm=function(a){var b=this.v;b&&b.Ti(a.element)};k.an=function(a){var b=this.v;b&&b.Zi(a.element)};function Mu(a,b,c,d){Bc.call(this,a);this.selected=b;this.deselected=c;this.mapBrowserEvent=d}u(Mu,Bc);var Nu="select";function Ou(a){pg.call(this,{handleEvent:Pu,handleDownEvent:af,handleUpEvent:Qu});a=a?a:{};this.o=a.source?a.source:null;this.ia=void 0!==a.vertex?a.vertex:!0;this.R=void 0!==a.edge?a.edge:!0;this.j=a.features?a.features:null;this.oa=[];this.C={};this.S={};this.u={};this.G=null;this.g=void 0!==a.pixelTolerance?a.pixelTolerance:10;this.Ja=Ru.bind(this);this.a=new Ej;this.ea={Point:this.hn,LineString:this.Rh,LinearRing:this.Rh,Polygon:this.jn,MultiPoint:this.fn,MultiLineString:this.en,MultiPolygon:this.gn,
GeometryCollection:this.dn}}u(Ou,pg);k=Ou.prototype;k.zb=function(a,b){var c=void 0!==b?b:!0,d=w(a),e=a.U();if(e){var f=this.ea[e.T()];f&&(this.S[d]=e.D(Ia()),f.call(this,a,e))}c&&(this.C[d]=B(a,"change",this.cn,this))};k.ek=function(a){this.zb(a)};k.fk=function(a){this.Db(a)};k.Ph=function(a){var b;a instanceof Nt?b=a.feature:a instanceof Nc&&(b=a.element);this.zb(b)};k.Qh=function(a){var b;a instanceof Nt?b=a.feature:a instanceof Nc&&(b=a.element);this.Db(b)};
k.cn=function(a){a=a.target;if(this.A){var b=w(a);b in this.u||(this.u[b]=a)}else this.$i(a)};k.Db=function(a,b){var c=void 0!==b?b:!0,d=w(a),e=this.S[d];if(e){var f=this.a,g=[];Jj(f,e,function(b){a===b.feature&&g.push(b)});for(e=g.length-1;0<=e;--e)f.remove(g[e])}c&&(rc(this.C[d]),delete this.C[d])};
k.setMap=function(a){var b=this.v,c=this.oa,d;this.j?d=this.j:this.o&&(d=this.o.Ne());b&&(c.forEach(rc),c.length=0,d.forEach(this.fk,this));pg.prototype.setMap.call(this,a);a&&(this.j?c.push(B(this.j,"add",this.Ph,this),B(this.j,"remove",this.Qh,this)):this.o&&c.push(B(this.o,"addfeature",this.Ph,this),B(this.o,"removefeature",this.Qh,this)),d.forEach(this.ek,this))};k.Zc=bf;k.$i=function(a){this.Db(a,!1);this.zb(a,!1)};
k.dn=function(a,b){var c,d=b.a;for(c=0;c<d.length;++c)this.ea[d[c].T()].call(this,a,d[c])};k.Rh=function(a,b){var c=b.X(),d,e,f,g;d=0;for(e=c.length-1;d<e;++d)f=c.slice(d,d+2),g={feature:a,na:f},this.a.Ea(Ha(f),g)};k.en=function(a,b){var c=b.X(),d,e,f,g,h,l,m;g=0;for(h=c.length;g<h;++g)for(d=c[g],e=0,f=d.length-1;e<f;++e)l=d.slice(e,e+2),m={feature:a,na:l},this.a.Ea(Ha(l),m)};k.fn=function(a,b){var c=b.X(),d,e,f;e=0;for(f=c.length;e<f;++e)d=c[e],d={feature:a,na:[d,d]},this.a.Ea(b.D(),d)};
k.gn=function(a,b){var c=b.X(),d,e,f,g,h,l,m,p,n,q;l=0;for(m=c.length;l<m;++l)for(p=c[l],g=0,h=p.length;g<h;++g)for(d=p[g],e=0,f=d.length-1;e<f;++e)n=d.slice(e,e+2),q={feature:a,na:n},this.a.Ea(Ha(n),q)};k.hn=function(a,b){var c=b.X(),c={feature:a,na:[c,c]};this.a.Ea(b.D(),c)};k.jn=function(a,b){var c=b.X(),d,e,f,g,h,l,m;g=0;for(h=c.length;g<h;++g)for(d=c[g],e=0,f=d.length-1;e<f;++e)l=d.slice(e,e+2),m={feature:a,na:l},this.a.Ea(Ha(l),m)};
function Pu(a){var b,c,d=a.pixel,e=a.coordinate;b=a.map;var f=b.Za([d[0]-this.g,d[1]+this.g]);c=b.Za([d[0]+this.g,d[1]-this.g]);var f=Ha([f,c]),g=Hj(this.a,f),h,f=!1,l=null;c=null;if(0<g.length){this.G=e;g.sort(this.Ja);g=g[0].na;if(this.ia&&!this.R){if(e=b.Ka(g[0]),h=b.Ka(g[1]),e=Xe(d,e),d=Xe(d,h),h=Math.sqrt(Math.min(e,d)),h=h<=this.g)f=!0,l=e>d?g[1]:g[0],c=b.Ka(l)}else this.R&&(l=Re(e,g),c=b.Ka(l),Ye(d,c)<=this.g&&(f=!0,this.ia&&(e=b.Ka(g[0]),h=b.Ka(g[1]),e=Xe(c,e),d=Xe(c,h),h=Math.sqrt(Math.min(e,
d)),h=h<=this.g)))&&(l=e>d?g[1]:g[0],c=b.Ka(l));f&&(c=[Math.round(c[0]),Math.round(c[1])])}b=l;f&&(a.coordinate=b.slice(0,2),a.pixel=c);return qg.call(this,a)}function Qu(){var a=rb(this.u);a.length&&(a.forEach(this.$i,this),this.u={});return!1}function Ru(a,b){return Ze(this.G,a.na)-Ze(this.G,b.na)};function Su(a){pg.call(this,{handleDownEvent:Tu,handleDragEvent:Uu,handleMoveEvent:Vu,handleUpEvent:Wu});a=a?a:{};this.g=void 0;this.a=null;this.o=void 0!==a.features?a.features:null;var b;if(a.layers)if("function"===typeof a.layers)b=a.layers;else{var c=a.layers;b=function(a){return ea(c,a)}}else b=af;this.C=b;this.u=a.hitTolerance?a.hitTolerance:0;this.j=null}u(Su,pg);
function Tu(a){this.j=Xu(this,a.pixel,a.map);if(!this.a&&this.j){this.a=a.coordinate;Vu.call(this,a);var b=this.o||new D([this.j]);this.b(new Yu("translatestart",b,a.coordinate));return!0}return!1}function Wu(a){if(this.a){this.a=null;Vu.call(this,a);var b=this.o||new D([this.j]);this.b(new Yu("translateend",b,a.coordinate));return!0}return!1}
function Uu(a){if(this.a){a=a.coordinate;var b=a[0]-this.a[0],c=a[1]-this.a[1],d=this.o||new D([this.j]);d.forEach(function(a){var d=a.U();d.translate(b,c);a.Sa(d)});this.a=a;this.b(new Yu("translating",d,a))}}function Vu(a){var b=a.map.Kc();Xu(this,a.pixel,a.map)?(this.g=void 0!==this.g?this.g:b.style.cursor,b.style.cursor=this.a?"-webkit-grabbing":"-webkit-grab",b.style.cursor=this.a?"grabbing":"grab"):void 0!==this.g&&(b.style.cursor=this.g,this.g=void 0)}
function Xu(a,b,c){return c.re(b,function(a){if(!this.o||ea(this.o.a,a))return a}.bind(a),{layerFilter:a.C,hitTolerance:a.u})}Su.prototype.G=function(){return this.u};Su.prototype.R=function(a){this.u=a};function Yu(a,b,c){Bc.call(this,a);this.features=b;this.coordinate=c}u(Yu,Bc);function T(a){a=a?a:{};var b=pb({},a);delete b.gradient;delete b.radius;delete b.blur;delete b.shadow;delete b.weight;R.call(this,b);this.l=null;this.Y=void 0!==a.shadow?a.shadow:250;this.S=void 0;this.R=null;B(this,Ic(Zu),this.hl,this);this.Ki(a.gradient?a.gradient:$u);this.Ei(void 0!==a.blur?a.blur:15);this.Wc(void 0!==a.radius?a.radius:8);B(this,Ic(av),this.Qf,this);B(this,Ic(bv),this.Qf,this);this.Qf();var c=a.weight?a.weight:"weight",d;"string"===typeof c?d=function(a){return a.get(c)}:d=c;this.g(function(a){a=
d(a);a=void 0!==a?wa(a,0,1):1;var b=255*a|0,c=this.R[b];c||(c=[new $k({image:new Rn({opacity:a,src:this.S})})],this.R[b]=c);return c}.bind(this));this.set(vt,null);B(this,"render",this.yl,this)}u(T,R);var $u=["#00f","#0ff","#0f0","#ff0","#f00"];k=T.prototype;k.fh=function(){return this.get(av)};k.mh=function(){return this.get(Zu)};k.Th=function(){return this.get(bv)};
k.hl=function(){for(var a=this.mh(),b=Xc(1,256),c=b.createLinearGradient(0,0,1,256),d=1/(a.length-1),e=0,f=a.length;e<f;++e)c.addColorStop(e*d,a[e]);b.fillStyle=c;b.fillRect(0,0,1,256);this.l=b.getImageData(0,0,1,256).data};k.Qf=function(){var a=this.Th(),b=this.fh(),c=a+b+1,d=2*c,d=Xc(d,d);d.shadowOffsetX=d.shadowOffsetY=this.Y;d.shadowBlur=b;d.shadowColor="#000";d.beginPath();b=c-this.Y;d.arc(b,b,a,0,2*Math.PI,!0);d.fill();this.S=d.canvas.toDataURL();this.R=Array(256);this.s()};
k.yl=function(a){a=a.context;var b=a.canvas,b=a.getImageData(0,0,b.width,b.height),c=b.data,d,e,f;d=0;for(e=c.length;d<e;d+=4)if(f=4*c[d+3])c[d]=this.l[f],c[d+1]=this.l[f+1],c[d+2]=this.l[f+2];a.putImageData(b,0,0)};k.Ei=function(a){this.set(av,a)};k.Ki=function(a){this.set(Zu,a)};k.Wc=function(a){this.set(bv,a)};var av="blur",Zu="gradient",bv="radius";function cv(a){mt.call(this,a);this.o=wh();this.g=null}u(cv,mt);cv.prototype.I=function(a,b,c){ot(this,"precompose",c,a,void 0);var d=this.Z();if(d){var e=b.extent,f=void 0!==e;f&&nt(c,a,e);var e=this.A(),g=c.globalAlpha;c.globalAlpha=b.opacity;c.drawImage(d,0,0,+d.width,+d.height,Math.round(e[4]),Math.round(e[5]),Math.round(d.width*e[0]),Math.round(d.height*e[3]));c.globalAlpha=g;f&&c.restore()}this.Ue(c,a,b)};
cv.prototype.Aa=function(a,b,c,d,e){var f=this.a;return f.la().Aa(a,b.viewState.resolution,b.viewState.rotation,c,b.skippedFeatureUids,function(a){return d.call(e,a,f)})};
cv.prototype.v=function(a,b,c,d){if(this.Z()){if(this.a.la().Aa!==na)return mt.prototype.v.apply(this,arguments);var e=Bh(this.o,a.slice());We(e,b.viewState.resolution/this.i);this.g||(this.g=Xc(1,1));this.g.clearRect(0,0,1,1);this.g.drawImage(this.Z(),e[0],e[1],1,1,0,0,1,1);e=this.g.getImageData(0,0,1,1).data;if(0<e[3])return c.call(d,this.a,e)}};function dv(a){cv.call(this,a);this.M=null;this.c=wh()}u(dv,cv);dv.prototype.Z=function(){return this.M?this.M.Z():null};dv.prototype.A=function(){return this.c};
dv.prototype.qd=function(a,b){var c=a.pixelRatio,d=a.size,e=a.viewState,f=e.center,g=e.resolution,h=this.a.la(),l=a.viewHints,m=a.extent;void 0!==b.extent&&(m=lb(m,b.extent));l[0]||l[1]||gb(m)||(e=h.Z(m,g,c,e.projection))&&gt(this,e)&&(this.M=e);if(this.M){var e=this.M,m=e.D(),p=e.resolution,l=e.a,n=c*p/(g*l),m=Fh(this.c,c*d[0]/2,c*d[1]/2,n,n,0,l*(m[0]-f[0])/p,l*(f[1]-m[3])/p);Fh(this.o,c*d[0]/2-m[4],c*d[1]/2-m[5],c/g,-c/g,0,-f[0],-f[1]);it(a.attributions,e.i);jt(a,h);this.i=g*c/l}return!!this.M};function ev(a,b,c,d){var e=Wb(c,b,a);c=Eb(b,d,c);b=b.sc();void 0!==b&&(c*=b);b=a.sc();void 0!==b&&(c/=b);a=Eb(a,c,e)/c;isFinite(a)&&0<a&&(c/=a);return c}function fv(a,b,c,d){a=c-a;b=d-b;var e=Math.sqrt(a*a+b*b);return[Math.round(c+a/e),Math.round(d+b/e)]}
function gv(a,b,c,d,e,f,g,h,l,m,p){var n=Xc(Math.round(c*a),Math.round(c*b));if(!l.length)return n.canvas;n.scale(c,c);var q=Ia();l.forEach(function(a){$a(q,a.extent)});var r=Xc(Math.round(c*hb(q)/d),Math.round(c*ib(q)/d)),v=c/d;l.forEach(function(a){r.drawImage(a.image,m,m,a.image.width-2*m,a.image.height-2*m,(a.extent[0]-q[0])*v,-(a.extent[3]-q[3])*v,hb(a.extent)*v,ib(a.extent)*v)});var x=eb(g);h.c.forEach(function(a){var b=a.source,e=a.target,g=b[1][0],h=b[1][1],l=b[2][0],m=b[2][1];a=(e[0][0]-
x[0])/f;var p=-(e[0][1]-x[1])/f,v=(e[1][0]-x[0])/f,y=-(e[1][1]-x[1])/f,Z=(e[2][0]-x[0])/f,Ra=-(e[2][1]-x[1])/f,e=b[0][0],b=b[0][1],g=g-e,h=h-b,l=l-e,m=m-b;a:{g=[[g,h,0,0,v-a],[l,m,0,0,Z-a],[0,0,g,h,y-p],[0,0,l,m,Ra-p]];h=g.length;for(l=0;l<h;l++){for(var m=l,Cb=Math.abs(g[l][l]),dc=l+1;dc<h;dc++){var $c=Math.abs(g[dc][l]);$c>Cb&&(Cb=$c,m=dc)}if(!Cb){g=null;break a}Cb=g[m];g[m]=g[l];g[l]=Cb;for(m=l+1;m<h;m++)for(Cb=-g[m][l]/g[l][l],dc=l;dc<h+1;dc++)g[m][dc]=l==dc?0:g[m][dc]+Cb*g[l][dc]}l=Array(h);
for(m=h-1;0<=m;m--)for(l[m]=g[m][h]/g[m][m],Cb=m-1;0<=Cb;Cb--)g[Cb][h]-=g[Cb][m]*l[m];g=l}g&&(n.save(),n.beginPath(),l=(a+v+Z)/3,m=(p+y+Ra)/3,h=fv(l,m,a,p),v=fv(l,m,v,y),Z=fv(l,m,Z,Ra),n.moveTo(v[0],v[1]),n.lineTo(h[0],h[1]),n.lineTo(Z[0],Z[1]),n.clip(),n.transform(g[0],g[2],g[1],g[3],a,p),n.translate(q[0]-e,q[3]-b),n.scale(d/c,-d/c),n.drawImage(r.canvas,0,0),n.restore())});p&&(n.save(),n.strokeStyle="black",n.lineWidth=1,h.c.forEach(function(a){var b=a.target;a=(b[0][0]-x[0])/f;var c=-(b[0][1]-x[1])/
f,d=(b[1][0]-x[0])/f,e=-(b[1][1]-x[1])/f,g=(b[2][0]-x[0])/f,b=-(b[2][1]-x[1])/f;n.beginPath();n.moveTo(d,e);n.lineTo(a,c);n.lineTo(g,b);n.closePath();n.stroke()}),n.restore());return n.canvas};function hv(a,b,c,d,e){this.f=a;this.i=b;var f={},g=Ub(this.i,this.f);this.a=function(a){var b=a[0]+"/"+a[1];f[b]||(f[b]=g(a));return f[b]};this.g=d;this.v=e*e;this.c=[];this.j=!1;this.o=this.f.a&&!!d&&!!this.f.D()&&hb(d)==hb(this.f.D());this.b=this.f.D()?hb(this.f.D()):null;this.l=this.i.D()?hb(this.i.D()):null;a=eb(c);b=db(c);d=cb(c);c=bb(c);e=this.a(a);var h=this.a(b),l=this.a(d),m=this.a(c);iv(this,a,b,d,c,e,h,l,m,10);if(this.j){var p=Infinity;this.c.forEach(function(a){p=Math.min(p,a.source[0][0],
a.source[1][0],a.source[2][0])});this.c.forEach(function(a){if(Math.max(a.source[0][0],a.source[1][0],a.source[2][0])-p>this.b/2){var b=[[a.source[0][0],a.source[0][1]],[a.source[1][0],a.source[1][1]],[a.source[2][0],a.source[2][1]]];b[0][0]-p>this.b/2&&(b[0][0]-=this.b);b[1][0]-p>this.b/2&&(b[1][0]-=this.b);b[2][0]-p>this.b/2&&(b[2][0]-=this.b);Math.max(b[0][0],b[1][0],b[2][0])-Math.min(b[0][0],b[1][0],b[2][0])<this.b/2&&(a.source=b)}},this)}f={}}
function iv(a,b,c,d,e,f,g,h,l,m){var p=Ha([f,g,h,l]),n=a.b?hb(p)/a.b:null,q=a.b,r=a.f.a&&.5<n&&1>n,v=!1;if(0<m){if(a.i.f&&a.l)var x=Ha([b,c,d,e]),v=v|.25<hb(x)/a.l;!r&&a.f.f&&n&&(v|=.25<n)}if(v||!a.g||mb(p,a.g)){if(!(v||isFinite(f[0])&&isFinite(f[1])&&isFinite(g[0])&&isFinite(g[1])&&isFinite(h[0])&&isFinite(h[1])&&isFinite(l[0])&&isFinite(l[1])))if(0<m)v=!0;else return;if(0<m&&(v||(p=a.a([(b[0]+d[0])/2,(b[1]+d[1])/2]),q=r?(Ca(f[0],q)+Ca(h[0],q))/2-Ca(p[0],q):(f[0]+h[0])/2-p[0],p=(f[1]+h[1])/2-p[1],
v=q*q+p*p>a.v),v)){Math.abs(b[0]-d[0])<=Math.abs(b[1]-d[1])?(r=[(c[0]+d[0])/2,(c[1]+d[1])/2],q=a.a(r),p=[(e[0]+b[0])/2,(e[1]+b[1])/2],n=a.a(p),iv(a,b,c,r,p,f,g,q,n,m-1),iv(a,p,r,d,e,n,q,h,l,m-1)):(r=[(b[0]+c[0])/2,(b[1]+c[1])/2],q=a.a(r),p=[(d[0]+e[0])/2,(d[1]+e[1])/2],n=a.a(p),iv(a,b,r,p,e,f,q,n,l,m-1),iv(a,r,c,d,p,q,g,h,n,m-1));return}if(r){if(!a.o)return;a.j=!0}a.c.push({source:[f,h,l],target:[b,d,e]});a.c.push({source:[f,g,h],target:[b,c,d]})}}
function jv(a){var b=Ia();a.c.forEach(function(a){a=a.source;Ja(b,a[0]);Ja(b,a[1]);Ja(b,a[2])});return b};function kv(a,b,c,d,e,f){this.v=b;this.o=a.D();var g=b.D(),h=g?lb(c,g):c,g=ev(a,b,jb(h),d);this.l=new hv(a,b,h,this.o,.5*g);this.c=d;this.f=c;a=jv(this.l);this.j=(this.Eb=f(a,g,e))?this.Eb.a:1;this.$d=this.g=null;e=2;f=[];this.Eb&&(e=0,f=this.Eb.i);ss.call(this,c,d,this.j,e,f)}u(kv,ss);kv.prototype.ra=function(){1==this.state&&(rc(this.$d),this.$d=null);ss.prototype.ra.call(this)};kv.prototype.Z=function(){return this.g};
kv.prototype.Zd=function(){var a=this.Eb.V();2==a&&(this.g=gv(hb(this.f)/this.c,ib(this.f)/this.c,this.j,this.Eb.resolution,0,this.c,this.f,this.l,[{extent:this.Eb.D(),image:this.Eb.Z()}],0));this.state=a;this.s()};kv.prototype.load=function(){if(0==this.state){this.state=1;this.s();var a=this.Eb.V();2==a||3==a?this.Zd():(this.$d=B(this.Eb,"change",function(){var a=this.Eb.V();if(2==a||3==a)rc(this.$d),this.$d=null,this.Zd()},this),this.Eb.load())}};function lv(a){Gt.call(this,{attributions:a.attributions,extent:a.extent,logo:a.logo,projection:a.projection,state:a.state});this.u=void 0!==a.resolutions?a.resolutions:null;this.a=null;this.ea=0}u(lv,Gt);function mv(a,b){a.u&&(b=a.u[fa(a.u,b,0)]);return b}
lv.prototype.Z=function(a,b,c,d){var e=this.c;if(e&&d&&!Tb(e,d)){if(this.a){if(this.ea==this.f&&Tb(this.a.v,d)&&this.a.resolution==b&&this.a.a==c&&Za(this.a.D(),a))return this.a;Ac(this.a);this.a=null}this.a=new kv(e,d,a,b,c,function(a,b,c){return this.Ic(a,b,c,e)}.bind(this));this.ea=this.f;return this.a}e&&(d=e);return this.Ic(a,b,c,d)};lv.prototype.j=function(a){a=a.target;switch(a.V()){case 1:this.b(new nv(ov,a));break;case 2:this.b(new nv(pv,a));break;case 3:this.b(new nv(qv,a))}};
function rv(a,b){a.Z().src=b}function nv(a,b){Bc.call(this,a);this.image=b}u(nv,Bc);var ov="imageloadstart",pv="imageloadend",qv="imageloaderror";function sv(a){lv.call(this,{attributions:a.attributions,logo:a.logo,projection:a.projection,resolutions:a.resolutions,state:a.state});this.ia=a.canvasFunction;this.S=null;this.Y=0;this.oa=void 0!==a.ratio?a.ratio:1.5}u(sv,lv);sv.prototype.Ic=function(a,b,c,d){b=mv(this,b);var e=this.S;if(e&&this.Y==this.f&&e.resolution==b&&e.a==c&&Ta(e.D(),a))return e;a=a.slice();nb(a,this.oa);(d=this.ia(a,b,c,[hb(a)/b*c,ib(a)/b*c],d))&&(e=new us(a,b,c,this.l,d));this.S=e;this.Y=this.f;return e};function tv(a){this.i=a.source;this.Oa=wh();this.g=Xc();this.o=[0,0];this.Ha=void 0==a.renderBuffer?100:a.renderBuffer;this.A=null;sv.call(this,{attributions:a.attributions,canvasFunction:this.Zj.bind(this),logo:a.logo,projection:a.projection,ratio:a.ratio,resolutions:a.resolutions,state:this.i.V()});this.C=null;this.v=void 0;this.ci(a.style);B(this.i,"change",this.Fn,this)}u(tv,sv);k=tv.prototype;
k.Zj=function(a,b,c,d,e){var f=new Ws(.5*b/c,a,b,this.i.Ha,this.Ha);this.i.Ud(a,b,e);var g=!1;this.i.ac(a,function(a){var d;if(!(d=g)){var e;(d=a.Nc())?e=d.call(a,b):this.v&&(e=this.v(a,b));if(e){var h,n=!1;Array.isArray(e)||(e=[e]);d=0;for(h=e.length;d<h;++d)n=st(f,a,e[d],rt(b,c),this.En,this)||n;d=n}else d=!1}g=d},this);$s(f);if(g)return null;this.o[0]!=d[0]||this.o[1]!=d[1]?(this.g.canvas.width=d[0],this.g.canvas.height=d[1],this.o[0]=d[0],this.o[1]=d[1]):this.g.clearRect(0,0,d[0],d[1]);a=uv(this,
jb(a),b,c,d);f.i(this.g,c,a,0,{});this.A=f;return this.g.canvas};k.Aa=function(a,b,c,d,e,f){if(this.A){var g={};return this.A.Aa(a,b,0,d,e,function(a){var b=w(a).toString();if(!(b in g))return g[b]=!0,f(a)})}};k.Bn=function(){return this.i};k.Cn=function(){return this.C};k.Dn=function(){return this.v};function uv(a,b,c,d,e){c=d/c;return Fh(a.Oa,e[0]/2,e[1]/2,c,-c,0,-b[0],-b[1])}k.En=function(){this.s()};k.Fn=function(){It(this,this.i.V())};
k.ci=function(a){this.C=void 0!==a?a:dl;this.v=a?bl(this.C):void 0;this.s()};function vv(a,b){Bt.call(this,a,b);this.j=this.i=this.M=null}u(vv,Bt);function wv(a,b){var c=b.Z();return Oi(a.c.f,c)}vv.prototype.Aa=function(a,b,c,d,e){var f=this.a;return f.la().Aa(a,b.viewState.resolution,b.viewState.rotation,c,b.skippedFeatureUids,function(a){return d.call(e,a,f)})};
vv.prototype.ag=function(a,b){var c=this.c.f,d=a.pixelRatio,e=a.viewState,f=e.center,g=e.resolution,h=e.rotation,l=this.M,m=this.Fb,p=this.a.la(),n=a.viewHints,q=a.extent;void 0!==b.extent&&(q=lb(q,b.extent));n[0]||n[1]||gb(q)||(e=p.Z(q,g,d,e.projection))&&gt(this,e)&&(l=e,m=wv(this,e),this.Fb&&a.postRenderFunctions.push(function(a,b){a.isContextLost()||a.deleteTexture(b)}.bind(null,c,this.Fb)));l&&(c=this.c.i.l,xv(this,c.width,c.height,d,f,g,h,l.D()),this.j=null,d=this.v,xh(d),Dh(d,1,-1),Eh(d,0,
-1),this.M=l,this.Fb=m,it(a.attributions,l.i),jt(a,p));return!!l};function xv(a,b,c,d,e,f,g,h){b*=f;c*=f;a=a.u;xh(a);Dh(a,2*d/b,2*d/c);Ch(a,-g);Eh(a,h[0]-e[0],h[1]-e[1]);Dh(a,(h[2]-h[0])/2,(h[3]-h[1])/2);Eh(a,1,1)}vv.prototype.Ke=function(a,b){return void 0!==this.Aa(a,b,0,af,this)};
vv.prototype.Zf=function(a,b,c,d){if(this.M&&this.M.Z())if(this.a.la()instanceof tv){var e=Bh(b.pixelToCoordinateTransform,a.slice());if(this.Aa(e,b,0,af,this))return c.call(d,this.a,null)}else{e=[this.M.Z().width,this.M.Z().height];if(!this.j){var f=b.size;b=wh();Eh(b,-1,-1);Dh(b,2/f[0],2/f[1]);Eh(b,0,f[1]);Dh(b,1,-1);var f=Gh(this.u.slice()),g=wh();Eh(g,0,e[1]);Dh(g,1,-1);Dh(g,e[0]/2,e[1]/2);Eh(g,1,1);zh(g,f);zh(g,b);this.j=g}a=Bh(this.j,a.slice());if(!(0>a[0]||a[0]>e[0]||0>a[1]||a[1]>e[1])&&(this.i||
(this.i=Xc(1,1)),this.i.clearRect(0,0,1,1),this.i.drawImage(this.M.Z(),a[0],a[1],1,1,0,0,1,1),e=this.i.getImageData(0,0,1,1).data,0<e[3]))return c.call(d,this.a,e)}};function yv(a){rh.call(this,a?a:{})}u(yv,rh);yv.prototype.Dd=function(a){var b=null,c=a.T();"canvas"===c?b=new dv(this):"webgl"===c&&(b=new vv(a,this));return b};function zv(a){cv.call(this,a);this.u=Xc();this.l=null;this.c=[];this.j=Ia();this.Ja=new sa(0,0,0,0);this.C=wh();this.Y=0}u(zv,cv);function Av(a,b){var c=b.V(),d=a.a.Td();return 2==c||4==c||3==c&&!d}
zv.prototype.qd=function(a,b){var c=a.pixelRatio,d=a.size,e=a.viewState,f=e.projection,g=e.resolution,e=e.center,h=this.a,l=h.la(),m=l.f,p=l.Ib(f),n=p.Mc(g,this.Y),q=p.La(n),r=Math.round(g/q)||1,v=a.extent;void 0!==b.extent&&(v=lb(v,b.extent));if(gb(v))return!1;var x=gc(p,v,q),y;y=p.Qc(n);var z=p.La(n),A=Ga(p.fb(n),p.l);y=Va(y[0]+x.da*A[0]*z,y[1]+x.fa*A[1]*z,y[0]+(x.ba+1)*A[0]*z,y[1]+(x.ja+1)*A[1]*z,void 0);z=l.pb(c);A={};A[n]={};var V=this.Cf(l,f,A),Pa=this.j,ra=this.Ja,La=!1,C,Ma,xb;for(Ma=x.da;Ma<=
x.ba;++Ma)for(xb=x.fa;xb<=x.ja;++xb)C=l.Lc(n,Ma,xb,c,f),Av(this,C)||(C=ws(C)),Av(this,C)?2==C.V()&&(A[n][C.Ga.toString()]=C,La||-1!=this.c.indexOf(C)||(La=!0)):ec(p,C.Ga,V,ra,Pa)||(C=fc(p,C.Ga,ra,Pa))&&V(n+1,C);V=a.viewHints;if(!(this.i&&16<Date.now()-a.time&&(V[0]||V[1])||!La&&this.l&&Ta(this.l,v)&&this.af==m)||r!=this.R){La=l.Sd(n,c,f);Ma=Math.round((x.ba-x.da+1)*La[0]/r);C=Math.round((x.ja-x.fa+1)*La[0]/r);La=this.u;xb=La.canvas;V=l.Mf(f);xb.width!=Ma||xb.height!=C?(this.R=r,xb.width=Ma,xb.height=
C):(La.clearRect(0,0,Ma,C),r=this.R);this.c.length=0;ra=Object.keys(A).map(Number);ra.sort(da);var Z,Ra,Cb,dc,$c,$d,Je,ue;Cb=0;for(dc=ra.length;Cb<dc;++Cb){Ma=ra[Cb];Ra=l.Sd(Ma,c,f);C=p.La(Ma);Z=C/q;$c=z*l.Jf(f);$d=A[Ma];for(var Tc in $d)C=$d[Tc],xb=p.Ta(C.Ga,Pa),Ma=(xb[0]-y[0])/q*z/r,xb=(y[3]-xb[3])/q*z/r,Je=Ra[0]*Z/r,ue=Ra[1]*Z/r,V||La.clearRect(Ma,xb,Je,ue),this.Df(C,a,b,Ma,xb,Je,ue,$c),this.c.push(C)}this.af=m;this.i=q*c/z*r;this.l=y}Tc=this.i/g;Tc=Fh(this.C,c*d[0]/2,c*d[1]/2,Tc,Tc,0,(this.l[0]-
e[0])/this.i*c,(e[1]-this.l[3])/this.i*c);Fh(this.o,c*d[0]/2-Tc[4],c*d[1]/2-Tc[5],c/g,-c/g,0,-e[0],-e[1]);kt(a.usedTiles,l,n,x);lt(a,l,p,c,f,v,n,h.Pd());ht(a,l);jt(a,l);return 0<this.c.length};zv.prototype.Df=function(a,b,c,d,e,f,g,h){(a=a.Z())&&this.u.drawImage(a,h,h,a.width-2*h,a.height-2*h,d,e,f,g)};zv.prototype.Z=function(){return this.u.canvas};zv.prototype.A=function(){return this.C};function Bv(){this.b="precision mediump float;varying vec2 a;uniform sampler2D e;void main(void){gl_FragColor=texture2D(e,a);}"}u(Bv,hi);var Cv=new Bv;function Dv(){this.b="varying vec2 a;attribute vec2 b;attribute vec2 c;uniform vec4 d;void main(void){gl_Position=vec4(b*d.xy+d.zw,0.,1.);a=c;}"}u(Dv,ii);var Ev=new Dv;function Fv(a,b){this.f=a.getUniformLocation(b,"e");this.c=a.getUniformLocation(b,"d");this.b=a.getAttribLocation(b,"b");this.a=a.getAttribLocation(b,"c")};function Gv(a,b){Bt.call(this,a,b);this.R=Cv;this.ia=Ev;this.i=null;this.G=new yi([0,0,0,1,1,0,1,1,0,1,0,0,1,1,1,0]);this.A=this.j=null;this.o=-1;this.S=[0,0]}u(Gv,Bt);k=Gv.prototype;k.ra=function(){Bi(this.c.i,this.G);Bt.prototype.ra.call(this)};k.Cf=function(a,b,c){var d=this.c;return function(e,f){return et(a,b,e,f,function(a){var b=d.a.b.hasOwnProperty(a.ib());b&&(c[e]||(c[e]={}),c[e][a.Ga.toString()]=a);return b})}};k.$f=function(){Bt.prototype.$f.call(this);this.i=null};
k.ag=function(a,b,c){var d=this.c,e=c.b,f=a.viewState,g=f.projection,h=this.a,l=h.la(),m=l.Ib(g),p=m.Mc(f.resolution),n=m.La(p),q=l.Sd(p,a.pixelRatio,g),r=q[0]/Ga(m.fb(p),this.S)[0],v=n/r,x=l.pb(r)*l.Jf(g),y=f.center,z=a.extent,A=gc(m,z,n);if(this.j&&ua(this.j,A)&&this.o==l.f)v=this.A;else{var V=[A.ba-A.da+1,A.ja-A.fa+1],Pa=ya(Math.max(V[0]*q[0],V[1]*q[1])),V=v*Pa,ra=m.Qc(p),La=ra[0]+A.da*q[0]*v,v=ra[1]+A.fa*q[1]*v,v=[La,v,La+V,v+V];Ct(this,a,Pa);e.viewport(0,0,Pa,Pa);e.clearColor(0,0,0,0);e.clear(16384);
e.disable(3042);Pa=Ci(c,this.R,this.ia);c.Rc(Pa);this.i||(this.i=new Fv(e,Pa));ri(c,34962,this.G);e.enableVertexAttribArray(this.i.b);e.vertexAttribPointer(this.i.b,2,5126,!1,16,0);e.enableVertexAttribArray(this.i.a);e.vertexAttribPointer(this.i.a,2,5126,!1,16,8);e.uniform1i(this.i.f,0);c={};c[p]={};var C=this.Cf(l,g,c),Ma=h.Td(),Pa=!0,La=Ia(),xb=new sa(0,0,0,0),Z,Ra,Cb;for(Ra=A.da;Ra<=A.ba;++Ra)for(Cb=A.fa;Cb<=A.ja;++Cb){ra=l.Lc(p,Ra,Cb,r,g);if(void 0!==b.extent&&(Z=m.Ta(ra.Ga,La),!mb(Z,b.extent)))continue;
Z=ra.V();(Z=2==Z||4==Z||3==Z&&!Ma)||(ra=ws(ra));Z=ra.V();if(2==Z){if(d.a.b.hasOwnProperty(ra.ib())){c[p][ra.Ga.toString()]=ra;continue}}else if(4==Z||3==Z&&!Ma)continue;Pa=!1;Z=ec(m,ra.Ga,C,xb,La);Z||(ra=fc(m,ra.Ga,xb,La))&&C(p+1,ra)}b=Object.keys(c).map(Number);b.sort(da);for(var C=new Float32Array(4),dc,Ma=0,xb=b.length;Ma<xb;++Ma)for(dc in Ra=c[b[Ma]],Ra)ra=Ra[dc],Z=m.Ta(ra.Ga,La),C[0]=2*(Z[2]-Z[0])/V,C[1]=2*(Z[3]-Z[1])/V,C[2]=2*(Z[0]-v[0])/V-1,C[3]=2*(Z[1]-v[1])/V-1,e.uniform4fv(this.i.c,C),lk(d,
ra,q,x*r),e.drawArrays(5,0,4);Pa?(this.j=A,this.A=v,this.o=l.f):(this.A=this.j=null,this.o=-1,a.animate=!0)}kt(a.usedTiles,l,p,A);var $c=d.l;lt(a,l,m,r,g,z,p,h.Pd(),function(a){2!=a.V()||d.a.b.hasOwnProperty(a.ib())||a.ib()in $c.a||$c.i([a,ic(m,a.Ga),m.La(a.Ga[0]),q,x*r])},this);ht(a,l);jt(a,l);e=this.v;xh(e);Eh(e,(Math.round(y[0]/n)*n-v[0])/(v[2]-v[0]),(Math.round(y[1]/n)*n-v[1])/(v[3]-v[1]));f.rotation&&Ch(e,f.rotation);Dh(e,a.size[0]*f.resolution/(v[2]-v[0]),a.size[1]*f.resolution/(v[3]-v[1]));
Eh(e,-.5,-.5);return!0};k.Zf=function(a,b,c,d){if(this.g){a=Bh(this.v,[a[0]/b.size[0],(b.size[1]-a[1])/b.size[1]].slice());a=[a[0]*this.l,a[1]*this.l];b=this.c.i.b;b.bindFramebuffer(b.FRAMEBUFFER,this.g);var e=new Uint8Array(4);b.readPixels(a[0],a[1],1,1,b.RGBA,b.UNSIGNED_BYTE,e);if(0<e[3])return c.call(d,this.a,e)}};function Hv(a){a=a?a:{};var b=pb({},a);delete b.preload;delete b.useInterimTilesOnError;rh.call(this,b);this.Uh(void 0!==a.preload?a.preload:0);this.Vh(void 0!==a.useInterimTilesOnError?a.useInterimTilesOnError:!0)}u(Hv,rh);k=Hv.prototype;k.Dd=function(a){var b=null,c=a.T();"canvas"===c?b=new zv(this):"webgl"===c&&(b=new Gv(a,this));return b};k.Pd=function(){return this.get("preload")};k.Uh=function(a){this.set("preload",a)};k.Td=function(){return this.get("useInterimTilesOnError")};
k.Vh=function(a){this.set("useInterimTilesOnError",a)};function Iv(a){zv.call(this,a);this.G=!1;this.S=wh();this.Y="vector"==a.v?1:0}u(Iv,zv);var Jv={image:ei,hybrid:["Polygon","LineString"]},Kv={hybrid:["Image","Text"],vector:ei};k=Iv.prototype;k.qd=function(a,b){var c=this.a.f;this.oa!=c&&(this.c.length=0);this.oa=c;return zv.prototype.qd.apply(this,arguments)};
function Lv(a,b,c){function d(a){var b,c=a.Nc();c?b=c.call(a,r):(c=e.i)&&(b=c(a,r));if(b){Array.isArray(b)||(b=[b]);var c=A,d=z;if(b){var f=!1;if(Array.isArray(b))for(var g=0,h=b.length;g<h;++g)f=st(d,a,b[g],c,this.$h,this)||f;else f=st(d,a,b,c,this.$h,this)||f;a=f}else a=!1;this.G=this.G||a;l.Ld=l.Ld||a}}var e=a.a,f=c.pixelRatio;c=c.viewState.projection;var g=e.f,h=e.get(vt)||null,l=b.f;if(l.Ld||l.af!=g||l.wg!=h){l.vd=null;l.Ld=!1;var m=e.la(),p=m.tileGrid,n=b.Ga,q=b.l,r=p.La(n[0]),v,x,y;"tile-pixels"==
q.Jb()?(v=y=m.pb(),p=Ga(p.fb(n[0])),v=[0,0,p[0]*v,p[1]*v]):(y=r,v=p.Ta(n),Tb(c,q)||(x=!0,b.Xf(c)));l.Ld=!1;var z=new Ws(0,v,y,m.g,e.c),A=rt(y,f);b=b.g;h&&h!==l.wg&&b.sort(h);m=0;for(y=b.length;m<y;++m)f=b[m],x&&f.U().tb(q,c),d.call(a,f);$s(z);l.af=g;l.wg=h;l.vd=z;l.resolution=NaN}}
k.Df=function(a,b,c,d,e,f,g,h){var l=a;Lv(this,l,b);if("vector"!=this.a.v){var m=l,p=b,n=this.a,l=m.f,q=n.f,r=Jv[n.v];if(r&&l.xg!==q){l.xg=q;var v=m.Ga,x=m.Ga[0],q=p.pixelRatio,y=n.la(),z=y.tileGrid,A=y.pb(),n=xh(this.S);"tile-pixels"==m.l.Jb()?(v=q/A,Dh(n,v,v)):(A=q/z.La(x),v=z.Ta(v,this.j),Dh(n,A,-A),Eh(n,-v[0],-v[3]));m=m.c;p=y.Sd(x,q,p.viewState.projection);m.canvas.width=p[0];m.canvas.height=p[1];l.vd.i(m,q,n,0,{},r)}}zv.prototype.Df.apply(this,arguments)};
k.Aa=function(a,b,c,d,e){var f=b.viewState.resolution;b=b.viewState.rotation;c=void 0==c?0:c;var g=this.a,h={},l=this.c,m=g.la(),p=m.tileGrid,n,q,r,v,x,y;r=0;for(v=l.length;r<v;++r)y=l[r],q=y.Ga,x=m.tileGrid.Ta(q,this.j),Qa(Ka(x,c*f),a)&&("tile-pixels"===y.l.Jb()?(x=eb(x),f=m.pb(),q=p.La(q[0])/f,q=[(a[0]-x[0])/q,(x[1]-a[1])/q]):q=a,y=y.f.vd,n=n||y.Aa(q,f,b,c,{},function(a){var b=w(a).toString();if(!(b in h))return h[b]=!0,d.call(e,a,g)}));return n};k.$h=function(){ft(this)};
k.Ue=function(a,b,c){var d=Kv[this.a.v];if(d)for(var e=b.pixelRatio,f=b.viewState.rotation,g=b.size,h=Math.round(e*g[0]/2),g=Math.round(e*g[1]/2),l=this.c,m=[],p=[],n=l.length-1;0<=n;--n){var q=l[n],r;var v=q;r=b;if("tile-pixels"==v.l.Jb()){var x=this.a.la(),y=x.tileGrid,z=v.Ga,x=y.La(z[0])/x.pb(),v=r.viewState,A=r.pixelRatio,V=v.resolution/A,z=y.Ta(z,this.j),y=v.center,z=eb(z);r=r.size;r=Fh(this.S,Math.round(A*r[0]/2),Math.round(A*r[1]/2),x/V,x/V,v.rotation,(z[0]-y[0])/x,(y[1]-z[1])/x)}else r=pt(this,
r,0);x=bt(q.f.vd,r);v=q.Ga[0];a.save();a.globalAlpha=c.opacity;Qh(a,-f,h,g);A=0;for(V=m.length;A<V;++A)y=m[A],v<p[A]&&(a.beginPath(),a.moveTo(x[0],x[1]),a.lineTo(x[2],x[3]),a.lineTo(x[4],x[5]),a.lineTo(x[6],x[7]),a.moveTo(y[6],y[7]),a.lineTo(y[4],y[5]),a.lineTo(y[2],y[3]),a.lineTo(y[0],y[1]),a.clip());q.f.vd.i(a,e,r,f,{},d);a.restore();m.push(x);p.push(v)}zv.prototype.Ue.apply(this,arguments)};function U(a){a=a?a:{};var b=pb({},a);delete b.preload;delete b.useInterimTilesOnError;R.call(this,b);this.Wh(a.preload?a.preload:0);this.Xh(a.useInterimTilesOnError?a.useInterimTilesOnError:!0);qa(void 0==a.renderMode||"image"==a.renderMode||"hybrid"==a.renderMode||"vector"==a.renderMode,28);this.v=a.renderMode||"hybrid"}u(U,R);k=U.prototype;k.Dd=function(a){var b=null;"canvas"===a.T()&&(b=new Iv(this));return b};k.Pd=function(){return this.get(Mv)};k.Td=function(){return this.get(Nv)};
k.Wh=function(a){this.set("preload",a)};k.Xh=function(a){this.set("useInterimTilesOnError",a)};var Mv="preload",Nv="useInterimTilesOnError";function Ov(a,b,c,d){function e(){delete window[g];f.parentNode.removeChild(f)}var f=document.createElement("script"),g="olc_"+w(b);f.async=!0;f.src=a+(-1==a.indexOf("?")?"?":"&")+(d||"callback")+"="+g;var h=setTimeout(function(){e();c&&c()},1E4);window[g]=function(a){clearTimeout(h);e();b(a)};document.getElementsByTagName("head")[0].appendChild(f)};function Pv(a,b,c,d,e,f,g,h,l,m,p){vs.call(this,e,0);this.C=void 0!==p?p:!1;this.A=g;this.u=h;this.I=null;this.c=b;this.j=d;this.o=f?f:e;this.f=[];this.wd=null;this.g=0;f=d.Ta(this.o);h=this.j.D();e=this.c.D();f=h?lb(f,h):f;if(fb(f))if((h=a.D())&&(e?e=lb(e,h):e=h),d=ev(a,c,jb(f),d.La(this.o[0])),!isFinite(d)||0>=d)this.state=4;else if(this.v=new hv(a,c,f,e,d*(void 0!==m?m:.5)),this.v.c.length)if(this.g=b.Mc(d),c=jv(this.v),e&&(a.a?(c[1]=wa(c[1],e[1],e[3]),c[3]=wa(c[3],e[1],e[3])):c=lb(c,e)),fb(c)){a=
cc(b,c,this.g);for(b=a.da;b<=a.ba;b++)for(c=a.fa;c<=a.ja;c++)(m=l(this.g,b,c,g))&&this.f.push(m);this.f.length||(this.state=4)}else this.state=4;else this.state=4;else this.state=4}u(Pv,vs);Pv.prototype.ra=function(){1==this.state&&(this.wd.forEach(rc),this.wd=null);vs.prototype.ra.call(this)};Pv.prototype.Z=function(){return this.I};
Pv.prototype.Zd=function(){var a=[];this.f.forEach(function(b){b&&2==b.V()&&a.push({extent:this.c.Ta(b.Ga),image:b.Z()})},this);this.f.length=0;if(a.length){var b=this.o[0],c=this.j.fb(b),d="number"===typeof c?c:c[0],c="number"===typeof c?c:c[1],b=this.j.La(b),e=this.c.La(this.g),f=this.j.Ta(this.o);this.I=gv(d,c,this.A,e,this.c.D(),b,f,this.v,a,this.u,this.C);this.state=2}else this.state=3;this.s()};
Pv.prototype.load=function(){if(0==this.state){this.state=1;this.s();var a=0;this.wd=[];this.f.forEach(function(b){var c=b.V();if(0==c||1==c){a++;var d;d=B(b,"change",function(){var c=b.V();if(2==c||3==c||4==c)rc(d),a--,a||(this.wd.forEach(rc),this.wd=null,this.Zd())},this);this.wd.push(d)}},this);this.f.forEach(function(a){0==a.V()&&a.load()});a||setTimeout(this.Zd.bind(this),0)}};function Qv(a,b){var c=/\{z\}/g,d=/\{x\}/g,e=/\{y\}/g,f=/\{-y\}/g;return function(g){if(g)return a.replace(c,g[0].toString()).replace(d,g[1].toString()).replace(e,function(){return(-g[2]-1).toString()}).replace(f,function(){var a=b.a?b.a[g[0]]:null;qa(a,55);return(a.ja-a.fa+1+g[2]).toString()})}}function Rv(a,b){for(var c=a.length,d=Array(c),e=0;e<c;++e)d[e]=Qv(a[e],b);return Sv(d)}function Sv(a){return 1===a.length?a[0]:function(b,c,d){if(b)return a[Ca((b[1]<<b[0])+b[2],a.length)](b,c,d)}}
function Tv(){}function Uv(a){var b=[],c=/\{([a-z])-([a-z])\}/.exec(a);if(c){var d=c[2].charCodeAt(0),e;for(e=c[1].charCodeAt(0);e<=d;++e)b.push(a.replace(c[0],String.fromCharCode(e)));return b}if(c=c=/\{(\d+)-(\d+)\}/.exec(a)){d=parseInt(c[2],10);for(e=parseInt(c[1],10);e<=d;e++)b.push(a.replace(c[0],e.toString()));return b}b.push(a);return b};function Vv(a){jk.call(this);this.i=void 0!==a?a:2048}u(Vv,jk);function Wv(a){return a.c>a.i}Vv.prototype.gd=function(a){for(var b,c;Wv(this);){b=this.a.$c;c=b.Ga[0].toString();var d;if(d=c in a)b=b.Ga,d=ta(a[c],b[1],b[2]);if(d)break;else Ac(this.pop())}};function Xv(a){Gt.call(this,{attributions:a.attributions,extent:a.extent,logo:a.logo,projection:a.projection,state:a.state,wrapX:a.wrapX});this.oa=void 0!==a.opaque?a.opaque:!1;this.Oa=void 0!==a.tilePixelRatio?a.tilePixelRatio:1;this.tileGrid=void 0!==a.tileGrid?a.tileGrid:null;this.a=new Vv(a.cacheSize);this.j=[0,0];this.tc=""}u(Xv,Gt);k=Xv.prototype;k.fi=function(){return Wv(this.a)};k.gd=function(a,b){var c=this.Rd(a);c&&c.gd(b)};
function et(a,b,c,d,e){b=a.Rd(b);if(!b)return!1;for(var f=!0,g,h,l=d.da;l<=d.ba;++l)for(var m=d.fa;m<=d.ja;++m)g=a.Sb(c,l,m),h=!1,b.b.hasOwnProperty(g)&&(g=b.get(g),(h=2===g.V())&&(h=!1!==e(g))),h||(f=!1);return f}k.Jf=function(){return 0};function Yv(a,b){a.tc!==b&&(a.tc=b,a.s())}k.Sb=function(a,b,c){return a+"/"+b+"/"+c};k.Mf=function(){return this.oa};k.ab=function(){return this.tileGrid};k.Ib=function(a){return this.tileGrid?this.tileGrid:jc(a)};
k.Rd=function(a){var b=this.c;return b&&!Tb(b,a)?null:this.a};k.pb=function(){return this.Oa};k.Sd=function(a,b,c){c=this.Ib(c);b=this.pb(b);a=Ga(c.fb(a),this.j);return 1==b?a:Fa(a,b,this.j)};function Zv(a,b,c){var d=void 0!==c?c:a.c;c=a.Ib(d);if(a.G&&d.f){var e=b;b=e[0];a=ic(c,e);d=kc(d);Qa(d,a)?b=e:(e=hb(d),a[0]+=e*Math.ceil((d[0]-a[0])/e),b=c.Pf(a,b))}e=b[0];d=b[1];a=b[2];if(c.minZoom>e||e>c.maxZoom)c=!1;else{var f=c.D();c=(c=f?cc(c,f,e):c.a?c.a[e]:null)?ta(c,d,a):!0}return c?b:null}
k.va=function(){this.a.clear();this.s()};k.Eg=na;function $v(a,b){Bc.call(this,a);this.tile=b}u($v,Bc);function aw(a){Xv.call(this,{attributions:a.attributions,cacheSize:a.cacheSize,extent:a.extent,logo:a.logo,opaque:a.opaque,projection:a.projection,state:a.state,tileGrid:a.tileGrid,tilePixelRatio:a.tilePixelRatio,wrapX:a.wrapX});this.tileLoadFunction=a.tileLoadFunction;this.tileUrlFunction=this.Fc?this.Fc.bind(this):Tv;this.urls=null;a.urls?this.cb(a.urls):a.url&&this.jb(a.url);a.tileUrlFunction&&this.bb(a.tileUrlFunction)}u(aw,Xv);k=aw.prototype;k.ob=function(){return this.tileLoadFunction};
k.qb=function(){return this.tileUrlFunction};k.rb=function(){return this.urls};k.gi=function(a){a=a.target;switch(a.V()){case 1:this.b(new $v("tileloadstart",a));break;case 2:this.b(new $v("tileloadend",a));break;case 3:this.b(new $v("tileloaderror",a))}};k.xb=function(a){this.a.clear();this.tileLoadFunction=a;this.s()};k.bb=function(a,b){this.tileUrlFunction=a;"undefined"!==typeof b?Yv(this,b):this.s()};
k.jb=function(a){var b=this.urls=Uv(a);this.bb(this.Fc?this.Fc.bind(this):Rv(b,this.tileGrid),a)};k.cb=function(a){this.urls=a;var b=a.join("\n");this.bb(this.Fc?this.Fc.bind(this):Rv(a,this.tileGrid),b)};k.Eg=function(a,b,c){a=this.Sb(a,b,c);this.a.b.hasOwnProperty(a)&&this.a.get(a)};function W(a){aw.call(this,{attributions:a.attributions,cacheSize:a.cacheSize,extent:a.extent,logo:a.logo,opaque:a.opaque,projection:a.projection,state:a.state,tileGrid:a.tileGrid,tileLoadFunction:a.tileLoadFunction?a.tileLoadFunction:bw,tilePixelRatio:a.tilePixelRatio,tileUrlFunction:a.tileUrlFunction,url:a.url,urls:a.urls,wrapX:a.wrapX});this.crossOrigin=void 0!==a.crossOrigin?a.crossOrigin:null;this.tileClass=a.tileClass?a.tileClass:xs;this.g={};this.v={};this.Ha=a.reprojectionErrorThreshold;this.C=
!1}u(W,aw);k=W.prototype;k.fi=function(){if(Wv(this.a))return!0;for(var a in this.g)if(Wv(this.g[a]))return!0;return!1};k.gd=function(a,b){var c=this.Rd(a);this.a.gd(this.a==c?b:{});for(var d in this.g){var e=this.g[d];e.gd(e==c?b:{})}};k.Jf=function(a){return this.c&&a&&!Tb(this.c,a)?0:this.Kf()};k.Kf=function(){return 0};k.Mf=function(a){return this.c&&a&&!Tb(this.c,a)?!1:aw.prototype.Mf.call(this,a)};
k.Ib=function(a){var b=this.c;return!this.tileGrid||b&&!Tb(b,a)?(b=w(a).toString(),b in this.v||(this.v[b]=jc(a)),this.v[b]):this.tileGrid};k.Rd=function(a){var b=this.c;if(!b||Tb(b,a))return this.a;a=w(a).toString();a in this.g||(this.g[a]=new Vv);return this.g[a]};function cw(a,b,c,d,e,f,g){b=[b,c,d];e=(c=Zv(a,b,f))?a.tileUrlFunction(c,e,f):void 0;e=new a.tileClass(b,void 0!==e?0:4,void 0!==e?e:"",a.crossOrigin,a.tileLoadFunction);e.key=g;B(e,"change",a.gi,a);return e}
k.Lc=function(a,b,c,d,e){if(this.c&&e&&!Tb(this.c,e)){var f=this.Rd(e);c=[a,b,c];var g;a=this.Sb.apply(this,c);f.b.hasOwnProperty(a)&&(g=f.get(a));b=this.tc;if(g&&g.key==b)return g;var h=this.c,l=this.Ib(h),m=this.Ib(e),p=Zv(this,c,e);d=new Pv(h,l,e,m,c,p,this.pb(d),this.Kf(),function(a,b,c,d){return dw(this,a,b,c,d,h)}.bind(this),this.Ha,this.C);d.key=b;g?(d.a=g,f.replace(a,d)):f.set(a,d);return d}return dw(this,a,b,c,d,e)};
function dw(a,b,c,d,e,f){var g,h=a.Sb(b,c,d),l=a.tc;if(a.a.b.hasOwnProperty(h)){if(g=a.a.get(h),g.key!=l){var m=g;g=cw(a,b,c,d,e,f,l);0==m.V()?g.a=m.a:g.a=m;if(g.a){b=g.a;c=g;do{if(2==b.V()){b.a=null;break}else 1==b.V()?c=b:0==b.V()?c.a=b.a:c=b;b=c.a}while(b)}a.a.replace(h,g)}}else g=cw(a,b,c,d,e,f,l),a.a.set(h,g);return g}k.Nb=function(a){if(this.C!=a){this.C=a;for(var b in this.g)this.g[b].clear();this.s()}};k.Ob=function(a,b){var c=Gb(a);c&&(c=w(c).toString(),c in this.v||(this.v[c]=b))};
function bw(a,b){a.Z().src=b};function ew(a){this.A=void 0!==a.hidpi?a.hidpi:!1;W.call(this,{cacheSize:a.cacheSize,crossOrigin:"anonymous",opaque:!0,projection:Gb("EPSG:3857"),reprojectionErrorThreshold:a.reprojectionErrorThreshold,state:"loading",tileLoadFunction:a.tileLoadFunction,tilePixelRatio:this.A?2:1,wrapX:void 0!==a.wrapX?a.wrapX:!0});this.S=void 0!==a.culture?a.culture:"en-us";this.u=void 0!==a.maxZoom?a.maxZoom:-1;this.i=a.key;this.o=a.imagerySet;Ov("https://dev.virtualearth.net/REST/v1/Imagery/Metadata/"+this.o+"?uriScheme=https&include=ImageryProviders&key="+
this.i,this.ia.bind(this),void 0,"jsonp")}u(ew,W);var fw=new nc({html:'<a class="ol-attribution-bing-tos" href="http://www.microsoft.com/maps/product/terms.html">Terms of Use</a>'});ew.prototype.Y=function(){return this.i};ew.prototype.ea=function(){return this.o};
ew.prototype.ia=function(a){if(200!=a.statusCode||"OK"!=a.statusDescription||"ValidCredentials"!=a.authenticationResultCode||1!=a.resourceSets.length||1!=a.resourceSets[0].resources.length)It(this,"error");else{var b=a.brandLogoUri;-1==b.indexOf("https")&&(b=b.replace("http","https"));var c=a.resourceSets[0].resources[0],d=-1==this.u?c.zoomMax:this.u;a=kc(this.c);var e=mc({extent:a,minZoom:c.zoomMin,maxZoom:d,tileSize:(c.imageWidth==c.imageHeight?c.imageWidth:[c.imageWidth,c.imageHeight])/this.pb()});
this.tileGrid=e;var f=this.S,g=this.A;this.tileUrlFunction=Sv(c.imageUrlSubdomains.map(function(a){var b=[0,0,0],d=c.imageUrl.replace("{subdomain}",a).replace("{culture}",f);return function(a){if(a)return Yb(a[0],a[1],-a[2]-1,b),a=d,g&&(a+="&dpi=d1&device=mobile"),a.replace("{quadkey}",Zb(b))}}));if(c.imageryProviders){var h=Fb(Gb("EPSG:4326"),this.c);a=c.imageryProviders.map(function(a){var b=a.attribution,c={};a.coverageAreas.forEach(function(a){var b=a.zoomMin,f=Math.min(a.zoomMax,d);a=a.bbox;
a=ob([a[1],a[0],a[3],a[2]],h);var g,l;for(g=b;g<=f;++g)l=g.toString(),b=cc(e,a,g),l in c?c[l].push(b):c[l]=[b]});return new nc({html:b,tileRanges:c})});a.push(fw);this.ua(a)}this.R=b;It(this,"ready")}};function gw(a){a=a||{};var b=void 0!==a.projection?a.projection:"EPSG:3857",c=void 0!==a.tileGrid?a.tileGrid:mc({extent:kc(b),maxZoom:a.maxZoom,minZoom:a.minZoom,tileSize:a.tileSize});W.call(this,{attributions:a.attributions,cacheSize:a.cacheSize,crossOrigin:a.crossOrigin,logo:a.logo,opaque:a.opaque,projection:b,reprojectionErrorThreshold:a.reprojectionErrorThreshold,tileGrid:c,tileLoadFunction:a.tileLoadFunction,tilePixelRatio:a.tilePixelRatio,tileUrlFunction:a.tileUrlFunction,url:a.url,urls:a.urls,
wrapX:void 0!==a.wrapX?a.wrapX:!0})}u(gw,W);function hw(a){this.u=a.account;this.A=a.map||"";this.i=a.config||{};this.o={};gw.call(this,{attributions:a.attributions,cacheSize:a.cacheSize,crossOrigin:a.crossOrigin,logo:a.logo,maxZoom:void 0!==a.maxZoom?a.maxZoom:18,minZoom:a.minZoom,projection:a.projection,state:"loading",wrapX:a.wrapX});iw(this)}u(hw,gw);k=hw.prototype;k.pk=function(){return this.i};k.Fp=function(a){pb(this.i,a);iw(this)};k.np=function(a){this.i=a||{};iw(this)};
function iw(a){var b=JSON.stringify(a.i);if(a.o[b])jw(a,a.o[b]);else{var c="https://"+a.u+".cartodb.com/api/v1/map";a.A&&(c+="/named/"+a.A);var d=new XMLHttpRequest;d.addEventListener("load",a.jl.bind(a,b));d.addEventListener("error",a.il.bind(a));d.open("POST",c);d.setRequestHeader("Content-type","application/json");d.send(JSON.stringify(a.i))}}
k.jl=function(a,b){var c=b.target;if(!c.status||200<=c.status&&300>c.status){var d;try{d=JSON.parse(c.responseText)}catch(e){It(this,"error");return}jw(this,d);this.o[a]=d;It(this,"ready")}else It(this,"error")};k.il=function(){It(this,"error")};function jw(a,b){a.jb("https://"+b.cdn_url.https+"/"+a.u+"/api/v1/map/"+b.layergroupid+"/{z}/{x}/{y}.png")};function X(a){S.call(this,{attributions:a.attributions,extent:a.extent,logo:a.logo,projection:a.projection,wrapX:a.wrapX});this.C=void 0;this.ia=void 0!==a.distance?a.distance:20;this.A=[];this.Ra=a.geometryFunction||function(a){a=a.U();qa(a instanceof E,10);return a};this.u=a.source;this.u.J("change",X.prototype.Oa,this)}u(X,S);X.prototype.lb=function(){return this.u};X.prototype.Ud=function(a,b,c){this.u.Ud(a,b,c);b!==this.C&&(this.clear(),this.C=b,kw(this),this.dd(this.A))};
X.prototype.mb=function(a){this.ia=a;this.Oa()};X.prototype.Oa=function(){this.clear();kw(this);this.dd(this.A);this.s()};function kw(a){if(void 0!==a.C){a.A.length=0;for(var b=Ia(),c=a.ia*a.C,d=a.u.Ne(),e={},f=0,g=d.length;f<g;f++){var h=d[f];w(h).toString()in e||!(h=a.Ra(h))||(h=h.X(),Wa(h,b),Ka(b,c,b),h=a.u.Hf(b),h=h.filter(function(a){a=w(a).toString();return a in e?!1:e[a]=!0}),a.A.push(lw(a,h)))}}}
function lw(a,b){for(var c=[0,0],d=b.length-1;0<=d;--d){var e=a.Ra(b[d]);e?Qe(c,e.X()):b.splice(d,1)}We(c,1/b.length);c=new H(new E(c));c.set("features",b);return c};function mw(a,b){var c=[];Object.keys(b).forEach(function(a){null!==b[a]&&void 0!==b[a]&&c.push(a+"="+encodeURIComponent(b[a]))});var d=c.join("&");a=a.replace(/[?&]$/,"");a=-1===a.indexOf("?")?a+"?":a+"&";return a+d};function nw(a){a=a||{};lv.call(this,{attributions:a.attributions,logo:a.logo,projection:a.projection,resolutions:a.resolutions});this.S=void 0!==a.crossOrigin?a.crossOrigin:null;this.Y=void 0!==a.hidpi?a.hidpi:!0;this.i=a.url;this.g=a.imageLoadFunction?a.imageLoadFunction:rv;this.v=a.params||{};this.M=null;this.o=[0,0];this.C=0;this.A=void 0!==a.ratio?a.ratio:1.5}u(nw,lv);k=nw.prototype;k.rn=function(){return this.v};
k.Ic=function(a,b,c,d){if(void 0===this.i)return null;b=mv(this,b);c=this.Y?c:1;var e=this.M;if(e&&this.C==this.f&&e.resolution==b&&e.a==c&&Ta(e.D(),a))return e;e={F:"image",FORMAT:"PNG32",TRANSPARENT:!0};pb(e,this.v);a=a.slice();var f=(a[0]+a[2])/2,g=(a[1]+a[3])/2;if(1!=this.A){var h=this.A*hb(a)/2,l=this.A*ib(a)/2;a[0]=f-h;a[1]=g-l;a[2]=f+h;a[3]=g+l}var h=b/c,l=Math.ceil(hb(a)/h),m=Math.ceil(ib(a)/h);a[0]=f-h*l/2;a[2]=f+h*l/2;a[1]=g-h*m/2;a[3]=g+h*m/2;this.o[0]=l;this.o[1]=m;f=a;g=this.o;h=c;d=
d.nb.split(":").pop();e.SIZE=g[0]+","+g[1];e.BBOX=f.join(",");e.BBOXSR=d;e.IMAGESR=d;e.DPI=Math.round(90*h);d=this.i;f=d.replace(/MapServer\/?$/,"MapServer/export").replace(/ImageServer\/?$/,"ImageServer/exportImage");f==d&&qa(!1,50);e=mw(f,e);this.M=new ts(a,b,c,this.l,e,this.S,this.g);this.C=this.f;B(this.M,"change",this.j,this);return this.M};k.qn=function(){return this.g};k.sn=function(){return this.i};k.tn=function(a){this.M=null;this.g=a;this.s()};
k.vn=function(a){a!=this.i&&(this.i=a,this.M=null,this.s())};k.wn=function(a){pb(this.v,a);this.M=null;this.s()};function ow(a){lv.call(this,{projection:a.projection,resolutions:a.resolutions});this.S=void 0!==a.crossOrigin?a.crossOrigin:null;this.o=void 0!==a.displayDpi?a.displayDpi:96;this.g=a.params||{};this.C=a.url;this.i=a.imageLoadFunction?a.imageLoadFunction:rv;this.Y=void 0!==a.hidpi?a.hidpi:!0;this.ia=void 0!==a.metersPerUnit?a.metersPerUnit:1;this.v=void 0!==a.ratio?a.ratio:1;this.oa=void 0!==a.useOverlay?a.useOverlay:!1;this.M=null;this.A=0}u(ow,lv);k=ow.prototype;k.yn=function(){return this.g};
k.Ic=function(a,b,c){b=mv(this,b);c=this.Y?c:1;var d=this.M;if(d&&this.A==this.f&&d.resolution==b&&d.a==c&&Ta(d.D(),a))return d;1!=this.v&&(a=a.slice(),nb(a,this.v));var e=[hb(a)/b*c,ib(a)/b*c];if(void 0!==this.C){var d=this.C,f=jb(a),g=this.ia,h=hb(a),l=ib(a),m=e[0],p=e[1],n=.0254/this.o,e={OPERATION:this.oa?"GETDYNAMICMAPOVERLAYIMAGE":"GETMAPIMAGE",VERSION:"2.0.0",LOCALE:"en",CLIENTAGENT:"ol.source.ImageMapGuide source",CLIP:"1",SETDISPLAYDPI:this.o,SETDISPLAYWIDTH:Math.round(e[0]),SETDISPLAYHEIGHT:Math.round(e[1]),
SETVIEWSCALE:p*h>m*l?h*g/(m*n):l*g/(p*n),SETVIEWCENTERX:f[0],SETVIEWCENTERY:f[1]};pb(e,this.g);d=mw(d,e);d=new ts(a,b,c,this.l,d,this.S,this.i);B(d,"change",this.j,this)}else d=null;this.M=d;this.A=this.f;return d};k.xn=function(){return this.i};k.An=function(a){pb(this.g,a);this.s()};k.zn=function(a){this.M=null;this.i=a;this.s()};function pw(a){var b=a.imageExtent,c=void 0!==a.crossOrigin?a.crossOrigin:null,d=a.imageLoadFunction?a.imageLoadFunction:rv;lv.call(this,{attributions:a.attributions,logo:a.logo,projection:Gb(a.projection)});this.M=new ts(b,void 0,1,this.l,a.url,c,d);this.i=a.imageSize?a.imageSize:null;B(this.M,"change",this.j,this)}u(pw,lv);pw.prototype.Ic=function(a){return mb(a,this.M.D())?this.M:null};
pw.prototype.j=function(a){if(2==this.M.V()){var b=this.M.D(),c=this.M.Z(),d,e;this.i?(d=this.i[0],e=this.i[1]):(d=c.width,e=c.height);b=Math.ceil(hb(b)/(ib(b)/e));if(b!=d){var b=Xc(b,e),f=b.canvas;b.drawImage(c,0,0,d,e,0,0,f.width,f.height);this.M.zg(f)}}lv.prototype.j.call(this,a)};function qw(a){a=a||{};lv.call(this,{attributions:a.attributions,logo:a.logo,projection:a.projection,resolutions:a.resolutions});this.ia=void 0!==a.crossOrigin?a.crossOrigin:null;this.g=a.url;this.v=a.imageLoadFunction?a.imageLoadFunction:rv;this.i=a.params||{};this.o=!0;rw(this);this.Y=a.serverType;this.oa=void 0!==a.hidpi?a.hidpi:!0;this.M=null;this.A=[0,0];this.S=0;this.C=void 0!==a.ratio?a.ratio:1.5}u(qw,lv);var sw=[101,101];k=qw.prototype;
k.Gn=function(a,b,c,d){if(void 0!==this.g){var e=kb(a,b,0,sw),f={SERVICE:"WMS",VERSION:"1.3.0",REQUEST:"GetFeatureInfo",FORMAT:"image/png",TRANSPARENT:!0,QUERY_LAYERS:this.i.LAYERS};pb(f,this.i,d);d=Math.floor((e[3]-a[1])/b);f[this.o?"I":"X"]=Math.floor((a[0]-e[0])/b);f[this.o?"J":"Y"]=d;return tw(this,e,sw,1,Gb(c),f)}};k.In=function(){return this.i};
k.Ic=function(a,b,c,d){if(void 0===this.g)return null;b=mv(this,b);1==c||this.oa&&void 0!==this.Y||(c=1);var e=b/c,f=jb(a),g=kb(f,b,0,[Math.ceil(hb(a)/e),Math.ceil(ib(a)/e)]);a=kb(f,b,0,[Math.ceil(this.C*hb(a)/e),Math.ceil(this.C*ib(a)/e)]);if((f=this.M)&&this.S==this.f&&f.resolution==b&&f.a==c&&Ta(f.D(),g))return f;g={SERVICE:"WMS",VERSION:"1.3.0",REQUEST:"GetMap",FORMAT:"image/png",TRANSPARENT:!0};pb(g,this.i);this.A[0]=Math.round(hb(a)/e);this.A[1]=Math.round(ib(a)/e);d=tw(this,a,this.A,c,d,g);
this.M=new ts(a,b,c,this.l,d,this.ia,this.v);this.S=this.f;B(this.M,"change",this.j,this);return this.M};k.Hn=function(){return this.v};
function tw(a,b,c,d,e,f){qa(void 0!==a.g,9);f[a.o?"CRS":"SRS"]=e.nb;"STYLES"in a.i||(f.STYLES="");if(1!=d)switch(a.Y){case "geoserver":d=90*d+.5|0;f.FORMAT_OPTIONS="FORMAT_OPTIONS"in f?f.FORMAT_OPTIONS+(";dpi:"+d):"dpi:"+d;break;case "mapserver":f.MAP_RESOLUTION=90*d;break;case "carmentaserver":case "qgis":f.DPI=90*d;break;default:qa(!1,8)}f.WIDTH=c[0];f.HEIGHT=c[1];c=e.b;var g;a.o&&"ne"==c.substr(0,2)?g=[b[1],b[0],b[3],b[2]]:g=b;f.BBOX=g.join(",");return mw(a.g,f)}k.Jn=function(){return this.g};
k.Kn=function(a){this.M=null;this.v=a;this.s()};k.Ln=function(a){a!=this.g&&(this.g=a,this.M=null,this.s())};k.Mn=function(a){pb(this.i,a);rw(this);this.M=null;this.s()};function rw(a){a.o=0<=Pe(a.i.VERSION||"1.3.0")};function uw(a){a=a||{};var b;void 0!==a.attributions?b=a.attributions:b=[vw];gw.call(this,{attributions:b,cacheSize:a.cacheSize,crossOrigin:void 0!==a.crossOrigin?a.crossOrigin:"anonymous",opaque:void 0!==a.opaque?a.opaque:!0,maxZoom:void 0!==a.maxZoom?a.maxZoom:19,reprojectionErrorThreshold:a.reprojectionErrorThreshold,tileLoadFunction:a.tileLoadFunction,url:void 0!==a.url?a.url:"https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png",wrapX:a.wrapX})}u(uw,gw);var vw=new nc({html:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors.'});(function(){var a={},b={ma:a};(function(c){if("object"===typeof a&&"undefined"!==typeof b)b.ma=c();else{var d;"undefined"!==typeof window?d=window:"undefined"!==typeof global?d=global:"undefined"!==typeof self?d=self:d=this;d.bq=c()}})(function(){return function d(a,b,g){function e(h,l){if(!b[h]){if(!a[h]){var m="function"==typeof require&&require;if(!l&&m)return m(h,!0);if(f)return f(h,!0);m=Error("Cannot find module '"+h+"'");throw m.code="MODULE_NOT_FOUND",m;}m=b[h]={ma:{}};a[h][0].call(m.ma,function(b){var d=
a[h][1][b];return e(d?d:b)},m,m.ma,d,a,b,g)}return b[h].ma}for(var f="function"==typeof require&&require,m=0;m<g.length;m++)e(g[m]);return e}({1:[function(a,b,f){a=a("./processor");f.yj=a},{"./processor":2}],2:[function(a,b){function d(a){var b=!0;try{new ImageData(10,10)}catch(q){b=!1}return function(d){var e=d.buffers,f=d.meta,g=d.width,h=d.height,l=e.length,m=e[0].byteLength;if(d.imageOps){m=Array(l);for(d=0;d<l;++d){var n=m,p=d,q;q=new Uint8ClampedArray(e[d]);var La=g,C=h;q=b?new ImageData(q,
La,C):{data:q,width:La,height:C};n[p]=q}g=a(m,f).data}else{g=new Uint8ClampedArray(m);h=Array(l);n=Array(l);for(d=0;d<l;++d)h[d]=new Uint8ClampedArray(e[d]),n[d]=[0,0,0,0];for(e=0;e<m;e+=4){for(d=0;d<l;++d)p=h[d],n[d][0]=p[e],n[d][1]=p[e+1],n[d][2]=p[e+2],n[d][3]=p[e+3];d=a(n,f);g[e]=d[0];g[e+1]=d[1];g[e+2]=d[2];g[e+3]=d[3]}}return g.buffer}}function e(a,b){var e=Object.keys(a.lib||{}).map(function(b){return"var "+b+" = "+a.lib[b].toString()+";"}).concat(["var __minion__ = ("+d.toString()+")(",a.operation.toString(),
");",'self.addEventListener("message", function(event) {',"  var buffer = __minion__(event.data);","  self.postMessage({buffer: buffer, meta: event.data.meta}, [buffer]);","});"]),e=URL.createObjectURL(new Blob(e,{type:"text/javascript"})),e=new Worker(e);e.addEventListener("message",b);return e}function h(a,b){var e=d(a.operation);return{postMessage:function(a){setTimeout(function(){b({data:{buffer:e(a),meta:a.meta}})},0)}}}function l(a){this.uf=!!a.Gl;var b;0===a.threads?b=0:this.uf?b=1:b=a.threads||
1;var d=[];if(b)for(var f=0;f<b;++f)d[f]=e(a,this.Qg.bind(this,f));else d[0]=h(a,this.Qg.bind(this,0));this.le=d;this.Cd=[];this.Mj=a.Go||Infinity;this.je=0;this.cd={};this.vf=null}var m=a("./util").$l;l.prototype.Eo=function(a,b,d){this.Kj({inputs:a,Ch:b,fd:d});this.Ng()};l.prototype.Kj=function(a){for(this.Cd.push(a);this.Cd.length>this.Mj;)this.Cd.shift().fd(null,null)};l.prototype.Ng=function(){if(0===this.je&&0<this.Cd.length){var a=this.vf=this.Cd.shift(),b=a.inputs[0].width,d=a.inputs[0].height,
e=a.inputs.map(function(a){return a.data.buffer}),f=this.le.length;this.je=f;if(1===f)this.le[0].postMessage({buffers:e,meta:a.Ch,imageOps:this.uf,width:b,height:d},e);else for(var g=4*Math.ceil(a.inputs[0].data.length/4/f),h=0;h<f;++h){for(var l=h*g,m=[],V=0,Pa=e.length;V<Pa;++V)m.push(e[h].slice(l,l+g));this.le[h].postMessage({buffers:m,meta:a.Ch,imageOps:this.uf,width:b,height:d},m)}}};l.prototype.Qg=function(a,b){this.$p||(this.cd[a]=b.data,--this.je,0===this.je&&this.Nj())};l.prototype.Nj=function(){var a=
this.vf,b=this.le.length,d,e;if(1===b)d=new Uint8ClampedArray(this.cd[0].buffer),e=this.cd[0].meta;else{var f=a.inputs[0].data.length;d=new Uint8ClampedArray(f);e=Array(f);for(var f=4*Math.ceil(f/4/b),g=0;g<b;++g){var h=g*f;d.set(new Uint8ClampedArray(this.cd[g].buffer),h);e[g]=this.cd[g].meta}}this.vf=null;this.cd={};a.fd(null,m(d,a.inputs[0].width,a.inputs[0].height),e);this.Ng()};b.ma=l},{"./util":3}],3:[function(a,b,f){var d=!0;try{new ImageData(10,10)}catch(l){d=!1}var e=document.createElement("canvas").getContext("2d");
f.$l=function(a,b,f){if(d)return new ImageData(a,b,f);b=e.createImageData(b,f);b.data.set(a);return b}},{}]},{},[1])(1)});Dj=b.ma})();function ww(a){this.C=null;this.Ha=void 0!==a.operationType?a.operationType:"pixel";this.Oa=void 0!==a.threads?a.threads:1;this.i=xw(a.sources);for(var b=0,c=this.i.length;b<c;++b)B(this.i[b],"change",this.s,this);this.g=Xc();this.ia=new Fe(function(){return 1},this.s.bind(this));for(var b=yw(this.i),c={},d=0,e=b.length;d<e;++d)c[w(b[d].layer)]=b[d];this.o=this.v=null;this.Y={animate:!1,attributions:{},coordinateToPixelTransform:wh(),extent:null,focus:null,index:0,layerStates:c,layerStatesArray:b,
logos:{},pixelRatio:1,pixelToCoordinateTransform:wh(),postRenderFunctions:[],size:[0,0],skippedFeatureUids:{},tileQueue:this.ia,time:Date.now(),usedTiles:{},viewState:{rotation:0},viewHints:[],wantedTiles:{}};lv.call(this,{});a.operation&&this.A(a.operation,a.lib)}u(ww,lv);ww.prototype.A=function(a,b){this.C=new Dj.yj({operation:a,Gl:"image"===this.Ha,Go:1,lib:b,threads:this.Oa});this.s()};function zw(a,b,c){var d=a.v;return!d||a.f!==d.kp||c!==d.resolution||!Za(b,d.extent)}
ww.prototype.Z=function(a,b,c,d){c=!0;for(var e,f=0,g=this.i.length;f<g;++f)if(e=this.i[f].a.la(),"ready"!==e.V()){c=!1;break}if(!c)return null;a=a.slice();if(!zw(this,a,b))return this.o;c=this.g.canvas;e=Math.round(hb(a)/b);f=Math.round(ib(a)/b);if(e!==c.width||f!==c.height)c.width=e,c.height=f;e=pb({},this.Y);e.viewState=pb({},e.viewState);var f=jb(a),g=Math.round(hb(a)/b),h=Math.round(ib(a)/b);e.extent=a;e.focus=jb(a);e.size[0]=g;e.size[1]=h;g=e.viewState;g.center=f;g.projection=d;g.resolution=
b;this.o=d=new us(a,b,1,this.l,c,this.S.bind(this,e));this.v={extent:a,resolution:b,kp:this.f};return d};
ww.prototype.S=function(a,b){for(var c=this.i.length,d=Array(c),e=0;e<c;++e){var f;f=this.i[e];var g=a,h=a.layerStatesArray[e];if(f.qd(g,h)){var l=g.size[0],m=g.size[1];if(Aw){var p=Aw.canvas;p.width!==l||p.height!==m?Aw=Xc(l,m):Aw.clearRect(0,0,l,m)}else Aw=Xc(l,m);f.I(g,h,Aw);f=Aw.getImageData(0,0,l,m)}else f=null;if(f)d[e]=f;else{d=null;break}}d&&(c={},this.b(new Bw(Cw,a,c)),this.C.Eo(d,c,this.oa.bind(this,a,b)));Ge(a.tileQueue,16,16)};
ww.prototype.oa=function(a,b,c,d,e){c?b(c):d&&(this.b(new Bw(Dw,a,e)),zw(this,a.extent,a.viewState.resolution/a.pixelRatio)||this.g.putImageData(d,0,0),b(null))};var Aw=null;function yw(a){return a.map(function(a){return eh(a.a)})}function xw(a){for(var b=a.length,c=Array(b),d=0;d<b;++d){var e=d,f=a[d],g=null;f instanceof Xv?(f=new Hv({source:f}),g=new zv(f)):f instanceof lv&&(f=new yv({source:f}),g=new dv(f));c[e]=g}return c}
function Bw(a,b,c){Bc.call(this,a);this.extent=b.extent;this.resolution=b.viewState.resolution/b.pixelRatio;this.data=c}u(Bw,Bc);ww.prototype.Ic=function(){return null};var Cw="beforeoperations",Dw="afteroperations";function Ew(a){var b=a.layer.indexOf("-"),b=Fw[-1==b?a.layer:a.layer.slice(0,b)],c=Gw[a.layer];gw.call(this,{attributions:Hw,cacheSize:a.cacheSize,crossOrigin:"anonymous",maxZoom:void 0!=a.maxZoom?a.maxZoom:b.maxZoom,minZoom:void 0!=a.minZoom?a.minZoom:b.minZoom,opaque:c.opaque,reprojectionErrorThreshold:a.reprojectionErrorThreshold,tileLoadFunction:a.tileLoadFunction,url:void 0!==a.url?a.url:"https://stamen-tiles-{a-d}.a.ssl.fastly.net/"+a.layer+"/{z}/{x}/{y}."+c.Hb})}u(Ew,gw);
var Hw=[new nc({html:'Map tiles by <a href="http://stamen.com/">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0/">CC BY 3.0</a>.'}),vw],Gw={terrain:{Hb:"jpg",opaque:!0},"terrain-background":{Hb:"jpg",opaque:!0},"terrain-labels":{Hb:"png",opaque:!1},"terrain-lines":{Hb:"png",opaque:!1},"toner-background":{Hb:"png",opaque:!0},toner:{Hb:"png",opaque:!0},"toner-hybrid":{Hb:"png",opaque:!1},"toner-labels":{Hb:"png",opaque:!1},"toner-lines":{Hb:"png",opaque:!1},"toner-lite":{Hb:"png",
opaque:!0},watercolor:{Hb:"jpg",opaque:!0}},Fw={terrain:{minZoom:4,maxZoom:18},toner:{minZoom:0,maxZoom:20},watercolor:{minZoom:1,maxZoom:16}};function Iw(a){a=a||{};W.call(this,{attributions:a.attributions,cacheSize:a.cacheSize,crossOrigin:a.crossOrigin,logo:a.logo,projection:a.projection,reprojectionErrorThreshold:a.reprojectionErrorThreshold,tileGrid:a.tileGrid,tileLoadFunction:a.tileLoadFunction,url:a.url,urls:a.urls,wrapX:void 0!==a.wrapX?a.wrapX:!0});this.i=a.params||{};this.o=Ia();Yv(this,Jw(this))}u(Iw,W);function Jw(a){var b=0,c=[],d;for(d in a.i)c[b++]=d+"-"+a.i[d];return c.join("/")}Iw.prototype.u=function(){return this.i};
Iw.prototype.pb=function(a){return a};
Iw.prototype.Fc=function(a,b,c){var d=this.tileGrid;d||(d=this.Ib(c));if(!(d.b.length<=a[0])){var e=d.Ta(a,this.o),f=Ga(d.fb(a[0]),this.j);1!=b&&(f=Fa(f,b,this.j));d={F:"image",FORMAT:"PNG32",TRANSPARENT:!0};pb(d,this.i);var g=this.urls;g?(c=c.nb.split(":").pop(),d.SIZE=f[0]+","+f[1],d.BBOX=e.join(","),d.BBOXSR=c,d.IMAGESR=c,d.DPI=Math.round(d.DPI?d.DPI*b:90*b),a=(1==g.length?g[0]:g[Ca((a[1]<<a[0])+a[2],g.length)]).replace(/MapServer\/?$/,"MapServer/export").replace(/ImageServer\/?$/,"ImageServer/exportImage"),
a=mw(a,d)):a=void 0;return a}};Iw.prototype.A=function(a){pb(this.i,a);Yv(this,Jw(this))};function Kw(a){Xv.call(this,{opaque:!1,projection:a.projection,tileGrid:a.tileGrid,wrapX:void 0!==a.wrapX?a.wrapX:!0})}u(Kw,Xv);Kw.prototype.Lc=function(a,b,c){var d=this.Sb(a,b,c);if(this.a.b.hasOwnProperty(d))return this.a.get(d);var e=Ga(this.tileGrid.fb(a));a=[a,b,c];b=(b=Zv(this,a))?Zv(this,b).toString():"";e=new Lw(a,e,b);this.a.set(d,e);return e};function Lw(a,b,c){vs.call(this,a,2);this.c=b;this.Fa=c;this.f=null}u(Lw,vs);
Lw.prototype.Z=function(){if(this.f)return this.f;var a=this.c,b=Xc(a[0],a[1]);b.strokeStyle="black";b.strokeRect(.5,.5,a[0]+.5,a[1]+.5);b.fillStyle="black";b.textAlign="center";b.textBaseline="middle";b.font="24px sans-serif";b.fillText(this.Fa,a[0]/2,a[1]/2);return this.f=b.canvas};Lw.prototype.load=function(){};function Mw(a){this.i=null;W.call(this,{attributions:a.attributions,cacheSize:a.cacheSize,crossOrigin:a.crossOrigin,projection:Gb("EPSG:3857"),reprojectionErrorThreshold:a.reprojectionErrorThreshold,state:"loading",tileLoadFunction:a.tileLoadFunction,wrapX:void 0!==a.wrapX?a.wrapX:!0});if(a.jsonp)Ov(a.url,this.di.bind(this),this.Le.bind(this));else{var b=new XMLHttpRequest;b.addEventListener("load",this.On.bind(this));b.addEventListener("error",this.Nn.bind(this));b.open("GET",a.url);b.send()}}
u(Mw,W);k=Mw.prototype;k.On=function(a){a=a.target;if(!a.status||200<=a.status&&300>a.status){var b;try{b=JSON.parse(a.responseText)}catch(c){this.Le();return}this.di(b)}else this.Le()};k.Nn=function(){this.Le()};k.Vk=function(){return this.i};
k.di=function(a){var b=Gb("EPSG:4326"),c=this.c,d;if(a.bounds){var e=Fb(b,c);d=ob(a.bounds,e)}var f=a.minzoom||0,e=a.maxzoom||22;this.tileGrid=c=mc({extent:kc(c),maxZoom:e,minZoom:f});this.tileUrlFunction=Rv(a.tiles,c);if(void 0!==a.attribution&&!this.l){b=void 0!==d?d:b.D();d={};for(var g;f<=e;++f)g=f.toString(),d[g]=[cc(c,b,f)];this.ua([new nc({html:a.attribution,tileRanges:d})])}this.i=a;It(this,"ready")};k.Le=function(){It(this,"error")};function Nw(a){Xv.call(this,{projection:Gb("EPSG:3857"),state:"loading"});this.v=void 0!==a.preemptive?a.preemptive:!0;this.o=Tv;this.g=void 0;this.i=a.jsonp||!1;if(a.url)if(this.i)Ov(a.url,this.bg.bind(this),this.Me.bind(this));else{var b=new XMLHttpRequest;b.addEventListener("load",this.Sn.bind(this));b.addEventListener("error",this.Rn.bind(this));b.open("GET",a.url);b.send()}else a.tileJSON?this.bg(a.tileJSON):qa(!1,51)}u(Nw,Xv);k=Nw.prototype;
k.Sn=function(a){a=a.target;if(!a.status||200<=a.status&&300>a.status){var b;try{b=JSON.parse(a.responseText)}catch(c){this.Me();return}this.bg(b)}else this.Me()};k.Rn=function(){this.Me()};k.Sk=function(){return this.g};k.dk=function(a,b,c,d,e){this.tileGrid?(b=this.tileGrid.we(a,b),Ow(this.Lc(b[0],b[1],b[2],1,this.c),a,c,d,e)):!0===e?setTimeout(function(){c.call(d,null)},0):c.call(d,null)};k.Me=function(){It(this,"error")};
k.bg=function(a){var b=Gb("EPSG:4326"),c=this.c,d;if(a.bounds){var e=Fb(b,c);d=ob(a.bounds,e)}var f=a.minzoom||0,e=a.maxzoom||22;this.tileGrid=c=mc({extent:kc(c),maxZoom:e,minZoom:f});this.g=a.template;var g=a.grids;if(g){this.o=Rv(g,c);if(void 0!==a.attribution){b=void 0!==d?d:b.D();for(d={};f<=e;++f)g=f.toString(),d[g]=[cc(c,b,f)];this.ua([new nc({html:a.attribution,tileRanges:d})])}It(this,"ready")}else It(this,"error")};
k.Lc=function(a,b,c,d,e){var f=this.Sb(a,b,c);if(this.a.b.hasOwnProperty(f))return this.a.get(f);a=[a,b,c];b=Zv(this,a,e);d=this.o(b,d,e);d=new Pw(a,void 0!==d?0:4,void 0!==d?d:"",this.tileGrid.Ta(a),this.v,this.i);this.a.set(f,d);return d};k.Eg=function(a,b,c){a=this.Sb(a,b,c);this.a.b.hasOwnProperty(a)&&this.a.get(a)};function Pw(a,b,c,d,e,f){vs.call(this,a,b);this.o=c;this.f=d;this.I=e;this.c=this.j=this.g=null;this.v=f}u(Pw,vs);k=Pw.prototype;k.Z=function(){return null};
k.getData=function(a){if(!this.g||!this.j)return null;var b=this.g[Math.floor((1-(a[1]-this.f[1])/(this.f[3]-this.f[1]))*this.g.length)];if("string"!==typeof b)return null;b=b.charCodeAt(Math.floor((a[0]-this.f[0])/(this.f[2]-this.f[0])*b.length));93<=b&&b--;35<=b&&b--;b-=32;a=null;b in this.j&&(b=this.j[b],this.c&&b in this.c?a=this.c[b]:a=b);return a};
function Ow(a,b,c,d,e){0==a.state&&!0===e?(wc(a,"change",function(){c.call(d,this.getData(b))},a),Qw(a)):!0===e?setTimeout(function(){c.call(d,this.getData(b))}.bind(a),0):c.call(d,a.getData(b))}k.ib=function(){return this.o};k.xe=function(){this.state=3;this.s()};k.ei=function(a){this.g=a.grid;this.j=a.keys;this.c=a.data;this.state=4;this.s()};
function Qw(a){if(0==a.state)if(a.state=1,a.v)Ov(a.o,a.ei.bind(a),a.xe.bind(a));else{var b=new XMLHttpRequest;b.addEventListener("load",a.Qn.bind(a));b.addEventListener("error",a.Pn.bind(a));b.open("GET",a.o);b.send()}}k.Qn=function(a){a=a.target;if(!a.status||200<=a.status&&300>a.status){var b;try{b=JSON.parse(a.responseText)}catch(c){this.xe();return}this.ei(b)}else this.xe()};k.Pn=function(){this.xe()};k.load=function(){this.I&&Qw(this)};function Rw(a){a=a||{};var b=a.params||{};W.call(this,{attributions:a.attributions,cacheSize:a.cacheSize,crossOrigin:a.crossOrigin,logo:a.logo,opaque:!("TRANSPARENT"in b?b.TRANSPARENT:1),projection:a.projection,reprojectionErrorThreshold:a.reprojectionErrorThreshold,tileGrid:a.tileGrid,tileLoadFunction:a.tileLoadFunction,url:a.url,urls:a.urls,wrapX:void 0!==a.wrapX?a.wrapX:!0});this.u=void 0!==a.gutter?a.gutter:0;this.i=b;this.o=!0;this.A=a.serverType;this.Y=void 0!==a.hidpi?a.hidpi:!0;this.S="";
Sw(this);this.ea=Ia();Tw(this);Yv(this,Uw(this))}u(Rw,W);k=Rw.prototype;
k.Tn=function(a,b,c,d){c=Gb(c);var e=this.tileGrid;e||(e=this.Ib(c));b=e.we(a,b);if(!(e.b.length<=b[0])){var f=e.La(b[0]),g=e.Ta(b,this.ea),e=Ga(e.fb(b[0]),this.j),h=this.u;h&&(e=Ea(e,h,this.j),g=Ka(g,f*h,g));h={SERVICE:"WMS",VERSION:"1.3.0",REQUEST:"GetFeatureInfo",FORMAT:"image/png",TRANSPARENT:!0,QUERY_LAYERS:this.i.LAYERS};pb(h,this.i,d);d=Math.floor((g[3]-a[1])/f);h[this.o?"I":"X"]=Math.floor((a[0]-g[0])/f);h[this.o?"J":"Y"]=d;return Vw(this,b,e,g,1,c,h)}};k.Kf=function(){return this.u};
k.Sb=function(a,b,c){return this.S+W.prototype.Sb.call(this,a,b,c)};k.Un=function(){return this.i};
function Vw(a,b,c,d,e,f,g){var h=a.urls;if(h){g.WIDTH=c[0];g.HEIGHT=c[1];g[a.o?"CRS":"SRS"]=f.nb;"STYLES"in a.i||(g.STYLES="");if(1!=e)switch(a.A){case "geoserver":c=90*e+.5|0;g.FORMAT_OPTIONS="FORMAT_OPTIONS"in g?g.FORMAT_OPTIONS+(";dpi:"+c):"dpi:"+c;break;case "mapserver":g.MAP_RESOLUTION=90*e;break;case "carmentaserver":case "qgis":g.DPI=90*e;break;default:qa(!1,52)}f=f.b;a.o&&"ne"==f.substr(0,2)&&(a=d[0],d[0]=d[1],d[1]=a,a=d[2],d[2]=d[3],d[3]=a);g.BBOX=d.join(",");return mw(1==h.length?h[0]:h[Ca((b[1]<<
b[0])+b[2],h.length)],g)}}k.pb=function(a){return this.Y&&void 0!==this.A?a:1};function Sw(a){var b=0,c=[];if(a.urls){var d,e;d=0;for(e=a.urls.length;d<e;++d)c[b++]=a.urls[d]}a.S=c.join("#")}function Uw(a){var b=0,c=[],d;for(d in a.i)c[b++]=d+"-"+a.i[d];return c.join("/")}
k.Fc=function(a,b,c){var d=this.tileGrid;d||(d=this.Ib(c));if(!(d.b.length<=a[0])){1==b||this.Y&&void 0!==this.A||(b=1);var e=d.La(a[0]),f=d.Ta(a,this.ea),d=Ga(d.fb(a[0]),this.j),g=this.u;g&&(d=Ea(d,g,this.j),f=Ka(f,e*g,f));1!=b&&(d=Fa(d,b,this.j));e={SERVICE:"WMS",VERSION:"1.3.0",REQUEST:"GetMap",FORMAT:"image/png",TRANSPARENT:!0};pb(e,this.i);return Vw(this,a,d,f,b,c,e)}};k.cb=function(a){W.prototype.cb.call(this,a);Sw(this)};k.Vn=function(a){pb(this.i,a);Sw(this);Tw(this);Yv(this,Uw(this))};
function Tw(a){a.o=0<=Pe(a.i.VERSION||"1.3.0")};function Ww(a,b,c,d,e){vs.call(this,a,b);this.c=Xc();this.j=d;this.g=null;this.f={Ld:!1,wg:null,af:-1,xg:-1,vd:null};this.I=e;this.o=c}u(Ww,vs);k=Ww.prototype;k.Z=function(){return-1==this.f.xg?null:this.c.canvas};k.rm=function(){return this.j};k.ib=function(){return this.o};k.load=function(){0==this.state&&(this.state=1,this.s(),this.I(this,this.o),this.v(null,NaN,null))};k.po=function(a,b){this.Xf(b);this.Hi(a)};k.oo=function(){this.state=3;this.s()};k.Hi=function(a){this.g=a;this.state=2;this.s()};
k.Xf=function(a){this.l=a};k.Mi=function(a){this.v=a};function Xw(a,b){a.Mi(Al(b,a.j,a.po.bind(a),a.oo.bind(a)))};function Yw(a){aw.call(this,{attributions:a.attributions,cacheSize:void 0!==a.cacheSize?a.cacheSize:128,extent:a.extent,logo:a.logo,opaque:!1,projection:a.projection,state:a.state,tileGrid:a.tileGrid,tileLoadFunction:a.tileLoadFunction?a.tileLoadFunction:Xw,tileUrlFunction:a.tileUrlFunction,tilePixelRatio:a.tilePixelRatio,url:a.url,urls:a.urls,wrapX:void 0===a.wrapX?!0:a.wrapX});this.i=a.format?a.format:null;this.g=void 0==a.overlaps?!0:a.overlaps;this.tileClass=a.tileClass?a.tileClass:Ww}u(Yw,aw);
Yw.prototype.Lc=function(a,b,c,d,e){var f=this.Sb(a,b,c);if(this.a.b.hasOwnProperty(f))return this.a.get(f);a=[a,b,c];d=(b=Zv(this,a,e))?this.tileUrlFunction(b,d,e):void 0;d=new this.tileClass(a,void 0!==d?0:4,void 0!==d?d:"",this.i,this.tileLoadFunction);B(d,"change",this.gi,this);this.a.set(f,d);return d};Yw.prototype.pb=function(a){return void 0==a?aw.prototype.pb.call(this,a):a};Yw.prototype.Sd=function(a,b){var c=Ga(this.tileGrid.fb(a));return[Math.round(c[0]*b),Math.round(c[1]*b)]};function Zw(a){this.j=a.matrixIds;$b.call(this,{extent:a.extent,origin:a.origin,origins:a.origins,resolutions:a.resolutions,tileSize:a.tileSize,tileSizes:a.tileSizes,sizes:a.sizes})}u(Zw,$b);Zw.prototype.o=function(){return this.j};
function $w(a,b,c){var d=[],e=[],f=[],g=[],h=[],l=void 0!==c?c:[];c=Gb(a.SupportedCRS.replace(/urn:ogc:def:crs:(\w+):(.*:)?(\w+)$/,"$1:$3"));var m=c.sc(),p="ne"==c.b.substr(0,2);a.TileMatrix.sort(function(a,b){return b.ScaleDenominator-a.ScaleDenominator});a.TileMatrix.forEach(function(a){var b;0<l.length?b=ha(l,function(b){return a.Identifier==b.TileMatrix}):b=!0;if(b){e.push(a.Identifier);b=2.8E-4*a.ScaleDenominator/m;var c=a.TileWidth,n=a.TileHeight;p?f.push([a.TopLeftCorner[1],a.TopLeftCorner[0]]):
f.push(a.TopLeftCorner);d.push(b);g.push(c==n?c:[c,n]);h.push([a.MatrixWidth,-a.MatrixHeight])}});return new Zw({extent:b,origins:f,resolutions:d,matrixIds:e,tileSizes:g,sizes:h})};function Y(a){function b(a){a="KVP"==d?mw(a,f):a.replace(/\{(\w+?)\}/g,function(a,b){return b.toLowerCase()in f?f[b.toLowerCase()]:a});return function(b){if(b){var c={TileMatrix:e.j[b[0]],TileCol:b[1],TileRow:-b[2]-1};pb(c,g);b=a;return b="KVP"==d?mw(b,c):b.replace(/\{(\w+?)\}/g,function(a,b){return c[b]})}}}this.ea=void 0!==a.version?a.version:"1.0.0";this.u=void 0!==a.format?a.format:"image/jpeg";this.i=a.dimensions?a.dimensions:{};this.A=a.layer;this.o=a.matrixSet;this.S=a.style;var c=a.urls;void 0===
c&&void 0!==a.url&&(c=Uv(a.url));var d=this.Y=void 0!==a.requestEncoding?a.requestEncoding:"KVP",e=a.tileGrid,f={layer:this.A,style:this.S,tilematrixset:this.o};"KVP"==d&&pb(f,{Service:"WMTS",Request:"GetTile",Version:this.ea,Format:this.u});var g=this.i,h=c&&0<c.length?Sv(c.map(b)):Tv;W.call(this,{attributions:a.attributions,cacheSize:a.cacheSize,crossOrigin:a.crossOrigin,logo:a.logo,projection:a.projection,reprojectionErrorThreshold:a.reprojectionErrorThreshold,tileClass:a.tileClass,tileGrid:e,
tileLoadFunction:a.tileLoadFunction,tilePixelRatio:a.tilePixelRatio,tileUrlFunction:h,urls:c,wrapX:void 0!==a.wrapX?a.wrapX:!1});Yv(this,ax(this))}u(Y,W);k=Y.prototype;k.rk=function(){return this.i};k.Wn=function(){return this.u};k.Xn=function(){return this.A};k.Fk=function(){return this.o};k.Qk=function(){return this.Y};k.Yn=function(){return this.S};k.Xk=function(){return this.ea};function ax(a){var b=0,c=[],d;for(d in a.i)c[b++]=d+"-"+a.i[d];return c.join("/")}
k.Gp=function(a){pb(this.i,a);Yv(this,ax(this))};function bx(a){a=a||{};var b=a.size,c=b[0],d=b[1],e=[],f=256;switch(void 0!==a.tierSizeCalculation?a.tierSizeCalculation:cx){case cx:for(;c>f||d>f;)e.push([Math.ceil(c/f),Math.ceil(d/f)]),f+=f;break;case dx:for(;c>f||d>f;)e.push([Math.ceil(c/f),Math.ceil(d/f)]),c>>=1,d>>=1;break;default:qa(!1,53)}e.push([1,1]);e.reverse();for(var f=[1],g=[0],d=1,c=e.length;d<c;d++)f.push(1<<d),g.push(e[d-1][0]*e[d-1][1]+g[d-1]);f.reverse();b=[0,-b[1],b[0],0];b=new $b({extent:b,origin:eb(b),resolutions:f});(f=a.url)&&
-1==f.indexOf("{TileGroup}")&&(f+="{TileGroup}/{z}-{x}-{y}.jpg");f=Uv(f);f=Sv(f.map(function(a){return function(b){if(b){var c=b[0],d=b[1];b=-b[2]-1;var f={z:c,x:d,y:b,TileGroup:"TileGroup"+((d+b*e[c][0]+g[c])/256|0)};return a.replace(/\{(\w+?)\}/g,function(a,b){return f[b]})}}}));W.call(this,{attributions:a.attributions,cacheSize:a.cacheSize,crossOrigin:a.crossOrigin,logo:a.logo,projection:a.projection,reprojectionErrorThreshold:a.reprojectionErrorThreshold,tileClass:ex,tileGrid:b,tileUrlFunction:f})}
u(bx,W);function ex(a,b,c,d,e){xs.call(this,a,b,c,d,e);this.f=null}u(ex,xs);ex.prototype.Z=function(){if(this.f)return this.f;var a=xs.prototype.Z.call(this);if(2==this.state){if(256==a.width&&256==a.height)return this.f=a;var b=Xc(256,256);b.drawImage(a,0,0);return this.f=b.canvas}return a};var cx="default",dx="truncated";function fx(a,b){this.b=b;this.a=[{x:0,y:0,width:a,height:a}];this.c={};this.f=Xc(a,a);this.i=this.f.canvas}fx.prototype.get=function(a){return this.c[a]||null};
fx.prototype.add=function(a,b,c,d,e){var f,g,h;g=0;for(h=this.a.length;g<h;++g)if(f=this.a[g],f.width>=b+this.b&&f.height>=c+this.b)return h={offsetX:f.x+this.b,offsetY:f.y+this.b,image:this.i},this.c[a]=h,d.call(e,this.f,f.x+this.b,f.y+this.b),a=g,b+=this.b,d=c+this.b,f.width-b>f.height-d?(c={x:f.x+b,y:f.y,width:f.width-b,height:f.height},b={x:f.x,y:f.y+d,width:b,height:f.height-d},gx(this,a,c,b)):(c={x:f.x+b,y:f.y,width:f.width-b,height:d},b={x:f.x,y:f.y+d,width:f.width,height:f.height-d},gx(this,
a,c,b)),h;return null};function gx(a,b,c,d){b=[b,1];0<c.width&&0<c.height&&b.push(c);0<d.width&&0<d.height&&b.push(d);a.a.splice.apply(a.a,b)};function hx(a){a=a||{};this.a=void 0!==a.initialSize?a.initialSize:256;this.f=void 0!==a.maxSize?a.maxSize:void 0!==ba?ba:2048;this.b=void 0!==a.space?a.space:1;this.i=[new fx(this.a,this.b)];this.c=this.a;this.g=[new fx(this.c,this.b)]}hx.prototype.add=function(a,b,c,d,e,f){if(b+this.b>this.f||c+this.b>this.f)return null;d=ix(this,!1,a,b,c,d,f);if(!d)return null;a=ix(this,!0,a,b,c,e?e:na,f);return{offsetX:d.offsetX,offsetY:d.offsetY,image:d.image,Fl:a.image}};
function ix(a,b,c,d,e,f,g){var h=b?a.g:a.i,l,m,p;m=0;for(p=h.length;m<p;++m){l=h[m];if(l=l.add(c,d,e,f,g))return l;l||m!==p-1||(b?(l=Math.min(2*a.c,a.f),a.c=l):(l=Math.min(2*a.a,a.f),a.a=l),l=new fx(l,a.b),h.push(l),++p)}return null};pa.prototype.code=pa.prototype.code;t("ol.Attribution",nc);nc.prototype.getHTML=nc.prototype.f;t("ol.Collection",D);D.prototype.clear=D.prototype.clear;D.prototype.extend=D.prototype.Tf;D.prototype.forEach=D.prototype.forEach;D.prototype.getArray=D.prototype.am;D.prototype.item=D.prototype.item;D.prototype.getLength=D.prototype.ec;D.prototype.insertAt=D.prototype.Be;D.prototype.pop=D.prototype.pop;D.prototype.push=D.prototype.push;D.prototype.remove=D.prototype.remove;D.prototype.removeAt=D.prototype.tg;
D.prototype.setAt=D.prototype.mp;Nc.prototype.element=Nc.prototype.element;t("ol.color.asArray",Qc);t("ol.color.asString",Sc);t("ol.colorlike.asColorLike",Vc);t("ol.control.defaults",nd);t("ol.coordinate.add",Qe);t("ol.coordinate.createStringXY",function(a){return function(b){return $e(b,a)}});t("ol.coordinate.format",Te);t("ol.coordinate.rotate",Ve);t("ol.coordinate.toStringHDMS",function(a,b){return a?Se(a[1],"NS",b)+" "+Se(a[0],"EW",b):""});t("ol.coordinate.toStringXY",$e);
t("ol.DeviceOrientation",Pk);Pk.prototype.getAlpha=Pk.prototype.jk;Pk.prototype.getBeta=Pk.prototype.mk;Pk.prototype.getGamma=Pk.prototype.uk;Pk.prototype.getHeading=Pk.prototype.bm;Pk.prototype.getTracking=Pk.prototype.Fh;Pk.prototype.setTracking=Pk.prototype.Uf;t("ol.easing.easeIn",ed);t("ol.easing.easeOut",fd);t("ol.easing.inAndOut",gd);t("ol.easing.linear",hd);t("ol.easing.upAndDown",function(a){return.5>a?gd(2*a):1-gd(2*(a-.5))});t("ol.extent.boundingExtent",Ha);t("ol.extent.buffer",Ka);
t("ol.extent.containsCoordinate",Qa);t("ol.extent.containsExtent",Ta);t("ol.extent.containsXY",Sa);t("ol.extent.createEmpty",Ia);t("ol.extent.equals",Za);t("ol.extent.extend",$a);t("ol.extent.getBottomLeft",bb);t("ol.extent.getBottomRight",cb);t("ol.extent.getCenter",jb);t("ol.extent.getHeight",ib);t("ol.extent.getIntersection",lb);t("ol.extent.getSize",function(a){return[a[2]-a[0],a[3]-a[1]]});t("ol.extent.getTopLeft",eb);t("ol.extent.getTopRight",db);t("ol.extent.getWidth",hb);
t("ol.extent.intersects",mb);t("ol.extent.isEmpty",gb);t("ol.extent.applyTransform",ob);t("ol.Feature",H);H.prototype.clone=H.prototype.clone;H.prototype.getGeometry=H.prototype.U;H.prototype.getId=H.prototype.dm;H.prototype.getGeometryName=H.prototype.wk;H.prototype.getStyle=H.prototype.em;H.prototype.getStyleFunction=H.prototype.Nc;H.prototype.setGeometry=H.prototype.Sa;H.prototype.setStyle=H.prototype.Vf;H.prototype.setId=H.prototype.kc;H.prototype.setGeometryName=H.prototype.Vc;
t("ol.featureloader.xhr",Bl);t("ol.Geolocation",hs);hs.prototype.getAccuracy=hs.prototype.hk;hs.prototype.getAccuracyGeometry=hs.prototype.ik;hs.prototype.getAltitude=hs.prototype.kk;hs.prototype.getAltitudeAccuracy=hs.prototype.lk;hs.prototype.getHeading=hs.prototype.fm;hs.prototype.getPosition=hs.prototype.gm;hs.prototype.getProjection=hs.prototype.Gh;hs.prototype.getSpeed=hs.prototype.Rk;hs.prototype.getTracking=hs.prototype.Hh;hs.prototype.getTrackingOptions=hs.prototype.th;
hs.prototype.setProjection=hs.prototype.Ih;hs.prototype.setTracking=hs.prototype.Ee;hs.prototype.setTrackingOptions=hs.prototype.Si;t("ol.Graticule",ns);ns.prototype.getMap=ns.prototype.jm;ns.prototype.getMeridians=ns.prototype.Gk;ns.prototype.getParallels=ns.prototype.Nk;ns.prototype.setMap=ns.prototype.setMap;t("ol.has.DEVICE_PIXEL_RATIO",Kd);t("ol.has.CANVAS",Md);t("ol.has.DEVICE_ORIENTATION",Nd);t("ol.has.GEOLOCATION",Od);t("ol.has.TOUCH",Pd);t("ol.has.WEBGL",Ed);ts.prototype.getImage=ts.prototype.Z;
ts.prototype.load=ts.prototype.load;xs.prototype.getImage=xs.prototype.Z;t("ol.inherits",u);t("ol.interaction.defaults",ch);t("ol.Kinetic",Zf);t("ol.loadingstrategy.all",Ft);t("ol.loadingstrategy.bbox",function(a){return[a]});t("ol.loadingstrategy.tile",function(a){return function(b,c){var d=a.Mc(c),e=cc(a,b,d),f=[],d=[d,0,0];for(d[1]=e.da;d[1]<=e.ba;++d[1])for(d[2]=e.fa;d[2]<=e.ja;++d[2])f.push(a.Ta(d));return f}});t("ol.Map",G);G.prototype.addControl=G.prototype.Rj;G.prototype.addInteraction=G.prototype.Sj;
G.prototype.addLayer=G.prototype.Sg;G.prototype.addOverlay=G.prototype.Tg;G.prototype.forEachFeatureAtPixel=G.prototype.re;G.prototype.forEachLayerAtPixel=G.prototype.pm;G.prototype.hasFeatureAtPixel=G.prototype.El;G.prototype.getEventCoordinate=G.prototype.sk;G.prototype.getEventPixel=G.prototype.te;G.prototype.getTarget=G.prototype.Of;G.prototype.getTargetElement=G.prototype.Kc;G.prototype.getCoordinateFromPixel=G.prototype.Za;G.prototype.getControls=G.prototype.qk;G.prototype.getOverlays=G.prototype.Lk;
G.prototype.getOverlayById=G.prototype.Kk;G.prototype.getInteractions=G.prototype.xk;G.prototype.getLayerGroup=G.prototype.Jc;G.prototype.getLayers=G.prototype.Jh;G.prototype.getPixelFromCoordinate=G.prototype.Ka;G.prototype.getSize=G.prototype.Mb;G.prototype.getView=G.prototype.$;G.prototype.getViewport=G.prototype.Yk;G.prototype.renderSync=G.prototype.ip;G.prototype.render=G.prototype.render;G.prototype.removeControl=G.prototype.ap;G.prototype.removeInteraction=G.prototype.bp;
G.prototype.removeLayer=G.prototype.ep;G.prototype.removeOverlay=G.prototype.fp;G.prototype.setLayerGroup=G.prototype.Li;G.prototype.setSize=G.prototype.Ag;G.prototype.setTarget=G.prototype.Fe;G.prototype.setView=G.prototype.vp;G.prototype.updateSize=G.prototype.xd;zd.prototype.originalEvent=zd.prototype.originalEvent;zd.prototype.pixel=zd.prototype.pixel;zd.prototype.coordinate=zd.prototype.coordinate;zd.prototype.dragging=zd.prototype.dragging;yd.prototype.map=yd.prototype.map;
yd.prototype.frameState=yd.prototype.frameState;t("ol.Object",Gc);Gc.prototype.get=Gc.prototype.get;Gc.prototype.getKeys=Gc.prototype.O;Gc.prototype.getProperties=Gc.prototype.N;Gc.prototype.set=Gc.prototype.set;Gc.prototype.setProperties=Gc.prototype.H;Gc.prototype.unset=Gc.prototype.P;Kc.prototype.key=Kc.prototype.key;Kc.prototype.oldValue=Kc.prototype.oldValue;t("ol.Observable",Fc);t("ol.Observable.unByKey",function(a){if(Array.isArray(a))for(var b=0,c=a.length;b<c;++b)rc(a[b]);else rc(a)});
Fc.prototype.changed=Fc.prototype.s;Fc.prototype.dispatchEvent=Fc.prototype.b;Fc.prototype.getRevision=Fc.prototype.L;Fc.prototype.on=Fc.prototype.J;Fc.prototype.once=Fc.prototype.once;Fc.prototype.un=Fc.prototype.K;t("ol.Overlay",qk);qk.prototype.getElement=qk.prototype.se;qk.prototype.getId=qk.prototype.qm;qk.prototype.getMap=qk.prototype.Ge;qk.prototype.getOffset=qk.prototype.qh;qk.prototype.getPosition=qk.prototype.Kh;qk.prototype.getPositioning=qk.prototype.rh;qk.prototype.setElement=qk.prototype.Gi;
qk.prototype.setMap=qk.prototype.setMap;qk.prototype.setOffset=qk.prototype.Ni;qk.prototype.setPosition=qk.prototype.Wf;qk.prototype.setPositioning=qk.prototype.Qi;t("ol.proj.METERS_PER_UNIT",vb);t("ol.proj.setProj4",function(a){wb=a});t("ol.proj.getPointResolution",Eb);t("ol.proj.addEquivalentProjections",Hb);t("ol.proj.addProjection",Pb);t("ol.proj.addCoordinateTransforms",Rb);t("ol.proj.fromLonLat",function(a,b){return Wb(a,"EPSG:4326",void 0!==b?b:"EPSG:3857")});
t("ol.proj.toLonLat",function(a,b){return Wb(a,void 0!==b?b:"EPSG:3857","EPSG:4326")});t("ol.proj.get",Gb);t("ol.proj.equivalent",Tb);t("ol.proj.getTransform",Ub);t("ol.proj.transform",Wb);t("ol.proj.transformExtent",Xb);t("ol.render.toContext",function(a,b){var c=a.canvas,d=b?b:{},e=d.pixelRatio||Kd;if(d=d.size)c.width=d[0]*e,c.height=d[1]*e,c.style.width=d[0]+"px",c.style.height=d[1]+"px";c=[0,0,c.width,c.height];d=Dh(wh(),e,e);return new Sh(a,e,c,d,0)});t("ol.size.toSize",Ga);t("ol.Sphere",tb);
tb.prototype.geodesicArea=tb.prototype.a;tb.prototype.haversineDistance=tb.prototype.b;vs.prototype.getTileCoord=vs.prototype.i;vs.prototype.load=vs.prototype.load;t("ol.tilegrid.createXYZ",mc);Ww.prototype.getFormat=Ww.prototype.rm;Ww.prototype.setFeatures=Ww.prototype.Hi;Ww.prototype.setProjection=Ww.prototype.Xf;Ww.prototype.setLoader=Ww.prototype.Mi;t("ol.View",Qf);Qf.prototype.animate=Qf.prototype.animate;Qf.prototype.constrainCenter=Qf.prototype.Ec;Qf.prototype.constrainResolution=Qf.prototype.constrainResolution;
Qf.prototype.constrainRotation=Qf.prototype.constrainRotation;Qf.prototype.getCenter=Qf.prototype.Ba;Qf.prototype.calculateExtent=Qf.prototype.ed;Qf.prototype.getMaxResolution=Qf.prototype.sm;Qf.prototype.getMinResolution=Qf.prototype.tm;Qf.prototype.getProjection=Qf.prototype.um;Qf.prototype.getResolution=Qf.prototype.Ua;Qf.prototype.getResolutions=Qf.prototype.vm;Qf.prototype.getRotation=Qf.prototype.Va;Qf.prototype.getZoom=Qf.prototype.$k;Qf.prototype.fit=Qf.prototype.Ff;
Qf.prototype.centerOn=Qf.prototype.$j;Qf.prototype.rotate=Qf.prototype.rotate;Qf.prototype.setCenter=Qf.prototype.wb;Qf.prototype.setResolution=Qf.prototype.Xc;Qf.prototype.setRotation=Qf.prototype.He;Qf.prototype.setZoom=Qf.prototype.yp;t("ol.xml.getAllTextContent",jl);t("ol.xml.parse",nl);Ji.prototype.getGL=Ji.prototype.lo;Ji.prototype.useProgram=Ji.prototype.Rc;t("ol.tilegrid.TileGrid",$b);$b.prototype.forEachTileCoord=$b.prototype.eh;$b.prototype.getMaxZoom=$b.prototype.oh;
$b.prototype.getMinZoom=$b.prototype.ph;$b.prototype.getOrigin=$b.prototype.Qc;$b.prototype.getResolution=$b.prototype.La;$b.prototype.getResolutions=$b.prototype.oi;$b.prototype.getTileCoordExtent=$b.prototype.Ta;$b.prototype.getTileCoordForCoordAndResolution=$b.prototype.we;$b.prototype.getTileCoordForCoordAndZ=$b.prototype.Pf;$b.prototype.getTileSize=$b.prototype.fb;$b.prototype.getZForResolution=$b.prototype.Mc;t("ol.tilegrid.WMTS",Zw);Zw.prototype.getMatrixIds=Zw.prototype.o;
t("ol.tilegrid.WMTS.createFromCapabilitiesMatrixSet",$w);t("ol.style.AtlasManager",hx);t("ol.style.Circle",Yk);Yk.prototype.setRadius=Yk.prototype.Wc;t("ol.style.Fill",Zk);Zk.prototype.clone=Zk.prototype.clone;Zk.prototype.getColor=Zk.prototype.f;Zk.prototype.setColor=Zk.prototype.c;t("ol.style.Icon",Rn);Rn.prototype.clone=Rn.prototype.clone;Rn.prototype.getAnchor=Rn.prototype.Hc;Rn.prototype.getColor=Rn.prototype.Zn;Rn.prototype.getImage=Rn.prototype.Z;Rn.prototype.getOrigin=Rn.prototype.Pc;
Rn.prototype.getSrc=Rn.prototype.$n;Rn.prototype.getSize=Rn.prototype.jc;Rn.prototype.load=Rn.prototype.load;t("ol.style.Image",Vk);Vk.prototype.getOpacity=Vk.prototype.Pe;Vk.prototype.getRotateWithView=Vk.prototype.Qe;Vk.prototype.getRotation=Vk.prototype.Re;Vk.prototype.getScale=Vk.prototype.Se;Vk.prototype.getSnapToPixel=Vk.prototype.ve;Vk.prototype.setOpacity=Vk.prototype.rd;Vk.prototype.setRotation=Vk.prototype.Te;Vk.prototype.setScale=Vk.prototype.sd;t("ol.style.RegularShape",Wk);
Wk.prototype.clone=Wk.prototype.clone;Wk.prototype.getAnchor=Wk.prototype.Hc;Wk.prototype.getAngle=Wk.prototype.ki;Wk.prototype.getFill=Wk.prototype.Ca;Wk.prototype.getImage=Wk.prototype.Z;Wk.prototype.getOrigin=Wk.prototype.Pc;Wk.prototype.getPoints=Wk.prototype.li;Wk.prototype.getRadius=Wk.prototype.mi;Wk.prototype.getRadius2=Wk.prototype.sh;Wk.prototype.getSize=Wk.prototype.jc;Wk.prototype.getStroke=Wk.prototype.Da;t("ol.style.Stroke",rj);rj.prototype.clone=rj.prototype.clone;
rj.prototype.getColor=rj.prototype.ao;rj.prototype.getLineCap=rj.prototype.Ak;rj.prototype.getLineDash=rj.prototype.bo;rj.prototype.getLineDashOffset=rj.prototype.Bk;rj.prototype.getLineJoin=rj.prototype.Ck;rj.prototype.getMiterLimit=rj.prototype.Hk;rj.prototype.getWidth=rj.prototype.co;rj.prototype.setColor=rj.prototype.eo;rj.prototype.setLineCap=rj.prototype.qp;rj.prototype.setLineDash=rj.prototype.setLineDash;rj.prototype.setLineDashOffset=rj.prototype.rp;rj.prototype.setLineJoin=rj.prototype.sp;
rj.prototype.setMiterLimit=rj.prototype.tp;rj.prototype.setWidth=rj.prototype.wp;t("ol.style.Style",$k);$k.prototype.clone=$k.prototype.clone;$k.prototype.getGeometry=$k.prototype.U;$k.prototype.getGeometryFunction=$k.prototype.vk;$k.prototype.getFill=$k.prototype.Ca;$k.prototype.setFill=$k.prototype.cf;$k.prototype.getImage=$k.prototype.Z;$k.prototype.setImage=$k.prototype.zg;$k.prototype.getStroke=$k.prototype.Da;$k.prototype.setStroke=$k.prototype.df;$k.prototype.getText=$k.prototype.Pa;
$k.prototype.setText=$k.prototype.ef;$k.prototype.getZIndex=$k.prototype.za;$k.prototype.setGeometry=$k.prototype.Sa;$k.prototype.setZIndex=$k.prototype.Wb;t("ol.style.Text",Sn);Sn.prototype.clone=Sn.prototype.clone;Sn.prototype.getFont=Sn.prototype.tk;Sn.prototype.getOffsetX=Sn.prototype.Ik;Sn.prototype.getOffsetY=Sn.prototype.Jk;Sn.prototype.getFill=Sn.prototype.Ca;Sn.prototype.getRotateWithView=Sn.prototype.fo;Sn.prototype.getRotation=Sn.prototype.ho;Sn.prototype.getScale=Sn.prototype.io;
Sn.prototype.getStroke=Sn.prototype.Da;Sn.prototype.getText=Sn.prototype.Pa;Sn.prototype.getTextAlign=Sn.prototype.Tk;Sn.prototype.getTextBaseline=Sn.prototype.Uk;Sn.prototype.setFont=Sn.prototype.Ii;Sn.prototype.setOffsetX=Sn.prototype.Oi;Sn.prototype.setOffsetY=Sn.prototype.Pi;Sn.prototype.setFill=Sn.prototype.cf;Sn.prototype.setRotation=Sn.prototype.jo;Sn.prototype.setScale=Sn.prototype.ni;Sn.prototype.setStroke=Sn.prototype.df;Sn.prototype.setText=Sn.prototype.ef;Sn.prototype.setTextAlign=Sn.prototype.Ri;
Sn.prototype.setTextBaseline=Sn.prototype.up;t("ol.source.BingMaps",ew);t("ol.source.BingMaps.TOS_ATTRIBUTION",fw);ew.prototype.getApiKey=ew.prototype.Y;ew.prototype.getImagerySet=ew.prototype.ea;t("ol.source.CartoDB",hw);hw.prototype.getConfig=hw.prototype.pk;hw.prototype.updateConfig=hw.prototype.Fp;hw.prototype.setConfig=hw.prototype.np;t("ol.source.Cluster",X);X.prototype.getSource=X.prototype.lb;X.prototype.setDistance=X.prototype.mb;t("ol.source.Image",lv);nv.prototype.image=nv.prototype.image;
t("ol.source.ImageArcGISRest",nw);nw.prototype.getParams=nw.prototype.rn;nw.prototype.getImageLoadFunction=nw.prototype.qn;nw.prototype.getUrl=nw.prototype.sn;nw.prototype.setImageLoadFunction=nw.prototype.tn;nw.prototype.setUrl=nw.prototype.vn;nw.prototype.updateParams=nw.prototype.wn;t("ol.source.ImageCanvas",sv);t("ol.source.ImageMapGuide",ow);ow.prototype.getParams=ow.prototype.yn;ow.prototype.getImageLoadFunction=ow.prototype.xn;ow.prototype.updateParams=ow.prototype.An;
ow.prototype.setImageLoadFunction=ow.prototype.zn;t("ol.source.ImageStatic",pw);t("ol.source.ImageVector",tv);tv.prototype.getSource=tv.prototype.Bn;tv.prototype.getStyle=tv.prototype.Cn;tv.prototype.getStyleFunction=tv.prototype.Dn;tv.prototype.setStyle=tv.prototype.ci;t("ol.source.ImageWMS",qw);qw.prototype.getGetFeatureInfoUrl=qw.prototype.Gn;qw.prototype.getParams=qw.prototype.In;qw.prototype.getImageLoadFunction=qw.prototype.Hn;qw.prototype.getUrl=qw.prototype.Jn;
qw.prototype.setImageLoadFunction=qw.prototype.Kn;qw.prototype.setUrl=qw.prototype.Ln;qw.prototype.updateParams=qw.prototype.Mn;t("ol.source.OSM",uw);t("ol.source.OSM.ATTRIBUTION",vw);t("ol.source.Raster",ww);ww.prototype.setOperation=ww.prototype.A;Bw.prototype.extent=Bw.prototype.extent;Bw.prototype.resolution=Bw.prototype.resolution;Bw.prototype.data=Bw.prototype.data;t("ol.source.Source",Gt);Gt.prototype.getAttributions=Gt.prototype.xa;Gt.prototype.getLogo=Gt.prototype.wa;
Gt.prototype.getProjection=Gt.prototype.ya;Gt.prototype.getState=Gt.prototype.V;Gt.prototype.refresh=Gt.prototype.va;Gt.prototype.setAttributions=Gt.prototype.ua;t("ol.source.Stamen",Ew);t("ol.source.Tile",Xv);Xv.prototype.getTileGrid=Xv.prototype.ab;$v.prototype.tile=$v.prototype.tile;t("ol.source.TileArcGISRest",Iw);Iw.prototype.getParams=Iw.prototype.u;Iw.prototype.updateParams=Iw.prototype.A;t("ol.source.TileDebug",Kw);t("ol.source.TileImage",W);W.prototype.setRenderReprojectionEdges=W.prototype.Nb;
W.prototype.setTileGridForProjection=W.prototype.Ob;t("ol.source.TileJSON",Mw);Mw.prototype.getTileJSON=Mw.prototype.Vk;t("ol.source.TileUTFGrid",Nw);Nw.prototype.getTemplate=Nw.prototype.Sk;Nw.prototype.forDataAtCoordinateAndResolution=Nw.prototype.dk;t("ol.source.TileWMS",Rw);Rw.prototype.getGetFeatureInfoUrl=Rw.prototype.Tn;Rw.prototype.getParams=Rw.prototype.Un;Rw.prototype.updateParams=Rw.prototype.Vn;aw.prototype.getTileLoadFunction=aw.prototype.ob;aw.prototype.getTileUrlFunction=aw.prototype.qb;
aw.prototype.getUrls=aw.prototype.rb;aw.prototype.setTileLoadFunction=aw.prototype.xb;aw.prototype.setTileUrlFunction=aw.prototype.bb;aw.prototype.setUrl=aw.prototype.jb;aw.prototype.setUrls=aw.prototype.cb;t("ol.source.Vector",S);S.prototype.addFeature=S.prototype.zb;S.prototype.addFeatures=S.prototype.dd;S.prototype.clear=S.prototype.clear;S.prototype.forEachFeature=S.prototype.bh;S.prototype.forEachFeatureInExtent=S.prototype.ac;S.prototype.forEachFeatureIntersectingExtent=S.prototype.dh;
S.prototype.getFeaturesCollection=S.prototype.lh;S.prototype.getFeatures=S.prototype.Ne;S.prototype.getFeaturesAtCoordinate=S.prototype.kh;S.prototype.getFeaturesInExtent=S.prototype.Hf;S.prototype.getClosestFeatureToCoordinate=S.prototype.gh;S.prototype.getExtent=S.prototype.D;S.prototype.getFeatureById=S.prototype.jh;S.prototype.getFormat=S.prototype.hi;S.prototype.getUrl=S.prototype.ii;S.prototype.removeFeature=S.prototype.Db;Nt.prototype.feature=Nt.prototype.feature;t("ol.source.VectorTile",Yw);
t("ol.source.WMTS",Y);Y.prototype.getDimensions=Y.prototype.rk;Y.prototype.getFormat=Y.prototype.Wn;Y.prototype.getLayer=Y.prototype.Xn;Y.prototype.getMatrixSet=Y.prototype.Fk;Y.prototype.getRequestEncoding=Y.prototype.Qk;Y.prototype.getStyle=Y.prototype.Yn;Y.prototype.getVersion=Y.prototype.Xk;Y.prototype.updateDimensions=Y.prototype.Gp;
t("ol.source.WMTS.optionsFromCapabilities",function(a,b){var c=ha(a.Contents.Layer,function(a){return a.Identifier==b.layer}),d=a.Contents.TileMatrixSet,e,f,g;e=1<c.TileMatrixSetLink.length?"projection"in b?la(c.TileMatrixSetLink,function(a){var c=ha(d,function(b){return b.Identifier==a.TileMatrixSet}).SupportedCRS.replace(/urn:ogc:def:crs:(\w+):(.*:)?(\w+)$/,"$1:$3"),e=Gb(c),f=Gb(b.projection);return e&&f?Tb(e,f):c==b.projection}):la(c.TileMatrixSetLink,function(a){return a.TileMatrixSet==b.matrixSet}):
0;0>e&&(e=0);f=c.TileMatrixSetLink[e].TileMatrixSet;g=c.TileMatrixSetLink[e].TileMatrixSetLimits;var h=c.Format[0];"format"in b&&(h=b.format);e=la(c.Style,function(a){return"style"in b?a.Title==b.style:a.isDefault});0>e&&(e=0);e=c.Style[e].Identifier;var l={};"Dimension"in c&&c.Dimension.forEach(function(a){var b=a.Identifier,c=a.Default;void 0===c&&(c=a.Value[0]);l[b]=c});var m=ha(a.Contents.TileMatrixSet,function(a){return a.Identifier==f}),p;p="projection"in b?Gb(b.projection):Gb(m.SupportedCRS.replace(/urn:ogc:def:crs:(\w+):(.*:)?(\w+)$/,
"$1:$3"));var n=c.WGS84BoundingBox,q,r;void 0!==n&&(r=Gb("EPSG:4326").D(),r=n[0]==r[0]&&n[2]==r[2],q=Xb(n,"EPSG:4326",p),(n=p.D())&&(Ta(n,q)||(q=void 0)));g=$w(m,q,g);var v=[],m=b.requestEncoding,m=void 0!==m?m:"";if("OperationsMetadata"in a&&"GetTile"in a.OperationsMetadata){q=a.OperationsMetadata.GetTile.DCP.HTTP.Get;for(var n=0,x=q.length;n<x;++n){var y=ha(q[n].Constraint,function(a){return"GetEncoding"==a.name}).AllowedValues.Value;""===m&&(m=y[0]);if("KVP"===m)ea(y,"KVP")&&v.push(q[n].href);
else break}}v.length||(m="REST",c.ResourceURL.forEach(function(a){"tile"===a.resourceType&&(h=a.format,v.push(a.template))}));return{urls:v,layer:b.layer,matrixSet:f,format:h,projection:p,requestEncoding:m,tileGrid:g,style:e,dimensions:l,wrapX:r}});t("ol.source.XYZ",gw);t("ol.source.Zoomify",bx);Mh.prototype.vectorContext=Mh.prototype.vectorContext;Mh.prototype.frameState=Mh.prototype.frameState;Mh.prototype.context=Mh.prototype.context;Mh.prototype.glContext=Mh.prototype.glContext;
Yp.prototype.get=Yp.prototype.get;Yp.prototype.getExtent=Yp.prototype.D;Yp.prototype.getGeometry=Yp.prototype.U;Yp.prototype.getProperties=Yp.prototype.mn;Yp.prototype.getType=Yp.prototype.T;t("ol.render.VectorContext",Rh);ik.prototype.setStyle=ik.prototype.pd;ik.prototype.drawGeometry=ik.prototype.mc;ik.prototype.drawFeature=ik.prototype.oe;Sh.prototype.drawCircle=Sh.prototype.$b;Sh.prototype.setStyle=Sh.prototype.pd;Sh.prototype.drawGeometry=Sh.prototype.mc;Sh.prototype.drawFeature=Sh.prototype.oe;
t("ol.proj.common.add",qh);t("ol.proj.Projection",yb);yb.prototype.getCode=yb.prototype.nk;yb.prototype.getExtent=yb.prototype.D;yb.prototype.getUnits=yb.prototype.Jb;yb.prototype.getMetersPerUnit=yb.prototype.sc;yb.prototype.getWorldExtent=yb.prototype.Zk;yb.prototype.isGlobal=yb.prototype.Kl;yb.prototype.setGlobal=yb.prototype.pp;yb.prototype.setExtent=yb.prototype.ln;yb.prototype.setWorldExtent=yb.prototype.xp;yb.prototype.setGetPointResolution=yb.prototype.op;
t("ol.proj.Units.METERS_PER_UNIT",vb);t("ol.layer.Base",dh);dh.prototype.getExtent=dh.prototype.D;dh.prototype.getMaxResolution=dh.prototype.gc;dh.prototype.getMinResolution=dh.prototype.hc;dh.prototype.getOpacity=dh.prototype.ic;dh.prototype.getVisible=dh.prototype.Kb;dh.prototype.getZIndex=dh.prototype.za;dh.prototype.setExtent=dh.prototype.uc;dh.prototype.setMaxResolution=dh.prototype.zc;dh.prototype.setMinResolution=dh.prototype.Ac;dh.prototype.setOpacity=dh.prototype.vc;
dh.prototype.setVisible=dh.prototype.wc;dh.prototype.setZIndex=dh.prototype.Wb;t("ol.layer.Group",fh);fh.prototype.getLayers=fh.prototype.od;fh.prototype.setLayers=fh.prototype.Sh;t("ol.layer.Heatmap",T);T.prototype.getBlur=T.prototype.fh;T.prototype.getGradient=T.prototype.mh;T.prototype.getRadius=T.prototype.Th;T.prototype.setBlur=T.prototype.Ei;T.prototype.setGradient=T.prototype.Ki;T.prototype.setRadius=T.prototype.Wc;t("ol.layer.Image",yv);yv.prototype.getSource=yv.prototype.la;
t("ol.layer.Layer",rh);rh.prototype.getSource=rh.prototype.la;rh.prototype.setMap=rh.prototype.setMap;rh.prototype.setSource=rh.prototype.Yc;t("ol.layer.Tile",Hv);Hv.prototype.getPreload=Hv.prototype.Pd;Hv.prototype.getSource=Hv.prototype.la;Hv.prototype.setPreload=Hv.prototype.Uh;Hv.prototype.getUseInterimTilesOnError=Hv.prototype.Td;Hv.prototype.setUseInterimTilesOnError=Hv.prototype.Vh;t("ol.layer.Vector",R);R.prototype.getSource=R.prototype.la;R.prototype.getStyle=R.prototype.C;
R.prototype.getStyleFunction=R.prototype.G;R.prototype.setStyle=R.prototype.g;t("ol.layer.VectorTile",U);U.prototype.getPreload=U.prototype.Pd;U.prototype.getUseInterimTilesOnError=U.prototype.Td;U.prototype.setPreload=U.prototype.Wh;U.prototype.setUseInterimTilesOnError=U.prototype.Xh;t("ol.interaction.DoubleClickZoom",eg);t("ol.interaction.DoubleClickZoom.handleEvent",fg);t("ol.interaction.DragAndDrop",zs);t("ol.interaction.DragAndDrop.handleEvent",af);Cs.prototype.features=Cs.prototype.features;
Cs.prototype.file=Cs.prototype.file;Cs.prototype.projection=Cs.prototype.projection;t("ol.interaction.DragBox",Dg);Dg.prototype.getGeometry=Dg.prototype.U;Ig.prototype.coordinate=Ig.prototype.coordinate;Ig.prototype.mapBrowserEvent=Ig.prototype.mapBrowserEvent;t("ol.interaction.DragPan",sg);t("ol.interaction.DragRotate",wg);t("ol.interaction.DragRotateAndZoom",Es);t("ol.interaction.DragZoom",Mg);t("ol.interaction.Draw",Qt);t("ol.interaction.Draw.handleEvent",St);Qt.prototype.removeLastPoint=Qt.prototype.cp;
Qt.prototype.finishDrawing=Qt.prototype.Nd;Qt.prototype.extend=Qt.prototype.Om;t("ol.interaction.Draw.createRegularPolygon",function(a,b){return function(c,d){var e=c[0],f=c[1],g=Math.sqrt(Xe(e,f)),h=d?d:Of(new is(e),a);Pf(h,e,g,b?b:Math.atan((f[1]-e[1])/(f[0]-e[0])));return h}});t("ol.interaction.Draw.createBox",function(){return function(a,b){var c=Ha(a),d=b||new F(null);d.pa([[bb(c),cb(c),db(c),eb(c),bb(c)]]);return d}});eu.prototype.feature=eu.prototype.feature;t("ol.interaction.Extent",gu);
gu.prototype.getExtent=gu.prototype.D;gu.prototype.setExtent=gu.prototype.g;ru.prototype.extent_=ru.prototype.b;t("ol.interaction.Interaction",ag);ag.prototype.getActive=ag.prototype.c;ag.prototype.getMap=ag.prototype.i;ag.prototype.setActive=ag.prototype.Ia;t("ol.interaction.KeyboardPan",Ng);t("ol.interaction.KeyboardPan.handleEvent",Og);t("ol.interaction.KeyboardZoom",Pg);t("ol.interaction.KeyboardZoom.handleEvent",Qg);t("ol.interaction.Modify",tu);t("ol.interaction.Modify.handleEvent",wu);
tu.prototype.removePoint=tu.prototype.Ci;Bu.prototype.features=Bu.prototype.features;Bu.prototype.mapBrowserEvent=Bu.prototype.mapBrowserEvent;t("ol.interaction.MouseWheelZoom",Rg);t("ol.interaction.MouseWheelZoom.handleEvent",Sg);Rg.prototype.setMouseAnchor=Rg.prototype.S;t("ol.interaction.PinchRotate",Vg);t("ol.interaction.PinchZoom",Zg);t("ol.interaction.Pointer",pg);t("ol.interaction.Pointer.handleEvent",qg);t("ol.interaction.Select",Ju);Ju.prototype.getFeatures=Ju.prototype.Ym;
Ju.prototype.getHitTolerance=Ju.prototype.Zm;Ju.prototype.getLayer=Ju.prototype.$m;t("ol.interaction.Select.handleEvent",Ku);Ju.prototype.setHitTolerance=Ju.prototype.bn;Ju.prototype.setMap=Ju.prototype.setMap;Mu.prototype.selected=Mu.prototype.selected;Mu.prototype.deselected=Mu.prototype.deselected;Mu.prototype.mapBrowserEvent=Mu.prototype.mapBrowserEvent;t("ol.interaction.Snap",Ou);Ou.prototype.addFeature=Ou.prototype.zb;Ou.prototype.removeFeature=Ou.prototype.Db;t("ol.interaction.Translate",Su);
Su.prototype.getHitTolerance=Su.prototype.G;Su.prototype.setHitTolerance=Su.prototype.R;Yu.prototype.features=Yu.prototype.features;Yu.prototype.coordinate=Yu.prototype.coordinate;t("ol.geom.Circle",is);is.prototype.clone=is.prototype.clone;is.prototype.getCenter=is.prototype.Ba;is.prototype.getRadius=is.prototype.Vd;is.prototype.getType=is.prototype.T;is.prototype.intersectsExtent=is.prototype.Xa;is.prototype.setCenter=is.prototype.wb;is.prototype.setCenterAndRadius=is.prototype.yg;
is.prototype.setRadius=is.prototype.Wc;is.prototype.transform=is.prototype.tb;t("ol.geom.Geometry",cf);cf.prototype.getClosestPoint=cf.prototype.Ab;cf.prototype.intersectsCoordinate=cf.prototype.sb;cf.prototype.getExtent=cf.prototype.D;cf.prototype.rotate=cf.prototype.rotate;cf.prototype.scale=cf.prototype.scale;cf.prototype.simplify=cf.prototype.Pb;cf.prototype.transform=cf.prototype.tb;t("ol.geom.GeometryCollection",qm);qm.prototype.clone=qm.prototype.clone;qm.prototype.getGeometries=qm.prototype.If;
qm.prototype.getType=qm.prototype.T;qm.prototype.intersectsExtent=qm.prototype.Xa;qm.prototype.setGeometries=qm.prototype.Ji;qm.prototype.applyTransform=qm.prototype.Dc;qm.prototype.translate=qm.prototype.translate;t("ol.geom.LinearRing",yf);yf.prototype.clone=yf.prototype.clone;yf.prototype.getArea=yf.prototype.Km;yf.prototype.getCoordinates=yf.prototype.X;yf.prototype.getType=yf.prototype.T;yf.prototype.setCoordinates=yf.prototype.pa;t("ol.geom.LineString",M);M.prototype.appendCoordinate=M.prototype.Tj;
M.prototype.clone=M.prototype.clone;M.prototype.forEachSegment=M.prototype.gk;M.prototype.getCoordinateAtM=M.prototype.Im;M.prototype.getCoordinates=M.prototype.X;M.prototype.getCoordinateAt=M.prototype.hh;M.prototype.getLength=M.prototype.Jm;M.prototype.getType=M.prototype.T;M.prototype.intersectsExtent=M.prototype.Xa;M.prototype.setCoordinates=M.prototype.pa;t("ol.geom.MultiLineString",N);N.prototype.appendLineString=N.prototype.Uj;N.prototype.clone=N.prototype.clone;
N.prototype.getCoordinateAtM=N.prototype.Lm;N.prototype.getCoordinates=N.prototype.X;N.prototype.getLineString=N.prototype.Dk;N.prototype.getLineStrings=N.prototype.hd;N.prototype.getType=N.prototype.T;N.prototype.intersectsExtent=N.prototype.Xa;N.prototype.setCoordinates=N.prototype.pa;t("ol.geom.MultiPoint",O);O.prototype.appendPoint=O.prototype.Wj;O.prototype.clone=O.prototype.clone;O.prototype.getCoordinates=O.prototype.X;O.prototype.getPoint=O.prototype.Ok;O.prototype.getPoints=O.prototype.Ie;
O.prototype.getType=O.prototype.T;O.prototype.intersectsExtent=O.prototype.Xa;O.prototype.setCoordinates=O.prototype.pa;t("ol.geom.MultiPolygon",P);P.prototype.appendPolygon=P.prototype.Xj;P.prototype.clone=P.prototype.clone;P.prototype.getArea=P.prototype.Mm;P.prototype.getCoordinates=P.prototype.X;P.prototype.getInteriorPoints=P.prototype.zk;P.prototype.getPolygon=P.prototype.Pk;P.prototype.getPolygons=P.prototype.Od;P.prototype.getType=P.prototype.T;P.prototype.intersectsExtent=P.prototype.Xa;
P.prototype.setCoordinates=P.prototype.pa;t("ol.geom.Point",E);E.prototype.clone=E.prototype.clone;E.prototype.getCoordinates=E.prototype.X;E.prototype.getType=E.prototype.T;E.prototype.intersectsExtent=E.prototype.Xa;E.prototype.setCoordinates=E.prototype.pa;t("ol.geom.Polygon",F);F.prototype.appendLinearRing=F.prototype.Vj;F.prototype.clone=F.prototype.clone;F.prototype.getArea=F.prototype.Nm;F.prototype.getCoordinates=F.prototype.X;F.prototype.getInteriorPoint=F.prototype.yk;
F.prototype.getLinearRingCount=F.prototype.Ek;F.prototype.getLinearRing=F.prototype.nh;F.prototype.getLinearRings=F.prototype.jd;F.prototype.getType=F.prototype.T;F.prototype.intersectsExtent=F.prototype.Xa;F.prototype.setCoordinates=F.prototype.pa;t("ol.geom.Polygon.circular",Mf);t("ol.geom.Polygon.fromExtent",Nf);t("ol.geom.Polygon.fromCircle",Of);t("ol.geom.SimpleGeometry",ff);ff.prototype.getFirstCoordinate=ff.prototype.bc;ff.prototype.getLastCoordinate=ff.prototype.cc;
ff.prototype.getLayout=ff.prototype.dc;ff.prototype.applyTransform=ff.prototype.Dc;ff.prototype.translate=ff.prototype.translate;t("ol.format.EsriJSON",Ol);Ol.prototype.readFeature=Ol.prototype.Ub;Ol.prototype.readFeatures=Ol.prototype.Qa;Ol.prototype.readGeometry=Ol.prototype.Tc;Ol.prototype.readProjection=Ol.prototype.kb;Ol.prototype.writeGeometry=Ol.prototype.bd;Ol.prototype.writeGeometryObject=Ol.prototype.ee;Ol.prototype.writeFeature=Ol.prototype.yd;Ol.prototype.writeFeatureObject=Ol.prototype.ad;
Ol.prototype.writeFeatures=Ol.prototype.Xb;Ol.prototype.writeFeaturesObject=Ol.prototype.ce;t("ol.format.Feature",Cl);t("ol.format.filter.and",om);t("ol.format.filter.or",function(a){var b=[null].concat(Array.prototype.slice.call(arguments));return new (Function.prototype.bind.apply(mm,b))});t("ol.format.filter.not",function(a){return new km(a)});t("ol.format.filter.bbox",pm);t("ol.format.filter.intersects",function(a,b,c){return new em(a,b,c)});
t("ol.format.filter.within",function(a,b,c){return new nm(a,b,c)});t("ol.format.filter.equalTo",function(a,b,c){return new am(a,b,c)});t("ol.format.filter.notEqualTo",function(a,b,c){return new lm(a,b,c)});t("ol.format.filter.lessThan",function(a,b){return new im(a,b)});t("ol.format.filter.lessThanOrEqualTo",function(a,b){return new jm(a,b)});t("ol.format.filter.greaterThan",function(a,b){return new bm(a,b)});t("ol.format.filter.greaterThanOrEqualTo",function(a,b){return new cm(a,b)});
t("ol.format.filter.isNull",function(a){return new hm(a)});t("ol.format.filter.between",function(a,b,c){return new fm(a,b,c)});t("ol.format.filter.like",function(a,b,c,d,e,f){return new gm(a,b,c,d,e,f)});t("ol.format.GeoJSON",um);um.prototype.readFeature=um.prototype.Ub;um.prototype.readFeatures=um.prototype.Qa;um.prototype.readGeometry=um.prototype.Tc;um.prototype.readProjection=um.prototype.kb;um.prototype.writeFeature=um.prototype.yd;um.prototype.writeFeatureObject=um.prototype.ad;
um.prototype.writeFeatures=um.prototype.Xb;um.prototype.writeFeaturesObject=um.prototype.ce;um.prototype.writeGeometry=um.prototype.bd;um.prototype.writeGeometryObject=um.prototype.ee;t("ol.format.GML",Pm);Pm.prototype.writeFeatures=Pm.prototype.Xb;Pm.prototype.writeFeaturesNode=Pm.prototype.Yb;t("ol.format.GML2",Ym);t("ol.format.GML3",Pm);Pm.prototype.writeGeometryNode=Pm.prototype.de;Pm.prototype.writeFeatures=Pm.prototype.Xb;Pm.prototype.writeFeaturesNode=Pm.prototype.Yb;
Cm.prototype.readFeatures=Cm.prototype.Qa;t("ol.format.GPX",Zm);Zm.prototype.readFeature=Zm.prototype.Ub;Zm.prototype.readFeatures=Zm.prototype.Qa;Zm.prototype.readProjection=Zm.prototype.kb;Zm.prototype.writeFeatures=Zm.prototype.Xb;Zm.prototype.writeFeaturesNode=Zm.prototype.Yb;t("ol.format.IGC",Kn);Kn.prototype.readFeature=Kn.prototype.Ub;Kn.prototype.readFeatures=Kn.prototype.Qa;Kn.prototype.readProjection=Kn.prototype.kb;t("ol.format.KML",Tn);Tn.prototype.readFeature=Tn.prototype.Ub;
Tn.prototype.readFeatures=Tn.prototype.Qa;Tn.prototype.readName=Tn.prototype.Ro;Tn.prototype.readNetworkLinks=Tn.prototype.So;Tn.prototype.readRegion=Tn.prototype.Vo;Tn.prototype.readRegionFromNode=Tn.prototype.$e;Tn.prototype.readProjection=Tn.prototype.kb;Tn.prototype.writeFeatures=Tn.prototype.Xb;Tn.prototype.writeFeaturesNode=Tn.prototype.Yb;t("ol.format.MVT",Zp);Zp.prototype.readFeatures=Zp.prototype.Qa;Zp.prototype.readProjection=Zp.prototype.kb;Zp.prototype.setLayers=Zp.prototype.Hm;
t("ol.format.OSMXML",aq);aq.prototype.readFeatures=aq.prototype.Qa;aq.prototype.readProjection=aq.prototype.kb;t("ol.format.Polyline",Aq);t("ol.format.Polyline.encodeDeltas",Bq);t("ol.format.Polyline.decodeDeltas",Dq);t("ol.format.Polyline.encodeFloats",Cq);t("ol.format.Polyline.decodeFloats",Eq);Aq.prototype.readFeature=Aq.prototype.Ub;Aq.prototype.readFeatures=Aq.prototype.Qa;Aq.prototype.readGeometry=Aq.prototype.Tc;Aq.prototype.readProjection=Aq.prototype.kb;Aq.prototype.writeGeometry=Aq.prototype.bd;
t("ol.format.TopoJSON",Fq);Fq.prototype.readFeatures=Fq.prototype.Qa;Fq.prototype.readProjection=Fq.prototype.kb;t("ol.format.WFS",Lq);Lq.prototype.readFeatures=Lq.prototype.Qa;Lq.prototype.readTransactionResponse=Lq.prototype.j;Lq.prototype.readFeatureCollectionMetadata=Lq.prototype.l;Lq.prototype.writeGetFeature=Lq.prototype.o;Lq.prototype.writeTransaction=Lq.prototype.v;Lq.prototype.readProjection=Lq.prototype.kb;t("ol.format.WKT",cr);cr.prototype.readFeature=cr.prototype.Ub;
cr.prototype.readFeatures=cr.prototype.Qa;cr.prototype.readGeometry=cr.prototype.Tc;cr.prototype.writeFeature=cr.prototype.yd;cr.prototype.writeFeatures=cr.prototype.Xb;cr.prototype.writeGeometry=cr.prototype.bd;t("ol.format.WMSCapabilities",vr);vr.prototype.read=vr.prototype.read;t("ol.format.WMSGetFeatureInfo",Sr);Sr.prototype.readFeatures=Sr.prototype.Qa;t("ol.format.WMTSCapabilities",Tr);Tr.prototype.read=Tr.prototype.read;t("ol.format.filter.And",Xl);t("ol.format.filter.Bbox",Yl);
t("ol.format.filter.Comparison",Zl);t("ol.format.filter.ComparisonBinary",$l);t("ol.format.filter.EqualTo",am);t("ol.format.filter.Filter",Vl);t("ol.format.filter.GreaterThan",bm);t("ol.format.filter.GreaterThanOrEqualTo",cm);t("ol.format.filter.Intersects",em);t("ol.format.filter.IsBetween",fm);t("ol.format.filter.IsLike",gm);t("ol.format.filter.IsNull",hm);t("ol.format.filter.LessThan",im);t("ol.format.filter.LessThanOrEqualTo",jm);t("ol.format.filter.Not",km);t("ol.format.filter.NotEqualTo",lm);
t("ol.format.filter.Or",mm);t("ol.format.filter.Spatial",dm);t("ol.format.filter.Within",nm);t("ol.events.condition.altKeyOnly",function(a){a=a.originalEvent;return a.altKey&&!(a.metaKey||a.ctrlKey)&&!a.shiftKey});t("ol.events.condition.altShiftKeysOnly",gg);t("ol.events.condition.always",af);t("ol.events.condition.click",function(a){return"click"==a.type});t("ol.events.condition.never",bf);t("ol.events.condition.pointerMove",ig);t("ol.events.condition.singleClick",jg);
t("ol.events.condition.doubleClick",function(a){return"dblclick"==a.type});t("ol.events.condition.noModifierKeys",kg);t("ol.events.condition.platformModifierKeyOnly",function(a){a=a.originalEvent;return!a.altKey&&(Jd?a.metaKey:a.ctrlKey)&&!a.shiftKey});t("ol.events.condition.shiftKeyOnly",lg);t("ol.events.condition.targetNotEditable",mg);t("ol.events.condition.mouseOnly",ng);t("ol.events.condition.primaryAction",og);Bc.prototype.type=Bc.prototype.type;Bc.prototype.target=Bc.prototype.target;
Bc.prototype.preventDefault=Bc.prototype.preventDefault;Bc.prototype.stopPropagation=Bc.prototype.stopPropagation;t("ol.control.Attribution",bd);t("ol.control.Attribution.render",cd);bd.prototype.getCollapsible=bd.prototype.xm;bd.prototype.setCollapsible=bd.prototype.Am;bd.prototype.setCollapsed=bd.prototype.zm;bd.prototype.getCollapsed=bd.prototype.wm;t("ol.control.Control",ad);ad.prototype.getMap=ad.prototype.g;ad.prototype.setMap=ad.prototype.setMap;ad.prototype.setTarget=ad.prototype.i;
t("ol.control.FullScreen",od);t("ol.control.MousePosition",td);t("ol.control.MousePosition.render",ud);td.prototype.getCoordinateFormat=td.prototype.ih;td.prototype.getProjection=td.prototype.Lh;td.prototype.setCoordinateFormat=td.prototype.Fi;td.prototype.setProjection=td.prototype.Mh;t("ol.control.OverviewMap",zk);t("ol.control.OverviewMap.render",Ak);zk.prototype.getCollapsible=zk.prototype.Dm;zk.prototype.setCollapsible=zk.prototype.Gm;zk.prototype.setCollapsed=zk.prototype.Fm;
zk.prototype.getCollapsed=zk.prototype.Cm;zk.prototype.getOverviewMap=zk.prototype.Mk;t("ol.control.Rotate",id);t("ol.control.Rotate.render",jd);t("ol.control.ScaleLine",Ek);Ek.prototype.getUnits=Ek.prototype.Jb;t("ol.control.ScaleLine.render",Fk);Ek.prototype.setUnits=Ek.prototype.G;t("ol.control.Zoom",kd);t("ol.control.ZoomSlider",Jk);t("ol.control.ZoomSlider.render",Lk);t("ol.control.ZoomToExtent",Ok);Gc.prototype.changed=Gc.prototype.s;Gc.prototype.dispatchEvent=Gc.prototype.b;
Gc.prototype.getRevision=Gc.prototype.L;Gc.prototype.on=Gc.prototype.J;Gc.prototype.once=Gc.prototype.once;Gc.prototype.un=Gc.prototype.K;D.prototype.get=D.prototype.get;D.prototype.getKeys=D.prototype.O;D.prototype.getProperties=D.prototype.N;D.prototype.set=D.prototype.set;D.prototype.setProperties=D.prototype.H;D.prototype.unset=D.prototype.P;D.prototype.changed=D.prototype.s;D.prototype.dispatchEvent=D.prototype.b;D.prototype.getRevision=D.prototype.L;D.prototype.on=D.prototype.J;
D.prototype.once=D.prototype.once;D.prototype.un=D.prototype.K;Nc.prototype.type=Nc.prototype.type;Nc.prototype.target=Nc.prototype.target;Nc.prototype.preventDefault=Nc.prototype.preventDefault;Nc.prototype.stopPropagation=Nc.prototype.stopPropagation;Pk.prototype.get=Pk.prototype.get;Pk.prototype.getKeys=Pk.prototype.O;Pk.prototype.getProperties=Pk.prototype.N;Pk.prototype.set=Pk.prototype.set;Pk.prototype.setProperties=Pk.prototype.H;Pk.prototype.unset=Pk.prototype.P;Pk.prototype.changed=Pk.prototype.s;
Pk.prototype.dispatchEvent=Pk.prototype.b;Pk.prototype.getRevision=Pk.prototype.L;Pk.prototype.on=Pk.prototype.J;Pk.prototype.once=Pk.prototype.once;Pk.prototype.un=Pk.prototype.K;H.prototype.get=H.prototype.get;H.prototype.getKeys=H.prototype.O;H.prototype.getProperties=H.prototype.N;H.prototype.set=H.prototype.set;H.prototype.setProperties=H.prototype.H;H.prototype.unset=H.prototype.P;H.prototype.changed=H.prototype.s;H.prototype.dispatchEvent=H.prototype.b;H.prototype.getRevision=H.prototype.L;
H.prototype.on=H.prototype.J;H.prototype.once=H.prototype.once;H.prototype.un=H.prototype.K;hs.prototype.get=hs.prototype.get;hs.prototype.getKeys=hs.prototype.O;hs.prototype.getProperties=hs.prototype.N;hs.prototype.set=hs.prototype.set;hs.prototype.setProperties=hs.prototype.H;hs.prototype.unset=hs.prototype.P;hs.prototype.changed=hs.prototype.s;hs.prototype.dispatchEvent=hs.prototype.b;hs.prototype.getRevision=hs.prototype.L;hs.prototype.on=hs.prototype.J;hs.prototype.once=hs.prototype.once;
hs.prototype.un=hs.prototype.K;xs.prototype.getTileCoord=xs.prototype.i;xs.prototype.load=xs.prototype.load;G.prototype.get=G.prototype.get;G.prototype.getKeys=G.prototype.O;G.prototype.getProperties=G.prototype.N;G.prototype.set=G.prototype.set;G.prototype.setProperties=G.prototype.H;G.prototype.unset=G.prototype.P;G.prototype.changed=G.prototype.s;G.prototype.dispatchEvent=G.prototype.b;G.prototype.getRevision=G.prototype.L;G.prototype.on=G.prototype.J;G.prototype.once=G.prototype.once;
G.prototype.un=G.prototype.K;yd.prototype.type=yd.prototype.type;yd.prototype.target=yd.prototype.target;yd.prototype.preventDefault=yd.prototype.preventDefault;yd.prototype.stopPropagation=yd.prototype.stopPropagation;zd.prototype.map=zd.prototype.map;zd.prototype.frameState=zd.prototype.frameState;zd.prototype.type=zd.prototype.type;zd.prototype.target=zd.prototype.target;zd.prototype.preventDefault=zd.prototype.preventDefault;zd.prototype.stopPropagation=zd.prototype.stopPropagation;
Bd.prototype.originalEvent=Bd.prototype.originalEvent;Bd.prototype.pixel=Bd.prototype.pixel;Bd.prototype.coordinate=Bd.prototype.coordinate;Bd.prototype.dragging=Bd.prototype.dragging;Bd.prototype.preventDefault=Bd.prototype.preventDefault;Bd.prototype.stopPropagation=Bd.prototype.stopPropagation;Bd.prototype.map=Bd.prototype.map;Bd.prototype.frameState=Bd.prototype.frameState;Bd.prototype.type=Bd.prototype.type;Bd.prototype.target=Bd.prototype.target;Kc.prototype.type=Kc.prototype.type;
Kc.prototype.target=Kc.prototype.target;Kc.prototype.preventDefault=Kc.prototype.preventDefault;Kc.prototype.stopPropagation=Kc.prototype.stopPropagation;qk.prototype.get=qk.prototype.get;qk.prototype.getKeys=qk.prototype.O;qk.prototype.getProperties=qk.prototype.N;qk.prototype.set=qk.prototype.set;qk.prototype.setProperties=qk.prototype.H;qk.prototype.unset=qk.prototype.P;qk.prototype.changed=qk.prototype.s;qk.prototype.dispatchEvent=qk.prototype.b;qk.prototype.getRevision=qk.prototype.L;
qk.prototype.on=qk.prototype.J;qk.prototype.once=qk.prototype.once;qk.prototype.un=qk.prototype.K;Ww.prototype.getTileCoord=Ww.prototype.i;Ww.prototype.load=Ww.prototype.load;Qf.prototype.get=Qf.prototype.get;Qf.prototype.getKeys=Qf.prototype.O;Qf.prototype.getProperties=Qf.prototype.N;Qf.prototype.set=Qf.prototype.set;Qf.prototype.setProperties=Qf.prototype.H;Qf.prototype.unset=Qf.prototype.P;Qf.prototype.changed=Qf.prototype.s;Qf.prototype.dispatchEvent=Qf.prototype.b;Qf.prototype.getRevision=Qf.prototype.L;
Qf.prototype.on=Qf.prototype.J;Qf.prototype.once=Qf.prototype.once;Qf.prototype.un=Qf.prototype.K;Zw.prototype.forEachTileCoord=Zw.prototype.eh;Zw.prototype.getMaxZoom=Zw.prototype.oh;Zw.prototype.getMinZoom=Zw.prototype.ph;Zw.prototype.getOrigin=Zw.prototype.Qc;Zw.prototype.getResolution=Zw.prototype.La;Zw.prototype.getResolutions=Zw.prototype.oi;Zw.prototype.getTileCoordExtent=Zw.prototype.Ta;Zw.prototype.getTileCoordForCoordAndResolution=Zw.prototype.we;Zw.prototype.getTileCoordForCoordAndZ=Zw.prototype.Pf;
Zw.prototype.getTileSize=Zw.prototype.fb;Zw.prototype.getZForResolution=Zw.prototype.Mc;Wk.prototype.getOpacity=Wk.prototype.Pe;Wk.prototype.getRotateWithView=Wk.prototype.Qe;Wk.prototype.getRotation=Wk.prototype.Re;Wk.prototype.getScale=Wk.prototype.Se;Wk.prototype.getSnapToPixel=Wk.prototype.ve;Wk.prototype.setOpacity=Wk.prototype.rd;Wk.prototype.setRotation=Wk.prototype.Te;Wk.prototype.setScale=Wk.prototype.sd;Yk.prototype.clone=Yk.prototype.clone;Yk.prototype.getAngle=Yk.prototype.ki;
Yk.prototype.getFill=Yk.prototype.Ca;Yk.prototype.getPoints=Yk.prototype.li;Yk.prototype.getRadius=Yk.prototype.mi;Yk.prototype.getRadius2=Yk.prototype.sh;Yk.prototype.getStroke=Yk.prototype.Da;Yk.prototype.getOpacity=Yk.prototype.Pe;Yk.prototype.getRotateWithView=Yk.prototype.Qe;Yk.prototype.getRotation=Yk.prototype.Re;Yk.prototype.getScale=Yk.prototype.Se;Yk.prototype.getSnapToPixel=Yk.prototype.ve;Yk.prototype.setOpacity=Yk.prototype.rd;Yk.prototype.setRotation=Yk.prototype.Te;
Yk.prototype.setScale=Yk.prototype.sd;Rn.prototype.getOpacity=Rn.prototype.Pe;Rn.prototype.getRotateWithView=Rn.prototype.Qe;Rn.prototype.getRotation=Rn.prototype.Re;Rn.prototype.getScale=Rn.prototype.Se;Rn.prototype.getSnapToPixel=Rn.prototype.ve;Rn.prototype.setOpacity=Rn.prototype.rd;Rn.prototype.setRotation=Rn.prototype.Te;Rn.prototype.setScale=Rn.prototype.sd;Gt.prototype.get=Gt.prototype.get;Gt.prototype.getKeys=Gt.prototype.O;Gt.prototype.getProperties=Gt.prototype.N;Gt.prototype.set=Gt.prototype.set;
Gt.prototype.setProperties=Gt.prototype.H;Gt.prototype.unset=Gt.prototype.P;Gt.prototype.changed=Gt.prototype.s;Gt.prototype.dispatchEvent=Gt.prototype.b;Gt.prototype.getRevision=Gt.prototype.L;Gt.prototype.on=Gt.prototype.J;Gt.prototype.once=Gt.prototype.once;Gt.prototype.un=Gt.prototype.K;Xv.prototype.getAttributions=Xv.prototype.xa;Xv.prototype.getLogo=Xv.prototype.wa;Xv.prototype.getProjection=Xv.prototype.ya;Xv.prototype.getState=Xv.prototype.V;Xv.prototype.refresh=Xv.prototype.va;
Xv.prototype.setAttributions=Xv.prototype.ua;Xv.prototype.get=Xv.prototype.get;Xv.prototype.getKeys=Xv.prototype.O;Xv.prototype.getProperties=Xv.prototype.N;Xv.prototype.set=Xv.prototype.set;Xv.prototype.setProperties=Xv.prototype.H;Xv.prototype.unset=Xv.prototype.P;Xv.prototype.changed=Xv.prototype.s;Xv.prototype.dispatchEvent=Xv.prototype.b;Xv.prototype.getRevision=Xv.prototype.L;Xv.prototype.on=Xv.prototype.J;Xv.prototype.once=Xv.prototype.once;Xv.prototype.un=Xv.prototype.K;
aw.prototype.getTileGrid=aw.prototype.ab;aw.prototype.refresh=aw.prototype.va;aw.prototype.getAttributions=aw.prototype.xa;aw.prototype.getLogo=aw.prototype.wa;aw.prototype.getProjection=aw.prototype.ya;aw.prototype.getState=aw.prototype.V;aw.prototype.setAttributions=aw.prototype.ua;aw.prototype.get=aw.prototype.get;aw.prototype.getKeys=aw.prototype.O;aw.prototype.getProperties=aw.prototype.N;aw.prototype.set=aw.prototype.set;aw.prototype.setProperties=aw.prototype.H;aw.prototype.unset=aw.prototype.P;
aw.prototype.changed=aw.prototype.s;aw.prototype.dispatchEvent=aw.prototype.b;aw.prototype.getRevision=aw.prototype.L;aw.prototype.on=aw.prototype.J;aw.prototype.once=aw.prototype.once;aw.prototype.un=aw.prototype.K;W.prototype.getTileLoadFunction=W.prototype.ob;W.prototype.getTileUrlFunction=W.prototype.qb;W.prototype.getUrls=W.prototype.rb;W.prototype.setTileLoadFunction=W.prototype.xb;W.prototype.setTileUrlFunction=W.prototype.bb;W.prototype.setUrl=W.prototype.jb;W.prototype.setUrls=W.prototype.cb;
W.prototype.getTileGrid=W.prototype.ab;W.prototype.refresh=W.prototype.va;W.prototype.getAttributions=W.prototype.xa;W.prototype.getLogo=W.prototype.wa;W.prototype.getProjection=W.prototype.ya;W.prototype.getState=W.prototype.V;W.prototype.setAttributions=W.prototype.ua;W.prototype.get=W.prototype.get;W.prototype.getKeys=W.prototype.O;W.prototype.getProperties=W.prototype.N;W.prototype.set=W.prototype.set;W.prototype.setProperties=W.prototype.H;W.prototype.unset=W.prototype.P;
W.prototype.changed=W.prototype.s;W.prototype.dispatchEvent=W.prototype.b;W.prototype.getRevision=W.prototype.L;W.prototype.on=W.prototype.J;W.prototype.once=W.prototype.once;W.prototype.un=W.prototype.K;ew.prototype.setRenderReprojectionEdges=ew.prototype.Nb;ew.prototype.setTileGridForProjection=ew.prototype.Ob;ew.prototype.getTileLoadFunction=ew.prototype.ob;ew.prototype.getTileUrlFunction=ew.prototype.qb;ew.prototype.getUrls=ew.prototype.rb;ew.prototype.setTileLoadFunction=ew.prototype.xb;
ew.prototype.setTileUrlFunction=ew.prototype.bb;ew.prototype.setUrl=ew.prototype.jb;ew.prototype.setUrls=ew.prototype.cb;ew.prototype.getTileGrid=ew.prototype.ab;ew.prototype.refresh=ew.prototype.va;ew.prototype.getAttributions=ew.prototype.xa;ew.prototype.getLogo=ew.prototype.wa;ew.prototype.getProjection=ew.prototype.ya;ew.prototype.getState=ew.prototype.V;ew.prototype.setAttributions=ew.prototype.ua;ew.prototype.get=ew.prototype.get;ew.prototype.getKeys=ew.prototype.O;
ew.prototype.getProperties=ew.prototype.N;ew.prototype.set=ew.prototype.set;ew.prototype.setProperties=ew.prototype.H;ew.prototype.unset=ew.prototype.P;ew.prototype.changed=ew.prototype.s;ew.prototype.dispatchEvent=ew.prototype.b;ew.prototype.getRevision=ew.prototype.L;ew.prototype.on=ew.prototype.J;ew.prototype.once=ew.prototype.once;ew.prototype.un=ew.prototype.K;gw.prototype.setRenderReprojectionEdges=gw.prototype.Nb;gw.prototype.setTileGridForProjection=gw.prototype.Ob;
gw.prototype.getTileLoadFunction=gw.prototype.ob;gw.prototype.getTileUrlFunction=gw.prototype.qb;gw.prototype.getUrls=gw.prototype.rb;gw.prototype.setTileLoadFunction=gw.prototype.xb;gw.prototype.setTileUrlFunction=gw.prototype.bb;gw.prototype.setUrl=gw.prototype.jb;gw.prototype.setUrls=gw.prototype.cb;gw.prototype.getTileGrid=gw.prototype.ab;gw.prototype.refresh=gw.prototype.va;gw.prototype.getAttributions=gw.prototype.xa;gw.prototype.getLogo=gw.prototype.wa;gw.prototype.getProjection=gw.prototype.ya;
gw.prototype.getState=gw.prototype.V;gw.prototype.setAttributions=gw.prototype.ua;gw.prototype.get=gw.prototype.get;gw.prototype.getKeys=gw.prototype.O;gw.prototype.getProperties=gw.prototype.N;gw.prototype.set=gw.prototype.set;gw.prototype.setProperties=gw.prototype.H;gw.prototype.unset=gw.prototype.P;gw.prototype.changed=gw.prototype.s;gw.prototype.dispatchEvent=gw.prototype.b;gw.prototype.getRevision=gw.prototype.L;gw.prototype.on=gw.prototype.J;gw.prototype.once=gw.prototype.once;
gw.prototype.un=gw.prototype.K;hw.prototype.setRenderReprojectionEdges=hw.prototype.Nb;hw.prototype.setTileGridForProjection=hw.prototype.Ob;hw.prototype.getTileLoadFunction=hw.prototype.ob;hw.prototype.getTileUrlFunction=hw.prototype.qb;hw.prototype.getUrls=hw.prototype.rb;hw.prototype.setTileLoadFunction=hw.prototype.xb;hw.prototype.setTileUrlFunction=hw.prototype.bb;hw.prototype.setUrl=hw.prototype.jb;hw.prototype.setUrls=hw.prototype.cb;hw.prototype.getTileGrid=hw.prototype.ab;
hw.prototype.refresh=hw.prototype.va;hw.prototype.getAttributions=hw.prototype.xa;hw.prototype.getLogo=hw.prototype.wa;hw.prototype.getProjection=hw.prototype.ya;hw.prototype.getState=hw.prototype.V;hw.prototype.setAttributions=hw.prototype.ua;hw.prototype.get=hw.prototype.get;hw.prototype.getKeys=hw.prototype.O;hw.prototype.getProperties=hw.prototype.N;hw.prototype.set=hw.prototype.set;hw.prototype.setProperties=hw.prototype.H;hw.prototype.unset=hw.prototype.P;hw.prototype.changed=hw.prototype.s;
hw.prototype.dispatchEvent=hw.prototype.b;hw.prototype.getRevision=hw.prototype.L;hw.prototype.on=hw.prototype.J;hw.prototype.once=hw.prototype.once;hw.prototype.un=hw.prototype.K;S.prototype.getAttributions=S.prototype.xa;S.prototype.getLogo=S.prototype.wa;S.prototype.getProjection=S.prototype.ya;S.prototype.getState=S.prototype.V;S.prototype.refresh=S.prototype.va;S.prototype.setAttributions=S.prototype.ua;S.prototype.get=S.prototype.get;S.prototype.getKeys=S.prototype.O;
S.prototype.getProperties=S.prototype.N;S.prototype.set=S.prototype.set;S.prototype.setProperties=S.prototype.H;S.prototype.unset=S.prototype.P;S.prototype.changed=S.prototype.s;S.prototype.dispatchEvent=S.prototype.b;S.prototype.getRevision=S.prototype.L;S.prototype.on=S.prototype.J;S.prototype.once=S.prototype.once;S.prototype.un=S.prototype.K;X.prototype.addFeature=X.prototype.zb;X.prototype.addFeatures=X.prototype.dd;X.prototype.clear=X.prototype.clear;X.prototype.forEachFeature=X.prototype.bh;
X.prototype.forEachFeatureInExtent=X.prototype.ac;X.prototype.forEachFeatureIntersectingExtent=X.prototype.dh;X.prototype.getFeaturesCollection=X.prototype.lh;X.prototype.getFeatures=X.prototype.Ne;X.prototype.getFeaturesAtCoordinate=X.prototype.kh;X.prototype.getFeaturesInExtent=X.prototype.Hf;X.prototype.getClosestFeatureToCoordinate=X.prototype.gh;X.prototype.getExtent=X.prototype.D;X.prototype.getFeatureById=X.prototype.jh;X.prototype.getFormat=X.prototype.hi;X.prototype.getUrl=X.prototype.ii;
X.prototype.removeFeature=X.prototype.Db;X.prototype.getAttributions=X.prototype.xa;X.prototype.getLogo=X.prototype.wa;X.prototype.getProjection=X.prototype.ya;X.prototype.getState=X.prototype.V;X.prototype.refresh=X.prototype.va;X.prototype.setAttributions=X.prototype.ua;X.prototype.get=X.prototype.get;X.prototype.getKeys=X.prototype.O;X.prototype.getProperties=X.prototype.N;X.prototype.set=X.prototype.set;X.prototype.setProperties=X.prototype.H;X.prototype.unset=X.prototype.P;
X.prototype.changed=X.prototype.s;X.prototype.dispatchEvent=X.prototype.b;X.prototype.getRevision=X.prototype.L;X.prototype.on=X.prototype.J;X.prototype.once=X.prototype.once;X.prototype.un=X.prototype.K;lv.prototype.getAttributions=lv.prototype.xa;lv.prototype.getLogo=lv.prototype.wa;lv.prototype.getProjection=lv.prototype.ya;lv.prototype.getState=lv.prototype.V;lv.prototype.refresh=lv.prototype.va;lv.prototype.setAttributions=lv.prototype.ua;lv.prototype.get=lv.prototype.get;
lv.prototype.getKeys=lv.prototype.O;lv.prototype.getProperties=lv.prototype.N;lv.prototype.set=lv.prototype.set;lv.prototype.setProperties=lv.prototype.H;lv.prototype.unset=lv.prototype.P;lv.prototype.changed=lv.prototype.s;lv.prototype.dispatchEvent=lv.prototype.b;lv.prototype.getRevision=lv.prototype.L;lv.prototype.on=lv.prototype.J;lv.prototype.once=lv.prototype.once;lv.prototype.un=lv.prototype.K;nv.prototype.type=nv.prototype.type;nv.prototype.target=nv.prototype.target;
nv.prototype.preventDefault=nv.prototype.preventDefault;nv.prototype.stopPropagation=nv.prototype.stopPropagation;nw.prototype.getAttributions=nw.prototype.xa;nw.prototype.getLogo=nw.prototype.wa;nw.prototype.getProjection=nw.prototype.ya;nw.prototype.getState=nw.prototype.V;nw.prototype.refresh=nw.prototype.va;nw.prototype.setAttributions=nw.prototype.ua;nw.prototype.get=nw.prototype.get;nw.prototype.getKeys=nw.prototype.O;nw.prototype.getProperties=nw.prototype.N;nw.prototype.set=nw.prototype.set;
nw.prototype.setProperties=nw.prototype.H;nw.prototype.unset=nw.prototype.P;nw.prototype.changed=nw.prototype.s;nw.prototype.dispatchEvent=nw.prototype.b;nw.prototype.getRevision=nw.prototype.L;nw.prototype.on=nw.prototype.J;nw.prototype.once=nw.prototype.once;nw.prototype.un=nw.prototype.K;sv.prototype.getAttributions=sv.prototype.xa;sv.prototype.getLogo=sv.prototype.wa;sv.prototype.getProjection=sv.prototype.ya;sv.prototype.getState=sv.prototype.V;sv.prototype.refresh=sv.prototype.va;
sv.prototype.setAttributions=sv.prototype.ua;sv.prototype.get=sv.prototype.get;sv.prototype.getKeys=sv.prototype.O;sv.prototype.getProperties=sv.prototype.N;sv.prototype.set=sv.prototype.set;sv.prototype.setProperties=sv.prototype.H;sv.prototype.unset=sv.prototype.P;sv.prototype.changed=sv.prototype.s;sv.prototype.dispatchEvent=sv.prototype.b;sv.prototype.getRevision=sv.prototype.L;sv.prototype.on=sv.prototype.J;sv.prototype.once=sv.prototype.once;sv.prototype.un=sv.prototype.K;
ow.prototype.getAttributions=ow.prototype.xa;ow.prototype.getLogo=ow.prototype.wa;ow.prototype.getProjection=ow.prototype.ya;ow.prototype.getState=ow.prototype.V;ow.prototype.refresh=ow.prototype.va;ow.prototype.setAttributions=ow.prototype.ua;ow.prototype.get=ow.prototype.get;ow.prototype.getKeys=ow.prototype.O;ow.prototype.getProperties=ow.prototype.N;ow.prototype.set=ow.prototype.set;ow.prototype.setProperties=ow.prototype.H;ow.prototype.unset=ow.prototype.P;ow.prototype.changed=ow.prototype.s;
ow.prototype.dispatchEvent=ow.prototype.b;ow.prototype.getRevision=ow.prototype.L;ow.prototype.on=ow.prototype.J;ow.prototype.once=ow.prototype.once;ow.prototype.un=ow.prototype.K;pw.prototype.getAttributions=pw.prototype.xa;pw.prototype.getLogo=pw.prototype.wa;pw.prototype.getProjection=pw.prototype.ya;pw.prototype.getState=pw.prototype.V;pw.prototype.refresh=pw.prototype.va;pw.prototype.setAttributions=pw.prototype.ua;pw.prototype.get=pw.prototype.get;pw.prototype.getKeys=pw.prototype.O;
pw.prototype.getProperties=pw.prototype.N;pw.prototype.set=pw.prototype.set;pw.prototype.setProperties=pw.prototype.H;pw.prototype.unset=pw.prototype.P;pw.prototype.changed=pw.prototype.s;pw.prototype.dispatchEvent=pw.prototype.b;pw.prototype.getRevision=pw.prototype.L;pw.prototype.on=pw.prototype.J;pw.prototype.once=pw.prototype.once;pw.prototype.un=pw.prototype.K;tv.prototype.getAttributions=tv.prototype.xa;tv.prototype.getLogo=tv.prototype.wa;tv.prototype.getProjection=tv.prototype.ya;
tv.prototype.getState=tv.prototype.V;tv.prototype.refresh=tv.prototype.va;tv.prototype.setAttributions=tv.prototype.ua;tv.prototype.get=tv.prototype.get;tv.prototype.getKeys=tv.prototype.O;tv.prototype.getProperties=tv.prototype.N;tv.prototype.set=tv.prototype.set;tv.prototype.setProperties=tv.prototype.H;tv.prototype.unset=tv.prototype.P;tv.prototype.changed=tv.prototype.s;tv.prototype.dispatchEvent=tv.prototype.b;tv.prototype.getRevision=tv.prototype.L;tv.prototype.on=tv.prototype.J;
tv.prototype.once=tv.prototype.once;tv.prototype.un=tv.prototype.K;qw.prototype.getAttributions=qw.prototype.xa;qw.prototype.getLogo=qw.prototype.wa;qw.prototype.getProjection=qw.prototype.ya;qw.prototype.getState=qw.prototype.V;qw.prototype.refresh=qw.prototype.va;qw.prototype.setAttributions=qw.prototype.ua;qw.prototype.get=qw.prototype.get;qw.prototype.getKeys=qw.prototype.O;qw.prototype.getProperties=qw.prototype.N;qw.prototype.set=qw.prototype.set;qw.prototype.setProperties=qw.prototype.H;
qw.prototype.unset=qw.prototype.P;qw.prototype.changed=qw.prototype.s;qw.prototype.dispatchEvent=qw.prototype.b;qw.prototype.getRevision=qw.prototype.L;qw.prototype.on=qw.prototype.J;qw.prototype.once=qw.prototype.once;qw.prototype.un=qw.prototype.K;uw.prototype.setRenderReprojectionEdges=uw.prototype.Nb;uw.prototype.setTileGridForProjection=uw.prototype.Ob;uw.prototype.getTileLoadFunction=uw.prototype.ob;uw.prototype.getTileUrlFunction=uw.prototype.qb;uw.prototype.getUrls=uw.prototype.rb;
uw.prototype.setTileLoadFunction=uw.prototype.xb;uw.prototype.setTileUrlFunction=uw.prototype.bb;uw.prototype.setUrl=uw.prototype.jb;uw.prototype.setUrls=uw.prototype.cb;uw.prototype.getTileGrid=uw.prototype.ab;uw.prototype.refresh=uw.prototype.va;uw.prototype.getAttributions=uw.prototype.xa;uw.prototype.getLogo=uw.prototype.wa;uw.prototype.getProjection=uw.prototype.ya;uw.prototype.getState=uw.prototype.V;uw.prototype.setAttributions=uw.prototype.ua;uw.prototype.get=uw.prototype.get;
uw.prototype.getKeys=uw.prototype.O;uw.prototype.getProperties=uw.prototype.N;uw.prototype.set=uw.prototype.set;uw.prototype.setProperties=uw.prototype.H;uw.prototype.unset=uw.prototype.P;uw.prototype.changed=uw.prototype.s;uw.prototype.dispatchEvent=uw.prototype.b;uw.prototype.getRevision=uw.prototype.L;uw.prototype.on=uw.prototype.J;uw.prototype.once=uw.prototype.once;uw.prototype.un=uw.prototype.K;ww.prototype.getAttributions=ww.prototype.xa;ww.prototype.getLogo=ww.prototype.wa;
ww.prototype.getProjection=ww.prototype.ya;ww.prototype.getState=ww.prototype.V;ww.prototype.refresh=ww.prototype.va;ww.prototype.setAttributions=ww.prototype.ua;ww.prototype.get=ww.prototype.get;ww.prototype.getKeys=ww.prototype.O;ww.prototype.getProperties=ww.prototype.N;ww.prototype.set=ww.prototype.set;ww.prototype.setProperties=ww.prototype.H;ww.prototype.unset=ww.prototype.P;ww.prototype.changed=ww.prototype.s;ww.prototype.dispatchEvent=ww.prototype.b;ww.prototype.getRevision=ww.prototype.L;
ww.prototype.on=ww.prototype.J;ww.prototype.once=ww.prototype.once;ww.prototype.un=ww.prototype.K;Bw.prototype.type=Bw.prototype.type;Bw.prototype.target=Bw.prototype.target;Bw.prototype.preventDefault=Bw.prototype.preventDefault;Bw.prototype.stopPropagation=Bw.prototype.stopPropagation;Ew.prototype.setRenderReprojectionEdges=Ew.prototype.Nb;Ew.prototype.setTileGridForProjection=Ew.prototype.Ob;Ew.prototype.getTileLoadFunction=Ew.prototype.ob;Ew.prototype.getTileUrlFunction=Ew.prototype.qb;
Ew.prototype.getUrls=Ew.prototype.rb;Ew.prototype.setTileLoadFunction=Ew.prototype.xb;Ew.prototype.setTileUrlFunction=Ew.prototype.bb;Ew.prototype.setUrl=Ew.prototype.jb;Ew.prototype.setUrls=Ew.prototype.cb;Ew.prototype.getTileGrid=Ew.prototype.ab;Ew.prototype.refresh=Ew.prototype.va;Ew.prototype.getAttributions=Ew.prototype.xa;Ew.prototype.getLogo=Ew.prototype.wa;Ew.prototype.getProjection=Ew.prototype.ya;Ew.prototype.getState=Ew.prototype.V;Ew.prototype.setAttributions=Ew.prototype.ua;
Ew.prototype.get=Ew.prototype.get;Ew.prototype.getKeys=Ew.prototype.O;Ew.prototype.getProperties=Ew.prototype.N;Ew.prototype.set=Ew.prototype.set;Ew.prototype.setProperties=Ew.prototype.H;Ew.prototype.unset=Ew.prototype.P;Ew.prototype.changed=Ew.prototype.s;Ew.prototype.dispatchEvent=Ew.prototype.b;Ew.prototype.getRevision=Ew.prototype.L;Ew.prototype.on=Ew.prototype.J;Ew.prototype.once=Ew.prototype.once;Ew.prototype.un=Ew.prototype.K;$v.prototype.type=$v.prototype.type;$v.prototype.target=$v.prototype.target;
$v.prototype.preventDefault=$v.prototype.preventDefault;$v.prototype.stopPropagation=$v.prototype.stopPropagation;Iw.prototype.setRenderReprojectionEdges=Iw.prototype.Nb;Iw.prototype.setTileGridForProjection=Iw.prototype.Ob;Iw.prototype.getTileLoadFunction=Iw.prototype.ob;Iw.prototype.getTileUrlFunction=Iw.prototype.qb;Iw.prototype.getUrls=Iw.prototype.rb;Iw.prototype.setTileLoadFunction=Iw.prototype.xb;Iw.prototype.setTileUrlFunction=Iw.prototype.bb;Iw.prototype.setUrl=Iw.prototype.jb;
Iw.prototype.setUrls=Iw.prototype.cb;Iw.prototype.getTileGrid=Iw.prototype.ab;Iw.prototype.refresh=Iw.prototype.va;Iw.prototype.getAttributions=Iw.prototype.xa;Iw.prototype.getLogo=Iw.prototype.wa;Iw.prototype.getProjection=Iw.prototype.ya;Iw.prototype.getState=Iw.prototype.V;Iw.prototype.setAttributions=Iw.prototype.ua;Iw.prototype.get=Iw.prototype.get;Iw.prototype.getKeys=Iw.prototype.O;Iw.prototype.getProperties=Iw.prototype.N;Iw.prototype.set=Iw.prototype.set;Iw.prototype.setProperties=Iw.prototype.H;
Iw.prototype.unset=Iw.prototype.P;Iw.prototype.changed=Iw.prototype.s;Iw.prototype.dispatchEvent=Iw.prototype.b;Iw.prototype.getRevision=Iw.prototype.L;Iw.prototype.on=Iw.prototype.J;Iw.prototype.once=Iw.prototype.once;Iw.prototype.un=Iw.prototype.K;Kw.prototype.getTileGrid=Kw.prototype.ab;Kw.prototype.refresh=Kw.prototype.va;Kw.prototype.getAttributions=Kw.prototype.xa;Kw.prototype.getLogo=Kw.prototype.wa;Kw.prototype.getProjection=Kw.prototype.ya;Kw.prototype.getState=Kw.prototype.V;
Kw.prototype.setAttributions=Kw.prototype.ua;Kw.prototype.get=Kw.prototype.get;Kw.prototype.getKeys=Kw.prototype.O;Kw.prototype.getProperties=Kw.prototype.N;Kw.prototype.set=Kw.prototype.set;Kw.prototype.setProperties=Kw.prototype.H;Kw.prototype.unset=Kw.prototype.P;Kw.prototype.changed=Kw.prototype.s;Kw.prototype.dispatchEvent=Kw.prototype.b;Kw.prototype.getRevision=Kw.prototype.L;Kw.prototype.on=Kw.prototype.J;Kw.prototype.once=Kw.prototype.once;Kw.prototype.un=Kw.prototype.K;
Mw.prototype.setRenderReprojectionEdges=Mw.prototype.Nb;Mw.prototype.setTileGridForProjection=Mw.prototype.Ob;Mw.prototype.getTileLoadFunction=Mw.prototype.ob;Mw.prototype.getTileUrlFunction=Mw.prototype.qb;Mw.prototype.getUrls=Mw.prototype.rb;Mw.prototype.setTileLoadFunction=Mw.prototype.xb;Mw.prototype.setTileUrlFunction=Mw.prototype.bb;Mw.prototype.setUrl=Mw.prototype.jb;Mw.prototype.setUrls=Mw.prototype.cb;Mw.prototype.getTileGrid=Mw.prototype.ab;Mw.prototype.refresh=Mw.prototype.va;
Mw.prototype.getAttributions=Mw.prototype.xa;Mw.prototype.getLogo=Mw.prototype.wa;Mw.prototype.getProjection=Mw.prototype.ya;Mw.prototype.getState=Mw.prototype.V;Mw.prototype.setAttributions=Mw.prototype.ua;Mw.prototype.get=Mw.prototype.get;Mw.prototype.getKeys=Mw.prototype.O;Mw.prototype.getProperties=Mw.prototype.N;Mw.prototype.set=Mw.prototype.set;Mw.prototype.setProperties=Mw.prototype.H;Mw.prototype.unset=Mw.prototype.P;Mw.prototype.changed=Mw.prototype.s;Mw.prototype.dispatchEvent=Mw.prototype.b;
Mw.prototype.getRevision=Mw.prototype.L;Mw.prototype.on=Mw.prototype.J;Mw.prototype.once=Mw.prototype.once;Mw.prototype.un=Mw.prototype.K;Nw.prototype.getTileGrid=Nw.prototype.ab;Nw.prototype.refresh=Nw.prototype.va;Nw.prototype.getAttributions=Nw.prototype.xa;Nw.prototype.getLogo=Nw.prototype.wa;Nw.prototype.getProjection=Nw.prototype.ya;Nw.prototype.getState=Nw.prototype.V;Nw.prototype.setAttributions=Nw.prototype.ua;Nw.prototype.get=Nw.prototype.get;Nw.prototype.getKeys=Nw.prototype.O;
Nw.prototype.getProperties=Nw.prototype.N;Nw.prototype.set=Nw.prototype.set;Nw.prototype.setProperties=Nw.prototype.H;Nw.prototype.unset=Nw.prototype.P;Nw.prototype.changed=Nw.prototype.s;Nw.prototype.dispatchEvent=Nw.prototype.b;Nw.prototype.getRevision=Nw.prototype.L;Nw.prototype.on=Nw.prototype.J;Nw.prototype.once=Nw.prototype.once;Nw.prototype.un=Nw.prototype.K;Rw.prototype.setRenderReprojectionEdges=Rw.prototype.Nb;Rw.prototype.setTileGridForProjection=Rw.prototype.Ob;
Rw.prototype.getTileLoadFunction=Rw.prototype.ob;Rw.prototype.getTileUrlFunction=Rw.prototype.qb;Rw.prototype.getUrls=Rw.prototype.rb;Rw.prototype.setTileLoadFunction=Rw.prototype.xb;Rw.prototype.setTileUrlFunction=Rw.prototype.bb;Rw.prototype.setUrl=Rw.prototype.jb;Rw.prototype.setUrls=Rw.prototype.cb;Rw.prototype.getTileGrid=Rw.prototype.ab;Rw.prototype.refresh=Rw.prototype.va;Rw.prototype.getAttributions=Rw.prototype.xa;Rw.prototype.getLogo=Rw.prototype.wa;Rw.prototype.getProjection=Rw.prototype.ya;
Rw.prototype.getState=Rw.prototype.V;Rw.prototype.setAttributions=Rw.prototype.ua;Rw.prototype.get=Rw.prototype.get;Rw.prototype.getKeys=Rw.prototype.O;Rw.prototype.getProperties=Rw.prototype.N;Rw.prototype.set=Rw.prototype.set;Rw.prototype.setProperties=Rw.prototype.H;Rw.prototype.unset=Rw.prototype.P;Rw.prototype.changed=Rw.prototype.s;Rw.prototype.dispatchEvent=Rw.prototype.b;Rw.prototype.getRevision=Rw.prototype.L;Rw.prototype.on=Rw.prototype.J;Rw.prototype.once=Rw.prototype.once;
Rw.prototype.un=Rw.prototype.K;Nt.prototype.type=Nt.prototype.type;Nt.prototype.target=Nt.prototype.target;Nt.prototype.preventDefault=Nt.prototype.preventDefault;Nt.prototype.stopPropagation=Nt.prototype.stopPropagation;Yw.prototype.getTileLoadFunction=Yw.prototype.ob;Yw.prototype.getTileUrlFunction=Yw.prototype.qb;Yw.prototype.getUrls=Yw.prototype.rb;Yw.prototype.setTileLoadFunction=Yw.prototype.xb;Yw.prototype.setTileUrlFunction=Yw.prototype.bb;Yw.prototype.setUrl=Yw.prototype.jb;
Yw.prototype.setUrls=Yw.prototype.cb;Yw.prototype.getTileGrid=Yw.prototype.ab;Yw.prototype.refresh=Yw.prototype.va;Yw.prototype.getAttributions=Yw.prototype.xa;Yw.prototype.getLogo=Yw.prototype.wa;Yw.prototype.getProjection=Yw.prototype.ya;Yw.prototype.getState=Yw.prototype.V;Yw.prototype.setAttributions=Yw.prototype.ua;Yw.prototype.get=Yw.prototype.get;Yw.prototype.getKeys=Yw.prototype.O;Yw.prototype.getProperties=Yw.prototype.N;Yw.prototype.set=Yw.prototype.set;Yw.prototype.setProperties=Yw.prototype.H;
Yw.prototype.unset=Yw.prototype.P;Yw.prototype.changed=Yw.prototype.s;Yw.prototype.dispatchEvent=Yw.prototype.b;Yw.prototype.getRevision=Yw.prototype.L;Yw.prototype.on=Yw.prototype.J;Yw.prototype.once=Yw.prototype.once;Yw.prototype.un=Yw.prototype.K;Y.prototype.setRenderReprojectionEdges=Y.prototype.Nb;Y.prototype.setTileGridForProjection=Y.prototype.Ob;Y.prototype.getTileLoadFunction=Y.prototype.ob;Y.prototype.getTileUrlFunction=Y.prototype.qb;Y.prototype.getUrls=Y.prototype.rb;
Y.prototype.setTileLoadFunction=Y.prototype.xb;Y.prototype.setTileUrlFunction=Y.prototype.bb;Y.prototype.setUrl=Y.prototype.jb;Y.prototype.setUrls=Y.prototype.cb;Y.prototype.getTileGrid=Y.prototype.ab;Y.prototype.refresh=Y.prototype.va;Y.prototype.getAttributions=Y.prototype.xa;Y.prototype.getLogo=Y.prototype.wa;Y.prototype.getProjection=Y.prototype.ya;Y.prototype.getState=Y.prototype.V;Y.prototype.setAttributions=Y.prototype.ua;Y.prototype.get=Y.prototype.get;Y.prototype.getKeys=Y.prototype.O;
Y.prototype.getProperties=Y.prototype.N;Y.prototype.set=Y.prototype.set;Y.prototype.setProperties=Y.prototype.H;Y.prototype.unset=Y.prototype.P;Y.prototype.changed=Y.prototype.s;Y.prototype.dispatchEvent=Y.prototype.b;Y.prototype.getRevision=Y.prototype.L;Y.prototype.on=Y.prototype.J;Y.prototype.once=Y.prototype.once;Y.prototype.un=Y.prototype.K;bx.prototype.setRenderReprojectionEdges=bx.prototype.Nb;bx.prototype.setTileGridForProjection=bx.prototype.Ob;bx.prototype.getTileLoadFunction=bx.prototype.ob;
bx.prototype.getTileUrlFunction=bx.prototype.qb;bx.prototype.getUrls=bx.prototype.rb;bx.prototype.setTileLoadFunction=bx.prototype.xb;bx.prototype.setTileUrlFunction=bx.prototype.bb;bx.prototype.setUrl=bx.prototype.jb;bx.prototype.setUrls=bx.prototype.cb;bx.prototype.getTileGrid=bx.prototype.ab;bx.prototype.refresh=bx.prototype.va;bx.prototype.getAttributions=bx.prototype.xa;bx.prototype.getLogo=bx.prototype.wa;bx.prototype.getProjection=bx.prototype.ya;bx.prototype.getState=bx.prototype.V;
bx.prototype.setAttributions=bx.prototype.ua;bx.prototype.get=bx.prototype.get;bx.prototype.getKeys=bx.prototype.O;bx.prototype.getProperties=bx.prototype.N;bx.prototype.set=bx.prototype.set;bx.prototype.setProperties=bx.prototype.H;bx.prototype.unset=bx.prototype.P;bx.prototype.changed=bx.prototype.s;bx.prototype.dispatchEvent=bx.prototype.b;bx.prototype.getRevision=bx.prototype.L;bx.prototype.on=bx.prototype.J;bx.prototype.once=bx.prototype.once;bx.prototype.un=bx.prototype.K;
Pv.prototype.getTileCoord=Pv.prototype.i;Pv.prototype.load=Pv.prototype.load;dt.prototype.changed=dt.prototype.s;dt.prototype.dispatchEvent=dt.prototype.b;dt.prototype.getRevision=dt.prototype.L;dt.prototype.on=dt.prototype.J;dt.prototype.once=dt.prototype.once;dt.prototype.un=dt.prototype.K;Bt.prototype.changed=Bt.prototype.s;Bt.prototype.dispatchEvent=Bt.prototype.b;Bt.prototype.getRevision=Bt.prototype.L;Bt.prototype.on=Bt.prototype.J;Bt.prototype.once=Bt.prototype.once;Bt.prototype.un=Bt.prototype.K;
vv.prototype.changed=vv.prototype.s;vv.prototype.dispatchEvent=vv.prototype.b;vv.prototype.getRevision=vv.prototype.L;vv.prototype.on=vv.prototype.J;vv.prototype.once=vv.prototype.once;vv.prototype.un=vv.prototype.K;Gv.prototype.changed=Gv.prototype.s;Gv.prototype.dispatchEvent=Gv.prototype.b;Gv.prototype.getRevision=Gv.prototype.L;Gv.prototype.on=Gv.prototype.J;Gv.prototype.once=Gv.prototype.once;Gv.prototype.un=Gv.prototype.K;Et.prototype.changed=Et.prototype.s;Et.prototype.dispatchEvent=Et.prototype.b;
Et.prototype.getRevision=Et.prototype.L;Et.prototype.on=Et.prototype.J;Et.prototype.once=Et.prototype.once;Et.prototype.un=Et.prototype.K;mt.prototype.changed=mt.prototype.s;mt.prototype.dispatchEvent=mt.prototype.b;mt.prototype.getRevision=mt.prototype.L;mt.prototype.on=mt.prototype.J;mt.prototype.once=mt.prototype.once;mt.prototype.un=mt.prototype.K;cv.prototype.changed=cv.prototype.s;cv.prototype.dispatchEvent=cv.prototype.b;cv.prototype.getRevision=cv.prototype.L;cv.prototype.on=cv.prototype.J;
cv.prototype.once=cv.prototype.once;cv.prototype.un=cv.prototype.K;dv.prototype.changed=dv.prototype.s;dv.prototype.dispatchEvent=dv.prototype.b;dv.prototype.getRevision=dv.prototype.L;dv.prototype.on=dv.prototype.J;dv.prototype.once=dv.prototype.once;dv.prototype.un=dv.prototype.K;zv.prototype.changed=zv.prototype.s;zv.prototype.dispatchEvent=zv.prototype.b;zv.prototype.getRevision=zv.prototype.L;zv.prototype.on=zv.prototype.J;zv.prototype.once=zv.prototype.once;zv.prototype.un=zv.prototype.K;
ut.prototype.changed=ut.prototype.s;ut.prototype.dispatchEvent=ut.prototype.b;ut.prototype.getRevision=ut.prototype.L;ut.prototype.on=ut.prototype.J;ut.prototype.once=ut.prototype.once;ut.prototype.un=ut.prototype.K;Iv.prototype.changed=Iv.prototype.s;Iv.prototype.dispatchEvent=Iv.prototype.b;Iv.prototype.getRevision=Iv.prototype.L;Iv.prototype.on=Iv.prototype.J;Iv.prototype.once=Iv.prototype.once;Iv.prototype.un=Iv.prototype.K;Mh.prototype.type=Mh.prototype.type;Mh.prototype.target=Mh.prototype.target;
Mh.prototype.preventDefault=Mh.prototype.preventDefault;Mh.prototype.stopPropagation=Mh.prototype.stopPropagation;ge.prototype.type=ge.prototype.type;ge.prototype.target=ge.prototype.target;ge.prototype.preventDefault=ge.prototype.preventDefault;ge.prototype.stopPropagation=ge.prototype.stopPropagation;dh.prototype.get=dh.prototype.get;dh.prototype.getKeys=dh.prototype.O;dh.prototype.getProperties=dh.prototype.N;dh.prototype.set=dh.prototype.set;dh.prototype.setProperties=dh.prototype.H;
dh.prototype.unset=dh.prototype.P;dh.prototype.changed=dh.prototype.s;dh.prototype.dispatchEvent=dh.prototype.b;dh.prototype.getRevision=dh.prototype.L;dh.prototype.on=dh.prototype.J;dh.prototype.once=dh.prototype.once;dh.prototype.un=dh.prototype.K;fh.prototype.getExtent=fh.prototype.D;fh.prototype.getMaxResolution=fh.prototype.gc;fh.prototype.getMinResolution=fh.prototype.hc;fh.prototype.getOpacity=fh.prototype.ic;fh.prototype.getVisible=fh.prototype.Kb;fh.prototype.getZIndex=fh.prototype.za;
fh.prototype.setExtent=fh.prototype.uc;fh.prototype.setMaxResolution=fh.prototype.zc;fh.prototype.setMinResolution=fh.prototype.Ac;fh.prototype.setOpacity=fh.prototype.vc;fh.prototype.setVisible=fh.prototype.wc;fh.prototype.setZIndex=fh.prototype.Wb;fh.prototype.get=fh.prototype.get;fh.prototype.getKeys=fh.prototype.O;fh.prototype.getProperties=fh.prototype.N;fh.prototype.set=fh.prototype.set;fh.prototype.setProperties=fh.prototype.H;fh.prototype.unset=fh.prototype.P;fh.prototype.changed=fh.prototype.s;
fh.prototype.dispatchEvent=fh.prototype.b;fh.prototype.getRevision=fh.prototype.L;fh.prototype.on=fh.prototype.J;fh.prototype.once=fh.prototype.once;fh.prototype.un=fh.prototype.K;rh.prototype.getExtent=rh.prototype.D;rh.prototype.getMaxResolution=rh.prototype.gc;rh.prototype.getMinResolution=rh.prototype.hc;rh.prototype.getOpacity=rh.prototype.ic;rh.prototype.getVisible=rh.prototype.Kb;rh.prototype.getZIndex=rh.prototype.za;rh.prototype.setExtent=rh.prototype.uc;rh.prototype.setMaxResolution=rh.prototype.zc;
rh.prototype.setMinResolution=rh.prototype.Ac;rh.prototype.setOpacity=rh.prototype.vc;rh.prototype.setVisible=rh.prototype.wc;rh.prototype.setZIndex=rh.prototype.Wb;rh.prototype.get=rh.prototype.get;rh.prototype.getKeys=rh.prototype.O;rh.prototype.getProperties=rh.prototype.N;rh.prototype.set=rh.prototype.set;rh.prototype.setProperties=rh.prototype.H;rh.prototype.unset=rh.prototype.P;rh.prototype.changed=rh.prototype.s;rh.prototype.dispatchEvent=rh.prototype.b;rh.prototype.getRevision=rh.prototype.L;
rh.prototype.on=rh.prototype.J;rh.prototype.once=rh.prototype.once;rh.prototype.un=rh.prototype.K;R.prototype.setMap=R.prototype.setMap;R.prototype.setSource=R.prototype.Yc;R.prototype.getExtent=R.prototype.D;R.prototype.getMaxResolution=R.prototype.gc;R.prototype.getMinResolution=R.prototype.hc;R.prototype.getOpacity=R.prototype.ic;R.prototype.getVisible=R.prototype.Kb;R.prototype.getZIndex=R.prototype.za;R.prototype.setExtent=R.prototype.uc;R.prototype.setMaxResolution=R.prototype.zc;
R.prototype.setMinResolution=R.prototype.Ac;R.prototype.setOpacity=R.prototype.vc;R.prototype.setVisible=R.prototype.wc;R.prototype.setZIndex=R.prototype.Wb;R.prototype.get=R.prototype.get;R.prototype.getKeys=R.prototype.O;R.prototype.getProperties=R.prototype.N;R.prototype.set=R.prototype.set;R.prototype.setProperties=R.prototype.H;R.prototype.unset=R.prototype.P;R.prototype.changed=R.prototype.s;R.prototype.dispatchEvent=R.prototype.b;R.prototype.getRevision=R.prototype.L;R.prototype.on=R.prototype.J;
R.prototype.once=R.prototype.once;R.prototype.un=R.prototype.K;T.prototype.getSource=T.prototype.la;T.prototype.getStyle=T.prototype.C;T.prototype.getStyleFunction=T.prototype.G;T.prototype.setStyle=T.prototype.g;T.prototype.setMap=T.prototype.setMap;T.prototype.setSource=T.prototype.Yc;T.prototype.getExtent=T.prototype.D;T.prototype.getMaxResolution=T.prototype.gc;T.prototype.getMinResolution=T.prototype.hc;T.prototype.getOpacity=T.prototype.ic;T.prototype.getVisible=T.prototype.Kb;
T.prototype.getZIndex=T.prototype.za;T.prototype.setExtent=T.prototype.uc;T.prototype.setMaxResolution=T.prototype.zc;T.prototype.setMinResolution=T.prototype.Ac;T.prototype.setOpacity=T.prototype.vc;T.prototype.setVisible=T.prototype.wc;T.prototype.setZIndex=T.prototype.Wb;T.prototype.get=T.prototype.get;T.prototype.getKeys=T.prototype.O;T.prototype.getProperties=T.prototype.N;T.prototype.set=T.prototype.set;T.prototype.setProperties=T.prototype.H;T.prototype.unset=T.prototype.P;
T.prototype.changed=T.prototype.s;T.prototype.dispatchEvent=T.prototype.b;T.prototype.getRevision=T.prototype.L;T.prototype.on=T.prototype.J;T.prototype.once=T.prototype.once;T.prototype.un=T.prototype.K;yv.prototype.setMap=yv.prototype.setMap;yv.prototype.setSource=yv.prototype.Yc;yv.prototype.getExtent=yv.prototype.D;yv.prototype.getMaxResolution=yv.prototype.gc;yv.prototype.getMinResolution=yv.prototype.hc;yv.prototype.getOpacity=yv.prototype.ic;yv.prototype.getVisible=yv.prototype.Kb;
yv.prototype.getZIndex=yv.prototype.za;yv.prototype.setExtent=yv.prototype.uc;yv.prototype.setMaxResolution=yv.prototype.zc;yv.prototype.setMinResolution=yv.prototype.Ac;yv.prototype.setOpacity=yv.prototype.vc;yv.prototype.setVisible=yv.prototype.wc;yv.prototype.setZIndex=yv.prototype.Wb;yv.prototype.get=yv.prototype.get;yv.prototype.getKeys=yv.prototype.O;yv.prototype.getProperties=yv.prototype.N;yv.prototype.set=yv.prototype.set;yv.prototype.setProperties=yv.prototype.H;yv.prototype.unset=yv.prototype.P;
yv.prototype.changed=yv.prototype.s;yv.prototype.dispatchEvent=yv.prototype.b;yv.prototype.getRevision=yv.prototype.L;yv.prototype.on=yv.prototype.J;yv.prototype.once=yv.prototype.once;yv.prototype.un=yv.prototype.K;Hv.prototype.setMap=Hv.prototype.setMap;Hv.prototype.setSource=Hv.prototype.Yc;Hv.prototype.getExtent=Hv.prototype.D;Hv.prototype.getMaxResolution=Hv.prototype.gc;Hv.prototype.getMinResolution=Hv.prototype.hc;Hv.prototype.getOpacity=Hv.prototype.ic;Hv.prototype.getVisible=Hv.prototype.Kb;
Hv.prototype.getZIndex=Hv.prototype.za;Hv.prototype.setExtent=Hv.prototype.uc;Hv.prototype.setMaxResolution=Hv.prototype.zc;Hv.prototype.setMinResolution=Hv.prototype.Ac;Hv.prototype.setOpacity=Hv.prototype.vc;Hv.prototype.setVisible=Hv.prototype.wc;Hv.prototype.setZIndex=Hv.prototype.Wb;Hv.prototype.get=Hv.prototype.get;Hv.prototype.getKeys=Hv.prototype.O;Hv.prototype.getProperties=Hv.prototype.N;Hv.prototype.set=Hv.prototype.set;Hv.prototype.setProperties=Hv.prototype.H;Hv.prototype.unset=Hv.prototype.P;
Hv.prototype.changed=Hv.prototype.s;Hv.prototype.dispatchEvent=Hv.prototype.b;Hv.prototype.getRevision=Hv.prototype.L;Hv.prototype.on=Hv.prototype.J;Hv.prototype.once=Hv.prototype.once;Hv.prototype.un=Hv.prototype.K;U.prototype.getSource=U.prototype.la;U.prototype.getStyle=U.prototype.C;U.prototype.getStyleFunction=U.prototype.G;U.prototype.setStyle=U.prototype.g;U.prototype.setMap=U.prototype.setMap;U.prototype.setSource=U.prototype.Yc;U.prototype.getExtent=U.prototype.D;
U.prototype.getMaxResolution=U.prototype.gc;U.prototype.getMinResolution=U.prototype.hc;U.prototype.getOpacity=U.prototype.ic;U.prototype.getVisible=U.prototype.Kb;U.prototype.getZIndex=U.prototype.za;U.prototype.setExtent=U.prototype.uc;U.prototype.setMaxResolution=U.prototype.zc;U.prototype.setMinResolution=U.prototype.Ac;U.prototype.setOpacity=U.prototype.vc;U.prototype.setVisible=U.prototype.wc;U.prototype.setZIndex=U.prototype.Wb;U.prototype.get=U.prototype.get;U.prototype.getKeys=U.prototype.O;
U.prototype.getProperties=U.prototype.N;U.prototype.set=U.prototype.set;U.prototype.setProperties=U.prototype.H;U.prototype.unset=U.prototype.P;U.prototype.changed=U.prototype.s;U.prototype.dispatchEvent=U.prototype.b;U.prototype.getRevision=U.prototype.L;U.prototype.on=U.prototype.J;U.prototype.once=U.prototype.once;U.prototype.un=U.prototype.K;ag.prototype.get=ag.prototype.get;ag.prototype.getKeys=ag.prototype.O;ag.prototype.getProperties=ag.prototype.N;ag.prototype.set=ag.prototype.set;
ag.prototype.setProperties=ag.prototype.H;ag.prototype.unset=ag.prototype.P;ag.prototype.changed=ag.prototype.s;ag.prototype.dispatchEvent=ag.prototype.b;ag.prototype.getRevision=ag.prototype.L;ag.prototype.on=ag.prototype.J;ag.prototype.once=ag.prototype.once;ag.prototype.un=ag.prototype.K;eg.prototype.getActive=eg.prototype.c;eg.prototype.getMap=eg.prototype.i;eg.prototype.setActive=eg.prototype.Ia;eg.prototype.get=eg.prototype.get;eg.prototype.getKeys=eg.prototype.O;
eg.prototype.getProperties=eg.prototype.N;eg.prototype.set=eg.prototype.set;eg.prototype.setProperties=eg.prototype.H;eg.prototype.unset=eg.prototype.P;eg.prototype.changed=eg.prototype.s;eg.prototype.dispatchEvent=eg.prototype.b;eg.prototype.getRevision=eg.prototype.L;eg.prototype.on=eg.prototype.J;eg.prototype.once=eg.prototype.once;eg.prototype.un=eg.prototype.K;zs.prototype.getActive=zs.prototype.c;zs.prototype.getMap=zs.prototype.i;zs.prototype.setActive=zs.prototype.Ia;zs.prototype.get=zs.prototype.get;
zs.prototype.getKeys=zs.prototype.O;zs.prototype.getProperties=zs.prototype.N;zs.prototype.set=zs.prototype.set;zs.prototype.setProperties=zs.prototype.H;zs.prototype.unset=zs.prototype.P;zs.prototype.changed=zs.prototype.s;zs.prototype.dispatchEvent=zs.prototype.b;zs.prototype.getRevision=zs.prototype.L;zs.prototype.on=zs.prototype.J;zs.prototype.once=zs.prototype.once;zs.prototype.un=zs.prototype.K;Cs.prototype.type=Cs.prototype.type;Cs.prototype.target=Cs.prototype.target;
Cs.prototype.preventDefault=Cs.prototype.preventDefault;Cs.prototype.stopPropagation=Cs.prototype.stopPropagation;pg.prototype.getActive=pg.prototype.c;pg.prototype.getMap=pg.prototype.i;pg.prototype.setActive=pg.prototype.Ia;pg.prototype.get=pg.prototype.get;pg.prototype.getKeys=pg.prototype.O;pg.prototype.getProperties=pg.prototype.N;pg.prototype.set=pg.prototype.set;pg.prototype.setProperties=pg.prototype.H;pg.prototype.unset=pg.prototype.P;pg.prototype.changed=pg.prototype.s;
pg.prototype.dispatchEvent=pg.prototype.b;pg.prototype.getRevision=pg.prototype.L;pg.prototype.on=pg.prototype.J;pg.prototype.once=pg.prototype.once;pg.prototype.un=pg.prototype.K;Dg.prototype.getActive=Dg.prototype.c;Dg.prototype.getMap=Dg.prototype.i;Dg.prototype.setActive=Dg.prototype.Ia;Dg.prototype.get=Dg.prototype.get;Dg.prototype.getKeys=Dg.prototype.O;Dg.prototype.getProperties=Dg.prototype.N;Dg.prototype.set=Dg.prototype.set;Dg.prototype.setProperties=Dg.prototype.H;Dg.prototype.unset=Dg.prototype.P;
Dg.prototype.changed=Dg.prototype.s;Dg.prototype.dispatchEvent=Dg.prototype.b;Dg.prototype.getRevision=Dg.prototype.L;Dg.prototype.on=Dg.prototype.J;Dg.prototype.once=Dg.prototype.once;Dg.prototype.un=Dg.prototype.K;Ig.prototype.type=Ig.prototype.type;Ig.prototype.target=Ig.prototype.target;Ig.prototype.preventDefault=Ig.prototype.preventDefault;Ig.prototype.stopPropagation=Ig.prototype.stopPropagation;sg.prototype.getActive=sg.prototype.c;sg.prototype.getMap=sg.prototype.i;
sg.prototype.setActive=sg.prototype.Ia;sg.prototype.get=sg.prototype.get;sg.prototype.getKeys=sg.prototype.O;sg.prototype.getProperties=sg.prototype.N;sg.prototype.set=sg.prototype.set;sg.prototype.setProperties=sg.prototype.H;sg.prototype.unset=sg.prototype.P;sg.prototype.changed=sg.prototype.s;sg.prototype.dispatchEvent=sg.prototype.b;sg.prototype.getRevision=sg.prototype.L;sg.prototype.on=sg.prototype.J;sg.prototype.once=sg.prototype.once;sg.prototype.un=sg.prototype.K;wg.prototype.getActive=wg.prototype.c;
wg.prototype.getMap=wg.prototype.i;wg.prototype.setActive=wg.prototype.Ia;wg.prototype.get=wg.prototype.get;wg.prototype.getKeys=wg.prototype.O;wg.prototype.getProperties=wg.prototype.N;wg.prototype.set=wg.prototype.set;wg.prototype.setProperties=wg.prototype.H;wg.prototype.unset=wg.prototype.P;wg.prototype.changed=wg.prototype.s;wg.prototype.dispatchEvent=wg.prototype.b;wg.prototype.getRevision=wg.prototype.L;wg.prototype.on=wg.prototype.J;wg.prototype.once=wg.prototype.once;wg.prototype.un=wg.prototype.K;
Es.prototype.getActive=Es.prototype.c;Es.prototype.getMap=Es.prototype.i;Es.prototype.setActive=Es.prototype.Ia;Es.prototype.get=Es.prototype.get;Es.prototype.getKeys=Es.prototype.O;Es.prototype.getProperties=Es.prototype.N;Es.prototype.set=Es.prototype.set;Es.prototype.setProperties=Es.prototype.H;Es.prototype.unset=Es.prototype.P;Es.prototype.changed=Es.prototype.s;Es.prototype.dispatchEvent=Es.prototype.b;Es.prototype.getRevision=Es.prototype.L;Es.prototype.on=Es.prototype.J;
Es.prototype.once=Es.prototype.once;Es.prototype.un=Es.prototype.K;Mg.prototype.getGeometry=Mg.prototype.U;Mg.prototype.getActive=Mg.prototype.c;Mg.prototype.getMap=Mg.prototype.i;Mg.prototype.setActive=Mg.prototype.Ia;Mg.prototype.get=Mg.prototype.get;Mg.prototype.getKeys=Mg.prototype.O;Mg.prototype.getProperties=Mg.prototype.N;Mg.prototype.set=Mg.prototype.set;Mg.prototype.setProperties=Mg.prototype.H;Mg.prototype.unset=Mg.prototype.P;Mg.prototype.changed=Mg.prototype.s;
Mg.prototype.dispatchEvent=Mg.prototype.b;Mg.prototype.getRevision=Mg.prototype.L;Mg.prototype.on=Mg.prototype.J;Mg.prototype.once=Mg.prototype.once;Mg.prototype.un=Mg.prototype.K;Qt.prototype.getActive=Qt.prototype.c;Qt.prototype.getMap=Qt.prototype.i;Qt.prototype.setActive=Qt.prototype.Ia;Qt.prototype.get=Qt.prototype.get;Qt.prototype.getKeys=Qt.prototype.O;Qt.prototype.getProperties=Qt.prototype.N;Qt.prototype.set=Qt.prototype.set;Qt.prototype.setProperties=Qt.prototype.H;Qt.prototype.unset=Qt.prototype.P;
Qt.prototype.changed=Qt.prototype.s;Qt.prototype.dispatchEvent=Qt.prototype.b;Qt.prototype.getRevision=Qt.prototype.L;Qt.prototype.on=Qt.prototype.J;Qt.prototype.once=Qt.prototype.once;Qt.prototype.un=Qt.prototype.K;eu.prototype.type=eu.prototype.type;eu.prototype.target=eu.prototype.target;eu.prototype.preventDefault=eu.prototype.preventDefault;eu.prototype.stopPropagation=eu.prototype.stopPropagation;gu.prototype.getActive=gu.prototype.c;gu.prototype.getMap=gu.prototype.i;
gu.prototype.setActive=gu.prototype.Ia;gu.prototype.get=gu.prototype.get;gu.prototype.getKeys=gu.prototype.O;gu.prototype.getProperties=gu.prototype.N;gu.prototype.set=gu.prototype.set;gu.prototype.setProperties=gu.prototype.H;gu.prototype.unset=gu.prototype.P;gu.prototype.changed=gu.prototype.s;gu.prototype.dispatchEvent=gu.prototype.b;gu.prototype.getRevision=gu.prototype.L;gu.prototype.on=gu.prototype.J;gu.prototype.once=gu.prototype.once;gu.prototype.un=gu.prototype.K;ru.prototype.type=ru.prototype.type;
ru.prototype.target=ru.prototype.target;ru.prototype.preventDefault=ru.prototype.preventDefault;ru.prototype.stopPropagation=ru.prototype.stopPropagation;Ng.prototype.getActive=Ng.prototype.c;Ng.prototype.getMap=Ng.prototype.i;Ng.prototype.setActive=Ng.prototype.Ia;Ng.prototype.get=Ng.prototype.get;Ng.prototype.getKeys=Ng.prototype.O;Ng.prototype.getProperties=Ng.prototype.N;Ng.prototype.set=Ng.prototype.set;Ng.prototype.setProperties=Ng.prototype.H;Ng.prototype.unset=Ng.prototype.P;
Ng.prototype.changed=Ng.prototype.s;Ng.prototype.dispatchEvent=Ng.prototype.b;Ng.prototype.getRevision=Ng.prototype.L;Ng.prototype.on=Ng.prototype.J;Ng.prototype.once=Ng.prototype.once;Ng.prototype.un=Ng.prototype.K;Pg.prototype.getActive=Pg.prototype.c;Pg.prototype.getMap=Pg.prototype.i;Pg.prototype.setActive=Pg.prototype.Ia;Pg.prototype.get=Pg.prototype.get;Pg.prototype.getKeys=Pg.prototype.O;Pg.prototype.getProperties=Pg.prototype.N;Pg.prototype.set=Pg.prototype.set;
Pg.prototype.setProperties=Pg.prototype.H;Pg.prototype.unset=Pg.prototype.P;Pg.prototype.changed=Pg.prototype.s;Pg.prototype.dispatchEvent=Pg.prototype.b;Pg.prototype.getRevision=Pg.prototype.L;Pg.prototype.on=Pg.prototype.J;Pg.prototype.once=Pg.prototype.once;Pg.prototype.un=Pg.prototype.K;tu.prototype.getActive=tu.prototype.c;tu.prototype.getMap=tu.prototype.i;tu.prototype.setActive=tu.prototype.Ia;tu.prototype.get=tu.prototype.get;tu.prototype.getKeys=tu.prototype.O;
tu.prototype.getProperties=tu.prototype.N;tu.prototype.set=tu.prototype.set;tu.prototype.setProperties=tu.prototype.H;tu.prototype.unset=tu.prototype.P;tu.prototype.changed=tu.prototype.s;tu.prototype.dispatchEvent=tu.prototype.b;tu.prototype.getRevision=tu.prototype.L;tu.prototype.on=tu.prototype.J;tu.prototype.once=tu.prototype.once;tu.prototype.un=tu.prototype.K;Bu.prototype.type=Bu.prototype.type;Bu.prototype.target=Bu.prototype.target;Bu.prototype.preventDefault=Bu.prototype.preventDefault;
Bu.prototype.stopPropagation=Bu.prototype.stopPropagation;Rg.prototype.getActive=Rg.prototype.c;Rg.prototype.getMap=Rg.prototype.i;Rg.prototype.setActive=Rg.prototype.Ia;Rg.prototype.get=Rg.prototype.get;Rg.prototype.getKeys=Rg.prototype.O;Rg.prototype.getProperties=Rg.prototype.N;Rg.prototype.set=Rg.prototype.set;Rg.prototype.setProperties=Rg.prototype.H;Rg.prototype.unset=Rg.prototype.P;Rg.prototype.changed=Rg.prototype.s;Rg.prototype.dispatchEvent=Rg.prototype.b;Rg.prototype.getRevision=Rg.prototype.L;
Rg.prototype.on=Rg.prototype.J;Rg.prototype.once=Rg.prototype.once;Rg.prototype.un=Rg.prototype.K;Vg.prototype.getActive=Vg.prototype.c;Vg.prototype.getMap=Vg.prototype.i;Vg.prototype.setActive=Vg.prototype.Ia;Vg.prototype.get=Vg.prototype.get;Vg.prototype.getKeys=Vg.prototype.O;Vg.prototype.getProperties=Vg.prototype.N;Vg.prototype.set=Vg.prototype.set;Vg.prototype.setProperties=Vg.prototype.H;Vg.prototype.unset=Vg.prototype.P;Vg.prototype.changed=Vg.prototype.s;Vg.prototype.dispatchEvent=Vg.prototype.b;
Vg.prototype.getRevision=Vg.prototype.L;Vg.prototype.on=Vg.prototype.J;Vg.prototype.once=Vg.prototype.once;Vg.prototype.un=Vg.prototype.K;Zg.prototype.getActive=Zg.prototype.c;Zg.prototype.getMap=Zg.prototype.i;Zg.prototype.setActive=Zg.prototype.Ia;Zg.prototype.get=Zg.prototype.get;Zg.prototype.getKeys=Zg.prototype.O;Zg.prototype.getProperties=Zg.prototype.N;Zg.prototype.set=Zg.prototype.set;Zg.prototype.setProperties=Zg.prototype.H;Zg.prototype.unset=Zg.prototype.P;Zg.prototype.changed=Zg.prototype.s;
Zg.prototype.dispatchEvent=Zg.prototype.b;Zg.prototype.getRevision=Zg.prototype.L;Zg.prototype.on=Zg.prototype.J;Zg.prototype.once=Zg.prototype.once;Zg.prototype.un=Zg.prototype.K;Ju.prototype.getActive=Ju.prototype.c;Ju.prototype.getMap=Ju.prototype.i;Ju.prototype.setActive=Ju.prototype.Ia;Ju.prototype.get=Ju.prototype.get;Ju.prototype.getKeys=Ju.prototype.O;Ju.prototype.getProperties=Ju.prototype.N;Ju.prototype.set=Ju.prototype.set;Ju.prototype.setProperties=Ju.prototype.H;Ju.prototype.unset=Ju.prototype.P;
Ju.prototype.changed=Ju.prototype.s;Ju.prototype.dispatchEvent=Ju.prototype.b;Ju.prototype.getRevision=Ju.prototype.L;Ju.prototype.on=Ju.prototype.J;Ju.prototype.once=Ju.prototype.once;Ju.prototype.un=Ju.prototype.K;Mu.prototype.type=Mu.prototype.type;Mu.prototype.target=Mu.prototype.target;Mu.prototype.preventDefault=Mu.prototype.preventDefault;Mu.prototype.stopPropagation=Mu.prototype.stopPropagation;Ou.prototype.getActive=Ou.prototype.c;Ou.prototype.getMap=Ou.prototype.i;
Ou.prototype.setActive=Ou.prototype.Ia;Ou.prototype.get=Ou.prototype.get;Ou.prototype.getKeys=Ou.prototype.O;Ou.prototype.getProperties=Ou.prototype.N;Ou.prototype.set=Ou.prototype.set;Ou.prototype.setProperties=Ou.prototype.H;Ou.prototype.unset=Ou.prototype.P;Ou.prototype.changed=Ou.prototype.s;Ou.prototype.dispatchEvent=Ou.prototype.b;Ou.prototype.getRevision=Ou.prototype.L;Ou.prototype.on=Ou.prototype.J;Ou.prototype.once=Ou.prototype.once;Ou.prototype.un=Ou.prototype.K;Su.prototype.getActive=Su.prototype.c;
Su.prototype.getMap=Su.prototype.i;Su.prototype.setActive=Su.prototype.Ia;Su.prototype.get=Su.prototype.get;Su.prototype.getKeys=Su.prototype.O;Su.prototype.getProperties=Su.prototype.N;Su.prototype.set=Su.prototype.set;Su.prototype.setProperties=Su.prototype.H;Su.prototype.unset=Su.prototype.P;Su.prototype.changed=Su.prototype.s;Su.prototype.dispatchEvent=Su.prototype.b;Su.prototype.getRevision=Su.prototype.L;Su.prototype.on=Su.prototype.J;Su.prototype.once=Su.prototype.once;Su.prototype.un=Su.prototype.K;
Yu.prototype.type=Yu.prototype.type;Yu.prototype.target=Yu.prototype.target;Yu.prototype.preventDefault=Yu.prototype.preventDefault;Yu.prototype.stopPropagation=Yu.prototype.stopPropagation;cf.prototype.get=cf.prototype.get;cf.prototype.getKeys=cf.prototype.O;cf.prototype.getProperties=cf.prototype.N;cf.prototype.set=cf.prototype.set;cf.prototype.setProperties=cf.prototype.H;cf.prototype.unset=cf.prototype.P;cf.prototype.changed=cf.prototype.s;cf.prototype.dispatchEvent=cf.prototype.b;
cf.prototype.getRevision=cf.prototype.L;cf.prototype.on=cf.prototype.J;cf.prototype.once=cf.prototype.once;cf.prototype.un=cf.prototype.K;ff.prototype.getClosestPoint=ff.prototype.Ab;ff.prototype.intersectsCoordinate=ff.prototype.sb;ff.prototype.getExtent=ff.prototype.D;ff.prototype.rotate=ff.prototype.rotate;ff.prototype.scale=ff.prototype.scale;ff.prototype.simplify=ff.prototype.Pb;ff.prototype.transform=ff.prototype.tb;ff.prototype.get=ff.prototype.get;ff.prototype.getKeys=ff.prototype.O;
ff.prototype.getProperties=ff.prototype.N;ff.prototype.set=ff.prototype.set;ff.prototype.setProperties=ff.prototype.H;ff.prototype.unset=ff.prototype.P;ff.prototype.changed=ff.prototype.s;ff.prototype.dispatchEvent=ff.prototype.b;ff.prototype.getRevision=ff.prototype.L;ff.prototype.on=ff.prototype.J;ff.prototype.once=ff.prototype.once;ff.prototype.un=ff.prototype.K;is.prototype.getFirstCoordinate=is.prototype.bc;is.prototype.getLastCoordinate=is.prototype.cc;is.prototype.getLayout=is.prototype.dc;
is.prototype.rotate=is.prototype.rotate;is.prototype.scale=is.prototype.scale;is.prototype.getClosestPoint=is.prototype.Ab;is.prototype.intersectsCoordinate=is.prototype.sb;is.prototype.getExtent=is.prototype.D;is.prototype.simplify=is.prototype.Pb;is.prototype.get=is.prototype.get;is.prototype.getKeys=is.prototype.O;is.prototype.getProperties=is.prototype.N;is.prototype.set=is.prototype.set;is.prototype.setProperties=is.prototype.H;is.prototype.unset=is.prototype.P;is.prototype.changed=is.prototype.s;
is.prototype.dispatchEvent=is.prototype.b;is.prototype.getRevision=is.prototype.L;is.prototype.on=is.prototype.J;is.prototype.once=is.prototype.once;is.prototype.un=is.prototype.K;qm.prototype.getClosestPoint=qm.prototype.Ab;qm.prototype.intersectsCoordinate=qm.prototype.sb;qm.prototype.getExtent=qm.prototype.D;qm.prototype.rotate=qm.prototype.rotate;qm.prototype.scale=qm.prototype.scale;qm.prototype.simplify=qm.prototype.Pb;qm.prototype.transform=qm.prototype.tb;qm.prototype.get=qm.prototype.get;
qm.prototype.getKeys=qm.prototype.O;qm.prototype.getProperties=qm.prototype.N;qm.prototype.set=qm.prototype.set;qm.prototype.setProperties=qm.prototype.H;qm.prototype.unset=qm.prototype.P;qm.prototype.changed=qm.prototype.s;qm.prototype.dispatchEvent=qm.prototype.b;qm.prototype.getRevision=qm.prototype.L;qm.prototype.on=qm.prototype.J;qm.prototype.once=qm.prototype.once;qm.prototype.un=qm.prototype.K;yf.prototype.getFirstCoordinate=yf.prototype.bc;yf.prototype.getLastCoordinate=yf.prototype.cc;
yf.prototype.getLayout=yf.prototype.dc;yf.prototype.rotate=yf.prototype.rotate;yf.prototype.scale=yf.prototype.scale;yf.prototype.getClosestPoint=yf.prototype.Ab;yf.prototype.intersectsCoordinate=yf.prototype.sb;yf.prototype.getExtent=yf.prototype.D;yf.prototype.simplify=yf.prototype.Pb;yf.prototype.transform=yf.prototype.tb;yf.prototype.get=yf.prototype.get;yf.prototype.getKeys=yf.prototype.O;yf.prototype.getProperties=yf.prototype.N;yf.prototype.set=yf.prototype.set;yf.prototype.setProperties=yf.prototype.H;
yf.prototype.unset=yf.prototype.P;yf.prototype.changed=yf.prototype.s;yf.prototype.dispatchEvent=yf.prototype.b;yf.prototype.getRevision=yf.prototype.L;yf.prototype.on=yf.prototype.J;yf.prototype.once=yf.prototype.once;yf.prototype.un=yf.prototype.K;M.prototype.getFirstCoordinate=M.prototype.bc;M.prototype.getLastCoordinate=M.prototype.cc;M.prototype.getLayout=M.prototype.dc;M.prototype.rotate=M.prototype.rotate;M.prototype.scale=M.prototype.scale;M.prototype.getClosestPoint=M.prototype.Ab;
M.prototype.intersectsCoordinate=M.prototype.sb;M.prototype.getExtent=M.prototype.D;M.prototype.simplify=M.prototype.Pb;M.prototype.transform=M.prototype.tb;M.prototype.get=M.prototype.get;M.prototype.getKeys=M.prototype.O;M.prototype.getProperties=M.prototype.N;M.prototype.set=M.prototype.set;M.prototype.setProperties=M.prototype.H;M.prototype.unset=M.prototype.P;M.prototype.changed=M.prototype.s;M.prototype.dispatchEvent=M.prototype.b;M.prototype.getRevision=M.prototype.L;M.prototype.on=M.prototype.J;
M.prototype.once=M.prototype.once;M.prototype.un=M.prototype.K;N.prototype.getFirstCoordinate=N.prototype.bc;N.prototype.getLastCoordinate=N.prototype.cc;N.prototype.getLayout=N.prototype.dc;N.prototype.rotate=N.prototype.rotate;N.prototype.scale=N.prototype.scale;N.prototype.getClosestPoint=N.prototype.Ab;N.prototype.intersectsCoordinate=N.prototype.sb;N.prototype.getExtent=N.prototype.D;N.prototype.simplify=N.prototype.Pb;N.prototype.transform=N.prototype.tb;N.prototype.get=N.prototype.get;
N.prototype.getKeys=N.prototype.O;N.prototype.getProperties=N.prototype.N;N.prototype.set=N.prototype.set;N.prototype.setProperties=N.prototype.H;N.prototype.unset=N.prototype.P;N.prototype.changed=N.prototype.s;N.prototype.dispatchEvent=N.prototype.b;N.prototype.getRevision=N.prototype.L;N.prototype.on=N.prototype.J;N.prototype.once=N.prototype.once;N.prototype.un=N.prototype.K;O.prototype.getFirstCoordinate=O.prototype.bc;O.prototype.getLastCoordinate=O.prototype.cc;O.prototype.getLayout=O.prototype.dc;
O.prototype.rotate=O.prototype.rotate;O.prototype.scale=O.prototype.scale;O.prototype.getClosestPoint=O.prototype.Ab;O.prototype.intersectsCoordinate=O.prototype.sb;O.prototype.getExtent=O.prototype.D;O.prototype.simplify=O.prototype.Pb;O.prototype.transform=O.prototype.tb;O.prototype.get=O.prototype.get;O.prototype.getKeys=O.prototype.O;O.prototype.getProperties=O.prototype.N;O.prototype.set=O.prototype.set;O.prototype.setProperties=O.prototype.H;O.prototype.unset=O.prototype.P;
O.prototype.changed=O.prototype.s;O.prototype.dispatchEvent=O.prototype.b;O.prototype.getRevision=O.prototype.L;O.prototype.on=O.prototype.J;O.prototype.once=O.prototype.once;O.prototype.un=O.prototype.K;P.prototype.getFirstCoordinate=P.prototype.bc;P.prototype.getLastCoordinate=P.prototype.cc;P.prototype.getLayout=P.prototype.dc;P.prototype.rotate=P.prototype.rotate;P.prototype.scale=P.prototype.scale;P.prototype.getClosestPoint=P.prototype.Ab;P.prototype.intersectsCoordinate=P.prototype.sb;
P.prototype.getExtent=P.prototype.D;P.prototype.simplify=P.prototype.Pb;P.prototype.transform=P.prototype.tb;P.prototype.get=P.prototype.get;P.prototype.getKeys=P.prototype.O;P.prototype.getProperties=P.prototype.N;P.prototype.set=P.prototype.set;P.prototype.setProperties=P.prototype.H;P.prototype.unset=P.prototype.P;P.prototype.changed=P.prototype.s;P.prototype.dispatchEvent=P.prototype.b;P.prototype.getRevision=P.prototype.L;P.prototype.on=P.prototype.J;P.prototype.once=P.prototype.once;
P.prototype.un=P.prototype.K;E.prototype.getFirstCoordinate=E.prototype.bc;E.prototype.getLastCoordinate=E.prototype.cc;E.prototype.getLayout=E.prototype.dc;E.prototype.rotate=E.prototype.rotate;E.prototype.scale=E.prototype.scale;E.prototype.getClosestPoint=E.prototype.Ab;E.prototype.intersectsCoordinate=E.prototype.sb;E.prototype.getExtent=E.prototype.D;E.prototype.simplify=E.prototype.Pb;E.prototype.transform=E.prototype.tb;E.prototype.get=E.prototype.get;E.prototype.getKeys=E.prototype.O;
E.prototype.getProperties=E.prototype.N;E.prototype.set=E.prototype.set;E.prototype.setProperties=E.prototype.H;E.prototype.unset=E.prototype.P;E.prototype.changed=E.prototype.s;E.prototype.dispatchEvent=E.prototype.b;E.prototype.getRevision=E.prototype.L;E.prototype.on=E.prototype.J;E.prototype.once=E.prototype.once;E.prototype.un=E.prototype.K;F.prototype.getFirstCoordinate=F.prototype.bc;F.prototype.getLastCoordinate=F.prototype.cc;F.prototype.getLayout=F.prototype.dc;F.prototype.rotate=F.prototype.rotate;
F.prototype.scale=F.prototype.scale;F.prototype.getClosestPoint=F.prototype.Ab;F.prototype.intersectsCoordinate=F.prototype.sb;F.prototype.getExtent=F.prototype.D;F.prototype.simplify=F.prototype.Pb;F.prototype.transform=F.prototype.tb;F.prototype.get=F.prototype.get;F.prototype.getKeys=F.prototype.O;F.prototype.getProperties=F.prototype.N;F.prototype.set=F.prototype.set;F.prototype.setProperties=F.prototype.H;F.prototype.unset=F.prototype.P;F.prototype.changed=F.prototype.s;
F.prototype.dispatchEvent=F.prototype.b;F.prototype.getRevision=F.prototype.L;F.prototype.on=F.prototype.J;F.prototype.once=F.prototype.once;F.prototype.un=F.prototype.K;Pm.prototype.readFeatures=Pm.prototype.Qa;Ym.prototype.readFeatures=Ym.prototype.Qa;Pm.prototype.readFeatures=Pm.prototype.Qa;ad.prototype.get=ad.prototype.get;ad.prototype.getKeys=ad.prototype.O;ad.prototype.getProperties=ad.prototype.N;ad.prototype.set=ad.prototype.set;ad.prototype.setProperties=ad.prototype.H;
ad.prototype.unset=ad.prototype.P;ad.prototype.changed=ad.prototype.s;ad.prototype.dispatchEvent=ad.prototype.b;ad.prototype.getRevision=ad.prototype.L;ad.prototype.on=ad.prototype.J;ad.prototype.once=ad.prototype.once;ad.prototype.un=ad.prototype.K;bd.prototype.getMap=bd.prototype.g;bd.prototype.setMap=bd.prototype.setMap;bd.prototype.setTarget=bd.prototype.i;bd.prototype.get=bd.prototype.get;bd.prototype.getKeys=bd.prototype.O;bd.prototype.getProperties=bd.prototype.N;bd.prototype.set=bd.prototype.set;
bd.prototype.setProperties=bd.prototype.H;bd.prototype.unset=bd.prototype.P;bd.prototype.changed=bd.prototype.s;bd.prototype.dispatchEvent=bd.prototype.b;bd.prototype.getRevision=bd.prototype.L;bd.prototype.on=bd.prototype.J;bd.prototype.once=bd.prototype.once;bd.prototype.un=bd.prototype.K;od.prototype.getMap=od.prototype.g;od.prototype.setMap=od.prototype.setMap;od.prototype.setTarget=od.prototype.i;od.prototype.get=od.prototype.get;od.prototype.getKeys=od.prototype.O;
od.prototype.getProperties=od.prototype.N;od.prototype.set=od.prototype.set;od.prototype.setProperties=od.prototype.H;od.prototype.unset=od.prototype.P;od.prototype.changed=od.prototype.s;od.prototype.dispatchEvent=od.prototype.b;od.prototype.getRevision=od.prototype.L;od.prototype.on=od.prototype.J;od.prototype.once=od.prototype.once;od.prototype.un=od.prototype.K;td.prototype.getMap=td.prototype.g;td.prototype.setMap=td.prototype.setMap;td.prototype.setTarget=td.prototype.i;td.prototype.get=td.prototype.get;
td.prototype.getKeys=td.prototype.O;td.prototype.getProperties=td.prototype.N;td.prototype.set=td.prototype.set;td.prototype.setProperties=td.prototype.H;td.prototype.unset=td.prototype.P;td.prototype.changed=td.prototype.s;td.prototype.dispatchEvent=td.prototype.b;td.prototype.getRevision=td.prototype.L;td.prototype.on=td.prototype.J;td.prototype.once=td.prototype.once;td.prototype.un=td.prototype.K;zk.prototype.getMap=zk.prototype.g;zk.prototype.setMap=zk.prototype.setMap;
zk.prototype.setTarget=zk.prototype.i;zk.prototype.get=zk.prototype.get;zk.prototype.getKeys=zk.prototype.O;zk.prototype.getProperties=zk.prototype.N;zk.prototype.set=zk.prototype.set;zk.prototype.setProperties=zk.prototype.H;zk.prototype.unset=zk.prototype.P;zk.prototype.changed=zk.prototype.s;zk.prototype.dispatchEvent=zk.prototype.b;zk.prototype.getRevision=zk.prototype.L;zk.prototype.on=zk.prototype.J;zk.prototype.once=zk.prototype.once;zk.prototype.un=zk.prototype.K;id.prototype.getMap=id.prototype.g;
id.prototype.setMap=id.prototype.setMap;id.prototype.setTarget=id.prototype.i;id.prototype.get=id.prototype.get;id.prototype.getKeys=id.prototype.O;id.prototype.getProperties=id.prototype.N;id.prototype.set=id.prototype.set;id.prototype.setProperties=id.prototype.H;id.prototype.unset=id.prototype.P;id.prototype.changed=id.prototype.s;id.prototype.dispatchEvent=id.prototype.b;id.prototype.getRevision=id.prototype.L;id.prototype.on=id.prototype.J;id.prototype.once=id.prototype.once;
id.prototype.un=id.prototype.K;Ek.prototype.getMap=Ek.prototype.g;Ek.prototype.setMap=Ek.prototype.setMap;Ek.prototype.setTarget=Ek.prototype.i;Ek.prototype.get=Ek.prototype.get;Ek.prototype.getKeys=Ek.prototype.O;Ek.prototype.getProperties=Ek.prototype.N;Ek.prototype.set=Ek.prototype.set;Ek.prototype.setProperties=Ek.prototype.H;Ek.prototype.unset=Ek.prototype.P;Ek.prototype.changed=Ek.prototype.s;Ek.prototype.dispatchEvent=Ek.prototype.b;Ek.prototype.getRevision=Ek.prototype.L;Ek.prototype.on=Ek.prototype.J;
Ek.prototype.once=Ek.prototype.once;Ek.prototype.un=Ek.prototype.K;kd.prototype.getMap=kd.prototype.g;kd.prototype.setMap=kd.prototype.setMap;kd.prototype.setTarget=kd.prototype.i;kd.prototype.get=kd.prototype.get;kd.prototype.getKeys=kd.prototype.O;kd.prototype.getProperties=kd.prototype.N;kd.prototype.set=kd.prototype.set;kd.prototype.setProperties=kd.prototype.H;kd.prototype.unset=kd.prototype.P;kd.prototype.changed=kd.prototype.s;kd.prototype.dispatchEvent=kd.prototype.b;
kd.prototype.getRevision=kd.prototype.L;kd.prototype.on=kd.prototype.J;kd.prototype.once=kd.prototype.once;kd.prototype.un=kd.prototype.K;Jk.prototype.getMap=Jk.prototype.g;Jk.prototype.setMap=Jk.prototype.setMap;Jk.prototype.setTarget=Jk.prototype.i;Jk.prototype.get=Jk.prototype.get;Jk.prototype.getKeys=Jk.prototype.O;Jk.prototype.getProperties=Jk.prototype.N;Jk.prototype.set=Jk.prototype.set;Jk.prototype.setProperties=Jk.prototype.H;Jk.prototype.unset=Jk.prototype.P;Jk.prototype.changed=Jk.prototype.s;
Jk.prototype.dispatchEvent=Jk.prototype.b;Jk.prototype.getRevision=Jk.prototype.L;Jk.prototype.on=Jk.prototype.J;Jk.prototype.once=Jk.prototype.once;Jk.prototype.un=Jk.prototype.K;Ok.prototype.getMap=Ok.prototype.g;Ok.prototype.setMap=Ok.prototype.setMap;Ok.prototype.setTarget=Ok.prototype.i;Ok.prototype.get=Ok.prototype.get;Ok.prototype.getKeys=Ok.prototype.O;Ok.prototype.getProperties=Ok.prototype.N;Ok.prototype.set=Ok.prototype.set;Ok.prototype.setProperties=Ok.prototype.H;Ok.prototype.unset=Ok.prototype.P;
Ok.prototype.changed=Ok.prototype.s;Ok.prototype.dispatchEvent=Ok.prototype.b;Ok.prototype.getRevision=Ok.prototype.L;Ok.prototype.on=Ok.prototype.J;Ok.prototype.once=Ok.prototype.once;Ok.prototype.un=Ok.prototype.K;
  return OPENLAYERS.ol;
}));

;
(function (jQuery, Drupal) {
  Drupal.behaviors.olCustom = {
    attach: function (context, settings) {


      // Intialize Map
      var nodeValueID = jQuery("#map").attr("data-nid");
      var basePath = location.protocol + "//" + location.hostname + drupalSettings.path.baseUrl;

      if (nodeValueID !== undefined) {
        var jsonURL = basePath + "location/export" + "/" + nodeValueID
        jQuery(function() {
          jQuery.getJSON(jsonURL, function(results) {
            jQuery.each(results, function(index) {
              var point_long = parseFloat(results[index].latMapDetail);
              var point_lat = parseFloat(results[index].longMapDetail);
              var zoomLevel = parseFloat(results[index].zoomDetail);
              var poi = new ol.Feature({
                geometry: new ol.geom.Point(ol.proj.fromLonLat([point_lat, point_long]))
              });
              poi.setStyle(new ol.style.Style({
                image: new ol.style.Icon( /** @type {olx.style.IconOptions} */ ({
                  src: basePath + '/profiles/vznrw/theme/vz/map/img/iconMap.png'
                }))
              }));
              var vectorSource = new ol.source.Vector({
                features: [poi]
              });
              var vectorLayer = new ol.layer.Vector({
                source: vectorSource
              });
          var attribution = new ol.control.Attribution({
            collapsible: false
          });
              var map = new ol.Map({
                target: 'map',
                layers: [
                  new ol.layer.Tile({
                    source: new ol.source.OSM({
              attributions: '© <a href="https://www.openstreetmap.org/copyright/en">OpenStreetMap-Mitwirkende</a>'
              }),
                  }),
                  vectorLayer
                ],
                view: new ol.View({
                  center: ol.proj.fromLonLat([point_lat, point_long]),
                  zoom: zoomLevel
                }),
                controls: ol.control.defaults({
                  attribution: false,
                  zoom: false,
                }).extend([attribution]),
                interactions: ol.interaction.defaults({ mouseWheelZoom: false, doubleClickZoom: false })
              });
              var dragPan;
              map.getInteractions().forEach(function(interaction) {
                if (interaction instanceof ol.interaction.DragPan) {
                  dragPan = interaction;
                }
              }, this);
              if (dragPan) {
                map.removeInteraction(dragPan);
              }
            });
          })
        });
      }


      // On Click
      jQuery(".pop_up").click(function(event) {
        event.preventDefault();
        event.stopPropagation();
        jQuery(document.body).append("<div class='bg_overlay'></div>")
        jQuery(".mapPopUp").addClass("pop-up").find(".ol-viewport").remove();
        jQuery(".mapPopUp").append("<div class='close_up'>&#x2716</div><div class='loading_gif'></div>");
        jQuery(function() {
          jQuery(".loading_gif").show();
          jQuery.getJSON(jsonURL, function(results) {
            jQuery(".loading_gif").hide();
            jQuery.each(results, function(index) {
              var point_long = parseFloat(results[index].latMapDetail);
              var point_lat = parseFloat(results[index].longMapDetail);
              var zoomLevel = parseFloat(results[index].zoomDetail);
              var poi = new ol.Feature({
                geometry: new ol.geom.Point(ol.proj.fromLonLat([point_lat, point_long]))
              })
              poi.setStyle(new ol.style.Style({
                image: new ol.style.Icon( /** @type {olx.style.IconOptions} */ ({
                  src: basePath + '/profiles/vznrw/theme/vz/map/img/iconMap.png'
                }))
              }));
              var vectorSource = new ol.source.Vector({
                features: [poi]
              });
              var vectorLayer = new ol.layer.Vector({
                source: vectorSource
              });
          var attribution = new ol.control.Attribution({
            collapsible: false
          });
              var map = new ol.Map({
                target: 'mapPopUp',
                layers: [
                  new ol.layer.Tile({
                    source: new ol.source.OSM({
                attributions: '© <a href="https://www.openstreetmap.org/copyright/en">OpenStreetMap-Mitwirkende</a>'
              }),
                  }),
                  vectorLayer
                ],
                view: new ol.View({
                  center: ol.proj.fromLonLat([point_lat, point_long]),
                  zoom: zoomLevel
                }),
                controls: ol.control.defaults({
                  attribution: false,
                }).extend([attribution]),
              });
            });
          });
        });
      });
      // Outside click on window
      jQuery(window).click(function() {
        jQuery(".mapPopUp").find(".ol-viewport, .close_up, .loading_gif").remove();
        jQuery(".mapPopUp").removeClass("pop-up");
        jQuery(document.body).find(".bg_overlay").remove();
      });
      // On map pop up click
      jQuery(".mapPopUp").click(function(event) {
        if (!jQuery(event.target).is('.close_up')) {
          event.stopPropagation();
        }
      });
    }
  }
})(jQuery, Drupal);
;
/**
 * @file
 * External links js file.
 */

(function ($, Drupal, drupalSettings) {

  'use strict';

  Drupal.extlink = Drupal.extlink || {};

  Drupal.extlink.attach = function (context, drupalSettings) {
    if (typeof drupalSettings.data === 'undefined' || !drupalSettings.data.hasOwnProperty('extlink')) {
      return;
    }

    // Define the jQuery method (either 'append' or 'prepend') of placing the
    // icon, defaults to 'append'.
    var extIconPlacement = 'append';
    if (drupalSettings.data.extlink.extIconPlacement && drupalSettings.data.extlink.extIconPlacement != '0') {
          extIconPlacement = drupalSettings.data.extlink.extIconPlacement;
        }

    // Strip the host name down, removing ports, subdomains, or www.
    var pattern = /^(([^\/:]+?\.)*)([^\.:]{1,})((\.[a-z0-9]{1,253})*)(:[0-9]{1,5})?$/;
    var host = window.location.host.replace(pattern, '$2$3$6');
    var subdomain = window.location.host.replace(host, '');

    // Determine what subdomains are considered internal.
    var subdomains;
    if (drupalSettings.data.extlink.extSubdomains) {
      subdomains = '([^/]*\\.)?';
    }
    else if (subdomain === 'www.' || subdomain === '') {
      subdomains = '(www\\.)?';
    }
    else {
      subdomains = subdomain.replace('.', '\\.');
    }

    // Whitelisted domains.
    var whitelistedDomains = false;
    if (drupalSettings.data.extlink.whitelistedDomains) {
      whitelistedDomains = [];
      for (var i = 0; i < drupalSettings.data.extlink.whitelistedDomains.length; i++) {
        whitelistedDomains.push(new RegExp('^https?:\\/\\/' + drupalSettings.data.extlink.whitelistedDomains[i].replace(/(\r\n|\n|\r)/gm,'') + '.*$', 'i'));
      }
    }

    // Build regular expressions that define an internal link.
    var internal_link = new RegExp('^https?://([^@]*@)?' + subdomains + host, 'i');

    // Extra internal link matching.
    var extInclude = false;
    if (drupalSettings.data.extlink.extInclude) {
      extInclude = new RegExp(drupalSettings.data.extlink.extInclude.replace(/\\/, '\\'), 'i');
    }

    // Extra external link matching.
    var extExclude = false;
    if (drupalSettings.data.extlink.extExclude) {
      extExclude = new RegExp(drupalSettings.data.extlink.extExclude.replace(/\\/, '\\'), 'i');
    }

    // Extra external link CSS selector exclusion.
    var extCssExclude = false;
    if (drupalSettings.data.extlink.extCssExclude) {
      extCssExclude = drupalSettings.data.extlink.extCssExclude;
    }

    // Extra external link CSS selector explicit.
    var extCssExplicit = false;
    if (drupalSettings.data.extlink.extCssExplicit) {
      extCssExplicit = drupalSettings.data.extlink.extCssExplicit;
    }

    // Find all links which are NOT internal and begin with http as opposed
    // to ftp://, javascript:, etc. other kinds of links.
    // When operating on the 'this' variable, the host has been appended to
    // all links by the browser, even local ones.
    // In jQuery 1.1 and higher, we'd use a filter method here, but it is not
    // available in jQuery 1.0 (Drupal 5 default).
    var external_links = [];
    var mailto_links = [];
    $('a:not([data-extlink]), area:not([data-extlink])', context).each(function (el) {
      try {
        var url = '';
        if (typeof this.href == 'string') {
          url = this.href.toLowerCase();
        }
        // Handle SVG links (xlink:href).
        else if (typeof this.href == 'object') {
          url = this.href.baseVal;
        }
        if (url.indexOf('http') === 0
          && ((!internal_link.test(url) && !(extExclude && extExclude.test(url))) || (extInclude && extInclude.test(url)))
          && !(extCssExclude && $(this).is(extCssExclude))
          && !(extCssExclude && $(this).parents(extCssExclude).length > 0)
          && !(extCssExplicit && $(this).parents(extCssExplicit).length < 1)) {
          var match = false;
          if (whitelistedDomains) {
            for (var i = 0; i < whitelistedDomains.length; i++) {
              if (whitelistedDomains[i].test(url)) {
                match = true;
                break;
              }
            }
          }
          if (!match) {
            external_links.push(this);
          }
        }
        // Do not include area tags with begin with mailto: (this prohibits
        // icons from being added to image-maps).
        else if (this.tagName !== 'AREA'
          && url.indexOf('mailto:') === 0
          && !(extCssExclude && $(this).parents(extCssExclude).length > 0)
          && !(extCssExplicit && $(this).parents(extCssExplicit).length < 1)) {
          mailto_links.push(this);
        }
      }
      // IE7 throws errors often when dealing with irregular links, such as:
      // <a href="node/10"></a> Empty tags.
      // <a href="http://user:pass@example.com">example</a> User:pass syntax.
      catch (error) {
        return false;
      }
    });

    if (drupalSettings.data.extlink.extClass !== '0' && drupalSettings.data.extlink.extClass !== '') {
      Drupal.extlink.applyClassAndSpan(external_links, drupalSettings.data.extlink.extClass, extIconPlacement);
    }

    if (drupalSettings.data.extlink.mailtoClass !== '0' && drupalSettings.data.extlink.mailtoClass !== '') {
      Drupal.extlink.applyClassAndSpan(mailto_links, drupalSettings.data.extlink.mailtoClass, extIconPlacement);
    }

    if (drupalSettings.data.extlink.extTarget) {
      // Apply the target attribute to all links.
      $(external_links).filter(function () {
        // Filter out links with target set if option specified.
        return !(drupalSettings.data.extlink.extTargetNoOverride && $(this).is('a[target]'));
      }).attr({target: '_blank'});

      // Add noopener rel attribute to combat phishing.
      $(external_links).attr('rel', function (i, val) {
        // If no rel attribute is present, create one with the value noopener.
        if (val === null || typeof val === 'undefined') {
          return 'noopener';
        }
        // Check to see if rel contains noopener. Add what doesn't exist.
        if (val.indexOf('noopener') > -1) {
          if (val.indexOf('noopener') === -1) {
            return val + ' noopener';
          }
          // Noopener exists. Nothing needs to be added.
          else {
            return val;
          }
        }
        // Else, append noopener to val.
        else {
          return val + ' noopener';
        }
      });
    }

    if (drupalSettings.data.extlink.extNofollow) {
      $(external_links).attr('rel', function (i, val) {
        // When the link does not have a rel attribute set it to 'nofollow'.
        if (val === null || typeof val === 'undefined') {
          return 'nofollow';
        }
        var target = 'nofollow';
        // Change the target, if not overriding follow.
        if (drupalSettings.data.extlink.extFollowNoOverride) {
          target = 'follow';
        }
        if (val.indexOf(target) === -1) {
          return val + ' nofollow';
        }
        return val;
      });
    }

    if (drupalSettings.data.extlink.extNoreferrer) {
      $(external_links).attr('rel', function (i, val) {
        // When the link does not have a rel attribute set it to 'noreferrer'.
        if (val === null || typeof val === 'undefined') {
          return 'noreferrer';
        }
        if (val.indexOf('noreferrer') === -1) {
          return val + ' noreferrer';
        }
        return val;
      });
    }

    Drupal.extlink = Drupal.extlink || {};

    // Set up default click function for the external links popup. This should be
    // overridden by modules wanting to alter the popup.
    Drupal.extlink.popupClickHandler = Drupal.extlink.popupClickHandler || function () {
      if (drupalSettings.data.extlink.extAlert) {
        return confirm(drupalSettings.data.extlink.extAlertText);
      }
    };

    $(external_links).off("click.extlink");
    $(external_links).on("click.extlink", function (e) {
      return Drupal.extlink.popupClickHandler(e, this);
    });
  };

  /**
   * Apply a class and a trailing <span> to all links not containing images.
   *
   * @param {object[]} links
   *   An array of DOM elements representing the links.
   * @param {string} class_name
   *   The class to apply to the links.
   * @param {string} icon_placement
   *   'append' or 'prepend' the icon to the link.
   */
  Drupal.extlink.applyClassAndSpan = function (links, class_name, icon_placement) {
    var $links_to_process;
    if (drupalSettings.data.extlink.extImgClass) {
      $links_to_process = $(links);
    }
    else {
      var links_with_images = $(links).find('img, svg').parents('a');
      $links_to_process = $(links).not(links_with_images);
    }

    if (class_name !== '0') {
      $links_to_process.addClass(class_name);
    }

    // Add data-extlink attribute.
    $links_to_process.attr('data-extlink', '');

    var i;
    var length = $links_to_process.length;
    for (i = 0; i < length; i++) {
      var $link = $($links_to_process[i]);
      if (drupalSettings.data.extlink.extUseFontAwesome) {
        if (class_name === drupalSettings.data.extlink.mailtoClass) {
          $link[icon_placement]('<span class="fa-' + class_name + ' extlink"><span class="' + drupalSettings.data.extlink.extFaMailtoClasses + '" aria-label="' + drupalSettings.data.extlink.mailtoLabel + '"></span></span>');
        }
        else {
          $link[icon_placement]('<span class="fa-' + class_name + ' extlink"><span class="' + drupalSettings.data.extlink.extFaLinkClasses + '" aria-label="' + drupalSettings.data.extlink.extLabel + '"></span></span>');
        }
      }
      else {
        if (class_name === drupalSettings.data.extlink.mailtoClass) {
          $link[icon_placement]('<svg focusable="false" class="' + class_name + '" role="img" aria-label="' + drupalSettings.data.extlink.mailtoLabel + '" xmlns="http://www.w3.org/2000/svg" viewBox="0 10 70 20"><metadata><sfw xmlns="http://ns.adobe.com/SaveForWeb/1.0/"><sliceSourceBounds y="-8160" x="-8165" width="16389" height="16384" bottomLeftOrigin="true"/><optimizationSettings><targetSettings targetSettingsID="0" fileFormat="PNG24Format"><PNG24Format transparency="true" filtered="false" interlaced="false" noMatteColor="false" matteColor="#FFFFFF"/></targetSettings></optimizationSettings></sfw></metadata><title>' + drupalSettings.data.extlink.mailtoLabel + '</title><path d="M56 14H8c-1.1 0-2 0.9-2 2v32c0 1.1 0.9 2 2 2h48c1.1 0 2-0.9 2-2V16C58 14.9 57.1 14 56 14zM50.5 18L32 33.4 13.5 18H50.5zM10 46V20.3l20.7 17.3C31.1 37.8 31.5 38 32 38s0.9-0.2 1.3-0.5L54 20.3V46H10z"/></svg>');
        }
        else {
          $link[icon_placement]('<svg focusable="false" class="' + class_name + '" role="img" aria-label="' + drupalSettings.data.extlink.extLabel + '" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 40"><metadata><sfw xmlns="http://ns.adobe.com/SaveForWeb/1.0/"><sliceSourceBounds y="-8160" x="-8165" width="16389" height="16384" bottomLeftOrigin="true"/><optimizationSettings><targetSettings targetSettingsID="0" fileFormat="PNG24Format"><PNG24Format transparency="true" filtered="false" interlaced="false" noMatteColor="false" matteColor="#FFFFFF"/></targetSettings></optimizationSettings></sfw></metadata><title>' + drupalSettings.data.extlink.extLabel + '</title><path d="M48 26c-1.1 0-2 0.9-2 2v26H10V18h26c1.1 0 2-0.9 2-2s-0.9-2-2-2H8c-1.1 0-2 0.9-2 2v40c0 1.1 0.9 2 2 2h40c1.1 0 2-0.9 2-2V28C50 26.9 49.1 26 48 26z"/><path d="M56 6H44c-1.1 0-2 0.9-2 2s0.9 2 2 2h7.2L30.6 30.6c-0.8 0.8-0.8 2 0 2.8C31 33.8 31.5 34 32 34s1-0.2 1.4-0.6L54 12.8V20c0 1.1 0.9 2 2 2s2-0.9 2-2V8C58 6.9 57.1 6 56 6z"/></svg>');
        }
      }
    }
  };

  Drupal.behaviors.extlink = Drupal.behaviors.extlink || {};
  Drupal.behaviors.extlink.attach = function (context, drupalSettings) {
    // Backwards compatibility, for the benefit of modules overriding extlink
    // functionality by defining an "extlinkAttach" global function.
    if (typeof extlinkAttach === 'function') {
      extlinkAttach(context);
    }
    else {
      Drupal.extlink.attach(context, drupalSettings);
    }
  };

})(jQuery, Drupal, drupalSettings);
;
/**
 * Created by bbadgujar on 6/20/2017 for 344.
 */

(function ($, Drupal, drupalSettings) {
  jQuery("[id]").each(function () {
    var ids = jQuery('[id="' + this.id + '"]');
    if (ids.length > 1 && ids[0] == this) {
      this.id = this.id + "--" + ids.length;
      var id_custom = this.id;
      jQuery(this).next("label").attr("for", id_custom);
    }
  });
})(jQuery, Drupal, drupalSettings);
;
/*!
 * jQuery Form Plugin
 * version: 4.3.0
 * Requires jQuery v1.7.2 or later
 * Project repository: https://github.com/jquery-form/form

 * Copyright 2017 Kevin Morris
 * Copyright 2006 M. Alsup

 * Dual licensed under the LGPL-2.1+ or MIT licenses
 * https://github.com/jquery-form/form#license

 * This library is free software; you can redistribute it and/or
 * modify it under the terms of the GNU Lesser General Public
 * License as published by the Free Software Foundation; either
 * version 2.1 of the License, or (at your option) any later version.
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * Lesser General Public License for more details.
 */
!function(r){"function"==typeof define&&define.amd?define(["jquery"],r):"object"==typeof module&&module.exports?module.exports=function(e,t){return void 0===t&&(t="undefined"!=typeof window?require("jquery"):require("jquery")(e)),r(t),t}:r(jQuery)}(function(q){"use strict";var m=/\r?\n/g,S={};S.fileapi=void 0!==q('<input type="file">').get(0).files,S.formdata=void 0!==window.FormData;var _=!!q.fn.prop;function o(e){var t=e.data;e.isDefaultPrevented()||(e.preventDefault(),q(e.target).closest("form").ajaxSubmit(t))}function i(e){var t=e.target,r=q(t);if(!r.is("[type=submit],[type=image]")){var a=r.closest("[type=submit]");if(0===a.length)return;t=a[0]}var n,o=t.form;"image"===(o.clk=t).type&&(void 0!==e.offsetX?(o.clk_x=e.offsetX,o.clk_y=e.offsetY):"function"==typeof q.fn.offset?(n=r.offset(),o.clk_x=e.pageX-n.left,o.clk_y=e.pageY-n.top):(o.clk_x=e.pageX-t.offsetLeft,o.clk_y=e.pageY-t.offsetTop)),setTimeout(function(){o.clk=o.clk_x=o.clk_y=null},100)}function N(){var e;q.fn.ajaxSubmit.debug&&(e="[jquery.form] "+Array.prototype.join.call(arguments,""),window.console&&window.console.log?window.console.log(e):window.opera&&window.opera.postError&&window.opera.postError(e))}q.fn.attr2=function(){if(!_)return this.attr.apply(this,arguments);var e=this.prop.apply(this,arguments);return e&&e.jquery||"string"==typeof e?e:this.attr.apply(this,arguments)},q.fn.ajaxSubmit=function(M,e,t,r){if(!this.length)return N("ajaxSubmit: skipping submit process - no element selected"),this;var O,a,n,o,X=this;"function"==typeof M?M={success:M}:"string"==typeof M||!1===M&&0<arguments.length?(M={url:M,data:e,dataType:t},"function"==typeof r&&(M.success=r)):void 0===M&&(M={}),O=M.method||M.type||this.attr2("method"),n=(n=(n="string"==typeof(a=M.url||this.attr2("action"))?q.trim(a):"")||window.location.href||"")&&(n.match(/^([^#]+)/)||[])[1],o=/(MSIE|Trident)/.test(navigator.userAgent||"")&&/^https/i.test(window.location.href||"")?"javascript:false":"about:blank",M=q.extend(!0,{url:n,success:q.ajaxSettings.success,type:O||q.ajaxSettings.type,iframeSrc:o},M);var i={};if(this.trigger("form-pre-serialize",[this,M,i]),i.veto)return N("ajaxSubmit: submit vetoed via form-pre-serialize trigger"),this;if(M.beforeSerialize&&!1===M.beforeSerialize(this,M))return N("ajaxSubmit: submit aborted via beforeSerialize callback"),this;var s=M.traditional;void 0===s&&(s=q.ajaxSettings.traditional);var u,c,C=[],l=this.formToArray(M.semantic,C,M.filtering);if(M.data&&(c=q.isFunction(M.data)?M.data(l):M.data,M.extraData=c,u=q.param(c,s)),M.beforeSubmit&&!1===M.beforeSubmit(l,this,M))return N("ajaxSubmit: submit aborted via beforeSubmit callback"),this;if(this.trigger("form-submit-validate",[l,this,M,i]),i.veto)return N("ajaxSubmit: submit vetoed via form-submit-validate trigger"),this;var f=q.param(l,s);u&&(f=f?f+"&"+u:u),"GET"===M.type.toUpperCase()?(M.url+=(0<=M.url.indexOf("?")?"&":"?")+f,M.data=null):M.data=f;var d,m,p,h=[];M.resetForm&&h.push(function(){X.resetForm()}),M.clearForm&&h.push(function(){X.clearForm(M.includeHidden)}),!M.dataType&&M.target?(d=M.success||function(){},h.push(function(e,t,r){var a=arguments,n=M.replaceTarget?"replaceWith":"html";q(M.target)[n](e).each(function(){d.apply(this,a)})})):M.success&&(q.isArray(M.success)?q.merge(h,M.success):h.push(M.success)),M.success=function(e,t,r){for(var a=M.context||this,n=0,o=h.length;n<o;n++)h[n].apply(a,[e,t,r||X,X])},M.error&&(m=M.error,M.error=function(e,t,r){var a=M.context||this;m.apply(a,[e,t,r,X])}),M.complete&&(p=M.complete,M.complete=function(e,t){var r=M.context||this;p.apply(r,[e,t,X])});var v=0<q("input[type=file]:enabled",this).filter(function(){return""!==q(this).val()}).length,g="multipart/form-data",x=X.attr("enctype")===g||X.attr("encoding")===g,y=S.fileapi&&S.formdata;N("fileAPI :"+y);var b,T=(v||x)&&!y;!1!==M.iframe&&(M.iframe||T)?M.closeKeepAlive?q.get(M.closeKeepAlive,function(){b=w(l)}):b=w(l):b=(v||x)&&y?function(e){for(var r=new FormData,t=0;t<e.length;t++)r.append(e[t].name,e[t].value);if(M.extraData){var a=function(e){var t,r,a=q.param(e,M.traditional).split("&"),n=a.length,o=[];for(t=0;t<n;t++)a[t]=a[t].replace(/\+/g," "),r=a[t].split("="),o.push([decodeURIComponent(r[0]),decodeURIComponent(r[1])]);return o}(M.extraData);for(t=0;t<a.length;t++)a[t]&&r.append(a[t][0],a[t][1])}M.data=null;var n=q.extend(!0,{},q.ajaxSettings,M,{contentType:!1,processData:!1,cache:!1,type:O||"POST"});M.uploadProgress&&(n.xhr=function(){var e=q.ajaxSettings.xhr();return e.upload&&e.upload.addEventListener("progress",function(e){var t=0,r=e.loaded||e.position,a=e.total;e.lengthComputable&&(t=Math.ceil(r/a*100)),M.uploadProgress(e,r,a,t)},!1),e});n.data=null;var o=n.beforeSend;return n.beforeSend=function(e,t){M.formData?t.data=M.formData:t.data=r,o&&o.call(this,e,t)},q.ajax(n)}(l):q.ajax(M),X.removeData("jqxhr").data("jqxhr",b);for(var j=0;j<C.length;j++)C[j]=null;return this.trigger("form-submit-notify",[this,M]),this;function w(e){var t,r,l,f,o,d,m,p,a,n,h,v,i=X[0],g=q.Deferred();if(g.abort=function(e){p.abort(e)},e)for(r=0;r<C.length;r++)t=q(C[r]),_?t.prop("disabled",!1):t.removeAttr("disabled");(l=q.extend(!0,{},q.ajaxSettings,M)).context=l.context||l,o="jqFormIO"+(new Date).getTime();var s=i.ownerDocument,u=X.closest("body");if(l.iframeTarget?(n=(d=q(l.iframeTarget,s)).attr2("name"))?o=n:d.attr2("name",o):(d=q('<iframe name="'+o+'" src="'+l.iframeSrc+'" />',s)).css({position:"absolute",top:"-1000px",left:"-1000px"}),m=d[0],p={aborted:0,responseText:null,responseXML:null,status:0,statusText:"n/a",getAllResponseHeaders:function(){},getResponseHeader:function(){},setRequestHeader:function(){},abort:function(e){var t="timeout"===e?"timeout":"aborted";N("aborting upload... "+t),this.aborted=1;try{m.contentWindow.document.execCommand&&m.contentWindow.document.execCommand("Stop")}catch(e){}d.attr("src",l.iframeSrc),p.error=t,l.error&&l.error.call(l.context,p,t,e),f&&q.event.trigger("ajaxError",[p,l,t]),l.complete&&l.complete.call(l.context,p,t)}},(f=l.global)&&0==q.active++&&q.event.trigger("ajaxStart"),f&&q.event.trigger("ajaxSend",[p,l]),l.beforeSend&&!1===l.beforeSend.call(l.context,p,l))return l.global&&q.active--,g.reject(),g;if(p.aborted)return g.reject(),g;(a=i.clk)&&(n=a.name)&&!a.disabled&&(l.extraData=l.extraData||{},l.extraData[n]=a.value,"image"===a.type&&(l.extraData[n+".x"]=i.clk_x,l.extraData[n+".y"]=i.clk_y));var x=1,y=2;function b(t){var r=null;try{t.contentWindow&&(r=t.contentWindow.document)}catch(e){N("cannot get iframe.contentWindow document: "+e)}if(r)return r;try{r=t.contentDocument?t.contentDocument:t.document}catch(e){N("cannot get iframe.contentDocument: "+e),r=t.document}return r}var c=q("meta[name=csrf-token]").attr("content"),T=q("meta[name=csrf-param]").attr("content");function j(){var e=X.attr2("target"),t=X.attr2("action"),r=X.attr("enctype")||X.attr("encoding")||"multipart/form-data";i.setAttribute("target",o),O&&!/post/i.test(O)||i.setAttribute("method","POST"),t!==l.url&&i.setAttribute("action",l.url),l.skipEncodingOverride||O&&!/post/i.test(O)||X.attr({encoding:"multipart/form-data",enctype:"multipart/form-data"}),l.timeout&&(v=setTimeout(function(){h=!0,A(x)},l.timeout));var a=[];try{if(l.extraData)for(var n in l.extraData)l.extraData.hasOwnProperty(n)&&(q.isPlainObject(l.extraData[n])&&l.extraData[n].hasOwnProperty("name")&&l.extraData[n].hasOwnProperty("value")?a.push(q('<input type="hidden" name="'+l.extraData[n].name+'">',s).val(l.extraData[n].value).appendTo(i)[0]):a.push(q('<input type="hidden" name="'+n+'">',s).val(l.extraData[n]).appendTo(i)[0]));l.iframeTarget||d.appendTo(u),m.attachEvent?m.attachEvent("onload",A):m.addEventListener("load",A,!1),setTimeout(function e(){try{var t=b(m).readyState;N("state = "+t),t&&"uninitialized"===t.toLowerCase()&&setTimeout(e,50)}catch(e){N("Server abort: ",e," (",e.name,")"),A(y),v&&clearTimeout(v),v=void 0}},15);try{i.submit()}catch(e){document.createElement("form").submit.apply(i)}}finally{i.setAttribute("action",t),i.setAttribute("enctype",r),e?i.setAttribute("target",e):X.removeAttr("target"),q(a).remove()}}T&&c&&(l.extraData=l.extraData||{},l.extraData[T]=c),l.forceSync?j():setTimeout(j,10);var w,S,k,D=50;function A(e){if(!p.aborted&&!k){if((S=b(m))||(N("cannot access response document"),e=y),e===x&&p)return p.abort("timeout"),void g.reject(p,"timeout");if(e===y&&p)return p.abort("server abort"),void g.reject(p,"error","server abort");if(S&&S.location.href!==l.iframeSrc||h){m.detachEvent?m.detachEvent("onload",A):m.removeEventListener("load",A,!1);var t,r="success";try{if(h)throw"timeout";var a="xml"===l.dataType||S.XMLDocument||q.isXMLDoc(S);if(N("isXml="+a),!a&&window.opera&&(null===S.body||!S.body.innerHTML)&&--D)return N("requeing onLoad callback, DOM not available"),void setTimeout(A,250);var n=S.body?S.body:S.documentElement;p.responseText=n?n.innerHTML:null,p.responseXML=S.XMLDocument?S.XMLDocument:S,a&&(l.dataType="xml"),p.getResponseHeader=function(e){return{"content-type":l.dataType}[e.toLowerCase()]},n&&(p.status=Number(n.getAttribute("status"))||p.status,p.statusText=n.getAttribute("statusText")||p.statusText);var o,i,s,u=(l.dataType||"").toLowerCase(),c=/(json|script|text)/.test(u);c||l.textarea?(o=S.getElementsByTagName("textarea")[0])?(p.responseText=o.value,p.status=Number(o.getAttribute("status"))||p.status,p.statusText=o.getAttribute("statusText")||p.statusText):c&&(i=S.getElementsByTagName("pre")[0],s=S.getElementsByTagName("body")[0],i?p.responseText=i.textContent?i.textContent:i.innerText:s&&(p.responseText=s.textContent?s.textContent:s.innerText)):"xml"===u&&!p.responseXML&&p.responseText&&(p.responseXML=F(p.responseText));try{w=E(p,u,l)}catch(e){r="parsererror",p.error=t=e||r}}catch(e){N("error caught: ",e),r="error",p.error=t=e||r}p.aborted&&(N("upload aborted"),r=null),p.status&&(r=200<=p.status&&p.status<300||304===p.status?"success":"error"),"success"===r?(l.success&&l.success.call(l.context,w,"success",p),g.resolve(p.responseText,"success",p),f&&q.event.trigger("ajaxSuccess",[p,l])):r&&(void 0===t&&(t=p.statusText),l.error&&l.error.call(l.context,p,r,t),g.reject(p,"error",t),f&&q.event.trigger("ajaxError",[p,l,t])),f&&q.event.trigger("ajaxComplete",[p,l]),f&&!--q.active&&q.event.trigger("ajaxStop"),l.complete&&l.complete.call(l.context,p,r),k=!0,l.timeout&&clearTimeout(v),setTimeout(function(){l.iframeTarget?d.attr("src",l.iframeSrc):d.remove(),p.responseXML=null},100)}}}var F=q.parseXML||function(e,t){return window.ActiveXObject?((t=new ActiveXObject("Microsoft.XMLDOM")).async="false",t.loadXML(e)):t=(new DOMParser).parseFromString(e,"text/xml"),t&&t.documentElement&&"parsererror"!==t.documentElement.nodeName?t:null},L=q.parseJSON||function(e){return window.eval("("+e+")")},E=function(e,t,r){var a=e.getResponseHeader("content-type")||"",n=("xml"===t||!t)&&0<=a.indexOf("xml"),o=n?e.responseXML:e.responseText;return n&&"parsererror"===o.documentElement.nodeName&&q.error&&q.error("parsererror"),r&&r.dataFilter&&(o=r.dataFilter(o,t)),"string"==typeof o&&(("json"===t||!t)&&0<=a.indexOf("json")?o=L(o):("script"===t||!t)&&0<=a.indexOf("javascript")&&q.globalEval(o)),o};return g}},q.fn.ajaxForm=function(e,t,r,a){if(("string"==typeof e||!1===e&&0<arguments.length)&&(e={url:e,data:t,dataType:r},"function"==typeof a&&(e.success=a)),(e=e||{}).delegation=e.delegation&&q.isFunction(q.fn.on),e.delegation||0!==this.length)return e.delegation?(q(document).off("submit.form-plugin",this.selector,o).off("click.form-plugin",this.selector,i).on("submit.form-plugin",this.selector,e,o).on("click.form-plugin",this.selector,e,i),this):(e.beforeFormUnbind&&e.beforeFormUnbind(this,e),this.ajaxFormUnbind().on("submit.form-plugin",e,o).on("click.form-plugin",e,i));var n={s:this.selector,c:this.context};return!q.isReady&&n.s?(N("DOM not ready, queuing ajaxForm"),q(function(){q(n.s,n.c).ajaxForm(e)})):N("terminating; zero elements found by selector"+(q.isReady?"":" (DOM not ready)")),this},q.fn.ajaxFormUnbind=function(){return this.off("submit.form-plugin click.form-plugin")},q.fn.formToArray=function(e,t,r){var a=[];if(0===this.length)return a;var n,o,i,s,u,c,l,f,d,m,p=this[0],h=this.attr("id"),v=(v=e||void 0===p.elements?p.getElementsByTagName("*"):p.elements)&&q.makeArray(v);if(h&&(e||/(Edge|Trident)\//.test(navigator.userAgent))&&(n=q(':input[form="'+h+'"]').get()).length&&(v=(v||[]).concat(n)),!v||!v.length)return a;for(q.isFunction(r)&&(v=q.map(v,r)),o=0,c=v.length;o<c;o++)if((m=(u=v[o]).name)&&!u.disabled)if(e&&p.clk&&"image"===u.type)p.clk===u&&(a.push({name:m,value:q(u).val(),type:u.type}),a.push({name:m+".x",value:p.clk_x},{name:m+".y",value:p.clk_y}));else if((s=q.fieldValue(u,!0))&&s.constructor===Array)for(t&&t.push(u),i=0,l=s.length;i<l;i++)a.push({name:m,value:s[i]});else if(S.fileapi&&"file"===u.type){t&&t.push(u);var g=u.files;if(g.length)for(i=0;i<g.length;i++)a.push({name:m,value:g[i],type:u.type});else a.push({name:m,value:"",type:u.type})}else null!=s&&(t&&t.push(u),a.push({name:m,value:s,type:u.type,required:u.required}));return e||!p.clk||(m=(d=(f=q(p.clk))[0]).name)&&!d.disabled&&"image"===d.type&&(a.push({name:m,value:f.val()}),a.push({name:m+".x",value:p.clk_x},{name:m+".y",value:p.clk_y})),a},q.fn.formSerialize=function(e){return q.param(this.formToArray(e))},q.fn.fieldSerialize=function(n){var o=[];return this.each(function(){var e=this.name;if(e){var t=q.fieldValue(this,n);if(t&&t.constructor===Array)for(var r=0,a=t.length;r<a;r++)o.push({name:e,value:t[r]});else null!=t&&o.push({name:this.name,value:t})}}),q.param(o)},q.fn.fieldValue=function(e){for(var t=[],r=0,a=this.length;r<a;r++){var n=this[r],o=q.fieldValue(n,e);null==o||o.constructor===Array&&!o.length||(o.constructor===Array?q.merge(t,o):t.push(o))}return t},q.fieldValue=function(e,t){var r=e.name,a=e.type,n=e.tagName.toLowerCase();if(void 0===t&&(t=!0),t&&(!r||e.disabled||"reset"===a||"button"===a||("checkbox"===a||"radio"===a)&&!e.checked||("submit"===a||"image"===a)&&e.form&&e.form.clk!==e||"select"===n&&-1===e.selectedIndex))return null;if("select"!==n)return q(e).val().replace(m,"\r\n");var o=e.selectedIndex;if(o<0)return null;for(var i=[],s=e.options,u="select-one"===a,c=u?o+1:s.length,l=u?o:0;l<c;l++){var f=s[l];if(f.selected&&!f.disabled){var d=(d=f.value)||(f.attributes&&f.attributes.value&&!f.attributes.value.specified?f.text:f.value);if(u)return d;i.push(d)}}return i},q.fn.clearForm=function(e){return this.each(function(){q("input,select,textarea",this).clearFields(e)})},q.fn.clearFields=q.fn.clearInputs=function(r){var a=/^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;return this.each(function(){var e=this.type,t=this.tagName.toLowerCase();a.test(e)||"textarea"===t?this.value="":"checkbox"===e||"radio"===e?this.checked=!1:"select"===t?this.selectedIndex=-1:"file"===e?/MSIE/.test(navigator.userAgent)?q(this).replaceWith(q(this).clone(!0)):q(this).val(""):r&&(!0===r&&/hidden/.test(e)||"string"==typeof r&&q(this).is(r))&&(this.value="")})},q.fn.resetForm=function(){return this.each(function(){var t=q(this),e=this.tagName.toLowerCase();switch(e){case"input":this.checked=this.defaultChecked;case"textarea":return this.value=this.defaultValue,!0;case"option":case"optgroup":var r=t.parents("select");return r.length&&r[0].multiple?"option"===e?this.selected=this.defaultSelected:t.find("option").resetForm():r.resetForm(),!0;case"select":return t.find("option").each(function(e){if(this.selected=this.defaultSelected,this.defaultSelected&&!t[0].multiple)return t[0].selectedIndex=e,!1}),!0;case"label":var a=q(t.attr("for")),n=t.find("input,select,textarea");return a[0]&&n.unshift(a[0]),n.resetForm(),!0;case"form":return"function"!=typeof this.reset&&("object"!=typeof this.reset||this.reset.nodeType)||this.reset(),!0;default:return t.find("form,input,label,select,textarea").resetForm(),!0}})},q.fn.enable=function(e){return void 0===e&&(e=!0),this.each(function(){this.disabled=!e})},q.fn.selected=function(r){return void 0===r&&(r=!0),this.each(function(){var e,t=this.type;"checkbox"===t||"radio"===t?this.checked=r:"option"===this.tagName.toLowerCase()&&(e=q(this).parent("select"),r&&e[0]&&"select-one"===e[0].type&&e.find("option").selected(!1),this.selected=r)})},q.fn.ajaxSubmit.debug=!1});

;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
(function ($, Drupal, drupalSettings) {
  Drupal.Views = {};
  Drupal.Views.parseQueryString = function (query) {
    var args = {};
    var pos = query.indexOf('?');
    if (pos !== -1) {
      query = query.substring(pos + 1);
    }
    var pair;
    var pairs = query.split('&');
    for (var i = 0; i < pairs.length; i++) {
      pair = pairs[i].split('=');
      if (pair[0] !== 'q' && pair[1]) {
        args[decodeURIComponent(pair[0].replace(/\+/g, ' '))] = decodeURIComponent(pair[1].replace(/\+/g, ' '));
      }
    }
    return args;
  };
  Drupal.Views.parseViewArgs = function (href, viewPath) {
    var returnObj = {};
    var path = Drupal.Views.getPath(href);
    var viewHref = Drupal.url(viewPath).substring(drupalSettings.path.baseUrl.length);
    if (viewHref && path.substring(0, viewHref.length + 1) === "".concat(viewHref, "/")) {
      returnObj.view_args = decodeURIComponent(path.substring(viewHref.length + 1, path.length));
      returnObj.view_path = path;
    }
    return returnObj;
  };
  Drupal.Views.pathPortion = function (href) {
    var protocol = window.location.protocol;
    if (href.substring(0, protocol.length) === protocol) {
      href = href.substring(href.indexOf('/', protocol.length + 2));
    }
    return href;
  };
  Drupal.Views.getPath = function (href) {
    href = Drupal.Views.pathPortion(href);
    href = href.substring(drupalSettings.path.baseUrl.length, href.length);
    if (href.substring(0, 3) === '?q=') {
      href = href.substring(3, href.length);
    }
    var chars = ['#', '?', '&'];
    for (var i = 0; i < chars.length; i++) {
      if (href.indexOf(chars[i]) > -1) {
        href = href.substr(0, href.indexOf(chars[i]));
      }
    }
    return href;
  };
})(jQuery, Drupal, drupalSettings);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
(function ($, Drupal, drupalSettings) {
  Drupal.behaviors.ViewsAjaxView = {};
  Drupal.behaviors.ViewsAjaxView.attach = function (context, settings) {
    if (settings && settings.views && settings.views.ajaxViews) {
      var ajaxViews = settings.views.ajaxViews;
      Object.keys(ajaxViews || {}).forEach(function (i) {
        Drupal.views.instances[i] = new Drupal.views.ajaxView(ajaxViews[i]);
      });
    }
  };
  Drupal.behaviors.ViewsAjaxView.detach = function (context, settings, trigger) {
    if (trigger === 'unload') {
      if (settings && settings.views && settings.views.ajaxViews) {
        var ajaxViews = settings.views.ajaxViews;
        Object.keys(ajaxViews || {}).forEach(function (i) {
          var selector = ".js-view-dom-id-".concat(ajaxViews[i].view_dom_id);
          if ($(selector, context).length) {
            delete Drupal.views.instances[i];
            delete settings.views.ajaxViews[i];
          }
        });
      }
    }
  };
  Drupal.views = {};
  Drupal.views.instances = {};
  Drupal.views.ajaxView = function (settings) {
    var selector = ".js-view-dom-id-".concat(settings.view_dom_id);
    this.$view = $(selector);
    var ajaxPath = drupalSettings.views.ajax_path;
    if (ajaxPath.constructor.toString().indexOf('Array') !== -1) {
      ajaxPath = ajaxPath[0];
    }
    var queryString = window.location.search || '';
    if (queryString !== '') {
      queryString = queryString.slice(1).replace(/q=[^&]+&?|&?render=[^&]+/, '');
      if (queryString !== '') {
        queryString = (/\?/.test(ajaxPath) ? '&' : '?') + queryString;
      }
    }
    this.element_settings = {
      url: ajaxPath + queryString,
      submit: settings,
      setClick: true,
      event: 'click',
      selector: selector,
      progress: {
        type: 'fullscreen'
      }
    };
    this.settings = settings;
    this.$exposed_form = $("form#views-exposed-form-".concat(settings.view_name.replace(/_/g, '-'), "-").concat(settings.view_display_id.replace(/_/g, '-')));
    once('exposed-form', this.$exposed_form).forEach($.proxy(this.attachExposedFormAjax, this));
    once('ajax-pager', this.$view.filter($.proxy(this.filterNestedViews, this))).forEach($.proxy(this.attachPagerAjax, this));
    var selfSettings = $.extend({}, this.element_settings, {
      event: 'RefreshView',
      base: this.selector,
      element: this.$view.get(0)
    });
    this.refreshViewAjax = Drupal.ajax(selfSettings);
  };
  Drupal.views.ajaxView.prototype.attachExposedFormAjax = function () {
    var that = this;
    this.exposedFormAjax = [];
    $('input[type=submit], button[type=submit], input[type=image]', this.$exposed_form).not('[data-drupal-selector=edit-reset]').each(function (index) {
      var selfSettings = $.extend({}, that.element_settings, {
        base: $(this).attr('id'),
        element: this
      });
      that.exposedFormAjax[index] = Drupal.ajax(selfSettings);
    });
  };
  Drupal.views.ajaxView.prototype.filterNestedViews = function () {
    return !this.$view.parents('.view').length;
  };
  Drupal.views.ajaxView.prototype.attachPagerAjax = function () {
    this.$view.find('ul.js-pager__items > li > a, th.views-field a, .attachment .views-summary a').each($.proxy(this.attachPagerLinkAjax, this));
  };
  Drupal.views.ajaxView.prototype.attachPagerLinkAjax = function (id, link) {
    var $link = $(link);
    var viewData = {};
    var href = $link.attr('href');
    $.extend(viewData, this.settings, Drupal.Views.parseQueryString(href), Drupal.Views.parseViewArgs(href, this.settings.view_base_path));
    var selfSettings = $.extend({}, this.element_settings, {
      submit: viewData,
      base: false,
      element: link
    });
    this.pagerAjax = Drupal.ajax(selfSettings);
  };
  Drupal.AjaxCommands.prototype.viewsScrollTop = function (ajax, response) {
    var offset = $(response.selector).offset();
    var scrollTarget = response.selector;
    while ($(scrollTarget).scrollTop() === 0 && $(scrollTarget).parent()) {
      scrollTarget = $(scrollTarget).parent();
    }
    if (offset.top - 10 < $(scrollTarget).scrollTop()) {
      $(scrollTarget).animate({
        scrollTop: offset.top - 10
      }, 500);
    }
  };
})(jQuery, Drupal, drupalSettings);;
