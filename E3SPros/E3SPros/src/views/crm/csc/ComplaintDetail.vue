
<template>
  <div class="app-container app-container-table filter-params-crm-scroll" >
    <div class="filter-container filter-title-crm">客户车辆信息</div>
    <div class="filter-container filter-params-crm filter-params-sub">
      <el-form label-position="right" disabled>
        <el-row>
          <el-col :span="6">
            <txt_CustomerName :txt_CustomerName="form.custName" ref="custName"></txt_CustomerName>
          </el-col>
          <el-col :span="6">
            <Sex :Sex="form.gender" ref="gender"></Sex>
          </el-col>
          <el-col :span="6">
            <PhoneNumber :PhoneNumber="form.contactTel" ref="contactTel"></PhoneNumber>
          </el-col>
          <el-col :span="6">
            <BackupPhone :BackupPhone="form.backupTel" ref="backupTel"></BackupPhone>
          </el-col>
          </el-row>
          <el-row>
          <el-col :span="6">
            <UseCarName :UseCarName="form.useCustName" ref="useCustName"></UseCarName>
          </el-col>
          <el-col :span="6">
            <Sex :Sex="form.useGenderCode" ref="useGenderCode"></Sex>
          </el-col>
          <el-col :span="6">
            <UseCarPhone :UseCarPhone="form.usePhone" ref="usePhone"></UseCarPhone>
          </el-col>
          <el-col :span="6">
            <BackupPhone :BackupPhone="form.useBackupTel" ref="useBackupTel"></BackupPhone>
          </el-col>
          </el-row>
          <el-row>
          <el-col :span="6">
            <CarSeries :CarSeries="form.vCarseriesDesc" ref="vCarseriesDesc"></CarSeries>
          </el-col>
          <el-col :span="6">
            <CarBrandNumber :CarBrandNumber="form.carLicense" ref="carLicense"></CarBrandNumber>
          </el-col>
          <el-col :span="6">
            <VINCode :VINCode="form.vin" ref="vin"></VINCode>
          </el-col>
          <el-col :span="6">
            <EngineNumber :EngineNumber="form.engineNo" ref="engineNo"></EngineNumber>
          </el-col>
          </el-row>
          <el-row>
          <el-col :span="6">
            <CarBrand :CarBrand="form.carBrandCn" ref="carBrandCn"></CarBrand>
          </el-col>
          <el-col :span="6">
            <CarModel :CarModel="form.vCartypeDesc" ref="vCartypeDesc"></CarModel>
          </el-col>
          <!-- <el-col :span="6">
            <GearBoxName :GearBoxName="form.Gearname" ref="Gearname"></GearBoxName>
          </el-col>
          <el-col :span="6">
            <GearBoxNumber :GearBoxNumber="form.Gearnum" ref="Gearnum"></GearBoxNumber>
          </el-col>
          <el-col :span="6">
            <LeakMount :LeakMount="form.Leakm" ref="Leakm"></LeakMount>
          </el-col>-->
          <el-col :span="6">
            <NumberAttributtion :NumberAttributtion="form.Numattr" ref="Numattr"></NumberAttributtion>
          </el-col>
        </el-row>
      </el-form>
    </div>
    <div class="filter-container filter-title-crm">单据信息</div>
    <div class="filter-container filter-params-crm filter-params-sub">
      <el-form label-position="right" disabled>
        <el-row>
          <el-col :span="6">
            <ServiceMenuNumber :ServiceMenuNumber="form.serverOrder" ref="serverOrder" />
          </el-col>
          <el-col :span="6">
            <ComplaintDate :ComplaintDate="form.createdDate" ref="createdDate" />
          </el-col>
          <el-col :span="6">
            <sct_ComplaintRoute :sct_ComplaintRoute="form.serverSourceCode" ref="serverSourceCode" />
          </el-col>
          <el-col :span="6">
            <ComplaintTimes :ComplaintTimes="form.addQty" ref="addQty" />
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="6">
            <SourceNumber :SourceNumber="form.linkBillCode" ref="linkBillCode" />
          </el-col>
          <el-col :span="6">
            <ErrorDate :ErrorDate="form.faultDate" ref="faultDate" />
          </el-col>
          <el-col :span="6">
            <ErrorDistance :ErrorDistance="form.faultMileage" ref="faultMileage" />
          </el-col>
          <el-col :span="6">
            <RunDistance :RunDistance="form.mileage" ref="mileage" />
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="6">
            <ServiceType :swd_complaintCategory="form.serverFullClassName" ref="serverFullClassName"/>
          </el-col>
          <el-col :span="6">
            <RelatedBenchmarkCar :RelatedBenchmarkCar="form.baseSeriesName" ref="baseSeriesName" />
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="6">
            <ResponsibleAgent :ResponsibleAgent="form.dutyDlrName" ref="dutyDlrName" />
          </el-col>
          <el-col :span="6">
            <ResponsibleDepartment :ResponsibleDepartment="form.nextDealOrgName" ref="nextDealOrgName"/>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="6">
            <OffsiteNetwork :swd_Responsible="form.nextDealEmpName" ref="nextDealEmpName" />
          </el-col>
          <el-col :span="6">
            <DutyPeoplePhone :DutyPeoplePhone="form.nextDealPhone" ref="nextDealPhone" />
          </el-col>
          <el-col :span="6">
            <ComplaintLevel :ComplaintLevel="form.serverLevel" ref="serverLevel" />
          </el-col>
          <el-col :span="6">
            <WhetherUrgent :WhetherUrgent="form.serverUrgency" ref="serverUrgency" />
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="6">
            <JobDescription :JobDescription="form.distRemark" ref="distRemark" />
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="6">
            <Remarks :Remarks="form.remark" ref="remark" />
          </el-col>
        </el-row>
      </el-form>
      <el-tabs v-model="activeName" class="tabs" type="card" @tab-click="handleClick">
        <el-tab-pane label="追加信息" name="first">
          <Table :tabledatas="tabledatasZJ" ref="tableZJ" />
        </el-tab-pane>
        <el-tab-pane label="延期申请信息" name="second">
          <Table :tabledatas="tabledatasJL" ref="tableJL" />
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script>
import { crmApis } from "@/api/graphQLApiList/crm";
import { requestGraphQL } from "@/api/commonRequest";
//客户车辆信息
import UseCarPhone from "@/components/crm/textbox/Public/customerInfos/UseCarPhone";
import txt_CustomerName from "@/components/crm/textbox/Public/customerInfos/txt_CustomerName";
import Sex from "@/components/crm/Select/Common/Customer/Sex";
import PhoneNumber from "@/components/crm/textbox/Public/customerInfos/PhoneNumber";
import BackupPhone from "@/components/crm/textbox/Public/customerInfos/BackupPhone";
import CarSeries from "@/components/crm/textbox/Public/carInfo/CarSeries";
import CarBrandNumber from "@/components/crm/textbox/Public/carInfo/CarBrandNumber";
import VINCode from "@/components/crm/textbox/Public/carInfo/VINCode";
import UseCarName from "@/components/crm/textbox/Public/customerInfos/UseCarName";
import CarBrand from "@/components/crm/textbox/Public/carInfo/CarBrand";
import CarModel from "@/components/crm/textbox/Public/carInfo/CarModel";
import GearBoxName from "@/components/crm/textbox/Public/carInfo/GearBoxName";
import LeakMount from "@/components/crm/textbox/Public/carInfo/LeakMount";
import NumberAttributtion from "@/components/crm/textbox/customerInfo/NumberAttributtion";
import EngineNumber from "@/components/crm/textbox/Public/customerInfos/EngineNumber";
import GearBoxNumber from "@/components/crm/textbox/Public/carInfo/GearBoxNumber";
//单据信息
import ServiceMenuNumber from "@/components/crm/textbox/Public/ServiceMenuNumber";
import ComplaintDate from "@/components/crm/Time/ComplaintDate";
import sct_ComplaintRoute from "@/components/crm/Select/Complaint/sct_ComplaintRoute";
import ComplaintTimes from "@/components/crm/textbox/Complaint/ComplaintTimes";
import SourceNumber from "@/components/crm/EjectWindows/SourceNumber";
import ErrorDate from "@/components/crm/Time/ErrorDate";
import ErrorDistance from "@/components/crm/textbox/Complaint/ErrorDistance";
import RunDistance from "@/components/crm/textbox/Complaint/RunDistance";
import ServiceType from "@/components/crm/EjectWindows/swd_complaintCategory";
import RelatedBenchmarkCar from "@/components/crm/EjectWindows/RelatedBenchmarkCar";
import ResponsibleAgent from "@/components/crm/EjectWindows/ResponsibleAgent";
import ResponsibleDepartment from "@/components/crm/EjectWindows/ResponsibleDepartment";
import OffsiteNetwork from "@/components/crm/EjectWindows/swd_Responsible";
import DutyPeoplePhone from "@/components/crm/textbox/Complaint/DutyPeoplePhone";
import ComplaintLevel from "@/components/crm/Select/Complaint/ComplaintLevel";
import WhetherUrgent from "@/components/crm/Select/Whether/WhetherUrgent";
import JobDescription from "@/components/crm/textbox/Complaint/JobDescription";
import Remarks from "@/components/crm/textbox/Complaint/Remarks";
import Table from "@/components/crm/table/Table";

export default {
  name: "ComplAppealDeal",
  components: {
    txt_CustomerName,
    Sex,
    PhoneNumber,
    BackupPhone,
    VINCode,
    UseCarName,
    CarBrand,
    CarModel,
    GearBoxName,
    LeakMount,
    NumberAttributtion,
    EngineNumber,
    GearBoxNumber,
    UseCarPhone,
    CarSeries,
    CarBrandNumber,

    ServiceMenuNumber,
    ComplaintDate,
    sct_ComplaintRoute,
    ComplaintTimes,
    SourceNumber,
    ErrorDate,
    ErrorDistance,
    RunDistance,
    ServiceType,
    RelatedBenchmarkCar,
    ResponsibleAgent,
    ResponsibleDepartment,
    OffsiteNetwork,
    DutyPeoplePhone,
    ComplaintLevel,
    WhetherUrgent,
    JobDescription,
    Remarks,
    Table
  },
  data() {
    return {
      activeName: "first",
      form: {
        Numattr: {
          input: ""
        },
        vCartypeDesc: {
          input: ""
        },
        carBrandCn: {
          input: ""
        },
        engineNo: {
          input: ""
        },
        vin: {
          input: ""
        },
        carLicense: {
          input: ""
        },
        vCarseriesDesc: {
          input: ""
        },
        backupTel: {
          input: ""
        },
        usePhone: {
          input: ""
        },
        useCustName: {
          input: ""
        },
        useBackupTel: {
          input: ""
        },
        contactTel: {
          input: ""
        },
        custName: {
          input: ""
        },
        gender: {
          value: ""
        },
        useGenderCode: {
          value: ""
        },
        serverOrder: {
          input: ""
        },
        createdDate: {
          value: ""
        },
        serverSourceCode: {
          value: ""
        },
        addQty: {
          input: ""
        },
        linkBillCode: {
          input: "",
          dialogVisible: false
        },
        faultDate: {
          value: ""
        },
        faultMileage: {
          input: ""
        },
        mileage: {
          input: ""
        },
        serverFullClassName: {
          input: "",
          dialogVisible: false
        },
        baseSeriesName: {
          input: "",
          dialogVisible: false
        },
        dutyDlrName: {
          input: "",
          dialogVisible: false
        },
        nextDealOrgName: {
          input: "",
          dialogVisible: false
        },
        nextDealEmpName: {
          input: "",
          dialogVisible: false
        },
        nextDealPhone: {
          input: ""
        },
        serverLevel: {
          value: ""
        },
        serverUrgency: {
          value: ""
        },
        distRemark: {
          input: ""
        },
        remark: {
          input: ""
        }
      },
      tabledatasZJ: {
        // 操作列
        ismuti: false,
        isoperat: false,
        havedistrbute: false,
        haveEdit: false,
        haveDel: false,
        colnames: [
          { label: "日期", value: "createdDate" },
          { label: "摘要", value: "serverTitle" },
          { label: "客户要求", value: "custRequirement" },
          { label: "投诉内容", value: "complainDesc" },
          { label: "坐席回答", value: "serverAnswer" }
        ],
        queryObj: {
          // .后面是服务编码，.前面固定写死
          apiConfig: crmApis.csBuComplaintOrderQueryFindAll,
          apiQueryRow: [
            "createdDate",
            "serverTitle",
            "custRequirement",
            "complainDesc",
            "serverAnswer"
          ],
          params: {
            oemCode: "1",
            groupCode: "1",
            serverOrder: "1"
          }
        }
      },
      tabledatasJL: {
        // 操作列
        ismuti: false,
        isoperat: false,
        havedistrbute: false,
        haveEdit: false,
        haveDel: false,
        colnames: [
          { label: "申请时间", value: "applyTime" },
          { label: "申请原因", value: "delayReson" },
          { label: "审核人", value: "shPersonName" },
          { label: "审核状态", value: "delayStatus" },
          { label: "审核意见", value: "shDes" },
          { label: "审核时间", value: "shTimie" }
        ],
        queryObj: {
          // .后面是服务编码，.前面固定写死
          apiConfig: crmApis.csBuComplaintDelayQueryFindAll,
          apiQueryRow: [
            "applyTime",
            "delayReson",
            "shPersonName",
            "delayStatus",
            "shDes",
            "shTimie"
          ],
          params: {
            oemCode: "1",
            groupCode: "1",
            serverOrder: ""
          }
        }
      }
    };
  },
  mounted: function() {
    ;
    this.$nextTick(function() {
      this.initData(this.$route.params.serverOrder);
    });
  },
  methods: {
    initData(fwdh) {
      ;
      let that = this;
      if (fwdh == undefined) {
        return;
      }
      let queryObj = {
        // api配置
        apiConfig: crmApis.csBuComplaintOrderQueryFindAll,
        // 需要调用的API服务配置
        apiServices: [
          {
            //表格中台返回网格的字段
            apiQueryRow: [
              "addQty",
              "backupTel",
              "baseSeriesCode",
              "baseSeriesName",
              "bigClassCode",
              "carBrandCn",
              "carBrandCode",
              "carLicense",
              "caseTime",
              "closeResult",
              "complainDesc",
              "contactTel",
              "createdDate",
              "crruNode",
              "crruNodeName",
              "custAge",
              "custName",
              "custNo",
              "custRequirement",
              "custTag",
              "dealDlrCode",
              "dealDlrName",
              "distRemark",
              "dutyDlrCode",
              "dutyDlrName",
              "dutyObj",
              "empName",
              "engineNo",
              "faultDate",
              "faultMileage",
              "gender",
              "genderName",
              "invoiceDate",
              "isAsseName",
              "lastUpdatedDate",
              "linkBillCode",
              "mileage",
              "nextDealEmpName",
              "nextDealOrgName",
              "nextDealPhone",
              "remark",
              "requOrgCode",
              "requOrgName",
              "reviewScore",
              "serverAnswer",
              "serverClassCode",
              "serverFullClassName",
              "serverId",
              "serverLevel",
              "serverLevelName",
              "serverOrder",
              "serverSourceCode",
              "serverSourceName",
              "serverTitle",
              "serverUrgency",
              "serverUrgencyName",
              "status",
              "statusName",
              "useBackupTel",
              "useCustAge",
              "useCustName",
              "useGenderCode",
              "useGenderName",
              "usePhone",
              "vCarseriesDesc",
              "vCartypeDesc",
              "vin"
            ]
          }
        ],
        //条件/实体参数（变量），根据typeParam中的定义配置
        variables: {
          pageSize: 10,
          pageIndex: 1,
          //当前中台使用的名称有dataInfo、info，具体查看API文档
          dataInfo: {
            oemCode: "1",
            groupCode: "1",
            serverOrder: fwdh
          }
        }
      };
      //转换了中台请求格式数据
      var paramD = that.$getParams(queryObj);
      // 调用中台API方法（可复用）
      requestGraphQL(paramD).then(response => {
        if (
          response.data[queryObj.apiConfig.ServiceCode].result == "1" 
          //&&response.data[queryObj.apiConfig.ServiceCode].rows != ""
        ) {
          ;
          let results = response.data[queryObj.apiConfig.ServiceCode].rows[0];
          for (let key in that.form) {
            if ("input" in that.form[key]) {
              if (results.hasOwnProperty(key)) {
                that.form[key].input = results[key];
                that.$refs[key].getData();
              }
            } else {
              if (results.hasOwnProperty(key)) {
                that.form[key].value = results[key];
                that.$refs[key].getData();
              }
            }
          }
          that.tabledatasZJ.queryObj.params.serverOrder = fwdh;
          setTimeout(function() {
            ;
            if (that.$refs.tableZJ != undefined) {
              that.$refs.tableZJ.getData();
            }
          }, 100);
        }else{
          that.$crmcf.showMessages(that,'error',response.data[queryObj.apiConfig.ServiceCode].msg)
        }
      });
    },
    handleClick(tab, event) {
      // 
      // 点击投诉时显示转商机和安抚结案按钮
      if (tab.name == "second") {
        let that = this;
        that.tabledatasJL.queryObj.params.serverOrder =
          that.$refs.serverOrder.input;
        setTimeout(function() {
          ;
          if (that.$refs.tableJL != undefined) {
            that.$refs.tableJL.getData();
          }
        }, 100);
      } else {
        let that = this;
        that.tabledatasZJ.queryObj.params.serverOrder =
          that.$refs.serverOrder.input;
        setTimeout(function() {
          ;
          if (that.$refs.tableZJ != undefined) {
            that.$refs.tableZJ.getData();
          }
        }, 100);
      }
      console.log(tab, event);
    },
    isInArray(arr, value) {
      ;
      for (var i = 0; i < arr.length; i++) {
        if (value === arr[i].key) {
          return true;
        }
      }
      return false;
    },
    setdatd() {
      ;
      let that = this;
      var results = [];
      var cityObj = {};
      cityObj["createdDate"] = "2019-08-23";
      cityObj["serverId"] = "11111111111";
      cityObj["serverOrder"] = "NTS19082300001";
      cityObj["serverFullClassName"] = "销售>保养政策>保养";
      cityObj["custName"] = "测试客户";
      cityObj["contactTel"] = "123";
      results.push(cityObj);
      for (let key in that.form) {
        if ("input" in that.form[key]) {
          if (results[0].hasOwnProperty(key)) {
            that.form[key].input = results[0][key];
            that.form.contactTel.input = that.$refs[key].getData();
          }
        } else {
          if (results[0].hasOwnProperty(key)) {
            ;
            that.form[key].value = results[0][key];
            that.$refs[key].getData();
          }
        }
      }
    }
  }
};
</script>
