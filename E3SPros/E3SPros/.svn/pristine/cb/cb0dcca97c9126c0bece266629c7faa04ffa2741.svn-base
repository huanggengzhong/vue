<template>
  <el-form-item label="竞品品牌">
	<el-select v-model="value" placeholder="请选择" clearable>
	  <el-option
		v-for="item in options"
		:key="item.compBrandCode"
		:label="item.compBrandCn"
		:value="item.compBrandCode"
	  ></el-option>
	</el-select>
  </el-form-item>
</template>

<script>
import { crmApis } from "@/api/graphQLApiList/crm";
import { requestGraphQL } from "@/api/commonRequest";
export default {
  name: "CompetitorBrandName",
  props:{
	CompetitorBrandName:{
	  value:String
	}
  },
  data() {
	return {
	  value: this.CompetitorBrandName.value,
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
		apiConfig: crmApis.mdmCompBrandQueryFindAll,
		// 需要调用的API服务配置
		apiServices: [
		  {
			//表格中台返回网格的字段
			apiQueryRow: ['compBrandCode','compBrandCn']
		  }
		],
		//条件/实体参数（变量），根据typeParam中的定义配置
		variables: {
		  pageSize: -1,
		  pageIndex: -1,
		  //当前中台使用的名称有dataInfo、info，具体查看API文档
		  dataInfo: {isEnable:'1'}//值列表编码
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
	  that.value=that.CompetitorBrandName.value
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
