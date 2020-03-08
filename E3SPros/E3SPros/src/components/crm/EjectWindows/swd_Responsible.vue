<template>
  <section>
    <el-form-item label="责任人">
      <el-input
        readonly="readonly"
        v-model="input"
        placeholder="点击选择责任人"
        suffix-icon="el-icon-search"
        @click.native="showdialog()"
        :disabled="isdisabled"
      ></el-input>
    </el-form-item>

    <!-- 弹窗 -->
    <el-dialog title="责任人" :visible.sync="dialogVisible" width="900px" :append-to-body="true" center>
      <div class="filter-container filter-title-crm">
        查询条件
        <div style="float:right">
          <el-button type="primary" size="small" @click="fetchData()">查询</el-button>
          <!-- <el-button size="small" @click="handleSelect">确认</el-button> -->
          <el-button size="small">新增</el-button>
          <el-button size="small" @click="reset">重置</el-button>
          <el-button size="small">导入</el-button>
        </div>
      </div>
      <div class="filter-container filter-params-crm">
        <el-form>
          <el-row>
            <el-col :span="8">
              <BusinessProcess :BusinessProcess="business" ref="BusinessProcess"></BusinessProcess>
            </el-col>
            <el-col :span="8">
              <Brand :Brand="brand" ref="Brand"></Brand>
            </el-col>
            <el-col :span="8">
              <ResponsibleDistrict :ResponsibleDistrict="respondistr" ref="ResponsibleDistrict"></ResponsibleDistrict>
            </el-col>
          </el-row>

          <el-row>
            <el-col :span="8">
              <DutyPeople :DutyPeople="agentData" ref="DutyPeople"></DutyPeople>
            </el-col>
            <el-col :span="8">
              <EnableOrDisable :EnableOrDisable="enable" ref="EnableOrDisable"></EnableOrDisable>
            </el-col>
          </el-row>
        </el-form>
      </div>
      <div class="filter-container filter-title-crm">查询结果</div>
      <Table :tabledatas="tabledata" ref="table" />
    </el-dialog>
  </section>
</template>

<script>
import Table from "@/components/crm/table/Table";
// import AgentAbbreviation from "@/components/crm/textbox/Public/Agent/AgentAbbreviation";
import BusinessProcess from "@/components/crm/Select/Common/BusinessProcess";
import Brand from "@/components/crm/Select/Common/ResponsibleArea/Brand";
import ResponsibleDistrict from "@/components/crm/Select/Common/ResponsibleDistrict";
import DutyPeople from "@/components/crm/textbox/Complaint/DutyPeople";
import EnableOrDisable from "@/components/crm/Select/Whether/EnableOrDisable";
import { crmApis } from "@/api/graphQLApiList/crm";

export default {
  name: "swd_Responsible",
  components: {
    Table,
    // AgentAbbreviation,
    BusinessProcess,
    Brand,
    ResponsibleDistrict,
    DutyPeople,
    EnableOrDisable
  },
  props: {
    swd_Responsible: {
      input: String,
      isdisabled: Boolean,
      dialogVisible: Boolean
    }
  },
  data() {
    return {
      input: "",
      width: "850px",
      dialogVisible: false,
      isdisabled: this.swd_Responsible.isdisabled,
      business:{
        value:""
      },
      brand:{
        value:""
      },
      respondistr:{
        value:""
      },

      agentData: {
        input: ""
      },
      enable:{
        value:""
      },
      form: {
        name: "",
        region: ""
      },
      formLabelWidth: "100px",

      tabledata: {
        // 操作列
        ismuti: false,
        isoperat: false,
        havedistrbute: false,
        haveEdit: false,
        haveDel: false,
        colnames: [
          { label: "问卷编码", value: "paperName" },
          { label: "业务类型", value: "questionName" },
          { label: "问卷类别", value: "maxCount" },
          { label: "问卷名称", value: "questionType" },
          { label: "题目数量", value: "questionCode" },
          { label: "问卷版本号", value: "questionId" },
          { label: "是否生效", value: "subTe" },
          { label: "状态", value: "subType" },
          { label: "创建人", value: "creator" },
          { label: "创建时间", value: "createdDate" },
          { label: "修改人", value: "modifier" },
          { label: "最后修改时间", value: "lastUpdatedDate" }
        ],
        queryObj: {
          // .后面是服务编码，.前面固定写死
          apiConfig: crmApis.pcBuQyQuestionQueryFindAll,
          apiQueryRow: [
            "iqyTopic",
            "questionName",
            "maxCount",
            "questionType",
            "creator",
            "createdDate",
            "modifier",
            "lastUpdatedDate",
            "questionCode",
            "questionId",
            "subType"
          ],
          params: {
            column1: "",
            iqyTopic: "",
            quesType: ""
          }
        }
      }
    };
  },
  methods: {
    showdialog: function() {
      let that = this;
      console.log("进来了showdialog方法");
      if (this.swd_Responsible.dialogVisible == false) {
        that.dialogVisible = this.swd_Responsible.dialogVisible;
      } else {
        that.dialogVisible = true;
      }
    },
    query: function() {
      this.tabledata.params.code = this.$refs.proStatus.value; //从下拉框组件里取值传进网格组件中
      this.$refs.table.getData();
    }, //查询网格，实际方法在组件里，这里只是调了一下
    handleSelect: function() {
      let that = this;
      that.input = this.$refs.table.rowData.name;
      that.dialogVisible = false;
    },
    reset: function() {
      this.input=""
      if(this.$refs.BusinessProcess!=undefined)
      {
        this.$refs.BusinessProcess.reset();
      }
      if(this.$refs.Brand!=undefined)
      {
        this.$refs.Brand.reset();
      }
      if(this.$refs.ResponsibleDistrict!=undefined)
      {
        this.$refs.ResponsibleDistrict.reset();
      }
      if(this.$refs.DutyPeople!=undefined)
      {
        this.$refs.DutyPeople.reset();
      }
      if(this.$refs.EnableOrDisable!=undefined)
      {
        this.$refs.EnableOrDisable.reset();
      }
    },
    getData(){
      let that=this;
      that.input=this.swd_Responsible.input
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
  width: 98%;
}
.dialog .el-dialog__body {
  padding: 10px 10px;
}
.dmo-form-inline .btton {
  float: right;
} */
</style>



