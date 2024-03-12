/*! For license information please see d432c47a.bc4f5dc5.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite_docusaurus=self.webpackChunkwebsite_docusaurus||[]).push([[8201],{634:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>f,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var i=n(4848),r=n(8453);const s={},o="BufferLayout",a={id:"api-reference/core/buffer-layout",title:"BufferLayout",description:"The bufferLayout type provides information about how the application is planning to",source:"@site/../docs/api-reference/core/buffer-layout.md",sourceDirName:"api-reference/core",slug:"/api-reference/core/buffer-layout",permalink:"/docs/api-reference/core/buffer-layout",draft:!1,unlisted:!1,editUrl:"https://github.com/visgl/luma.gl/tree/main/docs/../docs/api-reference/core/buffer-layout.md",tags:[],version:"current",frontMatter:{}},d={},l=[{value:"Usage",id:"usage",level:2},{value:"<code>BufferLayout</code> Fields",id:"bufferlayout-fields",level:2},{value:"<code>BufferAttributeLayout</code> Fields",id:"bufferattributelayout-fields",level:2}];function c(e){const t={admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"bufferlayout",children:"BufferLayout"}),"\n",(0,i.jsx)(t.p,{children:"The bufferLayout type provides information about how the application is planning to\nmap the attributes in its pipelines to the memory in GPU buffers."}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"BufferLayout"})," affects buffers bound with ",(0,i.jsx)(t.code,{children:"RenderPipeline.setAttributes({[bufferName]: Buffer})"})," or\n",(0,i.jsx)(t.code,{children:"Model.setAttributes({[bufferName]: Buffer})"}),". The names of buffer bind points are determined by the ",(0,i.jsx)(t.code,{children:"bufferLayout"})," mapping supplied to ",(0,i.jsx)(t.code,{children:"createRenderPipeline()"})," or ",(0,i.jsx)(t.code,{children:"new Model()"}),".\nThis buffer name then becomes valid in ",(0,i.jsx)(t.code,{children:"RenderPipeline.setAttributes()"})," and ",(0,i.jsx)(t.code,{children:"Model.setAttributes()"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,i.jsx)(t.p,{children:"The simplest use case is to provide a non-default vertex type:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-typescript",children:"  bufferLayout: [\n    {name: 'instancePositions', format: 'float32x3'}\n    ...\n    // RGBA colors can be efficiently encoded in 4 8bit bytes, instead of 4 32bit floats\n    {name: 'instanceColors', format: 'uint8normx4'},\n  ],\n"})}),"\n",(0,i.jsx)(t.p,{children:"This is short hand for specifying an attribute with the same name as the buffer"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-typescript",children:"  bufferLayout: [\n    {name: 'instancePositions', attributes: [{attribute: 'instancePositions', format: 'float32x3'}]},\n    {name: 'instanceColors', attributes: [{attribute: 'instanceColors', format: 'uint8normx4'}]},\n  ]\n"})}),"\n",(0,i.jsxs)(t.p,{children:["A more advanced use case is interleaving: two attributes access the same buffer sin an interleaved way.\nNote that this introduces a buffer name that is different from attribute names. This buffer name can be specified in ",(0,i.jsx)(t.code,{children:"setAttributes({[bufferName]: Buffer})"})," method on the ",(0,i.jsx)(t.code,{children:"RenderPipeline"})," and ",(0,i.jsx)(t.code,{children:"Model"})," classes."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-typescript",children:"  bufferLayout: [\n    {\n      name: 'particles', stepMode: 'instance', byteStride: 24, attributes: [\n        // Note that strides are automatically calculated assuming a packed buffer.\n        {attribute: 'instancePositions', format: 'float32x3', byteOffset: 0},\n        {attribute: 'instanceVelocities', format: 'float32x3', byteOffset: 12}\n      ]\n    }\n  ],\n"})}),"\n",(0,i.jsxs)(t.p,{children:["In the above case case a new buffer name ",(0,i.jsx)(t.code,{children:"particles"})," is defined and ",(0,i.jsx)(t.code,{children:"setAttributes({particles: Buffer})"}),"\ncalls will recognize that name and bind the provided buffer to all the interleaved attributes."]}),"\n",(0,i.jsxs)(t.h2,{id:"bufferlayout-fields",children:[(0,i.jsx)(t.code,{children:"BufferLayout"})," Fields"]}),"\n",(0,i.jsxs)(t.p,{children:["Each ",(0,i.jsx)(t.code,{children:"BufferLayout"})," describes how the memory content of one buffer is mapped to one or more shader attributes, via the following fields:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"name: string"})," defines the name of this buffer for use in ",(0,i.jsx)(t.code,{children:"setAttributes()"})," methods. THe application is free to select this name."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"stepMode: 'vertex' | 'instance'"})," Whether attributes in this buffer will be treated as instanced."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"byteStride?: number"})," the stride between elements in the buffer (default assumes a packed buffer)"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"attributes?: BufferAttributeLayout[]"})," - A list of attributes that will be bound to this buffer."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"format?: VertexFormat"})," - Shorthand that allows specification of a single attribute with the same name as the buffer."]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["Remarks:\nAttributes whose name includes the string ",(0,i.jsx)(t.code,{children:"instance"})," will default to ",(0,i.jsx)(t.code,{children:"stepMode: 'instance'"})," and all other attributes will default to ",(0,i.jsx)(t.code,{children:"stepMode: 'vertex'"}),"."]}),"\n",(0,i.jsxs)(t.admonition,{type:"caution",children:[(0,i.jsx)(t.mdxAdmonitionTitle,{}),(0,i.jsxs)(t.p,{children:["One of ",(0,i.jsx)(t.code,{children:"attributes"})," and ",(0,i.jsx)(t.code,{children:"format"})," must be supplied, but not both.\nThe ",(0,i.jsx)(t.code,{children:"format"})," field is equivalent to specifying ",(0,i.jsx)(t.code,{children:"{name: _bufferName_, attributes: [{attribute: _layout_.name, format: _layout_.format, byteOffset: 0}]"})]})]}),"\n",(0,i.jsxs)(t.h2,{id:"bufferattributelayout-fields",children:[(0,i.jsx)(t.code,{children:"BufferAttributeLayout"})," Fields"]}),"\n",(0,i.jsxs)(t.p,{children:["The attributes field must contain an array of ",(0,i.jsx)(t.code,{children:"BufferAttributeLayout"})," objects."]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"attribute: string"})," the name of the attribute."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"format: VertexFormat"})," the format of (the subset of) the buffer's memory being mapped to this attribute."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"byteOffset?: number"})," the offset into the buffer (defaults to ",(0,i.jsx)(t.code,{children:"0"}),"). This should be a sum of any global offset into the buffer plus any small offset into the ",(0,i.jsx)(t.code,{children:"byteStride"})," for interleaved attributes."]}),"\n"]}),"\n",(0,i.jsxs)(t.admonition,{type:"info",children:[(0,i.jsx)(t.mdxAdmonitionTitle,{}),(0,i.jsx)(t.p,{children:"Unfortunately, interleaving attributes into the same buffer does not help avoid the\nlimit on the number of attributes that can be used in a shader (16 on many systems)."})]})]})}function f(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},1020:(e,t,n)=>{var i=n(6540),r=Symbol.for("react.element"),s=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,a=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var i,s={},l=null,c=null;for(i in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(c=t.ref),t)o.call(t,i)&&!d.hasOwnProperty(i)&&(s[i]=t[i]);if(e&&e.defaultProps)for(i in t=e.defaultProps)void 0===s[i]&&(s[i]=t[i]);return{$$typeof:r,type:e,key:l,ref:c,props:s,_owner:a.current}}t.Fragment=s,t.jsx=l,t.jsxs=l},4848:(e,t,n)=>{e.exports=n(1020)},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>a});var i=n(6540);const r={},s=i.createContext(r);function o(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);