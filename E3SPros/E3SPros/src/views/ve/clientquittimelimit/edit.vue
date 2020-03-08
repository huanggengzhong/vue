<!--
* 全国经销商设置-新增、修改弹窗
* author: lixb
* createdDate: 2019-09-27
* logs:
*   2019-09-19 完成页面开发和国际化配置 lixb
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
            :format="comp.dateFormat"
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
import { parse } from "path";
export default {
  // 组件混入对象
  mixins: [formMixins],
  data() {
    return {
      // 保存API配置对象
      apiConfig: veApis.veSaleTimeLimitM,
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
        }
      ],
      // 动态组件-查询条件
      tableComponents: [
        {
          compKey: "compKey1",
          labelName: "销退开始时间",
          codeField: "saleReturnBeginDate",
          component: () => import("@/components/org/timePicker/timePicker"),
          isRequire: true,
          span:10,
          type: "datePicker",

          dateOptionsType: "1",
          isMust: true
        },
        {
          compKey: "compKey2",
          labelName: "销退结束时间",
          codeField: "saleReturnEndDate",
          component: () => import("@/components/org/timePicker/timePicker"),
          type: "datePicker",
          isRequire: true,
          span:10,
          dateOptionsType: "1",
          isMust: true
        },
        {
          compKey: "compKey3",
          labelName: "限制销退开始时间",
          codeField: "limitSaleReturnBeginDate",
          component: () => import("@/components/org/datePicker/datePicker"),
          isRequire: true,
          span:10,
          type: "datePicker",
          dateType:"datetime",
          dateOptionsType: "1",
          isMust: true,
          dateFormat: 'yyyy-MM-dd HH:mm:ss'
          
          
        },
        {
          compKey: "compKey4",
          labelName: "限制销退结束时间",
          codeField: "limitSaleReturnEndDate",
          component: () => import("@/components/org/datePicker/datePicker"),
          isRequire: true,
          span:10,
          type: "datePicker",
          dateType:"datetime",
          dateOptionsType: "1",
          isMust: true,
          dateFormat: 'yyyy-MM-dd HH:mm:ss'
        }
      ],
      // 标题
      textMap: {
        edit: this.$t(
          "org.label.EditLogTransTimeLimSet"
        ) /*物流运输时限设置修改*/,
        add: this.$t("ve.label.AllclientSet") /*全国经销商设置*/
      },
      // 表单数据（无需赋值，由混入对象赋值）
      formField: {
        saleReturnBeginDate: "",
        saleReturnEndDate: "",
        limitSaleReturnBeginDate: "",
        limitSaleReturnEndDate: ""
      }
    };
  },
  methods: {
    //保存
    save() {
      this.$utils.validataMoth(this, "validpopup");
      if (this.valid) {
        this.saveForm();
      }
    }
  }
};
</script>
<style scoped>
/deep/.el-popup-parent--hidden{
    position: relative;
}
/deep/.el-dialog {
    position: absolute;
    top: 46%;
    left: 50%;
}
</style>
