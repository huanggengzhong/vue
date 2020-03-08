<!--
* 描述: 短信回复查询
* 创建人: zouzx
* 创建时间: 2019-07-25
* 记录：
*  20190725 新建 zouzx
-->
<template>
<div class="app-container app-container-table">
  <div class="filter-container filter-button">
    <el-button type="primary" @click="query">查询</el-button>
    <el-button @click="reset">重置</el-button>
  </div>
  <div class="filter-container filter-title">查询条件</div>
  <div class="filter-container filter-params">
    <el-form label-position="right">
      <el-row>
          <el-col :span="6"><PhoneNumber ref="PhoneNumber" :PhoneNumber="cxPhone"></PhoneNumber></el-col>
          <el-col :span="6"><ReplyContent ref="ReplyContent" :ReplyContent="cxDesc"></ReplyContent></el-col>
          <el-col :span="6"><SendApplicationCode ref="SendApplicationCode" :SendApplicationCode='cxSQCode'></SendApplicationCode></el-col>
          <el-col :span="6"><dt_ReplyDateDouble ref="dt_ReplyDateDouble" :dt_ReplyDateDouble='cxReplyDate'></dt_ReplyDateDouble></el-col>
      </el-row>
    </el-form>
  </div>
  <div class="filter-container filter-title">查询结果</div>
  <el-table
      :data="tabledatas.tableData"
      highlight-current-row
      style="width: 100%;height:350px"
      max-height="350px"
      v-loading.body="false"
      element-loading-text="Loading"
      border
      fit
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
      :total="9"
      :page-size="tabledatas.pagesize"
      :current-page="tabledatas.pageindex"
    ></el-pagination>
</div>
</template>
<script>
import { crmApis } from "@/api/graphQLApiList/crm";
import { requestGraphQL } from "@/api/commonRequest";
import Table from "@/components/crm/table/Table";
import SendApplicationCode from "@/components/crm/textbox/Public/Message/SendApplicationCode";//发送申请码
import ReplyContent from "@/components/crm/textbox/Public/Message/ReplyContent";//回复内容
import PhoneNumber from "@/components/crm/textbox/Public/customerInfos/PhoneNumber";//电话
import dt_ReplyDateDouble from '@/components/crm/Time/dt_ReplyDateDouble';//短信发送时间 双日期
export default {
  name: "crmMessageReplyQuery",
  components: {
    Table,
    SendApplicationCode,
    ReplyContent,
    PhoneNumber,
    dt_ReplyDateDouble
  },
  data() {
    return {
      input: "",
      cxPhone:{
        input:''
      },
      cxDesc:{
        input:''
      },
      cxSQCode:{
        input:''
      },
      cxReplyDate:{
        value:''
      },
      dialogVisible: false,
      tabledatas: {
        colnames: [
          { label: "电话", value: "phone" },
          { label: "发送申请码", value: "apply_Code" },
          { label: "回复内容", value: "sendStatus" },
          { label: "回复时间", value: "sendResult" },
          { label: "备注", value: "" }
        ],
        tableData:[
          {
            date: "2016-05-01",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1518 弄"
          }
        ],
        queryObj: {
          // .后面是服务编码，.前面固定写死
          apiConfig: crmApis.NavigateMap001,
          apiQueryRow: [
            "phone",
            "apply_Code",
            "sendStatus",
            "sendResult"
          ],
          params: {
            token:'',
            OEM_CODE:'',
            GROUP_CODE:'',
            CUST_PHONE:'',
            RECEIVE_TIME_BEGIN:'',
            RECEIVE_TIME_CONTENT:'',
            MSG_CONTENT:'',
            ORDERBY:'',
            APPLY_CODE:'',
            SERVICE_ORDER_DID:''
          }
        },
        pagesize:10,
        pageindex:1
      },
      child:{
        input:''
      }
    };
  },
  mounted: function() {
    console.log("进来了");
  },
  methods: {
    showdialog: function() {
      let that = this;
      console.log("进来了");
      that.dialogVisible = true;
    },
    query:function(){
      let that = this;
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
          response.data[queryObj.apiConfig.ServiceCode].result == "1" &&
          response.data[queryObj.apiConfig.ServiceCode].rows != ""
        ) {
        }
      });
    },
    handleSelect: function() {
      let that = this;
      that.input = this.$refs.table.rowData.name;
      that.dialogVisible = false;
    },
    reset: function() {
      this.$refs.PhoneNumber.reset();
      this.$refs.ReplyContent.reset();
      this.$refs.SendApplicationCode.reset();
      this.$refs.dt_ReplyDateDouble.reset();
    }
  }
};
</script>
<style>
/* .filter-params .el-form-item__label{
  margin-right: 0px;
}
.filter-params .el-col {
  margin-bottom: 0px;
}
.filter-params-crm .el-col {
  margin-bottom: -10px;
}
.filter-params .long-col .el-input {
  width: 85%;
}
.filter-params .long-col label {
  width: 15%;
}
.filter-params .long-col .el-textarea {
  width: 85%;
} */
</style>
