<!--
* description: 车辆选择（含输入框，多选）
* author: dxuem
* createdDate: 2019-10-21
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
      ></validateFormate>
    </el-col>
    <vin
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
    ></vin>
  </section>
</template>
<script>
import { searchInputMixins } from "@/components/mixins/searchInputMixins";
import { valueObjectMixins } from "@/components/mixins/valueObjectMixins";
import lableName from "@/components/lableName";
import vin from "./swd_Vin";
import validateFormate from "@/components/validateFormate";
export default {
  name:"crmVin",
  props:{
    isMul:{type:Boolean,default:false}
  },
  // 组件混入对象
  mixins: [searchInputMixins, valueObjectMixins],
  components: {
    vin,
    lableName, //标题溢出样式组件
    validateFormate //校验提示样式组件
  },
  data () {
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
        parent.formField.carBrandCode &&
        parent.formField.carBrandCode !== ""
      ) {
        //赋值
        this.curValueObject.carBrandCode = parent.formField.carBrandCode;
        this.curPopupsKey = this.codeField + this.$utils.generateId();
      } else {
        // this.$alert('请先选择品牌', '提示', {
        //   confirmButtonText: '确定',
        //   callback: action => {
        //     this.close()
        //   }
        // })
      }
    },
    // getComponentCode(val, txt, codeField, comType, popupsKey) {
    //   this.$parent.$children[2].modelCode = val;
    //   this.modelText = txt;
    //   this.curPopupsVisible = false;
    // }
  }
};
</script>
