<template>
  <div class="app-container app-container-table filter-params-crm-scroll">
    <div class="filter-container filter-button">
      <el-button size="small" @click="save">暂存</el-button>
      <el-button type="primary" size="small" @click="commit">追加</el-button>
      <el-button size="small" @click="khcx">撤诉</el-button>
    </div>
    <el-steps :active="active" finish-status="success">
      <el-step title="建单"></el-step>
      <el-step title="派单"></el-step>
      <el-step title="处理"></el-step>
      <el-step title="审批"></el-step>
      <el-step title="回访"></el-step>
      <el-step title="结案"></el-step>
    </el-steps>

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
      <el-form label-position="right">
        <el-form label-position="right" disabled>
        <el-row>
          <el-col :span="6">
            <ServiceMenuNumber :ServiceMenuNumber="form.serverOrder" ref="serverOrder"/>
          </el-col>
          <el-col :span="6">
            <ComplaintDate :ComplaintDate="form.createdDate" ref="createdDate" />
          </el-col>
          <el-col :span="6">
            <sct_ComplaintRoute :sct_ComplaintRoute="form.serverSourceCode" ref="serverSourceCode" />
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
        </el-form>
        <el-row>
          <el-col :span="6">
            <ServiceType :swd_complaintCategory="form.serverFullClassName" ref="serverFullClassName" @CatData="getarr"/>
          </el-col>
          <el-col :span="6" class="crm-label-required">
            <RelatedBenchmarkCar :RelatedBenchmarkCar="form.baseSeriesName" ref="baseSeriesName" @getcarBrand="getarr2"/>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="6">
            <ResponsibleAgent :ResponsibleAgent="form.dutyDlrName" ref="dutyDlrName" @CatData="getarr3"/>
          </el-col>
          <el-col :span="6" class="crm-label-required">
            <ProcessingMethod :ProcessingMethod="proc" ref="ProcessingMethod" @changeCode="prochange"></ProcessingMethod>
          </el-col>
          <el-form label-position="right" disabled>
          <el-col :span="6">
            <ResponsibleDepartment :ResponsibleDepartment="form.nextDealOrgName" ref="nextDealOrgName"/>
          </el-col>
          </el-form>
        </el-row>
        <el-form label-position="right" disabled>
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
      </el-form>
    </div>
    <el-table
    :data="tabledatas.tableData"
    highlight-current-row
    style="width: 100%;height:350px"
    max-height="250px"
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

    <!-- <div class="filter-container filter-title">处理过程</div>
    <div class="filter-container filter-params filter-params-crm">
      <div style="float:left">
        <label>责任方</label>
        <el-button type="primar">网点</el-button>
        <el-button type="primar">厂家</el-button>
        <el-button type="primar">客服中心</el-button>
        <el-button type="primary">客户</el-button>
      </div>
      <Table :tabledatas="tabledatasCL" ref="tableCL" />
      <el-form label-position="right">
        <el-row>
          <el-col :span="7">
            <NextStepDutyPeople :NextStepDutyPeople="NextStepDutyPeople" ref="NextStepDutyPeople" />
          </el-col>
        </el-row>
      </el-form>
    </div> -->

    <div class="filter-container filter-title-crm">追加内容</div>
    <div class="filter-container filter-params-crm filter-params-sub">
      <el-form label-position="right">
        <el-row>
          <el-col :span="6">
            <Abstract :Abstract="Abstract" ref="Abstract"></Abstract>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="6">
            <CustomerRequest :CustomerRequest="CustomerRequest" ref="CustomerRequest"></CustomerRequest>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="6" class="crm-label-required">
            <ComplainContent :ComplainContent="ComplainContent" ref="ComplainContent"></ComplainContent>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="6" class="crm-label-required">
            <CustomerServiceAnswer :CustomerServiceAnswer="CustomerServiceAnswer" ref="CustomerServiceAnswer"></CustomerServiceAnswer>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="6">
            <el-form-item label="上传附件" style="text-align:left">
              <el-upload
                class="upload-demo"
                ref="upload"
                action="https://jsonplaceholder.typicode.com/posts/"
                :file-list="fileList"
                :auto-upload="false"
              >
                <el-button slot="trigger" type="primary" size="small">选取文件</el-button>
                <el-button style="margin-left: 10px;" size="small" @click="submitUpload">上传</el-button>
              </el-upload>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </div>
  </div>
</template>
<script>
import { crmApis } from "@/api/graphQLApiList/crm";
import { requestGraphQL } from "@/api/commonRequest";
import Table from "@/components/crm/table/Table";
//客户车辆信息
import UseCarPhone from "@/components/crm/textbox/Public/customerInfos/UseCarPhone";
import txt_CustomerName from "@/components/crm/textbox/Public/customerInfos/txt_CustomerName";
import CustomersNameAdd from "@/components/crm/EjectWindows/CustomersName_Add";
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
import sct_ComplaintRoute from "@/components/crm/Select/Complaint/sct_ComplaintRoute";
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
//追加内容
import Abstract from "@/components/crm/textbox/Public/Abstract";
import CustomerRequest from "@/components/crm/textbox/Public/CustomerRequest";
import ComplainContent from "@/components/crm/textbox/Complaint/ComplainContent";
import CustomerServiceAnswer from "@/components/crm/textbox/Public/CustomerServiceAnswer";
import ProcessingMethod from "@/components/crm/Select/Complaint/ProcessingMethod";

export default {
  name: "AddcomplOrder",
  components: {
    txt_CustomerName,
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
    sct_ComplaintRoute,
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
    Abstract,
    CustomerRequest,
    ComplainContent,
    CustomerServiceAnswer,
    ProcessingMethod
  },
  data() {
    return {
      serverType:"",
      serverId:"",
      serverOrder:"",
      crruNode:"",
      dealNode:"",
      baseSeriesCode:"",
      carBrandCode:"",
      serverBrandCode:"",
      serverClassCode:"",
      bigClassCode:"",
      dutyOrgCode:"",
      nextDealUserId:"",
      nextDealUserName:"",
      nextDealEmpId:"",
      nextDealEmpName:"",
      nextDealOrgId:"",
      nextDealOrgName:"",
      isJaFlag:"",
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
        },
        baseSeriesName: {
          input: "",
        },
        dutyDlrName: {
          input: ""
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
      proc:{
        value:""
      },
      active: 1,
      dialogVisible: false,
      fileList: [],
      Remarks: {
        input: ""
      },
      NextStepDutyPeople: {
        input: ""
      },
      Abstract: {
        input: ""
      },
      CustomerRequest: {
        input: ""
      },
      ComplainContent: {
        input: ""
      },
      CustomerServiceAnswer: {
        input: ""
      },
      tabledatas: {
        colnames: [
          { label: "日期", value: "createdDate" },
          { label: "摘要", value: "serverTitle" },
          { label: "客户要求", value: "custRequirement" },
          { label: "投诉内容", value: "complainDesc" },
          { label: "坐席回答", value: "serverAnswer" }
        ],
        tableData:[
        ],
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
            oemCode:"1",
            groupCode:"1",
            serverOrder:""
          }
        },
        pagesize:10,
        pageindex:1,
        total: 0
      } 
    };
  },
  mounted:function(){
    
    this.$nextTick(function(){
      this.initData(this.$route.params.serverOrder)
    });
  },
  methods: {
    // 获取处理方式
    prochange(val) {
      ;
      let that = this;
      that.isJaFlag=""
      that.dealNode=""
      var saveObj={}
      that.$set(saveObj, "oemCode", "1");
      that.$set(saveObj, "groupCode", "1");
      that.$set(saveObj, "serverType", "2");
      that.$set(saveObj, "carBrandCode", (that.serverBrandCode==""?that.carBrandCode:that.serverBrandCode));
      that.$set(saveObj, "serverClassCode", that.bigClassCode);
      if (val == "1") {
        that.$set(saveObj, "nodeCode", "TS_JA");
        that.isJaFlag="1"
      }
      // 派单给技术专家
      else if (val == "3") {
        that.dealNode="TS_ZJPD"
        that.$set(saveObj, "nodeCode", "TS_ZJPD");
      }
      // 派单，如果选了网点就派给网点,没选就派给厂家
      else if (val == "2") {
        if (that.dutyOrgCode == null||that.dutyOrgCode == "") {
          that.dealNode="TS_PVPD"
          that.$set(saveObj, "nodeCode", "TS_PVPD");
        } else {
          that.dealNode="TS_DLRPD"
          that.$set(saveObj, "nodeCode", "TS_DLRPD");
          that.$set(saveObj, "dlrCode", that.dutyOrgCode);
        }
      }
      // 无效结案
      else if (val == "6") {
        that.$set(saveObj, "nodeCode", "TS_JA");
        that.isJaFlag="1"
      }
      // 二线
      else if (val == "7") {
      }
      let queryObj = {
        // api配置
        type: "query",
        apiConfig: crmApis.getNextDutyPerson,
        // 需要调用的API服务配置
        apiServices: [
          {
            //表格中台返回网格的字段
            apiQueryRow: [
              "dutyEmpId",
              "dutyEmpName",
              "dutyOrgId",
              "dutyOrgName",
              "dutyUserId",
              "dutyUserMobile",
              "dutyUserName"
            ]
          }
        ],
        //条件/实体参数（变量），根据typeParam中的定义配置
        variables: {
          pageSize: 100,
          pageIndex: 1,
          //当前中台使用的名称有dataInfo、info，具体查看API文档
          dataInfo: saveObj
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
          //给下一责任组件赋值
          that.form.nextDealOrgName.input =results["dutyOrgName"]; //责任部门
          that.$refs.nextDealOrgName.getData()
          that.form.nextDealEmpName.input =results["dutyEmpName"]; //责任人
          that.$refs.nextDealEmpName.getData()
          that.form.nextDealPhone.input =results["dutyUserMobile"]; //责任人电话
          that.$refs.nextDealPhone.getData()
          that.nextDealUserId=results["dutyUserId"];
          that.nextDealUserName=results["dutyUserName"];
          that.nextDealEmpId=results["dutyEmpId"];
          that.nextDealEmpName=results["dutyEmpName"];
          that.nextDealOrgId=results["dutyOrgId"];
          that.nextDealOrgName=results["dutyOrgName"];
        }else{
          that.$crmcf.showMessages(that,'error',response.data[queryObj.apiConfig.ServiceCode].msg)
        }
      });
    },
    getarr(val){
      
      let redata={};
      redata=val;
      this.bigClassCode=redata[0].bigCode
      this.serverClassCode=redata[0].smallCode
      this.$refs.ProcessingMethod.reset();
      this.$refs.nextDealOrgName.reset()
      this.$refs.nextDealEmpName.reset()
      this.$refs.nextDealPhone.reset()
      this.nextDealUserId="";
      this.nextDealUserName="";
      this.nextDealEmpId="";
      this.nextDealEmpName="";
      this.nextDealOrgId="";
      this.nextDealOrgName="";
    },
    getarr2(val){
      
      let redata={};
      redata=val;
      this.carBrandCode=redata.carBrandCode
      this.baseSeriesCode=redata.baseSeriesCode
      this.$refs.ProcessingMethod.reset();
      this.$refs.nextDealOrgName.reset()
      this.$refs.nextDealEmpName.reset()
      this.$refs.nextDealPhone.reset()
      this.nextDealUserId="";
      this.nextDealUserName="";
      this.nextDealEmpId="";
      this.nextDealEmpName="";
      this.nextDealOrgId="";
      this.nextDealOrgName="";
    },
    getarr3(val){
      
      let redata={};
      redata=val;
      this.dutyOrgCode=redata[0].dlrCode
      this.serverBrandCode=redata[0].carBrandCode
      this.$refs.ProcessingMethod.reset();
      this.$refs.nextDealOrgName.reset()
      this.$refs.nextDealEmpName.reset()
      this.$refs.nextDealPhone.reset()
      this.nextDealUserId="";
      this.nextDealUserName="";
      this.nextDealEmpId="";
      this.nextDealEmpName="";
      this.nextDealOrgId="";
      this.nextDealOrgName="";
    },
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
          &&response.data[queryObj.apiConfig.ServiceCode].rows != ""
        ) {
          
          let results = response.data[queryObj.apiConfig.ServiceCode].rows[0];
          that.serverType="2"
          that.serverId=results["serverId"]
          that.serverOrder=results["serverOrder"]
          that.crruNode=results["crruNode"]
          that.baseSeriesCode=results["baseSeriesCode"]
          that.carBrandCode=results["carBrandCode"]
          that.serverBrandCode=results["carBrandCode"]
          that.bigClassCode=results["bigClassCode"]
          that.serverClassCode=results["serverClassCode"]
          that.dutyOrgCode=results["dutyDlrCode"]
          for (let key in that.form) {
            if('input' in that.form[key]){
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
        }else{
          that.$crmcf.showMessages(that,'error',response.data[queryObj.apiConfig.ServiceCode].msg)
        }
      });
    },
    save:function(){
      
      let that = this
      //校验
      var html=""
      if(that.carBrandCode==""||that.$refs.baseSeriesName.input==""||that.$refs.baseSeriesName.input==null)
      {
        html = html + `<div>请选择相关基准车系</div>`
      }
      if(that.$refs.ComplainContent.input==""||that.$refs.ComplainContent.input==null)
      {
        html = html + `<div>请填写追加投诉内容</div>`
      }
      if(that.$refs.CustomerServiceAnswer.input==""||that.$refs.CustomerServiceAnswer.input==null)
      {
        html = html + `<div>请填写追加坐席回答</div>`
      }
      if (html != '') {
        this.$notify.error({
          title: "校验项",
          dangerouslyUseHTMLString: true,
          message: html
        });
        return
      }
      
      //赋值
      var saveObj={}
      //客户信息
      that.$set(saveObj, "oemCode", "1");
      that.$set(saveObj, "groupCode", "1");
      that.$set(saveObj, "serverType", "2");
      that.$set(saveObj, "serverId", that.serverId);
      that.$set(saveObj, "serverOrder", that.serverOrder);
      that.$set(saveObj, "crruNode", "TS_ZJZC");

      that.$set(saveObj, "linkCarType", "");
      that.$set(saveObj, "linkCarName", "");
      that.$set(saveObj, "baseSeriesCode", that.baseSeriesCode);
      that.$set(saveObj, "baseSeriesName", that.$refs.baseSeriesName.input);
      that.$set(saveObj, "carBrandCode", (that.serverBrandCode==""?that.carBrandCode:that.serverBrandCode));
      that.$set(saveObj, "serverBrandCode", (that.serverBrandCode==""?that.carBrandCode:that.serverBrandCode));
      that.$set(saveObj, "serverClassCode", that.serverClassCode);
      that.$set(saveObj, "bigClassCode", that.bigClassCode);

      that.$set(saveObj, "serverFullClassName", that.$refs.serverFullClassName.input);
      that.$set(saveObj, "serverAttrCode", "");
      that.$set(saveObj, "dutyOrgCode", that.dutyOrgCode);
      that.$set(saveObj, "dutyOrgName", that.$refs.dutyDlrName.input);
      that.$set(saveObj, "dealOrgCode", that.dutyOrgCode);
      that.$set(saveObj, "dealOrgName", that.$refs.dutyDlrName.input);
      that.$set(saveObj,"serverTitle",that.$refs.Abstract.input)
      that.$set(saveObj, "serverAnswer", that.$refs.CustomerServiceAnswer.input);
      that.$set(saveObj, "complainDesc", that.$refs.ComplainContent.input);
      that.$set(saveObj, "custRequirement", that.$refs.CustomerRequest.input);
      that.$set(saveObj, "remark", "");

      that.$set(saveObj, "nextDealUserId", that.nextDealUserId);
      that.$set(saveObj, "nextDealUserName", that.nextDealUserName);
      that.$set(saveObj, "nextDealEmpId", that.nextDealEmpId);
      that.$set(saveObj, "nextDealEmpName", that.nextDealEmpName);
      that.$set(saveObj, "nextDealOrgId", that.nextDealOrgId);
      that.$set(saveObj, "nextDealOrgName", that.nextDealOrgName);

      let queryObj = {
        // api配置
        type: "mutation",
        apiConfig: crmApis.addComplainSave,
        // 需要调用的API服务配置
        apiServices: [{
            //表格中台返回网格的字段
            apiQueryRow:[]
        }],
        //条件/实体参数（变量），根据typeParam中的定义配置
        variables: {
          //当前中台使用的名称有dataInfo、info，具体查看API文档
          dataInfo: saveObj
        }
      }
      //转换了中台请求格式数据
      var paramD = that.$getParams(queryObj);
      // 调用中台API方法（可复用）
      requestGraphQL(paramD).then(response =>{
        if(
          response.data[queryObj.apiConfig.ServiceCode].result === "1"  
          //&&response.data[queryObj.apiConfig.ServiceCode].rows!=""
          ){
          this.dialogVisible = false
          this.$crmcf.showMessages(that,'success','暂存成功')
          }else{
            that.$crmcf.showMessages(that,'error',response.data[queryObj.apiConfig.ServiceCode].msg)
          }
      })
    },
    commit:function(){
      
      let that = this
      //校验
      var html=""
      if(that.carBrandCode==""||that.$refs.baseSeriesName.input==""||that.$refs.baseSeriesName.input==null)
      {
        html = html + `<div>请选择相关基准车系</div>`
      }
      if(that.$refs.ProcessingMethod.value=="")
      {
        html = html + `<div>请选择处理方式</div>`
      }
      if(that.isJaFlag==""&&that.nextDealEmpId=="")
      {
        html = html + `<div>找不到下一步处理人</div>`
      }
      if(that.$refs.ComplainContent.input==""||that.$refs.ComplainContent.input==null)
      {
        html = html + `<div>请填写追加投诉内容</div>`
      }
      if(that.$refs.CustomerServiceAnswer.input==""||that.$refs.CustomerServiceAnswer.input==null)
      {
        html = html + `<div>请填写追加坐席回答</div>`
      }
      if (html != '') {
        this.$notify.error({
          title: "校验项",
          dangerouslyUseHTMLString: true,
          message: html
        });
        return
      }
      
      //赋值
      var saveObj={}
      //客户信息
      that.$set(saveObj, "oemCode", "1");
      that.$set(saveObj, "groupCode", "1");
      that.$set(saveObj, "serverType", "2");
      that.$set(saveObj, "serverId", that.serverId);
      that.$set(saveObj, "serverOrder", that.serverOrder);
      that.$set(saveObj, "crruNode", that.dealNode);
      that.$set(saveObj, "custName", that.$refs.custName.input);
      that.$set(saveObj, "contactTel", that.$refs.contactTel.input);

      that.$set(saveObj, "linkCarType", "");
      that.$set(saveObj, "linkCarName", "");
      that.$set(saveObj, "baseSeriesCode", that.baseSeriesCode);
      that.$set(saveObj, "baseSeriesName", that.$refs.baseSeriesName.input);
      that.$set(saveObj, "carBrandCode", (that.serverBrandCode==""?that.carBrandCode:that.serverBrandCode));
      that.$set(saveObj, "serverBrandCode", (that.serverBrandCode==""?that.carBrandCode:that.serverBrandCode));
      that.$set(saveObj, "serverClassCode", that.serverClassCode);
      that.$set(saveObj, "bigClassCode", that.bigClassCode);

      that.$set(saveObj, "serverFullClassName", that.$refs.serverFullClassName.input);
      that.$set(saveObj, "serverAttrCode", "");
      that.$set(saveObj, "dutyOrgCode", that.dutyOrgCode);
      that.$set(saveObj, "dutyOrgName", that.$refs.dutyDlrName.input);
      that.$set(saveObj, "dealOrgCode", that.dutyOrgCode);
      that.$set(saveObj, "dealOrgName", that.$refs.dutyDlrName.input);
      that.$set(saveObj,"serverTitle",that.$refs.Abstract.input)
      that.$set(saveObj, "serverAnswer", that.$refs.CustomerServiceAnswer.input);
      that.$set(saveObj, "complainDesc", that.$refs.ComplainContent.input);
      that.$set(saveObj, "custRequirement", that.$refs.CustomerRequest.input);
      that.$set(saveObj, "remark", "");

      that.$set(saveObj, "nextDealUserId", that.nextDealUserId);
      that.$set(saveObj, "nextDealUserName", that.nextDealUserName);
      that.$set(saveObj, "nextDealEmpId", that.nextDealEmpId);
      that.$set(saveObj, "nextDealEmpName", that.nextDealEmpName);
      that.$set(saveObj, "nextDealOrgId", that.nextDealOrgId);
      that.$set(saveObj, "nextDealOrgName", that.nextDealOrgName);

      let queryObj = {
        // api配置
        type: "mutation",
        apiConfig: crmApis.addComplainCommit,
        // 需要调用的API服务配置
        apiServices: [{
            //表格中台返回网格的字段
            apiQueryRow:[]
        }],
        //条件/实体参数（变量），根据typeParam中的定义配置
        variables: {
          //当前中台使用的名称有dataInfo、info，具体查看API文档
          dataInfo: saveObj
        }
      }
      //转换了中台请求格式数据
      var paramD = that.$getParams(queryObj);
      // 调用中台API方法（可复用）
      requestGraphQL(paramD).then(response =>{
        if(
          response.data[queryObj.apiConfig.ServiceCode].result === "1"  
          //&&response.data[queryObj.apiConfig.ServiceCode].rows!=""
          ){
          this.dialogVisible = false
          this.$crmcf.showMessages(that,'success','追加成功');
          this.$crmcf.crmcloseView(that,'AddComplaintInfo');
          }else{
            this.$crmcf.showMessages(that,'error',response.data[queryObj.apiConfig.ServiceCode].msg);
          }
      })
    },
    khcx:function(){
      
      let that = this
      //赋值
      var saveObj={}
      that.$set(saveObj, "oemCode", "1");
      that.$set(saveObj, "groupCode", "1");
      that.$set(saveObj, "serverType", "2");
      that.$set(saveObj, "custName", that.$refs.custName.input);
      that.$set(saveObj, "contactTel", that.$refs.contactTel.input);
      that.$set(saveObj, "serverId", that.serverId);
      that.$set(saveObj, "serverOrder", that.serverOrder);
      that.$set(saveObj, "crruNode", "TS_KHCX");
      that.$set(saveObj, "dealTitle", "撤诉");
      that.$set(saveObj, "dealContent","投诉撤诉");
      that.$set(saveObj, "nextDealUserId", that.nextDealUserId);
      that.$set(saveObj, "nextDealUserName", that.nextDealUserName);
      that.$set(saveObj, "nextDealEmpId", that.nextDealEmpId);
      that.$set(saveObj, "nextDealEmpName", that.nextDealEmpName);
      that.$set(saveObj, "nextDealOrgId", that.nextDealOrgId);
      that.$set(saveObj, "nextDealOrgName", that.nextDealOrgName);

      let queryObj = {
        // api配置
        type: "mutation",
        apiConfig: crmApis.csBuComplaintOrderMutationDealTS,
        // 需要调用的API服务配置
        apiServices: [{
            //表格中台返回网格的字段
            apiQueryRow:[]
        }],
        //条件/实体参数（变量），根据typeParam中的定义配置
        variables: {
          //当前中台使用的名称有dataInfo、info，具体查看API文档
          dataInfo: saveObj
        }
      }
      //转换了中台请求格式数据
      var paramD = that.$getParams(queryObj);
      // 调用中台API方法（可复用）
      requestGraphQL(paramD).then(response =>{
        if(
          response.data[queryObj.apiConfig.ServiceCode].result === "1"  
          //&&response.data[queryObj.apiConfig.ServiceCode].rows!=""
          ){
          this.dialogVisible = false
          this.$crmcf.showMessages(that,'success','撤诉成功')
          this.$crmcf.crmcloseView(that,'AddComplaintInfo')
          }else{
            this.$crmcf.showMessages(that,'error',response.data[queryObj.apiConfig.ServiceCode].msg);
          }
      })
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
    submitUpload() {
      let that=this
      this.$crmcf.crmcloseView(that,'AddComplaintInfo')
    }
  }
};
</script>
