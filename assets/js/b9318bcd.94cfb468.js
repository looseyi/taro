"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[41208],{3905:function(t,e,r){r.d(e,{Zo:function(){return s},kt:function(){return g}});var a=r(67294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},o=Object.keys(t);for(a=0;a<o.length;a++)r=o[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)r=o[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var p=a.createContext({}),c=function(t){var e=a.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},s=function(t){var e=c(t.components);return a.createElement(p.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,o=t.originalType,p=t.parentName,s=l(t,["components","mdxType","originalType","parentName"]),d=c(r),g=n,u=d["".concat(p,".").concat(g)]||d[g]||m[g]||o;return r?a.createElement(u,i(i({ref:e},s),{},{components:r})):a.createElement(u,i({ref:e},s))}));function g(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l.mdxType="string"==typeof t?t:n,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},31377:function(t,e,r){r.r(e),r.d(e,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return s},default:function(){return d}});var a=r(83117),n=r(80102),o=(r(67294),r(3905)),i=["components"],l={title:"Taro.setStorage(OBJECT)",sidebar_label:"setStorage"},p=void 0,c={unversionedId:"apis/storage/setStorage",id:"version-1.x/apis/storage/setStorage",isDocsHomePage:!1,title:"Taro.setStorage(OBJECT)",description:"\u5c06\u6570\u636e\u5b58\u50a8\u5728\u672c\u5730\u7f13\u5b58\u4e2d\u6307\u5b9a\u7684 key \u4e2d\uff0c\u4f1a\u8986\u76d6\u6389\u539f\u6765\u8be5 key \u5bf9\u5e94\u7684\u5185\u5bb9\uff0c\u8fd9\u662f\u4e00\u4e2a\u5f02\u6b65\u63a5\u53e3\uff0c\u652f\u6301 Promise \u5316\u4f7f\u7528\u3002",source:"@site/versioned_docs/version-1.x/apis/storage/setStorage.md",sourceDirName:"apis/storage",slug:"/apis/storage/setStorage",permalink:"/taro/docs/1.x/apis/storage/setStorage",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-1.x/apis/storage/setStorage.md",tags:[],version:"1.x",frontMatter:{title:"Taro.setStorage(OBJECT)",sidebar_label:"setStorage"},sidebar:"version-1.x/API",previous:{title:"getWeRunData",permalink:"/taro/docs/1.x/apis/open-api/werun/getWeRunData"},next:{title:"setStorageSync",permalink:"/taro/docs/1.x/apis/storage/setStorageSync"}},s=[{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[],level:2},{value:"API\u652f\u6301\u5ea6",id:"api\u652f\u6301\u5ea6",children:[],level:2}],m={toc:s};function d(t){var e=t.components,r=(0,n.Z)(t,i);return(0,o.kt)("wrapper",(0,a.Z)({},m,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u5c06\u6570\u636e\u5b58\u50a8\u5728\u672c\u5730\u7f13\u5b58\u4e2d\u6307\u5b9a\u7684 key \u4e2d\uff0c\u4f1a\u8986\u76d6\u6389\u539f\u6765\u8be5 key \u5bf9\u5e94\u7684\u5185\u5bb9\uff0c\u8fd9\u662f\u4e00\u4e2a\u5f02\u6b65\u63a5\u53e3\uff0c\u652f\u6301 ",(0,o.kt)("inlineCode",{parentName:"p"},"Promise")," \u5316\u4f7f\u7528\u3002"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"OBJECT \u53c2\u6570\u8bf4\u660e\uff1a")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570"),(0,o.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,o.kt)("th",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,o.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"key"),(0,o.kt)("td",{parentName:"tr",align:"left"},"String"),(0,o.kt)("td",{parentName:"tr",align:"left"},"\u662f"),(0,o.kt)("td",{parentName:"tr",align:"left"},"\u672c\u5730\u7f13\u5b58\u4e2d\u7684\u6307\u5b9a\u7684 key")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"data"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Object/String"),(0,o.kt)("td",{parentName:"tr",align:"left"},"\u662f"),(0,o.kt)("td",{parentName:"tr",align:"left"},"\u9700\u8981\u5b58\u50a8\u7684\u5185\u5bb9")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"success"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Function"),(0,o.kt)("td",{parentName:"tr",align:"left"},"\u5426"),(0,o.kt)("td",{parentName:"tr",align:"left"},"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"fail"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Function"),(0,o.kt)("td",{parentName:"tr",align:"left"},"\u5426"),(0,o.kt)("td",{parentName:"tr",align:"left"},"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"complete"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Function"),(0,o.kt)("td",{parentName:"tr",align:"left"},"\u5426"),(0,o.kt)("td",{parentName:"tr",align:"left"},"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")))),(0,o.kt)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"import Taro from '@tarojs/taro'\n\nTaro.setStorage({ key: 'key', data: 'value' })\n  .then(res => console.log(res))\n")),(0,o.kt)("h2",{id:"api\u652f\u6301\u5ea6"},"API\u652f\u6301\u5ea6"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"API"),(0,o.kt)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,o.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,o.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"Taro.setStorage"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"Taro.setStorageSync"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,o.kt)("td",{parentName:"tr",align:"center"})))))}d.isMDXComponent=!0}}]);