"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[42129],{3905:function(t,e,r){r.d(e,{Zo:function(){return p},kt:function(){return m}});var n=r(67294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var c=n.createContext({}),d=function(t){var e=n.useContext(c),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},p=function(t){var e=d(t.components);return n.createElement(c.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,i=t.originalType,c=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),s=d(r),m=a,f=s["".concat(c,".").concat(m)]||s[m]||u[m]||i;return r?n.createElement(f,o(o({ref:e},p),{},{components:r})):n.createElement(f,o({ref:e},p))}));function m(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=r.length,o=new Array(i);o[0]=s;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l.mdxType="string"==typeof t?t:a,o[1]=l;for(var d=2;d<i;d++)o[d]=r[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},24878:function(t,e,r){r.r(e),r.d(e,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return d},toc:function(){return p},default:function(){return s}});var n=r(83117),a=r(80102),i=(r(67294),r(3905)),o=["components"],l={title:"Taro.createInterstitialAd(option)",sidebar_label:"createInterstitialAd"},c=void 0,d={unversionedId:"apis/ad/createInterstitialAd",id:"apis/ad/createInterstitialAd",isDocsHomePage:!1,title:"Taro.createInterstitialAd(option)",description:"\u521b\u5efa\u63d2\u5c4f\u5e7f\u544a\u7ec4\u4ef6\u3002",source:"@site/docs/apis/ad/createInterstitialAd.md",sourceDirName:"apis/ad",slug:"/apis/ad/createInterstitialAd",permalink:"/taro/docs/next/apis/ad/createInterstitialAd",editUrl:"https://github.com/nervjs/taro/edit/docs/docs/apis/ad/createInterstitialAd.md",tags:[],version:"current",frontMatter:{title:"Taro.createInterstitialAd(option)",sidebar_label:"createInterstitialAd"},sidebar:"API",previous:{title:"createRewardedVideoAd",permalink:"/taro/docs/next/apis/ad/createRewardedVideoAd"},next:{title:"InterstitialAd",permalink:"/taro/docs/next/apis/ad/InterstitialAd"}},p=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[],level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"Option",id:"option",children:[],level:3}],level:2},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[],level:2}],u={toc:p};function s(t){var e=t.components,r=(0,a.Z)(t,o);return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u521b\u5efa\u63d2\u5c4f\u5e7f\u544a\u7ec4\u4ef6\u3002\n\u8bf7\u901a\u8fc7 getSystemInfoSync \u8fd4\u56de\u5bf9\u8c61\u7684 SDKVersion \u5224\u65ad\u57fa\u7840\u5e93\u7248\u672c\u53f7\u540e\u518d\u4f7f\u7528\u8be5 API\u3002\u6bcf\u6b21\u8c03\u7528\u8be5\u65b9\u6cd5\u521b\u5efa\u63d2\u5c4f\u5e7f\u544a\u90fd\u4f1a\u8fd4\u56de\u4e00\u4e2a\u5168\u65b0\u7684\u5b9e\u4f8b\uff08\u5c0f\u7a0b\u5e8f\u7aef\u7684\u63d2\u5c4f\u5e7f\u544a\u5b9e\u4f8b\u4e0d\u5141\u8bb8\u8de8\u9875\u9762\u4f7f\u7528\uff09\u3002"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/ad/wx.createInterstitialAd.html"},"\u53c2\u8003\u6587\u6863"))),(0,i.kt)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"(option: Option) => InterstitialAd\n")),(0,i.kt)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,i.kt)("h3",{id:"option"},"Option"),(0,i.kt)("table",null,(0,i.kt)("thead",null,(0,i.kt)("tr",null,(0,i.kt)("th",null,"\u53c2\u6570"),(0,i.kt)("th",null,"\u7c7b\u578b"),(0,i.kt)("th",null,"\u8bf4\u660e"))),(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,"adUnitId"),(0,i.kt)("td",null,(0,i.kt)("code",null,"string")),(0,i.kt)("td",null,"\u5e7f\u544a\u5355\u5143 id")))),(0,i.kt)("h2",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"API"),(0,i.kt)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,i.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,i.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"Taro.createInterstitialAd"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"})))))}s.isMDXComponent=!0}}]);