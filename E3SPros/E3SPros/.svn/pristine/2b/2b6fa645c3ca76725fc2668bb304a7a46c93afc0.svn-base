
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
    <custom-page-manage-add
      :dynamicEditRowData="editRowData"
      :popupsVisible="editPopupsVisible"
      :key="editPopupsKey"

      @close="close"/>

  </div>
</template>
<script>
import { crmApis } from "@/api/graphQLApiList/crm";
import { requestGraphQL } from "@/api/commonRequest";
import { oneTableWithViewTemplateMixins } from '@/components/mixins/oneTableWithViewTemplateMixins'
import OneTableTemplate from "@/components/crm/Template/crmonePage";
import customPageManageAdd from './customPageManageAdd'
import { CacheConfig } from '@/cache/configCache/index'


export default {
  name:"crmNodeGroup",
  // 组件混入对象
  mixins: [oneTableWithViewTemplateMixins],
  components: {
    OneTableTemplate,
    customPageManageAdd
  },
  // 阻塞路由预加载网格中组件的数据
  beforeRouteEnter(to, from, next) {CacheConfig.initData(to.path, function(){next()})},
  data() {
   
    return {
      searchField:"搜索条件",
      // 网格查询API配置对象
      apiConfig: crmApis.csDbNodeGroupQueryFindAll,
      // 动态组件-按钮
      tableButtons: [
        
        {
          compKey: "btnKey1",
          type: "",
          size: "small",
          clickEvent: () => this.add(),
          text: "新增"
        },
       
      ],
      // 动态组件-查询条件
      tableComponents:
        CacheConfig.cacheData[this.$route.path] &&
        CacheConfig.cacheData[this.$route.path].tableComponents.length > 0
          ? CacheConfig.cacheData[this.$route.path].tableComponents
          : [
              {
                compKey: "compKey1",
                labelName: "页面编码",
                codeField: "nodeGroupName",
                component: () => import("@/components/crm/textbox/crmTextInput"),
                type: "inputText",
                isMust: false
              },
              {
                compKey: "compKey2",
                labelName: "页面名称",
                codeField: "nodeGroupName",
                component: () => import("@/components/crm/textbox/crmTextInput"),
                type: "inputText",
                isMust: false
              },

              {
                compKey: "compKey3",
                labelName: "活动类型",
                codeField: "groupType",
                lookuptype: "SE0059",
                component: () => import("@/components/crm/lookupValue/lookupvalue"),
                type: "dropdownList",
                isMust: false,
                isMul:false,
              },
              {
                compKey: "compKey4",
                labelName: "是否启用",
                codeField: "isEnable",
                component: () => import("@/components/crm/Select/crmIsEnable"),
                type: "dropdownList",
                isMust: false,
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
                width: 60,
                align: "center",
                codeField: 'controlBtn',
                isComponent: true,
                comps: [
                  {
                    compKey: "propKey1",
                    labelName: '维护',
                    codeField: 'editControlBtn',
                    align: "center",
                    isShowLabel:true,
                    isShow:true,
                    clickEvent: () => this.edit(),
                    // clickEvent: this.edit,
                    component: () => import("@/components/org/linkButton")
                  },

                ]
              },
              {
                prop: "serverTypeName",
                label: "页面编码",
                width: null,
                align: "center"
              },
              {
                prop: "groupName",
                label: "页面名称",
                width: null,
                align: "center"
              },
              {
                prop: "groupTypeName",
                label: "活动类型",
                width: null,
                align: "center"
              },
              {
                prop: "isEnableName",
                label: "Message数量",
                width: null,
                align: "center",
              },
              {
                prop: "isEnableName",
                label: "Offer数量",
                width: null,
                align: "center",
                // hidden:true
              },
              {
                prop: "isEnableName",
                label: "是否启用",
                width: 150 ,
                align: "center",
                // hidden:true
              },

            ],
      // 表单查询数据--重置查询条件
      formField: {
        oemCode:"1",
        groupCode: "1",
        // serverType:"",
        // nodeGroupName:"",
        // groupType:"",
        // searchValue:"",//搜素字段

      },


    };
  },
  methods: {
    //维护
    edit(){
      this.$router.push({name:"pageMaintenance",params:this.$refs.multipleTable.currentRow})

    },
    

  }
};
</script>
