<!--
* description: 车辆产品资料查询 - api文档车型配置查询
* author: zhhx
* createdDate: 2019-08-08
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
      :dynamicIsShowMoreBtn="false"
    />


  </div>
</template>
<script>
import { oneTableWithViewTemplateMixins } from '@/components/mixins/oneTableWithViewTemplateMixins';
import { orgApis } from "@/api/graphQLApiList/org";
import OneTableTemplate from "@/components/templates/oneTable";
import { CacheConfig } from '@/cache/configCache/index'
import LangSelect from "@/components/LangSelect";

export default {
  name: "veCarProductDataQuery",
  // 组件混入对象
  mixins: [oneTableWithViewTemplateMixins],
  components: {
    OneTableTemplate,
    LangSelect

  },
  // 阻塞路由预加载网格中组件的数据
beforeRouteEnter(to, from, next) {CacheConfig.initData(to.path, function(){next()})},
  data() {
    return {
      // 网格查询API配置对象
      apiConfig: orgApis.mdmVeCarConfigQueryListForPage,
      // 动态组件-按钮
      tableButtons: [
        // 查询
        {
          compKey: "btnKey1",
          type: "primary",
          size: "small",
          clickEvent: () => this.queryTable(1),
          text: this.$t('sys.button.query')
        },
        // 重置
        {
          compKey: "btnKey3",
          type: "",
          size: "small",
          clickEvent: () => this.reset(),
          text: this.$t('sys.button.reset')
        },
        // 导出
        {
          compKey: "btnKey4",
          type: "",
          size: "small",
          clickEvent: () => this.exportExcel(),
          text: this.$t('sys.button.export')
        }
      ],
      tableComponents: CacheConfig.cacheData[this.$route.path] && CacheConfig.cacheData[this.$route.path].tableComponents.length > 0 ? CacheConfig.cacheData[this.$route.path].tableComponents : [
        // 动态组件-查询条件
        // 品牌
        {
          compKey: "compKey1",
          labelName: this.$t('org.label.carBrand'),
          codeField: "carBrandCode",
          component: () => import("@/components/org/carBrand/carBrand"),
          type: "dropdownList",
          isMust: true
        },
        // 车系
        {
          compKey: "compKey2",
          labelName: this.$t('org.label.carSerise'),
          codeField: "carSeriesId",
          parentFileds: 'carBrandCode',
          component: () => import("@/components/org/CarCode"),
          type: "dropdownList",
          isMust: true
        },
        // 车型配置
        {
          compKey: "compKey3",
          labelName: this.$t('org.label.carConfig'),
          codeField: "carConfigId",
          parentFileds: "value:carBrandCode|carSeriesId",
          returnCodeField: 'carConfigId',
          component: () => import("@/components/org/carTypeConfig"),
          type: "propus",
          isMust: true
        },
        // 供应状态
        {compKey: 'compKey4', labelName: this.$t('org.label.supplyStatus'), lookuptype: 'VE0014', codeField: 'supplyStatus', component: () => import('@/components/org/LookupValue'), type: 'dropdownList', isMust: true},
      ],
      // 动态生成网格列
      tableCols: CacheConfig.cacheData[this.$route.path]&& CacheConfig.cacheData[this.$route.path].tableCols.length > 0 ? CacheConfig.cacheData[this.$route.path].tableCols: [
        // 品牌
        { prop: "carBrandCn", label: this.$t('org.label.carBrand'), width: 150, align: "center" },
        // 车系编码
        { prop: "mdmVeCarSeriesExtend.carSeriesCode", label: this.$t('org.label.carSeriesCode'), width: null, align: "center" },
        // 车系名称
        { prop: "mdmVeCarSeriesExtend.carSeriesCn", label: this.$t('org.label.carSeriesCn'), width: 140, align: "center" },
        // 车型编码
        { prop: "mdmSmallCarTypeExtend.smallCarTypeCode", label: this.$t('org.label.carTypeCode'), width: 180, align: "center" },
        // 车型名称
        { prop: "mdmSmallCarTypeExtend.smallCarTypeCn", label: this.$t('org.label.carTypeName'), width: 180, align: "center" },
        // 车型配置编码
       { prop: "carConfigCode", label: this.$t('org.label.carTypeCode22'), width: 180, align: "center" },
      //  车型配置名称
       { prop: "carConfigCn", label: this.$t('org.label.carConfigCn'), width: 150, align: "center" },
        // 供应状态
        { prop: "supplyStatusCn", label: this.$t('org.label.supplyStatus'), width: 140, align: "center" },
        // 动力类型
        { prop: "powerTypeName", label: this.$t('org.label.powerType'), width: null, align: "center" },
          // 电池类型
          { prop: "batteryTypeName", label: this.$t('org.label.batteryType'), width: null, align: "center" },
        // 电机类型
        { prop: "motorTypeName", label: this.$t('org.label.motorType'), width: null, align: "center" },

        // 电控类型
        { prop: "eleConTypeName", label: this.$t('org.label.eleconType'), width: null, align: "center" },
        // 排放标准
        { prop: "letStandardName", label: this.$t('org.label.emissionStandard'), width: null, align: "center" },
        // 是否新车型
        { prop: "isNewCarName", label: this.$t('org.label.isNewCar'), width: 120, align: "center" },
        // 启用状态
        { prop: "isEnableCn", label: this.$t('org.label.isEnableCn'), width: null, align: "center" }

      ],
      //表单查询数据
      formField: {
        carSeriesId: "",
        carBrandCode: "",
        carConfigId: '',
        supplyStatus: ''

      }
    };
  }
};
</script>
