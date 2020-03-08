<template>
  <!-- 线索单导入 -->
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
       tabledatas: {
        colnames: [
          { label: "客户名称", value: "custName" },
          { label: "留资时间", value: "leaverInfoDate" },
          { label: "性别", value: "customerSex" },
          { label: "联系电话", value: "phone" },
          { label: "邮箱", value: "email" },
          { label: "意向车型", value: "carType" },
          { label: "意向级别", value: "clueLevelCode" },
          { label: "接触方式", value: "cantactWayName" },
          { label: "渠道大类", value: "infoChanMName" },
          { label: "渠道小类", value: "infoChanDName" },
          { label: "线索描述", value: "clueDescribe" },
          { label: "学历", value: "degree" },
          { label: "证件号", value: "credNo" },
          { label: "购车预算", value: "buyCarBudget" },
          { label: "是否有效线索", value: "isEffectiveClue" },
          { label: "预约到店时间", value: "maaToStoreTime" },
          { label: "下次回访时间", value: "lastVisitTime" },
          
        ],
        tableData: [],
        queryObj: {

          apiQueryRow: [
            "custName",
            "leaverInfoDate",
            "customerSex",
            "phone",
            "email",
            "carType",
            "clueLevelCode",
            "cantactWayName",
            "infoChanMName",
            "infoChanDName",
            "clueDescribe",
            "degree",
            "credNo",
            "buyCarBudget",
            "isEffectiveClue",
            "maaToStoreTime",
            "lastVisitTime",
          ],
          params: {
           
          }
        },

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
      let that = this;
      let queryObj = {
        // api配置
        type: "mutation",
        apiConfig: crmApis.clueServerMutationDlrImport,
        // 需要调用的API服务配置
        apiServices: [
          {
            //表格中台返回网格的字段
            apiQueryRow: that.tabledatas.queryObj.apiQueryRow
          }
        ],
        //条件/实体参数（变量），根据typeParam中的定义配置
        variables: {
          // pageSize: optype == "2" ? 99999 : that.tabledatas.pagesize,
          // pageIndex: that.tabledatas.pageindex,
          // //当前中台使用的名称有dataInfo、info，具体查看API文档
          // dataInfo: that.tabledatas.queryObj.params
        }
      };
      //转换了中台请求格式数据
      var paramD = that.$getParams(queryObj);
      this.buildExportParam(queryObj, paramD);
      // 调用中台API方法（可复用）
      requestGraphQL(paramD).then(response => {
        this.$utils.downloadFile(response, paramD.excelName);
      });
    
    },
    buildExportParam(queryObj, paramsObj) {
      var excelCols = {};
      for (var i = 0; i < this.tabledatas.colnames.length; i++) {
        excelCols[this.tabledatas.colnames[i].value] = this.tabledatas.colnames[
          i
        ].label;
      }
      // 数据类型
      paramsObj.dataType = "excel";
      // excel文件名称
      paramsObj.excelName = "线索单导入模板下载";
      // 根据请求API描述excel数据对象
      paramsObj.excels = [
        {
          // excel sheet名称
          title: "Sheet1",
          // 对应API服务编码
          actionName: queryObj.apiConfig.ServiceCode,
          // excel列
          columns: excelCols
        }
      ];
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
