<!--
* description: 调拨量调整申请
* author: xulfan
* logs: 
*      完成开发-------2019-10-14
-->
<template>
  <div class="app-container app-container-table">
    <one-table-template
      ref="multipleTable"
      :dynamicButtons="tableButtons"
      :dynamicComponents="tableComponents"
      :dynamicApiConfig="apiConfig"
      :dynamicTableCols="tableCols"
      :dynamicFormFields="formField"
      :dynamicIsShowMoreBtn="false"
      :dynamicIsShowSelect="false"
    />
    <!-- :dynamicIsShowSelect="false" -->

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
import { oneTableWithViewTemplateMixins } from "@/components/mixins/oneTableWithViewTemplateMixins";
import { veApis } from "@/api/graphQLApiList/ve";
import OneTableTemplate from "@/components/templates/oneTable";
import Edit from "./edit";
import { CacheConfig } from "@/cache/configCache/index";
export default {
  name: "transMoutAdjAplly",
  // 组件混入对象
  mixins: [oneTableWithViewTemplateMixins],
  components: {
    OneTableTemplate,
    Edit
  },
  // 阻塞路由预加载网格中组件的数据
  beforeRouteEnter(to, from, next) {
    CacheConfig.initData(to.path, function() {
      next();
    });
  },
  data() {
    return {
      // 网格查询API配置对象
      apiConfig: veApis.veBuTransferTargetApplyQueryFindAll,
      // 动态组件-按钮
      tableButtons: [
        {
          compKey: "btnKey1",
          type: "primary",
          size: "small",
          clickEvent: () => this.queryTable(1),
          text: this.$t("sys.button.query") /**查询 */
        },
        {
          compKey: "btnKey2",
          type: "",
          size: "small",
          clickEvent: () => this.add(),
          text: this.$t("sys.button.add") /**新增 */
        },
        {
          compKey: "btnKey3",
          type: "",
          size: "small",
          clickEvent: () => this.reset(),
          text: this.$t("sys.button.reset") /**重置 */
        },
        {
          compKey: "btnKey4",
          type: "",
          size: "small",
          clickEvent: () => this.exportExcel(),
          text: this.$t("sys.button.export") /**导出 */
        }
      ],
      // 动态组件-查询条件
      tableComponents:
        CacheConfig.cacheData[this.$route.path] &&
        CacheConfig.cacheData[this.$route.path].tableComponents.length > 0
          ? CacheConfig.cacheData[this.$route.path].tableComponents
          : [
              {
                compKey: "compKey1",
                labelName: this.$t("org.label.carBrandCn") /**品牌 */,
                codeField: "carBrandCode",
                component: () => import("@/components/org/carBrand/carBrand"),
                type: "dropdownList",
                isMust: true
              },
              {
                compKey: "compKey2",
                labelName: "月份" /**月份 */,
                // labelName: this.$t("org.label.carSeriesCode") /**车系编码 */,
                codeField: "month",
                component: () =>
                  import("@/components/org/datePicker/datePicker"),
                type: "dropdownList",
                isMust: true
              },
              {
                compKey: "compKey3",
                labelName: "调入经销商" /**调入经销商 */,
                // labelName: this.$t("org.label.carSeriesCn") /**调入经销商 */,
                codeField: "transferInDlrId",
                component: () => import("@/components/org/orgDlr"),
                type: "inputText",
                isMust: true
              },
              {
                compKey: "compKey4",
                labelName: "调出经销商" /**经销商 */,
                // labelName: this.$t("org.label.carSeriesCn") /**调出经销商 */,
                codeField: "transferOutDlrId",
                component: () => import("@/components/org/orgDlr"),
                type: "inputText",
                isMust: true
              },
              {
                compKey: "compKey5",
                labelName: this.$t("org.label.isEnable") /**状态 */,
                codeField: "transferOutDlrId",
                component: () => import("@/components/org/isEnable/isEnable"),
                type: "inputText",
                isMust: false
              }
            ],
      // 动态生成网格列
      tableCols:
        CacheConfig.cacheData[this.$route.path] &&
        CacheConfig.cacheData[this.$route.path].tableCols.length > 0
          ? CacheConfig.cacheData[this.$route.path].tableCols
          : [
              {
                prop: "controlBtn",
                label: this.$t("sys.content.operate") /*操作*/,
                codeField: "controlBtn",
                width: 60,
                align: "center",
                isComponent: true,
                comps: [
                  {
                    compKey: "propKey1",
                    labelName: this.$t("sys.button.edit") /*修改*/,
                    codeField: "editControlBtn",
                    clickEvent: this.edit,
                    component: () => import("@/components/org/linkButton")
                  }
                ]
              },
              {
                prop: "transferTargetApplyCode",
                label: "调拨量调整申请单号" /**调拨量调整申请单号 */,
                width: 150,
                align: "center"
              },
              {
                prop: "transferInDlrId",
                label: "调入经销商Id" /**调入经销商Id */,
                width: null,
                align: "center",
                hidden: true
              },
              {
                prop: "transferInDlrShortName",
                label: "调入经销商" /**调入经销商 */,
                width: 120,
                align: "center"
              },
              {
                prop: "transferOutDlrId",
                label: "调出经销商Id" /**调出经销商Id */,
                width: null,
                align: "center",
                hidden: true
              },
              {
                prop: "transferOutDlrShortName",
                label: "调出经销商" /**调出经销商 */,
                width: 120,
                align: "center"
              },
              {
                prop: "month",
                label: "月份" /**月份 */,
                width: null,
                align: "center"
              },
              {
                prop: "qty",
                label: "申请数量" /**申请数量 */,
                width: null,
                align: "center"
              },
              {
                prop: "inUsetargetValues",
                label: "调入店剩余调拨量" /*调入店剩余调拨量*/,
                width: 150,
                align: "center",
                hidden: true
              },
              {
                prop: "auditInQty",
                label: "调入店审核数量" /**调入店审核数量*/,
                width: 150,
                align: "center"
              },
              {
                prop: "outUsetargetValues",
                label: "调出店剩余调拨量" /**调出店剩余调拨量 */,
                width: null,
                align: "center",
                hidden: true
              },
              {
                prop: "auditOutQty",
                label: "调出店审核数量" /**调出店审核数量 */,
                width: 150,
                align: "center"
              },
              {
                prop: "statusName",
                label: "状态" /**状态 */,
                width: null,
                align: "center"
              },
              {
                prop: "status",
                label: "状态ID" /**状态ID */,
                width: null,
                align: "center",
                hidden: true
              },
              {
                prop: "rejectRemark",
                label: "驳回原因" /**驳回原因 */,
                width: null,
                align: "center"
              },
              {
                prop: "updateControlId",
                label: "并发字段",
                width: null,
                align: "center",
                hidden: true
              }
            ],
      //表单查询数据
      formField: {
        carBrandCode: "",
        month: "",
        transferInDlrId: "",
        transferOutDlrId: "",
      }
    };
  }
};
</script>
