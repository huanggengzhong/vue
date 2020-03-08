<!--
* description: 经销商输入框（含弹窗）
* author: linsy
* createdDate: 2019-08-08
-->
<template>
  <section class="orgDlr">
    <el-col :span="span">
      <lableName
        :curLabelName="curLabelName"
        :isShowLabel="isShowLabel"
        :isRequire="isRequire"
      ></lableName>
      <el-input
         :placeholder="placeholder"
        v-model="modelText"
        size="small"
        suffix-icon="el-icon-search"
        clearable
        @blur="sendCode"
        @focus="getFocusCode"
      ></el-input>
      <validateFormate
        :curLabelName="curLabelName"
        :validrule="validrule"
      >
      </validateFormate>
    </el-col>
    <villageChoose
      :popupsVisible="curPopupsVisible"
      :codeField="codeField"
      :comType="comType"
      :popupsKey="popupsKey"
      :code="modelCode"
      :key="curPopupsKey"
      @changeCode="getComponentCode"
    ></villageChoose>
  </section>
</template>
<script>
import { searchInputMixins } from "@/components/mixins/searchInputMixins";
import { orgApis } from "@/api/graphQLApiList/org";
import villageChoose from "@/components/org/villageChoose/villageChoose";
import lableName from "@/components/lableName";
import validateFormate from "@/components/validateFormate";
export default {
  // 组件混入对象
  mixins: [searchInputMixins],
  components: {
    villageChoose,
    lableName, //标题溢出样式组件
    validateFormate //校验提示样式组件
  },
  data() {
    return {
      placeholder: this.$t("sys.tips.esTip0"),
      curLabelName: this.labelName === "" ? "小区" : this.labelName
    };
  }
};
</script>
