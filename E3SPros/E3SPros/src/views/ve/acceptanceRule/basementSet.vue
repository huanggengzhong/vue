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
      :dynamicIsShowMoreBtn="isMoreBtn"
      :dynamicTableOtherHeight="180"
      :rightdynamicFormFields="formObject.formField"
      :dynamicWidth="siderWidth"
    />
  </div>
</template>
<script>
import { veApis } from "@/api/graphQLApiList/ve";
import TableForm from "@/components/templates/tableForm";
import { requestGraphQL } from "@/api/commonRequest";
import OneTableTemplate from "@/components/templates/oneTable";
import { oneTableWithViewTemplateMixins } from '@/components/mixins/oneTableWithViewTemplateMixins';
export default {
  mixins: [oneTableWithViewTemplateMixins],
  name: "basementSet",
  components: {
    TableForm
  },
  mounted() {
    this.queryTable(1);
  },
  data() {
    return {
      authKey: "a",
      showAuthorz: false,
      selectDate: {},
      //树对象
      formObject: {
        // 配置树网格查询API配置对象
        apiConfig: veApis.basementSetSave,
        // 树接口需要返回的字段
        // 动态组件-查询条件
        isMoreBtn: false,
        tableComponents: [
          // {
          //   compKey: "compKey2",
          //   span: 22,
          //   labelName: "类型",
          //   codeField: "typeName",
          //   component: () => import("@/components/org/commonInput"),
          //   type: "inputText",
          //   isMust: true
          // },
          {
            compKey: "compKey1",
            labelName: this.$t("ve.label.departureWarehouse"), //"出发仓库",
            codeField: "startHouseCode",
            isMul: false,
            span: 6,
            component: () =>
              import("@/components/ve/wareHouseMulti/wareHouseMulti"),
            type: "propus",
            isMust: true
          },
          {
            compKey: "compKey2",
            span: 6,
            labelName: this.$t("org.label.dlrName"), // "经销商",
            codeField: "dlrId",
            textField: "distributor",
            component: () => import("@/components/org/orgDlr"),
            type: "propus",
            isMust: true
          },
          {
            compKey: "compKey3",
            labelName: this.$t("ve.label.moveinPlace"), //"搬入地",
            codeField: "moveIn",
            isMul: false,
            span: 6,
            component: () =>
              import("@/components/ve/wareHouseMulti/wareHouseMulti"),
            type: "dropdownList",
            isMust: true
          },
          {
            compKey: "compKey4",
            labelName: this.$t("ve.label.basement"), //"地库",
            codeField: "basement",
            isMul: false,
            span: 6,
            component: () =>
              import("@/components/ve/wareHouseMulti/wareHouseMulti"),
            type: "dropdownList",
            isMust: true
          },
          {
            compKey: "compKey5",
            labelName: this.$t("org.label.isEnable"), //"是否启用",
            codeField: "isEnable",
            span: 6,
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
            clickEvent: () => this.saveForm(),
            text: this.$t("sys.button.save")
          }, //"保存"
          {
            compKey: "btnKey2",
            type: "",
            size: "small",
            clickEvent: () => this.$refs.multipleTable.rightReset(),
            text: this.$t("sys.button.reset")
          } //重置
        ],
        //查询条件
        formField: {
          startHouseCode: "",
          basement: "",
          moveIn: "",
          isEnable: "",
          dlrId: ""
        }
      },
      //设置菜单栏宽度
      siderWidth: 250,
      //设置是否显示更多按钮
      isMoreBtn: true,
      // 网格查询API配置对象
      apiConfig: veApis.basementSetQuery,
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
        } //重置
      ],
      // 动态组件-查询条件
      tableComponents: [
        {
          compKey: "compKey1",
          labelName: this.$t("ve.label.departureWarehouse"), // "出发仓库"
          codeField: "startHouseCode",
          isMul: false,
          span: 6,
          component: () =>
            import("@/components/ve/hostFatoryWareHouse/wareHouseInput"),
          type: "dropdownList",
          isMust: true
        },
        {
          compKey: "compKey2",
          span: 6,
          labelName: this.$t("org.label.dlrName"), //"经销商",
          codeField: "dlrId",
          textField: "distributor",
          component: () => import("@/components/org/orgDlr"),
          type: "propus",
          isMust: true
        },
        {
          compKey: "compKey3",
          labelName: this.$t("ve.label.moveinPlace"), //"搬入地"
          codeField: "moveIn",
          isMul: false,
          span: 6,
          component: () =>
            import("@/components/ve/hostFatoryWareHouse/wareHouseInput"),
          type: "dropdownList",
          isMust: true
        },
        {
          compKey: "compKey4",
          labelName: this.$t("ve.label.basement"), //"地库",
          codeField: "basement",
          isMul: false,
          span: 6,
          component: () =>
            import("@/components/ve/wareHouseMulti/wareHouseMulti"),
          type: "dropdownList",
          isMust: true
        },
        {
          compKey: "compKey5",
          labelName: this.$t("org.label.isEnable"), //"是否启用",
          codeField: "isEnable",
          span: 6,
          component: () => import("@/components/org/isEnable/isEnable"),
          type: "dropdownList",
          isMust: false
        }
      ],
      // 动态生成网格列
      tableCols: [
        {
          prop: "startHouseCode",
          label: this.$t("ve.label.departureWarehouse"),
          align: "center"
        }, //"出发仓库"

        {
          prop: "dlrName",
          label: this.$t("org.label.dlrName"),
          width: 150,
          hidden: true,
          align: "center"
        }, //经销商
        {
          prop: "dlrId",
          label: "经销商ID",
          width: null,
          align: "center",
          hidden: true
        },
        {
          prop: "moveIn",
          label: this.$t("ve.label.moveinPlace"),
          width: 150,
          align: "center"
        }, //"搬入地"
        {
          prop: "basement",
          label: this.$t("ve.label.basement"), //"地库",
          width: null,
          align: "center"
        },
        {
          prop: "isEnable",
          label: this.$t("org.label.isEnable"), //"是否启用",
          width: null,
          align: "center",
          isDefalus: true
        }
      ],
      //查询条件
      formField: {
        startHouseCode: "",
        basement: "",
        moveIn: "",
        isEnable: "",
        dlrId: ""
      }
    };
  },

  methods: {
    reset() {
      this.formField.placeOfDeparture = "";
    },
    saveForm() {
      this.$utils.validataMoth(this, "validpage", "twoForm");
      if (this.valid) {
        const that = this.$refs.multipleTable;
        that.listLoading = true;
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
            this.$refs.multipleTable.queryTable(1, null, 1, this.formField);
            that.listLoading = false;
            that.dialogFormVisible = false;
            that.$message({
              message: this.$t("sys.tips.esTip5"), //"保存成功",
              type: "success",
              duration: 2000
            });
          } else {
            that.$message({
              message: this.$t("sys.tips.esTip10"), //"保存成功",
              type: "warning",
              duration: 2000
            });
          }
        });
      }
    }
  }
};
</script>
