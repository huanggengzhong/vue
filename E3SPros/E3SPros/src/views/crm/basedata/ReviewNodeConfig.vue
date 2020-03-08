<!--
* 描述: 审核驳回节点配置
* 创建人: chq2
* 创建时间: 2019-07-22
* 记录：
*  20190722 新建 chq2
-->
<template>
<div class="app-container app-container-table">
  <div class="filter-container filter-button">
    <el-button type="primary" @click="query">查询</el-button>
      <el-button @click="showdialog">新增</el-button>
      <el-button @click="reset">重置</el-button>
  </div>
  <div class="filter-container filter-title-crm">查询条件</div>
  <div class="filter-container filter-params-crm">
    <el-form label-position="right">
      <el-row>
        <el-col :span="22">
          <el-col :span="6"><BusinessProcess :BusinessProcess="BProcess" ref="BusinessProcess"></BusinessProcess></el-col>
          <el-col :span="6"><ServiceType :ServiceType="SType" ref="ServiceType"></ServiceType></el-col>
          <el-col :span="6"><ProcessNode :ProcessNode="PNode" ref="ProcessNode"></ProcessNode></el-col>
          <el-col :span="6"><DutyPeople :DutyPeople="DPeople" ref="DutyPeople"></DutyPeople></el-col>
        </el-col>
        <el-col :span="2">
            <el-button icon="el-icon-plus" @click="changeToggleParam" class="moreParam">更多</el-button>
        </el-col>
        <el-col :span="22" v-show="toggleParam" class="toggleParam">
      <el-row>
          <el-col :span="6"><EnableOrDisable :EnableOrDisable="EnableDisable" ref="EnableOrDisable"></EnableOrDisable></el-col>
         
      </el-row>
        </el-col>
      </el-row>
    </el-form>
  </div>

  <!--编辑弹窗开始-->
  <el-dialog :visible.sync="dialogVisible" style="height:300px" width="750px" class="dialog" title="驳回节点配置维护" >
      <div class="filter-container filter-title">
        <div style="float:right">
          <el-button type="primary" @click="handleSelect">保存</el-button>
        </div>
      </div>
      <div class="filter-container filter-params">
      <el-form label-position="right">
        <el-row>
          <el-col :span="8"><BusinessProcess :BusinessProcess="BProcess" ref="BusinessProcess"></BusinessProcess></el-col>
          <el-col :span="8"><ServiceType :ServiceType="SType" ref="ServiceType"></ServiceType></el-col>
          <el-col :span="8"> <ProcessNode :ProcessNode="PNode" ref="ProcessNode"></ProcessNode></el-col>
        </el-row>
        <el-row>
          <el-col :span="8"><WhetherCheck :WhetherCheck="WhCheck" ref="WhetherCheck"></WhetherCheck></el-col>
          <el-col :span="8"><WhetherReject :WhetherReject="WhReject" ref="WhetherReject"></WhetherReject></el-col>
          <el-col :span="8"><EnableOrDisable :EnableOrDisable="EnableDisable" ref="EnableOrDisable"></EnableOrDisable></el-col>
        </el-row>
        <el-row>
          <el-col :span="8"><DutyPeople :DutyPeople="DPeople" ref="DutyPeople"></DutyPeople></el-col>
        </el-row>
      </el-form>
      </div>
    </el-dialog>
     <!--编辑弹窗结束-->
  <div class="filter-container filter-title">查询结果</div>
  <el-table
      :data="tabledatas.tableData"
      highlight-current-row
      style="width: 100%;height:330px"
      v-loading.body="false"
      element-loading-text="Loading"
      border
      fit
    >
        <el-table-column type="index" label="序号"  width="55"></el-table-column>
      <el-table-column label="操作" align="center" width="95">
        <template slot-scope="scope">
          <el-button
            size="mini" type="text" align="center"
            @click="handle(scope.$index, scope.row)"
          >编辑</el-button>

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
      :total="9"
      :page-size="tabledatas.pagesize"
      :current-page="tabledatas.pageindex"
    ></el-pagination>
</div>
</template>
<script>
import { crmApis } from "@/api/graphQLApiList/crm";
import { requestGraphQL } from "@/api/commonRequest";
import ServiceType from "@/components/crm/Select/Complaint/ServiceType.vue";
import DutyPeople from "@/components/crm/textbox/Complaint/DutyPeople.vue";
import EnableOrDisable from "@/components/crm/Select/Whether/EnableOrDisable.vue";
import BusinessProcess from "@/components/crm/Select/Common/BusinessProcess.vue";
import ProcessNode from "@/components/crm/Select/Common/ProcessNode.vue";
import WhetherCheck from "@/components/crm/Select/Whether/WhetherCheck.vue";
import WhetherReject from "@/components/crm/Select/Whether/WhetherReject.vue";
export default {
  name: "ReviewNodeConfig",
  components: {
    ServiceType,
    EnableOrDisable,
     BusinessProcess,
    ProcessNode,
    DutyPeople,
    WhetherCheck,
    WhetherReject
  },
mounted: function() {
    console.log("进来了");
  },
  methods: {
    changeToggleParam() {
      this.toggleParam = !this.toggleParam;
    },
    showdialog: function() {
      let that = this;
      console.log("进来了");
      that.dialogVisible = true;
    },
    showdialog2: function() {
      let that = this;
      console.log("进来了");
      that.dialogVisible2 = true;
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
    handle:function(index,rowData){
      let that=this
      //that.$router.push({name:'ComplainReview',params:rowData})
      that.subzffz.input=rowData.SCORE;
      that.dialogVisible = true;
    },
    handleSelect: function() {
      let that = this;
      //that.input = this.$refs.table.rowData.name;
      that.dialogVisible = false;
    },
    handleSelect2: function() {
      let that = this;
      //that.input = this.$refs.table.rowData.name;
      that.dialogVisible2 = false;
    },
    reset: function() {
       this.$refs.BusinessProcess.reset();
      this.$refs.ServiceType.reset();
      this.$refs.ProcessNode.reset();
      this.$refs.DutyPeople.reset();
      this.$refs.EnableOrDisable.reset();
    }
  },
  data() {
    return {
      subzffz:{
        input:''
      },
      input: "",
      toggleParam: false,
      width: "900px",
      heigh: "580px",
      dialogVisible: false,
      dialogVisible2: false,
      form: {
        task: ""
      },
      formLabelWidth: "100px",
      tabledatas: {
        colnames: [
         { label: "业务流程", value: "" },
          { label: "服务类别", value: "" },
          { label: "流程节点", value: "" },
          { label: "是否审核", value: "" },
          { label: "是否驳回", value: "" },
          { label: "责任人", value: "" },
          { label: "是否启用", value: "" }
        ],
        tableData:[
          {
            date: "2016-05-01",
            name: "王小虎",
            SCORE: "5"
          }
        ],
        queryObj: {
          // .后面是服务编码，.前面固定写死
          apiConfig: crmApis.CustomerSatisfactionService001,
          apiQueryRow: [
            "BusinessProcess",
            "ServiceType",
            "ProcessNode",
            "DutyPeople",
            "EnableOrDisable"
          ],
          params: {
          BusinessProcess: "",
            ServiceType: "",
            ProcessNode: "",
            DutyPeople: "",
            EnableOrDisable: ""
          }
        },
        pagesize:10,
        pageindex:1
      },
     //初始化input
      DPeople: {
        input: ""
      },
     //初始化value
      BProcess: {
        value: ""
      },
      SType: {
        value: ""
      },
      PNode: {
        value: ""
      },
      EnableDisable: {
        value: ""
      }
    };
  }
};
</script>
