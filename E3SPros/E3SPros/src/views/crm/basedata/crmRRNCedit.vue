<!--
* description:审核驳回节点配置-新增、修改弹窗
* author: zxuan
* createdDate: 2019-09-09
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
          text: "取消"
        }
      ],
      // 动态组件-查询条件
      tableComponents: [
        {
          compKey: "compKey1",
          labelName: "业务流程",
          lookuptype: "LX009",
          isRequire: true,
          codeField: "buniessProcess",
          component: () => import("@/components/crm/lookupValue/lookupvalue"),
          type: "dropdownList",
          isMust: true
        },
        {
          compKey: "compKey2",
          labelName: "服务类别",
          codeField: "serviceType",
          isRequire: true,
          component: () =>
            import("@/components/crm/crmEjectWindows/crmServiceType/index"),
          type: "propus",
          isMust: true
        },
        {
          compKey: "compKey4",
          labelName: "流程结点",
          codeField: "processNode",
          isRequire: true,
          component: () => import("@/components/crm/Select/crmProcessNode"),
          type: "dropdownList",
          isMust: true
        },
        {
          compKey: "compKey3",
          labelName: "责任人",
          codeField: "dutyperson",
          isRequire: true,
          component: () => import("@/components/crm/textbox/crmTextInput"),
          type: "inputText",
          isMust: true
        },
        {
          compKey: "compKey5",
          labelName: "是否启用",
          codeField: "isEnable",
          clearable: false,
          isRequire: true,
          component: () => import("@/components/crm/Select/crmIsEnable"),
          type: "dropdownList",
          isMust: true
        },
        {
          compKey: "compKey5",
          labelName: "是否审核",
          codeField: "ispass",
          clearable: false,
          isRequire: true,
          component: () => import("@/components/crm/Select/crmIsEnable"),
          type: "dropdownList",
          isMust: true
        },
        {
          compKey: "compKey5",
          labelName: "是否驳回",
          codeField: "isRefuse",
          clearable: false,
          isRequire: true,
          component: () => import("@/components/crm/Select/crmIsEnable"),
          type: "dropdownList",
          isMust: true
        }
      ],
      // 标题
      textMap: {
        edit: "修改审核驳回结点",
        add: "添加审核驳回结点"
      },
      // 表单数据（无需赋值，由混入对象赋值）
      formField: {
        buniessProcess: "",
        serviceType: "",
        processNode: "",
        isEnable: "",
        dutyperson: "",
        ispass: "",
        isRefuse: ""
      }
    };
  },
  methods: {
    //保存
    save() {
      const that = this;

      if (that.$utils.isEmpty(that.formField.buniessProcess)) {
        that.$message({
          message: "请选择业务流程",
          type: "warning",
          duration: 2000
        });
        return;
      }
      if (that.$utils.isEmpty(that.formField.serviceType)) {
        that.$message({
          message: "请选择服务类别",
          type: "warning",
          duration: 2000
        });
        return;
      }
      if (that.$utils.isEmpty(that.formField.processNode)) {
        that.$message({
          message: "请选择流程结点",
          type: "warning",
          duration: 2000
        });
        return;
      }
      if (that.$utils.isEmpty(that.formField.isEnable)) {
        that.$message({
          message: "请选择是否启用",
          type: "warning",
          duration: 2000
        });
        return;
      }
      if (that.$utils.isEmpty(that.formField.ispass)) {
        that.$message({
          message: "请选择是否审核",
          type: "warning",
          duration: 2000
        });
        return;
      }
      if (that.$utils.isEmpty(that.formField.isRefuse)) {
        that.$message({
          message: "请选择是否启用",
          type: "warning",
          duration: 2000
        });
        return;
      }
      if (that.$utils.isEmpty(that.formField.dutyperson)) {
        that.$message({
          message: "请输入责任人",
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
