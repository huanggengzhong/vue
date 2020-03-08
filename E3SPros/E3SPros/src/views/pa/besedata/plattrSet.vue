<!--
* description: 批量维护属性字段配置
* author: wangyaoyao
* createdDate: 2019-10-14
* logs:
-->
<template>
  <section>
    <div class="app-container app-container-table">
      <!-- <div class="filter-container filter-button">
        <el-button type="primary" size="small" @click="fetchData()">查询</el-button>
        <el-button size="small" @click="revise(1)">新增</el-button>
        <el-button size="small" @click="revise(2)">修改</el-button>
        <el-button size="small" @click="reset()">重置</el-button>
      </div> -->
      <div class="filter-container filter-params">
        <mix-form ref="fromLogistics" :dynamicFormFields="fromLogistics" :dynamicFieldsData="fromLogisticsData"></mix-form>
        <mix-button name="searchBtns" :dynamicButtons="btns" :isShowMore=false></mix-button>
      </div>
      <mix-table ref="tableListLogistics" :queryParams="queryParamsLogistics" :dynamicTableCols="colsLogistics" :isPaging=true :isDialog=false />
      <el-dialog title="数据维护" :visible.sync="dialogLogisticsVisible" :append-to-body=true :close-on-click-modal=false width='80%' :destroy-on-close="true" @close="closeDialog()">
        <div class="filter-container filter-params">
          <mix-form ref="fromDialogLogistics" :dynamicFormFields="fromAddLogistics" :dynamicFieldsData="fromAddLogisticsData"></mix-form>
          <mix-button name="dialogBtns" :dynamicButtons="dialogbtns" :isShowMore=false></mix-button>

        </div>
        <!-- <div slot="footer" class="dialog-footer"> -->

          <!-- <el-button type="primary" @click="saveLogistics()">保存</el-button>
          <el-button @click="resetLogistics()">重置</el-button> -->
        <!-- </div> -->
      </el-dialog>
    </div>
  </section>
</template>
<script>
import { paApis } from '@/api/graphQLApiList/pa'
import { requestGraphQL } from '@/api/commonRequest'
import chooseSupplier from '@/components/pa/chooseSupplier'
import paChoose from '@/components/pa/paChoose'
import LookupValue from '@/components/org/LookupValue'
import mixTable from '@/components/basicComponent/mixTable'
import mixForm from '@/components/basicComponent/mixForm'
import mixButton from '@/components/basicComponent/mixButton'

export default {
  name: 'partBigTypeRepre',
  components: {
    chooseSupplier,
    paChoose,
    LookupValue,
    mixTable,
    mixForm,
    mixButton
  },
  data() {
    return {
      dialogLogisticsVisible: false,
      flag: 0,
      colsLogistics: [
        { label: '表编码', codeField: 'configTableName' },
        { label: '字段编码', codeField: 'columnCode' },
        { label: '字段名称', codeField: 'columnName' },
        { label: '取值类型', codeField: 'configTypeName' },
        { label: '取值格式', codeField: 'configForm' },
        { label: '取值SQL', codeField: 'valuesSourceSql' },
        { label: '维护人员', codeField: 'modifier' },
        { label: '操作人', codeField: 'creator' },
        { label: '操作时间', codeField: 'createdDate' },
        { label: '状态', codeField: 'isEnable' },
        { label: '备注', codeField: 'remark' }
      ],
      queryParamsLogistics: {
        APIUrl: paApis.paDbPartColConfigQueryList.APIUrl,
        InputType: paApis.paDbPartColConfigQueryList.InputType,
        ServiceCode: paApis.paDbPartColConfigQueryList.ServiceCode,
        dataInfo: {},
        apiQueryRow: [
          'columnCode',
          'columnName',
          'configForm',
          'configTableName',
          'configType',
          'createdDate',
          'createdName',
          'creator',
          'groupCode',
          'groupId',
          'isEnable',
          'isSystem',
          'lastUpdatedDate',
          'modifier',
          'modifyName',
          'mycatOpTime',
          'oemCode',
          'oemId',
          'orderNo',
          'partBrandCode',
          'partColConfigId',
          'remark',
          'sdpOrgId',
          'sdpUserId',
          'updateControlId',
          'userRole',
          'valuesSourceSql'
        ]
      },
      fromLogistics: [
        { label: '表编码', codeField: 'tableCode', type: 'inputTxt' },
        { label: '字段名称', codeField: 'worldName', type: 'inputTxt' },
        {
          label: '状态',
          codeField: 'status',
          isShowLabel: true,
          lookuptype: 'DB0052',
          sendCode: () => null,
          focusCode: () => null,
          changeCode: val => {
            this.fromLogisticsData.status = val
          },
          isComponent: true,
          component: () => import('@/components/org/LookupValue')
        }
      ],
      fromLogisticsData: {
        tableCode: '',
        worldName: '',
        status: ''
      },
      //新增form设置
      fromAddLogistics: [
        {
          label: '表编码',
          codeField: 'tableCode',
          type: 'inputTxt',
          span: 8
        },
        {
          label: '字段编码',
          codeField: 'worldCode',
          type: 'inputTxt',
          span: 8
        },
        {
          label: '字段名称',
          codeField: 'worldName',
          type: 'inputTxt',
          span: 8
        },
        {
          label: '取值类型',
          codeField: 'getValueType',
          isShowLabel: true,
          span: 8,
          lookuptype: 'VE0016',
          sendCode: () => null,
          focusCode: () => null,
          changeCode: val => {
            this.fromAddLogisticsData.getValueType = val
          },
          isComponent: true,
          component: () => import('@/components/org/LookupValue')
        },
        {
          label: '取值格式',
          codeField: 'getValueFormat',
          type: 'inputTxt',
          span:8
        },
        {
          label: '取值SQL',
          codeField: 'getValueSQL',
          type: 'inputTxt',
          span: 8
        },
        {
          label: '维护人员',
          codeField: 'maintainPeople',
          type: 'inputTxt',
          span: 8
        },
        {
          label: '状态',
          codeField: 'status',
          isShowLabel: true,
          lookuptype: 'DB0052',
          span: 8,
          sendCode: () => null,
          focusCode: () => null,
          changeCode: val => {
            this.fromAddLogisticsData.status = val
          },
          isComponent: true,
          component: () => import('@/components/org/LookupValue')
        },
        { label: '备注', codeField: 'remark', type: 'inputTxt', span: 8}
      ],
      fromAddLogisticsData: {
        tableCode: '',
        worldCode: '',
        worldName: '',
        getValueType: '',
        getValueFormat: '',
        getValueSQL: '',
        maintainPeople: '',
        getValueType: '',
        remark: ''
      },
      //button
      btns: {
        left: [
          { name: 'export', label: '新增', event: 'revise', argument: [1] },
          { name: 'export', label: '修改', event: 'revise', argument: [2] }
        ],
        right: [
          { name: 'search', label: '查询', event: 'fetchData' },
          { name: 'reset', label: '重置', event: 'reset' }
        ]
      },
      //新增，修改弹窗按钮
      dialogbtns:{
        left: [],
        right: [
          { name: 'search', label: '保存', event: 'saveLogistics' },
          { name: 'reset', label: '重置', event: 'resetLogistics' }
        ]
      }
    }
  },
  methods: {
    fetchData() {
      this.queryParamsLogistics.dataInfo = {
        configTableName: this.fromLogisticsData.tableCode,
        columnName: this.fromLogisticsData.worldName,
        isEnable: this.fromLogisticsData.status
      }
      this.$refs.tableListLogistics.queryList()
    },

    revise(flag) {
      if (flag == 2) {
        if (this.$refs.tableListLogistics.currentRow.length == 0) {
          this.$message({
            message: '请选中一条记录',
            type: 'warning'
          })
          return false
        } else {
          this.dialogLogisticsVisible = true
          this.flag = 1
          let currentRow = this.$refs.tableListLogistics.currentRow[0]
          this.fromAddLogisticsData.tableCode = currentRow.configTableName
          this.fromAddLogisticsData.worldCode = currentRow.columnCode
          this.fromAddLogisticsData.worldName = currentRow.columnName
          this.fromAddLogisticsData.getValueType = currentRow.configTypeName
          this.fromAddLogisticsData.getValueFormat = currentRow.configForm
          this.fromAddLogisticsData.getValueSQL = currentRow.valuesSourceSql
          this.fromAddLogisticsData.maintainPeople = currentRow.userRole
          this.fromAddLogisticsData.status = currentRow.isEnable
          this.fromAddLogisticsData.remark = currentRow.remark
        }
      } else if (flag == 1) {
        this.dialogLogisticsVisible = true
        this.fromAddLogisticsData.maintainPeople = this.$store.getters.name
        this.flag = 0
      }
    },

    reset() {
      this.$refs.fromLogistics.resetFormdata()
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
    //重置弹框
    resetLogistics() {
      this.$refs.fromDialogLogistics.resetFormdata()
    },
    //关闭弹窗
    closeDialog() {
      this.resetLogistics()
    }
  }
}
</script>

