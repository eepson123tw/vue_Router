(function(e){function t(t){for(var r,o,l=t[0],i=t[1],c=t[2],s=0,f=[];s<l.length;s++)o=l[s],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);d&&d(t);while(f.length)f.shift()();return u.push.apply(u,c||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,o=1;o<n.length;o++){var l=n[o];0!==a[l]&&(r=!1)}r&&(u.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},a={app:0},u=[];function l(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{about:"317fa06a"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={about:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({about:"about"}[e]||e)+"."+{about:"c9fef9d1"}[e]+".css",a=i.p+r,u=document.getElementsByTagName("link"),l=0;l<u.length;l++){var c=u[l],s=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(s===r||s===a))return t()}var f=document.getElementsByTagName("style");for(l=0;l<f.length;l++){c=f[l],s=c.getAttribute("data-href");if(s===r||s===a)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||a,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete o[e],d.parentNode.removeChild(d),n(u)},d.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var u=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=u);var c,s=document.createElement("script");s.charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.src=l(e);var f=new Error;c=function(t){s.onerror=s.onload=null,clearTimeout(d);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",f.name="ChunkLoadError",f.type=r,f.request=o,n[1](f)}a[e]=void 0}};var d=setTimeout((function(){c({type:"timeout",target:s})}),12e4);s.onerror=s.onload=c,document.head.appendChild(s)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var f=0;f<c.length;f++)t(c[f]);var d=s;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"2d34":function(e,t,n){},"4d38":function(e,t,n){"use strict";n("2d34")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"},on:{mousewheel:e.scrollEvent}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[e._v("Home")]),n("router-link",{attrs:{to:"/demo"}},[e._v("Demo")]),n("router-link",{attrs:{to:{name:"travel"}}},[e._v("travel")])],1),n("router-view")],1)},a=[],u={data:function(){return{scrolltop:0}},methods:{handleTurn:function(){this.$router.push("/demo",this.completeHandler)},scrollEvent:function(){var e=document.querySelector("#nav");window.scrollY>=200&&0!==window.scrollY?e.style.position="fixed":e.style.position="unset"}}},l=u,i=(n("034f"),n("2877")),c=Object(i["a"])(l,o,a,!1,null,null,null),s=c.exports,f=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f")),d=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"home"},[r("img",{attrs:{alt:"Vue logo",src:n("cf05")}}),r("HelloWorld",{attrs:{msg:"Welcome to use Vue Router and Cli "}}),e._m(0),r("button",{staticClass:"demo_btn",on:{click:e.handleTurn}},[e._v("前往Demo頁")])],1)},p=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("footer",[n("p",[e._v("© 資料、圖片、文章來源皆來自網路，僅用來做為學習用途，不做任何商業用途，若有任何疑問，請聯繫eepson123@gmail.com。")])])}],m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello"},[n("h1",[e._v(e._s(e.msg))]),n("p",[e._v(" 搭配六角學院js直播班，提供之api作頁面呈現，及功能展示。 ")])])},h=[],v={name:"HelloWorld",props:{msg:String}},b=v,g=(n("ff3f"),Object(i["a"])(b,m,h,!1,null,"0d723e97",null)),y=g.exports,_={name:"Home",components:{HelloWorld:y},methods:{handleTurn:function(){this.$router.push("/demo",this.completeHandler)},completeHandler:function(){}}},w=_,j=(n("4d38"),Object(i["a"])(w,d,p,!1,null,"65d051c6",null)),E=j.exports;r["a"].use(f["a"]);var O=[{path:"/",name:"Home",component:E},{path:"/demo",name:"Demo",component:function(){return n.e("about").then(n.bind(null,"680c"))}},{path:"/travel",name:"travel",component:function(){return n.e("about").then(n.bind(null,"0b0e"))}},{path:"/404",component:function(){return n.e("about").then(n.bind(null,"3fb9"))}},{path:"*",redirect:"/404"}],k=new f["a"]({routes:O}),x=k;r["a"].config.productionTip=!1,new r["a"]({router:x,render:function(e){return e(s)}}).$mount("#app")},"85ec":function(e,t,n){},a4e5:function(e,t,n){},cf05:function(e,t,n){e.exports=n.p+"img/logo.82b9c7a5.png"},ff3f:function(e,t,n){"use strict";n("a4e5")}});
//# sourceMappingURL=app.c70bcbbc.js.map