<!--
* description: 选装包
* yangsq
*2019-10-21
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
import { oneTableWithViewTemplateMixins } from '@/components/mixins/oneTableWithViewTemplateMixins';
import { veApis } from "@/api/graphQLApiList/ve";
import OneTableTemplate from "@/components/templates/oneTable";
import Edit from "./edit";
import { CacheConfig } from "@/cache/configCache/index";
export default {
  name: "mdmveCarSeriesQry",
  // 组件混入对象
  mixins: [oneTableWithViewTemplateMixins],
  components: {
    OneTableTemplate,
    Edit
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
      apiConfig: veApis.veOptionalpackage,
      // 动态组件-按钮
      tableButtons: [
        {
          compKey: "btnKey1",
          type: "primary",
          size: "small",
          clickEvent: () => this.queryTable(1),
          text: this.$t("sys.button.query") /**查询 */
        },
        {
          compKey: "btnKey2",
          type: "",
          size: "small",
          clickEvent: () => this.add(),
          text: this.$t("sys.button.add") /**新增 */
        },
        {
          compKey: "btnKey3",
          type: "",
          size: "small",
          clickEvent: () => this.reset(),
          text: this.$t("sys.button.reset") /**重置 */
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
                isMust: true
              },
              {
                compKey: "compKey2",
                labelName: this.$t("org.label.carConfig") /**车型配置 */,
                codeField: "carConfigId",
                component: () => import("@/components/org/carTypeConfig"),
                type: "propus",
                isMust: true
              },
              {
                compKey: "compKey3",
                labelName: "选装包编码" /**选装包编码 */,
                codeField: "carColorCode",
                component: () => import("@/components/org/commonInput"),
                type: "inputText",
                isMust: true
              },
              {
                compKey: "compKey4",
                labelName: "选装包名称" /**选装包名称 */,
                codeField: "carColorName",
                component: () => import("@/components/org/commonInput"),
                type: "inputText",
                isMust: true
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
                label: this.$t("sys.content.operate"), /*操作*/
                codeField: "controlBtn",
                width: 60,
                align: "center",
                isComponent: true,
                comps: [
                  {
                    compKey: "propKey1",
                    labelName: this.$t("sys.button.edit"), /*修改*/
                    codeField: "editControlBtn",
                    clickEvent: this.edit,
                    component: () => import("@/components/org/linkButton")
                  }
                ]
              },
              {
                prop: "carBrandCode",
                label: this.$t("org.label.carBrandCn"), /**品牌 */
                width: 120,
                align: "center",
                hidden: true
              } ,
              {
                prop: "carSeriesCode",
                label: this.$t("org.label.carSeriesCode") /**车系编码 */,
                width: null,
                hidden:true,
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
                prop: "carConfigId",
                label: "车型配置" /**车型配置 */,
                width: null,
                align: "center"
              },
              {
                prop: "carColorCode",
                label: "选装包" /**选装包 */,
                width: null,
                align: "center"
              },
              {
                prop: "carConfigName",
                label: "选装包名称" /**车系名称 */,
                width: null,
                align: "center"
              },
              {
                prop: "carColorPrise",
                label: "选装包价格" /**选装包价格 */,
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
        carBrandCode:"",
        carColorPrise: "",
        carConfigName: "",
        carSeriesId: "",
        carSeriesCn: "",
        carColorCode: "",
        carConfigId: "",
        updateControlId: ""
      }
    };
  }
};
</script>
