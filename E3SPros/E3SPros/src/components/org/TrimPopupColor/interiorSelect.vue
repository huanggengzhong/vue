<!--
* description: 车型配置内饰色下拉框（多选，单选）,支持搜索
* author: luojx
* createdDate: 2019-10-15
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
          :key="item.carIncolorId"
          :label="item.mdmCarIncolorExtend !== null && item.mdmCarIncolorExtend.carIncolorName !== null ? item.mdmCarIncolorExtend.carIncolorName : ''"
          :value="item.carIncolorId"
        >{{item.mdmCarIncolorExtend !== null && item.mdmCarIncolorExtend.carIncolorName !== null ? item.mdmCarIncolorExtend.carIncolorName : ''}}</el-option>
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
  name: "orgInteriorSelect",
  // 组件混入对象：{props[span,isShowLabel,code,isMul,labenName] data[modelCode,optionDatas,listQuery] methods[queryTable,sendCode]}
  mixins: [dropdownMixins],
  components: {
    lableName, //标题溢出样式组件
    validateFormate //校验提示样式组件
  },
  data() {
    return {
      placeholder: this.$t("sys.tips.esTip0"),
      curLabelName:
        this.labelName === ""
          ? this.$t('org.label.carIncolor')
          : this.labelName,
      // API配置对象
      apiConfig: orgApis.mdmCarTypeIncolorQueryListForPage,
      // 表格中台返回网格的字段
      apiQueryRow: [
        "carTypeIncolorId",
        "carConfigId",
        "carIncolorId",
        "mdmCarIncolorExtend.carIncolorName"
      ],
      // 查询条件
      listQuery: {
        carConfigId: '',
        carIncolorId: '',
        isEnable: '1'
      }
    };
  }
};
</script>
