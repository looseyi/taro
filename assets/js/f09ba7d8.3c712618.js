"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[32671],{3905:function(t,e,a){a.d(e,{Zo:function(){return c},kt:function(){return s}});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var m=n.createContext({}),p=function(t){var e=n.useContext(m),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},c=function(t){var e=p(t.components);return n.createElement(m.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,m=t.parentName,c=o(t,["components","mdxType","originalType","parentName"]),d=p(a),s=r,k=d["".concat(m,".").concat(s)]||d[s]||u[s]||l;return a?n.createElement(k,i(i({ref:e},c),{},{components:a})):n.createElement(k,i({ref:e},c))}));function s(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=d;var o={};for(var m in e)hasOwnProperty.call(e,m)&&(o[m]=e[m]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},85395:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return o},contentTitle:function(){return m},metadata:function(){return p},toc:function(){return c},default:function(){return d}});var n=a(83117),r=a(80102),l=(a(67294),a(3905)),i=["components"],o={title:"Taro.chooseImage(OBJECT)",sidebar_label:"chooseImage"},m=void 0,p={unversionedId:"apis/multimedia/images/chooseImage",id:"version-1.x/apis/multimedia/images/chooseImage",isDocsHomePage:!1,title:"Taro.chooseImage(OBJECT)",description:"\u4f7f\u7528\u65b9\u5f0f\u540c wx.chooseImage \uff0c\u652f\u6301 Promise \u5316\u4f7f\u7528\u3002",source:"@site/versioned_docs/version-1.x/apis/multimedia/images/chooseImage.md",sourceDirName:"apis/multimedia/images",slug:"/apis/multimedia/images/chooseImage",permalink:"/taro/docs/1.x/apis/multimedia/images/chooseImage",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-1.x/apis/multimedia/images/chooseImage.md",tags:[],version:"1.x",frontMatter:{title:"Taro.chooseImage(OBJECT)",sidebar_label:"chooseImage"},sidebar:"version-1.x/API",previous:{title:"createCameraContext",permalink:"/taro/docs/1.x/apis/multimedia/camera/createCameraContext"},next:{title:"previewImage",permalink:"/taro/docs/1.x/apis/multimedia/images/previewImage"}},c=[{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[],level:2},{value:"\u8fd4\u56de\u503c",id:"\u8fd4\u56de\u503c",children:[{value:"Promise &lt;object res&gt;",id:"promise-object-res",children:[],level:3}],level:2},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[],level:2},{value:"API\u652f\u6301\u5ea6",id:"api\u652f\u6301\u5ea6",children:[],level:2}],u={toc:c};function d(t){var e=t.components,a=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,n.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u4f7f\u7528\u65b9\u5f0f\u540c ",(0,l.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/wx.chooseImage.html"},(0,l.kt)("inlineCode",{parentName:"a"},"wx.chooseImage ")),"\uff0c\u652f\u6301 ",(0,l.kt)("inlineCode",{parentName:"p"},"Promise")," \u5316\u4f7f\u7528\u3002"),(0,l.kt)("p",null,"\u6ce8\uff1aRN \u7aef\u8be5 API \u4e0d\u652f\u6301 ",(0,l.kt)("inlineCode",{parentName:"p"},"count")," \u5c5e\u6027\uff1b\u4e0d\u652f\u6301\u76f8\u673a\u4e0e\u76f8\u518c\u540c\u65f6\u9009\u62e9\uff0c\u53ea\u4f1a\u53d6 ",(0,l.kt)("inlineCode",{parentName:"p"},"sourceType")," \u6570\u7ec4\u91cc\u7684\u7b2c\u4e00\u4e2a\u503c\u3002\u9ed8\u8ba4\u4ece\u76f8\u518c\u9009\u53d6\u56fe\u7247\u3002"),(0,l.kt)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Param"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"Object")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u53c2\u6570")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"[object.sourceType]"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"Array.","<","string",">")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"['","album","'",", ","'","camera","']")),(0,l.kt)("td",{parentName:"tr",align:null},"\u9009\u62e9\u56fe\u7247\u7684\u6765\u6e90\uff08h5\u7aef\u672a\u5b9e\u73b0\uff09")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"[object.sizeType]"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"Array.","<","string",">")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"['","original","'",", ","'","compressed","']")),(0,l.kt)("td",{parentName:"tr",align:null},"\u6240\u9009\u7684\u56fe\u7247\u7684\u5c3a\u5bf8\uff08h5\u7aef\u672a\u5b9e\u73b0\uff09")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"[object.count]"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"number")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"9")),(0,l.kt)("td",{parentName:"tr",align:null},"\u6700\u591a\u53ef\u4ee5\u9009\u62e9\u7684\u56fe\u7247\u5f20\u6570")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"[object.success]"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"function")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"[object.fail]"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"function")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"[object.complete]"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"function")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"[object.imageId]"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"string")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u7528\u6765\u4e0a\u4f20\u7684input\u5143\u7d20ID\uff08\u4ec5h5\u7aef\uff09")))),(0,l.kt)("h2",{id:"\u8fd4\u56de\u503c"},"\u8fd4\u56de\u503c"),(0,l.kt)("h3",{id:"promise-object-res"},"Promise ","<","object res",">"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"res.tempFilePaths"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Array.<string>")),(0,l.kt)("td",{parentName:"tr",align:null},"\u56fe\u7247\u7684\u672c\u5730\u4e34\u65f6\u6587\u4ef6\u8def\u5f84\u5217\u8868")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"res.tempFiles"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Array.<Object>")),(0,l.kt)("td",{parentName:"tr",align:null},"\u56fe\u7247\u7684\u672c\u5730\u4e34\u65f6\u6587\u4ef6\u5217\u8868")))),(0,l.kt)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"import Taro from '@tarojs/taro'\n\nTaro.chooseImage(params).then(...)\n")),(0,l.kt)("h2",{id:"api\u652f\u6301\u5ea6"},"API\u652f\u6301\u5ea6"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"API"),(0,l.kt)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,l.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,l.kt)("th",{parentName:"tr",align:"center"},"React Native"),(0,l.kt)("th",{parentName:"tr",align:"center"},"\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f"),(0,l.kt)("th",{parentName:"tr",align:"center"},"\u767e\u5ea6\u5c0f\u7a0b\u5e8f"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"Taro.chooseImage"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")))))}d.isMDXComponent=!0}}]);