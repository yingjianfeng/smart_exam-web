<template>
    <el-dialog title="收货地址" :show-close="false" :visible.sync="dialogFormVisible">
        <el-form >
            <el-form-item label="用户名" :label-width="formLabelWidth">
                <el-input v-model="user.uname" ></el-input>
            </el-form-item>
            <el-form-item label="密码" :label-width="formLabelWidth">
                <el-input v-model="user.account" ></el-input>
            </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button  type="primary" @click="login">确 定</el-button>
        </div>
    </el-dialog>
</template>

<script>
    export default {
        data() {
            return {
                user:{
                    uname: '',
                    account: ''
                },
                dialogFormVisible: true,
                formLabelWidth: '120px',
            };
        },
        methods:{
            login(){
                if(this.user.uname=='' || this.user.account=='' ){
                    this.$message.error('请输入完整');
                }
                console.log(this.user.uname);
                console.log(this.user.account);
                
                if(this.user.uname!='' && this.user.account!='' ){
                    this.$message.success('success');
                    window.sessionStorage.setItem("uname",this.user.uname);
                    this.$router.push("/index");
                }
                this.dialogFormVisible=false
            }
        }
    };
</script>
