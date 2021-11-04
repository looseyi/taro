"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[99975],{3905:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return s}});var l=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,l)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,l,r=function(t,e){if(null==t)return{};var n,l,r={},a=Object.keys(t);for(l=0;l<a.length;l++)n=a[l],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(l=0;l<a.length;l++)n=a[l],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var u=l.createContext({}),d=function(t){var e=l.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},c=function(t){var e=d(t.components);return l.createElement(u.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},p=l.forwardRef((function(t,e){var n=t.components,r=t.mdxType,a=t.originalType,u=t.parentName,c=i(t,["components","mdxType","originalType","parentName"]),p=d(n),s=r,m=p["".concat(u,".").concat(s)]||p[s]||k[s]||a;return n?l.createElement(m,o(o({ref:e},c),{},{components:n})):l.createElement(m,o({ref:e},c))}));function s(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var a=n.length,o=new Array(a);o[0]=p;var i={};for(var u in e)hasOwnProperty.call(e,u)&&(i[u]=e[u]);i.originalType=t,i.mdxType="string"==typeof t?t:r,o[1]=i;for(var d=2;d<a;d++)o[d]=n[d];return l.createElement.apply(null,o)}return l.createElement.apply(null,n)}p.displayName="MDXCreateElement"},58215:function(t,e,n){var l=n(67294);e.Z=function(t){var e=t.children,n=t.hidden,r=t.className;return l.createElement("div",{role:"tabpanel",hidden:n,className:r},e)}},55064:function(t,e,n){n.d(e,{Z:function(){return p}});var l=n(83117),r=n(67294),a=n(72389),o=n(79443);var i=function(){var t=(0,r.useContext)(o.Z);if(null==t)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return t},u=n(83039),d=n(86010),c="tabItem_1uMI";function k(t){var e,n,l,a=t.lazy,o=t.block,k=t.defaultValue,p=t.values,s=t.groupId,m=t.className,g=r.Children.map(t.children,(function(t){if((0,r.isValidElement)(t)&&void 0!==t.props.value)return t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof t.type?t.type:t.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=p?p:g.map((function(t){var e=t.props;return{value:e.value,label:e.label}})),f=(0,u.lx)(h,(function(t,e){return t.value===e.value}));if(f.length>0)throw new Error('Docusaurus error: Duplicate values "'+f.map((function(t){return t.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===k?k:null!=(e=null!=k?k:null==(n=g.find((function(t){return t.props.default})))?void 0:n.props.value)?e:null==(l=g[0])?void 0:l.props.value;if(null!==y&&!h.some((function(t){return t.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+h.map((function(t){return t.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=i(),N=b.tabGroupChoices,v=b.setTabGroupChoices,x=(0,r.useState)(y),T=x[0],w=x[1],P=[],A=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=s){var E=N[s];null!=E&&E!==T&&h.some((function(t){return t.value===E}))&&w(E)}var C=function(t){var e=t.currentTarget,n=P.indexOf(e),l=h[n].value;l!==T&&(A(e),w(l),null!=s&&v(s,l))},D=function(t){var e,n=null;switch(t.key){case"ArrowRight":var l=P.indexOf(t.currentTarget)+1;n=P[l]||P[0];break;case"ArrowLeft":var r=P.indexOf(t.currentTarget)-1;n=P[r]||P[P.length-1]}null==(e=n)||e.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,d.Z)("tabs",{"tabs--block":o},m)},h.map((function(t){var e=t.value,n=t.label;return r.createElement("li",{role:"tab",tabIndex:T===e?0:-1,"aria-selected":T===e,className:(0,d.Z)("tabs__item",c,{"tabs__item--active":T===e}),key:e,ref:function(t){return P.push(t)},onKeyDown:D,onFocus:C,onClick:C},null!=n?n:e)}))),a?(0,r.cloneElement)(g.filter((function(t){return t.props.value===T}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},g.map((function(t,e){return(0,r.cloneElement)(t,{key:e,hidden:t.props.value!==T})}))))}function p(t){var e=(0,a.Z)();return r.createElement(k,(0,l.Z)({key:String(e)},t))}},79443:function(t,e,n){var l=(0,n(67294).createContext)(void 0);e.Z=l},6551:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return d},contentTitle:function(){return c},metadata:function(){return k},toc:function(){return p},default:function(){return m}});var l=n(83117),r=n(80102),a=(n(67294),n(3905)),o=n(55064),i=n(58215),u=["components"],d={title:"Textarea",sidebar_label:"Textarea"},c=void 0,k={unversionedId:"components/forms/textarea",id:"components/forms/textarea",isDocsHomePage:!1,title:"Textarea",description:"Multi-line input box. This component is a Native Component. Note related limits before use.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/components/forms/textarea.md",sourceDirName:"components/forms",slug:"/components/forms/textarea",permalink:"/taro/en/docs/next/components/forms/textarea",editUrl:"https://github.com/nervjs/taro/edit/docs/docs/components/forms/textarea.md",tags:[],version:"current",frontMatter:{title:"Textarea",sidebar_label:"Textarea"},sidebar:"components",previous:{title:"Switch",permalink:"/taro/en/docs/next/components/forms/switch"},next:{title:"Navigator",permalink:"/taro/en/docs/next/components/navig/navigator"}},p=[{value:"Type",id:"type",children:[],level:2},{value:"Examples",id:"examples",children:[],level:2},{value:"TextareaProps",id:"textareaprops",children:[{value:"Property Support",id:"property-support",children:[],level:3},{value:"onFocusEventDetail",id:"onfocuseventdetail",children:[],level:3},{value:"onBlurEventDetail",id:"onblureventdetail",children:[],level:3},{value:"onLineChangeEventDetail",id:"onlinechangeeventdetail",children:[],level:3},{value:"onInputEventDetail",id:"oninputeventdetail",children:[],level:3},{value:"onConfirmEventDetail",id:"onconfirmeventdetail",children:[],level:3},{value:"onKeyboardHeightChangeEventDetail",id:"onkeyboardheightchangeeventdetail",children:[],level:3}],level:2},{value:"API Support",id:"api-support",children:[],level:2}],s={toc:p};function m(t){var e=t.components,n=(0,r.Z)(t,u);return(0,a.kt)("wrapper",(0,l.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Multi-line input box. This component is a Native Component. Note related limits before use."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/en/dev/component/textarea.html"},"Reference"))),(0,a.kt)("h2",{id:"type"},"Type"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"ComponentType<TextareaProps>\n")),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)(o.Z,{defaultValue:"React",values:[{label:"React",value:"React"},{label:"Vue",value:"Vue"}],mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"React",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"export default class PageView extends Component {\n  constructor() {\n    super(...arguments)\n  }\n\n  render() {\n    return (\n      <View className='components-page'>\n        <Text>Height-adaptive input area with no scroll bars</Text>\n        <Textarea style='background:#fff;width:100%;min-height:80px;padding:0 30rpx;' autoHeight/>\n        <Text>This is a textarea that can be autofocused</Text>\n        <Textarea style='background:#fff;width:100%;height:80px;padding:0 30rpx;' autoFocus/>\n      </View>\n    )\n  }\n}\n"))),(0,a.kt)(i.Z,{value:"Vue",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<template>\n  <view class="components-page">\n    <text>Height-adaptive input area with no scroll bars</text>\n    <textarea style="background:#efefef;width:100%;min-height:80px;padding:0 30rpx;" :auto-height="true" />\n    <text>This is a textarea that can be autofocused</text>\n    <textarea style="background:#efefef;width:100%;height:80px;padding:0 30rpx;" :auto-focusd="true" />\n  </view>\n</template>\n')))),(0,a.kt)("h2",{id:"textareaprops"},"TextareaProps"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Property"),(0,a.kt)("th",null,"Type"),(0,a.kt)("th",{style:{textAlign:"center"}},"Default"),(0,a.kt)("th",{style:{textAlign:"center"}},"Required"),(0,a.kt)("th",null,"Description"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"value"),(0,a.kt)("td",null,(0,a.kt)("code",null,"string")),(0,a.kt)("td",{style:{textAlign:"center"}}),(0,a.kt)("td",{style:{textAlign:"center"}},"Yes"),(0,a.kt)("td",null,"The content in the input box")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"placeholder"),(0,a.kt)("td",null,(0,a.kt)("code",null,"string")),(0,a.kt)("td",{style:{textAlign:"center"}}),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"The placeholder used when the input box is empty")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"placeholderStyle"),(0,a.kt)("td",null,(0,a.kt)("code",null,"string")),(0,a.kt)("td",{style:{textAlign:"center"}}),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"Specifies the style of the placeholder.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"placeholderClass"),(0,a.kt)("td",null,(0,a.kt)("code",null,"string")),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,'"textarea-placeholder"')),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"Specifies the style class of the placeholder.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"disabled"),(0,a.kt)("td",null,(0,a.kt)("code",null,"boolean")),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,"false")),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"Specifies whether to disable the component.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"maxlength"),(0,a.kt)("td",null,(0,a.kt)("code",null,"number")),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,"140")),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,'The maximum length. When it is set to "-1", the maximum length is not limited.')),(0,a.kt)("tr",null,(0,a.kt)("td",null,"autoFocus"),(0,a.kt)("td",null,(0,a.kt)("code",null,"boolean")),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,"false")),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"Auto focus. The keyboard is automatically displayed.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"focus"),(0,a.kt)("td",null,(0,a.kt)("code",null,"boolean")),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,"false")),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"Gets focus")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"autoHeight"),(0,a.kt)("td",null,(0,a.kt)("code",null,"boolean")),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,"false")),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"Specifies whether the height automatically increases. If this property is specified, style.height does not take effect.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"fixed"),(0,a.kt)("td",null,(0,a.kt)("code",null,"boolean")),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,"false")),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"If the textarea is in an area of ",(0,a.kt)("code",null,"position:fixed"),", the value of the specified property should always be true.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"cursorSpacing"),(0,a.kt)("td",null,(0,a.kt)("code",null,"number")),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,"0")),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"Specifies the distance between the cursor and the keyboard. It is either the distance between textarea and the bottom of the screen or the distance specified via cursor-spacing, whichever is smaller.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"cursor"),(0,a.kt)("td",null,(0,a.kt)("code",null,"number")),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,"-1")),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"Specifies the cursor position during focusing.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"showConfirmBar"),(0,a.kt)("td",null,(0,a.kt)("code",null,"boolean")),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,"true")),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"Specifies whether to display the bar containing the Done button above the keyboard")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"selectionStart"),(0,a.kt)("td",null,(0,a.kt)("code",null,"number")),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,"-1")),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"The start position of the cursor. It takes effect only during auto focusing, and needs to used with selectionEnd.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"selectionEnd"),(0,a.kt)("td",null,(0,a.kt)("code",null,"number")),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,"-1")),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"The end position of the cursor. It takes effect only during auto focusing, and needs to used with selectionStart.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"adjustPosition"),(0,a.kt)("td",null,(0,a.kt)("code",null,"boolean")),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,"true")),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"Specifies whether to automatically push up the page when the keyboard is displayed")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"holdKeyboard"),(0,a.kt)("td",null,(0,a.kt)("code",null,"boolean")),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,"false")),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"Specifies whether to hide the keyboard when the page is clicked when focused")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"disableDefaultPadding"),(0,a.kt)("td",null,(0,a.kt)("code",null,"boolean")),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,"false")),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"Specifies whether to remove the default inner margins under iOS")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"onFocus"),(0,a.kt)("td",null,(0,a.kt)("code",null,"BaseEventOrigFunction<onFocusEventDetail>")),(0,a.kt)("td",{style:{textAlign:"center"}}),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"Triggered when the input box is focused. event.detail = ","{value, height}",", where height is the height of the keyboard.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"onBlur"),(0,a.kt)("td",null,(0,a.kt)("code",null,"BaseEventOrigFunction<onBlurEventDetail>")),(0,a.kt)("td",{style:{textAlign:"center"}}),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"Triggered when the input box is unfocused.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"onLineChange"),(0,a.kt)("td",null,(0,a.kt)("code",null,"BaseEventOrigFunction<onLineChangeEventDetail>")),(0,a.kt)("td",{style:{textAlign:"center"}}),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"Called when the number of lines in the input box changes, event.detail = ","{height: 0, heightRpx: 0, lineCount: 0}")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"onInput"),(0,a.kt)("td",null,(0,a.kt)("code",null,"BaseEventOrigFunction<onInputEventDetail>")),(0,a.kt)("td",{style:{textAlign:"center"}}),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"An input event triggered when anything is input via the keyboard, event.detail = ","{value, cursor, keyCode}",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("strong",null,"Return values of the bindinput processing function will not be reflected on textarea."))),(0,a.kt)("tr",null,(0,a.kt)("td",null,"onConfirm"),(0,a.kt)("td",null,(0,a.kt)("code",null,"BaseEventOrigFunction<onConfirmEventDetail>")),(0,a.kt)("td",{style:{textAlign:"center"}}),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"A confirm event triggered when the ",(0,a.kt)("strong",null,"Done")," button is tapped, event.detail = ","{value: value}")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"onKeyboardHeightChange"),(0,a.kt)("td",null,(0,a.kt)("code",null,"BaseEventOrigFunction<onKeyboardHeightChangeEventDetail>")),(0,a.kt)("td",{style:{textAlign:"center"}}),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"Triggered when the height of the keyboard changes.")))),(0,a.kt)("h3",{id:"property-support"},"Property Support"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"Property"),(0,a.kt)("th",{parentName:"tr",align:"center"},"WeChat Mini-Program"),(0,a.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,a.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"TextareaProps.value"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"TextareaProps.placeholder"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"TextareaProps.placeholderStyle"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"TextareaProps.placeholderClass"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"TextareaProps.disabled"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"TextareaProps.maxlength"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"TextareaProps.autoFocus"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"TextareaProps.focus"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"TextareaProps.autoHeight"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"TextareaProps.fixed"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"TextareaProps.cursorSpacing"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"TextareaProps.cursor"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"TextareaProps.showConfirmBar"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"TextareaProps.selectionStart"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"TextareaProps.selectionEnd"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"TextareaProps.adjustPosition"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"TextareaProps.holdKeyboard"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"TextareaProps.disableDefaultPadding"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"TextareaProps.onFocus"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"TextareaProps.onBlur"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"TextareaProps.onLineChange"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"TextareaProps.onInput"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"TextareaProps.onConfirm"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"TextareaProps.onKeyboardHeightChange"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})))),(0,a.kt)("h3",{id:"onfocuseventdetail"},"onFocusEventDetail"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Param"),(0,a.kt)("th",null,"Type"),(0,a.kt)("th",null,"Description"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"value"),(0,a.kt)("td",null,(0,a.kt)("code",null,"string")),(0,a.kt)("td",null,"input value")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"height"),(0,a.kt)("td",null,(0,a.kt)("code",null,"number")),(0,a.kt)("td",null,"Keyboard height")))),(0,a.kt)("h3",{id:"onblureventdetail"},"onBlurEventDetail"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Param"),(0,a.kt)("th",null,"Type"),(0,a.kt)("th",null,"Description"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"value"),(0,a.kt)("td",null,(0,a.kt)("code",null,"string")),(0,a.kt)("td",null,"input value")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"cursor"),(0,a.kt)("td",null,(0,a.kt)("code",null,"number")),(0,a.kt)("td",null,"cursor position")))),(0,a.kt)("h3",{id:"onlinechangeeventdetail"},"onLineChangeEventDetail"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Param"),(0,a.kt)("th",null,"Type"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"height"),(0,a.kt)("td",null,(0,a.kt)("code",null,"number"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,"heightRpx"),(0,a.kt)("td",null,(0,a.kt)("code",null,"number"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,"lineCount"),(0,a.kt)("td",null,(0,a.kt)("code",null,"number"))))),(0,a.kt)("h3",{id:"oninputeventdetail"},"onInputEventDetail"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Param"),(0,a.kt)("th",null,"Type"),(0,a.kt)("th",null,"Description"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"value"),(0,a.kt)("td",null,(0,a.kt)("code",null,"string")),(0,a.kt)("td",null,"input value")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"cursor"),(0,a.kt)("td",null,(0,a.kt)("code",null,"number")),(0,a.kt)("td",null,"cursor position")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"keyCode"),(0,a.kt)("td",null,(0,a.kt)("code",null,"number")),(0,a.kt)("td",null,"key code")))),(0,a.kt)("h3",{id:"onconfirmeventdetail"},"onConfirmEventDetail"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Param"),(0,a.kt)("th",null,"Type"),(0,a.kt)("th",null,"Description"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"value"),(0,a.kt)("td",null,(0,a.kt)("code",null,"string")),(0,a.kt)("td",null,"input value")))),(0,a.kt)("h3",{id:"onkeyboardheightchangeeventdetail"},"onKeyboardHeightChangeEventDetail"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Param"),(0,a.kt)("th",null,"Type"),(0,a.kt)("th",null,"Description"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"height"),(0,a.kt)("td",null,(0,a.kt)("code",null,"number")),(0,a.kt)("td",null,"Keyboard height")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"duration"),(0,a.kt)("td",null,(0,a.kt)("code",null,"number")),(0,a.kt)("td",null,"Duration")))),(0,a.kt)("h2",{id:"api-support"},"API Support"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"API"),(0,a.kt)("th",{parentName:"tr",align:"center"},"WeChat Mini-Program"),(0,a.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,a.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"Textarea"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")))))}m.isMDXComponent=!0}}]);