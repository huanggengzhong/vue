<template>
  <div class="app-container app-container-table">
    <br />
    <br />
    <div class="filter-container filter-params">
      <el-row :gutter="26">
        <el-col :span="6">
          <label>车辆品牌</label>
          <el-input v-model="detailInfo.carBrandCn" readonly="readonly"></el-input>
        </el-col>
        <el-col :span="6">
          <label>召回专案类型</label>
          <el-input v-model="detailInfo.recallCaseTypeName" readonly="readonly"></el-input>
        </el-col>
        <el-col :span="12">
          <label>主题</label>
          <el-input v-model="detailInfo.topic" readonly="readonly"></el-input>
        </el-col>
      </el-row>
      <el-row :gutter="26">
        <el-col :span="6">
          <label>召回专案编号</label>
          <el-input v-model="detailInfo.caseCode" readonly="readonly"></el-input>
        </el-col>
        <el-col :span="6">
          <label>主凶件号</label>
          <el-input v-model="detailInfo.pfpCode" readonly="readonly"></el-input>
        </el-col>
        <el-col :span="6">
          <label>故障部位</label>
          <el-input v-model="detailInfo.faultPartCode" readonly="readonly"></el-input>
        </el-col>
        <el-col :span="6">
          <label>故障现象码</label>
          <el-input v-model="detailInfo.csCode" readonly="readonly"></el-input>
        </el-col>
      </el-row>
      <el-row :gutter="26">
        <el-col :span="6">
          <label>故障原因码</label>
          <el-input v-model="detailInfo.ctCode" readonly="readonly"></el-input>
        </el-col>
        <el-col :span="6">
          <label>保修期限（月）</label>
          <el-input v-model="detailInfo.limitDays" readonly="readonly"></el-input>
        </el-col>
        <el-col :span="6">
          <label>保修里程（kM）</label>
          <el-input v-model="detailInfo.limitMile" readonly="readonly"></el-input>
        </el-col>
        <el-col :span="6">
          <label>召回类型</label>
          <el-input v-model="detailInfo.recallTypeName" readonly="readonly"></el-input>
        </el-col>
      </el-row>
       <el-row :gutter="26">
        <el-col :span="6">
          <label>责任单位名称</label>
          <el-input v-model="detailInfo.dutyCompName" readonly="readonly"></el-input>
        </el-col>
           <el-col :span="6">
          <label>生产工厂</label>
          <el-input v-model="detailInfo.productFactory" readonly="readonly"></el-input>
        </el-col>
        <el-col :span="6">
          <label>责任单位类别</label>
          <el-input v-model="detailInfo.dutyCompTypeName" readonly="readonly"></el-input>
        </el-col>
        <el-col :span="6">
          <label>责任单位代码</label>
          <el-input v-model="detailInfo.dutyComp" readonly="readonly"></el-input>
        </el-col>
      </el-row>
      <el-row :gutter="26">
        <el-col :span="6">
          <label>预计完成日期</label>
          <el-input v-model="detailInfo.estimateCompleteDate" readonly="readonly"></el-input>
        </el-col>
        <el-col :span="6">
          <el-checkbox v-model="detailInfo.isRemind" readonly="readonly">是否进行提醒</el-checkbox>
        </el-col>
        <el-col :span="6">
          <el-checkbox v-model="detailInfo.isLinkRecallCase" readonly="readonly">是否关联召回专案</el-checkbox>
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
              <el-input v-model="recallCarDetail.dataInfo.belongDlrShortName"></el-input>
            </el-col>
            <el-col :span="6">
              <label>实施专营店</label>
              <el-select
                v-model="recallCarDetail.dataInfo.dlrShortName"
                placeholder="请选择"
                @change="getDlr"
                clearable
              >
                <el-option label="全部" value="0"></el-option>
                <el-option label="本店" value="1"></el-option>
                <el-option label="他店" value="2"></el-option>
              </el-select>
            </el-col>
            <el-col :span="6">
              <label>执行情况</label>
              <el-select
                v-model="recallCarDetail.dataInfo.recallStatus"
                placeholder="请选择"
                @change="getStatus"
                clearable
              >
                <el-option label="全部" value="0"></el-option>
                <el-option label="已完成" value="1"></el-option>
                <el-option label="未完成" value="2"></el-option>
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
          :queryParams="recallParams"
          :dynamicTableCols="recallCarCols"
          :isPaging="true"
          :isShowSelect="true"
          :isDialog="true"
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
import {
  dorecallFindingDetail,
  doseDbRecallCaseVinQueryList
} from "@/api/se/guarantee/recall/recallFinding";
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
    this.onLoad();
  },
  data() {
    return {
      sonActiveName: "one",
      list: "",
      list2: "",
      queryParams: {},
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
      recallCarDetail: {
        dataInfo: {
          vin: "",
          belongDlrShortName: "",
          dlrShortName: "0",
          recallStatus: "0"
        }
      },
      recallParams: {
        APIUrl: recallApi.seDbRecallCaseVinQueryList.APIUrl,
        InputType: recallApi.seDbRecallCaseVinQueryList.InputType,
        ServiceCode: recallApi.seDbRecallCaseVinQueryList.ServiceCode,
        dataInfo: {},
        apiQueryRow: [
          "vin",
          "engineNo",
          "belongDlrShortName",
          "dlrShortName",
          "recallStatusName",
          "repairDate"
        ]
      },
      //召回专案车辆
      recallCarCols: [
        { label: "VIN码", codeField: "vin" },
        { label: "发动机号", codeField: "engineNo" },
        { label: "所属经销商", codeField: "belongDlrShortName" },
        { label: "实施经销商", codeField: "dlrShortName" },
        { label: "执行情况", codeField: "recallStatusName" },
        { label: "维修时间", codeField: "repairDate" }
      ],
      workTimeDetail: {},
      //工时明细
      workTimeDetailCols: [
        { label: "维修内容", codeField: "wiName" },
        { label: "工时编码", codeField: "wiCode" },
        { label: "工时单价", codeField: "wiPrice" },
        { label: "工时数", codeField: "wiSaleQty" },
        { label: "工时系数", codeField: "wiCoef" },
        { label: "总金额", codeField: "wiAmount" },
        { label: "关联号", codeField: "linkOrderCode" }
      ],
      partDetail: {},
      //备件明细
      partDetailCols: [
        { label: "损坏件号", codeField: "oldLoadPartNo" },
        { label: "更换零件号", codeField: "partNo" },
        { label: "更换零件名称", codeField: "partName" },
        { label: "备件数量", codeField: "partQty" },
        { label: "必须件", codeField: "isMust" },
        { label: "备件单价", codeField: "partPrice" },
        { label: "系数", codeField: "partCoef" },
        { label: "总金额", codeField: "partAmount" },
        { label: "关联号", codeField: "linkOrderCode" }
      ],
      otherFeeDetail: {},
      //其他费用明细
      otherFeeDetailCols: [
        { label: "类别代码", codeField: "costTypeCode" },
        { label: "类别名称", codeField: "costTypeName" },
        { label: "系数", codeField: "costCoef" },
        { label: "单价", codeField: "price" },
        { label: "金额", codeField: "otherAmount" },
        { label: "备注", codeField: "costCoef" },
        { label: "关联号", codeField: "linkOrderCode" }
      ],
      //明细信息
      detailInfo: {
        carBrandCn: "",
        carBrandCode: "",
        recallCaseTypeName: "",
        recallCaseType: "",
        operDate: "",
        topic: "",
        remark: "",
        caseStatus: "",
        operator: "",
        pfpCode: "",
        faultPartCode: "",
        wiCoef: "",
        csCode: "",
        ctCode: "",
        productFactory: "",
        aimnum: "",
        dutyCompTypeName: "",
        dutyCompType: "",
        dutyComp: "",
        dutyCompName: "",
        limitDays: "",
        limitMile: "",
        estimateCompleteDate: "",
        isRemind: "",
        isschedualmanagement: "",
        otherAmount: "",
        wiAmount: "",
        partAmount: "",
        recallTypeName: "",
        recallType: "",
        isLinkRecallCase: ""
      }
    };
  },
  methods: {
    //召回专案查询明细
    onLoad() {
      var recallCaseId = this.$route.params.the_data;
      var pageSize = -1;
      var pageIndex = -1;
      dorecallFindingDetail(pageSize, pageIndex, recallCaseId).then(
        response => {
          var resData = response.data[recallApi.seDbRecallCaseQueryListDetail.ServiceCode]
          if (resData.result === "1") {
            this.list = resData.rows;
            console.log(this.list);
            //this.detailInfo = this.list[0];
            this.detailInfo.carBrandCn = this.list[0].carBrandCn;
            this.detailInfo.carBrandCode = this.list[0].carBrandCode;
            this.detailInfo.recallCaseTypeName = this.list[0].recallCaseTypeName;
            this.detailInfo.recallCaseType = this.list[0].recallCaseType;
            this.detailInfo.operDate = this.list[0].operDate;
            this.detailInfo.topic = this.list[0].topic;
            this.detailInfo.caseStatus = this.list[0].caseStatus;
            this.detailInfo.remark = this.list[0].remark;
            this.detailInfo.caseCode = this.list[0].caseCode;
            this.detailInfo.operator = this.list[0].operator;
            this.detailInfo.pfpCode = this.list[0].pfpCode;
            this.detailInfo.faultPartCode = this.list[0].faultPartCode;
            this.detailInfo.wiCoef = this.list[0].wiCoef;
            this.detailInfo.csCode = this.list[0].csCode;
            this.detailInfo.ctCode = this.list[0].ctCode;
            // this.detailInfo.productFactory = this.list[0].productFactory;
            this.detailInfo.aimnum = this.list[0].aimnum;
            // this.detailInfo.dutyCompTypeName = this.list[0].dutyCompTypeName;
            // this.detailInfo.dutyCompType = this.list[0].dutyCompType;
            // this.detailInfo.dutyComp = this.list[0].dutyComp;
            // this.detailInfo.dutyCompName = this.list[0].dutyCompName;
            this.detailInfo.limitDays = this.list[0].limitDays;
            this.detailInfo.limitMile = this.list[0].limitMile;
            this.detailInfo.estimateCompleteDate = this.list[0].estimateCompleteDate;
            this.detailInfo.isRemind = this.list[0].isRemind;
            this.detailInfo.isschedualmanagement = this.list[0].isschedualmanagement;
            this.detailInfo.otherAmount = this.list[0].otherAmount;
            this.detailInfo.wiAmount = this.list[0].wiAmount;
            this.detailInfo.partAmount = this.list[0].partAmount;
            this.detailInfo.recallTypeName = this.list[0].recallTypeName;
            this.detailInfo.recallType = this.list[0].recallType;
            this.detailInfo.isLinkRecallCase = this.list[0].isLinkRecallCase;

            //工时明细集合
            this.$refs.workTimeDetailList.tableData = this.list[0].seDbRecallCaseWi;
            //备件明细集合
            this.$refs.partDetailList.tableData = this.list[0].seDbRecallCasePart;
            //其他费用明细集合
            this.$refs.otherFeeDetailList.tableData = this.list[0].seDbRecallCaseOther;



          }

          

        }
      );
    },
    //召回专案车辆查询
    queryRecallCar() {
      const that = this;
      that.listLoading = true;
      console.log(this.recallCarDetail.dataInfo);
      doseDbRecallCaseVinQueryList(that.recallCarDetail.dataInfo).then(
        response => {
          if (
            response.data[recallApi.seDbRecallCaseVinQueryList.ServiceCode]
              .result === "1"
          ) {
            this.list2 =
              response.data[
                recallApi.seDbRecallCaseVinQueryList.ServiceCode
              ].rows;
            console.log(this.list2);
            this.$refs.recallCarList.tableData = this.list2;
          }
        }
      );
    },
    //导出
    exportData() {
      this.$refs.recallCarList.exportTableData(
        "excel",
        "召回专案车辆VIN",
        "召回专案车辆VIN",
        this.recallCarCols
      );
    },
    getDlr(val) {},
    getStatus(val) {}
  }
};
</script>