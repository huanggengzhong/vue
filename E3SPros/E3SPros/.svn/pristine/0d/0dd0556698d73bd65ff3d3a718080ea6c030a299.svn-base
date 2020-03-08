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
        placeholder="请选择"
        @clear="clearCode"
        clearable
        @change="sendCode"
        :disabled="disabled"
        size="small"
      >
        <el-option
          v-for="item in curOptionDatas"
          :key="item.purcashTypeId"
          :label="item.purcashTypeName"
          :value="item.purcashTypeId"
        >{{item.purcashTypeName}}</el-option>
      </el-select>
      <validateFormate
        :curLabelName="curLabelName"
        :validrule="validrule"
      ></validateFormate>
    </el-col>
  </section>
</template>
<script>
import { crmApis } from "@/api/graphQLApiList/crm";
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
      curLabelName:
        this.labelName === ""
          ? this.$suit.globalLabel.CAPITAL_TYPE
          : this.labelName,
      // API配置对象
      apiConfig: crmApis,
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
      curOptionDatas: []
    };
  },
  methods: {}
};
</script>
