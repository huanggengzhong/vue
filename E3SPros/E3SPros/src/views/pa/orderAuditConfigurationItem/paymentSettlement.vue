<template>
  <div class="app-container app-container-table">
    <div class="filter-container filter-button" ref="searcheHeight">
      <el-button type="primary" size="small" @click.native="fetchData('ruleForm')">查询</el-button>
      <el-button size="small" @click.native="settlementData()">结算</el-button>
      <el-button size="small" @click.native="exportData()">导出</el-button>
      <el-button size="small" @click.native="resetData()">重置</el-button> 
    </div>

    <div class="filter-container filter-params" ref="conHeight">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" :inline-message=true>
        <el-row :gutter="24">
          <el-col :span="5">
            <el-form-item prop="documentCode">
              <lableName curLabelName="单据编号" :isShowLabel="true" :isRequire="true"></lableName>
              <el-input v-model="ruleForm.documentCode" clearable size="small"></el-input>
            </el-form-item>  
          </el-col>
          <el-col :span="5">
            <el-form-item prop="documentType">
              <lableName curLabelName="单据类型" :isShowLabel="true" :isRequire="true"></lableName>
              <el-select
                v-model="ruleForm.documentType"
                size="small"
                placeholder="请选择"
                clearable
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
          <el-col :span="5">
            <el-form-item prop="agreementUnit">
              <lableName curLabelName="协议单位" :isShowLabel="true" :isRequire="true"></lableName>
              <el-input  v-model="ruleForm.agreementUnit" clearable size="small"></el-input>
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
       
        <!--挂账结算-->
    <mix-table
      ref="paymentListTable"
      :queryParams="paymentQueryParams"
      :dynamicTableCols="paymentUnitCols"
      :isPaging="true"
      :multipleSelect="select"
    />
       <!--结算弹窗-->
      <paymentDialog ref="paymentDialog" 
                :paymentDialogVisible="paymentDialogVisible"
                @close="paymentDialogClose" />
  </div>
</template>

<script>
import { the_Height } from "@/components/se/seMixins/makeHeightForTemplate";
import { paApis } from "@/api/graphQLApiList/pa";
import mixTable from "@/components/basicComponent/mixTable";
import lableName from "@/components/lableName";
import paymentDialog from "./paymentSettlementDialog"

export default {
  mixins: [the_Height],
  components: {
    mixTable,
    lableName,
    paymentDialog
  },

  data() {
    return {
      count: false,
      toggleParam: false,
      agreementFlag: true,
      paymentDialogVisible: false,
      select: 'selection',
      getSettlementStatus: '',
      documentTypeOptions: [
        { value: 1, label: "调拨销售单" },
        { value: 2, label: "服务二网备件需求" }
      ],
      settlementStatusOptions: [
        { value: 1, label: "已结算" },
        { value: 2, label: "未结算" }
      ],
      //
      paymentUnitCols: [
        { label: "单据类型", codeField: "documentType", prop: "documentType"},
        { label: "单据编号", codeField: "documentCode", width: 200, prop: "documentCode"},
        { label: "结算状态", codeField: "settlementStatus", prop: "settlementStatus"},
        { label: "协议单位", codeField: "agreementUnit", prop: "agreementUnit" },
        { label: "挂账金额", codeField: "amountPayment", prop: "amountPayment" },
        { label: "实收金额", codeField: "receivedPayment", prop: "receivedPayment" },
        { label: "差额", codeField: "differencePayment", prop: "differencePayment" },
        { label: "差额原因", codeField: "differenceReason", prop: "differenceReason" },
        { label: "挂账时间", codeField: "paymentTime", prop: "paymentTime" },
        { label: "所属网点", codeField: "affiliatedBranches", prop: "affiliatedBranches" },
      ],
      paymentQueryParams: {
        APIUrl: paApis.paymentSettlementQueryList.APIUrl,
        InputType: paApis.paymentSettlementQueryList.InputType,
        ServiceCode: paApis.paymentSettlementQueryList.ServiceCode,
        dataInfo: {
          documentCode: "",
          documentType: "",
          settlementStatus: "",
          agreementUnit: "",
          startMakeDate: "",
          endMakeDate: "",
        },
        apiQueryRow: [
          "documentId",
          "documentType",
          "documentCode",
          "settlementStatus",
          "agreementUnit",
          "amountPayment",
          "receivedPayment",
          "differencePayment",
          "differenceReason",
          "paymentTime",
          "affiliatedBranches",
          "updateControlId"
        ]
      },
      //查询条件验证
      ruleForm: {
        documentCode: '',
        documentType: '',
        settlementStatus: '',
        agreementUnit: '',
        makeDate: ''
      },
      rules:{
        documentType:[
          { required: true, message: "请选择单据类型", trigger: "change" }
        ],
        documentCode:[
          { required: true, message: "请填写单据编号", trigger: "change" }
        ],
        settlementStatus:[
          { required: true, message: "请选择结算状态", trigger: "change" }
        ],
        agreementUnit:[
          { required: true, message: "请填写协议单位", trigger: "change" }
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
      this.paymentQueryParams.dataInfo.documentCode = this.ruleForm.documentCode;
      this.paymentQueryParams.dataInfo.documentType = this.ruleForm.documentType;
      this.paymentQueryParams.dataInfo.settlementStatus = this.ruleForm.settlementStatus;
      this.paymentQueryParams.dataInfo.agreementUnit = this.ruleForm.agreementUnit;
      this.$refs[formName].validate(valid=>{
        if(valid){
          this.$refs.paymentListTable.queryList();
        }else{
          this.$message({
              message: "查询条件缺少!",
              type: "error"
            });
        }
      })
      
    },
    //结算
    settlementData(){
      if(this.getSettlementStatus==1){   //已经结算
        this.$alert("该查询结果已经结算！", "信息提示", {
            confirmButtonText: "确定",
            type: "warning",
            callback: action => {}
        }); 
      }
      if(this.getSettlementStatus==2){  //未结算  
        var str = this.$refs.paymentListTable.currentRow[0].agreementUnit;   //第一个行数据中的协议单位
        var getAmountPayment = 0;    //合计挂账金额
        var getReceivedPayment = 0;  //合计实收金额
        var setId = []; // 获取主键id与并发控制id
        for(var i=0; i<this.$refs.paymentListTable.currentRow.length; i++){
          if(str == this.$refs.paymentListTable.currentRow[i].agreementUnit){
            getAmountPayment += parseFloat(this.$refs.paymentListTable.currentRow[i].amountPayment);
            getReceivedPayment += parseFloat(this.$refs.paymentListTable.currentRow[i].receivedPayment);
            setId.push({
              documentId: this.$refs.paymentListTable.currentRow[i].documentId,
              updateControlId: this.$refs.paymentListTable.currentRow[i].updateControlId,
              paymentMenthod: '',
              paperNo: '',
              paperAmount: '',
              bankAccount: '',
            });
            this.agreementFlag = true;
          }else{
            this.agreementFlag = false;
          }        
        } 
        if(this.agreementFlag){   //协议单位都相同
          var aggreementData = str+" "+getAmountPayment+" "+getReceivedPayment;
          this.$refs.paymentDialog.setEditData(aggreementData);
          this.$refs.paymentDialog.setEditData1(JSON.stringify(setId));
          this.paymentDialogVisible = true;
        }else{   // 协议单位不同
          this.$message({
            type: "error",
            message: "协议单位不同不能进行结算"
          });
        }
      }  
    },
    //导出
    exportData(){
      var tableColumns = this.$refs.agreementUnitListTable.$refs.multipleTable == null ? null : this.$refs.agreementUnitListTable.$refs.multipleTable.columns;
      this.$refs.agreementUnitListTable.exportTableData("excel","配件挂账结算导出","配件挂账结算列表",tableColumns); 
    },
    //重置
    resetData() {
      this.ruleForm.documentType = '';
      this.ruleForm.documentCode = '';
      this.ruleForm.settlementStatus = '';
      this.ruleForm.agreementUnit = '';
      this.ruleForm.makeDate = '';
    },
    //关闭结算弹窗
    paymentDialogClose(val){
      this.paymentDialogVisible = val;
    },
    //表格自适应
    makeHeight(mh) {
      var str = this.$refs.paymentListTable.$refs.paginationHeight.$el.offsetHeight;
      var str1 = this.$refs.paymentListTable.$refs.resultTitleHeight.offsetHeight;
      // 减去margin-top/bottom值
      if (!this.$utils.isIE() || isResize) {
          this.tableHeight = mh - this.tableMarginHeight - str - str1 - 7;
          this.$refs.paymentListTable.tableHeight = this.tableHeight;
      } else {
          // IE浏览器需要减去额外高度
          this.tableHeight = mh - this.tableMarginHeight - this.ieHeight - str - str1 - 7;
          this.$refs.paymentListTable.tableHeight = this.tableHeight;
      }
    },
    //获取结算状态的值
    setSettlementStatus(e){  // e中已经获取到值
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
        this.paymentQueryParams.dataInfo.startMakeDate = year0+"-"+month0+"-"+day0;
        this.paymentQueryParams.dataInfo.endMakeDate = year1+"-"+month1+"-"+day1;
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
