<template>
  <section class="carType">
    <el-dialog
      title="收货地址维护"
      :visible.sync="consigneeVisible"
      width="900px"
      center
      :close-on-click-modal="false"
      :append-to-body="true"
      @close="sendCode"
    >
      <div class="filter-container filter-title">查询条件</div>
      <div class="filter-container filter-params">
        <el-row :gutter="26">
          <el-col :span="8">
            <label>收货人</label>
            <el-input v-model="listQuery.receiver" placeholder="请输入" size="small" />
          </el-col>
          <el-col :span="8">
            <label>联系电话</label>
            <el-input v-model="listQuery.linkTel" placeholder="请输入" size="small" />
          </el-col>
          <el-col :span="8">
            <label>收货地址</label>
            <el-input v-model="listQuery.receiptAddr" placeholder="请输入" size="small" />
          </el-col>
        </el-row>
        <el-row :gutter="26">
          <el-col :span="24">
            <el-button type="primary" size="small" @click="confirm()">选择</el-button>
            <el-button size="small" @click="save()">保存</el-button>
            <el-button size="small" @click="reset()">重置</el-button>
          </el-col>
        </el-row>
      </div>
      <div class="filter-container filter-title">查询结果</div>
      <mix-table
        ref="tableList"
        :queryParams="queryParams"
        :dynamicTableCols="cols"
        :isShowSelect="true"
        :isPaging="true"
        :isDialog="true"
      />
    </el-dialog>
  </section>
</template>
<script>
import { mdmOrgdlrQueryByPage } from "@/api/pa/paBuPurOrder";
import lableName from "@/components/lableName";
import mixTable from "@/components/basicComponent/mixTable";
import { seApis } from "@/api/graphQLApiList/se";
export default {
  components: {
    lableName,
    mixTable
  },
  props: {
    consigneeVisible: {
      type: Boolean,
      default: function() {
        return false;
      }
    }
  },
  data() {
    return {
      listLoading: true,
      codeInside: "",
      list: [],
      optionDatas: [],
      selectData: null,
      createdDate: [],
      listQuery: {
        receiver: "", //收货人
        linkTel: "", //联系电话
        receiptAddr: "" //收货地址
      },
      pageSize: "10",
      pageIndex: "1",
      consigneeVisible: false,
      tableHeaderRowClassName({ row, rowIndex }) {
        if (rowIndex === 0) {
          return "background-color:rgb(239, 239, 239);height:32px;";
        }
      },
      cols: [
        { label: "收货人", codeField: "carBrandCn" },
        { label: "联系电话", codeField: "carSeriesCn" },
        { label: "收货地址", codeField: "carTypeCn" },
        { label: "删除+", codeField: "mayOrderQty" }
      ],
      queryParams: {
        APIUrl: seApis.seChooseCarTypeQueryFind.APIUrl,
        InputType: seApis.seChooseCarTypeQueryFind.InputType,
        ServiceCode: seApis.seChooseCarTypeQueryFind.ServiceCode,
        dataInfo: {
          carBrandCode: "",
          carSeriesCode: "",
          carTypeCode: ""
        },
        apiQueryRow: [
          "carBrandCn",
          "carBrandCode",
          "carSeriesCn",
          "carSeriesCode",
          "carTypeCn",
          "carTypeCode"
        ]
      }
    };
  },
  created() {
    // this.fetchData();
    this.listLoading = false;
  },
  watch: {
    consigneeVisible(newValue, oldValue) {
      if (newValue) {
        //清空查询条件
        this.reset();
      }
      this.selectData = null;
      // this.fetchData();
      this.list = [];
    }
  },
  methods: {
    fetchData() {
      this.$refs.tableList.queryList();
    },
    handleSizeChange(val) {
      this.listQuery.pageSize = val;
      this.fetchData();
    },
    handleCurrentChange(val) {
      this.listQuery.pageIndex = val;
      this.fetchData();
    },
    sendCode() {
      this.$emit("changeCode", this.codeInside);
    },
    select(selection) {
      this.selectData = selection;
    },
    showConsignee() {
      this.consigneeVisible = true;
    },
    confirm() {
      this.selectData = this.$refs.tableList.currentRow;
      if (this.selectData == null || this.selectData.length == 0) {
        this.$message({
          message: "请选中一条经销商数据",
          type: "warning",
          duration: 2000
        });
      } else if (this.selectData.length > 1) {
        /* this.$alert("只能选择一条经销商数据！", "信息提示", {
          confirmButtonText: "确定",
          type: "warning",
          callback: action => {}
        }); */
        this.$message({
          message: "只能选择一条经销商数据",
          type: "warning",
          duration: 2000
        });
      } else {
        this.$emit("selectDealer", this.selectData);
      }
    },
    quit() {
      this.consigneeVisible = false;
    },
    reset() {
      this.listQuery.receiver = null;
      this.listQuery.linkTel = null;
      this.listQuery.receiptAddr = null;
    },
    save() {
      //保存操作
    }
  }
};
</script>

<style lang="scss" scoped>
/deep/ .el-dialog__wrapper .el-dialog {
  height: 610px;
}
</style>