<template>
  <div class="app-container app-container-table">
    <div class="filter-container filter-button">
      <el-button type="primary" size="small" @click="query()">查询</el-button>
      <el-button size="small" @click="reset()">重置</el-button>
    </div>

    <div class="filter-container filter-title-crm">查询条件</div>
    <div class="filter-container filter-params-crm">
      <el-form label-position="right">
        <el-row>
          <el-col :span="6">
            <ReceiptType :ReceiptType="Rece" ref="recei"></ReceiptType>
          </el-col>
          <el-col :span="6">
            <BuildMenuDate :dt_BuildMenuDates="Buil" ref="build"></BuildMenuDate>
          </el-col>
          <el-col :span="6">
            <ServiceMenuNumber :ServiceMenuNumber="Serv" ref="service"></ServiceMenuNumber>
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
        <el-table-column type="selection" width="50" v-if="isdisplay.ismuti"></el-table-column>
        <el-table-column type="index" label="序号" width="60"></el-table-column>
        <el-table-column label="操作" align="center">
          <!-- scope.row:选中的一行数据 -->
          <!-- 打开新建服务单（带值） -->
          <template slot-scope="scope">
            <el-button size="mini" type="text" @click="edit(scope.$index, scope.row)">处理</el-button>
          </template>
        </el-table-column>
        <el-table-column
          v-for="item in tabledata.colnames"
          :key="item.value"
          :label="item.label"
          :prop="item.value"
          align="center"
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
      <!-- <Table :tabledatas="tabledata" ref="table" class="table"></Table> -->
    </el-row>
  </div>
</template>
<script>
import ReceiptType from "@/components/crm/Select/Common/ReceiptType";
import BuildMenuDate from "@/components/crm/Time/dt_BuildMenuDates";
import ServiceMenuNumber from "@/components/crm/textbox/Public/ServiceMenuNumber";
import txtCustomerName from "@/components/crm/textbox/Public/customerInfos/txt_CustomerName";
import PhoneNumber from "@/components/crm/textbox/Public/customerInfos/PhoneNumber";
import DispatchTime from "@/components/crm/Time/DispatchTime";
import Table from "@/components/crm/table/Table";
import { crmApis } from "@/api/graphQLApiList/crm";
import { requestGraphQL } from "@/api/commonRequest";

export default {
  name: "crmMyDraftBox",
  components: {
    ReceiptType,
    BuildMenuDate,
    ServiceMenuNumber,
    PhoneNumber,
    DispatchTime,
    Table
  },
  data() {
    return {
      Rece: {
        value: ""
      },
      Buil: {
        value: ""
      },
      Serv: {
        input: ""
      },
      isdisplay: {
        ismuti: false
      },
      tabledata: {
        // isoperat: true,
        havedistrbute: false,
        haveEdit: false,
        haveDel: false,
        flag: true,
        colnames: [
          { label: "客户名称", value: "custName" },
          { label: "联系电话", value: "contactTel" },
          { label: "单据类型", value: "serverTypeName" },
          { label: "服务单号", value: "serverOrder" },
          { label: "建单人", value: "createdName" },
          { label: "建单时间", value: "createdDate" },
          { label: "车牌号", value: "carLicense" },
          { label: "VIN码", value: "vin" }
        ],
        tableDatas: [],
        queryObj: {
          apiConfig: crmApis.csGetMyDraftsQuery, //我的草稿箱
          apiQueryRow: [
            "custName",
            "contactTel",
            "serverTypeName",
            "serverOrder",
            "carLicense",
            "createdName",
            "createdDate",
            "vin",
            "serverId",
            "serverType",
            "status"
            
          ],
          params: {
            beginCreatedDate: "",
            endCreatedDate: "",
            serverOrder:"",
            serverType:"",
            oemCode: "1",
            groupCode: "1"
          }
        },
        pageSize: 8,
        pageIndex: 1,
        total: 0
      }
    };
  },
  methods: {
    query: function() {
      let that = this;
      that.tabledata.queryObj.params.beginCreatedDate = this.$refs.build.value[0];
      that.tabledata.queryObj.params.endCreatedDate = this.$refs.build.value[1];
      that.tabledata.queryObj.params.serverType = this.$refs.recei.value;
      that.tabledata.queryObj.params.serverOrder = this.$refs.service.input;
      
      console.log(that.tabledata.queryObj.params);
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
          dataInfo: that.tabledata.queryObj.params
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
    changeToggleParam() {
      this.toggleParam = !this.toggleParam;
    },
    getDispatchTime(val) {
      this.listQuery.status = val;
    },
    edit(index, rowData) {
      let that = this;
      if(rowData.status=="0"){
      //that.$router.push({ name: "crmNewSerMenu", params: rowData });
      that.$crmcf.jumpDetailTag(that,'crmNewSerMenu','/crmNewSerMenu',rowData)}else{
          that.$crmcf.jumpDetailTag(that,'crmNewthread','/crmNewthread',rowData)
      }
    },
    reset: function() {
      // debugger
      this.$refs.recei.reset();
      this.$refs.build.reset();
      this.$refs.service.reset();
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
/* .filter-params .el-form-item__label {
  margin-right: 0px;
}
.el-form-item .el-form-item__content {
  margin-left: 0px;
} */
</style>