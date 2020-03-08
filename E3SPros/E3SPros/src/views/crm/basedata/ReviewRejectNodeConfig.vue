<!--
* description: 审核驳回结点配置
* author: zxuan
* createdDate: 2019-09-11
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
import { crmApis } from "@/api/graphQLApiList/crm";
import OneTableTemplate from "@/components/crm/Template/crmonePage";
//import Edit from "./edit";
import Edit from "@/views/crm/basedata/crmRRNCedit"
import { CacheConfig } from "@/cache/configCache/index";

export default {
  name: "ReviewRejectNodeConfig",
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
      searchField:'请输入搜索内容',
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
        // }
      ],
      // 动态组件-查询条件
      tableComponents:
        CacheConfig.cacheData[this.$route.path] &&
        CacheConfig.cacheData[this.$route.path].tableComponents.length > 0
          ? CacheConfig.cacheData[this.$route.path].tableComponents
          : [
              {
                compKey: "compKey1",
                labelName: "业务流程",
                lookuptype: "LX009",
                codeField: "buniessProcess",
                component: () =>
                  import("@/components/crm/lookupValue/lookupvalue"),
                type: "dropdownList",
                isMust: false
              },
              {
                compKey: "compKey2",
                labelName: "服务类别",
                codeField: "serviceType",
                component: () =>
                  import("@/components/crm/crmEjectWindows/crmServiceType/index"),
                type: "propus",
                isMust: false
              },
              {
                compKey: "compKey4",
                labelName: "流程结点",
                codeField: "processNode",
                component: () => import("@/components/crm/Select/crmProcessNode"),
                type: "dropdownList",
                isMust: false
              },
              // {
              //   compKey: "compKey6",
              //   labelName: "车型",
              //   codeField: "carConfigId",
              //   component: () => import("@/components/org/carTypeConfig"),
              //   type: "propus",
              //   isMust: false
              // },
              {
                compKey: "compKey3",
                labelName: "责任人",
                codeField: "dutyperson",
                component: () =>
                  import("@/components/crm/textbox/crmTextInput"),
                type: "inputText",
                isMust: false
              },
              {
                compKey: "compKey4",
                labelName: "是否启用",
                codeField: "isEnable",
                clearable: false,
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
              { prop: 'controlBtn', label: '操作', codeField: 'controlBtn', width: 120, align: 'center', fixed: true , isComponent: true,
                comps:[
                  {compKey: 'propKey0', labelName: '编辑', compareField: 'isEnable', compareValue: '1', codeField: 'editControlBtn', clickEvent: this.edit, component: () => import('@/components/org/linkButton')},
                  {compKey: 'propKey1', labelName: '删除', compareField: 'isEnable', compareValue: '0', codeField: 'delControlBtn', clickEvent: this.del, component: () => import('@/components/org/linkButton')}
                ]
              },
              {
                prop: "carBrandCn",
                label: "业务流程",
                width: null,
                align: "center"
              },
              {
                prop: "carBrandEn",
                label: "服务类别",
                width: null,
                align: "center"
              },
              {
                prop: "isEnable",
                label: "流程结点",
                width: null,
                align: "center"
              } /*isComponent: true,
          comps: [{compKey: 'propKey1', isShowLabel: false, codeField: 'isEnable', clickEvent: () => null, component: () => import('@/components/org/isEnable/isEnable')}]
        },*/,
              {
                prop: "updateControlId",
                label: "是否审核",
                width: null,
                align: "center"
              },
              {
                prop: "updateControlId",
                label: "是否驳回",
                width: null,
                align: "center"
              },
              {
                prop: "uid",
                label: "责任人",
                width: null,
                align: "center"
              },
              {
                prop: "updateControlId",
                label: "是否启用",
                width: null,
                align: "center"
              }
            ],
      // 表单查询参数
      formField: {
        buniessProcess: "",
        serviceType: "",
        processNode:"",
        dutyperson:"",
        isEnable: ""
      }
    };
  }
};
</script>
