(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{308:function(t,e,i){"use strict";function n(t,e){for(var i=0,n=e.length;i<n;i++)if(t==e[i])return!0;return!1}function r(t){(t=t||window.event).preventDefault&&t.preventDefault(),t.returnValue=!1}i.d(e,"a",(function(){return n})),i.d(e,"b",(function(){return r}))},474:function(t,e,i){"use strict";i.r(e);var n=i(308),r={name:"BButton",data:function(){return{prefixCls:"vbestui-button"}},props:{type:{validator:function(t){return Object(n.a)(t,["default","primary","joker","dashed","text","info","success","warning","error"])},default:"default"},size:{validator:function(t){return Object(n.a)(t,["long","large","default","small"])},default:"default"},width:{type:String,default:""},height:{type:String,default:""},color:{type:String,default:""},background:{type:String,default:""},borderColor:{type:String,default:""},fontSize:{type:String,default:""},round:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},transparent:{type:Boolean,default:!1},circle:{type:Boolean,default:!1},slidable:{type:Boolean,default:!1}},computed:{btnClass:function(){return["".concat(this.prefixCls),this.slidable?"".concat(this.prefixCls+"-click-slidable"):"".concat(this.prefixCls+"-click"),"".concat(this.prefixCls+"-type-"+this.type),"".concat(this.prefixCls+"-size-"+this.size),this.round?"".concat(this.prefixCls+"-is-round"):"",this.transparent?"".concat(this.prefixCls+"-is-transparent"):"",this.circle?"".concat(this.prefixCls+"-is-circle"):""]},btnStyle:function(){return{color:""!==this.color?this.color:this.transparent?"var(--".concat(this.type,")"):this.isTextColor?"var(--text-color)":"#fff",width:this.width,height:this.height,backgroundColor:this.background,borderColor:this.borderColor||this.background,fontSize:this.fontSize}},isTextColor:function(){return"default"===this.type||"text"===this.type||"dashed"===this.type}},methods:{handleClick:function(){this.$emit("click")}}},l=i(43),o=Object(l.a)(r,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("button",{class:t.btnClass,style:t.btnStyle,attrs:{type:t.type,size:t.size,disabled:t.disabled},on:{click:t.handleClick}},[i("i"),t._v(" "),i("span",[t._t("default")],2)])}),[],!1,null,null,null);e.default=o.exports}}]);