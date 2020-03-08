<!--
* description: 车型配置弹出框
* author: luojx
* createdDate: 2019-08-02
-->
<template>
  <section class="carTypeConfig">
    <el-dialog
      :title="$t('org.label.carConfig')"
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
        {compKey: 'btnKey2', type: '', size: 'small', clickEvent: () => this.reset(), text:  this.$t('sys.button.reset')},//重置
        {compKey: 'btnKey3', type: '', size: 'small', clickEvent: () => this.sendCode('carConfigId', 'carConfigCode'), text:this.$t('sys.button.confirm')},//确认
      ],
      // 动态组件-查询条件
      tableComponents: [],
      // 静态组件-查询条件
      staticTableComponents: [
        // 显示组件
        {compKey: 'compKey1', labelName: this.$t('org.label.carBrandCn'), codeField: 'carBrandCode', component: () => import('@/components/org/carBrand/carBrand'), type: 'dropdownList', isMust: true},//品牌
        {compKey: 'compKey2', labelName: this.$t('org.label.carSerise'), codeField: 'carSeriesId', parentFileds: 'carBrandCode', component: () => import('@/components/org/CarCode'), type: 'dropdownList', isMust: true},//车系
        {compKey: 'compKey3', labelName: this.$t('org.label.carType'), codeField: 'smallCarTypeId', parentFileds: 'carBrandCode|carSeriesId', component: () => import('@/components/org/SmallCarType'), type: 'dropdownList', isMust: true}, //车型(车型小类)
        // 隐藏组件
        {compKey: 'compKey5', labelName: this.$t('org.label.carConfig'), codeField: 'carConfigCode', component: () => import('@/components/org/commonInput'), type: 'inputText', isMust: false},//'车型配置'
        {compKey: 'compKey4', labelName: this.$t('org.label.carConfigCn'), codeField: 'carConfigCn', component: () => import('@/components/org/commonInput'), type: 'inputText', isMust: false},//车型配置中文名称
        {compKey: 'compKey6', labelName: this.$t('org.label.motorType'), lookuptype: 'VE0624', codeField: 'motorType', component: () => import('@/components/org/LookupValue'), type: 'dropdownList', isMust: false},//电机类型   VE0624
        {compKey: 'compKey7', labelName: this.$t('org.label.carTypeCode1'), codeField: 'carTypeShortCode', component: () => import('@/components/org/commonInput'), type: 'inputText', isMust: false},//车型简码
      ],
      // 动态生成网格列
      tableCols: [],
      // 静态生成网格列
      staticTableCols: [
        { prop: 'carBrandCn', label: this.$t('org.label.carBrandCn'), width: 115, align: 'center' },//品牌
        { prop: 'mdmVeCarSeriesExtend.carSeriesCn', label:  this.$t('org.label.carSerise'), width: 80, align: 'center' },//'车系'
        { prop: 'mdmSmallCarTypeExtend.smallCarTypeCode', label: this.$t('org.label.carType'), width: 0, align: 'center' },//车型
        { prop: 'mdmSmallCarTypeExtend.smallCarTypeCn', label:this.$t('org.label.carTypeName') , width: 0, align: 'center' },//车型名称
        { prop: 'mdmSmallCarTypeExtend.smallCarTypeId', label: '车型Id', width: 0, align: 'center', hidden: true },
        { prop: 'carConfigId', label: '车型配置Id', width: 0, align: 'center', hidden: true },
        { prop: 'carConfigCode', label: this.$t('org.label.carConfig'), width: 0, align: 'center' }, //车型配置
        { prop: 'carConfigCn', label: this.$t('org.label.carConfigCn'), width: 0, align: 'center'}/*车型配置中文名称*/
        // { prop: 'purState', label: '排量', width: 80, align: 'center' }
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
      },
      handleTableRowData: {
        value: 'carConfigId',
        text: 'carConfigCode'
      }
    }
  }
};
</script>
