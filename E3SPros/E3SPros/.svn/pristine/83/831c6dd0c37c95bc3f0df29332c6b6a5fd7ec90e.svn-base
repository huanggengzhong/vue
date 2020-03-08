<!--
* description: 车辆限制设置
* author: linwm
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
  name:"VecarRestricted",
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
      apiConfig: veApis.veCarLimit,
      // 动态组件-按钮
      tableButtons: [
        {compKey: 'btnKey1', type: 'primary', size: 'small', clickEvent: () => this.queryTable(1), text:  this.$t('sys.button.query')},/*查询*/
        {compKey: 'btnKey2', type: '', size: 'small', clickEvent: () =>this.synchrony('remark,limitId,hostLimitReasonId'), text: this.$t('sys.button.sync')},/*同步*/
        {compKey: 'btnKey3', type: '', size: 'small', clickEvent: () => this.saveTabCol(), text: this.$t('sys.button.save')}/*保存*/,
        {compKey: 'btnKey4', type: '', size: 'small', clickEvent: () => this.reset(), text: this.$t('sys.button.reset')}/*重置*/,
        {compKey: 'btnKey5', type: '', size: 'small', clickEvent: () => this.exportExcel(), text: this.$t('sys.button.export')}/*导出*/
      ],
      // 动态组件-查询条件
      tableComponents: CacheConfig.cacheData[this.$route.path] && CacheConfig.cacheData[this.$route.path].tableComponents && CacheConfig.cacheData[this.$route.path].tableComponents.length > 0 ? CacheConfig.cacheData[this.$route.path].tableComponents : [
        // 显示组件
        {compKey: 'compKey1', labelName: this.$t('org.label.carBrandCn')/*品牌*/, codeField: 'carBrandCode', component: () => import('@/components/org/carBrand/carBrand'), type: 'dropdownList', isMust: true},
        {compKey: 'compKey2', labelName: this.$t('ve.label.vin')/*VIN码*/, codeField: 'vin', component: () => import('@/components/org/commonInput'), type: 'inputText', isMust: true},
        {compKey: 'compKey3', labelName: this.$t('org.label.carConfig')/*车型*/, codeField: 'carConfigId', component: () => import('@/components/org/carTypeConfig'), type: 'propus', isMust: true},
        {compKey: 'compKey4', labelName: this.$t('org.label.carColor')/*车身颜色*/, codeField: 'carColorId', component: () => import('@/components/org/carColor'), type: 'propus', isMust: true},

       {compKey: 'compKey5', key: 'key1',labelName: this.$t('org.label.carIncolor')/*内饰色*/, codeField: 'carIncolorId', component: () => import('@/components/org/TrimPopupColor'), type: 'propus', isMust: false},
         // 触发弹窗组件（popups：为弹窗组件）
          {
          compKey: "compKey6",
          labelName: this.$t('org.label.warnHome')/*仓库*/,
          isRequire: true,
          codeField: "carStockHouseId",
          component: () =>
            import("@/components/ve/hostFatoryWareHouse/wareHouseInput"),
          type: "propus",
          isMul:false,
          isMust: false
        },
        {compKey: 'compKey7', key: 'key3',labelName: this.$t('org.label.limitId')/*限制状态*/, lookuptype: 'VE0213', codeField: 'limitId', component: () => import('@/components/org/LookupValue'), type: 'dropdownList', isMust: false},
        {compKey: 'compKey8', labelName: this.$t('org.label.LimitReason')/*限制原因*/, lookuptype: 'VE0627', codeField: 'hostLimitReasonId', component: () => import('@/components/org/LookupValue'), type: 'dropdownList', isMust: false},
     // 模块名称（是否ET/PT车）
        {compKey: "compKey9", labelName: this.$t('org.label.isEtPt')/*是否ET/PT车*/, codeField: "isEtPt", component: () => import("@/components/org/isEnable/isEnable"), type: "dropdownList",isMust: false },
        {compKey: 'compKey10', labelName: this.$t('org.label.quatityName')/*质量状态*/, lookuptype: 'VE0007', codeField: 'hostQualityState', component: () => import('@/components/org/LookupValue'), type: 'dropdownList', isMust: false},
        {compKey: 'compKey11', labelName:  this.$t('org.label.carHouseType')/*库存类型*/, lookuptype: 'VE0005', codeField: 'carHouseType', component: () => import('@/components/org/LookupValue'), type: 'dropdownList', isMust: false},
         {compKey: 'compKey12', labelName: this.$t('ve.label.moveStateName')/*车辆状态*/, lookuptype: 'VE0207', codeField: 'moveState', component: () => import('@/components/org/LookupValue'), type: 'dropdownList', isMust: false},
        // 日期控件
        {compKey: 'compKey13', labelName: this.$t('ve.label.inStockDateBegin')/*入库开始时间*/, codeField: 'inStockDateBegin', component: () => import('@/components/org/datePicker/datePicker'), type: 'datePicker', dateOptionsType: '1', isMust: false },
         {compKey: "compKey15", labelName: this.$t('ve.label.ifOnline')/*是否订单生产车型*/, codeField: "ifOnline", component: () => import("@/components/org/isEnable/isEnable"), type: "dropdownList",isMust: false },
         {compKey: "compKey16", labelName: this.$t('ve.label.isDisplay')/*库存是否显示*/, codeField: "isDisplay", component: () => import("@/components/org/isEnable/isEnable"), type: "dropdownList",isMust: false },
        {compKey: "compKey17",labelName: this.$t('ve.label.limitResonRemark')/*限制原因备注*/,codeField: "limitReson",component: () => import("@/components/org/commonInput"),type: "inputText",isMust: false},
      ],
      // 动态生成网格列
      tableCols: CacheConfig.cacheData[this.$route.path] && CacheConfig.cacheData[this.$route.path].tableCols && CacheConfig.cacheData[this.$route.path].tableCols.length > 0 ? CacheConfig.cacheData[this.$route.path].tableCols : [
        // { prop: 'remark', label: '限制原因备注', width: 200, align: 'center' },
        { prop: 'remark', label: this.$t('ve.label.limitResonRemark')+'+'/*限制原因备注+*/, width: 150, align: 'center', isComponent: true,
          comps: [{compKey: 'propKey2', isMul: false, isShowLabel: false, codeField: 'remark', clickEvent: () => null, component: () => import('@/components/org/commonInput')}]
        },
        // { prop: 'hostLimitState', label: '限制状态', width: 200, align: 'center' },
        // { prop: 'limitId', label: '限制状态ID', width: 200, align: 'center', hidden: true },
        // { prop: 'limitReason', label: '限制原因', width: 200, align: 'center' },
        { prop: 'limitId', label: this.$t('org.label.limitId')/*限制状态+*/+'+', width: 150, align: 'center', isComponent: true,
          comps: [{compKey: 'propKey2', isMul: false, isShowLabel: false, codeField: 'limitId', clickEvent: () => null, component: () => import('@/components/org/LookupValue')}]
        },
        { prop: 'hostLimitReasonId', label: this.$t('org.label.LimitReason')/*限制原因+*/+'+', width: 150, align: 'center', isComponent: true,
          comps: [{compKey: 'propKey2', isMul: false, isShowLabel: false, codeField: 'hostLimitReasonId', clickEvent: () => null, component: () => import('@/components/org/LookupValue')}]
        },
        { prop: 'isDisplay', label:  this.$t('ve.label.isDisplay')/*库存是否显示*/, width: 120, align: 'center' },
        { prop: 'vin', label: this.$t('ve.label.vin')/*VIN码*/, width: 200, align: 'center' },
        { prop: 'carConfigCode', label: this.$t('org.label.carConfig')/*车型*/, width: 200, align: 'center' },
        { prop: 'carColorCode', label: this.$t('org.label.carColor')/*车身颜色*/, width: 200, align: 'center' },
        { prop: 'carIncolorCode', label:this.$t('org.label.carIncolor')/*内饰色*/, width: 200, align: 'center'},
        { prop: 'carBrandCode', label: this.$t('org.label.carBrandCn')/*品牌*/, width: 200, align: 'center' },
        { prop: 'carSeriesCode', label: this.$t('org.label.carSerise')/*车系*/, width: 200, align: 'center' },
        { prop: 'engineNo', label:  this.$t('ve.label.engineNo')/*发动机号*/, width: null, align: 'center' },
        { prop: 'carHouseCode', label:this.$t('org.label.warnHome')/*仓库*/, width: 200, align: 'center' },
        { prop: 'carHouseTypeName', label: this.$t('org.label.carHouseType')/*库存类型*/, width: 200, align: 'center' },
        { prop: 'inStockDate', label: this.$t('ve.label.inStockDate')/*入库日期*/, width: 200, align: 'center' },
        { prop: 'firstPreInStockDate', label: this.$t('ve.label.preInStockDate2')/*预计入库日期*/, width: 200, align: 'center' },
        { prop: 'pdiLimit', label:  this.$t('ve.label.pdiLimit')/*主机厂PDI限制*/, width: 200, align: 'center' },
        { prop: 'isWaterCarname', label: this.$t('ve.label.isWaterCarname')/*水浸车标识*/, width: 200, align: 'center' },
        { prop: 'quatityName', label:this.$t('org.label.quatityName')/*质量状态*/, width: 200, align: 'center' },
        { prop: 'isEtPt', label: this.$t('org.label.isEtPt')/*是否ET/PT车*/, width: 200, align: 'center' },
        { prop: 'carId', label: this.$t('org.label.carId')/*车籍ID*/, width: 200, align: 'center' },
        { prop: 'updateControlId', label: this.$t('org.label.updateControlId')/*并发控制*/, width: 0, align: 'center', hidden: true }
      ],
      //表单查询数据（查询条件）
      formField:{
        carBrandCode: '',
        vin: '',
        carConfigId: '',
        carColorId:'',
        carIncolorId:'',
        carStockHouseId:"",
        limitId:'',
        hostLimitReasonId:'',
        isEtPt:'',
        hostQualityState:'',
        carHouseType:"",
        moveState:'',
        inStockDateBegin:'',
        ifOnline:'',
        isDisplay:'',
        limitReson:''
      }
    }
  },
  methods: {
         saveTabCol(){
      const that = this.$refs.multipleTable;
      let saveState = true;
      let saveCount = 0;
      let msg = '';
      let selectData = that.$refs.multipleTable.selection;
      if (selectData.length < 1) {
        that.$message({
          message:  this.$t('org.message.selectSaveInfo')/*保存成功*/,
          type: 'warning',
          duration: 2000
        });
        return;
      }
        for(var k in selectData){
        let queryObj = {
          // 保存mutation
          type: 'mutation',
          // api配置
          apiConfig: veApis.varCarLimitSave,
          variables: {
            //当前中台使用的名称有dataInfo、info，具体查看API文档
            dataInfo: {
              carBrandCode: selectData[k].carBrandCode,
              carId: selectData[k].carId,
              limitId:selectData[k].limitId,
              hostLimitReasonId: selectData[k].hostLimitReasonId,
              remark: selectData[k].remark,
              isDisplay: selectData[k].isDisplay,
              isWaterCar: selectData[k].isWaterCar,
            //   userId: selectData[k].userId,
              updateControlId	: selectData[k].updateControlId,
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
              type: 'success',
              duration: 2000
            });
            that.queryTable(1);
          }
        });
      }
   }
  },
}
</script>
