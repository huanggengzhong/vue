<!--失控原因明细编辑 CQ-->
<template>
  <div class="app-container app-container-table">
    <div class="filter-container filter-button">
      <el-button type="primary" @click="query()">查询</el-button>
      <el-button type="primary" @click="add()">新增</el-button>
      <el-button @click="reset()">重置</el-button>
    </div>

    <div class="filter-container filter-params query-params">
      <el-form label-position="right">
        <!--第一行-->
        <el-row>
          <el-col :span="12">
            <Order :Order="Oder" ref="Order"></Order>
          </el-col>
          <el-col :span="12">
            <EnableOrDisable :EnableOrDisable="EnableDisable" ref="EnableOrDisable"></EnableOrDisable>
          </el-col>
        </el-row>
        <el-row>
          <el-col>
            <FailureDetailName ref="Name"></FailureDetailName>
          </el-col>
        </el-row>
        <el-row>
          <el-col>
            <FailureDetailDescripts
              :FailureDetailDescripts="FDetailDescripts"
              ref="FailureDetailDescripts"
            ></FailureDetailDescripts>
          </el-col>
        </el-row>
      </el-form>
    </div>
  </div>
</template>
<script>
import Order from "@/components/crm/Select/Common/Order.vue";
import EnableOrDisable from "@/components/crm/Select/Whether/EnableOrDisable.vue";
import FailureDetailName from "@/components/crm/textbox/Complaint/FailureDetailName.vue";
import FailureDetailDescripts from "@/components/crm/textbox/Complaint/FailureDetailDescripts.vue";
import { crmApis } from "@/api/graphQLApiList/crm";
export default {
  name: "LossRDetailEdit",
  components: {
    Table,
    Order,
    EnableOrDisable,
    FailureDetailName,
    FailureDetailDescripts
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
            "Order",
            "EnableOrDisable",
            "FailureDetailName",
            "FailureDetailDescripts"
          ],
          params: {
            Order: "",
            EnableOrDisable: "",
            FailureDetailName: "",
            FailureDetailDescripts: ""
          }
        }
      },
      //初始化input
      Name: {
        input: ""
      },
      FDetailDescripts: {
        input: ""
      },
      //初始化value
      Oder: {
        value: ""
      },
      EnableDisable: {
        value: ""
      }
    };
  },
  methods: {
    query: function() {
      this.queryObj.params.FailureDetailName = this.$refs.Name.input;
      this.queryObj.params.FailureDetailDescripts = this.$refs.FDetailDescripts.input;
      this.queryObj.params.Order = this.$refs.Oder.value;
      this.queryObj.params.EnableOrDisable = this.$refs.EnableDisable.value;
      this.$refs.Table.getDatas();
    },
    reset: function() {
      this.$refs.FailureDetailName.reset();
      this.$refs.FailureDetailDescripts.reset();
      this.$refs.Order.reset();
      this.$refs.EnableOrDisable.reset();
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
