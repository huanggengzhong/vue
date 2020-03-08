<!--
* description: 管理员角色下拉框（多选，单选）,支持搜索
* xulfan
-->
<template>
  <section>
    <el-col :span="span">
      <label v-if="isShowLabel">
        <span v-if="isRequire" class="iconRequired"></span>
        {{curLabelName}}
      </label>
      <!-- <div class="ellipsisshowName" v-show="ellipsisshow">
        <span></span>
        {{curLabelName}}
      </div> -->
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
          :key="item.roleCode"
          :label="item.orgName"
          :value="item.roleCode"
        >{{item.orgName}}</el-option>
      </el-select>
    </el-col>
  </section>
</template>
<script>
import { orgApis } from "@/api/graphQLApiList/org";
import { dropdownMixins } from "@/components/mixins/dropdownMixins";
export default {
  name: "accountName",
  // 组件混入对象：{props[span,isShowLabel,code,isMul,labelName] data[modelCode,optionDatas,listQuery] methods[queryTable,sendCode]}
  mixins: [dropdownMixins],
  data() {
    return {
       placeholder: this.$t('sys.tips.esTip0'),
      curLabelName: this.labelName === "" ? "管理员角色" : this.labelName,
      // API配置对象
      apiConfig: orgApis.sysGloableRoleQueryByPage,
      // 表格中台返回网格的字段
      apiQueryRow: ["orgName", "roleCode"]
    };
  },
};
</script>
