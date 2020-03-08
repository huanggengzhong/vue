<!--
* description: 采购销退状态查询
* author: xulfan
* createdDate: 2019-09-24
* logs:
*   2019-09-24 完成页面开发和国际化配置 xulfan
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
      :dynamicIsShowSelect="false"
      :dynamicIsShowMoreBtn="true"
    />
  </div>
</template>
<script>
import { oneTableWithViewTemplateMixins } from '@/components/mixins/oneTableWithViewTemplateMixins';
import { veApis } from "@/api/graphQLApiList/ve";
import OneTableTemplate from "@/components/templates/oneTable";
import { CacheConfig } from "@/cache/configCache/index";
import LangSelect from "@/components/LangSelect";
export default {
  name: "purSalesStatusQuery",
  // 组件混入对象
  mixins: [oneTableWithViewTemplateMixins],
  components: {
    OneTableTemplate,
    LangSelect
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
      apiConfig: veApis.purSalesStatusQuery,
      // 动态组件-按钮
      tableButtons: [
        {
          compKey: "btnKey1",
          type: "primary",
          size: "small",
          clickEvent: () => this.queryTable(1),
          text: this.$t("sys.button.query") //查询
        },
        {
          compKey: "btnKey2",
          type: "",
          size: "small",
          clickEvent: () => this.reset(),
          text: this.$t("sys.button.reset") //重置
        },
        {
          compKey: "btnKey3",
          type: "",
          size: "small",
          clickEvent: () => this.exportExcel(),
          text: this.$t("sys.button.export") //导出
        }
      ],
      tableComponents:
        CacheConfig.cacheData[this.$route.path] &&
        CacheConfig.cacheData[this.$route.path].tableComponents.length > 0
          ? CacheConfig.cacheData[this.$route.path].tableComponents
          : [
              // 动态组件-查询条件
              {
                compKey: "compKey1",
                labelName: this.$t("org.label.carBrandCn"), //品牌名称
                codeField: "carBrandCode",
                component: () => import("@/components/org/carBrand/carBrand"),
                type: "dropdownList",
                isMust: true
              },
              {
                compKey: "compKey2",
                parentFileds: "carBrandCode-carBrandCode",
                labelName: this.$t("org.label.carConfig"), //车型配置
                codeField: "carConfigId",
                component: () => import("@/components/org/carTypeConfig"),
                type: "propus",
                isMust: true
              },
              {
                compKey: "compKey3",
                labelName: this.$t("org.label.vin"), //VIN码
                codeField: "vin",
                component: () => import("@/components/org/commonInput"),
                type: "inputText",
                isMust: true
              },
              {
                compKey: "compKey4",
                labelName: this.$t("org.label.dlrName"), // 经销商
                codeField: "dlrName",
                component: () => import("@/components/org/orgDlr"),
                type: "propus",
                isMust: true
              },
              {
                compKey: "compKey5",
                labelName: this.$t("org.label.retireStatus"), //销退状态
                lookuptype: "VE0040",
                codeField: "retireStatus",
                component: () => import("@/components/org/LookupValue"),
                type: "dropdownList",
                isMust: false
              },
              {
                compKey: "compKey6",
                labelName: this.$t("org.label.retireType"), //销退类型
                lookuptype: "VE0039",
                codeField: "retireType",
                component: () => import("@/components/org/LookupValue"),
                type: "dropdownList",
                isMust: false,
                isShow: true
              }
            ],
      // 动态生成网格列
      tableCols:
        CacheConfig.cacheData[this.$route.path] &&
        CacheConfig.cacheData[this.$route.path].tableCols.length > 0
          ? CacheConfig.cacheData[this.$route.path].tableCols
          : [
              {
                prop: "carBrandCn",
                label: this.$t("org.label.carBrandCn"), //品牌
                width: null,
                align: "center"
              },
              {
                prop: "reqNumber",
                label: this.$t("org.label.reqNumber"), //申请单号
                width: 85,
                align: "center"
              },
              {
                prop: "dlrShortName",
                label: this.$t("org.label.dlrName"), //经销商
                width: null,
                align: "center"
              },
              {
                prop: "reqDate",
                label: this.$t("org.label.reqDate"), //申请日期
                width: 85,
                align: "center"
              },
              {
                prop: "salRefWarehouse",
                label: this.$t("org.label.salRefWarehouse"), //销退仓库
                width: 85,
                align: "center"
              },
              {
                prop: "salRefAmount",
                label: this.$t("org.label.salRefAmount"), //销退金额
                width: 85,
                align: "center"
              },
              {
                prop: "carConfig",
                label: this.$t("org.label.carConfig"), //车型配置
                width: 85,
                align: "center"
              },
              {
                prop: "vin",
                label: this.$t("org.label.vin"), //VIN码
                width: null,
                align: "center"
              },
              {
                prop: "carColorName",
                label: this.$t("org.label.carColor"), //车身颜色
                width: 85,
                align: "center"
              },
              {
                prop: "carIncolorName",
                label: this.$t("org.label.carIncolor"), //内饰色
                width: null,
                align: "center"
              },
              {
                prop: "carColorPrice",
                label: this.$t("org.label.colorPrice"), //颜色价格
                width: 85,
                align: "center"
              },
              {
                prop: "carIncolorPrice",
                label: this.$t("org.label.inColorPrice"), //内饰价
                width: 85,
                align: "center"
              },
              {
                prop: "totalPrice",
                label: this.$t("org.label.totalPrice"), //总价
                width: null,
                align: "center"
              },
              {
                prop: "note",
                label: this.$t("org.label.note"), //备注
                width: null,
                align: "center"
              },
              {
                prop: "deliverModeName",
                label: this.$t("org.label.transportType"), //运送方式
                width: 85,
                align: "center"
              },
              {
                prop: "carDamReturnTime",
                label: this.$t("org.label.carDamReturnTime"), //车损退回时间
                width: 120,
                align: "center"
              },
              {
                prop: "acceptTime",
                label: this.$t("org.label.acceptTime"), //验收时间
                width: 90,
                align: "center"
              }
            ],
      //表单查询数据
      formField: {
        carBrandCode: "",
        carConfigId: "",
        vin: "",
        dlrName: "",
        retireStatus: "",
        retireType: ""
      }
    };
  }
};
</script>
