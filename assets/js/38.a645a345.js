(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{357:function(t,e,a){},411:function(t,e,a){"use strict";a(357)},458:function(t,e,a){"use strict";a.r(e);var s={name:"GroupTable",props:{line:{type:String,default:"1"}},data:function(){return{count:40,song:{name:"青花瓷",artist:"周杰伦",album:"我很忙",time:"03:59"}}},methods:{getListIndex:function(t){return t<9?"0"+(t+1):t+1}}},b=(a(411),a(43)),n=Object(b.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"table-page"},["1"==t.line?a("div",{staticClass:"one"},[a("b-scroll",{attrs:{height:"400px"}},[a("b-table",{attrs:{"show-border":"",stripe:"","stripe-background-color":"#f9f9f9"}},[a("b-table-head",{attrs:{slot:"head",split:"","split-color":"var(--border)"},slot:"head"},[a("b-table-tr",[a("b-table-td",{attrs:{width:"50px"}}),t._v(" "),a("b-table-td",{attrs:{width:"60px"}},[t._v("操作")]),t._v(" "),a("b-table-td",[t._v("音乐标题")]),t._v(" "),a("b-table-td",[t._v("歌手")]),t._v(" "),a("b-table-td",[t._v("专辑")]),t._v(" "),a("b-table-td",{attrs:{width:"120px"}},[t._v("时长")])],1)],1),t._v(" "),a("b-table-body",{attrs:{slot:"body"},slot:"body"},t._l(t.count,(function(e,s){return a("b-table-tr",{key:s},[a("b-table-td",{attrs:{width:"50px"}},[t._v("\n              "+t._s(t.getListIndex(s))+"\n            ")]),t._v(" "),a("b-table-td",{attrs:{width:"60px"}},[a("i",{staticClass:"iconfont icon-xihuan"})]),t._v(" "),a("b-table-td",[t._v(t._s(t.song.name))]),t._v(" "),a("b-table-td",[t._v(t._s(t.song.artist))]),t._v(" "),a("b-table-td",[t._v(t._s(t.song.album))]),t._v(" "),a("b-table-td",{attrs:{width:"120px"}},[t._v(t._s(t.song.time))])],1)})),1)],1)],1)],1):t._e()])}),[],!1,null,"827a0352",null);e.default=n.exports}}]);