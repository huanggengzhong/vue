<!--
* description: 经销商采购管理-订单余量
* author: liyanm
* createdDate: 2019-07-23
-->
<template>
  <div class="app-container app-container-table ">
    <one-table-template
      ref="multipleTable"
      :dynamicButtons="tableButtons"
      :dynamicComponents="tableComponents"
      :dynamicApiConfig="apiConfig"
      :dynamicTableCols="tableCols"
      :dynamicFormFields="formField"
      :dynamicIsShowSelect="true"
      :dynamicIsInitTable="false"
      :dynamicIsColumnDrop="true"
      :isshowSearchTableButton="false"
      :dynamicIsShowMoreBtn="false"
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
import { oneTableWithViewTemplateMixins } from '@/components/mixins/oneTableWithViewTemplateMixins';
import { orgApis } from "@/api/graphQLApiList/org";
import OneTableTemplate from "@/components/templates/popupsOneTable";
import Edit from "@/views/ve/purchaseOrder/vePurchaseCarManager/editCom/oneCar/edit";

export default {
  name: "vetwoCar",
  // 组件混入对象
  mixins: [oneTableWithViewTemplateMixins],
  components: {
    OneTableTemplate,
    Edit
  },
  data() {
    return {
      // 网格查询API配置对象
      apiConfig: orgApis.mdmVeCarProductQueryListForPage,
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
          compKey: "btnKey4",
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
          labelName: "网点名称",
          codeField: "carBrandCode",
          component: () => import("@/components/org/carBrand/carBrand"),
          type: "dropdownList",
          isMust: true
        },
        {
          compKey: "compKey2",
          labelName: "品牌",
          codeField: "carBrandCode",
          component: () => import("@/components/org/carBrand/carBrand"),
          type: "dropdownList",
          isMust: true
        },
        {
          compKey: "compKey3",
          labelName: "车型",
          codeField: "carBrandCode",
          component: () => import("@/components/org/carTypeConfig"),
          type: "propus",
          isMust: true
        },
        {
          compKey: "compKey4",
          labelName: "车身颜色",
          codeField: "carBrandCode",
          component: () => import("@/components/org/carColor"),
          type: "propus",
          isMust: true
        },
        {
          compKey: "compKey5",
          labelName: "内饰色",
          codeField: "carBrandCode",
          component: () => import("@/components/org/TrimPopupColor"),
          type: "propus",
          isMust: false
        },
        {
          compKey: "compKey6",
          labelName: "客户名称",
          codeField: "carBrandCode",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: false
        }
      ],
      // 动态生成网格列
      tableCols: [
        {
          prop: "controlBtn",
          label: "操作",
          codeField: "controlBtn",
          width: 60,
          align: "center",
          fixed: true,
          isComponent: true,
          comps: [
            {
              compKey: "propKey0",
              labelName: "新增",
              codeField: "editControlBtn",
              clickEvent: this.edit,
              component: () => import("@/components/org/linkButton")
            }
          ]
        },
        { prop: "carBrandCn", label: "品牌", width: null, align: "center" },
        { prop: "smallCarTypeCn", label: "车系", width: null, align: "center" },
        {
          prop: "carConfigCn",
          label: "车型编码",
          width: null,
          align: "center"
        },
        {
          prop: "smallCarTypeCode",
          label: "车型简码",
          width: null,
          align: "center"
        },
        {
          prop: "carConfigCn",
          label: "车型配置",
          width: null,
          align: "center"
        },
        {
          prop: "carColorName",
          label: "车身颜色",
          width: null,
          align: "center"
        },
        {
          prop: "carIncolorName",
          label: "内饰颜色",
          width: null,
          align: "center"
        },
        { prop: "carBrandCn", label: "需求单号", width: null, align: "center" },
        { prop: "carBrandCn", label: "数量", width: null, align: "center" },
        { prop: "carBrandCn", label: "提交网点", width: null, align: "center" },
        {
          prop: "carBrandCn",
          label: "提交人",
          width: null,
          align: "center"
        },
        {
          prop: "supplyStatusCn",
          label: "希望到货日期",
          width: null,
          align: "center"
        },
        {
          prop: "supplyStatusCn",
          label: "需求单状态",
          width: null,
          align: "center"
        },
        {
          prop: "updateControlId",
          label: "并发控制",
          width: null,
          align: "center",
          hidden: true
        }
      ],
      //表单查询数据
      formField: {
        carBrandCode: "",
        purchaseOrderTypeId: "",
        purOrderCode: "",
        cashTypeId: ""
      },
      //是否显示table下面的组件
      isShowComponent: false
    };
  },
  methods: {}
};
</script>
<style scoped>
/deep/ a {
  color: #2971ff;
}
</style>



