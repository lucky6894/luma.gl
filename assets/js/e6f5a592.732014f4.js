/*! For license information please see e6f5a592.732014f4.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite_docusaurus=self.webpackChunkwebsite_docusaurus||[]).push([[9578],{3721:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>u,contentTitle:()=>o,default:()=>l,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var t=n(4848),i=n(8453);const s={},o="Uniforms",a={id:"api-guide/gpu/gpu-uniforms",title:"Uniforms",description:"Uniforms are shader variables whose values can be set from JavaScript.",source:"@site/../docs/api-guide/gpu/gpu-uniforms.md",sourceDirName:"api-guide/gpu",slug:"/api-guide/gpu/gpu-uniforms",permalink:"/docs/api-guide/gpu/gpu-uniforms",draft:!1,unlisted:!1,editUrl:"https://github.com/visgl/luma.gl/tree/main/docs/../docs/api-guide/gpu/gpu-uniforms.md",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Attributes",permalink:"/docs/api-guide/gpu/gpu-attributes"},next:{title:"Shader Modules",permalink:"/docs/api-guide/shaders/shader-modules"}},u={},d=[{value:"Uniform Buffers",id:"uniform-buffers",level:2},{value:"&quot;Free&quot; Uniforms",id:"free-uniforms",level:2}];function f(e){const r={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h1,{id:"uniforms",children:"Uniforms"}),"\n",(0,t.jsx)(r.p,{children:"Uniforms are shader variables whose values can be set from JavaScript."}),"\n",(0,t.jsx)(r.h2,{id:"uniform-buffers",children:"Uniform Buffers"}),"\n",(0,t.jsx)(r.p,{children:"The recommended, portable method of providing uniform information to a program is\nthrough a set of uniform buffers."}),"\n",(0,t.jsx)(r.p,{children:"Each uniform buffer can store multiple values."}),"\n",(0,t.jsx)(r.p,{children:"Considerations when working with uniform buffers:"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["While each uniform buffer can contain a large number of uniforms, there is a fairly low limit to the number of uniform buffers that can be bound simultaneously (usually ",(0,t.jsx)(r.code,{children:"8"}),")."]}),"\n",(0,t.jsx)(r.li,{children:"This means that composable shader code can quickly run out of uniform buffers, if each shader module assumes that it can use its own uniform buffer."}),"\n",(0,t.jsx)(r.li,{children:"The memory layout of the buffer needs to precisely match the uniform buffer declaration in the shader."}),"\n"]}),"\n",(0,t.jsx)(r.p,{children:"Performance"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"Uniform buffers are superior from a performance perspective. Binding the buffer is a single operation that binds all the uniform values in that buffer."}),"\n",(0,t.jsx)(r.li,{children:"Importantly, the same uniform buffer can be bound for multiple shaders. If an application can organize shared uniforms (such as projection matrices) into a separate uniform buffer, that same buffer can just be bound for all pipelines. An update of the projection matrix in the buffer can be done without rebinding the buffer to the pipelines"}),"\n"]}),"\n",(0,t.jsx)(r.h2,{id:"free-uniforms",children:'"Free" Uniforms'}),"\n",(0,t.jsx)(r.p,{children:'WebGL supports setting "free" uniforms on a program. While convenient, this is not supported in WebGPU and should be avoided.'}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Feature"}),(0,t.jsx)(r.th,{children:"Uniform Buffers"}),(0,t.jsx)(r.th,{children:"Uniforms"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"WebGL2"}),(0,t.jsx)(r.td,{children:"\u2705"}),(0,t.jsx)(r.td,{children:"\u2705"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"WebGPU"}),(0,t.jsx)(r.td,{children:"\u2705"}),(0,t.jsx)(r.td,{children:"\u274c"})]})]})]}),"\n",(0,t.jsx)(r.p,{children:"Also note that both JavaScript code and shader code needs to be written differently based on whether uniforms or uniform buffers are used, so any solution would also require shader code generation or transformation to be implemented."})]})}function l(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(f,{...e})}):f(e)}},1020:(e,r,n)=>{var t=n(6540),i=Symbol.for("react.element"),s=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,a=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function d(e,r,n){var t,s={},d=null,f=null;for(t in void 0!==n&&(d=""+n),void 0!==r.key&&(d=""+r.key),void 0!==r.ref&&(f=r.ref),r)o.call(r,t)&&!u.hasOwnProperty(t)&&(s[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===s[t]&&(s[t]=r[t]);return{$$typeof:i,type:e,key:d,ref:f,props:s,_owner:a.current}}r.Fragment=s,r.jsx=d,r.jsxs=d},4848:(e,r,n)=>{e.exports=n(1020)},8453:(e,r,n)=>{n.d(r,{R:()=>o,x:()=>a});var t=n(6540);const i={},s=t.createContext(i);function o(e){const r=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(s.Provider,{value:r},e.children)}}}]);