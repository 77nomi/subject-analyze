(function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="./",n(n.s="8b75")})({"0516":function(t,e,n){"use strict";n.r(e);var r=n("d34b"),i=n.n(r);for(var o in r)"default"!==o&&function(t){n.d(e,t,(function(){return r[t]}))}(o);e["default"]=i.a},"12f9":function(t,e,n){"use strict";var r,i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:t._$g(0,"sc"),attrs:{_i:0}},[n("v-uni-view",{staticClass:t._$g(1,"sc"),attrs:{_i:1}},[n("v-uni-text",{staticClass:t._$g(2,"sc"),attrs:{_i:2}},[t._v("uni原生插件示例")])],1),t._l(t._$g(3,"f"),(function(e,r,i,o){return n("v-uni-view",{key:e,staticClass:t._$g("3-"+o,"sc"),attrs:{_i:"3-"+o}},[n("v-uni-view",{staticClass:t._$g("4-"+o,"sc"),class:t._$g("4-"+o,"c"),attrs:{_i:"4-"+o},on:{click:function(e){return t.$handleViewEvent(e)}}},[n("v-uni-text",{staticClass:t._$g("5-"+o,"sc"),attrs:{_i:"5-"+o}},[t._v(t._$g("5-"+o,"t0-0"))]),n("v-uni-text",{staticClass:t._$g("6-"+o,"sc"),class:t._$g("6-"+o,"c"),attrs:{_i:"6-"+o}},[t._v(t._$g("6-"+o,"t0-0"))])],1),t._$g("7-"+o,"i")?n("v-uni-view",{staticClass:t._$g("7-"+o,"sc"),attrs:{_i:"7-"+o}},t._l(t._$g("8-"+o,"f"),(function(e,r,i,a){return n("v-uni-view",{key:e,staticClass:t._$g("8-"+o+"-"+a,"sc"),attrs:{_i:"8-"+o+"-"+a},on:{click:function(e){return t.$handleViewEvent(e)}}},[n("v-uni-text",{staticClass:t._$g("9-"+o+"-"+a,"sc"),attrs:{_i:"9-"+o+"-"+a}},[t._v(t._$g("9-"+o+"-"+a,"t0-0"))]),n("v-uni-text",{staticClass:t._$g("10-"+o+"-"+a,"sc"),attrs:{_i:"10-"+o+"-"+a}},[t._v("")])],1)})),1):t._e()],1)}))],2)},o=[];n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return r}))},"24fb":function(t,e,n){"use strict";function r(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"===typeof btoa){var o=i(r),a=r.sources.map((function(t){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(t," */")}));return[n].concat(a).concat([o]).join("\n")}return[n].join("\n")}function i(t){var e=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),n="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(e);return"/*# ".concat(n," */")}t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=r(e,t);return e[2]?"@media ".concat(e[2]," {").concat(n,"}"):n})).join("")},e.i=function(t,n,r){"string"===typeof t&&(t=[[null,t,""]]);var i={};if(r)for(var o=0;o<this.length;o++){var a=this[o][0];null!=a&&(i[a]=!0)}for(var c=0;c<t.length;c++){var u=[].concat(t[c]);r&&i[u[0]]||(n&&(u[2]?u[2]="".concat(n," and ").concat(u[2]):u[2]=n),e.push(u))}},e}},"4a0d":function(t,e,n){"undefined"===typeof Promise||Promise.prototype.finally||(Promise.prototype.finally=function(t){var e=this.constructor;return this.then((function(n){return e.resolve(t()).then((function(){return n}))}),(function(n){return e.resolve(t()).then((function(){throw n}))}))}),uni.restoreGlobal&&uni.restoreGlobal(weex,plus,setTimeout,clearTimeout,setInterval,clearInterval),__definePage("pages/index/index",(function(){return Vue.extend(n("6c42").default)})),__definePage("pages/sample/richAlert",(function(){return Vue.extend(n("59bd").default)}))},"59bd":function(t,e,n){"use strict";n.r(e);var r=n("8c75"),i=n("0516");for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);n("898c");var a,c=n("f0c5"),u=Object(c["a"])(i["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],a);e["default"]=u.exports},6937:function(t,e,n){var r=n("aafe");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var i=n("7f7e").default;i("bf9c0ac4",r,!0,{sourceMap:!1,shadowMode:!1})},"6c42":function(t,e,n){"use strict";n.r(e);var r=n("12f9"),i=n("7538");for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);var a,c=n("f0c5"),u=Object(c["a"])(i["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],a);e["default"]=u.exports},7538:function(t,e,n){"use strict";n.r(e);var r=n("f529"),i=n.n(r);for(var o in r)"default"!==o&&function(t){n.d(e,t,(function(){return r[t]}))}(o);e["default"]=i.a},"7f7e":function(t,e,n){"use strict";function r(t,e){for(var n=[],r={},i=0;i<e.length;i++){var o=e[i],a=o[0],c=o[1],u=o[2],s=o[3],f={id:t+":"+i,css:c,media:u,sourceMap:s};r[a]?r[a].parts.push(f):n.push(r[a]={id:a,parts:[f]})}return n}n.r(e),n.d(e,"default",(function(){return b}));var i="undefined"!==typeof document;if("undefined"!==typeof DEBUG&&DEBUG&&!i)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var o={},a=i&&(document.head||document.getElementsByTagName("head")[0]),c=null,u=0,s=!1,f=function(){},l=null,d="data-vue-ssr-id",p="undefined"!==typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function b(t,e,n,i){s=n,l=i||{};var a=r(t,e);return g(a),function(e){for(var n=[],i=0;i<a.length;i++){var c=a[i],u=o[c.id];u.refs--,n.push(u)}e?(a=r(t,e),g(a)):a=[];for(i=0;i<n.length;i++){u=n[i];if(0===u.refs){for(var s=0;s<u.parts.length;s++)u.parts[s]();delete o[u.id]}}}}function g(t){for(var e=0;e<t.length;e++){var n=t[e],r=o[n.id];if(r){r.refs++;for(var i=0;i<r.parts.length;i++)r.parts[i](n.parts[i]);for(;i<n.parts.length;i++)r.parts.push(v(n.parts[i]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{var a=[];for(i=0;i<n.parts.length;i++)a.push(v(n.parts[i]));o[n.id]={id:n.id,refs:1,parts:a}}}}function x(){var t=document.createElement("style");return t.type="text/css",a.appendChild(t),t}function v(t){var e,n,r=document.querySelector("style["+d+'~="'+t.id+'"]');if(r){if(s)return f;r.parentNode.removeChild(r)}if(p){var i=u++;r=c||(c=x()),e=m.bind(null,r,i,!1),n=m.bind(null,r,i,!0)}else r=x(),e=w.bind(null,r),n=function(){r.parentNode.removeChild(r)};return e(t),function(r){if(r){if(r.css===t.css&&r.media===t.media&&r.sourceMap===t.sourceMap)return;e(t=r)}else n()}}var h=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}();function m(t,e,n,r){var i=n?"":j(r.css);if(t.styleSheet)t.styleSheet.cssText=h(e,i);else{var o=document.createTextNode(i),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(o,a[e]):t.appendChild(o)}}function w(t,e){var n=j(e.css),r=e.media,i=e.sourceMap;if(r&&t.setAttribute("media",r),l.ssrId&&t.setAttribute(d,e.id),i&&(n+="\n/*# sourceURL="+i.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),t.styleSheet)t.styleSheet.cssText=n;else{while(t.firstChild)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}var _=/([+-]?\d+(\.\d+)?)[r|u]px/g,k=/var\(--status-bar-height\)/gi,y=/var\(--window-top\)/gi,C=/var\(--window-bottom\)/gi,$=!1;function j(t){if(!uni.canIUse("css.var")){!1===$&&($=plus.navigator.getStatusbarHeight());var e={statusBarHeight:$,top:window.__WINDOW_TOP||0,bottom:window.__WINDOW_BOTTOM||0};t=t.replace(k,e.statusBarHeight+"px").replace(y,e.top+"px").replace(C,e.bottom+"px")}return t.replace(_,(function(t,e){return uni.upx2px(e)+"px"}))}},"898c":function(t,e,n){"use strict";var r=n("6937"),i=n.n(r);i.a},"8b75":function(t,e,n){"use strict";function r(){function t(t){var e=n("f2e2");e.__inject__&&e.__inject__(t)}"function"===typeof t&&t(),UniViewJSBridge.publishHandler("webviewReady")}n("4a0d"),"undefined"!==typeof plus?r():document.addEventListener("plusready",r)},"8c75":function(t,e,n){"use strict";var r,i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:t._$g(0,"sc"),attrs:{_i:0}},[n("v-uni-button",{attrs:{type:"primary",plain:"true",_i:1},on:{click:function(e){return t.$handleViewEvent(e)}}},[t._v("点击显示弹窗")])],1)},o=[];n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return r}))},aafe:function(t,e,n){var r=n("24fb");e=r(!1),e.push([t.i,"uni-button{margin-top:30upx;margin-bottom:30upx}.button-sp-area{margin:0 auto;width:60%}.content{text-align:center;height:400upx}.wrapper{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.button{width:200px;margin-top:30px;margin-left:20px;padding-top:20px;padding-bottom:20px;border-width:2px;border-style:solid;border-color:#458b00;background-color:#458b00}.text{font-size:30px;color:#666;text-align:center}",""]),t.exports=e},c6ac:function(t,e,n){var r=n("24fb");e=r(!1),e.push([t.i,"\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n/*每个页面公共css */\nbody{min-height:100%;height:auto}\r\n\r\n/* 解决头条小程序字体图标不显示问题，因为头条运行时自动插入了span标签，且有全局字体 */\n.uni-icon{font-family:uniicons;font-weight:400}.uni-bg-red{background-color:#f76260;color:#fff}.uni-bg-green{background-color:#09bb07;color:#fff}.uni-bg-blue{background-color:#007aff;color:#fff}.uni-container{-webkit-box-flex:1;-webkit-flex:1;flex:1;padding:15px;background-color:#f8f8f8}.uni-padding-lr{padding-left:15px;padding-right:15px}.uni-padding-tb{padding-top:15px;padding-bottom:15px}.uni-header-logo{padding:15px 15px;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin-top:10upx}.uni-header-image{width:80px;height:80px}.uni-hello-text{margin-bottom:20px}.hello-text{color:#7a7e83;font-size:14px;line-height:20px}.hello-link{color:#7a7e83;font-size:14px;line-height:20px}.uni-panel{margin-bottom:12px}.uni-panel-h{background-color:#fff;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:12px}\r\n/*\r\n.uni-panel-h:active {\r\n    background-color: #f8f8f8;\r\n}\r\n */.uni-panel-h-on{background-color:#f0f0f0}.uni-panel-text{-webkit-box-flex:1;-webkit-flex:1;flex:1;color:#000;font-size:14px;font-weight:400}.uni-panel-icon{margin-left:15px;color:#999;font-size:14px;font-weight:400;-webkit-transform:rotate(0deg);transform:rotate(0deg);-webkit-transition-duration:0s;transition-duration:0s;-webkit-transition-property:-webkit-transform;transition-property:-webkit-transform;transition-property:transform;transition-property:transform,-webkit-transform}.uni-panel-icon-on{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.uni-navigate-item{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;background-color:#fff;border-top-style:solid;border-top-color:#f0f0f0;border-top-width:1px;padding:12px}.uni-navigate-item:active{background-color:#f8f8f8}.uni-navigate-text{-webkit-box-flex:1;-webkit-flex:1;flex:1;color:#000;font-size:14px;font-weight:400}.uni-navigate-icon{margin-left:15px;color:#999;font-size:14px;font-weight:400}.uni-list-cell{position:relative;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.uni-list-cell-pd{padding:22upx 30upx}.flex-r{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row}.flex-c{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.a-i-c{-webkit-box-align:center;-webkit-align-items:center;align-items:center}.j-c-c{-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.list-item{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;padding:10px}",""]),t.exports=e},d34b:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={data:function(){return{wxsProps:{}}},components:{}};e.default=r},f0c5:function(t,e,n){"use strict";function r(t,e,n,r,i,o,a,c,u,s){var f,l="function"===typeof t?t.options:t;if(u){l.components||(l.components={});var d=Object.prototype.hasOwnProperty;for(var p in u)d.call(u,p)&&!d.call(l.components,p)&&(l.components[p]=u[p])}if(s&&((s.beforeCreate||(s.beforeCreate=[])).unshift((function(){this[s.__module]=this})),(l.mixins||(l.mixins=[])).push(s)),e&&(l.render=e,l.staticRenderFns=n,l._compiled=!0),r&&(l.functional=!0),o&&(l._scopeId="data-v-"+o),a?(f=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},l._ssrRegister=f):i&&(f=c?function(){i.call(this,this.$root.$options.shadowRoot)}:i),f)if(l.functional){l._injectStyles=f;var b=l.render;l.render=function(t,e){return f.call(e),b(t,e)}}else{var g=l.beforeCreate;l.beforeCreate=g?[].concat(g,f):[f]}return{exports:t,options:l}}n.d(e,"a",(function(){return r}))},f2e2:function(t,e,n){"use strict";n.r(e);var r=n("f483"),i=n.n(r);for(var o in r)"default"!==o&&function(t){n.d(e,t,(function(){return r[t]}))}(o);e["default"]=i.a},f483:function(t,e,n){var r=n("c6ac");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var i=n("7f7e").default;i("3ee0e078",r,!0,{sourceMap:!1,shadowMode:!1})},f529:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={data:function(){return{wxsProps:{}}},components:{}};e.default=r}});