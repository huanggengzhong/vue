<!--
* description: 汽车销售增值税开票弹窗
* author: lixb
* createdDate: 2019-10 -21
-->
<template>
  <section class="filter-params-e3s kaipiao">
    <el-dialog
      width="900px"
      title="税控机开票"
      :append-to-body="true"
      center
      :close-on-click-modal="false"
      :visible.sync="handleVisibled"
      @close="sendCode"
    >
      <h4 class="tTitle">增值税发票</h4>
      <div class="tTips">
        <span>发票代码</span>
        <span>开票日期 2019-10-21</span>
        <span>发票号码</span>
      </div>
      <div
        class="filter-container filter-params mb-0"
        v-if="tableComponents.length > 0"
        ref="conHeight"
      >
        <el-row :gutter="24">
          <el-col :span="22" class="table-col">
            <component
              v-for="comp in tableComponents.filter(o => o.isMust === true)"
              :ref="comp.isRequire ? comp.isRequire+ comp.compKey : comp.compKey"
              :key="comp.compKey"
              :v-show="comp.isShow"
              :codeField="comp.codeField"
              :textField="comp.textField"
              :popupsKey="comp.compKey"
              :is="comp.component"
              :isShow="comp.isShow || true"
              :code="formFieldT[comp.codeField]"
              :disabled="comp.disabled"
              :isMul="comp.isMul"
              :isRequire="comp.isRequire"
              :span="comp.span || 8"
              :labelName="comp.labelName"
              :lookuptype="comp.lookuptype"
              :dateOptionsType="comp.dateOptionsType"
              :format="comp.format"
              :dateType="comp.dateType"
              :valueObject="curValueObject"
              :inputType="comp.inputType"
              :clearable="comp.clearable"
              :filterable="comp.filterable"
              :parentFileds="comp.parentFileds || ''"
              :mustFields="comp.mustFields || ''"
              :returnCodeField="comp.returnCodeField"
              :returnTextField="comp.returnTextField"
              :otherField="comp.otherField"
              :validrule="comp.validrule"
              :isUseDefault="comp.isUseDefault"
              :isHost="comp.isHost"
              :oFields="comp.oFields"
            ></component>
          </el-col>
        </el-row>
      </div>
      <!-- 查询结果 -->
      <el-table
        v-loading="listLoading"
        :data="list"
        element-loading-text="加载中"
        border
        stripe
        height="130"
        header-cell-class-name="header-cell"
        highlight-current-row
        ref="multipleTable"
        :key="oneTableKey"
      >
        <!-- 选择 -->
        <el-table-column
          align="center"
          :label="$t('sys.content.gridIndex')"
          width="60"
          type="index"
        />
        <!-- 序号 -->
        <el-table-column
          v-for="(col, index) in tableCols.filter(o => o.hidden !== true)"
          :fixed="(dropTableCols[index].fixed || false) && !isRowDrop"
          :label="col.label"
          :key="`col_${index}`"
          :prop="dropTableCols[index].prop"
          :width="dropTableCols[index].width || null"
          :hidden="dropTableCols[index].hidden"
          :align="dropTableCols[index].align"
        >
          <template slot-scope="{row}">
            <span v-if="dropTableCols[index].isComponent === true && dropTableCols[index].comps">
              <component
                v-for="comp in dropTableCols[index].comps"
                :key="comp.compKey"
                :is="comp.component"
                :codeField="comp.codeField"
                :textField="comp.textField"
                :popupsKey="comp.compKey"
                :isShow="row[comp.compareField]===comp.compareValue"
                :code="row[comp.codeField]"
                :text="row[comp.textField]"
                @changeCode="getRowComponentCode"
                @clickEvent="comp.clickEvent"
                :comType="row.index+''"
                :isMul="comp.isMul"
                :span="dropTableCols[index].span || 24"
                :isShowLabel="comp.isShowLabel"
                :labelName="comp.labelName"
                :lookuptype="comp.lookuptype"
                :disabled="comp.disabled"
                :format="comp.format"
                :dateType="comp.dateType"
                :dateOptionsType="comp.dateOptionsType"
                :contWay="[row,comp.contWay]"
                :clearable="comp.clearable"
                :filterable="comp.filterable"
                :curTableRow="comp.rowFileds?row:null"
                :rowFileds="comp.rowFileds"
                :parentFileds="comp.parentFileds || ''"
                :mustFields="comp.mustFields || ''"
                :returnCodeField="comp.returnCodeField"
                :returnTextField="comp.returnTextField"
                :otherField="comp.otherField"
                :isColComp="true"
                :isAsync="comp.isAsync"
                :isUseDefault="comp.isUseDefault"
                :isHost="comp.isHost"
                :oFields="comp.oFields"
              ></component>
            </span>
            <span
              v-else-if="!dropTableCols[index].isComponent && dropTableCols[index].prop === 'isEnable'"
            >{{(row[dropTableCols[index].prop] === '1') ? '是' : '否' }}</span>
            <span
              v-else-if="dropTableCols[index].isFlag"
            >{{(row[dropTableCols[index].prop] === '1') ? '是' : '否' }}</span>
            <span v-else>{{ row[dropTableCols[index].prop] }}</span>
          </template>
        </el-table-column>
      </el-table>
      <!-- 合计 -->
      <div
        class="filter-container filter-params mb-0"
        v-if="tableComponentHJ.length > 0"
        ref="conHeight"
      >
        <el-row>
          <el-col :span="23" class="table-col">
            <component
              v-for="comp in tableComponentHJ.filter(o => o.isMust === true)"
              :ref="comp.isRequire ? comp.isRequire+ comp.compKey : comp.compKey"
              :key="comp.compKey"
              :v-show="comp.isShow"
              :codeField="comp.codeField"
              :textField="comp.textField"
              :popupsKey="comp.compKey"
              :is="comp.component"
              :isShow="comp.isShow || true"
              :code="formFieldB[comp.codeField]"
              :disabled="comp.disabled"
              :isMul="comp.isMul"
              :isRequire="comp.isRequire"
              :span="comp.span || 11"
              :labelName="comp.labelName"
              :lookuptype="comp.lookuptype"
              :dateOptionsType="comp.dateOptionsType"
              :format="comp.format"
              :dateType="comp.dateType"
              :valueObject="curValueObject"
              :inputType="comp.inputType"
              :clearable="comp.clearable"
              :filterable="comp.filterable"
              :parentFileds="comp.parentFileds || ''"
              :mustFields="comp.mustFields || ''"
              :returnCodeField="comp.returnCodeField"
              :returnTextField="comp.returnTextField"
              :otherField="comp.otherField"
              :validrule="comp.validrule"
              :isUseDefault="comp.isUseDefault"
              :isHost="comp.isHost"
              :oFields="comp.oFields"
            ></component>
          </el-col>
        </el-row>
      </div>
      <h4 class="chapter">销售方(章)</h4>
      <div class="filter-container filter-button text-center" ref="searcheHeight">
        <el-button
          v-for="comp in tableButtons"
          :key="comp.compKey"
          :type="comp.type"
          @click="comp.clickEvent"
        >{{comp.text}}</el-button>
      </div>
      <!-- <miprintf></miprintf> -->
    </el-dialog>
  </section>
</template>
<script>
import { oneTableTemplateMixins } from "@/components/mixins/oneTableTemplateMixins";
import { valueObjectMixins } from "@/components/mixins/valueObjectMixins";
import { requestGraphQL } from "@/api/commonRequest";
import { contsMixins } from "@/components/mixins/contsMixins";
import { CacheConfig } from "@/cache/configCache/index";
import { veApis } from "@/api/graphQLApiList/ve";
// import MIprintf from "./MIprintf";
export default {
  // 组件混入对象：{data[listQuery] methods[queryTable]}
  mixins: [valueObjectMixins, contsMixins],
  components: {
    // MIprintf
  },
  props: {
    handleVisible: {
      type: Boolean,
      default: function() {
        return true;
      }
    },
    clickRows: {
      type: Object,
      default: function() {
        return {};
      }
    }
  },
  data() {
    return {
      // 网格查询API配置对象
      apiConfig: veApis.veDlrInvoiceApplyQry,
      handleVisibled: this.handleVisible,
      rowsData: this.clickRows,
      listLoading: false,
      oneTableKey: "a",
      printfDialogVisible: false,
      list: [],
      // 动态组件-按钮
      tableButtons: [
        {
          compKey: "btnKey1",
          type: "",
          size: "small",
          clickEvent: () => this.save("0"),
          text: this.$t("sys.button.drawer")
        },
        {
          compKey: "btnKey2",
          type: "",
          size: "small",
          clickEvent: () => this.printf(),
          text: this.$t("sys.button.print")
        },
        {
          compKey: "btnKey3",
          type: "",
          size: "small",
          clickEvent: () => this.save("1"),
          text: this.$t("sys.button.invalid")
        }
      ],
      // 动态组件-查询条件
      tableComponents:
        CacheConfig.cacheData[this.$route.path] &&
        CacheConfig.cacheData[this.$route.path].tableComponents.length > 0
          ? CacheConfig.cacheData[this.$route.path].tableComponents
          : [
              {
                compKey: "compKey1",
                labelName: this.$t("ve.label.PurchaseNname"),
                /* "购货单位名称" */
                codeField: "dlrShortName",
                component: () => import("@/components/org/commonInput"),
                type: "inputText",
                isMust: true
              },
              {
                compKey: "compKey2",
                /* "购货单位纳税人识别号", */
                labelName: this.$t("ve.label.taxpayerNo"),
                codeField: "",
                component: () => import("@/components/org/commonInput"),
                type: "inputText",
                isMust: true
              },
              {
                compKey: "compKey3",
                /* "密码区", */
                // span:8,
                labelName: this.$t("ve.label.passwords"),
                disabled: true,
                codeField: "",
                component: () => import("@/components/org/commonInput"),
                type: "inputText",
                isMust: true
              },
              {
                compKey: "compKey4",
                labelName: this.$t("ve.label.PurchaseAddrAndTel"),
                /* "购货单位地址、电话", */
                codeField: "",
                component: () => import("@/components/org/commonInput"),
                type: "inputText",
                isMust: true
              },
              {
                compKey: "compKey5",
                /* "购货单位开户行及账号", */
                labelName: this.$t("ve.label.PurchaseBankAccount"),
                codeField: "",
                component: () => import("@/components/org/commonInput"),
                type: "inputText",
                isMust: true
              }
            ],
      tableComponentHJ:
        CacheConfig.cacheData[this.$route.path] &&
        CacheConfig.cacheData[this.$route.path].tableComponents.length > 0
          ? CacheConfig.cacheData[this.$route.path].tableComponents
          : [
              {
                compKey: "compKey11",
                labelName: this.$t("ve.label.amount"),
                /* "金额", */
                codeField: "factPrice",
                disabled: true,
                component: () => import("@/components/org/commonInput"),
                type: "inputText",
                isMust: true
              },
              {
                compKey: "compKey12",
                labelName: this.$t("ve.label.paid"),
                /* "税额", */
                codeField: "paid",
                disabled: true,
                component: () => import("@/components/org/commonInput"),
                type: "inputText",
                isMust: true
              },
              {
                compKey: "compKey13",
                labelName: this.$t("ve.label.paid"),
                /* "价税合计(大写)", */
                codeField: "daxie",
                disabled: true,
                component: () => import("@/components/org/commonInput"),
                type: "inputText",
                isMust: true
              },
              {
                compKey: "compKey10",
                /* "(小写)", */
                labelName: this.$t("ve.label.SmallAggregate"),
                codeField: "factPrice",
                disabled: true,
                component: () => import("@/components/org/commonInput"),
                type: "inputText",
                isMust: true
              },
              {
                compKey: "compKey14",
                labelName: this.$t("ve.label.SalesUnit"),
                /* "销售单位名称", */
                codeField: "",
                disabled: true,
                component: () => import("@/components/org/commonInput"),
                type: "inputText",
                isMust: true
              },
              {
                compKey: "compKey15",
                /* "销售单位纳税人识别号", */
                labelName: this.$t("ve.label.SalesTaxpayerNo"),
                codeField: "",
                disabled: true,
                component: () => import("@/components/org/commonInput"),
                type: "inputText",
                isMust: true
              },
              {
                compKey: "compKey16",
                labelName: this.$t("ve.label.SalesTaxpayerAddrAndTel"),
                /* "销售单位地址、电话", */
                codeField: "address",
                component: () => import("@/components/org/commonInput"),
                type: "inputText",
                isMust: true
              },
              {
                compKey: "compKey17",
                /* "销售单位开户行及账号", */
                labelName: this.$t("ve.label.SalesTaxpayerBankAccount"),
                codeField: "bank",
                component: () => import("@/components/org/commonInput"),
                type: "inputText",
                isMust: true
              },
              {
                compKey: "compKey18",
                /* "备注", */
                labelName: this.$t("ve.label.remark"),
                codeField: "",
                span: 20,
                component: () => import("@/components/org/commonInput"),
                type: "inputText",
                isMust: true
              },
              {
                compKey: "compKey19",
                labelName: this.$t("ve.label.gatheringEmpName"),
                /* "收款人", */
                span: 8,
                codeField: "",
                component: () => import("@/components/org/commonInput"),
                type: "inputText",
                isMust: true
              },
              {
                compKey: "compKey20",
                labelName: this.$t("ve.label.toReviewPeople"),
                /* "复核人", */
                codeField: "",
                span: 8,
                component: () => import("@/components/org/commonInput"),
                type: "inputText",
                isMust: true
              },
              {
                compKey: "compKey21",
                /* "开票人", */
                labelName: this.$t("ve.label.invoiceEmpName"),
                codeField: "invoiceEmpName",
                span: 8,
                disabled: true,
                component: () => import("@/components/org/commonInput"),
                type: "inputText",
                isMust: true
              }
            ],
      // 动态生成网格列
      tableCols: this.getCols(),
      dropTableCols: this.getCols(),
      //表单查询数据
      formFieldT: {},
      formFieldB: {}
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
            prop: "HUOWU",
            label: this.$t("ve.label.taxableServices"),
            /* "货物或应税劳务名称", */
            width: 200,
            align: "center"
          },
          {
            prop: "vin",
            label: this.$t("ve.label.specificationsModel"),
            /* "规格型号", */
            width: null,
            align: "center"
          },
          {
            prop: "monad",
            label: this.$t("ve.label.monad"),
            /*  "单位", */
            width: 60,
            align: "center"
          },
          {
            prop: "num",
            label: this.$t("ve.label.quantity"),
            /* "数量", */
            width: 60,
            align: "center"
          },
          {
            prop: "factPrice",
            label: this.$t("ve.label.monadTax"),
            /* "单价(含税)", */
            width: 100,
            align: "center"
          },
          {
            prop: "factPrice",
            label: this.$t("ve.label.amountTax"),
            /* "金额(含税)", */
            width: 100,
            align: "center"
          },
          {
            prop: "taxRate",
            label: this.$t("ve.label.taxRate"),
            /* "税率", */
            width: 60,
            align: "center"
          },
          {
            prop: "paid",
            label: this.$t("ve.label.paid"),
            /* "税额", */
            width: 80,
            align: "center"
          },
          {
            prop: "updateControlId",
            /* "并发字段", */
            width: 80,
            hidden: true,
            align: "center"
          }
        ]);
      }
      return cols;
    },
    // 作废/冲红
    cancellation(status) {
      const that = this.$refs.multipleTable;
      let saveState = true;
      let saveCount = 0;
      let msg = "";
      const queryObj = {
        // 保存mutation
        type: "mutation",
        // api配置
        apiConfig: veApis.veDelorder,
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
        } else {
          // 保存失败
          // this.sendCode('0')
          this.$message({
            message: status === "0" ? "作废失败" : "冲红失败",
            type: "warn",
            uration: 2000
          });
        }
        this.queryTable(1);
      });
    },
    sendCode() {
      this.handleVisibled = false;
    },
    save(state) {
      const that = this.$refs.multipleTable;
      const queryObj = {
        // 保存mutation
        type: "mutation",
        // api配置
        apiConfig: veApis.veDelorder,
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
            message: status === "0" ? "开票成功" : "作废成功",

            type: "success",
            uration: 2000
          });
        } else {
          // 保存失败
          // this.sendCode('0')
          this.$message({
            message: status === "0" ? "开票失败" : "作废失败",
            type: "warn",
            uration: 2000
          });
        }
      });
    },
    printf() {
      this.printfDialogVisible = true;
      this.nowTime = this.resetTime();
    },
    printf2() {
      this.$print(this.$refs.print);
    },
    resetTime() {
      let startTime = new Date();
      console.log(startTime.toLocaleString());
      return startTime.toLocaleString();
    }
  },
  mounted() {
    this.formFieldT = this.rowsData;
    this.formFieldB = this.rowsData;
    this.list.push(this.rowsData);
  }
};
</script>
<style lang="scss" scoped>
/deep/.tTitle {
  color: #e70020;
  margin: 0;
  text-align: center;
  font-size: 22px;
}
/deep/.tTips {
  display: flex;
  justify-content: space-around;
  margin-top: 8px;
}
/deep/.filter-params .table-col .el-col {
  margin-bottom: 10px;
}
/deep/.text-center {
  text-align: center !important;
}
/deep/.mb-0 {
  margin-bottom: 0 !important;
}
/deep/.chapter {
  text-align: right;
  padding-right: 207px;
  font-size: 14px;
  margin: 0;
}
</style>
