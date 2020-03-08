<!--
* description: 维护用车人
* author: dxuem
* createdDate: 2019-08-08
-->
<template>
  <section class="useredit">
    <el-dialog
      :close-on-click-modal="false"
      title="维护使用人"
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
          text: "确认"
        },
        // {compKey: 'btnKey2', type: '', size: 'small', clickEvent: () => this.reset(), text: '重置'},
      ],
      // 动态组件-查询条件
      tableComponents: [
        {
          span:8,
          compKey: "compKey1",
          labelName: "客户名称",
          codeField: "custName",
          isRequire: false,
          component: () => import("@/components/crm/crmEjectWindows/crmCustName"),
          type: "text",
          disabled: false,
          isMust: true  
        },
        {
          compKey: "compKey2",
          labelName: "电话",
          codeField: "phone",
          isRequire: false,
          component: () => import("@/components/crm/textbox/crmTextInput"),
          type: "text",
          disabled: false,
          isMust: true
        },
        {
          compKey: "compKey3",
          labelName: "与车主关系",
          codeField: "custName",
          isRequire: false,
          component: () => import("@/components/crm/lookupValue/lookupvalue"),
          type: "text",
          disabled: false,
          isMust: true
        },
        {
          compKey: "compKey4",
          labelName: "人车关系类别",
          codeField: "mobile",
          isRequire: false,
          component: () => import("@/components/crm/lookupValue/lookupvalue"),
          type: "dropdownList",
          disabled: false,
          isMust: true
        },
      ],
      // 标题
      textMap: {
        edit: "维护使用人",
        add: "维护使用人"
      },
      // 表单数据（无需赋值，由混入对象赋值）
      formField: {
        custName: "",
        phone: "",
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
