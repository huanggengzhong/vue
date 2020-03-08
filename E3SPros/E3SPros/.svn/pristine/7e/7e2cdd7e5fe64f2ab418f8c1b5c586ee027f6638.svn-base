<!--
* description: 经销商采购管理-主机厂库存
* author: liyanm
* createdDate: 2019-07-23
-->
<template >
  <section>
    <el-dialog
      class="carMessage"
      :close-on-click-modal="false"
      :title="textMap[popupsState]"
      :append-to-body="true"
      :visible.sync="curPopupsVisible"
      @close="sendCode"
      width="1000px"
    >
      <div class="OpenClass app-container app-container-table">
        <one-table-template
          ref="multipleTable"
          :dynamicButtons="tableButtons"
          :dynamicComponents="tableComponents"
          :dynamicApiConfig="apiConfig"
          :dynamicTableCols="tableCols"
          :dynamicFormFields="formField"
          :dynamicIsInitTable="false"
          :dynamicIsColumnDrop="true"
        />
      </div>
    </el-dialog>
  </section>
</template>
<script>
import { oneTableWithViewTemplateMixins } from '@/components/mixins/oneTableWithViewTemplateMixins';
import { veApis } from "@/api/graphQLApiList/ve";
import OneTableTemplate from "@/components/templates/popupsOneTable";
export default {
  name: "setting",
  // 组件混入对象
  mixins: [oneTableWithViewTemplateMixins],
  components: {
    OneTableTemplate
  },
  props: {
    settingMothPopupsVisible: { type: Boolean, default: false },
    // 弹窗状态（add/edit/view）
    // 新增、编辑弹窗Key
    settingMothPopupsKey: "",
    // 新增、编辑弹窗状态（add/edit/view）
    settingMothPopupsState: "",
    // 新增、编辑行对象
    settingMothRowData: {},
    // 弹窗状态（add/edit/view）
    popupsState: ""
  },
  data() {
    return {
      // 保存API配置对象
      apiConfig: veApis.veInStockCarStatic,
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
        {
          compKey: "compKey1",
          labelName: "品牌",
          codeField: "carBrandCode",
          isRequire: true,
          component: () => import("@/components/org/carBrand/carBrand"),
          type: "dropdownList",
          isMust: true
        },
        {
          compKey: "compKey10",
          labelName: "库存类型",
          lookuptype: "VE0005",
          codeField: "stockType",
          component: () => import("@/components/org/LookupValue"),
          type: "dropdownList",
          isMust: true
        },
        {
          compKey: "compKey3",
          labelName: "车型",
          codeField: "carConfigId",
          isRequire: false,
          component: () => import("@/components/org/carTypeConfig"),
          type: "dropdownList",
          isMust: true
        }
      ],
      // 动态生成网格列
      tableCols: [
        // { prop: "carHouseCode", label: "仓库", width: 110, align: "center" },
        { prop: "carBrandName", label: "品牌", width: 180, align: "center" },
        { prop: "carSeriesCode", label: "车系", width: null, align: "center" },
        // { prop: "carBrandCn", label: "车型编码", width: 110, align: "center" },
        {
          prop: "carConfigCode",
          label: "车型配置",
          width: null,
          align: "center"
        },
        {
          prop: "quantity",
          label: "宝石红/NBF",
          width: null,
          align: "center"
        },
        {
          prop: "quantity",
          label: "钢琴黑/GAE",
          width: null,
          align: "center"
        },
        {
          prop: "quantity",
          label: "琥珀金/CAM",
          width: null,
          align: "center"
        },
        { prop: "total", label: "合计", width: 110, align: "center" },
        {
          prop: "updateControlId",
          label: "并发控制",
          width: 0,
          align: "center",
          hidden: true
        }
      ],
      // 标题
      textMap: {
        edit: "主机厂库存"
      },
      // 表单数据（无需赋值，由混入对象赋值）
      formField: {
        carBrandCode: "",
        stockType: "",
        carConfigId: ""
      },
      //是否显示table下面的组件
      isShowComponent: false
    };
  },
  methods: {}
};
</script>
<style  scoped>
/deep/.filter-container.filter-button {
  position: relative;
  top: -31px;
  right: 27px;
}
/deep/i.el-dialog__close.el-icon.el-icon-close {
  position: relative;
  z-index: 1000;
  top: 15px;
}
/deep/ span.el-dialog__title {
  position: relative;
  top: 17px;
}
/deep/ .filter-container.filter-title {
  position: relative;
  top: -31px;
}
/deep/ .lableNN.filter-container.filter-params {
  position: relative;
  top: -28px;
}
/deep/ .filter-title {
  height: 30px;
  line-height: 30px;
}
/deep/
  .el-table.el-table--fit.el-table--striped.el-table--border.el-table--scrollable-x.el-table--small {
  position: relative;
  top: -15px;
}
/deep/ .el-pagination.is-background {
  position: relative;
  top: -1px;
}
</style>

