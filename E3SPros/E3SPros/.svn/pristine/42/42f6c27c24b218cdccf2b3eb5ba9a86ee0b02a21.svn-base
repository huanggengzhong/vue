<template>
  <div class="app-container app-container-table">
    <div class="filter-container filter-button" ref="searcheHeight">
      <el-button type="primary" size="small" @click.native="fetchData('ruleForm')">查询</el-button>
      <el-button size="small" @click.native="collectionData()" v-show="collectionShow">收款</el-button>
      <el-button size="small" @click.native="settlementData()" v-show="settlementShow">结算</el-button>
      <el-button size="small" @click.native="exportData()">导出</el-button>
      <el-button size="small" @click.native="printData()" :disabled="isDisabled">打印</el-button>
      <el-button size="small" @click.native="resetData()">重置</el-button> 
    </div>

    <div class="filter-container filter-params" ref="conHeight">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" :inline-message=true>
        <el-row :gutter="24">
          <el-col :span="5">
            <el-form-item prop="custCode">
              <lableName curLabelName="收款对象" :isShowLabel="true" :isRequire="true"></lableName>
              <el-select
                v-model="ruleForm.custCode"
                size="small"
                placeholder="请选择"
                clearable
                @change="setDocumentTypeOptions($event)"
              >
                <el-option
                  v-for="item in collectionOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </el-form-item>  
          </el-col>
          <el-col :span="5">
            <el-form-item prop="flitType">
              <lableName curLabelName="单据类型" :isShowLabel="true" :isRequire="true"></lableName>
              <el-select
                v-model="ruleForm.flitType"
                size="small"
                placeholder="请选择"
                clearable
                @change="setagreementUnit($event)"
              >
                <el-option
                  v-for="item in documentTypeOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </el-form-item>  
          </el-col>
          <el-col :span="5">
            <label>单据编号</label>
            <el-input v-model="agreementUnitQueryParams.dataInfo.documentCode" clearable size="small"></el-input>
          </el-col>
          <el-col :span="5">
            <label>结算状态</label>
            <el-select
              v-model="agreementUnitQueryParams.dataInfo.settlementStatus"
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
          </el-col>
          <el-col :span="4">
            <el-button icon="el-icon-plus" @click="changeToggleParam" class="moreParam">更多</el-button>
          </el-col>
        </el-row>
        <el-row :gutter="24" v-show="toggleParam">
          <el-col :span="5" v-show="agreementUnitParam">
            <label>协议单位</label>
            <el-input  v-model="agreementUnitQueryParams.dataInfo.agreementUnit" clearable size="small"></el-input>
          </el-col>
          <el-col :span="5" v-show="recipientsDepartmentParam">
            <label>领用部门</label>
            <el-input  v-model="internalQueryParams.dataInfo.recipientsDepartment" clearable size="small"></el-input>
          </el-col>
          <el-col :span="5" v-show="outboundPersonnelParam">
            <label>出库人员</label>
            <el-input  v-model="outboundQueryParams.dataInfo.outboundPersonnel" clearable size="small"></el-input>
          </el-col>
          <el-col :span="5">
            <label>制单日期</label>
            <el-date-picker
              v-model="makeDate"
              type="daterange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              @change="getMakeDate($event)"
            ></el-date-picker>
          </el-col>
        </el-row>
      </el-form>
    </div>
       
        <!--协议单位 + 调拨销售单-->
    <mix-table
      ref="agreementUnitListTable"
      :queryParams="agreementUnitQueryParams"
      :dynamicTableCols="agreementUnitCols"
      :isPaging="true"
      v-show="agreementUnitShow"
    />
        <!--协议单位 + 服务二网备件需求-->
    <mix-table
      ref="twoServicesListTable"
      :queryParams="twoServicesQueryParams"
      :dynamicTableCols="twoServicesCols"
      :isPaging="true"
      v-show="twoServicesShow"
    />
        <!--内部 + 领用出库-->
    <mix-table
      ref="internalListTable"
      :queryParams="internalQueryParams"
      :dynamicTableCols="internalCols"
      :isPaging="true"
      v-show="recipientsWarehouseShow"
    />
        <!--内部 + 盘出库-->
    <mix-table
      ref="outboundListTable"
      :queryParams="outboundQueryParams"
      :dynamicTableCols="outboundCols"
      :isPaging="true"
      v-show="plateOutboundShow"
    />
      <!--明细 + 协议单位-->
    <mixDetail 
      :dialogFormVisible="accessoriesDialogVisible" 
      :cols="accessoriesCols" 
      :queryParams="accessoriesQueryParams" 
      @closeDialog="accessoriesCloseDialog" 
    /> 
      <!--明细 + 内部-->
    <mixDetail 
      :dialogFormVisible="internalDialogVisible" 
      :cols="internalDetailCols" 
      :queryParams="internalQueryDetailParams" 
      @closeDialog="internalCloseDialog" 
    /> 
      <!--收款弹窗-->
    <collectionDialog ref="collectionDialog" 
                :collectionDialogVisible="collectionDialogVisible"
                @close="collectionDialogClose" />  
  </div>
</template>

<script>
import { settlementDoQMutationList } from "@/api/pa/orderAuditItem/orderAuditItem";
import { the_Height } from "@/components/se/seMixins/makeHeightForTemplate";
import { paApis } from "@/api/graphQLApiList/pa";
import mixTable from "@/components/basicComponent/mixTable";
import mixDetail from "@/components/basicComponent/mixDetail";
import lableName from "@/components/lableName";
import collectionDialog from "./accessoriesCollectionDialog"

export default {
  mixins: [the_Height],
  components: {
    mixTable,
    mixDetail,
    lableName,
    collectionDialog
  },

  data() {
    return {
      agreementUnitParam: true,
      recipientsDepartmentParam: false,
      outboundPersonnelParam: false,
      flag: true, 
      count: false,
      count1: false,
      count2: false,
      count3: false,
      count4: false,
      toggleParam: false,
      isDisabled: false,
      agreementUnitShow: true,
      twoServicesShow: false,
      recipientsWarehouseShow: false,
      plateOutboundShow: false,
      settlementShow: false,
      collectionShow: true,
      accessoriesDialogVisible: false,
      internalDialogVisible: false,
      collectionDialogVisible: false,
      makeDate: '',
      tableHeight: '',
      getSettlementStatus: '',
      collectionOptions: [
        { value: 1, label: "协议单位" },
        { value: 2, label: "内部" }
      ],
      documentTypeOptions: [],
      documentTypeOptions1: [
        { value: 1, label: "调拨销售单" },
        { value: 2, label: "服务二网备件需求" }
      ],
      documentTypeOptions2: [
        { value: 1, label: "内部领用出库" },
        { value: 2, label: "辅助领用出库" },
        { value: 3, label: "报废出库" },
        { value: 4, label: "盘亏出库" }
      ],
      settlementStatusOptions: [
        { value: 1, label: "已结算" },
        { value: 2, label: "未结算" }
      ],
      //协议单位 + 调拨销售单
      agreementUnitCols: [
        { label: "单据类型", codeField: "documentType", prop: "documentType"},
        { label: "单据编号", codeField: "documentCode", width: 200, comps:{ type:'link', event:this.openAccessoriesDialog}, prop: "documentCode" },
        { label: "协议单位", codeField: "agreementUnit", prop: "agreementUnit" },
        { label: "参考价汇总金", codeField: "referencePricesAllGold", prop: "referencePricesAllGold" },
        { label: "调拨价汇总金", codeField: "transfersPricesAllGold", prop: "transfersPricesAllGold" },
        { label: "已收金额", codeField: "receivedAmount", prop: "receivedAmount" },
        { label: "制单日期", codeField: "makeDate", prop: "makeDate" },
        { label: "联系人", codeField: "contact", prop: "contact" },
        { label: "联系电话", codeField: "contactPhone", prop: "contactPhone" },
        { label: "结算状态", codeField: "settlementStatus", prop: "settlementStatus"},
      ],
      agreementUnitQueryParams: {
        APIUrl: paApis.PaBuDlrFlitOrderQueryFindAll.APIUrl,
        InputType: paApis.PaBuDlrFlitOrderQueryFindAll.InputType,
        ServiceCode: paApis.PaBuDlrFlitOrderQueryFindAll.ServiceCode,
        dataInfo: {
          collectionObjects: "",
          documentType: "",
          documentCode: "",
          settlementStatus: "",
          agreementUnit: "",
          startMakeDate: "",
          endMakeDate: "",
        },
        apiQueryRow: [
          "documentId",
          "documentType",
          "documentCode",
          "agreementUnit",
          "referencePricesAllGold",
          "transfersPricesAllGold",
          "receivedAmount",
          "makeDate",
          "contact",
          "contactPhone",
          "settlementStatus",
          "updateControlId"
        ]
      },
      //协议单位 + 服务二网备件需求
      twoServicesCols: [
        { label: "单据类型", codeField: "documentType", prop: "documentType" },
        { label: "单据编号", codeField: "documentCode", width: 200, comps:{ type:'link', event:this.openAccessoriesDialog }, prop: "documentCode"},
        { label: "协议单位", codeField: "agreementUnit", prop: "agreementUnit" },
        { label: "参考价汇总金", codeField: "referencePricesAllGold", prop: "referencePricesAllGold" },
        { label: "调拨价汇总金", codeField: "transfersPricesAllGold", prop: "transfersPricesAllGold" },
        { label: "已收金额", codeField: "receivedAmount", prop: "receivedAmount" },
        { label: "制单日期", codeField: "makeDate", prop: "makeDate" },
        { label: "联系人", codeField: "contact", prop: "contact" },
        { label: "联系电话", codeField: "contactPhone", prop: "contactPhone" },
        { label: "结算状态", codeField: "settlementStatus", prop: "settlementStatus"},
      ],
      twoServicesQueryParams: {
        APIUrl: paApis.twoServicesQueryList.APIUrl,
        InputType: paApis.twoServicesQueryList.InputType,
        ServiceCode: paApis.twoServicesQueryList.ServiceCode,
        dataInfo: {
          collectionObjects: "",
          documentType: "",
          documentCode: "",
          settlementStatus: "",
          agreementUnit: "",
          startMakeDate: "",
          endMakeDate: ""
        },
        apiQueryRow: [
          "documentId",
          "documentType",
          "documentCode",
          "agreementUnit",
          "referencePricesAllGold",
          "transfersPricesAllGold",
          "receivedAmount",
          "makeDate",
          "contact",
          "contactPhone",
          "settlementStatus",
          "updateControlId"
        ]
      },
       //内部 + 领用出库
      internalCols: [
        { label: "单据类型", codeField: "documentType", prop: "documentType" },
        { label: "单据编号", codeField: "documentCode", width: 200, comps:{ type:'link', event:this.openinternalDialog }, prop: "documentCode"},
        { label: "领用部门", codeField: "recipientsDepartment", prop: "recipientsDepartment"},
        { label: "领用人员", codeField: "recipientsPersonnel", prop: "recipientsPersonnel"},
        { label: "总价", codeField: "totalPrice", prop: "totalPrice" },
        { label: "制单日期", codeField: "makeDate", prop: "makeDate" },
        { label: "出库人员", codeField: "outboundPersonnel", prop: "outboundPersonnel" },
        { label: "出库日期", codeField: "outboundDate", prop: "outboundDate" },
        { label: "结算状态", codeField: "settlementStatus", prop: "settlementStatus"},
      ],
      internalQueryParams: {
        APIUrl: paApis.internalQueryList.APIUrl,
        InputType: paApis.internalQueryList.InputType,
        ServiceCode: paApis.internalQueryList.ServiceCode,
        dataInfo: {
          collectionObjects: "",
          documentType: "",
          documentCode: "",
          settlementStatus: "",
          recipientsDepartment: "",
          startMakeDate: "",
          endMakeDate: ""
        },
        apiQueryRow: [
          "documentId",
          "documentType",
          "documentCode",
          "recipientsDepartment",
          "recipientsPersonnel",
          "totalPrice",
          "makeDate",
          "outboundPersonnel",
          "outboundDate",
          "settlementStatus",
          "updateControlId"
        ]
      },
      //内部 + 盘出库
      outboundCols: [
        { label: "单据类型", codeField: "documentType", prop: "documentType" },
        { label: "单据编号", codeField: "documentCode", width: 200, comps:{ type:'link', event:this.openinternalDialog }, prop: "documentCode"},
        { label: "总价", codeField: "totalPrice", prop: "totalPrice" },
        { label: "制单日期", codeField: "makeDate", prop: "makeDate" },
        { label: "出库人员", codeField: "outboundPersonnel", prop: "outboundPersonnel" },
        { label: "出库日期", codeField: "outboundDate", prop: "outboundDate" },
        { label: "结算状态", codeField: "settlementStatus", prop: "settlementStatus"},
      ],
      outboundQueryParams: {
        APIUrl: paApis.internalQueryList.APIUrl,
        InputType: paApis.internalQueryList.InputType,
        ServiceCode: paApis.internalQueryList.ServiceCode,
        dataInfo: {
          collectionObjects: "",
          documentType: "",
          documentCode: "",
          settlementStatus: "",
          outboundPersonnel: "",
          startMakeDate: "",
          endMakeDate: ""
        },
        apiQueryRow: [
          "documentId",
          "documentType",
          "documentCode",
          "recipientsDepartment",
          "recipientsPersonnel",
          "totalPrice",
          "makeDate",
          "outboundPersonnel",
          "outboundDate",
          "settlementStatus",
          "updateControlId"
        ]
      },
      //协议单位 + 明细
      accessoriesCols: [
        { label: "备件号", codeField: "sparePartNo", width: 120 },
        { label: "备件名称", codeField: "sparePartName", width: 180 },
        { label: "成本价", codeField: "costPrice" },
        { label: "单位", codeField: "unit" },
        { label: "数量", codeField: "number" },
        { label: "单价", codeField: "unitPrice" },
        { label: "总价", codeField: "totalPrice" },
        { label: "参考销售价", codeField: "referenceSalesPrice" },
        { label: "备件品牌", codeField: "sparePartsBrand" },
        { label: "备件属性", codeField: "sparePartsAttribute", width: 120 },
        { label: "备件类别", codeField: "sparePartsCategory", width: 120 },
        { label: "三包重点件", codeField: "ThreePackagesKeyParts", width: 120 }
      ],
      accessoriesQueryParams: {
        APIUrl: paApis.agreementUnitDetailQueryList.APIUrl,
        InputType: paApis.agreementUnitDetailQueryList.InputType,
        ServiceCode: paApis.agreementUnitDetailQueryList.ServiceCode,
        dataInfo: {
          collectionObjects: "",
          documentCode: ""
        },
        apiQueryRow: [
          "sparePartNo",
          "sparePartName",
          "costPrice",
          "unit",
          "number",
          "unitPrice",
          "totalPrice",
          "referenceSalesPrice",
          "sparePartsBrand",
          "sparePartsAttribute",
          "sparePartsCategory",
          "ThreePackagesKeyParts"
        ]
      },
      //内部 + 明细
      internalDetailCols: [
        { label: "备件号", codeField: "sparePartNo", width: 120 },
        { label: "备件名称", codeField: "sparePartName", width: 180 },
        { label: "单位", codeField: "unit" },
        { label: "出库数量", codeField: "deliveryNumber" },
        { label: "销售价格", codeField: "salePrice" },
        { label: "销售总价", codeField: "saleTotalPrice" },
        { label: "成本单价(不含税)", codeField: "excludingTaxPrice", width: 150 },
        { label: "成本单价(含税)", codeField: "includedTaxPrice", width: 150 },
        { label: "备件品牌", codeField: "sparePartsBrand" },
        { label: "备件属性", codeField: "sparePartsAttribute", width: 120 },
        { label: "备件类别", codeField: "sparePartsCategory", width: 120 },
        { label: "三包重点件", codeField: "ThreePackagesKeyParts", width: 120 }
      ],
      internalQueryDetailParams: {
        APIUrl: paApis.internalDetailQueryList.APIUrl,
        InputType: paApis.internalDetailQueryList.InputType,
        ServiceCode: paApis.internalDetailQueryList.ServiceCode,
        dataInfo: {
          collectionObjects: "",
          documentCode: ""
        },
        apiQueryRow: [
          "sparePartNo",
          "sparePartName",
          "unit",
          "deliveryNumber",
          "salePrice",
          "saleTotalPrice",
          "excludingTaxPrice",
          "includedTaxPrice",
          "sparePartsBrand",
          "sparePartsAttribute",
          "sparePartsCategory",
          "ThreePackagesKeyParts"
        ]
      },
      //查询条件验证
      ruleForm: {
        collectionObjects: 1,
        documentType: ""
      },
      rules:{
        collectionObjects:[
          { required: true, message: "请选择收款对象", trigger: "change" }
        ],
        documentType:[
          { required: true, message: "请选择单据类型", trigger: "change" }
        ],
      }
    };
  },

  created() {},
  mounted(){
      this.$nextTick(()=>{
        this.setDocumentTypeOptions(1);
      })
  },
  methods: {
    //查询
    fetchData(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          if(this.agreementUnitParam){  // 打开表格： 协议单位 + 调拨销售单
              this.agreementUnitQueryParams.dataInfo.collectionObjects = this.ruleForm.collectionObjects;
              this.agreementUnitQueryParams.dataInfo.documentType = this.ruleForm.documentType;
              this.agreementUnitShow = true;
              this.twoServicesShow = false;
              this.recipientsWarehouseShow = false;
              this.plateOutboundShow = false;
              this.count4 = true;  // 导出标志
              this.$refs.agreementUnitListTable.queryList();
              console.log("打开表格： 协议单位 + 调拨销售单")
          }
          if(this.count2){  // 打开表格： 协议单位 + 服务二网备件需求 
              this.twoServicesQueryParams.dataInfo.collectionObjects = this.ruleForm.collectionObjects;
              this.twoServicesQueryParams.dataInfo.documentType = this.ruleForm.documentType;
              this.twoServicesQueryParams.dataInfo.documentCode = this.agreementUnitQueryParams.dataInfo.documentCode;
              this.twoServicesQueryParams.dataInfo.settlementStatus = this.agreementUnitQueryParams.dataInfo.settlementStatus;
              this.twoServicesQueryParams.dataInfo.agreementUnit = this.agreementUnitQueryParams.dataInfo.agreementUnit;
              this.agreementUnitShow = false;
              this.twoServicesShow = true;
              this.recipientsWarehouseShow = false;
              this.plateOutboundShow = false;
              this.$refs.twoServicesListTable.queryList();
              console.log("打开表格： 协议单位 + 服务二网备件需求")
          }
          if(this.recipientsDepartmentParam){  // 打开表格： 内部 + 全部(1.2) 
              this.internalQueryParams.dataInfo.collectionObjects = this.ruleForm.collectionObjects;
              this.internalQueryParams.dataInfo.documentType = this.ruleForm.documentType;
              this.internalQueryParams.dataInfo.documentCode = this.agreementUnitQueryParams.dataInfo.documentCode;
              this.internalQueryParams.dataInfo.settlementStatus = this.agreementUnitQueryParams.dataInfo.settlementStatus;
              this.agreementUnitShow = false;
              this.twoServicesShow = false;
              this.recipientsWarehouseShow = true;
              this.plateOutboundShow = false;
              this.$refs.internalListTable.queryList();
              console.log("打开表格： 内部 + 全部(1.2)")
          }
          if(this.outboundPersonnelParam){  // 打开表格： 内部 + 全部(3.4) 
              this.outboundQueryParams.dataInfo.collectionObjects = this.ruleForm.collectionObjects;
              this.outboundQueryParams.dataInfo.documentType = this.ruleForm.documentType;
              this.outboundQueryParams.dataInfo.documentCode = this.agreementUnitQueryParams.dataInfo.documentCode;
              this.outboundQueryParams.dataInfo.settlementStatus = this.agreementUnitQueryParams.dataInfo.settlementStatus;
              this.agreementUnitShow = false;
              this.twoServicesShow = false;
              this.recipientsWarehouseShow = false;
              this.plateOutboundShow = true;
              this.$refs.outboundListTable.queryList();
              console.log("打开表格： 内部 + 全部(3.4)")
          }
        }else{
          this.$message({
                message: "查询条件缺少!",
                type: "error"
              });
        }  
      })
    },
    //收款
    collectionData(){
      if(this.agreementUnitParam){  // 调拨销售单收款
        this.$refs.outboundListTable.currentRow.length = 0;
        this.$refs.twoServicesListTable.currentRow.length = 0;
        this.$refs.internalListTable.currentRow.length = 0;
        if(this.$refs.agreementUnitListTable.currentRow.length == 0){
          this.$alert("请选择一行进行收款！", "信息提示", {
            confirmButtonText: "确定",
            type: "warning",
            callback: action => {}
          });
        }else{
          this.collectionDialogVisible = true;
          this.$refs.collectionDialog.setEditData(this.$refs.agreementUnitListTable.currentRow);
        }
      }
      if(this.count2){  // 服务二网备件需求
        this.$refs.outboundListTable.currentRow.length = 0;
        this.$refs.agreementUnitListTable.currentRow.length = 0;
        this.$refs.internalListTable.currentRow.length = 0;
        if(this.$refs.twoServicesListTable.currentRow.length == 0){
          this.$alert("请选择一行进行收款！", "信息提示", {
            confirmButtonText: "确定",
            type: "warning",
            callback: action => {}
          });
        }else{
          this.collectionDialogVisible = true;
          this.$refs.collectionDialog.setEditData(this.$refs.twoServicesListTable.currentRow);
        }
      }
    },
    //结算
    settlementData(){
      if(this.getSettlementStatus == 1){  //已结算
        this.$alert("该查询结果已经结算！", "信息提示", {
            confirmButtonText: "确定",
            type: "warning",
            callback: action => {}
        });  
      }
      else if(this.getSettlementStatus == 2){  //未结算
        if(this.recipientsDepartmentParam){ // 结算 内部 + 全部(1.2) 
          console.log("结算1.2")
          this.$refs.agreementUnitListTable.currentRow = [];
          this.$refs.twoServicesListTable.currentRow = [];
          this.$refs.outboundListTable.currentRow = [];
          if(this.$refs.internalListTable.currentRow.length == 0){
            this.$alert("请选择一行进行结算！", "信息提示", {
              confirmButtonText: "确定",
              type: "warning",
              callback: action => {}
            });
          }else{
            let obj = {};
            obj.documentCode = this.$refs.internalListTable.currentRow[0].documentCode;
            obj.documentId = this.$refs.internalListTable.currentRow[0].documentId;
            obj.updateControlId = this.$refs.internalListTable.currentRow[0].updateControlId;
            settlementDoQMutationList(obj).then(response => {
            if(response.data[paApis.settlementMutationSave.ServiceCode].result === "1") {
                this.$message({
                    type: "success",
                    message: "保存成功！"
                });
            }else{
              this.$message({
                type: "error",
                message: "保存失败！"
              });
            }
          });
          }
        }
        if(this.outboundPersonnelParam){ // 结算 内部 + 全部(3.4) 
            console.log("结算3.4")
          this.$refs.agreementUnitListTable.currentRow = [];
          this.$refs.twoServicesListTable.currentRow = [];
          this.$refs.internalListTable.currentRow = [];
          if(this.$refs.outboundListTable.currentRow.length == 0){
            this.$alert("请选择一行进行结算！", "信息提示", {
              confirmButtonText: "确定",
              type: "warning",
              callback: action => {}
            });
          }else{
            let obj = {};
            obj.documentCode = this.$refs.outboundListTable.currentRow[0].documentCode;
            obj.documentId = this.$refs.outboundListTable.currentRow[0].documentId;
            obj.updateControlId = this.$refs.outboundListTable.currentRow[0].updateControlId;
            settlementDoQMutationList(obj).then(response => {
            if(response.data[paApis.settlementMutationSave.ServiceCode].result === "1") {
                this.$message({
                    type: "success",
                    message: "保存成功！"
                });
            }else{
              this.$message({
                type: "error",
                message: "保存失败！"
              });
            }
          });
          }
        }
      }
      else{
        this.$alert("请选择结算状态！", "信息提示", {
            confirmButtonText: "确定",
            type: "warning",
            callback: action => {}
        }); 
      }
    },
    //导出
    exportData(){
      if(this.count4){ // 协议单位 + 调拨销售单
        var tableColumns = this.$refs.agreementUnitListTable.$refs.multipleTable == null ? null : this.$refs.agreementUnitListTable.$refs.multipleTable.columns;
        this.$refs.agreementUnitListTable.exportTableData("excel","调拨销售单导出","调拨销售单列表",tableColumns);  
      }
      if(this.count2){ // 协议单位 + 服务二网备件需求
        var tableColumns = this.$refs.twoServicesListTable.$refs.multipleTable == null ? null : this.$refs.twoServicesListTable.$refs.multipleTable.columns;
        this.$refs.twoServicesListTable.exportTableData("excel","服务二网备件需求导出","服务二网备件需求列表",tableColumns); 
      } 
      if(this.recipientsDepartmentParam){ // 内部 + 全部(1.2)
        var tableColumns = this.$refs.internalListTable.$refs.multipleTable == null ? null : this.$refs.internalListTable.$refs.multipleTable.columns;
        this.$refs.internalListTable.exportTableData("excel","领用出库导出","领用出库列表",tableColumns); 
      }
      if(this.outboundPersonnelParam){  // 内部 + 全部(3.4)
        var tableColumns = this.$refs.outboundListTable.$refs.multipleTable == null ? null : this.$refs.outboundListTable.$refs.multipleTable.columns;
        this.$refs.outboundListTable.exportTableData("excel","出库导出","出库列表",tableColumns); 
      }
    },
    //重置
    resetData() {
      this.ruleForm.collectionObjects = 1;
      this.ruleForm.documentType = '';
      this.agreementUnitQueryParams.dataInfo.documentCode = '';
      this.agreementUnitQueryParams.dataInfo.settlementStatus = '';
      this.agreementUnitQueryParams.dataInfo.agreementUnit = '';
      this.internalQueryParams.dataInfo.recipientsDepartment = '';
      this.outboundQueryParams.dataInfo.outboundPersonnel = '';
      this.makeDate = '';
      this.documentTypeOptions = this.documentTypeOptions1;
      this.agreementUnitParam = true;
      this.recipientsDepartmentParam = false;
      this.outboundPersonnelParam = false;
    },
    //关闭收款弹窗
    collectionDialogClose(val){
      this.collectionDialogVisible = val;
    },
    //关闭协议单位明细弹窗
    accessoriesCloseDialog(val){
      if(val=="!**!"){
        this.accessoriesDialogVisible= false;
      }
    },
    //关闭内部明细弹窗
    internalCloseDialog(val){
      if(val=="!**!"){
        this.internalDialogVisible= false;
      }
    },
    //打开协议单位明细弹窗
    openAccessoriesDialog(row){
      this.accessoriesDialogVisible = true;
    },
    //打开内部明细弹窗
    openinternalDialog(row){
      this.internalDialogVisible = true;
    },
    //表格自适应
    makeHeight(mh) {
        //协议单位 + 调拨销售单
      var strAgreementPage = this.$refs.agreementUnitListTable.$refs.paginationHeight.$el.offsetHeight;
      var strAgreementResult = this.$refs.agreementUnitListTable.$refs.resultTitleHeight.offsetHeight;
        // 协议单位 + 服务二网备件需求
      var strServicesPage = this.$refs.twoServicesListTable.$refs.paginationHeight.$el.offsetHeight;
      var strServicesResult = this.$refs.twoServicesListTable.$refs.resultTitleHeight.offsetHeight;  
        // 内部 + 领用出库
      var strInternalPage = this.$refs.internalListTable.$refs.paginationHeight.$el.offsetHeight;
      var strInternalResult = this.$refs.internalListTable.$refs.resultTitleHeight.offsetHeight;  
        // 内部 + 盘出库
      var strOutboundPage = this.$refs.outboundListTable.$refs.paginationHeight.$el.offsetHeight;
      var strOutboundResult = this.$refs.outboundListTable.$refs.resultTitleHeight.offsetHeight;  

      if(this.agreementUnitShow) {   //  协议单位 + 调拨销售单 表格自适应
        // 减去margin-top/bottom值
        if (!this.$utils.isIE() || isResize) {
            this.tableHeight = mh - this.tableMarginHeight - strAgreementPage - strAgreementResult - 7;
            this.$refs.agreementUnitListTable.tableHeight = this.tableHeight;
        } else {
            // IE浏览器需要减去额外高度
            this.tableHeight = mh - this.tableMarginHeight - this.ieHeight - strAgreementPage - strAgreementResult - 7;
            this.$refs.agreementUnitListTable.tableHeight = this.tableHeight;
        }
      }   
      if(this.count3) { //  协议单位 + 服务二网备件需求 表格自适应
        // 减去margin-top/bottom值
        if (!this.$utils.isIE() || isResize) {
            this.tableHeight = mh - this.tableMarginHeight - strServicesPage - strServicesResult - 7;
            this.$refs.twoServicesListTable.tableHeight = this.tableHeight;
        } else {
            // IE浏览器需要减去额外高度
            this.tableHeight = mh - this.tableMarginHeight - this.ieHeight - strServicesPage - strServicesResult - 7;
            this.$refs.twoServicesListTable.tableHeight = this.tableHeight;
        }
      }          
      if(this.recipientsDepartmentParam) { //  内部 + 领用出库 表格自适应
        // 减去margin-top/bottom值
        if (!this.$utils.isIE() || isResize) {
            this.tableHeight = mh - this.tableMarginHeight - strInternalPage - strInternalResult - 7;
            this.$refs.internalListTable.tableHeight = this.tableHeight;
        } else {
            // IE浏览器需要减去额外高度
            this.tableHeight = mh - this.tableMarginHeight - this.ieHeight - strInternalPage - strInternalResult - 7;
            this.$refs.internalListTable.tableHeight = this.tableHeight;
        }
      }
      if(this.outboundPersonnelParam) { //  内部 + 盘出库 表格自适应
        // 减去margin-top/bottom值
        if (!this.$utils.isIE() || isResize) {
            this.tableHeight = mh - this.tableMarginHeight - strOutboundPage - strOutboundResult - 7;
            this.$refs.outboundListTable.tableHeight = this.tableHeight;
        } else {
            // IE浏览器需要减去额外高度
            this.tableHeight = mh - this.tableMarginHeight - this.ieHeight - strOutboundPage - strOutboundResult - 7;
            this.$refs.outboundListTable.tableHeight = this.tableHeight;
        }
      }
    },
    //查询区下拉框级联
    setDocumentTypeOptions(e){  // 打印e的值为value值：1 2 
        switch(e){
            case 1: 
                this.ruleForm.documentType = '';
                this.documentTypeOptions = this.documentTypeOptions1;
                this.count1 = true;
                this.flag = true;
                this.agreementUnitParam = true;
                this.recipientsDepartmentParam = false;
                this.outboundPersonnelParam = false;
                this.settlementShow = false;
                this.collectionShow = true;
                this.isDisabled = false;
            break;
            case 2: 
                this.ruleForm.documentType = '';
                this.documentTypeOptions = this.documentTypeOptions2;
                this.flag = false;
                this.count1 = false;
                this.settlementShow = true;
                this.collectionShow = false;
                this.isDisabled = true;
            break;
        }
    },
    //改变协议单位的label
    setagreementUnit(e){  // 打印e的值为value值：1 2
        if(this.count1){  
            if(e==1){  //协议单位
              this.agreementUnitParam = true;
              this.recipientsDepartmentParam = false;
              this.outboundPersonnelParam = false;
              this.count2 = false;
              console.log("123")
            }
            if(e==2){
                this.count2 = true;  // 选择服务二网备件需求的标志
                this.count3 = true;  // 选择服务二网备件需求表格自适应的标志
                this.agreementUnitParam = true;
                this.recipientsDepartmentParam = false;
                this.outboundPersonnelParam = false;
                console.log("1234")
            }
        }
        if(!this.flag){  //表示单据类型的第二种值
            if(e==1 || e==2){
                this.count2 = false;
                this.agreementUnitParam = false;
                this.recipientsDepartmentParam = true;
                this.outboundPersonnelParam = false;
                console.log("12345")
            }
            if(e==3 || e==4){
                this.count2 = false;
                this.agreementUnitParam = false;
                this.recipientsDepartmentParam = false;
                this.outboundPersonnelParam = true;
                console.log("123456")
            }
        }
    },
    //获取结算状态的值
    setSettlementStatus(e){
      this.getSettlementStatus = e;
    },
    //日期选择器分开日期
    getMakeDate(e){   // e中已经获取到值
        var year0 = e[0].getFullYear();
        var month0 = e[0].getMonth() + 1;
        var day0 = e[0].getDate();
        var year1 = e[1].getFullYear();
        var month1 = e[1].getMonth() + 1;
        var day1 = e[1].getDate();
        this.agreementUnitQueryParams.dataInfo.startMakeDate = year0+"-"+month0+"-"+day0;
        this.agreementUnitQueryParams.dataInfo.endMakeDate = year1+"-"+month1+"-"+day1;
        this.twoServicesQueryParams.dataInfo.startMakeDate = year0+"-"+month0+"-"+day0;
        this.twoServicesQueryParams.dataInfo.endMakeDate = year1+"-"+month1+"-"+day1;
        this.internalQueryParams.dataInfo.startMakeDate = year0+"-"+month0+"-"+day0;
        this.internalQueryParams.dataInfo.endMakeDate = year1+"-"+month1+"-"+day1;
        this.outboundQueryParams.dataInfo.startMakeDate = year0+"-"+month0+"-"+day0;
        this.outboundQueryParams.dataInfo.endMakeDate = year1+"-"+month1+"-"+day1;
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
