<!--
* description: 经销商到款日报表
* author: linzewen
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
      :dynamicIsShowSelect="false"
      :dynamicIsColumnDrop="true"
    />
  </div>
</template>
<script>
import { oneTableWithViewTemplateMixins } from '@/components/mixins/oneTableWithViewTemplateMixins';
import { veApis } from '@/api/graphQLApiList/ve'
import OneTableTemplate from '@/components/templates/oneTable'
import { CacheConfig } from '@/cache/configCache/index'

export default {
  name:"vedlraccountdateform",
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
      apiConfig: veApis.veAccountQry,
      // 动态组件-按钮
      tableButtons: [
        {compKey: 'btnKey1', type: 'primary', size: 'small', clickEvent: () => this.queryTableNew(), text: this.$t('sys.button.query')/*查询*/},
        {compKey: 'btnKey2', type: '', size: 'small', clickEvent: () => this.reset(), text: this.$t('sys.button.reset')/*重置*/},
      ],
      // 动态组件-查询条件
      tableComponents: CacheConfig.cacheData[this.$route.path] && CacheConfig.cacheData[this.$route.path].tableComponents && CacheConfig.cacheData[this.$route.path].tableComponents.length > 0 ? CacheConfig.cacheData[this.$route.path].tableComponents: [
        // 显示组件

        {compKey: 'compKey1', labelName: this.$t('ve.label.accountName')/*账户名称*/, codeField: 'accountCode', isRequire: true, component: () => import('@/components/ve/accountName'), type: 'dropdownList', isMust: true},
        {compKey: 'compKey2', labelName: this.$t('ve.label.purcashTypeId')/*资金类型*/, codeField: 'purcashTypeId', isRequire: true, component: () => import('@/components/ve/PurcashType'), type: 'dropdownList', isMust: true},
        {compKey: 'compKey4', labelName: this.$t('ve.label.auditStatus')/*审核状态*/, isRequire: true, lookuptype: 'AI0021', codeField: 'auditStatus', component: () => import('@/components/org/LookupValue'), type: 'dropdownList', isMust: true},
        {compKey: 'compKey5', labelName: this.$t('ve.label.businessType')/*到款类型*/, lookuptype: 'VE0284', codeField: 'businessType', component: () => import('@/components/org/LookupValue'), type: 'dropdownList', isMust: true},
        // {compKey: 'compKey3', labelName: '经销商', codeField: 'dlrCode', component: () => import('@/components/org/commonInput/searchInput'), type: 'popupsInput', isMust: false,
        //  popups: {type: 'propus', key: 'key1', state: false, component: () => import('@/components/org/orgDlr')}},
        {compKey: 'compKey6', labelName: this.$t('ve.label.businessClass')/*明细类别*/, lookuptype: 'VE0138', codeField: 'businessClass', component: () => import('@/components/org/LookupValue'), type: 'dropdownList', isMust: false},
        {compKey: 'compKey2', labelName: this.$t('org.label.dlrName')/*经销商*/, codeField: 'drlId', component: () => import('@/components/org/orgDlr'), type: 'propus', isMust: false},
        {compKey: 'compKey7', labelName: this.$t('ve.label.createDateBegin')/*收款开始日期*/, codeField: 'createDateBegin', component: () => import('@/components/org/datePicker/datePicker'), type: 'datePicker', dateOptionsType: '', isMust: false },
        {compKey: 'compKey8', labelName: this.$t('ve.label.createDateEnd')/*收款结束日期*/, codeField: 'createDateEnd', component: () => import('@/components/org/datePicker/datePicker'), type: 'datePicker', dateOptionsType: '', isMust: false },
        {compKey: 'compKey10', labelName: this.$t('ve.label.auditDateBegin')/*审核开始日期*/, codeField: 'auditDateBegin', component: () => import('@/components/org/datePicker/datePicker'), type: 'datePicker', dateOptionsType: '', isMust: false },
        {compKey: 'compKey11', labelName: this.$t('ve.label.auditDateEnd')/*审核结束日期*/, codeField: 'auditDateEnd', component: () => import('@/components/org/datePicker/datePicker'), type: 'datePicker', dateOptionsType: '', isMust: false },
        {compKey: 'compKey9', labelName: this.$t('ve.label.pvBank')/*到账银行*/, lookuptype: 'AI0021', codeField: 'pvBank', component: () => import('@/components/org/LookupValue'), type: 'dropdownList', isMust: false},

      ],
      // 动态生成网格列
      tableCols: CacheConfig.cacheData[this.$route.path] && CacheConfig.cacheData[this.$route.path].tableCols && CacheConfig.cacheData[this.$route.path].tableCols.length > 0 ? CacheConfig.cacheData[this.$route.path].tableCols: [
        { prop: 'carBrandName', label: this.$t('ve.label.account')/*账户*/, width: 120, align: 'center' },
        { prop: 'dlrShortName', label: this.$t('org.label.dlrName')/*经销商*/, width:120, align: 'center'},
        { prop: 'amount', label: this.$t('ve.label.amount')/*到款金额（元）*/, width: 140, align: 'center'  },
        { prop: 'ticketNo', label: this.$t('ve.label.ticketNo')/*汇票编号*/, width: 160, align: 'center' },
        { prop: 'auditStatusName', label: this.$t('ve.label.auditStatusName')/*状态*/, width: null, align: 'center' },
        { prop: 'businessTypeName', label: this.$t('ve.label.businessType')/*到款类型*/, width: null, align: 'center' },
        { prop: 'businessClassName', label: this.$t('ve.label.businessClass')/*明细类别*/, width: 150, align: 'center' },
        { prop: 'createDate', label: this.$t('ve.label.createDate')/*到款日期*/, width: 140, align: 'center' },
        { prop: 'auditDate', label: this.$t('ve.label.auditDate')/*审核日期*/, width: 140, align: 'center' },
        { prop: 'pvBandk', label: this.$t('ve.label.pvBank')/*到账银行*/, width: null, align: 'center' },
        { prop: 'pvAccount', label: this.$t('ve.label.pvAccount')/*账号*/, width: 140, align: 'center' },
        { prop: 'outTicketDate', label: this.$t('ve.label.outTicketDate')/*出票日*/, width: 140, align: 'center' },
        { prop: 'expireDate', label: this.$t('ve.label.expireDate')/*到期日*/, width: 140, align: 'center' },
        { prop: 'remark', label: this.$t('ve.label.remark')/*备注*/, width: null, align: 'center' },
        { prop: 'county', label: this.$t('org.label.area')/*区域*/, width: null, align: 'center' },
        { prop: 'bigArea', label: this.$t('org.label.region')/*大区*/, width: null, align: 'center' },
        { prop: 'smallArea', label: this.$t('org.label.village')/*小区*/, width: null, align: 'center' },
        { prop: 'province', label: this.$t('org.label.province')/*省份*/, width: null, align: 'center' },
        { prop: 'city', label: this.$t('org.label.cityName')/*城市名称*/, width: null, align: 'center' },
      ],
      //表单查询数据（查询条件）
      formField:{
        // dlrAccountCode
        carBrandCode: '',
        purcashTypeId: '',
        auditStatus: '',
        dlrId: '',
        businessType: '',
        businessClass: '',
        createDateBegin: '',
        createDateEnd: '',
        pvBank: '',
        auditDateBegin: '',
        auditDateEnd: '',
        // isEnable: ''
        dlrCode: ''
      }
    }
  },
  methods: {
    // 查询校验
    queryTableNew(){
      // const that = this;
            const that = this.$refs.multipleTable;

      // if (that.$utils.isEmpty(that.formField.carBrandCode)) {
      //   that.$message({
      //     message: "请选择账户名称",
      //     type: "warning",
      //     duration: 2000
      //   });
      //   return;
      // }
      // // debugger
      // if (that.$utils.isEmpty(that.formField.purcashTypeId)) {
      //   that.$message({
      //     message: "请选择资金类型",
      //     type: "warning",
      //     duration: 2000
      //   });
      //   return;
      // }
      // if (that.$utils.isEmpty(that.formField.auditStatus)) {
      //   that.$message({
      //     message: "请选择审核状态",
      //     type: "warning",
      //     duration: 2000
      //   });
      //   return;
      // }
      this.queryTable(1);
    }
  }
}
</script>
