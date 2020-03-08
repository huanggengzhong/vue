<template>
    <section class="carType">
        <el-dialog 
        title="责任区编辑" 
        :visible.sync="carTypeVisible"
        width="900px"
        @close="sendCode"
        >
            <!-- <div class="filter-container filter-title"></div> -->
            <div class="filter-container filter-params">
                <el-row :gutter="26">
                    <!--<carBrand :span="8" :code="initCode" @changeCode="getBrandCode"></carBrand>-->
                    <!-- <carBrand :span="8" @changeCode="getBrandCode" /> -->
                    <Brand :span="12"></Brand>
                    <Brand :span="12"></Brand>
                    <div class="filter-container filter-button">
                        <!-- <el-button type="primary" size="small" @click="fetchData()">查询</el-button> -->
                        <el-button  type="primary" size="small">保存</el-button>
                        <!-- <el-button size="small">导出</el-button> -->
                    </div>
                </el-row>
            </div>
            <!--<div class="filter-container filter-title">查询结果</div>
            
             <el-table
            v-loading="listLoading"
            :data="list"
            element-loading-text="Loading"
            border
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
                <el-table-column label="车系"  width="55" >
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
            </el-table> -->
            <!-- <el-pagination
            background
            layout="prev, pager, next, sizes, ->, total"
            prev-text="上一页"
            next-text="下一页"
            :page-sizes="[10, 20, 30]"
            :page-size="10"
            :total="list?list.length:0"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            /> -->
        </el-dialog>
    </section>
 </template>
<script>
import { getCarType } from '@/api/components'
import Brand from '@/components/crm/Select/Common/ResponsibleArea/Brand'

export default {
 components: {
    Brand,
  },
  props:{
    carTypeVisible:{
      type:Boolean,
      default:function(){
        return false
      }
    },
    code:{
      type:String,
      default:function(){
        return ''
      }
    }
  },
  data() {
    return {
      codeInside: this.code,
      listLoading: true,
      list: [],
      optionDatas: [
      ],
      listQuery: {
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
    fetchData() {
      this.listLoading = true
      getCarType(this.listQuery).then(response => {
        this.listLoading = false
        this.list = response.data.items
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
    sendCode() {
      this.$emit("changeCode",this.codeInside)
    }
  }
}
</script>