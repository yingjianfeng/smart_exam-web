(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-50ce4bc0"],{"58d3":function(t,e,n){"use strict";var r=n("79fe"),a=n.n(r);a.a},"5c40":function(t,e,n){"use strict";n.d(e,"e",(function(){return a})),n.d(e,"b",(function(){return i})),n.d(e,"h",(function(){return o})),n.d(e,"c",(function(){return l})),n.d(e,"a",(function(){return u})),n.d(e,"g",(function(){return s})),n.d(e,"d",(function(){return c})),n.d(e,"i",(function(){return d})),n.d(e,"f",(function(){return p})),n.d(e,"k",(function(){return b})),n.d(e,"j",(function(){return h}));var r=n("f350");function a(t){return Object(r["a"])({url:"/discussion/insert",method:"post",data:{content:t.content,imgs:t.imgs}})}function i(t){return Object(r["a"])({url:"/discussion/imgDelete",method:"post",data:{filename:t}})}function o(){return Object(r["a"])({url:"/discussion/qryNotParentId",method:"post"})}function l(t){return Object(r["a"])({url:"/discussion/deleteLikeByDiscussion",method:"get",params:{discussion_id:t}})}function u(t){return Object(r["a"])({url:"/discussion/addLikeByDiscussion",method:"get",params:{discussion_id:t}})}function s(t){return Object(r["a"])({url:"/discussion/qryByParentId",method:"get",params:{parent_id:t}})}function c(){return Object(r["a"])({url:"/discussion/groupByPIdQry",method:"get"})}function d(){return Object(r["a"])({url:"/question/qryQGroupByPid",method:"post"})}function p(t){return Object(r["a"])({url:"/question/qryByGid",method:"post",data:{gid:t}})}function b(t,e){return Object(r["a"])({url:"/question/updateQGroupRemarkById",method:"post",data:{id:t,remark:e}})}function h(t){return Object(r["a"])({url:"/discussion/reply",method:"post",data:{parent_id:t.parent_id,content:t.content}})}},"79fe":function(t,e,n){},f832:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("el-table",{staticStyle:{width:"100%"},attrs:{data:t.question.slice((t.currentPage-1)*t.pagesize,t.currentPage*t.pagesize)}},[n("el-table-column",{attrs:{type:"index",width:"50"}}),n("el-table-column",{attrs:{label:"id",prop:"id",width:"250"}}),n("el-table-column",{attrs:{label:"名字",prop:"name",width:"100"}}),n("el-table-column",{attrs:{label:"开始时间",prop:"create_date",width:"100"}}),n("el-table-column",{attrs:{label:"花费时间",prop:"spentTime",width:"100"}}),n("el-table-column",{attrs:{label:"正确率",prop:"accuracy",width:"100"}}),n("el-table-column",{attrs:{label:"学校",prop:"sname",width:"100"}}),n("el-table-column",{attrs:{label:"年级",prop:"gname",width:"100"}}),n("el-table-column",{attrs:{label:"评论",prop:"remark",width:"100"}}),n("el-table-column",{attrs:{align:"center",label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{attrs:{size:"mini"},on:{click:function(n){return t.showAnswer(e.row.qid)}}},[t._v("查看答题详情 ")])]}}])})],1),n("el-pagination",{attrs:{"current-page":t.currentPage,"page-sizes":[5,10,20,40],"page-size":t.pagesize,layout:"total, sizes, prev, pager, next, jumper",total:t.question.length},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}}),n("el-dialog",{attrs:{title:"答题详情",visible:t.dialogTableVisible},on:{"update:visible":function(e){t.dialogTableVisible=e}}},[n("el-table",{attrs:{data:t.gGooupAndAnswer}},[n("el-table-column",{attrs:{property:"content",label:"题目",width:"160"}}),n("el-table-column",{attrs:{property:"option1",label:"选项1",width:"80"}}),n("el-table-column",{attrs:{property:"option2",label:"选项2",width:"80"}}),n("el-table-column",{attrs:{property:"option3",label:"选项3",width:"80"}}),n("el-table-column",{attrs:{property:"option4",label:"选项4",width:"80"}}),n("el-table-column",{attrs:{property:"answer",label:"你的答案",width:"80"}}),n("el-table-column",{attrs:{property:"result",label:"正确答案",width:"80"}}),n("el-table-column",{attrs:{label:"结果",prop:"create_date"},scopedSlots:t._u([{key:"default",fn:function(t){return[1==t.row.success?n("i",{staticClass:"el-icon-check green"}):n("i",{staticClass:"el-icon-close red"})]}}])})],1)],1)],1)},a=[],i=n("f350");function o(){return Object(i["a"])({url:"/question/qryPeopleQuestionDetail",method:"post"})}var l=n("5c40"),u={name:"QuestionDetail",data:function(){return{question:[],currentPage:1,pagesize:10,dialogTableVisible:!1,gGooupAndAnswer:[],gid:""}},methods:{qryPeopleQuestionDetail:function(){var t=this;o().then((function(e){console.log(e),t.question=e.data}))},handleSizeChange:function(t){this.pagesize=t,console.log(this.pagesize)},handleCurrentChange:function(t){this.currentPage=t,console.log(this.currentPage)},showAnswer:function(t){var e=this;this.dialogTableVisible=!0,this.gid=t,Object(l["f"])(t).then((function(t){e.gGooupAndAnswer=t.data}))}},created:function(){this.qryPeopleQuestionDetail()}},s=u,c=(n("58d3"),n("2877")),d=Object(c["a"])(s,r,a,!1,null,"f0e45f72",null);e["default"]=d.exports}}]);
//# sourceMappingURL=chunk-50ce4bc0.e917c722.js.map