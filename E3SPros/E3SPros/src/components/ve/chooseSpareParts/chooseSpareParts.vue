<!--
* description: 车型配置弹出框
* author: luojx
* createdDate: 2019-08-02
-->
<template>
  <section class="carTypeConfig">
    <el-dialog
      title="备件选择"
      :visible.sync="curPopupsVisible"
      width="1000px"
      center
      @close="sendCode"
      :close-on-click-modal="false"
      :append-to-body="true"
      ref="dialogMultipleTable"
    >
      <one-table-template ref="multipleTable"
        :dynamicButtons="tableButtons"
        :dynamicComponents="tableComponents"
        :dynamicApiConfig="apiConfig"
        :dynamicTableCols="tableCols"
        :dynamicFormFields="formField"
        :dynamicIsShowSelect="isMul"
        :key="popupsTableKey"
      />
    </el-dialog>
  </section>
</template>
<script>
import { oneTableWithViewTemplateMixins } from '@/components/mixins/oneTableWithViewTemplateMixins';
import { valueObjectMixins } from '@/components/mixins/valueObjectMixins';
import { orgApis } from '@/api/graphQLApiList/org'
import OneTableTemplate from '@/components/templates/popupsOneTable'
import { CacheConfig } from '@/cache/configCache/index'

export default {
  // 组件混入对象：{data[listQuery] methods[queryTable]}
  mixins: [oneTableWithViewTemplateMixins, valueObjectMixins],
  components: {
    OneTableTemplate
  },
  data() {
    return {
      // 弹窗页面标识
      popupsPageCode: '/components/org/carTypeConfig/carTypeConfig',
      // 网格查询API配置对象
      apiConfig: orgApis.mdmVeCarConfigQueryListForPage,
      // 动态组件-按钮
      tableButtons: [
        {compKey: 'btnKey1', type: 'primary', size: 'small', clickEvent: () => this.queryTable(1), text: this.$t('sys.button.query')},//查询
        {compKey: 'btnKey4', type: '', size: 'small', clickEvent: () => this.queryTable(1), text: this.$t('sys.content.gridChoose')},//选择
        {compKey: 'btnKey2', type: '', size: 'small', clickEvent: () => this.reset(), text:  this.$t('sys.button.reset')},//重置
      ],
      // 动态组件-查询条件
      tableComponents: [],
      // 静态组件-查询条件
      staticTableComponents: [
        {compKey: 'compKey1', labelName: '备件编码', codeField: 'carConfigCode', component: () => import('@/components/org/commonInput'), type: 'inputText', isMust: true},//'备件编码'
        {compKey: 'compKey2', labelName: '备件名称', codeField: 'carConfigCode', component: () => import('@/components/org/commonInput'), type: 'inputText', isMust: true},//'备件名称'
        {compKey: 'compKey3', labelName: '备件属性', lookuptype: 'PA0030', codeField: 'carStockHouseId', component: () => import('@/components/org/LookupValue'), type: 'dropdownList', isMust: true},
        {compKey: 'compKey4', labelName: '备件品牌', lookuptype: 'PA0008', codeField: 'carStockHouseId', component: () => import('@/components/org/LookupValue'), type: 'dropdownList', isMust: false},
      ],
      // 动态生成网格列
      tableCols: [],
      // 静态生成网格列
      staticTableCols: [
        { prop: 'carBrandCn', label: '备件编码', width: 115, align: 'center' },//备件编码
        { prop: 'carBrandCn', label: '备件名称', width: 115, align: 'center' },//备件名称
        { prop: 'carBrandCn', label: '零售价格', width: 115, align: 'center' },//零售价格
        { prop: 'carBrandCn', label: '库存数量', width: 115, align: 'center' },//库存数量
        { prop: 'carBrandCn', label: '可用数量', width: 115, align: 'center' },//可用数量
        { prop: 'carBrandCn', label: '销售包装含量', width: 115, align: 'center' },//销售包装含量
        { prop: 'carBrandCn', label: '采购包装含量', width: 115, align: 'center' },//采购包装含量
        { prop: 'carBrandCn', label: '备件属性', width: 115, align: 'center' },//备件属性
        { prop: 'carBrandCn', label: '备件类别', width: 115, align: 'center' },//备件类别
        { prop: 'carBrandCn', label: '备件品牌', width: 115, align: 'center' },//备件品牌
        { prop: 'carBrandCn', label: '备件车系', width: 115, align: 'center' },//备件车系
        { prop: 'carBrandCn', label: '备件车型', width: 115, align: 'center' },//备件车型
        { prop: 'carBrandCn', label: '订货开关', width: 115, align: 'center' },//订货开关
        { prop: 'carBrandCn', label: '备件状态', width: 115, align: 'center' },//备件状态
      ],
      //表单查询数据（查询条件）
      formField:{
        carBrandCode: '',
        carSeriesId: '',
        smallCarTypeId: '',
        carConfigCode: '',
        carConfigCn: '',
        motorType: '',
        carTypeShortCode: ''
      }
    }
  }
};
</script>
