<!--
* description: 大客户弹出框
* author: liyanm
* createdDate: 2019-08-03
-->
<template>
  <section class="BigCutomers">
    <el-dialog
      :title="this.$t('org.label.bigCustomer')"
      :visible.sync="curPopupsVisible"
      width="1000px"
      center
      @close="sendCode"
      :close-on-click-modal="false"
      :append-to-body="true"
    ><!-- 大客户 -->
      <one-table-template
        ref="multipleTable"
        :dynamicButtons="tableButtons"
        :dynamicComponents="tableComponents"
        :dynamicApiConfig="apiConfig"
        :dynamicTableCols="tableCols"
        :dynamicFormFields="formField"
      />
    </el-dialog>
  </section>
</template>
<script>
import { oneTableWithViewTemplateMixins } from '@/components/mixins/oneTableWithViewTemplateMixins';
import { valueObjectMixins } from '@/components/mixins/valueObjectMixins';
import { orgApis } from "@/api/graphQLApiList/org";
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
      apiConfig: orgApis.oneIdCustListQueryFindAll,
      // 动态组件-按钮
      tableButtons: [
        {
          compKey: "btnKey1",
          type: "primary",
          size: "small",
          clickEvent: () => this.queryTable(1),
         text: this.$t('sys.button.query')
          },//查询
        {
          compKey: "btnKey2",
          type: "",
          size: "small",
          clickEvent: () => this.reset(),
         text: this.$t('sys.button.reset')
         },//重置
        {
          compKey: "btnKey3",
          type: "",
          size: "small",
          clickEvent: () =>
            this.sendCode("custClassName", "custName", "carBrandCn"),
         text: this.$t('sys.button.confirm')
          },//确认
      ],
      // 动态组件-查询条件
      tableComponents: [
        // 显示组件
        {
          compKey: "compKey1",
          labelName: this.$t('org.label.bigCustomerType'),
          lookuptype: "DB0006",
          codeField: "custClassCode",
          component: () => import("@/components/org/LookupValue"),
          type: "dropdownList",
          isMust: true
        },//客户类型
        {
          compKey: "compKey2",
          labelName: this.$t('org.label.bigCustomerName'),
          codeField: "custName",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        },//客户名称
        {
          compKey: "compKey3",
          labelName: this.$t('org.label.unifiedCode'),
          codeField: "vin",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        }//统一编号
      ],
      // 动态生成网格列
      tableCols: [
        {
          prop: "carBrandCn",
          label:this.$t('org.label.carBrandCn'),
          width: null,
          align: "center"
        },//品牌
        {
          prop: "custNo",
          label:this.$t('org.label.bigCustomerType'),
          width: null,
          align: "center"
        },//统一编码
        {
          prop: "custName",
          label:this.$t('org.label.bigCustomerName'),
          width: null,
          align: "center"
        },//大客户名称
        {
          prop: "custClassName",
          label: this.$t('org.label.unifiedCode'),
          width: null,
          align: "center"
        }//大客户类型
      ],
      //表单查询数据（查询条件）
      formField: {
        custClassCode: "",
        custName: "",
        vin: "1"
      }
    };
  }
};
</script>
