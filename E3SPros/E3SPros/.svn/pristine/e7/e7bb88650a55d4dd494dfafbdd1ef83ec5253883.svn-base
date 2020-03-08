<!--
* description: 物流入库
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
  name: "logisticsCheckin",
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
      apiConfig:veApis.veInStoreQry,
       // 动态组件-按钮
      tableButtons: [
        {compKey: 'btnKey1', type: 'primary', size: 'small', clickEvent: () => this.queryTable(1), text: this.$t('sys.button.query')},//查询
        {compKey: 'btnKey2', type: '', size: 'small', clickEvent: () => this.introduction(), text: this.$t('sys.button.import')},//导入
        {compKey: 'btnKey3', type: '', size: 'small', clickEvent: () => this.delete(), text: this.$t('sys.button.delete')},//删除
        {compKey: 'btnKey4', type: '', size: 'small', clickEvent: () => this.jiexi(), text: this.$t('sys.button.analysis')},//解析
        {compKey: 'btnKey5', type: '', size: 'small', clickEvent: () => this.reset(), text: this.$t('sys.button.reset')},//重置
        {compKey: 'btnKey6', type: '', size: 'small', clickEvent: () => this.exportExcel(), text: this.$t('sys.button.export')},//导出
      ],
      // 动态组件-查询条件
      tableComponents: CacheConfig.cacheData[this.$route.path] && CacheConfig.cacheData[this.$route.path].tableComponents && CacheConfig.cacheData[this.$route.path].tableComponents.length > 0 ? CacheConfig.cacheData[this.$route.path].tableComponents: [
          {compKey: 'compKey1', labelName:  this.$t('org.label.carBrandCn')/*品牌*/, codeField: 'carBrandCode', component: () => import('@/components/org/carBrand/carBrand'), type: 'dropdownList', isMust: true},
          {compKey: 'compKey2', labelName: this.$t('ve.label.inboundOrderNO')/*入库单号*/, codeField: 'inStoreCode', component: () => import('@/components/org/commonInput'), type: 'inputText', isMust: true},
          {compKey: 'compKey3', labelName: this.$t('org.label.vin')/*VIN码*/, codeField: 'vin', component: () => import('@/components/org/commonInput'), type: 'inputText', isMust: true},
           {
          compKey: "compKey4",
          labelName: this.$t('org.label.warnHome')/*仓库*/,
          codeField: "carStockHouseId",
          component: () =>
            import("@/components/ve/hostFatoryWareHouse/wareHouseInput"),
          type: "propus",
          isMust: true
        },
        {compKey: 'compKey5', labelName:  this.$t('org.label.carType')/*车型*/, codeField: 'carConfigId', component: () => import('@/components/org/carTypeConfig'), type: 'propus', isMust: false},
         {compKey: 'compKey6', labelName: this.$t('org.label.carColor')/*车身颜色*/, codeField: 'carColorId', component: () => import('@/components/org/carColor'), type: 'propus', isMust: false},
         {compKey: 'compKey7', key: 'key1',labelName: this.$t('org.label.carIncolor')/*内饰色*/, codeField: 'carIncolorId', component: () => import('@/components/org/TrimPopupColor'), type: 'propus', isMust: false},
        {compKey: 'compKey8', labelName: this.$t('ve.label.inStockDateBegin')/*入库开始时间*/, codeField: 'inStoreDateBegin', component: () => import('@/components/org/datePicker/datePicker'), type: 'datePicker', dateOptionsType: '1', isMust: false },
       {compKey: 'compKey9', labelName: this.$t('ve.label.inStockDateEnd')/*入库结束时间*/, codeField: 'inStoreDateEnd', component: () => import('@/components/org/datePicker/datePicker'), type: 'datePicker', dateOptionsType: '1', isMust: false },
       {compKey: 'compKey10', labelName: this.$t('ve.label.InboundType')/*入库类型*/, lookuptype: 'VE0622', codeField: 'inStoreType', component: () => import('@/components/org/LookupValue'), type: 'dropdownList', isMust: false},
       {compKey: 'compKey11', labelName: this.$t('ve.label.importStartTime')/*导入开始时间*/, codeField: 'importDateBegin', component: () => import('@/components/org/datePicker/datePicker'), type: 'datePicker', dateOptionsType: '1', isMust: false },
        {compKey: 'compKey12', labelName: this.$t('ve.label.importEndTime')/*导入结束时间*/, codeField: 'importDateEnd', component: () => import('@/components/org/datePicker/datePicker'), type: 'datePicker', dateOptionsType: '1', isMust: false },
     {compKey: 'compKey13', labelName: this.$t('ve.label.parsingState')/*解析状态*/, lookuptype: 'VE0207', codeField: 'jiexiStatus', component: () => import('@/components/org/LookupValue'), type: 'dropdownList', isMust: false},
      {compKey: 'compKey14', labelName: this.$t('ve.label.parsingStartTime')/*解析开始时间*/, codeField: 'jiexiDateBegin', component: () => import('@/components/org/datePicker/datePicker'), type: 'datePicker', dateOptionsType: '1', isMust: false },
       {compKey: 'compKey15', labelName: this.$t('ve.label.parsingEndTime')/*解析结束时间*/, codeField: 'jiexiDateEnd', component: () => import('@/components/org/datePicker/datePicker'), type: 'datePicker', dateOptionsType: '1', isMust: false },
    ],
     // 动态生成网格列
      tableCols: CacheConfig.cacheData[this.$route.path] && CacheConfig.cacheData[this.$route.path].tableCols && CacheConfig.cacheData[this.$route.path].tableCols.length > 0 ? CacheConfig.cacheData[this.$route.path].tableCols: [
        { prop: 'carBrandCn', label: this.$t('org.label.carBrandCn')/*品牌*/, width: 200, align: 'center' },
        { prop: 'caSeriesCode', label: this.$t('org.label.carSeriesId')/*车系*/, width: 200, align: 'center' },
        { prop: 'carConfigCode', label: this.$t('org.label.carConfig')/*车型配置*/, width: 200, align: 'center' },
        { prop: 'carColorCode', label: this.$t('org.label.carColor')/*车身颜色*/, width: 200, align: 'center' },
        { prop: 'carIncolorCode', label: this.$t('org.label.carIncolor')/*内饰色*/, width: 200, align: 'center' },
        { prop: 'vin', label:  this.$t('org.label.vin')/*VIN码*/, width: 200, align: 'center' },
        { prop: 'produceFactory', label: this.$t('org.label.factory')/*工厂*/, width: 200, align: 'center' },
        { prop: 'carOutStockHouseId', label:  this.$t('org.label.warnHome')/*仓库*/, width: 200, align: 'center' },
        { prop: 'inStoreCode', label:  this.$t('org.label.carBrandCn')/*入库单号*/, width: 200, align: 'center' },
        { prop: 'saleReturnCode', label: this.$t('org.label.retreatNo')/*销退单号*/, width: 200, align: 'center' },
        { prop: 'inStoreDate', label: this.$t('ve.label.inStockDate')/*入库时间*/, width: 200, align: 'center' },
        { prop: 'inStoreType', label: this.$t('ve.label.InboundType')/*入库类型*/, width: 200, align: 'center' },
        { prop: 'shiftOutStockLimit', label: this.$t('ve.label.shiftOutStockLimitName')/*转库限制*/, width: 200, align: 'center' },
        { prop: 'leaseLimit', label: this.$t('ve.label.leaseLimitName')/*租借限制*/, width: 200, align: 'center' },
        { prop: 'pdiLimit', label: this.$t('ve.label.pdiName')/*PDI限制*/, width: 200, align: 'center' },
        { prop: 'overStoreLimit', label: this.$t('ve.label.overStoreLimitName')/*超库存限制*/, width: 200, align: 'center' },
        { prop: 'wlLimit', label: this.$t('ve.label.WLLimitName')/*物流限制*/, width: 200, align: 'center' },
        { prop: 'hostQualityState', label: this.$t('ve.label.quatityName')/*质量状态*/, width: 200, align: 'center' },
        { prop: 'creatorUserName', label: this.$t('ve.label.importer')/*导入人*/, width: 200, align: 'center' },
        { prop: 'createDate', label: this.$t('ve.label.importTime')/*导入时间*/, width: 200, align: 'center' },
        { prop: 'jiexiState', label: this.$t('ve.label.parsingState')/*解析状态*/, width: 200, align: 'center' },
        { prop: 'jiexiTime', label: this.$t('ve.label.analysisTime')/*解析时间*/, width: 200, align: 'center' },
        { prop: 'remark', label:this.$t('ve.label.remark')/*备注*/ , width: 200, align: 'center' },
      ],
      formField: {
        carBrandCode: "",
        inStoreCode:"",
        vin: "",
        carStockHouseId: "",
        carConfigId: "",
        carColorId: "",
        carIncolorId: "",
        inStoreDateBegin:"",
        inStoreDateEnd:"",
        inStoreType:"",
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
        apiConfig: veApis.veInStoreDel,
        //条件/实体参数（变量），根据typeParam中的定义配置
        variables: {
          //当前中台使用的名称有dataInfo、info，具体查看API文档
          dataInfo: {
            inStoreId:selectData[k].inStoreId,
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
        apiConfig: veApis.veInStoreImport,
        //条件/实体参数（变量），根据typeParam中的定义配置
        variables: {
          //当前中台使用的名称有dataInfo、info，具体查看API文档
          dataInfo: {
            produceFactory:selectData[k].produceFactory,
            carStockHouseCode:selectData[k].carOutStockHouseId,
            inStoreCode:selectData[k].inStoreCode,
            vin:selectData[k].vin,
            carConfigCode:selectData[k].carConfigCode,
            carColorCode:selectData[k].carColorCode,
            saleReturnCode:selectData[k].saleReturnCode,
            inStoreDate:selectData[k].inStoreDate,
            inStoreType:selectData[k].inStoreType,
            shiftOutStockLimit:selectData[k].shiftOutStockLimit == "" ? 0 :1,
            leaseLimit:selectData[k].leaseLimit == "" ? 0 :1,
            pdiLimit:selectData[k].pdiLimit == "" ? 0 :1,
            overStoreLimit:selectData[k].overStoreLimit == "" ? 0 :1,
            wlLimit:selectData[k].wlLimit == "" ? 0 :1,
            hostQualityState:selectData[k].hostQualityState == "OK" ? "A" : "B",
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
              message: this.$t("sys.tips.esTip18"),//导入成功"",
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
        apiConfig: veApis.veInStoreImport,
        //条件/实体参数（变量），根据typeParam中的定义配置
        variables: {
          //当前中台使用的名称有dataInfo、info，具体查看API文档
          dataInfo: {
            inStoreId:selectData[k].inStoreId,
            vin:selectData[k].vin,
            produceFactory:selectData[k].produceFactory,
            carOutStockHouseId:selectData[k].carOutStockHouseId,
            inStoreCode:selectData[k].inStoreCode,
            saleReturnCode:selectData[k].saleReturnCode,
            inStoreDate:selectData[k].inStoreDate,
            inStoreType:selectData[k].inStoreType,
            shiftOutStockLimit:selectData[k].shiftOutStockLimit,
            leaseLimit:selectData[k].leaseLimit,
            pdiLimit:selectData[k].pdiLimit,
            overStoreLimit:selectData[k].overStoreLimit,
            wlLimit:selectData[k].wlLimit,
            hostQualityState:this.formField.hostQualityState,
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
