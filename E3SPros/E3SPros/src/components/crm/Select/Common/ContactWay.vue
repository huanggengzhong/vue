<template>
  <div>
  <el-form-item label="接触方式" :prop="checkprop">
	<el-select v-model="value" :disabled="isdisabled" @change="sendCode" placeholder="请选择" clearable>
	  <el-option 
		v-for="item in options"
		:key="item.cantactWayId"
		:label="item.cantactWayName"
		:value="item.cantactWayId"
	  ></el-option>
	</el-select>
  </el-form-item>
  </div>
</template>

<script>
import { crmApis } from "@/api/graphQLApiList/crm";
import { requestGraphQL } from "@/api/commonRequest"; 
export default {
  name: "ContactWay",
  props:{
	ContactWay:{
			value:String,
			checkprop:String,
		isdisabled: Boolean
	}
  },
  data() {
	return {
		 checkprop:this.ContactWay.checkprop,
	  value: this.ContactWay.value,
	  options:this.getData(),
		isdisabled:this.ContactWay.isdisabled
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
		apiConfig: crmApis.pcDbCantactWayQueryFindAll,
		// 需要调用的API服务配置
		apiServices: [
		  {
			//表格中台返回网格的字段
			apiQueryRow: ['cantactWayId','cantactWayName']
		  }
		],
		//条件/实体参数（变量），根据typeParam中的定义配置
		variables: {
		  pageSize: 1000,
		  pageIndex: 1,
		  //当前中台使用的名称有dataInfo、info，具体查看API文档
		  dataInfo: {isEnable:'1'}//值列表编码
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
	  this.value=this.ContactWay.value
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
