<!--
* description: 竞品车系
* author: zouzx
* createdDate: 2019-10-24
-->
<template>
  <section class="carTypeConfig">
    <el-dialog
      title="竞品车系"
      :visible.sync="curPopupsVisible"
      width="1000px"
      center
      @close="sendCode"
      :close-on-click-modal="false"
      :append-to-body="true"
    >
      <one-table-template
        ref="multipleTable"
        :dynamicButtons="tableButtons"
        :dynamicComponents="tableComponents"
        :dynamicApiConfig="apiConfig"
        :dynamicTableCols="tableCols"
        :dynamicFormFields="formField"
        :dynamicIsShowSelect="isMul"
      />
    </el-dialog>
  </section>
</template>
<script>
import { oneTableWithViewTemplateMixins } from '@/components/mixins/oneTableWithViewTemplateMixins';
import { valueObjectMixins } from '@/components/mixins/valueObjectMixins';
import { crmApis } from "@/api/graphQLApiList/crm";
import OneTableTemplate from "@/components/templates/popupsOneTable";
export default {
  // 组件混入对象：{data[listQuery] methods[queryTable]}
  mixins: [oneTableWithViewTemplateMixins, valueObjectMixins],
  components: {
    OneTableTemplate
  },
  data() {
    return {
      // 网格查询API配置对象
      apiConfig: crmApis.mdmCompCarSeriesQueryFindAll,
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
          clickEvent: () => this.sendCode("compCarseriesCode", "mdmCompBrandExt.compBrandCn"),
          text: "确认"
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
        // 显示组件
        {
          compKey: "compKey1",
          labelName: "竞品品牌",
          codeField: "compBrandCode",
          component: () => import("@/components/crm/Select/compBrand"),
          type: "dropdownList",
          isMust: true
        },
        {
          compKey: "compKey2",
          labelName: "竞品车系",
          codeField: "compCarseriesName",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        }
      ],
      // 动态生成网格列
      tableCols: [
        { prop: "mdmCompBrandExt.compBrandCn", label: "竞品品牌", width: null, align: "center" },
        { prop: "compCarseriesCode", label: "竞品车系编码", width: null, align: "center" },
        { prop: "compCarseriesName", label: "竞品车系名称", width: null, align: "center" },
        { prop: "compBrandCode", label: "竞品品牌编码", width: null, align: "center",hidden: true }
      ],
      //表单查询数据（查询条件）
      formField: {
        compBrandCode: "",
        compCarseriesName: "",
      }
    };
  }
};
</script>
