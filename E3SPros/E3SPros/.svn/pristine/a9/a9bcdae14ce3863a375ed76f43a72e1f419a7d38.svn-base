/**
* description: 账户维护
* author: linwm
* createdDate: 2019-07-23
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
      :dynamicIsShowMoreBtn="false"
      :formField="formField"
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
import { veApis } from "@/api/graphQLApiList/ve";
import OneTableTemplate from "@/components/templates/oneTable";
import Edit from "./edit";
import { CacheConfig } from '@/cache/configCache/index'
export default {
  name: "DbDlrAccount",
  // 组件混入对象：{data[listQuery] methods[queryTable]}
  mixins: [oneTableWithViewTemplateMixins],
  components: {
    OneTableTemplate,
    Edit
  },
  beforeRouteEnter(to, from, next) {CacheConfig.initData(to.path, function(){next()})},
  data() {
    return {
      // 网格查询API配置对象
      apiConfig: veApis.veDbDlrAccountQueryFindAll,
      // 动态组件-按钮
      tableButtons: [
        {
          compKey: "btnKey1",
          type: "primary",
          size: "small",
          clickEvent: () => this.queryTable(1),
          text: this.$t('sys.button.query'),//"查询"
          name:'search',
          position:'right',
          fuzzySearch:true
        },
        {
          compKey: "btnKey2",
          type: "",
          size: "small",
          clickEvent: () => this.add(),
          text: this.$t('sys.button.add'),//"新增"
          name:'add',
          position:'left'
        },
        {
          compKey: "btnKey4",
          type: "",
          size: "small",
          clickEvent: () => this.reset(),
          text: this.$t('sys.button.reset'),//"重置"
          name:'reset',
          position:'right'
        }
      ],
      // 动态组件-查询条件
      tableComponents: CacheConfig.cacheData[this.$route.path] && CacheConfig.cacheData[this.$route.path].tableComponents.length > 0 ? CacheConfig.cacheData[this.$route.path].tableComponents : [

        // 显示组件
        {
          compKey: "compKey1",
          labelName: this.$t('org.label.accountName'),//"账户名称",
          codeField: "dlrAccountName",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true,
          fuzzySearch:true
        },
        {
          compKey: "compKey2",
          labelName: this.$t('org.label.ModuleNameAccount'),//模块名称",
          lookuptype: "DB0001",
          codeField: "modelName",
          component: () => import("@/components/org/LookupValue"),
          type: "dropdownList",
          isMust: true
        },
        {
          compKey: "compKey3",
          labelName: this.$t('org.label.isEnable'),//""是否启用",
          codeField: "isEnable",
          component: () => import("@/components/org/isEnable/isEnable"),
          type: "dropdownList",
          isMust: true
        }
      ],
      // 动态生成网格列
      tableCols: this.getCols(),
      formField: {
        // dlrAccountCode:'',
        // dlrAccountId:'',
        dlrAccountName: "",
        modelName: "",
        isEnable: "",
      }
    };
  },

  methods: {
    getCols() {
      var cols = [
        {
          prop: "controlBtn",
          label: this.$t('org.label.operation'),//"操作",
          codeField: "controlBtn",
          width: 120,
          align: "center",
          isComponent: true,
          comps: [
            {
              compKey: "propKey0",
              labelName: this.$t('org.label.edit'),//"编辑",
              codeField: "editControlBtn",
              clickEvent: this.edit,
              component: () => import("@/components/org/linkButton")
            }
          ]
        }
      ]
      if (CacheConfig.cacheData[this.$route.path] && CacheConfig.cacheData[this.$route.path].tableCols.length > 0) {
        cols = cols.concat(CacheConfig.cacheData[this.$route.path].tableCols)
      } else {
        cols = cols.concat([
              {
                prop: "dlrAccountId",
                label: this.$t('org.label.dlrAccountId'),//"账户ID"
                width: 0,
                align: "center",
                hidden: true
              },
              {
                prop: "dlrAccountCode",
                label: this.$t('org.label.accountCode'),//"账户代码"
                width: null,
                align: "center"
              },
              {
                prop: "dlrAccountName",
                label: this.$t('org.label.accountName'),//"账户名称"
                width: null,
                align: "center"
              },
              {
                prop: "modelName",
                label: this.$t('org.label.ModuleNameAccount'),//"模块名称"
                width: null,
                align: "center"
              }, 
              {
                prop: "modelCode",
                label: this.$t('org.label.ModuleNameAccount'),//"模块编码"
                hidden: true,
              },
              {
                prop: "creator",
                label: this.$t('org.label.creator'),//"创建人"
                width: null,
                align: "center"
              },
              {
                prop: "createdDate",
                label: this.$t('org.label.createdDate'),//"创建时间"
                width: null,
                align: "center"
              },
              { prop: "isEnable", label: this.$t('org.label.isEnable'),/**"是否启用 */ width: 100, align: "center" },
              {
                prop: "updateControlId",
                label: this.$t('org.label.updateControlId'),//"并发控制"
                width: null,
                align: "center",
                hidden: true
              }
            ])
      }
      return cols
    }
  }
};
</script>
