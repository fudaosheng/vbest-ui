(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{303:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},304:function(t,e,i){var s=i(24),n="["+i(303)+"]",r=RegExp("^"+n+n+"*"),c=RegExp(n+n+"*$"),a=function(t){return function(e){var i=String(s(e));return 1&t&&(i=i.replace(r,"")),2&t&&(i=i.replace(c,"")),i}};t.exports={start:a(1),end:a(2),trim:a(3)}},305:function(t,e,i){var s=i(5),n=i(94);t.exports=function(t,e,i){var r,c;return n&&"function"==typeof(r=e.constructor)&&r!==i&&s(c=r.prototype)&&c!==i.prototype&&n(t,c),t}},306:function(t,e,i){"use strict";function s(t,e){for(var i=0,s=e.length;i<s;i++)if(t==e[i])return!0;return!1}function n(t){(t=t||window.event).preventDefault&&t.preventDefault(),t.returnValue=!1}i.d(e,"a",(function(){return s})),i.d(e,"b",(function(){return n}))},307:function(t,e,i){"use strict";var s=i(6),n=i(4),r=i(93),c=i(11),a=i(7),h=i(18),l=i(305),o=i(44),u=i(2),f=i(29),p=i(66).f,d=i(25).f,v=i(9).f,w=i(304).trim,g=n.Number,m=g.prototype,N="Number"==h(f(m)),x=function(t){var e,i,s,n,r,c,a,h,l=o(t,!1);if("string"==typeof l&&l.length>2)if(43===(e=(l=w(l)).charCodeAt(0))||45===e){if(88===(i=l.charCodeAt(2))||120===i)return NaN}else if(48===e){switch(l.charCodeAt(1)){case 66:case 98:s=2,n=49;break;case 79:case 111:s=8,n=55;break;default:return+l}for(c=(r=l.slice(2)).length,a=0;a<c;a++)if((h=r.charCodeAt(a))<48||h>n)return NaN;return parseInt(r,s)}return+l};if(r("Number",!g(" 0o1")||!g("0b1")||g("+0x1"))){for(var S,b=function(t){var e=arguments.length<1?0:t,i=this;return i instanceof b&&(N?u((function(){m.valueOf.call(i)})):"Number"!=h(i))?l(new g(x(e)),i,b):x(e)},C=s?p(g):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),y=0;C.length>y;y++)a(g,S=C[y])&&!a(b,S)&&v(b,S,d(g,S));b.prototype=m,m.constructor=b,c(n,"Number",b)}},427:function(t,e,i){"use strict";i.r(e);i(166),i(307);var s=i(306),n={name:"BSwitch",data:function(){return{prefixCls:"vbestui-switch",offsetX:0,circleHeight:0}},props:{value:{type:Boolean,default:!1},width:{type:Number,default:0},height:{type:Number,default:0},size:{validator:function(t){return Object(s.a)(t,["large","default","small"])},default:"default"},disabled:{type:Boolean,default:!1},trueColor:{type:String,default:""},falseColor:{type:String,default:""},name:{type:String,default:""}},computed:{switchClass:function(){return["".concat(this.prefixCls),"".concat(this.prefixCls+"-"+this.size),this.value?"vbestui-switch-active":"",this.disabled?"".concat(this.prefixCls+"-disabled"):""]},switchStyle:function(){return{backgroundColor:this.value?this.trueColor:this.falseColor,width:0!==this.width?"".concat(this.width,"px"):"",height:0!==this.height?"".concat(this.height,"px"):""}},circleClass:function(){return["".concat(this.prefixCls+"-circle"),"".concat(this.prefixCls+"-circle-"+this.size),this.isSetSwitch?this.value?"".concat(this.prefixCls,"-circle-active-").concat(this.size):"".concat(this.prefixCls,"-circle-unactive-").concat(this.size):""]},circleStyle:function(){return{height:0!==this.height?"".concat(this.circleHeight,"px"):"",width:0!==this.height?"".concat(this.circleHeight,"px"):"",transform:this.isSetSwitch?"":this.value?"translateX(".concat(this.offsetX,"px)"):"translateX(".concat(2,"px)"),transition:this.isSetSwitch?"":"transform .4s"}},isSetSwitch:function(){return 0===this.width&&0===this.height}},methods:{change:function(){this.disabled||(this.$emit("input",!this.value),this.$emit("toggle"))},initSwitch:function(){var t=this;this.$nextTick((function(){0!==t.width&&0===t.height&&(t.offsetX=t.width-t.$refs.circle.offsetWidth-2),0===t.width&&0!==t.height&&(t.circleHeight=t.height-4,t.offsetX=t.$refs.switch.offsetWidth-t.circleHeight-2),0!==t.width&&0!==t.height&&(t.circleHeight=t.height-4,t.offsetX=t.width-t.circleHeight-2)}))}},created:function(){this.initSwitch()},watch:{height:function(){this.initSwitch()},width:function(){this.initSwitch()}}},r=i(43),c=Object(r.a)(n,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("span",{ref:"switch",class:t.switchClass,style:t.switchStyle,on:{click:t.change}},[i("input",{attrs:{type:"hidden",name:t.name},domProps:{value:t.value}}),t._v(" "),i("span",{ref:"circle",class:t.circleClass,style:t.circleStyle}),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.value,expression:"value"}],class:["small"==t.size?"vbestui-open-small":"",t.prefixCls+"-open"]},[t._t("open",[i("i")])],2),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:!t.value,expression:"!value"}],class:["small"==t.size?"vbestui-close-small":"",t.prefixCls+"-close"]},[t._t("close",[i("i")])],2)])}),[],!1,null,null,null);e.default=c.exports}}]);