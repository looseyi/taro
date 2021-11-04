"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[754],{3905:function(t,e,n){n.d(e,{Zo:function(){return s},kt:function(){return k}});var a=n(67294);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,a,l=function(t,e){if(null==t)return{};var n,a,l={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var i=a.createContext({}),u=function(t){var e=a.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},s=function(t){var e=u(t.components);return a.createElement(i.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},p=a.forwardRef((function(t,e){var n=t.components,l=t.mdxType,r=t.originalType,i=t.parentName,s=c(t,["components","mdxType","originalType","parentName"]),p=u(n),k=l,m=p["".concat(i,".").concat(k)]||p[k]||d[k]||r;return n?a.createElement(m,o(o({ref:e},s),{},{components:n})):a.createElement(m,o({ref:e},s))}));function k(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=n.length,o=new Array(r);o[0]=p;var c={};for(var i in e)hasOwnProperty.call(e,i)&&(c[i]=e[i]);c.originalType=t,c.mdxType="string"==typeof t?t:l,o[1]=c;for(var u=2;u<r;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},52438:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return c},contentTitle:function(){return i},metadata:function(){return u},toc:function(){return s},default:function(){return p}});var a=n(83117),l=n(80102),r=(n(67294),n(3905)),o=["components"],c={title:"Taro.canvasGetImageData(option, component)",sidebar_label:"canvasGetImageData"},i=void 0,u={unversionedId:"apis/canvas/canvasGetImageData",id:"apis/canvas/canvasGetImageData",isDocsHomePage:!1,title:"Taro.canvasGetImageData(option, component)",description:"Obtains the implied pixel data for the canvas area.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/apis/canvas/canvasGetImageData.md",sourceDirName:"apis/canvas",slug:"/apis/canvas/canvasGetImageData",permalink:"/taro/en/docs/next/apis/canvas/canvasGetImageData",editUrl:"https://github.com/nervjs/taro/edit/docs/docs/apis/canvas/canvasGetImageData.md",tags:[],version:"current",frontMatter:{title:"Taro.canvasGetImageData(option, component)",sidebar_label:"canvasGetImageData"},sidebar:"API",previous:{title:"canvasPutImageData",permalink:"/taro/en/docs/next/apis/canvas/canvasPutImageData"},next:{title:"Canvas",permalink:"/taro/en/docs/next/apis/canvas/Canvas"}},s=[{value:"Type",id:"type",children:[],level:2},{value:"Parameters",id:"parameters",children:[{value:"Option",id:"option",children:[],level:3},{value:"SuccessCallbackResult",id:"successcallbackresult",children:[],level:3}],level:2},{value:"Sample Code",id:"sample-code",children:[],level:2},{value:"API Support",id:"api-support",children:[],level:2}],d={toc:s};function p(t){var e=t.components,n=(0,l.Z)(t,o);return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Obtains the implied pixel data for the canvas area."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/canvas/wx.canvasGetImageData.html"},"Reference"))),(0,r.kt)("h2",{id:"type"},"Type"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"(option: Option, component?: Record<string, any>) => Promise<SuccessCallbackResult>\n")),(0,r.kt)("h2",{id:"parameters"},"Parameters"),(0,r.kt)("h3",{id:"option"},"Option"),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Property"),(0,r.kt)("th",null,"Type"),(0,r.kt)("th",{style:{textAlign:"center"}},"Required"),(0,r.kt)("th",null,"Description"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"canvasId"),(0,r.kt)("td",null,(0,r.kt)("code",null,"string")),(0,r.kt)("td",{style:{textAlign:"center"}},"Yes"),(0,r.kt)("td",null,"The canvas ID, which is the canvas-id property passed into the ",(0,r.kt)("code",null,"canvas")," component.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"height"),(0,r.kt)("td",null,(0,r.kt)("code",null,"number")),(0,r.kt)("td",{style:{textAlign:"center"}},"Yes"),(0,r.kt)("td",null,"The height of the rectangular area containing the image data to be extracted.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"width"),(0,r.kt)("td",null,(0,r.kt)("code",null,"number")),(0,r.kt)("td",{style:{textAlign:"center"}},"Yes"),(0,r.kt)("td",null,"The width of the rectangular area containing the image data to be extracted.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"x"),(0,r.kt)("td",null,(0,r.kt)("code",null,"number")),(0,r.kt)("td",{style:{textAlign:"center"}},"Yes"),(0,r.kt)("td",null,"The x-coordinate of the top-left corner of the rectangular area containing the image data to be extracted.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"y"),(0,r.kt)("td",null,(0,r.kt)("code",null,"number")),(0,r.kt)("td",{style:{textAlign:"center"}},"Yes"),(0,r.kt)("td",null,"The y-coordinate of the top-left corner of the rectangular area containing the image data to be extracted.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"complete"),(0,r.kt)("td",null,(0,r.kt)("code",null,"(res: any) => void")),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"The callback function used when the API call completed (always executed whether the call succeeds or fails)")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"fail"),(0,r.kt)("td",null,(0,r.kt)("code",null,"(res: any) => void")),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"The callback function for a failed API call")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"success"),(0,r.kt)("td",null,(0,r.kt)("code",null,"(res: Result) => void")),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"The callback function for a successful API call")))),(0,r.kt)("h3",{id:"successcallbackresult"},"SuccessCallbackResult"),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Property"),(0,r.kt)("th",null,"Type"),(0,r.kt)("th",null,"Description"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"data"),(0,r.kt)("td",null,(0,r.kt)("code",null,"Uint8ClampedArray")),(0,r.kt)("td",null,"The image pixel data, which is a one-dimensional array in which every four items express the RGBA color of one pixel.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"height"),(0,r.kt)("td",null,(0,r.kt)("code",null,"number")),(0,r.kt)("td",null,"The height of the image data rectangle")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"width"),(0,r.kt)("td",null,(0,r.kt)("code",null,"number")),(0,r.kt)("td",null,"The width of the image data rectangle")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"errMsg"),(0,r.kt)("td",null,(0,r.kt)("code",null,"string")),(0,r.kt)("td",null,"Call result")))),(0,r.kt)("h2",{id:"sample-code"},"Sample Code"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"Taro.canvasGetImageData({\n  canvasId: 'myCanvas',\n  x: 0,\n  y: 0,\n  width: 100,\n  height: 100,\n  success: function (res) {\n    console.log(res.width) // 100\n    console.log(res.height) // 100\n    console.log(res.data instanceof Uint8ClampedArray) // true\n    console.log(res.data.length) // 100 * 100 * 4\n  }\n})\n")),(0,r.kt)("h2",{id:"api-support"},"API Support"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"API"),(0,r.kt)("th",{parentName:"tr",align:"center"},"WeChat Mini-Program"),(0,r.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,r.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"Taro.canvasGetImageData"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:"center"})))))}p.isMDXComponent=!0}}]);