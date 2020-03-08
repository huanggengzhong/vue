<template>
  <div>
    <!-- <router-view /> -->
    <el-row>
      <el-col :span="24">
        <div class="grid-content bg-purple-dark">
          <el-row>
            <el-col :span="6">
              <div class="grid-content bg-purple">
                <EnglishName :EnglishName="test" ></EnglishName>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content bg-purple-light">
                <Birthday></Birthday>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content bg-purple">
                <CustomerType></CustomerType>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content bg-purple-light">
                <ConvenientContactTime></ConvenientContactTime>
              </div>
            </el-col>
          </el-row>

          <el-row>
            <el-col :span="6">
              <div class="grid-content bg-purple">
                <Province></Province>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content bg-purple-light">
                <City></City>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content bg-purple">
                <District></District>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content bg-purple-light">
                <EMS :EMS="test"></EMS>
              </div>
            </el-col>
          </el-row>

          <el-row :gutter="0">
            <el-col :span="12">
              <div class="grid-content bg-purple">
                <txt_DetailAddress :txt_DetailAddress="test"></txt_DetailAddress>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content bg-purple">
                <CertificateType></CertificateType>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content bg-purple-light">
                <CertificateNumber :CertificateNumber="test"></CertificateNumber>
              </div>
            </el-col>
          </el-row>

          <el-row>
            <el-col :span="6">
              <div class="grid-content bg-purple">
                <Education></Education>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content bg-purple-light">
                <Industry></Industry>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content bg-purple"></div>
              <Career></Career>
            </el-col>
            <el-col :span="6">
              <div class="grid-content bg-purple-light">
                <ComanyFullName></ComanyFullName>
              </div>
            </el-col>
          </el-row>

          <el-row>
            <el-col :span="6">
              <div class="grid-content bg-purple">
                <AnnualHouseholdIncome></AnnualHouseholdIncome>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content bg-purple-light">
                <LicenseType></LicenseType>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content bg-purple">
                <DrivingAge></DrivingAge>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content bg-purple-light">
                <Interest></Interest>
              </div>
            </el-col>
          </el-row>

          <el-row>
            <el-col :span="6">
              <div class="grid-content bg-purple">
                <IntentionalPrice></IntentionalPrice>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content bg-purple-light">
                <CarPurchaseWay></CarPurchaseWay>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content bg-purple"></div>
              <PurchaseMethod></PurchaseMethod>
             
            </el-col>
            <el-col :span="6">
              <div class="grid-content bg-purple-light">
                 <IntentionalAppearanceColor></IntentionalAppearanceColor>
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="6">
              <div class="grid-content bg-purple-dark">
                <IntentionalInteriorColor></IntentionalInteriorColor>
              </div>
            </el-col>
          </el-row>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import EnglishName from "@/components/crm/textbox/Clue/CallCenterClue/EnglishName";
import Birthday from "@/components/crm/Time/Birthday";
import CustomerType from "@/components/crm/Select/Common/Customer/CustomerType";
import ConvenientContactTime from "@/components/crm/Select/Common/Customer/ConvenientContactTime";
import Province from "@/components/crm/Select/Common/Province";
import City from "@/components/crm/Select/Common/City";
import District from "@/components/crm/Select/Common/District";
import EMS from "@/components/crm/textbox/Public/customerInfos/EMS";
import txt_DetailAddress from "@/components/crm/textbox/txt_DetailAddress";
import CertificateType from "@/components/crm/Select/Common/KeepAFile/CertificateType";

//import  from "@/"
import CertificateNumber from "@/components/crm/textbox/Public/customerInfos/CertificateNumber";
import Education from "@/components/crm/Select/CallCenterClue/Education";
import Industry from "@/components/crm/Select/Clue/CallCenterClue/Industry";
import Career from "@/components/crm/Select/Clue/CallCenterClue/Career";
import ComanyFullName from "@/components/crm/textbox/Public/customerInfos/ComanyFullName";
import AnnualHouseholdIncome from "@/components/crm/Select/Clue/CallCenterClue/AnnualHouseholdIncome";
import LicenseType from "@/components/crm/Select/Clue/CallCenterClue/LicenseType";
import DrivingAge from "@/components/crm/Select/Common/Customer/DrivingAge";
import Interest from "@/components/crm/EjectWindows/Interest";
import IntentionalPrice from "@/components/crm/Select/Common/Customer/IntentionalPrice";
import CarPurchaseWay from "@/components/crm/Select/Clue/CallCenterClue/CarPurchaseWay";
import IntentionalAppearanceColor from "@/components/crm/Select/Clue/CallCenterClue/IntentionalAppearanceColor";
import IntentionalInteriorColor from "@/components/crm/Select/Clue/CallCenterClue/IntentionalInteriorColor";
import PurchaseMethod from "@/components/crm/Select/CallCenterClue/PurchaseMethod";

export default {
  name: "tp_ClueDetails_calcenterclue",
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
    EnglishName,
    Birthday,
    CustomerType,
    ConvenientContactTime,
    Province,
    City,
    District,
    EMS,
    txt_DetailAddress,
    CertificateType,
    CertificateNumber,
    Education,
    Industry,
    Career,
    ComanyFullName,
    AnnualHouseholdIncome,
    LicenseType,
    DrivingAge,
    Interest,
    IntentionalPrice,
    CarPurchaseWay,
    IntentionalAppearanceColor,
    IntentionalInteriorColor,
    PurchaseMethod
  }
};
</script >



<style scoped>
</style>
