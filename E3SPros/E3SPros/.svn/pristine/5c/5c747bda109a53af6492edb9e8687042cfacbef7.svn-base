<!--
* description: 备件调拨单制作
* author: wangyaoyao
* createdDate: 2019-10-16
* logs:
-->
<template>
  <section>
    <div class="app-container app-container-table">
      <!-- <div class="filter-container filter-button">
        <el-button type="primary" size="small" @click="fetchData()">查询</el-button>
        <el-button size="small" @click="jumpNewOrder(0)">新建</el-button>
        <el-button size="small">打印</el-button>
        <el-button size="small" @click="reset()">重置</el-button>
      </div> -->
      <div class="filter-container filter-params">
        <mix-form ref="fromLogistics" :dynamicFormFields="fromLogistics" :dynamicFieldsData="fromLogisticsData"></mix-form>
        <mix-button name="searchBtns" :dynamicButtons="btns" :isShowMore=false></mix-button>
      </div>
      <mix-table ref="tableListLogistics" :queryParams="queryParamsLogistics" :dynamicTableCols="colsLogistics" :isPaging=true :isDialog=false />
      <el-dialog title="调拨单明细" :visible.sync="dialogFlitDetailVisible" width="80%" :append-to-body="true" :close-on-click-modal="false">
        <mix-table ref="tableFlitDetail" :queryParams="queryParamsFlitDetail" :dynamicTableCols="colsFlitDetail" :isPaging=true :isDialog=true />
      </el-dialog>
    </div>
  </section>
</template>
<script>
import { paApis } from '@/api/graphQLApiList/pa'
import { requestGraphQL } from '@/api/commonRequest'
import chooseSupplier from '@/components/pa/chooseSupplier'
import paChoose from '@/components/pa/paChoose'
import mixTable from '@/components/basicComponent/mixTable'
import mixForm from '@/components/basicComponent/mixForm'
import mixButton from '@/components/basicComponent/mixButton'

export default {
  name: 'PaBuDlrFlitOrder',
  components: {
    chooseSupplier,
    paChoose,
    mixTable,
    mixForm,
    mixButton
  },
  data() {
    return {
      dialogFlitDetailVisible: false, //调拨单明细弹框
      pageTotal: '',
      list: '', //新建调拨单明细
      colsLogistics: [
        {
          label: '操作',
          codeField: 'created',
          labelName: '修改',
          width: '120',
          comps: [
            {
            type: 'button',
            event: this.revise
          }
          ]
        },
        {
          label: '操作',
          codeField: 'created',
          labelName: '删除',
          width: '120',
          comps: [
            {
            type: 'button',
            event: this.del
          }
          ]
        },
        {
          label: '调拨单号',
          codeField: 'flitOrderCode',
          width: '120',
          comps: [
            {
            type: 'link',
            event: this.flitDetail
          }
          ]
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
      queryParamsLogistics: {
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
          'rejectReason',
          'dlrFlitOrderId',
          'auditStatus',
          'updateControlId'
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
        APIUrl: paApis.paBuDlrFlitOrderDQueryFindAll.APIUrl,
        InputType: paApis.paBuDlrFlitOrderDQueryFindAll.InputType,
        ServiceCode: paApis.paBuDlrFlitOrderDQueryFindAll.ServiceCode,
        dataInfo: {},
        apiQueryRow: [
          'partBrandCode',
          'partNo',
          'partName',
          'flitQty',
          'unit',
          'flitFactPrice',
          'flitPrice',
          'outStoreQty',
          'cancelQty',
          'inStoreQty',
          
        ]
      },
      fromLogistics: [
        {
          label: '调拨单号',
          codeField: 'flitOrderCode',
          type: 'inputTxt',
        },
        {
          label: '调拨类型',
          codeField: 'flitType',
          isShowLabel: true,
          lookuptype: 'PA0043',
          sendCode: () => null,
          focusCode: () => null,
          changeCode: val => {
            this.fromLogisticsData.flitType = val
          },
          isComponent: true,
          component: () => import('@/components/org/LookupValue')
        },
        {
          label: '调拨日期',
          codeField: 'FlitDate',
          type: 'inputDate',
          dateType: 'daterange'
          // rules:{ required: true, message: '请输入调拨日期', trigger: 'blur' }
        },
        {
          label: '调拨状态',
          codeField: 'flitStatus',
          isShowLabel: true,
          lookuptype: 'PA0044',
          sendCode: () => null,
          focusCode: () => null,
          changeCode: val => {
            this.fromLogisticsData.flitStatus = val
          },
          isComponent: true,
          component: () => import('@/components/org/LookupValue')
        }
      ],
      fromLogisticsData: {
        flitOrderCode: '',
        flitType: '',
        FlitDate: '',
        flitStatus: ''
      },
      //button
       btns: {
        left: [
          {
            name: '新建',
            label: '新建',
            event: 'jumpNewOrder',
            argument: [0]
          },
          { name: 'export', label: '打印', event: 'save' },
          { name: 'export', label: '作废', event: 'save' }
        ],
        right: [
          { name: 'search', label: '查询', event: 'fetchData' },
          { name: 'reset', label: '重置', event: 'reset' }
        ]
      },
    }
  },
created(){
  this.fetchDetailData()
},
  methods: {
    fetchData() {
      this.queryParamsLogistics.dataInfo = {
        flitOrderCode: this.fromLogisticsData.flitOrderCode,
        flitType: this.fromLogisticsData.flitType,
        beginFlitDate: this.fromLogisticsData.FlitDate[0],
        endFlitDate: this.fromLogisticsData.FlitDate[1],
        flitStatus: this.fromLogisticsData.flitStatus
      }
      this.$refs.tableListLogistics.queryList()
    },
    reset() {
      this.$refs.fromLogistics.resetFormdata()
    },
    revise(row) {
      this.jumpNewOrder(1, row, this.list)
    },
    jumpNewOrder(flag, row, list) {
      //0新建 1修改
      var that = this
      if (flag[0] == 0) {
        this.$router.push({
          name: 'paNewFlitOrder'
        })
      } else if (flag == 1) {
        this.$router.push({
          name: 'paNewFlitOrder',
          params: { fromlist: row, tablelist: this.list }
        })
      }
      this.$route.params
    },
    saveLogistics() {
      var that = this
      var currentRow = this.$refs.tableListLogistics.currentRow[0]
      let saveTypeData = {
        configTableName: this.fromAddLogisticsData.tableCode,
        columnCode: this.fromAddLogisticsData.worldCode,
        columnName: this.fromAddLogisticsData.worldName,
        configType: this.fromAddLogisticsData.getValueType,
        configForm: this.fromAddLogisticsData.getValueFormat,
        valuesSourceSql: this.fromAddLogisticsData.getValueSQL,
        userRole: this.fromAddLogisticsData.maintainPeople,
        isEnable: this.fromAddLogisticsData.getValueType,
        remark: this.fromAddLogisticsData.remark
      }
      if (this.flag == 0) {
        saveTypeData.updateControlId = currentRow.updateControlId
      } else if (this.flag == 1) {
        delete saveTypeData.updateControlId
      }

      let queryObj = {
        //保存需要传 type="mutation"
        type: 'mutation',
        // api配置
        apiConfig: paApis.paDbPartColConfigMutationSave,
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
        if (
          response.data[paApis.paDbPartColConfigMutationSave.ServiceCode]
            .result === '1'
        ) {
          this.$message({
            message: response.data.paDbPartColConfigMutationSave.msg,
            type: 'success'
          })
        } else {
          this.$message({
            message: response.data.paDbPartColConfigMutationSave.msg,
            type: 'warning'
          })
        }
      })
    },
    del(row) {
      var that = this
      debugger
      let saveTypeData = {
        dlrId:this.$store.getters.orgInfo.DLR_ID,
        dlrFlitOrderId:row.dlrFlitOrderId,
        flitType:row.flitType,
        updateControlId:row.updateControlId,
      }

      let queryObj = {
        //保存需要传 type="mutation"
        type: 'mutation',
        // api配置
        apiConfig: paApis.paBuDlrFlitOrderMutationDel,
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
        if (
          response.data[paApis.paBuDlrFlitOrderMutationDel.ServiceCode].result === '1'
        ) {
          this.$message({
            message: response.data.paBuDlrFlitOrderMutationDel.msg,
            type: 'success'
          })
        } else {
          this.$message({
            message: response.data.paBuDlrFlitOrderMutationDel.msg,
            type: 'warning'
          })
        }
      })
    },

    //调拨明细弹窗
    flitDetail(row) {
      this.dialogFlitDetailVisible = true
      this.queryParamsFlitDetail.dataInfo={
        dlrId:this.$store.getters.orgInfo.dlrId,
        dlrFlitOrderId:row.dlrFlitOrderId
      }
      this.$nextTick(() => {
        this.$refs.tableFlitDetail.queryList()
      })
    },
    //修改按钮查出调拨明细
    async fetchDetailData(page) {
      const that = this
      that.listLoading = true
      let queryObj = {
        type: 'query',
        // api配置
        apiConfig: paApis.PaBuDlrFlitOrderD,
        // 需要调用的API服务配置
        apiServices: [
          {
            //表格中台返回网格的字段
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
          }
        ],
        //条件/实体参数（变量），根据typeParam中的定义配置
        variables: {
          pageSize: that.pageSize,
          pageIndex: page || that.pageIndex,
          //当前中台使用的名称有dataInfo、info，具体查看API文档
          dataInfo: {}
        }
      }
      //转换了中台请求格式数据
      var paramD = that.$getParams(queryObj)
      // 调用中台API方法（可复用）
      requestGraphQL(paramD).then(response => {
        if (response[paApis.PaBuDlrFlitOrderD.ServiceCode].result === '1') {
          if (page) {
            //查询完返回指定的page页数
            that.pageIndex = page
          }

          that.pageTotal =
            response[paApis.PaBuDlrFlitOrderD.ServiceCode].records
          that.list = response[paApis.PaBuDlrFlitOrderD.ServiceCode].rows
          that.listLoading = false
        }
      })
      return this.list
    }
  }
}
</script>

