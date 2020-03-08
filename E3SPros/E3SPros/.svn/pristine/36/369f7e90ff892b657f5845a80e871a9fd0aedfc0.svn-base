<template>
  <section>
    <el-form-item :label="labelname">
      <el-input
        v-model="input"
        placeholder="点击选择基准车系"
        suffix-icon="el-icon-s-unfold"
        clearable
        @click.native="showdialog($event)"
      ></el-input>
    </el-form-item>
    <el-dialog
      :visible.sync="dialogVisible"
      :width="width"
      @sentData="handleSelect"
      class="dialog"
      :title="labelname"
      center
      modal-append-to-body
      append-to-body
    >
      <div class="filter-container filter-title-crm">
        <el-row>
          <el-col :span="4">查询条件</el-col>
          <el-col :span="20">
            <div class="filter-container filter-button">
              <el-button type="primary" @click.native="query('1')">查询</el-button>
              <el-button @click.native="handleSelect">确认</el-button>
              <el-button @click.native="reset">重置</el-button>
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="filter-container filter-params-crm query-params">
        <el-form label-position="right">
          <el-row>
            <el-col :span="8">
              <CarBrand ref="carbrand" :sct_CarBrand="Carbran" @changeCode="Linkage"></CarBrand>
            </el-col>
            <el-col :span="8">
              <CarName ref="carname" :sct_CarSeries="CarName"></CarName>
            </el-col>
            <el-col :span="8">
              <CarModConf ref="carmodelname" :CarModConf="CarModelName"></CarModConf>
            </el-col>
          </el-row>
        </el-form>
      </div>
      <div class="filter-container filter-title-crm">查询结果</div>
      <Table v-bind:tabledatas="tabledata" ref="table"></Table>
    </el-dialog>
  </section>
</template>

<script>
import Table from "@/components/crm/table/Table";
import CarBrand from "@/components/crm/Select/Common/sct_CarBrand";
import CarName from "@/components/crm/Select/Common/sct_CarSeries";
import CarModConf from "@/components/crm/textbox/Public/carInfo/CarModConf";

import { crmApis } from "@/api/graphQLApiList/crm";
import { requestGraphQL } from "@/api/commonRequest";
export default {
  name: "RelatedBenchmarkCar",
  components: {
    Table,
    CarBrand,
    CarName,
    CarModConf
  },
  props: {
    fromDatas: {
      input: String
    },
    RelatedBenchmarkCar: {
      input: String,
      dialogVisible: Boolean,
      labelname: {
        type:String,
        default:"相关基准车系"
      }
    }
  },
  data() {
    return {
      input: "",
      width: "1000px",
      dialogVisible: false,
      labelname:(this.RelatedBenchmarkCar.labelname==undefined?"相关基准车系":this.RelatedBenchmarkCar.labelname),
      form: {
        task: ""
      },
      Carbran: {
        value: ""
      },
      CarName: {
        value: "",
        pcode: ""
      },
      CarModelName: {
        input: ""
      },
      formLabelWidth: "100px",
      tabledata: {
        flag: true,
        colnames: [
          { label: "车辆品牌", value: "carBrandCn" },
          {
            label: "基准车系编码",
            value:
              "mdmSmallCarTypeExtend.mdmMiddleCarTypeExtend.mdmLargeCarTypeExtend.mdmVeBaseSeriesExtend.baseSeriesCode"
          },
          {
            label: "基准车系",
            value:
              "mdmSmallCarTypeExtend.mdmMiddleCarTypeExtend.mdmLargeCarTypeExtend.mdmVeBaseSeriesExtend.baseCarSeriesCn"
          },
          { label: "车系编码", value: "mdmVeCarSeriesExtend.carSeriesCode" },
          { label: "车系", value: "mdmVeCarSeriesExtend.carSeriesCn" },
          { label: "车型", value: "mdmSmallCarTypeExtend.smallCarTypeCn" },
          { label: "车型配置", value: "carConfigCn" }
        ],
        queryObj: {
          apiConfig: crmApis.mdmVeCarConfigQueryListForPage, //车型配置
          apiQueryRow: [
            "carBrandCn",
            "carBrandCode",
            "mdmSmallCarTypeExtend{mdmMiddleCarTypeExtend{mdmLargeCarTypeExtend{mdmVeBaseSeriesExtend{baseSeriesCode}}}}",
            "mdmSmallCarTypeExtend{mdmMiddleCarTypeExtend{mdmLargeCarTypeExtend{mdmVeBaseSeriesExtend{baseCarSeriesCn}}}}",
            "mdmVeCarSeriesExtend{carSeriesCode}",
            "mdmVeCarSeriesExtend{carSeriesCn}",
            "mdmSmallCarTypeExtend{smallCarTypeCn}",
            "mdmSmallCarTypeExtend{smallCarTypeCode}",
            "carConfigCn",
            "mdmVeCarSeriesExtend{carSeriesCode}",
            "carSeriesId",
            "smallCarTypeId"
          ],
          params: {
            carBrandCode: "",
            carSeriesId: "",
            carConfigCn: ""
          }
        },
        data: []
      }
    };
  },
  methods: {
    showdialog: function(e) {
      let that = this;
      // if(e.path[0]&&JSON.stringify(e.path[0]).indexOf("el-input__clear")!=-1){
      //   console.log('清除责任网点值，不弹窗')
      //   return
      // }
      if(e.target.classList[2]=='el-input__clear'){
        return
      }
      if (this.RelatedBenchmarkCar.dialogVisible == false) {
        that.dialogVisible = this.RelatedBenchmarkCar.dialogVisible;
      } else {
        that.dialogVisible = true;
        that.reset()
        that.$refs.table.tableData=[]
      }
    },
    query: function(firstPage) {
      let that = this;
      this.tabledata.queryObj.params.carBrandCode = this.$refs.carbrand.value; //从下拉框组件里取值传进网格组件中
      this.tabledata.queryObj.params.carSeriesId = this.$refs.carname.value;
      this.tabledata.queryObj.params.carConfigCn = this.$refs.carmodelname.input;
      this.$refs.table.getData(firstPage);
    }, //查询网格，实际方法在组件里，这里只是调了一下
    handleSelect: function() {
      let that = this;
      debugger
      if(this.$refs.table.rowData.mdmSmallCarTypeExtend==null||
         this.$refs.table.rowData.mdmSmallCarTypeExtend.mdmMiddleCarTypeExtend==null||
         this.$refs.table.rowData.mdmSmallCarTypeExtend.mdmMiddleCarTypeExtend.mdmLargeCarTypeExtend==null||
         this.$refs.table.rowData.mdmSmallCarTypeExtend.mdmMiddleCarTypeExtend.mdmLargeCarTypeExtend.mdmVeBaseSeriesExtend==null)
      {
        this.$alert("请选择全不为空的数据", "提示");
        return;
      }
      that.input = this.$refs.table.rowData.mdmSmallCarTypeExtend.mdmMiddleCarTypeExtend.mdmLargeCarTypeExtend.mdmVeBaseSeriesExtend.baseCarSeriesCn;
      this.$emit("getcarBrand", this.$refs.table.rowData);
      that.dialogVisible = false;
    },
    reset: function() {
      let that = this;
      that.input = "";
      if (this.$refs.carbrand != undefined) {
        this.$refs.carbrand.reset();
      }
      if (this.$refs.carname != undefined) {
        this.$refs.carname.reset();
      }
      if (this.$refs.carmodelname != undefined) {
        this.$refs.carmodelname.reset();
      }
    },
    getData() {
      let that = this;
      that.input = this.RelatedBenchmarkCar.input;
    },
    Linkage(val) {
      let that = this;
      that.CarName.pcode = val;
      if (this.$refs.carname != undefined) {
        this.$refs.carname.getData();
      }
    },
    resetinput() {
      this.input = "";
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



