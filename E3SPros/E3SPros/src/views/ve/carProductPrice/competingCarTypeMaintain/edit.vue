<!--
* description: 竞品车型维护-新增、修改弹窗
* author: xulfan
-->
<!--
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
            :isMul="comp.isMul"
            :span="comp.span || 8"
            :labelName="comp.labelName"
            :lookuptype="comp.lookuptype"
            :dateOptionsType="comp.dateOptionsType"
          ></component>
        </el-row>
      </div>

      <component
        v-for="comp in tableComponents.filter(o => o.type === 'popupsInput')"
        :key="comp.popups.key"
        :codeField="comp.codeField"
        :popupsVisible="comp.popups.state"
        :comType="comp.popups.type"
        :is="comp.popups.component"
        :popupsKey="comp.compKey"
        :code="formField[comp.codeField]"
        @changeCode="getComponentCode"
      ></component>

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
      apiConfig: veApis.mdmCompCarTypeMutationSave,
      // 动态组件-按钮
      tableButtons: [
        {
          compKey: "btnKey1",
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
          text: this.$t("sys.button.reset") //重置
        },
        {
          compKey: "btnKey3",
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
          labelName: this.$t("org.label.carBrandCode"), //品牌编码
          codeField: "carBrandCode",
          isRequire: true,
          isMul: false,
          // disabled: !this.isAdd(),
          component: () => import("@/components/org/carBrand/carBrand"),
          type: "dropdownList",
          isMust: true
        },
        {
          compKey: "compKey2",
          labelName: this.$t("org.label.compBrandCode"), //竞争品牌编码
          codeField: "compBrandCode",
          isRequire: true,
          isMul: false,
          component: () => import("@/components/org/compCarBrand/compCarBrand"),
          type: "inputText",
          isMust: true
        },
        {
          compKey: "compKey3",
          labelName: this.$t("org.label.compCarSeriesCode"), //竞争车系编码
          codeField: "compCarseriesCode",
          isRequire: true,
          isMul: false,
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        },
        {
          compKey: "compKey4",
          labelName: this.$t("org.label.compCartypeCode"), //竞争车型编码
          isRequire: true,
          codeField: "compCartypeCode",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        },
        {
          compKey: "compKey5",
          labelName: this.$t("org.label.compCartypeCn"), //竞争车型名称
          isRequire: true,
          codeField: "compCartypeCn",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        },

        {
          compKey: "compKey6",
          labelName: this.$t("org.label.compCarTypeSID"), //竞争车型序号
          codeField: "compCartypeSID",
          isRequire: true,
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        },

        {
          compKey: "compKey7",
          labelName: this.$t("org.label.compCarTypeID"), //竞争车型ID
          codeField: "compCartypeID",
          isRequire: true,
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        },
        {
          compKey: "compKey8",
          labelName: this.$t("org.label.isEnable"), //启用状态
          codeField: "isEnable",
          isRequire: true,
          component: () => import("@/components/org/isEnable/isEnable"),
          type: "dropdownList",
          isMust: true
        },
        {
          compKey: "compKey9",
          labelName: this.$t("org.label.updateControlID"), //并发控制ID
          codeField: "updateControlID",
          isRequire: true,
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
        }
      ],
      // 标题
      textMap: {
        edit: this.$t("org.label.textMap4.EditCompetitionCarType"), //编辑竞品车型"",
        add: this.$t("org.label.textMap4.AddCompetitionCarType") //新增竞品车型"",
      },
      // 表单数据（无需赋值，由混入对象赋值）
      formField: {
        carBrandCode: "",
        compBrandCode: "",
        compCarseriesCode: "",
        compCartypeCode: "",
        compCartypeCn: "",
        compCartypeSID: "",
        compCartypeID: "",
        isEnable: "",
        updateControlId: ""
      }
    };
  },
  methods: {
    //保存
    save() {
      const that = this;

      if (that.$utils.isEmpty(that.formField.compBrandCode)) {
        that.$message({
          message: this.$t(
            "org.label.selCompBrandCode"
          ) /*请选择竞争品牌编码*/,
          type: "warning",
          duration: 2000
        });
        return;
      }
      if (that.$utils.isEmpty(that.formField.compCarseriesCode)) {
        that.$message({
          message: this.$t(
            "org.label.selCompCarseriesCode"
          ) /*请选择竞争车系编码*/,
          type: "warning",
          duration: 2000
        });
        return;
      }
      if (that.$utils.isEmpty(that.formField.compCartypeCode)) {
        that.$message({
          message: this.$t(
            "org.label.selCompCartypeCode"
          ) /*请输入竞争车型编码*/,
          type: "warning",
          duration: 2000
        });
        return;
      }
      if (that.$utils.isEmpty(that.formField.compCartypeCn)) {
        that.$message({
          message: this.$t(
            "org.label.selCompCartypeCn"
          ) /*请输入竞争车型名称*/,
          type: "warning",
          duration: 2000
        });
        return;
      }
      if (that.$utils.isEmpty(that.formField.compCarTypeSID)) {
        that.$message({
          message: this.$t(
            "org.label.selCompCarTypeSID"
          ) /*请选择竞争车型序号*/,
          type: "warning",
          duration: 2000
        });
        return;
      }
      if (that.$utils.isEmpty(that.formField.compCartypeID)) {
        that.$message({
          message: this.$t(
            "org.label.selCompCartypeID"
          ) /*请选择竞争车型ID*/,
          type: "warning",
          duration: 2000
        });
        return;
      }
      if (that.$utils.isEmpty(that.formField.isEnable)) {
        that.$message({
          message: this.$t(
            "org.label.selIsEnable"
          ) /*请选择状态*/,
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
-->
