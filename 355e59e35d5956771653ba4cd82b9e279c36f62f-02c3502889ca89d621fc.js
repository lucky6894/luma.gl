(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"2xM4":function(e,n,r){"use strict";r.d(n,"b",(function(){return t})),r.d(n,"a",(function(){return i}));var t="vs",i="fs"},"63Iv":function(e,n,r){"use strict";r.d(n,"a",(function(){return u})),r.d(n,"c",(function(){return d})),r.d(n,"b",(function(){return l}));r("ToJy");var t,i=r("2xM4"),o=r("ayeP"),a=((t={})[i.b]="#ifdef MODULE_LOGDEPTH\n  logdepth_adjustPosition(gl_Position);\n#endif\n",t[i.a]="#ifdef MODULE_MATERIAL\n  gl_FragColor = material_filterColor(gl_FragColor);\n#endif\n\n#ifdef MODULE_LIGHTING\n  gl_FragColor = lighting_filterColor(gl_FragColor);\n#endif\n\n#ifdef MODULE_FOG\n  gl_FragColor = fog_filterColor(gl_FragColor);\n#endif\n\n#ifdef MODULE_PICKING\n  gl_FragColor = picking_filterHighlightColor(gl_FragColor);\n  gl_FragColor = picking_filterPickingColor(gl_FragColor);\n#endif\n\n#ifdef MODULE_LOGDEPTH\n  logdepth_setFragDepth();\n#endif\n",t),u="__LUMA_INJECT_DECLARATIONS__",f=/void\s+main\s*\([^)]*\)\s*\{\n?/,s=/}\n?[^{}]*$/,c=[];function d(e,n,r,t){void 0===t&&(t=!1);var o=n===i.b,d=function(n){var t=r[n];t.sort((function(e,n){return e.order-n.order})),c.length=t.length;for(var i=0,a=t.length;i<a;++i)c[i]=t[i].injection;var d=c.join("\n")+"\n";switch(n){case"vs:#decl":o&&(e=e.replace(u,d));break;case"vs:#main-start":o&&(e=e.replace(f,(function(e){return e+d})));break;case"vs:#main-end":o&&(e=e.replace(s,(function(e){return d+e})));break;case"fs:#decl":o||(e=e.replace(u,d));break;case"fs:#main-start":o||(e=e.replace(f,(function(e){return e+d})));break;case"fs:#main-end":o||(e=e.replace(s,(function(e){return d+e})));break;default:e=e.replace(n,(function(e){return e+d}))}};for(var l in r)d(l);return e=e.replace(u,""),t&&(e=e.replace(/\}\s*$/,(function(e){return e+a[n]}))),e}function l(e){var n={};return Object(o.a)(Array.isArray(e)&&e.length>1),e.forEach((function(e){for(var r in e)n[r]=n[r]?n[r]+"\n"+e[r]:e[r]})),n}},ToJy:function(e,n,r){"use strict";var t=r("I+eb"),i=r("4zBA"),o=r("We1y"),a=r("ewvW"),u=r("B/qT"),f=r("V37c"),s=r("0Dky"),c=r("rdv8"),d=r("pkCn"),l=r("BNF5"),v=r("2Zix"),_=r("LQDL"),g=r("USzg"),p=[],E=i(p.sort),h=i(p.push),m=s((function(){p.sort(void 0)})),b=s((function(){p.sort(null)})),A=d("sort"),y=!s((function(){if(_)return _<70;if(!(l&&l>3)){if(v)return!0;if(g)return g<603;var e,n,r,t,i="";for(e=65;e<76;e++){switch(n=String.fromCharCode(e),e){case 66:case 69:case 70:case 72:r=3;break;case 68:case 71:r=4;break;default:r=2}for(t=0;t<47;t++)p.push({k:n+t,v:r})}for(p.sort((function(e,n){return n.v-e.v})),t=0;t<p.length;t++)n=p[t].k.charAt(0),i.charAt(i.length-1)!==n&&(i+=n);return"DGBEFHACIJK"!==i}}));t({target:"Array",proto:!0,forced:m||!b||!A||!y},{sort:function(e){void 0!==e&&o(e);var n=a(this);if(y)return void 0===e?E(n):E(n,e);var r,t,i=[],s=u(n);for(t=0;t<s;t++)t in n&&h(i,n[t]);for(c(i,function(e){return function(n,r){return void 0===r?-1:void 0===n?1:void 0!==e?+e(n,r)||0:f(n)>f(r)?1:-1}}(e)),r=i.length,t=0;t<r;)n[t]=i[t++];for(;t<s;)delete n[t++];return n}})},V37c:function(e,n,r){var t=r("2oRo"),i=r("9d/t"),o=t.String;e.exports=function(e){if("Symbol"===i(e))throw TypeError("Cannot convert a Symbol value to a string");return o(e)}},ayeP:function(e,n,r){"use strict";function t(e,n){if(!e)throw new Error(n||"shadertools: assertion failed.")}r.d(n,"a",(function(){return t}))},xmzN:function(e,n,r){"use strict";r.d(n,"a",(function(){return M}));r("ToJy");var t=r("2xM4"),i=r("ayeP"),o={number:{validate:function(e,n){return Number.isFinite(e)&&(!("max"in n)||e<=n.max)&&(!("min"in n)||e>=n.min)}},array:{validate:function(e,n){return Array.isArray(e)||ArrayBuffer.isView(e)}}};function a(e){var n=u(e);return"object"===n?e?"type"in e?Object.assign({},e,o[e.type]):"value"in e?(n=u(e.value),Object.assign({type:n},e,o[n])):{type:"object",value:e}:{type:"object",value:null}:Object.assign({type:n,value:e},o[n])}function u(e){return Array.isArray(e)||ArrayBuffer.isView(e)?"array":typeof e}var f=function(){function e(e){var n=e.name,r=e.vs,t=e.fs,o=e.dependencies,u=void 0===o?[]:o,f=e.uniforms,s=e.getUniforms,c=e.deprecations,d=void 0===c?[]:c,l=e.defines,v=void 0===l?{}:l,_=e.inject,g=void 0===_?{}:_,p=e.vertexShader,E=e.fragmentShader;Object(i.a)("string"==typeof n),this.name=n,this.vs=r||p,this.fs=t||E,this.getModuleUniforms=s,this.dependencies=u,this.deprecations=this._parseDeprecationDefinitions(d),this.defines=v,this.injections=function(e){var n={vs:{},fs:{}};for(var r in e){var t=e[r],i=r.slice(0,2);"string"==typeof t&&(t={order:0,injection:t}),n[i][r]=t}return n}(g),f&&(this.uniforms=function(e){var n={};for(var r in e){var t=a(e[r]);n[r]=t}return n}(f))}var n=e.prototype;return n.getModuleSource=function(e){var n;switch(e){case"vs":n=this.vs||"";break;case"fs":n=this.fs||"";break;default:Object(i.a)(!1)}return"#define MODULE_"+this.name.toUpperCase().replace(/[^0-9a-z]/gi,"_")+"\n"+n+"// END MODULE_"+this.name+"\n\n"},n.getUniforms=function(e,n){return this.getModuleUniforms?this.getModuleUniforms(e,n):this.uniforms?this._defaultGetUniforms(e):{}},n.getDefines=function(){return this.defines},n.checkDeprecations=function(e,n){this.deprecations.forEach((function(r){r.regex.test(e)&&(r.deprecated?n.deprecated(r.old,r.new)():n.removed(r.old,r.new)())}))},n._parseDeprecationDefinitions=function(e){return e.forEach((function(e){switch(e.type){case"function":e.regex=new RegExp("\\b"+e.old+"\\(");break;default:e.regex=new RegExp(e.type+" "+e.old+";")}})),e},n._defaultGetUniforms=function(e){void 0===e&&(e={});var n={},r=this.uniforms;for(var t in r){var o=r[t];t in e&&!o.private?(o.validate&&Object(i.a)(o.validate(e[t],o),this.name+": invalid "+t),n[t]=e[t]):n[t]=o.value}return n},e}();function s(e,n){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(r)return(r=r.call(e)).next.bind(r);if(Array.isArray(e)||(r=function(e,n){if(!e)return;if("string"==typeof e)return c(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return c(e,n)}(e))||n&&e&&"number"==typeof e.length){r&&(e=r);var t=0;return function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=new Array(n);r<n;r++)t[r]=e[r];return t}function d(e){return l(function e(n,r){return n.map((function(n){return n instanceof f||(Object(i.a)("string"!=typeof n,"Shader module use by name is deprecated. Import shader module '"+n+"' and use it directly."),Object(i.a)(n.name,"shader module has no name"),(n=new f(n)).dependencies=e(n.dependencies)),n}))}(e))}function l(e){var n={},r={};return v({modules:e,level:0,moduleMap:n,moduleDepth:r}),Object.keys(r).sort((function(e,n){return r[n]-r[e]})).map((function(e){return n[e]}))}function v(e){var n=e.modules,r=e.level,t=e.moduleMap,i=e.moduleDepth;if(r>=5)throw new Error("Possible loop in shader dependency graph");for(var o,a=s(n);!(o=a()).done;){var u=o.value;t[u.name]=u,(void 0===i[u.name]||i[u.name]<r)&&(i[u.name]=r)}for(var f,c=s(n);!(f=c()).done;){var d=f.value;d.dependencies&&v({modules:d.dependencies,level:r+1,moduleMap:t,moduleDepth:i})}}var _={GLSL_FRAG_DATA:["WEBGL_draw_buffers",!0],GLSL_FRAG_DEPTH:["EXT_frag_depth",!0],GLSL_DERIVATIVES:["OES_standard_derivatives",!0],GLSL_TEXTURE_LOD:["EXT_shader_texture_lod",!0]},g={};Object.keys(_).forEach((function(e){g[e]=e}));var p={};function E(e,n,r){void 0===r&&(r={});var t=_[n];if(Object(i.a)(t,n),!function(e){void 0===e&&(e={});var n="undefined"!=typeof window&&window.navigator||{},r=e.userAgent||n.userAgent||"",t=-1!==r.indexOf("MSIE "),i=-1!==r.indexOf("Trident/");return t||i}(r))return!0;if(n in p)return p[n];var o="#extension GL_"+t[0]+" : "+(r.behavior||"enable")+"\nvoid main(void) {}",a=e.createShader(e.VERTEX_SHADER);e.shaderSource(a,o),e.compileShader(a);var u=e.getShaderParameter(a,e.COMPILE_STATUS);return e.deleteShader(a),p[n]=u,u}function h(e,n){var r=_[n];Object(i.a)(r,n);var t=function(e){return"undefined"!=typeof WebGL2RenderingContext&&e instanceof WebGL2RenderingContext||Boolean(e&&2===e._version)}(e)&&r[1]||r[0],o="string"==typeof t?Boolean(e.getExtension(t)):t;return Object(i.a)(!1===o||!0===o),o}function m(e,n){return(n=Array.isArray(n)?n:[n]).every((function(n){return h(e,n)}))}var b=r("63Iv");function A(e,n){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(r)return(r=r.call(e)).next.bind(r);if(Array.isArray(e)||(r=function(e,n){if(!e)return;if("string"==typeof e)return y(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return y(e,n)}(e))||n&&e&&"number"==typeof e.length){r&&(e=r);var t=0;return function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function y(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=new Array(n);r<n;r++)t[r]=e[r];return t}function L(e){return new RegExp("\\b"+e+"[ \\t]+(\\w+[ \\t]+\\w+(\\[\\w+\\])?;)","g")}var D,T=[[/^(#version[ \t]+(100|300[ \t]+es))?[ \t]*\n/,"#version 300 es\n"],[/\btexture(2D|2DProj|Cube)Lod(EXT)?\(/g,"textureLod("],[/\btexture(2D|2DProj|Cube)(EXT)?\(/g,"texture("]],O=[].concat(T,[[L("attribute"),"in $1"],[L("varying"),"out $1"]]),R=[].concat(T,[[L("varying"),"in $1"]]),S=[[/^#version[ \t]+300[ \t]+es/,"#version 100"],[/\btexture(2D|2DProj|Cube)Lod\(/g,"texture$1LodEXT("],[/\btexture\(/g,"texture2D("],[/\btextureLod\(/g,"texture2DLodEXT("]],I=[].concat(S,[[L("in"),"attribute $1"],[L("out"),"varying $1"]]),U=[].concat(S,[[L("in"),"varying $1"]]),F=/\bout[ \t]+vec4[ \t]+(\w+)[ \t]*;\n?/,G=/void\s+main\s*\([^)]*\)\s*\{\n?/;function w(e,n,r){switch(n){case 300:return r?x(e,O):function(e){var n=(e=x(e,R)).match(F);if(n){var r=n[1];e=e.replace(new RegExp("\\bgl_FragColor\\b","g"),r)}else{e=e.replace(G,(function(e){return"out vec4 fragmentColor;\n"+e})).replace(new RegExp("\\bgl_FragColor\\b","g"),"fragmentColor")}return e}(e);case 100:return r?x(e,I):function(e){var n=(e=x(e,U)).match(F);if(n){var r=n[1];e=e.replace(F,"").replace(new RegExp("\\b"+r+"\\b","g"),"gl_FragColor")}return e}(e);default:throw new Error("unknown GLSL version "+n)}}function x(e,n){for(var r,t=A(n);!(r=t()).done;){var i=r.value,o=i[0],a=i[1];e=e.replace(o,a)}return e}function j(e,n){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(r)return(r=r.call(e)).next.bind(r);if(Array.isArray(e)||(r=function(e,n){if(!e)return;if("string"==typeof e)return C(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return C(e,n)}(e))||n&&e&&"number"==typeof e.length){r&&(e=r);var t=0;return function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function C(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=new Array(n);r<n;r++)t[r]=e[r];return t}var N="\n\n"+b.a+"\n\n",P=((D={})[t.b]="vertex",D[t.a]="fragment",D);function M(e,n){var r=n.vs,i=n.fs,o=d(n.modules||[]);return{gl:e,vs:V(e,Object.assign({},n,{source:r,type:t.b,modules:o})),fs:V(e,Object.assign({},n,{source:i,type:t.a,modules:o})),getUniforms:k(o)}}function V(e,n){var r=n.id,o=n.source,a=n.type,u=n.modules,f=n.defines,s=void 0===f?{}:f,c=n.hookFunctions,d=void 0===c?[]:c,l=n.inject,v=void 0===l?{}:l,_=n.transpileToGLSL100,p=void 0!==_&&_,h=n.prologue,A=void 0===h||h,y=n.log;Object(i.a)("string"==typeof o,"shader source must be a string");var L=a===t.b,D=o.split("\n"),T=100,O="",R=o;0===D[0].indexOf("#version ")?(T=300,O=D[0],R=D.slice(1).join("\n")):O="#version "+T;var S={};u.forEach((function(e){Object.assign(S,e.getDefines())})),Object.assign(S,s);var I=A?O+"\n"+function(e){var n=e.id,r=e.source,t=e.type;return n&&"string"==typeof n&&-1===r.indexOf("SHADER_NAME")?"\n#define SHADER_NAME "+n+"_"+P[t]+"\n\n":""}({id:r,source:o,type:a})+"\n"+function(e){var n=e.type;return"\n#define SHADER_TYPE_"+P[n].toUpperCase()+"\n"}({type:a})+"\n"+function(e){switch(function(e){var n=e.getExtension("WEBGL_debug_renderer_info"),r=e.getParameter(n&&n.UNMASKED_VENDOR_WEBGL||7936),t=e.getParameter(n&&n.UNMASKED_RENDERER_WEBGL||7937);return{gpuVendor:function(e,n){if(e.match(/NVIDIA/i)||n.match(/NVIDIA/i))return"NVIDIA";if(e.match(/INTEL/i)||n.match(/INTEL/i))return"INTEL";if(e.match(/AMD/i)||n.match(/AMD/i)||e.match(/ATI/i)||n.match(/ATI/i))return"AMD";return"UNKNOWN GPU"}(r,t),vendor:r,renderer:t,version:e.getParameter(7938),shadingLanguageVersion:e.getParameter(35724)}}(e).gpuVendor.toLowerCase()){case"nvidia":return"#define NVIDIA_GPU\n// Nvidia optimizes away the calculation necessary for emulated fp64\n#define LUMA_FP64_CODE_ELIMINATION_WORKAROUND 1\n";case"intel":return"#define INTEL_GPU\n// Intel optimizes away the calculation necessary for emulated fp64\n#define LUMA_FP64_CODE_ELIMINATION_WORKAROUND 1\n// Intel's built-in 'tan' function doesn't have acceptable precision\n#define LUMA_FP32_TAN_PRECISION_WORKAROUND 1\n// Intel GPU doesn't have full 32 bits precision in same cases, causes overflow\n#define LUMA_FP64_HIGH_BITS_OVERFLOW_WORKAROUND 1\n";case"amd":return"#define AMD_GPU\n";default:return"#define DEFAULT_GPU\n// Prevent driver from optimizing away the calculation necessary for emulated fp64\n#define LUMA_FP64_CODE_ELIMINATION_WORKAROUND 1\n// Intel's built-in 'tan' function doesn't have acceptable precision\n#define LUMA_FP32_TAN_PRECISION_WORKAROUND 1\n// Intel GPU doesn't have full 32 bits precision in same cases, causes overflow\n#define LUMA_FP64_HIGH_BITS_OVERFLOW_WORKAROUND 1\n"}}(e)+"\n"+function(e,n,r){var t="#if (__VERSION__ > 120)\n\n# define FEATURE_GLSL_DERIVATIVES\n# define FEATURE_GLSL_DRAW_BUFFERS\n# define FEATURE_GLSL_FRAG_DEPTH\n# define FEATURE_GLSL_TEXTURE_LOD\n\n// DEPRECATED FLAGS, remove in v9\n# define FRAG_DEPTH\n# define DERIVATIVES\n# define DRAW_BUFFERS\n# define TEXTURE_LOD\n\n#endif // __VERSION\n";return m(e,g.GLSL_FRAG_DEPTH)&&(t+="\n// FRAG_DEPTH => gl_FragDepth is available\n#ifdef GL_EXT_frag_depth\n#extension GL_EXT_frag_depth : enable\n# define FEATURE_GLSL_FRAG_DEPTH\n# define FRAG_DEPTH\n# define gl_FragDepth gl_FragDepthEXT\n#endif\n"),m(e,g.GLSL_DERIVATIVES)&&E(e,g.GLSL_DERIVATIVES)&&(t+="\n// DERIVATIVES => dxdF, dxdY and fwidth are available\n#ifdef GL_OES_standard_derivatives\n#extension GL_OES_standard_derivatives : enable\n# define FEATURE_GLSL_DERIVATIVES\n# define DERIVATIVES\n#endif\n"),m(e,g.GLSL_FRAG_DATA)&&E(e,g.GLSL_FRAG_DATA,{behavior:"require"})&&(t+="\n// DRAW_BUFFERS => gl_FragData[] is available\n#ifdef GL_EXT_draw_buffers\n#extension GL_EXT_draw_buffers : require\n#define FEATURE_GLSL_DRAW_BUFFERS\n#define DRAW_BUFFERS\n#endif\n"),m(e,g.GLSL_TEXTURE_LOD)&&(t+="// TEXTURE_LOD => texture2DLod etc are available\n#ifdef GL_EXT_shader_texture_lod\n#extension GL_EXT_shader_texture_lod : enable\n\n# define FEATURE_GLSL_TEXTURE_LOD\n# define TEXTURE_LOD\n\n#endif\n"),t}(e)+"\n"+function(e){void 0===e&&(e={});var n=0,r="";for(var t in e){0===n&&(r+="\n// APPLICATION DEFINES\n"),n++;var i=e[t];(i||Number.isFinite(i))&&(r+="#define "+t.toUpperCase()+" "+e[t]+"\n")}0===n&&(r+="\n");return r}(S)+"\n"+(L?"":"precision highp float;\n\n")+"\n":O+"\n",U=function(e){var n={vs:{},fs:{}};return e.forEach((function(e){var r;"string"!=typeof e?e=(r=e).hook:r={};var t=(e=e.trim()).split(":"),i=t[0],o=t[1],a=e.replace(/\(.+/,"");n[i][a]=Object.assign(r,{signature:o})})),n}(d),F={},G={},x={};for(var C in v){var M="string"==typeof v[C]?{injection:v[C],order:0}:v[C],V=C.match(/^(v|f)s:(#)?([\w-]+)$/);if(V){var k=V[2],W=V[3];k?"decl"===W?G[C]=[M]:x[C]=[M]:F[C]=[M]}else x[C]=[M]}for(var X,H=j(u);!(X=H()).done;){var B=X.value;y&&B.checkDeprecations(R,y),I+=B.getModuleSource(a,T);var $=B.injections[a];for(var K in $){var z=K.match(/^(v|f)s:#([\w-]+)$/);if(z){var J="decl"===z[2]?G:x;J[K]=J[K]||[],J[K].push($[K])}else F[K]=F[K]||[],F[K].push($[K])}}return I+=N,I=Object(b.c)(I,a,G),I+=function(e,n){var r="";for(var t in e){var i=e[t];if(r+="void "+i.signature+" {\n",i.header&&(r+="  "+i.header),n[t]){var o=n[t];o.sort((function(e,n){return e.order-n.order}));for(var a,u=j(o);!(a=u()).done;){var f=a.value;r+="  "+f.injection+"\n"}}i.footer&&(r+="  "+i.footer),r+="}\n"}return r}(U[a],F),I+=R,I=w(I=Object(b.c)(I,a,x),p?100:T,L)}function k(e){return function(n){for(var r,t={},i=j(e);!(r=i()).done;){var o=r.value.getUniforms(n,t);Object.assign(t,o)}return t}}}}]);