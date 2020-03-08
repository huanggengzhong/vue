<!--
* description: 结算开关设置
* author: ydche
* createdDate: 2019-09-20
-->
<template>
  <el-tabs class="elTabs" style="background: transparent;" v-model="activeName" type="border-card">
    <el-tab-pane :label="$t('ve.label.TargetCarGroupSetting')/*目标量车型组设置*/" name="first">
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
            :dynamicIsShowMoreBtn="false"
            />
        </div>
        <editA
        :dynamicEditRowData="editRowData"
        :popupsVisible="editPopupsVisible"
        :key="editPopupsKey"
        :popupsState="editPopupsState"
        @close="close"
        ></editA>
    </el-tab-pane>
    <el-tab-pane :label="$t('ve.label.checkpointSetting')/*考核点数设置*/" name="second">
        <div class="paddingTop45 app-container app-container-table">
            <TableB ref="multipleTableB"
            :dynamicButtons="tableButtonsB"
            :dynamicApiConfig="apiConfig"
            :dynamicTableCols="tableColsB"
            :dynamicFormFields="formField"
            :dynamicTableOtherHeight="418"
            :dynamicIsShowSelect="true"
            :dynamicIsInitTable="true"
            :dynamicIsColumnDrop="true"
            :dynamicIsShowMoreBtn="false"
            />
        </div>
        <div class="paddingTop45 app-container app-container-table" style="padding-top: 55px;">
            <TableC ref="multipleTableC"
            :dynamicButtons="tableButtonsC"
            :dynamicComponents="tableComponentsC"
            :dynamicApiConfig="apiConfig"
            :dynamicTableCols="tableColsC"
            :dynamicFormFields="formField"
            :dynamicTableOtherHeight="247"
            :dynamicIsShowSelect="true"
            :dynamicIsInitTable="true"
            :dynamicIsColumnDrop="true"
            :dynamicIsShowMoreBtn="false"
            />
        </div>
    </el-tab-pane>
  </el-tabs>

</template>
<script>
import { oneTableWithViewTemplateMixins } from '@/components/mixins/oneTableWithViewTemplateMixins';
import { veApis } from '@/api/graphQLApiList/ve'
import OneTableTemplate from '@/components/templates/oneTable'
import TableB from './checkpointSettingTableB'
import TableC from './checkpointSettingTableC'
import editA from "./editA";

import { CacheConfig } from '@/cache/configCache/index'
export default {
  name:"carProductQuery",
  // 组件混入对象
  mixins: [oneTableWithViewTemplateMixins],
  components: {
    OneTableTemplate,editA,TableB,TableC

  },// 阻塞路由预加载网格中组件的数据
beforeRouteEnter(to, from, next) {CacheConfig.initData(to.path, function(){next()})},

  data() {
    return {
         activeName: 'first',
      // 网格查询API配置对象
      apiConfig: veApis.settlementSwitchSet1,
      // 动态组件-按钮
      tableButtons: [
        {compKey: 'btnKey1', type: 'primary', size: 'small', clickEvent: () => this.queryTable(1), text:this.$t('sys.button.query')},//查询
        {compKey: 'btnKey2', type: '', size: 'small', clickEvent: () => this.add(), text:this.$t('sys.button.add')},// '新增'
        {compKey: 'btnKey5', type: '', size: 'small', clickEvent: () => this.reset(), text:this.$t('sys.button.reset')},//重置
      ],
      tableButtonsB:[
        {compKey: 'btnKey6', type: 'primary', size: 'small', clickEvent: () => this.queryTable(1), text:this.$t('sys.button.allSync')},//全部同步
        {compKey: 'btnKey7', type: '', size: 'small', clickEvent: () => this.synchrony(), text:this.$t('sys.button.sync')},//同步
        {compKey: 'btnKey8', type: '', size: 'small', clickEvent: () => this.delB(), text:this.$t('sys.button.delete')},//删除
        {compKey: 'btnKey9', type: '', size: 'small', clickEvent: () => this.saveB(), text:this.$t('sys.button.save')},// '保存'
        {compKey: 'btnKey3', type: '', size: 'small', clickEvent: () => this.returnFirst(), text:this.$t('sys.button.return')},//返回
      ],
      tableButtonsC:[
        {compKey: 'btnKey11', type: 'primary', size: 'small', clickEvent: () => this.queryTableC(1), text:this.$t('sys.button.query')},//查询
        {compKey: 'btnKey12', type: '', size: 'small', clickEvent: () => this.addC(), text:this.$t('sys.button.add')},// '新增'
      ],
      // 动态组件-查询条件
      tableComponents: CacheConfig.cacheData[this.$route.path] && CacheConfig.cacheData[this.$route.path].tableComponents.length > 0 ? CacheConfig.cacheData[this.$route.path].tableComponents : [

         {compKey: 'compKey1', labelName: this.$t('org.label.carBrandCn'), codeField: 'carBrandCode', component: () => import('@/components/org/carBrand/carBrand'), isRequire: true, type: 'dropdownList', isMust: true},//品牌
        { compKey: "compKey2",
          labelName: this.$t('org.label.carSerise'),//车系
          codeField: "carSeriesCode",
          parentFileds:'carBrandCode-carBrandCode',
          component: () => import("@/components/org/CarCode"),
          type: "dropdownList",
          isMust: true
        },
        {
          compKey: "compKey3",
          labelName: this.$t('ve.label.modelGroupName')/*车型组名称*/,
          codeField: "modelGroupName",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        },
        {
          compKey: "compKey5",
          labelName: this.$t("org.label.isEnable") /*是否启用*/,
          codeField: "isEnable",
          component: () => import("@/components/org/isEnable/isEnable"),
          type: "dropdownList",
          isMust: true
        }
      ],
      tableComponentsC:CacheConfig.cacheData[this.$route.path] && CacheConfig.cacheData[this.$route.path].tableComponents.length > 0 ? CacheConfig.cacheData[this.$route.path].tableComponents : [
          {
          compKey: "compKey6",
          labelName: this.$t('org.label.carConfig'),/*车型配置*/
          codeField: "carConfigId",
          component: () => import("@/components/org/carTypeConfig"),
          type: "propus",
          isMust: true,
          span:12
        },
      ],
      // 动态生成网格列
      tableCols: this.getCols(),
      tableColsB:this.getColsB(),
      tableColsC:this.getColsC(),

      //表单查询数据
      formField:{
        carBrandCode:'',
        dlrId:'',
        modelGroupName:'',
        carSeriseCode:'',
        preInStockDateB:'',
        carSeriesCode:'',
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
             {
          prop: "controlBtn",
          label:  this.$t("sys.content.operate") /*操作*/,
          codeField: "controlBtn",
          width: 120,
          align: "center",
          isComponent: true,
          comps: [
            {
              compKey: "propKey0",
              labelName: this.$t("sys.button.edit")+' '+this.$t("org.label.carType") /*编辑车型*/,
              codeField: "editControlBtn",
              clickEvent: this.editCarType,
              component: () => import("@/components/org/linkButton")
            },
            {
              compKey: "propKey1",
              labelName: this.$t("sys.button.delete") /*删除*/,
              codeField: "delControlBtn",
              clickEvent: this.del,
              component: () => import("@/components/org/linkButton")
            }
          ]
        },
       { prop: 'carBrandCn', label: this.$t('org.label.carBrandCn'), width: null, align: 'center' },//品牌名称
        { prop: "carSeriesCn", label: this.$t('org.label.carSerise')/*车系*/,  align: "center" },
        { prop: "carSeriesCode", label: this.$t('org.label.carSerise')/*车系*/,hidden: true,  align: "center" },
        { prop: "modelGroupName", label: this.$t('ve.label.modelGroupName')/*车型组名称*/,  align: "center" },
        { prop: "isEnable", label: this.$t('org.label.isEnable')/*状态*/,  align: "center" },
       { prop: 'carBrandCode', label: '品牌ID', width: null, align: 'center', hidden: true },
    ])
      }
      return cols
    },
    getColsB() {
      var cols = [
      ]
      if (CacheConfig.cacheData[this.$route.path] && CacheConfig.cacheData[this.$route.path].tableCols.length > 0) {
        cols = cols.concat(CacheConfig.cacheData[this.$route.path].tableCols)
      } else {
        cols = cols.concat([
        {
            prop: "Deduction",
            label:  '考核点数'+'+',/*考核点数+*/
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
       { prop: 'carBrandCn', label: this.$t('org.label.carBrandCn'), width: null, align: 'center' },//品牌名称
        { prop: "carSeriesCn", label: this.$t('org.label.carSerise')/*车系*/,  align: "center" },
        { prop: "carSeriesCode", label: this.$t('org.label.carSerise')/*车系*/,hidden: true,  align: "center" },
        { prop: "carTypeCode", label: this.$t('org.label.carType')/*车型*/,  align: "center" },
        { prop: "carConfigCn", label: this.$t('org.label.carConfig')/*车型配置*/,  align: "center" },
        { prop: "carTypeCn", label: this.$t('org.label.carTypeName')/*车型名称*/,  align: "center" },
        { prop: "engineCarpush", label: this.$t('ve.label.engineCarpush')/*排量*/,  align: "center" },
        { prop: "isEnable", label: this.$t('org.label.isEnable')/*状态*/,  align: "center" },
        { prop: "supplyStatus", label: this.$t('org.label.supplyStatus')/*供应状态*/,  align: "center" },
       { prop: 'carBrandCode', label: '品牌ID', width: null, align: 'center', hidden: true },
    ])
      }
      return cols
    },
    getColsC() {
      var cols = [
      ]
      if (CacheConfig.cacheData[this.$route.path] && CacheConfig.cacheData[this.$route.path].tableCols.length > 0) {
        cols = cols.concat(CacheConfig.cacheData[this.$route.path].tableCols)
      } else {
        cols = cols.concat([
       { prop: 'carBrandCn', label: this.$t('org.label.carBrandCn'), width: null, align: 'center' },//品牌名称
        { prop: "carSeriesCn", label: this.$t('org.label.carSerise')/*车系*/,  align: "center" },
        { prop: "carSeriesCode", label: this.$t('org.label.carSerise')/*车系*/,hidden: true,  align: "center" },
        { prop: "carTypeCode", label: this.$t('org.label.carType')/*车型*/,  align: "center" },
        { prop: "carConfigCn", label: this.$t('org.label.carConfig')/*车型配置*/,  align: "center" },
        { prop: "carTypeCn", label: this.$t('org.label.carTypeName')/*车型名称*/,  align: "center" },
        { prop: "engineCarpush", label: this.$t('ve.label.engineCarpush')/*排量*/,  align: "center" },
        { prop: "isEnable", label: this.$t('org.label.isEnable')/*状态*/,  align: "center" },
        { prop: "supplyStatus", label: this.$t('org.label.supplyStatus')/*供应状态*/,  align: "center" },
       { prop: 'carBrandCode', label: '品牌ID', width: null, align: 'center', hidden: true },
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
    delB(){
       let that = this.$refs.multipleTableB
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
                            message: this.$t('sys.tips.esTip14')/*删除成功*/,
                            type: 'success',
                            duration: 2000,
                        });
                        this.queryTableB(1)
                    }
				}else{
                    this.$message({
                        message: this.$t('sys.tips.esTip10') + response.data[queryObj.apiConfig.ServiceCode].msg,
                        type: 'warning',
                        duration: 2000
                    })
                        this.queryTableB(1)
                }
			});
        }
    },
    saveB(){
        let that = this.$refs.multipleTableB
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
                            message: this.$t('sys.tips.esTip5')/*保存成功*/,
                            type: 'success',
                            duration: 2000,
                        });
                        this.queryTableB(1)
                    }
				}else{
                    this.$message({
                        message: this.$t('sys.tips.esTip10') + response.data[queryObj.apiConfig.ServiceCode].msg,
                        type: 'warning',
                        duration: 2000
                    })
                    this.queryTableB(1)
                }
			});
        }
    },
    addC(){
         let that = this.$refs.multipleTableC
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
                            message: this.$t('sys.tips.seTip6')/*添加成功*/,
                            type: 'success',
                            duration: 2000,
                        });
                        this.queryTableC(1)
                        this.queryTableB(1)
                    }
				}else{
                    this.$message({
                        message: this.$t('sys.tips.esTip10') + response.data[queryObj.apiConfig.ServiceCode].msg,
                        type: 'warning',
                        duration: 2000
                    })
                    this.queryTableC(1)
                    this.queryTableB(1)
                }
			});
        }
    },
    queryTableB(page, dataType, size, filterObj, cb){
        // popups 弹窗  page 页面
      this.$utils.validataMoth(this, 'validpage')
      if (this.valid) {
        this.$refs.multipleTableB.queryTable(page, dataType, size, filterObj, cb)
      }
    },
    queryTableC(page, dataType, size, filterObj, cb){
        // popups 弹窗  page 页面
      this.$utils.validataMoth(this, 'validpage')
     if (this.valid) {
        this.$refs.multipleTableC.queryTable(page, dataType, size, filterObj, cb)
      }
    },
    editCarType(index){
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
      debugger
         this.activeName = 'second'
         this.queryTableC(1)
         this.queryTableB(1)
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

/deep/.el-tabs__content {
    padding: 10px 0;
}
/deep/.elTabs{
    background: transparent;
}

</style>
