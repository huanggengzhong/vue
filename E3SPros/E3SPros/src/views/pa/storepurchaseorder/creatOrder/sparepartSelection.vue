<template>
  <section class="carType">
    <el-dialog
      title="备件选择"
      :visible.sync="sparepartVisible"
      center
      :close-on-click-modal="false"
      :append-to-body="true"
      width="1100px"
      @close="close"
    >
      <div class="filter-container filter-params">
        <el-row :gutter="26">
          <el-col :span="8">
            <label>备件号</label>
            <el-input v-model="listQuery.sparePartCode" placeholder="请输入" size="small" />
          </el-col>
          <el-col :span="8">
            <label>备件名称</label>
            <el-input v-model="listQuery.sparePartName" placeholder="请输入" size="small" />
          </el-col>
          <!-- 适用车型 -->
          <adaptType :span="8" @changeCode="getAdaptType" :name="adaptTypeName" :isReset="isReset" />
          <!-- 备件类别 -->
          <spareCategory
            :span="8"
            @changeCode="getSpareCategory"
            :name="spareCategoryName"
            :isReset="isReset"
          />
          <!-- 备件属性 -->
          <spareAttribute
            :span="8"
            @changeCode="getSpareAttribute"
            :name="spareAttributeName"
            :isReset="isReset"
          />
          <!-- <el-col :span="8">
            <label>不显示订货开关为关闭的配件</label>
            <input type="checkbox" v-model="listQuery.isBlockUp"/>
          </el-col>-->
          <el-col :span="8">
            <el-checkbox lable v-model="listQuery.isBlockUp" size="small" />
            <lableName curLabelName="不显示订货开关为关闭的配件" :isShowLabel="true" :isRequire="false"></lableName>
          </el-col>
          <el-col :span="24">
            <el-button type="primary" size="small" @click="fetchData()">查询</el-button>
            <el-button size="small" @click="reset()">重置</el-button>
            <el-button size="small" @click="rightSelect()">确定</el-button>
            <el-button size="small" @click="quit()">退出</el-button>
          </el-col>
        </el-row>
      </div>
      <div class="filter-container filter-title">查询结果</div>
      <el-col :span="16">
        <el-table
          v-loading="listLoading"
          :data="list"
          element-loading-text="Loading"
          border
          stripe
          :header-cell-style="tableHeaderRowClassName"
          highlight-current-row
          @select="leftSelect"
          @select-all="leftSelect"
          height="300"
        >
          <el-table-column align="center" label="序号" width="60">
            <template slot-scope="scope">{{ scope.$index + 1 }}</template>
          </el-table-column>
          <el-table-column type="selection" width="55" label="选择+" />
          <el-table-column label="备件号" width="155">
            <template slot-scope="scope">{{ scope.row.partNo }}</template>
          </el-table-column>
          <el-table-column label="备件名称" width="120">
            <template slot-scope="scope">{{ scope.row.partName }}</template>
          </el-table-column>
          <el-table-column label="订货开关" width="120">
            <template slot-scope="scope">{{ scope.row.dlrOrderSwitch }}</template>
          </el-table-column>
          <el-table-column label="应订数+" width="120">
            <template slot-scope="scope">{{ }}</template>
          </el-table-column>
          <el-table-column label="SNP">
            <template slot-scope="scope">{{ }}</template>
          </el-table-column>
          <el-table-column label="单价">
            <template slot-scope="scope">{{ }}</template>
          </el-table-column>
          <el-table-column label="经销商库存数" width="140">
            <template slot-scope="scope">{{ }}</template>
          </el-table-column>
          <el-table-column label="单位">
            <template slot-scope="scope">{{ scope.row.unit }}</template>
          </el-table-column>
          <el-table-column label="主机厂正常库存" width="140">
            <template slot-scope="scope">{{ }}</template>
          </el-table-column>
          <el-table-column label="配件状态" width="120">
            <template slot-scope="scope">{{ scope.row.partFlowState }}</template>
          </el-table-column>
          <el-table-column label="适用车型" width="120">
            <template slot-scope="scope">{{ scope.row.pubCarTypeName }}</template>
          </el-table-column>
          <el-table-column label="备件品牌" width="120">
            <template slot-scope="scope">{{ scope.row.partBrandName }}</template>
          </el-table-column>
          <el-table-column label="备件类别" width="120">
            <template slot-scope="scope">{{ scope.row.partTypeName }}</template>
          </el-table-column>
          <el-table-column label="备件名称" width="120">
            <template slot-scope="scope">{{ scope.row.partName }}</template>
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
      </el-col>
      <el-col :span="8">
        <el-table
          v-loading="listLoading"
          :data="rightList"
          element-loading-text="Loading"
          border
          stripe
          :header-cell-style="tableHeaderRowClassName"
          highlight-current-row
          height="300"
        >
          <el-table-column align="center" label="序号" width="60">
            <template slot-scope="scope">{{ scope.$index + 1 }}</template>
          </el-table-column>
          <el-table-column label="备件号" width="155">
            <template slot-scope="scope">{{ scope.row.partNo }}</template>
          </el-table-column>
          <el-table-column label="备件名称" width="120">
            <template slot-scope="scope">{{ scope.row.partName }}</template>
          </el-table-column>
          <el-table-column label="门店库存数" width="120">
            <template slot-scope="scope">{{ }}</template>
          </el-table-column>
        </el-table>
      </el-col>
    </el-dialog>
  </section>
</template>
<script>
import { paDbDlrPartListQueryList } from "@/api/pa/paBuPurOrder";
import adaptType from "@/views/pa/storepurchaseorder/creatOrder/tradeMark";
import spareCategory from "@/views/pa/storepurchaseorder/creatOrder/region";
import spareAttribute from "@/views/pa/storepurchaseorder/creatOrder/province";
import { getpaDbTransitList } from "@/api/pa/paDbTransitRelation";
import lableName from "@/components/lableName";
export default {
  components: {
    adaptType,
    spareCategory,
    spareAttribute,
    lableName
  },
  props: {
    sparepartVisible: {
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
    rightList: {
      type: Array,
      default: function() {
        return [];
      }
    }
  },
  data() {
    return {
      pageIndex: "1",
      pageSize: "10",
      codeInside: this.code,
      listLoading: true,
      list: [],
      optionDatas: [],
      isBlockUp: [],
      isReset: false,
      adaptTypeName: "适用车型",
      spareCategoryName: "备件类别",
      spareAttributeName: "备件属性",
      listQuery: {
        sparePartCode: undefined,
        sparePartName: undefined,
        orderCode: undefined,
        adaptType: [],
        spareCategory: [],
        spareAttribute: [],
        isBlockUp: undefined
      },
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
    sparepartVisible(newValue, oldValue) {
      if (newValue) {
        //清空查询条件
        this.reset();
        this.list = [];
        this.rightList = [];
      }
      // this.fetchData();
    }
  },
  methods: {
    fetchData() {
      this.listLoading = true;
      paDbDlrPartListQueryList(
        this.pageSize,
        this.pageIndex,
        this.listQuery
      ).then(response => {
        this.listLoading = false;
        this.list = response.data.paDbDlrPartListQueryList.rows;
      });
    },
    handleSizeChange(val) {
      this.pageSize = val;
      this.fetchData();
    },
    handleCurrentChange(val) {
      this.pageIndex = val;
      this.fetchData();
    },
    close() {
      this.$emit("changeCode", this.codeInside);
    },
    getAdaptType(val) {
      this.listQuery.adaptType.push(val);
    },
    getSpareCategory(val) {
      this.listQuery.spareCategory.push(val);
    },
    getSpareAttribute(val) {
      this.listQuery.spareAttribute.push(val);
    },
    leftSelect(selection) {
      this.rightList = selection;
    },
    rightSelect() {
      if (this.rightList.length === 0) {
        this.$message({
          message: "未选择数据",
          type: "warning",
          duration: 2000
        });
      } else {
        this.$emit("selectData", this.rightList);
      }
    },
    quit() {
      // this.sparepartVisible = false;
      this.$emit("changeCode");
    },
    reset() {
      this.listQuery.sparePartCode = undefined;
      this.listQuery.sparePartName = undefined;
      this.listQuery.orderCode = undefined;
      this.listQuery.isBlockUp = undefined;
      this.isReset = !this.isReset;
    }
  }
};
</script>
<style lang="scss" scoped>
/deep/ .el-dialog__wrapper .el-dialog {
  height: 575px;
}
</style>
