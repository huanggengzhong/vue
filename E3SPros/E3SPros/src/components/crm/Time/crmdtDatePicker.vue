<!--
* description: 双日期选择器
* author: dxuem
* createdDate: 2019-09-12
-->
<template>
  <el-col :span="span" id="crmdtdatepicker">
    <lableName :curLabelName="curLabelName" :isShowLabel="isShowLabel" :isRequire="isRequire"></lableName>
    <el-date-picker
      v-model="modelCode"
      :type="dateType"
      range-separator="至"
      :picker-options="pickerOptions"
      start-placeholder="开始日期"
      end-placeholder="结束日期"
      :value-format="format"
      @change="sendCode"
      clearable
      :disabled="disabled"
    ></el-date-picker>
    <validateFormate :curLabelName="curLabelName" :validrule="validrule"></validateFormate>
  </el-col>
</template>

<script>
import { inputMixins } from "@/components/mixins/inputMixins";
import lableName from "@/components/lableName";
import validateFormate from "@/components/validateFormate";
export default {
  name: "crmdtDatePicker",
  mixins: [inputMixins],
  components: {
    lableName, //标题溢出样式组件
    validateFormate //校验提示样式组件
  },
  props: {
    dateType: { type: String, default: "daterange" },
    format: { type: String, default: "yyyy-MM-dd HH:mm:ss" },
    dateOptionsType: { type: String, default: "" },
    span: {
      type: Number,
      default: function() {
        return 6;
      }
    },
  },
  watch: {
    modelCode(val) {
      let str = this.codeField;
      if (str) {
        var arr = str.split(",");
        this.$parent.$parent.$parent.formField[arr[0]] = val[0];
        this.$parent.$parent.$parent.formField[arr[1]] = val[1];
      }
    }
  },
    watch:{
modelCode(val){
  let str=this.codeField
  if(str){
  var arr=str.split(',');
 this.$crmcf.__getParent(this,'formField',function(formField){
  formField[arr[0]]=val[0]
  formField[arr[1]]=val[1]
  })
 
  }
}
  },
  // props: {
  //   dateType: { type: String, default: "daterange" },
  //   format: { type: String, default: "yyyy-MM-dd hh:mm:ss" },
  //   // 日期控件选项类型
  //   dateOptionsType: { type: String, default: "" }
  //   // modelCode: { type: String, default: "" }
  // },
  data() {
    return {
      pickerOptions: {}
    };
  }
  // created() {
  //   const that = this;
  //   that.pickerOptions.disabledDate = function(time) {
  //     if (that.dateOptionsType) {
  //       switch (that.dateOptionsType) {
  //         // 禁用当前日期之后的日期（不包括当前日期）
  //         case "1":
  //           return time.getTime() > Date.now();
  //         // 禁用当前日期之前的日期（包括当前日期）
  //         case "2":
  //           return time.getTime() < Date.now();
  //       }
  //     }
  //     return false;
  //   };
  // }
};
</script>
