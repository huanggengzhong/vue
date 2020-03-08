<!--
* description:试乘试驾车管理-新增、修改弹窗
* author: zxuan
* createdDate: 2019-10-09
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
import { orgApis } from "@/api/graphQLApiList/org";
import { crmApis } from "@/api/graphQLApiList/crm";
import OneTableTemplate from "@/components/templates/popupsOneTable";
export default {
  // 组件混入对象
  mixins: [formMixins],
  data() {
    return {
      // 保存API配置对象
      apiConfig: orgApis.mdmCarBrandBizSave,
      // 动态组件-按钮
      tableButtons: [
        {
          compKey: "btnKey3",
          type: "primary",
          size: "small",
          clickEvent: () => this.save(),
          text: "保存"
        }
      ],
      // 动态组件-查询条件
      tableComponents: [
        {
          compKey: "compKey1",
          labelName: "网点",
          codeField: "dlr",
          isRequire: true,
          component: () =>
            import("@/components/crm/crmEjectWindows/crmChangeDlr/index"),
          type: "propus",
          isMust: true
        },
        {
          compKey: "compKey2",
          labelName: "车型名称",
          codeField: "carConfigId",
          isRequire: false,
          component: () => import("@/components/crm/crmEjectWindows/crmCartype/index"),
          type: "propus",
          isMust: true
        },
        {
          compKey: "compKey3",
          labelName: "VIN码",
          codeField: "vin",
          isRequire: true,
          component: () => import("@/components/crm/textbox/crmTextInput"),
          type: "inputText",
          isMust: true
        },
        {
          compKey: "compKey4",
          labelName: "车牌号",
          codeField: "carNum",
          isRequire: true,
          component: () => import("@/components/crm/textbox/crmTextInput"),
          type: "inputText",
          isMust: true
        },
        {
          compKey: "compKey5",
          labelName: "行驶里程",
          codeField: "driveDistens",
          isRequire: false,
          component: () => import("@/components/crm/textbox/crmTextInput"),
          type: "inputText",
          isMust: true
        },
        {
          compKey: "compKey6",
          labelName: "状态",
          codeField: "isEnable",
          clearable: false,
          isRequire: true,
          component: () => import("@/components/crm/Select/crmIsEnable"),
          type: "dropdownList",
          isMust: true
        },
        {
          compKey: "compKey7",
          labelName: "登记日期",
          codeField: "djdate",
          clearable: false,
          isRequire: true,
          component: () => import("@/components/crm/Time/crmdatePicker"),
          type: "inputText",
          isMust: true
        },
        {
          compKey: "compKey8",
          labelName: "退役日期",
          codeField: "tydate",
          clearable: true,
          isRequire: false,
          component: () => import("@/components/crm/Time/crmdatePicker"),
          type: "inputText",
          isMust: true
        },
        {
          compKey: "compKey9",
          labelName: "备注",
          codeField: "remark",
          isRequire: false,
          component: () => import("@/components/crm/textbox/crmTextInput"),
          type: "textarea",
          isMust: true
        },
      ],
      // 标题
      textMap: {
        edit: "修改试乘试驾车管理",
        add: "添加试乘试驾车管理"
      },
      // 表单数据（无需赋值，由混入对象赋值）
      formField: {
        dlr:"",
        carConfigId:"",
        vin: "",
        carNum: "",
        driveDistens: "",
        isEnable: "",
        djdate: "",
        tydate: "",
        remark: ""
      }
    };
  },
  methods: {
    //保存
    save() {
      const that = this;

      if (that.$utils.isEmpty(that.formField.dlr)) {
        that.$message({
          message: "请选择网点",
          type: "warning",
          duration: 2000
        });
        return;
      }
      if (that.$utils.isEmpty(that.formField.vin)) {
        that.$message({
          message: "请选择VIN码",
          type: "warning",
          duration: 2000
        });
        return;
      }
      if (that.$utils.isEmpty(that.formField.carNum)) {
        that.$message({
          message: "请选择车牌号",
          type: "warning",
          duration: 2000
        });
        return;
      }
      if (that.$utils.isEmpty(that.formField.djdate)) {
        that.$message({
          message: "请选择登记日期",
          type: "warning",
          duration: 2000
        });
        return;
      }
      if (that.$utils.isEmpty(that.formField.isEnable)) {
        that.$message({
          message: "请选择状态",
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
