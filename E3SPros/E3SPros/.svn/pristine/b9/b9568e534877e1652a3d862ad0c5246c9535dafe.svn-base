<!--
* description: 经销商车型授权-车系页签
* author: lixb
* createdDate: 2019-09-28
-->
<template>
  <section class="filter-params-e3s">
    <div class="filter-container filter-params">
      <el-row :gutter="24" ref="conHeight">
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
          ></component>
          <div class="filter-container filter-button mt-btn" ref="searcheHeight">
            <el-button
              v-for="comp in tableButtons"
              :key="comp.compKey"
              :type="comp.type"
              @click="comp.clickEvent"
            >{{comp.text}}</el-button>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="24">
        <!-- 车型信息 -->
        <el-col :span="16">
          <el-row :gutter="24">
            <!-- 车型信息查询结果 -->
            <el-col>
              <div
                class="filter-container filter-title"
                ref="resultTitleHeight"
              >{{$t("ve.label.carGridTitle")}}</div>
              <!-- 查询结果 -->
              <el-table
                @row-click="rowClickModel"
                @select="rowCheck"
                v-loading="listLoading"
                :data="list"
                element-loading-text="加载中"
                border
                stripe
                :height="tableHeight"
                header-cell-class-name="header-cell"
                highlight-current-row
                ref="multipleTable"
                :key="oneTableKey"
                @current-change="handleTableRowChange"
              >
                <el-table-column
                  type="selection"
                  v-if="isShowSelect"
                  :fixed="!isRowDrop"
                  width="55"
                  :label="$t('sys.content.gridChoose')+'+'"
                  filed="chose"
                  current-row-key="choose"
                />
                <!-- 选择 -->
                <el-table-column
                  align="center"
                  :fixed="!isRowDrop"
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
                  :sortable="dropTableCols[index].sortable || sortable"
                >
                  <template slot-scope="{row}">
                    <span
                      v-if="dropTableCols[index].isComponent === true && dropTableCols[index].comps"
                    >
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
                        :format="comp.format"
                        :dateType="comp.dateType"
                        :dateOptionsType="comp.dateOptionsType"
                        :contWay="[row,comp.contWay]"
                        :clearable="comp.clearable"
                        :filterable="comp.filterable"
                        :curTableRow="comp.rowFileds?row:null"
                        :rowFileds="comp.rowFileds"
                        :parentFileds="comp.parentFileds || ''"
                        :returnCodeField="comp.returnCodeField"
                        :returnTextField="comp.returnTextField"
                        :isColComp="true"
                      ></component>
                    </span>
                    <span
                      v-else-if="!dropTableCols[index].isComponent && dropTableCols[index].prop === 'isEnable'"
                    >{{(row[dropTableCols[index].prop] === '1') ? '是' : '否' }}</span>
                    <span v-else>{{ row[dropTableCols[index].prop] }}</span>
                  </template>
                </el-table-column>
              </el-table>
              <el-pagination
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
                style="margin-bottom:10px"
              ></el-pagination>
              <div v-show="tableComponents.filter(o => o.type === 'popupsInput').length > 0">
                <component
                  v-for="comp in tableComponents.filter(o => o.type === 'popupsInput')"
                  :key="comp.popups.key"
                  :codeField="comp.codeField"
                  :popupsVisible="comp.popups.state"
                  :comType="comp.popups.type"
                  :is="comp.popups.component"
                  :popupsKey="comp.compKey"
                  :code="formField[comp.codeField]"
                  @changeCode="getComponentCode"
                  :valueObject="curValueObject"
                  :pager-count="pagerCount"
                ></component>
              </div>
            </el-col>
            <!-- 左侧/授权操作 -->
            <el-col :span="18" ref="leftBottomForm">
              <div
                class="filter-container filter-title"
                ref="leftTitleHeight"
              >{{$t('ve.label.AuthorizedOperation')}}</div>
              <component
                v-for="comp in tableComponentSQCZ.filter(o => o.isMust === true)"
                :ref="comp.isRequire ? comp.isRequire+ comp.compKey : comp.compKey"
                :key="comp.compKey"
                :v-show="comp.isShow"
                :codeField="comp.codeField"
                :textField="comp.textField"
                :popupsKey="comp.compKey"
                :is="comp.component"
                :isShow="comp.isShow || true"
                :code="dlrId"
                @changeCode="getComponentCodeXMSQ"
                @focusCode="getFocusCode"
                :span="comp.span || 6"
                :labelName="comp.labelName"
              ></component>
              <div class="filter-button" ref="searcheHeight">
                <el-button
                  v-for="comp in SQtableButtons"
                  :key="comp.compKey"
                  :type="comp.type"
                  @click="comp.clickEvent"
                >{{comp.text}}</el-button>
              </div>
            </el-col>
          </el-row>
        </el-col>
        <!--  授权情况-->
        <el-col :span="8">
          <div class="filter-container filter-title">{{$t('ve.label.AuthorizationStatus')}}</div>
          <el-tabs v-model="activeName2" type="border-card">
            <!-- 授权操作 已授权-->
            <el-tab-pane :label="$t('ve.label.AuthorizedDistributor')" name="a">
              <el-row :gutter="24">
                <!-- 授权操作 已授权-->
                <el-col :span="24">
                  <!-- 查询结果 -->
                  <el-table
                    v-loading="SQCZloading"
                    :data="YSQlist"
                    element-loading-text="加载中"
                    border
                    stripe
                    :height="tableHeight1"
                    header-cell-class-name="header-cell"
                    highlight-current-row
                    ref="multipleTable2"
                    @current-change="handleTableRowChange"
                  >
                    <!-- 序号 -->
                    <el-table-column
                      align="center"
                      :fixed="!isRowDrop"
                      :label="$t('sys.content.gridIndex')"
                      width="60"
                      type="index"
                    />
                    <el-table-column
                      v-for="(col, index) in YSQtableCols.filter(o => o.hidden !== true)"
                      :fixed="(dropYSQtableCols[index].fixed || false) && !isRowDrop"
                      :label="col.label"
                      :key="`col_${index}`"
                      :prop="dropYSQtableCols[index].prop"
                      :width="dropYSQtableCols[index].width || null"
                      :hidden="dropYSQtableCols[index].hidden"
                      :align="dropYSQtableCols[index].align"
                      :sortable="dropYSQtableCols[index].sortable || sortable"
                    ></el-table-column>
                  </el-table>
                </el-col>
              </el-row>
              <!-- 授权操作/取消授权 -->
              <el-row :gutter="20" ref="rightTitleHeight1">
                <el-col :span="24">
                  <div class="filter-container filter-title">{{$t('ve.label.AuthorizedOperation')}}</div>
                  <component
                    v-for="comp in tableComponentSQCZ.filter(o => o.isMust === true)"
                    :ref="comp.isRequire ? comp.isRequire+ comp.compKey : comp.compKey"
                    :key="comp.compKey"
                    :codeField="comp.codeField"
                    :textField="comp.textField"
                    :popupsKey="comp.compKey"
                    :is="comp.component"
                    :isShow="comp.isShow || true"
                    :code="YSQDlrIds"
                    :text="YSQDlrCns"
                    @changeCode="getComponentCodeSQQX"
                    @focusCode="getFocusCode"
                    :span="comp.span || 6"
                    :labelName="comp.labelName"
                  ></component>
                  <div class="filter-button sqbtn" ref="searcheHeight">
                    <el-button
                      v-for="comp in SQtableButtons1"
                      :key="comp.compKey"
                      :type="comp.type"
                      @click="comp.clickEvent"
                    >{{comp.text}}</el-button>
                  </div>
                </el-col>
              </el-row>
            </el-tab-pane>
            <!-- 授权操作 未授权-->
            <el-tab-pane :label="$t('ve.label.UnauthorizedDistributor')" name="b">
              <el-row :gutter="24">
                <!-- 授权操作 未授权-->
                <el-col :span="24">
                  <el-table
                    v-loading="SQCZloading"
                    :data="WSQlist"
                    element-loading-text="加载中"
                    border
                    stripe
                    :height="tableHeight2"
                    header-cell-class-name="header-cell"
                    highlight-current-row
                    ref="multipleTable1"
                    @current-change="handleTableRowChange"
                  >
                    <!-- 序号 -->
                    <el-table-column
                      align="center"
                      :fixed="!isRowDrop"
                      :label="$t('sys.content.gridIndex')"
                      width="60"
                      type="index"
                    />
                    <el-table-column
                      v-for="(col, index) in WSQtableCols.filter(o => o.hidden !== true)"
                      :fixed="(dropWSQtableCols[index].fixed || false) && !isRowDrop"
                      :label="col.label"
                      :key="`col_${index}`"
                      :prop="dropWSQtableCols[index].prop"
                      :width="dropWSQtableCols[index].width || null"
                      :hidden="dropWSQtableCols[index].hidden"
                      :align="dropWSQtableCols[index].align"
                      :sortable="dropWSQtableCols[index].sortable || sortable"
                    ></el-table-column>
                  </el-table>
                </el-col>
              </el-row>
              <!-- 授权操作/授权 -->
              <el-row :gutter="24" ref="rightTitleHeight2">
                <el-col :span="24">
                  <div class="filter-container filter-title">{{$t('ve.label.AuthorizedOperation')}}</div>
                  <component
                    v-for="comp in tableComponentSQCZ.filter(o => o.isMust === true)"
                    :ref="comp.isRequire ? comp.isRequire+ comp.compKey : comp.compKey"
                    :key="comp.compKey"
                    :codeField="comp.codeField"
                    :textField="comp.textField"
                    :popupsKey="comp.compKey"
                    :is="comp.component"
                    :code="WSQDlrIds"
                    :text="WSQDlrCns"
                    @changeCode="getComponentCodeSQ"
                    @focusCode="getFocusCode"
                    :span="comp.span || 6"
                    :labelName="comp.labelName"
                  ></component>
                  <div class="filter-button sqbtn" ref="searcheHeight3">
                    <el-button
                      v-for="comp in SQtableButtons2"
                      :key="comp.compKey"
                      :type="comp.type"
                      @click="comp.clickEvent"
                    >{{comp.text}}</el-button>
                  </div>
                </el-col>
              </el-row>
            </el-tab-pane>
          </el-tabs>
        </el-col>
      </el-row>
    </div>
  </section>
</template>
<script>
import { veApis } from "@/api/graphQLApiList/ve";
import { orgApis } from "@/api/graphQLApiList/org";
import { requestGraphQL } from "@/api/commonRequest";
import { oneTableTemplateMixins } from "@/components/mixins/oneTableTemplateMixins";
import { valueObjectMixins } from "@/components/mixins/valueObjectMixins";
import { CacheConfig } from "@/cache/configCache/index";
export default {
  mixins: [oneTableTemplateMixins, valueObjectMixins],
  components: {},
 
  beforeRouteEnter(to, from, next) {
    CacheConfig.initData(to.path, function() {
      next();
    });
  },
  created() {
    // 联动组件获取父组件传值
    this.$nextTick(() => {
      // 监听
      this.watchComp();
    });
  },
  data() {
    return {
      apiConfig: orgApis.mdmVeCarConfigQueryListForPage,
      // 动态组件-按钮
      tableButtons: [
        {
          btnKey: "btnKey1",
          type: "primary",
          size: "small",
          clickEvent: () => this.queryTable(1),
          text: this.$t("sys.button.query")
        }, //查询
        {
          btnKey: "btnKey2",
          type: "",
          size: "small",
          clickEvent: () => this.reset(),
          text: this.$t("sys.button.reset")
        } //重置
      ],
      // 授权
      SQtableButtons: [
        {
          btnKey: "btnKey3",
          type: "primary",
          size: "small",
          clickEvent: () => this.authorize(),
          text: this.$t("ve.label.Authorized")
        }, //授权
        {
          btnKey: "btnKey4",
          type: "",
          size: "small",
          clickEvent: () => this.resetDlr(),
          text: this.$t("sys.button.reset")
        } //重置
      ],
      // 已授权/取消授权
      SQtableButtons1: [
        {
          btnKey: "btnKey5",
          type: "primary",
          size: "small",
          clickEvent: () => this.changeAutSituation("0"),
          text: this.$t("ve.label.CancellationOfAuthorization")
        } //取消授权
      ],
      // 未授权/授权
      SQtableButtons2: [
        {
          btnKey: "btnKey6",
          type: "primary",
          size: "small",
          clickEvent: () => this.changeAutSituation("1"),
          text: this.$t("ve.label.Authorized")
        } //授权
      ],
      // 车系查询条件
      tableComponents:
        CacheConfig.cacheData[this.$route.path] &&
        CacheConfig.cacheData[this.$route.path].tableComponents.length > 0
          ? CacheConfig.cacheData[this.$route.path].tableComponents
          : [
              {
                compKey: "compKey1",
                labelName: this.$t("org.label.carBrandCn"),
                codeField: "carBrandCode",
                component: () => import("@/components/org/carBrand/carBrand"),
                isRequire: true,
                type: "dropdownList",
                isMust: true
              }, //品牌
              {
                compKey: "compKey2",
                labelName: this.$t("ve.label.carSeriesId"),
                codeField: "carSeriesId",
                parentFileds: "carBrandCode-carBrandCode",
                component: () => import("@/components/org/CarCode"),
                type: "dropdownList",
                isMust: true
              }, //车系编码
              {
                compKey: "compKey3",
                labelName: this.$t("ve.label.carConfig"), // "车型配置",
                codeField: "carConfigId",
                parentFileds:
                  "carBrandCode-carBrandCode|carSeriesId-carSeriesId",
                component: () => import("@/components/org/carTypeConfig"),
                type: "propus",
                isMust: true
              },
              {
                compKey: "compKey4",
                labelName: this.$t("ve.label.supplyStatus"),
                lookuptype: "VE0014",
                codeField: "supplyStatus",
                component: () => import("@/components/org/LookupValue"),
                type: "dropdownList",
                isMust: true
              } // 供应状态
            ],
      // 车型信息查询结果

      tableCols: this.getCols(),
      dropTableCols: this.copyTableCols(this.getCols()),
      YSQtableCols: this.YsqTableCols(),
      dropYSQtableCols: this.copyTableCols(this.YsqTableCols()),
      WSQtableCols: this.WsqTableCols(),
      dropWSQtableCols: this.copyTableCols(this.WsqTableCols()),
      // 授权操作
      tableComponentSQCZ:
        CacheConfig.cacheData[this.$route.path] &&
        CacheConfig.cacheData[this.$route.path].tableComponents.length > 0
          ? CacheConfig.cacheData[this.$route.path].tableComponents
          : [
              {
                compKey: "compKey5",
                span: 12,
                labelName: this.$t("org.label.dlrName"), // "经销商",
                codeField: "dlrId",
                textField: "distributor",
                component: () => import("@/components/org/orgDlr"),
                type: "propus",
                isMust: true
              }
            ],

      index: 0,
      authList: [],
      // 动态组件-查询条件
      // 经销商授权查询
      carSeriesName: "",
      isShowCarSeries2: false,
      isShowCarSeries: false,
      pageTotal1: null,
      dlrId: "",
      YSQDlrIds: "",
      YSQDlrCns: "",
      WSQDlrIds: "",
      WSQDlrCns: "",
      carConfigId: "",
      carSeriesId: "",
      // 右侧经销商弹窗
      listQuery: {
        pageIndex: 1,
        pageSize: 10
      },

      listQuery2: {
        pageIndex: 1,
        pageSize: 10
      },
      selRow: {},
      activeName: "first",
      activeName2: "a",
      toggleParam: false,
      isMul: false,
      list: null,
      YSQlist: null,
      WSQlist: null,
      SQCZloading: false,
      listLoading: false,
      YSQLoading: false,
      WSQLoading: false,
      changeAutDlrId: "",
      changeUnAutDlrId: "",
      tableHeight: 250,
      tableHeight1: 250,
      tableHeight2: 250,
      tableHeaderRowClassName({ row, rowIndex }) {
        if (rowIndex === 0) {
          return "background-color:rgb(239, 239, 239);height:32px;";
        }
      },
      formField: {
        carBrandCode: "",
        carSeriesId: "",
        carConfigId: "",
        supplyStatus: ""
      }
    };
  },

  watch: {
    "formField.carBrandCode"(curVal, oldVal) {
      if (curVal !== oldVal) {
        this.formField.carConfigId=""
      }
    },
  },

  methods: {
    YsqTableCols() {
      var cols = [];
      if (
        CacheConfig.cacheData[this.$route.path] &&
        CacheConfig.cacheData[this.$route.path].tableCols.length > 0
      ) {
        cols = cols.concat(CacheConfig.cacheData[this.$route.path].tableCols);
      } else {
        cols = cols.concat([
          {
            prop: "dlrShortName",
            label: this.$t("ve.label.AuthorizedDistributor"),
            width: null,
            align: "center"
          } //已授权经销商
        ]);
      }
      return cols;
    },
    WsqTableCols() {
      var cols = [];
      if (
        CacheConfig.cacheData[this.$route.path] &&
        CacheConfig.cacheData[this.$route.path].tableCols.length > 0
      ) {
        cols = cols.concat(CacheConfig.cacheData[this.$route.path].tableCols);
      } else {
        cols = cols.concat([
          {
            prop: "dlrShortName",
            label: this.$t("ve.label.UnauthorizedDistributor"),
            width: null,
            align: "center"
          } //未授权经销商
        ]);
      }
      return cols;
    },
    // 已授权经销商
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
            prop: "carBrandCn",
            label: this.$t("ve.label.carBrand"),
            width: 150,
            align: "center"
          }, //品牌名称
          {
            prop: "carBrandCode",
            label: this.$t("ve.label.carBrandId"),
            width: 150,
            align: "center",
            hidden: true
          }, //品牌ID
          {
            prop: "mdmVeCarSeriesExtend.carSeriesCn",
            label: this.$t("ve.label.carSeriesCn"),
            width: 100,
            align: "center"
          }, //车系编码
          {
            prop: "mdmVeCarSeriesExtend.carSeriesCode",
            label: this.$t("ve.label.carSeriesCn"),
            width: 100,
            align: "center"
          }, //车系编码
          {
            prop: "carSeriesId",
            label: this.$t("ve.label.carSeriesId"),
            width: 100,
            align: "center",
            hidden: true
          }, //车系编码
          {
            prop: "carConfigId",
            label: this.$t("ve.label.carConfig"),
            width: 150,
            align: "center",
            hidden: true
          }, //车型配置id
          {
            prop: "carConfigCode",
            label: this.$t("ve.label.carConfig"),
            width: 200,
            align: "center"
          }, //车型配置编码
          {
            prop: "supplyStatusCn",
            label: this.$t("ve.label.supplyStatus"),
            width: 120,
            align: "center"
          }, //供应状态
          {
            prop: "powerTypeName",
            label: this.$t("ve.label.powerType"),
            width: 80,
            align: "center"
          }, //动力类型
          {
            prop: "lastUpdatedDate",
            label: this.$t("ve.label.MaitenanceTime"),
            width: 150,
            align: "center"
          }, //维护时间
          {
            prop: "isNewCarName",
            label: this.$t("ve.label.isNewCar"),
            width: 100,
            align: "center"
          }, //是否新车
          {
            prop: "adaptClimateName",
            label: this.$t("ve.label.adaptClimateCode"),
            width: 120,
            align: "center"
          } //适应气候
        ]);
      }
      return cols;
    },
    watchComp() {
      var that = this;
      that.$utils.watchComp(that, null, null, true);
    },
    setTableHeight(isResize) {
      this.$nextTick(() => {
        // 调用AppMain中的方法设置网格高度（自适应）
        var appMainHeight = this.$utils.getAppMainHeight(
          this.$route.path,
          this
        );
        if (appMainHeight > 0) {
          // 减去tab高度
          var curTableHeight = appMainHeight - 50;
          var curTableHeight1 = appMainHeight - 50;
          var curTableHeight2 = appMainHeight - 50;
          // 减去查询按钮区域高度
          if (this.$refs.conHeight) {
            let conHeight = 0;
            if (this.$refs.conHeight.offsetHeight) {
              conHeight = this.$refs.conHeight.offsetHeight;
            } else {
              conHeight = this.$refs.conHeight.$el.offsetHeight;
            }
            curTableHeight -= conHeight;
            curTableHeight1 -= conHeight;
            curTableHeight2 -= conHeight;
          }
          // 减去查询结果标题区域高度
          if (this.$refs.resultTitleHeight) {
            let resultTitleHeight = 0;
            if (this.$refs.resultTitleHeight.offsetHeight) {
              resultTitleHeight = this.$refs.resultTitleHeight.offsetHeight;
            } else if (this.$refs.resultTitleHeight.$el.offsetHeight) {
              resultTitleHeight = this.$refs.resultTitleHeight.$el.offsetHeight;
            }
            curTableHeight -= resultTitleHeight;
            curTableHeight1 -= resultTitleHeight;
            curTableHeight2 -= resultTitleHeight;
          }
          // 【左】下授权操作
          if (this.$refs.leftBottomForm) {
            let leftBottomForm = 0;
            if (this.$refs.leftBottomForm.offsetHeight) {
              leftBottomForm = this.$refs.leftBottomForm.offsetHeight;
            } else {
              leftBottomForm = this.$refs.leftBottomForm.$el.offsetHeight;
            }
            curTableHeight -= leftBottomForm;
          }
          // 【左】减去分页区域高度
          if (this.$refs.paginationHeight) {
            if (this.$refs.paginationHeight.offsetHeight) {
              curTableHeight -= this.$refs.paginationHeight.offsetHeight;
            } else {
              curTableHeight -= this.$refs.paginationHeight.$el.offsetHeight;
            }
          }
          // 【右】下授权操作表单1
          if (this.$refs.rightTitleHeight1) {
            let rightTitleHeight1 = 0;
            if (this.$refs.rightTitleHeight1.offsetHeight) {
              rightTitleHeight1 = this.$refs.rightTitleHeight1.offsetHeight;
            } else {
              rightTitleHeight1 = this.$refs.rightTitleHeight1.$el.offsetHeight;
            }
            curTableHeight1 -= rightTitleHeight1;
            curTableHeight2 -= rightTitleHeight1;
          }
          // 【右】下授权操作表单2
          if (this.$refs.rightTitleHeight2) {
            let rightTitleHeight2 = 0;
            if (this.$refs.rightTitleHeight2.offsetHeight) {
              rightTitleHeight2 = this.$refs.rightTitleHeight2.offsetHeight;
            } else {
              rightTitleHeight2 = this.$refs.rightTitleHeight2.$el.offsetHeight;
            }
            curTableHeight1 -= rightTitleHeight2;
            curTableHeight2 -= rightTitleHeight2;
          }

          // 减去margin-top/bottom值
          this.tableHeight =
            curTableHeight - 20 /*AppMain margin*/ - 54 /*tab高度、面包屑等*/;
          this.tableHeight1 =
            curTableHeight1 -
            20 /*AppMain margin*/ -
            54 /*tab高度、面包屑等*/ -
            30 /*右下网格margin*/ -
            39 /*右下tab高度*/;
          this.tableHeight2 = this.tableHeight1;
        }
      });
    },
    getComponentCodeSQ(val) {
      this.WSQDlrIds = val;
    },
    getComponentCodeXMSQ(val) {
      this.dlrId = val;
    },
    getComponentCodeSQQX(val) {
      this.YSQDlrIds = val;
    },
    changeAutSituation(status) {
      //status为1则进行授权操作，为0取消授权操作
      //保存表单
      const queryObj = {
        // 保存mutation
        type: "mutation",
        typeParam: "($dataInfo:[InputVeDbVeOrgCarConfigExt])",
        // api配置
        apiConfig: veApis.veDbVeOrgCarConfigMutationSave,
        apiServices: [
          {
            apiServiceParam: "(dataInfo:$dataInfo)"
          }
        ],
        // 条件/实体参数（变量），根据typeParam中的定义配置
        variables: {
          // 当前中台使用的名称有dataInfo、info，具体查看API文档
          dataInfo: {
            carBrandCode: this.selRow.carBrandCode,
            carConfigId: this.selRow.carConfigId,
            dlrId: status === "1" ? this.WSQDlrIds : this.YSQDlrIds,
            authStatsCode: status
          }
        }
      };
      // 转换了中台请求格式数据
      var paramD = this.$getParams(queryObj);
      // 调用中台API方法（可复用）
      this.$requestGraphQL(paramD).then(response => {
        if (response.data[queryObj.apiConfig.ServiceCode].result === "1") {
          // 保存成功
          this.$message({
            message: "操作成功",
            type: "success",
            uration: 2000
          });
          this.queryTableYSQ();
        } else {
          // 保存失败
          // this.sendCode('0')
          this.$message({
            message:
              "操作失败：" + response.data[queryObj.apiConfig.ServiceCode].msg,
            type: "warn",
            uration: 2000
          });
          this.queryTableYSQ();
        }
      });
    },
    // 列点击
    rowClickModel(val) {
      this.selRow = val;
      this.queryTableYSQ();
    },
    rowCheck(selection) {
      this.selRow = selection[selection.length - 1];
    },
    queryTableYSQ() {
      const that = this;
      that.SQCZloading = true;
      var rowList = this.selRow;
      let obj = {};
      obj.carBrandCode = rowList.carBrandCode;
      obj.carConfigId = rowList.carConfigId;
      let queryObj = {
        // api配置
        apiConfig: veApis.veDbVeOrgCarConfigQueryIsExist,
        // 需要调用的API服务配置
        apiServices: [
          {
            //表格中台返回网格的字段
            apiQueryRow: [
              "dlrId",
              "dlrShortName",
              "authStatsCode",
              "updateControlId"
            ]
          }
        ],
        //条件/实体参数（变量），根据typeParam中的定义配置
        variables: {
          // pageSize: that.listQuery2.pageSize,
          // pageIndex:that.listQuery2.pageIndex,
          //当前中台使用的名称有dataInfo、info，具体查看API文档
          dataInfo: obj
        }
      };
      //转换了中台请求格式数据
      var paramD = that.$getParams(queryObj);
      // 调用中台API方法（可复用）
      requestGraphQL(paramD).then(response => {
        if (
          response.data[queryObj.apiConfig.ServiceCode].result === "1" &&
          response.data[queryObj.apiConfig.ServiceCode].rows
        ) {
          that.pageTotal =
            response.data[queryObj.apiConfig.ServiceCode].records;
          let arr = [];
          arr = response.data[queryObj.apiConfig.ServiceCode].rows;
          this.YSQlist = [];
          this.WSQlist = [];
          for (let j of arr) {
            if (j.authStatsCode == "1") {
              this.YSQlist.push(j);
            } else {
              this.WSQlist.push(j);
            }
          }
          let ysqList = this.YSQlist;
          let ysqDlrIds = [];
          let ysqDlrCns = [];
          for (let i = 0; i < ysqList.length; i++) {
            ysqDlrIds.push(ysqList[i].dlrId);
            ysqDlrCns.push(ysqList[i].dlrShortName);
          }
          this.YSQDlrIds = ysqDlrIds.join();
          this.YSQDlrCns = ysqDlrCns.join();
          //
          let wsqList = this.WSQlist;
          let wsqDlrIds = [];
          let wsqDlrCns = [];
          for (let i = 0; i < wsqList.length; i++) {
            wsqDlrIds.push(wsqList[i].dlrId);
            wsqDlrCns.push(wsqList[i].dlrShortName);
          }
          this.WSQDlrIds = wsqDlrIds.join();
          this.WSQDlrCns = wsqDlrCns.join();
          that.tableKey3 = that.tableKey3 + 1;
          that.SQCZloading = false;
        }
      });
    },
    // 授权
    authorize() {
      const selectData = this.$refs.multipleTable.selection;
      if (selectData.length < 1) {
        this.$alert(this.$t("ve.tips.tips01"), "提示", {
          //业务岗位列表不能为空
          confirmButtonText: this.$t("org.label.OK"), //确定
          type: "warning"
        });
      }
      let queryObj = "";
      for (var index in selectData) {
        //保存表单
        queryObj = {
          // 保存mutation
          type: "mutation",
          typeParam: "($dataInfo:[InputVeDbVeOrgCarConfigExt])",
          // api配置
          apiConfig: veApis.veDbVeOrgCarConfigMutationSave,
          apiServices: [
            {
              apiServiceParam: "(dataInfo:$dataInfo)"
            }
          ],
          // 条件/实体参数（变量），根据typeParam中的定义配置
          variables: {
            // 当前中台使用的名称有dataInfo、info，具体查看API文档
            dataInfo: {
              carBrandCode: selectData[index].carBrandCode,
              dlrId: this.dlrId,
              carConfigId: selectData[index].carConfigId,
              carSeriesId: selectData[index].carSeriesId,
              updateControlId: selectData[index].updateControlId,
              authStatsCode: "1"
            }
          }
        };
        // 转换了中台请求格式数据
        var paramD = this.$getParams(queryObj);
      }
      // 调用中台API方法（可复用）
      this.$requestGraphQL(paramD).then(response => {
        if (response.data[queryObj.apiConfig.ServiceCode].result === "1") {
          // 保存成功
          const promise = new Promise((resolve, reject) => {
            this.$message({
              message: "授权成功",
              type: "success",
              uration: 2000
            });
            success: res => {
              resolve(res);
            };
          });
          promise.then(res => {
            this.queryTableYSQ();
            this.resetDlr();
          });
        } else {
          // 保存失败
          // this.sendCode('0')
          this.$message({
            message:
              "保存失败：" + response.data[queryObj.apiConfig.ServiceCode].msg,
            type: "warn",
            uration: 2000
          });
        }
        setTimeout(() => {
          this.queryTableYSQ();
          this.resetDlr();
        }, 300);
      });
    },
    resetDlr() {
      this.dlrId = "";
    }
  }
};
</script>
<style lang="scss" scoped>
/deep/.sqcxbtn {
  position: absolute;
  top: 30px;
  right: 26px;
  width: 22%;
}
/deep/.filter-params .el-col {
  padding: 0;
}
</style>
