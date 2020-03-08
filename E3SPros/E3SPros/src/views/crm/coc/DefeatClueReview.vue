<!--
* 描述: 战败线索审核
* 创建人: chq2
* 创建时间: 2019-08-06
* 记录：
*  2019-08-06 新建 chq2
* 修改 xgz 2019年8月15日17:08:44
-->
<template>
  <div class="app-container app-container-table">
    <div class="filter-container filter-button">
      <el-button type="primary" @click="query">查询</el-button>
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
              <IntentionalCar :IntentionalCar="ICar" ref="IntentionalCar"></IntentionalCar>
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
                <ApplicationTime :ApplicationTime="AppTime" ref="ApplicationTime"></ApplicationTime>
              </el-col>
              <el-col :span="6">
                <ContactWay :ContactWay="CWay" @changeCode="contactWayChange" ref="ContactWay"></ContactWay>
              </el-col>
              <el-col :span="6">
                <ChannelBigClass :ChannelBigClass="chanb" ref="chanb"></ChannelBigClass>
              </el-col>
              <el-col :span="6">
                <ChannelSmalTypeName :ChannelSmalTypeName="CSmalTypeName" ref="ChannelSmalTypeName"></ChannelSmalTypeName>
              </el-col>
              <el-col :span="6">
                <Applicant :Applicant="Appcant" ref="Applicant"></Applicant>
              </el-col>
              <el-col :span="6">
                <ClueNumber :ClueNumber="CNumber" ref="ClueNumber"></ClueNumber>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
      </el-form>
    </div>
    <!--审核弹窗开始-->
    <el-dialog
      title="审核页面"
      :visible.sync="dialogVisible"
      append-to-body
      width="500px"
      height="400px"
      style="position:fixed;top:0;right:0;left:0;bottom:0;margin:auto;"
    >
      <el-row>
        <el-col>
          <el-form label-position="right" ref="form" label-width="80px">
            <el-row>
              <el-col class="crm-label-required" style="display:none">
                <ClueNumber :ClueNumber="form.CNumber" ref="ClueNumberref" style="read"></ClueNumber>
              </el-col>
            </el-row>
            <el-row>
              <el-col class="crm-label-required">
                <el-form-item label="审核结果">
                  <div class='crm-default-select-area'> <span
                  :class="{'crm-selectedClass':checked}" 
                   plain @click="agree()">同意</span></div>
                 <div class='crm-default-select-area'> 
                  <span plain  
                   :class="{'crm-selectedClass':!checked}" 
                  @click="refuse()">驳回</span>
                  </div>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col class="crm-label-required">
                <CheckThought :CheckThought="form.Checkt" ref="CheckThought"></CheckThought>
              </el-col>
            </el-row>
            <el-row>
              <el-col>
                <el-button @click="Review('form')" style="float: right">审核</el-button>
              </el-col>
            </el-row>
          </el-form>
        </el-col>
      </el-row>
    </el-dialog>
    <!--审核弹窗结束-->
    <div class="filter-container filter-title-crm">查询结果</div>
    <el-table
      :data="tabledatas.tableData"
      highlight-current-row
      style="width: 100%;height:360px;overflow:auto"
      v-loading.body="listLoading"
      element-loading-text="Loading"
      border
      fit
    >
      <!-- <el-table-column type="selection" width="50"></el-table-column> -->
      <el-table-column type="index" label="序号" width="55"></el-table-column>
      <el-table-column label="操作" align="center" width="95">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="text"
            align="center"
            @click="handle(scope.$index, scope.row)"
          >审核</el-button>
        </template>
      </el-table-column>
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
      @prev-click="prev"
      @next-click="next"
      @current-change="changepage"
    ></el-pagination>
  </div>
</template>
<script>
import { crmApis } from "@/api/graphQLApiList/crm";
import { requestGraphQL } from "@/api/commonRequest";
import AppointmentReview from "@/views/crm/coc/AppointmentReview.vue";
import Applicant from "@/components/crm/textbox/Clue/Applicant.vue";
import Table from "@/components/crm/table/Table";
import txt_CustomerName from "@/components/crm/textbox/Public/customerInfos/txt_CustomerName.vue";
import PhoneNumber from "@/components/crm/textbox/Public/customerInfos/PhoneNumber.vue";
import IntentionalCar from "@/components/crm/EjectWindows/IntentionalCar.vue";
import IntentionLevel from "@/components/crm/Select/Common/Customer/IntentionLevel.vue";
import ApplicationTime from "@/components/crm/Time/ApplicationTime.vue";
import ContactWay from "@/components/crm/Select/Common/ContactWay.vue";
import ChannelBigClass from "@/components/crm/Select/Common/ChannelBigClass.vue";
import ChannelSmalTypeName from "@/components/crm/textbox/Clue/ChannelSmalTypeName.vue";
import ClueNumber from "@/components/crm/textbox/Clue/ClueNumber.vue";
import CheckResult from "@/components/crm/option/CheckResult.vue";
import CheckThought from "@/components/crm/textbox/Complaint/CheckThought.vue";
export default {
  name: "DefeatClueReview",
  components: {
    txt_CustomerName,
    PhoneNumber,
    IntentionalCar,
    IntentionLevel,
    ApplicationTime,
    ContactWay,
    ChannelBigClass,
    ChannelSmalTypeName,
    ClueNumber,
    Applicant,
    CheckResult,
    CheckThought
  },
  mounted: function() {
    console.log("进来了");
  },
  methods: {
    changeToggleParam() {
      this.toggleParam = !this.toggleParam;
    },
    showdialog: function() {
      let that = this;
      console.log("进来了");
      that.dialogVisible = true;
    },
    contactWayChange(val) {
      let that = this;
      that.chanb.pcode = val;
      if (that.$refs.chanb == undefined) {
      } else {
        that.$refs.chanb.getData();
      }
    },
    query: function() {
      let that = this;
      that.tabledatas.queryObj.params.serverOrder = this.$refs.ClueNumber.input;
      that.tabledatas.queryObj.params.custName = this.$refs.txt_CustomerName.input;
      that.tabledatas.queryObj.params.contactTel = that.$refs.PhoneNumber.input;
      that.tabledatas.queryObj.params.inteSeriesCode = this.$refs.IntentionalCar.rowData.carBrandCode;
      that.tabledatas.queryObj.params.clueLevelCode = this.$refs.IntentionLevel.value;
      if (this.$refs.ApplicationTime.value[0]) {
        that.tabledatas.queryObj.params.applicantTimeStart =
          this.$refs.ApplicationTime.value[0] + " 00:00:00";
        that.tabledatas.queryObj.params.applicantTimeEnd =
          this.$refs.ApplicationTime.value[1] + " 23:59:59";
      }
      that.tabledatas.queryObj.params.infoChanMCode = this.$refs.chanb.value;
      that.tabledatas.queryObj.params.cantactWayCode = this.$refs.ContactWay.value;
      that.tabledatas.queryObj.params.infoChanDCode = this.$refs.ChannelSmalTypeName.input;
      that.tabledatas.queryObj.params.applicantId = this.$refs.Applicant.input;
      that.listLoading = true;
        // 处理查询网格回调
      this.$crmcf.simpleTablequery(that, that.tabledatas, that.tabledatas.queryObj.apiConfig,function(data){
        that.tabledatas.tableData =data.rows;
        })
    },
    prev(index) {
      let that = this;
      that.tabledatas.pageIndex = index;
      this.query();
    },
    next(index) {
      let that = this;
      that.tabledatas.pageIndex = index;
      this.query();
    },
    changepage(index) {
      let that = this;
      that.tabledatas.pageIndex = index;
      this.query();
    },
    handle: function(index, rowData) {
      let that = this;
      that.applicantId = rowData.applicantId;
      that.crruNode = rowData.crruNode;
      that.form.CNumber.input = rowData.serverOrder;
      that.dialogVisible = true;
    },
    agree() {
      let that = this;
      that.checked=true
      that.form.result = "1";
    },
    refuse() {
      let that = this;
      that.checked=false
      that.form.result = "0";
    },
    Review(formName) {
      let that = this;
      let flag = false;
      var config = this.config;
      config = {
        CNumber: [
          true,
          this.$crmcf.crmRegExp("empty"),
          "input",
          that.$refs.ClueNumberref.input,
          "线索单号",
          "不能为空"
        ],
        result: [
          true,
          this.$crmcf.crmRegExp("empty"),
          "value",
          that.form.result,
          "审核结果",
          "不能为空"
        ],
        CheckThought: [
          true,
          this.$crmcf.crmRegExp("empty"),
          "input",
          that.$refs.CheckThought.input,
          "审核意见",
          "不能为空"
        ],
      };
      this.$crmcf.validForm(that, formName, config, function(flag) {
        if (flag) {
          let queryObj = {
            type: "mutation",
            // api配置
            apiConfig: crmApis.clueServerMutationDlrCheck,
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
                applicantId: that.applicantId,
                serverOrder: that.$refs.ClueNumberref.input,
                crruNode: that.crruNode,
                // serverOrderAndCrruNode: [
                //   that.$refs.ClueNumber.input + "&" + that.crruNode
                // ],
                auditResult: that.form.result,
                auitOpinion: that.$refs.CheckThought.input
              }
            }
          };
          //转换了中台请求格式数据
          var paramD = that.$getParams(queryObj);
          // 调用中台API方法（可复用）
          requestGraphQL(paramD).then(response => {
            if (
              response.data[queryObj.apiConfig.ServiceCode].result == "1" &&
              response.data[queryObj.apiConfig.ServiceCode].rows != ""
            ) {
              that.$notify({
                title: "成功",
                message: "保存成功！",
                type: "success"
              });
              that.dialogVisible = false;
            } else {
              that.$notify.error({
                title: "错误",
                message: response.data[queryObj.apiConfig.ServiceCode].msg
              });
            }
          });
        }
      });
    },
    reset: function() {
      this.$refs.txt_CustomerName.reset();
      this.$refs.PhoneNumber.reset();
      this.$refs.IntentionalCar.resetgz();
      this.$refs.IntentionLevel.reset();
      this.$refs.ApplicationTime.reset();
      this.$refs.ContactWay.reset();
      this.$refs.Applicant.reset();
      this.$refs.ClueNumber.reset();
      this.$refs.chanb.reset();
      this.$refs.ChannelSmalTypeName.reset();
    }
  },
  data() {
    return {
      listLoading: false,
      applicantId:'',
      crruNode: "",
      input: "",
      toggleParam: false,
      width: "900px",
      heigh: "580px",
      checked:true,//同意、驳回
      dialogVisible: false,

      form: {
        task: ""
      },
      formLabelWidth: "100px",
      tabledatas: {
        colnames: [
          { label: "客户名称", value: "custName", width: "100" },
          { label: "电话", value: "contactTel", width: "150" },
          { label: "申请人", value: "applicant", width: "100" },
          { label: "申请时间", value: "applicationTime", width: "200" },
          { label: "意向级别", value: "clueLevelCode", width: "100" },
          { label: "意向车系", value: "carSeriesCn", width: "150" },
          { label: "单据状态", value: "statusName", width: "150" },
          { label: "接触方式", value: "cantactWayName", width: "150" },
          { label: "渠道大类", value: "infoChanMName", width: "150" },
          { label: "渠道小类", value: "infoChanDName", width: "150" },
          { label: "线索单号", value: "serverOrder", width: "200" },
          { label: "建单日期", value: "createdDate", width: "200" }
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
            "clueLevelCode",
            "cantactWayName",
            "infoChanMName",
            "infoChanDName",
            "serverOrder",
            "applicantTime",
            "applicant",
            "applicantId",
            "createdName",
            "createdDate",
            "remainDataDate",
            "statusName",
            "crruNodeName",
            "caEmpName",
            "crruNode"
          ],
          params: {
            serverOrder: "",
            custName: "",
            inteSeriesCode: "",
            carBrandCode: "",
            clueLevelCode: "",
            applicantTimeStart: "",
            applicantTimeEnd: "",
            infoChanMCode: "",
            infoChanDCode: "",
            cantactWayCode: "",
            applicantId: "",
            handleCode: "1",
            statusArray: ["31"]
          }
        },
        pagesize: 8,
        pageindex: 1,
        total: 0
      },
      //初始化input
      CustName: {
        input: ""
      },
      PNumber: {
        input: ""
      },
      Appcant: {
        input: ""
      },
      CNumber: {
        input: ""
      },
      form: {
        CNumber: {
          input: ""
        },
        Checkt: {
          input: ""
        },
        result: "1"
      },

      //初始化value
      ICar: {
        value: ""
      },
      ILevel: {
        value: ""
      },
      AppTime: {
        value: ""
      },
      CWay: {
       value: ""
      },
      chanb: {
        value: "",
        pcode: ""
      },
      CSmalTypeName: {
        value: ""
      },
      CResult: {
        value: ""
      }
    };
  }
};
</script>
