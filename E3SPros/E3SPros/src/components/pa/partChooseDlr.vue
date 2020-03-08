<template>
  <section class="carType">
    <el-dialog
      title="备件选择"
      :append-to-body="true"
      :visible.sync="partChooseDlrVisible"
      width="80%"
      @close="sendCode"
    >
      <div class="filter-container filter-title">查询条件</div>
      <div class="filter-container filter-params">
        <el-row :gutter="26">
          <el-col :span="8">
            <label>备件编码</label>
            <el-input v-model="listQuery.partNo" placeholder="请选择" size="small" />
          </el-col>
          <el-col :span="8">
            <label>备件名称</label>
            <el-input v-model="listQuery.partName" placeholder="请选择" size="small" />
          </el-col>
          <region :span="8" :name="regionName1" @changeCode="getregion" :isReset="isReset" />
          <region :span="8" :name="partTypeId" @changeCode="getpartTypeId" :isReset="isReset" />
          <region
            :span="8"
            :name="partPropertyCode"
            @changeCode="getpartPropertyCode"
            :isReset="isReset"
          />
          <region
            :span="8"
            :name="partWareHouse"
            @changeCode="getpartWareHouse"
            :isReset="isReset"
          />
          <el-col :span="24">
            <el-button type="primary" size="small" @click="fetchData()">查询</el-button>
            <el-button size="small" @click="reset()">重置</el-button>
            <el-button size="small" @click="confirm()">确定</el-button>
            <el-button size="small" @click="quit()">退出</el-button>
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
        :header-cell-style="tableHeaderRowClassName"
        highlight-current-row
        @select="select"
        height="300"
      >
        <el-table-column align="center" label="序号" width="60">
          <template slot-scope="scope">{{ scope.$index + 1 }}</template>
        </el-table-column>
        <el-table-column type="selection" width="55" label="选择+" />
        <el-table-column label="备件编码">
          <template slot-scope="scope">{{ scope.row.partNo }}</template>
        </el-table-column>
        <el-table-column label="备件名称">
          <template slot-scope="scope">{{ scope.row.partName }}</template>
        </el-table-column>
        <el-table-column label="库存数量">
          <template slot-scope="scope">{{ scope.row.storeQty }}</template>
        </el-table-column>
        <el-table-column label="借出数量">
          <template slot-scope="scope">{{ scope.row.borrowQty }}</template>
        </el-table-column>
        <el-table-column label="实际可用库存" width="120">
          <template slot-scope="scope">{{ scope.row.canUseQtyReal }}</template>
        </el-table-column>
        <el-table-column label="理论可用库存" width="120">
          <template slot-scope="scope">{{ scope.row.canUseQtyTheory }}</template>
        </el-table-column>
        <el-table-column label="在途数">
          <template slot-scope="scope">{{ scope.row.wayQty }}</template>
        </el-table-column>
        <el-table-column label="欠拨数">
          <template slot-scope="scope">{{ scope.row.oweQty }}</template>
        </el-table-column>
        <el-table-column label="建议零售价" width="120">
          <template slot-scope="scope">{{ scope.row.userPriceNr }}</template>
        </el-table-column>
        <el-table-column label="仓库名称">
          <template slot-scope="scope">{{ scope.row.warehouseName }}</template>
        </el-table-column>
        <el-table-column label="仓位编码">
          <template slot-scope="scope">{{ scope.row.warehouseCode }}</template>
        </el-table-column>
        <el-table-column label="单位">
          <template slot-scope="scope">{{ scope.row.unit }}</template>
        </el-table-column>
        <el-table-column label="备件品牌">
          <template slot-scope="scope">{{ scope.row.partBrandName }}</template>
        </el-table-column>
        <el-table-column label="备件类别">
          <template slot-scope="scope">{{ scope.row.partTypeName }}</template>
        </el-table-column>
        <el-table-column label="备件属性">
          <template slot-scope="scope">{{ scope.row.partPropertyName }}</template>
        </el-table-column>
        <el-table-column label="适用车型">
          <template slot-scope="scope">{{ scope.row.pubCarTypeName }}</template>
        </el-table-column>
        <el-table-column label="备件品种分类" width="120">
          <template slot-scope="scope">{{ scope.row.partVarietyName }}</template>
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
    </el-dialog>
  </section>
</template>
<script>
import { paApis } from "@/api/graphQLApiList/pa";
import { requestGraphQL } from "@/api/commonRequest";
import { getCarType } from "@/api/pa/paBuPurOrder";
import orderType from "@/views/pa/storepurchaseorder/creatOrder/tradeMark";
import region from "@/views/pa/storepurchaseorder/creatOrder/region";
export default {
  components: {
    orderType,
    region
  },
  props: {
    partChooseDlrVisible: {
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
      codeInside: this.code,
      listLoading: false,
      list: [],
      optionDatas: [],
      isBlockUp: [],
      selectData: null,
      pageSize: 20,
      pageIndex: 1,
      listQuery: {
        partNo: "", //备件编号
        partName: "", //备件名称
        partTypeId: "", //备件类别
        partPropertyCode: "" //备件属性
      },
      regionName1: "适用车型",
      partTypeId: "备件类别",
      partPropertyCode: "备件属性",
      partWareHouse: "仓库名称",
      isReset: false,
      tableHeaderRowClassName({ row, rowIndex }) {
        if (rowIndex === 0) {
          return "background-color:rgb(239, 239, 239);height:32px;";
        }
      }
    };
  },
  created() {
  },
  watch: {
    partChooseDlrVisible(newValue, oldValue) {
      if (newValue == true) {
        this.codeInside = "";
        this.list = [];
      }
    }
  },
  methods: {
    fetchData() {
      const that = this;
      let queryObj = {
        // api配置
        apiConfig: paApis.paDbDlrPartListQueryList,
        // 需要调用的API服务配置
        apiServices: [
          {
            //表格中台返回网格的字段
            apiQueryRow: [
              "canUseQtyReal",
              "canUseQtyTheory",
              "createdDate",
              "creator",
              "dlrId",
              "borrowQty",
              "userPriceNr",
              "warehouseName",
              "warehouseCode",
              "pubCarTypeName",
              "dlrLeastSaleQty",
              "dlrOrderSwitchName",
              "dlrPriceNr",
              "frozenQty",
              "groupCode",
              "groupId",
              "isEnable",
              "isRefine",
              "isSystem",
              "lastUpdatedDate",
              "maxStoreQty",
              "minStoreQty",
              "modifier",
              "mycatOpTime",
              "oemCode",
              "oemId",
              "oemStoreQty",
              "oncePurLimited",
              "orderNo",
              "oweQty",
              "ownerType",
              "partBrandCode",
              "partBrandName",
              "partFlowStateName",
              "partId",
              "partName",
              "partNo",
              "partPropertyCode",
              "partPropertyName",
              "partType",
              "partTypeCode",
              "partTypeId",
              "partTypeName",
              "partVarietyName",
              "planPrice",
              "pubCarTypeCode",
              "pubCarTypeName",
              "purPackQty",
              "remark",
              "safeQty",
              "salePriceNr",
              "sdpOrgId",
              "sdpUserId",
              "storeQty",
              "unit",
              "updateControlId",
              "userPriceNr",
              "wayQty"
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
          response.data[paApis.paDbDlrPartListQueryList.ServiceCode].result ===
            "1" &&
          response.data[paApis.paDbDlrPartListQueryList.ServiceCode].rows != ""
        ) {
          that.pageTotal =
            response.data[paApis.paDbDlrPartListQueryList.ServiceCode].records;
          that.list =
            response.data[paApis.paDbDlrPartListQueryList.ServiceCode].rows;
          that.listLoading = false;
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
    getpartTypeId(val) {
      this.listQuery.partTypeId = val;
    },
    getorderType(val) {
      this.listQuery.brand.push(val);
    },
    getregion(val) {
      this.listQuery.region.push(val);
    },
    getpartPropertyCode(val) {
      this.listQuery.getpartPropertyCode = val;
    },
    getpartWareHouse(val) {
      this.listQuery.getpartWareHouse = val;
    },
    select(selection) {
      this.selectData = selection;
    },

    confirm() {
      if (this.selectData == null || this.selectData.length == 0) {
        this.$message({
          message: "请选中一条数据",
          type: "warning",
          duration: 2000
        });
      } else {
        this.sendCode();
      }
    },
    quit() {
      this.partChooseDlrVisible = false;
    },
    reset() {
      this.listQuery.supplierCode = undefined;
      this.listQuery.supplierName = undefined;
      this.listQuery.isBlockUp = false;
      this.isReset = !this.isReset;
    }
  }
};
</script>

<style lang="scss" scoped>
/deep/ .el-dialog__wrapper .el-dialog {
  height: 610px;
}
</style>