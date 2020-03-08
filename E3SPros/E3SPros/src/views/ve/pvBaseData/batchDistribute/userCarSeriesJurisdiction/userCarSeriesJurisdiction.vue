<!--
* description: 用户车系权限设置
* author: linsy
* createdDate: 2019-08-12
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
      :dynamicIsShowMoreBtn="false"
    />
     <edit
      :dynamicEditRowData="editRowData"
      :popupsVisible="editPopupsVisible"
      :key="editPopupsKey"
      :popupsState="editPopupsState"
      @close="close"
    ></edit>
  </div>
</template>
<script>
import { oneTableWithViewTemplateMixins } from '@/components/mixins/oneTableWithViewTemplateMixins';
import { veApis } from '@/api/graphQLApiList/ve'
import OneTableTemplate from '@/components/templates/oneTable'
import Edit from './edit'
import { CacheConfig } from '@/cache/configCache/index'
export default {
  name:"userCarSeriesJurisdiction",
  // 组件混入对象：{data[listQuery] methods[queryTable]}
  mixins: [oneTableWithViewTemplateMixins],
  components: {
    OneTableTemplate,Edit
  },
  // 阻塞路由预加载网格中组件的数据
beforeRouteEnter(to, from, next) {CacheConfig.initData(to.path, function(){next()})},
  data() {
    return {
      // 网格查询API配置对象
      apiConfig: veApis.veUserSeriesQueryFindAll,
      // 动态组件-按钮
      tableButtons: [
        {compKey: 'btnKey1', type: 'primary', size: 'small', clickEvent: () => this.queryTable(1), text: this.$t('sys.button.query')},/*查询*/
        {compKey: 'btnKey2', type: '', size: 'small', clickEvent: () => this.add(), text: this.$t('sys.button.add')},/*新增*/
        {compKey: 'btnKey3', type: '', size: 'small', clickEvent: () => this.reset(), text: this.$t('sys.button.reset')}/*重置*/
      ],
      // 动态组件-查询条件
      tableComponents: CacheConfig.cacheData[this.$route.path] && CacheConfig.cacheData[this.$route.path].tableComponents.length > 0 ? CacheConfig.cacheData[this.$route.path].tableComponents : [
        // 显示组件
        {compKey: 'compKey1', labelName: this.$t('org.label.carBrand'), codeField: 'carBrandCode', component: () => import('@/components/org/carBrand/carBrand'), type: 'dropdownList', isMust: true},/*品牌名称*/
        {compKey: 'compKey2', labelName: this.$t('org.label.UserName'), codeField: 'userId',textField: 'userName', component: () => import('@/components/org/userSelect'),parentFileds: "carBrandCode", type: 'propus', isMust: true},/*用户名称*/
        {compKey: 'compKey3', labelName: this.$t('org.label.carSerise'), codeField: 'seriesId', component: () => import('@/components/org/CarCode'), parentFileds: "carBrandCode", type: 'dropdownList', isMust: true},/*车系*/
        {compKey: 'compKey11', labelName: this.$t('ve.label.functionName'), lookuptype: 'VE0336', codeField: 'funCode', component: () => import('@/components/org/LookupValue'), type: 'dropdownList', isMust: true},/*功能名称*/
      ],
      // 动态生成网格列
      tableCols: this.getCols(),
      //表单查询数据（查询条件）
      formField:{
        carBrandCode:'',
        userId:'',
        funCode:'',
        seriesId:'',
        // CarBrandID:'',
        // userID:'',
        // baseCarSeries:'',
        // seriesId:'',
        // empId:'',
        // userName:''
        // funNameID:''
      }
    }
  },
  methods: {
 getCols() {
      var cols = [
        /*操作*/
          { prop: 'controlBtn', label: this.$t('sys.content.operate'), codeField: 'controlBtn', width: 120, align: 'center', isComponent: true,
          comps: [
        /*编辑*/
            {compKey: 'propKey0', labelName: this.$t('sys.button.edit'), codeField: 'editControlBtn', clickEvent: this.edit, component: () => import('@/components/org/linkButton')}
          ]
        }
      ]
      if (CacheConfig.cacheData[this.$route.path] && CacheConfig.cacheData[this.$route.path].tableCols.length > 0) {
        cols = cols.concat(CacheConfig.cacheData[this.$route.path].tableCols)
      } else {
        cols = cols.concat([
        /*品牌名称*/
        { prop: 'carBrandCn', label: this.$t('org.label.carBrand'), width: 200, align: 'center'},
        { prop: 'carBrandCode', label: '品牌ID', width: null, align: 'center',hidden:true },
        // { prop: 'CarBrandID', label: 'ID', width: null, align: 'center',hidden:true },
        // { prop: 'CarBrandID', label: 'ID', width: null, align: 'center',hidden:true },
        /*用户名称*/
        { prop: 'userName', label: this.$t('org.label.UserName'), width: 200, align: 'center' },
        { prop: 'userId', label: '用户ID', width: null, align: 'center' ,hidden:true},
        /*员工姓名*/
        { prop: 'userName', label: this.$t('org.label.empName'), width: 200, align: 'center' },
        { prop: 'userId', label: '员工名称', width: null, align: 'center' ,hidden:true},
        /*功能名称*/
        { prop: 'funName', label: this.$t('ve.label.functionName'), width: 200, align: 'center' },
        { prop: 'funCode', label: '功能ID', width: null, align: 'center',hidden:true },
        /*车系*/
        { prop: 'carSeriesCn', label: this.$t('org.label.carSerise'), width: null, align: 'center' },
        { prop: 'seriesId', label: '车系ID', width: null, align: 'center' ,hidden:true},
        { prop: 'updateControlId', label: 'updateControlId', width: null, align: 'center' ,hidden:true},
        { prop: 'userSeriesId', label: 'userSeriesId', width: null, align: 'center' ,hidden:true},

            ])
      }
      return cols
    }

  }
}
</script>
