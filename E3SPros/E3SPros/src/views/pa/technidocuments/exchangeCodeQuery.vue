<template>
  <div class="app-container app-container-table" ref="totalHeight">
    <div class="filter-container filter-button" ref="buttonHeight">
      <el-button  type="primary" size="small" @click="textQuery('1')">查询</el-button>
      <el-button  size="small">重置</el-button>
    </div>

    <div class="filter-container filter-title" ref="conTitleHeight">查询条件</div>
    <div class="filter-container filter-params" ref="conHeight">
      <el-row :gutter="26">
        <!--<carBrand :span="6" :code="initCode" @changeCode="getBrandCode"></carBrand>-->
        <carBrand :span="6" @changeCode="getBrandCode"></carBrand>
        <el-col :span="6">
          <label>车型</label>
          <el-input
            suffix-icon="el-icon-search"
            v-model="formField.carTypeCode"
            placeholder="请选择"
            size="small">
          </el-input>
        </el-col>
        <setStatus :span="6" @changeCode="getSetStatusCode"></setStatus>
        <isEnable :span="6" @changeCode="getIsEnableCode"></isEnable>
      </el-row>
    </div>

    <div class="filter-container filter-title" ref="resultTitleHeight">查询结果</div>
    <el-table
      v-loading="listLoading"
      :data="list"
      element-loading-text="Loading"
      border
      fit
      stripe
      :height="tableHeight"
      :header-cell-style="tableHeaderRowClassName"
      highlight-current-row
    >
      <el-table-column align="center" label="序号"  width="60" type='index'  prop="id">

      </el-table-column>
      <el-table-column type="selection" width="55" label="选择+" filed="chose" current-row-key="choose" />
      <el-table-column label="品牌" prop="brandName" current-row-key="brandName">
        <template>
        </template>
      </el-table-column>
      <el-table-column label="车系" prop="carSeries">
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
      <el-table-column label="设置状态" align="center">
        <template slot-scope="scope">
          {{ scope.row.status == 1 ? '未设置':'已设置' }}
        </template>
       </el-table-column>
      <el-table-column label="是否可用" align="center">
        <template slot-scope="scope">
           {{ scope.row.isEnable == 1 ? '是':'否' }}
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      background
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :page-sizes="[10, 20, 30]"
      :page-size="10"
      prev-text="上一页"
      next-text="下一页"
      layout="prev, pager, next, sizes, ->, total"
      :total="pageTotal" :current-page.sync="listQuery.pageIndex">
    </el-pagination>
  </div>
</template>
<script>
import { getListQuery , getQueryMock } from '@/api/table'
import carBrand from '@/components/org/carBrand/carBrand'
import isEnable from '@/components/org/isEnable/isEnable'
import setStatus from '@/components/org/setStatus/setStatus'
export default {
  components: {
    carBrand,
    isEnable,
    setStatus
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
      listLoading: true,
      pageTotal:0,
      //中台返回表格网格的字段
      queryField:['id','brandName','carSeries','catType','carTypeConfig','isEnable','status'],
      //表单查询数据
      formField:{
        brandCode: '',
        carTypeCode: '',
        status: '',
        isEnable: ''
      },
      listQuery: {
        pageIndex: 1,
        pageSize: 10,
        limit: 20,
      },
      tableHeaderRowClassName({ row, rowIndex }) {
        if (rowIndex === 0) {
          return 'background-color:rgb(239, 239, 239);height:32px;'
        }
      },
      tableHeight: 350
    }
  },
  mounted() {
    window.addEventListener('resize', () => {
      this.setTableHeight()
    })
    this.setTableHeight()
  },
  created() {
    this.textQuery()
  },
  methods: {
    textQuery(page){
        const that = this
        let queryObj = {
            //请求类型&参数 保存mutation  查询query
            type: 'mutation',
            typeParam: '($pageIndex: Int, $pageSize: Int, $dataInfo: InputMdmCarBrand)',
            //请求API
            apiUrl: 'ly/mp/busicen/orc/graphql.do',
            //需要调用的API服务配置
            apiServices: [
              {
                //API服务编码&参数
                apiServiceCode: 'mdmCarListQueryDemo',
                apiServiceParam: '(dataInfo: $dataInfo, pageIndex: $pageIndex, pageSize: $pageSize)',
                //表格中台返回网格的字段
                apiQueryRow:['id','brandName','carSeries','catType','carTypeConfig','isEnable','status']
              }
            ],
            //条件/实体参数（变量），根据typeParam中的定义配置
            variables: {
              pageSize: that.listQuery.pageSize,
              pageIndex: page || that.listQuery.pageIndex,
              //当前中台使用的名称有dataInfo、info，具体查看API文档
              dataInfo: that.formField
            }
        }
        //转换了中台请求格式数据
        var paramD = that.$getParams(queryObj);
        getQueryMock(paramD).then(response =>{
          if(response.data.mdmCarListQueryDemo.result ==1 && response.data.mdmCarListQueryDemo.rows!=''){
              if(page){
                  that.listQuery.pageIndex= page;

              }
              that.pageTotal = response.data.mdmCarListQueryDemo.records;
              that.list = response.data.mdmCarListQueryDemo.rows;
              that.listLoading = false;
            }

        })
    },
    setTableHeight(){
      this.$nextTick(() => {
        debugger
        var tmpTableHeight = this.$refs.totalHeight.clientHeight - 236
        console.info(tmpTableHeight)
        this.tableHeight = tmpTableHeight
      })
    },
    getBrandCode(val) {
      this.formField.brandCode = val;
    },
    getSetStatusCode(val) {
      this.formField.status = val;
    },
    getIsEnableCode(val) {
      this.formField.isEnable = val;
    },
    /*fetchData() {
      this.listLoading = true
      getListQuery(this.listQuery).then(response => {
        this.pageTotal = response.data.mdmCarListDemo.records;
        this.list = response.data.mdmCarListDemo.rows
        this.listLoading = false
      })
    },*/
    handleSizeChange(val) {
      this.listQuery.pageSize = val
      this.textQuery()
    },
    handleCurrentChange(val) {
       this.listQuery.pageIndex = val
       this.textQuery()
    }
  }
}
</script>
