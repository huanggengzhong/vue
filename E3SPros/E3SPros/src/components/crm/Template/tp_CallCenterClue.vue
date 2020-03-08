<template>
  <div>
    <!-- <router-view /> -->
    <el-row>
      <el-col :span="24">
        <div class="grid-content bg-purple-dark">
          <!-- 第一行 -->
          <el-row>
            <el-col :span="6">
              <div class="grid-content bg-purple">
                <ClueType :ClueType="test" ref="ClueType"></ClueType>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content bg-purple-light">
                <ContactWay :ContactWay="test" ref="ContactWay"></ContactWay>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content bg-purple">
                <ChannelBigClass :ChannelBigClass="test" ref="ChannelBigClass"></ChannelBigClass>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content bg-purple-light">
                <ChannelSmallClass :ChannelSmallClass="test" ref="ChannelSmallClass"></ChannelSmallClass>
              </div>
            </el-col>
          </el-row>
          <!-- 第二行 -->
          <el-row>
            <el-col :span="12">
              <div class="grid-content bg-purple">
                <RelatedBenchmarkCar :RelatedBenchmarkCar="test" ref="RelatedBenchmarkCar"></RelatedBenchmarkCar>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content bg-purple-light">
                <PlannedCarPurchaseTime
                  :PlannedCarPurchaseTime="test"
                  :ref="PlannedCarPurchaseTime"
                ></PlannedCarPurchaseTime>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content bg-purple">
                <TransferObject :TransferObject="test" ref="TransferObject"></TransferObject>
              </div>
            </el-col>
          </el-row>
          <!-- 第三行 -->
          <el-row :gutter="0">
            <el-col :span="6">
              <div class="grid-content bg-purple">
                <Province :Province="test" ref="Province"></Province>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content bg-purple">
                <City :City="test" ref="City"></City>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content bg-purple-light">
                <IntentionalOutlet :IntentionalOutlet="test" ref="IntentionalOutlet"></IntentionalOutlet>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content bg-purple-light">
                <IntentionLevel :IntentionLevel="test" ref="IntentionLevel"></IntentionLevel>
              </div>
            </el-col>
          </el-row>
          <!-- 第四行 -->
          <el-row>
            <el-col :span="6">
              <div class="grid-content bg-purple">
                <Descripts :Descripts="test" ref="Descripts"></Descripts>
              </div>
            </el-col>
          </el-row>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Province from "@/components/crm/Select/Common/Province";
import City from "@/components/crm/Select/Common/City";
import ClueType from "@/components/crm/Select/ClueType";
import ContactWay from "@/components/crm/Select/Common/ContactWay";
import ChannelBigClass from "@/components/crm/Select/Common/ChannelBigClass";
import ChannelSmallClass from "@/components/crm/EjectWindows/ChannelSmallClass";
import RelatedBenchmarkCar from "@/components/crm/EjectWindows/RelatedBenchmarkCar";
import PlannedCarPurchaseTime from "@/components/crm/Select/Common/Customer/PlannedCarPurchaseTime";
import TransferObject from "@/components/crm/Select/Common/Customer/TransferObject";
import IntentionalOutlet from "@/components/crm/EjectWindows/IntentionalOutlet";
import IntentionLevel from "@/components/crm/Select/Common/Customer/IntentionLevel";
import Descripts from "@/components/crm/textbox/Public/Descripts";

//import  from "@/"

export default {
  name: "tp_CallCenterClue",
  data() {
    return {
      test: {
        value: "",
        input: ""
      }
      //input: this.ClientFeedback.input,
    };
  },
  methods: {
    getData: function() {
      let that = this;
      that.input = this.ClientFeedback.input;
    }
  },
  components: {
    ClueType,
    Province,
    City,
    ContactWay,
    ChannelBigClass,
    ChannelSmallClass,
    RelatedBenchmarkCar,
    PlannedCarPurchaseTime,
    TransferObject,
    IntentionalOutlet,
    IntentionLevel,
    Descripts
  }
};
</script >



<style scoped>
</style>
