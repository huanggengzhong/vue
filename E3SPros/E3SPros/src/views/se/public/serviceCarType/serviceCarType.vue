/**
* description: 售后 > 维修公共 > 服务车型维护
* author: ydche
* createdDate: 2019-08-06
*/
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
import { oneTableWithViewTemplateMixins } from '@/components/mixins/oneTableWithViewTemplateMixins';
import { seApis } from "@/api/graphQLApiList/se";
import { serviceCarType } from "@/api/graphQLApiList/se";
import Edit from "./edit";
import OneTableTemplate from "./oneTableTemp";
export default {
  name: "ServiceCarType",
  // 组件混入对象：{data[listQuery] methods[queryTable]}
  mixins: [oneTableWithViewTemplateMixins],
  components: {
    OneTableTemplate,
    Edit
  },
  data() {
    return {
      // 网格查询API配置对象
      apiConfig: seApis.mdmSmallCarTypeQueryListForPage,
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
          clickEvent: () => this.edit(),
          text: "修改"
        },
        // { compKey: 'btnKey3', type: '', size: 'small', clickEvent: () => this.imports(), text: '导入' },
        {
          compKey: "btnKey5",
          type: "",
          size: "small",
          clickEvent: () => this.reset(),
          text: "重置"
        },
        {
          compKey: "btnKey4",
          type: "",
          size: "small",
          clickEvent: () => this.exportExcel(),
          text: "导出"
        }
      ],
      // 动态组件-查询条件
      tableComponents: [
        // 显示组件
        {
          compKey: "compKey1",
          labelName: "品牌",
          codeField: "carBrandCode",
          component: () => import("@/components/org/carBrand/carBrand"),
          type: "dropdownList",
          isMust: true //显示在第一行
        },
        {
          compKey: "compKey2",
          labelName: "车系编码",
          codeField: "carSeriesCode",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        },
        {
          compKey: "compKey3",
          labelName: "车系名称",
          codeField: "carSeriesCn",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        },
        {
          compKey: "compKey4",
          labelName: "车型编码",
          codeField: "carTypeCode",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        },
        {
          compKey: "compKey5",
          labelName: "车型名称",
          codeField: "carTypeCn",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: false
        }
      ],
      // 动态生成网格列
      tableCols: [
        {
          prop: "mdmCarBrandExtend.carBrandCn",
          label: "车辆品牌",
          width: null,
          align: "center"
        },
        {
          prop:
            "mdmMiddleCarTypeExtend.mdmLargeCarTypeExtend.mdmVeBaseSeriesExtend.mdmVeCarSeriesExtend.carSeriesCode",
          label: "车系编码",
          width: null,
          align: "center"
        },
        {
          prop:
            "mdmMiddleCarTypeExtend.mdmLargeCarTypeExtend.mdmVeBaseSeriesExtend.mdmVeCarSeriesExtend.carSeriesCn",
          label: "车系名称",
          width: null,
          align: "center"
        },
        {
          prop: "smallCarTypeCode",
          label: "车型编码",
          width: null,
          align: "center"
        },
        {
          prop: "smallCarTypeCn",
          label: "车型名称",
          width: null,
          align: "center"
        },
        {
          prop: "sCarseriesCode",
          label: "服务车系编码",
          width: null,
          align: "center"
        },
        {
          prop:
            "mdmMiddleCarTypeExtend.mdmLargeCarTypeExtend.mdmVeBaseSeriesExtend.mdmVeCarSeriesExtend.sCarseriesDesc",
          label: "服务车系名称",
          width: null,
          align: "center"
        },
        {
          prop: "smallCarTypeCode",
          label: "车型小类编码",
          width: null,
          align: "center",
          hidden: true
        },
        {
          prop: "smallCarTypeId",
          label: "车型小类ID",
          width: null,
          align: "center",
          hidden: true
        },
        {
          prop: "smallCarTypeCn",
          label: "车型小类名称",
          width: null,
          align: "center",
          hidden: true
        },
        {
          prop: "serviceCarType",
          label: "服务车型编码",
          width: null,
          align: "center",
          hidden: true
        },
        {
          prop: "updateControlId",
          label: "并发控制ID",
          width: null,
          align: "center",
          hidden: true
        },
        {
          prop: "mdmMiddleCarTypeExtend.mdmLargeCarTypeExtend.carSeriesCode",
          label: "销售车系",
          width: null,
          align: "center",
          hidden: true
        }
        // { prop: 'SUPPLY_STATUS', label: '状态', width: null, align: 'center', isComponent: true,
        // comps: [{compKey: 'propKey1', isShowLabel: false, codeField: 'SUPPLY_STATUS', clickEvent: () => null, component: () => import('./startOrNot')}]
        // },
      ],
      //表单查询数据（查询条件）
      formField: {
        carSeriesId: "",
        carBrandCode: "",
        smallCarTypeCode: "",
        smallCarTypeCn: ""
        // SMALL_CAR_TYPE_CODE: '',
        // SUPPLY_STATUS: '',
        // IS_PERFECTA:'',
        // IS_PERFECTS:'',
      },
      //初始化数据
      initDatas: [],
      listInit: {}
    };
  },
  created() {
    //this.initData();
  },
  methods: {}
};
</script>
