<template>
  <section>
      <!-- 调用组件 -->
      <el-form label-position="right">
        <el-row>
          <el-col :span="6">
            <CustomersName_Add :CustomersName_Add="CustomersNameAdd" ref="CustomersName_Add"></CustomersName_Add>
          </el-col>
          <el-col :span="6">
            <Sex :Sex="Sexs" ref="Sex"></Sex>
          </el-col>
          <el-col :span="6">
            <PhoneNumber :PhoneNumber="PhoneNumber" ref="PhoneNumber"></PhoneNumber>
          </el-col>
          <el-col :span="6">
            <BackupPhone :BackupPhone="BackupPhone" ref="BackupPhone"></BackupPhone>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="6">
            <UseCarName :UseCarName="UName" ref="UseCarName"></UseCarName>
          </el-col>
          <el-col :span="6">
             <UserCarSex :UserCarSex="UCarSex" ref="UCarSex"></UserCarSex>
          </el-col>
          <el-col :span="6">
            <UseCarPhone :UseCarPhone="UPhone" ref="UseCarPhone"></UseCarPhone>
          </el-col>
          <el-col :span="6">
            <UseCarBackupPhone :UseCarBackupPhone="UBackupPhone" ref="UseCarBackupPhone"></UseCarBackupPhone>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="6">
            <CarSeries :CarSeries="CSeries" ref="CarSeries"></CarSeries>
          </el-col>
          <el-col :span="6">
             <CarBrandNumber :CarBrandNumber="CBrandNumber" ref="CarBrandNumber"></CarBrandNumber>
          </el-col>
          <el-col :span="6">
              <VINCode :VINCode="VIN" ref="VINCode"></VINCode>
          </el-col>
          <el-col :span="6">
           <EngineNumber :EngineNumber="ENumber"  ref="EngineNumber"></EngineNumber>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="6">
            <CarBrand :CarBrand="CBrand" ref="CarBrand"></CarBrand>
          </el-col>
          <el-col :span="6">
             <CarModel :CarModel="CModel" ref="CarModel"></CarModel>
          </el-col>
          <el-col :span="6">
             <GearBoxName :GearBoxName="GBoxName" ref="GearBoxName"></GearBoxName>
          </el-col>
          <el-col :span="6">
            <GearBoxNumber :GearBoxNumber="GBoxNumber" ref="GearBoxNumber"></GearBoxNumber>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="6">
            <LeakMount :LeakMount="LMount" ref="LeakMount"></LeakMount>
          </el-col>
          <el-col :span="6">
            <PhoneAttribution :PhoneAttribution="PAttribution" ref="PhoneAttribution"></PhoneAttribution>
          </el-col>
          <el-col :span="6" >
            <el-button type="primary" @click="reset" style="float:right">号码归属地</el-button>
          </el-col>
          <el-col :span="6" >
            <el-button type="primary" @click="query" style="float:right">车辆归属地</el-button>
          </el-col>
        </el-row>
      </el-form>
     
   </section>
</template>

<style scoped>
</style>

<script>
import CustomersName_Add from "@/components/crm/EjectWindows/CustomersName_Add.vue";
import Sex from "@/components/crm/Select/Common/Customer/Sex.vue";
import PhoneNumber from "@/components/crm/textbox/Public/customerInfos/PhoneNumber.vue";
import BackupPhone from "@/components/crm/textbox/Public/customerInfos/BackupPhone.vue";
import UseCarName from "@/components/crm/textbox/Public/customerInfos/UseCarName.vue";
import UserCarSex from "@/components/crm/textbox/Public/customerInfos/UserCarSex.vue";
import UseCarPhone from "@/components/crm/textbox/Public/customerInfos/UseCarPhone.vue";
import UseCarBackupPhone from "@/components/crm/textbox/Public/customerInfos/UseCarBackupPhone.vue";
import CarSeries from "@/components/crm/textbox/Public/carInfo/CarSeries.vue";
import CarBrandNumber from "@/components/crm/textbox/Public/carInfo/CarBrandNumber.vue";
import VINCode from "@/components/crm/textbox/Public/carInfo/VINCode.vue";
import EngineNumber from "@/components/crm/textbox/Public/customerInfos/EngineNumber.vue";
import CarBrand from "@/components/crm/textbox/Public/carInfo/CarBrand.vue";
import CarModel from "@/components/crm/textbox/Public/carInfo/CarModel.vue";
import GearBoxName from "@/components/crm/textbox/Public/carInfo/GearBoxName.vue";
import GearBoxNumber from "@/components/crm/textbox/Public/carInfo/GearBoxNumber.vue";
import LeakMount from "@/components/crm/textbox/Public/carInfo/LeakMount.vue";
import PhoneAttribution from "@/components/crm/textbox/Public/customerInfos/PhoneAttribution.vue";
export default {
  name: "tp_CustCarInfo",
  components: {
    CustomersName_Add,
    Sex,
    PhoneNumber,
    BackupPhone,
    UseCarName,
    UserCarSex,
    UseCarPhone,
    UseCarBackupPhone,
    CarSeries,
    CarBrandNumber,
    VINCode,
    EngineNumber,
    CarBrand,
    CarModel,
    GearBoxName,
    GearBoxNumber,
    LeakMount,
    PhoneAttribution
  },
  mounted: function() {
  },
  methods: {
    
  },
  data() {
    return {
      tabledata: {
        flag: true,
        colnames: [
        ],
        params: { code: "1" },
        isoperat: true,
        url:
          "http://localhost:10000/ly/mp/busicen/orc/graphql.do?token=7791d285050f451aa393f718ee08e73f",
        havedistrbute: false,
        haveSelected: false,
        haveEdit: true,
        haveDel: false
      },
      CustomersNameAdd: {
        value: "",
        readonly: true
      },
      Sexs: {
        value: ""
      },
       PhoneNumber: {
        input: ""
      },
       BackupPhone: {
        input: ""
      },
         UName: {
        input: ""
      },
          UCarSex: {
        value: ""
      },
        UPhone: {
        input: ""
      },
       UBackupPhone: {
        input: ""
      },
        CSeries: {
        input: ""
      },
       CBrandNumber: {
        input: ""
      },
       VIN: {
        input: ""
      },
       ENumber: {
        input: ""
      },
       CBrand: {
        input: ""
      },
       CModel: {
        input: ""
      },
         GBoxName: {
        input: ""
      },
        GBoxNumber: {
        input: ""
      },
       LMount: {
        input: ""
      },
       PAttribution: {
        input: ""
      },
    };
  }
};
</script>
<style scoped>
.button {
  float: right;
}
.fromunit {
  float: left;
}
.el-form-item {
  margin-bottom: 10px;
}
.el-breadcrumb {
  margin-bottom: 10px;
}
</style>
