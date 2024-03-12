/*! For license information please see 0be78f82.1bcde779.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite_docusaurus=self.webpackChunkwebsite_docusaurus||[]).push([[6781],{7924:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>o,default:()=>f,frontMatter:()=>i,metadata:()=>d,toc:()=>a});var s=n(4848),t=n(8453);const i={},o="BufferTransform",d={id:"api-reference/engine/transform/buffer-transform",title:"BufferTransform",description:"BufferTransform is an internal helper class for Transform, responsible for managing resources and state required for reading from and/or writing to Buffer objects. It auto creates feedbackBufferes when requested, creates TransformFeedback objects. Maintains all buffer bindings, when swapping is eanbled, two binding objects are created for easy switching of all WebGL resource binginds.",source:"@site/../docs/api-reference/engine/transform/buffer-transform.md",sourceDirName:"api-reference/engine/transform",slug:"/api-reference/engine/transform/buffer-transform",permalink:"/docs/api-reference/engine/transform/buffer-transform",draft:!1,unlisted:!1,editUrl:"https://github.com/visgl/luma.gl/tree/main/docs/../docs/api-reference/engine/transform/buffer-transform.md",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Transform",permalink:"/docs/api-reference/engine/transform"},next:{title:"TextureTransform",permalink:"/docs/api-reference/engine/transform/texture-transform"}},c={},a=[{value:"Constructor",id:"constructor",level:2},{value:"Transform(device: Device, props: Object)",id:"transformdevice-device-props-object",level:3},{value:"Methods (Model props)",id:"methods-model-props",level:2},{value:"getDrawOptions(opts: Object) : Object",id:"getdrawoptionsopts-object--object",level:3},{value:"updateModelProps(props: Object) : Object",id:"updatemodelpropsprops-object--object",level:3},{value:"Methods (Resource management)",id:"methods-resource-management",level:2},{value:"setupResources(opts: Object)",id:"setupresourcesopts-object",level:3},{value:"swap()",id:"swap",level:3},{value:"update(props: Object)",id:"updateprops-object",level:3},{value:"Methods (Accessors)",id:"methods-accessors",level:2},{value:"getBuffer(varyingName : String) : Buffer",id:"getbuffervaryingname--string--buffer",level:3},{value:"getData([options : Object]) : ArrayBufferView",id:"getdataoptions--object--arraybufferview",level:3}];function l(e){const r={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.h1,{id:"buffertransform",children:"BufferTransform"}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.code,{children:"BufferTransform"})," is an internal helper class for ",(0,s.jsx)(r.code,{children:"Transform"}),", responsible for managing resources and state required for reading from and/or writing to ",(0,s.jsx)(r.code,{children:"Buffer"})," objects. It auto creates ",(0,s.jsx)(r.code,{children:"feedbackBufferes"})," when requested, creates ",(0,s.jsx)(r.code,{children:"TransformFeedback"})," objects. Maintains all buffer bindings, when swapping is eanbled, two binding objects are created for easy switching of all WebGL resource binginds."]}),"\n",(0,s.jsxs)(r.p,{children:["NOTE: In following sections 'buffer transform' is used to refer to 'reading from and/or writing to ",(0,s.jsx)(r.code,{children:"Buffer"})," objects'."]}),"\n",(0,s.jsx)(r.h2,{id:"constructor",children:"Constructor"}),"\n",(0,s.jsx)(r.h3,{id:"transformdevice-device-props-object",children:"Transform(device: Device, props: Object)"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.code,{children:"gl"})," (",(0,s.jsx)(r.code,{children:"WebGLRenderingContext"}),") gl - context"]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.code,{children:"props"})," (",(0,s.jsx)(r.code,{children:"Object"}),", Optional) - contains following data."]}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"sourceBuffers"})," (",(0,s.jsx)(r.code,{children:"Object"}),", Optional) - key and value pairs, where key is the name of vertex shader attribute and value is the corresponding ",(0,s.jsx)(r.code,{children:"Attribute"}),", ",(0,s.jsx)(r.code,{children:"Buffer"})," or attribute descriptor object."]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"feedbackBuffers"})," (",(0,s.jsx)(r.code,{children:"Object"}),", Optional) - key and value pairs, where key is the name of vertex shader varying and value is the corresponding ",(0,s.jsx)(r.code,{children:"Buffer"})," object or buffer params object. If a buffer params object is specified, it will contain following fields, these can be used to capture data into the buffer at particular offset and size.","\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"buffer"}),"=(Buffer) - Buffer object to be bound."]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"byteOffset"}),"=(Number, default: 0) - Byte offset that is used to start recording the data in the buffer."]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"byteSize"}),"=(Number, default: remaining buffer size) - Size in bytes that is used for recording the data."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"varyings"})," (",(0,s.jsx)(r.code,{children:"Array"}),", Optional) - Array of vertex shader varyings names. When not provided this can be deduced from ",(0,s.jsx)(r.code,{children:"feedbackBuffers"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(r.p,{children:["NOTE: If only reading from ",(0,s.jsx)(r.code,{children:"Buffer"})," objects, above optional props doesn't have to be supplied during construction, but can be supplied using ",(0,s.jsx)(r.code,{children:"update"})," method. If writing to ",(0,s.jsx)(r.code,{children:"Buffer"})," objects, either ",(0,s.jsx)(r.code,{children:"varyings"})," or ",(0,s.jsx)(r.code,{children:"feedbackBuffers"})," must be supplied."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(r.h2,{id:"methods-model-props",children:"Methods (Model props)"}),"\n",(0,s.jsx)(r.h3,{id:"getdrawoptionsopts-object--object",children:"getDrawOptions(opts: Object) : Object"}),"\n",(0,s.jsxs)(r.p,{children:["Returns resources required when performing ",(0,s.jsx)(r.code,{children:"Model.draw()"})," options."]}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"opts"})," (",(0,s.jsx)(r.code,{children:"Object"}),") - Any existing ",(0,s.jsx)(r.code,{children:"opts.attributes"})," will be merged with new attributes."]}),"\n"]}),"\n",(0,s.jsx)(r.p,{children:"Returns an Object : attributes, transformFeedback."}),"\n",(0,s.jsx)(r.h3,{id:"updatemodelpropsprops-object--object",children:"updateModelProps(props: Object) : Object"}),"\n",(0,s.jsxs)(r.p,{children:["Updates input ",(0,s.jsx)(r.code,{children:"props"})," object with data required for buffer transform."]}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"opts"})," (",(0,s.jsx)(r.code,{children:"Object"}),") - If writing to ",(0,s.jsx)(r.code,{children:"Buffer"})," objects, ",(0,s.jsx)(r.code,{children:"opts.varying"})," will be updated."]}),"\n"]}),"\n",(0,s.jsx)(r.p,{children:"Returns updated object."}),"\n",(0,s.jsx)(r.h2,{id:"methods-resource-management",children:"Methods (Resource management)"}),"\n",(0,s.jsx)(r.h3,{id:"setupresourcesopts-object",children:"setupResources(opts: Object)"}),"\n",(0,s.jsx)(r.p,{children:"Sets up internal resources needed writing to buffers."}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"opts"})," (",(0,s.jsx)(r.code,{children:"Object"}),") - contains following data.","\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"model"})," (",(0,s.jsx)(r.code,{children:"Model"}),", Optional) - ",(0,s.jsx)(r.code,{children:"Model"})," object that is used to perform draw operations."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(r.h3,{id:"swap",children:"swap()"}),"\n",(0,s.jsxs)(r.p,{children:["If ",(0,s.jsx)(r.code,{children:"feedbackMap"})," is provided during construction, performs source and feedback buffers swap as per the ",(0,s.jsx)(r.code,{children:"feedbackMap"}),"."]}),"\n",(0,s.jsx)(r.h3,{id:"updateprops-object",children:"update(props: Object)"}),"\n",(0,s.jsx)(r.p,{children:"Updates buffer bindings for one or more source or feedback buffers."}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"props"})," (",(0,s.jsx)(r.code,{children:"Object"}),") - contains following data.","\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"sourceBuffers"})," (",(0,s.jsx)(r.code,{children:"Object"}),", Optional) - key and value pairs, where key is the name of vertex shader attribute and value is the corresponding ",(0,s.jsx)(r.code,{children:"Attribute"}),", ",(0,s.jsx)(r.code,{children:"Buffer"})," or attribute descriptor object."]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"feedbackBuffers"})," (",(0,s.jsx)(r.code,{children:"Object"}),", Optional) - key and value pairs, where key is the name of vertex shader varying and value is the corresponding ",(0,s.jsx)(r.code,{children:"Buffer"})," object or buffer params object. If a buffer params object is specified, it will contain following fields, these can be used to capture data into the buffer at particular offset and size.","\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"buffer"}),"=(Buffer) - Buffer object to be bound."]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"byteOffset"}),"=(Number, default: 0) - Byte offset that is used to start recording the data in the buffer."]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"byteSize"}),"=(Number, default: remaining buffer size) - Size in bytes that is used for recording the data."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(r.h2,{id:"methods-accessors",children:"Methods (Accessors)"}),"\n",(0,s.jsx)(r.h3,{id:"getbuffervaryingname--string--buffer",children:"getBuffer(varyingName : String) : Buffer"}),"\n",(0,s.jsx)(r.p,{children:"Returns current feedback buffer corresponding to given varying name."}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"varyingName"})," (",(0,s.jsx)(r.code,{children:"String"}),") - varying name."]}),"\n"]}),"\n",(0,s.jsx)(r.h3,{id:"getdataoptions--object--arraybufferview",children:"getData([options : Object]) : ArrayBufferView"}),"\n",(0,s.jsx)(r.p,{children:"Reads and returns data from current feedback buffer corresponding to the given varying name."}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"options.varyingName"})," (",(0,s.jsx)(r.code,{children:"String"}),", Optional) - when specified, first checks if there is a corresponding feedback buffer, if so reads data from this buffer and returns. When not specified, there must be target texture and data is read from this texture and returned."]}),"\n"]})]})}function f(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},1020:(e,r,n)=>{var s=n(6540),t=Symbol.for("react.element"),i=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,d=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function a(e,r,n){var s,i={},a=null,l=null;for(s in void 0!==n&&(a=""+n),void 0!==r.key&&(a=""+r.key),void 0!==r.ref&&(l=r.ref),r)o.call(r,s)&&!c.hasOwnProperty(s)&&(i[s]=r[s]);if(e&&e.defaultProps)for(s in r=e.defaultProps)void 0===i[s]&&(i[s]=r[s]);return{$$typeof:t,type:e,key:a,ref:l,props:i,_owner:d.current}}r.Fragment=i,r.jsx=a,r.jsxs=a},4848:(e,r,n)=>{e.exports=n(1020)},8453:(e,r,n)=>{n.d(r,{R:()=>o,x:()=>d});var s=n(6540);const t={},i=s.createContext(t);function o(e){const r=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(i.Provider,{value:r},e.children)}}}]);