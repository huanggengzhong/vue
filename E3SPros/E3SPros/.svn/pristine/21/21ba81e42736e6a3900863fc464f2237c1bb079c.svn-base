<template>

    <el-form-item :label="labelname" prop="EnableOrDisable.value">
      <el-select v-model="value" placeholder="请选择" :disabled="isdiasbled" clearable>
        <el-option v-for="item in options" :key="item.lookupValueCode" :label="item.lookupValueName" :value="item.lookupValueCode"></el-option>
      </el-select>
    </el-form-item>

</template>

<script>
import { crmApis } from "@/api/graphQLApiList/crm";
import { requestGraphQL } from "@/api/commonRequest";

export default {
  name: "EnableOrDisable",
  props: {
    EnableOrDisable: {
      value: String,
      isdiasbled: Boolean,
      lkCode: String,
      labelname: {
        type:String,
        default:"是否启用"
      }
    }
  },
  data() {
    return {
      value: this.EnableOrDisable.value,
      isdiasbled: this.EnableOrDisable.isdiasbled,
      labelname:(this.EnableOrDisable.labelname==undefined?"是否启用":this.EnableOrDisable.labelname),
      lkCode: (this.EnableOrDisable.lkCode==undefined?"LX003":this.EnableOrDisable.lkCode),
      options: this.getData()
    };
  },
  mounted: function() {},
  methods: {
    getData: function() {
      let that = this;
      var cxstr=(that.EnableOrDisable.lkCode==undefined?"LX003":that.EnableOrDisable.lkCode)
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
          dataInfo: { lookupTypeCode: cxstr } //值列表编码
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
      this.value = this.EnableOrDisable.value;
    },
    getNewData() {
      let that = this;
      that.value = this.EnableOrDisable.value;
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
