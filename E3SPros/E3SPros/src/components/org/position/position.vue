<!--
* description: 车型配置弹出框
* author: luojx
* createdDate: 2019-08-02
-->
<template>
  <section class="carTypeConfig">
    <el-dialog
      title="岗位选择"
      :visible.sync="curPopupsVisible"
      width="1000px"
      center
      @close="sendCode"
      :close-on-click-modal="false"
      :append-to-body="true"
    >
      <one-table-template ref="multipleTable"
        :dynamicButtons="tableButtons"
        :dynamicComponents="tableComponents"
        :dynamicApiConfig="apiConfig"
        :dynamicTableCols="tableCols"
        :dynamicFormFields="formField"
      />
    </el-dialog>
  </section>
</template>
<script>
import { oneTableWithViewTemplateMixins } from '@/components/mixins/oneTableWithViewTemplateMixins';
import { valueObjectMixins } from '@/components/mixins/valueObjectMixins';
import { orgApis } from '@/api/graphQLApiList/org'
import OneTableTemplate from '@/components/templates/popupsOneTable'
export default {
  // 组件混入对象：{data[listQuery] methods[queryTable]}
  mixins: [oneTableWithViewTemplateMixins, valueObjectMixins],
  components: {
    OneTableTemplate
  },
  data() {
    return {
      // 网格查询API配置对象
      apiConfig: orgApis.mdmOrgStationQueryFindAll,
      // 动态组件-按钮
      tableButtons: [
        {compKey: 'btnKey1', type: 'primary', size: 'small', clickEvent: () => this.queryTable(1), text: '查询'},
        {compKey: 'btnKey2', type: '', size: 'small', clickEvent: () => this.reset(), text: '重置'},
        {compKey: 'btnKey3', type: '', size: 'small', clickEvent: () => this.sendCode('stationId', 'stationName'), text: '确认'}
      ],
      // 动态组件-查询条件
      tableComponents: [
        // 显示组件
        {compKey: 'compKey3', labelName: '岗位名称', codeField: 'stationCode', component: () => import('@/components/org/commonInput'), type: 'inputText', isMust: true},
      ],
      // 动态生成网格列
      tableCols: [
        { prop: 'stationCode', label: '岗位编码', width: 300, align: 'center' },
        { prop: 'stationName', label: '岗位名称', width: 300, align: 'center' },
        { prop: 'deptName', label: '所属部门', width: 300, align: 'center' },
         { prop: 'stationId', label: '岗位ID', width: 80, align: 'center',hidden:true },

         { prop: 'updateControlId', label: '并发', width: 80, align: 'center',hidden:true }
      ],
      //表单查询数据（查询条件）
      formField:{
        stationName: [],
        stationCode: []
      }
    }
  }
};
</script>
