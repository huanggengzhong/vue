<!--
* description: 物流出库
* author: linsy
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
  name: "logisticsCheckout",
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
      apiConfig:veApis.veOutStoreQry,
       // 动态组件-按钮
      tableButtons: [
        {compKey: 'btnKey1', type: 'primary', size: 'small', clickEvent: () => this.queryTable(1), text:this.$t('sys.button.query')},//查询
        {compKey: 'btnKey2', type: '', size: 'small', clickEvent: () => this.introduction(), text: this.$t('sys.button.import')},//导入
        {compKey: 'btnKey3', type: '', size: 'small', clickEvent: () => this.delete(), text: this.$t('sys.button.delete')},//删除
        {compKey: 'btnKey4', type: '', size: 'small', clickEvent: () => this.jiexi(), text: this.$t('sys.button.analysis')},//解析
        {compKey: 'btnKey5', type: '', size: 'small', clickEvent: () => this.reset(), text: this.$t('sys.button.reset')},//重置
        {compKey: 'btnKey6', type: '', size: 'small', clickEvent: () => this.exportExcel(), text: this.$t('sys.button.export')},//导出
      ],
      // 动态组件-查询条件
      tableComponents: CacheConfig.cacheData[this.$route.path] && CacheConfig.cacheData[this.$route.path].tableComponents && CacheConfig.cacheData[this.$route.path].tableComponents.length > 0 ? CacheConfig.cacheData[this.$route.path].tableComponents: [
          {compKey: 'compKey1', labelName:  this.$t('org.label.carBrandCn')/*品牌*/, codeField: 'carBrandCode', component: () => import('@/components/org/carBrand/carBrand'), type: 'dropdownList', isMust: true},
          {compKey: 'compKey2', labelName: this.$t('ve.label.outboundOrderNO')/*出库单号*/, codeField: 'outStoreCode', component: () => import('@/components/org/commonInput'), type: 'inputText', isMust: true},
          {compKey: 'compKey3', labelName: this.$t('org.label.vin')/*VIN码*/, codeField: 'vin', component: () => import('@/components/org/commonInput'), type: 'inputText', isMust: true},
           {
          compKey: "compKey4",
          labelName: this.$t('org.label.warnHome')/*仓库*/,
          isRequire: true,
          codeField: "carStockHouseId",
          component: () =>
            import("@/components/ve/hostFatoryWareHouse/wareHouseInput"),
          type: "propus",
          isMust: true
        },
        {compKey: 'compKey5', labelName:  this.$t('org.label.carType')/*车型*/, codeField: 'carConfigId', component: () => import('@/components/org/carTypeConfig'), type: 'propus', isMust: false},
         {compKey: 'compKey6', labelName: this.$t('org.label.carColor')/*车身颜色*/, codeField: 'carColorId', component: () => import('@/components/org/carColor'), type: 'propus', isMust: false},
         {compKey: 'compKey7', key: 'key1',labelName:  this.$t('org.label.carIncolor')/*内饰色*/, codeField: 'carIncolorId', component: () => import('@/components/org/TrimPopupColor'), type: 'propus', isMust: false},
        {compKey: 'compKey8', labelName:  this.$t('ve.label.outboundStartTime')/*出库开始时间*/, codeField: 'outStoreDateBegin', component: () => import('@/components/org/datePicker/datePicker'), type: 'datePicker', dateOptionsType: '1', isMust: false },
       {compKey: 'compKey9', labelName:  this.$t('ve.label.outboundEndTime')/*出库结束时间*/, codeField: 'outStoreDateEnd', component: () => import('@/components/org/datePicker/datePicker'), type: 'datePicker', dateOptionsType: '1', isMust: false },
       {compKey: 'compKey10', labelName: this.$t('ve.label.outboundType')/*出库类型*/, lookuptype: 'VE0050', codeField: 'outStoreType', component: () => import('@/components/org/LookupValue'), type: 'dropdownList', isMust: false},
       {compKey: 'compKey11', labelName: this.$t('ve.label.importStartTime')/*导入开始时间*/, codeField: 'importDateBegin', component: () => import('@/components/org/datePicker/datePicker'), type: 'datePicker', dateOptionsType: '1', isMust: false },
        {compKey: 'compKey12', labelName: this.$t('ve.label.importEndTime')/*导入结束时间*/, codeField: 'importDateEnd', component: () => import('@/components/org/datePicker/datePicker'), type: 'datePicker', dateOptionsType: '1', isMust: false },
     {compKey: 'compKey13', labelName:  this.$t('ve.label.parsingState')/*解析状态*/, lookuptype: 'VE0207', codeField: 'jiexiStatus', component: () => import('@/components/org/LookupValue'), type: 'dropdownList', isMust: false},
      {compKey: 'compKey14', labelName: this.$t('ve.label.parsingStartTime')/*解析开始时间*/, codeField: 'jiexiDateBegin', component: () => import('@/components/org/datePicker/datePicker'), type: 'datePicker', dateOptionsType: '1', isMust: false },
       {compKey: 'compKey15', labelName:this.$t('ve.label.parsingEndTime')/*解析结束时间*/, codeField: 'jiexiDateEnd', component: () => import('@/components/org/datePicker/datePicker'), type: 'datePicker', dateOptionsType: '1', isMust: false },
    ],
     // 动态生成网格列
      tableCols: CacheConfig.cacheData[this.$route.path] && CacheConfig.cacheData[this.$route.path].tableCols && CacheConfig.cacheData[this.$route.path].tableCols.length > 0 ? CacheConfig.cacheData[this.$route.path].tableCols: [
        { prop: 'carBrandCn', label: this.$t('org.label.carBrandCn')/*品牌*/, width: 200, align: 'center' },
        { prop: 'caSeriesCode', label: this.$t('org.label.carSeriesId')/*车系*/, width: 200, align: 'center' },
        { prop: 'carConfigCode', label: this.$t('org.label.carConfig')/*车型配置*/, width: 200, align: 'center' },
        { prop: 'carColorCode', label: this.$t('org.label.carColor')/*车身颜色*/, width: 200, align: 'center' },
        { prop: 'carIncolorCode', label: this.$t('org.label.carIncolor')/*内饰色*/, width: 200, align: 'center' },
        { prop: 'vin', label:  this.$t('org.label.vin')/*VIN码*/, width: 200, align: 'center' },
        { prop: 'produceFactory', label: this.$t('ve.label.factory')/*工厂*/, width: 200, align: 'center' },
        { prop: 'carOutStockHouseId', label:  this.$t('org.label.warnHome')/*仓库*/, width: 200, align: 'center' },
        { prop: 'carAimStockHouseId', label: this.$t('ve.label.destinationWarehouse')/*目的地仓库*/, width: 200, align: 'center' },
        { prop: 'carOutStoreCode', label: this.$t('ve.label.outboundOrderNO')/*出库单号*/, width: 200, align: 'center' },
        { prop: 'outStoreDate', label: this.$t('ve.label.outboundTime')/*出库时间*/, width: 200, align: 'center' },
        { prop: 'creatorUserName', label: this.$t('ve.label.importer')/*导入人*/, width: 200, align: 'center' },
        { prop: 'createDatetime', label: this.$t('ve.label.importTime')/*导入时间*/, width: 200, align: 'center' },
        { prop: 'jiexiState', label:  this.$t('ve.label.parsingState')/*解析状态*/, width: 200, align: 'center' },
        { prop: 'jiexiTime', label: this.$t('ve.label.analysisTime')/*解析时间*/, width: 200, align: 'center' },
        { prop: 'remark', label: this.$t('ve.label.remark')/*备注*/, width: 200, align: 'center' },
      ],
      formField: {
        carBrandCode: "",
        outStoreCode:"",
        vin: "",
        carStockHouseId: "",
        carConfigId: "",
        carColorId: "",
        carIncolorId: "",
        outStoreDateBegin:"",
        outStoreDateEnd:"",
        outStoreType:"",
        importDateBegin:"",
        importDateEnd:"",
        jiexiStatus:"",
        jiexiDateBegin:"",
        jiexiDateEnd:"",
      },

    };
  },
methods:{
  delete(){
      const that = this.$refs.multipleTable;
      let selectData = that.$refs.multipleTable.selection;
      if(selectData.length<1){
          that.$message({
          message:  this.$t('org.message.moreOneData')/*请至少选择一条数据*/ ,
          type: "warning",
          duration: 2000
        });
        return;
      }
      for(var k in selectData){
      //通知场景保存
      let queryObj = {
        // 保存mutation
        type: "mutation",
        // api配置
        apiConfig: veApis.veOutStoreDel,
        //条件/实体参数（变量），根据typeParam中的定义配置
        variables: {
          //当前中台使用的名称有dataInfo、info，具体查看API文档
          dataInfo: {
            outStoreId:selectData[k].outStoreId,
            updateControlId:selectData[k].updateControlId
          }
        }
      };
      //转换了中台请求格式数据
      var paramD = that.$getParams(queryObj);
      // 调用中台API方法（可复用）
      that.$requestGraphQL(paramD).then(response => {
        if (response.data[queryObj.apiConfig.ServiceCode].result === "1") {
          that.listLoading = false;
            that.$message({
              message:this.$t("sys.tips.esTip14"),//删除成功
              type: "success",
              duration: 2000
            });
          }
      });
  }
  },
  introduction(){
      const that = this.$refs.multipleTable;
      let selectData = that.$refs.multipleTable.selection;
      if(selectData.length<1){
          that.$message({
          message: this.$t('org.message.moreOneData')/*请至少选择一条数据*/ ,
          type: "warning",
          duration: 2000
        });
        return;
      }
      for(var k in selectData){
      //通知场景保存
      let queryObj = {
        // 保存mutation
        type: "mutation",
        // api配置
        apiConfig: veApis.veOutStoreImport,
        //条件/实体参数（变量），根据typeParam中的定义配置
        variables: {
          //当前中台使用的名称有dataInfo、info，具体查看API文档
          dataInfo: {
            produceFactory:selectData[k].produceFactory,
            carStockHouseCode:selectData[k].carOutStockHouseId,
            outStoreCode:selectData[k].outStoreCode,
            vin:selectData[k].vin,
            carAimStockHouseCode:selectData[k].carAimStockHouseId,
            outStoreDate:selectData[k].outStoreDate,
            outStoreType:this.formField.outStoreType
          }
        }
      };
      //转换了中台请求格式数据
      var paramD = that.$getParams(queryObj);
      // 调用中台API方法（可复用）
      that.$requestGraphQL(paramD).then(response => {
        if (response.data[queryObj.apiConfig.ServiceCode].result === "1") {
          that.listLoading = false;
            that.$message({
              message:this.$t("sys.tips.esTip18"),//导入成功"",
              type: "success",
              duration: 2000
            });
          }
      });
  }
  },
  jiexi(){
      const that = this.$refs.multipleTable;
      let selectData = that.$refs.multipleTable.selection;
      if(selectData.length<1){
          that.$message({
          message: this.$t('org.message.moreOneData')/*请至少选择一条数据*/ ,
          type: "warning",
          duration: 2000
        });
        return;
      }
      for(var k in selectData){
      //通知场景保存
      let queryObj = {
        // 保存mutation
        type: "mutation",
        // api配置
        apiConfig: veApis.veOutStoreSave,
        //条件/实体参数（变量），根据typeParam中的定义配置
        variables: {
          //当前中台使用的名称有dataInfo、info，具体查看API文档
          dataInfo: {
            outStoreId:selectData[k].outStoreId,
            vin:selectData[k].vin,
            produceFactory:selectData[k].produceFactory,
            carStockHouseCode:selectData[k].carOutStockHouseId,
            outStoreCode:selectData[k].outStoreCode,
            carAimStockHouseCode:selectData[k].carAimStockHouseId,
            outStoreDate:selectData[k].outStoreDate,
            outStoreType:this.formField.outStoreType,
            updateControlId:selectData[k].updateControlId,
          }
        }
      };
      //转换了中台请求格式数据
      var paramD = that.$getParams(queryObj);
      // 调用中台API方法（可复用）
      that.$requestGraphQL(paramD).then(response => {
        if (response.data[queryObj.apiConfig.ServiceCode].result === "1") {
          that.listLoading = false;
            that.$message({
              message:this.$t("sys.tips.esTip19"),//解析成功
              type: "success",
              duration: 2000
            });
          }
      });
  }
  }
}


};
</script>
