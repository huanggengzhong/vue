<!--
* description: 工作日历
* author: yuxing
* createdDate: 2019-07-24
* l
-->
<template>
  <div class="app-container app-container-table accountManage">
    <div class="filter-container filter-button">
      <el-button type="primary"
                 size="small"
                 @click="fetchData()">查询</el-button>

      <el-button size="small">新建</el-button>
      <el-button size="small">重置</el-button>
    </div>

    <!-- 主界面内容 -->
    <div ref="conHeight"
         class="filter-container filter-params">
      <el-row :gutter="24">
        <el-col :span="22">
          <el-row>
            <LookupValue :span="6"
                         :code="queryParams.listQuery.warehouseName"
                         lookuptype="PA10010"
                         label-name="日历年份"
                         @changeCode="getBillType" />

            <el-col :span="6">
              <label>日历名称</label>
              <el-input v-model="queryParams.listQuery.warehouseCode"
                        placeholder="请选择"
                        size="small" />
            </el-col>
            <LookupValue :span="6"
                         :code="queryParams.listQuery.warehouseAddr"
                         lookuptype="PA10010"
                         label-name="日历年份"
                         @changeCode="getWarehouseAddr" />

          </el-row>
        </el-col>

      </el-row>
    </div>

    <mix-table ref="tableList"
               :query-params="queryParams"
               :dynamic-table-cols="cols"
               :is-show-select="false"
               :is-paging="true"
               :is-dialog="false" />

  </div>
</template>
<script>

import { paApis } from '@/api/graphQLApiList/pa'
import LookupValue from '@/components/org/LookupValue'
import { requestGraphQL } from '@/api/commonRequest'
import mixTable from '@/components/basicComponent/mixTable'
export default {
  name: 'Pabjckwh',
  components: {
    mixTable,
    LookupValue
  },
  data () {
    return {
      cols: [
        // {          label: '客户编码', codeField: 'inStoreCode', comps: { type: 'link', event: this.linkDialog }
        // },,
        { label: '操作', labelName: "查看", labelName: "编辑", comps: { type: 'button', event: this.linkDialog } },
        { label: '日历类型', codeField: 'workingCalendar' },
        { label: '日历名称', codeField: 'theCalendarName' },
        { label: '日历年份', codeField: 'calendarYear' },
        { label: '组织类型', codeField: 'patternOfOrganization' },
        { label: '组织数量', codeField: 'groupNumber' },
        { label: '工作天数', codeField: 'securitiesCompany' },
        { label: '放假天数', codeField: 'numberOfDays' },

      ],
      queryParams: {
        APIUrl: paApis.sparePartsWorkCalendarAll.APIUrl,
        InputType: paApis.sparePartsWorkCalendarAll.InputType,
        ServiceCode: paApis.sparePartsWorkCalendarAll.ServiceCode,
        listQuery: {
          warehouseCode: '',
          warehouseName: '',
          warehouseAddr: ''
        }
      },

    }
  },
  methods: {
    fetchData () {
      this.$refs.tableList.queryList()
    },
    calendarView (id, tableData) {
      this.$router.push({ path: '/pa/calendarEditor', query: { id: id, tableData: tableData } })
    },
    linkDialog (tableData) {
      console.log(tableData)
      this.$router.push({ path: '/pa/calendarEditor', query: { tableData: tableData } })
    },
    getBillType (val) {
      console.log(val)
      this.queryParams.listQuery.warehouseName = val
    },
    getWarehouseAddr (val) {
      this.queryParams.listQuery.warehouseAddr = val
    }
  }
}
</script>
<style scoped>
/*按钮列移动到面包屑重合位置*/
</style>
