<template>
  <div class="app-container app-container-table">
    <one-table-template
      ref="multipleTable"
      :dynamicButtons="tableButtons"
      :dynamicComponents="tableComponents"
      :dynamicApiConfig="apiConfig"
      :dynamicTableCols="tableCols"
      :dynamicFormFields="formField"
      :dynamicIsShowSelect="true"
      :dynamicIsInitTable="false"
    />
  </div>
</template>
<script>
import { oneTableWithViewTemplateMixins } from '@/components/mixins/oneTableWithViewTemplateMixins';
import { paApis } from "@/api/graphQLApiList/pa";
import OneTableTemplate from "@/components/templates/oneTable";

export default {
  name: "accountBalance",
  // 组件混入对象
  mixins: [oneTableWithViewTemplateMixins],
  components: {
    OneTableTemplate
  },
  data() {
    return {
      // 网格查询API配置对象
      apiConfig: paApis.paBuOemDlrAccountQueryPriceFindAll,
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
          clickEvent: () => this.reset(),
          text: "重置"
        },
        {
          compKey: "btnKey3",
          type: "",
          size: "small",
          clickEvent: () => this.exportExcel(),
          text: "导出"
        }
      ],
      // 动态组件-查询条件
      tableComponents: [
        {
          compKey: "compKey11",
          labelName: "品牌",
          lookuptype: "PA0008",
          codeField: "partBrandCode",
          isMul: false,
          component: () => import("@/components/org/LookupValue"),
          type: "dropdownList",
          isMust: true
        },
        {
          compKey: "compKey2",
          labelName: "经销商",
          codeField: "dlrShortName",
          component: () =>
            // import("@/views/pa/storepurchaseorder/accountBalance/dealerComp"),
            import(
              "@/views/pa/storepurchaseorder/accountBalance/dealerConfig/index"
            ),
          type: "propus",
          isMust: true
        },
        {
          compKey: "compKey3",
          labelName: "单据起始时间",
          codeField: "beginBusinessDate",
          format: "yyyy-MM-dd HH:mm:ss",
          component: () => import("@/components/org/datePicker/datePicker"),
          type: "datePicker",
          dateOptionsType: "0",
          isMust: true
        },
        {
          compKey: "compKey4",
          labelName: "单据结束时间",
          codeField: "endBusinessDate",
          format: "yyyy-MM-dd HH:mm:ss",
          component: () => import("@/components/org/datePicker/datePicker"),
          type: "datePicker",
          dateOptionsType: "0",
          isMust: true
        }
      ],
      tableCols: [
        {
          prop: "carBrandCode",
          label: "经销商品牌",
          width: 155,
          align: "center"
        },
        {
          prop: "dlrCode",
          label: "经销商编码",
          width: 120,
          align: "center"
        },
        {
          prop: "dlrShortName",
          label: "经销商简称",
          width: 180,
          align: "center"
        },
        {
          prop: "",
          label: "账户名称",
          width: 120,
          align: "center"
        },
        {
          prop: "dlrBalance",
          label: "账户余额",
          width: 120,
          align: "center"
        },
        {
          prop: "creditQuota",
          label: "信用额度",
          width: 120,
          align: "center"
        },
        {
          prop: "frozenMoney",
          label: "预扣额度",
          width: 120,
          align: "center"
        },
        {
          prop: "remit",
          label: "银行汇款",
          width: 120,
          align: "center"
        },
        {
          prop: "adding",
          label: "转款",
          width: 155,
          align: "center"
        },
        {
          prop: "subtract",
          label: "扣款",
          width: 155,
          align: "center"
        },
        {
          prop: "balanceMoney",
          label: "结算金额",
          width: 155,
          align: "center"
        },
        {
          prop: "lastUpdatedDate",
          label: "更新时间",
          width: 155,
          align: "center"
        }
      ],
      //表单查询数据
      formField: {
        partBrandCode: "",
        beginBusinessDate: "",
        endBusinessDate: "",
        dlrShortName: ""
      },
      //初始化数据
      initDatas: [],
      listInit: {}
    };
  },
  methods: {}
};
</script>
