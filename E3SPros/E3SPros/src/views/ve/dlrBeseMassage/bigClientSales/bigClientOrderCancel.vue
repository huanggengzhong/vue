<!--
* description: 大客户订单取消
* author: xulfan
* createdDate: 2019-10-22
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
  name: "bigClientOrderCancel",
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
          clickEvent: () => this.cancel(),
          text: this.$t("sys.button.cancel")
        }, //取消
        {
          compKey: "btnKey3",
          type: "",
          size: "small",
          clickEvent: () => this.reset(),
          text: this.$t("sys.button.reset")
        } //重置
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
                labelName: this.$t("ve.label.salesMan") /*业务代表*/,
                codeField: "salesMan",
                component: () => import("@/components/org/carTypeConfig"),
                type: "propus",
                isMust: true
              },
              {
                compKey: "compKey5",
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
                compKey: "compKey6",
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
                compKey: "compKey7",
                labelName: this.$t("ve.label.carConfig"),
                codeField: "carConfig",
                component: () => import("@/components/org/carTypeConfig"),
                type: "propus",
                isMust: false
              } /* 车型配置 */,
              {
                compKey: "compKey8",
                labelName: this.$t("ve.label.trolleyDlr") /* 交车经销商 */,
                codeField: "trolleyDlr",
                component: () => import("@/components/org/orgDlr"),
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
                prop: "carBrandCode",
                label: this.$t("ve.label.carBrand") /*品牌编码*/,
                width: 120,
                align: "center",
                hidden: true
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
                prop: "orderTime",
                label: this.$t("ve.label.orderTime") /*订单时间*/,
                width: 150,
                align: "center"
              },
              {
                prop: "salesMan",
                label: this.$t("ve.label.salesMan") /*业务代表*/,
                width: 150,
                align: "center"
              },
              {
                prop: "trolleyDlr",
                label: this.$t("ve.label.trolleyDlr") /*交车经销商*/,
                width: 120,
                align: "center"
              },
              {
                prop: "ExDeliveryDay",
                label: "希望交车日" /*希望交车日*/,
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
                prop: "optional",
                label: this.$t("ve.label.optional") /*选装包*/,
                width: 100,
                align: "center"
              },
              {
                prop: "OrderStatus",
                label: "订单状态" /*订单状态*/,
                width: 120,
                align: "center"
              },
              {
                prop: "updateControlId",
                label: "并发控制Id" /*并发控制Id*/,
                width: 120,
                align: "center",
                hidden: true
              },
              {
                prop: "orderparentID",
                label: "大客户订单主单ID" /*大客户订单主单ID*/,
                width: 120,
                align: "center",
                hidden: true
              },
              {
                prop: "orderChildrenID",
                label: "大客户订单子单ID" /*大客户订单子单ID*/,
                width: 120,
                align: "center",
                hidden: true
              },
              {
                prop: "saleOrderParentID",
                label: "销售单主单ID" /*销售单主单ID*/,
                width: 120,
                align: "center",
                hidden: true
              },
              {
                prop: "saleOrderChildrenID",
                label: "销售单子单ID" /*销售单子单ID*/,
                width: 120,
                align: "center",
                hidden: true
              },
              {
                prop: "clientOrderPid",
                label: "大客户订单主单并发控制ID" /*大客户订单主单并发控制ID*/,
                width: 120,
                align: "center",
                hidden: true
              },
              {
                prop: "clientOrderCid",
                label: "大客户订单子单并发控制ID" /*大客户订单子单并发控制ID*/,
                width: 120,
                align: "center",
                hidden: true
              },
              {
                prop: "saleOrderParentIDBF",
                label: "销售单主单并发控制ID" /*销售单主单并发控制ID*/,
                width: 120,
                align: "center",
                hidden: true
              },
              {
                prop: "saleOrderChildrenIDBf",
                label: "销售单子单并发控制ID" /*销售单子单并发控制ID*/,
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
        trolleyDlr: ""
      }
    };
  },
  methods: {
    cancel() {
      const that = this.$refs.multipleTable;
      let saveState = true;
      let saveCount = 0;
      let msg = "";

      let selectData = that.$refs.multipleTable.selection;
      if (selectData.length < 1) {
        that.$message({
          message: "请选择需要取消的订单",
          type: "warning",
          duration: 2000
        });
        return;
      }
      for (var k in selectData) {
        let queryObj = {
          // 保存mutation
          type: "mutation",
          // api配置
          apiConfig: veApis.veOrderCancel,
          variables: {
            //当前中台使用的名称有dataInfo、info，具体查看API文档
            dataInfo: {
              carBrandCode: selectData[k].carBrandCode,
              orderparentID: selectData[k].orderparentID,
              orderChildrenID: selectData[k].orderChildrenID,
              saleOrderParentID: selectData[k].saleOrderParentID,
              saleOrderChildrenID: selectData[k].saleOrderChildrenID,
              clientOrderPid: selectData[k].clientOrderPid,
              clientOrderCid: selectData[k].clientOrderCid,
              saleOrderParentIDBF: selectData[k].saleOrderParentIDBF,
              saleOrderChildrenIDBf: selectData[k].saleOrderChildrenIDBf,
              updateControlId: selectData[k].updateControlId
            }
          }
        };
        //转换了中台请求格式数据
        var paramD = that.$getParams(queryObj);
        // 调用中台API方法（可复用）
        that.$requestGraphQL(paramD).then(response => {
          if (response.data[queryObj.apiConfig.ServiceCode].result === "1") {
            saveCount++;
          } else {
            saveState = false;
            msg = response.data[queryObj.apiConfig.ServiceCode].msg;
            that.$message({
              message: msg,
              type: "warning",
              duration: 2000
            });
          }
          if (saveCount == selectData.length) {
            that.$message({
              message: "取消成功",
              type: "success",
              duration: 2000
            });
            that.queryTable(1);
          }
        });
      }
    }
  }
};
</script>