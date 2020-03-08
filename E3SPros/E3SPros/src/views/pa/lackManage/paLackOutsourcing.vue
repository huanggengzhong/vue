<!--
* description: 缺件外购登记
* author: renzjie
* createdDate: 2019-10-21
* logs：
*  20191021 新增页面功能
-->
<template>
  <div class="app-container app-container-table">
    <div class="filter-container filter-button">
      <el-button type="primary" size="small" @click="fetchData" >查询</el-button>
      <el-button size="small" @click="fetchDataHistory">导出</el-button>
      <el-button size="small" @click="reset" >重置</el-button>
    </div>
    
    <div class="filter-container filter-params">
     <el-row :gutter="26">
        <el-col :span="22">
          <el-row>
            <el-col :span="6">
              <label>缺件单号</label>
              <el-input
                v-model="queryParams.dataInfo.lackPartCode"
                suffix-icon="el-icon-search"
                placeholder="请输入"
                size="small"
              />
            </el-col>
            <el-col :span="6">
              <label>关联单号</label>
              <el-input
                v-model="queryParams.dataInfo.relateOrderCode"
                suffix-icon="el-icon-search"
                placeholder="请输入"
                size="small"
              />
            </el-col>
            <el-col :span="6">
              <label>车牌号</label>
              <el-input
                v-model="queryParams.dataInfo.carLicense"
                suffix-icon="el-icon-search"
                placeholder="请输入"
                size="small"
              />
            </el-col>
            
            <el-col :span="6">
               <label>登记日期</label>
              <el-date-picker
                v-model="createdDate"
                type="daterange"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                @change="changeDate">
              </el-date-picker>
            </el-col>
          </el-row>
        </el-col>
        <el-col :span="2">
          <el-button icon="el-icon-plus" @click="changeToggleParam" class="moreParam">更多</el-button>
        </el-col>
        <el-col :span="22" v-show="toggleParam"  >
          <el-row>
            <el-col :span="6">
              <label>客户名称</label>
              <el-input
                v-model="queryParams.dataInfo.custName"
                suffix-icon="el-icon-search"
                placeholder="请输入"
                size="small"
              />
            </el-col>
            <el-col :span="6">
              <label>VIN码</label>
              <el-input
                v-model="queryParams.dataInfo.vin"
                suffix-icon="el-icon-search"
                placeholder="请输入"
                size="small"
              />
            </el-col>
            <el-col :span="6">
              <label>登记人</label>
              <el-input
                v-model="queryParams.dataInfo.regEmpName"
                suffix-icon="el-icon-search"
                placeholder="请输入"
                size="small"
              />
            </el-col>
            <el-col :span="6">
              <label>备件号</label>
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
                placeholder="请输入"
                size="small"
              />
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
    
    <el-dialog
      title="明细查询"
      :visible.sync="dialogFormVisible"
      width="80%"
      @closed="closeDialog"
      @opened="openDialog"
      :append-to-body="true"
      :close-on-click-modal="false"
    >
    
                <div class="filter-container filter-button">
                    <el-button type="primary" size="small" @click="save" >备件出库统计</el-button>
                </div>
            
      <div class="filter-container filter-params">
    
     </div>
      <mix-table 
        ref="detailList"
        :queryParams="queryParams1"
        :dynamicTableCols="detailCols"
        :multipleSelect="selection"
        :isPaging=false
        :isDialog=true
        :onetableHeight=200 />
    </el-dialog>
    
    
     
  </div>
</template>


<script>
import { paLackOutsourcing } from "@/api/pa/lackManage/paLackOutsourcing"
import { paApis } from "@/api/graphQLApiList/pa";
import { requestGraphQL } from "@/api/commonRequest";
import LookupValue from '@/components/org/LookupValue'
import mixTable from "@/components/basicComponent/mixTable"
import mixDetail from "@/components/basicComponent/mixDetail"
import { type } from 'os';
import { format } from 'path';

export default {
  components: {
    mixTable,
    LookupValue
  },

  data() {
    return {
        toggleParam:false,
        dialogFormVisible:false,
        historyDialogFormVisible:false,
        selection:"selection",
        createdDate:[],
        row:{
          billNo:'',
          billType:'',
          billDate:'',
          deliveryNo:'',
          state:'',
          total:'',
          amount:'',
          receiptDate:'',
          remarks:''
        },
        cols:[
            { label: '缺件单号',codeField:"lackPartCode",comps:{
              type:"link",
              event:this.linkDialog
            }
            },
            { label: '关联类型', codeField: "relateType"},
            { label: '关联单号', codeField: "relateOrderCode"},
            { label: '车牌号', codeField: "carLicense"},
            { label: '客户名称', codeField: "custName"},
            { label: 'VIN码', codeField: "vin"},
            { label: '紧急度', codeField: "urgentLevelName"},
            { label: '来源类型', codeField: "sourceTypeName"},
            { label: '登记人', codeField: "regEmpName"},
            { label: '登记日期', codeField: "createdDate"},
            { label: '备注', codeField: "remark"},
            
      ],
       queryParams: {
        APIUrl: paApis.paBuLackPartOrderQueryFindAll.APIUrl,
        InputType: paApis.paBuLackPartOrderQueryFindAll.InputType,
        ServiceCode: paApis.paBuLackPartOrderQueryFindAll.ServiceCode,
        dataInfo: {
          lackPartCode: '',
          relateOrderCode: '',
          beginCreatedDate: '',
          endCreatedDate: '',
          custName:'',
          carLicense:'',
          partNo:'',
          partName:'',
          regEmpName:'',
          vin:''
          
        },
        apiQueryRow: [
          'lackPartId',		
          'lackPartCode',	
          'relateType',		
          'relateOrderCode',		
          'carLicense',		
          'custName',		
          'vin',		
          'urgentLevelName',		
          'sourceTypeName',		
          'regEmpName',		
          'createdDate',		
          'remark',		
          'updateControlId',		

        ]
      },
      detailCols:[
        {label:"备件号",codeField:"partNo"},
        {label:"备件名称",width:150,codeField:"partName"},
        {label:"单位",codeField:"unit"},
        {label:"希望到货日期",codeField:"expectArriveDate"},
        {label:"预计到货日期",codeField:"intendReceiveDate"},
        {label:"可外购数",codeField:"canOrderQty"},
        {label:"缺件数",codeField:"lackQty"},
        {label:"当前库存数",codeField:"storeQty"},
        {label:"转订单数",codeField:"orderQty"},
        {label:"转外购数",codeField:"outPurchaseQty"},
        {label:"分配数",codeField:"assignQty"},
        {label:"订货开关",codeField:"dlrOrderSwitchName"},
        {label:"缺件说明",codeField:"auditNote"},
        {label:"备件品牌",codeField:"partBrandName"},
        {label:"三包重点件",codeField:"a1"},
        {label:"业务类别",codeField:"busnissTypeName"},
        
        
      ],
      queryParams1: {
        APIUrl: paApis.paBuLackPartOrderDQueryOutPurchase.APIUrl,
        InputType: paApis.paBuLackPartOrderDQueryOutPurchase.InputType,
        ServiceCode: paApis.paBuLackPartOrderDQueryOutPurchase.ServiceCode,
        dataInfo: {
          documentNumber: '',
          outboundType: '',
          carTypeCode: ''
        },
        apiQueryRow: [
          'lackPartOrderDId',
          'partNo',
          'partName',
          'unit',
          'expectArriveDate',
          'intendReceiveDate',
          'canOrderQty',
          'lackQty',
          'storeQty',
          'orderQty',
          'outPurchaseQty',
          'assignQty',
          'dlrOrderSwitchName',
          'auditNote',
          'partBrandName',
          'busnissTypeName',
          'updateControlId'

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
    linkDialog(row){
      
      this.dialogFormVisible = true
      this.row = {

      }
      this.row = row
      this.$refs.detailList.tableData = []
    },
    fetchDataHistory(){
        this.historyDialogFormVisible = true
    },
    openDialog(){
      this.$refs.detailList.queryList()
     
    },
    closeDialog(){
      this.dialogFormVisible = false

    },
    closeHistoryDialog(){
        this.historyDialogFormVisible = false
    },
    save(){
      // paLackOutsourcing(this.pa)
    },
    changeDate(){
      queryParams.dataInfo.beginCreatedDate = this.createdDate[0]
      queryParams.dataInfo.endCreatedDate = this.createdDate[1]
    },
    getBillType(val){
      this.queryParams.dataInfo.billType = val

    },
    getCode(val){

    },
    reset(){
      this.createdDate= []
      this.queryParams.dataInfo.lackPartCode= '',
      this.queryParams.dataInfo.relateOrderCode= '',
      this.queryParams.dataInfo.beginCreatedDate= '',
      this.queryParams.dataInfo.endCreatedDate= '',
      this.queryParams.dataInfo.custName='',
      this.queryParams.dataInfo.carLicense='',
      this.queryParams.dataInfo.partNo='',
      this.queryParams.dataInfo.partName='',
      this.queryParams.dataInfo.regEmpName='',
      this.queryParams.dataInfo.vin=''
    },
    changeReturnQty(row){
         if(parseInt(row.returnQty)  > parseInt(row.outStoreQty)){
            
             this.$message.warning("出库数量不能大于应出数量！")
        }
        
    }
  
  }
  
};
</script>