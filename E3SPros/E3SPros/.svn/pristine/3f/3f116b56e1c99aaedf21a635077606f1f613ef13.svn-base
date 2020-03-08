<template>
  <el-dialog
    title="入库单号查询"
    :visible.sync="applyClaimDialogVisible"  
    :close-on-click-modal="false"
    width="80%"
    @close="close()"
    :append-to-body="true"
  >
    <div class="filter-container filter-params">
      <mix-form ref="applyForClaimDialogForm" 
          :dynamicFormFields="applyForClaimDialogForm" 
          :dynamicFieldsData="applyForClaimFormDialogData"
          :isSearch="true">
      </mix-form>

      <mix-button
          name="searchDialogBtns"
          :dynamicButtons="dialogbtns"
          :isShowMore="true"
          @toggle="changeToggleParam">
      </mix-button>
    </div> 
    <mix-table
        ref="applyClaimListTable"
        :queryParams="applyClaimQueryParams"
        :dynamicTableCols="applyClaimUnitCols"
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
    applyClaimDialogVisible: {
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
        applyForClaimDialogForm: [
            {
                label: '备件品牌',
                codeField: 'A7',
                isShowLabel: true,
                lookuptype: 'PA0008',
                sendCode: () => null,
                focusCode: () => null,
                changeCode: val => {
                    this.applyForClaimFormDialogData.A7 = val
                },
                isComponent: true,
                component: () => import('@/components/org/LookupValue')
            },
            {label: '备件名称', codeField: 'A8', type: 'inputTxt'},
            {label: '入库单号', codeField: 'A9', type: 'inputTxt'},
            {label: '供应商编码', codeField: 'A10', type: 'inputTxt'},
            {
                label: '入库日期',
                codeField: 'makeDate',
                type: 'inputDate',
                dateType: 'daterange'
            },
        ],
        applyForClaimFormDialogData: {
            A7: '',
            A8: '',
            A9: '',
            A10: '',
            makeDate: ''
      },
      //表格
        applyClaimUnitCols: [
            { label: "入库单号", codeField: "A1"},
            { label: "发票单号", codeField: "A2"},
            { label: "备件号", codeField: "A3"},
            { label: "备件名称", codeField: "A4"},
            { label: "收货日期", codeField: "A5"},
            { label: "备注", codeField: "A6"}
        ],
        applyClaimQueryParams: {
            APIUrl: paApis.applyClaimQueryList.APIUrl,
            InputType: paApis.applyClaimQueryList.InputType,
            ServiceCode: paApis.applyClaimQueryList.ServiceCode,
            dataInfo: {
                A7: '',
                A8: '',
                A9: '',
                A10: '',
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
        this.$refs.applyClaimListTable.queryList();
    },
    //选择
    chooseData(){
        var str = this.$refs.applyClaimListTable.currentRow;
        if(str.length == 0){
            this.$message({
                message: "请先选择一行数据!",
                type: "warning"
              });
        }else{
            var entryId = true + " " + this.$refs.applyClaimListTable.currentRow[0].A1 + " " + 
                          this.$refs.applyClaimListTable.currentRow[0].A2 + " " + false;
            this.$emit('close',entryId);
        }
    },
    //重置
    resetData(){
        this.applyForClaimFormDialogData.A7 = '';
        this.applyForClaimFormDialogData.A8 = '';
        this.applyForClaimFormDialogData.A9 = '';
        this.applyForClaimFormDialogData.A10 = '';
        this.applyForClaimFormDialogData.makeDate = ''; 
    },
    //更多改变布局
    changeToggleParam() {
        this.$refs.applyForClaimDialogForm.changeToggleParam();
    },
    //关闭弹窗
    close(){
        var str = false + " " + false;
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
        this.applyClaimQueryParams.dataInfo.A11 = year0+"-"+month0+"-"+day0;
        this.applyClaimQueryParams.dataInfo.A12 = year1+"-"+month1+"-"+day1;
    },
    //表格自适应
    makeHeight(mh) {
        //协议单位 + 调拨销售单
        var strAgreementPage = this.$refs.applyClaimListTable.$refs.paginationHeight.$el.offsetHeight;
        var strAgreementResult = this.$refs.applyClaimListTable.$refs.resultTitleHeight.offsetHeight;
        // 减去margin-top/bottom值
        if (!this.$utils.isIE() || isResize) {
            this.tableHeight = mh - this.tableMarginHeight - strAgreementPage - strAgreementResult - 7;
            this.$refs.applyClaimListTable.tableHeight = this.tableHeight;
        } else {
            // IE浏览器需要减去额外高度
            this.tableHeight = mh - this.tableMarginHeight - this.ieHeight - strAgreementPage - strAgreementResult - 7;
            this.$refs.applyClaimListTable.tableHeight = this.tableHeight;
        }  
    }
  }
}
</script>
