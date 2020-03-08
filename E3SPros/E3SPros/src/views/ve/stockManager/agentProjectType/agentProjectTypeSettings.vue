<!--
* description: 代办项目类型设置
* author: dinggf
* createdDate: 2019-10-19
-->
<template>
  <div class="app-container app-container-table">
    <one-table-template ref="multipleTable"
      :dynamicButtons="tableButtons"
      :dynamicComponents="tableComponents"
      :dynamicApiConfig="apiConfig"
      :dynamicTableCols="tableCols"
      :dynamicFormFields="formField"
      :dynamicIsShowSelect="false"
      :dynamicIsInitTable="true"
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
import { veApis } from "@/api/graphQLApiList/ve";
import { requestGraphQL } from "@/api/commonRequest";
import OneTableTemplate from "@/components/templates/oneTable";
import { oneTableWithViewTemplateMixins } from "@/components/mixins/oneTableWithViewTemplateMixins";
import Edit from "./edit";
export default {
  name: "agentProjectTypeSettings",
  mixins: [oneTableWithViewTemplateMixins],
  components: {
    OneTableTemplate,
    Edit
  },
  mounted() {
    this.$refs.multipleTable.queryTable(1);
  },
  data() {
    return {
      //设置是否显示更多按钮
      isMoreBtn: false,
      // 网格查询API配置对象
      apiConfig: veApis.veBuAgentProjectTypeMutationSave,

      // 动态组件-按钮
      tableButtons: [
        {
          compKey: "btnKey1",
          type: "primary",
          size: "small",
          clickEvent: () => this.queryTable(1),
          text: this.$t("sys.button.query")
        }, //查询
        {
          compKey: "btnKey2",
          type: "",
          size: "small",
          clickEvent: () => this.reset(),
          text: this.$t("sys.button.reset")
        }, //重置
        {
          compKey: "btnKey3",
          type: "",
          size: "small",
          clickEvent: () => this.add(),
          text: this.$t("sys.button.add")
        }, //新增
      ],

      // 动态组件-查询条件
      tableComponents: [
        // 组织类型（值列表）
        {
          compKey: "compKey1",
          labelName: this.$t('ve.label.proName'),
          codeField: "agentProjectName",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        }, //项目名称
        {
          compKey: "compKey2",
          labelName: this.$t('ve.label.isEnable'),
          codeField: "isEnable",
          // isMul: false,
          component: () => import("@/components/org/isEnable/isEnable"),
          type: "dropdownList",
          isMust: true
        }, //是否启用
        {
          compKey: "compKey3",
          labelName: this.$t('ve.label.carBrand'),
          codeField: "carBrandCode",
          isMul: false,
          component: () => import("@/components/org/carBrand/carBrand"),
          type: "dropdownList",
          isMust: true
        } //品牌
      ],

      // 动态生成网格列
      tableCols: [
        {
          prop: "controlBtn",
          label: this.$t('sys.content.operate'),
          codeField: "controlBtn",
          width: 60,
          align: "center",
          fixed: true,
          isComponent: true,
          comps: [
            {
              compKey: "propKey0",
              align: 'center',
              labelName: this.$t("sys.button.edit"),
              codeField: "editControlBtn",
              clickEvent: this.edit,
              component: () => import("@/components/org/linkButton"),
            }
          ]
        },
        { prop: "agentProjectCode", label: this.$t('ve.label.proCode'), width: null, align: "center" },
        { prop: "carBrandCn", label: this.$t('ve.label.carBrand'), width: null, align: "center" },
        {
          prop: "carBrandCode",
          label: this.$t('ve.label.carBrandCode'),
          width: null,
          align: "center",
          hidden: true
        },
        { prop: "agentProjectName", label: this.$t('ve.label.proName'), width: null, align: "center" },
        { prop: "isEnable", label: this.$t('ve.label.enableStyle'), width: null, align: "center" },
        {
          prop: "isSysInlay",
          label: this.$t('ve.label.isSysInlay'),
          width: null,
          align: "center"
        },
        {
          prop: "isSysCode",
          label: this.$t('ve.label.isSysCode'),
          width: 150,
          align: "center",
          hidden: true
        }
      ],
      //查询条件
      formField: {
        agentProjectName: "",
        isEnable: "",
        carBrandCode: ""
      },
      titletitle: this.$t('ve.label.ProjectTypeToSets'),
      // 是否使用刷新Key的方式刷新弹窗
      resetDialogKey: false
    };
  },
  methods: {
    // save() {
    //   const that = this.$refs.multipleTable;
    //   that.listLoading = true;
    //   let queryObj = {
    //     // 保存mutation
    //     type: "mutation",
    //     // api配置
    //     apiConfig: this.apiConfig,
    //     //条件/实体参数（变量），根据typeParam中的定义配置
    //     variables: {
    //       //当前中台使用的名称有dataInfo、info，具体查看API文档
    //       dataInfo: that.formField
    //     }
    //   };
    //   //转换了中台请求格式数据
    //   var paramD = this.$refs.multipleTable.$getParams(queryObj);
    //   // 调用中台API方法（可复用）
    //   requestGraphQL(paramD).then(response => {
    //     if (response.data[queryObj.apiConfig.ServiceCode].result === "1") {
    //       this.$refs.multipleTable.queryTable(1, null, 1, this.formField);
    //       that.listLoading = false;
    //       that.dialogFormVisible = false;
    //       that.$message({
    //         message: "保存成功",
    //         type: "success",
    //         duration: 2000
    //       });
    //     } else {
    //       this.$message({
    //         message:
    //           "保存失败：" +
    //           response.data[queryObj.apiConfig.ServiceCode].msg,
    //         type: "warn",
    //         uration: 2000
    //       });
    //     }
    //   });
    // }
  }
};
</script>

