<template>
  <el-form label-position="right" label-width="80px">
    <!--第一行-->
    <el-row>
      <el-col>
       <!--责任方 只读-->
       <DutyAspect></DutyAspect>
      </el-col>
  </el-row>
   <!--第二行-->
  <el-row>
     <el-col>
         <!--表单-->
         <Table></Table>
     </el-col>
  </el-row>
  <!--第三行-->
  <el-row>
       <!--下一步责任人-->
       <NextStepDutyPeople></NextStepDutyPeople>
  </el-row>
 </el-form>
</template>
    
  
<script>
// import SideBar from "@/components/crm/SideBar";
// import NavBar from "@/components/crm/NavBar";


import DutyAspect from "@/components/crm/option/DutyAspect.vue"
import Table from "@/components/crm/table/Table.vue"
import NextStepDutyPeople from "@/components/crm/textbox/Complaint/NextStepDutyPeople.vue"

export default {
  name: "tp_TreatingProcesses",
  components: {
    DutyAspect,
    Table,
    NextStepDutyPeople
  



  }
};
</script>
