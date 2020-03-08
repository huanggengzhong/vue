<!--
* description: 经销商订单预测
* author: linzewen
* createdDate: 2019-08-07
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
      :dynamicIsShowSelect="false"
      :dynamicIsColumnDrop="true"
    />
    <theryStockDialog
      @changeCode="handDialogVisibleFunc"
      :dialogVisible="dialogVisible"
    />
  </div>
</template>
<script>
import { oneTableWithViewTemplateMixins } from '@/components/mixins/oneTableWithViewTemplateMixins';
import { valueObjectMixins } from '@/components/mixins/valueObjectMixins';
import { veApis } from "@/api/graphQLApiList/ve";
import { requestGraphQL } from "@/api/commonRequest";
import OneTableTemplate from "@/components/templates/oneTable";
import theryStockDialog from "./testDialog";
import { CacheConfig } from '@/cache/configCache/index'

export default {
  name: "vedlrOrderPreject",
  // 组件混入对象：{data[listQuery] methods[queryTable]}
  mixins: [oneTableWithViewTemplateMixins, valueObjectMixins ],
  components: {
    OneTableTemplate,
    theryStockDialog
  },
  created() {
    this.setDate();
  },
  // 阻塞路由预加载网格中组件的数据
 beforeRouteEnter(to, from, next) {
  CacheConfig.initData(to.path, function(){next()})
 },
  data() {
    return {
      // 网格查询API配置对象
      apiConfig: veApis.veOrderForecast,
      ellipsisshow: false,

      currentRow: null,
      dialogVisible: false,
      formField: {
        carBrandCode: "",
        drlId: "",
        deliveryDateBegin: "",
        deliveryDateEnd: "",
        carConfigId: ""
      },


      // 动态组件-按钮
      tableButtons: [
        {compKey: 'btnKey1', type: 'primary', size: 'small', clickEvent: () => this.queryTableNew(), text: this.$t('sys.button.query')/*查询*/},
        {compKey: 'btnKey2', type: '', size: 'small', clickEvent: () => this.openDialog(), text:this.$t('ve.label.theoreticalInventoryCycleSetting')/*理论库存周期设置*/ },
        {compKey: 'btnKey3', type: '', size: 'small', clickEvent: () => this.reset(), text: this.$t('sys.button.reset')/*重置*/},
        {compKey: 'btnKey4', type: '', size: 'small', clickEvent: () => this.exportExcel(), text: this.$t('sys.button.export')/*导出*/}
      ], // 动态组件-查询条件
      tableComponents: CacheConfig.cacheData[this.$route.path] && CacheConfig.cacheData[this.$route.path].tableComponents && CacheConfig.cacheData[this.$route.path].tableComponents.length > 0 ? CacheConfig.cacheData[this.$route.path].tableComponents: [
        {compKey: 'compKey1', labelName: this.$t('org.label.carBrandCn')/*品牌*/, isRequire: true, codeField: 'carBrandCode', component: () => import('@/components/org/carBrand/carBrand'), type: 'dropdownList', isMust: true},
        {compKey: 'compKey2', labelName: this.$t('org.label.dlrName')/*经销商*/, isRequire: true, codeField: 'drlId', component: () => import('@/components/org/orgDlr'), type: 'propus', isMust: true},
        // {compKey: 'compKey2', labelName: '经销商', codeField: 'drlId', component: () => import('@/components/org/commonInput/searchInput'), type: 'popupsInput', isMust: true, isRequire: true,
        //  popups: {type: 'propus', key: 'key1', isRequire: true, state: false, component: () => import('@/components/org/orgDlr')}},
        {compKey: 'compKey4', labelName: this.$t('ve.label.deliveryDateBegin')/*交车开始日期*/, codeField: 'deliveryDateBegin', isRequire: true, component: () => import('@/components/org/datePicker/datePicker'), type: 'datePicker', dateType:'month' ,format:'yyyy-MM', dateOptionsType: '0', isMust: true },
        {compKey: 'compKey5', labelName: this.$t('ve.label.deliveryDateEnd')/*交车结束日期*/, codeField: 'deliveryDateEnd', isRequire: true, component: () => import('@/components/org/datePicker/datePicker'), type: 'datePicker', dateType:'month' ,format:'yyyy-MM' ,dateOptionsType: '0', isMust: true },
        {compKey: 'compKey3', labelName: this.$t('org.label.carConfig')/*车型配置*/, codeField: 'carConfigId', component: () => import('@/components/org/carTypeConfig'), type: 'propus', isMust: false},
        // {compKey: 'compKey3', labelName: '车型配置', codeField: 'carConfigId', component: () => import('@/components/org/commonInput/searchInput'), type: 'popupsInput', isMust: false,
        //  popups: {type: 'propus', key: 'key2', state: false, component: () => import('@/components/org/carTypeConfig')}},
      ],
      // 动态生成网格列
      tableCols: CacheConfig.cacheData[this.$route.path] && CacheConfig.cacheData[this.$route.path].tableCols && CacheConfig.cacheData[this.$route.path].tableCols.length > 0 ? CacheConfig.cacheData[this.$route.path].tableCols: [
        { prop: 'carBrandName', label: this.$t('org.label.carBrand')/*品牌*/, width: 150, align: 'center' },
        { prop: 'dlrShortName', label: this.$t('org.label.dlrName')/*经销商*/, width: 150, align: 'center' },
        { prop: 'carSeriesName', label: this.$t('org.label.carSerise')/*车系*/, width: 90, align: 'center' },
        { prop: 'carConfig', label: this.$t('org.label.carType')/*车型*/, width: 150, align: 'center' },
        { prop: 'carConfigName', label: this.$t('org.label.carConfig')/*车型配置*/, width: 150, align: 'center' },
        { prop: 'referenceDelivery', label: this.$t('ve.label.referenceDelivery')/*参考月交车实绩*/, width: 150, align: 'center' },
        { prop: 'stockRt', label: this.$t('ve.label.stockRt')/*本月实时库存*/, width: 150, align: 'center' },
        { prop: 'safeStock', label: this.$t('ve.label.safeStock')/*安全库存周期*/, width: 150, align: 'center' },
        { prop: 'baseStock', label: this.$t('ve.label.baseStock')/*理论安全库存周期*/, width: 150, align: 'center' },
        { prop: 'monthDelivery', label: this.$t('ve.label.monthDelivery')/*本月车型交车实绩*/, width: 150, align: 'center' },
        { prop: 'refMessure', label: this.$t('ve.label.refMessure')/*车型理论订单预测数*/, width: 150, align: 'center' },
      ],
    };
  },
  methods: {
    // 查询校验
    queryTableNew(){
      const that = this;
      // if (that.$utils.isEmpty(that.formField.carBrandCode)) {
      //   that.$message({
      //     message: "请选择品牌",
      //     type: "warning",
      //     duration: 2000
      //   });
      //   return;
      // }
      // if (that.$utils.isEmpty(that.formField.drlId)) {
      //   that.$message({
      //     message: "请选择经销商",
      //     type: "warning",
      //     duration: 2000
      //   });
      //   return;
      // }
      this.queryTable(1);
    },
    // 设置默认日期
    setDate(){
      var d = new Date();
      this.formField.deliveryDateBegin = d.getFullYear() + '-' + d.getMonth()
      this.formField.deliveryDateEnd = d.getFullYear() + '-' + d.getMonth()
 //     d.setFullYear(d.getFullYear(),d.getMonth());
    },
    // 弹窗出现方法
    openDialog() {
      this.dialogVisible = true;
    },
    // 不知道干嘛用的，先放在这里
    handDialogVisibleFunc(val) {
      // debugger
      this.dialogVisible = false;
    },
  }
};
</script>
<style scoped>
/*按钮列移动到面包屑重合位置*/

.editSysPosition {
  height: 600px;
}
/deep/.ellipsisshowName {
    position: fixed;
    background: #c0c4cc7a;
    padding: 5px;
    border-radius: 5px;
    z-index: 3000;
}
</style>
