<!--
* description: 经销商销售扩展信息
* author: dinggf
* createdDate: 2019-10-23
-->
<template>
  <div class="app-container app-container-table">
    <one-table-template ref="multipleTable"
      :dynamicButtons="tableButtons"
      :dynamicComponents="tableComponents"
      :dynamicApiConfig="apiConfig"
      :dynamicTableCols="tableCols"
      :dynamicFormFields="formField"
      :dynamicIsShowMoreBtn="isMoreBtn"
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
import { orgApis } from "@/api/graphQLApiList/org";
import { requestGraphQL } from "@/api/commonRequest";
import OneTableTemplate from "@/components/templates/oneTable";
import { oneTableWithViewTemplateMixins } from "@/components/mixins/oneTableWithViewTemplateMixins";
import Edit from "./edit";
export default {
  name: "dlrSales",
  mixins: [oneTableWithViewTemplateMixins],
  components: {
    OneTableTemplate,
    Edit
  },
  data() {
    return {
      svFields: '经销商类型',
      //设置是否显示更多按钮
      isMoreBtn: true,
      // 网格查询API配置对象
      apiConfig: orgApis.mdmOrgDlrQuerySaleList,
      // 动态组件-按钮
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
          clickEvent: () => this.exportExcel(),
          text: this.$t("sys.button.export"),
          name: 'export',
          position: 'left'
        }, //导出
        {
          compKey: "btnKey3",
          type: "",
          size: "small",
          clickEvent: () => this.reset(),
          text: this.$t("sys.button.reset"),
          name: 'reset',
          position: 'right',
          isMust: false
        } //重置
      ],
      // 动态组件-查询条件
      tableComponents: [
        // 组织类型（值列表）
        {
          compKey: "compKey1",
          labelName: this.$t('ve.label.carBrand'),
          codeField: "carBrandCode",
          isMul: false,
          component: () => import("@/components/org/carBrand/carBrand"),
          type: "dropdownList",
          isMust: false
        }, //品牌
        {
          compKey: "compKey2",
          labelName: '经销商简称',
          codeField: "dlrShortName",
          component: () => import("@/components/org/orgDlr"),
          type: "propus",
          isMust: false
        }, //经销商简称
        {
          compKey: "compKey3",
          labelName: '经销商类型',
          codeField: "orgType",
          lookuptype: "DB0062",
          isMul: false,
          component: () => import("@/components/org/LookupValue"),
          type: "dropdownList",
          fuzzySearch: true,
          isMust: false
        }, //经销商类型
        {
          compKey: "compKey4",
          labelName: "含已停用经销商",
          codeField: "isEnable",
          component: () => import("@/components/org/checkBox"),
          type: "checkbox",
          isMust: false
        }, //含已停用经销商
        {
          compKey: "compKey5",
          labelName: '经销商编码',
          span: 6,
          codeField: "dlrCode",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: false
        }, //经销商编码
        {
          compKey: "compKey6",
          labelName: '经销商名称',
          span: 6,
          codeField: "dlrShortName",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: false
        }, //经销商名称
        {
          compKey: "compKey7",
          labelName: '是否维护区域:',
          span: 2,
          codeField: "isRepairArea",
          component: () => import("@/components/org/label"),
          type: "textLabel",
          isMust: false
        }, //是否维护区域
        {
          compKey: "compKey8",
          labelName: "全部区域",
          span: 3,
          codeField: "allArea",
          component: () => import("@/components/org/checkBox"),
          type: "checkbox",
          isMust: false
        }, //全部区域
        {
          compKey: "compKey9",
          labelName: "未维护",
          span: 3,
          codeField: "noRepair",
          component: () => import("@/components/org/checkBox"),
          type: "checkbox",
          isMust: false
        }, //未维护
        {
          compKey: "compKey10",
          labelName: "已维护",
          span: 3,
          codeField: "isRepair",
          component: () => import("@/components/org/checkBox"),
          type: "checkbox",
          isMust: false
        }, //已维护
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
        { prop: "carBrandCn", label: this.$t('ve.label.carBrand'), width: null, align: "center" },
        { prop: "carBrandCode",label: this.$t('ve.label.carBrandCode'), width: null, align: "center", hidden: true },
        { prop: "dlrCode", label: '专营店编码', width: null, align: "center" },
        { prop: "dlrShortName", label: '专营店', width: null, align: "center" },
        { prop: "dlrLevel", label: '专营店等级', width: null, align: "center" },
        { prop: "areaName", label: '地区', width: null, align: "center" },
        { prop: "bigAreaName", label: '大区', width: null, align: "center" },
        { prop: "smallAreaName", label: '小区', width: null, align: "center" },
        { prop: "provinceName", label: '省份', width: null, align: "center" },
        { prop: "cityName", label: '城市', width: null, align: "center" },
        { prop: "orgTypeName", label: '专营店类型', width: null, align: "center" },
        { prop: "isEnable", label: '状态', width: null, align: "center" },
        { prop: "saleTel", label: '销售热线', width: 100, align: "center" },
        { prop: "saleFax", label: '传真(售前)', width: 100, align: "center" },
        { prop: "saleEmail", label: '销售联络EMAIL', width: 100, align: "center" },
        { prop: "saleFax", label: '传真(售前)', width: 100, align: "center" },
        { prop: "sapDlrId", label: 'SAP编码', width: null, align: "center" },

        { prop: "dlrAnswerCode", label: 'ANSWER编码', width: null, align: "center", hidden: true },
        { prop: "driveType", label: '经销商规模', width: null, align: "center", hidden: true },
        { prop: "climateStatus", label: '气候状态', width: null, align: "center", hidden: true },
        { prop: "emissionStandard", label: '排放标准', width: null, align: "center", hidden: true },
      ],
      //查询条件
      formField: {
        carBrandCode: "",
        dlrShortName: "",
        orgType: "",
        dlrCode: "",
        isEnable: ""
      },
    }
  },
}
</script>

<style lang='scss' scoped>
/deep/ .filter-params .el-col label.el-checkbox {
  width: 20%;
  font-size: 12px;
}
/deep/ .el-checkbox .el-checkbox__input {
  margin-right: 80px;
}
/deep/ .filter-params .el-col label {
  width: 60px;
}
/deep/ .table-col>.el-col-2 {
  line-height: 29px !important;
  margin-left: 42px;
}
</style>