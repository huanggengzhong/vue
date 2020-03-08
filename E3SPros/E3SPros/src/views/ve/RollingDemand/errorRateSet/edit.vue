<!--
* 滚动需求误差率系数设置-新增弹窗
* zhhx
-->
<template>
  <section class="editCarBrand">
    <el-dialog
      :close-on-click-modal="false"
      :title="textMap[popupsState]"
      :append-to-body="true"
      :visible.sync="curPopupsVisible"
      @close="sendCode"
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
            :dateType="comp.dateType"
            :isMul="false"
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
      apiConfig: veApis.veErrorRateSetMutationSave,
      // 动态组件-按钮
      tableButtons: [
        {
          compKey: "btnKey3",
          type: "primary",
          size: "small",
          clickEvent: () => this.save(),
          text: this.$t("sys.button.save")
        },
        {
          compKey: "btnKey2",
          type: "",
          size: "small",
          clickEvent: () => this.reset(),
          text: this.$t("sys.button.reset")
        },
        {
          compKey: "btnKey1",
          type: "",
          size: "small",
          clickEvent: () => this.sendCode(),
          text: this.$t("sys.button.cancel")
        }
      ],
      // 动态组件-查询条件
      tableComponents: [
        {
          compKey: "compKey1",
          labelName: this.$t("org.label.carBrand") /*品牌*/,
          codeField: "carBrandCode",
          component: () => import("@/components/org/carBrand/carBrand"),
          type: "dropdownList",
          isMust: true
        },
        {
          compKey: "compKey2",
          labelName: "适用月份",
          codeField: "appliMonth",
          component: () => import("@/components/org/datePicker/datePicker"),
          type: "dropdownList",
          isMust: true
        },
        {
          compKey: "compKey3",
          labelName: "N-3月",
          codeField: "NMinusThreeMonth",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        },
        {
          compKey: "compKey4",
          labelName: "N-2月",
          codeField: "NMinusTwoMonth",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        },
        {
          compKey: "compKey5",
          labelName: "N-1月",
          codeField: "NMinusOneMonth",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        }
      ],
      // 标题
      textMap: {
        // edit: "修改竞争车系信息",
        add: this.$t("sys.button.newAdd")
      },
      // 表单数据（无需赋值，由混入对象赋值）
      formField: {
        carBrandCode: "",
        appliMonth: "",
        NMinusThreeMonth: "",
        NMinusTwoMonth: "",
        NMinusOneMonth: ""
      }
    };
  },
  methods: {
    //重置
    reset() {
      // this.formField.carBrandCode = "";
      this.formField.appliMonth = "";
      this.formField.NMinusThreeMonth = "";
      this.formField.NMinusTwoMonth = "";
      this.formField.NMinusOneMonth = "";
    },

    //保存
    save() {
      const that = this;

      if (that.$utils.isEmpty(that.formField.carBrandCode)) {
        that.$message({
          message: this.$t("ve.label.batchDistPurOrderSelectBrand"),
          type: "warning",
          duration: 2000
        });
        return;
      }
      if (that.$utils.isEmpty(that.formField.appliMonth)) {
        that.$message({
          message: "请选择适用月份",
          type: "warning",
          duration: 2000
        });
        return;
      }
      if (that.$utils.isEmpty(that.formField.NMinusThreeMonth)) {
        that.$message({
          message: "N-3月不能为空",
          type: "warning",
          duration: 2000
        });
        return;
      }
      if (that.$utils.isEmpty(that.formField.NMinusTwoMonth)) {
        that.$message({
          message: "N-2月不能为空",
          type: "warning",
          duration: 2000
        });
        return;
      }
      if (that.$utils.isEmpty(that.formField.NMinusOneMonth)) {
        that.$message({
          message: "N-1月不能为空",
          type: "warning",
          duration: 2000
        });
        return;
      }
      //保存表单
      this.saveForm();
    }
  }
};
</script>
