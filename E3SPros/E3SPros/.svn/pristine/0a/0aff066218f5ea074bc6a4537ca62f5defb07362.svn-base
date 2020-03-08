<template>
  <section>
    <!-- 弹窗 -->
    <el-dialog
      title="划转日志"
      :visible.sync="dialogVisible"
      :append-to-body="true"
      @sentData="sendCode"
      width="900px"
      center
    >
      <div class="filter-container filter-title">
        查询条件
        <div style="float:right">
          <el-button type="primary" size="small" @click="query">查询</el-button>
          <el-button size="small" @click="expor">导出</el-button>
          <el-button size="small" @click="reset">重置</el-button>
        </div>
      </div>
      <div class="filter-container filter-params">
        <el-form>
          <el-row>
            <el-col :span="8">
              <dlrAgent :swd_AgentMuti="agentData" />
            </el-col>
            <el-col :span="8">
              <el-form-item label="客户名称">
                <el-input v-model="custname"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="电话">
                <el-input v-model="tel"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <SalesMan :swd_SalesConsultant="oldsale" />
            </el-col>
            <el-col :span="8">
              <SalesMan :swd_SalesConsultant="newsale" />
            </el-col>
            <el-col :span="8">
              <IntentionLevel :IntentionLevel="interLevel" />
            </el-col>
            <el-col :span="8">
              <el-form-item label="划转日期">
                <el-date-picker
                  v-model="transDate"
                  type="daterange"
                  range-separator="至"
                  start-placeholder="开始日期"
                  end-placeholder="结束日期"
                ></el-date-picker>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </div>
      <div class="filter-container filter-title">查询结果</div>
      <el-table
        :data="tabledatas.tableData"
        @current-change="SelectH"
        highlight-current-row
        style="width: 100%;height:330px"
        v-loading.body="false"
        element-loading-text="Loading"
        border
        fit
        ref="multipleTable"
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
      ></el-pagination>
    </el-dialog>
  </section>
</template>

<script>
import Table from "@/components/crm/table/Table";
import dlrAgent from "@/components/crm/EjectWindows/swd_AgentMuti";
import { crmApis } from "@/api/graphQLApiList/crm";
import { requestGraphQL } from "@/api/commonRequest";
import SalesMan from "@/components/crm/EjectWindows/swd_SalesConsultant";
import IntentionLevel from "@/components/crm/Select/Common/Customer/IntentionLevel";
export default {
  name: "swd_SalesConsultant",
  components: {
    Table,
    dlrAgent,
    IntentionLevel,
    SalesMan
  },
  props: {
    transferLog: {
      input: String,
      dialogVisible: Boolean
    }
  },
  data() {
    return {
      dialogVisible: false,
      agentData: {
        input: ""
      },
      custname: "",
      tel: "",
      transDate: [],
      oldsale: {
        input: "",
        labelname: "原销售顾问"
      },
      newsale: {
        input: "",
        labelname: "新销售顾问"
      },
      interLevel: {
        value: ""
      },
      tabledatas: {
        colnames: [
          { label: "网点", value: "dlr" },
          { label: "客户名称", value: "custname" },
          { label: "电话", value: "tel" },
          { label: "原销售顾问", value: "oldsale" },
          { label: "新销售顾问", value: "newsale" },
          { label: "划转日期", value: "transDate" },
          { label: "意向级别", value: "interLevel" },
        ],
        tableData: [],
        queryObj: {
          // .后面是服务编码，.前面固定写死
          apiConfig: crmApis,
          apiQueryRow: [
            //"empId",
            "empName",
            "dlrId",
            "dlrCode",
            "positionId",
            "positionCode",
            "userId",
            "userName"
          ],
          params: {
            empName: "",
            isEnable: "1",
            positionCode: "VE0001",
            dlrCode: ""
          }
        },
        pagesize: 10,
        pageindex: 1,
        total: 0
      }
    };
  },
  methods: {
    showdialog: function() {
      let that = this;
      console.log("进来了");
      that.dialogVisible = true;
    },
    //赋值事件
    getData: function() {
      let that = this;
      that.input = this.swd_SalesConsultant.input;
      this.query();
    },
    query: function() {
      let that = this;
      if (that.$refs.SalesConsultant == undefined) {
        that.tabledatas.queryObj.params.empName = "";
      } else {
        that.tabledatas.queryObj.params.empName =
          that.$refs.SalesConsultant.input;
      }
      that.tabledatas.queryObj.params.dlrCode = this.$store.getters.orgInfo.DLR_CODE;

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
      //转换了中台请求格式数据
      var paramD = that.$getParams(queryObj);
      // 调用中台API方法（可复用）
      requestGraphQL(paramD).then(response => {
        if (
          response.data[queryObj.apiConfig.ServiceCode].result == "1"
          //&&response.data[queryObj.apiConfig.ServiceCode].rows != ""
        ) {
          that.tabledatas.tableData =
            response.data[queryObj.apiConfig.ServiceCode].rows;
          that.tabledatas.pageindex =
            response.data[queryObj.apiConfig.ServiceCode].pageindex;
          that.tabledatas.total =
            response.data[queryObj.apiConfig.ServiceCode].records;
        }
      });
    },
    reset: function() {
      let that = this;
      if (that.$refs.SalesConsultant == undefined) {
      } else {
        this.$refs.SalesConsultant.reset();
      }
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
    //行选择事件
    SelectH: function(row) {
      let that = this;
      that.rowData.empName = row.empName;
      that.rowData.dlrCode = row.dlrCode;
      that.rowData.userId = row.userId;
    },
    sendCode() {
      let that = this;
      that.dialogVisible = false;
      that.input = that.rowData.empName;
      var cityTemp = [];
      var cityObj = {};
      cityObj["empName"] = that.rowData.empName;
      cityObj["dlrCode"] = that.rowData.dlrCode;
      cityObj["userId"] = that.rowData.userId;
      cityTemp.push(cityObj);
      that.$emit("CatData", cityTemp);
    },
    init(){
      let that=this
      that.dialogVisible=this.transferLog.dialogVisible
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
  width: 98%
}
.dialog .el-dialog__body {
  padding: 10px 10px;
}
.dmo-form-inline .btton {
  float: right;
} */
</style>



