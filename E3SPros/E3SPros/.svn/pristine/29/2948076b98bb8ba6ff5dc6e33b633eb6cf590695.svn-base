<template>
  <section>
    <el-dialog
      title="选择公司"
      :visible.sync="dialogFormVisible"
      width="80%"
      @closed="close()"
      :append-to-body="true"
      :close-on-click-modal="false"
    >
      <div class="filter-container filter-params">
        <el-row :gutter="24">
          <el-col :span="8" >
              <label>公司简称</label>
              <el-input 
                        size="small"
                        v-model="listQuery.custName"           
                >
              </el-input>
          </el-col>
          <el-col :span="8" >
              <label>机构代码</label>
              <el-input 
                        size="small"
                        v-model="listQuery.credNo"           
                >
              </el-input>
          </el-col>
          <el-col :span="8" >
              <label>负责人</label>
              <el-input 
                        size="small"
                        v-model="listQuery.principalName"           
                >
              </el-input>
          </el-col>
          <el-col :span="8" >
              <label>公司全称</label>
              <el-input 
                        size="small"
                        v-model="listQuery.custFullName"           
                >
              </el-input>
          </el-col>
            <div class="filter-container filter-button" >
            <el-button type="primary" size="small" @click="fetchData()">查询</el-button>
            <el-button size="small" @click.stop="chooseCar()">选择</el-button>
            <el-button size="small" @click="reset()">重置</el-button>
            </div>
        </el-row>
      </div>
      <div class="filter-container filter-title">查询结果</div>
      <el-table
        ref="multipleTable"
        :data="list"
        @row-click="chooseRow"
        border
        fit
        highlight-current-row
      >
        
        <el-table-column property="num" label="序号" width="150">
          <template slot-scope="scope">{{ scope.$index + 1 }}</template>
        </el-table-column>
        <el-table-column property="carBrandCn" label="公司简称">
          <template slot-scope="scope">{{ scope.row.custName }}</template>
        </el-table-column>
        <el-table-column property="partno" label="公司全称">
          <template slot-scope="scope">{{ scope.row.custFullName }}</template>
        </el-table-column>
        <el-table-column property="partname" label="机构代码">
          <template slot-scope="scope">{{ scope.row.credNo }}</template>
        </el-table-column>
        <el-table-column property="partname" label="公司地址">
          <template slot-scope="scope">{{ scope.row.addrStreet }}</template>
        </el-table-column>
        <el-table-column property="partname" label="邮编">
          <template slot-scope="scope">{{ scope.row.addrZip }}</template>
        </el-table-column>
        <el-table-column property="partname" label="电话">
          <template slot-scope="scope">{{ scope.row.phone }}</template>
        </el-table-column>
        <el-table-column property="partname" label="负责人">
          <template slot-scope="scope">{{ scope.row.principalName }}</template>
        </el-table-column>
        <el-table-column property="partname" label="经销商客户编码" v-if="false">
          <template slot-scope="scope">{{ scope.row.dlrCustNo }}</template>
        </el-table-column>
      </el-table>
      <el-pagination 
        background 
        layout="prev, pager, next" 
        prev-text="上一页" 
        next-text="下一页" 
        :page-sizes="[10, 20, 30]" 
        :page-size="10" 
        :total="pageTotal" 
        @size-change="handleSizeChange" 
        @current-change="handleCurrentChange"></el-pagination> 
    </el-dialog>
  </section>
</template>
<script>
import partsCarTypeSelect from "@/components/se/partsCarTypeSelect"
import { seApis } from '@/api/graphQLApiList/se'
import { requestGraphQL } from '@/api/commonRequest'

export default {
  props: {
    'dialogFormVisible': {
      type: Boolean,
      default: function() {
        return false
      }
    }
  },
  created() {
    
  },
  data() {
    return {
      labelName: '备用车系',
      list: null,
      listQuery:{
          custName:'',
          custFullName:'',
          credNo:'',
          principalName:'',
          isPV800:'0',
          isCarowner:'1',
          custClassCode:'1'
      },
      
      pageSize: 10,
      pageIndex: 1,
      pageTotal: 0,
      row: '',
      
    }
  },
  methods: {
    fetchData(){
      const that = this
      let queryObj = {
        // 请求类型&参数 保存mutation  查询query
        type: 'query',
        typeParam:
              '($pageIndex: Int, $pageSize: Int, $dataInfo: '+ seApis.mdmDlrCustInfoQuery.InputType + ')',
        // 请求API
        apiUrl: seApis.mdmDlrCustInfoQuery.APIUrl,
        // 需要调用的API服务配置
        apiServices: [
          {
            // API服务编码&参数
            apiServiceCode: seApis.mdmDlrCustInfoQuery.ServiceCode,
            // API服务编码&参数
            apiServiceParam:
              "(dataInfo: $dataInfo, pageIndex: $pageIndex, pageSize: $pageSize)",
            // 表格中台返回网格的字段
            apiQueryRow: [
              'custName',
              // 'custFullName',
              'credNo',
              'addrStreet',
              'addrZip',
              'phone',
              // 'principalName',
              'dlrCustNo'
            ]
          }
        ],
        // 条件/实体参数（变量），根据typeParam中的定义配置
        variables: {
          pageSize: this.pageSize,
          pageIndex: this.pageIndex,
          // 当前中台使用的名称有dataInfo、info，具体查看API文档
          dataInfo: this.listQuery
        }
      }
      //转换了中台请求格式数据
      let paramD = that.$getParams(queryObj)
      // 调用中台API方法（可复用）
      requestGraphQL(paramD).then(response => {
        if (response.result === '1'){
            this.list = response.data[seApis.mdmDlrCustInfoQuery.ServiceCode].rows
        }else {
            this.$message({
                message: '查询失败：' + response.msg,
                type: 'warn',
                uration: 2000
            })
        }
        that.listLoading = false
      })
    },
    
    reset() {
       this.listQuery.custName=''
       this.row = ''
       this.listQuery.custFullName=''
       this.listQuery.principalName = ''
       this.listQuery.credNo = ''
       this.list = ''
    },
    //选择传值给父组件
    chooseCar() {
      var code = {
              custName : '',
              custFullName : '',
              credNo : '',
              addrStreet : '',
              addrZip : '',
              phone : '',
              principalName : '',
              dlrCustNo : ''
      }
      
      if(this.row == ''){
          this.$message.warning("请选中一行")
          return false
      }
      console.log(this.row);
      code.custName = this.row.custName,
      code.custFullName = this.row.custFullName,
      code.credNo = this.row.credNo,
      code.addrStreet = this.row.addrStreet,
      code.addrZip = this.row.addrZip,
      code.phone = this.row.phone,
      code.principalName = this.row.principalName,
      code.dlrCustNo = this.row.dlrCustNo
      this.$emit('changeCode', code)
    },
    getcarSeriesCode(val){
        this.carSeriesCode = val
    },
    close() {
     
      this.list = null
      this.reset()
      this.$emit('changeCode', '!**!')
    },
    chooseRow(val){
      this.row = val
    },
   
    handleSizeChange(val) {
      this.pageSize = val
      this.fetchData()
    },
    handleCurrentChange(val) {
      this.pageIndex = val
      this.fetchData()
    }
  }
}
</script>
<style>
.u-fRight {
  text-align: right;
}
</style>
