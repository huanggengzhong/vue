<!--
* 描述:提醒规则设置维护
* 创建人: chq2
* 创建时间: 2019-07-24
* 记录：
*  20190724 新建 chq2
-->
<template>
  <div class="app-container app-container-table">
    <div class="filter-container filter-button">
      <el-button type="primary" @click="editTiXing()">维护提醒子规则</el-button>
      <el-button type="primary" @click="save('form')">保存</el-button>
    </div>
    <div class="filter-container filter-params-crm">
      <el-form label-position="right" ref="form">
        <!------------第一行------------>
        <el-row>
          <el-col :span="6" class="crm-label-required">
            <!--提醒升级-->
            <sct_UpdateRemind :sct_UpdateRemind="UpdateRemind" ref="sct_UpdateRemind"></sct_UpdateRemind>
          </el-col>
          <el-col :span="6" class="crm-label-required">
            <!--业务流程-->
            <BusinessProcess :BusinessProcess="BProcess" ref="BusinessProcess"></BusinessProcess>
          </el-col>
          <el-col :span="6" class="crm-label-required">
            <!--开始节点-->
            <sct_BeginCode :sct_BeginCode="BCode" ref="sct_BeginCode"></sct_BeginCode>
          </el-col>
          <!------------第二行------------>
          <el-col :span="6" class="crm-label-required">
            <!--待处理节点-->
            <ToBeProcessedNode :ToBeProcessedNode="TNode" ref="ToBeProcessedNode"></ToBeProcessedNode>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="6" class="crm-label-required">
            <!--规则名称-->
            <RuleName :RuleName="RName" ref="RuleName"></RuleName>
          </el-col>
          <el-col :span="6" class="crm-label-required">
            <!--业务类别-->
            <BusinessCategory :BusinessCategory="BCategory" ref="BusinessCategory"></BusinessCategory>
          </el-col>
          <!------------第三行------------>
          <el-col :span="6" class="crm-label-required">
            <!--品牌-->
            <Brand :Brand="Bd" ref="Brand"></Brand>
          </el-col>
          <el-col :span="6">
            <!--是否特殊追踪-->
            <SpecialTrack :SpecialTrack="STrack" ref="SpecialTrack"></SpecialTrack>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="6" class="crm-label-required">
            <!--紧急度-->
            <Urgency :Urgency="Uy" ref="Urgency"></Urgency>
          </el-col>
          <!------------第四行------------>
          <el-col :span="6" class="crm-label-required">
            <!--提醒开始时段-->
            <RemindStartTime :RemindStartTime="RStartTime" ref="RemindStartTime"></RemindStartTime>
          </el-col>
          <el-col :span="6" class="crm-label-required">
            <!--提醒结束时段-->
            <RemindStopTime :RemindStopTime="RStopTime" ref="RemindStopTime"></RemindStopTime>
          </el-col>
          <el-col :span="6" class="crm-label-required">
            <!--超时时长-->
            <SuperLongTime :SuperLongTime="SLongTime" ref="SuperLongTime"></SuperLongTime>
          </el-col>
        </el-row>
        <!------------第五行------------>
        <el-row>
          <el-col :span="6" class="crm-label-required">
            <!--执行周期-->
            <ExecuteCycle :ExecuteCycle="ECycle" ref="ExecuteCycle"></ExecuteCycle>
          </el-col>
          <el-col :span="6" class="crm-label-required">
            <!--投诉级别-->
            <ComplaintLevel :ComplaintLevel="CLevel" ref="ComplaintLevel"></ComplaintLevel>
          </el-col>
          <el-col :span="6" class="crm-label-required">
            <!--是否启用-->
            <EnableOrDisable :EnableOrDisable="EnableDisable" ref="EnableOrDisable"></EnableOrDisable>
          </el-col>
        </el-row>
        <!------------第六行------------>
        <el-col :span="12" class="long-col crm-label-required">
          <txt_RuleDescription :txt_RuleDescription="RuleDescription" ref="txt_RuleDescription"></txt_RuleDescription>
        </el-col>
        <br />
      </el-form>
    </div>
    <!--提醒子规则 弹出框开始-->
    <el-dialog
      :visible.sync="TiXingChilddialogVisible"
      append-to-body
      width="900px"
      @open="query()"
      class="dialog"
      title="提醒子规则编辑"
    >
      <div class="filter-container filter-title-crm">
        <div style="float:right">
          <el-button type="primary" @click="saveSonRule('sonForm')">保存</el-button>
        </div>
      </div>
      <div class="filter-container filter-params-crm">
        <el-form label-position="right" ref="sonForm">
          <!--第一行-->
          <el-row>
            <el-col :span="8">
              <sct_ObjectType :sct_ObjectType="sct_ObjectType" ref="sct_ObjectType"></sct_ObjectType>
            </el-col>
            <el-col :span="8">
              <RemindWay :RemindWay="RemindWay" ref="RemindWay"></RemindWay>
            </el-col>
            <el-col :span="8">
              <MessageModel :MessageModel="MessageModel" ref="MessageModel"></MessageModel>
            </el-col>
          </el-row>

          <el-row>
            <el-col :span="8">
              <sct_ObjectForm :sct_ObjectForm="sct_ObjectForm" ref="sct_ObjectForm"></sct_ObjectForm>
            </el-col>
          </el-row>
        </el-form>
      </div>
      <el-table
        :data="tabledatas.tableData"
        highlight-current-row
        v-loading.body="false"
        element-loading-text="Loading"
        border
        fit
      >
        <el-table-column type="index" label="序号" width="55"></el-table-column>
        <el-table-column label="操作" align="center" width="150">
          <template slot-scope="scope">
            <el-button size="mini" type="text" @click="handle(scope.$index, scope.row)">编辑</el-button>
            <el-button size="mini" type="text" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
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
    </el-dialog>
    <!--提醒子规则 弹出框结束-->
  </div>
</template>
<script>
import sct_UpdateRemind from "@/components/crm/Select/Complaint/sct_UpdateRemind.vue";
import BusinessProcess from "@/components/crm/Select/Common/BusinessProcess.vue";
import sct_BeginCode from "@/components/crm/Select/Common/sct_BeginCode.vue";
import ToBeProcessedNode from "@/components/crm/Select/Complaint/ReminderUpdate/ToBeProcessedNode.vue";
import RuleName from "@/components/crm/textbox/Public/RuleName.vue";
import BusinessCategory from "@/components/crm/Select/Common/longtimeUnit.vue";
import Brand from "@/components/crm/Select/Common/ResponsibleArea/Brand.vue";
import SpecialTrack from "@/components/crm/Select/Whether/SpecialTrack.vue";
import Urgency from "@/components/crm/Select/RemindUpgradeSet/Urgency.vue";
import RemindStartTime from "@/components/crm/Time/RemindStartTime.vue";
import RemindStopTime from "@/components/crm/Time/RemindStopTime.vue";
import SuperLongTime from "@/components/crm/textbox/SuperLongTime.vue";
import ExecuteCycle from "@/components/crm/textbox/ExecuteCycle.vue";
import ComplaintLevel from "@/components/crm/Select/Complaint/ComplaintLevel.vue";
import EnableOrDisable from "@/components/crm/Select/Whether/EnableOrDisable.vue";
import txt_RuleDescription from "@/components/crm/textbox/Public/txt_RuleDescription.vue";
import sct_ObjectType from "@/components/crm/Select/RemindUpgradeSet/sct_ObjectType.vue";
import RemindWay from "@/components/crm/Select/Common/RemindWay.vue";
import MessageModel from "@/components/crm/EjectWindows/MessageModel.vue";
import sct_ObjectForm from "@/components/crm/Select/Common/sct_ObjectForm.vue";

import { crmApis } from "@/api/graphQLApiList/crm";
import { requestGraphQL } from "@/api/commonRequest";
export default {
  name: "RemindSet",
  components: {
    sct_UpdateRemind,
    BusinessProcess,
    sct_BeginCode,
    ToBeProcessedNode,
    RuleName,
    BusinessCategory,
    Brand,
    SpecialTrack,
    Urgency,
    RemindStartTime,
    RemindStopTime,
    SuperLongTime,
    ExecuteCycle,
    ComplaintLevel,
    EnableOrDisable,
    txt_RuleDescription,
    sct_ObjectType,
    RemindWay,
    MessageModel,
    sct_ObjectForm
  },
  data() {
    return {
      toggleParam: false,
      TiXingChilddialogVisible: false,
      tabledatas: {
        colnames: [
          { label: "对象类型", value: "objectFromName" },
          { label: "提醒方式", value: "remindWayName" },
          { label: "对象形式", value: "objectTypeName" },
          { label: "对象名称", value: "objectTypeName" },
          { label: "信息模板", value: "templateName" }
        ],
        tableData: [
          {
            date: "2016-05-01",
            custName: "王小虎",
            address: "上海市普陀区金沙江路 1518 弄"
          }
        ],
        queryObj: {
          // .后面是服务编码，.前面固定写死
          apiConfig: crmApis.csDbUpdateRemindSetDQueryRemainD,
          apiQueryRow: [
            "objectFrom",
            "remindWay",
            "objectFromName",
            "remindWayName",
            "objectTypeName",
            "objectType",
            "templateName"
          ],
          params: {
            ruleId: this.$route.params.ruleId
          }
        },
        pagesize: 10,
        pageindex: 1,
        total: 0
      },
      //初始化input
      RuleName: {
        input: ""
      },
      SLongTime: {
        input: ""
      },
      ECycle: {
        input: ""
      },
      RuleDescription: {
        input: ""
      },

      //初始化value
      UpdateRemind: {
        value: ""
      },
      BProcess: {
        value: ""
      },
      BCode: {
        value: ""
      },
      TNode: {
        value: ""
      },
      RName: {
        value: ""
      },
      BCategory: {
        value: ""
      },
      Bd: {
        value: ""
      },
      STrack: {
        value: ""
      },
      Uy: {
        value: ""
      },
      RStartTime: {
        value: ""
      },
      RStopTime: {
        value: ""
      },
      CLevel: {
        value: ""
      },
      EnableDisable: {
        value: ""
      },
      //初始化value
      sct_ObjectType: {
        value: ""
      },
      RemindWay: {
        value: ""
      },
      MessageModel: {
        value: ""
      },
      sct_ObjectForm: {
        value: ""
      }
    };
  },
  mounted(){
    this.$nextTick(function() {
      this.init(this.$route.params);
    });
  },
  methods: {
    init(row){
      let that=this
      that.$refs.sct_UpdateRemind.value=row.ruleType
      that.$refs.BusinessProcess.value=row.bussWf
      that.$refs.sct_BeginCode.value=row.begNode
      that.$refs.ToBeProcessedNode.value=row.endNode
      that.$refs.RuleName.input=row.ruleName
      that.$refs.Brand.value=row.carBrandCode
      that.$refs.EnableOrDisable.value=row.isEnable
      that.$refs.UpgradeStartTime.value=row.begTime
      that.$refs.UpgradeStopTime.value=row.endTime
    },
    query: function() {
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
        if (response.data[queryObj.apiConfig.ServiceCode].result == "1") {
          that.tabledatas.tableData =
            response.data[queryObj.apiConfig.ServiceCode].rows;
          that.tabledatas.pageindex =
            response.data[queryObj.apiConfig.ServiceCode].pageindex;
          that.tabledatas.total =
            response.data[queryObj.apiConfig.ServiceCode].records;
        }
      });
    },
    prev(index) {
      let that = this;
      that.tabledatas.pageindex = index;
      that.query();
    },
    next() {
      let that = this;
      that.tabledatas.pageindex = index;
      that.query();
    },
    changepage(index) {
      let that = this;
      that.tabledatas.pageindex = index;
      that.query();
    },
    save(formName) {
      let that = this;
      let flag = false;
      let config = {
        UpdateRemind: [
          true,
          this.$crmcf.crmRegExp("empty"),
          "value",
          that.$refs.sct_UpdateRemind.value,
          "提醒升级",
          "不能为空"
        ],
        BProcess: [
          true,
          this.$crmcf.crmRegExp("empty"),
          "value",
          that.$refs.BusinessProcess.value,
          "业务流程",
          "不能为空"
        ],
        // BCode: [
        //   true,
        //   this.$crmcf.crmRegExp("empty"),
        //   "value",
        //   that.$refs.sct_BeginCode.input,
        //   "开始节点",
        //   "不能为空"
        // ],
        // TNode: [
        //   true,
        //   this.$crmcf.crmRegExp("empty"),
        //   "value",
        //   that.$refs.ToBeProcessedNode.value,
        //   "待处理节点",
        //   "不能为空"
        // ],
        RName: [
          true,
          this.$crmcf.crmRegExp("empty"),
          "input",
          that.$refs.RuleName.input,
          "规则名称",
          "不能为空"
        ],
        // BCategory: [
        //   true,
        //   this.$crmcf.crmRegExp("empty"),
        //   "value",
        //   that.$refs.BusinessCategory.value,
        //   "业务类别",
        //   "不能为空"
        // ],
        Bd: [
          true,
          this.$crmcf.crmRegExp("empty"),
          "value",
          that.$refs.Brand.value,
          "品牌",
          "不能为空"
        ],
        // STrack:[
        //   true,
        //   this.$crmcf.crmRegExp("empty"),
        //   "value",
        //   that.$refs.SpecialTrack.value,
        //   "是否特殊追踪",
        //   "不能为空"
        // ],
        Uy: [
          true,
          this.$crmcf.crmRegExp("empty"),
          "value",
          that.$refs.Urgency.value,
          "紧急度",
          "不能为空"
        ],
        UStartTime: [
          true,
          this.$crmcf.crmRegExp("empty"),
          "value",
          that.$refs.RemindStartTime.value,
          "开始时段",
          "不能为空"
        ],
        UStopTime: [
          true,
          this.$crmcf.crmRegExp("empty"),
          "value",
          that.$refs.RemindStopTime.value,
          "结束时段",
          "不能为空"
        ],
        SLongTime: [
          true,
          this.$crmcf.crmRegExp("empty"),
          "input",
          that.$refs.SuperLongTime.input,
          "超时时长",
          "不能为空"
        ],
        // CLevel:[
        //   true,
        //   this.$crmcf.crmRegExp("empty"),
        //   "value",
        //   that.$refs.ComplaintLevel.value,
        //   "投诉级别",
        //   "不能为空"
        // ],
        EnableDisable: [
          true,
          this.$crmcf.crmRegExp("empty"),
          "value",
          that.$refs.EnableOrDisable.value,
          "是否启用",
          "不能为空"
        ],
        RuleDescription: [
          true,
          this.$crmcf.crmRegExp("empty"),
          "input",
          that.$refs.txt_RuleDescription.input,
          "规则描述",
          "不能为空"
        ]
      };
      this.$crmcf.validForm(that, formName, config, function(flag) {
        if (flag) {
          let variables = {
            //当前中台使用的名称有dataInfo、info，具体查看API文档
            dataInfo: {
              ruleName: that.$refs.RuleName.input,
              bussWf: that.$refs.BusinessProcess.value,
              begNode: that.$refs.sct_BeginCode.value,
              endNode: that.$refs.ToBeProcessedNode.value,
              //ruleClassList:{},
              begTime: that.$refs.RemindStartTime.value,
              endTime: that.$refs.RemindStopTime.value,
              serverLevel: that.$refs.ComplaintLevel.value,
              serverUrgency: that.$refs.Urgency.value,
              //isRise:"",
              inOutTime: that.$refs.SuperLongTime.input,
              inOutUnit: that.$refs.BusinessCategory.value,
              carBrandCode: that.$refs.Brand.value,
              isEnable: that.$refs.EnableOrDisable.value,
              remark: that.$refs.txt_RuleDescription.input,
              updateControlId: "",
              execMode: "0"
            }
          };
          if (that.$route.params.updateControlId) {
            variables.dataInfo.updateControlId =
              that.$route.params.updateControlId;
          }
          that.$crmcf.mutationSumbit(
            that,
            variables,
            crmApis.csDbUpdateRemindSetMMutationRemindSave,
            function() {
              variables.dataInfo.updateControlId = "";
            }
          );
        }
      });
    },
    saveSonRule(formName) {
      let that = this;
      let flag = false;
      let config = {
        sct_ObjectType: [
          true,
          this.$crmcf.crmRegExp("empty"),
          "value",
          that.$refs.sct_ObjectType.value,
          "对象类型",
          "不能为空"
        ],
        RemindWay: [
          true,
          this.$crmcf.crmRegExp("empty"),
          "value",
          that.$refs.RemindWay.value,
          "提醒方式",
          "不能为空"
        ],
        MessageModel: [
          true,
          this.$crmcf.crmRegExp("empty"),
          "input",
          that.$refs.MessageModel.input,
          "短信模板",
          "不能为空"
        ],
        sct_ObjectForm: [
          true,
          this.$crmcf.crmRegExp("empty"),
          "value",
          that.$refs.sct_ObjectForm.value,
          "对象形式",
          "不能为空"
        ]
      };
      this.$crmcf.validForm(that, formName, config, function(flag) {
        if (flag) {
          let variables = {
            //当前中台使用的名称有dataInfo、info，具体查看API文档
            dataInfo: {
              ruleId: that.tabledatas.queryObj.params.ruleId,
              remindWay: that.$refs.RemindWay.value,
              objectType: that.$refs.sct_ObjectForm.value,
              objectFrom: that.$refs.sct_ObjectType.value,
              templateId:that.$refs.MessageModel.input,
              //ruleClassList:{},
            }
          };
          that.$crmcf.mutationSumbit(
            that,
            variables,
            crmApis.csDbUpdateRemindSetDMutationRemindSave,
            function() {
              
            }
          );
        }
      });
    },
    reset: function() {},
    handle: function(index, rowData) {
      let that = this;
    },
    editTiXing: function(index, rowData) {
      let that = this;
      that.TiXingChilddialogVisible = true;
    },
    changeToggleParam() {
      this.toggleParam = !this.toggleParam;
    },
    handleDelete(index,row){
      let that=this
      let queryObj = {
        // api配置
        type:'mutation',
        apiConfig: crmApis.csDbUpdateRemindSetDMutationDelete,
        // 需要调用的API服务配置
        apiServices: [
          {
            //表格中台返回网格的字段
            apiQueryRow: []
          }
        ],
        //条件/实体参数（变量），根据typeParam中的定义配置
        variables: {
          //当前中台使用的名称有dataInfo、info，具体查看API文档
          dataInfo: {
            ruleDId: row.ruleDId
          }
        }
      }
      debugger
      var paramD = that.$getParams(queryObj);
      // 调用中台API方法（可复用）
      requestGraphQL(paramD).then(response => {
        if (
          response.data[queryObj.apiConfig.ServiceCode].result == "1"
        ) {
          that.$message({
              message: '删除成功',
              type: 'success',
              duration: 1000
            });
        }else{
          that.$message({
              message: response.data[queryObj.apiConfig.ServiceCode].msg,
              type: 'error',
              duration: 1000
            });
        }
      });
    },
    handle(index,row){
      let that=this
      that.$refs.sct_ObjectType.value=row.objectFrom
      that.$refs.RemindWay.value=row.remindWay
      that.$refs.MessageModel.input=row.templateName
      that.$refs.sct_ObjectForm.value=row.objectType
    }
  }
};
</script>


