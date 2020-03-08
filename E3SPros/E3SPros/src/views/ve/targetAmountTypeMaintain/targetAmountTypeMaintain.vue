<!--
* description: 目标量类型维护
* author: xulfan
* createdDate: 2019-09-20
* logs:
*   2019-09-19 完成页面开发和国际化配置 xulfan
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
      :dynamicIsShowSelect="false"
      :dynamicIsShowMoreBtn="true"
    />
    <Edit
      :dynamicEditRowData="editRowData"
      :popupsVisible="editPopupsVisible"
      :key="editPopupsKey"
      :popupsState="editPopupsState"
      @close="close"
    />
  </div>
</template>
<script>
import { oneTableWithViewTemplateMixins } from '@/components/mixins/oneTableWithViewTemplateMixins';
import { veApis } from "@/api/graphQLApiList/ve";
import OneTableTemplate from "@/components/templates/oneTable";
import { CacheConfig } from "@/cache/configCache/index";
import LangSelect from "@/components/LangSelect";
import Edit from "./edit";
export default {
  name: "targetAmountTypeMaintain",
  // 组件混入对象
  mixins: [oneTableWithViewTemplateMixins],
  components: {
    OneTableTemplate,
    LangSelect,
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
      apiConfig: veApis.targetAmountTypeQry,
      // 动态组件-按钮
      tableButtons: [
        {
          compKey: "btnKey1",
          type: "primary",
          size: "small",
          clickEvent: () => this.queryTable(1),
          text: this.$t("sys.button.query") //查询
        },
        {
          compKey: "btnKey4",
          type: "",
          size: "small",
          clickEvent: () => this.reset(),
          text: this.$t("sys.button.reset") //重置
        },
        {
          compKey: "btnKey6",
          type: "",
          size: "small",
          clickEvent: () => this.add(),
          text: this.$t("sys.button.add") //新增
        }
      ],
      tableComponents:
        CacheConfig.cacheData[this.$route.path] &&
        CacheConfig.cacheData[this.$route.path].tableComponents.length > 0
          ? CacheConfig.cacheData[this.$route.path].tableComponents
          : [
              // 动态组件-查询条件
              {
                compKey: "compKey1",
                labelName: this.$t("org.label.carBrandCn"), //品牌名称
                codeField: "carBrandCode",
                component: () => import("@/components/org/carBrand/carBrand"),
                type: "dropdownList",
                isMust: true
              },
              {
                compKey: "compKey2",
                labelName: this.$t("org.label.targetType"), //目标量类型
                codeField: "targetType",
                component: () => import("@/components/org/commonInput"),
                type: "inputText",
                isMust: true
              },
              {
                compKey: "compKey3",
                labelName: this.$t("org.label.isDecimal"), //是否小数
                codeField: "isDecimal",
                component: () => import("@/components/org/isEnable/isEnable"),
                type: "dropdownList",
                isMust: true
              },
              {
                compKey: "compKey4",
                labelName: this.$t("org.label.carryingUnit"), //携带单位
                codeField: "carryingUnit",
                component: () => import("@/components/org/commonInput"),
                type: "inputText",
                isMust: true
              },
              {
                compKey: "compKey5",
                labelName: this.$t("org.label.isStatistics"), //是否统计
                codeField: "isStatistics",
                component: () => import("@/components/org/isEnable/isEnable"),
                type: "dropdownList",
                isMust: false
              },
              {
                compKey: "compKey6",
                labelName: this.$t("org.label.enableSituation"), //启用状态
                codeField: "isEnable",
                component: () => import("@/components/org/isEnable/isEnable"),
                type: "dropdownList",
                isMust: false
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
                label: this.$t("sys.button.edit") /*操作*/,
                codeField: "controlBtn",
                width: 60,
                align: "center",
                isComponent: true,
                comps: [
                  {
                    compKey: "propKey1",
                    labelName: this.$t("sys.button.edit"),
                    codeField: "editControlBtn",
                    clickEvent: this.edit,
                    component: () => import("@/components/org/linkButton")
                  }
                ]
              },
              {
                prop: "carBrandCn",
                label: this.$t("org.label.carBrandCn"),/**品牌 */
                width: null,
                align: "center",
                // hidden: true
              } ,

              {
                prop: "targetType",
                label: this.$t("org.label.targetType"), //目标量类型
                width: null,
                align: "center"
              },
              {
                prop: "isDecimal",
                label: this.$t("org.label.isDecimal"), //是否小数
                width: null,
                align: "center"
              },
              {
                prop: "carryingUnit",
                label: this.$t("org.label.carryingUnit"), //携带单位
                width: null,
                align: "center"
              },
              {
                prop: "isStatistics",
                label: this.$t("org.label.isStatistics"), //是否统计
                width: null,
                align: "center"
              },

              {
                prop: "isEnable",
                label: this.$t("org.label.enableSituation"), //启用状态
                width: null,
                align: "center"
              },
              {
                prop: "updateControlId",
                label: this.$t("org.label.updateControlId"), //并发控制Id
                width: null,
                align: "center",
                hidden: true
              }
            ],
      //表单查询数据
      formField: {
        carBrandCode: "",
        targetType: "",
        isDecimal: "",
        carryingUnit: "",
        isStatistics: "",
        isEnable: ""
      }
    };
  },
  methods: {}
};
</script>
