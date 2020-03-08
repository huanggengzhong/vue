<!--
物流运输时效设置
-->
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
      :rightdynamicFormFields="formObject.formField"
      :dynamicTableOtherHeight="38"
    />
  </div>
</template>
<script>
import { veApis } from "@/api/graphQLApiList/ve";
import TableForm from "@/components/templates/formTable";
import { requestGraphQL } from "@/api/commonRequest";
import OneTableTemplate from "@/components/templates/oneTable";
import { oneTableWithViewTemplateMixins } from '@/components/mixins/oneTableWithViewTemplateMixins';
export default {
  mixins: [oneTableWithViewTemplateMixins],
  name: "velogisticsTransportation",
  components: {
    TableForm
  },
  mounted() {},
  data() {
    return {
      authKey: "a",
      showAuthorz: false,
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
            labelName: "出发地",
            codeField: "placeOfDeparture",
            isMul: false,
            span: 24,
            isRequire: true,
            component: () =>
              import("@/components/ve/wareHouseMulti/wareHouseMulti"),
            type: "dropdownList",
            isMust: true
          },
          {
            compKey: "compKey2",
            span: 24,
            labelName: "类型",
            codeField: "typeName",
            isRequire: true,
            component: () => import("@/components/org/commonInput"),
            type: "inputText",
            isMust: true
          },
          {
            compKey: "compKey4",
            span: 24,
            labelName: "经销商",
            codeField: "dlrId",
            textField: "distributor",
            isRequire: true,
            component: () => import("@/components/org/orgDlr"),
            type: "propus",
            isMust: true
          },
          {
            compKey: "compKey85",
            labelName: "搬入地",
            codeField: "moveIn",
            isMul: false,
            span: 24,
            isRequire: true,
            component: () =>
              import("@/components/ve/wareHouseMulti/wareHouseMulti"),
            type: "dropdownList",
            isMust: true
          },
          {
            compKey: "compKey6",
            span: 24,
            labelName: "运输天数",
            codeField: "transportDays",
            isRequire: true,
            component: () => import("@/components/org/commonInput"),
            type: "inputText",
            isMust: true
          },
          {
            compKey: "compKey7",
            labelName: "是否启用",
            codeField: "isEnable",
            span: 24,
            isRequire: true,
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
            clickEvent: () => this.$refs.multipleTable.rightReset(),
            text: "重置"
          }
        ],
        //查询条件
        formField: {
          placeOfDeparture: "",
          typeName: "",
          distributor: "",
          moveIn: "",
          transportDays: "",
          isEnable: "",
          dlrId: ""
        }
      },
      //设置菜单栏宽度
      // siderWidth: 250,
      //设置是否显示更多按钮
      isMoreBtn: false,
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
          span: 8,
          labelName: "出发地",
          codeField: "placeOfDeparture",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        }
      ],
      // 动态生成网格列
      tableCols: [
        { prop: "placeOfDeparture", label: "出发地", align: "center" },
        { prop: "typeName", label: "类型", width: null, align: "center" },
        { prop: "distributor", label: "经销商", width: 150, align: "center" },
        { prop: "moveIn", label: "搬入地", width: 150, align: "center" },
        {
          prop: "transportDays",
          label: "运输天数",
          width: null,
          align: "center"
        },
        {
          prop: "isEnable",
          label: "状态",
          width: null,
          align: "center",
          isDefalus: true
        }
      ],
      //查询条件
      formField: {
        placeOfDeparture: ""
      }
    };
  },

  methods: {
    reset() {
      this.formField.placeOfDeparture = "";
    },
    save() {
      const that = this.$refs.multipleTable;

      this.$utils.validataMoth(this, "validpage", "formTable");
      if (this.valid) {
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
              message: "保存成功",
              type: "success",
              duration: 2000
            });
          }
        });
      }
    }
  }
};
</script>
