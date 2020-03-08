<!--
* 描述: 客户维护  维护客户信息
* 创建人: zouzx
* 创建时间: 2019-07-24
* 记录：
*  20190724 新建 zouzx
-->
<template>
<div class="app-container app-container-table">
  <div class="filter-container filter-button">
    <el-button type="primary" @click="query">查询</el-button>
    <el-button @click="showdialog">新增</el-button>
    <el-button @click="reset">重置</el-button>
  </div>
  <div class="filter-container filter-title-crm">查询条件</div>
  <div class="filter-container filter-params-crm">
    <el-form label-position="right">
      <el-row>
        <el-col :span="22">
          <el-col :span="6"><txt_CustomerName ref="txt_CustomerName" :txt_CustomerName="cxCustName"/></el-col>
          <el-col :span="6"><PhoneNumber ref="PhoneNumber" :PhoneNumber="cxPhone"/></el-col>
          <el-col :span="6"><CarBrandNumber ref="CarBrandNumber" :CarBrandNumber="cxCarNo"/></el-col>
          <el-col :span="6"><VINCode ref="VINCode" :VINCode='cxVin'/></el-col>
        </el-col>
        <el-col :span="2">
            <el-button icon="el-icon-plus" @click="changeToggleParam" class="moreParam">更多</el-button>
        </el-col>
        <el-col :span="22" v-show="toggleParam" class="toggleParam">
            <el-row>
            <el-col :span="6"><EngineNumber ref="EngineNumber" :EngineNumber='cxEngine'></EngineNumber></el-col>
            </el-row>
        </el-col>
      </el-row>
    </el-form>
    </div>
  <div class="filter-container filter-title-crm">查询结果</div>
  <el-table
    :data="tabledatas.tableData"
    highlight-current-row
    style="width: 100%;height:350px"
    max-height="350px"
    v-loading.body="false"
    element-loading-text="Loading"
    border
    fit
  >
    <el-table-column type="index" label="序号" width="55"></el-table-column>
    <el-table-column label="操作" align="center" width="100">
      <template slot-scope="scope">
        <el-button type="text" size="mini" @click="handle(scope.$index, scope.row)">修改</el-button>
      </template>
    </el-table-column>
    <el-table-column
      v-for="item in tabledatas.colnames"
      :key="item.value"
      :label="item.label"
      :prop="item.value"
      :width="item.width"
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
</div>
</template>
<script>
import { crmApis } from "@/api/graphQLApiList/crm";
import { requestGraphQL } from "@/api/commonRequest";
import Table from "@/components/crm/table/Table";
import txt_CustomerName from "@/components/crm/textbox/Public/customerInfos/txt_CustomerName";//客户名称
import PhoneNumber from "@/components/crm/textbox/Public/customerInfos/PhoneNumber";//电话
import CarBrandNumber from "@/components/crm/textbox/Public/carInfo/CarBrandNumber";//车牌号
import VINCode from "@/components/crm/textbox/Public/carInfo/VINCode";//VIN码
import EngineNumber from '@/components/crm/textbox/Public/customerInfos/EngineNumber';//发动机号
export default {
  name: "crmCustomerRetention",
  components: {
    txt_CustomerName,
    PhoneNumber,
    CarBrandNumber,
    VINCode,
    EngineNumber
  },
  data() {
    return {
      cxCustName:{
        input:''
      },
      cxPhone:{
        input:''
      },
      cxCarNo:{
        input:''
      },
      cxVin:{
        input:''
      },
      cxEngine:{
        input:''
      },
      toggleParam: false,
      dialogVisible: false,
      tabledatas: {
        colnames: [
          { label: "客户名称", value: "custName",width:"120" },
          { label: "电话", value: "phone",width:"120" },
          { label: "备用电话", value: "backTel" ,width:"120"},
          { label: "性别", value: "genderName" },
          { label: "是否车主", value: "isCarowner" },
          { label: "车辆品牌", value: "carBrandName" ,width:"120"},
          { label: "车系", value: "seCarSeriesName" },
          { label: "车型名称", value: "seCarTypeName" },
          { label: "车牌号", value: "carLicenseNo",width:"120" },
          { label: "VIN码", value: "vin",width:"200"},
          { label: "发动机号", value: "engineNo",width:"150" },
          { label: "省份", value: "addrProvince" },
          { label: "城市", value: "addrCity" },
          { label: "区县", value: "addrCounty" }
        ],
        tableData:[
        ],
        queryObj: {
          apiConfig: crmApis.mdmDlrCustInfoQuery,
          apiQueryRow: [
            'custNo',
            'dlrCustNo',
            'custName',
            'phone',
            'backTel',
            'isCarowner',
            'genderName',
            'carBrandName',
            'seCarSeriesName',
            'seCarTypeName',
            'carLicenseNo',
            'vin',
            'engineNo',
            'addrProvince',
            'addrCity',
            'addrCounty'
          ],
          params: {
          //  oemCode:'1',
          //  groupCode:'1',
          //  custName:'',
          //  phone:'',
          //  carLicenseNo:'',
          //  vin:'',
          //  engineNo:'',
          //  isPV800:"0"
          }
        },
        pagesize:10,
        pageindex:1,
        total: 0
      }
    };
  },
  mounted: function() {
    console.log("进来了");
  },
  methods: {
    changeToggleParam() {
      this.toggleParam = !this.toggleParam;
    },
    showdialog: function() {
      let that = this
      that.$crmcf.jumpDetailTag(that,'crmCustomerInfoEdit','/crmCustomerInfoEdit',null)
    },
    query:function(){
      
      let that = this;
      that.tabledatas.queryObj.params={}
      that.$set(that.tabledatas.queryObj.params, 'oemCode', "1");
      that.$set(that.tabledatas.queryObj.params, 'groupCode', "1");
      that.$set(that.tabledatas.queryObj.params, 'isPV800', "1");
      if(that.$refs.txt_CustomerName.input!="")
      {
        that.$set(that.tabledatas.queryObj.params, 'custName', that.$refs.txt_CustomerName.input);
      }
      if(that.$refs.PhoneNumber.input!="")
      {
        that.$set(that.tabledatas.queryObj.params, 'phone', that.$refs.PhoneNumber.input);
      }
      if(that.$refs.CarBrandNumber.input!="")
      {
        that.$set(that.tabledatas.queryObj.params, 'carLicenseNo', that.$refs.CarBrandNumber.input);
      }
      if(that.$refs.VINCode.input!="")
      {
        that.$set(that.tabledatas.queryObj.params, 'vin', that.$refs.VINCode.input);
      }
      if(that.$refs.EngineNumber.input!="")
      {
        that.$set(that.tabledatas.queryObj.params, 'engineNo', that.$refs.EngineNumber.input);
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
    handle:function(index,rowData){
      let that=this
      that.$crmcf.jumpDetailTag(that,'crmCustomerInfoEdit','/crmCustomerInfoEdit',rowData)
    },
    reset: function() {
      this.$refs.txt_CustomerName.reset();
      this.$refs.PhoneNumber.reset();
      this.$refs.CarBrandNumber.reset();
      this.$refs.VINCode.reset();
      this.$refs.EngineNumber.reset();
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
    }
  }
};
</script>
<style scoped>
/* .filter-params-sub .el-col {
  margin-bottom: -10px;
} */
</style>
