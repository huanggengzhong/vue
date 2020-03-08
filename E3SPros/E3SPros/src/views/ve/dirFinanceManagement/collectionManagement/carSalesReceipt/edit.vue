<!--
* description: 汽车销售收款弹窗
* author: lxb
* createdDate: 2019-10-21
* logs:
-->
<template>
  <section class="filter-params-e3s">
    <el-dialog
      width="900px"
      title="收款"
      :visible.sync="handleVisibled"
      :append-to-body="true"
      center
      @close="close"
      @opened="addReceipts1()"
    >
      <el-tabs v-model="activeName" type="card" class="container-app">
        <el-tab-pane label="收款" name="first">
          <one-table-template
            ref="multipleTable"
            :dynamicButtons="tableButtons"
            :dynamicComponents="tableComponents"
            :dynamicApiConfig="apiConfig"
            :dynamicTableCols="tableCols"
            :dynamicFormFields="formField"
            :dynamicIsColumnDrop="true"
            :dynamicIsShowMoreBtn="false"
            :dynamicIsShowSelect="false"
            :dynamicIsInitTable="true"
            :dynamicTableOtherHeight="140"
            :isShowPagination="false"
          />
          <div class="filter-container filter-title shishou" ref="resultTitleHeight">实收信息</div>
          <div class="filter-container addReceipt" ref="searcheHeight">
            <el-button
              v-for="comp in tableButtons2"
              :key="comp.compKey"
              :type="comp.type"
              @click="comp.clickEvent"
            >{{comp.text}}</el-button>
          </div>
          <!-- 更多 -->
          <!-- 查询结果 -->
        </el-tab-pane>
        <el-tab-pane label="收款记录" name="second">
          <el-table
            v-loading="listLoadingRight"
            :data="proList"
            element-loading-text="加载中"
            border
            stripe
            :height="455"
            header-cell-class-name="header-cell"
            highlight-current-row
            ref="multipleTabled"
          >
            <el-table-column
              align="center"
              :label="$t('sys.content.gridIndex')"
              width="60"
              type="index"
            />
            <!-- 序号 -->
            <el-table-column
              v-for="(col, index) in tableColsRight.filter(o => o.hidden !== true)"
              :label="col.label"
              :key="`col_${index}`"
              :prop="dropTableColRight[index].prop"
              :width="dropTableColRight[index].width || null"
              :hidden="dropTableColRight[index].hidden"
              :align="dropTableColRight[index].align"
            >
              <template slot-scope="{row}">
                <span
                  v-if="dropTableColRight[index].isComponent === true && dropTableColRight[index].comps"
                >
                  <component
                    v-for="comp in dropTableColRight[index].comps"
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
                    :span="dropTableColRight[index].span || 24"
                    :isShowLabel="comp.isShowLabel"
                    :labelName="comp.labelName"
                    :lookuptype="comp.lookuptype"
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
                  ></component>
                </span>
                <span
                  v-else-if="!dropTableColRight[index].isComponent && dropTableColRight[index].prop === 'isEnable'"
                >{{(row[dropTableColRight[index].prop] === '1') ? '是' : '否' }}</span>
                <span v-else>{{ row[dropTableColRight[index].prop] }}</span>
              </template>
            </el-table-column>
          </el-table>
        </el-tab-pane>
      </el-tabs>
    </el-dialog>
  </section>
</template>
<script>
import { oneTableWithViewTemplateMixins } from "@/components/mixins/oneTableWithViewTemplateMixins";
import { veApis } from "@/api/graphQLApiList/ve";
import { requestGraphQL } from "@/api/commonRequest";
import { valueObjectMixins } from "@/components/mixins/valueObjectMixins";
import { CacheConfig } from "@/cache/configCache/index";
import { contsMixins } from "@/components/mixins/contsMixins";
import OneTableTemplate from "@/components/templates/popupsOneTable";
// import { watch } from "fs";

export default {
  // 组件混入对象：{data[listQuery] methods[queryTable]}
  mixins: [oneTableWithViewTemplateMixins, valueObjectMixins, contsMixins],
  components: {
    OneTableTemplate
  },
  beforeRouteEnter(to, from, next) {
    CacheConfig.initData(to.path, function() {
      next(() => {});
    });
  },
  props: {
    handleVisible: {
      type: Boolean,
      default: function() {
        return false;
      }
    },
    receiptObj: {
      type: Object,
      default: function() {
        return "";
      }
    }
  },

  mounted() {
    this.formField.custName = this.receiptObj.custName;
    this.formField.gatheringEmpName = this.receiptObj.gatheringEmpName;
    this.formField.gatheringItemName = this.receiptObj.gatheringItemName;
    this.formField.linkBillCode = this.receiptObj.linkBillCode;
    this.formField.gatheringAmount = this.receiptObj.gatheringAmount;
    this.formField.receivedAmount = this.receiptObj.receivedAmount;
    this.formField.discountAmount = this.receiptObj.discountAmount;
    this.queryRight();
  },
  data() {
    return {
      apiConfig: veApis.veSaleOrdGatheringQry,
      activeName: "first",
      handleVisibled: this.handleVisible,
      proList: [{ agentProject: "1", carAgentItemCost: "" }],
      listLoadingRight: false,
      tableComponents:
        CacheConfig.cacheData[this.$route.path] &&
        CacheConfig.cacheData[this.$route.path].tableComponents.length > 0
          ? CacheConfig.cacheData[this.$route.path].tableComponents
          : [
              // 客户名称
              {
                compKey: "compKey1",
                labelName: this.$t("ve.label.clientName"),
                span: 8,
                codeField: "custName",
                component: () => import("@/components/org/commonInput"),
                readonly: true,
                type: "inputText",
                isMust: true
              },
              {
                compKey: "compKey2",
                labelName: this.$t("ve.label.gatheringEmpName"),
                /* 收款人 */
                span: 8,
                codeField: "gatheringEmpName",
                component: () => import("@/components/org/commonInput"),
                readonly: true,
                type: "inputText",
                isMust: true
              },
              {
                compKey: "compKey3",
                labelName: this.$t("ve.label.gatheringItemCode"),
                /* 收款项目 */
                span: 8,
                codeField: "gatheringItemName",
                component: () => import("@/components/org/commonInput"),
                readonly: true,
                type: "inputText",
                isMust: true
              },
              {
                compKey: "compKey4",
                /* "关联单据", */
                labelName: this.$t("ve.label.linkBillCode"),
                span: 8,
                codeField: "linkBillCode",
                component: () => import("@/components/org/commonInput"),
                readonly: true,
                type: "inputText",
                isMust: true
              },
              {
                compKey: "compKey5",
                /* "应收金额", */
                labelName: this.$t("ve.label.contractPrices"),
                codeField: "gatheringAmount",
                span: 8,
                readonly: true,
                component: () => import("@/components/org/commonInput"),
                type: "inputText",
                isMust: true
              },
              {
                compKey: "compKey6",
                span: 8,
                labelName: this.$t("ve.label.ReceivedAmounts"),
                /* "已收金额" */
                codeField: "receivedAmount",
                readonly: true,
                component: () => import("@/components/org/commonInput"),
                type: "inputText",
                isMust: true
              },
              {
                compKey: "compKey7",
                span: 8,
                labelName: this.$t("ve.label.discountAmount"),
                /*  "欠收金额", */
                codeField: "discountAmount",
                readonly: true,
                component: () => import("@/components/org/commonInput"),
                type: "inputText",
                isMust: true
              }
            ],
      tableCols: this.getCols(),
      tableButtons: [
        {
          compKey: "btnKey1",
          type: "primary",
          size: "small",
          clickEvent: () => this.save(),
          text: this.$t("sys.button.save")
        },
        {
          compKey: "btnKey2",
          type: "",
          size: "small",
          clickEvent: () => this.sendCode(),
          text: this.$t("sys.button.cancel")
        }
      ],
      tableButtons2: [
        {
          compKey: "btnKey5",
          type: "",
          size: "small",
          clickEvent: () => this.addReceipts(),
          text: this.$t("ve.label.addReceipts")
        }
      ],
      tableColsRight: this.getRightCols(),
      dropTableColRight: this.getRightCols(),
      formField: {
        custName: this.receiptObj.custName,
        gatheringEmpName: this.receiptObj.gatheringEmpName,
        gatheringItemName: this.receiptObj.gatheringItemName,
        linkBillCode: this.receiptObj.linkBillCode,
        gatheringAmount: this.receiptObj.gatheringAmount,
        receivedAmount: this.receiptObj.receivedAmount,
        discountAmount: this.receiptObj.discountAmount
      }
    };
  },

  methods: {
    close() {
      this.handleVisibled = false;
    },
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
            prop: "agentProject",
            label: this.$t("ve.label.agentProject"),
            /*收款方式*/
            width: 150,
            align: "center",
            isComponent: true,
            comps: [
              {
                compKey: "propKey1",
                isShowLabel: false,
                codeField: "agentProject",
                component: () => import("@/components/org/LookupValue"),
                lookuptype: "DB0056",
                clickEvent: () => "",
                type: "dropdownList"
              }
            ]
          },
          {
            prop: "carAgentItemCost",
            label: this.$t("ve.label.AmountReceivable"),
            /*收款金额*/
            width: null,
            align: "center",
            isComponent: true,
            comps: [
              {
                compKey: "propKey2",
                isShowLabel: false,
                codeField: "carAgentItemCost",
                component: () => import("@/components/org/commonInput"),
                clickEvent: () => "",
                type: "inputText"
              }
            ]
          }
        ]);
      }
      return cols;
    },
    getRightCols() {
      var cols = [];
      if (
        CacheConfig.cacheData[this.$route.path] &&
        CacheConfig.cacheData[this.$route.path].tableCols.length > 0
      ) {
        cols = cols.concat(CacheConfig.cacheData[this.$route.path].tableCols);
      } else {
        cols = cols.concat([
          {
            prop: "gatheringDate",
            label: this.$t("ve.label.gatheringDate"),
            /* "收款日期", */
            width: null,
            align: "center"
          },
          {
            prop: "gatheringItemName",
            label: this.$t("ve.label.gatheringItemCode"),
            /* "收款项目", */
            width: null,
            align: "center"
          },
          {
            prop: "payer" /* 缺失 */,
            label: this.$t("ve.label.payer"),
            /* "付款人"  */
            width: null,
            align: "center"
          },
          {
            prop: "orderType",
            label: this.$t("ve.label.agentProject"),
            /*  "收款方式", */
            width: null,
            align: "center"
          },
          {
            prop: "gatheringAmount",
            label: this.$t("ve.label.AmountReceivable"),
            /* : "收款金额", */
            width: null,
            align: "center"
          }
        ]);
      }
      return cols;
    },
    save() {
      var saveObj = this.formField;
      const that = this.$refs.multipleTable;
      let saveState = true;
      let saveCount = 0;
      let msg = "";
      const queryObj = {
        // 保存mutation
        type: "mutation",
        // api配置
        apiConfig: veApis.veConfirmOrder,
        variables: {
          // 当前中台使用的名称有dataInfo、info，具体查看API文档
          dataInfo: {}
        }
      };
      // 转换了中台请求格式数据
      var paramD = this.$getParams(queryObj);
      // 调用中台API方法（可复用）
      this.$requestGraphQL(paramD).then(response => {
        if (response.data.veConfirmOrder.result === "1") {
          // 保存成功
          this.$message({
            message: "保存成功",
            type: "success",
            uration: 2000
          });
        } else {
          // 保存失败
          this.$message({
            message: "保存失败",
            type: "warn",
            uration: 2000
          });
        }
        this.close();
      });
    },
    addReceipts() {
      const that = this.$refs.multipleTable;
      that.list.push(this.proList[0]);
    },
    queryRight() {
      const that = this;
      let obj = {};
      let queryObj = {
        // api配置
        apiConfig: veApis.veSaleOrdGatheringQry,
        // 需要调用的API服务配置
        apiServices: [
          {
            //表格中台返回网格的字段
            apiQueryRow: ["updateControlId"]
          }
        ],
        //条件/实体参数（变量），根据typeParam中的定义配置
        variables: {
          //当前中台使用的名称有dataInfo、info，具体查看API文档
          dataInfo: obj
        }
      };
      //转换了中台请求格式数据
      var paramD = that.$getParams(queryObj);
      // 调用中台API方法（可复用）
      requestGraphQL(paramD).then(response => {
        if (
          response.data.veSaleOrdGatheringQry.result === "1" &&
          response.data.veSaleOrdGatheringQry.rows != ""
        ) {
          let arr = [];
          arr = response.data.veSaleOrdGatheringQry.rows;
          // this.proList = arr;
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
/deep/.el-tabs__header {
  margin: 0;
}
/deep/.el-tabs__item {
  height: 30px;
  line-height: 30px;
}
/deep/.filter-button {
  position: absolute;
  bottom: 0;
  right: 0;
  text-align: center;
  z-index: 9999;
}
// .el-dialog__wrapper .filter-params
/deep/.el-dialog__wrapper .filter-params {
  margin-top: 20px !important;
}
/deep/.el-table {
  margin: 20px 0 40px 0;
}
/deep/.filter-params .table-col .el-col {
  margin-bottom: 8px;
}
/deep/.shoukuan {
  position: absolute;
  top: 0px;
}

/deep/.shishou {
  position: absolute;
  top: 118px;
}
/deep/.addReceipt {
  z-index: 9999;
  position: absolute;
  right: 0;
  top: 115px;
}
</style>
