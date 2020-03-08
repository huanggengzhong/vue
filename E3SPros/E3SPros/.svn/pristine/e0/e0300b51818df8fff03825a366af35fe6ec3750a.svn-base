<template>

  <el-form-item label="卡券类型" prop="cardTicketType.value">
    <el-select v-model="value" placeholder="请选择" @change="sendCode" :disabled="isdiasbled" clearable>
      <el-option v-for="item in options" :key="item.lookupValueCode" :label="item.lookupValueName" :value="item.lookupValueCode"></el-option>
    </el-select>
  </el-form-item>

</template>

<script>
import { crmApis } from "@/api/graphQLApiList/crm";
import { requestGraphQL } from "@/api/commonRequest";

export default {
  name: "cardTicketType",
  props: {
    cardTicketType: {
      value: String,
      isdiasbled: Boolean
    }
  },
  data() {
    return {
      value: this.cardTicketType.value,
      isdiasbled: this.cardTicketType.isdiasbled,
      options: [
        { lookupValueCode: 1, lookupValueName: "现金券" },
        { lookupValueCode: 2, lookupValueName: "折扣券" },
        { lookupValueCode: 3, lookupValueName: "满减券" },
        { lookupValueCode: 4, lookupValueName: "满赠券" },
        { lookupValueCode: 5, lookupValueName: "商品兑换券" }
      ]
    };
  },
  mounted: function() {},
  methods: {
    getData: function() {
      let that = this;
      let queryObj = {
        // api配置
        apiConfig: crmApis.mdsLookupValueQueryByPage,
        // 需要调用的API服务配置
        apiServices: [
          {
            //表格中台返回网格的字段
            apiQueryRow: ["lookupValueCode", "lookupValueName"]
          }
        ],
        //条件/实体参数（变量），根据typeParam中的定义配置
        variables: {
          pageSize: 10,
          pageIndex: 1,
          //当前中台使用的名称有dataInfo、info，具体查看API文档
          dataInfo: { lookupTypeCode: "" } //值列表编码
        }
      };
      let paramD = that.$getParams(queryObj);
      // 调用中台API方法（可复用）
      requestGraphQL(paramD).then(response => {
        if (
          response.data[queryObj.apiConfig.ServiceCode].result == "1" &&
          response.data[queryObj.apiConfig.ServiceCode].rows != ""
        ) {
          that.options = response.data[queryObj.apiConfig.ServiceCode].rows;
        }
      });
      this.value = this.cardTicketType.value;
    },
    getNewData() {
      let that = this;
      that.value = this.cardTicketType.value;
    },
    reset: function() {
      let that = this;
      this.value = "";
    },
    sendCode() {
      this.$emit("changeCode", this.value);
    }
  }
};
</script>

<style scoped>
</style>
