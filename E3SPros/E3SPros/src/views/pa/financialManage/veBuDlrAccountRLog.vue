<template>
  <div class="app-container app-container-table">
    <div class="filter-container filter-button">
      <el-button type="primary" size="small" @click="textQurey(1)">查询</el-button>
      <el-button size="small">导出</el-button>
      <el-button size="small" @click="reset">重置</el-button>
    </div>

    <div class="filter-container filter-title">查询条件</div>
    <div class="filter-container filter-params">
      <el-row :gutter="26">
        <el-col :span="22">
          <el-row><div class=""></div>
          <carBrand :span="6" :isMul="true" :key="formField.brandCode" :code="formField.brandCode"  @changeCode="getBrandCode"></carBrand>
          <el-col :span="6">
            <label>经销商</label>
            <el-input
              v-model="formField.dlrShortName"
              suffix-icon="el-icon-search"
              placeholder="请选择"
              size="small"
              @focus="openDlr"
            />
          </el-col>
          <seCommonQueryChooseDlr ref="seCommonQueryChooseDlr" :isMul="isMul" :seComQueChoDlrVisible="seComQueChoDlrVisible" @sentCode="getComQueCho" @close="closeComQueCho" />
          <capitalDetail @changeCode="getDetails" :capitalDetailVisible="capitalDetailVisible"></capitalDetail>
          <el-col :span="6">
            <label>上账日期</label>
            <el-date-picker
              v-model="formField.dete"
              type="daterange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期">
            </el-date-picker> 
          </el-col>       
          </el-row>
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
      @row-click="getRowCode"
    >
      <el-table-column
       label="序号"
       width="60"
       type="index"
       align="center"
      >
      </el-table-column>
      
      <el-table-column
      prop="carBrandCn"
      label="经销商品牌"
      width="100"
      align="center"
      >
      </el-table-column>
      <el-table-column
       prop="dlrCode"
       label="经销商编码"
       width="100"
       align="center"
      >
      </el-table-column>
      <el-table-column
       prop="dlrShortName"
       label="经销商简称"
       width="120"
       align="center"
      >
      </el-table-column>
      <el-table-column prop="dlrAccountName" label="账户名称" align="center" width="120">
        <template slot-scope="scope">
        {{ scope.row.pvAccount == 1 ? '日产账户':'启程账户' }}
        </template>
      </el-table-column>
     
      <el-table-column
       prop="canUseMoney"
       label="可用金额"
       width="120"
       align="center"
      >
      
      </el-table-column>
      <el-table-column
       prop="dlrBalance"
       label="账户金额"
       width="120"
       align="center"
      >
      
      </el-table-column>
      <el-table-column
       prop="creditQuota"
       label="信用额度"
       width="120"
       align="center"
      >
      
      </el-table-column>
      <el-table-column
       prop="frozenMoney"
       label="预扣金额"
       width="120"
       align="center"
      >
      <template slot-scope="scope">
        <el-button type="text" @click="showBlanceDetails(scope)">{{scope.row.frozenMoney}}</el-button>
      </template>
      </el-table-column>
      <el-table-column
       prop="remit"
       label="银行汇款"
       width="120"
       align="center"
      >
      <template slot-scope="scope">
        <el-button type="text" @click="showBlanceDetails(scope)">{{scope.row.remit}}</el-button>
      </template>
      </el-table-column>
      <el-table-column
       prop="adding"
       label="转款"
       width="120"
       align="center"
      >
      <template slot-scope="scope">
        <el-button type="text" @click="showBlanceDetails(scope)">{{scope.row.adding}}</el-button>
      </template>
      </el-table-column>
      <el-table-column
       prop="subtract"
       label="扣款"
       width="120"
       align="center"
      >
      <template slot-scope="scope">
        <el-button type="text" @click="showBlanceDetails(scope)">{{scope.row.subtract}}</el-button>
      </template>
      </el-table-column>
      <el-table-column
       prop="balanceMoney"
       label="结算金额"
       width="120"
       align="center"
      >
      <template slot-scope="scope">
        <el-button type="text" @click="showBlanceDetails(scope)">{{scope.row.balanceMoney}}</el-button>
      </template>
      </el-table-column>
      <el-table-column
       prop="operDate"
       label="上账时间"
       width="120"
       align="center"
      >
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
import { paApis } from '@/api/graphQLApiList/pa'
import { requestGraphQL } from '@/api/commonRequest'
import carBrand from "@/components/org/carBrand/carBrand"
import seCommonQueryChooseDlr from "@/components/se/seCommonQueryChooseDlr"
import capitalDetail from "./capitalDetail.vue"
export default {
  name:"pacwsh",
  components: {
    carBrand,
    seCommonQueryChooseDlr,
    capitalDetail
  },  
  data() {
    return {
      value1:"",      
      list: [],
      rowList:'',
      seComQueChoDlrVisible:false,
      capitalDetailVisible:false,
      isMul:false,
      formField:{
        brandCode:'',
        dete:'',
        dlrShortName:''
      },

      //之前的数据
      
      isMul: false,
      code:'1',
      listLoading: true,
      listQuery: {
        pageIndex: 1,
        pageSize: 10,
        limit: 20,
        brandCode: undefined,
        dete: undefined,
        dlrShortName: undefined        
      },
      tableHeaderRowClassName({ row, rowIndex }) {
        if (rowIndex === 0) {
          return 'background-color:rgb(239, 239, 239);height:32px;'
        }
      }
    }
  },
  created() {
    this.textQurey()
  },
  methods: {
    //获取某行的值
    getRowCode(row){
      this.rowList = row      
    },
    //资金详情弹窗
    showBlanceDetails(scope){
      console.log(222222)
      this.capitalDetailVisible=true
    },
    getDetails(val){
      this.capitalDetailVisible = false
    },
    //打开经销商弹窗
    openDlr(){
      this.seComQueChoDlrVisible = true
    },
    
    //重置
    reset(){
      this.formField={
        brandCode:'',
        dete:'',
        dlrShortName:''
      }
    },
    //获取经销商名称
    getComQueCho(val){
      this.formField.dlrShortName = val.dlrFullName
      this.seComQueChoDlrVisible = false
    },
    //获取品牌名称
    getBrandCode(val) {
      this.formField.brandCode = val;
    },
    closeComQueCho(val){//点击弹框右上角关闭弹窗，不传递数据
      this.seComQueChoDlrVisible = val
    }, 
    textQurey(page){
        const that = this
            let queryObj = {
                // api配置
                apiConfig: paApis.paBuOemDlrAccountQueryFindAll,
                // 需要调用的API服务配置
                apiServices: [{
                    //表格中台返回网格的字段
                    apiQueryRow:['carBrandCn','dlrCode','dlrShortName','dlrAccountName','canUseMoney','dlrBalance','creditQuota','frozenMoney','remit','adding','subtract','balanceMoney','addTime','updateControlId']
                }],
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
            //console.log(paramD)
            // 调用中台API方法（可复用）
            requestGraphQL(paramD).then(response =>{
                //console.log(response)
            if(response.data[paApis.paBuOemDlrAccountQueryFindAll.ServiceCode].result === '1' && response.data[paApis.paBuOemDlrAccountQueryFindAll.ServiceCode].rows!=''){
                if(page){
                    //查询完返回指定的page页数
                    that.listQuery.pageIndex= page;
                }
                that.pageTotal = response.data[paApis.paBuOemDlrAccountQueryFindAll.ServiceCode].records;
                that.list = response.data[paApis.paBuOemDlrAccountQueryFindAll.ServiceCode].rows;
                that.listLoading = false;
                }
            })
    },
    handleSizeChange(val) {
      this.listQuery.pageSize = val
      this.textQurey()
    },
    handleCurrentChange(val) {
       this.listQuery.pageIndex = val
       this.textQurey()
    },
    
    
  }
}
</script>

<style lang="scss" scoped> 
  .text{
    line-height: 28px;
    padding: 0 35px;
    display: flex;
    justify-content: space-between;
  }
</style>