<!--
* 描述: 当日预约到店线索
* 创建人: chq2
* 创建时间: 2019-07-22
* 记录：
*  20190722 新建 chq2
-->
<template>
  <div class="app-container app-container-table">
    <div class="filter-container filter-button">
      <el-button type="primary" @click="query('1')">查询</el-button>
      <el-button @click="reset">重置</el-button>
    </div>
    <div class="filter-container filter-title-crm">查询条件</div>
    <div class="filter-container filter-params-crm query-params">
      <el-form label-position="right">
        <el-row>
          <el-col :span="22">
            <el-row>
              <el-col :span="6">
                <txt_CustomerName :txt_CustomerName="CustName" ref="txt_CustomerName"></txt_CustomerName>
              </el-col>
              <el-col :span="6">
                <PhoneNumber :PhoneNumber="PNumber" ref="PhoneNumber"></PhoneNumber>
              </el-col>
              <el-col :span="6">
                <IntentionalCar :IntentionalCar="ICar" ref="IntentionalCar"></IntentionalCar>
              </el-col>
              <el-col :span="6">
                <IntentionLevel :IntentionLevel="ILevel" ref="IntentionLevel"></IntentionLevel>
              </el-col>
            </el-row>
          </el-col>
          <el-col :span="2">
            <el-button icon="el-icon-plus" @click="changeToggleParam" class="moreParam">更多</el-button>
          </el-col>
          <el-col :span="22" v-show="toggleParam" class="toggleParam">
            <el-row>
              <el-col :span="6">
                <ReserveTimes :ReserveTimes="RTimes" ref="ReserveTimes"></ReserveTimes>
              </el-col>
              <el-col :span="6">
                <ServiceMenuNumber :ServiceMenuNumber="SMenuNumber" ref="ServiceMenuNumber"></ServiceMenuNumber>
              </el-col>
              <el-col :span="6">
                <ContactWay :ContactWay="CWay" ref="ContactWay" @changeCode="cwchange" ></ContactWay>
              </el-col>
              <el-col :span="6">
                <ChannelBigClass :ChannelBigClass="CBigClass" ref="ChannelBigClass"></ChannelBigClass>
              </el-col>
              <el-col :span="6">
                <ReceiptStatus :ReceiptStatus="RStatus" ref="ReceiptStatus"></ReceiptStatus>
              </el-col>
              <el-col :span="6">
                <dt_BuildMenuDates :dt_BuildMenuDates="BuildDates" ref="dt_BuildMenuDates"></dt_BuildMenuDates>
              </el-col>
              <el-col :span="6">
                <IntentionalBrand :IntentionalBrand="IBrand" ref="IntentionalBrand"></IntentionalBrand>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
      </el-form>
    </div>
    <div class="filter-container filter-title-crm">查询结果</div>
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
  </div>
</template>
<script>
import txt_CustomerName from "@/components/crm/textbox/Public/customerInfos/txt_CustomerName.vue";
import PhoneNumber from "@/components/crm/textbox/Public/customerInfos/PhoneNumber.vue";
import IntentionalCar from "@/components/crm/EjectWindows/IntentionalCar.vue";
import IntentionLevel from "@/components/crm/Select/Common/Customer/IntentionLevel.vue";
import ReserveTimes from "@/components/crm/Time/ReserveTimes.vue";
import ServiceMenuNumber from "@/components/crm/textbox/Public/ServiceMenuNumber.vue";
import ContactWay from "@/components/crm/Select/Common/ContactWay.vue";
import ChannelBigClass from "@/components/crm/Select/Common/ChannelBigClass.vue";
import ReceiptStatus from "@/components/crm/Select/Clue/ReceiptStatus.vue";
import IntentionalBrand from "@/components/crm/Select/Common/Customer/IntentionalBrand.vue";
import dt_BuildMenuDates from "@/components/crm/Time/dt_BuildMenuDates.vue";
import { crmApis } from "@/api/graphQLApiList/crm";
import { requestGraphQL } from "@/api/commonRequest";
export default {
  name: "ReserveToStore",
  components: {
    txt_CustomerName,
    PhoneNumber,
    IntentionalCar,
    IntentionLevel,
    ReserveTimes,
    ServiceMenuNumber,
    ContactWay,
    ChannelBigClass,
    ReceiptStatus,
    IntentionalBrand,
    dt_BuildMenuDates
  },
  mounted: function() {
    this.setTDDate();
  },
  methods: {
    changeToggleParam() {
      this.toggleParam = !this.toggleParam;
    },
    setTDDate(){
      let time1 = new Date().getFullYear();
      let time2 = new Date().getMonth()+1;
      if (time2 < 10) {
        time2 = "0" + time2;
      }
      let time3 = new Date().getDate();
      if (time3 < 10) {
        time3 = "0" + time3;
      }
      this.RTimes.value = [
        time1 + "-" + time2 + "-" + time3,
        time1 + "-" + time2 + "-" + time3
      ];
      if (this.$refs.ReserveTimes != undefined) {
        this.$refs.ReserveTimes.getData();
      }
    },
    query: function(one) {
      let that = this;
      debugger
      that.tabledatas.queryObj.params.serverOrder=that.$refs.ServiceMenuNumber.input
      that.tabledatas.queryObj.params.custName=that.$refs.txt_CustomerName.input
      that.tabledatas.queryObj.params.contactTel=that.$refs.PhoneNumber.input
      that.tabledatas.queryObj.params.carBrandCode=that.$refs.IntentionalBrand.input
      that.tabledatas.queryObj.params.inteSeriesCode=that.$refs.IntentionalCar.code
      that.tabledatas.queryObj.params.clueLevelCode=that.$refs.IntentionLevel.value
      that.tabledatas.queryObj.params.nextCallbackDateStart=that.$refs.ReserveTimes.value[0]
      that.tabledatas.queryObj.params.nextCallbackDateEnd=that.$refs.ReserveTimes.value[1]
      that.tabledatas.queryObj.params.createdDateStart=that.$refs.dt_BuildMenuDates.value[0]
      that.tabledatas.queryObj.params.createdDateEnd=that.$refs.dt_BuildMenuDates.value[1]
      that.tabledatas.queryObj.params.infoChanMCode=that.$refs.ChannelBigClass.value
      that.tabledatas.queryObj.params.cantactWayCode=that.$refs.ContactWay.value
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
      if(one){
        queryObj.variables.pageIndex=one
      }
      //转换了中台请求格式数据
      var paramD = that.$getParams(queryObj);
      // 调用中台API方法（可复用）
      requestGraphQL(paramD).then(response => {
        if (
          response.data[queryObj.apiConfig.ServiceCode].result == "1"
        ) {
          that.tabledatas.tableData =
            response.data[queryObj.apiConfig.ServiceCode].rows;
          that.tabledatas.pageindex =
            response.data[queryObj.apiConfig.ServiceCode].pageindex;
          that.tabledatas.total =
            response.data[queryObj.apiConfig.ServiceCode].records;
        }
      });
    },
    prev(index) {
      let that = this;
      that.tabledatas.pageindex = index;
      this.query();
    },
    next(index) {
      let that = this;
      that.tabledatas.pageindex = index;
      this.query();
    },
    changepage(index) {
      let that = this;
      that.tabledatas.pageindex = index;
      this.query();
    },
    reset: function() {
      this.$refs.txt_CustomerName.reset();
      this.$refs.PhoneNumber.reset();
      this.$refs.IntentionalCar.resetgz();
      this.$refs.IntentionLevel.reset();
      this.$refs.ReserveTimes.reset();
      this.$refs.ServiceMenuNumber.reset();
      this.$refs.ContactWay.reset();
      this.$refs.ChannelBigClass.reset();
      this.$refs.ReceiptStatus.reset();
      this.$refs.IntentionalBrand.reset();
      this.$refs.dt_BuildMenuDates.reset();
      this.setTDDate();
    },
    cwchange(val) {
      let that = this;
      that.CBigClass.pcode = val;
      that.$refs.ChannelBigClass.getData();
    },
  },
  data() {
    return {
      toggleParam: false,
      tabledatas: {
        colnames: [
          { label: "客户名称", value: "custName" },
          { label: "电话", value: "contactTel" },
          { label: "意向级别", value: "clueLevelCode" },
          { label: "意向品牌", value: "carBrandName" },
          { label: "意向车系", value: "carSeriesCn" },
          { label: "预约时间", value: "preArriveDlrTime" },
          { label: "单据状态", value: "statusName" },
          { label: "接触方式", value: "cantactWayName" },
          { label: "渠道大类", value: "infoChanMName" },
          { label: "渠道小类", value: "infoChanDName" },
          { label: "服务单号", value: "serverOrder" },
          { label: "建单日期", value: "createdDate" },
          { label: "回访人员", value: "csr" }
        ],
        tableData: [
          
        ],
        queryObj: {
          // .后面是服务编码，.前面固定写死
          apiConfig: crmApis.clueServerQueryFromDlr,
          apiQueryRow: [
            "serverOrder",
            "custName",
            "contactTel",
            "carBrandName",
            "carSeriesCn",
            "clueLevelCode",
            "preArriveDlrTime",
            "statusName",
            "cantactWayName",
            "infoChanMName",
            "infoChanDName",
            "createdDate",
            "createdName",
            "csr"
          ],
          params: {
            serverOrder: "",
            contactTel:"",
            custName: "",
            inteSeriesCode: "",
            carBrandCode: "",
            clueLevelCode: "",
            nextCallbackDateStart: "",
            nextCallbackDateEnd: "",
            infoChanMCode: "",
            infoChanDCode: "",
            cantactWayCode: "",
            handleCode: "1",
            statusArray: ["40"]
          }
        },
        pagesize: 8,
        pageindex: 1,
        total: 0
      },
      //初始化input
      CustName: {
        input: ""
      },
      PNumber: {
        input: ""
      },
      SMenuNumber: {
        input: ""
      },
      //初始化value
      ICar: {
        value: ""
      },
      ILevel: {
        value: ""
      },
      RTimes: {
        value: ""
      },
      CWay: {
        value: ""
      },
      CBigClass: {
        value: "",
        pcode:""
      },
      RStatus: {
        value: ""
      },
      BuildDates: {
        value: ""
      },
      IBrand: {
        value: ""
      }
    };
  }
};
</script>
