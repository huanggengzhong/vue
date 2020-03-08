<!--
* description: 商机跟进
* author: zouzx
* createdDate: 2019-10-11
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
import { crmApis } from "@/api/graphQLApiList/crm";
import { oneTableWithViewTemplateMixins } from '@/components/mixins/oneTableWithViewTemplateMixins'
import OneTableTemplate from "@/components/crm/Template/crmonePage";
import { CacheConfig } from '@/cache/configCache/index'

export default {
  name:"crmActivityTrack",
  // 组件混入对象
  mixins: [oneTableWithViewTemplateMixins],
  components: {
    OneTableTemplate
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
      searchField:"客户名称/电话",
      // 网格查询API配置对象
      apiConfig: crmApis.visitQueryList,
      // 动态组件-按钮
      tableButtons: [
        {
          compKey: "btnKey1",
          type: "",
          size: "small",
          clickEvent: () => this.mrTask(),
          text: "明日回访列表"
        },
        {
          compKey: "btnKey2",
          type: "primary",
          size: "small",
          clickEvent: () => this.jrTask(),
          text: "当日回访列表"
        },
        {
          compKey: "btnKey3",
          type: "primary",
          size: "small",
          clickEvent: () => this.visit(),
          text: "活动跟踪"
        },
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
                codeField: "dlrId",
                component: () => import("@/components/crm/crmEjectWindows/crmChangeDlr/index"),
                type: "propus",
                isMust: false
              },
              {
                compKey: "compKey2",
                labelName: "销售顾问",
                codeField: "caEmpId",
                component: () => import("@/components/crm/crmEjectWindows/crmSalesConsultant/index"),
                type: "propus",
                isMust: false
              },
              {
                compKey: "compKey3",
                labelName: "意向级别",
                codeField: "intentLevel",
                lookuptype: "LX141",
                component: () => import("@/components/org/LookupValue"),
                type: "dropdownList",
                isMust: false,
                isMul:false,
              },
              {
                compKey: "compKey4",
                labelName: "客户类型",
                codeField: "custClassCode",
                lookuptype: "LX011",
                component: () => import("@/components/org/LookupValue"),
                type: "dropdownList",
                isMust: false,
                isMul:false,
              },
              {
                compKey: "compKey5",
                labelName: "客户名称",
                codeField: "custName",
                component: () => import("@/components/org/commonInput"),
                type: "inputText",
                isMust: false
              },
              {
                compKey: "compKey6",
                labelName: "电话",
                codeField: "phone",
                component: () => import("@/components/org/commonInput"),
                type: "inputText",
                isMust: false
              },
              {
                compKey: "compKey7",
                labelName: "最近访问时间",
                codeField: "actualVisitDateStart,actualVisitDateEnd",
                component: () => import("@/components/crm/Time/crmdtDatePicker"),
                type: "inputText",
                isMust: false
              },
              {
                compKey: "compKey8",
                labelName: "计划访问时间",
                codeField: "nextVisitDateStart,nextVisitDateEnd",
                component: () => import("@/components/crm/Time/crmdtDatePicker"),
                type: "inputText",
                isMust: false
              },
              {
                compKey: "compKey9",
                labelName: "回访状态",
                codeField: "actionState",
                lookuptype: "LX103",
                component: () => import("@/components/org/LookupValue"),
                type: "dropdownList",
                isMust: false,
                isMul:false,
              },
              {
                compKey: "compKey10",
                labelName: "来店目的",
                codeField: "",
                lookuptype: "DB0060",
                component: () => import("@/components/org/LookupValue"),
                type: "dropdownList",
                isMust: false,
                isMul:false,
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
                width: 80,
                align: "center",
                codeField: 'controlBtn',
                isComponent: true,
                comps: [
                  {
                    compKey: "propKey1",
                    labelName: '活动跟踪',
                    codeField: 'editControlBtn',
                    align: "center",
                    isShowLabel:true,
                    isShow:true,
                    clickEvent: this.edit,
                    component: () => import("@/components/org/linkButton")
                  }
                ]
              },
              {
                prop: "actionStateName",
                label: "回访状态",
                width: null,
                align: "center"
              },
              {
                prop: "dlrShortName",
                label: "网点",
                width: null,
                align: "center"
              },
              {
                prop: "caEmpName",
                label: "销售顾问",
                width: null,
                align: "center"
              },
              {
                prop: "custName",
                label: "客户名称",
                width: null,
                align: "center"
              },
              {
                prop: "phone",
                label: "电话",
                width: null,
                align: "center"
              },
              {
                prop: "custClassName",
                label: "客户类型",
                width: null,
                align: "center"
              },
              {
                prop: "intentLevelName",
                label: "意向级别",
                width: null,
                align: "center",
              },
              {
                prop: "actionTypeBigName",
                label: "活动大类",
                width: null,
                align: "center",
              },
              {
                prop: "actionTypeSmallName",
                label: "活动小类",
                width: null,
                align: "center"
              },
              {
                prop: "nextVisitDate",
                label: "计划访问时间",
                width: null,
                align: "center"
              },
              {
                prop: "",
                label: "计划下次访问时间",
                width: null,
                align: "center"
              },
              {
                prop: "actualVisitDate",
                label: "最近访问时间",
                width: null,
                align: "center"
              }
            ],
      // 表单查询数据
      formField: {
        dlrId:"",
        caEmpId:"",
        intentLevel:"",
        custClassCode:"",
        custName:"",
        phone:"",
        actualVisitDateStart:"",
        actualVisitDateEnd:"",
        nextVisitDateStart:"",
        nextVisitDateEnd:"",
        actionState:""
      },
      ycStartDate:"",
      ycEndDate:""
    };
  },
  methods: {
    getDateStr: function(AddDayCount) {
      let dd = new Date();
      dd.setDate(dd.getDate() + AddDayCount);
      let y = dd.getFullYear();
      let m = dd.getMonth() + 1;
      let d = dd.getDate() < 10 ? "0" + dd.getDate() : dd.getDate();
      return (
        y +
        "-" +
        (m < 10 ? "0" + m : m) +
        "-" +
        d
      );
    },
    mrTask(){
      let that=this;
      that.ycStartDate=that.formField.nextVisitDateStart;
      that.ycEndDate=that.formField.nextVisitDateEnd;
      that.formField.nextVisitDateStart= that.getDateStr(1)+" 00:00:00";
      that.formField.nextVisitDateEnd= that.getDateStr(1)+" 00:00:00";
      that.queryTable(1);
      that.formField.nextVisitDateStart=that.ycStartDate;
      that.formField.nextVisitDateEnd=that.ycEndDate;
    },
    jrTask(){
      let that=this;
      that.ycStartDate=that.formField.nextVisitDateStart;
      that.ycEndDate=that.formField.nextVisitDateEnd;
      that.formField.nextVisitDateStart= that.getDateStr(0)+" 00:00:00";
      that.formField.nextVisitDateEnd= that.getDateStr(0)+" 00:00:00";
      that.queryTable(1);
      that.formField.nextVisitDateStart=that.ycStartDate;
      that.formField.nextVisitDateEnd=that.ycEndDate;
    },
    edit(index) {
      var curIndex = index;
      const that = this.$refs.multipleTable;
      if (curIndex === undefined || curIndex === null) {
        var currentRow;
        if (that.isMul === true) {
        // 多选
        var selectData = that.selection;
        if (selectData.length > 0) {
            currentRow = selectData[0];
        }
        } else {
        // 单选
        currentRow = that.currentRow;
        }
        if (currentRow) {
        curIndex = currentRow.index;
        }
      }

      if (curIndex === undefined || curIndex === null) {
        this.$alert("请选择需要跟踪的数据", "提示");
        return;
      }
      this.$crmcf.jumpDetailTag(this,'ActivityTracking','/ActivityTracking',that.list[curIndex])
    },
    visit(){
      this.$crmcf.jumpDetailTag(this,'ActivityTracking','/ActivityTracking',null)
    }
  }
};
</script>
