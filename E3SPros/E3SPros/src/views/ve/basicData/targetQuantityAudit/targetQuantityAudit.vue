<!--
* description: 目标量审核
* author: yxy
* createdDate: 2019-09-21
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
  name:"targetQuantityAudit",
  // 组件混入对象
  mixins: [oneTableWithViewTemplateMixins],
  components: {
    OneTableTemplate,

  },// 阻塞路由预加载网格中组件的数据
beforeRouteEnter(to, from, next) {CacheConfig.initData(to.path, function(){next()})},

  data() {
    return {
      // 网格查询API配置对象
      apiConfig: veApis.targetQuantityAuditQuery,
      // 动态组件-按钮
      tableButtons: [
        {compKey: 'btnKey1', type: 'primary', size: 'small', clickEvent: () => this.queryTable(1), text:this.$t('sys.button.query')},//查询
        {compKey: 'btnKey2', type: '', size: 'small', clickEvent: () => this.Confirm(), text:this.$t('sys.button.check')},//审核
         {compKey: 'btnKey3', type: '', size: 'small', clickEvent: () => this.rejectOrder(), text: this.$t('sys.button.reject')},//驳回
        {compKey: 'btnKey4', type: '', size: 'small', clickEvent: () => this.reset(), text:this.$t('sys.button.reset')},//重置
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
          codeField: "carSeriseCode",
          component: () => import("@/components/ve/targetType"),
          type: "dropdownList",
          isMust: true
        },
        { compKey: "compKey4",
          labelName: this.$t('ve.label.targetQuantDist'),//目标量区分
          codeField: "carSeriseCode",
          component: () => import("@/components/ve/targetQuantityDistinction"),
          type: "dropdownList",
          isMust: true
        },
        { compKey: "compKey5",
          labelName: this.$t('ve.label.targetQuaYear'),//目标量年份
          codeField: "carSeriseCode",
          component: () => import("@/components/ve/targetQuantityYear"),
          type: "dropdownList",
          isMust: false
        },
        { compKey: "compKey6",
          labelName: this.$t('ve.label.targetQuantityValueStage'),//目标量阶段
          codeField: "carSeriseCode",
          component: () => import("@/components/ve/targetQuantityMonth"),
          type: "dropdownList",
          isMust: false
        },
        // { compKey: "compKey8",
        //   labelName: '车型组',//车型组
        //   codeField: "carSeriseCode",
        //   component: () => import("@/components/ve/carModelGroup"),
        //   type: "dropdownList",
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
         { prop: 'dlrShortName', label: this.$t('org.label.dlrName'), width: null, align: 'center'},//经销商
       { prop: 'targetQuantityMonth', label:  this.$t('ve.label.targetQuantityValueStage'), width: 100, align: 'center'},//目标量阶段
       { prop: 'targetQuantityValue', label: this.$t('ve.label.targetQuantityValue'), width: 100, align: 'center'},//目标量值
         {prop: "area",label: this.$t('ve.label.county1'),width: null, align: "center"},//地区
        {prop: "bigAreaName",label: this.$t('ve.label.bigarea'),width: null,align: "center"},//大区
        {prop: "smallAreaName", label:this.$t('ve.label.smallArea'), width: null,align: "center"},//小区
        {prop: "province",label:this.$t('ve.label.province'), width: null,align: "center"},//省份
        {prop: "city",label:this.$t('ve.label.city'),width: null,align: "center"},//城市

       { prop: 'dlrId', label: '经销商ID', width: null, align: 'center', hidden: true },
        { prop: 'carBrandCode', label: this.$t('org.label.carBrandCode'), width: null, align: 'center', hidden: true },//品牌编码
        { prop: '', label: '主键ID', width: null, align: 'center', hidden: true }

            ])
      }
      return cols
    },
    Confirm(){
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
				apiConfig: veApis.targetQuantityAuditcheck,
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
                            message: this.$t('sys.tips.esTip12')/*审核成功*/,
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
    rejectOrder(){
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
				apiConfig: veApis.targetQuantityAuditReject,
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
