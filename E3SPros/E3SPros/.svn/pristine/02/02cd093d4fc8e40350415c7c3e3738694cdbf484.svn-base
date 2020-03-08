<!--
* description: 用户小区
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
import { veApis } from '@/api/graphQLApiList/ve'
import OneTableTemplate from '@/components/templates/oneTable'
import { CacheConfig } from '@/cache/configCache/index'
export default {
  name:"veuserVillage",
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
      apiConfig: veApis.userAreaQueryByPage,
      // 动态组件-按钮
      tableButtons: [
        {compKey: 'btnKey1', type: 'primary', size: 'small', clickEvent: () => this.queryTable(1), text: '查询'},
        {compKey: 'btnKey2', type: '', size: 'small', clickEvent: () => this.synchrony('smallAreaId,areaName'), text: '同步'},
        {compKey: 'btnKey3', type: '', size: 'small', clickEvent: () => this.save(), text: '保存'},
        {compKey: 'btnKey4', type: '', size: 'small', clickEvent: () => this.reset(), text: '重置'},
        {compKey: 'btnKey5', type: '', size: 'small', clickEvent: () => this.queryTable(1), text: '导出'},
      ],
      // 动态组件-查询条件
      tableComponents: CacheConfig.cacheData[this.$route.path] && CacheConfig.cacheData[this.$route.path].tableComponents.length > 0 ? CacheConfig.cacheData[this.$route.path].tableComponents : [
        // 显示组件
        {compKey: 'compKey1', labelName: '品牌', codeField: 'carBrandCode', component: () => import('@/components/org/carBrand/carBrand'), type: 'dropdownList', isMust: true},
        {compKey: 'compKey2', labelName: '用户名称', codeField: 'userId', component: () => import('@/components/org/userSelect'), type: 'propus', isMust: true},
        {compKey: 'compKey3', labelName: '小区', codeField: 'areaId', component: () => import('@/components/org/villageChoose'), type: 'propus', isMust: true},
      ],
      // 动态生成网格列
      tableCols: CacheConfig.cacheData[this.$route.path]&& CacheConfig.cacheData[this.$route.path].tableCols.length > 0 ? CacheConfig.cacheData[this.$route.path].tableCols: [
        { prop: 'CarBrandCn', label: '品牌', width: null, align: 'center'},
        { prop: 'carBrandCode', label: '品牌ID', width: null, align: 'center',hidden:true },
        { prop: 'orgName', label: '所属组织', width: null, align: 'center'},
        { prop: 'userName', label: '用户', width: null, align: 'center'},
        { prop: 'userID', label: '用户ID', width: null, align: 'center',hidden:true },
        { prop: 'userName', label: '登录名', width: null, align: 'center' },
        { prop: 'areaName', label: '区域', width: null, align: 'center'},
        // { prop: 'smallAreaId', label: '小区id', width: null, align: 'center',hidden:true},
        // { prop: 'smallAreaName', label: '小区', width: null, align: 'center'},
        { prop: 'smallAreaId', label: '小区', width: null, align: 'center', isComponent: true,
          comps: [{compKey: 'propKey2', isMul: false, isShowLabel: false, codeField: 'smallAreaId',clickEvent: () => null, component: () => import('@/components/org/villageChoose')}]
        }

      ],
      //表单查询数据（查询条件）
      formField:{
        carBrandCode:'',
        userId:'',
        areaId:''
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
        that.$message({
          message: '请选择需要保存的信息',
          type: 'warning',
          duration: 2000
        });
        return;
      }
  }
  }
}
</script>
