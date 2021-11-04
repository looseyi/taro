"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[91286],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,k=m["".concat(l,".").concat(d)]||m[d]||s[d]||o;return n?r.createElement(k,i(i({ref:t},p),{},{components:n})):r.createElement(k,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},49896:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return p},default:function(){return m}});var r=n(83117),a=n(80102),o=(n(67294),n(3905)),i=["components"],c={title:"Taro.nextTick(callback)",sidebar_label:"nextTick"},l=void 0,u={unversionedId:"apis/ui/custom-component/nextTick",id:"version-3.x/apis/ui/custom-component/nextTick",isDocsHomePage:!1,title:"Taro.nextTick(callback)",description:"\u5ef6\u8fdf\u4e00\u90e8\u5206\u64cd\u4f5c\u5230\u4e0b\u4e00\u4e2a\u65f6\u95f4\u7247\u518d\u6267\u884c\u3002\uff08\u7c7b\u4f3c\u4e8e setTimeout\uff09",source:"@site/versioned_docs/version-3.x/apis/ui/custom-component/nextTick.md",sourceDirName:"apis/ui/custom-component",slug:"/apis/ui/custom-component/nextTick",permalink:"/taro/docs/apis/ui/custom-component/nextTick",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-3.x/apis/ui/custom-component/nextTick.md",tags:[],version:"3.x",frontMatter:{title:"Taro.nextTick(callback)",sidebar_label:"nextTick"},sidebar:"version-3.x/API",previous:{title:"setTopBarText",permalink:"/taro/docs/apis/ui/sticky/setTopBarText"},next:{title:"getMenuButtonBoundingClientRect",permalink:"/taro/docs/apis/ui/menu/getMenuButtonBoundingClientRect"}},p=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[],level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[],level:2},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[],level:2},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[],level:2}],s={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u5ef6\u8fdf\u4e00\u90e8\u5206\u64cd\u4f5c\u5230\u4e0b\u4e00\u4e2a\u65f6\u95f4\u7247\u518d\u6267\u884c\u3002\uff08\u7c7b\u4f3c\u4e8e setTimeout\uff09"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u8bf4\u660e"),"\n\u56e0\u4e3a\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u4e2d\u7684 setData \u548c triggerEvent \u7b49\u63a5\u53e3\u672c\u8eab\u662f\u540c\u6b65\u7684\u64cd\u4f5c\uff0c\u5f53\u8fd9\u51e0\u4e2a\u63a5\u53e3\u88ab\u8fde\u7eed\u8c03\u7528\u65f6\uff0c\u90fd\u662f\u5728\u4e00\u4e2a\u540c\u6b65\u6d41\u7a0b\u4e2d\u6267\u884c\u5b8c\u7684\uff0c\u56e0\u6b64\u82e5\u903b\u8f91\u4e0d\u5f53\u53ef\u80fd\u4f1a\u5bfc\u81f4\u51fa\u9519\u3002\n\u4e00\u4e2a\u6781\u7aef\u7684\u6848\u4f8b\uff1a\u5f53\u7236\u7ec4\u4ef6\u7684 setData \u5f15\u53d1\u4e86\u5b50\u7ec4\u4ef6\u7684 triggerEvent\uff0c\u8fdb\u800c\u4f7f\u5f97\u7236\u7ec4\u4ef6\u53c8\u8fdb\u884c\u4e86\u4e00\u6b21 setData\uff0c\u671f\u95f4\u6709\u901a\u8fc7 wx:if \u8bed\u53e5\u5bf9\u5b50\u7ec4\u4ef6\u8fdb\u884c\u5378\u8f7d\uff0c\u5c31\u6709\u53ef\u80fd\u5f15\u53d1\u5947\u602a\u7684\u9519\u8bef\uff0c\u6240\u4ee5\u5bf9\u4e8e\u4e0d\u9700\u8981\u5728\u4e00\u4e2a\u540c\u6b65\u6d41\u7a0b\u5185\u5b8c\u6210\u7684\u903b\u8f91\uff0c\u53ef\u4ee5\u4f7f\u7528\u6b64\u63a5\u53e3\u5ef6\u8fdf\u5230\u4e0b\u4e00\u4e2a\u65f6\u95f4\u7247\u518d\u6267\u884c\u3002"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/ui/custom-component/wx.nextTick.html"},"\u53c2\u8003\u6587\u6863"))),(0,o.kt)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"(callback: (...args: any[]) => any) => void\n")),(0,o.kt)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,o.kt)("table",null,(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"\u53c2\u6570"),(0,o.kt)("th",null,"\u7c7b\u578b"))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,"callback"),(0,o.kt)("td",null,(0,o.kt)("code",null,"(...args: any[]) => any"))))),(0,o.kt)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"this.setData({ number: 1 }) // \u76f4\u63a5\u5728\u5f53\u524d\u540c\u6b65\u6d41\u7a0b\u4e2d\u6267\u884c\nTaro.nextTick(() => {\n  this.setData({ number: 3 }) // \u5728\u5f53\u524d\u540c\u6b65\u6d41\u7a0b\u7ed3\u675f\u540e\uff0c\u4e0b\u4e00\u4e2a\u65f6\u95f4\u7247\u6267\u884c\n})\nthis.setData({ number: 2 }) // \u76f4\u63a5\u5728\u5f53\u524d\u540c\u6b65\u6d41\u7a0b\u4e2d\u6267\u884c\n")),(0,o.kt)("h2",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"API"),(0,o.kt)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,o.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,o.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"Taro.nextTick"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,o.kt)("td",{parentName:"tr",align:"center"}),(0,o.kt)("td",{parentName:"tr",align:"center"})))))}m.isMDXComponent=!0}}]);