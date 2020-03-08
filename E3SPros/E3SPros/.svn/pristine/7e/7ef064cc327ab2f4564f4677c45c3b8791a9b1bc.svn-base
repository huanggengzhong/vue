<!--
* description: 车型产品价格查询
* author: liudl
* createdDate: 2019-10-19
-->
<template>
  <div class="app-container app-container-table">
    <one-table-template
      ref="multipleTable"
      :dynamicButtons="tableButtons"
      :dynamicComponents="tableComponents"
      :dynamicApiConfig="apiConfig"
      :dynamicTableCols="tableCols"
      :dynamicFormFields="formField"
      :dynamicIsShowMoreBtn="true"
      :dynamicIsColumnDrop="true"
      :dynamicIsShowSelect="false"
    />
  </div>
</template>
<script>
import { oneTableWithViewTemplateMixins } from '@/components/mixins/oneTableWithViewTemplateMixins';
import { orgApis } from '@/api/graphQLApiList/org'
import OneTableTemplate from '@/components/templates/oneTable'
import { CacheConfig } from '@/cache/configCache/index'
export default {
  name:"vecarProductPriceQuery",
  // 组件混入对象：{data[listQuery] methods[queryTable]}
  mixins: [oneTableWithViewTemplateMixins],
  components: {
    OneTableTemplate
  },
  // 阻塞路由预加载网格中组件的数据
beforeRouteEnter(to, from, next) {CacheConfig.initData(to.path, function(){next()})},
  data() {
    return {
      // 网格查询API配置对象
      apiConfig: orgApis.mdmVeCarConfigPriceQueryListForPage,
      // 动态组件-按钮
      tableButtons: [
        {compKey: 'btnKey1', type: 'primary', size: 'small', clickEvent: () => this.queryTable(1), text: this.$t('sys.button.query')},/*查询*/
        {compKey: 'btnKey4', type: '', size: 'small', clickEvent: () => this.reset(), text:  this.$t('sys.button.reset')}/*重置*/,
        {compKey: 'btnKey5', type: '', size: 'small', clickEvent: () => this.exportExcel(), text:  this.$t('sys.button.export')}/*导出*/
      ],
      // 动态组件-查询条件
      tableComponents: CacheConfig.cacheData[this.$route.path] && CacheConfig.cacheData[this.$route.path].tableComponents.length > 0 ? CacheConfig.cacheData[this.$route.path].tableComponents : [
        // 显示组件
        {compKey: 'compKey1', labelName: this.$t('org.label.carBrand')/*品牌*/, codeField: 'carBrandCode', component: () => import('@/components/org/carBrand/carBrand'), type: 'dropdownList', isMust: true},
        {compKey: 'compKey3', labelName: this.$t('org.label.carSerise')/*车系*/, codeField: 'carSeriesId', parentFileds: 'carBrandCode', component: () => import('@/components/org/CarCode'), type: 'dropdownList', isMust: true},
        {compKey: 'compKey5', labelName: this.$t('org.label.carConfig')/*车型配置*/, codeField: 'carConfigId', component: () => import('@/components/org/carTypeConfig'), type: 'popups', isMust: true},
        {compKey: "compKey4", labelName: this.$t('org.label.priceValidBeginDate')/*价格有效日期开始*/, codeField: "validBeginDate",component: () => import("@/components/org/datePicker/datePicker"), type: "datePicker",isMust: true},
        {compKey: "compKey6", labelName: this.$t('org.label.priceValidEndDate')/*价格有效日期结束*/, codeField: "validEndDate",component: () => import("@/components/org/datePicker/datePicker"), type: "datePicker",isMust: false},
      ],
      // 动态生成网格列
      tableCols: CacheConfig.cacheData[this.$route.path]&& CacheConfig.cacheData[this.$route.path].tableCols.length > 0 ? CacheConfig.cacheData[this.$route.path].tableCols: [
        { prop: 'carBrandCn', label: this.$t('org.label.carBrandCn')/*品牌*/, width: 150, align: 'center'},
        { prop: 'carBrandCode', label: this.$t('org.label.carBrand')/*品牌ID*/, width: 160, align: 'center',hidden:true },
        { prop: 'carSeriesCn', label: this.$t('org.label.carSeriesCn')/*车系名称*/, width: 130, align: 'center'},
        { prop: 'carSeriesId', label: this.$t('org.label.carSeriesId')/*车系ID*/, width: 160, align: 'center',hidden:true},
        { prop: 'smallCarTypeCode', label: this.$t('org.label.smallCarTypeCode')/*车型编码*/, width: 150, align: 'center',hidden:true },
        { prop: 'carConfigCode', label: this.$t('org.label.carConfigCode')/*车型配置编码*/, width: 160, align: 'center' },
        { prop: 'carConfigId', label: this.$t('org.label.carConfigId')/*车型配置ID*/, width: 160, align: 'center',hidden:true},
        { prop: 'carConfigCn', label: this.$t('org.label.carConfigCn')/*用户配置名称*/, width: 160, align: 'center' },
        { prop: 'supplyStatusCn', label: this.$t('org.label.supplyStatusCn')/*供应状态*/, width: 140, align: 'center' },
        { prop: 'carSalePrice', label: this.$t('org.label.marketGuidancePrice')/*市场指导价*/, width: 150, align: 'center' },
        { prop: 'dlrPurPrice', label: this.$t('org.label.dlrPurchasePrcie')/*经销商采购价*/, width: 150, align: 'center' },
        { prop: 'priceValidBeginDate', label: this.$t('org.label.priceValidBeginDate')/*价格有效日期开始*/, width: 160, align: 'center' },
        { prop: 'priceValidEndDate', label: this.$t('org.label.priceValidEndDate')/*价格有效日期结束*/, width: 160, align: 'center' }
      ],
      //表单查询数据（查询条件）
      formField:{
        carBrandCode:'',
        oemCode:'',	
        groupCode:'',	
        carSeriesId:'',	
        carConfigId:'',
        validBeginDate:'',
        validEndDate:''	,
     
        },

    }
  },
  methods: {
 
  }
}
</script>
