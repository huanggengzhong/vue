<!--
* 描述: 投诉单查询
* 创建人: chq2
* 创建时间: 2019-07-28
* 记录：
*  2019-07-28 新建 chq2
-->
<template>
<div class="app-container app-container-table filter-params-crm">
  <div class="filter-container filter-button">
    <el-button type="primary" @click="query(1)">查询</el-button>
      <el-button @click="query(2)">导出</el-button>
      <el-button @click="reset">重置</el-button>
  </div>
  <div class="filter-container filter-title-crm">查询条件</div>
  <div class="filter-container filter-params-crm">
    <el-form label-position="right">
      <el-row>
        <el-col :span="22">
          <el-col :span="6"><dt_BuildMenuDates :dt_BuildMenuDates="cxCreated" ref="dt_BuildMenuDates"></dt_BuildMenuDates></el-col>
          <el-col :span="6"><CloseCaseDate :CloseCaseDate="cxClose" ref="CloseCaseDate"></CloseCaseDate></el-col>
          <el-col :span="6"><ReceiptStatus :ReceiptStatus="cxStatus" ref="ReceiptStatus"></ReceiptStatus></el-col>
          <el-col :span="6"><ServiceMenuNumber :ServiceMenuNumber="cxCode" ref="ServiceMenuNumber"></ServiceMenuNumber></el-col>
        </el-col>
        <el-col :span="2">
            <el-button icon="el-icon-plus" @click="changeToggleParam" class="moreParam">更多</el-button>
        </el-col>
        <el-col :span="22" v-show="toggleParam" class="toggleParam">
        <el-row>
          <el-col :span="6"><ServiceBigClass :ServiceBigClass="cxBig" ref="ServiceBigClass"></ServiceBigClass></el-col>
          <el-col :span="6"><ServiceSmallType :ServiceSmallType="cxSmall" ref="ServiceSmallType"></ServiceSmallType></el-col>
          <el-col :span="6"><ResponsibleAgent :ResponsibleAgent="cxAgent" ref="ResponsibleAgent" @CatData="getarr"></ResponsibleAgent></el-col>
          <el-col :span="6"><CarName :CarName="cxSeries" ref="CarName"></CarName></el-col>
          <el-col :span="6"><txt_CustomerName :txt_CustomerName="cxName" ref="txt_CustomerName"></txt_CustomerName></el-col>
          <el-col :span="6"><PhoneNumber :PhoneNumber="cxPhone" ref="PhoneNumber"></PhoneNumber></el-col>
          <el-col :span="6"><CarBrandNumber :CarBrandNumber="cxCarNo" ref="CarBrandNumber"></CarBrandNumber></el-col>
          <el-col :span="6"><VINCode :VINCode="cxVIN" ref="VINCode"></VINCode></el-col>
          <el-col :span="6"><ValidOrInvalid :ValidOrInvalid="cxYx" ref="ValidOrInvalid"></ValidOrInvalid></el-col>
          <el-col :span="6"><ComplaintLevel :ComplaintLevel="cxLvl" ref="ComplaintLevel"></ComplaintLevel></el-col>
          <el-col :span="6"> <Urgency :Urgency="cxJJD" ref="Urgency"></Urgency></el-col>
          <el-col :span="6"> <BuildListPeople :BuildListPeople="cxPerson" ref="BuildListPeople"></BuildListPeople></el-col>
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
      <el-table-column label="操作" align="center">
        <template slot-scope="scope">
          <el-button type="text" size="mini" @click="handle(scope.$index, scope.row)">详情</el-button>
        </template>
      </el-table-column>
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
import { crmApis } from "@/api/graphQLApiList/crm";
import { requestGraphQL } from "@/api/commonRequest";
import dt_BuildMenuDates from "@/components/crm/Time/dt_BuildMenuDates";
import CloseCaseDate from "@/components/crm/Time/CloseCaseDate";
import ReceiptStatus from "@/components/crm/Select/Clue/ReceiptStatus";
import ServiceBigClass from "@/components/crm/Select/Common/ServiceBigClass"
import ServiceSmallType from "@/components/crm/textbox/Complaint/ServiceSmallType"
import ServiceMenuNumber from "@/components/crm/textbox/Public/ServiceMenuNumber";
import ResponsibleAgent from "@/components/crm/EjectWindows/ResponsibleAgent";
import CarName from "@/components/crm/Select/Complaint/CarName";
import txt_CustomerName from "@/components/crm/textbox/Public/customerInfos/txt_CustomerName";
import PhoneNumber from "@/components/crm/textbox/Public/customerInfos/PhoneNumber";
import CarBrandNumber from "@/components/crm/textbox/Public/carInfo/CarBrandNumber";
import VINCode from "@/components/crm/textbox/Public/carInfo/VINCode";
import ValidOrInvalid from "@/components/crm/Select/Whether/ValidOrInvalid";
import ComplaintLevel from "@/components/crm/Select/Complaint/ComplaintLevel";
import Urgency from "@/components/crm/Select/RemindUpgradeSet/Urgency";
import BuildListPeople from "@/components/crm/textbox/Public/BuildListPeople";
export default {
  name: "ComplaintQuery",
  components: {
   dt_BuildMenuDates,
    CloseCaseDate,
    ReceiptStatus,
    ServiceBigClass,
    ServiceSmallType,
    ServiceMenuNumber,
    ResponsibleAgent,
    CarName,
    txt_CustomerName,
    PhoneNumber,
    CarBrandNumber,
    VINCode,
    ValidOrInvalid,
    ComplaintLevel,
    Urgency,
    BuildListPeople
  },
  data() {
    return {
      dlrCode:"",
      //初始化input
      cxCreated: {
        value: ""
      },
      cxClose: {
        value: ""
      },
      cxBig: {
        value: "",
        ptype: "2"
      },
      cxStatus: {
        value: ""
      },
      cxCode: {
        input: "",
        ptype: ""
      },
      cxSmall: {
        input: ""
      },
      cxAgent: {
        input: ""
      },
      cxSeries: {
        value: ""
      },
      cxName: {
        input: ""
      },
      cxPhone: {
        input: ""
      },
      cxCarNo: {
        input: ""
      },
      cxVIN: {
        input: ""
      },
      cxYx: {
        value: ""
      },
      cxLvl: {
        value: ""
      },
      cxJJD: {
        value: ""
      },
      cxPerson: {
        input: ""
      },
      toggleParam: false,
      dialogVisible: false,
      tabledatas: {
        colnames: [
          { label: "建单日期", value: "createdDate" },
          { label: "结案日期", value: "caseTime" },
          { label: "服务单号", value: "serverOrder" },
          { label: "客户名称", value: "custName" },
          { label: "电话", value: "contactTel" },
          { label: "建单人", value: "empName" },
          { label: "投诉类别", value: "serverFullClassName" },
          { label: "投诉次数", value: "addQty" },
          { label: "车牌号", value: "carLicense" },
          { label: "VIN码", value: "vin" },
          { label: "车系", value: "vCarseriesDesc" },
          { label: "责任网点", value: "dutyDlrName" },
          { label: "单据状态", value: "statusName" },
          { label: "是否有效", value: "isAsseName" },
          { label: "投诉级别", value: "serverLevelName" },
          { label: "紧急度", value: "serverUrgencyName" }
        ],
        tableData:[
        ],
        queryObj: {
          apiConfig: crmApis.csBuComplaintOrderQueryFindAll,
          apiQueryRow: [
            "createdDate",
            "caseTime",
            "serverOrder",
            "custName",
            "contactTel",
            "empName",
            "serverFullClassName",
            "addQty",
            "carLicense",
            "vin",
            "vCarseriesDesc",
            "dutyDlrName",
            "statusName",
            "isAsseName",
            "serverLevelName",
            "serverUrgencyName"
          ],
          params: {
            oemCode:"1",
            groupCode:"1",
            serverOrder:"",
            status:"",
            vin:"",
            custName:"",
            carSeriesCode:"",
            contactTel:"",
            carLicense:"",
            billEmpName:"",
            bigTypeCode:"",
            serverLevel:"",
            serverUrgency:"",
            createdDateStart:"",
            createdDateEnd:"",
            caseTimeBegin:"",
            caseTimeEnd:"",
            isAsse:"",
            dutyOrgCode:"",
            smallTypeName:"",
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
    getarr(val){
      
      let redata={}
      redata=val
      this.dlrCode=redata[0].dlrCode
    },
    changeToggleParam() {
      this.toggleParam = !this.toggleParam;
    },
    query(optype){
      debugger
      let that = this;
      that.tabledatas.queryObj.params.createdDateStart = that.$refs.dt_BuildMenuDates.value[0];
      that.tabledatas.queryObj.params.createdDateEnd = that.$refs.dt_BuildMenuDates.value[1];
      that.tabledatas.queryObj.params.caseTimeBegin = that.$refs.CloseCaseDate.value[0];
      that.tabledatas.queryObj.params.caseTimeEnd = that.$refs.CloseCaseDate.value[1];
      that.tabledatas.queryObj.params.status = that.$refs.ReceiptStatus.value;
      that.tabledatas.queryObj.params.serverOrder = that.$refs.ServiceMenuNumber.input;
      that.tabledatas.queryObj.params.bigTypeCode = that.$refs.ServiceBigClass.value;
      that.tabledatas.queryObj.params.smallTypeName = that.$refs.ServiceSmallType.input;
      that.tabledatas.queryObj.params.dutyOrgCode = (that.dlrCode==""||that.dlrCode==null)?undefined:that.dlrCode;
      that.tabledatas.queryObj.params.carSeriesCode = that.$refs.CarName.value;
      that.tabledatas.queryObj.params.custName = that.$refs.txt_CustomerName.input;
      that.tabledatas.queryObj.params.contactTel = that.$refs.PhoneNumber.input;
      that.tabledatas.queryObj.params.carLicense = that.$refs.CarBrandNumber.input;
      that.tabledatas.queryObj.params.vin = that.$refs.VINCode.input;
      that.tabledatas.queryObj.params.isAsse = that.$refs.ValidOrInvalid.value;
      that.tabledatas.queryObj.params.serverLevel = that.$refs.ComplaintLevel.value;
      that.tabledatas.queryObj.params.serverUrgency = that.$refs.Urgency.value;
      that.tabledatas.queryObj.params.billEmpName = that.$refs.BuildListPeople.input;
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
          pageSize: optype!=undefined?10:(optype=="2"?99999:that.tabledatas.pagesize),
          pageIndex: optype!=undefined?1:that.tabledatas.pageindex,
          //当前中台使用的名称有dataInfo、info，具体查看API文档
          dataInfo: that.tabledatas.queryObj.params
        }
      };
      //转换了中台请求格式数据
      var paramD = that.$getParams(queryObj);
      if(optype=="2"){
        this.buildExportParam(queryObj, paramD);
      }
      // 调用中台API方法（可复用）
      requestGraphQL(paramD).then(response => {
        if(optype=="2")
        {
          this.$utils.downloadFile(response, paramD.excelName)
        }else{
          if (response.data[queryObj.apiConfig.ServiceCode].result == "1" 
              //&&response.data[queryObj.apiConfig.ServiceCode].rows != ""
            ) {
              if(optype==undefined&&(response.data[queryObj.apiConfig.ServiceCode].rows==null||
              response.data[queryObj.apiConfig.ServiceCode].rows.length==0))
              {
                that.query(1);
              }else{
                that.tabledatas.tableData=response.data[queryObj.apiConfig.ServiceCode].rows
                that.tabledatas.pageindex =response.data[queryObj.apiConfig.ServiceCode].pageindex;
                that.tabledatas.total =response.data[queryObj.apiConfig.ServiceCode].records;
              }
            }else{
              this.$crmcf.showMessages(that,'error',response.data[queryObj.apiConfig.ServiceCode].msg)
            }
        }
      });
    },
    buildExportParam(queryObj, paramsObj) {
        var excelCols = {}
        for (var i = 0; i < this.tabledatas.colnames.length; i++) {
          excelCols[this.tabledatas.colnames[i].value] = this.tabledatas.colnames[i].label
        }
        // 数据类型
        paramsObj.dataType = 'excel'
        // excel文件名称
        paramsObj.excelName = "投诉单导出"
        // 根据请求API描述excel数据对象
        paramsObj.excels = [{
          // excel sheet名称
          title: "Sheet1",
          // 对应API服务编码
          actionName: queryObj.apiConfig.ServiceCode,
          // excel列
          columns: excelCols
      }]
    },
    handle:function(index,rowData){
      let that=this
      //that.$router.push({name:'ComplaintDetail',params:rowData})
      this.$crmcf.jumpDetailTag(that,'ComplaintDetail','/ComplaintDetail',rowData)
    },
    reset: function() {
      
      this.$refs.dt_BuildMenuDates.reset();
      this.$refs.CloseCaseDate.reset();
      this.$refs.ReceiptStatus.reset();
      this.$refs.ServiceMenuNumber.reset();
      this.$refs.ServiceBigClass.reset();
      this.$refs.ServiceSmallType.reset();
      this.dlrCode="";
      this.$refs.ResponsibleAgent.getData();
      this.$refs.CarName.reset();
      this.$refs.txt_CustomerName.reset();
      this.$refs.PhoneNumber.reset();
      this.$refs.CarBrandNumber.reset();
      this.$refs.VINCode.reset();
      this.$refs.ValidOrInvalid.reset();
      this.$refs.ComplaintLevel.reset();
      this.$refs.Urgency.reset();
      this.$refs.BuildListPeople.reset();
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

