<template>
  <el-dialog
    title="索赔单号查询"
    :visible.sync="applyClaimDoubleDialogVisible"
    :close-on-click-modal="false"
    width="80%"
    @close="close()"
    :append-to-body="true"
  >
    <div class="filter-container filter-params">
      <mix-form ref="applyForClaimDoubleDialogForm" 
          :dynamicFormFields="applyForClaimDoubleDialogForm" 
          :dynamicFieldsData="applyForClaimFormDoubleDialogData"
          :isSearch="false">
      </mix-form>

      <mix-button
          name="searchDialogBtns"
          :dynamicButtons="dialogbtns"
          :isShowMore="false">
      </mix-button>
    </div> 
    <mix-table
        ref="applyClaimListDoubleTable"
        :queryParams="applyClaimDoubleQueryParams"
        :dynamicTableCols="applyClaimDoubleUnitCols"
        :isPaging="true"
    />   
  </el-dialog>
</template>


<script>
 import { the_Height } from "@/components/se/seMixins/makeHeightForTemplate"
 import { paApis } from '@/api/graphQLApiList/pa'
 import LookupValue from '@/components/org/LookupValue/index'
 import lableName from '@/components/lableName'   
 import mixTable from "@/components/basicComponent/mixTable"     
 import mixForm from "@/components/basicComponent/mixForm"      
 import mixButton from '@/components/basicComponent/mixButton'      

 export default {
  mixins: [the_Height],
  components:{
    LookupValue,
    lableName,
    mixTable,
    mixForm,
    mixButton
  },

   props: {
    applyClaimDoubleDialogVisible: {
      type: Boolean,
      default: function() {
        return false;
      }
    }
  },

  data(){
    return{
        //按钮
        dialogbtns: {
          left: [
          ],  
          right: [
            { name: 'search', label: '查询', event: this.fetchData },
            { name: 'choose', label: '选择', event: this.chooseData },
            { name: 'reset', label: '重置', event: this.resetData },
          ]
        },
        //表单
        applyForClaimDoubleDialogForm: [
            {label: '索赔单号', codeField: 'A1', type: 'inputTxt'},
            {
                label: '制单日期',
                codeField: 'makeOrderDate',
                type: 'inputDate',
                dateType: 'daterange'
            },
        ],
        applyForClaimFormDoubleDialogData: {
            A1: '',
            makeOrderDate: ''
      },
      //表格
        applyClaimDoubleUnitCols: [
            { label: "索赔单号", codeField: "A1"},
            { label: "发单号", codeField: "A2"},
            { label: "收货日期", codeField: "A3"},
            { label: "制单人", codeField: "A4"},
            { label: "制单日期", codeField: "A5"},
            { label: "备注", codeField: "A6"}
        ],
        applyClaimDoubleQueryParams: {
            APIUrl: paApis.applyClaimNumberQueryList.APIUrl,
            InputType: paApis.applyClaimNumberQueryList.InputType,
            ServiceCode: paApis.applyClaimNumberQueryList.ServiceCode,
            dataInfo: {
                A1: '',
                A11: '',
                A12: ''
            },
            apiQueryRow: [
                'A1',
                'A2',
                'A3',
                'A4',
                'A5',
                'A6'
            ]
      },
      }
    },

  created(){
  },

  methods:{
    //查询
    fetchData(){
        this.$refs.applyClaimListDoubleTable.queryList();
    },
    //选择
    chooseData(){
        var str = this.$refs.applyClaimListDoubleTable.currentRow;
        if(str.length == 0){
            this.$message({
                message: "请先选择一行数据!",
                type: "warning"
              });
        }else{
            var claimId = true + " " +  this.$refs.applyClaimListDoubleTable.currentRow[0].A1 + " " + false;
            this.$emit('close',claimId);
        }
    },
    //关闭弹窗
    close(){
        var str = false + " " + false;
        this.$emit('close',str);
    },
    //重置
    resetData(){
        this.applyForClaimFormDoubleDialogData.A1 = '';
        this.applyForClaimFormDoubleDialogData.makeOrderDate = ''; 
    },
    //更多改变布局
    //关闭弹窗
    close(){
        var str = false;
        this.$emit('close',str);
    },
    //日期选择器分开日期
    getMakeDate(e){   // e中已经获取到值
        var year0 = e[0].getFullYear();
        var month0 = e[0].getMonth() + 1;
        var day0 = e[0].getDate();
        var year1 = e[1].getFullYear();
        var month1 = e[1].getMonth() + 1;
        var day1 = e[1].getDate();
        this.applyClaimDoubleQueryParams.dataInfo.A11 = year0+"-"+month0+"-"+day0;
        this.applyClaimDoubleQueryParams.dataInfo.A12 = year1+"-"+month1+"-"+day1;
    },
    //表格自适应
    makeHeight(mh) {
        //协议单位 + 调拨销售单
        var strAgreementPage = this.$refs.applyClaimListDoubleTable.$refs.paginationHeight.$el.offsetHeight;
        var strAgreementResult = this.$refs.applyClaimListDoubleTable.$refs.resultTitleHeight.offsetHeight;
        // 减去margin-top/bottom值
        if (!this.$utils.isIE() || isResize) {
            this.tableHeight = mh - this.tableMarginHeight - strAgreementPage - strAgreementResult - 7;
            this.$refs.applyClaimListDoubleTable.tableHeight = this.tableHeight;
        } else {
            // IE浏览器需要减去额外高度
            this.tableHeight = mh - this.tableMarginHeight - this.ieHeight - strAgreementPage - strAgreementResult - 7;
            this.$refs.applyClaimListDoubleTable.tableHeight = this.tableHeight;
        }  
    }
  }
}
</script>
