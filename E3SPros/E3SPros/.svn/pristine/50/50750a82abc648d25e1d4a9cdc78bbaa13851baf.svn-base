<!--
* description: 文本输入框通用组件
* author: luojx
* createdDate: 2019-07-30
*  2019-08-09 修改文字溢出效果-封装/校验效果 liyanm
*  2019-08-15 增加输入框类型判断，默认text   yinxy
-->
<template>
  <el-col :span="span">
    <lableName
      :curLabelName="curLabelName"
      :isShowLabel="isShowLabel"
      :isRequire="isRequire"
    ></lableName>
    <el-input
      placeholder="请输入"
      v-model.number="modelCode"
      :disabled="disabled"
      :min="1"
      :step="1" 
      size="small"
      :suffix-icon="suffixIcon"
      @clear="clearCode"
      @blur="sendCode"
      type="number"
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
  name:'crmTextInputNumber',
  mixins: [inputMixins],
  components: {
    lableName, //标题溢出样式组件
    validateFormate //校验提示样式组件
  },
  sendCode(){
      let val=this.modelCode;
      this.$emit("changeCode", parseInt(val));
    }
};
</script>
