module.exports = function(TOKEN, data){

    /*
     * JavaScript MD5 1.0.1
     * https://github.com/blueimp/JavaScript-MD5
     *
     * Copyright 2011, Sebastian Tschan
     * https://blueimp.net
     *
     * Licensed under the MIT license:
     * http://www.opensource.org/licenses/MIT
     *
     * Based on
     * A JavaScript implementation of the RSA Data Security, Inc. MD5 Message
     * Digest Algorithm, as defined in RFC 1321.
     * Version 2.2 Copyright (C) Paul Johnston 1999 - 2009
     * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
     * Distributed under the BSD License
     * See http://pajhome.org.uk/crypt/md5 for more info.
     */

    var md5 = function(){"use strict";function n(n,r){var t=(65535&n)+(65535&r),u=(n>>16)+(r>>16)+(t>>16);return u<<16|65535&t}function r(n,r){return n<<r|n>>>32-r}function t(t,u,e,o,c,f){return n(r(n(n(u,t),n(o,f)),c),e)}function u(n,r,u,e,o,c,f){return t(r&u|~r&e,n,r,o,c,f)}function e(n,r,u,e,o,c,f){return t(r&e|u&~e,n,r,o,c,f)}function o(n,r,u,e,o,c,f){return t(r^u^e,n,r,o,c,f)}function c(n,r,u,e,o,c,f){return t(u^(r|~e),n,r,o,c,f)}function f(r,t){r[t>>5]|=128<<t%32,r[(t+64>>>9<<4)+14]=t;var f,i,a,h,g,l=1732584193,v=-271733879,d=-1732584194,C=271733878;for(f=0;f<r.length;f+=16)i=l,a=v,h=d,g=C,l=u(l,v,d,C,r[f],7,-680876936),C=u(C,l,v,d,r[f+1],12,-389564586),d=u(d,C,l,v,r[f+2],17,606105819),v=u(v,d,C,l,r[f+3],22,-1044525330),l=u(l,v,d,C,r[f+4],7,-176418897),C=u(C,l,v,d,r[f+5],12,1200080426),d=u(d,C,l,v,r[f+6],17,-1473231341),v=u(v,d,C,l,r[f+7],22,-45705983),l=u(l,v,d,C,r[f+8],7,1770035416),C=u(C,l,v,d,r[f+9],12,-1958414417),d=u(d,C,l,v,r[f+10],17,-42063),v=u(v,d,C,l,r[f+11],22,-1990404162),l=u(l,v,d,C,r[f+12],7,1804603682),C=u(C,l,v,d,r[f+13],12,-40341101),d=u(d,C,l,v,r[f+14],17,-1502002290),v=u(v,d,C,l,r[f+15],22,1236535329),l=e(l,v,d,C,r[f+1],5,-165796510),C=e(C,l,v,d,r[f+6],9,-1069501632),d=e(d,C,l,v,r[f+11],14,643717713),v=e(v,d,C,l,r[f],20,-373897302),l=e(l,v,d,C,r[f+5],5,-701558691),C=e(C,l,v,d,r[f+10],9,38016083),d=e(d,C,l,v,r[f+15],14,-660478335),v=e(v,d,C,l,r[f+4],20,-405537848),l=e(l,v,d,C,r[f+9],5,568446438),C=e(C,l,v,d,r[f+14],9,-1019803690),d=e(d,C,l,v,r[f+3],14,-187363961),v=e(v,d,C,l,r[f+8],20,1163531501),l=e(l,v,d,C,r[f+13],5,-1444681467),C=e(C,l,v,d,r[f+2],9,-51403784),d=e(d,C,l,v,r[f+7],14,1735328473),v=e(v,d,C,l,r[f+12],20,-1926607734),l=o(l,v,d,C,r[f+5],4,-378558),C=o(C,l,v,d,r[f+8],11,-2022574463),d=o(d,C,l,v,r[f+11],16,1839030562),v=o(v,d,C,l,r[f+14],23,-35309556),l=o(l,v,d,C,r[f+1],4,-1530992060),C=o(C,l,v,d,r[f+4],11,1272893353),d=o(d,C,l,v,r[f+7],16,-155497632),v=o(v,d,C,l,r[f+10],23,-1094730640),l=o(l,v,d,C,r[f+13],4,681279174),C=o(C,l,v,d,r[f],11,-358537222),d=o(d,C,l,v,r[f+3],16,-722521979),v=o(v,d,C,l,r[f+6],23,76029189),l=o(l,v,d,C,r[f+9],4,-640364487),C=o(C,l,v,d,r[f+12],11,-421815835),d=o(d,C,l,v,r[f+15],16,530742520),v=o(v,d,C,l,r[f+2],23,-995338651),l=c(l,v,d,C,r[f],6,-198630844),C=c(C,l,v,d,r[f+7],10,1126891415),d=c(d,C,l,v,r[f+14],15,-1416354905),v=c(v,d,C,l,r[f+5],21,-57434055),l=c(l,v,d,C,r[f+12],6,1700485571),C=c(C,l,v,d,r[f+3],10,-1894986606),d=c(d,C,l,v,r[f+10],15,-1051523),v=c(v,d,C,l,r[f+1],21,-2054922799),l=c(l,v,d,C,r[f+8],6,1873313359),C=c(C,l,v,d,r[f+15],10,-30611744),d=c(d,C,l,v,r[f+6],15,-1560198380),v=c(v,d,C,l,r[f+13],21,1309151649),l=c(l,v,d,C,r[f+4],6,-145523070),C=c(C,l,v,d,r[f+11],10,-1120210379),d=c(d,C,l,v,r[f+2],15,718787259),v=c(v,d,C,l,r[f+9],21,-343485551),l=n(l,i),v=n(v,a),d=n(d,h),C=n(C,g);return[l,v,d,C]}function i(n){var r,t="";for(r=0;r<32*n.length;r+=8)t+=String.fromCharCode(n[r>>5]>>>r%32&255);return t}function a(n){var r,t=[];for(t[(n.length>>2)-1]=void 0,r=0;r<t.length;r+=1)t[r]=0;for(r=0;r<8*n.length;r+=8)t[r>>5]|=(255&n.charCodeAt(r/8))<<r%32;return t}function h(n){return i(f(a(n),8*n.length))}function g(n,r){var t,u,e=a(n),o=[],c=[];for(o[15]=c[15]=void 0,e.length>16&&(e=f(e,8*n.length)),t=0;16>t;t+=1)o[t]=909522486^e[t],c[t]=1549556828^e[t];return u=f(o.concat(a(r)),512+8*r.length),i(f(c.concat(u),640))}function l(n){var r,t,u="0123456789abcdef",e="";for(t=0;t<n.length;t+=1)r=n.charCodeAt(t),e+=u.charAt(r>>>4&15)+u.charAt(15&r);return e}function v(n){return unescape(encodeURIComponent(n))}function d(n){return h(v(n))}function C(n){return l(d(n))}function A(n,r){return g(v(n),v(r))}function m(n,r){return l(A(n,r))}function s(n,r,t){return r?t?A(r,n):m(r,n):t?d(n):C(n)}return s}();

    /*! Sizzle v2.3.4-pre | (c) JS Foundation and other contributors | js.foundation */
    !function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ia(),z=ia(),A=ia(),B=ia(),C=function(a,b){return a===b&&(l=!0),0},D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;c<d;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",N="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+M+"))|)"+L+"*\\]",O=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+N+")*)|.*)\\)|)",P=new RegExp(L+"+","g"),Q=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),R=new RegExp("^"+L+"*,"+L+"*"),S=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),T=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),U=new RegExp(O),V=new RegExp("^"+M+"$"),W={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M+"|[*])"),ATTR:new RegExp("^"+N),PSEUDO:new RegExp("^"+O),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},X=/^(?:input|select|textarea|button)$/i,Y=/^h\d$/i,Z=/^[^{]+\{\s*\[native \w/,$=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,_=/[+~]/,aa=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),ba=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:d<0?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ca=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,da=function(a,b){return b?"\0"===a?"\ufffd":a.slice(0,-1)+"\\"+a.charCodeAt(a.length-1).toString(16)+" ":"\\"+a},ea=function(){m()},fa=ua(function(a){return a.disabled===!0&&"fieldset"===a.nodeName.toLowerCase()},{dir:"parentNode",next:"legend"});try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(ga){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ha(a,b,d,e){var f,h,j,k,l,o,r,s=b&&b.ownerDocument,w=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==w&&9!==w&&11!==w)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==w&&(l=$.exec(a)))if(f=l[1]){if(9===w){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(s&&(j=s.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(l[2])return H.apply(d,b.getElementsByTagName(a)),d;if((f=l[3])&&c.getElementsByClassName&&b.getElementsByClassName)return H.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!B[a+" "]&&(!q||!q.test(a))){if(1!==w)s=b,r=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(ca,da):b.setAttribute("id",k=u),o=g(a),h=o.length;while(h--)o[h]="#"+k+" "+ta(o[h]);r=o.join(","),s=_.test(a)&&ra(b.parentNode)||b}if(r)try{return H.apply(d,s.querySelectorAll(r)),d}catch(x){B(a)}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(Q,"$1"),b,d,e)}function ia(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ja(a){return a[u]=!0,a}function ka(a){var b=n.createElement("fieldset");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function la(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function ma(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&a.sourceIndex-b.sourceIndex;if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function na(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function oa(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function pa(a){return function(b){return"form"in b?b.parentNode&&b.disabled===!1?"label"in b?"label"in b.parentNode?b.parentNode.disabled===a:b.disabled===a:b.isDisabled===a||b.isDisabled!==!a&&fa(b)===a:b.disabled===a:"label"in b&&b.disabled===a}}function qa(a){return ja(function(b){return b=+b,ja(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function ra(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ha.support={},f=ha.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return!!b&&"HTML"!==b.nodeName},m=ha.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),v!==n&&(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",ea,!1):e.attachEvent&&e.attachEvent("onunload",ea)),c.attributes=ka(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ka(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Z.test(n.getElementsByClassName),c.getById=ka(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.filter.ID=function(a){var b=a.replace(aa,ba);return function(a){return a.getAttribute("id")===b}},d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}}):(d.filter.ID=function(a){var b=a.replace(aa,ba);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}},d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c,d,e,f=b.getElementById(a);if(f){if(c=f.getAttributeNode("id"),c&&c.value===a)return[f];e=b.getElementsByName(a),d=0;while(f=e[d++])if(c=f.getAttributeNode("id"),c&&c.value===a)return[f]}return[]}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){if("undefined"!=typeof b.getElementsByClassName&&p)return b.getElementsByClassName(a)},r=[],q=[],(c.qsa=Z.test(n.querySelectorAll))&&(ka(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ka(function(a){a.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),2!==a.querySelectorAll(":enabled").length&&q.push(":enabled",":disabled"),o.appendChild(a).disabled=!0,2!==a.querySelectorAll(":disabled").length&&q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Z.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ka(function(a){c.disconnectedMatch=s.call(a,"*"),s.call(a,"[s!='']:x"),r.push("!=",O)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Z.test(o.compareDocumentPosition),t=b||Z.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},C=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return ma(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?ma(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},ha.matches=function(a,b){return ha(a,null,null,b)},ha.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(T,"='$1']"),c.matchesSelector&&p&&!B[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){B(b)}return ha(b,n,null,[a]).length>0},ha.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ha.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ha.escape=function(a){return(a+"").replace(ca,da)},ha.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ha.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(C),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ha.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ha.selectors={cacheLength:50,createPseudo:ja,match:W,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(aa,ba),a[3]=(a[3]||a[4]||a[5]||"").replace(aa,ba),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ha.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ha.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return W.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&U.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(aa,ba).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ha.attr(d,a);return null==e?"!="===b:!b||(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(P," ")+" ").indexOf(c)>-1:"|="===b&&(e===c||e.slice(0,c.length+1)===c+"-"))}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ha.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ja(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ja(function(a){var b=[],c=[],d=h(a.replace(Q,"$1"));return d[u]?ja(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ja(function(a){return function(b){return ha(a,b).length>0}}),contains:ja(function(a){return a=a.replace(aa,ba),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ja(function(a){return V.test(a||"")||ha.error("unsupported lang: "+a),a=a.replace(aa,ba).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:pa(!1),disabled:pa(!0),checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Y.test(a.nodeName)},input:function(a){return X.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:qa(function(){return[0]}),last:qa(function(a,b){return[b-1]}),eq:qa(function(a,b,c){return[c<0?c+b:c]}),even:qa(function(a,b){for(var c=0;c<b;c+=2)a.push(c);return a}),odd:qa(function(a,b){for(var c=1;c<b;c+=2)a.push(c);return a}),lt:qa(function(a,b,c){for(var d=c<0?c+b:c;--d>=0;)a.push(d);return a}),gt:qa(function(a,b,c){for(var d=c<0?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=na(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=oa(b);function sa(){}sa.prototype=d.filters=d.pseudos,d.setFilters=new sa,g=ha.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=R.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=S.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(Q," ")}),h=h.slice(c.length));for(g in d.filter)!(e=W[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ha.error(a):z(a,i).slice(0)};function ta(a){for(var b=0,c=a.length,d="";b<c;b++)d+=a[b].value;return d}function ua(a,b,c){var d=b.dir,e=b.next,f=e||d,g=c&&"parentNode"===f,h=x++;return b.first?function(b,c,e){while(b=b[d])if(1===b.nodeType||g)return a(b,c,e);return!1}:function(b,c,i){var j,k,l,m=[w,h];if(i){while(b=b[d])if((1===b.nodeType||g)&&a(b,c,i))return!0}else while(b=b[d])if(1===b.nodeType||g)if(l=b[u]||(b[u]={}),k=l[b.uniqueID]||(l[b.uniqueID]={}),e&&e===b.nodeName.toLowerCase())b=b[d]||b;else{if((j=k[f])&&j[0]===w&&j[1]===h)return m[2]=j[2];if(k[f]=m,m[2]=a(b,c,i))return!0}return!1}}function va(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function wa(a,b,c){for(var d=0,e=b.length;d<e;d++)ha(a,b[d],c);return c}function xa(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;h<i;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function ya(a,b,c,d,e,f){return d&&!d[u]&&(d=ya(d)),e&&!e[u]&&(e=ya(e,f)),ja(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||wa(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:xa(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=xa(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=xa(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function za(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ua(function(a){return a===b},h,!0),l=ua(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];i<f;i++)if(c=d.relative[a[i].type])m=[ua(va(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;e<f;e++)if(d.relative[a[e].type])break;return ya(i>1&&va(m),i>1&&ta(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(Q,"$1"),c,i<e&&za(a.slice(i,e)),e<f&&za(a=a.slice(e)),e<f&&ta(a))}m.push(c)}return va(m)}function Aa(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=F.call(i));u=xa(u)}H.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&ha.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ja(f):f}h=ha.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=za(b[c]),f[u]?d.push(f):e.push(f);f=A(a,Aa(e,d)),f.selector=a}return f},i=ha.select=function(a,b,c,e){var f,i,j,k,l,m="function"==typeof a&&a,n=!e&&g(a=m.selector||a);if(c=c||[],1===n.length){if(i=n[0]=n[0].slice(0),i.length>2&&"ID"===(j=i[0]).type&&9===b.nodeType&&p&&d.relative[i[1].type]){if(b=(d.find.ID(j.matches[0].replace(aa,ba),b)||[])[0],!b)return c;m&&(b=b.parentNode),a=a.slice(i.shift().value.length)}f=W.needsContext.test(a)?0:i.length;while(f--){if(j=i[f],d.relative[k=j.type])break;if((l=d.find[k])&&(e=l(j.matches[0].replace(aa,ba),_.test(i[0].type)&&ra(b.parentNode)||b))){if(i.splice(f,1),a=e.length&&ta(i),!a)return H.apply(c,e),c;break}}}return(m||h(a,n))(e,b,!p,c,!b||_.test(a)&&ra(b.parentNode)||b),c},c.sortStable=u.split("").sort(C).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ka(function(a){return 1&a.compareDocumentPosition(n.createElement("fieldset"))}),ka(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||la("type|href|height|width",function(a,b,c){if(!c)return a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ka(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||la("value",function(a,b,c){if(!c&&"input"===a.nodeName.toLowerCase())return a.defaultValue}),ka(function(a){return null==a.getAttribute("disabled")})||la(K,function(a,b,c){var d;if(!c)return a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null});var Ba=a.Sizzle;ha.noConflict=function(){return a.Sizzle===ha&&(a.Sizzle=Ba),ha},"function"==typeof define&&define.amd?define(function(){return ha}):"undefined"!=typeof module&&module.exports?module.exports=ha:a.Sizzle=ha}(window);
    /**
     * 用Sizzle替代原生的选择器，实现更多功能
     */
    Element.prototype.webkitMatchesSelector = function(s) {
        var matches = Sizzle(s),
            i = matches.length;
        while (--i >= 0 && matches[i] !== this) {}
        return i > -1;
    }
    Element.prototype.querySelector = Element.prototype.querySelectorAll = Sizzle;


    /**
     * combo selectors
     * @param {string} selectors
     * @returns {string}
     */
    function normalizeSelectors(selectors){
        if(Object.prototype.toString.call(selectors) === '[object Array]'){
            return selectors.join(',');
        } else {
            return String(selectors || '');
        }
    }

    // walk settings
    var INVISIBLE_ELEMENT = data.invisibleElements;
    var IGNORE_CHILDREN_ELEMENT = data.ignoreChildrenElements;
    var STYLE_FILTERS = data.styleFilters;
    var ATTR_FILTERS = data.attributeFilters;
    // var INCLUDE_SELECTORS = normalizeSelectors(data.includeSelectors);
    var EXCLUDE_SELECTORS = normalizeSelectors(data.excludeSelectors);
    var IGNORE_CHILDREN_SELECTORS = normalizeSelectors(data.ignoreChildrenSelectors);
    var IGNORE_TEXT_SELECTORS = normalizeSelectors(data.ignoreTextSelectors);
    var IGNORE_STYLE_SELECTORS = normalizeSelectors(data.ignoreStyleSelectors);
    var ROOT = data.root || 'body';

    // reg
    var invisibleElementReg = new RegExp('^(' + INVISIBLE_ELEMENT.join('|') + ')$', 'i');
    var ignoreChildrenElementReg = new RegExp('^(' + IGNORE_CHILDREN_ELEMENT.join('|') + ')$', 'i');

    /**
     * invisible
     * @param {HTMLElement} elem
     * @returns {boolean}
     */
    function isInvisible(elem){
        var tagName = elem.tagName.toLowerCase();
        invisibleElementReg.lastIndex = 0;
        return (invisibleElementReg.test(tagName) || (tagName === 'input' && elem.type === 'hidden'));
    }

    /**
     * ignore child
     * @param {HTMLElement} elem
     * @returns {boolean}
     */
    function igonreChildren(elem){
        ignoreChildrenElementReg.lastIndex = 0;
        return ignoreChildrenElementReg.test(elem.tagName) ||
              (IGNORE_CHILDREN_SELECTORS && elem.webkitMatchesSelector(IGNORE_CHILDREN_SELECTORS));
    }

    /**
     * get computed styles of element, and hash them
     * @param {HTMLElement} elem
     * @returns {string}
     */
    function getStyles(elem){
        var ret = [];
        var filters = STYLE_FILTERS.slice(0);
        if(igonreChildren(elem)){
            filters.width = true;
            filters.height = true;
        }
        var styles = elem.ownerDocument.defaultView.getComputedStyle( elem, null );
        var display = styles.getPropertyValue('display');
        var opacity = styles.getPropertyValue('opacity');
        var visibility = styles.getPropertyValue('visibility');
        if(display === 'none' || opacity === '0' || visibility === 'hidden'){
            return false;
        } else {
            var position = styles.getPropertyValue('position');
            if(position !== 'static'){
                filters.push('top', 'right', 'bottom', 'left');
            }
            filters.forEach(function(key){
                ret.push(styles.getPropertyValue(key));
            });
        }
        return md5(ret.join('~'));
    }

    /**
     * get element bounding rect
     * @param {HTMLElement} elem
     * @returns [x, y, width, height]
     */
    function getRect(elem){
        var rect = elem.getBoundingClientRect();
        var doc = elem.ownerDocument;
        var win = doc.defaultView;
        var html = doc.documentElement;
        var x = Math.floor(rect.left + win.pageXOffset - html.clientLeft);
        var y = Math.floor(rect.top + win.pageYOffset - html.clientTop);
        var w = Math.floor(rect.width);
        var h = Math.floor(rect.height);
        return [x, y, w, h];
    }

    /**
     * get attributes of element
     * @param {HTMLElement} elem
     * @returns {Object|boolean}
     */
    function getAttr(elem){
        var ret = {};
        var filters = ATTR_FILTERS.slice(0);
        var hasAttr = false;
        if(elem.tagName.toLowerCase() === 'input'){
            filters.push('type');
        }
        filters.forEach(function(key){
            var attr = elem.getAttribute(key);
            if(attr !== null){
                hasAttr = true;
                ret[key] = attr;
            }
        });
        return hasAttr ? ret : false;
    }

    /**
     * filter elements
     * @param {HTMLElement} elem
     * @param {HTMLElement} parent
     * @returns {boolean}
     */
    function filter(elem, parent){
        var ret = true;
        switch (elem.nodeType){
            case 1:
                if(EXCLUDE_SELECTORS){
                    ret = ret && !elem.webkitMatchesSelector(EXCLUDE_SELECTORS);
                }
                // if(INCLUDE_SELECTORS){
                //     ret = ret && elem.webkitMatchesSelector(INCLUDE_SELECTORS);
                // }
                break;
            case 3:
                if(IGNORE_TEXT_SELECTORS){
                    ret = ret && !parent.webkitMatchesSelector(IGNORE_TEXT_SELECTORS);
                }
                break;
            default:
                ret = false;
                break;
        }
        return ret;
    }

    /**
     * walk dom tree
     * @param {HTMLElement} elem
     * @returns {Object}
     */
    function walk(elem){
        var node = {};
        if(elem.nodeType === 1){    // element
            node.name = elem.tagName.toLowerCase();
            if(!isInvisible(elem)){
                node.rect = getRect(elem);
                var attr = getAttr(elem);
                if(attr){
                    node.attr = attr;
                }
                if(IGNORE_STYLE_SELECTORS && elem.webkitMatchesSelector(IGNORE_STYLE_SELECTORS)){
                    node.style = '';
                } else {
                    node.style = getStyles(elem);
                }
                node.child = [];
                if(node.name === 'img'){
                    if(!(IGNORE_TEXT_SELECTORS && elem.webkitMatchesSelector(IGNORE_TEXT_SELECTORS))){
                        var canvas = document.createElement('canvas');
                        canvas.width = elem.offsetWidth;
                        canvas.height = elem.offsetHeight;
                        var ctx = canvas.getContext('2d');
                        ctx.drawImage(elem, 0, 0);
                        // not ignore text
                        node.child.push({
                            name: '#',
                            text: md5(canvas.toDataURL())
                        });
                    }
                } else if(igonreChildren(elem)){ // ignore children
                    if(!(IGNORE_TEXT_SELECTORS && elem.webkitMatchesSelector(IGNORE_TEXT_SELECTORS))){
                        // not ignore text
                        node.child.push({
                            name: '#',
                            text: md5(elem.innerText.replace(/\s+/g, ' '))
                        });
                    }
                } else {
                    for(var i = 0, len = elem.childNodes.length; i < len; i++){
                        var child = elem.childNodes[i];
                        if(filter(child, elem)){    // recursion
                            var vdom = arguments.callee(child);  //
                            if(typeof vdom !== 'undefined' && vdom.style !== false){
                                node.child.push(vdom);
                            }
                        }
                    }
                }
                return node;
            }
        } else if(elem.nodeType === 3) {    // text node
            var text = elem.nodeValue.trim();
            if(text){
                node.name = '#';
                node.text = md5(text);
                return node;
            }
        }
    }

    if(data.removeSelectors && data.removeSelectors.length){
        data.removeSelectors.forEach(function(selector){
            var elems = document.querySelectorAll(selector);
            for(var i = 0, len = elems.length; i < len; i++){
                var elem = elems[i];
                elem.parentNode.removeChild(elem);
                elem = null;
            }
        });
    }
    return walk(document.querySelector(ROOT));

};