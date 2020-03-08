<!--
* description: 全局调拨量设置弹窗
* author: yangsq
* createdDate: 2019-09-24
-->
<template>
  <section class="editCarBrand">
    <el-dialog
      :close-on-click-modal="false"
      :title="textMap[popupsState]"
      :append-to-body="true"
      :visible.sync="curPopupsVisible"
      @close="sendCode"
      :key="popupsTableKey"
      width="1000px"
    >
      <div class="filter-container filter-params">
        <el-row :gutter="26">
          <component
            v-for="comp in tableComponents.filter(o => o.isMust === true)"
            :ref="comp.isRequire ? comp.isRequire+ comp.compKey : comp.compKey"
            :validrule="comp.validrule"
            :key="comp.compKey"
            :codeField="comp.codeField"
            :textField="comp.textField"
            :popupsKey="comp.compKey"
            :is="comp.component"
            :code="formField[comp.codeField]"
            @changeCode="getComponentCode"
            @focusCode="getFocusCode"
            :disabled="comp.disabled"
            :isRequire="comp.isRequire"
            :span="comp.span || 8"
            :labelName="comp.labelName"
            :lookuptype="comp.lookuptype"
            :dateOptionsType="comp.dateOptionsType"
          ></component>
        </el-row>
      </div>
      <div
        slot="footer"
        class="dialog-footer"
      >
        <el-button
          v-for="comp in tableButtons"
          :key="comp.compKey"
          :type="comp.type"
          @click="comp.clickEvent"
        >{{comp.text}}</el-button>
      </div>
    </el-dialog>
  </section>
</template>
<script>
import { formMixins } from "@/components/mixins/formMixins";
import { veApis } from "@/api/graphQLApiList/ve";
import OneTableTemplate from "@/components/templates/popupsOneTable";
export default {
  // 组件混入对象
  mixins: [formMixins],
  data() {
    return {
      // 保存API配置对象
      apiConfig: veApis.veAllocationRule,
      // 动态组件-按钮
      tableButtons: [
        {
          compKey: "btnKey3",
          type: "primary",
          size: "small",
          clickEvent: () => this.save(),
          text: this.$t("sys.button.save")
        }, //保存
        {
          compKey: "btnKey2",
          type: "",
          size: "small",
          clickEvent: () => this.reset(),
          text: this.$t("sys.button.reset")
        } //重置
      ],
      // 动态组件-查询条件
      tableComponents: [],
      // 静态组件-查询条件
      staticTableComponents: [
        {
          compKey: "compKey1",
          labelName: this.$t(
            "ve.label.CrossCityPercentageAssessmentAreaPercentage"
          ),
          codeField: "carBrandCode",
          component: () => import("@/components/org/commonInput/numberInput"),
          type: "inputText",
          isMust: true
        },
        // 跨市占率考核辖区百分比
        {
          compKey: "compKey2",
          labelName: this.$t(
            "ve.label.NonCityPercentageAssessmentAreaPercentage"
          ),
          codeField: "dlrShortName",
          component: () => import("@/components/org/commonInput/numberInput"),
          type: "inputText",
          isMust: true
        },
        // 同市占率考核辖区且同集团百分比
        {
          compKey: "compKey3",
          labelName: this.$t(
            "ve.label.NonCityPercentageAssessmentAreaNonPercentage"
          ),
          codeField: "RiskIdentification",
          component: () => import("@/components/org/commonInput/numberInput"),
          type: "inputText",
          isMust: true
        }
        // 同市占率考核辖区且非集团百分比
      ],
      // 标题
      textMap: {
        add: "全局调拨量设置"
      },
      // 表单数据（无需赋值，由混入对象赋值）
      formField: {
        carBrandCode: "",
        dlrShortName: "",
        RiskIdentification: ""
      }
    };
  },
  methods: {
    //保存
    save() {
      const that = this;
      //保存表单
      this.saveForm();
    }
  }
};
</script>
