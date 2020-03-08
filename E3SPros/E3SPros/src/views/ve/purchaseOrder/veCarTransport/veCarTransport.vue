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
  name:"veCarTransport",
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
      apiConfig: veApis.vePurOrderQuery,
      // 动态组件-按钮
      tableButtons: [
        {compKey: 'btnKey1', type: 'primary', size: 'small', clickEvent: () => this.queryTable(1), text: this.$t("sys.button.query")   //查询
        },

        {compKey: 'btnKey3', type: '', size: 'small', clickEvent: () => this.reset(), text: this.$t("sys.button.reset")  },//重置
        {compKey: 'btnKey2', type: '', size: 'small', clickEvent: () => this.rejectOrder(), text: this.$t("sys.button.save")  },//保存
      ],
      // 动态组件-查询条件
      tableComponents: CacheConfig.cacheData[this.$route.path] && CacheConfig.cacheData[this.$route.path].tableComponents && CacheConfig.cacheData[this.$route.path].tableComponents.length > 0 ? CacheConfig.cacheData[this.$route.path].tableComponents: [
        // 显示组件
        {compKey: 'compKey1', labelName: this.$t("org.label.carBrandCn")/*品牌*/,isMul:false, codeField: 'carBrandCode', component: () => import('@/components/org/carBrand/carBrand'), type: 'dropdownList', isMust: true},
         {compKey: 'compKey4', labelName: this.$t("org.label.dlrName")/*经销商*/, codeField: 'dlr', component: () => import('@/components/org/commonInput/searchInput'), type: 'popupsInput', isMust: true,
         popups: {type: 'propus', key: 'key1', state: false, component: () => import('@/components/org/orgDlr')}},
         {compKey: 'compKey3', labelName: this.$t('ve.label.vin')/*VIN码*/, codeField: 'vin', component: () => import('@/components/org/commonInput'), type: 'inputText', isMust: true},
        {compKey: 'compKey2', labelName: this.$t('ve.label.purOrderCode')/*采购单号*/, codeField: 'purOrderCode', component: () => import('@/components/org/commonInput'), type: 'inputText', isMust: true},
         {compKey: 'compKey5', labelName: this.$t('ve.label.purchaseOrderTypeCode')/*采购单类型*/,parentFileds: "carBrandCode-carBrandCode", codeField: 'purchaseOrderTypeCode', component: () => import('@/components/ve/PurchaseOrderType'), type: 'dropdownList', isMust: false},
        {compKey: 'compKey6', labelName: this.$t('org.label.carType')/*车型*/, codeField: 'carConfigId', component: () => import('@/components/org/carTypeConfig'), type: 'propus', isMust: false},
        {compKey: 'compKey7', labelName: this.$t('org.label.carColor')/*车身颜色*/, codeField: 'carColorId', component: () => import('@/components/org/carColor'), type: 'propus', isMust: false},
        {compKey: 'compKey8', labelName: this.$t('org.label.carIncolor')/*内饰色*/, codeField: 'carIncolorId', component: () => import('@/components/org/TrimPopupColor'), type: 'propus', isMust: false},
        {compKey: 'compKey9', labelName: this.$t('ve.label.purStatus')/*采购单子单状态*/, lookuptype: 'VE0279', codeField: 'purStatus', component: () => import('@/components/org/LookupValue'), type: 'dropdownList', isMust: false},
        {compKey: 'compKey10', labelName:  this.$t('ve.label.wlStatus')/*物流状态*/, lookuptype: 'VE0047', codeField: 'wlStatus', component: () => import('@/components/org/LookupValue'), type: 'dropdownList', isMust: false},

      ],
      // 动态生成网格列
      tableCols: CacheConfig.cacheData[this.$route.path] && CacheConfig.cacheData[this.$route.path].tableCols && CacheConfig.cacheData[this.$route.path].tableCols.length > 0 ? CacheConfig.cacheData[this.$route.path].tableCols: [
         { prop: 'vlStatusName', label: this.$t('ve.label.wlStatus')/*物流状态*/, width: 150, align: 'center' },
        { prop: 'NextVIStatusName', label: this.$t('ve.label.NextVIStatusName')/*物流状态*/, width: 180, align: 'center', },
        { prop: 'carBrandCn', label: this.$t("org.label.carBrandCn")/*品牌*/, width: 160, align: 'center'},
        { prop: 'dlrShortName', label: this.$t("org.label.dlrName")/*经销商*/, width: 180, align: 'center',  },
        { prop: 'purOrderCode', label:  this.$t("ve.label.PurMasNumber")/*采购主单号*/, width: 180, align: 'center' },
        { prop: 'purOrderTypeName', label: this.$t('ve.label.purchaseOrderTypeCode')/*采购单类型*/, width: 100, align: 'center' },
        { prop: 'purOrderDCode', label: this.$t('ve.label.purchaseOrderTypeCode')/*采购子单号*/, width: 200, align: 'center' },
        { prop: 'purState', label: this.$t('ve.label.purState')/*子单状态*/, width: 80, align: 'center' },

        { prop: 'carSeriseName', label:  this.$t('ve.label.carSeries')/*车系*/, width: 130, align: 'center' },

        { prop: 'carConfigName', label:  this.$t('ve.label.carConfigName')/*车型配置*/, width: 120, align: 'center' },

        { prop: 'carColorName', label: this.$t('ve.label.carColor')/*车身颜色*/, width: 130, align: 'center' },

        { prop: 'carIncolorName', label:  this.$t('ve.label.carIncolor')/*内饰色*/, width: 130, align: 'center' },
        { prop: 'vin', label: 'VIN', width:170, align: 'center' },
       { prop: 'assignNo', label:  this.$t('ve.label.assignNo')/*分配号*/, width:130, align: 'center' },
        { prop: 'lastLogisticsTime', label:  this.$t('ve.label.lastLogisticsTime')/*物流执行计划时间*/, width: 180, align: 'center' },
        { prop: 'lastDeliveryTime', label:  this.$t('ve.label.lastDeliveryTime')/*送车通知时间*/, width: 180, align: 'center' },
        { prop: 'lastOutStockTime', label: this.$t('ve.label.lastOutStockTime')/*出库时间*/ , width: 180, align: 'center' },
        { prop: 'lastOutDoorTime', label:  this.$t('ve.label.lastOutDoorTime')/*出门时间*/, width: 180, align: 'center' },
        { prop: 'updateControlId', label: '并发控制', width: null, align: 'center', hidden: true },
        { prop: 'purOrderDId', label: '采购子单ID', width: null, align: 'center', hidden: true }
      ],
      //表单查询数据（查询条件）
      formField:{
        carBrandCode: '',
        drlId:'',
        vin: '',
        purOrderCode: '',
        purchaseOrderTypeId: '',
        configCode: '',
        carColorId: '',
        carIncolorId: '',
        purStatus: '',
        wlStatus: '',
      }
    }
  },
  methods: {
    //保存
    rejectOrder(){
      const that = this.$refs.multipleTable;
      let saveState = true;
      let saveCount = 0;
      let msg = '';

      let selectData = that.$refs.multipleTable.selection;
      if (selectData.length !=1) {
        that.$message({
          message:  this.$t('org.message.selOneData')/*请选择一条数据的数据*/,
          type: 'warning',
          duration: 2000
        });
        return;
      }
      let saveRow = {

      }
      let queryObj = {
          // 保存mutation
          type: 'mutation',
          // api配置
          apiConfig: veApis.vePurOrderVlStatus,
          variables: {
            //当前中台使用的名称有dataInfo、info，具体查看API文档
            dataInfo: {
                carBrandCode: selectData[0].carBrandCn,
                viStatus:selectData[0].NextVIStatusName,
                updateControlId:selectData[0].updateControlId,
                purOrderDId:selectData[0].purOrderDId
            }
          }
        };
        //转换了中台请求格式数据
        var paramD = that.$getParams(queryObj);
        // 调用中台API方法（可复用）
        that.$requestGraphQL(paramD).then(response =>{
          if (response.data[queryObj.apiConfig.ServiceCode].result === '1') {
            saveCount++;
          } else {
            saveState = false;
            msg = response.data[queryObj.apiConfig.ServiceCode].msg;
            that.$message({
              message: msg,
              type: 'warning',
              duration: 2000
            });
          }
          if (saveCount == selectData.length) {
            that.$message({
              message: this.$t('sys.tips.esTip5')/*保存成功*/,
              type: 'warning',
              duration: 2000
            });

            that.queryTable(1);
          }
        });

    }
  }
}
</script>
<style lang="scss" scoped>
/deep/ .el-input__inner {
    height: 28px;
}
</style>
