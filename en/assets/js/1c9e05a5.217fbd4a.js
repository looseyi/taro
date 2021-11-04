"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[56754],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return v}});var n=r(67294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=s(r),v=l,k=d["".concat(c,".").concat(v)]||d[v]||p[v]||a;return r?n.createElement(k,o(o({ref:t},u),{},{components:r})):n.createElement(k,o({ref:t},u))}));function v(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=r.length,o=new Array(a);o[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var s=2;s<a;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},99668:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return u},default:function(){return d}});var n=r(83117),l=r(80102),a=(r(67294),r(3905)),o=["components"],i={title:"Taro.startLocalServiceDiscovery(option)",sidebar_label:"startLocalServiceDiscovery"},c=void 0,s={unversionedId:"apis/network/mdns/startLocalServiceDiscovery",id:"version-2.x/apis/network/mdns/startLocalServiceDiscovery",isDocsHomePage:!1,title:"Taro.startLocalServiceDiscovery(option)",description:"\u5f00\u59cb\u641c\u7d22\u5c40\u57df\u7f51\u4e0b\u7684 mDNS \u670d\u52a1\u3002\u641c\u7d22\u7684\u7ed3\u679c\u4f1a\u901a\u8fc7 wx.onLocalService* \u4e8b\u4ef6\u8fd4\u56de\u3002",source:"@site/versioned_docs/version-2.x/apis/network/mdns/startLocalServiceDiscovery.md",sourceDirName:"apis/network/mdns",slug:"/apis/network/mdns/startLocalServiceDiscovery",permalink:"/taro/en/docs/2.x/apis/network/mdns/startLocalServiceDiscovery",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-2.x/apis/network/mdns/startLocalServiceDiscovery.md",tags:[],version:"2.x",frontMatter:{title:"Taro.startLocalServiceDiscovery(option)",sidebar_label:"startLocalServiceDiscovery"},sidebar:"version-2.x/API",previous:{title:"stopLocalServiceDiscovery",permalink:"/taro/en/docs/2.x/apis/network/mdns/stopLocalServiceDiscovery"},next:{title:"onLocalServiceResolveFail",permalink:"/taro/en/docs/2.x/apis/network/mdns/onLocalServiceResolveFail"}},u=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[],level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"Option",id:"option",children:[],level:3},{value:"FailCallbackResult",id:"failcallbackresult",children:[],level:3}],level:2},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[],level:2}],p={toc:u};function d(e){var t=e.components,r=(0,l.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u5f00\u59cb\u641c\u7d22\u5c40\u57df\u7f51\u4e0b\u7684 mDNS \u670d\u52a1\u3002\u641c\u7d22\u7684\u7ed3\u679c\u4f1a\u901a\u8fc7 wx.onLocalService* \u4e8b\u4ef6\u8fd4\u56de\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u6ce8\u610f")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"wx.startLocalServiceDiscovery \u662f\u4e00\u4e2a\u6d88\u8017\u6027\u80fd\u7684\u884c\u4e3a\uff0c\u5f00\u59cb 30 \u79d2\u540e\u4f1a\u81ea\u52a8 stop \u5e76\u6267\u884c wx.onLocalServiceDiscoveryStop \u6ce8\u518c\u7684\u56de\u8c03\u51fd\u6570\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5728\u8c03\u7528 wx.startLocalServiceDiscovery \u540e\uff0c\u5728\u8fd9\u6b21\u641c\u7d22\u884c\u4e3a\u505c\u6b62\u540e\u624d\u80fd\u53d1\u8d77\u4e0b\u6b21 wx.startLocalServiceDiscovery\u3002\u505c\u6b62\u672c\u6b21\u641c\u7d22\u884c\u4e3a\u7684\u64cd\u4f5c\u5305\u62ec\u8c03\u7528 wx.stopLocalServiceDiscovery \u548c 30 \u79d2\u540e\u7cfb\u7edf\u81ea\u52a8 stop \u672c\u6b21\u641c\u7d22\u3002")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/network/mdns/wx.startLocalServiceDiscovery.html"},"\u53c2\u8003\u6587\u6863"))),(0,a.kt)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"(option: Option) => void\n")),(0,a.kt)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,a.kt)("h3",{id:"option"},"Option"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"\u53c2\u6570"),(0,a.kt)("th",null,"\u7c7b\u578b"),(0,a.kt)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),(0,a.kt)("th",null,"\u8bf4\u660e"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"complete"),(0,a.kt)("td",null,(0,a.kt)("code",null,"(res: CallbackResult) => void")),(0,a.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,a.kt)("td",null,"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"fail"),(0,a.kt)("td",null,(0,a.kt)("code",null,"(result: FailCallbackResult) => void")),(0,a.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,a.kt)("td",null,"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"success"),(0,a.kt)("td",null,(0,a.kt)("code",null,"(res: CallbackResult) => void")),(0,a.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,a.kt)("td",null,"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")))),(0,a.kt)("h3",{id:"failcallbackresult"},"FailCallbackResult"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"\u53c2\u6570"),(0,a.kt)("th",null,"\u7c7b\u578b"),(0,a.kt)("th",null,"\u8bf4\u660e"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"errMsg"),(0,a.kt)("td",null,(0,a.kt)("code",null,"string")),(0,a.kt)("td",null,"\u9519\u8bef\u4fe1\u606f",(0,a.kt)("br",null),(0,a.kt)("br",null),"\u53ef\u9009\u503c\uff1a",(0,a.kt)("br",null),"- 'invalid param': serviceType \u4e3a\u7a7a;",(0,a.kt)("br",null),"- 'scan task already exist': \u5728\u5f53\u524d startLocalServiceDiscovery \u53d1\u8d77\u7684\u641c\u7d22\u672a\u505c\u6b62\u7684\u60c5\u51b5\u4e0b\uff0c\u518d\u6b21\u8c03\u7528 startLocalServiceDiscovery;")))),(0,a.kt)("h2",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"API"),(0,a.kt)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,a.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,a.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"Taro.startLocalServiceDiscovery"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})))))}d.isMDXComponent=!0}}]);