<!--
* description: 主机厂库存
* author: ydche
* createdDate: 2019-10-10
-->
<template>
  <section class="carTypeConfig">
    <el-dialog
      :title="title"
      :visible.sync="curPopupsVisible"
      width="1000px"
      center
      @close="sendCode"
      :close-on-click-modal="false"
      :append-to-body="true"
      ref="dialogMultipleTable"
    >
      <one-table-template ref="multipleTable"
        :dynamicButtons="tableButtons"
        :dynamicComponents="tableComponents"
        :dynamicApiConfig="apiConfig"
        :dynamicTableCols="tableCols"
        :dynamicFormFields="formField"
        :dynamicIsShowSelect="isMul"
        :key="popupsTableKey"
      />
    </el-dialog>
  </section>
</template>
<script>
import { oneTableWithViewTemplateMixins } from '@/components/mixins/oneTableWithViewTemplateMixins';
import { valueObjectMixins } from '@/components/mixins/valueObjectMixins';
import { veApis } from '@/api/graphQLApiList/ve'
import OneTableTemplate from '@/components/templates/popupsOneTable'
import { CacheConfig } from '@/cache/configCache/index'

export default {
  // 组件混入对象：{data[listQuery] methods[queryTable]}
  mixins: [oneTableWithViewTemplateMixins, valueObjectMixins],
  components: {
    OneTableTemplate
  },
  data() {
    return {
      // 弹窗页面标识
      popupsPageCode: '/components/org/carTypeConfig/carTypeConfig',
      // 网格查询API配置对象
      apiConfig: veApis.distribAchieApi1,
      // 动态组件-按钮
      tableButtons: [
        {compKey: 'btnKey1', type: 'primary', size: 'small', clickEvent: () => this.queryTable(1), text: this.$t('sys.button.query')},//查询
        {compKey: 'btnKey2', type: '', size: 'small', clickEvent: () => this.reset(), text:  this.$t('sys.button.reset')},//重置
        {compKey: 'btnKey3', type: '', size: 'small', clickEvent: () => this.sendCode('carConfigId', 'carConfigCode'), text:this.$t('sys.button.export')},//导出
      ],
      // 动态组件-查询条件
      tableComponents: [],

      // 动态组件-查询条件
      staticTableComponents: CacheConfig.cacheData[this.$route.path] && CacheConfig.cacheData[this.$route.path].tableComponents && CacheConfig.cacheData[this.$route.path].tableComponents.length > 0 ? CacheConfig.cacheData[this.$route.path].tableComponents: [

        {compKey: 'compKey10', labelName: this.$t('org.label.carBrandCn')/*品牌*/, codeField: 'carBrandCode', component: () => import('@/components/org/carBrand/carBrand'), type: 'dropdownList', isMust: true},
        {compKey: 'compKey3', labelName: this.$t('org.label.carConfig')/*车型*/, codeField: 'carConfigId',parentFileds:'carBrandCode', component: () => import('@/components/org/carTypeConfig'), type: 'propus', isMust: true},
        {compKey: 'compKey5', labelName: this.$t('org.label.carColor')/*车身颜色*/, codeField: 'carColorId', component: () => import('@/components/org/carColor'), type: 'propus', isMust: true},
        {compKey: 'compKey1', labelName: this.$t('org.label.carIncolor')/*内饰色*/, codeField: 'carIncolorId', component: () => import('@/components/org/TrimPopupColor'), type: 'propus', isMust: false},
        {compKey: 'compKey4', labelName: this.$t('org.label.vin')/*VIN码*/, codeField: 'vin', component: () => import('@/components/org/commonInput'), type: 'inputText',span:8, isMust: false},
        {compKey: 'compKey11',
          labelName: this.$t('ve.label.summaryMethod'),//库存状态
           lookuptype: 'VE0188',
           codeField: 'roleOrgType',
           component: () => import('@/components/org/LookupValue'),
           type: 'dropdownList', isMust: false
        },
        {compKey: 'compKey12',
          labelName: this.$t('ve.label.wayToShow'),//库存状态
           lookuptype: 'VE0188',
           codeField: 'roleOrgType',
           component: () => import('@/components/org/LookupValue'),
           type: 'dropdownList', isMust: false
        },
        {compKey: 'compKey6', labelName: this.$t('org.label.warnHome')/*仓库*/, lookuptype: 'VE0079', codeField: 'carStockHouseId', component: () => import('@/components/org/LookupValue'), type: 'dropdownList', isMust: false},
        {
          compKey: "compKey2",
          labelName: this.$t('ve.label.subWwarehouseShow') /*分仓库显示*/,
          codeField: "isEnable",
          component: () => import("@/components/org/isEnable/isEnable"),
          type: "dropdownList",
          isMust: false
        },
        {compKey: 'compKey7', labelName: this.$t('org.label.carHouseType')/*库存类型*/, lookuptype: 'VE0079', codeField: 'carHouseType', component: () => import('@/components/org/LookupValue'), type: 'dropdownList', isMust: false},
        {compKey: 'compKey8', labelName:  this.$t('ve.label.offlineStartDate')/*下线开始日期*/, codeField: 'offLineDateBegin', component: () => import('@/components/org/datePicker/datePicker'), type: 'datePicker', dateOptionsType: '0', isMust: false },
        {compKey: 'compKey9', labelName: this.$t('ve.label.offlineEndtDate')/*下线结束日期*/, codeField: 'offLineDateBegin', component: () => import('@/components/org/datePicker/datePicker'), type: 'datePicker', dateOptionsType: '0', isMust: false },
        {
          compKey: "compKey13",
          labelName: this.$t('org.label.regionName') /*区域*/,
          codeField: "isEnable",
          component: () => import("@/components/org/ZoneQuery"),
          type: "dropdownList",
          isMust: false
        },{
          compKey: "compKey14",
          labelName: this.$t('org.label.region') /*大区*/,
          codeField: "isEnable",
          component: () => import("@/components/org/BigArea"),
          type: "dropdownList",
          isMust: false
        },{
          compKey: "compKey15",
          labelName: this.$t('org.label.smallAreaName') /*小区*/,
          codeField: "isEnable",
          component: () => import("@/components/org/SmallArea"),
          type: "dropdownList",
          isMust: false
        }, {
          compKey: "compKey16",
          labelName: this.$t('ve.label.isDisplay') /*库存是否显示*/,
          codeField: "isEnable",
          component: () => import("@/components/org/isEnable/isEnable"),
          type: "dropdownList",
          isMust: false
        },
    ],
      // 动态生成网格列
      tableCols: [],
      // 静态生成网格列
      staticTableCols: [
        { prop: 'carBrandCn', label: this.$t('org.label.carBrandCn'), width: 115, align: 'center' },//品牌
        { prop: 'carSeriesCn', label: this.$t('org.label.carSerise')/*车系*/, width: 120, align: 'center' },
        { prop: 'carConfigCn', label: this.$t('org.label.carType')/*车型*/, width: 120, align: 'center' },
        { prop: 'carConfigId', label: this.$t('ve.label.carConfig')/*车型配置 */, width: 175, align: 'center' },
        { prop: 'carColorCode', label: this.$t('ve.label.carColor')/*车身颜色*/, width: 120, align: 'center' },
        { prop: 'carIncolorCode', label: this.$t('org.label.carIncolor')/*内饰色*/, width: 120, align: 'center' },
        { prop: 'vin', label:  this.$t('org.label.vin')/*vin码*/, width:180, align: 'center' },
      ],
      //表单查询数据（查询条件）
      formField:{
        carBrandCode: '',
        carSeriesId: '',
        smallCarTypeId: '',
        carConfigCode: '',
        carConfigCn: '',
        motorType: '',
        carTypeShortCode: ''
      },
      title:this.$t('ve.label.OEMPlantinventory') /*主机厂库存*/
    }
  }
};
</script>
<style scoped>

</style>