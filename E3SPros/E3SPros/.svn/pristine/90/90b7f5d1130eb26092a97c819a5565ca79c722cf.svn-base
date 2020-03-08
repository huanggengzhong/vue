<!--
* 竞品车系维护-新增、修改弹窗
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
      apiConfig: veApis.veDbBatchordScheduleMutationSave,
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
          labelName: this.$t("org.label.carBrand"),
          codeField: "carBrandCode",
          component: () => import("@/components/org/carBrand/carBrand"),
          type: "dropdownList",
          isMust: true
        },
        {
          compKey: "compKey2",
          labelName: this.$t("org.label.carSeriesId"),
          codeField: "carSeriesId",
          parentFileds: "carBrandCode-carBrandCode",
          component: () => import("@/components/org/CarCode"),
          type: "dropdownList",
          isMust: true
        },
        {
          compKey: "compKey3",
          labelName: this.$t("ve.label.sStatus"),
          codeField: "isEnable",
          component: () => import("@/components/org/isEnable/isEnable"),
          type: "dropdownList",
          isMust: true
        },
        //值列表编码 类型   待定
        {
          compKey: "compKey4",
          labelName: this.$t("ve.label.setTypeCode"),
          lookuptype: "DB0001",
          codeField: "setTypeCode",
          component: () => import("@/components/org/LookupValue"),
          type: "dropdownList",
          isMust: true
        },
        //采购单开始日期  待国际化
        {
          compKey: "compKey5",
          labelName: this.$t("ve.label.orderBeginTime"),
          codeField: "orderBeginTime",
          component: () => import("@/components/org/datePicker/datePicker"),
          type: "datePicker",
          dateOptionsType: "0",
          isMust: true
        },
        // 采购单结束日期
        {
          compKey: "compKey6",
          labelName: this.$t("ve.label.orderEndTime"),
          codeField: "orderEndTime",
          component: () => import("@/components/org/datePicker/datePicker"),
          type: "datePicker",
          dateOptionsType: "0",
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
        carSeriesId: "",
        isEnable: "",
        setTypeCode: "",
        orderBeginTime: "",
        orderEndTime: ""
      }
    };
  },
  methods: {
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
      if (that.$utils.isEmpty(that.formField.carSeriesId)) {
        that.$message({
          message: this.$t("ve.label.batchDistPurOrderSelectCarSeri"),
          type: "warning",
          duration: 2000
        });
        return;
      }
      if (that.$utils.isEmpty(that.formField.isEnable)) {
        that.$message({
          message: this.$t("ve.label.batchDistPurOrderSelectStau"),
          type: "warning",
          duration: 2000
        });
        return;
      }
      if (that.$utils.isEmpty(that.formField.setTypeCode)) {
        that.$message({
          message: this.$t("ve.label.batchDistPurOrderSelectType"),
          type: "warning",
          duration: 2000
        });
        return;
      }
      if (that.$utils.isEmpty(that.formField.orderBeginTime)) {
        that.$message({
          message: this.$t("ve.label.batchDistPurOrderSelectOrderBegin"),
          type: "warning",
          duration: 2000
        });
        return;
      }
      if (that.$utils.isEmpty(that.formField.orderEndTime)) {
        that.$message({
          message: this.$t("ve.label.batchDistPurOrderSelectOrderEnd"),
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
