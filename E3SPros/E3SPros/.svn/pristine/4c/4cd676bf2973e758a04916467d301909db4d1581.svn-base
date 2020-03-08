<template>
    <section class="carSeries">
        <el-dialog 
        title="车系选择" 
        :visible.sync="carSeriesVisibled"
        width="900px"
        center
        @close="sendCode"
        >
            <div class="filter-container filter-title">查询条件</div>
            <div class="filter-container filter-params">
                <el-row :gutter="26">
                   <carBrand :span="span" :isMul="carBrandIsMul" :code="code" @changeCode="getBrandCode" labelName='品牌'/>
                    <el-col :span="8">
                      <label>车系名称</label>
                      <el-input
                          v-model="listQuery.carSeriesName"
                          suffix-icon="el-icon-search"
                           :placeholder="$t('sys.tips.esTip13')"
                          size="small"
                      />
                    </el-col>
                    <div class="filter-container filter-button">
                        <el-button type="primary" size="small" @click="fetchData()">查询</el-button>
                        <el-button size="small" @click="reset">重置</el-button>
                        <el-button size="small" @click="sendCode">确认</el-button>
                    </div>
                </el-row>
            </div>
            <div class="filter-container filter-title">查询结果</div>
            
            <el-table
            border
            stripe
            v-loading="listLoading"
            :header-cell-style="tableHeaderRowClassName"
            :data="list"
            @selection-change="getCarSeriesCode"
            :highlight-current-row="!isMul"
            @current-change="getCarSeriesCode"
            >
            
               <el-table-column
                label="序号"
                width="60"
                type="index"
                >
                 <template slot-scope="scope">
                    {{ scope.$index + 1 }}
                    </template>
               </el-table-column>

               <el-table-column
                width="60"
                type="selection"
                v-if="isMul"
                >
               </el-table-column>

                <el-table-column
                label="品牌名称"
                prop="carBrand"
                >
                 <template slot-scope="scope">
                    {{ scope.row.brandName }}
                    </template>
               </el-table-column>

               <el-table-column
                label="车系编码"
                prop="carSeriesCode"
                >
                   <template slot-scope="scope">
                    {{ scope.row.carSeriesCode }}
                    </template>
               </el-table-column>

               <el-table-column
                label="车系中文名称"
                prop="carSeriesName"
                >
                 <template slot-scope="scope">
                    {{ scope.row.carSeriesName }}
                    </template>
               </el-table-column>

               <el-table-column
                label="车系英文名称"
                prop="carSeriesEn"
                >
                       <template slot-scope="scope">
                    {{ scope.row.carSeriesEn }}
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
        </el-dialog>
    </section>
 </template>
<script>
import {getCarSeriesM } from '@/api/components'
import carBrand from '@/components/org/carBrand/carBrand'
export default {
 components: {
    carBrand,
  },
  props:{
    popupsVisible: { type: Boolean, default: false },
    carSeriesVisible:{
      type:Boolean,
      default:function(){
        return false
      }
    },
    isMul:{
      type:Boolean,
      default:function(){
        return false
      }
    }
  },
  data() {
    return {
      carSeriesVisibled:this.popupsVisible,
      span: '8',
      carBrandIsMul: true,
      code: [],
      listLoading: false,
      list: [],
      codeInside:{
        code: [],
        name: []
      },
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
      getCarSeriesM(this.listQuery).then(response => {
        this.listLoading = false
        this.list = response.data.items
      })
    },
    reset(){
      if(this.isMul) {
        this.code = []
      } else {
        this.code = ""
      }
      this.listQuery.carSeriesCode=""
      this.listQuery.carSeriesName=""
    },
    handleSizeChange(val) {
      this.listQuery.pageSize = val
      this.fetchData()
    },
    handleCurrentChange(val) {
       this.listQuery.pageIndex = val
       this.fetchData()
    },
    getCarSeriesCode(val) {
       if(this.isMul) {
         if(val[0] || val.length == '0') {
          this.codeInside = {
            code: [],
            name: []
          };
          for(var i=0;i<val.length;i++) {
            this.codeInside.code.push(val[i].carSeriesCode)
            this.codeInside.name.push(val[i].carSeriesName)
          }
         }
      } else {
          this.codeInside = {
            code: [],
            name: []
          };
         this.codeInside.code.push(val.carSeriesCode)
         this.codeInside.name.push(val.carSeriesName)
      }
    },
    sendCode() {
      this.carSeriesVisibled=false;
      this.$emit("changeCode",this.codeInside.code.toString(),this.codeInside.name.toString())
    }
  }
}
</script>