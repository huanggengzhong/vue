/**
* description: 内饰色维护
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
  name: "CarIncolor",
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
      apiConfig: orgApis.mdmCarIncolorQueryList,
      // 动态组件-按钮
      tableButtons: [
        {
          compKey: "btnKey1",
          type: "primary",
          size: "small",
          clickEvent: () => this.queryTable(1),
          text: this.$t("sys.button.query") //"查询"
        },
        {
          compKey: "btnKey2",
          type: "",
          size: "small",
          clickEvent: () => this.add(),
          text: this.$t("sys.button.add") //"新增"
        },
        {
          compKey: "btnKey4",
          type: "",
          size: "small",
          clickEvent: () => this.reset(),
          text: this.$t("sys.button.reset") //"重置"
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
                labelName: this.$t("org.label.carBrand"), //"品牌",
                codeField: "carBrandCode",
                component: () => import("@/components/org/carBrand/carBrand"),
                type: "dropdownList",
                isMust: true
              },
              {
                compKey: "compKey2",
                labelName: this.$t("org.label.carIncolorCode"), //"内饰色编码",
                codeField: "carIncolorCode",
                component: () => import("@/components/org/commonInput"),
                type: "inputText",
                isMust: true
              },
              {
                compKey: "compKey3",
                labelName: this.$t("org.label.carIncolorName"), //"内饰色名称",
                codeField: "carIncolorName",
                component: () => import("@/components/org/commonInput"),
                type: "inputText",
                isMust: true
              },
              {
                compKey: "compKey4",
                labelName: this.$t("org.label.supplyStatus"), //"供应状态",
                lookuptype: "VE0014",
                codeField: "supplyStatus",
                component: () => import("@/components/org/LookupValue"),
                type: "dropdownList",
                isMust: true
              },
              {
                compKey: "compKey5",
                labelName: this.$t("org.label.isEnable"), //"是否启用",
                codeField: "isEnable",
                component: () => import("@/components/org/isEnable/isEnable"),
                type: "dropdownList",
                isMust: false
              }
            ],
      // 动态生成网格列
      tableCols: this.getCols(),

      formField: {
        carIncolorId: "",
        carBrandCode: "",
        carIncolorCode: "",
        carIncolorName: "",
        supplyStatus: "",
        isEnable: "",
        updateControlId: ""
      }
    };
  },

  methods: {
    getCols() {
      var cols = [
        {
          prop: "controlBtn",
          label: this.$t("org.label.operation"), //"操作"
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
        }
      ];
      if (
        CacheConfig.cacheData[this.$route.path] &&
        CacheConfig.cacheData[this.$route.path].tableCols.length > 0
      ) {
        cols = cols.concat(CacheConfig.cacheData[this.$route.path].tableCols);
      } else {
        cols = cols.concat([
          {
            prop: "carIncolorId",
            label: this.$t("org.label.carIncolorId"), //"内饰色Id",
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
          // {
          //   prop: "carBrandCn",
          //   label: this.$t("org.label.carBrandCn"), //"品牌",
          //   width: null,
          //   align: "center"
          // },
          {
            prop: "carIncolorCode",
            label: this.$t("org.label.carIncolorCode"), //"内饰色编码",
            width: null,
            align: "center"
          },
          {
            prop: "carIncolorName",
            label: this.$t("org.label.carIncolorName"), //"内饰色名称",
            width: 250,
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
            label: this.$t("org.label.EnableSituation") /**"是否启用 */,
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
        ]);
      }
      return cols;
    }
  }
};
</script>
