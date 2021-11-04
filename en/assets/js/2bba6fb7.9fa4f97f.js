"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[71792],{3905:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return p}});var l=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,l)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,l,r=function(t,e){if(null==t)return{};var n,l,r={},a=Object.keys(t);for(l=0;l<a.length;l++)n=a[l],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(l=0;l<a.length;l++)n=a[l],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var d=l.createContext({}),u=function(t){var e=l.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},c=function(t){var e=u(t.components);return l.createElement(d.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},s=l.forwardRef((function(t,e){var n=t.components,r=t.mdxType,a=t.originalType,d=t.parentName,c=i(t,["components","mdxType","originalType","parentName"]),s=u(n),p=r,m=s["".concat(d,".").concat(p)]||s[p]||k[p]||a;return n?l.createElement(m,o(o({ref:e},c),{},{components:n})):l.createElement(m,o({ref:e},c))}));function p(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var a=n.length,o=new Array(a);o[0]=s;var i={};for(var d in e)hasOwnProperty.call(e,d)&&(i[d]=e[d]);i.originalType=t,i.mdxType="string"==typeof t?t:r,o[1]=i;for(var u=2;u<a;u++)o[u]=n[u];return l.createElement.apply(null,o)}return l.createElement.apply(null,n)}s.displayName="MDXCreateElement"},94410:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return i},contentTitle:function(){return d},metadata:function(){return u},toc:function(){return c},default:function(){return s}});var l=n(83117),r=n(80102),a=(n(67294),n(3905)),o=["components"],i={title:"Taro.downloadFile(option)",sidebar_label:"downloadFile"},d=void 0,u={unversionedId:"apis/network/download/downloadFile",id:"version-2.x/apis/network/download/downloadFile",isDocsHomePage:!1,title:"Taro.downloadFile(option)",description:"\u4e0b\u8f7d\u6587\u4ef6\u8d44\u6e90\u5230\u672c\u5730\u3002\u5ba2\u6237\u7aef\u76f4\u63a5\u53d1\u8d77\u4e00\u4e2a HTTPS GET \u8bf7\u6c42\uff0c\u8fd4\u56de\u6587\u4ef6\u7684\u672c\u5730\u4e34\u65f6\u8def\u5f84\uff0c\u5355\u6b21\u4e0b\u8f7d\u5141\u8bb8\u7684\u6700\u5927\u6587\u4ef6\u4e3a 50MB\u3002\u4f7f\u7528\u524d\u8bf7\u6ce8\u610f\u9605\u8bfb\u76f8\u5173\u8bf4\u660e\u3002",source:"@site/versioned_docs/version-2.x/apis/network/download/downloadFile.md",sourceDirName:"apis/network/download",slug:"/apis/network/download/downloadFile",permalink:"/taro/en/docs/2.x/apis/network/download/downloadFile",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-2.x/apis/network/download/downloadFile.md",tags:[],version:"2.x",frontMatter:{title:"Taro.downloadFile(option)",sidebar_label:"downloadFile"},sidebar:"version-2.x/API",previous:{title:"addInterceptor",permalink:"/taro/en/docs/2.x/apis/network/request/addInterceptor"},next:{title:"DownloadTask",permalink:"/taro/en/docs/2.x/apis/network/download/DownloadTask"}},c=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[],level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"Option",id:"option",children:[],level:3},{value:"FileSuccessCallbackResult",id:"filesuccesscallbackresult",children:[],level:3}],level:2},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[],level:2},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[],level:2}],k={toc:c};function s(t){var e=t.components,n=(0,r.Z)(t,o);return(0,a.kt)("wrapper",(0,l.Z)({},k,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u4e0b\u8f7d\u6587\u4ef6\u8d44\u6e90\u5230\u672c\u5730\u3002\u5ba2\u6237\u7aef\u76f4\u63a5\u53d1\u8d77\u4e00\u4e2a HTTPS GET \u8bf7\u6c42\uff0c\u8fd4\u56de\u6587\u4ef6\u7684\u672c\u5730\u4e34\u65f6\u8def\u5f84\uff0c\u5355\u6b21\u4e0b\u8f7d\u5141\u8bb8\u7684\u6700\u5927\u6587\u4ef6\u4e3a 50MB\u3002\u4f7f\u7528\u524d\u8bf7\u6ce8\u610f\u9605\u8bfb",(0,a.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/framework/ability/network.html"},"\u76f8\u5173\u8bf4\u660e"),"\u3002"),(0,a.kt)("p",null,"\u6ce8\u610f\uff1a\u8bf7\u5728\u670d\u52a1\u7aef\u54cd\u5e94\u7684 header \u4e2d\u6307\u5b9a\u5408\u7406\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"Content-Type")," \u5b57\u6bb5\uff0c\u4ee5\u4fdd\u8bc1\u5ba2\u6237\u7aef\u6b63\u786e\u5904\u7406\u6587\u4ef6\u7c7b\u578b\u3002"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/network/download/wx.downloadFile.html"},"\u53c2\u8003\u6587\u6863"))),(0,a.kt)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"(option: Option) => DownloadTask\n")),(0,a.kt)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,a.kt)("h3",{id:"option"},"Option"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"\u53c2\u6570"),(0,a.kt)("th",null,"\u7c7b\u578b"),(0,a.kt)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),(0,a.kt)("th",null,"\u8bf4\u660e"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"url"),(0,a.kt)("td",null,(0,a.kt)("code",null,"string")),(0,a.kt)("td",{style:{textAlign:"center"}},"\u662f"),(0,a.kt)("td",null,"\u4e0b\u8f7d\u8d44\u6e90\u7684 url")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"complete"),(0,a.kt)("td",null,(0,a.kt)("code",null,"(res: CallbackResult) => void")),(0,a.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,a.kt)("td",null,"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"fail"),(0,a.kt)("td",null,(0,a.kt)("code",null,"(res: CallbackResult) => void")),(0,a.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,a.kt)("td",null,"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"filePath"),(0,a.kt)("td",null,(0,a.kt)("code",null,"string")),(0,a.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,a.kt)("td",null,"\u6307\u5b9a\u6587\u4ef6\u4e0b\u8f7d\u540e\u5b58\u50a8\u7684\u8def\u5f84")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"header"),(0,a.kt)("td",null,(0,a.kt)("code",null,"Record<string, any>")),(0,a.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,a.kt)("td",null,"HTTP \u8bf7\u6c42\u7684 Header\uff0cHeader \u4e2d\u4e0d\u80fd\u8bbe\u7f6e Referer")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"success"),(0,a.kt)("td",null,(0,a.kt)("code",null,"(result: FileSuccessCallbackResult) => void")),(0,a.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,a.kt)("td",null,"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")))),(0,a.kt)("h3",{id:"filesuccesscallbackresult"},"FileSuccessCallbackResult"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"\u53c2\u6570"),(0,a.kt)("th",null,"\u7c7b\u578b"),(0,a.kt)("th",null,"\u8bf4\u660e"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"filePath"),(0,a.kt)("td",null,(0,a.kt)("code",null,"string")),(0,a.kt)("td",null,"\u7528\u6237\u6587\u4ef6\u8def\u5f84\u3002\u4f20\u5165 filePath \u65f6\u4f1a\u8fd4\u56de\uff0c\u8ddf\u4f20\u5165\u7684 filePath \u4e00\u81f4")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"statusCode"),(0,a.kt)("td",null,(0,a.kt)("code",null,"number")),(0,a.kt)("td",null,"\u5f00\u53d1\u8005\u670d\u52a1\u5668\u8fd4\u56de\u7684 HTTP \u72b6\u6001\u7801")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"tempFilePath"),(0,a.kt)("td",null,(0,a.kt)("code",null,"string")),(0,a.kt)("td",null,"\u4e34\u65f6\u6587\u4ef6\u8def\u5f84\u3002\u6ca1\u4f20\u5165 filePath \u6307\u5b9a\u6587\u4ef6\u5b58\u50a8\u8def\u5f84\u65f6\u4f1a\u8fd4\u56de\uff0c\u4e0b\u8f7d\u540e\u7684\u6587\u4ef6\u4f1a\u5b58\u50a8\u5230\u4e00\u4e2a\u4e34\u65f6\u6587\u4ef6")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"errMsg"),(0,a.kt)("td",null,(0,a.kt)("code",null,"string")),(0,a.kt)("td",null,"\u8c03\u7528\u7ed3\u679c")))),(0,a.kt)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"Taro.downloadFile({\n  url: 'https://example.com/audio/123', //\u4ec5\u4e3a\u793a\u4f8b\uff0c\u5e76\u975e\u771f\u5b9e\u7684\u8d44\u6e90\n  success: function (res) {\n    // \u53ea\u8981\u670d\u52a1\u5668\u6709\u54cd\u5e94\u6570\u636e\uff0c\u5c31\u4f1a\u628a\u54cd\u5e94\u5185\u5bb9\u5199\u5165\u6587\u4ef6\u5e76\u8fdb\u5165 success \u56de\u8c03\uff0c\u4e1a\u52a1\u9700\u8981\u81ea\u884c\u5224\u65ad\u662f\u5426\u4e0b\u8f7d\u5230\u4e86\u60f3\u8981\u7684\u5185\u5bb9\n    if (res.statusCode === 200) {\n      Taro.playVoice({\n        filePath: res.tempFilePath\n      })\n    }\n  }\n})\n")),(0,a.kt)("h2",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"API"),(0,a.kt)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,a.kt)("th",{parentName:"tr",align:"center"},"\u767e\u5ea6\u5c0f\u7a0b\u5e8f"),(0,a.kt)("th",{parentName:"tr",align:"center"},"\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f"),(0,a.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,a.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"Taro.downloadFile"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"})))))}s.isMDXComponent=!0}}]);