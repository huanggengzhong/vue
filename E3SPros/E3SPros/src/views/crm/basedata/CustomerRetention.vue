<!--
* 描述: 客户维护  维护客户信息
* 创建人: zouzx
* 创建时间: 2019-07-24
* 记录：
*  20190724 新建 zouzx
-->
<template>
<div class="app-container app-container-table">
  <div class="filter-container filter-button">
    <el-button type="primary" @click="query">查询</el-button>
    <el-button @click="showdialog">新增</el-button>
    <el-button @click="reset">重置</el-button>
  </div>
  <div class="filter-container filter-title">查询条件</div>
  <div class="filter-container filter-params">
    <el-form label-position="right">
      <el-row>
          <el-col :span="6"><txt_CustomerName ref="txt_CustomerName" :txt_CustomerName="1"/></el-col>
          <el-col :span="6"><PhoneNumber ref="PhoneNumber" :PhoneNumber="1"/></el-col>
          <el-col :span="6"><CarBrandNumber ref="CarBrandNumber" :CarBrandNumber="1"/></el-col>
          <el-col :span="6"><VINCode ref="VINCode" :VINCode='1'/></el-col>
      </el-row>
      <el-row>
          <el-col :span="6"><EngineNumber ref="EngineNumber" :EngineNumber='1'></EngineNumber></el-col>
      </el-row>
    </el-form>
    <el-dialog :visible.sync="dialogVisible" :width="width" class="dialog" title="客户维护明细" >
      <el-form label-position="right">
        <el-row>
          <el-col :span="6"><txt_CustomerName ref="txt_CustomerName" :txt_CustomerName='1'/></el-col>
          <el-col :span="6"><Sex ref="Sex"/></el-col>
          <el-col :span="6"><Birthday ref="Birthday" :Birthday='1'/></el-col>
          <el-col :span="6"><ITCard ref="ITCard" :ITCard='1'/></el-col>
        </el-row>
        <el-row>
          <el-col :span="6"><PhoneNumber ref="PhoneNumber" :PhoneNumber='1'/></el-col>
          <el-col :span="6"><MobilePhone ref="MobilePhone" :MobilePhone='1'/></el-col>
          <el-col :span="6"><HomePhone ref="HomePhone" :HomePhone='1'/></el-col>
          <el-col :span="6"><OfficePhone ref="OfficePhone" :OfficePhone='1'/></el-col>
        </el-row>
        <el-row>
          <el-col :span="6"><Province ref="Province"/></el-col>
          <el-col :span="6"><City ref="City"/></el-col>
          <el-col :span="6"><District ref="District"/></el-col>
          <el-col :span="6"><EMS ref="EMS" :EMS='1'/></el-col>
        </el-row>
        <el-row>
          <el-col :span="6"><txt_DetailAddress ref="txt_DetailAddress" :txt_DetailAddress="1"/></el-col>
          <el-col :span="6"></el-col>
          <el-col :span="6"></el-col>
          <el-col :span="6">
            <el-button type="primary" @click="handleSelect">保存</el-button>
            <el-button @click="showdialog2">添加车辆</el-button>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24"><Table v-bind:tabledatas="tabledata2" ref="table" :data="list"></Table></el-col>
        </el-row>
      </el-form>
    </el-dialog>
    <el-dialog :visible.sync="dialogVisible2" :width="width" class="dialog" title="添加车辆" >
      <el-form label-position="right">
        <el-row>
          <el-col :span="8"><el-form-item label="当前客户"><el-input v-model="input"></el-input></el-form-item></el-col>
          <el-col :span="8"><el-form-item label="当前电话"><el-input v-model="input"></el-input></el-form-item></el-col>
        </el-row>
        <el-row>
          <el-col :span="8"><CarBrandNumber ref="CarBrandNumber" :CarBrandNumber="1"></CarBrandNumber></el-col>
          <el-col :span="8"><VINCode ref="VINCode" :VINCode='1'></VINCode></el-col>
          <el-col :span="8"><EngineNumber ref="EngineNumber" :EngineNumber='1'></EngineNumber></el-col>
        </el-row>
        <el-row>
          <el-col :span="15"></el-col>
          <el-col :span="9">
            <el-button type="primary" @click="1">查询</el-button>
            <el-button @click="handleSelect2">变更车主</el-button>
            <el-button @click="handleSelect2">新增用车人</el-button>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24"><Table v-bind:tabledatas="tabledata3" ref="table" :data="list"></Table></el-col>
        </el-row>
      </el-form>
    </el-dialog>
  </div>
  <div class="filter-container filter-title">查询结果</div>
  <Table v-bind:tabledatas="tabledata" ref="table" :data="list"></Table>
</div>
</template>
<script>
import { getOrgManageList } from '@/api/ve/organization'
import Table from "@/components/crm/table/Table";
import txt_CustomerName from "@/components/crm/textbox/Public/customerInfos/txt_CustomerName";//客户名称
import PhoneNumber from "@/components/crm/textbox/Public/customerInfos/PhoneNumber";//电话
import CarBrandNumber from "@/components/crm/textbox/Public/carInfo/CarBrandNumber";//车牌号
import VINCode from "@/components/crm/textbox/Public/carInfo/VINCode";//VIN码
import EngineNumber from '@/components/crm/textbox/Public/customerInfos/EngineNumber';//发动机号
import Sex from '@/components/crm/Select/Common/Customer/Sex';//性别
import Birthday from '@/components/crm/Time/Birthday';
import ITCard from '@/components/crm/textbox/Public/customerInfos/ITCard';//身份证
import MobilePhone from '@/components/crm/textbox/Public/customerInfos/MobilePhone';//移动电话
import HomePhone from '@/components/crm/textbox/Public/customerInfos/HomePhone';//家庭电话
import OfficePhone from '@/components/crm/textbox/Public/customerInfos/OfficePhone';//办公电话
import Province from '@/components/crm/Select/Common/Province';//省份
import City from '@/components/crm/Select/Common/City';//城市
import District from '@/components/crm/Select/Common/District';//区县
import EMS from '@/components/crm/textbox/Public/customerInfos/EMS';//邮政编码
import txt_DetailAddress from '@/components/crm/textbox/txt_DetailAddress';//详细地址
export default {
  name: "CustomerRetention",
  components: {
    Table,
    txt_CustomerName,
    PhoneNumber,
    CarBrandNumber,
    VINCode,
    EngineNumber,
    Sex,
    Birthday,
    ITCard,
    MobilePhone,
    HomePhone,
    OfficePhone,
    Province,
    City,
    District,
    EMS,
    txt_DetailAddress
  },
  mounted: function() {
    this.tabledata.params.code=this.$refs.txt_CustomerName.value;
  },
  methods: {
    showdialog: function() {
      let that = this;
      console.log("进来了");
      that.dialogVisible = true;
    },
    showdialog2: function() {
      let that = this;
      console.log("进来了");
      that.dialogVisible2 = true;
    },
    query: function() {
      this.$refs.table=true
      getOrgManageList(this.params).then(response => {
        this.list = response.data.data.mdsSupplyVINCodeQueryByPage.rows
        this.$refs.table = false
      })
    }, //查询网格，实际方法在组件里，这里只是调了一下
    handleSelect: function() {
      let that = this;
      that.input = this.$refs.table.rowData.name;
      that.dialogVisible = false;
    },
    handleSelect2: function() {
      let that = this;
      that.input = this.$refs.table.rowData.name;
      that.dialogVisible2 = false;
    },
    reset: function() {
      let that = this;
      that.input = "";
    }
  },
  data() {
    return {
      input: "",
      width: "900px",
      heigh: "580px",
      dialogVisible: false,
      dialogVisible2: false,
      form: {
        task: ""
      },
      formLabelWidth: "100px",
      tabledata: {
        flag: true,
        colnames: [
          { label: "客户名称", value: "" },
          { label: "电话", value: "" },
          { label: "备用电话", value: "" },
          { label: "性别", value: "" },
          { label: "是否车主", value: "" },
          { label: "车辆品牌", value: "" },
          { label: "车系", value: "" },
          { label: "车型名称", value: "" },
          { label: "车牌号", value: "" },
          { label: "VIN码", value: "" },
          { label: "发动机号", value: "" },
          { label: "省份", value: "" },
          { label: "城市", value: "" },
          { label: "区县", value: "" }
        ],
        params: { code: "1" },
        isoperat: true,
        url:'/table',
        havedistrbute: false,
        haveSelected:false,
        haveEdit: true,
        haveDel: true,
      },
      tabledata2: {
        flag: true,
        colnames: [
          { label: "客户名称", value: "" },
          { label: "电话", value: "" },
          { label: "备用电话", value: "" },
          { label: "性别", value: "" },
          { label: "是否车主", value: "" },
          { label: "车辆品牌", value: "" },
          { label: "车系", value: "" },
          { label: "车型名称", value: "" },
          { label: "车牌号", value: "" },
          { label: "VIN码", value: "" },
          { label: "发动机号", value: "" },
          { label: "省份", value: "" },
          { label: "城市", value: "" },
          { label: "区县", value: "" }
        ],
        params: { code: "1" },
        isoperat: true,
        url:'/table',
        havedistrbute: false,
        haveSelected:false,
        haveEdit: true,
        haveDel: true,
      },
      tabledata3: {
        flag: true,
        colnames: [
          { label: "客户名称", value: "" },
          { label: "电话", value: "" },
          { label: "备用电话", value: "" },
          { label: "性别", value: "" },
          { label: "是否车主", value: "" },
          { label: "车辆品牌", value: "" },
          { label: "车系", value: "" },
          { label: "车型名称", value: "" },
          { label: "车牌号", value: "" },
          { label: "VIN码", value: "" },
          { label: "发动机号", value: "" },
          { label: "省份", value: "" },
          { label: "城市", value: "" },
          { label: "区县", value: "" }
        ],
        params: { code: "1" },
        isoperat: false,
        url:'/table',
        havedistrbute: false,
        haveSelected:false,
        haveEdit: false,
        haveDel: false,
      },
      child:{
        input:''
      }
    };
  }
};
</script>
<style>
.filter-params .el-form-item__label{
  margin-right: 0px;
}
</style>
