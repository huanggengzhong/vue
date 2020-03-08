/*
 * @Author: xgz 
 * @Date: 2019-07-25 21:10:53 
 * @Last Modified by: //此处填修改人名字
 * @Last Modified time: 2019-09-10 17:35:04
 */

<template>
  <div class="app-container app-container-table">
    <div class="filter-container filter-button">
      <el-button type="primary" @click="query()">查询</el-button>
      <el-button @click="add()">保存</el-button>
      <el-button @click="reset()">重置</el-button>
    </div>

    <div class="filter-container filter-title-crm">查询条件</div>
    <div class="filter-container filter-params-crm">
      <el-form label-position="right">
        <el-row>
          <el-col :span="6">
            <ImportTimes :ImportTimes="ImportTimes" ref="ImportTimes" />
          </el-col>
          <el-col :span="6">
            <VINCode :VINCode="VINCode" ref="VINCode" />
          </el-col>
          
        </el-row>
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

    <!-- 自定义网格 -->
    <div class="filter-container filter-title-crm">查询结果</div>
    <el-table :data="tabledatas.tableData" highlight-current-row style="width: 100%;height:350px" v-loading.body="loadFlag" element-loading-text="Loading" border fit>
      <el-table-column type="index" label="序号" text-align="center" width="55"></el-table-column>
      <el-table-column width="100px" label="操作" align="center">
        <template slot-scope="scope">
          <el-button type="text" size="mini" @click="edit(scope.$index,scope.row)">编辑</el-button>
        </template>
      </el-table-column>
      <el-table-column v-for="item in tabledatas.colnames" :key="item.value" :label="item.label" :prop="item.value" align="center"></el-table-column>
    </el-table>
    <el-pagination background layout="prev, pager, next" :total="tabledatas.total" :page-size="tabledatas.pagesize" :current-page="tabledatas.pageindex" @prev-click="prev" @next-click="next" @current-change="changepage">
    </el-pagination>
    <!-- 自定义网格结束 -->
  </div>
</template>
<script>
import ImportTimes from "@/components/crm/Time/ImportTimes"; 
import VINCode from '@/components/crm/textbox/Public/carInfo/VINCode'
import { crmApis } from "@/api/graphQLApiList/crm";
import { requestGraphQL } from "@/api/commonRequest";
export default {
  name: "crmMsgAccountCpage",
  components: {
      ImportTimes,
      VINCode
  },
  data() {
    return {
      fileList:[],
      file:{},
      loadFlag:false,
      ImportTimes:{
          value:""
      },
      VINCode:{
          input:""
      },
      tabledatas: {
        colnames: [
          { label: "导入人", value: "dlrShortName" },
          { label: "导入时间", value: "dlrCode" },
          { label: "客户类型", value: "serverip" },
          { label: "客户类别", value: "username" },
          { label: "客户名称", value: "port" },
          { label: "电话", value: "isEnable" },
          { label: "证件类型", value: "createdName" },
          { label: "证件号码", value: "createdDate" },
          { label: "公司全称", value: "lastUpdatedDate" },
          
        ],
        tableData: [],
        queryObj: {
          apiConfig: crmApis.csBuMessChannelQueryForDlr,
          apiQueryRow: [
            "dlrShortName",
            "dlrCode",
            "serverip",
            "username",
            "port",
            "isEnable",
            "createdName",
            "createdDate",
            "lastUpdatedDate",
            "password",
            "updateControlId",
            "id"
          ],
          params: {
            // userName: "", //账号名称
            // isEnable: "", //是否可用
            // serverip: "" //服务ip
            //orgCode: "" //专营店编码
          }
        },
        pagesize: 10,
        pageindex: 1,
        total: 0
      },
      
    };
  },
  methods: {
    query: function() {
      let that = this;
      that.loadFlag = true; //请求标记
      that.tabledatas.queryObj.params.userName =
        that.$refs.AccountNameRefMain.input;
      that.tabledatas.queryObj.params.serverip =
        that.$refs.ServiceIPRefMain.input;
      that.tabledatas.queryObj.params.isEnable =
        that.$refs.EnableOrDisableRefMain.value;
      that.tabledatas.queryObj.params.orgCode = that.agentCode;
      let queryObj = {
        // api配置
        apiConfig: that.tabledatas.queryObj.apiConfig,
        // 需要调用的API服务配置
        apiServices: [
          {
            //表格中台返回网格的字段
            apiQueryRow: that.tabledatas.queryObj.apiQueryRow
          }
        ],
        //条件/实体参数（变量），根据typeParam中的定义配置
        variables: {
          pageSize: that.tabledatas.pagesize,
          pageIndex: that.tabledatas.pageindex,
          //当前中台使用的名称有dataInfo、info，具体查看API文档
          dataInfo: that.tabledatas.queryObj.params
        }
      };
      //转换了中台请求格式数据
      var paramD = that.$getParams(queryObj);
      // 调用中台API方法（可复用）
      requestGraphQL(paramD).then(response => {
        if (response.data[queryObj.apiConfig.ServiceCode].result == "1") {
          that.tabledatas.tableData =
            response.data[queryObj.apiConfig.ServiceCode].rows;
          // 将0转换成禁用、将1转换成启用
          for (var a = 0; a < that.tabledatas.tableData.length; a++) {
            if (that.tabledatas.tableData[a].isEnable == "1") {
              that.tabledatas.tableData[a].isEnable = "启用";
            }
            if (that.tabledatas.tableData[a].isEnable == "0") {
              that.tabledatas.tableData[a].isEnable = "禁用";
            }
          }
          that.tabledatas.pageindex =
            response.data[queryObj.apiConfig.ServiceCode].pageindex;
          that.tabledatas.total =
            response.data[queryObj.apiConfig.ServiceCode].records;
        } else {
          this.$message({
            message: response.data[queryObj.apiConfig.ServiceCode].msg,
            type: "error",
            duration: 1000
          });
        }
        that.loadFlag = false;
      });
    },

    reset: function() {
      this.$refs.AccountNameRefMain.reset();
      this.$refs.ServiceIPRefMain.reset();
      this.$refs.EnableOrDisableRefMain.reset();
      this.$refs.AgentRefMain.resetgz();
      this.agentCode=""
    },
    //导入
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

    // 分页的三个方法
    prev() {
      let that = this;
      if (this.tabledatas.pageindex > 1) {
        that.tabledatas.pageindex = this.tabledatas.pageindex - 1;
        this.query();
      }
    },
    next() {
      let that = this;
      if (true) {
        that.tabledatas.pageindex = this.tabledatas.pageindex + 1;
        this.query();
      }
    },
    changepage(index) {
      let that = this;
      that.tabledatas.pageindex = index;
      this.query();
    },

  }
};
</script>

