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
      //多选对象
      checkList: [],
      // 保存API配置对象
      apiConfig: crmApis.csBuComplaintOrderQueryFindAll,
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
          labelName: "网点",
          codeField: "dlrShortName",
          component: () =>
            import("@/components/crm/crmEjectWindows/crmChangeDlr/index"),
          isMul: false,
          type: "propus",
          isRequire: true,
          isMust: true
        },
        {
          compKey: "compKey2",
          labelName: "账号名称",
          codeField: "username",
          component: () => import("@/components/crm/textbox/crmTextInput"),
          type: "inputText",
          isMust: true,
          isRequire: true
        },
        {
          compKey: "compKey3",
          labelName: "密码",
          codeField: "password",
          component: () => import("@/components/crm/textbox/crmTextInput"),
          type: "inputText,password",
          isShow:false,
          isMust: true,
          isRequire: true,
          show: true
        },
        {
          compKey: "compKey4",
          labelName: "服务IP",
          codeField: "serverip",
          span: 8,
          component: () => import("@/components/crm/textbox/crmTextInput"),
          type: "inputText",
          isMust: true,
          isRequire: true
        },
        {
          compKey: "compKey5",
          labelName: "端口",
          codeField: "port",
          span: 8,
          component: () => import("@/components/crm/textbox/crmTextInput"),
          type: "inputText",
          isMust: true,
          isRequire: true
        },
        {
          compKey: "compKey6",
          labelName: "是否启用",
          codeField: "isEnable",
          component: () => import("@/components/crm/Select/crmIsEnable"),
          type: "dropdownList",
          isMust: true,
          isMul: false,
          isRequire: true
        }
      ],
      // 标题
      textMap: {
        edit: "短信账号维护",
        add: "短信账号维护"
      },
      // 表单数据（无需赋值，由混入对象赋值）
      formField: {
        // oemCode: "1",
        // groupCode: "1",
        dlrShortName: "",
        username: "",
        password: "",
        serverip: "",
        port: "",
        isEnable: ""
      }
    };
  },
  mounted() {},
  methods: {}
};
</script>
