<!--
* description: 工作日历
* author: chchhui
* createdDate: 2019-07-24
* l
-->
<template>
  <div class="app-container app-container-table accountManage">
    <div v-show="iss"
         class="filter-container filter-button">
      <el-button type="primary"
                 size="small"
                 @click="fetchData()">增加组织</el-button>
      <el-button size="small"
                 @click="delData()">删除组织
      </el-button>
      <el-button size="small">保存</el-button>
      <el-button size="small">重置</el-button>
    </div>

    <!-- 主界面内容 -->
    <div ref="conHeight"
         class="filter-container filter-params">
      <el-row :gutter="24">
        <el-col :span="22">
          <el-row>
            <mix-form ref="list"
                      :dynamic-form-fields="dynamicFormFields"
                      :dynamicFieldsData="dynamicFieldsData"
                      :is-paging="true"
                      :is-dialog="false" />
          </el-row>
        </el-col>
      </el-row>
    </div>
    <div>
      <el-col :span="16">
        <div>
          <p>1</p>
          <span></span>
          <p></p>
        </div>
      </el-col>
      <el-col :span="8">

        <mix-table ref="tableList"
                   :query-params="queryParams"
                   :dynamic-table-cols="cols"
                   multipleSelect='selection'
                   :is-show-select="false"
                   :is-paging="true"
                   :is-dialog="false" />

      </el-col>
    </div>

  </div>
</template>
<script>
import LookupValue from '@/components/org/LookupValue'
import { paApis } from '@/api/graphQLApiList/pa'
import mixForm from '@/components/basicComponent/mixForm'
import mixTable from '@/components/basicComponent/mixTable'
export default {
  name: 'Pabjckwh',
  components: {
    mixForm,
    mixTable
  },
  data () {
    return {

      month: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
      sky: ["日", "一", "二", "三", "四", "五", "六"],
      iss: "",
      dynamicFormFields: [
        {
          label: ' 日历类型',
          codeField: 'workingCalendar',
          isShowLabel: true,
          lookuptype: 'PA0043',
          span: 6,
          sendCode: () => null,
          focusCode: () => null,
          changeCode: val => {
            this.dynamicFormFields.flitType = val
          },
          isComponent: true,
          component: () => import('@/components/org/LookupValue')
        },
        {
          label: '日历名称',
          codeField: 'theCalendarName',
          type: 'inputTxt',
          span: 6,
        },
        {
          label: '日历年份',
          codeField: 'warehouseAddr',
          isShowLabel: true,
          lookuptype: 'PA0043',
          span: 6,
          sendCode: () => null,
          focusCode: () => null,
          changeCode: val => {
            this.dynamicFormFields.warehouseAddr = val
          },
          isComponent: true,
          component: () => import('@/components/org/LookupValue')
        },
        {
          label: '组织类型',
          codeField: 'patternOfOrganization',
          isShowLabel: true,
          lookuptype: 'PA0043',
          span: 6,
          sendCode: () => null,
          focusCode: () => null,
          changeCode: val => {
            this.dynamicFormFields.patternOfOrganization = val
          },
          isComponent: true,
          component: () => import('@/components/org/LookupValue')
        }
      ],
      dynamicFieldsData: {
        workingCalendar: "",
        theCalendarName: '',
        theCalendarName: '',
        patternOfOrganization: ''
      },
      Arr: []
      ,
      cols: [
        { label: '选择+', codeField: 'inStoreCode' },
        { label: '组织编码', codeField: 'abbreviation' },
        { label: '组织名称', codeField: 'category' },
      ],
      queryParams: {
        APIUrl: paApis.SparePartsCustomerMaintenance.APIUrl,
        InputType: paApis.SparePartsCustomerMaintenance.InputType,
        ServiceCode: paApis.SparePartsCustomerMaintenance.ServiceCode,
        dataInfo: {
          inCode: '',
          billType: '',
          inStoreCode: ''
        },
        apiQueryRow: [
          'inStoreCode',
          'abbreviation',
          'category',
        ]
      }
    }
  },

  watch: {
    $route () {
      this.luyou()
    }

  },
  mounted () {
    // this.wearHouseQuery()
    this.$refs.tableList.queryList()
    // this.$refs.tableList.handleTableRowChange()
    for (let i = 1; i <= 12; i++) {
      var d = new Date(2019, i, 0);
      var c = d.getDate()
      for (let t = 1; t <= c; t++) {
        this.Arr.push(t)
      }
    }
    console.log(this.Arr)
  },

  methods: {
    fetchData () {
      console.log(this.listQuery)
      this.wearHouseQuery()
    },
    delData () {
      console.log(this.$refs.tableList.currentRow)

    },
    luyou () {
      if (this.$route.query.id === 1) {
        this.iss = false
      } else {
        this.iss = true
      }
    }
  }
}
</script>
<style scoped>
/*按钮列移动到面包屑重合位置*/
.asdasdasd {
  text-align: center;
}
</style>
