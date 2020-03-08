<!--
* 描述: 待清洗线索——线索详情
* 创建人: dxuem
* 创建时间: 2019-07-26 15:42
* 记录：
*  20190726 新建 dxuem
*  20190802 修改 dxuem
-->
<template>
  <div class="app-container app-container-table filter-params-crm filter-params-crm-scroll">
    <div class="filter-container filter-button">
      <el-button type="primary" size="small" @click="clean('form')">清洗</el-button>
      <el-button size="small" @click="quest()">问卷</el-button>
      <!-- <el-button type="primary" @click="finish('form')">结案</el-button> -->
      <el-button size="small" @click="sendmsg()">发送短信</el-button>
    </div>
    <!-- <div class="filter-container filter-title">客户信息</div> -->
    <div class="filter-container filter-params-crm">
      <el-form label-position="right">
        <el-collapse v-model="activeNames" @change="handleChange">
          <div class="filter-container filter-title-crm">客户信息</div>

          <el-row>
            <el-col :span="6">
              <txtCustomerName :txt_CustomerName="form.custName" ref="custName"></txtCustomerName>
            </el-col>
            <el-col :span="6">
              <Sex :Sex="form.genderName" ref="genderName"></Sex>
            </el-col>
            <el-col :span="6">
              <PhoneNumber :PhoneNumber="form.contactTel" ref="contactTel"></PhoneNumber>
            </el-col>
            <el-col :span="6">
              <BackupPhone :BackupPhone="form.backupTel" ref="backupTel"></BackupPhone>
            </el-col>
          </el-row>
          <div class="filter-container filter-title-crm">线索详情</div>
          <el-form ref="form">
            <el-row>
              <el-col :span="6">
                <ClueNumber :ClueNumber="form.serverOrder" ref="serverOrder"></ClueNumber>
              </el-col>
              <el-col :span="6">
                <IntentionalOutlet :IntentionalOutlet="form.dlrShortName" ref="dlrShortName" @CatData="getarr"></IntentionalOutlet>
              </el-col>
              <el-col :span="6">
                <ClueType :ClueType="form.clueTypeName" ref="clueTypeName"></ClueType>
              </el-col>

              <el-col :span="6">
                <IntentionalCar :IntentionalCar="form.carSeriesCn" ref="carSeriesCn" @CatData="getarr2"></IntentionalCar>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="6">
                <PlannedCarPurchaseTime
                  :PlannedCarPurchaseTime="form.buyPlanName"
                  ref="buyPlanName"
                ></PlannedCarPurchaseTime>
              </el-col>
              <el-col :span="6">
                <IntentionLevel :IntentionLevel="form.clueLevelCode" ref="clueLevelCode"></IntentionLevel>
              </el-col>
              <el-col :span="6">
                <CarShow :CarShow="form.carExhiName" ref="tbCarExhiId"></CarShow>
              </el-col>
              <el-col :span="6">
                <ExpectedFollowTime
                  :ExpectedFollowTime="form.nextCallbackDate"
                  ref="nextCallbackDate"
                ></ExpectedFollowTime>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="6">
                <PreOrderReachShopTime
                  :PreOrderReachShopTime="form.preArriveDlrTime"
                  ref="preArriveDlrTime"
                ></PreOrderReachShopTime>
              </el-col>
              <el-col :span="6">
                <sctActivityName :sct_ActivityName="form.actionName" ref="actionName"></sctActivityName>
              </el-col>

              <el-col :span="6">
                <ContactWay :ContactWay="form.cantactWayName" ref="cantactWayCode"></ContactWay>
              </el-col>
              <el-col :span="6">
                <ChannelBigClass :ChannelBigClass="form.infoChanMName" ref="infoChanMCode"></ChannelBigClass>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="6">
                <ChannelSmallClass :ChannelSmalTypeName="form.infoChanDName" ref="infoChanDCode"></ChannelSmallClass>
              </el-col>
              <el-col :span="6" class="crm-label-required">
                <CleaningStatus :CleaningStatus="form.cleanFlag" ref="cleanFlagName"></CleaningStatus>
              </el-col>

              <el-col :span="6">
                <NumberOfCleanings :NumberOfCleanings="form.cleanQty" ref="cleanQty"></NumberOfCleanings>
              </el-col>

              <el-col :span="6" class="crm-label-required">
                <ContactStatus :ContactStatus="form.touchStatus" ref="touchStatus"></ContactStatus>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="6">
                <Descripts :Descripts="form.reviewDesc" ref="reviewDesc"></Descripts>
              </el-col>
            </el-row>
          </el-form>
          <div class="filter-container filter-title-crm">服务信息</div>

          <el-row>
            <el-col :span="6">
              <EnglishName :EnglishName="form.personEn" ref="personEn"></EnglishName>
            </el-col>
            <el-col :span="6">
              <Birthday :Birthday="form.birthDate" ref="birthDate"></Birthday>
            </el-col>
            <el-col :span="6" class="crm-label-required">
              <CustomerType :CustomerType="form.custClassCode" ref="custClassCode"></CustomerType>
            </el-col>
            <el-col :span="6">
              <ConvenientContactTime :ConvenientContactTime="form.convTimeCode" ref="convTimeCode"></ConvenientContactTime>
            </el-col>
          </el-row>

          <el-row>
            <el-col :span="6">
              <Province :Province="form.addrProvince" @changeCode="selectCity" ref="addrProvince"></Province>
            </el-col>
            <el-col :span="6">
              <City :City="form.addrCity" @changeCode="selectCounty" ref="addrCity"></City>
            </el-col>
            <el-col :span="6">
              <District :District="form.addrCounty" ref="addrCounty"></District>
            </el-col>
            <el-col :span="6">
              <EMS :EMS="form.addrZip" ref="addrZip"></EMS>
            </el-col>
          </el-row>

          <el-row>
            <el-col :span="6">
              <txtDetailAddress :txt_DetailAddress="form.addrStreet" ref="addrStreet"></txtDetailAddress>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="6">
              <CertificateType :CertificateType="form.credTypeCode" ref="credTypeCode"></CertificateType>
            </el-col>
            <el-col :span="6">
              <CertificateNumber :CertificateNumber="form.credNo" ref="credNo"></CertificateNumber>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="6">
              <Education :Education="form.degreeCode" ref="degreeCode"></Education>
            </el-col>
            <el-col :span="6">
              <Industry :Industry="form.tradeCode" ref="tradeCode"></Industry>
            </el-col>
            <el-col :span="6">
              <Career :Career="form.jobCode" ref="jobCode"></Career>
            </el-col>
            <!-- <el-col :span="6">
              <ComanyFullName :ComanyFullName="form.Compname" ref="compname"></ComanyFullName>
            </el-col> -->
          </el-row>

          <el-row>
            <el-col :span="6">
              <AnnualHouseholdIncome
                :AnnualHouseholdIncome="form.familyIncomeCode"
                ref="familyIncomeCode"
              ></AnnualHouseholdIncome>
            </el-col>
            <el-col :span="6">
              <LicenseType :LicenseType="form.driverTypeCode" ref="driverTypeCode"></LicenseType>
            </el-col>
            <el-col :span="6">
              <DrivingAge :DrivingAge="form.driverTimeCode" ref="driverTimeCode"></DrivingAge>
            </el-col>
            <el-col :span="6">
              <Interest :Interest="form.hobby" ref="hobby"></Interest>
            </el-col>
          </el-row>

          <el-row>
            <el-col :span="6">
              <IntentionalPrice :IntentionalPrice="form.intentPriceCode" ref="intentPriceCode"></IntentionalPrice>
            </el-col>
            <el-col :span="6">
              <CarPurchaseWay :CarPurchaseWay="form.recommendFlag" ref="recommendFlag"></CarPurchaseWay>
            </el-col>
            <el-col :span="6">
              <PurchaseMethod :PurchaseMethod="form.buyTypeCode" ref="buyTypeCode"></PurchaseMethod>
            </el-col>
            <el-col :span="6">
              <IntentionalAppearanceColor :IntentionalAppearanceColor="form.color" ref="color"></IntentionalAppearanceColor>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="6">
              <IntentionalInteriorColor
                :IntentionalInteriorColor="form.innerColor"
                ref="innerColor"
              ></IntentionalInteriorColor>
            </el-col>
          </el-row>
          <div class="filter-container filter-title-crm">追踪信息</div>

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
        </el-collapse>

        <!-- 问卷 -->
        <!-- <el-dialog title="问卷答题" :visible.sync="questflag" width="900px" center>
          <div class="filter-container filter-title">
            填卷人信息
            <div style="float:right">
              <el-button type="primary" size="small">提交</el-button>
            </div>
          </div>
          <div class="filter-container filter-params">
            <el-form>
              <el-row>
               
                <el-col :span="8">
                  <ContactName :ContactName="Custnq" ref="custnq"></ContactName>
                </el-col>
              
                <el-col :span="8">
                  <Sex :Sex="Sexq" ref="Sexq"></Sex>
                </el-col>
        
                <el-col :span="8">
                  <PhoneNumber :PhoneNumber="Phone1" ref="contactTel"></PhoneNumber>
                </el-col>
              </el-row>
            </el-form>
          </div>
          <div class="filter-container filter-title">问卷答题</div>
          <div class="filter-container filter-params">
            <el-form label-position="left" label-width="56%">
              <el-row>
                <el-col :span="24">
                  <el-form-item label=" Q1 是否关注具体车型（例如Q50L/QX60）？">
                    <el-col :span="12">
                      <el-switch v-model="value2" active-text="是" inactive-text="否"></el-switch>
                    </el-col>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="24">
                  <el-form-item label=" Q2　如果各方面条件都合适的话，您计划在多长时间内购买车辆呢？">
                    <el-radio-group v-model="radio">
                      <el-col :span="6">
                        <el-radio :label="2">一年后</el-radio>
                      </el-col>
                      <el-col :span="6">
                        <el-radio :label="4">一年内</el-radio>
                      </el-col>
                      <el-col :span="6">
                        <el-radio :label="6">三个月</el-radio>
                      </el-col>
                      <el-col :span="6">
                        <el-radio :label="8">一周</el-radio>
                      </el-col>
                    </el-radio-group>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="24">
                  <el-form-item label=" Q3　请问您是否通过4S店或朋友那里了解和体验过呢？">
                    <el-col :span="12">
                      <el-switch v-model="value3" active-text="是" inactive-text="否"></el-switch>
                    </el-col>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="24">
                  <el-form-item label=" Q4　请问如果购车的话，您是在XXX城市上牌吗？">
                    <el-col :span="12">
                      <el-switch v-model="value4" active-text="是" inactive-text="否"></el-switch>
                    </el-col>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="24">
                  <el-form-item label=" Q5　请问您是否还考虑了其它品牌的车型呢？">
                    <el-col :span="12">
                      <el-switch v-model="value5" active-text="是" inactive-text="否"></el-switch>
                    </el-col>
                  </el-form-item>
                </el-col>
              </el-row>
            </el-form>
          </div>
        </el-dialog>-->

        <!-- 短信模板弹窗 -->
        <!-- <el-dialog :visible.sync="msgflag" :width="width" class="dialog" title="短信模板">
          <div class="filter-container filter-title">
            <el-row>
              <el-col :span="4" style="padding:0">查询条件</el-col>
              <el-col :span="20">
                <div class="filter-container filter-button">
                  <el-button type="primary" @click.native="query">查询</el-button>
                  <el-button @click.native="handleSelect">确认</el-button>
                  <el-button @click.native="reset">重置</el-button>
                </div>
              </el-col>
            </el-row>
          </div>
          <div class="filter-container filter-params">
            <el-form :model="form" label-position="right">
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
          <Table v-bind:tabledatas="tabledata" ref="table"></Table>
        </el-dialog>-->
      </el-form>
    </div>
    <ExtendedInfo></ExtendedInfo>
  </div>
</template>
<script>
import ExtendedInfo from "@/components/crm/ExtendedInfo"
import txtCustomerName from "@/components/crm/textbox/Public/customerInfos/txt_CustomerName";
import Sex from "@/components/crm/Select/Common/Customer/Sex";
import PhoneNumber from "@/components/crm/textbox/Public/customerInfos/PhoneNumber";
import BackupPhone from "@/components/crm/textbox/Public/customerInfos/BackupPhone";
import tpServiceInformationCallCenterLeads from "@/components/crm/Template/tp_ServiceInformationCallCenterLeads";
import tpClueDetailscalcenterclue from "@/components/crm/Template/tp_ClueDetails_calcenterclue";
import TrackingInfoCallCenterClues from "@/components/crm/Template/TrackingInfo_CallCenterClues";

import ClueNumber from "@/components/crm/textbox/Clue/ClueNumber";
import IntentionalOutlet from "@/components/crm/EjectWindows/IntentionalOutlet.vue";
import ClueType from "@/components/crm/Select/ClueType.vue";
import IntentionalCar from "@/components/crm/EjectWindows/IntentionalCar.vue";
import OrderAmount from "@/components/crm/textbox/Clue/CallCenterClue/OrderAmount.vue";
import CarShow from "@/components/crm/Select/Clue/CallCenterClue/CarShow.vue";
import PlannedCarPurchaseTime from "@/components/crm/Select/Common/Customer/PlannedCarPurchaseTime.vue";
import IntentionLevel from "@/components/crm/Select/Common/Customer/IntentionLevel.vue";
import ExpectedFollowTime from "@/components/crm/Time/ExpectedFollowTime.vue";
import PreOrderReachShopTime from "@/components/crm/Time/PreOrderReachShopTime.vue";
import sctActivityName from "@/components/crm/Select/Clue/Rescue/sct_ActivityName.vue";
import OrderStatus from "@/components/crm/Select/Clue/CallCenterClue/OrderStatus.vue";
import ContactWay from "@/components/crm/Select/Common/ContactWay.vue";
import ChannelBigClass from "@/components/crm/Select/Common/ChannelBigClass.vue";
import ChannelSmallClass from "@/components/crm/textbox/Clue/ChannelSmalTypeName.vue";
import CleaningStatus from "@/components/crm/Select/Clue/CallCenterClue/CleaningStatus.vue";
import NumberOfCleanings from "@/components/crm/textbox/Clue/CallCenterClue/NumberOfCleanings";
import OrderTime from "@/components/crm/Time/OrderTime.vue";
import OrderNumber from "@/components/crm/textbox/Clue/CallCenterClue/OrderNumber.vue";
import ContactStatus from "@/components/crm/Select/Clue/ContactStatus";
import Descripts from "@/components/crm/textbox/Public/Descripts.vue";

import EnglishName from "@/components/crm/textbox/Clue/CallCenterClue/EnglishName";
import Birthday from "@/components/crm/Time/Birthday";
import CustomerType from "@/components/crm/Select/Common/Customer/CustomerType";
import ConvenientContactTime from "@/components/crm/Select/Common/Customer/ConvenientContactTime";
import Province from "@/components/crm/Select/Common/Province";
import City from "@/components/crm/Select/Common/City";
import District from "@/components/crm/Select/Common/District";
import EMS from "@/components/crm/textbox/Public/customerInfos/EMS";
import txtDetailAddress from "@/components/crm/textbox/txt_DetailAddress";
import CertificateType from "@/components/crm/Select/Common/KeepAFile/CertificateType";

//import  from "@/"
import CertificateNumber from "@/components/crm/textbox/Public/customerInfos/CertificateNumber";
import Education from "@/components/crm/Select/CallCenterClue/Education";
import Industry from "@/components/crm/Select/Clue/CallCenterClue/Industry";
import Career from "@/components/crm/Select/Clue/CallCenterClue/Career";
import ComanyFullName from "@/components/crm/textbox/Public/customerInfos/ComanyFullName";
import AnnualHouseholdIncome from "@/components/crm/Select/Clue/CallCenterClue/AnnualHouseholdIncome";
import LicenseType from "@/components/crm/Select/Clue/CallCenterClue/LicenseType";
import DrivingAge from "@/components/crm/Select/Common/Customer/DrivingAge";
import Interest from "@/components/crm/EjectWindows/Interest";
import IntentionalPrice from "@/components/crm/Select/Common/Customer/IntentionalPrice";
import CarPurchaseWay from "@/components/crm/Select/Clue/CallCenterClue/CarPurchaseWay";
import IntentionalAppearanceColor from "@/components/crm/Select/Clue/CallCenterClue/IntentionalAppearanceColor";
import IntentionalInteriorColor from "@/components/crm/Select/Clue/CallCenterClue/IntentionalInteriorColor";
import PurchaseMethod from "@/components/crm/Select/CallCenterClue/PurchaseMethod";

// 短信模板
import ModelName from "@/components/crm/textbox/Public/Message/ModelName";
import ModelContentText from "@/components/crm/textbox/Public/Message/ModelContentText";

import Table from "@/components/crm/table/Table";
import { crmApis } from "@/api/graphQLApiList/crm";
import { requestGraphQL } from "@/api/commonRequest";
export default {
  name: "crmToBeCleanClueDetail",
  components: {
    ExtendedInfo,
    ModelName,
    ModelContentText,
    ContactStatus,
    ClueNumber,
    IntentionalOutlet,
    ClueType,
    IntentionalCar,
    OrderAmount,
    CarShow,
    PlannedCarPurchaseTime,
    IntentionLevel,
    ExpectedFollowTime,
    PreOrderReachShopTime,
    sctActivityName,
    OrderStatus,
    ContactWay,
    ChannelBigClass,
    ChannelSmallClass,
    NumberOfCleanings,
    OrderTime,
    OrderNumber,
    Descripts,
    CleaningStatus,
    Table,
    txtCustomerName,
    Sex,
    PhoneNumber,
    BackupPhone,
    tpServiceInformationCallCenterLeads,
    tpClueDetailscalcenterclue,
    TrackingInfoCallCenterClues,
    EnglishName,
    Birthday,
    CustomerType,
    ConvenientContactTime,
    Province,
    City,
    District,
    EMS,
    txtDetailAddress,
    CertificateType,
    CertificateNumber,
    Education,
    Industry,
    Career,
    ComanyFullName,
    AnnualHouseholdIncome,
    LicenseType,
    DrivingAge,
    Interest,
    IntentionalPrice,
    CarPurchaseWay,
    IntentionalAppearanceColor,
    IntentionalInteriorColor,
    PurchaseMethod
  },
  data() {
    return {
      msgflag: false,
      questflag: false,
      params: [],
      Custnq: {
        input: ""
      },
      Sexq: {
        value: ""
      },
      bcDlrCode:"",
      bcinteSeriesId:"",
      bcCustId:this.$route.params.custId,
      bcServerOrder:this.$route.params.serverOrder,
      bccantactWayCode:"",
      bcinfoChanMCode:"",
      bcinfoChanDCode:"",
      value2: true,
      value4: true,
      value3: true,
      value5: true,

      radio: 2,

      value1: "",
      value: "",

      // 短信模板
      width: "900px",
      form: {
        carSeriesCn: {
          input: "",
          dialogVisible: true
        },
        custName: {
          input: "",
          isreadonly: false
        },
        genderName: {
          value: "",
          isdisabled: false
        },
        touchStatus: {
          value: "",
          isdisabled: false
        },
        contactTel: {
          input: "",
          isreadonly: false
        },
        Phone1: {
          input: ""
        },
        backupTel: {
          input: "",
          isreadonly: false
        },
        serverOrder: {
          input: "",
          isdisabled: true
        },
        dlrShortName: {
          input: "",
          dialogVisible: true
        },
        clueTypeName: {
          value: "",
          isdisabled: true
        },
        Intencar: {
          input: "",
          dialogVisible: true
        },
        carExhiName: {
          value: "",
          isdisabled: true
        },
        buyPlanName: {
          value: "",
          isdisabled: false
        },
        clueLevelCode: {
          value: "",
          isdisabled: false
        },
        nextCallbackDate: {
          value: "",
          isreadonly: false
        },
        preArriveDlrTime: {
          value: "",
          isreadonly: false
        },
        actionName: {
          value: "",
          isdisabled: true
        },
        orderStatusName: {
          value: "",
          isdisabled: false
        },
        cantactWayName: {
          value: "",
          isdisabled: true
        },
        infoChanMName: {
          value: "",
          isdisabled: true
        },
        infoChanDName: {
          input: "",
          isdisabled: true
        },
        cleanFlagName: {
          value:"",
          isdisabled: false
        },
        cleanFlag: {
          value:"",
          isdisabled: false
        },
        cleanQty: {
          input: "",
          isreadonly: true
        },
        orderDate: {
          value: "",
          isreadonly: false
        },
        orderCode: {
          input: "",
          isreadonly: false
        },
        reviewDesc: {
          input: "",
          isreadonly: false
        },
        personEn: {
          input: "",
          isreadonly: false
        },
        birthDate: {
          value: "",
          isreadonly: false
        },
        custClassCode: {
          value: "",
          isdisabled: false
        },
        convTimeCode: {
          value: "",
          isdisabled: false
        },
        addrProvince: {
          value: "",
          isdisabled: false
        },
        addrCity: {
          value: "",
          pcode: "",
          isdisabled: false
        },
        addrCounty: {
          value: "",
          pcode: "",
          isdisabled: false
        },
        addrZip: {
          input: "",
          isreadonly: false
        },
        addrStreet: {
          input: "",
          isreadonly: false
        },
        credTypeCode: {
          value: "",
          isdisabled: false
        },
        credNo: {
          input: "",
          isreadonly: false
        },
        degreeCode: {
          value: "",
          isdisabled: false
        },
        tradeCode: {
          value: "",
          isdisabled: false
        },
        jobCode: {
          value: "",
          isdisabled: false
        },
        Compname: {
          input: "",
          isreadonly: false
        },
        familyIncomeCode: {
          value: "",
          isdisabled: false
        },
        driverTypeCode: {
          value: "",
          isdisabled: false
        },
        driverTimeCode: {
          value: "",
          isdisabled: false
        },
        hobby: {
          dialogVisible: false,
          disabled: true
        },
        intentPriceCode: {
          value: "",
          isdisabled: false
        },
        recommendFlag: {
          value: "",
          isdisabled: false
        },
        buyTypeCode: {
          value: "",
          isdisabled: false
        },
        color: {
          value: "",
          isdisabled: false
        },
        innerColor: {
          value: "",
          isdisabled: false
        },
        credTypeCode: {
          value: ""
        },
        addrCounty: {
          value: ""
        },
        convTimeCode: {
          value: ""
        },
        custClassCode: {
          value: ""
        }
      },
      modn: {
        input: ""
      },
      modc: {
        input: ""
      },
      tabledatas: {
        colnames: [
          { label: "意向车系", value: "carSeriesCn" },
          { label: "客户名称", value: "custName" },
          { label: "意向级别", value: "clueLevelCode" },
          { label: "回访描述", value: "reviewDesc" },
          { label: "回访时间", value: "factReviewDate" },
          { label: "处理状态", value: "touchStatusName" },
          //{ label: "回访类型", value: "reviewTypeName" },
          { label: "回访人员", value: "hfPerson" },
          { label: "来源单号", value: "serverOrder" }
        ],
        tableData: [],
        queryObj: {
          // .后面是服务编码，.前面固定写死
          apiConfig: crmApis.clueServerQueryReviewRecord,
          apiQueryRow: [
            "carSeriesCn",
            "custName",
            "clueLevelCode",
            "reviewDesc",
            "factReviewDate",
            "touchStatusName",
            //"reviewTypeName",
            "hfPerson",
            "serverOrder"
          ],
          params: {
            serverOrder: ""
          }
        },
        pagesize: 10,
        pageindex: 1,
        total: 0
      },
      // 发送短信
      msgdata: {
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
      activeNames: ["1", "2", "3", "4"]
    };
  },
  mounted: function() {
    this.$nextTick(function() {
      this.initdata();
      this.query();
      this.initdatacust();
    });
  },
  methods: {
    getarr(val) {
      let redata = {};
      redata = val;
      debugger
      this.bcDlrCode = redata.dlrCode;
    },
    getarr2(val) {
      let redata = {};
      redata = val;
      this.bcinteSeriesId = redata[0].carSeriesId;
      this.bcinteSeriesCode = redata[0].carSeriesCode;
    },
    // 查询数据
    initdata() {
      let that = this;
      let queryObj = {
        // api配置
        apiConfig: crmApis.clueServerQueryDetailFromHeadquarters,
        // 需要调用的API服务配置
        apiServices: [
          {
            //表格中台返回网格的字段
            apiQueryRow: [
              "actionDesc",
              "actionName",
              "actionType",
              "activeTime",
              "addrZip",
              "applicant",
              "applicantId",
              "applicantTime",
              "arrivedDate",
              "assignDate",
              "assignQty",
              "assignStatus",
              "assignStatusName",
              "auditResult",
              "auditType",
              "auitOpinion",
              "backupTel",
              "batchNo",
              "birthDate",
              "brandid",
              "buyCaruseCode",
              "buyFormCode",
              "buyPlanCode",
              "buyPlanName",
              "buyTypeCode",
              "buyTypeName",
              "buyingFormSite",
              "buypriceoff",
              "buytime",
              "caEmpId",
              "caEmpName",
              "callednum",
              "campaignId",
              "cantactWayCode",
              "cantactWayName",
              "carBrandCode",
              "carBrandName",
              "carConfigCn",
              "carConfigId",
              "carExhiName",
              "carLicense",
              "carSeriesCn",
              "caseTime",
              "changeIntentDate",
              "city",
              "cleanFlag",
              "cleanFlagName",
              "cleanQty",
              "clueBelongType",
              "clueCiytId",
              "clueCode",
              "clueDate",
              "reviewDesc",
              "clueFrom",
              "clueId",
              "clueLevelCode",
              "clueSource",
              "clueStatus",
              "clueType",
              "clueTypeName",
              "color",
              "colorName",
              "communicater",
              "contStatus",
              "contactTel",
              "convTimeCode",
              "convTimeName",
              "createdDate",
              "createdName",
              "creator",
              "credNo",
              "credTypeCode",
              "credTypeName",
              "crruLevel",
              "crruNode",
              "crruNodeName",
              "csr",
              "custAddr",
              "custClassCode",
              "custClassName",
              "custClueCode",
              "custCounty",
              "custCountyId",
              "custFullName",
              "custId",
              "custName",
              "custSource",
              "dealNode",
              "dealStatus",
              "dealType",
              "degreeCode",
              "degreeName",
              "deliveryCarSeriesId",
              "deliveryCarSeriesName",
              "deliveryCarTypeCode",
              "deliveryCarTypeName",
              "dlrCode",
              "dlrShortName",
              "driveDate",
              "gender",
              "genderName",
              "groupCode",
              "groupId",
              "infoChanDCode",
              "infoChanDName",
              "infoChanMCode",
              "infoChanMName",
              "innerColor",
              "innerColorName",
              "intentPriceCode",
              "intentionalPrice",
              "inteSeriesCode",
              "inteSeriesId",
              "isEnable",
              "orderAmount",
              "orderCode",
              "orderDate",
              "orderStatusName",
              "preArriveDlrTime",
              "processingAction",
              "recommendFlag",
              "recommendName",
              "serverOrder",
              "tbCarExhiId",
              "touchStatus",
              "touchStatusName",
              "vin",
              "vipTypeCode"
            ]
          }
        ],
        //条件/实体参数（变量），根据typeParam中的定义配置
        variables: {
          pageSize: 10,
          pageIndex: 1,
          //当前中台使用的名称有dataInfo、info，具体查看API文档
          dataInfo: {
            serverOrder: this.$route.params.serverOrder
          } //从线索查询传过来的参数
        }
      };
      //转换了中台请求格式数据
      var paramD = that.$getParams(queryObj);
      // 调用中台API方法（可复用）
      requestGraphQL(paramD).then(response => {
        if (
          response.data[queryObj.apiConfig.ServiceCode].result == "1" &&
          response.data[queryObj.apiConfig.ServiceCode].rows != ""
        ) {
          let results = response.data[queryObj.apiConfig.ServiceCode].rows[0];
          for (let key in results) {
            if (that.form[key] && "input" in that.form[key]) {
              that.form[key].input = results[key];
            } else if (that.form[key] && "value" in that.form[key]) {
              that.form[key].value = results[key];
            }
          }
          for (let key in results) {
            if (that.$refs[key] && that.$refs[key].getData) {
              that.$refs[key].getData();
            } else if (that.$refs[key] && that.$refs[key].getNewData) {
              that.$refs[key].getNewData();
            }
          }
          that.bcDlrCode = results.dlrCode;
          that.bcinteSeriesId = results.inteSeriesId;
          that.bcinteSeriesCode = results.inteSeriesCode;
          that.bccantactWayCode = results.cantactWayCode;
          that.bcinfoChanMCode = results.infoChanMCode;
          that.bcinfoChanDCode = results.infoChanDCode;
          that.form.clueTypeName.value = results.clueType;
        }
      });
    },
    initdatacust() {
      let that = this;
      let queryObj = {
        // api配置
        apiConfig: crmApis.mdmDlrCustInfoQuery,
        // 需要调用的API服务配置
        apiServices: [
          {
            //表格中台返回网格的字段
            apiQueryRow: [
              "personEn",
              "convTimeName",
              "convTimeCode",
              "credTypeName",
              "credNo",
              "addrZip",
              "birthDate",
              "degreeName",
              "degreeCode",
              "tradeName",
              "tradeCode",
              "jobCode",
              "jobName",
              "incomeName",
              "familyIncomeCode",
              "driverTypeName",
              "driverTimeCode",
              "driverTimeName",
              "driverTypeCode",
              "hobby",
              "addrProvince",
              "addrCity",
              "addrCounty",
              "addrStreet",
              "custClassCode"
            ]
          }
        ],
        //条件/实体参数（变量），根据typeParam中的定义配置
        variables: {
          pageSize: 10,
          pageIndex: 1,
          //当前中台使用的名称有dataInfo、info，具体查看API文档
          dataInfo: {
            dlrCustNo: this.$route.params.custId,
            isPV800:"1"
          } //从线索查询传过来的参数
        }
      };
      //转换了中台请求格式数据
      var paramD = that.$getParams(queryObj);
      // 调用中台API方法（可复用）
      requestGraphQL(paramD).then(response => {
        if (
          response.data[queryObj.apiConfig.ServiceCode].result == "1" &&
          response.data[queryObj.apiConfig.ServiceCode].rows != ""
        ) {
          let results = response.data[queryObj.apiConfig.ServiceCode].rows[0];
          for (let key in results) {
            if (that.form[key] && "input" in that.form[key]) {
              that.form[key].input = results[key];
            } else if (that.form[key] && "value" in that.form[key]) {
              that.form[key].value = results[key];
            }
            if (that.$refs[key] && that.$refs[key].getData) {
              that.$refs[key].getData();
            } else if (that.$refs[key] && that.$refs[key].getNewData) {
              that.$refs[key].getNewData();
            }
          }
        }
      });
    },
    query() {
      let that = this;
      that.tabledatas.queryObj.params.serverOrder = that.bcServerOrder;
 this.$crmcf.simpleTablequery(
        that,
        that.tabledatas,
        that.tabledatas.queryObj.apiConfig,
        function(data) {
          that.tabledatas.tableData = data.rows;
        }
      );
    },
    handleChange(val) {
      console.log(val);
    },
    selectCity(val) {
      let that = this;
      that.form.addrCity.pcode = val;
      that.$refs.addrCity.getData();
    },
    selectCounty(val) {
      let that = this;
      that.form.addrCounty.pcode = val;
      that.$refs.addrCounty.getData();
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
    quest() {
      let that = this;

      that.questflag = true;
    },
    //清洗
    clean(formName) {
      let that = this;
      let flag = false;
      var config = this.config;
      config = {
        cleanFlagName: [
          true,
          that.$crmcf.crmRegExp("empty"),
          "value",
          that.form.cleanFlag.value,
          "清洗状态",
          "不能为空"
        ],

        touchStatus: [
          true,
          that.$crmcf.crmRegExp("empty"),
          "value",
          that.$refs.touchStatus.value,
          "接触状态",
          "不能为空"
        ]
      };
      that.$crmcf.validForm(that, formName, config, function(flag) {
        if (flag) {
          //线索详情的保存
          let queryObj = {
            // api配置
            type: "mutation",
            apiConfig: crmApis.clueServerMutationClean,
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
                custId: that.bcCustId,
                custName: that.$refs.custName.input,
                contactTel: that.$refs.contactTel.input,
                backupTel: that.$refs.contactTel.input,
                gender: that.$refs.genderName.value,
                clueCode: that.bcServerOrder,
                dlrCode: (that.bcDlrCode==""?that.$refs.dlrShortName.dlrCode:that.bcDlrCode),
                clueType: that.form.clueTypeName.value,
                carSeriesCn: that.$refs.carSeriesCn.input,
                inteSeriesId: that.bcinteSeriesId,
                inteSeriesCode: that.bcinteSeriesCode,
                buyPlanName: that.$refs.buyPlanName.value,
                clueLevelCode: that.$refs.clueLevelCode.value,
                tbCarExhiId: that.$refs.tbCarExhiId.value,
                nextCallbackDate: that.$refs.nextCallbackDate.value,
                preArriveDlrTime: that.$refs.preArriveDlrTime.value,
                cantactWayCode: that.bccantactWayCode,
                infoChanMCode: that.bcinfoChanMCode,
                infoChanDCode: that.bcinfoChanDCode,
                cleanFlag: that.$refs.cleanFlagName.value,
                touchStatus: that.$refs.touchStatus.value,
                intentPriceCode: that.$refs.intentPriceCode.value,
                recommendFlag: that.$refs.recommendFlag.value,
                buyTypeCode: that.$refs.buyTypeCode.value,
                color: that.$refs.color.value,
                innerColor: that.$refs.innerColor.value,
                cleanQty: that.$refs.cleanQty.input,
                reviewDesc: that.$refs.reviewDesc.input,
                serverOrder: that.bcServerOrder
              }
            }
          };
          //转换了中台请求格式数据
          var paramD = that.$getParams(queryObj);
          // 调用中台API方法（可复用）
          requestGraphQL(paramD).then(response => {
            if (
              response.data[queryObj.apiConfig.ServiceCode] != null &&
              response.data[queryObj.apiConfig.ServiceCode].result == "1"
            ) {
              //服务信息 
              let queryObj = {
                // api配置
                type: "mutation",
                apiConfig: crmApis.createdOneIdMutationSaveCust,
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
                    //英文名称
                    custInfo: {
                      custName: that.$refs.custName.input,
                      custFullName: that.$refs.custName.input,
                      phone: that.$refs.contactTel.input,
                      birthDate: that.$refs.birthDate.value,
                      custClassCode: that.$refs.custClassCode.value,
                      convTimeCode: that.$refs.convTimeCode.value,
                      addrProvince: that.$refs.addrProvince.value,
                      addrCity: that.$refs.addrCity.value,
                      addrCounty: that.$refs.addrCounty.value,
                      addrZip: that.$refs.addrZip.input,
                      addrStreet: that.$refs.addrStreet.input,
                      credTypeCode: that.$refs.credTypeCode.value,
                      credNo: that.$refs.credNo.input,
                      degreeCode: that.$refs.degreeCode.value,
                      tradeCode: that.$refs.tradeCode.value,
                      jobCode: that.$refs.jobCode.value,
                      familyIncomeCode: that.$refs.familyIncomeCode.value,
                      driverTypeCode: that.$refs.driverTypeCode.value,
                      driverTimeCode: that.$refs.driverTimeCode.value,
                      dlrCustNo: that.bcCustId
                    },
                    custModifyScence: "203"
                  }
                }
              };

              //转换了中台请求格式数据
              var paramD = that.$getParams(queryObj);
              // 调用中台API方法（可复用）
              requestGraphQL(paramD).then(response => {
                if (
                  response.data[queryObj.apiConfig.ServiceCode] != null &&
                  response.data[queryObj.apiConfig.ServiceCode].result == "1"
                ) {
                  that.$crmcf.showMessages(that, "success", "成功！");
                  //  this.$crmcf.jumpDetailTag(that,'crmToBeCleanClue','/crmToBeCleanClue',rowData)
                  that.$crmcf.crmcloseView(that);
                } else {
                  that.$crmcf.showMessages(
                    that,
                    "error",
                    response.data[queryObj.apiConfig.ServiceCode].msg
                  );
                }
              });
            } else {
              that.$crmcf.showMessages(
                that,
                "error",
                response.data[queryObj.apiConfig.ServiceCode].msg
              );
            }
          });
        }
      });
    },
    //结案
    finish() {
      let that = this;
      let queryObj = {
        // api配置
        type: "mutation",
        apiConfig: crmApis.clueServerMutationClean,
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
            custId: that.bcCustId,
            custName: that.$refs.custName.input,
            contactTel: that.$refs.contactTel.input,
            backupTel: that.$refs.contactTel.input,
            gender: that.$refs.genderName.value,
            clueCode: that.bcServerOrder,
            dlrCode: (that.bcDlrCode==""?that.$refs.dlrShortName.dlrCode:that.bcDlrCode),
            clueType: that.$refs.clueTypeName.value,
            carSeriesCn: that.$refs.carSeriesCn.value,
            inteSeriesId: that.bcinteSeriesId,
            inteSeriesCode: that.bcinteSeriesCode,
            buyPlanName: that.$refs.buyPlanName.value,
            clueLevelCode: that.$refs.clueLevelCode.value,
            tbCarExhiId: that.$refs.tbCarExhiId.value,
            nextCallbackDate: that.$refs.nextCallbackDate.value,
            preArriveDlrTime: that.$refs.preArriveDlrTime.value,
            cantactWayCode: that.bccantactWayCode,
            infoChanMCode: that.bcinfoChanMCode,
            infoChanDCode: that.bcinfoChanDCode,
            cleanFlag: that.$refs.cleanFlagName.value,
            touchStatus: that.$refs.touchStatus.value,
            intentPriceCode: that.$refs.intentPriceCode.value,
            recommendFlag: that.$refs.recommendFlag.value,
            buyTypeCode: that.$refs.buyTypeCode.value,
            color: that.$refs.color.value,
            innerColor: that.$refs.innerColor.value,
            cleanQty: that.$refs.cleanQty.input,
            reviewDesc: that.$refs.reviewDesc.input,
            serverOrder: that.bcServerOrder
          }
        }
      };
      //转换了中台请求格式数据
      var paramD = that.$getParams(queryObj);
      // 调用中台API方法（可复用）
      requestGraphQL(paramD).then(response => {
        if (
          response.data[queryObj.apiConfig.ServiceCode] != null &&
          response.data[queryObj.apiConfig.ServiceCode].result == "1"
        ) {
          that.$crmcf.showMessages(that, "success", "成功！");
          that.$crmcf.crmcloseView(that);
        } else {
          that.$crmcf.showMessages(
            that,
            "error",
            response.data[queryObj.apiConfig.ServiceCode].msg
          );
        }
      });
    },
    sendmsg() {
      let that = this;

      that.msgflag = true;
    },
    reset() {
      this.$refs.ModelName.reset();
      this.$refs.ModelContentText.reset();
    }
  }
};
</script>