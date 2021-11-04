"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[86650],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,v=m["".concat(p,".").concat(d)]||m[d]||s[d]||i;return n?r.createElement(v,o(o({ref:t},c),{},{components:n})):r.createElement(v,o({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},58215:function(e,t,n){var r=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},55064:function(e,t,n){n.d(t,{Z:function(){return m}});var r=n(83117),a=n(67294),i=n(72389),o=n(79443);var l=function(){var e=(0,a.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},p=n(83039),u=n(86010),c="tabItem_1uMI";function s(e){var t,n,r,i=e.lazy,o=e.block,s=e.defaultValue,m=e.values,d=e.groupId,v=e.className,f=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=m?m:f.map((function(e){var t=e.props;return{value:t.value,label:t.label}})),w=(0,p.lx)(h,(function(e,t){return e.value===t.value}));if(w.length>0)throw new Error('Docusaurus error: Duplicate values "'+w.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===s?s:null!=(t=null!=s?s:null==(n=f.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(r=f[0])?void 0:r.props.value;if(null!==k&&!h.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=l(),y=b.tabGroupChoices,g=b.setTabGroupChoices,N=(0,a.useState)(k),x=N[0],I=N[1],S=[],P=(0,p.o5)().blockElementScrollPositionUntilNextRender;if(null!=d){var T=y[d];null!=T&&T!==x&&h.some((function(e){return e.value===T}))&&I(T)}var C=function(e){var t=e.currentTarget,n=S.indexOf(t),r=h[n].value;r!==x&&(P(t),I(r),null!=d&&g(d,r))},O=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=S.indexOf(e.currentTarget)+1;n=S[r]||S[0];break;case"ArrowLeft":var a=S.indexOf(e.currentTarget)-1;n=S[a]||S[S.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":o},v)},h.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,className:(0,u.Z)("tabs__item",c,{"tabs__item--active":x===t}),key:t,ref:function(e){return S.push(e)},onKeyDown:O,onFocus:C,onClick:C},null!=n?n:t)}))),i?(0,a.cloneElement)(f.filter((function(e){return e.props.value===x}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},f.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==x})}))))}function m(e){var t=(0,i.Z)();return a.createElement(s,(0,r.Z)({key:String(t)},e))}},79443:function(e,t,n){var r=(0,n(67294).createContext)(void 0);t.Z=r},47955:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return m},default:function(){return v}});var r=n(83117),a=n(80102),i=(n(67294),n(3905)),o=n(55064),l=n(58215),p=["components"],u={title:"SwiperItem",sidebar_label:"SwiperItem"},c=void 0,s={unversionedId:"components/viewContainer/swiper-item",id:"version-3.x/components/viewContainer/swiper-item",isDocsHomePage:!1,title:"SwiperItem",description:"It can be placed only in the swiper component, with the width and height each automatically set to 100%.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-3.x/components/viewContainer/swiper-item.md",sourceDirName:"components/viewContainer",slug:"/components/viewContainer/swiper-item",permalink:"/taro/en/docs/components/viewContainer/swiper-item",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-3.x/components/viewContainer/swiper-item.md",tags:[],version:"3.x",frontMatter:{title:"SwiperItem",sidebar_label:"SwiperItem"},sidebar:"version-3.x/components",previous:{title:"Swiper",permalink:"/taro/en/docs/components/viewContainer/swiper"},next:{title:"MovableArea",permalink:"/taro/en/docs/components/viewContainer/movable-area"}},m=[{value:"Type",id:"type",children:[],level:2},{value:"Examples",id:"examples",children:[],level:2},{value:"SwiperItemProps",id:"swiperitemprops",children:[{value:"Property Support",id:"property-support",children:[],level:3}],level:2},{value:"API Support",id:"api-support",children:[],level:2},{value:"Note",id:"note",children:[],level:2}],d={toc:m};function v(e){var t=e.components,n=(0,a.Z)(e,p);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"It can be placed only in the swiper component, with the width and height each automatically set to 100%."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/en/dev/component/swiper-item.html"},"Reference"))),(0,i.kt)("h2",{id:"type"},"Type"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"ComponentType<SwiperItemProps>\n")),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)(o.Z,{defaultValue:"React",values:[{label:"React",value:"React"},{label:"Vue",value:"Vue"}],mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"React",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"class App extends Component {\n  render () {\n    return (\n      <Swiper\n        className='test-h'\n        indicatorColor='#999'\n        indicatorActiveColor='#333'\n        vertical\n        circular\n        indicatorDots\n        autoplay>\n        <SwiperItem>\n          <View className='demo-text-1'>1</View>\n        </SwiperItem>\n        <SwiperItem>\n          <View className='demo-text-2'>2</View>\n        </SwiperItem>\n        <SwiperItem>\n          <View className='demo-text-3'>3</View>\n        </SwiperItem>\n      </Swiper>\n    )\n  }\n}\n"))),(0,i.kt)(l.Z,{value:"Vue",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},"<template>\n  <swiper\n    class='test-h'\n    indicator-color='#999'\n    indicator-active-color='#333'\n    :vertical=\"true\"\n    :circular=\"true\"\n    :indicator-dots=\"true\"\n    :autoplay=\"true\"\n  >\n    <swiper-item>\n      <view class='demo-text-1'>1</view>\n    </swiper-item>\n    <swiper-item>\n      <view class='demo-text-2'>2</view>\n    </swiper-item>\n    <swiper-item>\n      <view class='demo-text-3'>3</view>\n    </swiper-item>\n  </swiper>\n</template>\n")))),(0,i.kt)("h2",{id:"swiperitemprops"},"SwiperItemProps"),(0,i.kt)("table",null,(0,i.kt)("thead",null,(0,i.kt)("tr",null,(0,i.kt)("th",null,"Property"),(0,i.kt)("th",null,"Type"),(0,i.kt)("th",{style:{textAlign:"center"}},"Required"),(0,i.kt)("th",null,"Description"))),(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,"itemId"),(0,i.kt)("td",null,(0,i.kt)("code",null,"string")),(0,i.kt)("td",{style:{textAlign:"center"}},"No"),(0,i.kt)("td",null,"The identifier of the swiper-item ")))),(0,i.kt)("h3",{id:"property-support"},"Property Support"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"Property"),(0,i.kt)("th",{parentName:"tr",align:"center"},"WeChat Mini-Program"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Baidu Smart-Program"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Alipay Mini-Program"),(0,i.kt)("th",{parentName:"tr",align:"center"},"ByteDance Micro-App"),(0,i.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,i.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"SwiperItemProps.itemId"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")))),(0,i.kt)("h2",{id:"api-support"},"API Support"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"API"),(0,i.kt)("th",{parentName:"tr",align:"center"},"WeChat Mini-Program"),(0,i.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,i.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"SwiperItem"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"})))),(0,i.kt)("h2",{id:"note"},"Note"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Do not set the ",(0,i.kt)("strong",{parentName:"li"},"style")," attribute for ",(0,i.kt)("inlineCode",{parentName:"li"},"SwiperItem"),", you can set the style via class. ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/NervJS/taro/issues/7147"},"7147"))))}v.isMDXComponent=!0}}]);