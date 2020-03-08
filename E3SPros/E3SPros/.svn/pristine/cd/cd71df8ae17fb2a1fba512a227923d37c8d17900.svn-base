<!--
* description: 储区下拉框（多选，单选）,支持搜索
* author: linsy
* createdDate: 2019-08-06
* logs: 2019-09-19 增加国际化 ydche
-->
<template>
  <section>
    <el-col :span="span">
      <lableName
        :curLabelName="curLabelName"
        :isShowLabel="isShowLabel"
        :isRequire="isRequire"
      ></lableName>
      <el-select
        :multiple="isMul"
        collapse-tags
        :filterable="filterable"
        v-model="modelCode"
         :placeholder="placeholder"
        @clear="clearCode"
        :clearable="clearable"
        @change="sendCode"
        :disabled="disabled"
        size="small"
      >
        <el-option
          v-for="item in optionDatas"
          :key="item.carAreaCode"
          :label="item.carAreaName"
          :value="item.carAreaCode"
        >{{item.carAreaName}}</el-option>
      </el-select>
      <validateFormate
        :curLabelName="curLabelName"
        :validrule="validrule"
      ></validateFormate>
    </el-col>
  </section>
</template>
<script>
import { veApis } from "@/api/graphQLApiList/ve";
import { dropdownMixins } from "@/components/mixins/dropdownMixins";
import lableName from "@/components/lableName";
import validateFormate from "@/components/validateFormate";
export default {
  name: "PurcashType",
  // 组件混入对象：{props[span,isShowLabel,code,isMul,labelName] data[modelCode,optionDatas,listQuery] methods[queryTable,sendCode]}
  mixins: [dropdownMixins],
  components: {
    lableName, //标题溢出样式组件
    validateFormate //校验提示样式组件
  },
  data() {
    return {
      placeholder: this.$t("sys.tips.esTip0"),
      listQuery: {
        carBrandCode: this.$store.getters.orgInfo.BRAND_CODE || "1"
      },
      curLabelName:
        this.labelName === ""
          ? this.$t("ve.label.CarAreaName") /*储区*/
          : this.labelName,
      // API配置对象
      apiConfig: veApis.veStockArea,
      // 表格中台返回网格的字段
      apiQueryRow: [
        "carAreaCode",
        "carHouseName",
        "carAreaName",
        "carAreaManager",
        "isEnable",
        "remark",
        "updateControlId",
        "carStockAreaId"
      ]
    };
  },
  mounted() {}
};
</script>
