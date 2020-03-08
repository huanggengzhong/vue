<template>
  <section class="carManual">
    <!-- 采购单手工分配 -->
    <el-dialog :title="$t('ve.label.caigoudanShougong')" :visible.sync="isVisible" width="1000px" center @close="sendCode" @open="openDialog">
      <div class="filter-container filter-title">
        <!-- 查询条件 -->
        <div style="float:right">
          <!-- 查询 -->
          <el-button type="primary" size="small" @click="queryTable(1)">{{$t('sys.button.import')}}</el-button>
          <el-button size="small">{{$t('ve.label.deliverY')}}</el-button>
          <!-- 分配 -->
          <el-button size="small" @click="reset">{{$t('sys.button.reset')}}</el-button>
          <!-- 重置 -->
        </div>
      </div>

      <div class="filter-container filter-params">
        <el-row :gutter="26">
          <el-col :span="22">
            <carBrand
              :span="7"
              :isMul="false"
              code="1"
              @changeCode="getBrandCode"
              :key="carBrandKey"
            />

            <carTypeConfig :popupsVisible="carTypeConfigVisible" @changeCode="changeCarTypeConfig" />
            <carColor
              :popupsVisible="carColorVisible"
              @changeCode="getCarColorCode"
              :labelName="$t('org.label.carColor')"
              :isMul="false"
              :span="7"
            />
            <!-- 车身颜色 -->
            <!-- <el-col :span="7">
              <label></label>
              <el-input
                suffix-icon="el-icon-search"
                placeholder="请选择"
                v-model="formFieldName.carColorName"
                @focus="carColorModal"
                size="small"
              />
            </el-col>-->
            <el-col :span="2">
              <el-button
                icon="el-icon-plus"
                @click="toggleParam = !toggleParam"
                class="moreParam"
              >{{$t('sys.content.more')}}</el-button>
              <!-- 更多 -->
            </el-col>
            <el-col :span="22" v-show="toggleParam" class="toggleParam" style="z-index:1000">
              <el-row>
                <InteriorColor :span="7" @changeCode="changeInteriorCode" />
                <el-col :span="7">
                  <label>vin码</label>
                  <el-input placeholder="请选择" size="small" />
                </el-col>
                <!-- <el-col :span="7"> -->
                <!-- <label>仓库</label>
                <el-input suffix-icon="el-icon-search" placeholder="请选择" size="small" />-->
                <!-- </el-col> -->
                <wareHouseMulti
                  lookuptype="VE0015"
                  :span="7"
                  :isMul="false"
                  @changeCode="getWareHouseCode"
                  :key="wareHouseKey"
                />
                <!-- 库存类型 -->
                <lookUpValue
                :labelName="$t('ve.label.stockTypeCode')"
                  lookuptype="VE0079"
                  :span="7"
                  :isMul="false"
                  @changeCode="getHouseTypeCode"
                  :key="HouseKey"
                />
                <!-- ETPT车 -->
                <lookUpValue
                  :labelName="$t('ve.label.getETPTCode')"
                  lookuptype="VE0079"
                  :span="7"
                  :isMul="false"
                  @changeCode="getETPTCode"
                  :key="ETPTKey"
                />
                <!-- 限制状态 -->
                <lookUpValue
                  :labelName="$t('ve.label.getLimitStateId')"
                  lookuptype="VE0079"
                  :span="7"
                  :isMul="false"
                  @changeCode="getLimitStateId"
                  :key="xzStateKey"
                />
                <!-- 限制原因 -->
                <lookUpValue
                  :labelName="$t('ve.label.getLimitReasonId')"
                  lookuptype="VE0079"
                  :span="7"
                  :isMul="false"
                  @changeCode="getLimitReasonId"
                  :key="xzReasonKey"
                />
                <!-- <el-col :span="7">
                  <label>库存类型</label>
                  <el-input suffix-icon="el-icon-search" placeholder="请选择" size="small" />
                </el-col>
                <el-col :span="7">
                  <label>ETPT车</label>
                  <el-input suffix-icon="el-icon-search" placeholder="请选择" size="small" />
                </el-col>-->
                <!-- <el-col :span="7">
                  <label>限制状态</label>
                  <el-input suffix-icon="el-icon-search" placeholder="请选择" size="small" />
                </el-col>
                <el-col :span="7">
                  <label>限制原因</label>
                  <el-input suffix-icon="el-icon-search" placeholder="请选择" size="small" />
                </el-col>-->
                <!-- 开始日期 -->
                <datePicker :labelName="$t('ve.label.kaishiri')" :span="7" />
                <datePicker :labelName="$t('ve.label.jieshuri')" :span="7" />
              </el-row>
              <!-- 结束日期 -->
            </el-col>
          </el-col>
        </el-row>
      </div>
      <!-- 查询结果 -->
      <div class="filter-container filter-title">{{$t('org.label.queryResult')}}</div>

      <el-table
        border
        stripe
        v-loading="listLoading"
        :header-cell-style="tableHeaderRowClassName"
        :data="list2"
        height="180px"
        :highlight-current-row="!isMul"
      >
        <el-table-column width="60" type="selection" fixed></el-table-column>
        <el-table-column label="序号" fixed width="60" type="index"></el-table-column>
        <!-- 品牌 -->
        <el-table-column :labelName="$t('org.label.carBrand')" align="center" width="130" current-row-key="carBrandCode">
          <template slot-scope="scope">{{ scope.row.carBrandCn }}</template>
        </el-table-column>
        <!-- 车系 -->
        <el-table-column :labelName="$t('org.label.carSerise')" align="center" width="100" current-row-key="carSeriesName">
          <template slot-scope="scope">{{ scope.row.carSeriesCode }}</template>
        </el-table-column>
        <!-- 车型配置 -->
        <el-table-column :labelName="$t('ve.label.carConfig')" align="center" width="150" current-row-key="carTypeName">
          <template slot-scope="scope">{{ scope.row.carConfigCode }}</template>
        </el-table-column>
        <!-- 车身颜色 -->
        <el-table-column :labelName="$t('org.label.carColor')" align="center" width="100" current-row-key="carColorName">
          <template slot-scope="scope">{{ scope.row.carColorCode }}</template>
        </el-table-column>
        <!-- 内饰色 -->
        <el-table-column :labelName="$t('org.label.carIncolor')" align="center" width="100" current-row-key="carIncolorName">
          <template slot-scope="scope">{{ scope.row.carIncolorCode }}</template>
        </el-table-column>
        <!-- VIN -->
        <el-table-column :labelName="$t('org.label.vin')" align="center" width="180" current-row-key="vin">
          <template slot-scope="scope">{{ scope.row.vin }}</template>
        </el-table-column>
        <!-- 仓库 -->
        <el-table-column :labelName="$t('ve.label.warnHome')" align="center" width="100" current-row-key="wareHouse">
          <template slot-scope="scope">{{ scope.row.carHouseCode }}</template>
        </el-table-column>
        <!-- 预计下线时间 -->
        <el-table-column :labelName="$t('ve.label.firstPreInStockDate')" align="center" width="150" current-row-key="offLineDate">
          <template slot-scope="scope">{{ scope.row.firstPreInStockDate }}</template>
        </el-table-column>
        <!-- 入库时间 -->
        <el-table-column :labelName="$t('ve.label.inStockDate')" align="center" width="100" current-row-key="preInStockDate">
          <template slot-scope="scope">{{ scope.row.inStockDate }}</template>
        </el-table-column>
        <!-- ETPT -->
        <el-table-column :labelName="$t('ve.label.isEtPt')" align="center" width="100" current-row-key="ETPT">
          <template slot-scope="scope">{{ scope.row.isEtPt }}</template>
        </el-table-column>
        <!-- 限制状态 -->
        <el-table-column :labelName="$t('ve.label.hostLimitState')" align="center" width="100" current-row-key="xianzhiState">
          <template slot-scope="scope">{{ scope.row.hostLimitState }}</template>
        </el-table-column>
        <!-- 限制原因 -->
        <el-table-column :labelName="$t('ve.label.limitReason')" align="center" width="100" current-row-key="xainzhiReason">
          <template slot-scope="scope">{{ scope.row.limitReason }}</template>
        </el-table-column>
        <!-- 限制原因备注 -->
        <el-table-column
          :labelName="$t('ve.label.xainzhiReasonBz')"
          align="center"
          width="150"
          current-row-key="xainzhiReasonBz"
        >
          <template slot-scope="scope">{{ scope.row.remark }}</template>
        </el-table-column>
        <!-- 库存类型 -->
        <el-table-column :labelName="$t('ve.label.carHouseTypeName')" align="center" width="100" current-row-key="carHouseType">
          <template slot-scope="scope">{{ scope.row.carHouseTypeName }}</template>
        </el-table-column>
        <!-- 质量状态 -->
        <el-table-column :labelName="$t('ve.label.quatityName')" align="center" width="100" current-row-key="zhiliangState">
          <template slot-scope="scope">{{ scope.row.quatityName }}</template>
        </el-table-column>
      </el-table>
      <el-pagination
        background
        layout="prev, pager, next, sizes, ->, total"
        prev-text="上一页"
        next-text="下一页"
        :page-sizes="[10, 20, 30]"
        :page-size="10"
        :total="list?list.length:0"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
<!-- 待分配采购单 -->
      <div class="filter-container filter-title">{{$t('ve.label.daifenpeicaigou')}}</div>

      <el-table
        border
        stripe
        v-loading="listLoading"
        :header-cell-style="tableHeaderRowClassName"
        :data="list"
        height="135px"
        :highlight-current-row="!isMul"
      >
        <el-table-column fixed label="序号" width="60" type="index"></el-table-column>
        <!-- 库存类型 -->
        <el-table-column :label="$t('ve.label.carHouseTypeName')" align="center" width="100" current-row-key="stockType">
          <template slot-scope="scope">{{ scope.row.stockType }}</template>
        </el-table-column>
        <!-- 品牌 -->
        <el-table-column :label="$t('org.label.carBrand')" align="center" width="120" current-row-key="carBrandCn">
          <template slot-scope="scope">{{ scope.row.carBrandCn }}</template>
        </el-table-column>
        <!-- 经销商 -->
        <el-table-column :label="$t('org.label.dlrtName')" align="center" width="100" current-row-key="dlrShortName">
          <template slot-scope="scope">{{ scope.row.dlrShortName }}</template>
        </el-table-column>
        <!-- 采购单号 -->
        <el-table-column :label="$t('ve.label.purOrderCode')" align="center" width="180" current-row-key="purOrderCode">
          <template slot-scope="scope">{{ scope.row.purOrderCode }}</template>
        </el-table-column>
        <!-- 采购子单号 -->
        <el-table-column :label="$t('ve.label.purOrderDCode')" align="center" width="185" current-row-key="purOrderDCode">
          <template slot-scope="scope">{{ scope.row.purOrderDCode }}</template>
        </el-table-column>
        <!-- 子单状态 -->
        <el-table-column :label="$t('ve.label.purState')" align="center" width="100" current-row-key="purState">
          <template slot-scope="scope">{{ scope.row.purState }}</template>
        </el-table-column>
        <!-- 采购单类型 -->
        <el-table-column :label="$t('ve.label.purOrderTypeName')" align="center" width="100" current-row-key="purType">
          <template slot-scope="scope">{{ scope.row.purOrderTypeName }}</template>
        </el-table-column>
        <!-- 下单时间 -->
        <el-table-column :label="$t('ve.label.xiadanTime')" align="center" width="100" current-row-key="confirDate">
          <template slot-scope="scope">{{ scope.row.confirDate }}</template>
        </el-table-column>
        <!-- 确认时间 -->
        <el-table-column :label="$t('ve.label.confirDate')" align="center" width="100" current-row-key="confirDate">
          <template slot-scope="scope">{{ scope.row.confirDate }}</template>
        </el-table-column>
        <!-- 资金类型 -->
        <el-table-column :label="$t('ve.label.capitalType')" align="center" width="150" current-row-key="cashTypeName">
          <template slot-scope="scope">{{ scope.row.cashTypeName }}</template>
        </el-table-column>
        <!-- 采购价格 -->
        <el-table-column :label="$t('ve.label.carProductPrice')" align="center" width="100" current-row-key="carProductPrice">
          <template slot-scope="scope">{{ scope.row.carProductPrice }}</template>
        </el-table-column>
        <!-- 车型配置 -->
        <el-table-column :label="$t('org.label.carConfig')" align="center" width="100" current-row-key="carConfigName">
          <template slot-scope="scope">{{ scope.row.carConfigName }}</template>
        </el-table-column>
        <!-- 车身颜色 -->
        <el-table-column :label="$t('org.label.carColor')" align="center" width="100" current-row-key="carColorName">
          <template slot-scope="scope">{{ scope.row.carColorName }}</template>
        </el-table-column>
        <!-- 内饰色 -->
        <el-table-column :label="$t('org.label.carIncolor')" align="center" width="100" current-row-key="carIncolorName">
          <template slot-scope="scope">{{ scope.row.carIncolorName }}</template>
        </el-table-column>
        <!-- 颜色价 -->
        <el-table-column :label="$t('org.label.colorPrice')" align="center" width="150" current-row-key="carColorPrice">
          <template slot-scope="scope">{{ scope.row.carColorPrice }}</template>
        </el-table-column>
        <!-- 内饰价 -->
        <el-table-column :label="$t('org.label.inColorPrice')" align="center" width="100" current-row-key="carIncolorPrice">
          <template slot-scope="scope">{{ scope.row.carIncolorPrice }}</template>
        </el-table-column>
        <!-- 补贴价 -->
        <el-table-column :label="$t('org.label.countrySubsidy')" align="center" width="100" current-row-key="countrySubsidy">
          <template slot-scope="scope">{{ scope.row.countrySubsidy }}</template>
        </el-table-column>
        <!-- 产品价格 -->
        <el-table-column :label="$t('ve.label.proPrice')" align="center" width="100" current-row-key="carPrice">
          <template slot-scope="scope">{{ scope.row.carPrice }}</template>
        </el-table-column>
        <!-- 车系 -->
        <el-table-column :label="$t('org.label.carSerise')" align="center" width="100" current-row-key="carSeriseName">
          <template slot-scope="scope">{{ scope.row.carSeriseName }}</template>
        </el-table-column>
        <!-- 车型 -->
        <el-table-column :label="$t('org.label.carType')" align="center" width="100" current-row-key="carTypeName">
          <template slot-scope="scope">{{ scope.row.carTypeName }}</template>
        </el-table-column>
        <!-- 发车仓库 -->
        <el-table-column :label="$t('ve.label.carWarseHouse')" align="center" width="100" current-row-key="carWarseHouse">
          <template slot-scope="scope">{{ scope.row.carWarseHouse }}</template>
        </el-table-column>
        <!-- 送货方式 -->
        <el-table-column :label="$t('ve.label.tranportName')" align="center" width="100" current-row-key="tranportName">
          <template slot-scope="scope">{{ scope.row.tranportName }}</template>
        </el-table-column>
        <!-- 搬入地 -->
        <el-table-column :label="$t('ve.label.houseAddr')" align="center" width="100" current-row-key="houseAddr">
          <template slot-scope="scope">{{ scope.row.houseAddr }}</template>
        </el-table-column>
        <!-- 下单人 -->
        <el-table-column :label="$t('ve.label.creator')" align="center" width="100" current-row-key="creator">
          <template slot-scope="scope">{{ scope.row.creator }}</template>
        </el-table-column>
      </el-table>
    </el-dialog>
  </section>
</template>
<script>
import { veApis } from "@/api/graphQLApiList/ve";
import { requestGraphQL } from "@/api/commonRequest";
import carBrand from "@/components/org/carBrand/carBrand";
import carColor from "@/components/org/carColor";
import carTypeConfig from "@/components/org/carTypeConfig";
import InteriorColor from "@/components/org/TrimPopupColor";
import datePicker from "@/components/org/datePicker/datePicker";
import lookUpValue from "@/components/org/LookupValue";
import wareHouseMulti from "@/components/ve/wareHouseMulti/wareHouseMulti";
export default {
  components: {
    carBrand,
    carColor,
    InteriorColor,
    carTypeConfig,
    datePicker,
    lookUpValue,
    wareHouseMulti
  },
  props: {
    isVisible: {
      type: Boolean,
      default: function() {
        return false;
      }
    },
    isMul: {
      type: Boolean,
      default: function() {
        return false;
      }
    },
    listDialog:{
      type: Object,default:{}
    },
  },
  watch: {
    formField(val) {
      this.carBrandKey = this.carBrandKey + 1;
      this.wareHouseKey = this.wareHouseKey + 1;
      this.HouseKey = this.HouseKey + 1;
      this.ETPTKey = this.ETPTKey + 1;
      this.xzStateKey = this.xzStateKey + 1;
      this.xzReasonKey = this.xzReasonKey + 1;
    }
  },
  data() {
    return {
      toggleParam: false,
      InteriorColorVisible: false,
      carTypeConfigVisible: false,
      carColorVisible: false,
      carBrandKey: "a",
      wareHouseKey: "c",
      HouseKey: "b",
      ETPTKey: "e",
      xzStateKey: "f",
      xzReasonKey: "g",
      listLoading: false,
      list: [],
      list2: null,
      codeInside: {
        code: [],
        name: []
      },
      formFieldName: {
        carColorName: "",
        carConfigName: "",
        carInColorName: ""
      },
      formField: {
        carColorCode: "",
        carConfigId: "",
        carInColorCode: "",
        carBrandCode: "",
        carStockHouseId: "",
        houseTypeId: "",
        ETPTId: "",
        limitStateId: "",
        limitReasonId: ""
      },
      listQuery: {
        pageIndex: 1,
        pageSize: 10
      },
      tableHeaderRowClassName({ row, rowIndex }) {
        if (rowIndex === 0) {
          return "background-color:rgb(239, 239, 239);height:32px;";
        }
      }
    };
  },
  created() {
  },
  methods: {
    queryTable(page) {
      const that = this;
      that.currentRow = null;
      that.listLoading = true;
      let queryObj = {
        // api配置
        apiConfig: veApis.varCarLimitQry,
        // 需要调用的API服务配置
        apiServices: [
          {
            //表格中台返回网格的字段
            apiQueryRow: [
              "carBrandCn",
              "carSeriesCode",
              "carConfigCode",
              "carColorCode",
              "carIncolorCode",
              "vin",
              "carHouseCode",
              "firstPreInStockDate",
              "inStockDate",
              "isEtPt",
              "hostLimitState",
              "limitReason",
              "remark",
              "carHouseTypeName",
              "quatityName",
              "updateControlId"
            ]
          }
        ],
        //条件/实体参数（变量），根据typeParam中的定义配置
        variables: {
          pageSize: that.listQuery.pageSize,
          pageIndex: page || that.listQuery.pageIndex,
          //当前中台使用的名称有dataInfo、info，具体查看API文档
          dataInfo: that.formField
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
          if (page) {
            //查询完返回指定的page页数
            that.listQuery.pageIndex = page;
          }
          that.pageTotal =
            response.data[queryObj.apiConfig.ServiceCode].records;
          that.list2 = response.data[queryObj.apiConfig.ServiceCode].rows;
          that.listLoading = false;
        }
      });
    },
    reset() {
      this.formFieldName = {
        carColorName: "",
        carConfigName: "",
        carInColorName: ""
      };
      this.formField = {
        carBrandCode: "",
        carColorCode: "",
        carConfigId: "",
        carInColorCode: "",
        carStockHouseId: "",
        houseTypeId: "",
        ETPTId: "",
        limitStateId: "",
        limitReasonId: ""
      };
    },
    handleSizeChange(val) {
      this.listQuery.pageSize = val;
      //   this.fetchData()
    },
    handleCurrentChange(val) {
      this.listQuery.pageIndex = val;
      //    this.fetchData()
    },
    sendCode() {
      this.$emit("changeCode");
    },
    getBrandCode(val) {
      this.formField.carBrandCode = val;
    },

    getCarColorCode(val, text) {
      console.log(val, text);
      debugger
      this.formField.carColorCode = val.code;
      this.formFieldName.carColorName = val.name;
      this.carColorVisible = false;
    },
    carColorModal() {
      this.carColorVisible = true;
    },
    changeCarTypeConfig(val) {
      this.formField.carConfigId = val;
      this.carTypeConfigVisible = false;
    },
    showCarConfig() {
      this.carTypeConfigVisible = true;
    },
    changeInteriorCode(val) {
      this.formField.carInColorCode = val.code;
      this.formFieldName.carInColorName = val.name;
      this.InteriorColorVisible = false;
    },
    InteriorColorModel() {
      this.InteriorColorVisible = true;
    },
    getWareHouseCode(val, text) {
      console.log(val);
      console.log(text);
      this.formField.carStockHouseId = val;
    },
    getHouseTypeCode(val) {
      this.formField.houseTypeId = val;
    },
    getETPTCode(val) {
      this.formField.ETPTId = val;
    },
    getLimitStateId(val) {
      this.formField.limitStateId = val;
    },
    getLimitReasonId(val) {
      this.formField.limitReasonId = val;
    },
    openDialog(){
      this.list=[];
    this.list.push(this.listDialog);
    }
  }
};
</script>
