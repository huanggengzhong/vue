<template>
  <section>
    <el-form>
    <el-form-item label="推荐人">
      <el-input
        style="width:229px;"
        readonly="readonly"
        v-model="input"
        placeholder="点击选择推荐人"
        suffix-icon="el-icon-s-unfold"
        @click.native="showdialog()"
      ></el-input>
    </el-form-item>
    </el-form>
    <el-dialog :visible.sync="dialogVisible" :width="width" class="dialog">
      <el-form :model="form" :inline="true" class="dmo-form-inline">
        <CustomerName></CustomerName>
        <PhoneNumber></PhoneNumber>
        <CarBrandNumber></CarBrandNumber>
        <VINCode></VINCode>
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
import CustomerName from "@/components/crm/textbox/Public/customerInfos/txt_CustomerName";
import PhoneNumber from "@/components/crm/textbox/Public/customerInfos/PhoneNumber"
import CarBrandNumber from "@/components/crm/textbox/Public/carInfo/CarBrandNumber"
import VINCode from "@/components/crm/textbox/Public/carInfo/VINCode"
import carBrand from "@/components/crm/Select/Common/sct_CarBrand.vue"
import EngineNumber from "@/components/crm/textbox/Public/customerInfos/EngineNumber.vue"
export default {
  name: "Referrer",
  components: {
    Table,
    CustomerName,
    PhoneNumber,
    carBrand,
    VINCode,
    CarBrandNumber,
    EngineNumber
  },
  props:{
    fromDatas:{
      input:String
    }
  },
  data() {
    return {
      input: "",
      width: "800px",
      dialogVisible: false,
      form: {
        name: "",
        region: ""
      },
      formLabelWidth: "100px",
      tabledata: {
        flag: true,
        colnames: [
          { label: "车辆品牌", value: "date" },
          { label: "客户姓名", value: "name" },
          { label: "电话", value: "address" },
          { label: "会员卡号", value: "date" },
          { label: "车牌号", value: "name" },
          { label: "VIN", value: "address" },
          { label: "车系名称", value: "date" },
          { label: "车型名称", value: "name" },
          { label: "颜色", value: "address" },
          { label: "发动机号", value: "date" },
          { label: "销售日期", value: "name" },
          { label: "交车日期", value: "address" },
          { label: "客户类型", value: "address" },
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
    reset:function(){
      let that=this
      that.input=''
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



