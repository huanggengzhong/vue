<!--
* description: 储位下拉框（多选，单选）,支持搜索
* author: linsy
* createdDate: 2019-08-06
* logs: 2019-09-19 增加国际化 ydche
-->
<template>
  <section>
    <el-col :span="span">
      <label v-if="isShowLabel">{{curLabelName}}</label>
      <el-select
        :multiple="isMul"
        collapse-tags
        filterable
        v-model="modelCode"
         :placeholder="placeholder"
        clearable
        @clear="clearCode"
        @change="sendCode"
        size="small"
      >
        <el-option
          v-for="item in optionDatas"
          :key="item.carStockHousePlaceId"
          :label="item.carPlaceName"
          :value="item.carStockHousePlaceId"
        >{{item.carPlaceName}}</el-option>
      </el-select>
    </el-col>
  </section>
</template>
<script>
import { veApis } from "@/api/graphQLApiList/ve";
import { dropdownMixins } from "@/components/mixins/dropdownMixins";
export default {
  name: "PurcashType",
  // 组件混入对象：{props[span,isShowLabel,code,isMul,labelName] data[modelCode,optionDatas,listQuery] methods[queryTable,sendCode]}
  mixins: [dropdownMixins],
  data() {
    return {
       placeholder: this.$t('sys.tips.esTip0'),
      curLabelName: this.labelName === "" ? this.$t('ve.label.CarPlaceName')/*储位*/ : this.labelName,
      // API配置对象
      apiConfig: veApis.veStockPlace,
      // 表格中台返回网格的字段
      apiQueryRow: [
        "carStockHousePlaceId",
        "carHouseName",
        "carAreaName",
        "carPlaceName",
        "carPlaceManger",
        "isEnable",
        "updateControlId"
      ]
    };
  }
};
</script>
