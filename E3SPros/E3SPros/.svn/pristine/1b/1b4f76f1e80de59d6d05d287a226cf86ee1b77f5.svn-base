<!--
* description: 是否选择下拉框
* author: laimzh
* createdDate: 2019-08-14
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
        v-model="modelCode"
        placeholder="请选择"
        clearable
        @change="sendCode"
        :disabled="disabled"
        size="small"
      >
        <el-option
          v-for="item in optionDatas"
          :key="item.code"
          :label="item.text"
          :value="item.code"
        >{{item.text}}</el-option>
      </el-select>
      <validateFormate
        :curLabelName="curLabelName"
        :validrule="validrule"
      ></validateFormate>
    </el-col>
  </section>
</template>
<script>
import lableName from "@/components/lableName";
import validateFormate from "@/components/validateFormate";
import { dropdownMixins } from "@/components/mixins/dropdownMixins";

export default {
  name: "YesOrNo",
  mixins: [dropdownMixins],
  components: {
    lableName, //标题溢出样式组件
    validateFormate //校验提示样式组件
  },
  props: {
    // 行内占比
    span: { type: Number, default: 6 },
    // 是否显示标签
    isShowLabel: { type: Boolean, default: true },
    // 默认选中
    code: { type: String, default: "" },
    // 控件label名称
    labelName: { type: String, default: "" },
    // 组件类型标识（用于标识不同组件，每个视图中唯一）(预留)
    comType: { type: String, default: "" },
    // 组件传值字段名称（与code对象绑定的字段名称，即视图中：formField对应的字段名称）
    // 如：视图中配置：code="formField.carBrandCode"，则codeField="carBrandCode"
    codeField: { type: String, default: "" },
    // 是否必填/选
    isRequire: { type: Boolean, default: false },
    // 是否不可用
    disabled: { type: Boolean, default: false },
    // 单选多选
    isMul: { type: Boolean, default: false }
  },
  data() {
    return {
      modelCode: this.code,
      optionDatas: [{ code: "1", text: "是" }, { code: "0", text: "否" }],
      curLabelName: this.labelName === "" ? "是否可用" : this.labelName,
      // 是否显示字数溢出提示
      ellipsisshow: false
    };
  },
  watch: {
    code(val) {
      this.modelCode = val;
    }
  },
  methods: {
    sendCode() {
      var code =
        typeof this.modelCode === "string"
          ? this.modelCode
          : this.modelCode.join(",");
      var text = "";
      for (var i = 0; i < this.optionDatas.length; i++) {
        text += this.optionDatas[i][this.textField];
        if (i < this.optionDatas.length - 1) {
          text += ",";
        }
      }
      this.$emit("changeCode", code, text, this.codeField, this.comType);
    },
    // 是否溢出显示
    ellipsvisible() {
      if (this.labelName.length > 4) {
        this.ellipsisshow = true;
      } else {
        this.ellipsisshow = false;
      }
    },
    ellipsinvisible() {
      this.ellipsisshow = false;
    }
  }
};
</script>

