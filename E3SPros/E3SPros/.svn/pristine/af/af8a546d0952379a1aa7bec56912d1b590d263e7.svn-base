 <template>
   <div class="app-container app-container-table">
     <div class="filter-container filter-button">
       <el-button type="primary" size="small" @click.native="fetchData()">查询</el-button>
       <el-button type="primary" size="small" @click.native="resetData()">重置</el-button>
     </div>
                  <!--************************************ 查询区 *********************************  -->
    <div class="filter-container filter-title">查询区</div>
    <div class="filter-container filter-params">
    <el-row :gutter="22">
    <el-col :span="5" >
      <lableName curLabelName="互换码编码" 
                      :isShowLabel="true" 
                      :isRequire="false"></lableName>
      <el-input v-model="listQuery.partNo" clearable size="small" ></el-input>
    </el-col>  
    <el-col :span="5" >
      <lableName curLabelName="互换码名称" 
                      :isShowLabel="true" 
                      :isRequire="false"></lableName>
      <el-input v-model="listQuery.partName" clearable size="small"></el-input>
    </el-col>

    <LookupValue 
          :span="5"
          :isMul="isMul"
          :isshow="isshow"
          :code="code1"
          placeholder="请选择"
          :looluptype="looluptype1"
          :labelName="labelName1"
          @changeCode="getRepairStatus1"
        />
    </el-row> 
    </div>
                <!--*****************************************设置区************************************-->
    <div class="filter-container filter-title">设置区</div> 
    <el-table
      v-loading="listLoading"
      :data="list"
      element-loading-text="Loading"
      border
      fit
      stripe
      :height="tableHeight"
      highlight-current-row
     :header-cell-style="tableHeaderRowClassName"  
      @row-click="handleRowClick"
    >  
       
      <el-table-column align="center" label="序号">
        <template slot-scope="scope">
          {{ scope.$index + 1 }}
        </template>
      </el-table-column>

      <el-table-column label="互换码编码" align="center">
        <template slot-scope="scope">
          {{ scope.row.partBrandCode }}
        </template>
      </el-table-column>

    <el-table-column label="互换码名称" align="center">
        <template slot-scope="scope">
          {{ scope.row.partNo }}
        </template>
      </el-table-column>

       <el-table-column label="排序号" align="center" width=100>
        <template slot-scope="scope">
          {{ scope.row.partName }}
        </template>
      </el-table-column>

      <el-table-column label="是否启用" align="center">
        <template slot-scope="scope">
          {{ scope.row.partFlowState }}
        </template>
      </el-table-column>

      <el-table-column label="定义" align="center">
        <template slot-scope="scope">
          {{ scope.row.sparePartsCategory }}
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
  import { doQueryList6 } from '@/api/pa/orderAuditItem/orderAuditItem'
  import { paApis } from '@/api/graphQLApiList/pa'
  import LookupValue from '@/components/org/LookupValue/index'
  import lableName from '@/components/lableName'
                  
 export default {
   components:{
     LookupValue,
     lableName
   },

   data(){
     return{
       labelName1: '是否启用',
       isMul: false, //下拉框是否多选
       isshow: true, //是否显示lable
       looluptype1: 'PA0007', //值列表查询编码，自行修改成变量
       code1:'1',
       tableHeight: 343,
       list: '',
       listLoading: true,
       rowDetail: '',  //表格中某一行的数据
       gridData: {}, //给弹窗传值的数组,
       rowColumn: '',
       exchangeCodeDialogVisible: false,
       listQuery: {
         pageSize: '',
         pageIndex: '',
         query: '',
         dataInfo: '',
         oemCode: '',
         groupCode: '',
         partBrandCode: '',
         partNo: '',
         partName: '',
         supplierId: '',
         partFlowState: '',
         partTypeId: '',
         sparePartsCategory: '',
         stockSwitch: '',
         pvPurSwitch: '',
         dlrOrderSwitch: '',
         applicableModels: '',
         lastUpdatedDateS: '',
         lastUpdatedDateD: ''
       },
        tableHeaderRowClassName({ row, rowIndex }) {
         if (rowIndex === 0) {
           return "background-color:rgb(239, 239, 239);height:32px;";
         }
       }
     }
   },

   created(){
     this.fetchData();
   },

   methods:{
     fetchData() {    //查询
       this.listLoading = true;
       doQueryList6(this.listQuery.pageSize,
       this.listQuery.pageIndex,
       this.listQuery).then(response => {
       if (
           response.data[paApis.paDbPartListQueryFindAll.ServiceCode].result === "1" &&
           response.data[paApis.paDbPartListQueryFindAll.ServiceCode].rows != ""
         ) {
             this.list = response.data[paApis.paDbPartListQueryFindAll.ServiceCode].rows; 
         }
          this.$message({
                      type: "success", 
                      message: "查询成功！"
                    });
        this.listLoading = false;
     })
     },

     resetData(){  //重置
         this.listQuery.partName='';
         this.listQuery.partNo='';
     },

      getRepairStatus1(val) {   //值列表的code
       this.code1 = val;
     },

     handleSizeChange(val) {   //表格页数改变后重新加载页面
       this.listQuery.pageSize = val;
       this.fetchData();
     },
     handleCurrentChange(val) {
       this.listQuery.pageIndex = val;
       this.fetchData();
     },
 }
 }
 </script>
