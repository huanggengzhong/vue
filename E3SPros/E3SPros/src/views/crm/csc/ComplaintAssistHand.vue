<!--
* 描述: 投诉协助处理
* 创建人: zxuan
* 创建时间: 2019-08-3
* 记录：
*  
-->
<template>
  <div class="app-container app-container-table filter-params-crm-scroll">
    <div class="filter-container filter-button">
      <el-button type="primary" @click="ProgressFK('form')">进度反馈</el-button>
    </div>

    <div class="filter-container filter-title-crm">客户车辆信息</div>
    <div class="filter-container filter-params-crm filter-params-sub">
      <el-form label-position="right" disabled>
        <el-col :span="6">
          <txt_CustomerName :txt_CustomerName="form.custName" ref="custName"></txt_CustomerName>
        </el-col>
        <el-col :span="6">
          <Sex :Sex="form.genderName" ref="genderName"></Sex>
        </el-col>
        <el-col :span="6">
          <PhoneNumber :PhoneNumber="form.contactTel" ref="contactTel"></PhoneNumber>
        </el-col>
        <el-col :span="6">
          <BackupPhone :BackupPhone="form.backupTel" ref="backupTel"></BackupPhone>
        </el-col>

        <el-row>
          <el-col :span="6">
            <UseCarName :UseCarName="form.useCustName" ref="useCustName"></UseCarName>
          </el-col>
          <el-col :span="6">
            <Sex :Sex="form.useGenderName" ref="useGenderName"></Sex>
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
            <CarBrand :CarBrand="form.carBrandCode" ref="carBrandCode"></CarBrand>
          </el-col>
          <el-col :span="6">
            <CarModel :CarModel="form.vCartypeDesc" ref="vCartypeDesc"></CarModel>
          </el-col>
          <!-- <el-col :span="6">
            <GearBoxName :GearBoxName="form.Gearname" ref="Gearname"></GearBoxName>
          </el-col>
          <el-col :span="6">
            <GearBoxNumber :GearBoxNumber="form.Gearnum" ref="Gearnum"></GearBoxNumber>
          </el-col>-->
        </el-row>

        <!-- <el-row>
          <el-col :span="6">
            <LeakMount :LeakMount="form.Leakm" ref="Leakm"></LeakMount>
          </el-col>
          <el-col :span="6">
            <NumberAttributtion :NumberAttributtion="form.Numattr" ref="Numattr"></NumberAttributtion>
          </el-col>
        </el-row>-->
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
            <ComplaintRoute :sct_ComplaintRoute="form.serverSourceCode" ref="serverSourceCode" />
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
            <ServiceType
              :swd_complaintCategory="form.serverFullClassName"
              ref="serverFullClassName"
            />
          </el-col>
          <el-col :span="6">
            <RelatedBenchmarkCar
              :RelatedBenchmarkCar="form.baseSeriesName"
              ref="baseSeriesName"
            />
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="6">
            <ResponsibleAgent :ResponsibleAgent="form.dutyDlrName" ref="dutyDlrName" />
          </el-col>
          <el-col :span="6">
            <ResponsibleDepartment
              :ResponsibleDepartment="form.nextDealOrgName"
              ref="nextDealOrgName"
            />
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="6">
            <OffsiteNetwork :OffsiteNetwork="form.nextDealEmpName" ref="nextDealEmpName" />
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
      <el-form label-position="right" ref="form">
        <el-row>
          <el-col :span="6" class="crm-label-required">
            <el-form-item label="回复内容">
              <el-input
                type="textarea"
                class="long-textarea-style"
                resize="none"
                v-model="form.reply"
                :rows="2"
                placeholder="请输入"
              ></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </div>
    <!-- <el-table
      :data="tabledatas.tableData"
      highlight-current-row
      style="width: 100%;height:350px"
      max-height="350px"
      v-loading.body="false"
      element-loading-text="Loading"
      border
      fit
    >
      <el-table-column type="index" label="序号" width="55"></el-table-column>
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
    ></el-pagination>-->
  </div>
</template>
<script>
import { crmApis } from "@/api/graphQLApiList/crm";
import { requestGraphQL } from "@/api/commonRequest";
import Table from "@/components/crm/table/Table";
//客户车辆信息
import UseCarPhone from "@/components/crm/textbox/Public/customerInfos/UseCarPhone";
import txt_CustomerName from "@/components/crm/textbox/Public/customerInfos/txt_CustomerName";
import CustomersNameAdd from "@/components/crm/EjectWindows/CustomersName";
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
import ComplaintRoute from "@/components/crm/Select/Complaint/sct_ComplaintRoute";
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
import NextStepDutyPeople from "@/components/crm/textbox/Complaint/NextStepDutyPeople";
import withLinkEvent from "@/components/crm/Template/Opinion_withLinkEvent";
export default {
  name: "ComplaintAssistHand",
  components: {
    Table,
    txt_CustomerName,
    CustomersNameAdd,
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
    ComplaintRoute,
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
    NextStepDutyPeople,
    withLinkEvent
  },
  data() {
    return {
      active: 3,
      dialogVisible: false,
      fileList: [],
      xzHelpId: this.$route.params.helpId,
      form: {
        serverFullClassName: {
          input: "",
          dialogVisible: false
        },
        reply: "",
        Numattr: {
          input: ""
        },
        Leakm: {
          input: ""
        },
        Gearnum: {
          input: ""
        },
        Gearname: {
          input: ""
        },
        vCartypeDesc: {
          input: ""
        },
        carBrandCode: {
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
        genderName: {
          value: ""
        },
        useGenderName: {
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
        ServiceType: {
          input: ""
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
        DutyPeoplePhone: {
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
        },
        NextStepDutyPeople: {
          input: ""
        }
      },
      qqq: "",
      tabledatas: {
        colnames: [
          { label: "日期", value: "createdDate" },
          { label: "摘要", value: "serverTitle" },
          { label: "客户要求", value: "custRequirement" },
          { label: "投诉内容", value: "complainDesc" },
          { label: "坐席回答", value: "serverAnswer" }
        ],
        tableData: [],
        queryObj: {
          // .查询条件缺少责任人(姓名)  网格列也缺少责任人(姓名)
          apiConfig: crmApis.csBuComplaintOrderQueryFindAll,
          apiQueryRow: [
            "createdDate",
            "serverTitle",
            "custRequirement",
            "complainDesc",
            "serverAnswer"
          ]
          // params: {
          //   oemCode: "1",
          //   groupCode: "1",
          //   serverOrder: ""
          // }
        },
        pagesize: 10,
        pageindex: 1,
        total: 0
      }
    };
  },
  mounted: function() {
    this.$nextTick(function() {
      this.initData();
      this.initDataother();
    });
  },
  methods: {
    initData() {
      let that = this;
      let temp=this.$route.params.serverOrder;
      let queryObj = {
        // api配置
        apiConfig: crmApis.csBuComplaintHelpQueryFindAll,
        // 需要调用的API服务配置
        apiServices: [
          {
            //表格中台返回网格的字段
            apiQueryRow: [
              "applyPersonName",
              "createdDate",
              "serverOrder",
              "custName",
              "contactTel",
              "createdName",
              "serverFullClassName",
              "carLicense",
              "vin",
              "linkCarName",
              "dlrName",
              "serverStatus",
              "rpStatus",
              "helpTime"
            ]
          }
        ],
        //条件/实体参数（变量），根据typeParam中的定义配置
        variables: {
          pageSize: 10,
          pageIndex: 1,
          //当前中台使用的名称有dataInfo、info，具体查看API文档
          dataInfo: {
            serverOrder: temp,
            oemCode: this.$store.getters.orgInfo.OEM_CODE,
            groupCode: this.$store.getters.orgInfo.GROUP_CODE
          }
        }
      };
      //转换了中台请求格式数据
      var paramD = that.$getParams(queryObj);
      // 调用中台API方法（可复用）
      requestGraphQL(paramD).then(response => {
        if (response.data[queryObj.apiConfig.ServiceCode].result == "1") {
          let results = response.data[queryObj.apiConfig.ServiceCode].rows[0];
          for (let key in that.form) {
            if (that.form[key] && "input" in that.form[key]) {
              that.form[key].input = results[key];
            } else if (that.form[key] && "value" in that.form[key]) {
              that.form[key].value = results[key];
            }
            if (that.$refs[key] && that.$refs[key].getData) {
              that.$refs[key].getData();
            } else if (that.$refs[key] && that.$refs[key].getNewData) {
              that.$refs[key].getNewData();
            }
          }
        }else{
          that.$crmcf.showMessages(that,'error',response.data[queryObj.apiConfig.ServiceCode].msg)
        }
      });
    },
    initDataother() {
      let that = this;
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
              "dealDlrCode",
              "dealDlrName",
              "distRemark",
              "dutyDlrCode",
              "dutyDlrName",
              "dutyObj",
              "empName",
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
            serverOrder: this.$route.params.serverOrder,
            oemCode: this.$store.getters.orgInfo.OEM_CODE,
            groupCode: this.$store.getters.orgInfo.GROUP_CODE
          }
        }
      };
      //转换了中台请求格式数据
      var paramD = that.$getParams(queryObj);
      // 调用中台API方法（可复用）
      requestGraphQL(paramD).then(response => {
        if (response.data[queryObj.apiConfig.ServiceCode].result == "1") {
          let results = response.data[queryObj.apiConfig.ServiceCode].rows[0];
          for (let key in that.form) {
            if (that.form[key] && "input" in that.form[key]) {
              that.form[key].input = results[key];
            } else if (that.form[key] && "value" in that.form[key]) {
              that.form[key].value = results[key];
            }
            if (that.$refs[key] && that.$refs[key].getData) {
              that.$refs[key].getData();
            } else if (that.$refs[key] && that.$refs[key].getNewData) {
              that.$refs[key].getNewData();
            }
          }
          that.tabledatas.tableData =
            response.data[queryObj.apiConfig.ServiceCode].rows;
          that.tabledatas.pageindex =
            response.data[queryObj.apiConfig.ServiceCode].pageindex;
          that.tabledatas.total =
            response.data[queryObj.apiConfig.ServiceCode].records;
        }else{
          that.$crmcf.showMessages(that,'error',response.data[queryObj.apiConfig.ServiceCode].msg)
        }
      });
    },
    // prev(index) {
    //   let that = this;
    //   that.tabledatas.pageindex = index;
    //   this.query();
    // },
    // next(index) {
    //   let that = this;
    //   that.tabledatas.pageindex = index;
    //   this.query();
    // },
    // changepage(index) {
    //   let that = this;
    //   that.tabledatas.pageindex = index;
    //   this.query();
    // },
    ProgressFK(formName) {
      let that = this;
      let flag = false;
      var config = this.config;
      config = {
        reply: [
          true,
          this.$crmcf.crmRegExp("empty"),
          "value",
          that.form.reply,
          "回复内容",
          "不能为空"
        ],
      };
      that.$crmcf.validForm(that, formName, config, function(flag) {
        if (flag) {
          let queryObj = {
            // api配置
            type: "mutation",
            apiConfig: crmApis.complaintHelpRpMutationSave,
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
                helpId: that.xzHelpId,
                dealDes: that.form.reply,
                oemCode: that.$store.getters.orgInfo.OEM_CODE,
                groupCode: that.$store.getters.orgInfo.GROUP_CODE
              }
            }
          };
          //转换了中台请求格式数据
          var paramD = that.$getParams(queryObj);
          // 调用中台API方法（可复用）
          requestGraphQL(paramD).then(response => {
            if (response.data[queryObj.apiConfig.ServiceCode].result == "1") {
              that.$crmcf.showMessages(that,'success','操作成功！')
              that.$crmcf.crmcloseView(that,'ComplaintAssist')
            } else {
              that.$crmcf.showMessages(that,'error',response.data[queryObj.apiConfig.ServiceCode].msg)
            }
          });
        }
      });
    },
    submitUpload() {}
  }
};
</script>
<style>
</style>
