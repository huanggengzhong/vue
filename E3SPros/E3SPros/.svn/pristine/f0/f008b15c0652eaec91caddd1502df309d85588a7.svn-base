<!--
* description: 采购单冻结金额设置-新增弹窗
* author: liyanm
* createdDate: 2019-07-23
-->
<template>
  <section>
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
            :parentFileds="comp.parentFileds || ''"
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
      apiConfig: veApis.veDbBaseseriesFreezeBailMutationSave,
      // 动态组件-按钮
      tableButtons: [
        {
          compKey: "btnKey3",
          type: "primary",
          size: "small",
          clickEvent: () => this.save(),
          text: "保存"
        },
        {
          compKey: "btnKey2",
          type: "",
          size: "small",
          clickEvent: () => this.reset(),
          text: "重置"
        }
      ],
      // 动态组件-查询条件
      tableComponents: [
        // {
        //   compKey: "compKey1",
        //   labelName: "品牌",
        //   codeField: "carBrandCode",
        //   isRequire: true,
        //   component: () => import("@/components/org/carBrand/carBrand"),
        //   type: "dropdownList",
        //   isMust: true
        // },

 // 显示组件
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
          compKey: "compKey20",
          labelName: this.$t("org.label.carSerise"),
          codeField: "baseSeriesId",
          parentFileds: "carBrandCode-carBrandCode",
          component: () => import("@/components/org/CarCode"),
          type: "dropdownList",
          isRequire: true,
          isMust: true
        }, //车系

        {
          compKey: "compKey10",
          labelName: "经销商",
          codeField: "dlrId",
          textField: "dlrShortName",
          isRequire: true,
          component: () => import("@/components/org/orgDlr"),
          type: "props",
          isMust: true
        },
        // {
        //   compKey: "compKey9",
        //   labelName: this.$t("org.label.carSerise"),
        //   codeField: "baseSeriesId",
        //   parentFileds: "carBrandCode-carBrandCode",
        //   component: () => import("@/components/org/CarCode"),
        //         type: "dropdownList",
        //   isMust: true
        // } ,//车系
        {
          compKey: "compKey2",
          labelName: "资金类型",
          codeField: "purcashTypeId",
          isRequire: true,
          component: () => import("@/components/ve/PurcashType"),
          type: "dropdownList",
          isMust: true
        },
        // {
        //   compKey: "compKey3",
        //   labelName: "采购单类型",
        //   parentFileds: "carBrandCode-carBrandCode",
        //   codeField: "orderTypeId",
        //   isRequire: true,
        //   component: () => import("@/components/ve/PurchaseOrderType"),
        //   type: "dropdownList",
        //   isMust: true
        // },
         {compKey: 'compKey3', labelName:"采购单类型",  lookuptype:"VE0004",  isRequire: true,codeField: 'orderTypeId', component: () => import('@/components/org/LookupValue'), type: 'dropdownList', isMust: true},
        {
          compKey: "compKey4",
          labelName: "库存类型",
          codeField: "stockType",
          isRequire: true,
          lookuptype: "VE0005",
          component: () => import("@/components/org/LookupValue"),
          type: "dropdownList",
          isMust: true
        },
        {
          compKey: "compKey5",
          labelName: "冻结节点",
          codeField: "freezeNode",
          isRequire: true,
          lookuptype: "VE0189",
          component: () => import("@/components/org/LookupValue"),
          type: "dropdownList",
          isMust: true
        },
        {
          compKey: "compKey6",
          labelName: "冻结方式",
          codeField: "freezeWay",
          isRequire: true,
          lookuptype: "VE0188",
          component: () => import("@/components/org/LookupValue"),
          type: "dropdownList",
          isMust: true
        },
        {
          compKey: "compKey7",
          labelName: "冻结金额",
          codeField: "freezeBail",
          isRequire: true,
          component: () => import("@/components/org/commonInput/numberInput"),
          type: "dropdownList",
          isMust: true
        }
      ],
      // 标题
      textMap: {
        add: "采购单冻结金额设置"
      },
      // 表单数据（无需赋值，由混入对象赋值）
      formField: {
        carBrandCode: "",
        purcashTypeId: "",
        orderTypeId: "",
        stockType: "",
        freezeNode: "",
        freezeWay: "",
        freezeBail: undefined,
        baseSeriesId:"",
        dlrId:""
      }
    };
  },
  methods: {}
};
</script>
