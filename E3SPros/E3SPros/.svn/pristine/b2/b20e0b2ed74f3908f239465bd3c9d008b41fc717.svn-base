/*
 * @Author: 
 * @Date: 
 * @Last Modified by: //此处填修改人名字
 * @Last Modified time: 2019-08-27 16:39:10
 */

<template>
  <div>
    <el-form-item label="意向车系" prop="inteSeriesCode.input">
      <el-input
        readonly="readonly"
        v-model="input"
        placeholder="点击选择意向车系"
        suffix-icon="el-icon-search"
        @click.native="showdialog()"
      ></el-input>
    </el-form-item>

    <el-dialog
      title="意向车系"
      :visible.sync="dialogVisible"
      :append-to-body="true"
      :width="width"
      @sentData="sendCode"
      class="dialog"
    >
      <div class="filter-container filter-title-crm">
        查询条件
        <div style="float:right">
          <el-button type="primary" @click="query">查询</el-button>
          <el-button @click="sendCode">确认</el-button>
          <el-button @click="reset">重置</el-button>
        </div>
      </div>
      <div class="filter-container filter-params-crm">
        <el-form>
          <el-row>
            <el-col :span="8">
              <sct_CarBrand :sct_CarBrand="cxbrand" ref="sct_CarBrand"></sct_CarBrand>
            </el-col>
            <el-col :span="8">
              <CarSeries :CarSeries="child" ref="CarSeries"></CarSeries>
            </el-col>
          </el-row>
        </el-form>
      </div>
      <!-- 自定义网格开始 -->
      <div class="filter-container filter-title-crm">查询结果</div>
      <el-table
        :data="tabledatas.tableData"
        @current-change="SelectH"
        highlight-current-row
        style="width: 100%;height:330px"
        v-loading.body="false"
        element-loading-text="Loading"
        border
        fit
      >
        <el-table-column type="index" label="序号" width="55"></el-table-column>
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
      <!-- 自定义网格结束 -->
    </el-dialog>
  </div>
</template>

<script>
import { crmApis } from "@/api/graphQLApiList/crm";
import { requestGraphQL } from "@/api/commonRequest";
import sct_CarBrand from "@/components/crm/Select/Common/sct_CarBrand";
import CarSeries from "@/components/crm/textbox/Public/carInfo/CarSeries";
import { debuglog } from "util";

export default {
  name: "IntentionalCar",
  props: {
    IntentionalCar: {
      input: String,
      // value:String,
      dialogVisible: Boolean
    }
  },
  components: {
    sct_CarBrand,
    CarSeries
  },

  data() {
    return {
      rowData: {
        carBrandCode: "",
        carSeriesId: "",
        carSeriesCode: "",
        carSeriesCn: ""
      },
      input: this.IntentionalCar.input,
      width: "900px",
      height: "580px",
      dialogVisible: false,
      form: {
        name: "",
        region: ""
      },
      child: {
        input: ""
      },
      cxbrand: {
        value: ""
      },
      formLabelWidth: "100px",
      isoperat: false,
      url: "/table",
      havedistrbute: false,
      haveEdit: false,
      haveDel: false,
      tabledatas: {
        //flag: true,
        colnames: [
          {
            label: "车辆品牌",
            value: "mdmCarBrandExtend.carBrandCn"
          },
          { label: "车系编码", value: "carSeriesCode" },
          { label: "车系名称", value: "carSeriesCn" }
        ],

        tableData: [],
        queryObj: {
          apiConfig: crmApis.mdmVeCarSeriesQueryListForPage,
          apiQueryRow: [
            "carSeriesCode",
            "carSeriesCn",
            "carSeriesId",
            "carBrandCode"
          ],
          params: {
            carBrandCode: "",
            carSeriesCn: "",
            isEnable: "1"
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
      console.log("进来了")
      // that.dialogVisible = true;
      if (this.IntentionalCar.dialogVisible == false) {
        that.dialogVisible = this.IntentionalCar.dialogVisible;
      } else {
        that.dialogVisible = true;
      }
    },
    query: function() {
      let that = this;
      let str = "mdmCarBrandExtend{" + "carBrandCn}";
      that.tabledatas.queryObj.apiQueryRow.push(str);
      // 查询参数
      this.$refs.sct_CarBrand?that.tabledatas.queryObj.params.carBrandCode=that.$refs.sct_CarBrand.value:that.tabledatas.queryObj.params.carBrandCode=""
      this.$refs.CarSeries?that.tabledatas.queryObj.params.carSeriesCn=that.$refs.CarSeries.input:that.tabledatas.queryObj.params.carSeriesCn = ""
      
      // if(that.tabledatas.queryObj.params.carBrandCode==""&&that.tabledatas.queryObj.params.carSeriesCn==""){
      //   that.$crmcf.showMessages(that,'error','请填写意向品牌或意向车系后进行查询')
      //   return
      // }

      let queryObj = {
        type: "query",
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
        if (
          response.data[queryObj.apiConfig.ServiceCode].result == "1"
          // &&response.data[queryObj.apiConfig.ServiceCode].rows != ""
        ) {
          that.tabledatas.tableData =
            response.data[queryObj.apiConfig.ServiceCode].rows;
          that.tabledatas.pageindex =
            response.data[queryObj.apiConfig.ServiceCode].pageindex;
          that.tabledatas.total =
            response.data[queryObj.apiConfig.ServiceCode].records;
        } else {
          that.$notify.error({
            title: "错误",
            message: response.data[queryObj.apiConfig.ServiceCode].msg
          });
        }
      });
    },
    handleSelect: function() {
      let that = this;
      that.input = this.rowData.name;
      that.dialogVisible = false;
    },
    reset: function() {
      if (
        this.$refs.sct_CarBrand == undefined &&
        this.$refs.CarSeries == undefined
      ) {
      } else {
        this.$refs.sct_CarBrand.reset();
        this.$refs.CarSeries.reset();
      }
    },
    resetgz: function() {
      let that = this;
      that.input = "";
    },
    resetxsd: function() {
      let that = this;
      that.value = "";
    },
    //赋值事件
    getData: function() {
      let that = this;
      that.input = this.IntentionalCar.input;
      if(that.dialogVisible){
this.query();
      } 
    },
    //行选择事件
    SelectH: function(row) {
      let that = this;
      that.rowData.carBrandCode = row.carBrandCode;
      that.rowData.carSeriesId = row.carSeriesId;
      that.rowData.carSeriesCode = row.carSeriesCode;
      that.rowData.carSeriesCn = row.carSeriesCn;
    },
    sendCode() {
      let that = this;
      that.dialogVisible = false;
      that.input = that.rowData.carSeriesCn;
      var cityTemp = [];
      var cityObj = {};
      cityObj["carBrandCode"] = that.rowData.carBrandCode;
      cityObj["carSeriesId"] = that.rowData.carSeriesId;
      cityObj["carSeriesCode"] = that.rowData.carSeriesCode;
      cityObj["carSeriesCn"] = that.rowData.carSeriesCn;
      cityTemp.push(cityObj);
      that.$emit("CatData", cityTemp);
    },
    // 分页的三个方法
    prev() {
      let that = this;
      if (this.tabledatas.pageindex > 1) {
        that.tabledatas.pageindex = this.tabledatas.pageindex - 1;
        this.query();
      }
    },
    next() {
      let that = this;
      if (true) {
        that.tabledatas.pageindex = this.tabledatas.pageindex + 1;
        this.query();
      }
    },
    changepage(index) {
      let that = this;
      that.tabledatas.pageindex = index;
      this.query();
    }
    // 分页的三个方法结束
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



