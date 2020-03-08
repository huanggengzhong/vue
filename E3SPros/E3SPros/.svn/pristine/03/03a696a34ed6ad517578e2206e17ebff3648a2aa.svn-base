<template>
  <el-form-item label="选择处理人">
    <el-select v-model="value" placeholder="请选择" clearable>
      <el-option v-for="item in options" 
      :key="item.empId" 
      :label="item.empName" 
      :value="item.empId"></el-option>
    </el-select>
  </el-form-item>
</template>


<script>
import { crmApis } from "@/api/graphQLApiList/crm";
import { requestGraphQL } from "@/api/commonRequest"; 
export default {
  name: "ChooseProcessingPerson",
  props:{
    ChooseProcessingPerson:{
      value:String
    }
  },
  data() {
    return {
      value: this.ChooseProcessingPerson.value,
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
        apiConfig: crmApis.workingGroupQueryGroupUserByCurrentUser,
        // 需要调用的API服务配置
        apiServices: [
          {
            //表格中台返回网格的字段
            apiQueryRow: ['empId','empName','workGroupId']
          }
        ],
        //条件/实体参数（变量），根据typeParam中的定义配置
        variables: {
          pageSize: 100,
          pageIndex: 1,
          //当前中台使用的名称有dataInfo、info，具体查看API文档
          dataInfo: {}//值列表编码
        }
      };
      let paramD = that.$getParams(queryObj);
      // 调用中台API方法（可复用）
      requestGraphQL(paramD).then(response => {
        if (
          response.data[queryObj.apiConfig.ServiceCode].result == "1" 
          //&&response.data[queryObj.apiConfig.ServiceCode].rows != ""
        ) {
          that.options=response.data[queryObj.apiConfig.ServiceCode].rows
        }
      });
      that.value=that.ChooseProcessingPerson.value
    },
    reset:function(){
      let that=this
      this.value=''
    }
  }
};
</script>

<style scoped>
</style>
