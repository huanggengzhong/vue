<template>
  <section>
    <!-- 选择线索 -->
    <el-form-item label="联系电话">
      <el-input
        v-model="input"
        placeholder="请输入"
        style="margin:0;padding:0；width:50%"
        @blur="sendname">
      </el-input>
      <el-button
        class="icon-button"
        style="position: absolute;top: 0;right:0px;top: 3px;"
        @click.native="showdialog()"
        icon="el-icon-more-outline"
      ></el-button>
    </el-form-item>

    <!-- 弹窗 -->
    <el-dialog
      title="选择线索"
      :visible.sync="dialogVisible"
      width="900px"
      center
      modal-append-to-body
      append-to-body
    >
      <div class="filter-container filter-title-crm">
        查询条件
        <div style="float:right">
          <el-button type="primary" size="small" @click="fetchData()">查询</el-button>
          <el-button size="small" @click="handleSelect">确认</el-button>
          <el-button size="small" @click="reset">重置</el-button>
        </div>
      </div>
      <div class="filter-container filter-params-crm">
        <el-form>
          <el-row>
            <el-col :span="8">
              <ResponsibleAgent :ResponsibleAgent="cxAgent" ref="ResponsibleAgent" @CatData="getDlrCode"/>
            </el-col>
            <el-col :span="8">
              <swd_SalesConsultant :swd_SalesConsultant="cxConsult" ref="swd_SalesConsultant" @CatData="getCAEmp"/>
            </el-col>
            <el-col :span="8">
              <el-form-item label="建档日期">
                <el-date-picker
                  v-model="jdDate"
                  type="daterange"
                  range-separator="至"
                  start-placeholder="开始日期"
                  end-placeholder="结束日期"
                  value-format="yyyy-MM-dd"
                  prefix-icon="none"
                ></el-date-picker>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="8"><txt_CustomerName ref="txt_CustomerName" :txt_CustomerName="cxCustName"/></el-col>
            <el-col :span="8"><PhoneNumber ref="PhoneNumber" :PhoneNumber="cxPhone"/></el-col>
            <el-col :span="8">
              <CustomerSource :CustomerSource="cxSource" ref="CustomerSource" />
            </el-col>
          </el-row>
        </el-form>
      </div>
      <Table :tabledatas="tabledata" ref="table" />
    </el-dialog>
  </section>
</template>

<script>
import { crmApis } from "@/api/graphQLApiList/crm";
import { requestGraphQL } from "@/api/commonRequest";
import Table from "@/components/crm/table/Table";
import ResponsibleAgent from "@/components/crm/EjectWindows/ResponsibleAgent"; //网点多选
import swd_SalesConsultant from "@/components/crm/EjectWindows/swd_SalesConsultant"; //销售顾问
import txt_CustomerName from "@/components/crm/textbox/Public/customerInfos/txt_CustomerName";//客户名称
import PhoneNumber from "@/components/crm/textbox/Public/customerInfos/PhoneNumber";//电话
import CustomerSource from "@/components/crm/Select/Common/Customer/CustomerSource"; //客户来源

export default {
  name: "clueInfoPop",
  props: {
    clueInfoPop: {
      input: String,
      dialogVisible: Boolean
    }
  },
  components: {
    Table,
    ResponsibleAgent,
    swd_SalesConsultant,
    txt_CustomerName,
    PhoneNumber,
    CustomerSource
  },
  data() {
    return {
      rowData: {
        custName: "",
        genderCode: "",
        backTel: "",
        carSeriesCn: "",
        phone: "",
        smallCode: "",
        carLicenseNo: "",
        vin: "",
        engineNo: "",
        carBrandName: "",
        smallCarTypeCn: ""
      },
      cxDlrCode:"",
      cxCAEmp:"",
      jdDate:"",
      cxAgent: {
        input: "",
        labelname:"网点"
      },
      cxConsult: {
        input: ""
      },
      cxCustName: {
        input: ""
      },
      cxPhone: {
        input: ""
      },
      cxSource: {
        value: ""
      },
      input: "",
      dialogVisible: false,
      tabledata: {
        // 操作列
        ismuti: false,
        isoperat: false,
        havedistrbute: false,
        haveEdit: false,
        haveDel: false,
        colnames: [
          { label: "网点编码", value: "dlrCode" },
          { label: "网点名称", value: "dlrShortName" },
          { label: "销售顾问", value: "caEmpName" },
          { label: "线索编码", value: "serverOrder" },
          { label: "客户名称", value: "custName" },
          { label: "电话", value: "contactTel" },
          { label: "性别", value: "genderName" },
          { label: "客户来源", value: "custSource" },
          { label: "基准车系", value: "carSeriesCn" },
          { label: "意向车型编码", value: "inteTypeCode" },
          { label: "意向车型名称", value: "inteTypeName" },
          { label: "客户状态", value: "" },
          { label: "审核状态", value: "" },
          { label: "信息来源", value: "" },
          { label: "省份", value: "" },
          { label: "城市", value: "" },
          { label: "区县", value: "" },
          { label: "详细地址", value: "" },
          { label: "建档时间", value: "createdDate" },
          { label: "预计回访时间", value: "planReviewDate" },
          { label: "最近接洽时间", value: "reviewTimes" },
          { label: "线索状态", value: "statusName" }
        ],
        queryObj: {
          // .后面是服务编码，.前面固定写死
          apiConfig: crmApis.clueServerQueryFromDlr,
          apiQueryRow: [
            "dlrCode",
            "dlrShortName",
            "caEmpName",
            "serverOrder",
            "custName",
            "contactTel",
            "genderName",
            "custSource",
            "carSeriesCn",
            "inteTypeCode",
            "inteTypeName",
            "createdDate",
            "planReviewDate",
            "reviewTimes",
            "statusName"
          ],
          params: {
            handleCode:"1",
            statusArray:["10","20","21","30","31","40","50"],
            dlrCode:"",
            caEmpId:"",
            createdDateStart:"",
            createdDateEnd:"",
            custName:"",
            contactTel:"",
            custSource:""
          }
        },
        pagesize: 8,
        pageindex: 1,
        total: 0
      }
    };
  },
  methods: {
    fetchData() {
      let that = this;
      debugger
      that.tabledata.queryObj.params.dlrCode = that.cxDlrCode;
      that.tabledata.queryObj.params.caEmpId = that.cxCAEmp;
      that.tabledata.queryObj.params.createdDateStart = that.jdDate[0];
      that.tabledata.queryObj.params.createdDateEnd = that.jdDate[1];
      that.tabledata.queryObj.params.custName = that.$refs.txt_CustomerName.input;
      that.tabledata.queryObj.params.contactTel = that.$refs.PhoneNumber.input;
      that.tabledata.queryObj.params.custSource = that.$refs.CustomerSource.value;
      this.$refs.table.getData();
    },
    sendname() {
      let that = this;
      that.tabledata.queryObj.params.custName = that.input;
      this.fetchData();
    },
    showdialog: function() {
      let that = this;
      if (this.clueInfoPop.dialogVisible == false) {
        that.dialogVisible = this.clueInfoPop.dialogVisible;
      } else {
        that.dialogVisible = true;
      }
    },
    handleSelect: function(rowData) {
      let that = this;
      that.input = this.$refs.table.rowData.contactTel;
      that.$emit("CatData", this.$refs.table.rowData);
      that.dialogVisible = false;
    },
    getData() {
      let that = this;
      that.input = this.clueInfoPop.input;
    },
    reset: function() {
      this.$refs.ResponsibleAgent.reset();
      this.$refs.swd_SalesConsultant.reset();
      this.cxDlrCode="";
      this.cxCAEmp="";
      this.jdDate="";
      this.$refs.txt_CustomerName.reset();
      this.$refs.PhoneNumber.reset();
      this.$refs.CustomerSource.reset();
    },
    getDlrCode(val){
      let redata={};
      redata=val;
      this.cxDlrCode=redata[0].dlrCode
    },
    getCAEmp(val){
      let redata={};
      redata=val;
      this.cxCAEmp=redata[0].userId
    }
  }
};
</script>

<style scoped>
/* .dmo-form-inline {
  float: left;
  padding: 0px 15px;
  text-align: left;
  margin-top: 20px;
  width: 98%;
}
.dialog .el-dialog__body {
  padding: 10px 10px;
}
.dmo-form-inline .btton {
  float: right;
} */
</style>



