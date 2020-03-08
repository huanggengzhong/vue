/**
* description: 整车 > 车辆产品价格补贴设置
* author: liyanm
* createdDate: 2019-07-28
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
      :dynamicIsShowMoreBtn="false"
    />

    <edit
      :dynamicEditRowData="editRowData"
      :popupsVisible="editPopupsVisible"
      :key="editPopupsKey"
      :popupsState="editPopupsState"
      @close="close"
    ></edit>

    <handle
      :dynamicEditRowData="historyRowData"
      :popupsVisible="historyPopupsVisible"
      :key="historyPopupsKey"
      :popupsState="historyPopupsState"
      @close="historyclose"
    ></handle>
  </div>
</template>
<script>   //oneTableTemplateMixins   oneTableWithViewTemplateMixins
import { oneTableWithViewTemplateMixins } from "@/components/mixins/oneTableWithViewTemplateMixins";
import { orgApis } from "@/api/graphQLApiList/org";
import OneTableTemplate from "@/components/templates/oneTable";
import Edit from "./edit";
import handle from "./handle";
import { CacheConfig } from '@/cache/configCache/index'
export default {
  name: "veSettingPrice",
  // 组件混入对象   oneTableWithViewTemplateMixins
  mixins: [oneTableWithViewTemplateMixins],
  components: {
    OneTableTemplate,
    Edit,
    handle
  },
  // 阻塞路由预加载网格中组件的数据
beforeRouteEnter(to, from, next) {CacheConfig.initData(to.path, function(){next()})},
  data() {
    return {
      // 网格查询API配置对象
      apiConfig: orgApis.veBuDlrSubsidyQueryListForPage,
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
          clickEvent: () => this.add(),
          text: "新增"
        },
        {
          compKey: "btnKey3",
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
      tableComponents:
         CacheConfig.cacheData[this.$route.path] && CacheConfig.cacheData[this.$route.path].tableComponents.length > 0 ?
            CacheConfig.cacheData[this.$route.path].tableComponents : [
        {
          compKey: "compKey1",
          labelName: "品牌",
          codeField: "carBrandCode",
          component: () => import("@/components/org/carBrand/carBrand"),
          type: "dropdownList",
          isMust: true
        },
        // 触发弹窗组件（popups：为弹窗组件）
        {
          compKey: "compKey2",
          labelName: "经销商",
          codeField: "dlrId",
          parentFileds: "value:carBrandCode",
          component: () => import("@/components/org/orgDlr"),
          type: "propus",
          isMust: true
        },
        {
          compKey: "compKey3",
          labelName: "车系",
          parentFileds: "value:carBrandCode",
          codeField: "carSeriesId",
          component: () => import("@/components/org/CarCode/"),
          type: "dropdownList",
          isMust: true
        },
        // 触发弹窗组件（popups：为弹窗组件）
        {
          compKey: "compKey4",
          labelName: "车型配置",
          codeField: "carConfigId",
          parentFileds: "value:carBrandCode|carSeriesId",
          returnCodeField: 'carConfigId',
          component: () => import("@/components/org/carTypeConfig"),
          type: "propus",
          isMust: true,
          isMul: true
        }
      ],
      // 动态生成网格列
      tableCols: this.getCols(),
      //表单查询数据
      formField: {
        carSeriesId: "",
        carConfigId: "",
        dlrId: "",
        carBrandCode: ""
      },
      historyPopupsVisible: false, //是否显示历史价格弹窗
      // 新增、编辑弹窗Key
      historyPopupsKey: "history1",
      // 新增、编辑弹窗状态（add/edit/view）
      historyPopupsState: "",
      // 新增、编辑行对象
      historyRowData: {},
      // 是否使用刷新Key的方式刷新弹窗
      resetDialogKey: false
    };
  },
  methods: {
    getCols() {
      var cols = [
{
          prop: "controlBtn",
          label: "操作",
          codeField: "controlBtn",
          width: 160,
          align: "center",
          isComponent: true,
          comps: [
            {
              compKey: "propKey0",
              labelName: "补贴设置",
              codeField: "editControlBtn",
              clickEvent: this.edit,
              component: () => import("@/components/org/linkButton")
            },
            {
              compKey: "propKey1",
              labelName: "设置历史",
              codeField: "historyControlBtn",
              clickEvent: this.historyedit,
              component: () => import("@/components/org/linkButton")
            }
          ]
        }
      ]
      if (CacheConfig.cacheData[this.$route.path] && CacheConfig.cacheData[this.$route.path].tableCols.length > 0) {
        cols = cols.concat(CacheConfig.cacheData[this.$route.path].tableCols)
      } else {
        cols = cols.concat([
        { prop: "carBrandCn", label: "品牌", width: 140, align: "center" },
        { prop: "carBrandCode", label: "品牌编码", width: 100, align: "center",hidden:true },
        { prop: "dlrShortName", label: "经销商", width: 140, align: "center" },
        {
          prop: "carSeriesCn",
          label: "车系",
          width: null,
          align: "center"
        },
        { prop: "smallCarTypeCn", label: "车型", width: 180, align: "center" },
         {
          prop: "carConfigCode",
          label: "车型配置",
          width: 180,
          align: "center"
        },
        {
          prop: "carConfigId",
          label: "车型配置Id",
          align: "center",
          hidden:true
        },
        {
          prop: "dlrId",
          label: "经销商id",
          align: "center",
          hidden:true
        },
        {
          prop: "carConfigCn",
          label: "车型配置",
          width: 200,
          align: "center",
          hidden:true
        },
        {
          prop: "countrySubsidy",
          label: "国家补贴",
          width: null,
          align: "center"
        },
        {
          prop: "areaSubsidy",
          label: "地方补贴",
          width: null,
          align: "center"
        },
        {
          prop: "otherSubsidy",
          label: "其他调减",
          width: null,
          align: "center"
        },
        {
          prop: "carSalePrice",
          label: "市场指导价",
          width: 100,
          align: "center"
        },
        {
          prop: "dlrPurPrice",
          label: "经销商采购价",
          width: 110,
          align: "center"
        },
        {
          prop: "priceValidBeginDate",
          label: "有效开始日期",
          width: 200,
          align: "center"
        },
        {
          prop: "dlrSubsidyId",
          label: "主键id",
          width: 200,
          align: "center",
          hidden: true
        },
        {
          prop: "priceValidEndDate",
          label: "有效结束日期",
          width: 200,
          align: "center"
        },
        {
          prop: "updateControlId",
          label: "并发控制",
          width: null,
          align: "center",
          hidden: true
        }
            ])
      }
      return cols
    },
    // 编辑按钮事件
    historyedit(index) {
      var curIndex = index;
      const that = this.$refs.multipleTable;
      if (curIndex === undefined || curIndex === null) {
        var currentRow;
        if (that.isMul === true) {
          // 多选
          var selectData = that.selection;
          if (selectData.length > 0) {
            currentRow = selectData[0];
          }
        } else {
          // 单选
          currentRow = that.currentRow;
        }
        if (currentRow) {
          curIndex = currentRow.index;
        }
      }

      if (curIndex === undefined || curIndex === null) {
        this.$alert("请选择需要修改的数据", "提示");
        return;
      }

      this.historyRowData = that.list[curIndex];
      this.showhistoryEdit("edit");
    },
    // 显示新增、修改弹窗
    showhistoryEdit(type) {
      this.historyPopupsState = type;
      this.historyPopupsVisible = true;
      this.historyPopupsKey = this.$utils.generateId();
    },
    // 关闭设置历史弹窗
    historyclose(type) {
      this.historyPopupsVisible = false;
      this.historyPopupsKey = this.$utils.generateId();
    }
  }
};
</script>
<style>
</style>
