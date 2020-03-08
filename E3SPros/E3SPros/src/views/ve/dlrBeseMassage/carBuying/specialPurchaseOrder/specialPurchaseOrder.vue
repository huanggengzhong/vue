<!--
* description: 特殊采购单发起
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
    <omePlantInventory
      :popupsVisible="omePlantInventoryVisible"
      :key="omePlantInventoryKey"
      ref="omePlantInventory"
    ></omePlantInventory>
    <transferToImport
      :popupsVisible="transferToImportVisible"
      :key="transferToImportKey"
      ref="transferToImport"
    ></transferToImport>
  </div>
</template>
<script>
import { oneTableWithViewTemplateMixins } from '@/components/mixins/oneTableWithViewTemplateMixins'
import { veApis } from '@/api/graphQLApiList/ve'
import omePlantInventory from "@/components/ve/omePlantInventory";
import transferToImport from "@/components/ve/transferToImport";
import OneTableTemplate from '@/components/templates/oneTable'
import { CacheConfig } from '@/cache/configCache/index'
export default {
  name: "logisticsCheckout",
  // 组件混入对象：{data[listQuery] methods[queryTable]}
  mixins: [oneTableWithViewTemplateMixins],
  components: {
    OneTableTemplate,omePlantInventory,transferToImport
  },
  // 阻塞路由预加载网格中组件的数据
 beforeRouteEnter(to, from, next) {
  CacheConfig.initData(to.path, function(){next()})
 },
  data() {
    return {
        omePlantInventoryVisible:false,
        omePlantInventoryKey:'omePlantInventoryKey',
        transferToImportVisible:false,
        transferToImportKey:'transferToImportKey',
      // 网格查询API配置对象
      apiConfig:veApis.distribAchieApi1,
       // 动态组件-按钮
      tableButtons: [
        {compKey: 'btnKey1', type: '', size: 'small', clickEvent: () => this.reset(), text: this.$t('sys.button.allSync')},//全部同步
        {compKey: 'btnKey2', type: 'primary', size: 'small', clickEvent: () => this.queryTable(1), text:this.$t('sys.button.query')},//查询
        {compKey: 'btnKey3', type: '', size: 'small', clickEvent: () => this.synchrony(), text: this.$t('sys.button.sync')},//同步
        {compKey: 'btnKey4', type: '', size: 'small', clickEvent: () => this.transImport(), text: this.$t('ve.label.transferImport')},//转到导入
        {compKey: 'btnKey5', type: '', size: 'small', clickEvent: () => this.genPurOrder(), text: this.$t('ve.label.generatePurchaseOrder')},//生成采购单
        {compKey: 'btnKey6', type: '', size: 'small', clickEvent: () => this.openOmePlantInventory(), text: this.$t('ve.label.OEMPlantinventory')},//主机厂库存
        {compKey: 'btnKey7', type: '', size: 'small', clickEvent: () => this.reset(), text: this.$t('sys.button.reset')},//重置
      ],
      // 动态组件-查询条件
      tableComponents: CacheConfig.cacheData[this.$route.path] && CacheConfig.cacheData[this.$route.path].tableComponents && CacheConfig.cacheData[this.$route.path].tableComponents.length > 0 ? CacheConfig.cacheData[this.$route.path].tableComponents: [

        {compKey: 'compKey10', labelName: this.$t('org.label.carBrandCn')/*品牌*/, codeField: 'carBrandCode', component: () => import('@/components/org/carBrand/carBrand'), type: 'dropdownList', isMust: true},
        {compKey: 'compKey2', labelName: this.$t("org.label.dlrShortName") /**经销商简称*/, codeField: 'dlrId', component: () => import('@/components/org/orgDlr'), type: 'propus',isRequire: true, isMust: true},
        {compKey: 'compKey4', labelName: this.$t('org.label.vin')/*VIN码*/, codeField: 'vin', component: () => import('@/components/org/commonInput'), type: 'inputText', isMust: true},
        {compKey: 'compKey3', labelName: this.$t('org.label.carConfig')/*车型*/, codeField: 'carConfigId', parentFileds:'carBrandCode', component: () => import('@/components/org/carTypeConfig'), type: 'propus', isMust: true},
        {compKey: 'compKey5', labelName: this.$t('org.label.carColor')/*车身颜色*/, codeField: 'carColorId', component: () => import('@/components/org/carColor'), type: 'propus', isMust: false},
        {compKey: 'compKey1', labelName: this.$t('org.label.carIncolor')/*内饰色*/, codeField: 'carIncolorId', component: () => import('@/components/org/TrimPopupColor'), type: 'propus', isMust: false},
        {compKey: 'compKey6', labelName: this.$t('org.label.warnHome')/*仓库*/, lookuptype: 'VE0079', codeField: 'carStockHouseId', component: () => import('@/components/org/LookupValue'), type: 'dropdownList', isMust: false},
        {compKey: 'compKey7', labelName: this.$t('org.label.carHouseType')/*库存类型*/, lookuptype: 'VE0079', codeField: 'carHouseType', component: () => import('@/components/org/LookupValue'), type: 'dropdownList', isMust: false},
        {compKey: 'compKey8', labelName: this.$t('ve.label.StartDate')/*开始日期*/, codeField: 'offLineDateBegin', component: () => import('@/components/org/datePicker/datePicker'), type: 'datePicker', dateOptionsType: '0', isMust: false },
        {compKey: 'compKey9', labelName: this.$t('ve.label.to')/*至*/, codeField: 'offLineDateBegin', component: () => import('@/components/org/datePicker/datePicker'), type: 'datePicker', dateOptionsType: '0', isMust: false },
        {compKey: 'compKey11',
          labelName: this.$t('ve.label.LongInventoryStatus'),//长期库存状态
           lookuptype: 'VE0188',
           codeField: 'roleOrgType',
           component: () => import('@/components/org/LookupValue'),
           type: 'dropdownList', isMust: false
        },
        {compKey: 'compKey12',
          labelName: this.$t('ve.label.getETPTCode'),//ETPT车
           lookuptype: 'VE0079',
           codeField: 'roleOrgType',
           component: () => import('@/components/org/LookupValue'),
           type: 'dropdownList', isMust: false
        },
        {compKey: 'compKey13', key: 'key3',labelName:this.$t('org.label.limitId')/*限制状态*/, lookuptype: 'VE0213', codeField: 'limitId', component: () => import('@/components/org/LookupValue'), type: 'dropdownList', isMust: false},
        {compKey: 'compKey14', labelName: this.$t('org.label.LimitReason')/*限制原因*/, lookuptype: 'VE0627', codeField: 'hostLimitReasonId', component: () => import('@/components/org/LookupValue'), type: 'dropdownList', isMust: false},
        {compKey: 'compKey15', labelName: this.$t('ve.label.areaIdentification')/*地区标识*/, lookuptype: 'VE0627', codeField: 'hostLimitReasonId', component: () => import('@/components/org/LookupValue'), type: 'dropdownList', isMust: false},
        {compKey: 'compKey16', labelName: this.$t('ve.label.moveStateName')/*车辆状态*/, lookuptype: 'VE0207', codeField: 'moveState', component: () => import('@/components/org/LookupValue'), type: 'dropdownList', isMust: false},
        {compKey: 'compKey17', labelName: this.$t('ve.label.quantity')/*数量*/, codeField: 'vin', component: () => import('@/components/org/commonInput'), type: 'inputText', isMust: false},
        {compKey: 'compKey18', labelName: this.$t('ve.label.PDILimitStatus')/*PDI限制状态*/, lookuptype: 'VE0207', codeField: 'moveState', component: () => import('@/components/org/LookupValue'), type: 'dropdownList', isMust: false},
        {compKey: 'compKey19', labelName: this.$t('ve.label.inNoModelsAvailable')/*包含不供应车型*/, codeField: 'vins', component: () => import('@/components/org/checkBox'),type: 'checkbox', isMust: false},
    ],
     // 动态生成网格列
      tableCols: CacheConfig.cacheData[this.$route.path] && CacheConfig.cacheData[this.$route.path].tableCols && CacheConfig.cacheData[this.$route.path].tableCols.length > 0 ? CacheConfig.cacheData[this.$route.path].tableCols: [
        {
          prop: "testDrive",
          label:  this.$t('ve.label.testDrive')+"+",//试乘试驾车
          width: 135,
          align: "center",
          isComponent: true,
          comps: [
            {
              compKey: "propKey1",
              isShowLabel: false,
              isMul: false,
              codeField: "testDrive",
              textField: "testDrive",
              lookuptype: "VE0188",
              clickEvent: () => null,
              component: () => import("@/components/org/commonInput")
            }
          ]
        },{
          prop: "deliveryMethods",
          label:  this.$t('ve.label.tranportName')+"+",//送货方式
          width: 120,
          align: "center",
          isComponent: true,
          comps: [
            {
              compKey: "propKey1",
              isShowLabel: false,
              isMul: false,
              codeField: "deliveryMethods",
              textField: "deliveryMethods",
              lookuptype: "VE0188",
              clickEvent: () => null,
              component: () => import("@/components/org/LookupValue")
            }
          ]
        },
        {
          prop: "deliveryMethods",
          label: this.$t('ve.label.purcashTypeId')+"+",//资金类型
          width: 120,
          align: "center",
          isComponent: true,
          comps: [
            {
              compKey: "propKey1",
              isShowLabel: false,
              isMul: false,
              codeField: "deliveryMethods",
              textField: "deliveryMethods",
              clickEvent: () => null,
              component: () => import("@/components/ve/PurcashType")
            }
          ]
        },{
          prop: "deliveryMethods",
          label: this.$t('ve.label.IntervenMethod')+"+",//干预方式
          width: 120,
          align: "center",
          isComponent: true,
          comps: [
            {
              compKey: "propKey1",
              isShowLabel: false,
              isMul: false,
              codeField: "deliveryMethods",
              textField: "deliveryMethods",
              lookuptype: "VE0188",
              clickEvent: () => null,
              component: () => import("@/components/org/LookupValue")
            }
          ]
        },
        { prop: 'ETPE', label: 'ETPE'/*ETPE*/, width: 90, align: 'center' },
        { prop: 'carBrandCn', label: this.$t('org.label.carBrandCn')/*品牌*/, width: 100, align: 'center' },
        { prop: 'dlrShortName', label: this.$t('org.label.dlrName')/*经销商*/, width: 100, align: 'center' },
        { prop: 'carSeriesCn', label: this.$t('org.label.carSerise')/*车系*/, width: 100, align: 'center' },
        { prop: 'carSeriesCn', label: this.$t('org.label.carType')/*车型*/, width: 120, align: 'center' },
        { prop: 'vin', label: this.$t('ve.label.carConfig')/*车型配置 */, width: 175, align: 'center' },
        { prop: 'carColorCode', label: this.$t('ve.label.carColor')/*车身颜色*/, width: 100, align: 'center' },
        { prop: 'carIncolorCode', label: this.$t('org.label.carIncolor')/*内饰色*/, width: 100, align: 'center' },
        { prop: 'optionalPackage', label: this.$t('org.label.optionalPackage')/*选装包*/, width: 100, align: 'center' },
        { prop: 'contractCode', label: this.$t('ve.label.orderNums')/*订单编号*/, width: 180, align: 'center' },
        { prop: 'vin', label:  this.$t('org.label.vin')/*vin码*/, width: 175, align: 'center' },
        { prop: 'contractCode', label: this.$t('org.label.warnHome')/*仓库*/, width: 120, align: 'center' },
        { prop: 'areaIdentification', label: this.$t('ve.label.areaIdentification')/*地区标识*/, width: 100, align: 'center' },
        { prop: 'remark', label: this.$t('ve.label.xainzhiReasonBz')/*限制原因备注*/, width: 120, align: 'center' },
      ],
      formField: {
        carBrandCode: "",
        outStoreCode:"",
        vin: "",
        dlrId:'',
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
  transImport(){
    this.transferToImportVisible = true
    this.transferToImportKey = this.$utils.generateId()
  },
  openOmePlantInventory(){
      this.omePlantInventoryVisible = true
      this.omePlantInventoryKey = this.$utils.generateId()
  },
  close(){
  },
  genPurOrder(){
      const that = this.$refs.multipleTable;
      let saveState = true;
      let saveCount = 0;
      let msg = '';
      let selectData = that.$refs.multipleTable.selection;
      if (selectData.length < 1) {
        that.$message({
          message:'至少选择一行',
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
          apiConfig: veApis.veStockDiscardSave,
          variables: {
            //当前中台使用的名称有dataInfo、info，具体查看API文档
            dataInfo: {
              vin: selectData[k].vinCode,
              discardType:selectData[k].discardTypeCode,
              discardDescription:selectData[k].discardDescriptionCode,
              userId:selectData[k].userId,
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
              message: this.$t('sys.tips.esTip5')/*请选择需要保存的信息*/,
              type: 'success',
              duration: 2000
            });
            that.queryTable(1);
          }
        });
      }
  },
  queryTable(page, dataType, size, filterObj, cb, dto) {
    // validpopups 组件弹窗  validpage 表单查询
    this.$utils.validataMoth(this, 'validpage')
    if (this.valid) {
      if(this.formField.vin === "" && this.formField.carConfigId === ""){
         this.$alert('当不输入VIN码时，必须选择车型配置！', '提示', {
          confirmButtonText: '确定',
            callback: action => {
            }
          });
          return false
      }
      this.resetKey()
      this.$refs.multipleTable.queryTable(page, dataType, size, filterObj, cb, dto)
    }
  },
}
};
</script>
<style scoped>
/deep/.filter-params .el-col label.el-checkbox {
    width: 20%;
    font-size: 12px;
}
</style>
