<!--
* description: 备件来源大类维护
* author: wangyaoyao
* createdDate: 2019-10-06
* logs:
-->
<template>
  <section>
    <div class="app-container app-container-table">
      <div class="filter-container filter-button" v-if="flag==1">
        <el-button type="primary" size="small" @click="fetchData()">查询</el-button>
        <el-button size="small" @click="saveSocuse()">保存</el-button>
        <el-button size="small">重置</el-button>
      </div>
      <div class="filter-container filter-button" v-if="flag==2">
        <el-button type="primary" size="small" @click="fetchDataType()">查询</el-button>
        <el-button size="small" @click="revise()">修改</el-button>
        <el-button size="small">新增</el-button>
        <el-button size="small">重置</el-button>
      </div>
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="备件来源" name="source">
          <div class="filter-container filter-params"></div>
          <mix-table ref="tableListSorce" :queryParams="queryParamsSorce" :dynamicTableCols="colsSorce" multipleSelect="selection" :isPaging=true :isDialog=false />
        </el-tab-pane>
        <el-tab-pane label="备件来源类别" name="type">
          <div class="filter-container filter-params"></div>
          <mix-table ref="tableListType" :queryParams="queryParamsType" :dynamicTableCols="colsType" :isPaging=true :isDialog=false />
        </el-tab-pane>
      </el-tabs>
      <el-dialog title="备件来源维护" :visible.sync="dialogReviseVisible" width='80%' :append-to-body=true :close-on-click-modal=false>
        <div class="filter-container filter-params">
          <el-form :model="maintenanceInfo" ref="ruleForm" class="demo-ruleForm" :inline-message="true">
            <el-row :gutter="10">
              <el-col v-for="(item, index) in elemInformation" :key="`elem${index}`" :span="8">
                <!-- <el-form-item :label="item.label" :prop="item.fieldName" :rules="item.rules">
                  <el-select v-if="(item.type === 'select' && item.fieldName !== 'sourceBigType')" placeholder="请选择" v-model="maintenanceInfo[item.fieldName]" @focus="item.focus" :multiple="item.multiple" clearable collapse-tags size="small">
                  <el-option v-for="(obj, i) in item.options" :key="`${item.lookupValueCode}_${i}`" :label="obj.lookupValueName" :value="obj.lookupValueCode">
                  </el-option>
                </el-select> -->
                <LookupValue :span="6" :isMul="false" :isShowLabel="true" :code="maintenanceInfo.sourceBigType" :lookuptype="lookuptypeStatus" labelName="来源大类" @changeCode="getLookupValueStatus" />

                <el-select v-if="(item.type === 'select' && item.fieldName === 'sourceBigType')" placeholder="请选择" v-model="maintenanceInfo[item.fieldName]" @focus="item.focus" :multiple="item.multiple" clearable collapse-tags size="small">
                  <el-option v-for="(obj, i) in item.options" :key="`${item.sourceBigType}_${i}`" :label="obj.sourceBigType" :value="obj.sourceBigType"></el-option>
                </el-select>
                <el-input v-else v-model="maintenanceInfo[item.fieldName]" @focus="item.focus" :readonly="(item.readonly || false)" :suffix-icon="item.suffixIcon" placeholder="请输入" size="small">
                </el-input>
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
        </div>
        <div slot="footer" class="dialog-footer">
          <el-button @click="saveType('maintenanceInfo')">保存</el-button>
          <el-button type="primary" @click="resetRevise()">重置</el-button>
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
export default {
  name: 'partBigTypeRepre',
  components: {
    chooseSupplier,
    paChoose,
    LookupValue,
    mixTable
  },
  data() {
    return {
      toggleParam: false,
      moreBtnIcon: 'el-icon-plus',
      activeName: 'source',
      flag: 1, //控制按钮集的显示
      dialogReviseVisible: false,
      lookuptypeStatus: 'PA0018',
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
          codeField: 'partSource',
          width: 120,
          align: 'center',
          isEdit: true,
          isComponent: true,
          comps: [
            {
              compKey: 'propKey2',
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
          focus: () => 0,
          rules: {
            required: true,
            message: '请选择状态',
            trigger: 'change'
          }
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
      }
    }
  },
  methods: {
    changeToggleParam() {
      this.toggleParam = !this.toggleParam
      if (this.toggleParam) {
        this.moreBtnIcon = 'el-icon-minus'
      } else {
        this.moreBtnIcon = 'el-icon-plus'
      }
    },
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
    revise() {
      // if(this.$refs.tableListSorce.$refs.multipleTable.selection.length==0){
      //   this.$message({ message: '请选择一条记录，然后再进行修改', type: 'warning' })
      //   return false
      // }
      this.dialogReviseVisible = true
    },
    saveType() {
      this.$refs.ruleForm.validate(valid => {
        if (valid) {
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetRevise() {
      this.$refs['ruleForm'].resetFields()
    }
  }
}
</script>

