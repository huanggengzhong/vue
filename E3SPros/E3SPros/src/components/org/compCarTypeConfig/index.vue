<!--
* description: 竞争车型下拉框（多选，单选）,支持搜索
* author: xulfan
* createdDate: 2019-09-25
* logs：
* 2019-2019-09-25 完成组件开发 xulfan
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
        filterable
        v-model="modelCode"
        :placeholder="placeholder"
        @clear="clearCode"
        clearable
        @change="sendCode"
        :disabled="disabled"
        size="small"
      >
        <el-option
          v-for="item in optionDatas"
          :key="item.compCartypeID"
          :label="item.compCartypeCn"
          :value="item.compCartypeID"
        >{{item.compCartypeCn}}</el-option>
      </el-select>
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
  name: "orgCompCarTypeConfig",
  // 组件混入对象：{props[span,isShowLabel,code,isMul,labenName] data[modelCode,optionDatas,listQuery] methods[queryTable,sendCode]}
  mixins: [dropdownMixins],
  components: {
    lableName, //标题溢出样式组件
    validateFormate //校验提示样式组件
  },
  props: {
    // 竞争品牌编号
    compBrandCode: { type: String, default: "" }
  },
  data() {
    return {
      placeholder: this.$t("sys.tips.esTip0"),
      curLabelName:
        this.labelName === ""
          ? this.$suit.globalLabel.CAR_SERIES
          : this.labelName,
      // API配置对象
      apiConfig: orgApis.mdmCompCarTypeQueryFindAll,
      // 表格中台返回网格的字段
      apiQueryRow: [
        "compBrandCode",
        "compBrandCn",
        "compBrandEn",
        "compCarseriesID",
        "compCarseriesCode",
        "compCarseriesName",
        "compCartypeID",
        "compCartypeCod",
        "compCartypeCn",
        "isEnable"
      ],
      // 查询条件
      listQuery: {
        isEnable: "1",
        compBrandCode:
          this.compBrandCode === ""
            ? this.$store.getters.orgInfo.BRAND_CODE
            : this.compBrandCode
      }
    };
  }
};
</script>
