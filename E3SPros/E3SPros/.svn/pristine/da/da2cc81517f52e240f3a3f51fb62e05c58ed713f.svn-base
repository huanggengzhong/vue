<!--
* 描述: 线索回访_全网行为更新
* 创建人: hejin
* 创建时间: 2019-07-26
* 记录：
*  20190726 新建 hejin
-->
<template>
  <div class="app-container app-container-table">
    <div class="filter-container filter-button">
      <el-button type="primary" size="small">查询</el-button>
      <el-button size="small">重置</el-button>
      <el-button size="small">导出</el-button>
    </div>
    <div class="filter-container filter-title">客户信息</div>
    <div class="filter-container filter-params">
      <el-form label-position="right">
        <!--第一行-->
        <el-row>
          <!--客户名称-->
          <el-col :span="6">
            <txt_CustomerName :txt_CustomerName="custName" ref="txt_CustomerName"></txt_CustomerName>
          </el-col>
          <el-col :span="6">
            <!--电话-->
            <PhoneNumber :PhoneNumber="contactTel" ref="PhoneNumber"></PhoneNumber>
          </el-col>
          <el-col :span="6">
            <!--性别-->
            <Sex :Sex="sex" ref="Sex"></Sex>
          </el-col>
          <el-col :span="6">
            <!--备用电话-->
            <BackupPhone :BackupPhone="BackupPhone" ref="BackupPhone"></BackupPhone>
          </el-col>
        </el-row>

        <!--第二行-->
        <div class="filter-container filter-title">商机信息</div>
        <div class="filter-container filter-params">
          <el-row>
            <!--商机信息模块tp_BusinessInfo-->
            <el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
              <el-tab-pane label="商机主要信息" name="first">
                <el-row>
                  <el-col :span="24">
                    <!--主要信息的模板-->
                    <el-row>
                      <el-col :span="6">
                        <SourceOfChannel ref="sour"></SourceOfChannel>
                      </el-col>
                      <el-col :span="6">
                        <IntentionLevel :IntentionLevel="Intentl" ref="intentl"></IntentionLevel>
                      </el-col>
                      <el-col :span="6">
                        <IntentionalPrice :IntentionalPrice="Intentp" ref="intentp"></IntentionalPrice>
                      </el-col>
                      <el-col :span="6">
                        <NextReturnVisitTime :NextReturnVisitTime="Nextr" ref="nextr"></NextReturnVisitTime>
                      </el-col>
                    </el-row>
                    <el-row>
                      <el-col :span="6">
                        <IntentionalCar ref="intentc"></IntentionalCar>
                      </el-col>
                      <el-col :span="6">
                        <IntentionalModel ref="intentm"></IntentionalModel>
                      </el-col>

                      <el-col :span="6">
                        <IntentionalColor :IntentionalColor="Intentco" ref="intentco"></IntentionalColor>
                      </el-col>
                      <el-col :span="6">
                        <dt_RetentionTime :dt_RetentionTime="Retent" ref="retent"></dt_RetentionTime>
                      </el-col>
                    </el-row>
                    <el-row>
                      <el-col :span="6">
                        <dtProVisitTime :dtProVisitTime="ProVisi" ref="proVisi"></dtProVisitTime>
                      </el-col>
                    </el-row>
                    <el-row style="margin:22px 0 0 0">
                      <el-form label-position="right" label-width="15%">
                        <el-col :span="12">
                          <Descripts :Descripts="Desc" ref="desc"></Descripts>
                        </el-col>
                        <el-col :span="12">
                          <Remarks :Remarks="Remark" ref="remark"></Remarks>
                        </el-col>
                      </el-form>
                    </el-row>
                  </el-col>
                </el-row>
              </el-tab-pane>
              <el-tab-pane label="商机次要信息" name="second">
                <!--次要信息的模板-->
                <el-row>
                  <el-col :span="24">
                    <div class="grid-content bg-purple-dark">
                      <!-- 第一行 -->
                      <el-row>
                        <el-col :span="6">
                          <div class="grid-content bg-purple">
                            <CustomerSource :CustomerSource="test" ref="CustomerSource"></CustomerSource>
                          </div>
                        </el-col>
                        <el-col :span="6">
                          <div class="grid-content bg-purple-light">
                            <RetainCustomers :RetainCustomers="test" ref="RetainCustomers"></RetainCustomers>
                          </div>
                        </el-col>
                        <el-col :span="6">
                          <div class="grid-content bg-purple">
                            <RecommenderRelation
                              :RecommenderRelation="test"
                              ref="RecommenderRelation"
                            ></RecommenderRelation>
                          </div>
                        </el-col>
                        <el-col :span="6">
                          <div class="grid-content bg-purple-light">
                            <OldCarBrandNumber :OldCarBrandNumber="test" ref="OldCarBrandNumber"></OldCarBrandNumber>
                          </div>
                        </el-col>
                      </el-row>
                      <!-- 第二行 -->
                      <el-row>
                        <el-col :span="6">
                          <div class="grid-content bg-purple">
                            <introducerRelationship
                              :introducerRelationship="test"
                              ref="introducerRelationship"
                            ></introducerRelationship>
                          </div>
                        </el-col>
                        <el-col :span="6">
                          <div class="grid-content bg-purple-light">
                            <IntroducePeople :IntroducePeople="test" ref="IntroducePeople"></IntroducePeople>
                          </div>
                        </el-col>
                        <el-col :span="6">
                          <div class="grid-content bg-purple">
                            <IntroducerPhone :IntroducerPhone="test" ref="IntroducerPhone"></IntroducerPhone>
                          </div>
                        </el-col>
                        <el-col :span="6">
                          <div class="grid-content bg-purple">
                            <IntroducerSex :IntroducerSex="test" ref="IntroducerSex"></IntroducerSex>
                          </div>
                        </el-col>
                      </el-row>
                    </div>
                  </el-col>
                </el-row>
              </el-tab-pane>
            </el-tabs>

            <el-row>
              <el-col :span="24">
                <!--处理状态-->
                <el-form :rules="rules" ref="ruleForm" label-position="right">
                  <el-row>
                    <el-col :span="6" style="margin-top:-10px">
                      <el-form-item label="处理状态">
                        <el-select v-model="value1" placeholder="请选择" @change="change1()">
                          <el-option
                            v-for="item in options1"
                            :key="item.value1"
                            :label="item.label"
                            :value="item.value1"
                          ></el-option>
                        </el-select>
                      </el-form-item>
                    </el-col>

                    <el-col :span="6" style="margin-top:-10px">
                      <!--下次回访时间-->
                      <NextReturnVisitTimes></NextReturnVisitTimes>
                    </el-col>
                  </el-row>

                  <el-row>
                    <!--下次回访-->
                    <div v-if="nextVisitflag">
                      <el-form label-position="right">
                        <el-row>
                          <el-col :span="6">
                            <ThisVisitContent ref="ThisVisitContent" prop="ThisVisitContent"></ThisVisitContent>
                          </el-col>

                          <el-col :span="6">
                            <NextReturnVisitTime
                              ref="NextReturnVisitTime"
                              prop="NextReturnVisitTime"
                            ></NextReturnVisitTime>
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
                            <ThisVisitContent ref="ThisVisitContent" prop="ThisVisitContent"></ThisVisitContent>
                          </el-col>

                          <el-col :span="6">
                            <ReservationToStore ref="ReservationToStore" prop="ReservationToStore"></ReservationToStore>
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
                            <ThisVisitContent ref="ThisVisitContent" prop="ThisVisitContent"></ThisVisitContent>
                          </el-col>

                          <el-col :span="6">
                            <ReachShopTime ref="ReachShopTime" prop="ReachShopTime"></ReachShopTime>
                          </el-col>
                          <el-col :span="6">
                            <LeaveShopTime ref="LeaveShopTime" prop="LeaveShopTime"></LeaveShopTime>
                          </el-col>
                          <el-col :span="6">
                            <ReachShopPeopleNumber
                              ref="ReachShopPeopleNumber"
                              prop="ReachShopPeopleNumber"
                            ></ReachShopPeopleNumber>
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
                              <swdSalesConsultant :swdSalesConsultant="TransferOrders"></swdSalesConsultant>
                            </el-col>
                            <el-col :span="6">
                              <BuyPattern :BuyPattern="TransferOrders"></BuyPattern>
                            </el-col>
                            <el-col :span="6">
                              <ContactWay :ContactWay="TransferOrders"></ContactWay>
                            </el-col>
                          </el-row>
                          <el-row>
                            <el-col :span="6">
                              <PreVisitDate :PreVisitDate="TransferOrders"></PreVisitDate>
                            </el-col>
                            <el-col :span="6">
                              <LatestPlayProcess :LatestPlayProcess="TransferOrders"></LatestPlayProcess>
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
                            <ReasonForDefeat ref="ReasonForDefeat" prop="ReasonForDefeat"></ReasonForDefeat>
                          </el-col>
                          <el-col :span="6">
                            <CompetitiveCar ref="CompetitiveCar" prop="CompetitiveCar"></CompetitiveCar>
                          </el-col>
                          <el-col :span="6">
                            <CheckPeople ref="CheckPeople" prop="CheckPeople"></CheckPeople>
                          </el-col>
                        </el-row>
                        <el-row>
                          <el-col :span="6">
                            <ThisVisitContent ref="ThisVisitContent" prop="ThisVisitContent"></ThisVisitContent>
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
                              prop="swd_ReasonForLostControl"
                            ></swd_ReasonForLostControl>
                          </el-col>
                        </el-row>
                        <el-row>
                          <el-col :span="6">
                            <ThisVisitContent ref="ThisVisitContent" prop="ThisVisitContent"></ThisVisitContent>
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
                            <Province ref="Province" prop="Province"></Province>
                          </el-col>
                          <el-col :span="6">
                            <City ref="City" prop="City"></City>
                          </el-col>
                          <el-col :span="6">
                            <OffsiteNetwork_pop ref="OffsiteNetwork_pop" prop="OffsiteNetwork_pop"></OffsiteNetwork_pop>
                          </el-col>
                        </el-row>
                        <el-row>
                          <el-col :span="6">
                            <ThisVisitContent ref="ThisVisitContent" prop="ThisVisitContent"></ThisVisitContent>
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
                            <ThisVisitContent ref="ThisVisitContent" prop="ThisVisitContent"></ThisVisitContent>
                          </el-col>
                        </el-row>
                      </el-form>
                    </div>
                  </el-row>
                </el-form>
              </el-col>
            </el-row>

            <el-row>
              <!--本次回访记录-->
              <el-col :span="6" style="margin:-10px 0 0 10px">
                <ThisVisitContent></ThisVisitContent>
              </el-col>
            </el-row>
          </el-row>
        </div>
      </el-form>
    </div>
    <div class="filter-container filter-title" ref="resultTitleHeight">接触记录</div>
    <el-table :tabledatas="tabledatas"></el-table>
  </div>
</template>
    
  
<script>
// import SideBar from "@/components/crm/SideBar";
// import NavBar from "@/components/crm/NavBar";

import txt_CustomerName from "@/components/crm/textbox/Public/customerInfos/txt_CustomerName";
import PhoneNumber from "@/components/crm/textbox/Public/customerInfos/PhoneNumber";
import Sex from "@/components/crm/Select/Common/Customer/Sex.vue";
import ProcessingStatus from "@/components/crm/Select/Clue/ProcessingStatus.vue";
import NextReturnVisitTimes from "@/components/crm/Time/NextReturnVisitTimes";
import ThisVisitContent from "@/components/crm/textbox/Clue/Revisit/ThisVisitContent.vue";
import tp_BusinessInfo from "@/components/crm/Template/tp_BusinessInfo.vue";
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
import tp_ProStatusPage from "@/components/crm/Template/tp_ProStatusPage.vue";

import swdSalesConsultant from "@/components/crm/EjectWindows/swd_SalesConsultant";
import BuyPattern from "@/components/crm/Select/Common/BuyPattern";
import ContactWay from "@/components/crm/Select/Common/ContactWay";
import PreVisitDate from "@/components/crm/Time/PreVisitDate";
import LatestPlayProcess from "@/components/crm/textbox/Public/LatestPlayProcess";

import Table from "@/components/crm/table/Table";
import { crmApis } from "@/api/graphQLApiList/crm";

export default {
  name: "crmThreadReturnAllNet",
  components: {
    txt_CustomerName,
    PhoneNumber,
    Sex,
    ProcessingStatus,
    NextReturnVisitTimes,
    ThisVisitContent,
    Table,
    tp_BusinessInfo,
    SourceOfChannel,
    IntentionLevel,
    IntentionalPrice,
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
    OffsiteNetwork_pop,
    tp_ProStatusPage,
    swdSalesConsultant,
    BuyPattern,
    ContactWay,
    PreVisitDate,
    LatestPlayProcess
  },
  data() {
    return {
      options1: [
        { label: "下次回访", value1: "1" },
        { label: "预约到店", value1: "2" },
        { label: "客户到店", value1: "3" },
        { label: "战败", value1: "4" },
        { label: "失控", value1: "5" },
        { label: "异地线索", value1: "6" },
        { label: "无效线索", value1: "7" }
      ],
      options: [
        {
          value: "1",
          label: "是"
        },
        {
          value: "2",
          label: "否"
        }
      ],
      value1: "",
      value: "",
      show: false,
      nextVisitflag: false,
      revToStoreflag: false,
      custToStoreflag: false,
      loss: false,
      Outcontrol: false,
      OffsiteClue: false,
      invalidClue: false
    };
  },
  methods: {
    query: function() {
      this.$refs.table.getDatas();
    },
    changeToggleParam() {
      this.toggleParam = !this.toggleParam;
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
    change1: function() {
      let that = this;
      if (that.value1 == 1) {
        that.nextVisitflag = true;
        that.revToStoreflag = false;
        that.custToStoreflag = false;
        that.loss = false;
        that.Outcontrol = false;
        that.OffsiteClue = false;
        that.invalidClue = false;
      } else if (that.value1 == 2) {
        that.nextVisitflag = false;
        that.revToStoreflag = true;
        that.custToStoreflag = false;
        that.loss = false;
        that.Outcontrol = false;
        that.OffsiteClue = false;
        that.invalidClue = false;
      } else if (that.value1 == 3) {
        that.nextVisitflag = false;
        that.revToStoreflag = false;
        that.custToStoreflag = true;
        that.loss = false;
        that.Outcontrol = false;
        that.OffsiteClue = false;
        that.invalidClue = false;
      } else if (that.value1 == 4) {
        that.nextVisitflag = false;
        that.revToStoreflag = false;
        that.custToStoreflag = false;
        that.loss = true;
        that.Outcontrol = false;
        that.OffsiteClue = false;
        that.invalidClue = false;
      } else if (that.value1 == 5) {
        that.nextVisitflag = false;
        that.revToStoreflag = false;
        that.custToStoreflag = false;
        that.loss = false;
        that.Outcontrol = true;
        that.OffsiteClue = false;
        that.invalidClue = false;
      } else if (that.value1 == 6) {
        that.nextVisitflag = false;
        that.revToStoreflag = false;
        that.custToStoreflag = false;
        that.loss = false;
        that.Outcontrol = false;

        that.OffsiteClue = true;
        that.invalidClue = false;
      } else if (that.value1 == 7) {
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
    }
  }
};
</script>
<style>
.filter-params .el-form-item__label {
  margin-right: 0px;
}
.query-params .el-col {
  margin-bottom: 0px;
}
</style>
