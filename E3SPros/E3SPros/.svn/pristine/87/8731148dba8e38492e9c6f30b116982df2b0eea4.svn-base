<!--
* 描述: 投诉单监控
* 创建人: chq2
* 创建时间: 2019-07-28
* 记录：
* 2019-07-28 新建 chq2
* modify:xgz 2019年9月25日09:01:45
* 2019年9月27日10:25:38 修改为混入
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

import ComplaintMonitorDetail from "@/views/crm/csc/ComplaintMonitor/ComplaintMonitorDetail";
import oneTableVue from "../../../../components/templates/oneTable.vue";

//import Edit from './edit'

export default {
  name: "ComplaintMonitor",
  mixins: [oneTableWithViewTemplateMixins],
  components: {
    OneTableTemplate,
    ComplaintMonitorDetail
  },
  data() {
    return {
      currentRow: null,
      // 网格查询API配置对象
      apiConfig: crmApis.csBuComplaintDelayQueryFindAll,
      // 动态组件-按钮
      searchField: "",
      tableButtons: [],
      // 动态组件-查询条件
      tableComponents: [
        // 查询参数-时间
        {
          compKey: "compKey1",
          labelName: "建单日期",
          codeField: "applyTime",
          component: () => import("@/components/crm/Time/crmdtDatePicker"),
          type: "inputText",
          isMust: false
        },
        {
          compKey: "compKey2",
          labelName: "服务单号",
          codeField: "serverOrder",
          component: () => import("@/components/crm/textbox/crmTextInput"),
          type: "inputText",
          isMust: false
        },
        {
          compKey: "compKey3",
          labelName: "建单人",
          codeField: "serverOrder",
          component: () => import("@/components/crm/textbox/crmTextInput"),
          type: "inputText",
          isMust: false
        },
        {
          compKey: "compKey5",
          labelName: "客户名称",
          codeField: "delayReson",
          component: () => import("@/components/crm/textbox/crmTextInput"),
          type: "inputText",
          isMust: false,
          isMul: true
        },
        {
          compKey: "compKey6",
          labelName: "电话",
          codeField: "delayReson",
          component: () => import("@/components/crm/textbox/crmTextInput"),
          type: "inputText",
          isMust: false,
          isMul: false
        },
        {
          compKey: "compKey7",
          labelName: "车牌号",
          codeField: "delayReson",
          component: () => import("@/components/crm/textbox/crmTextInput"),
          type: "inputText",
          isMust: false,
          isMul: false
        }
      ],
      // 动态生成网格列
      tableCols: [
        {
          prop: "controlBtn",
          label: "操作",
          codeField: "controlBtn",
          width: 60,
          align: "center",
          isComponent: true,
          comps: [
            {
              compKey: "propKey0",
              labelName: "审核",
              align: "center",
              codeField: "editControlBtn",
              clickEvent: this.check,
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
          prop: "createdName",
          label: "建单人",
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
          prop: "delayReson",
          label: "延期原因",
          width: null,
          align: "center"
        },
        {
          prop: "delayStatus",
          label: "审核状态",
          width: null,
          align: "center"
        },
        {
          prop: "shTimie",
          label: "审核时间",
          width: null,
          align: "center"
        },
        {
          prop: "shPersonName",
          label: "审核人",
          width: null,
          align: "center"
        },
        {
          prop: "shPersonName",
          label: "审核意见",
          width: null,
          align: "center"
        },
        {
          prop: "delayId",
          label: "延期id",
          width: null,
          align: "center",
          hidden: true
        },
        {
          prop: "applyTime",
          label: "申请延期时间",
          width: null,
          align: "center",
          hidden: true
        }
      ],
      //表单查询数据,查询参数
      formField: {
        delayId: "",
        delayStatus: "0",
        //createdDateStart: "",
        //createdDateEnd: "",
        serverOrder: "",
        delayReson: ""
        // searchValue:"",
      }
    };
  },
  methods: {
    //切换页面
    check(currentRow) {
      let rowData = this.$refs.multipleTable.list[currentRow];
      this.$router.push({ name: "ComplaintMonitorDetail", params: rowData });
    }
  }
};
</script>
