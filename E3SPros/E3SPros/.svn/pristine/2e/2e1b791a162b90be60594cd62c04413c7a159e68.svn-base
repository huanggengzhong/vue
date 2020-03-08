<!--
* description: 整车意向客户划转
* author: zxuan
* createdDate: 2019-10-10
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
      :dynamicIsShowSelect="true"
      :dynamicIsInitTable="false"
      :dynamicIsColumnDrop="false"
    />
    <transfer :PopupsVisible="flag" ref="trans" />
    <transLog :transferLog="Tlog" ref="Tlog" />
    <!-- <transfer
      :dynamicEditRowData="editRowData"
      :popupsVisible="editPopupsVisible"
      :key="editPopupsKey"
      :popupsState="editPopupsState"
      @close="close"
    ></transfer> -->
  </div>
</template>
<script>
import { oneTableWithViewTemplateMixins } from "@/components/mixins/oneTableWithViewTemplateMixins";
import { crmApis } from "@/api/graphQLApiList/crm";
import OneTableTemplate from "@/components/crm/Template/crmonePage";
import transfer from "@/views/crm/coc/interCustTransfer/transfer"
import transLog from "@/views/crm/coc/interCustTransfer/transferlog"
//import transfer from "@/views/crm/coc/testDrivingManage/edit";
import { CacheConfig } from "@/cache/configCache/index";

export default {
  name: "interCustTransfer",
  // 组件混入对象
  mixins: [oneTableWithViewTemplateMixins],
  components: {
    OneTableTemplate,
    transfer,
    transLog
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
          clickEvent: () => this.transfer(),
          text: "划转"
        },
        {
          compKey: "btnKey5",
          type: "",
          size: "small",
          clickEvent: () => this.transferLog(),
          text: "划转日志"
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
                labelName: "网点",
                codeField: "dlr",
                component: () =>
                  import("@/components/crm/crmEjectWindows/crmChangeDlr/index"),
                type: "propus",
                isMust: true
              },
              {
                compKey: "compKey3",
                labelName: "销售顾问",
                codeField: "saler",
                component: () =>
                  import("@/components/crm/crmEjectWindows/crmSalesConsultant/index"),
                type: "propus",
                isMust: true
              },
              {
                compKey: "compKey2",
                labelName: "客户名称",
                codeField: "custname",
                component: () =>
                  import("@/components/crm/textbox/crmTextInput"),
                type: "inputText",
                isMust: true
              },
              {
                compKey: "compKey4",
                labelName: "电话",
                codeField: "telphone",
                component: () =>
                  import("@/components/crm/textbox/crmTextInput"),
                type: "inputText",
                isMust: true
              },
              {
                compKey: "compKey5",
                labelName: "客户类型",
                lookuptype: "DB0006",
                codeField: "custType",
                clearable: false,
                component: () => import("@/components/crm/lookupValue/lookupvalue"),
                type: "dropdownList",
                isMust: false
              },
              {
                compKey: "compKey6",
                labelName: "意向车系",
                codeField: "interCarSeries",
                component: () =>
                  import(
                    "@/components/crm/crmEjectWindows/crmIntenCarSeries/index"
                  ),
                type: "propus",
                isMust: false
              },
              {
                compKey: "compKey7",
                labelName: "建档日期",
                codeField: "buildDate",
                component: () =>
                  import("@/components/crm/Time/crmdtDatePicker"),
                type: "inputText",
                isMust: false
              },
              {
                compKey: "compKey8",
                labelName: "意向级别",
                lookuptype: "LX141",
                codeField: "interLevel",
                clearable: false,
                 component: () => import("@/components/crm/lookupValue/lookupvalue"),
                type: "dropdownList",
                isMust: false
              }
            ],
      // 动态生成网格列
      tableCols:
        CacheConfig.cacheData[this.$route.path] &&
        CacheConfig.cacheData[this.$route.path].tableCols.length > 0
          ? CacheConfig.cacheData[this.$route.path].tableCols
          : [
              // {
              //   prop: "controlBtn",
              //   label: "操作",
              //   codeField: "controlBtn",
              //   width: 120,
              //   align: "center",
              //   fixed: true,
              //   isComponent: true,
              //   comps: [
              //     {
              //       compKey: "propKey0",
              //       labelName: "修改",
              //       compareField: "isEnable",
              //       compareValue: "1",
              //       codeField: "editControlBtn",
              //       clickEvent: this.edit,
              //       component: () => import("@/components/org/linkButton")
              //     },
              //     {
              //       compKey: "propKey1",
              //       labelName: "删除",
              //       compareField: "isEnable",
              //       compareValue: "0",
              //       codeField: "delControlBtn",
              //       clickEvent: this.del,
              //       component: () => import("@/components/org/linkButton")
              //     }
              //   ]
              // },
              {
                prop: "dlr",
                label: "网点",
                width: null,
                align: "center"
              },
              {
                prop: "saler",
                label: "销售顾问",
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
                prop: "telphone",
                label: "电话",
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
                prop: "clueSource",
                label: "线索来源",
                width: null,
                align: "center"
              },
              {
                prop: "interLevel",
                label: "意向级别",
                width: null,
                align: "center"
              },
              {
                prop: "interCarSeries",
                label: "意向车系",
                width: null,
                align: "center"
              },
              {
                prop: "interCarType",
                label: "意向车型",
                width: null,
                align: "center"
              },
              {
                prop: "carTypeConfig",
                label: "车型配置",
                width: null,
                align: "center"
              },
              {
                prop: "buildDate",
                label: "建档日期",
                width: null,
                align: "center"
              }
            ],
      // 表单查询参数
      formField: {
        dlr: "",
        saler: "",
        custname: "",
        telphone: "",
        custType:"",
        interCarSeries:"",
        buildDate:"",
        interLevel:""
      }
    };
  },
  methods: {
    transfer() {
      let that=this
      that.flag=true
      that.$refs.trans.init()
    },
    transferLog() {
      let that=this
      that.Tlog.dialogVisible=true
      that.$refs.Tlog.init()
    }
  }
};
</script>
