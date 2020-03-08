<!--
* description:  汽车销售退款
* zhhx
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
      :dynamicIsShowSelect="false"
    />
    <!-- :dynamicIsShowSelect="false"     -->
      <!-- :dynamicIsShowMoreBtn="false" -->


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
import { oneTableWithViewTemplateMixins } from '@/components/mixins'
import { veApis } from "@/api/graphQLApiList/ve";
import OneTableTemplate from "@/components/templates/oneTable";
import Edit from "./edit";
import { CacheConfig } from '@/cache/configCache/index'
export default {
  name: "veCarSalesRefund",
  // 组件混入对象
  mixins: [oneTableWithViewTemplateMixins],
  components: {
    OneTableTemplate,
    Edit
  },
  // 阻塞路由预加载网格中组件的数据
beforeRouteEnter(to, from, next) {CacheConfig.initData(to.path, function(){next()})},
  data() {
    return {
      // 网格查询API配置对象
      apiConfig: veApis.veCarSalesRefundFindAll,
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
      tableComponents: CacheConfig.cacheData[this.$route.path] && CacheConfig.cacheData[this.$route.path].tableComponents.length > 0 ? CacheConfig.cacheData[this.$route.path].tableComponents : [

        {
          compKey: "compKey1",
          labelName: "客户名称",
          codeField: "buyCustName",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        },
        {
          compKey: "compKey2",
          labelName: "订单编号",
          codeField: "saleOrderCode",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        },
        {
          compKey: "compKey3",
          labelName: '销退申请时间',
          codeField: "createDate",
          component: () => import("@/components/org/datePicker/datePicker"),
          type: "datePicker",
          dateOptionsType: "0",
          isMust: true
        },
         {
          compKey: "compKey4",
          labelName: '销售顾问',
          codeField: "caEmpName",
          component: () => import("@/components/org/userSelect"),
          type: "datePicker",
          isMust: false
        },
        {
          compKey: "compKey5",
          labelName: '退款状态',
          codeField: "refundStatus",
          lookuptype: 'VE0210',
          component: () => import("@/components/org/LookupValue"),
          type: "datePicker",
          isMust: false
        }

      ],
      // 动态生成网格列
      tableCols: CacheConfig.cacheData[this.$route.path]&& CacheConfig.cacheData[this.$route.path].tableCols.length > 0 ? CacheConfig.cacheData[this.$route.path].tableCols: [

        {
          prop: "controlBtn",
          label: "操作",
          codeField: "controlBtn",
          width: 120,
          align: "center",
          isComponent: true,
          comps: [
            {
              compKey: "propKey1",
              labelName: "退款",
              codeField: "editControlBtn",
              clickEvent: this.edit,
              component: () => import("@/components/org/linkButton")
            }
          ]
        },
        { prop: "saleOrderCode", label: "订单编号", width: 120, align: "center",hidden:true},
         { prop: "saleContractNo", label: "合同编号", width: 120, align: "center"},
        {
          prop: "refundStatus",
          label: "退款状态",
          width: null,
          align: "center"
        },
         {
          prop: "buyCustName",
          label: "客户名称",
          width: null,
          align: "center",
          hidden:true
        },
        {
          prop: "caEmpName",
          label: "销售顾问",
          width: null,
          align: "center"
        },
        { prop: "invoiceStatus", label: "发票状态", width: null, align: "center"},
        { prop: "factReceivedAmount", label: "已收金额", width: null, align: "center"},
        { prop: "gatheringAmount", label: "应退金额", width: null, align: "center"},
        { prop: "disposalAmount", label: "罚金", width: null, align: "center"},
        { prop: "createDate", label: "销退申请时间", width: null, align: "center"},
        { prop: "phone", label: "电话", width: null, align: "center",hidden: true},
        { prop: "webChatPayAmount", label: "微信支付额", width: null, align: "center",hidden: true},
        { prop: "alipayAmount", label: "支付宝支付额", width: null, align: "center",hidden: true},
        { prop: "gatheringEmpName", label: "退款人", width: null, align: "center",hidden: true},
        { prop: "remark", label: "退款备注", width: null, align: "center",hidden: true},
      ],
      //表单查询数据
      formField: {
        buyCustName: "",
        saleOrderCode: "",
        createDate: "",
        caEmpName: '',
        refundStatus: '',
      },
      // 是否使用刷新Key的方式刷新弹窗
      resetDialogKey: false
    };
  }
};
</script>
