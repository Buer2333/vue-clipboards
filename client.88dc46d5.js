webpackJsonp([1],{41:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=t(97),r=t(83),u=(t.n(r),t(94)),a=t.n(u),i=t(43);o.a.use(i.a),n.default=new o.a({el:"#app",render:function(e){return e(a.a)}})},42:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=t(92),r=t.n(o);n.default={name:"App",data:function(){return{value:"Hello world!"}},methods:{handleSuccess:function(e){r()(e.text,"good job, you got it!","success")},handleError:function(e){r()("Oops...","Something went wrong!","error")}}}},43:function(e,n,t){"use strict";var o=t(44),r=t.n(o),u=t(47),a=t.n(u),i=t(49);if(!i)throw new Error("[vue-clipboards] cannot locate Clipboard.");n.a=function(e){var n=void 0;e.directive("clipboard",{bind:function(e,t,o){var u=t.value,c={};u&&"string"==typeof u&&(c.text=function(){return u}),n=new i(e,c);var s=o.componentOptions,l=o.data,d=s?s.listeners:null,p=l?l.on:null,v=d&&d||p&&p;v&&"object"===(void 0===v?"undefined":a()(v))&&r()(v).length&&r()(v).map(function(e){return n.on(e,v[e].fn||v[e].fns)})},unbind:function(){n&&n.destroy&&n.destroy()},update:function(e,n,t){n.def.unbind(),n.def.bind(e,n,t)}})}},84:function(e,n){},94:function(e,n,t){t(84);var o=t(95)(t(42),t(96),null,null);e.exports=o.exports},96:function(e,n){e.exports={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.value,expression:"value"}],attrs:{type:"text"},domProps:{value:e.value},on:{input:function(n){n.target.composing||(e.value=n.target.value)}}}),e._v(" "),t("button",{directives:[{name:"clipboard",rawName:"v-clipboard",value:e.value,expression:"value"}],on:{success:e.handleSuccess,error:e.handleError}},[e._v("Copy")])])},staticRenderFns:[]}},99:function(e,n,t){e.exports=t(41)}},[99]);
//# sourceMappingURL=client.88dc46d5.js.map