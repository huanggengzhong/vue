<!--
* description: 城市管理
* author: linzewen
* createdDate: 2019-08-07
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
      :dynamicIsInitTable="true"
      :dynamicIsShowMoreBtn="false"
      :dynamicIsColumnDrop="true"
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
import { orgApis } from '@/api/graphQLApiList/org'
import OneTableTemplate from '@/components/templates/oneTable'
import Edit from './edit'
import { CacheConfig } from "@/cache/configCache/index";
// import LangSelect from "@/components/LangSelect";
export default {
  name:"vecityOrganization",
  // 组件混入对象
  mixins: [oneTableWithViewTemplateMixins],
  components: {
    OneTableTemplate,
    Edit
    // LangSelect
  },
  // 阻塞路由预加载网格中组件的数据
  beforeRouteEnter(to, from, next) {
    CacheConfig.initData(to.path, function() {
      next();
    });
  },
  data() {
    return {
      // 网格查询API配置对象
      apiConfig: orgApis.mdmOrgCityQueryFindAll,
      showFlag: true,
      // 动态组件-按钮
      tableButtons: [
        {compKey: 'btnKey1', type: 'primary', size: 'small', clickEvent: () => this.queryTable(1), text:this.$t('sys.button.query')/*查询*/},
        {compKey: 'btnKey2', type: '', size: 'small', clickEvent: () => this.add(), text: this.$t('sys.button.add')/*添加*/},
        {compKey: 'btnKey3', type: '', size: 'small', clickEvent: () => this.reset(), text: this.$t('sys.button.reset')/*重置*/}
      ],
      // 动态组件-查询条件
       tableComponents: CacheConfig.cacheData[this.$route.path] && CacheConfig.cacheData[this.$route.path].tableComponents && CacheConfig.cacheData[this.$route.path].tableComponents.length > 0 ? CacheConfig.cacheData[this.$route.path].tableComponents: [
        {compKey: 'compKey1', labelName: this.$t('org.label.cityCode')/*城市编码*/, codeField: 'cityCode', component: () => import('@/components/org/commonInput'), type: 'inputText', isMust: true},
        {compKey: 'compKey2', labelName: this.$t('org.label.cityName')/*城市名称*/, codeField: 'cityName', component: () => import('@/components/org/commonInput'), type: 'inputText', isMust: true},
        {compKey: 'compKey3', labelName: this.$t('org.label.provinceName')/*所属省份*/, codeField: 'provinceId', component: () => import('@/components/org/ProvinceQuery'), type: 'dropdownList', isMust: true},
        {compKey: 'compKey4', labelName: this.$t('org.label.isEnable')/*是否启用*/, codeField: 'isEnable', component: () => import('@/components/org/isEnable/isEnable'), type: 'dropdownList', isMust: true}
      ],
      // 动态生成网格列
      tableCols: this.getCols(),
      //表单查询数据
      formField:{
        cityCode: '',
        cityName: '',
        provinceId: '',
        isEnable: ''
      }
    }
  },
   methods:{
    getCols() {
      var cols = [
     { prop: 'controlBtn', label: this.$t('sys.content.operate')/*操作*/, codeField: 'controlBtn', width: 60, align: 'center', isComponent: true,
          comps: [
            {compKey: 'propKey0', labelName: this.$t('sys.button.edit')/*编辑*/, codeField: 'editControlBtn', clickEvent: this.edit, component: () => import('@/components/org/linkButton')}
          ]
        }
      ];
      if (
        CacheConfig.cacheData[this.$route.path] &&
        CacheConfig.cacheData[this.$route.path].tableCols.length > 0
      ) {
        cols = cols.concat(CacheConfig.cacheData[this.$route.path].tableCols);
      } else {
        cols = cols.concat([
          //
        { prop: 'cityCode', label: this.$t('org.label.cityCode')/*城市编码*/, width: null, align: 'center' },
        { prop: 'cityName', label: this.$t('org.label.cityName')/*城市名称*/, width: null, align: 'center' },
        { prop: 'mdmOrgProvinceExt.provinceName', label: this.$t('org.label.provinceName')/*所属省份*/, width: null, align: 'center' },
        { prop: 'provinceId', label: '省份ID', width: 110, align: 'center', hidden:true },
        { prop: 'orderNo', label: this.$t('org.label.orderNo')/*排序*/, width: null, align: 'center' },
        { prop: 'isEnable', label: this.$t('org.label.isEnable')/*启用状态*/, width: null, align: 'center' },
        { prop: 'updateControlId', label: this.$t('org.label.isEnable')/*启用状态*/, width: null,hidden:true, align: 'center' },
        { prop: 'cityId', label: this.$t('org.label.isEnable')/*启用状态*/, width: null,hidden:true, align: 'center' },
        ]);
      }
      return cols;
    }
  }
}
</script>
