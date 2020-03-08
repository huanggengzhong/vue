<template>
  <section>
    <el-dialog
      title="供应商选择"
      :visible.sync="supplierChooseVisible"
      width="900px"
      :close-on-click-modal="false"
      :append-to-body="true"
      center
      @close="sendCode"
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
            <el-button size="small" @click="reset">重置</el-button>
            <el-button size="small" @click="select">选择</el-button>
            <el-button size="small" @click="quit()">退出</el-button>
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
        @current-change="handleChange"
        height="300"
      >
        <el-table-column property="num" label="序号" width="60">
          <template slot-scope="scope">{{ scope.$index + 1 }}</template>
        </el-table-column>
        <el-table-column property="partname" label="经销商" width="150">
          <template slot-scope="scope">{{ scope.row.dlrShortName }}</template>
        </el-table-column>
        <!-- <el-table-column property="choosenum" type="selection" label="选择+" width="150" ></el-table-column> -->
        <el-table-column property="partbrandcodeName" label="供应商编码" width="150">
          <template slot-scope="scope">{{ scope.row.supplierCode }}</template>
        </el-table-column>
        <el-table-column property="partno" label="供应商名称" width="150">
          <template slot-scope="scope">{{ scope.row.supplierShortName}}</template>
        </el-table-column>
        <el-table-column property="partstatename" label="供应商地址" width="150">
          <template slot-scope="scope">{{ scope.row.supplierAddr}}</template>
        </el-table-column>
        <el-table-column property="partstatename" label="邮编" width="150">
          <template slot-scope="scope">{{ scope.row.zip}}</template>
        </el-table-column>
        <el-table-column property="partstatename" label="供应商传真" width="150">
          <template slot-scope="scope">{{ scope.row.supplierFax}}</template>
        </el-table-column>
        <el-table-column property="partstatename" label="供应商电话" width="150">
          <template slot-scope="scope">{{ scope.row.supplierTel}}</template>
        </el-table-column>
        <el-table-column property="partstatename" label="联系人" width="150">
          <template slot-scope="scope">{{ scope.row.linkMan}}</template>
        </el-table-column>
        <el-table-column property="partstatename" label="联系人电话" width="150">
          <template slot-scope="scope">{{ scope.row.linkManTel}}</template>
        </el-table-column>
        <el-table-column property="partstatename" label="Email" width="150">
          <template slot-scope="scope">{{ scope.row.email}}</template>
        </el-table-column>
        <el-table-column property="partstatename" label="备注" width="150">
          <template slot-scope="scope">{{ scope.row.remark}}</template>
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
import { paDbDlrSupplierQueryFindAllWindow } from "@/api/pa/paDbVarietyMutation1";
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
      span: "8",
      listLoading: false,
      list: [],
      codeInside: "",
      sign: false,
      listQuery: {
        supplierCode: "",
        supplierShortName: ""
      },
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
    supplierChooseVisible(newValue, oldValue) {
      if (newValue) {
        this.reset();
        this.list = [];
        this.codeInside = "";
      }
    }
  },
  methods: {
    //查询
    fetchData() {
      this.listLoading = true;
      paDbDlrSupplierQueryFindAllWindow(
        this.pageSize,
        this.pageIndex,
        this.listQuery
      ).then(response => {
        this.listLoading = false;
        this.list = response.data.paDbDlrSupplierQueryFindAllWindow.rows;
      });
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
      // this.supplierChooseVisible = false;
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
    },
    //选择table中的内容
    handleChange(val) {
      this.codeInside = val;
    },
    quit() {
      this.$emit("changeCode", "");
    }
  }
};
</script>
<style lang="scss" scoped>
/deep/ .el-dialog__wrapper .el-dialog {
  height: 540px;
}
</style>

