<!--
* description: 备件调拨单审核
* author: wangyaoyao
* createdDate: 2019-10-22
* logs:
-->
<template>
    <section>
        <div class="app-container app-container-table">
            <!-- <div class="filter-container filter-button">
        <el-button type="primary" size="small" @click="fetchData()">查询</el-button>
        <el-button size="small" @click="save()">审核</el-button>
        <el-button size="small"@click="save()">驳回</el-button>
        <el-button size="small" @click="save()">作废</el-button>
        <el-button size="small">打印</el-button>
        <el-button size="small" @click="reset()">重置</el-button>
      </div> -->
            <div class="filter-container filter-params">
                <mix-form ref="fromPaflitToExamine" :dynamicFormFields="fromPaflitToExamine" :dynamicFieldsData="fromPaflitToExamineData"></mix-form>
                <mix-button name="searchBtns" :dynamicButtons="btns" :isShowMore=false></mix-button>
            </div>
            <mix-table ref="tablePaflitToExamine" :queryParams="queryParamsPaflitToExamine" :dynamicTableCols="colsPaflitToExamine" :isPaging=true :isDialog=true multipleSelect='selection' />
            <el-dialog title="调拨单明细" :visible.sync="dialogFlitDetailVisible" width="80%" :append-to-body="true" :close-on-click-modal="false">
                <mix-table ref="tableFlitDetail" :queryParams="queryParamsFlitDetail" :dynamicTableCols="colsFlitDetail" :isPaging=true :isDialog=false />
            </el-dialog>
        </div>
    </section>
</template>
<script>
import { paApis } from '@/api/graphQLApiList/pa'
import { requestGraphQL } from '@/api/commonRequest'
import mixTable from '@/components/basicComponent/mixTable'
import mixForm from '@/components/basicComponent/mixForm'
import mixButton from '@/components/basicComponent/mixButton'

export default {
  name: 'PaflitToExamine',
  components: {
    mixTable,
    mixForm,
    mixButton
  },
  data() {
    return {
      dialogFlitDetailVisible: false, //调拨单明细弹框
      pageTotal: '',
      list: '', //新建调拨单明细
      colsPaflitToExamine: [
        {
          label: '调拨单号',
          codeField: 'flitOrderCode',
          width: '120',
          comps: [{
            type: 'link',
            event: 'flitDetail'
          }]
        },
        { label: '调拨类型', codeField: 'flitTypeName' },
        { label: '经销商', codeField: 'custFullName' },
        { label: '经销商类别', codeField: 'custClassName' },
        { label: '调拨日期', codeField: 'flitDate' },
        { label: '调拨状态', codeField: 'flitStatusName' },
        { label: '调拨品种', codeField: 'modifier' },
        { label: '调拨总金额', codeField: 'flitReferAmount' },
        { label: '制单人', codeField: 'creatorName' },
        { label: '制单日期', codeField: 'createdDate' },
        { label: '驳回原因', codeField: 'rejectReason' }
      ],
      queryParamsPaflitToExamine: {
        APIUrl: paApis.paBuDlrFlitOrderQueryFindAll.APIUrl,
        InputType: paApis.paBuDlrFlitOrderQueryFindAll.InputType,
        ServiceCode: paApis.paBuDlrFlitOrderQueryFindAll.ServiceCode,
        dataInfo: {},
        apiQueryRow: [
          'flitOrderCode',
          'flitType',
          'flitTypeName',
          'custFullName',
          'custClassName',
          'flitDate',
          'flitStatusName',
          'flitReferAmount',
          'createdDate',
          'rejectReason'
        ]
      },
      //调拨单明细表格
      colsFlitDetail: [
        { label: '备件品牌', codeField: 'partBrandCode' },
        { label: '备件号', codeField: 'partNo' },
        { label: '备件名称', codeField: 'partName' },
        { label: '订货数', codeField: 'flitQty' },
        { label: '单位', codeField: 'unit' },
        { label: '单价', codeField: 'flitFactPrice' },
        { label: '调拨数量', codeField: 'flitQty' },
        { label: '余额', codeField: 'flitPrice' },
        { label: '出库数量', codeField: 'outStoreQty' },
        { label: '取消数量', codeField: 'cancelQty' },
        { label: '入库数量', codeField: 'inStoreQty' }
      ],
      queryParamsFlitDetail: {
        APIUrl: paApis.PaBuDlrFlitOrderD.APIUrl,
        InputType: paApis.PaBuDlrFlitOrderD.InputType,
        ServiceCode: paApis.PaBuDlrFlitOrderD.ServiceCode,
        dataInfo: {},
        apiQueryRow: [
          'partBrand',
          'partNo',
          'partName',
          'orderNum',
          'unit',
          'price',
          'flitNum',
          'money',
          'ckNum',
          'cancelNum',
          'rkNum'
        ]
      },
      fromPaflitToExamine: [
        {
          label: '调拨单号',
          codeField: 'flitOrderCode',
          type: 'inputTxt'
        },
        {
          label: '调拨类型',
          codeField: 'flitType',
          isShowLabel: true,
          lookuptype: 'PA0043',
          sendCode: () => null,
          focusCode: () => null,
          changeCode: val => {
            this.fromPaflitToExamineData.flitType = val
          },
          isComponent: true,
          component: () => import('@/components/org/LookupValue')
        },
        {
          label: '调拨日期',
          codeField: 'FlitDate',
          type: 'inputDate',
          dateType: 'daterange'
        }
      ],
      fromPaflitToExamineData: {
        flitOrderCode: '',
        flitType: '',
        FlitDate: ''
      },
      //button
       btns: {
        left: [
          {
            name: '',
            label: '审核',
            event: 'save',
          },
          { name: 'export', label: '驳回', event: 'save' },
          { name: 'export', label: '作废', event: 'save' }
        ],
        right: [
          { name: 'search', label: '查询', event: 'fetchData' },
          { name: 'reset', label: '重置', event: 'reset' }
        ]
      },
    }
  },

  methods: {
    fetchData() {
      this.queryParamsPaflitToExamine.dataInfo = {
        flitOrderCode: this.fromPaflitToExamineData.flitOrderCode,
        flitType: this.fromPaflitToExamineData.flitType,
        beginFlitDate: this.fromPaflitToExamineData.FlitDate[0],
        endFlitDate: this.fromPaflitToExamineData.FlitDate[1]
      }
      this.$refs.tablePaflitToExamine.queryList()
    },
    reset() {
      this.$refs.fromPaflitToExamine.resetFormdata()
    },
    save() {
      var that = this
      var currentRow = this.$refs.tablePaflitToExamine.currentRow
      if (currentRow == 0) {
        this.$message({
          message: '请选择一条数据',
          type: 'warning'
        })
        return false
      }
      let saveTypeData = {}
      let queryObj = {
        //保存需要传 type="mutation"
        type: 'mutation',
        // api配置
        apiConfig: paApis.flitToExamineSave,
        // 需要调用的API服务配置
        apiServices: [
          {
            //表格中台返回网格的字段
            apiQueryRow: []
          }
        ],
        //条件/实体参数（变量），根据typeParam中的定义配置
        variables: {
          //当前中台使用的名称有dataInfo、info，具体查看API文档
          dataInfo: saveTypeData
        }
      }
      //转换了中台请求格式数据
      var paramD = that.$getParams(queryObj)
      requestGraphQL(paramD).then(response => {
        if (response[paApis.flitToExamineSave.ServiceCode].result === '1') {
          this.$message({
            message: response.flitToExamineSave.msg,
            type: 'success'
          })
        } else {
          this.$message({
            message: response.flitToExamineSave.msg,
            type: 'warning'
          })
        }
      })
    },

    //调拨明细弹窗
    flitDetail(row) {
      this.dialogFlitDetailVisible = true
      this.$nextTick(() => {
        this.$refs.tableFlitDetail.queryList()
      })
    }
  }
}
</script>

