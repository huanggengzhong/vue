<!--
* description: 缺件分配登记
* author: chchhui
* createdDate: 2019-10-17
* logs：
*  20191017 新增页面功能
-->
<template>
  <div class="app-container app-container-table">
    <div class="filter-container filter-button">
      <el-button type="primary" size="small" @click="fetchData" >查询</el-button>
      <el-button size="small" @click="fetchDataHistory">历史分配查询</el-button>
      <el-button size="small" @click="reset" >重置</el-button>
    </div>
    
    <div class="filter-container filter-params">
     <el-row :gutter="26">
        <el-col :span="22">
          <el-row>
            <el-col :span="6">
              <label>备件号</label>
              <el-input
                v-model="queryParams.dataInfo.outStoreCode"
                suffix-icon="el-icon-search"
                placeholder="请输入"
                size="small"
              />
            </el-col>
            <el-col :span="6">
              <label>备件名称</label>
              <el-input
                v-model="queryParams.dataInfo.outStoreCode"
                suffix-icon="el-icon-search"
                placeholder="请输入"
                size="small"
              />
            </el-col>
            <el-col :span="6">
              <label>车牌号</label>
              <el-input
                v-model="queryParams.dataInfo.outStoreCode"
                suffix-icon="el-icon-search"
                placeholder="请输入"
                size="small"
              />
            </el-col>
            
            <el-col :span="6">
              <label>缺件单号</label>
              <el-input
                v-model="queryParams.dataInfo.billNo"
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
        <el-col :span="22" v-show="toggleParam"  >
          <el-row>
            <el-col :span="6">
              <label>关联单号</label>
              <el-input
                v-model="queryParams.dataInfo.a3"
                suffix-icon="el-icon-search"
                placeholder="请输入"
                size="small"
              />
            </el-col>
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
              <label>VIN</label>
              <el-input
                v-model="queryParams.dataInfo.a8"
                suffix-icon="el-icon-search"
                placeholder="请输入"
                size="small"
              />
            </el-col>
            <el-col :span="6">
              <label>登记人员</label>
              <el-input
                v-model="queryParams.dataInfo.a9"
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
    <el-row :gutter="24">
        <LookupValue
              :span="12"
              :isMul="isMul"
              :isShowLabel="isShowLabel"
              :code="queryParams.dataInfo.billType"
              lookuptype="PA10010"
              labelName="自动分配按"
              @changeCode="getBillType"
            />
            <el-col :span="12">
                <div class="filter-container filter-button">
                 <el-button type="primary" size="small" @click="save" >缺件分配</el-button>
                </div>
            </el-col>
    </el-row>
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
    
    
    <el-dialog
      title="历史记录查询"
      :visible.sync="historyDialogFormVisible"
      width="80%"
      @closed="closeHistoryDialog"
      @opened="openHistoryDialog"
      :append-to-body="true"
      :close-on-click-modal="false"
    >
    <div class="filter-container filter-button">
      <el-button type="primary" size="small" >查询</el-button>     
      <el-button size="small"  >重置</el-button>
    </div>
     <div class="filter-container filter-params">
      <el-row :gutter="26">
        
            <el-col :span="8">
              <label>缺件单号</label>
              <el-input
                v-model="queryParams.dataInfo.billNo"
                suffix-icon="el-icon-search"
                placeholder="请输入"
                size="small"
              />
            </el-col>
            <el-col :span="8">
              <label>车牌号</label>
              <el-input
                v-model="queryParams.dataInfo.billNo"
                suffix-icon="el-icon-search"
                placeholder="请输入"
                size="small"
              />
            </el-col>
            <el-col :span="8">
              <label>登记人员</label>
              <el-input
                v-model="queryParams.dataInfo.billNo"
                suffix-icon="el-icon-search"
                placeholder="请输入"
                size="small"
              />
            </el-col>
            <el-col :span="8">
              <label>关联单号</label>
              <el-input
                v-model="queryParams.dataInfo.billNo"
                suffix-icon="el-icon-search"
                placeholder="请输入"
                size="small"
              />
            </el-col>
            <el-col :span="8">
               <label>分配日期</label>
              <el-date-picker
                v-model="outBoundDate"
                type="daterange"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                @change="changeDate">
              </el-date-picker>
            </el-col>
            
            <el-col :span="8">
              <label>客户名称</label>
              <el-input
                v-model="queryParams.dataInfo.billNo"
                suffix-icon="el-icon-search"
                placeholder="请输入"
                size="small"
              />
            </el-col>
            <el-col :span="8">
              <label>VIN码</label>
              <el-input
                v-model="queryParams.dataInfo.billNo"
                suffix-icon="el-icon-search"
                placeholder="请输入"
                size="small"
              />
            </el-col>
            <el-col :span="8">
              <label>备件号</label>
              <el-input
                v-model="queryParams.dataInfo.billNo"
                suffix-icon="el-icon-search"
                placeholder="请输入"
                size="small"
              />
            </el-col>
            <el-col :span="8">
              <label>备件名称</label>
              <el-input
                v-model="queryParams.dataInfo.billNo"
                suffix-icon="el-icon-search"
                placeholder="请输入"
                size="small"
              />
            </el-col>
            <LookupValue :span = "8" :isShowLabel="true" labelName="来源类型" @changeCode="getCode" lookuptype="PA20001" :code="queryParams.dataInfo.billType" />
            <LookupValue :span = "8" :isShowLabel="true" labelName="紧急度" @changeCode="getCode" lookuptype="PA20001" :code="queryParams.dataInfo.billType" />
      </el-row>
    </div>

      <mix-table 
        ref="detailList"
        :queryParams="queryParams2"
        :dynamicTableCols="historyCols"
        :isPaging=false
        :isDialog=true
        :onetableHeight=200 />
    </el-dialog>
  </div>
</template>


<script>
import { paBuDlrInStoreMutationSave } from "@/api/pa/dealerStorage/paBuDlrlnStonage"
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
        outStoreDate:[],
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
            { label: '备件号',codeField:"outStoreCode",comps:{
              type:"link",
              event:this.linkDialog
            }
            },
            { label: '备件名称', codeField: "billType"},
            { label: '当前库存量', codeField: "outStoreDate"},
            { label: '备件品牌', codeField: "custName"}
            
      ],
       queryParams: {
        APIUrl: paApis.paBuDlrOutStoreReturnQueryFindAll.APIUrl,
        InputType: paApis.paBuDlrOutStoreReturnQueryFindAll.InputType,
        ServiceCode: paApis.paBuDlrOutStoreReturnQueryFindAll.ServiceCode,
        dataInfo: {
          outStoreCode: '',
          billType: '',
          beginOutStoreDate: '',
          endOutStoreDate: '',
          billNo:'',
          custName:'',
          a3:'',
          a8:'',
          a9:''
          
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
      detailCols:[
        {label:"缺件单号",codeField:"partBrandCode"},
        {label:"车牌号",width:150,codeField:"partNo"},
        
        {label:"客户名称",codeField:"partName"},
        {label:"本次分配数",codeField:"outStoreQty",comps:{
            type:"inputTxt",
            change:this.changeReturnQty
        }},
        {label:"未分配数",codeField:"hasReturnQty"},
        {label:"缺件数量",codeField:"minstoreQty"},
        
        {label:"下单数",codeField:"unit"},
        {label:"转外购数",codeField:"b1"},
        {label:"分配数量",codeField:"b2"},
        {label:"VIN码",codeField:"b3"},
        {label:"紧急度",codeField:"b4"},
        {label:"希望到货日期",codeField:"b4"},
        {label:"预计到货日期",codeField:"b4"},
        {label:"来源类型",codeField:"b4"},
        {label:"登记人",codeField:"b4"},
        {label:"登记日期",codeField:"b4"},
        
        
      ],
      queryParams1: {
        APIUrl: paApis.paBuDlrOutStoreReturnDQueryFindAll.APIUrl,
        InputType: paApis.paBuDlrOutStoreReturnDQueryFindAll.InputType,
        ServiceCode: paApis.paBuDlrOutStoreReturnDQueryFindAll.ServiceCode,
        dataInfo: {
          documentNumber: '',
          outboundType: '',
          carTypeCode: ''
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
      historyCols:[
          {label:"缺件单号",codeField:"partBrandCode"},
          {label:"客户姓名",codeField:"partBrandCode"},
          {label:"联系电话",codeField:"partBrandCode"},
          {label:"车牌号",codeField:"partBrandCode"},
          {label:"VIN码",codeField:"partBrandCode"},
          {label:"紧急度",codeField:"partBrandCode"},
          {label:"缺件来源",codeField:"partBrandCode"},
          {label:"登记人员",codeField:"partBrandCode"},
          {label:"登记日期",codeField:"partBrandCode"},
          {label:"关联单号",codeField:"partBrandCode"},
          {label:"备件号",codeField:"partBrandCode"},
          {label:"备件名称",codeField:"partBrandCode"},
          {label:"单位",codeField:"partBrandCode"},
          {label:"缺件数量",codeField:"partBrandCode"},
          {label:"分配数量",codeField:"partBrandCode"},
          {label:"分配人",codeField:"partBrandCode"},
          {label:"分配时间",codeField:"partBrandCode"}
      ],
      queryParams2: {
        APIUrl: paApis.paBuDlrOutStoreReturnDQueryFindAll.APIUrl,
        InputType: paApis.paBuDlrOutStoreReturnDQueryFindAll.InputType,
        ServiceCode: paApis.paBuDlrOutStoreReturnDQueryFindAll.ServiceCode,
        dataInfo: {
          documentNumber: '',
          outboundType: '',
          carTypeCode: ''
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
      // paBuDlrInStoreMutationSave(this.pa)
    },
    changeDate(){
      queryParams.dataInfo.beginOutStoreDate = this.outStoreDate[0]
      queryParams.dataInfo.endOutStoreDate = this.outStoreDate[1]
    },
    getBillType(val){
      this.queryParams.dataInfo.billType = val

    },
    getCode(val){

    },
    reset(){
      this.outStoreDate= []
      this.queryParams.dataInfo.beginOutStoreDate=''
      this.queryParams.dataInfo.endOutStoreDate = ''
      this.queryParams.dataInfo.outStoreCode = ''
      this.queryParams.dataInfo.billType = ''
      this.queryParams.dataInfo.billNo = ''
      this.queryParams.dataInfo.custName = ''
      this.queryParams.dataInfo.a3 = ''
      this.queryParams.dataInfo.a8 = ''
      this.queryParams.dataInfo.a9 = ''
    },
    changeReturnQty(row){
         if(parseInt(row.returnQty)  > parseInt(row.outStoreQty)){
            
             this.$message.warning("出库数量不能大于应出数量！")
        }
        
    }
  
  }
  
};
</script>
