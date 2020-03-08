<!--
* description: 用户经销商设置
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
  </div>
</template>
<script>
import { oneTableWithViewTemplateMixins } from '@/components/mixins/oneTableWithViewTemplateMixins';
import { orgApis } from '@/api/graphQLApiList/org'
import OneTableTemplate from '@/components/templates/oneTable'
import { CacheConfig } from '@/cache/configCache/index'
export default {
  name:"veuserDistributor",
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
      apiConfig: orgApis.mdmUserDlrQueryInfo,
      // 动态组件-按钮
      tableButtons: [
        {compKey: 'btnKey1', type: 'primary', size: 'small', clickEvent: () => this.queryTable(1), text: this.$t('sys.button.query')},/*查询*/
        {compKey: 'btnKey2', type: '', size: 'small', clickEvent: () => this.synchrony('dlrID,dlrName'), text:  this.$t('sys.button.sync')}/*同步*/,
        {compKey: 'btnKey3', type: '', size: 'small', clickEvent: () => this.save(), text:  this.$t('sys.button.save')}/*保存*/,
        {compKey: 'btnKey4', type: '', size: 'small', clickEvent: () => this.reset(), text:  this.$t('sys.button.reset')}/*重置*/,
        {compKey: 'btnKey5', type: '', size: 'small', clickEvent: () => this.exportExcel(), text:  this.$t('sys.button.export')}/*导出*/
      ],
      // 动态组件-查询条件
      tableComponents: CacheConfig.cacheData[this.$route.path] && CacheConfig.cacheData[this.$route.path].tableComponents.length > 0 ? CacheConfig.cacheData[this.$route.path].tableComponents : [

        // 显示组件
        {compKey: 'compKey1', labelName: this.$t('org.label.carBrand')/*品牌*/, codeField: 'carBrandCode', component: () => import('@/components/org/carBrand/carBrand'), type: 'dropdownList', isMust: true},
        {compKey: 'compKey2', labelName: this.$t('org.label.userName')/*用户名称*/, codeField: 'userId', component: () => import('@/components/org/userSelect'), type: 'propus', isMust: true},
        {compKey: 'compKey3', labelName: this.$t('org.label.dlrName')/*经销商*/, codeField: 'dlrId', component: () => import('@/components/org/orgDlr'), type: 'propus', isMust: true},
        {compKey: 'compKey5', labelName: this.$t('org.label.department')/*部门*/, codeField: 'department', component: () => import('@/components/org/commonInput/searchInput'), type: 'popupsInput', isMust: true,
         popups: {type: 'propus', key: 'key1', state: false, component: () => import('@/components/org/department/department')}},
      ],
      // 动态生成网格列
      tableCols: CacheConfig.cacheData[this.$route.path]&& CacheConfig.cacheData[this.$route.path].tableCols.length > 0 ? CacheConfig.cacheData[this.$route.path].tableCols: [
        { prop: 'CarBrandCn', label: this.$t('org.label.carBrandCn')/*品牌*/, width: null, align: 'center'},
        { prop: 'carBrandCode', label: this.$t('org.label.carBrand')/*品牌*/, width: null, align: 'center',hidden:true },
        { prop: 'userName', label: this.$t('org.label.userName')/*用户名称*/, width: null, align: 'center'},
        { prop: 'userID', label: this.$t('org.label.userName')/*用户ID*/, width: null, align: 'center',hidden:true },
        { prop: 'userName', label: this.$t('org.label.logInName')/*登陆名*/, width: null, align: 'center' },
        { prop: 'department', label:  this.$t('org.label.department')/*部门*/, width: null, align: 'center' },
        { prop: 'dlrID', label: this.$t('org.label.dlrName')/*经销商*/, width: null, align: 'center', isComponent: true,
          comps: [{compKey: 'propKey2', isMul: false, isShowLabel: false, codeField: 'dlrID',textField:'dlrName',clickEvent: () => null, component: () => import('@/components/org/orgDlr')}]
        }
      ],
      //表单查询数据（查询条件）
      formField:{
        pageIndex:'',
        pageSize:'',
        query:'get',
        dataInfo:'',
        empName:'',
        dlrCode:'',
        dlrName:'',
        isEnable:'',
        carBrandCode:'',
        userId:'',
        dlrId:'',
        dep:''
      }
    }
  },
  methods: {
  save(){
      const that = this.$refs.multipleTable;
      let saveState = true;
      let saveCount = 0;
      let msg = '';
      let selectData = that.$refs.multipleTable.selection;
      if (selectData.length < 1) {
        that.$message({/*请选择需要保存的信息*/
          message: this.$t('org.message.selectSaveInfo'),
          type: 'warning',
          duration: 2000
        });
        return;
      }
  }
  }
}
</script>
