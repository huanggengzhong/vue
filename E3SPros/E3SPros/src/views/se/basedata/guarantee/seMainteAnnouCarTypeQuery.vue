<template>
  <!-- 保险维护公告车型查询弹框 -->
  <el-dialog
    title="公告车型查询"
    :visible.sync="annouCarTypeVisible"
    center
    :append-to-body="true"
    :close-on-click-modal="false"
    width="70%"
    @close="closeDialog"
  >
    <div class="filter-container filter-params">
      <!-- 按钮 -->
      <mix-button name="Btns" :dynamicButtons="btns"></mix-button>
    </div>
    <div class="filter-container filter-params">
      <!-- 表格 -->
      <mix-table
        ref="tableList"
        :isShowSelect="true"
        :isDialog="true"
        :isMore="true"
        :dynamicTableCols="mainteCols"
        :isPaging="true"
        :queryParams="queryParams"
      ></mix-table>
    </div>
  </el-dialog>
</template>

<script>
import mixButton from "@/components/basicComponent/mixButton";
import mixTable from "@/components/basicComponent/mixTable";

export default {
  name: "seMainteAnnouCarTypeQuery",
  components: {
    mixButton,
    mixTable
  },
  props: {
    annouCarTypeVisible: {
      type: Boolean,
      default: function() {
        return false;
      }
    }
  },
  data() {
    return {
      btns: [
        {
          name: "close",
          text:"关闭",
          clickEvent: "closeDialog",
          position: "right",
          argument: {
            type: "close"
          }
        }
      ],
      mainteCols: [{ label: "公告车型", codeField: "" }],
      queryParams: {}
    };
  },
  methods: {
    closeDialog() {
      this.$emit("closeAnnouCatTypeQuery", false);
    }
  }
};
</script>

<style>
</style>