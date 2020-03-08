<!--
* description: 账户名称下拉框（多选，单选）,支持搜索
* author: linzewen
* createdDate: 2019-08-04
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
        :filterable="filterable"
        v-model="modelCode"
        :placeholder="placeholder"
        :clearable="clearable"
        :disabled="disabled"
        @clear="clearCode"
        @change="sendCode"
        @visible-change="visibleChange"
        size="small"
      >
        <el-option
          v-for="item in optionDatas"
          :key="item.dlrAccountId"
          :label="item[optionFields.length > 1 ? optionFields[1] : defOptionFields[1]]"
          :value="item[optionFields.length > 1 ? optionFields[0] : defOptionFields[0]]"
        >{{item[optionFields.length > 1 ? optionFields[1] : defOptionFields[1]]}}</el-option>
      </el-select>
      <validateFormate
      :curLabelName="curLabelName"
      :validrule="validrule"
    ></validateFormate>
    </el-col>
  </section>
</template>
<script>
import { veApis } from "@/api/graphQLApiList/ve";
import { dropdownMixins } from "@/components/mixins/dropdownMixins";
import lableName from "@/components/lableName";
import validateFormate from "@/components/validateFormate";
export default {
  name: "accountName",
  // 组件混入对象：{props[span,isShowLabel,code,isMul,labelName] data[modelCode,optionDatas,listQuery] methods[queryTable,sendCode]}
  mixins: [dropdownMixins],
  components: {
    lableName, //标题溢出样式组件
    validateFormate //校验提示样式组件
  },
  data() {
    return {
        placeholder: this.$t('sys.tips.esTip0'),
      curLabelName: this.labelName === "" ? "账户名称" : this.labelName,
      // API配置对象
      apiConfig: veApis.veDbDlrAccountQueryFindAll,
      // 表格中台返回网格的字段
      apiQueryRow: ["dlrAccountId", "dlrAccountName", "dlrAccountCode"],
      // 默认绑定数据对象字段
      defOptionFields: ['dlrAccountCode', 'dlrAccountName']
    };
  }
};
</script>
