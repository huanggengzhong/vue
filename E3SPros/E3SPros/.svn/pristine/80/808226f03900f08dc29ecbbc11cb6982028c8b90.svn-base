<!--
* description: 试乘试驾管理-统计查询
* author: zouzx
* createdDate: 2019-10-9
-->
<template>
  <div class="app-container app-container-table">
    <one-table-template
      ref="multipleTable"
      :dynamicSearchField="searchField"
      :dynamicButtons="tableButtons"
      :dynamicComponents="tableComponents"
      :dynamicApiConfig="apiConfig"
      :dynamicTableCols="tableCols"
      :dynamicFormFields="formField"
      :dynamicIsShowSelect="false"
      :dynamicIsInitTable="false"
      :dynamicIsColumnDrop="false"
      />

  </div>
</template>
<script>
import { crmApis } from "@/api/graphQLApiList/crm";
import { oneTableWithViewTemplateMixins } from '@/components/mixins/oneTableWithViewTemplateMixins';
import OneTableTemplate from "@/components/crm/Template/crmonePage";
import { CacheConfig } from '@/cache/configCache/index'

export default {
  name:"TestDrvStatistics",
  // 组件混入对象
  mixins: [oneTableWithViewTemplateMixins],
  components: {
    OneTableTemplate
  },
  // 阻塞路由预加载网格中组件的数据
  beforeRouteEnter(to, from, next) {CacheConfig.initData(to.path, function(){next()})},
  data() {
    var p = new Promise(function(resolve, reject) {
      setTimeout(function() {
        console.log("异步 start");
        resolve("异步 end");
      }, 1000);
    });
    console.log("同步 start");
    return {
      searchField:"客户名称/电话",
      // 网格查询API配置对象
      apiConfig: crmApis.csDbNodeGroupQueryFindAll,
      // 动态组件-按钮
      tableButtons: [
        // {
        //   compKey: "btnKey1",
        //   type: "primary",
        //   size: "small",
        //   clickEvent: () => this.queryTable(1),
        //   text: "查询"
        // },
        // {
        //   compKey: "btnKey2",
        //   type: "",
        //   size: "small",
        //   clickEvent: () => this.reset(),
        //   text: "重置"
        // },
        {
          compKey: "btnKey1",
          type: "primary",
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
                labelName: "客户名称",
                codeField: "",
                component: () => import("@/components/crm/textbox/crmTextInput"),
                type: "inputText",
                isMust: false
              },
              {
                compKey: "compKey2",
                labelName: "电话",
                codeField: "",
                component: () => import("@/components/crm/textbox/crmTextInput"),
                type: "inputText",
                isMust: false
              },
              {
                compKey: "compKey6",
                labelName: "试乘试驾日期",
                codeField: "",
                component: () => import("@/components/crm/Time/crmdtDatePicker"),
                type: "inputText",
                isMust: false
              },
              {
                compKey: "compKey3",
                labelName: "销售顾问",
                codeField: "userId",
                textField: "empName",
                component: () => import("@/components/crm/crmEjectWindows/crmSalesConsultant/index"),
                type: "propus",
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
                prop: "",
                label: "客户名称",
                width: null,
                align: "center"
              },
              {
                prop: "",
                label: "电话",
                width: null,
                align: "center"
              },
              {
                prop: "",
                label: "销售顾问",
                width: null,
                align: "center"
              },
              {
                prop: "isEnableName",
                label: "次数",
                width: null,
                align: "center"
              },
              {
                prop: "createdName",
                label: "试驾VIN",
                width: null,
                align: "center"
              },
              {
                prop: "createdDate",
                label: "试乘试驾日期",
                width: null,
                align: "center"
              },
              {
                prop: "modifyName",
                label: "试乘试驾类型",
                width: null,
                align: "center",
              },
              {
                prop: "lastUpdatedDate",
                label: "试驾时间",
                width: null,
                align: "center",
              },
              {
                prop: "nodeGroupId",
                label: "试驾里程",
                width: null,
                align: "center"
              }
            ],
      // 表单查询数据
      formField: {
        oemCode:"1",
        groupCode: "1"
      }
    };
  },
  methods: {
  }
};
</script>
