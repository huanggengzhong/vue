/*
 * @Author: xgz 
 * @Date: 2019-07-27 14:28:14 
 * @Last Modified by: //此处填修改人名字
 * @Last Modified time: 2019年8月3日11:31:28
 */

<template>
  <div class="app-container app-container-table">
    <div class="filter-container filter-button">
      <el-button type="primary" @click="query(1)">查询</el-button>
      <el-button @click="clueAssign()">线索分配</el-button>
      <el-button @click="query(2)">导出</el-button>
      <el-button @click="reset()">重置</el-button>
    </div>
    <div class="filter-container filter-title-crm">查询条件</div>
    <div class="filter-container filter-params-crm">
      <el-form label-position="right">
        <el-row>
          <el-col :span="22">
            <el-col :span="6">
              <txt_CustomerName :txt_CustomerName="txn" ref="txt_CustomerName" />
            </el-col>
            <el-col :span="6">
              <PhoneNumber :PhoneNumber="pn" ref="PhoneNumber" />
            </el-col>
            <el-col :span="6">
              <sct_CarBrand :sct_CarBrand="scb" ref="sct_CarBrand" />
            </el-col>
            <el-col :span="6">
              <ClueNumber :ClueNumber="cn" ref="ClueNumber" />
            </el-col>
          </el-col>
          <el-col :span="2">
            <el-button icon="el-icon-plus" @click="changeToggleParam" class="moreParam">更多</el-button>
          </el-col>
          <el-col :span="22" v-show="toggleParam" class="toggleParam">
            <el-row>
              <el-col :span="6">
                <dt_BuildMenuDates :dt_BuildMenuDates="dbmd" ref="dt_BuildMenuDates" />
              </el-col>
              <el-col :span="6">
                <BatchNumber :BatchNumber="b" ref="Batch" />
              </el-col>
              <el-col :span="6">
                <NumberOfOutCalls :NumberOfOutCalls="nonc" ref="NumberOfOutCalls" />
              </el-col>
              <el-col :span="6">
                <CurrentHandler :CurrentHandler="ch" ref="CurrentHandler" />
              </el-col>

              <el-col :span="6">
                <dt_RetentionTimes :dt_RetentionTimes="crt" ref="dt_RetentionTimes" />
              </el-col>
              <el-col :span="6">
                <ContactWay :ContactWay="cw" ref="ContactWay" @changeCode="ContactWaychange" />
              </el-col>
              <el-col :span="6">
                <ChannelBigClass :ChannelBigClass="cbc" ref="ChannelBigClass" />
              </el-col>
              <el-col :span="6">
                <ChannelSmalTypeName :ChannelSmalTypeName="cstn" ref="ChannelSmalTypeName" />
              </el-col>

              <el-col :span="6">
                <AssignStatus :AssignStatus="as" ref="AssignStatus" />
              </el-col>
            </el-row>
          </el-col>
        </el-row>
      </el-form>
    </div>
    <!-- 主网格开始 -->
    <div class="filter-container filter-title-crm">查询结果</div>
    <el-table
      :data="tabledatas.tableData"
      ref="multipleTable"
      @selection-change="handleSelectionChange"
      @current-change="mainSelectH"
      highlight-current-row
      style="width: 100%;height:330px"
      v-loading.body="loadFlag"
      element-loading-text="Loading"
      border
      fit
    >
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column type="index" label="序号" width="55"></el-table-column>
      <el-table-column
        v-for="item in tabledatas.colnames"
        :key="item.value"
        :label="item.label"
        :prop="item.value"
        :width="item.width"
        align="center"
      ></el-table-column>
    </el-table>
    <el-pagination
      background
      layout="prev, pager, next"
      :total="tabledatas.total"
      :page-size="tabledatas.pagesize"
      :current-page="tabledatas.pageindex"
      @prev-click="mainPrev"
      @next-click="mainNext"
      @current-change="mainChangepage"
    ></el-pagination>
    <!-- 主网格结束 -->
    <!-- 线索分配弹窗 -->
    <el-dialog
      title="本组待办任务线索培育分配人员"
      :visible.sync="dialogVisible"
      width="900px"
      center
      append-to-body
    >
      <div class="filter-container filter-title-crm">
        <div style="float:right">
          <el-button type="primary" size="small" @click="averAssign()">平均分配</el-button>
          <el-button size="small" @click="confirmAssign">确认</el-button>
        </div>
      </div>
      <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;共选择任务:{{choiceRow}}条，数量为0或为空表示此人员未分配</div>
      <div class="filter-container filter-title-crm">人员列表</div>
      <el-table
        :data="tabledatasDiag.tableData"
        @selection-change="handleSelectionChangeAssign"
        highlight-current-row
        style="width: 100%;height:330px"
        v-loading.body="false"
        element-loading-text="Loading"
        border
        fit
        ref="multipleTableRY"
      >
        <el-table-column label="选择" align="center" type="selection" width="55"></el-table-column>
        <el-table-column type="index" label="序号" width="55"></el-table-column>
        <el-table-column
          v-for="item in tabledatasDiag.colnames"
          :key="item.value"
          :label="item.label"
          :prop="item.value"
          align="center"
        ></el-table-column>
        <el-table-column label="数量">
          <template slot-scope="scope">
            <el-input
              class="assignq-001"
              type="number"
              v-model="tabledatasDiag.tableData[scope.$index].num"
            ></el-input>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        background
        layout="prev, pager, next"
        :total="tabledatasDiag.total"
        :page-size="tabledatasDiag.pagesize"
        :current-page="tabledatasDiag.pageindex"
        @prev-click="prev"
        @next-click="next"
        @current-change="changepage"
      ></el-pagination>
    </el-dialog>
    <!-- 线索分配弹窗结束 -->
  </div>
</template>
<script>
import txt_CustomerName from "@/components/crm/textbox/Public/customerInfos/txt_CustomerName";
import PhoneNumber from "@/components/crm/textbox/Public/customerInfos/PhoneNumber";
import sct_CarBrand from "@/components/crm/Select/Common/sct_CarBrand";
import ClueNumber from "@/components/crm/textbox/Clue/ClueNumber";
import dt_BuildMenuDates from "@/components/crm/Time/dt_BuildMenuDates";
//import Batch from "@/components/crm/Select/Clue/CallCenterClue/Batch";
import BatchNumber from "@/components/crm/textbox/Clue/BatchNumber";
import NumberOfOutCalls from "@/components/crm/textbox/Clue/CallCenterClue/NumberOfOutCalls";
import CurrentHandler from "@/components/crm/textbox/Clue/CurrentHandler";
import dt_RetentionTimes from "@/components/crm/Time/dt_RetentionTimes";
import ContactWay from "@/components/crm/Select/Common/ContactWay";
import ChannelBigClass from "@/components/crm/Select/Common/ChannelBigClass";
import ChannelSmalTypeName from "@/components/crm/textbox/Clue/ChannelSmalTypeName";
import AssignStatus from "@/components/crm/Select/Clue/AssignStatus";
import { requestGraphQL } from "@/api/commonRequest";
import { crmApis } from "@/api/graphQLApiList/crm";
import { type } from "os";
export default {
  name: "crmThisGWACCDistrpage",
  components: {
    txt_CustomerName,
    PhoneNumber,
    sct_CarBrand,
    ClueNumber,
    dt_BuildMenuDates,
    BatchNumber,
    NumberOfOutCalls,
    CurrentHandler,
    dt_RetentionTimes,
    ContactWay,
    ChannelBigClass,
    ChannelSmalTypeName,
    AssignStatus
    //ContactWay
  },
  data() {
    return {
      num: "",
      usersAndNumber: [], // 人员ID、线索数集合
      clueScriptNumber: [],
      multipleSelection: [], //获取选中项
      dialogVisible: false,
      toggleParam: false,
      loadFlag: false,
      rowData: { dlrcode: "" },
      choiceRow: "", //线索总数
      clueAssignchoiceRow: "", //选中人员总数
      tabledatasDiagListCopy: "",
      txn: {
        input: ""
      },
      pn: {
        input: ""
      },
      scb: {
        value: ""
      },
      cn: {
        input: ""
      },
      dbmd: {
        value: ""
      },
      b: {
        value: ""
      },
      nonc: {
        input: ""
      },
      ch: {
        input: ""
      },
      crt: {
        value: ""
      },
      cw: {
        value: ""
      },
      cbc: {
        value: "",
        pcode: ""
      },
      cstn: {
        input: ""
      },
      as: {
        value: ""
      },
      // 本组待办任务线索分配网格
      tabledatas: {
        colnames: [
          { label: "当前处理人", value: "nextDealUserName" },
          { label: "车辆品牌", value: "carBrandName", width: "55px" },
          { label: "批次", value: "batchNo", width: "55px" },
          { label: "线索单号", value: "serverOrder" },
          { label: "客户名称", value: "custName" },
          { label: "电话", value: "contactTel", width: "55px" },
          { label: "备用电话", value: "backupTel" },
          { label: "意向车系", value: "carSeriesCn" },
          { label: "接触方式", value: "cantactWayName" },
          { label: "渠道大类", value: "infoChanMName" },
          { label: "渠道小类名称", value: "infoChanDName" },
          { label: "接触次数", value: "cleanQty" },
          { label: "建单人", value: "creator" },
          { label: "建单日期", value: "createdDate" },
          { label: "分配时间", value: "assignDate" },
          { label: "分配状态", value: "assignStatusName" },
          { label: "外呼次数", value: "outboundQty" },
          { label: "留资时间", value: "remainDataDate" }
        ],
        tableData: [],
        queryObj: {
          apiConfig: crmApis.clueServerQueryFromHeadquarters,
          apiQueryRow: [
            "nextDealUserName",
            "carBrandName",
            "batchNo",
            "serverOrder",
            "custName",
            "contactTel",
            "backupTel",
            "carSeriesCn",
            "cantactWayName",
            "infoChanMName",
            "infoChanDName",
            "cleanQty",
            "creator",
            "createdDate",
            "assignDate",
            "assignStatusName",
            "outboundQty",
            "remainDataDate",
            "dlrCode"
          ],
          params: {
            handleCode: "1",
            statusArray: ["1", "3", "4"],
            custName: "",
            contactTel: "",
            carBrandCode: "",
            serverOrder: "",
            createdDateStart: "",
            createdDateEnd: "",
            batchNo: "",
            outboundQty: "",
            nextDealUserName: "",
            remainDataDateStart: "",
            remainDataDateEnd: "",
            cantactWayCode: "",
            infoChanMCode: "",
            infoChanDCode: "",
            assignStatus: ""
          }
        },
        pagesize: 10,
        pageindex: 1,
        total: 0
      },
      // 线索分配弹出窗网格
      tabledatasDiag: {
        colnames: [{ label: "人员", value: "empName" }],
        tableData: [],
        queryObj: {
          // .后面是服务编码，.前面固定写死
          apiConfig: crmApis.mdsSysPositionQueryEmpList,
          apiQueryRow: ["empName", "userId"],
          params: {
            positionCode: "R_XSZX",
            isEnable: "1"
          }
        },
        pagesize: 10,
        pageindex: 1,
        total: 0
      }
    };
  },
  methods: {
    // 查询所有线索
    query(optype) {
      let that = this;
      that.loadFlag = true;
      // 查询参数
      that.tabledatas.queryObj.params.custName = this.$refs.txt_CustomerName.input;
      that.tabledatas.queryObj.params.contactTel = this.$refs.PhoneNumber.input;
      that.tabledatas.queryObj.params.carBrandCode = this.$refs.sct_CarBrand.value;
      that.tabledatas.queryObj.params.serverOrder = this.$refs.ClueNumber.input;
      that.tabledatas.queryObj.params.batchNo = this.$refs.Batch.input;
      that.tabledatas.queryObj.params.outboundQty = this.$refs.NumberOfOutCalls.input;
      that.tabledatas.queryObj.params.nextDealUserName = this.$refs.CurrentHandler.input;
      that.tabledatas.queryObj.params.cantactWayCode = this.$refs.ContactWay.value;
      that.tabledatas.queryObj.params.infoChanMCode = this.$refs.ChannelBigClass.value;
      that.tabledatas.queryObj.params.infoChanDCode = this.$refs.ChannelSmalTypeName.input;
      that.tabledatas.queryObj.params.assignStatus = this.$refs.AssignStatus.value;

      if (this.$refs.dt_BuildMenuDates.value[0] == undefined) {
        that.tabledatas.queryObj.params.createdDateStart = this.$refs.dt_BuildMenuDates.value[0];
        that.tabledatas.queryObj.params.createdDateEnd = this.$refs.dt_BuildMenuDates.value[1];
      } else {
        that.tabledatas.queryObj.params.createdDateStart =
          this.$refs.dt_BuildMenuDates.value[0] + " " + "00:00:00";
        that.tabledatas.queryObj.params.createdDateEnd =
          this.$refs.dt_BuildMenuDates.value[1] + " " + "23:59:59";
      }
      if (this.$refs.dt_RetentionTimes.value[0] == undefined) {
        that.tabledatas.queryObj.params.remainDataDateStart = this.$refs.dt_RetentionTimes.value[0];
        that.tabledatas.queryObj.params.remainDataDateEnd = this.$refs.dt_RetentionTimes.value[1];
      } else {
        that.tabledatas.queryObj.params.remainDataDateStart =
          this.$refs.dt_RetentionTimes.value[0] + " " + "00:00:00";
        that.tabledatas.queryObj.params.remainDataDateEnd =
          this.$refs.dt_RetentionTimes.value[1] + " " + "23:59:59";
      }
      let queryObj = {
        // api配置
        apiConfig: that.tabledatas.queryObj.apiConfig,
        // 需要调用的API服务配置
        apiServices: [
          {
            //表格中台返回网格的字段
            apiQueryRow: that.tabledatas.queryObj.apiQueryRow
          }
        ],
        //条件/实体参数（变量），根据typeParam中的定义配置
        variables: {
          pageSize: optype == "2" ? 99999 : that.tabledatas.pagesize,
          pageIndex: optype!=undefined?1:(optype == "2" ? 1 : that.tabledatas.pageindex),
          //当前中台使用的名称有dataInfo、info，具体查看API文档
          dataInfo: that.tabledatas.queryObj.params
        }
      };
      //转换了中台请求格式数据
      var paramD = that.$getParams(queryObj);

      if (optype == "2") {
        this.buildExportParam(queryObj, paramD);
      }
      // 调用中台API方法（可复用）
      requestGraphQL(paramD).then(response => {
        if (optype == "2") {
          this.$utils.downloadFile(response, paramD.excelName);
          that.loadFlag = false;
        } else {
          if (
            response.data[queryObj.apiConfig.ServiceCode].result == "1"
            //&&response.data[queryObj.apiConfig.ServiceCode].rows != ""
          ) {
            if(optype==undefined&&(response.data[queryObj.apiConfig.ServiceCode].rows==null||
            response.data[queryObj.apiConfig.ServiceCode].rows.length==0))
            {
              that.query(1);
            }else{
              that.loadFlag = false;
            that.tabledatas.tableData =
              response.data[queryObj.apiConfig.ServiceCode].rows;
            that.tabledatas.pageindex =
              response.data[queryObj.apiConfig.ServiceCode].pageindex;
            that.tabledatas.total =
              response.data[queryObj.apiConfig.ServiceCode].records;
            }
          } else {
            that.loadFlag = false;
          }
        }
      });
    },
    // 线索分配弹窗、网格初始化
    clueAssign: function() {
      let that = this;
      if (that.choiceRow < 1) {
        this.$message({
          message: "请至少选择1条线索",
          type: "error",
          duration: 1000
        });
        return;
      }
      that.dialogVisible = true;
      let queryObj = {
        // api配置
        apiConfig: that.tabledatasDiag.queryObj.apiConfig,
        // 需要调用的API服务配置
        apiServices: [
          {
            //表格中台返回网格的字段
            apiQueryRow: that.tabledatasDiag.queryObj.apiQueryRow
          }
        ],
        //条件/实体参数（变量），根据typeParam中的定义配置
        variables: {
          pageSize: that.tabledatasDiag.pagesize,
          pageIndex: that.tabledatasDiag.pageindex,

          //当前中台使用的名称有dataInfo、info，具体查看API文档
          dataInfo: {
            positionCode: "R_XSZX",
            isEnable: "1"
          }
        }
      };
      //转换了中台请求格式数据
      var paramD = that.$getParams(queryObj);
      // 调用中台API方法（可复用）
      requestGraphQL(paramD).then(response => {
        if (response.data[queryObj.apiConfig.ServiceCode].result == "1") {
          that.tabledatasDiag.tableData =
            response.data[queryObj.apiConfig.ServiceCode].rows;
          for (var i = 0; i < that.tabledatasDiag.tableData.length; i++) {
            that.tabledatasDiag.tableData[i].num = 0;
          }
          that.tabledatasDiag.pageindex =
            response.data[queryObj.apiConfig.ServiceCode].pageindex;
          that.tabledatasDiag.total =
            response.data[queryObj.apiConfig.ServiceCode].records;
        } else {
          // 错误提示
          this.$message({
            message: response.data[queryObj.apiConfig.ServiceCode].msg,
            type: "error",
            duration: 1000
          });
        }
      });
    },
    // 平均分配
    averAssign: function() {
      let that = this;
      let selectData = that.$refs.multipleTableRY.selection;
      if (selectData.length == 0) {
        this.$message({
          message: "请至少选择一个人员",
          type: "warning",
          duration: 2000
        });
        return;
      }
      that.usersAndNumber = [];
      // 清空所有选中人的数量
      var pageData = that.tabledatasDiag.tableData;
      Object.keys(pageData).forEach(function(key) {
        pageData[key].num = 0;
      });
      var tabledatasDiagListCopy1 = Object.assign(
        {},
        that.tabledatasDiag.tableData
      );
      that.tabledatasDiag.tableData = [];
      that.tabledatasDiag.tableData = tabledatasDiagListCopy1;
      let clueAmount = this.choiceRow; //线索任务选中总数
      // let  = this.clueAssignchoiceRow; //  选中人总数
      // // 1、线索数>=人数，2、线索数<人数
      // if(){

      // }

      let mostall = this.choiceRow; //线索任务选中总数
      let oneall = this.clueAssignchoiceRow; //  选中人总数
      if (mostall % oneall == 0) {
        // 2.刚好平均分配
        that.usersAndNumber = []; //最新选中   置空
        var averNum = mostall / oneall; //平均分配数
        for (var i = 0; i < oneall; i++) {
          // 假如初始化为0
          that.multipleSelection[i].num = 0;
          that.multipleSelection[i].num = averNum;
          // that.tabledatasDiag.tableData[i].num =averNum ;
          let str =
            that.multipleSelection[i].userId +
            "&" +
            that.multipleSelection[i].num;
          that.usersAndNumber.push(str);
        }
      } else {
        //  倍数小于1,线索数小于人数 ， 3 条线索  4个人
        var BS = mostall / oneall;
        if (parseInt(BS) == 0) {
          var timer = 0; //将线索一条一条分出去
          for (var i = 0; i < this.clueAssignchoiceRow; i++) {
            //每一次循环结束，表示有一个人拿到了线索，循环结束表示线索被分配完毕
            if (timer < mostall) {
              if (typeof that.multipleSelection[i].num == "number") {
                that.multipleSelection[i].num =
                  that.multipleSelection[i].num + 1;
                timer = timer + 1;
              } else {
                that.multipleSelection[i].num = 0;
                that.multipleSelection[i].num =
                  that.multipleSelection[i].num + 1;
                timer = timer + 1;
              }
            } else {
              //  分配完毕
              that.tabledatasDiagListCopy = Object.assign(
                {},
                that.tabledatasDiag.tableData
              );
              that.tabledatasDiag.tableData = [];
              that.tabledatasDiag.tableData = that.tabledatasDiagListCopy;
              return;
            }
          }
        } else {
          // 倍数大于1,线索数大于人数 ， 8条线索  3个人
          var timer = 0;
          for (var j = 0; j < parseInt(BS); j++) {
            for (var i = 0; i < this.clueAssignchoiceRow; i++) {
              if (timer < mostall) {
                if (typeof that.multipleSelection[i].num == "number") {
                  that.multipleSelection[i].num =
                    that.multipleSelection[i].num + 1;
                  timer = timer + 1;
                } else {
                  that.multipleSelection[i].num = 0;
                  that.multipleSelection[i].num =
                    that.multipleSelection[i].num + 1;
                  timer = timer + 1;
                }
              } else {
                //  分配完毕
                that.tabledatasDiagListCopy = Object.assign(
                  {},
                  that.tabledatasDiag.tableData
                );
                that.tabledatasDiag.tableData = [];
                that.tabledatasDiag.tableData = that.tabledatasDiagListCopy;
                return;
              }
            }
          }
          var timer1 = 0;
          for (var i = 0; i < this.clueAssignchoiceRow; i++) {
            if (timer1 < mostall % oneall) {
              if (typeof that.multipleSelection[i].num == "number") {
                that.multipleSelection[i].num =
                  that.multipleSelection[i].num + 1;
                timer1 = timer1 + 1;
              } else {
                that.multipleSelection[i].num = 0;
                that.multipleSelection[i].num =
                  that.multipleSelection[i].num + 1;
                timer1 = timer1 + 1;
              }
            } else {
              that.tabledatasDiagListCopy = Object.assign(
                {},
                that.tabledatasDiag.tableData
              );
              that.tabledatasDiag.tableData = [];
              that.tabledatasDiag.tableData = that.tabledatasDiagListCopy;
              //  分配完毕
              return;
            }
          }
        }
      }
    },
    // 确认分配
    confirmAssign: function() {
      let that = this;
      let selectData = that.$refs.multipleTableRY.selection;
      if (selectData.length == 0) {
        this.$message({
          message: "请至少选择一个人员",
          type: "warning",
          duration: 2000
        });
        return;
      }
      console.info(this.multipleSelection); //当前选中人数据数组
      that.usersAndNumber = [];
      var addNum = 0; //计数
      for (var i = 0; i < this.multipleSelection.length; i++) {
        let str =
          this.multipleSelection[i].userId +
          "&" +
          this.multipleSelection[i].num;
        that.usersAndNumber.push(str);
        addNum = addNum + parseInt(this.multipleSelection[i].num);
      }
      // 1.输入数量小于线索总数
      if (addNum > parseInt(that.clueScriptNumber)) {
        this.$message({
          message: "填写线索数大于选中线索数",
          type: "error",
          duration: 1000
        });
        return;
      }

      let queryObj = {
        // api配置
        type: "mutation",
        apiConfig: crmApis.clueServerMutationAssign,
        // 需要调用的API服务配置
        apiServices: [
          {
            //表格中台返回网格的字段
            apiQueryRow: []
          }
        ],
        //条件/实体参数（变量），根据typeParam中的定义配置
        variables: {
          //当前中台使用的名称有dataInfo、info，具体查看API文档
          dataInfo: {
            assignServerOrders: this.clueScriptNumber,
            assignUserIdAndNumber: this.usersAndNumber,
            handleCode: "1"
          }
        }
      };
      //转换了中台请求格式数据
      var paramD = that.$getParams(queryObj);
      // 调用中台API方法（可复用）
      requestGraphQL(paramD).then(response => {
        if (
          response.data[queryObj.apiConfig.ServiceCode].result === "1" &&
          response.data[queryObj.apiConfig.ServiceCode].rows != ""
        ) {
          this.$message({
            message: response.data[queryObj.apiConfig.ServiceCode].msg,
            type: "success",
            duration: 1000
          });
          // 请求成功，隐藏
          this.dialogVisible = false;
          this.query();
        } else {
          this.$message({
            message: response.data[queryObj.apiConfig.ServiceCode].msg,
            type: "error",
            duration: 1000
          });
        }
      });
    },
    // 导出
    buildExportParam(queryObj, paramsObj) {
      var excelCols = {};
      for (var i = 0; i < this.tabledatas.colnames.length; i++) {
        excelCols[this.tabledatas.colnames[i].value] = this.tabledatas.colnames[
          i
        ].label;
      }
      // 数据类型
      paramsObj.dataType = "excel";
      // excel文件名称
      paramsObj.excelName = "本组待办任务分配_线索培育导出";
      // 根据请求API描述excel数据对象
      paramsObj.excels = [
        {
          // excel sheet名称
          title: "Sheet1",
          // 对应API服务编码
          actionName: queryObj.apiConfig.ServiceCode,
          // excel列
          columns: excelCols
        }
      ];
    },

    //主网格选中线索
    handleSelectionChange(val) {
      let that = this;

      that.clueScriptNumber = []; //选中线索数组

      that.choiceRow = val.length;

      for (let i = 0; i < val.length; i++) {
        let str = val[i].serverOrder;
        //
        that.clueScriptNumber.push(str);
      }
    },
    //弹窗网格选中人员id和分配数量（集合userAndNumber）
    handleSelectionChangeAssign(val) {
      let that = this;
      that.multipleSelection = val; // 选中人员数组

      that.clueAssignchoiceRow = val.length;
      that.usersAndNumber = [];
      for (let i = 0; i < val.length; i++) {
        let str = val[i].userId + "&" + val[i].num;
        that.usersAndNumber.push(str);
      }
    },
    // 联系方式
    ContactWaychange(val) {
      let that = this;
      that.cbc.pcode = val;
      if (that.$refs.ChannelBigClass == undefined) {
      } else {
        that.$refs.ChannelBigClass.getData();
      }
    },
    //主网格选中
    mainSelectH: function(row) {
      let that = this;
      that.rowData.dlrcode = row.dlrCode;
    },
    // 更多条件展开折叠
    changeToggleParam() {
      this.toggleParam = !this.toggleParam;
    },
    // 重置
    reset: function() {
      this.$refs.txt_CustomerName.reset();
      this.$refs.PhoneNumber.reset();
      this.$refs.sct_CarBrand.reset();
      this.$refs.ClueNumber.reset();

      this.$refs.dt_BuildMenuDates.reset();
      this.$refs.Batch.reset();
      this.$refs.NumberOfOutCalls.reset();
      this.$refs.CurrentHandler.reset();

      this.$refs.dt_RetentionTimes.reset();
      this.$refs.ContactWay.reset();
      this.$refs.ChannelBigClass.reset();
      this.$refs.ChannelSmalTypeName.reset();

      this.$refs.AssignStatus.reset();
    },
    mainPrev() {
      let that = this;
      if (this.tabledatas.pageindex > 1) {
        that.tabledatas.pageindex = this.tabledatas.pageindex - 1;
        this.query();
      }
    },
    mainNext() {
      let that = this;
      if (true) {
        that.tabledatas.pageindex = this.tabledatas.pageindex + 1;
        this.query();
      }
    },
    mainChangepage(index) {
      let that = this;
      that.tabledatas.pageindex = index;
      this.query();
    },
    //分配页面网格 分页的三个方法
    prev() {
      let that = this;
      if (this.tabledatasDiag.pageindex > 1) {
        that.tabledatasDiag.pageindex = this.tabledatasDiag.pageindex - 1;
        this.clueAssign();
      }
    },
    next() {
      let that = this;
      that.tabledatasDiag.pageindex = this.tabledatasDiag.pageindex + 1;
      this.clueAssign();
    },
    changepage(index) {
      let that = this;
      that.tabledatasDiag.pageindex = index;
      this.clueAssign();
    }
  }
};
</script>

