<!--
* 描述: 线索查询
* 创建人: dxuem
* 创建时间: 2019-08-03 15:42
* 记录：
*  20190803 新建 dxuem
-->
<template>
  <div class="app-container app-container-table" ref="crmArea">
    <div class="filter-container filter-button">
      <el-button type="primary" @click="query()">查询</el-button>
      <el-button @click="reset()">重置</el-button>
    </div>

    <div class="filter-container filter-title-crm">查询条件</div>
    <div class="filter-container filter-params-crm">
      <el-form label-position="right">
        <el-row>
          <el-col :span="22">
            <el-col :span="6">
              <dtBuildMenuDates :dt_BuildMenuDates="Builddate" ref="build"></dtBuildMenuDates>
            </el-col>
            <el-col :span="6">
              <txtCustomerName :txt_CustomerName="Custn" ref="Custn"></txtCustomerName>
            </el-col>
            <el-col :span="6">
              <PhoneNumber :PhoneNumber="Phone" ref="phone"></PhoneNumber>
            </el-col>
            <el-col :span="6">
              <sctCarBrand :sct_CarBrand="Carbran" ref="carbran"></sctCarBrand>
            </el-col>
          </el-col>
          <el-col :span="2">
            <el-button icon="el-icon-plus" @click="changeToggleParam" class="moreParam">更多</el-button>
          </el-col>
          <el-col :span="22" v-show="toggleParam" class="toggleParam">
            <el-col :span="6">
              <sctAgent :sct_Agent="Agent" ref="agent"></sctAgent>
            </el-col>
            <el-col :span="6">
              <ClueNumber :ClueNumber="Cluenum" ref="cluenum"></ClueNumber>
            </el-col>
            <el-col :span="6">
              <TransferObject :TransferObject="Tranobj" ref="tranobj"></TransferObject>
            </el-col>
            <el-col :span="6">
              <BatchNumber :BatchNumber="Batchnum" ref="batchnum"></BatchNumber>
            </el-col>

            <el-col :span="6">
              <ContactStatus :ContactStatus="Contstatu" ref="contstatu"></ContactStatus>
            </el-col>
            <!-- <el-col :span="6">
                <JobStatus :JobStatus="Jobstatu" ref="jobstatu"></JobStatus>
            </el-col>-->
            <el-col :span="6">
              <CleaningStatus :CleaningStatus="Cleanstatu" ref="cleanstatu"></CleaningStatus>
            </el-col>
            <!-- <el-col :span="6">
              <swdSalesCarSeries :swd_SalesCarSeries="Salecarserie" ref="salecarserie"></swdSalesCarSeries>
            </el-col> -->
            <el-col :span="6">
              <IntentionalCar :IntentionalCar="Salecarserie" ref="salecarserie" @CatData="getarr"></IntentionalCar>
            </el-col>

            <el-col :span="6">
              <ContactWay :ContactWay="Contway" @changeCode="contactWayChange" ref="contway"></ContactWay>
            </el-col>
            <el-col :span="6">
              <ChannelBigClass :ChannelBigClass="chanb" ref="chanb"></ChannelBigClass>
            </el-col>
            <el-col :span="6">
              <ChannelSmalTypeName :ChannelSmalTypeName="Chansmal" ref="chansmal"></ChannelSmalTypeName>
            </el-col>
            <!-- <el-col :span="6">
              <SalesCar :SalesCar="Salescar" ref="salescar"></SalesCar>
            </el-col> -->
          </el-col>
        </el-row>
      </el-form>
    </div>
    <div class="filter-container filter-title-crm" ref="resultTitleHeight">查询结果</div>
    <el-row class="table">
      <el-table
        :data="tabledatas.tableData"
        :stripe="flag"
        highlight-current-row
        ref="table"
         :style="{width:'100%',height:tableHeight+'px'}"
        v-loading.body="listLoading"
        element-loading-text="Loading"
        border
        fit
      >
        <el-table-column type="selection" width="50" v-if="isdisplay.ismuti"></el-table-column>
        <el-table-column type="index" label="序号" width="60"></el-table-column>
        <el-table-column label="详情">
          <!-- scope.row:选中的一行数据 -->
          <!-- 打开线索详情（带值） -->
          <template slot-scope="scope">
            <el-button size="mini" type="text" @click="detail(scope.$index, scope.row)">详情</el-button>
          </template>
        </el-table-column>
        <!-- 打开线索跟进历史查询（带值） -->
        <el-table-column label="过程查看" width="100">
          <template slot-scope="scope">
            <el-button size="mini" type="text" @click="process(scope.$index, scope.row)">过程查看</el-button>
          </template>
        </el-table-column>
        <el-table-column
          v-for="item in tabledatas.colnames"
          :key="item.value"
          :label="item.label"
          :prop="item.value"
          align="center"
          width="100"
        ></el-table-column>
      </el-table>
      <el-pagination
        background
        layout="prev, pager, next"
        :total="tabledatas.total?tabledatas.total:0"
        :page-size="tabledatas.pageSize?tabledatas.pageSize:this.$crmcf.PAGE_SIZE"
        :current-page="tabledatas.pageIndex?tabledatas.pageIndex:this.$crmcf.PAGE_INDEX"
        @prev-click="prev"
        @next-click="next"
        @current-change="changepage"
      ></el-pagination>
    </el-row>
  </div>
</template>
<script>
import swdSalesCarSeries from "@/components/crm/EjectWindows/swd_SalesCarSeries";
import SalesCar from "@/components/crm/EjectWindows/SalesCar";
import PhoneNumber from "@/components/crm/textbox/Public/customerInfos/PhoneNumber";
import ChannelSmalTypeName from "@/components/crm/textbox/Clue/ChannelSmalTypeName";
import ChannelBigClass from "@/components/crm/Select/Common/ChannelBigClass";
import ContactStatus from "@/components/crm/Select/Clue/ContactStatus";
import BatchNumber from "@/components/crm/textbox/Clue/BatchNumber";
import TransferObject from "@/components/crm/Select/Common/Customer/TransferObject";
import ClueNumber from "@/components/crm/textbox/Clue/ClueNumber";
import sctAgent from "@/components/crm/Select/Common/Dealer/Agent/sct_Agent";
import sctCarBrand from "@/components/crm/Select/Common/sct_CarBrand";
import ContactWay from "@/components/crm/Select/Common/ContactWay";
import txtCustomerName from "@/components/crm/textbox/Public/customerInfos/txt_CustomerName";
import CleaningStatus from "@/components/crm/Select/Clue/CallCenterClue/CleaningStatus";
// import JobStatus from "@/components/crm/Select/Clue/JobStatus";
import dtBuildMenuDates from "@/components/crm/Time/dt_BuildMenuDates";
import IntentionalCar from "@/components/crm/EjectWindows/IntentionalCar";

import Table from "@/components/crm/table/Table";
import { crmApis } from "@/api/graphQLApiList/crm";
import { requestGraphQL } from "@/api/commonRequest";

export default {
  name: "crmClueQuery",
  components: {
    ContactWay,
    //swdSalesCarSeries,
    //SalesCar,
    ChannelSmalTypeName,
    PhoneNumber,
    ChannelBigClass,
    ContactStatus,
    TransferObject,
    BatchNumber,
    ClueNumber,
    sctAgent,
    sctCarBrand,
    txtCustomerName,
    CleaningStatus,
    // JobStatus,
    dtBuildMenuDates,
    Table,
    IntentionalCar
  },
    mounted() {
    this.$nextTick(() => {
      // 页面渲染完成后的回调
      let that = this;
      this.$crmcf.__setAutoTableStyle(that);
    });
  },
  data() {
    return {
      toggleParam: false,
      tableHeight:'',
      Phone: {
        input: ""
      },
      cxinteSeriesCode:"",
      Salecarserie: {
        value: ""
      },
      Contway: {
        value: ""
      },
      Salescar: {
        value: ""
      },
      Batchnum: {
        input: ""
      },
      Contstatu: {
        value: ""
      },
      chanb: {
      value: "",
        pcode: ""
      },
      Chansmal: {
        input: ""
      },
      Carbran: {
        value: ""
      },
      Agent: {
        value: ""
      },
      Tranobj: {
        value: ""
      },
      Cluenum: {
        input: ""
      },
      Builddate: {
        value: ""
      },
      // Jobstatu: {
      //   value: ""
      // },
      Cleanstatu: {
        value: ""
      },
      Custn: {
        input: ""
      },
      isdisplay: {
        ismuti: false
      },
      flag: true,
      listLoading: false,
      tabledatas: {
        isoperat: false,
        havedistrbute: false,
        haveEdit: false,
        haveDel: false,
        colnames: [
          { label: "建单日期", value: "createdDate" },
          { label: "客户名称", value: "custName" },
          { label: "电话", value: "contactTel" },
          { label: "车辆品牌", value: "carBrandName" },
          { label: "网点", value: "dlrShortName" },
          { label: "线索单号", value: "serverOrder" },
          { label: "传送对象", value: "transferObjectName" },
          { label: "批次号", value: "batchNo" },
          { label: "接触状态", value: "touchStatusName" },
          //{ label: "作业状态", value: "crruNodeName" },
          { label: "销售车系", value: "carSeriesCn" },
          { label: "销售车型", value: "inteTypeName" },
          { label: "接触方式", value: "cantactWayName" },
          { label: "渠道大类", value: "infoChanMName" },
          { label: "渠道小类", value: "infoChanDName" }
        ],
        tableData: [],
        queryObj: {
          apiConfig: crmApis.clueServerQueryFromHeadquarters,
          apiQueryRow: [
            "createdDate",
            "custName",
            "custId",
            "contactTel",
            "carBrandName",
            "dlrShortName",
            "transferObjectName",
            "batchNo",
            "inteTypeName",
            "touchStatus",
            "touchStatusName",
            "cantactWayCode",
            "cantactWayName",
            "infoChanMName",
            "infoChanDName",
            "carSeriesCn",
            "serverOrder",
            "infoChanMCode",
            "infoChanDCode"
          ],
          params: {
            createdDateStart: "",
            createdDateEnd: "",
            custName: "",
            contactTel: "",
            carBrandCode: "",
            dlrCode: "",
            serverOrder: "",
            transferObject: "",
            batchNo: "",
            touchStatus: "",
            inteSeriesCode: "",
            cantactWayCode: "",
            cleanFlag: "",
            inteTypeCode: "",
            infoChanMCode: "",
            infoChanDCode: "",
            handleCode: "0",
            statusArray: ["0", "1", "3", "4","5"]
          }
        }
      }
    };
  },
  methods: {
    getarr(val){
      let redata={};
      redata=val;
      this.cxinteSeriesCode=redata[0].carSeriesCode;
    },
    query() {
      let that = this;
      that.listLoading=true
      debugger
      if (that.$refs.build.value[0]) {
        that.tabledatas.queryObj.params.createdDateStart =
          that.$refs.build.value[0] 
        that.tabledatas.queryObj.params.createdDateEnd =
          that.$refs.build.value[1] 
      }else{
        that.tabledatas.queryObj.params.createdDateStart=""
        that.tabledatas.queryObj.params.createdDateEnd=""
      }
      that.tabledatas.queryObj.params.custName = that.$refs.Custn.input;
      that.tabledatas.queryObj.params.contactTel = that.$refs.phone.input;
      that.tabledatas.queryObj.params.carBrandCode = that.$refs.carbran.value;
      that.tabledatas.queryObj.params.dlrCode = that.$refs.agent.value;
      that.tabledatas.queryObj.params.serverOrder = that.$refs.cluenum.input;
      that.tabledatas.queryObj.params.transferObject = that.$refs.tranobj.value;
      that.tabledatas.queryObj.params.batchNo = that.$refs.batchnum.input;
      that.tabledatas.queryObj.params.touchStatus = that.$refs.contstatu.value;
      that.tabledatas.queryObj.params.inteSeriesCode = that.cxinteSeriesCode;
      that.tabledatas.queryObj.params.cantactWayCode = that.$refs.contway.value;
      that.tabledatas.queryObj.params.cleanFlag = that.$refs.cleanstatu.value;
      that.tabledatas.queryObj.params.infoChanMCode = that.$refs.chanb.value;
      that.tabledatas.queryObj.params.infoChanDCode = that.$refs.chansmal.input;
      //that.tabledatas.queryObj.params.inteTypeCode = that.$refs.salescar.input;
 // 处理查询网格回调
      this.$crmcf.simpleTablequery(that, that.tabledatas, that.tabledatas.queryObj.apiConfig,function(data){that.tabledatas.tableData =data.rows;})
    },
    contactWayChange(val){
      let that = this;
      that.chanb.pcode = val;
      if (that.$refs.chanb == undefined) {
      } else {
        that.$refs.chanb.getData();
      }
    },
    prev(index) {
      let that = this;
      that.tabledatas.pageIndex = index;
      this.query();
    },
    next(index) {
      let that = this;
      that.tabledatas.pageIndex = index;
      this.query();
    },
    changepage(index) {
      let that = this;
      that.tabledatas.pageIndex = index;
      this.query();
    },
    detail: function(index, rowData) {
      let that = this;
      that.$crmcf.jumpDetailTag(that,'crmClueDetail','/crmClueDetail',rowData)
    },
    process: function(index, rowData) {
      let that = this;
      that.$crmcf.jumpDetailTag(that,'crmClueFollowHis','/crmClueFollowHis',rowData)
    },
    changeToggleParam() {
      this.toggleParam = !this.toggleParam;
    },
    getDispatchTime(val) {
      this.listQuery.status = val;
    },
    reset: function() {
      this.$refs.build.reset();
      this.$refs.Custn.reset();
      this.$refs.phone.reset();
      this.$refs.carbran.reset();
      this.$refs.agent.reset();
      this.$refs.cluenum.reset();
      this.$refs.tranobj.reset();
      this.$refs.batchnum.reset();
      this.$refs.contstatu.reset();
      // this.$refs.jobstatu.reset();
      this.$refs.cleanstatu.reset();
      this.cxinteSeriesCode="";
      this.$refs.salecarserie.resetgz();
      this.$refs.contway.reset();
      this.$refs.chanb.reset();
      this.$refs.chansmal.reset();
      //this.$refs.salescar.resett();
    }
  }
};
</script>
<style>

</style>