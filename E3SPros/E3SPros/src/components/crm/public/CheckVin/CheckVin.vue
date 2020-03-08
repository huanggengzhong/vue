<!--
* description: 车型配置弹出框
* author: laimzh
* createdDate: 2019-08-13
-->
<template>
  <section class="CheckVin">
    <el-dialog
      title="车辆选择"
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
      apiConfig: crmApis.mdmDlrCarQuery,//车辆信息查询
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
          clickEvent: () => this.sendCode("vin", "vin"),
          text: "确认"
        }
      ],
      // 动态组件-查询条件
      tableComponents: [
        // 显示组件
        {
          compKey: "compKey1",
          labelName: "VIN码",
          codeField: "vin",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        },
        {
          compKey: "compKey2",
          labelName: "车牌号",
          codeField: "carLicenseNo",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        }
        // {compKey: 'compKey3', labelName: '车型编码', codeField: 'carConfigCode', component: () => import('@/components/org/commonInput'), type: 'inputText', isMust: true},
        // // 隐藏组件
        // {compKey: 'compKey4', labelName: '车型名称', codeField: 'carConfigCn', component: () => import('@/components/org/commonInput'), type: 'inputText', isMust: false},
        // {compKey: 'compKey5', labelName: '车型小类', codeField: 'smallCarTypeId', component: () => import('@/components/org/SmallCarType'), type: 'dropdownList', isMust: false},
        // {compKey: 'compKey6', labelName: '电机类型', lookuptype: 'VE0079', codeField: 'motorType', component: () => import('@/components/org/LookupValue'), type: 'dropdownList', isMust: false},
        // {compKey: 'compKey7', labelName: '车型简码', codeField: 'carTypeShortCode', component: () => import('@/components/org/commonInput'), type: 'inputText', isMust: false},
      ],
      // 动态生成网格列
      tableCols: [
        // { prop: 'carBrandCn', label: '品牌', width: 115, align: 'center' },
        // { prop: 'mdmVeCarSeriesExtend.carSeriesCn', label: '车系', width: 160, align: 'center' },
        // { prop: 'mdmSmallCarTypeExtend.smallCarTypeCode', label: '车型', width: 160, align: 'center' },
        // { prop: 'mdmSmallCarTypeExtend.smallCarTypeCn', label: '车型名称', width: 160, align: 'center' },
        // { prop: 'mdmSmallCarTypeExtend.smallCarTypeId', label: '车型Id', width: 160, align: 'center', hidden: true },
        // { prop: 'carConfigId', label: '车型配置Id', width: 0, align: 'center', hidden: true },
        // { prop: 'carConfigCode', label: '车型配置', width: 160, align: 'center' },
        // { prop: 'carConfigCn', label: '车型配置名称', width: 0, align: 'center', hidden: true },
        // { prop: 'purState', label: '排量', width: 80, align: 'center' }
        { prop: "vin", label: "VIN", width: null, align: "center" },
        { prop: "carLicense", label: "车牌号", width: null, align: "center" },
        {
          prop: "carSeriesCn",
          label: "车系名称",
          width: null,
          align: "center"
        },
        {
          prop: "smallCarTypeCn",
          label: "车型名称",
          width: null,
          align: "center"
        },
        { prop: "electricSerialNumber", label: "电机编号", width: null, align: "center" },
        {
          prop: "electricMachinery",
          label: "电控编号",
          width: null,
          align: "center"
        },
        { prop: "carColorName", label: "车身颜色", width: null, align: "center" }
      ],
      //表单查询数据（查询条件）
      formField: {
        vin: "",
        carLicenseNo: ""
      }
    };
  }
};
</script>
