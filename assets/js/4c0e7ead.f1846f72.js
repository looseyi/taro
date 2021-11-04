"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[85685],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return k}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=p(n),k=o,v=d["".concat(c,".").concat(k)]||d[k]||u[k]||l;return n?r.createElement(v,a(a({ref:t},s),{},{components:n})):r.createElement(v,a({ref:t},s))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,a=new Array(l);a[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var p=2;p<l;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},60799:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return s},default:function(){return d}});var r=n(83117),o=n(80102),l=(n(67294),n(3905)),a=["components"],i={title:"Taro.chooseInvoice(option)",sidebar_label:"chooseInvoice"},c=void 0,p={unversionedId:"apis/open-api/invoice/chooseInvoice",id:"version-2.x/apis/open-api/invoice/chooseInvoice",isDocsHomePage:!1,title:"Taro.chooseInvoice(option)",description:"\u9009\u62e9\u7528\u6237\u5df2\u6709\u7684\u53d1\u7968\u3002",source:"@site/versioned_docs/version-2.x/apis/open-api/invoice/chooseInvoice.md",sourceDirName:"apis/open-api/invoice",slug:"/apis/open-api/invoice/chooseInvoice",permalink:"/taro/docs/2.x/apis/open-api/invoice/chooseInvoice",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-2.x/apis/open-api/invoice/chooseInvoice.md",tags:[],version:"2.x",frontMatter:{title:"Taro.chooseInvoice(option)",sidebar_label:"chooseInvoice"},sidebar:"version-2.x/API",previous:{title:"chooseInvoiceTitle",permalink:"/taro/docs/2.x/apis/open-api/invoice/chooseInvoiceTitle"},next:{title:"startSoterAuthentication",permalink:"/taro/docs/2.x/apis/open-api/soter/startSoterAuthentication"}},s=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[],level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"Option",id:"option",children:[],level:3},{value:"SuccessCallbackResult",id:"successcallbackresult",children:[],level:3}],level:2},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[],level:2},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[],level:2}],u={toc:s};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,l.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u9009\u62e9\u7528\u6237\u5df2\u6709\u7684\u53d1\u7968\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u901a\u8fc7 cardId \u548c encryptCode \u83b7\u5f97\u62a5\u9500\u53d1\u7968\u7684\u4fe1\u606f"),"\n\u8bf7\u53c2\u8003",(0,l.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/wiki?t=resource/res_main&id=21517918939oae3U"},"\u5fae\u4fe1\u7535\u5b50\u53d1\u7968\u6587\u6863"),"\u4e2d\uff0c\u300c\u67e5\u8be2\u62a5\u9500\u53d1\u7968\u4fe1\u606f\u300d\u90e8\u5206\u3002\n\u5176\u4e2d ",(0,l.kt)("inlineCode",{parentName:"p"},"access_token")," \u7684\u83b7\u53d6\u8bf7\u53c2\u8003",(0,l.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api-backend/open-api/access-token/auth.getAccessToken.html"},"auth.getAccessToken"),"\u6587\u6863"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/open-api/invoice/wx.chooseInvoice.html"},"\u53c2\u8003\u6587\u6863"))),(0,l.kt)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"(option?: Option) => Promise<SuccessCallbackResult>\n")),(0,l.kt)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,l.kt)("h3",{id:"option"},"Option"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"\u53c2\u6570"),(0,l.kt)("th",null,"\u7c7b\u578b"),(0,l.kt)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),(0,l.kt)("th",null,"\u8bf4\u660e"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"complete"),(0,l.kt)("td",null,(0,l.kt)("code",null,"(res: CallbackResult) => void")),(0,l.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,l.kt)("td",null,"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"fail"),(0,l.kt)("td",null,(0,l.kt)("code",null,"(res: CallbackResult) => void")),(0,l.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,l.kt)("td",null,"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"success"),(0,l.kt)("td",null,(0,l.kt)("code",null,"(result: SuccessCallbackResult) => void")),(0,l.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,l.kt)("td",null,"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")))),(0,l.kt)("h3",{id:"successcallbackresult"},"SuccessCallbackResult"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"\u53c2\u6570"),(0,l.kt)("th",null,"\u7c7b\u578b"),(0,l.kt)("th",null,"\u8bf4\u660e"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"invoiceInfo"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",null,"\u7528\u6237\u9009\u4e2d\u7684\u53d1\u7968\u4fe1\u606f\uff0c\u683c\u5f0f\u4e3a\u4e00\u4e2a JSON \u5b57\u7b26\u4e32\uff0c\u5305\u542b\u4e09\u4e2a\u5b57\u6bb5\uff1a card_id\uff1a\u6240\u9009\u53d1\u7968\u5361\u5238\u7684 cardId\uff0cencrypt_code\uff1a\u6240\u9009\u53d1\u7968\u5361\u5238\u7684\u52a0\u5bc6 code\uff0c\u62a5\u9500\u65b9\u53ef\u4ee5\u901a\u8fc7 cardId \u548c encryptCode \u83b7\u5f97\u62a5\u9500\u53d1\u7968\u7684\u4fe1\u606f\uff0capp_id\uff1a \u53d1\u7968\u65b9\u7684 appId\u3002")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"errMsg"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",null,"\u8c03\u7528\u7ed3\u679c")))),(0,l.kt)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"Taro.chooseInvoice({\n  success: function (res) {}\n})\n")),(0,l.kt)("h2",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"API"),(0,l.kt)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,l.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,l.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"Taro.chooseInvoice"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"})))))}d.isMDXComponent=!0}}]);