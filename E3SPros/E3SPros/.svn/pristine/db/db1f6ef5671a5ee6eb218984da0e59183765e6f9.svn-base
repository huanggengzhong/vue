<!--
* description: 题目管理
* author: zxuan
* createdDate: 2019-10-18
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
    <edit :PopupsVisible="flag" ref="trans" />
  </div>
</template>
<script>
import { oneTableWithViewTemplateMixins } from "@/components/mixins/oneTableWithViewTemplateMixins";
import { crmApis } from "@/api/graphQLApiList/crm";
import OneTableTemplate from "@/components/crm/Template/crmonePage";
import edit from "@/views/crm/basedata/TopicManage/edit"
import { CacheConfig } from "@/cache/configCache/index";

export default {
  name: "interCustTransfer",
  // 组件混入对象
  mixins: [oneTableWithViewTemplateMixins],
  components: {
    OneTableTemplate,
    edit
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
      flag:false,
      searchField:'请输入搜索内容',
      Tlog:{
        dialogVisible:false
      },
      // 网格查询API配置对象
      apiConfig: crmApis,
      // 动态组件-按钮
      tableButtons: [
        {
          compKey: "btnKey1",
          type: "",
          size: "small",
          clickEvent: this.addques,
          text: "新增"
        },
        {
          compKey: "btnKey5",
          type: "",
          size: "small",
          clickEvent: () => this.importques(),
          text: "导入"
        },
        // {
        //   compKey: "btnKey2",
        //   type: "primary",
        //   size: "small",
        //   clickEvent: () => this.queryTable(1),
        //   text: "查询"
        // },
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
                labelName: "题目类型",
                codeField: "subType",
                component: () =>
                  import("@/components/crm/Select/crmProcessNode"),
                type: "dropdownList",
                isMust: false
              },
              {
                compKey: "compKey2",
                labelName: "题目名称",
                codeField: "subjectTopic",
                component: () =>
                  import("@/components/crm/textbox/crmTextInput"),
                type: "inputText",
                isMust: false
              },
              {
                compKey: "compKey3",
                labelName: "是否启用",
                codeField: "isEnable",
                clearable: false,
                component: () => import("@/components/crm/Select/crmIsEnable"),
                type: "dropdownList",
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
                prop: "controlBtn",
                label: "操作",
                codeField: "controlBtn",
                width: 60,
                align: "center",
                isComponent: true,
                comps: [
                  {
                    compKey: "propKey0",
                    labelName: "编辑",
                    // compareField: "isEnable",
                    // compareValue: "1",
                    codeField: "editControlBtn",
                    clickEvent: this.editques,
                    component: () => import("@/components/org/linkButton"),
                    isMust: true,
                  },
               ]},
              {
                prop: "subjectTopic",
                label: "题目名称",
                width: null,
                align: "center"
              },
              {
                prop: "maxCount",
                label: "选项数量",
                width: null,
                align: "center"
              },
              {
                prop: "subType",
                label: "题目类型",
                width: null,
                align: "center"
              },
              {
                prop: "isEnable",
                label: "是否启用",
                width: null,
                align: "center"
              },
              {
                prop: "creator",
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
                prop: "modifier",
                label: "修改人",
                width: null,
                align: "center"
              },
              {
                prop: "lastUpdatedDate",
                label: "修改时间",
                width: null,
                align: "center"
              }
            ],
      // 表单查询参数
      formField: {
        subjectTopic: "",
        maxCount: "",
        subType: "",
        creator: "",
        createdDate:"",
        isEnable:"",
        modifier:"",
        lastUpdatedDate:""
      }
    };
  },
  methods: {
    addques() {
      let that=this
      that.flag=true
      that.$refs.trans.init()
    },
    editques() {
      let that=this
      that.Tlog.dialogVisible=true
      that.$refs.trans.init()
    },
    importques(){
     let that=this
    }
  }
};
</script>
