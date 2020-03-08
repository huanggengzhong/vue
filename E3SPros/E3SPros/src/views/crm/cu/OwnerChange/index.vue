<!--
* description: 人车关系管理
* author: dxuem
* createdDate: 2019-10-17
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
    />
    <!-- <edit
      :dynamicEditRowData="editRowData"
      :popupsVisible="editPopupsVisible"
      :key="editPopupsKey"
      :popupsState="editPopupsState"
      @close="close"
      :isMul="false"
    ></edit> -->
  </div>
</template>
<script>
import { oneTableWithViewTemplateMixins } from "@/components/mixins/oneTableWithViewTemplateMixins";
import { crmApis } from "@/api/graphQLApiList/crm";
import OneTableTemplate from "@/components/crm/Template/crmonePage";
// import Edit from "./edit";

export default {
  name: "changeowner",
  // 组件混入对象
  mixins: [oneTableWithViewTemplateMixins],
  components: {
    OneTableTemplate,
    // Edit
  },
  data() {
    return {
      // 网格查询API配置对象
      apiConfig: crmApis.mdmDlrCustInfoQuery, //客户信息查询
      searchField:'哈喽最近好吗周杰伦',
      // 动态组件-按钮
      tableButtons: [
        {
          compKey: "btnKey3",
          type: "",
          size: "small",
          clickEvent: () => this.add(),
          text: "新增"
        },
      ],
      // 动态组件-查询条件
      tableComponents: [
        
        {
          compKey: "compKey1",
          labelName: "VIN码",
          codeField: "vin",
          component: () => import("@/components/crm/textbox/crmTextInput"),
          type: "inputText",
          isMust: false
      },
        {
          compKey: "compKey2",
          labelName: "车牌号",
          codeField: "carLicenseNo",
          component: () => import("@/components/crm/textbox/crmTextInput"),
          type: "inputText",
          isMust: false
        },
        {
          compKey: "compKey3",
          labelName: "客户名称",
          codeField: "custName",
          component: () => import("@/components/crm/textbox/crmTextInput"),
          type: "inputText",
          isMust: false
        },
        {
          compKey: "compKey4",
          labelName: "UID",
          codeField: "uid",
          component: () => import("@/components/crm/textbox/crmTextInput"),
          type: "inputText",
          isMust: false
        },
        {
          compKey: "compKey5",
          labelName: "电话",
          codeField: "phone",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: false
        },
        {
          compKey: "compKey6",
          labelName: "关系",
          codeField: "uid",
          component: () =>
            import("@/components/crm/lookupValue/lookupvalue"),
          type: "dropdownList",
          isMust: false
        },
        {
          compKey: "compKey7",
          labelName: "客户类型",
          codeField: "custClassCode",
          lookuptype: "LX011",
          component: () =>
            import("@/components/crm/lookupValue/lookupvalue"),
          type: "dropdownList",
          isMust: false
        }
      ],
      // 动态生成网格列
      tableCols: [
        {
          prop: "controlBtn",
          label: "操作",
          codeField: "controlBtn",
          width: 200,
          align: "center",
          isComponent: true,
          comps: [
            {
              compKey: "propKey1",
              labelName: "修改",
              codeField: "editControlBtn",
               clickEvent: (index)=>{this.edit(index)},
              component: () => import("@/components/org/linkButton"),
              align: "center"
            },
            {
              compKey: "propKey2",
              labelName: "解除关系",
              codeField: "editControlBtn",
               clickEvent: (index)=>{this.delet(index)},
              component: () => import("@/components/org/linkButton"),
              align: "center"
            }
          ]
        },
        { prop: "vin", label: "VIN码", width: null, align: "center" },
        {
          prop: "carLicenseNo",
          label: "车牌号",
          width: null,
          align: "center"
        },
        {
          prop: "custClassCode",
          label: "客户类型",
          width: null,
          align: "center"
        },
        {
          prop: "uid",
          label: "UID",
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
          prop: "custName",
          label: "车系",
          width: null,
          align: "center"
        },
        {
          prop: "custName",
          label: "车型",
          width: null,
          align: "center"
        },
        {
          prop: "custName",
          label: "交车时间",
          width: null,
          align: "center"
        },
        {
          prop: "custName",
          label: "状态",
          width: null,
          align: "center"
        },
        {
          prop: "custName",
          label: "备注",
          width: null,
          align: "center"
        },
      ],
      //表单查询数据
      formField: {
        custName:"",
        vin:"",
        uid:"",
        carLicenseNo:"",
        phone:"",
        custClassCode:""
        // ChangeDLR: "",
        // VIN: "",
        // CarNo: "",
        // NewCustName: "",
        // NewPhone: "",
        // OldCustName: "",
        // OldPhone: "",
        // AuditStatus: "",
        // ChangeDate: ""
      }
    };
  },
  methods:{
    edit(currentRow) {
      debugger
      let selectData = this.$refs.multipleTable.list[currentRow];
      this.$router.push({ name: "changeowner", params: selectData });
    },
    add() {
      this.$router.push({ name: "adduser"});
    },
  }
};
</script>
