<!--
* description: 财务审核
* author: linsy
* createdDate: 2019-08-07
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
  name:"financialAudit",
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
        {compKey: 'btnKey1', type: 'primary', size: 'small', clickEvent: () => this.queryTable(1), text: this.$t('sys.button.query')},
        {compKey: 'btnKey2', type: '', size: 'small', clickEvent: () => this.rejectOrder(), text: this.$t('sys.button.reject')},
        {compKey: 'btnKey4', type: '', size: 'small', clickEvent: () => this.examine(), text: this.$t('sys.button.examine')},
        {compKey: 'btnKey3', type: '', size: 'small', clickEvent: () => this.reset(), text: this.$t('sys.button.reset')}
      ],
      // 动态组件-查询条件
      tableComponents: CacheConfig.cacheData[this.$route.path] && CacheConfig.cacheData[this.$route.path].tableComponents && CacheConfig.cacheData[this.$route.path].tableComponents.length > 0 ? CacheConfig.cacheData[this.$route.path].tableComponents: [
        // 显示组件
        //经销商
        {compKey: 'compKey1', labelName: this.$t('org.label.dlrName'), codeField: 'dlrId', component: () => import('@/components/org/orgDlr'), type: 'propus', isMust: true},
        // 模块名称
        {compKey: 'compKey2', labelName: this.$t('ve.label.modelCode'), lookuptype: 'DB0001', codeField: 'modelCode', isMul:false,component: () => import('@/components/org/LookupValue'), type: 'dropdownList', isMust: true},
        // 账户名称
        {compKey: 'compKey3', labelName: this.$t('ve.label.dlrAccountName'), lookuptype: 'VE0079', codeField: 'dlrAccountName', isMul:false,component: () => import('@/components/org/LookupValue'), type: 'dropdownList', isMust: true},
        //送货方式
        {compKey: 'compKey4', labelName: this.$t('ve.label.deliverModeName'), lookuptype: 'VE0079', isMul:false,codeField: 'purcashTypeId', component: () => import('@/components/org/LookupValue'), type: 'dropdownList', isMust: true},
        // 明细类别
        {compKey: 'compKey5', labelName: this.$t('ve.label.bussinessClassName'), lookuptype: 'VE0138', codeField: 'businessClass', isMul:false,component: () => import('@/components/org/LookupValue'), type: 'dropdownList', isMust: false},
        // 到款银行
        {compKey: 'compKey6', labelName: this.$t('ve.label.pvAccount'), lookuptype: 'VE0139', codeField: 'pvAccount', isMul:false,component: () => import('@/components/org/LookupValue'), type: 'dropdownList', isMust: false},
        // 审核日期
        {compKey: 'compKey7', labelName: this.$t('ve.label.auditDateBegin'), codeField: 'auditDateBegin', component: () => import('@/components/org/datePicker/datePicker'), type: 'datePicker', dateOptionsType: '0', isMust: false },
        {compKey: 'compKey8', labelName: this.$t('ve.label.auditDateEnd'), codeField: 'auditDateEnd', component: () => import('@/components/org/datePicker/datePicker'), type: 'datePicker', dateOptionsType: '0', isMust: false },
      ],
      // 动态生成网格列
      tableCols: CacheConfig.cacheData[this.$route.path] && CacheConfig.cacheData[this.$route.path].tableCols && CacheConfig.cacheData[this.$route.path].tableCols.length > 0 ? CacheConfig.cacheData[this.$route.path].tableCols: [
      //  经销商
       { prop: 'dlrShortName', label: this.$t('org.label.dlrName'), width: 110, align: 'center' },
        { prop: 'dlrCode', label: '经销商id', width: 0, align: 'center' ,hidden:true},
        // 账户名称
        { prop: 'dlrAccountName', label: this.$t('ve.label.dlrAccountName'), width: 110, align: 'center'},
        { prop: 'dlrAccountCode', label: '账户编码', width: 110, align: 'center',hidden:true},
        // 金额
        { prop: 'amount', label: this.$t('ve.label.amount'), width: 110, align: 'center'},
        // 资金操作类型
        { prop: 'businessTypeName', label: this.$t('ve.label.businessTypeName'), width: 110, align: 'center'},
        { prop: 'purcashTypeId', label: '资金操作类型ID', width: 110, align: 'center',hidden:true},
        // 明细类别
        { prop: 'businessClassName', label: this.$t('ve.label.bussinessClassName'), width: 110, align: 'center'},
        { prop: 'businessClass', label: '明细类别编码', width: 110, align: 'center',hidden:true},
        // 到款银行
        { prop: 'pvBandk', label: this.$t('ve.label.pvAccount'), width: 110, align: 'center'},
      //  账号
       { prop: 'pvAccount', label: this.$t('ve.label.pvAccount'), width: 110, align: 'center'},
        // 汇票编号
        { prop: 'ticketNo', label: this.$t('ve.label.ticketNo'), width: 110, align: 'center'},
        // 交易日期
        { prop: 'expireDate', label: this.$t('ve.label.expireDate'), width: 110, align: 'center'},
        // 出票日
        { prop: 'outTicketDate', label: this.$t('ve.label.outTicketDate'), width: 110, align: 'center'},
        // 到期日
        { prop: 'createDate', label: this.$t('ve.label.createDate'), width: 110, align: 'center'},
        // 银行流水
        { prop: 'bankNumber', label: this.$t('ve.label.bankNumber'), width: 110, align: 'center'},
        // 审核类型
        { prop: 'auditStatusName', label: this.$t('ve.label.auditStatusName'), width: 110, align: 'center'},
        // 模块名称
        { prop: 'modelName', label: this.$t('ve.label.modelCode'), width: 110, align: 'center'},
        // 录入人
        { prop: 'creator', label: this.$t('ve.label.creator'), width: 110, align: 'center'},
        // 录入时间
        { prop: 'createTime', label: this.$t('ve.label.createTime'), width: 110, align: 'center'},
        { prop: 'updateControlId', label: '并发控制ID', width: 110, align: 'center',hidden:true},
        // 备注
        { prop: 'remark', label: this.$t('ve.label.remark') + '+', width: 150, align: 'center', isComponent: true,
          comps: [{compKey: 'propKey1', isShowLabel: false, codeField: 'remark', clickEvent: () => null, component: () => import('@/components/org/commonInput')}]
        }
      ],
      //表单查询数据（查询条件）
      formField:{
       dlrId:'',
       modelCode:'',
       dlrAccountName:'',
       purcashTypeId:'',
       businessClass:'',
       pvAccount:'',
       auditDateBegin:'',
       auditDateEnd:''
      }
    }
  },
  methods: {
    //驳回
    rejectOrder(){
      const that = this.$refs.multipleTable;
      let saveState = true;
      let saveCount = 0;
      let msg = '';

      let selectData = that.$refs.multipleTable.selection;
      if (selectData.length < 1) {
        that.$message({
          message: '请选择需要驳回的财务单',
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
          apiConfig: veApis.veAccountReject,
          variables: {
            //当前中台使用的名称有dataInfo、info，具体查看API文档
            dataInfo: {
              dlrAccountId: selectData[k].dlrAccountCode,
              dlrAccountRInfoId: selectData[k].purcashTypeId,
              updateControlId	: selectData[k].updateControlId
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
              message: '驳回成功',
              type: 'success',
              duration: 2000
            });

            that.queryTable(1);
          }
        });
      }
    },
    // 审核
    examine(){
      const that = this.$refs.multipleTable;
      let saveState = true;
      let saveCount = 0;
      let msg = '';
      let selectData = that.$refs.multipleTable.selection;
      if (selectData.length < 1) {
        that.$message({
          message: '请选择需要审核的财务单',
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
          apiConfig: veApis.veAccountQry,
          variables: {
            //当前中台使用的名称有dataInfo、info，具体查看API文档
            dataInfo: {
              dlrAccountId: selectData[k].dlrAccountCode,
              dlrAccountRInfoId: selectData[k].purcashTypeId,
              updateControlId	: selectData[k].updateControlId,
              businessType:selectData[k].businessType,
              businessClass: selectData[k].businessClass,
              amount: selectData[k].amount,
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
              message: '审核成功',
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
