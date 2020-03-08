<template>
  <div class="app-container app-container-table">
    <div class="filter-container filter-button" >
       <el-button  type="primary" size="small" @click="query">问卷</el-button>
      <el-button  size="small" >短信发送</el-button>
      <el-button  size="small">保存</el-button>
    </div>
   <div class="filter-container filter-title" >客户信息</div>
    <div class="filter-container filter-params" >
      <el-form label-position="right">
    <!--第一行-->
    <el-row >
        <!--客户名称-->
        <el-col :span="6">
         <txt_CustomerName></txt_CustomerName> 
        </el-col>
       <el-col :span="6">
          <!--电话-->
             <PhoneNumber></PhoneNumber>
      </el-col>
      <el-col :span="6">
          <!--性别-->
            <Sex></Sex>
      </el-col>
      <el-col :span="6">
          <!--备用电话-->
          <BackupPhone></BackupPhone>
      </el-col>
    </el-row>
      </el-form>
    </div>
    <div class="filter-container filter-title">商机信息</div>
 
        
            <el-row>
                <el-col :span="24">
               <tp_ProStatusPage></tp_ProStatusPage>
                </el-col>
            </el-row>
       
   
  </div>   
</template>
    
  
<script>
// import SideBar from "@/components/crm/SideBar";
// import NavBar from "@/components/crm/NavBar";


import txt_CustomerName from "@/components/crm/textbox/Public/customerInfos/txt_CustomerName"
import PhoneNumber from "@/components/crm/textbox/Public/customerInfos/PhoneNumber"
import Sex from "@/components/crm/Select/Common/Customer/Sex.vue"
import BackupPhone from "@/components/crm/textbox/Public/customerInfos/BackupPhone.vue"
import NextReturnVisitTimes from "@/components/crm/Time/NextReturnVisitTimes"
import ServiceMenuNumber from "@/components/crm/textbox/Public/ServiceMenuNumber.vue";
import ServiceBigClass from "@/components/crm/Select/Common/ServiceBigClass.vue";
import IntentionalBrand from "@/components/crm/Select/Common/Customer/IntentionalBrand.vue";
import ContactWay  from "@/components/crm/Select/Common/ContactWay.vue"
import ReceiptStatus  from "@/components/crm/Select/Clue/ReceiptStatus.vue"
import JobStatus  from "@/components/crm/Select/Clue/JobStatus.vue"
import dt_BuildMenuDates  from "@/components/crm/Time/dt_BuildMenuDates.vue"
import tp_ProStatusPage from "@/components/crm/Template/tp_ProStatusPage.vue"

export default {
  name: "crmTodayPendingthread",
  data() {
    return {
      form: {
        value: '',
        options: '',
        input: ''
      },
    };
  },
  components: {
   txt_CustomerName,
    PhoneNumber,
    Sex,
    BackupPhone,
    NextReturnVisitTimes,
    ServiceMenuNumber,
    ServiceBigClass,
    IntentionalBrand,
    ContactWay,
    ReceiptStatus,
    JobStatus,
    dt_BuildMenuDates,
    tp_ProStatusPage
  },
  
};
</script>
