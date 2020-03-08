<!--
* description: 车辆限制查询
* author: linwm
* createdDate: 2019-08-06
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
  name:"veCarLimit",
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
      apiConfig: veApis.varCarLimitQry,
      // 动态组件-按钮
      tableButtons: [
        {compKey: 'btnKey1', type: 'primary', size: 'small', clickEvent: () => this.queryTable(1), text:this.$t('sys.button.query')},/*查询*/
        {compKey: 'btnKey2', type: '', size: 'small', clickEvent: () => this.reset(), text: this.$t('sys.button.reset')}/*重置*/,
        {compKey: 'btnKey3', type: '', size: 'small', clickEvent: () => this.exportExcel('车辆限制文件', '车辆限制列表', 100), text:  this.$t('sys.button.export')}/*导出*/
      ],
      // 动态组件-查询条件
      tableComponents: CacheConfig.cacheData[this.$route.path] && CacheConfig.cacheData[this.$route.path].tableComponents && CacheConfig.cacheData[this.$route.path].tableComponents.length > 0 ? CacheConfig.cacheData[this.$route.path].tableComponents : [
        // 显示组件
        {compKey: 'compKey1', labelName: this.$t('org.label.carBrand')/*品牌*/, codeField: 'carBrandCode', component: () => import('@/components/org/carBrand/carBrand'), type: 'dropdownList', isMust: true},
        {compKey: 'compKey2', labelName: this.$t('ve.label.vin')/*VIN码*/, codeField: 'vin', component: () => import('@/components/org/commonInput'), type: 'inputText', isMust: true},
        {compKey: 'compKey3', labelName: this.$t('org.label.carConfig')/*车型*/, codeField: 'carConfigId', component: () => import('@/components/org/carTypeConfig'), type: 'propus', isMust: true},
        {compKey: 'compKey4', labelName:  this.$t('org.label.carColor')/*车身颜色*/, codeField: 'carColorId', component: () => import('@/components/org/carColor'), type: 'propus', isMust: true},

       {compKey: 'compKey5', key: 'key1',labelName: this.$t('org.label.carIncolor')/*内饰色*/, codeField: 'carIncolorId', component: () => import('@/components/org/TrimPopupColor'), type: 'propus', isMust: false},
         // 触发弹窗组件（popups：为弹窗组件）
          {
          compKey: "compKey6",
          labelName:  this.$t('org.label.warnHome')/*仓库*/,
          codeField: "carStockHouseId",
          component: () =>
            import("@/components/ve/hostFatoryWareHouse/wareHouseInput"),
          type: "propus",
          isMust: false
        },
        {compKey: 'compKey7', key: 'key3',labelName:this.$t('org.label.limitId')/*限制状态*/, lookuptype: 'VE0213', codeField: 'limitId', component: () => import('@/components/org/LookupValue'), type: 'dropdownList', isMust: false},
        {compKey: 'compKey8', labelName:  this.$t('org.label.LimitReason')/*限制原因*/, lookuptype: 'VE0627', codeField: 'hostLimitReasonId', component: () => import('@/components/org/LookupValue'), type: 'dropdownList', isMust: false},
     // 模块名称（是否ET/PT车）
        {compKey: "compKey9", labelName:  this.$t('org.label.isEtPt')/*是否ET/PT车*/, codeField: "isEtPt", component: () => import("@/components/org/isEnable/isEnable"), type: "dropdownList",isMust: false },
        {compKey: 'compKey10', labelName: this.$t('org.label.quatityName')/*质量状态*/, lookuptype: 'VE0007', codeField: 'hostQualityState', component: () => import('@/components/org/LookupValue'), type: 'dropdownList', isMust: false},
        {compKey: 'compKey11', labelName:  this.$t('org.label.carHouseType')/*库存类型*/, lookuptype: 'VE0005', codeField: 'carHouseType', component: () => import('@/components/org/LookupValue'), type: 'dropdownList', isMust: false},
         {compKey: 'compKey12', labelName: this.$t('ve.label.moveStateName1')/*流转状态*/, lookuptype: 'VE0207', codeField: 'moveState', component: () => import('@/components/org/LookupValue'), type: 'dropdownList', isMust: false},
        // 日期控件
        {compKey: 'compKey13', labelName: this.$t('ve.label.inStockDateBegin')/*入库开始时间*/, codeField: 'inStockDateBegin', component: () => import('@/components/org/datePicker/datePicker'), type: 'datePicker', dateOptionsType: '1', isMust: false },
        {compKey: 'compKey14', labelName: this.$t('ve.label.inStockDateEnd')/*入库结束时间*/, codeField: 'inStockDateEnd', component: () => import('@/components/org/datePicker/datePicker'), type: 'datePicker', dateOptionsType: '1', isMust: false },
         {compKey: "compKey15", labelName: this.$t('ve.label.ifOnline')/*是否订单生产车型*/, codeField: "ifOnline", component: () => import("@/components/org/isEnable/isEnable"), type: "dropdownList",isMust: false },
         {compKey: "compKey16", labelName:this.$t('ve.label.isDisplay')/*库存是否显示*/, codeField: "isDisplay", component: () => import("@/components/org/isEnable/isEnable"), type: "dropdownList",isMust: false },
        {compKey: "compKey17",labelName: this.$t('ve.label.limitResonRemark')/*限制原因备注*/,codeField: "limitReson",component: () => import("@/components/org/commonInput"),type: "inputText",isMust: false},
      ],
      // 动态生成网格列
      tableCols: CacheConfig.cacheData[this.$route.path] && CacheConfig.cacheData[this.$route.path].tableCols && CacheConfig.cacheData[this.$route.path].tableCols.length > 0 ? CacheConfig.cacheData[this.$route.path].tableCols: [
        { prop: 'remark', label:this.$t('ve.label.limitResonRemark')/*限制原因备注*/, width: 200, align: 'center' },
        { prop: 'hostLimitState', label:this.$t('org.label.limitId')/*限制状态*/, width: 200, align: 'center' },
        { prop: 'limitId', label: '限制状态ID', width: 200, align: 'center', hidden: true },
        { prop: 'limitReason', label: this.$t('org.label.LimitReason')/*限制原因*/, width: 200, align: 'center' },
        { prop: 'hostLimitReasonId', label: '限制原因ID', width: 200, align: 'center' ,hidden: true},
        { prop: 'isDisplay', label: this.$t('ve.label.isDisplay')/*库存是否显示*/, width: 200, align: 'center' },
        { prop: 'carBrandCn', label: this.$t('org.label.carBrand')/*品牌*/, width: 200, align: 'center' },
        { prop: 'carSeriesCode', label: this.$t('org.label.carSerise')/*车系*/, width: 200, align: 'center' },
        { prop: 'carConfigCode', label: this.$t('org.label.carConfig')/*车型*/, width: 200, align: 'center' },
        { prop: 'carColorCode', label: this.$t('org.label.carColor')/*车身颜色*/, width: 200, align: 'center' },
        { prop: 'carIncolorCode', label: this.$t('org.label.carIncolor')/*内饰色*/, width: 200, align: 'center'},
        { prop: 'vin', label: this.$t('ve.label.vin')/*VIN码*/, width: 200, align: 'center' },
        { prop: 'engineNo', label:  this.$t('ve.label.engineNo')/*发动机号*/, width: null, align: 'center' },
        { prop: 'carHouseCode', label:this.$t('org.label.warnHome')/*仓库*/, width: 200, align: 'center' },
        { prop: 'carHouseTypeName', label: this.$t('org.label.carHouseType')/*库存类型*/, width: 200, align: 'center' },
        { prop: 'inStockDate', label: this.$t('ve.label.inStockDate')/*入库日期*/, width: 200, align: 'center' },
        { prop: 'firstPreInStockDate', label: this.$t('ve.label.preInStockDate2')/*预计入库日期*/, width: 200, align: 'center' },
        { prop: 'moveStateName', label: this.$t('ve.label.moveStateName1')/*流转状态*/, width: 200, align: 'center' },
        { prop: 'pdiLimit', label:this.$t('ve.label.pdiLimit')/*主机厂PDI限制*/, width: 200, align: 'center' },
        { prop: 'isWaterCarname', label: this.$t('ve.label.isWaterCarname')/*水浸车标识*/, width: 200, align: 'center' },
        { prop: 'quatityName', label: this.$t('org.label.quatityName')/*质量状态*/, width: 200, align: 'center' },
        { prop: 'isEtPt', label:  this.$t('org.label.isEtPt')/*是否ET/PT车*/, width: 200, align: 'center' },
        { prop: 'carId', label:  this.$t('org.label.carId')/*车籍ID*/, width: 200, align: 'center' },
        { prop: 'updateControlId', label: this.$t('org.label.updateControlId')/*并发控制*/, width: 0, align: 'center', hidden: true }
      ],
      //表单查询数据（查询条件）
      formField:{
        carBrandCode: '',
        vin: '',
        carConfigId: '',
        carColorId:'',
        carIncolorId:'',
        carStockHouseId:"",
        limitId:'',
        hostLimitReasonId:'',
        isEtPt:'',
        hostQualityState:'',
        carHouseType:"",
        moveState:'',
        inStockDateBegin:'',
        inStockDateEnd:'',
        ifOnline:'',
        isDisplay:'',
        limitReson:''
      }
    }
  }
}
</script>
