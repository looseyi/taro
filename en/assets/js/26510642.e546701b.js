"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[46713],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return f}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,c=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),s=u(n),f=i,k=s["".concat(c,".").concat(f)]||s[f]||p[f]||l;return n?r.createElement(k,a(a({ref:t},d),{},{components:n})):r.createElement(k,a({ref:t},d))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,a=new Array(l);a[0]=s;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:i,a[1]=o;for(var u=2;u<l;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},72202:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return d},default:function(){return s}});var r=n(83117),i=n(80102),l=(n(67294),n(3905)),a=["components"],o={title:"Taro.onWifiConnected(callback)",sidebar_label:"onWifiConnected"},c=void 0,u={unversionedId:"apis/device/wifi/onWifiConnected",id:"version-2.x/apis/device/wifi/onWifiConnected",isDocsHomePage:!1,title:"Taro.onWifiConnected(callback)",description:"\u76d1\u542c\u8fde\u63a5\u4e0a Wi-Fi \u7684\u4e8b\u4ef6\u3002",source:"@site/versioned_docs/version-2.x/apis/device/wifi/onWifiConnected.md",sourceDirName:"apis/device/wifi",slug:"/apis/device/wifi/onWifiConnected",permalink:"/taro/en/docs/2.x/apis/device/wifi/onWifiConnected",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-2.x/apis/device/wifi/onWifiConnected.md",tags:[],version:"2.x",frontMatter:{title:"Taro.onWifiConnected(callback)",sidebar_label:"onWifiConnected"},sidebar:"version-2.x/API",previous:{title:"setWifiList",permalink:"/taro/en/docs/2.x/apis/device/wifi/setWifiList"},next:{title:"onGetWifiList",permalink:"/taro/en/docs/2.x/apis/device/wifi/onGetWifiList"}},d=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[],level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"Callback",id:"callback",children:[],level:3},{value:"CallbackResult",id:"callbackresult",children:[],level:3}],level:2},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[],level:2}],p={toc:d};function s(e){var t=e.components,n=(0,i.Z)(e,a);return(0,l.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u76d1\u542c\u8fde\u63a5\u4e0a Wi-Fi \u7684\u4e8b\u4ef6\u3002"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/device/wifi/wx.onWifiConnected.html"},"\u53c2\u8003\u6587\u6863"))),(0,l.kt)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"(callback: Callback) => void\n")),(0,l.kt)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,l.kt)("h3",{id:"callback"},"Callback"),(0,l.kt)("p",null,"\u8fde\u63a5\u4e0a Wi-Fi \u7684\u4e8b\u4ef6\u7684\u56de\u8c03\u51fd\u6570"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"(result: CallbackResult) => void\n")),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"\u53c2\u6570"),(0,l.kt)("th",null,"\u7c7b\u578b"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"result"),(0,l.kt)("td",null,(0,l.kt)("code",null,"CallbackResult"))))),(0,l.kt)("h3",{id:"callbackresult"},"CallbackResult"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"\u53c2\u6570"),(0,l.kt)("th",null,"\u7c7b\u578b"),(0,l.kt)("th",null,"\u8bf4\u660e"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"wifi"),(0,l.kt)("td",null,(0,l.kt)("code",null,"WifiInfo")),(0,l.kt)("td",null,"Wi-Fi \u4fe1\u606f")))),(0,l.kt)("h2",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"API"),(0,l.kt)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,l.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,l.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"Taro.onWifiConnected"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"})))))}s.isMDXComponent=!0}}]);