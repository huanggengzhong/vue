<!--
* 描述: 线索回访
* 创建人: hejin
* 创建时间: 2019-07-26
* 记录：
*  20190726 新建 hejin
-->
<template>
  <div class="app-container app-container-table filter-params-crm filter-params-crm-scroll">
    <div class="filter-container filter-button">
      <el-button type="primary" size="small" @click="save">保存</el-button>
      <el-button size="small" @click="query">问卷</el-button>
      <el-button size="small">短信发送</el-button>
    </div>
    <div class="filter-container filter-title">客户信息</div>
    <div class="filter-container filter-params-crm filter-params-sub">
      <el-form label-position="right">
        <!--第一行-->
        <el-row>
          <!--客户名称-->
          <el-col :span="6">
            <txt_CustomerName :txt_CustomerName="khName" ref="txt_CustomerName"></txt_CustomerName>
          </el-col>
          <el-col :span="6">
            <!--性别-->
            <Sex :Sex="khSex" ref="Sex"></Sex>
          </el-col>
          <el-col :span="6">
            <!--电话-->
            <PhoneNumber :PhoneNumber="khPhone" ref="PhoneNumber"></PhoneNumber>
          </el-col>
          <el-col :span="6">
            <!--备用电话-->
            <BackupPhone :BackupPhone="khBPhone" ref="BackupPhone"></BackupPhone>
          </el-col>
        </el-row>
      </el-form>
    </div>
    <!--第二行-->
    <div class="filter-container filter-title">商机信息</div>
    <div class="filter-container filter-params-crm filter-params-sub">
      <el-form label-position="right">
        <el-row>
          <!--商机信息模块tp_BusinessInfo-->
          <el-tabs v-model="activeName" class="tabs" type="card" @tab-click="handleClick">
            <el-tab-pane label="商机主要信息" name="first">
              <el-col :span="24">
                <el-row>
                  <!--主要信息的模板-->
                  <el-col :span="6">
                    <SourceOfChannel
                      :SourceOfChannel="zySource"
                      ref="SourceOfChannel"
                      @CatData="getarr"
                    ></SourceOfChannel>
                  </el-col>
                  <el-col :span="6">
                    <IntentionLevel
                      :IntentionLevel="zyLvl"
                      ref="IntentionLevel"
                      @changeLevel="visitTime"
                    ></IntentionLevel>
                  </el-col>
                  <el-col :span="6">
                    <IntentionalPrice :IntentionalPrice="zyPrice" ref="IntentionalPrice"></IntentionalPrice>
                  </el-col>
                  <el-col :span="6">
                    <NextReturnVisitTime
                      :NextReturnVisitTime="zyNextTime"
                      ref="zyNextReturnVisitTime"
                    ></NextReturnVisitTime>
                  </el-col>
                </el-row>
                <el-row>
                  <el-col :span="6">
                    <IntentionalCar
                      :IntentionalCar="zySeries"
                      ref="IntentionalCar"
                      @CatData="getarr2"
                    ></IntentionalCar>
                  </el-col>
                  <el-col :span="6">
                    <IntentionalModel
                      :IntentionalModel="zyModel"
                      ref="IntentionalModel"
                      @CatData="getarr3"
                    ></IntentionalModel>
                  </el-col>
                  <el-col :span="6">
                    <IntentionalColor :IntentionalColor="zyColor" ref="IntentionalColor"></IntentionalColor>
                  </el-col>
                  <el-col :span="6">
                    <dt_RetentionTime :dt_RetentionTime="zyRetention" ref="dt_RetentionTime"></dt_RetentionTime>
                  </el-col>
                </el-row>
                <el-row>
                  <el-col :span="6">
                    <Descripts :Descripts="zyDesc" ref="Descripts"></Descripts>
                  </el-col>
                  </el-row>
                   <el-row>
                  <el-col :span="6">
                    <Remarks :Remarks="zyRemark" ref="Remarks"></Remarks>
                  </el-col>
                </el-row>
              </el-col>
            </el-tab-pane>
            <el-tab-pane label="商机次要信息" name="second">
              <!--次要信息的模板-->
              <el-col :span="24">
                <el-row>
                  <el-col :span="6">
                    <CustomerSource :CustomerSource="cySource" ref="CustomerSource"></CustomerSource>
                  </el-col>
                  <el-col :span="6">
                    <RetainCustomers
                      :RetainCustomers="cyRetain"
                      ref="RetainCustomers"
                      @CatData="getarr9"
                    ></RetainCustomers>
                  </el-col>
                  <el-col :span="6">
                    <RecommenderRelation
                      :RecommenderRelation="cyRecommen"
                      ref="RecommenderRelation"
                    ></RecommenderRelation>
                  </el-col>
                  <el-col :span="6">
                    <OldCarBrandNumber :OldCarBrandNumber="cyOld" ref="OldCarBrandNumber"></OldCarBrandNumber>
                  </el-col>
                </el-row>
                <el-row>
                  <el-col :span="6">
                    <introducerRelationship
                      :introducerRelationship="cyRelation"
                      ref="introducerRelationship"
                    ></introducerRelationship>
                  </el-col>
                  <el-col :span="6">
                    <IntroducePeople :IntroducePeople="cyPeople" ref="IntroducePeople"></IntroducePeople>
                  </el-col>
                  <el-col :span="6">
                    <IntroducerPhone :IntroducerPhone="cyPhone" ref="IntroducerPhone"></IntroducerPhone>
                  </el-col>
                  <el-col :span="6">
                    <IntroducerSex :IntroducerSex="cySex" ref="IntroducerSex"></IntroducerSex>
                  </el-col>
                </el-row>
              </el-col>
            </el-tab-pane>
          </el-tabs>
        </el-row>
        <p></p>
        <el-row>
          <el-col :span="24">
            <!--处理状态-->
            <el-row>
              <el-col :span="6">
                <ProcessingStatus
                  :ProcessingStatus="clzt"
                  ref="ProcessingStatus"
                  @changeCode="change1"
                ></ProcessingStatus>
              </el-col>
              <el-col :span="6">
                <dt_ProVisitTime :dt_ProVisitTime="zyProVisit" ref="dt_ProVisitTime"></dt_ProVisitTime>
              </el-col>
            </el-row>

            <el-row>
              <!--下次回访-->
              <div v-if="nextVisitflag">
                <el-form label-position="right">
                  <el-row>
                    <el-col :span="6">
                      <ThisVisitContent ref="ThisVisitContent1" :ThisVisitContent="1"></ThisVisitContent>
                    </el-col>

                    <el-col :span="6">
                      <NextReturnVisitTime ref="NextReturnVisitTime" :NextReturnVisitTime="whxcsj"></NextReturnVisitTime>
                    </el-col>
                  </el-row>
                </el-form>
              </div>
            </el-row>

            <el-row>
              <div v-if="revToStoreflag">
                <!--预约到店-->
                <el-form label-position="right">
                  <el-row>
                    <el-col :span="6">
                      <ThisVisitContent ref="ThisVisitContent2" :ThisVisitContent="1"></ThisVisitContent>
                    </el-col>

                    <el-col :span="6">
                      <ReservationToStore ref="ReservationToStore" :ReservationToStore="yyddsj"></ReservationToStore>
                    </el-col>
                  </el-row>
                </el-form>
              </div>
            </el-row>

            <el-row>
              <div v-if="custToStoreflag">
                <!--客户到店-->
                <el-form label-position="right">
                  <el-row>
                    <el-col :span="6">
                      <ThisVisitContent ref="ThisVisitContent3" :ThisVisitContent="1"></ThisVisitContent>
                    </el-col>

                    <el-col :span="6">
                      <ReachShopTime ref="ReachShopTime" :ReachShopTime="1"></ReachShopTime>
                    </el-col>
                    <el-col :span="6">
                      <LeaveShopTime ref="LeaveShopTime" :LeaveShopTime="1"></LeaveShopTime>
                    </el-col>
                    <el-col :span="6">
                      <ReachShopPeopleNumber ref="ReachShopPeopleNumber" :ReachShopPeopleNumber="1"></ReachShopPeopleNumber>
                    </el-col>
                  </el-row>
                  <el-row>
                    <!--是否转订单模板-->
                    <el-col :span="6">
                      <el-form-item label="是否转订单">
                        <el-select v-model="value" placeholder="请选择" @change="change()">
                          <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                          ></el-option>
                        </el-select>
                      </el-form-item>
                    </el-col>
                  </el-row>
                  <div v-if="show">
                    <el-row>
                      <el-col :span="6">
                        <swdSalesConsultant
                          :swd_SalesConsultant="ddxsgw"
                          ref="swdSalesConsultant"
                          @CatData="getarr8"
                        ></swdSalesConsultant>
                      </el-col>
                      <el-col :span="6">
                        <BuyPattern :BuyPattern="BuyPattern" ref="BuyPattern"></BuyPattern>
                      </el-col>
                      <el-col :span="6">
                        <MessageSources :MessageSources="MessageSources" ref="MessageSources"></MessageSources>
                      </el-col>
                    </el-row>
                    <el-row>
                      <el-col :span="6">
                        <PreVisitDate :PreVisitDate="PreVisitDate" ref="PreVisitDate"></PreVisitDate>
                      </el-col>
                      <el-col :span="6">
                        <LatestPlayProcess :LatestPlayProcess="1" ref="LatestPlayProcess"></LatestPlayProcess>
                      </el-col>
                    </el-row>
                  </div>
                </el-form>
              </div>
            </el-row>

            <el-row>
              <div v-if="loss">
                <!--战败-->
                <el-form label-position="right">
                  <el-row>
                    <el-col :span="6">
                      <ReasonForDefeat
                      class="crm-label-required"
                        ref="ReasonForDefeat"
                        :ReasonForDefeat="whzbyy"
                        @CatData="getarr4"
                      ></ReasonForDefeat>
                    </el-col>
                    <el-col :span="6">
                      <CompetitiveCar
                      class="crm-label-required"
                        ref="CompetitiveCar"
                        :CompetitiveCar="whjzcx"
                        @CatData="getarr5"
                      ></CompetitiveCar>
                    </el-col>
                    <el-col :span="6">
                      <CheckPeople ref="CheckPeople" :CheckPeople="zbshr"></CheckPeople>
                    </el-col>
                  </el-row>
                  <el-row>
                    <el-col :span="6">
                      <ThisVisitContent ref="ThisVisitContent4" :ThisVisitContent="1"></ThisVisitContent>
                    </el-col>
                  </el-row>
                </el-form>
              </div>
            </el-row>

            <el-row>
              <div v-if="Outcontrol">
                <!--失控-->
                <el-form label-position="right">
                  <el-row>
                    <el-col :span="6">
                      <swd_ReasonForLostControl
                        ref="swd_ReasonForLostControl"
                        :swd_ReasonForLostControl="whskyy"
                        @CatData="getarr6"
                      ></swd_ReasonForLostControl>
                    </el-col>
                  </el-row>
                  <el-row>
                    <el-col :span="6">
                      <ThisVisitContent ref="ThisVisitContent5" :ThisVisitContent="1"></ThisVisitContent>
                    </el-col>
                  </el-row>
                </el-form>
              </div>
            </el-row>

            <el-row>
              <div v-if="OffsiteClue">
                <!--异地线索-->
                <el-form label-position="right">
                  <el-row>
                    <el-col :span="6">
                      <Province ref="Province" :Province="whProvince" @changeCode="changesf"></Province>
                    </el-col>
                    <el-col :span="6">
                      <City ref="City" :City="whCity"></City>
                    </el-col>
                    <el-col :span="6">
                      <OffsiteNetwork_pop
                        ref="OffsiteNetwork_pop"
                        :OffsiteNetwork_pop="whYDLR"
                        @CatData="getarr7"
                      ></OffsiteNetwork_pop>
                    </el-col>
                  </el-row>
                  <el-row>
                    <el-col :span="6">
                      <ThisVisitContent ref="ThisVisitContent6" :ThisVisitContent="1"></ThisVisitContent>
                    </el-col>
                  </el-row>
                </el-form>
              </div>
            </el-row>

            <el-row>
              <div v-if="invalidClue">
                <!--无效线索-->
                <el-form label-position="right">
                  <el-row>
                    <el-col :span="6">
                      <ThisVisitContent ref="ThisVisitContent7" :ThisVisitContent="1"></ThisVisitContent>
                    </el-col>
                  </el-row>
                </el-form>
              </div>
            </el-row>
          </el-col>
        </el-row>
      </el-form>
    </div>
    <el-tabs v-model="activeName2" class="tabs" type="card" @tab-click="handleClick2">
      <el-tab-pane label="接触记录" name="first">
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
      </el-tab-pane>
      <el-tab-pane label="全网行为" name="second">
        <Table :tabledatas="tabledatasJL" ref="tableJL" />
      </el-tab-pane>
    </el-tabs>
    
  </div>
</template>
    
  
<script>
import txt_CustomerName from "@/components/crm/textbox/Public/customerInfos/txt_CustomerName"; //客户姓名
import PhoneNumber from "@/components/crm/textbox/Public/customerInfos/PhoneNumber"; //电话
import Sex from "@/components/crm/Select/Common/Customer/Sex";
import BackupPhone from "@/components/crm/textbox/Public/customerInfos/BackupPhone";

import SourceOfChannel from "@/components/crm/EjectWindows/SourceOfChannel";
import IntentionLevel from "@/components/crm/Select/Common/Customer/IntentionLevel";
import IntentionalPrice from "@/components/crm/Select/Common/Customer/IntentionalPrice";
import NextReturnVisitTime from "@/components/crm/Time/NextReturnVisitTime";
import IntentionalCar from "@/components/crm/EjectWindows/IntentionalCar";
import IntentionalColor from "@/components/crm/Select/Common/Customer/IntentionalColor";
import dt_RetentionTime from "@/components/crm/Time/dt_RetentionTime";
import dt_ProVisitTime from "@/components/crm/Time/dt_ProVisitTime";
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

import ThisVisitContent from "@/components/crm/textbox/Clue/Revisit/ThisVisitContent";
import ReservationToStore from "@/components/crm/Time/ReservationToStore";
import ReachShopTime from "@/components/crm/Time/ReachShopTime";
import LeaveShopTime from "@/components/crm/Time/LeaveShopTime";
import ReachShopPeopleNumber from "@/components/crm/textbox/Clue/Revisit/ReachShopPeopleNumber";
import TransferOrders from "@/components/crm/Template/TransferOrders";
import ReasonForDefeat from "@/components/crm/EjectWindows/ReasonForDefeat";
import CompetitiveCar from "@/components/crm/EjectWindows/CompetitiveCar";
import CheckPeople from "@/components/crm/Select/Clue/CheckPeople";
import swd_ReasonForLostControl from "@/components/crm/EjectWindows/swd_ReasonForLostControl";
import Province from "@/components/crm/Select/Common/Province";
import City from "@/components/crm/Select/Common/City";
import OffsiteNetwork_pop from "@/components/crm/EjectWindows/OffsiteNetwork_pop";

import swdSalesConsultant from "@/components/crm/EjectWindows/swd_SalesConsultant";
import BuyPattern from "@/components/crm/Select/Common/BuyPattern";
import MessageSources from "@/components/crm/Select/MessageSources";
import PreVisitDate from "@/components/crm/Time/PreVisitDate";
import LatestPlayProcess from "@/components/crm/textbox/Public/LatestPlayProcess";
import ProcessingStatus from "@/components/crm/Select/Clue/ProcessingStatus";

import { crmApis } from "@/api/graphQLApiList/crm";
import { requestGraphQL } from "@/api/commonRequest";
import Table from "@/components/crm/table/Table";

export default {
  name: "crmThreadReturn",
  components: {
    Table,
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
    dt_ProVisitTime,
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
    OffsiteNetwork_pop,
    swdSalesConsultant,
    BuyPattern,
    MessageSources,
    PreVisitDate,
    LatestPlayProcess,
    ProcessingStatus
  },
  data() {
    return {
      activeName: "first",
      activeName2: "first",
      custId: "",
      updateControlId: "",
      recommendPersonInfoId: "",
      serverOrder: "",
      cantactWayCode: "",
      infoChanMCode: "",
      infoChanDCode: "",
      carBrandCode: "",
      inteSeriesId: "",
      inteSeriesCode: "",
      inteTypeId: "",
      inteTypeCode: "",
      carConfigId: "",
      retainRecommendCode: "",
      failReason: "",
      lostFailerDetail: "",
      compCarBrandCode: "",
      compCarSeriesCode: "",
      yidiDlrCode: "",
      caEmpId: "",
      MessageSources: {
        value: ""
      },
      PreVisitDate: {
        value: ""
      },
      whxcsj: {
        value: ""
      },
      BuyPattern: {
        value: ""
      },
      yyddsj: {
        value: ""
      },
      clzt: {
        value: "15"
      },
      zbshr: {
        value: ""
      },
      ddxsgw: {
        input: ""
      },
      whzbyy: {
        input: ""
      },
      whjzcx: {
        input: ""
      },
      whskyy: {
        input: ""
      },
      whProvince: {
        value: ""
      },
      whCity: {
        value: "",
        pcode: ""
      },
      whYDLR: {
        input: ""
      },
      khName: {
        input: ""
      },
      khSex: {
        value: ""
      },
      khPhone: {
        input: ""
      },
      khBPhone: {
        input: ""
      },
      zySource: {
        input: ""
      },
      zyLvl: {
        value: ""
      },
      zyPrice: {
        value: ""
      },
      zyNextTime: {
        value: "",
        isdisabled: true
      },
      zySeries: {
        input: ""
      },
      zyModel: {
        input: "",
        pcode: ""
      },
      zyColor: {
        value: "",
        pcode: ""
      },
      zyRetention: {
        value: "",
        isdisabled: true
      },
      zyProVisit: {
        value: "",
        isdisabled: true
      },
      zyDesc: {
        input: ""
      },
      zyRemark: {
        input: ""
      },
      khBPhone: {
        input: ""
      },
      cySource: {
        value: ""
      },
      cyRetain: {
        input: ""
      },
      cyRecommen: {
        value: ""
      },
      cyOld: {
        input: ""
      },
      cyRelation: {
        value: ""
      },
      cyPeople: {
        input: ""
      },
      cyPhone: {
        input: ""
      },
      cySex: {
        value: ""
      },
      options: [
        {
          value: "1",
          label: "是"
        },
        {
          value: "0",
          label: "否"
        }
      ],
      value: "0",
      show: false,
      nextVisitflag: true,
      revToStoreflag: false,
      custToStoreflag: false,
      loss: false,
      Outcontrol: false,
      OffsiteClue: false,
      invalidClue: false,
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
      tabledatasJL: {
        // 操作列
        ismuti: false,
        isoperat: false,
        havedistrbute: false,
        haveEdit: false,
        haveDel: false,
        colnames: [
          { label: "更新时间", value: "createdDate" },
          { label: "更新方式", value: "dealType" },
          { label: "意向车系", value: "carSeriesCn" },
          { label: "线索级别", value: "clueLevelCode" },
          { label: "回访人员", value: "hfPerson" },
          { label: "全网行为描述", value: "actionDesc" },
          { label: "全网行为", value: "actionName" }
        ],
        queryObj: {
          // .后面是服务编码，.前面固定写死
          apiConfig: crmApis.clueServerQueryWholeNetAction,
          apiQueryRow: [
            "createdDate",
            "dealType",
            "carSeriesCn",
            "clueLevelCode",
            "hfPerson",
            "actionDesc",
            "actionName"
          ],
          params: {
            contactTel: "1"
          }
        }
      }
    };
  },
  mounted: function() {
    this.$nextTick(function() {
      this.initData(this.$route.params.serverOrder);
    });
  },
  methods: {
    getarr(val) {
      let redata = {};
      redata = val;
      this.cantactWayCode = redata[0].cantactWayCode;
      this.infoChanMCode = redata[0].infoChanMCode;
      this.infoChanDCode = redata[0].infoChanDCode;
    },
    getarr2(val) {
      let redata = {};
      redata = val;
      this.zyModel.input = "";
      this.zyModel.pcode = redata[0].carSeriesId;
      this.carBrandCode = redata[0].carBrandCode;
      this.inteSeriesId = redata[0].carSeriesId;
      this.inteSeriesCode = redata[0].carSeriesCode;
      this.zyColor.pcode = redata[0].carSeriesId;
      if (this.$refs.IntentionalModel != undefined) {
        this.$refs.IntentionalModel.getData();
      }
      if (this.$refs.IntentionalColor != undefined) {
        this.$refs.IntentionalColor.getData();
      }
    },
    getarr3(val) {
      let redata = {};
      redata = val;
      this.inteTypeId = redata[0].smallCarTypeId;
      this.inteTypeCode = redata[0].smallCarTypeCode;
      this.carConfigId = redata[0].carConfigId;
    },
    getarr4(val) {
      let redata = {};
      redata = val;
      this.failReason = redata[0].failReasonName;
      this.lostFailerDetail = redata[0].failReasonName;
    },
    getarr5(val) {
      let redata = {};
      redata = val;
      this.compCarBrandCode = redata[0].compBrandCode;
      this.compCarSeriesCode = redata[0].compCarseriesCode;
    },
    getarr6(val) {
      let redata = {};
      redata = val;
      this.failReason = redata[0].failReasonName;
      this.lostFailerDetail = redata[0].failReasonName;
    },
    getarr7(val) {
      let redata = {};
      redata = val;
      this.yidiDlrCode = redata[0].dlrCode;
    },
    getarr8(val) {
      let redata = {};
      redata = val;
      this.caEmpId = redata[0].userId;
    },
    getarr9(val) {
      let redata = {};
      redata = val;
    },
    getDateStr: function(AddDayCount) {
      let dd = new Date();
      dd.setDate(dd.getDate() + AddDayCount);
      let y = dd.getFullYear();
      let m = dd.getMonth() + 1;
      let d = dd.getDate() < 10 ? "0" + dd.getDate() : dd.getDate();
      let hh = dd.getHours() < 10 ? "0" + dd.getHours() : dd.getHours();
      let mm = dd.getMinutes() < 10 ? "0" + dd.getMinutes() : dd.getMinutes();
      let ss = dd.getSeconds() < 10 ? "0" + dd.getSeconds() : dd.getSeconds();
      return (
        y +
        "-" +
        (m < 10 ? "0" + m : m) +
        "-" +
        d +
        " " +
        hh +
        ":" +
        mm +
        ":" +
        ss
      );
    },
    visitTime(level) {
      let that = this;
      switch (level) {
        case "H":
          that.whxcsj.value = that.getDateStr(3);
          that.yyddsj.value = that.getDateStr(3);
          break;
        case "A":
          that.whxcsj.value = that.getDateStr(7);
          that.yyddsj.value = that.getDateStr(7);
          break;
        case "B":
          that.whxcsj.value = that.getDateStr(15);
          that.yyddsj.value = that.getDateStr(15);
          break;
        case "C":
          that.whxcsj.value = that.getDateStr(30);
          that.yyddsj.value = that.getDateStr(30);
          break;
        case "E":
          that.whxcsj.value = that.getDateStr(45);
          that.yyddsj.value = that.getDateStr(45);
          break;
      }
      if (that.$refs.NextReturnVisitTime != undefined) {
        that.$refs.NextReturnVisitTime.getData();
      }
      if (that.$refs.ReservationToStore != undefined) {
        that.$refs.ReservationToStore.getData();
      }
    },
    changesf(val) {
      let that = this;
      that.whCity.pcode = val;
      if (that.$refs.City != undefined) {
        that.$refs.City.getData();
      }
    },
    //加载数据
    initData(xsdh) {
      let that = this;
      if (xsdh == undefined) {
        return;
      }
      that.serverOrder = xsdh;
      let queryObj = {
        // api配置
        apiConfig: crmApis.clueServerQueryFromDlr,
        // 需要调用的API服务配置
        apiServices: [
          {
            //表格中台返回网格的字段
            apiQueryRow: [
              "status",
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
              "dlrShortName",
              "driveDate",
              "driverTimeCode",
              "driverTimeName",
              "driverTypeCode",
              "driverTypeName",
              "existingBrand",
              "existingModels",
              "factReviewDate",
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
              "inteSeriesId",
              "inteTypeCode",
              "inteTypeId",
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
              "processingAction",
              "purcCarBuget",
              "recommendFlag",
              "recommendPersonInfoId",
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
              "reviewType",
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
          pageSize: 10,
          pageIndex: 1,
          //当前中台使用的名称有dataInfo、info，具体查看API文档
          dataInfo: {
            serverOrder: xsdh,
            handleCode: "1",
            statusArray: ["20", "21", "30", "31"]
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
          that.updateControlId = results["updateControlId"];
          that.recommendPersonInfoId = results["recommendPersonInfoId"];
          //客户信息
          that.custId = results["custId"];
          that.khName.input = results["custName"];
          that.$refs.txt_CustomerName.getData();
          that.khSex.value = results["gender"];
          that.$refs.Sex.getData();
          that.khPhone.input = results["contactTel"];
          that.$refs.PhoneNumber.getData();
          that.khBPhone.input = results["backupTel"];
          that.$refs.BackupPhone.getData();
          //主要信息
          that.zySource.input = results["cantactWayName"];
          if (results["infoChanMName"] != "") {
            that.zySource.input += ">" + results["infoChanMName"];
          }
          if (results["infoChanDName"] != "") {
            that.zySource.input += ">" + results["infoChanDName"];
          }
          that.cantactWayCode = results["cantactWayCode"];
          that.infoChanMCode = results["infoChanMCode"];
          that.infoChanDCode = results["infoChanDCode"];
          that.$refs.SourceOfChannel.getData();
          that.zyLvl.value = results["clueLevelCode"];
          that.$refs.IntentionLevel.getData();
          that.visitTime(results["clueLevelCode"]);
          that.zyPrice.value = results["intentPriceCode"];
          that.$refs.IntentionalPrice.getData();
          that.zyNextTime.value = results["nextCallbackDate"];
          that.$refs.zyNextReturnVisitTime.getData();
          that.zyProVisit.value = results["planReviewDate"];
          that.$refs.dt_ProVisitTime.getData();
          that.zySeries.input = results["carSeriesCn"];
          that.carBrandCode = results["carBrandCode"];
          that.inteSeriesId = results["inteSeriesId"];
          that.inteSeriesCode = results["inteSeriesCode"];
          that.inteTypeId = results["inteTypeId"];
          that.inteTypeCode = results["inteTypeCode"];
          that.carConfigId = results["carConfigId"];
          that.$refs.IntentionalCar.getData();
          that.zyModel.input = results["carConfigCn"];
          that.$refs.IntentionalModel.getData();
          that.zyColor.value = results["color"];
          that.$refs.IntentionalColor.getData();
          that.zyRetention.value = results["remainDataDate"];
          that.$refs.dt_RetentionTime.getData();

          that.zyDesc.input = results["clueDesc"];
          that.$refs.Descripts.getData();
          that.zyRemark.input = results["remark"];
          that.$refs.Remarks.getData();

          //次要信息
          that.cySource.value = results["custSource"];
          that.$refs.CustomerSource.getData();
          that.cyRetain.input = results["retainRecommendName"];
          that.retainRecommendCode = results["retainRecommendCode"];
          that.$refs.RetainCustomers.getData();
          that.cyRecommen.value = results["recommendPersonRelation"];
          that.$refs.RecommenderRelation.getData();
          that.cyOld.input = "";
          that.$refs.OldCarBrandNumber.getData();
          that.cyRelation.value = results["introducerRelationship"];
          that.$refs.introducerRelationship.getData();
          that.cyPeople.input = results["introducer"];
          that.$refs.IntroducePeople.getData();
          that.cyPhone.input = results["introduceTel"];
          that.$refs.IntroducerPhone.getData();
          that.cySex.value = results["introduceGender"];
          that.$refs.IntroducerSex.getData();
          this.query();
        }
      });
    },
    query() {
      let that = this;
      that.tabledatas.queryObj.params.serverOrder = that.serverOrder;

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
    save: function() {
      let that = this;
      //校验
      if (that.$refs.txt_CustomerName.input == ""||that.$refs.txt_CustomerName.input==undefined) {
        this.$message({
          message: "客户名称不能为空",
          type: "warning",
          duration: 1000
        });
        return;
      }
      if (that.$refs.PhoneNumber.input == "") {
        this.$message({
          message: "电话不能为空",
          type: "warning",
          duration: 1000
        });
        return;
      }
      if (
        that.cantactWayCode == "" ||
        that.infoChanMCode == "" ||
        that.infoChanDCode == ""
      ) {
        this.$message({
          message: "请选择渠道来源",
          type: "warning",
          duration: 1000
        });
        return;
      }
      if (that.$refs.IntentionLevel.value == "") {
        this.$message({
          message: "请选择意向级别",
          type: "warning",
          duration: 1000
        });
        return;
      }
      if (that.inteSeriesCode == "" || that.inteSeriesId == "") {
        this.$message({
          message: "请选择意向车系",
          type: "warning",
          duration: 1000
        });
        return;
      }
      if (that.$refs.ProcessingStatus.value == "") {
        this.$message({
          message: "请选择处理状态",
          type: "warning",
          duration: 1000
        });
        return;
      }
      //赋值
      var saveObj = {};
      //客户信息
      that.$set(saveObj, "custId", that.custId);
      that.$set(saveObj, "custName", that.$refs.txt_CustomerName.input);
      that.$set(saveObj, "contactTel", that.$refs.PhoneNumber.input);
      that.$set(saveObj, "gender", that.$refs.Sex.value);
      that.$set(saveObj, "backupTel", that.$refs.BackupPhone.input);
      //线索信息
      that.$set(saveObj, "serverOrder", that.serverOrder);
      that.$set(saveObj, "cantactWayCode", that.cantactWayCode);
      that.$set(saveObj, "infoChanMCode", that.infoChanMCode);
      that.$set(saveObj, "infoChanDCode", that.infoChanDCode);
      that.$set(saveObj, "clueLevelCode", that.$refs.IntentionLevel.value);

      that.$set(saveObj, "intentPriceCode", that.$refs.IntentionalPrice.value); //
      that.$set(saveObj, "inteSeriesId", that.inteSeriesId);
      that.$set(saveObj, "inteSeriesCode", that.inteSeriesCode);
      that.$set(saveObj, "inteTypeId", that.inteTypeId);
      that.$set(saveObj, "inteTypeCode", that.inteTypeCode);
      that.$set(saveObj, "carConfigId", that.carConfigId);
      that.$set(saveObj, "planReviewDate", that.$refs.dt_ProVisitTime.value); //预定回访时间
      that.$set(saveObj, "color", that.$refs.IntentionalColor.value);
      that.$set(saveObj, "remainDataDate", that.$refs.dt_RetentionTime.value); //留资时间
      that.$set(saveObj, "clueDesc", that.$refs.Descripts.input);
      that.$set(saveObj, "remark", that.$refs.Remarks.input);
      that.$set(saveObj, "touchStatus", that.$refs.ProcessingStatus.value);

      that.$set(saveObj, "custSource", that.$refs.CustomerSource.value);
      that.$set(saveObj, "originalCustName", that.$refs.RetainCustomers.input);
      that.$set(
        saveObj,
        "recommendPersonRelation",
        that.$refs.RecommenderRelation.value
      );
      that.$set(saveObj, "carLicense", that.$refs.OldCarBrandNumber.input);
      that.$set(
        saveObj,
        "introducerRelationship",
        that.$refs.introducerRelationship.value
      );
      that.$set(saveObj, "introducer", that.$refs.IntroducePeople.input);
      that.$set(saveObj, "introduceTel", that.$refs.IntroducerPhone.input);
      that.$set(saveObj, "introduceGender", that.$refs.IntroducerSex.value);
      that.$set(saveObj, "recommendPersonInfoId", that.recommendPersonInfoId);

      //下次回访时间  战败 失控 到店 无效不需要
      var val = that.$refs.ProcessingStatus.value;
      if (val == 15) {
        //下次回访
         if (that.$refs.ThisVisitContent1.input == ""||that.$refs.ThisVisitContent1.input==undefined) {
           that.$crmcf.showMessages(that,'error','请填写本次回访内容')
          return;
        }
        if (that.$refs.NextReturnVisitTime.value == "") {
           that.$crmcf.showMessages(that,'error','请选择下次回访时间')
          return;
        }
        if (that.$refs.NextReturnVisitTime.value != "") {
          var timeStr = that.$refs.NextReturnVisitTime.value;
          var time1 = new Date(timeStr).getTime();
          let dd = new Date();
          dd.setDate(dd.getDate() + 1);
          var time2 = dd.getTime();
          if (time1 < time2) {
            that.$crmcf.showMessages(that,'error','下次回访时间减去当前时间不能小于24小时')
            return;
          }
        }
        that.$set(
          saveObj,
          "nextCallbackDate",
          that.$refs.NextReturnVisitTime.value
        );
        that.$set(saveObj, "reviewDesc", that.$refs.ThisVisitContent1.input);
      } else if (val == 24) {
        //预约到店

        if (that.$refs.ThisVisitContent2.input == "") {
           that.$crmcf.showMessages(that,'error','请填写本次回访内容')
          return;
        }
        if (that.$refs.ReservationToStore.value == "") {
          that.$crmcf.showMessages(that,'error','请选择预约时间')
          return;
        }
        that.$set(
          saveObj,
          "nextCallbackDate",
          that.$refs.ReservationToStore.value
        );
        that.$set(saveObj, "reviewDesc", that.$refs.ThisVisitContent2.input);
      } else if (val == 29) {
        //客户到店
        if (that.$refs.ReachShopTime.value == "") {
          that.$crmcf.showMessages(that,'error','请填写到店时间')
          return;
        }
        if (that.$refs.LeaveShopTime.value == "") {
          that.$crmcf.showMessages(that,'error','请填写离店时间')
          return;
        }

        that.$set(saveObj, "arrivedDate", that.$refs.ReachShopTime.value);
        that.$set(saveObj, "leaveDate", that.$refs.LeaveShopTime.value);
        that.$set(saveObj, "isOrder", that.value);
        if (that.value == "1") {
          if (that.caEmpId == "") {
            that.$crmcf.showMessages(that,'error','请选择销售顾问')
            return;
          }
          if (that.$refs.BuyPattern.value == "") {
            that.$crmcf.showMessages(that,'error','请选择购买形态')
            return;
          }
          if (that.$refs.PreVisitDate.value == "") {
            that.$crmcf.showMessages(that,'error','请选择预访日期')
            return;
          }
          that.$set(saveObj, "caEmpId", that.caEmpId);
          that.$set(saveObj, "buyingFormSite", that.$refs.BuyPattern.value);
          that.$set(saveObj, "intentVisitDate", that.$refs.PreVisitDate.value);
          that.$set(saveObj, "infoSource", that.$refs.MessageSources.value);
          that.$set(
            saveObj,
            "activityProcess",
            that.$refs.LatestPlayProcess.input
          );
        }
        that.$set(saveObj, "reviewDesc", that.$refs.ThisVisitContent3.input);
      } else if (val == 27) {
        //战败失控
        if (that.$refs.ThisVisitContent4.input == "") {
          that.$crmcf.showMessages(that,'error','请填写本次回访内容')
          return;
        }
        if (that.failReason == "") {
          that.$crmcf.showMessages(that,'error','请选择战败原因')
          return;
        }
        if (that.compCarBrandCode == "" || that.compCarSeriesCode == "") {
          that.$crmcf.showMessages(that,'error','请选择竞争品牌和竞争车系')
          return;
        }
        if (that.$refs.CheckPeople.value == "") {
          that.$crmcf.showMessages(that,'error','请选择审核人')
          return;
        }
        that.$set(saveObj, "failReason", that.failReason);
        that.$set(saveObj, "lostFailerDetail", that.lostFailerDetail);
        that.$set(saveObj, "compCarBrandCode", that.compCarBrandCode);
        that.$set(saveObj, "compCarSeriesCode", that.compCarSeriesCode);
        that.$set(saveObj, "auditPersonId", that.$refs.CheckPeople.value);
        that.$set(saveObj, "reviewDesc", that.$refs.ThisVisitContent4.input);
      } else if (val == 28) {
        //失控
        if (that.$refs.ThisVisitContent5.input == "") {
          that.$crmcf.showMessages(that,'error','请填写本次回访内容')
          return;
        }
        if (that.failReason == "") {
          that.$crmcf.showMessages(that,'error','请选择失控原因')
          return;
        }
        that.$set(saveObj, "failReason", that.failReason);
        that.$set(saveObj, "lostFailerDetail", that.lostFailerDetail);
        that.$set(saveObj, "reviewDesc", that.$refs.ThisVisitContent5.input);
      } else if (val == 30) {
        //异地
        if (that.$refs.City.value == "") {
          that.$crmcf.showMessages(that,'error','请选择城市')
          return;
        }
        that.$set(saveObj, "yidiCityCode", that.$refs.City.value);
        that.$set(saveObj, "yidiDlrCode", that.yidiDlrCode);
        that.$set(saveObj, "reviewDesc", that.$refs.ThisVisitContent6.input);
      } else if (
        val == 18 ||
        val == 20 ||
        val == 21 ||
        val == 22 ||
        val == 25
      ) {
        //无效
        that.$set(saveObj, "reviewDesc", that.$refs.ThisVisitContent7.input);
      }
      if (saveObj.nextCallbackDate != "") {
        that.$set(saveObj, "planReviewDate", saveObj.nextCallbackDate);
      }
       let variables = {
            dataInfo: saveObj
          };
          that.$crmcf.mutationSumbit(
            that,
            variables,
            crmApis.clueServerMutationReview,
            function() {
             that.$crmcf.showMessages(that, "success", "成功！");
          that.$crmcf.crmcloseView(that);
            }
          );
    },
    showMainInfo: function() {
      this.mainInfo = true;
      this.secondInfo = false;
    },
    showSecondInfo: function() {
      this.mainInfo = false;
      this.secondInfo = true;
    },
    handleClick(tab, event) {
      console.log(tab, event);
    },
    handleClick2(tab, event) {
      debugger
      if (tab.name == "second") {
        let that = this;
        that.tabledatasJL.queryObj.params.contactTel =
          that.$refs.PhoneNumber.input;
        setTimeout(function() {
          ;
          if (that.$refs.tableJL != undefined) {
            that.$refs.tableJL.getData();
          }
        }, 100);
      } else {
        this.query();
      }
      console.log(tab, event);
    },
    change1(val) {
      let that = this;

      if (val == 15) {
        that.nextVisitflag = true;
        that.revToStoreflag = false;
        that.custToStoreflag = false;
        that.loss = false;
        that.Outcontrol = false;
        that.OffsiteClue = false;
        that.invalidClue = false;
      } else if (val == 24) {
        that.nextVisitflag = false;
        that.revToStoreflag = true;
        that.custToStoreflag = false;
        that.loss = false;
        that.Outcontrol = false;
        that.OffsiteClue = false;
        that.invalidClue = false;
      } else if (val == 29) {
        that.nextVisitflag = false;
        that.revToStoreflag = false;
        that.custToStoreflag = true;
        that.loss = false;
        that.Outcontrol = false;
        that.OffsiteClue = false;
        that.invalidClue = false;
      } else if (val == 27) {
        that.nextVisitflag = false;
        that.revToStoreflag = false;
        that.custToStoreflag = false;
        that.loss = true;
        that.Outcontrol = false;
        that.OffsiteClue = false;
        that.invalidClue = false;
      } else if (val == 28) {
        that.nextVisitflag = false;
        that.revToStoreflag = false;
        that.custToStoreflag = false;
        that.loss = false;
        that.Outcontrol = true;
        that.OffsiteClue = false;
        that.invalidClue = false;
      } else if (val == 30) {
        that.nextVisitflag = false;
        that.revToStoreflag = false;
        that.custToStoreflag = false;
        that.loss = false;
        that.Outcontrol = false;
        that.OffsiteClue = true;
        that.invalidClue = false;
      } else if (
        val == 18 ||
        val == 20 ||
        val == 21 ||
        val == 22 ||
        val == 25
      ) {
        that.nextVisitflag = false;
        that.revToStoreflag = false;
        that.custToStoreflag = false;
        that.loss = false;
        that.Outcontrol = false;
        that.OffsiteClue = false;
        that.invalidClue = true;
      }
    },
    change: function() {
      let that = this;
      if (that.value == "1") {
        that.show = true;
      } else {
        that.show = false;
      }
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
    changepage(index) {
      let that = this;
      that.tabledatas.pageindex = index;
      this.query();
    }
  }
};
</script>

