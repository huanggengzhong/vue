/**
* description: 目标量确认函查询
* author: xulfan
* createdDate: 2019-10-11
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
      :dynamicIsShowMoreBtn="true"
    />
  </div>
</template>
<script>
import { oneTableWithViewTemplateMixins } from "@/components/mixins";
import { veApis } from "@/api/graphQLApiList/ve";
import OneTableTemplate from "@/components/templates/oneTable";
import { CacheConfig } from "@/cache/configCache/index";
export default {
  name: "targetQuantityConfirmQuery",
  // 组件混入对象：{data[listQuery] methods[queryTable]}
  mixins: [oneTableWithViewTemplateMixins],
  components: {
    OneTableTemplate
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
      apiConfig: veApis.targetQuantityConfirmationLetterQuery,
      // 动态组件-按钮
      tableButtons: [
        {
          compKey: "btnKey2",
          type: "primary",
          size: "small",
          clickEvent: () => this.queryTable(1),
          text: this.$t("sys.button.query") //查询
        },
        {
          compKey: "btnKey1",
          size: "small",
          clickEvent: () => this.download(),
          text: "下载" //下载
        },
        {
          compKey: "btnKey3",
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
                isMust: true
              },
              {
                compKey: "compKey2",
                labelName: this.$t("org.label.dlrName") /*经销商*/,
                codeField: "dlrId",
                component: () => import("@/components/org/orgDlr"),
                type: "propus",
                isMust: true
              },
              {
                compKey: "compKey3",
                labelName: this.$t("org.label.targetType") /*目标量类型*/,
                codeField: "targetTypeId",
                component: () => import("@/components/ve/targetType"),
                type: "dropdownList",
                isMust: true
              },
              {
                compKey: "compKey4",
                labelName: this.$t("ve.label.targetQuantDist") /*目标量区分*/,
                codeField: "targetQuantDist",
                component: () =>
                  import("@/components/ve/targetQuantityDistinction"),
                type: "dropdownList",
                isMust: true
              },
              {
                compKey: "compKey5",
                labelName: this.$t("ve.label.targetQuaYear"), //目标量年份
                codeField: "targetQuaYear",
                component: () => import("@/components/ve/targetQuantityYear"),
                type: "dropdownList",
                isMust: false
              },
              {
                compKey: "compKey6",
                labelName: this.$t("ve.label.targetQuaMon"), //目标量月份
                codeField: "targetQuaMon",
                component: () => import("@/components/ve/targetQuantityMonth"),
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
                prop: "carBrandCode",
                label: this.$t("org.label.carBrandCode"), //"品牌编码",
                width: null,
                align: "center",
                hidden: true
              },
              {
                prop: "carBrandCn",
                label: this.$t("org.label.carBrandCn"), //"品牌",
                width: null,
                align: "center"
              },
              {
                prop: "dlrId",
                label: "经销商ID", //"经销商ID",
                width: null,
                align: "center",
                hidden: true
              },
              {
                prop: "dlrCode",
                label: "经销商编码", //"经销商编码",
                width: null,
                align: "center",
                hidden: true
              },
              {
                prop: "dlrShortName",
                label: this.$t("org.label.dlrName"), //"经销商",
                width: null,
                align: "center"
              },
              {
                prop: "targetTypeId",
                label: "目标量类型ID", //"目标量类型ID",
                width: null,
                align: "center",
                hidden: true
              },
              {
                prop: "targetTypeName",
                label: this.$t("ve.label.targetQuantDist"), //"目标量类型",
                width: null,
                align: "center"
              },
              {
                prop: "month",
                label: this.$t("org.label.month"), //"月份",
                width: null,
                align: "center"
              },
              {
                prop: "confirmName",
                label: this.$t("org.label.confirmation"), //"确认函",
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
        carBrandCode: "",
        dlrId: "",
        targetTypeId: "",
        targetQuantDist: "",
        targetQuaYear: "",
        targetQuaMon: ""
      }
    };
  },

  methods: {}
};
</script>