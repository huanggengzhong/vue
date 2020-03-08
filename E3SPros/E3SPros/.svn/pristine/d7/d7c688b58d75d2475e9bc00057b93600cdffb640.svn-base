<!--
* description: 扣款资金类型确认
* author: zhhx
* createdDate: 2019-08-03
-->
<template>
  <div class="app-container app-container-table">
    <one-table-template ref="multipleTable"
      :dynamicButtons="tableButtons"
      :dynamicComponents="tableComponents"
      :dynamicApiConfig="apiConfig"
      :dynamicTableCols="tableCols"
      :dynamicFormFields="formField"
      :dynamicIsColumnDrop="true"
    />
  </div>
</template>
<script>
import { oneTableWithViewTemplateMixins } from '@/components/mixins/oneTableWithViewTemplateMixins';
import { veApis } from '@/api/graphQLApiList/ve'
import OneTableTemplate from '@/components/templates/oneTable'
import { CacheConfig } from '@/cache/configCache/index'
import LangSelect from "@/components/LangSelect"

export default {
  name:"veWithholdPurcashType",
  // 组件混入对象：{data[listQuery] methods[queryTable]}
  mixins: [oneTableWithViewTemplateMixins],
  components: {
    OneTableTemplate,
    LangSelect
  },
  // 阻塞路由预加载网格中组件的数据
 beforeRouteEnter(to, from, next) {
  CacheConfig.initData(to.path, function(){next()})
 },
  data() {
    return {
      // 网格查询API配置对象
      apiConfig: veApis.vePurCashChangeQry,
      // 动态组件-按钮
      tableButtons: [
        {compKey: 'btnKey1', type: 'primary', size: 'small', clickEvent: () => this.queryTable(1), text: this.$t('sys.button.query')},//查询
        {compKey: 'btnKey2', type: '', size: 'small', clickEvent: () => this.synchrony('cashTypeCode'), text: this.$t('sys.button.sync')}, //同步
        {compKey: 'btnKey3', type: '', size: 'small', clickEvent: () => this.save(), text: this.$t('sys.button.save')},  //保存
        {compKey: 'btnKey4', type: '', size: 'small', clickEvent: () => this.reset(), text: this.$t('sys.button.reset')}  //重置
      ],
      // 动态组件-查询条件
      tableComponents: CacheConfig.cacheData[this.$route.path] && CacheConfig.cacheData[this.$route.path].tableComponents && CacheConfig.cacheData[this.$route.path].tableComponents.length > 0 ? CacheConfig.cacheData[this.$route.path].tableComponents: [
       // 显示组件    品牌名称
        {compKey: 'compKey1', labelName: this.$t('org.label.carBrand'), codeField: 'carBrandCode', component: () => import('@/components/org/carBrand/carBrand'), type: 'dropdownList', isMust: true},
        //采购单号
        {compKey: 'compKey2', labelName: this.$t('ve.label.purOrderCode'), codeField: 'purOrderCode', component: () => import('@/components/org/commonInput'), type: 'inputText', isMust: true},
       //VIN码
       {compKey: 'compKey3', labelName: this.$t('ve.label.vin'), codeField: 'vin', component: () => import('@/components/org/commonInput'), type: 'inputText', isMust: true},
       //库存类型
       {compKey: 'compKey11', labelName: this.$t('ve.label.carHouseTypeCode'), lookuptype: 'VE0005', codeField: 'carHouseTypeCode', component: () => import('@/components/org/LookupValue'), type: 'dropdownList', isMust: true},
        // 触发弹窗组件（popups：为弹窗组件）     采购单类型
        {compKey: 'compKey5', labelName: this.$t('ve.label.purchaseOrderTypeCode'),parentFileds: "carBrandCode-carBrandCode", codeField: 'purchaseOrderTypeCode', component: () => import('@/components/ve/PurchaseOrderType'), type: 'dropdownList', isMust: false},
        // 车型
        {compKey: 'compKey6', labelName: this.$t('org.label.carType'), codeField: 'carConfigId', component: () => import('@/components/org/commonInput/searchInput'), type: 'popupsInput', isMust: false,
         popups: {type: 'propus', key: 'key2', state: false, component: () => import('@/components/org/carTypeConfig')}},
        //车身颜色
        {compKey: 'compKey7', labelName: this.$t('org.label.carColor'), codeField: 'carColorId', component: () => import('@/components/org/commonInput/searchInput'), type: 'popupsInput', isMust: false,
         popups: {type: 'propus', key: 'key3', state: false, component: () => import('@/components/org/carColor/carColor')}},
         // 送货方式（值列表）
        {compKey: 'compKey8', labelName: this.$t('ve.label.sendTypeCode'), lookuptype: 'VE0079', codeField: 'sendTypeCode', component: () => import('@/components/org/LookupValue'), type: 'dropdownList', isMust: false},
       // 资金类型
        {compKey: 'compKey9', labelName: this.$t('ve.label.cashType'), codeField: 'cashTypeCode', component: () => import('@/components/ve/PurcashType'), type: 'dropdownList', isMust: false},
        // 日期控件  分配日期
        {compKey: 'compKey10', labelName: this.$t('ve.label.assignDateBegin'), codeField: 'assignDateBegin', component: () => import('@/components/org/datePicker/datePicker'), type: 'datePicker', dateOptionsType: '1', isMust: false },
        {compKey: 'compKey11', labelName: this.$t('ve.label.assignDateEnd'), codeField: 'assignDateEnd', component: () => import('@/components/org/datePicker/datePicker'), type: 'datePicker', dateOptionsType: '1', isMust: false },
        // 审核日期
        {compKey: 'compKey12', labelName: this.$t('ve.label.auditDateBegin'), codeField: 'auditDateBegin', component: () => import('@/components/org/datePicker/datePicker'), type: 'datePicker', dateOptionsType: '1', isMust: false },
        {compKey: 'compKey13', labelName: this.$t('ve.label.auditDateEnd'), codeField: 'auditDateEnd', component: () => import('@/components/org/datePicker/datePicker'), type: 'datePicker', dateOptionsType: '1', isMust: false }
    ,

    ],
      // 动态生成网格列
      tableCols: CacheConfig.cacheData[this.$route.path] && CacheConfig.cacheData[this.$route.path].tableCols && CacheConfig.cacheData[this.$route.path].tableCols.length > 0 ? CacheConfig.cacheData[this.$route.path].tableCols: [
         //资金类型+
         { prop: 'cashTypeCode', label: this.$t('ve.label.cashType') + '+', width: 170, align: 'center', isComponent: true,
          comps: [{compKey: 'propKey1', isMul: false, isShowLabel: false, codeField: 'cashTypeCode', clickEvent: () => null, component: () => import('@/components/ve/PurcashType')}]
        },
        //账户
        { prop: 'dlrAccountName', label: this.$t('ve.label.dlrAccountName'), width: 120, align: 'center' },
       //品牌名称
       { prop: 'carBrandCn', label: this.$t('org.label.carBrand'), width: 110, align: 'center' },
        { prop: 'carBrandCode', label: '品牌编号', width: 0, align: 'center', hidden: true },
        // 经销商
        { prop: 'dlrShortName', label: this.$t('org.label.dlrName'), width: 100, align: 'center' },
        { prop: 'purOrderDId', label: '采购单ID', width: 180, align: 'center', hidden: true },
      //  采购单号
       { prop: 'purOrderCode', label: this.$t('ve.label.purOrderCode'), width: 180, align: 'center' },
     //  采购子单号
     { prop: 'purOrderDCode', label: this.$t('ve.label.purOrderDCode'), width: 200, align: 'center' },
      // 采购价格
      { prop: 'purPrice', label: this.$t('ve.label.purPrice'), width: 100, align: 'center' },
      //  冻结资金
       { prop: 'bail', label: this.$t('ve.label.bail'), width: 80, align: 'center' },
        // VIN码
       { prop: 'vin', label: this.$t('ve.label.vin'), width: 80, align: 'center' },
      //  车型配置
       { prop: 'carConfigName', label: this.$t('org.label.carConfig'), width: 120, align: 'center' },
      //  车身颜色
       { prop: 'carColorName', label: this.$t('org.label.carColor'), width: null, align: 'center' },
      //  内饰色
       { prop: 'carIncolorName', label: this.$t('org.label.carIncolor'), width: null, align: 'center' },
        // 车系
        { prop: 'carSeriseName', label: this.$t('org.label.carSerise'), width: 180, align: 'center' },
      //车型配置
       { prop: 'carConfigCode', label: this.$t('org.label.carTypeCode'), width: 0, align: 'center', hidden: true },
        //  颜色价格
        { prop: 'carColorPrice', label: this.$t('org.label.colorPrice'), width: null, align: 'center' },
        // 内饰价格
        { prop: 'carIncolorPrice', label:  this.$t('org.label.inColorPrice'), width: null, align: 'center' },
      // 补贴价格
     { prop: 'countrySubsidy', label: this.$t('org.label.subPrice'), width: null, align: 'center' },
      //  产品价格
       { prop: 'carPrice', label: this.$t('org.label.proPrice'), width: null, align: 'center' },
      //  当前所属仓库
       { prop: 'curShName', label:  this.$t('ve.label.curShName'), width: 120, align: 'center' },
        // 送货方式
        { prop: 'deliverModeName', label: this.$t('ve.label.deliverModeName'), width: null, align: 'center' },
        // 搬入地
        { prop: 'receiveShId', label: this.$t('ve.label.receiveShId'), width: null, align: 'center' },
        // 下单人
        { prop: 'creator', label: this.$t('ve.label.creator'), width: null, align: 'center' },
        { prop: 'updateControlId', label: '并发控制', width: 0, align: 'center', hidden: true }
      ],
      //表单查询数据（查询条件）
      formField:{
        carBrandCode: '',
        purOrderCode: '',
        vin: '',
        cashTypeCode: '',
        dlr: '',
        carConfigId: '',
        carColorId: '',
        carIncolorId: '',
        auditDateBegin: '',
        auditDateEnd: '',
        sendTypeCode: ''
      }
    }
  },
  methods: {

    //保存
    save() {
      const that = this.$refs.multipleTable;
      let saveState = true;
      let saveCount = 0;
      let msg = '';

      let selectData = that.$refs.multipleTable.selection;
      if (selectData.length < 1) {
        that.$message({
          message: '请选择需要保存的数据',
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
          apiConfig: veApis.vePurCashConfirm,
          variables: {
            //当前中台使用的名称有dataInfo、info，具体查看API文档
            dataInfo: {
              carBrandCode: selectData[k].carBrandCode,
              purOrderDId: selectData[k].purOrderDId,
              cashTypeCode:selectData[k].cashTypeCode,
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
              message: '保存成功',
              type: 'success',
              duration: 2000
            });

            that.queryTable(1);
          }
        });
      }
    },
    //同步
      // synchrony() {
      //   const that = this.$refs.multipleTable;
      //   //获取选择行的值    this.$refs.multipleTable获取网格  需要在网格添加ref="multipleTable"
      //   let selectData = that.$refs.multipleTable.selection;
      //   if (selectData.length < 1) {
      //     that.$message({
      //       message: '请选择需要同步的数据',
      //       type: 'warning',
      //       duration: 2000
      //     });
      //     return;
      //   }
      //   // console.log(selectData)
      //   // debugger
      //   var selectIndexSort = [];
      //   for (var k in selectData) {
      //     selectIndexSort.push(selectData[k].index);
      //   }

      //   //选择行重新排序
      //   selectIndexSort.sort(function(a, b) {
      //     return a > b ? 1 : -1;
      //   });
      //   for (var i = 1; i < selectIndexSort.length; i++) {
      //     //将选择第一行的某个字段数据赋给其他选择行, 可以多个
      //     that.list[selectIndexSort[i]].cashTypeCode =
      //       that.list[selectIndexSort[0]].cashTypeCode;
      //   }
      // },


  }
}
</script>
