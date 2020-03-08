<!--
* description: 客户类型下拉框（多选，单选）,支持搜索
* author: laimzh
* createdDate: 2019-08-14
-->
<template>
  <section>
    <el-col :span="span">
      <lableName
        :curLabelName="curLabelName"
        :isShowLabel="isShowLabel"
        :isRequire="isRequire"
      ></lableName>
      <el-select
        :multiple="isMul"
        collapse-tags
        filterable
        v-model="modelCode"
        placeholder="请选择"
        @clear="clearCode"
        clearable
        @change="sendCode"
        :disabled="disabled"
        size="small"
      >
        <el-option
          v-for="item in options"
          :key="item.lookupValueCode"
          :label="item.lookupValueName"
          :value="item.lookupValueCode"
        >{{item.lookupValueName}}</el-option>
      </el-select>
      <validateFormate
        :curLabelName="curLabelName"
        :validrule="validrule"
      ></validateFormate>

    </el-col>
  </section>
</template>
<script>
import { crmApis } from "@/api/graphQLApiList/crm";
import { dropdownMixins } from "@/components/mixins/dropdownMixins";
import lableName from "@/components/lableName";
import validateFormate from "@/components/validateFormate";
export default {
  name: "CustType",
  // 组件混入对象：{props[span,isShowLabel,code,isMul,labenName] data[modelCode,optionDatas,listQuery] methods[queryTable,sendCode]}
  mixins: [dropdownMixins],
  components: {
    lableName, //标题溢出样式组件
    validateFormate //校验提示样式组件
  },
  data() {
    return {
      curLabelName: this.labelName === "" ? "客户类型" : this.labelName,
      // API配置对象
      apiConfig: crmApis.mdsLookupValueQueryByPage,
      // 表格中台返回网格的字段
      apiQueryRow: ["lookupValueCode", "lookupValueName"]
    };
  },
  mothods: {}
};
</script>
