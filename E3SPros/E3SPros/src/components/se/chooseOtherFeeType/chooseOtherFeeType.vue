<!--
* description: 其他费用
* author: ydche
* createdDate: 2019-08-08
-->
<template>
  <section class="carTypeConfig">
    <el-dialog
      title="选择其他费用"
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
      />

      <edit
        :dynamicEditRowData="editRowData"
        :popupsVisible="editPopupsVisible"
        :key="editPopupsKey"
        :popupsState="editPopupsState"
        @close="close"
      ></edit>
    </el-dialog>
  </section>
</template>
<script>
import { oneTableWithViewTemplateMixins } from '@/components/mixins/oneTableWithViewTemplateMixins';
import { valueObjectMixins } from '@/components/mixins/valueObjectMixins';
import { seApis } from "@/api/graphQLApiList/se";
import { orgApis } from "@/api/graphQLApiList/org";
import OneTableTemplate from "@/components/templates/popupsOneTable";
import Edit from "./edit";

export default {
  // 组件混入对象：{data[listQuery] methods[queryTable]}
  mixins: [oneTableWithViewTemplateMixins, valueObjectMixins],
  components: {
    OneTableTemplate,
    Edit
  },
  data() {
    return {
      // 网格查询API配置对象
      apiConfig: seApis.ChooseOtherFeeType002,
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
          clickEvent: () => this.sendCode("costTypeCode", "costTypeName"),
          text: "确认"
        },
        {
          compKey: "btnKey3",
          type: "",
          size: "small",
          clickEvent: () => this.edit(),
          text: "修改"
        },
        {
          compKey: "btnKey4",
          type: "",
          size: "small",
          clickEvent: () => this.add(),
          text: "新增"
        },
        {
          compKey: "btnKey5",
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
          labelName: "车辆品牌",
          codeField: "carBrandCode",
          component: () => import("@/components/org/carBrand/carBrand"),
          isMul: false,
          type: "propus",
          isMust: true
        },
        {
          compKey: "compKey2",
          labelName: "来源",
          codeField: "isSystem",
          component: () =>
            import("@/components/se/chooseOtherFeeType/isSystem"),
          isMul: false,
          disabled: true,
          type: "propus",
          isMust: true
        },
        {
          compKey: "compKey3",
          labelName: "其他费用编码",
          codeField: "costTypeCode",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        },
        {
          compKey: "compKey4",
          labelName: "其他费用名称",
          codeField: "costTypeName",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: false
        }
      ],
      // 动态生成网格列
      tableCols: [
        {
          prop: "carBrandCodeName",
          label: "车辆品牌",
          width: 115,
          align: "center"
        },
        { prop: "isSystem", label: "来源", width: 0, align: "center" },
        {
          prop: "costTypeCode",
          label: "其他费用编码",
          width: 0,
          align: "center"
        },
        {
          prop: "costTypeName",
          label: "其他费用名称",
          width: 0,
          align: "center"
        },
        { prop: "maxFee", label: "最大费用", width: 0, align: "center" },
        { prop: "isEnable", label: "状态", width: 0, align: "center" },
        { prop: "remark", label: "备注", width: 0, align: "center" },
        {
          prop: "costTypeId",
          label: "costTypeId",
          width: 0,
          align: "center",
          hidden: true
        }
      ],
      //表单查询数据（查询条件）
      formField: {
        carBrandCode: "",
        isSystem: "",
        costTypeCode: "",
        costTypeName: ""
      }
    };
  },
  methods: {
    open(obj) {
      this.curPopupsVisible = true;
      let str = {};
      str = obj;
      this.curValueObject = str;
      if (this.curValueObject && typeof this.curValueObject === "object") {
        for (var key in this.formField) {
          if (this.curValueObject[key]) {
            this.formField[key] = this.curValueObject[key];
          } else {
            this.formField[key] = "";
          }
        }
      }
      for (let i of this.tableComponents) {
        console.log(i);
      }
    },
    sendCode(arrayCodeField, arrayTextField) {
      // 获取嵌套组件的选中的值
      const that = this.$refs.multipleTable;
      const selectData = that.$refs.multipleTable.selection;
      if (selectData && selectData.length > 0) {
        if (arrayCodeField) {
          this.modelCode = this.$utils.getArrayFromJsonArray(
            selectData,
            arrayCodeField
          );
        } else {
          this.modelCode = this.$utils.getArrayFromJsonArray(
            selectData,
            arrayCodeField
          );
        }
        if (arrayTextField) {
          this.modelText = this.$utils.getArrayFromJsonArray(
            selectData,
            arrayTextField
          );
        } else {
          this.modelText = this.$utils.getArrayFromJsonArray(
            selectData,
            arrayTextField
          );
        }
      } else {
        this.modelCode = [];
        this.modelText = [];
      }
      var code =
        typeof this.modelCode === "string"
          ? this.modelCode
          : this.modelCode.join(",");
      var text =
        typeof this.modelText === "string"
          ? this.modelText
          : this.modelText.join(",");
      this.$emit(
        "changeCode",
        selectData,
        text,
        this.codeField,
        this.comType,
        this.popupsKey
      );
      this.curPopupsVisible = false;
    }
  }
};
</script>
