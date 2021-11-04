"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[86104],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(r),d=o,f=m["".concat(l,".").concat(d)]||m[d]||s[d]||a;return r?n.createElement(f,u(u({ref:t},c),{},{components:r})):n.createElement(f,u({ref:t},c))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,u=new Array(a);u[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,u[1]=i;for(var p=2;p<a;p++)u[p]=r[p];return n.createElement.apply(null,u)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},29585:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return m}});var n=r(83117),o=r(80102),a=(r(67294),r(3905)),u=["components"],i={title:"Vue3"},l=void 0,p={unversionedId:"vue3",id:"vue3",isDocsHomePage:!1,title:"Vue3",description:"Taro \u53ef\u4ee5\u4f7f\u7528 Vue 3 \u8fdb\u884c\u5f00\u53d1\uff0c\u5f00\u53d1\u8005\u53ef\u4ee5\u4f7f\u7528 taro init \u547d\u4ee4\u521b\u5efa Vue3 \u7684\u6a21\u7248\uff0c\u5305\u62ec default\u3001 vuex \u4ee5\u53ca NutUI3.0 \u3002\u6211\u4eec\u63a8\u8350\u4f7f\u7528 NutUI3.0 \u6a21\u7248\u8fdb\u884c\u5f00\u53d1\u3002",source:"@site/docs/vue3.md",sourceDirName:".",slug:"/vue3",permalink:"/taro/docs/next/vue3",editUrl:"https://github.com/nervjs/taro/edit/docs/docs/vue3.md",tags:[],version:"current",frontMatter:{title:"Vue3"},sidebar:"docs",previous:{title:"\u9875\u9762\u7ec4\u4ef6",permalink:"/taro/docs/next/vue-page"},next:{title:"Vue DevTools",permalink:"/taro/docs/next/vue-devtools"}},c=[{value:"\u5176\u5b83\u9650\u5236",id:"\u5176\u5b83\u9650\u5236",children:[],level:2},{value:"\u76f8\u5173\u9605\u8bfb",id:"\u76f8\u5173\u9605\u8bfb",children:[],level:2}],s={toc:c};function m(e){var t=e.components,r=(0,o.Z)(e,u);return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Taro \u53ef\u4ee5\u4f7f\u7528 Vue 3 \u8fdb\u884c\u5f00\u53d1\uff0c\u5f00\u53d1\u8005\u53ef\u4ee5\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"taro init")," \u547d\u4ee4\u521b\u5efa Vue3 \u7684\u6a21\u7248\uff0c\u5305\u62ec ",(0,a.kt)("strong",{parentName:"p"},"default"),"\u3001 ",(0,a.kt)("strong",{parentName:"p"},"vuex")," \u4ee5\u53ca ",(0,a.kt)("a",{parentName:"p",href:"https://nutui.jd.com/#/button"},"NutUI3.0")," \u3002\u6211\u4eec\u63a8\u8350\u4f7f\u7528 NutUI3.0 \u6a21\u7248\u8fdb\u884c\u5f00\u53d1\u3002"),(0,a.kt)("p",null,"\u5177\u4f53\u7528\u6cd5\u53ef\u4ee5\u53c2\u8003 Taro Vue \u7cfb\u5217\u6587\u6863\u3002"),(0,a.kt)("p",null,"\u5f00\u53d1\u8005\u53ef\u4ee5\u81ea\u884c\u9009\u62e9\u4f7f\u7528 options \u5f0f\u914d\u7f6e\u6216 ",(0,a.kt)("a",{parentName:"p",href:"https://v3.vuejs.org/guide/composition-api-introduction.html"},"Composition API")," \u7ec4\u7ec7\u903b\u8f91\uff0c\u6d4f\u89c8 ",(0,a.kt)("a",{parentName:"p",href:"https://v3.vuejs.org/"},"Vue 3 \u6587\u6863")," \u4ee5\u4e86\u89e3\u66f4\u591a\u7684 Vue3 \u6539\u52a8\u3002"),(0,a.kt)("h2",{id:"\u5176\u5b83\u9650\u5236"},"\u5176\u5b83\u9650\u5236"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5c0f\u7a0b\u5e8f\u4e2d\u4e0d\u652f\u6301 ",(0,a.kt)("inlineCode",{parentName:"li"},"<style scoped>"),"\uff0c\u5efa\u8bae\u4f7f\u7528 cssModules \u4ee3\u66ff\u3002",(0,a.kt)("a",{parentName:"li",href:"https://github.com/NervJS/taro/issues/6662"},"#6662")),(0,a.kt)("li",{parentName:"ul"},"\u4e0d\u80fd\u5728\u9875\u9762\u7ec4\u4ef6\u7684 DOM \u6811\u4e4b\u5916\u63d2\u5165\u5143\u7d20\uff0c\u56e0\u6b64\u4e0d\u652f\u6301 ",(0,a.kt)("inlineCode",{parentName:"li"},"<teleport>")),(0,a.kt)("li",{parentName:"ul"},"Vue 3 \u5185\u90e8\u5b9e\u73b0\u4f7f\u7528\u4e86 Proxy \uff0c\u5728 iOS 9 \u53ca\u4ee5\u4e0b\u64cd\u4f5c\u7cfb\u7edf\u65e0\u6cd5\u8fd0\u884c\u3002\u4f46 Vue \u5b98\u65b9\u56e2\u961f\u5728\u6b63\u5f0f\u7248\u53d1\u5e03\u540e\u4f1a\u63a8\u51fa\u517c\u5bb9\u7248\u672c\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5728 H5 \u7aef\u4f7f\u7528 ref \u83b7\u53d6\u57fa\u7840\u7ec4\u4ef6\u7684 DOM \u8282\u70b9\uff0c\u73b0\u5728\u53ea\u80fd\u5f97\u5230\u9002\u914d\u5c42\u7684 Vue \u7ec4\u4ef6\u5b9e\u4f8b\uff0c\u800c\u4e0d\u662f\u5bf9\u5e94\u7684 webComponent \u6839\u8282\u70b9\u3002\u5728 Vue2 \u91cc\u53ef\u4ee5\u901a\u8fc7\u4fee\u6539\u7236\u5143\u7d20\u7684 refs \u5c5e\u6027\u5b9e\u73b0\uff0c\u4f46 Vue3 \u4e2d\u7ec4\u4ef6\u95f4\u521d\u59cb\u5316\u987a\u5e8f\u6709\u53d8\u5316\uff0c\u56e0\u6b64\u6682\u65f6\u4e0d\u80fd\u652f\u6301\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5c0f\u7a0b\u5e8f\u7aef\u975e\u7c7b\u4f3c HTML \u8868\u5355\u6807\u7b7e\u89c4\u8303\u7684\u8868\u5355\u7ec4\u4ef6\uff0c\u5982 Picker\uff0c\u6682\u4e0d\u517c\u5bb9 v-model\u3002Vue3 \u7684 v-model \u7ed1\u5b9a\u5c5e\u6027\u6539\u4e3a\u4e86 modelValue\uff0c\u4e8b\u4ef6\u7ed1\u5b9a\u6539\u4e3a\u4e86 update:modelValue\u3002\u5bf9\u4e8e HTML \u8868\u5355\u6807\u7b7e\u4f1a\u81ea\u52a8\u5bf9\u63a5\u8868\u5355\u7684\u503c\u4e0e\u4e8b\u4ef6\uff0c\u4f8b\u5982 input \u4f1a\u81ea\u52a8\u5bf9\u5e94 modelValue \u4e0e value\u3001update:modelValue \u4e0e @input\u3002\u4f46\u5bf9\u4e8e Picker \u8fd9\u79cd\u5c0f\u7a0b\u5e8f\u7279\u6709\u8868\u5355\u5219\u65e0\u6cd5\u5bf9\u5e94\uff0c\u5efa\u8bae\u8fd9\u79cd\u60c5\u51b5\u4e0d\u4f7f\u7528 v-model\u3002"),(0,a.kt)("li",{parentName:"ul"},"VirtualList \u7ec4\u4ef6\u9700\u8981\u5b9e\u73b0\u4e00\u4efd Vue3 \u7248\u672c\uff08\u5f85\u5b9e\u73b0\uff09"),(0,a.kt)("li",{parentName:"ul"},"\u6240\u6709\u7ec4\u4ef6\u7684 ",(0,a.kt)("inlineCode",{parentName:"li"},"id")," \u5fc5\u987b\u5728\u6574\u4e2a\u5e94\u7528\u4e2d\u4fdd\u6301\u552f\u4e00\uff08\u5373\u4f7f\u4ed6\u4eec\u5728\u4e0d\u540c\u7684\u9875\u9762\uff09\uff0c\u5426\u5219\u53ef\u80fd\u5bfc\u81f4\u4e8b\u4ef6\u4e0d\u89e6\u53d1\u7684\u95ee\u9898\uff0c",(0,a.kt)("a",{parentName:"li",href:"https://github.com/NervJS/taro/issues/7317"},"#7317"))),(0,a.kt)("h2",{id:"\u76f8\u5173\u9605\u8bfb"},"\u76f8\u5173\u9605\u8bfb"),(0,a.kt)("p",null,"Vue3 \u65b0\u7279\u6027\u53ef\u53c2\u9605 ",(0,a.kt)("a",{parentName:"p",href:"https://v3.vuejs.org/guide/migration/introduction.html#notable-new-features"},"Vue3 \u6587\u6863"),"\u3002"),(0,a.kt)("p",null,"Taro \u662f\u5982\u4f55\u517c\u5bb9 Vue3 \u7684\uff0c\u53ef\u53c2\u9605 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/NervJS/taro-rfcs/blob/master/rfcs/0001-vue-3-support.md"},"Taro RFC"),"\u3002"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://taro-club.jd.com/topic/2267/%E4%BD%BF%E7%94%A8-vue3-%E5%BC%80%E5%8F%91%E5%B0%8F%E7%A8%8B%E5%BA%8F"},"\u300a\u4f7f\u7528 Vue3 \u5f00\u53d1\u5c0f\u7a0b\u5e8f\u300b")," by lillian\u3002"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/jdf2e/nutui-demo/tree/master/taro"}," NutUI \u5f00\u53d1\u793a\u4f8b ")," by jdf2e\u3002"))}m.isMDXComponent=!0}}]);