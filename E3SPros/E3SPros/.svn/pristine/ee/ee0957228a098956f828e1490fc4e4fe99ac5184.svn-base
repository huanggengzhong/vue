<!--
* description: 销售顾问弹出框（含输入框）
* author: zouzx
* createdDate: 2019-10-10
-->
<template>
  <section class="carTypeConfig">
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
    <SalesConsultant
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
    ></SalesConsultant>
  </section>
</template>
<script>
import { searchInputMixins } from "@/components/mixins/searchInputMixins";
import { valueObjectMixins } from "@/components/mixins/valueObjectMixins";
import lableName from "@/components/lableName";
import SalesConsultant from "@/components/crm/crmEjectWindows/crmSalesConsultant/crmSalesConsultant";
import validateFormate from "@/components/validateFormate";
export default {
  // 组件混入对象
  mixins: [searchInputMixins, valueObjectMixins],
  components: {
    SalesConsultant,
    lableName, //标题溢出样式组件
    validateFormate //校验提示样式组件
  },
  data() {
    return {
      curLabelName: this.labelName === "" ? "销售顾问" : this.labelName,
      curValueObject: {
        isEnable:"1",
        positionCode:"VE0001",
      }
    };
  },
  methods: {
    // getComponentCode(val, txt) {
    //   this.modelCode = val;
    //   this.modelText = txt;
    //   this.curPopupsVisible = false;
    //   this.curPopupsKey += "1";
    //   this.sendCode();
    // },
    // 重写显示时执行事件
    onShow() {
      var parent = this.$utils.getHasFormFieldParentComponent(this);
      debugger;
      if (
        parent.formField &&
        parent.formField.serverType &&
        parent.formField.serverType !== ""
      ) {
        //赋值
        this.curValueObject.serverType = parent.formField.serverType;
        this.curPopupsKey = this.codeField + this.$utils.generateId();
      } else {
        // this.$alert('请先业务流程', '提示', {
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
