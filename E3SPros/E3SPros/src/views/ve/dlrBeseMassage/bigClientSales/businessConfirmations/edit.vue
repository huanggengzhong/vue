<template>
  <section>
    <!-- <el-dialog
      width="900px"
      :title="showTitle"
      :append-to-body="true"
      :close-on-click-modal="false"
      center
      @close="sendCode"
    >-->
    <el-dialog
      :close-on-click-modal="false"
      :title="textMap"
      :append-to-body="true"
      :visible.sync="curPopupsVisible"
      @close="sendCode"
      width="1100px"
    >
      <one-table-template
        ref="multipleTable"
        :dynamic-components="tableComponents"
        :dynamic-api-config="apiConfig"
        :dynamic-table-cols="tableCols"
        :dynamic-form-fields="formField"
        :dynamic-is-show-select="false"
        :dynamic-is-init-table="true"
        :dynamic-is-column-drop="true"
        :isSetDefaultBrand="false"
        :dynamicIsShowMoreBtn="false"
        :dynamicTableOtherHeight="70"
        :isShowPagination="false"
      />
    </el-dialog>
  </section>
</template>
<script>
import { veApis } from "@/api/graphQLApiList/ve";
import { formMixins } from "@/components/mixins/formMixins";
import { oneTableWithViewTemplateMixins } from "@/components/mixins/oneTableWithViewTemplateMixins";
import { CacheConfig } from "@/cache/configCache/index";
import OneTableTemplate from "@/components/templates/oneTable";
export default {
  mixins: [oneTableWithViewTemplateMixins, formMixins],
  components: {
    OneTableTemplate
  },
  props: {},
  data() {
    return {
      apiConfig: veApis.veBusinessConfirmation,
      textMap: "查看明细",
      list: [],
      listQuery: {
        pageIndex: 1,
        pageSize: 10,
        limit: 20
      },
      // 动态组件-查询条件
      tableComponents:
        CacheConfig.cacheData[this.$route.path] &&
        CacheConfig.cacheData[this.$route.path].tableComponents &&
        CacheConfig.cacheData[this.$route.path].tableComponents.length > 0
          ? CacheConfig.cacheData[this.$route.path].tableComponents
          : [
              {
                compKey: "compKey1",
                labelName: this.$t("ve.label.carBrand") /*品牌*/,
                codeField: "carBrandCode",
                component: () => import("@/components/org/carBrand/carBrand"),
                type: "dropdownList",
                isMust: true
              },
              {
                compKey: "compKey2",
                labelName: this.$t("ve.label.orderNumbers") /*订单单号*/,
                codeField: "orderNumbers",
                component: () => import("@/components/org/commonInput"),
                type: "inputText",
                isMust: true
              },
              {
                compKey: "compKey3",
                labelName: this.$t("ve.label.orderTime") /*订单时间*/,
                codeField: "orderTime",
                component: () =>
                  import("@/components/org/datePicker/datePicker"),
                type: "datePicker",
                dateOptionsType: "1",
                isMust: true
              },
              {
                compKey: "compKey4",
                labelName: this.$t("ve.label.receSaleMan") /*接单业代*/,
                codeField: "receSaleMan",
                component: () => import("@/components/org/commonInput"),
                type: "propus",
                isMust: true
              },
              {
                compKey: "compKey5",
                labelName: this.$t("ve.label.salesMan") /*业务代表*/,
                codeField: "salesMan",
                component: () => import("@/components/org/commonInput"),
                isMust: true
              },
              {
                compKey: "compKey6",
                labelName: this.$t("ve.label.clientName") /*客户名称*/,
                codeField: "clientName",
                component: () => import("@/components/org/commonInput"),
                type: "inputText",
                isMust: true
              },
              {
                compKey: "compKey7",
                labelName: this.$t("ve.label.classes") /*客户类别*/,
                codeField: "classes",
                component: () => import("@/components/org/commonInput"),
                type: "inputText",
                isMust: true
              },
              {
                compKey: "compKey8",
                labelName: this.$t("ve.label.amountPerPeriod") /* 每期金额 */,
                codeField: "amountPerPeriod",
                component: () => import("@/components/org/commonInput"),
                isMust: true
              },
              {
                compKey: "compKey9",
                labelName: this.$t("ve.label.mortgageBank") /* 按揭银行 */,
                codeField: "mortgageBank",
                component: () => import("@/components/org/commonInput"),
                isMust: true
              },
              {
                compKey: "compKey10",
                labelName: this.$t("ve.label.mortgageMoney") /* 按揭金额 */,
                codeField: "mortgageMoney",
                component: () => import("@/components/org/commonInput"),
                isMust: true
              },
              {
                compKey: "compKey11",
                labelName: this.$t("ve.label.payMethod") /* 付款方式 */,
                codeField: "payMethod",
                component: () => import("@/components/org/commonInput"),
                isMust: true
              },
              {
                compKey: "compKey12",
                labelName: this.$t("ve.label.type") /* 类型 */,
                codeField: "type",
                component: () => import("@/components/org/commonInput"),
                isMust: true
              },
              {
                compKey: "compKey13",
                labelName: this.$t("ve.label.purpose") /* 用途 */,
                codeField: "purpose",
                component: () => import("@/components/org/commonInput"),
                isMust: true
              },
              {
                compKey: "compKey14",
                labelName: this.$t("ve.label.periods") /* 期数 */,
                codeField: "periods",
                component: () => import("@/components/org/commonInput"),
                isMust: true
              },
              {
                compKey: "compKey15",
                labelName: this.$t("ve.label.total") /* 合计 */,
                codeField: "total",
                component: () => import("@/components/org/commonInput"),
                isMust: true
              }
            ],
      formField: {
        carBrandCn: "",
        orderNumbers: "",
        carSeriseName: "",
        carType: "",
        carConfigName: "",
        carColorId: "",
        carIncolorId: "",
        optional: "",
        salePrice: "",
        hopetrolleyDay: "",
        situation: "",
        placOrderDlr: "",
        trolleyDlr: "",
        trolleyDlr: "",
        salesMan:"",
        clientName: "",
        orderTime: "",
        receSaleMan: "",
        classes: "",
        amountPerPeriod: "",
        mortgageBank: "",
        mortgageMoney: "5000",
        payMethod: "",
        type: "",
        purpose: "",
        periods: "",
        total: ""
      },
      pageTotal: 0,
      tableCols: this.getCols()
    };
  },
  created() {},
  methods: {
    getCols() {
      var cols = [];
      if (
        CacheConfig.cacheData[this.$route.path] &&
        CacheConfig.cacheData[this.$route.path].tableCols.length > 0
      ) {
        cols = cols.concat(CacheConfig.cacheData[this.$route.path].tableCols);
      } else {
        cols = cols.concat([
          {
             prop: "carBrandCn",
            label: this.$t("ve.label.carBrand") /*品牌*/,
            width: 120,
            align: "center"
          },
          {
            prop: "carSeriseName",
            label: this.$t("ve.label.carSeriseName") /*车系*/,
            width: 80,
            align: "center"
          },
          {
            prop: "carType",
            label: this.$t("ve.label.carType") /*车型*/,
            width: 80,
            align: "center"
          },
          {
            prop: "carConfigName",
            label: this.$t("ve.label.carConfigName") /*车型配置*/,
            width: 150,
            align: "center"
          },
          {
            prop: "carColorId",
            label: this.$t("ve.label.carColorId") /*车身颜色*/,
            width: 120,
            align: "center"
          },
          {
            prop: "carIncolorId",
            label: this.$t("ve.label.carIncolorId") /*内饰色*/,
            width: 100,
            align: "center"
          },
          {
            prop: "hopetrolleyDay",
            label: this.$t("ve.label.hopetrolleyDay") /*希望交车日*/,
            align: "center",
            width: 110
          },
          {
            prop: "situation",
            label: this.$t("ve.label.situation") /*状态*/,
            align: "center",
            width: 100
          },
          {
            prop: "placOrderDlr",
            label: this.$t("ve.label.placOrderDlr") /*下单经销商*/,
            align: "center",
            width: 100
          },
          {
            prop: "trolleyDlr",
            label: this.$t("ve.label.trolleyDlr") /*交车经销商*/,
            align: "center",
            width: 100
          }
        ]);
      }
      return cols;
    }
  }
};
</script>

<style lang="scss" scoped>
/deep/.filter-button {
  min-height: 0px;
}
/deep/.filter-params .table-col .el-col {
  margin-bottom: 8px;
}
/deep/.el-dialog__body {
  max-height: 520px;
}
/deep/.filter-params .el-col {
  margin-bottom: 0;
}
/deep/.filter-params {
  margin: 0;
}
</style>

