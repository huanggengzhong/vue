<!--
* description: 经销商采购管理-新增弹窗
* author: liyanm
* createdDate: 2019-07-23
-->
<template>
  <section>
    <el-dialog
      class="addOPen"
      :close-on-click-modal="false"
      :title="textMap[popupsState]"
      :append-to-body="true"
      :visible.sync="curPopupsVisible"
      @close="sendCode"
      width="1000px"
    >
      <div
        class="filter-container filter-button editButton"
        ref="searcheHeight"
      >
        <el-button
          type="primary"
          size="small"
          @click="queryTable()"
        >查询</el-button>
        <el-button
          size="small"
          @click="reset"
        >重置</el-button>
      </div>
      <el-tabs
        type="border-card"
        class="editTab"
      >
        <el-tab-pane label="一般/大宗">
          <oneCar ref="oneCar"></oneCar>
        </el-tab-pane>
        <el-tab-pane label="二网需求">
          <twoCar ref="twoCar"></twoCar>
        </el-tab-pane>
        <!-- <el-tab-pane label="订单余量">
          <threeCar ref="threeCar"></threeCar>
        </el-tab-pane> -->
      </el-tabs>
    </el-dialog>
  </section>
</template>
<script>
import { formMixins } from "@/components/mixins/formMixins";
import { veApis } from "@/api/graphQLApiList/ve";
import OneTableTemplate from "@/components/templates/popupsOneTable";
import oneCar from "./editCom/oneCar/oneCar";
import twoCar from "./editCom/twoCar/twoCar";
import threeCar from "./editCom/threeCar/threeCar";
export default {
  name: "editPOT",
  // 组件混入对象
  mixins: [formMixins],
  components: {
    oneCar,
    twoCar,
    threeCar
  },
  data() {
    return {
      // 保存API配置对象
      apiConfig: veApis.veDbBaseseriesFreezeBailMutationSave,
      // 动态组件-按钮
      tableButtons: [
        {
          compKey: "btnKey3",
          type: "primary",
          size: "small",
          clickEvent: () => this.save(),
          text: "保存"
        },
        {
          compKey: "btnKey2",
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
          labelName: "资金类型",
          codeField: "purcashTypeId",
          isRequire: true,
          component: () => import("@/components/ve/PurcashType"),
          type: "dropdownList",
          isMust: true
        },
        {
          compKey: "compKey3",
          labelName: "采购单类型",
          codeField: "orderTypeId",
          isRequire: true,
          component: () => import("@/components/ve/PurchaseOrderType"),
          type: "dropdownList",
          isMust: true
        },
        {
          compKey: "compKey4",
          labelName: "库存类型",
          codeField: "stockTypeId",
          isRequire: true,
          lookuptype: "VE0005",
          component: () => import("@/components/org/LookupValue"),
          type: "dropdownList",
          isMust: true
        },
        {
          compKey: "compKey5",
          labelName: "冻结节点",
          codeField: "freezeNodeId",
          isRequire: true,
          lookuptype: "VE0189",
          component: () => import("@/components/org/LookupValue"),
          type: "dropdownList",
          isMust: true
        },
        {
          compKey: "compKey6",
          labelName: "冻结方式",
          codeField: "freezeWay",
          isRequire: true,
          lookuptype: "VE0188",
          component: () => import("@/components/org/LookupValue"),
          type: "dropdownList",
          isMust: true
        },
        {
          compKey: "compKey7",
          labelName: "冻结金额/比例",
          codeField: "freezeBail",
          isRequire: true,
          lookuptype: "VE0188",
          component: () => import("@/components/org/LookupValue"),
          type: "dropdownList",
          isMust: true
        }
      ],
      // 标题
      textMap: {
        add: "新增"
      },
      // 表单数据（无需赋值，由混入对象赋值）
      formField: {
        carBrandCode: "",
        purcashTypeId: "",
        orderTypeId: "",
        stockTypeId: "",
        freezeNodeId: "",
        freezeWay: "",
        freezeBail: ""
      }
    };
  },
  methods: {
    queryTable() {
      const com = this.$children[0].$children[2].currentName;
      if (com === "0") {
        this.$children[0].$children[2].$children[1].$children[0].queryTable(1);
        console.log(this.$refs.oneCar);
      }
      if (com === "1") {
        this.$children[0].$children[2].$children[2].$children[0].queryTable(1);
      }
      if (com === "2") {
        this.$children[0].$children[2].$children[3].$children[0].queryTable(1);
      }
    }
  }
};
</script>
<style scoped>
/deep/
  .el-table.el-table--fit.el-table--striped.el-table--border.el-table--scrollable-x.el-table--small {
  max-height: 438px;
}
/deep/ .filter-container.filter-button {
  position: relative;
  right: 38px;
  top: -31px;
}
/deep/ .el-dialog .el-dialog__header .el-dialog__headerbtn {
  z-index: 30000;
  top: 27px;
}
/deep/.el-tabs__content {
  max-height: 500px;
}
/deep/ .el-dialog .el-dialog__body {
  padding: 10px;
}
/deep/.editTab.el-tabs.el-tabs--top.el-tabs--border-card {
  position: relative;
  top: -21px;
}
/deep/.el-dialog .moreBtn {
  position: relative;
  right: 5px;
}
/deep/ button.el-dialog__headerbtn {
  z-index: 1000;
}
/deep/ span.el-dialog__title {
  position: relative;
  top: 16px;
}
</style>

