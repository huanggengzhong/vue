<!--
* 描述: 线索详情
* 创建人: chq2
* 创建时间: 2019-07-26
* 记录：
*  20190726 新建 chq2
-->

<template>
  <div class="app-container app-container-table filter-params-crm-scroll">
    <div class="filter-container filter-title-crm">客户信息</div>
    <div class="filter-container filter-params-crm">
      <el-form label-position="right" disabled>
        <!--第一行-->
        <el-row>
          <el-col :span="6">
            <txt_CustomerName :txt_CustomerName="form.custName" ref="custName"></txt_CustomerName>
          </el-col>
          <el-col :span="6">
            <Sex :Sex="form.Sexs" ref="Sex"></Sex>
          </el-col>
          <el-col :span="6">
            <PhoneNumber :PhoneNumber="form.contactTel" ref="contactTel"></PhoneNumber>
          </el-col>
          <el-col :span="6">
            <BackupPhone :BackupPhone="form.backupTel" ref="backupTel"></BackupPhone>
          </el-col>
          </el-row>
      </el-form>
        <!--第二行-->
        <div class="filter-container filter-title-crm">商机信息</div>
        <div class="filter-container filter-params-crm">
          <el-form label-position="right" disabled>
            <!--商机信息模块tp_BusinessInfo-->
            <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
              <el-tab-pane label="商机主要信息" name="first">
                  <el-col :span="24">
                    <!--主要信息的模板-->
                    <el-row>
                      <el-col :span="6">
                        <SourceOfChannel :SourceOfChannel="form.cantactWayName" ref="SourceChannel"></SourceOfChannel>
                      </el-col>
                      <el-col :span="6">
                        <IntentionLevel :IntentionLevel="form.clueLevelCode" ref="clueLevelCode"></IntentionLevel>
                      </el-col>
                      <el-col :span="6">
                        <IntentionalPrice
                          :IntentionalPrice="form.intentPriceCode"
                          ref="intentPriceCode"
                        ></IntentionalPrice>
                      </el-col>
                      <el-col :span="6">
                        <NextReturnVisitTime
                          :NextReturnVisitTime="form.nextCallbackDate"
                          ref="nextCallbackDate"
                        ></NextReturnVisitTime>
                      </el-col>
                   </el-row>
                    <el-row>
                      <el-col :span="6">
                        <IntentionalCar :IntentionalCar="form.carSeriesCn" ref="carSeriesCn"></IntentionalCar>
                      </el-col>
                      <el-col :span="6">
                        <IntentionalModel :IntentionalModel="form.carConfigCn" ref="carConfigCn"></IntentionalModel>
                      </el-col>
                      <el-col :span="6">
                        <IntentionalColor :IntentionalColor="form.innerColor" ref="innerColor"></IntentionalColor>
                      </el-col>
                      <el-col :span="6">
                        <dt_RetentionTime
                          :dt_RetentionTime="form.remainDataDate"
                          ref="remainDataDate"
                        ></dt_RetentionTime>
                      </el-col>
                   </el-row>
                    <!-- <el-row>
                      <el-col :span="6">
                        <dtProVisitTime :dtProVisitTime="form.ProVisitTime" ref="ProVisitTime"></dtProVisitTime>
                      </el-col>
                    </el-row>-->
                    <el-row>
                      <el-col :span="6">
                        <Descripts :Descripts="form.clueDesc" ref="clueDesc"></Descripts>
                      </el-col>
                      </el-row>
                      <el-row>
                      <el-col :span="6">
                        <Remarks :Remarks="form.remark" ref="remark"></Remarks>
                      </el-col>
                      </el-row>
                  </el-col>
              </el-tab-pane>
              <el-tab-pane label="商机次要信息" name="second">
                <!--次要信息的模板-->
                
                  <el-col :span="24">
                    <div class="grid-content bg-purple-dark">
                      <!-- 第一行 -->
                     <el-row>
                        <el-col :span="6">
                          <div class="grid-content bg-purple">
                            <CustomerSource :CustomerSource="form.custSource" ref="custSource"></CustomerSource>
                          </div>
                        </el-col>
                        <el-col :span="6">
                          <div class="grid-content bg-purple-light">
                            <RetainCustomers
                              :RetainCustomers="form.retainRecommendName"
                              ref="retainRecommendName"
                            ></RetainCustomers>
                          </div>
                        </el-col>
                        <el-col :span="6">
                          <div class="grid-content bg-purple">
                            <RecommenderRelation
                              :RecommenderRelation="form.recommendPersonRelation"
                              ref="recommendPersonRelation"
                            ></RecommenderRelation>
                          </div>
                        </el-col>
                        <el-col :span="6">
                          <div class="grid-content bg-purple-light">
                            <OldCarBrandNumber :OldCarBrandNumber="form.OldNumber" ref="OldNumber"></OldCarBrandNumber>
                          </div>
                        </el-col>
                      </el-row>
                      <!-- 第二行 -->
                      <el-row>
                        <el-col :span="6">
                          <div class="grid-content bg-purple">
                            <introducerRelationship
                              :introducerRelationship="form.introducerRelationship"
                              ref="introducerRelationship"
                            ></introducerRelationship>
                          </div>
                        </el-col>
                        <el-col :span="6">
                          <div class="grid-content bg-purple-light">
                            <IntroducePeople :IntroducePeople="form.introducer" ref="introducer"></IntroducePeople>
                          </div>
                        </el-col>
                        <el-col :span="6">
                          <div class="grid-content bg-purple">
                            <IntroducerPhone
                              :IntroducerPhone="form.introduceTel"
                              ref="introduceTel"
                            ></IntroducerPhone>
                          </div>
                        </el-col>
                        <el-col :span="6">
                          <div class="grid-content bg-purple">
                            <IntroducerSex
                              :IntroducerSex="form.introduceGender"
                              ref="introduceGender"
                            ></IntroducerSex>
                          </div>
                        </el-col>
                        </el-row>
                    </div>
                  </el-col>
              </el-tab-pane>
            </el-tabs>
          </el-form>
          </div>
    </div>
    <div class="filter-container filter-title-crm">接触记录</div>
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
import txt_CustomerName from "@/components/crm/textbox/Public/customerInfos/txt_CustomerName";
import PhoneNumber from "@/components/crm/textbox/Public/customerInfos/PhoneNumber";
import Sex from "@/components/crm/Select/Common/Customer/Sex.vue";
import BackupPhone from "@/components/crm/textbox/Public/customerInfos/BackupPhone.vue";
import SourceOfChannel from "@/components/crm/EjectWindows/SourceOfChannel";
import IntentionLevel from "@/components/crm/Select/Common/Customer/IntentionLevel";
import IntentionalPrice from "@/components/crm/Select/Common/Customer/IntentionalPrice";
import NextReturnVisitTime from "@/components/crm/Time/NextReturnVisitTime";
import IntentionalCar from "@/components/crm/EjectWindows/IntentionalCar";
import IntentionalColor from "@/components/crm/Select/Common/Customer/IntentionalColor";
import dt_RetentionTime from "@/components/crm/Time/dt_RetentionTime.vue";
import dtProVisitTime from "@/components/crm/Time/dt_ProVisitTime";
import Remarks from "@/components/crm/textbox/Complaint/Remarks";
import IntentionalModel from "@/components/crm/EjectWindows/IntentionalModel";
import Descripts from "@/components/crm/textbox/Public/Descripts";
import CustomerSource from "@/components/crm/Select/Common/Customer/CustomerSource";
import RetainCustomers from "@/components/crm/EjectWindows/RetainCustomers";
import RecommenderRelation from "@/components/crm/Select/Clue/RecommenderRelation";
import OldCarBrandNumber from "@/components/crm/textbox/Public/customerInfos/OldCarBrandNumber";
import introducerRelationship from "@/components/crm/Select/Clue/introducerRelationship";
import IntroducePeople from "@/components/crm/textbox/Public/customerInfos/IntroducePeople";
import IntroducerPhone from "@/components/crm/textbox/Public/customerInfos/IntroducerPhone";
import IntroducerSex from "@/components/crm/Select/Clue/IntroducerSex";
import ThisVisitContent from "@/components/crm/textbox/Clue/Revisit/ThisVisitContent.vue";
import ReservationToStore from "@/components/crm/Time/ReservationToStore.vue";
import ReachShopTime from "@/components/crm/Time/ReachShopTime.vue";
import LeaveShopTime from "@/components/crm/Time/LeaveShopTime.vue";
import ReachShopPeopleNumber from "@/components/crm/textbox/Clue/Revisit/ReachShopPeopleNumber.vue";
import TransferOrders from "@/components/crm/Template/TransferOrders.vue";
import ReasonForDefeat from "@/components/crm/EjectWindows/ReasonForDefeat.vue";
import CompetitiveCar from "@/components/crm/EjectWindows/CompetitiveCar.vue";
import CheckPeople from "@/components/crm/Select/Clue/CheckPeople.vue";
import swd_ReasonForLostControl from "@/components/crm/EjectWindows/swd_ReasonForLostControl.vue";
import Province from "@/components/crm/Select/Common/Province.vue";
import City from "@/components/crm/Select/Common/City.vue";
import OffsiteNetwork_pop from "@/components/crm/EjectWindows/OffsiteNetwork_pop.vue";
import { crmApis } from "@/api/graphQLApiList/crm";
import { requestGraphQL } from "@/api/commonRequest";

export default {
  name: "ClueDetail",
  components: {
    txt_CustomerName,
    PhoneNumber,
    Sex,
    BackupPhone,
    SourceOfChannel,
    IntentionLevel,
    IntentionalPrice,
    NextReturnVisitTime,
    IntentionalCar,
    IntentionalColor,
    dt_RetentionTime,
    dtProVisitTime,
    Remarks,
    IntentionalModel,
    Descripts,
    CustomerSource,
    RetainCustomers,
    RecommenderRelation,
    OldCarBrandNumber,
    introducerRelationship,
    IntroducePeople,
    IntroducerPhone,
    IntroducerSex,
    ThisVisitContent,
    ReservationToStore,
    ReachShopTime,
    LeaveShopTime,
    ReachShopPeopleNumber,
    TransferOrders,
    ReasonForDefeat,
    CompetitiveCar,
    CheckPeople,
    swd_ReasonForLostControl,
    Province,
    City,
    OffsiteNetwork_pop
  },
  data() {
    return {
      activeName: "first",
      toggleParam: false,
      XSserverOrder:"",
      tabledatas: {
        colnames: [
          { label: "意向车系", value: "carSeriesCn" },
          { label: "客户名称", value: "custName" },
          { label: "意向级别", value: "clueLevelCode" },
          { label: "回访描述", value: "reviewDesc" },
          { label: "回访时间", value: "factReviewDate" },
          { label: "处理状态", value: "touchStatusName" },
          { label: "回访类型", value: "reviewType" },
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
            "reviewType",
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
      form: {
        custName: {
          input: ""
        },
        contactTel: {
          input: ""
        },
        backupTel: {
          input: ""
        },
        clueDesc: {
          input: ""
        },
        remark: {
          input: ""
        },
        OldNumber: {
          input: ""
        },
        introducer: {
          input: ""
        },
        introduceTel: {
          input: ""
        },

        //初始化value
        Sexs: {
          value: ""
        },
        cantactWayName: {
          input: "",
          dialogVisible:false
        },
        clueLevelCode: {
          value: ""
        },
        intentPriceCode: {
          value: ""
        },
        nextCallbackDate: {
          value: ""
        },
        carSeriesCn: {
          input: "",
          dialogVisible:false
        },
        carConfigCn: {
          input: "",
          dialogVisible:false
        },
        innerColor: {
          value: ""
        },
        remainDataDate: {
          value: ""
        },
        ProVisitTime: {
          value: ""
        },
        custSource: {
          value: ""
        },
        retainRecommendName: {
          input: "",
          dialogVisible:false
        },
        recommendPersonRelation: {
          value: ""
        },
        introducerRelationship: {
          value: ""
        },
        introduceGender: {
          value: ""
        }
      }
    };
  },
  //初始化input

  mounted() {
    
    this.$nextTick(function() {
      this.XSserverOrder=this.$route.params.serverOrder
      this.initdata(this.XSserverOrder);
      this.query();
    });
  },
  methods: {
    initdata(xsdh) {
      debugger
      let that = this;
      if(xsdh==undefined)
      {
        return;
      }
      let queryObj = {
        // api配置
        apiConfig: crmApis.clueServerQueryFromDlr,
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
              "buyTypeCode",
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
              "carSeriesCn",
              "caseTime",
              "changeIntentDate",
              "city",
              "cleanFlag",
              "cleanQty",
              "clueBelongType",
              "clueCiytId",
              "clueCode",
              "clueDate",
              "clueDesc",
              "clueFrom",
              "clueId",
              "clueLevelCode",
              "clueSource",
              "clueStatus",
              "clueType",
              "color",
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
              "deliveryCode",
              "deliveryDate",
              "dlrCode",
              "dlrReviTimes",
              "driveDate",
              "driverTimeCode",
              "driverTimeName",
              "driverTypeCode",
              "driverTypeName",
              "existingBrand",
              "existingModels",
              "familyIncomeCode",
              "familyIncomeName",
              "firstArrivedDate",
              "firstCardTime",
              "firstDlrCode",
              "firstLevel",
              "firstNextCallbackDate",
              "gender",
              "genderName",
              "groupCode",
              "groupId",
              "hfPerson",
              "hobby",
              "icCardNo",
              "infoChanDCode",
              "infoChanDName",
              "infoChanMCode",
              "infoChanMName",
              "innerColor",
              "inteSeriesCode",
              "inteTypeCode",
              "inteTypeName",
              "intentPriceCode",
              "intentionalPrice",
              "introduceGender",
              "introduceTel",
              "introducer",
              "introducerRelationship",
              "invalidReason",
              "isChange",
              "isDelivery",
              "isDrive",
              "isEnable",
              "isExamed",
              "isFirstCallback",
              "isOrder",
              "isPcm",
              "isPlaceClue",
              "isPvClue",
              "isSuss",
              "isVip",
              "isarrived",
              "jobCode",
              "jobName",
              "lastUpdatedDate",
              "leadWay",
              "mediaCaName",
              "mediaCaPhone",
              "mediaContent",
              "mediaDealerId",
              "mediaHandletime",
              "mediaOrdertype",
              "memberCode",
              "modifier",
              "modifyName",
              "mycatOpTime",
              "nextCallbackDate",
              "nextDealEmpId",
              "nextDealEmpName",
              "nextDealUserId",
              "nextDealUserName",
              "oemCode",
              "oemId",
              "orderAmount",
              "orderCode",
              "orderDate",
              "orderStatusName",
              "orgName",
              "originalCustName",
              "originalPcValue",
              "originalPvCode",
              "outboundQty",
              "personEn",
              "phone",
              "phoneForAttr",
              "planReviewDate",
              "preArriveDlrTime",
              "purcCarBuget",
              "recommendFlag",
              "recommendPersonRelation",
              "regDlrName",
              "remainDataDate",
              "remark",
              "retainRecommendCardCode",
              "retainRecommendCode",
              "retainRecommendName",
              "reviewCode",
              "reviewDesc",
              "reviewPersonCode",
              "reviewResultName",
              "reviewStatus",
              "reviewStatusName",
              "reviewTimes",
              "reviewWay",
              "reviewWayName",
              "reviewtatus",
              "reviewtatusName",
              "sdpOrgId",
              "sdpUserId",
              "sendTime",
              "serverOrder",
              "serverSource",
              "sleepTime",
              "smartCode",
              "sourceMedia",
              "statusName",
              "systemCode",
              "tbCarExhiId",
              "terminalcode",
              "touchStatus",
              "touchStatusName",
              "tradeCode",
              "tradeName",
              "transFlag",
              "transferObject",
              "transferObjectName",
              "ucBuyNo",
              "updateControlId",
              "useBackupTel",
              "useCustName",
              "useGenderCode",
              "useGenderName",
              "usePhone",
              "vin",
              "vipTypeCode"
            ]
          }
        ],
        //条件/实体参数（变量），根据typeParam中的定义配置
        variables: {
          pageSize: 8,
          pageIndex: 1,
          //当前中台使用的名称有dataInfo、info，具体查看API文档
          dataInfo: {
            serverOrder: that.XSserverOrder,
            handleCode: "1",
            statusArray: ["10","20","21","30","31","40","50"]
          }
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
          for (let key in that.form) {
            if ("input" in that.form[key]) {
              that.form[key].input = results[key];
            } else {
              that.form[key].value = results[key];
            }
            if (that.$refs[key] && that.$refs[key].getData) {
              that.$refs[key].getData();
            } else if (that.$refs[key] && that.$refs[key].getNewData) {
              that.$refs[key].getNewData();
            }
          }
          that.form.cantactWayName.input=results["cantactWayName"];
          if(results["infoChanMName"]!=""){
            that.form.cantactWayName.input+=">"+results["infoChanMName"]
          }
          if(results["infoChanDName"]!=""){
            that.form.cantactWayName.input+=">"+results["infoChanDName"]
          }
          that.$refs.SourceChannel.getData()
        }
      });
    },
    query() {
      let that = this;
      that.tabledatas.queryObj.params.serverOrder = that.XSserverOrder;

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
          that.tabledatas.tableData =
            response.data[queryObj.apiConfig.ServiceCode].rows;
          that.tabledatas.pageindex =
            response.data[queryObj.apiConfig.ServiceCode].pageindex;
          that.tabledatas.total =
            response.data[queryObj.apiConfig.ServiceCode].records;
        }
      });
    },
    changeToggleParam() {
      this.toggleParam = !this.toggleParam;
    },
    showMainInfo: function() {
      this.mainInfo = true;
      this.secondInfo = false;
    },

    handleClick(tab, event) {
      console.log(tab, event);
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
