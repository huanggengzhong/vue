<!--
* description: 时间选择器
* author: linwm
* createdDate: 2019-09-10
* logs：
*   2019-09-26 修改框内提示信息 xulfan
-->
<template>
  <el-col :span="span">
    <lableName
      :curLabelName="curLabelName"
      :isShowLabel="isShowLabel"
      :isRequire="isRequire"
    ></lableName>
    <el-time-picker
      v-model="modelCode"
      :type="dateType"
      @change="sendCode"
      :value-format="format"
      @clear="clearCode"
      clearable
      :disabled="disabled"
      :placeholder="$t('sys.tips.esTip16')"
    ></el-time-picker>
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
    //日期类型
    dateType: { type: String, default: "time" },
    format: { type: String, default: "HH:mm:ss" }
  },
  data() {
    return {
      curDataType: this.dateType
    };
  },
  created() {}
};
</script>
