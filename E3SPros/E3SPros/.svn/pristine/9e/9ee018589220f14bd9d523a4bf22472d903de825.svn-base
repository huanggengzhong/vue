<!--
* logs: 2019-09-19 增加国际化 ydche
-->
<template>
  <section class="detialDialog">
    <el-dialog
      :title="$t('ve.label.CarInsInBank')/*车辆验收入库*/"
      :visible.sync="popupsVisible"
      width="1000px"
      style="height:539px"
      center
      @close="sendCode"
      :append-to-body="true"
      :close-on-click-modal="false"
      :lock-scroll="true"
    >
      <el-tabs>
        <el-tab-pane :label="$t('ve.label.inboundDetails')/*入库明细*/">
          <el-row>
            <el-col :span="5" :offset="22" style="padding-left:5px">
              <el-button type="primary" size="small" @click="carDetSave">{{$t('ve.label.incomeBank')/*验收入库*/}}</el-button>
            </el-col>
          </el-row>
          <div class="filter-container filter-title">{{$t('ve.label.acceptanceDetails')/*验收明细*/}}</div>
          <div class="filter-container filter-params">
            <el-row>
              <common-input
                :span="8"
                :labelName="$t('ve.label.carConfig')/*车型*/"
                :disabled="true"
                :code="detialMsg.carConfigCode"
              />
              <common-input
                :span="8"
                :labelName="$t('ve.label.carColorId')/*车身颜色*/"
                :disabled="true"
                :code="detialMsg.carColorCode"
              />
              <common-input
                :span="8"
                :labelName="$t('ve.label.carColorId')/*内饰颜色*/"
                :disabled="true"
                :code="detialMsg.carIncolorCode"
              />
              <common-input
                :span="8"
                :labelName="$t('ve.label.certificateNo')/*合格证号*/"
                :disabled="true"
                :code="detialMsg.certificateNo"
              />
              <common-input :span="8" :labelName=" this.$t('ve.label.vin')/*VIN码*/" :disabled="true" :code="detialMsg.vin" />
              <common-input :span="8" :labelName="this.$t('ve.label.engineNo')/*发动机号*/" :disabled="true" :code="detialMsg.engineNo" />
              <common-input
                :span="8"
                :labelName="$t('ve.label.produceDate')/*生产日期*/"
                :disabled="true"
                :code="detialMsg.produceDate"
              />
              <common-input :span="8" :labelName="$t('ve.label.carKey')/*钥匙编号*/" :disabled="true" :code="detialMsg.carKey" />
              <common-input
                :span="8"
                :labelName="$t('ve.label.witTaxCost')/*含税单价*/"
                :disabled="true"
                :code="detialMsg.witTaxCost"
              />
              <common-input :span="8" :labelName="$t('ve.label.invTax')/*增值税*/" :disabled="true" :code="detialMsg.invTax" />
              <common-input :span="8" :labelName="$t('ve.label.taxRate')/*税率*/" :disabled="true" :code="detialMsg.taxRate" />
              <common-input
                :span="8"
                :labelName="$t('ve.label.noTaxPrice')/*不含税价*/"
                :disabled="true"
                :code="detialMsg.noTaxPrice"
              />
            </el-row>
          </div>
          <div class="filter-container filter-title">{{$t('ve.label.acceptanceDetailsEditing')/*验收明细编辑*/}}</div>
          <div class="filter-container filter-params">
            <el-row>
              <common-input :span="8" :labelName="$t('ve.label.Storage')/*入库*/" :disabled="true" code="test" />
              <!-- <common-input :span="8" labelName="仓库" /> -->
              <lookUpValue
                :labelName="$t('ve.label.carStockHouseName')/*仓库*/"
                lookuptype="VE0015"
                :span="8"
                :isMul="false"
                code="26"
                @changeCode="getWareHouseCode"
              />
              <stockArea :span="8" :isMul="false" code="1" @changeCode="getAreaCode" />
              <stockPlace :span="8" :isMul="false" code="1" @changeCode="getPlaceCode" />
              <common-input
                :span="8"
                :labelName="$t('ve.label.CertificatePlace')/*合格证存放地*/"
                @changeCode="getAddrCode"
                :code="formField.certificateAddr"
              />
              <common-input
                :span="8"
                :labelName="$t('ve.label.acceptanceInstructions')/*验收说明*/"
                @changeCode="getRemarkCode"
                :code="formField.remark"
              />
            </el-row>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="$t('ve.label.quatityName')/*质量状态*/">
          <el-row>
            <el-col :span="8">
              <el-radio-group v-model="radio">
                <el-radio :label="1">{{$t('ve.label.qualified')/*合格*/}}</el-radio>
                <el-radio :label="2">{{$t('ve.label.accidentCar')/*事故车*/}}</el-radio>
                <el-radio :label="3">{{$t('ve.label.failed')/*不合格*/}}</el-radio>
              </el-radio-group>
            </el-col>
            <el-col :span="2" :offset="14">
              <el-button type="primary" size="small" @click="qualityStateSave">{{$t('ve.label.incomeBank')/*验收入库*/}}</el-button>
            </el-col>
          </el-row>

          <div class="filter-container filter-title">{{$t('ve.label.acceptanceType')/*验收类型*/}}</div>
          <el-table
            border
            stripe
            ref="multipleTable"
            v-loading="listLoading"
            :header-cell-style="tableHeaderRowClassName"
            :data="list"
            height="120px"
            :highlight-current-row="!isMul"
            @selection-change="inStockTypeSelectionChange"
          >
            <el-table-column width="60" type="selection" fixed></el-table-column>
            <el-table-column :label="$t('sys.content.gridIndex')/*序号*/" fixed width="100" type="index"></el-table-column>
            <el-table-column
              label="code"
              align="center"
              current-row-key="lookupValueCode"
              v-if="false"
            >
              <template slot-scope="scope">{{ scope.row.lookupValueCode }}</template>
            </el-table-column>
            <el-table-column :label="$t('ve.label.carInspectionCategory')/*车检类别*/" align="center" current-row-key="lookupValueName">
              <template slot-scope="scope">{{ scope.row.lookupValueName }}</template>
            </el-table-column>
            <el-table-column :label="$t('ve.label.description')/*说明*/+'+'" align="center" class-name="editInput">
              <template slot-scope="{row}">
                <el-input v-model="row.remark" size="mini"  />
              </template>
            </el-table-column>
          </el-table>
          <div class="filter-container filter-title">{{$t('ve.label.acceptanceType')/*序号*/}}损伤代码</div>
          <el-table
            border
            ref="multipleTable2"
            v-loading="listLoading"
            stripe
            :header-cell-style="tableHeaderRowClassName"
            :data="list"
            height="120px"
            class="multipleTable"
            :highlight-current-row="!isMul"
            @selection-change="fualtSelectionChange"
          >
            <el-table-column width="60" type="selection" fixed></el-table-column>
            <el-table-column :label="$t('sys.content.gridIndex')/*序号*/" fixed width="100" type="index"></el-table-column>
            <el-table-column
              label="code"
              align="center"
              current-row-key="lookupValueCode"
              v-if="false"
            >
              <template slot-scope="scope">{{ scope.row.lookupValueCode }}</template>
            </el-table-column>
            <el-table-column :label="$t('ve.label.damageCode')/*损伤代码*/" align="center" current-row-key="lookupValueName">
              <template slot-scope="scope">{{ scope.row.lookupValueName }}</template>
            </el-table-column>
            <el-table-column :label="$t('ve.label.description')/*说明*/+'+'" align="center">
              <template slot-scope="{row}">
                <el-input v-model="row.remark" size="mini"  />
              </template>
            </el-table-column>
          </el-table>
        </el-tab-pane>
      </el-tabs>
    </el-dialog>
  </section>
</template>
<script>
import commonInput from "@/components/org/commonInput";
import lookUpValue from "@/components/org/LookupValue";
import stockArea from "@/components/ve/veStockArea";
import stockPlace from "@/components/ve/veStockPlace";
import { orgApis } from "@/api/graphQLApiList/org";
import { veApis } from "@/api/graphQLApiList/ve";
import { requestGraphQL } from "@/api/commonRequest";
export default {
  name: "detialDialog",
  components: {
    commonInput,
    lookUpValue,
    stockArea,
    stockPlace
  },
  props: {
    popupsVisible: {
      type: Boolean,
      default: function() {
        return false;
      }
    },
    detialMsg: {
      type: Object,
      default: function() {
        return null;
      }
    }
  },
  watch: {},
  computed: {},
  data() {
    return {
      fualtSelection: [],
      inStockSelection: [],
      listLoading: true,
      isMul: false,
      list: null,
      listQuery: {
        pageIndex: 1,
        pageSize: 10
      },
      radio: 1,
      formField: {
        creator: "test",
        carHouseCode: "26",
        carStockAreaId: "1",
        carStockHousePlaceId: "1",
        certificateAddr: "",
        remark: ""
      },
      formField2: {
        qualityState: 1,
        inStockType: "",
        fualtCode: ""
      },
      tableHeaderRowClassName({ row, rowIndex }) {
        if (rowIndex === 0) {
          return "background-color:rgb(239, 239, 239);height:32px;";
        }
      }
    };
  },
  created() {
    this.queryTable();
  },
  methods: {
    queryTable(page) {
      const that = this;
      that.currentRow = null;
      that.listLoading = true;
      let queryObj = {
        // api配置
        apiConfig: orgApis.mdsLookupValueQueryByPage,
        // 需要调用的API服务配置
        apiServices: [
          {
            //表格中台返回网格的字段
            apiQueryRow: [
              "oemCode",
              "groupCode",
              "lookupTypeCode",
              "lookupValueCode",
              "lookupValueName",
              "remark"
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
          that.list = response.data[queryObj.apiConfig.ServiceCode].rows;
          that.listLoading = false;
        }
      });
    },
    sendCode() {
      this.$emit("changeCode");
    },
    // 储位
    getPlaceCode(val) {
      this.formField.carStockHousePlaceId = val;
    },
    // 仓库
    getWareHouseCode(val) {
      this.formField.carHouseCode = val;
    },
    // 储区
    getAreaCode(val) {
      this.formField.carStockAreaId = val;
    },
    // 合格证存放地址
    getAddrCode(val) {
      this.formField.certificateAddr = val;
    },
    // 验证说明
    getRemarkCode(val) {
      this.formField.remark = val;
    },
    // 入库明细验收
    carDetSave() {
      const that = this;
      //    inStockType: "",
      //     fualtCode: ""

      //   that.formField2.inStockType = that.inStockSelection.toString();
      //   that.formField2.fualtCode = that.fualtSelection.toString();
      let queryObj = {
        // 保存mutation
        type: "mutation",
        // api配置
        apiConfig: veApis.vePurInstockHouse,
        //条件/实体参数（变量），根据typeParam中的定义配置
        variables: {
          //当前中台使用的名称有dataInfo、info，具体查看API文档
          dataInfo: that.formField
        }
      };
      //转换了中台请求格式数据
      var paramD = that.$getParams(queryObj);
      // 调用中台API方法（可复用）
      requestGraphQL(paramD).then(response => {
        if (response.data[queryObj.apiConfig.ServiceCode].result === "1") {
          that.dialogFormVisible = false;
          that.$message({
            message: "验收成功",
            type: "success",
            duration: 2000
          });
          that.formField = {
            certificateAddr: "",
            remark: ""
          };
        }
      });
    },
    // 质量状态
    qualityStateSave() {
      const that = this;
      let queryObj = {
        // 保存mutation
        type: "mutation",
        // api配置
        apiConfig: veApis.vePurInstockHouse,
        //条件/实体参数（变量），根据typeParam中的定义配置
        variables: {
          //当前中台使用的名称有dataInfo、info，具体查看API文档
          dataInfo: that.formField2
        }
      };
      //转换了中台请求格式数据
      var paramD = that.$getParams(queryObj);
      // 调用中台API方法（可复用）
      requestGraphQL(paramD).then(response => {
        if (response.data[queryObj.apiConfig.ServiceCode].result === "1") {
          that.dialogFormVisible = false;
          that.$message({
            message: "验收成功",
            type: "success",
            duration: 2000
          });

          that.$refs.multipleTable.clearSelection();
          that.$refs.multipleTable2.clearSelection();
        }
      });
    },
    // 获取表格多选的值（损伤代码）
    fualtSelectionChange(val) {
      this.fualtSelection = [];
      for (var i of val) {
        this.fualtSelection.push(i.lookupValueCode);
      }
      this.formField2.fualtCode = this.fualtSelection.toString();
    },
    // 获取表格多选的值（验收类型）
    inStockTypeSelectionChange(val) {
      this.inStockSelection = [];
      for (var i of val) {
        this.inStockSelection.push(i.lookupValueCode);
      }
      this.formField2.inStockType = this.inStockSelection.toString();
    }
    // changeRadio() {
    //   this.formField2.qualityState = this.radio;
    //   if (this.radio == 1) {
    //     this.$refs.multipleTable.clearSelection();
    //     this.$refs.multipleTable2.clearSelection();
    //     this.formField2 = {
    //       inStockType: "",
    //       fualtCode: ""
    //     };
    //   }
    // }
  }
};
</script>
<style lang="scss" scoped>
/deep/ .multipleTable .editInput {
  padding: 0px 3px;
}
/deep/ .multipleTable .editInput .cell {
  padding-left: 0;
  padding-right: 0;
}
/deep/ .multipleTable .editInput .el-input__inner {
  border: none;
}
/deep/ .inputBackground input {
  background: #fafafa !important;
}
/deep/ .diaConpent .el-col-6 {
  widh: 100%;
}
</style>
