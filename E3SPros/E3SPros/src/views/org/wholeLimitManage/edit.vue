<!--
* description: 品牌管理-新增、修改弹窗
* author: luojx
* createdDate: 2019-08-04
-->
<template>
  <section class="editWholeRoleManage">
    <el-dialog
      :close-on-click-modal="false"
      :title="textMap[popupsState]"
      :append-to-body="true"
      :visible.sync="curPopupsVisible"
      @close="sendCode"
      width="1000px"
    >
      <div class="filter-container filter-params">
        <el-row
          :gutter="26"
          ref="vailComponentList"
        >
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
            :isMul="comp.isMul"
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
      apiConfig: orgApis.sysRoleMutationGlobalSave,
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
      // 动态组件-查询条件
      tableComponents: [
        {
          compKey: "compKey1",
          labelName: this.$t("org.label.roleCode"),
          codeField: "roleCode",
          isRequire: true,
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          parentFileds: "disabled:roleCode-roleCode-true",
          disabled: null,
          isMust: true
        }, //角色编码，
        {
          compKey: "compKey2",
          labelName: this.$t("org.label.roleName"),
          codeField: "roleName",
          isRequire: true,
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        }, //角色名称
        {
          compKey: "compKey3",
          labelName: this.$t("org.label.orgTypeName"),
          isRequire: true,
          lookuptype: "BASE0003",
          codeField: "roleOrgType",
          isMul: false,
          component: () => import("@/components/org/LookupValue"),
          type: "dropdownList",
          isMust: true
        }, //组织类型
        {
          compKey: "compKey4",
          labelName: this.$t("org.label.isAble"),
          codeField: "enabled",
          isRequire: false,
          component: () => import("@/components/org/isEnable/isEnable"),
          type: "dropdownList",
          parentFileds: "disabled:roleCode-enabled-false",
          disabled: null,
          isMust: true
        },//是否启用
        {
          compKey: "compKey5",
          labelName: this.$t("org.label.roleDesc"),
          codeField: "roleDesc",
          inputType: "textarea",
          isRequire: false,
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        } //角色描述
      ],
      // 标题
      textMap: {
        edit: this.$t("org.label.editRole"), //修改弹框名字
        add: this.$t("org.label.addRole") //新增弹框名字
      },
      // 表单数据（无需赋值，由混入对象赋值）
      formField: {
        roleCode: "",
        roleName: "",
        enabled: "1",
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

      // if (that.$utils.isEmpty(that.formField.roleCode)) {
      //   that.$message({
      //     message:this.$t('org.message.inputRoleCode'),//请输入角色编码
      //     type: 'warning',
      //     duration: 2000
      //   });
      //   return;
      // }
      // if (that.$utils.isEmpty(that.formField.roleName)) {
      //   that.$message({
      //     message: this.$t('org.message.inputRoleName'),//'请输入角色名称',
      //     type: 'warning',
      //     duration: 2000
      //   });
      //   return;
      // }
      // if (that.$utils.isEmpty(that.formField.roleOrgType)) {
      //   that.$message({
      //     message: this.$t('org.message.inputOrgType'),//'请选择组织类型',
      //     type: 'warning',
      //     duration: 2000
      //   });
      //   return;
      // }
      var formField1={
        roleCode: this.formField.roleCode,
        roleName: this.formField.roleName,
        enabled: Number(this.formField.enabled),
        roleId: this.formField.roleId,
        roleOrgType: this.formField.roleOrgType,
        roleDesc: this.formField.roleDesc
      }
      this.$utils.validataMoth(this, "validpopup");
      if (this.valid) {
        //保存表单
        this.saveForm(formField1);
      }
    }
  }
};
</script>
