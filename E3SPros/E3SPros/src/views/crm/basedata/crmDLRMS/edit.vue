<!--
* description: 短信账号维护-新增、修改弹窗
* author: xgzh
* createdDate: 2019年10月6日11:32:50
-->
<template>
  <section class="editCarBrand">
    <el-dialog :close-on-click-modal="false" :title="textMap[popupsState]" :append-to-body="true" :visible.sync="curPopupsVisible" @close="sendCode" width="1000px">
      <div class="filter-container filter-params">
        <el-row :gutter="26" ref="vailComponentList">
          <component v-for="comp in tableComponents.filter(o => o.isMust === true)" :ref="comp.isRequire ? comp.isRequire+ comp.compKey : comp.compKey" :key="comp.compKey" :codeField="comp.codeField" :textField="comp.textField" :popupsKey="comp.compKey" :is="comp.component" :code="formField[comp.codeField]" @changeCode="getComponentCode" @focusCode="getFocusCode" :disabled="comp.disabled" :isRequire="comp.isRequire" :isMul="comp.isMul" :span="comp.span || 8" :inputType="comp.type" :labelName="comp.labelName" :lookuptype="comp.lookuptype" :dateOptionsType="comp.dateOptionsType"></component>
        </el-row>
        <br>
        <el-row class="textSet">
          <el-col :span="24">
            <b>模板内容填写说明 </b> <br>
            支持替换的内容：[对象]，[单据编号]，[服务人员]，[服务电话]，[时长] <br>
            <br>

            <b>*样例：</b> <br>
            *尊敬的[对象]，[服务人员]已经出车，请耐心等待！服务人员的电话是：[服务电话]，预计[时长]分钟后到达。
            <br>
            *尊敬的[对象],您的爱车已经回厂交付车间检查，负责的业代：[服务业代]，联系电话：[业代电话]，请知悉！
          </el-col>
        </el-row>
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button v-for="comp in tableButtons" :key="comp.compKey" :type="comp.type" @click="comp.clickEvent">{{comp.text}}</el-button>
      </div>
    </el-dialog>
  </section>
</template>
<script>
import { formMixins } from "@/components/mixins/formMixins";
import { crmApis } from "@/api/graphQLApiList/crm";
import { requestGraphQL } from "@/api/commonRequest";
import OneTableTemplate from "@/components/templates/popupsOneTable";
export default {
  // 组件混入对象
  mixins: [formMixins],
  data() {
    return {
      templateCode: "",
      updateControlId: "",
      templateId: "",
      dlrCode: "",
      //多选对象
      checkList: [],
      // 保存API配置对象
      apiConfig: crmApis.csDbTemplateInseretForm,
      // 动态组件-按钮
      tableButtons: [
        {
          compKey: "btnKey1",
          type: "primary",
          size: "small",
          clickEvent: () => this.save(),
          text: this.$t("sys.button.save") /*保存*/
        }
      ],
      // 动态组件-查询条件
      tableComponents: [
        {
          compKey: "compKey1",
          labelName: "模板名称",
          codeField: "templateName",
          component: () => import("@/components/crm/textbox/crmTextInput"),
          type: "inputText",
          isRequire: true,
          isMust: true
        },
        {
          compKey: "compKey2",
          labelName: "是否启用",
          codeField: "isEnable",
          component: () => import("@/components/crm/Select/crmIsEnable"),
          type: "dropdownList",
          isMust: true,
          isRequire: true
        },
        {
          compKey: "compKey3",
          labelName: "模板类型",
          codeField: "templateType",
          lookuptype: "VE0451",
          component: () => import("@/components/crm/lookupValue/lookupvalue"),
          type: "dropdownList",
          isRequire: true,
          isMust: true
        },
        {
          compKey: "compKey4",
          labelName: "模板内容",
          codeField: "templateContent",
          component: () => import("@/components/crm/textbox/crmTextInput"),
          type: "textarea",
          span: 16,
          isRequire: true,
          isMust: true
        },
        {
          compKey: "compKey5",
          labelName: "模板序号标记内容",
          codeField: "templateId",
          component: () => import("@/components/crm/textbox/crmTextInput"),
          type: "inputText",
          isRequire: true,
          isMust: false
        },
        {
          compKey: "compKey6",
          labelName: "更新控制字段",
          codeField: "updateControlId",
          component: () => import("@/components/crm/textbox/crmTextInput"),
          type: "inputText",
          isRequire: true,
          isMust: false
        }
      ],
      // 标题
      textMap: {
        edit: "短信账号维护",
        add: "短信账号维护"
      },
      // 表单数据（无需赋值，由混入对象赋值）
      formField: {
        templateName: "",
        isEnable: "",
        templateType: "",
        templateContent: "",
        updateControlId: this.updateControlId,
        templateCode: this.templateCode,
        templateId: this.templateId
        // dlrCode:this.dlrCode,
      }
    };
  },
  mounted() {},
  methods: {}
};
</script>
<style >
/* 弹窗文本排版 */
.textSet {
  /* float: left; */
  text-align: left;
}
</style>
