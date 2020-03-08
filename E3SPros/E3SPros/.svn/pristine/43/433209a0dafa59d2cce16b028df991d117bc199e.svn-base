<!--
* 采购单需求维护
* xulfan
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
import { veApis } from "@/api/graphQLApiList/ve";
import OneTableTemplate from "@/components/templates/oneTable";
import Edit from "./edit";
import { CacheConfig } from '@/cache/configCache/index'

export default {
  name: "vePurReqQry",
  // 组件混入对象：{data[listQuery] methods[queryTable]}
  mixins: [oneTableWithViewTemplateMixins],
  components: {
    OneTableTemplate,
    Edit
  },
  // 阻塞路由预加载网格中组件的数据
 beforeRouteEnter(to, from, next) {
  CacheConfig.initData(to.path, function(){next()})
 },
  data() {
    return {
      dataInfo: "",
      // 网格查询API配置对象
      apiConfig: veApis.vePurReqQry,
      // 动态组件-按钮
      tableButtons: [
        {
          compKey: "btnKey1",
          type: "primary",
          size: "small",
          clickEvent: () => this.queryTable(1),
          text: this.$t('sys.button.query')
        },
        {
          compKey: "btnKey2",
          type: "",
          size: "small",
          clickEvent: () => this.add(),
          text: this.$t('sys.button.add')
        },
        {
          compKey: "btnKey3",
          type: "",
          size: "small",
          clickEvent: () => this.edit(),
          text: this.$t('sys.button.edit')
        },
        {
          compKey: "btnKey4",
          type: "",
          size: "small",
          clickEvent: () => this.del(),
          text: this.$t('sys.button.delete')
        },
        {
          compKey: "btnKey5",
          type: "",
          size: "small",
          clickEvent: () => this.reset(),
          text: this.$t('sys.button.reset')
        },
        {
          compKey: "btnKey6",
          type: "",
          size: "small",
          clickEvent: () => this.exportExcel(),
          text: this.$t('sys.button.export')
        }
      ],
      // 动态组件-查询条件
      tableComponents: CacheConfig.cacheData[this.$route.path] && CacheConfig.cacheData[this.$route.path].tableComponents && CacheConfig.cacheData[this.$route.path].tableComponents.length > 0 ? CacheConfig.cacheData[this.$route.path].tableComponents: [
        // 显示组件
        {
          compKey: "compKey1",
          labelName: this.$t('org.label.carBrandCn'),/*品牌*/
          codeField: "carBrandCode",
          component: () => import("@/components/org/carBrand/carBrand"),
          type: "dropdownList",
          isMust: true
        },
        {
          compKey: "compKey2",
          labelName: this.$t('org.label.carType'),/*车型*/
          codeField: "carConfigId",
          component: () => import("@/components/org/carTypeConfig"),
          type: "propus",
          isMust: true
        },
        {
          compKey: "compKey3",
          labelName: this.$t('org.label.carColor'),/*车身颜色*/
          codeField: "carColorId",
          component: () => import("@/components/org/carColor"),
          type: "propus",
          isMust: true
        },
        {
          compKey: "compKey4",
          labelName: this.$t('org.label.carIncolor'),/*内饰色*/
          codeField: "carIncolorId",
          component: () => import("@/components/org/TrimPopupColor"),
          type: "propus",
          isMust: true
        },
        // 日期控件
        {
          compKey: "compKey5",
          labelName: this.$t('ve.label.preInStockDateBegin'),/*期望提车日期始*/
          codeField: "preInStockDateBegin",
          component: () => import("@/components/org/datePicker/datePicker"),
          type: "datePicker",
          dateOptionsType: "1",
          isMust: false
        },
        {
          compKey: "compKey6",
          labelName: this.$t('ve.label.preInStockDateEnd'),/*期望提车日期止*/
          codeField: "preInStockDateEnd",
          component: () => import("@/components/org/datePicker/datePicker"),
          type: "datePicker",
          dateOptionsType: "1",
          isMust: false
        },
        // 送货方式（值列表）
        {
          compKey: "compKey7",
          labelName: this.$t('ve.label.purOrderStatus'),/*需求单状态*/
          lookuptype: "VE0041",
          codeField: "isEnable",
          component: () => import("@/components/org/LookupValue"),
          type: "dropdownList",
          isMust: false
        }
      ],
      // 动态生成网格列
      tableCols: CacheConfig.cacheData[this.$route.path] && CacheConfig.cacheData[this.$route.path].tableCols && CacheConfig.cacheData[this.$route.path].tableCols.length > 0 ? CacheConfig.cacheData[this.$route.path].tableCols: [
        { prop: "carBrandName", label: this.$t('org.label.carBrand'), width: 120, align: "center" },/**品牌 */
        { prop: "carSeriesCode", label: this.$t('org.label.carSerise'), width: null, align: "center" },/**车系 */
        { prop: "carConfigCode", label: this.$t('org.label.carType'), width: 155, align: "center" },/**车型 */
        { prop: "carConfigId", label: "车型Id", width: 155, align: "center", hidden: true },
        {
          prop: "carConfigName",
          label: this.$t('org.label.carConfig'),/**车型配置 */
          width: 155,
          align: "center"
        },
        {
          prop: "carColorName",
          label: this.$t('org.label.carColor'),/**车身颜色 */
          width: 150,
          align: "center"
        },
        { prop: "carColorId", label: "车身颜色Id", width: 155, align: "center", hidden: true },
        {
          prop: "carIncolorName",
          label: this.$t('org.label.carIncolor'),/**内饰色 */
          width: null,
          align: "center"
        },
        { prop: "quantity", label: this.$t('org.label.purQty'),width: null, align: "center" },/**采购数量 */
        {
          prop: "preInStockDate",
          label: this.$t('ve.label.preInStockDate'),/**"预计提货日期" */
          width: 120,
          align: "center"
        },
        { prop: "subMitDate", label: this.$t('ve.label.subMitDate'), width: 120, align: "center" },/**"提交日期" */
        { prop: "creator", label: this.$t('org.label.creator'), width: null, align: "center" },/**下单人 */
        { prop: "dlrId", label: "经销商ID", width: null, align: "center", hidden: true },
        { prop: "secDlrId", label: "二网网点ID", width: null, align: "center", hidden: true },
        { prop: "updateControlId", label: "并发字段", width: null, align: "center", hidden: true },
      ],
      //表单查询数据（查询条件）
      formField: {
        carBrandCode: "",
        carConfigId: "",
        carColorId: "",
        carIncolorId: "",
        preInStockDateBegin: "",
        preInStockDateEnd: "",
        isEnable: ""
      },
      // 是否使用刷新Key的方式刷新弹窗
      resetDialogKey: false
    };
  },
  methods: {
    del() {
      const that = this.$refs.multipleTable;
      let saveState = true;
      let saveCount = 0;
      let msg = "";

      let selectData = that.$refs.multipleTable.selection;
      if (selectData.length < 1) {
        that.$message({
          message: "请选择需要作废的采购需求",
          type: "warning",
          duration: 2000
        });
        return;
      }
      for (var k in selectData) {
        let queryObj = {
          // 保存mutation
          type: "mutation",
          // api配置
          apiConfig: veApis.vePurReqDel,
          variables: {
            //当前中台使用的名称有dataInfo、info，具体查看API文档
            dataInfo: {
              carBrandCode: selectData[k].carBrandCode,
              purRequireId: selectData[k].purRequireId,
              updateControlId: selectData[k].updateControlId
            }
          }
        };
        //转换了中台请求格式数据
        var paramD = that.$getParams(queryObj);
        // 调用中台API方法（可复用）
        that.$requestGraphQL(paramD).then(response => {
          if (response.data[queryObj.apiConfig.ServiceCode].result === "1") {
            saveCount++;
          } else {
            saveState = false;
            msg = response.data[queryObj.apiConfig.ServiceCode].msg;
            that.$message({
              message: msg,
              type: "warning",
              duration: 2000
            });
          }
          if (saveCount == selectData.length) {
            that.$message({
              message: "作废成功",
              type: "success",
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
