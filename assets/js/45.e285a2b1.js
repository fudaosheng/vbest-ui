(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{304:function(t,e,n){"use strict";function i(t,e){for(var n=0,i=e.length;n<i;n++)if(t==e[n])return!0;return!1}function s(t){(t=t||window.event).preventDefault&&t.preventDefault(),t.returnValue=!1}n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return s}))},466:function(t,e,n){"use strict";n.r(e);var i=n(304),s={name:"BAvatar",props:{shape:{validator:function(t){return Object(i.a)(t,["circle","square"])},default:"circle"},size:{type:String,default:""},icon:{type:String,default:"vbestui-iconfont icon-avatar"},src:{type:String,default:""},mask:{type:Boolean,default:!1},maskContent:{type:String,default:""},fontSize:{type:String,default:""}},data:function(){return{prefixCls:"vbestui-avatar",offsetHeight:0,isShowMask:!1,imgType:!0}},computed:{avatarStyle:function(){return{borderRadius:"square"==this.shape?"4px":"",width:"".concat(this.size),height:"".concat(this.size)}},iconStyle:function(){return{fontSize:this.imgType?"".concat(.8*this.offsetHeight,"px"):"".concat(.6*this.offsetHeight,"px")}},maskStyle:function(){return{fontSize:this.fontSize}},getHeight:function(){var t=this;this.$nextTick().then((function(){t.offsetHeight=t.$refs.avatar.offsetHeight}))},isShowMaskCom:function(){return!!this.mask&&this.isShowMask},getIcon:function(){var t="";return t=this.icon,this.imgType||(t="vbestui-iconfont icon-img-error"),t}},methods:{handleMouseEnter:function(){this.isShowMask=!0},handleMouseLeave:function(){this.isShowMask=!1},handleClick:function(){this.$emit("click")},handleMaskClick:function(){this.$emit("clickMask")},handleImgError:function(){this.imgType=!1,this.$emit("error")},handleImgLoad:function(){this.imgType=!0}},mounted:function(){this.getHeight}},a=n(43),o=Object(a.a)(s,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"avatar",class:t.prefixCls,style:t.avatarStyle,on:{mouseenter:t.handleMouseEnter,mouseleave:t.handleMouseLeave,click:t.handleClick}},[n("div",{class:[t.prefixCls+"-container"]},[t._t("default",[""!=t.src&&t.imgType?n("img",{attrs:{src:t.src},on:{error:t.handleImgError,load:t.handleImgLoad}}):n("i",{class:t.getIcon,style:t.iconStyle})])],2),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.isShowMaskCom,expression:"isShowMaskCom"}],class:t.prefixCls+"-mask",style:t.maskStyle,on:{click:t.handleMaskClick}},[t._t("mask",[n("span",[t._v(t._s(t.maskContent))])])],2)])}),[],!1,null,null,null);e.default=o.exports}}]);