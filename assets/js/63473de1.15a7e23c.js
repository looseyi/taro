"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[83138],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var c=r.createContext({}),u=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},p=function(t){var e=u(t.components);return r.createElement(c.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,c=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),d=u(n),m=a,k=d["".concat(c,".").concat(m)]||d[m]||s[m]||l;return n?r.createElement(k,o(o({ref:e},p),{},{components:n})):r.createElement(k,o({ref:e},p))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var c in e)hasOwnProperty.call(e,c)&&(i[c]=e[c]);i.originalType=t,i.mdxType="string"==typeof t?t:a,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},27984:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return p},default:function(){return d}});var r=n(83117),a=n(80102),l=(n(67294),n(3905)),o=["components"],i={title:"Image",sidebar_label:"Image"},c=void 0,u={unversionedId:"apis/canvas/Image",id:"version-3.x/apis/canvas/Image",isDocsHomePage:!1,title:"Image",description:"\u56fe\u7247\u5bf9\u8c61",source:"@site/versioned_docs/version-3.x/apis/canvas/Image.md",sourceDirName:"apis/canvas",slug:"/apis/canvas/Image",permalink:"/taro/docs/apis/canvas/Image",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-3.x/apis/canvas/Image.md",tags:[],version:"3.x",frontMatter:{title:"Image",sidebar_label:"Image"},sidebar:"version-3.x/API",previous:{title:"Color",permalink:"/taro/docs/apis/canvas/Color"},next:{title:"ImageData",permalink:"/taro/docs/apis/canvas/ImageData"}},p=[{value:"\u65b9\u6cd5",id:"\u65b9\u6cd5",children:[],level:2},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[],level:2}],s={toc:p};function d(t){var e=t.components,n=(0,a.Z)(t,o);return(0,l.kt)("wrapper",(0,r.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u56fe\u7247\u5bf9\u8c61"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/canvas/Image.html"},"\u53c2\u8003\u6587\u6863"))),(0,l.kt)("h2",{id:"\u65b9\u6cd5"},"\u65b9\u6cd5"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"\u53c2\u6570"),(0,l.kt)("th",null,"\u7c7b\u578b"),(0,l.kt)("th",null,"\u8bf4\u660e"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"height"),(0,l.kt)("td",null,(0,l.kt)("code",null,"number")),(0,l.kt)("td",null,"\u56fe\u7247\u7684\u771f\u5b9e\u9ad8\u5ea6")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"onerror"),(0,l.kt)("td",null,(0,l.kt)("code",null,"(...args: any[]) => any")),(0,l.kt)("td",null,"\u56fe\u7247\u52a0\u8f7d\u53d1\u751f\u9519\u8bef\u540e\u89e6\u53d1\u7684\u56de\u8c03\u51fd\u6570")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"onload"),(0,l.kt)("td",null,(0,l.kt)("code",null,"(...args: any[]) => any")),(0,l.kt)("td",null,"\u56fe\u7247\u52a0\u8f7d\u5b8c\u6210\u540e\u89e6\u53d1\u7684\u56de\u8c03\u51fd\u6570")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"src"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",null,"\u56fe\u7247\u7684 URL")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"width"),(0,l.kt)("td",null,(0,l.kt)("code",null,"number")),(0,l.kt)("td",null,"\u56fe\u7247\u7684\u771f\u5b9e\u5bbd\u5ea6")))),(0,l.kt)("h2",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"API"),(0,l.kt)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,l.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,l.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"Image"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"})))))}d.isMDXComponent=!0}}]);