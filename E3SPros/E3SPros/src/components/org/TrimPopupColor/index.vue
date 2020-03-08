<!--
* description: 车型配置内饰关系弹出框（含输入框）
* author: liyanm
* createdDate: 2019-08-03
*  2019-08-09 修改文字溢出效果-封装/校验效果 liyanm
-->
<template>
  <section class="carInColor">
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
        @click.native="getFocusCode"
      ></el-input>
      <validateFormate
        :curLabelName="curLabelName"
        :validrule="validrule"
      ></validateFormate>
    </el-col>
    <car-in-color
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
    ></car-in-color>
  </section>
</template>
<script>
import { searchInputMixins } from "@/components/mixins/searchInputMixins";
import { valueObjectMixins } from "@/components/mixins/valueObjectMixins";
import { orgApis } from "@/api/graphQLApiList/org";
import CarInColor from "@/components/org/TrimPopupColor/TrimPopupColor";
import lableName from "@/components/lableName";
import validateFormate from "@/components/validateFormate";
export default {
  // 组件混入对象
  mixins: [searchInputMixins, valueObjectMixins],
  components: {
    CarInColor,
    lableName, //标题溢出样式组件
    validateFormate //校验提示样式组件
  },
  data() {
    return {
      placeholder: this.$t("sys.tips.esTip0"),
      curLabelName: this.labelName === "" ? this.$t('org.label.carIncolor') : this.labelName
    };
  },
  methods: {
    // 重写显示时执行事件
    onShow() {
      if (this.isColComp !== true) {
        const that = this
        var parent = that.$utils.getHasFormFieldParentComponent(that);
        if (parent.formField && parent.formField.carConfigId) {
          // 必选
          if (parent.formField.carConfigId !== "") {
            //赋值
            //this.curValueObject.carBrandCode = parent.formField.carBrandCode;
            //this.curValueObject.carConfigId = parent.formField.carConfigId;
            //this.curPopupsKey = this.codeField + this.$utils.generateId();
          } else {
            that.$alert("请先选择车型", "提示", {
              confirmButtonText: "确定",
              callback: action => {
                that.close();
              }
            });
          }
        } else {
          that.$alert("请先选择车型", "提示", {
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
