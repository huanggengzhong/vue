<!--
* description: 主机厂销退审核
* author: ydche
* createdDate: 2019-10-09
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
  name: "logisticsCheckout",
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
      apiConfig:veApis.carSellSetMock1,
       // 动态组件-按钮
      tableButtons: [
        {compKey: 'btnKey1', type: 'primary', size: 'small', clickEvent: () => this.queryTable(1), text:this.$t('sys.button.query')},//查询
        {compKey: 'btnKey2', type: '', size: 'small', clickEvent: () => this.review(), text: this.$t('sys.button.check')},//审核
        {compKey: 'btnKey3', type: '', size: 'small', clickEvent: () => this.reject(), text: this.$t('sys.button.reject')},//驳回
        {compKey: 'btnKey5', type: '', size: 'small', clickEvent: () => this.reset(), text: this.$t('sys.button.reset')},//重置
      ],
      // 动态组件-查询条件
      tableComponents: CacheConfig.cacheData[this.$route.path] && CacheConfig.cacheData[this.$route.path].tableComponents && CacheConfig.cacheData[this.$route.path].tableComponents.length > 0 ? CacheConfig.cacheData[this.$route.path].tableComponents: [
        {compKey: 'compKey10', labelName: this.$t('org.label.carBrandCn')/*品牌*/, codeField: 'carBrandCode', component: () => import('@/components/org/carBrand/carBrand'), type: 'dropdownList', isMust: true},
        {compKey: 'compKey2', labelName: this.$t("org.label.dlrShortName") /**经销商简称*/, codeField: 'dlrId', component: () => import('@/components/org/orgDlr'), type: 'propus', isMust: true},
        {compKey: 'compKey3', labelName: this.$t('org.label.carConfig')/*车型*/, codeField: 'carConfigId', parentFileds:'carBrandCode', component: () => import('@/components/org/carTypeConfig'), type: 'propus', isMust: true},
        {compKey: 'compKey4', labelName: this.$t('org.label.vin')/*VIN码*/, codeField: 'vin', component: () => import('@/components/org/commonInput'), type: 'inputText', isMust: true},
    ],
     // 动态生成网格列
      tableCols: CacheConfig.cacheData[this.$route.path] && CacheConfig.cacheData[this.$route.path].tableCols && CacheConfig.cacheData[this.$route.path].tableCols.length > 0 ? CacheConfig.cacheData[this.$route.path].tableCols: [
        { prop: 'dlrName', label: this.$t('org.label.dlrName')/*经销商*/, width: 100, align: 'center' },
        { prop: 'carBrandCn', label: this.$t('org.label.carBrandCn')/*品牌*/, width: 100, align: 'center' },
        { prop: 'orderNums', label: this.$t('ve.label.orderNums')/*订单编号*/, width: 180, align: 'center' },
        { prop: 'contractCode', label: this.$t('ve.label.contractCode')/*合同编号*/, width: 180, align: 'center' },
        { prop: 'type', label: this.$t('ve.label.documentType')/*单据类型*/, width: 80, align: 'center' },
        { prop: 'comName', label: this.$t('ve.label.clientName')/*客户名称*/, width: 80, align: 'center' },
        { prop: 'phone', label: this.$t('ve.label.phone')/*联系电话*/, width: 110, align: 'center' },
        { prop: 'states', label:  this.$t('ve.label.applyType')/*申请状态*/, width: 100, align: 'center' },
        { prop: 'comName', label: this.$t('ve.label.salesConsultant')/*销售顾问*/, width: 80, align: 'center' },
        { prop: 'reson', label:  this.$t('ve.label.unsubscribeReason')/*退订原因*/, width: 120, align: 'center' },
        { prop: 'specialAmount', label:  this.$t('ve.label.sellingPrice')/*销售价格*/, width: 120, align: 'center' },
        { prop: 'specialAmount', label:  this.$t('ve.label.fine')/*罚金*/, width: 120, align: 'center' },
        { prop: 'carSeriesCn', label: this.$t('ve.label.smallCarTypeCn')/*车型中文名*/, width: 120, align: 'center' },
        { prop: 'carConfigCn', label: this.$t('ve.label.carConfig')/*车型配置 */, width: 175, align: 'center' },
        { prop: 'vin', label:  this.$t('org.label.vin')/*vin码*/, width: 175, align: 'center' },
        { prop: 'carColorCode', label: this.$t('ve.label.carColor')/*车身颜色*/, width: 100, align: 'center' },
        { prop: 'carIncolorCode', label: this.$t('org.label.carIncolor')/*内饰色*/, width: 100, align: 'center' },
        { prop: 'optionalPackage', label: this.$t('org.label.optionalPackage')/*选装包*/, width: 100, align: 'center' },
        { prop: 'doneDate', label: this.$t('ve.label.applyDate')/*申请日期*/, width: 100, align: 'center' },
        { prop: 'remark', label: this.$t('ve.label.remark')/*备注*/, width: 120, align: 'center' },
      ],
      formField: {
        carBrandCode: "",
        outStoreCode:"",
        vin: "",
        carStockHouseId: "",
        carConfigId: "",
        carColorId: "",
        carIncolorId: "",
        outStoreDateBegin:"",
        outStoreDateEnd:"",
        outStoreType:"",
        importDateBegin:"",
        importDateEnd:"",
        jiexiStatus:"",
        jiexiDateBegin:"",
        jiexiDateEnd:"",
      },
      custResAppDlaKey:'custResAppDlaKey',
      custResAppDlaVisible:false,

    };
  },
methods:{
    close(){
        this.custResAppDlaVisible = false
    },
    review(){
        let that = this.$refs.multipleTable
        let selData = that.$refs.multipleTable.selection
        if(selData.length === 0){
            this.$message({ message:this.$t('org.message.moreOneData')/*请至少选择一条数据*/ , type: 'warning' });
			    return false;
        }
        this.$confirm('确认审核通过?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
         this.reviewData()
        }).catch(() => {
        });
    },
    reviewData(){
        let that = this.$refs.multipleTable
        let selectData = that.$refs.multipleTable.selection
        let saveCount = 0
        for (var k in selectData) {
        let queryObj = {
          // 删除mutation
          type: "mutation",
          // api配置
          apiConfig: veApis.targetQuantityImport2,
          variables: {
            //当前中台使用的名称有dataInfo、info，具体查看API文档
            dataInfo: {
              carBrandCode: selectData[k].carBrandCode,
              purRequireId: selectData[k].batchOrderScheduleId,
              updateControlId: selectData[k].updateControlId
            }
          }
        };
        //转换了中台请求格式数据
        var paramD = that.$getParams(queryObj);
        // 调用中台API方法（可复用）
        that.$requestGraphQL(paramD).then(response => {
          if (response.data[queryObj.apiConfig.ServiceCode].result === "1") {
            saveCount++;
          } else {
            saveState = false;
            msg = response.data[queryObj.apiConfig.ServiceCode].msg;
            that.$message({
              message: msg,
              type: "warning",
              duration: 2000
            });
          }
          if (saveCount == selectData.length) {
            that.$message({
              message: this.$t('sys.tips.esTip12'),
              type: "success",
              duration: 2000
            });
            that.queryTable(1);
          }
        });
      }
    },
    reject(){
        let that = this.$refs.multipleTable
        let selData = that.$refs.multipleTable.selection
        if(selData.length === 0){
            this.$message({ message:this.$t('org.message.moreOneData')/*请至少选择一条数据*/ , type: 'warning' });
			    return false;
        }
         this.$confirm('确认驳回?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
         this.rejectData()
        }).catch(() => {
        });
    },
    rejectData(){
        let that = this.$refs.multipleTable
        let selectData = that.$refs.multipleTable.selection
        let saveCount = 0
        for (var k in selectData) {
        let queryObj = {
          // 删除mutation
          type: "mutation",
          // api配置
          apiConfig: veApis.targetQuantityImport2,
          variables: {
            //当前中台使用的名称有dataInfo、info，具体查看API文档
            dataInfo: {
              carBrandCode: selectData[k].carBrandCode,
              purRequireId: selectData[k].batchOrderScheduleId,
              updateControlId: selectData[k].updateControlId
            }
          }
        };
        //转换了中台请求格式数据
        var paramD = that.$getParams(queryObj);
        // 调用中台API方法（可复用）
        that.$requestGraphQL(paramD).then(response => {
          if (response.data[queryObj.apiConfig.ServiceCode].result === "1") {
            saveCount++;
          } else {
            saveState = false;
            msg = response.data[queryObj.apiConfig.ServiceCode].msg;
            that.$message({
              message: msg,
              type: "warning",
              duration: 2000
            });
          }
          if (saveCount == selectData.length) {
            that.$message({
              message: this.$t('sys.tips.esTip17'),
              type: "success",
              duration: 2000
            });
            that.queryTable(1);
          }
        });
      }
    },
}


};
</script>
