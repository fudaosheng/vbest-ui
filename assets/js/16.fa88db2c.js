(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{303:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},305:function(t,e,r){var s=r(24),i="["+r(303)+"]",o=RegExp("^"+i+i+"*"),n=RegExp(i+i+"*$"),a=function(t){return function(e){var r=String(s(e));return 1&t&&(r=r.replace(o,"")),2&t&&(r=r.replace(n,"")),r}};t.exports={start:a(1),end:a(2),trim:a(3)}},306:function(t,e,r){var s=r(5),i=r(94);t.exports=function(t,e,r){var o,n;return i&&"function"==typeof(o=e.constructor)&&o!==r&&s(n=o.prototype)&&n!==r.prototype&&i(t,n),t}},307:function(t,e,r){"use strict";var s=r(6),i=r(4),o=r(93),n=r(11),a=r(7),c=r(18),l=r(306),h=r(44),u=r(2),d=r(29),p=r(66).f,f=r(25).f,g=r(9).f,v=r(305).trim,m=i.Number,b=m.prototype,y="Number"==c(d(b)),C=function(t){var e,r,s,i,o,n,a,c,l=h(t,!1);if("string"==typeof l&&l.length>2)if(43===(e=(l=v(l)).charCodeAt(0))||45===e){if(88===(r=l.charCodeAt(2))||120===r)return NaN}else if(48===e){switch(l.charCodeAt(1)){case 66:case 98:s=2,i=49;break;case 79:case 111:s=8,i=55;break;default:return+l}for(n=(o=l.slice(2)).length,a=0;a<n;a++)if((c=o.charCodeAt(a))<48||c>i)return NaN;return parseInt(o,s)}return+l};if(o("Number",!m(" 0o1")||!m("0b1")||m("+0x1"))){for(var k,S=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof S&&(y?u((function(){b.valueOf.call(r)})):"Number"!=c(r))?l(new m(C(e)),r,S):C(e)},w=s?p(m):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),$=0;w.length>$;$++)a(m,k=w[$])&&!a(S,k)&&g(S,k,f(m,k));S.prototype=b,b.constructor=S,n(i,"Number",S)}},446:function(t,e,r){"use strict";r.r(e);r(170),r(307);var s={name:"BProgress",props:{percent:{type:Number,default:0},allowClick:{type:Boolean,default:!1},allowDrag:{type:Boolean,default:!1},vertical:{type:Boolean,default:!1},disableTransition:{type:Boolean,default:!1},isActive:{type:Boolean,default:!1},strokeWidth:{type:Number,default:NaN},trackBaseColor:{type:String,default:""},trackColor:{type:[String,Array],default:""},thumbColor:{type:String,default:""},thumbItemColor:{type:String,default:""},showThumb:{type:Boolean,default:!1},showThumbItem:{type:Boolean,default:!0}},computed:{isShow:function(){return 1*this.percent!=0},isShowPercent:function(){},progressClass:function(){return[this.vertical?"vbestui-progress-vertical":"vbestui-progress"]},outClass:function(){return[this.vertical?"vbestui-progress-outstyle-vertical":"vbestui-progress-outstyle"]},innerClass:function(){return[this.vertical?"vbestui-progress-innerstyle-vertical":"vbestui-progress-innerstyle",this.isActive?this.vertical?"vbestui-progress-vertical-active":"vbestui-progress-active":""]},loadbarClass:function(){return[this.vertical?"vbestui-progress-loadbar-vertical":"vbestui-progress-loadbar"]},loadbarItemClass:function(){return["vbestui-progress-loadbar-circle"]},outBgStyle:function(){return{backgroundColor:"".concat(this.trackBaseColor),height:this.vertical?"":"".concat(this.strokeWidth,"px"),width:this.vertical?"".concat(this.strokeWidth,"px"):"",borderRadius:this.strokeWidth?"".concat(this.strokeWidth,"px"):""}},innerBgStyle:function(){return{width:this.vertical?"":"".concat(this.percent,"%"),height:this.vertical?"".concat(this.percent,"%"):"",background:this.vertical?"string"==typeof this.trackColor?"".concat(this.trackColor):"linear-gradient(to top,".concat(this.trackColor[0]," 0%,").concat(this.trackColor[1]," 100%)"):"string"==typeof this.trackColor?"".concat(this.trackColor):"linear-gradient(to right,".concat(this.trackColor[0]," 0%,").concat(this.trackColor[1]," 100%)"),borderRadius:this.strokeWidth?"".concat(this.strokeWidth,"px"):"",transition:this.disableTransition?"none":"all .4s"}},loadbarStyle:function(){return{width:this.strokeWidth?"".concat(this.thumbSize,"px"):"",height:this.strokeWidth?"".concat(this.thumbSize,"px"):"",backgroundColor:"".concat(this.thumbColor)}},thumbSize:function(){var t=this.strokeWidth<8?4*this.strokeWidth:3*this.strokeWidth;return t=t<12?12:t,t},loadbarItemStyle:function(){return{background:this.thumbItemColor?"".concat(this.thumbItemColor):"string"==typeof this.trackColor?"".concat(this.trackColor):"".concat(this.trackColor[0])}}},data:function(){return{isDrag:!1}},methods:{handleClick:function(t){if(!this.allowClick)return!1;if(!this.isDrag){var e,r=t.clientX,s=t.clientY,i=this.$refs.progress.getBoundingClientRect(),o=i.x,n=i.bottom;if(this.vertical)e=(n-s)/this.$refs.progress.offsetHeight*100;else e=(r-o)/this.$refs.progress.offsetWidth*100;this.$emit("update:percent",e),this.$emit("click",e)}},handleMouseDown:function(t){if(!this.allowDrag)return!1;this.isDrag=!0,document.body.style.userSelect="none",this.$refs.inner.style.transition="none",this.$emit("update:percent",this.percent),this.$emit("dragbegin",this.percent),document.addEventListener("mousemove",this.handleMouseMove),document.addEventListener("mouseup",this.handleMouseUp)},handleMouseMove:function(t){var e,r=this.$refs.progress.getBoundingClientRect(),s=r.x,i=r.bottom;this.vertical?e=(i-t.clientY)/this.$refs.progress.offsetHeight*100:e=(t.clientX-s)/this.$refs.progress.offsetWidth*100;e=(e=e<0?0:e)>100?100:e,this.$emit("update:percent",e),this.$emit("dragging",e)},handleMouseUp:function(t){this.isDrag=!1,document.body.style.userSelect="initial",this.$refs.inner.style.transition="all .4s",this.$emit("update:percent",this.percent),this.$emit("dragend",this.percent),document.removeEventListener("mousemove",this.handleMouseMove),document.removeEventListener("mouseup",this.handleMouseUp)},handleTouStart:function(t){if(!this.allowDrag)return!1;this.isDrag=!0,document.body.style.userSelect="none",this.$refs.inner.style.transition="none",this.$emit("update:percent",this.percent),this.$emit("dragbegin",this.percent),document.addEventListener("touchmove",this.handleTouchMove),document.addEventListener("touchend",this.handleTouchEnd)},handleTouchMove:function(t){var e,r=this.$refs.progress.getBoundingClientRect(),s=r.x,i=r.bottom;this.vertical?e=(i-t.clientY)/this.$refs.progress.offsetHeight*100:e=(t.clientX-s)/this.$refs.progress.offsetWidth*100;e=(e=e<0?0:e)>100?100:e,this.$emit("update:percent",e),this.$emit("dragging",e)},handleTouchEnd:function(t){document.removeEventListener("touchmove",this.handleTouchMove),document.removeEventListener("touchend",this.handleTouchEnd),this.isDrag=!1,document.body.style.userSelect="initial",this.$refs.inner.style.transition="all .5s",this.$emit("update:percent",this.percent),this.$emit("dragend",this.percent)}}},i=r(43),o=Object(i.a)(s,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{class:t.progressClass},[r("div",{ref:"progress",class:t.outClass,style:t.outBgStyle,on:{click:t.handleClick}},[r("div",{ref:"inner",class:t.innerClass,style:t.innerBgStyle},[t.showThumb?r("div",{directives:[{name:"show",rawName:"v-show",value:t.isShow,expression:"isShow"}],ref:"loadbar",class:t.loadbarClass,style:t.loadbarStyle,on:{mousedown:t.handleMouseDown,touchstart:t.handleTouStart}},[t.showThumbItem?r("div",{class:t.loadbarItemClass,style:t.loadbarItemStyle}):t._e()]):t._e()])])])}),[],!1,null,null,null);e.default=o.exports}}]);