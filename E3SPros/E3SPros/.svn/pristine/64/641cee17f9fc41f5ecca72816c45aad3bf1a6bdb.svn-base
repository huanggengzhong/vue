<!--
* description: 经销商按店分配台数设置
*author：yxy
* createdDate: 2019-09-19
-->
<template>
  <div class="app-container app-container-table">
    <one-table-template ref="multipleTable"
      :dynamicButtons="tableButtons"
      :dynamicComponents="tableComponents"
      :dynamicApiConfig="apiConfig"
      :dynamicTableCols="tableCols"
      :dynamicFormFields="formField"
      :dynamicIsShowSelect="true"
      :dynamicIsInitTable="true"
      :dynamicIsColumnDrop="true"
      :dynamicIsShowMoreBtn="false"
    />
  </div>


</template>
<script>
import { oneTableWithViewTemplateMixins } from '@/components/mixins/oneTableWithViewTemplateMixins';
import { veApis } from "@/api/graphQLApiList/ve"
import OneTableTemplate from '@/components/templates/oneTable'
// import Edit from './edit'
import { CacheConfig } from '@/cache/configCache/index'
export default {
  name:"dlrByStoreDisNumSet",
  // 组件混入对象
  mixins: [oneTableWithViewTemplateMixins],
  components: {
    OneTableTemplate,

    // Edit
  },
  // 阻塞路由预加载网格中组件的数据
beforeRouteEnter(to, from, next) {CacheConfig.initData(to.path, function(){next()})},
  data() {
    return {
      // 网格查询API配置对象
      apiConfig: veApis.disNumQuery,


      // 动态组件-按钮
      tableButtons: [
        // {
        //   compKey: "btnKey0",
        //   type: "checkbox",
        //   size: "small",
        //   clickEvent: () => this.synchrony("everyNum"),
        //   text:this.$t('sys.button.allSync')
        // },//"全部同步"
        {compKey: 'btnKey1', type: 'primary', size: 'small', clickEvent: () => this.queryTable(1), text:this.$t('sys.button.query')},//查询

        {compKey: 'btnKey2', type: '', size: 'small', clickEvent: () => this.synchrony('everyNum'), text:this.$t('sys.button.sync')},//同步
          {compKey: 'btnKey3', type: '', size: 'small', clickEvent: () => this.save(), text: this.$t('sys.button.save')},//保存
           {compKey: 'btnKey4', type: '', size: 'small', clickEvent: () => this.reset(), text:this.$t('sys.button.reset')},//重置
            {compKey: 'btnKey5', type: '', size: 'small', clickEvent: () => this.this.exportExcel(), text:this.$t('sys.button.export')},// '导出'

      ],//开关设置
      // 动态组件-查询条件
      tableComponents: CacheConfig.cacheData[this.$route.path] && CacheConfig.cacheData[this.$route.path].tableComponents.length > 0 ? CacheConfig.cacheData[this.$route.path].tableComponents : [
       {compKey: 'compKey1', labelName: this.$t('org.label.carBrandCn'), codeField: 'carBrandCode', component: () => import('@/components/org/carBrand/carBrand'), isRequire: true, type: 'dropdownList', isMust: true},//品牌
       {
          compKey: "compKey3",
          labelName: this.$t('org.label.dlrName'),
          codeField: "dlrId",
          component: () => import("@/components/org/orgDlr/index"),
          type: "propus",
          isMust: true
        },//经销商
        { compKey: "compKey4",
          labelName: this.$t('org.label.carSerise'),
          codeField: "baseSeriesId",
          component: () => import("@/components/org/CarCode"),
          type: "dropdownList",
          isMust: true}//车系
      ],
      // 动态生成网格列
      tableCols: CacheConfig.cacheData[this.$route.path]&& CacheConfig.cacheData[this.$route.path].tableCols.length > 0 ? CacheConfig.cacheData[this.$route.path].tableCols: [
        { prop: 'carBrandCn', label: this.$t('org.label.carBrandCn'), width: null, align: 'center' },//品牌名称
         {prop: "area",label: this.$t('ve.label.county1'),width: null, align: "center"},//地区
        {prop: "bigAreaName",label: this.$t('ve.label.bigarea'),width: null,align: "center"},//大区
        {prop: "smallAreaName", label:this.$t('ve.label.smallArea'), width: null,align: "center"},//小区
        {prop: "province",label:this.$t('ve.label.province'), width: null,align: "center"},//省份
        {prop: "city",label:this.$t('ve.label.city'),width: null,align: "center"},//城市
        { prop: 'dlrShortName', label: this.$t('org.label.dlrName'), width: null, align: 'center'},//经销商
        { prop: 'carSeriesCn', label: this.$t('org.label.carSerise'), width: null, align: 'center'},//车系
        { prop: 'everyNum', label: this.$t('ve.label.everyNum')+'+', width: null, align: 'center', isComponent: true,
          comps: [{compKey: 'propKey1', isShowLabel: false, codeField: 'everyNum', clickEvent: () => null, component: () => import('@/components/org/commonInput'), type: 'inputText'}]},//每轮分配台数+
        { prop: 'batchSeriesId', label: '车系ID', width: null, align: 'center', hidden: true },
        { prop: 'dlrId', label: '经销商ID', width: null, align: 'center', hidden: true },
        { prop: 'carBrandCode', label: this.$t('org.label.carBrandCode'), width: null, align: 'center', hidden: true },//品牌编码
        { prop: '', label: '主键ID', width: null, align: 'center', hidden: true }
      ],
      //表单查询数据
      formField:{
        carBrandCode: '',
        dlrId: '',
        baseSeriesId:''
      }
    }
  },
  methods: {

      //保存
    save(){
      const that = this.$refs.multipleTable;
      let saveState = true;
      let saveCount = 0;
      let msg = '';

      let selectData = that.$refs.multipleTable.selection;
      if (selectData.length < 1) {
        that.$message({
          message: '请至少选择一条数据',
          type: 'warning',
          duration: 2000
        });
        return;
      }
      debugger;
      // for(var k in ){

        let queryObj = {
          // 保存mutation
          type: 'mutation',
          // api配置
          apiConfig: veApis.disNumSave,
          variables: {
            //当前中台使用的名称有dataInfo、info，具体查看API文档
            dataInfo: selectData
            // {
            //   dlrId: selectData[k].dlrId,
            //   carSeriesId: selectData[k].batchSeriesId
            // }
          }
        };
        //转换了中台请求格式数据
        var paramD = that.$getParams(queryObj);
        // 调用中台API方法（可复用）
        that.$requestGraphQL(paramD).then(response =>{
         if(response.data[queryObj.apiConfig.ServiceCode].result === '1' && response.data[queryObj.apiConfig.ServiceCode].rows!=''){
            this.orgManageVisible = false
            this.$message({
              message: '保存成功',
              type: 'success',
              duration: 1000
            });
             that.queryTable(1);
            }
        });
        }

    },

    }

//}
</script>
<style scoped>
.onOffPart{
  text-align: left;
}
</style>
