<template>
  <div class="app-container app-container-table">
    <div class="filter-container filter-button">
      <el-button type="primary" size="small" @click="fetchData()">查询</el-button>
      <el-button size="small">添加</el-button>
      <el-button size="small">导出</el-button>
    </div>

    <div class="filter-container filter-title">查询条件</div>
    <div class="filter-container filter-params">
      <el-row :gutter="26">
        <!--<carBrand :span="6" :code="initCode" @changeCode="getBrandCode"></carBrand>-->
        <carBrand :isMul="isMul" :code="code" @changeCode="getBrandCode" />
        <el-col :span="6">
          <label>车型</label>
          <el-input
            v-model="listQuery.carTypeCode"
            placeholder="请选择"
            size="small"
            @focus="carTypeModal"
          />

        </el-col>
        <carTypeConfig @changeCode="getCarTypeCode"></carTypeConfig>
        <setStatus :span="6" @changeCode="getSetStatusCode" />
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
      <el-table-column align="center" label="序号" width="60">
        <template slot-scope="scope">
          {{ scope.$index + 1 }}
        </template>
      </el-table-column>
      <el-table-column type="selection" width="55" label="选择+" />
      <el-table-column label="品牌">
        <template slot-scope="scope">
          {{ scope.row.brandName }}
        </template>
      </el-table-column>
      <el-table-column label="车系">
        <template slot-scope="scope">
          {{ scope.row.carSeries }}
        </template>
      </el-table-column>
      <el-table-column label="车型">
        <template slot-scope="scope">
          {{ scope.row.catType }}
        </template>
      </el-table-column>
      <el-table-column label="车型配置">
        <template slot-scope="scope">
          {{ scope.row.carTypeConfig }}
        </template>
      </el-table-column>
      <el-table-column label="替代车型一" align="center">
        <template slot-scope="scope">
          {{ scope.row.replaceCarType1 }}
        </template>
      </el-table-column>
      <el-table-column label="替代车型配置一" align="center">
        <template slot-scope="scope">
          {{ scope.row.replaceCarTypeConfig1 }}
        </template>
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
  </div>
</template>
<script>
import { getList } from '@/api/table'
import carBrand from '@/components/org/carBrand/carBrand'
import isEnable from '@/components/org/isEnable/isEnable'
import setStatus from '@/components/org/setStatus/setStatus'
import carTypeConfig from '@/components/org/carTypeConfig'
export default {
  name:"menu0-1",
  components: {
    carBrand,
    isEnable,
    setStatus,
    carTypeConfig
  },
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: 'success',
        draft: 'gray',
        deleted: 'danger'
      }
      return statusMap[status]
    }
  },
  data() {
    return {
      isMul:true,
      code:'1',
      list: null,
      carTypeVisible: false,
      listLoading: true,
      listQuery: {
        pageIndex: 1,
        pageSize: 10,
        limit: 20,
        brandCode: undefined,
        carTypeCode: undefined,
        type: undefined,
        status: '',
        isEnable: ''
      },
      tableHeaderRowClassName({ row, rowIndex }) {
        if (rowIndex === 0) {
          return 'background-color:rgb(239, 239, 239);height:32px;'
        }
      }
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    getBrandCode(val) {
      this.listQuery.brandCode = val
    },
    getSetStatusCode(val) {
      this.listQuery.status = val
    },
    getIsEnableCode(val) {
      this.listQuery.isEnable = val
    },
    getCarTypeCode(val) {
      this.carTypeVisible = false
      this.listQuery.isEnable = val
    },
    fetchData() {
      this.listLoading = true
      getList(this.listQuery).then(response => {
        this.list = response.data.items
        this.listLoading = false
      })
    },
    handleSizeChange(val) {
      this.listQuery.pageSize = val
      this.fetchData()
    },
    handleCurrentChange(val) {
       this.listQuery.pageIndex = val
       this.fetchData()
    },
    carTypeModal() {
      this.carTypeVisible = true
    },
  }
}
</script>
