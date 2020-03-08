<template>
  <el-form :inline="true" :rules="rules" ref="ruleForm" label-position="right" label-width="30%">
    <el-form-item label="处理状态" prop="proStatus">
      <el-select v-model="value" placeholder="请选择" @change="change()">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
    </el-form-item>

    <!--下次回访-->
    <el-form v-if="nextVisitflag">
      <el-row>
        <el-col :span="8">
          <ThisVisitContent ref="ThisVisitContent" prop="ThisVisitContent"></ThisVisitContent>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="8">
          <NextReturnVisitTime ref="NextReturnVisitTime" prop="NextReturnVisitTime"></NextReturnVisitTime>
        </el-col>
      </el-row>
    </el-form>

    <!--预约到店-->
    <el-form v-if="revToStoreflag" style="margin-left:10px">
      <el-row>
        <el-col :span="8">
          <ThisVisitContent ref="ThisVisitContent" prop="ThisVisitContent"></ThisVisitContent>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="8">
          <ReservationToStore ref="ReservationToStore" prop="ReservationToStore"></ReservationToStore>
        </el-col>
      </el-row>
    </el-form>

    <!--客户到店-->
    <el-form v-if="custToStoreflag" style="margin-left:10px">
      <el-row>
        <el-col :span="8">
          <ThisVisitContent ref="ThisVisitContent" prop="ThisVisitContent"></ThisVisitContent>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="8">
          <ReachShopTime ref="ReachShopTime" prop="ReachShopTime"></ReachShopTime>
        </el-col>
        <el-col :span="8">
          <LeaveShopTime ref="LeaveShopTime" prop="LeaveShopTime"></LeaveShopTime>
        </el-col>
        <el-col :span="8">
          <ReachShopPeopleNumber ref="ReachShopPeopleNumber" prop="ReachShopPeopleNumber"></ReachShopPeopleNumber>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="8">
          <TransferOrders ref="TransferOrders" prop="TransferOrders"></TransferOrders>
        </el-col>
      </el-row>
    </el-form>

    <!--战败-->
    <el-form v-if="loss" style="margin-left:10px">
      <el-row>
        <el-col :span="8">
          <ReasonForDefeat ref="ReasonForDefeat" prop="ReasonForDefeat"></ReasonForDefeat>
        </el-col>
        <el-col :span="8">
          <CompetitiveCar ref="CompetitiveCar" prop="CompetitiveCar"></CompetitiveCar>
        </el-col>
        <el-col :span="8">
          <CheckPeople ref="CheckPeople" prop="CheckPeople"></CheckPeople>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="8">
          <ThisVisitContent ref="ThisVisitContent" prop="ThisVisitContent"></ThisVisitContent>
        </el-col>
      </el-row>
    </el-form>

    <!--失控-->
    <el-form v-if="Outcontrol" style="margin-left:10px">
      <el-row>
        <el-col :span="8">
          <swd_ReasonForLostControl ref="swd_ReasonForLostControl" prop="swd_ReasonForLostControl"></swd_ReasonForLostControl>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="8">
          <ThisVisitContent ref="ThisVisitContent" prop="ThisVisitContent"></ThisVisitContent>
        </el-col>
      </el-row>
    </el-form>

    <!--异地线索-->
    <el-form v-if="OffsiteClue" style="margin-left:10px">
      <el-row>
        <el-col :span="8">
          <Province ref="Province" prop="Province" style="margin-left:30px"></Province>
        </el-col>
        <el-col :span="8">
          <City ref="City" prop="City"></City>
        </el-col>
        <el-col :span="8">
          <OffsiteNetwork_pop ref="OffsiteNetwork_pop" prop="OffsiteNetwork_pop"></OffsiteNetwork_pop>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="8">
          <ThisVisitContent ref="ThisVisitContent" prop="ThisVisitContent"></ThisVisitContent>
        </el-col>
      </el-row>
    </el-form>

    <!--无效线索-->
    <el-form v-if="invalidClue" style="margin-left:10px">
      <el-row>
        <el-col :span="8">
          <ThisVisitContent ref="ThisVisitContent" prop="ThisVisitContent"></ThisVisitContent>
        </el-col>
      </el-row>
    </el-form>
  </el-form>
</template>
<script>
import ThisVisitContent from "@/components/crm/textbox/Clue/Revisit/ThisVisitContent.vue";
import NextReturnVisitTime from "@/components/crm/Time/NextReturnVisitTime.vue";
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
import swdSalesConsultant from "@/components/crm/EjectWindows/swd_SalesConsultant";
import BuyPattern from "@/components/crm/Select/Common/BuyPattern";
import ContactWay from "@/components/crm/Select/Common/ContactWay";
import PreVisitDate from "@/components/crm/Time/PreVisitDate";
import LatestPlayProcess from "@/components/crm/textbox/Public/LatestPlayProcess";

export default {
  name: "tp_ProStatusPage",
  components: {
    ThisVisitContent,
    NextReturnVisitTime,
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
    ContactWay,
    PreVisitDate,
    LatestPlayProcess
  },
  data() {
    return {
      //校验表单非空规则
       ruleForm: {
          proStatus: '',
          ThisVisitContent:'',
        },
         rules: {
          proStatus: [
            { required: true, message: '请选择处理状态', trigger: 'blur' },//校验处理状态非空规则
          ],
          ThisVisitContent: [
            { required: true, message: '请填写本次回访内容', trigger: 'blur' },//校验处理状态非空规则
          ],
          },
      options: [
        { label: "下次回访", value1: "1" },
        { label: "预约到店", value1: "2" },
        { label: "客户到店", value1: "3" },
        { label: "战败", value1: "4" },
        { label: "失控", value1: "5" },
        { label: "异地线索", value: "6" },
        { label: "无效线索", value1: "7" }
      ],options: [
        {
          value: "1",
          label: "是"
        },
        {
          value: "2",
          label: "否"
        }
      ],
      value1:"",
      value: "",
      nextVisitflag: false,
      revToStoreflag: false,
      custToStoreflag:false,
      loss:false,
      Outcontrol:false,
      OffsiteClue:false,
      invalidClue:false,
    };
  },
  methods: {
    change: function() {
      let that = this;
      if (that.value1 == 1) {
        that.nextVisitflag = true;
        that.revToStoreflag=false;
        that.custToStoreflag=false;
        that.loss=false;
        that.Outcontrol=false;
        that.OffsiteClue=false;
        that.invalidClue=false;
      } else if (that.value1 == 2) {
       that.nextVisitflag = false;
        that.revToStoreflag=true;
        that.custToStoreflag=false;
        that.loss=false;
        that.Outcontrol=false;
        that.OffsiteClue=false;
        that.invalidClue=false;
      }else if (that.value1 == 3) {
       that.nextVisitflag = false;
        that.revToStoreflag=false;
        that.custToStoreflag=true;
        that.loss=false;
        that.Outcontrol=false;
        that.OffsiteClue=false;
        that.invalidClue=false;
      }else if (that.value1 == 4) {
       that.nextVisitflag = false;
        that.revToStoreflag=false;
        that.custToStoreflag=false;
        that.loss=true;
        that.Outcontrol=false;
        that.OffsiteClue=false;
        that.invalidClue=false;
      }else if (that.value1 == 5) {
       that.nextVisitflag = false;
        that.revToStoreflag=false;
        that.custToStoreflag=false;
        that.loss=false;
        that.Outcontrol=true;
        that.OffsiteClue=false;
        that.invalidClue=false;
      }else if (that.value1 == 6) {
       that.nextVisitflag = false;
        that.revToStoreflag=false;
        that.custToStoreflag=false;
        that.loss=false;
        that.Outcontrol=false;
        that.OffsiteClue=true;
        that.invalidClue=false;
      }else if (that.value1 == 7) {
       that.nextVisitflag = false;
        that.revToStoreflag=false;
        that.custToStoreflag=false;
        that.loss=false;
        that.Outcontrol=false;
        that.OffsiteClue=false;
        that.invalidClue=true;
      }
    }
  }
};
</script>
