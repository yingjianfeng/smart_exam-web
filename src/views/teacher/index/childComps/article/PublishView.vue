<template>
  <div>
    <mavon-editor v-model="article.content"
                  @save="save"
                  @imgAdd="imgAdd" @imgDel="imgDel">
    </mavon-editor>
    
    <!--{{article.content}}-->
    <!---->
    <!--<mavon-editor-->
    <!--class="md"-->
    <!--:value="article.content"-->
    <!--:subfield = "false"-->
    <!--:defaultOpen = "'preview'"-->
    <!--:toolbarsFlag = "false"-->
    <!--:editable="false"-->
    <!--:scrollStyle="true"-->
    <!--:ishljs = "true"-->
    <!--/>-->
    
    <el-dialog class="dialog" title="保存文章" :visible.sync="dialogTableVisible">
      <el-form ref="form" label-width="80px">
        <el-form-item label="文章标题">
          <el-input v-model="article.name"></el-input>
        </el-form-item>
        <el-form-item label="文章简介">
          <el-input v-model="article.introduce"></el-input>
        </el-form-item>
        <div class="submitclass">
          <el-button type="primary" @click="submit">点击发表</el-button>
        </div>
      
      </el-form>
      <!--{{dialogData}}-->
    </el-dialog>
  
  </div>
</template>

<script>
  import {addArticle} from "@/network/teacher/article";
  
  export default {
    name: "PublishView",
    data() {
      return {
        dialogTableVisible: false,
        article: {
          content: " # 一级标题\n" +
            "    ## 二级标题",
          name: "",
          introduce:""
        }
      }
    },
    methods: {
      save() {
        console.log("save..");
        this.dialogTableVisible = true;
        // addArticle(this.article).then(res => {
        //   console.log(res)
        // });
      },
      submit(){
        addArticle(this.article).then(res => {
          console.log(res);
          this.dialogTableVisible = false;
          this.article = ""
        });
      },
      imgAdd() {
        console.log("图片add事件");
      },
      imgDel(pos) {
        console.log("图片删除事件");
        delete this.img_file[pos];
      }
    }
  }
</script>

<style scoped>
  .submitclass {
    display: flex;
    justify-content: center;
    /*align-items: center;*/
  }
</style>