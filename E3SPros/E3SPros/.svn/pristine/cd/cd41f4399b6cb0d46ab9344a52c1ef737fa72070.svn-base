<!--
* logs: 2019-09-19 增加国际化 ydche
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
      :dynamicIsShowMoreBtn='false'
    />
    <showDetial :popupsVisible="detialShow" @changeCode="changeShowDetial" :detialMsg='detialRow'/>
  </div>
</template>
<script>
import { oneTableWithViewTemplateMixins } from '@/components/mixins/oneTableWithViewTemplateMixins';
import { veApis } from "@/api/graphQLApiList/ve";
import OneTableTemplate from "@/components/templates/oneTable";
import showDetial from "./showDetialDialog";
import { CacheConfig } from '@/cache/configCache/index'
export default {
  name: "vePurInstockHouse",
  // 组件混入对象：{data[listQuery] methods[queryTable]}
  mixins: [oneTableWithViewTemplateMixins],
  components: {
    OneTableTemplate,
    showDetial
  },
  // 阻塞路由预加载网格中组件的数据
  beforeRouteEnter(to, from, next) {
    CacheConfig.initData(to.path, function(){next()})
  },
  data() {
    return {
      // 弹窗是否显示
      detialShow: false,
      // 网格查询API配置对象
      apiConfig: veApis.vePurInstockQry,
      detialRow: [],
      // 动态组件-按钮
      tableButtons: [
        {
          compKey: "btnKey1",
          type: "primary",
          size: "small",
          clickEvent: () => this.queryTable(1),
          text: this.$t('sys.button.query')/*查询*/
        },
        {
          compKey: "btnKey2",
          type: "",
          size: "small",
          clickEvent: () => this.showDetial(),
          text: this.$t('sys.button.showDetial')/*查看明细*/
        },
        {
          compKey: "btnKey3",
          type: "",
          size: "small",
          clickEvent: () => this.reset(),
          text:  this.$t('sys.button.reset')/*重置*/
        }
      ],
      // 动态组件-查询条件
      tableComponents: CacheConfig.cacheData[this.$route.path] && CacheConfig.cacheData[this.$route.path].tableComponents && CacheConfig.cacheData[this.$route.path].tableComponents.length > 0 ? CacheConfig.cacheData[this.$route.path].tableComponents : [
        // 显示组件
        {
          compKey: "compKey1",
          labelName: this.$t('ve.label.carBrandCode')/*品牌*/,
          codeField: "carBrandCode",
          isMul: false,
          component: () => import("@/components/org/carBrand/carBrand"),
          type: "dropdownList",
          isMust: true
        },
        {
          compKey: "compKey2",
          labelName: this.$t('ve.label.vin')/*VIN码*/,
          codeField: "vin",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        },
        {
          compKey: "compKey3",
          labelName: this.$t('ve.label.purOrderCode')/*采购单号*/,
          codeField: "purOrderCode",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        },
        {
          compKey: "compKey4",
          labelName: this.$t('ve.label.purOrderTypeName')/*采购单类型*/,
          codeField: "purchaseOrderTypeId",
          parentFileds: "carBrandCode-carBrandCode",
          isMul: false,
          component: () => import("@/components/ve/PurchaseOrderType"),
          type: "dropdownList",
          isMust: true
        }
      ],
      // 动态生成网格列
       tableCols: CacheConfig.cacheData[this.$route.path] && CacheConfig.cacheData[this.$route.path].tableCols && CacheConfig.cacheData[this.$route.path].tableCols.length > 0 ? CacheConfig.cacheData[this.$route.path].tableCols : [
        { prop: "orderCode", label: this.$t('ve.label.purOrderCode')/*采购单号*/, width: 180, align: "center" },
        { prop: "vin", label: this.$t('ve.label.vin')/*VIN码*/, width: 180, align: "center" },
        { prop: "engineNo", label: this.$t('ve.label.engineNo')/*发动机号*/, width: 110, align: "center" },
        {
          prop: "purTypeName",
          label: this.$t('ve.label.purOrderTypeName')/*采购单类型*/,
          width: 110,
          align: "center"
        },
        { prop: "houseAddr", label: this.$t('ve.label.houseAddr')/*搬入地*/, width: 110, align: "center" },
        {
          prop: "linkOrderdate",
          label: this.$t('ve.label.linkOrderdate')/*采购/调拨日期*/,
          width: 110,
          align: "center"
        },
        { prop: "carBrandName", label: this.$t('ve.label.carBrandCode')/*品牌*/, width: 110, align: "center" },
        { prop: "carSeriesCode", label: this.$t('ve.label.carSeries')/*车系*/, width: 110, align: "center" },
        {
          prop: "carTypeShortCode",
          label: this.$t('ve.label.carTypeShortCode')/*车型简码*/,
          width: 150,
          align: "center"
        },
        {
          prop: "carConfigCode",
          label: this.$t('ve.label.carConfigName')/*车型配置*/,
          width: 150,
          align: "center"
        },
        {
          prop: "carColorCode",
          label: this.$t('ve.label.carColorId')/*车身颜色*/,
          width: 110,
          align: "center"
        },
        {
          prop: "carIncolorCode",
          label: this.$t('ve.label.carColorId')/*内饰颜色*/,
          width: 110,
          align: "center"
        },
        {
          prop: "certificateNo",
          label: this.$t('ve.label.certificateNo')/*合格证号*/,
          width: 110,
          align: "center"
        },
        { prop: "driverName", label: this.$t('ve.label.driverName')/*司机姓名*/, width: 110, align: "center" },
        { prop: "driverTel", label: this.$t('ve.label.driverTel')/*司机电话*/, width: 110, align: "center" },
        { prop: "purPrice", label: this.$t('ve.label.purPrice')/*采购价*/, width: 110, align: "center" },
        { prop: "produceDate", label: this.$t('ve.label.produceDate')/*生产日期*/, width: 110, align: "center" },
        { prop: "producePlace", label: this.$t('ve.label.producePlace')/*生产地*/, width: 110, align: "center" },
        {
          prop: "carBrandCn",
          label: this.$t('ve.label.carConfig')/*车型*/,
          width: 110,
          align: "center",
          hidden: true
        },
        {
          prop: "carKey",
          label: this.$t('ve.label.carKey')/*钥匙编号*/,
          width: 110,
          align: "center",
          hidden: true
        },
        {
          prop: "witTaxCost",
          label: this.$t('ve.label.witTaxCost')/*含税单价*/,
          width: 110,
          align: "center",
          hidden: true
        },
        {
          prop: "invTax",
          label: this.$t('ve.label.invTax')/*增值税*/,
          width: 110,
          align: "center",
          hidden: true
        },
        {
          prop: "taxRate",
          label: this.$t('ve.label.taxRate')/*税率*/,
          width: 110,
          align: "center",
          hidden: true
        },
        {
          prop: "noTaxPrice",
          label: this.$t('ve.label.noTaxPrice')/*不含税价*/,
          width: 110,
          align: "center",
          hidden: true
        }
      ],
      //表单查询数据（查询条件）
      formField: {
        carBrandCode: "",
        purOrderCode: "",
        vin: "",
        purchaseOrderTypeId: ""
      }
    };
  },
  methods: {
    changeShowDetial() {
      this.detialShow = false;
    },
    showDetial() {
      const that = this.$refs.multipleTable;
      if (that.currentRow == null) {
        this.$message({
          message: this.$t('org.message.selInfoView')/*请选择需要查看的信息*/,
          type: "warning",
          duration: 2000
        });
        return;
      } else {
        this.detialRow = that.currentRow;
        this.detialShow = true;
      }
    }
  }
};
</script>
