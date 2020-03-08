<!--
* description: 品牌管理-新增、修改弹窗
* author: luojx
* createdDate: 2019-08-04
-->
<template>
  <section class="returnOrderApply">
    <el-dialog
      :close-on-click-modal="false"
      title="退订申请"
      :append-to-body="true"
      :visible.sync="curPopupsVisible"
      @close="sendCode"
      width="1000px"
    >
      <div
        class="filter-container filter-title"
        ref="conTitleHeight"
        v-if="tableComponents.length > 0"
      >订单信息</div>
      <div class="filter-container filter-params">
        <el-row :gutter="26">
          <component
            v-for="comp in tableComponents.filter(o => o.isMust === true)"
            :key="comp.compKey"
            :codeField="comp.codeField"
            :textField="comp.textField"
            :popupsKey="comp.compKey"
            :ref="comp.isRequire ? comp.isRequire+ comp.compKey : comp.compKey"
            :validrule="comp.validrule"
            :is="comp.component"
            :code="formField[comp.codeField]"
            @changeCode="getComponentCode"
            @focusCode="getFocusCode"
            :disabled="comp.disabled"
            :isRequire="comp.isRequire"
            :span="comp.span || 8"
            :labelName="comp.labelName"
            :lookuptype="comp.lookuptype"
            :inputType="comp.inputType"
            :valueObject="comp.curValueObject"
            :dateOptionsType="comp.dateOptionsType"
          ></component>
        </el-row>
      </div>
      <div
        class="filter-container filter-title"
        ref="conTitleHeight"
        v-if="tableComponents1.length > 0"
      >退订信息</div>
      <div class="filter-container filter-params">
        <el-row :gutter="26">
          <component
            v-for="comp in tableComponents1.filter(o => o.isMust === true)"
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
            :inputType="comp.inputType"
            :valueObject="comp.curValueObject"
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
      apiConfig: veApis.disNumSave,
      // 动态组件-按钮
      tableButtons: [
        {
          compKey: "btnKey1",
          type: "primary",
          size: "small",
          clickEvent: () => this.save(),
          text: this.$t("sys.button.save")
        }, // '保存'
        {
          compKey: "btnKey2",
          type: "",
          size: "small",
          clickEvent: () => this.reset(),
          text: this.$t("sys.button.reset")
        } //重置
      ],
      // 上半部分-查询条件
      tableComponents: [
        {
          compKey: "compKey1",
          labelName: "订单号",
          codeField: "roleCode",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          disabled: !this.isAdd(),
          isMust: true
        }, //订单号
        {
          compKey: "compKey2",
          labelName: "订单状态",
          codeField: "roleName",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        }, //订单状态
        {
          compKey: "compKey3",
          labelName: "已收款",
          codeField: "roleName",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        }, //已收款
        {
          compKey: "compKey4",
          labelName: "签约日期",
          codeField: "roleName",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        }, //签约日期
        {
          compKey: "compKey5",
          labelName: "客户名称",
          codeField: "roleName",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        }, //客户名称
        {
          compKey: "compKey6",
          labelName: "车型配置名称",
          codeField: "roleName",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        }, //车型配置名称
        {
          compKey: "compKey7",
          labelName: "车身颜色",
          codeField: "roleName",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        }, //车身颜色
        {
          compKey: "compKey8",
          labelName: "内饰色",
          codeField: "roleName",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        }, //内饰色
        {
          compKey: "compKey9",
          labelName: "选装包",
          codeField: "roleName",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        }, //选装包
        {
          compKey: "compKey10",
          labelName: "VIN码",
          codeField: "roleName",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        }, //VIN码
        {
          compKey: "compKey11",
          labelName: "DLR积分金额",
          codeField: "roleName",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        }, //DLR积分金额
        {
          compKey: "compKey12",
          labelName: "厂家积分金额",
          codeField: "roleName",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        }, //厂家积分金额
        {
          compKey: "compKey13",
          labelName: "卡金额",
          codeField: "roleName",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        }, //卡金额
        {
          compKey: "compKey14",
          labelName: "代金券金额",
          codeField: "roleName",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        } //代金券金额

        //
        //   {compKey: 'compKey4', labelName: this.$t('org.label.isEnable'), codeField: 'enabled', isRequire: false, component: () => import('@/components/org/isEnable/isEnable'), type: 'dropdownList', isMust: true},//是否启用
        //     {compKey: 'compKey5', labelName: this.$t('org.label.roleDesc'), codeField: 'roleDesc', inputType:'textarea',isRequire: false, component: () => import('@/components/org/commonInput'), type: 'inputText', isMust: true},//角色描述
      ],
      //下半部分-查询条件
      tableComponents1: [
        {
          compKey: "compKey1",
          labelName: "退订原因",
          isRequire: true,
          lookuptype: "VE0188",
          codeField: "roleOrgType",
          component: () => import("@/components/org/LookupValue"),
          type: "dropdownList",
          isMust: true
        }, //退订原因
        {
          compKey: "compKey2",
          labelName: "罚款金额",
          codeField: "roleCode",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          disabled: !this.isAdd(),
          isMust: true
        }, //订单号
        {
          compKey: "compKey3",
          labelName: "退定金额",
          codeField: "roleName",
          isRequire: true,
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        }, //订单状态
        {
          compKey: "compKey4",
          labelName: "退订说明",
          codeField: "roleName",
          isRequire: true,
          inputType: "textArea",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        } //已收款
      ],

      // 表单数据（无需赋值，由混入对象赋值）
      formField: {
        roleCode: "",
        roleName: "",
        enabled: "",
        roleId: "",
        roleOrgType: "",
        roleDesc: ""
      }
    };
  },
  methods: {
    //保存
    save() {
      const that = this;

      if (that.$utils.isEmpty(that.formField.roleCode)) {
        that.$message({
          message: this.$t("org.message.inputRoleCode"), //请输入角色编码
          type: "warning",
          duration: 2000
        });
        return;
      }
      if (that.$utils.isEmpty(that.formField.roleName)) {
        that.$message({
          message: this.$t("org.message.inputRoleName"), //'请输入角色名称',
          type: "warning",
          duration: 2000
        });
        return;
      }
      if (that.$utils.isEmpty(that.formField.roleOrgType)) {
        that.$message({
          message: this.$t("org.message.inputOrgType"), //'请选择组织类型',
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
