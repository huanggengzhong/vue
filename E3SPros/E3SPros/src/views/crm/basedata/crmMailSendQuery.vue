<!--
* description: 发送邮件查询
* author: dxuem
* createdDate: 2019-09-12
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
      :dynamicIsShowSelect="false"
      :dynamicIsShowMoreBtn="true"
      :inputType="tableComponents.type"
    />
    <!-- <crmMailDetail
      :dynamicEditRowData="editRowData"
      :popupsVisible="editPopupsVisible"
      :key="editPopupsKey"
      :popupsState="editPopupsState"
      @close="close"
    ></crmMailDetail> -->
  </div>
</template>
<script>
import { oneTableWithViewTemplateMixins } from '@/components/mixins/oneTableWithViewTemplateMixins';
import { crmApis } from "@/api/graphQLApiList/crm";
import OneTableTemplate from "@/components/crm/Template/crmonePage";
// import crmMailDetail from "@/views/crm/basedata/crmMailDetail";

export default {
  name: "changeowner",
  // 组件混入对象
  mixins: [oneTableWithViewTemplateMixins],
  components: {
    OneTableTemplate,
    // crmMailDetail
  },
  data() {
    return {
      // 网格查询API配置对象
      apiConfig: crmApis.csBuEmailRuntimeQueryFindAll,//邮件发送记录查询
      searchField:'哈喽最近好吗周杰伦',
      // 动态组件-按钮
      tableButtons: [
        {
          compKey: "btnKey3",
          type: "",
          size: "small",
          clickEvent: () => this.sendmail(),
          text: "发送邮件",
          isMust:true,
        },
      ],
      // 动态组件-查询条件
      tableComponents: [
        {
          compKey: "compKey3",
          labelName: "提醒时间",
          codeField: "remindBeginTime,remindEndTime",
          component: () => import("@/components/crm/Time/crmdtDatePicker"),
          type: "daterange",
          isMust: false,
          isMul:true
        },
        {
          compKey: "compKey1",
          labelName: "发送人员工名",
          codeField: "bussOwner",
          component: () => import("@/components/crm/textbox/crmTextInput"),
          type: "text",
          isMust: false
        }
      ],
      // 动态生成网格列
      tableCols: [
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
              labelName: "详情",
              codeField: "editControlBtn",
              clickEvent: () => this.detail(),
              component: () => import("@/components/org/linkButton"),
              isMust: true
            },
            {
              compKey: "propKey1",
              labelName: "重发",
              codeField: "editControlBtn",
              clickEvent: () => this.resend(),
              component: () => import("@/components/org/linkButton")
            }
          ]
        },
        { prop: "remindTime", label: "提醒时间", width: null, align: "center" },
        { prop: "remindTime", label: "发送时间", width: null, align: "center" },
        { prop: "bussOwner", label: "发送人员工名", width: null, align: "center" },
        {
          prop: "sendUserId",
          label: "发送人用户名",
          width: null,
          align: "center"
        },
        { prop: "sendmail", label: "收件人邮箱", width: null, align: "center" },
        {
          prop: "sendmail",
          label: "抄送人邮箱",
          width: null,
          align: "center"
        },
        { prop: "emailTitle", label: "邮箱标题", width: null, align: "center" },
        {
          prop: "status",
          label: "状态",
          width: null,
          align: "center"
        }
      ],
      //表单查询数据
      formField: {
        remindBeginTime:"",
        remindEndTime:"",
        bussOwner: ""
      }
    };
  },
  methods: {
    // 邮件发送
    sendmail(currentRow) {
      // debugger
      let selectData = {};
      selectData.status="sendmail";
      this.$router.push({ name: "crmMailDetail", params: selectData });

    },
    // 详情
    detail(currentRow) {
      debugger
      let that=this;
      let selectData = this.$refs.multipleTable.currentRow;
      selectData.status="detail";
      that.$router.push({ name: "crmMailDetail", params: selectData });
    },
    // 重发
    resend(currentRow) {
      let that = this;
      // debugger
      let selectData = this.$refs.multipleTable.currentRow;
      selectData.status="resend";
      that.$router.push({ name: "crmMailDetail", params: selectData });
    },
  }
};
</script>
