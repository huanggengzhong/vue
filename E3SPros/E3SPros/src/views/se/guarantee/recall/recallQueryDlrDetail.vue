<template>
  <div class="app-container app-container-table">
    <div class="filter-container filter-params">
      <el-row :gutter="26">
        <el-col :span="6">
          <label>车辆品牌</label>
          <el-input v-model="detailInfo.carBrandCode" readonly="true"></el-input>
        </el-col>
        <el-col :span="6">
          <label>召回专案类型</label>
          <el-input v-model="detailInfo.recallTypeName" readonly="true"></el-input>
        </el-col>
        <el-col :span="12">
          <label>主题</label>
          <el-input v-model="detailInfo.theme" readonly="true"></el-input>
        </el-col>
      </el-row>
      <el-row :gutter="26">
        <el-col :span="6">
          <label>召回专案编号</label>
          <el-input v-model="detailInfo.recallNo" readonly="true"></el-input>
        </el-col>
        <el-col :span="6">
          <label>主凶件号</label>
          <el-input v-model="detailInfo.mainMurder" readonly="true"></el-input>
        </el-col>
        <el-col :span="6">
          <label>故障部位</label>
          <el-input v-model="detailInfo.badPartCode" readonly="true"></el-input>
        </el-col>
        <el-col :span="6">
          <label>故障现象码</label>
          <el-input v-model="detailInfo.badView" readonly="true"></el-input>
        </el-col>
      </el-row>
      <el-row :gutter="26">
        <el-col :span="6">
          <label>故障原因码</label>
          <el-input v-model="detailInfo.badDue" readonly="true"></el-input>
        </el-col>
        <el-col :span="6">
          <label>生产工厂</label>
          <el-input v-model="detailInfo.factory" readonly="true"></el-input>
        </el-col>
        <el-col :span="6">
          <label>责任单位类别</label>
          <el-input v-model="detailInfo.dutyUnitTypeName" readonly="true"></el-input>
        </el-col>
        <el-col :span="6">
          <label>责任单位代码</label>
          <el-input v-model="detailInfo.dutyUnitCode" readonly="true"></el-input>
        </el-col>
      </el-row>
      <el-row :gutter="26">
        <el-col :span="6">
          <label>责任单位名称</label>
          <el-input v-model="detailInfo.dutyUnitName" readonly="true"></el-input>
        </el-col>
        <el-col :span="6">
          <label>保修期限（月）</label>
          <el-input v-model="detailInfo.limit" readonly="true"></el-input>
        </el-col>
        <el-col :span="6">
          <label>保修里程（kM）</label>
          <el-input v-model="detailInfo.mileage" readonly="true"></el-input>
        </el-col>
        <el-col :span="6">
          <label>召回类型</label>
          <el-input v-model="detailInfo.recallWayName" readonly="true"></el-input>
        </el-col>
      </el-row>
      <el-row :gutter="26">
        <el-col :span="6">
          <label>预计完成日期</label>
          <el-input v-model="detailInfo.expectDate" readonly="true"></el-input>
        </el-col>
        <el-col :span="6">
          <el-checkbox v-model="isRemind" readonly="true">是否进行提醒</el-checkbox>
        </el-col>
      </el-row>
    </div>
    <el-tabs v-model="sonActiveName" class="filter-container">
      <el-tab-pane label="召回专案车辆" name="one">
        <div class="filter-container filter-params" ref="conHeight">
          <el-row :gutter="26">
            <el-col :span="6">
              <label>VIN码</label>
              <el-input v-model="recallCarDetail.dataInfo.vin"></el-input>
            </el-col>
            <el-col :span="6">
              <label>所属专营店</label>
              <el-input v-model="recallCarDetail.dataInfo.dlrCode"></el-input>
            </el-col>
            <el-col :span="6">
              <label>实施专营店</label>
              <el-select
                v-model="recallCarDetail.dataInfo.realDlrCode"
                placeholder="请选择"
                @change="getQuitStatus"
                clearable
              >
                <el-option label="全部" value></el-option>
                <el-option label="本店" value="1"></el-option>
                <el-option label="他店" value="0"></el-option>
              </el-select>
            </el-col>
            <el-col :span="6">
              <label>执行情况</label>
              <el-select
                v-model="recallCarDetail.dataInfo.implementation"
                placeholder="请选择"
                @change="getQuitStatus"
                clearable
              >
                <el-option label="全部" value></el-option>
                <el-option label="已完成" value="1"></el-option>
                <el-option label="未完成" value="0"></el-option>
              </el-select>
            </el-col>
          </el-row>
          <el-row :gutter="26">
            <el-col :span="6"></el-col>
            <el-col :span="6"></el-col>
            <el-col :span="6"></el-col>
            <el-col :span="6">
              <div class="filter-container filter-button" ref="searcheHeight">
                <el-button size="small" @click="queryRecallCar()">查询</el-button>
                <el-button size="small" @click="exportData">导出</el-button>
              </div>
            </el-col>
          </el-row>
        </div>

        <mix-table
          ref="recallCarList"
          :queryParams="recallCarDetail"
          :dynamicTableCols="recallCarCols"
          :isPaging="true"
          :isShowSelect="true"
          :isDialog="false"
        ></mix-table>
      </el-tab-pane>

      <el-tab-pane label="工时明细" name="two">
        <mix-table
          ref="workTimeDetailList"
          :queryParams="workTimeDetail"
          :dynamicTableCols="workTimeDetailCols"
          :isPaging="true"
          :isShowSelect="true"
          :isDialog="false"
        ></mix-table>
      </el-tab-pane>

      <el-tab-pane label="备件明细" name="three">
        <mix-table
          ref="partDetailList"
          :queryParams="partDetail"
          :dynamicTableCols="partDetailCols"
          :isPaging="true"
          :isShowSelect="true"
          :isDialog="false"
        ></mix-table>
      </el-tab-pane>

      <el-tab-pane label="其他费用明细" name="four">
        <mix-table
          ref="otherFeeDetailList"
          :queryParams="otherFeeDetail"
          :dynamicTableCols="otherFeeDetailCols"
          :isPaging="true"
          :isShowSelect="true"
          :isDialog="false"
        ></mix-table>
      </el-tab-pane>
    </el-tabs>
  </div>
</template> 
<script>
import carBrand from "@/components/org/carBrand/carBrand";
import { recallApi } from "@/api/graphQLApiList/se";
import { dorecallFindingDetail } from "@/api/se/guarantee/recall/recallFinding";
import mixTable from "@/components/basicComponent/mixTable";
import { the_Height } from "@/components/se/seMixins/makeHeightForTemplate";

export default {
  name: "recallSetting",
  mixins: [the_Height],
  components: {
    carBrand,
    mixTable
  },
  created() {
    this.recallDetailQuery();
  },
  watch: {
    activeName(val) {
      if ((val = "first")) {
        this.tabDisabled = true;
      }
    }
  },
  data() {
    return {
      sonActiveName: "one",
      //页签二是否禁用
      tabDisabled: true,
      queryParams: {
        APIUrl: recallApi.recallQueryOEM.APIUrl,
        InputType: recallApi.recallQueryOEM.InputType,
        ServiceCode: recallApi.recallQueryOEM.ServiceCode,
        dataInfo: {
          carBrandCode: "",
          recallCode: "",
          recallBeginDate: "",
          recallEndDate: "",
          recallType: "",
          quitStatus: "",
          theme: "",
          mainKillNo: ""
        },
        apiQueryRow: [
          "carBrandCn",
          "carBrandCode",
          "recallId",
          "recallCode",
          "theme",
          "mainKillNo",
          "faultLocation",
          "recallStatus",
          "carNumber",
          "amount",
          "recallType"
        ]
      },
      cols: [
        { label: "车辆品牌", codeField: "carBrandCn" },
        { label: "车辆品牌", codeField: "carBrandCode", hidden: true },
        { label: "召回专案Id", codeField: "recallId", hidden: true },
        { label: "召回专案编码", codeField: "recallCode" },
        { label: "主题", codeField: "theme" },
        { label: "主凶件号", codeField: "mainKillNo" },
        { label: "故障部位", codeField: "faultLocation" },
        { label: "召回专案状态", codeField: "recallStatus" },
        { label: "车辆数量", codeField: "carNumber" },
        { label: "金额", codeField: "amount" },
        { label: "召回专案类型", codeField: "recallType" }
      ],
      //查询明细
      // queryDetailParams: {
      //   APIUrl: recallApi.recallFindingDetail.APIUrl,
      //   InputType: recallApi.recallFindingDetail.InputType,
      //   ServiceCode: recallApi.recallFindingDetail.ServiceCode,
      //   dataInfo: {
      //     recallId: ""
      //   },
      //   apiQueryRow: [
      //     "carBrandCn",
      //     "carBrandCode",
      //     "recallId",
      //     "recallCode",
      //     "theme",
      //     "mainKillNo",
      //     "faultLocation",
      //     "recallStatus",
      //     "carNumber",
      //     "amount",
      //     "recallType"
      //   ]
      // },
      recallCarDetail: {
        APIUrl: recallApi.recallCarQuery.APIUrl,
        InputType: recallApi.recallCarQuery.InputType,
        ServiceCode: recallApi.recallCarQuery.ServiceCode,
        dataInfo: {
          vin: "",
          dlrCode: "",
          realDlrCode: "",
          implementation: ""
        },
        apiQueryRow: [
          "vin",
          "engineNo",
          "dlrCode",
          "realDlrCode",
          "implementation",
          "repairEndTime"
        ]
      },
      //recallCarDetail: {},
      //召回专案车辆
      recallCarCols: [
        { label: "VIN码", codeField: "vin" },
        { label: "发动机号", codeField: "engineNo" },
        { label: "所属经销商", codeField: "ownDlrCode", hidden: true },
        { label: "所属经销商", codeField: "ownDlrName" },
        { label: "实施经销商", codeField: "realDlrCode" },
        { label: "执行情况", codeField: "implementation" },
        { label: "维修时间", codeField: "repairEndTime" }
      ],
      workTimeDetail: {},
      //工时明细
      workTimeDetailCols: [
        { label: "维修内容", codeField: "repairContent" },
        { label: "工时编码", codeField: "workTimeCode" },
        { label: "工时单价", codeField: "workTimePrice" },
        { label: "工时数", codeField: "workTimeAccount" },
        { label: "工时系数", codeField: "workTimeNum" },
        { label: "总金额", codeField: "total" }
      ],
      partDetail: {},
      //备件明细
      partDetailCols: [
        { label: "损坏件号", codeField: "badPartCode" },
        { label: "更换零件号", codeField: "newPartCode" },
        { label: "更换零件名称", codeField: "newPartName" },
        { label: "备件数量", codeField: "partNum" },
        { label: "必须件", codeField: "isMust" },
        { label: "备件单价", codeField: "partPrice" },
        { label: "系数", codeField: "num" },
        { label: "总金额", codeField: "total" }
      ],
      otherFeeDetail: {},
      //其他费用明细
      otherFeeDetailCols: [
        { label: "类别代码", codeField: "typeCode" },
        { label: "类别名称", codeField: "typeName" },
        { label: "系数", codeField: "num" },
        { label: "单价", codeField: "per" },
        { label: "金额", codeField: "price" },
        { label: "备注", codeField: "remark" }
      ],
      //明细信息
      detailInfo: {
        carBrandCode: "",
        recallTypeName: "",
        theme: "",
        recallNo: "",
        mainKillNo: "",
        faultLocation: "",
        faultPhenomenonCode: "",
        faultCauseCode: "",
        productPlant: "",
        dutyUnitType: "",
        dutyUnitCode: "",
        dutyUnitName: "",
        warrantyPeriod: "",
        mileage: "",
        recallType: "",
        expectDate: ""
      }
    };
  },
  methods: {
    fetchData() {
      this.$refs.tableList1.queryList();
    },
    //打开召回专案编码弹框
    openRecall() {},
    //点击更多
    changeToggleParam() {
      this.toggleParam = !this.toggleParam;
      if (this.toggleParam) {
        this.moreBtnIcon = "el-icon-minus";
      } else {
        this.moreBtnIcon = "el-icon-plus";
      }
    },
    //重置
    reset() {
      this.queryParams.dataInfo.carBrandCode = "";
      this.queryParams.dataInfo.recallCode = "";
      this.queryParams.dataInfo.recallBeginDate = "";
      this.queryParams.dataInfo.recallEndDate = "";
      this.queryParams.dataInfo.recallType = "";
      this.queryParams.dataInfo.quitStatus = "";
      this.queryParams.dataInfo.theme = "";
      this.queryParams.dataInfo.mainKillNo = "";
    },

    //召回专案查询明细
    recallDetailQuery() {
      var recallId = this.$route.params.the_data;
      var pageSize = -1;
      var pageIndex = -1;
      //debugger
      dorecallFindingDetail(pageSize, pageIndex, recallId).then(response => {
        var resData = response.data[recallApi.recallFindingDetail.ServiceCode];
        if (resData.result === "1") {

          this.detailInfo = resData.rows[0];

          // this.detailInfo.carBrandCode = resData.rows[0].carBrandCode;
          // this.detailInfo.recallTypeName = resData.rows[0].recallTypeName;
          // this.detailInfo.theme = resData.rows[0].theme;
          // this.detailInfo.recallNo = resData.rows[0].recallNo;
          // this.detailInfo.mainMurder = resData.rows[0].mainMurder;
          // this.detailInfo.badPartCode = resData.rows[0].badPartCode;
          // this.detailInfo.badView = resData.rows[0].badView;
          // this.detailInfo.badDue = resData.rows[0].badDue;
          // this.detailInfo.factory = resData.rows[0].factory;
          // this.detailInfo.dutyUnitTypeName = resData.rows[0].dutyUnitTypeName;
          // this.detailInfo.dutyUnitCode = resData.rows[0].dutyUnitCode;
          // this.detailInfo.dutyUnitName = resData.rows[0].dutyUnitName;
          // this.detailInfo.limit = resData.rows[0].limit;
          // this.detailInfo.mileage = resData.rows[0].mileage;
          // this.detailInfo.recallWayName = resData.rows[0].recallWayName;
          // this.detailInfo.expectDate = resData.rows[0].expectDate;
          //工时明细集合
          this.$refs.workTimeDetailList.tableData =
            resData.rows[0].workTimeGather;
          //备件明细集合
          this.$refs.partDetailList.tableData = resData.rows[0].partGather;
          //其他费用明细集合
          this.$refs.otherFeeDetailList.tableData = resData.rows[0].otherGather;
        } else {
          this.$message({
            message:
              "查询失败：" +
              response.data[recallApi.recallFindingDetail.ServiceCode].msg,
            type: "warn",
            uration: 2000
          });
        }
      });
    },
    //召回专案车辆查询
    queryRecallCar() {
      this.$refs.recallCarList.queryList();
    },
    //导出
    exportData() {
      //this.$refs.tableList1.exportTableData('excel', '召回专案任务分配', 'Sheet0');
    },
    getBrandCode(val) {
      this.queryParams.dataInfo.carBrandCode = val;
    },
    changeBeginDate(val) {
      this.queryParams.dataInfo.recallBeginDate = val;
    },
    changeEndDate(val) {
      this.queryParams.dataInfo.recallEndDate = val;
    },
    getRecallType(val) {
      this.queryParams.dataInfo.recallType = val;
    },
    getQuitStatus(val) {
      this.queryParams.dataInfo.quitStatus = val;
    },
    getDate(val) {
      (this.listQuery.dataInfo.begTime = val[0]),
        (this.listQuery.dataInfo.endTime = val[1]);
    }
  }
};
</script>