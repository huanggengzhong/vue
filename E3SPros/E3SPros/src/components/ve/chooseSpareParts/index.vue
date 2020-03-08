<!--
* description: 车型配置弹出框（含输入框）
* author: luojx
* createdDate: 2019-08-02
*  2019-08-09 修改文字溢出效果-封装/校验效果 liyanm
-->
<template>
  <section
    class="carTypeConfig"
    v-show="curIsShow"
    :key="fullComponentKey"
  >
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
      <validateFormate
        :curLabelName="curLabelName"
        :validrule="validrule"
      ></validateFormate>
    </el-col>
    <chooseSpareParts
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
    ></chooseSpareParts>
  </section>
</template>
<script>
import { searchInputMixins } from "@/components/mixins/searchInputMixins";
import { valueObjectMixins } from "@/components/mixins/valueObjectMixins";
import { orgApis } from "@/api/graphQLApiList/org";
import lableName from "@/components/lableName";
import chooseSpareParts from "@/components/ve/chooseSpareParts/chooseSpareParts";
import validateFormate from "@/components/validateFormate";
export default {
  // 组件混入对象
  mixins: [searchInputMixins, valueObjectMixins],
  components: {
    chooseSpareParts,
    lableName, //标题溢出样式组件
    validateFormate //校验提示样式组件
  },
  data() {
    return {
      placeholder: this.$t("sys.tips.esTip0"),
      curLabelName:
        this.labelName === "" ? this.$t("org.label.carConfig") : this.labelName
    };
  },
  methods: {
    // 重写显示时执行事件
    onShow() {
      var that = this;
      if (that.isColComp !== true) {
        var parent = that.$utils.getHasFormFieldParentComponent(that);
        if (
          parent.formField &&
          parent.formField.carBrandCode &&
          parent.formField.carBrandCode !== ""
        ) {
          // 赋值  （已经改为在父组件中使用watch监听赋值，parentFileds传值）
          //that.curValueObject.carBrandCode = parent.formField.carBrandCode;
          //that.curPopupsKey = that.codeField + that.$utils.generateId();
        } else {
          that.$alert("请先选择品牌", "提示", {
            confirmButtonText: "确定",
            callback: action => {
              that.close();
            }
          });
        }
      }
    }
  }
};
</script>
