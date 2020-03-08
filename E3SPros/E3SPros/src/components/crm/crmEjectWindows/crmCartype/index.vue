<!--
* description: 车型配置弹出框（含输入框）
* author: zxuan
* createdDate: 2019-10-09
-->
<template>
  <section class="carTypeConfig" v-show="curIsShow" :key="fullComponentKey">
    <el-col :span="span">
      <lableName
        :curLabelName="curLabelName"
        :isShowLabel="isShowLabel"
        :isRequire="isRequire"
      ></lableName>
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
      <validateFormate :curLabelName="curLabelName"></validateFormate>
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
      :returnCodeField="returnCodeField"
      :returnTextField="returnTextField"
      @changeCode="getComponentCode"
      ref="dialogComponent"
    ></car-type-config>
  </section>
</template>
<script>
import { searchInputMixins } from "@/components/mixins/searchInputMixins";
import { valueObjectMixins } from "@/components/mixins/valueObjectMixins";
import { crmApis } from "@/api/graphQLApiList/crm";
import { orgApis } from "@/api/graphQLApiList/org";
import lableName from "@/components/lableName";
import CarTypeConfig from "@/components/crm/crmEjectWindows/crmCartype/carTypeConfig";
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
      placeholder: this.$t('sys.tips.esTip0'),
      curLabelName: this.labelName === "" ? this.$t('org.label.carConfig') : this.labelName
    };
  },
  methods: {
    // 重写显示时执行事件
    onShow() {
      var that = this
      var parent = that.$utils.getHasFormFieldParentComponent(that);
    }
  }
};
</script>
