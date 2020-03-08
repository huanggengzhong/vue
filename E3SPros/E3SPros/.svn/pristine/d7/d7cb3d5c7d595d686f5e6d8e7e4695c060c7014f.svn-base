<template>
  <section class="planApply">
    <el-dialog title="需求申请" :visible.sync="planApplyVisible"
    :append-to-body="true"
    :close-on-click-modal="false"
    :lock-scroll="true"
     width="900px" center @close="sendCode">
      <div class="filter-container filter-params">
        <el-row :gutter="26">
          <carCode :span="7" />

          <el-col :span="8">
            <el-input v-model="filePath" :placeholder="this.$t('sys.button.selFile')/*选择文件*/" size="small" width="30"></el-input>
            <el-upload
              style="position:absolute;right:187px;bottom:10px"
              class="upload-demo"
              action
              :show-file-list="false"
              :http-request="handleChange"
              :on-change="getFileName"
            >
              <el-button size="small" type="primary">{{$t('sys.button.selFile')/*选择文件*/}}</el-button>
              <el-button size="small">{{$t('sys.button.demandTemplateDownload')/*需求模板下载*/}}</el-button>
            </el-upload>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="2" style="text-align:left"></el-col>

          <div class="filter-container filter-button">
            <el-button type="primary" size="small" @click="upload()">{{$t('sys.button.application')/*申请*/}}</el-button>
            <el-button size="small" @click="sendCode()">{{$t('sys.button.cancel')/*取消*/}}</el-button>
          </div>
        </el-row>
      </div>
      <div class="filter-container filter-title">{{$t('sys.content.gridTitle')/*查询结果*/}}</div>
      <el-table
        :data="list"
        v-loading="listLoading"
        element-loading-text="Loading"
        border
        fit
        :key="tableKey"
        stripe
        :header-cell-style="tableHeaderRowClassName"
        highlight-current-row
      >
        <el-table-column align="center" :label="this.$t('sys.content.gridIndex')/*查询结果*/" width="60">
          <template slot-scope="scope">{{ scope.$index + 1 }}</template>
        </el-table-column>
        <el-table-column :label="this.$t('org.label.carBrand')/*品牌*/" align="center" width="120">
          <template slot-scope="scope">{{ scope.row.carBrandCn }}</template>
        </el-table-column>
        <el-table-column :label="this.$t('org.label.carSerise')/*车系*/" align="center" width="120">
          <template slot-scope="scope">{{ scope.row.carSeriesCn }}</template>
        </el-table-column>
        <el-table-column :label="this.$t('org.label.carType')/*车型*/" align="center" width="200">
          <template slot-scope="scope">{{ scope.row.carConFigCn }}</template>
        </el-table-column>
        <el-table-column :label="this.$t('org.label.carConfig')/*车型配置*/" align="center" width="200">
          <template slot-scope="scope">{{ scope.row.carConfigCode }}</template>
        </el-table-column>
        <el-table-column :label="this.$t('org.label.carColor')/*车身颜色*/" align="center" width="120">
          <template slot-scope="scope">{{ scope.row.carColorName }}</template>
        </el-table-column>
        <el-table-column :label="this.$t('org.label.carIncolor')/*内饰色*/" align="center" width="120">
          <template slot-scope="scope">{{ scope.row.carInColorName }}</template>
        </el-table-column>
        <el-table-column 
        v-for="(col, index) in numberList"
         :key="`col_${index}`"
          :label="col"
          :prop="col"
        >
          <!-- <template slot-scope="scope">{{ scope.row.col[index] }}</template> -->
        </el-table-column>
      </el-table>
      <el-pagination
        background
        layout="prev, pager, next, sizes, ->, total"
        :prev-text="this.$t('sys.content.prevPage')"
        :next-text="this.$t('sys.content.nextPage')"
        :page-sizes="[10, 20, 30]"
        :page-size="10"
        :limit="1"
        :total="list?list.length:0"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </el-dialog>
  </section>
</template>
<script>
import CarCode from "@/components/org/CarCode";
export default {
  components: { CarCode },
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
      carSeriesVisible: false,
      fileParam: "",
      tableKey: "a",
      code: [],
      filePath: "",
      listLoading: false,
      list: null,
      numberList: [],
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
  methods: {
    handleSizeChange(val) {
      this.listQuery.pageSize = val;
    },
    handleCurrentChange(val) {
      this.listQuery.pageIndex = val;
    },
    sendCode() {
      this.$emit("changeCode");
    },

    changeCarSeriesCode(val) {
      this.formField.carSeriesCode = val.code.toString();
      this.formFieldName.carSeriesName = val.name.toString();
      this.carSeriesVisible = false;
    },
    getFileName(file) {
      this.filePath = file.name;
    },
    handleChange(param) {
      this.fileParam = param;
    },
    upload() {
      if (this.filePath == "") {
        this.$alert("请选择需要导入的文件！", "提示", {
          confirmButtonText: "确定",
          type: "warning"
        });
        return;
      }

      //判断文件类型
      let pos = this.filePath.lastIndexOf(".");
      let lastName = this.filePath.substring(pos, this.filePath.length);
      if (
        lastName.toLowerCase() !== ".xls" &&
        lastName.toLowerCase() !== ".xlsx"
      ) {
        this.$alert("文件必须为.xls或者.xlsx类型", "提示", {
          confirmButtonText: "确定",
          type: "warning"
        });
        return;
      }

      this.listLoading = true;
      var that = this;
      var url = "/ly/mp/busicen/orc/excel/resolve.do "; // API根据不同功能url不同，请配置到对应模块配置
      this.$requestImport(url, this.fileParam, function(response) {
        if (response.data.result == "1") {
          
          that.numberList=[];
          if (response.data.rows.length > 0) {
            for (var key in response.data.rows[0]) {
              if(key != "carBrandCn" && key != "carSeriesCn" && key != "carConFigCn" 
              && key != "carInColorName" && key != "carColorName" && key != "carConfigCode") 
              that.numberList.push(key)
            }
          }
          
          that.list = response.data.rows;
          that.tableKey = that.tableKey + "1";
        } else {
          that.$alert("申请失败！" + response.data.msg, "提示", {
            confirmButtonText: "确定",
            type: "warning"
          });
          return;
        }
      });
      this.listLoading = false;
    }
  }
};
</script>
<style lang='scss' scope scoped>
</style>