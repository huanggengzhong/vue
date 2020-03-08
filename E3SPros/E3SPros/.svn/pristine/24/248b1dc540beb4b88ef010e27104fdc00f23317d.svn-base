<!--
* description: 试乘试驾车管理
* author: zxuan
* createdDate: 2019-10-08
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
import { crmApis } from "@/api/graphQLApiList/crm";
import OneTableTemplate from "@/components/crm/Template/crmonePage";
import Edit from "@/views/crm/coc/testDrivingManage/edit";
import { CacheConfig } from "@/cache/configCache/index";

export default {
  name: "testDrivingManage",
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
    var p = new Promise(function(resolve, reject) {
      setTimeout(function() {
        console.log("异步 start");
        resolve("异步 end");
      }, 1000);
    });
    console.log("同步 start");
    return {
      // 网格查询API配置对象
      apiConfig: crmApis,
      searchField: "请输入搜索内容",
      // 动态组件-按钮
      tableButtons: [
        // {
        //   compKey: "btnKey1",
        //   type: "primary",
        //   size: "small",
        //   clickEvent: () => this.queryTable(1),
        //   text: "查询"
        // },
        {
          compKey: "btnKey2",
          type: "",
          size: "small",
          clickEvent: () => this.add(),
          text: "新增"
        },
        // {
        //   compKey: "btnKey4",
        //   type: "",
        //   size: "small",
        //   clickEvent: () => this.reset(),
        //   text: "重置"
        // },
        {
          compKey: "btnKey5",
          type: "",
          size: "small",
          clickEvent: () => this.apply(),
          text: "上牌日期修改申请"
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
                labelName: "网点",
                codeField: "dlr",
                component: () =>
                  import("@/components/crm/crmEjectWindows/crmChangeDlr/index"),
                type: "propus",
                isMust: false
              },
              {
                compKey: "compKey3",
                labelName: "车型名称",
                codeField: "carConfigId",
                component: () =>
                  import("@/components/crm/crmEjectWindows/crmCartype/index"),
                type: "propus",
                isMust: false
              },
              {
                compKey: "compKey2",
                labelName: "VIN码",
                codeField: "vin",
                component: () =>
                  import("@/components/crm/textbox/crmTextInput"),
                type: "inputText",
                isMust: false
              },
              {
                compKey: "compKey4",
                labelName: "状态",
                codeField: "isEnable",
                clearable: false,
                isRequire: false,
                component: () => import("@/components/crm/Select/crmIsEnable"),
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
                label: "操作",
                codeField: "controlBtn",
                width: 120,
                align: "center",
                fixed: true,
                isComponent: true,
                comps: [
                  {
                    compKey: "propKey0",
                    labelName: "修改",
                    compareField: "isEnable",
                    compareValue: "1",
                    codeField: "editControlBtn",
                    clickEvent: this.edit,
                    component: () => import("@/components/org/linkButton")
                  },
                  {
                    compKey: "propKey1",
                    labelName: "删除",
                    compareField: "isEnable",
                    compareValue: "0",
                    codeField: "delControlBtn",
                    clickEvent: this.del,
                    component: () => import("@/components/org/linkButton")
                  }
                ]
              },
              {
                prop: "dlr",
                label: "网点",
                width: null,
                align: "center"
              },
              {
                prop: "carseriseCode",
                label: "车系编码",
                width: null,
                align: "center"
              },
              {
                prop: "carseriseName",
                label: "车系名称",
                width: null,
                align: "center"
              } /*isComponent: true,
          comps: [{compKey: 'propKey1', isShowLabel: false, codeField: 'isEnable', clickEvent: () => null, component: () => import('@/components/org/isEnable/isEnable')}]
        },*/,
              {
                prop: "cartypeCode",
                label: "车型编码",
                width: null,
                align: "center"
              },
              {
                prop: "cartypeName",
                label: "车型名称",
                width: null,
                align: "center"
              },
              {
                prop: "vin",
                label: "VIN码",
                width: null,
                align: "center"
              },
              {
                prop: "carnum",
                label: "车牌号",
                width: null,
                align: "center"
              },
              {
                prop: "driveDistens",
                label: "行驶里程",
                width: null,
                align: "center"
              },
              {
                prop: "dengjiriqi",
                label: "登记日期",
                width: null,
                align: "center"
              },
              {
                prop: "tuiyiriqi",
                label: "退役日期",
                width: null,
                align: "center"
              },
              {
                prop: "remark",
                label: "备注",
                width: null,
                align: "center"
              }
            ],
      // 表单查询参数
      formField: {
        dlr: "",
        vin: "",
        carConfigId: "",
        isEnable: ""
      }
    };
  },
  methods: {
    apply() {}
  }
};
</script>
