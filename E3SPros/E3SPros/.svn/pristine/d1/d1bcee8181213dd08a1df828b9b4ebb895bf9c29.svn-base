<!--
* description: 库存统计查询
* author: linsy
* createdDate: 2019-08-08
-->
<template>
  <div class="app-container app-container-table">
    <one-table-template ref="multipleTable" :dynamicButtons="tableButtons" :dynamicComponents="tableComponents" :dynamicApiConfig="apiConfig" :dynamicTableCols="tableCols" :dynamicFormFields="formField" />
  </div>
</template>
<script>
import { oneTableWithViewTemplateMixins } from "@/components/mixins/oneTableWithViewTemplateMixins";
import { veApis } from "@/api/graphQLApiList/ve";
import OneTableTemplate from "@/components/templates/oneTable";
import { CacheConfig } from "@/cache/configCache/index";

export default {
  name: "stockStatistics",
  // 组件混入对象：{data[listQuery] methods[queryTable]}
  mixins: [oneTableWithViewTemplateMixins],
  components: {
    OneTableTemplate
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
      apiConfig: veApis.veStockStaticQry,
      // 动态组件-按钮
      tableButtons: [
        {
          compKey: "btnKey1",
          type: "primary",
          size: "small",
          clickEvent: () => this.queryTable(1),
          text: this.$t("sys.button.query")
        } /*查询*/,
        {
          compKey: "btnKey3",
          type: "",
          size: "small",
          clickEvent: () => this.reset(),
          text: this.$t("sys.button.reset")
        } /*重置*/,
        {
          compKey: "btnKey4",
          type: "",
          size: "small",
          clickEvent: () => this.exportExcel(),
          text: this.$t("sys.button.export")
        } /*导出*/
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
                labelName: this.$t("org.label.carBrandCn") /*品牌*/,
                codeField: "carBrandCode",
                component: () => import("@/components/org/carBrand/carBrand"),
                type: "dropdownList",
                isMust: true
              },
              {
                compKey: "compKey2",
                labelName: this.$t("ve.label.vin") /*VIN码*/,
                codeField: "vin",
                component: () => import("@/components/org/commonInput"),
                type: "inputText",
                isMust: true
              },
              {
                compKey: "compKey3",
                labelName: this.$t("org.label.carConfig") /*车型*/,
                codeField: "carConfigId",
                component: () => import("@/components/org/carTypeConfig"),
                type: "propus",
                isMust: true
              },
              {
                compKey: "compKey4",
                labelName: this.$t("org.label.carColor") /*车身颜色*/,
                codeField: "carColorId",
                component: () => import("@/components/org/carColor"),
                type: "propus",
                isMust: true
              },
              {
                compKey: "compKey5",
                labelName: this.$t("org.label.carIncolor") /*内饰色*/,
                codeField: "carIncolorId",
                component: () => import("@/components/org/TrimPopupColor"),
                type: "propus",
                isMust: false
              },
              {
                compKey: "compKey6",
                labelName: this.$t("org.label.warnHome") /*仓库*/,
                lookuptype: "VE0079",
                codeField: "carStockHouseId",
                component: () => import("@/components/org/LookupValue"),
                type: "dropdownList",
                isMust: false
              },
              {
                compKey: "compKey7",
                labelName: this.$t("org.label.carHouseType") /*库存类型*/,
                lookuptype: "VE0079",
                codeField: "carHouseType",
                component: () => import("@/components/org/LookupValue"),
                type: "dropdownList",
                isMust: false
              },
              {
                compKey: "compKey8",
                labelName: this.$t("org.label.offlineTime") /*下线时间*/,
                codeField: "offLineDateBegin",
                component: () =>
                  import("@/components/org/datePicker/datePicker"),
                type: "datePicker",
                dateOptionsType: "0",
                isMust: false
              },
              {
                compKey: "compKey9",
                labelName: this.$t("org.label.showWay") /*显示方式*/,
                codeField: "showModel",
                component: () => import("@/components/org/commonInput"),
                type: "inputText",
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
                prop: "carBrandCode",
                label: this.$t("org.label.carBrandCn") /*品牌*/,
                width: null,
                align: "center"
              },
              {
                prop: "carSeriesCode",
                label: this.$t("org.label.carSerise") /*车系*/,
                width: null,
                align: "center"
              },
              {
                prop: "carTypeCode",
                label: this.$t("org.label.carConfig") /*车型*/,
                width: null,
                align: "center"
              },
              {
                prop: "carConfigCode",
                label: this.$t("org.label.carConfig") /*车型配置*/,
                width: null,
                align: "center"
              },
              {
                prop: "carColorCode",
                label: this.$t("org.label.carColor") /*车身颜色*/,
                width: null,
                align: "center"
              },
              {
                prop: "carIncolorCode",
                label: this.$t("org.label.carIncolor") /*内饰色*/,
                width: null,
                align: "center"
              },
              {
                prop: "cnt",
                label: this.$t("org.label.count") /*数量*/,
                width: null,
                align: "center"
              }
            ],
      //表单查询数据（查询条件）
      formField: {
        carBrandCode: "",
        vin: "",
        carConfigId: "",
        carColorId: "",
        carIncolorId: "",
        carStockHouseId: "",
        carHouseType: "",
        offLineDateBegin: "",
        showModel: ""
      }
    };
  },
  methods: {}
};
</script>
