<template>
  <el-form-item label="渠道小类">
    <el-select v-model="value" :disabled="isdisabled" placeholder="请选择" clearable>
      <el-option
        v-for="item in options"
        :key="item.infoChanDCode"
        :label="item.infoChanDName"
        :value="item.infoChanDCode"
      ></el-option>
    </el-select>
  </el-form-item>
</template>

<script>
import { crmApis } from "@/api/graphQLApiList/crm";
import { requestGraphQL } from "@/api/commonRequest";
export default {
  name: "ChannelSmallClass_sct",
  props: {
    ChannelSmallClass_sct: {
      value: String,
      isdisabled: Boolean,
      pcode: String
    }
  },
  data() {
    return {
      value: this.ChannelSmallClass_sct.value,
      options: this.getData(),
      isdisabled: this.ChannelSmallClass_sct.isdisabled,
      pcode: this.ChannelSmallClass_sct.pcode
    };
  },
  mounted: function() {},
  methods: {
    getData: function() {
      let that = this;
      that.pcode = that.ChannelSmallClass_sct.pcode;
      let queryObj = {
        // api配置
        apiConfig: crmApis.pcDbInfoChanDQueryFindAll,
        // 需要调用的API服务配置
        apiServices: [
          {
            //表格中台返回网格的字段
            apiQueryRow: ["infoChanDCode", "infoChanDName"]
          }
        ],
        //条件/实体参数（变量），根据typeParam中的定义配置
        variables: {
          pageSize: 10,
          pageIndex: 1,
          //当前中台使用的名称有dataInfo、info，具体查看API文档
          dataInfo: { infoChanMId: that.pcode } //值列表编码
        }
      };
      let paramD = that.$getParams(queryObj);
      // 调用中台API方法（可复用）
      requestGraphQL(paramD).then(response => {
        if (
          response.data[queryObj.apiConfig.ServiceCode].result == "1"
          //&&response.data[queryObj.apiConfig.ServiceCode].rows != ""
        ) {
          that.options = response.data[queryObj.apiConfig.ServiceCode].rows;
        }
      });
      this.value = this.ChannelSmallClass_sct.value;
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
