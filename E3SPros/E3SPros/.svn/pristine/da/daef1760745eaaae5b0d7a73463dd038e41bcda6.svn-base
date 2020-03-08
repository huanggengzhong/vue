<!--
* description: 单日期选择器
* author: yxyan
* createdDate: 2019-07-27
* 增加文字溢出效果 liyam: 2019-08-5
*  2019-08-09 修改文字溢出效果-封装/校验效果 liyanm
-->
<template>
  <el-col :span="span">
    <lableName
      :curLabelName="curLabelName"
      :isShowLabel="isShowLabel"
      :isRequire="isRequire"
    ></lableName>
    <el-date-picker
      v-model="modelCode"
      :type="dateType"
      :picker-options="pickerOptions"
      @change="sendCode"
      :value-format="format"
      @clear="clearCode"
      clearable
      :disabled="disabled"
      placeholder="选择日期"
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
    dateType: { type: String, default: "date" },
    format: { type: String, default: "yyyy-MM-dd" },
    // 日期控件选项类型
    dateOptionsType: { type: String, default: "" }
  },
  data() {
    return {
      pickerOptions: {}
    };
  },
  created() {
    const that = this;
    that.pickerOptions.disabledDate = function(time) {
      if (that.dateOptionsType) {
        switch (that.dateOptionsType) {
          // 禁用当前日期之后的日期（不包括当前日期）
          case "1":
            return time.getTime() > Date.now();
          // 禁用当前日期之前的日期（包括当前日期）
          case "2":
            return time.getTime() < Date.now();
        }
      }
      return false;
    };
  }
};
</script>
