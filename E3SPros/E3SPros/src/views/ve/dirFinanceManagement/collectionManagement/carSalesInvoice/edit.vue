<!--
* description: 汽车销售号码登记弹窗
* author: lixb
* createdDate: 2019-10 -21
-->
<template>
  <el-dialog
    width="1000px"
    title="购买发票登记"
    :append-to-body="true"
    center
    :close-on-click-modal="false"
    :visible.sync="curPopupsVisible"
    @close="sendCode"
  >
    <section class="filter-params-e3s">
      <TwoTable
        ref="multipleTable"
        :rightTableObject="rightTableObject"
        :dynamicButtons="tableButtons"
        :dynamicComponents="tableComponents"
        :dynamicFormFields="formField"
        :dynamicTableCols="tableCols"
        :dynamicApiConfig="apiConfig"
        :dynamicIsShowMoreBtn="false"
      />
    </section>
  </el-dialog>
</template>
<script>
import { veApis } from "@/api/graphQLApiList/ve";
import { contsMixins } from "@/components/mixins/contsMixins";
import { CacheConfig } from "@/cache/configCache/index";
import { requestGraphQL } from "@/api/commonRequest";
import { oneTableWithViewTemplateMixins } from "@/components/mixins/oneTableWithViewTemplateMixins";
import TwoTable from "@/components/templates/twoTable";
export default {
  // 组件混入对象：{data[listQuery] methods[queryTable]}
  mixins: [contsMixins, oneTableWithViewTemplateMixins],
  components: {
    TwoTable
  },
  props: {},
  data() {
    return {
      // 网格查询API配置对象
      apiConfig: veApis.veDlrInvoiceM,
      // 动态组件-按钮
      clickRowsData: {},
      tableButtons: [
        {
          compKey: "btnKey1",
          type: "primary",
          size: "small",
          clickEvent: () => this.queryTable(1),
          text: "查询"
        }
      ],

      rightTableObject: {
        apiConfig: veApis.veDlrInvoiceM,
        isShowRightMoreBtn: true,
        tableButtons: [
          {
            compKey: "btnKey12",
            type: "",
            size: "small",
            clickEvent: () => this.save(),
            text: this.$t("sys.button.save")
          },
          {
            compKey: "btnKey13",
            type: "",
            size: "small",
            clickEvent: () => this.cancellation("0"),
            text: this.$t("ve.label.cancellation")
            /* "作废" */
          },
          {
            compKey: "btnKey11",
            type: "",
            size: "small",
            clickEvent: () => this.cancellation("1"),
            text: this.$t("ve.label.cancelRed")
            /* "冲红" */
          }
        ],
        //
        tableComponents:
          CacheConfig.cacheData[this.$route.path] &&
          CacheConfig.cacheData[this.$route.path].tableComponents.length > 0
            ? CacheConfig.cacheData[this.$route.path].tableComponents
            : [
                {
                  compKey: "compKey11",
                  /* "发票类别", */
                  labelName: this.$t("ve.label.invoiceType"),
                  span: 12,
                  lookuptype: "VE0225",
                  codeField: "degreeCode",
                  component: () => import("@/components/org/LookupValue"),
                  type: "dropdownList",
                  isMust: true
                },
                {
                  compKey: "compKey12",
                  labelName: this.$t("ve.label.registrationData"),
                  /* "登记日期", */
                  span: 12,
                  codeField: "invoiceApplyDateBegin",
                  component: () =>
                    import("@/components/org/datePicker/datePicker"),
                  type: "datePicker",
                  isMust: true
                },
                {
                  compKey: "compKey13",//缺失
                  labelName: this.$t("ve.label.invoiceStart"),
                  /* "发票起始号", */
                  span: 12,
                  codeField: "invoiceApplyDateBegin",
                  component: () =>
                    import("@/components/org/datePicker/datePicker"),
                  type: "datePicker",
                  isMust: false
                },
                {
                  compKey: "compKey14",
                  labelName: this.$t("ve.label.invoiceEnd"),
                  /* "发票终止号", */
                  span: 12,
                  codeField: "invoiceApplyDateBegin", //缺失
                  component: () =>
                    import("@/components/org/datePicker/datePicker"),
                  type: "datePicker",
                  isMust: false
                }
              ],
        //
        tableCols: this.getCols2(),
        formField: {
          degreeCode: "",
          invoiceApplyDateBegin: ""
        }
      },

      // 动态组件-查询条件
      tableComponents:
        CacheConfig.cacheData[this.$route.path] &&
        CacheConfig.cacheData[this.$route.path].tableComponents.length > 0
          ? CacheConfig.cacheData[this.$route.path].tableComponents
          : [
              {
                compKey: "compKey1",
                labelName: this.$t("ve.label.registrationDataBegin"),
                /* "登记日期从", */
                span: 12,
                codeField: "invoiceApplyDateBegin",
                component: () =>
                  import("@/components/org/datePicker/datePicker"),
                type: "datePicker",
                isMust: true
              },
              {
                compKey: "compKey2",
                labelName: this.$t("ve.label.reach"),
                /* "至", */
                span: 12,
                codeField: "invoiceApplyDateEnd",
                component: () =>
                  import("@/components/org/datePicker/datePicker"),
                type: "datePicker",
                isMust: true
              }
            ],

      // 动态生成网格列
      tableCols: this.getCols(),
      //表单查询数据
      formField: {
        stationName: ""
      },
      toAnotherChild: {
        lookupTypeCode: ""
      }
    };
  },
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
            prop: "batchNumber", //缺失
            label: this.$t("ve.label.batchNumber"),
            /* "批次号",  */
            width: 120,
            align: "center"
          },
          {
            prop: "invoiceDate",
            label: this.$t("ve.label.registrationData"),
            /*  "登记日期", */
            width: 120,
            align: "center"
          },
          {
            prop: "invoiceType",
            label: this.$t("ve.label.invoiceTypeS"),
            /* "发票类型", */
            width: 80,
            align: "center"
          },
          {
            prop: "startNumber", //缺失
            label: this.$t("ve.label.invoiceStart") /* "起始号", */,
            width: 120,
            align: "center"
          },
          {
            prop: "endNumber", //缺失
            label: this.$t("ve.label.invoiceEnd") /*   "终止号", */,
            width: 120,
            align: "center"
          },
          {
            prop: "invoiceState",
            /* "状态", */
            label: this.$t("ve.label.isEnable"),
            width: 80,
            align: "center"
          },
          {
            prop: "nextNumber", //缺失
            /* "下一个发票号", */
            label: this.$t("ve.label.nextInvoiceNo"),
            width: 120,
            align: "center"
          },
          // 并发控制
          {
            prop: "updateControlId",
            label: "并发控制",
            hidden: true,
            width: 150,
            align: "center"
          }
        ]);
      }
      return cols;
    },
    getCols2() {
      var cols = [];
      if (
        CacheConfig.cacheData[this.$route.path] &&
        CacheConfig.cacheData[this.$route.path].tableCols.length > 0
      ) {
        cols = cols.concat(CacheConfig.cacheData[this.$route.path].tableCols);
      } else {
        cols = cols.concat([
          {
            prop: "batchNumber" /* 缺失 */,
            label: this.$t("ve.label.batchNumber"),
            /* "批次号", */
            width: 120,
            align: "center"
          },
          {
            prop: "invoiceNo",
            label: this.$t("ve.label.invoiceNo"),
            /* "发票号", */
            width: 120,
            align: "center"
          },
          {
            prop: "invoiceState",
            label: this.$t("ve.label.isEnable"),
            /* "状态", */
            width: null,
            align: "center"
          },
          {
            prop: "vin",
            label: this.$t("ve.label.vin"),
            /*  "VIN", */
            width: 100,
            align: "center"
          },
          {
            prop: "lastUpdate", //缺失
            label: this.$t("ve.label.lastUpdate"),
            /*  "最后更新时间",  */
            width: 120,
            align: "center"
          }
        ]);
      }
      return cols;
    },
    // 作废/冲红
    cancellation(status) {
      const that = this.$refs.multipleTable;
      that.rightListLoading = true;
      const queryObj = {
        // 保存mutation
        type: "mutation",
        // api配置
        apiConfig: veApis.veInvoiceCancelM,
        variables: {
          // 当前中台使用的名称有dataInfo、info，具体查看API文档
          dataInfo: {
            carBrandCode: ""
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
            message: status === "0" ? "作废成功" : "冲红成功",
            type: "success",
            uration: 2000
          });
          that.rightListLoading = false;
        } else {
          // 保存失败
          // this.sendCode('0')
          this.$message({
            message: status === "0" ? "作废失败" : "冲红失败",
            type: "warn",
            uration: 2000
          });
        }
        this.queryRightTable(1);
      });
    },
    // 保存
    save() {
      const that = this.$refs.multipleTable;
      that.rightListLoading = true;
      const queryObj = {
        // 保存mutation
        type: "mutation",
        // api配置
        apiConfig: veApis.veDlrInvoiceApplyM,
        variables: {
          // 当前中台使用的名称有dataInfo、info，具体查看API文档
          dataInfo: {
            carBrandCode: ""
          }
        }
      };
      // 转换了中台请求格式数据
      var paramD = this.$getParams(queryObj);
      // 调用中台API方法（可复用）
      this.$requestGraphQL(paramD).then(response => {
        if (response.data.veDlrInvoiceApplyM.result === "1") {
          // 保存成功
          this.$message({
            message: "保存成功",
            type: "success",
            uration: 2000
          });
          that.rightListLoading = false;
        } else {
          // 保存失败
          // this.sendCode('0')
          this.$message({
            message: "保存失败",
            type: "warn",
            uration: 2000
          });
        }
        this.queryRightTable(1);
      });
    }
  },
  watch: {
    "toAnotherChild.lookupTypeCode"(curVal, oldVal) {
      debugger;
      if (curVal !== oldVal) {
        this.$refs.multipleTable.queryRightTable(1, this.toAnotherChild);
      }
    },
    clickRowsData(curVal, oldVal) {
      // this.
      this.toAnotherChild.lookupTypeCode = curVal.lookupTypeCode;
    }
  }
};
</script>
<style lang="scss" scoped>
/deep/
  .el-popup-parent--hidden
  .el-dialog__wrapper
  .el-dialog
  .el-dialog__body {
  padding-right: 0 !important;
}
/deep/.el-main .el-table {
  width: 100% !important;
}
/deep/.el-main .filter-params {
  width: 100% !important;
}
/deep/.el-main .el-pagination.is-background {
  width: 100% !important;
}
/deep/ #twoTable .rightElmain {
  width: 48%;
}
/deep/#twoTable .el-row .moreBtn {
  position: relative;
  left: -10px;
}
</style>
