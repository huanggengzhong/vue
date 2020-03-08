<template>
<!-- 批量新增弹框 -->
  <el-dialog
    title="批量新增"
    :visible.sync="batchAddVisible"
    center
    :append-to-body="true"
    :close-on-click-modal="false"
    width="70%"
    @close="closeDialog"
  >
    <div class="filter-container filter-params">
      <!-- 表单组件 -->
      <mix-form
        ref="detailForm"
        :isSearch="true"
        :dynamicFormFields="detailFields"
        :dynamicFieldsData="detailFieldsData"
      ></mix-form>

      <!-- 按钮组件 -->
      <mix-button name="Btns" :dynamicButtons="btns"></mix-button>
    </div>

    <!-- 表格组件 -->
    <mix-table
      ref="tableList"
      :isShowSelect="true"
      :isDialog="true"
      :queryParams="queryParams"
      :isMore="true"
      :dynamicTableCols="recallCols"
      :isPaging="true"
      multipleSelect="selection"
    ></mix-table>
  </el-dialog>
</template>
<script>
import mixForm from "@/components/basicComponent/mixForm";
import mixButton from "@/components/basicComponent/mixButton";
import mixTable from "@/components/basicComponent/mixTable";

export default {
  name: "seMaintenanceBatchAdd",
  components: {
    mixForm,
    mixButton,
    mixTable
  },
  props: {
    batchAddVisible: {
      type: Boolean,
      default: () => {
        return false;
      }
    }
  },
  data() {
    return {
      queryParams: {},
      recallCols: [
        { label: "选择", codeField: "" },
        { label: "公告车型", codeField: "" },
        { label: "启用日期", codeField: "" }
      ],


      detailFields: [
        {
          label: "车系",
          codeField: "carSeriesCn",
          type: "dropdownList",
          options: [
            { value: "", label: "全部" },
            { value: "1", label: "A系" },
            { value: "2", label: "B系" }
          ]
        },
        {
          label: "启用日期:",
          codeField: "beginEnableDate",
          type: "inputDate",
        },
        {
          label: "是否已经维护主表",
          codeField: "aaaaaa",
          type: "checkbox"
        }
      ],
      detailFieldsData: {
        carSeriesCn:"carSeriesCn",
        aaaaaa:true,
        beginEnableDate:"beginEnableDate"
      },

      btns: {
        left: [],
        right: [
          { name: "dataSave", label: "保存", event: this.dataSave },
          { name: "close", label: "关闭", event: this.closeDialog }
        ]
      }
    };
  },
  methods: {
    dataSave() {},
    closeDialog() {
      this.$emit("closeBatchAddDl", false);
    },

  }
};
</script>

<style>
</style>