<template>
  <section>
    <el-form-item label="发起模板">
      <el-input
        readonly="readonly"
        v-model="input"
        placeholder="点击选择发起模板"
        suffix-icon="el-icon-s-unfold"
        @click.native="showdialog()"
      ></el-input>
    </el-form-item>

    <!-- 短信模板弹窗 -->
    <el-dialog title="发起模板" :visible.sync="dialogVisible" width="900px" center>
      <div class="filter-container filter-title">
        查询条件
        <div style="float:right">
          <el-button type="primary" @click="query">查询</el-button>
          <el-button @click="handleSelect">确认</el-button>
          <el-button @click="reset">重置</el-button>
        </div>
      </div>
      <div class="filter-container filter-params">
        <el-form>
          <el-row>
            <el-col :span="8">
              <ModelName ref="ModelName" :ModelName="child"></ModelName>
            </el-col>
            <el-col :span="8">
              <ModelContentText ref="ModelContentText" :ModelContentText="child"></ModelContentText>
            </el-col>
          </el-row>
        </el-form>
      </div>
      <div class="filter-container filter-title">查询结果</div>
      <Table v-bind:tabledatas="tabledata" ref="table"></Table>
    </el-dialog>
    <!-- 短信模板弹窗结束 -->
  </section>
</template>

<script>
import { crmApis } from "@/api/graphQLApiList/crm";
import Table from "@/components/crm/table/Table";
import ModelName from "@/components/crm/textbox/Public/Message/ModelName";
import ModelContentText from "@/components/crm/textbox/Public/Message/ModelContentText";
export default {
  name: "MessageModelFQ",
  components: {
    Table,
    ModelName,
    ModelContentText
  },
  props: {
    MessageModelFQ: {
      input: String,
      dialogVisible: Boolean
    }
  },
  data() {
    return {
      input: this.MessageModelFQ.input,
      width: "800px",
      dialogVisible: false,
      form: {
        name: "",
        region: ""
      },
      formLabelWidth: "100px",
      child: {
        input: ""
      },

      tabledata: {
        flag: true,
        colnames: [
          { label: "模板名称", value: "templateName" },
          { label: "短信模板内容", value: "templateContent" },
          { label: "状态", value: "isEnable" }
        ],
        isoperat: false,
        url: "/table",
        havedistrbute: false,
        haveEdit: false,
        haveDel: false,
        data: [
          {
            date: "2016-05-01",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1518 弄"
          },
          {
            date: "2016-05-08",
            name: "李小猪",
            address: "上海市普陀区金沙江路 1518 弄"
          },
          {
            date: "2016-05-06",
            name: "陈小猫",
            address: "上海市普陀区金沙江路 1518 弄"
          },
          {
            date: "2016-05-07",
            name: "陆小狗",
            address: "上海市普陀区金沙江路 1518 弄"
          }
        ],
        queryObj: {
          // .后面是服务编码，.前面固定写死
          apiConfig: crmApis.NavigateMap001,
          apiQueryRow: [
            "templateName",
            "templateContent",
            "isEnable"
          ],
          params: {
            templateName: "",
            templateContent: ""
          }
        },
      }
    };
  },
  methods: {
    showdialog: function() {
      let that = this;
      console.log("进来了");
      // that.dialogVisible = true;
      if (this.MessageModelFQ.dialogVisible == false) {
        that.dialogVisible = this.MessageModelFQ.dialogVisible;
      } else {
        that.dialogVisible = true;
      }
    },
    query: function() {
      this.tabledata.queryObj.params.templateName = this.$refs.ModelName.input;
      this.tabledata.queryObj.params.templateContent=this.$refs.ModelContentText.input;
      this.$refs.table.getData();
    }, //查询网格，实际方法在组件里，这里只是调了一下
    reset: function() {
      this.$refs.ModelName.reset();
      this.$refs.ModelContentText.reset();
    },
    handleSelect: function() {
      let that = this;
      that.input = this.$refs.table.rowData.name;
      that.dialogVisible = false;
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



