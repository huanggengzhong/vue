<!--
* description: 经销商采购管理-新增-一般/大宗
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
      :dynamicIsShowMoreBtn="true"
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
import Edit from "./edit";

export default {
  name: "veoneCar",
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
          labelName: "品牌",
          codeField: "carBrandCode",
          component: () => import("@/components/org/carBrand/carBrand"),
          type: "dropdownList",
          isMust: true
        },
        {
          compKey: "compKey2",
          labelName: "车型",
          codeField: "carConfigId",
          component: () => import("@/components/org/carTypeConfig"),
          type: "propus",
          isMust: true
        },
        {
          compKey: "compKey3",
          labelName: "车身颜色",
          codeField: "carBrandCode",
          component: () => import("@/components/org/carColor"),
          type: "propus",
          isMust: true
        },
        {
          compKey: "compKey4",
          labelName: "内饰色",
          codeField: "carBrandCode",
          component: () => import("@/components/org/TrimPopupColor"),
          type: "propus",
          isMust: false
        },
        {
          compKey: "compKey5",
          labelName: "供应状态",
          lookuptype: "VE0014",
          codeField: "supplyStatus",
          component: () => import("@/components/org/LookupValue"),
          type: "dropdownList",
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
        { prop: "carBrandCn", label: "动力类型", width: null, align: "center" },
        { prop: "carBrandCn", label: "适应气候", width: null, align: "center" },
        { prop: "carBrandCn", label: "变速箱", width: null, align: "center" },
        {
          prop: "carBrandCn",
          label: "车型使用状态",
          width: null,
          align: "center"
        },
        {
          prop: "supplyStatusCn",
          label: "供应状态",
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
        cashTypeId: "",
        carConfigId: ""
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



