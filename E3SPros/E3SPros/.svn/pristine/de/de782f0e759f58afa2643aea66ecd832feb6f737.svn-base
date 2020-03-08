<!--
* description: 文本输入框通用组件
* author: luojx
* createdDate: 2019-07-30
*  2019-08-09 修改文字溢出效果-封装/校验效果 liyanm
*  2019-08-15 增加输入框类型判断，默认text   yinxy
*  2019-10-09 增加密码框 ,默认 password lixb
-->
<template>
  <el-col
    :span="span"
    v-show="curIsShow"
    :key="fullComponentKey"
  >
    <lableName
      :curLabelName="curLabelName"
      :isShowLabel="isShowLabel"
      :isRequire="isRequire"
    ></lableName>
    <el-input
      :placeholder="$t('sys.tips.esTip13')"
      v-model="modelCode"
      :disabled="disabled"
      :readonly="readonly"
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
import { inputMixins } from "@/components/mixins/inputMixins";
import lableName from "@/components/lableName";
import validateFormate from "@/components/validateFormate";
export default {
  mixins: [inputMixins],
  components: {
    lableName,
    lableName, //标题溢出样式组件
    validateFormate //校验提示样式组件
  }
};
</script>
