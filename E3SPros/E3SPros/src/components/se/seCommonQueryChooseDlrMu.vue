<template>
  <el-col class="padding-l-10">
    <div class="filter-container filter-params">
      <el-row>
        <el-col class="margin-b-0">
          <div class="filter-container filter-button">
            <el-button size="small" type="primary" @click="submit">确定</el-button>
            <el-button size="small" @click="delect">删除</el-button>
          </div>
        </el-col>
      </el-row>
    </div>
    <el-table
      :data="list"
      element-loading-text="listLoading"
      border
      stripe
      max-height="360"
      style="width: 100%"
      v-loading="listLoading"
      highlight-current-row
      @select="selectTable"
      @select-all="selectTable"
      ref="chooseWiTables"
    >
      <el-table-column align="center" label="序号" width="55">
        <template slot-scope="scope">{{ scope.$index + 1 }}</template>
      </el-table-column>
      <el-table-column type="selection" width="45"></el-table-column>
      <el-table-column label="经销商编码" align="center">
        <template slot-scope="scope">{{ scope.row.dlrCode }}</template>
      </el-table-column>
      <el-table-column label="经销商名称" align="center">
        <template slot-scope="scope">{{ scope.row.dlrFullName }}</template>
      </el-table-column>
    </el-table>
  </el-col>
</template>
<script>
export default {
  data() {
    return {
      list: [],
      listLoading: false,
      tableChooseList: []
    };
  },
  methods: {
    getData(val) {
      for (var i = 0; i < val.length; i++) {
        this.list.push(val[i]);
      }
    },
    delect() {
      if (this.tableChooseList.length === 0) {
        this.$alert("请选择要删除的数据！", "信息提示", {
          confirmButtonText: "确定",
          type: "warning",
          callback: action => {}
        });
      } else {
        for (let i of this.tableChooseList) {
          for (let j = 0; j < this.list.length; j++) {
            if (i.dlrId === this.list[j].dlrId) {
              this.list.splice(j, 1);
            }
          }
        }
      }
    },
    selectTable(selection) {
      this.tableChooseList = selection;
    },
    send() {
      if (this.list.length === 0) {
        this.$alert("您未选中数据！", "信息提示", {
          confirmButtonText: "确定",
          type: "warning",
          callback: action => {}
        });
      } else {
        this.$emit("sentData", this.list);
      }
    },
    submit() {
      if (this.list.length === 0) {
        this.$alert("您未选中数据！", "信息提示", {
          confirmButtonText: "确定",
          type: "warning",
          callback: action => {}
        });
      } else {
        this.$emit("sentData", this.list);
        this.resetList();
      }
    },
    resetList() {
      this.$refs.chooseWiTables.clearSelection();
      this.$emit("clearSelect");
      this.list = [];
    }
  }
};
</script>

<style scoped>
.margin-r-0 {
  margin-right: 0;
}
.margin-b-10 {
  margin-bottom: 10px;
}
.margin-b-0 {
  margin-bottom: 0;
}
.padding-l-10 {
  padding-left: 10px;
}
.textalign-l {
  text-align: left;
}
.color_ {
  color: #169bd5;
}
.dis-IB {
  display: inline-block;
}
</style>