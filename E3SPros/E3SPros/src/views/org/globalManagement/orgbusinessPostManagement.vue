/**
* description: 组织架构>全局权限管理>业务岗位管理
* author: liyanm
* createdDate: 2019-07-25
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
  name: "orgbusinessPostManagement",
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
      apiConfig: orgApis.mdmOrgStationQueryFindAll,
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
          clickEvent: () => this.edit(),
          text: "修改"
        },
        {
          compKey: "btnKey4",
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
                labelName: "业务岗位编码",
                codeField: "stationCode",
                span: 8,
                component: () => import("@/components/org/commonInput"),
                type: "inputText",
                isMust: true
              },
              {
                compKey: "compKey2",
                labelName: "业务岗位名称",
                codeField: "stationName",
                span: 8,
                component: () => import("@/components/org/commonInput"),
                type: "inputText",
                isMust: true
              },
              {
                compKey: "compKey4",
                labelName: "是否启用",
                codeField: "isEnable",
                component: () => import("@/components/org/isEnable/isEnable"),
                type: "dropdownList",
                isMust: true
              }
            ],
      // 动态生成网格列
      tableCols:
        CacheConfig.cacheData[this.$route.path] &&
        CacheConfig.cacheData[this.$route.path].tableCols.length > 0
          ? CacheConfig.cacheData[this.$route.path].tableCols
          : [
              {
                prop: "stationCode",
                label: "业务岗位编码",
                width: null,
                align: "center"
              },
              {
                prop: "stationName",
                label: "业务岗位名称",
                width: null,
                align: "center"
              },
              {
                prop: "deptName",
                label: "所属组织",
                width: null,
                align: "center"
              },
              {
                prop: "stationId",
                label: "岗位ID",
                width: 350,
                hidden: true,
                align: "center"
              },
              {
                prop: "isEnable",
                label: "是否启用",
                width: null,
                align: "center"
              },
              {
                prop: "deptId",
                label: "部门ID",
                width: null,
                align: "center",
                hidden: true
              },

              {
                prop: "updateControlId",
                label: "并发ID",
                width: null,
                align: "center",
                hidden: true
              }
            ],
      //表单查询数据
      formField: {
        stationName: "",
        stationCode: "",
        isEnable:''
      }
    };
  },
  methods: {
    // edit1() {
    //   const that = this.$refs.multipleTable;
    //   var currentRow = that.currentRow;
    //   this.edit();
    //   this.$children[1].orgName = currentRow.deptName;
    // }
  }
};
</script>
