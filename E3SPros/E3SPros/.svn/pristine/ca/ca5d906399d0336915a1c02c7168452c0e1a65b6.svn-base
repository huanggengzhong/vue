<!--
* 描述: 投诉延期审核= 投诉延期申请审核
* 创建人: zxuan
* 创建时间: 2019-08-3
* 记录：
* modify:xgz 2019年9月25日09:07:25
*  
-->
<template>
  <div class="app-container app-container-table">
    <div class="filter-container filter-button">
      <el-button type="primary" @click="applySH">保存总部任务</el-button>
      <el-button type="primary" @click="delayReviewSH">延期审核</el-button>
      <el-button type="primary" @click="refuse">延期驳回</el-button>
      <el-button type="primary" @click="refuse">申请回访</el-button>
      <el-button type="primary" @click="refuse">保存</el-button>
    </div>

    <div class="filter-container filter-title-crm">客户车辆信息</div>
    <div class="filter-container  filter-params-crm">
      <el-form label-position="right">
        <el-row>
          <el-col :span="6">
            <CustomersName_Add :CustomersName_Add="CustomersName_AddMain" ref="CustomersName_AddMainRef" />
          </el-col>
          <el-col :span="6">
            <Sex :Sex="SexMain" ref="SexMainRef" />
          </el-col>
          <el-col :span="6">
            <PhoneNumber :PhoneNumber="PhoneNumberMain" ref="PhoneNumberMainRef" />
          </el-col>
          <el-col :span="6">
            <BackupPhone :BackupPhone="BackupPhoneMain" ref="BackupPhoneMainRef" />
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="6">
            <UseCarName :UseCarName="UsernameMain" ref="UsernameMainRef" />
          </el-col>
          <el-col :span="6">
            <Sex :Sex="SexUserCar" ref="SexUserCarRef" />
          </el-col>
          <el-col :span="6">
            <UseCarPhone :UseCarPhone="UserphoneMain" ref="UserphoneMainRef" />
          </el-col>
          <el-col :span="6">
            <BackupPhone :BackupPhone="BackupUserCar" ref="BackupUserCarRef" />
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="6">
            <CarSeries :CarSeries="CarserieMain" ref="CarserieMainRef" />
          </el-col>
          <el-col :span="6">
            <CarBrandNumber :CarBrandNumber="CarBrandNumberMain" ref="CarBrandNumberMainRef" />
          </el-col>
          <el-col :span="6">
            <VINCode :VINCode="VINCodeMain" ref="VINCodeMainRef" />
          </el-col>
          <el-col :span="6">
            <EngineNumber :EngineNumber="EngineNumberMain" ref="EngineNumberMainRef" />
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="6">
            <CarBrand :CarBrand="CarBrandMain" ref="CarBrandMainRef" />
          </el-col>
          <el-col :span="6">
            <CarModel :CarModel="CarModelMain" ref="CarModelMainRef" />
          </el-col>
          <el-col :span="6">
            <NumberAttributtion :NumberAttributtion="NumberAttributtionMain" ref="NumberAttributtionMainRef" />
          </el-col>
        </el-row>
      </el-form>
    </div>
    <div class="filter-container filter-title-crm">单据信息</div>
    <div class="filter-container filter-params-crm">
      <el-form label-position="right">
        <el-row>
          <el-col :span="6">
            <ServiceMenuNumber :ServiceMenuNumber="ServiceMenuNumberMain" ref="ServiceMenuNumberMainRef" />
          </el-col>
          <el-col :span="6">
            <ComplaintDate :ComplaintDate="ComplaintDateMain" ref="ComplaintDateMainRef" />
          </el-col>
          <el-col :span="6">
            <sct_ComplaintRoute :sct_ComplaintRoute="sct_ComplaintRouteMain" ref="sct_ComplaintRouteMainRef" />
          </el-col>
          <el-col :span="6">
            <ComplaintTimes :ComplaintTimes="ComplaintTimesMain" ref="ComplaintTimesMainRef" />
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="6">
            <SourceNumber :SourceNumber="SourceNumberMain" ref="SourceNumberMainRef" />
          </el-col>
          <el-col :span="6">
            <ErrorDate :ErrorDate="ErrorDateMain" ref="ErrorDateMainRef" />
          </el-col>
          <el-col :span="6">
            <ErrorDistance :ErrorDistance="ErrorDistanceMain" ref="ErrorDistanceMainref" />
          </el-col>
          <el-col :span="6">
            <RunDistance :RunDistance="RunDistanceMain" ref="RunDistanceMainRef" />
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="6">
            <swd_complaintCategory :swd_complaintCategory="swd_complaintCategoryMain" @CatData="getbigclass" ref="swd_complaintCategoryMainRef" />
          </el-col>
          <el-col :span="6">
            <RelatedBenchmarkCar @getcarBrand="getcarBrand" :RelatedBenchmarkCar="RelatedBenchmarkCarMain" ref="RelatedBenchmarkCarMainRef" />
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="6">
            <ResponsibleAgent :ResponsibleAgent="ResponsibleAgentMain" ref="ResponsibleAgentMainRef" @CatData="getBrand" />
          </el-col>
          <!-- <el-col :span="6" class="crm-label-required">
            <ProcessingMethod :ProcessingMethod="form.proc" ref="proc" @changeCode="prochange"></ProcessingMethod>
          </el-col> -->
          <el-col :span="6">
            <ResponsibleDepartment :ResponsibleDepartment="ResponsibleDepartmentMain" ref="ResponsibleDepartmentMainRef" />
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="6">
            <swd_Responsible :swd_Responsible="swd_ResponsibleMain" ref="swd_ResponsibleMainRef" />
          </el-col>
          <el-col :span="6">
            <DutyPeoplePhone :DutyPeoplePhone="DutyPeoplePhoneMain" ref="DutyPeoplePhoneMainRef" />
          </el-col>
          <el-col :span="6">
            <ComplaintLevel :ComplaintLevel="ComplaintLevelMain" ref="ComplaintLevelMainRef" />
          </el-col>
          <el-col :span="6">
            <WhetherUrgent :WhetherUrgent="WhetherUrgentMain" ref="WhetherUrgentMainRef" />
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="6">
            <JobDescription :JobDescription="JobDescriptionMain" ref="JobDescriptionMainRef" />
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="6">
            <Remarks :Remarks="RemarksMain" ref="RemarksMainRef" />
          </el-col>
        </el-row>
      </el-form>
    </div>
    <Table :tabledatas="tabledatasDJ" ref="tableDJ" />

    <div class="filter-container filter-title-crm">延期申请信息</div>
    <div class="filter-container filter-params-crm">
      <el-form label-position="right">
        <el-row>
          <el-col :span="6">
            <ApplyExtensionTime :ApplyExtensionTime="ApplyExtensionTimeMain" ref="ApplyExtensionTimeMainRef" />
          </el-col>
          <el-col :span="6">
            <ExtensionCheckTime :ExtensionCheckTime="ExtensionCheckTimeMain" ref="ExtensionCheckTimeMainRef" />
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="6">
            <applyDelayReasonArea :applyDelayReasonArea="applyDelayReasonAreaMain" ref="applyDelayReasonAreaMainRef" />
          </el-col>
        </el-row>
      </el-form>
    </div>

    <div class="filter-container filter-title-crm">审核信息</div>
    <div class="filter-container filter-params-crm">
      <el-form label-position="right">
        <el-row>
          <el-col :span="6">
            <!-- <applyDelayMsg :applyDelayMsg="applyDelayMsgMain" ref="applyDelayMsgMainRef" /> -->
          </el-col>

        </el-row>
        <el-row>
          <el-col :span="6">
            <el-form-item label="上传附件" style="text-align:left">
              <el-upload class="upload-demo" ref="upload" action="https://jsonplaceholder.typicode.com/posts/" :file-list="fileList" :auto-upload="false">
                <el-button slot="trigger" type="primary" size="small">选取文件</el-button>
                <el-button style="margin-left: 10px;" size="small" @click="submitUpload">上传</el-button>
              </el-upload>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </div>
    <Table :tabledatas="tabledatasSH" ref="tabledatasSH" />
  </div>
</template>
<script>
import { crmApis } from "@/api/graphQLApiList/crm";
import { requestGraphQL } from "@/api/commonRequest";
import Table from "@/components/crm/table/Table";
//客户车辆信息

import CustomersName_Add from "@/components/crm/EjectWindows/CustomersName_Add";
import Sex from "@/components/crm/Select/Common/Customer/Sex";
import PhoneNumber from "@/components/crm/textbox/Public/customerInfos/PhoneNumber";
import BackupPhone from "@/components/crm/textbox/Public/customerInfos/BackupPhone";
import UseCarName from "@/components/crm/textbox/Public/customerInfos/UseCarName";
import UseCarPhone from "@/components/crm/textbox/Public/customerInfos/UseCarPhone";
import CarSeries from "@/components/crm/textbox/Public/carInfo/CarSeries";
import CarBrandNumber from "@/components/crm/textbox/Public/carInfo/CarBrandNumber";
import VINCode from "@/components/crm/textbox/Public/carInfo/VINCode";
import EngineNumber from "@/components/crm/textbox/Public/customerInfos/EngineNumber";
import CarBrand from "@/components/crm/textbox/Public/carInfo/CarBrand";
import CarModel from "@/components/crm/textbox/Public/carInfo/CarModel";
import NumberAttributtion from "@/components/crm/textbox/customerInfo/NumberAttributtion";
// 单据信息
import ServiceMenuNumber from "@/components/crm/textbox/Public/ServiceMenuNumber";
import ComplaintDate from "@/components/crm/Time/ComplaintDate";
import sct_ComplaintRoute from "@/components/crm/Select/Complaint/sct_ComplaintRoute";
import ComplaintTimes from "@/components/crm/textbox/Complaint/ComplaintTimes";
import SourceNumber from "@/components/crm/EjectWindows/SourceNumber";
import ErrorDate from "@/components/crm/Time/ErrorDate";
import ErrorDistance from "@/components/crm/textbox/Complaint/ErrorDistance";
import RunDistance from "@/components/crm/textbox/Complaint/RunDistance";
import swd_complaintCategory from "@/components/crm/EjectWindows/swd_complaintCategory";
import RelatedBenchmarkCar from "@/components/crm/EjectWindows/RelatedBenchmarkCar";
import ResponsibleAgent from "@/components/crm/EjectWindows/ResponsibleAgent";
import ResponsibleDepartment from "@/components/crm/EjectWindows/ResponsibleDepartment";
import swd_Responsible from "@/components/crm/EjectWindows/swd_Responsible";
import DutyPeoplePhone from "@/components/crm/textbox/Complaint/DutyPeoplePhone";
import ComplaintLevel from "@/components/crm/Select/Complaint/ComplaintLevel";
import WhetherUrgent from "@/components/crm/Select/Whether/WhetherUrgent";
import JobDescription from "@/components/crm/textbox/Complaint/JobDescription";
import Remarks from "@/components/crm/textbox/Complaint/Remarks";

//import CustomerSource from "@/components/crm/Select/Common/Customer/CustomerSource";
//import ProcessingMethod from "@/components/crm/Select/Complaint/ProcessingMethod";

import Abstract from "@/components/crm/textbox/Public/Abstract";
import CustomerRequest from "@/components/crm/textbox/Public/CustomerRequest";
import DealWithContent from "@/components/crm/textbox/Complaint/ComplainContent";
import CustomerServiceAnswer from "@/components/crm/textbox/Public/CustomerServiceAnswer";
import UpLoad from "@/components/crm/EjectWindows/UpLoad";
//延期申请信息
import ApplyExtensionTime from "@/components/crm/Time/ApplyExtensionTime";
import ExtensionCheckTime from "@/components/crm/Time/ExtensionCheckTime";
import applyDelayReasonArea from "@/components/crm/textbox/Public/applyDelayReasonArea";
// import applyDelayMsg from "@/components/crm/textbox/applyDelayMsg"; //延期申请信息

// 审核信息
import Opinion_withLinkEvent from "@/components/crm/Template/Opinion_withLinkEvent";
export default {
  name: "ComplaintExReview",
  components: {
    // 客户车辆信息
    Table,
    CustomersName_Add,
    Sex,
    PhoneNumber,
    BackupPhone,
    UseCarName,
    UseCarPhone,
    CarSeries,
    CarBrandNumber,
    VINCode,
    EngineNumber,
    CarBrand,
    CarModel,
    NumberAttributtion,
    // 单据信息
    ServiceMenuNumber,
    ComplaintDate,
    sct_ComplaintRoute,
    ComplaintTimes,
    SourceNumber,
    ErrorDate,
    ErrorDistance,
    RunDistance,
    swd_complaintCategory,
    RelatedBenchmarkCar,
    ResponsibleAgent,
    ResponsibleDepartment,
    swd_Responsible,
    DutyPeoplePhone,
    ComplaintLevel,
    WhetherUrgent,
    JobDescription,
    Remarks,
    //延期申请信息
    ApplyExtensionTime,
    ExtensionCheckTime,
    applyDelayReasonArea,
    // applyDelayMsg,
    // 审核信息
    Opinion_withLinkEvent
  },
  data() {
    return {
      active: 3,
      dialogVisible: false,
      delayreason: "",
      fileList: [],
      // 客户车辆信息
      CustomersName_AddMain: { input: "" },
      SexMain: { input: "" },
      CustomersName_AddMain: { input: "" },
      PhoneNumberMain: { input: "" },
      BackupPhoneMain: { input: "" },
      UsernameMain: { input: "" },
      SexUserCar: { input: "" },
      UserphoneMain: { input: "" },
      BackupUserCar: { input: "" },
      CarserieMain: { value: "" },
      CarBrandNumberMain: { input: "" },
      VINCodeMain: { input: "" },
      EngineNumberMain: { input: "" },
      CarBrandMain: { input: "" },
      CarModelMain: { input: "" },
      NumberAttributtionMain: { input: "" },
      // 单据信息
      ServiceMenuNumberMain: { input: "" },
      ComplaintDateMain: { value: "" },
      ComplaintTimesMain: { input: "" },
      SourceNumberMain: { input: "" },
      ErrorDateMain: { value: "" },
      ErrorDistanceMain: { input: "" },
      RunDistanceMain: { input: "" },
      swd_complaintCategoryMain: { input: "" },
      RelatedBenchmarkCarMain: { input: "" },
      ResponsibleAgentMain: { input: "" },
      ResponsibleDepartmentMain: { input: "" },
      swd_ResponsibleMain: { input: "" },
      DutyPeoplePhoneMain: { input: "" },
      ComplaintLevel: { input: "" },
      WhetherUrgentMain: { value: "" },
      JobDescriptionMain: { input: "" },
      RemarksMain: { input: "" },
      // 延期申请信息
      ApplyExtensionTimeMain: { value: "" },
      ExtensionCheckTimeMain: { value: "" },
      applyDelayReasonAreaMain: { input: "" },
      applyDelayMsgMain: { input: "" },
      // 审核信息
      Opinion_withLinkEventMain: { input_agree: "", input_disagree: "" },

      qqq: "",
      tabledatasDJ: {
        // 操作列
        ismuti: false,
        isoperat: false,
        havedistrbute: false,
        haveEdit: false,
        haveDel: false,
        colnames: [
          { label: "日期", value: "paperName" },
          { label: "摘要", value: "questionName" },
          { label: "客户要求", value: "maxCount" },
          { label: "投诉内容", value: "questionType" },
          { label: "坐席反馈", value: "questType" },
          { label: "附件", value: "queonType" }
        ],
        queryObj: {
          // .后面是服务编码，.前面固定写死
          apiConfig: crmApis,
          apiQueryRow: [],
          params: {}
        }
      },
      tabledatasSH: {
        // 操作列
        ismuti: false,
        isoperat: false,
        havedistrbute: false,
        haveEdit: false,
        haveDel: false,
        colnames: [
          { label: "申请时间", value: "paperName" },
          { label: "申请原因", value: "questionName" },
          { label: "审核人", value: "maxCount" },
          { label: "审核状态", value: "questionType" },
          { label: "审核意见", value: "questType" },
          { label: "审核时间", value: "queonType" }
        ],
        queryObj: {
          // .后面是服务编码，.前面固定写死
          apiConfig: crmApis,
          apiQueryRow: [],
          params: {}
        }
      },
      // 初始化加载
      tabledatas: {
        colnames: [
          { label: "服务单号", value: "serverOrder" },
          //{ label: "投诉日期", value: "xx" },
          { label: "投诉途径名称", value: "serverSourceName" },
          //{ label: "投诉次数", value: "xx1" },
          { label: "来源单号", value: "linkBillCode" },
          { label: "故障日期", value: "faultDate" },
          { label: "故障里程", value: "faultMileage" },
          { label: "行驶里程", value: "mileage" },
          //{ label: "投诉类别", value: "xx3" },
          { label: "相关基准车系名称", value: "baseSeriesName" },
          { label: "责任网点", value: "dutyDlrName" },
          { label: "责任部门", value: "nextDealOrgName" },
          { label: "责任人", value: "nextDealEmpName" },
          { label: "责任人电话", value: "nextDealPhone" },
          { label: "投诉级别", value: "serverLevelName" },
          { label: "是否紧急", value: "serverUrgencyName" },
          { label: "派工说明", value: "distRemark" },
          { label: "备注", value: "remark" }
        ],
        tableData: [],
        queryObj: {
          apiConfig: crmApis.csBuComplaintOrderQueryFindAll,
          apiQueryRow: [
            "serverOrder",
            //"xx",
            "serverSourceName",
            //"xx1",
            "linkBillCode",
            "faultDate",
            "faultMileage",
            "mileage",
            //"xx3",
            "baseSeriesName",
            "dutyDlrName",
            "nextDealOrgName",
            "nextDealEmpName",
            "nextDealPhone",
            "serverLevelName",
            "serverUrgencyName",
            "distRemark",
            "remark"
          ],
          params: {
            oemCode: "1",
            groupCode: "1"
            // serverOrder: "",
            // status: "",
            // vin: "",
            // custName: "",
            // carSeriesCode: "",
            // contactTel: "",
            // carLicense: "",
            // billEmpName: "",
            // bigTypeCode: "",
            // serverLevel: "",
            // serverUrgency: "",
            // createdDateStart: "",
            // createdDateEnd: "",
            // caseTimeBegin: "",
            // caseTimeEnd: "",
            // isAsse: "",
            // dutyOrgCode: "",
            // smallTypeName: ""
          }
        },
        pagesize: 10,
        pageindex: 1,
        total: 0
      }
    };
  },
  mounted: function() {
    // 路由跳转数据接收
    this.$nextTick(function() {
      this.initData(this.$route.params.serverOrder);//父页面拿过来
    });
  },
  methods: {
    // 延期审核初始化
    initData: function(rowDataServerOrder) {
      let that = this;
      if (rowDataServerOrder == undefined||rowDataServerOrder=="") {
        return;//没有单号，则不初始化，initData函数结束
      }
      debugger;
      let queryObj = {
        // api配置
        apiConfig: crmApis.csBuComplaintOrderQueryFindAll,
        // 需要调用的API服务配置
        apiServices: [
          {
            //表格中台返回网格的字段
            apiQueryRow: [
              "serverOrder",
              //"xx",
              "serverSourceName",
              //"xx1",
              "linkBillCode",
              "faultDate",
              "faultMileage",
              "mileage",
              //"xx3",
              "baseSeriesName",
              "dutyDlrName",
              "nextDealOrgName",
              "nextDealEmpName",
              "nextDealPhone",
              "serverLevelName",
              "serverUrgencyName",
              "distRemark",
              "remark"
            ]
          }
        ],
        //条件/实体参数（变量），根据typeParam中的定义配置
        variables: {
          pageSize: 10,
          pageIndex: 1,
          //当前中台使用的名称有dataInfo、info，具体查看API文档
          dataInfo: { oemCode: "1", groupCode: "1", serverOrder: rowDataServerOrder }
        }
      };
      //转换了中台请求格式数据
      var paramD = that.$getParams(queryObj);
      debugger;
      // 调用中台API方法（可复用）
      requestGraphQL(paramD).then(response => {
        debugger;
        let that = this;
        if (response.data[queryObj.apiConfig.ServiceCode].result == "1") {
          that.$refs.ServiceMenuNumberMainRef.input =
            response.data[queryObj.apiConfig.ServiceCode].rows[0].serverOrder; //服务单号
          // that.$refs.ComplaintDateMainRef.value =
          //   response.data[queryObj.apiConfig.ServiceCode].rows[0].xx;// 投诉日期
          that.$refs.sct_ComplaintRouteMainRef.value =
            response.data[
              queryObj.apiConfig.ServiceCode
            ].rows[0].serverSourceName; //投诉途径名称
          // that.$refs.ComplaintTimesMainRef.value =
          //   response.data[queryObj.apiConfig.ServiceCode].rows[0].xx1;// 投诉次数
          that.$refs.SourceNumberMainRef.input =
            response.data[queryObj.apiConfig.ServiceCode].rows[0].linkBillCode; //来源单号
          that.$refs.ErrorDateMainRef.value =
            response.data[queryObj.apiConfig.ServiceCode].rows[0].faultDate; //故障日期
          that.$refs.ErrorDistanceMainref.input =
            response.data[queryObj.apiConfig.ServiceCode].rows[0].faultMileage; //故障里程
          that.$refs.RunDistanceMainRef.input =
            response.data[queryObj.apiConfig.ServiceCode].rows[0].mileage; //行驶里程
          // that.$refs.swd_complaintCategoryMainRef.input =
          //   response.data[queryObj.apiConfig.ServiceCode].rows[0].xx3; //投诉类别
          that.$refs.RelatedBenchmarkCarMainRef.input =
            response.data[
              queryObj.apiConfig.ServiceCode
            ].rows[0].baseSeriesName; //相关基准车系名称
          that.$refs.ResponsibleAgentMainRef.input =
            response.data[queryObj.apiConfig.ServiceCode].rows[0].dutyDlrName; //责任网点（责任专营店名称）
          that.$refs.ResponsibleDepartmentMainRef.input =
            response.data[
              queryObj.apiConfig.ServiceCode
            ].rows[0].nextDealOrgName; //责任部门
          that.$refs.swd_ResponsibleMainRef.input =
            response.data[
              queryObj.apiConfig.ServiceCode
            ].rows[0].nextDealEmpName; //责任人
          that.$refs.DutyPeoplePhoneMainRef.input =
            response.data[queryObj.apiConfig.ServiceCode].rows[0].nextDealPhone; //责任人电话
          that.$refs.ComplaintLevelMainRef.value =
            response.data[
              queryObj.apiConfig.ServiceCode
            ].rows[0].serverLevelName; //投诉级别
          that.$refs.WhetherUrgentMainRef.value =
            response.data[
              queryObj.apiConfig.ServiceCode
            ].rows[0].serverUrgencyName; //是否紧急
          that.$refs.JobDescriptionMainRef.input =
            response.data[queryObj.apiConfig.ServiceCode].rows[0].distRemark; //派工说明
          that.$refs.RemarksMainRef.value =
            response.data[queryObj.apiConfig.ServiceCode].rows[0].remark; //备注
        }
      });
    },
    // 
    initDataCheckQuery:function(){
      let that=this;
       let queryObj = {
        // api配置
        apiConfig: crmApis.csBuComplaintDelayQueryFindAll,
        // 需要调用的API服务配置
        apiServices: [
          {
            //表格中台返回网格的字段
            apiQueryRow: [
              "applyTime",
              "delayReson",
              "shPersonName",
              "delayStatus",
              "shDes",
              "shTimie",
            ]
          }
        ],
        //条件/实体参数（变量），根据typeParam中的定义配置
        variables: {
          pageSize: 10,
          pageIndex: 1,
          //当前中台使用的名称有dataInfo、info，具体查看API文档
          dataInfo: { oemCode: "1", groupCode: "1", serverOrder: rowDataServerOrder }
        }
      };
      //转换了中台请求格式数据
      var paramD = that.$getParams(queryObj);
      debugger;
      // 调用中台API方法（可复用）
      requestGraphQL(paramD).then(response => {
        debugger;
        let that = this;
        if (response.data[queryObj.apiConfig.ServiceCode].result == "1") {
         
        }
      });

    },





    submitUpload() {
      this.$refs.upload.submit();
    },
    applySH: function() {},
    // delayReviewSH: function() {
    //   let that = this;
    //   let queryObj = {
    //     // api配置
    //     apiConfig: crmApis,
    //     // 需要调用的API服务配置
    //     apiServices: [
    //       {
    //         //表格中台返回网格的字段
    //         apiQueryRow: []
    //       }
    //     ],
    //     //条件/实体参数（变量），根据typeParam中的定义配置
    //     variables: {
    //       //当前中台使用的名称有dataInfo、info，具体查看API文档
    //       dataInfo: {
    //         delayId: "",
    //         shDes: that.$refs.withLinkEvent.value,
    //         delayStatus: that.$refs.withLinkEvent.input
    //       }
    //     }
    //   };
    //   //转换了中台请求格式数据
    //   var paramD = that.$getParams(queryObj);
    //   // 调用中台API方法（可复用）
    //   requestGraphQL(paramD).then(response => {
    //     if (
    //       response.data[queryObj.apiConfig.ServiceCode].result == "1" &&
    //       response.data[queryObj.apiConfig.ServiceCode].rows != ""
    //     ) {
    //       this.$notify({
    //         title: "成功",
    //         message: "审核成功！",
    //         type: "success"
    //       });
    //     } else {
    //       that.$crmcf.showMessages(
    //         that,
    //         "error",
    //         response.data[queryObj.apiConfig.ServiceCode].msg
    //       );
    //     }
    //   });
    // },
    refuse: function() {}
  }
};
</script>
