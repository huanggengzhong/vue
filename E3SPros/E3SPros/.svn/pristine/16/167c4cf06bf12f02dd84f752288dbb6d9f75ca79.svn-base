<!--服务类别维护_修改和新增 CQ-->
<template>
  <div class="app-container app-container-table">
    <div class="filter-container filter-button">
      <el-button type="primary" @click="add()">保存</el-button>
    </div>

    <div class="filter-container filter-params query-params">
      <el-form label-position="right">
        <!--第一行-->
        <el-row>
          <el-col :span="8">
            <TybeCode :TybeCode="TCode" ref="TybeCode"></TybeCode>
          </el-col>
          <el-col :span="8">
            <TypeName :TypeName="TName" ref="TypeName"></TypeName>
          </el-col>
          <el-col :span="8">
            <CategoryLevel :CategoryLevel="CLevel" ref="CategoryLevel"></CategoryLevel>
          </el-col>
        </el-row>
        <!--第二行-->
        <el-row>
          <el-col :span="8">
            <ServiceType :ServiceType="SType" ref="ServiceType"></ServiceType>
          </el-col>
          <el-col :span="8">
            <FatherClassCode :FatherClassCode="FClassCode" ref="FatherClassCode"></FatherClassCode>
          </el-col>
          <el-col :span="8">
            <Status :Status="Statu" ref="Status"></Status>
          </el-col>
        </el-row>
      </el-form>
    </div>
  </div>
</template>
<script>
import TybeCode from "@/components/crm/textbox/Public/ServiceTypeCare/TybeCode.vue";
import TypeName from "@/components/crm/textbox/Public/ServiceTypeCare/TypeName.vue";
import CategoryLevel from "@/components/crm/Select/Complaint/ServiceCategoryMaintenance/CategoryLevel.vue";
import ServiceType from "@/components/crm/Select/Complaint/ServiceType.vue";
import FatherClassCode from "@/components/crm/textbox/Public/ServiceTypeCare/FatherClassCode.vue";
import Status from "@/components/crm/Select/Common/Customer/Status.vue";
import { crmApis } from "@/api/graphQLApiList/crm";
export default {
  name: "ServiceTypeEdit",
  components: {
    Table,
    TybeCode,
    TypeName,
    CategoryLevel,
    ServiceType,
    FatherClassCode,
    Status
  },
  data() {
    return {
      toggleParam: false,
      tabledatas: {
        // 操作列
        isoperat: false,
        havedistrbute: false,
        haveEdit: false,
        haveDel: false,
        colnames: [],
        queryObj: {
          // .后面是服务编码，.前面固定写死
          apiConfig: crmApis.csBuComplaintDelayQueryFindAll,
          apiQueryRow: [
            "TybeCode",
            "TypeName",
            "CategoryLevel",
            "ServiceType",
            "FatherClassCode",
            "Status"
          ],
          params: {
            TybeCode: "",
            TypeName: "",
            CategoryLevel: "",
            ServiceType: "",
            FatherClassCode: "",
            Status: ""
          }
        }
      },
      //初始化input
      TCode: {
        input: ""
      },
      TName: {
        input: ""
      },
      FClassCode: {
        input: ""
      },
      //初始化value
      SType: {
        value: ""
      },
      CLevel: {
        value: ""
      },
      Statu: {
        value: ""
      }
    };
  },
  methods: {
    query: function() {
      this.queryObj.params.TybeCode = this.$refs.TybeCode.input;
      this.queryObj.params.TypeName = this.$refs.TypeName.input;
      this.queryObj.params.FatherClassCode = this.$refs.FatherClassCode.input;

      this.queryObj.params.Status = this.$refs.Status.value;
      this.queryObj.params.CategoryLevel = this.$refs.CategoryLevel.value;
      this.queryObj.params.ServiceType = this.$refs.ServiceType.value;
      this.$refs.Table.getDatas();
    },
    reset: function() {
      this.$refs.TybeCode.reset();
      this.$refs.TypeName.reset();
      this.$refs.FatherClassCode.reset();
      this.$refs.Status.reset();
      this.$refs.CategoryLevel.reset();
      this.$refs.ServiceType.reset();
    },
    changeToggleParam() {
      this.toggleParam = !this.toggleParam;
    }
  }
};
</script>
<style>
.filter-params .el-form-item__label {
  margin-right: 0px;
}
.query-params .el-col {
  margin-bottom: 0px;
}
</style>
