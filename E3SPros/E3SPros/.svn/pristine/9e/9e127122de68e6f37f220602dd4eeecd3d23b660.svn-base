<!--
* description: 搜索文本输入框（弹出窗事件）通用组件
* author: luojx
* createdDate: 2019-07-30
*  2019-08-09 修改文字溢出效果-封装/校验效果 liyanm
-->
<template>
  <el-col :span="span" v-if="curIsShow">
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
      suffix-icon="el-icon-search"
      @clear="clearCode"
      clearable
      @blur="sendCode"
      @focus="sendFocusCode"
    ></el-input>
    <validateFormate
      :curLabelName="curLabelName"
      :validrule="validrule"
    ></validateFormate>
  </el-col>
</template>
<script>
import { inputMixins } from "@/components/mixins/inputMixins";
import lableName from "@/components/lableName";
import validateFormate from "@/components/validateFormate";
export default {
  mixins: [inputMixins],
  components: {
    lableName, //标题溢出样式组件
    validateFormate //校验提示样式组件
  }
};
</script>
