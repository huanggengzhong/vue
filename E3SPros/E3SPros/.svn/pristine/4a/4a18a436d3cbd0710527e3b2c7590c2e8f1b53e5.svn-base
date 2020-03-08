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
            :inputType="comp.inputType"
            :valueObject="comp.curValueObject"
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
import { veApis } from "@/api/graphQLApiList/ve";
import OneTableTemplate from "@/components/templates/popupsOneTable";
export default {
  // 组件混入对象
  mixins: [formMixins],
  data() {
    return {
      // 保存API配置对象
      apiConfig: veApis.veDbPactCompanyMutationSave,
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
          labelName: "二级网点简称",
          codeField: "compShortName",
          isRequire: true,
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          disabled: !this.isAdd(),
          isMust: true
        }, //二级网点简称，
        {
          compKey: "compKey2",
          labelName: this.$t("ve.label.sedNetFullName"),
          codeField: "compFullName",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isRequire: true,
          isMust: true
        }, //二级网点简称，
        {
          compKey: "compKey3",
          labelName: "机构代码",
          codeField: "guno",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isRequire: true,
          disabled: !this.isAdd(),
          isMust: true
        }, //机构代码
        {
          compKey: "compKey4",
          labelName: "二级网点地址",
          codeField: "compAddr",
          isRequire: true,
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          disabled: !this.isAdd(),
          isMust: true
        }, //二级网点地址
        {
          compKey: "compKey5",
          labelName: "联系电话",
          codeField: "compTel",
          isRequire: true,
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        }, //联系电话
        {
          compKey: "compKey6",
          labelName: "二网投资人",
          codeField: "",
          isRequire: true,
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        }, //二网投资人
        {
          compKey: "compKey7",
          labelName: "传真号码",
          codeField: "",
          isRequire: true,
          component: () => import("@/components/org/commonInput"),
          type: "inputText"
        }, //传真号码
        {
          compKey: "compKey8",
          labelName: "授权开始日期",
          codeField: "pactBegDate",
          isRequire: true,
          component: () => import("@/components/org/datePicker/dateTimePick"),
          type: "inputText",
          disabled: !this.isAdd(),
          isMust: true
        }, //授权开始日期
        {
          compKey: "compKey9",
          labelName: "授权结束日期",
          codeField: "pactEndDate",
          isRequire: true,
          component: () => import("@/components/org/datePicker/dateTimePick"),
          type: "inputText",
          disabled: !this.isAdd(),
          isMust: true
        }, //授权结束日期
        {
          compKey: "compKey10",
          labelName: "二网类型",
          isRequire: true,
          lookuptype: "",
          codeField: "pactCompType",
          component: () => import("@/components/org/LookupValue"),
          type: "dropdownList",
          isMust: true
        }, //二网类型
        {
          compKey: "compKey11",
          labelName: this.$t("org.label.carBrandCn"),
          codeField: "carBrandCode",
          component: () => import("@/components/org/carBrand/carBrand"),
          isRequire: true,
          type: "dropdownList",
          isMust: true
        }, //品牌
        {
          compKey: "compKey12",
          labelName: "是否具备服务功能",
          lookuptype: "",
          ccodeField: "orgState",
          component: () => import("@/components/org/isEnable/isEnable"),
          type: "dropdownList",
          isMust: true
        }, // 是否具备服务功能

        {
          compKey: "compKey13",
          labelName: "最近一网距离",
          codeField: "distenceNearDlr",
          isRequire: false,
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        }, //距离最接近一级网点距离
        {
          compKey: "compKey14",
          labelName: "共网一网距离",
          codeField: "distenceDlr",
          isRequire: false,
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        } //距离最接近一级经销商距离
      ],
      // 标题
      textMap: {
        edit: this.$t("org.label.editRole"), //修改弹框名字
        add: this.$t("org.label.addRole") //新增弹框名字
      },
      // 表单数据（无需赋值，由混入对象赋值）
      formField: {
        compShortName: "",
        compFullName: "",
        guno: "",
        compAddr: "",
        pactBegDate: "",
        pactEndDate: "",
        pactCompType: "",
        carBrandCode: "",
        orgState: "",
        distenceNearDlr: "",
        distenceDlr: "",
        compTel: ""
      }
    };
  },
  methods: {
    //保存
    save() {
      const that = this;
      //保存表单
      this.$utils.validataMoth(this, "validpopup");
      if (this.valid) {
        this.saveForm();
      }
    }
  }
};
</script>
