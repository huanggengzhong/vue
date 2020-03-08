<template>
  <div class="app-container app-container-table">
    <div class="filter-container filter-params">
      <mix-form ref="applyForClaimForm"
          :dynamicFormFields="applyForClaimForm"
          :dynamicFieldsData="applyForClaimFormData"
          :isSearch="true"
          :toggleParam="toggleParam">
      </mix-form>

      <mix-button
          name="searchBtns"
          :dynamicButtons="btns"
          :isShowMore="true"
          @toggle="changeToggleParam">
      </mix-button>
    </div>
      <mix-table
          ref="applyForClaimListTable"
          :queryParams="applyForClaimQueryParams"
          :dynamicTableCols="applyForClaimUnitCols"
          :multipleSelect="isMultipleSelect"
          :isPaging="true"
      />
                       <!--入库单号查询-->
      <applyClaimDialog ref="applyClaimDialog"
                  :applyClaimDialogVisible="applyClaimDialogVisible"
                  @close="collectionDialogClose" />
                      <!--索赔单号查询-->
      <applyClaimDoubleDialog ref="applyClaimDoubleDialog"
                  :applyClaimDoubleDialogVisible="applyClaimDoubleDialogVisible"
                  @close="collectionDoubleDialogClose" />   

                        <!--驳回-->
      <rejectInfo
        :rejectInfoVisible="rejectInfoVisible"
        :selectData="selectDataSon"
        @changeRejectInfoCode="getrejectInfoCode"
      ></rejectInfo>
  </div>
</template>


<script>
 import { applyClaimDoSaveList } from "@/api/pa/orderAuditItem/orderAuditItem";
 import { the_Height } from "@/components/se/seMixins/makeHeightForTemplate";
 import { paApis } from '@/api/graphQLApiList/pa'
 import LookupValue from '@/components/org/LookupValue/index'
 import lableName from '@/components/lableName'
 import applyClaimDialog from './applyForClaimDialog'
 import applyClaimDoubleDialog from './applyForClaimDoubleDialog'
 import rejectInfo from "@/views/pa/besedata/sparePartsPrice/priceBusinessAudit/rejectInfo"
 import mixTable from "@/components/basicComponent/mixTable"
 import mixForm from '@/components/basicComponent/mixForm'
 import mixButton from '@/components/basicComponent/mixButton'

 export default {
  mixins: [the_Height],
  components:{
    LookupValue,
    lableName,
    rejectInfo,
    applyClaimDialog,
    applyClaimDoubleDialog,
    mixTable,
    mixForm,
    mixButton
  },

  data(){
    return{
        count: false,
        toggleParam: false,
        rejectInfoVisible: false,
        applyClaimDialogVisible: false,
        applyClaimDoubleDialogVisible: false,
        isMultipleSelect: 'selection',
        //按钮
        btns: {
          left: [
            { name: 'add', label: '新增', event: this.newData, argument: { type: 'ADD'} },
            { name: 'save', label: '保存', event: this.saveData },
            { name: '审核', label: '审核', event: this.auditData },
            { name: '拒绝', label: '驳回', event: this.rejectedData },
            { name: 'upload', label: '上传附件', event: this.uploadData },
          ],
          right: [
            { name: 'reset', label: '重置', event: this.resetData },
          ]
        },
        //表单
        applyForClaimForm: [
            {label: '索赔单号', codeField: 'A01', type: 'inputTxt', event: this.claimOrderFetch, suffixIcon: 'el-icon-search' },
            {label: '入库单号', codeField: 'A02', type: 'inputTxt', event: this.entryWarehouseFetch, suffixIcon: 'el-icon-search'},
            {label: '发票单号', codeField: 'A03', type: 'inputTxt'},
            {label: '申请日期', codeField: 'A04', type: 'inputTxt' },
            {label: '联系人', codeField: 'A05', type: 'inputTxt' },
            {label: '联系电话', codeField: 'A06', type: 'inputTxt' },
            {label: '传真号码', codeField: 'A07', type: 'inputTxt' },
            {label: '备注', codeField: 'A08', type: 'inputTxt' }
        ],
        applyForClaimFormData: {
            A01: '',
            A02: '',
            A03: '',
            A04: '',
            A05: '',
            A06: '',
            A07: '',
            A08: ''
        },
        //表格
        applyForClaimUnitCols: [
          { label: "备件品牌", codeField: "A1" },
          { label: "备件号", codeField: "A2"},
          { label: "备件名称", codeField: "A3" },
          { label: "计量单位", codeField: "A4" },
          { label: "开票数量", codeField: "A5" },
          { label: "已入库数量", codeField: "A6", width: 120},
          { label: "索赔单价", codeField: "A7", isEdit: true, comps: {type: 'inputNum2', change:this.changePriceState, precision: 2}, width: 150},
          { label: "索赔数量", codeField: "A8",  isEdit: true, comps: {type: 'inputNum2', change:this.changeNumberState}, width: 150},
          { label: "索赔金额", codeField: "A9"},
          { label: "索赔原因", codeField: "A10",
                    comps: {type: "dropdownList",data: [{value: "1", label: '货物损坏'},{value: "2", label: '货物数量错误'}]}, width: 180},
          { label: "备注", codeField: "A11", width: 180},
        ],
        applyForClaimQueryParams: {
          APIUrl: paApis.applyClaimChooseQueryList.APIUrl,
          InputType: paApis.applyClaimChooseQueryList.InputType,
          ServiceCode: paApis.applyClaimChooseQueryList.ServiceCode,
          dataInfo: {
            A001: '',
            A002: '',
            A003: '',
            A004: '',
            A005: '',
            A006: '',
            A007: '',
            A008: ''
          },
          apiQueryRow: [
            'A1',
            'A2',
            'A3',
            'A4',
            'A5',
            'A6',
            'A7',
            'A8',
            'A9',
            'A10',
            'A11'
          ]
        }
      }
    },
  created(){
  },

  methods:{
    //入库单号查询
    entryWarehouseFetch(){
        this.applyClaimDialogVisible = true;
    },
    //索赔单号查询
    claimOrderFetch(){
      this.applyClaimDoubleDialogVisible = true;
    },
    //关闭入库单号弹窗
    collectionDialogClose(val){
        var judge = val.split(" ")[0] === 'true' ? true : false;
        if(judge){
            this.applyForClaimFormData.A02 = val.split(" ")[1];
            this.applyForClaimFormData.A03 = val.split(" ")[2];
            this.makeDate();
            this.applyClaimDialogVisible = val.split(" ")[3] === 'flase' ? false : false;
            this.$refs.applyForClaimListTable.queryList();
        }else{
            this.applyClaimDialogVisible = val.split(" ")[1] === 'flase' ? false : false;
        }
    },
    //关闭索赔单号弹窗
    collectionDoubleDialogClose(val){
      var judge = val.split(" ")[0] === 'true' ? true : false;
      if(judge){
        this.applyForClaimFormData.A01 = val.split(" ")[1];
        this.applyClaimDoubleDialogVisible = val.split(" ")[2] === 'flase' ? false : false;
      }
      this.applyClaimDoubleDialogVisible = false;
    },
    //关闭驳回弹窗
    getrejectInfoCode(val){
      this.rejectInfoVisible = val;
    },
    //新增
    newData(){    // 开始新一次的索赔
      this.resetData();   //置空表单
      this.$refs.applyForClaimListTable.tableData = [];  //置空表格
    },
    //保存
    saveData(){
      applyClaimDoSaveList().then(response => {
        if(response.data[paApis.appliyClaimSaveMutation.ServiceCode].result === '1'){
          this.$message({
            message: "保存成功!",
            type: "success"
          });
        }
      })
    },
    //审核
    auditData(){
      this.saveData();
    },
    //驳回
    rejectedData(){
      this.rejectInfoVisible = true;
    },
    //重置
    resetData(){
      this.applyForClaimFormData.A01 = '';
      this.applyForClaimFormData.A02 = '';
      this.applyForClaimFormData.A03 = '';
      this.applyForClaimFormData.A04 = '';
      this.applyForClaimFormData.A05 = '';
      this.applyForClaimFormData.A06 = '';
      this.applyForClaimFormData.A07 = '';
      this.applyForClaimFormData.A08 = '';
    },
    //上传附件
    uploadData(){

    },
    //改变单价状态
    changePriceState(row){
      row.A9 = parseFloat(row.A7 * row.A8).toFixed(2);
    },
    //改变数量状态
    changeNumberState(row){
      row.A9 = parseFloat(row.A7 * row.A8).toFixed(2);
    },
    //日期选择器分开日期
    makeDate() {
        var date = new Date();
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        if(month < 10){
            month = "0" + month;
        }
        var day = date.getDate();
        if(day < 10){
            day = "0" + day;
        }
        this.applyForClaimFormData.A04 = year + "-" + month + "-" + day;
    },
    //更多布局更改
    changeToggleParam(){
      this.$refs.applyForClaimForm.changeToggleParam();
    }
  }
}
</script>
