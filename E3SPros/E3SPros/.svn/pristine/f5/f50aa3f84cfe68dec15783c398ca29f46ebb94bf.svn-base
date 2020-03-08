<template>
  <section class="carType">
    <el-dialog
      title="员工选择"
      :visible.sync="seDbRepairGroupTechInsertVisible"
      width="900px"
      @close="sendCode"
      :close-on-click-modal="false"
      :append-to-body="true"
    >
      <div class="filter-container filter-title">查询条件</div>
      <div class="filter-container filter-params">
        <el-row :gutter="26">
          <el-col :span="8">
            <label>部门名称</label>
            <el-input clearable v-model="listQuery.deptName" size="small" :disabled="true" />
          </el-col>
          <el-col :span="8">
            <label>员工名称</label>
            <el-input clearable v-model="listQuery.empName" size="small" />
          </el-col>
          <el-col :span="8">
            <label>性别</label>
            <el-select
              clearable
              v-model="listQuery.genderCode"
              size="small"
              placeholder="请选择"
              :disabled="false"
            >
              <el-option label="男" value="1"></el-option>
              <el-option label="女" value="0"></el-option>
            </el-select>
          </el-col>
          <el-col :span="8" class="margin-top-10">
            <label>状态</label>
            <el-select
              clearable
              v-model="listQuery.isEnable"
              size="small"
              placeholder="请选择"
              :disabled="true"
            >
              <el-option label="在职" value="1"></el-option>
              <el-option label="离职" value="0"></el-option>
            </el-select>
          </el-col>
          <div class="filter-container filter-button padding-bottom-10 margin-top-31">
            <el-button type="primary" size="small" @click="queryRepairGroupTech()">查询</el-button>
            <el-button size="small" @click="techInsert">选择</el-button>
            <el-button size="small" @click="reset">重置</el-button>
          </div>
        </el-row>
      </div>
      <div class="filter-container filter-title">查询结果</div>

      <el-table
        v-loading="listLoading"
        :data="list"
        element-loading-text="Loading"
        border
        stripe
        highlight-current-row
        @row-click="rowClick"
      >
        <el-table-column align="center" label="序号" width="60">
          <template slot-scope="scope">{{ scope.$index + 1 }}</template>
        </el-table-column>
        <el-table-column label="员工编码" align="center">
          <template slot-scope="scope">{{ scope.row.empCode }}</template>
        </el-table-column>
        <el-table-column label="员工姓名" align="center">
          <template slot-scope="scope">{{ scope.row.empName }}</template>
        </el-table-column>
        <el-table-column label="部门名称" align="center">
          <template slot-scope="scope">{{ scope.row.deptName }}</template>
        </el-table-column>
        <el-table-column label="岗位" align="center">
          <template slot-scope="scope">{{ scope.row.stationName }}</template>
        </el-table-column>
        <el-table-column label="性别" align="center">
          <template slot-scope="scope">
            <span v-if="scope.row.genderCode == 1">男</span>
            <span v-else-if="scope.row.genderCode == 0">女</span>
          </template>
        </el-table-column>
        <el-table-column label="状态" align="center">
          <template slot-scope="scope">
            <span v-if="scope.row.isEnable == 1">在职</span>
            <span v-else-if="scope.row.isEnable == 0">离职</span>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        background
        layout="prev, pager, next, sizes, ->, total"
        prev-text="上一页"
        next-text="下一页"
        :page-sizes="[10, 20, 30]"
        :page-size="10"
        :total="list?listLength:0"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </el-dialog>
  </section>
</template>
<script>
import { getCarType } from "@/api/components";
import { seApis } from "@/api/graphQLApiList/se";
import {
  doSeDbRepairGroupQuery,
  doSeDbRepairGroupTechQuery,
  doSeDbRepairGroupInsert,
  doSeDbRepairGroupUpdate,
  doSeDbRepairGroupDelete,
  doSeDbRepairGroupTechInsert,
  doSeDbFavoPowerQueryFindAll
} from "@/api/se/basedata/seDbRepairGroup";

export default {
  components: {},
  props: {
    seDbRepairGroupTechInsertVisible: {
      type: Boolean,
      default: function() {
        return false;
      }
    },
    code: {
      type: String,
      default: function() {
        return "";
      }
    },
    repairGroupId: {
      type: String,
      default: function() {}
    }
  },
  data() {
    return {
      codeInside: this.code,
      listLoading: false,
      list: [],
      responseData: [],
      optionDatas: [],
      selectRepairGroupData: {},
      repairGroupTechInsertData: {
        dataInfo: {}
      },
      listInsert: {
        empid: "",
        empName: ""
      },
      listQuery: {
        empName: "",
        deptName: "售后服务部",
        genderCode: "1",
        isEnable: "1",
        dlrId: this.$store.getters.orgInfo.DLR_ID
      },
      pageIndex: "1",
      pageSize: "10",
      listLength: 0
    };
  },
  created() {
    this.list = [];
  },
  methods: {
    queryRepairGroupTech(page) {
      //查询员工
      let that = this;
      this.repairGroupTechData = [];
      this.listLoading = true;
      doSeDbFavoPowerQueryFindAll(
        that.pageSize,
        page || this.pageIndex,
        that.listQuery
      ).then(response => {
        if (
          response.data[seApis.seDbFavoPowerQueryFindAll.ServiceCode].result ===
          "1"
        ) {
          this.list =
            response.data[seApis.seDbFavoPowerQueryFindAll.ServiceCode].rows;
          this.listLoading = false;
          this.listLength =
            response.data[seApis.seDbFavoPowerQueryFindAll.ServiceCode].records;
        } else {
          this.listLoading = false;
        }
      });
    },
    handleSizeChange(val) {
      this.pageSize = val;
      this.queryRepairGroupTech();
    },
    handleCurrentChange(val) {
      this.pageIndex = val;
      this.queryRepairGroupTech();
    },
    sendCode() {
      this.listInsert.empid = "";
      this.listInsert.empName = "";
      this.$emit("close", false);
    },
    rowClick(row) {
      this.listInsert = row;
    },
    selectAll(selection) {
      this.listInsert = selection;
    },
    techInsert() {
      if (this.listInsert.empid == "") {
        this.$alert("请先选择人员！", "信息提示", {
          confirmButtonText: "确定",
          type: "warning",
          callback: action => {}
        });
      } else {
        // this.sendCode();
        this.seDbRepairGroupTechInsert();
      }
    },
    seDbRepairGroupTechInsert() {
      this.repairGroupTechInsertData.dataInfo.repairGroupId = this.repairGroupId;
      this.repairGroupTechInsertData.dataInfo.empId = this.listInsert.empid;
      this.repairGroupTechInsertData.dataInfo.empName = this.listInsert.empName;
      doSeDbRepairGroupTechInsert(this.repairGroupTechInsertData.dataInfo).then(
        response => {
          //调用
          if (
            response.data[seApis.SeDbRepairGroupTechInsert.ServiceCode]
              .result === "1"
          ) {
            this.$message({
              message: "新增成功",
              type: "success"
            });
            this.$emit("changeCode", false);
          } else {
            this.$message({
              message: "新增失败",
              type: "error"
            });
            this.$emit("changeCode", false);
          }
        }
      );
    },
    reset() {
      this.listQuery.empName = "";
      // this.listQuery.deptName = "";
      this.listQuery.genderName = "1";
      this.listQuery.isEnable = "1";
    },
    resetList() {
      this.list = [];
    }
  }
};
</script>
<style scoped>
.margin-top-10 {
  margin-top: 8px;
}
.margin-top-31 {
  margin-top: 31px;
}
.padding-bottom-10 {
  padding-bottom: 10px;
}
</style>
