<template>
  <div class="app-container app-container-table">
    <div class="filter-container filter-button">
      <el-button type="primary" @click="query('1')">查询</el-button>
      <el-button @click="reset">重置</el-button>
    </div>
    <div class="filter-container filter-title-crm">查询条件</div>
    <div class="filter-container filter-params-crm">
      <el-form label-position="right">
        <el-row>
          <el-col :span="22">
            <el-row>
              <el-col :span="6">
                <BuildMenuDate :dt_BuildMenuDates="BuildMenuDate" ref="BuildMenuDate" />
              </el-col>
              <el-col :span="6">
                <ServiceMenuNumber :ServiceMenuNumber="ServiceMenuNumber" ref="ServiceMenuNumber" />
              </el-col>
              <el-col :span="6">
                <ReceiptStatus :ReceiptStatus="ReceiptStatus" ref="ReceiptStatus" />
              </el-col>
              <el-col :span="6">
                <ReplyStatus :ReplyStatus="ReplyStatus" ref="ReplyStatus" />
              </el-col>
            </el-row>
          </el-col>
          <el-col :span="2">
            <el-button icon="el-icon-plus" @click="changeToggleParam" class="moreParam">更多</el-button>
          </el-col>
          <el-col :span="22" v-show="toggleParam" class="toggleParam">
            <el-row>
              <el-col :span="6">
                <Applicant :Applicant="Applicant" ref="Applicant" />
              </el-col>
            </el-row>
          </el-col>
        </el-row>
      </el-form>
    </div>
    <div class="filter-container filter-title-crm">查询结果</div>
    <el-table :data="tabledatas.tableData" highlight-current-row style="width: 100%;height:355px;overflow:auto" v-loading.body="false" element-loading-text="Loading" border fit>
      <el-table-column type="index" label="序号" width="55"></el-table-column>
      <el-table-column label="操作" align="center">
        <template slot-scope="scope">
          <el-button type="text" size="mini" @click="handle(scope.$index, scope.row)">处理</el-button>
        </template>
      </el-table-column>
      <el-table-column v-for="item in tabledatas.colnames" :key="item.value" :label="item.label" :prop="item.value" align="center"></el-table-column>
    </el-table>
    <el-pagination background layout="prev, pager, next" :total="tabledatas.total" :page-size="tabledatas.pagesize" :current-page="tabledatas.pageindex" @prev-click="prev" @next-click="next" @current-change="changepage"></el-pagination>
  </div>
</template>
<script>
import BuildMenuDate from "@/components/crm/Time/dt_BuildMenuDates";
import ServiceMenuNumber from "@/components/crm/textbox/Public/ServiceMenuNumber";
import ReceiptStatus from "@/components/crm/Select/Clue/ReceiptStatus";
import ReplyStatus from "@/components/crm/Select/Complaint/ReplyStatus";
import Applicant from "@/components/crm/textbox/Clue/Applicant";
import { requestGraphQL } from "@/api/commonRequest";
import { crmApis } from "@/api/graphQLApiList/crm";
export default {
  name: "ComplaintAssist",
  components: {
    BuildMenuDate,
    ServiceMenuNumber,
    ReceiptStatus,
    ReplyStatus,
    Applicant
  },
  data() {
    return {
      BuildMenuDate: {
        value: []
      },
      ServiceMenuNumber: {
        input: ""
      },
      ReceiptStatus: {
        value: ""
      },
      ReplyStatus: {
        value: ""
      },
      Applicant: {
        input: ""
      },
      tabledatas: {
        colnames: [
          { label: "申请人", value: "applyPersonName" },
          { label: "申请时间", value: "applyTime" },
          { label: "建单日期", value: "createdDate" },
          { label: "服务单号", value: "serverOrder" },
          { label: "客户姓名", value: "custName" },
          { label: "联系方式", value: "contactTel" },
          { label: "建单人", value: "createdName" },
          { label: "投诉类别", value: "serverFullClassName" },
          { label: "车牌号", value: "carLicense" },
          { label: "VIN码", value: "vin" },
          { label: "车系", value: "linkCarName" },
          { label: "责任经销商", value: "dlrName" },
          { label: "单据状态", value: "serverStatus" },
          { label: "回复状态", value: "rpStatus" },
          { label: "回复时间", value: "helpTime" }
        ],
        tableData: [],
        queryObj: {
          // .后面是服务编码，.前面固定写死
          apiConfig: crmApis.csBuComplaintHelpQueryFindAll,
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
            "helpTime",
            "helpId",
            "applyTime"
          ],
          params: {
            serverStatus: "",
            rpStatus: "",
            applyPersonName: "",
            serverOrder: "",
            createdDateStart: "",
            createdDateEnd: ""
          }
        },
        pagesize: 10,
        pageindex: 1
      },
      toggleParam: false
    };
  },
  methods: {
    query: function(firstPage) {
      let that = this;
      that.tabledatas.queryObj.params.serverStatus = this.$refs.ReceiptStatus.value;
      that.tabledatas.queryObj.params.rpStatus = this.$refs.ReplyStatus.value;
      that.tabledatas.queryObj.params.applyPersonName =
        that.$refs.Applicant.input;
      that.tabledatas.queryObj.params.serverOrder =
        that.$refs.ServiceMenuNumber.input;
      that.tabledatas.queryObj.params.createdDateStart =
        that.$refs.BuildMenuDate.value[0];
      that.tabledatas.queryObj.params.createdDateEnd =
        that.$refs.BuildMenuDate.value[1];
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
          pageSize: that.tabledatas.pagesize,
          pageIndex: that.tabledatas.pageindex,
          //当前中台使用的名称有dataInfo、info，具体查看API文档
          dataInfo: that.tabledatas.queryObj.params
        }
      };
      if(firstPage){
        queryObj.variables.pageIndex=firstPage
      }
      //转换了中台请求格式数据
      var paramD = that.$getParams(queryObj);
      // 调用中台API方法（可复用）
      requestGraphQL(paramD).then(response => {
        if (response.data[queryObj.apiConfig.ServiceCode].result == "1") {
          that.tabledatas.tableData =
            response.data[queryObj.apiConfig.ServiceCode].rows;
          that.tabledatas.pageindex =
            response.data[queryObj.apiConfig.ServiceCode].pageindex;
          that.tabledatas.total =
            response.data[queryObj.apiConfig.ServiceCode].records;
        } else {
          this.$crmcf.showMessages(
            that,
            "error",
            response.data[queryObj.apiConfig.ServiceCode].msg
          );
        }
      });
    },
    prev() {
      let that = this;
      if (this.tabledatas.pageindex > 1) {
        that.tabledatas.pageindex = this.tabledatas.pageindex - 1;
        this.query();
      }
    },
    next() {
      let that = this;
      if (true) {
        that.tabledatas.pageindex = this.tabledatas.pageindex + 1;
        this.query();
      }
    },
    changepage(index) {
      let that = this;
      that.tabledatas.pageindex = index;
      this.query();
    },
    handle: function(index, rowData) {
      let that = this;
      //that.$router.push({ name: "ComplaintAssistHand", params: rowData });
      this.$crmcf.jumpDetailTag(
        that,
        "ComplaintAssistHand",
        "/ComplaintAssistHand",
        rowData
      );
    },
    reset: function() {
      this.$refs.BuildMenuDate.reset();
      this.$refs.ServiceMenuNumber.reset();
      this.$refs.ReceiptStatus.reset();
      this.$refs.ReplyStatus.reset();
      this.$refs.Applicant.reset();
    },
    changeToggleParam: function() {
      let that = this;
      that.toggleParam = !that.toggleParam;
    }
  }
};
</script>