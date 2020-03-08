/**
* description: 售后 > 基础数据 > 服务车系维护
* author: ydche
* createdDate: 2019-08-06
*/
<template>
  <div class="app-container app-container-table">
    <one-table-template
      ref="multipleTable"
      :dynamicButtons="tableButtons"
      :dynamicIsShowMoreBtn="false"
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
import {
  initChooseCarSeries,
  doQueryServiceCarSeries,
  doSaveServiceCarSeries
} from "@/api/se/basedata/serviceCarTypeSeries";
import OneTableTemplate from "@/components/templates/oneTable";
export default {
  name: "ServiceCarSeries",
  // 组件混入对象：{data[listQuery] methods[queryTable]}
  mixins: [oneTableWithViewTemplateMixins],
  components: {
    OneTableTemplate,
    Edit
  },
  data() {
    return {
      // 网格查询API配置对象
      apiConfig: seApis.mdmVeCarSeriesQueryListForPage,
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
          clickEvent: () => this.exportExcel(),
          text: "导出"
        },
        {
          compKey: "btnKey5",
          type: "",
          size: "small",
          clickEvent: () => this.reset(),
          text: "重置"
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
          labelName: "销售车系",
          codeField: "carSeriesCn",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        },
        {
          compKey: "compKey4",
          labelName: "服务车系",
          codeField: "sCarseriesDesc",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        },
        {
          compKey: "compKey6",
          labelName: "车系状态",
          codeField: "isEnable",
          component: () => import("@/components/se/CarState"),
          type: "dropdownList",
          isMust: true
        }

        //触发弹窗组件（popups：为弹窗组件）
        // {
        // 	compKey: 'compKey3',
        // 	labelName: '销售车型编码',
        // 	codeField: 'carConfigId',
        // 	component: () => import('@/components/org/carTypeConfig'),
        // 	type: 'Input',
        // 	isMust: true,
        // },
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
          prop: "carSeriesCode",
          label: "销售车系编码",
          width: null,
          align: "center"
        },
        {
          prop: "carSeriesCn",
          label: "销售车系名称",
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
          prop: "sCarseriesDesc",
          label: "服务车系名称",
          width: null,
          align: "center"
        }
      ],
      //表单查询数据（查询条件）
      formField: {
        carBrandCode: "",
        sCarseriesDesc: "",
        isEnable: "",
        carSeriesCn: ""
      },
      //初始化数据
      initDatas: [],
      listInit: {
        token: "",
        OEM_CODE: "",
        GROUP_CODE: "",
        DLR_ID: ""
      }
    };
  },
  created() {
    //this.initData();
  },
  mounted() {},
  methods: {
    updatas() {
      const that = this.$refs.multipleTable;
      let selectData = that.$refs.multipleTable.selection;
    }
  }
};
</script>
