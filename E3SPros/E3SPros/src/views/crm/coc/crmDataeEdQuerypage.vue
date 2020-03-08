<!--
* description: 数据导出日志查询
* author: dxuem
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
      :dynamicIsShowMoreBtn="true"
    />
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
import oneTableVue from '@/components/templates/oneTable.vue';
// import edit from "./sendMsg";

export default {
  name: "changeowner",
  // 组件混入对象
  mixins: [oneTableWithViewTemplateMixins],
  components: {
    OneTableTemplate,
    // edit
  },
  data() {
    return {
      // 网格查询API配置对象
      apiConfig: crmApis.pcBuOutputHisQueryFindAll, //数据日志导出查询
      currentRow: null,
      newTable: [],
      // searchValue:
      searchField:'哈喽最近好吗周杰伦',
      // 动态组件-按钮
      tableButtons: [
        {
          compKey: "btnKey4",
          type: "",
          size: "small",
          clickEvent: () => this.export(),
          text: "导出"
        }
      ],
      // 动态组件-查询条件
      tableComponents: [
              {
                compKey: "compKey1",
                labelName: "导出时间",
                codeField: "outputBegDate,outputEndDate",
                component: () =>
                  import("@/components/crm/Time/crmdtDatePicker"),
                type: "date",
                isRequire:true,
                isMust: false,
              },
              {
                compKey: "compKey2",
                labelName: "导出人名称",
                codeField: "userName",
                component: () =>
                  import("@/components/crm/textbox/crmTextInput"),
                type: "inputText",
                isMust: false
              },
            ],
      // 动态生成网格列
      tableCols: [
        {
          prop: "outputDate",
          label: "导出时间",
          width: null,
          align: "center"
        },
        {
          prop: "outputCode",
          label: "导出功能",
          width: null,
          align: "center"
        },
        { prop: "outputCount", label: "导出数量", width: null, align: "center" },
        {
          prop: "loginName",
          label: "导出人账号",
          width: null,
          align: "center"
        },
        {
          prop: "userName",
          label: "导出人名称",
          width: null,
          align: "center"
        },
        {
          prop: "phone",
          label: "导出人电话",
          width: null,
          align: "center"
        },
        {
          prop: "mac",
          label: "MAC地址",
          width: null,
          align: "center"
        },
      ],
      //表单查询数据
      formField: {
        userName: "",
        outputBegDate: "",
        outputEndDate: "",
        dlrCode:this.$store.getters.orgInfo.DLR_CODE
      }
    };
  },
  methods: {
    export(){
      if(this.formField.outputBegDate==""){
        this.$alert('导出时间为空，请选择', '提示')
      }
      else{
        this.exportExcel("数据导出日志", "数据导出日志", "99999")
      }
    }
  }
};
</script>
