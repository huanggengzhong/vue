<template>
  <div class="app-container app-container-table">
    <div class="filter-container filter-button">
      <el-button type="primary" size="small" @click="fetchData()">查询</el-button>
      <el-button size="small">新增</el-button>
      <el-button size="small">重置</el-button>
    </div>

    <div class="filter-container filter-title">查询条件</div>
    <div class="filter-container filter-params">
      <el-row :gutter="26">
        <!-- 互换码编码   -->
        <el-col :span="6">
          <label>互换码编码</label>
          <el-input
            v-model="listQuery.carColorCode"
            suffix-icon="el-icon-search"
            placeholder="请输入"
            size="small"
          />
        </el-col>
        <!-- 互换码名称   -->
        <el-col :span="6">
          <label>互换码名称</label>
          <el-input
            v-model="listQuery.carColorCode"
            suffix-icon="el-icon-search"
            placeholder="请输入"
            size="small"
          />
        </el-col>
        <!-- 是否启用 -->
        <isEnable :span="6" @changeCode="getIsEnableCode" />
      </el-row>
    </div>

    <div class="filter-container filter-title">查询结果</div>
    <el-table
      v-loading="listLoading"
      :data="list"
      element-loading-text="Loading"
      border
      fit
      stripe
      :header-cell-style="tableHeaderRowClassName"
      highlight-current-row
    >   
    <!-- 表头设置 -->
      <el-table-column label="序号" width="60" type="index"></el-table-column>
      <el-table-column width="60" type="selection"></el-table-column>
      <el-table-column prop="carSeries" label="互换码编码"></el-table-column>
      <el-table-column prop="catType" label="互换码名称"></el-table-column>

      <el-table-column prop="carTypeConfig" label="排序号"></el-table-column>
      <el-table-column prop="isEnable" label="是否启用"></el-table-column>
      <el-table-column prop="定义" label="定义"></el-table-column>
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
  </div>
</template>
<script>
import { getList } from "@/api/table";   
import isEnable from "@/components/org/isEnable/isEnable";
export default {
  name: "testTbale",
  components: {
    isEnable
  },
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: "success",
        draft: "gray",
        deleted: "danger"
      };
      return statusMap[status];
    }
  },
  data() {
    return {
      isMul: false,
      positionVisible: true,
      code: "1",
      list: null,
      carColorVisible: false,
      carSeriesVisible: false,
      listLoading: true,
      //    查询参数
      listQuery: {
        pageIndex: 1,
        pageSize: 10,
        limit: 20,
        brandCode: undefined,
        carColorCode: undefined,
        carColorName: undefined,
        carSeriesCode: undefined,
        carSeriesName: undefined,
        type: undefined,
        status: "",
        isEnable: ""
      },
      tableHeaderRowClassName({ row, rowIndex }) {
        if (rowIndex === 0) {
          return "background-color:rgb(239, 239, 239);height:32px;";
        }
      }
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    getBrandCode(val) {
      this.listQuery.brandCode = val;
    },
    getSetStatusCode(val) {
      this.listQuery.status = val;
    },
    getIsEnableCode(val) {
      this.listQuery.isEnable = val;
    },
    getCarColorCode(val) {
      this.listQuery.carColorCode = val.code;
      this.listQuery.carColorName = val.name;
      this.carColorVisible = false;
    },
    getCarSeriesCode(val) {
      this.listQuery.carSeriesCode = val.code;
      this.listQuery.carSeriesName = val.name;
      this.carSeriesVisible = false;
    },
    getPositionCode(val) {
      this.listQuery.positionCode = val.code;
      this.listQuery.positionName = val.name;
      this.positionVisible = false;
    },
    fetchData() {
      this.listLoading = true;
      getList(this.listQuery).then(response => {
        this.list = response.data.items;
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
    carColorModal() {
      this.carColorVisible = true;
    },
    carSeriesModal() {
      this.carSeriesVisible = true;
    },
    positionModal() {
      this.positionVisible = true;
    }
  }
};
</script>
