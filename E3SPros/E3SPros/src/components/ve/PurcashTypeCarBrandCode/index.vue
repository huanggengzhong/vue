<!--
* description: 品牌资金类型下拉框（多选，单选）,支持搜索
* author: zhhx
* createdDate: 2019-10-15
 *  
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
          :key="item.purcashTypeId"
          :label="item.purcashTypeName"
          :value="item.purcashTypeId"
        >{{item.purcashTypeName}}</el-option>
      </el-select>
      <validateFormate
        :curLabelName="curLabelName"
        :validrule="validrule"
      >
      </validateFormate>
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
      curLabelName:
        this.labelName === ""
          ? this.$suit.globalLabel.CAPITAL_TYPE
          : this.labelName,
      // API配置对象   
      apiConfig: veApis.veDbPurcashTypeBrandQueryFindAll,
      // 表格中台返回网格的字段
      apiQueryRow: [
        "purcashTypeId",
        "purcashTypeName",
        "cancelDay",
        "orderNo",
        // "carOurPriortiy",
        "isOnlineStatus",
        "isBatchStatus",
        "isEnable"
      ],
      curOptionDatas: [],
          // 下拉查询条件
      listQuery: {
        isEnable: "1",
        carBrandCode: 
        this.carBrandCode ==="" ? this.$store.getters.orgInfo.BRAND_CODE : this.carBrandCode
      }
    };
  },
  methods: {}
};
</script>
