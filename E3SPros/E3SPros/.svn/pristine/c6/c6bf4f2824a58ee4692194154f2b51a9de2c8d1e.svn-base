<template>
  <div class="app-container app-container-table">
    <one-table-template
      ref="multipleTable"
      :dynamicButtons="tableButtons"
      :dynamicComponents="tableComponents"
      :dynamicApiConfig="apiConfig"
      :dynamicTableCols="tableCols"
      :dynamicFormFields="formField"
    />
    <purImport :isVisible="purImportVisable" @changeCode="changePurImport" />
    <purManual :isVisible="purManualVisable" @changeCode="changePurManual" :listDialog="listDialog"/>
  </div>
</template>
<script>
import { oneTableWithViewTemplateMixins } from '@/components/mixins/oneTableWithViewTemplateMixins';
import { veApis } from "@/api/graphQLApiList/ve";
import OneTableTemplate from "@/components/templates/oneTable";
import purImport from "./purImportDialog";
import purManual from "./purManualDialog";
export default {
  name: "vePurDistribution",
  // 组件混入对象：{data[listQuery] methods[queryTable]}
  mixins: [oneTableWithViewTemplateMixins],
  components: {
    OneTableTemplate,
    purImport,
    purManual
  },
  data() {
    return {
      mul: false,
      purManualVisable: false,
      purImportVisable: false,
      listDialog:[],
      // 网格查询API配置对象
      apiConfig: veApis.vePurAuditQry,
      list: {},
      // 动态组件-按钮
      tableButtons: [
        {
          compKey: "btnKey1",
          type: "primary",
          size: "small",
          clickEvent: () => this.queryTable(1),
          text: this.$t('sys.button.query')/*查询*/
        },
        {
          compKey: "btnKey2",
          type: "",
          size: "small",
          clickEvent: () => this.synchrony("stockTypeCode"),
          text: this.$t('sys.button.sync')/*同步*/
        },
        {
          compKey: "btnKey3",
          type: "",
          size: "small",
          clickEvent: () => this.showPurImport(),
          text: this.$t('ve.label.showPurImport')/*导入分配*/
        },
        {
          compKey: "btnKey4",
          type: "",
          size: "small",
          clickEvent: () => this.queryTable(1),
          text: this.$t('ve.label.piliangFenpei')/*批量分配*/
        },
        {
          compKey: "btnKey5",
          type: "",
          size: "small",
          clickEvent: () => this.showPurManual(),
          text: this.$t('ve.label.shougongFenpei')/*手工分配*/
        },
        {
          compKey: "btnKey6",
          type: "",
          size: "small",
          clickEvent: () => this.reset(),
          text: this.$t('sys.button.reset')/*查询*/
        },
        {
          compKey: "btnKey7",
          type: "",
          size: "small",
          clickEvent: () => this.exportExcel(),
          text: this.$t('sys.button.export')/*查询*/
        }
      ],
      // 动态组件-查询条件
      tableComponents: [
        // 显示组件
        {
          compKey: "compKey1",
          labelName: this.$t('ve.label.carBrand')/*品牌*/,
          codeField: "carBrandCode",
          component: () => import("@/components/org/carBrand/carBrand"),
          type: "dropdownList",
          isMust: true
        },
        {
          compKey: "compKey2",
          labelName: this.$t('ve.label.purOrderCode')/*采购单号*/,
          codeField: "purOrderCode",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        },
        {
          compKey: "compKey12",
          labelName: this.$t('ve.label.sendTypeCode')/*采购单类型*/,
          lookuptype: "VE0078",
          isMul: this.mul,
          codeField: "sendTypeCode",
          component: () => import("@/components/org/LookupValue"),
          type: "dropdownList",
          isMust: true
        },
        {
          compKey: "compKey4",
          labelName: this.$t('ve.label.cashTypeCode')/*资金类型*/,
          codeField: "cashTypeCode",
          component: () => import("@/components/ve/PurcashType"),
          type: "dropdownList",
          isMust: true
        },
        // 触发弹窗组件（popups：为弹窗组件）
        {
          compKey: "compKey5",
          labelName: this.$t('org.label.dlrName')/*经销商*/,
          codeField: "dlr",
          component: () => import("@/components/org/commonInput/searchInput"),
          type: "popupsInput",
          isMust: false,
          popups: {
            type: "propus",
            key: "key1",
            state: false,
            component: () => import("@/components/org/orgDlr")
          }
        },
        // {compKey: 'compKey3', labelName: '车型', codeField: 'vin', component: () => import('@/components/org/commonInput'), type: 'inputText', isMust: false},

        // {compKey: 'compKey6', labelName: '车型', codeField: 'carConfigId', component: () => import('@/components/org/carTypeConfig'), type: 'propus', isMust: false},
        {
          compKey: "compKey6",
          labelName: this.$t('org.label.carType')/*车型*/,
          codeField: "carConfigId",
          component: () => import("@/components/org/commonInput/searchInput"),
          type: "popupsInput",
          isMust: false,
          popups: {
            type: "propus",
            key: "key2",
            state: false,
            component: () =>
              import("@/components/org/carTypeConfig/carTypeConfig")
          }
        },

        {
          compKey: "compKey7",
          labelName: this.$t('ve.label.carColorId')/*车身颜色*/,
          codeField: "carColorId",
          component: () => import("@/components/org/commonInput/searchInput"),
          type: "popupsInput",
          isMust: false,
          popups: {
            type: "propus",
            key: "key3",
            state: false,
            component: () => import("@/components/org/carColor/carColor")
          }
        },
        {
          compKey: "compKey8",
          labelName: this.$t('ve.label.carIncolorId')/*内饰色*/,
          codeField: "carIncolorId",
          component: () => import("@/components/org/commonInput/searchInput"),
          type: "popupsInput",
          isMust: false,
          popups: {
            type: "propus",
            key: "key4",
            state: false,
            component: () => import("@/components/org/TrimPopupColor")
          }
        },
        // 日期控件
        {
          compKey: "compKey9",
          labelName: this.$t('ve.label.auditDateBegin')/*审核开始*/,
          codeField: "auditDateBegin",
          component: () => import("@/components/org/datePicker/datePicker"),
          type: "datePicker",
          dateOptionsType: "1",
          isMust: false
        },
        {
          compKey: "compKey10",
          labelName: this.$t('ve.label.auditDateEnd')/*审核结束*/,
          codeField: "auditDateEnd",
          component: () => import("@/components/org/datePicker/datePicker"),
          type: "datePicker",
          dateOptionsType: "1",
          isMust: false
        },
        // 送货方式（值列表）
        {
          compKey: "compKey11",
          labelName: this.$t('ve.label.carBrand')/*送货方式*/,
          lookuptype: "VE0079",
          codeField: "sendTypeCode",
          component: () => import("@/components/org/LookupValue"),
          type: "dropdownList",
          isMust: false
        }
      ],
      // 动态生成网格列
      tableCols: [
        {
          prop: "stockTypeCode",
          label: this.$t('ve.label.stockTypeCode')/*库存类型*/,
          align: "center",
          width: 200,
          isComponent: true,
          comps: [
            {
              compKey: "propKey1",
              isMul: false,
              isShowLabel: false,
              codeField: "stockTypeCode",
              clickEvent: () => null,
              component: () => import("@/components/org/LookupValue")
            }
          ]
        },
        { prop: "carBrandCn", label: this.$t('ve.label.carBrand')/*品牌*/, width: 110, align: "center" },
        {
          prop: "carBrandCode",
          label: "品牌编号",
          width: 0,
          align: "center",
          hidden: true
        },
        { prop: "dlrShortName", label: this.$t('ve.label.dlrName')/*经销商*/, width: 100, align: "center" },
        {
          prop: "purOrderDId",
          label: this.$t('ve.label.purOrderDId')/*采购单ID*/,
          width: 180,
          align: "center",
          hidden: true
        },
        {
          prop: "purOrderCode",
          label: this.$t('ve.label.purOrderCode')/*采购单号*/,
          width: 180,
          align: "center"
        },
        {
          prop: "purOrderDCode",
          label: this.$t('ve.label.purOrderDCode')/*采购子单号*/,
          width: 200,
          align: "center"
        },
        { prop: "purState", label: this.$t('ve.label.purState')/*子单状态*/, width: 80, align: "center" },
        {
          prop: "purOrderTypeName",
          label: this.$t('ve.label.purOrderTypeName')/*采购单类型*/,
          width: 100,
          align: "center"
        },
        {
          prop: "purOrderTypeCode",
          label: "采购单类型编码",
          width: 0,
          align: "center",
          hidden: true
        },
        {
          prop: "deductCashName",
          label: "扣款资金类型名称",
          width: 0,
          align: "center",
          hidden: true
        },
        {
          prop: "deductCashTypeId",
          label: "扣款资金类型ID",
          width: 0,
          align: "center",
          hidden: true
        },
        {
          prop: "cashTypeName",
          label: this.$t('ve.label.cashTypeCode')/*资金类型*/,
          width: 120,
          align: "center"
        },
        { prop: "configCode", label: this.$t('ve.label.carBrand')/*车型简码*/, width: null, align: "center" },
        {
          prop: "carConfigName",
          label: this.$t('org.label.carConfig')/*车型配置*/,
          width: 120,
          align: "center"
        },
        {
          prop: "carColorName",
          label: this.$t('org.label.carColor')/*车身颜色*/,
          width: null,
          align: "center"
        },
        {
          prop: "carIncolorName",
          label: this.$t('org.label.carIncolor')/*内饰色*/,
          width: null,
          align: "center"
        },
        {
          prop: "carColorPrice",
          label: this.$t('ve.label.carColorPrice')/*颜色价*/,
          width: null,
          align: "center"
        },
        {
          prop: "carIncolorPrice",
          label: this.$t('ve.label.carIncolorPrice')/*内饰价*/,
          width: null,
          align: "center"
        },
        {
          prop: "countrySubsidy",
          label: this.$t('ve.label.countrySubsidy')/*补贴价*/,
          width: null,
          align: "center"
        },
        { prop: "carPrice", label: this.$t('ve.label.carPrice')/*产品价格*/, width: null, align: "center" },
        {
          prop: "carProductPrice",
          label: this.$t('ve.label.carProductPrice')/*采购价格*/,
          width: null,
          align: "center"
        },
        { prop: "carSeriseName", label: this.$t('org.label.carSerise')/*车系*/, width: 130, align: "center" },
        {
          prop: "carWarseHouse",
          label: this.$t('ve.label.carWarseHouse')/*发车仓库*/,
          width: 130,
          align: "center"
        },
        {
          prop: "tranportName",
          label: this.$t('ve.label.tranportName')/*送货方式*/,
          width: null,
          align: "center"
        },
        { prop: "houseAddr", label: this.$t('ve.label.houseAddr')/*搬入地*/, width: 133, align: "center" },
        { prop: "creator", label: this.$t('ve.label.creator')/*下单人*/, width: null, align: "center" },
        { prop: "confirDate", label: this.$t('ve.label.confirDate')/*确认日期*/, width: 128, align: "center" },
        {
          prop: "updateControlId",
          label: this.$t('ve.label.updateControlId')/*并发控制*/,
          width: 0,
          align: "center",
          hidden: true
        }
      ],
      //表单查询数据（查询条件）
      formField: {
        carBrandCode: "",
        purOrderCode: "",
        vin: "",
        cashTypeCode: "",
        purOrderListCode: "",
        dlr: "",
        carConfigId: "",
        carColorId: "",
        carIncolorId: "",
        auditDateBegin: "",
        auditDateEnd: "",
        sendTypeCode: ""
      }
    };
  },
  methods: {
    showPurImport() {
      this.purImportVisable = true;
    },
    changePurImport() {
      this.purImportVisable = false;
    },
    changePurManual() {
      this.purManualVisable = false;
    },
    showPurManual() {
      const that = this.$refs.multipleTable;
      let selectData = that.$refs.multipleTable.selection;
      if (!selectData || selectData.length != 1) {
        that.$message({
          message: "请选择一条需要分配的采购单记录",
          type: "warning",
          duration: 2000
        });
        return;
      }
      this.listDialog = selectData[0];
      this.purManualVisable = true;
    }
  }
};
</script>
