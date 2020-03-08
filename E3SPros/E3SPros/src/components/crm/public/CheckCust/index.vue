<!--
* description: 客户选择弹出框（含输入框）
* author: laimzh
* createdDate: 2019-08-14
-->
<template>
  <section class="CheckCust">
    <el-col :span="span">
      <lableName
        :curLabelName="curLabelName"
        :isShowLabel="isShowLabel"
        :isRequire="isRequire"
      ></lableName>
      <el-input
        placeholder="请选择"
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
    <CheckCust
      :popupsVisible="curPopupsVisible"
      :codeField="codeField"
      :comType="comType"
      :valueObject="curValueObject"
      :popupsKey="popupsKey"
      :code="modelCode"
      :key="curPopupsKey"
      @changeCode="getComponentCode"
      :isMul="false"
    ></CheckCust>
  </section>
</template>
<script>
import { searchInputMixins } from "@/components/mixins/searchInputMixins";
import { valueObjectMixins } from "@/components/mixins/valueObjectMixins";
import { crmApis } from "@/api/graphQLApiList/crm";
import lableName from "@/components/lableName";
import CheckCust from "@/components/crm/public/CheckCust/CheckCust";
import validateFormate from "@/components/validateFormate";
export default {
  // 组件混入对象
  mixins: [searchInputMixins, valueObjectMixins],
  components: {
    CheckCust,
    lableName, //标题溢出样式组件
    validateFormate //校验提示样式组件
  },
  data() {
    return {
      curLabelName: this.labelName === "" ? "车辆选择" : this.labelName
    };
  },
  methods: {
    // 重写显示时执行事件
    onShow() {
      var parent = this.$utils.getHasFormFieldParentComponent(this);
      if (
        parent.formField &&
        parent.formField.UID &&
        parent.formField.UID !== ""
      ) {
        //赋值
        this.curValueObject.UID = parent.formField.UID;
        this.curPopupsKey = this.codeField + this.$utils.generateId();
      } else {
        // this.$alert('请先选择品牌', '提示', {
        //   confirmButtonText: '确定',
        //   callback: action => {
        //     this.close()
        //   }
        // })
      }
    }
  }
};
</script>
