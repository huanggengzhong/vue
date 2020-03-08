<!--**
* description:银行信息维护
* author: wangcx
* createdDate: 2019-09-18
*-->
<template>
  <div class="app-container app-container-table">
    <one-table-template
      ref="multipleTable"
      :dynamicButtons="tableButtons"
      :dynamicComponents="tableComponents"
      :dynamicApiConfig="apiConfig"
      :dynamicTableCols="tableCols"
      :dynamicFormFields="formField"
      :dynamicIsShowSelect="false"
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
import { requestGraphQL } from "@/api/commonRequest";
import { oneTableWithViewTemplateMixins } from "@/components/mixins/oneTableWithViewTemplateMixins";
import { veApis } from "@/api/graphQLApiList/ve";
import OneTableTemplate from "@/components/templates/oneTable";
import Edit from "./edit";
import { CacheConfig } from "@/cache/configCache/index";
export default {
  name: "veDbDlrBankQuery",
  // 组件混入对象
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
      // 网格查询API配置对象
      apiConfig: veApis.veDbDlrBankQueryFindAll,
      // 动态组件-按钮
      tableButtons: [
        {
          compKey: "btnKey4",
          type: "",
          size: "small",
          clickEvent: () => this.exportExcel(),
          text: this.$t("sys.button.export") //导出
        },

        {
          compKey: "btnKey2",
          type: "",
          size: "small",
          clickEvent: this.add,
          text: this.$t("ve.label.addBank") //新增银行
        }
      ],
      // 动态组件-查询条件
      tableComponents: [],
      // 动态生成网格列
      tableCols: this.getCols(),
      //表单查询数据
      formField: {
        groupCode: "",
        oemCode: "",
        carBrandCode: "",
        dlrId: "",
        bankId: "",
        bankCode: "",
        bankName: "",
        // bankTypeName:"",
        bankTypeId: "",
        financeOrgTypeId: "",
        // financeOrgTypeName: "",
        isEnable: ""
      }
    };
  },
  methods: {
    getCols() {
      var cols = [
        {
          prop: "controlBtn",
          label: this.$t("org.label.operation"), //操作
          codeField: "controlBtn",
          width: 120,
          align: "center",
          isComponent: true,
          comps: [
            {
              compKey: "propKey0",
              labelName: this.$t("org.label.edit"), //编辑
              codeField: "editControlBtn",
              clickEvent: this.edit,
              component: () => import("@/components/org/linkButton")
            },
            {
              compKey: "propKey1",
              labelName: this.$t("org.label.delete"), //删除
              codeField: "delControlBtn",
              clickEvent: this.delete,
              component: () => import("@/components/org/linkButton")
            }
          ]
        },
        { prop: "bankId", label: "银行ID", hidden: true, align: "center" },
        {
          prop: "carBrandCode",
          label: "品牌编码",
          hidden: true,
          align: "center"
        },
        {
          prop: "carBrandCn",
          label: "品牌名称",
          hidden: true,
          align: "center"
        },
        { prop: "dlrId", label: "经销商ID", hidden: true, align: "center" },
        { prop: "dlrCode", label: "经销商编码", hidden: true, align: "center" },
        {
          prop: "dlrShortName",
          label: "经销商名称",
          hidden: true,
          align: "center"
        },
        {
          prop: "bankTypeId",
          label: "银行类型ID",
          hidden: true,
          align: "center"
        },
        {
          prop: "financeOrgTypeId",
          label: "金融机构ID",
          hidden: true,
          align: "center"
        },
        //银行编码
        {
          prop: "bankCode",
          label: this.$t("ve.label.bankCode"),
          align: "center"
        },
        //银行名称
        {
          prop: "bankName",
          label: this.$t("ve.label.bankName"),
          align: "center"
        },
        //银行地址
        {
          prop: "bankAddr",
          label: this.$t("ve.label.bankAddr"),
          align: "center"
        },
        //银行类型名称
        {
          prop: "bankTypeId",
          label: this.$t("ve.label.bankTypeName"),
          align: "center",
          hidden:true
        },
        // 银行类型名称
        {
          prop: "bankTypeName",
          label: this.$t("ve.label.bankTypeName"),
          align: "center"
        },
        //金融机构名称
        {
          prop: "financeOrgTypeId",
          label: this.$t("ve.label.financeOrgTypeName"),
          align: "center",
          hidden:true
        },
        //金融机构名称
        {
          prop: "financeOrgTypeName",
          label: this.$t("ve.label.financeOrgTypeName"),
          align: "center"
        },
        //顺序号
        { prop: "orderNo", label: this.$t("ve.label.orderNo"), align: "center" },
        //并发控制ID
        { prop: "updateControlId", label: this.$t("ve.label.orderNo"),hidden:true, align: "center" }
      ];
      return cols;
    },
    // del() {
    //   console.info("删除");
    // },
    delete() {
      const that = this;

      if (that.selecRowtData == "") {
        this.$message({
          message: this.$t("org.message.moreOneData") /*请至少选择一条数据*/,
          type: "warning"
        });
        return false;
      }
      let queryObj = {
        //保存需要传 type="mutation"
        type: "mutation",
        // api配置
        apiConfig: veApis.veDbDlrBankMutationSave,
        // 需要调用的API服务配置
        apiServices: [
          {
            //表格中台返回网格的字段
            apiQueryRow: []
          }
        ],
        //条件/实体参数（变量），根据typeParam中的定义配置
        variables: {
          pageSize: 1000,
          pageIndex: 1,
          //当前中台使用的名称有dataInfo、info，具体查看API文档
          dataInfo: that.selecRowtData
        }
      };
      //转换了中台请求格式数据
      var paramD = that.$getParams(queryObj);
      requestGraphQL(paramD).then(response => {
        if (response.data[queryObj.apiConfig.ServiceCode].result === "1") {
          this.$message({
            message: this.$t("sys.tips.esTip14") /*删除成功*/,
            type: "success"
          });
          this.queryTable(1);
        }
      });
    }
  }
};
</script>
<style>
</style>
