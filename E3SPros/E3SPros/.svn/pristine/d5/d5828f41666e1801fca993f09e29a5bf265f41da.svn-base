<!--
* description: 备件来源大类维护
* author: wangyaoyao
* createdDate: 2019-10-06
* logs:
-->
<template>
  <section>
    <div class="app-container app-container-table">
      <!-- <div class="filter-container filter-button" v-if="flag==1"> -->
        <!-- <el-button type="primary" size="small" @click="fetchData()">查询</el-button>
        <el-button size="small" @click="saveSocuse()">保存</el-button>
        <el-button size="small" @click="resetSource()">重置</el-button> -->
      <!-- </div> -->
      <!-- <div class="filter-container filter-button" v-if="flag==2">
        <el-button type="primary" size="small" @click="fetchDataType()">查询</el-button>
        <el-button size="small" @click="revise(1)">修改</el-button>
        <el-button size="small" @click="revise(2)">新增</el-button>
        <el-button size="small" @click="resetType()">重置</el-button>
      </div> -->
      <el-tabs v-model="activeName" tab-position="right" @tab-click="handleClick">
        <el-tab-pane label="备件来源" name="source">
          <div class="filter-container filter-params">
            <mix-form ref="ruleFormMain" :dynamicFormFields="fromRuleFormMain" :dynamicFieldsData="ruleFormMain"></mix-form>
            <mix-button v-if="flag==1" name="searchBtns" :dynamicButtons="sourcebtns" :isShowMore=false></mix-button>
          </div>
          <mix-table ref="tableListSorce" :queryParams="queryParamsSorce" :dynamicTableCols="colsSorce" multipleSelect="selection" :isPaging=true :isDialog=false />
        </el-tab-pane>
        <el-tab-pane label="备件来源类别" name="type">
          <div class="filter-container filter-params">
            <mix-form ref="ruleFormType" :dynamicFormFields="fromRuleFormType" :dynamicFieldsData="ruleFormType"></mix-form>
            <mix-button v-if="flag==2" name="searchBtns" :dynamicButtons="typeBtns" :isShowMore=false></mix-button>

            <!-- <el-row :gutter="26">
              <el-col :span="22">
                <el-form :model="ruleFormType" ref="ruleFormType" class="demo-ruleForm">
                  <el-col :span="6">
                    <el-form-item label="来源代码" prop="sourceCode">
                      <el-input v-model="ruleFormType.sourceCode" size="small"></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :span="6">
                    <el-form-item label="来源名称" prop="sourceName">
                      <el-input v-model="ruleFormType.sourceName" size="small"></el-input>
                    </el-form-item>
                  </el-col>
                  <LookupValue :span="6" :isMul="false" :isShowLabel="true" :code="ruleFormType.status" :lookuptype="lookupPartStatus" labelName="状态" @changeCode="getLookupPartStatus" />
                </el-form>
              </el-col>
            </el-row> -->
          </div>
          <mix-table ref="tableListType" :queryParams="queryParamsType" :dynamicTableCols="colsType" :isPaging=true :isDialog=false />
        </el-tab-pane>
      </el-tabs>
      <el-dialog title="备件来源维护" :visible.sync="dialogReviseVisible" width='80%' :append-to-body=true :close-on-click-modal=false @close="closeDialog()">
        <div class="filter-container filter-params">
                      <!-- <mix-form ref="ruleForm" :dynamicFormFields="frommaintenanceInfo" :dynamicFieldsData="ruleFormType"></mix-form> -->

          <el-form :model="maintenanceInfo" ref="ruleForm" class="demo-ruleForm" :inline-message="true">
            <el-row :gutter="10">
              <el-col v-for="(item, index) in elemInformation" :key="`elem${index}`" :span="8">
                <el-form-item :label="item.label" :prop="item.fieldName" :rules="item.rules">
                  <el-select v-if="(item.type === 'select' && item.fieldName !== 'sourceBigType')" placeholder="请选择" v-model="maintenanceInfo[item.fieldName]" @focus="item.focus" :multiple="item.multiple" clearable collapse-tags size="small">
                    <el-option v-for="(obj, i) in item.options" :key="`${item.lookupValueCode}_${i}`" :label="obj.lookupValueName" :value="obj.lookupValueCode">
                    </el-option>
                  </el-select>
                  <el-input v-else v-model="maintenanceInfo[item.fieldName]" @focus="item.focus" :readonly="(item.readonly || false)" :suffix-icon="item.suffixIcon" placeholder="请输入" size="small">
                  </el-input>
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
        </div>
        <div slot="footer" class="dialog-footer">
          <el-button @click="saveType()">保存</el-button>
          <el-button type="primary" @click="resetRevise()">重置</el-button>
        </div>
      </el-dialog>
    </div>
    <paChoose :dialogFormVisible="dialogFormVisible" @changeCode="getParts"></paChoose>
    <supplierChoose :supplierChooseVisible="supplierChooseVisible" @changeCode="getSupplierChangeCode"></supplierChoose>
  </section>
</template>
<script>
import { paApis } from '@/api/graphQLApiList/pa'
import { requestGraphQL } from '@/api/commonRequest'
import supplierChoose from '@/components/pa/supplierChoose'
import paChoose from '@/components/pa/paChoose'
import LookupValue from '@/components/org/LookupValue'
import mixTable from '@/components/basicComponent/mixTable'
import mixForm from '@/components/basicComponent/mixForm'
import mixButton from '@/components/basicComponent/mixButton'

export default {
  name: 'partBigTypeRepre',
  components: {
    supplierChoose,
    paChoose,
    LookupValue,
    mixTable,
    mixForm,
    mixButton
  },
  data() {
    return {
      activeName: 'source',
      flag: 1, //控制按钮集的显示
      dialogReviseVisible: false,
      dialogFormVisible: false,
      supplierChooseVisible: false,
      lookupPartSource: 'PA0018',
      lookupPartStatus: 'PA0009',
      colsSorce: [
        { label: '备件品牌', codeField: '备件品牌' },
        { label: '备件号', codeField: '备件号' },
        { label: '备件名称', codeField: '备件名称' },
        { label: '供应商', codeField: '供应商' },
        { label: '供应商名称', codeField: '供应商名称' },
        { label: '备件类别', codeField: '备件类别' },
        { label: '备件来源大类', codeField: '备件来源大类' },
        { label: '备件状态', codeField: '备件状态' },
        {
          label: '备件来源',
          width: 120,
          align: 'center',
          isEdit: true,
          isComponent: true,
          comps: [
            {
            isMul: false,
            isShowLabel: false,
            lookuptype: 'VE0016',
            codeField: 'partSource',
            clickEvent: () => null,
            component: () => import('@/components/org/LookupValue')
          }
          ]
        }
      ],
      colsType: [
        { label: '来源代码', codeField: '来源代码' },
        { label: '来源名称', codeField: '来源名称' },
        { label: '来源大类', codeField: '来源大类' },
        { label: '状态', codeField: '状态' },
        { label: '备注', codeField: '备注' }
      ],
      queryParamsSorce: {
        APIUrl: paApis.partBigTypeRepreQuery.APIUrl,
        InputType: paApis.partBigTypeRepreQuery.InputType,
        ServiceCode: paApis.partBigTypeRepreQuery.ServiceCode,
        dataInfo: {
          carBrandCode: '',
          carSeriesCode: '',
          carTypeCode: ''
        },
        apiQueryRow: [
          '备件品牌',
          '备件号',
          '备件名称',
          '供应商',
          '供应商名称',
          '备件类别',
          '备件来源大类',
          '备件状态',
          '备件来源'
        ]
      },
      queryParamsType: {
        APIUrl: paApis.partSourceTypeQuery.APIUrl,
        InputType: paApis.partSourceTypeQuery.InputType,
        ServiceCode: paApis.partSourceTypeQuery.ServiceCode,
        dataInfo: {
          carBrandCode: '',
          carSeriesCode: '',
          carTypeCode: ''
        },
        apiQueryRow: ['来源代码', '来源名称', '来源大类', '状态', '备注']
      },
      elemInformation: [
        {
          label: '来源代码',
          fieldName: 'sourceCode',
          focus: () => 0,
          rules: {
            required: true,
            message: '请输入来源代码',
            trigger: 'change'
          }
        },
        {
          label: '来源名称',
          fieldName: 'sourceName',
          focus: () => 0,
          rules: {
            required: true,
            message: '请输入来源名称',
            trigger: 'change'
          }
        },
        {
          label: '来源大类',
          fieldName: 'sourceBigType',
          type: 'select',
          options: [],
          focus: () => 0,
          rules: {
            required: true,
            message: '请选择来源大类',
            trigger: 'change'
          }
        },
        {
          label: '状态',
          fieldName: 'status',
          type: 'select',
          options: [],
          focus: () => 0
          // rules: {
          //   required: true,
          //   message: '请选择状态',
          //   trigger: 'change'
          // }
        },
        { label: '备注', fieldName: 'remark', focus: () => 0 }
      ],
      //备件信息维护相关数据
      maintenanceInfo: {
        sourceCode: '',
        sourceName: '',
        sourceBigType: '',
        status: '',
        remark: ''
      },
      fromRuleFormMain: [
        {
          label: '备件号',
          codeField: 'partNo',
          type: 'inputTxt',
          span: 6,
          event: () => {
            this.dialogFormVisible = true
          },
          suffixIcon: 'el-icon-search'
        },
        {
          label: '备件名称',
          codeField: 'partName',
          type: 'inputTxt',
          span: 6
        },
        {
          label: '供应商编码',
          codeField: 'dlrCode',
          type: 'inputTxt',
          span: 6,
          event: () => {
            this.supplierChooseVisible = true
          },
          suffixIcon: 'el-icon-search'
        },
        {
          label: '备件来源',
          codeField: 'partSource',
          isShowLabel: true,
          span: 6,
          lookuptype: 'PA0018',
          sendCode: () => null,
          focusCode: () => null,
          changeCode: val => {
            this.ruleFormMain.partSource = val
          },
          isComponent: true,
          component: () => import('@/components/org/LookupValue')
        }
      ],
      ruleFormMain: {
        partNo: '',
        partName: '',
        dlrCode: '',
        partSource: ''
      },
      fromRuleFormType:[
         {
          label: '来源代码',
          codeField: 'sourceCode',
          type: 'inputTxt',
          span: 6
        },
        {
          label: '来源名称',
          codeField: 'sourceName',
          type: 'inputTxt',
          span: 6
        },
        {
          label: '字段名称',
          codeField: 'worldName',
          type: 'inputTxt',
          span: 6
        },
        {
          label: '状态',
          codeField: 'status',
          isShowLabel: true,
          span: 6,
          lookuptype: 'PA0009',
          sendCode: () => null,
          focusCode: () => null,
          changeCode: val => {
            this.ruleFormType.status = val
          },
          isComponent: true,
          component: () => import('@/components/org/LookupValue')
        },
        
      ],
      ruleFormType: {
        sourceCode: '',
        sourceName: '',
        status: ''
      },
      //button备件来源按钮
       sourcebtns: {
        left: [
          { name: 'export', label: '保存', event: 'saveSocuse' },
        ],
        right: [
          { name: 'search', label: '查询', event: 'fetchData' },
          { name: 'reset', label: '重置', event: 'resetSource' }
        ]
      },
      //button备件来源类别按钮
       typeBtns: {
        left: [
         
          { name: 'export', label: '修改', event: 'revise' },
          { name: 'export', label: '新增', event: 'revise' },
        ],
        right: [
          { name: 'search', label: '查询', event: 'fetchDataType' },
          { name: 'reset', label: '重置', event: 'resetType' }
        ]
      },
    }
  },
  methods: {
    fetchData() {
      this.$refs.tableListSorce.queryList()
    },
    fetchDataType() {
      this.$refs.tableListType.queryList()
    },
    handleClick(tab, event) {
      tab.name == 'source' ? (this.flag = 1) : (this.flag = 2)
    },
    saveSocuse() {
      var that = this
      if (this.$refs.tableListSorce.$refs.multipleTable.selection.length == 0) {
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
        if (this.$refs.tableListType.currentRow.length == 0) {
          this.$message({
            message: '请选择一条记录，然后再进行修改',
            type: 'warning'
          })
          return false
        } else {
          this.dialogReviseVisible = true
          this.maintenanceInfo = {
            sourceCode: this.$refs.tableListType.currentRow[0].来源代码,
            sourceName: this.$refs.tableListType.currentRow[0].来源名称,
            sourceBigType: this.$refs.tableListType.currentRow[0].来源大类,
            status: this.$refs.tableListType.currentRow[0].状态,
            remark: this.$refs.tableListType.currentRow[0].备注
          }
        }
      }
      this.dialogReviseVisible = true
    },
    closeDialog() {
      this.resetRevise()
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
    getParts(val) {
      this.dialogFormVisible = false
      this.ruleFormMain.partNo = val.name
      this.ruleFormMain.partName = val.partName
    },
    getLookupPartSource(val) {
      this.ruleFormMain.partSource = val
    },
    getLookupPartStatus(val) {
      this.ruleFormType.status = val
    },
    resetType() {
      this.ruleFormType = {
        sourceCode: '',
        sourceName: '',
        status: ''
      }
    },

    getSupplierChangeCode(val) {
      this.supplierChooseVisible = false
      if (val == '' || val == null) {
        this.ruleFormMain.dlrCode = ''
      } else {
        this.ruleFormMain.dlrCode = val.supplierShortName
      }
    },
    resetSource() {
      this.ruleFormMain = {
        partNo: '',
        partName: '',
        dlrCode: '',
        partSource: ''
      }
    }
  }
}
</script>

