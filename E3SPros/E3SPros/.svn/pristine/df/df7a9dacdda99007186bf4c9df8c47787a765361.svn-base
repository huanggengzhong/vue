<template>
<!-- Excall导入弹框 -->
  <el-dialog
    title="Excell导入"
    :visible.sync="ExImVisible"
    center
    :append-to-body="true"
    :close-on-click-modal="false"
    width="70%"
    @close="closeDialog"
  >
    <div class="filter-container filter-params">
      <mix-form
        ref="detailForm"
        isSearch="true"
        :dynamicFormFields="detailFields"
        :dynamicFieldsData="detailFieldsData"
      ></mix-form>
      <mix-button></mix-button>
    </div>
  </el-dialog>
</template>
<script>
//导入组件
import mixForm from "@/components/basicComponent/mixForm";
import mixButton from "@/components/basicComponent/mixButton";
export default {
  name: "seMaintenanceExIm",
  components:{
      mixForm,
      mixButton
  },
  data() {
    return {
      detailFields: [
        {
          label: "请选一个文件",
          codeField: "",
          type: "inputTxt"
        }
      ],
      detailFieldsData: {}
    };
  }
};
</script>

<style>
</style>