"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[7016],{3905:function(t,e,a){a.d(e,{Zo:function(){return m},kt:function(){return s}});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),d=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m=function(t){var e=d(t.components);return n.createElement(p.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},N=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),N=d(a),s=r,u=N["".concat(p,".").concat(s)]||N[s]||k[s]||l;return a?n.createElement(u,i(i({ref:e},m),{},{components:a})):n.createElement(u,i({ref:e},m))}));function s(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=N;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var d=2;d<l;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}N.displayName="MDXCreateElement"},65602:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return d},toc:function(){return m},default:function(){return N}});var n=a(83117),r=a(80102),l=(a(67294),a(3905)),i=["components"],o={title:"Taro \u4ed3\u5e93\u6982\u89c8"},p=void 0,d={unversionedId:"codebase-overview",id:"version-3.x/codebase-overview",isDocsHomePage:!1,title:"Taro \u4ed3\u5e93\u6982\u89c8",description:"\u4ed3\u5e93\u7ec4\u6210",source:"@site/versioned_docs/version-3.x/codebase-overview.md",sourceDirName:".",slug:"/codebase-overview",permalink:"/taro/docs/codebase-overview",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-3.x/codebase-overview.md",tags:[],version:"3.x",frontMatter:{title:"Taro \u4ed3\u5e93\u6982\u89c8"},sidebar:"version-3.x/docs",previous:{title:"\u8d21\u732e\u6307\u5357",permalink:"/taro/docs/CONTRIBUTING"},next:{title:"\u5355\u6b65\u8c03\u6d4b\u914d\u7f6e",permalink:"/taro/docs/debug-config"}},m=[{value:"\u4ed3\u5e93\u7ec4\u6210",id:"\u4ed3\u5e93\u7ec4\u6210",children:[{value:"\u57fa\u7840",id:"\u57fa\u7840",children:[],level:3},{value:"\u5c0f\u7a0b\u5e8f",id:"\u5c0f\u7a0b\u5e8f",children:[],level:3},{value:"H5",id:"h5",children:[],level:3},{value:"RN",id:"rn",children:[],level:3},{value:"\u5176\u5b83",id:"\u5176\u5b83",children:[],level:3}],level:2},{value:"\u5982\u4f55\u5f00\u53d1",id:"\u5982\u4f55\u5f00\u53d1",children:[{value:"\u73af\u5883\u51c6\u5907",id:"\u73af\u5883\u51c6\u5907",children:[],level:3},{value:"\u4ee3\u7801\u98ce\u683c",id:"\u4ee3\u7801\u98ce\u683c",children:[],level:3},{value:"\u8c03\u8bd5",id:"\u8c03\u8bd5",children:[],level:3},{value:"\u5355\u5143\u6d4b\u8bd5",id:"\u5355\u5143\u6d4b\u8bd5",children:[],level:3},{value:"commit \u89c4\u8303",id:"commit-\u89c4\u8303",children:[],level:3},{value:"\u6587\u6863",id:"\u6587\u6863",children:[],level:3}],level:2},{value:"\u63d0\u4ea4 Pull Request",id:"\u63d0\u4ea4-pull-request",children:[],level:2}],k={toc:m};function N(t){var e=t.components,a=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,n.Z)({},k,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u4ed3\u5e93\u7ec4\u6210"},"\u4ed3\u5e93\u7ec4\u6210"),(0,l.kt)("p",null,"\u4ee5\u4e0b\u5217\u8868\u4ecb\u7ecd\u4e86 Taro \u7531\u54ea\u4e9b NPM \u5305\u6240\u7ec4\u6210\uff0c\u4ee5\u53ca\u6bcf\u4e2a\u5305\u7684\u529f\u80fd\u3002"),(0,l.kt)("h3",{id:"\u57fa\u7840"},"\u57fa\u7840"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u8def\u5f84"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"@tarojs/cli")),(0,l.kt)("td",{parentName:"tr",align:"left"},"CLI \u5de5\u5177")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"@tarojs/service")),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u63d2\u4ef6\u5316\u5185\u6838")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"@tarojs/taro-loader")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Webpack loaders")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"@tarojs/helper")),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5de5\u5177\u5e93\uff0c\u4e3b\u8981\u4f9b CLI\u3001\u7f16\u8bd1\u65f6\u4f7f\u7528")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"@tarojs/runner-utils")),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5de5\u5177\u5e93\uff0c\u4e3b\u8981\u4f9b\u5c0f\u7a0b\u5e8f\u3001H5 \u7684\u7f16\u8bd1\u5de5\u5177\u4f7f\u7528")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"@tarojs/shared")),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5de5\u5177\u5e93\uff0c\u4e3b\u8981\u4f9b\u8fd0\u884c\u65f6\u4f7f\u7528")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"@tarojs/taro")),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u66b4\u9732\u5404\u7aef\u6240\u9700\u8981\u7684 Taro \u5bf9\u8c61")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"@tarojs/api")),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u548c\u5404\u7aef\u65e0\u5173\u7684 Taro API")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"babel-preset-taro")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Babel preset")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"eslint-config-taro")),(0,l.kt)("td",{parentName:"tr",align:"left"},"ESLint \u89c4\u5219")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"postcss-pxtransform")),(0,l.kt)("td",{parentName:"tr",align:"left"},"PostCSS \u63d2\u4ef6\uff0c\u8f6c\u6362 ",(0,l.kt)("inlineCode",{parentName:"td"},"px")," \u4e3a\u5404\u7aef\u7684\u81ea\u9002\u5e94\u5c3a\u5bf8\u5355\u4f4d")))),(0,l.kt)("h3",{id:"\u5c0f\u7a0b\u5e8f"},"\u5c0f\u7a0b\u5e8f"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u8def\u5f84"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"@tarojs/mini-runner")),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5c0f\u7a0b\u5e8f\u7f16\u8bd1\u5de5\u5177\uff0c\u4e3b\u8981\u7528\u4e8e\u8bbe\u7f6e\u3001\u8c03\u7528 Webpack")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"@tarojs/react")),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u57fa\u4e8e ",(0,l.kt)("inlineCode",{parentName:"td"},"react-reconciler")," \u7684\u5c0f\u7a0b\u5e8f\u4e13\u7528 React \u6e32\u67d3\u5668")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"@tarojs/runtime")),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5c0f\u7a0b\u5e8f\u8fd0\u884c\u65f6\u9002\u914d\u5668\u6838\u5fc3")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"@tarojs/plugin-platform-weapp")),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u63d2\u4ef6")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"@tarojs/plugin-platform-alipay")),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f\u63d2\u4ef6")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"@tarojs/plugin-platform-swan")),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u767e\u5ea6\u5c0f\u7a0b\u5e8f\u63d2\u4ef6")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"@tarojs/plugin-platform-tt")),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5b57\u8282\u8df3\u52a8\u5c0f\u7a0b\u5e8f\u63d2\u4ef6")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"@tarojs/plugin-platform-qq")),(0,l.kt)("td",{parentName:"tr",align:"left"},"qq \u5c0f\u7a0b\u5e8f\u63d2\u4ef6")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"@tarojs/plugin-platform-jd")),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u4eac\u4e1c\u5c0f\u7a0b\u5e8f\u63d2\u4ef6")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"@taojs/plugin-html")),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u652f\u6301\u4f7f\u7528 HTML \u6807\u7b7e\u7684\u63d2\u4ef6")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"postcss-html-transform")),(0,l.kt)("td",{parentName:"tr",align:"left"},"PostCSS \u63d2\u4ef6\uff0c\u7528\u4e8e\u5904\u7406 HTML \u6807\u7b7e\u7684\u7c7b\u540d")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"@taojs/plugin-react-devtools")),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u652f\u6301\u4f7f\u7528 React DevTools \u7684\u63d2\u4ef6")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"@tarojs/extend")),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u7c7b\u4f3c jQuery \u7684\u5e93")))),(0,l.kt)("h3",{id:"h5"},"H5"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u8def\u5f84"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"@tarojs/webpack-runner")),(0,l.kt)("td",{parentName:"tr",align:"left"},"H5 \u7f16\u8bd1\u5de5\u5177\uff0c\u4e3b\u8981\u7528\u4e8e\u8bbe\u7f6e\u3001\u8c03\u7528 Webpack")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"@tarojs/router")),(0,l.kt)("td",{parentName:"tr",align:"left"},"H5 \u8def\u7531")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"@tarojs/taro-h5")),(0,l.kt)("td",{parentName:"tr",align:"left"},"H5 \u7aef\u6839\u636e\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u89c4\u8303\u5b9e\u73b0\u7684 API")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"@tarojs/components")),(0,l.kt)("td",{parentName:"tr",align:"left"},"H5 \u7ec4\u4ef6\u5e93\uff08Web Components \u7248\u672c\uff09")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"@tarojs/components-react")),(0,l.kt)("td",{parentName:"tr",align:"left"},"H5 \u7ec4\u4ef6\u5e93\uff08React \u7248\u672c\uff09")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"babel-plugin-transform-taroapi")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Babel \u63d2\u4ef6\uff0c\u8ba9 API \u53ef\u4ee5\u88ab ",(0,l.kt)("inlineCode",{parentName:"td"},"tree-shaking"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"postcss-plugin-constparse")),(0,l.kt)("td",{parentName:"tr",align:"left"},"PostCSS \u63d2\u4ef6\uff0c\u7528\u4e8e\u5904\u7406 ",(0,l.kt)("inlineCode",{parentName:"td"},"tabbar")," \u7684\u9ad8\u5ea6")))),(0,l.kt)("h3",{id:"rn"},"RN"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u8def\u5f84"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"@tarojs/components-rn")),(0,l.kt)("td",{parentName:"tr",align:"left"},"RN \u7ec4\u4ef6\u5e93")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"@tarojs/rn-runner")),(0,l.kt)("td",{parentName:"tr",align:"left"},"RN \u7f16\u8bd1\u5de5\u5177\uff0c\u4e3b\u8981\u7528\u4e8e\u8bbe\u7f6e\u3001\u8c03\u7528 metro")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"@tarojs/rn-style-transformer")),(0,l.kt)("td",{parentName:"tr",align:"left"},"RN \u6837\u5f0f\u8f6c\u6362\u5de5\u5177\uff0c\u8ba9 RN \u652f\u6301sass\u3001less\u3001stylus\u3001postcss")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"@tarojs/rn-supporter")),(0,l.kt)("td",{parentName:"tr",align:"left"},"RN \u57fa\u7840 metro \u914d\u7f6e")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"@tarojs/rn-transformer")),(0,l.kt)("td",{parentName:"tr",align:"left"},"RN \u5e94\u7528\u5165\u53e3\u53ca\u9875\u9762\u8f6c\u6362\u5de5\u5177\uff0c\u8ba9 RN \u652f\u6301 Taro \u5b9a\u4e49\u7684 app \u53ca page config")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"@tarojs/router-rn")),(0,l.kt)("td",{parentName:"tr",align:"left"},"RN \u8def\u7531")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"@tarojs/runtime-rn")),(0,l.kt)("td",{parentName:"tr",align:"left"},"RN \u8fd0\u884c\u65f6\u5c01\u88c5")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"@tarojs/taro-rn")),(0,l.kt)("td",{parentName:"tr",align:"left"},"RN \u7aef\u6839\u636e\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u89c4\u8303\u5b9e\u73b0\u7684 API")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"babel-plugin-transform-react-jsx-to-rn-stylesheet")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Babel \u63d2\u4ef6\uff0c\u8ba9 jsx \u652f\u6301 className \u5c5e\u6027")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"taro-css-to-react-native")),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5c06 css \u8f6c\u4e3a RN \u7684 stylesheet")))),(0,l.kt)("h3",{id:"\u5176\u5b83"},"\u5176\u5b83"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u8def\u5f84"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"@tarojs/taroize")),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5c0f\u7a0b\u5e8f\u8f6c Taro \u7684\u7f16\u8bd1\u5668")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"@tarojs/with-weapp")),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5c0f\u7a0b\u5e8f\u8f6c Taro \u7684\u8fd0\u884c\u65f6\u9002\u914d\u5668")))),(0,l.kt)("h2",{id:"\u5982\u4f55\u5f00\u53d1"},"\u5982\u4f55\u5f00\u53d1"),(0,l.kt)("h3",{id:"\u73af\u5883\u51c6\u5907"},"\u73af\u5883\u51c6\u5907"),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"\u9700\u8981\u4fdd\u8bc1\u4f60\u7684 Node.js \u7248\u672c\u5927\u4e8e ",(0,l.kt)("inlineCode",{parentName:"p"},"8"),"\uff08\u5efa\u8bae\u5b89\u88c5 ",(0,l.kt)("inlineCode",{parentName:"p"},"10.5")," \u4ee5\u4e0a\u7248\u672c\uff09"))),(0,l.kt)("p",null,"\u9996\u5148\u628a Taro \u4ed3\u5e93 fork \u4e00\u4efd\u5230\u81ea\u5df1\u7684 Github\uff0c\u7136\u540e\u628a\u9879\u76ee clone \u5230\u672c\u5730\uff0c\u5e76\u5207\u6362\u5230 ",(0,l.kt)("inlineCode",{parentName:"p"},"next")," \u5206\u652f\u3002"),(0,l.kt)("p",null,"\u7136\u540e\u4f9d\u6b21\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ yarn\n$ yarn run bootstrap\n$ yarn build\n")),(0,l.kt)("p",null,"\u8fd0\u884c\u5b8c\u4e0a\u8ff0\u547d\u4ee4\u540e\uff0c\u73af\u5883\u5df2\u7ecf\u51c6\u5907\u597d\uff0c\u6b64\u65f6\u53ef\u4ee5\u65b0\u62c9\u4e00\u6761\u5206\u652f\u8fdb\u884c\u5f00\u53d1\u3002"),(0,l.kt)("h3",{id:"\u4ee3\u7801\u98ce\u683c"},"\u4ee3\u7801\u98ce\u683c"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"JavaScript"),"\uff1a\u9075\u4ece ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/standard/standard"},"JavaScript Standard Style"),"\uff0c\u8be6\u60c5\u8bf7\u770b\u6839\u76ee\u5f55\u7684 ",(0,l.kt)("inlineCode",{parentName:"li"},".eslintrc.js"),"\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"TypeScript"),"\uff1a\u9075\u4ece\u57fa\u4e8e ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/standard/standard"},"JavaScript Standard Style")," \u7684\u53d8\u79cd\uff0c\u8be6\u60c5\u8bf7\u770b\u6839\u76ee\u5f55\u7684 ",(0,l.kt)("inlineCode",{parentName:"li"},".eslintrc.js")," \u548c\u76f8\u5173\u5305\u76ee\u5f55\u4e0b\u7684 ",(0,l.kt)("inlineCode",{parentName:"li"},"tsconfig.json"),"\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u6837\u5f0f\uff1a\u9075\u5faa\u76f8\u5173\u5305\u76ee\u5f55\u4e0b\u7684 ",(0,l.kt)("inlineCode",{parentName:"li"},".stylelintrc")," \u98ce\u683c\u3002")),(0,l.kt)("h3",{id:"\u8c03\u8bd5"},"\u8c03\u8bd5"),(0,l.kt)("p",null,"\u8c03\u8bd5\u8fc7\u7a0b\u4e2d\uff0c\u4e00\u822c\u4f1a\u4f7f\u7528 ",(0,l.kt)("a",{parentName:"p",href:"https://docs.npmjs.com/cli/v7/commands/npm-link/"},"npm link")," \u547d\u4ee4\uff0c\u628a\u9700\u8981\u8c03\u8bd5\u7684\u5305\u8f6f\u94fe\u5230\u4e00\u4e2a\u6d4b\u8bd5\u9879\u76ee\u4e2d\u3002"),(0,l.kt)("p",null,"\u8c03\u8bd5",(0,l.kt)("strong",{parentName:"p"},"\u7f16\u8bd1\u65f6"),"\u7684\u4ee3\u7801\uff0c\u8bf7\u53c2\u8003 ",(0,l.kt)("a",{parentName:"p",href:"./debug-config"},"\u300a\u5355\u6b65\u8c03\u6d4b\u300b"),"\u3002"),(0,l.kt)("p",null,"\u8c03\u8bd5",(0,l.kt)("strong",{parentName:"p"},"\u8fd0\u884c\u65f6"),"\u7684\u4ee3\u7801\uff0c\u53ef\u4ee5\u76f4\u63a5\u65ad\u70b9\u8c03\u8bd5\u3002"),(0,l.kt)("h3",{id:"\u5355\u5143\u6d4b\u8bd5"},"\u5355\u5143\u6d4b\u8bd5"),(0,l.kt)("p",null,"\u76ee\u524d\u8fd9\u4e9b\u5305\u914d\u5907\u4e86\u5355\u5143\u6d4b\u8bd5\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"babel-preset-taro")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"@tarojs/cli")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"@tarojs/components")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"@tarojs/react")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"@tarojs/webpack-runner")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"@tarojs/mini-runner")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"@tarojs/runtime")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"@tarojs/taro-rn")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"@tarojs/components-rn"))),(0,l.kt)("p",null,"\u5f00\u53d1\u8005\u5728\u4fee\u6539\u4e0a\u8ff0\u5305\u540e\uff0c\u8bf7\u52a1\u5fc5\u8fd0\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},"lerna run test:ci --scope [\u5305\u540d]"),"\uff0c\u68c0\u67e5\u6d4b\u8bd5\u7528\u4f8b\u662f\u5426\u90fd\u80fd\u901a\u8fc7\u3002"),(0,l.kt)("p",null,"\u540c\u65f6\uff0c\u5728\u5f00\u53d1\u4e00\u4e9b\u91cd\u8981\u529f\u80fd\u540e\uff0c\u4e5f\u8bf7\u62bd\u65f6\u95f4\u8865\u4e0a\u5bf9\u5e94\u7684\u6d4b\u8bd5\u7528\u4f8b\u3002"),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"\u6ce8\u610f\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"@tarojs/mini-runner"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"@tarojs/webpack-runner")," \u4f7f\u7528\u4e86 ",(0,l.kt)("inlineCode",{parentName:"p"},"snapshot"),"\uff08\u6d4b\u8bd5\u7ed3\u679c\u5feb\u7167\uff09\uff0c\u5728\u4fee\u6539\u8fd9\u4e24\u4e2a\u5305\u6216\u5176\u5b83\u4e00\u4e9b\u5305\u65f6\uff0c\u6709\u53ef\u80fd\u5bfc\u81f4\u8fd9\u4e9b\u5feb\u7167\u5931\u6548\uff0c\u4ece\u800c\u901a\u8fc7\u4e0d\u4e86\u6d4b\u8bd5\u3002\u5f53\u4f60\u4fee\u6539\u4e86\u8fd9\u4e24\u4e2a\u5305\u3001\u6216 CI \u63d0\u793a\u8fd9\u4e24\u4e2a\u5305\u7684\u6d4b\u8bd5\u7528\u4f8b\u51fa\u9519\u65f6\uff0c\u8bf7\u8fd0\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},"lerna run updateSnapshot --scope [\u5305\u540d]")," \u66f4\u65b0 snapshot \u540e\u91cd\u65b0\u63d0\u4ea4\u3002"))),(0,l.kt)("h3",{id:"commit-\u89c4\u8303"},"commit \u89c4\u8303"),(0,l.kt)("p",null,"\u5728\u8f93\u5165 ",(0,l.kt)("inlineCode",{parentName:"p"},"commit message")," \u7684\u65f6\u5019\u8bf7\u52a1\u5fc5\u9075\u4ece ",(0,l.kt)("a",{parentName:"p",href:"https://gist.github.com/stephenparish/9941e89d80e2bc58a153"},"Angular Style Commit Message Conventions")," \u89c4\u8303\u3002"),(0,l.kt)("h3",{id:"\u6587\u6863"},"\u6587\u6863"),(0,l.kt)("p",null,"\u5f53\u63d0\u4ea4\u6d89\u53ca\u65b0\u589e\u7279\u6027\u3001Breaking Changes \u6216\u91cd\u8981\u4fee\u6539\u65f6\uff0c\u8bf7\u65b0\u589e\u3001\u4fee\u6539\u5bf9\u5e94\u7684\u6587\u6863\u3002"),(0,l.kt)("p",null,"\u5173\u4e8e\u6587\u6863\u7684\u5f00\u53d1\u8bf7\u9605\u8bfb",(0,l.kt)("a",{parentName:"p",href:"./CONTRIBUTING#%E4%BF%AE%E6%94%B9%E6%96%87%E6%A1%A3"},"\u300a\u4fee\u6539\u6587\u6863\u300b"),"\u3002"),(0,l.kt)("h2",{id:"\u63d0\u4ea4-pull-request"},"\u63d0\u4ea4 Pull Request"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u5982\u679c\u5bf9 PR\uff08Pull Request\uff09\u4e0d\u4e86\u89e3\uff0c\u8bf7\u9605\u8bfb ",(0,l.kt)("a",{parentName:"p",href:"https://docs.github.com/en/github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests"},"\u300aAbout Pull Requests\u300b"))),(0,l.kt)("p",null,"\u5b8c\u6210\u5f00\u53d1\u540e\uff0c\u63a8\u9001\u5230\u81ea\u5df1\u7684 Taro \u4ed3\u5e93\uff0c\u5c31\u53ef\u4ee5\u51c6\u5907\u63d0\u4ea4 Pull Request \u4e86\u3002"),(0,l.kt)("p",null,"\u63d0\u4ea4 PR \u524d\u8bf7\u9605\u8bfb\u4ee5\u4e0b\u6ce8\u610f\u4e8b\u9879\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u4fdd\u8bc1 ",(0,l.kt)("inlineCode",{parentName:"li"},"npm run build")," \u80fd\u591f\u7f16\u8bd1\u6210\u529f\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u4fdd\u8bc1\u4ee3\u7801\u80fd\u901a\u8fc7 ESLint \u6d4b\u8bd5\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u5f53\u76f8\u5173\u5305\u542b\u6709 ",(0,l.kt)("inlineCode",{parentName:"li"},"npm test:ci")," \u547d\u4ee4\u65f6\uff0c\u5fc5\u987b\u4fdd\u8bc1\u6240\u6709\u6d4b\u8bd5\u7528\u4f8b\u90fd\u80fd\u591f\u901a\u8fc7\uff1b"),(0,l.kt)("li",{parentName:"ol"},"\u5f53\u76f8\u5173\u5305\u6709\u6d4b\u8bd5\u7528\u4f8b\u65f6\uff0c\u8bf7\u7ed9\u4f60\u63d0\u4ea4\u7684\u4ee3\u7801\u4e5f\u6dfb\u52a0\u76f8\u5e94\u7684\u6d4b\u8bd5\u7528\u4f8b\uff1b"),(0,l.kt)("li",{parentName:"ol"},"\u4fdd\u8bc1 commit \u4fe1\u606f\u9700\u8981\u9075\u5faa ",(0,l.kt)("a",{parentName:"li",href:"https://gist.github.com/stephenparish/9941e89d80e2bc58a153"},"Angular Style Commit Message Conventions"),"\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u5982\u679c\u63d0\u4ea4\u5230\u4ee3\u7801\u975e\u5e38\u591a\u6216\u529f\u80fd\u590d\u6742\uff0c\u53ef\u4ee5\u628a PR \u5206\u6210\u51e0\u4e2a commit \u4e00\u8d77\u63d0\u4ea4\u3002\u6211\u4eec\u5728\u5408\u5e76\u65f6\u4f1a\u4f1a\u6839\u636e\u60c5\u51b5 squash\u3002"),(0,l.kt)("li",{parentName:"ol"},"PR \u4f5c\u8005\u53ef\u4ee5\u9009\u62e9\u52a0\u5165\u5230 Taro \u5f00\u53d1\u8005\u5fae\u4fe1\u7fa4\uff0c\u65b9\u4fbf\u5408\u5e76 PR \u548c\u6280\u672f\u4ea4\u6d41\u3002")))}N.isMDXComponent=!0}}]);