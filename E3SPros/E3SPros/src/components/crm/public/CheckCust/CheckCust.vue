<!--
* description: 客户选择
* author: laimzh
* createdDate: 2019-08-09
-->
<template>
  <section class="CheckVin">
    <el-dialog
      title="客户选择"
      :visible.sync="curPopupsVisible"
      width="1000px"
      center
      @close="sendCode"
      :close-on-click-modal="false"
      :append-to-body="true"
    >
      <one-table-template ref="multipleTable"
        :dynamicButtons="tableButtons"
        :dynamicComponents="tableComponents"
        :dynamicApiConfig="apiConfig"
        :dynamicTableCols="tableCols"
        :dynamicFormFields="formField"
        :dynamicIsShowSelect="false"
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
      apiConfig: crmApis.mdmDlrCustInfoQuery,//专营店客户查询
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
          clickEvent: () => this.reset(),
          text: "重置"
        },
        {
          compKey: "btnKey3",
          type: "",
          size: "small",
          clickEvent: () => this.sendCode("uid", "custName"),
          text: "确认"
        }
      ],
      // 动态组件-查询条件
      tableComponents: [
        {
          compKey: "compKey1",
          labelName: "客户名称",
          codeField: "custName",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        },
        {
          compKey: "compKey2",
          labelName: "联系电话",
          codeField: "phone",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        },
        {
          compKey: "compKey3",
          labelName: "UID",
          codeField: "uid",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        }
      ],
      // 动态生成网格列
      tableCols: [
        { prop: "uid", label: "UID", width: null, align: "center" },
        { prop: "custClassCode", label: "类型", width: null, align: "center" },
        { prop: "custName", label: "客户名称", width: null, align: "center" },
        { prop: "phone", label: "联系电话", width: null, align: "center" },
        { prop: "custClassCode", label: "客户类别", width: null, align: "center" },
        { prop: "genderName", label: "性别", width: null, align: "center" },
        { prop: "addrProvince", label: "省份", width: null, align: "center" },
        { prop: "addrCity", label: "城市", width: null, align: "center" },
        { prop: "credTypeName", label: "证件类型", width: null, align: "center" },
        { prop: "credNo", label: "证件号码", width: null, align: "center" },
        { prop: "addrStreet", label: "地址", width: null, align: "center" }
      ],
      //表单查询数据
      formField: {
        custName: "",
        phone: "",
        uid: "",
      }
    };
  }
};
</script>
