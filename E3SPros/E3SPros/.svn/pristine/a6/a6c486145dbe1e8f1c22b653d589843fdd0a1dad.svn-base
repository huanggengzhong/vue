<template>
  <div class="app-container app-container-table">
    <div class="filter-container filter-button" ref="searcheHeight">
      <el-button type="primary" @click="query()">查询</el-button>
      <el-button @click="reset()">重置</el-button>
    </div>

    <div class="filter-container filter-title-crm" ref="conTitleHeight">查询条件</div>
    <div class="filter-container filter-params-crm" ref="conHeight">
      <el-form label-position="right">
        <el-row>
          <el-col :span="22">
            <el-col :span="6">
              <ReceiptType :ReceiptType="Rece" ref="recei"></ReceiptType>
            </el-col>
            <el-col :span="6">
              <ServiceMenuNumber :ServiceMenuNumber="Serm" ref="sermu"></ServiceMenuNumber>
            </el-col>
            <el-col :span="6">
              <txtCustomerName :txt_CustomerName="Cust" ref="custn"></txtCustomerName>
            </el-col>
            <el-col :span="6">
              <PhoneNumber :PhoneNumber="Phone" ref="phone"></PhoneNumber>
            </el-col>
          </el-col>

          <el-col :span="2">
            <el-button icon="el-icon-plus" @click="changeToggleParam">更多</el-button>
          </el-col>
          <el-col :span="22" v-show="toggleParam" class="toggleParam">
            <el-row>
              <el-col :span="6">
                <DispatchTime :DispatchTime="Dist" ref="dist"></DispatchTime>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
      </el-form>
    </div>
    <div class="filter-container filter-title-crm" ref="resultTitleHeight">查询结果</div>
    <el-row class="table">
      <el-table
        :data="tabledata.tableDatas"
        :stripe="true"
        highlight-current-row
        style="width: 100%;height:335px;"
        v-loading.body="false"
        element-loading-text="Loading"
        border
        fit
      >
        <el-table-column type="index" label="序号" width="60"></el-table-column>
        <el-table-column label="操作" width="60">
          <!-- scope.row:选中的一行数据 -->
          <!-- 打开线索详情（带值） -->
          <template slot-scope="scope">
            <el-button size="mini" type="text" @click="detail(scope.$index, scope.row)">查看</el-button>
          </template>
        </el-table-column>
        <!-- 打开线索跟进历史查询（带值） -->
        <el-table-column
          v-for="item in tabledata.colnames"
          :key="item.value"
          :label="item.label"
          :prop="item.value"
          align="center"
          width="100"
        ></el-table-column>
      </el-table>
      <el-pagination
        background
        layout="prev, pager, next"
        :total="tabledata.total"
        :page-size="tabledata.pageSize"
        :current-page="tabledata.pageIndex"
        @prev-click="prev"
        @next-click="next"
        @current-change="changepage"
      ></el-pagination>
    </el-row>
  </div>
</template>
<script>
import ReceiptType from "@/components/crm/Select/Common/ReceiptType";
import ServiceMenuNumber from "@/components/crm/textbox/Public/ServiceMenuNumber";
import txtCustomerName from "@/components/crm/textbox/Public/customerInfos/txt_CustomerName";
import PhoneNumber from "@/components/crm/textbox/Public/customerInfos/PhoneNumber";
import DispatchTime from "@/components/crm/Time/DispatchTime";
import Table from "@/components/crm/table/Table";

import { crmApis } from "@/api/graphQLApiList/crm";
import { requestGraphQL } from "@/api/commonRequest";

export default {
  name: "crmMyHasBeenDone",
  components: {
    ReceiptType,
    ServiceMenuNumber,
    txtCustomerName,
    PhoneNumber,
    DispatchTime,
    Table
  },
  data() {
    return {
      Rece: {
        value: ""
      },
      Serm: {
        input: ""
      },
      Cust: {
        input: ""
      },
      Phone: {
        input: ""
      },
      Dist: {
        value1: "",
        value2: "",
        value: ""
      },
      toggleParam: false,
      tabledata: {
        isoperat: true,
        havedistrbute: false,
        haveEdit: false,
        haveDel: false,
        flag: true,
        colnames: [
          { label: "单据类型", value: "serverTypeName" },
          { label: "服务单号", value: "serverOrder" },
          { label: "客户姓名", value: "custName" },
          { label: "电话", value: "phone" },
          { label: "派单人", value: "distPerson" },
          { label: "派单时间", value: "distDate" },
          { label: "摘要", value: "title" },
          { label: "单据状态", value: "status" },
          { label: "动作", value: "action" },
          { label: "最近处理人", value: "lastDealPerson" },
          { label: "最近处理时间", value: "lastDealDate" }
        ],
        tableDatas: [],
        queryObj: {
          // .后面是服务编码，.前面固定写死
          apiConfig: crmApis.csBuMyTaskHisQueryFindAll, //我的已办查询
          // 返回字段
          apiQueryRow: [
            "serverType",
            "serverTypeName",
            "serverOrder",
            "custName",
            "phone",
            "distPerson",
            "distDate",
            "title",
            "status",
            "action",
            "lastDealPerson",
            "lastDealDate"
          ],
          // 查询参数
          params: {
            oemCode: "1",
            groupCode: "1",
            beginDistDate: "",
            endDistDate: "",
            serverType: "",
            serverOrder: "",
            custName: "",
            phone: ""
          }
        },
        pageSize: 10,
        pageIndex: 1,
        total:0
      }
    };
  },
  mounted: function() {
    let that = this;
    that.tabledata.queryObj.params = {
      oemCode: "1",
      groupCode: "1",
      beginDistDate: "",
      endDistDate: "",
      serverType: "",
      serverOrder: "",
      custName: "",
      phone: ""
    };
    this.query();
  },
  methods: {
    query() {
      let that = this;
      this.tabledata.queryObj.params.beginDistDate = this.$refs.dist.value[0];
      this.tabledata.queryObj.params.endDistDate = this.$refs.dist.value[1];
      this.tabledata.queryObj.params.serverType = this.$refs.recei.value;
      this.tabledata.queryObj.params.serverOrder = this.$refs.sermu.input;
      this.tabledata.queryObj.params.custName = this.$refs.custn.input;
      this.tabledata.queryObj.params.phone = this.$refs.phone.input;
      let queryObj = {
        // api配置
        type: "query",
        apiConfig: that.tabledata.queryObj.apiConfig,
        // 需要调用的API服务配置
        apiServices: [
          {
            //表格中台返回网格的字段
            apiQueryRow: that.tabledata.queryObj.apiQueryRow
          }
        ],
        //条件/实体参数（变量），根据typeParam中的定义配置
        variables: {
          pageSize: that.tabledata.pageSize,
          pageIndex: that.tabledata.pageIndex,
          //当前中台使用的名称有dataInfo、info，具体查看API文档
          dataInfo:that.tabledata.queryObj.params
        }
      };
      //转换了中台请求格式数据
      var paramD = that.$getParams(queryObj);
      // 调用中台API方法（可复用）
      requestGraphQL(paramD).then(response => {
        if (response.data[queryObj.apiConfig.ServiceCode].result == "1") {
          this.tabledata.tableDatas =
            response.data[queryObj.apiConfig.ServiceCode].rows;
            that.tabledata.pageIndex =
            response.data[queryObj.apiConfig.ServiceCode].pageindex;
          that.tabledata.total =
            response.data[queryObj.apiConfig.ServiceCode].records;
        }else {
              this.$crmcf.showMessages(that,'error',response.data[queryObj.apiConfig.ServiceCode].msg)
            }
      });
    },
    detail(index, rowData) {
      let that = this;
      //that.$router.push({ name: "ComplaintDetail", params: rowData });
      that.$crmcf.jumpDetailTag(that,'ComplaintDetail','/ComplaintDetail',rowData)
    },
    changeToggleParam() {
      this.toggleParam = !this.toggleParam;
    },
    getDispatchTime(val) {
      this.listQuery.status = val;
    },
    reset() {
      this.$refs.recei.reset();
      this.$refs.phone.reset();
      this.$refs.sermu.reset();
      this.$refs.custn.reset();
      this.$refs.dist.reset();
    },
    prev() {
      let that = this;
      if (this.tabledata.pageIndex > 1) {
        that.tabledata.pageIndex = this.tabledata.pageIndex - 1;
        this.query();
      }
    },
    next() {
      let that = this;
      if (true) {
        that.tabledata.pageIndex = this.tabledata.pageIndex + 1;
        this.query();
      }
    },
    changepage(index) {
      let that = this;
      that.tabledata.pageIndex= index;
      this.query();
    }
  }
};
</script>
<style>
.el-form-item .el-form-item__content {
  margin-left: 0px;
}
.filter-params .el-form-item__label {
  margin-right: 0px;
}
.filter-params .long-col .el-input {
  width: 85%;
}
.filter-params .long-col label {
  width: 15%;
}
.filter-params .long-col .el-textarea {
  width: 85%;
}
.el-form-item {
  text-align: center;
}
.el-table-column {
  padding: 0px;
  text-align: center;
}
.el-checkbox {
  padding-left: 6px;
}
.el-table th div {
  padding-right: 0px;
}
.el-table td,
.el-table th {
  padding-left: 0px;
  text-align: center;
  padding-right: 0px;
}
.el-table .cell {
  padding-left: 0px;
  text-align: center;
  padding-right: 0px;
}
</style>