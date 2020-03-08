<!--
* description: 多语言弹出框（含输入框）
* author: linzewen
* createdDate: 2019-09-21
-->
<template>
  <section class="carTypeConfig">
    <el-col :span="span">
      <lableName :curLabelName="curLabelName" :isShowLabel="isShowLabel" :isRequire="isRequire"></lableName>
      <el-input
        :placeholder="placeholder"
        v-model="modelText"
        :disabled="disabled"
        size="small"
        suffix-icon="el-icon-search"
        @clear="clearCode"
        clearable
        @blur="sendCode"
        @focus="getFocusCode"
      ></el-input>
      <validateFormate
      :curLabelName="curLabelName"
      :validrule="validrule"
    ></validateFormate>
    </el-col>
    <car-type-config
      :popupsVisible="curPopupsVisible"
      :codeField="codeField"
      :textField="textField"
      :comType="comType"
      :valueObject="curValueObject"
      :popupsKey="popupsKey"
      :code="modelCode"
      :text="modelText"
      :key="curPopupsKey"
      :isMul="isMul"
      @changeCode="getComponentCode"
      @close="close"
    ></car-type-config>
  </section>
</template>
<script>
import { searchInputMixins } from "@/components/mixins/searchInputMixins";
import { valueObjectMixins } from "@/components/mixins/valueObjectMixins";
import { orgApis } from "@/api/graphQLApiList/org";
import lableName from "@/components/lableName";
import CarTypeConfig from "@/views/org/configurablePageManagement/propusText";
import validateFormate from "@/components/validateFormate";
export default {
  // 组件混入对象
  mixins: [searchInputMixins, valueObjectMixins],
  components: {
    CarTypeConfig,
    lableName, //标题溢出样式组件
    validateFormate //校验提示样式组件
  },
  data() {
    return {
      placeholder: this.$t("sys.tips.esTip0"),
      curLabelName: this.labelName === "" ? "标签名称" : this.labelName
    };
  },
  methods: {
    // 获取组件回传值
    getComponentCode(val, codeField) {
      var sendFormField = { langType: "zh", langLabel: val.chineseName };
      var tempArray = [];
      tempArray.push(sendFormField);
      if(val.englishName !== ""){
        sendFormField = { langType: "en", langLabel: val.englishName };
        tempArray.push(sendFormField);
      }
      if(val.frenchName !== ""){
        sendFormField = { langType: "fr", langLabel: val.frenchName };
        tempArray.push(sendFormField);
      }
      this.modelCode = JSON.stringify(tempArray);
      this.modelText = val.chineseName;
      this.curPopupsVisible = false;
      this.curPopupsKey += "1";
      this.sendCode(codeField);
    },
    close(){
      this.curPopupsVisible = false;
      this.curPopupsKey += "1";
    },
    sendCode(codeField) {
      var code = this.modelCode;
      var text = this.modelText;
      this.$emit(
        "changeCode",
        code,
        text,
        this.codeField,
        this.comType,
        this.popupsKey,
        codeField
      );
    }
  }
};
</script>
