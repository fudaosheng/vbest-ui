(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{344:function(t,n,e){},399:function(t,n,e){"use strict";var i=e(344);e.n(i).a},461:function(t,n,e){"use strict";e.r(n);var i={name:"GroupNotice",props:{line:{type:String,default:"1"}},methods:{open1:function(){this.$refs.notice.open({title:"我是默认信息标题",desc:"我是默认内容，我是默认内容，我是默认内容，我是默认内容，我是默认内容，我是默认内容，"})},openTitle:function(){this.$refs.notice2.open({title:"我是通知标题"})},openDesc:function(){this.$refs.notice2.open({desc:"我是内容，我是内容，我是内容，我是内容，我是内容，我是内容，"})},infoClick:function(){this.$refs.notice.info({title:"info标题",desc:"info啦啦啦啦啦啦啦,info啦啦啦啦啦啦啦,info啦啦啦啦啦啦啦,info啦啦啦啦啦啦啦,info啦啦啦啦啦啦啦,info啦啦啦啦啦啦啦"})},successClick:function(){this.$refs.notice.success({title:"success标题",desc:"success成功成功哇哇哇哇哇哇哇,success成功成功哇哇哇哇哇哇哇,success成功成功哇哇哇哇哇哇哇,success成功成功哇哇哇哇哇哇哇,success成功成功哇哇哇哇哇哇哇"})},warningClick:function(){this.$refs.notice.warning({title:"warning标题",desc:"warning警告警告靖哥哥,warning警告警告靖哥哥,warning警告警告靖哥哥,warning警告警告靖哥哥,warning警告警告靖哥哥,warning警告警告靖哥哥"})},errorClick:function(){this.$refs.notice.error({title:"error标题",desc:"error失败啦失败啦,error失败啦失败啦,error失败啦失败啦,error失败啦失败啦,error失败啦失败啦,error失败啦失败啦,error失败啦失败啦"})},openTime:function(){this.$refs.notice.open({duration:10,title:"这是一个10s通知",desc:"这是一个10s通知,这是一个10s通知,这是一个10s通知,这是一个10s通知,这是一个10s通知,这是一个10s通知,这是一个10s通知"})}}},s=(e(399),e(43)),o=Object(s.a)(i,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"box"},[e("notice",{ref:"notice"}),t._v(" "),"1"==t.line?e("div",{staticClass:"one item"},[e("b-button",{attrs:{type:"primary"},on:{click:t.open1}},[t._v("默认通知")])],1):t._e(),t._v(" "),"2"==t.line?e("div",{staticClass:"two item"},[e("notice",{ref:"notice2"}),t._v(" "),e("b-button",{attrs:{type:"primary",round:""},on:{click:t.openTitle}},[t._v("仅标题")]),t._v(" "),e("b-button",{attrs:{type:"primary",round:""},on:{click:t.openDesc}},[t._v("仅内容")])],1):t._e(),t._v(" "),"3"==t.line?e("div",{staticClass:"tow item"},[e("b-button",{attrs:{type:"info"},on:{click:t.infoClick}},[t._v("信息通知")]),t._v(" "),e("b-button",{attrs:{type:"success"},on:{click:t.successClick}},[t._v("成功通知")]),t._v(" "),e("b-button",{attrs:{type:"warning"},on:{click:t.warningClick}},[t._v("警告通知")]),t._v(" "),e("b-button",{attrs:{type:"error"},on:{click:t.errorClick}},[t._v("失败通知")])],1):t._e(),t._v(" "),"4"==t.line?e("div",{staticClass:"four item"},[e("b-button",{attrs:{type:"info"},on:{click:t.openTime}},[t._v("打开一个10sNotice")])],1):t._e()],1)}),[],!1,null,"b1d57dba",null);n.default=o.exports}}]);