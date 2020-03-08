/**
* description: 车身颜色维护
* author: linwm
* createdDate: 2019-07-23
*/
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
import { orgApis } from "@/api/graphQLApiList/org";
import OneTableTemplate from "@/components/templates/oneTable";
import Edit from "./edit";
import { CacheConfig } from "@/cache/configCache/index";
export default {
  name: "CarColor",
  // 组件混入对象：{data[listQuery] methods[queryTable]}
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
      apiConfig: orgApis.mdmCarColorQueryListForPage,
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
          compKey: "btnKey2",
          type: "",
          size: "small",
          clickEvent: () => this.add(),
          text: this.$t("sys.button.add") //新增
        },
        {
          compKey: "btnKey4",
          type: "",
          size: "small",
          clickEvent: () => this.reset(),
          text: this.$t("sys.button.reset") //重置
        }
      ],
      // 动态组件-查询条件
      tableComponents:
        CacheConfig.cacheData[this.$route.path] &&
        CacheConfig.cacheData[this.$route.path].tableComponents.length > 0
          ? CacheConfig.cacheData[this.$route.path].tableComponents
          : [
              // 显示组件
              {
                compKey: "compKey1",
                labelName: this.$t("org.label.carBrand"), //品牌
                codeField: "carBrandCode",
                component: () => import("@/components/org/carBrand/carBrand"),
                type: "dropdownList",
                isMust: true,
                isMul: false
              },
              {
                compKey: "compKey2",
                labelName: this.$t("org.label.carColorCode"), //"车身颜色编码",
                codeField: "carColorCode", //车身颜色编码
                component: () => import("@/components/org/commonInput"),
                type: "inputText",
                isMust: true
              },
              {
                compKey: "compKey3",
                labelName: this.$t("org.label.carColorName"), //车身颜色名称
                codeField: "carColorName",
                component: () => import("@/components/org/commonInput"),
                type: "inputText",
                isMust: true
              },
              {
                compKey: "compKey4",
                labelName: this.$t("org.label.supplyStatus"), //供应状态,
                lookuptype: "VE0014",
                codeField: "supplyStatus",
                component: () => import("@/components/org/LookupValue"),
                type: "dropdownList",
                isMust: true,
                isMul: false
              },
              {
                compKey: "compKey5",
                labelName: this.$t("org.label.isEnable"), //是否启用,
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
                label: this.$t("org.label.operation"), //"操作",
                codeField: "controlBtn",
                width: 120,
                align: "center",
                isComponent: true,
                comps: [
                  {
                    compKey: "propKey0",
                    labelName: this.$t("org.label.edit"), //"编辑",
                    codeField: "editControlBtn",
                    clickEvent: this.edit,
                    component: () => import("@/components/org/linkButton")
                  }
                ]
              },
              {
                prop: "carColorId",
                label: this.$t("org.label.carColorId"), //"车身颜色Id",
                width: null,
                align: "center",
                hidden: true
              },
              {
                prop: "carBrandCode",
                label: this.$t("org.label.carBrandCode"), //"品牌编码",
                width: null,
                align: "center",
                hidden: true
              },
              {
                prop: "mdmCarBrandExtend.carBrandCn",
                label: this.$t("org.label.carBrandCn"), //"品牌",
                width: null,
                align: "center"
              },
              {
                prop: "carColorCode",
                label: this.$t("org.label.carColorCode"), //"车身颜色编码",
                width: null,
                align: "center"
              },
              {
                prop: "carColorName",
                label: this.$t("org.label.carColorName"), //"车身颜色名称",
                width: null,
                align: "center"
              },
              {
                prop: "supplyStatus",
                label: this.$t("org.label.supplyStatus"), //"供应状态编码",
                width: null,
                align: "center",
                hidden: true
              },
              {
                prop: "supplyStatusCn",
                label: this.$t("org.label.supplyStatus"), //"供应状态",
                width: null,
                align: "center"
              },
              {
                prop: "isEnable",
                label: this.$t("org.label.EnableSituation") /**是否启用*/,
                width: null,
                align: "center"
              },
              {
                prop: "updateControlId",
                label: this.$t("org.label.updateControlId"), //"并发控制",
                width: null,
                align: "center",
                hidden: true
              }
            ],
      formField: {
        carColorId: "",
        carBrandCode: "",
        carColorCode: "",
        carColorName: "",
        supplyStatus: "",
        isEnable: ""
        // updateControlId: ""
      }
    };
  },

  methods: {}
};
</script>
