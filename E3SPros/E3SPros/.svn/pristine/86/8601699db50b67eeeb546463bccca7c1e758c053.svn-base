<template>
  <el-dialog :visible.sync="detailVisible"  width="80%"  @close="close" :close-on-click-modal="false"
      :append-to-body="true">
    <div style="height:600px;overflow:auto;" >
      <div
        class="filter-container filter-title"
        style="text-align:center;border:none;font-size:30;"
      >
        <span style="font-weight:700;font-size:28px;">维修履历详情</span>
      </div>

      <div class="report-detail">
        <el-row :gutter="24" typeof="flex" justify="space-between">
          <el-col :span="6" class="cw-tc">
            <p class="report-detail-title">
              专营店：
              <span class="user-detail">{{this.listDetail[0].dtrepairorder.dlrShortName}}</span>
            </p>
          </el-col>

          <el-col :span="6" class="cw-tc">
            <p class="report-detail-title">
              电话：
              <span class="user-detail">{{this.listDetail[0].dtrepairorder.serviceTel}}</span>
            </p>
          </el-col>

          <el-col :span="6" class="cw-tc">
            <p class="report-detail-title">
              邮编:
              <span class="user-detail">无</span>
            </p>
          </el-col>

          <el-col :span="6" class="cw-tc">
            <p class="report-detail-title">
              地址:
              <span class="user-detail">{{this.listDetail[0].dtrepairorder.dlrId}}</span>
            </p>
          </el-col>
        </el-row>

        <el-row :gutter="24" typeof="flex" justify="space-between">
          <el-col :span="6" class="cw-tc">
            <p class="report-detail-title">
              接待员：
              <span class="user-detail">{{this.listDetail[0].dtrepairorder.saName}}</span>
            </p>
          </el-col>

          <el-col :span="6" class="cw-tc">
            <p class="report-detail-title">
              车牌号：
              <span class="user-detail">{{this.listDetail[0].dtrepairorder.carLicense}}</span>
            </p>
          </el-col>

          <el-col :span="6" class="cw-tc">
            <p class="report-detail-title">
              VIN：
              <span class="user-detail">{{this.listDetail[0].dtrepairorder.vin}}</span>
            </p>
          </el-col>

          <el-col :span="6" class="cw-tc">
            <p class="report-detail-title">
              车型：
              <span class="user-detail">{{this.listDetail[0].dtrepairorder.carTypeCode}}</span>
            </p>
          </el-col>
        </el-row>

        <el-row :gutter="24" typeof="flex" justify="space-between">
          <el-col :span="6" class="cw-tc">
            <p class="report-detail-title">
              内饰色：
              <span class="user-detail">{{this.listDetail[0].dtcarcustinfo.carInColorName}}</span>
            </p>
          </el-col>

          <el-col :span="6" class="cw-tc">
            <p class="report-detail-title">
              外观色：
              <span class="user-detail">{{this.listDetail[0].dtcarcustinfo.carColorName}}</span>
            </p>
          </el-col>

          <el-col :span="6" class="cw-tc">
            <p class="report-detail-title">
              接待日期：
              <span class="user-detail">{{this.listDetail[0].dtrepairorder.repairTime}}</span>
            </p>
          </el-col>

          <el-col :span="6" class="cw-tc">
            <p class="report-detail-title">
              顾客名称：
              <span class="user-detail">{{this.listDetail[0].dtrepairorder.custName}}</span>
            </p>
          </el-col>
        </el-row>

        <el-row :gutter="24" typeof="flex" justify="space-between">
          <el-col :span="6" class="cw-tc">
            <p class="report-detail-title">
              报修人电话：
              <span class="user-detail">{{this.listDetail[0].dtrepairorder.repairTel}}</span>
            </p>
          </el-col>

          <el-col :span="6" class="cw-tc">
            <p class="report-detail-title">
              行驶里程：
              <span class="user-detail">{{this.listDetail[0].dtrepairorder.mileage}}</span>
            </p>
          </el-col>

          <el-col :span="6" class="cw-tc">
            <p class="report-detail-title">
              客户备注：
              <span class="user-detail">{{this.listDetail[0].dtrepairorder.remark}}</span>
            </p>
          </el-col>

          <el-col :span="6" class="cw-tc">
            <p class="report-detail-title">
              总费用：
              <span class="user-detail">{{this.listDetail[0].dtrepairorder.repairOrderAmount}}</span>
            </p>
          </el-col>
        </el-row>
      </div>
      <br />
      <br />
      <div>
        <div class="kk">
        <el-table :data="listDetail" >
          <el-table-column label="维修项目" align="center">
            <el-table-column align="center" label="序号" width="60">
              <template slot-scope="scope">{{ scope.$index + 1 }}</template>
            </el-table-column>
            <el-table-column align="center" label="维修状态">
              <template slot-scope="scope">{{ scope.row.repairStatusName }}</template>
            </el-table-column>
            <el-table-column align="center" label="工时编码">
              <template slot-scope="scope">{{ scope.row.wiCode }}</template>
            </el-table-column>
            <el-table-column align="center" label="维修内容">
              <template slot-scope="scope">{{ scope.row.wiName }}</template>
            </el-table-column>
            <el-table-column align="center" label="工时数量">
              <template slot-scope="scope">{{ scope.row.saleWorkQty }}</template>
            </el-table-column>
            <el-table-column align="center" label="工时单价">
              <template slot-scope="scope">{{ scope.row.wiPrice }}</template>
            </el-table-column>
            <el-table-column align="center" label="应收费">
              <template slot-scope="scope">{{ scope.row.wiAmount }}</template>
            </el-table-column>
            <el-table-column align="center" label="付费性质">
              <template slot-scope="scope">{{ scope.row.payKindName }}</template>
            </el-table-column>
            <el-table-column align="center" label="业务类别">
              <template slot-scope="scope">{{ scope.row.businessTypeName }}</template>
            </el-table-column>
            <el-table-column align="center" label="维修类别">
              <template slot-scope="scope">{{ scope.row.repairTypeName}}</template>
            </el-table-column>
          </el-table-column>
        </el-table>
        </div>

        <el-table :data="listDetail" class="kk">
          <el-table-column label="维修备件" align="center">
            <el-table-column align="center" label="序号" width="60">
              <template slot-scope="scope">{{ scope.$index + 1 }}</template>
            </el-table-column>
            <el-table-column align="center" label="出库标志"></el-table-column>
            <el-table-column align="center" label="备件编号">
              <template slot-scope="scope">{{ scope.row.dtrepairpart.partNo}}</template>
            </el-table-column>
            <el-table-column align="center" label="备件名称">
              <template slot-scope="scope">{{ scope.row.dtrepairpart.partName}}</template>
            </el-table-column>
            <el-table-column align="center" label="付费性质">
              <template slot-scope="scope">{{ scope.row.dtrepairpart.payKindName}}</template>
            </el-table-column>
            <el-table-column align="center" label="业务类别">
              <template slot-scope="scope">{{ scope.row.dtrepairpart.businessTypeName}}</template>
            </el-table-column>
            <el-table-column align="center" label="维修类别">
              <template slot-scope="scope">{{ scope.row.dtrepairpart.repairTypeName}}</template>
            </el-table-column>
            <el-table-column align="center" label="需求数量">
              <template slot-scope="scope">{{ scope.row.dtrepairpart.partQty}}</template>
            </el-table-column>
            <el-table-column align="center" label="单价">
              <template slot-scope="scope">{{ scope.row.dtrepairpart.partPrice}}</template>
            </el-table-column>
            <el-table-column align="center" label="合计金额">
              <template slot-scope="scope">{{ scope.row.dtrepairpart.partAmount}}</template>
            </el-table-column>
            <el-table-column align="center" label="费用预估">
              <template slot-scope="scope">{{ scope.row.dtrepairpart.prePartAmount}}</template>
            </el-table-column>
            <el-table-column align="center" label="备件类别">
              <template slot-scope="scope">{{ scope.row.dtrepairpart.partTypeName}}</template>
            </el-table-column>
            <el-table-column align="center" label="单位">
              <template slot-scope="scope">{{ scope.row.dtrepairpart.unit}}</template>
            </el-table-column>
          </el-table-column>
        </el-table>

        <el-table :data="listDetail" class="kk">
          <el-table-column label="其他费用" align="center">
            <el-table-column align="center" label="序号" width="60">
              <template slot-scope="scope">{{ scope.$index + 1 }}</template>
            </el-table-column>
            <el-table-column align="center" label="其他费用类别">
              <template slot-scope="scope">{{ scope.row.dtRepairOther.otherAmountType }}</template>
            </el-table-column>
            <el-table-column align="center" label="付费性质">
              <template slot-scope="scope">{{ scope.row.dtRepairOther.payKind}}</template>
            </el-table-column>
            <el-table-column align="center" label="业务类别">
              <template slot-scope="scope">{{ scope.row.dtRepairOther.businessType}}</template>
            </el-table-column>
            <el-table-column align="center" label="其他费用">
              <template slot-scope="scope">{{ scope.row.dtRepairOther.otherAmount}}</template>
            </el-table-column>
            <el-table-column align="center" label="备注">
              <template slot-scope="scope">{{ scope.row.dtRepairOther.remark}}</template>
            </el-table-column>
            <el-table-column align="center" label="制单责任人">
              <template slot-scope="scope">{{ scope.row.dtRepairOther.dutyMan}}</template>
            </el-table-column>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </el-dialog>
</template>

<script>
import { doDetailList } from "@/api/se/basedata/repair/seBuRepairHistoryQueryDetail";
import { apiSeReport } from "@/api/graphQLApiList/se";

export default {
  props: {
    detailVisible: {
      type: Boolean,
      default: function() {
        return false;
      }
    }
  },
  data() {
    return {
      orderCode: undefined,
      listDetail: [
        {
          dtrepairorder: {
            DLR_SHORT_NAME: undefined,
            phone: undefined,
            saName: undefined,
            carLicense: undefined,
            vin: undefined,
            carTypeCode: undefined,
            carInColorName: undefined,
            carColorName: undefined,
            REPAIR_TIME: undefined,
            custName: undefined,
            serviceTel: undefined,
            MILEAGE: undefined,
            remark: undefined,
            repairOrderAmount: undefined,
            dlrId: undefined
          },
          dtcarcustinfo: {
            carColorName: undefined,
            carInColorName: undefined
          }
        }
      ]
    };
  },
  created() {
    //this.fetchData();
  },
  methods: {
    fetchData(val) {
      this.detailVisible = true;

      const that = this;
      doDetailList(val).then(response => {
        if (
          response.data[
            apiSeReport.seBuRepairHistoryQueryDetailFindAll.ServiceCode
          ].result === "1" 
          // &&
          // response.data[
          //   apiSeReport.seBuRepairHistoryQueryDetailFindAll.ServiceCode
          // ].rows != ""
        )
          that.listDetail =
            response.data[
              apiSeReport.seBuRepairHistoryQueryDetailFindAll.ServiceCode
            ].rows;
      });
    },
    close() {
      this.$emit("ClosePage", false);
    },
    getFather(val) {
      this.orderCode = val;
      this.fetchData(this.orderCode);
    }
  }
};
</script>
<style >
.el-table__fixed::-webkit-scrollbar {
  width: 0;
  height: 0;
}
.boder {
  border: 1px solid #dcdcdc;
}
.cw-tc {
  text-align: right;
  height: 23px;
}
.cw-button {
  width: 300px;
  margin: 100px auto;
}
.report-box {
  padding: 20px 0 10px;
}
.userInfo {
  margin-top: 10px;
  margin-left: 20px;
  margin-bottom: 10px;
}
.report-detail-title {
  margin-top: 10px;
  margin-bottom: 14px;
  font-size: 16px;
  color: #333333;
  text-align: left;
}
.report-detail-value {
  font-size: 18px;
  color: #333;
}
.kk {
  margin-top: 20px;
width: 1024px;
height:350px;
margin-bottom:50px;
}
</style>