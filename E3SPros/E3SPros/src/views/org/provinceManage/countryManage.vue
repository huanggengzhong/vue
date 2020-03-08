<!--
* description: 区县管理
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

export default {
  name:"countryManage",
  // 组件混入对象
  mixins: [oneTableWithViewTemplateMixins],
  components: {
    OneTableTemplate,
    Edit
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
      apiConfig: orgApis.mdmOrgCommunityQueryFindAll,
      // 动态组件-按钮
      tableButtons: [
        {compKey: 'btnKey1', type: 'primary', size: 'small', clickEvent: () => this.queryTable(1), text: this.$t('sys.button.query')},//查询
        {compKey: 'btnKey2', type: '', size: 'small', clickEvent: () => this.add(), text:this.$t('sys.button.add')},//新增
        {compKey: 'btnKey4', type: '', size: 'small', clickEvent: () => this.reset(), text:this.$t('sys.button.reset')}],//重置
      // 动态组件-查询条件
      tableComponents: CacheConfig.cacheData[this.$route.path] && CacheConfig.cacheData[this.$route.path].tableComponents && CacheConfig.cacheData[this.$route.path].tableComponents.length > 0 ? CacheConfig.cacheData[this.$route.path].tableComponents: [
        {compKey: 'compKey2',isMul: false,labelName: this.$t('org.label.provinceName'),//所属省份
         codeField: 'provinceId', component: () => import('@/components/org/ProvinceQuery'), type: 'dropdownList', isMust: true},
        {compKey: 'compKey3', labelName:  this.$t('org.label.cityName'),//所属城市
         parentFileds: 'provinceId',codeField: 'cityId', component: () => import('@/components/org/CitySelect'), type: 'dropdownList', isMust: true},
        {compKey: 'compKey1', labelName:  this.$t('org.label.countyName'),//区县名称
         codeField: 'countyName', component: () => import('@/components/org/commonInput'), type: 'inputText', isMust: true},
        {compKey: 'compKey4', labelName:  this.$t('org.label.isAble'),//是否启用
         codeField: 'isEnable', component: () => import('@/components/org/isEnable/isEnable'), type: 'dropdownList', isMust: true}
      ],
      // 动态生成网格列
      tableCols: this.getCols(),
      //表单查询数据
      formField:{
        countyName: '',
        provinceId: '',
        cityId:'',
        isEnable:''
      }
    }
  },
  methods: {
    del() {
    }
  },
   methods:{
    getCols() {
      var cols = [
        { prop: 'controlBtn', label: this.$t('sys.content.operate'),//操作
         codeField: 'controlBtn', width: 60, align: 'center', fixed: true, isComponent: true,
          comps:[{compKey: 'propKey0', align: 'center', labelName: this.$t('sys.button.edit'),//编辑
           codeField: 'editControlBtn', clickEvent: this.edit, component: () => import('@/components/org/linkButton')}]
        },
      ];
      if (
        CacheConfig.cacheData[this.$route.path] &&
        CacheConfig.cacheData[this.$route.path].tableCols.length > 0
      ) {
        cols = cols.concat(CacheConfig.cacheData[this.$route.path].tableCols);
      } else {
        cols = cols.concat([
        { prop: 'countyName', label: this.$t('org.label.countyName'),//区县名称
        width: null, align: 'center' },
        { prop: 'provinceName', label: this.$t('org.label.provinceName'),//所属省份
         width: null, align: 'center' },
        { prop: 'cityName', label: this.$t('org.label.cityName'),//所属城市
        width: null, align: 'center' },
        { prop: 'isEnable', label: this.$t('org.label.isUseable'),//是否可用
        width: null, align: 'center' },
        // { prop: 'isEnableCode', label: '是否启用编码', width: null, align: 'center', hidden: true },
        { prop: 'countyCode', label: this.$t('org.label.countyCode'),//区县编码
         width: null, align: 'center', hidden: true },
        { prop: 'countyId', label: this.$t('org.label.countyID'),//区县ID
         width: null, align: 'center', hidden: true },
        { prop: 'provinceId', label: this.$t('org.label.provinceID'),//省份ID
         width: null, align: 'center', hidden: true },
        { prop: 'cityId', label: this.$t('org.label.cityID'),//城市ID
         width: null, align: 'center', hidden: true },
        { prop: 'updateControlId', label:this.$t('ve.label.primaryKeyID'), //主键id
        width: null, align: 'center', hidden: true },
        { prop: 'countyId', label:this.$t('ve.label.primaryKeyID'), //主键id
        width: null, align: 'center', hidden: true }
        ]);
      }
      return cols;
    }
  }
}
</script>
