<template>
  <div>
    <TableForm
      ref="multipleTable"
      :formObject="formObject"
      :dynamicButtons="tableButtons"
      :dynamicComponents="tableComponents"
      :dynamicFormFields="formField"
      :dynamicTableCols="tableCols"
      :dynamicApiConfig="apiConfig"
      :dynamicTableOtherHeight="180"
      :rightdynamicFormFields="formObject.formField"
      :title="title"
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
import TableForm from "@/components/templates/tableForm";
import { requestGraphQL } from "@/api/commonRequest";
import Edit from "./edit";
import OneTableTemplate from "@/components/templates/oneTable";
import { oneTableWithViewTemplateMixins } from '@/components/mixins/oneTableWithViewTemplateMixins';
export default {
  mixins: [oneTableWithViewTemplateMixins],
  name: "InvoicingMaintenance",
  components: {
    TableForm,
    Edit
  },
  mounted() {},
  data() {
    return {
      showAuthorz: false,
      title: "经销商信息维护",
      selectDate: {},
      //树对象
      formObject: {
        // 配置树网格查询API配置对象
        apiConfig: veApis.veLogisticsTransportationTimelineSettingsSave,
        // 树接口需要返回的字段
        // 动态组件-查询条件
        tableComponents: [
          {
            compKey: "compKey1",
            labelName: "开户银行",
            codeField: "bankName",
            component: () => import("@/components/org/commonInput"),
            type: "inputText",
            isMust: true,
            isRequire: true
          },
          {
            compKey: "compKey2",
            labelName: "账号",
            codeField: "userName",
            component: () => import("@/components/org/commonInput"),
            type: "inputText",
            isMust: true,
            isRequire: true
          },
          {
            compKey: "compKey3",
            labelName: "电话",
            codeField: "phone",
            component: () => import("@/components/org/commonInput"),
            type: "inputText",
            isMust: true
          },
          {
            compKey: "compKey4",
            labelName: "地址",
            codeField: "addr",
            component: () => import("@/components/org/commonInput"),
            type: "inputText",
            isMust: true,
            isRequire: true
          },
          {
            compKey: "compKey5",
            labelName: "税控上传地址",
            codeField: "updataAddr",
            component: () => import("@/components/org/commonInput"),
            type: "inputText",
            isMust: true,
            isRequire: true
          },
          {
            compKey: "compKey6",
            labelName: "税控上传端口",
            codeField: "ksdk",
            component: () => import("@/components/org/commonInput"),
            type: "inputText",
            isMust: true,
            isRequire: true
          },
          {
            compKey: "compKey7",
            labelName: "开票名称",
            codeField: "kpmc",
            component: () => import("@/components/org/commonInput"),
            type: "inputText",
            isMust: true
          },
          {
            compKey: "compKey8",
            labelName: "发动机号是否完整",
            codeField: "fdjhsfwz",
            component: () => import("@/components/org/isEnable/isEnable"),
            type: "dropdownList",
            isMust: true
          },
          {
            compKey: "compKey9",
            labelName: "商检单号是否给空",
            codeField: "sjdhsfgk",
            component: () => import("@/components/org/isEnable/isEnable"),
            type: "dropdownList",
            isMust: true
          }
        ],
        // 动态组件-按钮
        tableButtons: [
          {
            compKey: "btnKey1",
            type: "primary",
            size: "small",
            clickEvent: () => this.save(),
            text: "保存"
          },

          {
            compKey: "btnKey2",
            type: "",
            size: "small",
            clickEvent: () => this.resetForm(),
            text: "重置"
          }
        ],
        //查询条件
        formField: {
          bankName: "",
          sjdhsfgk: "",
          fdjhsfwz: "",
          kpmc: "",
          ksdk: "",
          updataAddr: "",
          addr: "",
          phone: "",
          userName: "",
          bankName: ""
        }
      },
      // 网格查询API配置对象
      apiConfig: veApis.veLogisticsTransportationTimelineSettingsQueryFindAll,
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
          compKey: "btnKey3",
          type: "",
          size: "small",
          clickEvent: () => this.add(),
          text: "新增"
        },
        {
          compKey: "btnKey2",
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
          labelName: "所属厂商",
          codeField: "oemName",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        },
        {
          compKey: "compKey2",
          labelName: "税控编号",
          codeField: "taxControlCode",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        }
      ],
      // 动态生成网格列
      tableCols: [
        {
          prop: "controlBtn",
          label: this.$t("sys.content.operate") /*操作*/,
          codeField: "controlBtn",
          width: 120,
          align: "center",
          isComponent: true,
          comps: [
            {
              compKey: "propKey0",
              labelName: this.$t("sys.button.edit") /*编辑*/,
              codeField: "editControlBtn",
              clickEvent: this.edit,
              component: () => import("@/components/org/linkButton")
            }
          ]
        },
        { prop: "placeOfDeparture", label: "经销商", align: "center" },
        { prop: "typeName", label: "所属厂商", width: null, align: "center" },
        { prop: "distributor", label: "税控编号", width: 150, align: "center" },
        { prop: "moveIn", label: "注册码", width: 150, align: "center" },
        {
          prop: "transportDays",
          label: "税控口令",
          width: null,
          align: "center"
        },
        {
          prop: "transportDays",
          label: "税控数字",
          width: null,
          align: "center"
        }
      ],
      //查询条件
      formField: {
        oemName: "",
        taxControlCode: ""
      }
    };
  },

  methods: {
    reset() {
      this.formField.oemName = "";
      this.formField.taxControlCode = "";
    },
    resetForm() {
      this.formObject.formField.bankName = "";
      this.formObject.formField.sjdhsfgk = "";
      this.formObject.formField.fdjhsfwz = "";
      this.formObject.formField.kpmc = "";
      this.formObject.formField.ksdk = "";
      this.formObject.formField.updataAddr = "";
      this.formObject.formField.addr = "";
      this.formObject.formField.phone = "";
      this.formObject.formField.userName = "";
      this.formObject.formField.bankName = "";
    },
    save() {
      const that = this.$refs.multipleTable;
      //   that.listLoading = true;
      //   if (that.rightFormField.placeOfDeparture === "") {
      //     this.$alert("请先选择出发地", "提示", {
      //       confirmButtonText: "确定",
      //       callback: action => {
      //         this.close();
      //       }
      //     });
      //     that.listLoading = false;
      //     return;
      //   }
      //   if (that.rightFormField.typeName === "") {
      //     this.$alert("请先填写类型", "提示", {
      //       confirmButtonText: "确定",
      //       callback: action => {
      //         this.close();
      //       }
      //     });
      //     that.listLoading = false;
      //     return;
      //   }
      //   if (that.rightFormField.dlrId === "") {
      //     this.$alert("请先选择经销商", "提示", {
      //       confirmButtonText: "确定",
      //       callback: action => {
      //         this.close();
      //       }
      //     });
      //     that.listLoading = false;
      //     return;
      //   }
      //   if (that.rightFormField.moveIn === "") {
      //     this.$alert("请先选择搬入地", "提示", {
      //       confirmButtonText: "确定",
      //       callback: action => {
      //         this.close();
      //       }
      //     });
      //     that.listLoading = false;
      //     return;
      //   }
      //   if (that.rightFormField.transportDays === "") {
      //     this.$alert("请先填写运输天数", "提示", {
      //       confirmButtonText: "确定",
      //       callback: action => {
      //         this.close();
      //       }
      //     });
      //     that.listLoading = false;
      //     return;
      //   }
      //   if (that.rightFormField.isEnable === "") {
      //     this.$alert("请先选择是否有效", "提示", {
      //       confirmButtonText: "确定",
      //       callback: action => {
      //         this.close();
      //       }
      //     });
      //     that.listLoading = false;
      //     return;
      //   }
      let queryObj = {
        // 保存mutation
        type: "mutation",
        // api配置
        apiConfig: this.formObject.apiConfig,
        //条件/实体参数（变量），根据typeParam中的定义配置
        variables: {
          //当前中台使用的名称有dataInfo、info，具体查看API文档
          dataInfo: that.formObject.formField
        }
      };
      //转换了中台请求格式数据
      var paramD = this.$refs.multipleTable.$getParams(queryObj);
      // 调用中台API方法（可复用）
      requestGraphQL(paramD).then(response => {
        if (response.data[queryObj.apiConfig.ServiceCode].result === "1") {
          //   this.$refs.multipleTable.queryTable(1, null, 1, this.formField);
          that.dialogFormVisible = false;
          that.$message({
            message: "保存成功",
            type: "success",
            duration: 2000
          });
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
</style>
