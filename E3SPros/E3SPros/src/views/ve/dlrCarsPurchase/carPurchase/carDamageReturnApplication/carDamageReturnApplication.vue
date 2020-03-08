<!--
* description: 车损退回申请
* author: ydche
* createdDate: 2019-09-24
-->
<template>
  <el-tabs class="elTabs" style="background: transparent;" v-model="activeName" type="border-card">
    <el-tab-pane :label="$t('ve.label.retreatQuery')/*销退查询*/" name="first">
        <div class="paddingTop45 app-container app-container-table">
            <one-table-template ref="multipleTable"
            :dynamicButtons="tableButtons"
            :dynamicComponents="tableComponents"
            :dynamicApiConfig="apiConfig"
            :dynamicTableCols="tableCols"
            :dynamicFormFields="formField"
            :dynamicTableOtherHeight="38"
            :dynamicIsShowSelect="true"
            :dynamicIsInitTable="true"
            :dynamicIsColumnDrop="true"
            :dynamicIsShowMoreBtn="true"
            />
        </div>
    </el-tab-pane>
    <el-tab-pane :label="$t('ve.label.returnApplication')/*退回申请*/" name="second">
        <div class="paddingTop45 app-container app-container-table">
            <one-table-template ref="multipleTables"
            :dynamicButtons="retuApplicaTableButtons"
            :dynamicComponents="retuApplicaTableComponents"
            :dynamicApiConfig="apiConfigReturnTable"
            :dynamicTableCols="retuApplicaTableCols"
            :dynamicFormFields="retuApplicaFormField"
            :dynamicTableOtherHeight="207"
            :dynamicIsShowSelect="true"
            :dynamicIsInitTable="true"
            :dynamicIsColumnDrop="true"
            :dynamicIsShowMoreBtn="true"
            />
        </div>
    </el-tab-pane>
  </el-tabs>

</template>
<script>
import { oneTableWithViewTemplateMixins } from '@/components/mixins/oneTableWithViewTemplateMixins';
import { veApis } from '@/api/graphQLApiList/ve'
import OneTableTemplate from '@/components/templates/oneTable'

import { CacheConfig } from '@/cache/configCache/index'
export default {
  name:"carProductQuery",
  // 组件混入对象
  mixins: [oneTableWithViewTemplateMixins],
  components: {
    OneTableTemplate,

  },// 阻塞路由预加载网格中组件的数据
beforeRouteEnter(to, from, next) {CacheConfig.initData(to.path, function(){next()})},

  data() {
    return {
      activeName: 'first',
      // 网格查询API配置对象
      apiConfig: veApis.dlrSalesReturn1,
      apiConfigReturnTable: veApis.dlrSalesReturn1,
      // 动态组件-按钮
      tableButtons: [
        {compKey: 'btnKey1', type: 'primary', size: 'small', clickEvent: () => this.queryTable(1), text:this.$t('sys.button.query')},//查询
        {compKey: 'btnKey2', type: '', size: 'small', clickEvent: () => this.application(), text:this.$t('sys.button.application')},// '申请'
        {compKey: 'btnKey5', type: '', size: 'small', clickEvent: () => this.reject(), text:this.$t('sys.button.reject')},//驳回
        {compKey: 'btnKey6', type: '', size: 'small', clickEvent: () => this.reset(), text:this.$t('sys.button.reset')},//重置
        {compKey: 'btnKey7', type: '', size: 'small', clickEvent: () => this.businessReview(), text:this.$t('ve.label.businessReview')},//业务审核
        {compKey: 'btnKey8', type: '', size: 'small', clickEvent: () => this.financialReview(), text:this.$t('ve.label.financialReview')},//财务审核
      ],
      // 退回申请动态组件-按钮
      retuApplicaTableButtons:[
        {compKey: 'btnKey9', type: 'primary', size: 'small', clickEvent: () => this.queryReturnAppliTable(1), text:this.$t('sys.button.query')},//查询
        {compKey: 'btnKey10', type: '', size: 'small', clickEvent: () => this.save(), text:this.$t('sys.button.save')},//保存
        {compKey: 'btnKey11', type: '', size: 'small', clickEvent: () => this.resetReturnApp(), text:this.$t('sys.button.reset')},//重置
        {compKey: 'btnKey12', type: '', size: 'small', clickEvent: () => this.returnFirst(), text:this.$t('sys.button.return')},//返回

      ],
      // 动态组件-查询条件
      tableComponents: CacheConfig.cacheData[this.$route.path] && CacheConfig.cacheData[this.$route.path].tableComponents.length > 0 ? CacheConfig.cacheData[this.$route.path].tableComponents : [

        {compKey: 'compKey1', labelName: this.$t('org.label.carBrandCn'), codeField: 'carBrandCode', component: () => import('@/components/org/carBrand/carBrand'), isRequire: true, type: 'dropdownList', isMust: true},//品牌
        {
          compKey: "compKey2",
          labelName: this.$t('org.label.carConfig'),/*车型配置*/
          parentFileds:'carBrandCode-carBrandCode',
          codeField: "carConfigId",
          component: () => import("@/components/org/carTypeConfig"),
          type: "propus",
          isMust: true,
        },
        {
          compKey: "compKey3",
          labelName: this.$t('org.label.carColor')/*车身颜色*/,
          codeField: "carColorId",
          parentFileds:'carBrandCode-carBrandCode|carConfigId-carConfigId',
          component: () => import("@/components/org/carColor"),
          type: "propus",
          isMust: true
        },
        {
          compKey: "compKey4",
          labelName: this.$t('org.label.carIncolor')/*内饰色*/,
          codeField: "carIncolorId",
          parentFileds:'carBrandCode-carBrandCode|carConfigId-carConfigId',
          component: () => import("@/components/org/TrimPopupColor"),
          type: "propus",
          isMust: true
        },
        { compKey: "compKey5",
          labelName: this.$t('ve.label.carDamageType'),//车损类型
          lookuptype: "VE0097",
          codeField: "retirementType",
          component: () => import("@/components/org/LookupValue"),
          type: "dropdownList",
          isMust: false
        },
        {
          compKey: "compKey6",
          labelName:this.$t('ve.label.retreatDate') ,/*销退日期*/
          codeField: "retirementDateBegin",
          isRequire: false,
          component: () => import("@/components/org/datePicker/datePicker"),
          type: "datePicker",
          dateOptionsType: "1",
          isMust: false
        },
        {
          compKey: "compKey7",
          labelName: this.$t('ve.label.to') ,/*至*/
          codeField: "retirementDateEnd",
          isRequire: false,
          component: () => import("@/components/org/datePicker/datePicker"),
          type: "datePicker",
          dateOptionsType: "1",
          isMust: false
        },
        {compKey: 'compKey8', labelName: this.$t('ve.label.vin')/*VIN码*/,   codeField: 'vin', component: () => import('@/components/org/commonInput'), type: 'inputText', isMust: false},
        { compKey: "compKey9",
          labelName:this.$t('ve.label.receiptState') ,/*单据状态*///
          lookuptype: "VE0039",
          codeField: "carSeriesCode",
          component: () => import("@/components/org/LookupValue"),
          type: "dropdownList",
          isMust: false
        },

      ],
      //退回申请查询条件
      retuApplicaTableComponents:  [
        // { compKey: "compKey10",
        //   labelName: this.$t('ve.label.carDamageType'),//车损类型
        //   lookuptype: "VE0039",
        //   codeField: "retirementType",
        //   component: () => import("@/components/org/LookupValue"),
        //   type: "dropdownList",
        //   isMust: true
        // },
        // { compKey: "compKey11",
        //   labelName: this.$t('ve.label.chooseWarehouse'),//选择仓库
        //   codeField: "carHouseCode",
        //   // lookuptype: "VE0079",
        //   component: () => import("@/components/ve/wareHouseMulti/wareHouseMulti"),
        //   type: "dropdownList",
        //   isMust: true
        // },
        {compKey: 'compKey12', labelName: this.$t('ve.label.vin')/*VIN码*/,   codeField: 'vin', component: () => import('@/components/org/commonInput'), type: 'inputText', isMust: true},
      ],

      // 动态生成网格列
      tableCols: this.getCols(),
      // 退回申请动态生成网格列
      retuApplicaTableCols: this.getRetuApplicaCols(),
      //表单查询数据
      formField:{
        carBrandCode:'',
        carConfigId:'',
        retirementDateEnd:'',
        retirementDateBegin:'',
        carIncolorId:'',
        carSeriesCode:'',
        carColorId:'',
      },
      retuApplicaFormField:{
        retirementType:'',
        carHouseCode:'',
        vin:'',
      }
    }
  },
  mounted(){
    console.log(this.$refs.multipleTable)
  },
  methods: {
    getCols() {
      var cols = [
      ]
      if (CacheConfig.cacheData[this.$route.path] && CacheConfig.cacheData[this.$route.path].tableCols.length > 0) {
        cols = cols.concat(CacheConfig.cacheData[this.$route.path].tableCols)
      } else {
        cols = cols.concat([
        { prop: 'retreatNo', label:  this.$t('ve.label.retreatNo'), width: 120, align: 'center' },//销退单号
        { prop: 'retreatDate', label:  this.$t('ve.label.retreatDate'), width: 120, align: 'center' },//销退日期
        { prop: 'retreatType', label: this.$t('ve.label.retirementType')/*销退类型*/, width: 120, align: 'center' },//销退类型
        { prop: 'retreatAmount', label:this.$t('ve.label.retreatAmount'), width: 120, align: 'center' },//销退金额
        { prop: 'purchaseAmount', label:this.$t('ve.label.purchaseAmount'), width: 120, align: 'center' },//采购金额
        { prop: 'warehouse', label: this.$t('ve.label.retreatWarehouse'), width: 120, align: 'center' },//销退仓库
        { prop: "carBrandCn", label: this.$t('org.label.carBrandCn')/*品牌*/,width: 120,  align: "center" },
        { prop: "carType", label: this.$t('org.label.carType')/*车型*/,width: 120,  align: "center" },
        { prop: "carConfigCn", label: this.$t('org.label.carConfig')/*车型配置*/,width: 180,align: "center" },
        { prop: "vin", label: this.$t('org.label.vin')/*VIN码*/, width: 180, align: "center" },
        { prop: "carColorCode", label: this.$t('org.label.carColor')/*车身颜色*/, width: 120, align: "center" },
        { prop: "carIncolorCode", label: this.$t('org.label.carIncolor')/*内饰色*/,width: 120, align: "center" },
        { prop: 'colorPrice', label:this.$t('ve.label.colorPrice'), width: 120, align: 'center' },//颜色价格
        { prop: 'IncolorPrice', label: this.$t('ve.label.inColorPrice'), width: 120, align: 'center' },//内饰价格
        { prop: 'totalPrice', label: this.$t('ve.label.totalPrice'), width: 120, align: 'center' },//总价
        { prop: 'retreatNo', label:  this.$t('ve.label.carDamageReturned'), width: 120, align: 'center' },//车损退回
        { prop: 'retreatNo', label:  '车损原因' /*this.$t('ve.label.carDamageReturned')*/, width: 120, align: 'center' },//车损原因
        { prop: 'shippingMethod', label: this.$t('ve.label.shippingMethod'), width: 120, align: 'center' },//运送方式
        { prop: 'purchaseConfirmationDate', label: this.$t('ve.label.purchaseConfirmationDate'), width: 120, align: 'center' },//采购确认日期
        { prop: 'documentStatus', label: this.$t('ve.label.receiptState'), width: 120, align: 'center' },//单据状态
        { prop: 'creator', label: this.$t('ve.label.creatorA'), width: 120, align: 'center' },//创建人
        { prop: 'dlrReviewTime', label: this.$t('ve.label.dlrReviewTime'), width: 120, align: 'center' },//经销商审核时间
        { prop: 'dlrReviewMan', label:this.$t('ve.label.dlrReviewMan'), width: 120, align: 'center' },//经销商审核人
        { prop: 'dlrReviewTime', label: this.$t('ve.label.dlrFinancialReviewTime'), width: 120, align: 'center' },//经销商财务审核时间
        { prop: 'dlrReviewMan', label:this.$t('ve.label.dlrFinancialReviewMan'), width: 120, align: 'center' },//经销商财务审核人
        { prop: 'remark', label: this.$t('ve.label.remark'), width: 120, align: 'center' },//备注
        { prop: 'carBrandCode', label: '品牌ID', width: null, align: 'center', hidden: true },
    ])
      }
      return cols
    },
    getRetuApplicaCols() {
      var cols = [
      ]
      if (CacheConfig.cacheData[this.$route.path] && CacheConfig.cacheData[this.$route.path].tableCols.length > 0) {
        cols = cols.concat(CacheConfig.cacheData[this.$route.path].tableCols)
      } else {
        cols = cols.concat([
          {
            prop: "purchaseConfirmationDate",
            label: '车损日期', // this.$t('ve.label.shippingMethod')+'+',/*运输方式+*/
            width: 180,
            align: "center",
            isComponent: true,
            comps: [
            {
            compKey: "propKey1",
            isMul:false,
            isShowLabel: false,
            codeField: "purchaseConfirmationDate",
            lookuptype: "VE0166",
            clickEvent: () => null,
            component: () => import("@/components/org/datePicker/datePicker")
            }
            ]
          },
          {
            prop: "warehouseNo",
            label: '车损原因', //this.$t('ve.label.storageWarehouse')+'+',/*车损原因+*/
            width: 180,
            align: "center",
            isComponent: true,
            comps: [
            {
            compKey: "dropdownList",
            isShowLabel: false,
            isMul:false,
            codeField: "warehouseNo",
            lookuptype: "VE0079",
            clickEvent: () => null,
            component: () => import("@/components/org/LookupValue")
            }
            ]
          },
        { prop: 'retreatNo', label: this.$t('ve.label.purOrderNo')/*采购单编号*/, width: 120, align: 'center' },//采购单编号
        { prop: 'PurchaseType', label: this.$t('ve.label.purOrderTypeName')/*采购单类型*/, width: 120, align: 'center' },//采购单类型
        { prop: "carBrandCn", label: this.$t('org.label.carBrandCn')/*品牌*/,width: 120,  align: "center" },
        { prop: 'carseariesCn', label: this.$t('org.label.carSeriesCn')/*车系名*/, width: 120, align: 'center' },//车系名
        { prop: 'carsearies', label: this.$t('org.label.carSeriesId')/*车系*/, width: 120, align: 'center' },//车系
        { prop: "carType", label: this.$t('org.label.carType')/*车型小类*/,width: 120,  align: "center" },
        { prop: "carConfigCn", label: this.$t('org.label.carConfig')/*车型配置*/,width: 180,  align: "center" },
        { prop: "vin", label: this.$t('org.label.vin')/*VIN码*/,width: 120, align: "center" },
        { prop: "engineNo", label: this.$t('ve.label.engineNo')/*发动机号*/,width: 120, align: "center" },
        { prop: "certificateNo", label: this.$t('ve.label.certificateNo')/*合格证号*/,width: 120, align: "center" },
        { prop: "carColorCode", label: this.$t('org.label.carColor')/*车身颜色*/,width: 120, align: "center" },
        { prop: "carIncolorCode", label: this.$t('org.label.carIncolor')/*内饰色*/,width: 120, align: "center" },
        { prop: "optionalPackage", label: this.$t('org.label.optionalPackage')/*选装包*/,width: 120, align: "center" },
        { prop: 'carBrandCode', label: '品牌ID',width: 120, align: 'center', hidden: true },
    ])
      }
      return cols
    },
    resetReturnApp(){
       this.$refs.multipleTables.reset()
    },
    application(){
      this.activeName = 'second'
    },
    queryReturnAppliTable(page, dataType, size, filterObj, cb) {
      // popups 弹窗  page 页面
      this.$utils.validataMoth(this, 'validpage')
      if (this.valid) {
        this.$refs.multipleTables.queryTable(page, dataType, size, filterObj, cb)
      }
    },
    save(){
        let that = this.$refs.multipleTables
        let selData = that.$refs.multipleTable.selection
        debugger
        if(selData.length === 0){
            this.$message({ message:this.$t('org.message.moreOneData')/*请至少选择一条数据*/ , type: 'warning' });
			    return false;
        }
        let length = selData.length - 1
        for(let i = 0; i < selData.length; i++){
            let queryObj = {
				// 保存mutation
				type: 'mutation',
				// api配置
				apiConfig: veApis.carSellSetMock2,
				//条件/实体参数（变量），根据typeParam中的定义配置
				variables: {
					//当前中台使用的名称有dataInfo、info，具体查看API文档
					dataInfo: selData[i],
				},
			};
			//转换了中台请求格式数据
			var paramD = this.$getParams(queryObj);
			 this.$requestGraphQL(paramD).then(response => {
				if (response.data[queryObj.apiConfig.ServiceCode].result === '1') {
           if(i === length){
               that.$message({
                   message: this.$t('sys.tips.esTip5')/*保存成功*/,
                   type: 'success',
                   duration: 2000,
               });
               this.queryReturnAppliTable(1)
           }
				}else{
            this.$message({
                message: this.$t('sys.tips.esTip10') + response.data[queryObj.apiConfig.ServiceCode].msg,
                type: 'warning',
                duration: 2000
            })
            this.queryReturnAppliTable(1)
        }
			});
        }
    },
    //驳回
    reject(){
      let that = this.$refs.multipleTable
        let selData = that.$refs.multipleTable.selection
        if(selData.length === 0){
            this.$message({ message:this.$t('org.message.moreOneData')/*请至少选择一条数据*/ , type: 'warning' });
			    return false;
        }
        let length = selData.length - 1
        for(let i = 0; i < selData.length; i++){
            let queryObj = {
				// 保存mutation
				type: 'mutation',
				// api配置
				apiConfig: veApis.carSellSetMock2,
				//条件/实体参数（变量），根据typeParam中的定义配置
				variables: {
					//当前中台使用的名称有dataInfo、info，具体查看API文档
					dataInfo: selData[i],
				},
			};
			//转换了中台请求格式数据
			var paramD = this.$getParams(queryObj);
			 this.$requestGraphQL(paramD).then(response => {
				if (response.data[queryObj.apiConfig.ServiceCode].result === '1') {
           if(i === length){
               that.$message({
                   message: this.$t('sys.tips.esTip17')/*驳回成功*/,
                   type: 'success',
                   duration: 2000,
               });
               this.queryTable(1)
           }
				}else{
                this.$message({
                    message: this.$t('sys.tips.esTip10')/*驳回失败*/ + response.data[queryObj.apiConfig.ServiceCode].msg,
                    type: 'warning',
                    duration: 2000
                })
                this.queryTable(1)
            }
			    });
        }
    },
    //业务审核
    businessReview(){

    },
    //财务审核
    financialReview(){

    },
    //删除
    del(index) {
      var curIndex = index;
      const that = this.$refs.multipleTable;
      if (curIndex === undefined || curIndex === null) {
        var currentRow;
        if (that.isMul === true) {
          // 多选
          var selectData = that.selection;
          if (selectData.length > 0) {
            currentRow = selectData[0];
          }
        } else {
          // 单选
          currentRow = that.currentRow;
        }
        if (currentRow) {
          curIndex = currentRow.index;
        }
      }

      if (curIndex === undefined || curIndex === null) {
        this.$alert(this.$t("org.message.selDelData"));/*请选择需要删除的数据*/
        return;
      }
      var editRowData = that.list[curIndex];
      let obj = {};
      obj.carBrandCode = editRowData.carBrandCode;
      obj.updateControlId = editRowData.updateControlId;
      obj.carStockHouseId = editRowData.carStockHouseId;

      let queryObj = {
        //保存需要传 type="mutation"
        type: "mutation",
        // api配置
        apiConfig: veApis.settlementSwitchSet2,
        // 需要调用的API服务配置
        apiServices: [
          {
            //表格中台返回网格的字段
            apiQueryRow: []
          }
        ],
        //条件/实体参数（变量），根据typeParam中的定义配置
        variables: {
          //  pageSize: 1000,
          //  pageIndex: 1,
          //当前中台使用的名称有dataInfo、info，具体查看API文档
          dataInfo: obj
        }
      };
      //转换了中台请求格式数据
      var paramD = that.$getParams(queryObj);
      this.$requestGraphQL(paramD).then(response => {
        if (response.data[queryObj.apiConfig.ServiceCode].result === "1") {
          //通关如果的状态确认是编辑还是添加
          this.$message({ message: this.$t("sys.tips.esTip14"), type: "success" });
          this.queryTable(1);
        } else {
          this.$message({
            message: response.data[queryObj.apiConfig.ServiceCode].msg
          });
        }
      });
    },

    returnFirst(){
         this.activeName = 'first'
    }
  }
}
</script>
<style scoped>
/deep/.el-tabs__header.is-top  {
    margin: 0 10px;
    margin-bottom: 0;
}
/deep/.filter-container.filter-params {
    margin-top: 5px;
}
/deep/.paddingTop45 {
    padding: 35px 10px 0 10px;
}

/deep/.filter-button {
    position: fixed;
    top: 40px;
    right: 15px;
}
/deep/.footerS{
    position: fixed;
    bottom: 40px;
    right: 27px;
}
/deep/.el-tabs__content {
    padding: 10px 0;
}
/deep/.elTabs{
    background: transparent;
}

</style>
