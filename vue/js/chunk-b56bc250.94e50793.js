(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b56bc250"],{"1dde":function(t,e,n){var i=n("d039"),r=n("b622"),s=n("2d00"),o=r("species");t.exports=function(t){return s>=51||!i((function(){var e=[],n=e.constructor={};return n[o]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},4979:function(t,e,n){},"65f0":function(t,e,n){var i=n("861d"),r=n("e8b5"),s=n("b622"),o=s("species");t.exports=function(t,e){var n;return r(t)&&(n=t.constructor,"function"!=typeof n||n!==Array&&!r(n.prototype)?i(n)&&(n=n[o],null===n&&(n=void 0)):n=void 0),new(void 0===n?Array:n)(0===e?0:e)}},a67c:function(t,e,n){"use strict";var i=n("4979"),r=n.n(i);r.a},ae40:function(t,e,n){var i=n("83ab"),r=n("d039"),s=n("5135"),o=Object.defineProperty,a={},c=function(t){throw t};t.exports=function(t,e){if(s(a,t))return a[t];e||(e={});var n=[][t],u=!!s(e,"ACCESSORS")&&e.ACCESSORS,l=s(e,0)?e[0]:c,d=s(e,1)?e[1]:void 0;return a[t]=!!n&&!r((function(){if(u&&!i)return!0;var t={length:-1};u?o(t,1,{enumerable:!0,get:c}):t[1]=1,n.call(t,l,d)}))}},b273:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v(" "+t._s(t.maxtime)+" "),n("div",{staticClass:"clock"},[-1==t.classifyId?n("span",[t._v(t._s(t.m)+"分:"+t._s(t.s)+"秒")]):n("span",[t._v(" 开始答题")])]),t._l(t.question,(function(e,i){return n("div",{staticClass:"question"},[n("div",{staticClass:"header"},[n("span",{staticClass:"spanText"},[t._v("* ")]),t._v(t._s(i+1)+". "+t._s(e.content)+" ___ "),n("i",{staticClass:"el-icon-star-on ",class:{collect:e.collect>0},on:{click:function(n){return t.collect(e)}}})]),n("div",{staticClass:"main"},[n("el-radio-group",{model:{value:e.answer,callback:function(n){t.$set(e,"answer",n)},expression:"item.answer"}},[n("el-radio",{attrs:{label:e.option1}},[t._v("A: "+t._s(e.option1))]),n("el-radio",{attrs:{label:e.option2}},[t._v("B: "+t._s(e.option2))]),2!=e.type?n("el-radio",{attrs:{label:e.option3}},[t._v("C: "+t._s(e.option3))]):t._e(),2!=e.type?n("el-radio",{attrs:{label:e.option4}},[t._v("D: "+t._s(e.option4))]):t._e()],1)],1),n("el-divider")],1)})),n("div",{staticClass:"div_btn"},[n("el-button",{attrs:{disabled:t.btn.disabled,type:"primary"},on:{click:function(e){return t.btnSubmit(!1)}}},[t._v(t._s(t.btn.text))]),n("el-button",{attrs:{disabled:!t.btn.disabled,type:"text"},on:{click:function(e){return t.selResult()}}},[t._v(t._s(t.btn_result))])],1),n("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"answer"},t._l(t.question,(function(e,i){return n("el-tooltip",{staticClass:"item",class:t.cla(e.id,e.answer),attrs:{effect:"dark",content:t.tip(e.id),placement:"top-start"}},[n("el-button",[t._v(t._s(i+1))])],1)})),1)],2)},r=[],s=(n("d81d"),n("b484")),o={name:"Test",data:function(){return{question:[],question_result:{},form:{resource:""},m:null,s:null,maxtime:300,btn:{disabled:!1,text:"提 交"},show:!1,btn_result:"查看答题卡",classifyId:this.$route.query.classifyId,gradeId:this.$route.query.gradeId,timer:null}},mounted:function(){this.countdown(),this.qryByclassifyIdAndGradeId()},methods:{countdown:function(){var t=this;function e(){t.maxtime>=0?(t.m=Math.floor(t.maxtime/60),t.s=Math.floor(t.maxtime%60),--t.maxtime):(clearInterval(t.timer),Object(s["f"])(t.question,0).then((function(e){console.log(e.data),t.question_result=e.data.map,t.$confirm("恭喜你答对了："+e.data.number+"题","提示",{confirmButtonText:"确定",showCancelButton:!1,type:"success",center:!0}).then((function(){})).catch((function(){}))})),t.btn.text="已提交",t.btn.disabled=!0)}-1==t.classifyId&&(t.timer=setInterval(e,1e3))},qryByclassifyIdAndGradeId:function(){var t=this,e=this.$route.query.classifyId,n=this.$route.query.gradeId;Object(s["d"])(e,n).then((function(e){t.question=e.data}))},btnSubmit:function(){var t=this;this.$confirm("确认答题完毕，提交?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){var e=300-t.maxtime;console.log("time: "+e),Object(s["f"])(t.question,e).then((function(e){console.log(e.data),t.question_result=e.data.map,t.$confirm("恭喜你答对了："+e.data.number+"题","提示",{confirmButtonText:"确定",showCancelButton:!1,type:"success",center:!0}).then((function(){})).catch((function(){}))})),t.btn.text="已提交",t.btn.disabled=!0})).catch((function(){t.$message({type:"info",message:"已取消提交"})})),clearInterval(this.timer)},tip:function(t){for(var e in this.question_result)if(t==e)return"正确结果为："+this.question_result[e].answer},cla:function(t,e){for(var n in this.question_result)if(t==n)return this.question_result[n].answer==e?"true":"false"},selResult:function(){this.show?(this.show=!1,this.btn_result="查看答题卡"):(this.show=!0,this.btn_result="取消查看")},collect:function(t){var e=this;t.collect<1?(t.collect=1,Object(s["a"])(t.id).then((function(t){e.$message.success("收藏成功"),console.log(t)}))):(t.collect=0,Object(s["b"])(t.id).then((function(t){e.$message.warning("取消收藏成功"),console.log(t)})))}},beforeDestroy:function(){clearInterval(this.timer)}},a=o,c=(n("a67c"),n("2877")),u=Object(c["a"])(a,i,r,!1,null,"649ba8a2",null);e["default"]=u.exports},b484:function(t,e,n){"use strict";n.d(e,"e",(function(){return r})),n.d(e,"d",(function(){return s})),n.d(e,"f",(function(){return o})),n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return c})),n.d(e,"c",(function(){return u}));var i=n("f350");function r(){return Object(i["a"])({url:"/question/qryGradeAndClassify",method:"get"})}function s(t,e){return Object(i["a"])({url:"/question/qryByclassifyIdAndGraderId",method:"post",data:{classify_id:t,grade_id:e}})}function o(t,e){return Object(i["a"])({url:"/question/submitAnswer",method:"post",data:{questions:t,time:e}})}function a(t){return Object(i["a"])({url:"/question/insertByQidAndPid",method:"post",data:{q_id:t}})}function c(t){return Object(i["a"])({url:"/question/deleteByQidAndPid",method:"post",data:{q_id:t}})}function u(){return Object(i["a"])({url:"/qryAllGrade",method:"get"})}},b727:function(t,e,n){var i=n("0366"),r=n("44ad"),s=n("7b0b"),o=n("50c4"),a=n("65f0"),c=[].push,u=function(t){var e=1==t,n=2==t,u=3==t,l=4==t,d=6==t,f=5==t||d;return function(b,m,h,p){for(var v,_,y=s(b),w=r(y),q=i(m,h,3),x=o(w.length),g=0,I=p||a,A=e?I(b,x):n?I(b,0):void 0;x>g;g++)if((f||g in w)&&(v=w[g],_=q(v,g,y),t))if(e)A[g]=_;else if(_)switch(t){case 3:return!0;case 5:return v;case 6:return g;case 2:c.call(A,v)}else if(l)return!1;return d?-1:u||l?l:A}};t.exports={forEach:u(0),map:u(1),filter:u(2),some:u(3),every:u(4),find:u(5),findIndex:u(6)}},d81d:function(t,e,n){"use strict";var i=n("23e7"),r=n("b727").map,s=n("1dde"),o=n("ae40"),a=s("map"),c=o("map");i({target:"Array",proto:!0,forced:!a||!c},{map:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}})},e8b5:function(t,e,n){var i=n("c6b6");t.exports=Array.isArray||function(t){return"Array"==i(t)}}}]);
//# sourceMappingURL=chunk-b56bc250.94e50793.js.map