
<template>
  <section class="editCarBrand">
    <el-dialog
      :close-on-click-modal="false"
      title="添加元素"
      :append-to-body="true"
      :visible.sync="curPopupsVisible"
      @close="sendCode"
      width="1000px"
    >
      <div class="filter-container filter-params">
        <one-table-template
          ref="multipleTable"
          :dynamicButtons="tableButtons"
          :dynamicComponents="tableComponents"
          :dynamicApiConfig="apiConfig"
          :dynamicTableCols="tableCols"
          :dynamicFormFields="formField"
          :dynamicIsShowSelect="true"
          :dynamicIsInitTable="false"
          :dynamicIsColumnDrop="false"
          />


       </div>

    </el-dialog>
  </section>
</template>
<script>
import { crmApis } from "@/api/graphQLApiList/crm";
import { requestGraphQL } from "@/api/commonRequest";
import { oneTableWithViewTemplateMixins } from '@/components/mixins/oneTableWithViewTemplateMixins';
import OneTableTemplate from "@/components/crm/Template/crmonePage";

import { CacheConfig } from '@/cache/configCache/index'


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
          clickEvent: () => this.confirm(),
          text: "确认"
        },
        {
          compKey: "btnKey3",
          type: "",
          size: "small",
          clickEvent: () => this.close(),
          text: "返回"
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
                labelName: "元素类别",
                codeField: "groupType",
                lookuptype: "SE0059",
                component: () => import("@/components/crm/lookupValue/lookupvalue"),
                type: "dropdownList",
                isMust: true,
                isMul:false,
              },
              {
                compKey: "compKey2",
                labelName: "业务类型",
                codeField: "groupType",
                lookuptype: "SE0059",
                component: () => import("@/components/crm/lookupValue/lookupvalue"),
                type: "dropdownList",
                isMust: true,
                isMul:false,
              },
              {
                compKey: "compKey3",
                labelName: "元素名称",
                codeField: "nodeGroupName",
                component: () => import("@/components/crm/textbox/crmTextInput"),
                type: "inputText",
                isMust: true
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
                prop: "serverTypeName",
                label: "元素类别",
                width: null,
                align: "center"
              },
              {
                prop: "groupName",
                label: "元素名称",
                width: null,
                align: "center"
              },
              {
                prop: "groupTypeName",
                label: "业务类型",
                width: null,
                align: "center"
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

      },


    };
  },
  methods: {
    //维护
    edit(){


    },
    //删除
    delete(){

    },

  }
};
</script>
