<template>
  <div class="app-container app-container-table">
    <div class="filter-container filter-button" ref="searcheHeight">
      <el-button type="primary" size="small" @click="fetchData('1')">查询</el-button>
      <el-button size="small" @click="getExcel()">导出</el-button>
      <el-button size="small" @click="reset()">重置</el-button>
    </div>

    <div class="filter-container filter-title" ref="conTitleHeight">
      <div>查询条件</div>
    </div>
    <div class="filter-container filter-params" ref="conHeight">
      <el-row :gutter="26">
        <el-col :span="6">
          <label>日期类型</label>
          <el-select v-model="dateType" size="small" placeholder="请选择">
            <el-option
              v-for="item in dateStatus"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-col>

        <section>
          <el-col :span="span">
            <span class="demonstration">起止时间</span>
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
          <label>VIN码</label>
          <el-input size="small" v-model="listQuery.dataInfo.vin" placeholder="请输入内容" />
        </el-col>

        <el-col :span="6">
          <el-button icon="el-icon-plus" @click="loadmore">更多</el-button>
        </el-col>
      </el-row>

      <el-row :gutter="26" v-show="!pic">
        <carBrand
          :isMul="false"
          :key="carBrandKey"
          :code="listQuery.dataInfo.carBrandCode"
          @changeCode="getBrandCode"
        ></carBrand>
        <!--车系-->
        <chooseCarSeriesSelect
          ref="carSeriesSelect"
          :span="6"
          :isMul="false"
          :code="listQuery.dataInfo.carSeriesCode"
          @changeCode="getCarSeriesCode"
        ></chooseCarSeriesSelect>
        <!--车型-->
        <partsCarTypeSelect
          ref="partsCarTypeSelect"
          :span="6"
          :isMul="false"
          :code="listQuery.dataInfo.carTypeCode"
          @changeCode="getCarTypeCode"
        ></partsCarTypeSelect>

        <el-col :span="6">
          <label>车牌号</label>
          <el-input size="small" v-model="listQuery.dataInfo.carLicenseNo" placeholder="请输入内容" />
        </el-col>
      </el-row>
      <el-row :gutter="26" v-show="!pic">
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

        <el-col :span="6">
          <label>客户名称</label>
          <el-input size="small" v-model="listQuery.dataInfo.custName" placeholder="请输入内容" />
        </el-col>
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
      <el-table-column align="center" label="序号">
        <template slot-scope="scope">{{ scope.$index + 1 }}</template>
      </el-table-column>
      <el-table-column label="VIN码" width="150">
        <template slot-scope="scope">
          <span @click="seResult(scope.row.vin)" style="color:blue">{{ scope.row.vin }}</span>
        </template>
      </el-table-column>
      <el-table-column label="车牌号">
        <template slot-scope="scope">{{ scope.row.carLicenseNo }}</template>
      </el-table-column>
      <el-table-column label="客户名称">
        <template slot-scope="scope">{{ scope.row.custName }}</template>
      </el-table-column>
      <el-table-column label="维修经销商" width="150">
        <template slot-scope="scope">{{ scope.row.dlrShortName }}</template>
      </el-table-column>
      <el-table-column label="维修次数">暂无数据</el-table-column>
      <el-table-column label="车系">
        <template slot-scope="scope">{{ scope.row.carSeriesCn }}</template>
      </el-table-column>
      <el-table-column label="车型">
        <template slot-scope="scope">{{ scope.row.carTypeCn }}</template>
      </el-table-column>
      <el-table-column label="车身颜色">
        <template slot-scope="scope">{{ scope.row.CarColorName }}</template>
      </el-table-column>
      <el-table-column label="发动车号">
        <template slot-scope="scope">{{ scope.row.engineNo }}</template>
      </el-table-column>
      <el-table-column label="购车日期" width="150">
        <template slot-scope="scope">{{ scope.row.buyDate }}</template>
      </el-table-column>
      <el-table-column label="客户性质">
        <template slot-scope="scope">{{ scope.row.custClassName }}</template>
      </el-table-column>
      <el-table-column label="客户地址" width="150">
        <template slot-scope="scope">{{ scope.row.addr }}</template>
      </el-table-column>
    </el-table>

    <seBuRepairHistoryQueryDetail
      @ClosePage="getClose"
      :dialogWiModelVisible="dialogWiModelVisible"
      ref="toSon"
    />

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
import { doQueryList } from "@/api/se/basedata/repair/seRepairReportMaintainVehicle";

import seBuRepairHistoryQueryDetailMore from "@/views/se/public/repairHistory/seBuRepairHistoryQueryDetailMore";
import seBuRepairHistoryQueryDetail from "@/views/se/public/repairHistory/seBuRepairHistoryQueryDetail";
import carBrand from "@/components/org/carBrand/carBrand";
import chooseCarSeriesSelect from "@/components/se/chooseCarSeriesSelect";
import partsCarTypeSelect from "@/components/se/partsCarTypeSelect";
import seComQueChoMu from "@/components/se/seComQueChoMu";
import { the_Height } from "@/components/se/seMixins/makeHeightForTemplate";

export default {
  mixins: [the_Height],
  components: {
    carBrand,
    chooseCarSeriesSelect,
    partsCarTypeSelect,
    seBuRepairHistoryQueryDetail,
    seBuRepairHistoryQueryDetailMore,
    seComQueChoMu
  },
  props: {
    span: {
      type: Number,
      default: function() {
        return 6;
      }
    }
  },
  watch: {
    listQuery(val) {
      this.carBrandKey = this.carBrandKey + 1;
    }
  },
  data() {
    return {
      pageTotal: "",
      tableHeight: 250, // 网格高度
      tableMarginHeight: 15,
      carBrandKey: "a",
      seComQueChoMuDlrVisible: false,
      listLoading: false,
      flag: true,
      pic: true,
      isMul: false,
      code: "1",
      list: null,
      vinCode: undefined,
      dateType: "0",
      CarSeriesArr: [],
      CarTypeArr: [],
      detailVisible: false,
      dialogWiModelVisible: false,
      listLoading: true,
      detailQuery: {
        vin: undefined
      },
      listQuery: {
        //kk
        pageIndex: 1,
        pageSize: 10,
        limit: 20,
        date: undefined,
        status: "",
        isEnable: "",
        dataInfo: {
          oemcode: "",
          groupCode: "",
          repairOrderStatus: "",
          billType: "",
          dateType: "",
          repairTime: "", //报修日期
          deliveryDate: "", //交车日期
          custName: "", //客户名称
          carBrandCode: "", //品牌编码
          carSeriesCode: "", //车系
          carTypeCode: "", //车型
          carLicenseNo: "", //车牌
          vin: "", //vin
          dlrId: "", //经销商
          saName: "" //服务名称
        }
      },
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        }
      },
      dateStatus: [
        {
          value: "0",
          label: "报修日期"
        },
        {
          value: "1",
          label: "维修交车日期"
        }
      ]
    };
  },

  mounted() {
    window.addEventListener("resize", () => {
      this.setTableHeight(true);
    });
    this.$nextTick(() => {
      this.setTableHeight();
    });
  },
  created() {
    this.fetchData("1");
  },
  methods: {
    loadmore() {
      if (this.pic) {
        this.pic = false;
      } else {
        this.pic = true;
      }
    },
    getDate(val) {
      if (this.dateType == "0") {
        //保修日期
        this.listQuery.dataInfo.repairTime = val;
        this.listQuery.dataInfo.deliveryDate = "";
      } else if (this.dateType == "1") {
        this.listQuery.dataInfo.deliveryDate = val;
        this.listQuery.dataInfo.repairTime = "";
      }
    },
    getBrandCode(val) {
      this.listQuery.dataInfo.carBrandCode = val;
      this.$refs.carSeriesSelect.reset();
      this.$refs.partsCarTypeSelect.reset();
      this.$refs.carSeriesSelect.initData(val);
    },
    getCarSeriesCode(val) {
      this.listQuery.dataInfo.carSeriesCode = val;
      this.$refs.partsCarTypeSelect.reset();
      this.$refs.partsCarTypeSelect.initData(val);
    },
    getCarTypeCode(val) {
      this.listQuery.dataInfo.carTypeCode = val;
    },
    fetchData(page, dataType) {
      const that = this;
      that.listLoading = true;

      var pageSize = dataType == "excel" ? 99999 : this.pageSize;
      var tableColumns =
        this.$refs.multipleTable == null
          ? null
          : this.$refs.multipleTable.columns;

      doQueryList(
        page || that.listQuery.pageIndex,
        that.listQuery.dataInfo,
        "维修档案查询列表导出",
        "维修档案查询列表",
        tableColumns
      ).then(response => {
        if (dataType == "excel") {
          this.$utils.downloadFile(response, "维修档案查询导出.xlsx");
          this.listLoading = false;
        } else if (
          response.data[
            apiSeReport.seRepairReportMaintainVehicleFindAll.ServiceCode
          ].result === "1"
          // &&
          // response.data[
          //   apiSeReport.seRepairReportMaintainVehicleFindAll.ServiceCode
          // ].rows != ""
        ) {
          if (page) {
            //查询完返回指定的page页数
            that.listQuery.pageIndex = page;
          }
          that.pageTotal =
            response.data[
              apiSeReport.seRepairReportMaintainVehicleFindAll.ServiceCode
            ].records;
          that.list =
            response.data[
              apiSeReport.seRepairReportMaintainVehicleFindAll.ServiceCode
            ].rows;
          that.listLoading = false;
        }
      });
      console.log("*******seRepairReportMaintainVehicle********");
      console.log(this.listQuery.dataInfo);
    },
    reset() {
      (this.dateType = "0"),
        (this.listQuery.date = ""),
        (this.listQuery.dataInfo.carBrandCode = ""),
        (this.listQuery.dataInfo.vin = ""),
        (this.listQuery.dataInfo.carSeriesCode = ""),
        (this.listQuery.dataInfo.carTypeCode = ""),
        (this.listQuery.dataInfo.carLicenseNo = ""),
        (this.listQuery.dataInfo.dlrId = ""),
        (this.listQuery.dataInfo.custName = ""),
        this.$refs.carSeriesSelect.reset(),
        this.$refs.partsCarTypeSelect.reset();
    },
    handleSizeChange(val) {
      this.listQuery.pageSize = val;
      this.fetchData();
    },
    handleCurrentChange(val) {
      this.listQuery.pageIndex = val;
      this.fetchData();
    },
    seResult(val) {
      this.dialogWiModelVisible = true;
      this.vinCode = val;
      this.SendDataToSon(this.vinCode);
    },
    getClose(data) {
      this.dialogWiModelVisible = false;
    },
    SendDataToSon(val) {
      this.$refs.toSon.getFather(val);
    },
    openComQueChoMu() {
      this.seComQueChoMuDlrVisible = true;
    },
    getComQueChoMu(val) {
      this.seComQueChoMuDlrVisible = false;
      this.listQuery.dataInfo.dlrId = val[0].label;
    },
    closeComQueChoMu(val) {
      this.seComQueChoMuDlrVisible = val;
    },
    getExcel() {
      this.fetchData(1, "excel");
    },
    makeHeight(mh) {
      // 减去margin-top/bottom值
      if (!this.$utils.isIE() || isResize) {
        this.tableHeight = mh - this.tableMarginHeight - 50
      } else {
        // IE浏览器需要减去额外高度
        this.tableHeight = mh - this.tableMarginHeight - this.ieHeight - 50
      }

    }
  }
};
</script>

<style scoped>
.more {
  cursor: pointer;
}
</style>
