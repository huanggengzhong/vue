<template>
  <el-form>
    <el-form-item>
      <div class="filter-container filter-title">基本信息</div>
      <el-row>
        <el-col :span="6">
          <CustomersName :CustomersName="CusName" ref="CustomersName"></CustomersName>
        </el-col>
        <el-col :span="6">
          <ContactPhone :ContactPhone="ConPhone" ref="ContactPhone"></ContactPhone>
        </el-col>
        <el-col :span="6">
          <Sex :Sex="Se" ref="Sex"></Sex>
        </el-col>
        <el-col :span="6">
          <Birthday :Birthday="BirDay" ref="Birthday"></Birthday>
          <!-- <ContactPhone ref="ContactPhone"></ContactPhone> -->
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="6">
          <Province :Province="Pr" ref="Province"></Province>
        </el-col>
        <el-col :span="6">
          <City :City="Ci" ref="City"></City>
        </el-col>
        <el-col :span="6">
          <District :District="Di" ref="District"></District>
        </el-col>
        <el-col :span="6">
          <Email :Email="mail" ref="Email"></Email>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="6">
          <CertificateType :CertificateType="CerType" ref="CertificateType"></CertificateType>
        </el-col>
        <el-col :span="6">
          <CertificateNumber :CertificateNumber="CerNumber" ref="CertificateNumber"></CertificateNumber>
        </el-col>
        <el-col :span="6">
          <OfficePhone :OfficePhone="OffPhone" ref="OfficePhone"></OfficePhone>
        </el-col>
        <el-col :span="6">
          <HomePhone :HomePhone="HomPhone" ref="HomePhone"></HomePhone>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <DetailAddress :txt_DetailAddress="DetAddress" ref="DetailAddress"></DetailAddress>
        </el-col>
      </el-row>
      <div class="filter-container filter-title">人车关系</div>
      <el-row>
        <el-col :span="6">
          <Related :Related="Relate" ref="Related"></Related>
        </el-col>
        <el-col :span="6">
          <IsUser :IsUser="IsU" ref="IsUser"></IsUser>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <Table v-bind:tabledatas="tabledata" ref="table"></Table>
        </el-col>
      </el-row>
    </el-form-item>
  </el-form>
</template>

<script>
import CustomersName from "@/components/crm/EjectWindows/CustomersName";
import ContactPhone from "@/components/crm/textbox/Public/customerInfos/ContactPhone";
import Sex from "@/components/crm/Select/Common/Customer/Sex";
import Birthday from "@/components/crm/Time/Birthday";
import Province from "@/components/crm/Select/Common/Province";
import City from "@/components/crm/Select/Common/City";
import District from "@/components/crm/Select/Common/District";
import Email from "@/components/crm/textbox/Public/customerInfos/Email";
import CertificateType from "@/components/crm/Select/Common/KeepAFile/CertificateType";
import CertificateNumber from "@/components/crm/textbox/Public/customerInfos/CertificateNumber";
import OfficePhone from "@/components/crm/textbox/Public/customerInfos/OfficePhone";
import HomePhone from "@/components/crm/textbox/Public/customerInfos/HomePhone";
import DetailAddress from "@/components/crm/textbox/txt_DetailAddress";
import table from "@/components/crm/table/Table";
import Related from "@/components/crm/Select/ONEID/sct_Related";
import IsUser from "@/components/crm/Select/ONEID/sct_IsUser";

export default {
  name: "tp_UpdateUser",
  components: {
    CustomersName,
    ContactPhone,
    Sex,
    Birthday,
    Province,
    City,
    District,
    Email,
    CertificateType,
    CertificateNumber,
    OfficePhone,
    HomePhone,
    DetailAddress,
    table,
    Related,
    IsUser
  },
  mounted: function() {
    this.getData(); //子组件赋值
  },
  methods: {
    getData: function() {

    }
  },
  data() {
    return {
      tabledata: {
        flag: true,
        colnames: [
          { label: "VIN", value: "VIN" },
          { label: "客户名称", value: "custName" },
          { label: "联系电话", value: "contactTel" },
          { label: "与车主关系", value: "" },
          { label: "类型", value: "" }
        ],
        params: { code: "1" },
        isoperat: true,
        url: "/table",
        havedistrbute: false,
        haveSelected: false,
        haveEdit: true,
        haveDel: true
      },
      CusName: {
        input: ""
      },
      ConPhone: {
        input: ""
      },
      Se: {
        value: ""
      },
      BirDay: {
        value: ""
      },
      Pr: {
        value: ""
      },
      Ci: {
        value: ""
      },
      Di: {
        value: ""
      },
      mail: {
        input: ""
      },
      CerType: {
        value: ""
      },
      CerNumber: {
        input: ""
      },
      OffPhone: {
        input: ""
      },
      HomPhone: {
        input: ""
      },
      DetAddress: {
        input: ""
      },
      Relate: {
        value: ""
      },
      IsU: {
        value: ""
      }
    };
  }
};
</script>
