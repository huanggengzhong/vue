<!--
* 描述: 问卷答题在线答题
* 创建人: hejin
* 创建时间: 2019-07-26
* 记录：
*  20190726 新建 hejin
-->
<template>
  <div class="app-container app-container-table">
    <div class="filter-container filter-button" >
    </div>
   <div class="filter-container filter-title" >问卷答题</div>
    <div class="filter-container filter-params" >
      <el-form label-position="right">
    <!--第一行-->
    <el-row >
        <!--联系人姓名-->
        <el-col :span="6">
         <ContactName :ContactName="custName" ref="ContactName"></ContactName> 
        </el-col>
       <el-col :span="6">
          <!--性别-->
            <Sex :Sex="sex" ref="Sex"></Sex>
      </el-col>
      <el-col :span="6">
          <!--电话-->
             <PhoneNumber :PhoneNumber="contactTel" ref="PhoneNumber"></PhoneNumber>
      </el-col>
    </el-row>
      
    <!--第二行-->
    <el-row>
        <el-col :span="6">
        <span>Q1 是否关注具体车型（例如Q50L/QX60)</span>
        <el-radio-group v-model="radio">
            <el-radio :label="3">是</el-radio>
            <el-radio :label="6">否</el-radio>
        </el-radio-group>
        </el-col>
    </el-row>
     <el-row >
        <el-col :span="6">
        <span>Q2　如果各方面条件都合适的话，您计划在多长时间内购买车辆呢？</span>
        <el-radio-group v-model="radio">
            <el-radio :label="3">一年后</el-radio>
            <el-radio :label="6">一年内</el-radio>
             <el-radio :label="9">三个月</el-radio>
            <el-radio :label="12">一周</el-radio>
        </el-radio-group>
        </el-col>
    </el-row>
     <el-row >
        <el-col :span="6">
        <span>Q3　请问您是否通过4S店或朋友那里了解和体验过呢？</span>
        <el-radio-group v-model="radio1">
            <el-radio :label="3">是</el-radio>
            <el-radio :label="6">否</el-radio>
        </el-radio-group>
        </el-col>
    </el-row>
     <el-row >
        <el-col :span="6">
        <span>Q4　请问如果购车的话，您是在XXX城市上牌吗？</span>
        <el-radio-group v-model="radio2">
            <el-radio :label="3">是</el-radio>
            <el-radio :label="6">否</el-radio>
        </el-radio-group>
        </el-col>
    </el-row>
     <el-row >
        <el-col :span="6">
        <span>Q5　请问您是否还考虑了其它品牌的车型呢？</span>
        <el-radio-group v-model="radio3">
            <el-radio :label="3">是</el-radio>
            <el-radio :label="6">否</el-radio>
        </el-radio-group>
        </el-col>
    </el-row>
     <el-row >
        <el-col :span="6">
          <el-button>提交</el-button>
        </el-col>
    </el-row>
      </el-form>
    </div>
    
      
  </div>
</template>
    
  
<script>
// import SideBar from "@/components/crm/SideBar";
// import NavBar from "@/components/crm/NavBar";


import ContactName from "@/components/crm/textbox/Public/customerInfos/ContactName.vue";
import PhoneNumber from "@/components/crm/textbox/Public/customerInfos/PhoneNumber";
import Sex from "@/components/crm/Select/Common/Customer/Sex.vue";



import Table from "@/components/crm/table/Table";
import { crmApis } from "@/api/graphQLApiList/crm";

export default {
  name: "crmQuestionSurvey",
  components: {
    ContactName,
    PhoneNumber,
    Sex,
  },
  model:{

  },
  
  props:{
    
  },
  data() {
    
  },
  methods: {
    query: function() {
      // this.queryObj.params=this.$refs.applytime.value;
      // console.log(crmApis.csBuComplaintDelayQueryFindAll.ServiceCode)
      // this.queryObj.params.serverOrder=this.$refs.sermenu.input;
      // this.queryObj.params.delayStatus=this.delayreason;
      // this.$refs.table.getDatas()
    },
    reset: function() {
      // this.$refs.applytime.reset();
      // this.$refs.sermenu.reset();
      // this.delayreason=''
    },
    // changeToggleParam() {
    //   this.toggleParam = !this.toggleParam;
    // }
  }
};

</script>
<style>
.filter-params .el-form-item__label {
  margin-right: 0px;
}
.query-params .el-col{
  margin-bottom: 0px;
}
</style>
