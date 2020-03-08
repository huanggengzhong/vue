<!--
* description: 专营店销退业务确认
* author: zhhx
* createdDate: 2019-09-4
* logs:
*
-->

<template>
  <div class="app-container app-container-table">
    <one-table-template ref="multipleTable"
      :dynamicButtons="tableButtons"
      :dynamicComponents="tableComponents"
      :dynamicApiConfig="apiConfig"
      :dynamicTableCols="tableCols"
      :dynamicFormFields="formField"
      :dynamicIsInitTable="true"
      :dynamicIsColumnDrop="true"
      :dynamicIsShowMoreBtn="true"
    />
  </div>
</template>
<script>
import { oneTableWithViewTemplateMixins } from '@/components/mixins/oneTableWithViewTemplateMixins';
import { veApis } from '@/api/graphQLApiList/ve'
import OneTableTemplate from '@/components/templates/oneTable'

import { CacheConfig } from '@/cache/configCache/index'
export default {
  name:"veDlrBusinessConfirm",
  // 组件混入对象
  mixins: [oneTableWithViewTemplateMixins],
  components: {
    OneTableTemplate,

  },// 阻塞路由预加载网格中组件的数据
beforeRouteEnter(to, from, next) {CacheConfig.initData(to.path, function(){next()})},

  data() {
    return {
      // 网格查询API配置对象
      apiConfig: veApis.veBuPurReturnOrderDQueryFindAll,
      // 动态组件-按钮
      tableButtons: [
        {compKey: 'btnKey1', type: 'primary', size: 'small', clickEvent: () => this.queryTable(1), text:this.$t('sys.button.query')},//查询
        {compKey: 'btnKey5', type: '', size: 'small', clickEvent: () => this.reset(), text:this.$t('sys.button.reset')},//重置
        {compKey: 'btnKey2', type: '', size: 'small', clickEvent: () => this.saveCheck(), text:this.$t('sys.button.check')},// 审核
        {compKey: 'btnKey3', type: '', size: 'small', clickEvent: () => this.saveReject(), text:this.$t('sys.button.reject')},// 驳回
      ],
      // 动态组件-查询条件
      tableComponents: CacheConfig.cacheData[this.$route.path] && CacheConfig.cacheData[this.$route.path].tableComponents.length > 0 ? CacheConfig.cacheData[this.$route.path].tableComponents : [

         {compKey: 'compKey1', labelName: this.$t('org.label.carBrandCn'), codeField: 'carBrandCode', component: () => import('@/components/org/carBrand/carBrand'), isRequire: true, type: 'dropdownList', isMust: true},//品牌
        {
           compKey: "compKey3",
           labelName: this.$t("org.label.dlrName") /*经销商*/,
           codeField: "dlrId",
           component: () => import("@/components/org/orgDlr"),
           type: "propus",
           isMust: true
        },
        { compKey: "compKey2",
          labelName: this.$t('org.label.carConfig'),//车型       车型配置编码
          codeField: "carConfigCode",
          parentFileds:'carBrandCode-carBrandCode',
          component: () => import("@/components/org/carTypeConfig"),
          type: "propus",
          isMust: true
        },
        { compKey: "compKey4",
          labelName: this.$t('org.label.vin'),//vin
          codeField: "vin",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        } ,
        { compKey: "compKey6",
          labelName: this.$t('ve.label.retirementType'),//销退类型
          codeField: "purReturnCode",
          lookuptype: 'VE0039',
          component: () => import("@/components/org/LookupValue"),
          type: "dropdownList",
          isMust: false
        }

      ],
      // 动态生成网格列
      tableCols: this.getCols(),
      statusType: -1,
      //表单查询数据
      formField:{
        carBrandCode:'',
        dlrId:'',
        carConfigCode:'',
        vin: '',
        purReturnCode: ''
      }
    }
  },
  methods: {
    getCols() {
      var cols = [
        // { prop: 'controlBtn', label:this.$t('sys.content.operate'), codeField: 'controlBtn', width: 60, align: 'center', fixed: true, isComponent: true,
        //   comps:[{compKey: 'propKey0', align: 'center', labelName:this.$t('sys.button.edit'), codeField: 'editControlBtn', clickEvent: this.edit, component: () => import('@/components/org/linkButton')}]

        // }//操作
      ]
      if (CacheConfig.cacheData[this.$route.path] && CacheConfig.cacheData[this.$route.path].tableCols.length > 0) {
        cols = cols.concat(CacheConfig.cacheData[this.$route.path].tableCols)
      } else {
        cols = cols.concat([
        { prop: 'carBrandCn', label: this.$t('org.label.carBrandCn'), width: null, align: 'center' },//品牌名称
        { prop: "dlrShortName", label: this.$t('org.label.dlrName')/*经销商*/,  align: "center" },
        //申请单号
        { prop: 'purReturnCode', label:  this.$t('ve.label.purReturnCode'), width: 140, align: 'center' },
        // 申请日期   字段待确认   销退日期
        { prop: 'returnDate', label: this.$t('ve.label.applyDate'), width: 140, align: 'center' },
        //销退类型
        { prop: 'purReturnTypeName', label: this.$t('ve.label.retirementType'), width: 140, align: 'center' },
          //销退金额  字段待定
        { prop: 'retreatAmount', label: this.$t('ve.label.retreatAmount'), width: null, align: 'center' },
         // 运送方式
        { prop: 'deliverModeName', label: this.$t('ve.label.deliverModeName'), width: null, align: 'center' },
         // 车损退回
        { prop: 'carReturnTypeName', label: this.$t('ve.label.carDamageReturned'), width: null, align: 'center' },
        // 采购金额
        { prop: 'purPrice', label: this.$t('ve.label.purchaseAmount'), width: null, align: 'center' },
        //销退仓库
        { prop: 'purReturnCarHouseName', label: this.$t('ve.label.retreatWarehouse'), width: null, align: 'center' },

        //车型配置
        { prop: 'carConfigCode', label: this.$t('ve.label.carConfig'), width: 140, align: 'center' },
        //VIN码
        { prop: 'vin', label:  this.$t('ve.label.vin'), width: 140, align: 'center' },
        //车身颜色
        { prop: 'carColorName', label: this.$t('ve.label.carColor'), width: 80, align: 'center' },
        //内饰色
        { prop: 'carIncolorName', label: this.$t('ve.label.carIncolor'), width: 80, align: 'center' },
        // 颜色价格
        { prop: 'carColorPrice', label: this.$t('ve.label.colorPrice'), width: null, align: 'center' },
        // 内饰价
        { prop: 'carIncolorPrice', label: this.$t('ve.label.carIncolorPrice'), width: null, align: 'center' },
        // 总价     待确认
        { prop: 'totalPrice', label: this.$t('ve.label.totalPrice'), width: null, align: 'center' },
         // 验收时间
        { prop: 'firstInDlrstockDate', label: this.$t('ve.label.firstInDlrstockDate'), width: 140, align: 'center' },
        // 单据状态
        { prop: 'returnStatusName', label:  this.$t('ve.label.receiptState'), width: 140, align: 'center' },
        // 创建人  待确认
        { prop: 'creator', label: this.$t('ve.label.creatorA'), width: 140, align: 'center' },
        // 专营店业务审核时间
        { prop: 'auditDate', label: this.$t('ve.label.dlrAuditDate'), width: 140, align: 'center' },
        // 专营店业务审核人
        { prop: 'auditEmpName', label: this.$t('ve.label.dlrAuditEmpName'), width: 140, align: 'center' },
        // 专营店财务审核时间  待确认
        { prop: 'financeDate', label: this.$t('ve.label.dlrFinancialReviewTime'), width: 140, align: 'center' },
        // 专营店财务审核人    待确认
        { prop: 'financeName', label: this.$t('ve.label.dlrFinancialReviewMan'), width: 140, align: 'center' },
        // 备注
        { prop: 'remark', label: this.$t('ve.label.remark'), width: null, align: 'center' },
        //保存用到的字段
        //销退申请主单ID
        { prop: 'purReturnId', label: '销退申请主单ID', width: null, align: 'center',hidden: true},
        //销退申请明细单ID
        { prop: 'purReturnDId', label: '销退申请明细单ID', width: null, align: 'center',hidden: true},
        //销退经销商ID
        { prop: 'returnDlrId', label: '销退经销商ID', width: null, align: 'center',hidden: true},
        //采购单子单ID
        { prop: 'purOrderDId', label: '采购单子单ID', width: null, align: 'center',hidden: true},
        // 发票状态
        { prop: 'invoiceState', label: '发票状态', width: null, align: 'center',hidden: true},
        //当前销退状态
        { prop: 'returnStatus', label: '当前销退状态', width: null, align: 'center',hidden: true},
        // 更新销退状态
        { prop: 'updateReturnStatus', label: '更新销退状态', width: null, align: 'center',hidden: true},
        // 库存车并发控制字段
        { prop: 'updateControlIdCarStore', label: '库存车并发控制字段', width: null, align: 'center',hidden: true},
        // 经销商库存车记录并发控制字段
        { prop: 'updateControlIdVeCarStore', label: '经销商库存车记录并发控制字段', width: null, align: 'center',hidden: true},
        // 销退申请主单并发控制字段
        { prop: 'updateControlId', label: '销退申请主单并发控制字段', width: null, align: 'center',hidden: true},
        // 销退申请明细单并发控制字段
        { prop: 'updateControlIdD', label: '销退申请明细单并发控制字段', width: null, align: 'center',hidden: true}

          ])
      }
      return cols
    },
    //审核
    saveCheck(){
        let that = this
        that.statusType = 1  //审核
        that.save();
    },
    //驳回
    saveReject(){
        let that = this
        that.statusType = 0   //驳回
        that.save();
    },

    save(){
        let that = this.$refs.multipleTable
        let selectData = that.$refs.multipleTable.selection
        if(selectData.length === 0){
            this.$message({ message:this.$t('org.message.moreOneData')/*请至少选择一条数据*/ , type: 'warning' });
			return false;
        }
        let length = selectData.length - 1
        for(var i in selectData){
            let queryObj = {
				// 保存mutation
				type: 'mutation',
				// api配置
				apiConfig: veApis.veBuPurReturnOrderMutationConfirm,
				//条件/实体参数（变量），根据typeParam中的定义配置
				variables: {
					//当前中台使用的名称有dataInfo、info，具体查看API文档
					dataInfo: {
                        'statusType': this.statusType,
                         "purReturnId": selectData[i].purReturnId,
                         'purReturnCode': selectData[i].purReturnCode,
                         "returnDlrId": selectData[i].returnDlrId,
                         'purReturnCode': selectData[i].purReturnCode,
                          'vin': selectData[i].vin,
                          "updateControlIdCarStore": selectData[i].updateControlIdCarStore,
                        "updateControlId": selectData[i].updateControlId,
                          "updateControlIdD": selectData[i].updateControlIdD

                    }
				},
			};
			//转换了中台请求格式数据
			var paramD = this.$getParams(queryObj);
			 this.$requestGraphQL(paramD).then(response => {
         //mock数据先不判断
				// if (response.data[queryObj.apiConfig.ServiceCode].result === '1') {
                    // if(i === length){
                        if(this.statusType == 1){
                        that.$message({
                            message: this.$t('sys.tips.esTip12')/*审核成功*/,
                            type: 'success',
                            duration: 2000,
                        });
                        }else{
                            that.$message({
                            message: this.$t('sys.tips.esTip17')/*驳回成功*/,
                            type: 'success',
                            duration: 2000,
                        });
                        }

                        this.queryTable(1)
                    // }
				// }else{
        //             this.$message({
        //                 message: this.$t('sys.tips.esTip10') + response.data[queryObj.apiConfig.ServiceCode].msg,
        //                 type: 'warning',
        //                 duration: 2000
        //             })
        //             this.queryTable(1)
        //         }
			});
        }
    },
    importExcel(){
        let that = this.$refs.multipleTable
        let file = that.$refs.compKey7[0].file
        if(!file.name){
            this.$message({
                message:  this.$t('org.message.selectTheTemplateFile'),/*请选择要导入的模板文件*/
                type: 'warning',
                duration: 2000
            })
        }else{
            that.$message({
                message: '导入成功'/*导入成功*/,
                type: 'success',
                duration: 2000,
            });
            this.queryTable(1)
        }
    }
  }
}
</script>






















