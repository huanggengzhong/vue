<!--
* description: 车辆产品查询
* author:
* createdDate: 2019-07-31
-->
<template>
  <div class="app-container app-container-table">
    <one-table-template ref="multipleTable"
      :dynamicButtons="tableButtons"
      :dynamicComponents="tableComponents"
      :dynamicApiConfig="apiConfig"
      :dynamicTableCols="tableCols"
      :dynamicFormFields="formField"
      :dynamicIsShowSelect="false"
      :dynamicIsInitTable="false"
      :dynamicIsColumnDrop="true"
      :dynamicIsShowMoreBtn="false"
    />


  </div>
</template>
<script>
import { oneTableWithViewTemplateMixins } from '@/components/mixins/oneTableWithViewTemplateMixins';
import { veApis } from '@/api/graphQLApiList/ve'
import OneTableTemplate from '@/components/templates/oneTable'

import { CacheConfig } from '@/cache/configCache/index'
export default {
  name:"carProductQuery",
  // 组件混入对象
  mixins: [oneTableWithViewTemplateMixins],
  components: {
    OneTableTemplate,

  },// 阻塞路由预加载网格中组件的数据
beforeRouteEnter(to, from, next) {CacheConfig.initData(to.path, function(){next()})},

  data() {
    return {
      // 网格查询API配置对象
      apiConfig: veApis.car231231,
      // 动态组件-按钮
      tableButtons: [
        {compKey: 'btnKey1', type: 'primary', size: 'small', clickEvent: () => this.queryTable(1), text:this.$t('sys.button.query')},//查询
        {compKey: 'btnKey2', type: '', size: 'small', clickEvent: () => this.this.exportExcel(), text:this.$t('sys.button.export')},// '导出'
        {compKey: 'btnKey4', type: '', size: 'small', clickEvent: () => this.reset(), text:this.$t('sys.button.reset')},//重置
      ],
      // 动态组件-查询条件
      tableComponents: CacheConfig.cacheData[this.$route.path] && CacheConfig.cacheData[this.$route.path].tableComponents.length > 0 ? CacheConfig.cacheData[this.$route.path].tableComponents : [

         {compKey: 'compKey1', labelName: this.$t('org.label.carBrandCn'), codeField: 'carBrandCode', component: () => import('@/components/org/carBrand/carBrand'), isRequire: true, type: 'dropdownList', isMust: true},//品牌
        { compKey: "compKey2",
          labelName: this.$t('org.label.carSerise'),
          codeField: "carSeriseCode",
          component: () => import("@/components/org/CarCode"),
          type: "dropdownList",
          isMust: true},//车系
           { compKey: "compKey3",
           labelName: this.$t('org.label.carConfig'),/*车型配置*/
          codeField: "carConfigId",
          component: () => import("@/components/org/carTypeConfig"),
          type: "propus",
          isMust: true},//车型

        {compKey: 'compKey4', labelName: this.$t('org.label.supplyStatus'), lookuptype: 'VE0014', codeField: 'supplyStatus', component: () => import('@/components/org/LookupValue'), type: 'dropdownList', isMust: true},  // 供应状态（值列表）
      ],
      // 动态生成网格列
      tableCols: this.getCols(),



      //表单查询数据
      formField:{
        carBrandCode: '',
        carSeriseCode: '',
        carConfigId:'',
        supplyStatus:''
      }
    }
  },
  methods: {

    getCols() {
      var cols = [
        // { prop: 'controlBtn', label:this.$t('sys.content.operate'), codeField: 'controlBtn', width: 60, align: 'center', fixed: true, isComponent: true,
        //   comps:[{compKey: 'propKey0', align: 'center', labelName:this.$t('sys.button.edit'), codeField: 'editControlBtn', clickEvent: this.edit, component: () => import('@/components/org/linkButton')}]

        // }//操作
      ]
      if (CacheConfig.cacheData[this.$route.path] && CacheConfig.cacheData[this.$route.path].tableCols.length > 0) {
        cols = cols.concat(CacheConfig.cacheData[this.$route.path].tableCols)
      } else {
        cols = cols.concat([

       { prop: 'carBrandCn', label: this.$t('org.label.carBrandCn'), width: null, align: 'center' },//品牌名称
       { prop: 'carBrandCode', label: '品牌ID', width: null, align: 'center', hidden: true },
       { prop: 'carSeriesCn', label: this.$t('org.label.carSerise'), width: null, align: 'center'},//车系
        { prop: 'batchSeriesId', label: '车系ID', width: null, align: 'center', hidden: true },

        {prop: "carTypeName", label: this.$t('org.label.carTypeName'),width: null,align: "center"}, // 车型名称

        {
          prop: "carTypeCode",
          label: this.$t('org.label.carTypeCode'),
          width: 150,
          align: "center"
        }, // 车型编码
        //
        // {
        //   prop: "carConfigCn",
        //   label: this.$t('org.label.carConfigCn'),
        //   width: 150,
        //   align: "center"
        // }, // 车型配置名称

        {
          prop: "carConfigCode",
          label: this.$t('org.label.carConfigCode'),
          width: null,
          align: "center"
        }, // 车型配置编码
         { prop: 'powerType', label:this.$t('org.label.powerType'), width: null, align: 'center' },//动力类型
        { prop: 'supplyStatus', label:this.$t('org.label.supplyStatus'), width: null, align: 'center'},//供应状态
        { prop: 'marketPrice', label: this.$t('ve.label.marketPrice'), width: null, align: 'center' },//市场指导价
         { prop: 'sellingPrice', label: this.$t('ve.label.sellingPrice'), width: null, align: 'center' },//销售价格

        // { prop: 'roleDesc', label: '角色描述', width: null, align: 'center', hidden: true },


            ])
      }
      return cols
    }
  }
}
</script>
