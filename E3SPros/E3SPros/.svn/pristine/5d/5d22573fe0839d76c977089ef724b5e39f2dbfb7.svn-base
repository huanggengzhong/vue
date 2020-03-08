<!--
* description: 变更网点（含输入框，多选）
* author: dxuem
* createdDate: 2019-10-09
-->
<template>
  <section class="carTypeConfig">
    <el-col :span="span">
      <lableName :curLabelName="curLabelName" :isShowLabel="isShowLabel" :isRequire="isRequire"></lableName>
      <el-input readonly="readonly" v-model="input" placeholder="请选择" suffix-icon="el-icon-s-unfold" @click.native="showdialog()"></el-input>
      <!-- <el-input
        placeholder="请选择"
        v-model="modelText"
        :disabled="disabled"
        size="small"
        suffix-icon="el-icon-search"
        @clear="clearCode"
        clearable
        @blur="sendCode"
        @focus="getFocusCode"
      ></el-input> -->
      <validateFormate :curLabelName="curLabelName"></validateFormate>
    </el-col>
    <Upload :swd_Upload="Upload" ref="trans"></Upload>
  </section>
</template>
<script>
import { searchInputMixins } from "@/components/mixins/searchInputMixins";
import { valueObjectMixins } from "@/components/mixins/valueObjectMixins";
import lableName from "@/components/lableName";
import Upload from "./swd_Upload";
import validateFormate from "@/components/validateFormate";
export default {
  // 组件混入对象
  mixins: [searchInputMixins, valueObjectMixins],
  components: {
    Upload,
    lableName, //标题溢出样式组件
    validateFormate //校验提示样式组件
  },
  data() {
    return {
        Upload:{
            dialogVisible:false,
        },
      curLabelName: this.labelName === "" ? "证件照" : this.labelName
    };
  },
  methods: {}
};
</script>