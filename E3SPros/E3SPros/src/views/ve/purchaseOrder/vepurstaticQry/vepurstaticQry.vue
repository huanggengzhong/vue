/**
* description: 整车 > 采购管理 > 采购单统计
* author: liyanm
* createdDate: 2019-08-03
*/
<template>

  <div class="app-container app-container-table">
    <div class="chickRido">
      <el-radio
        v-model="radio"
        label="1"
      >车系</el-radio>
      <el-radio
        v-model="radio"
        label="2"
      >车型配置</el-radio>
    </div>
    <one-table-template
      ref="multipleTable"
      :dynamicButtons="tableButtons"
      :dynamicComponents="tableComponents"
      :dynamicApiConfig="apiConfig"
      :dynamicTableCols="tableCols"
      :dynamicFormFields="formField"
      :dynamicIsShowSelect="false"
    />

  </div>

</template>
<script>
import { oneTableWithViewTemplateMixins } from '@/components/mixins/oneTableWithViewTemplateMixins';
import { veApis } from "@/api/graphQLApiList/ve";
import OneTableTemplate from "@/components/templates/oneTable";
import { CacheConfig } from '@/cache/configCache/index'

export default {
  name: "vepurstaticQry",
  // 组件混入对象：{data[listQuery] methods[queryTable]}
  mixins: [oneTableWithViewTemplateMixins],
  components: {
    OneTableTemplate
  },
  // 阻塞路由预加载网格中组件的数据
 beforeRouteEnter(to, from, next) {
  CacheConfig.initData(to.path, function(){next()})
 },
  data() {
    return {
      // 网格查询API配置对象
      apiConfig: veApis.vePurstaticQry,
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
          compKey: "btnKey3",
          type: "",
          size: "small",
          clickEvent: () => this.reset(),
          text: "重置"
        }
      ],
      // 动态组件-查询条件
      tableComponents: CacheConfig.cacheData[this.$route.path] && CacheConfig.cacheData[this.$route.path].tableComponents && CacheConfig.cacheData[this.$route.path].tableComponents.length > 0 ? CacheConfig.cacheData[this.$route.path].tableComponents: [
        // 显示组件
        {
          compKey: "compKey1",
          labelName: "品牌",
          codeField: "carBrandCode",
          isRequire: true,
          component: () => import("@/components/org/carBrand/carBrand"),
          type: "dropdownList",
          isMust: true //显示在第一行
        },
        // 触发弹窗组件（popups：为弹窗组件）
        {
          compKey: "compKey2",
          labelName: "经销商",
          codeField: "dlrId",
          component: () => import("@/components/org/commonInput/searchInput"),
          type: "popupsInput",
          isMust: true,
          popups: {
            type: "propus",
            key: "key1",
            state: false,
            component: () => import("@/components/org/orgDlr/orgDlr")
          }
        },
        {
          compKey: "compKey3",
          labelName: "车型",
          codeField: "carConfigId",
          isRequire: false,
          component: () => import("@/components/org/carTypeConfig"),
          type: "propus",
          isMust: true
        },
        {
          compKey: "compKey4",
          labelName: "车身颜色",
          codeField: "carColorId",
          component: () => import("@/components/org/commonInput/searchInput"),
          type: "popupsInput",
          isMust: true,
          popups: {
            type: "propus",
            key: "key3",
            state: false,
            component: () => import("@/components/org/carColor/carColor")
          }
        },
        {
          compKey: "compKey5",
          labelName: "内饰色",
          codeField: "carIncolorId",
          isRequire: false,
          component: () => import("@/components/org/TrimPopupColor"),
          type: "propus",
          isMust: false
        },
        // 日期控件
        {
          compKey: "compKey6",
          labelName: "出货确认开始日期",
          codeField: "assignDateBegin",
          isRequire: false,
          component: () => import("@/components/org/datePicker/datePicker"),
          type: "datePicker",
          dateOptionsType: "1",
          isMust: false
        },
        {
          compKey: "compKey9",
          labelName: "采购单状态",
          lookuptype: "VE0074",
          codeField: "purStatus",
          isRequire: false,
          component: () => import("@/components/org/LookupValue"),
          type: "dropdownList",
          isMust: false
        },
        {
          compKey: "compKey7",
          labelName: "出货确认结束日期",
          codeField: "assignDateEnd",
          component: () => import("@/components/org/datePicker/datePicker"),
          type: "datePicker",
          dateOptionsType: "1",
          isMust: false
        },
        {
          compKey: "compKey8",
          labelName: "采购单类型",
          codeField: "purcashTypeCode",
          parentFileds: "carBrandCode-carBrandCode",
          component: () => import("@/components/ve/PurchaseOrderType"),
          type: "dropdownList",
          isMust: false
        },

        // 送货方式（值列表）
        {
          compKey: "compKey10",
          labelName: "库存类型",
          lookuptype: "VE0005",
          codeField: "stockType",
          component: () => import("@/components/org/LookupValue"),
          type: "dropdownList",
          isMust: false
        },
        {
          compKey: "compKey11",
          labelName: "物流状态",
          lookuptype: "VE0047",
          codeField: "wlStatus",
          component: () => import("@/components/org/LookupValue"),
          type: "dropdownList",
          isMust: false
        },
        {
          compKey: "compKey12",
          labelName: "显示方式",
          lookuptype: "VE0219",
          codeField: "showModle",
          component: () => import("@/components/org/LookupValue"),
          type: "dropdownList",
          isMust: false
        },
        {
          compKey: "compKey13",
          labelName: "确认开始日期",
          codeField: "auditDateBegin",
          component: () => import("@/components/org/datePicker/datePicker"),
          type: "datePicker",
          dateOptionsType: "1",
          isMust: false
        },
        {
          compKey: "compKey14",
          labelName: "确认结束日期",
          codeField: "auditDateEnd",
          component: () => import("@/components/org/datePicker/datePicker"),
          type: "datePicker",
          dateOptionsType: "1",
          isMust: false
        },
        {
          compKey: "compKey15",
          labelName: "分配开始日期",
          codeField: "assignDateBegin	",
          component: () => import("@/components/org/datePicker/datePicker"),
          type: "datePicker",
          dateOptionsType: "1",
          isMust: false
        },
        {
          compKey: "compKey16",
          labelName: "分配结束日期",
          codeField: "assignDateEnd",
          component: () => import("@/components/org/datePicker/datePicker"),
          type: "datePicker",
          dateOptionsType: "1",
          isMust: false
        }
      ],
      // 动态生成网格列
      tableCols: CacheConfig.cacheData[this.$route.path] && CacheConfig.cacheData[this.$route.path].tableCols && CacheConfig.cacheData[this.$route.path].tableCols.length > 0 ? CacheConfig.cacheData[this.$route.path].tableCols: [
        { prop: "carBrandCn", label: "品牌名称", width: 110, align: "center" },
        { prop: "dlrShortName", label: "经销商", width: 100, align: "center" },
        {
          prop: "carSeriseName",
          hidden: false,
          label: "车系",
          width: null,
          align: "center"
        },
        {
          prop: "carConfigName",
          label: "车型配置",
          width: 180,
          align: "center"
        },
        {
          prop: "waitAssignSum",
          label: "所有等待分配合计",
          width: 180,
          align: "center"
        },
        {
          prop: "remainAssignSum",
          label: "昨日遗留等待分配合计",
          width: 180,
          align: "center"
        },
        {
          prop: "addPurSum",
          label: "新增有效采购单合计",
          width: 180,
          align: "center"
        },
        {
          prop: "cancelPurSum",
          label: "作废采购单合计",
          width: 180,
          align: "center"
        },
        { prop: "assignSum", label: "已分配合计", width: 180, align: "center" },
        {
          prop: "waitComfirmSum",
          label: "采购单状态--等待扣款",
          width: 180,
          align: "center"
        },
        {
          prop: "waitSendSum",
          label: "采购单状态--已扣款",
          width: 180,
          align: "center"
        },
        {
          prop: "waitInStockSum",
          label: "采购单状态--已验收",
          width: 180,
          align: "center"
        },
        {
          prop: "cashOnStock",
          label: "等待扣款（在库）-现金",
          width: 180,
          align: "center"
        },
        {
          prop: "dlcOnStock",
          label: "等待扣款（在库）-DLC",
          width: 180,
          align: "center"
        },
        {
          prop: "cashOnLine",
          label: "等待扣款（在线）-现金",
          width: 180,
          align: "center"
        },
        {
          prop: "dlcOnLine",
          label: "等待扣款（在线）-DLC",
          width: 180,
          align: "center"
        },
        {
          prop: "wlplan",
          label: "已扣款--物流执行计划",
          width: 180,
          align: "center"
        },
        {
          prop: "confirmout",
          label: "已扣款--出库",
          width: 180,
          align: "center"
        },
        {
          prop: "outStock",
          label: "已扣款--出门实绩",
          width: 180,
          align: "center"
        },
        { prop: "onStock", label: "已扣款--在库", width: 180, align: "center" }
      ],
      //表单查询数据（查询条件）
      formField: {
        carBrandCode: "",
        dlrId: "",
        carConfigId: "",
        carColorId: "",
        carIncolorId: "",
        assignDateBegin: "",
        assignDateEnd: "",
        purcashTypeCode: "",
        purStatus: "",
        stockType: "",
        wlStatus: "",
        showModle: "",
        auditDateBegin: "",
        auditDateEnd: "",
        assignDateEnd: "",
        assignDateBegin: ""
      },
      radio: "1"
    };
  },
  created() {},
  watch: {
    radio(val, newval) {
      if (val === "2") {
        for (var x in this.tableCols) {
          if (this.tableCols[x].label === "车系")
            this.tableCols[x].hidden = true;
        }
        this.queryTable(1);
      } else {
        for (var x in this.tableCols) {
          if (this.tableCols[x].label === "车系")
            this.tableCols[x].hidden = false;
        }
        this.queryTable(1);
      }
    }
  },
  methods: {}
};
</script>
<style>
.chickRido {
  position: relative;
  float: right;
  padding: 6px;
}
.el-radio {
  margin-right: 4px;
}
</style>

