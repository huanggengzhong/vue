<!--
* description: 经销商采购管理-资金明细
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
  name: "newMessage",
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
      apiConfig: veApis.veDrlAccountQry,
      // 动态组件-按钮
      tableButtons: [
        {
          compKey: "btnKey1",
          type: "primary",
          size: "small",
          clickEvent: () => this.queryTable(1),
          text: "刷新"
        }
      ],
      // 动态组件-查询条件
      tableComponents: [
        // 显示组件
        {
          compKey: "compKey1",
          labelName: "经销商名称",
          codeField: "dlrId",
          component: () => import("@/components/org/commonInput/searchInput"),
          type: "popupsInput",
          isMust: true,
          popups: {
            type: "propus",
            key: "key1",
            state: false,
            component: () => import("@/components/org/orgDlr")
          }
        },
        {
          compKey: "compKey2",
          labelName: "经销商编码",
          codeField: "purOrderCode",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        },
        {
          compKey: "compKey3",
          labelName: "账户",
          codeField: "carBrandCode",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        },
        {
          compKey: "compKey4",
          labelName: "资金类型",
          codeField: "oemCode",
          component: () => import("@/components/ve/PurcashType"),
          type: "dropdownList",
          isMust: false
        }
      ],
      // 动态生成网格列
      tableCols: [
        { prop: "dlrShortName", label: "经销商", width: 110, align: "center" },
        { prop: "dlrCode", label: "经销商编码", width: 120, align: "center" },
        {
          prop: "carBrandCode",
          label: "账户名称",
          width: 100,
          align: "center"
        },
        {
          prop: "purcashTypeName",
          label: "资金类型",
          width: 180,
          align: "center"
        },
        {
          prop: "remainAmount",
          label: "账户余额",
          width: 180,
          align: "center"
        },
        { prop: "creditAmout", label: "信用额度", width: 100, align: "center" },
        {
          prop: "usingCashAmount",
          label: "现金可用总额",
          width: 150,
          align: "center"
        },
        {
          prop: "usingCreditAmount",
          label: "额度可用总额",
          width: 150,
          align: "center"
        },
        {
          prop: "freezeCashAmount",
          label: "现金冻结金额",
          width: 150,
          align: "center"
        },
        {
          prop: "freezeCreditAmount",
          label: "额度冻结金额",
          width: 150,
          align: "center"
        },
        {
          prop: "tempCreditAmount",
          label: "临时信用额度",
          width: 150,
          align: "center"
        },
        { prop: "county", label: "地区", width: 120, align: "center" },
        { prop: "bigarea", label: "大区", width: null, align: "center" },
        { prop: "smallArea", label: "小区", width: 120, align: "center" },
        { prop: "province", label: "省份", width: null, align: "center" },
        { prop: "city", label: "城市", width: null, align: "center" }
      ],
      // 标题
      textMap: {
        edit: "资金明细"
      },
      //表单查询数据（查询条件）
      formField: {
        carBrandCode: "",
        dlrId: "",
        oemCode: "",
        oemGroup: ""
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

