<template>
  <div>
      <el-form-item :label="labelname" prop="inteTypeCode.input">
        <el-input
          readonly="readonly"
          v-model="input"
          placeholder="点击选择意向车型"
          suffix-icon="el-icon-s-unfold"
          @click.native="showdialog()"
        ></el-input>
      </el-form-item>
    <el-dialog :title="labelname" :visible.sync="dialogVisible" :append-to-body="true" @sentData="sendCode" width="900px" center>
      <div class="filter-container filter-title-crm">
        查询条件
        <div style="float:right">
          <el-button type="primary" size="small" @click="query">查询</el-button>
          <el-button size="small" @click="sendCode">确认</el-button>
          <el-button size="small" @click="reset">重置</el-button>
        </div>
      </div>
      <div class="filter-container filter-params-crm">
      <el-form>
        <el-row>
          <el-col :span="12">
            <el-form-item label="车型配置名称">
                <el-input v-model="cxConfig" placeholder="请输入" suffix-icon="el-icon-search"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
          </el-col>
          <el-col :span="8">
          </el-col>
        </el-row>
      </el-form>
      </div>
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
      ref="multipleTable"
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
    </el-dialog>
  </div>
</template>

<script>
import { crmApis } from "@/api/graphQLApiList/crm";
import { requestGraphQL } from "@/api/commonRequest";
import sct_CarBrand from "@/components/crm/Select/Common/sct_CarBrand";
import CarSeries from "@/components/crm/textbox/Public/carInfo/CarSeries";
import CarModel from "@/components/crm/textbox/Public/carInfo/CarModel";

export default {
  name: "IntentionalModel",
  components: {
    sct_CarBrand,
    CarSeries,
    CarModel
  },
  props: {
    IntentionalModel: {
      input: String,
      pcode: String,
      dialogVisible: Boolean,
      labelname: {
        type:String,
        default:"意向车型"
      }
    }
  },
  data() {
    return {
      rowData: { 
        smallCarTypeId:"",
        smallCarTypeCode: "",
        carConfigId: "",
        carConfigCn: "",
        carBrandCode:"",
        carBrandCn:"",
      },
      input: this.IntentionalModel.input,
      pcode: this.IntentionalModel.pcode,
      width: "800px",
      dialogVisible: false,
      labelname:(this.IntentionalModel.labelname==undefined?"意向车型":this.IntentionalModel.labelname),
      cxConfig: "",
      tabledatas: {
        colnames: [
          { label: "车辆品牌", value: "carBrandCn" },
          { label: "车系编码", value: "mdmVeCarSeriesExtend.carSeriesCode" },
          { label: "车系名称", value: "mdmVeCarSeriesExtend.carSeriesCn" },
          { label: "车型编码", value: "mdmSmallCarTypeExtend.smallCarTypeCode" },
          { label: "车型名称", value: "mdmSmallCarTypeExtend.smallCarTypeCn" },
          { label: "车型配置编码", value: "carConfigCode" },
          { label: "车型配置名称", value: "carConfigCn" }
        ],
        tableData: [
        ],
        queryObj: {
          // .后面是服务编码，.前面固定写死
          apiConfig: crmApis.mdmVeCarConfigQueryListForPage,
          apiQueryRow: [
            "carBrandCn",
            "carBrandCode",
            "carConfigCode",
            "carConfigCn",
            "carSeriesId",
            "carConfigId",
            "smallCarTypeId",
            "mdmVeCarSeriesExtend{carSeriesCode}",
            "mdmVeCarSeriesExtend{carSeriesCn}",
            "mdmSmallCarTypeExtend{smallCarTypeCode}",
            "mdmSmallCarTypeExtend{smallCarTypeCn}"
          ],
          params: {
            carConfigCn:"",
            carSeriesId:"",
            isEnable:"1"
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
      if (this.IntentionalModel.dialogVisible == false) {
        that.dialogVisible = this.IntentionalModel.dialogVisible;
      } else {
        that.dialogVisible = true;
      }
    },
    query: function() {
      let that = this;
      that.tabledatas.queryObj.params.carSeriesId=that.IntentionalModel.pcode
      that.tabledatas.queryObj.params.carConfigCn=that.cxConfig
      let queryObj = {
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
          //&&response.data[queryObj.apiConfig.ServiceCode].rows != ""
        ) {
          that.tabledatas.tableData=response.data[queryObj.apiConfig.ServiceCode].rows
          that.tabledatas.pageindex =response.data[queryObj.apiConfig.ServiceCode].pageindex;
          that.tabledatas.total =response.data[queryObj.apiConfig.ServiceCode].records;
        }
      });
    },
    handleSelect: function() {
      let that = this;
      that.input = this.$refs.table.rowData.name;
      that.dialogVisible = false;
    },
    reset: function() {
      let that = this;
      that.cxConfig=""
    },
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
    changepage(index){
      let that=this
      that.tabledatas.pageindex=index
      this.query()
    },
    //赋值事件
    getData: function() {
      let that = this;
      that.input = this.IntentionalModel.input;
      that.pcode = this.IntentionalModel.pcode;
      this.query();
    },
    //行选择事件
    SelectH: function(row) {
      let that = this;
      that.rowData.smallCarTypeId = row.smallCarTypeId;
      that.rowData.smallCarTypeCode = row.mdmSmallCarTypeExtend.smallCarTypeCode;
      that.rowData.carConfigId = row.carConfigId;
      that.rowData.carConfigCn = row.carConfigCn;//smallCarTypeId
      that.rowData.carBrandCode=row.carBrandCode;
       that.rowData.carBrandCn=row.carBrandCn;
    },
    sendCode(){
      let that = this;
      that.dialogVisible = false;
      that.input=that.rowData.carConfigCn
      var cityTemp = [];
      var cityObj = {};
      cityObj["smallCarTypeId"] = that.rowData.smallCarTypeId;
      cityObj["smallCarTypeCode"] = that.rowData.smallCarTypeCode;
      cityObj["carConfigId"] = that.rowData.carConfigId;
      cityObj["carConfigCn"] = that.rowData.carConfigCn;
      cityObj["carBrandCode"] = that.rowData.carBrandCode;
      cityObj["carBrandCn"] = that.rowData.carBrandCn;
      cityTemp.push(cityObj);
      that.$emit('CatData', cityTemp);
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
}
.el-table td div {
  padding-left: 9px;
}
.el-checkbox{
  padding-left: 6px;
} */
</style>



