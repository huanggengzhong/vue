<!--
* description: 分配达成率扣减台数设置
* author: ydche
* createdDate: 2019-09-19
-->
<template>
  <div class="app-container app-container-table">
    <one-table-template ref="multipleTable"
      :dynamicButtons="tableButtons"
      :dynamicComponents="tableComponents"
      :dynamicApiConfig="apiConfig"
      :dynamicTableCols="tableCols"
      :dynamicFormFields="formField"
      :dynamicIsShowSelect="true"
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
  name:"carProductQuery",
  // 组件混入对象
  mixins: [oneTableWithViewTemplateMixins],
  components: {
    OneTableTemplate,

  },// 阻塞路由预加载网格中组件的数据
beforeRouteEnter(to, from, next) {CacheConfig.initData(to.path, function(){next()})},

  data() {
    return {
      // 网格查询API配置对象
      apiConfig: veApis.distribAchieApi1,
      // 动态组件-按钮
      tableButtons: [
        {compKey: 'btnKey1', type: 'primary', size: 'small', clickEvent: () => this.queryTable(1), text:this.$t('sys.button.query')},//查询
        {compKey: 'btnKey2', type: '', size: 'small', clickEvent: () => this.importExcel(), text:this.$t('sys.button.import')},// '导入'
        {compKey: 'btnKey3', type: '', size: 'small', clickEvent: () => this.exportExcel(), text:this.$t('sys.button.export')},// '导出'
        {compKey: 'btnKey4', type: '', size: 'small', clickEvent: () => this.save(), text:this.$t('sys.button.save')},//保存
        {compKey: 'btnKey5', type: '', size: 'small', clickEvent: () => this.reset(), text:this.$t('sys.button.reset')},//重置
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
          labelName: this.$t('org.label.carSerise'),//车系
          codeField: "carSeriseCode",
          parentFileds:'carBrandCode-carBrandCode',
          component: () => import("@/components/org/CarCode"),
          type: "dropdownList",
          isMust: true
        },
        {
          compKey: "compKey5",
          labelName: this.$t('ve.label.AssYearMonthStart'),/*考核年月（起）*/
          codeField: "preInStockDateB",
          component: () => import("@/components/org/datePicker/datePicker"),
          type: "datePicker",
          dateOptionsType: "1",
          isMust: true
        },
        {
          compKey: "compKey6",
          labelName: this.$t('ve.label.AssYearMonthEnd'),/*考核年月（止）*/
          codeField: "preInStockDateEnd",
          component: () => import("@/components/org/datePicker/datePicker"),
          type: "datePicker",
          dateOptionsType: "1",
          isMust: false
        },
        { compKey: "compKey7",
        //   labelName: this.$t('org.label.carSerise'),//车系
          codeField: "file",
          span:12,
          component: () => import("@/components/ve/upLoad"),
          type: "propus",
          isMust: false
        },
        // { compKey: "compKey8",
        // //   labelName: this.$t('org.label.carSerise'),//车系
        //   codeField: "file",
        //   span:6,
        //   component: () => import("@/components/ve/downloadImportTemplate"),
        //   type: "propus",
        //   isMust: false
        // },
      ],
      // 动态生成网格列
      tableCols: this.getCols(),

      //表单查询数据
      formField:{
        carBrandCode:'',
        dlrId:'',
        carSeriseCode:'',
        preInStockDateB:'',
        preInStockDateEnd:'',
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
        { prop: "dlrShortName", label: this.$t('ve.label.dlr')/*经销商*/,  align: "center" },
       { prop: 'carBrandCode', label: '品牌ID', width: null, align: 'center', hidden: true },
       { prop: 'carSeriesCn', label: this.$t('org.label.carSerise'), width: null, align: 'center'},//车系
        { prop: 'assessmentMonth', label: this.$t('ve.label.AssMonth'),/*考核月份*/ width: null, align: 'center',  },
        { prop: 'targetAmount', label: this.$t('ve.label.TargetAmount'),/*目标量*/ width: null, align: 'center',  },
      {
      prop: "Deduction",
      label:  this.$t('ve.label.deduction')+'+',/*扣减台数+*/
      width: 150,
      align: "center",
      isComponent: true,
      comps: [
        {
          compKey: "propKey1",
          isShowLabel: false,
          codeField: "Deduction",
          // lookuptype: "VE0166",
          clickEvent: () => null,
          component: () => import("@/components/org/commonInput")
          }
          ]
        },
        { prop: 'doneDate', label: this.$t('org.label.creationTime'),/*创建时间+*/ width: null, align: 'center',  },
            ])
      }
      return cols
    },
    save(){
        let that = this.$refs.multipleTable
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
                        this.queryTable(1)
                    }
				}else{
                    this.$message({
                        message: this.$t('sys.tips.esTip10') + response.data[queryObj.apiConfig.ServiceCode].msg,
                        type: 'warning',
                        duration: 2000
                    })
                    this.queryTable(1)
                }
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
