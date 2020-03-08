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
      :style="setInputWidth(span)"
      placeholder="请输入"
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
import { inputMixins } from "@/components/mixins/inputMixins";
import lableName from "@/components/lableName";
import validateFormate from "@/components/validateFormate";
export default {
  name:'crmTextInput',
  mixins: [inputMixins],
  components: {
    lableName, //标题溢出样式组件
    validateFormate //校验提示样式组件
  },
  methods:{
     sendCode(){
      let val=this.modelCode;
      let text=this.codeField
      this.$emit("sendChangeCode", val,text);
       this.$emit("changeCode", val,text);
    },
    setInputWidth(span){
      switch(span){
        case 6:return '';
        case 12:return 'width:85%';
      }

    }
  }
};
</script>
