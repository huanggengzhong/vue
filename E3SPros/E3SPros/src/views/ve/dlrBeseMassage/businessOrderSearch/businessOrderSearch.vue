<!--
* description: 大客户订单状态查询
* author: xumh
* createdDate: 2019-10-23
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
      :dynamicIsShowMoreBtn="true"
      :dynamicIsShowSelect="true"
    />
  </div>
</template>
<script>
import { oneTableWithViewTemplateMixins } from "@/components/mixins/oneTableWithViewTemplateMixins";
import { veApis } from "@/api/graphQLApiList/ve";
import OneTableTemplate from "@/components/templates/oneTable";
import { CacheConfig } from "@/cache/configCache/index";
export default {
  name: "businessOrderSearch",
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
      apiConfig: veApis.veBigClientOrderDQueryByPage,
      // 动态组件-按钮
      tableButtons: [
        {
          compKey: "btnKey1",
          type: "primary",
          size: "small",
          clickEvent: () => this.queryTable(1),
          text: this.$t("sys.button.query")
        }, //查询
        {
          compKey: "btnKey2",
          type: "",
          size: "small",
          clickEvent: () => this.reset(),
          text: this.$t("ve.label.reset")
        }, //重置
        {
          compKey: "btnKey3",
          type: "",
          size: "small",
          clickEvent: () => this.exportExcel(),
          text: this.$t("sys.button.export")
        } //导出
      ],
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
                labelName: this.$t("ve.label.clientName") /*客户名称*/,
                codeField: "clientName",
                component: () => import("@/components/org/commonInput"),
                type: "inputText",
                isMust: true
              },
              {
                compKey: "compKey3",
                labelName: this.$t("ve.label.clientOrderNo") /*大客户订单号*/,
                codeField: "clientOrderNo",
                component: () => import("@/components/org/commonInput"),
                type: "inputText",
                isMust: true
              },
              {
                compKey: "compKey4",
                labelName: this.$t("ve.label.PvOrderStatus"),/*pv订单状态*/
                lookuptype: "VE0624",
                codeField: "PvOrderStatus",
                component: () => import("@/components/org/LookupValue"),
                type: "dropdownList",
                isMul: false,
                isMust: true
              },
              {
                compKey: "compKey5",
                labelName: this.$t("ve.label.orderStatus") /*经销商订单状态*/,
                codeField:'orderStatus',
                 lookuptype: "VE0624",
                component: () => import("@/components/org/LookupValue"),
                type: "dropdownList",
                isMust: false
              },
              {
                compKey: "compKey6",
                labelName: this.$t("ve.label.vin"), //VIN码
                codeField: "vin",
                isMul: true,
                component: () => import("@/components/org/commonInput"),
                type: "textInput",
                isMust: false
              },
              {
                compKey: "compKey7",
                labelName: this.$t(
                  "ve.label.DroporderBeginTime"
                ) /*下单开始时间*/,
                codeField: "DroporderBeginTime",
                component: () =>
                  import("@/components/org/datePicker/datePicker"),
                type: "datePicker",
                dateOptionsType: "1",
                isMust: false
              },
              {
                compKey: "compKey8",
                labelName: this.$t(
                  "ve.label.DroporderEndTime"
                ) /*下单结束时间*/,
                codeField: "DroporderEndTime",
                component: () =>
                  import("@/components/org/datePicker/datePicker"),
                type: "datePicker",
                dateOptionsType: "1",
                isMust: false
              },
              {
                compKey: "compKey9",
                labelName: this.$t("ve.label.placOrderDlr") /* 下单经销商 */,
                codeField: "placOrderDlr",
                component: () => import("@/components/org/orgDlr"),
                type: "propus",
                isMust: false
              },
              {
                compKey: "compKey10",
                labelName: this.$t("ve.label.trolleyDlr") /* 交车经销商 */,
                codeField: "trolleyDlr",
                component: () => import("@/components/org/orgDlr"),
                type: "propus",
                isMust: false
              },
              {
                compKey: "compKey11",
                labelName: this.$t(
                  "ve.label.outConfirimDateBegin"
                ) /* 出货确认时间 */,
                codeField: "outConfirimDateBegin",
                component: () =>
                  import("@/components/org/datePicker/datePicker"),
                type: "propus",
                isMust: false
              },
              {
                compKey: "compKey12",
                labelName: this.$t(
                  "ve.label.outConfirimDateEnd"
                ) /* 出货确认时间至*/,
                codeField: "outConfirimDateEnd",
                component: () =>
                  import("@/components/org/datePicker/datePicker"),
                type: "propus",
                isMust: false
              },
              {
                compKey: "compKey13",
                labelName: this.$t("ve.label.carTypeCode") /* 车型*/,
                codeField: "carTypeCode",
                component: () => import("@/components/org/SmallCarType/index"),
                type: "dropdownList",
                isMust: false
              },
              {
                compKey: "compKey14",
                labelName: this.$t("ve.label.carColorName") /* 车身颜色*/,
                codeField: "carColorName",
                component: () =>
                  import("@/components/org/carColor/brandCarColor"),
                type: "propus",
                isMust: false
              },
              {
                compKey: "compKey15",
                labelName: this.$t("ve.label.carIncolor") /* 内饰色*/,
                codeField: "carIncolor",
                component: () =>
                  import("@/components/org/TrimPopupColor/interiorSelect"),
                type: "propus",
                isMust: false
              },
              {
                compKey: "compKey16",
                labelName: this.$t("ve.label.carGivenNum") /* 车辆分配号*/,
                codeField: "carGivenNum",
                component: () => import("@/components/org/commonInput"),
                type: "inputText",
                isMust: false
              },
              {
                compKey: "compKey17",
                labelName: this.$t("ve.label.salesMan") /* 业务代表*/,
                codeField: "salesMan",
                component: () => import("@/components/org/commonInput"),
                type: "propus",
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
                label: this.$t("ve.label.carBrand") /*品牌*/,
                width: 120,
                align: "center"
              },
              {
                prop: "orderNumbers",
                label: this.$t("ve.label.orderNumbers") /*订单单号*/,
                width: 150,
                align: "center"
              },
              {
                prop: "clientName",
                label: this.$t("ve.label.clientName") /*客户名称*/,
                width: 100,
                align: "center"
              },
              {
                prop: "useCarName",
                label: this.$t("ve.label.useCarName") /*用车人名称*/,
                width: 100,
                align: "center"
              },
              {
                prop: "orderTime",
                label: this.$t("ve.label.orderTime") /*订单时间*/,
                width: 150,
                align: "center"
              },
              {
                prop: "salesMan",
                label: this.$t("ve.label.salesMan") /*业务代表*/,
                width: 120,
                align: "center"
              },
              {
                prop: "placOrderDlr",
                label: this.$t("ve.label.placOrderDlr") /*下单经销商*/,
                width: 120,
                align: "center"
              },
              {
                prop: "policyType",
                label: this.$t("ve.label.policyType") /*政策类型*/,
                width: 100,
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
                prop: "marketPrice",
                label: this.$t("ve.label.marketPrice") /*市场指导价MSRP*/,
                width: 120,
                align: "center"
              },
              {
                prop: "sellingPrices",
                label: this.$t("ve.label.sellingPrices") /*经销价*/,
                width: 100,
                align: "center"
              },
              {
                prop: "StateSubsidies",
                label: this.$t("ve.label.StateSubsidies") /*国补*/,
                width: 100,
                align: "center"
              },
              {
                prop: "LocalSubsidy",
                label: this.$t("ve.label.LocalSubsidy") /*地补*/,
                width: 100,
                align: "center"
              },
              {
                prop: "OthersSubsidy",
                label: this.$t("ve.label.OthersSubsidy") /*其他调减*/,
                width: 100,
                align: "center"
              },
              {
                prop: "ColorInAddPrices",
                label: this.$t("ve.label.ColorInAddPrices") /*颜色内饰加价*/,
                width: 120,
                align: "center"
              },
              {
                prop: "ActualPrice",
                label: this.$t("ve.label.ActualPrice") /*实际扣款价*/,
                width: 100,
                align: "center"
              },
              {
                prop: "orderStatus",
                label: this.$t("ve.label.orderStatus") /*订单状态*/,
                width: 100,
                align: "center"
              },
              {
                prop: "vin",
                label: this.$t("ve.label.vin") /*VIN码*/,
                width: 100,
                align: "center"
              },
              {
                prop: "assignCode",
                label: this.$t("ve.label.assignCode") /*分配号*/,
                width: 100,
                align: "center"
              },
              {
                prop: "carWarseHouse",
                label: this.$t("ve.label.carWarseHouse") /*发车仓库*/,
                width: 100,
                align: "center"
              },
              {
                prop: "LatestIncomingForecast",
                label: this.$t(
                  "ve.label.LatestIncomingForecast"
                ) /*最新受入预定预期*/,
                width: 140,
                align: "center"
              },
              {
                prop: "OfflineStockDate",
                label: this.$t("ve.label.OfflineStockDate") /*下线入库日期*/,
                width: 120,
                align: "center"
              },
              {
                prop: "outconfirimdate",
                label: this.$t("ve.label.outconfirimdate") /*出货确认时间*/,
                width: 120,
                align: "center"
              },
              {
                prop: "ScheduledDeliveryDate",
                label: this.$t("ve.label.ScheduledDeliveryDate") /*交车完成预定日*/,
                width: 120,
                align: "center"
              },
              {
                prop: "PreDeliveryDate",
                label: this.$t("ve.label.PreDeliveryDate") /*提前预交车时间*/,
                width: 120,
                align: "center"
              },
              {
                prop: "PreDeliveryOperator",
                label: this.$t("ve.label.PreDeliveryOperator") /*提前预交车操作人*/,
                width: 130,
                align: "center"
              },

              {
                prop: "trolleyDlr",
                label: this.$t("ve.label.trolleyDlr") /*交车经销商*/,
                width: 120,
                align: "center"
              }
            ],
      formField: {
        carBrandCode: "",
        clientName: "",
        clientOrderNo: "",
        salesMan: "",
        DroporderBeginTime: "",
        DroporderEndTime: "",
        carConfig: "",
        trolleyDlr: "",
        carIncolor:'',
        PvOrderStatus:'',
        orderStatus:'',
        vin:'',
        placOrderDlr:'',
        outConfirimDateBegin:'',
        outConfirimDateEnd:'',
        carTypeCode:'',
        carGivenNum:'',
        carColorName:'',
        assignCode:''
      }
    };
  },
  methods: {
    cancellation() {
      const that = this.$refs.multipleTable;
      let saveState = true;
      let saveCount = 0;
      let msg = "";
      const selectData = that.$refs.multipleTable.selection;
      if (selectData.length < 1) {
        that.$message({
          message: "请选择需要作废的订单",
          type: "warning",
          duration: 2000
        });
        return;
      }
      for (var k in selectData) {
        const queryObj = {
          // 保存mutation
          type: "mutation",
          // api配置
          apiConfig: veApis.veDelorder,
          variables: {
            // 当前中台使用的名称有dataInfo、info，具体查看API文档
            dataInfo: {
              carBrandCode: "",
              orderparentID: "",
              orderChildrenID: "",
              saleOrderParentID: "",
              saleOrderChildrenID: "",
              clientOrderPid: "",
              clientOrderCid: "",
              saleOrderParentIDBF: "",
              saleOrderChildrenIDBf: ""
            }
          }
        };
        // 转换了中台请求格式数据
        var paramD = this.$getParams(queryObj);
        // 调用中台API方法（可复用）
        this.$requestGraphQL(paramD).then(response => {
          if (response.data.vecldbsqOutConfirm.result === "1") {
            // 保存成功
            this.$message({
              message: "作废成功",
              type: "success",
              uration: 2000
            });
          } else {
            // 保存失败
            // this.sendCode('0')
            this.$message({
              message: "作废失败" + "请选择需要作废的订单",
              type: "warn",
              uration: 2000
            });
          }
          this.queryTable(1);
        });
      }
    }

  }
};
</script>
