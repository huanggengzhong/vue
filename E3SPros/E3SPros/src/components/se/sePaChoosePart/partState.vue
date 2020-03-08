<!--
* description: 备件类别
* author: ydche
* createdDate: 2019-07-18
-->
<template>
  <section>
    <el-col :span="span">
      <label v-if="isShowLabel"><span v-if="isRequire" class="iconRequired"></span>{{curLabelName}}</label>
      <div class="ellipsisshowName" v-show="ellipsisshow">
        <span></span>{{curLabelName}}</div>
      <el-select :multiple="isMul" collapse-tags filterable v-model="modelCode" placeholder="请选择" @clear="clearCode" clearable @change="sendCode" size="small">
        <el-option v-for="item in optionDatas" :key="item.value" :label="item.label" :value="item.value">{{item.label}}</el-option>
      </el-select>
    </el-col>
  </section>
</template>
<script>
import { seApis } from '@/api/graphQLApiList/se';
import { dropdownMixins } from '@/components/mixins/dropdownMixins';
export default {
	name: 'CarState',
	// 组件混入对象：{props[span,isShowLabel,code,isMul,labelName] data[modelCode,optionDatas,listQuery] methods[queryTable,sendCode]}
	mixins: [dropdownMixins],
	data() {
		return {
			curLabelName: this.labelName === '' ? this.$suit.globalLabel.CAPITAL_TYPE : this.labelName,
			// API配置对象
			apiConfig: seApis.PartTypeCodeQuery,
			// 表格中台返回网格的字段
			apiQueryRow: [
				'value',
				'label',
			],
		};
	}
};
</script>
