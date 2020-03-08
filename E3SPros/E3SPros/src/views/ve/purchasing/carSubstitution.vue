<!--
* description: 车辆置换
* author: linsy
* createdDate: 2019-08-15
*logs ydche  添加国际化 2019-09-24
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
    <subDlalog :isVisible="subStiVisable" @changeCode="changeSub" :listDialog="listDialog"/>
  </div>
</template>
<script>
import { oneTableWithViewTemplateMixins } from '@/components/mixins/oneTableWithViewTemplateMixins';
import { veApis } from '@/api/graphQLApiList/ve'
import OneTableTemplate from '@/components/templates/oneTable'
import subDlalog from './carSubstitutionDialog'
export default {
  name:"veCarLimit",
  // 组件混入对象：{data[listQuery] methods[queryTable]}
  mixins: [oneTableWithViewTemplateMixins],
  components: {
    OneTableTemplate,subDlalog
  },
  data() {
    return {
      // 网格查询API配置对象
      apiConfig: veApis.vePurOrderAssignQuery,
      // 动态组件-按钮
      tableButtons: [
        {compKey: 'btnKey1', type: 'primary', size: 'small', clickEvent: () => this.queryTable(1), text: this.$t('sys.button.query')},//查询
        {compKey: 'btnKey3', type: '', size: 'small', clickEvent: () => this.substitution(), text: this.$t('sys.button.replacement')},//置换
        {compKey: 'btnKey4', type: '', size: 'small', clickEvent: () => this.reset(), text: this.$t('sys.button.reset')},//重置
        {compKey: 'btnKey5', type: '', size: 'small', clickEvent: () => this.exportExcel(), text: this.$t('sys.button.export')},//导出
      ],
      // 动态组件-查询条件
      tableComponents: [
        // 显示组件
        {compKey: 'compKey1', labelName:  this.$t('org.label.carBrandCn')/*品牌*/, codeField: 'carBrandCode', component: () => import('@/components/org/carBrand/carBrand'), type: 'dropdownList', isMust: true},
        {compKey: 'compKey2', labelName: this.$t('ve.label.purOrderCode')/*采购单号*/, codeField: 'purOrderCode', component: () => import('@/components/org/commonInput'), type: 'inputText', isMust: true},
        {compKey: 'compKey3', labelName: this.$t('org.label.vin')/*VIN码*/, codeField: 'vin', component: () => import('@/components/org/commonInput'), type: 'inputText', isMust: true},
        {compKey: 'compKey4', labelName: this.$t('org.label.warnHome')/*仓库*/, lookuptype: 'VE0007', codeField: 'curShId', component: () => import('@/components/org/LookupValue'), type: 'dropdownList', isMust: true},
        {compKey: 'compKey5', labelName: this.$t('ve.label.carBrandType')/*采购单类型*/, lookuptype: 'VE0007', codeField: 'purchaseOrderTypeId', component: () => import('@/components/org/LookupValue'), type: 'dropdownList', isMust: false},
        {compKey: 'compKey6', labelName: this.$t('org.label.capitalType')/*资金类型*/, lookuptype: 'VE0007', codeField: 'cashTypeId', component: () => import('@/components/org/LookupValue'), type: 'dropdownList', isMust: false},
        {compKey: 'compKey7', labelName: this.$t('ve.label.reviewStartTime')/*审核开始时间*/, codeField: 'auditDateBegin', component: () => import('@/components/org/datePicker/datePicker'), type: 'datePicker', dateOptionsType: '1', isMust: false },
        {compKey: 'compKey8', labelName: this.$t('ve.label.reviewEndTime')/*审核结束时间*/, codeField: 'auditDateEnd', component: () => import('@/components/org/datePicker/datePicker'), type: 'datePicker', dateOptionsType: '1', isMust: false },
        {compKey: 'compKey9', labelName: this.$t('org.label.dlrName')/*经销商*/, codeField: 'drlId', component: () => import('@/components/org/orgDlr'), type: 'propus', isMust: false},
        {compKey: 'compKey10', labelName: this.$t('org.label.carType')/*车型*/, codeField: 'carConfigId', component: () => import('@/components/org/carTypeConfig'), type: 'propus', isMust: false},
        {compKey: 'compKe11', labelName: this.$t('org.label.carColor')/*车身颜色*/, codeField: 'carColorId', component: () => import('@/components/org/carColor'), type: 'propus', isMust: false},
        {compKey: 'compKey12', labelName: this.$t('org.label.carIncolor')/*内饰色*/, codeField: 'carIncolorId', component: () => import('@/components/org/TrimPopupColor'), type: 'propus', isMust: false},
        {compKey: 'compKey13', labelName: this.$t('ve.label.distributionStartTime')/*分配开始时间*/, codeField: 'assignDateBegin', component: () => import('@/components/org/datePicker/datePicker'), type: 'datePicker', dateOptionsType: '1', isMust: false },
        {compKey: 'compKey14', labelName: this.$t('ve.label.distributionEndTime')/*分配结束时间*/, codeField: 'assignDateEnd', component: () => import('@/components/org/datePicker/datePicker'), type: 'datePicker', dateOptionsType: '1', isMust: false },
        {compKey: 'compKey15', labelName: this.$t('ve.label.tranportName')/*送货方式*/, lookuptype: 'transportTypeCode', codeField: 'carHouseType', component: () => import('@/components/org/LookupValue'), type: 'dropdownList', isMust: false},
      ],
      // 动态生成网格列
      tableCols: [
        { prop: 'carBrandCn', label: this.$t('org.label.carBrandCn')/*品牌*/, width: 120, align: 'center' },
        { prop: 'carBrandCode', label: '品牌编码', width: 120, align: 'center',hidden:true},
        { prop: 'dlrShortName', label: this.$t('org.label.dlrName')/*经销商*/, width: 200, align: 'center'},
        { prop: 'drlId', label: '经销商id', width: 200, align: 'center',hidden:true},
        { prop: 'purcashTypeName', label:  this.$t('ve.label.purcashTypeName')/*采购单资金类型*/, width: 200, align: 'center' },
        { prop: 'deductCashTypeName', label: this.$t('ve.label.deductCashTypeId')/*扣款资金类型*/, width: 200, align: 'center' },
        { prop: 'dlrAccountName', label: this.$t('ve.label.dirAccountName')/*现金账户*/, width: 200, align: 'center'},
        { prop: 'dlrAccountId', label: '现金账户编码', width: 200, align: 'center',hidden:true},
        { prop: 'purOrderCode', label: this.$t('ve.label.purOrderCode')/*采购单号*/, width: 200, align: 'center' },
        { prop: 'purOrderDCode', label: this.$t('ve.label.purOrderDCode')/*采购子单号*/, width: 200, align: 'center' },
        { prop: 'PurPrice', label: this.$t('ve.label.purchaseAmount')/*采购金额*/, width: null, align: 'center' },
        { prop: 'bail', label: this.$t('ve.label.bail')/*冻结金额*/, width: 200, align: 'center' },
        { prop: 'vin', label: 'VIN', width: 200, align: 'center' },
        { prop: 'carConfigName', label: this.$t('org.label.carConfig')/*车型配置*/, width: 200, align: 'center' },
        { prop: 'carColorName', label:  this.$t('org.label.carColor')/*车身颜色*/, width: 200, align: 'center' },
        { prop: 'carColorCode', label: '车身颜色编码', width: 200, align: 'center',hidden:true},
        { prop: 'carColorId', label: '车身颜色id', width: 200, align: 'center',hidden:true},
        { prop: 'carIncolorName', label:this.$t('org.label.carIncolor')/*内饰色*/, width: 200, align: 'center' },
        { prop: 'carIncolorCode', label: '内饰色编码', width: 200, align: 'center' ,hidden:true},
        { prop: 'carIncolorId', label: '内饰色id', width: 200, align: 'center' ,hidden:true},
        { prop: 'carSeriseName', label:  this.$t('org.label.carSeriesId')/*车系*/, width: 200, align: 'center' },
        { prop: 'carSeriseCode', label: '车系', width: 200, align: 'center',hidden:true},
        { prop: 'configcode', label: this.$t('org.label.carTypeCode')/*车型编码*/, width: 200, align: 'center' },
        { prop: 'carColorPrice', label: this.$t('ve.label.colorPrice')/*颜色价格*/, width: 200, align: 'center' },
        { prop: 'carIncolorPrice', label: this.$t('ve.label.inColorPrice')/*内饰价格*/, width: 200, align: 'center' },
        { prop: 'countrySubsidy', label:  this.$t('org.label.subPrice')/*补贴价格*/, width: 150, align: 'center'},
        { prop: 'carProductPrice', label:  this.$t('org.label.proPrice')/*产品价格*/, width: 150, align: 'center'},
        { prop: 'curShName', label: this.$t('ve.label.curShName')/*当前所属仓库*/ , width: 200, align: 'center'},
        { prop: 'deliverMode', label:  this.$t('org.label.tranportName')/*送货方式*/, width: 150, align: 'center'},
        { prop: 'receiveShId', label:  this.$t('ve.label.receiveShId')/*搬入地*/, width: 200, align: 'center'},
        { prop: 'creator', label:  this.$t('ve.label.creator')/*下单人*/, width: 150, align: 'center'}
      ],
      //表单查询数据（查询条件）
      formField:{
        carBrandCode:'',
        purOrderCode:'',
        vin:'',
        curShId:'',
        purchaseOrderTypeId:'',
        cashTypeId:'',
        cashTypeId:'',
        confirDateBegin:'',
        confirDateEnd:'',
        drlId:'',
        carConfigId:'',
        carIncolorId:'',
        auditDateBegin:'',
        auditDateEnd:'',
        transportTypeCode:''
      },
      listDialog:[],
      subStiVisable:false
    }
  },
  methods: {
    substitution(){
        const that = this.$refs.multipleTable;
        let saveState = true;
        let saveCount = 0;
        let msg = '';
        let selectData = that.$refs.multipleTable.selection;
        if (selectData.length < 1) {
            that.$message({
            message: this.$t('org.message.moreOneData')/*请至少选择一条数据*/ ,
            type: 'warning',
            duration: 2000
            });
            return;
        }
      this.listDialog = selectData[0];
        this.subStiVisable=true;
    },
    changeSub(msg){
        this.subStiVisable=false;
        if(msg=='success'){
            this.$message({
                message: this.$t("sys.tips.esTip20"),//置换成功"","",
                type: 'success',
                duration: 2000
            });
        }
    }
  }
}
</script>
