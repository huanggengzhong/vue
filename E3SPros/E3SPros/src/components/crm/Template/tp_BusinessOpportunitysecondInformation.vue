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
                <RecommenderRelation :RecommenderRelation="test" ref="RecommenderRelation"></RecommenderRelation>
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
                <introducerRelationship :introducerRelationship="test" ref="introducerRelationship"></introducerRelationship>
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
  </div>
</template>

<script>
import CustomerSource from "@/components/crm/Select/Common/Customer/CustomerSource";
import RetainCustomers from "@/components/crm/EjectWindows/RetainCustomers";
import RecommenderRelation from "@/components/crm/Select/Clue/RecommenderRelation";
import OldCarBrandNumber from "@/components/crm/textbox/Public/customerInfos/OldCarBrandNumber";

import introducerRelationship from "@/components/crm/Select/Clue/introducerRelationship";
import IntroducePeople from "@/components/crm/textbox/Public/customerInfos/IntroducePeople";
import IntroducerPhone from "@/components/crm/textbox/Public/customerInfos/IntroducerPhone";
import IntroducerSex from "@/components/crm/Select/Clue/IntroducerSex";

//import  from "@/"

export default {
  name: "tp_BusinessOpportunitysecondInformation",
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
    CustomerSource,
    RetainCustomers,
    RecommenderRelation,
    OldCarBrandNumber,
    introducerRelationship,
    IntroducePeople,
    IntroducerPhone,
    IntroducerSex
  }
};
</script >



<style scoped>
</style>
