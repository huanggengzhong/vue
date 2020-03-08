<!--
* description: 品牌下拉框（多选，单选）,支持搜索
* author: luojx
* createdDate: 2019-07-27
* 增加文字溢出效果 liyam: 2019-08-5
*  2019-08-09 修改文字溢出效果-封装/校验效果 liyanm
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
        :filterable="false"
        v-model="modelCode"
        :placeholder="placeholder"
        @clear="clearCode"
        :clearable="false"
        @change="sendCode"
        :disabled="disabled"
        size="small"
      >
        <el-option
          v-for="item in optionDatas"
          :key="item[codeField]"
          :label="item[textField]"
          :value="item[codeField]"
        >{{item[textField]}}</el-option>
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
  name: "carBrand",
  // 组件混入对象：{props[span,isShowLabel,code,isMul,labenName] data[modelCode,optionDatas,listQuery] methods[queryTable,sendCode]}
  mixins: [dropdownMixins],
  components: {
    lableName, //标题溢出样式组件
    validateFormate //校验提示样式组件
  },
  props: {
    // 获取组件中的名称，如：textField="carBrandCode"
    codeField: { type: String, default: "compBrandCode" },
    // 获取组件中的名称，如：textField="carBrandName"
    textField: { type: String, default: "compBrandCn" },
    // 是否使用默认品牌
    isUseDefault: { type: Boolean, default: true }
  },
  data() {
    return {
      placeholder: "请选择",
      curLabelName: this.labelName === "" ? "竞品品牌" : this.labelName,
      // API配置对象
      apiConfig: crmApis.mdmCompBrandQueryFindAll,
      // 表格中台返回网格的字段
      apiQueryRow: ["compBrandCn", "compBrandCode"]
    };
  },
  created() {
    // 如果没有赋值，则品牌加入默认值
    if (!this.code || this.code === "") {
      if (this.isMul === true) {
        this.modelCode = [];
      } else {
        this.modelCode = '';
      }
      this.sendCode();
    }
  },
  updated() {
    this.removeTag();
  },
  methods: {
    // 移除tag时判断是否清除所有
    removeTag() {
      if (this.isMul === true && this.modelCode.length === 0) {
        this.modelCode = [];
        this.sendCode();
      }
    }
  }
};
</script>
