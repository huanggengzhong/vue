<template>
  <div class="app-container app-container-table">
    <div class="filter-container filter-button" ref="searcheHeight">
      <el-button type="primary" size="small" @click.native="fetchData('ruleForm')">查询</el-button>
      <el-button size="small" @click.native="refundData()">退款</el-button>
      <el-button size="small" @click.native="exportData()">导出</el-button>
      <el-button size="small" @click.native="resetData()">重置</el-button> 
    </div>

    <div class="filter-container filter-params" ref="conHeight">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" :inline-message=true>
        <el-row :gutter="24">
          <el-col :span="5">
            <el-form-item prop="withdrawingType">
              <lableName curLabelName="退库类型" :isShowLabel="true" :isRequire="true"></lableName>
              <el-select
                v-model="ruleForm.withdrawingType"
                size="small"
                placeholder="请选择"
                clearable
                @change="setWithdrawingType($event)"
              >
                <el-option
                  v-for="item in withdrawingTypeOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </el-form-item>  
          </el-col>
          <el-col :span="5">
            <el-form-item prop="documentCode">
              <lableName curLabelName="单据编号" :isShowLabel="true" :isRequire="false"></lableName>
              <el-input v-model="ruleForm.documentCode" clearable size="small"></el-input>
            </el-form-item>  
          </el-col>
          <el-col :span="5">
            <el-form-item prop="settlementStatus">
              <lableName curLabelName="结算状态" :isShowLabel="true" :isRequire="true"></lableName>
              <el-select
                v-model="ruleForm.settlementStatus"
                size="small"
                placeholder="请选择"
                clearable
                @change="setSettlementStatus($event)"
              >
                <el-option
                  v-for="item in settlementStatusOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </el-form-item>  
          </el-col>
          <el-col :span="5" v-show="agreementShow">
            <el-form-item prop="agreementUnit" >
              <lableName curLabelName="协议单位" :isShowLabel="true" :isRequire="false"></lableName>
              <el-input  v-model="ruleForm.agreementUnit" clearable size="small"></el-input>
            </el-form-item>  
          </el-col>
          <el-col :span="5" v-show="departmentShow">
            <el-form-item prop="recipientsDepartment">
              <lableName curLabelName="领用部门" :isShowLabel="true" :isRequire="false"></lableName>
              <el-input  v-model="ruleForm.recipientsDepartment" clearable size="small"></el-input>
            </el-form-item>  
          </el-col>
          <el-col :span="4">
            <el-button icon="el-icon-plus" @click="changeToggleParam" class="moreParam">更多</el-button>
          </el-col>
        </el-row>
        <el-row :gutter="24" v-show="toggleParam">
          <el-col :span="5">
            <el-form-item prop="makeDate">
              <lableName curLabelName="制单日期" :isShowLabel="true" :isRequire="true"></lableName>
              <el-date-picker
                v-model="ruleForm.makeDate"
                type="daterange"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                @change="getMakeDate($event)"
              ></el-date-picker>
            </el-form-item>  
          </el-col>
        </el-row>
      </el-form>
    </div>
       
        <!--备件退款——服务二网销售备件退款-->
    <mix-table
      ref="refundListTable"
      :queryParams="refundQueryParams"
      :dynamicTableCols="refundUnitCols"
      :isPaging="true"
      v-show="refundShow"
    />
          <!--备件退款——网点调拨退货申请-->
    <mix-table
      ref="transfersListTable"
      :queryParams="transfersQueryParams"
      :dynamicTableCols="transfersUnitCols"
      :isPaging="true"
      v-show="transfersShow"
    />
            <!--备件退款——专营店间调拨取消-->
    <mix-table
      ref="storesListTable"
      :queryParams="storesQueryParams"
      :dynamicTableCols="storesUnitCols"
      :isPaging="true"
      v-show="storesShow"
    />
        <!--备件退款——领用退货申请-->
    <mix-table
      ref="recipientsListTable"
      :queryParams="recipientsQueryParams"
      :dynamicTableCols="recipientsUnitCols"
      :isPaging="true"
      v-show="recipientsShow"
    />
          <!--明细 + 全部-->
    <mixDetail 
      :dialogFormVisible="refundDialogVisible" 
      :cols="refundDetailCols" 
      :queryParams="refundDetailQueryParams" 
      @closeDialog="refundCloseDialog" 
    /> 
         <!--收款弹窗-->
    <refundDialog ref="refundDialog" 
                :partsRefundDialogVisible="partsRefundDialogVisible"
                @close="partsRefundDialogClose" />
  </div>
</template>

<script>
import { the_Height } from "@/components/se/seMixins/makeHeightForTemplate";
import { paApis } from "@/api/graphQLApiList/pa";
import mixTable from "@/components/basicComponent/mixTable";
import mixDetail from "@/components/basicComponent/mixDetail";
import lableName from "@/components/lableName";
import refundDialog from "./partsRefundDialog";

export default {
  mixins: [the_Height],
  components: {
    mixTable,
    mixDetail,
    lableName,
    refundDialog
  },

  data() {
    return {
      count: false,
      count1:false,
      count2:false,
      count3:false,
      count4:true,
      refundShow: true,
      storesShow: false,
      toggleParam: false,
      agreementShow: true,
      transfersShow: false,
      recipientsShow: false,
      departmentShow: false,
      refundDialogVisible: false,
      partsRefundDialogVisible: false,
      tableHeight: '',
      withdrawingTypeOptions: [
        { value: 1, label: "服务二网销售退款" },
        { value: 2, label: "网点调拨退货申请" },
        { value: 3, label: "专营店调拨取消" },
        { value: 4, label: "内部领用退货申请" },
        { value: 5, label: "辅料领用退货申请" },

      ],
      settlementStatusOptions: [
        { value: 1, label: "已结算" },
        { value: 2, label: "未结算" }
      ],
      //备件退款——服务二网销售备件退款
      refundUnitCols: [
        { label: "退库类型", codeField: "withdrawingType", prop: "withdrawingType"},
        { label: "单据编号", codeField: "documentCode", width: 200, prop: "documentCode", comps:{ type:'link', event:this.openRefundDialog}},
        { label: "协议单位", codeField: "agreementUnit", prop: "agreementUnit" },
        { label: "退货金额", codeField: "refundPayment", prop: "refundPayment" },
        { label: "制单日期", codeField: "makeDate", prop: "makeDate" },
        { label: "联系人", codeField: "contact", prop: "contact" },
        { label: "联系电话", codeField: "contactPhone", prop: "contactPhone" },
        { label: "退款状态", codeField: "refundStatus", prop: "refundStatus" },
      ],
      refundQueryParams: {
        APIUrl: paApis.partServicesRefundQueryList.APIUrl,
        InputType: paApis.partServicesRefundQueryList.InputType,
        ServiceCode: paApis.partServicesRefundQueryList.ServiceCode,
        dataInfo: {
          documentCode: "",
          withdrawingType: "",
          settlementStatus: "",
          agreementUnit: "",
          startMakeDate: "",
          endMakeDate: "",
        },
        apiQueryRow: [
          'withdrawingId', 
          'withdrawingType',
          'documentCode',
          'agreementUnit',
          'refundPayment',
          'makeDate',
          'contact',
          'contactPhone',
          'refundStatus',
          'updateControlId'
        ]
      },
      //备件退款——网点调拨退货申请
      transfersUnitCols: [
        { label: "退库类型", codeField: "withdrawingType", prop: "withdrawingType"},
        { label: "单据编号", codeField: "documentCode", width: 200, prop: "documentCode",comps:{ type:'link', event:this.openRefundDialog}},
        { label: "协议单位", codeField: "agreementUnit", prop: "agreementUnit" },
        { label: "退货金额", codeField: "refundPayment", prop: "refundPayment" },
        { label: "制单日期", codeField: "makeDate", prop: "makeDate" },
        { label: "联系人", codeField: "contact", prop: "contact" },
        { label: "联系电话", codeField: "contactPhone", prop: "contactPhone" },
        { label: "退款状态", codeField: "refundStatus", prop: "refundStatus" },
      ],
      transfersQueryParams: {
        APIUrl: paApis.partTransfersApplyQueryList.APIUrl,
        InputType: paApis.partTransfersApplyQueryList.InputType,
        ServiceCode: paApis.partTransfersApplyQueryList.ServiceCode,
        dataInfo: {
          documentCode: "",
          withdrawingType: "",
          settlementStatus: "",
          agreementUnit: "",
          startMakeDate: "",
          endMakeDate: "",
        },
        apiQueryRow: [
          'withdrawingId', 
          'withdrawingType',
          'documentCode',
          'agreementUnit',
          'refundPayment',
          'makeDate',
          'contact',
          'contactPhone',
          'refundStatus',
          'updateControlId'
        ]
      },
      //备件退款——专营店间调拨取消
      storesUnitCols: [
        { label: "退库类型", codeField: "withdrawingType", prop: "withdrawingType"},
        { label: "单据编号", codeField: "documentCode", width: 200, prop: "documentCode",comps:{ type:'link', event:this.openRefundDialog}},
        { label: "协议单位", codeField: "agreementUnit", prop: "agreementUnit" },
        { label: "退货金额", codeField: "refundPayment", prop: "refundPayment" },
        { label: "制单日期", codeField: "makeDate", prop: "makeDate" },
        { label: "联系人", codeField: "contact", prop: "contact" },
        { label: "联系电话", codeField: "contactPhone", prop: "contactPhone" },
        { label: "退款状态", codeField: "refundStatus", prop: "refundStatus" },
      ],
      storesQueryParams: {
        APIUrl: paApis.storesCancelledQueryList.APIUrl,
        InputType: paApis.storesCancelledQueryList.InputType,
        ServiceCode: paApis.storesCancelledQueryList.ServiceCode,
        dataInfo: {
          documentCode: "",
          withdrawingType: "",
          settlementStatus: "",
          agreementUnit: "",
          startMakeDate: "",
          endMakeDate: "",
        },
        apiQueryRow: [
          'withdrawingId', 
          'withdrawingType',
          'documentCode',
          'agreementUnit',
          'refundPayment',
          'makeDate',
          'contact',
          'contactPhone',
          'refundStatus',
          'updateControlId'
        ]
      },
      //备件退款——领用退货申请
      recipientsUnitCols: [
        { label: "退库类型", codeField: "withdrawingType", prop: "withdrawingType"},
        { label: "单据编号", codeField: "documentCode", width: 200, prop: "documentCode",comps:{ type:'link', event:this.openRefundDialog}},
        { label: "领用部门", codeField: "recipientsDepartment", prop: "recipientsDepartment" },
        { label: "领用人员", codeField: "recipientsPersonnel", prop: "recipientsPersonnel" },
        { label: "退货金额", codeField: "refundPayment", prop: "refundPayment" },
        { label: "制单日期", codeField: "makeDate", prop: "makeDate" },
        { label: "退货申请人", codeField: "refundApplicant", prop: "refundApplicant" },
        { label: "退库时间", codeField: "withdrawingTime", prop: "withdrawingTime" },
        { label: "退款状态", codeField: "refundStatus", prop: "refundStatus" },
      ],
      recipientsQueryParams: {
        APIUrl: paApis.recipientsRefundQueryList.APIUrl,
        InputType: paApis.recipientsRefundQueryList.InputType,
        ServiceCode: paApis.recipientsRefundQueryList.ServiceCode,
        dataInfo: {
          documentCode: "",
          withdrawingType: "",
          settlementStatus: "",
          recipientsDepartment: "",
          startMakeDate: "",
          endMakeDate: "",
        },
        apiQueryRow: [
          'withdrawingId', 
          'withdrawingType',
          'documentCode',
          'recipientsDepartment',
          'recipientsPersonnel',
          'refundPayment',
          'makeDate',
          'refundApplicant',
          'withdrawingTime',
          'refundStatus',
          'updateControlId'
        ]
      },
      //备件退款——明细
      refundDetailCols: [
        { label: "备件号", codeField: "partNo", prop: "partNo"},
        { label: "备件名称", codeField: "partName", width: 200, prop: "partName"},
        { label: "单位", codeField: "unit", prop: "unit" },
        { label: "备件品牌", codeField: "partBrand", prop: "partBrand" },
        { label: "备件属性", codeField: "partAttribute", prop: "partAttribute" },
        { label: "备件类别", codeField: "partCategory", prop: "partCategory" },
        { label: "三包重点件", codeField: "threePackagesParts", prop: "threePackagesParts" }
      ],
      refundDetailQueryParams: {
        APIUrl: paApis.refundDetailQueryList.APIUrl,
        InputType: paApis.refundDetailQueryList.InputType,
        ServiceCode: paApis.refundDetailQueryList.ServiceCode,
        dataInfo: {
          documentCode: "",
        },
        apiQueryRow: [
          'partId', 
          'partNo',
          'partName',
          'unit',
          'partBrand',
          'partAttribute',
          'partCategory',
          'threePackagesParts',
          'updateControlId'
        ]
      },
      //查询条件验证
      ruleForm: {
        withdrawingType: '',
        documentCode: '',
        settlementStatus: '',
        agreementUnit: '',
        recipientsDepartment: '',
        makeDate: ''
      },
      rules:{
        withdrawingType:[
          { required: true, message: "请选择退款类型", trigger: "change" }
        ],
        settlementStatus:[
          { required: true, message: "请填写结算状态", trigger: "change" }
        ],
        makeDate:[
          { required: true, message: "请选择制单日期", trigger: "change" }
        ],
      }
    };
  },

  created() {},
  methods: {
    //查询
    fetchData(formName) {
        this.$refs[formName].validate(valid =>{
            if(valid){
                if(this.count4){ //备件退款——服务二网销售备件退款 
                    this.refundShow = true; 
                    this.transfersShow = false; 
                    this.storesShow = false; 
                    this.recipientsShow = false;
                    this.refundQueryParams.dataInfo.withdrawingType = this.ruleForm.withdrawingType;
                    this.refundQueryParams.dataInfo.documentCode = this.ruleForm.documentCode;
                    this.refundQueryParams.dataInfo.settlementStatus = this.ruleForm.settlementStatus;
                    this.refundQueryParams.dataInfo.agreementUnit = this.ruleForm.agreementUnit;
                    this.$refs.refundListTable.queryList();
                    console.log("打开表格 + 备件退款——服务二网销售备件退款")
                }
                if(this.count1){ //备件退款——网点调拨退货申请
                    this.refundShow = false; 
                    this.transfersShow = true; 
                    this.storesShow = false; 
                    this.recipientsShow = false;
                    this.transfersQueryParams.dataInfo.withdrawingType = this.ruleForm.withdrawingType;
                    this.transfersQueryParams.dataInfo.documentCode = this.ruleForm.documentCode;
                    this.transfersQueryParams.dataInfo.settlementStatus = this.ruleForm.settlementStatus;
                    this.transfersQueryParams.dataInfo.agreementUnit = this.ruleForm.agreementUnit;
                    this.$refs.transfersListTable.queryList();
                    console.log("打开表格 + 备件退款——网点调拨退货申请")
                }
                if(this.count2){  //备件退款——专营店间调拨取消
                    this.refundShow = false; 
                    this.transfersShow = false; 
                    this.storesShow = true; 
                    this.recipientsShow = false;
                    this.storesQueryParams.dataInfo.withdrawingType = this.ruleForm.withdrawingType;
                    this.storesQueryParams.dataInfo.documentCode = this.ruleForm.documentCode;
                    this.storesQueryParams.dataInfo.settlementStatus = this.ruleForm.settlementStatus;
                    this.storesQueryParams.dataInfo.agreementUnit = this.ruleForm.agreementUnit;
                    this.$refs.storesListTable.queryList();
                    console.log("打开表格 + 备件退款——专营店间调拨取消")
                }
                if(this.count3){  //备件退款——领用退货申请
                    this.refundShow = false; 
                    this.transfersShow = false; 
                    this.storesShow = false; 
                    this.recipientsShow = true;
                    this.recipientsQueryParams.dataInfo.withdrawingType = this.ruleForm.withdrawingType;
                    this.recipientsQueryParams.dataInfo.documentCode = this.ruleForm.documentCode;
                    this.recipientsQueryParams.dataInfo.settlementStatus = this.ruleForm.settlementStatus;
                    this.recipientsQueryParams.dataInfo.agreementUnit = this.ruleForm.agreementUnit;
                    this.$refs.recipientsListTable.queryList();
                    console.log("打开表格 + 备件退款——领用退货申请")
                }
            }else{
                this.$message({
                message: "查询条件缺少!",
                type: "error"
              });
            }
        })
    },
    //退款
    refundData(){
        if(this.refundShow){ //备件退款——服务二网销售备件退款
            this.$refs.transfersListTable.currentRow = [];
            this.$refs.storesListTable.currentRow = [];
            this.$refs.recipientsListTable.currentRow = [];
            if(this.$refs.refundListTable.currentRow.length == 0){
                this.$alert("请选择一行进行收款！", "信息提示", {
                    confirmButtonText: "确定",
                    type: "warning",
                    callback: action => {}
                });
            }else{
                if(this.$refs.refundListTable.currentRow[0].refundStatus == '已退款'){  //退款状态
                    this.$alert("该退款状态为已退款！", "信息提示", {
                        confirmButtonText: "确定",
                        type: "warning",
                        callback: action => {}
                    });
                }else{
                    this.partsRefundDialogVisible = true;
                    this.$refs.refundDialog.setEditData(this.$refs.refundListTable.currentRow);
                } 
            }
            
        }
        if(this.transfersShow){ //备件退款——网点调拨退货申请
            this.$refs.refundListTable.currentRow = [];
            this.$refs.storesListTable.currentRow = [];
            this.$refs.recipientsListTable.currentRow = []; 
            if(this.$refs.transfersListTable.currentRow.length == 0){ 
                this.$alert("请选择一行进行收款！", "信息提示", {
                    confirmButtonText: "确定",
                    type: "warning",
                    callback: action => {}
                });
            }else{
                if(this.$refs.transfersListTable.currentRow[0].refundStatus == '已退款'){  //退款状态
                    this.$alert("该退款状态为已退款！", "信息提示", {
                        confirmButtonText: "确定",
                        type: "warning",
                        callback: action => {}
                    });
                }else{
                    this.partsRefundDialogVisible = true;
                    this.$refs.refundDialog.setEditData(this.$refs.transfersListTable.currentRow);
                }
            } 
        }
        if(this.storesShow){ //备件退款——专营店间调拨取消
            this.$refs.refundListTable.currentRow = [];
            this.$refs.transfersListTable.currentRow = [];
            this.$refs.recipientsListTable.currentRow = [];  
            if(this.$refs.storesListTable.currentRow.length == 0){ 
                this.$alert("请选择一行进行收款！", "信息提示", {
                    confirmButtonText: "确定",
                    type: "warning",
                    callback: action => {}
                });
            }else{
                if(this.$refs.storesListTable.currentRow[0].refundStatus == '已退款'){  //退款状态
                    this.$alert("该退款状态为已退款！", "信息提示", {
                        confirmButtonText: "确定",
                        type: "warning",
                        callback: action => {}
                    });
                }else{
                    this.partsRefundDialogVisible = true;
                    this.$refs.refundDialog.setEditData(this.$refs.storesListTable.currentRow);
                }
            } 
        }
        if(this.recipientsShow){ //备件退款——领用退货申请
            this.$refs.refundListTable.currentRow = [];
            this.$refs.transfersListTable.currentRow = [];
            this.$refs.storesListTable.currentRow = [];   
            if(this.$refs.recipientsListTable.currentRow.length == 0){ 
                this.$alert("请选择一行进行收款！", "信息提示", {
                    confirmButtonText: "确定",
                    type: "warning",
                    callback: action => {}
                });
            }else{
                 if(this.$refs.recipientsListTable.currentRow[0].refundStatus == '已退款'){  //退款状态
                    this.$alert("该退款状态为已退款！", "信息提示", {
                        confirmButtonText: "确定",
                        type: "warning",
                        callback: action => {}
                    });
                }else{
                    this.partsRefundDialogVisible = true;
                    this.$refs.refundDialog.setEditData(this.$refs.recipientsListTable.currentRow);
                }
            } 
        }
    },
    //导出
    exportData(){
    },
    //重置
    resetData() {
        this.ruleForm.withdrawingType = '';
        this.ruleForm.documentCode = '';
        this.ruleForm.settlementStatus = '';
        this.ruleForm.agreementUnit = '';
        this.ruleForm.recipientsDepartment = '';
        this.ruleForm.makeDate = '';
    },
    //打开明细弹窗
    openRefundDialog(row){
        this.refundDialogVisible = true;
    },
    //关闭明细弹窗
    refundCloseDialog(val){
        if(val=="!**!"){
        this.refundDialogVisible = false;
      }
    },
    //关闭收款弹窗
    partsRefundDialogClose(val){
        this.partsRefundDialogVisible = val;
    },
    //表格自适应
    makeHeight(mh) {
        //备件退款——服务二网销售备件退款
      var strAgreementPage = this.$refs.refundListTable.$refs.paginationHeight.$el.offsetHeight;
      var strAgreementResult = this.$refs.refundListTable.$refs.resultTitleHeight.offsetHeight;
        //备件退款——网点调拨退货申请
      var strServicesPage = this.$refs.transfersListTable.$refs.paginationHeight.$el.offsetHeight;
      var strServicesResult = this.$refs.transfersListTable.$refs.resultTitleHeight.offsetHeight;  
        //备件退款——专营店间调拨取消
      var strInternalPage = this.$refs.storesListTable.$refs.paginationHeight.$el.offsetHeight;
      var strInternalResult = this.$refs.storesListTable.$refs.resultTitleHeight.offsetHeight;  
        //备件退款——领用退货申请
      var strOutboundPage = this.$refs.recipientsListTable.$refs.paginationHeight.$el.offsetHeight;
      var strOutboundResult = this.$refs.recipientsListTable.$refs.resultTitleHeight.offsetHeight;  

      if(this.refundShow) {   //  备件退款——服务二网销售备件退款
        console.log("表格自适应 + 备件退款——服务二网销售备件退款")
        // 减去margin-top/bottom值
        if (!this.$utils.isIE() || isResize) {
            this.tableHeight = mh - this.tableMarginHeight - strAgreementPage - strAgreementResult - 7;
            this.$refs.refundListTable.tableHeight = this.tableHeight;
        } else {
            // IE浏览器需要减去额外高度
            this.tableHeight = mh - this.tableMarginHeight - this.ieHeight - strAgreementPage - strAgreementResult - 7;
            this.$refs.refundListTable.tableHeight = this.tableHeight;
        }
      }   
      if(this.transfersShow) { //  备件退款——网点调拨退货申请
        console.log("表格自适应 + 备件退款——网点调拨退货申请")
        // 减去margin-top/bottom值
        if (!this.$utils.isIE() || isResize) {
            this.tableHeight = mh - this.tableMarginHeight - strServicesPage - strServicesResult - 7;
            this.$refs.transfersListTable.tableHeight = this.tableHeight;
        } else {
            // IE浏览器需要减去额外高度
            this.tableHeight = mh - this.tableMarginHeight - this.ieHeight - strServicesPage - strServicesResult - 7;
            this.$refs.transfersListTable.tableHeight = this.tableHeight;
        }
      }          
      if(this.storesShow) { //  备件退款——专营店间调拨取消
        console.log("表格自适应 + 备件退款——专营店间调拨取消")
        // 减去margin-top/bottom值
        if (!this.$utils.isIE() || isResize) {
            this.tableHeight = mh - this.tableMarginHeight - strInternalPage - strInternalResult - 7;
            this.$refs.storesListTable.tableHeight = this.tableHeight;
        } else {
            // IE浏览器需要减去额外高度
            this.tableHeight = mh - this.tableMarginHeight - this.ieHeight - strInternalPage - strInternalResult - 7;
            this.$refs.storesListTable.tableHeight = this.tableHeight;
        }
      }
      if(this.recipientsShow) { //  备件退款——领用退货申请
      console.log("表格自适应 + 备件退款——领用退货申请")
        // 减去margin-top/bottom值
        if (!this.$utils.isIE() || isResize) {
            this.tableHeight = mh - this.tableMarginHeight - strOutboundPage - strOutboundResult - 7;
            this.$refs.recipientsListTable.tableHeight = this.tableHeight;
        } else {
            // IE浏览器需要减去额外高度
            this.tableHeight = mh - this.tableMarginHeight - this.ieHeight - strOutboundPage - strOutboundResult - 7;
            this.$refs.recipientsListTable.tableHeight = this.tableHeight;
        }
      }
    },
    //获取结算状态的值
    setSettlementStatus(e){  // e中已经获取到值
    //  this.getSettlementStatus = e;
    },
    /**
     * 
     * this.refundShow = true; this.transfersShow = false; this.storesShow = false; 
                    this.recipientsShow = false;
     */
    //退库类型选择
    setWithdrawingType(e){
        switch(e){
            case 1: this.count1 = false; this.count2 = false; this.count3 = false; this.count4 = true;
                    this.agreementShow = true; this.departmentShow = false; 
                    break;
            case 2: this.count1 = true; this.count2 = false; this.count3 = false; this.count4 = false;
                    this.agreementShow = true; this.departmentShow = false; 
                    break;
            case 3: this.count1 = false; this.count2 = true; this.count3 = false; this.count4 = false;
                    this.agreementShow = true; this.departmentShow = false; 
                    break;
            case 4: this.count1 = false; this.count2 = false; this.count3 = true; this.count4 = false;
                    this.agreementShow = false; this.departmentShow = true; 
                    break;
            case 5: this.count1 = false; this.count2 = false; this.count3 = true; this.count4 = false;
                    this.agreementShow = false; this.departmentShow = true; 
                    break;
           default: break;
        }
    },
    //日期选择器分开日期
    getMakeDate(e){   // e中已经获取到值
        var year0 = e[0].getFullYear();
        var month0 = e[0].getMonth() + 1;
        var day0 = e[0].getDate();
        var year1 = e[1].getFullYear();
        var month1 = e[1].getMonth() + 1;
        var day1 = e[1].getDate();
        this.refundQueryParams.dataInfo.startMakeDate = year0+"-"+month0+"-"+day0;
        this.refundQueryParams.dataInfo.endMakeDate = year1+"-"+month1+"-"+day1;
        this.transfersQueryParams.dataInfo.startMakeDate = year0+"-"+month0+"-"+day0;
        this.transfersQueryParams.dataInfo.endMakeDate = year1+"-"+month1+"-"+day1;
        this.storesQueryParams.dataInfo.startMakeDate = year0+"-"+month0+"-"+day0;
        this.storesQueryParams.dataInfo.endMakeDate = year1+"-"+month1+"-"+day1;
        this.recipientsQueryParams.dataInfo.startMakeDate = year0+"-"+month0+"-"+day0;
        this.recipientsQueryParams.dataInfo.endMakeDate = year1+"-"+month1+"-"+day1;
    },
    //更多改变布局
    changeToggleParam() {
      if (!this.count) {
        this.toggleParam = true;
        this.count = true;
      } else {
        this.toggleParam = false;
        this.count = false;
      }
    },
  }
};
</script>
