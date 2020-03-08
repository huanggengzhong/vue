<!--
* description: 仓库信息下拉框（多选，单选）,支持搜索
* author: luojx
* createdDate: 2019-07-28
 *   2019-08-05 加入文字溢出效果 liyanm
*  2019-08-09 修改文字溢出效果-封装/校验效果 liyanm
-->
<template>
  <section class="wareHouseMulti">
    <el-col :span="span">
      <lableName
        :curLabelName="curLabelName"
        :isShowLabel="isShowLabel"
        :isRequire="isRequire"
      ></lableName>
      <el-select
        v-model="modelCode"
        :multiple="isMul"
        collapse-tags
        :filterable="filterable"
        :placeholder="placeholder"
        @clear="clearCode"
        :clearable="clearable"
        @change="sendCode"
        :disabled="disabled"
        @visible-change="visibleChange"
        size="small"
      >
        <el-option
          v-for="item in optionDatas"
          :key="item[optionFields.length > 1 ? optionFields[0] : defOptionFields[0]]"
          :label="item[optionFields.length > 1 ? optionFields[1] : defOptionFields[1]]"
          :value="item[optionFields.length > 1 ? optionFields[0] : defOptionFields[0]]"
        >{{item[optionFields.length > 1 ? optionFields[1] : defOptionFields[1]]}}</el-option>
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
  name: "veWareHouseMulti",
  // 组件混入对象：{props[span,isShowLabel,code,isMul,labenName] data[modelCode,optionDatas,listQuery] methods[queryTable,sendCode]}
  mixins: [dropdownMixins],
  components: {
    lableName, //标题溢出样式组件
    validateFormate //校验提示样式组件
  },
  data() {
    return {
      placeholder: this.$t('sys.tips.esTip0'),
      curLabelName: this.labelName === "" ? this.$t("org.label.warnHome") : this.labelName,
      // 默认绑定数据对象字段
      defOptionFields: ['carStockHouseId', 'carHouseName'],
      // API配置对象
      apiConfig: veApis.veDbCarStockHouseQueryFindAll,
      // 表格中台返回网格的字段
      apiQueryRow: ["carStockHouseId","carHouseCode", "carHouseName"],
         // 下拉查询条件
      listQuery: {
        isEnable: "1",
        carBrandCode: this.$store.getters.orgInfo.BRAND_CODE,
        // 如果是主机厂级别仓库则使用OEM_CODE作为条件
        dlrId: this.isHost === true ? this.$store.getters.orgInfo.OEM_CODE : ''
      }
    }
  }
};
</script>
