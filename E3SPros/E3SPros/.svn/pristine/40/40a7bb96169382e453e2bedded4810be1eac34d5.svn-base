<template>
  <el-form-item label="服务中类">
    
    <el-select v-model="value" @change="sendCode" placeholder="请选择" clearable>
      <el-option
        v-for="item in options"
        :key="item.serverClassCode"
        :label="item.serverClassName"
        :value="item.serverClassCode"
      ></el-option>
    </el-select>
  </el-form-item>
</template>

<script>
import { crmApis } from "@/api/graphQLApiList/crm";
import { requestGraphQL } from "@/api/commonRequest";
export default {
  name: "ServiceMidClass",
  props:{
    ServiceMidClass:{
      value:String,
      ptype:String,
      pcode:String
    }
  },
  data() {
    return {
      value: this.ServiceMidClass.value,
      ptype: this.ServiceMidClass.ptype,
      pcode: this.ServiceMidClass.pcode,
      options:this.getData()
    };
  },
  mounted: function() {
    //this.getData();
  },
  methods: {
    getData: function() {
      let that = this;
      that.ptype=that.ServiceMidClass.ptype
      that.pcode=that.ServiceMidClass.pcode
      let queryObj = {
        // api配置
        apiConfig: crmApis.serverClassQueryFindAll,
        // 需要调用的API服务配置
        apiServices: [
          {
            //表格中台返回网格的字段
            apiQueryRow: ['serverClassCode','serverClassName']
          }
        ],
        //条件/实体参数（变量），根据typeParam中的定义配置
        variables: {
          pageSize: 10,
          pageIndex: 1,
          //当前中台使用的名称有dataInfo、info，具体查看API文档
          dataInfo: {classLevel:20,serverType:that.ptype,parentCode:that.pcode}//值列表编码
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
      that.value=that.ServiceMidClass.value
    },
    reset:function(){
      let that=this
      this.value=''
    },
    sendCode() {
      this.$emit("changeCode",this.value)
    }
  }
};
</script>

<style scoped>
</style>
