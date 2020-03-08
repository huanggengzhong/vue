<template>
  <section>
    <el-form-item label="销售车系">
      <el-input
        readonly="readonly"
        v-model="input"
        placeholder="点击选择销售车系"
        suffix-icon="el-icon-search"
        @click.native="showdialog()"
      ></el-input>
    </el-form-item>



    <!-- 弹窗 -->
    <el-dialog title="销售车系" :visible.sync="dialogVisible" append-to-body width="900px" center>
      <div class="filter-container filter-title">
        查询条件
        <div style="float:right">
          <el-button type="primary" size="small" @click="fetchData()">查询</el-button>
          <el-button size="small" @click="handleSelect">确认</el-button>
          <el-button size="small" @click="reset">重置</el-button>
        </div>
      </div>
      <div class="filter-container filter-params">
        <el-form>
          <el-row>
            <el-col :span="8">
                 <sct_CarBrand ref="sct_CarBrand"></sct_CarBrand>
            </el-col>
            <el-col :span="8">
              <CarSeries :CarSeries = "agentData" ref="CarSeries"></CarSeries>
            </el-col>
          </el-row>
        </el-form>
      </div>
      <div class="filter-container filter-title">查询结果</div>
      <Table :tabledatas="tabledata" ref="table" />
    </el-dialog>



  </section>
</template>

<script>
import Table from "@/components/crm/table/Table";
import Name from "@/components/crm/textbox/Complaint/Name";
import CodeNumber from "@/components/crm/textbox/Complaint/CodeNumber";
import sct_CarBrand from "@/components/crm/Select/Common/sct_CarBrand";
import CarSeries from "@/components/crm/textbox/Public/carInfo/CarSeries"
import { crmApis } from "@/api/graphQLApiList/crm";



export default {
  name: "swd_SalesCarSeries",
  components: {
    Table,
    Name,
    CodeNumber,
    sct_CarBrand,
    CarSeries,
  },
  data() {
    return {
      input: "",
      width: "850px",
      dialogVisible: false,

      agentData:{
        input:''
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
      },

    };
  },
  methods: {
    showdialog: function() {
      let that = this;
      console.log("进来了showdialog方法");
      that.dialogVisible = true;
    },
    query: function() {
      this.tabledata.params.code = this.$refs.proStatus.value; //从下拉框组件里取值传进网格组件中
      this.$refs.table.getData();
    }, //查询网格，实际方法在组件里，这里只是调了一下
    handleSelect:function(){
      let that=this
      that.input=this.$refs.table.rowData.name
      that.dialogVisible = false;
    },
    resett: function() {
      let that = this;
      that.input = "";
    },
    reset: function() {
      this.$refs.sct_CarBrand.reset();
      this.$refs.CarSeries.reset();
    },
  }
};
</script>

<style scoped>
.dmo-form-inline {
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
}
</style>



