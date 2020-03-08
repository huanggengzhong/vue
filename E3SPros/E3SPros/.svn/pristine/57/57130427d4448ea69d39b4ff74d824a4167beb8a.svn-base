<template>
<div class="filter-container filter-params query-params">
  <el-form label-position="right">
    <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
    <el-tab-pane label="客户信息" name="first">
      <el-row>
        <el-col :span="24">
          <el-row>
            <el-col :span="6">
            <Brand :Brand="brand" ref="brand"></Brand>
          </el-col>
          <el-col :span="6">
            <CertificateType :CertificateType="idtype" ref="idtype"></CertificateType>
          </el-col>
          <el-col :span="6">
            <CertificateNumber :CertificateNumber="idnum" ref="idnum"></CertificateNumber>
          </el-col>
          <el-col :span="6">
            <EMS :EMS="ems" ref="ems"></EMS>
          </el-col>
          </el-row>
      
        <el-row>
          <el-col :span="6">
            <el-form-item label="私人电话">
              <el-input v-model="form.input1" placeholder="请输入"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            
            <OfficePhone :OfficePhone="offiphone" ref="offiphone"></OfficePhone>
          </el-col>
          <el-col :span="6">
            <el-form-item label="传真">
              <el-input v-model="form.input2" placeholder="请输入"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="电子邮件">
              <el-input v-model="form.input3" placeholder="请输入"></el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="6">
            <el-form-item label="职业">
              <el-input v-model="form.input4" placeholder="请输入"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="职位">
              <el-input v-model="form.input5" placeholder="请输入"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="公司">
              <el-input v-model="form.input6" placeholder="请输入"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="教育背景">
              <el-input v-model="form.input7" placeholder="请输入"></el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="12">
            <el-form-item label="通讯地址">
              <el-input v-model="form.input8" placeholder="请输入"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        </el-col> 
        </el-row>
    </el-tab-pane>
    <el-tab-pane label="车辆信息" name="second">
      <el-row>
        <el-col :span="24">
          <Table :tabledatas="tabledata1" ref="table"></Table>
        </el-col>
      </el-row>
    </el-tab-pane>
    <el-tab-pane label="沟通记录" name="third">
      <el-row>
        <el-col :span="24">
          <Table :tabledatas="tabledata2" ref="table"></Table>
        </el-col>
      </el-row></el-tab-pane>
    <el-tab-pane label="线索信息" name="fourth">
      <el-row>
        <el-col :span="24">
          <Table :tabledatas="tabledata3" ref="table"></Table>
        </el-col>
      </el-row>
    </el-tab-pane>
  </el-tabs>
  </el-form>
</div>
</template>
<script>
import Brand from "@/components/crm/Select/Common/ResponsibleArea/Brand";
import CertificateType from "@/components/crm/Select/Common/KeepAFile/CertificateType";
import CertificateNumber from "@/components/crm/textbox/Public/customerInfos/CertificateNumber";

import EMS from "@/components/crm/textbox/Public/customerInfos/EMS";
import OfficePhone from "@/components/crm/textbox/Public/customerInfos/OfficePhone";
// import CertificateType from "@/components/crm/Select/Common/KeepAFile/CertificateType";
// import CertificateType from "@/components/crm/Select/Common/KeepAFile/CertificateType";
import CarBrandNumber from "@/components/crm/textbox/Public/carInfo/CarBrandNumber";
import VINCode from "@/components/crm/textbox/Public/carInfo/VINCode";
import CarSeries from "@/components/crm/textbox/Public/carInfo/CarSeries";
import CarModel from "@/components/crm/textbox/Public/carInfo/CarModel";
import Table from "@/components/crm/table/Table";

export default {
  name: "AgentExtendInfo",
  components: {
    Brand,
    CertificateType,
    CertificateNumber,
    EMS,
    OfficePhone,

    CarBrandNumber,
    VINCode,
    CarSeries,
    // IntentionalModel,
    // Descripts,
    CarModel,
    Table
  },
  data() {
    return {
      idtype:{
        value:''
      },
      idnum:{
        input:''
      },
      ems:{
        value:''
      },
      offiphone:{
        input:''
      },


      customerflag : false,
      carflag : false,
      contactflag : false,
      clueflag : false,
      form: {
        input1:'',
        input2:'',
        input3:'',
        input4:'',
        input5:'',
        input6:'',
        input7:'',
        input8:'',
      },
      tabledata1: {
        flag: true,
        colnames: [
          { label: "品牌", value: "date" },
          { label: "车牌号", value: "name" },
          { label: "VIN码", value: "jiancheng" },
          { label: "车系", value: "pinpai" },
          { label: "车型", value: "leixing" },
          { label: "颜色", value: "zhuangtai" },
          { label: "销售网点", value: "shengfen" },
          { label: "购车日期", value: "chengshi" }
        ],
        params: { code: "1" },
        isoperat: false,
        url: "/table",
        havedistrbute: false,
        haveEdit: false,
        haveDel: false
      },
       tabledata2: {
        flag: true,
        colnames: [
          { label: "沟通时间", value: "date" },
          { label: "业务类别", value: "name" },
          { label: "类别", value: "jiancheng" },
          { label: "沟通人", value: "pinpai" },
          { label: "沟通类型", value: "leixing" },
          { label: "沟通内容", value: "zhuangtai" },
          { label: "经销商简称", value: "shengfen" },
          { label: "信息来源", value: "shengfen" }
        ],
        params: { code: "1" },
        isoperat: false,
        url: "/table",
        havedistrbute: false,
        haveEdit: false,
        haveDel: false
      },
       tabledata3: {
        flag: true,
        colnames: [
          { label: "线索单号", value: "date" },
          { label: "客户姓名", value: "name" },
          { label: "单据状态", value: "jiancheng" },
          { label: "客户性别", value: "pinpai" },
          { label: "联系电话", value: "leixing" },
          { label: "意向级别", value: "zhuangtai" },
          { label: "活动名称", value: "shengfen" },
          { label: "信息来源", value: "shengfen" }
        ],
        params: { code: "1" },
        isoperat: false,
        url: "/table",
        havedistrbute: false,
        haveEdit: false,
        haveDel: false
      }
    };
  },
  methods: {
    customer: function() {
      let that = this;
      that.customerflag = true;
      that.carflag = false;
      that.contactflag = false;
      that.clueflag = false;
    },
    car: function() {
      let that = this;
      that.customerflag = false;
      that.carflag = true;
      that.contactflag = false;
      that.clueflag = false;
      
    },
    contact: function() {
      let that = this;
      that.customerflag = false;
      that.carflag = false;
      that.contactflag = true;
      that.clueflag = false;
    },
    clue: function() {
      let that = this;
      that.customerflag = false;
      that.carflag = false;
      that.contactflag = false;
      that.clueflag = true;
    },
    query: function() {
      this.tabledata1.params.code = this.$refs.proStatus.value; //从下拉框组件里取值传进网格组件中
      this.$refs.table.getData();
    },
  }
};
</script>
<style scoped>
.filter-params .el-form-item__label {
  margin-right: 0px;
}
.el-form-item .el-form-item__content {
  margin-left: 0px;
}  
</style>

