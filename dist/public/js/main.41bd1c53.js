!function(e){function t(t){for(var r,u,l=t[0],c=t[1],i=t[2],p=0,s=[];p<l.length;p++)u=l[p],o[u]&&s.push(o[u][0]),o[u]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);for(f&&f(t);s.length;)s.shift()();return a.push.apply(a,i||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,l=1;l<n.length;l++){var c=n[l];0!==o[c]&&(r=!1)}r&&(a.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},o={0:0},a=[];function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise(function(t,r){n=o[e]=[t,r]});t.push(n[2]=r);var a,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=function(e){return u.p+"public/js/"+({}[e]||e)+".41bd1c53.js"}(e);var c=new Error;a=function(t){l.onerror=l.onload=null,clearTimeout(i);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;c.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",c.name="ChunkLoadError",c.type=r,c.request=a,n[1](c)}o[e]=void 0}};var i=setTimeout(function(){a({type:"timeout",target:l})},12e4);l.onerror=l.onload=a,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw e};var l=window.webpackJsonp=window.webpackJsonp||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var i=0;i<l.length;i++)t(l[i]);var f=c;a.push([19,1]),n()}({19:function(e,t,n){e.exports=n(32)},32:function(e,t,n){"use strict";n.r(t);var r=n(18),o=n(0),a=n.n(o),u=n(14),l=n.n(u),c=n(17),i=n.n(c),f=n(34),p=n(3),s=Object(p.a)(),d=a.a.lazy(function(){return n.e(2).then(n.bind(null,37))}),m=a.a.lazy(function(){return n.e(3).then(n.bind(null,35))}),h=a.a.lazy(function(){return n.e(4).then(n.bind(null,36))}),b=function(){return a.a.createElement(f.b,{history:s},a.a.createElement(f.c,null,a.a.createElement(f.a,{path:"/",exact:!0,component:d}),a.a.createElement(f.a,{path:"/users",exact:!0,component:h}),a.a.createElement(f.a,{path:"/goods",exact:!0,component:m})))};l.a.render(a.a.createElement(r.a,{locale:i.a},a.a.createElement(o.Suspense,{fallback:a.a.createElement("div",null,"loading")},a.a.createElement(b,null))),document.getElementById("root"))}});
//# sourceMappingURL=main.41bd1c53.js.map