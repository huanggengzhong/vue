<template>
  <section>
    <el-dialog
      title="适用车型信息"
      :visible.sync="ceshiVisible"
      @open="fetchData"
      @closed="close"
      width="500"
      :append-to-body="true"
      :close-on-click-modal="false"
    >
      <div class="filter-container filter-title">查询结果</div>
      <el-table
        v-loading="listLoading"
        :data="list"
        border
        fit
        highlight-current-row
        :height="tableHeight"
      >
        <el-table-column property="num" label="序号" width="60" align="center">
          <template slot-scope="scope">{{ scope.$index + 1 }}</template>
        </el-table-column>
        <el-table-column property="carSeriesCn" label="车系" align="center">
          <template slot-scope="scope">{{ scope.row.carSeriesCn }}</template>
        </el-table-column>
        <el-table-column property="carSeriesCode" label="车型简码" align="center">
          <template slot-scope="scope">{{ scope.row.carSeriesCode }}</template>
        </el-table-column>
      </el-table>
      <el-pagination
        background
        layout="prev, pager, next, sizes, ->, total"
        prev-text="上一页"
        next-text="下一页"
        :page-sizes="[10, 20, 30]"
        :page-size="10"
        :total="list ? list.length : 0"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </el-dialog>
  </section>
</template>
<script>
import { paDbPartListQuerySelectPartNo } from "@/api/pa/paDbVarietyMutation1";
import { doQueryList9 } from "@/api/pa/orderAuditItem/orderAuditItem";
import { seApis } from "@/api/graphQLApiList/se";
import { paApis } from '@/api/graphQLApiList/pa'
import { requestGraphQL } from "@/api/commonRequest";
import lableName from "@/components/lableName";
export default {
  props: {
    ceshiVisible: {
      type: Boolean,
      default: function() {
        return false;
      }
    },
    partId: {
      type: String,
      default: function() {
        return "";
      }
    },
    carTypeCode: {
      type: String,
      default: function() {
        return "";
      }
    }
  },
  components: {
    lableName
  },
  data() {
    return {
      list: [],
      listLoading: true,
      tableHeight: 200,
      listQuery: {
        pageIndex: 1,
        pageSize: 100,
        fitCarTypeId: "",
        fitCarTypeIds: "",
        carSeriesId: ""
      }
    };
  },
  watch: {
    ceshiVisible(newValue, oldValue) {
      if (newValue) {
        //清空查询条件
        this.list = [];
      }
    }
  },
  methods: {
    fetchData() {
      this.listLoading = true;
      if (this.carTypeCode == null) {
        this.list = [];
        this.listLoading = false;
        return;
      }
      doQueryList9(this.listQuery.pageSize, this.listQuery.pageIndex, {
        fitCarTypeCode: this.carTypeCode
      }).then(response => {
        if (
          response.data[paApis.paDbPartCartypeRfQueryCarType.ServiceCode].result ===
            "1" &&
          response.data[paApis.paDbPartCartypeRfQueryCarType.ServiceCode].rows != ""
        ) {
          this.list =
            response.data[paApis.paDbPartCartypeRfQueryCarType.ServiceCode].rows;
        }
        this.listLoading = false;
      });
    },
    handleSizeChange(val) {
      this.listQuery.pageSize = val;
      this.fetchData();
    },
    handleCurrentChange(val) {
      this.listQuery.pageIndex = val;
      this.fetchData();
    },
    close() {
      this.$emit("changeCode", "");
    }
  }
};
</script>
