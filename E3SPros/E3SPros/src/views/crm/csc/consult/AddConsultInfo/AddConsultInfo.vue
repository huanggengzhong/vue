<!--
* 描述: 追加咨询单信息
* 创建人: xgzh
* 创建时间: 2019年10月18日09:18:37
-->
<template>
  <div class="app-container app-container-table">
    <template>
      <one-table-template ref="multipleTable" :dynamicSearchField="searchField" :dynamicButtons="tableButtons" :dynamicComponents="tableComponents" :dynamicApiConfig="apiConfig" :dynamicTableCols="tableCols" :dynamicFormFields="formField" :dynamicIsShowSelect="false" :dynamicIsShowMoreBtn="true" />
    </template>
  </div>
</template>
<script>
import { crmApis } from "@/api/graphQLApiList/crm";
import { oneTableWithViewTemplateMixins } from "@/components/mixins/oneTableWithViewTemplateMixins";
import OneTableTemplate from "@/components/crm/Template/crmonePage";

export default {
  name: "AddConsultInfo",
  mixins: [oneTableWithViewTemplateMixins],
  components: {
    OneTableTemplate
  },
  data() {
    return {
      //
      currentRow: null,
      // 网格查询API配置对象
      apiConfig: crmApis.csBuComplaintOrderQueryFindAll, //j
      // 动态组件-按钮
      searchField: "",
      tableButtons: [],
      // 动态组件-查询条件
      tableComponents: [
        // 查询参数-时间
        {
          compKey: "compKey1",
          labelName: "建单日期",
          codeField: "createdDateStart,createdDateEnd",
          component: () => import("@/components/crm/Time/crmdtDatePicker"),
          type: "inputText",
          isMust: false
        },
        {
          compKey: "compKey2",
          labelName: "结案日期",
          codeField: "caseTimeBegin,caseTimeEnd",
          component: () => import("@/components/crm/Time/crmdtDatePicker"),
          type: "inputText",
          isMust: false
        },
        {
          compKey: "compKey3",
          labelName: "服务单号",
          codeField: "serverOrder",
          component: () => import("@/components/crm/textbox/crmTextInput"),
          type: "inputText",
          isMust: false
        },
        {
          compKey: "compKey4",
          labelName: "单据状态",
          codeField: "status",
          lookuptype: "LX009",
          component: () => import("@/components/crm/lookupValue/lookupvalue"),
          type: "dropdownList",
          isMust: false,
          isMul: false
        },
        {
          compKey: "compKey5",
          labelName: "客户名称",
          codeField: "custName",
          component: () => import("@/components/crm/textbox/crmTextInput"),
          type: "inputText",
          isMust: false,
          isMul: true
        },
        {
          compKey: "compKey6",
          labelName: "电话",
          codeField: "contactTel",
          component: () => import("@/components/crm/textbox/crmTextInput"),
          type: "inputText",
          isMust: false,
          isMul: false
        },
        {
          compKey: "compKey7",
          labelName: "车牌号",
          codeField: "carLicense",
          component: () => import("@/components/crm/textbox/crmTextInput"),
          type: "inputText",
          isMust: false,
          isMul: false
        },
        {
          compKey: "compKey8",
          labelName: "VIN码",
          codeField: "vin",
          component: () => import("@/components/crm/textbox/crmTextInput"),
          type: "inputText",
          isMust: false,
          isMul: false
        },
        {
          compKey: "compKey9",
          labelName: "服务大类",
          codeField: "bigTypeCode",
          lookuptype: "LX009",
          component: () => import("@/components/crm/lookupValue/lookupvalue"),
          type: "dropdownList",
          isMust: false,
          isMul: false
        },
        {
          compKey: "compKey10",
          labelName: "服务中类",
          codeField: "serverLevel",
          lookuptype: "LX009",
          component: () => import("@/components/crm/lookupValue/lookupvalue"),
          type: "dropdownList",
          isMust: false,
          isMul: false
        },
        {
          compKey: "compKey11",
          labelName: "服务小类",
          codeField: "serverUrgency",
          lookuptype: "LX009",
          component: () => import("@/components/crm/lookupValue/lookupvalue"),
          type: "dropdownList",
          isMust: false,
          isMul: false
        },
        {
          compKey: "compKey12",
          labelName: "建单人",
          codeField: "billEmpName",
          component: () => import("@/components/crm/textbox/crmTextInput"),
          type: "inputText",
          isMust: false,
          isMul: false
        },
        {
          compKey: "compKey13",
          labelName: "车系名称",
          codeField: "carSeriesCode",
          component: () => import("@/components/crm/textbox/crmTextInput"),
          type: "inputText",
          isMust: false,
          isMul: false
        },
        {
          compKey: "compKey14",
          labelName: "责任网点",
          codeField: "dutyOrgCode",
          component: () =>
            import("@/components/crm/crmEjectWindows/crmChangeDlr/index"),
          multipleTable: false,
          isMul: false,
          type: "propus",
          isMust: false
        }
      ],
      // 动态生成网格列
      tableCols: [
        {
          prop: "controlBtn",
          label: "追加",
          codeField: "controlBtn",
          width: 60,
          align: "center",
          isComponent: true,
          comps: [
            {
              compKey: "propKey0",
              labelName: "追加",
              align: "center",
              codeField: "editControlBtn",
              clickEvent: this.appendConsult,
              component: () => import("@/components/org/linkButton"),
              isMust: true
            }
          ]
        },
        {
          prop: "createdDate",
          label: "建单日期",
          width: null,
          align: "center"
        },
        {
          prop: "serverOrder",
          label: "服务单号",
          width: null,
          align: "center"
        },
        {
          prop: "custName",
          label: "客户名称",
          width: null,
          align: "center"
        },
        {
          prop: "contactTel",
          label: "电话",
          width: null,
          align: "center"
        },
        {
          prop: "empName",
          label: "建单人",
          width: null,
          align: "center"
        },
        {
          prop: "serverFullClassName",
          label: "服务大类",
          width: null,
          align: "center"
        },
        {
          prop: "serverFullClassName",
          label: "服务中类",
          width: null,
          align: "center"
        },
        {
          prop: "serverFullClassName",
          label: "服务小类",
          width: null,
          align: "center"
        },
        {
          prop: "carLicense",
          label: "车牌号",
          width: null,
          align: "center"
        },
        {
          prop: "vin",
          label: "VIN码",
          width: null,
          align: "center"
        },
        {
          prop: "baseSeriesName",
          label: "车系名称",
          width: null,
          align: "center"
        },
        {
          prop: "dutyDlrName",
          label: "责任网点",
          width: null,
          align: "center"
        },
        {
          prop: "statusName",
          label: "单据状态",
          width: null,
          align: "center"
        },
        {
          prop: "caseTime",
          label: "结案时间",
          width: null,
          align: "center"
        }
      ],
      //表单查询数据,查询参数
      formField: {
        oemCode: "1",
        groupCode: "1",
        createdDateStart: "",
        createdDateEnd: "",
        caseTimeBegin: "",
        caseTimeEnd: "",
        serverOrder: "",
        status: "",
        custName: "",
        contactTel: "",
        carLicense: "",
        vin: "",
        bigTypeCode: "",
        serverLevel: "",
        serverUrgency: "",
        billEmpName: "",
        carSeriesCode: "",
        dutyOrgCode: ""
      }
    };
  },
  methods: {
    //追加
    // appendConsult(index, rowData) {
    //   let that = this;
    //   that.$crmcf.jumpDetailTag(
    //     that,
    //     "AddConsultOrder",
    //     "/AddConsultOrder",
    //     rowData
    //   );
    // }

    appendConsult(currentRow) {
      let rowData = this.$refs.multipleTable.list[currentRow];
      this.$router.push({ name: "AddConsultOrder", params: rowData });
    }
  }
};
</script>
