<!--
* description: 采购需求维护-新增、修改弹窗
* xulfan
-->
<template>
  <section class="editPurReqQry">
    <el-dialog
      :close-on-click-modal="false"
      :title="textMap[popupsState]"
      :append-to-body="true"
      :visible.sync="curPopupsVisible"
      @close="sendCode"
      width="1000px"
    >
      <div class="filter-container filter-params">
        <el-row :gutter="24">
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
  created() {
    this.setDate();
  },
  data() {
    return {
      // 保存API配置对象
      apiConfig: veApis.vePurReqSave,
      // 动态组件-按钮
      tableButtons: [
        {
          compKey: "btnKey1",
          type: "primary",
          size: "small",
          clickEvent: () => this.save(),
          text: this.$t("sys.button.confirm") /**确认 */
        },
        {
          compKey: "btnKey2",
          type: "",
          size: "small",
          clickEvent: () => this.reset(),
          text: this.$t("sys.button.reset") /**重置 */
        },
        {
          compKey: "btnKey3",
          type: "",
          size: "small",
          clickEvent: () => this.sendCode(),
          text: this.$t("sys.button.cancel") /**取消 */
        }
      ],
      // 动态组件-查询条件
      tableComponents: [
        {
          compKey: "compKey1",
          labelName: this.$t("ve.label.purReqId") /**需求单编号*/,
          codeField: "purReqId",
          isRequire: true,
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          parentFileds: "disabled:purReqId-purReqId",
          disabled: null,
          isMust: true
        },
        {
          compKey: "compKey2",
          labelName: this.$t("org.label.creator") /**提交人*/,
          codeField: "creator",
          isRequire: true,
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          parentFileds: "disabled:purReqId-creator",
          disabled: null,
          isMust: true
        },
        {
          compKey: "compKey3",
          labelName: this.$t("ve.label.subMitDate") /**提交日期 */,
          codeField: "subMitDate",
          component: () => import("@/components/org/datePicker/datePicker"),
          type: "datePicker",
          dateOptionsType: "0",
          isMust: true
        },
        {
          compKey: "compKey4",
          labelName: this.$t("org.label.carBrand") /**品牌 */,
          isMul: false,
          codeField: "carBrandCode",
          isRequire: true,
          component: () => import("@/components/org/carBrand/carBrand"),
          type: "dropdownList",
          isMust: true
        },
        {
          compKey: "compKey5",
          labelName: this.$t("org.label.carConfig") /**车型 */,
          codeField: "carConfigId",
          isRequire: true,
          component: () => import("@/components/org/carTypeConfig"),
          type: "inputText",
          isMust: true
        },
        {
          compKey: "compKey6",
          labelName: this.$t("org.label.carColor") /**车身颜色 */,
          codeField: "carColorId",
          isRequire: true,
          component: () => import("@/components/org/carColor"),
          type: "propus",
          isMust: true
        },
        {
          compKey: "compKey7",
          labelName: this.$t("org.label.carIncolor") /**内饰色 */,
          codeField: "carIncolorId",
          isRequire: true,
          component: () => import("@/components/org/TrimPopupColor"),
          type: "propus",
          isMust: true
        },
        {
          compKey: "compKey8",
          labelName: this.$t("ve.label.quantity") /**数量 */,
          codeField: "quantity",
          isRequire: true,
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        },
        {
          compKey: "compKey9",
          labelName: this.$t("ve.label.preInStockDate") /**希望到货日期 */,
          codeField: "preInStockDate",
          isRequire: true,
          component: () => import("@/components/org/datePicker/datePicker"),
          type: "datePicker",
          dateOptionsType: "0",
          isMust: true
        }
      ],
      // 标题
      textMap: {
        edit: this.$t("ve.label.PurReqQryEdit") /**修改需求维护信息 */,
        add: this.$t("ve.label.PurReqQryAdd") /**添加需求维护信息 */
      },
      // 表单数据（无需赋值，由混入对象赋值）
      formField: {
        purReqId: "",
        creator: "",
        subMitDate: "",
        carBrandCode: "",
        carConfigId: "",
        carColorId: "",
        carIncolorId: "",
        quantity: "",
        preInStockDate: "",
        dlrId: "",
        secDlrId: ""
      }
    };
  },
  methods: {
    setDate() {
      var date = new Date();
      this.formField.subMitDate =
        date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
    },
    //保存
    save() {
      const that = this;

      if (that.$utils.isEmpty(that.formField.purReqId)) {
        that.$message({
          message: this.$t("ve.label.PurReqQryMSG1") /**请输入需求单编号 */,
          type: "warning",
          duration: 2000
        });
        return;
      }
      if (that.$utils.isEmpty(that.formField.creator)) {
        that.$message({
          message: this.$t("ve.label.PurReqQryMSG2") /**请输入提交人名称*/,
          type: "warning",
          duration: 2000
        });
        return;
      }
      if (that.$utils.isEmpty(that.formField.carBrandCode)) {
        that.$message({
          message: this.$t("ve.label.PurReqQryMSG3") /*"请输入品牌"*/,
          type: "warning",
          duration: 2000
        });
        return;
      }
      if (that.$utils.isEmpty(that.formField.carConfigId)) {
        that.$message({
          message: this.$t("ve.label.PurReqQryMSG4") /*"请选择车型"*/,
          type: "warning",
          duration: 2000
        });
        return;
      }
      if (that.$utils.isEmpty(that.formField.carColorId)) {
        that.$message({
          message: this.$t("ve.label.PurReqQryMSG5") /*"请选择车身颜色"*/,
          type: "warning",
          duration: 2000
        });
        return;
      }
      // if (that.$utils.isEmpty(that.formField.carIncolorId)) {
      //   that.$message({
      //     message: "请选择内饰色",
      //     type: "warning",
      //     duration: 2000
      //   });
      //   return;
      // }
      if (that.$utils.isEmpty(that.formField.quantity)) {
        that.$message({
          message: this.$t("ve.label.PurReqQryMSG6") /*"请输入数量"*/,
          type: "warning",
          duration: 2000
        });
        return;
      }
      if (that.$utils.isEmpty(that.formField.preInStockDate)) {
        that.$message({
          message: this.$t("ve.label.PurReqQryMSG7") /*"请选择希望到货日期"*/,
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
