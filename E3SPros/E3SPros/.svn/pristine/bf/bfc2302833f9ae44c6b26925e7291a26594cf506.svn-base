<!--
* 采购单状态查询
* xulfan
-->
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
  </div>
</template>
<script>
import { oneTableWithViewTemplateMixins } from '@/components/mixins/oneTableWithViewTemplateMixins';
import { veApis } from "@/api/graphQLApiList/ve";
import OneTableTemplate from "@/components/templates/oneTable";
import { CacheConfig } from "@/cache/configCache/index";

export default {
  name: "purStatusQuery",
  // 组件混入对象：{data[listQuery] methods[queryTable]}
  mixins: [oneTableWithViewTemplateMixins],
  components: {
    OneTableTemplate
    // PurchaseOrderType,
    // PurcashType
  },
  // 阻塞路由预加载网格中组件的数据
  beforeRouteEnter(to, from, next) {
    CacheConfig.initData(to.path, function() {
      next();
    });
  },
  data() {
    return {
      // 网格查询API配置对象
      apiConfig: veApis.vePurOrderQuery,
      // 动态组件-按钮
      tableButtons: [
        {
          compKey: "btnKey1",
          type: "primary",
          size: "small",
          clickEvent: () => this.queryTable(1),
          text: this.$t("sys.button.query")
        },
        {
          compKey: "btnKey3",
          type: "",
          size: "small",
          clickEvent: () => this.reset(),
          text: this.$t("sys.button.reset")
        },
        {
          compKey: "btnKey4",
          type: "",
          size: "small",
          clickEvent: () => this.exportExcel(),
          text: this.$t("sys.button.export")
        }
      ],
      // 动态组件-查询条件
      tableComponents:
        CacheConfig.cacheData[this.$route.path] &&
        CacheConfig.cacheData[this.$route.path].tableComponents &&
        CacheConfig.cacheData[this.$route.path].tableComponents.length > 0
          ? CacheConfig.cacheData[this.$route.path].tableComponents
          : [
              // 显示组件
              {
                compKey: "compKey1",
                labelName: this.$t("org.label.carBrand") /*品牌*/,
                codeField: "carBrandCode",
                component: () => import("@/components/org/carBrand/carBrand"),
                type: "dropdownList",
                isMust: true
              },
              {
                compKey: "compKey2",
                labelName: this.$t("ve.label.purOrderCode") /*采购单号*/,
                codeField: "purOrderCode",
                component: () => import("@/components/org/commonInput"),
                type: "inputText",
                isMust: true
              },
              {
                compKey: "compKey3",
                labelName: this.$t("org.label.vin") /*VIN*/,
                codeField: "vin",
                component: () => import("@/components/org/commonInput"),
                type: "inputText",
                isMust: true
              },
              // 采购单状态下拉值
              {
                compKey: "compKey4",
                labelName: this.$t("ve.label.purStatus") /*采购单状态*/,
                lookuptype: "VE0074",
                codeField: "purStatus",
                component: () => import("@/components/org/LookupValue"),
                type: "dropdownList",
                isMust: true
              },
              {
                compKey: "compKey4",
                labelName: this.$t("org.label.dlrName") /*经销商*/,
                codeField: "dlrId",
                component: () => import("@/components/org/orgDlr"),
                type: "propus",
                isMust: false
              },
              {
                compKey: "compKey6",
                labelName: this.$t("org.label.carConfig") /*车型配置*/,
                codeField: "carConfigId1",
                component: () => import("@/components/org/carTypeConfig"),
                type: "propus",
                isMust: false
              },
              {
                compKey: "compKey7",
                labelName: this.$t("org.label.carColor") /*车身颜色*/,
                codeField: "carColorId",
                component: () => import("@/components/org/carColor"),
                type: "propus",
                isMust: false
              },
              // 送货方式下拉值
              {
                compKey: "compKey8",
                labelName: this.$t("org.label.tranportName") /*送货方式*/,
                lookuptype: "VE0079",
                codeField: "transportTypeCode",
                component: () => import("@/components/org/LookupValue"),
                type: "dropdownList",
                isMust: false
              },
              // 采购单类型下拉框组件
              {
                compKey: "compKey9",
                labelName: this.$t("ve.label.purchaseOrderType") /*采购单类型*/,
                codeField: "purchaseOrderTypeId",
                parentFileds: "carBrandCode-carBrandCode",
                component: () =>
                  import("@/components/ve/PurchaseOrderType/index"),
                type: "dropdownList",
                isMust: false
              },
              // 资金类型下拉框组件
              {
                compKey: "compKey10",
                labelName: this.$t("org.label.capitalType"),
                codeField: "cashTypeId",
                component: () => import("@/components/ve/PurcashType/index"),
                type: "dropdownList",
                isMust: false
              },
              // 日期控件
              {
                compKey: "compKey11",
                labelName: this.$t("ve.label.confirDateBegin") /*确认开始日期*/,
                codeField: "confirDateBegin",
                component: () =>
                  import("@/components/org/datePicker/datePicker"),
                type: "datePicker",
                dateOptionsType: "1",
                isMust: false
              },
              {
                compKey: "compKey12",
                labelName: this.$t("ve.label.confirDateEnd") /*确认结束日期*/,
                codeField: "confirDateEnd",
                component: () =>
                  import("@/components/org/datePicker/datePicker"),
                type: "datePicker",
                dateOptionsType: "1",
                isMust: false
              },
              {
                compKey: "compKey13",
                labelName: this.$t("ve.label.assignDateBegin") /*分配开始日期*/,
                codeField: "assignDateBegin",
                component: () =>
                  import("@/components/org/datePicker/datePicker"),
                type: "datePicker",
                dateOptionsType: "1",
                isMust: false
              },
              {
                compKey: "compKey14",
                labelName: this.$t("ve.label.assignDateEnd") /*分配结束日期*/,
                codeField: "assignDateEnd",
                component: () =>
                  import("@/components/org/datePicker/datePicker"),
                type: "datePicker",
                dateOptionsType: "1",
                isMust: false
              },
              {
                compKey: "compKey15",
                labelName: this.$t(
                  "ve.label.outConfirimDateBegin"
                ) /*出货确认开始日期*/,
                codeField: "outConfirimDateBegin",
                component: () =>
                  import("@/components/org/datePicker/datePicker"),
                type: "datePicker",
                dateOptionsType: "1",
                isMust: false
              },
              {
                compKey: "compKey16",
                labelName: this.$t(
                  "ve.label.outConfirimDateEnd"
                ) /*出货确认结束日期*/,
                codeField: "outConfirimDateEnd",
                component: () =>
                  import("@/components/org/datePicker/datePicker"),
                type: "datePicker",
                dateOptionsType: "1",
                isMust: false
              },
              {
                compKey: "compKey17",
                labelName: this.$t("ve.label.cancelDateBegin") /*作废开始日期*/,
                codeField: "cancelDateBegin",
                component: () =>
                  import("@/components/org/datePicker/datePicker"),
                type: "datePicker",
                dateOptionsType: "1",
                isMust: false
              },
              {
                compKey: "compKey18",
                labelName: this.$t("ve.label.cancelDateEnd") /*作废结束日期*/,
                codeField: "cancelDateEnd",
                component: () =>
                  import("@/components/org/datePicker/datePicker"),
                type: "datePicker",
                dateOptionsType: "1",
                isMust: false
              },
              // 送货方式（值列表）
              {
                compKey: "compKey19",
                labelName: this.$t("org.label.distributionMode") /*分配模式*/,
                lookuptype: "VE0016",
                codeField: "pdiAssginFlag",
                component: () => import("@/components/org/LookupValue"),
                type: "dropdownList",
                isMust: false
              },
              // 物流状态（值列表）
              {
                compKey: "compKey20",
                labelName: this.$t("ve.label.wlStatus") /*物流状态*/,
                lookuptype: "VE0047",
                codeField: "wlStatus",
                component: () => import("@/components/org/LookupValue"),
                type: "dropdownList",
                isMust: false
              }
            ],
      // 动态生成网格列
      tableCols:
        CacheConfig.cacheData[this.$route.path] &&
        CacheConfig.cacheData[this.$route.path].tableCols &&
        CacheConfig.cacheData[this.$route.path].tableCols.length > 0
          ? CacheConfig.cacheData[this.$route.path].tableCols
          : [
              {
                prop: "carBrandCn",
                label: this.$t("org.label.carBrand") /*品牌*/,
                width: 150,
                align: "center"
              },
              {
                prop: "dlrShortName",
                label: this.$t("org.label.dlrName") /*经销商*/,
                width: 120,
                align: "center"
              },
              {
                prop: "purOrderCode",
                label: this.$t("ve.label.purOrderCode") /*采购单号*/,
                width: 170,
                align: "center"
              },
              {
                prop: "purOrderDCode",
                label: this.$t("ve.label.purOrderDCode") /*采购子单号*/,
                width: 200,
                align: "center"
              },
              {
                prop: "purchaseOrderTypeName",
                label: this.$t("ve.label.purchaseOrderType") /*采购单类型*/,
                width: 120,
                align: "center"
              },
              {
                prop: "purStatus",
                label: this.$t("ve.label.purStatus") /*采购单状态*/,
                width: 150,
                align: "center"
              },
              {
                prop: "cashtypeid",
                label: this.$t("org.label.capitalType") /*资金类型*/,
                width: 120,
                align: "center"
              },
              {
                prop: "deductCashTypeId",
                label: this.$t("ve.label.deductCashTypeId") /*扣款资金类型*/,
                width: 150,
                align: "center"
              },
              {
                prop: "PurPrice",
                label: this.$t("org.label.purTotalPrcie") /*采购总金额*/,
                width: null,
                align: "center"
              },
              {
                prop: "vin",
                label: this.$t("org.label.vin") /*vin码*/,
                width: 155,
                align: "center"
              },
              {
                prop: "configCode",
                label: this.$t("org.label.carType") /*车型*/,
                width: null,
                align: "center"
              },
              {
                prop: "carConfigName",
                label: this.$t("org.label.carConfig") /*车型配置*/,
                width: 150,
                align: "center"
              },
              {
                prop: "carColorName",
                label: this.$t("org.label.carColor") /*车身颜色*/,
                width: 120,
                align: "center"
              },
              {
                prop: "carIncolorName",
                label: this.$t("org.label.carIncolor") /*内饰色*/,
                width: 120,
                align: "center"
              },
              {
                prop: "carSeriseName",
                label: this.$t("org.label.carSerise") /*车系*/,
                width: 120,
                align: "center"
              },
              {
                prop: "carConfigCode",
                label: this.$t("org.label.carTypeCode") /*车型编码*/,
                width: 150,
                align: "center"
              },
              {
                prop: "engineCarpush",
                label: this.$t("ve.label.engineCarpush") /*排量*/,
                width: null,
                align: "center"
              },
              {
                prop: "logisticsPlaceName",
                label: this.$t(
                  "ve.label.logisticsPlaceName"
                ) /*实际分配仓库名称*/,
                width: 150,
                align: "center"
              },
              {
                prop: "deliverModeName",
                label: this.$t("org.label.tranportName") /*实际分配仓库名称*/,
                width: null,
                align: "center"
              },
              {
                prop: "receiveShId",
                label: this.$t("ve.label.receiveShId") /*搬入地*/,
                width: 150,
                align: "center"
              },
              {
                prop: "carHouseAddr",
                label: this.$t("ve.label.carHouseAddr") /*搬入地址*/,
                width: 150,
                align: "center"
              },
              {
                prop: "auditDate",
                label: this.$t("ve.label.auditDate") /*审核日期*/,
                width: 150,
                align: "center"
              },
              {
                prop: "assignDate",
                label: this.$t("ve.label.assignDate") /*分配时间*/,
                width: 150,
                align: "center"
              },
              {
                prop: "outconfirimdate",
                label: this.$t("ve.label.outconfirimdate") /*出货确认时间*/,
                width: 150,
                align: "center"
              },
              {
                prop: "lastLogisticsTime",
                label: this.$t(
                  "ve.label.lastLogisticsTime"
                ) /*物流执行计划时间*/,
                width: 150,
                align: "center"
              },
              {
                prop: "lastDeliveryTime",
                label: this.$t("ve.label.lastDeliveryTime") /*送车通知时间*/,
                width: 150,
                align: "center"
              },
              {
                prop: "lastOutStockTime",
                label: this.$t("ve.label.lastOutStockTime") /*出库时间*/,
                width: 150,
                align: "center"
              },
              {
                prop: "lastOutDoorTime",
                label: this.$t("ve.label.lastOutDoorTime") /*出门时间*/,
                width: 150,
                align: "center"
              },
              {
                prop: "checkInstockDate",
                label: this.$t("ve.label.checkInstockDate") /*验收入库时间*/,
                width: 150,
                align: "center"
              },
              {
                prop: "cancelDate",
                label: this.$t("ve.label.cancelDate") /*作废时间*/,
                width: 120,
                align: "center"
              },
              {
                prop: "endCause",
                label: this.$t("ve.label.endCause") /*作废原因*/,
                width: null,
                align: "center"
              },
              {
                prop: "creator",
                label: this.$t("org.label.creator") /*下单人*/,
                width: null,
                align: "center"
              }
            ],
      //表单查询数据（查询条件）
      formField: {
        carBrandCode: "",
        purOrderCode: "",
        vin: "",
        purStatus: "",
        carConfigId: "",
        carColorId: "",
        transportTypeCode: "",
        purchaseOrderTypeId: "",
        cashTypeId: "",
        confirDateBegin: "",
        confirDateEnd: "",
        assignDateBegin: "",
        assignDateEnd: "",
        outConfirimDateBegin: "",
        outConfirimDateEnd: "",
        cancelDateBegin: "",
        cancelDateEnd: "",
        pdiAssginFlag: "",
        wlStatus: ""
      }
    };
  },
  methods: {}
};
</script>
