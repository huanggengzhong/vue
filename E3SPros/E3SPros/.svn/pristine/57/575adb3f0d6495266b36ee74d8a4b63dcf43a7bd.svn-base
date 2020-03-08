<!--
* description: 数字输入框通用组件
* author: luojx
* createdDate: 2019-08-29
-->
<template>
  <el-col :span="span">
    <lableName
      :curLabelName="curLabelName"
      :isShowLabel="isShowLabel"
      :isRequire="isRequire"
    ></lableName>
    <el-input
      :placeholder="$t('sys.tips.esTip13')"
      v-model="modelCode"
      :disabled="disabled"
      size="small"
      :suffix-icon="suffixIcon"
      @clear="clearCode"
      clearable
      @blur="sendCode"
      :type="inputType"
    ></el-input>
    <validateFormate
      :curLabelName="curLabelName"
      :validrule="validrule"
    ></validateFormate>
  </el-col>
</template>
<script>
import { numberInputMixins } from "@/components/mixins/numberInputMixins";
import lableName from "@/components/lableName";
import validateFormate from "@/components/validateFormate";
export default {
  mixins: [numberInputMixins],
  components: {
    lableName,
    lableName, //标题溢出样式组件
    validateFormate //校验提示样式组件
  }
};
</script>
