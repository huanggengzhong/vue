<template>
  <section>
    <el-form>
      <el-form-item label="保有客户">
        <el-input
          readonly="readonly"
          v-model="input"
          placeholder="保有客户选择"
          suffix-icon="el-icon-s-unfold"
          @click.native="showdialog()"
        ></el-input>
      </el-form-item>
    </el-form>

    <!-- 弹出框 -->
    <el-dialog title="保有客户选择" :visible.sync="dialogVisible" @sentData="sendCode" width="900px" :append-to-body="true" center>
      <div class="filter-container filter-title">
        查询条件
        <div style="float:right">
          <el-button type="primary" @click.native="query(1)">查询</el-button>
          <el-button @click.native="sendCode">确认</el-button>
          <el-button @click.native="reset">重置</el-button>
        </div>
      </div>
      <div class="filter-container filter-params">
        <el-form label-position="right">
          <el-row>
            <el-col :span="22">
              <el-col :span="8">
                <txt_CustomerName :txt_CustomerName="cxName" ref="txt_CustomerName"></txt_CustomerName>
              </el-col>
              <el-col :span="8">
                <PhoneNumber :PhoneNumber="cxPhone" ref="PhoneNumber"></PhoneNumber>
              </el-col>
              <el-col :span="8">
                <CarBrandNumber :CarBrandNumber="cxCarNo" ref="CarBrandNumber"></CarBrandNumber>
              </el-col>
            </el-col>
            <el-col :span="2">
              <el-button icon="el-icon-plus" @click="changeToggleParam" class="moreParam">更多</el-button>
            </el-col>
            <el-col :span="22" v-show="toggleParam" class="toggleParam">
              <el-row>
                <el-col :span="8">
                  <EngineNumber :EngineNumber="cxEng" ref="EngineNumber"></EngineNumber>
                </el-col>
                <el-col :span="8">
                  <VINCode :VINCode="cxVin" ref="VINCode"></VINCode>
                </el-col>
                <el-col :span="8">
                  <sct_CarBrand :sct_CarBrand="cxBrand" ref="sct_CarBrand"></sct_CarBrand>
                </el-col>
              </el-row>
            </el-col>
          </el-row>
        </el-form>
      </div>
      <div class="filter-container filter-title">查询结果</div>
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
  </section>
</template>

<script>
import Table from "@/components/crm/table/Table";
import PhoneNumber from "@/components/crm/textbox/Public/customerInfos/PhoneNumber";
import ChannelBigClass from "@/components/crm/textbox/Public/carInfo/CarBrandNumber";
import txt_CustomerName from "@/components/crm/textbox/Public/customerInfos/txt_CustomerName";
import sct_CarBrand from "@/components/crm/Select/Common/sct_CarBrand";
import CarBrandNumber from "@/components/crm/textbox/Public/carInfo/CarBrandNumber";
import EngineNumber from "@/components/crm/textbox/Public/customerInfos/EngineNumber";
import VINCode from "@/components/crm/textbox/Public/carInfo/VINCode";
import { crmApis } from "@/api/graphQLApiList/crm";
import { requestGraphQL } from "@/api/commonRequest";

export default {
  name: "RetainCustomers",
  components: {
    Table,
    txt_CustomerName,
    PhoneNumber,
    CarBrandNumber,
    sct_CarBrand,
    EngineNumber,
    VINCode
  },
  props: {
    RetainCustomers: {
      input: String,
      dialogVisible: Boolean
    }
  },
  data() {
    return {
      rowData: { 
        dlrCustNo: "",
        custName: "",
        icCardNo: ""
      },
      input: this.RetainCustomers.input,
      dialogVisible: false,
      toggleParam: false,
      cxName: {
        input: ""
      },
      cxPhone: {
        input: ""
      },
      cxCarNo: {
        input: ""
      },
      cxEng: {
        input: ""
      },
      cxVin: {
        input: ""
      },
      cxBrand: {
        value: ""
      },
      tabledatas: {
        colnames: [
          { label: "车辆品牌", value: "carBrandName" },
          { label: "客户名称", value: "custName" },
          { label: "电话", value: "phone" },
          { label: "会员卡号", value: "icCardNo" },
          { label: "车牌号", value: "carLicenseNo" },
          { label: "VIN", value: "vin" },
          { label: "车系名称", value: "seCarSeriesName" },
          { label: "车型名称", value: "seCarTypeName" },
          { label: "颜色", value: "carColorName" },
          { label: "发动机号", value: "engineNo" },
          { label: "销售日期", value: "invoiceDate" },
          { label: "交车日期", value: "deliveryDate" },
          { label: "客户类型", value: "custClassName" }
        ],
        tableData: [
        ],
        queryObj: {
          // .后面是服务编码，.前面固定写死
          apiConfig: crmApis.mdmDlrCustInfoQuery,
          apiQueryRow: [
            "custNo",
            "dlrCustNo",
            "custName",
            "phone",
            "icCardNo",
            "carLicenseNo",
            "vin",
            "seCarSeriesName",
            "seCarTypeName",
            "carColorName",
            "engineNo",
            "invoiceDate",
            "deliveryDate",
            "custClassName"
          ],
          params: {
            custName:"",
            phone:"",
            carLicenseNo:"",
            vin:"",
            engineNo:"",
            carBrandCode:"",
            oemCode:"1",
            groupCode:"1",
            isCarowner:"1"
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
      if (this.RetainCustomers.dialogVisible == false) {
        that.dialogVisible = this.RetainCustomers.dialogVisible;
      } else {
        that.dialogVisible = true;
      } //使弹出框显示
    },
    changeToggleParam() {
      this.toggleParam = !this.toggleParam;
    },
    query(val) {
      debugger
      let that = this;
      if(
        that.$refs.txt_CustomerName==undefined&&
        that.$refs.PhoneNumber==undefined&&
        that.$refs.CarBrandNumber==undefined&&
        that.$refs.EngineNumber==undefined&&
        that.$refs.VINCode==undefined&&
        that.$refs.sct_CarBrand==undefined){
        that.tabledatas.queryObj.params.custName="";
        that.tabledatas.queryObj.params.phone="";
        that.tabledatas.queryObj.params.carLicenseNo="";
        that.tabledatas.queryObj.params.engineNo="";
        that.tabledatas.queryObj.params.vin="";
        that.tabledatas.queryObj.params.carBrandCode="";
      }else{
        that.tabledatas.queryObj.params.custName=that.$refs.txt_CustomerName.input;
        that.tabledatas.queryObj.params.phone=that.$refs.PhoneNumber.input;
        that.tabledatas.queryObj.params.carLicenseNo=that.$refs.CarBrandNumber.input;
        that.tabledatas.queryObj.params.engineNo=that.$refs.EngineNumber.input;
        that.tabledatas.queryObj.params.vin=that.$refs.VINCode.input;
        that.tabledatas.queryObj.params.carBrandCode=that.$refs.sct_CarBrand.value;
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
          pageSize: val!=undefined?10:that.tabledatas.pagesize,
          pageIndex: val!=undefined?1:that.tabledatas.pageindex,
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
      if(
        that.$refs.txt_CustomerName==undefined&&
        that.$refs.PhoneNumber==undefined&&
        that.$refs.CarBrandNumber==undefined&&
        that.$refs.EngineNumber==undefined&&
        that.$refs.VINCode==undefined&&
        that.$refs.sct_CarBrand==undefined){
      }else{
        that.$refs.txt_CustomerName.reset();
        that.$refs.PhoneNumber.reset();
        that.$refs.CarBrandNumber.reset();
        that.$refs.EngineNumber.reset();
        that.$refs.VINCode.reset();
        that.$refs.sct_CarBrand.reset();
      }
    },
    //赋值事件
    getData: function() {
      let that = this;
      that.input = this.RetainCustomers.input;
      that.tabledatas.tableData=[]
      that.tabledatas.pageindex =1;
      that.tabledatas.total =0;
      //this.query();
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
    //行选择事件
    SelectH: function(row) {
      let that = this;
      that.rowData.dlrCustNo = row.dlrCustNo;
      that.rowData.custName = row.custName;
      that.rowData.icCardNo = row.icCardNo;
    },
    sendCode(){
      let that = this;
      that.dialogVisible = false;
      that.input=that.rowData.custName
      var cityTemp = [];
      var cityObj = {};
      cityObj["dlrCustNo"] = that.rowData.dlrCustNo;
      cityObj["custName"] = that.rowData.custName;
      cityObj["icCardNo"] = that.rowData.icCardNo;
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
