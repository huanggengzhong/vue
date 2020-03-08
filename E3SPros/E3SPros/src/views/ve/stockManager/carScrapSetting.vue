<!--
* description: 车辆报废审核
* author: linsy
* createdDate: 2019-08-08
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
  name:"carScrapSetting",
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
      apiConfig: veApis.veStockDiscardQry,
      // 动态组件-按钮
      tableButtons: [
        {compKey: 'btnKey1', type: 'primary', size: 'small', clickEvent: () => this.queryTable(1), text: this.$t('sys.button.query')},/*查询*/
        {compKey: 'btnKey4', type: '', size: 'small', clickEvent: () => this.save(), text:  this.$t('sys.button.save')}/*保存*/,
        {compKey: 'btnKey3', type: '', size: 'small', clickEvent: () => this.reset(), text: this.$t('sys.button.reset')}/*重置*/,
        {compKey: 'btnKey2', type: '', size: 'small', clickEvent: () => this.export(), text:  this.$t('sys.button.export')}/*导出*/
      ],
      // 动态组件-查询条件
      tableComponents: CacheConfig.cacheData[this.$route.path] && CacheConfig.cacheData[this.$route.path].tableComponents && CacheConfig.cacheData[this.$route.path].tableComponents.length > 0 ? CacheConfig.cacheData[this.$route.path].tableComponents : [
        // 显示组件
        {compKey: 'compKey1', labelName: this.$t('org.label.carBrandCn')/*品牌*/, codeField: 'carBrandCode', component: () => import('@/components/org/carBrand/carBrand'), type: 'dropdownList', isMust: true},
        {compKey: 'compKey2', labelName: this.$t('ve.label.vin')/*VIN码*/, codeField: 'vin', component: () => import('@/components/org/commonInput'), type: 'inputText', isMust: true},
        {compKey: 'compKey11', labelName:this.$t('ve.label.discardType')/*报废类型*/, lookuptype: 'VE0204', codeField: 'discardType', component: () => import('@/components/org/LookupValue'), type: 'dropdownList', isMust: true},
        {compKey: 'compKey4', labelName: this.$t('ve.label.engineNo')/*发动机号*/, codeField: 'engineNo', component: () => import('@/components/org/commonInput'), type: 'inputText', isMust: true},
        {compKey: 'compKey5', labelName:this.$t('ve.label.discardTypeDate')/*报废日期*/, codeField: 'discardTypeDate', component: () => import('@/components/org/datePicker/datePicker'), type: 'datePicker', dateOptionsType: '0', isMust: false },
      ],
      // 动态生成网格列
      tableCols: CacheConfig.cacheData[this.$route.path] && CacheConfig.cacheData[this.$route.path].tableCols && CacheConfig.cacheData[this.$route.path].tableCols.length > 0 ? CacheConfig.cacheData[this.$route.path].tableCols: [

        { prop: 'userId', label: this.$t('org.label.userName')/*用户ID*/, width: 110, align: 'center',hidden:true},
        { prop: 'isDiscard', label: this.$t('ve.label.isDiscard')/*是否已报废*/, width: 110, align: 'center' },
        { prop: 'discardTypeCode', label:this.$t('ve.label.discardType')/*报废类型*/, width: 150, align: 'center', isComponent: true,
          comps: [{compKey: 'propKey2', isMul: false, isShowLabel: false, codeField: 'discardTypeCode', clickEvent: () => null, component: () => import('@/components/org/LookupValue')}]
        },
        // { prop: 'discardTypeCode', label: '报废原因Code', width: 110, align: 'center',hidden:true },
             { prop: 'discardDescriptionCode', label: this.$t('ve.label.discardDescriptionCode')/*报废原因*/, width: 150, align: 'center', isComponent: true,
          comps: [{compKey: 'propKey3', isMul: false, isShowLabel: false, codeField: 'discardDescriptionCode', clickEvent: () => null, component: () => import('@/components/org/LookupValue')}]
        },
        { prop: 'vinCode', label: this.$t('ve.label.vin')/*VIN码*/, width: 155, align: 'center' },
        { prop: 'carConfig', label: this.$t('org.label.carConfig')/*车型配置*/, width: 150, align: 'center' },
        { prop: 'Color', label:this.$t('org.label.carColor')/*颜色*/, width: 110, align: 'center' },
        { prop: 'carInColor', label: this.$t('org.label.carIncolor')/*内饰色*/, width: 110, align: 'center' },
        { prop: 'carBrandCode', label: this.$t('org.label.carBrand')/*品牌名称*/, width: 110, align: 'center' },
        { prop: 'carSeries', label: this.$t('org.label.carSerise')/*车系*/, width: 110, align: 'center' },
        { prop: 'discardDate', label:this.$t('ve.label.discardTypeDate')/*报废时间*/, width: 110, align: 'center' },
        { prop: 'engineNo', label: this.$t('ve.label.engineNo')/*发动机号*/, width: 110, align: 'center' },
        { prop: 'produceDate', label: this.$t('ve.label.produceDate')/*出厂日期*/, width: 110, align: 'center' },
        { prop: 'produceAddr', label:this.$t('ve.label.produceAddr')/*产地*/, width: 110, align: 'center' },
        { prop: 'moveStateName', label: this.$t('ve.label.moveStateName')/*车辆状态*/, width: 110, align: 'center' },
        { prop: 'updateControlId', label: this.$t('org.label.updateControlId')/*并发控制*/, width: 110, align: 'center',hidden:true },
      ],
      //表单查询数据（查询条件）
      formField:{
        discardTypeDate:'',
        carBrandCode:'',
        vin:'',
        engineNo:'',
        discardType:''
      }
    }
  },
  methods: {
    //驳回
    export(){
        this.$message({
              message: this.$t('sys.tips.esTip11')/*导出成功*/,
              type: 'success',
              duration: 2000
            });
    },
    // 保存
    save(){
      const that = this.$refs.multipleTable;
      let saveState = true;
      let saveCount = 0;
      let msg = '';
      let selectData = that.$refs.multipleTable.selection;
      if (selectData.length < 1) {
        that.$message({
          message:this.$t('org.message.selectSaveInfo')/*请选择需要保存的信息*/,
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
    }
  }
}
</script>
