<template>
  <div>
    <el-form>
      <el-form-item label="销售车型">
        <el-input
          readonly="readonly"
          v-model="input"
          placeholder="点击选择销售车型"
          suffix-icon="el-icon-s-unfold"
          @click.native="showdialog()"
        ></el-input>
      </el-form-item>
    </el-form>

    <!-- 车型弹窗 -->
    <el-dialog title="车型" :visible.sync="dialogVisible" append-to-body width="900px" center>
      <div class="filter-container filter-title">
        查询条件
        <div style="float:right">
          <el-button type="primary" @click="query">查询</el-button>
          <el-button @click="reset">重置</el-button>
        </div>
      </div>
      <div class="filter-container filter-params">
        <el-form>
          <el-row>
            <el-col :span="8">
              <sct_CarBrand :sct_CarBrand="child" ref="sct_CarBrand"></sct_CarBrand>
            </el-col>
            <el-col :span="8">
              <CarSeries :CarSeries="child" ref="CarSeries"></CarSeries>
            </el-col>
            <el-col :span="8">
              <CarModel :CarModel="child" ref="CarModel"></CarModel>
            </el-col>
          </el-row>
        </el-form>
      </div>
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
        <el-table-column type="index" label="序号" width="55"></el-table-column>
        <el-table-column label="选择" align="center">
          <template slot-scope="scope">
            <el-button size="mini" @click="handle(scope.$index, scope.row)">选择</el-button>
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
      <!-- 自定义网格结束 -->
    </el-dialog>
    <!-- 车型弹窗结束 -->
  </div>
</template>

<script>
import Table from "@/components/crm/table/Table";
import sct_CarBrand from "@/components/crm/Select/Common/sct_CarBrand";
import CarSeries from "@/components/crm/textbox/Public/carInfo/CarSeries";
import CarModel from "@/components/crm/textbox/Public/carInfo/CarModel";

export default {
  name: "SalesCar",
  components: {
    Table,
    sct_CarBrand,
    CarSeries,
    CarModel
  },

  data() {
    return {
      input: "",
      width: "900px",
      height: "580px",
      dialogVisible: false,
      form: {
        name: "",
        region: ""
      },
      child: {
        option: "",
        input: ""
      },
      formLabelWidth: "100px",
      tabledatas: {
        flag: true,
        colnames: [
          { label: "车辆品牌", value: "date" },
          { label: "车系编码", value: "name" },
          { label: "车系名称", value: "address" },
          { label: "车型编码", value: "date" },
          { label: "车型名称", value: "date" },
          { label: "车型配置编码", value: "name" },
          { label: "车型配置名称", value: "address" }
        ],
        params: { code: "1" },
        isoperat: false,
        url: "/table",
        havedistrbute: false,
        haveEdit: false,
        haveDel: false
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
    handle: function(index, rowData) {
      let that = this;
      //that.$router.push({ name: "crmAgentDMREpage", params: rowData });
    },
    reset: function() {
      this.$refs.sct_CarBrand.reset();
      this.$refs.CarSeries.reset();
      this.$refs.CarModel.reset();
    },
    resett() {
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
.el-dialog{
  z-index: 1;
}
</style>



