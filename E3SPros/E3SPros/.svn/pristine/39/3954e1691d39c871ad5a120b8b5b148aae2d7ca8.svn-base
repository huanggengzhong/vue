<template>
  <div class="app-container app-container-table">
    <one-table-template ref="multipleTable"
      :dynamicButtons="tableButtons"
      :dynamicComponents="tableComponents"
      :dynamicApiConfig="apiConfig"
      :dynamicTableCols="tableCols"
      :dynamicFormFields="formField"
      :dynamicIsShowSelect="true"
      :dynamicIsShowMoreBtn="true"
      :dynamicIsColumnDrop="true"
      :dynamicTableOtherHeight="120"
    />
  </div>
</template>
<script>
import { oneTableWithViewTemplateMixins } from '@/components/mixins/oneTableWithViewTemplateMixins';
import { veApis } from '@/api/graphQLApiList/ve'
import OneTableTemplate from '@/components/templates/oneTable'
import { CacheConfig } from '@/cache/configCache/index'

export default {
  name:"transferOrderApply",
  // 组件混入对象：{data[listQuery] methods[queryTable]}
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
      apiConfig: veApis.vecldbsqOutApplyQueryForPage,
      // 动态组件-按钮
      tableButtons: [
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
          clickEvent: () => null,
          text: this.$t("sys.button.save") /*保存*/
        },
        {
          compKey: "btnKey3",
          type: "",
          size: "small",
          clickEvent: () => this.reset(),
          text: this.$t("sys.button.reset") /*重置*/
        },
        {
          compKey: "btnKey4",
          type: "",
          size: "small",
          clickEvent: () => this.return(),
          text: this.$t("sys.button.return") /*返回*/
        }
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
        {
          compKey: "compKey2",
          labelName: this.$t('org.label.carConfig')/*车型*/,
          codeField: "carConfigId",
          parentFileds: 'value:carBrandCode,show:carBrandCode--99',
          component: () => import("@/components/org/carTypeConfig"),
          type: "propus",
          isMust: true
        },
        {
          compKey: "compKey3",
          labelName: this.$t('org.label.carColor')/*车身颜色*/,
          codeField: "carColorId",
          component: () => import("@/components/org/carColor"),
          type: "propus",
          isMust: true
        },
        {
          compKey: "compKey4",
          labelName: this.$t('org.label.carIncolor')/*内饰色*/,
          codeField: "carIncolorId",
          component: () => import("@/components/org/TrimPopupColor"),
          type: "propus",
          isMust: true
        },
        {
          compKey: "compKey5",
          labelName: this.$t('ve.label.vin')/*调拨单号*/,
          codeField: "vin",
          component: () => import("@/components/org/commonInput/index"),
          type: "input",
          isMust: false
        },
      ],
      // 动态生成网格列
      tableCols: CacheConfig.cacheData[this.$route.path] && CacheConfig.cacheData[this.$route.path].tableCols.length > 0 ? CacheConfig.cacheData[this.$route.path].tableCols : [
        { prop: 'carBrandCn', label: this.$t('org.label.carBrand')/*品牌*/, width: 150, align: 'center' },
        { prop: 'transferInDlr', label: this.$t('ve.label.transferInDlr')/*调入经销商*/, width: 150, align: 'center',isComponent: true,
          comps: [{compKey: "propKey1",isShowLabel: false,codeField: "dlrId",textField:"transferInDlr",
                    component: () => import("@/components/org/orgDlr/index"),type: "propus",isMust: false}]},
        { prop: 'transferPrice', label: this.$t('ve.label.transferPrice')/*采购价格*/, width: 150, align: 'center',isComponent: true,
          comps: [{compKey: "propKey1",isShowLabel: false,codeField: "transferPrice",clickEvent: () => null,component: () => import("@/components/org/commonInput")}]},
        { prop: 'purchasePrice', label: this.$t('ve.label.purchasePrice')/*调拨价格*/, width: 150, align: 'center' },
        { prop: 'carSeriesCn', label: this.$t('org.label.carSerise')/*车系*/, width: 90, align: 'center' },
        { prop: 'smallCarTypeCn', label: this.$t('org.label.smallCarTypeCn')/*车型*/, width: 150, align: 'center' },
        { prop: 'carConfigCode', label: this.$t('org.label.carConfig')/*车型配置*/, width: 150, align: 'center' },
        { prop: 'carColorCn', label: this.$t('org.label.carColor')/*车身颜色*/, width: 150, align: 'center' },
        { prop: 'carIncolorCn', label: this.$t('org.label.carIncolor')/*内饰色*/, width: 150, align: 'center' }
      ],
      //表单查询数据（查询条件）
      formField: {
        carBrandCode:"",
        carConfigId:"",
        carColorId:"",
        carIncolorId:"",
        vin:"",
      }
    }
  },
  created() {},
  methods: {
    return(){
        this.$emit('return')
    },
    //驳回
    rejectOrder(){
      const that = this.$refs.multipleTable;
      let saveState = true;
      let saveCount = 0;
      let msg = '';

      let selectData = that.$refs.multipleTable.selection;
      if (selectData.length < 1) {
        that.$message({
          message: '请选择需要驳回的采购单',
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
          apiConfig: veApis.veRejectOrder,
          variables: {
            //当前中台使用的名称有dataInfo、info，具体查看API文档
            dataInfo: {
              carBrandCode: selectData[k].carBrandCode,
              purOrderDId: selectData[k].purOrderDId,
              updateControlId	: selectData[k].updateControlId
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
    }
  }
}
</script>
<style lang="scss" scoped>
/deep/ #pane-first .filter-button {
    text-align: right;
    width: 100%;
    padding: 5px;
    background: transparent;
    border: none;
    min-height: 28px;
    background-color: white;
}
</style>
