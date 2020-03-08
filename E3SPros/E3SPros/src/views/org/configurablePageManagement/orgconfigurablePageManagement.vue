<!--
* description: 可配置化页面管理
* author: linzewen
* createdDate: 2019-09-11
-->
<template>
  <div class="app-container app-container-table">
    <div >
      <one-table-template
        ref="multipleTable"
        :dynamicButtons="tableButtons"
        :dynamicComponents="tableComponents"
        :dynamicApiConfig="apiConfig"
        :dynamicTableCols="tableCols"
        :dynamicFormFields="formField"
        :dynamicIsShowSelect="false"
        :dynamicIsShowMoreBtn="true"
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
    <!-- <div v-if="showPageOne" >
      <keep-alive>
        <PageComponentsOrg @tranPageOne="pageCom" ref="pageComponentsOrgRef" />
      </keep-alive>
    </div>
    <div v-if="showPageTwo">
      <keep-alive>
        <PageTableOrg @tranPageTwo="pageTab" ref="pageTableOrgRef" />
      </keep-alive>
    </div> -->
  </div>
</template>

<script>
import { oneTableWithViewTemplateMixins } from '@/components/mixins/oneTableWithViewTemplateMixins';
import { orgApis } from "@/api/graphQLApiList/org";
import OneTableTemplate from "@/components/templates/oneTable";
import Edit from "./edit";
import PageComponentsOrg from "./pageComponentsOrg";
import PageTableOrg from "./pageTableOrg";
import { tagsViewMixin } from '@/layout/components/TagsView/tagsViewMixin'


export default {
  name: "orgconfigurablePageManagement",
  // 组件混入对象
  mixins: [oneTableWithViewTemplateMixins,tagsViewMixin],
  components: {
    OneTableTemplate,
    Edit,
    PageComponentsOrg,
    PageTableOrg
  },
  data() {
    return {
      showPageOne: false,
      showPageTwo: false,
      // 网格查询API配置对象
      apiConfig: orgApis.proConfigPageviewQueryByPage,
      // 动态组件-按钮
      tableButtons: [
        {
          compKey: "btnKey1",
          type: "primary",
          size: "small",
          clickEvent: () => this.queryTable(1),
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
        },
        {
          compKey: "btnKey5",
          type: "",
          size: "small",
          clickEvent: () => this.openPageOne(),
          text: "页面组件管理"
        },
        {
          compKey: "btnKey6",
          type: "",
          size: "small",
          clickEvent: () => this.openPageTwo(),
          text: "页面网格列管理"
        }
      ],
      // 动态组件-查询条件
      tableComponents: [
        {
          compKey: "compKey1",
          labelName: "所属模块",
          codeField: "moduleCode",
          lookuptype: "DB0001",
          component: () => import("@/components/org/LookupValue"),
          type: "dropdownList",
          isMust: true,
          isMul: false
        },
        {
          compKey: "compKey2",
          labelName: "页面名称",
          codeField: "pageName",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        },
        {
          compKey: "compKey3",
          labelName: "页面标识",
          codeField: "pageCode",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        },
        {
          compKey: "compKey4",
          labelName: "状态",
          codeField: "isEnable",
          component: () => import("@/components/org/isEnable/isEnable"),
          type: "dropdownList",
          isMust: true
        },
        {
          compKey: "compKey5",
          labelName: "页面类型",
          codeField: "pageType",
          lookuptype: "VE0189",
          component: () => import("@/components/org/LookupValue"),
          type: "dropdownList",
          isMust: false,
          isMul: false
        }
      ],
      // 动态生成网格列
      tableCols: [
        {
          prop: "controlBtn",
          label: "操作",
          codeField: "controlBtn",
          width: 80,
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
        // {
        //   prop: "moduleName",
        //   label: "所属模块名称",
        //   width: 130,
        //   align: "center"
        // },
        {
          prop: "moduleCode",
          label: "所属模块编码",
          align: "center",
          width: 120
          // hidden: true
        },
        { prop: "pageName", label: "页面名称", width: 120, align: "center" },
        { prop: "pageId", label: "页面Id", width: null, align: "center" ,hidden: true},
        { prop: "pageCode", label: "页面标识", width: 100 , align: "center" },
        { prop: "isEnable", label: "是否启用", width: null, align: "center" },
        { prop: "pageType", label: "页面类型", width: null, align: "center" },
        { prop: "pageArea", label: "页面区域", width: null, align: "center" },
        { prop: "creator", label: "创建人", width: null, align: "center" },
        { prop: "createdDate", label: "创建时间", width: 150, align: "center" },
        {
          prop: "modifier",
          label: "最后修改人",
          width: null,
          align: "center"
        },
        {
          prop: "lastUpdatedDate",
          label: "最后修改时间",
          width: 150,
          align: "center"
        },
        {
          prop: "updateControlId",
          label: "并发ID",
          width: null,
          align: "center",
          hidden: true
        }
      ],
      //表单查询数据
      formField: {
        moduleCode: "",
        pageName: "",
        isEnable: "",
        pageType: "",
        pageCode: ""
      }
    };
  },
  mounted() {
    // 调用AppMain中的方法设置网格高度（自适应）
    if (!this.showPageOne) {
      var parent = this.$utils.getParentView(this.$route.path, this.$parent);
      if (parent) {
        parent.setTableHeight();
      }
    }
  },
  methods: {
    openPageOne(pageCom) {
      // this.showPageOne = true;
      // debugger
      var currentRow = this.$refs.multipleTable.currentRow;
      if(null === currentRow || undefined === currentRow){
        this.$message({
          message: "请选中一行数据！",
          type: "warning",
          duration: 2000
        });
        return
      }
      this.$router.push({ name: `orgconfigurablePageComponentsManagement`,query:{pageName: currentRow.pageName,pageId:currentRow.pageId}})
      // this.closeCurrentView()
      // this.$refs.pageComponentsOrgRef.$refs.multipleTable.formField.pageName = currentRow.pageName;
      // this.$refs.multipleTable.$refs.pageComponentsOrgRef.$refs.multipleTable.formField.pageId = currentRow.pageId
    },
    // pageCom(val) {
    //   this.showPageOne = false;
    // },
    openPageTwo(pageTab) {
      var currentRow = this.$refs.multipleTable.currentRow;
      if(null === currentRow || undefined === currentRow){
        this.$message({
          message: "请选中一行数据！",
          type: "warning",
          duration: 2000
        });
        return
      }
      this.$router.push({ name: `orgconfigurablePageTableManagement`,query:{pageName: currentRow.pageName,pageId:currentRow.pageId}})
    },
    // pageTab(val) {
    //   this.showPageTwo = false;
    // },
  }
};
</script>
