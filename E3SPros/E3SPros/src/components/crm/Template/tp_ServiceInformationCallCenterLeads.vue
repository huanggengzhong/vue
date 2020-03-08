<template>
  <el-form label-position="right" label-width="100px">
    <!--第一行-->
    <el-row>
      <el-col :span="5.2" >
        <el-form-item label="线索单号" >
          <el-input v-model="form.input" placeholder="请输入" style="width:200px" ></el-input>
        </el-form-item>    
      </el-col>
      <el-col :span="5.2">
      <IntentionalOutlet></IntentionalOutlet> 
      </el-col>
      <el-col :span="5.2">
        <ClueType></ClueType>
      </el-col>
      <el-col :span="5.2">
        <IntentionalCar></IntentionalCar>
      </el-col>
    </el-row>
    <!--第二行-->
    <el-row>
      <el-col :span="5.2">
        <OrderAmount></OrderAmount>
      </el-col>
       <el-col :span="5.2">
        <CarShow></CarShow>
      </el-col>
       <el-col :span="5.2">
        <PlannedCarPurchaseTime></PlannedCarPurchaseTime>
      </el-col>
       <el-col :span="5.2">
        <IntentionLevel></IntentionLevel>
      </el-col>
    </el-row>
    <!--第三行-->
  <el-row>
    <el-col :span="5.2">
      <ExpectedFollowTime></ExpectedFollowTime>
    </el-col> 
    <el-col :span="5.2">
      <!-- <EstimatedArrivalTime></EstimatedArrivalTime> -->
    </el-col>
    <el-col :span="5.2">
      <sct_ActivityName></sct_ActivityName>
    </el-col> 
    <el-col :span="5.2">
      <OrderStatus></OrderStatus>
    </el-col> 
  </el-row>
  <!--第四行-->
  <el-row>
    <el-col :span="5.2">
      <ContactWay></ContactWay>
    </el-col> 
    <el-col :span="5.2">
      <ChannelBigClass></ChannelBigClass>
    </el-col>
    <el-col :span="5.2">
      <ChannelSmallClass></ChannelSmallClass>
    </el-col> 
    <el-col :span="5.2">
      <CleaningStatus></CleaningStatus>
    </el-col> 
  </el-row>
  <!--第五行-->
  <el-row>
    <el-col :span="5.2">
      <NumberOfCleanings></NumberOfCleanings>
    </el-col> 
    <el-col :span="5.2">
      <OrderTime></OrderTime>
    </el-col>
    <el-col :span="5.2">
      <OrderNumber></OrderNumber>
    </el-col> 
  </el-row>
  <el-row>
    <el-col :span="5.2">
      <Descripts></Descripts>
    </el-col>
  </el-row> 
  </el-form>
      
</template>
    
  
<script>
// import SideBar from "@/components/crm/SideBar";
// import NavBar from "@/components/crm/NavBar";

//缺少了线索单号
import IntentionalOutlet from "@/components/crm/EjectWindows/IntentionalOutlet.vue"
import ClueType from "@/components/crm/Select/ClueType.vue"
import IntentionalCar from "@/components/crm/EjectWindows/IntentionalCar.vue"

import OrderAmount from "@/components/crm/textbox/Clue/CallCenterClue/OrderAmount.vue"
import CarShow from  "@/components/crm/Select/Clue/CallCenterClue/CarShow.vue"
import PlannedCarPurchaseTime from"@/components/crm/Select/Common/Customer/PlannedCarPurchaseTime.vue"
import IntentionLevel from "@/components/crm/Select/Common/Customer/IntentionLevel.vue"

import ExpectedFollowTime from "@/components/crm/Time/ExpectedFollowTime.vue"
// import EstimatedArrivalTime from "@/components/crm/Select/CallCenterClue/EstimatedArrivalTime.vue"
import sct_ActivityName from "@/components/crm/Select/Clue/Rescue/sct_ActivityName.vue"
import OrderStatus from "@/components/crm/Select/Clue/CallCenterClue/OrderStatus.vue"

import ContactWay from "@/components/crm/Select/Common/ContactWay.vue"
import ChannelBigClass from "@/components/crm/Select/Common/ChannelBigClass.vue"
import ChannelSmallClass from "@/components/crm/EjectWindows/ChannelSmallClass.vue";
import CleaningStatus from "@/components/crm/Select/Clue/CallCenterClue/CleaningStatus.vue";

import NumberOfCleanings from "@/components/crm/textbox/Clue/CallCenterClue/NumberOfCleanings"
import OrderTime from "@/components/crm/Time/OrderTime.vue"
import OrderNumber from "@/components/crm/textbox/Clue/CallCenterClue/OrderNumber.vue"
import Descripts from "@/components/crm/textbox/Public/Descripts.vue"





export default {
  name: "tp_ServiceInformationCallCenterLeads",
  data() {
    return {
      form: {
        input: "",
      }
    };
  },
  components: {
    IntentionalOutlet,
    ClueType,
    IntentionalCar,
    OrderAmount,
    CarShow,
    PlannedCarPurchaseTime,
    IntentionLevel,
    ExpectedFollowTime,
    // EstimatedArrivalTime,
    sct_ActivityName,
    OrderStatus,
    ContactWay,
    ChannelBigClass,
    ChannelSmallClass,
    NumberOfCleanings,
    OrderTime,
    OrderNumber,
    Descripts,
    CleaningStatus
    
    



  }
};
</script>
