<!--
* description: 经销商采购管理-车型分配模式
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
  name: "carConfigshear",
  // 组件混入对象
  mixins: [oneTableWithViewTemplateMixins],
  components: {
    OneTableTemplate
  },
  props: {
    carConfigshearPopupsVisible: { type: Boolean, default: false },
    // 弹窗状态（add/edit/view）
    // 新增、编辑弹窗Key
    carConfigshearPopupsKey: "",
    // 新增、编辑弹窗状态（add/edit/view）
    carConfigshearPopupsState: "",
    // 新增、编辑行对象
    carConfigshearRowData: {},
    // 弹窗状态（add/edit/view）
    popupsState: ""
  },
  data() {
    return {
      // 保存API配置对象
      apiConfig: veApis.veDbCarconfigDismodeQueryFindAll,
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
          compKey: "compKey2",
          labelName: "分配模式",
          lookuptype: "VE0016",
          codeField: "distributeModelId",
          isRequire: true,
          component: () => import("@/components/org/LookupValue"),
          type: "dropdownList",
          isMust: true
        },
        {
          compKey: "compKey3",
          labelName: "车型",
          codeField: "smallCarTypeIds",
          component: () => import("@/components/org/carTypeConfig"),
          type: "dropdownList",
          isMust: true
        },
        {
          compKey: "compKey4",
          labelName: "车型配置",
          codeField: "carConfigId",
          textField: "carConfigCn",
          component: () => import("@/components/org/carTypeConfig"),
          type: "propus",
          isMust: false
        }
      ],
      // 动态生成网格列
      tableCols: [
        { prop: "carBrandName", label: "品牌", width: null, align: "center" },
        { prop: "carSeriesCn", label: "车系", width: null, align: "center" },
        {
          prop: "smallCarTypeCode",
          label: "车型编码",
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
          prop: "distributeModeName",
          label: "分配模式",
          width: null,
          align: "center"
        }
        // { prop: "carBrandCn", label: "供应状态", width: null, align: "center" }
      ],
      // 标题
      textMap: {
        edit: "车型分配模式"
      },
      // 表单数据（无需赋值，由混入对象赋值）
      formField: {
        carBrandCode: "",
        carHouseType: "",
        carConfigId: ""
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

