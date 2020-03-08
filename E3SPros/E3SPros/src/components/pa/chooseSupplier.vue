<template>
  <section>
    <el-dialog
      title="供应商选择"
      :visible.sync="supplierChooseVisible"
      width="900px"
      @close="sendCode"
      :append-to-body="true"
      :close-on-click-modal="false"
    >
      <div class="filter-container filter-params">
        <el-row :gutter="26">
          <el-col :span="8">
            <lableName curLabelName="供应商编码" :isShowLabel="true" :isRequire="false"></lableName>
            <el-input size="small" v-model="listQuery.supplierCode" />
          </el-col>
          <el-col :span="8">
            <lableName curLabelName="供应商名称" :isShowLabel="true" :isRequire="false"></lableName>
            <el-input size="small" v-model="listQuery.supplierShortName" />
          </el-col>
          <el-col :span="24">
            <el-button size="small" type="primary" @click="fetchData()">查询</el-button>
            <el-button size="small" @click="select">选择</el-button>
            <el-button size="small" @click="reset">重置</el-button>
          </el-col>
        </el-row>
      </div>
      <div class="filter-container filter-title">查询结果</div>
      <el-table
        border
        stripe
        :data="list"
        v-loading="listLoading"
        highlight-current-row
        @row-click="getRowCode"
        height="300"
      >
        <el-table-column property="num" label="序号" width="60">
          <template slot-scope="scope">{{ scope.$index + 1 }}</template>
        </el-table-column>
        <!-- <el-table-column property="choosenum" type="selection" label="选择+" width="150" ></el-table-column> -->
        <el-table-column property="partbrandcodeName" label="供应商编码" width>
          <template slot-scope="scope">{{ scope.row.supplierCode }}</template>
        </el-table-column>
        <el-table-column property="partno" label="供应商简称" width>
          <template slot-scope="scope">{{ scope.row.supplierShortName}}</template>
        </el-table-column>
        <el-table-column property="partno" label="供应商全称" width>
          <template slot-scope="scope">{{ scope.row.supplierFullName}}</template>
        </el-table-column>
        <el-table-column property="partstatename" label="供应商地址" width>
          <template slot-scope="scope">{{ scope.row.supplierAddr}}</template>
        </el-table-column>
      </el-table>
      <el-pagination
        background
        layout="prev, pager, next, sizes, ->, total"
        prev-text="上一页"
        next-text="下一页"
        :page-sizes="[10, 20, 30]"
        :page-size="10"
        :total="list?list.length:0"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </el-dialog>
  </section>
</template>
<script>
import { paDbOemSupplierQueryFindAllWindow } from "@/api/pa/paChooseSupplier";
import lableName from "@/components/lableName";
export default {
  components: {
    lableName
  },
  props: {
    supplierChooseVisible: {
      type: Boolean,
      default: function() {
        return false;
      }
    }
  },
  data: function() {
    return {
      pageSize: "10",
      pageIndex: "1",
      getCode: "",
      span: "8",
      listLoading: false,
      list: [],
      sign: false,
      codeInside: {
        supplierCode: [],
        supplierShortName: []
      },
      listQuery: {
        supplierCode: "",
        supplierShortName: ""
      }
    };
  },
  created() {
    this.listLoading = false;
  },
  watch: {
    supplierChooseVisible(newValue, oldValue) {
      if (newValue) {
        this.reset();
        this.getCode = "";
        this.list = [];
        this.codeInside = {
          supplierCode: [],
          supplierShortName: []
        };
      }
    }
  },
  methods: {
    //查询
    fetchData() {
      this.listLoading = true;
      paDbOemSupplierQueryFindAllWindow(
        this.pageSize,
        this.pageIndex,
        this.listQuery
      ).then(response => {
        this.listLoading = false;
        this.list = response.data.paDbOemSupplierQueryFindAllWindow.rows;
      });
    },
    getRowCode(row) {
      this.getCode = row;
    },
    //重置
    reset() {
      this.listQuery.supplierCode = "";
      this.listQuery.supplierShortName = "";
    },
    handleSizeChange(val) {
      this.pageSize = val;
      this.fetchData();
    },
    handleCurrentChange(val) {
      this.pageIndex = val;
      this.fetchData();
    },
    //选择传值给父组件
    sendCode() {
      this.sign == true
        ? this.$emit("changeCode", this.getCode)
        : this.$emit("changeCode", "");
      this.sign = false;
    },
    select() {
      if (this.getCode == "") {
        this.$message({
          message: "未选中数据",
          type: "warning",
          duration: 2000
        });
      } else {
        this.sign = true;
        this.$emit("changeCode", this.getCode);
      }
    }
  }
};
</script>


