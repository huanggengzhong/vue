<!--
* description: 大客户订单修改
* author: xulfan
* createdDate: 2019-10-23
-->
<template>
  <div class="app-container app-container-table">
    <one-table-template
      ref="multipleTable"
      :dynamicButtons="tableButtons"
      :dynamicComponents="tableComponents"
      :dynamicApiConfig="apiConfig"
      :dynamicTableCols="tableCols"
      :dynamicFormFields="formField"
      :dynamicIsShowSelect="true"
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
</template>
<script>
import { oneTableWithViewTemplateMixins } from "@/components/mixins/oneTableWithViewTemplateMixins";
import { veApis } from "@/api/graphQLApiList/ve";
import OneTableTemplate from "@/components/templates/oneTable";
import Edit from "./edit";

export default {
  name: "bigClientOrderEdit",
  // 组件混入对象
  mixins: [oneTableWithViewTemplateMixins],
  components: {
    OneTableTemplate,
    Edit
  },
  data() {
    return {
      // 网格查询API配置对象
      apiConfig: veApis.veBigClientOrderDQueryByPage,
      // 动态组件-按钮
      tableButtons: [
        {
          compKey: "btnKey1",
          type: "primary",
          size: "small",
          clickEvent: () => this.queryTable(1),
          text: this.$t("sys.button.query") /*查询*/
        },
        {
          compKey: "btnKey2",
          type: "",
          size: "small",
          clickEvent: () => this.edit(),
          text: "订单信息修改" /*订单信息修改*/
        },
        {
          compKey: "btnKey3",
          type: "",
          size: "small",
          clickEvent: () => this.reset(),
          text: this.$t("sys.button.reset") /*重置*/
        }
      ],
      // 动态组件-查询条件
      tableComponents: [
        {
          compKey: "compKey1",
          labelName: "品牌",
          codeField: "carBrandCode",
          component: () => import("@/components/org/carBrand/carBrand"),
          type: "dropdownList",
          isMust: true
        },
        {
          compKey: "compKey2",
          labelName: "订单单号",
          codeField: "purOrderCode",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        },
        {
          compKey: "compKey3",
          labelName: "开始日期",
          codeField: "beginDate",
          component: () => import("@/components/org/datePicker/dateTimePick"),
          type: "dropdownList",
          isMust: true
        },
        {
          compKey: "compKey4",
          labelName: "结束日期",
          codeField: "endDate",
          component: () => import("@/components/org/datePicker/dateTimePick"),
          type: "dropdownList",
          isMust: true
        },
        {
          compKey: "compKey5",
          labelName: "客户名称",
          codeField: "custName",
          component: () => import("@/components/org/commonInput"),
          type: "propus",
          isMust: false
        },
        {
          compKey: "compKey6",
          labelName: "业务代表",
          codeField: "salesMan",
          component: () => import("@/components/org/commonInput"),
          type: "propus",
          isMust: false
        },
        {
          compKey: "compKey7",
          labelName: "下单经销商",
          codeField: "dlrId",
          component: () => import("@/components/org/orgDlr"),
          type: "propus",
          isMust: false
        },
        {
          compKey: "compKey8",
          labelName: "交车经销商",
          codeField: "deliveryDlrId",
          component: () => import("@/components/org/orgDlr"),
          type: "inputText",
          isMust: false
        },
        {
          compKey: "compKey9",
          labelName: "车型",
          codeField: "carTypeConfig",
          component: () => import("@/components/org/carTypeConfig"),
          type: "dropdownList",
          isMust: false
        }
      ],
      // 动态生成网格列
      tableCols: [
        {
          prop: "purOrderCode",
          label: "订单单号",
          width: null,
          align: "center"
        },
        {
          prop: "carBrandCode",
          label: "品牌编码",
          width: null,
          align: "center",
          hidden: true
        },
        {
          prop: "carBrandCn",
          label: this.$t("org.label.carBrandCn"), //品牌
          width: null,
          align: "center"
        },
        {
          prop: "custName",
          label: "客户名称",
          width: null,
          align: "center"
        },
        {
          prop: "dlrShortName",
          label: "下单经销商",
          width: null,
          align: "center"
        },
        {
          prop: "deliveryDlrIdName",
          label: "交车经销商",
          width: null,
          align: "center"
        },
        {
          prop: "smallCarTypeCn",
          label: "车型",
          width: null,
          align: "center"
        },
        {
          prop: "carConfigName",
          label: "车型配置",
          width: null,
          align: "center"
        },
        {
          prop: "purOrderTime",
          label: "订单日期",
          width: null,
          align: "center"
        },
        {
          prop: "BusRepresentative",
          label: "业务代表",
          width: null,
          align: "center"
        }
      ],
      //表单查询数据
      formField: {
        carBrandCode: "",
        dlrId: "",
        purOrderCode: "",
        vin: "",
        carConfigId: "",
        carColorId: "",
        carIncolorId: "",
        // chooseablePackage: "",  // 选装包 中台无对应字段
        purchaseOrderTypeId: "",
        makeCashTypeId: "",
        outConfirimDateBegin: "",
        outConfirimDateEnd: ""
        // rejectType: ""   // 限制类型 中台无对应字段
      }
    };
  },
  methods: {
  }
};
</script>
