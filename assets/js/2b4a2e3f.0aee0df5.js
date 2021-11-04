"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[16870],{3905:function(t,e,n){n.d(e,{Zo:function(){return s},kt:function(){return k}});var r=n(67294);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,r,l=function(t,e){if(null==t)return{};var n,r,l={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var i=r.createContext({}),u=function(t){var e=r.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},s=function(t){var e=u(t.components);return r.createElement(i.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,l=t.mdxType,o=t.originalType,i=t.parentName,s=c(t,["components","mdxType","originalType","parentName"]),d=u(n),k=l,g=d["".concat(i,".").concat(k)]||d[k]||p[k]||o;return n?r.createElement(g,a(a({ref:e},s),{},{components:n})):r.createElement(g,a({ref:e},s))}));function k(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var o=n.length,a=new Array(o);a[0]=d;var c={};for(var i in e)hasOwnProperty.call(e,i)&&(c[i]=e[i]);c.originalType=t,c.mdxType="string"==typeof t?t:l,a[1]=c;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},83036:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return c},contentTitle:function(){return i},metadata:function(){return u},toc:function(){return s},default:function(){return d}});var r=n(83117),l=n(80102),o=(n(67294),n(3905)),a=["components"],c={title:"Taro.getStorageInfo(option)",sidebar_label:"getStorageInfo"},i=void 0,u={unversionedId:"apis/storage/getStorageInfo",id:"apis/storage/getStorageInfo",isDocsHomePage:!1,title:"Taro.getStorageInfo(option)",description:"\u5f02\u6b65\u83b7\u53d6\u5f53\u524dstorage\u7684\u76f8\u5173\u4fe1\u606f",source:"@site/docs/apis/storage/getStorageInfo.md",sourceDirName:"apis/storage",slug:"/apis/storage/getStorageInfo",permalink:"/taro/docs/next/apis/storage/getStorageInfo",editUrl:"https://github.com/nervjs/taro/edit/docs/docs/apis/storage/getStorageInfo.md",tags:[],version:"current",frontMatter:{title:"Taro.getStorageInfo(option)",sidebar_label:"getStorageInfo"},sidebar:"API",previous:{title:"getStorageInfoSync",permalink:"/taro/docs/next/apis/storage/getStorageInfoSync"},next:{title:"getStorage",permalink:"/taro/docs/next/apis/storage/getStorage"}},s=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[],level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"Option",id:"option",children:[],level:3},{value:"SuccessCallbackOption",id:"successcallbackoption",children:[],level:3}],level:2},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[],level:2},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[],level:2}],p={toc:s};function d(t){var e=t.components,n=(0,l.Z)(t,a);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u5f02\u6b65\u83b7\u53d6\u5f53\u524dstorage\u7684\u76f8\u5173\u4fe1\u606f"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/storage/wx.getStorageInfo.html"},"\u53c2\u8003\u6587\u6863"))),(0,o.kt)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"(option?: Option) => Promise<CallbackResult>\n")),(0,o.kt)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,o.kt)("h3",{id:"option"},"Option"),(0,o.kt)("table",null,(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"\u53c2\u6570"),(0,o.kt)("th",null,"\u7c7b\u578b"),(0,o.kt)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),(0,o.kt)("th",null,"\u8bf4\u660e"))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,"complete"),(0,o.kt)("td",null,(0,o.kt)("code",null,"(res: CallbackResult) => void")),(0,o.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,o.kt)("td",null,"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"fail"),(0,o.kt)("td",null,(0,o.kt)("code",null,"(res: CallbackResult) => void")),(0,o.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,o.kt)("td",null,"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"success"),(0,o.kt)("td",null,(0,o.kt)("code",null,"(option: SuccessCallbackOption) => void")),(0,o.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,o.kt)("td",null,"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")))),(0,o.kt)("h3",{id:"successcallbackoption"},"SuccessCallbackOption"),(0,o.kt)("table",null,(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"\u53c2\u6570"),(0,o.kt)("th",null,"\u7c7b\u578b"),(0,o.kt)("th",null,"\u8bf4\u660e"))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,"currentSize"),(0,o.kt)("td",null,(0,o.kt)("code",null,"number")),(0,o.kt)("td",null,"\u5f53\u524d\u5360\u7528\u7684\u7a7a\u95f4\u5927\u5c0f, \u5355\u4f4d KB")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"keys"),(0,o.kt)("td",null,(0,o.kt)("code",null,"string[]")),(0,o.kt)("td",null,"\u5f53\u524d storage \u4e2d\u6240\u6709\u7684 key")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"limitSize"),(0,o.kt)("td",null,(0,o.kt)("code",null,"number")),(0,o.kt)("td",null,"\u9650\u5236\u7684\u7a7a\u95f4\u5927\u5c0f\uff0c\u5355\u4f4d KB")))),(0,o.kt)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"Taro.getStorageInfo({\n  success: function (res) {\n    console.log(res.keys)\n    console.log(res.currentSize)\n    console.log(res.limitSize)\n  }\n})\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"try {\n  const res = Taro.getStorageInfoSync()\n  console.log(res.keys)\n  console.log(res.currentSize)\n  console.log(res.limitSize)\n} catch (e) {\n  // Do something when catch error\n}\n")),(0,o.kt)("h2",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"API"),(0,o.kt)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,o.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,o.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"Taro.getStorageInfo"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")))))}d.isMDXComponent=!0}}]);