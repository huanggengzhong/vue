<!--
* description: 员工选择输入框（含弹窗）
* author: ydche
* createdDate: 2019-08-08
-->
<template>
  <section class="orgDlr">
    <el-col :span="span">
      <lableName
        :isShowLabel="isShowLabel"
        :isRequire="isRequire"
        :curLabelName="curLabelName"
      >{{curLabelName}}</lableName>
      <el-input
         :placeholder="placeholder"
        v-model="modelText"
        size="small"
        suffix-icon="el-icon-search"
        clearable
        @blur="sendCode"
        @clear="clearCode"
        @closeWareHouse="close"
        @focus="getFocusCode"
      ></el-input>
      <validateFormate
        :curLabelName="curLabelName"
        :validrule="validrule"
      ></validateFormate>
    </el-col>
    <employeeSelect
      :popupsVisible="curPopupsVisible"
      :codeField="codeField"
      :comType="comType"
      :textField="textField"
      :popupsKey="popupsKey"
      :code="modelCode"
      :key="curPopupsKey"
      @changeCode="getComponentCode"
      :isMul="isMuls"
    ></employeeSelect>
  </section>
</template>
<script>
import { searchInputMixins } from "@/components/mixins/searchInputMixins";
import { orgApis } from "@/api/graphQLApiList/org";
import lableName from "@/components/lableName";
import validateFormate from "@/components/validateFormate";
import employeeSelect from "@/components/ve/employeeSelect/employeeSelect";
export default {
  // 组件混入对象
  mixins: [searchInputMixins],
  components: {
    employeeSelect,validateFormate,
    lableName
  },
  data() {
    return {
      placeholder: this.$t("sys.tips.esTip0"),
      isMuls: true
    };
  },
  methods: {}
};
</script>
