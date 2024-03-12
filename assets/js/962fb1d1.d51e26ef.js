/*! For license information please see 962fb1d1.d51e26ef.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite_docusaurus=self.webpackChunkwebsite_docusaurus||[]).push([[5744],{3323:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>p,frontMatter:()=>c,metadata:()=>i,toc:()=>l});var t=r(4848),a=r(8453);const c={},s="Overview",i={id:"api-reference/core/README",title:"Overview",description:"The @luma.gl/core module provides an abstract API that enables application code",source:"@site/../docs/api-reference/core/README.md",sourceDirName:"api-reference/core",slug:"/api-reference/core/",permalink:"/docs/api-reference/core/",draft:!1,unlisted:!1,editUrl:"https://github.com/visgl/luma.gl/tree/main/docs/../docs/api-reference/core/README.md",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Overview",permalink:"/docs/api-reference/"},next:{title:"Device",permalink:"/docs/api-reference/core/device"}},o={},l=[{value:"Installing adapters",id:"installing-adapters",level:2},{value:"Creating GPU Resources",id:"creating-gpu-resources",level:2},{value:"Accessing the CanvasContext",id:"accessing-the-canvascontext",level:2}];function d(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"overview",children:"Overview"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"@luma.gl/core"})," module provides an abstract API that enables application code\nto portably work with both WebGPU and WebGL. The main export is the ",(0,t.jsx)(n.code,{children:"Device"})," class\nwhich provides methods for creating GPU resources such as ",(0,t.jsx)(n.code,{children:"Buffer"}),", ",(0,t.jsx)(n.code,{children:"Texture"}),", ",(0,t.jsx)(n.code,{children:"Shader"})," etc."]}),"\n",(0,t.jsx)(n.h2,{id:"installing-adapters",children:"Installing adapters"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"@luma.gl/core"})," module is not usable on its own. A device adapter module must\nbe imported and registered."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"import {luma} from '@luma.gl/core';\nimport {WebGPUAdapter} from '@luma.gl/webgpu';\n\nluma.registerDevice([WebGPUAdapter])\nconst device = await luma.createDevice({type: 'webgpu', canvas: ...});\n"})}),"\n",(0,t.jsx)(n.p,{children:"It is possible to register more than one device adapter to create an application\nthat can work in both WebGL and WebGPU environments."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"luma.registerDevice([WebGPUAdapter])\nimport {luma} from '@luma.gl/core';\nimport {WebGPUAdapter} from '@luma.gl/webgpu';\nimport {WebGLAdapter} '@luma.gl/webgl';\n\nconst webgpuDevice = luma.createDevice({type: 'best-available', canvas: ...});\n"})}),"\n",(0,t.jsx)(n.h2,{id:"creating-gpu-resources",children:"Creating GPU Resources"}),"\n",(0,t.jsxs)(n.p,{children:["Once the application has created a ",(0,t.jsx)(n.code,{children:"Device"}),", GPU resources can be created:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"const buffer = device.createBuffer(...)\n"})}),"\n",(0,t.jsx)(n.h2,{id:"accessing-the-canvascontext",children:"Accessing the CanvasContext"}),"\n",(0,t.jsxs)(n.p,{children:["A ",(0,t.jsx)(n.code,{children:"Device"})," may (optinally) be used to render in one or more canvases (HTML canvas elements).\nThe connection between a Device and a canvas is managed by the ",(0,t.jsx)(n.code,{children:"CanvasContext"})," class."]}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsx)(n.p,{children:"In WebGL there is always exactly one canvas associated with the device and it is not\npossible to create a canvas-less context or render into multiple contexts."})})]})}function p(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},1020:(e,n,r)=>{var t=r(6540),a=Symbol.for("react.element"),c=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,i=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,r){var t,c={},l=null,d=null;for(t in void 0!==r&&(l=""+r),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(d=n.ref),n)s.call(n,t)&&!o.hasOwnProperty(t)&&(c[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===c[t]&&(c[t]=n[t]);return{$$typeof:a,type:e,key:l,ref:d,props:c,_owner:i.current}}n.Fragment=c,n.jsx=l,n.jsxs=l},4848:(e,n,r)=>{e.exports=r(1020)},8453:(e,n,r)=>{r.d(n,{R:()=>s,x:()=>i});var t=r(6540);const a={},c=t.createContext(a);function s(e){const n=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),t.createElement(c.Provider,{value:n},e.children)}}}]);