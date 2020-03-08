<!--
* description: 战败原因
* author: zouzx
* createdDate: 2019-10-24
-->
<template>
  <section class="carTypeConfig">
    <el-dialog
      title="战败原因"
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
      apiConfig: crmApis.pcDbFailReasonMQueryFindAll,
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
          clickEvent: () => this.sendCode("failReasonMId", "failReasonName"),
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
          labelName: "原因编码",
          codeField: "failReasonNo",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        },
        {
          compKey: "compKey2",
          labelName: "原因名称",
          codeField: "failReasonName",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        }
      ],
      // 动态生成网格列
      tableCols: [
        { prop: "failReasonNo", label: "原因编码", width: null, align: "center" },
        { prop: "failReasonName", label: "原因名称", width: null, align: "center" },
        { prop: "failReasonDesc", label: "原因描述", width: null, align: "center" },
        { prop: "failReasonTypeName", label: "原因类型", width: null, align: "center" },
        { prop: "failReasonMId", label: "原因ID", width: null, align: "center",hidden: true }
      ],
      //表单查询数据（查询条件）
      formField: {
        failReasonNo: "",
        failReasonName: "",
        isEnable: "1",
        failReasonType: "1",
      }
    };
  }
};
</script>
