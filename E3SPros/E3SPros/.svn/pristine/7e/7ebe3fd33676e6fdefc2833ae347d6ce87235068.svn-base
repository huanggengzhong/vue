<!--
* description: 投诉申诉申请
* author: zouzx
* createdDate: 2019-10-16
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
      :dynamicIsColumnDrop="false"/>
  </div>
</template>
<script>
import { crmApis } from "@/api/graphQLApiList/crm";
import { oneTableWithViewTemplateMixins } from '@/components/mixins/oneTableWithViewTemplateMixins';
import OneTableTemplate from "@/components/crm/Template/crmonePage";
import { CacheConfig } from '@/cache/configCache/index'

export default {
  name:"ComplaintAppealAppli",
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
      searchField:"客户名称/电话/所属部门",
      // 网格查询API配置对象
      apiConfig: crmApis.csBuAppealQueryServer,
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
                labelName: "客户名称",
                codeField: "custName",
                component: () => import("@/components/crm/textbox/crmTextInput"),
                type: "inputText",
                isMust: false
              },
              {
                compKey: "compKey2",
                labelName: "电话",
                codeField: "contactTel",
                component: () => import("@/components/crm/textbox/crmTextInput"),
                type: "inputText",
                isMust: false
              },
              {
                compKey: "compKey3",
                labelName: "所属部门",
                codeField: "",
                component: () => import("@/components/crm/textbox/crmTextInput"),
                type: "inputText",
                isMust: false
              },
              {
                compKey: "compKey4",
                labelName: "结案日期",
                codeField: "caseTimeBegin,caseTimeEnd",
                component: () => import("@/components/crm/Time/crmdtDatePicker"),
                type: "date",
                isMust: false
              },
              {
                compKey: "compKey5",
                labelName: "服务单号",
                codeField: "serverOrder",
                component: () => import("@/components/crm/textbox/crmTextInput"),
                type: "inputText",
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
                width: 55,
                align: "center",
                codeField: 'controlBtn',
                isComponent: true,
                comps: [
                  {
                    compKey: "propKey1",
                    labelName: '申诉',
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
                prop: "serverOrder",
                label: "服务单号",
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
                prop: "contactTel",
                label: "电话",
                width: null,
                align: "center"
              },
              {
                prop: "requOrgName",
                label: "所属部门",
                width: null,
                align: "center"
              },
              {
                prop: "createdDate",
                label: "建单时间",
                width: null,
                align: "center"
              },
              {
                prop: "serverFullClassName",
                label: "投诉类别",
                width: null,
                align: "center"
              },
              {
                prop: "caseTime",
                label: "结案日期",
                width: null,
                align: "center"
              },
              {
                prop: "serverTitle",
                label: "摘要",
                width: null,
                align: "center",
              },
              // {
              //   prop: "oemCode",
              //   label: "厂商编码",
              //   width: null,
              //   align: "center",
              //   hidden: true
              // },
              // {
              //   prop: "groupCode",
              //   label: "集团编码",
              //   width: null,
              //   align: "center",
              //   hidden: true
              // }
            ],
      // 表单查询数据
      formField: {
        oemCode:"1",
        groupCode: "1",
        custName:"",
        contactTel:"",
        caseTimeBegin:"",
        caseTimeEnd:"",
        serverOrder:""
      }
    };
  },
  methods: {
    edit(index) {
        debugger
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
        this.$crmcf.jumpDetailTag(this,'ComplAppealDeal','/ComplAppealDeal',that.list[curIndex])
    }
  }
};
</script>
