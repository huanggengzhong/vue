<!--
* description: 客户修改申请审核
* author: zxuan
* createdDate: 2019-10-25
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
  </div>
</template>
<script>
import { oneTableWithViewTemplateMixins } from "@/components/mixins/oneTableWithViewTemplateMixins";
import { crmApis } from "@/api/graphQLApiList/crm";
import OneTableTemplate from "@/components/crm/Template/crmonePage";
import { CacheConfig } from "@/cache/configCache/index";

export default {
  name: "custCreatReview",
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
      apiConfig: crmApis.csDbUpdateRemindSetMQueryFindAll,
      // 动态组件-按钮
      tableButtons: [
        {
          compKey: "btnKey1",
          type: "",
          size: "small",
          clickEvent: () => this.review(),
          text: "车主信息维护审核"
        },
        {
          compKey: "btnKey2",
          type: "",
          size: "small",
          clickEvent: () => this.review1(),
          text: "车主变更审核"
        },
        {
          compKey: "btnKey2",
          type: "",
          size: "small",
          clickEvent: () => this.review2(),
          text: "关键信息审核"
        },
        // {
        //   compKey: "btnKey5",
        //   type: "",
        //   size: "small",
        //   clickEvent: () => this.importQues(),
        //   text: "导入"
        // }
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
                labelName: "客户名称",
                codeField: "custname",
                component: () =>
                  import("@/components/crm/textbox/crmTextInput"),
                type: "inputText",
                isMust: false
              },
              {
                compKey: "compKey2",
                labelName: "客户类型",
                lookuptype: "DB0006",
                codeField: "custType",
                clearable: false,
                component: () =>
                  import("@/components/crm/lookupValue/lookupvalue"),
                type: "dropdownList",
                isMust: false
              },
              {
                compKey: "compKey3",
                labelName: "VIN码",
                codeField: "vin",
                component: () =>
                  import("@/components/crm/textbox/crmTextInput"),
                type: "inputText",
                isMust: false
              },
              {
                compKey: "compKey4",
                labelName: "变更类型",
                lookuptype: "DB0006",
                codeField: "changeType",
                clearable: false,
                component: () =>
                  import("@/components/crm/lookupValue/lookupvalue"),
                type: "dropdownList",
                isMust: false
              },
              {
                compKey: "compKey5",
                labelName: "申请时间",
                codeField: "buildDate,buildDate2",
                component: () =>
                  import("@/components/crm/Time/crmdtDatePicker"),
                type: "inputText",
                isMust: false
              },
              {
                compKey: "compKey6",
                labelName: "审核状态",
                lookuptype: "DB0006",
                codeField: "reviewStatus",
                clearable: false,
                component: () =>
                  import("@/components/crm/lookupValue/lookupvalue"),
                type: "dropdownList",
                isMust: false
              },
              {
                compKey: "compKey7",
                labelName: "网点",
                codeField: "dlrId",
                component: () =>
                  import("@/components/crm/crmEjectWindows/crmChangeDlr/index"),
                type: "propus",
                isMust: false
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
                codeField: "controlBtn",
                width: 120,
                align: "center",
                isComponent: true,
                comps: [
                  {
                    compKey: "propKey0",
                    labelName: "审核",
                    codeField: "editControlBtn",
                    clickEvent: this.review,
                    component: () => import("@/components/org/linkButton"),
                    isMust: true
                  }
                ]
              },
              {
                prop: "dlrId",
                label: "网点",
                width: null,
                align: "center"
              },
              {
                prop: "custname",
                label: "客户名称",
                width: null,
                align: "center"
              },
              {
                prop: "custType",
                label: "客户类型",
                width: null,
                align: "center"
              },
              {
                prop: "vin",
                label: "VIN码",
                width: null,
                align: "center"
              },
              {
                prop: "changeType",
                label: "变更类型",
                width: null,
                align: "center"
              },
              {
                prop: "buildDate",
                label: "申请时间",
                width: null,
                align: "center"
              },
              {
                prop: "reviewStatus",
                label: "审核状态",
                width: null,
                align: "center"
              },
              {
                prop: "reviewTime",
                label: "审核时间",
                width: null,
                align: "center"
              },
              {
                prop: "reviewPerson",
                label: "审核人",
                width: null,
                align: "center"
              },
              {
                prop: "reviewOpinion",
                label: "审核意见",
                width: null,
                align: "center"
              }
            ],
      // 表单查询参数
      formField: {
        custname: "",
        custType: "",
        vin: "",
        changeType: "",
        buildDate: "",
        buildDate2:"",
        reviewStatus: "",
        dlrId: ""
      }
    };
  },
  methods: {
    review(index) {
      let that = this;
      //let rowData = this.$refs.multipleTable.list[index];
      that.$crmcf.jumpDetailTag(that, "carOwnerInfo", "/carOwnerInfo");
    },
    review1(){
       let that = this;
      //let rowData = this.$refs.multipleTable.list[index];
      that.$crmcf.jumpDetailTag(that, "carOwnerChange", "/carOwnerChange");
    },
    review2(){
      let that = this;
      //let rowData = this.$refs.multipleTable.list[index];
      that.$crmcf.jumpDetailTag(that, "keyInfo", "/keyInfo");
    }
  }
};
</script>
