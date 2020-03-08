<!--
* description: 短信批量发送
* author: dxuem
* createdDate: 2019-09-17
-->
<template>
  <div class="app-container app-container-table">
    <one-table-template
      ref="multipleTable"
      :dynamicButtons="tableButtons"
      :dynamicSearchField="searchField"
      :dynamicComponents="tableComponents"
      :dynamicApiConfig="apiConfig"
      :dynamicTableCols="tableCols"
      :dynamicFormFields="formField"
      :dynamicIsShowSelect="isMul"
      :dynamicIsShowMoreBtn="true"
    />
    <edit :sendMsg="flag" ref="trans" />
    <!-- <edit
      :dynamicEditRowData="editRowData"
      :popupsVisible="editPopupsVisible"
      :key="editPopupsKey"
      :popupsState="editPopupsState"
      @close="close"
    ></edit> -->
  </div>
</template>
<script>
import { oneTableWithViewTemplateMixins } from "@/components/mixins/oneTableWithViewTemplateMixins";
import { crmApis } from "@/api/graphQLApiList/crm";
import OneTableTemplate from "@/components/crm/Template/crmonePage";
import { CacheConfig } from "@/cache/configCache/index";
import edit from "./sendMsg";

export default {
  name: "changeowner",
  // 组件混入对象
  mixins: [oneTableWithViewTemplateMixins],
  components: {
    OneTableTemplate,
    edit
  },
  data() {
    return {
      flag:{
        dialogVisible:false,
        params:""
        },
      // 网格查询API配置对象
      apiConfig: crmApis.clueServerQueryFromDlr, //线索单查询查询
      searchField:'哈喽最近好吗周杰伦',
      currentRow: null,
      editPopupsVisible: false, //发送短信弹窗
      editPopupsKey: "", // 新增、编辑弹窗Key（个人
      newTable: [],
      editRowData: {},
      // 动态组件-按钮
      tableButtons: [
        {
          compKey: "btnKey3",
          type: "",
          size: "small",
          clickEvent: () => this.edit(),
          text: "发送短信",
          isMust: true
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
                labelName: "客户名称",
                codeField: "custName",
                component: () =>
                  import("@/components/crm/textbox/crmTextInput"),
                type: "inputText",
                isMust: false
              },
              {
                compKey: "compKey2",
                labelName: "电话",
                codeField: "contactTel",
                component: () =>
                  import("@/components/crm/textbox/crmTextInput"),
                type: "inputText",
                isMust: false
              },
              {
                compKey: "compKey3",
                labelName: "意向车系",
                codeField: "inteSeriesId",
                component: () =>
                  import(
                    "@/components/crm/crmEjectWindows/crmIntenCarSeries/index"
                  ),
                type: "propus",
                isMust: false
              },
              {
                compKey: "compKey4",
                labelName: "意向级别",
                lookuptype: "LX141",
                codeField: "clueLevelCode",
                component: () =>
                  import("@/components/crm/lookupValue/lookupvalue"),
                type: "inputText",
                isMust: false
              },
              {
                compKey: "compKey5",
                labelName: "下次回访时间",
                codeField: "nextCallbackDateStart,nextCallbackDateEnd",
                component: () =>
                  import("@/components/crm/Time/crmdtDatePicker"),
                type: "inputText",
                isMust: false,
              },
              {
                compKey: "compKey6",
                labelName: "当前处理人",
                codeField: "nextDealUserId",
                component: () =>
                  import("@/components/crm/textbox/crmTextInput"),
                type: "inputText",
                isMust: false
              }
            ],
      // 动态生成网格列
      tableCols: [
        {
          prop: "clueCode",
          label: "线索单号",
          width: null,
          align: "center"
        },
        {
          prop: "custName",
          label: "客户名称",
          width: null,
          align: "center"
        },
        { prop: "contactTel", label: "电话", width: null, align: "center" },
        {
          prop: "clueLevelCode",
          label: "意向级别",
          width: null,
          align: "center"
        },
        {
          prop: "carSeriesCn",
          label: "意向车系",
          width: null,
          align: "center"
        },
        {
          prop: "nextDealUserName",
          label: "当前处理人",
          width: null,
          align: "center"
        },
        {
          prop: "reviewTimes",
          label: "上次回访时间",
          width: null,
          align: "center"
        },
        {
          prop: "nextCallbackDate",
          label: "下次回访时间",
          width: null,
          align: "center"
        },
        {
          prop: "reviewTimes",
          label: "建单人",
          width: null,
          align: "center"
        },
        {
          prop: "statusName",
          label: "单据状态",
          width: null,
          align: "center"
        }
      ],
      //表单查询数据
      formField: {
        custName: "",
        contactTel: "",
        inteSeriesId: "",
        clueLevelCode: "",
        nextDealUserId: "",
        nextCallbackDateStart: "",
        nextCallbackDateEnd: "",
        statusArray:["10","20","21","30","31","40","50"],
        handleCode:"1"
      }
    };
  },
  methods: {
    edit() {
      debugger
      const that = this.$refs.multipleTable;
      let selectData = that.$refs.multipleTable.selection;
      let contactTel = "";
      if (selectData.length < 1) {
        this.$message({
          message: "请选择需要发送短信的人员",
          type: "warning",
          duration: 2000
        });
      } else {
        for (var i = 0; i < selectData.length; i++) {
          this.flag.dialogVisible=true
          contactTel = contactTel + selectData[i].contactTel + ",";
          this.flag.params=contactTel;
          this.$refs.trans.init()
          // this.$refs.trans.getData();
        }
      }
    }
  }
};
</script>
