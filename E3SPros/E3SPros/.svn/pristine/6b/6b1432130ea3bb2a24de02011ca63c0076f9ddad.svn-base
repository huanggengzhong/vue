<!--
* 目标量类型维护-新增、修改弹窗
* xulfan
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
            :isMul="false"
          ></component>
        </el-row>
      </div>
      <div slot="footer" class="dialog-footer">
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
      apiConfig: veApis.targetAmountTypeSave,
      // 动态组件-按钮
      tableButtons: [
        {
          compKey: "btnKey3",
          type: "primary",
          size: "small",
          clickEvent: () => this.save(),
          text: this.$t("sys.button.confirm")
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
          labelName: this.$t("org.label.carBrandCn") /*品牌*/,
          codeField: "carBrandCode",
          isRequire: true,
          component: () => import("@/components/org/carBrand/carBrand"),
          type: "dropdownList",
          isMust: true,
          disabled: !this.isAdd()
        },
        {
          compKey: "compKey2",
          labelName: this.$t("org.label.targetType"),/*目标量类型*/
          codeField: "targetType",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isRequire: true,
          isMust: true
        },
        {
          compKey: "compKey3",
          labelName: this.$t("org.label.isDecimal"),/*是否小数*/
          codeField: "isDecimalCode",
          isRequire: true,
          component: () => import("@/components/org/isEnable/isEnable"),
          type: "dropdownList",
          isMust: true
        },
        {
          compKey: "compKey4",
          labelName: this.$t("org.label.carryingUnit"),/*携带单位*/
          codeField: "carryingUnit",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        },
        {
          compKey: "compKey5",
          labelName: this.$t("org.label.isStatistics"),/*是否统计*/
          codeField: "isStatisticsCode",
          isRequire: true,
          component: () => import("@/components/org/isEnable/isEnable"),
          type: "dropdownList",
          isRequire: true,
          isMust: true
        },
        {
          compKey: "compKey6",
          labelName: this.$t("org.label.enableSituation"),/*启用状态*/
          codeField: "isEnable",
          isRequire: true,
          component: () => import("@/components/org/isEnable/isEnable"),
          type: "dropdownList",
          isRequire: true,
          isMust: true
        }
      ],
      // 标题
      textMap: {
        edit: this.$t('org.label.EditTargetAmountType'),/*修改目标量类型*/
        add: this.$t('org.label.AddTargetAmountType'),/*新增目标量类型*/
      },
      // 表单数据（无需赋值，由混入对象赋值）
      formField: {
        carBrandCode: "",
        targetType: "",
        isDecimalCode: "",
        carryingUnit: "",
        isStatisticsCode: "",
        isEnable: ""
      }
    };
  },
  methods: {
    //保存
    save() {
      const that = this;

      if (that.$utils.isEmpty(that.formField.carBrandCode)) {
        that.$message({
          message: this.$t("org.label.selCarBrand"),/*请选择品牌*/
          type: "warning",
          duration: 2000
        });
        return;
      }
      if (that.$utils.isEmpty(that.formField.targetType)) {
        that.$message({
          message: this.$t("org.label.inputTargetType"),/*请输入目标量类型*/
          type: "warning",
          duration: 2000
        });
        return;
      }
      if (that.$utils.isEmpty(that.formField.isDecimalCode)) {
        that.$message({
          message: this.$t("org.label.selIsDecimal"),/*请选择是否小数*/
          type: "warning",
          duration: 2000
        });
        return;
      }
      if (that.$utils.isEmpty(that.formField.isStatisticsCode)) {
        that.$message({
          message: this.$t("org.label.selIsStatistics"),/*请选择是否统计*/
          type: "warning",
          duration: 2000
        });
        return;
      }
      if (that.$utils.isEmpty(that.formField.isEnable)) {
        that.$message({
          message: this.$t("org.label.selEnableSituation"),/*请选择启用状态*/
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
