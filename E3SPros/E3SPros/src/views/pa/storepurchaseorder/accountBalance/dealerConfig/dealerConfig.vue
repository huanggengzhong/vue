<!--
* description: 车型配置弹出框
* author: luojx
* createdDate: 2019-08-02
-->
<template>
  <section class="dealerConfig">
    <el-dialog
      title="经销商选择"
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
import { paApis } from "@/api/graphQLApiList/pa";
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
      apiConfig: paApis.mdmOrgdlrQueryByPage,
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
          clickEvent: () => this.sendCode("dlrCode", "dlrShortName"),
          text: "确认"
        }
      ],
      // 动态组件-查询条件
      tableComponents: [
        // 显示组件
        {
          compKey: "compKey1",
          labelName: "品牌",
          codeField: "carBrandCode",
          isMul: false,
          component: () => import("@/components/org/carBrand/carBrand"),
          type: "dropdownList",
          isMust: true
        },
        {
          compKey: "compKey2",
          labelName: "大区",
          codeField: "bigAreaId",
          isMul: false,
          component: () => import("@/components/org/BigArea/index"),
          type: "dropdownList",
          isMust: true
        },
        {
          compKey: "compKey3",
          labelName: "省份",
          codeField: "provinceId",
          isMul: false,
          component: () => import("@/components/org/ProvinceQuery/index"),
          type: "dropdownList",
          isMust: true
        },
        {
          compKey: "compKey4",
          labelName: "经销商编码",
          codeField: "dlrCode",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: false
        },
        {
          compKey: "compKey5",
          labelName: "经销商简称",
          codeField: "dlrShortName",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: false
        },
        {
          compKey: "compKey6",
          component: () => import("@/views/pa/storepurchaseorder/accountBalance/checkbox"),
          isMust: false
        }
      ],
      // 动态生成网格列
      tableCols: [
        { prop: "dlrCode", label: "经销商编码", width: 0, align: "center" },
        {
          prop: "dlrShortName",
          label: "经销商简称",
          width: 0,
          align: "center"
        },
        {
          prop: "linkAddr",
          label: "经销商地址",
          width: 0,
          align: "center"
        },
        {
          prop: "",
          label: "负责人",
          width: 0,
          align: "center"
        },
        {
          prop: "",
          label: "负责人联系方式",
          width: 0,
          align: "center",
          hidden: true
        }
      ],
      //表单查询数据（查询条件）
      formField: {
        carBrandCode: "", //品牌
        bigAreaId: "", //大区
        provinceId: "", //省份
        dlrCode: "", //经销商编码
        dlrShortName: "", //经销商简称
        // isBlockUp: false //包含停用DLR
      }
    };
  }
};
</script>
