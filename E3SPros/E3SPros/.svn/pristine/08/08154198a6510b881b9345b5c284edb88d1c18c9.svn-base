<!--
* description: 欠拨修改
* author: renzjie
* createdDate: 2019-10-22
* logs：
*  20191022 新增页面功能
-->
<template>
  <div class="app-container app-container-table">
      <div class="filter-container filter-params">
        <mix-form
            ref="searchFrom"
            :dynamicFieldsData="fieldsData"
            :dynamicFormFields="fields"
            :isSearch = true
        />
        
        <mix-button
            ref="searchButton"
            :dynamicButtons="buttons"
            :isShowMore="true"
            @toggle="toggle"
        />
      </div>
    
    
    <mix-table
        ref="tableList"
        :queryParams="queryParams"
        :dynamicTableCols="cols"
        :multipleSelect="selection"
        :isPaging=true
        :isDialog=true /> 
    
    <el-dialog
      title="明细查询"
      :visible.sync="dialogFormVisible"
      width="80%"
      @closed="closeDialog"
      @opened="openDialog"
      :append-to-body="true"
      :close-on-click-modal="false"
    >
      
      <mix-table 
        ref="detailList"
        :queryParams="queryParams1"
        :dynamicTableCols="detailCols"
        :isPaging=false
        :isDialog=true
        :onetableHeight=200 />
    </el-dialog>
    
  </div>
</template>


<script>
import { paBuOemLackMutation } from "@/api/pa/orderManage/paBuLackDeleteLog"
import { paApis } from "@/api/graphQLApiList/pa";
import { requestGraphQL } from "@/api/commonRequest";
import LookupValue from '@/components/org/LookupValue'
import mixTable from "@/components/basicComponent/mixTable"
import mixForm from "@/components/basicComponent/mixForm"
import mixButton from "@/components/basicComponent/mixButton"
import mixDetail from "@/components/basicComponent/mixDetail"
import { type } from 'os';
import { format } from 'path';

export default {
  components: {
    mixTable,
    mixForm,
    mixButton,
    LookupValue
  },

  data() {
    return {
        toggleParam:false,
        dialogFormVisible:false,
        historyDialogFormVisible:false,
        selection:"selection",
        outStoreDate:[],
        dataInfo:{
            carBrandCode:'',
            lackId:'',	
            lackPieceQty:'',	
            updateReason:'',	
            lackFlag:'',	
            branchDirectDeliveryQty:'',	
            boEndTime:'',
            applyDirDeliverType:'',	
            updateControlId:'',	
            
        },
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
            
            { label: '经销商品牌', codeField: "billType"},
            { label: '经销商编码', codeField: "outStoreDate"},
            { label: '经销商名称', codeField: "custName"},
            { label: '订单号',codeField:"outStoreCode",comps:{
                type:"link",
              event:this.linkDialog
            }
            },
            { label: '备件品牌', codeField: "custName"},
            { label: '备件号', codeField: "custName"},
            { label: '备件名称', codeField: "custName"},
            { label: '欠拨原因', codeField: "custName"},
            { label: '欠拨修改数量', codeField: "custName"},
            { label: '欠拨修改后数量',isEdit:'"true',width:"150", codeField: "custName",comps:{
                type:"inputNum2",
                precision:2
            }},
            { label: '修改原因',isEdit:'"true', codeField: "custName",comps:{
                type:"inputTxt",
              
            }},
            { label: '欠拨修改后数量',isEdit:'"true', codeField: "custName",comps:{
                type:"inputTxt",
            }},
            { label: '供应商是否直送', codeField: "custName"},
            { label: '经销商收获地址',isEdit:'"true', codeField: "custName",comps:{
                type:"inputTxt",
            }},
            { label: '来源', codeField: "custName"},
            { label: '欠拨生产日期', codeField: "custName"},
            { label: '是否三包重点件', codeField: "custName"},
            { label: '派工单号', codeField: "custName"},
            { label: 'VIN', codeField: "custName"},
            { label: '维修缺件数量', codeField: "custName"},
            { label: '申请直送类型', codeField: "custName"},
            { label: '分配方式', codeField: "custName"},
            { label: '是否特需订单BD', codeField: "custName"},
            { label: '是否定制大总成', codeField: "custName"},
            
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
        {label:"经销商编码",codeField:"partBrandCode"},
        {label:"经销商名称",width:150,codeField:"partNo"},
        
        {label:"备件编码",codeField:"partName"},
        
        {label:"备件名称",codeField:"hasReturnQty"},
        {label:"订单号",codeField:"minstoreQty"},
        
        {label:"变更前数量",codeField:"unit"},
        {label:"变更后数量",codeField:"b1"},
        {label:"修改原因",codeField:"b2"},
        {label:"操作人",codeField:"b3"},
        {label:"欠拨修改日期",codeField:"b4"},
        
        
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
      fields:[
          {label:'经销商品牌',codeField:'carBrandCode',type:'dropdownList',option:[
              {
                  label:'东风日产-日产',
                  value:'1'
              },
              {
                  label:'东风启辰-启辰',
                  value:'2'
              }
          ]},
          {label:'经销商编码',codeField:'dlrCode',type:'inputTxt'},
          {label:'经销商名称',codeField:'partName',type:'inputTxt'},
          {label:'备件号',codeField:'partNo',type:'inputTxt'},
          {label:'备件名称',codeField:'partName',type:'inputTxt'},
          {label:'订单号',codeField:'purOrderCode',type:'inputTxt'},
          {label:'欠拨产生日期',codeField:'lackDate',type:'inputDate',dateType:"datetimerange"}

      ],
      fieldsData:{
          partName:'',
          dlrBaund:''
      },
      buttons:{
          left:[
            {label:"保存"},
            {label:"供应商直送"},
            {label:"分库直送"}    
          ],
          right:[
             {label:"查询",name:"search",type:"primary",event:this.fetchData},
             {label:"重置",name:"reset",},
             
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
        
    },
    toggle(){
        this.$refs.searchFrom.changeToggleParam()
    }
  
  }
  
};
</script>
