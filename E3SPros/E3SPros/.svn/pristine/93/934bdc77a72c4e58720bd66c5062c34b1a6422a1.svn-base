<!--
* 描述: 投诉回访
* 创建人: lzhihui
* 创建时间: 2019-08-3
* 记录：
*  
-->
<template>
  <div class="app-container app-container-table filter-params-crm-scroll">
    <div class="filter-container filter-button">
      <el-button type="primary" size="small" @click="ProgressFK">进度反馈</el-button>
      <el-button size="small" @click="closeCase">结案</el-button>
      <el-button size="small" @click="refuse">驳回</el-button>
      <el-button size="small">问卷</el-button>
    </div>

    <div class="filter-container filter-title-crm">客户车辆信息</div>
    <div class="filter-container filter-params-crm filter-params-sub">
      <el-form label-position="right" disabled>
        <el-row>
          <el-col :span="6">
            <txt_CustomerName :txt_CustomerName="form.custName" ref="custName"></txt_CustomerName>
          </el-col>
          <el-col :span="6">
            <Sex :Sex="form.gender" ref="gender"></Sex>
          </el-col>
          <el-col :span="6">
            <PhoneNumber :PhoneNumber="form.contactTel" ref="contactTel"></PhoneNumber>
          </el-col>
          <el-col :span="6">
            <BackupPhone :BackupPhone="form.backupTel" ref="backupTel"></BackupPhone>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="6">
            <UseCarName :UseCarName="form.useCustName" ref="useCustName"></UseCarName>
          </el-col>
          <el-col :span="6">
            <Sex :Sex="form.useGenderCode" ref="useGenderCode"></Sex>
          </el-col>
          <el-col :span="6">
            <UseCarPhone :UseCarPhone="form.usePhone" ref="usePhone"></UseCarPhone>
          </el-col>
          <el-col :span="6">
            <BackupPhone :BackupPhone="form.useBackupTel" ref="useBackupTel"></BackupPhone>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="6">
            <CarSeries :CarSeries="form.vCarseriesDesc" ref="vCarseriesDesc"></CarSeries>
          </el-col>
          <el-col :span="6">
            <CarBrandNumber :CarBrandNumber="form.carLicense" ref="carLicense"></CarBrandNumber>
          </el-col>
          <el-col :span="6">
            <VINCode :VINCode="form.vin" ref="vin"></VINCode>
          </el-col>
          <el-col :span="6">
            <EngineNumber :EngineNumber="form.engineNo" ref="engineNo"></EngineNumber>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="6">
            <CarBrand :CarBrand="form.carBrandCn" ref="carBrandCn"></CarBrand>
          </el-col>
          <el-col :span="6">
            <CarModel :CarModel="form.vCartypeDesc" ref="vCartypeDesc"></CarModel>
          </el-col>
          <!-- <el-col :span="6">
            <GearBoxName :GearBoxName="form.Gearname" ref="Gearname"></GearBoxName>
          </el-col>
          <el-col :span="6">
            <GearBoxNumber :GearBoxNumber="form.Gearnum" ref="Gearnum"></GearBoxNumber>
          </el-col>
          <el-col :span="6">
            <LeakMount :LeakMount="form.Leakm" ref="Leakm"></LeakMount>
          </el-col> -->
          <el-col :span="6">
            <NumberAttributtion :NumberAttributtion="form.Numattr" ref="Numattr"></NumberAttributtion>
          </el-col>
        </el-row>
      </el-form>
    </div>
    <div class="filter-container filter-title-crm">单据信息</div>
    <div class="filter-container filter-params-crm filter-params-sub">
      <el-form label-position="right" disabled>
        <el-row>
          <el-col :span="6">
            <ServiceMenuNumber :ServiceMenuNumber="form.serverOrder" ref="serverOrder" />
          </el-col>
          <el-col :span="6">
            <ComplaintDate :ComplaintDate="form.createdDate" ref="createdDate" />
          </el-col>
          <el-col :span="6">
            <ComplaintRoute :sct_ComplaintRoute="form.serverSourceCode" ref="serverSourceCode" />
          </el-col>
          <el-col :span="6">
            <ComplaintTimes :ComplaintTimes="form.addQty" ref="addQty" />
          </el-col>
        </el-row>
          <el-row>
          <el-col :span="6">
            <SourceNumber :SourceNumber="form.linkBillCode" ref="linkBillCode" />
          </el-col>
          <el-col :span="6">
            <ErrorDate :ErrorDate="form.faultDate" ref="faultDate" />
          </el-col>
          <el-col :span="6">
            <ErrorDistance :ErrorDistance="form.faultMileage" ref="faultMileage" />
          </el-col>
          <el-col :span="6">
            <RunDistance :RunDistance="form.mileage" ref="mileage" />
          </el-col>
          </el-row>
          <el-row>
          <el-col :span="6">
            <ServiceType :swd_complaintCategory="form.serverFullClassName" ref="serverFullClassName" />
          </el-col>
          <el-col :span="6">
            <RelatedBenchmarkCar :RelatedBenchmarkCar="form.baseSeriesName" ref="baseSeriesName"/>
          </el-col>
          </el-row>
          <el-row>
          <el-col :span="6">
            <ResponsibleAgent :ResponsibleAgent="form.dutyDlrName" ref="dutyDlrName" />
          </el-col>
          <el-col :span="6">
            <ResponsibleDepartment :ResponsibleDepartment="form.nextDealOrgName" ref="nextDealOrgName"/>
          </el-col>
          </el-row>
          <el-row>
          <el-col :span="6">
            <OffsiteNetwork :swd_Responsible="form.nextDealEmpName" ref="nextDealEmpName" />
          </el-col>
          <el-col :span="6">
            <DutyPeoplePhone :DutyPeoplePhone="form.nextDealPhone" ref="nextDealPhone" />
          </el-col>
          <el-col :span="6">
            <ComplaintLevel :ComplaintLevel="form.serverLevel" ref="serverLevel" />
          </el-col>
          <el-col :span="6">
            <WhetherUrgent :WhetherUrgent="form.serverUrgency" ref="serverUrgency" />
          </el-col>
          </el-row>
          <el-row>
          <el-col :span="6">
            <JobDescription :JobDescription="form.distRemark" ref="distRemark" />
          </el-col>
          </el-row>
          <el-row>
          <el-col :span="6">
            <Remarks :Remarks="form.remark" ref="remark" />
          </el-col>
          </el-row>
      </el-form>
      <el-table
        :data="tabledatas.tableData"
        highlight-current-row
        style="width: 100%;height:150px"
        max-height="350px"
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
    <div class="filter-container filter-title-crm">处理过程</div>
    <div class="filter-container filter-params-crm filter-params-sub">
      <!-- <div style="float:left">
        <label>责任方</label>
        <el-button type="primar">网点</el-button>
        <el-button type="primar">厂家</el-button>
        <el-button type="primar">客服中心</el-button>
        <el-button type="primary">客户</el-button>
      </div> -->
      <Table :tabledatas="tabledatasCL" ref="tableCL" />
      <!-- <el-form label-position="right" disabled>
        <el-row>
          <el-col :span="7">
            <NextStepDutyPeople :NextStepDutyPeople="NextStepDutyPeople" ref="NextStepDutyPeople" />
          </el-col>
        </el-row>
      </el-form> -->
    </div>

    <div class="filter-container filter-title-crm">回访信息</div>
    <div class="filter-container filter-params-crm filter-params-sub">
      <el-form label-position="right" :model="ruleForm" ref="ruleForm">
        <el-row>
          <el-form label-position="right" disabled>
            <el-col :span="6">
              <ReturnVisitTime_single
                :ReturnVisitTime_single="ruleForm.ReturnVisitTime_single"
                ref="ReturnVisitTime_single"
              />
            </el-col>
          </el-form>
          <el-col :span="6" class="crm-label-required">
            <ContactStatus :ContactStatus="ruleForm.ContactStatus" ref="ContactStatus"></ContactStatus>
          </el-col>

          <el-col :span="6" class="crm-label-required">
            <NextReturnVisitTime
              :NextReturnVisitTime="ruleForm.NextReturnVisitTime"
              ref="NextReturnVisitTime"
            ></NextReturnVisitTime>
          </el-col>

          <el-form label-position="right" disabled>
            <el-col :span="6">
              <RevisitTimes :RevisitTimes="ruleForm.RevisitTimes" ref="RevisitTimes"></RevisitTimes>
            </el-col>
          </el-form>

          
        </el-row>
        <el-row>
          <el-col :span="6" class="crm-label-required">
            <ReturnVisitContent
              :ReturnVisitContent="ruleForm.ReturnVisitContent"
              ref="ReturnVisitContent"/>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="6">
            <TxtArea_OpinionFeedback
              :TxtArea_OpinionFeedback="ruleForm.TxtArea_OpinionFeedback"
              ref="TxtArea_OpinionFeedback"/>
          </el-col>
        </el-row>
      </el-form>
    </div>

    <div class="filter-container filter-title-crm">过往记录</div>
    <Table :tabledatas="tabledatas_record" ref="tabledatas_record" />
  </div>
</template>
<script>
import { crmApis } from "@/api/graphQLApiList/crm";
import { requestGraphQL } from "@/api/commonRequest";
import Table from "@/components/crm/table/Table";
//客户车辆信息
import UseCarPhone from "@/components/crm/textbox/Public/customerInfos/UseCarPhone";
import CustomersNameAdd from "@/components/crm/EjectWindows/CustomersName";
import Sex from "@/components/crm/Select/Common/Customer/Sex";
import PhoneNumber from "@/components/crm/textbox/Public/customerInfos/PhoneNumber";
import BackupPhone from "@/components/crm/textbox/Public/customerInfos/BackupPhone";
import CarSeries from "@/components/crm/textbox/Public/carInfo/CarSeries";
import CarBrandNumber from "@/components/crm/textbox/Public/carInfo/CarBrandNumber";
import VINCode from "@/components/crm/textbox/Public/carInfo/VINCode";
import UseCarName from "@/components/crm/textbox/Public/customerInfos/UseCarName";
import CarBrand from "@/components/crm/textbox/Public/carInfo/CarBrand";
import CarModel from "@/components/crm/textbox/Public/carInfo/CarModel";
import GearBoxName from "@/components/crm/textbox/Public/carInfo/GearBoxName";
import LeakMount from "@/components/crm/textbox/Public/carInfo/LeakMount";
import NumberAttributtion from "@/components/crm/textbox/customerInfo/NumberAttributtion";
import EngineNumber from "@/components/crm/textbox/Public/customerInfos/EngineNumber";
import GearBoxNumber from "@/components/crm/textbox/Public/carInfo/GearBoxNumber";
//单据信息
import ServiceMenuNumber from "@/components/crm/textbox/Public/ServiceMenuNumber";
import ComplaintDate from "@/components/crm/Time/ComplaintDate";
import ComplaintRoute from "@/components/crm/Select/Complaint/sct_ComplaintRoute";
import ComplaintTimes from "@/components/crm/textbox/Complaint/ComplaintTimes";
import SourceNumber from "@/components/crm/EjectWindows/SourceNumber";
import ErrorDate from "@/components/crm/Time/ErrorDate";
import ErrorDistance from "@/components/crm/textbox/Complaint/ErrorDistance";
import RunDistance from "@/components/crm/textbox/Complaint/RunDistance";
import ServiceType from "@/components/crm/EjectWindows/swd_complaintCategory";
import RelatedBenchmarkCar from "@/components/crm/EjectWindows/RelatedBenchmarkCar";
import ResponsibleAgent from "@/components/crm/EjectWindows/ResponsibleAgent";
import ResponsibleDepartment from "@/components/crm/EjectWindows/ResponsibleDepartment";
import OffsiteNetwork from "@/components/crm/EjectWindows/swd_Responsible";
import DutyPeoplePhone from "@/components/crm/textbox/Complaint/DutyPeoplePhone";
import ComplaintLevel from "@/components/crm/Select/Complaint/ComplaintLevel";
import WhetherUrgent from "@/components/crm/Select/Whether/WhetherUrgent";
import JobDescription from "@/components/crm/textbox/Complaint/JobDescription";
import Remarks from "@/components/crm/textbox/Complaint/Remarks";
import NextStepDutyPeople from "@/components/crm/textbox/Complaint/NextStepDutyPeople";
import withLinkEvent from "@/components/crm/Template/Opinion_withLinkEvent";

//回访信息
import NextReturnVisitTime from "@/components/crm/Time/NextReturnVisitTime.vue";
import RevisitTimes from "@/components/crm/textbox/Clue/RevisitTimes.vue";
import ContactStatus from "@/components/crm/Select/Clue/ContactStatus.vue";
import ReturnVisitContent from "@/components/crm/textbox/Clue/CallCenterClue/ReturnVisitContent.vue";
import TxtArea_OpinionFeedback from "@/components/crm/textbox/Clue/Revisit/TxtArea_OpinionFeedback.vue";
import ReturnVisitTime_single from "@/components/crm/Time/ReturnVisitTime_single";
import txt_CustomerName from "@/components/crm/textbox/Public/customerInfos/txt_CustomerName";

export default {
  name: "ComplaintReVisit",
  components: {
    Table,
    CustomersNameAdd,
    Sex,
    PhoneNumber,
    BackupPhone,
    VINCode,
    UseCarName,
    CarBrand,
    CarModel,
    GearBoxName,
    LeakMount,
    NumberAttributtion,
    EngineNumber,
    GearBoxNumber,
    UseCarPhone,
    CarSeries,
    CarBrandNumber,

    ServiceMenuNumber,
    ComplaintDate,
    ComplaintRoute,
    ComplaintTimes,
    SourceNumber,
    ErrorDate,
    ErrorDistance,
    RunDistance,
    ServiceType,
    RelatedBenchmarkCar,
    ResponsibleAgent,
    ResponsibleDepartment,
    OffsiteNetwork,
    DutyPeoplePhone,
    ComplaintLevel,
    WhetherUrgent,
    JobDescription,
    Remarks,
    NextStepDutyPeople,
    withLinkEvent,
    NextReturnVisitTime,
    RevisitTimes,
    ContactStatus,
    ReturnVisitContent,
    TxtArea_OpinionFeedback,
    ReturnVisitTime_single,
    txt_CustomerName
  },
  data() {
    return {
      active: 3,
      dialogVisible: false,
      fileList: [],
      HFserverId: this.$route.params.serverId,
      HFserverOrder: this.$route.params.serverOrder,
      //form对象：查询初始化表单；ruleForm需要输入校验的表单
      form:{
        Numattr: {
          input: ""
        },
        vCartypeDesc: {
          input: ""
        },
        carBrandCn: {
          input: ""
        },
        engineNo: {
          input: ""
        },
        vin: {
          input: ""
        },
        carLicense: {
          input: ""
        },
        vCarseriesDesc: {
          input: ""
        },
        backupTel: {
          input: ""
        },
        usePhone: {
          input: ""
        },
        useCustName: {
          input: ""
        },
        useBackupTel: {
          input: ""
        },
        contactTel: {
          input: ""
        },
        custName: {
          input: ""
        },
        gender: {
          value: ""
        },
        useGenderCode: {
          value: ""
        },
        serverOrder: {
          input: ""
        },
        createdDate: {
          value: ""
        },
        serverSourceCode: {
          value: ""
        },
        addQty: {
          input: ""
        },
        linkBillCode: {
          input: "",
          dialogVisible:false
        },
        faultDate: {
          value: ""
        },
        faultMileage: {
          input: ""
        },
        mileage: {
          input: ""
        },
        serverFullClassName: {
          input: "",
          dialogVisible:false
        },
        baseSeriesName: {
          input: "",
          dialogVisible:false
        },
        dutyDlrName: {
          input: "",
          dialogVisible:false
        },
        nextDealOrgName: {
          input: "",
          dialogVisible:false
        },
        nextDealEmpName: {
          input: "",
          dialogVisible:false
        },
        nextDealPhone: {
          input: ""
        },
        serverLevel: {
          value: ""
        },
        serverUrgency: {
          value: ""
        },
        distRemark: {
          input: ""
        },
        remark: {
          input: ""
        }
      },
      //回访信息
      ruleForm: {
        ReturnVisitTime_single: {
          value: new Date()
        },
        NextReturnVisitTime: {
          value: ""
        },
        RevisitTimes: {
          input: ""
        },
        ReturnVisitContent: {
          input: ""
        },
        TxtArea_OpinionFeedback: {
          input: ""
        },
        ContactStatus: {
          value: ""
        }
      },
      //表单校验

      tabledatas: {
        colnames: [
          { label: "日期", value: "createdDate" },
          { label: "摘要", value: "serverTitle" },
          { label: "客户要求", value: "custRequirement" },
          { label: "投诉内容", value: "complainDesc" },
          { label: "坐席回答", value: "serverAnswer" }
        ],
        tableData: [],
        queryObj: {
          // .查询条件缺少责任人(姓名)  网格列也缺少责任人(姓名)
          apiConfig: crmApis.csBuComplaintOrderQueryFindAll,
          apiQueryRow: [
            "createdDate",
            "serverTitle",
            "custRequirement",
            "complainDesc",
            "serverAnswer"
          ],
          params: {
            oemCode: this.$store.getters.orgInfo.OEM_CODE,
            groupCode: this.$store.getters.orgInfo.GROUP_CODE,
            serverOrder: ""
          }
        },
        pagesize: 10,
        pageindex: 1,
        total: 0
      },

      tabledatasCL: {
        ismuti: false,
        isoperat: false,
        havedistrbute: false,
        haveEdit: false,
        haveDel: false,
        colnames: [
          { label: "组织", value: "orgName" },
          { label: "处理人", value: "dealPerson" },
          { label: "处理时间", value: "dealTime" },
          { label: "执行操作", value: "dealStatus" },
          { label: "处理内容", value: "remark" },
          //{ label: "附件", value: "queonType" }
        ],
        queryObj: {
          // .后面是服务编码，.前面固定写死
          apiConfig: crmApis.csBuDealRecordQueryFindAll,
          apiQueryRow: [
            "orgName",
            "dealPerson",
            "dealTime",
            "dealStatus",
            "remark",
          ],
          params: {
            oemCode:"1",
            groupCode:"1",
            serverOrder:"1"
          }
        }
      },

      tabledatas_record: {
        // 操作列
        ismuti: false,
        isoperat: false,
        havedistrbute: false,
        haveEdit: false,
        haveDel: false,
        colnames: [
          { label: "回访单号", value: "" },
          { label: "来源单号", value: "" },
          { label: "来源单据类型", value: "" },
          { label: "联系电话", value: "" },
          { label: "接触状态", value: "" },
          { label: "备注", value: "" },
          { label: "建单时间", value: "" },
          { label: "回访内容", value: "" },
          { label: "计划拜访时间", value: "" }
        ],
        queryObj: {
          // .后面是服务编码，.前面固定写死
          apiConfig: crmApis.csBuComplaintOrderQueryFindAll,
          apiQueryRow: [],
          params: {}
        }
      }
    };
  },
  mounted: function() {
    this.$nextTick(function() {
      
      this.initData(this.$route.params.serverOrder)
      //this.initData();
      //this.initDataother();
    });
  },
  methods: {
    initData(fwdh){
      let that = this;
      if(fwdh==undefined)
      {
        return;
      }
      let queryObj = {
        // api配置
        apiConfig: crmApis.csBuComplaintOrderQueryFindAll,
        // 需要调用的API服务配置
        apiServices: [
          {
              //表格中台返回网格的字段
              apiQueryRow: [
              "addQty",
              "backupTel",
              "baseSeriesCode",
              "baseSeriesName",
              "bigClassCode",
              "carBrandCn",
              "carBrandCode",
              "carLicense",
              "caseTime",
              "closeResult",
              "complainDesc",
              "contactTel",
              "createdDate",
              "crruNode",
              "crruNodeName",
              "custAge",
              "custName",
              "custNo",
              "custRequirement",
              "custTag",
              "dealDlrCode",
              "dealDlrName",
              "distRemark",
              "dutyDlrCode",
              "dutyDlrName",
              "dutyObj",
              "empName",
              "engineNo",
              "faultDate",
              "faultMileage",
              "gender",
              "genderName",
              "invoiceDate",
              "isAsseName",
              "lastUpdatedDate",
              "linkBillCode",
              "mileage",
              "nextDealEmpName",
              "nextDealOrgName",
              "nextDealPhone",
              "remark",
              "requOrgCode",
              "requOrgName",
              "reviewScore",
              "serverAnswer",
              "serverClassCode",
              "serverFullClassName",
              "serverId",
              "serverLevel",
              "serverLevelName",
              "serverOrder",
              "serverSourceCode",
              "serverSourceName",
              "serverTitle",
              "serverUrgency",
              "serverUrgencyName",
              "status",
              "statusName",
              "useBackupTel",
              "useCustAge",
              "useCustName",
              "useGenderCode",
              "useGenderName",
              "usePhone",
              "vCarseriesDesc",
              "vCartypeDesc",
              "vin"
            ]
          }
        ],
        //条件/实体参数（变量），根据typeParam中的定义配置
        variables: {
          pageSize: 10,
          pageIndex: 1,
          //当前中台使用的名称有dataInfo、info，具体查看API文档
          dataInfo: {
            oemCode:"1",
            groupCode:"1",
            serverOrder:fwdh
          }
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
          
          let results = response.data[queryObj.apiConfig.ServiceCode].rows[0];
          // that.TSserverType="2"
          // that.TSserverId=results["serverId"]
          // that.TSserverOrder=results["serverOrder"]
          // that.crruNode=results["crruNode"]
          // that.setBtnDp(results["status"])
          // that.carBrandCode=results["carBrandCode"]
          // that.bigClassCode=results["bigClassCode"]
          for (let key in that.form) {
            if('input' in that.form[key]){
              //
              if(results.hasOwnProperty(key))
              {
                that.form[key].input = results[key];
                that.$refs[key].getData()
              }
            }else{
              if(results.hasOwnProperty(key)){
                
                that.form[key].value = results[key];
                that.$refs[key].getData()
              }
            }
          }
          that.tabledatas.tableData=response.data[queryObj.apiConfig.ServiceCode].rows
          that.tabledatas.pageindex =response.data[queryObj.apiConfig.ServiceCode].pageindex;
          that.tabledatas.total =response.data[queryObj.apiConfig.ServiceCode].records;

          that.tabledatasCL.queryObj.params.serverOrder = fwdh;
          setTimeout(function () {
            if (that.$refs.tableCL!=undefined){
              that.$refs.tableCL.getData();
            }
          }, 100)
        }else{
          that.$crmcf.showMessages(that,'error',response.data[queryObj.apiConfig.ServiceCode].msg)
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

    //进度反馈
    ProgressFK() {
      let that = this;
       let formName = "ruleForm";
      let flag = false;
      var config = this.config;
      config = {
        NextReturnVisitTime: [
          true,
          this.$crmcf.crmRegExp("empty"),
          "value",
          that.$refs.NextReturnVisitTime.value,
          "下次回访时间",
          "不能为空"
        ],
        ContactStatus: [
          true,
          this.$crmcf.crmRegExp("empty"),
          "value",
          that.$refs.ContactStatus.value,
          "接触状态",
          "不能为空"
        ],
        ReturnVisitContent: [
          true,
          this.$crmcf.crmRegExp("empty"),
          "input",
          that.$refs.ReturnVisitContent.input,
          "回访内容",
          "不能为空"
        ],
        
      };

      that.$crmcf.validForm(that, formName, config, function(flag) {
        if (flag) {
          let queryObj = {
        // api配置
        type: "mutation",
        apiConfig: crmApis.csBuComplaintOrderMutationDealTS,
        // 需要调用的API服务配置
        apiServices: [
          {
            //表格中台返回网格的字段
            apiQueryRow: []
          }
        ],
        //条件/实体参数（变量），根据typeParam中的定义配置
        variables: {
          //当前中台使用的名称有dataInfo、info，具体查看API文档
          dataInfo: {
            crruNode: "TS_HFZC",
            dealContent: that.$refs.ReturnVisitContent.input,
            dealTitle: "客服中心处理保存",
            oemCode: "1",
            groupCode: "1",
            serverId: that.HFserverId,
            serverOrder: that.HFserverOrder,
            serverType: "2",
            // nextDealUserId: "1", //测试下一步处理人，1是管理员  结案不用填下一步处理人
            // nextDealEmpId: "1",
            custName: that.form.custName.input,
            contactTel: that.$refs.contactTel.input
          }
        }
      };
      //转换了中台请求格式数据
      var paramD = that.$getParams(queryObj);
      ;
      // 调用中台API方法（可复用）
      requestGraphQL(paramD).then(response => {
        if (response.data[queryObj.apiConfig.ServiceCode].result == "1") {
          that.$crmcf.showMessages(that,'success','操作成功！')
          that.$crmcf.crmcloseView(that,'crmMyToBe')
        } else {
          that.$crmcf.showMessages(that,'error',response.data[queryObj.apiConfig.ServiceCode].msg)
        }
      });
        }
      });
    },

    //驳回
    refuse(){
      this.$confirm("确认驳回吗？")
        .then(_ => {
          let that = this;
          that.disagree();
        })
        .catch(_ => {});
    },
    disagree() {
      let that = this;
      let formName = "ruleForm";
      let flag = false;
      var config = this.config;
      config = {
        NextReturnVisitTime: [
          true,
          this.$crmcf.crmRegExp("empty"),
          "value",
          that.$refs.NextReturnVisitTime.value,
          "下次回访时间",
          "不能为空"
        ],
        ContactStatus: [
          true,
          this.$crmcf.crmRegExp("empty"),
          "value",
          that.$refs.ContactStatus.value,
          "接触状态",
          "不能为空"
        ],
        ReturnVisitContent: [
          true,
          this.$crmcf.crmRegExp("empty"),
          "input",
          that.$refs.ReturnVisitContent.input,
          "回访内容",
          "不能为空"
        ],
        
      };

     that.$crmcf.validForm(that, formName, config, function(flag) {
        if (flag) {
          let queryObj = {
        // api配置
        type: "mutation",
        apiConfig: crmApis.csBuComplaintOrderMutationDealTS,
        // 需要调用的API服务配置
        apiServices: [
          {
            //表格中台返回网格的字段
            apiQueryRow: []
          }
        ],
        //条件/实体参数（变量），根据typeParam中的定义配置
        variables: {
          //当前中台使用的名称有dataInfo、info，具体查看API文档
          dataInfo: {
            crruNode: "TS_HFBH",
            dealContent: that.$refs.ReturnVisitContent.input,
            dealTitle: "客服中心驳回",
            oemCode: "1",
            groupCode: "1",
            serverId: that.HFserverId,
            serverOrder: that.HFserverOrder,
            serverType: "2",
            // nextDealUserId: "1", //测试下一步处理人，1是管理员  结案不用填下一步处理人
            // nextDealEmpId: "1",
            custName: that.form.custName.input,
            contactTel: that.$refs.contactTel.input
          }
        }
      };
      //转换了中台请求格式数据
      var paramD = that.$getParams(queryObj);
      ;
      // 调用中台API方法（可复用）
      requestGraphQL(paramD).then(response => {
        if (response.data[queryObj.apiConfig.ServiceCode].result == "1") {
          that.$crmcf.showMessages(that,'success','操作成功！')
          that.$crmcf.crmcloseView(that,'crmMyToBe')
        } else {
          that.$crmcf.showMessages(that,'error',response.data[queryObj.apiConfig.ServiceCode].msg)
        }
      });
        }
      });
    },

    //结案
    closeCase() {
      let that = this;
      //let是局部变量，var是全局变量
      let formName = "ruleForm";
      let flag = false;
      var config = this.config;
      config = {
        NextReturnVisitTime: [
          true,
          this.$crmcf.crmRegExp("empty"),
          "value",
          that.$refs.NextReturnVisitTime.value,
          "下次回访时间",
          "不能为空"
        ],
        ContactStatus: [
          true,
          this.$crmcf.crmRegExp("empty"),
          "value",
          that.$refs.ContactStatus.value,
          "接触状态",
          "不能为空"
        ],
        ReturnVisitContent: [
          true,
          this.$crmcf.crmRegExp("empty"),
          "input",
          that.$refs.ReturnVisitContent.input,
          "回访内容",
          "不能为空"
        ],
        
      };
      that.$crmcf.validForm(that, formName, config, function(flag) {
        if (flag) {
          let queryObj = {
            // api配置
            type: "mutation",
            apiConfig: crmApis.csBuComplaintOrderMutationDealTS,
            // 需要调用的API服务配置
            apiServices: [
              {
                //表格中台返回网格的字段
                apiQueryRow: []
              }
            ],
            //条件/实体参数（变量），根据typeParam中的定义配置
            variables: {
              //当前中台使用的名称有dataInfo、info，具体查看API文档
              dataInfo: {
                // helpId: that.$route.params.helpId,
                // dealDes: that.form.reply,
                crruNode: "TS_JA",
                dealContent: that.$refs.ReturnVisitContent.input,
                dealTitle: "结案",
                oemCode: "1",
                groupCode: "1",
                serverId: that.HFserverId,
                serverOrder: that.HFserverOrder,
                serverType: "2",
                // nextDealUserId: "1", //测试下一步处理人，1是管理员  结案不用填下一步处理人
                // nextDealEmpId: "1",
                custName: that.form.custName.input,
                contactTel: that.$refs.contactTel.input
              }
            }
          };
          //转换了中台请求格式数据
          var paramD = that.$getParams(queryObj);
          ;
          // 调用中台API方法（可复用）
          requestGraphQL(paramD).then(response => {
            if (response.data[queryObj.apiConfig.ServiceCode].result == "1") {
              that.$crmcf.showMessages(that,'success','操作成功！')
              that.$crmcf.crmcloseView(that,'crmMyToBe')
            } else {
              that.$crmcf.showMessages(that,'error',response.data[queryObj.apiConfig.ServiceCode].msg)
            }
          });
        }
      });
    }

    //表单校验
    // submitForm(formName) {
    //   this.$refs[formName].validate(valid => {
    //     if (valid) {
    //       alert("submit!");
    //     } else {
    //       alert("error submit!");
    //       // console.log('error submit!!');
    //       return false;
    //     }
    //   });
    // }
  }
};
</script>
