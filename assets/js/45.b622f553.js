(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{304:function(t,e,s){"use strict";function i(t,e){for(var s=0,i=e.length;s<i;s++)if(t==e[s])return!0;return!1}function n(t){(t=t||window.event).preventDefault&&t.preventDefault(),t.returnValue=!1}s.d(e,"a",(function(){return i})),s.d(e,"b",(function(){return n}))},456:function(t,e,s){"use strict";s.r(e);var i=s(304),n={name:"BAlert",props:{icon:{type:Boolean,default:!1},type:{validator:function(t){return Object(i.a)(t,["default","info","success","warning","error"])},default:"default"},closable:{type:Boolean,default:!1}},computed:{isOnlyOne:function(){return this.$slots.title&&!this.$slots.default||this.$slots.default&&!this.$slots.title},isIcon:function(){return this.icon&&"default"!=this.type||this.$slots.icon}},data:function(){return{isShow:!0}},methods:{alertClose:function(){this.isShow=!1,this.$emit("close")}}},a=s(43),l=Object(a.a)(n,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("transition",{attrs:{name:"vbest-alter-fade"}},[t.isShow?s("div",{staticClass:"vbestui-alert",class:["vbestui-alert-border-"+t.type,{"vbestui-alert-hasicon-padding":!t.isIcon}]},[t.isIcon?s("div",{staticClass:"vbestui-alert-icon"},[t._t("icon",[s("i",{staticClass:"vbestui-alert-icon-size",class:["vbestui-iconfont icon-"+t.type+"-m ","vbestui-icon-"+t.type,{"vbestui-alert-icon-only-title":t.isOnlyOne}]})])],2):t._e(),t._v(" "),t.closable?s("div",{staticClass:"vbestui-alert-close",on:{click:t.alertClose}},[s("b-button",{staticClass:"vbestui-iconfont icon-x vbestui-alert-icon-color",attrs:{transparent:"",width:"20px",height:"20px"}})],1):t._e(),t._v(" "),s("div",{staticClass:"vbestui-alert-container"},[s("div",{staticClass:"vbestui-alert-artical-title"},[t._t("title")],2),t._v(" "),t.$slots.default?s("div",{staticClass:"vbestui-alert-artical-desc"},[t._t("default")],2):t._e()])]):t._e()])}),[],!1,null,null,null);e.default=l.exports}}]);