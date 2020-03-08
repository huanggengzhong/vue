<!--
* description: 经销商车辆调拨审核
* author: linwm
* createdDate: 2019-09-25
-->
<template>
  <div class="app-container app-container-table">
    <one-table-template
      ref="multipleTable"
      :dynamicButtons="tableButtons"
      :dynamicComponents="tableComponents"
      :dynamicApiConfig="apiConfig"
      :dynamicTableCols="tableCols"
      :dynamicFormFields="formField"
      :dynamicIsShowSelect="true"
      :dynamicIsShowMoreBtn="true"
      :dynamicIsColumnDrop="true"
    />
  </div>
</template>
<script>
import { oneTableWithViewTemplateMixins } from '@/components/mixins/oneTableWithViewTemplateMixins';
import { veApis } from "@/api/graphQLApiList/ve";
import OneTableTemplate from "@/components/templates/oneTable";
import { CacheConfig } from '@/cache/configCache/index'

export default {
  name: "dlrTransferExamine",
  // 组件混入对象
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
      apiConfig: veApis.vedlrTransferExamineQueryForPage,

      // 动态组件-按钮
      tableButtons:CacheConfig.cacheData[this.$route.path] && CacheConfig.cacheData[this.$route.path].tableComponents.length > 0 ? CacheConfig.cacheData[this.$route.path].tableComponents : [
        {
          compKey: "btnKey1",
          type: "primary",
          size: "small",
          clickEvent: () => this.queryTable(1),
          text: this.$t("sys.button.query") /*查询*/
        },
        {
          compKey: "btnKey2",
          type: "",
          size: "small",
          clickEvent: () => this.examine(),
          text: this.$t("sys.button.examine") /*审核*/
        },
        {
          compKey: "btnKey3",
          type: "",
          size: "small",
          clickEvent: () => null,
          text: this.$t("sys.button.reject") /*驳回*/
        },
        {
          compKey: "btnKey4",
          type: "",
          size: "small",
          clickEvent: () => this.reset(),
          text: this.$t("sys.button.reset") /*重置*/
        },
      ],
        // 动态组件-查询条件
     tableComponents: CacheConfig.cacheData[this.$route.path] && CacheConfig.cacheData[this.$route.path].tableComponents.length > 0 ? CacheConfig.cacheData[this.$route.path].tableComponents : [
        {
          compKey: "compKey1",
          labelName: this.$t('org.label.carBrand')/*品牌*/,
          codeField: "carBrandCode",
          component: () => import("@/components/org/carBrand/carBrand"),
          type: "dropdownList",
          isMust: true
        },
        {compKey: 'compKey2', labelName: this.$t('ve.label.transferInDlr')/*调入经销商*/, codeField: 'transferInDlrId', component: () => import('@/components/org/orgDlr'), type: 'propus', isMust: false},
        {compKey: 'compKey3', labelName: this.$t('ve.label.transferOutDlr')/*调出经销商*/, codeField: 'transferOutDlrId', component: () => import('@/components/org/orgDlr'), type: 'propus', isMust: false},{
          compKey: "compKey4",
          labelName: this.$t('ve.label.transferNumber')/*调拨单号*/,
          codeField: "transferNumber",
          component: () => import("@/components/org/commonInput/index"),
          type: "input",
          isMust: true
        },
        {
          compKey: "compKey5",
          labelName: this.$t('org.label.carConfig')/*车型配置*/,
          codeField: "carConfigId",
          parentFileds: 'value:carBrandCode,show:carBrandCode--99',
          component: () => import("@/components/org/carTypeConfig"),
          type: "propus",
          isMust: true
        },
        {
          compKey: "compKey6",
          labelName: this.$t('org.label.carColor')/*车身颜色*/,
          codeField: "carColorId",
          component: () => import("@/components/org/carColor"),
          type: "propus",
          isMust: true
        },
        {
          compKey: "compKey7",
          labelName: this.$t('org.label.carIncolor')/*内饰色*/,
          codeField: "carIncolorId",
          component: () => import("@/components/org/TrimPopupColor"),
          type: "propus",
          isMust: false
        },
        {compKey: 'compKey8', labelName: this.$t('ve.label.transferArea'), /*调拨区域*/ lookuptype: 'VE0258', codeField: 'transferArea', component: () => import('@/components/org/LookupValue'), type: 'dropdownList', isMust: false},
        {compKey: 'compKey9', labelName: this.$t('ve.label.transferType'), /*调拨类型*/ lookuptype: 'VE0257', codeField: 'transferType', component: () => import('@/components/org/LookupValue'), type: 'dropdownList', isMust: false},
        {compKey: 'compKey10', labelName: this.$t('ve.label.transferStartDate'),/*调拨开始日期*/ codeField: 'transferStartDate', component: () => import('@/components/org/datePicker/datePicker'), type: 'datePicker', dateOptionsType: '0', isMust: false },
        {compKey: 'compKey11', labelName: this.$t('ve.label.transferEndDate'),/*调拨结束日期*/ codeField: 'transferEndDate', component: () => import('@/components/org/datePicker/datePicker'), type: 'datePicker', dateOptionsType: '0', isMust: false },
        {compKey: 'compKey12', labelName: this.$t('ve.label.transferOrderStaus'), /*调拨单状态*/ lookuptype: 'VE0488', codeField: 'transferOrderStaus', component: () => import('@/components/org/LookupValue'), type: 'dropdownList', isMust: false},
        {compKey: 'compKey13', labelName: this.$t('ve.label.ignoreCrossCity'), /*忽略跨城市*/ codeField: 'ignoreCrossCity', component: () => import('@/components/org/isEnable/isEnable'), type: 'dropdownList', isMust: false}
      ],
      // 动态生成网格列
      tableCols: CacheConfig.cacheData[this.$route.path] && CacheConfig.cacheData[this.$route.path].tableCols.length > 0 ? CacheConfig.cacheData[this.$route.path].tableCols : [
        { prop: 'carBrandCn', label: this.$t('org.label.carBrand')/*品牌*/, width: 150, align: 'center' },
        { prop: 'carBrandCode', label: this.$t('ve.label.carBrand')/*品牌编号*/, hidden: true, align: 'center' },
        { prop: 'transferNumber', label: this.$t('ve.label.transferNumber')/*调拨单号*/, width: 200, align: 'center' },
        { prop: 'transferDate', label: this.$t('ve.label.transferDate')/*调拨日期*/, width: 150, align: 'center' },
        { prop: 'transferInDlr', label: this.$t('ve.label.transferInDlr')/*调入经销商*/, width: 150, align: 'center' },
        { prop: 'transferOutDlr', label: this.$t('ve.label.transferOutDlr')/*调出经销商*/, width: 150, align: 'center' },
        { prop: 'transferType', label: this.$t('ve.label.transferType')/*调拨类型*/, width: 150, align: 'center' },
        { prop: 'transferArea', label: this.$t('ve.label.transferArea')/*调拨区域*/, width: 150, align: 'center' },
        { prop: 'transferOrderStaus', label: this.$t('ve.label.transferOrderStaus')/*调拨单状态*/, width: 150, align: 'center' },
        { prop: 'smallCarTypeCn', label: this.$t('org.label.smallCarTypeCn')/*车型*/, width: 150, align: 'center' },
        { prop: 'carConfigName', label: this.$t('org.label.carConfig')/*车型配置*/, width: 150, align: 'center' },
        { prop: 'carColorCn', label: this.$t('org.label.carColor')/*车身颜色*/, width: 150, align: 'center' },
        { prop: 'carIncolorCn', label: this.$t('org.label.carIncolor')/*内饰色*/, width: 150, align: 'center' },
        { prop: 'number', label: this.$t('ve.label.number')/*数量*/, width: 150, align: 'center' },
      ],
       //表单查询数据
      formField: {
        carBrandCode:"",
        transferInDlrId:"",
        transferOutDlrId:"",
        transferNumber:"",
        carConfigId:"",
        carColorId:"",
        carIncolorId:"",
        transferArea:"",
        transferType:"",
        transferStartDate:"",
        transferEndDate:"",
        transferOrderStaus:"",
        ignoreCrossCity:""
      },
      };
  },
   methods: {
     //调出确认
    examine(){
      const that = this.$refs.multipleTable;
      let saveState = true;
      let saveCount = 0;
      let msg = '';

      let selectData = that.$refs.multipleTable.selection;
      if (selectData.length < 1) {
        that.$message({
          message: '请选择审核的信息',
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
          apiConfig: veApis.vecldcqrExamine,
          variables: {
            //当前中台使用的名称有dataInfo、info，具体查看API文档
            dataInfo: {
              carBrandCode: selectData[k].carBrandCode,
              transferNumber: selectData[k].transferNumber,
              updateControlId	: selectData[k].updateControlId
            }
          }
        };
        //转换了中台请求格式数据
        var paramD = that.$getParams(queryObj);
        // 调用中台API方法（可复用）
        that.$requestGraphQL(paramD).then(response =>{
            saveCount++
          // if (response.data[queryObj.apiConfig.ServiceCode].result === '1') {
          //   saveCount++;
          // } else {
          //   saveState = false;
          //   msg = response.data[queryObj.apiConfig.ServiceCode].msg;
          //   that.$message({
          //     message: msg,
          //     type: 'warning',
          //     duration: 2000
          //   });
          // }

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
    }
   }
};
</script>
