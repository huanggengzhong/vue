<!--
* description: 可配置页面组件管理
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
import { oneTableWithViewTemplateMixins } from "@/components/mixins/oneTableWithViewTemplateMixins";
import { orgApis } from "@/api/graphQLApiList/org";
import OneTableTemplate from "@/components/templates/oneTable";
import Edit from "./editComponents";
import { tagsViewMixin } from "@/layout/components/TagsView/tagsViewMixin";

export default {
  name: "orgconfigurablePageComponentsManagement",
  // 组件混入对象
  mixins: [oneTableWithViewTemplateMixins, tagsViewMixin],
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
      apiConfig: orgApis.proConfigComponentQueryByPage,
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
          clickEvent: () => this.addNew(),
          text: "新增"
        },
        {
          compKey: "btnKey4",
          type: "",
          size: "small",
          clickEvent: () => this.reset(),
          text: "重置"
        }
        // {
        //   compKey: "btnKey5",
        //   type: "",
        //   size: "small",
        //   clickEvent: () => this.tranPage(),
        //   text: "返回"
        // }
      ],
      // 动态组件-查询条件
      tableComponents: [
        {
          compKey: "compKey1",
          labelName: "所属页面",
          codeField: "pageName",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          // isRequire: true,
          isMust: true,
          disabled: true
        },
        {
          compKey: "compKey2",
          labelName: "所属类型",
          codeField: "compType",
          lookuptype: "VE0189",
          component: () => import("@/components/org/LookupValue"),
          type: "inputText",
          isMust: true
        },
        {
          compKey: "compKey3",
          labelName: "状态",
          codeField: "isEnable",
          component: () => import("@/components/org/isEnable/isEnable"),
          type: "dropdownList",
          isMust: true,
          isMul: false
        },
        {
          compKey: "compKey4",
          labelName: "语言",
          codeField: "lang",
          lookuptype: "VE0189",
          component: () => import("@/components/org/LookupValue"),
          type: "dropdownList",
          // isRequire: true,
          isMust: true,
          isMul: false
        },
        {
          compKey: "compKey5",
          labelName: "页面区域",
          codeField: "pageArea",
          lookuptype: "VE0189",
          component: () => import("@/components/org/LookupValue"),
          type: "dropdownList",
          isMust: false,
          isMul: false
        }
      ],
      // 动态生成网格列
      tableCols: [
        {prop: "controlBtn",label: "操作",codeField: "controlBtn", width: 60, align: "center",isComponent: true,
          comps: [{compKey: "propKey0",labelName: "修改",codeField: "editControlBtn",clickEvent: this.edit,component: () => import("@/components/org/linkButton") }]
        },
        {prop: "compId",label: "主键Id",align: "center",hidden: true},
        {prop: "labelName",label: "标签名称",width: 170, align: "center",hidden: true},
        {prop: "pageId",label: "页面ID", align: "center",hidden: true},
        {prop: "proConfigPageviewExtend.pageName",label: "页面名称",width: 120,align: "center"},
        {prop: "compType",label: "所属类型",width: null,align: "center", hidden: true},
        {prop: "compKey", label: "组件Key", width: 120, align: "center" },
        {prop: "isShowLabel",label: "是否显示标签",width: 120,align: "center"},
        {prop: "proConfigLangExtend.langLabel",label: "标签名称",width: 150,align: "center"},
        {prop: "proConfigLangExtend.langType",label: "标签名称（多语言）",width: 150,align: "center"},
        {prop: "codeField",label: "绑定数据字段",width: 120,align: "center"},
        {prop: "textField",label: "绑定文本字段",width: 120,align: "center"},
        {prop: "parentFields",label: "条件字段",width: null,align: "center"},
        {prop: "component",label: "组件路径",width: 200,align: "center"},
        { prop: "controlType",label: "组件类型", width: null,align: "center"},
        {prop: "isMust",label: "是否默认展示",width: 100,align: "center"},
        {prop: "isMul",label: "是否多选",width: null,align: "center"},
        {prop: "isRequire",label: "是否必填",width: null,align: "center"},
        {prop: "span",label: "行宽比例",width: null,align: "center"},
        {prop: "sort",label: "排序",width: null,align: "center"},
        {prop: "isEnable",label: "是否启用",width: null,align: "center"},
        {prop: "clearable",label: "是否可清除",width: 100,align: "center"},
        {prop: "filterable",label: "是否可过滤",width: 100,align: "center"},
        {prop: "colsId",label: "所属网格列ID",width: 150,align: "center"},
        {prop: "inputType",label: "输入类型",width: null,align: "center"},
        {prop: "dateOptionsType",label: "日期选项类型",width: 120,align: "center"},
        {prop: "format",label: "日期格式",width: null,align: "center"},
        {prop: "dateType",label: "日期类型",width: null,align: "center"},
        {prop: "lookupType",label: "值列表类型",width: 100,align: "center"},
        {prop: "clickEvent",label: "点击事件",width: null,align: "center"},
        {prop: "isSys",label: "是否系统组件",width: 120,align: "center"},
        {prop: "compareField",label: "比较字段",width: null,align: "center"},
        {prop: "compareValue",label: "比较值",width: null,align: "center"},
        {prop: "contWay",label: "计算表达式",width: 100,align: "center"},
        {prop: "pageArea",label: "页面区域",width: null,align: "center"},
        {prop: "updateControlId",label: "并发ID", width: null,align: "center",hidden: true}
      ],
      tableHeight: 310,
      //表单查询数据
      formField: {
        pageName: this.$route.query.pageName,
        pageId: this.$route.query.pageId,
        compType: "",
        isEnable: "",
        lang: "en"
      },
      unFormField:{
        pageName:""
      }
    };
  },
  methods: {
    addNew() {
      var newFormField = {
        pageName: this.formField.pageName,
        pageId: this.formField.pageId
      };
      this.add(newFormField);
    }
  }
};
</script>
