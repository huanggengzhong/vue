<template>
  <div>
    <el-form-item label="战败原因">
      <el-input
        readonly="readonly"
        v-model="input"
        placeholder="点击选择战败原因"
        suffix-icon="el-icon-search"
        @click.native="showdialog()"
      ></el-input>
    </el-form-item>
    <!-- 弹窗 -->
    <el-dialog title="战败原因" :visible.sync="dialogVisible" :append-to-body="true" @sentData="sendCode" width="900px" center>
      <div class="filter-container filter-title">
        查询条件
        <div style="float:right">
          <el-button type="primary" size="small" @click="query">查询</el-button>
          <el-button size="small" @click="sendCode">确认</el-button>
          <el-button size="small" @click="reset">重置</el-button>
        </div>
      </div>
      <div class="filter-container filter-params">
        <el-form>
          <el-row>
            <el-col :span="8">
            <FailureLostControllerReasonNumber
              :FailureLostControllerReasonNumber="cxNo"
              ref="FailureLostControllerReasonNumber"
            ></FailureLostControllerReasonNumber>
          </el-col>
          <el-col :span="8"> <FailureLostControllerReasonName
              :FailureLostControllerReasonName="cxName"
              ref="FailureLostControllerReasonName"
            ></FailureLostControllerReasonName></el-col>
          </el-row>
        </el-form>
      </div>
      <div class="filter-container filter-title">查询结果</div>
      <el-table
      :data="tabledatas.tableData"
      @current-change="SelectH"
      highlight-current-row
      style="width: 100%;height:330px"
      v-loading.body="false"
      element-loading-text="Loading"
      border
      fit
      ref="multipleTable"
    >
      <el-table-column type="index" label="序号" width="55"></el-table-column>
      <el-table-column
        v-for="item in tabledatas.colnames"
        :key="item.value"
        :label="item.label"
        :prop="item.value"
        align="center"
      ></el-table-column>
    </el-table>
    <el-pagination
      background
      layout="prev, pager, next"
      :total="tabledatas.total" 
      :page-size="tabledatas.pagesize"
      :current-page="tabledatas.pageindex"
      @prev-click="prev" 
      @next-click="next" 
      @current-change="changepage"
    ></el-pagination>
    </el-dialog>
  </div>
</template>

<script>
import { crmApis } from "@/api/graphQLApiList/crm";
import { requestGraphQL } from "@/api/commonRequest";
import Table from "@/components/crm/table/Table";
import Name from "@/components/crm/textbox/Complaint/Name";
import CodeNumber from "@/components/crm/textbox/Complaint/CodeNumber";
import FailureLostControllerReasonNumber from "@/components/crm/textbox/Complaint/FailureLostControllerReasonNumber";
import FailureLostControllerReasonName from "@/components/crm/textbox/Complaint/FailureLostControllerReasonName";

export default {
  name: "ReasonForDefeat",
  components: {
    Table,
    FailureLostControllerReasonNumber,
    FailureLostControllerReasonName
  },
  props: {
    ReasonForDefeat: {
      input: String,
      dialogVisible: Boolean,
    }
  },
  data() {
    return {
      rowData: { 
        failReasonMId: "",
        failReasonNo: "",
        failReasonName: "",
      },
      input: this.ReasonForDefeat.input,
      width: "850px",
      dialogVisible: false,
      cxNo: {
        input: ""
      },
      cxName: {
        input: ""
      },
      formLabelWidth: "100px",
      tabledatas: {
        colnames: [
          { label: "原因编号", value: "failReasonNo" },
          { label: "原因名称", value: "failReasonName" },
          { label: "原因描述", value: "failReasonDesc" },
          { label: "原因类型", value: "failReasonTypeName" },
        ],
        tableData: [
        ],
        queryObj: {
          // .后面是服务编码，.前面固定写死
          apiConfig: crmApis.pcDbFailReasonMQueryFindAll,
          apiQueryRow: [
            "failReasonNo",
            "failReasonName",
            "failReasonDesc",
            "failReasonType",
            "isEnableName",
            "createdName",
            "createdDate",
            "modifyName",
            "lastUpdatedDate",
            "failReasonMId",
            "isEnable",
            "failReasonTypeName"
          ],
          params: {
            failReasonNo:"",
            failReasonName:"",
            isEnable:"1",
            failReasonType:"1",
          }
        },
        pagesize: 10,
        pageindex: 1,
        total: 0
      }

    };
  },
  methods: {
    showdialog: function() {
      let that = this;
      console.log("进来了showdialog方法");
      that.dialogVisible = true;
    },
    query: function() {
      let that = this;
      if (
        that.$refs.FailureLostControllerReasonNumber==undefined&&
        that.$refs.FailureLostControllerReasonName==undefined
      ){
        that.tabledatas.queryObj.params.failReasonNo="";
        that.tabledatas.queryObj.params.failReasonName="";
      }else{
        that.tabledatas.queryObj.params.failReasonNo=that.$refs.FailureLostControllerReasonNumber.input;
        that.tabledatas.queryObj.params.failReasonName=that.$refs.FailureLostControllerReasonName.input;
      }

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
        if (
          response.data[queryObj.apiConfig.ServiceCode].result == "1" 
          //&&response.data[queryObj.apiConfig.ServiceCode].rows != ""
        ) {
          that.tabledatas.tableData=response.data[queryObj.apiConfig.ServiceCode].rows
          that.tabledatas.pageindex =response.data[queryObj.apiConfig.ServiceCode].pageindex;
          that.tabledatas.total =response.data[queryObj.apiConfig.ServiceCode].records;
        }
      });
    },
    handleSelect:function(){
      let that=this
      that.input=this.$refs.table.rowData.name
      that.dialogVisible = false;
    },
    reset: function() {
      this.$refs.FailureLostControllerReasonNumber.reset();
      this.$refs.FailureLostControllerReasonName.reset();
    },
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
    changepage(index){
      let that=this
      that.tabledatas.pageindex=index
      this.query()
    },
    //赋值事件
    getData: function() {
      let that = this;
      that.input = this.ReasonForDefeat.input;
      this.query();
    },
    //行选择事件
    SelectH: function(row) {
      let that = this;
      that.rowData.failReasonMId = row.failReasonMId;
      that.rowData.failReasonNo = row.failReasonNo;
      that.rowData.failReasonName = row.failReasonName;
    },
    sendCode(){
      let that = this;
      that.dialogVisible = false;
      that.input=that.rowData.failReasonName
      var cityTemp = [];
      var cityObj = {};
      cityObj["failReasonMId"] = that.rowData.failReasonMId;
      cityObj["failReasonNo"] = that.rowData.failReasonNo;
      cityObj["failReasonName"] = that.rowData.failReasonName;
      cityTemp.push(cityObj);
      that.$emit('CatData', cityTemp);
    }
  }
};
</script>

<style scoped>
/* .dmo-form-inline {
  float: left;
  padding: 0px 15px;
  text-align: left;
  margin-top: 20px;
  width: 98%
}
.dialog .el-dialog__body {
  padding: 10px 10px;
}
.dmo-form-inline .btton {
  float: right;
} */
</style>



