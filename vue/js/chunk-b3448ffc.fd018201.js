(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b3448ffc"],{b0c0:function(e,o,t){var l=t("83ab"),r=t("9bf2").f,a=Function.prototype,n=a.toString,c=/^\s*function ([^ (]*)/,s="name";!l||s in a||r(a,s,{configurable:!0,get:function(){try{return n.call(this).match(c)[1]}catch(e){return""}}})},cc67:function(e,o,t){"use strict";t.r(o);var l=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("el-form",{ref:"people",staticClass:"demo-ruleForm",attrs:{model:e.people,rules:e.rules,"label-width":"50px"}},[t("el-form-item",{attrs:{label:"姓名",prop:"name"}},[t("el-input",{model:{value:e.people.name,callback:function(o){e.$set(e.people,"name",o)},expression:"people.name"}})],1),t("el-form-item",{attrs:{label:"账号",prop:"account"}},[t("el-input",{model:{value:e.people.account,callback:function(o){e.$set(e.people,"account",o)},expression:"people.account"}})],1),t("el-form-item",{attrs:{label:"密码",prop:"password"}},[t("el-input",{model:{value:e.people.password,callback:function(o){e.$set(e.people,"password",o)},expression:"people.password"}})],1),t("el-form-item",{attrs:{label:"类型",prop:"type"}},[t("el-select",{attrs:{placeholder:"请选择"},model:{value:e.people.role_id,callback:function(o){e.$set(e.people,"role_id",o)},expression:"people.role_id"}},e._l(e.options,(function(e){return t("el-option",{key:e.role_id,attrs:{value:e.role_id,label:e.label}})})),1)],1),t("el-form-item",{attrs:{label:"班级",prop:"grade"}},[t("el-select",{attrs:{placeholder:"请选择"},model:{value:e.people.grade,callback:function(o){e.$set(e.people,"grade",o)},expression:"people.grade"}},e._l(e.grade,(function(e){return t("el-option",{key:e.id,attrs:{value:e.id,label:e.name}})})),1)],1),t("el-form-item",{attrs:{label:"学校",prop:"school"}},[t("el-select",{attrs:{placeholder:"请选择"},model:{value:e.people.school,callback:function(o){e.$set(e.people,"school",o)},expression:"people.school"}},e._l(e.school,(function(e){return t("el-option",{key:e.id,attrs:{value:e.id,label:e.name}})})),1)],1),t("el-form-item",[t("el-button",{staticClass:"submit",attrs:{type:"primary"},on:{click:function(o){return e.onSubmit("people")}}},[e._v("立即登录")])],1)],1)},r=[],a=t("ef1b"),n={name:"Register",data:function(){return{people:{account:"",password:"",role_id:1,grade:"",school:""},options:[{role_id:1,label:"学生"},{role_id:2,label:"老师"}],grade:[],school:[],rules:{account:[{required:!0,message:"请输入账号",trigger:"blur"},{min:0,max:10,message:"长度在 0 到 10 个字符",trigger:"blur"}],name:[{required:!0,message:"请输入姓名",trigger:"change"}],password:[{required:!0,message:"请输入密码",trigger:"change"}],role_id:[{required:!0,message:"请选择类型",trigger:"change"}],grade:[{required:!0,message:"请选择班级",trigger:"change"}],school:[{required:!0,message:"请选择学校",trigger:"change"}]}}},created:function(){this.qryAllGradeAndSchool()},methods:{qryAllGradeAndSchool:function(){var e=this;Object(a["b"])().then((function(o){console.log(o.data),e.grade=o.data})),Object(a["c"])().then((function(o){console.log(o.data),e.school=o.data}))},onSubmit:function(e){var o=this;this.$refs[e].validate((function(e){if(!e)return!1;console.log(o.people),Object(a["d"])(o.people).then((function(e){e.success?(o.$notify({title:"成功",message:"可以登录",type:"success"}),o.$router.push({path:"/form/login"})):o.$notify({title:"注册失败",message:e.data,type:"warning"})}))}))}}},c=n,s=t("2877"),i=Object(s["a"])(c,l,r,!1,null,"35f051fc",null);o["default"]=i.exports},ef1b:function(e,o,t){"use strict";t.d(o,"a",(function(){return r})),t.d(o,"d",(function(){return a})),t.d(o,"b",(function(){return n})),t.d(o,"c",(function(){return c}));t("b0c0");var l=t("f350");function r(e){return Object(l["a"])({url:"/login",method:"post",data:{account:e.account,password:e.password,role_id:e.role_id}})}function a(e){return Object(l["a"])({url:"/register",method:"post",data:{name:e.name,account:e.account,password:e.password,role_id:e.role_id,grade_id:e.grade,school_id:e.school}})}function n(){return Object(l["a"])({url:"/qryAllGrade"})}function c(){return Object(l["a"])({url:"/qryAllSchool"})}}}]);
//# sourceMappingURL=chunk-b3448ffc.fd018201.js.map