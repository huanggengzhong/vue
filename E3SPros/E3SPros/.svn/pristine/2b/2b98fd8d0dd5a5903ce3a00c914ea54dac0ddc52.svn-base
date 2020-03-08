<!--
* description:
* author: ydche
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
import { orgApis } from "@/api/graphQLApiList/org";
import { seApis } from "@/api/graphQLApiList/se";
import OneTableTemplate from "@/components/templates/popupsOneTable";
export default {
  // 组件混入对象
  mixins: [formMixins],
  data() {
    return {
      // 保存API配置对象
      apiConfig: seApis.ServiceCarSeries004,
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
        }
      ],
      // 动态组件-查询条件
      tableComponents: [
        {
          compKey: "compKey1",
          labelName: "车辆品牌",
          codeField: "CAR_BRAND_CN",
          isRequire: true,
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          disabled: true,
          isMust: true
        },
        {
          compKey: "compKey2",
          labelName: "销售车系",
          codeField: "CAR_SERIES_CODE",
          isRequire: true,
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          disabled: true,
          isMust: true
        },
        {
          compKey: "compKey3",
          labelName: "销售车型",
          codeField: "SMALL_CAR_TYPE_CODE",
          isRequire: true,
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          disabled: true,
          isMust: true
        },
        {
          compKey: "compKey5",
          labelName: "服务车系编码",
          codeField: "S_CARSERIES_CODE",
          isRequire: true,
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        }
      ],
      // 标题
      textMap: {
        edit: "服务车系维护",
        add: "添加品牌信息"
      },
      // 表单数据（无需赋值，由混入对象赋值）
      formField: {
        CAR_BRAND_CN: "",
        CAR_SERIES_CODE: "",
        SMALL_CAR_TYPE_CODE: "",
        S_CARSERIES_CODE: "",
        SERVICE_CAR_TYPE: ""
      }
    };
  },
  methods: {
    //保存
    save() {
      const that = this;
      if (
        that.$utils.isEmpty(that.formField.S_CARSERIES_CODE) ||
        that.formField.S_CARSERIES_CODE === ""
      ) {
        that.$message({
          message: "请输入服务车系编码",
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
