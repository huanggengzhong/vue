<template>
  <section class="carType">
    <el-dialog
      :title="handelTitle"
      :visible.sync="partChooseOemVisible"
      width="80%"
      @close="sendCode"
      :append-to-body="true"
    >
      <div class="filter-container filter-title">查询条件</div>
      <div class="filter-container filter-params">
        <el-row :gutter="26">
          <LookupValue
            :span="6"
            :isMul="isMul"
            :isShowLabel="isShowLabel"
            :code="listQuery.partBrandCode"
            :lookuptype="lookuptype.partBrandCode"
            :labelName="lookupValuelable.partBrandCode"
            @changeCode="getPartBrandCode"
          />
          <el-col :span="8">
            <label>备件编码</label>
            <el-input v-model="listQuery.partNo" placeholder="请输入" size="small" />
          </el-col>
          <el-col :span="8">
            <label>备件名称</label>
            <el-input v-model="listQuery.partName" placeholder="请输入" size="small" />
          </el-col>
          <LookupValue
            :span="6"
            :isMul="isMul"
            :isShowLabel="isShowLabel"
            :code="listQuery.isRefine"
            :lookuptype="lookuptype.isRefine"
            :labelName="lookupValuelable.isRefine"
            @changeCode="getIsRefine"
          />
          <el-col :span="24">
            <el-button type="primary" size="small" @click="fetchData()">查询</el-button>
            <el-button size="small" @click="reset()">重置</el-button>
            <el-button size="small" @click="confirm()">确定</el-button>
          </el-col>
        </el-row>
      </div>
      <div class="filter-container filter-title">查询结果</div>
      <el-table
        v-loading="listLoading"
        :data="list"
        element-loading-text="Loading"
        border
        stripe
        highlight-current-row
        @select="select"
        @select-all="select"
        height="300"
      >
        <el-table-column align="center" label="序号" width="60">
          <template slot-scope="scope">{{ scope.$index + 1 }}</template>
        </el-table-column>
        <el-table-column type="selection" width="55" label="选择+" />
        <el-table-column label="备件品牌">
          <template slot-scope="scope">{{ scope.row.partBrandName }}</template>
        </el-table-column>
        <el-table-column label="备件编码">
          <template slot-scope="scope">{{ scope.row.partNo }}</template>
        </el-table-column>
        <el-table-column label="备件名称">
          <template slot-scope="scope">{{ scope.row.partName }}</template>
        </el-table-column>
        <el-table-column label="是否精品">
          <template slot-scope="scope">{{ scope.row.isRefineName }}</template>
        </el-table-column>
        <el-table-column label="备注">
          <template slot-scope="scope">{{ scope.row.remark }}</template>
        </el-table-column>
      </el-table>
      <el-pagination
        background
        layout="prev, pager, next, sizes, ->, total"
        prev-text="上一页"
        next-text="下一页"
        :page-sizes="[10, 20, 30]"
        :page-size="10"
        :total="list?pageTotal:0"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </el-dialog>
  </section>
</template>
<script>
import { paApis } from "@/api/graphQLApiList/pa";
import LookupValue from "@/components/org/LookupValue";
import { requestGraphQL } from "@/api/commonRequest";
import { getCarType } from "@/api/pa/paBuPurOrder";
import orderType from "@/views/pa/storepurchaseorder/creatOrder/tradeMark";
import region from "@/views/pa/storepurchaseorder/creatOrder/region";
export default {
  components: {
    orderType,
    region,
    LookupValue
  },
  props: {
    partChooseOemVisible: {
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
    code: {
      type: String,
      default: function() {
        return "";
      }
    }
  },
  data() {
    return {
      isShowLabel: true,
      codeInside: this.code,
      listLoading: false,
      list: [],
      handelTitle: "备件选择-单选",
      optionDatas: [],
      isBlockUp: [],
      selectData: null,
      pageIndex: 1,
      pageSize: 10,
      listQuery: {
        partBrandCode: "",
        isRefine: "",
        partNo: "",
        partName: ""
      },
      lookupValuelable: {
        partBrandCode: "备件品牌",
        isRefine: "是否精品"
      },
      lookuptype: {
        partBrandCode: "PA0008",
        isRefine: "DB0064"
      },
      isReset: false,
      pageTotal: null,
      isRefine: null
    };
  },
  created() {
    if (!this.isMul) {
      this.handelTitle = "备件选择-单选";
    } else {
      this.handelTitle = "备件选择-多选";
    }
  },
  watch: {
    partChooseOemVisible(newValue, oldValue) {
      if (newValue == true) {
        this.codeInside = "";
        this.list = [];
      }
    }
  },
  methods: {
    fetchData() {
      const that = this;
      that.listLoading = true;
      let queryObj = {
        // api配置
        apiConfig: paApis.paDbPartListQueryFindAll,
        // 需要调用的API服务配置
        apiServices: [
          {
            //表格中台返回网格的字段
            apiQueryRow: [
              "costPrice",
              "dlrLeastSaleQty",
              "dlrOrderSwitch",
              "dlrPrice",
              "elementCode",
              "elementId",
              "elementNameCn",
              "emphasisFlag",
              "emphasisFlagName",
              "lastUpdatedDate",
              "leastPackIn",
              "leastPackOut",
              "logisticsFlag",
              "partBrandCode",
              "partBrandName",
              "partFlowState",
              "partId",
              "partName",
              "partNo",
              "partStateName",
              "partTypeCode",
              "partTypeId",
              "partTypeName",
              "partVarietyCode",
              "partVarietyName",
              "partWeight",
              "planPrice",
              "pubCarTypeCode",
              "pubCarTypeName",
              "purStateName",
              "pvPurSwitch",
              "isRefine",
              "isRefineName",
              "remark",
              "replaceCode",
              "replaceId",
              "replacePartNo",
              "saleStateName",
              "stockStateName",
              "storeSwitch",
              "supplierCode",
              "supplierId",
              "transitLimit",
              "transitLimitName",
              "unit",
              "updateControlId"
            ]
          }
        ],
        //条件/实体参数（变量），根据typeParam中的定义配置
        variables: {
          pageIndex: that.pageIndex,
          pageSize: that.pageSize,
          dataInfo: that.listQuery
        }
      };
      //转换了中台请求格式数据
      var paramD = that.$getParams(queryObj);
      //console.log(paramD)
      // 调用中台API方法（可复用）
      requestGraphQL(paramD).then(response => {
        //console.log(response)
        if (
          response.data[paApis.paDbPartListQueryFindAll.ServiceCode].result ===
          "1"
        ) {
          that.pageTotal =
            response.data[paApis.paDbPartListQueryFindAll.ServiceCode].records;
          that.list =
            response.data[paApis.paDbPartListQueryFindAll.ServiceCode].rows;
          that.listLoading = false;
        } else {
          that.listLoading = false;
          this.$message({
            message:
              response.data[paApis.paDbPartListQueryFindAll.ServiceCode].msg,
            type: "warning",
            duration: 2000
          });
        }
      });
    },
    handleSizeChange(val) {
      this.pageSize = val;
      this.fetchData();
    },
    handleCurrentChange(val) {
      this.pageIndex = val;
      this.fetchData();
    },
    sendCode() {
      this.$emit("changeCode", this.selectData);
    },
    getorderCode(val) {
      this.listQuery.orderCode = val;
    },
    getIsRefine(val) {
      this.listQuery.isRefine = val;
    },
    getPartBrandCode(val) {
      this.listQuery.partBrandCode = val;
    },
    select(selection) {
      this.selectData = selection;
      //console.log(this.selectData);
    },
    confirm() {
      if (this.selectData == null || this.selectData.length == 0) {
        this.$message({
          message: "请选中一条数据",
          type: "warning",
          duration: 2000
        });
        return;
      }
      if (!this.isMul && this.selectData.length != 1) {
        this.$message({
          message: "只能选择一条数据",
          type: "warning",
          duration: 2000
        });
      } else {
        this.sendCode();
      }
      if (this.isMul) {
        this.sendCode();
      }
    },
    quit() {
      this.partChooseOemVisible = false;
    },
    reset() {
      this.listQuery.partBrandCode = undefined;
      this.listQuery.isRefine = undefined;
      this.listQuery.partNo = "";
      this.listQuery.partName = "";
      this.isReset = !this.isReset;
    }
  }
};
</script>

<style lang="scss" scoped>
/deep/ .el-dialog__wrapper .el-dialog {
  height: 572px;
}
</style>