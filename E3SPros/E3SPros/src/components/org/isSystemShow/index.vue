<!--
* description: 是否 显示组件
*   2019-08-05 加入文字溢出效果 liyanm
*  2019-08-09 修改文字溢出效果-封装/校验效果 liyanm
-->
<template>
  <section>
    <el-col :span="span">
     <span>{{modelCode === '1'?'是':'否'}}</span>
    </el-col>
  </section>
</template>
<script>
import { orgApis } from "@/api/graphQLApiList/org";
import { dropdownMixins } from "@/components/mixins/dropdownMixins";
import lableName from "@/components/lableName";
import validateFormate from "@/components/validateFormate";
export default {
  name: "isEnable",
  // 组件混入对象：{props[span,isShowLabel,code,isMul,labenName] data[modelCode,optionDatas,listQuery] methods[queryTable,sendCode]}
  mixins: [dropdownMixins],
  components: {
    lableName, //标题溢出样式组件
    validateFormate //校验提示样式组件
  },
  props: {
    isMul: { type: Boolean, default: false }
  },
  data() {
    return {
      placeholder: this.$t("sys.tips.esTip0"),
      optionDatas: [{ code: "1", text: "是" }, { code: "0", text: "否" }],
      curLabelName: this.labelName === "" ? "是否可用" : this.labelName
    };
  },
  created(){
  },
  mothods: {}
};
</script>

<style scoped>
.el-col-12 {
  width: 100%;
}
</style>
