<template>
  <div class="app-container app-container-table">
    <div class="filter-container filter-button" ref="searcheHeight">
      <el-button type="primary" size="small" @click.native="fetchData(1)">查询</el-button>
      <el-button  size="small" @click.native="resetData()">重置</el-button>
    </div>
                  <!--************************************ 查询区 *********************************  -->
    <!-- <div class="filter-container filter-title">查询区</div> -->
    <div class="filter-container filter-params" ref="conHeight">
    <el-row :gutter="24">
    <el-col :span="6" >
          <lableName curLabelName="备件号" 
                        :isShowLabel="true" 
                        :isRequire="false"></lableName>
      <el-input v-model="dataInfo.partNo" clearable size="small" ></el-input>
      <!-- <button background-color:red  style="width:20px;height:30px" @click.native="dianji()"></button> -->
    </el-col>  
    <el-col :span="6" >
          <lableName curLabelName="备件名称" 
                        :isShowLabel="true" 
                        :isRequire="false"></lableName>
      <el-input v-model="dataInfo.partName" clearable size="small"></el-input>
    </el-col>
    <!--销售开关-->
    <LookupValue 
          :span="6"
          :isMul="isMul"
          :isshow="isshow"
          :code="dataInfo.dlrOrderSwitch"
          :lookuptype="looluptype1"
          :labelName="labelName1"
          @changeCode="getRepairStatus1"
        />
       <!--备件状态-->
       <LookupValue  
          :span="6"
          :isMul="isMul"
          :isshow="isshow"
          :code="dataInfo.partFlowState"
          :lookuptype="looluptype2"
          :labelName="labelName2"
          @changeCode="getRepairStatus2"
        /> 
    </el-row> 
    </div>
                <!--*****************************************查询结果************************************-->
    <div class="filter-container filter-title"  ref="resultTitleHeight">查询结果</div> 
    <el-table
      v-loading="listLoading"
      :data="list"
      element-loading-text="Loading"
      border
      fit
      stripe
      :height="tableHeight"
      highlight-current-row
    >  
      <el-table-column align="center" label="序号">
        <template slot-scope="scope">
          {{ scope.$index + 1 }}
        </template>
      </el-table-column>

      <el-table-column label="备件品牌" align="center">
        <template slot-scope="scope">
          {{ scope.row.partBrandName }}
        </template>
      </el-table-column>

      <el-table-column label="备件品牌" align="center" v-if="false">
        <template slot-scope="scope">
          {{ scope.row.partBrandCode }}
        </template>
      </el-table-column>

    <el-table-column label="备件号" align="center" width="150">
        <template slot-scope="scope">
          {{ scope.row.partNo }}
        </template>
      </el-table-column>

       <el-table-column label="备件名称" align="center" width="150">
        <template slot-scope="scope">
          {{ scope.row.partName }}
        </template>
      </el-table-column>

      <el-table-column label="备件状态" align="center">
        <template slot-scope="scope">
          {{ scope.row.partStateName }}
        </template>
      </el-table-column>
      <el-table-column label="备件类别" align="center" >
        <template slot-scope="scope">
          {{ scope.row.partTypeName }}
        </template>
      </el-table-column>
      <el-table-column label="备件类别" align="center" v-if="false">
        <template slot-scope="scope">
          {{ scope.row.partTypeCode }}
        </template>
      </el-table-column>

      <el-table-column label="库存开关" align="center">
        <template slot-scope="scope">
          {{ scope.row.stockStateName }}
        </template>
      </el-table-column>

      <el-table-column label="采购开关" align="center">
        <template slot-scope="scope">
          {{ scope.row.purStateName }}
        </template>
      </el-table-column>

      <el-table-column label="销售开关" align="center">
        <template slot-scope="scope">
          {{ scope.row.saleStateName }}
        </template>
      </el-table-column>

      <el-table-column label="适用车型" align="center" width="180">
        <template slot-scope="scope">
          {{ scope.row.pubCarTypeName }}
        </template>
      </el-table-column>
      <el-table-column label="适用车型" align="center" width="180" v-if="false">
        <template slot-scope="scope">
          {{ scope.row.pubCarTypeCode }}
        </template>
      </el-table-column>
      <el-table-column label="并发控制ID" align="center" v-if="false">
        <template slot-scope="scope">
          {{ scope.row.updateControlId }}
        </template>
      </el-table-column>
    </el-table> 

    <el-pagination
      background
      ref="paginationHeight"
      layout="prev, pager, next, sizes, ->, total"
      prev-text="上一页"
      next-text="下一页"
      :page-sizes="[10, 20, 30]"
      :page-size="10"
      :total="list?listRecords:0"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />

  </div>
</template>


<script>
 import { the_Height } from "@/components/se/seMixins/makeHeight";
 import { doQueryList6 } from '@/api/pa/orderAuditItem/orderAuditItem'
 import { paApis } from '@/api/graphQLApiList/pa'
 import LookupValue from '@/components/org/LookupValue/index'
 import lableName from '@/components/lableName'                
 export default {
   mixins: [the_Height],
  components:{
    LookupValue,
    lableName
  },

  data(){
    return{
      listRecords: 0,
      labelName1: '销售开关',
      labelName2: '备件状态',
      isMul: false, //下拉框是否多选
      isshow: true, //是否显示lable
      looluptype1: 'PA0007', //值列表查询编码，自行修改成变量
      looluptype2: 'PA0009',
      tableHeight: '370px',
      list: [],
      listLoading: true,
      rowDetail: '',  //表格中某一行的数据
      gridData: {}, //给弹窗传值的数组,
      rowColumn: '',
      dialogFormVisible: false,
      pageSize: 10,
      pageIndex: 1,
      dataInfo: {
        //code1:'',
        //code2: '',
        oemCode: '',
        groupCode: '',
        partBrandCode: '',
        partNo: '',
        partName: '',
        supplierId: '',
        partFlowState: '',
        partTypeId: '',
        //sparePartsCategory: '',
        //stockSwitch: '',
        pvPurSwitch: '',
        dlrOrderSwitch: '',
        //applicableModels: '',
        lastUpdatedDateS: '',
        lastUpdatedDateD: ''
        
      },
      //  tableHeaderRowClassName({ row, rowIndex }) {
      //   if (rowIndex === 0) {
      //     return "background-color:rgb(239, 239, 239);height:32px;";
      //   }
      // }
    }
  },

  created(){
    this.fetchData(1);
  },

  methods:{
    fetchData(page) {    //查询
      this.listLoading = true;
      doQueryList6(this.pageSize,
      page||this.pageIndex,
      this.dataInfo).then(response => {
      if (
          response.data[paApis.paDbPartListQueryFindAll.ServiceCode].result === "1"
        ) {
          if(page){
            this.pageIndex = page;
          }
            this.list = response.data[paApis.paDbPartListQueryFindAll.ServiceCode].rows; 
            this.listRecords = parseInt(response.data[paApis.paDbPartListQueryFindAll.ServiceCode].records);
        }
       this.listLoading = false;
    })
    },

    resetData(){  //重置
        this.dataInfo.partName = '';
        this.dataInfo.partNo = '';
        this.dataInfo.dlrOrderSwitch = '';
        this.dataInfo.partFlowState = '';
    },

     getRepairStatus1(val) {   //值列表的code
       console.log("销售开关")
       console.log(val)
      this.dataInfo.dlrOrderSwitch = val;
    },
    getRepairStatus2(val) {   
      this.dataInfo.partFlowState = val;
    },

     handleSizeChange(val) {   //表格页数改变后重新加载页面
      this.pageSize = val;
      this.fetchData();
    },
    handleCurrentChange(val) {
      this.pageIndex = val;
      this.fetchData();
    },
}
}
</script>
