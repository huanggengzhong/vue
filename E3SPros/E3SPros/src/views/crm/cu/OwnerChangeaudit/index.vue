<!--
* description: 车主变更审核
* author: laimzh
* createdDate: 2019-08-07
-->
<template>
  <div class="app-container app-container-table">
    <one-table-template
      ref="multipleTable"
      :dynamicButtons="tableButtons"
      :dynamicComponents="tableComponents"
      :dynamicSearchField="searchField"
      :dynamicApiConfig="apiConfig"
      :dynamicTableCols="tableCols"
      :dynamicFormFields="formField"
      :dynamicIsShowSelect="false"
      :dynamicIsShowMoreBtn="true"
    />

    <edit
      :dynamicEditRowData="editRowData"
      :popupsVisible="editPopupsVisible"
      :key="editPopupsKey"
      :popupsState="editPopupsState"
      @close="close"
    ></edit>
  </div>
</template>
<script>
import { oneTableWithViewTemplateMixins } from "@/components/mixins/oneTableWithViewTemplateMixins";
import { crmApis } from "@/api/graphQLApiList/crm";
import OneTableTemplate from "@/components/crm/Template/crmonePage";
import Edit from "./edit";

export default {
  name: "ownerchangeaudit",
  // 组件混入对象
  mixins: [oneTableWithViewTemplateMixins],
  components: {
    OneTableTemplate,
    Edit
  },
  data() {
    return {
      // 网格查询API配置对象
      apiConfig: crmApis.mdmOldcustAuditQueryFindAll,//车主变更审核查询
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
          compKey: "btnKey4",
          type: "",
          size: "small",
          clickEvent: () => this.reset(),
          text: "重置"
        }
      ],
      // 动态组件-查询条件
      tableComponents: [
        {
                compKey: "compKey3",
                labelName: "变更网点",
                codeField: "dlrCode",
                component: () =>
                  import(
                    "@/components/crm/crmEjectWindows/crmChangeDlr"
                  ),
                type: "propus",
                isMust: true
              },
        {
          compKey: "compKey2",
          labelName: "VIN码",
          codeField: "vin",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        },
        {
          compKey: "compKey3",
          labelName: "车牌号",
          codeField: "CarNo",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        },
        {
          compKey: "compKey4",
          labelName: "新客户名称",
          codeField: "NewCustName",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        },
        {
          compKey: "compKey5",
          labelName: "新联系方式",
          codeField: "NewPhone",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: false
        },
        {
          compKey: "compKey6",
          labelName: "原客户名称",
          codeField: "custName",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: false
        },
        {
          compKey: "compKey7",
          labelName: "原联系方式",
          codeField: "mobile",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: false
        },
        {
          compKey: "compKey8",
          labelName: "审核状态",
          lookuptype: "1007",
          codeField: "auditStatus",
          component: () =>
            import("@/components/crm/lookupValue/lookupvalue"),
          type: "dropdownList",
          isMust: false
        },
        {
          compKey: "compKey9",
          labelName: "申请时间",
          codeField: "auditDate",
          component: () => import("@/components/crm/Time/crmdtDatePicker"),
          type: "daterange",
          isMust: false
        }
        // {compKey: 'compKey7', labelName: '审核状态', codeField: 'CarNo', component: () => import('@/components/org/commonInput'), type: 'inputText', isMust: true},
        // {compKey: 'compKey8', labelName: '关系', codeField: 'CarNo', component: () => import('@/components/org/commonInput'), type: 'inputText', isMust: true}
      ],
      // 动态生成网格列
      tableCols: [
        {
          prop: "controlBtn",
          label: "操作",
          codeField: "controlBtn",
          width: 120,
          align: "center",
          isComponent: true,
          comps: [
            {
              compKey: "propKey0",
              labelName: "审核",
              codeField: "editControlBtn",
              clickEvent: this.edit,
              component: () => import("@/components/org/linkButton")
            }
          ]
        },
        { prop: "oldcustAuditId", label: "变更单", width: null, align: "center" },
        { prop: "vin", label: "VIN", width: null, align: "center" },
        { prop: "dlrCode", label: "变更网点", width: null, align: "center" },
        { prop: "auditDate", label: "变更时间", width: null, align: "center" },
        {
          prop: "custName",
          label: "原客户名称",
          width: null,
          align: "center"
        },
        { prop: "mobile", label: "原联系方式", width: null, align: "center" },
        {
          prop: "custName",
          label: "新客户名称",
          width: null,
          align: "center"
        },
        { prop: "mobile", label: "新联系方式", width: null, align: "center" },
        {
          prop: "auditStatus",
          label: "审核状态",
          width: null,
          align: "center"
        },
        { prop: "auditDate", label: "审核时间", width: null, align: "center" }
        // {
        //   prop: "updateControlId",
        //   label: "并发控制",
        //   width: null,
        //   align: "center",
        //   hidden: true
        // }
      ],
      //表单查询数据
      formField: {
        vin: "",
        dlrCode: "",
        custName: "",
        mobile: "",
        auditStatus: "",
        auditDate: ""
      }
    };
  },
  mounted:function(){
  }
};
</script>