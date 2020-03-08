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
      :dynamicWidth="siderWidth"
      :titlenew="titletitle"
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
  name: "typesOfAgencyProjects",
  components: {
    TableForm
  },
  mounted() {
    this.$refs.multipleTable.queryTable(1);
    this.$refs.multipleTable.formtableButtons[0].text = "新增";
  },
  data() {
    return {
      authKey: "a",
      showAuthorz: false,
      selectDate: {},
      clickRowsData:{},
      //树对象
      formObject: {
        // 配置树网格查询API配置对象
        apiConfig: veApis.veLogisticsTransportationTimelineSettingsSave,
        // 树接口需要返回的字段
        // 动态组件-查询条件
        tableComponents: [
          {
            compKey: "compKey2",
            span: 22,
            labelName: "项目名称",
            codeField: "proName",
            component: () => import("@/components/org/commonInput"),
            type: "inputText",
            isMust: true
          },
          {
            compKey: "compKey7",
            labelName: "是否启用",
            codeField: "isEnable",
            span: 22,
            component: () => import("@/components/org/isEnable/isEnable"),
            type: "dropdownList",
            isMust: true
          },
          {
            compKey: "compKey85",
            labelName: "品牌",
            codeField: "carBrandCode",
            isMul: false,
            span: 22,
            component: () => import("@/components/org/carBrand/carBrand"),
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
            clickEvent: () => this.reset(),
            text: "重置"
          }
        ],
        //查询条件
        formField: {
          proName: "",
          isEnable: "",
          carBrandCode: ""
        }
      },
      //设置菜单栏宽度
      siderWidth: 250,
      //设置是否显示更多按钮
      isMoreBtn: false,
      // 网格查询API配置对象
      apiConfig: veApis.veTypesOfAgencyProjects,
      // 动态组件-按钮
      tableButtons: [
        // {
        //   compKey: "btnKey1",
        //   type: "primary",
        //   size: "small",
        //   clickEvent: () => this.queryTable(1),
        //   text: "查询"
        // },
        // {
        //   compKey: "btnKey2",
        //   type: "",
        //   size: "small",
        //   clickEvent: () => this.reset(),
        //   text: "重置"
        // }
      ],
      // 动态组件-查询条件
      tableComponents: [
        // {
        //   compKey: "compKey1",
        //   span: 8,
        //   labelName: "出发地",
        //   codeField: "placeOfDeparture",
        //   component: () => import("@/components/org/commonInput"),
        //   type: "inputText",
        //   isMust: true
        // }
      ],
      // 动态生成网格列
      tableCols: [
        { prop: "proCode", label: "项目编码", align: "center" },
        { prop: "carBrandCn", label: "品牌", width: null, align: "center" },
        {
          prop: "carBrandCode",
          label: "品牌编码",
          width: null,
          align: "center",
          hidden: true
        },
        { prop: "proName", label: "项目名称", width: 150, align: "center" },
        { prop: "isEnable", label: "启用状态", width: 150, align: "center" },
        {
          prop: "isSysName",
          label: "系统内置",
          width: null,
          align: "center"
        },
        {
          prop: "isSysCode",
          label: "系统内置编码",
          width: 150,
          align: "center",
          hidden: true
        }
      ],
      //查询条件
      formField: {
        // placeOfDeparture: ""
      },
      titletitle: "代办项目类型设置",
      textOfButton: "新增"
    };
  },
    watch:{
        clickRowsData(){
            this.$refs.multipleTable.formtableButtons[0].text = "保存";
        }
    },
  methods: {
    reset() {
      //   debugger;
      this.formObject.formField = {
        proName: "",
        isEnable: "",
        carBrandCode: ""
      };
      this.$refs.multipleTable.formtableButtons[0].text = "新增";
    },
    save() {
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
<style  scoped>
/deep/ .el-main .filter-title {
  display: none;
}
/deep/ .el-main .filter-params {
  display: none;
}
</style>
