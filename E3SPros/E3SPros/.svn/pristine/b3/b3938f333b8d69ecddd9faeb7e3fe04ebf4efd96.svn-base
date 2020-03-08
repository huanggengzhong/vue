/**
* description: 合格证快递信息导入
* author: linwm
* createdDate: 2019-07-27
*/
<template>
  <div class="app-container app-container-table">
    <one-table-template
      ref="multipleTable"
      :dynamicButtons="tableButtons"
      :dynamicComponents="tableComponents"
      :dynamicApiConfig="apiConfig"
      :dynamicTableCols="tableCols"
      :dynamicFormFields="formField"
      :dynamicIsShowSelect="false"
      :dynamicIsShowMoreBtn="false"
    />
    <certificatImportDialog @visible="handDialogVisibleFunc" :dialogVisible="dialogVisible" />
  </div>
</template>
<script>
import { oneTableWithViewTemplateMixins } from '@/components/mixins/oneTableWithViewTemplateMixins';
import { veApis } from "@/api/graphQLApiList/ve";
import OneTableTemplate from "@/components/templates/oneTable";
import certificatImportDialog from "./dialog";

export default {
  name: "veCertificatQry",
  // 组件混入对象：{data[listQuery] methods[queryTable]}
  mixins: [oneTableWithViewTemplateMixins],
  components: {
    OneTableTemplate,
    certificatImportDialog
  },
  data() {
    return {
      apiConfig: veApis.veCertificatQry,
      dialogVisible:false,
      formField: {
        carBrandCode: "",
        purOrderCode: "",
        VIN: "",
        dlrId:""
      }, // 动态组件-按钮
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
          clickEvent: () => this.importFile(),
          text: "导入"
        }
      ],
      // 动态组件-查询条件
      tableComponents: [
        {
          compKey: "compKey1",
          labelName: "品牌",
          codeField: "carBrandCode",
          component: () => import("@/components/org/carBrand/carBrand"),
          type: "dropdownList",
          isMust: true
        },
        // 显示组件
        {
          compKey: "compKey2",
          labelName: "采购单",
          codeField: "purOrderCode",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        },
        {
          compKey: "compKey3",
          labelName: "VIN码",
          codeField: "VIN",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        },
            {
          compKey: "compKey6",
          labelName: "仓库",
          isRequire: true,
          codeField: "dlrId",
          component: () =>
            import("@/components/org/orgDlr"),
          type: "propus",
          isMust: true
        },
      ],

      // 动态生成网格列
      tableCols: [
        {
          prop: "carBrandName",
          label: "品牌",
          width: 250,
          align: "center"
        },
        {
          prop: "dlrShortName",
          label: "经销商",
          width: 220,
          align: "center"
        },
        {
          prop: "purOrderCode",
          label: "采购单号",
          width: 220,
          align: "center"
        },
        {
          prop: "purOrderDCode",
          label: "采购子单号",
          width: 220,
          align: "center"
        },
        {
          prop: "vin",
          label: "VIN码",
          width: 220,
          align: "center"
        },
        {
          prop: "expressName",
          label: "快递公司",
          width: 220,
          align: "center"
        },
        {
          prop: "expressCode",
          label: "快递单号",
          width: 220,
          align: "center"
        },
        {
          prop: "expressDate",
          label: "快递日期",
          width: 220,
          align: "center"
        },
        {
          prop: "updateControlId",
          label: "并发控制",
          width: 0,
          align: "center",
          hidden: true
        }
      ]
    };
  },
  methods: {
    handDialogVisibleFunc(val) {
      this.dialogVisible = val;
    },
    importFile() {
      this.dialogVisible = true;
    }
  }
};
</script>

