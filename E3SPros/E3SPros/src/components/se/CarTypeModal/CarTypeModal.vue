<!--
* description: 车型选择_单选
* author: ydche
* createdDate: 2019-08-08
-->
<template>
  <section class="carTypeConfig">
    <el-dialog
      :title="this.isMul?'车型选择多选':'车型选择单选'"
      :visible.sync="curPopupsVisible"
      width="1000px"
      center
      @close="closeDialog"
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
    </el-dialog>
  </section>
</template>
<script>
import { oneTableWithViewTemplateMixins } from '@/components/mixins/oneTableWithViewTemplateMixins';
import { seApis } from "@/api/graphQLApiList/se";
import OneTableTemplate from "@/components/templates/popupsOneTable";
export default {
  // 组件混入对象：{data[listQuery] methods[queryTable]}
  //:dynamicIsShowSelect="false"
  mixins: [oneTableWithViewTemplateMixins],
  components: {
    OneTableTemplate
  },
  props: {

  },
  data() {
    return {
      // 网格查询API配置对象
      apiConfig: seApis.seChooseCarTypeQueryFind,
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
          clickEvent: () =>
            this.sendCode(
              "carSeriesCode",
              "carTypeCn",
              "carTypeCode",
              "carBrandCn",
              "rows"
            ),
          text: "确认"
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
          labelName: "品牌",
          codeField: "carBrandCode",
          component: () => import("@/components/org/carBrand/carBrand"),
          type: "propus",
          isMul: false,
          isMust: true
        },{
          compKey: "compKey2",
          labelName: "车系编码",
          codeField: "carSeriesCode",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        },{
          compKey: "compKey3",
          labelName: "车系名称",
          codeField: "carSeriesCn",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        }
        // 隐藏组件
      ],
      // 动态生成网格列
      tableCols: [
        {
          prop: "carBrandCode",
          label: "品牌编码",
          width: 120,
          align: "center"
        },
        { prop: "carBrandCn", label: "车辆品牌", width: 120, align: "center" },
        {
          prop: "carSeriesCode",
          label: "车系编码",
          width: 120,
          align: "center"
        },
        {
          prop: "carSeriesCn",
          label: "车系中文名",
          width: 120,
          align: "center"
        },
        { prop: "", label: "车系英文名", width: 120, align: "center" },
        { prop: "carTypeCn", label: "车型中文名", width: 120, align: "center" },
        { prop: "carTypeCode", label: "车型编码", width: 120, align: "center" }
        //hidden: true
      ],
      //表单查询数据（查询条件）
      formField: {
        carBrandCode: "",
        carSeriesCode: "",
        carSeriesCn: ""
      }
    };
  },
  // watch: {
  //   curPopupsVisible(newValue, oldValue) {
  //     if (newValue) {
  //       this.reset();
  //       this.list = [];
  //     }
  //   }
  // },
  created() {
    this.getBrandData();
  },
  methods: {
    //从父页面获取选择的车辆品牌编码
    getBrandData(val) {
      // console.log("val");
      // console.log(val);
      //this.formField[carBrandCode] = val;
      this.formField.carBrandCode = val;
    },
    //打开弹窗
    open(obj) {
      this.curPopupsVisible = true;
      // let str = {};
      // str = obj;
      // this.curValueObject = str;
      // if (this.curValueObject && typeof this.curValueObject === "object") {
      //   for (var key in this.formField) {
      //     if (this.curValueObject[key]) {
      //       this.formField[key] = this.curValueObject[key];
      //     } else {
      //       this.formField[key] = "";
      //     }
      //   }
      // }
    },
    // 发送回传值（弹窗时）
    sendCode(arrayCodeField, arrayTextField, carTypeCode, carBrandCn, rows) {
      // 获取嵌套组件的选中的值
      const that = this.$refs.multipleTable;
      const selectData = that.$refs.multipleTable.selection;
      if (selectData.length == 0) {
          this.$message({
            message: "请选择数据行！",
            type: "warning",
            duration: 2000
          });
          return;
        }
      //单选
      if (this.isMul == false) {
        if (selectData.length > 1) {
          this.$message({
            message: "只能选择一个车型",
            type: "warning",
            duration: 2000
          });
          that.$refs.multipleTable.clearSelection();
          return;
        }
        if (rows) {
          this.rows = selectData;
        }
        this.$emit("changeCode",this.rows);
        that.$refs.multipleTable.clearSelection();
      } else {
      //多选
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
        if (carTypeCode) {
          this.carTypeCode = this.$utils.getArrayFromJsonArray(
            selectData,
            carTypeCode
          );
        } else {
          this.carTypeCode = this.$utils.getArrayFromJsonArray(
            selectData,
            carTypeCode
          );
        }
        if (carBrandCn) {
          this.carBrandCn = this.$utils.getArrayFromJsonArray(
            selectData,
            carBrandCn
          );
        } else {
          this.carBrandCn = this.$utils.getArrayFromJsonArray(
            selectData,
            carBrandCn
          );
        }
        if (rows) {
          this.rows = selectData;
        }
      } 
      // else {
      //   this.modelCode = [];
      //   this.modelText = [];
      //   this.carTypeCode = [];
      //   this.carBrandCn = [];
      //   this.rows = [];
      // }
      
      var code =
        typeof this.modelCode === "string"
          ? this.modelCode
          : this.modelCode.join(",");
      var text =
        typeof this.modelText === "string"
          ? this.modelText
          : this.modelText.join(",");
      var carTypeCode =
        typeof this.carTypeCode === "string"
          ? this.carTypeCode
          : this.carTypeCode.join(",");
      var carBrandCn =
        typeof this.carBrandCn === "string"
          ? this.carBrandCn
          : this.carBrandCn.join(",");
      //this.curPopupsVisible = false;
      this.$emit(
        "changeCode",
        code,
        text,
        carTypeCode,
        carBrandCn,
        this.codeField,
        this.comType,
        this.popupsKey,
        this.rows
      );
      that.$refs.multipleTable.clearSelection();
    }
    this.curPopupsVisible = false;
  },
    closeDialog() {
      //this.reset();
      //this.curPopupsVisible = false;
      this.$emit("close", '!**!')
    }
  }
};
</script>
