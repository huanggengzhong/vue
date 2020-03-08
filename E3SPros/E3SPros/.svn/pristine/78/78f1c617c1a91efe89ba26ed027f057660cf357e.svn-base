<template>
  <div class="app-container app-container-table">
    <div class="filter-container filter-button" ref="searcheHeight">
      <el-button size="small" @click="fetchData()">查询</el-button>
      <el-button size="small" @click="exportData()">导出</el-button>
      <el-button size="small" @click="reset()">重置</el-button>
    </div>
    <div class="filter-container filter-params" ref="conHeight">
      <el-form>
        <el-row :gutter="26">
          <el-col :span="22">
            <carBrand :code="executeParams.dataInfo.carBrandCode" @changeCode="getBrand" />
            <el-col :span="6">
              <label>召回专案编码</label>
              <el-input
                @focus="queryRecallCode()"
                size="small"
                v-model="executeParams.dataInfo.recallCaseCode"
              />
            </el-col>

            <el-col :span="6">
              <label>起止时间</label>
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
          </el-col>
        </el-row>

        <el-row :gutter="26">
          <el-col :span="22">
            <el-col :span="6">
              <label>召回专案类型</label>
              <el-select
                v-model="executeParams.dataInfo.recallCaseType"
                size="small"
                placeholder="请选择"
              >
                <el-option label="全部" value="0"></el-option>
                <el-option label="专案" value="1"></el-option>
                <el-option label="召回" value="2"></el-option>
              </el-select>
            </el-col>

            <el-col :span="6">
              <label>停止状态</label>
              <el-select v-model="executeParams.dataInfo.isStop" size="small" placeholder="请选择">
                <el-option label="全部" value="0"></el-option>
                <el-option label="未停止" value="1"></el-option>
                <el-option label="已停止" value="2"></el-option>
              </el-select>
            </el-col>

            <el-col :span="12">
              <label>主题</label>
              <el-input v-model="executeParams.dataInfo.topic"></el-input>
            </el-col>
          </el-col>
        </el-row>

        <el-row :gutter="26">
          <el-col :span="6">
            <label>累计完成(台):</label>
            <el-input v-model="totalCount" readonly="readonly"></el-input>
          </el-col>
          <el-col :span="6">
            <label>累计保修费用(元):</label>
            <el-input v-model="totalAmount" readonly="readonly"></el-input>
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
      ref="queryExecuteTable"
      :queryParams="executeParams"
      :isShowSelect="false"
      :isDialog="true"
      :dynamicTableCols="executeCols"
      :isPaging="true"
      @rowClick="queryExecuteClick"
    ></mix-table>
  </div>
</template>
<script>
import carBrand from "@/components/org/carBrand/carBrand";
import { recallApi } from "@/api/graphQLApiList/se";
import mixTable from "@/components/basicComponent/mixTable";
import { the_Height } from "@/components/se/seMixins/makeHeightForTemplate";
import { dorecallExecute } from "@/api/se/guarantee/recall/recallExecute";
import chooseRecallDialog from "@/views/se/guarantee/recall/chooseRecallDialog";

export default {
  name: "recallExecute",
  mixins: [the_Height],
  components: {
    carBrand,
    mixTable,
    chooseRecallDialog
  },
  data() {
    return {
      recallDialogVisible: false,
      totalCount: "",
      totalAmount: "",
      list: "",
      date: "",
      executeCols: [
        { label: "车辆品牌", codeField: "carBrandCn" },
        { label: "召回专案编码", codeField: "recallCaseCode" },
        { label: "主题", codeField: "topic" },
        { label: "实施专营店", codeField: "dlrShortName" },
        { label: "总数", codeField: "carBrandCn" },
        { label: "完成数", codeField: "aimnum" },
        { label: "完成率", codeField: "finishRate" },
        { label: "保修费用", codeField: "warrAmount" }
      ],
      executeParams: {
        APIUrl: recallApi.seDbRecallCaseQueryExecuteDetail.APIUrl,
        InputType: recallApi.seDbRecallCaseQueryExecuteDetail.InputType,
        ServiceCode: recallApi.seDbRecallCaseQueryExecuteDetail.ServiceCode,
        dataInfo: {
          carBrandCode: "1",
          recallCaseCode: "",
          recallCaseType: "0",
          isStop: "0",
          startOperDate: "",
          endOperDate: "",
          topic: ""
        },
        apiQueryRow: [
          "carBrandCn",
          "carBrandCode",
          "recallCaseId",
          "recallCaseCdoe",
          "topic",
          "dlrCode",
          "dlrShortName",
          "aimnum",
          "finish",
          "finishRate",
          "warrAmount"
        ]
      }
    };
  },
  methods: {
    getBrand(val) {
      this.executeParams.dataInfo.carBrandCode = val;
    },
    getDate(val) {
      (this.executeParams.dataInfo.startOperDate = val[0]),
        (this.executeParams.dataInfo.endOperDate = val[1]);
    },
    fetchData() {
      const that = this;
      dorecallExecute(that.executeParams.dataInfo).then(response => {
        if (response.data.seDbRecallCaseQueryExecuteDetail.result === "1") {
          that.list = response.data.seDbRecallCaseQueryExecuteDetail.rows;
          that.$refs.queryExecuteTable.tableData = that.list;

          that.totalCount = that.list[0].totalCount;
          that.totalAmount = that.list[0].totalAmount;
        }else{
          this.$message({
            message:
              "查询失败：" +
              response.data[recallApi.seDbRecallCaseQueryExecuteDetail.ServiceCode]
                .msg,
            type: "warn",
            uration: 2000
          });
        }
      });
    },
    queryExecuteClick() {
      this.$router.push({
        name: "recallQueryOEMDetail",
        params: {
          the_data: this.$refs.queryExecuteTable.currentRow[0].recallCaseId
        }
      });
    },
    queryRecallCode() {
      this.recallDialogVisible = true;
    },
    closeDialog() {
      this.recallDialogVisible = false;
    },
    getRecall(val) {
      this.executeParams.dataInfo.recallCaseCode = val[0].recallCaseCode;
      this.recallDialogVisible = false;
    },
    exportData() {
      this.$refs.queryExecuteTable.exportTableData(
        "excel",
        "召回专案执行情况明细",
        "召回专案执行情况明细"
      );
    },
    reset() {
      (this.executeParams.dataInfo.carBrandCode = "1"),
        (this.executeParams.dataInfo.recallCaseCode = ""),
        (this.executeParams.dataInfo.recallCaseType = "0"),
        (this.executeParams.dataInfo.isStop = "0"),
        (this.executeParams.dataInfo.startOperDate = ""),
        (this.executeParams.dataInfo.endOperDate = ""),
        (this.executeParams.dataInfo.topic = ""),
        (this.totalCount = ""),
        (this.totalAmount = ""),
        (this.date = "");
    }
  }
};
</script>