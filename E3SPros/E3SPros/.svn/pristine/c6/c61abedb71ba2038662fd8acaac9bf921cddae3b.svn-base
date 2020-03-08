<!--
* description: 网格中的选中（check）组件
*   2019-08-05 加入文字溢出效果 liyanm
*  2019-08-09 修改文字溢出效果-封装/校验效果 liyanm
-->
<template>
  <section>
    <el-col :span="span">
      <lableName
        :curLabelName="curLabelName"
        :isShowLabel="isShowLabel"
        :isRequire="isRequire"
      ></lableName>
      <el-checkbox
        v-model="modelCode"
        @change="sendCode"
        :disabled="disabled"
      ></el-checkbox>
      <validateFormate
        :curLabelName="curLabelName"
        :validrule="validrule"
      ></validateFormate>

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
      curLabelName: this.labelName === "" ? "" : this.labelName,
      modelCode: this.code === "1" ? true : false || false
    };
  },
  mounted() {},
  watch: {
    code(val) {
      this.modelCode = val === "1" ? true : false || false;
    }
  },
  methods: {
    // 把变更值传出
    sendCode() {
      //   if (this.modelCode === null) {
      //     this.modelCode = this.isMul === false ? '' : []
      //   }
      //   var code = this.isMul === false ? this.modelCode : this.modelCode.join(',')
      var text = "";
      if (this.codeField !== "" && this.textField !== "") {
        var arr = code.split(",");
        var options = this.optionDatas.filter(
          o => arr.indexOf(o[this.codeField]) > -1
        );
        for (var i = 0; i < options.length; i++) {
          text += options[i][this.textField];
          if (i < options.length - 1) {
            text += ",";
          }
        }
      }
      let code = this.modelCode ? "1" : "0";
      this.$emit("changeCode", code, text, this.codeField, this.comType);
    }
  }
};
</script>

<style scoped>
.el-col-12 {
  width: 100%;
}
/deep/.el-checkbox {
  margin-right: 0;
}
</style>
