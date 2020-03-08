<!--
* description: 车辆产品资料 - 竞品车型维护
* author: xulfan
* createdDate: 2019-09-18
* logs:
*   2019-09-18 完成页面开发和国际化配置 xulfan
*   2019-09-24 修改API和字段以及相应国际化内容 xulfan
*   2019-09-25 修改竞争品牌，竞争车系，竞争车型组件并完成联动 xulfan
-->
<!--
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
import LangSelect from "@/components/LangSelect";
export default {
  name: "competingCarTypeMaintain",
  // 组件混入对象
  mixins: [oneTableWithViewTemplateMixins],
  components: {
    OneTableTemplate,
    Edit,
    LangSelect
  },
  // 阻塞路由预加载网格中组件的数据
  beforeRouteEnter(to, from, next) {
    CacheConfig.initData(to.path, function() {
      next();
    });
  },
  data() {
    return {
      // 网格查询API配置对象mdmSmallCarTypeQueryListForPage
      apiConfig: orgApis.mdmCompCarTypeQueryFindAll,
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
          text: this.$t("sys.button.add") //添加
        },
        {
          compKey: "btnKey3",
          type: "",
          size: "small",
          clickEvent: () => this.reset(),
          text: this.$t("sys.button.reset") //重置
        },
        {
          compKey: "btnKey4",
          type: "",
          size: "small",
          clickEvent: () => this.exportExcel(),
          text: this.$t("sys.button.export") //导出
        }
      ],
      tableComponents:
        CacheConfig.cacheData[this.$route.path] &&
        CacheConfig.cacheData[this.$route.path].tableComponents.length > 0
          ? CacheConfig.cacheData[this.$route.path].tableComponents
          : [
              // 动态组件-查询条件
              {
                compKey: "compKey2",
                labelName: this.$t("org.label.compCarBrand"), //竞争品牌名称
                codeField: "compBrandCode",
                component: () => import("@/components/org/compCarBrand/compCarBrand"),
                type: "dropdownList",
                isMust: true,
              },
              {
                compKey: "compKey3",
                labelName: this.$t("org.label.compCarSeriesCode"), //竞争车系编码
                codeField: "compCarseriesCode",
                parentFileds: 'value:compBrandCode',
                component: () => import("@/components/org/compCarCode"),
                type: "inputText",
                isMust: true
              },
              {
                compKey: "compKey4",
                labelName: this.$t("org.label.compCarTypeID"), //竞争车型ID
                codeField: "compCartypeID",
                component: () => import("@/components/org/compCarTypeConfig"),
                type: "inputText",
                isMust: true
              },
              {
                compKey: "compKey7",
                labelName: this.$t("org.label.isEnable"), //是否可用状态编码
                codeField: "isEnable",
                component: () => import("@/components/org/isEnable/isEnable"),
                type: "inputText",
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
                label: this.$t("sys.content.operate"),
                codeField: "controlBtn",
                width: 120,
                align: "center",
                isComponent: true,
                comps: [
                  {
                    compKey: "propKey0",
                    labelName: this.$t("sys.button.edit"),
                    codeField: "editControlBtn",
                    clickEvent: this.edit,
                    component: () => import("@/components/org/linkButton")
                  }
                ]
              },
              {
                prop: "carBrandCn",
                label: this.$t("org.label.carBrandCode"), //品牌编码
                width: 100,
                align: "center",
                hidden: true
              },
              {
                prop: "compBrandCode",
                label: this.$t("org.label.compBrandCode"), //竞争品牌编码
                width: 120,
                align: "center",
                hidden: true
              },
              {
                prop: "compBrandCn",
                label: this.$t("org.label.compCarBrand"), //竞争品牌中文名称
                width: null,
                align: "center"
              },
              {
                prop: "compBrandEn",
                label: this.$t("org.label.compBrandEn"), //竞争品牌英文名称
                width: 150,
                align: "center",
                hidden: true
              },
              {
                prop: "compCarseriesID",
                label: this.$t("org.label.compCarSeriesID"), //竞争车系ID
                width: null,
                align: "center",
                hidden: true
              },
              {
                prop: "compCarseriesCode",
                label: this.$t("org.label.compCarSeriesCode"), //竞争车系编码
                width: null,
                align: "center",
                // hidden: true
              },
              {
                prop: "compCarseriesEn",
                label: this.$t("org.label.compCarseriesEn"), //竞争车系英文
                width: null,
                align: "center",
                // hidden: true
              },
              {
                prop: "compCartypeCode",
                label: this.$t("org.label.compCartypeCode"), //竞争车型编码
                width: null,
                align: "center",
                // hidden: true
              },
              {
                prop: "compCartypeCn",
                label: this.$t("org.label.compCartypeCn"), //竞争车型名称
                width: 130,
                align: "center",
                hidden: true
              },
              {
                prop: "compCartypeSID",
                label: this.$t("org.label.compCarTypeSID"), // 竞争车型序号
                width: 130,
                align: "center",
                hidden: true
              },
              {
                prop: "creator",
                label: this.$t("org.label.creator"), //创建人
                width: 100,
                align: "center",
                hidden: true
              },
              {
                prop: "createdDate",
                label: this.$t("org.label.createdDate"), //创建时间
                width: 100,
                align: "center",
                hidden: true
              },
              {
                prop: "modifyName",
                label: this.$t("org.label.editPerson"), //修改人
                width: 100,
                align: "center",
                hidden: true
              },
              {
                prop: "lastUpdatedDate",
                label: this.$t("org.label.lastUpTime"), //最后更新时间
                width: 120,
                align: "center",
                hidden: true
              },
              {
                prop: "isEnable",
                label: this.$t("org.label.isEnableCode"),//是否可用状态编码
                width: 150,
                align: "center",
                hidden: true
              },
              {
                prop: "isEnableName",
                label: this.$t("org.label.isEnable"),//是否可用状态
                width: null,
                align: "center"
              },
              {
                prop: "updateControlId",
                label: "并发控制字段",
                width: null,
                align: "center",
                hidden: true
              }
            ],
      //表单查询数据
      formField: {
        compBrandCode: "",
        compCarseriesCode: "",
        compCartypeID: "",
      }
    };
  }
};
</script>
-->