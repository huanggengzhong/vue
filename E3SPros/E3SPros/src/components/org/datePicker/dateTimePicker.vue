<!--
* description: 单日期选择器时分秒
* author:  
* createdDate: 2
*  2019-08-09 修改文字溢出效果-封装/校验效果 
-->
<template>
  <el-col
    :span="span"
    id="datePicker"
  >
    <lableName
      :curLabelName="curLabelName"
      :isShowLabel="isShowLabel"
      :isRequire="isRequire"
    ></lableName>
    <el-date-picker
      v-model="modelCode"
      :type="dateType"
      :pickerOptions="pickerOptions"
      :placeholder="$t('sys.tips.esTip16')"
    ></el-date-picker>
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
  name: "datePicker",
  mixins: [inputMixins],
  components: {
    lableName, //标题溢出样式组件
    validateFormate //校验提示样式组件
  },
  props: {
    dateType: { type: String, default: "datetime" },
    format: { type: String, default: "yyyy-MM-dd HH:mm:ss" },
    // 日期控件选项类型
    dateOptionsType: { type: String, default: "" }
  },
  data() {
    return {
      pickerOptions: {
       
        }
       
    };
  }
  
 
};
</script>


