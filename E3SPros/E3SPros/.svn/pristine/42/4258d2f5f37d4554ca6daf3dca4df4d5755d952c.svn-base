<template>
  <div class="app-container app-container-table">
    <one-table-template ref="multipleTable"
      :dynamicButtons="tableButtons"
      :dynamicComponents="tableComponents"
      :dynamicApiConfig="apiConfig"
      :dynamicTableCols="tableCols"
      :dynamicFormFields="formField"
      :dynamicIsShowSelect="true"
      :dynamicIsShowMoreBtn="true"
      :dynamicIsColumnDrop="true"
    />
  </div>
</template>
<script>
import { oneTableWithViewTemplateMixins } from '@/components/mixins/oneTableWithViewTemplateMixins';
import { veApis } from '@/api/graphQLApiList/ve'
import OneTableTemplate from '@/components/templates/oneTable'
import { CacheConfig } from '@/cache/configCache/index'

export default {
  name:"transferOrderApply",
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
      apiConfig: veApis.vecldbsqOutApplyQueryForPage,
      // 动态组件-按钮
      tableButtons: [
      {
          compKey: "btnKey1",
          type: "primary",
          size: "small",
          clickEvent: () => this.queryTable(1),
          text: this.$t("sys.button.query") /*查询*/
        },
        {
          compKey: "btnKey2",
          type: "",
          size: "small",
          clickEvent: () => this.reset(),
          text: this.$t("sys.button.reset") /*重置*/
        },
        {
          compKey: "btnKey3",
          type: "",
          size: "small",
          clickEvent: () => this.exportExcel(),
          text: this.$t("sys.button.export") /*导出*/
        }
      ],
      // 动态组件-查询条件
      tableComponents: CacheConfig.cacheData[this.$route.path] && CacheConfig.cacheData[this.$route.path].tableComponents.length > 0 ? CacheConfig.cacheData[this.$route.path].tableComponents : [
        {
          compKey: "compKey1",
          labelName: this.$t('org.label.carBrand')/*品牌*/,
          codeField: "carBrandCode",
          component: () => import("@/components/org/carBrand/carBrand"),
          type: "dropdownList",
          isMust: true
        },
        {
          compKey: "compKey2",
          labelName: "经销商",
          codeField: "dlrId",
          component: () => import("@/components/org/orgDlr/index"),
          type: "propus",
          isMust: true
        },
        {
          compKey: "compKey3",
          labelName: this.$t('org.label.carSeries')/*车系*/,
          codeField: "carSeriesId",
          component: () => import("@/components/org/carSeries/carSeries"),
          type: "propus",
          isMust: true
        },
        {
          compKey: "compKey4",
          labelName: this.$t('org.label.carConfig')/*车型配置*/,
          codeField: "carConfigId",
          parentFileds: 'value:carBrandCode,show:carBrandCode--99',
          component: () => import("@/components/org/carTypeConfig"),
          type: "propus",
          isMust: true
        },
        //
        {compKey: 'compKey5', labelName: this.$t('ve.label.AuthorizationStatus'), lookuptype: 'VE0260', codeField: 'authStatsCode', component: () => import('@/components/org/LookupValue'), type: 'dropdownList', isMust: false},
      ],
      // 动态生成网格列
      tableCols: CacheConfig.cacheData[this.$route.path] && CacheConfig.cacheData[this.$route.path].tableCols.length > 0 ? CacheConfig.cacheData[this.$route.path].tableCols : [
        { prop: 'carBrandCn', label: this.$t('org.label.carBrand')/*品牌*/, width: 150, align: 'center' },
        { prop: 'dlrShortName', label: this.$t('ve.label.dlr')/*调拨价格*/, width: 150, align: 'center' },
        { prop: 'carSeriesCn', label: this.$t('org.label.carSerise')/*车系*/, width: 90, align: 'center' },
        { prop: 'smallCarTypeCn', label: this.$t('org.label.smallCarTypeCn')/*车型*/, width: 150, align: 'center' },
        { prop: 'carConfigCode', label: this.$t('org.label.carConfig')/*车型配置*/, width: 150, align: 'center' },
        { prop: 'authStatuCode', label: this.$t('ve.label.AuthorizationStatus')/*授权情况*/, width: 150, align: 'center' }
      ],
      //表单查询数据（查询条件）
      formField: {
        carBrandCode:"",
        dlrId:"",
        carSeriesId:"",
        carConfigId:"",
        authStatsCode:"",
      }
    }
  },
  created() {},
  methods: {
  }
}
</script>
<style lang="scss" scoped>
/deep/ #pane-first .filter-button {
    text-align: right;
    width: 100%;
    padding: 5px;
    background: transparent;
    border: none;
    min-height: 28px;
    background-color: white;
}
</style>
