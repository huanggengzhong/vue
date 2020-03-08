<!--
* description: 值列表查询组件（多选，单选）,支持搜索
* author: liyanm
* createdDate: 2019-07-27
 *   2019-08-05 加入文字溢出效果 liyanm
*  2019-08-09 修改文字溢出效果-封装/校验效果 liyanm
-->
<template>
  <section>
    <el-col :span="span">
      <div class="comwidth">
        <lableName :curLabelName="curLabelName" :isShowLabel="isShowLabel" :isRequire="isRequire"></lableName>

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
            :key="item.lookupValueCode"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
        <validateFormate :curLabelName="curLabelName" :validrule="validrule"></validateFormate>
      </div>
    </el-col>
  </section>
</template>
<script>
import { orgApis } from "@/api/graphQLApiList/org";
import { dropdownMixins } from "@/components/mixins/dropdownMixins";
import lableName from "@/components/lableName";
import validateFormate from "@/components/validateFormate";
export default {
  name: "orgLookupValue",
  // 组件混入对象：{props[span,isShowLabel,code,isMul,labelName] data[modelCode,optionDatas,listQuery] methods[queryTable,sendCode]}
  mixins: [dropdownMixins],
  components: {
    lableName, //标题溢出样式组件
    validateFormate //校验提示样式组件
  },
  data() {
    return {
      placeholder: this.$t("sys.tips.esTip0"),
      optionDatas: [
        { value: "0", label: "在职" },
        { value: "1", label: "离职" }
      ]
    };
  }
};
</script>
