<template>
  <el-form label-position="right" label-width="90px">
    <el-form-item>
      <el-row>
        <el-col :span="6">
          <BusinessCategory :BusinessCategory="tp_GroupTBDone"></BusinessCategory>
        </el-col>
        <el-col :span="6">
          <ServiceMenuNumber :ServiceMenuNumber="tp_GroupTBDone"></ServiceMenuNumber>
        </el-col>
        <el-col :span="6">
          <txtCustomerName :txtCustomerName="tp_GroupTBDone"></txtCustomerName>
        </el-col>
        <el-col :span="6">
          <CurrentHandler :CurrentHandler="tp_GroupTBDone"></CurrentHandler>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="6">
          <PhoneNumber :PhoneNumber="tp_GroupTBDone"></PhoneNumber>
        </el-col>
        <el-col :span="6">
          <BuildMenuDate :BuildMenuDate="tp_GroupTBDone"></BuildMenuDate>
        </el-col>
        <el-col :span="6">
          <AssignStatus :AssignStatus="tp_GroupTBDone"></AssignStatus>
        </el-col>
        <el-col :span="6">
          <sctCarBrand :sctCarBrand="tp_GroupTBDone"></sctCarBrand>
        </el-col>
      </el-row>
    </el-form-item>
  </el-form>
</template>
<script>
import BusinessCategory from "@/components/crm/Select/Common/BusinessCategory";
import ServiceMenuNumber from "@/components/crm/textbox/Public/ServiceMenuNumber";
import txtCustomerName from "@/components/crm/textbox/Public/customerInfos/txt_CustomerName";
import CurrentHandler from "@/components/crm/textbox/Clue/CurrentHandler";
import PhoneNumber from "@/components/crm/textbox/Public/customerInfos/PhoneNumber";
import BuildMenuDate from "@/components/crm/Time/BuildMenuDate";
import AssignStatus from "@/components/crm/Select/Clue/AssignStatus";
import sctCarBrand from "@/components/crm/Select/Common/sct_CarBrand";

export default {
  name: "tp_GroupTBDone",
  components: {
    BusinessCategory,
    ServiceMenuNumber,
    txtCustomerName,
    CurrentHandler,
    PhoneNumber,
    BuildMenuDate,
    AssignStatus,
    sctCarBrand
  },
  data() {
    return {
      tp_GroupTBDone: {
        input: "",
        value: "",
        textarea: "",
        options: ""
      }
    };
  }
};
</script>
