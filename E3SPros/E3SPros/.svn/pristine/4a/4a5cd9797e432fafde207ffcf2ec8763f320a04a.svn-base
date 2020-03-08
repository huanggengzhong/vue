<template>
  <section class="carType">
    <el-dialog title="打印入库准备单" :visible.sync="printVisible" width="900px" @close="sendCode">
      <div ref="print">
        <div class="title">主机厂采购入库准备单</div>
        <el-row :gutter="24" class="dataInfo">
          <el-col :span="8">
            <div class="dataInfo-1">广州风日</div>
          </el-col>
          <el-col :span="8">
            <div>
              供应商：
              <span>海马二工厂总部</span>
            </div>
          </el-col>
          <el-col :span="8">
            <div>
              入库时间：
              <span>2019/08/15</span>
            </div>
          </el-col>
        </el-row>
        <el-table
          class="tableList"
          height="270"
          :data="list"
          element-loading-text="Loading"
          border
          fit
          stripe
          :header-cell-style="tableHeaderRowClassName"
        >
          <el-table-column label="序号" width="70" type="index" align="center"></el-table-column>
          <el-table-column prop="relateOrderCode" label="备件号" width="130" align="center"></el-table-column>
          <el-table-column prop="partBrandCode" label="备件名称" width="110" align="center"></el-table-column>
          <el-table-column prop="partName" label="单位" width="70" align="center"></el-table-column>
          <el-table-column prop="unit" label="单价" width="80" align="center"></el-table-column>
          <el-table-column prop="warehouseName" label="入库数量" align="center" width="100"></el-table-column>
          <el-table-column prop="warehouseName" label="金额" align="center" width="80"></el-table-column>
          <el-table-column prop="warehouseName" label="仓库名称" align="center" width="100"></el-table-column>
          <el-table-column prop="warehouseName" label="仓位编号" align="center"></el-table-column>
        </el-table>
        <el-row :gutter="24" class="bottomInfo">
          <el-col :span="24">
            <label>合计金额：</label>
            <span>231.00</span>
          </el-col>
          <el-col :span="6">
            <label>备件经理：</label>
            <span></span>
          </el-col>
          <el-col :span="6">
            <label>仓库人员：</label>
            <span>经销商管理员</span>
          </el-col>
          <el-col :span="6">
            <label>制表人：</label>
            <span>经销商管理员</span>
          </el-col>
          <el-col :span="6">
            <label>制表时间：</label>
            <span>2019-08-16</span>
          </el-col>
        </el-row>
      </div>
      <div align="right">
        <el-button type="primary" size="small" @click="printSon">打印</el-button>
      </div>
    </el-dialog>
  </section>
</template>
<script>
export default {
  components: {},
  props: {
    printVisible: {
      type: Boolean,
      default: function() {
        return false;
      }
    },
    printList: {
      type: Array,
      default: function() {
        return [];
      }
    }
  },
  data() {
    return {
      tableHeaderRowClassName({ row, rowIndex }) {
        if (rowIndex === 0) {
          return "background-color:rgb(239, 239, 239);height:32px;font-weight:300;";
        }
      }
    };
  },
  created() {},
  methods: {
    sendCode() {
      this.$emit("changeCode", this.codeInside, false);
    },
    printSon() {
      this.$print(this.$refs.print);
    }
  }
};
</script>
<style lang="scss" scoped>
/deep/ .label {
  font-weight: 300 !important;
}
.tableList {
  margin-bottom: 10px;
}
.bottomInfo {
  margin-bottom: 10px;
}
.bottomInfo :first-child {
  text-align: right;
  margin-bottom: 10px;
}
.bottomInfo :last-child {
  text-align: right;
}
.dataInfo {
  margin-bottom: 10px;
}
/deep/ .dataInfo-1 {
  text-align: left !important;
}
.dataInfo :last-child {
  text-align: right;
}
.title {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  text-align: center;
  font-size: 30px;
  font-weight: 500;
  margin: 0 0 15px 0;
}
/deep/ .el-dialog__wrapper .el-dialog {
  height: 500px;
}
/deep/ .height {
  height: 50px;
}
/deep/ .line-height {
  line-height: 50px;
}
/deep/ .border {
  border: 1px solid #797979 !important;
}
</style>
