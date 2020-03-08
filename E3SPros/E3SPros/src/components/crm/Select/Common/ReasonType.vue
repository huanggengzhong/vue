<template>
  <el-form-item label="原因类型">
    
    <el-select v-model="value" :disabled="isdisabled" placeholder="请选择" clearable>
      <el-option
        v-for="item in options"
        :key="item.lookupValueCode"
        :label="item.lookupValueName"
        :value="item.lookupValueCode"
      ></el-option>
    </el-select>
  </el-form-item>
</template>

<script>
import { crmApis } from "@/api/graphQLApiList/crm";
import { requestGraphQL } from "@/api/commonRequest";
export default {
  name: "ReasonType",
  props:{
    ReasonType:{
      value:String,
      isdisabled: Boolean
    }
  },
  data() {
    return {
      value: this.ReasonType.value,
      isdisabled: this.ReasonType.isdisabled,
      options:this.getData()
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
        apiConfig: crmApis.mdsLookupValueQueryByPage,
        // 需要调用的API服务配置
        apiServices: [
          {
            //表格中台返回网格的字段
            apiQueryRow: ['lookupValueCode','lookupValueName']
          }
        ],
        //条件/实体参数（变量），根据typeParam中的定义配置
        variables: {
          pageSize: 10,
          pageIndex: 1,
          //当前中台使用的名称有dataInfo、info，具体查看API文档
          dataInfo: {lookupTypeCode:'LX807'}//值列表编码
        }
      };
      let paramD = that.$getParams(queryObj);
      // 调用中台API方法（可复用）
      requestGraphQL(paramD).then(response => {
        if (
          response.data[queryObj.apiConfig.ServiceCode].result == "1" &&
          response.data[queryObj.apiConfig.ServiceCode].rows != ""
        ) {
          that.options=response.data[queryObj.apiConfig.ServiceCode].rows
        }
      });
      this.value=this.ReasonType.value
      this.isdisabled=this.ReasonType.isdisabled
    },
    reset:function(){
      let that=this
      this.value=''
      this.isdisabled=false
    }
  }
};
</script>

<style scoped>
</style>
