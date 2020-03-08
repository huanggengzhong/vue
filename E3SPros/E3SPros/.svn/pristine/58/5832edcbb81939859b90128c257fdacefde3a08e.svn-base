<!--
* description: 网店弹窗（多选，单选）,支持搜索
* author: meijq
* createdDate: 2019-08-21
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
          :key="item.dlrId"
          :label="item.parentDlrShortName"
          :value="item.parentDlrId"
        >{{item.parentDlrShortName}}</el-option>
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
  name: "orgDlrStatus",
  // 组件混入对象：{props[span,isShowLabel,code,isMul,labenName] data[modelCode,optionDatas,listQuery] methods[queryTable,sendCode]}
  mixins: [dropdownMixins],
  props: {
    parDlrObject: {
      type: null
    }
  },
  components: {
    lableName, //标题溢出样式组件
    validateFormate //校验提示样式组件
  },
  data() {
    return {
      placeholder: this.$t("sys.tips.esTip0"),
      curLabelName:
        this.labelName === ""
          ? this.$suit.globalLabel.ONLINE_STROE
          : this.labelName,
      // API配置对象
      apiConfig: orgApis.mdmOrgDlrQueryByPage,
      // 表格中台返回网格的字段
      apiQueryRow: [
        "dlrShortName",
        "carBrandCode",
        "dlrStatus",
        "orgType",
        "provinceId",
        "cityId",
        "linkAddr",
        "oemCode",
        "groupCode",
        "oemId",
        "groupId",
        "dlrId",
        "parentDlrId"
      ],
      listQuery: {
        isEnable: "1",
        parentDlrId: this.parDlrObject.parentDlrId || "",
        orgType: this.parDlrObject.orgType || ""
      }
    };
  }
};
</script>
