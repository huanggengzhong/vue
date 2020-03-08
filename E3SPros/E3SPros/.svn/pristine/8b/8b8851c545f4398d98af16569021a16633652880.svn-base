<template>
  <div>
    <!-- <router-view /> -->
    <el-row>
      <el-col :span="6">
        <div class="grid-content bg-purple-dark">
          <CustomersName></CustomersName>
          <PhoneNumber :PhoneNumber="test"></PhoneNumber>
          <Sex></Sex>
          <BackupPhone></BackupPhone>
          <UseCarName></UseCarName>
          <UseCarPhone></UseCarPhone>
          <Sex></Sex>
          <BackupPhone></BackupPhone>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
// import SideBar from "@/components/crm/SideBar";
// import NavBar from "@/components/crm/NavBar";

import CustomersName from "@/components/crm/EjectWindows/CustomersName";
import PhoneNumber from "@/components/crm/textbox/Public/customerInfos/PhoneNumber";
import Sex from "@/components/crm/Select/Common/Customer/Sex";
import BackupPhone from "@/components/crm/textbox/Public/customerInfos/BackupPhone";
import UseCarName from "@/components/crm/textbox/Public/customerInfos/UseCarName";
import UseCarPhone from "@/components/crm/textbox/Public/customerInfos/UseCarPhone";

export default {
  name: "CustomerInfo_shopside",
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
    // SideBar,
    // NavBar,
    CustomersName,
    PhoneNumber,
    Sex,
    BackupPhone,
    UseCarName,
    UseCarPhone
  }
};
</script >



<style scoped>
</style>
