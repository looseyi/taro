"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[88329],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return k}});var l=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=l.createContext({}),s=function(e){var t=l.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return l.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},p=l.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,d=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=s(n),k=r,h=p["".concat(d,".").concat(k)]||p[k]||u[k]||a;return n?l.createElement(h,o(o({ref:t},c),{},{components:n})):l.createElement(h,o({ref:t},c))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=p;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var s=2;s<a;s++)o[s]=n[s];return l.createElement.apply(null,o)}return l.createElement.apply(null,n)}p.displayName="MDXCreateElement"},11436:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return d},metadata:function(){return s},toc:function(){return c},default:function(){return p}});var l=n(83117),r=n(80102),a=(n(67294),n(3905)),o=["components"],i={title:"Taro.downloadFile(option)",sidebar_label:"downloadFile"},d=void 0,s={unversionedId:"apis/network/download/downloadFile",id:"apis/network/download/downloadFile",isDocsHomePage:!1,title:"Taro.downloadFile(option)",description:"Downloads local resources to the local device. The client initiates an HTTPS GET request. The local temporary path to the file is returned. The maximum file size for a single download is 50 MB. Read related instructions before use.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/apis/network/download/downloadFile.md",sourceDirName:"apis/network/download",slug:"/apis/network/download/downloadFile",permalink:"/taro/en/docs/next/apis/network/download/downloadFile",editUrl:"https://github.com/nervjs/taro/edit/docs/docs/apis/network/download/downloadFile.md",tags:[],version:"current",frontMatter:{title:"Taro.downloadFile(option)",sidebar_label:"downloadFile"},sidebar:"API",previous:{title:"addInterceptor",permalink:"/taro/en/docs/next/apis/network/request/addInterceptor"},next:{title:"DownloadTask",permalink:"/taro/en/docs/next/apis/network/download/DownloadTask"}},c=[{value:"Type",id:"type",children:[],level:2},{value:"Parameters",id:"parameters",children:[{value:"Option",id:"option",children:[],level:3},{value:"FileSuccessCallbackResult",id:"filesuccesscallbackresult",children:[],level:3}],level:2},{value:"Sample Code",id:"sample-code",children:[],level:2},{value:"API Support",id:"api-support",children:[],level:2}],u={toc:c};function p(e){var t=e.components,n=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,l.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Downloads local resources to the local device. The client initiates an HTTPS GET request. The local temporary path to the file is returned. The maximum file size for a single download is 50 MB. Read ",(0,a.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/en/dev/framework/ability/network.html"},"related instructions")," before use."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note:")," Specify a reasonable ",(0,a.kt)("inlineCode",{parentName:"p"},"Content-Type")," field in the server response header to ensure that the client handles the file type properly."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/network/download/wx.downloadFile.html"},"Reference"))),(0,a.kt)("h2",{id:"type"},"Type"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"(option: Option) => DownloadTask\n")),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("h3",{id:"option"},"Option"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Property"),(0,a.kt)("th",null,"Type"),(0,a.kt)("th",{style:{textAlign:"center"}},"Required"),(0,a.kt)("th",null,"Description"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"url"),(0,a.kt)("td",null,(0,a.kt)("code",null,"string")),(0,a.kt)("td",{style:{textAlign:"center"}},"Yes"),(0,a.kt)("td",null,"URL to download resources")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"filePath"),(0,a.kt)("td",null,(0,a.kt)("code",null,"string")),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"Indicates the path to save downloaded files")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"header"),(0,a.kt)("td",null,(0,a.kt)("code",null,"Record<string, any>")),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"HTTP request Header. Referer is not available in Header.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"complete"),(0,a.kt)("td",null,(0,a.kt)("code",null,"(res: CallbackResult) => void")),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"The callback function used when the API call completed (always executed whether the call succeeds or fails)")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"fail"),(0,a.kt)("td",null,(0,a.kt)("code",null,"(res: CallbackResult) => void")),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"The callback function for a failed API call")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"success"),(0,a.kt)("td",null,(0,a.kt)("code",null,"(res: CallbackResult) => void")),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"The callback function for a successful API call")))),(0,a.kt)("h3",{id:"filesuccesscallbackresult"},"FileSuccessCallbackResult"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Property"),(0,a.kt)("th",null,"Type"),(0,a.kt)("th",null,"Description"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"filePath"),(0,a.kt)("td",null,(0,a.kt)("code",null,"string")),(0,a.kt)("td",null,"User file path. It is returned when the filePath is specified. Same as the passed filePath.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"statusCode"),(0,a.kt)("td",null,(0,a.kt)("code",null,"number")),(0,a.kt)("td",null,"HTTP status code returned by the developer server")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"tempFilePath"),(0,a.kt)("td",null,(0,a.kt)("code",null,"string")),(0,a.kt)("td",null,"Temporary file path. It is returned when the filePath to save files is not specified. The downloaded files will be stored in a temporary file path.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"errMsg"),(0,a.kt)("td",null,(0,a.kt)("code",null,"string")),(0,a.kt)("td",null,"Call result")))),(0,a.kt)("h2",{id:"sample-code"},"Sample Code"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"Taro.downloadFile({\n  url: 'https://example.com/audio/123', //This value for demonstration purposes only is not a real resource.\n  success: function (res) {\n    // As long as there is response data in the server, the response content will be written to the file and the success callback is triggered. Judge whether desired data is downloaded depending on the service.\n    if (res.statusCode === 200) {\n      Taro.playVoice({\n        filePath: res.tempFilePath\n      })\n    }\n  }\n})\n")),(0,a.kt)("h2",{id:"api-support"},"API Support"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"API"),(0,a.kt)("th",{parentName:"tr",align:"center"},"WeChat Mini-Program"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Baidu Smart-MiniProgram"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Alipay Mini-Program"),(0,a.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,a.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"Taro.downloadFile"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")))))}p.isMDXComponent=!0}}]);