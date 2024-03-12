/*! For license information please see 1a69ceea.1c2054dd.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite_docusaurus=self.webpackChunkwebsite_docusaurus||[]).push([[2936],{8790:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>o,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var t=n(4848),c=n(8453);const i={},s="Overview",a={id:"api-reference/webgpu/README",title:"Overview",description:"WebGPU Device Adapter",source:"@site/../docs/api-reference/webgpu/README.md",sourceDirName:"api-reference/webgpu",slug:"/api-reference/webgpu/",permalink:"/docs/api-reference/webgpu/",draft:!1,unlisted:!1,editUrl:"https://github.com/visgl/luma.gl/tree/main/docs/../docs/api-reference/webgpu/README.md",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"@luma.gl/webgl",permalink:"/docs/api-reference/webgl/"},next:{title:"Developer Guide",permalink:"/docs/developer-guide/"}},o={},l=[{value:"WebGPU Device Adapter",id:"webgpu-device-adapter",level:2}];function d(e){const r={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,c.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h1,{id:"overview",children:"Overview"}),"\n",(0,t.jsx)(r.h2,{id:"webgpu-device-adapter",children:"WebGPU Device Adapter"}),"\n",(0,t.jsxs)(r.p,{children:['This module contains the WebGPU adapter for the "abstract" luma.gl API (',(0,t.jsx)(r.code,{children:"@luma.gl/core"}),")."]}),"\n",(0,t.jsxs)(r.p,{children:["Simply importing ",(0,t.jsx)(r.code,{children:"@luma.gl/webgpu"})," installs the adapter and enables WebGPU devices to\nbe created using ",(0,t.jsx)(r.code,{children:"luma.createDevice(...)"}),":"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-typescript",children:"import {luma} from '@luma.gl/core';\nimport '@luma.gl/webgpu'; // Installs the WebGPUDevice adapter\n\nconst device = await luma.createDevice({type: 'webgpu', canvas: ...});\n\n// Resources can now be created\nconst buffer = device.createBuffer(...);\n"})}),"\n",(0,t.jsxs)(r.p,{children:["To use a luma.gl WebGPU ",(0,t.jsx)(r.code,{children:"Device"})," with raw WebGPU calls, the application needs to access\nthe ",(0,t.jsx)(r.code,{children:"GPUDevice"}),". The raw WebGPU handle is available on the ",(0,t.jsx)(r.code,{children:"WebGPUDevice"})," subclass:"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-typescript",children:"// @ts-expect-error\nconst gl = device.handle;\n"})}),"\n",(0,t.jsxs)(r.p,{children:["With a bit more work, typescript users can retrieve the ",(0,t.jsx)(r.code,{children:"WebGLRenderingContext"}),"\nwithout ignoring type errors:"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-typescript",children:"import {Device, cast} from '@luma.gl/core';\nimport {WebGPUDevice} from '@luma.gl/webgpu'; // Installs the WebGPUDevice adapter\n\nfunction f(device: Device) {\n  const webgpuDevice = device as WebGPUDevice;\n  const gpuDevice: GPUDevice = webgpuDevice.handle; // Get underlying WebGPU device\n  ...\n}\n"})})]})}function p(e={}){const{wrapper:r}={...(0,c.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},1020:(e,r,n)=>{var t=n(6540),c=Symbol.for("react.element"),i=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,a=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function l(e,r,n){var t,i={},l=null,d=null;for(t in void 0!==n&&(l=""+n),void 0!==r.key&&(l=""+r.key),void 0!==r.ref&&(d=r.ref),r)s.call(r,t)&&!o.hasOwnProperty(t)&&(i[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===i[t]&&(i[t]=r[t]);return{$$typeof:c,type:e,key:l,ref:d,props:i,_owner:a.current}}r.Fragment=i,r.jsx=l,r.jsxs=l},4848:(e,r,n)=>{e.exports=n(1020)},8453:(e,r,n)=>{n.d(r,{R:()=>s,x:()=>a});var t=n(6540);const c={},i=t.createContext(c);function s(e){const r=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:s(e.components),t.createElement(i.Provider,{value:r},e.children)}}}]);