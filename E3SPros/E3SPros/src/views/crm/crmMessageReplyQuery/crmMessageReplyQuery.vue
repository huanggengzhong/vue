
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
import { requestGraphQL } from "@/api/commonRequest";
import { oneTableWithViewTemplateMixins } from '@/components/mixins/oneTableWithViewTemplateMixins';
import OneTableTemplate from "@/components/crm/Template/crmonePage";
import { CacheConfig } from '@/cache/configCache/index';



export default {
  name:"crmNodeGroup",
  // 组件混入对象
  mixins: [oneTableWithViewTemplateMixins],
  components: {
    OneTableTemplate,

  },
  // 阻塞路由预加载网格中组件的数据
  beforeRouteEnter(to, from, next) {CacheConfig.initData(to.path, function(){next()})},
  data() {
    
    return {
      // 网格查询API配置对象
      apiConfig: crmApis.csBuMessReceiveQueryFindAll,
      searchField:'电话',
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
                labelName: "电话",
                codeField: "phone",
                component: () => import("@/components/crm/textbox/crmTextInput"),
                type: "inputText",
                isMust: false
              },
              {
                compKey: "compKey2",
                labelName: "回复内容",
                codeField: "receiveContent",
                component: () => import("@/components/crm/textbox/crmTextInput"),
                type: "inputText",
                isMust: false
              },
              {
                compKey: "compKey3",
                labelName: "发送申请码",
                codeField: "applyCode",
                component: () => import("@/components/crm/textbox/crmTextInput"),
                type: "inputText",
                isMust: false
              },
              {
                compKey: "compKey4",
                labelName: "回复时间",
                codeField: "receiveBeginTime,receiveEndTime",
                component: () => import("@/components/crm/Time/crmdtDatePicker"),
                type: "inputText",
                isMust: false
              },
            ],
      // 动态生成网格列
      tableCols:
        CacheConfig.cacheData[this.$route.path] &&
        CacheConfig.cacheData[this.$route.path].tableCols.length > 0
          ? CacheConfig.cacheData[this.$route.path].tableCols
          : [
              
              {
                prop: "phone",
                label: "电话",
                width: null,
                align: "center"
              },
              {
                prop: "applyCode",
                label: "发送申请码",
                width: null,
                align: "center"
              },
              {
                prop: "receiveContent",
                label: "回复内容",
                width: null,
                align: "center"
              },
              {
                prop: "backtime",
                label: "回复时间",
                width: null,
                align: "center",
              },
              {
                prop: "remark",
                label: "备注",
                width: null,
                align: "center",
                // hidden:true
              },

            ],
      // 表单查询数据--重置查询条件
      formField: {
        // oemCode:"1",
        // groupCode: "1",
        phone:"",
        receiveContent:"",
        applyCode:"",
        receiveBeginTime:"",
        receiveEndTime:"",
      },
      

    };
  },
  methods: {
  

  }
};
</script>
