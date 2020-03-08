<!--
* description: 品牌管理
* author: luojx
* createdDate: 2019-07-31
-->
<template>
  <div class="app-container app-container-table">
    <one-table-template ref="multipleTable"
      :key="oneTableKey"
      :dynamicButtons="tableButtons"
      :dynamicComponents="tableComponents"
      :dynamicApiConfig="apiConfig"
      :dynamicTableCols="tableCols"
      :dynamicFormFields="formField"
      :dynamicIsShowSelect="false"
      :dynamicIsInitTable="true"
      :dynamicIsColumnDrop="false"
      :isSetDefaultBrand="false"
    />

    <edit
      :dynamicEditRowData="editRowData"
      :popupsVisible="editPopupsVisible"
      :key="editPopupsKey"
      :popupsState="editPopupsState"
      :isSetDefaultBrand="false"
      @close="close"
    ></edit>
  </div>
</template>
<script>
import { oneTableWithViewTemplateMixins } from '@/components/mixins/oneTableWithViewTemplateMixins';
import { orgApis } from '@/api/graphQLApiList/org'
import OneTableTemplate from '@/components/templates/oneTable'
import Edit from './edit'
import { CacheConfig } from '@/cache/configCache/index'

export default {
  name:"orgBrandManage",
  // 组件混入对象
  mixins: [oneTableWithViewTemplateMixins],
  components: {
    OneTableTemplate,
    Edit
  },
  // 阻塞路由预加载网格中组件的数据
  beforeRouteEnter(to, from, next) {CacheConfig.initData(to.path, function(){next()})},
  data() {
    return {
      // 网格查询API配置对象
      apiConfig: orgApis.mdmCarBrandQueryByPage,
      // 动态组件-按钮
      tableButtons: [
        {compKey: 'btnKey1', type: 'primary', size: 'small', clickEvent: () => this.queryTable(1), text: this.$t('sys.button.query')},
        {compKey: 'btnKey2', type: '', size: 'small', clickEvent: () => this.add(), text: this.$t('sys.button.newAdd')},
        // {compKey: 'btnKey7', type: '', size: 'small', clickEvent: () => this.synchrony('isEnable,carBrandCode'), text: '同步'},
        // {compKey: 'btnKey5', type: '', size: 'small', clickEvent: () => this.synchronyAll('isEnable,carBrandCode'), text: '全部同步'},
        {compKey: 'btnKey4', type: '', size: 'small', clickEvent: () => this.reset(), text: this.$t('sys.button.reset')},
        {compKey: 'btnKey6', type: '', size: 'small', clickEvent: () => this.exportExcel(), text: this.$t('sys.button.export')}
      ],
      // 动态组件-查询条件
      tableComponents: CacheConfig.cacheData[this.$route.path] && CacheConfig.cacheData[this.$route.path].tableComponents.length > 0 ? CacheConfig.cacheData[this.$route.path].tableComponents : [
       //品牌编码
       {compKey: 'compKey1', labelName: this.$t('org.label.carBrandCode'), codeField: 'carBrandCode', component: () => import('@/components/org/commonInput'), type: 'inputText', isMust: true},
        //品牌名称
        {compKey: 'compKey2', labelName: this.$t('org.label.carBrand'), codeField: 'carBrandCn', component: () => import('@/components/org/commonInput'), type: 'inputText', isMust: true},
        // 是否启用
        {compKey: 'compKey3', labelName: this.$t('org.label.isAble'), codeField: 'isEnable', clearable: false, component: () => import('@/components/org/isEnable/isEnable'), type: 'dropdownList', isMust: true}
      ],
      // 动态生成网格列
      tableCols: CacheConfig.cacheData[this.$route.path]&& CacheConfig.cacheData[this.$route.path].tableCols.length > 0 ? CacheConfig.cacheData[this.$route.path].tableCols: [
        // 操作
        { prop: 'controlBtn', label: this.$t('sys.content.operate'), codeField: 'controlBtn', width: 80, align: 'center', fixed: true , isComponent: true,
          //  编辑
          comps: [
            {compKey: 'propKey0', labelName: this.$t('sys.button.edit')/*, compareField: 'isEnable', compareValue: '1'*/, codeField: 'editControlBtn', clickEvent: this.edit, component: () => import('@/components/org/linkButton')},
          ]
        },
        //品牌编码
        { prop: 'carBrandCode', label: this.$t('org.label.carBrandCode'), width: null, align: 'center' },
        //品牌
        { prop: 'carBrandCn', label: this.$t('org.label.carBrandCn'), width: null, align: 'center' },
         /*, isComponent: true,
          comps: [{compKey: 'propKey2', isMul: false, isShowLabel: false, codeField: 'carBrandCode', clearable: false, filterable: false, clickEvent: () => null, component: () => import('@/components/org/carBrand/carBrand')}]
        },*/
        //品牌英文名称
        { prop: 'carBrandEn', label: this.$t('org.label.carBrandEn'), width: null, align: 'center' },
        // 是否启用
        { prop: 'enableName', label: this.$t('org.label.isAble') , width: null, align: 'center' }, /*isComponent: true,
          comps: [{compKey: 'propKey1', isShowLabel: false, codeField: 'isEnable', clickEvent: () => null, component: () => import('@/components/org/isEnable/isEnable')}]
        },*/
        { prop: 'updateControlId', label: '并发控制', width: null, align: 'center', hidden: true },
        { prop: 'uid', label: '主键ID', width: null, align: 'center', hidden: true },
        { prop: 'isEnable', label: '主键ID', width: null, align: 'center', hidden: true }
      ],
      // 表单查询数据
      formField:{
        carBrandCode: '',
        carBrandCn: '',
        isEnable: '1'
      },
      // 是否使用刷新Key的方式刷新弹窗
      resetDialogKey: false
    }
  }
}
</script>
