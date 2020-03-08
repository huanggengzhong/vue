<template>
  <div class="app-container app-container-table">

    <div class="filter-container filter-title">商机信息</div>
    <div class="filter-container filter-params query-params">
      
      <el-form label-position="left">
        <el-row>
          <!-- <el-col :span="24">
            <el-row>
              <el-col :span="2">
                <el-button   @click="showMainInfo">商机主要信息</el-button>
              </el-col>
              <el-col :span="2">
                <el-button  @click="showSecondInfo" >商机次要信息</el-button> 
              </el-col>
            </el-row>
  
          </el-col> -->

          <el-col :span="24">
            <el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
              <el-tab-pane label="商机主要信息" name="first">
                <el-row >
                  <el-col :span="24">
                    <tp_OpportunityMainInfo ></tp_OpportunityMainInfo>
                  </el-col>
                </el-row>
              </el-tab-pane>
              <el-tab-pane label="商机次要信息" name="second">
                  <tp_BusinessOpportunitysecondInformation ></tp_BusinessOpportunitysecondInformation>
              </el-tab-pane>
            </el-tabs>
          </el-col>
        </el-row>

        



      </el-form>
      <!-- <tp_OpportunityMainInfo></tp_OpportunityMainInfo> -->

    </div>


  </div>
</template>
<script>
import ApplyExtensionTimes from "@/components/crm/Time/ApplyExtensionTimes";
import ServiceMenuNumber from "@/components/crm/textbox/Public/ServiceMenuNumber";
import Table from "@/components/crm/table/Table";
import { crmApis } from "@/api/graphQLApiList/crm";
import RelatedBenchmarkCar from "@/components/crm/EjectWindows/RelatedBenchmarkCar";
import SourceOfChannel from "@/components/crm/EjectWindows/SourceOfChannel"
import tp_OpportunityMainInfo from "@/components/crm/Template/tp_OpportunityMainInfo"
import tp_BusinessOpportunitysecondInformation from "@/components/crm/Template/tp_BusinessOpportunitysecondInformation"


export default {
  name: "tp_BusinessInfo",
  components: {
    ApplyExtensionTimes,
    ServiceMenuNumber,
    Table,
    RelatedBenchmarkCar,
    tp_OpportunityMainInfo,
    tp_BusinessOpportunitysecondInformation,
  },
  data() {
    return {
      toggleParam: false,
      delayreason: "",
      mainInfo : true,
      secondInfo : false,
      activeName2: 'first',
      tabledatas: {
        // 操作列
        isoperat: false,
        havedistrbute: false,
        haveEdit: false,
        haveDel: false,
        colnames: [
          { label: "服务单号", value: "serverOrder" },
          { label: "申请延期时间", value: "createdDate" },
          { label: "申请延期原因", value: "delayReson" }
        ],
        queryObj: {
          // .后面是服务编码，.前面固定写死
          apiConfig: crmApis.csBuComplaintDelayQueryFindAll,
          apiQueryRow: ['serverOrder','createdDate','delayReson'],
          params:{delayId:'',createdDateStart:'',createdDateEnd:'',serverOrder:'',delayStatus:''}
        }
      },
      applyEx:{
        value:''
      },
      serviceMenu:{
        input:''
      }
    };
  },
  methods: {
    query: function() {
      this.queryObj.params=this.$refs.applytime.value;
      console.log(crmApis.csBuComplaintDelayQueryFindAll.ServiceCode)
      this.queryObj.params.serverOrder=this.$refs.sermenu.input;
      this.queryObj.params.delayStatus=this.delayreason;
      this.$refs.table.getDatas()
    },
    reset: function() {
      this.$refs.applytime.reset();
      this.$refs.sermenu.reset();
      this.delayreason=''
    },
    changeToggleParam() {
      this.toggleParam = !this.toggleParam;
    },
    showMainInfo: function (){
      this.mainInfo = true;
      this.secondInfo = false;
    },
    showSecondInfo: function (){
      this.mainInfo = false;
      this.secondInfo = true;
    },
    handleClick(tab, event) {
        console.log(tab, event);
    },
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
