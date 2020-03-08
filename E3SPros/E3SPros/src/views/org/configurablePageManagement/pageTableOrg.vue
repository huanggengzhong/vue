<!--
* description: 可配置页面网格列管理
* author: linzewen
* createdDate: 2019-09-11
-->
<template>
  <div class="app-container app-container-table">
    <one-table-template
      ref="multipleTable"
      :dynamicButtons="tableButtons"
      :dynamicComponents="tableComponents"
      :dynamicApiConfig="apiConfig"
      :dynamicTableCols="tableCols"
      :dynamicFormFields="formField"
      :dynamicUnFormFields="unFormField" 
      :dynamicIsShowSelect="false"
      :dynamicIsColumnDrop="true"
    />

    <edit
      :dynamicEditRowData="editRowData"
      :popupsVisible="editPopupsVisible"
      :key="editPopupsKey"
      :popupsState="editPopupsState"
      @close="close"
    ></edit>
  </div>
</template>
<script>
import { oneTableWithViewTemplateMixins } from '@/components/mixins/oneTableWithViewTemplateMixins';
import { orgApis } from "@/api/graphQLApiList/org";
import OneTableTemplate from "@/components/templates/oneTable";
import Edit from "./editTable";

export default {
  name: "orgconfigurablePageTableManagement",
  // 组件混入对象
  mixins: [oneTableWithViewTemplateMixins],
  components: {
    OneTableTemplate,
    Edit
  },  
  watch:{
    $route(val){
      if(this.formField.pageId !== "" && this.$route.query.pageId !== undefined && this.$route.query.pageId !== this.formField.pageId){
        this.formField.pageId = this.$route.query.pageId;
        this.formField.pageName = this.$route.query.pageName;
        this.queryTable();
      }
    }
  },
   created() {
      if (this.$route.query != null) {
      // 判断传入query参数，初始化数据
      if (this.$route.query.pageId != null && this.$route.query.pageId !== "") {
        this.formField.pageId = this.$route.query.pageId;
        this.formField.pageName = this.$route.query.pageName;
      }
    }
  },
  mounted() {
    this.queryTable();
  },
  data() {
    return {
      // 网格查询API配置对象
      apiConfig: orgApis.proConfigColumnQueryByPage,
      // 动态组件-按钮
      tableButtons: [
        {
          compKey: "btnKey1",
          type: "primary",
          size: "small",
          clickEvent: () => this.queryTable(),
          text: "查询"
        },
        {
          compKey: "btnKey2",
          type: "",
          size: "small",
          clickEvent: () => this.add(),
          text: "新增"
        },
        {
          compKey: "btnKey4",
          type: "",
          size: "small",
          clickEvent: () => this.reset(),
          text: "重置"
        }
      ],
      // 动态组件-查询条件
      tableComponents: [
        {
          compKey: "compKey1",
          labelName: "所属页面",
          codeField: "pageName",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true,
          isRequire: true,
          disabled: true
        },
        {
          compKey: "compKey4",
          labelName: "语言",
          codeField: "lang",
          lookuptype: "VE0189",
          component: () => import("@/components/org/LookupValue"),
          type: "dropdownList",isRequire: true,
          isMust: true, isMul: false
        }
      ],
      // 动态生成网格列
      tableCols: [
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
              labelName: "修改",
              codeField: "editControlBtn",
              clickEvent: this.edit,
              component: () => import("@/components/org/linkButton")
            }
          ]
        },
        {prop: "pageId",label: "页面ID",align: "center",hidden: true},
        {prop: "label",label: "标签名称",align: "center",hidden: true},
        {prop: "prop",label: "对应数据字段",align: "center",hidden: true},
        {prop: "proConfigPageviewExtend.pageName",label: "页面名称",width: 160,align: "center"},
        {prop: "colsId",label: "列ID",width: 270,align: "center"},
        {prop: "isComponent",label: "是否组件",width: null,align: "center"},
        { prop: "proConfigLangExtend.langLabel", label: "标签名称", width: 130, align: "center" },
        {prop: "proConfigLangExtend.langType",label: "标签名称（多语言）",width: 150,align: "center"},
        {prop: "width",label: "列宽",width: null,align: "center"},
        {prop: "align",label: "对齐方式",width: null,align: "center"},
        {prop: "hidden",label: "是否隐藏",width: null,align: "center"},
        {prop: "sort",label: "网格列排序",width: 100,align: "center"},
        {prop: "sortable",label: "是否可排序",hidden: true,align: "center"},
        {prop: "isEnable",label: "是否可用",width: null,align: "center"},
        {prop: "isSys",label: "是否系统列",width: 100,align: "center"},
        {prop: "updateControlId",label: "并发控制Id",hidden: true,align: "center"}
      ],
      //表单查询数据
      formField: {
        pageName: this.$route.query.pageName,
        pageId: this.$route.query.pageId,
        lang: "zh"
      },
      unFormField:{
        pageName:""
      }
    };
  },
  methods: {
    tranPage() {
      this.$emit("tranPageTwo", 1);
    }
  }
};
</script>
