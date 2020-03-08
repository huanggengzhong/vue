<template>
  <div class="app-container app-container-table">
    <el-form :inline="true" label-position="right" label-width="80px">
      <el-row>
        <el-col :span="6">
          <CustomerName></CustomerName>
        </el-col>
        <el-col :span="6">
          <ContactWay></ContactWay>
        </el-col>
        <el-col :span="6">
          <ChannelBigClass></ChannelBigClass>
        </el-col>
        <el-col :span="6">
          <ChannelSmalTypeName></ChannelSmalTypeName>
        </el-col>

        <el-col :span="6">
          <PhoneNumber></PhoneNumber>
        </el-col>
        <el-col :span="6">
          <BuildMenuDate></BuildMenuDate>
        </el-col>
        <el-col :span="6">
          <CarBrand></CarBrand>
        </el-col>
        <el-col :span="6">
          <NumberOfCleanings></NumberOfCleanings>
        </el-col>

        <el-col :span="6">
          <ClueNumber></ClueNumber>
        </el-col>
        <el-col :span="6">
          <IntentionLevel></IntentionLevel>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>
<script>
import CustomerName from "@/components/crm/textbox/Public/customerInfos/txt_CustomerName";
import ContactWay from "@/components/crm/Select/Common/ContactWay";
import ChannelBigClass from "@/components/crm/Select/Common/ChannelBigClass";
import ChannelSmalTypeName from "@/components/crm/textbox/Clue/ChannelSmalTypeName";
import PhoneNumber from "@/components/crm/textbox/Public/customerInfos/PhoneNumber";
import BuildMenuDate from "@/components/crm/Time/BuildMenuDate";
import CarBrand from "@/components/crm/Select/Common/sct_CarBrand";
import NumberOfCleanings from "@/components/crm/textbox/Clue/CallCenterClue/NumberOfCleanings";
import ClueNumber from "@/components/crm/textbox/Clue/ClueNumber";
import IntentionLevel from "@/components/crm/Select/Common/Customer/IntentionLevel";
export default {
  name: "queryToBeCleaned",
  components: {
    CustomerName,
    ContactWay,
    ChannelBigClass,
    ChannelSmalTypeName,
    PhoneNumber,
    BuildMenuDate,
    CarBrand,
    NumberOfCleanings,
    ClueNumber,
    IntentionLevel
  }
};
</script>
