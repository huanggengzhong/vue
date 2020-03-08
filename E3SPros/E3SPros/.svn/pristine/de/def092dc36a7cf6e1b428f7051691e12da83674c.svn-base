<!--
* description:  汽车销售收款
* author: lixb
* createdDate: 2019-10-18
-->
<template>
  <section class="filter-params-e3s" id="pos-rel" style="padding:0px 12px !important">
    <div
      class="filter-container filter-button buttonTop"
      style="padding: 0 10px"
      ref="searcheHeight"
    >
      <el-button
        v-for="comp in tableButtons"
        :key="comp.compKey"
        :type="comp.type"
        @click="comp.clickEvent"
      >{{comp.text}}</el-button>
    </div>
    <!-- 查询条件 -->
    <div class="filter-container filter-params" v-if="tableComponents.length > 0" ref="conHeight">
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
            :code="formField[comp.codeField]"
            @changeCode="getComponentCode"
            @focusCode="getFocusCode"
            :isMul="comp.isMul"
            :isRequire="comp.isRequire"
            :span="comp.span || 6"
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
          ></component>
        </el-col>
        <!-- 更多 -->
        <el-col :span="2" class="moreBtn" v-if="isShowMoreBtn">
          <el-button
            :icon="moreBtnIcon"
            @click="changeToggleParam"
            class="moreParam"
          >{{$t('sys.content.more')}}</el-button>
        </el-col>
        <el-col
          :span="22"
          v-show="toggleParam"
          :class="isAbsolute === true ? 'toggleParam' : 'toggleParam toggleAbsolute'"
          style="z-index:2000"
        >
          <el-row>
            <component
              v-for="comp in tableComponents.filter(o => o.isMust === false)"
              :ref="comp.isRequire ? comp.isRequire+ comp.compKey : comp.compKey"
              :key="comp.compKey"
              :codeField="comp.codeField"
              :textField="comp.textField"
              :popupsKey="comp.compKey"
              :is="comp.component"
              :isShow="comp.isShow || true"
              :code="formField[comp.codeField]"
              @changeCode="getComponentCode"
              @focusCode="getFocusCode"
              :isMul="comp.isMul"
              :isRequire="comp.isRequire"
              :span="comp.span || 6"
              :labelName="comp.labelName"
              :lookuptype="comp.lookuptype"
              :inputType="comp.inputType"
              :dateOptionsType="comp.dateOptionsType"
              :format="comp.format"
              :dateType="comp.dateType"
              :valueObject="curValueObject"
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
            ></component>
          </el-row>
        </el-col>
      </el-row>
    </div>
    <!-- 查询结果 -->
    <el-row :gutter="24">
      <!-- 查询结果/左侧 -->
      <el-col :span="11" class="table-col">
        <div
          class="filter-container filter-title"
          ref="resultTitleHeight"
        >{{$t('sys.content.gridTitle')}}</div>
        <el-table
          v-loading="listLoading"
          @row-click="rowClickModel"
          :data="list"
          element-loading-text="加载中"
          border
          stripe
          :height="410"
          header-cell-class-name="header-cell"
          highlight-current-row
          ref="multipleTable"
          @current-change="handleTableRowChange"
        >
          <el-table-column
            align="center"
            :fixed="!isRowDrop"
            :label="$t('sys.content.gridIndex')"
            width="60"
            type="index"
          />
          <!-- 序号 -->
          <el-table-column
            v-for="(col, index) in tableColsRow.filter(o => o.hidden !== true)"
            :fixed="(dropTableColsRow[index].fixed || false) && !isRowDrop"
            :label="col.label"
            :key="`col_${index}`"
            :prop="dropTableColsRow[index].prop"
            :width="dropTableColsRow[index].width || null"
            :hidden="dropTableColsRow[index].hidden"
            :align="dropTableColsRow[index].align"
            :sortable="dropTableColsRow[index].sortable || sortable"
          >
            <template slot-scope="{row}">
              <span
                v-if="dropTableColsRow[index].isComponent === true && dropTableColsRow[index].comps"
              >
                <component
                  v-for="comp in dropTableColsRow[index].comps"
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
                  :span="dropTableColsRow[index].span || 24"
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
                v-else-if="!dropTableColsRow[index].isComponent && dropTableColsRow[index].prop === 'isEnable'"
              >{{(row[dropTableColsRow[index].prop] === '1') ? '是' : '否' }}</span>
              <span v-else>{{ row[dropTableColsRow[index].prop] }}</span>
            </template>
          </el-table-column>
        </el-table>
        <el-pagination
          v-if="isShowPagination"
          background
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :page-sizes="[10, 20, 30]"
          :page-size="10"
          :prev-text="$t('sys.content.prevPage')"
          :next-text="$t('sys.content.nextPage')"
          layout="prev, pager, next, sizes, ->, total"
          ref="paginationHeight"
          :total="pageTotal"
          :current-page.sync="listQuery.pageIndex"
        ></el-pagination>
      </el-col>
      <!-- 收款单详细信息/右侧 -->
      <el-col :span="13" class="table-col col-rel">
        <div class="filter-container filter-title" ref="resultTitleHeight">收款单详细信息</div>
        <div
          class="filter-container filter-params"
          v-if="tableComponentsDetail.length > 0"
          ref="conHeight"
        >
          <el-row :gutter="24">
            <el-col :span="22" class="table-col">
              <component
                v-for="comp in tableComponentsDetail.filter(o => o.isMust === true)"
                :ref="comp.isRequire ? comp.isRequire+ comp.compKey : comp.compKey"
                :key="comp.compKey"
                :v-show="comp.isShow"
                :codeField="comp.codeField"
                :textField="comp.textField"
                :popupsKey="comp.compKey"
                :is="comp.component"
                :isShow="comp.isShow || true"
                :code="formFieldTwo[comp.codeField]"
                :text="formFieldTwo[comp.text]"
                @changeCode="getComponentCode"
                :readonly="comp.readonly"
                @focusCode="getFocusCode"
                :isMul="comp.isMul"
                :isRequire="comp.isRequire"
                :span="comp.span || 6"
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
              ></component>
            </el-col>
          </el-row>
        </div>
        <div class="filter-container filter-title" ref="resultTitleHeight">收款项目</div>
        <!-- 收款项目 -->
        <el-table
          v-loading="listLoadingRight"
          :data="proList"
          element-loading-text="加载中"
          border
          stripe
          :height="150"
          header-cell-class-name="header-cell"
          @cell-click="receiptCell"
          highlight-current-row
          ref="multipleTable"
          @current-change="handleTableRowChange"
        >
          <el-table-column
            align="center"
            :fixed="!isRowDrop"
            :label="$t('sys.content.gridIndex')"
            width="60"
            type="index"
          />
          <!-- 序号 -->
          <el-table-column
            v-for="(col, index) in tableColsPro.filter(o => o.hidden !== true)"
            :fixed="(dropTableColsPro[index].fixed || false) && !isRowDrop"
            :label="col.label"
            :key="`col_${index}`"
            :prop="dropTableColsPro[index].prop"
            :width="dropTableColsPro[index].width || null"
            :hidden="dropTableColsPro[index].hidden"
            :align="dropTableColsPro[index].align"
            :sortable="dropTableColsPro[index].sortable || sortable"
          >
            <template slot-scope="{row}">
              <span
                v-if="dropTableColsPro[index].isComponent === true && dropTableColsPro[index].comps"
              >
                <component
                  v-for="comp in dropTableColsPro[index].comps"
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
                  :span="dropTableColsPro[index].span || 24"
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
                v-else-if="!dropTableColsPro[index].isComponent && dropTableColsPro[index].prop === 'isEnable'"
              >{{(row[dropTableColsPro[index].prop] === '1') ? '是' : '否' }}</span>
              <span v-else>{{ row[dropTableColsPro[index].prop] }}</span>
            </template>
          </el-table-column>
        </el-table>
        <!-- 收款记录 -->
        <div class="filter-container filter-title" ref="resultTitleHeight">收款单详细信息</div>
        <el-table
          v-loading="listLoadingRight"
          :data="hisList"
          element-loading-text="加载中"
          border
          stripe
          :height="150"
          header-cell-class-name="header-cell"
          highlight-current-row
          ref="multipleTable"
          @current-change="handleTableRowChange"
          :key="oneTableKeys"
        >
          <el-table-column
            align="center"
            :fixed="!isRowDrop"
            :label="$t('sys.content.gridIndex')"
            width="60"
            type="index"
          />
          <!-- 序号 -->
          <el-table-column
            v-for="(col, index) in tableColsMsg.filter(o => o.hidden !== true)"
            :fixed="(dropTableColsMsg[index].fixed || false) && !isRowDrop"
            :label="col.label"
            :key="`col_${index}`"
            :prop="dropTableColsMsg[index].prop"
            :width="dropTableColsMsg[index].width || null"
            :hidden="dropTableColsMsg[index].hidden"
            :align="dropTableColsMsg[index].align"
            :sortable="dropTableColsMsg[index].sortable || sortable"
          >
            <template slot-scope="{row}">
              <span
                v-if="dropTableColsMsg[index].isComponent === true && dropTableColsMsg[index].comps"
              >
                <component
                  v-for="comp in dropTableColsMsg[index].comps"
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
                  :span="dropTableColsMsg[index].span || 24"
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
                v-else-if="!dropTableColsMsg[index].isComponent && dropTableColsMsg[index].prop === 'isEnable'"
              >{{(row[dropTableColsMsg[index].prop] === '1') ? '是' : '否' }}</span>
              <span v-else>{{ row[dropTableColsMsg[index].prop] }}</span>
            </template>
          </el-table-column>
        </el-table>
        <!--  -->
      </el-col>
    </el-row>
    <!-- </el-table> -->
    <edit
      :editRowData="editRowData"
      :key="editPopupsKey"
      :handleVisible="showEdit"
      @close="close"
      :receiptObj="selData"
    ></edit>
  </section>
</template>
<script>
import { veApis } from "@/api/graphQLApiList/ve";
import { requestGraphQL } from "@/api/commonRequest";
import { oneTableTemplateMixins } from "@/components/mixins/oneTableTemplateMixins";
import { valueObjectMixins } from "@/components/mixins/valueObjectMixins";
import { CacheConfig } from "@/cache/configCache/index";
import Edit from "./edit";
export default {
  mixins: [oneTableTemplateMixins, valueObjectMixins],
  beforeRouteEnter(to, from, next) {
    CacheConfig.initData(to.path, function() {
      next();
    });
  },
  components: {
    Edit
  },
  data() {
    return {
      // 网格查询API配置对象
      apiConfig: veApis.veContractQry,
      showEdit: false,
      editPopupsState: false,
      toggleParam: false,
      editRowData: {},
      editPopupsKey: "a",
      isMul: false,
      list: null,
      proList: null,
      hisList: null,
      isRowDrop: false,
      selRow: {},
      listQuery: {
        pageIndex: 1,
        pageSize: 10
      },
      listLoading: false,
      listLoadingRight: false,
      index: 0,
      tableHeight: 410,
      tableColsRow: this.getColsRow(),
      tableColsPro: this.getColsPro(),
      tableColsMsg: this.getColsMsg(),
      dropTableColsRow: this.copyTableCols(this.getColsRow()),
      dropTableColsPro: this.copyTableCols(this.getColsPro()),
      dropTableColsMsg: this.copyTableCols(this.getColsMsg()),
      // 动态组件-按钮
      tableButtons: [
        // 查询
        {
          compKey: "btnKey1",
          type: "primary",
          size: "small",
          clickEvent: () => this.queryTable(1),
          text: this.$t("sys.button.query")
        },
        // 重置
        {
          compKey: "btnKey3",
          type: "",
          size: "small",
          clickEvent: () => this.reset(),
          text: this.$t("sys.button.reset")
        },
        // 导出
        {
          compKey: "btnKey4",
          type: "",
          size: "small",
          clickEvent: () => this.exportExcel(),
          text: this.$t("sys.button.export")
        }
      ],
      tableComponents:
        CacheConfig.cacheData[this.$route.path] &&
        CacheConfig.cacheData[this.$route.path].tableComponents.length > 0
          ? CacheConfig.cacheData[this.$route.path].tableComponents
          : [
              // 动态组件-查询条件
              // 销售类型  字段待确定
              {
                compKey: "compKey1",
                labelName: this.$t("ve.label.saletype"),
                codeField: "saleTypeId",
                lookuptype: "VE0026",
                component: () => import("@/components/org/LookupValue"),
                type: "dropdownList",
                isMust: true
              },

              {
                compKey: "compKey2",
                labelName: this.$t("ve.label.buyCustId") /* // 客户名称 */,
                codeField: "buyCustId",
                component: () => import("@/components/org/commonInput"),
                type: "inputText",
                isMust: true
              },
              // 订单号
              {
                compKey: "compKey3",
                labelName: this.$t("ve.label.transactionCode"),
                codeField: "saleOrderCode",
                component: () => import("@/components/org/commonInput"),
                type: "inputText",
                isMust: true
              },
              // 销售顾问
              {
                compKey: "compKey4",
                labelName: this.$t("ve.label.caEmpId"),
                codeField: "caEmpId",
                component: () => import("@/components/org/userSelect"),
                type: "propus",
                isMust: true
              },
              //VE0132 收款状态
              {
                compKey: "compKey5",
                labelName: this.$t("ve.label.chargeState"),
                codeField: "gatheringState",
                lookuptype: "VE0132",
                component: () => import("@/components/org/LookupValue"),
                type: "dropdownList",
                isMust: false
              },
              //日期类型
              {
                compKey: "compKey6",
                labelName: this.$t("ve.label.DateType"),
                codeField: "saleContractDateBegin",
                lookuptype: "VE0132",
                component: () => import("@/components/org/LookupValue"),
                type: "dropdownList",
                isMust: false
              },
              // 合同日期
              {
                compKey: "compKey7",
                labelName: this.$t("ve.label.ContractDate"),
                codeField: "saleContractDateBegin",
                component: () =>
                  import("@/components/org/datePicker/datePicker"),
                type: "datePicker",
                isMust: false
              },
              {
                compKey: "compKey8",
                labelName: this.$t("ve.label.reach"),
                codeField: "saleContractDateEnd",
                component: () =>
                  import("@/components/org/datePicker/datePicker"),
                type: "datePicker",
                isMust: false
              },
              //合同编号  字段待确认
              {
                compKey: "compKey9",
                labelName: this.$t("ve.label.contractCode"),
                codeField: "saleContractCode",
                component: () => import("@/components/org/commonInput"),
                type: "inputText",
                isMust: false
              },
              //车主名称 字段待确认
              {
                compKey: "compKey10",
                labelName: this.$t("ve.label.carCustName"),
                codeField: "carCustName",
                component: () => import("@/components/org/commonInput"),
                type: "inputText",
                isMust: false
              }
            ],
      // 动态生成网格列

      //表单查询数据
      formField: {
        saleTypeId: "",
        buyCustId: "",
        saleOrderCode: "",
        caEmpId: "",
        gatheringState: "",
        chargeState: "",
        saleContractDateBegin: "",
        saleContractDateEnd: "",
        saleContractCode: "",
        carCustName: ""
      },

      oneTableKeys: "a",
      selData: {},
      // 动态组件-查询条件
      tableComponentsDetail:
        CacheConfig.cacheData[this.$route.path] &&
        CacheConfig.cacheData[this.$route.path].tableComponentsDetail.length > 0
          ? CacheConfig.cacheData[this.$route.path].tableComponentsDetail
          : [
              // 客户名称
              {
                compKey: "compKey11",
                labelName: this.$t("ve.label.clientName"),
                span: 8,
                codeField: "buyCustId",
                component: () => import("@/components/org/commonInput"),
                readonly: true,
                type: "inputText",
                isMust: true
              },
              /* // 订单号 */
              {
                compKey: "compKey12",
                labelName: this.$t("ve.label.transactionCode"),
                span: 16,
                codeField: "saleOrderCode",
                component: () => import("@/components/org/commonInput"),
                readonly: true,
                type: "inputText",
                isMust: true
              },
              {
                compKey: "compKey13",
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
                compKey: "compKey14",
                span: 8,
                labelName: this.$t("ve.label.ReceivedAmounts") /* 待确认 */,
                /* "已收金额"  */ codeField: "factReceivedAmount",
                readonly: true,
                component: () => import("@/components/org/commonInput"),
                type: "inputText",
                isMust: true
              },
              {
                compKey: "compKey15",
                span: 8,
                labelName: this.$t("ve.label.discountAmount"),
                /* "欠收金额", */
                codeField: "discountAmount" /* 待确认 */,
                readonly: true,
                component: () => import("@/components/org/commonInput"),
                type: "inputText",
                isMust: true
              }
            ],
      //
      formFieldTwo: {
        buyCustId: "",
        saleOrderCode: "",
        gatheringAmount: "",
        factReceivedAmount: "",
        discountAmount: ""
      }
    };
  },
  mounted() {
    window.addEventListener("resize", () => {
      this.setTableHeight(true);
    });
  },
  methods: {
    getColsRow() {
      var cols = [];
      if (
        CacheConfig.cacheData[this.$route.path] &&
        CacheConfig.cacheData[this.$route.path].tableCols.length > 0
      ) {
        cols = cols.concat(CacheConfig.cacheData[this.$route.path].tableCols);
      } else {
        cols = cols.concat([
          {
            prop: "buyTypeId", //订单类型
            label: this.$t("ve.label.OrderType"),
            /* 待确认 */
            width: 150,
            align: "center"
          },
          // 客户名称
          {
            prop: "custName",
            label: this.$t("ve.label.custName"),
            width: 150,
            align: "center"
          },
          {
            prop: "carCustName",
            label: this.$t("ve.label.carCustName"),
            // "车主名称",
            width: 150,
            align: "center"
          },
          // 非直营二网
          {
            prop: "isUndirectCust",
            label: this.$t("ve.label.isUndirectCust"),
            width: 100,
            align: "center"
          },
          // VIN
          {
            prop: "vin",
            label: this.$t("ve.label.vin"),
            width: 150,
            align: "center"
          },
          // 车型
          {
            prop: "carConfigCode",
            label: this.$t("ve.label.carConfig"),
            width: 100,
            align: "center"
          },
          //  订单号
          {
            prop: "saleOrderCode",
            label: this.$t("ve.label.transactionCode"),
            width: 180,
            align: "center"
          },
          // 合同编号
          {
            prop: "saleContractCode",
            label: this.$t("ve.label.contractCode"),
            width: 140,
            align: "center"
          },
          // 应收金额 待确认
          {
            prop: "contractPrice",
            label: this.$t("ve.label.contractPricess"),
            width: 150,
            align: "center"
          },
          // 已收金额
          {
            prop: "ReceivedAmount",
            label: this.$t("ve.label.ReceivedAmounts"),
            width: 150,
            align: "center"
          },
          // 收款状态
          {
            prop: "chargeState",
            label: this.$t("ve.label.chargeState"),
            width: 150,
            align: "center"
          },
          // 销售顾问
          {
            prop: "caEmpId",
            label: this.$t("ve.label.caEmpId"),
            width: 150,
            hidden: true,
            align: "center"
          },
          {
            prop: "caEmpName",
            label: this.$t("ve.label.caEmpId"),
            width: 150,
            align: "center"
          },
          // 下单日期 待确认
          {
            prop: "preDeliveryDate",
            label: this.$t("ve.label.preDeliveryDate"),
            width: 150,
            align: "center"
          },
          // 优惠申请状态   待确认
          {
            prop: "persentAmount",
            label: this.$t("ve.label.favoAmount"),
       /* "优惠申请状态", */
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
    getColsPro() {
      var cols = [];
      if (
        CacheConfig.cacheData[this.$route.path] &&
        CacheConfig.cacheData[this.$route.path].tableCols.length > 0
      ) {
        cols = cols.concat(CacheConfig.cacheData[this.$route.path].tableCols);
      } else {
        cols = cols.concat([
          {
            prop: "controlBtn",
            label: this.$t("sys.content.operate"),
            codeField: "controlBtn",
            width: 60,
            align: "center",
            fixed: true,
            isComponent: true,
            comps: [
              {
                compKey: "propKey0",
                labelName: this.$t("sys.button.receipt"),
                codeField: "editControlBtn",
                clickEvent: this.receiptCells,
                component: () => import("@/components/org/linkButton")
              }
            ]
          },
          {
            prop: "gatheringItemCode",
            label: this.$t("ve.label.gatheringItemCode"),
            width: 150,
            align: "center"
          },
          // 应收金额
          {
            prop: "gatheringAmount",
            label: this.$t("ve.label.contractPrices"),
            width: 150,
            align: "center"
          },
          // 已收金额
          {
            prop: "factReceivedAmount",
            label: this.$t("ve.label.ReceivedAmounts"),
            width: 150,
            align: "center"
          },
          // 欠收金额 待确认
          {
            prop: "discountAmount",
            label: this.$t("ve.label.discountAmount"),
           /* "欠收金额", */
            width: null,
            align: "center"
          },
          // 关联单据
          {
            prop: "linkBillCode",
            label: this.$t("ve.label.linkBillCode"),
            width: 150,
            hidden: true,
            align: "center"
          },
          // 收款人
          {
            prop: "gatheringEmpName",
            label: this.$t("ve.label.gatheringEmpName"),
            width: 150,
            hidden: true,
            align: "center"
          }
        ]);
      }
      return cols;
    },
    getColsMsg() {
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
            // "收款日期",
            width: 150,
            align: "center"
          },
          {
            prop: "gatheringItemCode",
            label: this.$t("ve.label.gatheringItemCode"),
            width: 150,
            hidden: true,
            align: "center"
          },
          {
            prop: "gatheringItemName",
            label: this.$t("ve.label.gatheringItemCode"),
            //  "收款项目",
            width: 150,
            align: "center"
          },
          {
            prop: "payer" /* 缺失 */,
            label: this.$t("ve.label.payer"),
            /*  "付款人" */
            width: 150,
            align: "center"
          },
          {
            prop: "factReceivedAmount",
            label: this.$t("ve.label.AmountReceivable"),
            // "收款金额",
            width: 150,
            align: "center"
          }
        ]);
      }
      return cols;
    },
    setTableHeight(isResize) {
      this.$nextTick(() => {
        this.tableHeight = this.$utils.setTableHeight(
          this,
          isResize,
          this.tableHeight
        );
      });
    },
    rowClickModel(val) {
      this.selRow = val;
      this.queryDetail();
    },
    queryDetail() {
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
          this.proList = arr;
          this.hisList = arr;
          this.oneTableKeys = this.oneTableKeys + 1;
          this.formFieldTwo.gatheringOrderCode = arr[0].gatheringOrderCode;
          this.formFieldTwo.custName = arr[0].custName;
          this.formFieldTwo.owedAmount = arr[0].owedAmount;
          this.formFieldTwo.gatheringAmount = arr[0].gatheringAmount;
          this.formFieldTwo.receivedAmount = arr[0].receivedAmount;
        }
      });
    },
    receiptCells() {},
    receiptCell(row, column, cell) {
      this.selData = row;
      if (cell.cellIndex == 1) {
        const that = this.$refs.multipleTable;
        this.editPopupsKey = this.editPopupsKey + "1";
        this.showEdit = true;
      }
    },
    close() {}
  }
};
</script>
<style lang="scss" scoped>
// /deep/.filter-params-e3s {
//   padding: 0 10px !important;
// }
/deep/#pos-rel {
  position: relative;
  padding: 0px 12px !important;
}
/deep/.buttonTop {
  position: absolute;
  top: 43px;
  right: 8px;
}
/deep/.filter-params {
  margin: 0 0 8px 0;
}
/deep/.filter-params .table-col .el-col {
  margin-bottom: 8px;
}
/deep/.filter-params .table-col .el-col-6 {
  margin-bottom: 0px;
}
/deep/.col-rel {
  padding-left: 0 !important;
}
/deep/.cell a[data-v-381210ac] {
  color: #e70020;
  padding: 0 3px;
  cursor: pointer;
}

// data-v-25282e0e
</style>
