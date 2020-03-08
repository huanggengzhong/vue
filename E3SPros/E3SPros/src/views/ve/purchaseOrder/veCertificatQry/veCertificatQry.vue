/**
* description: 合格证快递查询
* author: linwm
* createdDate: 2019-07-27
* author: yangsq
* i18n: 2019-09-16
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
  </div>
</template>
<script>
import { oneTableWithViewTemplateMixins } from '@/components/mixins/oneTableWithViewTemplateMixins';
import { veApis } from "@/api/graphQLApiList/ve";
import OneTableTemplate from "@/components/templates/oneTable";
import { CacheConfig } from '@/cache/configCache/index'

export default {
  name: "veCertificatQry",
  // 组件混入对象：{data[listQuery] methods[queryTable]}
  mixins: [oneTableWithViewTemplateMixins],
  components: {
    OneTableTemplate
  },
  // 阻塞路由预加载网格中组件的数据
 beforeRouteEnter(to, from, next) {
  CacheConfig.initData(to.path, function(){next()})
 },
  data() {
    return {
      apiConfig: veApis.veCertificatQry,
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
          text: this.$t("sys.button.query")   //查询
        },
        {
          compKey: "btnKey2",
          type: "",
          size: "small",
          clickEvent: () => this.reset(),
          text: this.$t("sys.button.reset")   //重置
        },
        {
          compKey: "btnKey3",
          type: "",
          clickEvent: () => this.exportExcel('合格证快递查询文件', '合格证快递查询列表', 100),
          size: "small",
          text: this.$t("sys.button.export")  //导出
        }
      ],
      // 动态组件-查询条件
      tableComponents: CacheConfig.cacheData[this.$route.path] && CacheConfig.cacheData[this.$route.path].tableComponents && CacheConfig.cacheData[this.$route.path].tableComponents.length > 0 ? CacheConfig.cacheData[this.$route.path].tableComponents: [
        {
          compKey: "compKey1",
          labelName: this.$t("org.label.carBrandCn"),//品牌
          codeField: "carBrandCode",
          component: () => import("@/components/org/carBrand/carBrand"),
          type: "dropdownList",
          isMust: true
        },
        // 显示组件
        {
          compKey: "compKey2",
          labelName: this.$t("ve.label.PurchaseOrder"),//采购单
          codeField: "purOrderCode",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        },
        {
          compKey: "compKey3",
          labelName: this.$t("ve.label.VINCode"),//VIN码
          codeField: "VIN",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        },  {
          compKey: "compKey6",
          labelName: this.$t("ve.label.dlr"),//经销商
          codeField: "dlrId",
          component: () =>
            import("@/components/org/orgDlr"),
          type: "propus",
          isMust: true
        },
      ],

      // 动态生成网格列
      tableCols: CacheConfig.cacheData[this.$route.path] && CacheConfig.cacheData[this.$route.path].tableCols && CacheConfig.cacheData[this.$route.path].tableCols.length > 0 ? CacheConfig.cacheData[this.$route.path].tableCols: [
        {
          prop: "carBrandName",
          label: this.$t("org.label.carBrandCn"),//品牌
          width: 250,
          align: "center"
        },
        {
          prop: "dlrShortName",
          label: this.$t("ve.label.dlr"),//经销商
          width: 220,
          align: "center"
        },
        {
          prop: "purOrderCode",
          label: this.$t("ve.label.purOrderCode"),//品牌
          width: 220,
          align: "center"
        },
        {
          prop: "purOrderDCode",
          label: this.$t("ve.label.purOrderDCode"),//采购单子号
          width: 220,
          align: "center"
        },
        {
          prop: "vin",
          label: this.$t("ve.label.VINCode"),//VIN码
          width: 220,
          align: "center"
        },
        {
          prop: "expressName",
          label: this.$t("ve.label.CourierServicesCompany"),//快递公司
          width: 220,
          align: "center"
        },
        {
          prop: "expressCode",
          label: this.$t("ve.label.Couriernumber"),//快递单号
          width: 220,
          align: "center"
        },
        {
          prop: "expressDate",
          label: this.$t("ve.label.DateOfDelivery"),//快递日期
          width: 220,
          align: "center"
        },
        {
          prop: "updateControlId",
          label: this.$t("org.label.concurrencyControl"),//并发控制
          width: 0,
          align: "center",
          hidden: true
        }
      ]
    };
  },

  methods: {}
};
</script>

