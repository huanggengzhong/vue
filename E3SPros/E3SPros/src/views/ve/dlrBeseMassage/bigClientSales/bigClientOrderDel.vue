<!--
* description: 大客户订单作废
* author: lixn
* createdDate: 2019-10-11
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
  name: "bigClientOrderDel",
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
          clickEvent: () => this.cancellation(),
          text: this.$t("ve.label.cancellation")
        }, //作废
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
                prop: "trolleyDlr",
                label: this.$t("ve.label.trolleyDlr") /*交车经销商*/,
                width: 120,
                align: "center"
              },

              {
                prop: "clientClass",
                label: this.$t("ve.label.clientClass") /*客户分类*/,
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
                prop: "optional",
                label: this.$t("ve.label.optional") /*选装包*/,
                width: 100,
                align: "center"
              },
              {
                prop: "number",
                label: this.$t("ve.label.number") /*数量*/,
                width: 80,
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
        trolleyDlr: ""
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
