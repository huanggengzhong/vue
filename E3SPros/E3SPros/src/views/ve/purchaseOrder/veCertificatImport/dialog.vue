<template>
  <el-dialog
    :close-on-click-modal="false"
    title="合格证快递信息导入"
    :visible.sync="dialogVisible"
    @close="sendCodeHandleVisible"
    class="importDialog"
    width="1000px"
  >
    <div class="filter-container filter-params">
      <el-row :gutter="26" style="text-align:right">
        <el-col :span="18">
          <label>导入文件路径</label>
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
        <el-button size="small" @click="importClick">导入</el-button>
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
        this.$message({ message: "导入成功", type: "success" });
        this.sendCodeHandleVisible;
      }else{
      this.$message({ message: "请选择要导入的文件", type: "warning" });
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