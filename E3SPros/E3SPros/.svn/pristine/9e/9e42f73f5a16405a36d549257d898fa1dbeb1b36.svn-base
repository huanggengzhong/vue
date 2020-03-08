<template>
  <section>
    <el-form>
      <el-form-item>
        服务车系
        <el-input
          style="width:229px;"
          readonly="readonly"
          v-model="input"
          placeholder="点击选择服务车系"
          suffix-icon="el-icon-s-unfold"
          @click.native="showdialog()"
        ></el-input>
      </el-form-item>
    </el-form>
    <el-dialog :visible.sync="dialogVisible" :width="width" class="dialog">
      <el-form :model="form" :inline="true" class="dmo-form-inline">
        <!-- <el-form-item label="活动名称" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>-->

        <sct_CarBrand :sct_CarBrand="child" ref="sct_CarBrand"></sct_CarBrand>
        <CarSeries :CarSeries="child" ref="CarSeries"></CarSeries>
        <el-form-item class="btton">
          <el-button type="primary" @click="handleSelect">确定</el-button>
        </el-form-item>
        <el-form-item class="btton">
          <el-button type="primary" @click="query">查询</el-button>
        </el-form-item>
      </el-form>
      <Table v-bind:tabledatas="tabledata" ref="table"></Table>
    </el-dialog>
  </section>
</template>

<script>
import Table from "@/components/crm/table/Table";
import sct_CarBrand from "@/components/crm/Select/Common/sct_CarBrand";
import CarSeries from "@/components/crm/textbox/Public/carInfo/CarSeries";

export default {
  name: "IntentionalCar",
  components: {
    Table,
    sct_CarBrand,
    CarSeries
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
        input: "",
        option: ""
      },
      formLabelWidth: "100px",
      tabledata: {
        flag: true,
        colnames: [
          { label: "车辆品牌", value: "date" },
          { label: "车系编码", value: "name" },
          { label: "车系名称", value: "address" }
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
    reset: function() {
      this.$refs.sct_CarBrand.reset();
      this.$refs.CarSeries.reset();
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



