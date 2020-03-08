/*
 * @Author: xgz
 * @Date: 2019年9月26日09:46:48
 * @Last Modified by: //此处填修改人名字
 * @Last Modified time: 2019年9月26日09:46:48
 */

<template>
  <div class="app-container app-container-table">
    <!-- 单网格查询  -->
    <one-table-template :dynamicSearchField="searchField" ref="multipleTable" :dynamicButtons="tableButtons" :dynamicComponents="tableComponents" :dynamicIsShowSelect="false" :dynamicApiConfig="apiConfig" :dynamicTableCols="tableCols" :dynamicFormFields="formField" />
  </div>

</template>
<script>
import { crmApis } from "@/api/graphQLApiList/crm";
import { requestGraphQL } from "@/api/commonRequest";
import OneTableTemplate from "@/components/crm/Template/crmonePage";
import { oneTableWithViewTemplateMixins } from "@/components/mixins/oneTableWithViewTemplateMixins";
// import Edit from "./edit";
//  import Maintain from "./maintain";
import { CacheConfig } from "@/cache/configCache/index";

export default {
  name: "Intentypepermissionset",
  mixins: [oneTableWithViewTemplateMixins],
  components: {
    OneTableTemplate
    //   Edit,
    //  Maintain
  },
  data() {
    return {
      searchField: "哈喽最近好吗周杰伦",
      // 网格查询API配置对象
      apiConfig: crmApis.csBuComplaintOrderQueryFindAll, //假的API
      // 动态组件-按钮
      tableButtons: [
        // {
        //   compKey: "btnKey1",
        //   type: "primary",
        //   size: "small",
        //   clickEvent: () => this.queryTable(1),
        //   text: this.$t("sys.button.query")
        // },
        {
          compKey: "btnKey2",
          type: "",
          size: "small",
          clickEvent: () => this.add(),
          text: this.$t("sys.button.add")
        },
        // {
        //   compKey: "btnKey3",
        //   type: "",
        //   size: "small",
        //   clickEvent: () => this.reset(),
        //   text: this.$t("sys.button.reset")
        // }
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
                labelName: "角色" /*this.$t("org.label.dlrName") /*经销商*/,
                codeField: "crmRoles",
                component: () =>
                  import("@/components/crm/crmEjectWindows/crmRoles"),
                type: "propus",
                isMust: false
              },
              {
                compKey: "compKey2",
                labelName: "是否启用" /*是否启用*/,
                codeField: "isEnable",
                component: () => import("@/components/org/isEnable/isEnable"),
                type: "dropdownList" /**下拉框 */,
                isMust: false /**使用false,可以隐藏，点更多则打开 */
              }
            ],

      // 动态生成网格列
      tableCols: [
        {
          prop: "controlBtn",
          label: "操作",
          codeField: "controlBtn",
          width: 120,
          align: "center",
          isComponent: true,
          comps: [
            {
              compKey: "propKey0",
              labelName: "修改",
              codeField: "editControlBtn",
              clickEvent: () => this.add(),
              component: () => import("@/components/org/linkButton"),
              isMust: true
            },
            {
              compKey: "propKey1",
              labelName: "删除",
              codeField: "editControlBtn",
              clickEvent: () => this.resend(),
              component: () => import("@/components/org/linkButton")
            }
          ]
        },
        {
          prop: "custName",
          label: "角色名称",
          width: null,
          align: "center"
        },
        {
          prop: "empName",
          label: "整车销售",
          width: null,
          align: "center"
        },
        {
          prop: "dutyDlrName",
          label: "二手车买取",
          width: null,
          align: "center"
        },
        {
          prop: "statusName",
          label: "二手车销售",
          width: null,
          align: "center"
        },
        {
          prop: "serverFullClassName",
          label: "是否启用",
          width: null,
          align: "center"
        },
        {
          prop: "serverLevelName",
          label: "创建人",
          width: null,
          align: "center"
        },
        {
          prop: "createdDate",
          label: "创建时间",
          width: null,
          align: "center"
        },
        {
          prop: "serverLevelName",
          label: "修改人",
          width: null,
          align: "center"
        },
        {
          prop: "createdDate",
          label: "修改时间",
          width: null,
          align: "center"
        }
      ],
      formField: {
        //crmRoles:"",
        //isEnable:""
        oemCode: "1",
        groupCode: "1",
        serverOrder: ""
      }
    };
  },
  methods: {}
};
</script>

