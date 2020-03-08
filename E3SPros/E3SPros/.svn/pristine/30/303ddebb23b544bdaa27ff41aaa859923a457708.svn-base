<!--
* description: 省份管理
* author: linzewen
* createdDate: 2019-08-07
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
import { oneTableWithViewTemplateMixins } from '@/components/mixins/oneTableWithViewTemplateMixins';
import { orgApis } from "@/api/graphQLApiList/org";
import OneTableTemplate from "@/components/templates/oneTable";
import Edit from "./edit";
import { CacheConfig } from "@/cache/configCache/index";

export default {
  name: "marketShare",
  // 组件混入对象
  mixins: [oneTableWithViewTemplateMixins],
  components: {
    OneTableTemplate,
    Edit
  },
  data() {
    return {
      // 网格查询API配置对象
      apiConfig: orgApis.mdmOrgProvinceQueryFindAll,
      // 动态组件-按钮
      tableButtons: [
        {
          compKey: "btnKey1",
          type: "primary",
          size: "small",
          clickEvent: () => this.queryTable(1),
          text: this.$t("sys.button.query") /*查询*/
        },
        {
          compKey: "btnKey2",
          type: "",
          size: "small",
          clickEvent: () => this.add(),
          text: this.$t("sys.button.add") /*添加*/
        },
        {
          compKey: "btnKey4",
          type: "",
          size: "small",
          clickEvent: () => this.reset(),
          text: this.$t("sys.button.reset") /*重置*/
        }
      ],
      // 动态组件-查询条件
      tableComponents:
        CacheConfig.cacheData[this.$route.path] &&
        CacheConfig.cacheData[this.$route.path].tableComponents &&
        CacheConfig.cacheData[this.$route.path].tableComponents.length > 0
          ? CacheConfig.cacheData[this.$route.path].tableComponents
          : [
              {
                compKey: "compKey1",
                labelName: this.$t("org.label.departments") /*所属部门*/,
                codeField: "departments",
                component: () => import("@/components/org/commonInput"),
                type: "inputText",
                isMust: true
              },
              {
                compKey: "compKey2",
                labelName: this.$t("org.label.empName") /*辖区*/,
                codeField: "empName",
                component: () => import("@/components/org/commonInput"),
                type: "inputText",
                isMust: true
              },
              {
                compKey: "compKey4",
                labelName: this.$t("org.label.cityName") /*城市*/,
                codeField: "cityQuery",
                lookuptype:'VE0261',
                component: () => import("@/components/org/LookupValue"),
                type: "dropdownList",
                isMust: true,
                isMul:false,
              },
              {
                compKey: "compKey3",
                labelName: this.$t("org.label.isEnable") /*是否启用*/,
                codeField: "isEnable",
                component: () => import("@/components/org/isEnable/isEnable"),
                type: "dropdownList",
                isMust: true
              }
            ],
      // 动态生成网格列
      tableCols: this.getCols(),
      //表单查询数据
      formField: {
        empName: "",
        departments: "",
        auditAuthority:'',
        isEnable: ""
      }
    };
  },
  methods: {
    getCols() {
      var cols = [
        {
          prop: "controlBtn",
          label: this.$t("sys.content.operate") /*操作*/,
          codeField: "controlBtn",
          width: 120,
          align: "center",
          isComponent: true,
          comps: [
            {
              compKey: "propKey0",
              labelName: this.$t("sys.button.edit") /*编辑*/,
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
            prop: "empName",
            label: this.$t("org.label.empName") /*员工姓名*/,
            width: null,
            align: "center"
          },
          {
            prop: "departments",
            label: this.$t("org.label.departments") /*所属部门*/,
            width: null,
            align: "center"
          },
          {
            prop: "customerName",
            label: this.$t("org.label.customerName") /*客户名称*/,
            width: null,
            align: "center"
          },
          {
            prop: "isEnable",
            label: this.$t("org.label.isEnable") /*启用状态*/,
            width: null,
            align: "center"
          }
        ]);
      }
      return cols;
    }
  }
};
</script>
