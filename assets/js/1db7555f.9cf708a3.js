/*! For license information please see 1db7555f.9cf708a3.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite_docusaurus=self.webpackChunkwebsite_docusaurus||[]).push([[8542],{6905:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>t,default:()=>h,frontMatter:()=>d,metadata:()=>l,toc:()=>o});var r=i(4848),s=i(8453);const d={},t="AnimationLoop",l={id:"api-reference/engine/animation-loop",title:"AnimationLoop",description:"Manages an animation loop and optionally a WebGL context and a WebGL canvas. It provides a number of features related to initialization and animation of a WebGL context.",source:"@site/../docs/api-reference/engine/animation-loop.md",sourceDirName:"api-reference/engine",slug:"/api-reference/engine/animation-loop",permalink:"/docs/api-reference/engine/animation-loop",draft:!1,unlisted:!1,editUrl:"https://github.com/visgl/luma.gl/tree/main/docs/../docs/api-reference/engine/animation-loop.md",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Model",permalink:"/docs/api-reference/engine/model"},next:{title:"AnimationLoopTemplate",permalink:"/docs/api-reference/engine/animation-loop-template"}},c={},o=[{value:"Usage",id:"usage",level:2},{value:"Types",id:"types",level:2},{value:"AnimationLoopProps",id:"animationloopprops",level:3},{value:"AnimationProps",id:"animationprops",level:3},{value:"Methods",id:"methods",level:2},{value:"constructor",id:"constructor",level:3},{value:"setProps(props : Object)",id:"setpropsprops--object",level:3},{value:"start()",id:"start",level:3},{value:"stop()",id:"stop",level:3},{value:"waitForRender() : Promise",id:"waitforrender--promise",level:3},{value:"redraw()",id:"redraw",level:3},{value:"setNeedsRedraw()",id:"setneedsredraw",level:3},{value:"attachTimeline()",id:"attachtimeline",level:3},{value:"detachTimeline()",id:"detachtimeline",level:3},{value:"toDataURL()",id:"todataurl",level:3},{value:"Callback Parameters",id:"callback-parameters",level:2},{value:"Frame timers",id:"frame-timers",level:3},{value:"Remarks",id:"remarks",level:2}];function a(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"animationloop",children:"AnimationLoop"}),"\n",(0,r.jsx)(n.p,{children:"Manages an animation loop and optionally a WebGL context and a WebGL canvas. It provides a number of features related to initialization and animation of a WebGL context."}),"\n",(0,r.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"import {AnimationLoop, ClipSpace} from '@luma.gl/engine';\n\nconst animationLoop = new AnimationLoop({\n  device: luma.createDevice(...),\n  override onInitialize({device}) {\n    // Keys in the object returned here will be available in onRender\n    this.clipSpaceQuad = new ClipSpace({device, fs: FRAGMENT_SHADER});\n  }\n  override onRender({tick}) {\n    // Tick is autoupdated by AnimationLoop\n    clipSpaceQuad.setUniforms({uTime: tick * 0.01}).draw();\n  }\n});\n\nanimationLoop.start();\n"})}),"\n",(0,r.jsx)(n.p,{children:"Use a canvas in the existing DOM through its HTML id"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"animationLoop.start({canvas: 'my-canvas'});\n"})}),"\n",(0,r.jsx)(n.h2,{id:"types",children:"Types"}),"\n",(0,r.jsx)(n.h3,{id:"animationloopprops",children:"AnimationLoopProps"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Property"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Default"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"device?"})}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.code,{children:"Device"})," | ",(0,r.jsx)(n.code,{children:"Promise<Device>"})]}),(0,r.jsx)(n.td,{}),(0,r.jsxs)(n.td,{children:["A ",(0,r.jsx)(n.code,{children:"Device"})," to render into."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"onInitialize?"})}),(0,r.jsx)(n.td,{children:"(callback)"}),(0,r.jsx)(n.td,{}),(0,r.jsxs)(n.td,{children:["Called once after the first call to ",(0,r.jsx)(n.code,{children:"animationLoop.start()"}),". Use to create GPU resources"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"onRender?"})}),(0,r.jsx)(n.td,{children:"(callback)"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"- Called on every animation frame. Use to render ."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"onFinalize?"})}),(0,r.jsx)(n.td,{children:"(callback)"}),(0,r.jsx)(n.td,{}),(0,r.jsxs)(n.td,{children:["- Called once when animation is stopped. Used to delete objects or free any resources created during ",(0,r.jsx)(n.code,{children:"onInitialize?"})]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"onError"})}),(0,r.jsx)(n.td,{children:"(callback)"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"- Called when an error is about to be thrown."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"autoResizeViewport?"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"boolean"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"true"})}),(0,r.jsxs)(n.td,{children:["If true, auto resizes GPU viewport each frame before ",(0,r.jsx)(n.code,{children:"onRender"})," is called."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"autoResizeDrawingBuffer?"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"boolean"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"true"})}),(0,r.jsxs)(n.td,{children:["If true, resizes the drawing buffer  each frame before ",(0,r.jsx)(n.code,{children:"onRender"})," is called."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"useDevicePixels?"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"boolean | number"})}),(0,r.jsx)(n.td,{}),(0,r.jsxs)(n.td,{children:["Multiplier. ",(0,r.jsx)(n.code,{children:"true"})," uses ",(0,r.jsx)(n.code,{children:"window.devicePixelRatio"})," as a multiplier in ",(0,r.jsx)(n.code,{children:"autoResizeDrawingBuffer"})," etc."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"stats?"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"Stats"})}),(0,r.jsx)(n.td,{}),(0,r.jsxs)(n.td,{children:["A probe.gl ",(0,r.jsx)(n.code,{children:"Stats"})," instance, Auto-created if not supplied."]})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"animationprops",children:"AnimationProps"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"onInitialize"}),", ",(0,r.jsx)(n.code,{children:"onRender"})," and ",(0,r.jsx)(n.code,{children:"onFinalize"}),"callbacks will be called with an object containing the following fields:"]}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"animationLoop"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"AnimationLoopTemplate"})}),(0,r.jsxs)(n.td,{children:["The calling ",(0,r.jsx)(n.code,{children:"AnimationLoopTemplate"})," instance"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"device"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"Device"})}),(0,r.jsxs)(n.td,{children:["This ",(0,r.jsx)(n.code,{children:"AnimationLoopTemplate"}),"'s gl context."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"canvas"})}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.code,{children:"HTMLCanvasElement"})," or ",(0,r.jsx)(n.code,{children:"OffscreenCanvas"})]}),(0,r.jsx)(n.td,{children:"The canvas associated with this context."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"aspect"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"number"})}),(0,r.jsx)(n.td,{children:"The canvas aspect ratio (width/height) to update projection matrices"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"width"})}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:'The drawing buffer width, in "device" pixels (can be different from canvas.width).'})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"height"})}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:'The drawing buffer height, in "device" pixels (can be different from canvas.width).'})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"useDevicePixels"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"boolean"})}),(0,r.jsx)(n.td,{children:"Boolean indicating if canvas is utilizes full resolution of Retina/"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"needsRedraw"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"String"})}),(0,r.jsx)(n.td,{children:"Redraw flag (will be automatically set if drawingBuffer resizes)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"time"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"Number"})}),(0,r.jsxs)(n.td,{children:["Milliseconds since ",(0,r.jsx)(n.code,{children:"AnimationLoopTemplate"})," was created (monotonic)."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"tick"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"Number"})}),(0,r.jsx)(n.td,{children:"Counter that updates for every frame rendered (monotonic)."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"renderPass"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"RenderPass"})}),(0,r.jsxs)(n.td,{children:["Availabel if ",(0,r.jsx)(n.code,{children:"createFrameBuffer: true"})," was passed to the constructor."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"_mousePosition"})}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.code,{children:"[x, y]"})," or ",(0,r.jsx)(n.code,{children:"null"})]}),(0,r.jsxs)(n.td,{children:["(",(0,r.jsx)(n.strong,{children:"experimental"}),") Current mouse position over the canvas."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"_timeline"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"Timeline"})}),(0,r.jsxs)(n.td,{children:["(",(0,r.jsx)(n.strong,{children:"experimental"}),") ",(0,r.jsx)(n.code,{children:"Timeline"})," object tracking the animation timeline and channels."]})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"methods",children:"Methods"}),"\n",(0,r.jsx)(n.h3,{id:"constructor",children:"constructor"}),"\n",(0,r.jsxs)(n.p,{children:["Creates a new ",(0,r.jsx)(n.code,{children:"AnimationLoop"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"new AnimationLoop(props : AnimationLoopProps)\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"props"})," - See documentation of ",(0,r.jsx)(n.code,{children:"AnimationLoopProps"})," above."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"setpropsprops--object",children:"setProps(props : Object)"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"animationLoop.setProps({...props})"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"props.autoResizeViewport"})," - Call ",(0,r.jsx)(n.code,{children:"gl.viewport"})," before each call to ",(0,r.jsx)(n.code,{children:"onRender()"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"props.autoResizeDrawingBuffer"})," - Update the drawing buffer size to match the canvas size before each call to ",(0,r.jsx)(n.code,{children:"onRender()"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"props.useDevicePixels"})," - Whether to use ",(0,r.jsx)(n.code,{children:"window.devicePixelRatio"})," as a multiplier, e.g. in ",(0,r.jsx)(n.code,{children:"autoResizeDrawingBuffer"})," etc."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"start",children:"start()"}),"\n",(0,r.jsx)(n.p,{children:"Restarts the animation"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"animationLoop.start(options)\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"options"}),"=",(0,r.jsx)(n.code,{children:"{}"})," (object) - Options to create the WebGLContext with."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"stop",children:"stop()"}),"\n",(0,r.jsx)(n.p,{children:"Stops the animation"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"animationLoop.stop()\n"})}),"\n",(0,r.jsx)(n.h3,{id:"waitforrender--promise",children:"waitForRender() : Promise"}),"\n",(0,r.jsxs)(n.p,{children:["Returns a promise which resolves in the next frame after rendering and the ",(0,r.jsx)(n.code,{children:"onRender"})," callback have completed."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"const loop = await animationLoop.waitForRender()\n// can now e.g. read pixels from webgl context\n...\n"})}),"\n",(0,r.jsx)(n.h3,{id:"redraw",children:"redraw()"}),"\n",(0,r.jsxs)(n.p,{children:["Immediately invokes a redraw (call ",(0,r.jsx)(n.code,{children:"onRender"})," with updated animation props). Only use if the canvas must be updated synchronously."]}),"\n",(0,r.jsx)(n.h3,{id:"setneedsredraw",children:"setNeedsRedraw()"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"animationLoop.setNeedsRedraw(reason: string)"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"reason"})," (",(0,r.jsx)(n.code,{children:"String"}),') - A human readable string giving a hint as to why redraw was needed (e.g. "geometry changed").']}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["If set, the value will be provided as the ",(0,r.jsx)(n.code,{children:"needsRedraw"})," field to the ",(0,r.jsx)(n.code,{children:"onRender"})," callback."]}),"\n",(0,r.jsx)(n.p,{children:"Notes:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"onRender"})," will be called for each animation frame regardless of whether this flag is set, and the redraw reason is automatically cleared."]}),"\n",(0,r.jsxs)(n.li,{children:["If called multiple times, the ",(0,r.jsx)(n.code,{children:"reason"})," provided in the first call will be remembered."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"AnimationLoop"})," automatically sets this flag if the WebGL context's drawing buffer size changes."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"attachtimeline",children:"attachTimeline()"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"attachTimeline(timeline: Timeline)\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Attach an ",(0,r.jsx)(n.code,{children:"Timeline"})," object to the animation loop. Allows time produced for animations to be paused, played, etc. See ",(0,r.jsx)(n.code,{children:"Timeline"})," documentation for more info."]}),"\n",(0,r.jsx)(n.h3,{id:"detachtimeline",children:"detachTimeline()"}),"\n",(0,r.jsx)(n.p,{children:"Detach the currently attached timeline from the animation loop."}),"\n",(0,r.jsx)(n.h3,{id:"todataurl",children:"toDataURL()"}),"\n",(0,r.jsxs)(n.p,{children:["Returns returns a ",(0,r.jsx)(n.code,{children:"Promise"})," that resolves to the data URL of the canvas once drawing operations are complete for the current frame. The data URL can be used as the ",(0,r.jsx)(n.code,{children:"src"})," for an HTML image element."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"animationLoop.toDataURL()"})}),"\n",(0,r.jsx)(n.h2,{id:"callback-parameters",children:"Callback Parameters"}),"\n",(0,r.jsxs)(n.p,{children:["The callbacks ",(0,r.jsx)(n.code,{children:"onInitialize"}),", ",(0,r.jsx)(n.code,{children:"onRender"})," and ",(0,r.jsx)(n.code,{children:"onFinalize"})," that the app supplies to the ",(0,r.jsx)(n.code,{children:"AnimationLoop"}),", will be called with an object containing named parameters:"]}),"\n",(0,r.jsx)(n.h3,{id:"frame-timers",children:"Frame timers"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["The animation loop tracks GPU and CPU render time of each frame the in member properties ",(0,r.jsx)(n.code,{children:"cpuTime"})," and ",(0,r.jsx)(n.code,{children:"gpuTime"}),". If ",(0,r.jsx)(n.code,{children:"gpuTime"})," is set to ",(0,r.jsx)(n.code,{children:"-1"}),", then the timing for the last frame was invalid and should not be used (this rare and might occur, for example, if the GPU was throttled mid-frame)."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"remarks",children:"Remarks"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["You can instantiate multiple ",(0,r.jsx)(n.code,{children:"AnimationLoop"})," classes in parallel, rendering into the same or different ",(0,r.jsx)(n.code,{children:"devices"}),"."]}),"\n",(0,r.jsx)(n.li,{children:"Works both in browser and under Node.js."}),"\n",(0,r.jsxs)(n.li,{children:["All ",(0,r.jsx)(n.code,{children:"AnimationLoop"})," methods can be chained."]}),"\n",(0,r.jsx)(n.li,{children:"Postpones context creation until the page (i.e. all HTML) has been loaded. At this time it is safe to specify canvas ids."}),"\n",(0,r.jsx)(n.li,{children:"The supplied callback function must return a WebGLRenderingContext or an error will be thrown."}),"\n",(0,r.jsxs)(n.li,{children:["This callback registration function should not be called if a ",(0,r.jsx)(n.code,{children:"WebGLRenderingContext"})," was supplied to the AnimationLoop constructor."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"useDevicePixels"})," can accept a custom ratio (Number), instead of ",(0,r.jsx)(n.code,{children:"true"})," or ",(0,r.jsx)(n.code,{children:"false"}),". This allows rendering to a much smaller or higher resolutions. When using high value (usually more than device pixel ratio), it is possible it can get clamped down, this happens due to system memory limitation, in such cases a warning will be logged to the browser console."]}),"\n",(0,r.jsx)(n.li,{children:"`onInitialize`` is called after page load completes and the passed in device promise has been resolved (the device has been created)."}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},1020:(e,n,i)=>{var r=i(6540),s=Symbol.for("react.element"),d=Symbol.for("react.fragment"),t=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function o(e,n,i){var r,d={},o=null,a=null;for(r in void 0!==i&&(o=""+i),void 0!==n.key&&(o=""+n.key),void 0!==n.ref&&(a=n.ref),n)t.call(n,r)&&!c.hasOwnProperty(r)&&(d[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===d[r]&&(d[r]=n[r]);return{$$typeof:s,type:e,key:o,ref:a,props:d,_owner:l.current}}n.Fragment=d,n.jsx=o,n.jsxs=o},4848:(e,n,i)=>{e.exports=i(1020)},8453:(e,n,i)=>{i.d(n,{R:()=>t,x:()=>l});var r=i(6540);const s={},d=r.createContext(s);function t(e){const n=r.useContext(d);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);