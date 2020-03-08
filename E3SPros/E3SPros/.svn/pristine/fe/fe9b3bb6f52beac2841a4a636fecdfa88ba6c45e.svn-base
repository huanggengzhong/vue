<!--
* description: 经销商订单预测的理论库存周期设置
* author: luojx
* createdDate: 2019-08-02
-->
<template>
  <section class="carTypeConfig">
    <el-dialog
      title="理论库存周期设置"
      :visible.sync="dialogVisible"
      width="1000px"
      center
      @close="sendCode"
      :close-on-click-modal="false"
      :append-to-body="true"
    >
      <one-table-template
        ref="multipleTable"
        :dynamicButtons="tableButtons"
        :dynamicComponents="tableComponents"
        :dynamicApiConfig="apiConfig"
        :dynamicTableCols="tableCols"
        :dynamicFormFields="formField"
        :dynamicIsColumnDrop="true"
      />
    </el-dialog>
  </section>
</template>
<script>
import { oneTableWithViewTemplateMixins } from '@/components/mixins/oneTableWithViewTemplateMixins';
import { valueObjectMixins } from '@/components/mixins/valueObjectMixins';
import { veApis } from "@/api/graphQLApiList/ve";
import { requestGraphQL } from "@/api/commonRequest";
import OneTableTemplate from "@/components/templates/popupsOneTable";
export default {
  // 组件混入对象：{data[listQuery] methods[queryTable]}
  mixins: [oneTableWithViewTemplateMixins, valueObjectMixins],
  components: {
    OneTableTemplate
  },
  props: {
    dialogVisible: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      // 网格查询API配置对象
      apiConfig: veApis.veBaseCycleStockQry,
      // 保存用
      arry : [],
      hisFormField: {
        dlrId: "",
        baseStockCycle: "",
        carBrandCode: ""
      },

      // 动态组件-按钮
      tableButtons: [
        {
          compKey: "btnKey1",
          type: "primary",
          size: "small",
          clickEvent: () => this.queryTable(1),
          text: this.$t('sys.button.query')/*查询*/
        },
        {
          compKey: "btnKey2",
          type: "",
          size: "small",
          clickEvent: () => this.reset(),
          text: this.$t('sys.button.reset')/*重置*/
        },
        {
          compKey: "btnKey3",
          type: "",
          size: "small",
          clickEvent: () => this.synchrony('baseCycleStock'),
          text: this.$t('sys.button.sync')/*同步*/
        },
        {
          compKey: "btnKey4",
          type: "",
          size: "small",
          clickEvent: () => this.saveNew(),
          text: this.$t('sys.button.save')/*保存*/
        },
        {
          compKey: "btnKey5",
          type: "",
          size: "small",
          clickEvent: () => this.exportExcel(),
          text: this.$t('sys.button.export')/*导出*/
        }
        //        {compKey: 'btnKey3', type: '', size: 'small', clickEvent: () => this.sendCode('carConfigId', 'carConfigId'), text: '确认'}
      ],
      // 动态组件-查询条件
      tableComponents: [
        {
          compKey: "compKey1",
          labelName: this.$t('org.label.carBrand')/*品牌名称*/,
          codeField: "carBrandCode",
          component: () => import("@/components/org/carBrand/carBrand"),
          type: "dropdownList",
          isMust: true
        },
        // {compKey: 'compKey2', labelName: '车型配置', codeField: 'carConfigId', component: () => import('@/components/org/commonInput/searchInput'), type: 'popupsInput', isMust: false,
        // popups: {type: 'propus', key: 'key1', state: false, component: () => import('@/components/org/carTypeConfig')}},
        {compKey: 'compKey2', labelName: this.$t('org.label.dlrName')/*经销商*/, codeField: 'drlId', component: () => import('@/components/org/orgDlr'), type: 'propus', isMust: true},
        {
          compKey: "compKey3",
          labelName: this.$t('ve.label.theoreticalInventoryCycleSetting')/*理论库存周期设置*/,
          codeField: "baseCycleStock",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        }
      ],
      // 动态生成网格列
      tableCols: [
        { prop: "carBrandName", label: this.$t('org.label.carBrand')/*品牌名称*/, width: 115, align: "center" },
        { prop: "dlrShortName", label: this.$t('org.label.dlrName')/*经销商*/, width: 115, align: "center" },
        { prop: 'dlrId', label: '经销商ID', width: 110, align: 'center', hidden:true },
        {
          prop: "baseCycleStock",
          label: this.$t('ve.label.theoreticalInventoryCycleSetting')/*理论库存周期设置*/,
          width: null,
          align: "center",
          isComponent: true,
          comps: [
            {
              compKey: "propKey2",
              isShowLabel: false,
              codeField: "baseCycleStock",
              component: () => import("@/components/org/commonInput"),
              clickEvent: () => "",
              type: "inputText"
            }
          ]
        },
        { prop: "bigAreaName", label: this.$t('org.label.region')/*大区*/, width: 115, align: "center" },
        { prop: "smallAreaName", label: this.$t('org.label.village')/*小区*/, width: 115, align: "center" }
      ],
      //表单查询数据（查询条件）
      formField: {
        carBrandCode: "",
        drlId: "",
        baseCycleStock: ""
      }
    };
  },
  methods: {
    // 同步
    // synchronyy() {
    //   const that = this;
    //   //获取选择行的值    this.$refs.multipleTable获取网格  需要在网格添加ref="multipleTable"
    //   let selectData = that.$refs.multipleTable.$refs.multipleTable.selection;
    //   var selectIndexSort = [];
    //   for (var k in selectData) {
    //     selectIndexSort.push(selectData[k].index);
    //   }
    //   //选择行重新排序
    //   selectIndexSort.sort(function(a, b) {
    //     return a > b ? 1 : -1;
    //   });
    //   for (var i = 1; i < selectIndexSort.length; i++) {
    //     //将选择第一行的某个字段数据赋给其他选择行, 可以多个
    //     that.$refs.multipleTable.list[selectIndexSort[i]].baseCycleStock =
    //     that.$refs.multipleTable.list[selectIndexSort[0]].baseCycleStock;
    //   }
    // },
        //保存
    saveNew(){
      const that = this.$refs.multipleTable;
      let saveState = true;
      let saveCount = 0;
      let msg = '';

      let selectData = that.$refs.multipleTable.selection;
      if (selectData.length < 1) {
        that.$message({
          message: this.$t('org.label.choose'),
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
          apiConfig: veApis.veBaseCycleStockSave,
          variables: {
            //当前中台使用的名称有dataInfo、info，具体查看API文档
            dataInfo: {
              dlrId: selectData[k].dlrId,
              baseCycleStock: selectData[k].baseCycleStock
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
              message: '保存成功',
              type: 'success',
              duration: 2000
            });
            that.queryTable(1);
          }
        });
      }
      this.sendCode();
    },
    sendCode() {
      this.$emit("changeCode");
      // this.$emit("changeCode","")
    },
  }
};
</script>
