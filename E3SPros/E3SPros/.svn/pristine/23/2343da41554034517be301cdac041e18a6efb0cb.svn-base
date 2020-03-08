<!--
* description: 车型配置车身颜色关系弹出框（含输入框）
* author: luojx
* createdDate: 2019-08-03
 *   2019-08-05 加入文字溢出效果 liyanm
-->
<template>
  <section class="carColor">
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
    <car-color
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
    ></car-color>
  </section>
</template>
<script>
import { searchInputMixins } from "@/components/mixins/searchInputMixins";
import { valueObjectMixins } from "@/components/mixins/valueObjectMixins";
import { orgApis } from "@/api/graphQLApiList/org";
import CarColor from "@/components/org/carColor/carColor";
import lableName from "@/components/lableName";
import validateFormate from "@/components/validateFormate";
export default {
  // 组件混入对象
  mixins: [searchInputMixins, valueObjectMixins],
  components: {
    CarColor,
    lableName, //标题溢出样式组件
    validateFormate //校验提示样式组件
  },
  data() {
    return {
      placeholder: this.$t("sys.tips.esTip0"),
      curLabelName: this.labelName === "" ? "车身颜色查询" : this.labelName
    };
  },
  methods: {
    // 重写显示时执行事件
    onShow() {
      if (this.isColComp !== true) {
        var parent = this.$utils.getHasFormFieldParentComponent(this);
        if (parent.formField && parent.formField.carConfigId) {
          // 必选
          if (parent.formField.carConfigId !== "") {
            //赋值
            //this.curValueObject.carBrandCode = parent.formField.carBrandCode;
            //this.curValueObject.carConfigId = parent.formField.carConfigId;
            //this.curPopupsKey = this.codeField + this.$utils.generateId();
          } else {
            this.$alert("请先选择车型", "提示", {
              confirmButtonText: "确定",
              callback: action => {
                this.close();
              }
            });
          }
        } else {
          this.$alert("请先选择车型", "提示", {
            confirmButtonText: "确定",
            callback: action => {
              this.close();
            }
          });
        }
      }
    }
  }
};
</script>
