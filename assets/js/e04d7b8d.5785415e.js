"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[34985],{3905:function(e,r,t){t.d(r,{Zo:function(){return c},kt:function(){return d}});var a=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function u(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var i=a.createContext({}),f=function(e){var r=a.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},c=function(e){var r=f(e.components);return a.createElement(i.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},p=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=f(t),d=n,y=p["".concat(i,".").concat(d)]||p[d]||s[d]||o;return t?a.createElement(y,l(l({ref:r},c),{},{components:t})):a.createElement(y,l({ref:r},c))}));function d(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,l=new Array(o);l[0]=p;var u={};for(var i in r)hasOwnProperty.call(r,i)&&(u[i]=r[i]);u.originalType=e,u.mdxType="string"==typeof e?e:n,l[1]=u;for(var f=2;f<o;f++)l[f]=t[f];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},57891:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return u},contentTitle:function(){return i},metadata:function(){return f},toc:function(){return c},default:function(){return p}});var a=t(83117),n=t(80102),o=(t(67294),t(3905)),l=["components"],u={title:"Taro.arrayBufferToBase64(buffer)",sidebar_label:"arrayBufferToBase64"},i=void 0,f={unversionedId:"apis/base/arrayBufferToBase64",id:"apis/base/arrayBufferToBase64",isDocsHomePage:!1,title:"Taro.arrayBufferToBase64(buffer)",description:"\u5c06 ArrayBuffer \u6570\u636e\u8f6c\u6210 Base64 \u5b57\u7b26\u4e32\u3002",source:"@site/docs/apis/base/arrayBufferToBase64.md",sourceDirName:"apis/base",slug:"/apis/base/arrayBufferToBase64",permalink:"/taro/docs/next/apis/base/arrayBufferToBase64",editUrl:"https://github.com/nervjs/taro/edit/docs/docs/apis/base/arrayBufferToBase64.md",tags:[],version:"current",frontMatter:{title:"Taro.arrayBufferToBase64(buffer)",sidebar_label:"arrayBufferToBase64"},sidebar:"API",previous:{title:"base64ToArrayBuffer",permalink:"/taro/docs/next/apis/base/base64ToArrayBuffer"},next:{title:"getSystemInfo",permalink:"/taro/docs/next/apis/base/system/getSystemInfo"}},c=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[],level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[],level:2},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[],level:2},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[],level:2}],s={toc:c};function p(e){var r=e.components,t=(0,n.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u5c06 ArrayBuffer \u6570\u636e\u8f6c\u6210 Base64 \u5b57\u7b26\u4e32\u3002"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/base/wx.arrayBufferToBase64.html"},"\u53c2\u8003\u6587\u6863"))),(0,o.kt)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"(buffer: ArrayBuffer) => string\n")),(0,o.kt)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,o.kt)("table",null,(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"\u53c2\u6570"),(0,o.kt)("th",null,"\u7c7b\u578b"),(0,o.kt)("th",null,"\u8bf4\u660e"))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,"buffer"),(0,o.kt)("td",null,(0,o.kt)("code",null,"ArrayBuffer")),(0,o.kt)("td",null,"\u8981\u8f6c\u6362\u6210 Base64 \u5b57\u7b26\u4e32\u7684 ArrayBuffer \u5bf9\u8c61")))),(0,o.kt)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"const arrayBuffer = new Uint8Array([11, 22, 33])\nconst base64 = Taro.arrayBufferToBase64(arrayBuffer)\n")),(0,o.kt)("h2",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"API"),(0,o.kt)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,o.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,o.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"Taro.arrayBufferToBase64"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")))))}p.isMDXComponent=!0}}]);