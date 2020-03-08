<!--
* description: 经销商滚动需求计划上传审核
* author: linsy
* createdDate: 2019-08-13
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
    <!-- popupsVisible -->
    <planDetial :popupsVisible='detialVisible' @changeCode='changeDetialCode'/>
  </div>
</template>
<script>
import { oneTableWithViewTemplateMixins } from '@/components/mixins/oneTableWithViewTemplateMixins';
import { veApis } from '@/api/graphQLApiList/ve'
import OneTableTemplate from '@/components/templates/oneTable'
import planDetial from './planDetialDialog'
import { CacheConfig } from '@/cache/configCache/index'

export default {
  name:"planVerify",
  // 组件混入对象：{data[listQuery] methods[queryTable]}
  mixins: [oneTableWithViewTemplateMixins],
  components: {
    OneTableTemplate,planDetial
  },
  // 阻塞路由预加载网格中组件的数据
 beforeRouteEnter(to, from, next) {
  CacheConfig.initData(to.path, function(){next()})
 },
  data() {
    return {
      detialVisible:false,
      // 网格查询API配置对象
      apiConfig: veApis.veMonthPlan3Query,
      // 动态组件-按钮
      tableButtons: [
        {compKey: 'btnKey1', type: 'primary', size: 'small', clickEvent: () => this.queryTable(1), text: this.$t('sys.button.query')/*查询*/},
        {compKey: 'btnKey2', type: '', size: 'small', clickEvent: () => this.examine(), text: this.$t('sys.button.check')/*审核*/},
        {compKey: 'btnKey3', type: '', size: 'small', clickEvent: () => this.reject(), text: this.$t('sys.button.reject')/*驳回*/},
        {compKey: 'btnKey4', type: '', size: 'small', clickEvent: () => this.reset(), text: this.$t('sys.button.reset')/*重置*/},
      ],
      // 动态组件-查询条件
      tableComponents: CacheConfig.cacheData[this.$route.path] && CacheConfig.cacheData[this.$route.path].tableComponents && CacheConfig.cacheData[this.$route.path].tableComponents.length > 0 ? CacheConfig.cacheData[this.$route.path].tableComponents: [
        // 显示组件
        {compKey: 'compKey1', labelName: this.$t('org.label.carBrandCn')/*品牌*/, codeField: 'carBrandCode', component: () => import('@/components/org/carBrand/carBrand'), type: 'dropdownList', isMust: true},
        {compKey: 'compKey2', labelName: this.$t('org.label.dlrName')/*经销商*/, codeField: 'dlrId', component: () => import('@/components/org/orgDlr'), type: 'propus', isMust: true},
      ],
      // 动态生成网格列
      tableCols: CacheConfig.cacheData[this.$route.path] && CacheConfig.cacheData[this.$route.path].tableCols && CacheConfig.cacheData[this.$route.path].tableCols.length > 0 ? CacheConfig.cacheData[this.$route.path].tableCols: [
        { prop: 'controlBtn', label: this.$t('sys.content.operate')/*操作*/, codeField: 'controlBtn', width: 120, align: 'center', fixed: true, isComponent: true,
          comps: [
            {compKey: 'propKey0', labelName: this.$t('sys.content.detail')/*明细*/, compareField: 'isEnable', compareValue: '1', codeField: 'editControlBtn', clickEvent: this.showDetial, component: () => import('@/components/org/linkButton')}
          ]},
        { prop: 'carBrandName', label: this.$t('org.label.carBrandCn')/*品牌*/, width: 200, align: 'center' },
        { prop: 'carBrandCode', label: '品牌编码', width: 200, align: 'center',hidden:true},
        { prop: 'bigAreaName', label: this.$t('org.label.region')/*大区*/, width: 200, align: 'center' },
        { prop: 'smallAreaName', label: this.$t('org.label.village')/*小区*/, width: 200, align: 'center'},
        { prop: 'ProvinceName', label: this.$t('org.label.province')/*省份*/, width: 200, align: 'center' },
        { prop: 'cityName', label: this.$t('org.label.cityName')/*城市*/, width: 200, align: 'center' },
        { prop: 'dlrShortName', label: this.$t('org.label.dlrName')/*经销商*/, width: 200, align: 'center' },
        { prop: 'dlrId', label: '经销商id', width: 200, align: 'center' ,hidden:true},
        { prop: 'rejectReason', label: this.$t('org.label.rejectReason')/*驳回原因*/, width: 150, align: 'center', isComponent: true,
          comps: [{compKey: 'propKey2', isMul: false, isShowLabel: false, codeField: 'rejectReason', clickEvent: () => null, component: () => import('@/components/org/commonInput')}]
        },
       ],
      //表单查询数据（查询条件）
      formField:{
        carBrandCode: '',
        dlrId:''
      }
    }
  },
  methods:{
    reject(){
  const that = this.$refs.multipleTable;
      let saveState = true;
      let saveCount = 0;
      let msg = '';

      let selectData = that.$refs.multipleTable.selection;
      if (selectData.length < 1) {
        that.$message({
          message: '请选择需要驳回的信息',
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
          apiConfig: veApis.veMonthPlanAudit,
          variables: {
            //当前中台使用的名称有dataInfo、info，具体查看API文档
            dataInfo: {
              rejectNote: selectData[k].rejectReason,
              carBrandCode: selectData[k].carBrandCode,
              drlId: selectData[k].drlId,
              operatorType:'驳回'
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
              message: '驳回成功',
              type: 'success',
              duration: 2000
            });

            that.queryTable(1);
          }
        });
      }

    },
    examine(){
  const that = this.$refs.multipleTable;
      let saveState = true;
      let saveCount = 0;
      let msg = '';

      let selectData = that.$refs.multipleTable.selection;
      if (selectData.length < 1) {
        that.$message({
          message: '请选择需要审核的信息',
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
          apiConfig: veApis.veMonthPlanAudit,
          variables: {
            //当前中台使用的名称有dataInfo、info，具体查看API文档
            dataInfo: {
              carBrandCode: selectData[k].carBrandCode,
              drlId: selectData[k].drlId,
              operatorType:'审核通过'
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
              message: '审核成功',
              type: 'success',
              duration: 2000
            });

            that.queryTable(1);
          }
        });
      }
    },
    showDetial(){
      this.detialVisible=true;
    },
    changeDetialCode(){
      this.detialVisible=false;
    }
  }
}
</script>
