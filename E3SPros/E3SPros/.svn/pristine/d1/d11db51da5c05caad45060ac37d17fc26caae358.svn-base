<!--
* description: 车辆选择弹出框（网点，责任网点，意向网点多选）
* author: dxuem
* createdDate: 2019-10-09
-->
<template>
  <section class="carTypeConfig">
    <el-dialog
      title="车辆选择"
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
      apiConfig: crmApis.mdmDlrCustInfoQuery, //客户信息选择
      // 动态组件-按钮
      tableButtons: [
        {
          compKey: "btnKey1",
          type: "primary",
          size: "small",
          clickEvent: () => this.query(),
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
          labelName: "VIN码",
          codeField: "vin",
          component: () => import("@/components/crm/textbox/crmTextInput"),
          type: "inputText",
          isMust: true
        },
        {
          compKey: "compKey2",
          labelName: "车牌号",
          codeField: "carLiscen",
          component: () => import("@/components/crm/textbox/crmTextInput"),
          type: "inputText",
          isMust: true
        }
      ],
      // 动态生成网格列
      tableCols: [
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
              labelName: "选择",
              codeField: "editControlBtn",
              clickEvent: () => this.sendCode("vin", "vin"),
              component: () => import("@/components/org/linkButton"),
              align: "center"
            }
          ]
        },
        {
          prop: "vin",
          label: "VIN码",
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
        {
          prop: "carColorName",
          label: "车身颜色",
          width: null,
          align: "center"
        },
        {
          prop: "carLicenseNo",
          label: "发动机号",
          width: null,
          align: "center"
        },
        {
          prop: "",
          label: "排量",
          width: null,
          align: "center"
        },
        {
          prop: "",
          label: "变速箱型号",
          width: null,
          align: "center"
        }
      ],
      //表单查询数据（查询条件）
      formField: {
        vin: "",
        carLicenseNo: ""
      }
    };
  },
  methods: {
    query() {
      debugger;
      if (this.formField.vin == "" && this.formField.carLicenseNo == "") {
        this.$message({
          message: "查询条件不能全部为空",
          type: "warning"
        });
      } else {
        this.queryTable(1);
      }
    }
  }
};
</script>
