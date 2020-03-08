<!--
* description: 大客户政策类型维护
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
      :dynamicIsShowMoreBtn="false"
    />
    <edit
        :dynamicEditRowData="editRowData"
        :popupsVisible="editPopupsVisible"
        :key="editPopupsKey"
        :popupsState="editPopupsState"
        @close="close"
        ></edit>
  </div>
</template>
<script>
import { oneTableWithViewTemplateMixins } from '@/components/mixins/oneTableWithViewTemplateMixins';
import { veApis } from '@/api/graphQLApiList/ve'
import OneTableTemplate from '@/components/templates/oneTable'
import edit from "./edit";

import { CacheConfig } from '@/cache/configCache/index'
export default {
  name:"carProductQuery",
  // 组件混入对象
  mixins: [oneTableWithViewTemplateMixins],
  components: {
    OneTableTemplate,edit

  },// 阻塞路由预加载网格中组件的数据
beforeRouteEnter(to, from, next) {CacheConfig.initData(to.path, function(){next()})},

  data() {
    return {
      // 网格查询API配置对象
      apiConfig: veApis.majorCustoPolicyTypeMaint1,
      // 动态组件-按钮
      tableButtons: [
        {compKey: 'btnKey2', type: 'primary', size: 'small', clickEvent: () => this.queryTable(1), text:this.$t('sys.button.query')},//查询
        {compKey: 'btnKey4', type: '', size: 'small', clickEvent: () => this.add(), text:this.$t('sys.button.add')},//保存
        {compKey: 'btnKey5', type: '', size: 'small', clickEvent: () => this.reset(), text:this.$t('sys.button.reset')},//重置
        {compKey: 'btnKey3', type: '', size: 'small', clickEvent: () => this.exportExcel(), text:this.$t('sys.button.export')},// '导出'
      ],
      // 动态组件-查询条件
      tableComponents: CacheConfig.cacheData[this.$route.path] && CacheConfig.cacheData[this.$route.path].tableComponents.length > 0 ? CacheConfig.cacheData[this.$route.path].tableComponents : [

         {compKey: 'compKey1', labelName: this.$t('org.label.carBrandCn'), codeField: 'carBrandCode', component: () => import('@/components/org/carBrand/carBrand'), isRequire: true, type: 'dropdownList', isMust: true},//品牌
        // { compKey: "compKey2",
        //   labelName: this.$t('org.label.policyType'),//政策类型
        //   codeField: "targetType",
        //   component: () => import("@/components/ve/targetType"),
        //   type: "dropdownList",
        //   isMust: true
        // },
        // { compKey: "compKey4",
        //   labelName: this.$t('org.label.policyDistinction'),//政策区分
        //   codeField: "carSeriseCode",
        //   component: () => import("@/components/ve/policyDistinction"),
        //   type: "dropdownList",
        //   isMust: true
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
          /*操作*/
          { prop: 'controlBtn', label: this.$t('sys.content.operate'), codeField: 'controlBtn', width: 120, align: 'center', isComponent: true,
          comps: [
        /*编辑*/
            {compKey: 'propKey0', labelName: this.$t('sys.button.edit'), codeField: 'editControlBtn', clickEvent: this.edit, component: () => import('@/components/org/linkButton')}
          ]
        },
       { prop: 'carBrandCn', label: this.$t('org.label.carBrandCn')/*品牌*/, width: null, align: 'center',  },
       { prop: 'targetType', label:this.$t('org.label.policyType'),/*政策类型*/ width: null, align: 'center',  },
      {
        prop: "targetQuantityDist",
        label: this.$t('org.label.policyDistinction')+'+',/*政策区分+*/
        width: null,
        align: "center",
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
  }
}
</script>
