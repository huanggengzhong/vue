<!--
* description: 经销商可用资金查询
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
      :dynamicIsShowMoreBtn="false"
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
  name:"vedlrUseableFundQuery",
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
      apiConfig: veApis.veDrlAccountQry,
      // 动态组件-按钮
      tableButtons: [
        {compKey: 'btnKey1', type: 'primary', size: 'small', clickEvent: () => this.queryTable(1), text: this.$t('sys.button.query')/*查询*/},
        {compKey: 'btnKey2', type: '', size: 'small', clickEvent: () => this.reset(), text: this.$t('sys.button.reset')/*重置*/},
        {compKey: 'btnKey3', type: '', size: 'small', clickEvent: () => this.exportExcel(), text: this.$t('sys.button.export')/*导出*/}
      ],
      // 动态组件-查询条件
      tableComponents: CacheConfig.cacheData[this.$route.path] && CacheConfig.cacheData[this.$route.path].tableComponents && CacheConfig.cacheData[this.$route.path].tableComponents.length > 0 ? CacheConfig.cacheData[this.$route.path].tableComponents: [
        // 显示组件
        {compKey: 'compKey1', labelName: this.$t('org.label.dlrName')/*经销商*/, codeField: 'drlId', component: () => import('@/components/org/orgDlr'), type: 'propus', isMust: false},
        {compKey: 'compKey2', labelName: this.$t('ve.label.accountCode')/*账户代码*/, codeField: 'carBrandCode', component: () => import('@/components/ve/accountName'), type: 'dropdownList', isMust: true},
        {compKey: 'compKey3', labelName: this.$t('ve.label.purcashTypeId')/*资金类型*/, codeField: 'purcashTypeId', component: () => import('@/components/ve/PurcashType'), type: 'dropdownList', isMust: true},

      ],
      // 动态生成网格列
      tableCols: CacheConfig.cacheData[this.$route.path] && CacheConfig.cacheData[this.$route.path].tableCols && CacheConfig.cacheData[this.$route.path].tableCols.length > 0 ? CacheConfig.cacheData[this.$route.path].tableCols: [
        { prop: 'dlrShortName', label: this.$t('org.label.dlrName')/*经销商*/, width: 110, align: 'center' },
        { prop: 'dlrCode', label:this.$t('org.label.dlrCode')/*经销商编码*/, width:110, align: 'center'},
        { prop: 'carBrandCode', label:this.$t('ve.label.account')/*账户*/, width: null, align: 'center'  },
        { prop: 'purcashTypeName', label:this.$t('ve.label.purcashTypeId')/*资金类型*/, width: 130, align: 'center' },
        { prop: 'remainAmount', label: this.$t('ve.label.remainAmount')/*账户余额*/, width: 130, align: 'center' },
        { prop: 'creditAmout', label: this.$t('ve.label.creditAmout')/*信用额度*/, width: 130, align: 'center' },
        { prop: 'usingCashAmount', label: this.$t('ve.label.usingCashAmount')/*现金可用总额*/, width: 130, align: 'center' },
        { prop: 'usingCreditAmount', label: this.$t('ve.label.usingCreditAmount')/*额度可用总额*/, width: 130, align: 'center' },
        { prop: 'freezeCashAmount', label: this.$t('ve.label.freezeCashAmount')/*现金冻结金额*/, width: 130, align: 'center' },
        { prop: 'freezeCreditAmount', label: this.$t('ve.label.freezeCreditAmount')/*额度冻结金额*/, width: 130, align: 'center', hidden: false },
        { prop: 'tempCreditAmount', label: this.$t('ve.label.tempCreditAmount')/*临时信用额度*/, width: 130, align: 'center' },
        { prop: 'tempCreditExpireDate', label: this.$t('ve.label.tempCreditExpireDate')/*临时信用额度到期日*/, width: 190, align: 'center' },
        { prop: 'county', label:this.$t('ve.label.county1')/*地区*/, width: 110, align: 'center' },
        { prop: 'bigarea', label: this.$t('org.label.region')/*大区*/, width: 110, align: 'center' },
        { prop: 'smallArea', label:this.$t('org.label.village')/*小区*/, width: 110, align: 'center' },
        { prop: 'province', label: this.$t('org.label.province')/*省份*/, width: 110, align: 'center' },
        { prop: 'city', label: this.$t('org.label.cityName')/*城市名称*/, width: 110, align: 'center' },
      ],
      //表单查询数据（查询条件）
      formField:{
        dlrId: '',
        carBrandCode: '',
        purcashTypeId: ''
      }
    }
  },
  methods: {
    // exportToExcel() {
    //   // const that = this.$refs.multipleTable;
    //   require.ensure([], () => {
    //     const { export_json_to_excel } = require('../../../../excel/Export2Excel');
    //     const tHeader = ['经销商', '经销商编码', '账户'];
    //     // 上面设置Excel的表格第一行的标题
    //     const filterVal = ['dlrShortName', 'dlrCode', 'carBrandCode'];
    //     // 上面的index、nickName、name是tableData里对象的属性
    //     const newListqw = this.list;  //把data里的tableData存到list
    //     // const data = this.formatJson(filterVal, newListqw);
    //     export_json_to_excel(tHeader, newListqw, '列表excel');
    //   })
    //   debugger
    // },
    // formatJson(filterVal, jsonData) {
    //   return jsonData.map(v => filterVal.map(j => v[j]))
    // }
  }
}
</script>
