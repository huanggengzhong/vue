<template>
<el-row>
  <el-col :span="22">
  <div class="app-container app-container-table filter-params-crm-scroll">
    <div class="filter-container filter-button">
      <!-- <el-button type="primary" @click="applySH()">申请审核</el-button> -->
      <el-button type="primary" size="small" @click="save">进度反馈</el-button>
      <el-button size="small" v-if="dlrcl" @click="applyYQ">申请延期</el-button>
      <el-button size="small" v-if="pvcl" @click="applyXZ">申请协助</el-button>
      <el-button size="small" v-if="pvkf" @click="applyHF">申请回访</el-button>
      <el-button size="small" v-if="dlrkf" @click="applyJA">申请结案</el-button>
      <el-button size="small" v-if="pvkf" @click="reviewJA">直接结案</el-button>
      <el-button size="small" v-if="pvcl" @click="refuse">驳回</el-button>
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

    <!-- 结案延期申请 -->
    <el-dialog title="申请延期" :visible.sync="dialogYQSQ" :append-to-body="true" width="900px" center>
      <div class="filter-container">
        <div style="float:right">
          <el-button type="primary" size="small" @click="applyOP">申请</el-button>
        </div>
      </div>
      <div class="filter-container filter-params filter-params-crm">
        <el-form label-position="right">
          <el-row>
            <el-col :span="6">
              <el-form-item label="服务单号">
                <el-input v-model="yqsqOrder" disabled></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="6" class="crm-label-required">
              <el-form-item label="申请原因">
                <el-input v-model="delayreason" type="textarea" placeholder="请输入" class="long-textarea-style" resize="none"></el-input>
              </el-form-item>
              <!-- <ApplyExtensionTime :ApplyExtensionTime="ApplyExtensionTime" ref="ApplyExtensionTime"/> -->
            </el-col>
          </el-row>
        </el-form>
      </div>
      <div class="filter-container filter-title-crm">申请记录</div>
      <Table :tabledatas="tabledatasJL" ref="tableJL" />
    </el-dialog>

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
    <div class="filter-container filter-title-crm">处理信息</div>
    <div class="filter-container filter-params-crm filter-params-sub">
      <el-form label-position="right">
        <!-- <el-row>
          <el-col :span="12" class="long-col">
            <el-form-item label="责任方" style="text-align:left">
              <el-button type="primar" @click="responsible(0)">网点</el-button>
              <el-button type="primar" @click="responsible(1)">厂家</el-button>
              <el-button type="primar" @click="responsible(2)">客服中心</el-button>
              <el-button type="primar" @click="responsible(3)">客户</el-button>
            </el-form-item>
          </el-col>
        </el-row> -->
        <el-row>
          <el-col :span="6" class="crm-label-required">
            <DealWithContent ref="DealWithContent" :DealWithContent="dealDESC"/>
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
      <Table :tabledatas="tabledatasCL" ref="tableCL"/>
    </div>
    <!-- 电话弹窗 -->
      <el-dialog
        :visible.sync="callflag"
        width="900px"
        style="height:700px;margin:0 0 0 0;overflow-y: scroll"
        class="dialog"
        title="外呼"
      >
        <div class="filter-container filter-params-crm">
          <el-form label-position="right">
            <el-row>
              <el-col :span="8">
                <CustomerName :CustomerName="custtxt" ref="custtxt"></CustomerName>
              </el-col>
              <el-col :span="8">
                <PhoneNumber :PhoneNumber="callphone" ref="callphone"></PhoneNumber>
              </el-col>
              <el-col :span="4">
                <el-button @click="callout()">外呼</el-button>
              </el-col>
            </el-row>
          </el-form>
        </div>
      </el-dialog>
      <!-- 短信弹窗 -->
      <el-dialog :visible.sync="Msgmodflag" width="900px" class="dialog" title="短信模板">
        <div class="filter-container filter-title-crm">
          <el-row>
            <el-col :span="4" style="padding:0">查询条件</el-col>
            <el-col :span="20">
              <div class="filter-container filter-button">
                <el-button type="primary" @click.native="query()">查询</el-button>
                <el-button @click.native="handleSelect()">确认</el-button>
                <el-button @click.native="msgreset()">重置</el-button>
              </div>
            </el-col>
          </el-row>
        </div>
        <div class="filter-container filter-params-crm">
          <el-form label-position="right">
            <el-row>
              <el-col :span="22">
                <el-col :span="9">
                  <ModelName ref="ModelName" :ModelName="modn"></ModelName>
                </el-col>
                <el-col :span="9">
                  <ModelContentText ref="ModelContentText" :ModelContentText="modc"></ModelContentText>
                </el-col>
              </el-col>
            </el-row>
          </el-form>
        </div>
        <div class="filter-container filter-title">查询结果</div>
        <Table v-bind:tabledatas="msgmoddata" ref="table"></Table>
      </el-dialog>
      
  </div>
  </el-col>
  <el-col :span="2">
    <ExtendedInfo :queryParams="queryParams" ref="Exinfo" />
  </el-col>
</el-row>
</template>
<script>
//申请协助弹窗
import SystemLoginName from "@/components/crm/textbox/Complaint/SystemLoginName";
import StaffName from "@/components/crm/textbox/Clue/CallCenterClue/StaffName";
import CellPhone from "@/components/crm/textbox/Public/customerInfos/CellPhone";
import { crmApis } from "@/api/graphQLApiList/crm";
import { requestGraphQL } from "@/api/commonRequest";
import Table from "@/components/crm/table/Table";
//结案延期申请弹窗
import ApplyExtensionTime from "@/components/crm/Time/ApplyExtensionTime.vue";

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
import Province from "@/components/crm/Select/Common/Province";
import City from "@/components/crm/Select/Common/City";
import EnableOrDisable from "@/components/crm/Select/Whether/EnableOrDisable.vue";
import PhonePrefix from "@/components/crm/textbox/Public/PhonePrefix.vue";
import AreaCode from "@/components/crm/textbox/Public/AreaCode.vue";
import CustomerName from "@/components/crm/textbox/Public/customerInfos/txt_CustomerName";
import ModelName from "@/components/crm/textbox/Public/Message/ModelName";
import ModelContentText from "@/components/crm/textbox/Public/Message/ModelContentText";
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
import DealWithContent from "@/components/crm/textbox/Complaint/DealWithContent";
import swd_AssistPeople from "@/components/crm/EjectWindows/swd_AssistPeople";//协助人 弹出框

import ExtendedInfo from "@/components/crm/ExtendedInfo"
export default {
  name: "Complainthand",
  components: {
    ExtendedInfo,
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
    DealWithContent,

    ApplyExtensionTime,

    Province,
    City,
    EnableOrDisable,
    PhonePrefix,
    AreaCode,
    CustomerName,
    ModelName,
    ModelContentText,
    swd_AssistPeople
  },
  data() {
    return {
      xzUserId:"",
      dlrcl:false,
      pvcl:false,
      dlrkf:false,
      pvkf:false,
      clObj:"",
      params: this.$route.params,
      TSserverType:"",
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
      active: 2,
      dialogVisible: false,
      dialogYQSQ: false,
      fileList: [],
      callflag:false,
      Msgmodflag:false,
      Attrflag:false,
      carAttrflag:false,
      telEditFlag:false,
      dealDESC:{
        input:""
      },
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
            oemCode:this.$store.getters.orgInfo.OEM_CODE,
            groupCode:this.$store.getters.orgInfo.GROUP_CODE,
            serverOrder:"",
          }
        }
      },
      tabledatasJL: {
        // 操作列
        ismuti: false,
        isoperat: false,
        havedistrbute: false,
        haveEdit: false,
        haveDel: false,
        colnames: [
          { label: "申请时间", value: "applyTime" },
          { label: "申请原因", value: "delayReson" },
          { label: "审核人", value: "shPersonName" },
          { label: "审核状态", value: "delayStatus" },
          { label: "审核意见", value: "shDes" },
          { label: "审核时间", value: "shTimie" }
        ],
        queryObj: {
          // .后面是服务编码，.前面固定写死
          apiConfig: crmApis.csBuComplaintDelayQueryFindAll,
          apiQueryRow: [
            "applyTime",
            "delayReson",
            "shPersonName",
            "delayStatus",
            "shDes",
            "shTimie"
          ],
          params: {
            oemCode:this.$store.getters.orgInfo.OEM_CODE,
            groupCode:this.$store.getters.orgInfo.GROUP_CODE,
            serverOrder:"",
          }
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
            oemCode:this.$store.getters.orgInfo.OEM_CODE,
            groupCode:this.$store.getters.orgInfo.GROUP_CODE,
            serverOrder:"1"
          }
        }
      },
      // 短信
      msgmoddata: {
        flag: true,
        colnames: [
          { label: "模板名称", value: "templateContent" },
          { label: "短信模板内容", value: "templateName" },
          { label: "是否启用", value: "isEnable" }
        ],
        queryObj: {
          // .后面是服务编码，.前面固定写死
          apiConfig: crmApis.NavigateMap001,
          apiQueryRow: ["templateContent", "templateName", "isEnable"],
          params: {
            ModelName: "",
            ModelContentText: ""
          }
        },
        params: { code: "1" },
        isoperat: false,
        url: "/table",
        havedistrbute: false,
        haveEdit: false,
        haveDel: false
      },
      // 号码归属地
      flag:true,
      //号码归属地组件初始化
      Telpeov: {
        value: ""
      },
      Telcity: {
        value:""
      },
      Telenable: {
        value: ""
      },
      Telphonepre: {
        input: ""
      },
       Telarea: {
        input: ""
      },
      //号码归属地维护组件初始化
       Proctel: {
        value: ""
      },
       Citytel: {
        value: "",
        pcode: ""
      },
       Phonetel: {
        input: ""
      },
       Areatel: {
        input: ""
      },
       Isabletel: {
        value: ""
      },
      //申请协助弹框组件初始化
      LoginName:{
        input:""
      },
      StaffName:{
        input:""
      },
      CellPhone:{
        input:""
      },
      //申请延期弹框组件初始化
      ServiceMenuNumber:{
        input:""
      },
      ApplyExtensionTime:{
        value:""
      },
      yqsqOrder:"",
      delayreason:"",
      xzreason:"",
      //电话弹框组件初始化
      custtxt:{
        input:""
      },
      callphone:{
        input:""
      },
      //短信弹框组件初始化
      modn:{
        input:""
      },
      modc:{
        input:""
      },
      //投诉列表
      tabledatasDJ: {
        colnames: [
          
          { label: "日期", value: "cityName" },
          { label: "摘要", value: "isEnableName" },
          { label: "客户要求", value: "license" },
          { label: "投诉内容", value: "license" },
          { label: "坐席反馈", value: "license" },
          { label: "附件", value: "license" },
        ],
        tableDatas: [],
        queryObj: {
          apiConfig: crmApis.csDbLicenseAddrQueryFindAll, //车辆归属地查询

          // 返回的字段，获取的表单数据
          apiQueryRow: [
            "provinceName",
            "cityName",
            "isEnableName",
            "license",
            "provinceId",
            "cityId",
            "isEnable",
            "licenseAddrId",
            "updateControlId"
          ],
          params: {
            oemCode: this.$store.getters.orgInfo.OEM_CODE,
            groupCode: this.$store.getters.orgInfo.GROUP_CODE,
            provinceId: "",
            cityId: "",
            license: "",
            isEnable: ""
          },
          editparams: {
            licenseAddrId: "",
            license: "",
            provinceId: "",
            cityId: "",
            updateControlId: ""
          }
        },
        pageSize: 10,
        pageIndex: 1,
        total: 0
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
            oemCode:this.$store.getters.orgInfo.OEM_CODE,
            groupCode:this.$store.getters.orgInfo.GROUP_CODE,
            serverOrder:""
          }
        },
        pagesize:10,
        pageindex:1,
        total: 0
      },
      queryParams:{
        serverOrder:this.$route.params.serverOrder
      }
    };
  },
  created(){
    //this.initData();
  },
  mounted: function() {
    
    this.$nextTick(function(){
      this.initData(this.$route.params.serverOrder)
      //this.setBtnDp(this.$route.params.groupType)
    });
  },
  methods: {
    getarr(val){
      
      let redata={}
      redata=val
      this.xzUserId=redata[0].userId
    },
    setBtnDp(crnode){
      
      if(crnode=="2")
      {
        this.crruNode="TS_DLRCL";
        this.dlrcl=true;
        this.dlrkf=true;
        this.clObj="DLR";
      }
      if(crnode=="23")
      {
        this.crruNode="TS_PVCL";
        this.pvcl=true;
        this.pvkf=true;
        this.clObj="PV";
      }
      if(crnode=="25")
      {
        this.crruNode="TS_ZJCL";
        this.dlrkf=true;
        this.pvkf=true;
        this.clObj="ZJ";
      }
      //clObj
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
            oemCode:this.$store.getters.orgInfo.OEM_CODE,
            groupCode:this.$store.getters.orgInfo.GROUP_CODE,
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
          that.TSserverType="2"
          that.TSserverId=results["serverId"]
          that.TSserverOrder=results["serverOrder"]
          that.crruNode=results["crruNode"]
          that.setBtnDp(results["status"])
          that.carBrandCode=results["carBrandCode"]
          that.bigClassCode=results["bigClassCode"]
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
      that.$refs.Exinfo.initCL()
      that.$refs.Exinfo.initcustinfo()
    },
    applyJA: function() {
      this.getNextInfo("TS_DLRSQJA");
    },
    applyHF: function() {
      this.getNextInfo("TS_PVSQJA");
    },
    getNextInfo(val) {
      ;
      let that = this;
      that.isJaFlag=""
      var saveObj={}
      that.$set(saveObj, "oemCode", this.$store.getters.orgInfo.OEM_CODE);
      that.$set(saveObj, "groupCode", this.$store.getters.orgInfo.GROUP_CODE);
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
          this.$message({
          message: response.data[queryObj.apiConfig.ServiceCode].msg,
          type: "error",
          duration: 1000
        });
        }
      });
    },
    save(val){
      let that = this
      //校验
      var html=""
      if(that.$refs.DealWithContent.input==""||that.$refs.DealWithContent.input==null)
      {
        html = html + `<div>处理内容不能为空</div>`
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
      that.$set(saveObj, "oemCode", this.$store.getters.orgInfo.OEM_CODE);
      that.$set(saveObj, "groupCode", this.$store.getters.orgInfo.GROUP_CODE);
      that.$set(saveObj, "serverType", "2");
      that.$set(saveObj, "custName", that.$refs.custName.input);
      that.$set(saveObj, "contactTel", that.$refs.contactTel.input);
      that.$set(saveObj, "serverId", that.TSserverId);
      that.$set(saveObj, "serverOrder", that.TSserverOrder);
      that.$set(saveObj, "crruNode", val.toString()=="[object MouseEvent]"?that.crruNode:val);
      if(that.clObj=="PV")
      {
        that.$set(saveObj, "dealTitle", "网点处理");
      }else if(that.clObj=="DLR"){
        that.$set(saveObj, "dealTitle", "厂家处理");
      }
      else if(that.clObj=="ZJ"){
        that.$set(saveObj, "dealTitle", "专家处理");
      }
      that.$set(saveObj, "dealContent",that.$refs.DealWithContent.input);
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
          that.$crmcf.showMessages(that,'success','操作成功')
          that.$crmcf.crmcloseView(that,'crmMyToBe')
          }else{
            that.$crmcf.showMessages(that,'error',response.data[queryObj.apiConfig.ServiceCode].msg)
          }
      })
    },
    reviewJA: function() {
      this.save("TS_JA");
    },
    submitUpload() {
      this.$refs.upload.submit();
    },
    applyXZ: function() {
      let that = this;
      that.xzUserId="";
      that.dialogVisible = true;
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
      that.$set(saveObj, "oemCode", this.$store.getters.orgInfo.OEM_CODE);
      that.$set(saveObj, "groupCode", this.$store.getters.orgInfo.GROUP_CODE);
      that.$set(saveObj, "serverId", that.TSserverId);
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
          this.dialogVisible = false
          that.$crmcf.showMessages(that,'success','协助申请成功')
          }else{
            that.$crmcf.showMessages(that,'error',response.data[queryObj.apiConfig.ServiceCode].msg)
          }
      })
    },
    applyYQ() {
      let that = this;
      
      that.dialogYQSQ = true;
      that.yqsqOrder=that.$refs.serverOrder.input
      that.tabledatasJL.queryObj.params.serverOrder = that.$refs.serverOrder.input;
      setTimeout(function () {
        
        if (that.$refs.tableJL!=undefined){
          that.$refs.tableJL.getData();
        }
      }, 100)
    },
    applyOP: function() {
      
      let that = this
      //校验
      var html=""
      if(that.delayreason=="")
      {
        html = html + `<div>请填写申请延期原因</div>`
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
      that.$set(saveObj, "oemCode", this.$store.getters.orgInfo.OEM_CODE);
      that.$set(saveObj, "groupCode", this.$store.getters.orgInfo.GROUP_CODE);
      // that.$set(saveObj, "serverType", "2");
      that.$set(saveObj, "serverId", that.TSserverId);
      that.$set(saveObj, "serverOrder", that.TSserverOrder);
      that.$set(saveObj, "delayReson", that.delayreason);

      let queryObj = {
        // api配置
        type: "mutation",
        apiConfig: crmApis.csBuComplaintDelaySave,
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
          this.dialogYQSQ = false
          that.$crmcf.showMessages(that,'success','延期申请成功')
          }else{
          that.$crmcf.showMessages(that,'error',response.data[queryObj.apiConfig.ServiceCode].msg)
          }
      })
    },
    applySH() {},
    ProgressFK() {},
    refuse: function() {
      this.$confirm("确认驳回吗？")
        .then(_ => {
          let that = this;
          that.save("TS_PVCLBH");
        })
        .catch(_ => {});
    },
    //责任方按钮
    responsible(value){

    },
    //电话
    callscreen(){
      this.callflag=true;
    },
    //短信
    msgmod(){
      this.Msgmodflag=true;
    },
    // 号码归属地
    Telattr() {
      this.Attrflag = true;
    },
    //号码归属地维护
    addtelattr(){
      this.telEditFlag = true;
    },
    //车辆归属地
    carAttr(){
      this.carAttrflag=true;
    }
  }
};
</script>
