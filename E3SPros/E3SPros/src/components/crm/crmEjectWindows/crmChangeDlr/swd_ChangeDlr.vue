<!--
* description: 变更网点弹出框（网点，责任网点，意向网点多选）
* author: dxuem
* createdDate: 2019-10-09
-->
<template>
  <section class="carTypeConfig" >
    <el-dialog
      title="网点选择"
      :visible.sync="curPopupsVisible"
      width="1000px"
      center
      @close="sendCode"
      :close-on-click-modal="false"
      :append-to-body="true"
    >
      <one-table-template
        ref="multipleTable"
        :dynamicButtons="tableButtons"
        :dynamicComponents="tableComponents"
        :dynamicApiConfig="apiConfig"
        :dynamicTableCols="tableCols"
        :dynamicFormFields="formField"
        :dynamicIsShowSelect="isMul"
      />
    </el-dialog>
  </section>
</template>
<script>
import { oneTableWithViewTemplateMixins } from '@/components/mixins/oneTableWithViewTemplateMixins';
import { valueObjectMixins } from '@/components/mixins/valueObjectMixins';
import { crmApis } from "@/api/graphQLApiList/crm";
import OneTableTemplate from "@/components/templates/popupsOneTable";
export default {
  // 组件混入对象：{data[listQuery] methods[queryTable]}
  mixins: [oneTableWithViewTemplateMixins, valueObjectMixins],
  components: {
    OneTableTemplate
  },
  data() {
    return {
      // 网格查询API配置对象
      apiConfig: crmApis.mdmOrgdlrQueryByPage, //经销商查询
      // 动态组件-按钮
      tableButtons: [
        {
          compKey: "btnKey1",
          type: "primary",
          size: "small",
          clickEvent: () => this.queryTable(1),
          text: "查询"
        },
        {
          compKey: "btnKey2",
          type: "",
          size: "small",
          clickEvent: () => this.sendCode("dlrCode", "dlrShortName"),
          text: "确认"
        },
        {
          compKey: "btnKey3",
          type: "",
          size: "small",
          clickEvent: () => this.reset(),
          text: "重置"
        }
      ],
      // 动态组件-查询条件
      tableComponents: [
        // 显示组件
        {
          compKey: "compKey1",
          labelName: "网点简称",
          codeField: "templateContent",
          component: () => import("@/components/crm/textbox/crmTextInput"),
          type: "inputText",
          isMust: true
        },
        {
          compKey: "compKey2",
          labelName: "网点品牌",
          codeField: "templateName",
          component: () => import("@/components/crm/textbox/crmTextInput"),
          type: "inputText",
          isMust: true
        },
        {
          compKey: "compKey2",
          labelName: "省份",
          codeField: "templateName",
          component: () => import("@/components/crm/textbox/crmTextInput"),
          type: "inputText",
          isMust: true
        },
        {
          compKey: "compKey2",
          labelName: "城市",
          codeField: "templateName",
          component: () => import("@/components/crm/textbox/crmTextInput"),
          type: "inputText",
          isMust: false
        },
        {
          compKey: "compKey2",
          labelName: "网点状态",
          codeField: "templateName",
          component: () => import("@/components/crm/textbox/crmTextInput"),
          type: "inputText",
          isMust: false
        }
      ],
      // 动态生成网格列
      tableCols: [
        {
          prop: "dlrCode",
          label: "网点编码",
          width: null,
          align: "center"
        },
        {
          prop: "dlrShortName",
          label: "网点简称",
          width: null,
          align: "center"
        },
        {
          prop: "carBrandCn",
          label: "网点品牌",
          width: null,
          align: "center"
        },
        {
          prop: "orgTypeName",
          label: "网点类型",
          width: null,
          align: "center"
        },
        {
          prop: "dlrStatusName",
          label: "网点状态",
          width: null,
          align: "center"
        },
        {
          prop: "provinceName",
          label: "省份",
          width: null,
          align: "center"
        },
        {
          prop: "cityName",
          label: "城市",
          width: null,
          align: "center"
        },
        { prop: "dlrFullName", label: "网店全称", width: null, align: "center" }
      ],
      //表单查询数据（查询条件）
      formField: {
        dlrShortName: "",
        carBrandCode: "",
        orgType:"",
        provinceId:"",
        cityId:"",
        dlrStatus:""
      }
    };
  },
  methods:{
  }
};
</script>
