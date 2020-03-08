<!--
* description: 申请审核管理
* author: ydche
* createdDate: 2019-10-07
-->
<template>
  <div>
    <div class="app-container app-container-table">
        <one-table-template ref="multipleTable"
        :dynamicButtons="tableButtons"
        :dynamicComponents="tableComponents"
        :dynamicApiConfig="apiConfig"
        :dynamicTableCols="tableCols"
        :dynamicIsShowSelect="false"
        :dynamicFormFields="formField"
        :dynamicIsInitTable="true"
        />
    </div>
    <check
      :dynamicEditRowData="checkRowData"
      :popupsVisible="checkPopupsVisible"
      :key="checkPopupsKey"
      :popupsState="checkPopupsState"
      @close="close"
    ></check>
  </div>
</template>
<script>

import { oneTableWithViewTemplateMixins } from '@/components/mixins/oneTableWithViewTemplateMixins'
import { valueObjectMixins } from '@/components/mixins/valueObjectMixins'
import { veApis } from '@/api/graphQLApiList/ve'
import OneTableTemplate from '@/components/templates/oneTable'
import check from './check'
import { CacheConfig } from '@/cache/configCache/index'
export default {
  name: "logisticsCheckout",
  // 组件混入对象：{data[listQuery] methods[queryTable]}
  mixins: [oneTableWithViewTemplateMixins, valueObjectMixins],
  components: {
    OneTableTemplate,check
  },
  // 阻塞路由预加载网格中组件的数据
 beforeRouteEnter(to, from, next) {
  CacheConfig.initData(to.path, function(){next()})
 },
  data() {
    return {
      checkRowData:{},
      checkPopupsVisible:false,
      checkPopupsKey:'checkPopupsKey',
      checkPopupsState:1,

      activeName: 'first',
      showUnsubscribe:true,
      showRetreat:false,
      // 网格查询API配置对象
      apiConfig:veApis.carSellSetMock1,
       // 动态组件-按钮
      tableButtons: [
        {compKey: 'btnKey1', type: 'primary', size: 'small', clickEvent: () => this.queryTable(), text:this.$t('sys.button.query')},//查询
        {compKey: 'btnKey2', type: '', size: 'small', clickEvent: () => this.reset(), text:this.$t('sys.button.reset')},//重置
        {compKey: 'btnKey3', type: '', size: 'small', clickEvent: () => this.reset(), text:this.$t('sys.button.export')},//导出
      ],
      // 动态组件-查询条件
      tableComponents: CacheConfig.cacheData[this.$route.path] && CacheConfig.cacheData[this.$route.path].tableComponents && CacheConfig.cacheData[this.$route.path].tableComponents.length > 0 ? CacheConfig.cacheData[this.$route.path].tableComponents: [
        {compKey: 'compKey1', labelName: this.$t('org.label.carBrandCn')/*品牌*/, codeField: 'carBrandCode', component: () => import('@/components/org/carBrand/carBrand'), type: 'dropdownList', isMust: true},
        {
          compKey: "compKey2",
          labelName: this.$t('org.label.carType'),/*车型*/
          codeField: "carSeriesCn",
          parentFileds:'carBrandCode',
          component: () => import("@/components/org/carTypeConfig"),
          type: "propus",
          disabled:true,
          isMust: true
        },
        {compKey: 'compKey3', labelName:  this.$t('ve.label.applyDate')/*申请日期*/, codeField: 'outStoreDateBegin', component: () => import('@/components/org/datePicker/datePicker'), type: 'datePicker', dateOptionsType: '1', isMust: true },
        {compKey: 'compKey4', labelName:  this.$t('ve.label.to')/*至*/, codeField: 'outStoreDateEnd', component: () => import('@/components/org/datePicker/datePicker'), type: 'datePicker', dateOptionsType: '1', isMust: true },
        {compKey: 'compKey5', labelName: this.$t("org.label.vin") /** 'VIN码'*/, codeField: 'vin', component: () => import('@/components/org/commonInput'), type: 'inputText', isMust: false},
        {compKey: 'compKey6', labelName: this.$t('ve.label.orderNums')/*订单编号*/, codeField: 'vin', component: () => import('@/components/org/commonInput'), type: 'inputText', isMust: false},
        {
          compKey: "compKey7",
          labelName: this.$t("ve.label.applyType"),//申请状态
          codeField: "custName",
          lookuptype: 'VE0305',
          component: () => import("@/components/org/LookupValue"),
          type: "dropdownList",
          isMul:false,
          isMust: false
        },    
    ],
     // 动态生成网格列
      tableCols: CacheConfig.cacheData[this.$route.path] && CacheConfig.cacheData[this.$route.path].tableCols && CacheConfig.cacheData[this.$route.path].tableCols.length > 0 ? CacheConfig.cacheData[this.$route.path].tableCols: [
         {
          prop: "controlBtn",
          label: "操作",
          codeField: "controlBtn",
          width: 60,
          align: "center",
          isComponent: true,
          comps: [
            {
              compKey: "propKey0",
              labelName: "审核",
              codeField: "editControlBtn",
              clickEvent: this.check,
              component: () => import("@/components/org/linkButton")
            }
          ]
        },
        { prop: 'carBrandCn', label: this.$t('org.label.carBrandCn')/*品牌*/, width: 100, align: 'center' },
        { prop: 'dlrName', label: this.$t('org.label.dlrName')/*经销商经销商*/, width: 100, align: 'center' },
        { prop: 'orderNums', label: this.$t('ve.label.orderNums')/*订单编号*/, width: 180, align: 'center' },
        { prop: 'contractCode', label: this.$t('ve.label.contractCode')/*合同编号*/, width: 180, align: 'center' },
        { prop: 'type', label: this.$t('ve.label.documentType')/*单据类型*/, width: 80, align: 'center' },
        { prop: 'comName', label: this.$t('ve.label.clientName')/*客户名称*/, width: 80, align: 'center' },
        { prop: 'phone', label: this.$t('ve.label.phone')/*联系电话*/, width: 110, align: 'center' },
        { prop: 'vin', label:  this.$t('org.label.vin')/*vin码*/, width: 175, align: 'center' },
        { prop: 'states', label: this.$t('ve.label.examineName')/*审核状态*/, width: 80, align: 'center' },
        { prop: 'comName', label: this.$t('ve.label.salesConsultant')/*销售顾问*/, width: 80, align: 'center' },
        { prop: 'reson', label: this.$t('ve.label.unsubscribeReason'),/*退订原因*/ width: 120, align: 'center' },
        { prop: 'specialAmount', label:  this.$t('org.label.sellingPrice')/*销售价格*/, width: 120, align: 'center' },
        { prop: 'specialAmount', label: this.$t('ve.label.fine')/*罚金*/, width: 120, align: 'center' },
        { prop: 'carSeriesCn', label: this.$t('org.label.carType')/*车型*/, width: 120, align: 'center' },
        { prop: 'carConfigCn', label: this.$t('ve.label.carConfig')/*车型配置 */, width: 180, align: 'center' },
        { prop: 'carColorCode', label: this.$t('ve.label.carColor')/*车身颜色*/, width: 100, align: 'center' },
        { prop: 'carIncolorCode', label: this.$t('org.label.carIncolor')/*内饰色*/, width: 100, align: 'center' },
        { prop: 'optionalPackage', label: this.$t('org.label.optionalPackage')/*选装包*/, width: 100, align: 'center' },
        { prop: 'doneDate', label: this.$t('ve.label.applyDate')/*申请日期*/, width: 100, align: 'center' },
        { prop: 'remark', label: this.$t('ve.label.remark')/*备注*/, width: null, align: 'center' },
      ],
      formField: {
        carBrandCn: "",
        carBrandCode: "",
        dlrName:"",
        costPrice: "",
        type: "",
        comName: "",
        phone: "",
        states: "",
        curName:"",
        specialAmount:"",
        carSeriesCn:"",
        carConfigCn:"",
        vin:"",
        carColorCode:"",
        carIncolorCode:"",
        optionalPackage:"",
        carSeriesCode:"",
      },
      custResAppDlaKey:'custResAppDlaKey',
      custResAppDlaVisible:false,

    };
  },
  mounted(){
    console.log(this)
  },
methods:{
  check(index) {
      var curIndex = index
      const that = this.$refs.multipleTable
      if (curIndex === undefined || curIndex === null) {
        var currentRow
        if (that.isMul === true) {
          // 多选
          var selectData = that.selection
          if (selectData.length > 0) {
            currentRow = selectData[0]
          }
        } else {
          // 单选
          currentRow = that.currentRow
        }
        if (currentRow) {
          curIndex = currentRow.index
        }
      }

      if (curIndex === undefined || curIndex === null) {
        this.$alert('请选择需要修改的数据', '提示')
        return
      }
      this.checkRowData = that.list[curIndex]
      if(this.checkRowData.type === '销退类型'){
        this.showCheck('retreat')
      }else{
        this.showCheck('unsubscribe')
      }
    },
    showCheck(type) {
      this.checkPopupsState = type
      this.checkPopupsVisible = true
      this.checkPopupsKey = this.$utils.generateId()
    },
    getFocusCode(){},
    getComponentCode(){},
    selectRowsData(val){

      this.formField = val===null? {vin:''}:val
      if(this.formField.type === '销退类型'){
        this.activeName= 'second'
        this.showUnsubscribe=false
        this.showRetreat = true
      }else if(this.formField.type === '退订类型'){
        this.activeName= 'first'
        this.showUnsubscribe=true
        this.showRetreat = false
      }
    },
   
    reset(){
      this.formField= {
        carBrandCn: "",
        dlrName:"",
        costPrice: "",
        type: "",
        comName: "",
        phone: "",
        states: "",
        curName:"",
        specialAmount:"",
        carSeriesCn:"",
        carConfigCn:"",
        vin:"",
        carColorCode:"",
        carIncolorCode:"",
        optionalPackage:"",
        carSeriesCode:"",
      }
    },
    close(){
      this.checkPopupsVisible = false
    },
}


};
</script>
