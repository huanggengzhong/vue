<template>
  <div class="app-container app-container-table">
    <div class="filter-container filter-button" ref="searcheHeight">
      <el-button type="primary" size="small" @click="fetchData(1)">查询</el-button>
      <el-button size="small" @click="getExcel()">导出</el-button>
      <el-button size="small" @click="reset()">重置</el-button>
    </div>

    <div class="filter-container filter-title" ref="conTitleHeight">
      <div>查询条件</div>
    </div>

    <div class="filter-container filter-params" ref="conHeight">
      <el-row :gutter="26">
        <section>
          <el-col :span="6">
            <span class="demonstration">维修交车日期</span>
            <el-date-picker
              v-model="listQuery.date"
              type="daterange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              value-format="yyyy-MM-dd"
              @change="getDate"
            ></el-date-picker>
          </el-col>
        </section>

        <el-col :span="6">
          <label>车牌号</label>
          <el-input size="small" v-model="listQuery.dataInfo.carLicense" placeholder="请输入内容" />
        </el-col>

        <el-col :span="6">
          <label>经销商</label>
          <el-input
            v-model="listQuery.dataInfo.dlrId"
            suffix-icon="el-icon-search"
            placeholder="请选择"
            size="small"
            @focus="openComQueChoMu"
          />
        </el-col>
        <seComQueChoMu
          ref="seComQueChoMu"
          :seComQueChoMuDlrVisible="seComQueChoMuDlrVisible"
          @sentCode="getComQueChoMu"
          @close="closeComQueChoMu"
        />
      </el-row>
    </div>

    <div class="filter-container filter-title" ref="resultTitleHeight">查询结果</div>

    <el-table
      v-loading="listLoading"
      :data="list"
      ref="multipleTable"
      element-loading-text="Loading"
      border
      fit
      stripe
      highlight-current-row
      :height="tableHeight"
    >
      <el-table-column align="center" label="序号" width="60">
        <template slot-scope="scope">{{ scope.$index + 1 }}</template>
      </el-table-column>
      <el-table-column label="专营店名称" width="150">
        <template slot-scope="scope">{{ scope.row.dlrShortName}}</template>
      </el-table-column>
      <el-table-column label="施工单号" width="150">
        <template slot-scope="scope">{{ scope.row.repairOrderId }}</template>
      </el-table-column>
      <el-table-column label="服务代表" width="150">
        <template slot-scope="scope">{{ scope.row.saName }}</template>
      </el-table-column>
      <el-table-column label="送修时间" width="150">
        <template slot-scope="scope">{{ scope.row.repairTime }}</template>
      </el-table-column>
      <el-table-column label="维修交车时间" width="150">
        <template slot-scope="scope">{{ scope.row.deliveryDate }}</template>
      </el-table-column>
      <el-table-column label="VIN码" width="150">
        <template slot-scope="scope">{{ scope.row.vin }}</template>
      </el-table-column>
      <el-table-column label="车牌号" width="150">
        <template slot-scope="scope">{{ scope.row.carLicense }}</template>
      </el-table-column>
      <el-table-column label="服务车型" width="150">
        <template slot-scope="scope">{{ scope.row.carTypeCode }}</template>
      </el-table-column>
      <el-table-column label="行驶里程" width="150">
        <template slot-scope="scope">{{ scope.row.mileage }}</template>
      </el-table-column>
      <el-table-column label="客户名称" width="150">
        <template slot-scope="scope">{{ scope.row.custName }}</template>
      </el-table-column>
      <el-table-column label="工时费合计" width="150">
        <template slot-scope="scope">{{ scope.row.workitemAmount }}</template>
      </el-table-column>
      <el-table-column label="备件费合计" width="150">
        <template slot-scope="scope">{{ scope.row.partAmount }}</template>
      </el-table-column>
      <el-table-column label="其他费合计" width="150">
        <template slot-scope="scope">{{ scope.row.otherAmount }}</template>
      </el-table-column>
      <el-table-column label="费用合计" width="150">
        <template slot-scope="scope">{{ scope.row.feeAmount }}</template>
      </el-table-column>
      <el-table-column label="工时费预估" width="150">
        <template slot-scope="scope">{{ scope.row.workitemFee }}</template>
      </el-table-column>
      <el-table-column label="备件费预估" width="150">
        <template slot-scope="scope">{{ scope.row.partFee }}</template>
      </el-table-column>
      <el-table-column label="其他费预估" width="150">
        <template slot-scope="scope">{{ scope.row.otherFee }}</template>
      </el-table-column>
      <el-table-column label="预估费合计" width="150">
        <template slot-scope="scope">{{ scope.row.shouldCost }}</template>
      </el-table-column>
      <el-table-column label="实收费" width="150">
        <template slot-scope="scope">{{ scope.row.realfear }}</template>
      </el-table-column>
      <el-table-column label="优惠费用" width="150">
        <template slot-scope="scope">{{ scope.row.sRealrebatefare }}</template>
      </el-table-column>
      <el-table-column label="现金" width="150">
        <template slot-scope="scope">{{ scope.row.paymoney }}</template>
      </el-table-column>
      <el-table-column label="银行" width="150">
        <template slot-scope="scope">{{ scope.row.payblack }}</template>
      </el-table-column>
      <el-table-column label="冲预收" width="150">
        <!-- <template slot-scope="scope">
          {{ scope.row. }}
        </template>-->
      </el-table-column>
      <el-table-column label="转账" width="150">
        <template slot-scope="scope">{{ scope.row.transfer }}</template>
      </el-table-column>
      <el-table-column label="微信" width="150">
        <template slot-scope="scope">{{ scope.row.mobilePay }}</template>
      </el-table-column>
      <el-table-column label="支付宝" width="150">
        <template slot-scope="scope">{{ scope.row.treasurePay }}</template>
      </el-table-column>
      <el-table-column label="厂家挂账" width="150">
        <!-- <template slot-scope="scope">
          {{ scope.row. }}
        </template>-->
      </el-table-column>
      <el-table-column label="保险挂账" width="150">
        <!-- <template slot-scope="scope">
          {{ scope.row. }}
        </template>-->
      </el-table-column>
      <el-table-column label="协议挂账" width="150">
        <!-- <template slot-scope="scope">
          {{ scope.row. }}
        </template>-->
      </el-table-column>
      <el-table-column label="内部" width="150">
        <template slot-scope="scope">{{ scope.row.hostaccount }}</template>
      </el-table-column>
      <el-table-column label="合计" width="150">
        <template slot-scope="scope">{{ scope.row.sjsf }}</template>
      </el-table-column>
      <el-table-column label="备件成本" width="150">
        <template slot-scope="scope">{{ scope.row.sPartAmount }}</template>
      </el-table-column>
      <el-table-column label="毛利" width="150">
        <template slot-scope="scope">{{ scope.row.mlhj }}</template>
      </el-table-column>
      <el-table-column label="备注" width="150">
        <template slot-scope="scope">{{ scope.row.remark }}</template>
      </el-table-column>
    </el-table>
    <el-pagination
      background
      ref="paginationHeight"
      layout="prev, pager, next, sizes, ->, total"
      prev-text="上一页"
      next-text="下一页"
      :page-sizes="[10, 20, 30]"
      :page-size="10"
      :total="list?list.length:0"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </div>
</template>

<script>
import { apiSeReport } from "@/api/graphQLApiList/se";
import { doQueryList } from "@/api/se/basedata/repair/seRepairReportQueryRepairDaily";
import seComQueChoMu from "@/components/se/seComQueChoMu";
import { the_Height } from "@/components/se/seMixins/makeHeight";

export default {
  mixins: [the_Height],
  components: {
    seComQueChoMu
  },

  data() {
    return {
      tableHeight: 310, // 网格高度
      tableMarginHeight: 15,
      list: null,
      listLoading: false,
      seComQueChoMuDlrVisible: false,
      listQuery: {
        pageIndex: 1,
        pageSize: 10,
        limit: 20,
        date: undefined,
        dataInfo: {
          oemCode: "",
          groupCode: "",
          dlrId: "",
          begDeliveryDate: "",
          endDeliveryDate: "",
          vin: "",
          carLicense: ""
        }
      }
    };
  },

  created() {
    this.fetchData(1);
  },

  methods: {
    fetchData(page,dataType) {
      const that = this;
      this.listLoading = true;

      var pageSize = dataType == "excel" ? 99999 : this.pageSize;
      var tableColumns =
        this.$refs.multipleTable == null? null: this.$refs.multipleTable.columns;

      doQueryList(
        page || that.listQuery.pageIndex,
        that.listQuery.dataInfo,
        "维修营业日报列表导出",
        "维修营业日报列表",
        tableColumns
      ).then(response => {
        if (dataType == "excel") {
          this.$utils.downloadFile(response, "维修营业日报导出.xlsx");
          this.listLoading = false;
        } else if (
          response.data.seRepairReportQueryRepairDailyFindAll.result === "1" 
          // &&
          // response.data.seRepairReportQueryRepairDailyFindAll.rows != ""
        ) {
          if (page) {
            //查询完返回指定的page页数
            that.listQuery.pageIndex = page;
          }
           that.pageTotal =
            response.data[
              apiSeReport.seRepairReportQueryRepairDailyFindAll.ServiceCode
            ].records;
          that.list =
            response.data[
              apiSeReport.seRepairReportQueryRepairDailyFindAll.ServiceCode
            ].rows;
          this.listLoading = false;
        }
      });
      console.log("******SeRepairDaily*********");
      console.log(this.listQuery.dataInfo);
    },
    reset() {
      (this.listQuery.date = []),
        (this.listQuery.dataInfo.carLicense = []),
        (this.listQuery.dataInfo.dlrId = "");
    },
    getDate(val) {
      this.listQuery.dataInfo.begDeliveryDate = val[0];
      this.listQuery.dataInfo.endDeliveryDate = val[1];
    },
    handleSizeChange(val) {
      this.listQuery.pageSize = val;
      this.fetchData();
    },
    handleCurrentChange(val) {
      this.listQuery.pageIndex = val;
      this.fetchData();
    },
    openComQueChoMu() {
      this.seComQueChoMuDlrVisible = true;
    },
    getComQueChoMu(val) {
      this.seComQueChoMuDlrVisible = false;
      this.listQuery.dataInfo.dlrId = val[0].label;
      console.log(val);
    },
    closeComQueChoMu(val) {
      this.seComQueChoMuDlrVisible = val;
    },
    getExcel() {
      this.fetchData(1, "excel");
    }
  }
};
</script>