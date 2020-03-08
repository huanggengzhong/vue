<!--
* description: 库存明细查询
* author: linsy
* createdDate: 2019-08-08
-->
<template>
  <div class="app-container app-container-table">
    <one-table-template ref="multipleTable"
      :dynamicButtons="tableButtons"
      :dynamicComponents="tableComponents"
      :dynamicApiConfig="apiConfig"
      :dynamicTableCols="tableCols"
      :dynamicFormFields="formField"
    />
  </div>
</template>
<script>
import { oneTableWithViewTemplateMixins } from '@/components/mixins/oneTableWithViewTemplateMixins';
import { veApis } from '@/api/graphQLApiList/ve'
import OneTableTemplate from '@/components/templates/oneTable'
import { CacheConfig } from '@/cache/configCache/index'
export default {
  name:"veStockStaticQry",
  // 组件混入对象：{data[listQuery] methods[queryTable]}
  mixins: [oneTableWithViewTemplateMixins],
  components: {
    OneTableTemplate
  },
  // 阻塞路由预加载网格中组件的数据
 beforeRouteEnter(to, from, next) {
  CacheConfig.initData(to.path, function(){next()})
 },
  data() {
    return {
      // 网格查询API配置对象
      apiConfig: veApis.varStockStaticQry,
      // 动态组件-按钮
      tableButtons: [
        {compKey: 'btnKey1', type: 'primary', size: 'small', clickEvent: () => this.queryTable(1), text: this.$t('sys.button.query')},/*查询*/
        {compKey: 'btnKey3', type: '', size: 'small', clickEvent: () => this.reset(), text: this.$t('sys.button.reset')}/*重置*/,
        {compKey: 'btnKey4', type: '', size: 'small', clickEvent: () => this.exportExcel(), text: this.$t('sys.button.export')}/*导出*/
      ],
      // 动态组件-查询条件
     tableComponents: CacheConfig.cacheData[this.$route.path] && CacheConfig.cacheData[this.$route.path].tableComponents && CacheConfig.cacheData[this.$route.path].tableComponents.length > 0 ? CacheConfig.cacheData[this.$route.path].tableComponents : [
        // 显示组件
        {compKey: 'compKey1', labelName: this.$t('org.label.carBrandCn')/*品牌*/,    codeField: 'carBrandCode', component: () => import('@/components/org/carBrand/carBrand'), type: 'dropdownList', isMust: true},
        {compKey: 'compKey2', labelName: this.$t('ve.label.vin')/*VIN码*/,   codeField: 'vin', component: () => import('@/components/org/commonInput'), type: 'inputText', isMust: true},
        {compKey: 'compKey3', labelName: this.$t('org.label.carConfig')/*车型*/,    codeField: 'carConfigId', component: () => import('@/components/org/carTypeConfig'), type: 'propus', isMust: true},
        {compKey: 'compKey4', labelName: this.$t('org.label.carColor')/*车身颜色*/, codeField: 'carColorId', component: () => import('@/components/org/carColor'), type: 'propus', isMust: true},
        {compKey: 'compKey5', labelName: this.$t('org.label.carIncolor')/*内饰色*/,  codeField: 'carIncolorId', component: () => import('@/components/org/TrimPopupColor'), type: 'propus', isMust: false},
        {compKey: 'compKey6', labelName: this.$t('org.label.warnHome')/*仓库*/,     lookuptype: 'VE0079', codeField: 'carStockHouseId', component: () => import('@/components/org/LookupValue'), type: 'dropdownList', isMust: false},
        {compKey: 'compKey7', labelName: this.$t('org.label.carHouseType')/*库存类型*/, lookuptype: 'VE0079', codeField: 'carHouseType', component: () => import('@/components/org/LookupValue'), type: 'dropdownList', isMust: false},
        {compKey: 'compKey8', labelName: this.$t('org.label.offlineTime')/*下线时间*/, codeField: 'offLineDateBegin', component: () => import('@/components/org/datePicker/datePicker'), type: 'datePicker', dateOptionsType: '0', isMust: false },
      ],
      // 动态生成网格列
      tableCols: CacheConfig.cacheData[this.$route.path] && CacheConfig.cacheData[this.$route.path].tableCols && CacheConfig.cacheData[this.$route.path].tableCols.length > 0 ? CacheConfig.cacheData[this.$route.path].tableCols : [
        { prop: 'carBrandCode', label: this.$t('org.label.carBrand')/*品牌*/, width: 150, align: 'center' },
        { prop: 'carSeriesCode', label: this.$t('org.label.carSerise')/*车系*/, width: null, align: 'center' },
        { prop: 'carConfigCode', label: this.$t('org.label.carConfig')/*车型配置*/, width: 150, align: 'center' },
        { prop: 'carConfigId', label: this.$t('org.label.carConfig')/*车型配置ID*/, width: null, align: 'center',hidden:true },
        { prop: 'carColorName', label: this.$t('org.label.carColor')/*车身颜色*/, width: 150, align: 'center' },
        { prop: 'carColorId', label: this.$t('org.label.carColor')/*车身颜色ID*/, width: null, align: 'center',hidden:true  },
        { prop: 'carIncolorCode', label: this.$t('org.label.carIncolor')/*内饰色*/, width: 150, align: 'center' },
        { prop: 'carIncolorId', label: this.$t('org.label.carIncolor')/*内饰色ID*/, width: null, align: 'center',hidden:true},
        { prop: 'vin', label: this.$t('ve.label.vin')/*VIN码*/, width: 200, align: 'center' },
        { prop: 'engineNo', label: this.$t('ve.label.engineNo')/*发动机号*/, width: null, align: 'center' },
        { prop: 'carHouseType', label: this.$t('org.label.carHouseType')/*库存类型*/, width: null, align: 'center' },
        { prop: 'offLineDate', label: this.$t('org.label.offlineTime')/*下线时间*/, width: 120, align: 'center' },
        { prop: 'preInStockDate', label: this.$t('ve.label.preInStockDate2')/*预计入库日期*/ , width: 120, align: 'center' },
        { prop: 'carStockHouseId', label: this.$t('ve.label.carStockHouseName')/*所属仓库ID*/, width: null, align: 'center'},
        { prop: 'carStockHouseName', label:this.$t('ve.label.carStockHouseName')/*所属仓库*/ , width: null, align: 'center',hidden:true },
        { prop: 'moveStateName', label: this.$t('ve.label.moveStateName1')/*流转状态*/, width: null, align: 'center' },
        { prop: 'moveState', label: this.$t('ve.label.moveStateName1')/*流转状态编码*/, width: null, align: 'center',hidden:true},
        { prop: 'tranInStockDate', label: this.$t('ve.label.tranInStockDate')/*转入仓库时间*/, width: 150, align: 'center' },
        { prop: 'quatityName', label:this.$t('org.label.quatityName')/*质量状态*/ , width: null, align: 'center' },
        { prop: 'quatityCode', label: this.$t('org.label.quatityCode')/*质量状态编码*/, width: 150, align: 'center' },
        { prop: 'hostLimitName', label: this.$t('ve.label.hostLimitName')/*主机厂限制状态*/, width: 150, align: 'center' },
        { prop: 'WLLimitName', label: this.$t('ve.label.WLLimitName')/*物流限制*/, width: null, align: 'center' },
        { prop: 'pdiName', label: this.$t('ve.label.pdiName')/*PDI限制*/, width: null, align: 'center' },
        { prop: 'overStoreLimitName', label:this.$t('ve.label.overStoreLimitName')/*超库存限制*/ , width: 150, align: 'center' },
        { prop: 'shiftOutStockLimitName', label: this.$t('ve.label.shiftOutStockLimitName')/*转库限制*/, width: null, align: 'center' },
        { prop: 'leaseLimitName', label: this.$t('ve.label.leaseLimitName')/*租借限制*/, width: null, align: 'center' },
        { prop: 'etptName', label: this.$t('ve.label.etptName')/*ET/PT车*/, width: null, align: 'center' },
        { prop: 'assignCode', label: this.$t('ve.label.assignCode')/*分配号*/, width: null, align: 'center' },

      ],
      //表单查询数据（查询条件）
      formField:{
        carBrandCode:'',
        vin:'',
        carConfigId:'',
        carColorId:'',
        carIncolorId:'',
        carStockHouseId:'',
        carHouseType:'',
        offLineDateBegin:'',
        showModel:''
      }
    }
  },
  methods: {

  }
}
</script>
