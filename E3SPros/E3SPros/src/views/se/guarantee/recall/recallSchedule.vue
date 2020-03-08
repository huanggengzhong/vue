<template>
  <div class="app-container app-container-table">
    <div class="filter-container filter-button" ref="searcheHeight">
      <el-button size="small" @click="fetchData()">查询</el-button>
      <el-button size="small" @click="exportFixed()">导出已维修</el-button>
      <el-button size="small" @click="exportData()">导出</el-button>
      <el-button size="small" @click="reset()">重置</el-button>
    </div>
    <div class="filter-container filter-params" ref="conHeight">
      <el-form>
        <el-row :gutter="26">
          <el-col :span="22">
            <carBrand
              :code="scheduleParams.dataInfo.carBrandCode"
              v-model="scheduleParams.dataInfo.carBrandCode"
              @changeCode="getBrand"
            />
            <el-col :span="6">
              <label>召回专案编码</label>
              <el-input
                @focus="queryRecallCode()"
                size="small"
                v-model="scheduleParams.dataInfo.recallCaseCode"
              />
            </el-col>

            <el-col :span="6">
              <label>VIN码</label>
              <el-input v-model="scheduleParams.dataInfo.vin"></el-input>
            </el-col>

            <el-col :span="6">
              <label>召回专案状态</label>
              <el-select v-model="scheduleParams.dataInfo.recallStatus" placeholder="请选择" clearable>
                <el-option label="全部" value="0"></el-option>
                <el-option label="已维修" value="1"></el-option>
                <el-option label="未维修" value="2"></el-option>
                <el-option label="已完成" value="3"></el-option>
              </el-select>
            </el-col>
          </el-col>
        </el-row>

        <el-row :gutter="26">
          <el-col :span="22">
            <el-col :span="6">
              <label>发布时间</label>
              <el-date-picker
                v-model="date"
                type="daterange"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                value-format="yyyy-MM-dd"
                @change="getDate"
              ></el-date-picker>
            </el-col>

            <el-col :span="6">
              <label>召回专案类型</label>
              <el-select
                v-model="scheduleParams.dataInfo.recallCaseType"
                size="small"
                placeholder="请选择"
              >
                <el-option label="全部" value="0"></el-option>
                <el-option label="专案" value="1"></el-option>
                <el-option label="召回" value="2"></el-option>
              </el-select>
            </el-col>
          </el-col>
        </el-row>
      </el-form>
    </div>

    <chooseRecallDialog
      :recallDialogVisible="recallDialogVisible"
      @changeCode="getRecall"
      @close="closeDialog"
    ></chooseRecallDialog>

    <mix-table
      ref="queryScheduleTable"
      :queryParams="scheduleParams"
      :isShowSelect="false"
      :isDialog="true"
      :dynamicTableCols="scheduleCols"
      :isPaging="true"
      @rowClick="queryScheduleClick"
    ></mix-table>
  </div>
</template>
<script>
import carBrand from "@/components/org/carBrand/carBrand";
import { recallApi } from "@/api/graphQLApiList/se";
import mixTable from "@/components/basicComponent/mixTable";
import { the_Height } from "@/components/se/seMixins/makeHeightForTemplate";
import { dorecallSchedule } from "@/api/se/guarantee/recall/recallSchedule";
import chooseRecallDialog from "@/views/se/guarantee/recall/chooseRecallDialog";

export default {
  name: "recallSchedule",
  mixins: [the_Height],
  components: {
    carBrand,
    mixTable,
    chooseRecallDialog
  },
  data() {
    return {
      recallDialogVisible: false,
      list: "",
      date: "",
      scheduleParams: {
        APIUrl: recallApi.seDbRecallCaseQuerySchedule.APIUrl,
        InputType: recallApi.seDbRecallCaseQuerySchedule.InputType,
        ServiceCode: recallApi.seDbRecallCaseQuerySchedule.ServiceCode,
        dataInfo: {
          carBrandCode: "1",
          recallCaseCode: "",
          vin: "",
          recallStatus: "0",
          startOperDate: "",
          endOperDate: "",
          recallCaseType: "0",
          dlrCode: ""
        },
        apiQueryRow: [
          "carBrandCode",
          "carBrandCn",
          "recallCaseId",
          "recallCaseCode",
          "dutyCompTypeName",
          "vin",
          "carTypeCode",
          "offlineDate",
          "invoiceDate",
          "reserveDate",
          "repairDate",
          "recallStatusName",
          "dlrShortName",
          "belongDlrShortName"
        ]
      },
      scheduleCols: [
        { label: "车辆品牌", codeField: "carBrandCn" },
        { label: "车辆品牌编码", codeField: "carBrandCode", hidden: true },
        { label: "召回专案ID", codeField: "recallCaseId", hidden: true },
        { label: "召回专案编码", codeField: "recallCaseCode" },
        { label: "责任单位", codeField: "dutyCompTypeName" },
        { label: "VIN码", codeField: "vin" },
        { label: "车型", codeField: "carTypeCode" },
        { label: "下线日期", codeField: "offlineDate" },
        { label: "发票日期", codeField: "invoiceDate" },
        { label: "预约回店日期", codeField: "reserveDate" },
        { label: "维修日期", codeField: "repairDate" },
        { label: "召回专案状态", codeField: "recallStatusName" },
        { label: "实施维修专营店", codeField: "dlrShortName" },
        { label: "责任专营店", codeField: "belongDlrShortName" }
      ]
    };
  },
  methods: {
    getBrand(val) {
      this.scheduleParams.dataInfo.carBrandCode = val;
    },
    getDate(val) {
      (this.scheduleParams.dataInfo.startOperDate = val[0]),
        (this.scheduleParams.dataInfo.endOperDate = val[1]);
    },
    queryRecallCode() {
      this.recallDialogVisible = true;
    },
    closeDialog(val) {
      this.recallDialogVisible = val;
    },
    fetchData() {
      const that = this;
      console.log(this.scheduleParams.dataInfo);
      dorecallSchedule(that.scheduleParams.dataInfo).then(response => {
        if (
          response.data[recallApi.seDbRecallCaseQuerySchedule.ServiceCode]
            .result === "1"
        ) {
          that.list =
            response.data[
              recallApi.seDbRecallCaseQuerySchedule.ServiceCode
            ].rows;
          console.log(that.list);
          that.$refs.queryScheduleTable.tableData = this.list;
        }else{
          this.$message({
            message:
              "查询失败：" +
              response.data[recallApi.seDbRecallCaseQuerySchedule.ServiceCode]
                .msg,
            type: "warn",
            uration: 2000
          });
        }
      });
    },
    exportFixed() {
      //先设置查询状态为已维修
      this.scheduleParams.dataInfo.recallStatus = "1";
      this.$refs.queryScheduleTable.exportTableData(
        "excel",
        "召回专案进度查询（已维修）",
        "召回专案进度查询（已维修）"
      );
    },
    exportData() {
      this.$refs.queryScheduleTable.exportTableData(
        "excel",
        "召回专案进度查询",
        "召回专案进度查询"
      );
    },
    reset() {
      (this.scheduleParams.dataInfo.carBrandCode = "1"),
        (this.scheduleParams.dataInfo.recallCaseCode = ""),
        (this.scheduleParams.dataInfo.vin = ""),
        (this.scheduleParams.dataInfo.recallStatus = "0"),
        (this.scheduleParams.dataInfo.startOperDate = ""),
        (this.scheduleParams.dataInfo.endOperDate = ""),
        (this.scheduleParams.dataInfo.recallCaseType = "0"),
        (this.date = "");
    },
    queryScheduleClick() {},
    getRecall(val) {
      this.scheduleParams.dataInfo.recallCaseCode = val[0].recallCaseCode;
      this.recallDialogVisible = false;
    }
  }
};
</script>