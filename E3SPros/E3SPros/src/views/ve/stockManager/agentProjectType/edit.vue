<!--
* description: 项目类型设置-新增、修改弹窗
* author: dinggf
* createdDate: 2019-10-19
-->
<template>
  <section class="editProTypeSeting">
    <el-dialog
      :close-on-click-modal="false"
      :title="textMap[popupsState]"
      :append-to-body="true"
      :visible.sync="curPopupsVisible"
      @close="sendCode"
      width="1000px"
    >
      <div class="filter-container filter-params">
        <el-row :gutter="26" ref="vailComponentList">
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
      apiConfig: veApis.veBuAgentProjectTypeMutationSave,
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
          labelName: this.$t("ve.label.proCode"),
          codeField: "agentProjectCode",
          isRequire: true,
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          parentFileds: "disabled:agentProjectCode-agentProjectCode",
          disabled: null,
          isMust: true
        }, //项目编码
        {
          compKey: "compKey2",
          labelName: this.$t("ve.label.carBrand"),
          isRequire: true,
          codeField: "carBrandCode",
          // isMul: false,多项
          component: () => import("@/components/org/carBrand/carBrand"),
          type: "dropdownList",
          isMust: true
        }, //品牌
        {
          compKey: "compKey3",
          labelName: this.$t("ve.label.proName"),
          codeField: "agentProjectName",
          isRequire: true,
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        }, //项目名称

        {
          compKey: "compKey4",
          labelName: this.$t("ve.label.enableStyle"),
          codeField: "isEnable",
          isRequire: false,
          component: () => import("@/components/org/isEnable/isEnable"),
          type: "dropdownList",
          isMust: true
        }, //启用状态
        {
          compKey: "compKey5",
          labelName: this.$t("ve.label.isSysInlay"),
          codeField: "isSysInlay",
          lookuptype: "BASE0003",
          isRequire: false,
          component: () => import("@/components/org/isEnable/isEnable"),
          type: "dropdownList",
          isMust: true
        } //系统内置
      ],
      // 标题
      textMap: {
        edit: this.$t("ve.label.editRole"), //修改弹框名字
        add: this.$t("ve.label.addRole") //新增弹框名字
      },
      // 表单数据（无需赋值，由混入对象赋值）
      formField: {
        agentProjectCode: "",
        carBrandCode: "",
        agentProjectName: "",
        isEnable: "",
        isSysInlay: ""
      }
    };
  },
  methods: {
    reset() {
      const that = this;
      for (var key in this.formField) {
        console.log(key);
        if(key != 'agentProjectCode'){
          this.formField[key] = "";
        }
      }
    }
  }
};
</script>
