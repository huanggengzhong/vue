<template>
  <section class="carType">
    <el-dialog
      title="经销商选择"
      :visible.sync="dealerVisible"
      width="900px"
      center
      :close-on-click-modal="false"
      :append-to-body="true"
      @close="sendCode"
    >
      <div class="filter-container filter-title">查询条件</div>
      <div class="filter-container filter-params">
        <el-row :gutter="26">
          <!-- 品牌 -->
          <brand
            :span="8"
            :isMul="true"
            :key="brandKey"
            :labelName="brandName"
            :code="listQuery.carBrandCode"
            @changeCode="getBrandCode"
          ></brand>
          <!-- 大区 -->
          <!-- <region :span="8" :name="regionName" @changeCode="getregion" :isReset="isReset" /> -->
          <bigArea :span="6" @changeCode="getBigAreaCode" />
          <!-- 省份 -->
          <province :span="8" :name="provinceName" @changeCode="getprovince" :isReset="isReset" />
        </el-row>
        <el-row :gutter="26">
          <el-col :span="8">
            <lableName curLabelName="供应商编码" :isShowLabel="true" :isRequire="false"></lableName>
            <el-input v-model="listQuery.supplierCode" placeholder="请选择" size="small" />
          </el-col>
          <el-col :span="8">
            <lableName curLabelName="供应商简称" :isShowLabel="true" :isRequire="false"></lableName>
            <el-input v-model="listQuery.supplierName" placeholder="请选择" size="small" />
          </el-col>
          <el-col :span="8">
            <el-checkbox lable v-model="listQuery.isBlockUp" />
            <label>包含停用DLR</label>
          </el-col>
          <el-col :span="24">
            <el-button type="primary" size="small" @click="fetchData()">查询</el-button>
            <el-button size="small" @click="reset()">重置</el-button>
            <el-button size="small" @click="confirm()">确定</el-button>
            <el-button size="small" @click="quit()">退出</el-button>
          </el-col>
        </el-row>
      </div>
      <div class="filter-container filter-title">查询结果</div>

      <el-table
        v-loading="listLoading"
        :data="list"
        element-loading-text="Loading"
        border
        stripe
        :header-cell-style="tableHeaderRowClassName"
        highlight-current-row
        @select="select"
        height="300"
      >
        <el-table-column align="center" label="序号" width="60">
          <template slot-scope="scope">{{ scope.$index + 1 }}</template>
        </el-table-column>
        <el-table-column type="selection" width="55" label="选择+" />
        <el-table-column label="经销商编码" width="155">
          <template slot-scope="scope">{{ scope.row.dlrCode }}</template>
        </el-table-column>
        <el-table-column label="经销商简称" width="155">
          <template slot-scope="scope">{{ scope.row.dlrShortName }}</template>
        </el-table-column>
        <el-table-column label="经销商地址">
          <template slot-scope="scope">{{ scope.row.linkAddr }}</template>
        </el-table-column>
        <el-table-column label="负责人">
          <template slot-scope="scope">{{ }}</template>
        </el-table-column>
        <el-table-column label="负责人联系方式">
          <template slot-scope="scope">{{ }}</template>
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
import { mdmOrgdlrQueryByPage } from "@/api/pa/paBuPurOrder";
import region from "@/views/pa/storepurchaseorder/creatOrder/region";
import province from "@/views/pa/storepurchaseorder/creatOrder/province";
import lableName from "@/components/lableName";
import brand from "@/components/org/carBrand/carBrand";
import bigArea from "@/components/org/BigArea/index";
export default {
  components: {
    region,
    province,
    lableName,
    brand,
    bigArea
  },
  props: {
    dealerVisible: {
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
    }
  },
  data() {
    return {
      codeInside: this.code,
      listLoading: true,
      list: [],
      optionDatas: [],
      selectData: null,
      listQuery: {
        supplierCode: undefined,
        supplierName: undefined,
        // orderCode: undefined
        // brand: [],
        carBrandCode: "",
        bigAreaId: [],
        provinceId: [],
        isBlockUp: undefined
      },
      regionName: "大区",
      provinceName: "省份",
      brandName: "", //品牌
      isReset: false,
      brandKey: "",
      pageSize: "10",
      pageIndex: "1",
      tableHeaderRowClassName({ row, rowIndex }) {
        if (rowIndex === 0) {
          return "background-color:rgb(239, 239, 239);height:32px;";
        }
      }
    };
  },
  created() {
    // this.fetchData();
    this.listLoading = false;
  },
  watch: {
    dealerVisible(newValue, oldValue) {
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
      this.listLoading = true;
      mdmOrgdlrQueryByPage(
        this.pageSize,
        this.pageIndex /* , this.listQuery */
      ).then(response => {
        this.listLoading = false;
        this.list = response.data.mdmOrgdlrQueryByPage.rows;
      });
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
    getorderCode(val) {
      this.listQuery.orderCode = val;
    },
    getregion(val) {
      this.listQuery.bigAreaId.push(val);
    },
    getprovince(val) {
      this.listQuery.provinceId.push(val);
    },
    select(selection) {
      this.selectData = selection;
    },
    confirm() {
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
      this.dealerVisible = false;
    },
    reset() {
      this.listQuery.supplierCode = undefined;
      this.listQuery.supplierName = undefined;
      this.listQuery.isBlockUp = false;
      this.listQuery.carBrandCode = "";
      this.isReset = !this.isReset;
    },
    getBrandCode(val) {
      this.listQuery.carBrandCode = val;
    },
    getBigAreaCode(val) {
      this.listQuery.bigAreaCode = val;
    }
  }
};
</script>

<style lang="scss" scoped>
/deep/ .el-dialog__wrapper .el-dialog {
  height: 610px;
}
</style>