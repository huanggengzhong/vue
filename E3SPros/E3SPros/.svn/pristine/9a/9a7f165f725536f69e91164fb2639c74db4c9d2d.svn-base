<!--
* description: 经销商备件出库
* author: renzjie
* createdDate: 2019-10-15
* logs：
*  20191015 新增页面功能
-->
<template>
  <div class="app-container app-container-table">
    <div class="filter-container filter-button">
      <el-button type="primary" size="small" @click="fetchData" >查询</el-button>
      <el-button size="small" >打印</el-button>
      <el-button size="small" @click="reset" >重置</el-button>
    </div>
    
    <div class="filter-container filter-params">
      <el-row :gutter="26">
        
            <el-col :span="6">
              <label>单据编号</label>
              <el-input
                v-model="dataInfo.flitOrderCode"
                suffix-icon="el-icon-search"
                placeholder="请输入"
                size="small"
              />
            </el-col>
            <LookupValue :span = "6" :isShowLabel="true" labelName="单据类型" @changeCode="getCode" lookuptype="PA0022" :code="dataInfo.flitType" />
            <el-col :span="6">
               <label>单据日期</label>
              <el-date-picker
                v-model="outBoundDate"
                type="daterange"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                value-format="yyyy-MM-dd HH:mm:ss"
                
                @change="changeDate">
              </el-date-picker>
            </el-col>
            <el-col :span="6">
               <label>单据状态</label>
              <el-select  @change="changeCode" clearable collapse-tags size="small" v-model="dataInfo.outStoreStatus">
                <el-option v-for="(item, i) in options" :key="i" :label="item.label" :value="item.value"></el-option>
            </el-select>
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
      <el-button type="primary" size="small" @click="save" >出库</el-button>
     </div>
     <div class="filter-container filter-params">
      
     </div>
      <mix-table 
        ref="detailList"
        :queryParams="queryParamsD"
        :dynamicTableCols="detailCols"
        :isShowSelect=false
        :isPaging=false
        :isDialog=true
        :onetableHeight=200 />
    </el-dialog>
  </div>
</template>


<script>
import { paBuDlrOutStoreMutationSave } from "@/api/pa/outManage/BuReturnApplyOrderQueryFindAll"
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
        dlrId:'',
        toggleParam:false,
        dialogFormVisible:false,
        outBoundDate:[],
        billType:'',
        // 查询条件
        dataInfo: {
          flitOrderCode: '',
          flitType: '1',
          beginFlitDate: '',
          endFlitDate: '',
          outStoreStatus:''
        },
        //保存参数dataInfo1
        dataInfo1:{
          billType:'',
          billBigType:'3',
          relateOrderId:'',
          relateOrderCode:'',
          updateControlId:''
        },
        dataInfo2:[],
        row:{
          flitOrderCode:'',
          flitType:'',
          billDate:'',
          deliveryNo:'',
          outStoreStatus:'',
          total:'',
          amount:'',
          receiptDate:'',
          remarks:''
        },
        options:[
            {
                label:'全部',
                value:1
            },
            {
                label:'部分出库',
                value:2
            },
            {
                label:'未出库',
                value:3
            }
        ],
        cols:[
            { label: '单据编号',codeField:"flitOrderCode",comps:[{
              type:"link",
              event:this.linkDialog
            }]
            },
            { label: '单据类型', codeField: "flitTypeName"},
            { label: '单据日期', codeField: "flitDate"},
            { label: '客户名称', codeField: "custFullName"},
            
            { label: '领料部门', codeField: "a2"},
            { label: '领料人', codeField: "a3"},
            
            { label: '出库状态', codeField: "outStoreStatus"},
            { label: '总品种', codeField: "flitVariety"},
            { label: '总数量', codeField: "total"},
            { label: '总金额', codeField: "amount"},
            { label: '车牌号', codeField: "carLicense"},
            { label: 'VIN', codeField: "vin"},
            { label: '服务代表', codeField: "a5"},
            { label: '制单人', codeField: "createdName"},
            { label: '制单日期', codeField: "createdDate"},
            { label: '备注', codeField: "remarks"},
            
            
      ],
      // 默认维修出库
       queryParams: {
        APIUrl: paApis.seBuRepairOrderQueryFindAll.APIUrl,
        InputType: paApis.seBuRepairOrderQueryFindAll.InputType,
        ServiceCode: paApis.seBuRepairOrderQueryFindAll.ServiceCode,
        dataInfo: {
          repairOrderCode: '',
          billType: '',
          repairTimeBeg: '',
          repairTimeEnd: '',
          outStoreStatus:''
        },
        apiQueryRow: [
            'balanceTimes',
            'batteryCode',
            'billType',
            'businessType',
            'businessTypeName',
            'canUseQtyReal',
            'canUseQtyTheory',
            'cancelDate',
            'cancelEmpId',
            'cancelReason',
            'carBrandCode',
            'carColorName',
            'carId',
            'carLicense',
            'carOwnerId',
            'carSaleOrder',
            'carSeriesCode',
            'carType',
            'carTypeCode',
            'cardNo',
            'column1',
            'column10',
            'column2',
            'column3',
            'column4',
            'column5',
            'column6',
            'column7',
            'column8',
            'column9',
            'createdDate',
            'createdName',
            'creator',
            'csDesc',
            'custName',
            'custTel',
            'dealRelustDesc',
            'discountAmount',
            'disposeInfo',
            'dlrCode',
            'dlrCustNo',
            'dlrId',
            'dlrLeastSaleQty1',
            'dutyEmpId',
            'engineNo',
            'factAmount',
            'fastRepairType',
            'groupCode',
            'groupId',
            'guaranteeApplyCode',
            'haveOutStoreQty',
            'ifsEcaseStatus',
            'isAccident',
            'isArtCase',
            'isClean',
            'isCombo',
            'isEnable',
            'isFirst',
            'isGather',
            'isMessage',
            'isRemaintain',
            'isRescue',
            'isRetrospectPart',
            'isSendRepair',
            'isWait',
            'lastUpdatedDate',
            'linkDId',
            'mainPartitem',
            'mainWorkitem',
            'maxBusinessType',
            'maxRepairTypeCode',
            'mileage',
            'modifier',
            'modifyName',
            'mycatOpTime',
            'oemCode',
            'oemId',
            'oil',
            'otherAmount',
            'otherDueAmount',
            'outStoreQty1',
            'partAmount',
            'partBrandCode1',
            'partBrandName',
            'partDiscount',
            'partDueAmount',
            'partId1',
            'partName',
            'partNo',
            'partQty',
            'placeCode',
            'placeId',
            'policyCompanyCode',
            'policyCompanyId',
            'preGetDate',
            'receptionTime',
            'recommendItem',
            'relateOrderCode',
            'relateOrderId',
            'remark',
            'remindState',
            'repairAmount',
            'repairDeliveryDate',
            'repairDesc',
            'repairDueAmount',
            'repairMan',
            'repairOrderCode',
            'repairOrderId',
            'repairOrderStatus',
            'repairTel',
            'repairTime',
            'repairTypeCode',
            'repairTypeName',
            'reserveOrderCode',
            'retRepairCode',
            'runupAmount',
            'saEmpId',
            'saName',
            'saleAmount1',
            'salePrice',
            'sdpOrgId',
            'sdpUserId',
            'sendRepairBillCode',
            'sendRepairShop',
            'sendRepairShopSa',
            'sendRepairStatus',
            'serviceLine',
            'storeCostAmount',
            'storePriceAmount',
            'storeQty',
            'trunRepairDate',
            'unit1',
            'updateControlId',
            'vin',
            'warehouseCode',
            'warehouseId',
            'warehouseName',
            'wiAmount',
            'wiDueAmount'
        ]
      },
       //调拨出库_主表查询
       queryParams1: {
        APIUrl: paApis.paBuDlrFlitOrderQueryFindAll.APIUrl,
        InputType: paApis.paBuDlrFlitOrderQueryFindAll.InputType,
        ServiceCode: paApis.paBuDlrFlitOrderQueryFindAll.ServiceCode,
        dataInfo: {
          flitOrderCode: '',
          flitType: '',
          beginFlitDate: '',
          endFlitDate: '',
          // outStoreStatus:''
        },
        apiQueryRow: [
           'addRate',
           'auditDate',
           'auditStatus',
           'auditorId',
           'balanceDate',
           'balanceEmpId',
           'balanceStatus',
           'column1',
           'column10',
           'column2',
           'column3',
           'column4',
           'column5',
           'column6',
           'column7',
           'column8',
           'column9',
           'createdDate',
           'createdName',
           'creator',
           'custClassName',
           'custFullName',
           'dlrFlitOrderId',
           'dlrId',
           'fiLackfareTime',
           'flitDate',
           'flitDirection',
           'flitOrderCode',
           'flitReferAmount',
           'flitStatus',
           'flitStatusName',
           'flitType',
           'flitTypeName',
           'flitVariety',
           'groupCode',
           'groupId',
           'outStoreStatus',
           'isEnable',
           'isSystem',
           'lastUpdatedDate',
           'modifier',
           'modifyName',
           'mycatOpTime',
           'needDlrId',
           'oemCode',
           'oemId',
           'orderNo',
           'outDlrId',
           'paCustId',
           'partBrandCode',
           'payAmount',
           'payMode',
           'purEmpId',
           'receiveAddr',
           'rejectReason',
           'saleAmount',
           'sdpOrgId',
           'sdpUserId',
           'transStatus',
           'updateControlId'
        ]
      },
      // 维修出库_主表查询
       queryParams2: {
        APIUrl: paApis.seBuRepairOrderQueryFindAll.APIUrl,
        InputType: paApis.seBuRepairOrderQueryFindAll.InputType,
        ServiceCode: paApis.seBuRepairOrderQueryFindAll.ServiceCode,
        dataInfo: {
          repairOrderCode: '',
          billType: '',
          repairTimeBeg: '',
          repairTimeEnd: '',
          outStoreStatus:''
        },
        apiQueryRow: [
            'balanceTimes',
            'batteryCode',
            'billType',
            'businessType',
            'businessTypeName',
            'canUseQtyReal',
            'canUseQtyTheory',
            'cancelDate',
            'cancelEmpId',
            'cancelReason',
            'carBrandCode',
            'carColorName',
            'carId',
            'carLicense',
            'carOwnerId',
            'carSaleOrder',
            'carSeriesCode',
            'carType',
            'carTypeCode',
            'cardNo',
            'column1',
            'column10',
            'column2',
            'column3',
            'column4',
            'column5',
            'column6',
            'column7',
            'column8',
            'column9',
            'createdDate',
            'createdName',
            'creator',
            'csDesc',
            'custName',
            'custTel',
            'dealRelustDesc',
            'discountAmount',
            'disposeInfo',
            'dlrCode',
            'dlrCustNo',
            'dlrId',
            'dlrLeastSaleQty1',
            'dutyEmpId',
            'engineNo',
            'factAmount',
            'fastRepairType',
            'groupCode',
            'groupId',
            'guaranteeApplyCode',
            'haveOutStoreQty',
            'ifsEcaseStatus',
            'isAccident',
            'isArtCase',
            'isClean',
            'isCombo',
            'isEnable',
            'isFirst',
            'isGather',
            'isMessage',
            'isRemaintain',
            'isRescue',
            'isRetrospectPart',
            'isSendRepair',
            'isWait',
            'lastUpdatedDate',
            'linkDId',
            'mainPartitem',
            'mainWorkitem',
            'maxBusinessType',
            'maxRepairTypeCode',
            'mileage',
            'modifier',
            'modifyName',
            'mycatOpTime',
            'oemCode',
            'oemId',
            'oil',
            'otherAmount',
            'otherDueAmount',
            'outStoreQty1',
            'partAmount',
            'partBrandCode1',
            'partBrandName',
            'partDiscount',
            'partDueAmount',
            'partId1',
            'partName',
            'partNo',
            'partQty',
            'placeCode',
            'placeId',
            'policyCompanyCode',
            'policyCompanyId',
            'preGetDate',
            'receptionTime',
            'recommendItem',
            'relateOrderCode',
            'relateOrderId',
            'remark',
            'remindState',
            'repairAmount',
            'repairDeliveryDate',
            'repairDesc',
            'repairDueAmount',
            'repairMan',
            'repairOrderCode',
            'repairOrderId',
            'repairOrderStatus',
            'repairTel',
            'repairTime',
            'repairTypeCode',
            'repairTypeName',
            'reserveOrderCode',
            'retRepairCode',
            'runupAmount',
            'saEmpId',
            'saName',
            'saleAmount1',
            'salePrice',
            'sdpOrgId',
            'sdpUserId',
            'sendRepairBillCode',
            'sendRepairShop',
            'sendRepairShopSa',
            'sendRepairStatus',
            'serviceLine',
            'storeCostAmount',
            'storePriceAmount',
            'storeQty',
            'trunRepairDate',
            'unit1',
            'updateControlId',
            'vin',
            'warehouseCode',
            'warehouseId',
            'warehouseName',
            'wiAmount',
            'wiDueAmount'
        ]
      },
      detailCols:[
        
        {label:"备件号",codeField:"partNo"},
        {label:"备件编码",codeField:"partBrandCode",comps:[{
              type:"link"
              
        }]},
        {label:"备件名称",codeField:"partName"},
          
        {label:"应出数量",codeField:"outQty"}, 
        {label:"已出数量",codeField:"hasOutQty"},
        {label:"取消数量",codeField:"cancelQty"},
        {label:"实际可用",codeField:"canUseQtyReal"},
        {label:"最小出库数量",codeField:"b3"},
        {label:"出库数量",codeField:"outStoreQty",isEdit:"true",width:100,comps:[{
            type:"inputTxt",
            change: this.changoutQtyTemp
        }]},
        {label:"单位",codeField:"unit"},
        {label:"单价",codeField:"flitFactPrice"},
        {label:"税率",codeField:"taxRate"},
        {label:"税额",codeField:"b5"},
        {label:"含税金额",codeField:"flitPrice"},
        
        // 暂时不需要当前字段
        
        // {label:"追溯件号",codeField:"b6",isEdit:"true",width:150,comps:{
        //       type:"inputTxt"
              
        //     }},
        // {label:"原追溯件号",codeField:"a7",isEdit:"true",width:150,comps:{
        //       type:"inputTxt",
              
        // }},
        
        {label:"备注",codeField:"remarks",isEdit:"true",width:150,comps:[{
              type:"inputTxt",
              
        }]},
      ],
      queryParamsD: {
        APIUrl: paApis.paBuDlrFlitOrderDQueryFindAll.APIUrl,
        InputType: paApis.paBuDlrFlitOrderDQueryFindAll.InputType,
        ServiceCode: paApis.paBuDlrFlitOrderDQueryFindAll.ServiceCode,
        dataInfo: {
          dlrFlitOrderId: '',
          dlrId: ''
        },
        apiQueryRow: [
          'canUseQtyReal',
          'canUseQtyTheory',
          'cancelAmount',
          'cancelQty',
          'column1',
          'column10',
          'column2',
          'column3',
          'column4',
          'column5',
          'column6',
          'column7',
          'column8',
          'column9',
          'createdDate',
          'createdName',
          'creator',
          'dlrFlitOrderDId',
          'dlrFlitOrderId',
          'dlrLeastSaleQty',
          'dlrPrice',
          'dlrRowState',
          'flitFactPrice',
          'flitOrderCode',
          'flitPrice',
          'flitQty',
          'flitReferAmount',
          'flitReferPrice',
          'groupCode',
          'groupId',
          'inStoreQty',
          'isEnable',
          'isSystem',
          'lastUpdatedDate',
          'modifier',
          'modifyName',
          'mycatOpTime',
          'oemCode',
          'oemId',
          'orderNo',
          'outReturnQty',
          'outStoreQty',
          'outStoreQtyN',
          'partBrandCode',
          'partBrandName',
          'partId',
          'partName',
          'partNo',
          'partPropertyCode',
          'partPropertyName',
          'partTypeCode',
          'partTypeId',
          'partTypeName',
          'poItemLine',
          'purCarTypeCode',
          'purCarTypeName',
          'salePrice',
          'sdpOrgId',
          'sdpUserId',
          'storeQty',
          'unit',
          'updateControlId',
          'userPrice'
        ]
      },
    }
  },
  created() {
    this.dlrId = this.$store.getters.orgInfo.dlrId
  },
  methods:{
    fetchData(){
      this.billType = this.dataInfo.flitType
      
      if(this.dataInfo.flitType === "3" || this.dataInfo.flitType ==="7"){
        if(this.dataInfo.flitType == "3"){
          this.queryParams1.dataInfo.flitType = "0"
        }else{
          this.queryParams1.dataInfo.flitType = "1"
        }
        this.queryParams1.dataInfo.flitOrderCode = this.dataInfo.flitOrderCode
        this.queryParams1.dataInfo.beginFlitDate = this.dataInfo.beginFlitDate
        this.queryParams1.dataInfo.endFlitDate = this.dataInfo.endFlitDate
        this.queryParams1.dataInfo.outStoreStatus = this.dataInfo.outStoreStatus
        // API参数配置
        this.queryParams = this.queryParams1
        this.$refs.tableList.queryParams = this.queryParams1
      }
      if(this.dataInfo.flitType === "1" ){
        this.queryParams1.dataInfo.billType = this.dataInfo.flitType
        this.queryParams1.dataInfo.repairOrderCode = this.dataInfo.flitOrderCode
        this.queryParams1.dataInfo.repairTimeBeg = this.dataInfo.beginFlitDate
        this.queryParams1.dataInfo.repairTimeEnd = this.dataInfo.endFlitDate
        this.queryParams1.dataInfo.outStoreStatus = this.dataInfo.outStoreStatus
        this.queryParams = this.queryParams2
        this.$refs.tableList.queryParams = this.queryParams2
      }
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
      
      this.dataInfo1.billType = this.billType
      //调拨保存
      
      this.dataInfo1.relateOrderId = row.dlrFlitOrderId
      this.dataInfo1.relateOrderCode = row.flitOrderCode
      this.dataInfo1.updateControlId = row.updateControlId

      this.queryParamsD.dataInfo.dlrId = "202"
      this.queryParamsD.dataInfo.dlrFlitOrderId = "e4d3ece801534758933af0edd1d319fc"
      this.dialogFormVisible = true
      this.row = {

      }
      this.row = row
      this.$refs.detailList.tableData = []
    },
    openDialog(){
      this.$refs.detailList.queryList()
     
    },
    closeDialog(){
      this.dialogFormVisible = false

    },
    save(){
      this.dataInfo2 = []
      for(var i=0;i<this.$refs.detailList.tableData.length;i++){
        var data = {
          partId:this.$refs.detailList.tableData[i].partId,
          // dlrFlitOrderDId
          partNo:this.$refs.detailList.tableData[i].partNo,
          linkDId:this.$refs.detailList.tableData[i].dlrFlitOrderDId,
          
          outStoreQty:this.$refs.detailList.tableData[i].outStoreQty,
          leastSaleQty:1
          // remarks:this.$refs.detailList.tableData[i].remarks,
        }
        this.dataInfo2.push(data)
      }
      
      paBuDlrOutStoreMutationSave(this.dataInfo1,this.dataInfo2)
    },
    changeDate(){
      
      this.dataInfo.beginFlitDate = this.outBoundDate[0]
      this.dataInfo.endFlitDate = this.outBoundDate[1]
    },
    getCode(val){
      
      this.dataInfo.flitType = val

    },
    reset(){
      this.outBoundDate= []
      this.dataInfo.beginFlitDate=''
      this.dataInfo.endFlitDate = ''
      this.dataInfo.flitOrderCode = ''
      this.dataInfo.flitType = ''
      this.dataInfo.outStoreStatus = ''
    },
    //出库数量校验
    changoutQtyTemp(row){
        if(parseInt(row.outQtyTemp)  > parseInt(row.outQty)){
            
             this.$message.warning("出库数量不能大于应出数量！")
        }
    }
  
  }
  
};
</script>
