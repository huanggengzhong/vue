<!--
* description: 发送邮件
* author: dxuem
* createdDate: 2019-09-16
-->
<template>
  <div class="app-container app-container-table filter-params-crm filter-params-crm-scroll">
    <div class="filter-container filter-params-crm">
      <el-form label-position="right" v-model="form" :disabled="isdisabled">
        <el-row>
          <el-col :span="17">&nbsp;</el-col>
          <el-col :span="7" class="btn-col">
            <el-form-item>
              <el-button type="primary" @click="save(form)">发送</el-button>
              <el-button @click="close()">关闭</el-button>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24" class="crm-label-required">
            <el-form-item label="邮件地址" class="long-col">
              <el-input v-model="form.sendmail" placeholder="请输入" suffix-icon="el-icon-search"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item label="抄送" class="long-col">
              <el-input v-model="form.mailcc" placeholder="请输入" suffix-icon="el-icon-search"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24" class="crm-label-required">
            <el-form-item label="邮件主题" class="long-col">
              <el-input v-model="form.emailTitle" placeholder="请输入" suffix-icon="el-icon-search"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="17" class="mid-col">
            <el-form-item label="附件" v-model="form.files">
              <el-input></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="7" class="btn-col">
            <el-form-item>
              <UpLoad :text="text1"></UpLoad>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24" class="long-col crm-label-required">
            <el-form-item label="邮件内容">
              <div style="border:3px;width:85%;float:right;">
                <!-- <VueUeditorWrap :config="myConfig" style="text-align:right"></VueUeditorWrap> -->
              </div>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </div>
  </div>
</template>
<script>
// import VueUeditorWrap from "vue-ueditor-wrap";
import UpLoad from "@/components/crm/EjectWindows/UpLoad";
import { crmApis } from "@/api/graphQLApiList/crm";
import { requestGraphQL } from "@/api/commonRequest";
export default {
  name: "crmMailDetail",
  components: {
    // VueUeditorWrap,
    UpLoad
  },
  data() {
    return {
      text1:"浏览",
      isdisabled: false,
      form: {
        sendmail: "",
        mailcc: "",
        emailTitle: "",
        emailContent: "",
        files: ""
      },
      savedata:{
        queryObj: {
          apiConfig: crmApis.csBuEmailRuntimeMutationSaveById, //邮件发送保存
          apiQueryRow: [],
          params: {
            sendmail: "",
            mailcc: "",
            emailContent: "",
            updateControlId:"",
            sendid:"",
          },
        },
      },
      // msg:
      //   '<h2><img src="http://img.baidu.com/hi/jx2/j_0003.gif"/>Vue + UEditor + v-model双向绑定</h2>',
      // myConfig: {
      //   // 编辑器不自动被内容撑高
      //   autoHeightEnabled: false,
      //   // 初始容器高度
      //   initialFrameHeight: 240,
      //   // 初始容器宽度
      //   initialFrameWidth: "100%",
      //   UEDITOR_HOME_URL: "/UEditor/"
      // }
    };
  },
  mounted: function() {
    this.$nextTick(() => {
      this.resetForm("form");
    });
    this.initdata();
  },
  methods: {
    initdata() {
      if (this.$route.params.status == "resend") {
        this.form.sendmail = this.$route.params.donntEmail;
        this.form.mailcc = this.$route.params.carLicenseNo;
        this.form.emailTitle = this.$route.params.engineNo;
      } else if (this.$route.params.status == "detail") {
        this.form.sendmail = this.$route.params.donntEmail;
        this.form.mailcc = this.$route.params.carLicenseNo;
        this.form.emailTitle = this.$route.params.engineNo;
        this.isdisabled = true;
      }
    },
    save(formName){
      let that=this;
      debugger
      that.savedata.queryObj.params.sendmail = this.form.sendmail;
      that.savedata.queryObj.params.mailcc = this.form.mailcc;
      that.savedata.queryObj.params.emailTitle = this.form.emailTitle;
      that.savedata.queryObj.params.emailContent = document.getElementsByName("editorValue")[0].value;
      that.savedata.queryObj.params.updateControlId = this.$route.params.updateControlId;
      that.savedata.queryObj.params.sendid = this.$route.params.sendid;
        let flag = false;
        var config = this.config;
        config = {
          sendmail: [
            true,
            this.$crmcf.crmRegExp("empty"),
            "value",
            this.savedata.queryObj.params.sendmail,
            "邮件地址",
            "不能为空"
          ],
          emailTitle: [
            true,
            this.$crmcf.crmRegExp("empty"),
            "value",
            this.savedata.queryObj.params.emailTitle,
            "邮件主题",
            "不能为空",
            ""
          ],
          emailContent: [
            true,
            this.$crmcf.crmRegExp("empty"),
            "value",
            this.savedata.queryObj.params.emailContent,
            "邮件内容",
            "不能为空"
          ],
        };
        this.$crmcf.validForm(that, formName, config, function(flag) {
          if (flag) {
            let queryObj = {
              // api配置
              type: "mutation",
              apiConfig: that.savedata.queryObj.apiConfig,

              // 需要调用的API服务配置
              apiServices: [{}],
              //条件/实体参数（变量），根据typeParam中的定义配置
              variables: {
                //当前中台使用的名称有dataInfo、info，具体查看API文档
                dataInfo: that.savedata.queryObj.params
              }
            };

            //转换了中台请求格式数据
            var paramD = that.$getParams(queryObj);
            // 调用中台API方法（可复用）
            requestGraphQL(paramD).then(response => {
              if (
                response.data[queryObj.apiConfig.ServiceCode].result == "1"
                // &&response.data[queryObj.apiConfig.ServiceCode].rows != ""
              ) {
                that.$crmcf.showMessages(that, "success", "发送成功！");
              } else {
                that.$crmcf.showMessages(
                  that,
                  "error",
                  response.data[queryObj.apiConfig.ServiceCode].msg
                );
              }
            });
          }
        });
    },
    resetForm(formName) {
    },
    close() {
    debugger
    let that=this
    that.$crmcf.crmcloseView(that);
  },
  },
};
</script>
<style>
.filter-params-crm .mid-col label {
  width: 18%;
}
.filter-params-crm .mid-col .el-input {
  width: 82%;
}
.filter-params-crm .mid-col {
  padding-right: 0px;
}
.filter-params-crm .btn-col {
  padding-left: 1.7%;
  text-align: left;
}
</style>