<template>
  <div>
    <el-form>
      <el-form-item :label="labelname">
        <el-input
          readonly="readonly"
          v-model="input"
          placeholder="点击选择竞争车系"
          suffix-icon="el-icon-s-unfold"
          @click.native="showdialog()"
        ></el-input>
      </el-form-item>
    </el-form>

    <!-- 弹出框 -->
    <el-dialog :title="labelname" :visible.sync="dialogVisible" :append-to-body="true" @sentData="sendCode" width="900px" center>
      <div class="filter-container filter-title-crm">
        查询条件
        <div style="float:right">
          <el-button type="primary" @click.native="query">查询</el-button>
          <el-button @click.native="sendCode">确认</el-button>
          <el-button @click.native="reset">重置</el-button>
        </div>
      </div>
      <div class="filter-container filter-params-crm">
        <el-form label-position="right">
          <el-row>
            <el-col :span="8">
              <CompetitorBrandName ref="CompetitorBrandName" :CompetitorBrandName="Carbran"></CompetitorBrandName>
            </el-col>
            <el-col :span="10">
              <CompetingVehicleName ref="CompetingVehicleName" :CompetingVehicleName="Carser"></CompetingVehicleName>
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
import CompetitorBrandName from "@/components/crm/Select/Common/CompetitorBrandName";
import CompetingVehicleName from "@/components/crm/textbox/Public/CompetingProduct/CompetingVehicleName";
export default {
  name: "CompetitiveCar",
  components: {
    CompetitorBrandName,
    CompetingVehicleName
  },
  props:{
    CompetitiveCar:{
      input: String,
      dialogVisible: Boolean,
      labelname: {
        type:String,
        default:"竞争车系"
      }
    }
  },
  
  data() {
    return {
      rowData: { 
        compBrandCode: "",
        compCarseriesCode: "",
        compCarseriesName: "",
      },
      input: this.CompetitiveCar.input,
      labelname:(this.CompetitiveCar.labelname==undefined?"竞争车系":this.CompetitiveCar.labelname),
      width: "800px",
      dialogVisible: false,
      formLabelWidth: "100px",
      Carbran: {
        value: ""
      },
      Carser:{
        input:''
      },
      tabledatas: {
        colnames: [
          { label: "竞品品牌", value: "mdmCompBrandExt.compBrandCn" },
          { label: "竞品车系编码", value: "compCarseriesCode" },
          { label: "竞品车系名称", value: "compCarseriesName" },
        ],
        tableData: [
        ],
        queryObj: {
          // .后面是服务编码，.前面固定写死
          apiConfig: crmApis.mdmCompCarSeriesQueryFindAll,
          apiQueryRow: [
            "compBrandCode",
            "mdmCompBrandExt{compBrandCn}",
            "compCarseriesCode",
            "compCarseriesName",
          ],
          params: {
            compBrandCode:"",
            compCarseriesName:"",
            isEnable:"1",
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
      if (this.CompetitiveCar.dialogVisible == false) {
        that.dialogVisible = this.CompetitiveCar.dialogVisible;
      } else {
        that.dialogVisible = true;
      } //使弹出框显示
    },
    handleSelect: function() {
      let that = this;
      that.input = this.$refs.table.rowData.name;
      that.dialogVisible = false;
    },
    query: function() {
      let that = this;
      if (
        that.$refs.CompetitorBrandName==undefined&&
        that.$refs.CompetingVehicleName==undefined
      ){
        that.tabledatas.queryObj.params.compBrandCode="";
        that.tabledatas.queryObj.params.compCarseriesName="";
      }else{
        that.tabledatas.queryObj.params.compBrandCode=that.$refs.CompetitorBrandName.value;
        that.tabledatas.queryObj.params.compCarseriesName=that.$refs.CompetingVehicleName.input;
      }

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
    reset: function() {
      let that=this
      if (
        that.$refs.CompetitorBrandName==undefined&&
        that.$refs.CompetingVehicleName==undefined
      ){}else{
        that.$refs.CompetitorBrandName.reset();
        that.$refs.CompetingVehicleName.reset();
      }
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
      that.input = that.CompetitiveCar.input;
      this.query();
    },
    //行选择事件
    SelectH: function(row) {
      let that = this;
      that.rowData.compBrandCode = row.compBrandCode;
      that.rowData.compCarseriesCode = row.compCarseriesCode;
      that.rowData.compCarseriesName = row.compCarseriesName;
    },
    sendCode(){
      let that = this;
      that.dialogVisible = false;
      that.input=that.rowData.compCarseriesName
      var cityTemp = [];
      var cityObj = {};
      cityObj["compBrandCode"] = that.rowData.compBrandCode;
      cityObj["compCarseriesCode"] = that.rowData.compCarseriesCode;
      cityObj["compCarseriesName"] = that.rowData.compCarseriesName;
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
} */
</style>