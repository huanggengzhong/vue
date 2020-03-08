<!--
* description: 风险店采购单信息管控
* author: linzewen
* createdDate: 2019-09-20
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
      :dynamicIsShowSelect="true"
      :dynamicIsShowMoreBtn="true"
      :dynamicIsColumnDrop="true"
    />
  </div>
</template>
<script>
import { oneTableWithViewTemplateMixins } from '@/components/mixins/oneTableWithViewTemplateMixins';
import { veApis } from "@/api/graphQLApiList/ve";
import OneTableTemplate from "@/components/templates/oneTable";

export default {
  name: "veRiskDlrMsgCtrl",
  // 组件混入对象
  mixins: [oneTableWithViewTemplateMixins],
  components: {
    OneTableTemplate
  },
  data() {
    return {
      // 网格查询API配置对象
      apiConfig: veApis.veBuPurOrderQueryFindAll,
      // 动态组件-按钮
      tableButtons: [
        {
          compKey: "btnKey1",
          type: "primary",
          size: "small",
          clickEvent: () => this.queryTable(1),
          text: this.$t("sys.button.query") /*查询*/
        },
        {
          compKey: "btnKey2",
          type: "",
          size: "small",
          clickEvent: () => this.reset(),
          text: this.$t("sys.button.reset") /*重置*/
        },
        {
          compKey: "btnKey3",
          type: "",
          size: "small",
          clickEvent: () => this.exportExcel(),
          text: this.$t("sys.button.export") /*导出*/
        },
        {
          compKey: "btnKey4",
          type: "",
          size: "small",
          clickEvent: () => this.unLimited(),
          text: "取消限制"
        }
      ],
      // 动态组件-查询条件
      tableComponents: [
        {
          compKey: "compKey1",
          labelName: "品牌",
          codeField: "carBrandCode",
          component: () => import("@/components/org/carBrand/carBrand"),
          type: "dropdownList",
          isMust: true
        },
        {
          compKey: "compKey2",
          labelName: "经销商简称",
          codeField: "dlrId",
          component: () => import("@/components/org/orgDlr"),
          type: "propus",
          isMust: true
        },
        {
          compKey: "compKey3",
          labelName: "采购单号",
          codeField: "purOrderCode",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        },
        {
          compKey: "compKey4",
          labelName: "VIN",
          codeField: "vin",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        },
        {
          compKey: "compKey5",
          labelName: "车型配置",
          codeField: "carConfigId",
          component: () => import("@/components/org/carTypeConfig"),
          type: "propus",
          isMust: false
        },
        {
          compKey: "compKey6",
          labelName: "车身颜色",
          codeField: "carColorId",
          component: () => import("@/components/org/carColor"),
          type: "propus",
          isMust: false
        },
        {
          compKey: "compKey7",
          labelName: "内饰色",
          codeField: "carIncolorId",
          component: () => import("@/components/org/TrimPopupColor"),
          type: "propus",
          isMust: false
        },
        {
          compKey: "compKey8",
          labelName: "选装包",  //api文档没有
          codeField: "chooseablePackage",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: false
        },
        {
          compKey: "compKey9",
          labelName: "采购单类型",
          codeField: "purchaseOrderTypeId",
          component: () => import("@/components/ve/PurchaseOrderType"),
          type: "dropdownList",
          isMust: false
        },
        {
          compKey: "compKey10",
          labelName: "扣款资金类型",  //api文档没有 中台显示的是下单资金类型
          codeField: "makeCashTypeId",
          component: () => import("@/components/org/commonInput"),
          type: "dropdownList",
          isMust: false
        },
        {
          compKey: "compKey11",
          labelName: "出货确认开始时间",
          codeField: "outConfirimDateBegin",
          component: () => import("@/components/org/datePicker/dateTimePick"),
          type: "datePicker",
          isMust: false
        },
        {
          compKey: "compKey12",
          labelName: "出货确认结束时间",
          codeField: "outConfirimDateEnd",
          component: () => import("@/components/org/datePicker/dateTimePick"),
          type: "datePicker",
          isMust: false
        },
        {
          compKey: "compKey13",
          labelName: "限制类型",  //api文档没有
          codeField: "rejectType",
          component: () => import("@/components/org/commonInput"),
          type: "dropdownList",
          isMust: false
        }
      ],
      // 动态生成网格列
      tableCols: [
        // {
        //   prop: "rejectType",
        //   label: "限制状态",  API文档里没有
        //   width: null,
        //   align: "center"
        // },
        {
          prop: "carBrandCode",
          label: "品牌编码",
          width: null,
          align: "center",
          hidden: true
        },
        {
          prop: "carBrandCn",
          label: this.$t("org.label.carBrandCn"), //品牌
          width: null,
          align: "center",
        },
        // {
        //   prop: "isEnable3",
        //   label: "大区",
        //   width: null,
        //   align: "center"
        // },
        // {
        //   prop: "isEnable4",
        //   label: "小区",
        //   width: null,
        //   align: "center"
        // },
        // {
        //   prop: "isEnable5",
        //   label: "省份",
        //   width: null,
        //   align: "center"
        // },
        {
          prop: "dlrId",
          label: "经销商Id",
          width: null,
          align: "center",
          hidden: true
        },
        {
          prop: "dlrShortName",
          label: "经销商名称",
          width: null,
          align: "center"
        },
        {
          prop: "cashTypeId",
          label: "冻结资金类型",
          width: null,
          align: "center"
        },
        {
          prop: "deductCashTypeId",
          label: "扣款资金类型",
          width: null,
          align: "center"
        },
        {
          prop: "vin",
          label: "VIN",
          width: null,
          align: "center"
        },
        {
          prop: "outConfirimDate", // 中台为出货确认指示时间？
          label: "出货确认时间",
          width: null,
          align: "center"
        },
        {
          prop: "sendShId",
          label: "拟发运仓库",  // 中台为意向发车仓库？
          width: null,
          align: "center"
        },
        {
          prop: "carSeriesId",
          label: "车系Id",
          width: null,
          align: "center"
        },
        {
          prop: "carSeriesCode",
          label: "车系编码",
          width: null,
          align: "center"
        },
        {
          prop: "carSeriesName",
          label: "车系名称",
          width: null,
          align: "center"
        },
        {
          prop: "smallCarTypeId",
          label: "车型",
          width: null,
          align: "center"
        },
        {
          prop: "smallCarTypeCn",
          label: "车型名称",
          width: null,
          align: "center"
        },
        {
          prop: "carColorName",
          label: "车身颜色",
          width: null,
          align: "center"
        },
        {
          prop: "carIncolorName",
          label: "内饰色",
          width: null,
          align: "center"
        },
        // {
        //   prop: "isEnable17",
        //   label: "选装包",
        //   width: null,
        //   align: "center"
        // },
        {
          prop: "carPrice",
          label: "车型产品价格",
          width: null,
          align: "center"
        },
        {
          prop: "purchaseOrderTypeId",
          label: "采购单类型",
          width: null,
          align: "center"
        },
        {
          prop: "purOrderDId",
          label: "采购明细单ID",  //  保存用
          width: null,
          align: "center"
        },
        {
          prop: "purOrderCode",
          label: "采购单单号",
          width: null,
          align: "center"
        },
        {
          prop: "purStatus",
          label: "采购单状态",
          width: null,
          align: "center"
        },
        {
          prop: "pvInstoreDate",
          label: "PV入库日期",
          width: null,
          align: "center"
        },
        {
          prop: "auditEmpName",
          label: "取消限制人", //api文档为审核人
          width: null,
          align: "center"
        },
        {
          prop: "auditDate",
          label: "取消限制时间", // api文档为审核时间
          width: null,
          align: "center"
        },
        {
          prop: "deliverModeId",
          label: "运货方式",
          width: null,
          align: "center"
        },
        {
          prop: "riskFlag",
          label: "风险标识",  // 保存用
          width: null,
          align: "center"
        },
        {
          prop: "updateControlId",
          label: "并发控制Id",  // 保存用
          width: null,
          align: "updateControlId"
        }
      ],
      //表单查询数据
      formField: {
        carBrandCode: "",
        dlrId: "",
        purOrderCode: "",
        vin: "",
        carConfigId: "",
        carColorId: "",
        carIncolorId: "",
        // chooseablePackage: "",  // 选装包 中台无对应字段
        purchaseOrderTypeId: "",
        makeCashTypeId: "",
        outConfirimDateBegin: "",
        outConfirimDateEnd: "",
        // rejectType: ""   // 限制类型 中台无对应字段
      }
    };
  },
  methods: {
    unLimited() {
      const that = this.$refs.multipleTable;
      let saveState = true;
      let saveCount = 0;
      let msg = "";

      let selectData = that.$refs.multipleTable.selection;
      if (selectData.length < 1) {
        that.$message({
          message: this.$t("org.label.choose"),
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
          apiConfig: veApis.veRiskDlrMessageCtrl,
          variables: {
            //当前中台使用的名称有dataInfo、info，具体查看API文档
            dataInfo: {
              carBrandCode: selectData[k].carBrandCode,
              purOrderDId: selectData[k].purOrderDId,
              riskFlag: selectData[k].riskFlag,
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
