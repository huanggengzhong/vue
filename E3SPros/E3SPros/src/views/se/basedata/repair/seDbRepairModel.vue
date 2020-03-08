<template>
  <div class="app-container app-container-table">
    <div class="filter-container filter-button">
      <el-button type="text" size="small">导入模板下载</el-button>
      <el-button type="primary" size="small" @click="fetchData()">查询</el-button>
      <el-button size="small">导入</el-button>
      <el-button size="small">新增</el-button>
      <el-button size="small">修改</el-button>
      <el-button size="small">删除</el-button>
      <el-button size="small">重置</el-button>
    </div>
   <el-tabs type="border-card">
    <el-tab-pane label="工时单价模板设置">
      <div class="filter-container filter-title">查询条件</div>
      <div class="filter-container filter-params">
      <el-row :gutter="26">
        <!--<carBrand :span="6" :code="initCode" @changeCode="getBrandCode"></carBrand>-->
        <el-col :span="6">
          <label>模板编码</label>
          <el-input v-model="input" placeholder="请输入内容"></el-input>
        </el-col>
        <el-col :span="6">
          <label>模板名称</label>
          <el-input v-model="input" placeholder="请输入内容"></el-input>
        </el-col>
        <isEnable :span="6" @changeCode="getIsEnableCode" />
      </el-row>
    </div>

    <div class="filter-container filter-title">查询结果</div>
    <div>

    <el-container style="float:left;width:450px;">
    <el-header style="font-size: 12px;height:20px;width:430px;padding-left: 10px;">
      <span style="line-height: 20px;">工时价格模板</span>
    </el-header>

    <el-main style="padding-top: 3px;padding-left: 0px;width: 450px;">
     <el-table height="296"
      v-loading="listLoading"
      :data="list"
      element-loading-text="Loading"
      border
      fit
      stripe
      :header-cell-style="tableHeaderRowClassName"
      highlight-current-row
    >
    <el-table-column align="center" label="序号" width="60" style="padding-top: 3px;" fixed>
        <template slot-scope="scope">
          {{ scope.$index + 1 }}
        </template>
      </el-table-column>
      <el-table-column type="selection" width="55" label="选择+" />
      <el-table-column label="模板编码">
        <template slot-scope="scope">
          {{ scope.row.brandName }}
        </template>
      </el-table-column>
      <el-table-column label="模板名称">
        <template slot-scope="scope">
          {{ scope.row.carSeries }}
        </template>
      </el-table-column>
      <el-table-column label="状态" width="65">
        <template slot-scope="scope">
          {{ scope.row.catType }}
        </template>
      </el-table-column>
      <el-table-column label="启用" width="55">
        <template slot-scope="scope">
          {{ scope.row.carTypeConfig }}
        </template>
      </el-table-column>
     </el-table>
    </el-main>
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
    </el-container>

    <el-container style="float:left;width:620px;margin-left:6px;">
    <el-header style="font-size: 12px;height:20px;width:600px;padding-left: 10px;">
      <span style="line-height: 20px;">模板对应业务类别和车系</span>
    </el-header>

    <el-main style="padding-top: 3px;padding-left: 0px;width: 620px;">
     <el-table height="296"
      v-loading="listLoading"
      :data="list"
      element-loading-text="Loading"
      border
      fit
      stripe
      :header-cell-style="tableHeaderRowClassName"
      highlight-current-row
    >
    <el-table-column align="center" label="序号" width="60" style="padding-top: 3px;" fixed>
        <template slot-scope="scope">
          {{ scope.$index + 1 }}
        </template>
      </el-table-column>
      <el-table-column type="selection" width="55" label="选择+" />
      <el-table-column label="模板编码">
        <template slot-scope="scope">
          {{ scope.row.brandName }}
        </template>
      </el-table-column>
      <el-table-column label="模板名称">
        <template slot-scope="scope">
          {{ scope.row.carSeries }}
        </template>
      </el-table-column>
      <el-table-column label="业务类别">
        <template slot-scope="scope">
          {{ scope.row.catType }}
        </template>
      </el-table-column>
      <el-table-column label="车辆品牌">
        <template slot-scope="scope">
          {{ scope.row.carTypeConfig }}
        </template>
      </el-table-column>
      <el-table-column label="车系">
        <template slot-scope="scope">
          {{ scope.row.carTypeConfig }}
        </template>
      </el-table-column>
      <el-table-column label="单价">
        <template slot-scope="scope">
          {{ scope.row.carTypeConfig }}
        </template>
      </el-table-column>
     </el-table>
    </el-main>
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
    </el-container>
    </div>
    </el-tab-pane>

    <el-tab-pane label="模板对应专营店">
      <div class="filter-container filter-title">查询条件</div>
      <div class="filter-container filter-params">
      <el-row :gutter="24">
        <carBrand :span="6" @changeCode="getBrandCode" />
        <citySelect :span="6" @changeCode="getCityCode" />
        <bigArea :span="6" @changeCode="getBigAreaCode" />
        <smallArea :span="6" @changeCode="getSmallAreaCode" />
        <el-col :span="6">
          <label>专营店编码</label>
          <el-input v-model="input" placeholder="请输入内容"></el-input>
        </el-col>
        <el-col :span="6">
          <label>模板</label>
          <el-select v-model="value" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-col>
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
      <el-table-column label="模板编码" align="center">
        <template slot-scope="scope">
          {{ scope.row.brandName }}
        </template>
      </el-table-column>
      <el-table-column label="模板名称" align="center">
        <template slot-scope="scope">
          {{ scope.row.carSeries }}
        </template>
      </el-table-column>
      <el-table-column label="大区" align="center">
        <template slot-scope="scope">
          {{ scope.row.catType }}
        </template>
      </el-table-column>
      <el-table-column label="小区" align="center">
        <template slot-scope="scope">
          {{ scope.row.carTypeConfig }}
        </template>
      </el-table-column>
      <el-table-column label="专营店编码" align="center">
        <template slot-scope="scope">
          {{ scope.row.replaceCarType1 }}
        </template>
      </el-table-column>
      <el-table-column label="专营店名称" align="center">
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
  </el-tab-pane>
  </el-tabs>
  </div>
</template>
<script>
import { getList } from '@/api/table'
import carBrand from '@/components/org/carBrand/carBrand'
import isEnable from '@/components/org/isEnable/isEnable'
import carBrandRadio from '@/components/org/carBrandRadio/carBrandRadio'
import datePicker from '@/components/org/datePicker/datePicker'
import doubleDatePicker from '@/components/org/doubleDatePicker/doubleDatePicker'
import citySelect from '@/components/org/CitySelect/index'
import bigArea from '@/components/org/BigArea/index'
import smallArea from '@/components/org/SmallArea/index'


  export default {
    components: {
    carBrand,
    isEnable,
    carBrandRadio,
    datePicker,
    doubleDatePicker,
    citySelect,
    bigArea,
    smallArea

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
      list: null,
      carTypeVisible: false,
      listLoading: true,
      listQuery: {
        pageIndex: 1,
        pageSize: 10,
        limit: 20,
        brandCode: undefined,
        carTypeCode: undefined,
        cityCode: undefined,
        bigAreaCode: undefined,
        smallAreaCode:undefined,
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
    getCityCode(val) {
      this.listQuery.cityCode = val
    },
    getBigAreaCode(val) {
      this.listQuery.bigAreaCode = val
    },
    getSmallAreaCode(val) {
      this.listQuery.smallAreaCode = val
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
  };
</script>
<style scoped>
.el-input__inner{
  height: 28px;
}

.el-header {
    background-color: rgb(239, 239, 239);
    color: #333;
    width: 480px;
}

</style>
