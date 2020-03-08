<!--
* description: 一网/二网、订单余量-新增弹窗
* author: liyanm
* createdDate: 2019-08-04
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
            :text="formField[comp.textField]"
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
      apiConfig: veApis.vePurOrderSave,
      // 动态组件-按钮
      tableButtons: [
        {
          compKey: "btnKey3",
          type: "primary",
          size: "small",
          clickEvent: () => this.save(),
          text: "确认"
        },
        {
          compKey: "btnKey2",
          type: "",
          size: "small",
          clickEvent: () => this.reset(),
          text: "重置"
        },
        {
          compKey: "btnKey1",
          type: "",
          size: "small",
          clickEvent: () => this.sendCode(),
          text: "关闭"
        }
      ],
      // 动态组件-查询条件
      tableComponents: [
        {
          compKey: "compKey1",
          labelName: "品牌",
          codeField: "carBrandCode",
          isRequire: true,
          component: () => import("@/components/org/carBrand/carBrand"),
          type: "dropdownList",
          isMust: true
        },
        {
          compKey: "compKey2",
          labelName: "采购单号",
          codeField: "PUR_ORDER_CODE",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        },
        {
          compKey: "compKey3",
          labelName: "采购日期",
          codeField: "purDate",
          textField: "nowTime",
          component: () => import("@/components/org/datePicker/datePicker"),
          type: "datePicker",
          disabled: true,
          dateOptionsType: "0",
          isMust: true
        },
        {
          compKey: "compKey4",
          labelName: "供应商",
          codeField: "oemCode",
          textField: "oemCode",
          disabled: true,
          component: () => import("@/components/org/commonInput"),
          type: "	inputText",
          isMust: true
        },
        {
          compKey: "compKey5",
          labelName: "车型配置",
          codeField: "carConfigId",
          textField: "carConfigCn",
          isRequire: true,
          component: () => import("@/components/org/carTypeConfig"),
          type: "propus",
          isMust: true
        },
        {
          compKey: "compKey6",
          labelName: "车身颜色名称",
          codeField: "carColorId",
          isRequire: true,
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        },
        {
          compKey: "compKey7",
          labelName: "资金类型",
          codeField: "cashTypeId",
          isRequire: true,
          component: () => import("@/components/ve/PurcashType"),
          type: "dropdownList",
          isMust: true
        },
        {
          compKey: "compKey8",
          labelName: "内饰色",
          codeField: "carIncolorId",
          textField: "carIncolorName",
          isRequire: true,
          component: () => import("@/components/org/TrimPopupColor"),
          type: "propus",
          isMust: true
        },
        {
          compKey: "compKey9",
          labelName: "采购单类型",
          codeField: "purchaseOrderTypeId",
          isRequire: true,
          component: () => import("@/components/ve/PurchaseOrderType"),
          type: "dropdownList",
          isMust: true
        },
        {
          compKey: "compKey10",
          labelName: "是否参与在线车辆分配",
          codeField: "isEnable",
          isRequire: true,
          component: () => import("@/components/org/isEnable/isEnable"),
          type: "dropdownList",
          isMust: true
        }
      ],
      // 标题
      textMap: {
        edit: "采购单制作"
      },
      // 表单数据（无需赋值，由混入对象赋值）
      formField: {
        carBrandCode: "",
        PUR_ORDER_CODE: "",
        beginDate: "",
        carBrandCn: "",
        carConfigId: "",
        carColorId: "",
        cashTypeId: "",
        carIncolorId: "",
        purchaseOrderTypeId: "",
        isEnable: "",
        purDate: "",
        oemCode: "",
        carConfigCn: "",
        carIncolorName: ""
      },
      nowTime: ""
    };
  },
  created() {
    this.getTime();
    this.formField.purDate = this.nowTime;
  },
  methods: {
    getTime() {
      this.nowTime = new Date().toLocaleString();
    }
  }
};
</script>
