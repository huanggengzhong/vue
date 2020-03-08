<template>
  <div>
    <el-dialog
      :visible.sync="dialogWiModelVisible"
      center
      width="74%"
      style="height:500px;"
      @close="close"
      :close-on-click-modal="false"
      :append-to-body="true"
    >
      <div class="filter-container filter-title" style="text-align:center;border:none">
        <span style="font-weight:bold;font-size:30px;">维修履历一览</span>
      </div>
      <el-table
        :data="list"
        element-loading-text="Loading"
        border
        fit
        stripe
        highlight-current-row
        height="250px"
      >
        <el-table-column align="center" label="序号" width="60">
          <template slot-scope="scope">{{ scope.$index + 1 }}</template>
        </el-table-column>
        <el-table-column align="center" label="经销商" width="100">
          <template slot-scope="scope">{{ scope.row.dlrShortName }}</template>
        </el-table-column>
        <el-table-column align="center" label="工单号" width="200">
          <template slot-scope="scope">
            <span
              @click="seDetail(scope.row.repairOrderCode)"
              style="color:blue"
            >{{ scope.row.repairOrderCode }}</span>
          </template>
        </el-table-column>
        <el-table-column align="center" label="维修日期" width="150">
          <template slot-scope="scope">{{ scope.row.repairTime }}</template>
        </el-table-column>
        <el-table-column align="center" label="VIN" width="150">
          <template slot-scope="scope">{{ scope.row.vin }}</template>
        </el-table-column>
        <el-table-column align="center" label="主要维修项目" width="300">
          <template slot-scope="scope">{{ scope.row.seburepairdetail }}</template>
        </el-table-column>
      </el-table>
    </el-dialog>

    <seBuRepairHistoryQueryDetailMore
      @ClosePage="getClose"
      :detailVisible="detailVisible"
      ref="toSon"
    />
  </div>
</template>

<script>
import seBuRepairHistoryQueryDetailMore from "@/views/se/public/repairHistory/seBuRepairHistoryQueryDetailMore";
import { doQueryList } from "@/api/se/basedata/repair/seRepairReportMaintainVehicle";       
import { apiSeReport } from "@/api/graphQLApiList/se";

export default {
  components: {
    seBuRepairHistoryQueryDetailMore
  },
  props: {
    dialogWiModelVisible: {
      type:Boolean,
      default: function() {
        return false;
      }
    }
  },
  data() {
    return {
      kk: undefined,
      vinCode: undefined,
      orderCode: undefined,
      detailVisible: false,
      list: null,
      kk: undefined,
      listDetail: [
        {
          DLR_SHORT_NAME: undefined,
          phone: undefined,
          addr: undefined,
          saName: undefined,
          carLicense: undefined,
          vin: undefined,
          carTypeCode: undefined,
          carInColorName: undefined,
          carColorName: undefined,
          REPAIR_TIME: undefined,
          custName: undefined,
          repairTel: undefined,
          MILEAGE: undefined,
          remark: undefined,
          repairOrderAmount: undefined
        }
      ]
    };
  },
  created() {
    //this.fetchData(); //想要有数据
  },

  methods: {
    fetchData(val) {
      //问题三：监测值传入的时候如何触发事件更新数据
      const that = this;
      doQueryList(val).then(response => {
        if (
          response.data[apiSeReport.seRepairReportMaintainVehicleFindAll.ServiceCode]
            .result === "1" 
          //   &&
          // response.data[apiSeReport.seRepairReportMaintainVehicleFindAll.ServiceCode]
          //   .rows != ""
        ) {
          that.list =
            response.data[
              apiSeReport.seRepairReportMaintainVehicleFindAll.ServiceCode
            ].rows;
        }
      });
    },

    seDetail(val) {
      this.detailVisible = true;
      this.orderCode = val;
      this.SendDataToSon(this.orderCode);
    },
    close() {
      this.$emit("ClosePage", false);
    },
    getClose(data) {
      this.detailVisible = false;
    },
    getFather(val) {
      this.vinCode = val;
      this.fetchData(this.vinCode)
    },
    SendDataToSon(val) {
      this.$refs.toSon.getFather(val);
    }
  }
};
</script>










