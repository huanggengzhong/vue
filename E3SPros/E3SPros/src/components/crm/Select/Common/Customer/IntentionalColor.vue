<template>
  <el-form-item :label="labelname">
	
	<el-select v-model="value" placeholder="请选择" clearable>
	  <el-option
		v-for="item in options"
		:key="item.carColorId"
		:label="item.mdmCarColorExt==null?'':item.mdmCarColorExt.carColorName"
		:value="item.carColorId"
	  ></el-option>
	</el-select>
  </el-form-item>
</template>

<script>
import { requestGraphQL } from "@/api/commonRequest"; 
import { crmApis } from "@/api/graphQLApiList/crm";
export default {
  name: "IntentionalColor",
  props:{
	IntentionalColor:{
		value: String,
		pcode: String,
		labelname: {
        type:String,
        default:"意向颜色"
      }
	}
  },
  data() {
	return {
	  value: this.IntentionalColor.value,
		options:this.getData(),
		pcode: this.IntentionalColor.pcode,
		labelname:(this.IntentionalColor.labelname==undefined?"意向颜色":this.IntentionalColor.labelname),
	};
  },
  mounted: function() {
	//this.getData();
  },
  methods: {
	getData: function() {
		let that = this;
		that.pcode = that.IntentionalColor.pcode;
	  let queryObj = {
		// api配置
		apiConfig: crmApis.mdmCarSeriesColorQueryList,
		// 需要调用的API服务配置
		apiServices: [
		  {
			//表格中台返回网格的字段
			apiQueryRow: ['carColorId','mdmCarColorExt{carColorName}']
		  }
		],
		//条件/实体参数（变量），根据typeParam中的定义配置
		variables: {
		  pageSize: 1000,
		  pageIndex: 1,
		  //当前中台使用的名称有dataInfo、info，具体查看API文档
		  dataInfo: {isEnable:'1',carSeriesId:that.pcode}//值列表编码
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
	  that.value=that.IntentionalColor.value
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
