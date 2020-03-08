<!--
* description: 目标量导入-整车
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
      :dynamicIsInitTable="false"
      :dynamicIsColumnDrop="true"
      :dynamicIsShowMoreBtn="true"
      :key="oneTablekey"
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
      apiConfig: veApis.targetQuantityImport1,
      // 动态组件-按钮
      tableButtons: [
        {compKey: 'btnKey1', type: 'primary', size: 'small', clickEvent: () => this.queryTable(1), text:this.$t('sys.button.query')},//查询
        {compKey: 'btnKey2', type: '', size: 'small', clickEvent: () => this.importExcel(), text:this.$t('sys.button.import')},// '导入'
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
          labelName: this.$t('ve.label.targetType'),//目标量类型
          codeField: "targetType",
          component: () => import("@/components/ve/targetType"),
          type: "dropdownList",
          isMust: true
        },
         { compKey: "compKey4",
          labelName: this.$t('ve.label.targetQuantDist'),//目标量区分
          isMul:false,
          codeField: "targetQuantityDistinction",
          component: () => import("@/components/ve/targetQuantityDistinction"),
          type: "dropdownList",
          isMust: true
        },

        { compKey: "compKey5",
          labelName: this.$t('ve.label.targetQuaYear'),//目标量年份
          codeField: "targetQuantityYear",
          isMul:false,
          component: () => import("@/components/ve/targetQuantityYear"),
          type: "dropdownList",
          isMust: false
        },
       { compKey: "compKey6",
          labelName: this.$t('ve.label.targetQuaMon'),//目标量月份
          codeField: "targetQuantityMonth",
          component: () => import("@/components/ve/targetQuantityMonth"),
          type: "dropdownList",
          isMust: false
        },
        { compKey: "compKey7",
          codeField: "file",
          span:12,
          component: () => import("@/components/ve/upLoad"),
          type: "propus",
          isMust: false
        },
        {compKey: 'compKey9', labelName: this.$t('ve.label.carModelGroup')/*车型组*/, /*parentFileds:'carBrandCode-carBrandCode',*/  codeField: 'carType', component: () => import('@/components/org/SmallCarType'), type: 'dropdownList', isMust: false},/*车型*/
        { compKey: "compKey11",
          labelName: this.$t("org.label.monthlyTarQuaImTem"),//目标量导入模板
          codeField: "file",
          span:6,
          component: () => import("@/components/ve/downloadImportTemplate"),
          type: "propus",
          isMust: false
        },

      ],
      otherTableComponents:CacheConfig.cacheData[this.$route.path] && CacheConfig.cacheData[this.$route.path].tableComponents.length > 0 ? CacheConfig.cacheData[this.$route.path].tableComponents : [

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
          labelName: this.$t('ve.label.targetType'),//目标量类型
          codeField: "targetType",
          component: () => import("@/components/ve/targetType"),
          type: "dropdownList",
          isMust: true
        },
         { compKey: "compKey4",
          labelName: this.$t('ve.label.targetQuantDist'),//目标量区分
          isMul:false,
          codeField: "targetQuantityDistinction",
          component: () => import("@/components/ve/targetQuantityDistinction"),
          type: "dropdownList",
          isMust: true
        },

        { compKey: "compKey5",
          labelName: this.$t('ve.label.targetQuaYear'),//目标量年份
          codeField: "targetQuantityYear",
          isMul:false,
          component: () => import("@/components/ve/targetQuantityYear"),
          type: "dropdownList",
          isMust: false
        },
       { compKey: "compKey6",
          labelName: this.$t('ve.label.targetQuantityValueStage'),//目标量阶段
          codeField: "targetQuantityMonth",
          component: () => import("@/components/ve/targetQuantityMonth"),
          type: "dropdownList",
          isMust: false
        },
        { compKey: "compKey7",
          codeField: "file",
          span:12,
          component: () => import("@/components/ve/upLoad"),
          type: "propus",
          isMust: false
        },
        {compKey: 'compKey9', labelName: this.$t('ve.label.carModelGroup')/*车型组*/, /*parentFileds:'carBrandCode-carBrandCode',*/  codeField: 'carType', component: () => import('@/components/org/SmallCarType'), type: 'dropdownList', isMust: false},/*车型*/
        { compKey: "compKey11",
          labelName: this.$t("org.label.monthlyTarQuaImTem"),//月度目标量导入模板
          codeField: "file",
          span:6,
          component: () => import("@/components/ve/downloadImportTemplate"),
          type: "propus",
          isMust: false
        },
      ],
      // 动态生成网格列
      tableCols: this.getCols(),

      //表单查询数据
      formField:{
        dlrId:'',
        carSeriseCode:'',
        preInStockDateB:'',
        preInStockDateEnd:'',
        carBrandCode:'',
        targetQuantityDistinction:''
      },
      oneTablekey:'oneTablekey',
    }
  },
  created(){
     this.$watch('formField.targetQuantityDistinction', function() { // 监控组件依赖的值
      let value = this.formField.targetQuantityDistinction
      if(value === '1'){
        this.tableComponents =  CacheConfig.cacheData[this.$route.path] && CacheConfig.cacheData[this.$route.path].tableComponents.length > 0 ? CacheConfig.cacheData[this.$route.path].tableComponents : [

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
          labelName: this.$t('ve.label.targetType'),//目标量类型
          codeField: "targetType",
          component: () => import("@/components/ve/targetType"),
          type: "dropdownList",
          isMust: true
        },
         { compKey: "compKey4",
          labelName: this.$t('ve.label.targetQuantDist'),//目标量区分
          isMul:false,
          codeField: "targetQuantityDistinction",
          component: () => import("@/components/ve/targetQuantityDistinction"),
          type: "dropdownList",
          isMust: true
        },

        { compKey: "compKey5",
          labelName: this.$t('ve.label.targetQuaYear'),//目标量年份
          codeField: "targetQuantityYear",
          isMul:false,
          component: () => import("@/components/ve/targetQuantityYear"),
          type: "dropdownList",
          isMust: false
        },
       { compKey: "compKey6",
          labelName: this.$t('ve.label.targetQuaMon'),//目标量月份
          codeField: "targetQuantityMonth",
          component: () => import("@/components/ve/targetQuantityMonth"),
          type: "dropdownList",
          isMust: false
        },
        { compKey: "compKey7",
          codeField: "file",
          span:12,
          component: () => import("@/components/ve/upLoad"),
          type: "propus",
          isMust: false
        },
        {compKey: 'compKey9', labelName: this.$t('ve.label.carModelGroup')/*车型组*/, /*parentFileds:'carBrandCode-carBrandCode',*/  codeField: 'carType', component: () => import('@/components/org/SmallCarType'), type: 'dropdownList', isMust: false},/*车型*/
        { compKey: "compKey11",
          labelName: this.$t("org.label.monthlyTarQuaImTem"),//月度目标量导入模板
          codeField: "file",
          span:6,
          component: () => import("@/components/ve/downloadImportTemplate"),
          type: "propus",
          isMust: false
        },
      ]
        this.tableCols = this.getColsMouth()
        this.oneTablekey = this.$utils.generateId()
      }else if(value === "5") {
        this.tableComponents = this.otherTableComponents
        this.tableCols = this.getCols()
        this.oneTablekey = this.$utils.generateId()
      }else if(value === "2"){
        this.tableComponents = this.otherTableComponents
        this.tableCols = this.getColsDoubleMouth()
        this.oneTablekey = this.$utils.generateId()
      }else if(value === "3"){
        this.tableComponents = this.otherTableComponents
        this.tableCols = this.getColsSeason()
        this.oneTablekey = this.$utils.generateId()
      }else if(value === "4"){
        this.tableComponents = this.otherTableComponents
        this.tableCols = this.getColsHalfYear()
        this.oneTablekey = this.$utils.generateId()
      }
      })
  },
  methods: {
    getCols() {
      var cols = [
      ]
      if (CacheConfig.cacheData[this.$route.path] && CacheConfig.cacheData[this.$route.path].tableCols.length > 0) {
        cols = cols.concat(CacheConfig.cacheData[this.$route.path].tableCols)
      } else {
        cols = cols.concat([
        { prop: 'carBrandCn', label: this.$t('org.label.carBrandCn'), width: null, align: 'center' },//品牌
        { prop: 'area', label: this.$t('org.label.area'), width: null, align: 'center' },//地区
        { prop: 'bigarea', label: this.$t('ve.label.bigarea'), width: null, align: 'center' },//大区
        { prop: 'smallArea', label: this.$t('ve.label.smallArea'), width: null, align: 'center' },//小区
        { prop: 'province', label: this.$t('ve.label.province'), width: null, align: 'center' },//省份
        { prop: 'InventoryLocation', label: this.$t('ve.label.city'), width: null, align: 'center' },//城市
        { prop: 'dlrShortName', label: this.$t('org.label.dlrName'), width: null, align: 'center',  },//经销商
        { prop: 'targetType', label: this.$t('ve.label.targetType')/*目标量类型*/, width: null, align: 'center',  },
        { prop: 'modelGroupName', label: this.$t('ve.label.carTypeDivisionName')/*车型划分名称*/, width: null, align: 'center',  },
        { prop: 'targetQuaYear', label: this.$t('ve.label.targetQuaYear'), width: null, align: 'center',  },//目标量年份
        //    { prop: 'targetQuantityYM', label: this.$t('ve.label.targetQuaMon'),/*目标量月份*/ width: null, align: 'center',  },
        {
          prop: "NCCIRRvehicles",
          label: this.$t('org.label.targetValue')+'+',/*目标量值+*/
          width: null,
          align: "center",
          isComponent: true,
          comps: [
          {
          compKey: "propKey1",
          isShowLabel: false,
          codeField: "NCCIRRvehicles",
          // lookuptype: "VE0166",
          clickEvent: () => null,
          component: () => import("@/components/org/commonInput")
          }
          ]
        },
        ])
      }
      return cols
    },
    getColsMouth() {
      var cols = [
      ]
      if (CacheConfig.cacheData[this.$route.path] && CacheConfig.cacheData[this.$route.path].tableCols.length > 0) {
        cols = cols.concat(CacheConfig.cacheData[this.$route.path].tableCols)
      } else {
        cols = cols.concat([
        { prop: 'carBrandCn', label: this.$t('org.label.carBrandCn'), width: null, align: 'center' },//品牌
        { prop: 'area', label: this.$t('org.label.area'), width: null, align: 'center' },//地区
        { prop: 'bigarea', label: this.$t('ve.label.bigarea'), width: null, align: 'center' },//大区
        { prop: 'smallArea', label: this.$t('ve.label.smallArea'), width: null, align: 'center' },//小区
        { prop: 'province', label: this.$t('ve.label.province'), width: null, align: 'center' },//省份
        { prop: 'InventoryLocation', label: this.$t('ve.label.city'), width: null, align: 'center' },//城市
        { prop: 'dlrShortName', label: this.$t('org.label.dlrName'), width: null, align: 'center',  },//经销商
        { prop: 'targetType', label: this.$t('ve.label.targetType')/*目标量类型*/, width: null, align: 'center',  },
        { prop: 'modelGroupName', label: this.$t('ve.label.carTypeDivisionName')/*车型划分名称*/, width: null, align: 'center',  },
        { prop: 'targetQuantityYM', label: this.$t('ve.label.targetQuaMon'),/*目标量月份*/ width: null, align: 'center',  },
        { prop: 'targetQuaYear', label: this.$t('ve.label.targetQuaYear'), width: null, align: 'center',  },//目标量年份
        {
          prop: "NCCIRRvehicles",
          label: this.$t('org.label.targetValue')+'+',/*目标量值+*/
          width: null,
          align: "center",
          isComponent: true,
          comps: [
          {
          compKey: "propKey1",
          isShowLabel: false,
          codeField: "NCCIRRvehicles",
          // lookuptype: "VE0166",
          clickEvent: () => null,
          component: () => import("@/components/org/commonInput")
          }
          ]
        },
        ])
      }
      return cols
    },
    getColsDoubleMouth(){
       var cols = [
      ]
      if (CacheConfig.cacheData[this.$route.path] && CacheConfig.cacheData[this.$route.path].tableCols.length > 0) {
        cols = cols.concat(CacheConfig.cacheData[this.$route.path].tableCols)
      } else {
        cols = cols.concat([
        { prop: 'carBrandCn', label: this.$t('org.label.carBrandCn'), width: null, align: 'center' },//品牌
        { prop: 'area', label: this.$t('org.label.area'), width: null, align: 'center' },//地区
        { prop: 'bigarea', label: this.$t('ve.label.bigarea'), width: null, align: 'center' },//大区
        { prop: 'smallArea', label: this.$t('ve.label.smallArea'), width: null, align: 'center' },//小区
        { prop: 'province', label: this.$t('ve.label.province'), width: null, align: 'center' },//省份
        { prop: 'InventoryLocation', label: this.$t('ve.label.city'), width: null, align: 'center' },//城市
        { prop: 'dlrShortName', label: this.$t('org.label.dlrName'), width: null, align: 'center',  },//经销商
        { prop: 'targetType', label: this.$t('ve.label.targetType')/*目标量类型*/, width: null, align: 'center',  },
        { prop: 'modelGroupName', label: this.$t('ve.label.carTypeDivisionName')/*车型划分名称*/, width: null, align: 'center',  },
        { prop: 'targetQuantityYM', label: this.$t('ve.label.targetQuaDoubleMouth'),/*目标量双月*/ width: null, align: 'center',  },
        { prop: 'targetQuaYear', label: this.$t('ve.label.targetQuaYear'), width: null, align: 'center',  },//目标量年份
        {
          prop: "NCCIRRvehicles",
          label: this.$t('org.label.targetValue')+'+',/*目标量值+*/
          width: null,
          align: "center",
          isComponent: true,
          comps: [
          {
          compKey: "propKey1",
          isShowLabel: false,
          codeField: "NCCIRRvehicles",
          // lookuptype: "VE0166",
          clickEvent: () => null,
          component: () => import("@/components/org/commonInput")
          }
          ]
        },
        ])
      }
      return cols
    },
    getColsSeason(){
       var cols = [
      ]
      if (CacheConfig.cacheData[this.$route.path] && CacheConfig.cacheData[this.$route.path].tableCols.length > 0) {
        cols = cols.concat(CacheConfig.cacheData[this.$route.path].tableCols)
      } else {
        cols = cols.concat([
        { prop: 'carBrandCn', label: this.$t('org.label.carBrandCn'), width: null, align: 'center' },//品牌
        { prop: 'area', label: this.$t('org.label.area'), width: null, align: 'center' },//地区
        { prop: 'bigarea', label: this.$t('ve.label.bigarea'), width: null, align: 'center' },//大区
        { prop: 'smallArea', label: this.$t('ve.label.smallArea'), width: null, align: 'center' },//小区
        { prop: 'province', label: this.$t('ve.label.province'), width: null, align: 'center' },//省份
        { prop: 'InventoryLocation', label: this.$t('ve.label.city'), width: null, align: 'center' },//城市
        { prop: 'dlrShortName', label: this.$t('org.label.dlrName'), width: null, align: 'center',  },//经销商
        { prop: 'targetType', label: this.$t('ve.label.targetType')/*目标量类型*/, width: null, align: 'center',  },
        { prop: 'modelGroupName', label: this.$t('ve.label.carTypeDivisionName')/*车型划分名称*/, width: null, align: 'center',  },
        { prop: 'targetQuantityYM', label: this.$t('ve.label.targetQuaSeason'),/*目标量季度*/ width: null, align: 'center',  },
        { prop: 'targetQuaYear', label: this.$t('ve.label.targetQuaYear'), width: null, align: 'center',  },//目标量年份
        {
          prop: "NCCIRRvehicles",
          label: this.$t('org.label.targetValue')+'+',/*目标量值+*/
          width: null,
          align: "center",
          isComponent: true,
          comps: [
          {
          compKey: "propKey1",
          isShowLabel: false,
          codeField: "NCCIRRvehicles",
          // lookuptype: "VE0166",
          clickEvent: () => null,
          component: () => import("@/components/org/commonInput")
          }
          ]
        },
        ])
      }
      return cols
    },
    getColsHalfYear(){
       var cols = [
      ]
      if (CacheConfig.cacheData[this.$route.path] && CacheConfig.cacheData[this.$route.path].tableCols.length > 0) {
        cols = cols.concat(CacheConfig.cacheData[this.$route.path].tableCols)
      } else {
        cols = cols.concat([
        { prop: 'carBrandCn', label: this.$t('org.label.carBrandCn'), width: null, align: 'center' },//品牌
        { prop: 'area', label: this.$t('org.label.area'), width: null, align: 'center' },//地区
        { prop: 'bigarea', label: this.$t('ve.label.bigarea'), width: null, align: 'center' },//大区
        { prop: 'smallArea', label: this.$t('ve.label.smallArea'), width: null, align: 'center' },//小区
        { prop: 'province', label: this.$t('ve.label.province'), width: null, align: 'center' },//省份
        { prop: 'InventoryLocation', label: this.$t('ve.label.city'), width: null, align: 'center' },//城市
        { prop: 'dlrShortName', label: this.$t('org.label.dlrName'), width: null, align: 'center',  },//经销商
        { prop: 'targetType', label: this.$t('ve.label.targetType')/*目标量类型*/, width: null, align: 'center',  },
        { prop: 'modelGroupName', label: this.$t('ve.label.carTypeDivisionName')/*车型划分名称*/, width: null, align: 'center',  },
        { prop: 'targetQuantityYM', label: this.$t('ve.label.targetQuaHalfYear'),/*目标量半年*/ width: null, align: 'center',  },
        { prop: 'targetQuaYear', label: this.$t('ve.label.targetQuaYear'), width: null, align: 'center',  },//目标量年份
        {
          prop: "NCCIRRvehicles",
          label: this.$t('org.label.targetValue')+'+',/*目标量值+*/
          width: null,
          align: "center",
          isComponent: true,
          comps: [
          {
          compKey: "propKey1",
          isShowLabel: false,
          codeField: "NCCIRRvehicles",
          // lookuptype: "VE0166",
          clickEvent: () => null,
          component: () => import("@/components/org/commonInput")
          }
          ]
        },
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
            // do import

            that.$message({
                message: this.$t('sys.tips.esTip18')/*导入成功*/,
                type: 'success',
                duration: 2000,
            });
            this.queryTable(1)
        }
    }
  }
}
</script>
