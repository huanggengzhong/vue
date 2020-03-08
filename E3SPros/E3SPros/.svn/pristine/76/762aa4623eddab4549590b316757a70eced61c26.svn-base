<!--
* description: 客户销退状态查询
* author: ydche
* createdDate: 2019-10-09
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

import { oneTableWithViewTemplateMixins } from '@/components/mixins/oneTableWithViewTemplateMixins'
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
      apiConfig:veApis.carSellSetMock1,
       // 动态组件-按钮
      tableButtons: [
        {compKey: 'btnKey1', type: 'primary', size: 'small', clickEvent: () => this.queryTable(1), text:this.$t('sys.button.query')},//查询
        {compKey: 'btnKey5', type: '', size: 'small', clickEvent: () => this.reset(), text: this.$t('sys.button.reset')},//重置
        {compKey: 'btnKey2', type: '', size: 'small', clickEvent: () => this.exportExcel(), text: this.$t('sys.button.export')},//导出
      ],
      // 动态组件-查询条件
      tableComponents: CacheConfig.cacheData[this.$route.path] && CacheConfig.cacheData[this.$route.path].tableComponents && CacheConfig.cacheData[this.$route.path].tableComponents.length > 0 ? CacheConfig.cacheData[this.$route.path].tableComponents: [
        {compKey: 'compKey10', labelName: this.$t('org.label.carBrandCn')/*品牌*/, codeField: 'carBrandCode', component: () => import('@/components/org/carBrand/carBrand'), type: 'dropdownList', isMust: true},
        {compKey: 'compKey1', labelName: this.$t('ve.label.clientName')/*客户名称*/, codeField: 'outStoreCode', component: () => import('@/components/org/commonInput'), type: 'inputText', isMust: true},
        {compKey: 'compKey4', labelName: this.$t('org.label.vin')/*VIN码*/, codeField: 'vin', component: () => import('@/components/org/commonInput'), type: 'inputText', isMust: true},
        {compKey: 'compKey3', labelName: this.$t('org.label.carConfig')/*车型*/,parentFileds:'carBrandCode', codeField: 'carConfigId', component: () => import('@/components/org/carTypeConfig'), type: 'propus', isMust: true},
        {compKey: 'compKey8', labelName:  this.$t('ve.label.applyDate')/*申请日期*/, codeField: 'outStoreDateBegin', component: () => import('@/components/org/datePicker/datePicker'), type: 'datePicker', dateOptionsType: '1', isMust: false },
        {compKey: 'compKey9', labelName:  this.$t('ve.label.to')/*至*/, codeField: 'outStoreDateEnd', component: () => import('@/components/org/datePicker/datePicker'), type: 'datePicker', dateOptionsType: '1', isMust: false },
        { compKey: "compKey2",
          labelName:this.$t('ve.label.receiptState') ,/*单据状态*///
          lookuptype: "VE0039",
          codeField: "carSeriesCode",
          component: () => import("@/components/org/LookupValue"),
          type: "dropdownList",
          isMust: false
        },
    ],
     // 动态生成网格列
      tableCols: CacheConfig.cacheData[this.$route.path] && CacheConfig.cacheData[this.$route.path].tableCols && CacheConfig.cacheData[this.$route.path].tableCols.length > 0 ? CacheConfig.cacheData[this.$route.path].tableCols: [
        { prop: 'contractCode', label: this.$t('ve.label.retreatNo')/*销退单号*/, width: 180, align: 'center' },
        { prop: 'orderNums', label: this.$t('ve.label.orderNums')/*订单编号*/, width: 180, align: 'center' },
        { prop: 'contractCode', label: this.$t('ve.label.contractCode')/*合同编号*/, width: 180, align: 'center' },
        { prop: 'type', label: this.$t('ve.label.documentType')/*单据类型*/, width: 80, align: 'center' },
        { prop: 'carBrandCn', label: this.$t('org.label.carBrandCn')/*品牌*/, width: 100, align: 'center' },
        { prop: 'comName', label: this.$t('ve.label.clientName')/*客户名称*/, width: 80, align: 'center' },
        { prop: 'phone', label: this.$t('ve.label.phone')/*联系电话*/, width: 110, align: 'center' },
        { prop: 'receiptState', label: this.$t('ve.label.receiptState')/*单据状态*/, width: 100, align: 'center' },
        { prop: 'doneDate', label:  this.$t('ve.label.applyDate')/*申请日期*/, width: 100, align: 'center' },
        { prop: 'comName', label: this.$t('ve.label.salesConsultant')/*销售顾问*/, width: 80, align: 'center' },
        { prop: 'reson', label:  this.$t('ve.label.retreatReason')/*销退原因*/, width: 120, align: 'center' },
        { prop: 'specialAmount', label:  this.$t('ve.label.fine')/*罚金*/, width: 100, align: 'center' },
        { prop: 'vin', label:  this.$t('org.label.vin')/*vin码*/, width: 180, align: 'center' },
        { prop: 'carSeriesCn', label: this.$t('ve.label.smallCarTypeCn')/*车型中文名*/, width: 120, align: 'center' },
        { prop: 'carConfigCn', label: this.$t('ve.label.carConfig')/*车型配置 */, width: 180, align: 'center' },
        { prop: 'carColorCode', label: this.$t('ve.label.carColor')/*车身颜色*/, width: 120, align: 'center' },
        { prop: 'carIncolorCode', label: this.$t('org.label.carIncolor')/*内饰色*/, width: 120, align: 'center' },
        // { prop: 'optionalPackage', label: this.$t('org.label.optionalPackage')/*选装包*/, width: 120, align: 'center' },
        { prop: 'remark', label: this.$t('ve.label.remark')/*备注*/, width: 120, align: 'center' },
        { prop: 'specialAmount', label: this.$t('ve.label.carSalesPrice')/*车辆销售价格*/, width: 120, align: 'center' },
        { prop: 'specialAmount', label: this.$t('ve.label.contractReceivable')/*合同应收款*/, width: 120, align: 'center' },
        { prop: 'specialAmount', label: this.$t('ve.label.paidFor')/*已收款*/, width: 120, align: 'center' },
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
      custResAppDlaKey:'custResAppDlaKey',
      custResAppDlaVisible:false,

    };
  },
methods:{
    retreat(){
        let that = this.$refs.multipleTable
        let selData = that.$refs.multipleTable.selection
        if(selData.length === 0){
            this.$message({ message:this.$t('org.message.selOneData')/*请选择一条数据*/ , type: 'warning' });
			    return false;
        }
        if(selData.length > 1){
            this.$message({ message:this.$t('org.message.onlyOneData')/*只能选择一条数据*/ , type: 'warning' });
			    return false;
        }
        this.editPopupsState = 'edit'
        this.editRowData = selData[0]
        console.log(this.editRowData)
        this.custResAppDlaVisible = true
        this.custResAppDlaKey = this.$utils.generateId()
    },
    close(){
        this.custResAppDlaVisible = false
    }
}


};
</script>
