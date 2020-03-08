<template>
  <div class="app-container app-container-table">
    <div class="filter-container filter-title">商机信息</div>
    <div class="filter-container filter-params query-params">
      <el-form label-position="right">
        <el-row>
          <el-col :span="22">
            <el-row>
              <el-col :span="7">
                <ApplyExtensionTimes :ApplyExtensionTimes="applyEx" ref="applytime"></ApplyExtensionTimes>
              </el-col>
              <el-col :span="6">
                <ServiceMenuNumber :ServiceMenuNumber="serviceMenu" ref="sermenu" />
              </el-col>
              <el-col :span="7">
                <el-form-item label="申请延期原因">
                  <el-input v-model="delayreason" placeholder="请输入"></el-input>
                </el-form-item>
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
      </el-form>
    </div>
  </div>
</template>
<script>
import ApplyExtensionTimes from "@/components/crm/Time/ApplyExtensionTimes";
import ServiceMenuNumber from "@/components/crm/textbox/Public/ServiceMenuNumber";
import Table from "@/components/crm/table/Table";
import { crmApis } from "@/api/graphQLApiList/crm";
import RelatedBenchmarkCar from "@/components/crm/EjectWindows/RelatedBenchmarkCar";
import  tp_BusinessInfo  from "@/components/crm/Template/tp_BusinessInfo.vue"
export default {
  name: "tp_BusinessInfo",
  components: {
    ApplyExtensionTimes,
    ServiceMenuNumber,
    Table,
    RelatedBenchmarkCar
  },
  data() {
    return {
      toggleParam: false,
      delayreason: "",
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
    }
  }
};
</script>
<style scoped>
.filter-params .el-form-item__label {
  margin-right: 0px;
}
.query-params .el-col{
  margin-bottom: 0px;
}
</style>
