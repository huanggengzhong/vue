<template>
  <div class="app-container app-container-table">
    <div class="filter-container filter-button" ref="searcheHeight">
      <el-button size="small" @click="fetchData()">查询</el-button>
      <el-button size="small" @click="exportData()">导出</el-button>
      <el-button size="small" @click="reset()">重置</el-button>
      <el-button size="small" @click="openWiOrder()">选择派工</el-button>
      <el-button size="small" @click="openPartOEM()">选择备件</el-button>
    </div>

    <div class="filter-container filter-params" ref="conHeight">
      <el-form>
        <el-row :gutter="26">
          <el-col :span="22">
            <carBrand
              :span="6"
              :code="queryParams.dataInfo.carBrandCode"
              @changeCode="getBrandCode"
            />

            <el-col :span="6">
              <label>召回专案编码</label>
              <el-input
                @focus="queryRecallCode"
                v-model="queryParams.dataInfo.recallCaseCode"
                size="small"
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
                value-format="yyyy-MM-dd HH:mm:ss"
                format="yyyy-MM-dd HH:mm:ss"
                @change="getDate"
              ></el-date-picker>
            </el-col>
          </el-col>
        </el-row>

        <el-row :gutter="26">
          <el-col :span="22">
            <el-col :span="6">
              <label>召回专案类型</label>
              <el-select v-model="queryParams.dataInfo.recallCaseType">
                <el-option label="全部" value=""></el-option>
                <el-option label="专案" value="1"></el-option>
                <el-option label="召回" value="2"></el-option>
              </el-select>
            </el-col>

            <el-col :span="6">
              <label>停止状态</label>
              <el-select v-model="queryParams.dataInfo.caseStatus">
                <el-option label="全部" value=""></el-option>
                <el-option label="未停止" value="1"></el-option>
                <el-option label="已停止" value="2"></el-option>
              </el-select>
            </el-col>

            <el-col :span="6">
              <label>主题</label>
              <el-input v-model="queryParams.dataInfo.topic"></el-input>
            </el-col>

            <el-col :span="6">
              <label>主凶件号</label>
              <el-input v-model="queryParams.dataInfo.pfpCode"></el-input>
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
      ref="queryDataTable"
      :queryParams="queryParams"
      :dynamicTableCols="cols"
      @rowClick="queryDetailClick"
      :isPaging="true"
      :isShowSelect="true"
      :isDialog="true"
    ></mix-table>

    <chooseRepairOrder 
      :wiOrderVisible="wiOrderVisible" 
      @close="closeWiOrder"
      @changeCode="getRepairOrderCode" />

    <choosePartOEM
      :choosePartOEMVisible="choosePartOEMVisible" 
      @close="closePartOEM"
      @changeCode="getPartOEMData" />
  </div>
</template> 
<script>
import carBrand from "@/components/org/carBrand/carBrand";
import { recallApi } from "@/api/graphQLApiList/se";
import { doseDbRecallCaseQueryListForPage } from "@/api/se/guarantee/recall/recallFinding";
import mixTable from "@/components/basicComponent/mixTable";
import { the_Height } from "@/components/se/seMixins/makeHeightForTemplate";
import chooseRecallDialog from "@/views/se/guarantee/recall/chooseRecallDialog";
import chooseRepairOrder from "@/views/se/guarantee/recall/chooseRepairOrder";
import choosePartOEM from "@/views/se/guarantee/recall/choosePartOEM";

export default {
  name: "recallQueryDLR",
  mixins: [the_Height],
  components: {
    carBrand,
    mixTable,
    chooseRecallDialog,
    chooseRepairOrder,
    choosePartOEM
  },
  created() {},
  data() {
    return {
      date: "",
      recallDialogVisible: false,
      wiOrderVisible: false,
      choosePartOEMVisible: false,
      queryParams: {
        APIUrl: recallApi.seDbRecallCaseQueryListForPage.APIUrl,
        InputType: recallApi.seDbRecallCaseQueryListForPage.InputType,
        ServiceCode: recallApi.seDbRecallCaseQueryListForPage.ServiceCode,
        dataInfo: {
          carBrandCode: "",
          recallCaseCode: "",
          recallCaseType: "",
          caseStatus: "",
          startOperDate: "",
          endOperDate: "",
          pfpCode: "",
          topic: "",
          dlrId:this.$store.getters.orgInfo.DLR_ID
        },
        apiQueryRow: [
          "carBrandCode",
          "carBrandCn",
          "recallCaseCode",
          "pfpCode",
          "topic",
          "faultPartCode",
          "caseStatus",
          "aimnum",
          //"amount",
          "recallCaseType"
        ]
      },
      cols: [
        { label: "车辆品牌", codeField: "carBrandCn" },
        { label: "车辆品牌编码", codeField: "carBrandCode", hidden: true },
        { label: "召回专案编码", codeField: "recallCaseCode" },
        { label: "主题", codeField: "topic" },
        { label: "主凶件号", codeField: "pfpCode" },
        { label: "故障部位", codeField: "faultPartCode" },
        { label: "召回专案状态", codeField: "caseStatus" },
        { label: "车辆数量", codeField: "aimnum" },
        { label: "金额", codeField: "amount" },
        { label: "召回专案类型", codeField: "recallCaseType" }
      ]
    };
  },
  methods: {
    fetchData() {
      if (this.date == '') {
        this.$message({
          type: "warning",
          message: "请选择日期!"
        });
        return;
      }
      this.$refs.queryDataTable.queryList();
    },
    queryDetailClick() {
      this.$router.push({
        name: "recallQueryOEMDetail",
        params: {
          the_data: this.$refs.queryDataTable.currentRow[0].recallCaseId
        }
      });
    },
    getBrandCode(val) {
      this.queryParams.dataInfo.carBrandCode = val;
    },
    getDate(val) {
      (this.queryParams.dataInfo.startOperDate = val[0]),
      (this.queryParams.dataInfo.endOperDate = val[1]);
    },
    queryRecallCode() {
      this.recallDialogVisible = true;
    },
    closeDialog() {
      this.recallDialogVisible = false;
    },
    getRecall(val) {
      this.queryParams.dataInfo.recallCaseCode = val[0].recallCaseCode;
      this.recallDialogVisible = false
    },
    reset() {
      (this.queryParams.dataInfo.carBrandCode = "1"),
      (this.queryParams.dataInfo.recallCaseCode = ""),
      (this.queryParams.dataInfo.recallCaseType = ""),
      (this.queryParams.dataInfo.caseStatus = ""),
      (this.queryParams.dataInfo.startOperDate = ""),
      (this.queryParams.dataInfo.endOperDate = ""),
      (this.queryParams.dataInfo.pfpCode = ""),
      (this.queryParams.dataInfo.topic = ""),
      (this.date = "");
    },
    exportData(){
      this.$refs.queryDataTable.exportTableData(
        "excel",
        "召回专案PV查询",
        "Sheet0"
      )
    },
    openWiOrder() {
      this.wiOrderVisible = true;
    },
    closeWiOrder(val) {
      this.wiOrderVisible = val;
    },
    getRepairOrderCode(val) {
    },
    openPartOEM() {
      this.choosePartOEMVisible = true;
    },
    closePartOEM(val) {
      this.choosePartOEMVisible = val;
    },
    getPartOEMData() {

    }
  }
};
</script>