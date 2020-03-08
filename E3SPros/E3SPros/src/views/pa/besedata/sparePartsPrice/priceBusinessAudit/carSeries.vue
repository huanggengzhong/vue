<template>
  <section class="carSeries">
    <el-dialog
      title="车系选择"
      :visible.sync="carSeriesVisible"
      width="900px"
      :close-on-click-modal="false"
      :append-to-body="true"
      center
      @close="sendCode"
    >
      <div class="filter-container filter-title">查询条件</div>
      <div class="filter-container filter-params">
        <el-row :gutter="26">
          <carBrand
            :span="span"
            :isMul="carBrandIsMul"
            :code="listQuery.carBrandCode"
            @changeCode="getBrandCode"
          />
          <el-col :span="8">
            <label>车系名称</label>
            <el-input
              v-model="listQuery.carSeriesCn"
              suffix-icon="el-icon-search"
              placeholder="请输入"
              size="small"
            />
          </el-col>
          <div class="filter-container filter-button">
            <el-button type="primary" size="small" @click="fetchData()">查询</el-button>
            <el-button size="small" @click="reset">重置</el-button>
            <el-button size="small" @click="select">确认</el-button>
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
        @selection-change="getCarSeriesCode"
        :highlight-current-row="!isMul"
        @current-change="getCarSeriesCode"
      >
        <el-table-column label="序号" width="60" type="index">
          <template slot-scope="scope">{{ scope.$index + 1 }}</template>
        </el-table-column>

        <el-table-column width="60" type="selection" v-if="isMul"></el-table-column>

        <el-table-column label="品牌名称" prop="carBrand">
          <template slot-scope="scope">{{ scope.row.brandName }}</template>
        </el-table-column>

        <el-table-column label="车系编码" prop="carSeriesCode">
          <template slot-scope="scope">{{ scope.row.carSeriesCode }}</template>
        </el-table-column>

        <el-table-column label="车系中文名称" prop="carSeriesCn">
          <template slot-scope="scope">{{ scope.row.carSeriesCn }}</template>
        </el-table-column>

        <el-table-column label="车系英文名称" prop="carSeriesEn">
          <template slot-scope="scope">{{ scope.row.carSeriesEn }}</template>
        </el-table-column>
      </el-table>
      <el-pagination
        background
        layout="prev, pager, next, sizes, ->, total"
        prev-text="上一页"
        next-text="下一页"
        :page-sizes="[10, 20, 30]"
        :page-size="10"
        :total="list?listRecords:0"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </el-dialog>
  </section>
</template>
<script>
// import { getCarSeriesM } from "@/api/components";
import carBrand from "@/components/org/carBrand/carBrand";
import { seChooseCarSeriesQueryFind } from "@/api/pa/basedata/paDbPriceTrace";
export default {
  components: {
    carBrand
  },
  props: {
    carSeriesVisible: {
      type: Boolean,
      default: function() {
        return false;
      }
    },
    isMul: {
      type: Boolean,
      default: function() {
        return false;
      }
    }
  },
  data() {
    return {
      span: 8,
      carBrandIsMul: false,
      code: undefined,
      listLoading: false,
      list: [],
      codeInside: {
        code: [],
        name: []
      },
      listQuery: {
        carBrandCode: null,
        carSeriesCn: null
      },
      sign: false,
      pageSize: 10,
      pageIndex: 1,
      listRecords: null,
      tableHeaderRowClassName({ row, rowIndex }) {
        if (rowIndex === 0) {
          return "background-color:rgb(239, 239, 239);height:32px;";
        }
      }
    };
  },
  created() {
    this.listLoading = false;
  },
  watch: {
    carSeriesVisible(newValue, oldValue) {
      if (newValue) {
        //清空查询条件
        this.reset();
        this.list = [];
      }
    }
  },
  methods: {
    getBrandCode(val) {
      this.listQuery.carBrandCode = val;
    },
    fetchData() {
      this.listLoading = true;
      seChooseCarSeriesQueryFind(
        this.pageSize,
        this.pageIndex,
        this.listQuery
      ).then(response => {
        this.listLoading = false;
        this.listRecords = Number(
          response.data.seChooseCarSeriesQueryFind.records
        );
        this.list = response.data.seChooseCarSeriesQueryFind.rows;
      });
    },
    reset() {
      if (this.isMul) {
        this.code = [];
      } else {
        this.code = "";
      }
      this.listQuery.carBrandCode = undefined;
      this.listQuery.carSeriesCn = "";
    },
    handleSizeChange(val) {
      this.pageSize = val;
      this.fetchData();
    },
    handleCurrentChange(val) {
      this.pageIndex = val;
      this.fetchData();
    },
    getCarSeriesCode(val) {
      if (this.isMul) {
        if (val[0] || val.length == "0") {
          this.codeInside = {
            code: [],
            name: []
          };
          for (var i = 0; i < val.length; i++) {
            this.codeInside.code.push(val[i].carSeriesCode);
            this.codeInside.name.push(val[i].carSeriesCn);
          }
        }
      } else {
        this.codeInside = {
          code: [],
          name: []
        };
        if(val){
          this.codeInside.code.push(val.carSeriesCode);
        }
        if(val){
          this.codeInside.name.push(val.carSeriesCn);
        }
      }
    },
    sendCode() {
      this.sign == true
        ? this.$emit("changeCode", this.codeInside)
        : this.$emit("changeCode", "");
      this.sign = false;
    },
    select() {
      if (this.codeInside == "") {
        this.$message({
          message: "未选中数据",
          type: "warning",
          duration: 2000
        });
      } else {
        this.sign = true;
        this.$emit("changeCode", this.codeInside);
      }
    }
  }
};
</script>