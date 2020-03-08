/**
* description: 整车 > 车辆产品资料> 车辆产品价格维护
* author: liyanm
* createdDate: 2019-07-26
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
      :dynamicIsShowSelect="true"
      :dynamicIsInitTable="true"
      :dynamicIsColumnDrop="true"
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
import { oneTableWithViewTemplateMixins } from "@/components/mixins/oneTableWithViewTemplateMixins";
import { orgApis } from "@/api/graphQLApiList/org";
import OneTableTemplate from "@/components/templates/oneTable";
import Edit from "./edit";
import { CacheConfig } from "@/cache/configCache/index";
export default {
  name: "vecarProductPriceMaintain",
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
      apiConfig: orgApis.mdmVeCarConfigPriceQueryListForPage,
      // 动态组件-按钮
      tableButtons: [
        {
          compKey: "btnKey1",
          type: "primary",
          size: "small",
          clickEvent: () => this.queryTable(1),
          text: "查询"
        },
        {
          compKey: "btnKey2",
          type: "",
          size: "small",
          clickEvent: () => this.add(),
          text: "新增"
        },
        //修改
        {
          compKey: "btnKey4",
          type: "",
          size: "small",
          clickEvent: () => this.reset(),
          text: "重置"
        },
        {
          compKey: "btnKey3",
          type: "",
          size: "small",
          clickEvent: () => this.exportExcel(),
          text: "导出"
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
                labelName: "品牌",
                codeField: "carBrandCode",
                component: () => import("@/components/org/carBrand/carBrand"),
                type: "dropdownList",
                isMust: true
              },
              {
                compKey: "compKey2",
                labelName: "车系",
                codeField: "carSeriesId",
                parentFileds: "carBrandCode-carBrandCode",
                component: () => import("@/components/org/CarCode"),
                type: "dropdownList",
                isMust: true
              },
              {
                compKey: "compKey3",
                labelName: "车型配置",
                codeField: "carConfigId",
                parentFileds: "carBrandCode-carBrandCode",
                component: () => import("@/components/org/carTypeConfig"),
                type: "propus",
                isMust: true
              },
              {
                compKey: "compKey4",
                labelName: "价格有效开始日期",
                codeField: "priceValidBeginDate",
                component: () =>
                  import("@/components/org/datePicker/datePicker"),
                type: "datePicker",
                isMust: true
              },
              {
                compKey: "compKey5",
                labelName: "价格有效结束日期",
                codeField: "priceValidEndDate",
                component: () =>
                  import("@/components/org/datePicker/datePicker"),
                type: "datePicker",
                isMust: false
              },
              {
                compKey: "compKey6",
                labelName: this.$t("org.label.isEnable") /*是否启用*/,
                codeField: "isEnable",
                component: () => import("@/components/org/isEnable/isEnable"),
                type: "dropdownList",
                isMust: false
              }
            ],
      // 动态生成网格列
      tableCols: this.getCols(),
      //表单查询数据
      formField: {
        carBrandCode: "",
        carSeriesId: "",
        carConfigId: "",
        priceValidBeginDate: "",
        isEnable: "1",
        priceValidEndDate: ""
      },
      // 是否使用刷新Key的方式刷新弹窗
      resetDialogKey: false
    };
  },
  watch: {
    "formField.priceValidBeginDate"(val) {
      debugger;
      if (val != "" && val.length <= 10) {
        this.formField.priceValidBeginDate = val + " 00:00:00";
      }
    },
    "formField.priceValidEndDate"(val) {
      if (val != "" && val.length <= 10) {
        this.formField.priceValidEndDate = val + " 00:00:00";
      }
    }
  },
  methods: {
    getCols() {
      var cols = [
        {
          prop: "controlBtn",
          label: "操作",
          codeField: "controlBtn",
          width: 80,
          align: "center",
          fixed: true,
          isComponent: true,
          comps: [
            {
              compKey: "propKey0",
              labelName: "编辑",
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
          { prop: "carBrandCn", label: "品牌", width: 120, align: "center" },
          {
            prop: "carBrandCode",
            label: "品牌",
            width: null,
            align: "center",
            hidden: true
          },
          {
            prop: "mdmVeCarConfigExtend.mdmVeCarSeriesExtend.carSeriesCode",
            label: "车系编码",
            width: null,
            align: "center"
          },
          {
            prop: "mdmVeCarConfigExtend.mdmVeCarSeriesExtend.carSeriesId",
            label: "车系Id",
            width: null,
            align: "center",
            hidden: true
          },
          {
            prop: "mdmVeCarConfigExtend.mdmVeCarSeriesExtend.carSeriesCn",
            label: "车系名称",
            width: null,
            align: "center"
          },

          {
            prop: "mdmVeCarConfigExtend.carConfigId",
            label: "车型配置Id",
            width: 180,
            align: "center",
            hidden: true
          },
          {
            prop: "mdmVeCarConfigExtend.carConfigCode",
            label: "车型配置编码",
            width: 180,
            align: "center"
          },
          {
            prop: "mdmVeCarConfigExtend.carConfigCn",
            label: "车型配置名称",
            width: 150,
            align: "center"
          },

          {
            prop: "carSalePrice",
            label: "市场指导价",
            width: 120,
            align: "center"
          },
          {
            prop: "dlrPurPrice",
            label: "经销商采购价",
            width: 120,
            align: "center"
          },
          {
            prop: "priceValidBeginDate",
            label: "价格有效开始日期",
            width: 150,
            align: "center"
          },
          {
            prop: "priceValidEndDate",
            label: "价格有效结束日期",
            width: 150,
            align: "center"
          },
          {
            prop: "updateControlId",
            label: "并发控制",
            width: 150,
            hidden: true,
            align: "center"
          },
          {
            prop: "carConfigPriceId",
            label: "主键Id",
            width: 150,
            hidden: true,
            align: "center"
          },
          {
            prop: "mdmVeCarConfigExtend.mdmSmallCarTypeExtend.smallCarTypeCode",
            label: "车型编码",
            width: 180,
            align: "center"
          },
          {
            prop: "mdmVeCarConfigExtend.mdmSmallCarTypeExtend.smallCarTypeCn",
            label: "车型名称",
            width: 180,
            align: "center"
          },
          {
            prop: "mdmVeCarConfigExtend.supplyStatusCn",
            label: "供应状态",
            width: 150,
            align: "center"
          },
          {
            prop: "isEnable",
            label: "是否启用",
            width: 120,
            align: "center"
            // hidden:true
          },
          {
            prop: "modifyName",
            label: "修改人",
            width: 150,
            align: "center"
            // hidden:true
          },
          {
            prop: "lastUpdatedDate",
            label: "修改日期",
            width: 150,
            align: "center"
            // hidden:true
          }
        ]);
      }
      return cols;
    },
    del() {}
  }
};
</script>
