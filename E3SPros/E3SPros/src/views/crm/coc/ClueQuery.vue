<!--
* 描述: 线索单查询
* 创建人: chq2
* 创建时间: 2019-07-28
* 记录：
*  2019-07-28 新建 chq2
-->
<template>
  <div class="app-container app-container-table">
    <div class="filter-container filter-button">
      <el-button type="primary" @click="query(1)">查询</el-button>
      <el-button @click="showdialog">导入</el-button>
      <el-button @click="query(2)">导出</el-button>
      <el-button @click="reset">重置</el-button>
    </div>
    <div class="filter-container filter-title-crm">查询条件</div>
    <div class="filter-container filter-params-crm">
      <el-form label-position="right">
        <el-row>
          <el-col :span="22">
            <el-col :span="6">
              <txt_CustomerName :txt_CustomerName="CustName" ref="txt_CustomerName"></txt_CustomerName>
            </el-col>
            <el-col :span="6">
              <PhoneNumber :PhoneNumber="PNumber" ref="PhoneNumber"></PhoneNumber>
            </el-col>
            <el-col :span="6">
              <IntentionalCar :IntentionalCar="ICar" ref="IntentionalCar" @CatData="getarr"></IntentionalCar>
            </el-col>
            <el-col :span="6">
              <IntentionLevel :IntentionLevel="ILevel" ref="IntentionLevel"></IntentionLevel>
            </el-col>
          </el-col>
          <el-col :span="2">
            <el-button icon="el-icon-plus" @click="changeToggleParam" class="moreParam">更多</el-button>
          </el-col>
          <el-col :span="22" v-show="toggleParam" class="toggleParam">
            <el-row>
              <el-col :span="6">
                <dt_BuildMenuDates :dt_BuildMenuDates="CDate" ref="dt_BuildMenuDates"></dt_BuildMenuDates>
              </el-col>
              <!-- <el-col :span="6">
                <ReceiptStatus_clue :ReceiptStatus="RStatus" ref="ReceiptStatus" />
              </el-col> -->
              <el-col :span="6">
                <CurrentHandler ref="CurrentHandler" :CurrentHandler="cxCrru"/>
              </el-col>
              <el-col :span="6">
                <ClueNumber :ClueNumber="CNumber" ref="ClueNumber"></ClueNumber>
              </el-col>
              <el-col :span="6">
                <ContactWay :ContactWay="CoWay" ref="ContactWay" @changeCode="change"></ContactWay>
              </el-col>
              <el-col :span="6">
                <ChannelBigClass :ChannelBigClass="ChBigClass" ref="ChannelBigClass"></ChannelBigClass>
              </el-col>

              <el-col :span="6">
                <IntentionalBrand :IntentionalBrand="sCarBrand" ref="IntentionalBrand"></IntentionalBrand>
              </el-col>
              <el-col :span="6">
                <AssignStatus :AssignStatus="AStatus" ref="AssignStatus"></AssignStatus>
              </el-col>
              <el-col :span="6">
                <JobStatus :JobStatus="JStatus" ref="JobStatus"></JobStatus>
              </el-col>
              <el-col :span="6">
                <BuildListPeople :BuildListPeople="cxPerson" ref="BuildListPeople"></BuildListPeople>
              </el-col>
              <el-col :span="6">
                <OrderDateDouble :OrderDateDouble="ODouble" ref="OrderDateDouble"></OrderDateDouble>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
      </el-form>
    </div>

    <!--导入弹窗开始-->
    <el-dialog
      :visible.sync="dialogVisible2"
      style="height:520px;position:fixed;top:0;right:0;left:0;bottom:0;margin:auto;"
      width="700px"
      class="dialog"
      title="导入"
    >
      <el-form label-position="right">
        <el-row>
          <el-col :span="24">
            <el-upload
              class="upload-demo"
              ref="upload"
              style="text-align:left"
              action="https://jsonplaceholder.typicode.com/posts/"
              :on-remove="handleRemove"
              :file-list="fileList"
              :auto-upload="false"
            >
              <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
              <el-button style="margin-left: 10px;" size="small" type="success" @click="uploadgz">导入</el-button>
              <el-button style="margin-left: 10px;" size="small" @click="1">模板下载</el-button>
              <div slot="tip" class="el-upload__tip">只能导入xls/xlsx文件</div>
            </el-upload>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-table
              :data="tabledatas2.tableData"
              highlight-current-row
              style="width: 100%;height:330px"
              v-loading.body="false"
              element-loading-text="Loading"
              border
              fit
            >
              <el-table-column type="index" label="序号" width="55"></el-table-column>
              <el-table-column
                v-for="item in tabledatas2.colnames"
                :key="item.value"
                :label="item.label"
                :prop="item.value"
                align="center"
              ></el-table-column>
            </el-table>
            <el-pagination
              background
              layout="prev, pager, next"
              :total="9"
              :page-size="tabledatas2.pagesize"
              :current-page="tabledatas2.pageindex"
            ></el-pagination>
          </el-col>
        </el-row>
      </el-form>
    </el-dialog>
    <!--导入弹窗结束-->

    <div class="filter-container filter-title-crm">查询结果</div>
    <el-table
      class="crm-table"
      :data="tabledatas.tableData"
      highlight-current-row
      style="width: 100%;height:350px"
      v-loading.body="false"
      element-loading-text="Loading"
      border
      fit
    >
        <el-table-column type="index" label="序号" width="55"></el-table-column>
        <el-table-column label="操作" align="center" width="95">
          <template slot-scope="scope">
            <el-button
              size="mini"
              type="text"
              align="center"
              @click="handle(scope.$index, scope.row)"
            >详情</el-button>
          </template>
        </el-table-column>
        <el-table-column
          v-for="item in tabledatas.colnames"
          :key="item.value"
          :label="item.label"
          :prop="item.value"
          align="center"
        ></el-table-column>
    </el-table>
    <el-pagination
      background
      layout="prev, pager, next"
      :total="tabledatas.total"
      :page-size="tabledatas.pagesize"
      :current-page="tabledatas.pageindex"
      @prev-click="prev"
      @next-click="next"
      @current-change="changepage"
    ></el-pagination>
  </div>
</template>
<script>
import { crmApis } from "@/api/graphQLApiList/crm";
import { requestGraphQL } from "@/api/commonRequest";

import txt_CustomerName from "@/components/crm/textbox/Public/customerInfos/txt_CustomerName";
import PhoneNumber from "@/components/crm/textbox/Public/customerInfos/PhoneNumber";
import IntentionalCar from "@/components/crm/EjectWindows/IntentionalCar";
import IntentionLevel from "@/components/crm/Select/Common/Customer/IntentionLevel";
import CloseCaseDate from "@/components/crm/Time/CloseCaseDate";
import ReceiptStatus from "@/components/crm/Select/Clue/ReceiptStatus";
import CurrentHandler from "@//components/crm/textbox/Clue/CurrentHandler";
import ClueNumber from "@/components/crm/textbox/Clue/ClueNumber";
import ChannelBigClass from "@/components/crm/Select/Common/ChannelBigClass";
import ContactWay from "@/components/crm/Select/Common/ContactWay";
import IntentionalBrand from "@/components/crm/Select/Common/Customer/IntentionalBrand";
import AssignStatus from "@/components/crm/Select/Clue/AssignStatus";
import JobStatus from "@/components/crm/Select/Clue/JobStatus";
import BuildListPeople from "@/components/crm/textbox/Public/BuildListPeople";
import OrderDateDouble from "@/components/crm/Time/OrderDateDouble";
import dt_BuildMenuDates from "@/components/crm/Time/dt_BuildMenuDates";

import { freemem } from "os";
export default {
  name: "ClueQuery",
  components: {
    txt_CustomerName,
    PhoneNumber,
    IntentionalCar,
    IntentionLevel,
    CloseCaseDate,
    ReceiptStatus,
    CurrentHandler,
    ClueNumber,
    ChannelBigClass,
    ContactWay,
    IntentionalBrand,
    AssignStatus,
    JobStatus,
    BuildListPeople,
    OrderDateDouble,
    dt_BuildMenuDates
  },
  data() {
    return {
      inteSeriesId:"",
      subzffz: {
        input: ""
      },
      cxCrru:{
        input:""
      },
      cxPerson:{
        input:""
      },
      input: "",
      fileList: [],
      toggleParam: false,
      width: "900px",
      heigh: "580px",
      dialogVisible: false,
      dialogVisible2: false,
      form: {
        task: ""
      },
      formLabelWidth: "100px",
      tabledatas: {
        colnames: [
          { label: "客户名称", value: "custName" },
          { label: "电话", value: "contactTel" },
          { label: "意向品牌", value: "carBrandName" },
          { label: "意向车系", value: "carSeriesCn" },
          { label: "接触方式", value: "cantactWayName" },
          { label: "渠道大类", value: "infoChanMName" },
          { label: "渠道小类", value: "infoChanDName" },
          { label: "线索单号", value: "serverOrder" },
          { label: "分配状态", value: "assignStatusName" },
          { label: "建单人", value: "createdName" },
          { label: "下次回访时间", value: "nextCallbackDate" },
          { label: "转意向时间", value: "remainDataDate" },
          { label: "单据状态", value: "statusName" },
          { label: "作业类型", value: "crruNodeName" },
          { label: "当前处理人", value: "csr" },
          { label: "销售顾问", value: "caEmpName" }
        ],
        tableData: [],
        queryObj: {
          // .后面是服务编码，.前面固定写死
          apiConfig: crmApis.clueServerQueryFromDlr,
          apiQueryRow: [
            "custName",
            "contactTel",
            "carBrandName",
            "carSeriesCn",
            "cantactWayName",
            "infoChanMName",
            "infoChanDName",
            "serverOrder",
            "assignStatusName",
            "createdName",
            "nextCallbackDate",
            "remainDataDate",
            "statusName",
            "crruNodeName",
            "caEmpName",
            "csr"
          ],
          params: {
            custName: "",
            contactTel: "",
            inteSeriesId: "",
            clueLevelCode: "",
            createdDateStart: "",
            createdDateEnd: "",
            status: "",
            csr: "",
            serverOrder: "",
            cantactWayCode: "",
            infoChanMCode: "",
            carBrandCode: "",
            assignStatus: "",
            crruNode:"",
            orderDateStart: "",
            orderDateEnd: "",
            createdName:"",
            dlrCode:"",
            handleCode: "1",
            statusArray: ["10","20","21","30","31","40","50"]
          }
        },
        pagesize: 10,
        pageindex: 1,
        total: 0
      },
      tabledatas2: {
        colnames: [
          { label: "客户名称", value: "" },
          { label: "电话", value: "" },
          { label: "申请人", value: "" },
          { label: "申请时间", value: "" },
          { label: "意向级别", value: "" },
          { label: "意向车系", value: "" },
          { label: "单据状态", value: "" },
          { label: "接触方式", value: "" },
          { label: "渠道大类", value: "" },
          { label: "渠道小类", value: "" },
          { label: "线索单号", value: "" },
          { label: "建单日期", value: "" }
        ],
        tableData: [
          {
            date: "2016-05-01",
            name: "王小虎",
            SCORE: "5"
          }
        ],
        queryObj: {
          // .后面是服务编码，.前面固定写死
          apiConfig: crmApis.CustomerSatisfactionService001,
          apiQueryRow: [
            "txt_CustomerName",
            "PhoneNumber",
            "IntentionalCar",
            "IntentionLevel",
            "ApplicationTime",
            "ContactWay",
            "ChannelBigClass",
            "ChannelSmalTypeName",
            "ClueNumber",
            "Applicant"
          ],
          params: {
            txt_CustomerName: "",
            PhoneNumber: "",
            IntentionalCar: "",
            IntentionLevel: "",
            ApplicationTime: "",
            ContactWay: "",
            ChannelBigClass: "",
            ChannelSmalTypeName: "",
            ClueNumber: "",
            Applicant: ""
          }
        },
        pagesize: 10,
        pageindex: 1
      },
      //初始化
      CustName: {
        input: ""
      },
      PNumber: {
        input: ""
      },
      ICar: {
        value: ""
      },
      ILevel: {
        value: ""
      },
      CDate: {
        value: ""
      },
      RStatus: {
        value: ""
      },
      CHandler: {
        input: ""
      },
      CNumber: {
        input: ""
      },
      ChBigClass: {
        input: "",
        pcode:""
      },
      CoWay: {
        value: ""
      },
      sCarBrand: {
        value: ""
      },
      AStatus: {
        value: ""
      },
      JStatus: {
        value: ""
      },
      BPeople: {
        input: ""
      },
      ODouble: {
        value: ""
      },
    };
  },
  computed: {
    visitedViews() {
      return this.$store.state.tagsView.visitedViews;
    }
  },
  methods: {
    change(val) {
      let that = this;
      that.ChBigClass.pcode=val
      if(that.$refs.ChannelBigClass!=undefined){
        that.$refs.ChannelBigClass.getData();
      }
    },
    getarr(val){
      let redata={};
      redata=val;
      this.inteSeriesId=redata[0].carSeriesId
    },
    changeToggleParam() {
      this.toggleParam = !this.toggleParam;
    },
    showdialog: function() {
      let that = this;
      console.log("进来了");
      that.dialogVisible2 = true;
    },
    query(optype) {
      let that = this;
      debugger
      that.tabledatas.queryObj.params.custName = that.$refs.txt_CustomerName.input;
      that.tabledatas.queryObj.params.contactTel = that.$refs.PhoneNumber.input;
      that.tabledatas.queryObj.params.inteSeriesId = that.inteSeriesId;
      that.tabledatas.queryObj.params.clueLevelCode = that.$refs.IntentionLevel.value;
      if(that.$refs.dt_BuildMenuDates.value!="")
      {
        that.$set(that.tabledatas.queryObj.params, 'createdDateStart', that.$refs.dt_BuildMenuDates.value[0]+" 00:00:00");
        that.$set(that.tabledatas.queryObj.params, 'createdDateEnd', that.$refs.dt_BuildMenuDates.value[1]+" 23:59:59");
      }
      else{
        that.$set(that.tabledatas.queryObj.params, 'createdDateStart', "");
        that.$set(that.tabledatas.queryObj.params, 'createdDateEnd', "");
      }
      //that.tabledatas.queryObj.params.status = that.$refs.ReceiptStatus.value;
      that.tabledatas.queryObj.params.csr = that.$refs.CurrentHandler.input;
      that.tabledatas.queryObj.params.serverOrder = that.$refs.ClueNumber.input;
      that.tabledatas.queryObj.params.cantactWayCode = that.$refs.ContactWay.value;
      that.tabledatas.queryObj.params.infoChanMCode = that.$refs.ChannelBigClass.value;
      that.tabledatas.queryObj.params.carBrandCode = that.$refs.IntentionalBrand.value;
      that.tabledatas.queryObj.params.assignStatus = that.$refs.AssignStatus.value;
      that.tabledatas.queryObj.params.crruNode = that.$refs.JobStatus.value;
      if(that.$refs.OrderDateDouble.value!="")
      {
        that.$set(that.tabledatas.queryObj.params, 'orderDateStart', that.$refs.OrderDateDouble.value[0]+" 00:00:00");
        that.$set(that.tabledatas.queryObj.params, 'orderDateEnd', that.$refs.OrderDateDouble.value[1]+" 23:59:59");
      }
      else{
        that.$set(that.tabledatas.queryObj.params, 'orderDateStart', "");
        that.$set(that.tabledatas.queryObj.params, 'orderDateEnd', "");
      }
      that.tabledatas.queryObj.params.createdName = that.$refs.BuildListPeople.input;
      that.tabledatas.queryObj.params.dlrCode=that.$store.getters.orgInfo.DLR_CODE;
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
          pageSize: optype!=undefined?10:(optype == "2" ? 99999 : that.tabledatas.pagesize),
          pageIndex: optype!=undefined?1:that.tabledatas.pageindex,
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
        } else {
          if (response.data[queryObj.apiConfig.ServiceCode].result == "1") {
            if(optype==undefined&&(response.data[queryObj.apiConfig.ServiceCode].rows==null||
            response.data[queryObj.apiConfig.ServiceCode].rows.length==0))
            {
              that.query(1);
            }
            else{
                that.tabledatas.tableData =
                response.data[queryObj.apiConfig.ServiceCode].rows;
              that.tabledatas.pageindex =
                response.data[queryObj.apiConfig.ServiceCode].pageindex;
              that.tabledatas.total =
                response.data[queryObj.apiConfig.ServiceCode].records;
            }
          }
        }
      });
    },
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
      paramsObj.excelName = "线索单导出";
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
    handle: function(index, rowData) {

      let that = this;
      // that.$router.push({name:'ClueDetail',params:rowData})
      this.$crmcf.jumpDetailTag(that,'ClueDetail','/ClueDetail',rowData)
    },
    prev(index) {
      let that = this;
      that.tabledatas.pageindex = index;
      this.query();
    },
    next(index) {
      let that = this;
      that.tabledatas.pageindex = index;
      this.query();
    },
    changepage(index) {
      let that = this;
      that.tabledatas.pageindex = index;
      this.query();
    },
    handleSelect: function() {
      let that = this;
      //that.input = this.$refs.table.rowData.name;
      that.dialogVisible = false;
    },
    uploadgz() {},
    handleRemove() {},
    reset: function() {
      this.$refs.txt_CustomerName.reset();
      this.$refs.PhoneNumber.reset();
      this.$refs.IntentionalCar.resetgz();
      this.$refs.IntentionLevel.reset();

      this.$refs.dt_BuildMenuDates.reset();
      //this.$refs.ReceiptStatus.reset();
      this.$refs.CurrentHandler.reset();
      this.$refs.ClueNumber.reset();

      this.$refs.ContactWay.reset();
      this.$refs.ChannelBigClass.reset();
      this.$refs.IntentionalBrand.reset();
      this.$refs.AssignStatus.reset();

      this.$refs.JobStatus.reset();
      this.$refs.BuildListPeople.reset();
      this.$refs.OrderDateDouble.reset();
      this.inteSeriesId="";
    }
  }
};
</script>

