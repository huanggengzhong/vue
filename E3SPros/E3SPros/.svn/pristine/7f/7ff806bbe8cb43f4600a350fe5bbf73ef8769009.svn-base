<!--
* description: 可视化基础数据配置
* author: wangyaoyao
* createdDate: 2019-10-09
* logs:
-->
<template>
  <section>
    <!-- <div class="app-container app-container-table">
      <div class="filter-container filter-button" v-if="flag==1">
        <el-button type="primary" size="small" @click="fetchData(1)">查询{{flag}}</el-button>
        <el-button size="small" @click="reviseLogistics(1)">新增</el-button>
        <el-button size="small" @click="reviseLogistics(2)">修改</el-button>
        <el-button size="small" @click="resetLogistics()">重置</el-button>
      </div> -->
    <div class="filter-container filter-button" v-if="flag==1">
      <el-button type="primary" size="small" @click="fetchData(2)">查询{{flag}}</el-button>
      <el-button size="small" @click="reviseTimeNode(1)">新增</el-button>
      <el-button size="small" @click="reviseTimeNode(2)">修改</el-button>
      <el-button size="small" @click="resetTimeNode()">重置</el-button>
    </div>
    <div class="filter-container filter-button" v-if="flag==2">
      <el-button type="primary" size="small" @click="fetchData(3)">查询{{flag}}</el-button>
      <el-button size="small" @click="reviseAcceptanceType(1)">新增</el-button>
      <el-button size="small" @click="reviseAcceptanceType(2)">修改</el-button>
      <el-button size="small" @click="resetAcceptanceType()">重置</el-button>
    </div>
    <el-tabs v-model="activeName" @tab-click="handleClick" tab-position="right">
      <!-- <el-tab-pane label="物流状态配置" name="logistics">
          <mix-form ref="fromLogistics" :dynamicFormFields="fromLogistics" :dynamicFieldsData="fromLogisticsData"></mix-form>
          <mix-table ref="tableListLogistics" :queryParams="queryParamsLogistics" :dynamicTableCols="colsLogistics" :isPaging=true :isDialog=false />
        </el-tab-pane> -->
      <el-tab-pane label="时间节点配置" name="timeNode">
        <mix-form ref="fromTimeNode" :isSearch=true :dynamicFormFields="fromTimeNode" :dynamicFieldsData="fromTimeNodeData" :queryParams="fromTimeQueryParams"></mix-form>
        <mix-table ref="tableListDataNode" :queryParams="queryParamsTimeNodeTable" :dynamicTableCols="colsTimeNode" :isPaging=true :isDialog=false />
      </el-tab-pane>
      <el-tab-pane label="纳期类型配置" name="acceptanceType">
        <mix-form ref="fromAcceptanceType" :dynamicFormFields="fromAcceptanceType" :dynamicFieldsData="fromAcceptanceTypeData"></mix-form>
        <mix-table ref="tableListAcceptanceType" :queryParams="queryParamsAcceptanceType" :dynamicTableCols="colsTypeAcceptanceType" :isPaging=true :isDialog=false />
      </el-tab-pane>
    </el-tabs>
    <!-- <el-dialog title="数据维护" :visible.sync="dialogLogisticsVisible" :append-to-body=true :close-on-click-modal=false width='80%' :destroy-on-close="true">
        <mix-form ref="fromDialogLogistics" :dynamicFormFields="fromAddLogistics" :dynamicFieldsData="fromAddLogisticsData"></mix-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="saveLogistics()">保存</el-button>
          <el-button type="primary" @click="resetDialogLogistics()">重置</el-button>
        </div>
      </el-dialog> -->
    <el-dialog title="时间节点维护" :visible.sync="dialogTimeNodeVisible" :append-to-body=true :close-on-click-modal=false width='80%' :destroy-on-close="true" @close="closeDialogTimeNode">
      <mix-form ref="fromDialogTimeNode" :dynamicFormFields="fromAddTimeNode" :dynamicFieldsData="fromAddTimeNodeData"></mix-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="saveTimeNode()">保存</el-button>
        <el-button type="primary" @click="resetDialogTimeNode()">重置</el-button>
      </div>
    </el-dialog>
    <el-dialog title="数据维护" :visible.sync="dialogAcceptanceTypeVisible" :append-to-body=true :close-on-click-modal=false width='80%' :destroy-on-close="true" @close="closeDialogAddAcceptanceType">
      <mix-form ref="fromDialogAcceptanceType" :dynamicFormFields="fromAddAcceptanceType" :dynamicFieldsData="fromAddAcceptanceTypeData"></mix-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="saveAcceptanceType()">保存</el-button>
        <el-button type="primary" @click="resetDialogAcceptanceType()">重置</el-button>
      </div>
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
import { setInterval, setTimeout } from 'timers'
export default {
  name: 'partBigTypeRepre',
  components: {
    chooseSupplier,
    paChoose,
    LookupValue,
    mixTable,
    mixForm
  },
  data() {
    return {
      activeName: 'timeNode',
      flag: 1, //控制按钮集的显示
      dialogLogisticsVisible: false,
      dialogTimeNodeVisible: false,
      dialogAcceptanceTypeVisible: false,
      flagTimeNode:1,
      flagAcceptanceType:1,
      // colsLogistics: [
      //   { label: '状态编码', codeField: 'carBrandCn' },
      //   { label: '状态名称', codeField: 'carSeriesCn' },
      //   { label: '状态', codeField: 'carTypeCn' },
      //   { label: '排序号', codeField: 'carTypeCn' },
      //   { label: '备注', codeField: 'carTypeCn' }
      // ],
      colsTimeNode: [
        { label: '节点编码', codeField: 'timeNodeCode' },
        { label: '节点名称', codeField: 'timeNodeName' },
        { label: '物流状态', codeField: 'wlStatus' },
        { label: '计算类型', codeField: 'isCalNextName' },
        { label: '用于仓库作业', codeField: 'isWorkTimeName' },
        { label: '时间节点类型', codeField: 'timeNodeTypeName' },
        { label: '适用范围', codeField: 'fitRangeName' },
        { label: '节点说明', codeField: 'nodeRemark' },
        { label: '排序号', codeField: 'orderNo' },
        { label: '状态', codeField: 'wlstatusName' },
        { label: '备注', codeField: 'remark' }
      ],
      colsTypeAcceptanceType: [
        { label: '类型编码', codeField: 'configType' },
        { label: '类型名称', codeField: 'configTypeNote' },
        { label: '时间节点', codeField: 'timeNodeCode' },
        { label: '排序号', codeField: 'orderNo' },
        { label: '状态', codeField: 'isEnable' },
        { label: '备注', codeField: 'remark' }
      ],
      // queryParamsLogistics: {
      //   APIUrl: paApis.paDbAttrTypeQueryList.APIUrl,
      //   InputType: paApis.paDbAttrTypeQueryList.InputType,
      //   ServiceCode: paApis.paDbAttrTypeQueryList.ServiceCode,
      //   dataInfo: {
      //     carBrandCode: '',
      //     carSeriesCode: '',
      //     carTypeCode: ''
      //   },
      //   apiQueryRow: [
      //     // 'carBrandCn',
      //     'carBrandCode',
      //     'carSeriesCn',
      //     'carSeriesCode',
      //     'carTypeCn',
      //     'carTypeCode'
      //   ]
      // },
      queryParamsTimeNodeTable: {
        APIUrl: paApis.paBuOemVisTimeCfigQueryFindAll.APIUrl,
        InputType: paApis.paBuOemVisTimeCfigQueryFindAll.InputType,
        ServiceCode: paApis.paBuOemVisTimeCfigQueryFindAll.ServiceCode,
        dataInfo: {},
        apiQueryRow: [
          'disableState',
          'fitRange',
          'isCalNext',
          'isCalNextName',
          'isEnable',
          'isWorkTime',
          'isWorkTimeName',
          'lastUpdatedDate',
          'modifier',
          'modifyName',
          'mycatOpTime',
          'needState',
          'nodeRemark',
          'oemCode',
          'oemId',
          'orderNo',
          'remark',
          'sdpOrgId',
          'sdpUserId',
          'timeConfigId',
          'timeNodeCode',
          'timeNodeName',
          'timeNodeType',
          'updateControlId',
          'wlStatus',
          'wlStatusName'
        ]
      },
      queryParamsAcceptanceType: {
        APIUrl: paApis.paBuOemVisTypeCfigQueryFindAll.APIUrl,
        InputType: paApis.paBuOemVisTypeCfigQueryFindAll.InputType,
        ServiceCode: paApis.paBuOemVisTypeCfigQueryFindAll.ServiceCode,
        dataInfo: {},
        apiQueryRow: [
          'configId',
          'configType',
          'configTypeNote',
          'isEnable',
          'isEnableName',
          'orderNo',
          'remark',
          'timeNodeCode',
          'updateControlId'
        ]
      },
      fromTimeQueryParams:{
        APIUrl: paApis.mdsLookupValueQuerySpecial.APIUrl,
        InputType: paApis.mdsLookupValueQuerySpecial.InputType,
        ServiceCode: paApis.mdsLookupValueQuerySpecial.ServiceCode,
        dataInfo: {},
        apiQueryRow: [
          'configId',
          'configType',
          'configTypeNote',
          'isEnable',
          'isEnableName',
          'orderNo',
          'remark',
          'timeNodeCode',
          'updateControlId'
        ]
      },
      // fromLogistics: [
      //   { label: '状态编码', codeField: 'statusCode', type: 'inputTxt' },
      //   { label: '状态名称', codeField: 'statusName', type: 'inputTxt' },
      //   {
      //     label: '状态',
      //     codeField: 'status',
      //     isShowLabel: true,
      //     lookuptype: 'DB0052',
      //     sendCode: () => null,
      //     focusCode: () => null,
      //     changeCode: val => {
      //       this.fromLogisticsData.status= val
      //     },
      //     isComponent: true,
      //     component: () => import('@/components/org/LookupValue')
      //   }
      // ],
      // fromLogisticsData: {
      //   statusCode: '',
      //   statusName: '',
      //   status: ''
      // },
      fromTimeNode: [
        { label: '节点编码', codeField: 'nodeCode', type: 'inputTxt' },
        { label: '节点名称', codeField: 'nodeName', type: 'inputTxt' },
        {
          label: '物流名称',
          codeField: 'logisticsName',
          isShowLabel: true,
          lookuptype: 'VE0016',
          changeCode: val => {
            this.fromTimeNodeData.logisticsName = val
          },
          sendCode: () => null,
          focusCode: () => null,
          isComponent: true,
          component: () => import('@/components/org/LookupValue')
        },
        {
          label: '用于仓库作业',
          codeField: 'task',
          isShowLabel: true,
          lookuptype: 'DB0064',
          sendCode: () => null,
          focusCode: () => null,
          changeCode: val => {
            this.fromTimeNodeData.task = val
          },
          isComponent: true,
          component: () => import('@/components/org/LookupValue')
        }
      ],
      fromTimeNodeData: {
        nodeCode: '',
        nodeName: '',
        logisticsName: '',
        task: ''
      },
      fromAcceptanceType: [
        { label: '类型编码', codeField: 'typeCode', type: 'inputTxt' },
        { label: '类型名称', codeField: 'typeName', type: 'inputTxt' },
        {
          label: '状态',
          codeField: 'status',
          isShowLabel: true,
          lookuptype: 'DB0052',
          sendCode: () => null,
          focusCode: () => null,
          changeCode: val => {
            this.fromAcceptanceTypeData.status = val
          },
          isComponent: true,
          component: () => import('@/components/org/LookupValue')
        }
      ],
      fromAcceptanceTypeData: {
        typeCode: '',
        typeName: '',
        status: ''
      },
      //新增form设置
      // fromAddLogistics: [
      //   {
      //     label: '状态编码',
      //     codeField: 'statusCode',
      //     type: 'inputTxt',
      //     rules: '请输入节点编码',
      //     span: 8
      //   },
      //   {
      //     label: '状态名称',
      //     codeField: 'statusName',
      //     type: 'inputTxt',
      //     span: 8
      //   },
      //   {
      //     label: '状态',
      //     span: 8,
      //     codeField: 'statusCode',
      //     isShowLabel: true,
      //     lookuptype: 'DB0052',
      //     sendCode: () => null,
      //     focusCode: () => null,
      //     changeCode: val => {
      //       this.fromAddLogisticsData.statusCode = val
      //     },
      //     isComponent: true,
      //     component: () => import('@/components/org/LookupValue')
      //   },
      //   { label: '排序号', codeField: 'sortNo', type: 'inputTxt', span: 8 },
      //   { label: '备注', codeField: 'remark', type: 'inputTxt', span: 8 }
      // ],
      // fromAddLogisticsData: {
      //   statusCode: '',
      //   statusName: '',
      //   status: '',
      //   sortNo: '',
      //   remark: ''
      // },
      fromAddTimeNode: [
        { label: '节点编码', codeField: 'nodeCode', type: 'inputTxt', span: 8 },
        { label: '节点名称', codeField: 'nodeName', type: 'inputTxt', span: 8 },
        {
          label: '物流状态',
          codeField: 'logisticsName',
          isShowLabel: true,
          lookuptype: 'PA0137',
          sendCode: () => null,
          focusCode: () => null,
          changeCode: val => {
            this.fromAddTimeNodeData.logisticsName = val
          },
          isComponent: true,
          component: () => import('@/components/org/LookupValue'),
          span: 8
        },
        {
          label: '用于仓库作业',
          codeField: 'task',
          isShowLabel: true,
          lookuptype: 'DB0064',
          sendCode: () => null,
          focusCode: () => null,
          changeCode: val => {
            this.fromAddTimeNodeData.task = val
          },
          isComponent: true,
          component: () => import('@/components/org/LookupValue'),
          span: 8
        },
        {
          label: '适用范围',
          codeField: 'around',
          isShowLabel: true,
          lookuptype: 'VE0016',
          sendCode: () => null,
          focusCode: () => null,
          changeCode: val => {
            this.fromAddTimeNodeData.around = val
          },
          isComponent: true,
          component: () => import('@/components/org/LookupValue'),
          span: 8
        },
        {
          label: '时间节点类型',
          codeField: 'timeNodeType',
          isShowLabel: true,
          lookuptype: 'VE0016',
          sendCode: () => null,
          focusCode: () => null,
          changeCode: val => {
            this.fromAddTimeNodeData.timeNodeType = val
          },
          isComponent: true,
          component: () => import('@/components/org/LookupValue'),
          span: 8
        },
        {
          label: '计算类型',
          codeField: 'computedType',
          isShowLabel: true,
          lookuptype: 'PA0140',
          sendCode: () => null,
          focusCode: () => null,
          changeCode: val => {
            this.fromAddTimeNodeData.computedType = val
          },
          isComponent: true,
          component: () => import('@/components/org/LookupValue'),
          span: 8
        },
        {
          label: '节点说明',
          codeField: 'nodeTrans',
          type: 'inputTxt',
          span: 8
        },
        { label: '排序号', codeField: 'sortNo', type: 'inputTxt', span: 8 },
        {
          label: '状态',
          codeField: 'status',
          isShowLabel: true,
          lookuptype: 'DB0052',
          sendCode: () => null,
          focusCode: () => null,
          changeCode: val => {
            this.fromAddTimeNodeData.status = val
          },
          isComponent: true,
          component: () => import('@/components/org/LookupValue'),
          span: 8
        },
        {
          label: '必填类型',
          codeField: 'required',
          isShowLabel: true,
          lookuptype: 'PA0138',
          sendCode: () => null,
          focusCode: () => null,
          changeCode: val => {
            this.fromAddTimeNodeData.required = val
          },
          isComponent: true,
          component: () => import('@/components/org/LookupValue'),
          span: 8
        },
        {
          label: '不必填类型',
          codeField: 'noRequired',
          isShowLabel: true,
          lookuptype: 'PA0138',
          sendCode: () => null,
          focusCode: () => null,
          changeCode: val => {
            this.fromAddTimeNodeData.noRequired = val
          },
          isComponent: true,
          component: () => import('@/components/org/LookupValue'),
          span: 8
        },
        { label: '备注', codeField: 'remark', type: 'inputTxt', span: 8 }
      ],
      fromAddTimeNodeData: {
        nodeCde: '',
        nodeName: '',
        logisticsName: '',
        task: '',
        around: '',
        timeNodeType: '',
        computedType: '',
        nodeTrans: '',
        sortNo: '',
        status: '',
        required: '',
        noRequired: '',
        remark: ''
      },
      fromAddAcceptanceType: [
        { label: '类型编码', codeField: 'typeCode', type: 'inputTxt', span: 8 },
        { label: '类型名称', codeField: 'typeName', type: 'inputTxt', span: 8 },
        {
          label: '状态',
          codeField: 'status',
          isShowLabel: true,
          lookuptype: 'DB0052',
          sendCode: () => null,
          focusCode: () => null,
          changeCode: val => {
            this.fromAddAcceptanceTypeData.status = val
          },
          isComponent: true,
          component: () => import('@/components/org/LookupValue'),
          span: 8
        },
        { label: '排序号', codeField: 'sortNo', type: 'inputTxt', span: 8 },
        { label: '备注', codeField: 'remark', type: 'inputTxt', span: 8 }
      ],
      fromAddAcceptanceTypeData: {
        typeCode: '',
        typeName: '',
        status: '',
        sortNo: '',
        remark: ''
      }
    }
  },
  mounted(){
 this.$refs.fromTimeNode.queryList()
  },
  methods: {
    fetchData(flag) {
      switch (flag) {
        // case 1:
        //   this.$refs.tableListLogistics.queryList()
        //   break
        case 2:
          this.queryParamsTimeNodeTable.dataInfo = {
            timeNodeCode: this.fromTimeNodeData.nodeCode,
            timeNodeName: this.fromTimeNodeData.nodeName,
            wlStatus: this.fromTimeNodeData.logisticsName,
            isWorkTime: this.fromTimeNodeData.task
          }
          this.$refs.tableListDataNode.queryList()
          break
        case 3:
          this.queryParamsAcceptanceType.dataInfo = {
            configType: this.fromAcceptanceTypeData.typeCode,
            configTypeNote: this.fromAcceptanceTypeData.typeName,
            isEnable: this.fromAcceptanceTypeData.status
          }
          this.$refs.tableListAcceptanceType.queryList()
          break
      }
    },
    handleClick(tab, event) {
      switch (tab.name) {
        // case 'logistics':
        //   this.flag = 1
        //   break
        case 'timeNode':
          this.flag = 1
          break
        case 'acceptanceType':
          this.flag = 2
          break
      }
    },
    // reviseLogistics(flag) {
    //   if (flag == 2 && this.$refs.tableListLogistics.currentRow.length == 0) {
    //     this.$message({
    //       message: '请选中一条记录',
    //       type: 'warning'
    //     })
    //     return false
    //   } else {
    //     this.dialogLogisticsVisible = true
    //   }
    //   this.dialogLogisticsVisible = true
    // },
    reviseTimeNode(flag) {
      if (flag == 2) {
        if (this.$refs.tableListDataNode.currentRow.length == 0) {
          this.$message({
            message: '请选中一条记录',
            type: 'warning'
          })
          return false
        } else {
          this.dialogTimeNodeVisible = true
          var currentRow = this.$refs.tableListDataNode.currentRow[0]
          this.fromAddTimeNodeData.nodeCode = currentRow.timeNodeCode
          this.fromAddTimeNodeData.nodeName = currentRow.timeNodeName
          this.fromAddTimeNodeData.logisticsName = currentRow.wlStatus
          this.fromAddTimeNodeData.task = currentRow.isWorkTime
          this.fromAddTimeNodeData.around = currentRow.fitRange
          this.fromAddTimeNodeData.computedType = currentRow.isCalNextName
          this.fromAddTimeNodeData.nodeTrans = currentRow.nodeRemark
          this.fromAddTimeNodeData.sortNo = currentRow.sortNo
          this.fromAddTimeNodeData.status = currentRow.isEnable
          this.fromAddTimeNodeData.required = currentRow.needState
          this.fromAddTimeNodeData.noRequired = currentRow.disableState
          this.fromAddTimeNodeData.remark = currentRow.remark
          this.fromAddTimeNodeData.timeNodeType = currentRow.timeNodeType
        }
      } else if (flag == 1) {
        this.dialogTimeNodeVisible = true
      }
      // this.fromAddTimeNodeData
    },
    reviseAcceptanceType(flag) {
      if (flag == 2) {
        if (this.$refs.tableListAcceptanceType.currentRow.length == 0) {
          this.$message({
            message: '请选中一条记录',
            type: 'warning'
          })
          return false
        } else {
          this.dialogAcceptanceTypeVisible = true
          let currentRow = this.$refs.tableListAcceptanceType.currentRow[0]
          this.fromAddAcceptanceTypeData.typeCode = currentRow.configType
          this.fromAddAcceptanceTypeData.typeName = currentRow.configTypeNote
          this.fromAddAcceptanceTypeData.status = currentRow.isEnable
          this.fromAddAcceptanceTypeData.sortNo = currentRow.orderNo
          this.fromAddAcceptanceTypeData.remark = currentRow.isEnable
        }
      } else if (flag == 1) {
        this.dialogAcceptanceTypeVisible = true
      }
    },
    // resetLogistics() {
    //   this.$refs.fromLogistics.resetFormdata()
    // },
    resetTimeNode() {
      this.$refs.fromTimeNode.resetFormdata()
    },
    resetAcceptanceType() {
      this.$refs.fromAcceptanceType.resetFormdata()
    },
    // saveLogistics() {
    //   var that = this
    //   let saveTypeData = {}
    //   let queryObj = {
    //     //保存需要传 type="mutation"
    //     type: 'mutation',
    //     // api配置
    //     apiConfig: paApis.partSourceType1Save,
    //     // 需要调用的API服务配置
    //     apiServices: [
    //       {
    //         //表格中台返回网格的字段
    //         apiQueryRow: []
    //       }
    //     ],
    //     //条件/实体参数（变量），根据typeParam中的定义配置
    //     variables: {
    //       //当前中台使用的名称有dataInfo、info，具体查看API文档
    //       dataInfo: saveTypeData
    //     }
    //   }
    //   //转换了中台请求格式数据
    //   var paramD = that.$getParams(queryObj)
    //   requestGraphQL(paramD).then(response => {
    //     if (response[paApis.partSourceType1Save.ServiceCode].result === '1') {
    //       this.$message({
    //         message: response.partSourceType1Save.data.rows[0].msg,
    //         type: 'success'
    //       })
    //     }
    //   })
    // },
    saveTimeNode() {
      var that = this
      let dynamicFieldsData = this.fromAddTimeNodeData
      let saveTypeData = {
        timeNodeCode: dynamicFieldsData.nodeCode,
        timeNodeName: dynamicFieldsData.nodeName,
        wlStatus: dynamicFieldsData.logisticsName,
        isWorkTime: dynamicFieldsData.task,
        fitRange: dynamicFieldsData.around,
        timeNodeType: dynamicFieldsData.timeNodeType,
        isCalNext: dynamicFieldsData.computedType,
        nodeRemark: dynamicFieldsData.nodeTrans,
        orderNo: Number(dynamicFieldsData.sortNo),
        isEnable: dynamicFieldsData.status,
        needState: dynamicFieldsData.required,
        disableState: dynamicFieldsData.noRequired,
        remark: dynamicFieldsData.remark
      }

      let queryObj = {
        //保存需要传 type="mutation"
        type: 'mutation',
        // api配置
        apiConfig: paApis.paBuOemVisTimeCfigMutationSave,
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
        if (response.result ==='1'
        ) {
          this.$message({
            message: response.data.paBuOemVisTimeCfigMutationSave.msg,
            type: 'success'
          })
        }
      })
    },
    saveAcceptanceType() {
      var that = this
      let saveTypeData = {
        configType:this.fromAddAcceptanceTypeData.typeCode,
        configTypeNote:this.fromAddAcceptanceTypeData.typeName,
        isEnable:this.fromAddAcceptanceTypeData.status,
        orderNo:this.fromAddAcceptanceTypeData.sortNo,
        remark:this.fromAddAcceptanceTypeData.remark,
      }
      let queryObj = {
        //保存需要传 type="mutation"
        type: 'mutation',
        // api配置
        apiConfig: paApis.paBuOemVisTypeCfigMutationSave,
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
        if (response[paApis.paBuOemVisTypeCfigMutationSave.ServiceCode].result === '1') {
          this.$message({
            message: response.paBuOemVisTypeCfigMutationSave.data.msg,
            type: 'success'
          })
        }
      })
    },
    //各个弹窗重置
    // resetDialogLogistics() {
    //   this.$refs.fromDialogLogistics.resetFormdata()
    // },
    resetDialogTimeNode() {
      this.$refs.fromDialogTimeNode.resetFormdata()
    },
    resetDialogAcceptanceType() {
      this.$refs.fromDialogAcceptanceType.resetFormdata()
    },
    closeDialogTimeNode(){
      this.resetDialogTimeNode()
    },
    closeDialogAddAcceptanceType(){
      this.resetDialogAcceptanceType()
    }
  }
}
</script>

