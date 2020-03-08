<template>
  <div class="app-container app-container-table filter-params-crm-scroll">
    <div class="filter-container filter-button">
      <el-button type="primary" size="small" @click="save">申诉</el-button>
    </div>
    <!-- 申请协助弹窗 -->
    <el-dialog title="申请协助" :visible.sync="dialogVisible" :append-to-body="true" width="900px" center>
      <div class="filter-container">
        <div style="float:right">
          <el-button type="primary" size="small" @click="applyHP">申请</el-button>
        </div>
      </div>
      <div class="filter-container filter-params-crm filter-params-sub">
        <el-form label-position="right">
          <el-row>
            <el-col :span="6" class="crm-label-required">
              <swd_AssistPeople ref="swd_AssistPeople" :swd_AssistPeople="1" @CatData="getarr"></swd_AssistPeople>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="6" class="crm-label-required">
              <el-form-item label="申请说明">
                <el-input v-model="xzreason" type="textarea" placeholder="请输入" class="long-textarea-style" resize="none"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </div>
      <div class="filter-container filter-title-crm">申请记录</div>
      <Table :tabledatas="tabledatasXZ" ref="tableXZ" />
    </el-dialog>

    <el-steps :active="active" finish-status="success">
      <el-step title="申诉"></el-step>
      <el-step title="审核"></el-step>
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
    <!-- <Table :tabledatas="tabledatasDJ" ref="tableDJ" /> -->
    <div class="filter-container filter-title-crm">处理过程</div>
    <div class="filter-container filter-params-crm filter-params-sub">
      <!-- <div style="float:left">
        <label>责任方</label>
        <el-button >网点</el-button>
        <el-button >厂家</el-button>
        <el-button >客服中心</el-button>
        <el-button >客户</el-button>
      </div> -->
      <Table :tabledatas="tabledatasCL" ref="tableCL"/>
      <!-- <el-form label-position="right">
        <el-row>
          <el-col :span="7">
            <NextStepDutyPeople :NextStepDutyPeople="NextStepDutyPeople" ref="NextStepDutyPeople" />
          </el-col>
        </el-row>
      </el-form> -->
    </div>
    <div class="filter-container filter-title-crm">申诉信息</div>
    <div class="filter-container filter-params-crm filter-params-sub">
      <el-form label-position="right">
        <el-row>
          <el-col :span="6" class="crm-label-required">
            <el-form-item label="申诉说明">
              <el-input v-model="appealdesc" type="textarea" placeholder="请输入" class="long-textarea-style" resize="none"></el-input>
            </el-form-item>
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
//申请协助弹窗
import SystemLoginName from "@/components/crm/textbox/Complaint/SystemLoginName";
import StaffName from "@/components/crm/textbox/Clue/CallCenterClue/StaffName";
import CellPhone from "@/components/crm/textbox/Public/customerInfos/CellPhone";
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
import CheckThought from "@/components/crm/textbox/Complaint/CheckThought";
import swd_AssistPeople from "@/components/crm/EjectWindows/swd_AssistPeople";//协助人 弹出框
export default {
  name: "ComplAppealDeal",
  components: {
    SystemLoginName,
    StaffName,
    CellPhone,
    Table,
    txt_CustomerName,
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
    CheckThought,
    swd_AssistPeople
  },
  data() {
    return {
      checkList: [],
      valueList: [],
      dcjg:"",
      appealdesc:"",
      options: [
        {
          value: "1",
          label: "厂家保修"
        },
        {
          value: "2",
          label: "话术解释"
        },
        {
          value: "3",
          label: "安抚道歉"
        },
        {
          value: "4",
          label: "故障排除"
        }
      ],
      active: 1,
      xzreason:"",
      xzUserId:"",
      dialogVisible: false,
      TSserverId:"",
      TSserverOrder:"",
      crruNode:"",
      carBrandCode:"",
      bigClassCode:"",
      nextDealUserId:"",
      nextDealUserName:"",
      nextDealEmpId:"",
      nextDealEmpName:"",
      nextDealOrgId:"",
      nextDealOrgName:"",
      fileList: [],
      dutyObj: [
        {
          cname:"客户",
          cvalue:"0"
        },
        {
          cname:"网点",
          cvalue:"1"
        },
        {
          cname:"主机厂",
          cvalue:"2"
        },
        {
          cname:"客户中心",
          cvalue:"3"
        },
      ],
      form:{
        Numattr: {
          input: ""
        },
        // Leakm: {
        //   input: ""
        // },
        // Gearnum: {
        //   input: ""
        // },
        // Gearname: {
        //   input: ""
        // },
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
      NextStepDutyPeople: {
        input: ""
      },
      tabledatasXZ: {
        // 操作列
        ismuti: false,
        isoperat: false,
        havedistrbute: false,
        haveEdit: false,
        haveDel: false,
        pagesize:10,
        pageindex:1,
        colnames: [
          { label: "申请人", value: "applyPersonName" },
          { label: "申请时间", value: "applyDate" },
          { label: "申请说明", value: "helpDes" },
          { label: "协助人", value: "helpPersonName" },
          { label: "回复时间", value: "helpTime" },
          { label: "回复内容", value: "dealDes" }
        ],
        queryObj: {
          // .后面是服务编码，.前面固定写死
          apiConfig: crmApis.csBuComplaintHelpQueryFindAll,
          apiQueryRow: [
            "applyPersonName",
            "applyDate",
            "helpDes",
            "helpPersonName",
            "helpTime",
            "dealDes"
          ],
          params: {
            oemCode:"1",
            groupCode:"1",
            serverOrder:"",
          }
        }
      },
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
    getarr(val){
      
      let redata={}
      redata=val
      this.xzUserId=redata[0].userId
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
          //&&response.data[queryObj.apiConfig.ServiceCode].rows != ""
        ) {
          
          let results = response.data[queryObj.apiConfig.ServiceCode].rows[0];
          that.TSserverId=results["serverId"]
          that.TSserverOrder=results["serverOrder"]
          that.crruNode=results["crruNode"]
          that.carBrandCode=results["carBrandCode"]
          that.bigClassCode=results["bigClassCode"]
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
    applyHF: function() {
      this.getNextInfo("TS_PVSQJA");
    },
    reviewJA: function() {
      this.save("TS_JA");
    },
    getPlanMonth(code) {
      
      this.valueList = code;
    },
    getNextInfo(val){
      ;
      let that = this;
      that.isJaFlag=""
      var saveObj={}
      that.$set(saveObj, "oemCode", "1");
      that.$set(saveObj, "groupCode", "1");
      that.$set(saveObj, "serverType", "2");
      that.$set(saveObj, "carBrandCode", that.carBrandCode);
      that.$set(saveObj, "serverClassCode", that.bigClassCode);
      that.$set(saveObj, "nodeCode", val);
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
          if(results==undefined)
          {
            var html=`<div>找不到下一步处理人</div>`
            if (html != '') {
              this.$notify.error({
                title: "校验项",
                dangerouslyUseHTMLString: true,
                message: html
              });
              return
            }
          }else{
            //给下一责任组件赋值
            that.nextDealUserId=results["dutyUserId"];
            that.nextDealUserName=results["dutyUserName"];
            that.nextDealEmpId=results["dutyEmpId"];
            that.nextDealEmpName=results["dutyEmpName"];
            that.nextDealOrgId=results["dutyOrgId"];
            that.nextDealOrgName=results["dutyOrgName"];
            this.save(val)
          }
        }else{
          that.$crmcf.showMessages(that,'error',response.data[queryObj.apiConfig.ServiceCode].msg)
        }
      });
    },
    save(val){
      
      let that = this
      //校验
      var html=""
      if(that.appealdesc==""||that.appealdesc==null)
      {
        html = html + `<div>请填写申诉说明</div>`
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
      that.$set(saveObj, "serverId", that.TSserverId);
      that.$set(saveObj, "serverOrder", that.TSserverOrder);
      that.$set(saveObj, "appealType", "1");
      that.$set(saveObj, "appealDesc", that.appealdesc);
      
      let queryObj = {
        // api配置
        type: "mutation",
        apiConfig: crmApis.csBuAppealMutationAdd,
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
          that.dialogVisible = false
          that.$crmcf.showMessages(that,'success','申诉成功')
          that.$crmcf.crmcloseView(that,'ComplaintAppealAppli')
          }else{
            that.$crmcf.showMessages(that,'error',response.data[queryObj.apiConfig.ServiceCode].msg)
          }
      })
    },
    refuse: function() {
      this.save("TS_PVSHBH");
    },
    submitUpload() {
      this.$refs.upload.submit();
    },
    applyXZ: function() {
      let that = this;
      that.dialogVisible = true;
      that.xzUserId="";
      if(that.$refs.serverOrder.input==""||that.$refs.serverOrder.input==null)
      {
        return;
      }
      that.tabledatasXZ.queryObj.params.serverOrder = that.$refs.serverOrder.input;
      setTimeout(function () {
        
        if (that.$refs.tableXZ!=undefined){
          that.$refs.swd_AssistPeople.input="";
          that.$refs.tableXZ.getData();
        }
      }, 100)
    },
    applyHP: function() {
      
      let that = this
      //校验
      var html=""
      if(that.xzUserId=="")
      {
        html = html + `<div>请选择协助人</div>`
      }
      if(that.xzreason=="")
      {
        html = html + `<div>请填写申请协助说明</div>`
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
      that.$set(saveObj, "oemCode", "1");
      that.$set(saveObj, "groupCode", "1");
      that.$set(saveObj, "serverOrder", that.TSserverOrder);
      that.$set(saveObj, "helpPersonId", that.xzUserId);
      that.$set(saveObj, "helpDes", that.xzreason);

      let queryObj = {
        // api配置
        type: "mutation",
        apiConfig: crmApis.complaintHelpMutationSave,
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
          that.dialogYQSQ = false
          that.$crmcf.showMessages(that,'success','协助申请成功')
          }else{
            that.$crmcf.showMessages(that,'error',response.data[queryObj.apiConfig.ServiceCode].msg)
          }
      })
    }
  }
};
</script>
