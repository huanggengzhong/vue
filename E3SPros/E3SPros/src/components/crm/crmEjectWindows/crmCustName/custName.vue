<!--
* description: 客户名称弹出框（网点，责任网点，意向网点多选）
* author: dxuem
* createdDate: 2019-10-19
-->
<template>
  <section class="custName">
    <el-dialog
      title="客户名称"
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
import { oneTableWithViewTemplateMixins } from "@/components/mixins/oneTableWithViewTemplateMixins";
import { valueObjectMixins } from "@/components/mixins/valueObjectMixins";
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
      apiConfig: crmApis.mdmDlrCustInfoQuery, //专营店客户查询
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
        // 显示组件
        {
          compKey: "compKey1",
          labelName: "客户名称",
          codeField: "custName",
          component: () => import("@/components/crm/textbox/crmTextInput"),
          type: "inputText",
          isMust: true
        },
        {
          compKey: "compKey2",
          labelName: "电话",
          codeField: "phone",
          component: () => import("@/components/crm/textbox/crmTextInput"),
          type: "inputText",
          isMust: true
        },
        {
          compKey: "compKey2",
          labelName: "车牌号",
          codeField: "carLicenseNo",
          component: () => import("@/components/crm/textbox/crmTextInput"),
          type: "inputText",
          isMust: true
        },
        {
          compKey: "compKey2",
          labelName: "VIN码",
          codeField: "vin",
          component: () => import("@/components/crm/textbox/crmTextInput"),
          type: "inputText",
          isMust: false
        }
      ],
      // 动态生成网格列
      tableCols: [
        {
          prop: "controlBtn",
          label: "操作",
          codeField: "controlBtn",
          width: 200,
          align: "center",
          isComponent: true,
          comps: [
            {
              compKey: "propKey1",
              labelName: "选择",
              codeField: "editControlBtn",
              clickEvent: index => this.sendCode("dlrCode", "dlrShortName"),
              component: () => import("@/components/org/linkButton"),
              align: "center"
            }
          ]
        },
        {
          prop: "custName",
          label: "客户名称",
          width: null,
          align: "center"
        },
        {
          prop: "genderName",
          label: "性别",
          width: null,
          align: "center"
        },
        {
          prop: "phone",
          label: "电话",
          width: null,
          align: "center"
        },
        {
          prop: "carLicenseNo",
          label: "车牌号",
          width: null,
          align: "center"
        },
        {
          prop: "vin",
          label: "VIN码",
          width: null,
          align: "center"
        },
        {
          prop: "carSeriesCn",
          label: "车系",
          width: null,
          align: "center"
        },
        {
          prop: "isCarowner",
          label: "是否车主",
          width: null,
          align: "center"
        },
        {
          prop: "carBrandName",
          label: "车辆品牌",
          width: null,
          align: "center"
        },
        {
          prop: "smallCarTypeCn",
          label: "车型名称",
          width: null,
          align: "center"
        },
        {
          prop: "custFullName",
          label: "客户全称",
          width: null,
          align: "center",
          hidden:true
        },
        {
          prop: "addrProvince",
          label: "省份",
          width: null,
          align: "center",
          hidden:true
        },
        {
          prop: "addrCity",
          label: "城市",
          width: null,
          align: "center",
          hidden:true
        },
        {
          prop: "addrCounty",
          label: "区县",
          width: null,
          align: "center",
          hidden:true
        },
        {
          prop: "addrStreet",
          label: "详细地址",
          width: null,
          align: "center",
          hidden:true
        },
        {
          prop: "credNo",
          label: "客户全称",
          width: null,
          align: "center",
          hidden:true
        },
        {
          prop: "principalName",
          label: "公司负责人",
          width: null,
          align: "center",
          hidden:true
        },
        {
          prop: "principalPhone",
          label: "负责人电话",
          width: null,
          align: "center",
          hidden:true
        },
        //个人
        {
          prop: "birthDate",
          label: "出生日期",
          width: null,
          align: "center",
          hidden:true
        },
        {
          prop: "officeTel",
          label: "办公电话",
          width: null,
          align: "center",
          hidden:true
        },
        {
          prop: "custFullName",
          label: "家庭电话",
          width: null,
          align: "center",
          hidden:true
        },
        {
          prop: "credTypeCode",
          label: "证件类型",
          width: null,
          align: "center",
          hidden:true
        },
        {
          prop: "custFullName",
          label: "证件号码",
          width: null,
          align: "center",
          hidden:true
        },
      ],
      //表单查询数据（查询条件）
      formField: {
        phone: "",
        custName: "",
        carLicenseNo: "",
        vin: ""
      }
    };
  },
  methods: {}
};
</script>