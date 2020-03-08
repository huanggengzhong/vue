<template>
  <section>
    <el-form-item label="回访任务">
      <el-input
        readonly="readonly"
        v-model="input"
        placeholder="点击选择回访任务"
        suffix-icon="el-icon-s-unfold"
        @click.native="showdialog()"
      ></el-input>
    </el-form-item>
    <el-dialog :visible.sync="dialogVisible" :width="width" class="dialog">
      <div class="filter-container filter-title">
        查询条件
        <div style="float:right">
          <el-button type="primary" @click="query">查询</el-button>
          <el-button type="primary" @click="handleSelect">确定</el-button>
        </div>
      </div>
      <div class="filter-container filter-params">
        <el-form :model="form" label-position="right">
          <el-row>
            <el-col :span="8">
              <el-form-item label="回访任务">
                <el-input v-model="form.task" autocomplete="off"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </div>
      <div class="filter-container filter-title">查询结果</div>
      <Table v-bind:tabledatas="tabledata" ref="table"></Table>
    </el-dialog>
  </section>
</template>

<script>
import Table from "@/components/crm/table/Table";
export default {
  name: "ReturnVisitTask",
  components: {
    Table
  },
  props: {
    fromDatas: {
      input: String
    }
  },
  data() {
    return {
      input: "",
      width: "800px",
      dialogVisible: false,
      form: {
        task: ""
      },
      formLabelWidth: "100px",
      tabledata: {
        flag: true,
        colnames: [{ label: "回访任务", value: "date" }],
        params: { code: "1" },
        isoperat: false,
        url: "/table",
        havedistrbute: false,
        haveEdit: false,
        haveDel: false
      },
      requst: {
        typeParam: "",
        apiServiceCode: "",
        apiQueryRow: ""
      }
    };
  },
  methods: {
    showdialog: function() {
      let that = this;
      console.log("进来了");
      that.dialogVisible = true;
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
      let that = this;
      that.input = "";
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



