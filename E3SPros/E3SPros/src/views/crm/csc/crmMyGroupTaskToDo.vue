<!--
* 描述: 本组待办任务  抢单和分配操作
* 创建人: zouzx
* 创建时间: 2019-07-22
* 记录：
*  20190722 新建 zouzx
-->
<template>
<div class="app-container app-container-table">
  <div class="filter-container filter-button">
    <el-button type="primary" @click="query">查询</el-button>
    <el-button @click="savefp">确认</el-button>
    <el-button @click="reset">重置</el-button>
  </div>
  <div class="filter-container filter-title-crm">查询条件</div>
  <div class="filter-container filter-params-crm">
    <el-form label-position="right">
      <el-row>
        <el-col :span="22">
          <el-col :span="7"><BusinessCategory ref="BusinessCategory" :BusinessCategory="cxType"/></el-col>
          <el-col :span="6"><ServiceMenuNumber ref="ServiceMenuNumber" :ServiceMenuNumber="cxCode"/></el-col>
          <el-col :span="6"><txt_CustomerName ref="txt_CustomerName" :txt_CustomerName="cxName"/></el-col>
          <el-col :span="5"><PhoneNumber ref="PhoneNumber" :PhoneNumber="cxPhone"/></el-col>
        </el-col>
        <el-col :span="2">
            <el-button icon="el-icon-plus" @click="changeToggleParam" class="moreParam">更多</el-button>
        </el-col>
        <el-col :span="22" v-show="toggleParam" class="toggleParam">
        <el-row>
          <el-col :span="7"><CurrentHandler ref="CurrentHandler" :CurrentHandler="cxCrru"/></el-col>
          <el-col :span="6"><dt_BuildMenuDates ref="dt_BuildMenuDates" :dt_BuildMenuDates="cxCreated"/></el-col>
          <el-col :span="6"><AssignStatus ref="AssignStatus" :AssignStatus="cxStatus"/></el-col>
          <el-col :span="5"><Brand ref="Brand" :Brand="cxBrand"/></el-col>
          <el-col :span="7"><ChooseProcessingPerson ref="ChooseProcessingPerson" :ChooseProcessingPerson="xzPerson"/></el-col>
        </el-row>
        </el-col>
      </el-row>
    </el-form>
  </div>
  <div class="filter-container filter-title-crm">查询结果</div>
  <el-table
      :data="tabledatas.tableData"
      highlight-current-row
      style="width: 100%;height:350px"
      max-height="350px"
      v-loading.body="false"
      element-loading-text="Loading"
      border
      fit
      ref="multipleTable"
    >
      <el-table-column type="selection" width="55" label="选择+" filed="chose" current-row-key="choose" />
      <el-table-column type="index" label="序号" width="55"></el-table-column>
      <el-table-column label="操作" align="center" width="100">
        <template slot-scope="scope">
          <el-button type="text" size="mini" v-if="scope.row.assignStatus=='0'" @click="handle(scope.$index, scope.row)">抢单</el-button>
        </template>
      </el-table-column>
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
</div>
</template>
<script>
import { crmApis } from "@/api/graphQLApiList/crm";
import { requestGraphQL } from "@/api/commonRequest";
import Table from "@/components/crm/table/Table";
import BusinessCategory from "@/components/crm/Select/Common/BusinessCategory";
import ServiceMenuNumber from "@/components/crm/textbox/Public/ServiceMenuNumber";
import txt_CustomerName from "@/components/crm/textbox/Public/customerInfos/txt_CustomerName";
import PhoneNumber from "@/components/crm/textbox/Public/customerInfos/PhoneNumber";
import CurrentHandler from "@/components/crm/textbox/Clue/CurrentHandler";
import dt_BuildMenuDates from "@/components/crm/Time/dt_BuildMenuDates";
import AssignStatus from "@/components/crm/Select/Clue/AssignStatus";
import Brand from "@/components/crm/Select/Common/ResponsibleArea/Brand";
import ChooseProcessingPerson from "@/components/crm/Select/Clue/CallCenterClue/ChooseProcessingPerson";
import ExpectedFollowTime from "@/components/crm/Time/ExpectedFollowTime";
export default {
  name: "crmMyGroupTaskToDo",
  components: {
    Table,
    BusinessCategory,
    ServiceMenuNumber,
    txt_CustomerName,
    PhoneNumber,
    CurrentHandler,
    dt_BuildMenuDates,
    AssignStatus,
    Brand,
    ChooseProcessingPerson,
    ExpectedFollowTime
  },
  data() {
    return {
      cxType:{
        value:""
      },
      cxCode:{
        input:""
      },
      cxName:{
        input:""
      },
      cxPhone:{
        input:""
      },
      cxCrru:{
        input:""
      },
      cxCreated:{
        value:""
      },
      cxStatus:{
        value:""
      },
      cxBrand:{
        value:""
      },
      xzPerson:{
        value:""
      },
      toggleParam: false,
      fpperson:{
        value:""
      },
      tabledatas: {
        colnames: [
          //查询结果  缺少 责任部门
          { label: "品牌", value: "carBrandCn" },
          { label: "业务类别", value: "serverType" },
          { label: "客户名称", value: "custName" },
          { label: "服务单号", value: "serverOrder" },
          { label: "电话", value: "phone" },
          { label: "地区", value: "areaName" },
          { label: "大区", value: "bigAreaName" },
          { label: "小区", value: "smallAreaName" },
          { label: "建单人", value: "createdName" },
          { label: "建单日期", value: "createdDate" },
          { label: "节点", value: "crruNode" },
          { label: "责任网点", value: "dutyOrgName" },  
          { label: "责任部门", value: "taskOrgName" },
          { label: "当前处理人", value: "lastDealPerson" },
          { label: "分派人", value: "distPerson" },
          { label: "派单时间", value: "distDate" },  
          { label: "分配状态", value: "assignStatusName" }
        ],
        tableData:[
        ],
        queryObj: {
          apiConfig: crmApis.csBuMyTaskGroupQueryFindAll,
          apiQueryRow: [
            "taskId",
            "carBrandCn",
            "serverType",
            "custName",
            "serverOrder",
            "phone",
            "areaName",
            "bigAreaName",
            "smallAreaName",
            "createdName",
            "crruNode",
            "dutyOrgName",
            "lastDealPerson",
            "distPerson",
            "distDate",
            "assignStatus",
            "assignStatusName",
            "taskOrgName"
          ],
          params: {
           serverType:"",
           serverOrder:"",
           custName:"",
           phone:"",
           dutyPersonName:"",
           beginDistDate:"",
           endDistDate:"",
           assignStatus:"",
           oemCode:"1",
           groupCode:"1",
           carBrandCode:""
          }
        },
        pagesize:10,
        pageindex:1,
        total: 0
      }
    };
  },
  methods: {
    changeToggleParam() {
      this.toggleParam = !this.toggleParam;
    },
    query:function(){
      debugger
      let that = this;
      that.tabledatas.queryObj.params.serverType = that.$refs.BusinessCategory.value;
      that.tabledatas.queryObj.params.serverOrder = that.$refs.ServiceMenuNumber.input;
      that.tabledatas.queryObj.params.custName = that.$refs.txt_CustomerName.input;
      that.tabledatas.queryObj.params.phone = that.$refs.PhoneNumber.input;
      if(that.$refs.dt_BuildMenuDates.value[0]!=undefined)
      {
        that.tabledatas.queryObj.params.beginDistDate = that.$refs.dt_BuildMenuDates.value[0]+" 00:00:00";
        that.tabledatas.queryObj.params.endDistDate = that.$refs.dt_BuildMenuDates.value[1]+" 23:59:59";
      }
      else{
        that.tabledatas.queryObj.params.beginDistDate = that.$refs.dt_BuildMenuDates.value[0];
        that.tabledatas.queryObj.params.endDistDate = that.$refs.dt_BuildMenuDates.value[1];
      }
      that.tabledatas.queryObj.params.assignStatus = that.$refs.AssignStatus.value;
      that.tabledatas.queryObj.params.carBrandCode = that.$refs.Brand.value;
      that.tabledatas.queryObj.params.dutyPersonName = that.$refs.CurrentHandler.input;
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
          response.data[queryObj.apiConfig.ServiceCode].result === "1" 
          //&&response.data[queryObj.apiConfig.ServiceCode].rows != ""
        ) {
          that.tabledatas.tableData=response.data[queryObj.apiConfig.ServiceCode].rows
          that.tabledatas.pageindex =response.data[queryObj.apiConfig.ServiceCode].pageindex;
          that.tabledatas.total =response.data[queryObj.apiConfig.ServiceCode].records;
        }
      });
    },
    handle:function(index,rowData){
      let that = this
      let queryObj = {
        // api配置
        type: "mutation",
        apiConfig: crmApis.csBuMyTaskMutationQing,
        // 需要调用的API服务配置
        apiServices: [{
            //表格中台返回网格的字段
            apiQueryRow:[]
        }],
        //条件/实体参数（变量），根据typeParam中的定义配置
        variables: {
          //当前中台使用的名称有dataInfo、info，具体查看API文档
          dataInfo: {
            taskId:rowData.taskId
          }
        }
      }
      //转换了中台请求格式数据
      var paramD = that.$getParams(queryObj);
      // 调用中台API方法（可复用）
      requestGraphQL(paramD).then(response =>{
      if(
        response.data[queryObj.apiConfig.ServiceCode].result === '1'  
        //&&response.data[queryObj.apiConfig.ServiceCode].rows!=''
        ){
        debugger
        this.$message({
          message: '抢单成功',
          type: 'success',
          duration: 1000
        });
        this.query();
        }else{
          this.$message({
          message: response.data[queryObj.apiConfig.ServiceCode].msg,
            type: "error",
          duration: 1000
        });
        }
      })
    },
    savefp:function(){
      //that.$router.push({name:"ComplainReview",params:rowData})
      let that = this
      debugger
      let selectData = that.$refs.multipleTable.selection;
      var html=""
      if(selectData.length == 0)
      {
        html = html + `<div>请至少选择一条数据</div>`
      }
      if(that.$refs.ChooseProcessingPerson.value=="")
      {
        html = html + `<div>请选择处理人</div>`
      }
      if (html != '') {
        this.$notify.error({
          title: "校验项",
          dangerouslyUseHTMLString: true,
          message: html
        });
        return
      }
      var tastlist = []
      selectData.forEach(item => {
        tastlist.push(item.taskId);
      });
      let queryObj = {
          // api配置
          type: "mutation",
          apiConfig: crmApis.csBuMyTaskMutationAssign,
          // 需要调用的API服务配置
          apiServices: [{
              //表格中台返回网格的字段
              apiQueryRow:[]
          }],
          //条件/实体参数（变量），根据typeParam中的定义配置
          variables: {
            //当前中台使用的名称有dataInfo、info，具体查看API文档
            dataInfo: {
              empId:that.$refs.ChooseProcessingPerson.value,
              idList:tastlist
            }
          }
        }
        //转换了中台请求格式数据
        var paramD = that.$getParams(queryObj);
        // 调用中台API方法（可复用）
        requestGraphQL(paramD).then(response =>{
        if(
          response.data[queryObj.apiConfig.ServiceCode].result === '1'  
          //&&response.data[queryObj.apiConfig.ServiceCode].rows!=''
          ){
          debugger
          this.$message({
            message: '分配成功',
            type: 'success',
            duration: 1000
          });
          this.query();
          }else{
            this.$message({
            message: response.data[queryObj.apiConfig.ServiceCode].msg,
            type: "error",
            duration: 1000
          });
          }
      })
    },
    reset:function(){
      this.$refs.BusinessCategory.reset();
      this.$refs.ServiceMenuNumber.reset();
      this.$refs.txt_CustomerName.reset();
      this.$refs.PhoneNumber.reset();
      this.$refs.CurrentHandler.reset();
      this.$refs.dt_BuildMenuDates.reset();
      this.$refs.AssignStatus.reset();
      this.$refs.Brand.reset();
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
    }
  },
};
</script>
<style scoped>
/* .filter-params-sub .el-col {
  margin-bottom: -10px;
}
.toggleParam{
  z-index: 1
} */
</style>
