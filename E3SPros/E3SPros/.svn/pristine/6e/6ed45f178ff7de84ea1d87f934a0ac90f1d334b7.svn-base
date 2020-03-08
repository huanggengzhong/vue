<!--
* description: 试乘试驾评价项管理
* author: zouzx
* createdDate: 2019-10-8
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
      :dynamicIsInitTable="false"
      :dynamicIsColumnDrop="false"
      />

      <Edit
      :dynamicEditRowData="editRowData"
      :popupsVisible="editPopupsVisible"
      :key="editPopupsKey"
      :popupsState="editPopupsState"
      @close="close"/>
  </div>
</template>
<script>
import { crmApis } from "@/api/graphQLApiList/crm";
import { oneTableWithViewTemplateMixins } from '@/components/mixins/oneTableWithViewTemplateMixins';
import OneTableTemplate from "@/components/crm/Template/crmonePage";
import Edit from './edit'
import { CacheConfig } from '@/cache/configCache/index'

export default {
  name:"crmTestDrivingItem",
  // 组件混入对象
  mixins: [oneTableWithViewTemplateMixins],
  components: {
    OneTableTemplate,
    Edit
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
      // 网格查询API配置对象
      apiConfig: crmApis.csDbNodeGroupQueryFindAll,
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
        {
          compKey: "btnKey3",
          type: "",
          size: "small",
          clickEvent: () => this.reset(),
          text: "重置"
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
                labelName: "评价类型",
                codeField: "serverType",
                lookuptype: "LX009",
                component: () => import("@/components/crm/lookupValue/lookupvalue"),
                type: "dropdownList",
                isMust: true,
                isMul:false,
              },
              {
                compKey: "compKey2",
                labelName: "适用场景",
                codeField: "",
                lookuptype: "LX009",
                component: () => import("@/components/crm/lookupValue/lookupvalue"),
                type: "dropdownList",
                isMust: true,
                isMul:false,
              },
              {
                compKey: "compKey3",
                labelName: "评价项",
                codeField: "",
                lookuptype: "VE0059",
                component: () => import("@/components/crm/lookupValue/lookupvalue"),
                type: "dropdownList",
                isMust: true,
                isMul:false,
              },
              {
                compKey: "compKey4",
                labelName: "是否启用",
                codeField: "isEnable",
                component: () => import("@/components/crm/Select/crmIsEnable"),
                type: "dropdownList",
                isMust: true,
                isMul: false,
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
                width: 123,
                align: "center",
                codeField: 'controlBtn',
                isComponent: true,
                comps: [
                  {
                    compKey: "propKey1",
                    labelName: '编辑',
                    codeField: 'editControlBtn',
                    align: "center",
                    isShowLabel:true,
                    isShow:true,
                    clickEvent: this.edit,
                    component: () => import("@/components/org/linkButton")
                  }
                ]
              },
              {
                prop: "",
                label: "评价类型",
                width: null,
                align: "center"
              },
              {
                prop: "",
                label: "适用场景",
                width: null,
                align: "center"
              },
              {
                prop: "",
                label: "评价项",
                width: null,
                align: "center"
              },
              {
                prop: "isEnableName",
                label: "是否启用",
                width: null,
                align: "center"
              },
              {
                prop: "createdName",
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
                prop: "modifyName",
                label: "修改人",
                width: null,
                align: "center",
              },
              {
                prop: "lastUpdatedDate",
                label: "修改时间",
                width: null,
                align: "center",
              },
              {
                prop: "nodeGroupId",
                label: "主键",
                width: null,
                align: "center",
                hidden: true
              },
              {
                prop: "updateControlId",
                label: "并发控制",
                width: null,
                align: "center",
                hidden: true
              },
              {
                prop: "serverTypeCode",
                label: "业务流程编码",
                width: null,
                align: "center",
                hidden: true
              },
              {
                prop: "groupType",
                label: "节点组编码",
                width: null,
                align: "center",
                hidden: true
              },
              {
                prop: "isEnable",
                label: "是否启用编码",
                width: null,
                align: "center",
                hidden: true
              },
              {
                prop: "oemCode",
                label: "厂商编码",
                width: null,
                align: "center",
                hidden: true
              },
              {
                prop: "groupCode",
                label: "集团编码",
                width: null,
                align: "center",
                hidden: true
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
