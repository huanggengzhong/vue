<template>
  <div class="app-container app-container-table">
    <one-table-template
      ref="multipleTable"
      :dynamicTableCols="tableCols"
      :dynamicComponents="tableComponents"
      :dynamicFormFields="formField"
      :dynamicIsShowSelect="false"
      :dynamicIsShowMoreBtn="true"
      />
  </div>
</template>

<script>
import { oneTableWithViewTemplateMixins } from "@/components/mixins/oneTableWithViewTemplateMixins"
import OneTableTemplate from "@/components/crm/Template/crmonePage"
import { CacheConfig } from "@/cache/configCache/index"
export default {
  name: 'rescueInquire',
  components: {
    OneTableTemplate
  },
  mixins: [oneTableWithViewTemplateMixins],
  data () {
    return {
      tableComponents:
      CacheConfig.cacheData[this.$route.path] &&
      CacheConfig.cacheData[this.$route.path].tableComponents.length > 0
      ? CacheConfig.cacheData[this.$route.path].tableComponents:
      [
        {
          compKey: "compKey1",
          labelName: "服务单号",
          codeField: "serveOdd",
          component: () =>
            import("@/components/crm/textbox/crmTextInput"),
          type: "inputText",
          isMust: false
        },
        {
          compKey: "compKey2",
          labelName: "建单日期",
          codeField: "serveStartTime,serveEndTime",
          component: () =>
            import("@/components/crm/Time/crmdtDatePicker"),
          type: "date",
          isMust: false,
        },
        {
          compKey: "compKey3",
          labelName: "救援类型",
          codeField: "isVipName",
          component: () =>
            import("@/components/crm/lookupValue/lookupvalue"),
          type: "",
          isMust: false
        },
        {
          compKey: "compKey4",
          labelName: "单据状态",
          codeField: "receiptState",
          lookuptype:"LX183",
          component: () =>
            import("@/components/crm/lookupValue/lookupvalue"),
          type: "",
          isMust: false
        },
        {
          compKey: "compKey5",
          labelName: "客户名称",
          codeField: "clientName",
          component: () =>
            import("@/components/crm/textbox/crmTextInput"),
          type: "inputText",
          isMust: false
        },
        {
          compKey: "compKey6",
          labelName: "车牌号",
          codeField: "custClassName",
          component: () =>
            import("@/components/crm/textbox/crmTextInput"),
          type: "inputText",
          isMust: false
        },
        {
          compKey: "compKey7",
          labelName: "电话",
          codeField: "telephone",
          component: () =>
            import("@/components/crm/textbox/crmTextInput"),
          type: "inputText",
          isMust: false
        },
        {
          compKey: "compKey8",
          labelName: "责任网点",
          codeField: "dlrId",
          component: () => import("@/components/crm/crmEjectWindows/crmChangeDlr/index"),
          type: "propus",
          isMust: false,
          isMul:false,
        },
        {
          compKey: "compKey9",
          labelName: "派单方式",
          codeField: "carLicenseStatus",
          lookuptype:"LX079",
          component: () =>
            import("@/components/crm/lookupValue/lookupvalue"),
          type: "",
          isMust: false
        },
        {
          compKey: "compKey10",
          labelName: "解决方式",
          codeField: "solveWay",
          component: () =>
            import("@/components/crm/lookupValue/lookupvalue"),
          type: "",
          isMust: false
        },
        {
          compKey: "compKey11",
          labelName: "建单人",
          codeField: "custName",
          component: () =>
            import("@/components/crm/textbox/crmTextInput"),
          type: "inputText",
          isMust: false
        }
      ],
      tableCols: [
        {
          prop: "add",
          label: "追加",
          width: 80,
          align: "center"
        },
        {
          prop: "serveOdd",
          label: "服务单号",
          width: null,
          align: "center"
        },
        {
          prop: "serveStartTime",
          label: "建单日期",
          width: null,
          align: "center"
        },
        {
          prop: "isVipName",
          label: "救援类型",
          width: 80,
          align: "center"
        },
        {
          prop: "receiptState",
          label: "单据状态",
          width: 80,
          align: "center"
        },
        {
          prop: "clientName",
          label: "客户名称",
          width: 250,
          align: "center"
        },
        {
          prop: "custClassName",
          label: "车牌号",
          width: 100,
          align: "center"
        },
        {
          prop: "telephone ",
          label: "电话",
          width: null,
          align: "center"
        },
        {
          prop: "dlrId ",
          label: "责任网点",
          width: null,
          align: "center"
        },
        {
          prop: "carLicenseStatus ",
          label: "派单方式",
          width: 80,
          align: "center"
        },
        {
          prop: "solveWay ",
          label: "解决方式",
          width: 80,
          align: "center"
        },
        {
          prop: "custName ",
          label: "建单人",
          width: 80,
          align: "center"
        }
      ],
      formField: {
        serveOdd:'',
        isVipName:'',
        receiptState:'',
        clientName: '',
        custClassName: '',
        telephone: '',
        dlrId:'',
        custName: ''
      }
    }
  }
}
</script>