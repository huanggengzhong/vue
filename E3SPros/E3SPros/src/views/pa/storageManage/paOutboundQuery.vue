<!--
* description: 备件出入库查询
* author: chchhui
* createdDate: 2019-10-08
* logs：
*  20190720 新增页面功能
-->
<template>
  <div class="app-container app-container-table">
    <div class="filter-container filter-button">
      <el-button type="primary" size="small" @click="fetchData" >查询</el-button>
      <el-button size="small" >打印</el-button>
      <el-button size="small" @click="getExcel">导出</el-button>
      <el-button size="small" @click="reset" >重置</el-button>
    </div>
    
    <div class="filter-container filter-params">
      <el-row :gutter="26">
        <el-col :span="22">
          <el-row>
            
            <el-col :span="6">
              <label>单据编号</label>
              <el-input
                v-model="queryParams.dataInfo.a1"
                suffix-icon="el-icon-search"
                placeholder="请输入"
                size="small"
              />
            </el-col>
            <LookupValue :span = "6" :isShowLabel="true" labelName="出入库类型"  @changeCode="getCarBrand" :lookuptype="lookuptype"  :code="queryParams.dataInfo.a2" />
            <el-col :span="6">
               <label>出入库单位</label>
              <el-input
                v-model="queryParams.dataInfo.storageUnit"
                suffix-icon="el-icon-search"
                placeholder="请输入"
                size="small"
              />
            </el-col>
            <el-col :span="6">
               <label>关联单号</label>
              <el-input
                 v-model="queryParams.dataInfo.relateNo"
                suffix-icon="el-icon-search"
                placeholder="请输入"
                size="small"
              />
            </el-col>
          </el-row>
        </el-col>
        <el-col :span="2">
          <el-button icon="el-icon-plus" @click="changeToggleParam" class="moreParam">更多</el-button>
        </el-col>
        <el-col :span="22" v-show="toggleParam" >
          <el-row>
            <el-col :span="6">
              <label>备件编号</label>
              <el-input
                 v-model="queryParams.dataInfo.partNo"
                suffix-icon="el-icon-search"
                placeholder="请输入"
                size="small"
              />
            </el-col>
            <el-col :span="6">
              <label>备件名称</label>
              <el-input
                 v-model="queryParams.dataInfo.partName"
                suffix-icon="el-icon-search"
                placeholder="请选择"
                size="small"
              />
            </el-col>
            <el-col :span="6">
              <label>出入库日期</label>
              <el-date-picker
                v-model="outDate"
                type="daterange"
                @change="changeDate()"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期">
              </el-date-picker>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </div>
    
    <mix-table
        ref="tableList"
        :queryParams="queryParams"
        :dynamicTableCols="cols"
        :isShowSelect=false
        :isPaging=true
        :isDialog=false /> 
    <mixDetail :dialogFormVisible="dialogFormVisible" :cols="cols1" :queryParams="queryParams1" @closeDialog="closeDialog" /> 

    

  </div>
</template>


<script>
import { paApis } from "@/api/graphQLApiList/pa";
import { requestGraphQL } from "@/api/commonRequest";
import LookupValue from '@/components/org/LookupValue'
import mixTable from "@/components/basicComponent/mixTable"
import mixDetail from "@/components/basicComponent/mixDetail"

export default {
  components: {
    mixTable,
    LookupValue,
    mixDetail
  },

  data() {
    return {
        toggleParam:false,
        dialogFormVisible:false,
        lookuptype:"PA21000",
        outDate:[1],
        cols:[
            { label: '单据编号',codeField:"a1", comps:{
                type:'link',
                event:this.openDialog
              }
            },
            { label: '出入库类型', codeField: "a2"},
            { label: '关联单据类型', codeField: "a3"},
            { label: '关联单号', codeField: "a4"},
            { label: '出入库单位', codeField: "a5"},
            { label: '仓库人员', codeField: "a6"},
            { label: '备件品种', codeField: "a7"},
            { label: '备件总数量', codeField: "a8"},
            { label: '备件总金额', codeField: "a9"},
            { label: '备注', codeField: "a10"},
            
      ],
       queryParams: {
        APIUrl: paApis.paOutBoundQuery.APIUrl,
        InputType: paApis.paOutBoundQuery.InputType,
        ServiceCode: paApis.paOutBoundQuery.ServiceCode,
        dataInfo: {
          a1: '',
          a2: '',
          storageUnit:'',
          relateNo:'',
          partNo:'',
          partName:'',     
          outDateBegin:'',
          outDateEnd:'',
        },
        apiQueryRow: [
          'carBrandCn',
          'carBrandCode',
          'carSeriesCn',
          'carSeriesCode',
          'carTypeCn',
          'carTypeCode'
        ]
      },
      cols1:[
            { label: '备件编码', codeField: 'a1'},
            { label: '备件名称', codeField: "a2"},
            { label: '计量单位', codeField: "a3"},
            
            { label: '成本单位', codeField: "a4"},
            { label: '数量', codeField: "a5"},
            { label: '成本金额总价', codeField: "a6"},
            { label: '仓库', codeField: "a7"},
            { label: '库位', codeField: "a8"},
       
      ],
      queryParams1: {
        APIUrl: paApis.paOutBoundDQueryDFindAll.APIUrl,
        InputType: paApis.paOutBoundDQueryDFindAll.InputType,
        ServiceCode: paApis.paOutBoundDQueryDFindAll.ServiceCode,
        dataInfo: {
          billNo:''
        },
        apiQueryRow: [
          'carBrandCn',
          'carBrandCode',
          'carSeriesCn',
          'carSeriesCode',
          'carTypeCn',
          'carTypeCode'
        ]
    }
    }
  },
  created() {
    //this.textQurey();
  },
  methods:{
    fetchData(){
      this.$refs.tableList.queryList()
     
    },
    changeToggleParam() {
      this.toggleParam = !this.toggleParam;
      console.log(this.toggleParam);
      if (this.toggleParam) {
        this.moreBtnIcon = "el-icon-minus";
      } else {
        this.moreBtnIcon = "el-icon-plus";
      }
    },
    openDialog(row){
      
      this.dialogFormVisible= true
      this.queryParams1.dataInfo.billNo = row.a1
    },
    closeDialog(val){
      if(val=="!**!"){
        this.dialogFormVisible= false
      }
    },
    changeDate(){
      this.queryParams.dataInfo.outDateBegin = this.outDate[0],
      this.queryParams.dataInfo.outDateEnd= this.outDate[1]
    },
    reset(){
          this.queryParams.dataInfo.a1= '',
          this.queryParams.dataInfo.a2= '',
          this.queryParams.dataInfo.storageUnit='',
          this.queryParams.dataInfo.relateNo='',
          this.queryParams.dataInfo.partNo='',
          this.queryParams.dataInfo.partName='',     
          this.outDate= []
    },
    getCarBrand(val){
      this.queryParams.dataInfo.a2 = val
    },
    getExcel(){
      this.$refs.tableList.exportTableData('excel','经销商备件出入库查询','经销商备件出入库查询')
    }
    
  }
  
};
</script>
