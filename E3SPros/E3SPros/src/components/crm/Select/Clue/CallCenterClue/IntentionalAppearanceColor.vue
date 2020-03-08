<template>
  <el-form-item label="意向外观颜色">
    <el-select v-model="value" placeholder="请选择" :disabled="isdisabled" clearable>
      <el-option
        v-for="item in options"
        :key="item.carColorCode"
        :label="item.carColorName"
        :value="item.carColorCode"
      ></el-option>
    </el-select>
  </el-form-item>
</template>

<script>
import { requestGraphQL } from "@/api/commonRequest";
import { crmApis } from "@/api/graphQLApiList/crm";
export default {
  name: "IntentionalAppearanceColor",
  props: {
    IntentionalAppearanceColor: {
      value: String,
      isdisabled: Boolean
    }
  },
  data() {
    return {
      value: this.IntentionalAppearanceColor.value,
      isdisabled: this.IntentionalAppearanceColor.isdisabled,
      options: this.getData()
    };
  },
  mounted: function() {
    //this.getData();
  },
  methods: {
    getData: function() {
      let that = this;
      let queryObj = {
        // api配置
        apiConfig: crmApis.mdmCarColorQueryListForPage,
        // 需要调用的API服务配置
        apiServices: [
          {
            //表格中台返回网格的字段
            apiQueryRow: ["carColorCode", "carColorName"]
          }
        ],
        //条件/实体参数（变量），根据typeParam中的定义配置
        variables: {
          pageSize: 10,
          pageIndex: 1,
          //当前中台使用的名称有dataInfo、info，具体查看API文档
          dataInfo: {
            oemCode: this.$store.getters.orgInfo.OEM_CODE,
            groupCode: this.$store.getters.orgInfo.GROUP_CODE
          } //值列表编码
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
      that.value=that.IntentionalAppearanceColor.value
    },
    reset: function() {
      let that = this;
      this.value = "";
    }
  }
};
</script>

<style scoped>
</style>
