<template>
  <el-form-item label="省份">
    
    <el-select v-model="value" :disabled="isdisabled" @change="sendCode" placeholder="请选择" clearable>
      <el-option
        v-for="item in options"
        :key="item.provinceId"
        :label="item.provinceName"
        :value="item.provinceId"
      ></el-option>
    </el-select>
  </el-form-item>
</template>

<script>
import { requestGraphQL } from "@/api/commonRequest"; 
import { crmApis } from "@/api/graphQLApiList/crm";
export default {
  name: "Province",
  props:{
    Province:{
      value:String,
      isdisabled: Boolean,
    }
  },
  data() {
    return {
      value: this.Province.value,
      isdisabled:this.Province.isdisabled,
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
                apiConfig: crmApis.mdmOrgProvinceQueryFindAll,
                // 需要调用的API服务配置
                apiServices: [
                    {
                        //表格中台返回网格的字段
                        apiQueryRow: ["provinceId", "provinceName"]
                    }
                ],
                //条件/实体参数（变量），根据typeParam中的定义配置
                variables: {
                    pageSize: 1000,
                    pageIndex: 1,
                    //当前中台使用的名称有dataInfo、info，具体查看API文档
                    dataInfo: {isEnable:"1" } //值列表编码
                }
            };
            let paramD = that.$getParams(queryObj);
            // 调用中台API方法（可复用）
            requestGraphQL(paramD).then(response => {
                if (
                    response.data[queryObj.apiConfig.ServiceCode].result ==
                        "1" &&
                    response.data[queryObj.apiConfig.ServiceCode].rows != ""
                ) {
                    that.options =
                        response.data[queryObj.apiConfig.ServiceCode].rows;
                }
            });
            this.value=this.Province.value
        },
        getNewData(){
            let that=this
            that.value=this.Province.value
        },
    reset:function(){
      let that=this
      this.value=''
    },
    sendCode() {
      var that = this;
      var option = that.options;
      let j = that.value;
      for (var i = 0; i < option.length; i++) {
        if (option[i].provinceId == j) {
          let name = option[i].provinceName;
          this.$emit("changeCode",j,name);
        }
      }
    }
  }
};
</script>
