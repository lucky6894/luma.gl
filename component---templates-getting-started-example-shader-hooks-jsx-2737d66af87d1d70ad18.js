(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{RDGU:function(n,o,e){"use strict";e.r(o),e.d(o,"default",(function(){return g}));var t=e("dI71"),i=e("q1tI"),r=e.n(i),a=e("z0FI"),s=(e("PF2M"),e("IZzc"),e("DhAv")),u=e("UD/Y"),d=e("bjw9"),c=e("3LCa"),f=e("IObG"),l="\n  attribute vec2 position;\n\n  void main() {\n    gl_Position = vec4(position, 0.0, 1.0);\n    OFFSET_POSITION(gl_Position);\n  }\n",p="\n  uniform vec3 color;\n\n  void main() {\n    gl_FragColor = vec4(color, 1.0);\n  }\n",v={name:"offsetLeft",inject:{"vs:OFFSET_POSITION":"position.x -= 0.5;"}},m={name:"offsetRight",inject:{"vs:OFFSET_POSITION":"position.x += 0.5;"}},w=function(n){function o(){return n.call(this,{debug:!0})||this}Object(t.a)(o,n),o.getInfo=function(){return"\nModifying shader behavior with shader hooks\n"};var e=o.prototype;return e.onInitialize=function(n){var o=n.gl,e=new s.a(o);e.addShaderHook("vs:OFFSET_POSITION(inout vec4 position)");var t=new c.a(o,new Float32Array([-.3,-.5,.3,-.5,0,.5]));return{model1:new u.a(o,{vs:l,fs:p,programManager:e,modules:[v],attributes:{position:t},uniforms:{color:[1,0,0]},vertexCount:3}),model2:new u.a(o,{vs:l,fs:p,programManager:e,modules:[m],attributes:{position:t},uniforms:{color:[0,0,1]},vertexCount:3}),positionBuffer:t}},e.onRender=function(n){var o=n.gl,e=n.model1,t=n.model2;Object(f.a)(o,{color:[0,0,0,1]}),e.draw(),t.draw()},e.onFinalize=function(n){var o=n.model1,e=n.model2,t=n.positionBuffer;o.delete(),e.delete(),t.delete()},o}(d.a);"undefined"==typeof window||window.website||(new w).start();var g=function(n){function o(){return n.apply(this,arguments)||this}return Object(t.a)(o,n),o.prototype.render=function(){var n=this.props.pageContext,o=n&&n.exampleConfig||{};return r.a.createElement(a.a,{AnimationLoop:w,exampleConfig:o})},o}(r.a.Component)}}]);