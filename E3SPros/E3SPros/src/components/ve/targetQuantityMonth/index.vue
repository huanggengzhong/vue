<!--
* description: 目标量月（多选，单选）,支持搜索
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
            labelName:'1月',
            value:'1',
          },
          {
            labelName:'2月',
            value:'2',
          },
          {
            labelName:'3月',
            value:'3',
          },
          {
            labelName:'4月',
            value:'4',
          },
          {
            labelName:'5月',
            value:'5',
          },
          {
            labelName:'6月',
            value:'6',
          },
          {
            labelName:'7月',
            value:'7',
          },
          {
            labelName:'8月',
            value:'8',
          },
          {
            labelName:'9月',
            value:'9',
          },
          {
            labelName:'10月',
            value:'10',
          },
          {
            labelName:'11月',
            value:'11',
          },
          {
            labelName:'12月',
            value:'12',
          }
      ],
    };
  }
};
</script>
