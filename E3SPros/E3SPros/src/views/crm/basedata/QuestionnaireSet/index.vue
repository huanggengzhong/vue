<!--
* description: 问卷设置
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
    <!-- <RemindSet :PopupsVisible="flag" ref="trans" />
    <UpdateSet :transferLog="Tlog" ref="Tlog" />-->
  </div>
</template>
<script>
import { oneTableWithViewTemplateMixins } from "@/components/mixins/oneTableWithViewTemplateMixins";
import { crmApis } from "@/api/graphQLApiList/crm";
import OneTableTemplate from "@/components/crm/Template/crmonePage";
import { CacheConfig } from "@/cache/configCache/index";

export default {
  name: "QuestionnaireSet",
  // 组件混入对象
  mixins: [oneTableWithViewTemplateMixins],
  components: {
    OneTableTemplate
    // RemindSet,
    // UpdateSet
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
      flag: false,
      searchField: "请输入搜索内容",
      Tlog: {
        dialogVisible: false
      },
      // 网格查询API配置对象
      apiConfig: crmApis.pcBuQyQuestionQueryFindAll,
      // 动态组件-按钮
      tableButtons: [
        {
          compKey: "btnKey1",
          type: "",
          size: "small",
          clickEvent: () => this.addQues(),
          text: "新增"
        },
        {
          compKey: "btnKey5",
          type: "",
          size: "small",
          clickEvent: () => this.importQues(),
          text: "导入"
        }
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
                labelName: "问卷名称",
                codeField: "custname",
                component: () =>
                  import("@/components/crm/textbox/crmTextInput"),
                type: "inputText",
                isMust: false
              },
              {
                compKey: "compKey2",
                labelName: "业务流程",
                lookuptype: "LX009",
                codeField: "buniessProcess",
                component: () =>
                  import("@/components/crm/lookupValue/lookupvalue"),
                type: "dropdownList",
                isMust: false
              },
              {
                compKey: "compKey3",
                labelName: "问卷类型",
                codeField: "quesType",
                component: () =>
                  import("@/components/crm/Select/crmProcessNode"),
                type: "dropdownList",
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
              },
              {
                compKey: "compKey5",
                labelName: "是否生效",
                lookuptype: "DB0064",
                codeField: "isEffect",
                component: () =>
                  import("@/components/crm/lookupValue/lookupvalue"),
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
                width: 120,
                align: "center",
                isComponent: true,
                comps: [
                  {
                    compKey: "propKey0",
                    labelName: "编辑",
                    // compareField: "isEnable",
                    // compareValue: "1",
                    codeField: "editControlBtn",
                    clickEvent: this.editQues,
                    component: () => import("@/components/org/linkButton"),
                    isMust: true,
                  },
                  // {
                  //   compKey: "propKey1",
                  //   labelName: "删除",
                  //   compareField: "isEnable",
                  //   compareValue: "0",
                  //   codeField: "delControlBtn",
                  //   clickEvent: this.del,
                  //   component: () => import("@/components/org/linkButton")
                  // }
                ]
              },
              {
                prop: "iqyCode",
                label: "问卷编码",
                width: null,
                align: "center"
              },
              {
                prop: "reviewBigClassCodeName",
                label: "业务类型",
                width: null,
                align: "center"
              },
              {
                prop: "quesTypeName",
                label: "问卷类别",
                width: null,
                align: "center"
              },
              {
                prop: "iqyTopic",
                label: "问卷名称",
                width: null,
                align: "center"
              },
              {
                prop: "iqyCount",
                label: "题目数量",
                width: null,
                align: "center"
              },
              {
                prop: "iqyVersion",
                label: "问卷版本号",
                width: null,
                align: "center"
              },
              {
                prop: "isEffect",
                label: "是否生效",
                width: null,
                align: "center"
              },
              {
                prop: "isEnable",
                label: "状态",
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
        iqyTopic: "",
        buniessProcess: "",
        quesType: "",
        isEnable: "",
        isEffect: "",
        createdName:"",
        createdDate:"",
        modifier:"",
        lastUpdatedDate:""
      }
    };
  },
  methods: {
    addQues() {
      let that = this;
      that.$crmcf.jumpDetailTag(that,"TopicEdit","/TopicEdit")
    },
    editQues(index,rowData) {
      let that = this;
      that.$crmcf.jumpDetailTag(that,"TopicEdit","/TopicEdit",rowData)
    }
  }
};
</script>
