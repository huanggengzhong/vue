<template>
  <el-col :span="span">
    <lableName :curLabelName="labelName" :isShowLabel="isShowLabel" :isRequire="isRequire"></lableName>
    <div class="demo-image__preview">
      <el-image style="width: 100px; height: 100px" :src="url" :preview-src-list="url"></el-image>
    </div>
    <validateFormate :curLabelName="labelName" :validrule="validrule"></validateFormate>
  </el-col>
</template>

<script>
import lableName from "@/components/lableName";
import validateFormate from "@/components/validateFormate";
export default {
  name: "img",
  components: {
    lableName, //标题溢出样式组件
    validateFormate //校验提示样式组件
  },
  props: {
    url: { type: String },
    labelName: { type: String, default: "证件照" },
    span: { type: Number, default: 6 }
  },

  data() {
    return {
      // url:this.$parent.formFlied.code,
    };
  }
};
</script>