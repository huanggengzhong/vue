<template>
  <section class="planApply">
    <el-dialog title="需求申请" :visible.sync="planApplyVisible" width="900px" center @close="sendCode">
      <div class="filter-container filter-title">查询条件</div>
      <div class="filter-container filter-params">
        <el-row :gutter="26">
          <el-col :span="8">
            <label>车系编码</label>
            <el-input
              v-model="formFieldName.carSeriesName"
              suffix-icon="el-icon-search"
              placeholder="请输入"
              size="small"
              @focus="carSeriesVisible=true"
            />
          </el-col>
          <carSeries
            :carSeriesVisible="carSeriesVisible"
            @changeCarSeriesCode="changeCarSeriesCode"
          />
          <el-col :span="6">
            <el-input v-model="filePath" placeholder="选择文件" size="small"></el-input>
            <el-upload
              style="position:absolute;right:187px;bottom:10px"
              class="upload-demo"
              ref="upload"
              action="#"
              :on-preview="handlePreview"
              :file-list="fileList"
              :show-file-list="false"
              :on-remove="handleRemove"
              :auto-upload="false"
              :on-change='getFileName'
            >
              <el-button size="small">需求文档下载</el-button>

              <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
            </el-upload>
          </el-col>
          <el-col :span="2" style="text-align:left"></el-col>

          <div class="filter-container filter-button">
            <el-button type="primary" size="small" @click="fetchData()">申请</el-button>
            <el-button size="small">返回</el-button>
          </div>
        </el-row>
      </div>
      <div class="filter-container filter-title">查询结果</div>

      <el-table
        border
        stripe
        v-loading="listLoading"
        :header-cell-style="tableHeaderRowClassName"
        :data="list"
      ></el-table>
      <el-pagination
        background
        layout="prev, pager, next, sizes, ->, total"
        prev-text="上一页"
        next-text="下一页"
        :page-sizes="[10, 20, 30]"
        :page-size="10"
        :limit='1'
        :total="list?list.length:0"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </el-dialog>
  </section>
</template>
<script>
import carSeries from "@/components/org/carSeries/carSeries";
export default {
  components: { carSeries },
  props: {
    planApplyVisible: {
      type: Boolean,
      default: function() {
        return false;
      }
    }
  },

  data() {
    return {
      fileList: [],
      carSeriesVisible: false,
      span: "8",
      code: [],
      filePath: "",
      listLoading: false,
      list: [],
      codeInside: {
        code: [],
        name: []
      },
      formFieldName: { carSeriesName: "" },
      formField: { carSeriesCode: "" },
      tableHeaderRowClassName({ row, rowIndex }) {
        if (rowIndex === 0) {
          return "background-color:rgb(239, 239, 239);height:32px;";
        }
      }
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {},

    handleSizeChange(val) {
      this.listQuery.pageSize = val;
      this.fetchData();
    },
    handleCurrentChange(val) {
      this.listQuery.pageIndex = val;
      this.fetchData();
    },
    sendCode() {
      this.$emit("changeCode");
    },
    submitUpload() {
      this.$refs.upload.submit();
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    changeCarSeriesCode(val) {
      console.log('sdasdasdasd');
      this.formField.carSeriesCode = val.code.toString();
      this.formFieldName.carSeriesName = val.name.toString();
      this.carSeriesVisible = false;
    },getFileName(file, fileList){
        this.filePath=file.name;
    }

  }
};
</script>
<style lang='scss' scope scoped>
</style>
