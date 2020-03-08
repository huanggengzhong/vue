<template>
  <el-dialog
    :close-on-click-modal="false"
    :title="$t('org.label.AssignGoalImport')"
    :visible.sync="dialogVisible"
    @close="sendCodeHandleVisible"
    class="importDialog"
    width="1000px"
    :append-to-body="true"
  >
    <div class="filter-container filter-params">
      <el-row :gutter="26" style="text-align:right">
        <el-col :span="18">
          <label>{{this.$t("org.label.importFilePath")}}</label>
          <el-input v-model="fileName" size="small" />
        </el-col>
        <el-upload
          :auto-upload="false"
          action="www"
          style="text-align:left"
          :on-change="uploadEvent"
          :show-file-list="false"
        >
          <el-button size="mini">...</el-button>
        </el-upload>
      </el-row>
      <div class="filter-container filter-button orgManageBtn">
        <el-button size="small" @click="importClick">{{this.$t("sys.button.import")}}</el-button>
      </div>
    </div>
  </el-dialog>
</template>
<script>
import { veApis } from "@/api/graphQLApiList/ve";
import { requestGraphQL } from "@/api/commonRequest";

export default {
  props: {
    dialogVisible: {
      type: Boolean,
      default: function() {
        return false;
      }
    }
  },
  data() {
    return {
      fileName: "",
    };
  },
  methods: {
    importClick() {
      if (this.fileName != "") {
        this.$message({ message: this.$t("sys.tips.esTip18"), type: "success" });/*导入成功*/
        this.sendCodeHandleVisible;
      }else{
      this.$message({ message: this.$t("org.message.selImportFile"), type: "warning" });/*请选择需要导入的文件*/
      }
    },
    uploadEvent(file, fileList) {
      this.fileName = file.name;
    },
    sendCodeHandleVisible() {
      this.$emit("visible", false);
    },
  }
};
</script>