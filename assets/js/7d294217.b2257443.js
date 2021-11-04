"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[39851],{3905:function(t,e,l){l.d(e,{Zo:function(){return c},kt:function(){return p}});var n=l(67294);function r(t,e,l){return e in t?Object.defineProperty(t,e,{value:l,enumerable:!0,configurable:!0,writable:!0}):t[e]=l,t}function o(t,e){var l=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),l.push.apply(l,n)}return l}function a(t){for(var e=1;e<arguments.length;e++){var l=null!=arguments[e]?arguments[e]:{};e%2?o(Object(l),!0).forEach((function(e){r(t,e,l[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(l)):o(Object(l)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(l,e))}))}return t}function u(t,e){if(null==t)return{};var l,n,r=function(t,e){if(null==t)return{};var l,n,r={},o=Object.keys(t);for(n=0;n<o.length;n++)l=o[n],e.indexOf(l)>=0||(r[l]=t[l]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)l=o[n],e.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(t,l)&&(r[l]=t[l])}return r}var i=n.createContext({}),d=function(t){var e=n.useContext(i),l=e;return t&&(l="function"==typeof t?t(e):a(a({},e),t)),l},c=function(t){var e=d(t.components);return n.createElement(i.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(t,e){var l=t.components,r=t.mdxType,o=t.originalType,i=t.parentName,c=u(t,["components","mdxType","originalType","parentName"]),s=d(l),p=r,m=s["".concat(i,".").concat(p)]||s[p]||k[p]||o;return l?n.createElement(m,a(a({ref:e},c),{},{components:l})):n.createElement(m,a({ref:e},c))}));function p(t,e){var l=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=l.length,a=new Array(o);a[0]=s;var u={};for(var i in e)hasOwnProperty.call(e,i)&&(u[i]=e[i]);u.originalType=t,u.mdxType="string"==typeof t?t:r,a[1]=u;for(var d=2;d<o;d++)a[d]=l[d];return n.createElement.apply(null,a)}return n.createElement.apply(null,l)}s.displayName="MDXCreateElement"},33358:function(t,e,l){l.r(e),l.d(e,{frontMatter:function(){return u},contentTitle:function(){return i},metadata:function(){return d},toc:function(){return c},default:function(){return s}});var n=l(83117),r=l(80102),o=(l(67294),l(3905)),a=["components"],u={title:"Taro.chooseVideo(option)",sidebar_label:"chooseVideo"},i=void 0,d={unversionedId:"apis/media/video/chooseVideo",id:"version-2.x/apis/media/video/chooseVideo",isDocsHomePage:!1,title:"Taro.chooseVideo(option)",description:"\u62cd\u6444\u89c6\u9891\u6216\u4ece\u624b\u673a\u76f8\u518c\u4e2d\u9009\u89c6\u9891\u3002",source:"@site/versioned_docs/version-2.x/apis/media/video/chooseVideo.md",sourceDirName:"apis/media/video",slug:"/apis/media/video/chooseVideo",permalink:"/taro/docs/2.x/apis/media/video/chooseVideo",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-2.x/apis/media/video/chooseVideo.md",tags:[],version:"2.x",frontMatter:{title:"Taro.chooseVideo(option)",sidebar_label:"chooseVideo"},sidebar:"version-2.x/API",previous:{title:"createVideoContext",permalink:"/taro/docs/2.x/apis/media/video/createVideoContext"},next:{title:"VideoContext",permalink:"/taro/docs/2.x/apis/media/video/VideoContext"}},c=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[],level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"Option",id:"option",children:[],level:3},{value:"SuccessCallbackResult",id:"successcallbackresult",children:[],level:3},{value:"camera",id:"camera",children:[],level:3},{value:"sourceType",id:"sourcetype",children:[],level:3}],level:2},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[],level:2},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[],level:2}],k={toc:c};function s(t){var e=t.components,l=(0,r.Z)(t,a);return(0,o.kt)("wrapper",(0,n.Z)({},k,l,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u62cd\u6444\u89c6\u9891\u6216\u4ece\u624b\u673a\u76f8\u518c\u4e2d\u9009\u89c6\u9891\u3002"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/media/video/wx.chooseVideo.html"},"\u53c2\u8003\u6587\u6863"))),(0,o.kt)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"(option: Option) => Promise<void>\n")),(0,o.kt)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,o.kt)("h3",{id:"option"},"Option"),(0,o.kt)("table",null,(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"\u53c2\u6570"),(0,o.kt)("th",null,"\u7c7b\u578b"),(0,o.kt)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),(0,o.kt)("th",null,"\u8bf4\u660e"))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,"camera"),(0,o.kt)("td",null,(0,o.kt)("code",null,'"back" | "front"')),(0,o.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,o.kt)("td",null,"\u9ed8\u8ba4\u62c9\u8d77\u7684\u662f\u524d\u7f6e\u6216\u8005\u540e\u7f6e\u6444\u50cf\u5934\u3002\u90e8\u5206 Android \u624b\u673a\u4e0b\u7531\u4e8e\u7cfb\u7edf ROM \u4e0d\u652f\u6301\u65e0\u6cd5\u751f\u6548")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"complete"),(0,o.kt)("td",null,(0,o.kt)("code",null,"(res: CallbackResult) => void")),(0,o.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,o.kt)("td",null,"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"compressed"),(0,o.kt)("td",null,(0,o.kt)("code",null,"boolean")),(0,o.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,o.kt)("td",null,"\u662f\u5426\u538b\u7f29\u6240\u9009\u62e9\u7684\u89c6\u9891\u6587\u4ef6")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"fail"),(0,o.kt)("td",null,(0,o.kt)("code",null,"(res: CallbackResult) => void")),(0,o.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,o.kt)("td",null,"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"maxDuration"),(0,o.kt)("td",null,(0,o.kt)("code",null,"number")),(0,o.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,o.kt)("td",null,"\u62cd\u6444\u89c6\u9891\u6700\u957f\u62cd\u6444\u65f6\u95f4\uff0c\u5355\u4f4d\u79d2")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"sourceType"),(0,o.kt)("td",null,(0,o.kt)("code",null,'("album" | "camera")[]')),(0,o.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,o.kt)("td",null,"\u89c6\u9891\u9009\u62e9\u7684\u6765\u6e90")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"success"),(0,o.kt)("td",null,(0,o.kt)("code",null,"(result: SuccessCallbackResult) => void")),(0,o.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,o.kt)("td",null,"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")))),(0,o.kt)("h3",{id:"successcallbackresult"},"SuccessCallbackResult"),(0,o.kt)("table",null,(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"\u53c2\u6570"),(0,o.kt)("th",null,"\u7c7b\u578b"),(0,o.kt)("th",null,"\u8bf4\u660e"))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,"duration"),(0,o.kt)("td",null,(0,o.kt)("code",null,"number")),(0,o.kt)("td",null,"\u9009\u5b9a\u89c6\u9891\u7684\u65f6\u95f4\u957f\u5ea6")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"height"),(0,o.kt)("td",null,(0,o.kt)("code",null,"number")),(0,o.kt)("td",null,"\u8fd4\u56de\u9009\u5b9a\u89c6\u9891\u7684\u9ad8\u5ea6")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"size"),(0,o.kt)("td",null,(0,o.kt)("code",null,"number")),(0,o.kt)("td",null,"\u9009\u5b9a\u89c6\u9891\u7684\u6570\u636e\u91cf\u5927\u5c0f")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"tempFilePath"),(0,o.kt)("td",null,(0,o.kt)("code",null,"string")),(0,o.kt)("td",null,"\u9009\u5b9a\u89c6\u9891\u7684\u4e34\u65f6\u6587\u4ef6\u8def\u5f84")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"width"),(0,o.kt)("td",null,(0,o.kt)("code",null,"number")),(0,o.kt)("td",null,"\u8fd4\u56de\u9009\u5b9a\u89c6\u9891\u7684\u5bbd\u5ea6")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"errMsg"),(0,o.kt)("td",null,(0,o.kt)("code",null,"string")),(0,o.kt)("td",null,"\u8c03\u7528\u7ed3\u679c")))),(0,o.kt)("h3",{id:"camera"},"camera"),(0,o.kt)("table",null,(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"\u53c2\u6570"),(0,o.kt)("th",null,"\u8bf4\u660e"))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,"back"),(0,o.kt)("td",null,"\u9ed8\u8ba4\u62c9\u8d77\u540e\u7f6e\u6444\u50cf\u5934")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"front"),(0,o.kt)("td",null,"\u9ed8\u8ba4\u62c9\u8d77\u524d\u7f6e\u6444\u50cf\u5934")))),(0,o.kt)("h3",{id:"sourcetype"},"sourceType"),(0,o.kt)("table",null,(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"\u53c2\u6570"),(0,o.kt)("th",null,"\u8bf4\u660e"))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,"album"),(0,o.kt)("td",null,"\u4ece\u76f8\u518c\u9009\u62e9\u89c6\u9891")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"camera"),(0,o.kt)("td",null,"\u4f7f\u7528\u76f8\u673a\u62cd\u6444\u89c6\u9891")))),(0,o.kt)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"Taro.chooseVideo({\n  sourceType: ['album','camera'],\n  maxDuration: 60,\n  camera: 'back',\n  success: function (res) {\n    console.log(res.tempFilePath)\n  }\n})\n")),(0,o.kt)("h2",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"API"),(0,o.kt)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,o.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,o.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"Taro.chooseVideo"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,o.kt)("td",{parentName:"tr",align:"center"}),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")))))}s.isMDXComponent=!0}}]);