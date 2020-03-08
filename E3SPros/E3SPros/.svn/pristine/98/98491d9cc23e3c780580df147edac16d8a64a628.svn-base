<!--
* description: 大客户订单业务确认
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
    <edit
      :dynamicEditRowData="editRowData"
      :popupsVisible="editPopupsVisible"
      :key="editPopupsKey"
      :popupsState="editPopupsState"
      @close="close"
    ></edit>
  </div>
</template>
<script>
import { oneTableWithViewTemplateMixins } from "@/components/mixins/oneTableWithViewTemplateMixins";
import { veApis } from "@/api/graphQLApiList/ve";
import OneTableTemplate from "@/components/templates/oneTable";
import { CacheConfig } from "@/cache/configCache/index";
import edit from "./edit";

export default {
  name: "businessConfirmation",
  // 组件混入对象：{data[listQuery] methods[queryTable]}
  mixins: [oneTableWithViewTemplateMixins],
  components: {
    OneTableTemplate,
    edit
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
      apiConfig: veApis.veBusinessConfirmation,
      editPopupsVisible: false,
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
          clickEvent: () => this.confirm(),
          text: this.$t("sys.button.confirm")
        }, //确认
        {
          compKey: "btnKey4",
          type: "",
          size: "small",
          clickEvent: () => this.reject(),
          text: this.$t("sys.button.reject")
        }, //驳回
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
                compKey: "compKey8",
                labelName: this.$t("ve.label.trolleyDlr") /* 交车经销商 */,
                codeField: "trolleyDlr",
                component: () => import("@/components/org/orgDlr"),
                type: "propus",
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
                compKey: "compKey5",
                labelName: this.$t("ve.label.affirmDateBegin") /*订单开始时间*/,
                codeField: "affirmDateBegin",
                component: () =>
                  import("@/components/org/datePicker/datePicker"),
                type: "datePicker",
                dateOptionsType: "1",
                isMust: false
              },
              {
                compKey: "compKey6",
                labelName: this.$t("ve.label.affirmDateEnd") /*订单结束时间*/,
                codeField: "affirmDateEnd",
                component: () =>
                  import("@/components/org/datePicker/datePicker"),
                type: "datePicker",
                dateOptionsType: "1",
                isMust: false
              }
            ],
      // 动态生成网格列
      tableCols: this.getCols(),
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
    getCols() {
      var cols = [
        {
          prop: "controlBtn",
          label: this.$t("org.label.operation"), //"操作",
          /*查看明细*/ codeField: "controlBtn",
          width: 60,
          align: "center",
          isComponent: true,
          comps: [
            {
              compKey: "propKey1",
              labelName: this.$t("sys.button.detail"),
              /*明细*/ codeField: "detail",
              clickEvent: this.showEdits,
              component: () => import("@/components/org/linkButton"),
              align: "center"
            }
          ]
        }
      ];
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
            prop: "orderNumbers",
            label: this.$t("ve.label.orderNumbers") /*订单单号*/,
            width: 150,
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
            prop: "salePrice",
            label: this.$t("ve.label.salePrice") /*实际销售价*/,
            width: null,
            align: "center"
          },
          {
            prop: "hopetrolleyDay",
            label: this.$t("ve.label.hopetrolleyDay") /*希望交车日*/,
            align: "center",
            hidden: true
          },
          {
            prop: "situation",
            label: this.$t("ve.label.situation") /*状态*/,
            align: "center",
            hidden: true
          },
          {
            prop: "placOrderDlr",
            label: this.$t("ve.label.placOrderDlr") /*下单经销商*/,
            align: "center",
            hidden: true
          },
          {
            prop: "trolleyDlr",
            label: this.$t("ve.label.trolleyDlr") /*交车经销商*/,
            align: "center",
            hidden: true
          },
          {
            prop: "clientName",
            label: this.$t("ve.label.clientName") /*客户名称*/,
            align: "center",
            hidden: true
          },
          {
            prop: "orderTime",
            label: this.$t("ve.label.orderTime") /*订单时间*/,
            align: "center",
            hidden: true
          },

          //
          {
            prop: "salesMan",
            label: this.$t("ve.label.salesMan") /*接单业代*/,
            align: "center",
            hidden: true
          },
          {
            prop: "receSaleMan",
            label: this.$t("ve.label.receSaleMan") /*接单业代*/,
            align: "center",
            hidden: true
          },
          {
            prop: "classes",
            label: this.$t("ve.label.classes") /*客户类别*/,
            align: "center",
            hidden: true
          },
          {
            prop: "amountPerPeriod",
            label: this.$t("ve.label.amountPerPeriod") /*每期金额*/,
            align: "center",
            hidden: true
          },
          {
            prop: "mortgageBank",
            label: this.$t("ve.label.mortgageBank") /*按揭银行*/,
            align: "center",
            hidden: true
          },
          {
            prop: "mortgageMoney",
            label: this.$t("ve.label.mortgageMoney") /*按揭金额*/,
            align: "center",
            hidden: true
          },
          {
            prop: "payMethod",
            label: this.$t("ve.label.payMethod") /*付款方式*/,
            align: "center",
            hidden: true
          },
          {
            prop: "type",
            label: this.$t("ve.label.type") /*类型*/,
            align: "center",
            hidden: true
          },
          {
            prop: "purpose",
            label: this.$t("ve.label.purpose") /*用途*/,
            align: "center",
            hidden: true
          },
          {
            prop: "periods",
            label: this.$t("ve.label.periods") /*期数*/,
            align: "center",
            hidden: true
          },
          {
            prop: "total",
            label: this.$t("ve.label.total") /*合计*/,
            align: "center",
            hidden: true
          }
        ]);
      }
      return cols;
    },
    // 确认
    confirm() {
      const that = this.$refs.multipleTable;
      let saveState = true;
      let saveCount = 0;
      let msg = "";
      const selectData = that.$refs.multipleTable.selection;
      if (selectData.length < 1) {
        that.$message({
          message: "请选择需要操作的订单",
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
          apiConfig: veApis.veConfirmOrder,
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
          console.log(response);
          if (response.data.veConfirmOrder.result === "1") {
            // 保存成功
            this.$message({
              message: "确认成功",
              type: "success",
              uration: 2000
            });
          } else {
            // 保存失败
            // this.sendCode('0')
            this.$message({
              message: "确认失败",
              type: "warn",
              uration: 2000
            });
          }
          this.queryTable(1);
        });
      }
    },
    // 驳回
    reject() {
      const that = this.$refs.multipleTable;
      let saveState = true;
      let saveCount = 0;
      let msg = "";
      const selectData = that.$refs.multipleTable.selection;
      if (selectData.length < 1) {
        that.$message({
          message: "请选择需要操作的订单",
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
          apiConfig: veApis.veConfirmOrder,
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
          if (response.data.veConfirmOrder.result === "1") {
            // 保存成功
            this.$message({
              message: "驳回成功",
              type: "success",
              uration: 2000
            });
          } else {
            // 保存失败
            this.$message({
              message: "驳回失败",
              type: "warn",
              uration: 2000
            });
          }
          this.queryTable(1);
        });
      }
    },
    showEdits(row) {
      const that = this.$refs.multipleTable;
      console.log(that.list[row]);
      this.edit(row);
    }
  }
};
</script>
