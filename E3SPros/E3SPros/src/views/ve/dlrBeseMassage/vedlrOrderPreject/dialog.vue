<!--
* description: 经销商订单预测的理论库存周期设置
* author: linzewen
* createdDate: 2019-08-07
--><!--
* description: 车型配置弹出框
* author: luojx
* createdDate: 2019-08-02
-->
<template>
  <!-- <section class="carTypeConfig"> -->
    <el-dialog
      title="理论库存周期设置"
      :visible.sync="dialogVisible"
      width="1000px"
      center
      @close="sendCode"
      :close-on-click-modal="false"
      :append-to-body="true"
    >
      <one-table-template ref="multipleTable"
        :dynamicButtons="tableButtons"
        :dynamicComponents="tableComponents"
        :dynamicApiConfig="apiConfig"
        :dynamicTableCols="tableCols"
        :dynamicFormFields="formField"
        :dynamicIsShowSelect="true"
      />
    </el-dialog>
  <!-- </section> -->
</template>
<script>
import { oneTableTemplateMixins } from '@/components/mixins/oneTableTemplateMixins';
import { valueObjectMixins } from '@/components/mixins/valueObjectMixins';
import { veApis } from '@/api/graphQLApiList/ve'
import OneTableTemplate from '@/components/templates/popupsOneTable'
export default {
  // 组件混入对象：{data[listQuery] methods[queryTable]}
  mixins: [oneTableTemplateMixins, valueObjectMixins],
  components: {
    OneTableTemplate
  },
  props:{
    dialogVisible:{
      type:Boolean,
      default:false
    }
  },
  data() {
    return {
      // 网格查询API配置对象
      apiConfig: veApis.veBaseCycleStockQry,
      // 保存
      hisFormField: {
        dlrId: "",
        baseStockCycle: "",
        carBrandCode: ""
      },
      // 动态组件-按钮
      tableButtons: [
        {compKey: 'btnKey1', type: 'primary', size: 'small', clickEvent: () => this.queryTable(1), text: '查询'},
        {compKey: 'btnKey2', type: '', size: 'small', clickEvent: () => this.reset(), text: '重置'},
        {compKey: 'btnKey3', type: '', size: 'small', clickEvent: () => this.synchrony(), text: '同步'},
        {compKey: 'btnKey4', type: '', size: 'small', clickEvent: () => this.save(), text: '保存'},
        {compKey: 'btnKey5', type: '', size: 'small', clickEvent: () => this.reset(), text: '导出'},
//        {compKey: 'btnKey3', type: '', size: 'small', clickEvent: () => this.sendCode('carConfigId', 'carConfigId'), text: '确认'}
      ],
      // 动态组件-查询条件
      tableComponents: [
        // 显示组件
        {compKey: 'compKey1', labelName: '品牌', codeField: 'carBrandCode', component: () => import('@/components/org/carBrand/carBrand'), type: 'dropdownList', isMust: true},
        {compKey: 'compKey2', labelName: '经销商', codeField: 'drlId', component: () => import('@/components/org/commonInput/searchInput'), type: 'popupsInput', isMust: true,
         popups: {type: 'propus', key: 'key1', state: false, component: () => import('@/components/org/orgDlr')}},
        {compKey: 'compKey3', labelName: '理论库存周期', codeField: 'baseCycleStock', component: () => import('@/components/org/commonInput'), type: 'inputText', isMust: true},
      ],
      // 动态生成网格列
      tableCols: [
        { prop: 'carBrandName', label: '品牌', width: 115, align: 'center' },
        { prop: 'dlrShortName', label: '经销商', width: 115, align: 'center' },
        { prop: 'baseCycleStock', label: '理论库存周期', width: null, align: 'center', isComponent: true,
          comps: [{compKey: 'propKey2', isShowLabel: false, codeField: 'baseCycleStock', component: () => import('@/components/org/commonInput'), type: 'inputText'}]
        },
        { prop: 'bigAreaName', label: '大区', width: 115, align: 'center' },
        { prop: 'smallAreaName', label: '小区', width: 115, align: 'center' },
      ],
      //表单查询数据（查询条件）
      formField:{
        carBrandCode: '',
        drlId: '',
        baseCycleStock: ''
      }
    }
  },
  methods:{
    // 同步
    synchrony(){

    },
    save() {
      const that = this;
      let selectData = that.$refs.multipleTable.selection;
     // let stationListTemp1 = "";
      let stationListTemp2 = "";
      //通知场景保存
      let queryObj = {
        // 保存mutation
        type: "mutation",
        // api配置
        apiConfig: veApis.veBaseCycleStockSave,
        //条件/实体参数（变量），根据typeParam中的定义配置
        variables: {
          //当前中台使用的名称有dataInfo、info，具体查看API文档
          dataInfo: that.mdsSysPositionObj
        }
      };
      for (var i = 0; i < selectData.length; i++) {
  //      stationListTemp1 = stationListTemp1 + selectData[i].dlrId + ",";
        stationListTemp2 = stationListTemp2 + selectData[i].baseCycleStock + ",";
        //转换了中台请求格式数据

      };
      debugger
 //     this.mdsSysPositionObj.dlrId = stationListTemp1;
      this.mdsSysPositionObj.baseCycleStock = stationListTemp2;

        var paramD = that.$getParams(queryObj);
      // 调用中台API方法（可复用）
      requestGraphQL(paramD).then(response => {
        if (response.data[queryObj.apiConfig.ServiceCode].result === "1") {
          that.listLoading = false;
          // that.formQuery(1);
          that.$message({
            message: "保存成功",
            type: "success",
            duration: 2000
          });
          that.sendCodeHandleVisible();
        }
      });
    },
  }
};
</script>
