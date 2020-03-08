<!--
* description: 自动出货确认优先标志设置
* author: linwm
* createdDate: 2019-08-06
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
  name: "carTypeAssign",
  // 组件混入对象：{data[listQuery] methods[queryTable]}
  mixins: [oneTableWithViewTemplateMixins],
  components: {
    OneTableTemplate
  },
  beforeRouteEnter(to, from, next) {
    CacheConfig.initData(to.path, function() {
      next();
    });
  },
  data() {
    return {
      // 网格查询API配置对象
      apiConfig: veApis.veBuPurOrderDQueryFindAll,
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
          clickEvent: () => this.add(),
          text: this.$t("sys.button.save") //保存
        },
        {
          compKey: "btnKey3",
          type: "",
          size: "small",
          clickEvent: () => this.reset(),
          text: this.$t("sys.button.reset") //重置
        },
        {
          compKey: "btnKey5",
          type: "",
          size: "small",
          clickEvent: () => this.exportExcel(),
          text: this.$t("sys.button.export") //"导出"
        }
      ],
      // 动态组件-查询条件
      tableComponents:
        CacheConfig.cacheData[this.$route.path] &&
        CacheConfig.cacheData[this.$route.path].tableComponents.length > 0
          ? CacheConfig.cacheData[this.$route.path].tableComponents
          : [
              // 显示组件
              {
                compKey: "compKey1",
                labelName: this.$t("org.label.carBrand") /**品牌*/,
                codeField: "carBrandCode",
                component: () => import("@/components/org/carBrand/carBrand"),
                type: "dropdownList",
                isMust: true
              },
              {
                compKey: "compKey2",
                labelName: this.$t("org.label.dlr") /**经销商简称*/,
                codeField: "dlrId",
                component: () => import("@/components/org/orgDlr"),
                type: "propus",
                isMust: true
              },
              {
                compKey: "compKey3",
                labelName: this.$t("ve.label.purchaseOrder") /**采购单号 */,
                codeField: "purOrderCode",
                component: () => import("@/components/org/commonInput"),
                type: "inputText",
                isMust: true
              },
              {
                compKey: "compKey4",
                labelName: this.$t("org.label.vin") /** 'VIN码'*/,
                codeField: "vin",
                component: () => import("@/components/org/commonInput"),
                type: "inputText",
                isMust: true
              },
              {
                compKey: "compKey5",
                labelName: this.$t(
                  "ve.label.priorityDeduction"
                ) /**"优先扣款" */,
                codeField: "caroutPriFlag",
                component: () => import("@/components/org/isEnable/isEnable"),
                type: "dropdownList",
                isMust: false
              },
              {
                compKey: "compKey6",
                labelName: this.$t("org.label.carConfig") /** '车型配置' */,
                codeField: "carConfigId",
                component: () => import("@/components/org/carTypeConfig"),
                type: "propus",
                isMust: false
              },
              {
                compKey: "compKey7",
                labelName: this.$t("org.label.carColor") /** '车身颜色' */,
                codeField: "carColorId",
                component: () => import("@/components/org/carColor"),
                type: "propus",
                isMust: false
              },
              {
                compKey: "compKey8",
                labelName: this.$t("org.label.carIncolor") /** '内饰色' */,
                codeField: "carIncolorId",
                component: () => import("@/components/org/TrimPopupColor"),
                type: "propus",
                isMust: false
              },
              {
                compKey: "compKey9",
                labelName: this.$t(
                  "ve.label.orderDateBegin"
                ) /** '下单日期始' */,
                dateType: "datetime",
                format: "yyyy-MM-dd HH:mm:ss",
                codeField: "purBDate",
                component: () =>
                  import("@/components/org/datePicker/datePicker"),
                type: "datePicker",
                dateOptionsType: "0",
                isMust: false
              },

              {
                compKey: "compKey10",
                labelName: this.$t("ve.label.orderDateEnd") /** '下单日期止' */,
                codeField: "purEDate",
                dateType: "datetime",
                format: "yyyy-MM-dd HH:mm:ss",
                component: () =>
                  import("@/components/org/datePicker/datePicker"),
                type: "datePicker",
                dateOptionsType: "0",
                isMust: false
              },

              {
                compKey: "compKey11",
                labelName: this.$t(
                  "ve.label.assignBeginDate"
                ) /** '分配日期始' */,
                codeField: "assignBeginDate",
                dateType: "datetime",
                format: "yyyy-MM-dd HH:mm:ss",
                component: () =>
                  import("@/components/org/datePicker/datePicker"),
                type: "datePicker",
                dateOptionsType: "0",
                isMust: false
              },

              {
                compKey: "compKey12",
                labelName: this.$t(
                  "ve.label.assignEndDate"
                ) /** '分配日期止' */,
                codeField: "assignEndDate",
                dateType: "datetime",
                format: "yyyy-MM-dd HH:mm:ss",
                component: () =>
                  import("@/components/org/datePicker/datePicker"),
                type: "datePicker",
                dateOptionsType: "0",
                isMust: false
              },
              {
                compKey: "compKey13",
                labelName: this.$t("ve.label.stockType") /** "库存类型" */,
                lookuptype: "VE0005",
                codeField: "carAssignType",
                component: () => import("@/components/org/LookupValue"),
                type: "dropdownList",
                isMust: false
              },
              {
                compKey: "compKey14",
                labelName: this.$t(
                  "ve.label.purchaseOrderType"
                ) /** "采购单类型" */,
                parentFileds: "carBrandCode-carBrandCode",
                codeField: "purchaseOrderTypeId",
                component: () => import("@/components/ve/PurchaseOrderType"),
                type: "dropdownList",
                isMust: false
              },
              {
                compKey: "compKey15",
                labelName: this.$t("ve.label.capitalType") /** "资金类型" */,
                codeField: "cashTypeId",
                component: () => import("@/components/ve/PurcashType"),
                type: "dropdownList",
                isMust: false
              }
            ],
      // 动态生成网格列
      tableCols:
        CacheConfig.cacheData[this.$route.path] &&
        CacheConfig.cacheData[this.$route.path].tableCols.length > 0
          ? CacheConfig.cacheData[this.$route.path].tableCols
          : [
              {
                prop: "caroutPriFlag",
                label: this.$t("ve.label.priorityDeduction") + "+",
                width: 150,
                align: "center",
                isComponent: true,
                comps: [
                  {
                    compKey: "propKey1",
                    isMul: false,
                    isShowLabel: false,
                    codeField: "caroutPriFlag",
                    clickEvent: () => null,
                    component: () =>
                      import("@/components/org/isEnable/isEnable")
                  }
                ]
              },
              {
                prop: "canOutConfirmDate",
                label:
                  this.$t("ve.label.allowableDeliveryConfirmationTime") + "+",
                width: 200,
                align: "center",
                isComponent: true,
                comps: [
                  {
                    compKey: "propKey2",
                    isMul: false,
                    isShowLabel: false,
                    dateType: "datetime",
                    format: "yyyy-MM-dd HH:mm:ss",
                    codeField: "canOutConfirmDate",
                    clickEvent: () => null,
                    component: () =>
                      import("@/components/org/datePicker/datePicker")
                  }
                ]
              },
              {
                prop: "purOrderId",
                label: "采购单id",
                hidden: true,
                align: "center"
              },
              {
                prop: "purOrderDCode",
                label: "采购单子单",
                hidden: true,
                align: "center"
              },
              {
                prop: "purOrderDId",
                label: "采购单子单Id",
                align: "center",
                hidden: true
              },
              {
                prop: "carBrandCode",
                label: "品牌编码",
                hidden: true,
                align: "center"
              },
              {
                prop: "carBrandCn",
                label: this.$t("org.label.carBrandCn") /**品牌名称*/,
                width: 150,
                align: "center"
              },
              {
                prop: "dlrShortName",
                label: this.$t("ve.label.dlr") /**"经销商"*/,
                width: 150,
                align: "center"
              },
              {
                prop: "purcashTypeName",
                label: this.$t("ve.label.capitalType") /*"资金类型"*/,
                width: 100,
                align: "center"
              },
              {
                prop: "carSeriesCode",
                label: this.$t("ve.label.carSeries") /**"车系编码"*/,
                width: 100,
                align: "center"
              },
              {
                prop: "carTypeCode",
                label: this.$t("org.label.carType") /** "车型编码" */,
                width: 170,
                align: "center"
              },
              {
                prop: "carConfigCode",
                label: this.$t("org.label.carConfig") /** "车型配置" */,
                width: 170,
                align: "center"
              },
              {
                prop: "carColor",
                label: this.$t("org.label.carColor") /** '车身颜色' */,
                width: 150,
                align: "center"
              },
              {
                prop: "carIncolor",
                label: this.$t("org.label.carIncolor") /** '内饰色' */,
                width: 150,
                align: "center"
              },
              {
                prop: "vin",
                label: this.$t("org.label.vin") /** 'VIN码'*/,
                width: 180,
                align: "center"
              },
              {
                prop: "carProductPrice",
                label: this.$t("ve.label.carProductPrice") /**"车型产品价格"*/,
                width: 100,
                align: "center"
              },
              {
                prop: "orderTypeName",
                label: this.$t("ve.label.purOrderTypeName") /**"采购单类型"*/,
                width: 100,
                align: "center"
              },
              {
                prop: "purOrderCode",
                label: this.$t("ve.label.purOrderCode") /**"采购单单号"*/,
                width: 200,
                align: "center"
              },
              {
                prop: "assignDate",
                label: this.$t("ve.label.assignDate") /**"分配时间"*/,
                width: 150,
                align: "center"
              },
              {
                prop: "confirDate",
                label: this.$t("ve.label.confirDate") /**"确认时间"*/,
                width: 150,
                align: "center"
              },
              {
                prop: "purDate",
                label: this.$t("ve.label.orderDate") /**"下单时间"*/,
                width: 150,
                align: "center"
              },
              {
                prop: "purStatus",
                label: this.$t("ve.label.purStatus") /**"采购单状态"*/,
                width: 150,
                align: "center"
              },
              {
                prop: "purQty",
                label: this.$t("ve.label.purQty") /**"采购数量"*/,
                width: 100,
                align: "center"
              },
              {
                prop: "deliverModeCn",
                label: this.$t("ve.label.deliveryWay") /**"运货方式"*/,
                width: 150,
                align: "center"
              },
              {
                prop: "outConfirimDate",
                label: "出货确认指示时间",
                hidden: true,
                align: "center"
              },
              {
                prop: "wlStatus",
                label: "运货方式",
                hidden: true,
                align: "center"
              },
              {
                prop: "updateControlId",
                label: "并发控制",
                width: 0,
                align: "center",
                hidden: true
              }
            ],
      formField: {
        carBrandCode: this.$store.getters.orgInfo.BRAND_CODE,
        dlrId: "",
        purOrderCode: "",
        vin: "",
        caroutPriFlag: "",
        carConfigId: "",
        carColorId: "",
        carIncolorId: "",
        purBDate: "",
        purEDate: "",
        assignBeginDate: "",
        assignEndDate: "",
        carAssignType: "",
        purchaseOrderTypeId: "",
        cashTypeId: ""
      }
    };
  },

  methods: {
    add() {
      const that = this.$refs.multipleTable;
      let saveState = true;
      let msg = "";

      let selectData = that.$refs.multipleTable.selection;
      if (selectData.length < 1) {
        that.$message({
          message: "请选择需要保存的自动出货确认优先标识数据",
          type: "warning",
          duration: 2000
        });
        return;
      }
      var saveObjList = [];
      for (var index in selectData) {
        var saveObj = {
          purOrderId: selectData[index].purOrderId,
          carBrandCode: selectData[index].carBrandCode,
          caroutPriFlag: selectData[index].caroutPriFlag,
          purOrderDCode: selectData[index].purOrderDCode,
          wlStatus: selectData[index].wlStatus,
          purOrderDId: selectData[index].purOrderDId,
          canOutConfirmDate: selectData[index].canOutConfirmDate,
          outConfirimDate: selectData[index].outConfirimDate,
          updateControlId: selectData[index].updateControlId
        };
        saveObjList.push(saveObj);
      }
      const queryObj = {
        // 保存mutation
        type: "mutation",
        typeParam: "($dataInfo:[InputVeBuPurOrderD])",
        // api配置
        apiConfig: veApis.veBuPurOrderDMutationSave,
        apiServices: [
          {
            apiServiceParam: "(dataInfo:$dataInfo)"
          }
        ],
        variables: {
          //当前中台使用的名称有dataInfo、info，具体查看API文档
          dataInfo: saveObjList
        }
      };
      //转换了中台请求格式数据
      var paramD = that.$getParams(queryObj);
      // 调用中台API方法（可复用）
      that.$requestGraphQL(paramD).then(response => {
        if (response.data[queryObj.apiConfig.ServiceCode].result === "1") {
          that.$message({
            message: "保存成功",
            type: "success",
            duration: 2000
          });
          that.queryTable(1);
        } else {
          saveState = false;
          msg = response.data[queryObj.apiConfig.ServiceCode].msg;
          that.$message({
            message: msg,
            type: "warning",
            duration: 2000
          });
        }
      });
    }
  }
};
</script>
