<!--
* description: 接触方式维护-新增、修改弹窗
* author: hejin
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
      :key="popupsTableKey"
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
import { crmApis } from "@/api/graphQLApiList/crm";
import OneTableTemplate from "@/components/templates/popupsOneTable";
export default {
  // 组件混入对象
  mixins: [formMixins],
  data() {
    return {
      // 保存API配置对象
      apiConfig: crmApis.pcDbCantactWayMutationSaveById,
      // 动态组件-按钮
      tableButtons: [
        {
          compKey: "btnKey2",
          type: "primary",
          size: "small",
          clickEvent: () => this.save(),
          text: "保存"
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
      tableComponents: [],
      // 静态组件-查询条件
      staticTableComponents: [
        {
          compKey: "compKey1",
          labelName: "接触方式编码",
          codeField: "cantactWayCode",
          isRequire: true,
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          disabled: !this.isAdd(),
          isMust: true
        },
        {
          compKey: "compKey2",
          labelName: "接触方式名称",
          codeField: "cantactWayName",
          isRequire: true,
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          disabled: !this.isAdd(),
          isMust: true
        },
        {
          compKey: "compKey3",
          labelName: "是否启用",
          codeField: "isEnable",
          isRequire: true,
          component: () => import("@/components/org/isEnable/isEnable"),
          type: "dropdownList",
          isMust: true
        },
        {
          compKey: "compKey4",
          labelName: "接触方式Id",
          codeField: "cantactWayId",
          isRequire: true,
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          disabled: !this.isAdd(),
          isMust: false
        }
      ],
      // 标题
      textMap: {
        edit: "修改接触方式",
        add: "添加接触方式"
      },
      // 表单数据（无需赋值，由混入对象赋值）
      formField: {
        cantactWayId: "",
        cantactWayCode: "",
        cantactWayName: "",
        isEnable: "",
        updateControlId: ""
      }
    };
  },
  methods: {
    //保存
    save() {
      const that = this;

      if (that.$utils.isEmpty(that.formField.cantactWayCode)) {
        that.$message({
          message: "请输入接触方式编码",
          type: "warning",
          duration: 2000
        });
        return;
      }
      if (that.$utils.isEmpty(that.formField.cantactWayName)) {
        that.$message({
          message: "请输入接触方式名称",
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
