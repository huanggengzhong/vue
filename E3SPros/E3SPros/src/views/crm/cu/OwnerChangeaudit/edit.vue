<!--
* description: 车主变更审核
* author: laimzh
* createdDate: 2019-08-08
-->
<template>
  <section class="editChangeOwnerAudit">
    <el-dialog
      :close-on-click-modal="false"
      :title="textMap[popupsState]"
      :append-to-body="true"
      :visible.sync="curPopupsVisible"
      @close="sendCode"
      width="850px"
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
            :inputType="comp.type"
            :isMul="comp.isMul"
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
      apiConfig: crmApis.mdmOldcustAuditMutationSaveById,//车主变更审核
      // 动态组件-按钮
      tableButtons: [
        {
          compKey: "btnKey1",
          type: "primary",
          size: "small",
          clickEvent: () => this.save(),
          text: "提交"
        },
        // {compKey: 'btnKey2', type: '', size: 'small', clickEvent: () => this.reset(), text: '重置'},
        {
          compKey: "btnKey2",
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
          labelName: "VIN",
          codeField: "vin",
          isRequire: false,
          component: () => import("@/components/crm/textbox/crmTextInput"),
          type: "text",
          disabled: true,
          isMust: true
        },
        {
          compKey: "compKey2",
          labelName: "车牌号",
          codeField: "custNo",
          isRequire: false,
          component: () => import("@/components/crm/textbox/crmTextInput"),
          type: "text",
          disabled: true,
          isMust: true
        },
        {
          compKey: "compKey3",
          labelName: "新车主名称",
          codeField: "custName",
          isRequire: false,
          component: () => import("@/components/crm/textbox/crmTextInput"),
          type: "text",
          disabled: true,
          isMust: true
        },
        {
          compKey: "compKey4",
          labelName: "新联系方式",
          codeField: "mobile",
          isRequire: false,
          component: () => import("@/components/crm/textbox/crmTextInput"),
          type: "dropdownList",
          disabled: true,
          isMust: true
        },
        {
          compKey: "compKey5",
          labelName: "旧车主名称",
          codeField: "custName",
          isRequire: false,
          component: () => import("@/components/crm/textbox/crmTextInput"),
          type: "text",
          disabled: true,
          isMust: true
        },
        {
          compKey: "compKey6",
          labelName: "旧联系方式",
          codeField: "mobile",
          isRequire: false,
          component: () => import("@/components/crm/textbox/crmTextInput"),
          type: "dropdownList",
          disabled: true,
          isMust: true
        },
        {
          compKey: "compKey7",
          labelName: "变更网点",
          codeField: "dlrCode",
          isRequire: false,
          component: () => import("@/components/crm/textbox/crmTextInput"),
          type: "inputText",
          disabled: true,
          isMust: true
        },
        {
          compKey: "compKey8",
          labelName: "变更时间",
          codeField: "auditDate",
          isRequire: false,
          component: () => import("@/components/crm/textbox/crmTextInput"),
          type: "inputText",
          disabled: true,
          isMust: true
        },
        {
          compKey: "compKey9",
          labelName: "审核状态",
          codeField: "auditStatus",
          lookuptype: "1007",
          isMul:"false",
          isRequire: true,
          component: () =>
            import("@/components/crm/lookupValue/lookupvalue"),
          type: "dropdownList",
          disabled: false,
          isMust: true
        },
        {
          compKey: "compKey10",
          labelName: "审核意见",
          span:16,
          codeField: "auditor",
          isRequire: true,
          component: () => import("@/components/crm/textbox/crmTextInput"),
          type: "textarea",
          disabled: false,
          isMust: true
        }
      ],
      // 标题
      textMap: {
        edit: "车主变更审核",
        add: "车主变更审核"
      },
      // 表单数据（无需赋值，由混入对象赋值）
      formField: {
        vin: "",
        custNo: "",
        custName: "",
        mobile: "",
        dlrCode: "",
        auditDate: "",
        auditStatus: "",
        auditor: "",
      }
    };
  },
  methods: {
    //保存
  }
};
</script>
