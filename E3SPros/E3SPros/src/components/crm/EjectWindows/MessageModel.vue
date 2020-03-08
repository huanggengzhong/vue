<template>
  <section>
    <el-form-item label="短信模板">
      <el-input
        readonly="readonly"
        v-model="input"
        placeholder="点击选择短信模板"
        suffix-icon="el-icon-s-unfold"
        @click.native="showdialog()"
      ></el-input>
    </el-form-item>

    <!-- 短信模板弹窗 -->
    <el-dialog
      :visible.sync="dialogVisible"
      width="900px"
      modal-append-to-body
      append-to-body
      class="dialog"
      title="短信模板"
    >
      <div class="filter-container-crm filter-title-crm">
        <el-row>
          <el-col :span="4" style="padding:0">查询条件</el-col>
          <el-col :span="20">
            <div class="filter-container-crm filter-button">
              <el-button type="primary" @click.native="query">查询</el-button>
              <el-button @click.native="handleSelect">确认</el-button>
              <el-button @click.native="reset">重置</el-button>
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="filter-container filter-params">
        <el-form :model="form" label-position="right">
          <el-row>
            <el-col :span="22">
              <el-col :span="9">
                <ModelName ref="ModelName" :ModelName="modn"></ModelName>
              </el-col>
              <el-col :span="9">
                <ModelContentText ref="ModelContentText" :ModelContentText="modc"></ModelContentText>
              </el-col>
            </el-col>
          </el-row>
        </el-form>
      </div>
      <Table :tabledatas="tabledata" ref="table"></Table>
    </el-dialog>
    <!-- 短信模板弹窗结束 -->
  </section>
</template>

<script>
import { crmApis } from "@/api/graphQLApiList/crm";
import ModelName from "@/components/crm/textbox/Public/Message/ModelName";
import ModelContentText from "@/components/crm/textbox/Public/Message/ModelContentText";
import Table from "@/components/crm/table/Table";

export default {
  name: "MessageModel",
  props: {
    MessageModel: {
      input: String,
      dialogVisible: Boolean
    }
  },
  components: {
    ModelName,
    ModelContentText,
    Table
  },
  data() {
    return {
      input: "",
      width: "900px",
      dialogVisible: false,
      form: {
        name: "",
        region: ""
      },
      formLabelWidth: "100px",
      modn: {
        input: ""
      },
      modc: {
        input: ""
      },

      tabledata: {
        flag: true,
        colnames: [
          { label: "模板名称", value: "templateName" },
          { label: "短信模板内容", value: "templateContent" },
          { label: "是否启用", value: "isEnable" }
        ],
        data:[],
        queryObj: {
          // .后面是服务编码，.前面固定写死
          apiConfig: crmApis.csDbTemplateQueryFindAll, //短信模板查询
          apiQueryRow: ["templateContent", "templateName", "isEnable","templateId"],
          params: {
            ModelName: "",
            ModelContentText: ""
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
      console.log("进来了");
      if (this.MessageModel.dialogVisible == false) {
        that.dialogVisible = this.MessageModel.dialogVisible;
      } else {
        that.dialogVisible = true;
      } //使弹出框显示
    },
    query: function() {
      //从下拉框组件里取值传进网格组件中
      this.tabledata.queryObj.params.ModelName = this.$refs.ModelName.value;
      this.tabledata.queryObj.params.ModelContentText = this.$refs.ModelContentText.value;
      this.$refs.table.getData();
    }, //查询网格，实际方法在组件里，这里只是调了一下
    reset: function() {
      this.$refs.ModelName.reset();
      this.$refs.ModelContentText.reset();
    },
    handleSelect: function() {
      let that = this;
      that.input = this.$refs.table.rowData.templateContent;
      that.dialogVisible = false;
      this.$emit("Cetdata",this.$refs.table.rowData)
    }
  }
};
</script>

<style scoped>
.dmo-form-inline {
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
}
</style>