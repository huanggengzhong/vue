<!--
* 描述: 提醒升级设置
* 创建人: chq2
* 创建时间: 2019-07-24
* 记录：
*  20190724 新建 chq2
-->
<template>
  <div class="app-container app-container-table" ref="crmArea">
    <div class="filter-container filter-button">
      <el-button type="primary" @click="query()">查询</el-button>
      <el-button type="primary" @click="addShenJi()">新增升级规则</el-button>
      <el-button type="primary" @click="addTiXing()">新增提醒规则</el-button>
      <el-button @click="reset()">重置</el-button>
    </div>
    <div class="filter-container filter-title-crm">查询条件</div>
    <div class="filter-container filter-params-crm">
      <el-form label-position="right">
        <el-row>
          <el-col :span="22">
            <el-col :span="6">
              <sct_UpdateRemind :sct_UpdateRemind="UpdateRemind" ref="sct_UpdateRemind"></sct_UpdateRemind>
            </el-col>
            <el-col :span="6">
              <BusinessProcess :BusinessProcess="BProcess" ref="BusinessProcess"></BusinessProcess>
            </el-col>
            <el-col :span="6">
              <CompletedNode :CompletedNode="CNode" ref="CompletedNode"></CompletedNode>
            </el-col>
            <el-col :span="6">
              <ToBeProcessedNode :ToBeProcessedNode="TNode" ref="ToBeProcessedNode"></ToBeProcessedNode>
            </el-col>
          </el-col>
          <el-col :span="2">
            <el-button icon="el-icon-plus" @click="changeToggleParam" class="moreParam">更多</el-button>
          </el-col>
          <el-col :span="22" v-show="toggleParam" class="toggleParam">
            <el-row>
              <el-col :span="6">
                <RuleName :RuleName="RName" ref="RuleName"></RuleName>
              </el-col>
              <el-col :span="6">
                <EnableOrDisable :EnableOrDisable="EnableDisable" ref="EnableOrDisable"></EnableOrDisable>
              </el-col>
              <el-col :span="6">
                <ServiceBigClass :ServiceBigClass="SBigClass" ref="ServiceBigClass"></ServiceBigClass>
              </el-col>
              <!-- <el-col :span="6">
                <BusinessCategory :BusinessCategory="BCategory" ref="BusinessCategory"></BusinessCategory>
              </el-col> -->
              <el-col :span="6">
                <Brand :Brand="Bd" ref="Brand"></Brand>
              </el-col>
              <el-col :span="6">
                <WhetherToSupervise :WhetherToSupervise="WToSupervise" ref="WhetherToSupervise"></WhetherToSupervise>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
      </el-form>
    </div>
    <div class="filter-container filter-title-crm">查询结果</div>
    <el-table
      :data="tabledatas.tableData"
      highlight-current-row
      ref="table"
      :style="{width:'100%',height:tableHeight+'px'}"
      v-loading.body="false"
      element-loading-text="Loading"
      border
      fit
    >
      <el-table-column type="index" label="序号" width="55"></el-table-column>
      <el-table-column label="操作" align="center" width="95">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="text"
            align="center"
            @click="handle(scope.$index, scope.row)"
          >修改</el-button>
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
      :page-size="tabledatas.pageSize"
      :current-page="tabledatas.pageIndex"
      @prev-click="prev"
      @next-click="next"
      @current-change="changepage"
    ></el-pagination>
  </div>
</template>
<script>
import { crmApis } from "@/api/graphQLApiList/crm";
import { requestGraphQL } from "@/api/commonRequest";
import RuleName from "@/components/crm/textbox/Public/RuleName.vue";
import sct_UpdateRemind from "@/components/crm/Select/Complaint/sct_UpdateRemind.vue";
import WhetherToSupervise from "@/components/crm/Select/WhetherToSupervise.vue";
import BusinessProcess from "@/components/crm/Select/Common/BusinessProcess.vue";
import CompletedNode from "@/components/crm/Select/Complaint/ReminderUpdate/CompletedNode.vue";
import ToBeProcessedNode from "@/components/crm/Select/Complaint/ReminderUpdate/ToBeProcessedNode.vue";
import EnableOrDisable from "@/components/crm/Select/Whether/EnableOrDisable.vue";
import BusinessCategory from "@/components/crm/Select/Common/BusinessCategory.vue";
import Brand from "@/components/crm/Select/Common/ResponsibleArea/Brand.vue";
import ServiceBigClass from "@/components/crm/Select/Common/ServiceBigClass.vue";
export default {
  name: "RemindUpdateSet",
  components: {
    RuleName,
    sct_UpdateRemind,
    WhetherToSupervise,
    BusinessProcess,
    CompletedNode,
    ToBeProcessedNode,
    EnableOrDisable,
    BusinessCategory,
    Brand,
    ServiceBigClass
  },
  mounted: function() {
    this.$nextTick(() => {
      // 页面渲染完成后的回调
      let that = this;
      this.$crmcf.__setAutoTableStyle(that);
    });
  },
  methods: {
    changeToggleParam() {
      this.toggleParam = !this.toggleParam;
    },
    addTiXing: function() {
      let that = this;
      that.$router.push({ name: "RemindSet", params: null });
    },
    addShenJi: function() {
      let that = this;
      that.$router.push({ name: "UpdateSet", params: null });
    },
    prev(index) {
      let that = this;
      that.tabledatas.pageIndex = index;
      that.query();
    },
    next(index) {
      let that = this;
      that.tabledatas.pageIndex = index;
      that.query();
    },
    changepage(index) {
      let that = this;
      that.tabledatas.pageIndex = index;
      that.query();
    },
    query: function() {
      let that = this;
      that.tabledatas.queryObj.params.bussWf=that.$refs.BusinessProcess.value
      that.tabledatas.queryObj.params.begNode=that.$refs.CompletedNode.value
      that.tabledatas.queryObj.params.endNode=that.$refs.ToBeProcessedNode.value
      that.tabledatas.queryObj.params.ruleName=that.$refs.RuleName.input
      that.tabledatas.queryObj.params.isEnable=that.$refs.EnableOrDisable.value
      that.tabledatas.queryObj.params.ruleClass=that.$refs.ServiceBigClass.value
      that.tabledatas.queryObj.params.ruleType=that.$refs.sct_UpdateRemind.value
      that.tabledatas.queryObj.params.carBrandCode=that.$refs.Brand.value
      that.tabledatas.queryObj.params.isRise=that.$refs.WhetherToSupervise.value
      this.$crmcf.simpleTablequery(
        that,
        that.tabledatas,
        that.tabledatas.queryObj.apiConfig,
        function(data) {
          that.tabledatas.tableData = data.rows;
          that.tabledatas.total=data.records
        }
      )
    },
    handle: function(index, rowData) {
      let that = this;
      that.$router.push({ name: "RemindSet", params: rowData });
      //that.dialogVisible = true;
    },
    reset: function() {
      this.$refs.sct_UpdateRemind.reset();
      this.$refs.WhetherToSupervise.reset();
      this.$refs.BusinessProcess.reset();
      this.$refs.CompletedNode.reset();
      this.$refs.ToBeProcessedNode.reset();
      this.$refs.RuleName.reset();
      this.$refs.EnableOrDisable.reset();
      //this.$refs.BusinessCategory.reset();
      this.$refs.Brand.reset();
      this.$refs.ServiceBigClass.reset();
    }
  },
  data() {
    return {
      tableHeight: "",
      input: "",
      input2: "",
      toggleParam: false,
      width: "900px",
      heigh: "580px",
      dialogVisible: false,
      dialogVisible3: false,
      form: {
        task: ""
      },
      UpdateRemind: { value: "" },
      BProcess: { value: "" },
      CNode: { value: "" },
      TNode: { value: "" },
      RName: { input: "" },
      EnableDisable: { value: "" },
      SBigClass: { value: "" },
      BCategory: { value: "" },
      Bd: { value: "" },
      WToSupervise: { value: "" },
      formLabelWidth: "100px",
      tabledatas: {
        colnames: [
          { label: "品牌", value: "carBrandName" },
          { label: "规则名称", value: "ruleName" },
          { label: "业务流程", value: "bussWfName" },
          { label: "已完成节点", value: "begNodeName" },
          { label: "待处理节点", value: "endNodeName" },
          { label: "分类", value: "ruleTypeName" },
          { label: "开始时间", value: "begTime" },
          { label: "结束时间", value: "endTime" },
          { label: "是否启用", value: "isEnableName" },
          { label: "是否督办", value: "isRiseName" }
        ],
        tableData: [
          
        ],
        queryObj: {
          // .后面是服务编码，.前面固定写死
          apiConfig: crmApis.csDbUpdateRemindSetMQueryFindAll,
          apiQueryRow: [
            "carBrandName",
            "carBrandCode",
            "ruleName",
            "ruleId",
            "bussWf",
            "bussWfName",
            "begNode",
            "begNodeName",
            "endNode",
            "endNodeName",
            "isEnable",
            "isEnableName",
            "isRiseName",
            "isRise",
            "updateControlId"
          ],
          params: {
            oemCode: this.$store.getters.orgInfo.OEM_CODE,
            groupCode: this.$store.getters.orgInfo.GROUP_CODE
          }
        },
        pageSize: 10,
        pageIndex: 1,
        total: 0
      },
      child: {
        input: ""
      }
    };
  }
};
</script>

