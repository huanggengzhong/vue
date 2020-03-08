<!--
* description: 经销商采购管理-本月提车进度
* author: liyanm
* createdDate: 2019-07-23
-->
<template>
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
  name: "monthCar",
  // 组件混入对象
  mixins: [oneTableWithViewTemplateMixins],
  components: {
    OneTableTemplate
  },
  props: {
    monthCarPopupsVisible: { type: Boolean, default: false },
    // 弹窗状态（add/edit/view）
    // 新增、编辑弹窗Key
    monthCarPopupsKey: "",
    // 新增、编辑弹窗状态（add/edit/view）
    monthCarPopupsState: "",
    // 新增、编辑行对象
    monthCarRowData: {},
    // 弹窗状态（add/edit/view）
    popupsState: ""
  },
  data() {
    return {
      // 保存API配置对象
      apiConfig: veApis.vePurSpeedStatic,
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
          compKey: "compKey3",
          labelName: "车系编码",
          codeField: "carSeriesId",
          isRequire: false,
          component: () => import("@/components/org/CarCode"),
          type: "dropdownList",
          isMust: true
        }
      ],
      // 动态生成网格列
      tableCols: [
        { prop: "carSeriesCode", label: "车系", width: null, align: "center" },
        { prop: "aim", label: "本月目标", width: null, align: "center" },
        { prop: "purFeate", label: "已提车", width: null, align: "center" },
        { prop: "assigncount", label: "已分配", width: null, align: "center" },
        {
          prop: "monthWaitAssignCnt",
          label: "本月待分配",
          width: null,
          align: "center"
        },
        {
          prop: "waiAssignAmt",
          label: "待分配总数",
          width: null,
          align: "center"
        },
        { prop: "purAmt", label: "采购数量", width: null, align: "center" },
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
        edit: "本月提车进度"
      },
      // 表单数据（无需赋值，由混入对象赋值）
      formField: {
        carBrandCode: "",
        carSeriesId: ""
      }
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

