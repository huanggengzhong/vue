<!--
* description: 账户维护-新增、修改弹窗
* author: linwm
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
      <div
        class="filter-container filter-params"
        ref="vailComponentList"
      >
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
            :isMul='false'
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
import { requestGraphQL } from "@/api/commonRequest";
import OneTableTemplate from "@/components/templates/popupsOneTable";
export default {
  // 组件混入对象
  mixins: [formMixins],
  data() {
    return {
      // 保存API配置对象
      apiConfig: veApis.veDbDlrAccountMutationSave,
      // 动态组件-按钮
      tableButtons: [
        {
          compKey: "btnKey1",
          type: "primary",
          size: "small",
          clickEvent: () => this.save(),
          text: this.$t("sys.button.save") //"保存"
        },
        {
          compKey: "btnKey2",
          type: "",
          size: "small",
          clickEvent: () => this.reset(),
          text: this.$t("sys.button.reset") //"重置"
        },
        {
          compKey: "btnKey3",
          type: "",
          size: "small",
          clickEvent: () => this.sendCode(),
          text: this.$t("sys.button.cancel")
        }
      ],
      // 动态组件-查询条件
      tableComponents: [
        {
          compKey: "compKey1",
          labelName: this.$t("org.label.accountCode"), //"账户代码",
          codeField: "dlrAccountCode",
          isRequire: true,
          disabled: this.popupsState == "edit" ? true : false,
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        },
        {
          compKey: "compKey2",
          labelName: this.$t("org.label.accountName"), //"账户名称",
          codeField: "dlrAccountName",
          isRequire: true,
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        },
        {
          compKey: "compKey3",
          labelName: this.$t("org.label.Module"), //"模块",
          lookuptype: "DB0001",
          codeField: "modelCode",
          isRequire: true,
          component: () => import("@/components/org/LookupValue"),
          type: "dropdownList",
          isMust: true
        },
        {
          compKey: "compKey4",
          labelName: this.$t("org.label.isEnable"), //"是否启用",
          codeField: "isEnable",
          isRequire: true,
          component: () => import("@/components/org/isEnable/isEnable"),
          type: "dropdownList",
          isMust: true
        }
      ],
      // 标题
      textMap: {
        edit: "修改账户信息",
        add: "添加账户信息"
      },
      // 表单数据（无需赋值，由混入对象赋值）
      formField: {
        dlrAccountId: "",
        dlrAccountCode: "",
        dlrAccountName: "",
        modelCode: "",
        isEnable: "",
        updateControlId: ""
      }
    };
  },
  methods: {
    //保存
    save() {
      this.$utils.validataMoth(this, "validpopup");
      if (this.valid) {
        var saveObj = JSON.parse(JSON.stringify(this.formField));
        saveObj.modelName = saveObj.modelCode;
        saveObj.modelCode = undefined
        this.saveForm(saveObj);
      }
    }
  }
};
</script>
