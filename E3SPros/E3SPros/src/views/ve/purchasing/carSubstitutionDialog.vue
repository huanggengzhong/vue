<template>
  <section class="carManual">
    <el-dialog
      :title="$t('ve.label.carReplacement')/*车辆置换*/"
      :visible.sync="isVisible"
      width="1000px"
      center
      @close="sendCode" 
      :close-on-click-modal="false"
      :append-to-body="true"
      @open="openDialog"
    >
      <el-row>
        <el-col>
          <div style="float:right">
            <el-button type="primary" size="small" @click="queryTable(1)">{{$t('sys.button.query')/*查询*/}}</el-button>
            <el-button size="small" @click="replace">{{$t('sys.button.replacement')/*置换*/}}</el-button>
            <el-button size="small" @click="reset">{{$t('sys.button.reset')/*重置*/}}</el-button>
          </div>
        </el-col>
      </el-row>
      <div class="filter-container filter-title">{{$t('sys.content.searchTitle')/*查询条件*/}}</div>

      <div class="filter-container filter-params">
        <el-row>
          <el-col :span="22">
            <carBrand :span="6" :isMul="false" @changeCode="getBrandCode" :key="carBrandKey" />
            <carTypeConfig
              :popupsVisible="carTypeConfigVisible"
              @changeCode="changeCarTypeConfig"
              :span="6"
            />
            <carColor
              :popupsVisible="carColorVisible"
              @changeCode="getCarColorCode"
              :labelName="$t('org.label.carColor')/*车身颜色*/"
              :isMul="false"
              :span="6"
            />
          </el-col>
            <el-col :span="2">
              <el-button
                icon="el-icon-plus"
                @click="toggleParam = !toggleParam"
                class="moreParam"
              >{{$t('sys.content.more')/*更多*/}}</el-button>
            </el-col>
          <el-col :span="22" v-show="toggleParam" class="toggleParam" style="z-index:1000">
            <el-row>
              <InteriorColor :span="7" @changeCode="changeInteriorCode" />
              <el-col :span="7">
                <label>{{$t('org.label.carIncolor')/*内饰色*/}}</label>
                <el-input
                  suffix-icon="el-icon-search"
                  :placeholder="$t('sys.tips.esTip0')/*请选择*/"
                  size="small"
                  @focus="InteriorColorModel"
                  v-model="formFieldName.carInColorName"
                />
              </el-col>
              <el-col :span="7">
                <label>{{$t('org.label.vin')/*vin码*/}}</label>
                <el-input :placeholder="$t('sys.tips.esTip0')/*请选择*/" size="small" v-model="formField.vin"/>
              </el-col>
              <wareHouseMulti
                lookuptype="VE0015"
                :span="7"
                :isMul="false"
                @changeCode="getWareHouseCode"
                :key="wareHouseKey"
              />
              <lookUpValue
                :labelName="$t('ve.label.carHouseType')/*库存类型*/"
                lookuptype="VE0079"
                :span="7"
                :isMul="false"
                @changeCode="getHouseTypeCode"
                :key="HouseKey"
              />
              <lookUpValue
                :labelName="$t('ve.label.getETPTCode')/*ETPT车*/"
                lookuptype="VE0079"
                :span="7"
                :isMul="false"
                @changeCode="getETPTCode"
                :key="ETPTKey"
              />
              <lookUpValue
                :labelName="$t('ve.label.getLimitStateId')/*限制状态*/"
                lookuptype="VE0079"
                :span="7"
                :isMul="false"
                @changeCode="getLimitStateId"
                :key="xzStateKey"
              />
              <lookUpValue
                :labelName="$t('ve.label.getLimitReasonId')/*限制原因*/"
                lookuptype="VE0079"
                :span="7"
                :isMul="false"
                @changeCode="getLimitReasonId"
                :key="xzReasonKey"
              />
              <datePicker :labelName="$t('ve.label.kaishiri')/*开始日期*/" :span="7" />
              <datePicker :labelName="$t('ve.label.jieshuri')/*结束日期*/" :span="7" />
            </el-row>
          </el-col>
        </el-row>
      </div>
      <div class="filter-container filter-title">{{$t('sys.content.gridTitle')/*查询结果*/}}</div>
      <el-table
        border
        stripe
        v-loading="listLoading"
        :header-cell-style="tableHeaderRowClassName"
        :data="list2"
        height="180px"
        ref="multipleTable"
        :highlight-current-row="!isMul"
        @selection-change="handleSelectionChange"
      >
        <el-table-column width="60" type="selection" fixed></el-table-column>
        <el-table-column :label="$t('sys.content.gridIndex')/*序号*/" fixed width="60" type="index"></el-table-column>
        <el-table-column :label="$t('org.label.carBrandCn')/*品牌*/" align="center" width="130" current-row-key="carBrandCode">
          <template slot-scope="scope">{{ scope.row.carBrandCn }}</template>
        </el-table-column>
        <el-table-column :label="$t('org.label.carSeriesId')/*车系*/" align="center" width="100" current-row-key="carSeriesName">
          <template slot-scope="scope">{{ scope.row.carSeriesCode }}</template>
        </el-table-column>
        <el-table-column :label="$t('org.label.carConfig')/*车型配置*/" align="center" width="150" current-row-key="carTypeName">
          <template slot-scope="scope">{{ scope.row.carConfigCode }}</template>
        </el-table-column>
        <el-table-column :label="$t('org.label.carColor')/*车身颜色*/" align="center" width="100" current-row-key="carColorName">
          <template slot-scope="scope">{{ scope.row.carColorCode }}</template>
        </el-table-column>
        <el-table-column :label="$t('org.label.carIncolor')/*内饰色*/" align="center" width="100" current-row-key="carIncolorName">
          <template slot-scope="scope">{{ scope.row.carIncolorCode }}</template>
        </el-table-column>
        <el-table-column :label="$t('org.label.vin')/*VIN码*/" align="center" width="180" current-row-key="vin">
          <template slot-scope="scope">{{ scope.row.vin }}</template>
        </el-table-column>
        <el-table-column :label="$t('org.label.warnHome')/*仓库*/" align="center" width="100" current-row-key="wareHouse">
          <template slot-scope="scope">{{ scope.row.carHouseCode }}</template>
        </el-table-column>
        <el-table-column :label="$t('ve.label.firstPreInStockDate')/*预计下线时间*/" align="center" width="150" current-row-key="offLineDate">
          <template slot-scope="scope">{{ scope.row.firstPreInStockDate }}</template>
        </el-table-column>
        <el-table-column :label="$t('ve.label.inStockDate')/*入库时间*/" align="center" width="100" current-row-key="preInStockDate">
          <template slot-scope="scope">{{ scope.row.inStockDate }}</template>
        </el-table-column>
        <el-table-column :label="$t('ve.label.isEtPt')/*ETPT*/" align="center" width="100" current-row-key="ETPT">
          <template slot-scope="scope">{{ scope.row.isEtPt }}</template>
        </el-table-column>
        <el-table-column :label="$t('ve.label.hostLimitState')/*限制状态*/" align="center" width="100" current-row-key="xianzhiState">
          <template slot-scope="scope">{{ scope.row.hostLimitState }}</template>
        </el-table-column>
        <el-table-column :label="$t('ve.label.limitReason')/*限制原因*/" align="center" width="100" current-row-key="xainzhiReason">
          <template slot-scope="scope">{{ scope.row.limitReason }}</template>
        </el-table-column>
        <el-table-column
          :label="$t('ve.label.xainzhiReasonBz')/*限制原因备注*/"
          align="center"
          width="150"
          current-row-key="xainzhiReasonBz"
        >
          <template slot-scope="scope">{{ scope.row.remark }}</template>
        </el-table-column>
        <el-table-column :label="$t('ve.label.carHouseTypeName')/*库存类型*/" align="center" width="100" current-row-key="carHouseType">
          <template slot-scope="scope">{{ scope.row.carHouseTypeName }}</template>
        </el-table-column>
        <el-table-column :label="$t('org.label.quatityName')/*质量状态*/" align="center" width="100" current-row-key="zhiliangState">
          <template slot-scope="scope">{{ scope.row.quatityName }}</template>
        </el-table-column>
      </el-table>
      <el-pagination
        background
        layout="prev, pager, next, sizes, ->, total"
        :prev-text="$t('sys.content.prevPage')/*上一页*/"
        :next-text="$t('sys.content.nextPage')/*下一页*/"
        :page-sizes="[10, 20, 30]"
        :page-size="10"
        :total="list2?list2.length:0"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />

      <div class="filter-container filter-title">{{$t('ve.label.daifenpeicaigou')/*待分配采购单*/}}</div>

      <el-table
        border
        stripe
        v-loading="listLoading"
        :header-cell-style="tableHeaderRowClassName"
        :data="list"
        height="135px"
        :highlight-current-row="!isMul"
      >
        <el-table-column fixed :label="$t('sys.content.gridIndex')/*序号*/" width="60" type="index"></el-table-column>
        <el-table-column :label="$t('org.label.vin')/*VIN码*/" align="center" width="120" current-row-key="vin">
          <template slot-scope="scope">{{ scope.row.vin }}</template>
        </el-table-column>
        <el-table-column :label="$t('org.label.carBrandCn')/*品牌*/" align="center" width="120" current-row-key="carBrandCn">
          <template slot-scope="scope">{{ scope.row.carBrandCn }}</template>
        </el-table-column>
        <el-table-column :label="$t('org.label.dlrName')/*经销商*/" align="center" width="100" current-row-key="dlrShortName">
          <template slot-scope="scope">{{ scope.row.dlrShortName }}</template>
        </el-table-column>
        <el-table-column :label="$t('ve.label.purOrderCode')/*采购单号*/" align="center" width="180" current-row-key="purOrderCode">
          <template slot-scope="scope">{{ scope.row.purOrderCode }}</template>
        </el-table-column>
        <el-table-column :label="$t('ve.label.purOrderDCode')/*采购子单号*/" align="center" width="185" current-row-key="purOrderDCode">
          <template slot-scope="scope">{{ scope.row.purOrderDCode }}</template>
        </el-table-column>
        <el-table-column
          :label="$t('ve.label.purcashTypeName')/*采购单资金类型*/"
          align="center"
          width="200"
          current-row-key="purcashTypeName"
        >
          <template slot-scope="scope">{{ scope.row.purcashTypeName }}</template>
        </el-table-column>
        <!-- <el-table-column label="下单时间" align="center" width="100" current-row-key="confirDate">
          <template slot-scope="scope">{{ scope.row.confirDate }}</template>
        </el-table-column>
        <el-table-column label="确认时间" align="center" width="100" current-row-key="confirDate">
          <template slot-scope="scope">{{ scope.row.confirDate }}</template>
        </el-table-column>-->
        <!-- <el-table-column label="资金类型" align="center" width="150" current-row-key="cashTypeName">
          <template slot-scope="scope">{{ scope.row.cashTypeName }}</template>
        </el-table-column>-->
        <el-table-column :label="$t('ve.label.carProductPrice')/*采购价格*/" align="center" width="100" current-row-key="PurPrice">
          <template slot-scope="scope">{{ scope.row.PurPrice }}</template>
        </el-table-column>
        <el-table-column :label="$t('org.label.carConfig')/*车型配置*/" align="center" width="100" current-row-key="carConfigName">
          <template slot-scope="scope">{{ scope.row.carConfigName }}</template>
        </el-table-column>
        <el-table-column :label="$t('org.label.carColor')/*车身颜色*/" align="center" width="100" current-row-key="carColorName">
          <template slot-scope="scope">{{ scope.row.carColorName }}</template>
        </el-table-column>
        <el-table-column :label="$t('org.label.carIncolor')/*内饰色*/" align="center" width="100" current-row-key="carIncolorName">
          <template slot-scope="scope">{{ scope.row.carIncolorName }}</template>
        </el-table-column>
        <el-table-column :label="$t('ve.label.colorPrice')/*颜色价格*/" align="center" width="150" current-row-key="carColorPrice">
          <template slot-scope="scope">{{ scope.row.carColorPrice }}</template>
        </el-table-column>
        <el-table-column :label="$t('ve.label.inColorPrice')/*内饰价格*/" align="center" width="100" current-row-key="carIncolorPrice">
          <template slot-scope="scope">{{ scope.row.carIncolorPrice }}</template>
        </el-table-column>
        <el-table-column :label="$t('org.label.subPrice')/*补贴价格*/" align="center" width="100" current-row-key="countrySubsidy">
          <template slot-scope="scope">{{ scope.row.countrySubsidy }}</template>
        </el-table-column>
        <el-table-column :label="$t('org.label.proPrice')/*产品价格*/" align="center" width="100" current-row-key="carProductPrice">
          <template slot-scope="scope">{{ scope.row.carProductPrice }}</template>
        </el-table-column>
        <el-table-column :label="$t('org.label.carSeriesId')/*车系*/" align="center" width="100" current-row-key="carSeriseName">
          <template slot-scope="scope">{{ scope.row.carSeriseName }}</template>
        </el-table-column>
        <el-table-column :label="$t('org.label.carConfig')/*车型配置*/" align="center" width="100" current-row-key="configcode">
          <template slot-scope="scope">{{ scope.row.configcode }}</template>
        </el-table-column>
        <el-table-column :label="$t('org.label.tranportName')/*送货方式*/" align="center" width="100" current-row-key="deliverMode">
          <template slot-scope="scope">{{ scope.row.deliverMode }}</template>
        </el-table-column>
        <el-table-column :label="$t('ve.label.receiveShId')/*搬入地*/" align="center" width="100" current-row-key="receiveShId">
          <template slot-scope="scope">{{ scope.row.receiveShId }}</template>
        </el-table-column>
        <el-table-column :label="$t('ve.label.creator')/*下单人*/" align="center" width="100" current-row-key="creator">
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
    listDialog: {
      type: Object,
      default: {}
    }
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
        limitReasonId: "",
        vin:''
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
  created() {},
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
    },
    handleCurrentChange(val) {
      this.listQuery.pageIndex = val;
    },
    sendCode(msg) {
      this.$emit("changeCode",msg);
    },
    getBrandCode(val) {
      this.formField.carBrandCode = val;
    },

    getCarColorCode(val, text) {
      console.log(val, text);
      debugger;
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
    openDialog() {
      this.list = [];
      this.list.push(this.listDialog);
    },
    replace() {
      const that = this;
      let saveState = true;
      let saveCount = 0;
      let msg = "";
      let selectData = that.$refs.multipleTable.selection;
      if (selectData.length < 1) {
        that.$message({
          message:  this.$t('org.message.moreOneData')/*请至少选择一条数据*/ ,
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
          apiConfig: veApis.veReplaceCar,
          variables: {
            //当前中台使用的名称有dataInfo、info，具体查看API文档
            dataInfo: {
              carBrandCode: selectData[k].carBrandCode,
              purOrderDId: selectData[k].purOrderDId,
              newVin: selectData[k].vin,
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
              message: this.$t("sys.tips.esTip20"),//置换成功"","",
              type: "success",
              duration: 2000
            });
          }
          that.sendCode('success');
        });
      }
    }
  }
};
</script>
