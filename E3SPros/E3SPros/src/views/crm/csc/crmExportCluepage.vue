<template>
  <!-- 导入线索 -->
  <div class="app-container app-container-table">
    <div class="filter-container filter-button">.</div>

    <div class="filter-container filter-title">线索单导入</div>
    <div class="filter-container filter-params query-">
      <el-form >
        <el-row>
          <el-col :span="12">
            <el-input v-model="file.name" size="small" style="width:100%;" placeholder="文件只能是 xls、xlsx格式" readonly/>
          </el-col>
          <el-col :span="12" style="text-align:left;">
            <el-upload
              class="upload-demo"
              ref="upload"
              :http-request="uploadSectionFile"
              accept=".xls,.xlsx"
              :on-preview="handlePreview"
              :on-remove="handleRemove"
              :on-change="handleChange"
              :file-list="fileList"
              :auto-upload="false"
              :show-file-list="false"
            >
            <!-- :show-file-list="false"   -->
              <el-button slot="trigger" size="small" type="primary">选取文件</el-button>

              <el-button
                style="margin-left: 10px;"
                size="small"
                @click="downLoad"
              >模板下载</el-button>

              <el-button
                style="margin-left: 10px;"
                size="small"
                @click="submitUpload"
              >导入</el-button>
              <!-- <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div> -->
            </el-upload>
          </el-col>
        </el-row>
        
      </el-form>
    </div>

    <div class="filter-container filter-title"></div>
    <Table :tabledatas="tabledatas"></Table>
  </div>
</template>
<script>

import Table from "@/components/crm/table/Table";
import { crmApis } from "@/api/graphQLApiList/crm";
import { requestGraphQL } from "@/api/commonRequest";
import crmClueImportPage from "@/views/crm/coc/crmClueImportPage.vue";


export default {
  name: "ClueOrderImport",
  components: {
    Table,
    crmClueImportPage,

  },
  data() {
    return {
      fileList:[],
      file:{},
      
      toggleParam: false,
      delayreason: "",
      tabledatas: {
        // 操作列
        isoperat: false,
        havedistrbute: false,
        haveEdit: false,
        haveDel: false,
        colnames: [{ label: "错误信息", value: "serverOrder" }],
        queryObj: {
          // .后面是服务编码，.前面固定写死
          apiConfig: crmApis.csBuComplaintDelayQueryFindAll,
          apiQueryRow: ["serverOrder", "createdDate", "delayReson"],
          params: {
            delayId: "",
            createdDateStart: "",
            createdDateEnd: "",
            serverOrder: "",
            delayStatus: ""
          }
        }
      },
      
    };
  },
  created(){
    this.file={}
    this.fileList=[]
  },
  methods: {
    
    submitUpload() {
      console.log(this.file,this.fileList)
      if(!this.file.name){
        this.$message({
            message: '请先选取文件!',
            type: 'warning'
        });
        return;
      }
      var testmsg=this.file.name.substring(this.file.name.lastIndexOf('.')+1)
      const extension = testmsg === 'xls'
      const extension2 = testmsg === 'xlsx'
      // const isLt2M = file.size / 1024 / 1024 < 10
      if(!extension && !extension2) {
          this.$message({
              message: '上传文件只能是 xls、xlsx格式!',
              type: 'warning'
          });
          return;
      }
      this.uploadSectionFile();
    },
    //覆盖默认的上传，自定义上传方式
    uploadSectionFile(){
      let that = this;
      let queryObj = {
        // api配置
        type: "query",
        apiConfig: crmApis.clueServerMutationDlrImport,
        // 需要调用的API服务配置
        apiServices: [
          {
            //表格中台返回网格的字段
            apiQueryRow: []
          }
        ],
        //条件/实体参数（变量），根据typeParam中的定义配置
        variables: {
          dataInfo: { 
            
          }
        }
      };

      //转换了中台请求格式数据
      var paramD = that.$getParams(queryObj);
      // 调用中台API方法（可复用）
      requestGraphQL(paramD).then(response => {
        if (response.data[queryObj.apiConfig.ServiceCode].result == "1") {
          this.$message({
            message: response.data[queryObj.apiConfig.ServiceCode].msg,
            type: "success",
            duration: 1000
          });
        
        } else {
          this.$message({
            message: response.data[queryObj.apiConfig.ServiceCode].msg,
            type: "error",
            duration: 1000
          });
        }
      });
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    handleChange(file, fileList){
      this.fileList=[];
      this.fileList.push(file);
      this.file=file
    },
    downLoad(){

    },

  }
};
</script>
<style>
.filter-params .el-form-item__label {
  margin-right: 0px;
}
.query-params .el-col {
  margin-bottom: 0px;
}
</style>
