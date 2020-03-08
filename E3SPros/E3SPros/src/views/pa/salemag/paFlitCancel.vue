<!--
* description: 备件调拨取消
* author: wangyaoyao
* createdDate: 2019-10-19
* logs:
-->
<template>
  <section>
    <div class="app-container app-container-table">
      <div class="filter-container filter-button" v-if="flag==1">
        <el-button type="primary" size="small" @click="fetchData()">查询</el-button>
        <el-button size="small" @click="resetCancel()">重置</el-button>
      </div>
      <div class="filter-container filter-button" v-if="flag==2">
        <el-button type="primary" size="small" @click="fetchDataHistory()">查询</el-button>
        <el-button size="small" @click="resetHistory()">重置</el-button>
      </div>
      <el-tabs v-model="activeName" tab-position="right" @tab-click="handleClick">
        <el-tab-pane label="调拨取消" name="flitCancel">
          <mix-form ref="fromFlitCancel" :dynamicFormFields="fromFlitCancel" :dynamicFieldsData="fromFlitCancelData"></mix-form>
          <mix-table ref="flitCancelTable" :queryParams="queryParamsFlitCancel" :dynamicTableCols="flitCancelTable" :isPaging=true :isDialog=false @row-click="handleTableRowChange()" />
        </el-tab-pane>
        <el-tab-pane label="查询调拨取消历史" name="flitCancelHistory">
          <mix-form ref="fromFlitCancelHistory" :dynamicFormFields="fromFlitCancelHistory" :dynamicFieldsData="fromFlitCancelHistoryData"></mix-form>
          <mix-table ref="flitCancelHistoryTable" :queryParams="queryParamsFlitCancelHistory" :dynamicTableCols="flitCancelHistoryTable" :isPaging=true :isDialog=false />
        </el-tab-pane>
      </el-tabs>
      <el-dialog title="报价单选择" :visible.sync="dialogCancelDetailVisible" width="80%" :append-to-body="true" :close-on-click-modal="false">
        <div class="filter-container filter-button">
          <el-button size="small" type="primary" @click="saveCancel()">保存</el-button>
          <mix-table ref="flitCancelDetailTable" :queryParams="queryParamsFlitCancelDetail" :dynamicTableCols="flitCancelDetailTable" :isPaging=true :isDialog="true" />
        </div>
      </el-dialog>
      <el-dialog title="报价单选择" :visible.sync="dialogDetailHistoryVisible" width="80%" :append-to-body="true" :close-on-click-modal="false">
        <div class="filter-container filter-button">
          <el-button size="small" type="primary" @click="del()">删除</el-button>
          <mix-table ref="flitCancelHistoryDetailTable" :queryParams="queryParamsFlitCancelHistoryDetail" :dynamicTableCols="flitCancelHistoryDetailTable" :isPaging=true :isDialog="true" />

        </div>
      </el-dialog>
    </div>
  </section>
</template>
<script>
import { paApis } from '@/api/graphQLApiList/pa'
import { requestGraphQL } from '@/api/commonRequest'
import mixTable from '@/components/basicComponent/mixTable'
import mixForm from '@/components/basicComponent/mixForm'

export default {
  name: 'paFlitCancel',
  components: {
    mixTable,
    mixForm
  },
  data() {
    return {
      activeName: 'flitCancel',
      flag: 1, //控制按钮集的显示
      dialogReviseVisible: false,
      dialogFormVisible: false,
      dialogCancelDetailVisible: false,
      dialogDetailHistoryVisible: false,
      flitCancelTable: [
        { label: '调拨类型', codeField: 'flitType' },
        { label: '调拨单号', codeField: 'flitordercode' },
        { label: '单据日期', codeField: 'billData' },
        { label: '客户编码', codeField: 'flitCancelCusCode' },
        { label: '客户简称', codeField: 'flitCancelCusName' },
        { label: '客户全称', codeField: 'flitCancelCusNName' }
      ],
      flitCancelHistoryTable: [
        { label: '调拨取消单号', codeField: 'flitCancelHistoryCode' },
        { label: '调拨单号', codeField: 'FlitCancelHistoryFlitNo' },
        { label: '目标网点', codeField: 'targerInt' },
        { label: '取消品种', codeField: 'cancelType' },
        { label: '取消金额', codeField: 'cancleMoney' },
        { label: '取消日期', codeField: 'FlitCancelHistoryDate' },
        { label: '制单人员', codeField: 'createor' },
        { label: '结算状态', codeField: 'FlitCancelHistoryComPuted' }
      ],
      queryParamsFlitCancel: {
        APIUrl: paApis.flitCancelQuery.APIUrl,
        InputType: paApis.flitCancelQuery.InputType,
        ServiceCode: paApis.flitCancelQuery.ServiceCode,
        dataInfo: {
          carBrandCode: '',
          carSeriesCode: '',
          carTypeCode: ''
        },
        apiQueryRow: [
          'flitType',
          'flitordercode',
          'billData',
          'flitCancelCusCode',
          'flitCancelCusName',
          'flitCancelCusNName'
        ]
      },
      queryParamsFlitCancelHistory: {
        APIUrl: paApis.flitCancelHistoryQuery.APIUrl,
        InputType: paApis.flitCancelHistoryQuery.InputType,
        ServiceCode: paApis.flitCancelHistoryQuery.ServiceCode,
        dataInfo: {
          carBrandCode: '',
          carSeriesCode: '',
          carTypeCode: ''
        },
        apiQueryRow: [
          'flitCancelHistoryCode',
          'FlitCancelHistoryFlitNo',
          'targerInt',
          'cancelType',
          'cancleMoney',
          'FlitCancelHistoryDate',
          'createor',
          'FlitCancelHistoryComPuted'
        ]
      },
      //调拨取消明细
      flitCancelDetailTable: [
        { label: '备件号', codeField: 'flitType' },
        { label: '备件名称', codeField: 'flitType' },
        { label: 'SNP', codeField: 'flitType' },
        {
          label: '本次取消数量',
          codeField: 'flitNum',
          isEdit: 'true',
          width: '150',
          comps: [{
            type: 'inputNum2',
            change: this.changeFlitNum,
            focus: null
          }]
        },
        { label: '销售单价', codeField: 'flitType' },
        { label: '销售总金额', codeField: 'flitType' },
        { label: '调拨数量', codeField: 'flitType' },
        { label: '已出库数量', codeField: 'flitType' },
        { label: '实际可用库存', codeField: 'flitType' },
        { label: '理论可用库存', codeField: 'flitType' },
        { label: '单位', codeField: 'flitType' },
        { label: '仓库名称', codeField: 'flitType' },
        { label: '仓位编码', codeField: 'flitType' },
        { label: '备件车系', codeField: 'flitType' },
        { label: '适用车型', codeField: 'flitType' },
        { label: '备件品牌', codeField: 'flitType' },
        { label: '三包重点件', codeField: 'flitType' }
      ],

      queryParamsFlitCancelDetail: {
        APIUrl: paApis.flitCancelDetailQuery.APIUrl,
        InputType: paApis.flitCancelDetailQuery.InputType,
        ServiceCode: paApis.flitCancelDetailQuery.ServiceCode,
        dataInfo: {
          carBrandCode: '',
          carSeriesCode: '',
          carTypeCode: ''
        },
        apiQueryRow: [
          'flitCancelHistoryCode',
          'FlitCancelHistoryFlitNo',
          'targerInt',
          'cancelType',
          'cancleMoney',
          'FlitCancelHistoryDate',
          'createor',
          'FlitCancelHistoryComPuted'
        ]
      },
      //调拨取消历史明细
      flitCancelHistoryDetailTable: [
        { label: '备件品牌', codeField: 'flitType' },
        { label: '备件号', codeField: 'flitType' },
        { label: '备件名称', codeField: 'flitType' },
        { label: '单位', codeField: 'flitType' },
        { label: '取消数量', codeField: 'flitType', isEdit: 'true' },
        { label: '单价', codeField: 'flitType' },
        { label: '取消总价', codeField: 'flitType' },
        { label: '三包重点件', codeField: 'flitType' }
      ],
      queryParamsFlitCancelHistoryDetail: {
        APIUrl: paApis.flitCancelHistoryDetailQuery.APIUrl,
        InputType: paApis.flitCancelHistoryDetailQuery.InputType,
        ServiceCode: paApis.flitCancelHistoryDetailQuery.ServiceCode,
        dataInfo: {
          carBrandCode: '',
          carSeriesCode: '',
          carTypeCode: ''
        },
        apiQueryRow: [
          'flitCancelHistoryCode',
          'FlitCancelHistoryFlitNo',
          'targerInt',
          'cancelType',
          'cancleMoney',
          'FlitCancelHistoryDate',
          'createor',
          'FlitCancelHistoryComPuted'
        ]
      },
      fromFlitCancel: [
        {
          label: '调拨类型',
          codeField: 'flitType',
          isShowLabel: true,
          lookuptype: 'PA0043',
          sendCode: () => null,
          focusCode: () => null,
          changeCode: val => {
            this.fromFlitCancel.flitType = val
          },
          isComponent: true,
          component: () => import('@/components/org/LookupValue')
        },
        {
          label: '调拨单号',
          codeField: 'flitordercode',
          type: 'inputTxt',
          event: () => {
            this.dialogCancelDetailVisible = true
            this.initflitCancelDetail()
          }
        },
        {
          label: '客户简称',
          codeField: 'flitCancelCusName',
          type: 'inputTxt'
        },
        {
          label: '客户编码',
          codeField: 'flitCancelCusCode',
          type: 'inputTxt'
        },

        {
          label: '调拨日期',
          codeField: 'flitCancelFlitDate',
          type: 'inputDate'
        }
      ],
      fromFlitCancelData: {
        flitType: '',
        flitordercode: '',
        flitCancelCusName: '',
        flitCancelCusCode: '',
        flitCancelFlitDate: ''
      },
      fromFlitCancelHistory: [
        {
          label: '调拨类型',
          codeField: 'flitType',
          isShowLabel: true,
          lookuptype: 'PA0043',
          sendCode: () => null,
          focusCode: () => null,
          changeCode: val => {
            this.fromFlitCancelHistory.flitType = val
          },
          isComponent: true,
          component: () => import('@/components/org/LookupValue')
        },
        {
          label: '调拨取消单号',
          codeField: 'flitCancelHistoryCode',
          type: 'inputTxt',
          event: () => {
            this.dialogDetailHistoryVisible = true
            this.initflitHistoryDetail()
          }
        },
        {
          label: '备件号',
          codeField: 'FlitCancelHistoryPartNo',
          type: 'inputTxt'
        },
        {
          label: '备件名称',
          codeField: 'FlitCancelHistoryPartName',
          type: 'inputTxt'
        },
        {
          label: '调拨单号',
          codeField: 'FlitCancelHistoryFlitNo',
          type: 'inputTxt'
        },
        {
          label: '结算状态',
          codeField: 'FlitCancelHistoryComPuted',
          isShowLabel: true,
          lookuptype: 'PA0068',
          sendCode: () => null,
          focusCode: () => null,
          changeCode: val => {
            this.fromLogisticsData.FlitCancelHistoryComPuted = val
          },
          isComponent: true,
          component: () => import('@/components/org/LookupValue')
        },
        {
          label: '取消日期',
          codeField: 'FlitCancelHistoryDate',
          type: 'inputDate'
        }
      ],
      fromFlitCancelHistoryData: {
        flitType: '',
        flitCancelHistoryCode: '',
        FlitCancelHistoryPartNo: '',
        FlitCancelHistoryPartName: '',
        FlitCancelHistoryFlitNo: '',
        FlitCancelHistoryComPuted: '',
        FlitCancelHistoryDate: ''
      }
    }
  },
  methods: {
    fetchData() {
      this.$refs.flitCancelTable.queryList()
    },
    fetchDataHistory() {
      this.$refs.flitCancelHistoryTable.queryList()
    },
    handleClick(tab, event) {
      tab.name == 'flitCancel' ? (this.flag = 1) : (this.flag = 2)
    },
    saveCancel() {
      var that = this
      if (this.$refs.flitCancel.$refs.multipleTable.selection.length == 0) {
        this.$message({
          message: '请选择记录，然后再进行保存',
          type: 'warning'
        })
        return false
      } else {
        let saveSourceData = {}
        let queryObj = {
          //保存需要传 type="mutation"
          type: 'mutation',
          // api配置
          apiConfig: paApis.partSourceTypeSave,
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
            dataInfo: saveSourceData
          }
        }
        //转换了中台请求格式数据
        var paramD = that.$getParams(queryObj)
        requestGraphQL(paramD).then(response => {
          if (response[paApis.partSourceTypeSave.ServiceCode].result === '1') {
            this.$message({
              message: response.partSourceTypeSave.data.rows[0].msg,
              type: 'success'
            })
            this.fetchData()
            that.$refs.multipleTable.clearSelection()
          }
        })
      }
    },
    revise(flag) {
      if (flag == 1) {
        if (this.$refs.flitCancelHistory.currentRow.length == 0) {
          this.$message({
            message: '请选择一条记录，然后再进行修改',
            type: 'warning'
          })
          return false
        } else {
          this.dialogReviseVisible = true
          this.maintenanceInfo = {
            sourceCode: this.$refs.flitCancelHistory.currentRow[0].来源代码,
            sourceName: this.$refs.flitCancelHistory.currentRow[0].来源名称,
            sourceBigType: this.$refs.flitCancelHistory.currentRow[0].来源大类,
            status: this.$refs.flitCancelHistory.currentRow[0].状态,
            remark: this.$refs.flitCancelHistory.currentRow[0].备注
          }
        }
      }
      this.dialogReviseVisible = true
    },

    saveType() {
      var that = this
      this.$refs.ruleForm.validate(valid => {
        if (valid) {
          let saveTypeData = {}
          let queryObj = {
            //保存需要传 type="mutation"
            type: 'mutation',
            // api配置
            apiConfig: paApis.partSourceType1Save,
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
              response[paApis.partSourceType1Save.ServiceCode].result === '1'
            ) {
              this.$message({
                message: response.partSourceType1Save.data.rows[0].msg,
                type: 'success'
              })
            }
          })
        } else {
          return false
        }
      })
      this.dialogReviseVisible = false
    },
    resetRevise() {
      this.maintenanceInfo = {
        sourceCode: '',
        sourceName: '',
        sourceBigType: '',
        status: '',
        remark: ''
      }
    },
    //备件编码弹窗显示

    resetHistory() {
      this.$refs.fromFlitCancelHistory.resetFormdata()
    },

    resetCancel() {
      this.$refs.fromFlitCancel.resetFormdata()
    },
    initflitCancelDetail() {
      this.$nextTick(() => {
        this.$refs.flitCancelDetailTable.queryList()
      })
    },
    initflitHistoryDetail() {
      this.$nextTick(() => {
        this.$refs.flitCancelHistoryDetailTable.queryList()
      })
    },
    del(){
       var that = this
      let saveTypeData = {}

      let queryObj = {
        //保存需要传 type="mutation"
        type: 'mutation',
        // api配置
        apiConfig: paApis.PaBuDlrFlitOrderDel,
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
          response[paApis.PaBuDlrFlitOrderDel.ServiceCode]
            .result === '1'
        ) {
          this.$message({
            message: response.PaBuDlrFlitOrderDel.msg,
            type: 'success'
          })
        } else {
          this.$message({
            message: response.PaBuDlrFlitOrderDel.msg,
            type: 'warning'
          })
        }
      })
    }
  }
}
</script>

