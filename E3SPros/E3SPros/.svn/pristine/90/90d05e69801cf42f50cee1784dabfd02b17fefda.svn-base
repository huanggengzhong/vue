<template>
  <div class="app-container app-container-table" ref="crmArea">
    <div class="filter-container filter-button">
      <el-button type="primary" @click="callout">外呼</el-button>
      <el-button type="primary" @click="save('form')">保存</el-button>
      <el-button type="primary" @click="closeMenue">结束回访</el-button>
      <el-button type="primary" @click="jumpToNew">新建服务单</el-button>
    </div>
    
    <div class="filter-container filter-params-crm">
      <el-form label-position="right" ref="form">
        <el-row>
          <el-col :span="22">
            <el-row>
              <el-col :span="6">
              <txt_CustomerName :txt_CustomerName="txt_CustomerName" ref="custname"></txt_CustomerName>
              </el-col>

              
              <el-col :span="6" >
                <el-form disabled>
               <txt_CallingNumber  :txt_CallingNumber="txt_CallingNumber" ref="callnumber"></txt_CallingNumber>
                </el-form>
              </el-col>
              

              <el-col :span="6">
              <ContactStatus :ContactStatus="ContactStatus" ref="contacstatus"></ContactStatus>
              </el-col>

              <el-col :span="6">
                <ReturnVisitTime :ReturnVisitTime_single="applyEx" ref="applytime"></ReturnVisitTime>
              </el-col>
            </el-row>
          </el-col>
           <!-- <el-col :span="2">
            <el-button icon="el-icon-plus" @click="changeToggleParam" class="moreParam">更多</el-button>
          </el-col>
          <el-col :span="22" v-show="toggleParam" class="toggleParam">
            <el-row>
              
            </el-row>
          </el-col> -->
        </el-row>

<!-- v-if="toggleParam" -->
        <el-row >
          <el-col :span="22">
            <el-row>
              
              <el-col :span="6">
                <el-form disabled>
                <txt_ReturnVisitNum :txt_ReturnVisitNum="ReturnVisitNum" ref="ReturnVisitNum"></txt_ReturnVisitNum>
                </el-form >
              </el-col>
              <el-col :span="6">
              <Sex :Sex="sex" ref="sex"></Sex>
              </el-col>
              <!-- <el-col :span="6">
              <txt_Remarks></txt_Remarks>
              </el-col> -->
              <el-col :span="12" class="long-col">
              <Remarks :Remarks="remark" ref="remark"></Remarks>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
        <outcall :outCall="outCall" ref="outCall"></outcall>

      </el-form>
    </div>

    
    <Table :tabledatas="tabledatas"></Table>
  </div>
</template>
<script>
import ApplyExtensionTimes from "@/components/crm/Time/ApplyExtensionTimes";
import ServiceMenuNumber from "@/components/crm/textbox/Public/ServiceMenuNumber";
import Table from "@/components/crm/table/Table";
import { crmApis } from "@/api/graphQLApiList/crm";
import RelatedBenchmarkCar from "@/components/crm/EjectWindows/RelatedBenchmarkCar";
import txt_CustomerName from "@/components/crm/textbox/Public/customerInfos/txt_CustomerName"
import txt_CallingNumber from "@/components/crm/textbox/Public/txt_CallingNumber"
import Sex from "@/components/crm/Select/Common/Customer/Sex"
import ReturnVisitTime from "@/components/crm/Time/ReturnVisitTime_single"
import ContactStatus from "@/components/crm/Select/Clue/ContactStatus"
import txt_ReturnVisitNum from "@/components/crm/textbox/Public/txt_ReturnVisitNum"
import txt_Remarks from "@/components/crm/textbox/Complaint/txt_Remarks"
import Remarks from "@/components/crm/textbox/Complaint/Remarks.vue"
import outcall from "@/components/crm/crmEjectWindows/outCall"

export default {
  name: "LostPhoneCallbackDeal",
  components: {
    ApplyExtensionTimes,
    ServiceMenuNumber,
    Table,
    RelatedBenchmarkCar,
    txt_CustomerName,
    txt_CallingNumber,
    Sex,
    ReturnVisitTime,
    ContactStatus,
    txt_ReturnVisitNum,
    txt_Remarks,
    Remarks,
    outcall
  },
  data() {
    return {
      outCall:{
        custname:'',
        telphone:'',
        callflag:false
      },
      toggleParam: false,
      delayreason: "",
      toggleParam : false,
      tabledatas: {
        // 操作列
        isoperat: false,
        havedistrbute: false,
        haveEdit: false,
        haveDel: false,
        colnames: [
          { label: "客户姓名", value: "name" },
          { label: "主叫号码", value: "reviewAddr" },
          { label: "客户性别", value: "sex" },
          { label: "回访时间", value: "reviewTimes" },
          { label: "接触状态", value: "touchStatusName" },
          { label: "意向车系", value: "intercarseries" },
          { label: "备注", value: "remark" },
        ],
        queryObj: {
          // .后面是服务编码，.前面固定写死
          apiConfig: crmApis.getLostTelInfo,
          apiQueryRow: ['reviewAddr','reviewTimes','touchStatusName','reviewId'],
          params:{}
        }
      },
      txt_CustomerName:{
        input:''
      },
      ContactStatus:{
        value:''
      },
      applyEx:{
        value:''
      },
      ReturnVisitNum:{
        input:""
      },
      sex:{
        value:''
      },
      txt_CallingNumber:{
        input:''
      },
      remark:{
        input:""
      }
    };
  },
  methods: {
    query: function() {
      let that=this
      that.tabledatas.queryObj.params.ciccallid=that.$router.params.ciccallid;
      that.$refs.table.getDatas()
    },
    save(formName){
      let that = this;
      let flag = false;
      let config = this.config;
      config = {
        ContactStatus: [
          true,
          this.$crmcf.crmRegExp("empty"),
          "value",
          that.$refs.contacstatus.value,
          "接触状态",
          "不能为空"
        ]
      };
      this.$crmcf.validForm(that, formName, config, function(flag) {
        if (flag) {
          let variables = {
            //当前中台使用的名称有dataInfo、info，具体查看API文档
            dataInfo: {
              reviewId: '',
              touchStatus: that.$refs.contacstatus.value,
              reviewTimes: '',
              reviewResult: '',
              remark: "0"
            }
          };
          that.$crmcf.mutationSumbit(
            that,
            variables,
            crmApis.saveLostTel,
            function() {
              // updateControlId = "";
              that.query();
            }
          )
        }
      });

    },
    jumpToNew(){
      let that=this
      let params={

      }
      that.$router.push({ name: "crmNewSerMenu", params: params });
    },
    closeMenue(){
      let that=this
      that.$crmcf.crmcloseView(that)
    },
    callout(){
      let that=this
      that.outCall.callflag=true
      that.outCall.custname=that.$refs.custname.input
      that.outCall.telphone=that.$refs.callnumber.input
      that.$refs.outCall.init()
    }
    // changeToggleParam() {
    //   this.toggleParam = !this.toggleParam;
    // }
  }
};
</script>
<style>
</style>
