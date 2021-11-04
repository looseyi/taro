"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[11073],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return k}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=p(r),k=a,y=d["".concat(i,".").concat(k)]||d[k]||s[k]||l;return r?n.createElement(y,o(o({ref:t},u),{},{components:r})):n.createElement(y,o({ref:t},u))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var p=2;p<l;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},52103:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return i},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var n=r(83117),a=r(80102),l=(r(67294),r(3905)),o=["components"],c={title:"Taro.onGyroscopeChange(callback)",sidebar_label:"onGyroscopeChange"},i=void 0,p={unversionedId:"apis/device/gyroscope/onGyroscopeChange",id:"apis/device/gyroscope/onGyroscopeChange",isDocsHomePage:!1,title:"Taro.onGyroscopeChange(callback)",description:"\u76d1\u542c\u9640\u87ba\u4eea\u6570\u636e\u53d8\u5316\u4e8b\u4ef6\u3002\u9891\u7387\u6839\u636e Taro.startGyroscope() \u7684 interval \u53c2\u6570\u3002\u53ef\u4ee5\u4f7f\u7528 Taro.stopGyroscope() \u505c\u6b62\u76d1\u542c\u3002",source:"@site/docs/apis/device/gyroscope/onGyroscopeChange.md",sourceDirName:"apis/device/gyroscope",slug:"/apis/device/gyroscope/onGyroscopeChange",permalink:"/taro/docs/next/apis/device/gyroscope/onGyroscopeChange",editUrl:"https://github.com/nervjs/taro/edit/docs/docs/apis/device/gyroscope/onGyroscopeChange.md",tags:[],version:"current",frontMatter:{title:"Taro.onGyroscopeChange(callback)",sidebar_label:"onGyroscopeChange"},sidebar:"API",previous:{title:"startGyroscope",permalink:"/taro/docs/next/apis/device/gyroscope/startGyroscope"},next:{title:"offGyroscopeChange",permalink:"/taro/docs/next/apis/device/gyroscope/offGyroscopeChange"}},u=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[],level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"Callback",id:"callback",children:[],level:3},{value:"CallbackResult",id:"callbackresult",children:[],level:3}],level:2},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[],level:2}],s={toc:u};function d(e){var t=e.components,r=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u76d1\u542c\u9640\u87ba\u4eea\u6570\u636e\u53d8\u5316\u4e8b\u4ef6\u3002\u9891\u7387\u6839\u636e Taro.startGyroscope() \u7684 interval \u53c2\u6570\u3002\u53ef\u4ee5\u4f7f\u7528 Taro.stopGyroscope() \u505c\u6b62\u76d1\u542c\u3002"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/device/gyroscope/wx.onGyroscopeChange.html"},"\u53c2\u8003\u6587\u6863"))),(0,l.kt)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"(callback: Callback) => void\n")),(0,l.kt)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,l.kt)("h3",{id:"callback"},"Callback"),(0,l.kt)("p",null,"\u9640\u87ba\u4eea\u6570\u636e\u53d8\u5316\u4e8b\u4ef6\u7684\u56de\u8c03\u51fd\u6570"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"(result: CallbackResult) => void\n")),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"\u53c2\u6570"),(0,l.kt)("th",null,"\u7c7b\u578b"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"result"),(0,l.kt)("td",null,(0,l.kt)("code",null,"CallbackResult"))))),(0,l.kt)("h3",{id:"callbackresult"},"CallbackResult"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"\u53c2\u6570"),(0,l.kt)("th",null,"\u7c7b\u578b"),(0,l.kt)("th",null,"\u8bf4\u660e"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"x"),(0,l.kt)("td",null,(0,l.kt)("code",null,"number")),(0,l.kt)("td",null,"x \u8f74\u7684\u89d2\u901f\u5ea6")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"y"),(0,l.kt)("td",null,(0,l.kt)("code",null,"number")),(0,l.kt)("td",null,"y \u8f74\u7684\u89d2\u901f\u5ea6")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"z"),(0,l.kt)("td",null,(0,l.kt)("code",null,"number")),(0,l.kt)("td",null,"z \u8f74\u7684\u89d2\u901f\u5ea6")))),(0,l.kt)("h2",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"API"),(0,l.kt)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,l.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,l.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"Taro.onGyroscopeChange"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")))))}d.isMDXComponent=!0}}]);