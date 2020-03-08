<!--
* 采购单审核
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
  name: "vePurOrderQry",
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
          compKey: "btnKey2",
          type: "",
          size: "small",
          clickEvent: () => this.synchrony(),
          text: this.$t("sys.button.sync")
        },
        {
          compKey: "btnKey3",
          type: "",
          size: "small",
          clickEvent: () => this.Confirm(),
          text: this.$t("sys.button.check")
        },
        {
          compKey: "btnKey4",
          type: "",
          size: "small",
          clickEvent: () => this.reset(),
          text: this.$t("sys.button.reset")
        },
        {
          compKey: "btnKey5",
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
              // 采购单类型下拉框组件
              {
                compKey: "compKey3",
                labelName: this.$t("ve.label.purchaseOrderType") /*采购单类型*/,
                codeField: "purchaseOrderTypeId",
                component: () =>
                  import("@/components/ve/PurchaseOrderType/index"),
                type: "dropdownList",
                isMust: true
              },
              {
                compKey: "compKey4",
                labelName: this.$t("org.label.dlrName") /*经销商弹框组件*/,
                codeField: "dlrId",
                component: () => import("@/components/org/orgDlr"),
                type: "propus",
                isMust: true
              },
              {
                compKey: "compKey5",
                labelName: this.$t("org.label.carType") /*车型*/,
                codeField: "carConfigId",
                component: () => import("@/components/org/carTypeConfig"),
                type: "propus",
                isMust: false
              },
              {
                compKey: "compKey6",
                labelName: this.$t("org.label.carColor") /*车身颜色*/,
                codeField: "carColorId",
                component: () => import("@/components/org/carColor"),
                type: "propus",
                isMust: false
              },
              {
                compKey: "compKey7",
                labelName: this.$t("org.label.carIncolor") /*内饰色*/,
                codeField: "carIncolorId",
                component: () => import("@/components/org/TrimPopupColor"),
                type: "propus",
                isMust: false
              },
              {
                codeField: "confirDateBegin",
                compKey: "compKey8",
                labelName: this.$t("ve.label.confirDateBegin") /*确认开始日期*/,
                component: () =>
                  import("@/components/org/datePicker/datePicker"),
                type: "datePicker",
                dateOptionsType: "0",
                isMust: false
              },
              {
                compKey: "compKey9",
                labelName: this.$t("ve.label.confirDateEnd") /*确认结束日期*/,
                codeField: "confirDateEnd",
                component: () =>
                  import("@/components/org/datePicker/datePicker"),
                type: "datePicker",
                dateOptionsType: "0",
                isMust: false
              },
              {
                compKey: "compKey10",
                labelName: this.$t("org.label.capitalType") /*资金类型*/,
                codeField: "cashTypeId",
                component: () => import("@/components/ve/PurcashType/index"),
                type: "dropdownList",
                isMust: false
              },
              {
                compKey: "compKey11",
                labelName: this.$t("org.label.tranportName") /*送货方式*/,
                lookuptype: "VE0079",
                codeField: "transportTypeCode",
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
                align: "center",
                isComponent: true,
                comps: [
                  {
                    compKey: "propKey1",
                    isShowLabel: false,
                    codeField: "dlrId",
                    clickEvent: () => null,
                    component: () => import("@/components/org/orgDlr")
                  }
                ]
              },
              {
                prop: "purOrderCode",
                label: this.$t("ve.label.purOrderCode") /*采购单号*/,
                width: 170,
                align: "center"
              },
              {
                prop: "purStatus",
                label: this.$t("ve.label.purStatus") /*采购单状态*/,
                width: 120,
                align: "center"
              },
              {
                prop: "purchaseOrderTypeName",
                label: this.$t("ve.label.purchaseOrderType") /*经销商*/,
                width: 120,
                align: "center"
              },
              {
                prop: "confirDate",
                label: this.$t("ve.label.confirDate"),/*确认时间*/
                width: 120,
                align: "center"
              },
              {
                prop: "cashtypeid",
                label: this.$t("org.label.capitalType"),/*资金类型*/
                width: 120,
                align: "center"
              },
              {
                prop: "purQty",
                label: this.$t("org.label.purQty"),/*采购数量*/
                width: 120,
                align: "center"
              },
              {
                prop: "configCode",
                label: this.$t("org.label.carTypeCode1"),/*车型简码*/
                width: null,
                align: "center"
              },
              {
                prop: "carConfigName",
                label: this.$t("org.label.carConfig"),/*车型配置*/
                width: 150,
                align: "center"
              },
              {
                prop: "carColorName",
                label: this.$t("org.label.carColor"),/*车身颜色*/
                width: 120,
                align: "center"
              },
              {
                prop: "carIncolorName",
                label: this.$t("org.label.carIncolor"),/*内饰色*/
                width: 120,
                align: "center"
              },
              {
                prop: "carColorPrice",
                label: this.$t("org.label.colorPrice"),/*颜色价格*/
                width: null,
                align: "center"
              },
              {
                prop: "carIncolorPrice",
                label: this.$t("org.label.inColorPrice"),/*内饰价格*/
                width: null,
                align: "center"
              },
              {
                prop: "countrySubsidy",
                label: this.$t("org.label.countrySubsidy"),/*补贴价*/
                width: null,
                align: "center"
              },
              {
                prop: "carPrice",
                label: this.$t("org.label.proPrice"),/*产品价格*/
                width: null,
                align: "center"
              },
              {
                prop: "carProductPrice",
                label: this.$t("org.label.purchasePrcie"),/*采购价格*/
                width: null,
                align: "center"
              },
              {
                prop: "carSeriseName",
                label: this.$t("org.label.carSerise"),/*车系*/
                width: 120,
                align: "center"
              },
              {
                prop: "carConfigCode",
                label: this.$t("org.label.carType"),/*车型*/
                width: 150,
                align: "center"
              },
              {
                prop: "sendShName",
                label: this.$t("ve.label.sendShName"),/*发车仓库*/
                width: 120,
                align: "center"
              },
              {
                prop: "deliverModeName",
                label: this.$t("org.label.tranportName"),/*送货方式*/
                width: null,
                align: "center"
              },
              {
                prop: "receiveShId",
                label: this.$t("ve.label.receiveShId"),/*搬入地*/
                width: 150,
                align: "center"
              },
              {
                prop: "creator",
                label: this.$t("org.label.creator"),/*下单人*/
                width: null,
                align: "center"
              },
              {
                prop: "PurPrice",
                label: this.$t("org.label.purTotalPrcie"),/*采购总金额*/
                width: 120,
                align: "center"
              },
              {
                prop: "purOrderId",
                label: "采购主单ID",
                width: 120,
                align: "center",
                hidden: true
              },
              {
                prop: "controlUpdatedId",
                label: "并发字段",
                width: 120,
                align: "center",
                hidden: true
              }
            ],
      //表单查询数据（查询条件）
      formField: {
        carBrandCode: "",
        purOrderCode: "",
        purchaseOrderTypeId: "",
        carConfigId: "",
        carColorId: "",
        carInColorId: "",
        confirDateBegin: "",
        confirDateEnd: "",
        cashTypeId: "",
        transportTypeCode: ""
      }
    };
  },
  methods: {
    Confirm() {
      const that = this.$refs.multipleTable;
      let saveState = true;
      let saveCount = 0;
      let msg = "";

      let selectData = that.$refs.multipleTable.selection;
      if (selectData.length < 1) {
        that.$message({
          message: "请选择需要审核的采购单",
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
          apiConfig: veApis.vePurOrderConfirm,
          variables: {
            //当前中台使用的名称有dataInfo、info，具体查看API文档
            dataInfo: {
              carBrandCode: selectData[k].carBrandCode,
              purOrderId: selectData[k].purOrderId,
              controlUpdatedId: selectData[k].controlUpdatedId
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
              message: "审核成功",
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
<style scoped>
.ellipsisshowName {
  position: fixed;
  background: #c0c4cc7a;
  padding: 5px;
  border-radius: 5px;
  z-index: 3000;
}
</style>
