<!--
* description: 车系维护
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
      :dynamicIsShowMoreBtn="false"
      :dynamicIsShowSelect="false"
    />
    <!-- :dynamicIsShowSelect="false" -->

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
import { oneTableWithViewTemplateMixins } from "@/components/mixins/oneTableWithViewTemplateMixins";
import { orgApis } from "@/api/graphQLApiList/org";
import OneTableTemplate from "@/components/templates/oneTable";
import Edit from "./edit";
import { CacheConfig } from "@/cache/configCache/index";
import mixButton from "@/components/basicComponent/mixButton";
export default {
  name: "mdmveCarSeriesQry",
  // 组件混入对象
  mixins: [oneTableWithViewTemplateMixins],
  components: {
    OneTableTemplate,
    Edit,
    mixButton
  },
  // 阻塞路由预加载网格中组件的数据
  beforeRouteEnter(to, from, next) {
    CacheConfig.initData(to.path, function() {
      next();
    });
  },
  data() {
    return {
      // 网格查询API配置对象
      apiConfig: orgApis.mdmVeCarSeriesQueryListForPage,
      // 动态组件-按钮
      tableButtons: [
        {
          compKey: "btnKey1",
          type: "primary",
          size: "small",
          clickEvent: () => this.queryTable(1),
          name: "search",
          position: "right",
          fuzzySearch: true,
          text: this.$t("sys.button.query") /**查询 */
        },
        {
          compKey: "btnKey2",
          type: "",
          size: "small",
          clickEvent: () => this.add(),
          name: "add",
          position: "left",
          text: this.$t("sys.button.add") /**新增 */
        },
        {
          compKey: "btnKey3",
          type: "",
          size: "small",
          clickEvent: () => this.reset(),
          name: "reset",
          position: "right",
          text: this.$t("sys.button.reset") /**重置 */
        },
        {
          compKey: "btnKey4",
          type: "",
          size: "small",
          clickEvent: () => this.exportExcel(),
          name: "export",
          position: "left",
          // fuzzySearch: true,
          text: this.$t("sys.button.export") /**导出 */
        }
      ],
      // 动态组件-查询条件
      tableComponents:
        CacheConfig.cacheData[this.$route.path] &&
        CacheConfig.cacheData[this.$route.path].tableComponents.length > 0
          ? CacheConfig.cacheData[this.$route.path].tableComponents
          : [
              {
                compKey: "compKey1",
                labelName: this.$t("org.label.carBrandCn") /**品牌 */,
                codeField: "carBrandCode",
                component: () => import("@/components/org/carBrand/carBrand"),
                type: "dropdownList",
                isMust: false,
              },
              {
                compKey: "compKey2",
                labelName: this.$t("org.label.carSeriesCode") /**车系编码 */,
                codeField: "carSeriesCode",
                component: () => import("@/components/org/commonInput"),
                type: "inputText",
                isMust: false,
              },
              {
                compKey: "compKey3",
                labelName: this.$t("org.label.carSeriesCn") /**车系名称 */,
                codeField: "carSeriesCn",
                component: () => import("@/components/org/commonInput"),
                type: "inputText",
                isMust: false,
                fuzzySearch: true
              }
            ],
      // 动态生成网格列
      tableCols:
        CacheConfig.cacheData[this.$route.path] &&
        CacheConfig.cacheData[this.$route.path].tableCols.length > 0
          ? CacheConfig.cacheData[this.$route.path].tableCols
          : [
              {
                prop: "controlBtn",
                label: this.$t("sys.content.operate") /*操作*/,
                codeField: "controlBtn",
                width: 60,
                align: "center",
                isComponent: true,
                comps: [
                  {
                    compKey: "propKey1",
                    labelName: this.$t("sys.button.edit") /*修改*/,
                    codeField: "editControlBtn",
                    clickEvent: this.edit,
                    component: () => import("@/components/org/linkButton")
                  }
                ]
              },
              {
                prop: "carBrandCode",
                label: this.$t("org.label.carBrandCn") /**品牌 */,
                width: 120,
                align: "center",
                hidden: true
              },
              {
                prop: "carSeriesCode",
                label: this.$t("org.label.carSeriesCode") /**车系编码 */,
                width: null,
                align: "center"
              },
              {
                prop: "carSeriesId",
                label: this.$t("org.label.carSeriesId") /**车系Id */,
                width: null,
                align: "center",
                hidden: true
              },
              {
                prop: "carSeriesCn",
                label: this.$t("org.label.carSeriesCn") /**车系名称 */,
                width: null,
                align: "center"
              },
              {
                prop: "carSeriesEn",
                label: this.$t("org.label.carSeriesEn") /**英文名称 */,
                width: null,
                align: "center"
              },
              {
                prop: "sapCarseriesCode",
                label: this.$t("ve.label.sapCarseriesCode") /**SAP车系编码*/,
                width: 150,
                align: "center"
              },
              {
                prop: "partSeriesCode",
                label: this.$t("ve.label.partSeries") /**备件车系 */,
                width: null,
                align: "center",
                hidden: true
              },
              {
                prop: "sCarseriesCode",
                label: this.$t("ve.label.sCarseriesCode") /**售后车系编码 */,
                width: null,
                align: "center"
              },
              {
                prop: "sCarseriesDesc",
                label: this.$t("ve.label.sCarseriesName") /**售后车系名称 */,
                width: null,
                align: "center"
                // hidden: true
              },
              {
                prop: "beginDate",
                label: this.$t("ve.label.beginDate") /**投产日期 */,
                width: null,
                align: "center"
              },
              {
                prop: "endDate",
                label: this.$t("ve.label.endDate") /**停产日期 */,
                width: null,
                align: "center"
              },
              {
                prop: "isEnable",
                label: this.$t("org.label.situation") /**状态 */,
                width: null,
                align: "center",
                hidden: true
              },
              {
                prop: "isEnableCn",
                label: this.$t("org.label.isEnableCn") /**启用状态 */,
                width: null,
                align: "center"
              },
              {
                prop: "updateControlId",
                label: "并发字段",
                width: null,
                align: "center",
                hidden: true
              }
            ],
      //表单查询数据
      formField: {
        carBrandCode: "",
        carSeriesCode: "",
        carSeriesId: "",
        carSeriesCn: "",
        oemCode: "",
        groupCode: ""
        // updateControlId: ""
      },
      // 是否使用刷新Key的方式刷新弹窗
      resetDialogKey: false
    };
  }
};
</script>
