<!--
* description: 其他费用-状态
* author: ydche
* createdDate: 2019-07-27
* 增加文字溢出效果 liyam: 2019-08-5
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
        placeholder="请选择"
        @clear="clearCode"
        :clearable="clearable"
        @change="sendCode"
        :disabled="disabled"
        size="small"
      >
        <el-option
          v-for="item in optionDatas"
          :key="item.isEnable"
          :label="item.isEnableName"
          :value="item.isEnable"
        >{{item.isEnableName}}</el-option>
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
import { seApis } from "@/api/graphQLApiList/se";

export default {
  name: "carBrand",
  // 组件混入对象：{props[span,isShowLabel,code,isMul,labenName] data[modelCode,optionDatas,listQuery] methods[queryTable,sendCode]}
  mixins: [dropdownMixins],
  components: {
    lableName, //标题溢出样式组件
    validateFormate //校验提示样式组件
  },
  data() {
    return {
      curLabelName: this.labelName === "" ? "状态" : this.labelName,
      // API配置对象
      // apiConfig: orgApis.mdmCarBrandQueryByPage,
      // 表格中台返回网格的字段
      apiQueryRow: ["isEnable", "isEnableName"],
      optionDatas: [
        {
          isEnable: "1",
          isEnableName: "主机厂"
        },
        {
          isEnable: "0",
          isEnableName: "经销商"
        }
      ]
    };
  },
  mothods: {}
};
</script>
