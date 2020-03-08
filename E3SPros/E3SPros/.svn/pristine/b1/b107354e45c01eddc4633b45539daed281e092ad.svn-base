<template>
    <one-table-template ref="multipleTable"
      :dynamicButtons="tableButtons"
      :dynamicComponents="tableComponents"
      :dynamicApiConfig="apiConfig"
      :dynamicTableCols="tableCols"
      :dynamicFormFields="formField"
      :dynamicIsShowMoreBtn="isShowMoreBtn"

    />
</template>
<script>
import { oneTableWithViewTemplateMixins } from '@/components/mixins/oneTableWithViewTemplateMixins';
import { veApis } from '@/api/graphQLApiList/ve'
import OneTableTemplate from '@/components/templates/oneTable'

export default {
  name:"fundDetails",
  // 组件混入对象：{data[listQuery] methods[queryTable]}
  mixins: [oneTableWithViewTemplateMixins],
  components: {
    OneTableTemplate
  },
  created() {

  },
  mounted() {
    // 调用AppMain中的方法设置网格高度（自适应）
    var that = this
    var parent = this.$utils.getParentView(this.$route.path, this.$parent.$parent)
    if (parent && parent.setTableHeight) {
        // 使用了模板后需要额外加多1层
        parent.setTableHeight(30, 1)
    }
  },
  data() {
    return {
      // 网格查询API配置对象
      apiConfig: veApis.veDrlAccountQry,
      // 动态组件-按钮
      tableButtons: [
        {compKey: 'btnKey2', type: '', size: 'small', clickEvent: () => this.tranPage() , text: this.$t('ve.label.capitalAccount')},//资金上账
        {compKey: 'btnKey3', type: '', size: 'small',clickEvent: () => null, text: this.$t('ve.label.detailsOfFunds')},//资金详情信息
        {compKey: 'btnKey1', type: 'primary', size: 'small', clickEvent: () => this.queryTable(1), text: this.$t('ve.label.query')},//查询
      ],
      // 动态组件-查询条件
      tableComponents: [
        // 显示组件
        //经销商名称
        {compKey: 'compKey1', labelName: this.$t('ve.label.dlr'), codeField:'dlr' , component: () => import('@/components/org/commonInput/searchInput'), type: 'popupsInput', isMust: true,
         popups: {type: 'propus', key: 'key1', state: false, component: () => import('@/components/org/orgDlr')}},
        // 经销商编码
        {compKey: 'compKey2', labelName: this.$t('ve.label.dlrCode'), codeField: 'purOrderCode', component: () => import('@/components/org/commonInput'), type: 'inputText', isMust: true},
        // 账户
        {compKey: 'compKey3', labelName: this.$t('ve.label.account'), codeField: 'carBrandCode', component: () => import('@/components/org/commonInput'), type: 'inputText', isMust: true},
        //资金类型
        {compKey: 'compKey4', labelName: this.$t('ve.label.purcashTypeId'), codeField: 'oemCode', component: () => import('@/components/ve/PurcashType'), type: 'dropdownList', isMust: true},
      ],
      // 动态生成网格列
      tableCols: [
        { prop: 'dlrShortName', label: this.$t('ve.label.dlr'), width: 110, align: 'center' },//经销商
        { prop: 'dlrCode', label:this.$t('ve.label.dlrCode'), width:120 , align: 'center',},//经销商编码
        { prop: 'carBrandCode', label: this.$t('ve.label.accountName'), width: 100, align: 'center' },//账户名称
        { prop: 'purcashTypeName', label: this.$t('ve.label.purcashTypeId'), width: 180, align: 'center', },//资金类型
        { prop: 'remainAmount', label: this.$t('ve.label.remainAmount'), width: 180, align: 'center' },//账户余额
        { prop: 'creditAmout', label:this.$t('ve.label.creditAmout'), width:100 , align: 'center' },//信用额度
        { prop: 'usingCashAmount', label: this.$t('ve.label.usingCashAmount'), width: 150, align: 'center' },//现金可用总额
        { prop: 'usingCreditAmount', label:this.$t('ve.label.usingCreditAmount'), width: 150, align: 'center' },//额度可用总额
        { prop: 'freezeCashAmount', label: this.$t('ve.label.freezeCashAmount'), width: 150, align: 'center'  },//现金冻结金额
        { prop: 'freezeCreditAmount', label: this.$t('ve.label.freezeCreditAmount'), width: 150, align: 'center'  },//额度冻结金额
        { prop: 'tempCreditAmount', label: this.$t('ve.label.tempCreditAmount'), width: 150, align: 'center' },//临时信用额度
        { prop: 'county', label: this.$t('ve.label.county1'), width: 120, align: 'center' },//地区
        { prop: 'bigarea', label: this.$t('ve.label.bigarea'), width: null, align: 'center' },//大区
        { prop: 'smallArea', label: this.$t('ve.label.smallArea'), width: 120, align: 'center' },//小区
        { prop: 'province', label: this.$t('ve.label.province'), width: null, align: 'center' },//省份
        { prop: 'city', label: this.$t('ve.label.city'), width: null, align: 'center' },//城市
      ],
      //表单查询数据（查询条件）
      formField:{
        carBrandCode: '',
        dlrId: '',
        oemCode:'',
        oemGroup:''
      },
      tableHeight:310,
      isShowMoreBtn:false
    }
  },
  methods: {
    //切换页面
    tranPage(){
        this.$emit("tranPage",1);
    }
  }
}
</script>
