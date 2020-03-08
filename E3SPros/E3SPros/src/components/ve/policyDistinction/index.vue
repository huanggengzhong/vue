<!--
* description: 政策区分（多选，单选）,支持搜索
* author: ydche
* createdDate: 2019-09-21
*   2019-08-09 修改文字溢出效果-封装 liyanm
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
          :key="item.value"
          :label="item.labelName"
          :value="item.value"
        >{{item.labelName}}</el-option>
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
  name: "orgcarCode",
  // 组件混入对象：{props[span,isShowLabel,code,isMul,labenName] data[modelCode,optionDatas,listQuery] methods[queryTable,sendCode]}
  mixins: [dropdownMixins],
  components: {
    lableName, //标题溢出样式组件
    validateFormate //校验提示样式组件
  },
  props: {
    // 品牌编号
    brandCode: { type: String, default: "1" }
  },
  data() {
    return {
       placeholder: this.$t('sys.tips.esTip0'),
      curLabelName:
        this.labelName === ""
          ? this.$suit.globalLabel.CAR_SERIES
          : this.labelName,
      // API配置对象
      apiConfig: orgApis.mdmVeCarSeriesQueryListForPage,
      // 表格中台返回网格的字段
      apiQueryRow: [
        "carSeriesId",
        "carSeriesCode",
        "carSeriesCn",
        "carSeriesEn",
        "isEnable",
        "carBrandCode",
        "sapCarseriesCode",
        "sCarseriesDesc"
      ],
      // 查询条件
      listQuery: {

      },
      optionDatas:[
          {
            labelName:'普通政策',
            value:'1',
          },
          {
            labelName:'特殊政策',
            value:'2',
          }
      ],
    };
  }
};
</script>
