(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3075810c"],{"4be2":function(t,e,n){"use strict";var r=n("9754"),a=n.n(r);a.a},"5c40":function(t,e,n){"use strict";n.d(e,"e",(function(){return a})),n.d(e,"b",(function(){return i})),n.d(e,"h",(function(){return o})),n.d(e,"c",(function(){return s})),n.d(e,"a",(function(){return u})),n.d(e,"g",(function(){return l})),n.d(e,"d",(function(){return c})),n.d(e,"i",(function(){return d})),n.d(e,"f",(function(){return p})),n.d(e,"k",(function(){return b})),n.d(e,"j",(function(){return f}));var r=n("f350");function a(t){return Object(r["a"])({url:"/discussion/insert",method:"post",data:{content:t.content,imgs:t.imgs}})}function i(t){return Object(r["a"])({url:"/discussion/imgDelete",method:"post",data:{filename:t}})}function o(){return Object(r["a"])({url:"/discussion/qryNotParentId",method:"post"})}function s(t){return Object(r["a"])({url:"/discussion/deleteLikeByDiscussion",method:"get",params:{discussion_id:t}})}function u(t){return Object(r["a"])({url:"/discussion/addLikeByDiscussion",method:"get",params:{discussion_id:t}})}function l(t){return Object(r["a"])({url:"/discussion/qryByParentId",method:"get",params:{parent_id:t}})}function c(){return Object(r["a"])({url:"/discussion/groupByPIdQry",method:"get"})}function d(){return Object(r["a"])({url:"/question/qryQGroupByPid",method:"post"})}function p(t){return Object(r["a"])({url:"/question/qryByGid",method:"post",data:{gid:t}})}function b(t,e){return Object(r["a"])({url:"/question/updateQGroupRemarkById",method:"post",data:{id:t,remark:e}})}function f(t){return Object(r["a"])({url:"/discussion/reply",method:"post",data:{parent_id:t.parent_id,content:t.content}})}},9754:function(t,e,n){},dce8:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"history"},[n("el-table",{staticStyle:{width:"100%"},attrs:{data:t.qGroup}},[n("el-table-column",{attrs:{label:"时间",prop:"create_date"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("i",{staticClass:"el-icon-timer"}),n("span",{staticStyle:{"margin-left":"10px"}},[t._v(t._s(e.row.create_date))])]}}])}),n("el-table-column",{attrs:{label:"时长",prop:"spentTime"}}),n("el-table-column",{attrs:{label:"正确率"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",{class:{red:e.row.accuracy<.6},staticStyle:{"margin-left":"10px"}},[t._v(t._s(100*e.row.accuracy)+"%")])]}}])}),n("el-table-column",{attrs:{align:"center",label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{attrs:{size:"mini"},on:{click:function(n){return t.showAnswer(e.row.id)}}},[t._v("查看答题详情 ")])]}}])})],1),n("el-dialog",{attrs:{title:"答题详情",visible:t.dialogTableVisible},on:{"update:visible":function(e){t.dialogTableVisible=e}}},[n("el-table",{attrs:{data:t.gGooupAndAnswer}},[t._v(" "+t._s(t.option2)+" "),n("el-table-column",{attrs:{property:"content",label:"题目",width:"160"}}),n("el-table-column",{attrs:{property:"option1",label:"选项1",width:"80"}}),n("el-table-column",{attrs:{property:"option2",label:"选项2",width:"80"}}),n("el-table-column",{attrs:{property:"option3",label:"选项3",width:"80"}}),n("el-table-column",{attrs:{property:"option4",label:"选项4",width:"80"}}),n("el-table-column",{attrs:{property:"answer",label:"你的答案",width:"80"}}),n("el-table-column",{attrs:{property:"result",label:"正确答案",width:"80"}}),n("el-table-column",{attrs:{label:"结果",prop:"create_date"},scopedSlots:t._u([{key:"default",fn:function(t){return[1==t.row.success?n("i",{staticClass:"el-icon-check green"}):n("i",{staticClass:"el-icon-close red"})]}}])})],1),n("div",{staticStyle:{margin:"20px 0"}},[n("span",{staticClass:"text"},[t._v("分享心情")]),n("el-input",{attrs:{type:"textarea",placeholder:"请输入内容",maxlength:"30","show-word-limit":""},model:{value:t.textarea,callback:function(e){t.textarea=e},expression:"textarea"}}),n("el-button",{staticClass:"btn",attrs:{type:"primary"},on:{click:t.submitRemark}},[t._v("提交")])],1)],1)],1)},a=[],i=n("5c40"),o={name:"History",data:function(){return{qGroup:[],gGooupAndAnswer:[],gid:"",dialogTableVisible:!1,textarea:""}},methods:{qryQGroupByPid:function(){var t=this;Object(i["i"])().then((function(e){t.qGroup=e.data}))},showAnswer:function(t){var e=this;this.dialogTableVisible=!0,this.gid=t,Object(i["f"])(t).then((function(t){e.gGooupAndAnswer=t.data}))},submitRemark:function(){var t=this;Object(i["k"])(this.gid,this.textarea).then((function(e){t.$message.success("分享成功啦~~")}))}},created:function(){this.qryQGroupByPid()}},s=o,u=(n("4be2"),n("2877")),l=Object(u["a"])(s,r,a,!1,null,"a05f1efa",null);e["default"]=l.exports}}]);
//# sourceMappingURL=chunk-3075810c.1f3ad4b5.js.map