<!--
* description: 竞品品牌维护
* zhhx
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
      :dynamicIsShowMoreBtn="false"
      :dynamicIsShowSelect="false"
    />
    <!-- :dynamicIsShowSelect="false" -->

    <edit
      :dynamicEditRowData="editRowData"
      :popupsVisible="editPopupsVisible"
      :key="editPopupsKey"
      :popupsState="editPopupsState"
      :isSetDefaultBrand="false"
      @close="close"
    ></edit>
  </div>
</template>
<script>
import { oneTableWithViewTemplateMixins } from '@/components/mixins/oneTableWithViewTemplateMixins';
import { orgApis } from "@/api/graphQLApiList/org";
import OneTableTemplate from "@/components/templates/oneTable";
import Edit from "./edit";
import { CacheConfig } from '@/cache/configCache/index'
export default {
  name: "veComCarBrandManage",
  // 组件混入对象
  mixins: [oneTableWithViewTemplateMixins],
  components: {
    OneTableTemplate,
    Edit
  },
  // 阻塞路由预加载网格中组件的数据
beforeRouteEnter(to, from, next) {CacheConfig.initData(to.path, function(){next()})},
  data() {
    return {
      // 网格查询API配置对象
      apiConfig: veApis.mdmCompBrandQueryFindAll,
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
        },
        {
          compKey: "btnKey4",
          type: "",
          size: "small",
          clickEvent: () => this.exportExcel(),
          text: "导出"
        }
      ],
      // 动态组件-查询条件
      tableComponents: CacheConfig.cacheData[this.$route.path] && CacheConfig.cacheData[this.$route.path].tableComponents.length > 0 ? CacheConfig.cacheData[this.$route.path].tableComponents : [

         {
          compKey: "compKey1",
          labelName: "竞争品牌编码",
          codeField: "compBrandCode",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        },
        {
          compKey: "compKey2",
          labelName: "竞争品牌名称",
          codeField: "compBrandCn",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        },
        {
          compKey: "compKey3",
          labelName: "是否启用",
          codeField: "isEnable",
          component: () => import("@/components/org/isEnable/isEnable"),
          type: "dropdownList",
          isMust: true
        }
      ],
      // 动态生成网格列
      tableCols: CacheConfig.cacheData[this.$route.path]&& CacheConfig.cacheData[this.$route.path].tableCols.length > 0 ? CacheConfig.cacheData[this.$route.path].tableCols: [

        {
          prop: "controlBtn",
          label: "操作",
          codeField: "controlBtn",
          width: 120,
          align: "center",
          isComponent: true,
          comps: [
            {
              compKey: "propKey1",
              labelName: "修改",
              codeField: "editControlBtn",
              clickEvent: this.edit,
              component: () => import("@/components/org/linkButton")
            }
          ]
        },
        { prop: 'compBrandCn', label: '竞争品牌', width: null, align: 'center' },
        { prop: 'compBrandCode', label: '竞争品牌编码', width: null, align: 'center' },
        { prop: 'compBrandEn', label: '竞争品牌英文名称', width: null, align: 'center' },
        { prop: 'isEnableName', label: '是否启用', width: null, align: 'center' },
         { prop: 'isEnable', label: '是否启用id', width: null, align: 'center', hidden: true },
        { prop: "updateControlId", label: "并发字段", width: null, align: "center",hidden:true}
      ],
      //表单查询数据
      formField: {
        compBrandCode: "",
        compBrandCn: "",
        isEnable: "",
        updateControlId: ''
      },
      // 是否使用刷新Key的方式刷新弹窗
      resetDialogKey: false
    };
  }
};
</script>
