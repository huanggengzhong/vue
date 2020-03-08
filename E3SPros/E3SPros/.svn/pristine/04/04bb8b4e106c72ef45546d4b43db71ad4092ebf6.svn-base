<!--
* description: 经销商信息管理
* author: dinggf
* createdDate: 2019-10-22
-->
<template>
  <div class="app-container app-container-table">
    <TreeTable
      ref="multipleTable"
      :treeObject="treeObject"
      :dynamicButtons="tableButtons"
      :dynamicComponents="tableComponents"
      :dynamicFormFields="formField"
      :dynamicTableCols="tableCols"
      :dynamicApiConfig="apiConfig"
      :dynamicIsShowMoreBtn="isMoreBtn"
      :dynamicTableOtherHeight="conHeight"
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
import { orgApis } from "@/api/graphQLApiList/org";
import TreeTable from "@/components/templates/treeTable";
import OneTableTemplate from "@/components/templates/oneTable";
import { oneTableWithViewTemplateMixins } from "@/components/mixins/oneTableWithViewTemplateMixins";
import Edit from "./edit";
export default {
  mixins: [oneTableWithViewTemplateMixins],
  name: "dlrInfoManages",
  components: {
    TreeTable,
    Edit
  },
  mounted() {
    //调用加载树的方法 params1 父节点ID, params2当前节点id
    this.$refs.multipleTable.queryOrganization("parentOrgTreeId", "orgTreeId");
  },
  data() {
    return {
      //树对象
      treeObject: {
        // 配置树网格查询API配置对象
        treeApiConfig: orgApis.mdmOrgRelationRealQueryByPage,
        // 树接口需要返回的字段
        returnTreeCol: [
          "dlrFullName",
          "areaId",
          "areaName",
          "bigAreaId",
          "bigAreaName",
          "smallAreaId",
          "smallAreaName",
          "orgTreeId",
          "linkId",
          "parentOrgTreeId"
        ],
        // 树的查询条件
        // orgTreeId:'-1',
        treeQuery: {
          // orgTreeId:'-1'
        },
        //排序的对象 label现在是名字 , children 子节点
        defaultProps: {
          children: "children",
          label: "orgName"
        }
      },
      conHeight: 35,
      //设置是否显示更多按钮
      isMoreBtn: true,
      // 网格查询API配置对象
      apiConfig: orgApis.mdmOrgdlrQueryByPage,
      //动态组件-按钮
      tableButtons: [
        {
          compKey: "btnKey1",
          type: "",
          size: "small",
          clickEvent: () => this.queryTable(1),
          text: this.$t("sys.button.query"),
          name: 'search',
          position: 'right',
          fuzzySearch: true,
          isMust: false
        }, //查询
        {
          compKey: "btnKey2",
          type: "",
          size: "small",
          clickEvent: () => this.add(),
          text: this.$t("sys.button.add"),
          name: 'add',
          position: 'left'
        }, //新增
        {
          compKey: "btnKey3",
          type: "",
          size: "small",
          clickEvent: () => this.reset(),
          text: this.$t("sys.button.reset"),
          name: 'reset',
          position: 'right',
          isMust: false
        }, //重置
        {
          compKey: "btnKey4",
          type: "",
          size: "small",
          clickEvent: () => this.exportExcel(),
          text: this.$t("sys.button.export"),
          name: 'export',
          position: 'left'
        } //导出
      ],
      // 动态组件-查询条件
      tableComponents: [
        {
          compKey: "compKey1",
          span: 8,
          labelName: "门店代码",
          codeField: "dlrCode",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        }, //门店代码
        {
          compKey: "compKey2",
          span: 8,
          labelName: "门店名称",
          codeField: "dlrShortName",
          isRequire: false,
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        }, //门店名称
        {
          compKey: "compKey3",
          span: 8,
          labelName: "门店大类",
          codeField: "orgType",
          lookuptype: 'VE0079',
          isRequire: false,
          component: () => import("@/components/org/LookupValue"),
          type: "dropdownList",
          isMust: true
        }, //门店大类
        {
          compKey: "compKey4",
          span: 8,
          labelName: "是否启用",
          codeField: "isEnable",
          isRequire: false,
          component: () => import("@/components/org/isEnable/isEnable"),
          type: "dropdownList",
          isMust: false
        }, //是否启用
        {
          compKey: "compKey5",
          span: 8,
          labelName: "上线状态",
          lookuptype: 'VE0079',
          codeField: "dlrStatus",
          isRequire: false,
          component: () => import("@/components/org/LookupValue"),
          type: "dropdownList",
          isMust: false
        }, //上线状态
        {
          compKey: "compKey6",
          span: 8,
          labelName: "门店类型",
          codeField: "orgTypeName",
          isRequire: false,
          component: () => import("@/components/org/LookupValue"),
          type: "dropdownList",
          isMust: false
        } //门店类型
      ],
      //动态生成网格列
      tableCols: [
        { prop: 'controlBtn', label: this.$t('sys.content.operate'), codeField: 'controlBtn',width: 60, align: 'center' , isComponent: true,
            comps: [
              {compKey: 'propKey0', labelName:this.$t('sys.button.edit'),  codeField: 'editControlBtn', clickEvent: this.edit, component: () => import('@/components/org/linkButton')},
            ]
        },
        { prop: 'dlrCode', label: '门店代码', hidden: null, align: 'center' },
        { prop: 'dlrShortName', label: '门店名称', hidden: null, align: 'center' },
        { prop: 'dlrFullName', label: '门店全称', hidden: null, align: 'center' },
        { prop: 'orgType', label: '门店大类', hidden: null, align: 'center' },
        { prop: 'orgTypeName', label: '门店类型', hidden: null, align: 'center' },
        { prop: 'dlrStatus', label: '上线状态', hidden: null, align: 'center' },
        { prop: 'onlineTime', label: '上线时间', hidden: null, align: 'center' },
        { prop: 'isEnable', label: '是否启用', hidden: null, align: 'center' },
        { prop: 'cityName', label: '所属城市公司', hidden: null, align: 'center' },
        
        { prop: 'provinceName', label: '省份', hidden: true, align: 'center' },
        { prop: 'cityName', label: '城市', hidden: true, align: 'center' },
        { prop: 'countyName', label: '区县', hidden: true, align: 'center' },
        { prop: 'userName', label: '管理员账号', hidden: true, align: 'center' },
        { prop: 'password', label: '管理员密码', hidden: true, align: 'center' },
        { prop: 'roleId', label: '管理员角色', hidden: true, align: 'center' },
        { prop: 'address', label: '建店地址', hidden: true, align: 'center' },
        { prop: 'dlrStatusName', label: '建店状态', hidden: true, align: 'center' },
        { prop: 'dlrEnName', label: '门店英文名', hidden: true, align: 'center' },
        { prop: 'greatName', label: '曾用名', hidden: true, align: 'center' },
        { prop: 'stockRight', label: '股权', hidden: true, align: 'center' },
        { prop: 'climateStatus', label: '气候状态', hidden: true, align: 'center' },
        { prop: 'closingTime', label: '停业时间', hidden: true, align: 'center' },
        { prop: 'registeredCapital', label: '注册资金', hidden: true, align: 'center' },
        { prop: 'organizationalCode', label: '组织结构代码', hidden: true, align: 'center' },
        { prop: 'dlrLevel', label: '门店级别', hidden: true, align: 'center' },
      ],
      //查询条件
      formField:{
        dlrCode: '',
        dlrShortName:'',
        bigAreaName:'',
        isEnable:'',
        dlrStatus:'',
        orgType:''
      },
      orgClickData:{}
    };
  },
  methods: {
    // 绑定单击树的事件
    handleNodeClick(data) {
      this.orgClickData = data
      // this.formField.orgName = data.orgName
      this.formField.orgId = data.smallAreaId
      this.$refs.multipleTable.queryTable(1)
    }
  },
  created() {}
};
</script>

<style>
</style>