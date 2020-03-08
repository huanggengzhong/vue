<!--
* description: 专营店库存度
* author: zhhx
* createdDate: 2019-09-21
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
      :dynamicIsShowSelect="false"
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
  name:"veDlrStock",
  // 组件混入对象
  mixins: [oneTableWithViewTemplateMixins],
  components: {
    OneTableTemplate,

  },// 阻塞路由预加载网格中组件的数据
beforeRouteEnter(to, from, next) {CacheConfig.initData(to.path, function(){next()})},

  data() {
    return {
      // 网格查询API配置对象
      apiConfig: veApis.veDlrInventoryQuery,
      // 动态组件-按钮
      tableButtons: [
        {compKey: 'btnKey1', type: 'primary', size: 'small', clickEvent: () => this.queryTable(1), text:this.$t('sys.button.query')},//查询
        {compKey: 'btnKey5', type: '', size: 'small', clickEvent: () => this.reset(), text:this.$t('sys.button.reset')},//重置
        {compKey: 'btnKey2', type: '', size: 'small', clickEvent: () => this.importExcel(), text:this.$t('sys.button.import')},// '导入'
        {compKey: 'btnKey3', type: '', size: 'small', clickEvent: () => this.exportExcel(), text:this.$t('sys.button.export')}// '导出'

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
          codeField: "carSeriesId",
          parentFileds:'carBrandCode-carBrandCode',
          component: () => import("@/components/org/CarCode"),
          type: "dropdownList",
          isMust: true
        },
        { compKey: "compKey7",
        //   labelName: this.$t('org.label.carSerise'),
          codeField: "file",
          span:12,
          component: () => import("@/components/ve/upLoad"),
          type: "propus",
          isMust: false
        },
        { compKey: "compKey8",
        //   labelName: this.$t('org.label.carSerise'),
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
        carBrandCode:'',
        dlrId:'',
        carSeriesId:''
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
        { prop: "area", label: this.$t('org.label.area')/*区域*/,  align: "center" },
        { prop: "region", label: this.$t('org.label.region')/*大区*/,  align: "center" },
        { prop: "village", label: this.$t('org.label.village')/*小区*/,  align: "center" },
        { prop: "province", label: this.$t('org.label.province')/*省份*/,  align: "center" },
        { prop: "cityName", label: this.$t('org.label.cityName')/*城市*/,  align: "center" },
        { prop: "dlrShortName", label: this.$t('org.label.dlrName')/*经销商*/,  align: "center" },
        { prop: 'carSeriesCn', label: this.$t('ve.label.carSeriseName')/*车系名称*/, width: null, align: 'center' },

        //字段待定
        // 库存度
         { prop: "inventory", label: this.$t('ve.label.Inventory'), align: "center" },
        //  相对全国平均水平的比值
        { prop: "relativeNaAverage", label: this.$t('ve.label.relativeNaAverage'), width: 140, align: "center" },
        // 专营店全国平均库存度
        { prop: "dlrNaAverageInventory", label: this.$t('ve.label.dlrNaAverageInventory'), width: 140, align: "center" },
        // 数据生成时间
        { prop: 'dataGenerationTime', label: this.$t('ve.label.dataGenerationTime'), width: 140, align: 'center' },

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






















