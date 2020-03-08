<template>
  <div class="app-container app-container-table">
    <div class="filter-container filter-button">
      <el-button type="primary" size="small" @click="fetchData()">查询</el-button>
      <el-button size="small" @click="changeButton(1)">新增</el-button>
      <el-button size="small" @click="changeButton(2)">修改</el-button>
      <el-button size="small" @click="reduction()" >重置</el-button>
    </div>

    <div class="filter-container filter-title">查询条件</div>
    <div class="filter-container filter-params">
      <el-row :gutter="26">
        <el-col :span="6">
            <label>表编码</label>
            <el-input v-model="listQuery.partNo"
                      placeholder="请输入"
                      size="small"
            >
            </el-input>
        </el-col>
        <el-col :span="6">
            <label>字段名称</label>
            <el-input v-model="listQuery.partName"
                      placeholder="请输入"
                      size="small"
            >
            </el-input>
        </el-col>
        
      
        <el-col :span="6">
            <label>状态</label>
            <el-select v-model="listQuery.placeCode"
                      placeholder="请选择"
                      size="small"
            >
            <el-option v-for="item in options"
                        :label="item.label"
                        :value="item.value"
                        :key="item.value"
            />
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
      @row-click="dataChange"
    >
      <el-table-column align="center" label="序号" width="60">
        <template slot-scope="scope">
          {{ scope.$index + 1 }}
        </template>
      </el-table-column>
      <el-table-column  align="center" label="表编码" >
          <template slot-scope="scope">
              {{ scope.row.partNo }}
          </template>
      </el-table-column>
      <el-table-column align="center" label="字段编码">
        <template slot-scope="scope">
          {{ scope.row.partName }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="字段名称">
        <template slot-scope="scope">
          {{ scope.row.unit }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="取值类型">
        <template slot-scope="scope">
          {{ scope.row.warehouseName }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="取值格式">
        <template slot-scope="scope">
          {{ scope.row.placeCode }}
        </template>
      </el-table-column>
      <el-table-column label="取值sql" align="center">
        <template slot-scope="scope">
          {{ scope.row.storeQty }}
        </template>
      </el-table-column>
      <el-table-column label="维护人员" align="center">
        <template slot-scope="scope">
          {{ scope.row.borrowQty }}
        </template>
      </el-table-column>
      <el-table-column label="操作人" align="center">
        <template slot-scope="scope">
          {{ scope.row.canUseQtyReal }}
        </template>
      </el-table-column>
      <el-table-column label="操作时间" align="center">
        <template slot-scope="scope">
          {{ scope.row.canUseQtyTheory }}
        </template>
      </el-table-column>
      <el-table-column label="状态" align="center">
        <template slot-scope="scope">
          {{ scope.row.wayQty }}
        </template>
      </el-table-column>
      <el-table-column label="备注" align="center">
        <template slot-scope="scope">
          {{ scope.row.oweQty }}
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
  <el-dialog
      title="新增/修改"
      :visible.sync="dialogVisible"
      width="80%"
      >
      <div class="filter-container filter-button">
      <el-button  size="small" @click="fetchData()">保存</el-button>
     
      <el-button size="small" @click="reduction()" >重置</el-button>
    </div>
      <div class="filter-container filter-params">
            <el-row :gutter="24">
                <el-col :span="8">
                    <label>表编码</label>
                    <el-input 
                                placeholder="请输入"
                                size="small"/>
                </el-col>
                <el-col :span="8">
                    <label>字段编码</label>
                    <el-input 
                                placeholder="请输入"
                                size="small"/>
                </el-col>
                <el-col :span="8">
                    <label>字段名称</label>
                    <el-input 
                                placeholder="请输入"
                                size="small"/>
                </el-col>
                <el-col :span="8">
                    <label>表编码</label>
                    <el-input 
                                placeholder="请输入"
                                size="small"/>
                </el-col>
                <el-col :span="8">
                    <label>取值格式</label>
                    <el-input 
                                placeholder="请输入"
                                size="small"/>
                </el-col>
                <el-col :span="8">
                    <label>取值SQL</label>
                    <el-input 
                                placeholder="请输入"
                                size="small"/>
                </el-col>
                <el-col :span="8">
                    <label>维护人员</label>
                    <el-input 
                                placeholder="请输入"
                                size="small"/>
                </el-col>
                <el-col :span="8">
                   <label>状态</label>
                        <el-select v-model="listQuery.placeCode"
                            placeholder="请选择"
                            size="small"
                        >
                        <el-option v-for="item in options"
                            :label="item.label"
                            :value="item.value"
                            :key="item.value"
                        />
                         </el-select>
                </el-col>
                
                <el-col :span="8">
                    <label>备注</label>
                    <el-input 
                                placeholder="请输入"
                                size="small"/>
                </el-col>
            </el-row>  
        </div>
  </el-dialog>
  </div>
</template>
<script>

import { requestGraphQL } from '@/api/commonRequest'
import { paApis } from '@/api/graphQLApiList/pa'
import { paBuDlrStorageQueryFindAll } from '@/api/pa/dealerStorage/paBuDlrStorage'
import { paBuDlrStorageMutationSave } from '@/api/pa/dealerStorage/paBuDlrStorage'
import LookupValue from '@/components/org/LookupValue/index'

export default {
  
  components: {
    LookupValue
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
      isMul:false,
      isshow:true,
      code:'1',
      list: null,
      isMonth : false,
      isParts : false,
      listLoading: true,
      dialogVisible: false,
      radio: 3,
      pageIndex: 1,
      pageSize: 10,
      limit: 20,
      
      storeQty:'',
      listQuery:{
        oemCode:'',
        groupCode:'',
        partNo:'',
        partName:'',
        warehouseName:'',
        placeCode:'',
        partCarSeries:'',
        isEnable:'',
        partFlowState:'',
        dlrOrderSwitch:'',
        partPropertyCode:'',
        fitCarTypeId:'',
        partTypeId:'',
        partBrandCode:'',
        ownerType:'',
        overStoreMonthsB:'',
        overStoreMonthsE:'',
        maxMinStoreQty:'',
        zeroStore:''
      },
      listQuery2:{
          oemCode:'',	
          groupCode:'',	
          partNo:''	,
          updateControlId:'',	  
          isEnable:'',	

      },
      options: [{
          value: '',
          label: '全部'
        }, {
          value: '1',
          label: '启用'
        }, {
          value: '0',
          label: '停用'
        }
      ],
            
      
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
    
    fetchData() {
      this.listLoading = true
      paBuDlrStorageQueryFindAll(this.pageIndex,this.pageSize,this.listQuery).then(response => {
           if (
          response.data[paApis.paBuOemStorageQueryFindAll.ServiceCode].result === "1" &&
          response.data[paApis.paBuOemStorageQueryFindAll.ServiceCode].rows != ""
        ) {
        this.list = response.data[paApis.paBuOemStorageQueryFindAll.ServiceCode].rows
        console.log(this.list)
        this.listLoading = false
        }
      })
    },
    handleSizeChange(val) {
      this.pageSize = val
      this.fetchData()
    },
    handleCurrentChange(val) {
       this.pageIndex = val
       this.fetchData()
    },
    reduction(){
      console.log(this.listQuery.partTypeId)
      
      this.listQuery.partNo = ''
      this.listQuery.partName = ''
      this.listQuery.placeCode = ''
      

      this.listQuery.warehouseName = ''      
      this.listQuery.partCarSeries = ''
      this.listQuery.isEnable =''
      this.listQuery.partBrandCode = ''
      this.listQuery.dlrOrderSwitch = ''
      this.listQuery.partPropertyCode = ''
      this.listQuery.fitCarTypeId = ''
      this.listQuery.ownerType =''
      this.listQuery.partTypeId =''

    },
    changeButton(val){
      if(val===2){
          if(this.listQuery2.isEnable === ''){
            this.$message.warning("请选中其中一行")
            return false
          }
      }
      
      this.dialogVisible = true
      
     
    },
    dataChange(row){
      console.log(row)
      this.listQuery2.isEnable=row.isEnable
      this.listQuery2.oemCode = row.oemCode
      this.listQuery2.groupCode = row.groupCode
      this.listQuery2.partNo = row.partNo
      this.listQuery2.updateControlId = row.updateControlId
      this.storeQty = row.storeQty
    },
    getwarehouseName(val){
      this.listQuery.warehouseName = val
    },
    getpartCarSeries(val){
      this.listQuery.partCarSeries = val
    },
    getisEnable(val){
      this.listQuery.isEnable = val
    },
    getpartBrandCode(val){
        this.listQuery.partBrandCode = val
    },
    getdlrOrderSwitch(val){
      this.listQuery.dlrOrderSwitch = val
    },
    getpartPropertyCode(val){
      this.listQuery.partPropertyCode = val 
    },
    getfitCarTypeId(val){
      this.listQuery.fitCarTypeId = val
    },
    getownerType(val){
      this.listQuery.ownerType = val
    },

    getpartTypeId(val){
      this.listQuery.partTypeId = val
      console.log(this.listQuery.partTypeId)
    },

    changeMonth(){
    
    this.listQuery.overStoreMonthsB = ''
    this.listQuery.overStoreMonthsE = ''
    },
    changeParts(val){
      console.log(val)
      if(val){
        this.listQuery.zeroStore = '1'
      }else{
        this.listQuery.zeroStore ='0'
      }
    },
    getNumberB(){
      var regstr = /^[0-9]*$/
        if(!regstr.test(this.listQuery.overStoreMonthsB)) {
         this.listQuery.overStoreMonthsB = ''
         alert("请输入正整数")
         return false;
        }
    },
    getNumberE(){
      if(this.changeMonth){
        return false
      }
      var regstr = /^[0-9]*$/
        if(!regstr.test(this.listQuery.overStoreMonthsE)) {
         this.listQuery.overStoreMonthsE = ''
         alert("请输入正整数")
         return false;
        }
    }
  }
}
</script>
