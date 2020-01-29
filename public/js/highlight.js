/*! highlight.js v9.17.1 | BSD3 License | git.io/hljslicense */
!function(e){var n="object"==typeof window&&window||"object"==typeof self&&self;"undefined"==typeof exports||exports.nodeType?n&&(n.hljs=e({}),"function"==typeof define&&define.amd&&define([],function(){return n.hljs})):e(exports)}(function(a){var f=[],o=Object.keys,N={},g={},_=!0,n=/^(no-?highlight|plain|text)$/i,E=/\blang(?:uage)?-([\w-]+)\b/i,t=/((^(<[^>]+>|\t|)+|(?:\n)))/gm,r={case_insensitive:"cI",lexemes:"l",contains:"c",keywords:"k",subLanguage:"sL",className:"cN",begin:"b",beginKeywords:"bK",end:"e",endsWithParent:"eW",illegal:"i",excludeBegin:"eB",excludeEnd:"eE",returnBegin:"rB",returnEnd:"rE",variants:"v",IDENT_RE:"IR",UNDERSCORE_IDENT_RE:"UIR",NUMBER_RE:"NR",C_NUMBER_RE:"CNR",BINARY_NUMBER_RE:"BNR",RE_STARTERS_RE:"RSR",BACKSLASH_ESCAPE:"BE",APOS_STRING_MODE:"ASM",QUOTE_STRING_MODE:"QSM",PHRASAL_WORDS_MODE:"PWM",C_LINE_COMMENT_MODE:"CLCM",C_BLOCK_COMMENT_MODE:"CBCM",HASH_COMMENT_MODE:"HCM",NUMBER_MODE:"NM",C_NUMBER_MODE:"CNM",BINARY_NUMBER_MODE:"BNM",CSS_NUMBER_MODE:"CSSNM",REGEXP_MODE:"RM",TITLE_MODE:"TM",UNDERSCORE_TITLE_MODE:"UTM",COMMENT:"C",beginRe:"bR",endRe:"eR",illegalRe:"iR",lexemesRe:"lR",terminators:"t",terminator_end:"tE"},C="</span>",m="Could not find the language '{}', did you forget to load/include a language module?",O={classPrefix:"hljs-",tabReplace:null,useBR:!1,languages:void 0},c="of and for in not or if then".split(" ");function B(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function d(e){return e.nodeName.toLowerCase()}function R(e){return n.test(e)}function i(e){var n,t={},r=Array.prototype.slice.call(arguments,1);for(n in e)t[n]=e[n];return r.forEach(function(e){for(n in e)t[n]=e[n]}),t}function p(e){var a=[];return function e(n,t){for(var r=n.firstChild;r;r=r.nextSibling)3===r.nodeType?t+=r.nodeValue.length:1===r.nodeType&&(a.push({event:"start",offset:t,node:r}),t=e(r,t),d(r).match(/br|hr|img|input/)||a.push({event:"stop",offset:t,node:r}));return t}(e,0),a}function v(e,n,t){var r=0,a="",i=[];function o(){return e.length&&n.length?e[0].offset!==n[0].offset?e[0].offset<n[0].offset?e:n:"start"===n[0].event?e:n:e.length?e:n}function c(e){a+="<"+d(e)+f.map.call(e.attributes,function(e){return" "+e.nodeName+'="'+B(e.value).replace(/"/g,"&quot;")+'"'}).join("")+">"}function l(e){a+="</"+d(e)+">"}function u(e){("start"===e.event?c:l)(e.node)}for(;e.length||n.length;){var s=o();if(a+=B(t.substring(r,s[0].offset)),r=s[0].offset,s===e){for(i.reverse().forEach(l);u(s.splice(0,1)[0]),(s=o())===e&&s.length&&s[0].offset===r;);i.reverse().forEach(c)}else"start"===s[0].event?i.push(s[0].node):i.pop(),u(s.splice(0,1)[0])}return a+B(t.substr(r))}function l(n){return n.v&&!n.cached_variants&&(n.cached_variants=n.v.map(function(e){return i(n,{v:null},e)})),n.cached_variants?n.cached_variants:function e(n){return!!n&&(n.eW||e(n.starts))}(n)?[i(n,{starts:n.starts?i(n.starts):null})]:Object.isFrozen(n)?[i(n)]:[n]}function u(e){if(r&&!e.langApiRestored){for(var n in e.langApiRestored=!0,r)e[n]&&(e[r[n]]=e[n]);(e.c||[]).concat(e.v||[]).forEach(u)}}function M(n,t){var i={};return"string"==typeof n?r("keyword",n):o(n).forEach(function(e){r(e,n[e])}),i;function r(a,e){t&&(e=e.toLowerCase()),e.split(" ").forEach(function(e){var n,t,r=e.split("|");i[r[0]]=[a,(n=r[0],(t=r[1])?Number(t):function(e){return-1!=c.indexOf(e.toLowerCase())}(n)?0:1)]})}}function x(r){function s(e){return e&&e.source||e}function f(e,n){return new RegExp(s(e),"m"+(r.cI?"i":"")+(n?"g":""))}function a(a){var i,e,o={},c=[],l={},t=1;function n(e,n){o[t]=e,c.push([e,n]),t+=new RegExp(n.toString()+"|").exec("").length-1+1}for(var r=0;r<a.c.length;r++){n(e=a.c[r],e.bK?"\\.?(?:"+e.b+")\\.?":e.b)}a.tE&&n("end",a.tE),a.i&&n("illegal",a.i);var u=c.map(function(e){return e[1]});return i=f(function(e,n){for(var t=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./,r=0,a="",i=0;i<e.length;i++){var o=r+=1,c=s(e[i]);for(0<i&&(a+=n),a+="(";0<c.length;){var l=t.exec(c);if(null==l){a+=c;break}a+=c.substring(0,l.index),c=c.substring(l.index+l[0].length),"\\"==l[0][0]&&l[1]?a+="\\"+String(Number(l[1])+o):(a+=l[0],"("==l[0]&&r++)}a+=")"}return a}(u,"|"),!0),l.lastIndex=0,l.exec=function(e){var n;if(0===c.length)return null;i.lastIndex=l.lastIndex;var t=i.exec(e);if(!t)return null;for(var r=0;r<t.length;r++)if(null!=t[r]&&null!=o[""+r]){n=o[""+r];break}return"string"==typeof n?(t.type=n,t.extra=[a.i,a.tE]):(t.type="begin",t.rule=n),t},l}if(r.c&&-1!=r.c.indexOf("self")){if(!_)throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");r.c=r.c.filter(function(e){return"self"!=e})}!function n(t,e){t.compiled||(t.compiled=!0,t.k=t.k||t.bK,t.k&&(t.k=M(t.k,r.cI)),t.lR=f(t.l||/\w+/,!0),e&&(t.bK&&(t.b="\\b("+t.bK.split(" ").join("|")+")\\b"),t.b||(t.b=/\B|\b/),t.bR=f(t.b),t.endSameAsBegin&&(t.e=t.b),t.e||t.eW||(t.e=/\B|\b/),t.e&&(t.eR=f(t.e)),t.tE=s(t.e)||"",t.eW&&e.tE&&(t.tE+=(t.e?"|":"")+e.tE)),t.i&&(t.iR=f(t.i)),null==t.relevance&&(t.relevance=1),t.c||(t.c=[]),t.c=Array.prototype.concat.apply([],t.c.map(function(e){return l("self"===e?t:e)})),t.c.forEach(function(e){n(e,t)}),t.starts&&n(t.starts,e),t.t=a(t))}(r)}function S(n,i,a,e){function c(e,n,t,r){if(!t&&""===n)return"";if(!e)return n;var a='<span class="'+(r?"":O.classPrefix);return(a+=e+'">')+n+(t?"":C)}function o(){R+=null!=E.sL?function(){var e="string"==typeof E.sL;if(e&&!N[E.sL])return B(p);var n=e?S(E.sL,p,!0,d[E.sL]):T(p,E.sL.length?E.sL:void 0);return 0<E.relevance&&(v+=n.relevance),e&&(d[E.sL]=n.top),c(n.language,n.value,!1,!0)}():function(){var e,n,t,r,a,i,o;if(!E.k)return B(p);for(r="",n=0,E.lR.lastIndex=0,t=E.lR.exec(p);t;)r+=B(p.substring(n,t.index)),a=E,i=t,o=g.cI?i[0].toLowerCase():i[0],(e=a.k.hasOwnProperty(o)&&a.k[o])?(v+=e[1],r+=c(e[0],B(t[0]))):r+=B(t[0]),n=E.lR.lastIndex,t=E.lR.exec(p);return r+B(p.substr(n))}(),p=""}function l(e){R+=e.cN?c(e.cN,"",!0):"",E=Object.create(e,{parent:{value:E}})}function u(e){var n=e[0],t=e.rule;return t&&t.endSameAsBegin&&(t.eR=new RegExp(n.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&"),"m")),t.skip?p+=n:(t.eB&&(p+=n),o(),t.rB||t.eB||(p=n)),l(t),t.rB?0:n.length}function s(e){var n=e[0],t=i.substr(e.index),r=function e(n,t){if(r=n.eR,a=t,(i=r&&r.exec(a))&&0===i.index){for(;n.endsParent&&n.parent;)n=n.parent;return n}var r,a,i;if(n.eW)return e(n.parent,t)}(E,t);if(r){var a=E;for(a.skip?p+=n:(a.rE||a.eE||(p+=n),o(),a.eE&&(p=n));E.cN&&(R+=C),E.skip||E.sL||(v+=E.relevance),(E=E.parent)!==r.parent;);return r.starts&&(r.endSameAsBegin&&(r.starts.eR=r.eR),l(r.starts)),a.rE?0:n.length}}var f={};function t(e,n){var t=n&&n[0];if(p+=e,null==t)return o(),0;if("begin"==f.type&&"end"==n.type&&f.index==n.index&&""===t)return p+=i.slice(n.index,n.index+1),1;if("begin"===(f=n).type)return u(n);if("illegal"===n.type&&!a)throw new Error('Illegal lexeme "'+t+'" for mode "'+(E.cN||"<unnamed>")+'"');if("end"===n.type){var r=s(n);if(null!=r)return r}return p+=t,t.length}var g=D(n);if(!g)throw console.error(m.replace("{}",n)),new Error('Unknown language: "'+n+'"');x(g);var r,E=e||g,d={},R="";for(r=E;r!==g;r=r.parent)r.cN&&(R=c(r.cN,"",!0)+R);var p="",v=0;try{for(var M,b,h=0;E.t.lastIndex=h,M=E.t.exec(i);)b=t(i.substring(h,M.index),M),h=M.index+b;for(t(i.substr(h)),r=E;r.parent;r=r.parent)r.cN&&(R+=C);return{relevance:v,value:R,i:!1,language:n,top:E}}catch(e){if(e.message&&-1!==e.message.indexOf("Illegal"))return{i:!0,relevance:0,value:B(i)};if(_)return{relevance:0,value:B(i),language:n,top:E,errorRaised:e};throw e}}function T(t,e){e=e||O.languages||o(N);var r={relevance:0,value:B(t)},a=r;return e.filter(D).filter(L).forEach(function(e){var n=S(e,t,!1);n.language=e,n.relevance>a.relevance&&(a=n),n.relevance>r.relevance&&(a=r,r=n)}),a.language&&(r.second_best=a),r}function b(e){return O.tabReplace||O.useBR?e.replace(t,function(e,n){return O.useBR&&"\n"===e?"<br>":O.tabReplace?n.replace(/\t/g,O.tabReplace):""}):e}function s(e){var n,t,r,a,i,o,c,l,u,s,f=function(e){var n,t,r,a,i=e.className+" ";if(i+=e.parentNode?e.parentNode.className:"",t=E.exec(i)){var o=D(t[1]);return o||(console.warn(m.replace("{}",t[1])),console.warn("Falling back to no-highlight mode for this block.",e)),o?t[1]:"no-highlight"}for(n=0,r=(i=i.split(/\s+/)).length;n<r;n++)if(R(a=i[n])||D(a))return a}(e);R(f)||(O.useBR?(n=document.createElement("div")).innerHTML=e.innerHTML.replace(/\n/g,"").replace(/<br[ \/]*>/g,"\n"):n=e,i=n.textContent,r=f?S(f,i,!0):T(i),(t=p(n)).length&&((a=document.createElement("div")).innerHTML=r.value,r.value=v(t,p(a),i)),r.value=b(r.value),e.innerHTML=r.value,e.className=(o=e.className,c=f,l=r.language,u=c?g[c]:l,s=[o.trim()],o.match(/\bhljs\b/)||s.push("hljs"),-1===o.indexOf(u)&&s.push(u),s.join(" ").trim()),e.result={language:r.language,re:r.relevance},r.second_best&&(e.second_best={language:r.second_best.language,re:r.second_best.relevance}))}function h(){if(!h.called){h.called=!0;var e=document.querySelectorAll("pre code");f.forEach.call(e,s)}}var w={disableAutodetect:!0};function D(e){return e=(e||"").toLowerCase(),N[e]||N[g[e]]}function L(e){var n=D(e);return n&&!n.disableAutodetect}return a.highlight=S,a.highlightAuto=T,a.fixMarkup=b,a.highlightBlock=s,a.configure=function(e){O=i(O,e)},a.initHighlighting=h,a.initHighlightingOnLoad=function(){window.addEventListener("DOMContentLoaded",h,!1),window.addEventListener("load",h,!1)},a.registerLanguage=function(n,e){var t;try{t=e(a)}catch(e){if(console.error("Language definition for '{}' could not be registered.".replace("{}",n)),!_)throw e;console.error(e),t=w}u(N[n]=t),t.rawDefinition=e.bind(null,a),t.aliases&&t.aliases.forEach(function(e){g[e]=n})},a.listLanguages=function(){return o(N)},a.getLanguage=D,a.requireLanguage=function(e){var n=D(e);if(n)return n;throw new Error("The '{}' language is required, but not loaded.".replace("{}",e))},a.autoDetection=L,a.inherit=i,a.debugMode=function(){_=!1},a.IR=a.IDENT_RE="[a-zA-Z]\\w*",a.UIR=a.UNDERSCORE_IDENT_RE="[a-zA-Z_]\\w*",a.NR=a.NUMBER_RE="\\b\\d+(\\.\\d+)?",a.CNR=a.C_NUMBER_RE="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",a.BNR=a.BINARY_NUMBER_RE="\\b(0b[01]+)",a.RSR=a.RE_STARTERS_RE="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",a.BE=a.BACKSLASH_ESCAPE={b:"\\\\[\\s\\S]",relevance:0},a.ASM=a.APOS_STRING_MODE={cN:"string",b:"'",e:"'",i:"\\n",c:[a.BE]},a.QSM=a.QUOTE_STRING_MODE={cN:"string",b:'"',e:'"',i:"\\n",c:[a.BE]},a.PWM=a.PHRASAL_WORDS_MODE={b:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},a.C=a.COMMENT=function(e,n,t){var r=a.inherit({cN:"comment",b:e,e:n,c:[]},t||{});return r.c.push(a.PWM),r.c.push({cN:"doctag",b:"(?:TODO|FIXME|NOTE|BUG|XXX):",relevance:0}),r},a.CLCM=a.C_LINE_COMMENT_MODE=a.C("//","$"),a.CBCM=a.C_BLOCK_COMMENT_MODE=a.C("/\\*","\\*/"),a.HCM=a.HASH_COMMENT_MODE=a.C("#","$"),a.NM=a.NUMBER_MODE={cN:"number",b:a.NR,relevance:0},a.CNM=a.C_NUMBER_MODE={cN:"number",b:a.CNR,relevance:0},a.BNM=a.BINARY_NUMBER_MODE={cN:"number",b:a.BNR,relevance:0},a.CSSNM=a.CSS_NUMBER_MODE={cN:"number",b:a.NR+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",relevance:0},a.RM=a.REGEXP_MODE={cN:"regexp",b:/\//,e:/\/[gimuy]*/,i:/\n/,c:[a.BE,{b:/\[/,e:/\]/,relevance:0,c:[a.BE]}]},a.TM=a.TITLE_MODE={cN:"title",b:a.IR,relevance:0},a.UTM=a.UNDERSCORE_TITLE_MODE={cN:"title",b:a.UIR,relevance:0},a.METHOD_GUARD={b:"\\.\\s*"+a.UIR,relevance:0},[a.BE,a.ASM,a.QSM,a.PWM,a.C,a.CLCM,a.CBCM,a.HCM,a.NM,a.CNM,a.BNM,a.CSSNM,a.RM,a.TM,a.UTM,a.METHOD_GUARD].forEach(function(e){!function n(t){Object.freeze(t);var r="function"==typeof t;Object.getOwnPropertyNames(t).forEach(function(e){!t.hasOwnProperty(e)||null===t[e]||"object"!=typeof t[e]&&"function"!=typeof t[e]||r&&("caller"===e||"callee"===e||"arguments"===e)||Object.isFrozen(t[e])||n(t[e])});return t}(e)}),a});hljs.registerLanguage("json",function(e){var i={literal:"true false null"},n=[e.CLCM,e.CBCM],c=[e.QSM,e.CNM],r={e:",",eW:!0,eE:!0,c:c,k:i},t={b:"{",e:"}",c:[{cN:"attr",b:/"/,e:/"/,c:[e.BE],i:"\\n"},e.inherit(r,{b:/:/})].concat(n),i:"\\S"},a={b:"\\[",e:"\\]",c:[e.inherit(r)],i:"\\S"};return c.push(t,a),n.forEach(function(e){c.push(e)}),{c:c,k:i,i:"\\S"}});
/*! highlightjs-line-numbers.js v2.7.0 © 2018 Yauheni Pakala | MIT License */
!function(e,n){"use strict";function t(e){for(var n=e;n;){if(n.className&&n.className.indexOf("hljs-ln-code")!==-1)return!0;n=n.parentNode}return!1}function r(e){for(var n=e;"TABLE"!==n.nodeName;)n=n.parentNode;return n}function o(e){for(var n=e.toString(),t=e.anchorNode;"TD"!==t.nodeName;)t=t.parentNode;for(var o=e.focusNode;"TD"!==o.nodeName;)o=o.parentNode;var a=parseInt(t.dataset.lineNumber),i=parseInt(o.dataset.lineNumber);if(a!=i){var l=t.textContent,s=o.textContent;if(a>i){var c=a;a=i,i=c,c=l,l=s,s=c}for(;0!==n.indexOf(l);)l=l.slice(1);for(;n.lastIndexOf(s)===-1;)s=s.slice(0,-1);for(var d=l,u=r(t),f=a+1;f<i;++f){var h=m('.{0}[{1}="{2}"]',[b,T,f]),v=u.querySelector(h);d+="\n"+v.textContent}return d+="\n"+s}return n}function a(){var e=n.createElement("style");e.type="text/css",e.innerHTML=m(".{0}{border-collapse:collapse}.{0} td{padding:0}.{1}:before{content:attr({2})}",[N,y,T]),n.getElementsByTagName("head")[0].appendChild(e)}function i(t){"interactive"===n.readyState||"complete"===n.readyState?l(t):e.addEventListener("DOMContentLoaded",function(){l(t)})}function l(t){try{var r=n.querySelectorAll("code.hljs,code.nohighlight");for(var o in r)r.hasOwnProperty(o)&&s(r[o],t)}catch(a){e.console.error("LineNumbers error: ",a)}}function s(e,n){"object"==typeof e&&g(function(){e.innerHTML=d(e,n)})}function c(e,n){if("string"==typeof e){var t=document.createElement("code");return t.innerHTML=e,d(t,n)}}function d(e,n){n=n||{singleLine:!1};var t=n.singleLine?0:1;return f(e),u(e.innerHTML,t)}function u(e,n){var t=v(e);if(""===t[t.length-1].trim()&&t.pop(),t.length>n){for(var r="",o=0,a=t.length;o<a;o++)r+=m('<tr><td class="{0} {1}" {3}="{5}"><div class="{2}" {3}="{5}"></div></td><td class="{0} {4}" {3}="{5}">{6}</td></tr>',[L,j,y,T,b,o+1,t[o].length>0?t[o]:" "]);return m('<table class="{0}">{1}</table>',[N,r])}return e}function f(e){var n=e.childNodes;for(var t in n)if(n.hasOwnProperty(t)){var r=n[t];p(r.textContent)>0&&(r.childNodes.length>0?f(r):h(r.parentNode))}}function h(e){var n=e.className;if(/hljs-/.test(n)){for(var t=v(e.innerHTML),r=0,o="";r<t.length;r++){var a=t[r].length>0?t[r]:" ";o+=m('<span class="{0}">{1}</span>\n',[n,a])}e.innerHTML=o.trim()}}function v(e){return 0===e.length?[]:e.split(x)}function p(e){return(e.trim().match(x)||[]).length}function g(n){e.setTimeout(n,0)}function m(e,n){return e.replace(/\{(\d+)\}/g,function(e,t){return n[t]?n[t]:e})}var N="hljs-ln",L="hljs-ln-line",b="hljs-ln-code",j="hljs-ln-numbers",y="hljs-ln-n",T="data-line-number",x=/\r\n|\r|\n/g;e.hljs?(e.hljs.initLineNumbersOnLoad=i,e.hljs.lineNumbersBlock=s,e.hljs.lineNumbersValue=c,a()):e.console.error("highlight.js not detected!"),document.addEventListener("copy",function(e){var n=window.getSelection();if(t(n.anchorNode)){var r;r=window.navigator.userAgent.indexOf("Edge")!==-1?o(n):n.toString(),e.clipboardData.setData("text/plain",r),e.preventDefault()}})}(window,document);
