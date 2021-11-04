"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[99952],{3905:function(e,t,n){n.d(t,{Zo:function(){return f},kt:function(){return p}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var a=r.createContext({}),u=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},f=function(e){var t=u(e.components);return r.createElement(a.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,a=e.parentName,f=c(e,["components","mdxType","originalType","parentName"]),d=u(n),p=i,k=d["".concat(a,".").concat(p)]||d[p]||s[p]||o;return n?r.createElement(k,l(l({ref:t},f),{},{components:n})):r.createElement(k,l({ref:t},f))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,l=new Array(o);l[0]=d;var c={};for(var a in t)hasOwnProperty.call(t,a)&&(c[a]=t[a]);c.originalType=e,c.mdxType="string"==typeof e?e:i,l[1]=c;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},87186:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return a},metadata:function(){return u},toc:function(){return f},default:function(){return d}});var r=n(83117),i=n(80102),o=(n(67294),n(3905)),l=["components"],c={title:"WifiInfo",sidebar_label:"WifiInfo"},a=void 0,u={unversionedId:"apis/device/wifi/WifiInfo",id:"version-3.x/apis/device/wifi/WifiInfo",isDocsHomePage:!1,title:"WifiInfo",description:"The information of the Wi-Fi network.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-3.x/apis/device/wifi/WifiInfo.md",sourceDirName:"apis/device/wifi",slug:"/apis/device/wifi/WifiInfo",permalink:"/taro/en/docs/apis/device/wifi/WifiInfo",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-3.x/apis/device/wifi/WifiInfo.md",tags:[],version:"3.x",frontMatter:{title:"WifiInfo",sidebar_label:"WifiInfo"},sidebar:"version-3.x/API",previous:{title:"connectWifi",permalink:"/taro/en/docs/apis/device/wifi/connectWifi"},next:{title:"addPhoneContact",permalink:"/taro/en/docs/apis/device/contact/addPhoneContact"}},f=[{value:"Methods",id:"methods",children:[],level:2}],s={toc:f};function d(e){var t=e.components,n=(0,i.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The information of the Wi-Fi network."),(0,o.kt)("h2",{id:"methods"},"Methods"),(0,o.kt)("table",null,(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"Property"),(0,o.kt)("th",null,"Type"),(0,o.kt)("th",null,"Description"))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,"BSSID"),(0,o.kt)("td",null,(0,o.kt)("code",null,"string")),(0,o.kt)("td",null,"The BSSID of the Wi-Fi network.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"SSID"),(0,o.kt)("td",null,(0,o.kt)("code",null,"string")),(0,o.kt)("td",null,"The SSID of the Wi-Fi network.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"secure"),(0,o.kt)("td",null,(0,o.kt)("code",null,"boolean")),(0,o.kt)("td",null,"Indicates whether the Wi-Fi network is secure.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"signalStrength"),(0,o.kt)("td",null,(0,o.kt)("code",null,"number")),(0,o.kt)("td",null,"The signal strength of the Wi-Fi network.")))))}d.isMDXComponent=!0}}]);